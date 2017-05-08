import React, {Component} from 'react';
import Header from '../views/header.js';
import Footer from '../views/footer.js';


const req = new XMLHttpRequest();
var articles = null;

req.onreadystatechange = function(event) {
  if (this.readyState === XMLHttpRequest.DONE) {
    if (this.status === 200) {
      var res = JSON.parse(this.responseText);
      console.log(res);
      articles = res;
    } else {
      console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
    }
  }
};

req.open('GET', 'http://localhost:8080/articles', true);
req.send(null);

function getArticles(props) {
  const listItems = props.map((article) =>
    <li>
      <h1>{article.title}</h1><p>{article.content}</p>
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

function getArticleRow(props) {
  const listItems = props.map((article) =>
    <tr>
      <td>{article.title}</td>
      <td>{article.content}</td>
    </tr>
  );
  return (
    <tbody>{listItems}</tbody>
  );
}

function createArticle() {
  var title = document.getElementById("title").value;
  var content = document.getElementById("content").value;
  var data = {
    title: title,
    content: content,
  };
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:8080/newArticle", true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify(data));

}


export default class Blog extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div id="grid_page" class="grid-page">
          <h1 class="title">Blog</h1>
          <div class="form">
            <label>Title</label>
            <input type="text" id="title"/>
            <label>Content</label>
            <input type="text" id="content"/>
            <input class='flat-button' type="button" id="send" value="New Article" onClick={createArticle}/>
          </div>
          <table>
            <thead>
              <tr>
                <th>Titre</th>
                <th colspan="2">Contenu</th>
              </tr>
            </thead>
            {getArticleRow(articles)}
          </table>
          
        </div>
        <Footer/>
      </div>
    );
  }
};

