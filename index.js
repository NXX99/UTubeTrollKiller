/*
UU      UU     TTTTTTTTTTTT     TTTTTTTTTTTT    KK      KK
UU      UU          TT               TT         KK    KK
UU      UU          TT               TT         KK  KK
UU      UU          TT               TT         KKKK
UU      UU          TT               TT         KK  KK
 UU    UU           TT               TT         KK    KK
   UUUU             TT               TT         KK      KK
*/
const {Client} = require("youtubei");
const fs = require("fs");
const tkit = require("terminal-kit").terminal
const youtube = new Client();
var sec = 0
var min = 0
var hour = 0
var fileCont = ""
var fileCont1 = ""
tkit.drawImage("uttklogo.png", {terminal: tkit, shrink: { width: 64, height: 64 } })
console.log("UU      UU     TTTTTTTTTTTT     TTTTTTTTTTTT    KK      KK")
console.log("UU      UU          TT               TT         KK    KK")
console.log("UU      UU          TT               TT         KKKK")
console.log("UU      UU          TT               TT         KK  KK")
console.log("   UUUU             TT               TT         KK      KK")
console.log("\n \n \n")
function sWatch(){
  setInterval(function(){sec++}, 1000 )
  if(sec >= 60){
    sec = 0
    min++
  }
  if(min >= 60){
    min = 0
    hour++
  }
}
// This line had an unused function I gutted, as it was a non-functional duplicate of the increment function.
sWatch()
const run = async () => {
  const channels = await youtube.search("UTTP", { // Simulates you manually searching "UTTP" in the Channels category
    type: "channel",
    continuation: "Eu0FEgRVVFRQGuQFRWdJUUFrZ1VnZ0VZVlVOcGMyazJjblJpTVY5VlptUjJNMDB5TWxRMlltVlJnZ0VZVlVObVdsWjFiWHBKVW05bGRVMUJUM280WmkxalltRkJnZ0VZVlVOTGVqWlFWekV5Y1d0U05rSmZOblV5WDJ4elpqSm5nZ0VZVlVOeE4zaEJhV2RwWWxOWk5razNjalJtVjB0bU1tOTNnZ0VZVlVOQlNrWk5abmxYZDI5SE0wNURWRzlmV0RselYyTkJnZ0VZVlVNNFdsRlljVkJGTVcxT1dFazJPRWRDTWxaWGJVdG5nZ0VZVlVOdVlsQmhjUzFtTkZCVU1rdFNjMGQyTmt4ck5WSlJnZ0VZVlVOcU5HWjFXbFIyYmxsMlpVRnlYMk5IUVROeVgyeG5nZ0VZVlVOVmJUaHNhVXRqYmpOU1pXeHpZeTFNVlVaWWNuSjNnZ0VZVlVOUmRHSnlRVmhDVFVSWWRrTmxTRE15ZERGRmJFbFJnZ0VZVlVOU1kwTk5YMlJMWDBGamNUWlNZelZ4WWxaRWJIUm5nZ0VZVlVNMGNHbGpSbE5RUnpScFNrc3hkVFp4Y21GVE9FNW5nZ0VZVlVNNGVERnNjMGxCT0VkZlJWbEJSa1JUTVZoUmFGTkJnZ0VZVlVONGNFOVJNVjlRUVMxVkxVMTFTR0ZqTVU1eVJGRlJnZ0VZVlVOTldIb3RRWEpSVlhSaWVuVlpUM0YwVDNoRlFUSm5nZ0VZVlVOdFpYTkxaa3MxVjBJMmNUaFVVVmw2TkVwU1RuTkJnZ0VZVlVOaGJGUkdUbFpCU1U5blZHTldOMEpCZFVjelJIRm5nZ0VZVlVNMFQxOUJOazFuVW5aMFkwNVhXbmxmUm1SYWIwdDNnZ0VZVlVNMVgxaE5ZbFJCVVVKMWIxTnRhek5PWkVJdGRITlJnZ0VZVlVOemN6VnlURVpET0VsTFlWOWlWMXBZWm1wS1lXOW5zZ0VHQ2dRSUZSQUMYgeDoGCILc2VhcmNoLWZlZWQ%3D"
  });
  tkit.grabInput(true)
  function terminate() {
    tkit.grabInput(false) ;
    setTimeout( function() { 
      fs.writeFileSync("idlist.txt", fileCont);
      fs.writeFileSync("namelist.txt", fileCont1);
      console.log(`${inc} channels have been fetched over the span of ${hour} hours, ${min} minutes, and ${sec} Seconds. The channel IDs have been saved to a text file.`);
      process.exitCode = 1
      process.exit() } , 100 ) ; // Closes when Alt + Q or Ctrl + C is hit
  }
  let inc = 0
  let list = ""
  function increment(){
    channels.next()
    inc++
    
     
    console.log(`${channels.items[inc].id} (${channels.items[inc].name},) `)
    fileCont = fileCont + `${channels.items[inc].id} \n`
    fileCont1 = fileCont1 + `${channels.items[inc].name} \n`
    tkit.on( 'key' , function( name , matches , data ) {
      if (name == "CTRL_C") { terminate() ; }
    } ) ;
  }
  try {
    setInterval(increment, 100)
  } catch (error) {
    console.error(error);
    terminate()
  }
}
run()
