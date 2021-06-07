<template>
    <div class="dropdown">
        <div class="topbar-item" data-toggle="dropdown" data-offset="0px,0px">
            <div class="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2">
                <span class="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">Hola,</span>
                <span class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">Deddy</span>
                <span class="symbol symbol-35 symbol-light-success">
                    <span class="symbol-label font-size-h5 font-weight-bold">S</span>
                </span>
            </div>
        </div>
        
        <div class="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg p-0">
            <div class="d-flex align-items-center justify-content-between flex-wrap p-8 bgi-size-cover bgi-no-repeat rounded-top bg-cabeceras">
                <div class="d-flex align-items-center mr-2">
                    <div class="symbol bg-white-o-15 mr-3">
                        <span class="symbol-label text-success font-weight-bold font-size-h4">S</span>
                    </div>
                    
                    <div class="text-white m-0 flex-grow-1 mr-3 font-size-h5">Deddy Ibañez</div>
                </div>
                <span class="label label-success label-lg font-weight-bold label-inline">3 messages</span>
            </div>
            
            <div class="navi navi-spacer-x-0 pt-5">
                <a href="custom/apps/user/profile-1/personal-information.html" class="navi-item px-8">
                    <div class="navi-link">
                        <div class="navi-icon mr-2">
                            <i class="flaticon2-calendar-3 text-success"></i>
                        </div>
                        <div class="navi-text">
                            <div class="font-weight-bold">My Profile</div>
                            <div class="text-muted">Account settings and more
                                <span class="label label-light-danger label-inline font-weight-bold">update</span>
                            </div>
                        </div>
                    </div>
                </a>
                
                <a href="custom/apps/user/profile-3.html" class="navi-item px-8">
                    <div class="navi-link">
                        <div class="navi-icon mr-2">
                            <i class="flaticon2-mail text-warning"></i>
                        </div>
                        <div class="navi-text">
                            <div class="font-weight-bold">My Messages</div>
                            <div class="text-muted">Inbox and tasks</div>
                        </div>
                    </div>
                </a>
                
                <a href="custom/apps/user/profile-2.html" class="navi-item px-8">
                    <div class="navi-link">
                        <div class="navi-icon mr-2">
                            <i class="flaticon2-rocket-1 text-danger"></i>
                        </div>
                        <div class="navi-text">
                            <div class="font-weight-bold">My Activities</div>
                            <div class="text-muted">Logs and notifications</div>
                        </div>
                    </div>
                </a>
                
                <a href="custom/apps/userprofile-1/overview.html" class="navi-item px-8">
                    <div class="navi-link">
                        <div class="navi-icon mr-2">
                            <i class="flaticon2-hourglass text-primary"></i>
                        </div>
                        <div class="navi-text">
                            <div class="font-weight-bold">My Tasks</div>
                            <div class="text-muted">latest tasks and projects</div>
                        </div>
                    </div>
                </a>
                
                <div class="navi-separator mt-3"></div>
                <div class="navi-footer px-8 py-5">
                    <a href="custom/user/login-v2.html" target="_blank" class="btn btn-light-primary font-weight-bold">Sign Out</a>
                    <a href="custom/user/login-v2.html" target="_blank" class="btn btn-clean font-weight-bold">Upgrade Plan</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .bg-cabeceras{
        background-image: url('../../../assets/theme/media/misc/bg-1.jpg');
    }
</style>