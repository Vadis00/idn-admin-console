import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MultipleAccountsComponent }   from './multiple-accounts/multiple-accounts.component';
import { AggregationManagementComponent }   from './aggregation-management/aggregation-management.component';
import { ChangeSourceOwnerComponent} from './change-source-owner/change-source-owner.component';
import { AggregateSourceComponent} from './aggregate-source/aggregate-source.component';
import { ImportRuleComponent} from './connector-rule-management/connector-rule-management.component';
import { CloudRuleComponent} from './cloud-rule-management/cloud-rule-management.component';
import { ChangeRoleOwnerComponent} from './change-role-owner/change-role-owner.component';
import { ChangeAPOwnerComponent} from './change-ap-owner/change-ap-owner.component';
import { RoleManagementComponent} from './role-management/role-management.component';
import { AccessProfileManagementComponent} from './ap-management/ap-management.component';
import { ReleaseHistoryComponent} from './release-history/release-history.component';
import { CreditsComponent} from './credits/credits.component';
import { OrgTimeComponent} from './org-time/org-time.component';
import { LoginComponent }   from './login/login.component';
import { AuthGuard } from './helper/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/multiple-account', pathMatch: 'full' },
  { path: 'multiple-account', component: MultipleAccountsComponent, canActivate: [AuthGuard] },
  { path: 'manage-aggregation', component: AggregationManagementComponent, canActivate: [AuthGuard] },
  { path: 'change-source-owner', component: ChangeSourceOwnerComponent, canActivate: [AuthGuard] },
  { path: 'aggregate-source', component: AggregateSourceComponent, canActivate: [AuthGuard] },
  { path: 'connector-rule-management', component: ImportRuleComponent, canActivate: [AuthGuard] },
  { path: 'cloud-rule-management', component: CloudRuleComponent, canActivate: [AuthGuard] },
  { path: 'change-role-owner', component: ChangeRoleOwnerComponent, canActivate: [AuthGuard] },
  { path: 'change-ap-owner', component: ChangeAPOwnerComponent, canActivate: [AuthGuard] },
  { path: 'role-management', component: RoleManagementComponent, canActivate: [AuthGuard] },
  { path: 'ap-management', component: AccessProfileManagementComponent, canActivate: [AuthGuard] },
  { path: 'release-history', component: ReleaseHistoryComponent, canActivate: [AuthGuard] },
  { path: 'credits', component: CreditsComponent, canActivate: [AuthGuard] },
  { path: 'org-time', component: OrgTimeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
