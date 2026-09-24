// discord_app/modules/messages/native/DMMessageStickerGreeting.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import StickersActionCreators from "../../stickers/StickersActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import StickersStore from "../../stickers/StickersStore.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4829);
let closure_13 = createStyles.createStyles((arg0) => {
  let BACKGROUND_BASE_LOWER = arg0;
  if (arg0 == null) {
    BACKGROUND_BASE_LOWER = nativeDefault.colors.BACKGROUND_BASE_LOWER;
  }
  const obj = {
    container: {
      backgroundColor: BACKGROUND_BASE_LOWER,
      alignItems: "center",
      paddingHorizontal: 16,
      paddingBottom: 16,
      paddingTop: 8,
    },
    stickerContainer: { paddingBottom: 16 },
    toastContainer: {
      flexDirection: "row",
      backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
      height: 48,
      paddingHorizontal: 16,
      borderRadius: nativeDefault.radii.xxl,
    },
    toastContent: { lineHeight: 20 },
    gradient: { position: "absolute", right: 0, left: 0, top: 0, height: 30 },
  };
  return obj;
});
let c14 = "749054660769218631";
const END = fn(4647).GradientPercentage.END;
const __initData = {
  code: "function DMMessageStickerGreetingTsx1(){const{styles,isRendered,hasInputText,hasMessages,HEIGHT_COMPACT,HEIGHT_FULL,withDelay,withTiming,STANDARD_EASING}=this.__closure;const gradientOverlayOffset=styles.gradient.height;const hasHeight=isRendered&&!hasInputText;const heightExpanded=(hasMessages?HEIGHT_COMPACT:HEIGHT_FULL)-1;const targetHeight=hasHeight?heightExpanded+gradientOverlayOffset:0;const targetMargin=hasHeight?-gradientOverlayOffset:0;function generateAnimationConfig(value){return withDelay(300,withTiming(value,{easing:STANDARD_EASING,duration:250}));}return{justifyContent:'flex-end',overflow:'hidden',marginTop:generateAnimationConfig(targetMargin),height:generateAnimationConfig(targetHeight)};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/DMMessageStickerGreeting.tsx");

export default function DMMessageStickerGreeting(channel) {
  channel = channel.channel;
  _require = channel;
  const hasInputText = channel.hasInputText;
  let toastContent;
  let showConvoStarterInDM;
  noop = undefined;
  let Text = _require;
  let tmp = toastContent;
  toastContent = closure_13(require("client_themes/ClientThemesUtils").useGradientValue(END));
  let obj = require("client_themes/ClientThemesUtils");
  const items = [MessageStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const messages = MessageStore.getMessages(_undefined.id);
    return (
      messages.filter((type) => type.type !== _undefined(toastContent[19]).MessageTypes.FRIEND_REQUEST_ACCEPTED)
        .length > 0
    );
  });
  let obj2 = require("initialize");
  const items1 = [UserStore];
  let tmp5 = hasInputText;
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () =>
    UserStore.getUser(_undefined.getRecipientId()),
  );
  let obj3 = require("initialize");
  let name = hasInputText(toastContent[20]).useName(stateFromStores1);
  if (name == null) {
    let intl = Text(tmp[17]).intl;
    name = intl.string(Text(tmp[17]).t.y1Wu2f);
  }
  const intl2 = Text(tmp[17]).intl;
  const formatToPlainStringResult = intl2.formatToPlainString(Text(tmp[17]).t.m0zYbV, { username: name });
  let obj4 = hasInputText(toastContent[20]);
  showConvoStarterInDM = Text(tmp[21]).useShowConvoStarterInDM(channel);
  const TextResult = Text(tmp[21]);
  const items2 = [StickersStore];
  const items3 = [showConvoStarterInDM];
  const stateFromStores2 = Text(tmp[18]).useStateFromStores(
    items2,
    () => {
      let stickerById = null;
      if (showConvoStarterInDM) {
        stickerById = StickersStore.getStickerById(c14);
      }
      return stickerById;
    },
    items3,
  );
  const items4 = [showConvoStarterInDM];
  const effect = noop.useEffect(() => {
    if (showConvoStarterInDM) {
      const stickerPack = StickersActionCreators.fetchStickerPack("847199849233514549", true);
    }
  }, items4);
  closure_129_0 = channel;
  const tmp11 = showConvoStarterInDM(noop.useState(null), 2);
  const first = tmp11[0];
  closure_129_1 = first;
  closure_129_2 = tmp11[1];
  const tmp13 = showConvoStarterInDM(noop.useState(false), 2);
  const first1 = tmp13[0];
  closure_129_3 = first1;
  closure_129_4 = tmp13[1];
  const items5 = [channel.id];
  const effect1 = noop.useEffect(() => {
    toastContent(null);
  }, items5);
  const items6 = [first1, first, channel.id];
  let callback = noop.useCallback(
    stateFromStores(function* () {
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
          let tmp7 = c4;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              _undefined = tmp7;
              function showErrorToast(content) {
                if (closure_1_1 !== content) {
                  dependencyMap(content);
                }
                const obj = closure_1(4523);
                obj.open({ key: "HANDLE_WAVE_PRESS_TOAST", content, icon: closure_1(12606) });
                const obj2 = { key: "HANDLE_WAVE_PRESS_TOAST", content, icon: closure_1(12606) };
              }
              closure_128_0 = showErrorToast;
              tmp7 = stateFromStores;
              if (!stateFromStores) {
                showConvoStarterInDM(true);
                if (null !== hasInputText) {
                  showConvoStarterInDM(false);
                  showErrorToast(tmp26);
                  c5 = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  c3 = 1;
                  const obj4 = { channelId: _undefined.id, source: "In-channel greet" };
                  _undefined(tmp30[15]).trackWaveCtaClicked(obj4);
                  const obj5 = _undefined(tmp30[15]);
                  c4 = 2;
                  c5 = 1;
                  const obj6 = { value: tmp3(tmp30[16]).sendGreetMessage(_undefined.id, closure_1_14), done: false };
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
                const intl = _undefined(tmp30[17]).intl;
                closure_128_0(intl.string(_undefined(tmp30[17]).t.Whhv4w));
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
            c4 = tmp;
          }
        }
      }
    }),
    items6,
  );
  const TextResult1 = Text(tmp[18]);
  [tmp17, tmp18] = showConvoStarterInDM(noop.useState(false), 2);
  _require = tmp18;
  const items7 = [tmp18];
  noop = tmp17;
  const callback1 = noop.useCallback(() => {
    _undefined(true);
  }, items7);
  const tmp16 = showConvoStarterInDM(noop.useState(false), 2);
  const fn = function w() {
    const height = toastContent.gradient.height;
    let tmp = c5;
    if (c5) {
      tmp = !hasInputText;
    }
    let num = 0;
    if (tmp) {
      let num2 = 180;
      if (stateFromStores) {
        num2 = 72;
      }
      num = num2 - 1 + height;
    }
    let num4 = 0;
    if (tmp) {
      num4 = -height;
    }
    const obj = { justifyContent: "flex-end", overflow: "hidden", marginTop: null, height: null };
    const obj2 = ReanimatedRexport;
    const obj3 = timing;
    obj.marginTop = obj2.withDelay(300, obj3.withTiming(num4, { easing: native.STANDARD_EASING, duration: 250 }));
    const obj4 = { easing: native.STANDARD_EASING, duration: 250 };
    const obj5 = ReanimatedRexport;
    const obj6 = timing;
    obj.height = obj5.withDelay(300, obj6.withTiming(num, { easing: native.STANDARD_EASING, duration: 250 }));
    return obj;
  };
  const TextResult2 = Text(tmp[23]);
  fn.__closure = {
    styles: toastContent,
    isRendered: tmp17,
    hasInputText,
    hasMessages: stateFromStores,
    HEIGHT_COMPACT: 72,
    HEIGHT_FULL: 180,
    withDelay: Text(tmp[23]).withDelay,
    withTiming: Text(tmp[24]).withTiming,
    STANDARD_EASING: Text(tmp[25]).STANDARD_EASING,
  };
  fn.__workletHash = 6327401707106;
  fn.__initData = __initData;
  const animatedStyle = TextResult2.useAnimatedStyle(fn);
  let obj5 = {
    styles: toastContent,
    isRendered: tmp17,
    hasInputText,
    hasMessages: stateFromStores,
    HEIGHT_COMPACT: 72,
    HEIGHT_FULL: 180,
    withDelay: Text(tmp[23]).withDelay,
    withTiming: Text(tmp[24]).withTiming,
    STANDARD_EASING: Text(tmp[25]).STANDARD_EASING,
  };
  let BACKGROUND_BASE_LOWER = Text(tmp[10]).useGradientValue(END);
  const TextResult3 = Text(tmp[10]);
  if (BACKGROUND_BASE_LOWER == null) {
    BACKGROUND_BASE_LOWER = tmp5(tmp[9]).colors.BACKGROUND_BASE_LOWER;
  }
  const token = Text(tmp[11]).useToken(BACKGROUND_BASE_LOWER);
  const TextResult4 = Text(tmp[11]);
  const items8 = [Text(tmp[12]).hexWithOpacity(token, 0), token];
  const TextResult5 = Text(tmp[12]);
  const shouldAnimateSticker = Text(tmp[26]).useShouldAnimateSticker(false);
  if (!showConvoStarterInDM) {
    return null;
  } else {
    let obj6 = { style: animatedStyle, onLayout: callback1, children: null };
    const obj7 = { style: toastContent.gradient, colors: items8 };
    const items9 = [closure_10(tmp5(tmp[27]), obj7)];
    let obj8 = { style: toastContent.container, children: null };
    if (stateFromStores) {
      const obj9 = {
        style: toastContent.toastContainer,
        accessibilityRole: "button",
        accessibilityLabel: null,
        onPress: null,
        children: null,
      };
      const intl3 = Text(tmp[17]).intl;
      obj9.accessibilityLabel = intl3.string(Text(tmp[17]).t.pJObYI);
      obj9.onPress = callback;
      let tmp24Result = null;
      if (null != stateFromStores2) {
        tmp5 = tmp5(tmp[29]);
        const obj10 = { sticker: stateFromStores2, size: 24, animated: shouldAnimateSticker };
        tmp24Result = closure_10(tmp5, obj10);
      }
      callback = [tmp24Result];
      Text = Text(tmp[30]).Text;
      const obj11 = { style: null, variant: "text-md/bold", children: null };
      toastContent = toastContent.toastContent;
      obj11.style = toastContent;
      obj11.children = formatToPlainStringResult;
      tmp = closure_10(Text, obj11);
      callback[1] = tmp;
      obj9.children = callback;
      let tmp23Result = closure_11(Text(tmp[28]).PressableOpacity, obj9);
    } else {
      let tmp24Result2 = null;
      if (null != stateFromStores2) {
        const obj12 = { style: toastContent.stickerContainer, children: null };
        const obj13 = { sticker: stateFromStores2, size: 100, animated: shouldAnimateSticker };
        obj12.children = closure_10(tmp5(tmp[29]), obj13);
        tmp24Result2 = closure_10(View, obj12);
      }
      const obj14 = { children: null };
      const items10 = [tmp24Result2];
      const obj15 = { text: formatToPlainStringResult, onPress: callback, shrink: true };
      items10[1] = closure_10(Text(tmp[31]).Button, obj15);
      obj14.children = items10;
      tmp23Result = closure_11(closure_12, obj14);
    }
    obj8.children = tmp23Result;
    obj8 = closure_10(View, obj8);
    items9[1] = obj8;
    obj6.children = items9;
    closure_11(tmp5(tmp[23]).View, obj6);
  }
  const TextResult6 = Text(tmp[26]);
}
