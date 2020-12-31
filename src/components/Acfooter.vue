<template>
    <div id="layout-footer">
        <div class="footer-main">
            <div class="footer-item">
                <div style="font-size:17px;font-weight: bold;">资源</div>
                <div><a target="_blank" class="out-link" href="https://segmentfault.com/weekly?utm_source=sf-footer">每周精选</a></div>
                <div><a target="_blank" class="out-link" href="https://blog.csdn.net/Aclles">CSDN主页</a></div>
                <div><a target="_blank" class="out-link" href="http://www.mccsdl.top/">CSBBS论坛</a></div>
            </div>
            <div class="footer-item">
                <div><router-link to="/Home">后台管理</router-link></div>
            </div>
        </div>
        <div class="copyright">Copyright © 2020 by <a target="_blank" class="out-link" href="http://www.mccsdl.top">mccsdl.top</a> . All rights reserved. |
        <a target="_blank" class="out-link" href="https://beian.miit.gov.cn/">鲁ICP备2020038749号</a><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=37010202002158"><img src="http://mccsdl.top/images/images/ban.png" style="vertical-align: middle;">鲁公网安备 37010202002158号]</a>
 </div>
    </div>
</template>

<script>

</script>

<style scoped lang="less">

 a:link {color:#000;}      /* 未访问链接*/
 a:visited {color:#8d8d8d;}  /* 已访问链接 */
 a:active {color:#f2bbff;}  /* 鼠标点击时 */

#layout-footer{
    padding: 2%;
    border-top: 1px solid #F7F7F7;
    font-size: 13px;
    color: #9c9c9c;
    a.out-link:hover{
        color: #ff7366; /* 鼠标移动到链接上 */
    }
    .footer-main{
        max-width: 800px;
        margin: 0 auto 20px auto;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        .footer-item{
            flex: 1;
            & > div:not(:last-child){
                margin-bottom: 10px;
            }
            i{
                margin-right: 10px;
            }
        }
    }
    .copyright{
        text-align: center;
    }
}
    /*****/
    @media (max-width: 800px){
        #layout-footer{
            .footer-main .footer-item:nth-child(3){
                flex: 2;
            }
        }
    }
    @media (max-width: 600px){
        #layout-footer{
            .footer-main {
                display: block;
                .footer-item{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    flex-wrap: wrap;
                    & > div{
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }
    /*****/
</style>
