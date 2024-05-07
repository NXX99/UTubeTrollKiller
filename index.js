const {Client} = require("youtubei");
const youtube = new Client();

// This line had an unused function I gutted, as it was a non-functional duplicate of the increment function.

const run = async () => {
  const channels = await youtube.search("UTTP", { // Simulates you manually searching "UTTP" in the Channels category
    type: "channel",
    continuation: "Eu0FEgRVVFRQGuQFRWdJUUFrZ1VnZ0VZVlVOcGMyazJjblJpTVY5VlptUjJNMDB5TWxRMlltVlJnZ0VZVlVObVdsWjFiWHBKVW05bGRVMUJUM280WmkxalltRkJnZ0VZVlVOTGVqWlFWekV5Y1d0U05rSmZOblV5WDJ4elpqSm5nZ0VZVlVOeE4zaEJhV2RwWWxOWk5razNjalJtVjB0bU1tOTNnZ0VZVlVOQlNrWk5abmxYZDI5SE0wNURWRzlmV0RselYyTkJnZ0VZVlVNNFdsRlljVkJGTVcxT1dFazJPRWRDTWxaWGJVdG5nZ0VZVlVOdVlsQmhjUzFtTkZCVU1rdFNjMGQyTmt4ck5WSlJnZ0VZVlVOcU5HWjFXbFIyYmxsMlpVRnlYMk5IUVROeVgyeG5nZ0VZVlVOVmJUaHNhVXRqYmpOU1pXeHpZeTFNVlVaWWNuSjNnZ0VZVlVOUmRHSnlRVmhDVFVSWWRrTmxTRE15ZERGRmJFbFJnZ0VZVlVOU1kwTk5YMlJMWDBGamNUWlNZelZ4WWxaRWJIUm5nZ0VZVlVNMGNHbGpSbE5RUnpScFNrc3hkVFp4Y21GVE9FNW5nZ0VZVlVNNGVERnNjMGxCT0VkZlJWbEJSa1JUTVZoUmFGTkJnZ0VZVlVONGNFOVJNVjlRUVMxVkxVMTFTR0ZqTVU1eVJGRlJnZ0VZVlVOTldIb3RRWEpSVlhSaWVuVlpUM0YwVDNoRlFUSm5nZ0VZVlVOdFpYTkxaa3MxVjBJMmNUaFVVVmw2TkVwU1RuTkJnZ0VZVlVOaGJGUkdUbFpCU1U5blZHTldOMEpCZFVjelJIRm5nZ0VZVlVNMFQxOUJOazFuVW5aMFkwNVhXbmxmUm1SYWIwdDNnZ0VZVlVNMVgxaE5ZbFJCVVVKMWIxTnRhek5PWkVJdGRITlJnZ0VZVlVOemN6VnlURVpET0VsTFlWOWlWMXBZWm1wS1lXOW5zZ0VHQ2dRSUZSQUMYgeDoGCILc2VhcmNoLWZlZWQ%3D"
  });
  let inc = 0
  function increment(){
    inc++
    channels.next()
    console.log(`${channels.items[inc].id}, `)
  }
  setInterval(increment, 100) // Cycles through each channel every tenth of a second
};
run()
