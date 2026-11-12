// === Module 14557: DMMessageStickerGreeting ===

// Module 14557 (DMMessageStickerGreeting)
import nativeDefault from "native" /* 575 */;
import UserUtilsDefault from "UserUtils" /* 5309 */;
import StickersActionCreators from "StickersActionCreators" /* 11291 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import StickersStore from "StickersStore" /* 6947 */;
import MessageStore from "MessageStore" /* 6309 */;
import UserStore from "UserStore" /* 1385 */;

const require = globalThis.__r;

const _modDef1652 = tmp5(1652);
const LinearGradientDefault = tmp5(5830);
const StickerDefault = tmp5(11024);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(5243);
let closure_13 = createStyles.createStyles((arg0) => {
  let BACKGROUND_BASE_LOWER = arg0;
  if (arg0 == null) {
    BACKGROUND_BASE_LOWER = nativeDefault.colors.BACKGROUND_BASE_LOWER;
  }
  const obj = { container: { backgroundColor: BACKGROUND_BASE_LOWER, alignItems: "center", paddingHorizontal: 16, paddingBottom: 16, paddingTop: 8 }, stickerContainer: { paddingBottom: 16 }, toastContainer: { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center", gap: 8, height: 48, paddingHorizontal: 16, borderRadius: nativeDefault.radii.xxl }, toastContent: { lineHeight: 20 }, gradient: { position: "absolute", right: 0, left: 0, top: 0, height: 30 } };
  return obj;
});
let c14 = "749054660769218631";
const END = fn(5423).GradientPercentage.END;
let closure_16 = { code: "(function DMMessageStickerGreetingTsx1(){let[styles,isRendered,hasInputText,hasMessages,HEIGHT_COMPACT,HEIGHT_FULL,withDelay,withTiming,STANDARD_EASING]=this.__closure;const gradientOverlayOffset=styles.gradient.height;const hasHeight=isRendered&&!hasInputText;const heightExpanded=(hasMessages?HEIGHT_COMPACT:HEIGHT_FULL)-1;const targetHeight=hasHeight?heightExpanded+gradientOverlayOffset:0;const targetMargin=hasHeight?-gradientOverlayOffset:0;function generateAnimationConfig(value){return withDelay(300,withTiming(value,{easing:STANDARD_EASING,duration:250}));}return{justifyContent:'flex-end',overflow:'hidden',marginTop:generateAnimationConfig(targetMargin),height:generateAnimationConfig(targetHeight)};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/DMMessageStickerGreeting.tsx");

export default function DMMessageStickerGreeting(channel) {
  channel = channel.channel;
  let _require = channel;
  importDefault = undefined;
  let Text = _require;
  let tmp = dependencyMap;
  let toastContent = closure_13(require("client_themes/ClientThemesUtils").useGradientValue(END));
  let obj = require("client_themes/ClientThemesUtils");
  items = [c8];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const messages = MessageStore.getMessages(_undefined.id);
    return messages.filter((type) => type.type !== _undefined(_undefined2[18]).MessageTypes.FRIEND_REQUEST_ACCEPTED).length > 0;
  });
  let obj2 = require("initialize");
  const items1 = [UserStore];
  let tmp5 = importDefault;
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => UserStore.getUser(_undefined.getRecipientId()));
  let obj3 = require("initialize");
  let name = UserUtilsDefault.useName(stateFromStores1);
  if (name == null) {
    let intl = Text(1113).intl;
    name = intl.string(Text(1113).t.y1Wu2f);
  }
  const intl2 = Text(1113).intl;
  const formatToPlainStringResult = intl2.formatToPlainString(Text(1113).t.m0zYbV, { username: name });
  const showConvoStarterInDM = Text(14559).useShowConvoStarterInDM(channel);
  const TextResult = Text(14559);
  const items2 = [c7];
  const items3 = [showConvoStarterInDM];
  const stateFromStores2 = Text(504).useStateFromStores(items2, () => {
    let stickerById = null;
    if (c1) {
      stickerById = StickersStore.getStickerById(c14);
    }
    return stickerById;
  }, items3);
  const items4 = [showConvoStarterInDM];
  const effect = noop.useEffect(() => {
    if (c1) {
      const stickerPack = StickersActionCreators.fetchStickerPack("847199849233514549", true);
    }
  }, items4);
  closure_129_0 = channel;
  closure_129_2 = undefined;
  closure_129_4 = undefined;
  [first, closure_129_2] = noop.useState(null);
  closure_129_1 = first;
  [first1, closure_129_4] = noop.useState(false);
  closure_129_3 = first1;
  const items5 = [channel.id];
  const effect1 = noop.useEffect(() => {
    _undefined2(null);
  }, items5);
  const items6 = [first1, first, channel.id];
  let callback = noop.useCallback(asyncGeneratorStep(async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        let tmp7 = v2;
        if (0 === v2) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            _undefined = tmp7;
            function showErrorToast(text) {
              if (closure_1_1 !== text) {
                dependencyMap(text);
              }
              closure_1(5952).open("HANDLE_WAVE_PRESS_TOAST", { text, variant: "critical" });
              const obj = closure_1(5952);
              const obj2 = { text, variant: "critical" };
            }
            closure_128_0 = showErrorToast;
            tmp7 = c3;
            if (!c3) {
              v2(true);
              if (null !== c1) {
                v2(false);
                showErrorToast(tmp26);
                c5 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                c3 = 1;
                const obj4 = { channelId: _undefined.id, source: "In-channel greet" };
                _undefined(tmp30[14]).trackWaveCtaClicked(obj4);
                const obj5 = _undefined(tmp30[14]);
                v2 = 2;
                c5 = 1;
                const obj6 = { value: tmp3(tmp30[15]).sendGreetMessage(_undefined.id, closure_1_14), done: false };
                return obj6;
              }
            }
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            closure_128_1 = tmp30;
            let ok = closure_128_1.ok;
            if (!ok) {
              ok = 429 !== closure_128_1.status;
            }
            if (!ok) {
              const intl = _undefined(tmp30[16]).intl;
              closure_128_0(intl.string(_undefined(tmp30[16]).t.Whhv4w));
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          tmp7 = closure_129_4(false);
        }
        c5 = 3;
      } catch (tmp30) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp30;
        } else {
          v2 = tmp;
        }
      }
    }
  }), items6);
  const tmp16 = _slicedToArray(noop.useState(false), 2);
  const items7 = [tmp16[1]];
  const callback1 = noop.useCallback(() => {
    _undefined(true);
  }, items7);
  const TextResult1 = Text(504);
  const items8 = [closure_16, toastContent, tmp16[0], channel.hasInputText, stateFromStores, 72, 180, Text(1652).withDelay, Text(5485).withTiming, Text(1187).STANDARD_EASING];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  asyncGeneratorStep = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items8;
  class DMMessageStickerGreetingTsx1 {
    constructor() {
      height = closure_0.gradient.height;
      tmp = closure_1;
      if (closure_1) {
        tmp2 = closure_2;
        tmp = !closure_2;
      }
      if (!tmp) {
        num2 = 0;
        if (tmp) {
          num2 = -height;
        }
        obj = { justifyContent: "flex-end", overflow: "hidden", marginTop: null, height: null };
        tmp5 = closure_6;
        tmp6 = closure_7;
        obj1 = { easing: null, duration: 250 };
        tmp7 = closure_8;
        obj1.easing = closure_8;
        num3 = 300;
        obj.marginTop = closure_6(300, closure_7(num2, obj1));
        obj4 = { easing: null, duration: 250 };
        obj4.easing = closure_8;
        obj.height = closure_6(300, closure_7(0, obj4));
        return obj;
      } else {
        tmp3 = closure_3;
        num = 1;
        sum = (closure_3 ? closure_4 : closure_5) - 1 + height;
      }
      return;
    }
  }
  const items9 = [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28];
  DMMessageStickerGreetingTsx1.__closure = items9;
  DMMessageStickerGreetingTsx1.__workletHash = 8414821769915;
  DMMessageStickerGreetingTsx1.__initData = tmp19;
  const animatedStyle = Text(1652).useAnimatedStyle(DMMessageStickerGreetingTsx1);
  const TextResult2 = Text(1652);
  let BACKGROUND_BASE_LOWER = Text(5423).useGradientValue(END);
  const TextResult3 = Text(5423);
  if (BACKGROUND_BASE_LOWER == null) {
    BACKGROUND_BASE_LOWER = nativeDefault.colors.BACKGROUND_BASE_LOWER;
  }
  const token = Text(5839).useToken(BACKGROUND_BASE_LOWER);
  const TextResult4 = Text(5839);
  const items10 = [Text(5240).hexWithOpacity(token, 0), token];
  const TextResult5 = Text(5240);
  const shouldAnimateSticker = Text(11290).useShouldAnimateSticker(false);
  if (!showConvoStarterInDM) {
    return null;
  } else {
    let obj5 = { style: animatedStyle, onLayout: callback1, children: null };
    let obj6 = { style: toastContent.gradient, colors: items10 };
    const items11 = [closure_10(LinearGradientDefault, obj6), ];
    let obj7 = { style: toastContent.container, children: null };
    if (stateFromStores) {
      const obj8 = { style: toastContent.toastContainer, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      const intl3 = Text(1113).intl;
      obj8.accessibilityLabel = intl3.string(Text(1113).t.pJObYI);
      obj8.onPress = callback;
      let tmp33Result = null;
      if (null != stateFromStores2) {
        tmp5 = StickerDefault;
        const obj9 = { sticker: stateFromStores2, size: 24, animated: shouldAnimateSticker };
        tmp33Result = closure_10(tmp5, obj9);
      }
      callback = [tmp33Result, ];
      Text = Text(5866).Text;
      const obj10 = { style: null, variant: "body-md/semibold", children: null };
      toastContent = toastContent.toastContent;
      obj10.style = toastContent;
      obj10.children = formatToPlainStringResult;
      tmp = closure_10(Text, obj10);
      callback[1] = tmp;
      obj8.children = callback;
      let tmp32Result = closure_11(Text(7364).PressableOpacity, obj8);
    } else {
      let tmp33Result2 = null;
      if (null != stateFromStores2) {
        const obj11 = { style: toastContent.stickerContainer, children: null };
        const obj12 = { sticker: stateFromStores2, size: 100, animated: shouldAnimateSticker };
        obj11.children = closure_10(StickerDefault, obj12);
        tmp33Result2 = closure_10(tmp34, obj11);
      }
      const obj13 = { children: null };
      const items12 = [tmp33Result2, ];
      const obj14 = { text: formatToPlainStringResult, onPress: callback, shrink: true };
      items12[1] = closure_10(Text(5873).Button, obj14);
      obj13.children = items12;
      tmp32Result = closure_11(closure_12, obj13);
    }
    obj7.children = tmp32Result;
    obj7 = closure_10(tmp34, obj7);
    items11[1] = obj7;
    obj5.children = items11;
    closure_11(_modDef1652.View, obj5);
  }
  const TextResult6 = Text(11290);
};