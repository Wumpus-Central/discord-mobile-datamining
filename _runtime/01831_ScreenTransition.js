// _runtime/01831_ScreenTransition.js
let fn;
let fn10;
let fn11;
let fn12;
let fn13;
let fn2;
let fn3;
let fn4;
let fn5;
let fn6;
let fn7;
let fn8;
let fn9;
let obj9;
let obj = { topScreenStyle: fn, belowTopScreenStyle: fn2 };
fn = function n(translateX) {
  let items;
  const obj = { transform: items };
  items = [];
  const obj2 = { translateX: translateX.translationX };
  items[0] = obj2;
  return obj;
};
fn.__closure = {};
fn.__workletHash = 14848134276742;
fn.__initData = { code: "function pnpm_presetsTs1(event){return{transform:[{translateX:event.translationX}]};}" };
fn2 = function t(translationX, width) {
  let items;
  const obj = { transform: items };
  items = [];
  const obj2 = { translateX: 0.3 * (translationX.translationX - width.width) };
  items[0] = obj2;
  return obj;
};
fn2.__closure = {};
fn2.__workletHash = 12797035112106;
fn2.__initData = {
  code: "function pnpm_presetsTs2(event,screenSize){return{transform:[{translateX:(event.translationX-screenSize.width)*0.3}]};}",
};
let obj2 = { topScreenStyle: fn3, belowTopScreenStyle: fn4 };
fn3 = function o(translateX) {
  let items;
  const obj = { transform: items };
  items = [];
  const obj2 = { translateX: translateX.translationX };
  items[0] = obj2;
  return obj;
};
fn3.__closure = {};
fn3.__workletHash = 5793766989636;
fn3.__initData = { code: "function pnpm_presetsTs3(event){return{transform:[{translateX:event.translationX}]};}" };
fn4 = function s(translationX, width) {
  let items;
  const obj = { transform: items };
  items = [];
  const obj2 = { translateX: 0.3 * (translationX.translationX + width.width) };
  items[0] = obj2;
  return obj;
};
fn4.__closure = {};
fn4.__workletHash = 13576157887338;
fn4.__initData = {
  code: "function pnpm_presetsTs4(event,screenSize){return{transform:[{translateX:(event.translationX+screenSize.width)*0.3}]};}",
};
const obj3 = { topScreenStyle: fn5, belowTopScreenStyle: fn6 };
fn5 = function c(translateY) {
  let items;
  const obj = { transform: items };
  items = [];
  const obj2 = { translateY: translateY.translationY };
  items[0] = obj2;
  return obj;
};
fn5.__closure = {};
fn5.__workletHash = 15806696129186;
fn5.__initData = { code: "function pnpm_presetsTs5(event){return{transform:[{translateY:event.translationY}]};}" };
fn6 = function _(translationY, height) {
  let items;
  const obj = { transform: items };
  items = [];
  const obj2 = { translateY: 0.3 * (translationY.translationY - height.height) };
  items[0] = obj2;
  return obj;
};
fn6.__closure = {};
fn6.__workletHash = 15757511340599;
fn6.__initData = {
  code: "function pnpm_presetsTs6(event,screenSize){return{transform:[{translateY:(event.translationY-screenSize.height)*0.3}]};}",
};
const obj4 = { topScreenStyle: fn7, belowTopScreenStyle: fn8 };
fn7 = function u(translateY) {
  let items;
  const obj = { transform: items };
  items = [];
  const obj2 = { translateY: translateY.translationY };
  items[0] = obj2;
  return obj;
};
fn7.__closure = {};
fn7.__workletHash = 469647866976;
fn7.__initData = { code: "function pnpm_presetsTs7(event){return{transform:[{translateY:event.translationY}]};}" };
fn8 = function l(translationY, height) {
  let items;
  const obj = { transform: items };
  items = [];
  const obj2 = { translateY: 0.3 * (translationY.translationY + height.height) };
  items[0] = obj2;
  return obj;
};
fn8.__closure = {};
fn8.__workletHash = 155953863935;
fn8.__initData = {
  code: "function pnpm_presetsTs8(event,screenSize){return{transform:[{translateY:(event.translationY+screenSize.height)*0.3}]};}",
};
const obj5 = { topScreenStyle: fn9, belowTopScreenStyle: fn10 };
fn9 = function f(translateX, arg1) {
  let items;
  const obj = { transform: items };
  items = [,];
  const obj2 = { translateX: translateX.translationX };
  items[0] = obj2;
  items[1] = { translateY: translateX.translationY };
  return obj;
};
fn9.__closure = {};
fn9.__workletHash = 2086163822059;
fn9.__initData = {
  code: "function pnpm_presetsTs9(event,_screenSize){return{transform:[{translateX:event.translationX},{translateY:event.translationY}]};}",
};
fn10 = function p(arg0, arg1) {
  return {};
};
fn10.__closure = {};
fn10.__workletHash = 16448013209296;
fn10.__initData = { code: "function pnpm_presetsTs10(_event,_screenSize){return{};}" };
const obj6 = { topScreenStyle: fn11, belowTopScreenStyle: S };
fn11 = function w(translateX, arg1) {
  let items;
  const obj = { transform: items };
  items = [];
  const obj2 = { translateX: translateX.translationX };
  items[0] = obj2;
  return obj;
};
fn11.__closure = {};
fn11.__workletHash = 6713361531789;
fn11.__initData = {
  code: "function pnpm_presetsTs11(event,_screenSize){return{transform:[{translateX:event.translationX}]};}",
};
class S {
  constructor(arg0, arg1) {
    return {};
  }
}
S.__closure = {};
S.__workletHash = 13760449121746;
S.__initData = { code: "function pnpm_presetsTs12(_event,_screenSize){return{};}" };
const obj7 = { topScreenStyle: fn12, belowTopScreenStyle: fn13 };
fn12 = function v(translateY, arg1) {
  let items;
  const obj = { transform: items };
  items = [];
  const obj2 = { translateY: translateY.translationY };
  items[0] = obj2;
  return obj;
};
fn12.__closure = {};
fn12.__workletHash = 9445517580655;
fn12.__initData = {
  code: "function pnpm_presetsTs13(event,_screenSize){return{transform:[{translateY:event.translationY}]};}",
};
fn13 = function h(arg0, arg1) {
  return {};
};
fn13.__closure = {};
fn13.__workletHash = 16649253670356;
fn13.__initData = { code: "function pnpm_presetsTs14(_event,_screenSize){return{};}" };
const obj8 = {
  SwipeRight: obj,
  SwipeLeft: obj2,
  SwipeDown: obj3,
  SwipeUp: obj4,
  Horizontal: obj6,
  Vertical: obj7,
  TwoDimensional: obj5,
  SwipeRightFade: obj9,
};
obj9 = { topScreenStyle: X, belowTopScreenStyle: T };
class X {
  constructor(translationX, width) {
    const obj = { opacity: 1 - Math.abs(translationX.translationX / width.width) };
    return obj;
  }
}
X.__closure = {};
X.__workletHash = 8179926638650;
X.__initData = {
  code: "function pnpm_presetsTs15(event,screenSize){return{opacity:1-Math.abs(event.translationX/screenSize.width)};}",
};
class T {
  constructor(arg0, arg1) {
    return {};
  }
}
T.__closure = {};
T.__workletHash = 13961689582806;
T.__initData = { code: "function pnpm_presetsTs16(_event,_screenSize){return{};}" };

export const ScreenTransition = obj8;
