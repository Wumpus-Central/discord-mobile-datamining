// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelAnimationConstants.tsx
import spring from "../../../../../design/animation/reanimated/spring/spring.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const CHANNEL_SPRING_CONFIG = {
  damping: 35,
  stiffness: 275,
  mass: 1,
  overshootClamping: true,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
};
const fn = function n() {
  let items;
  let items1;
  let obj2;
  let obj3;
  let obj5;
  let obj6;
  const obj = { initialValues: obj2, animations: obj3 };
  obj2 = { transform: items, opacity: 0 };
  items = [{ scale: 0 }];
  obj3 = { transform: items1, opacity: obj6.withSpring(1, obj) };
  const obj4 = { scale: obj5.withSpring(1, obj) };
  items1 = [obj4];
  obj5 = spring;
  obj6 = spring;
  return obj;
};
let obj2 = { withSpring: spring.withSpring, CHANNEL_SPRING_CONFIG };
fn.__closure = obj2;
fn.__workletHash = 5885186288311;
fn.__initData = {
  code: "function ChannelAnimationConstantsTsx1(){const{withSpring,CHANNEL_SPRING_CONFIG}=this.__closure;return{initialValues:{transform:[{scale:0}],opacity:0},animations:{transform:[{scale:withSpring(1,CHANNEL_SPRING_CONFIG)}],opacity:withSpring(1,CHANNEL_SPRING_CONFIG)}};}",
};
const fn2 = function t() {
  let items;
  let items1;
  let obj2;
  let obj3;
  let obj5;
  let obj6;
  const obj = { initialValues: obj2, animations: obj3 };
  obj2 = { transform: items, opacity: 1 };
  items = [{ scale: 1 }];
  obj3 = { transform: items1, opacity: obj6.withSpring(0, obj) };
  const obj4 = { scale: obj5.withSpring(0, obj) };
  items1 = [obj4];
  obj5 = spring;
  obj6 = spring;
  return obj;
};
let obj3 = { withSpring: spring.withSpring, CHANNEL_SPRING_CONFIG };
fn2.__closure = obj3;
fn2.__workletHash = 1746051409364;
fn2.__initData = {
  code: "function ChannelAnimationConstantsTsx2(){const{withSpring,CHANNEL_SPRING_CONFIG}=this.__closure;return{initialValues:{transform:[{scale:1}],opacity:1},animations:{transform:[{scale:withSpring(0,CHANNEL_SPRING_CONFIG)}],opacity:withSpring(0,CHANNEL_SPRING_CONFIG)}};}",
};
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/ChannelAnimationConstants.tsx",
);

export const MESSAGE_PREVIEW_DELAY = 350;
export { CHANNEL_SPRING_CONFIG };
export const TYPING_ENTERING = fn;
export const TYPING_EXITING = fn2;
