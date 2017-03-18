import { Injectable } from '@angular/core';
import { HEROES } from './mock-heros';
import { Hero } from './hero';
@Injectable()
export class HeroService {
	getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}

	getHeroesSlowly(): Promise<Hero[]> {
		return new Promise(resolve => {
			// Simulate server latency with 2 second delay
			setTimeout(() => resolve(this.getHeroes()), 5000);
		});
	}

	getHero(id:number) : Promise<Hero> {
		console.log("hero.service.ts getHero id: "+id);
		return this.getHeroes().then(
			heroes=>heroes.find(hero=>hero.id === id)
		);
	}
}