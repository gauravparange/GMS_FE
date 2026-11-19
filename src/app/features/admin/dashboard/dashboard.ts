import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  totalMembers = 250;
activeMembers = 210;
expiredMembers = 40;
todayAttendance = 85;
monthlyRevenue = 125000;

recentMembers = [
  {
    memberCode: 'M001',
    fullName: 'Rahul Sharma',
    mobileNo: '9876543210',
    joiningDate: '20-Jun-2026'
  },
  {
    memberCode: 'M002',
    fullName: 'Amit Patel',
    mobileNo: '9876543211',
    joiningDate: '19-Jun-2026'
  }
];

expiringMembers = [
  {
    fullName: 'Rakesh Kumar',
    planName: '3 Months',
    expiryDate: '25-Jun-2026'
  },
  {
    fullName: 'Vikas Singh',
    planName: '1 Month',
    expiryDate: '28-Jun-2026'
  }
];
}
