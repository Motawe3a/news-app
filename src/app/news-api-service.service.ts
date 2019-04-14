import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key ='352b0e93135148149c9d1e80a5e90361';

  constructor(private http:HttpClient) {}

    initSources(){
      return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
   }

   initArticles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
   }

   getArticlesByID(source: String){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
   }


}
