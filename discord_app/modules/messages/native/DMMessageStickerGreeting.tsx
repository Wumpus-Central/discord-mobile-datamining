// === Module 11907: DMMessageStickerGreeting ===

// Module 11907 (DMMessageStickerGreeting)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import useToken2 from "useToken" /* 4586 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 4702 */;
import ColorUtils from "ColorUtils" /* 4733 */;
import timing from "timing" /* 4897 */;
import StickersActionCreators from "StickersActionCreators" /* 10125 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import StickersStore from "StickersStore" /* 5694 */;
import MessageStore from "MessageStore" /* 5116 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, c5, channel, dependencyMap, id;

let c10;
let closure_12;
let unpackModuleId;
let View = react_native.View;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles((arg0) => {
  let BACKGROUND_BASE_LOWER = arg0;
  if (arg0 == null) {
    BACKGROUND_BASE_LOWER = nativeDefault.colors.BACKGROUND_BASE_LOWER;
  }
  const obj = { container: { backgroundColor: BACKGROUND_BASE_LOWER, alignItems: "center", paddingHorizontal: 16, paddingBottom: 16, paddingTop: 8 }, stickerContainer: { paddingBottom: 16 }, toastContainer: { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center", gap: 8, height: 48, paddingHorizontal: 16, borderRadius: nativeDefault.radii.xxl }, toastContent: { lineHeight: 20 }, gradient: { position: "absolute", right: 0, left: 0, top: 0, height: 30 } };
  ({ flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center", gap: 8, height: 48, paddingHorizontal: 16, borderRadius: nativeDefault.radii.xxl });
  return obj;
});
let c14 = "847199849233514549";
let c15 = "749054660769218631";
let c16 = 180;
const END = client_themes_ClientThemesUtils.GradientPercentage.END;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_129_0;
  let first;
  let tmp3;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(3);
  [tmp3, closure_129_0] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      closure_1_0(true);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp3) {
    const obj2 = { isRendered: tmp3, setIsRendered: first };
    cResult[1] = tmp3;
    cResult[2] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[2];
  }
  return tmp5;
}) : (() => {
  let items;
  const tmp = _slicedToArray(react.useState(false), 2);
  let closure_0 = tmp2;
  const obj = {
    isRendered: tmp[0],
    setIsRendered: react.useCallback(() => {
      closure_0(true);
    }, items)
  };
  items = [tmp[1]];
  return obj;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp7;
  const obj = react2;
  const cResult = obj.c(5);
  const obj2 = client_themes_ClientThemesUtils;
  let BACKGROUND_BASE_LOWER = obj2.useGradientValue(END);
  const useToken = useToken2.useToken;
  useToken2;
  if (BACKGROUND_BASE_LOWER == null) {
    BACKGROUND_BASE_LOWER = nativeDefault.colors.BACKGROUND_BASE_LOWER;
  }
  const token = useToken(BACKGROUND_BASE_LOWER);
  if (cResult[0] !== token) {
    const tmpResult = ColorUtils;
    const hexWithOpacityResult = tmpResult.hexWithOpacity(token, 0);
    cResult[0] = token;
    cResult[1] = hexWithOpacityResult;
    tmp7 = hexWithOpacityResult;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === token) {
    let tmp9;
    if (cResult[3] === tmp7) {
      tmp9 = cResult[4];
    }
    return tmp9;
  }
  const items = [tmp7, token];
  cResult[2] = token;
  cResult[3] = tmp7;
  cResult[4] = items;
  tmp9 = items;
}) : (() => {
  const obj = client_themes_ClientThemesUtils;
  let BACKGROUND_BASE_LOWER = obj.useGradientValue(END);
  const useToken = useToken2.useToken;
  useToken2;
  if (BACKGROUND_BASE_LOWER == null) {
    BACKGROUND_BASE_LOWER = nativeDefault.colors.BACKGROUND_BASE_LOWER;
  }
  const token = useToken(BACKGROUND_BASE_LOWER);
  const items = [, ];
  const tmpResult = ColorUtils;
  items[0] = tmpResult.hexWithOpacity(token, 0);
  items[1] = token;
  return items;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let closure_4;
  let first;
  let first1;
  let first2;
  let tmp7;
  _require = id;
  let obj = require("react");
  const cResult = obj.c(7);
  [first, dependencyMap] = react.useState(null);
  [first1, _slicedToArray] = react.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      closure_2(null);
    };
    cResult[0] = fn;
    first2 = fn;
  } else {
    first2 = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const items = [id.id];
    cResult[1] = id.id;
    cResult[2] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  const effect = react.useEffect(first2, tmp7);
  if (cResult[3] === id.id) {
    if (cResult[4] === first) {
      let tmp9;
      if (cResult[5] === first1) {
        tmp9 = cResult[6];
      }
      return tmp9;
    }
  }
  _require = first1(function*() {
    let closure_1;
    let obj7;
    let v1;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let showErrorToast;
        let tmp;
        c5 = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp4;
            showErrorToast = undefined;
            tmp = undefined;
            const tmp35 = c3;
            if (!tmp35) {
              v1(true);
              showErrorToast = function showErrorToast(content) {
                if (closure_1_1 !== content) {
                  closure_1_2(content);
                }
                const obj = closure_1(closure_2[15]);
                const obj2 = { key: "HANDLE_WAVE_PRESS_TOAST", content, icon: closure_1(closure_2[16]) };
                obj.open(obj2);
              };
              if (null !== tmp) {
                v1(false);
                showErrorToast(tmp24);
                c5 = 3;
                return { value: "IconComponent", done: null };
              } else {
                c3 = 1;
                const obj4 = { channelId: closure_0.id, source: "In-channel greet" };
                const obj5 = closure_0(closure_2_2[17]);
                obj5.trackWaveCtaClicked(obj4);
                v1 = 2;
                c5 = 1;
                const obj6 = { value: obj7.sendGreetMessage(closure_0.id, closure_2_15), done: false };
                obj7 = first(closure_2_2[18]);
                return obj6;
              }
            }
          }
        } else {
          if (1 === v1) {
            c3 = 0;
            tmp = closure_2;
            const ok = tmp.ok || 429 !== tmp.status;
            if (!ok) {
              const intl = closure_0(closure_2_2[19]).intl;
              showErrorToast(intl.string(closure_0(closure_2_2[19]).t.Whhv4w));
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
          v1(false);
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp28) {
        closure_2 = tmp28;
        if (0 === c3) {
          c5 = 3;
          throw tmp28;
        } else {
          v1 = 1;
        }
      }
    }
  });
  const fn2 = function() {
    return closure_0(...arguments);
  };
  cResult[3] = id.id;
  cResult[4] = first;
  cResult[5] = first1;
  cResult[6] = fn2;
  tmp9 = fn2;
}) : ((id) => {
  let closure_2;
  let closure_4;
  let first;
  let first1;
  [first, closure_2] = react.useState(null);
  [first1, _slicedToArray] = react.useState(false);
  const items = [id.id];
  const effect = react.useEffect(() => {
    closure_2(null);
  }, items);
  const items1 = [first1, first, id.id];
  return react.useCallback(first1(function*() {
    let closure_0;
    let closure_1;
    let obj7;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let showErrorToast;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            id = tmp4;
            showErrorToast = function showErrorToast(content) {
              if (closure_1_1 !== content) {
                closure_1_2(content);
              }
              const obj = first(closure_2[15]);
              const obj2 = { key: "HANDLE_WAVE_PRESS_TOAST", content, icon: first(closure_2[16]) };
              obj.open(obj2);
            };
            if (!first1) {
              v1(true);
              if (null !== first) {
                v1(false);
                showErrorToast(tmp24);
                c5 = 3;
                return { value: "IconComponent", done: null };
              } else {
                c3 = 1;
                const obj4 = { channelId: id.id, source: "In-channel greet" };
                const obj5 = id(closure_2[17]);
                obj5.trackWaveCtaClicked(obj4);
                c4 = 2;
                c5 = 1;
                const obj6 = { value: obj7.sendGreetMessage(id.id, closure_1_15), done: false };
                obj7 = tmp(closure_2[18]);
                return obj6;
              }
            }
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            const ok = tmp.ok || 429 !== tmp.status;
            if (!ok) {
              const intl = id(closure_2[19]).intl;
              showErrorToast(intl.string(id(closure_2[19]).t.Whhv4w));
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
          closure_129_4(false);
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp28) {
        closure_2 = tmp28;
        if (0 === c3) {
          c5 = 3;
          throw tmp28;
        } else {
          c4 = 1;
        }
      }
    }
  }), items1);
});
const __initData = { code: "function DMMessageStickerGreetingTsx1(){const{styles,isRendered,hasInputText,hasMessages,HEIGHT_COMPACT,HEIGHT_FULL,withDelay,withTiming,STANDARD_EASING}=this.__closure;const gradientOverlayOffset=styles.gradient.height;const hasHeight=isRendered&&!hasInputText;const heightExpanded=(hasMessages?HEIGHT_COMPACT:HEIGHT_FULL)-1;const targetHeight=hasHeight?heightExpanded+gradientOverlayOffset:0;const targetMargin=hasHeight?-gradientOverlayOffset:0;const generateAnimationConfig=function generateAnimationConfig(value){return withDelay(300,withTiming(value,{easing:STANDARD_EASING,duration:250}));};return{justifyContent:\"flex-end\",overflow:\"hidden\",marginTop:generateAnimationConfig(targetMargin),height:generateAnimationConfig(targetHeight)};}" };
const __initData2 = { code: "function DMMessageStickerGreetingTsx2(){const{styles,isRendered,hasInputText,hasMessages,HEIGHT_COMPACT,HEIGHT_FULL,withDelay,withTiming,STANDARD_EASING}=this.__closure;const gradientOverlayOffset=styles.gradient.height;const hasHeight=isRendered&&!hasInputText;const heightExpanded=(hasMessages?HEIGHT_COMPACT:HEIGHT_FULL)-1;const targetHeight=hasHeight?heightExpanded+gradientOverlayOffset:0;const targetMargin=hasHeight?-gradientOverlayOffset:0;function generateAnimationConfig(value){return withDelay(300,withTiming(value,{easing:STANDARD_EASING,duration:250}));}return{justifyContent:'flex-end',overflow:'hidden',marginTop:generateAnimationConfig(targetMargin),height:generateAnimationConfig(targetHeight)};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  let gradient;
  let isRendered;
  let tmp11;
  let tmp17;
  let tmp20;
  let tmp23;
  let tmp7;
  let tmp9;
  const tmp = channel;
  let obj = channel(576);
  const cResult = obj.c(33);
  channel = channel.channel;
  const hasInputText = channel.hasInputText;
  let obj2 = channel(4702);
  const tmp4 = closure_13(obj2.useGradientValue(END));
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.id) {
    const fn = function h() {
      const messages = MessageStore.getMessages(channel.id);
      return messages.filter((type) => type.type !== channel(gradient[20]).MessageTypes.FRIEND_REQUEST_ACCEPTED).length > 0;
    };
    let num2 = 1;
    cResult[1] = channel.id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    let num4 = 3;
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== channel) {
    const fn2 = function x() {
      return UserStore.getUser(channel.getRecipientId());
    };
    cResult[4] = channel;
    cResult[5] = fn2;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
  }
  const tmpResult6 = tmp(504);
  const stateFromStores1 = tmpResult6.useStateFromStores(tmp9, tmp11);
  let obj5 = hasInputText(4728);
  let name = obj5.useName(stateFromStores1);
  const tmp13 = hasInputText;
  if (name == null) {
    const intl = tmp(1126).intl;
    name = intl.string(tmp(1126).t.y1Wu2f);
  }
  const intl2 = tmp(1126).intl;
  intl2.formatToPlainString(tmp(1126).t.m0zYbV, { username: name });
  const tmpResult7 = tmp(11909);
  const showConvoStarterInDM = tmpResult7.useShowConvoStarterInDM(channel);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [StickersStore];
    cResult[6] = items2;
    tmp17 = items2;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] !== showConvoStarterInDM) {
    class N {
      constructor() {
        let stickerById = null;
        if (showConvoStarterInDM) {
          stickerById = StickersStore.getStickerById(c15);
        }
        return stickerById;
      }
    }
    const items3 = [showConvoStarterInDM];
    cResult[7] = showConvoStarterInDM;
    cResult[8] = N;
    cResult[9] = items3;
    tmp20 = items3;
  } else {
    class N {
      constructor() {
        let stickerById = null;
        if (showConvoStarterInDM) {
          stickerById = StickersStore.getStickerById(c15);
        }
        return stickerById;
      }
    }
    tmp20 = cResult[9];
  }
  const tmpResult8 = tmp(504);
  const stateFromStores2 = tmpResult8.useStateFromStores(tmp17, N, tmp20);
  if (cResult[10] !== showConvoStarterInDM) {
    class W {
      constructor() {
        if (showConvoStarterInDM) {
          const obj = StickersActionCreators;
          const stickerPack = obj.fetchStickerPack(c14, true);
        }
      }
    }
    const items4 = [showConvoStarterInDM];
    cResult[10] = showConvoStarterInDM;
    cResult[11] = W;
    cResult[12] = items4;
    tmp23 = items4;
  } else {
    class W {
      constructor() {
        if (showConvoStarterInDM) {
          const obj = StickersActionCreators;
          const stickerPack = obj.fetchStickerPack(c14, true);
        }
      }
    }
    tmp23 = cResult[12];
  }
  const effect = isRendered.useEffect(W, tmp23);
  closure_20(channel);
  isRendered = closure_18().isRendered;
  closure_18();
  const fn3 = function z() {
    let obj2;
    let obj3;
    let obj4;
    let obj5;
    let withDelay;
    let withDelay2;
    const height = gradient.gradient.height;
    let num = 0;
    if (isRendered && !hasInputText) {
      let num2 = 72;
      if (!stateFromStores) {
        num2 = c16;
      }
      num = num2 - 1 + height;
    }
    let num4 = 0;
    if (isRendered && !hasInputText) {
      num4 = -height;
    }
    const obj = { justifyContent: "flex-end", overflow: "hidden", marginTop: withDelay(300, obj2.withTiming(num4, obj3)), height: withDelay2(300, obj4.withTiming(num, obj5)) };
    withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    obj2 = timing;
    obj3 = { easing: native.STANDARD_EASING, duration: 250 };
    withDelay2 = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    obj4 = timing;
    obj5 = { easing: native.STANDARD_EASING, duration: 250 };
    return obj;
  };
  const tmpResult9 = tmp(4618);
  let obj3 = { styles: tmp4, isRendered, hasInputText, hasMessages: stateFromStores, HEIGHT_COMPACT: 72, HEIGHT_FULL, withDelay: tmp(4618).withDelay, withTiming: tmp(4897).withTiming, STANDARD_EASING: tmp(1188).STANDARD_EASING };
  fn3.__closure = obj3;
  fn3.__workletHash = 16992012801942;
  fn3.__initData = __initData;
  const animatedStyle = tmpResult9.useAnimatedStyle(fn3);
  const tmp28 = closure_19();
  const tmpResult10 = tmp(10124);
  const shouldAnimateSticker = tmpResult10.useShouldAnimateSticker(false);
  if (showConvoStarterInDM) {
    class W {
      constructor() {
        if (showConvoStarterInDM) {
          const obj = StickersActionCreators;
          const stickerPack = obj.fetchStickerPack(c14, true);
        }
      }
    }
    let obj4 = { style: tmp4.gradient, colors: tmp28 };
    cResult[13] = tmp28;
    cResult[14] = tmp4.gradient;
    cResult[15] = closure_10(tmp13(5612), obj4);
    const tmp32 = closure_10(tmp13(5612), obj4);
  }
  return null;
}) : ((channel) => {
  let gradient;
  let intl3;
  let items5;
  let items6;
  let items7;
  let obj13;
  let tmp18Result;
  channel = channel.channel;
  const hasInputText = channel.hasInputText;
  let showConvoStarterInDM;
  let isRendered;
  const tmp = channel;
  let obj = channel(4702);
  const tmp3 = closure_13(obj.useGradientValue(END));
  dependencyMap = tmp3;
  let obj2 = channel(504);
  const items = [MessageStore];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const messages = MessageStore.getMessages(channel.id);
    return messages.filter((type) => type.type !== channel(gradient[20]).MessageTypes.FRIEND_REQUEST_ACCEPTED).length > 0;
  });
  let obj3 = channel(504);
  const items1 = [UserStore];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => UserStore.getUser(channel.getRecipientId()));
  let obj4 = hasInputText(4728);
  let name = obj4.useName(stateFromStores1);
  if (name == null) {
    const intl = tmp(1126).intl;
    name = intl.string(tmp(1126).t.y1Wu2f);
  }
  const intl2 = tmp(1126).intl;
  const formatToPlainStringResult = intl2.formatToPlainString(tmp(1126).t.m0zYbV, { username: name });
  const tmpResult = tmp(11909);
  showConvoStarterInDM = tmpResult.useShowConvoStarterInDM(channel);
  const items2 = [StickersStore];
  const items3 = [showConvoStarterInDM];
  const tmpResult4 = tmp(504);
  const stateFromStores2 = tmpResult4.useStateFromStores(items2, () => {
    let stickerById = null;
    if (showConvoStarterInDM) {
      stickerById = StickersStore.getStickerById(c15);
    }
    return stickerById;
  }, items3);
  const items4 = [showConvoStarterInDM];
  const effect = isRendered.useEffect(() => {
    if (showConvoStarterInDM) {
      const obj = StickersActionCreators;
      const stickerPack = obj.fetchStickerPack(c14, true);
    }
  }, items4);
  const tmp12 = closure_20(channel);
  const tmp13 = closure_18();
  isRendered = tmp13.isRendered;
  const setIsRendered = tmp13.setIsRendered;
  const fn = function b() {
    let obj2;
    let obj3;
    let obj4;
    let obj5;
    let withDelay;
    let withDelay2;
    const height = gradient.gradient.height;
    let num = 0;
    if (isRendered && !hasInputText) {
      let num2 = 72;
      if (!stateFromStores) {
        num2 = c16;
      }
      num = num2 - 1 + height;
    }
    let num4 = 0;
    if (isRendered && !hasInputText) {
      num4 = -height;
    }
    const obj = { justifyContent: "flex-end", overflow: "hidden", marginTop: withDelay(300, obj2.withTiming(num4, obj3)), height: withDelay2(300, obj4.withTiming(num, obj5)) };
    withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    obj2 = timing;
    obj3 = { easing: native.STANDARD_EASING, duration: 250 };
    withDelay2 = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    obj4 = timing;
    obj5 = { easing: native.STANDARD_EASING, duration: 250 };
    return obj;
  };
  const tmpResult5 = tmp(4618);
  let obj5 = { styles: tmp3, isRendered, hasInputText, hasMessages: stateFromStores, HEIGHT_COMPACT: 72, HEIGHT_FULL, withDelay: tmp(4618).withDelay, withTiming: tmp(4897).withTiming, STANDARD_EASING: tmp(1188).STANDARD_EASING };
  fn.__closure = obj5;
  fn.__workletHash = 12021273723425;
  fn.__initData = __initData2;
  const animatedStyle = tmpResult5.useAnimatedStyle(fn);
  const tmp15 = closure_19();
  const tmpResult6 = tmp(10124);
  const shouldAnimateSticker = tmpResult6.useShouldAnimateSticker(false);
  let tmp18Result2 = null;
  if (showConvoStarterInDM) {
    const obj6 = { style: animatedStyle, onLayout: setIsRendered, children: items5 };
    View = tmp6(4618).View;
    const obj7 = { style: tmp3.gradient, colors: tmp15 };
    items5 = [closure_10(hasInputText(5612), obj7), ];
    const obj8 = { style: tmp3.container, children: tmp18Result };
    if (stateFromStores) {
      const obj9 = { style: tmp3.toastContainer, accessibilityRole: "button", accessibilityLabel: intl3.string(tmp(1126).t.pJObYI), onPress: tmp12, children: items6 };
      const PressableOpacity = tmp(5916).PressableOpacity;
      intl3 = tmp(1126).intl;
      let tmp19Result = null;
      if (null != stateFromStores2) {
        const obj10 = { sticker: stateFromStores2, size: 24, animated: shouldAnimateSticker };
        tmp19Result = closure_10(tmp6(10140), obj10);
      }
      items6 = [tmp19Result, ];
      const obj11 = { style: tmp3.toastContent, variant: "text-md/bold", children: formatToPlainStringResult };
      items6[1] = closure_10(tmp(4892).Text, obj11);
      tmp18Result = closure_11(PressableOpacity, obj9);
    } else {
      let tmp19Result2 = null;
      if (null != stateFromStores2) {
        const obj12 = { style: tmp3.stickerContainer, children: closure_10(hasInputText(10140), obj13) };
        obj13 = { sticker: stateFromStores2, size: 100, animated: shouldAnimateSticker };
        tmp19Result2 = closure_10(tmp20, obj12);
      }
      const obj14 = { children: items7 };
      items7 = [tmp19Result2, ];
      const obj15 = { text: formatToPlainStringResult, onPress: tmp12, shrink: true };
      items7[1] = closure_10(tmp(5601).Button, obj15);
      tmp18Result = closure_11(closure_12, obj14);
    }
    items5[1] = closure_10(View, obj8);
    tmp18Result2 = closure_11(View, obj6);
  }
  return tmp18Result2;
});
const result = size.fileFinishedImporting("modules/messages/native/DMMessageStickerGreeting.tsx");

export default tmp3;