import {Component, OnInit} from 'angular2/core';

declare var google:any;

@Component({
    selector: 'my-app',
    template: `<h1>Google places autocomplete ng2 </h1>
    <input id="google_places_ac" name="google_places_ac"  type="text" class="input-block-level"/>
    `
})
export class AppComponent implements OnInit{

    constructor(){}

    ngOnInit(){
        var input : any = document.getElementById('google_places_ac');
        var autocomplete = new google.maps.places.Autocomplete(input, {});
        google.maps.event.addListener(autocomplete, 'place_changed', function() {
            var place = autocomplete.getPlace();
            console.log(place)
        });
    }
}
