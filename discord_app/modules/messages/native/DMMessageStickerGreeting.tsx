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

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4560);
let closure_13 = createStyles.createStyles((arg0) => {
  let BACKGROUND_BASE_LOWER = arg0;
  if (arg0 == null) {
    BACKGROUND_BASE_LOWER = nativeDefault.colors.BACKGROUND_BASE_LOWER;
  }
  let obj = {
    container: {
      backgroundColor: BACKGROUND_BASE_LOWER,
      alignItems: "center",
      paddingHorizontal: 16,
      paddingBottom: 16,
      paddingTop: 8,
    },
    stickerContainer: { paddingBottom: 16 },
    toastContainer: null,
    toastContent: null,
    gradient: null,
  };
  obj = {
    flexDirection: "row",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    height: 48,
    paddingHorizontal: 16,
    borderRadius: nativeDefault.radii.xxl,
  };
  obj.toastContainer = obj;
  obj.toastContent = { lineHeight: 20 };
  obj.gradient = { position: "absolute", right: 0, left: 0, top: 0, height: 30 };
  return obj;
});
let c14 = "749054660769218631";
const END = fn(4378).GradientPercentage.END;
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
  let obj = require("client_themes/ClientThemesUtils");
  toastContent = closure_13(obj.useGradientValue(END));
  let obj1 = require("initialize");
  const items = [MessageStore];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    const messages = MessageStore.getMessages(_undefined.id);
    return (
      messages.filter((type) => type.type !== _undefined(toastContent[19]).MessageTypes.FRIEND_REQUEST_ACCEPTED)
        .length > 0
    );
  });
  let obj2 = require("initialize");
  const items1 = [UserStore];
  let tmp5 = hasInputText;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => UserStore.getUser(_undefined.getRecipientId()));
  let obj3 = hasInputText(toastContent[20]);
  let name = obj3.useName(stateFromStores1);
  if (name == null) {
    let intl = Text(tmp[17]).intl;
    name = intl.string(Text(tmp[17]).t.y1Wu2f);
  }
  const intl2 = Text(tmp[17]).intl;
  const formatToPlainStringResult = intl2.formatToPlainString(Text(tmp[17]).t.m0zYbV, { username: name });
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
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              _undefined = tmp7;
              function showErrorToast(content) {
                if (closure_1_1 !== content) {
                  dependencyMap(content);
                }
                closure_1(4259);
                const obj = { key: "HANDLE_WAVE_PRESS_TOAST", content, icon: closure_1(12264) };
                obj.open(obj);
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
                  const obj1 = { channelId: _undefined.id, source: "In-channel greet" };
                  _undefined(tmp30[15]).trackWaveCtaClicked(obj1);
                  const obj5 = _undefined(tmp30[15]);
                  c4 = 2;
                  c5 = 1;
                  const obj2 = { value: tmp3(tmp30[16]).sendGreetMessage(_undefined.id, closure_1_14), done: false };
                  return obj2;
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
              obj = { value, done: true };
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
    let obj = { justifyContent: "flex-end", overflow: "hidden", marginTop: null, height: null };
    const obj2 = ReanimatedRexport;
    obj = { easing: native.STANDARD_EASING, duration: 250 };
    obj.marginTop = obj2.withDelay(300, timing.withTiming(num4, obj));
    const obj5 = ReanimatedRexport;
    obj = { easing: native.STANDARD_EASING, duration: 250 };
    obj.height = obj5.withDelay(300, timing.withTiming(num, obj));
    return obj;
  };
  obj = {
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
  fn.__closure = obj;
  fn.__workletHash = 6327401707106;
  fn.__initData = __initData;
  const animatedStyle = Text(tmp[23]).useAnimatedStyle(fn);
  const TextResult2 = Text(tmp[23]);
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
    obj = { style: animatedStyle, onLayout: callback1, children: null };
    obj1 = { style: toastContent.gradient, colors: items8 };
    const items9 = [closure_10(tmp5(tmp[27]), obj1)];
    obj2 = { style: toastContent.container, children: null };
    if (stateFromStores) {
      obj3 = {
        style: toastContent.toastContainer,
        accessibilityRole: "button",
        accessibilityLabel: null,
        onPress: null,
        children: null,
      };
      const intl3 = Text(tmp[17]).intl;
      obj3.accessibilityLabel = intl3.string(Text(tmp[17]).t.pJObYI);
      obj3.onPress = callback;
      let tmp24Result = null;
      if (null != stateFromStores2) {
        tmp5 = tmp5(tmp[29]);
        const obj4 = { sticker: stateFromStores2, size: 24, animated: shouldAnimateSticker };
        tmp24Result = closure_10(tmp5, obj4);
      }
      callback = [tmp24Result];
      Text = Text(tmp[30]).Text;
      let obj5 = { style: null, variant: "text-md/bold", children: null };
      toastContent = toastContent.toastContent;
      obj5.style = toastContent;
      obj5.children = formatToPlainStringResult;
      tmp = closure_10(Text, obj5);
      callback[1] = tmp;
      obj3.children = callback;
      let tmp23Result = closure_11(Text(tmp[28]).PressableOpacity, obj3);
    } else {
      tmp24Result = null;
      if (null != stateFromStores2) {
        const obj6 = { style: toastContent.stickerContainer, children: null };
        const obj7 = { sticker: stateFromStores2, size: 100, animated: shouldAnimateSticker };
        obj6.children = closure_10(tmp5(tmp[29]), obj7);
        tmp24Result = closure_10(View, obj6);
      }
      const obj8 = { children: null };
      const items10 = [tmp24Result];
      const obj9 = { text: formatToPlainStringResult, onPress: callback, shrink: true };
      items10[1] = closure_10(Text(tmp[31]).Button, obj9);
      obj8.children = items10;
      tmp23Result = closure_11(closure_12, obj8);
    }
    obj2.children = tmp23Result;
    obj2 = closure_10(View, obj2);
    items9[1] = obj2;
    obj.children = items9;
    tmp23Result = closure_11(tmp5(tmp[23]).View, obj);
  }
  const TextResult6 = Text(tmp[26]);
}
