import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MemberService } from '../../../../core/services/member/member-service';

@Component({
  selector: 'app-member-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './member-form.html',
  styleUrl: './member-form.css',
})
export class MemberForm {
  memberForm!: FormGroup;

  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private memberService: MemberService
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    this.isEditMode = !!id;

    this.memberForm = this.fb.group({

      fullName: ['', Validators.required],

      mobileNo: ['', Validators.required],

      email: [''],

      gender: ['', Validators.required],

      address: [''],

      plan: ['', Validators.required],

      joiningDate: ['', Validators.required],

      expiryDate: ['', Validators.required]

     // trainer: [''],

     // height: [''],

      //weight: [''],

     // goal: ['']

    });

    if (this.isEditMode) {

      this.loadMember(+id!);

    }
  }

  loadMember(id: number): void {

    const member = this.memberService.getMemberById(id);

    if (member) {

      this.memberForm.patchValue(member);

    }

  }

  save(): void {

    if (this.memberForm.invalid) {

      this.memberForm.markAllAsTouched();

      return;
    }

    if (this.isEditMode) {

      console.log('Update Member');

    } else {

      console.log('Create Member');

    }
  }
}
