// === Module 9446: n ===

// Module 9446 (n)
import set from "set" /* 2 */;
import CONFIG_NEVER_ANIMATE from "CONFIG_NEVER_ANIMATE" /* 4928 */;

let obj = { damping: 35, stiffness: 275, mass: 1, overshootClamping: true, restSpeedThreshold: 0.001, restDisplacementThreshold: 0.001 };
const fn = function n() {
  obj = { initialValues: { transform: items, opacity: 0 }, animations: null };
  items = [{ scale: 0 }];
  obj = { transform: null, opacity: null };
  obj = { scale: CONFIG_NEVER_ANIMATE.withSpring(1, obj) };
  const items1 = [obj];
  obj[0] = items1;
  const obj4 = CONFIG_NEVER_ANIMATE;
  obj[1] = CONFIG_NEVER_ANIMATE.withSpring(1, obj);
  obj[1] = obj;
  return obj;
};
obj = { withSpring: CONFIG_NEVER_ANIMATE.withSpring, CHANNEL_SPRING_CONFIG: obj };
fn.__closure = obj;
fn.__workletHash = 5885186288311;
fn.__initData = { code: "function ChannelAnimationConstantsTsx1(){const{withSpring,CHANNEL_SPRING_CONFIG}=this.__closure;return{initialValues:{transform:[{scale:0}],opacity:0},animations:{transform:[{scale:withSpring(1,CHANNEL_SPRING_CONFIG)}],opacity:withSpring(1,CHANNEL_SPRING_CONFIG)}};}" };
const fn2 = function t() {
  obj = { initialValues: { transform: items, opacity: 1 }, animations: null };
  items = [{ scale: 1 }];
  obj = { transform: null, opacity: null };
  obj = { scale: CONFIG_NEVER_ANIMATE.withSpring(0, obj) };
  const items1 = [obj];
  obj[0] = items1;
  const obj4 = CONFIG_NEVER_ANIMATE;
  obj[1] = CONFIG_NEVER_ANIMATE.withSpring(0, obj);
  obj[1] = obj;
  return obj;
};
obj = { withSpring: CONFIG_NEVER_ANIMATE.withSpring, CHANNEL_SPRING_CONFIG: obj };
fn2.__closure = obj;
fn2.__workletHash = 1746051409364;
fn2.__initData = { code: "function ChannelAnimationConstantsTsx2(){const{withSpring,CHANNEL_SPRING_CONFIG}=this.__closure;return{initialValues:{transform:[{scale:1}],opacity:1},animations:{transform:[{scale:withSpring(0,CHANNEL_SPRING_CONFIG)}],opacity:withSpring(0,CHANNEL_SPRING_CONFIG)}};}" };
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelAnimationConstants.tsx");

export const MESSAGE_PREVIEW_DELAY = 350;
export const CHANNEL_SPRING_CONFIG = obj;
export const TYPING_ENTERING = fn;
export const TYPING_EXITING = fn2;