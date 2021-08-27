// import React, { Component } from "react";
// import "./styles.css"
// // https://www.googleapis.com/youtube/v3/search?key=AIzaSyB4xNW_TeLDTO9tKxmHQAZskoy9Na0sxR0&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=1

// class NewsFeed extends Component {
//   constructor() {
//     super();
//     this.state = {
//      news: [],
//     };
//   }

//   componentDidMount() {
//     fetch(
//       // "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBv_MveWxmNKF-fAAEDIy3qAIWtt0-YM1M&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
      
//       // "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCgwYWwvbuUm_Dggzf7yEFsoUS0kRc60zQ&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
//     // "https://newsapi.org/v2/everything?q=Apple&from=lastmonth&sortBy=recent&apiKey=8c1e4a7ef84a466fa8023f815ca1d82d"
    
//       "https://newsapi.org/v2/everything?q=Apple&from=2021-08-16&to=2021-08-16&sortBy=recentfirst&order=date&pageSize=6&apiKey=8c1e4a7ef84a466fa8023f815ca1d82d&maxResults"
    
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data)
//         const news = data.articles;
//         this.setState({ news });
//       });
//   }

//   render() {
    
//     console.log(this.state.news);
//     return (
//       <div className="allNewssWrapper">
//         <div className="container">
//           <div className="row h-100 align-items-center justify-content-center text-center">
//             <div className="col-12">
//               <div className="title-wraper bold news-title-wrapper">
//               news Feed
//               </div>
//             </div>
//             {this.state.news.map((singleNews, i) => {
//               let url= singleNews.url;
//               // let urlToImage = "https://s.yimg.com/os/creatr-uploaded-images/2021-06/e6c71860-cdbe-11eb-a7b6-362b2e81322f";
//               let newsWrapper = (
//                 <div key={i} className="col-sm-12 col-md-6">
//                   <div className="singleNewsWrapper">
//                     <div className="newsInfoWrapper">
//                         <div className="newsImage" > 
//                           <a href={url} >
//                           <img src={singleNews.urlToImage} />
//                           </a>
//                         </div>
                        
//                         <div className="newsTitle">
//                             <a  href={url} >
//                             {singleNews.title}
//                             </a >
//                         </div>
//                       <div className="newsDesc">
//                         {singleNews.description}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//               return newsWrapper;
//             })}

//             {this.newsWrapper}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default NewsFeed;