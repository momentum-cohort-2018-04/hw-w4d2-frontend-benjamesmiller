import benjames from "superagent"

function requestData (query) {
    if (query === '') { return }
    benjames.get(`https://api.github.com/users/${query}`)
      .then(function (result) {
        createtheBasics(result.body)
      })
  }

  requestData("benjamesmiller")
  function createtheBasics(basic) {
      const name = basic.name
      const bio = basic.bio
      const company = basic.company
      const githuburl = basic.html_url
      const website = basic.blog
      const pic = basic.avatar_url
      const title = document.querySelector(".title")
      const basics = document.querySelector(".basics")
      const story = document.querySelector(".story")
      const prof = document.querySelector(".pic")

      title.innerText = name
      basics.innerHTML = `<h3>The Basics</h3><br><div>Name: ${name} </div><br> <div>GitHub URL: ${githuburl}</div><br><div>Company: ${company}</div><br><div>Website: ${website}</div>`
      story.innerHTML = `<h3>The Story</h3><br><div> ${bio} </div>`
      prof.innerHTML = `<img src="${pic}">`
      
  }