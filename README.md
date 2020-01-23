# QuantumultX

## 脚本管理：Js_local_WorkingCopy.conf

由于 QuantumultX 作者担心 js 被乱用，砍掉了远程运行 js 脚本，所以改为 `Js_local_WorkingCopy.conf` 作为脚本管理。

Js_local_WorkingCopy.conf 包含下面两个路径

- NobyDa/QuantumultX/File
- NobyDa/Surge/JS

所以，使用前需要在本地的，或 iCloud Drive 的 QuantumultX 目录里新建好上面两个路径的文件夹，然后下载 NobyDa Github 里的 js 等文件，最后上传到对应文件夹内。

## 神机复写 Rewrite.conf

上 youtube 会员车后取消 youtube 的复写，删除 hostname 里含有 youtube 的域名。

此文件需手动更新，地址：https://raw.githubusercontent.com/ConnersHua/Profiles/master/Quantumult/X/Rewrite.conf

下载上面的 Rewrite.conf，然后用 TC 对比修改即可。

## 自定义脚本管理：js.conf

修改自神机的 Js_local_WorkingCopy.conf，二选一使用。