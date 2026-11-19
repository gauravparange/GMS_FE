import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MemberService } from '../../../../core/services/member/member-service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialog } from '../../../../shared/components/confirm-dialog/confirm-dialog';
import { Member } from '../../../../core/model/member.model';

@Component({
  selector: 'app-member-list',
  imports: [CommonModule,RouterLink],
  templateUrl: './member-list.html',
  styleUrl: './member-list.css',
})
export class MemberList {

  memberService = inject(MemberService);
  private dialog = inject(MatDialog);

  members = this.memberService.getMembers();
  delete(member: Member) {

    const dialogRef = this.dialog.open(ConfirmDialog, {

        width: '420px',

        disableClose: true,

        data: {

            title: 'Delete Member',

            message: `Are you sure you want to delete ${member.fullName}?`

        }

    });

    dialogRef.afterClosed().subscribe(result => {

        if(!result){

        return;

    }

    this.memberService
        .deleteMember(member.id)
        .subscribe({

            next:()=>{

                this.loadMembers();

            }

        });

    });

}
 loadMembers(): void {

    this.members = this.memberService.getMembers();

  }
}
