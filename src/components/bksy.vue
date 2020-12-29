<template>

  <el-container>
    <el-header>
      <div id="layout-header">
        <div class="menus-btn">
          Menus
        </div>
        <div class="site-menus">
          <div class="menu-item header-search">
            <header-search />
          </div>
          <div class="menu-item">
            <router-link to="/bksy">首页</router-link>
          </div>
          <div class="menu-item hasChild">
            <a href="#">文章</a>
          </div>
          <div class="menu-item">
            <router-link to="/friend">友链</router-link>
          </div>
          <div class="menu-item">
            <router-link to="/about">关于</router-link>
          </div>
        </div>
      </div>
    </el-header>
    <el-main >
      <div id="div-image">
        <div id="image" >
            <div class="site-logo" >
              <img src="@/assets/logo.png">
              <p class="site-name">Aclles</p>
            </div>
        </div>
      </div>
      <div>
        <h1>推荐</h1>
        <div>
          <div>
            <img src="http://www.mccsdl.top/images/logo.png" :width="60" height="60"/>
            <h1 class="wz-name"><a href="/aaaa/aaa/1" ><span class="ZD">[置顶]</span>就这?</a></h1>
            <div class="wz-info1">  这是介绍
            </div>
            <div class="wz-info2">
              <i>*</i>
              2020-12-28
              <i>*</i>
            </div>
            <a><i>进入</i></a>
          </div>
        </div>
        <div>
          <div>
            <img src="http://www.mccsdl.top/images/logo.png" :width="60" height="60"/>
            <h1 class="wz-name"><a href="/aaaa/aaa/2"><span class="ZD">[置顶]</span>就这2?</a></h1>
            <div class="wz-info">
              <i>*</i>
              2020-12-27
              <i>*</i>
            </div>
            <div class="wz-info2">
               这是介绍2
              <a><i>进入</i></a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img src="@/assets/logo.png" :width="60" height="60"/>
          <h1 class="wz-name"><a href="/aaaa/aaa/1" ><span class="ZD">[置顶]</span>就这3?</a></h1>
          <div class="wz-info">
            <i>*</i>
            2020-12-28
            <i>*</i>
          </div>
          <div class="wz-info2">  这是介绍
            <a><i>进入</i></a>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img src="@/assets/logo.png" :width="60" height="60"/>
          <h1 class="wz-name"><a href="/aaaa/aaa/1" ><span class="ZD">[置顶]</span>就这4?</a></h1>
          <div class="wz-info">
            <i>*</i>
            2020-12-28
            <i>*</i>
          </div>
          <div class="wz-info2">  这是介绍
            <a><i>进入</i></a>
          </div>
        </div>
      </div>
    </el-main>
    <el-footer>
        底部
    </el-footer>
  </el-container>
</template>


<style scoped lang="less">
  a{text-decoration:none;
     color: #8fd0cc;
     }
  .wz-info2{
    left: 10%;
      }
  .wz-info{
     display:inline;

   }
  .wz-name{
   display:inline;
  }
  .ZD {
      color: rgb(255, 109, 109);
      font-weight: 600;
      }
  #div-image{
		width:100%;
		height: 500px;
    border: 1px solid #000;
    #image{
      background: url('http://www.mccsdl.top/images/1.jpg') center no-repeat;
      width: 100%;
      height: 100%;
      position: relative;
    }
  }
  .site-logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .site-logo img {
    border-radius: 50%;
    border: none;
    vertical-align: middle;
  }

  #layout-header {
    position: fixed;
    top: 24px;
    width: 100%;
    height: 80px;
    padding: 23 23px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: .3s all ease;

    &.hidden {
      top: -100px;
    }

    &.fixed {
      background-color: #FFFFFF;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }

  .site-logo {
    text-align: center;

    img {
      width: 100px;
      height: 100px;

    }

    p.site-name {
      font-size: 25px;
      font-weight: bold;
      position: relative;
      top: -10px;
      color: #757575;
    }
  }

  .menus-btn {
    display: none;
    visibility: hidden;
  }

  .site-menus {
    display: flex;
    align-items: center;

    .menu-item {
      min-width: 60px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      position: relative;

      a {
        padding: 12px 10px;
        color: #545454;
        font-weight: 500;
        font-size: 16px;

        &:hover {
          color: #d68eff;
        }
      }

    }

  }


</style>
