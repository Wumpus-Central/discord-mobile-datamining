// discord_app/modules/messages/native/DMMessageStickerGreeting.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../stickers/StickersStore.tsx";
import closure_8 from "../../../stores/MessageStore.tsx";
import closure_9 from "../../../stores/UserStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { getGradientColorByPercentage } from "../../client_themes/native/ClientThemesUtils.tsx";

const require = arg1;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
let closure_13 = createCacheKey.createStyles((arg0) => {
  let BACKGROUND_BASE_LOWER = arg0;
  if (arg0 == null) {
    BACKGROUND_BASE_LOWER = ThemesDefault.colors.BACKGROUND_BASE_LOWER;
  }
  let obj = { container: { backgroundColor: BACKGROUND_BASE_LOWER, alignItems: "center", paddingHorizontal: 16, paddingBottom: 16, paddingTop: 8 }, stickerContainer: { paddingBottom: 16 }, toastContainer: null, toastContent: null, gradient: null };
  obj = { flexDirection: "row", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center", gap: 8, height: 48, paddingHorizontal: 16, borderRadius: ThemesDefault.radii.xxl };
  obj[2] = obj;
  obj[3] = { lineHeight: 20 };
  obj[4] = { position: "absolute", right: 0, left: 0, top: 0, height: 30 };
  return obj;
});
let c14 = "749054660769218631";
const END = require("getGradientColorByPercentage").GradientPercentage.END;
let closure_16 = { code: "function DMMessageStickerGreetingTsx1(){const{styles,isRendered,hasInputText,hasMessages,HEIGHT_COMPACT,HEIGHT_FULL,withDelay,withTiming,STANDARD_EASING}=this.__closure;const gradientOverlayOffset=styles.gradient.height;const hasHeight=isRendered&&!hasInputText;const heightExpanded=(hasMessages?HEIGHT_COMPACT:HEIGHT_FULL)-1;const targetHeight=hasHeight?heightExpanded+gradientOverlayOffset:0;const targetMargin=hasHeight?-gradientOverlayOffset:0;function generateAnimationConfig(value){return withDelay(300,withTiming(value,{easing:STANDARD_EASING,duration:250}));}return{justifyContent:'flex-end',overflow:'hidden',marginTop:generateAnimationConfig(targetMargin),height:generateAnimationConfig(targetHeight)};}" };
const result = require("set").fileFinishedImporting("modules/messages/native/DMMessageStickerGreeting.tsx");

export default function DMMessageStickerGreeting(channel) {
  channel = channel.channel;
  let _require = channel;
  const hasInputText = channel.hasInputText;
  let first = hasInputText;
  dependencyMap = undefined;
  let first1;
  let callback;
  let React;
  let Text = _require;
  let tmp = dependencyMap;
  let obj = _getGradientColorByPercentage;
  let toastContent = callback3(obj.useGradientValue(END));
  dependencyMap = toastContent;
  obj1 = _initialize;
  const items = [closure_8];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    const messages = closure_1_8.getMessages(_undefined.id);
    return messages.filter((type) => type.type !== callback(table[19]).MessageTypes.FRIEND_REQUEST_ACCEPTED).length > 0;
  });
  first1 = stateFromStores;
  let obj2 = _initialize;
  const items1 = [closure_9];
  let tmp5 = first;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => closure_1_9.getUser(_undefined.getRecipientId()));
  let obj3 = first(4219);
  let name = obj3.useName(stateFromStores1);
  if (name == null) {
    let intl = Text(1236).intl;
    name = intl.string(Text(1236).t.y1Wu2f);
  }
  const intl2 = Text(1236).intl;
  const formatToPlainStringResult = intl2.formatToPlainString(Text(1236).t.m0zYbV, { username: name });
  const showConvoStarterInDM = Text(11431).useShowConvoStarterInDM(channel);
  callback = showConvoStarterInDM;
  const TextResult = Text(11431);
  const tmp2 = END;
  const items2 = [closure_7];
  const items3 = [showConvoStarterInDM];
  const stateFromStores2 = Text(589).useStateFromStores(items2, () => {
    let stickerById = null;
    if (closure_4) {
      stickerById = closure_1_7.getStickerById(closure_1_14);
    }
    return stickerById;
  }, items3);
  const items4 = [showConvoStarterInDM];
  const effect = React.useEffect(() => {
    if (closure_4) {
      const stickerPack = _undefined(lib[22]).fetchStickerPack("847199849233514549", true);
      const obj = _undefined(lib[22]);
    }
  }, items4);
  _require = channel;
  first = undefined;
  dependencyMap = undefined;
  first1 = undefined;
  callback = undefined;
  const tmp11 = callback(React.useState(null), 2);
  first = tmp11[0];
  dependencyMap = tmp11[1];
  const tmp13 = callback(React.useState(false), 2);
  first1 = tmp13[0];
  callback = tmp13[1];
  const items5 = [channel.id];
  const effect1 = React.useEffect(() => {
    lib(null);
  }, items5);
  const items6 = [first1, first, channel.id];
  callback = React.useCallback(first1(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c5 = 2;
        let tmp7 = v0;
        if (0 === v0) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp3;
            let showErrorToast = tmp7;
            showErrorToast = function showErrorToast(intl) {
              if (callback !== intl) {
                tmp30(intl);
              }
              let obj = callback(tmp30[13]);
              obj = { key: "HANDLE_WAVE_PRESS_TOAST", content: intl, icon: callback(tmp30[14]) };
              obj.open(obj);
            };
            tmp7 = c3;
            if (!c3) {
              v0(true);
              if (null !== closure_1_1) {
                v0(false);
                showErrorToast(tmp26);
                c5 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              } else {
                c3 = 1;
                obj1 = { channelId: null, source: "In-channel greet" };
                obj1[0] = closure_1_0.id;
                closure_1_0(closure_1_2[15]).trackWaveCtaClicked(obj1);
                const obj5 = closure_1_0(closure_1_2[15]);
                v0 = 2;
                c5 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = closure_1_1(closure_1_2[16]).sendGreetMessage(closure_1_0.id, closure_1_14);
                return obj2;
              }
            }
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            closure_1 = closure_2;
            let ok = closure_1.ok;
            if (!ok) {
              ok = 429 !== closure_1.status;
            }
            if (!ok) {
              const intl = closure_1_0(closure_1_2[17]).intl;
              showErrorToast(intl.string(closure_1_0(closure_1_2[17]).t.Whhv4w));
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c3 = 0;
          }
          tmp7 = v0(false);
        }
        c5 = 3;
      } catch (tmp30) {
        closure_2 = tmp30;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp30;
        } else {
          v0 = tmp;
        }
      }
    }
  }), items6);
  _require = undefined;
  const TextResult1 = Text(589);
  [tmp17, tmp18] = callback(React.useState(false), 2);
  _require = tmp18;
  const items7 = [tmp18];
  React = tmp17;
  const callback1 = React.useCallback(() => {
    _undefined(true);
  }, items7);
  const tmp16 = callback(React.useState(false), 2);
  const fn = function w() {
    const height = lib.gradient.height;
    let tmp = c5;
    if (c5) {
      tmp = !first;
    }
    let num = 0;
    if (tmp) {
      let num2 = 180;
      if (first1) {
        num2 = 72;
      }
      num = num2 - 1 + height;
    }
    let num4 = 0;
    if (tmp) {
      num4 = -height;
    }
    let obj = { justifyContent: "flex-end", overflow: "hidden", marginTop: null, height: null };
    const obj2 = _undefined(lib[23]);
    obj = { easing: _undefined(lib[25]).STANDARD_EASING, duration: 250 };
    obj[2] = obj2.withDelay(300, _undefined(lib[24]).withTiming(num4, obj));
    const obj3 = _undefined(lib[24]);
    const obj5 = _undefined(lib[23]);
    obj = { easing: _undefined(lib[25]).STANDARD_EASING, duration: 250 };
    obj[3] = obj5.withDelay(300, _undefined(lib[24]).withTiming(num, obj));
    return obj;
  };
  obj = { styles: toastContent, isRendered: tmp17, hasInputText, hasMessages: stateFromStores, HEIGHT_COMPACT: 72, HEIGHT_FULL: 180, withDelay: Text(4115).withDelay, withTiming: Text(4664).withTiming, STANDARD_EASING: Text(1297).STANDARD_EASING };
  fn.__closure = obj;
  fn.__workletHash = 6327401707106;
  fn.__initData = closure_16;
  const animatedStyle = Text(4115).useAnimatedStyle(fn);
  const TextResult2 = Text(4115);
  let BACKGROUND_BASE_LOWER = Text(4194).useGradientValue(tmp2);
  const TextResult3 = Text(4194);
  if (BACKGROUND_BASE_LOWER == null) {
    BACKGROUND_BASE_LOWER = tmp5(712).colors.BACKGROUND_BASE_LOWER;
  }
  const token = Text(4097).useToken(BACKGROUND_BASE_LOWER);
  const TextResult4 = Text(4097);
  const items8 = [Text(4223).hexWithOpacity(token, 0), token];
  const TextResult5 = Text(4223);
  const shouldAnimateSticker = Text(10217).useShouldAnimateSticker(false);
  if (!showConvoStarterInDM) {
    return null;
  } else {
    obj = { style: null, onLayout: null, children: null };
    obj[0] = animatedStyle;
    obj[1] = callback1;
    obj1 = { style: null, colors: null };
    obj1[0] = toastContent.gradient;
    obj1[1] = items8;
    const items9 = [callback2(tmp5(4756), obj1), ];
    obj2 = { style: null, children: null };
    obj2[0] = toastContent.container;
    if (stateFromStores) {
      obj3 = { style: null, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      obj3[0] = toastContent.toastContainer;
      const intl3 = Text(1236).intl;
      obj3[2] = intl3.string(Text(1236).t.pJObYI);
      obj3[3] = callback;
      let tmp24Result = null;
      if (null != stateFromStores2) {
        tmp5 = tmp5(10119);
        const obj4 = { sticker: null, size: 24, animated: null };
        obj4[0] = stateFromStores2;
        obj4[2] = shouldAnimateSticker;
        tmp24Result = tmp24(tmp5, obj4);
      }
      callback = [tmp24Result, ];
      Text = Text(4734).Text;
      let obj5 = { style: null, variant: "text-md/bold", children: null };
      toastContent = toastContent.toastContent;
      obj5[0] = toastContent;
      obj5[2] = formatToPlainStringResult;
      tmp = tmp24(Text, obj5);
      callback[1] = tmp;
      obj3[4] = callback;
      let tmp23Result = tmp23(Text(5433).PressableOpacity, obj3);
    } else {
      tmp24Result = null;
      if (null != stateFromStores2) {
        const obj6 = { style: null, children: null };
        obj6[0] = toastContent.stickerContainer;
        const obj7 = { sticker: null, size: 100, animated: null };
        obj7[0] = stateFromStores2;
        obj7[2] = shouldAnimateSticker;
        obj6[1] = tmp24(tmp5(10119), obj7);
        tmp24Result = tmp24(tmp25, obj6);
      }
      const obj8 = { children: null };
      const items10 = [tmp24Result, ];
      const obj9 = { text: null, onPress: null, shrink: true };
      obj9[0] = formatToPlainStringResult;
      obj9[1] = callback;
      items10[1] = tmp24(Text(4745).Button, obj9);
      obj8[0] = items10;
      tmp23Result = tmp23(closure_12, obj8);
      const tmp26 = closure_12;
    }
    obj2[1] = tmp23Result;
    obj2 = tmp24(tmp25, obj2);
    items9[1] = obj2;
    obj[2] = items9;
    tmp23Result = tmp23(tmp5(4115).View, obj);
  }
};