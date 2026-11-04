// === Module 15096: ChannelAnimationConstants ===

// Module 15096 (ChannelAnimationConstants)
import spring_spring from "spring/spring" /* 5771 */;
import size from "module_2" /* 2 */;

let obj = { damping: 35, stiffness: 275, mass: 1, overshootClamping: true };
let items = [{ code: "(function ChannelAnimationConstantsTsx1(){let[withSpring,CHANNEL_SPRING_CONFIG]=this.__closure;return{initialValues:{transform:[{scale:0}],opacity:0},animations:{transform:[{scale:withSpring(1,CHANNEL_SPRING_CONFIG)}],opacity:withSpring(1,CHANNEL_SPRING_CONFIG)}};})" }, spring_spring.withSpring, obj];
let c0;
let c1;
[tmp2, tmp3, tmp4] = items;
class ChannelAnimationConstantsTsx1 {
  constructor() {
    obj = { initialValues: null, animations: null };
    obj1 = { transform: null, opacity: 0 };
    items = [];
    items[0] = { scale: 0 };
    obj1.transform = items;
    obj.initialValues = obj1;
    obj5 = { transform: null, opacity: null };
    obj6 = { scale: closure_0(1, closure_1) };
    items1 = [];
    items1[0] = obj6;
    obj5.transform = items1;
    obj5.opacity = closure_0(1, closure_1);
    obj.animations = obj5;
    return obj;
  }
}
let items1 = [tmp3, tmp4];
ChannelAnimationConstantsTsx1.__closure = items1;
ChannelAnimationConstantsTsx1.__workletHash = 14128288517870;
ChannelAnimationConstantsTsx1.__initData = tmp2;
const items2 = [{ code: "(function ChannelAnimationConstantsTsx2(){let[withSpring,CHANNEL_SPRING_CONFIG]=this.__closure;return{initialValues:{transform:[{scale:1}],opacity:1},animations:{transform:[{scale:withSpring(0,CHANNEL_SPRING_CONFIG)}],opacity:withSpring(0,CHANNEL_SPRING_CONFIG)}};})" }, spring_spring.withSpring, obj];
let closure_129_0;
let closure_129_1;
[tmp5, tmp6, tmp7] = items2;
class ChannelAnimationConstantsTsx2 {
  constructor() {
    obj = { initialValues: null, animations: null };
    obj1 = { transform: null, opacity: 1 };
    items = [];
    items[0] = { scale: 1 };
    obj1.transform = items;
    obj.initialValues = obj1;
    obj5 = { transform: null, opacity: null };
    obj6 = { scale: closure_0(0, closure_1) };
    items1 = [];
    items1[0] = obj6;
    obj5.transform = items1;
    obj5.opacity = closure_0(0, closure_1);
    obj.animations = obj5;
    return obj;
  }
}
const items3 = [tmp6, tmp7];
ChannelAnimationConstantsTsx2.__closure = items3;
ChannelAnimationConstantsTsx2.__workletHash = 6413362691117;
ChannelAnimationConstantsTsx2.__initData = tmp5;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelAnimationConstants.tsx");

export const MESSAGE_PREVIEW_DELAY = 350;
export const CHANNEL_SPRING_CONFIG = obj;
export const TYPING_ENTERING = ChannelAnimationConstantsTsx1;
export const TYPING_EXITING = ChannelAnimationConstantsTsx2;