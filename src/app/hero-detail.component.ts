import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common'

import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-hero-detail',
  moduleId: module.id,
  templateUrl:'./hero-detail.component.html',
  styleUrls:['./hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
    ) { }
 
  ngOnInit(): void {
    //console.log("hero-details ngOnInit before switchMap "+this.route.toString);
    //this.heroService.getHero(+this.route.params['id']);
    //console.log("this.hero : "+this.hero);
    this.route.params.switchMap( (params: Params )=> this.heroService.getHero(+params['id']) ).
    subscribe(hero=> this.hero =  hero );
    
  }
  goBack() : void {
    this.location.back();
  }

}