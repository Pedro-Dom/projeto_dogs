import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';

import { Dog } from '../dog.model';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  dog: Dog = {
    fileSizeBytes: 0,
    url: ""
  }

  ngOnInit(): void {
  }

  constructor(private dogService: DogService){}

  obterDogs(){
    this.dogService.obterDogs().subscribe((dog) => {
      this.dog = dog
    })
  }

}