// === Module 13322: ChannelAnimationConstants ===

// Module 13322 (ChannelAnimationConstants)
import spring from "spring" /* 5185 */;
import size from "module_2" /* 2 */;

const CHANNEL_SPRING_CONFIG = { damping: 35, stiffness: 275, mass: 1, overshootClamping: true, restSpeedThreshold: 0.001, restDisplacementThreshold: 0.001 };
const fn = function n() {
  const obj = { initialValues: null, animations: null };
  const obj2 = { transform: null, opacity: 0 };
  const items = [{ scale: 0 }];
  obj2.transform = items;
  obj.initialValues = obj2;
  const obj3 = { transform: null, opacity: null };
  const obj4 = { scale: spring.withSpring(1, obj) };
  const items1 = [obj4];
  obj3.transform = items1;
  obj3.opacity = spring.withSpring(1, obj);
  obj.animations = obj3;
  return obj;
};
fn.__closure = { withSpring: spring.withSpring, CHANNEL_SPRING_CONFIG };
fn.__workletHash = 5885186288311;
fn.__initData = { code: "function ChannelAnimationConstantsTsx1(){const{withSpring,CHANNEL_SPRING_CONFIG}=this.__closure;return{initialValues:{transform:[{scale:0}],opacity:0},animations:{transform:[{scale:withSpring(1,CHANNEL_SPRING_CONFIG)}],opacity:withSpring(1,CHANNEL_SPRING_CONFIG)}};}" };
const fn2 = function t() {
  const obj = { initialValues: null, animations: null };
  const obj2 = { transform: null, opacity: 1 };
  const items = [{ scale: 1 }];
  obj2.transform = items;
  obj.initialValues = obj2;
  const obj3 = { transform: null, opacity: null };
  const obj4 = { scale: spring.withSpring(0, obj) };
  const items1 = [obj4];
  obj3.transform = items1;
  obj3.opacity = spring.withSpring(0, obj);
  obj.animations = obj3;
  return obj;
};
let obj2 = { withSpring: spring.withSpring, CHANNEL_SPRING_CONFIG };
fn2.__closure = { withSpring: spring.withSpring, CHANNEL_SPRING_CONFIG };
fn2.__workletHash = 1746051409364;
fn2.__initData = { code: "function ChannelAnimationConstantsTsx2(){const{withSpring,CHANNEL_SPRING_CONFIG}=this.__closure;return{initialValues:{transform:[{scale:1}],opacity:1},animations:{transform:[{scale:withSpring(0,CHANNEL_SPRING_CONFIG)}],opacity:withSpring(0,CHANNEL_SPRING_CONFIG)}};}" };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelAnimationConstants.tsx");

export const MESSAGE_PREVIEW_DELAY = 350;
export { CHANNEL_SPRING_CONFIG };
export const TYPING_ENTERING = fn;
export const TYPING_EXITING = fn2;