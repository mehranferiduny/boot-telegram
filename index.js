const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters');
const { fall } = require('./db');


const bot = new Telegraf("TOKEN_BOT_TELEGRAM")
const start=`سلام خیلی خوش آمدی دوست من👋 
چجوری میتونم کمکت کنم
 جهت راهنمایی    /help کلیک کنید`;

const help=`با فرستادن کلمه ماه تولد خود میتونی فال خودتو بگیری
<<* به عنوان مثال آبان *>> `

let username=[];

bot.start((ctx) => {
 
  const aout=username.find(({ name }) => name == ctx.from.username);

  if(!aout){
    ctx.reply(start)
    username.push({name:ctx.from.username});
    return;
  }
  ctx.reply(`کاربر گرامی شما هر 24 ساعت میتوانید فال روز خود را بگیرید`)
 })
bot.help((ctx) => ctx.reply(help))


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

bot.on(message('text'), async (ctx) => {

  const msg=ctx.message.text



  switch(msg){
    case "فروردین"  : await ctx.telegram.sendMessage(ctx.message.chat.id, `   فروردینی ${fall[getRndInteger(0,11)].des}`); break;
    case "اردیبهشت"  : await ctx.telegram.sendMessage(ctx.message.chat.id, `  اردیبهشتی ${fall[getRndInteger(0,11)].des}`); break;
    case "خرداد"  : await ctx.telegram.sendMessage(ctx.message.chat.id, ` خردادی  ${fall[getRndInteger(0,11)].des}`); break;
    case "تیر"  : await ctx.telegram.sendMessage(ctx.message.chat.id, ` تیر ماهی  ${fall[getRndInteger(0,11)].des}`); break;
    case "مرداد"  : await ctx.telegram.sendMessage(ctx.message.chat.id, `مرداد ماهی  ${fall[getRndInteger(0,11)].des}`); break;
    case "شهریور"  : await ctx.telegram.sendMessage(ctx.message.chat.id, `  شهریوری ${fall[getRndInteger(0,11)].des}`); break;
    case "مهر"  : await ctx.telegram.sendMessage(ctx.message.chat.id, ` مهرماهی  ${fall[getRndInteger(0,11)].des}`); break;
    case "آبان"  : await ctx.telegram.sendMessage(ctx.message.chat.id, `  آبان ماهی  ${fall[getRndInteger(0,11)].des}`); break;
    case "آذر"  : await ctx.telegram.sendMessage(ctx.message.chat.id, ` آذر ماهی  ${fall[getRndInteger(0,11)].des}`); break;
    case "دی"  : await ctx.telegram.sendMessage(ctx.message.chat.id, ` دی ماهی  ${fall[getRndInteger(0,11)].des}`); break;
    case "بهمن"  : await ctx.telegram.sendMessage(ctx.message.chat.id, ` بهمن ماهی  ${fall[getRndInteger(0,11)].des}`); break;
    case "اسفند"  : await ctx.telegram.sendMessage(ctx.message.chat.id, ` اسفند ماهی  ${fall[getRndInteger(0,11)].des}`); break;

    default:
      return ctx.telegram.sendMessage(ctx.message.chat.id, `  لطفا ماه تولد را به درستی وارد کنید`);
  }


  
  bot.start();
  // Explicit usage
  


});


function MyReload(){
  const date = new Date();
  const hour = date.getHours();
 
  if(hour==00 && min < 07) {
    username=[];
  } 
  
 }
  
 setInterval(MyReload, 500000);
  

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
