const TelegramBot = require("node-telegram-bot-api");

// t.me/happytest_bot
const telegramToken = "991440758:AAEmvxBS-KjUpHGL6xIamnJPuZ-6qRdcaR4";
const bot = new TelegramBot(telegramToken, { polling: true });

// bot.on("message", msg => {

// });

let command = "";
const siteList = { u: "UPBIT", b: "BITHUMB" };

bot.onText(/\/start/, msg => {
  bot.sendMessage(msg.chat.id, "Welcome");
});

bot.onText(/\/help/, msg => {
  bot.sendMessage(
    msg.chat.id,
    `This is the HappyRichBot
  You can do some commands below.
  /avatar steemaccount:get avatar image
  /매수 거래소(b:bithumb, u:upbit) 종목 가격 수량
  /매도 거래소(b:bithumb, u:upbit) 종목 가격 수량`
  );
});

bot.onText(/\/avatar/, msg => {
  const avatar = msg.text.split(" ")[1];
  bot.sendPhoto(msg.chat.id, `https://steemitimages.com/u/${avatar}/avatar`);
});

bot.onText(/\/매수/, msg => {
  const commands = msg.text.split(" ");
  const site = commands[1];
  const coin = commands[2];
  const price = commands[3];
  const amount = commands[4];

  bot.sendMessage(
    msg.chat.id,
    `${siteList[site.toLowerCase()]} ${coin} ${price}원 ${amount}주 주문 완료. 
    거래소를 확인해보세요.`
  );
});

bot.onText(/\/잔액/, msg => {
  const commands = msg.text.split(" ");
  const site = commands[1];
  const coin = commands[2];

  // bot.sendMessage(
  //   msg.chat.id,
  //   `${siteList[site.toLowerCase()]} ${coin} ${price}원 ${amount}주 주문 완료.
  //   거래소를 확인해보세요.`
  // );
});

bot.onText(/\/대기주문/, msg => {
  const commands = msg.text.split(" ");
  const site = commands[1];
  const coin = commands[2];

  // bot.sendMessage(
  //   msg.chat.id,
  //   `${siteList[site.toLowerCase()]} ${coin} ${price}원 ${amount}주 주문 완료.
  //   거래소를 확인해보세요.`
  // );
});
