import { IPost } from './../Shared Classes and types/IPost';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(private postService: PostService) {}

  postList: IPost[] = [];

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((data) => {
      this.postList = [{ id: data.id, title: data.title, body: data.body }];
    });
  }
}
