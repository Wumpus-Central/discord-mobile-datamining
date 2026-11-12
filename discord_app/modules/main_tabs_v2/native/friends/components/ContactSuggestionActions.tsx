// === Module 19079: ContactSuggestionActions ===

// Module 19079 (ContactSuggestionActions)
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import AddFriendsScreenUtils from "AddFriendsScreenUtils" /* 18634 */;
import _modDef19080 from "module_19080" /* 19080 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let obj = { duration: 200, easing: null };
const Easing = fn(1652).Easing;
obj.easing = Easing.in(fn(1652).Easing.quad);
let obj2 = { duration: 250, easing: null };
const Easing2 = fn(1652).Easing;
obj2.easing = Easing2.in(fn(1652).Easing.quad);
let obj3 = { duration: 250, easing: null };
const Easing3 = fn(1652).Easing;
obj3.easing = Easing3.in(fn(1652).Easing.quad);
let obj4 = { duration: 250, easing: null };
const Easing4 = fn(1652).Easing;
obj4.easing = Easing4.out(fn(1652).Easing.quad);
let closure_11 = { mass: 1, stiffness: 172, damping: 17.3 };
const createStyles = fn(5243);
let obj6 = { icon: { position: "absolute", top: 4, zIndex: 2, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, opacity: 0 } };
let closure_12 = createStyles.createStyles(obj6);
let closure_13 = { code: "(function ContactSuggestionActionsTsx1(){let[right,opacity,scale]=this.__closure;return{right:right.get(),opacity:opacity.get(),transform:[{scale:scale.get()}]};})" };
let closure_14 = { code: "(function ContactSuggestionActionsTsx2(){let[buttonOpacity]=this.__closure;return{opacity:buttonOpacity.get()};})" };
let closure_15 = { code: "(function ContactSuggestionActionsTsx3(){let[added]=this.__closure;return added.get();})" };
let closure_16 = { code: "(function ContactSuggestionActionsTsx4(finished){let[scheduleOnRN,finishAnimationCallback]=this.__closure;if(finished)scheduleOnRN(finishAnimationCallback);})" };
let closure_17 = { code: "(function ContactSuggestionActionsTsx5(finished){let[opacity,withDelay,withTiming,OPACITY_OUT_CONFIG,scale,SCALE_CONFIG,right,TRANSLATE_OUT_CONFIG,_worklet_15755955387829_init_data,scheduleOnRN,finishAnimationCallback]=this.__closure;if(!finished)return;opacity.set(withDelay(1000,withTiming(0,OPACITY_OUT_CONFIG)));scale.set(withDelay(1000,withTiming(0.5,SCALE_CONFIG)));right.set(withDelay(1000,withTiming(-8,TRANSLATE_OUT_CONFIG,'respect-motion-settings',function ContactSuggestionActionsTsx4Factory([_worklet_15755955387829_init_data,scheduleOnRN,finishAnimationCallback]){const ContactSuggestionActionsTsx4=function(finished){if(finished)scheduleOnRN(finishAnimationCallback);};ContactSuggestionActionsTsx4.__closure=[scheduleOnRN,finishAnimationCallback];ContactSuggestionActionsTsx4.__workletHash=15755955387829;ContactSuggestionActionsTsx4.__initData=_worklet_15755955387829_init_data;return ContactSuggestionActionsTsx4;}([_worklet_15755955387829_init_data,scheduleOnRN,finishAnimationCallback]))));})" };
let closure_18 = { code: "(function ContactSuggestionActionsTsx6(added){let[animate,scheduleOnRN,finishAnimationCallback,scale,withTiming,SCALE_CONFIG,opacity,OPACITY_CONFIG,buttonOpacity,right,withSpring,SPRING_CONFIG,_worklet_4132135122659_init_data,withDelay,OPACITY_OUT_CONFIG,TRANSLATE_OUT_CONFIG,_worklet_15755955387829_init_data]=this.__closure;if(!animate){scheduleOnRN(finishAnimationCallback);return;}if(added){scale.set(withTiming(1,SCALE_CONFIG));opacity.set(withTiming(1,OPACITY_CONFIG));buttonOpacity.set(withTiming(0,OPACITY_CONFIG));right.set(withSpring(12,SPRING_CONFIG,'respect-motion-settings',function ContactSuggestionActionsTsx5Factory([_worklet_4132135122659_init_data,opacity,withDelay,withTiming,OPACITY_OUT_CONFIG,scale,SCALE_CONFIG,right,TRANSLATE_OUT_CONFIG,_worklet_15755955387829_init_data,scheduleOnRN,finishAnimationCallback]){const ContactSuggestionActionsTsx5=function(finished){if(!finished)return;opacity.set(withDelay(1000,withTiming(0,OPACITY_OUT_CONFIG)));scale.set(withDelay(1000,withTiming(0.5,SCALE_CONFIG)));right.set(withDelay(1000,withTiming(-8,TRANSLATE_OUT_CONFIG,'respect-motion-settings',function ContactSuggestionActionsTsx4Factory([_worklet_15755955387829_init_data,scheduleOnRN,finishAnimationCallback]){const ContactSuggestionActionsTsx4=function(finished){if(finished)scheduleOnRN(finishAnimationCallback);};ContactSuggestionActionsTsx4.__closure=[scheduleOnRN,finishAnimationCallback];ContactSuggestionActionsTsx4.__workletHash=15755955387829;ContactSuggestionActionsTsx4.__initData=_worklet_15755955387829_init_data;return ContactSuggestionActionsTsx4;}([_worklet_15755955387829_init_data,scheduleOnRN,finishAnimationCallback]))));};ContactSuggestionActionsTsx5.__closure=[opacity,withDelay,withTiming,OPACITY_OUT_CONFIG,scale,SCALE_CONFIG,right,TRANSLATE_OUT_CONFIG,_worklet_15755955387829_init_data,scheduleOnRN,finishAnimationCallback];ContactSuggestionActionsTsx5.__workletHash=4132135122659;ContactSuggestionActionsTsx5.__initData=_worklet_4132135122659_init_data;return ContactSuggestionActionsTsx5;}([_worklet_4132135122659_init_data,opacity,withDelay,withTiming,OPACITY_OUT_CONFIG,scale,SCALE_CONFIG,right,TRANSLATE_OUT_CONFIG,_worklet_15755955387829_init_data,scheduleOnRN,finishAnimationCallback])));}else{buttonOpacity.set(1);scale.set(0.5);opacity.set(0);right.set(30);}})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ContactSuggestionActions.tsx");

export function ContactSuggestionActions(user) {
  user = user.user;
  _require = user;
  const added = user.added;
  importDefault = added;
  const onAddSuggestion = user.onAddSuggestion;
  dependencyMap = onAddSuggestion;
  const onFinishAnimation = user.onFinishAnimation;
  noop = onFinishAnimation;
  let str = user.size;
  if (str === undefined) {
    str = "sm";
  }
  const animate = user.animate;
  c4 = animate;
  const tmp = c12();
  const sharedValue = require("module_1652").useSharedValue(30);
  c5 = sharedValue;
  obj = require("module_1652");
  const sharedValue1 = require("module_1652").useSharedValue(0.5);
  c6 = sharedValue1;
  obj2 = require("module_1652");
  const sharedValue2 = require("module_1652").useSharedValue(0);
  c7 = sharedValue2;
  obj3 = require("module_1652");
  const sharedValue3 = require("module_1652").useSharedValue(1);
  c8 = sharedValue3;
  items = [onFinishAnimation, user];
  const callback = noop.useCallback(() => {
    if (null != c3) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        _undefined4(_undefined);
      }, 1000);
    }
  }, items);
  obj4 = require("module_1652");
  const obj5 = noop;
  let items1 = [c13, sharedValue, sharedValue2, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp9, tmp10, tmp11, tmp12] = items1;
  class ContactSuggestionActionsTsx1 {
    constructor() {
      obj = { right: closure_0.get(), opacity: closure_1.get(), transform: null };
      obj1 = { scale: closure_2.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items2 = [tmp10, tmp11, tmp12];
  ContactSuggestionActionsTsx1.__closure = items2;
  ContactSuggestionActionsTsx1.__workletHash = 1508257222955;
  ContactSuggestionActionsTsx1.__initData = tmp9;
  const animatedStyle = require("module_1652").useAnimatedStyle(ContactSuggestionActionsTsx1);
  const obj6 = require("module_1652");
  const items3 = [c14, sharedValue3];
  _require = undefined;
  [tmp14, tmp15] = items3;
  class ContactSuggestionActionsTsx2 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items4 = [tmp15];
  ContactSuggestionActionsTsx2.__closure = items4;
  ContactSuggestionActionsTsx2.__workletHash = 4559914341574;
  ContactSuggestionActionsTsx2.__initData = tmp14;
  const items5 = [onAddSuggestion, user, added, animate, sharedValue, sharedValue2, sharedValue1, sharedValue3];
  const animatedStyle1 = require("module_1652").useAnimatedStyle(ContactSuggestionActionsTsx2);
  const callback1 = obj5.useCallback(() => {
    AddFriendsScreenUtils.addContactSuggestion(c0);
    _undefined3(c0);
    const result = _undefined2.set(true);
    if (!c4) {
      const result1 = _undefined6.set(12);
      const result2 = _undefined8.set(1);
      const result3 = _undefined7.set(1);
      const result4 = _undefined9.set(0);
    }
  }, items5);
  const tmp2Result = require("module_1652");
  const items6 = [c15, added];
  _require = undefined;
  [tmp18, tmp19] = items6;
  class ContactSuggestionActionsTsx3 {
    constructor() {
      return closure_0.get();
    }
  }
  const items7 = [tmp19];
  ContactSuggestionActionsTsx3.__closure = items7;
  ContactSuggestionActionsTsx3.__workletHash = 303935681858;
  ContactSuggestionActionsTsx3.__initData = tmp18;
  const items8 = [closure_18, animate, require("module_1705").scheduleOnRN, callback, sharedValue1, require("timing/timing").withTiming, c9, sharedValue2, c7, sharedValue3, sharedValue, require("spring/spring").withSpring, c11, closure_17, require("module_1652").withDelay, c8, c10, c16];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  c15 = undefined;
  c16 = undefined;
  [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37] = items8;
  class ContactSuggestionActionsTsx6 {
    constructor(arg0) {
      if (closure_0) {
        tmp4 = user;
        if (user) {
          tmp13 = closure_3;
          tmp14 = closure_4;
          tmp15 = closure_5;
          num5 = 1;
          result = closure_3.set(closure_4(1, closure_5));
          tmp17 = closure_6;
          tmp18 = closure_7;
          result1 = closure_6.set(closure_4(1, closure_7));
          tmp20 = closure_8;
          num6 = 0;
          result2 = closure_8.set(closure_4(0, closure_7));
          tmp23 = closure_11;
          tmp24 = closure_12;
          items = [, , , , , , , , , , , ];
          items[0] = closure_12;
          items[1] = closure_6;
          tmp25 = closure_13;
          items[2] = closure_13;
          items[3] = closure_4;
          tmp26 = closure_14;
          items[4] = closure_14;
          items[5] = closure_3;
          items[6] = closure_5;
          items[7] = closure_9;
          tmp27 = closure_15;
          items[8] = closure_15;
          tmp28 = closure_16;
          items[9] = closure_16;
          tmp29 = closure_1;
          items[10] = closure_1;
          tmp30 = closure_2;
          items[11] = closure_2;
          closure_0 = undefined;
          closure_1 = undefined;
          closure_2 = undefined;
          closure_3 = undefined;
          closure_4 = undefined;
          closure_5 = undefined;
          closure_6 = undefined;
          closure_7 = undefined;
          closure_8 = undefined;
          closure_9 = undefined;
          closure_10 = undefined;
          tmp31 = items;
          [tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43] = items;
          class ContactSuggestionActionsTsx5 {
            constructor(arg0) {
              if (user) {
                tmp = closure_0;
                tmp4 = closure_3;
                num = 0;
                tmp2 = closure_1;
                tmp3 = closure_2;
                num2 = 1000;
                result = closure_0.set(closure_1(1000, closure_2(0, closure_3)));
                tmp6 = closure_4;
                tmp7 = closure_5;
                num3 = 0.5;
                result1 = closure_4.set(closure_1(1000, closure_2(0.5, closure_5)));
                tmp10 = closure_7;
                tmp11 = closure_8;
                items = [, , ];
                items[0] = closure_8;
                tmp12 = closure_9;
                items[1] = closure_9;
                tmp13 = closure_10;
                items[2] = closure_10;
                closure_0 = undefined;
                closure_1 = undefined;
                tmp14 = items;
                [tmp15, tmp16, tmp17] = items;
                class ContactSuggestionActionsTsx4 {
                  constructor(arg0) {
                    if (user) {
                      tmp = closure_0;
                      tmp2 = closure_1;
                      tmp3 = closure_0(closure_1);
                    }
                    return;
                  }
                }
                items1 = [, ];
                items1[0] = tmp16;
                items1[1] = tmp17;
                ContactSuggestionActionsTsx4.__closure = items1;
                num4 = 15755955387829;
                ContactSuggestionActionsTsx4.__workletHash = 15755955387829;
                ContactSuggestionActionsTsx4.__initData = tmp15;
                str = "respect-motion-settings";
                num5 = -8;
                tmp18 = tmp10;
                tmp19 = ContactSuggestionActionsTsx4;
                tmp9 = closure_6;
                result2 = closure_6.set(tmp2(1000, tmp3(-8, tmp10, "respect-motion-settings", ContactSuggestionActionsTsx4)));
              }
              return;
            }
          }
          items1 = [, , , , , , , , , , ];
          items1[0] = tmp33;
          items1[1] = tmp34;
          items1[2] = tmp35;
          items1[3] = tmp36;
          items1[4] = tmp37;
          items1[5] = tmp38;
          items1[6] = tmp39;
          items1[7] = tmp40;
          items1[8] = tmp41;
          items1[9] = tmp42;
          items1[10] = tmp43;
          ContactSuggestionActionsTsx5.__closure = items1;
          num7 = 4132135122659;
          ContactSuggestionActionsTsx5.__workletHash = 4132135122659;
          ContactSuggestionActionsTsx5.__initData = tmp32;
          str = "respect-motion-settings";
          num8 = 12;
          tmp44 = tmp23;
          tmp45 = ContactSuggestionActionsTsx5;
          tmp22 = closure_9;
          result3 = closure_9.set(closure_10(12, tmp23, "respect-motion-settings", ContactSuggestionActionsTsx5));
        } else {
          tmp5 = closure_8;
          num = 1;
          result4 = closure_8.set(1);
          tmp7 = closure_3;
          num2 = 0.5;
          result5 = closure_3.set(0.5);
          tmp9 = closure_6;
          num3 = 0;
          result6 = closure_6.set(0);
          tmp11 = closure_9;
          num4 = 30;
          result7 = closure_9.set(30);
        }
      } else {
        tmp = closure_1;
        tmp2 = closure_2;
        tmp3 = closure_1(closure_2);
      }
      return;
    }
  }
  const items9 = [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37];
  ContactSuggestionActionsTsx6.__closure = items9;
  ContactSuggestionActionsTsx6.__workletHash = 3747678974505;
  ContactSuggestionActionsTsx6.__initData = tmp20;
  const animatedReaction = require("module_1652").useAnimatedReaction(ContactSuggestionActionsTsx3, ContactSuggestionActionsTsx6);
  const obj7 = { children: null };
  const obj8 = { pointerEvents: "none", style: null, children: null };
  const items10 = [tmp.icon, animatedStyle];
  obj8.style = items10;
  const tmp2Result2 = require("module_1652");
  obj8.children = c5(require("native").Icon, { source: _modDef19080, color: tmp.icon.color });
  const items11 = [c5(_modDef1652.View, obj8), ];
  const obj10 = { style: animatedStyle1, children: null };
  const obj11 = { variant: "secondary", size: str, grow: false, text: null, onPress: null };
  const intl = tmp2(1113).intl;
  obj11.text = intl.string(require("util").t.OYkgVk);
  obj11.onPress = callback1;
  obj10.children = c5(require("components/Button/Button").Button, obj11);
  items11[1] = c5(_modDef1652.View, obj10);
  obj7.children = items11;
  return c6(c4, obj7);
}