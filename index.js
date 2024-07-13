/*
UU      UU     TTTTTTTTTTTT     TTTTTTTTTTTT    KK      KK
UU      UU          TT               TT         KK    KK
UU      UU          TT               TT         KK  KK
UU      UU          TT               TT         KKKK
UU      UU          TT               TT         KK  KK
UU      UU          TT               TT         KK    KK
   UUUU             TT               TT         KK      KK
*/
console.clear()
const {Client} = require("youtubei");
const fs = require("fs");
const term = require("terminal-kit").terminal
const youtube = new Client();
var count = 0
var mode = ""
var query = ""
var inc = 0
var sec = 0
var min = 0
var hour = 0
var fileCont0 = ""
var fileCont1 = ""
var fileCont2 = ""
term.drawImage("images/uttklogo.png", {terminal: term, shrink: { width: term.height, height: term.height } })
function txtDraw(){
  term("UU      UU     TTTTTTTTTTTT     TTTTTTTTTTTT    KK      KK \nUU      UU          TT               TT         KK    KK \nUU      UU          TT               TT         KK  KK \nUU      UU          TT               TT         KKKK \nUU      UU          TT               TT         KK  KK \nUU      UU          TT               TT         KK    KK \n  UUUUUU            TT               TT         KK      KK")
  console.log("\n")
}
txtDraw()




setInterval(function(){
  sec++
  if(sec >= 60){
    sec = 0
    min++
  }
  if(min >= 60){
    min = 0
    hour++}}, 1000 )
// This line had an unused function I gutted, as it was a non-functional duplicate of the increment function.
function terminate(c) {
  term.grabInput(false) ;
  setTimeout( function() { 
    fs.writeFileSync(`${mode}idlist.txt`, fileCont0);
      fs.writeFileSync(`${mode}namelist.txt`, fileCont1);
      fs.writeFileSync(`${mode}cmblist.txt`, fileCont2);
    if(c != 1){term 
       ("Before the script stopped, ")}
    term(`\n${count} channels have been fetched over the span of ${hour} hours, ${min} minutes, and ${sec} Seconds. The channel IDs have been saved to a text file.\n`);
    process.exitCode = c
    process.exit() } , 100 ) ; // Closes when Alt + Q or Ctrl + C is hit
}

async function main(rate,query){
  const channels = await youtube.search(query, { type: "channel", continuation: "Eu0FEgRVVFRQGuQFRWdJUUFrZ1VnZ0VZVlVOcGMyazJjblJpTVY5VlptUjJNMDB5TWxRMlltVlJnZ0VZVlVObVdsWjFiWHBKVW05bGRVMUJUM280WmkxalltRkJnZ0VZVlVOTGVqWlFWekV5Y1d0U05rSmZOblV5WDJ4elpqSm5nZ0VZVlVOeE4zaEJhV2RwWWxOWk5razNjalJtVjB0bU1tOTNnZ0VZVlVOQlNrWk5abmxYZDI5SE0wNURWRzlmV0RselYyTkJnZ0VZVlVNNFdsRlljVkJGTVcxT1dFazJPRWRDTWxaWGJVdG5nZ0VZVlVOdVlsQmhjUzFtTkZCVU1rdFNjMGQyTmt4ck5WSlJnZ0VZVlVOcU5HWjFXbFIyYmxsMlpVRnlYMk5IUVROeVgyeG5nZ0VZVlVOVmJUaHNhVXRqYmpOU1pXeHpZeTFNVlVaWWNuSjNnZ0VZVlVOUmRHSnlRVmhDVFVSWWRrTmxTRE15ZERGRmJFbFJnZ0VZVlVOU1kwTk5YMlJMWDBGamNUWlNZelZ4WWxaRWJIUm5nZ0VZVlVNMGNHbGpSbE5RUnpScFNrc3hkVFp4Y21GVE9FNW5nZ0VZVlVNNGVERnNjMGxCT0VkZlJWbEJSa1JUTVZoUmFGTkJnZ0VZVlVONGNFOVJNVjlRUVMxVkxVMTFTR0ZqTVU1eVJGRlJnZ0VZVlVOTldIb3RRWEpSVlhSaWVuVlpUM0YwVDNoRlFUSm5nZ0VZVlVOdFpYTkxaa3MxVjBJMmNUaFVVVmw2TkVwU1RuTkJnZ0VZVlVOaGJGUkdUbFpCU1U5blZHTldOMEpCZFVjelJIRm5nZ0VZVlVNMFQxOUJOazFuVW5aMFkwNVhXbmxmUm1SYWIwdDNnZ0VZVlVNMVgxaE5ZbFJCVVVKMWIxTnRhek5PWkVJdGRITlJnZ0VZVlVOemN6VnlURVpET0VsTFlWOWlWMXBZWm1wS1lXOW5zZ0VHQ2dRSUZSQUMYgeDoGCILc2VhcmNoLWZlZWQ%3D"
                                                              
  });
  var selch = channels.items[inc]
  let found = []
  term.grabInput(true)
  count = 0
  function add(){
    count++
    found.push(selch.id)
    fileCont0 = fileCont0 + `${selch.id} \n`
    fileCont1 = fileCont1 + `${selch.name} \n`
    fileCont2 = fileCont2 + `${selch.name} (${selch.id}) \n`
  }
  function increment(){
    term.moveTo(1, term.height - 1)
    term("")
    inc++
    selch = channels.items[inc]
      
    if (selch != undefined){
      if(!found.includes(selch.id)) {
        add()
      } else {
        channels.next()
      }
      console.clear()
      term.moveTo(1, 1)
      let ratio = count / inc
      txtDraw()
      term.wrap(`Run time: ${hour} hour(s), ${min} minute(s), and ${sec} second(s) 
    
Channels Fetched: ${count}  
    
Current increment: ${inc} 
    
Rate: ${rate}
   
Selected Channel: ${selch.name} 
    
Selected Channel's ID: ${selch.id}
    
Selected Channel's Subscriber(s): ${selch.subscriberCount}

Increment to Channel Ratio: ${ratio * 100}%
      `)
      term.on( 'key' , function( name , matches , data ) {
      if (name == "CTRL_C" || name == "ALT_Q") { terminate(1) ; }
      } ) ;
    } else if (count > 500) {
      console.log(`The script can't find any more channels to list. Exiting...`); terminate(0)
      
    } else {
      channels.next()
    }
  }
  
  setInterval(increment, rate)
}
function ratePrompt(){
  console.log("Set an interval, in milliseconds. Faster rates means its more likely to encounter the script stalling, due to getting duplicate entries, because of rate limits. \n ")
  term.inputField(function (error, input){
    if (typeof Number(input) != 'number'){
      console.log("Woops! You need to type an interval, in ms.")
      setTimeout(ratePrompt, 1000)
    } else {
      rate = input
      console.log("")
      try{
        main(input, query)
      }
        catch(error){
          console.log('The script has stopped due to the error below:')
          console.error(error)
          terminate(0)
      }
    }
  })
}
function nukePrompt(){
	console.log('Do you want to enable nuke mode to ignore Anti accounts? (y/N)')
	term.inputField(function (error, input){
	if (input != "y" && input != "Y"){
		query = `"${mode}" -A${mode} -Anti-${mode}`
	} else {
		query = `${mode}`
	}
	ratePrompt()
})
}
function modePrompt(){
	console.log("Set a query (E.X.: VGCP.) Leave blank to hit UTTP")
	term.inputField(function (error, input){
	if (input == ""){
	mode = 'UTTP'	
	} else {
	mode = input
	}
	nukePrompt()
})
}
try{setTimeout(modePrompt, 1000)}
catch(error){
  console.log(`The script has encountered an error, and can't continue. The error that killed the script is below: \n${error}`)
  terminate()
}
