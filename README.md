## 🌹🌹🌹🌹🌹 功能更强到的JAVA + mysql版本上线了，欢迎咨询。🌹🌹🌹🌹🌹
新版商业版演示地址：http://erp2.hzb-it.com/a/

##### 以下为PHP版本介绍：

### 功能介绍
三个端：pc管理端，公众号教师端，公众号学员端
 - 学员管理
 - 老师管理
 - 排课管理
 - 云点播课程（对接腾讯云点播vod，支持学员公众号学习，并保持学习进度）
 - 二维码班级签到（按班级为单位一天可以设置两次签到和两次签退）
 - 作业管理（教师端发布和点评作业，学生端发布作业）

### 演示地址
http://erp.hzb-it.com/s
账号 admin
密码 111111
演示公众号：宏之博软件



### 说明

配置公众号菜单方法：先配置好公众号菜单，位置在后台-内容-公众号菜单-发布到公众号；主页请改成自己公司的，学生端和教师端两个保持默认即可。注意该操作会替换掉原来的菜单。

学生签到扫描流程：到管理员后台里设置查看班级的二维码，用学生端扫描即可。

进入学生端的方法：公众号底部菜单-学生端（网址为：http://域名/wxauth.html?state=staffcenter）

进入教师端的方法：公众号底部菜单-教师端（网址为：http://域名/wxauth.html?state=studentcenter）

员工都可以登录管理后端，但是可以给每个员工设置角色；每个角色又可以设置多种权限。

## 公众号配置说明

公众号服务器配置URL是：http://域名/wx

公众号配置参数位置: \server\application\common\service\WxService.php

腾讯云点播VOD配置参数位置:\server\application\common\service\TencentCloud.php