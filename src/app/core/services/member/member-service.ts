import { inject, Service } from '@angular/core';
import { Member } from '../../model/member.model';
import { HttpClient } from '@angular/common/http';

@Service()
export class MemberService {

http = inject(HttpClient);

     memberList : Member[]=[
        {
            id: 1,
            memberCode: 'M001',
            fullName: 'Rahul Sharma',
            mobileNo: '9876543210',
            joiningDate: new Date(),
            expiryDate: new Date(),
            status: 'Active',
            email: '',
            planId: 0,
            gender:'Male'
        },
        {
            id: 2,
            memberCode: 'M002',
            fullName: 'Amit Patel',
            mobileNo: '9876543211',
            joiningDate: new Date(),
            expiryDate: new Date(),
            status: 'Active',
            email: '',
            planId: 0,
            gender:'Male'
        },
        {
            id: 3,
            memberCode: 'M003',
            fullName: 'Vikas Singh',
            mobileNo: '9876543212',
            joiningDate: new Date(),
            expiryDate: new Date(),
            status: 'Expired',
            email: '',
            planId: 0,
            gender:'Male'
        },
        {
            id: 4,
            memberCode: 'M004',
            fullName: 'Rakesh Kumar',
            mobileNo: '9876543213',
            joiningDate: new Date(),
            expiryDate: new Date(),
            status: 'Active',
            email: '',
            planId: 0,
            gender:'Male'
        },
        {
            id: 5,
            memberCode: 'M005',
            fullName: 'Vikram Singh',
            mobileNo: '9876543214',
            joiningDate: new Date(),
            expiryDate: new Date(),
            status: 'Expired',
            email: '',
            planId: 0,
            gender:'Male'
        }
    ];

     getMembers(){
        return this.memberList;
    }
    getMemberById(id:number){
        return this.memberList.find(member => member.id === id);
    }
    deleteMember(id:number){
      return this.http.delete(`http://localhost:8080/members/${id}`);
    }
}
