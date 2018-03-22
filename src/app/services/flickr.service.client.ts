import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable() // needed as we're injecting Http service into this service
export class FlickrService {

  key = 'db90a401bc51835cb24c5b9bae73632d';
  secret = 'ef53af43270b7f21';
  urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';

  constructor(private http: Http) {}

  searchPhotos(searchTerm: any) {
    const url = this.urlBase
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);
    return this.http.get(url);
  }
}
