// === Module 1826: ? ===

// Module 1826
let obj = { topScreenStyle: null, belowTopScreenStyle: null };
const fn = function n(translateX) {
  const obj = { transform: null };
  const items = [{ translateX: translateX.translationX }];
  obj.transform = items;
  return obj;
};
fn.__closure = {};
fn.__workletHash = 14848134276742;
fn.__initData = { code: "function pnpm_presetsTs1(event){return{transform:[{translateX:event.translationX}]};}" };
obj.topScreenStyle = fn;
const fn2 = function t(translationX, width) {
  const obj = { transform: null };
  const items = [{ translateX: 0.3 * (translationX.translationX - width.width) }];
  obj.transform = items;
  return obj;
};
fn2.__closure = {};
fn2.__workletHash = 12797035112106;
fn2.__initData = { code: "function pnpm_presetsTs2(event,screenSize){return{transform:[{translateX:(event.translationX-screenSize.width)*0.3}]};}" };
obj.belowTopScreenStyle = fn2;
const obj2 = { topScreenStyle: null, belowTopScreenStyle: null };
const fn3 = function o(translateX) {
  const obj = { transform: null };
  const items = [{ translateX: translateX.translationX }];
  obj.transform = items;
  return obj;
};
fn3.__closure = {};
fn3.__workletHash = 5793766989636;
fn3.__initData = { code: "function pnpm_presetsTs3(event){return{transform:[{translateX:event.translationX}]};}" };
obj2.topScreenStyle = fn3;
const fn4 = function s(translationX, width) {
  const obj = { transform: null };
  const items = [{ translateX: 0.3 * (translationX.translationX + width.width) }];
  obj.transform = items;
  return obj;
};
fn4.__closure = {};
fn4.__workletHash = 13576157887338;
fn4.__initData = { code: "function pnpm_presetsTs4(event,screenSize){return{transform:[{translateX:(event.translationX+screenSize.width)*0.3}]};}" };
obj2.belowTopScreenStyle = fn4;
const obj3 = { topScreenStyle: null, belowTopScreenStyle: null };
const fn5 = function c(translateY) {
  const obj = { transform: null };
  const items = [{ translateY: translateY.translationY }];
  obj.transform = items;
  return obj;
};
fn5.__closure = {};
fn5.__workletHash = 15806696129186;
fn5.__initData = { code: "function pnpm_presetsTs5(event){return{transform:[{translateY:event.translationY}]};}" };
obj3.topScreenStyle = fn5;
const fn6 = function _(translationY, height) {
  const obj = { transform: null };
  const items = [{ translateY: 0.3 * (translationY.translationY - height.height) }];
  obj.transform = items;
  return obj;
};
fn6.__closure = {};
fn6.__workletHash = 15757511340599;
fn6.__initData = { code: "function pnpm_presetsTs6(event,screenSize){return{transform:[{translateY:(event.translationY-screenSize.height)*0.3}]};}" };
obj3.belowTopScreenStyle = fn6;
const obj4 = { topScreenStyle: null, belowTopScreenStyle: null };
const fn7 = function u(translateY) {
  const obj = { transform: null };
  const items = [{ translateY: translateY.translationY }];
  obj.transform = items;
  return obj;
};
fn7.__closure = {};
fn7.__workletHash = 469647866976;
fn7.__initData = { code: "function pnpm_presetsTs7(event){return{transform:[{translateY:event.translationY}]};}" };
obj4.topScreenStyle = fn7;
const fn8 = function l(translationY, height) {
  const obj = { transform: null };
  const items = [{ translateY: 0.3 * (translationY.translationY + height.height) }];
  obj.transform = items;
  return obj;
};
fn8.__closure = {};
fn8.__workletHash = 155953863935;
fn8.__initData = { code: "function pnpm_presetsTs8(event,screenSize){return{transform:[{translateY:(event.translationY+screenSize.height)*0.3}]};}" };
obj4.belowTopScreenStyle = fn8;
const obj5 = { topScreenStyle: null, belowTopScreenStyle: null };
const fn9 = function f(translateX, arg1) {
  const obj = { transform: null };
  const items = [{ translateX: translateX.translationX }, { translateY: translateX.translationY }];
  obj.transform = items;
  return obj;
};
fn9.__closure = {};
fn9.__workletHash = 2086163822059;
fn9.__initData = { code: "function pnpm_presetsTs9(event,_screenSize){return{transform:[{translateX:event.translationX},{translateY:event.translationY}]};}" };
obj5.topScreenStyle = fn9;
const fn10 = function p(arg0, arg1) {
  return {};
};
fn10.__closure = {};
fn10.__workletHash = 16448013209296;
fn10.__initData = { code: "function pnpm_presetsTs10(_event,_screenSize){return{};}" };
obj5.belowTopScreenStyle = fn10;
const obj6 = { topScreenStyle: null, belowTopScreenStyle: null };
const fn11 = function w(translateX, arg1) {
  const obj = { transform: null };
  const items = [{ translateX: translateX.translationX }];
  obj.transform = items;
  return obj;
};
fn11.__closure = {};
fn11.__workletHash = 6713361531789;
fn11.__initData = { code: "function pnpm_presetsTs11(event,_screenSize){return{transform:[{translateX:event.translationX}]};}" };
obj6.topScreenStyle = fn11;
class S {
  constructor(arg0, arg1) {
    return {};
  }
}
S.__closure = {};
S.__workletHash = 13760449121746;
S.__initData = { code: "function pnpm_presetsTs12(_event,_screenSize){return{};}" };
obj6.belowTopScreenStyle = S;
const obj7 = { topScreenStyle: null, belowTopScreenStyle: null };
const fn12 = function v(translateY, arg1) {
  const obj = { transform: null };
  const items = [{ translateY: translateY.translationY }];
  obj.transform = items;
  return obj;
};
fn12.__closure = {};
fn12.__workletHash = 9445517580655;
fn12.__initData = { code: "function pnpm_presetsTs13(event,_screenSize){return{transform:[{translateY:event.translationY}]};}" };
obj7.topScreenStyle = fn12;
const fn13 = function h(arg0, arg1) {
  return {};
};
fn13.__closure = {};
fn13.__workletHash = 16649253670356;
fn13.__initData = { code: "function pnpm_presetsTs14(_event,_screenSize){return{};}" };
obj7.belowTopScreenStyle = fn13;
const obj8 = { SwipeRight: obj, SwipeLeft: obj2, SwipeDown: obj3, SwipeUp: obj4, Horizontal: obj6, Vertical: obj7, TwoDimensional: obj5, SwipeRightFade: null };
const obj9 = { topScreenStyle: null, belowTopScreenStyle: null };
class X {
  constructor(arg0, arg1) {
    obj = { opacity: 1 - Math.abs(arg0.translationX / arg1.width) };
    return obj;
  }
}
X.__closure = {};
X.__workletHash = 8179926638650;
X.__initData = { code: "function pnpm_presetsTs15(event,screenSize){return{opacity:1-Math.abs(event.translationX/screenSize.width)};}" };
obj9.topScreenStyle = X;
class T {
  constructor(arg0, arg1) {
    return {};
  }
}
T.__closure = {};
T.__workletHash = 13961689582806;
T.__initData = { code: "function pnpm_presetsTs16(_event,_screenSize){return{};}" };
obj9.belowTopScreenStyle = T;
obj8.SwipeRightFade = obj9;

export const ScreenTransition = obj8;