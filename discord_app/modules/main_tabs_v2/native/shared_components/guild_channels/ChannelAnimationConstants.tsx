// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelAnimationConstants.tsx
import spring from "../../../../../design/animation/reanimated/spring/spring.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let CHANNEL_SPRING_CONFIG = {
  damping: 35,
  stiffness: 275,
  mass: 1,
  overshootClamping: true,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
};
const fn = function n() {
  let animations = { initialValues: null, animations: null };
  animations = { transform: null, opacity: 0 };
  const items = [{ scale: 0 }];
  animations.transform = items;
  animations.initialValues = animations;
  animations = { transform: null, opacity: null };
  const obj1 = { scale: spring.withSpring(1, animations) };
  const items1 = [obj1];
  animations.transform = items1;
  animations.opacity = spring.withSpring(1, animations);
  animations.animations = animations;
  return animations;
};
CHANNEL_SPRING_CONFIG = { withSpring: spring.withSpring, CHANNEL_SPRING_CONFIG };
fn.__closure = CHANNEL_SPRING_CONFIG;
fn.__workletHash = 5885186288311;
fn.__initData = {
  code: "function ChannelAnimationConstantsTsx1(){const{withSpring,CHANNEL_SPRING_CONFIG}=this.__closure;return{initialValues:{transform:[{scale:0}],opacity:0},animations:{transform:[{scale:withSpring(1,CHANNEL_SPRING_CONFIG)}],opacity:withSpring(1,CHANNEL_SPRING_CONFIG)}};}",
};
const fn2 = function t() {
  let animations = { initialValues: null, animations: null };
  animations = { transform: null, opacity: 1 };
  const items = [{ scale: 1 }];
  animations.transform = items;
  animations.initialValues = animations;
  animations = { transform: null, opacity: null };
  const obj1 = { scale: spring.withSpring(0, animations) };
  const items1 = [obj1];
  animations.transform = items1;
  animations.opacity = spring.withSpring(0, animations);
  animations.animations = animations;
  return animations;
};
CHANNEL_SPRING_CONFIG = { withSpring: spring.withSpring, CHANNEL_SPRING_CONFIG };
fn2.__closure = CHANNEL_SPRING_CONFIG;
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
