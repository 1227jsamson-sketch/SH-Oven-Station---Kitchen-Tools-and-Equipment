function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ldf1tKJUbi":
        Script1();
        break;
      case "6FILtAq2XWf":
        Script2();
        break;
      case "6eOwMoNpySt":
        Script3();
        break;
      case "5kKBrJJvHXW":
        Script4();
        break;
      case "6AZoQr6ueOv":
        Script5();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const target = object('6TqcDpeV0iJ');
const duration = 750;
const easing = 'ease-out';
const id = '6quNswiXNiV';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6TqcDpeV0iJ');
const duration = 750;
const easing = 'ease-out';
const id = '6KoTwm342UI';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6TqcDpeV0iJ');
const duration = 750;
const easing = 'ease-out';
const id = '6quNswiXNiV';
const growAmount = 0.2;
const delay = 11500;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  const target = object('6TqcDpeV0iJ');
const duration = 750;
const easing = 'ease-out';
const id = '6KoTwm342UI';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6TqcDpeV0iJ');
const duration = 750;
const easing = 'ease-out';
const id = '6quNswiXNiV';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
