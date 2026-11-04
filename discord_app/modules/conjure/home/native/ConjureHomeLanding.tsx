// discord_app/modules/conjure/home/native/ConjureHomeLanding.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjureChatStore from "../../chat/ConjureChatStore.tsx";

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_6, View: metroImportDefault } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const prototype = function ConjureHomeUploadError() {
  return HermesBuiltin.applyArguments(new.target, new.target);
}.prototype;
class prototype extends Error {
}
const PX_32 = nativeDefault.space.PX_32;
const createStyles = fn(5141);
let obj2 = { root: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, scroll: { flex: 1 }, content: null, hero: null, badgeRow: null, carousel: null, showcase: null, showcaseTitle: null, error: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.content = { paddingTop: nativeDefault.space.PX_32, paddingBottom: nativeDefault.space.PX_32, gap: PX_32 };
let obj4 = { paddingTop: nativeDefault.space.PX_32, paddingBottom: nativeDefault.space.PX_32, gap: PX_32 };
obj2.hero = { gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_32 };
obj2.badgeRow = { flexDirection: "row" };
let obj6 = { marginBottom: null };
const diff = nativeDefault.space.PX_48 - PX_32;
obj6.marginBottom = diff - fn(13038).CONJURE_HOME_CAROUSEL_ROOM_BELOW;
obj2.carousel = obj6;
let obj5 = { gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_32 };
obj2.showcase = { gap: nativeDefault.space.PX_16 };
let obj7 = { gap: nativeDefault.space.PX_16 };
obj2.showcaseTitle = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj8 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.error = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
let closure_12 = createStyles.createStyles(obj2);
let closure_13 = { code: "(function ConjureHomeLandingTsx1(){let[keyboardHeight,safeAreaBottom]=this.__closure;return{paddingBottom:Math.max(keyboardHeight.get(),safeAreaBottom)};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeLanding.tsx");

export default function ConjureHomeLanding(focusRequest) {
  focusRequest = focusRequest.focusRequest;
  if (focusRequest === undefined) {
    focusRequest = null;
  }
  _require = undefined;
  let first;
  let str;
  let forMeGuildId;
  _slicedToArray = undefined;
  noop = undefined;
  closure_6 = undefined;
  c7 = undefined;
  c8 = undefined;
  closure_9 = undefined;
  closure_10 = undefined;
  const tmp2 = closure_12();
  const navigation = require("useNavigation").useNavigation();
  _require = navigation;
  let obj = require("useNavigation");
  const tmp7 = first(str[11])();
  items = [closure_13, tmp7, first(str[10])().bottom];
  _require = undefined;
  first = undefined;
  [tmp8, tmp9, tmp10] = items;
  class ConjureHomeLandingTsx1 {
    constructor() {
      obj = { paddingBottom: Math.max(closure_0.get(), closure_1) };
      return obj;
    }
  }
  const items1 = [tmp9, tmp10];
  ConjureHomeLandingTsx1.__closure = items1;
  ConjureHomeLandingTsx1.__workletHash = 1190769444170;
  ConjureHomeLandingTsx1.__initData = tmp8;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(ConjureHomeLandingTsx1);
  const tmp13 = _slicedToArray(noop.useState(require("conjureTarget").CONJURE_TARGET_USER), 2);
  first = tmp13[0];
  let obj2 = require("../../../../../_runtime/metro/01652__.js");
  const conjureEligibleGuilds = require("useConjureProjects").useConjureEligibleGuilds("ConjureHomeLanding");
  let CONJURE_TARGET_USER = first;
  if (first !== require("conjureTarget").CONJURE_TARGET_USER) {
    CONJURE_TARGET_USER = first;
    if (!conjureEligibleGuilds.some((id) => id.id === first)) {
      CONJURE_TARGET_USER = tmp3(tmp4[13]).CONJURE_TARGET_USER;
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
  _slicedToArray = obj3.useRef(0);
  const tmp3Result = require("useConjureProjects");
  [tmp16, c5] = noop.useState(true);
  const callback = obj3.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.contentOffset.y < ref.current);
  }, []);
  const callback1 = obj3.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    closure_4.current = layout.y + layout.height;
  }, []);
  [obj16.sending, closure_6] = noop.useState(false);
  const tmp12Result = _slicedToArray(noop.useState(true), 2);
  [tmp21, c7] = _slicedToArray(noop.useState(null), 2);
  const tmp12Result5 = _slicedToArray(noop.useState(null), 2);
  [tmp23, c8] = _slicedToArray(noop.useState(null), 2);
  const callback2 = obj3.useCallback(() => _undefined2((arg0) => {
    let num = arg0;
    if (arg0 == null) {
      num = 0;
    }
    return num + 1;
  }), []);
  closure_9 = obj3.useRef(false);
  const effect = obj3.useEffect(() => {
    closure_9.current = true;
    return () => {
      closure_1_9.current = false;
    };
  }, []);
  closure_10 = obj3.useRef(false);
  _require = forMeGuildId(function*(arg0, arg1) {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp9 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (0 === v8) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const guildId = tmp4;
            const installScope = tmp10;
            closure_130_0 = closure_0;
            closure_130_1 = closure_1;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            closure_130_4 = undefined;
            if (ref2.current) {
              v3 = 3;
              return { value: false, done: true };
            } else {
              ref2.current = true;
              v8(true);
              v3(null);
              closure_0(str[15]).setComposerDraft(closure_0(str[16]).CONJURE_HOME_DRAFT_KEY, "");
              c5 = 2;
              const obj4 = { guildId, installScope, modelSettings: null };
              v8 = 3;
              v3 = 1;
              const obj5 = { value: first(str[17])(obj4), done: false };
              return obj5;
            }
          }
        } else if (1 === tmp10) {
          c5 = 0;
          ref2.current = false;
          v8(false);
          throw closure_4;
        } else if (2 === tmp10) {
          c5 = 1;
          closure_130_5 = closure_4;
          closure_0(str[15]).setComposerDraft(closure_0(str[16]).CONJURE_HOME_DRAFT_KEY, closure_130_0);
          if (closure_130_5 instanceof prototype) {
            const intl = closure_0(str[23]).intl;
            let stringResult = intl.string(first(str[24])["903H7m"]);
          } else {
            stringResult = closure_0(str[25]).getConjureCreateErrorMessage(closure_130_5);
            const obj12 = closure_0(str[25]);
          }
          closure_130_4 = stringResult;
          if (ref.current) {
            v3(closure_130_4);
          } else {
            const obj7 = { text: closure_130_4, variant: "critical" };
            first(str[26]).open("CONJURE_HOME_CREATE_FAILED", obj7);
            const obj13 = first(str[26]);
          }
          c5 = 0;
          ref2.current = false;
          v8(false);
          v3 = 3;
          const obj11 = closure_0(str[15]);
        } else {
          if (3 === tmp10) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              ref2.current = false;
              v8(false);
              v3 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              closure_130_2 = value;
              closure_130_3 = [];
              if (closure_130_1.length > 0) {
                c5 = 3;
                v8 = 7;
                v3 = 1;
                const obj10 = { value: Promise.all(closure_130_1.map((item) => closure_0(closure_2[18]).uploadConjurePickedFile(installScope, item))), done: false };
                return obj10;
              } else {
                closure_0(str[20]).startConjurePrompt(closure_130_2, closure_130_0.trim(), closure_130_3);
                (function whenFirstPromptShown(arg0) {
                  closure_0 = arg0;
                  return new Promise((fn) => {
                    closure_0 = fn;
                    function check() {
                      const messages = closure_3_8.getMessages(closure_0);
                      if (messages.some(/* F142589 */ function() { ... })) {
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
                v8 = 5;
                v3 = 1;
                const obj8 = closure_0(str[20]);
              }
            }
          } else if (4 === tmp10) {
            c5 = 4;
            v8 = 8;
            v3 = 1;
            const obj14 = { value: closure_0(str[19]).deleteProject(closure_130_2), done: false };
            return obj14;
          } else if (5 === tmp10) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              ref2.current = false;
              v8(false);
              v3 = 3;
              const obj16 = { value, done: true };
              return obj16;
            } else {
              let current = ref.current;
              if (current) {
                current = closure_0.isFocused();
              }
              if (current) {
                str = closure_0(str[21]).StackActions;
                const obj17 = { projectId: closure_130_2, entryPoint: "create" };
                closure_0.dispatch(str.replace(closure_0(str[22]).ConjureScreenScenes.CHAT, obj17));
              }
              c5 = 0;
              ref2.current = false;
              v8(false);
              v3 = 3;
              const obj18 = { value: ref.current, done: true };
              return obj18;
            }
          } else {
            if (6 === tmp10) {
              c5 = 2;
            } else if (7 === tmp10) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 !== 2) {
                closure_130_3 = value.map((item) => {
                  if ("errorText" in item) {
                    throw new closure_1_11();
                  } else {
                    return item;
                  }
                });
                c5 = 2;
              }
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              ref2.current = false;
              v8(false);
              v3 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c5 = 2;
            }
            throw new prototype();
          }
          c5 = 0;
          ref2.current = false;
          v8(false);
          v3 = 3;
          const obj19 = { value, done: true };
          return obj19;
        }
      } catch (tmp124) {
        closure_4 = tmp124;
        if (tmp5 === c5) {
          v3 = tmp3;
          throw tmp124;
        } else if (tmp2 === tmp126) {
          v8 = tmp2;
        } else if (tmp === tmp126) {
          v8 = tmp;
        } else if (tmp3 === tmp126) {
          v8 = tmp7;
        } else {
          v8 = tmp6;
        }
      }
    }
  });
  const items2 = [str, forMeGuildId, navigation];
  const callback3 = obj3.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  let obj4 = { style: null, children: null };
  const items3 = [tmp2.root, animatedStyle];
  obj4.style = items3;
  const items4 = [closure_9(first(str[27]), {}), , , ];
  let obj5 = { style: tmp2.scroll, contentContainerStyle: tmp2.content, keyboardShouldPersistTaps: "handled", onScrollBeginDrag: callback2, onTouchEnd: callback2, onScroll: callback, scrollEventThrottle: 100, children: null };
  const obj6 = { style: tmp2.hero, children: null };
  let obj7 = { style: tmp2.badgeRow, children: null };
  let obj8 = { type: null, variant: "primary" };
  let obj9 = { text: null };
  let intl = tmp3(tmp4[23]).intl;
  obj9.text = intl.string(first(str[24]).y6T1Nu);
  obj8.type = obj9;
  obj7.children = closure_9(require("Badge").Badge, obj8);
  const items5 = [closure_9(c7, obj7), , ];
  let obj10 = { variant: "display-md", color: "text-strong", accessibilityRole: "header", children: null };
  const intl2 = tmp3(tmp4[23]).intl;
  obj10.children = intl2.string(first(str[24]).doYpEy);
  items5[1] = closure_9(require("Text/Text").Text, obj10);
  let obj11 = { variant: "body-sm/normal", color: "text-strong", children: null };
  const intl3 = tmp3(tmp4[23]).intl;
  obj11.children = intl3.string(first(str[24]).BH58fD);
  items5[2] = closure_9(require("Text/Text").Text, obj11);
  obj6.children = items5;
  const items6 = [closure_10(c7, obj6), , ];
  const tmp12Result6 = _slicedToArray(noop.useState(null), 2);
  const tmp27 = closure_10;
  items6[1] = closure_9(c7, { style: tmp2.carousel, onLayout: callback1, children: closure_9(first(str[8]), { onScreen: tmp16 }) });
  let obj13 = { style: tmp2.showcase, children: null };
  let obj14 = { variant: "heading-lg/medium", color: "text-strong", accessibilityRole: "header", style: tmp2.showcaseTitle, children: null };
  const intl4 = tmp3(tmp4[23]).intl;
  obj14.children = intl4.string(first(str[24]).IiQEVd);
  const items7 = [closure_9(require("Text/Text").Text, obj14), closure_9(first(str[30]), {})];
  obj13.children = items7;
  items6[2] = closure_10(c7, obj13);
  obj5.children = items6;
  items4[1] = closure_10(closure_6, obj5);
  let tmp28Result = null;
  if (null != tmp21) {
    const obj15 = { variant: "body-sm/normal", color: "text-feedback-critical", style: tmp2.error, children: tmp21 };
    tmp28Result = tmp28(tmp3(tmp4[29]).Text, obj15);
  }
  items4[2] = tmp28Result;
  let obj16 = { projectId: null, canSend: true, running: false, onSendFiles: null, sending: null, focusRequest: null, blurRequest: null, placeholder: null, stackedAccessory: null };
  let obj12 = { style: tmp2.carousel, onLayout: callback1, children: closure_9(first(str[8]), { onScreen: tmp16 }) };
  obj16.projectId = require("ConjureHomeTypes").CONJURE_HOME_DRAFT_KEY;
  obj16.onSendFiles = callback3;
  obj16.focusRequest = focusRequest;
  obj16.blurRequest = tmp23;
  const intl5 = tmp3(tmp4[23]).intl;
  obj16.placeholder = intl5.string(first(str[24]).Hy0OLY);
  obj16.stackedAccessory = closure_9(first(str[32]), { target: CONJURE_TARGET_USER, guilds: conjureEligibleGuilds, onChange: tmp13[1] });
  items4[3] = closure_9(first(str[31]), obj16);
  obj4.children = items4;
  return tmp27(first(str[12]).View, obj4);
};