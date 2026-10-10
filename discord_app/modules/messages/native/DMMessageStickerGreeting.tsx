// discord_app/modules/messages/native/DMMessageStickerGreeting.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import client_themes_ClientThemesUtils from "../../client_themes/native/ClientThemesUtils.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
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
const createStyles = fn(5092);
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
let c14 = "847199849233514549";
let c15 = "749054660769218631";
let c16 = 180;
const END = fn(4936).GradientPercentage.END;
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsRendered() {
      const cResult = c.c(3);
      [tmp3, require] = noop.useState(false);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          _require(true);
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp3) {
        const obj2 = { isRendered: tmp3, setIsRendered: first };
        cResult[1] = tmp3;
        cResult[2] = obj2;
        let tmp5 = obj2;
      } else {
        tmp5 = cResult[2];
      }
      return tmp5;
    }
  : function useIsRendered() {
      const tmp = _slicedToArray(noop.useState(false), 2);
      closure_0 = tmp2;
      const obj = { isRendered: tmp[0], setIsRendered: null };
      const items = [tmp[1]];
      obj.setIsRendered = noop.useCallback(() => {
        closure_0(true);
      }, items);
      return obj;
    };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGradientOverlayColors() {
      const cResult = c.c(5);
      let BACKGROUND_BASE_LOWER = client_themes_ClientThemesUtils.useGradientValue(END);
      if (BACKGROUND_BASE_LOWER == null) {
        BACKGROUND_BASE_LOWER = nativeDefault.colors.BACKGROUND_BASE_LOWER;
      }
      const token = useToken.useToken(BACKGROUND_BASE_LOWER);
      if (cResult[0] !== token) {
        const hexWithOpacityResult = ColorUtils.hexWithOpacity(token, 0);
        cResult[0] = token;
        cResult[1] = hexWithOpacityResult;
        let tmp6 = hexWithOpacityResult;
        const tmpResult = ColorUtils;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === token) {
        if (cResult[3] === tmp6) {
          let tmp8 = cResult[4];
        }
        return tmp8;
      }
      const items = [tmp6, token];
      cResult[2] = token;
      cResult[3] = tmp6;
      cResult[4] = items;
      tmp8 = items;
    }
  : function useGradientOverlayColors() {
      let BACKGROUND_BASE_LOWER = client_themes_ClientThemesUtils.useGradientValue(END);
      if (BACKGROUND_BASE_LOWER == null) {
        BACKGROUND_BASE_LOWER = nativeDefault.colors.BACKGROUND_BASE_LOWER;
      }
      const token = useToken.useToken(BACKGROUND_BASE_LOWER);
      const items = [ColorUtils.hexWithOpacity(token, 0), token];
      return items;
    };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useHandleWavePress(id) {
      _require = id;
      const cResult = require("c").c(7);
      [first, dependencyMap] = noop.useState(null);
      [first1, _slicedToArray] = noop.useState(false);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l() {
          closure_2(null);
        };
        cResult[0] = fn;
        let first2 = fn;
      } else {
        first2 = cResult[0];
      }
      if (cResult[1] !== id.id) {
        const items = [id.id];
        cResult[1] = id.id;
        cResult[2] = items;
        let tmp7 = items;
      } else {
        tmp7 = cResult[2];
      }
      const effect = noop.useEffect(first2, tmp7);
      if (cResult[3] === id.id) {
        if (cResult[4] === first) {
          if (cResult[5] === first1) {
            let tmp9 = cResult[6];
          }
          return tmp9;
        }
      }
      _require = first1(function* () {
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
            return { value: "IconComponent", done: "+51" };
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
                closure_1 = tmp3;
                closure_0 = tmp7;
                closure_128_0 = undefined;
                closure_128_1 = undefined;
                if (!c3) {
                  v2(true);
                  function showErrorToast(text) {
                    if (closure_1_1 !== text) {
                      dependencyMap(text);
                    }
                    closure_1(4809).open("HANDLE_WAVE_PRESS_TOAST", { text, variant: "critical" });
                    const obj = closure_1(4809);
                    const obj2 = { text, variant: "critical" };
                  }
                  closure_128_0 = showErrorToast;
                  if (null !== closure_1) {
                    v2(false);
                    showErrorToast(tmp26);
                    c5 = 3;
                    return { value: "IconComponent", done: "+51" };
                  } else {
                    c3 = 1;
                    const obj4 = { channelId: closure_0.id, source: "In-channel greet" };
                    closure_0(tmp30[16]).trackWaveCtaClicked(obj4);
                    const obj5 = closure_0(tmp30[16]);
                    v2 = 2;
                    c5 = 1;
                    const obj6 = { value: first(tmp30[17]).sendGreetMessage(closure_0.id, closure_2_15), done: false };
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
                  const intl = closure_0(tmp30[18]).intl;
                  closure_128_0(intl.string(closure_0(tmp30[18]).t.Whhv4w));
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
              tmp7 = v2(false);
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
      });
      function t2() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      cResult[3] = id.id;
      cResult[4] = first;
      cResult[5] = first1;
      cResult[6] = t2;
      tmp9 = t2;
      let obj = require("c");
    }
  : function useHandleWavePress(id) {
      [first, closure_2] = noop.useState(null);
      [first1, _slicedToArray] = noop.useState(false);
      const items = [id.id];
      const effect = noop.useEffect(() => {
        closure_2(null);
      }, items);
      const items1 = [first1, first, id.id];
      return noop.useCallback(
        first1(function* () {
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
              return { value: "IconComponent", done: "+51" };
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
                  id = tmp7;
                  function showErrorToast(text) {
                    if (closure_1_1 !== text) {
                      dependencyMap(text);
                    }
                    closure_1(4809).open("HANDLE_WAVE_PRESS_TOAST", { text, variant: "critical" });
                    const obj = closure_1(4809);
                    const obj2 = { text, variant: "critical" };
                  }
                  closure_128_0 = showErrorToast;
                  tmp7 = first1;
                  if (!first1) {
                    v2(true);
                    if (null !== first) {
                      v2(false);
                      showErrorToast(tmp26);
                      c5 = 3;
                      return { value: "IconComponent", done: "+51" };
                    } else {
                      c3 = 1;
                      const obj4 = { channelId: id.id, source: "In-channel greet" };
                      id(tmp30[16]).trackWaveCtaClicked(obj4);
                      const obj5 = id(tmp30[16]);
                      c4 = 2;
                      c5 = 1;
                      const obj6 = { value: tmp3(tmp30[17]).sendGreetMessage(id.id, closure_1_15), done: false };
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
                    const intl = id(tmp30[18]).intl;
                    closure_128_0(intl.string(id(tmp30[18]).t.Whhv4w));
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
        items1,
      );
    };
const __initData = {
  code: 'function DMMessageStickerGreetingTsx1(){const{styles,isRendered,hasInputText,hasMessages,HEIGHT_COMPACT,HEIGHT_FULL,withDelay,withTiming,STANDARD_EASING}=this.__closure;const gradientOverlayOffset=styles.gradient.height;const hasHeight=isRendered&&!hasInputText;const heightExpanded=(hasMessages?HEIGHT_COMPACT:HEIGHT_FULL)-1;const targetHeight=hasHeight?heightExpanded+gradientOverlayOffset:0;const targetMargin=hasHeight?-gradientOverlayOffset:0;const generateAnimationConfig=function generateAnimationConfig(value){return withDelay(300,withTiming(value,{easing:STANDARD_EASING,duration:250}));};return{justifyContent:"flex-end",overflow:"hidden",marginTop:generateAnimationConfig(targetMargin),height:generateAnimationConfig(targetHeight)};}',
};
const __initData2 = {
  code: "function DMMessageStickerGreetingTsx2(){const{styles,isRendered,hasInputText,hasMessages,HEIGHT_COMPACT,HEIGHT_FULL,withDelay,withTiming,STANDARD_EASING}=this.__closure;const gradientOverlayOffset=styles.gradient.height;const hasHeight=isRendered&&!hasInputText;const heightExpanded=(hasMessages?HEIGHT_COMPACT:HEIGHT_FULL)-1;const targetHeight=hasHeight?heightExpanded+gradientOverlayOffset:0;const targetMargin=hasHeight?-gradientOverlayOffset:0;function generateAnimationConfig(value){return withDelay(300,withTiming(value,{easing:STANDARD_EASING,duration:250}));}return{justifyContent:'flex-end',overflow:'hidden',marginTop:generateAnimationConfig(targetMargin),height:generateAnimationConfig(targetHeight)};}",
};
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/DMMessageStickerGreeting.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function DMMessageStickerGreeting(channel) {
      const cResult = channel(576).c(33);
      channel = channel.channel;
      const hasInputText = channel.hasInputText;
      let obj = channel(576);
      const tmp4 = closure_13(channel(4936).useGradientValue(END));
      dependencyMap = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MessageStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.id) {
        const fn = function h() {
          const messages = MessageStore.getMessages(channel.id);
          return (
            messages.filter((type) => type.type !== channel(gradient[19]).MessageTypes.FRIEND_REQUEST_ACCEPTED).length >
            0
          );
        };
        cResult[1] = channel.id;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let obj2 = channel(4936);
      const stateFromStores = channel(504).useStateFromStores(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserStore];
        cResult[3] = items1;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== channel) {
        const fn2 = function x() {
          return UserStore.getUser(channel.getRecipientId());
        };
        cResult[4] = channel;
        cResult[5] = fn2;
        let tmp11 = fn2;
      } else {
        tmp11 = cResult[5];
      }
      const tmpResult = channel(504);
      const stateFromStores1 = channel(504).useStateFromStores(tmp9, tmp11);
      const tmp13 = hasInputText;
      const tmpResult6 = channel(504);
      let name = hasInputText(4962).useName(stateFromStores1);
      if (name == null) {
        const intl = tmp(1126).intl;
        name = intl.string(tmp(1126).t.y1Wu2f);
      }
      const intl2 = tmp(1126).intl;
      intl2.formatToPlainString(channel(1126).t.m0zYbV, { username: name });
      let obj5 = hasInputText(4962);
      const showConvoStarterInDM = channel(11963).useShowConvoStarterInDM(channel);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [StickersStore];
        cResult[6] = items2;
        let tmp17 = items2;
      } else {
        tmp17 = cResult[6];
      }
      if (cResult[7] !== showConvoStarterInDM) {
        class N {
          constructor() {
            stickerById = null;
            if (closure_4) {
              tmp2 = closure_7;
              tmp3 = c15;
              stickerById = closure_7.getStickerById(c15);
            }
            return stickerById;
          }
        }
        const items3 = [showConvoStarterInDM];
        cResult[7] = showConvoStarterInDM;
        cResult[8] = N;
        cResult[9] = items3;
        let tmp20 = items3;
      } else {
        class N {
          constructor() {
            stickerById = null;
            if (closure_4) {
              tmp2 = closure_7;
              tmp3 = c15;
              stickerById = closure_7.getStickerById(c15);
            }
            return stickerById;
          }
        }
        tmp20 = cResult[9];
      }
      const tmpResult7 = channel(11963);
      const stateFromStores2 = channel(504).useStateFromStores(tmp17, N, tmp20);
      if (cResult[10] !== showConvoStarterInDM) {
        class U {
          constructor() {
            if (closure_4) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[23]);
              tmp3 = c14;
              flag = true;
              stickerPack = obj.fetchStickerPack(c14, true);
            }
            return;
          }
        }
        const items4 = [showConvoStarterInDM];
        cResult[10] = showConvoStarterInDM;
        cResult[11] = U;
        cResult[12] = items4;
        let tmp23 = items4;
      } else {
        class U {
          constructor() {
            if (closure_4) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[23]);
              tmp3 = c14;
              flag = true;
              stickerPack = obj.fetchStickerPack(c14, true);
            }
            return;
          }
        }
        tmp23 = cResult[12];
      }
      const effect = isRendered.useEffect(U, tmp23);
      closure_20(channel);
      const tmpResult8 = channel(504);
      isRendered = closure_18().isRendered;
      const tmp26 = closure_18();
      const fn3 = function z() {
        const height = gradient.gradient.height;
        let tmp = isRendered;
        if (isRendered) {
          tmp = !hasInputText;
        }
        let num = 0;
        if (tmp) {
          let num2 = 72;
          if (!stateFromStores) {
            num2 = c16;
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
      const tmpResult9 = channel(4850);
      fn3.__closure = {
        styles: tmp4,
        isRendered,
        hasInputText,
        hasMessages: stateFromStores,
        HEIGHT_COMPACT: 72,
        HEIGHT_FULL,
        withDelay: channel(4850).withDelay,
        withTiming: channel(5093).withTiming,
        STANDARD_EASING: channel(1200).STANDARD_EASING,
      };
      fn3.__workletHash = 16992012801942;
      fn3.__initData = __initData;
      const animatedStyle = tmpResult9.useAnimatedStyle(fn3);
      const tmp28 = closure_19();
      let obj3 = {
        styles: tmp4,
        isRendered,
        hasInputText,
        hasMessages: stateFromStores,
        HEIGHT_COMPACT: 72,
        HEIGHT_FULL,
        withDelay: channel(4850).withDelay,
        withTiming: channel(5093).withTiming,
        STANDARD_EASING: channel(1200).STANDARD_EASING,
      };
      const shouldAnimateSticker = channel(9757).useShouldAnimateSticker(false);
      if (!showConvoStarterInDM) {
        class U {
          constructor() {
            if (closure_4) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[23]);
              tmp3 = c14;
              flag = true;
              stickerPack = obj.fetchStickerPack(c14, true);
            }
            return;
          }
        }
      } else {
        class U {
          constructor() {
            if (closure_4) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[23]);
              tmp3 = c14;
              flag = true;
              stickerPack = obj.fetchStickerPack(c14, true);
            }
            return;
          }
        }
        let obj4 = { style: tmp4.gradient, colors: tmp28 };
        const tmp32 = closure_10(tmp13(5391), obj4);
        cResult[13] = tmp28;
        cResult[14] = tmp4.gradient;
        cResult[15] = tmp32;
      }
      const tmpResult10 = channel(9757);
    }
  : function DMMessageStickerGreeting(channel) {
      channel = channel.channel;
      const hasInputText = channel.hasInputText;
      let toastContent;
      let showConvoStarterInDM;
      let isRendered;
      let Text = channel;
      let tmp = toastContent;
      toastContent = closure_13(channel(toastContent[10]).useGradientValue(END));
      let obj = channel(toastContent[10]);
      const items = [MessageStore];
      const stateFromStores = channel(toastContent[20]).useStateFromStores(items, () => {
        const messages = MessageStore.getMessages(channel.id);
        return (
          messages.filter((type) => type.type !== channel(toastContent[19]).MessageTypes.FRIEND_REQUEST_ACCEPTED)
            .length > 0
        );
      });
      let obj2 = channel(toastContent[20]);
      const items1 = [UserStore];
      let tmp4 = hasInputText;
      const stateFromStores1 = channel(toastContent[20]).useStateFromStores(items1, () =>
        UserStore.getUser(channel.getRecipientId()),
      );
      let obj3 = channel(toastContent[20]);
      let name = hasInputText(toastContent[21]).useName(stateFromStores1);
      let tmp16Result = null;
      if (name == null) {
        const intl = Text(tmp[18]).intl;
        name = intl.string(Text(tmp[18]).t.y1Wu2f);
      }
      const intl2 = Text(tmp[18]).intl;
      const formatToPlainStringResult = intl2.formatToPlainString(Text(tmp[18]).t.m0zYbV, { username: name });
      let obj4 = hasInputText(toastContent[21]);
      showConvoStarterInDM = Text(tmp[22]).useShowConvoStarterInDM(channel);
      const TextResult = Text(tmp[22]);
      const items2 = [StickersStore];
      const items3 = [showConvoStarterInDM];
      const stateFromStores2 = Text(tmp[20]).useStateFromStores(
        items2,
        () => {
          let stickerById = null;
          if (showConvoStarterInDM) {
            stickerById = StickersStore.getStickerById(c15);
          }
          return stickerById;
        },
        items3,
      );
      const items4 = [showConvoStarterInDM];
      const effect = isRendered.useEffect(() => {
        if (showConvoStarterInDM) {
          const stickerPack = StickersActionCreators.fetchStickerPack(c14, true);
        }
      }, items4);
      let items6 = closure_20(channel);
      const tmp11 = closure_18();
      isRendered = tmp11.isRendered;
      const TextResult1 = Text(tmp[20]);
      class M {
        constructor() {
          height = closure_2.gradient.height;
          tmp = isRendered;
          if (isRendered) {
            tmp2 = hasInputText;
            tmp = !hasInputText;
          }
          num = 0;
          if (tmp) {
            tmp3 = closure_3;
            num2 = 72;
            if (!closure_3) {
              num2 = c16;
            }
            num3 = 1;
            num = num2 - 1 + height;
          }
          num4 = 0;
          if (tmp) {
            num4 = -height;
          }
          obj = { justifyContent: "flex-end", overflow: "hidden", marginTop: null, height: null };
          obj2 = closure_0(closure_2[24]);
          obj3 = closure_0(closure_2[25]);
          obj1 = { easing: closure_0(closure_2[26]).STANDARD_EASING, duration: 250 };
          obj.marginTop = obj2.withDelay(300, obj3.withTiming(num4, obj1));
          obj5 = closure_0(closure_2[24]);
          obj6 = closure_0(closure_2[25]);
          obj8 = { easing: closure_0(closure_2[26]).STANDARD_EASING, duration: 250 };
          obj.height = obj5.withDelay(300, obj6.withTiming(num, obj8));
          return obj;
        }
      }
      const TextResult2 = Text(tmp[24]);
      M.__closure = {
        styles: toastContent,
        isRendered,
        hasInputText,
        hasMessages: stateFromStores,
        HEIGHT_COMPACT: 72,
        HEIGHT_FULL,
        withDelay: Text(tmp[24]).withDelay,
        withTiming: Text(tmp[25]).withTiming,
        STANDARD_EASING: Text(tmp[26]).STANDARD_EASING,
      };
      M.__workletHash = 12021273723425;
      M.__initData = __initData2;
      const animatedStyle = TextResult2.useAnimatedStyle(M);
      let obj5 = {
        styles: toastContent,
        isRendered,
        hasInputText,
        hasMessages: stateFromStores,
        HEIGHT_COMPACT: 72,
        HEIGHT_FULL,
        withDelay: Text(tmp[24]).withDelay,
        withTiming: Text(tmp[25]).withTiming,
        STANDARD_EASING: Text(tmp[26]).STANDARD_EASING,
      };
      const tmp13 = closure_19();
      const shouldAnimateSticker = Text(tmp[27]).useShouldAnimateSticker(false);
      if (!showConvoStarterInDM) {
        return null;
      } else {
        let obj6 = { style: animatedStyle, onLayout: tmp11.setIsRendered, children: null };
        const obj7 = { style: toastContent.gradient, colors: tmp13 };
        const items5 = [closure_10(tmp4(tmp[28]), obj7)];
        let obj8 = { style: toastContent.container, children: null };
        if (stateFromStores) {
          const obj9 = {
            style: toastContent.toastContainer,
            accessibilityRole: "button",
            accessibilityLabel: null,
            onPress: null,
            children: null,
          };
          const intl3 = Text(tmp[18]).intl;
          obj9.accessibilityLabel = intl3.string(Text(tmp[18]).t.pJObYI);
          obj9.onPress = items6;
          tmp16Result = null;
          if (tmp21) {
            tmp4 = tmp4(tmp[30]);
            const obj10 = { sticker: stateFromStores2, size: 24, animated: shouldAnimateSticker };
            tmp16Result = closure_10(tmp4, obj10);
          }
          items6 = [tmp16Result];
          Text = Text(tmp[31]).Text;
          const obj11 = { style: null, variant: "text-md/bold", children: null };
          toastContent = toastContent.toastContent;
          obj11.style = toastContent;
          obj11.children = formatToPlainStringResult;
          tmp = closure_10(Text, obj11);
          items6[1] = tmp;
          obj9.children = items6;
          let tmp15Result = closure_11(Text(tmp[29]).PressableOpacity, obj9);
          tmp21 = tmp16Result != stateFromStores2;
        } else {
          let tmp16Result2 = null;
          if (tmp16Result != stateFromStores2) {
            const obj12 = { style: toastContent.stickerContainer, children: null };
            const obj13 = { sticker: stateFromStores2, size: 100, animated: shouldAnimateSticker };
            obj12.children = closure_10(tmp4(tmp[30]), obj13);
            tmp16Result2 = closure_10(View, obj12);
          }
          const obj14 = { children: null };
          const items7 = [tmp16Result2];
          const obj15 = { text: formatToPlainStringResult, onPress: items6, shrink: true };
          items7[1] = closure_10(Text(tmp[32]).Button, obj15);
          obj14.children = items7;
          tmp15Result = closure_11(closure_12, obj14);
        }
        obj8.children = tmp15Result;
        obj8 = closure_10(View, obj8);
        items5[1] = obj8;
        obj6.children = items5;
        closure_11(tmp4(tmp[24]).View, obj6);
      }
      const TextResult3 = Text(tmp[27]);
    };
