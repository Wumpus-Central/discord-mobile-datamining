// === Module 1841: n ===

// Module 1841 (n)
const fn = function n(translateX) {
  const transform = [{ translateX: translateX.translationX }];
  return { transform };
};
fn.__closure = {};
fn.__workletHash = 14848134276742;
fn.__initData = { code: "function pnpm_presetsTs1(event){return{transform:[{translateX:event.translationX}]};}" };
const fn2 = function t(translationX, width) {
  const transform = [{ translateX: 0.3 * (translationX.translationX - width.width) }];
  return { transform };
};
fn2.__closure = {};
fn2.__workletHash = 12797035112106;
fn2.__initData = { code: "function pnpm_presetsTs2(event,screenSize){return{transform:[{translateX:(event.translationX-screenSize.width)*0.3}]};}" };
const fn3 = function o(translateX) {
  const transform = [{ translateX: translateX.translationX }];
  return { transform };
};
fn3.__closure = {};
fn3.__workletHash = 5793766989636;
fn3.__initData = { code: "function pnpm_presetsTs3(event){return{transform:[{translateX:event.translationX}]};}" };
const fn4 = function s(translationX, width) {
  const transform = [{ translateX: 0.3 * (translationX.translationX + width.width) }];
  return { transform };
};
fn4.__closure = {};
fn4.__workletHash = 13576157887338;
fn4.__initData = { code: "function pnpm_presetsTs4(event,screenSize){return{transform:[{translateX:(event.translationX+screenSize.width)*0.3}]};}" };
const fn5 = function c(translateY) {
  const transform = [{ translateY: translateY.translationY }];
  return { transform };
};
fn5.__closure = {};
fn5.__workletHash = 15806696129186;
fn5.__initData = { code: "function pnpm_presetsTs5(event){return{transform:[{translateY:event.translationY}]};}" };
const fn6 = function _(translationY, height) {
  const transform = [{ translateY: 0.3 * (translationY.translationY - height.height) }];
  return { transform };
};
fn6.__closure = {};
fn6.__workletHash = 15757511340599;
fn6.__initData = { code: "function pnpm_presetsTs6(event,screenSize){return{transform:[{translateY:(event.translationY-screenSize.height)*0.3}]};}" };
const fn7 = function u(translateY) {
  const transform = [{ translateY: translateY.translationY }];
  return { transform };
};
fn7.__closure = {};
fn7.__workletHash = 469647866976;
fn7.__initData = { code: "function pnpm_presetsTs7(event){return{transform:[{translateY:event.translationY}]};}" };
const fn8 = function l(translationY, height) {
  const transform = [{ translateY: 0.3 * (translationY.translationY + height.height) }];
  return { transform };
};
fn8.__closure = {};
fn8.__workletHash = 155953863935;
fn8.__initData = { code: "function pnpm_presetsTs8(event,screenSize){return{transform:[{translateY:(event.translationY+screenSize.height)*0.3}]};}" };
const fn9 = function f(translateX) {
  const transform = [{ translateX: translateX.translationX }, { translateY: translateX.translationY }];
  return { transform };
};
fn9.__closure = {};
fn9.__workletHash = 2086163822059;
fn9.__initData = { code: "function pnpm_presetsTs9(event,_screenSize){return{transform:[{translateX:event.translationX},{translateY:event.translationY}]};}" };
const fn10 = function p(arg0, arg1) {
  return {};
};
fn10.__closure = {};
fn10.__workletHash = 16448013209296;
fn10.__initData = { code: "function pnpm_presetsTs10(_event,_screenSize){return{};}" };
let obj = { topScreenStyle: fn11, belowTopScreenStyle: null };
fn11 = function w(translateX) {
  const transform = [{ translateX: translateX.translationX }];
  return { transform };
};
fn11.__closure = {};
fn11.__workletHash = 6713361531789;
fn11.__initData = { code: "function pnpm_presetsTs11(event,_screenSize){return{transform:[{translateX:event.translationX}]};}" };
class S {
  constructor(arg0, arg1) {
    return {};
  }
}
S.__closure = {};
S.__workletHash = 13760449121746;
S.__initData = { code: "function pnpm_presetsTs12(_event,_screenSize){return{};}" };
obj[1] = S;
const fn12 = function v(translateY) {
  const transform = [{ translateY: translateY.translationY }];
  return { transform };
};
fn12.__closure = {};
fn12.__workletHash = 9445517580655;
fn12.__initData = { code: "function pnpm_presetsTs13(event,_screenSize){return{transform:[{translateY:event.translationY}]};}" };
const fn13 = function h(arg0, arg1) {
  return {};
};
fn13.__closure = {};
fn13.__workletHash = 16649253670356;
fn13.__initData = { code: "function pnpm_presetsTs14(_event,_screenSize){return{};}" };
obj = { SwipeRight: { topScreenStyle: fn, belowTopScreenStyle: fn2 }, SwipeLeft: { topScreenStyle: fn3, belowTopScreenStyle: fn4 }, SwipeDown: { topScreenStyle: fn5, belowTopScreenStyle: fn6 }, SwipeUp: { topScreenStyle: fn7, belowTopScreenStyle: fn8 }, Horizontal: obj, Vertical: { topScreenStyle: fn12, belowTopScreenStyle: fn13 }, TwoDimensional: { topScreenStyle: fn9, belowTopScreenStyle: fn10 }, SwipeRightFade: null };
obj = { topScreenStyle: null, belowTopScreenStyle: null };
class X {
  constructor(arg0, arg1) {
    obj = { opacity: 1 - Math.abs(arg0.translationX / arg1.width) };
    return obj;
  }
}
X.__closure = {};
X.__workletHash = 8179926638650;
X.__initData = { code: "function pnpm_presetsTs15(event,screenSize){return{opacity:1-Math.abs(event.translationX/screenSize.width)};}" };
obj[0] = X;
class T {
  constructor(arg0, arg1) {
    return {};
  }
}
T.__closure = {};
T.__workletHash = 13961689582806;
T.__initData = { code: "function pnpm_presetsTs16(_event,_screenSize){return{};}" };
obj[1] = T;
obj[7] = obj;
arg5.ScreenTransition = obj;