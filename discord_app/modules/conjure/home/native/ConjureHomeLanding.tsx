// === Module 12816: ConjureHomeLanding ===

// Module 12816 (ConjureHomeLanding)
import nativeDefault from "native" /* 575 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureChatStore from "ConjureChatStore" /* 10851 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let c11 = "conjure-home";
const prototype = function ConjureHomeUploadError() {
  return HermesBuiltin.applyArguments(new.target, new.target);
}.prototype;
class prototype extends Error {
}
const PX_32 = nativeDefault.space.PX_32;
const createStyles = fn(5014);
let obj2 = { root: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, scroll: { flex: 1 }, content: null, hero: null, badgeRow: null, carousel: null, showcase: null, showcaseTitle: null, error: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.content = { paddingTop: nativeDefault.space.PX_32, paddingBottom: nativeDefault.space.PX_32, gap: PX_32 };
let obj4 = { paddingTop: nativeDefault.space.PX_32, paddingBottom: nativeDefault.space.PX_32, gap: PX_32 };
obj2.hero = { gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_32 };
obj2.badgeRow = { flexDirection: "row" };
let obj6 = { marginBottom: null };
const diff = nativeDefault.space.PX_48 - PX_32;
obj6.marginBottom = diff - fn(12817).CONJURE_HOME_CAROUSEL_ROOM_BELOW;
obj2.carousel = obj6;
let obj5 = { gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_32 };
obj2.showcase = { gap: nativeDefault.space.PX_16 };
let obj7 = { gap: nativeDefault.space.PX_16 };
obj2.showcaseTitle = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj8 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.error = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
let closure_13 = createStyles.createStyles(obj2);
const __initData = { code: "function ConjureHomeLandingTsx1(){const{keyboardHeight,safeAreaBottom}=this.__closure;return{paddingBottom:Math.max(keyboardHeight.get(),safeAreaBottom)};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeLanding.tsx");

export default function ConjureHomeLanding(focusRequest) {
  focusRequest = focusRequest.focusRequest;
  if (focusRequest === undefined) {
    focusRequest = null;
  }
  _require = undefined;
  let bottom;
  let str;
  let forMeGuildId;
  let ref;
  c7 = undefined;
  closure_8 = undefined;
  c9 = undefined;
  c10 = undefined;
  projectId = undefined;
  closure_12 = undefined;
  const tmp2 = closure_13();
  const navigation = require("useNavigation").useNavigation();
  _require = navigation;
  bottom = bottom(1625)().bottom;
  const tmp7 = bottom(12074)();
  dependencyMap = tmp7;
  let obj = require("useNavigation");
  const fn = function y() {
    return { paddingBottom: Math.max(closure_2.get(), bottom) };
  };
  fn.__closure = { keyboardHeight: tmp7, safeAreaBottom: bottom };
  fn.__workletHash = 10510195293107;
  fn.__initData = __initData;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
  const tmp10 = str(forMeGuildId.useState(require("conjureTarget").CONJURE_TARGET_USER), 2);
  const first = tmp10[0];
  let obj2 = require("ReanimatedRexport");
  const conjureEligibleGuilds = require("useConjureProjects").useConjureEligibleGuilds("ConjureHomeLanding");
  let CONJURE_TARGET_USER = first;
  if (first !== require("conjureTarget").CONJURE_TARGET_USER) {
    CONJURE_TARGET_USER = first;
    if (!conjureEligibleGuilds.some((id) => id.id === first)) {
      CONJURE_TARGET_USER = tmp3(12973).CONJURE_TARGET_USER;
    }
  }
  str = "guild";
  if (CONJURE_TARGET_USER === require("conjureTarget").CONJURE_TARGET_USER) {
    str = "user";
  }
  forMeGuildId = CONJURE_TARGET_USER;
  if (CONJURE_TARGET_USER === require("conjureTarget").CONJURE_TARGET_USER) {
    forMeGuildId = focusRequest.forMeGuildId;
  }
  ref = obj3.useRef(0);
  let obj4 = require("useConjureProjects");
  [tmp13, c7] = str(forMeGuildId.useState(true), 2);
  const callback = obj3.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.contentOffset.y < ref.current);
  }, []);
  const callback1 = obj3.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    closure_6.current = layout.y + layout.height;
  }, []);
  const tmp9Result4 = str(forMeGuildId.useState(false), 2);
  closure_8 = tmp9Result4[1];
  const tmp9Result = str(forMeGuildId.useState(true), 2);
  [tmp18, c9] = str(forMeGuildId.useState(null), 2);
  const tmp9Result5 = str(forMeGuildId.useState(null), 2);
  [tmp20, c10] = str(forMeGuildId.useState(null), 2);
  const callback2 = obj3.useCallback(() => _undefined2((arg0) => {
    let num = arg0;
    if (arg0 == null) {
      num = 0;
    }
    return num + 1;
  }), []);
  projectId = obj3.useRef(false);
  const effect = obj3.useEffect(() => {
    closure_11.current = true;
    return () => {
      closure_1_11.current = false;
    };
  }, []);
  closure_12 = obj3.useRef(false);
  _require = first(function*(arg0, arg1) {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp9 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp4;
            dependencyMap = tmp10;
            closure_130_0 = closure_0;
            closure_130_1 = closure_1;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            closure_130_4 = undefined;
            if (ref2.current) {
              c7 = 3;
              return { value: false, done: true };
            } else {
              ref2.current = true;
              closure_1_8(true);
              _undefined(null);
              closure_0(12582).setComposerDraft(closure_11, "");
              let guildId = 2;
              const obj4 = { guildId, installScope, modelSettings: null };
              c6 = 3;
              c7 = 1;
              const obj5 = { value: bottom(12974)(obj4), done: false };
              return obj5;
            }
          }
        } else if (1 === tmp10) {
          guildId = 0;
          ref2.current = false;
          closure_1_8(false);
          throw installScope;
        } else if (2 === tmp10) {
          guildId = 1;
          closure_130_5 = installScope;
          closure_0(12582).setComposerDraft(closure_11, closure_130_0);
          if (closure_130_5 instanceof closure_12) {
            const intl = closure_0(1113).intl;
            let stringResult = intl.string(bottom(3868)["903H7m"]);
          } else {
            stringResult = closure_0(10879).getConjureCreateErrorMessage(closure_130_5);
            const obj12 = closure_0(10879);
          }
          closure_130_4 = stringResult;
          if (ref.current) {
            _undefined(closure_130_4);
          } else {
            const obj7 = { text: closure_130_4, variant: "critical" };
            bottom(5712).open("CONJURE_HOME_CREATE_FAILED", obj7);
            const obj13 = bottom(5712);
          }
          guildId = 0;
          ref2.current = false;
          closure_1_8(false);
          c7 = 3;
          const obj11 = closure_0(12582);
        } else {
          if (3 === tmp10) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              guildId = 0;
              ref2.current = false;
              closure_1_8(false);
              c7 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              closure_130_2 = value;
              closure_130_3 = [];
              if (closure_130_1.length > 0) {
                guildId = 3;
                c6 = 7;
                c7 = 1;
                const obj10 = { value: Promise.all(closure_130_1.map((item) => closure_0(closure_2[17]).uploadConjurePickedFile(dependencyMap, item))), done: false };
                return obj10;
              } else {
                closure_0(12580).startConjurePrompt(closure_130_2, closure_130_0.trim(), closure_130_3);
                (function whenFirstPromptShown(arg0) {
                  closure_0 = arg0;
                  return new Promise((fn) => {
                    closure_0 = fn;
                    function check() {
                      const messages = closure_3_8.getMessages(closure_0);
                      if (messages.some(/* F140373 */ function() { ... })) {
                        closure_3_8.removeChangeListener(check);
                        const _clearTimeout = clearTimeout;
                        clearTimeout(timerId);
                        closure_0();
                      }
                    }
                    const timerId = setTimeout(function finish() {
                      closure_3_8.removeChangeListener(check);
                      clearTimeout(timerId);
                      closure_0();
                    }, 10000);
                    closure_1_8.addChangeListener(check);
                    let messages = closure_1_8.getMessages(closure_0);
                    if (messages.some((role) => "user" === role.role)) {
                      closure_1_8.removeChangeListener(check);
                      let _clearTimeout = clearTimeout;
                      clearTimeout(timerId);
                      fn();
                    }
                  });
                })(closure_130_2);
                c6 = 5;
                c7 = 1;
                const obj8 = closure_0(12580);
              }
            }
          } else if (4 === tmp10) {
            guildId = 4;
            c6 = 8;
            c7 = 1;
            const obj14 = { value: closure_0(10875).deleteProject(closure_130_2), done: false };
            return obj14;
          } else if (5 === tmp10) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              guildId = 0;
              ref2.current = false;
              closure_1_8(false);
              c7 = 3;
              const obj16 = { value, done: true };
              return obj16;
            } else {
              let current = ref.current;
              if (current) {
                current = closure_0.isFocused();
              }
              if (current) {
                const obj17 = { projectId: closure_130_2, entryPoint: "create" };
                closure_0.dispatch(closure_0(1498).StackActions.replace(closure_0(12086).ConjureScreenScenes.CHAT, obj17));
                str = closure_0(1498).StackActions;
              }
              guildId = 0;
              ref2.current = false;
              closure_1_8(false);
              c7 = 3;
              const obj18 = { value: ref.current, done: true };
              return obj18;
            }
          } else {
            if (6 === tmp10) {
              guildId = 2;
            } else if (7 === tmp10) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 !== 2) {
                closure_130_3 = value.map((item) => {
                  if ("errorText" in item) {
                    throw new ref2();
                  } else {
                    return item;
                  }
                });
                guildId = 2;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              guildId = 0;
              ref2.current = false;
              closure_1_8(false);
              c7 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              guildId = 2;
            }
            throw new closure_12();
          }
          guildId = 0;
          ref2.current = false;
          closure_1_8(false);
          c7 = 3;
          const obj19 = { value, done: true };
          return obj19;
        }
      } catch (tmp122) {
        installScope = tmp122;
        if (tmp5 === guildId) {
          c7 = tmp3;
          throw tmp122;
        } else if (tmp2 === tmp124) {
          c6 = tmp2;
        } else if (tmp === tmp124) {
          c6 = tmp;
        } else if (tmp3 === tmp124) {
          c6 = tmp7;
        } else {
          c6 = tmp6;
        }
      }
    }
  });
  const items = [str, forMeGuildId, navigation];
  const callback3 = obj3.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  let obj5 = { style: null, children: null };
  const items1 = [tmp2.root, animatedStyle];
  obj5.style = items1;
  const items2 = [c9(bottom(12976), {}), , , ];
  const obj6 = { style: tmp2.scroll, contentContainerStyle: tmp2.content, keyboardShouldPersistTaps: "handled", onScrollBeginDrag: callback2, onTouchEnd: callback2, onScroll: callback, scrollEventThrottle: 100, children: null };
  let obj7 = { style: tmp2.hero, children: null };
  let obj8 = { style: tmp2.badgeRow, children: null };
  let obj9 = { type: null, variant: "primary" };
  let obj10 = { text: null };
  let intl = tmp3(1113).intl;
  obj10.text = intl.string(bottom(3868).y6T1Nu);
  obj9.type = obj10;
  obj8.children = c9(require("Badge").Badge, obj9);
  const items3 = [c9(c7, obj8), , ];
  let obj11 = { variant: "display-md", color: "text-strong", accessibilityRole: "header", children: null };
  const intl2 = tmp3(1113).intl;
  obj11.children = intl2.string(bottom(3868).doYpEy);
  items3[1] = c9(require("Text/Text").Text, obj11);
  let obj12 = { variant: "text-sm/normal", color: "text-strong", children: null };
  const intl3 = tmp3(1113).intl;
  obj12.children = intl3.string(bottom(3868).BH58fD);
  items3[2] = c9(require("Text/Text").Text, obj12);
  obj7.children = items3;
  const items4 = [c10(c7, obj7), , ];
  const tmp24 = c10;
  const tmp9Result6 = str(forMeGuildId.useState(null), 2);
  items4[1] = c9(c7, { style: tmp2.carousel, onLayout: callback1, children: c9(bottom(12817), { onScreen: tmp13 }) });
  let obj14 = { style: tmp2.showcase, children: null };
  const obj15 = { variant: "heading-lg/medium", color: "text-strong", accessibilityRole: "header", style: tmp2.showcaseTitle, children: null };
  const intl4 = tmp3(1113).intl;
  obj15.children = intl4.string(bottom(3868).IiQEVd);
  const items5 = [c9(require("Text/Text").Text, obj15), c9(bottom(12977), {})];
  obj14.children = items5;
  items4[2] = c10(c7, obj14);
  obj6.children = items4;
  items2[1] = c10(ref, obj6);
  let tmp25Result = null;
  if (null != tmp18) {
    let obj16 = { variant: "text-sm/normal", color: "text-feedback-critical", style: tmp2.error, children: tmp18 };
    tmp25Result = tmp25(tmp3(5624).Text, obj16);
  }
  items2[2] = tmp25Result;
  let obj17 = { projectId, canSend: true, running: false, onSendFiles: callback3, sending: tmp9Result4[0], focusRequest, blurRequest: tmp20, placeholder: null, stackedAccessory: null };
  let obj13 = { style: tmp2.carousel, onLayout: callback1, children: c9(bottom(12817), { onScreen: tmp13 }) };
  const intl5 = tmp3(1113).intl;
  obj17.placeholder = intl5.string(bottom(3868).Hy0OLY);
  obj17.stackedAccessory = c9(bottom(12979), { target: CONJURE_TARGET_USER, guilds: conjureEligibleGuilds, onChange: tmp10[1] });
  items2[3] = c9(bottom(12792), obj17);
  obj5.children = items2;
  return tmp24(bottom(5095).View, obj5);
};