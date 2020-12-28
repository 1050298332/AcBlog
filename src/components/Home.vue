<template>
  <div class="app">
    <el-container>
      <el-aside class="app-side app-side-left"
                :class="isCollapse ? 'app-side-collapsed' : 'app-side-expanded'">
        <div class="app-side-logo">
          <img src="@/assets/logo.png"
               :width="isCollapse ? '60' : '60'"
               height="60"
               />
        </div>
        <div>
          <el-menu default-active="1-4-1"
                   class="el-menu-vertical-demo"
                   @open="handleOpen"
                   :collapse="isCollapse">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">管理系统</span>
              </template>
              <el-menu-item-group>
                <el-submenu index="2">
                <span slot="title">常规操作</span>
                <el-menu-item index="1-1">新增博客</el-menu-item>
                <el-menu-item index="1-2">评论(吐槽)编辑</el-menu-item>
                </el-submenu>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-submenu index="3">
                  <span slot="title">系统管理</span>
                <el-menu-item index="1-3">网站信息</el-menu-item>
                <el-menu-item index="1-4">博主信息</el-menu-item>
                <el-menu-item index="1-5">其他</el-menu-item>
                </el-submenu>
              </el-menu-item-group>
              <el-submenu index="1-6">
                <span slot="title">博客管理</span>
                <el-menu-item index="1-6-1">增1</el-menu-item>
                <el-menu-item index="1-6-2">删1</el-menu-item>
                <el-menu-item index="1-6-3">改1</el-menu-item>
                <el-menu-item index="1-6-4">查1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </div>
      </el-aside>

      <el-container>
        <el-header class="app-header">
          <div style="width: 60px; cursor: pointer;"
               @click.prevent="toggleSideBar">
            <i v-show="!isCollapse" class="el-icon-d-arrow-left"></i>
            <i v-show="isCollapse" class="el-icon-d-arrow-right"></i>
          </div>
          <!-- 我是样例菜单 -->
          <el-menu default-active="1"
                   class="el-menu-demo tab-page"
                   mode="horizontal"
                   @select="handleSelect"
                   active-text-color="#000000">
            <el-menu-item index="1">管理主页</el-menu-item>
            <el-menu-item index="2" @click="gobksy()">博客主页</el-menu-item>
            <div class="app-header-userinfo">
              <el-dropdown trigger="hover"
                           :hide-on-click="false" style="float: right">
                <span class="el-dropdown-link" >
                  {{ username }}
                  <i class="el-icon-setting" ></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>我的消息</el-dropdown-item>
                  <el-dropdown-item>设置</el-dropdown-item>
                  <el-dropdown-item divided
                                    @click.native="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-menu>


        </el-header>

        <el-main class="app-body">
          <template>
            <router-view/>
          </template>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
    export default {
      name: "Containers",
      data() {
        return {
          username: 'Aclles',
          isCollapse: false
        }
      },
      methods: {
        gobksy() {
            this.$router.push('/bksy');
        },
        toggleSideBar() {
          this.isCollapse = !this.isCollapse
        },
        logout: function () {
          this.$confirm('确认退出?', '提示', {})
            .then(() => {
              sessionStorage.removeItem('user');
              this.$router.push('/login');
            })
            .catch(() => { });
        },
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      },
      mounted: function () {
        let user = sessionStorage.getItem('user');
        if (user) {
          this.username = user;
        }
      }
   }
</script>

<style scoped>
  .app-side-logo{  text-align: center;}

  .app-side-logo img{border-radius: 50%;
  border: none;
  vertical-align: middle;}
</style>
