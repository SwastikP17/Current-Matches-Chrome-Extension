async function getMatchData(){
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=89660457-dc6e-4849-8c7b-2902b61adfbd&offset=0")
        .then(data=>data.json())
        .then(data=>{
            if(data.status!="success") return;
            const matchesList=data.data;
            if(!matchesList) return [];

            const relevantData=matchesList.map(match=>`${match.name},${match.status}`);
            console.log(relevantData);
            // document.getElementById("matches").innerHTML=relevantData.map(match=>`<li>${match}</li>`).join('');
            document.getElementById("match-name").innerHTML=relevantData.map(match=>`<h5>${match}</h5>`).join('');

            return relevantData;


        })
        .catch(e=> console.log(e));

        
}

getMatchData();