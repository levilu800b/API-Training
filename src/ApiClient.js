import axios from 'axios'

export class ApiClient {

  status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.statusText))
    }
  }

  getquoteByAuthor(authorId) {
    return this.getRequest(`https://api.quotable.io/quotes?authorId=${authorId}`)
  }

  getAuthors(skip, limit) {
    return this.getRequest(`https://api.quotable.io/authors?skip=${skip}&limit=${limit}`)
  }

  getQuote() {
    return this.getRequest("https://api.quotable.io/random")
  }

  getRequest(url) {
    return axios.get(url)
      .then(this.status)
      .catch(function (error) {
        // handle error
        console.error(error);
        alert(error)
      })
  }

}