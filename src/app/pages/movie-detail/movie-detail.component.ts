import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { faThumbsUp,faPlus } from '@fortawesome/free-solid-svg-icons';
import { MovieApiService } from "src/app/services/movie-api.service";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {

  constructor(  
    private route: ActivatedRoute,
    private service: MovieApiService){
  }

  // faThumbsUp = faThumbsUp;
  // faPlus = faPlus;
  movieData: any = {};

  ngOnInit(){
    this.service.getMovieDetails(this.route.snapshot.paramMap.get('id')).subscribe((data) => {
      this.movieData = data;
      console.log(data)
    });
  }
}

