import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../users/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id: number;
  user: User;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.fetchSingleUser(this.id).subscribe({
      next: data => {
        this.user = new User(data.id, data.name, data.username, data.email);
      },
      error: error => {
        console.log("Error fetching user");
      }
    });
  }

}
