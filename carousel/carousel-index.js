import AbstractView from "../index/AbstractView.js"; 

export default class extends AbstractView{
    constructor(params){
        super(params);
        this.setTitle("Carousel");
    }

    async getHtml(){
        console.log('haha'); 
        
        fetch('./carousel.html')
        .then(function(response) {
            // When the page is loaded convert it to text
            return response.text()
        })
        .then(function(html) {
            // Initialize the DOM parser
            const parser = new DOMParser();
    
            // Parse the text
            const doc = parser.parseFromString(html, "text/html");
    
            // You can now even select part of that html as you would in the regular DOM 
            // Example:
            // var docArticle = doc.querySelector('article').innerHTML;
    
            console.log(doc);
        })
        .catch(function(err) {  
            console.log('Failed to fetch page: ', err);  
        });
    }
}