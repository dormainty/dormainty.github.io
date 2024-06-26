# SSH

```sh
cd ~/.shh

ssh-keygen -t rsa -b 4096

ls -ltr

# 无后缀为私钥文件、.pub为公钥文件
# 复制公钥文件内容
```



## github 或 gitee

[github生成ssh密钥](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

[gitee生成ssh密钥](https://help.gitee.com/base/account/SSH%E5%85%AC%E9%92%A5%E8%AE%BE%E7%BD%AE)

### 生成SSH公钥

1、通过命令 `ssh-keygen` 生成 SSH Key：

```shell
ssh-keygen -t ed25519 -C "codebetter@163.com"
```

- `-t` key 类型
- `-C` 注释

输出，如：

```shell
Generating public/private ed25519 key pair.
Enter file in which to save the key (/Users/dongxu/.ssh/id_ed25519): 
Created directory '/Users/dongxu/.ssh'.
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /Users/dongxu/.ssh/id_ed25519
Your public key has been saved in /Users/dongxu/.ssh/id_ed25519.pub
The key fingerprint is:
SHA256:jze2V/cYLM5ztsk6ImjD3NVR22qlGV9/6I1M/P7rEWI codebetter@163.com
The key's randomart image is:
+--[ED25519 256]--+
|                 |
|              .  |
|             . o |
|            . o +|
|        S  . E Xo|
|         o. + & *|
|     o o..=o B Oo|
|      * oo.o*.B.=|
|     . . ..o.*===|
+----[SHA256]-----+
```

- 中间通过三次**回车键**确定

2、查看生成的 SSH 公钥和私钥：

```shell
ls ~/.ssh/
```

输出

```shell
id_ed25519     id_ed25519.pub
```

- 私钥文件 `id_ed25519`
- 公钥文件 `id_ed25519.pub`

3、读取公钥文件 `~/.ssh/id_ed25519.pub`：

```shell
cat ~/.ssh/id_ed25519.pub
# 或
pbcopy < ~/.ssh/id_ed25519.pub
```

### 设置账户SSH公钥

头像 → settings → SSH and GPG keys → New SSH key → Add SSH key

[github 添加ssh密钥](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)





## https和ssh的区别

- https
  - 这种方式在我们把本地代码push到远程仓库的时候，需要验证用户名和密码


- ssh
  - 这种方式在推送的时候不需要验证用户名和密码，但是需要在 GitHub 上添加 SSH 公钥的配置

