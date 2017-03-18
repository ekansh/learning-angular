import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'my-heroes',
  moduleId: module.id,
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ],
  providers: [HeroService]

})
export class HeroesComponent implements OnInit {

  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router) {
    console.log("calling HeroesComponent constructor");
    //this.heroes = this.heroService.getHeros();
  }

  ngOnInit(): void {
    console.log("calling ngOnInit ")
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(
    heroes => this.heroes = heroes
    //this.aFUnction
    );

  }
  aFUnction(heroes: Hero[]): void {
    console.log("aFUnction");
    this.heroes = heroes;

  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetails(): void {
    this.router.navigate(['/detail',this.selectedHero.id])
  }
}
