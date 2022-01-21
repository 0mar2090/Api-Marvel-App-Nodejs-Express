
 /**
  * 01 - OPTION
  */

  var ts = '1';
  var apiKey = 'a1087fb2b9bd329e7dcd967db2e6a839';
  var md5 = '7a391475437bc8e67f4182bd472f4369';
  var limit = 60;

  const marvel = {
    render: () => {
      const urlAPI = 'https://gateway.marvel.com:443/v1/public/comics?&orderBy=focDate&ts='+ts+'&apikey='+apiKey+'&hash='+md5+'&limit='+ limit + '';
      const container = document.querySelector('#comics-marvel-row');
      let contentHTML = '';
  
      fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
          for (const data of json.data.results) {
            let URLid = data.urls[0].url;
            contentHTML += `
              <div class="col-md-3">
                  <a href="${URLid}" target="_blank">
                    <img src="${data.thumbnail.path}.${data.thumbnail.extension}" alt="${data.title}" class="img-thumbnail">
                 
                  <h5 class="card-title" >${data.title}</h5> </a>
                 
              </div>`;
          }
          container.innerHTML = contentHTML;
        })
    }
  };
  marvel.render();

  
 $("#backtoprofile").click(() => window.location.pathname = '/');

 $("#Nextoprofile").click(() => window.location.pathname = '/search/comicbook');
  /*
  * 02 - OPTION

 fetch('https://gateway.marvel.com:443/v1/public/comics?&orderBy=focDate&ts='+ts+'&apikey='+apiKey+'&hash='+md5+'&limit='+ limit + '')
     .then(res => res.json())
     .then(json =>{
       json.data.results.map(item =>{
         let URLid = item.urls[0].url
         appDiv.innerHTML += `
         <div class="col-md-3">
             <a href="${URLid}" target="_blank">
             <img src="${item.thumbnail.path}.${item.thumbnail.extension}" alt="${item.name}" class="img-thumbnail">
             <span class="card-title" >${item.name}</span> </a>
         </div>
         `
    })
     .catch(err => console.log(err));		
 })

   */
 
