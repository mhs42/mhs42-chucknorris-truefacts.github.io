$(document).ready(() =>
{
    const sendRequest = () =>
    {
        $.get("https://api.chucknorris.io/jokes/random", function(response)
        {
            true_fact = response.value;
            $("#true-fact").text(true_fact);
        })
    }

    $("#fact-getter").click(() =>
    {
        sendRequest();
    })
})