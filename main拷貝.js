// 資料
let movies = [{
  title: 'The Avengers',
  image: 'https://bit.ly/2NQOG6H',
  rating: 0
},
{
  title: 'Our Times',
  image: 'https://bit.ly/2OsGmv2',
  rating: 0
},
{
  title: 'Aquaman',
  image: 'https://bit.ly/2zmcLxo',
  rating: 0
}]

// 函式
function displayMovieList(data) {
  let htmlContent = `
    <table class="table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Rating</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
    `//使用迴圈的方式
  for (let i = 0; i < movies.length; i++) {
    htmlContent += `
        <tr>
          <td>
            <img src = ${movies[i].image} width = "70" class="img-thumbnail" >
          </td>
          <td>${movies[i].title}</td>
          <td>
            <span class="fa fa-thumbs-up"></span>
            <span class="fa fa-thumbs-down px-2"></span>
            <span>${movies[i].rating}</span>
          </td>
          <td>
            <button class="btn btn-sm btn-danger">X</button>
          </td>
        </tr>
      `
  }
  // data.forEach((data) => {
  //   htmlContent += `
  //       <tr>
  //         <td>
  //           <img src = ${data.image} width = "70" class="img-thumbnail" >
  //         </td>
  //         <td>${data.title}</td>
  //         <td>
  //           <span class="fa fa-thumbs-up"></span>
  //           <span class="fa fa-thumbs-down px-2"></span>
  //           <span>${data.rating}</span>
  //         </td>
  //         <td>
  //           <button class="btn btn-sm btn-danger">X</button>
  //         </td>
  //       </tr>
  //     `
  // })

  htmlContent += `
      </tbody>
    </table>
  `

  dataPanel.innerHTML = htmlContent
}

// 主程式
const dataPanel = document.querySelector('#data-panel')
//將選取到的內容放進變數 dataPanel，以便後續在程式裡操作
displayMovieList(movies)
//呼叫函式
