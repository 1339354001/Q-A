const data = [
  {
    title: "浙大最潮的学生组织是？",
    content: "求是潮！",
    height: "50px",
  },
  {
    title: "求是潮的办公室在哪里",
    content: "小剧场",
    height: "50px",
  },
  {
    title: "1+1=?",
    content: "2",
    height: "50px",
  },
  {
    title: "关注嘉然",
    content: "顿顿解馋<img src='Diana.jpg' class='IMG'>",
    height: "150px",
  },
  {
    title: "看虚拟主播不看嘉然",
    content:
      "看虚拟主播不看嘉然，就像四大名著不看红楼梦，说明这个人文学造诣和自我修养不足，他理解不了这种内在的阳春白雪的高雅艺术，他只能看到外表的辞藻堆砌，参不透其中深奥的精神内核，他整个人的层次就卡在这里了，只能度过一个相对失败的人生<img src='DianaSleep.jpg' class='IMG'>(玩个梗，别在意...)​",
    height: "200px",
  },
  {
    title: "嘉然为什么是神",
    content:
      "嘉然为什么是神？在谈论这个问题之前，我想先说说其他偶像相较于嘉然究竟差在了哪里首先是犯下傲慢之罪的乃琳仗着有一对E就露出不屑的笑，这种傲慢的偶像注定走不长远，事实也是如此，靠着不足为道的身材和身高嘲讽了神之后一直在走下坡路，最终泯然众人。与之相比神就很谦卑，一米吧的身高，也是有个β的小年糕都是神留给凡人的慈悲，神不是贫胸矮子，只是不想通过太完美的身材让队友窘迫所以故意不用，可笑有些人不理解神的良苦用心，竟然还用这些事来讥讽神，我劝你们好自为之。然后是犯下了愤怒之罪的贝拉因为偷吃两袋零食就对神棍棒伺候，被摸了几次大腿就怒气冲冲的对队友拳脚相向，这无疑违背了神在《新约》中的一句话”大家要好好吃饭，每天要开开心心的。“于是神降下了她的惩罚，贝拉的智慧与情商都被神封印到了头上的晃悠悠中，而本人则变成了一个喜欢摸头傻笑的钢铁直女。接着是犯下懒惰之罪的珈乐自以为唱了一首《红色高跟鞋》就了不起，竟然说神是自己的妹妹，极为可笑。大家有所不知，珈乐首播时，节目效果出色的《猜歌名》正是借鉴了神的《自我介绍1.0》，首播之后，神降临到珈乐面前，对她说：”你只可到这里，不可越过。“然而，神的劝说不但没有让珈乐迷途知返，反而召集皇珈马戏团用卑劣的手段让自己《红色高跟鞋》的播放量超过了神的《猫中毒》。于是神降下了她的惩罚，珈乐从vocal担当沦为vacation担当，并且开始了无休止的假期。最后，犯下了贪婪之罪的向晚只是初出茅庐，就夺得了v萌的冠军，而这，自然是神的应允。神本来钦定她为自己在人间的代言人，替自己扮演一个单纯可爱的天使，为此不惜亲自为向晚铺路，将手中决定v萌胜负的最后一票亲手投给了向晚，将一切荣耀都归于她，甚至应允她打破神的记录，创造单日涨舰6900的奇迹。而随后向晚却被利益蒙蔽了双眼，不再以践行神的理想为自己的理想，也不再聆听神的教诲，甚至自以为荣光超过了神，竟在直播中说出”她是我的，我的“这种反仆为主的狂妄之语。于是神降下了她的惩罚，向晚从此无法摆脱这颗醒目的大头，并且她的队友们不再想和她做同事，她的粉丝们也不再想和她做兄弟。嘉门!<img src='DianaLike.jpg' class='IMG'>",
    height: "500px",
  },
];


let div = document.createElement("div");
var cr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var crx, element;
var t, k;
var Name = ["b1", "b2", "b3", "b4", "b5", "b6"];

function InitialDraw() {
  var i;
  for (i = 1; i <= 6; i++) {
    div = document.createElement("div");
    div.innerHTML =
      '<button class="word" id="b' +
      String(i) +
      '"' +
      "onclick = Slide(" +
      i +
      ")>" +
      data[i - 1].title +
      "</button>";
    document.getElementById("cr" + String(i)).append(div);
  }
}
InitialDraw();

function Slide(x) {
  crx = document.getElementById("cr" + x);
  crx.style.backgroundColor = "aqua";
  element = document.getElementById(Name[x - 1]);
  element.style.color = "gray";
  if (cr[x - 1] == 1) {
    element.style.height = data[x - 1].height;
    element.style.backgroundColor = "aqua";
    element.innerHTML = data[x - 1].content;
  } else {
    element.innerHTML = data[x - 1].title;
    element.style.height = "34px";
  }

  cr[x - 1] = 1 - cr[x - 1];
}
