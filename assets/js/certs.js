fetch('certs/certs.json')
  .then(response => response.json())
  .then(certs => {
    let certList = document.getElementById('cert-list');
    certs.forEach(c => {
      let div = document.createElement('div');
      div.innerHTML = `<h3>${c.name}</h3><p>${c.issuer}</p><a href="certs/${c.file}" target="_blank">View Certificate</a>`;
      certList.appendChild(div);
    });
  });