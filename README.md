# kku-Ballot / ethereum-supply-chain

## การ Deploy smart contract บน Binance Smart Chain

<br />

### การตั้งค่าเริ่มต้น

1) เลือกใช้ Node version 12.19.0 / Truffle v5.2.2

2) เข้าไปยัง Directory ของโปรเจค เช่น<br />

`cd voting/` หรือ
`cd ethereum-supply-chain/`  <br />

3) ติดตั้ง package ที่จำเป็นโดยพิมพ์คำสั่ง <br />

`npm install` <br />


### การสร้าง Wallet เพื่อใช้ในการ Deploy smart contract

1) ไปยังเว็บไซต์ 
[vanity-eth](https://vanity-eth.tk/) เพื่อสร้าง Private key และ Public key <br />

![](images/1_vanity.png)

2) กด `Generate` จากนั้น Address หรือ Public Key และ Private key จะถูกสร้างขึ้นมาตามรูป <br />

![](images/2_key.png)

3) save keys  แล้วไปยังเว็บไซต์ 
[testnet.binance.org](https://testnet.binance.org/faucet-smart) จากนั้นคัดลอด และ กรอก address เพื่อขอเหรียญ BNB สำหรับ Test net โดยการคลิก `Give me BNB` ตามรูป<br />

![](images/3_faucet.png)


4) สามารถตรวจสอบได้ว่ากระเป๋าเงินของเราได้รับ BNB หรือไม่ โดยการไปยัง 
[Binance Smart Chain Testnet Explorer](https://testnet.bscscan.com/) แล้วค้นหาโดยกรอก Address ของเราลง แล้วคลิกไปตามรูป <br />

![](images/4_testnet_wallet_address.png)

5) หากสำเร็จจะสังเกตเห็นว่าเราจะมีเหรียญ BNB อยู่ไปตามรูป <br />

![](images/5_testnet_wallet_amount.png)


### การใช้ truffle command เพื่อ Deploy smart contract

1) เมื่อมีเหรียญอยู่ในกระเป๋าแล้ว เข้าไปยัง Directory ของโปรเจคที่ต้องการ เช่น<br />

`cd voting/` หรือ  <br />
`cd opencert-admin/` หรือ  <br />
`cd ethereum-supply-chain/` <br />
<br />

2) สร้าง และ/หรือ แก้ไข ไฟลล์ `.env` โดนการกรอก Private key ที่เพิ่งถูกสร้างขึ้นมา ตามรูป<br />

![](images/6_ENV.png)

3) Compile และ Deploy smart contracts โดยพิมพ์คำสั่ง <br />

`truffle migrate --reset --network bscTestnet` <br />

![](images/7_compile.png)

4) หากสำเร็จเมื่อเลื่อนลงไปเราจะเจอ Address ของ Contract ที่ถูก deploy แล้ว ตามรูป (ควรโหลดหรือ save Contract Address ไว้)<br />

![](images/8_contract_address.png)

5) สามารถตรวจสอบได้ว่า smart contract ของเราได้ถูก Deploy ไปแล้วหรือไม่ โดยการไปยัง 
[Binance Smart Chain Testnet Explorer](https://testnet.bscscan.com/) แล้วค้นหาโดยกรอก Contract Address จากขั้นตอนที่แล้ว ของเราลงไป หากสำเร็จจะเป็นไปตามรูป <br />

![](images/9_testnet_contract_address.png)

### การใช้ verify และ interact กับ smart contract

5) สามารถ verify smart contract ของเรา เพื่อทำให้เรา interact กับ smart contract ได้ โดยการไปยัง 
[Binance Smart Chain Testnet Explorer](https://testnet.bscscan.com/verifyContract) แล้วค้นหาโดยกรอก Contract Address จากขั้นตอนที่แล้ว ของเราลงไป จากนั้นกรอกตามรูป โดย version ของ compiler สามารถดูได้จาก version ของ compiler ใน truffle-config.js<br />

![](images/10_verify.png)
![](images/11_version.png)

6) กด `Continue` จากนั้นกรอก smart contract source code จาก `/contracts/Ballot.sol`<br />

![](images/12_source.png)

7) หาก verify แล้วเราสามารถ interact กับ smart contract ได้ <br />
![](images/13_interact.png)


### การใช้งาน

1) ติดตั้ง  [Metamask Chrome Extension](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en) <br />

2) กด `Import Account` จากนั้นกรอก Private Key ที่สร้างมาจากขั้นตอนที่แล้ว จาก `/contracts/Ballot.sol`<br />

![](images/14_import_key.png)


3) กดเลือก Blockchain ที่ต้องการ Network จากนั้นกด `Custom Network` แล้วกรอก config ตามภาพ <br />

![](images/15_choose_network.png)
![](images/1ุุุ6_set_network.png)

4) เข้าไปยัง client Directory  ของแต่ละโปรเจค เช่น<br />

`cd ./voting/client` หรือ
`cd ./ethereum-supply-chain/client`  <br />

5) พิมพ์คำสั่ง <br />

`npm run start` <br />

6) ไปยัง `http://localhost/3000` <br />
