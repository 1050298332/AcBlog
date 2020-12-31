<template>

  <el-container>
    <el-header>
      <div id="layout-header">
        <div class="menus-btn">
          Menus
        </div>
        <div class="site-menus">

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
            <el-form class="site-logo" ref="UserInfo" :model="UserInfo">
              <!-- 头像 -->
              <img src="@/assets/Aclles.jpg">
              <!-- 名字 -->
              <el-form-item prop="username">
                <p class="site-name">{{UserInfo.username}}</p>
         <div  class="top-social">
           <div  title="QQ">
             <a  href="https://qm.qq.com/cgi-bin/qm/qr?k=nPntLmgkOXPg96OW-AvZJdafigtzlW6H&jump_from=webapi" target="_blank" style="color: rgb(26, 182, 255);"><i  class="iconfont iconqq"></i></a></div>
           <div  title="Gitee">
             <a  :href="UserInfo.gitee" target="_blank" style="color: rgb(216, 30, 6);"><i  class="iconfont icongitee"></i></a></div>
           <div  title="GitHub">
             <a  :href="UserInfo.github" target="_blank"><i  class="iconfont icongithub"></i></a></div>
           <div  title="CSDN">
             <a  :href="UserInfo.wx" target="_blank" style="color: red;"><i  class="iconfont iconcsdn"></i></a></div></div>
              </el-form-item>
              <!-- 简介 -->
              <el-form-item class="header-info" prop="Info">
                  <p class="Acinfo" style="width: 31.625rem">{{UserInfo.info}}</p>
              </el-form-item>
            </el-form>
        </div>
      </div>
        <h1>推荐</h1>
    <article class="post post-list">
        <div class="post-entry">
            <div class="feature">
                <router-link :to="`/article/1`">
                    <img src="@/assets/logo.png"/>
                </router-link>
            </div>
            <h1 class="entry-title">
                <router-link :to="`/article/1`"><span style="color:#ff6d6d;font-weight:600">[置顶] </span>测试标题</router-link>
            </h1>
            <div class="p-time">
                <i class="iconfont iconmeditor-time"></i> 2020-12-29<i class="iconfont iconfire" style="margin-left: 5px;color: #ff6d6d;"></i>
            </div>
            <p class="summary">总结,概要</p>
            <footer class="entry-footer">
                <div class="post-more">
                    <router-link :to="`/article/1`"><i class="iconfont iconfish-li" style="font-size: 25px;"></i></router-link>
                </div>
                <div class="info-meta">
                    <div class="comnum">
                        <span>
                            <i class="iconfont iconcomment"></i>
                            <a href="https://zhebk.cn/Web/Akina.html">99 条评论</a>
                        </span>
                    </div>
                    <div class="views">
                        <span><i class="iconfont iconeyes"></i>100 热度</span>
                    </div>
                </div>
            </footer>
        </div>
        <hr/>
    </article>
    </el-main>
    <el-footer>
      <section class="p-10">
        </section>
          <Acfooter></Acfooter>
          <div class="back-top" v-show="show" @click.stop="getTop">
            <img src="../assets/img/top.png" alt="" class="img1">
            <img src="../assets/img/top1.png" alt="" class="img2">
            <p style="color: #000000;">夸老子</p>
          </div>
    </el-footer>
  </el-container>
</template>

<script>
  import {
    getUserInfo
  } from "@/api/user.js"
  import Acfooter from '@/components/Acfooter'
    export default {
      created() {
        this.userInfo()
      },
      data() {
        return {
          //回到顶部
          show: false,
          //这是博主信息
          UserInfo: {
            gitee: "加载中..",
            github: "加载中..",
            id: '加载中..',
            info: "加载中..",
            qq: "加载中..",
            username: "加载中..",
            wx: "加载中.."
          }
          }},
      components:{
          Acfooter
      },
      methods: {
        //获取博主信息
        userInfo() {
         getUserInfo().then(res=>{
            if(res.status !== 200) return this.$message.error(res.data.message)
            this.UserInfo = res.data
         }).catch(err=>{
           console.log('博主信息访问失败')
         })
        },
        //回到顶部 ↓
        scroll() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if (scrollTop > 150) {
                this.show = true
            } else {
                this.show = false
            }
        },
        getTop() {
            let timer = setInterval(() => {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                let speed = Math.ceil(scrollTop / 5)
                document.documentElement.scrollTop = scrollTop - speed
                if (scrollTop === 0) {
                    clearInterval(timer)
                }
            }, 20)
        }
      },
      mounted () {
          window.addEventListener('scroll', this.scroll)
      },
      beforeDestroy () {
          window.removeEventListener('scroll', this.scroll)
      }
       //回到顶部 ↑
    }
</script>

<style scoped lang="less">
  .back-top {
      background-color: #fff;
      position: fixed;
      right: 9rem;
      bottom: 9rem;
      border-radius: 25px;
      cursor: pointer;
      opacity: .3;
      transition: .3s;
      text-align: center;
      z-index: 99;
      img{
          width: 60px;
          height: 60px;
      }
      .img2{
          display: none;
      }
      &:hover img.img1{
          display: none;
      }
      &:hover img.img2{
          display: unset;
      }
  }
  .header-info p{
    margin-left:-303px;
  }
 .header-info {
     width: 60%;
     font-size: 14px;
     color: #EAEADF;
     background: rgba(0, 0, 0, 0.66);
     padding: 10px 290px;
     margin: 30px auto 0 auto;
     font-family: miranafont,"Hiragino Sans GB",STXihei,"Microsoft YaHei",SimSun,sans-serif;
     letter-spacing: 1px;
     line-height: 30px;
 }
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
  	height: 900px;
    border: 5px solid #99c9ec47;
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
    // position: fixed;
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
    .post {
        margin: 0 0 4% 0;
        position: relative;
    }
    .post-entry {
        .feature {
            position: absolute;
            margin-top: 10px;
            left: 10%;

            img {
                width: 100px;
                height: 100px;
                object-fit: cover;
                border-radius: 50%;
                padding: 2px;
                border: 1px solid #DADADA;
                position: relative;
                transition: all 0.2s linear;
                overflow: hidden;
                &:hover {
                    transform: scale(1.1, 1.1);
                    filter: contrast(130%);
                }
            }
        }

        .entry-title {
            font-size: 21px;
            font-weight: 600;
            line-height: 50px;
            margin: 0 0 0 17%;
            position: relative;
            z-index: 1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 70%;
            color: #737373;
            & a:hover {
                color: #c399ca;
            }
        }

        .p-time {
            position: absolute;
            right: 0;
            top: 16px;
            font-size: 12px;
            color: #989898;
            letter-spacing: 1px;
            font-family: din, 'Hiragino Sans GB', 'Microsoft Yahei', Arial, sans-serif;
            display: flex;
            align-items: center;
        }

        p.summary {
            min-height: 60px;
            margin: 0 0 0 17%;
            font-size: 15px;
            color: #6f6f6f;
            letter-spacing: 1px;
            line-height: 30px;
        }

        footer.entry-footer {
            margin: 0 0 0 17%;
            list-style: none;

            .post-more {
                margin-top: 10px;
                text-align: right;
                color: #A0DAD0;

                a:hover {
                    color: #737373;
                }
            }

            .info-meta {
                margin-top: 10px;
                font-family: din, 'Hiragino Sans GB', 'Microsoft Yahei', Arial, sans-serif;
                position: absolute;
                top: 20px;
                opacity: 0;
                padding-top: 8px;
                border-top: 1px solid #ddd;
                -webkit-transform: translate3d(-150px, 0, 0);
                transform: translate3d(-150px, 0, 0);
                visibility: hidden;
                transition: .7s all ease;
                -webkit-transition: .6s all ease;
                -moz-transition: .6s all linear;
                -o-transition: .6s all ease;
                -ms-transition: .6s all ease;

                span, a {
                    color: #B3B3B3;
                    font-size: 12px;
                }

                i {
                    margin-top: 3px;
                    margin-right: 10px;
                    float: left
                }
            }

            .comnum {
                float: left;
            }
        }

    }

    .post-entry:hover footer.entry-footer .info-meta {
        -webkit-transform: translate3d(-230px, 0, 0);
        transform: translate3d(-230px, 0, 0);
        opacity: 1;
        visibility: visible;
    }

    .post hr {
        width: 30%;
        height: 1px;
        margin: 0 auto;
        border: 0;
        background: #EFEFEF;
    }

    /*******/
    /* 屏幕小于1440px */
    @media (max-width: 1500px)  {
      .header-info{
       display:none;
      }
      .post-entry .feature{
        left: 3%;
      }
    }
    @media (max-width: 1060px) {
        .info-meta{
            display: none;
        }
    }
    @media (max-width: 800px) {
        .post-entry {
            .feature img {
                width: 50px;
                height: 50px;
            }
            .entry-title{
                font-size: 16px;
                line-height: 30px;
                margin: 0 0 0 65px;
            }
            .p-time {
                position: relative;
                margin: -15px 0 0 65px;
            }
            p.summary {
                margin: 20px 0 0 65px;
                font-size: 14px;
                height: 30px;
                overflow: hidden;
            }
            .post-more{
                display: none;
            }
        }
        .post-list hr {
            margin-top: 20px;
        }
    }
    @media (max-width: 600px){
        .back-top{
            display: none;
        }
    }
    /******/
        .top-social {
            height: 32px;
            margin-top: 30px;
            margin-left: 10px;
            list-style: none;
            display: inline-block;
            font-family: miranafont,"Hiragino Sans GB",STXihei,"Microsoft YaHei",SimSun,sans-serif;
            div {
                float: left;
                margin-right: 10px;
                height: 32px;
                line-height: 32px;
                text-align: center;
                width: 32px;
                background: white;
                border-radius: 100%;
            }
        }
</style>
