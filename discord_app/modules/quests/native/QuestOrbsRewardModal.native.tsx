// === Module 14616: QuestOrbsRewardModal ===

// Module 14616 (QuestOrbsRewardModal)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1382 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import NativeImageManagerModuleDefault from "NativeImageManagerModule" /* 1899 */;
import FastImageDefault from "FastImage" /* 5707 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import XSmallIcon from "XSmallIcon" /* 6991 */;
import APNGPlayer from "APNGPlayer" /* 9463 */;
import OrbsIcon from "OrbsIcon" /* 9491 */;
import _modDef14617 from "module_14617" /* 14617 */;
import _modDef14618 from "module_14618" /* 14618 */;
import _modDef14619 from "module_14619" /* 14619 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5006 */;
import UserStore from "UserStore" /* 1389 */;
import AppStateStore from "AppStateStore" /* 1999 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, StyleSheet: closure_7, View: closure_8 } = get_ActivityIndicator);
const QuestConstants = fn(6768);
({ DEFAULT_PORTRAIT_ASPECT_RATIO: closure_12, RewardFilterTypes: map1 } = QuestConstants);
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
const QuestOrbsRewardModal = "QuestOrbsRewardModal";
let createStyles = fn(5005);
let obj = { closeButton: { alignSelf: "flex-start", marginHorizontal: nativeDefault.space.PX_16, zIndex: 999 }, closeButtonWide: null, closeButtonIcon: null };
let obj3 = { alignSelf: "flex-start", marginHorizontal: nativeDefault.space.PX_16, zIndex: 999 };
obj.closeButtonWide = { alignSelf: "flex-end", marginTop: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_16, zIndex: 999 };
let obj4 = { alignSelf: "flex-end", marginTop: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_16, zIndex: 999 };
obj.closeButtonIcon = { tintColor: nativeDefault.colors.WHITE };
let closure_18 = createStyles.createStyles(obj);
createStyles = fn(5005);
let closure_19 = createStyles.createStyles(() => {
  const obj = { root: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, background: React5.absoluteFillObject, loading: null, header: null, main: null, content: null, mainColumn: null, centeredLockup: null, animation: null, animationInLockup: null, body: null, bodyInLockup: null, title: null, buttonsContainer: null };
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  const merged = Object.assign(React5.absoluteFillObject);
  obj.loading = { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.header = { flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end" };
  obj.main = { flex: 2 };
  obj.content = { flex: 1, width: "100%", alignSelf: "center" };
  obj.mainColumn = { flex: 1 };
  const obj3 = { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.centeredLockup = { flex: 1, justifyContent: "center", gap: nativeDefault.space.PX_32 };
  obj.animation = { flex: 3 };
  obj.animationInLockup = { flexGrow: 0, flexShrink: 1, width: "100%", aspectRatio: 1.3333333333333333 };
  const obj4 = { flex: 1, justifyContent: "center", gap: nativeDefault.space.PX_32 };
  obj.body = { flex: 2, flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_16 };
  const obj5 = { flex: 2, flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_16 };
  obj.bodyInLockup = { flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_16 };
  const obj6 = { flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_16 };
  obj.title = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
  const obj7 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
  obj.buttonsContainer = { padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function useContentColumnLayout() {
  const cResult = c.c(5);
  ({ width, height } = useWindowDimensionsDefault());
  const rect = useSafeAreaInsetsDefault();
  const diff = width - rect.left - rect.right;
  const bound = Math.min(diff, Math.floor(height * __initData));
  if (cResult[0] !== bound) {
    const obj2 = { maxWidth: bound };
    cResult[0] = bound;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp5) {
    if (cResult[3] === tmp6) {
      let tmp7 = cResult[4];
    }
    return tmp7;
  }
  const obj3 = { maxWidthStyle: tmp5, isWidthConstrained: bound < diff };
  cResult[2] = tmp5;
  cResult[3] = bound < diff;
  cResult[4] = obj3;
  tmp7 = obj3;
}) : (function useContentColumnLayout() {
  const size = height(1497)();
  const width = size.width;
  height = size.height;
  const tmp = height(1631)();
  dependencyMap = tmp;
  const items = [width, height, , ];
  ({ left: arr[2], right: arr[3] } = tmp);
  return noop.useMemo(() => {
    const diff = width - closure_2.left - closure_2.right;
    const bound = Math.min(diff, Math.floor(height * __initData));
    return { maxWidthStyle: { maxWidth: bound }, isWidthConstrained: bound < diff };
  }, items);
});
createStyles = fn(5005);
let obj6 = { orbsIcon: null, spacer: { width: 2 } };
let obj10 = { transform: null };
let items = [{ translateY: 3 }];
obj10.transform = items;
obj6.orbsIcon = obj10;
let closure_21 = createStyles.createStyles(obj6);
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsBalance(balance) {
  const cResult = c.c(8);
  balance = balance.balance;
  const tmp4 = closure_21();
  if (cResult[0] !== tmp4.orbsIcon) {
    const obj2 = { size: "xs", color: nativeDefault.colors.WHITE, style: tmp4.orbsIcon };
    const tmp8 = closure_1_14(OrbsIcon.OrbsIcon, obj2);
    cResult[0] = tmp4.orbsIcon;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp4.spacer) {
    const obj3 = { style: tmp4.spacer };
    const tmp12 = closure_1_14(closure_1_8, obj3);
    cResult[2] = tmp4.spacer;
    cResult[3] = tmp12;
    let tmp9 = tmp12;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === balance) {
    if (cResult[5] === tmp5) {
      if (cResult[6] === tmp9) {
        let tmp13 = cResult[7];
      }
      return tmp13;
    }
  }
  const obj4 = { children: null };
  const items = [tmp5, tmp9, balance];
  obj4.children = items;
  const tmp14 = value3(value2, obj4);
  cResult[4] = balance;
  cResult[5] = tmp5;
  cResult[6] = tmp9;
  cResult[7] = tmp14;
  tmp13 = tmp14;
}) : (function OrbsBalance(balance) {
  const tmp = closure_21();
  const obj = { children: null };
  const items = [closure_1_14(OrbsIcon.OrbsIcon, { size: "xs", color: nativeDefault.colors.WHITE, style: tmp.orbsIcon }), closure_1_14(closure_1_8, { style: tmp.spacer }), balance.balance];
  obj.children = items;
  return value3(value2, obj);
});
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function CancelButton(alignEnd) {
  const cResult = require("c").c(7);
  alignEnd = alignEnd.alignEnd;
  const tmp5 = closure_18();
  _require = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function onClose() {
      ModalActionCreatorsDefault.popWithKey(QuestOrbsRewardModal);
    }
    cResult[0] = onClose;
    let first = onClose;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp5.closeButtonIcon) {
    const fn = function u() {
      return closure_2_14(XSmallIcon.XSmallIcon, { size: "lg", style: closeButtonIcon.closeButtonIcon });
    };
    cResult[1] = tmp5.closeButtonIcon;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(tmp(1125).t.cpT0Cq);
    cResult[3] = stringResult;
    let tmp8 = stringResult;
  } else {
    tmp8 = cResult[3];
  }
  const tmp10 = undefined !== alignEnd && alignEnd ? tmp5.closeButtonWide : tmp5.closeButton;
  if (cResult[4] === tmp7) {
    if (cResult[5] === tmp10) {
      let tmp11 = cResult[6];
    }
    return tmp11;
  }
  const tmp12 = closure_14(require("module_6993").HeaderBackButton, { onPress: first, backImage: tmp7, accessibilityLabel: tmp8, displayMode: "minimal", style: tmp10 });
  cResult[4] = tmp7;
  cResult[5] = tmp10;
  cResult[6] = tmp12;
  tmp11 = tmp12;
  const obj = require("c");
  const tmp4 = undefined !== alignEnd && alignEnd;
}) : (function CancelButton(alignEnd) {
  let flag = alignEnd.alignEnd;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_18();
  _require = tmp;
  const obj = {
    onPress: function onClose() {
      ModalActionCreatorsDefault.popWithKey(QuestOrbsRewardModal);
    },
    backImage() {
      return closure_2_14(XSmallIcon.XSmallIcon, { size: "lg", style: closeButtonIcon.closeButtonIcon });
    },
    accessibilityLabel: null,
    displayMode: "minimal",
    style: null
  };
  const intl = require("util").intl;
  obj.accessibilityLabel = intl.string(require("util").t.cpT0Cq);
  obj.style = flag ? tmp.closeButtonWide : tmp.closeButton;
  return closure_14(require("module_6993").HeaderBackButton, obj);
});
ReactCompilerGating = fn(558);
let closure_24 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function OrbPlayerIOS(uri) {
  const cResult = uri(576).c(11);
  uri = uri.uri;
  ({ onLoad, animate } = uri);
  if (cResult[0] !== uri) {
    const fn = function n() {
      NativeImageManagerModuleDefault.preload({ uri });
    };
    const items = [uri];
    cResult[0] = uri;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp5 = items;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = noop.useEffect(tmp4, tmp5);
  const combined = "orb-animate-" + tmp3;
  if (cResult[3] !== uri) {
    const obj2 = { uri };
    cResult[3] = uri;
    cResult[4] = obj2;
    let tmp8 = obj2;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const size = { width: "100%", height: "100%" };
    cResult[5] = size;
    let tmp9 = size;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === (undefined === animate || animate)) {
    if (cResult[7] === onLoad) {
      if (cResult[8] === combined) {
        if (cResult[9] === tmp8) {
          let tmp10 = cResult[10];
        }
        return tmp10;
      }
    }
  }
  const tmp11 = closure_14(FastImageDefault, { source: tmp8, style: tmp9, resizeMode: "cover", enableAnimation: undefined === animate || animate, onLoad, usesSmallCache: false, fadeDuration: 0 }, combined);
  cResult[6] = undefined === animate || animate;
  cResult[7] = onLoad;
  cResult[8] = combined;
  cResult[9] = tmp8;
  cResult[10] = tmp11;
  tmp10 = tmp11;
  const obj = uri(576);
}) : (function OrbPlayerIOS(onLoad) {
  const uri = onLoad.uri;
  let flag = onLoad.animate;
  if (flag === undefined) {
    flag = true;
  }
  const items = [uri];
  const effect = noop.useEffect(() => {
    NativeImageManagerModuleDefault.preload({ uri });
  }, items);
  return closure_14(FastImageDefault, { source: { uri }, style: { width: "100%", height: "100%" }, resizeMode: "cover", enableAnimation: flag, onLoad: onLoad.onLoad, usesSmallCache: false, fadeDuration: 0 }, "orb-animate-" + flag);
}));
ReactCompilerGating = fn(558);
let closure_25 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function OrbPlayerAndroid(arg0) {
  const cResult = c.c(8);
  ({ uri, onLoad, animate } = arg0);
  closure_0 = tmp4;
  const ref = noop.useRef(null);
  const aPNGPlayerControls = APNGPlayer.useAPNGPlayerControls(ref);
  if (cResult[0] === (undefined === animate || animate)) {
    if (cResult[1] === aPNGPlayerControls) {
      let tmp7 = cResult[2];
      let tmp8 = cResult[3];
    }
    const effect = noop.useEffect(tmp7, tmp8);
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const size = { width: "100%", height: "100%" };
      cResult[4] = size;
      let tmp11 = size;
    } else {
      tmp11 = cResult[4];
    }
    if (cResult[5] === onLoad) {
      if (cResult[6] === uri) {
        let tmp12 = cResult[7];
      }
      return tmp12;
    }
    const obj3 = { ref, url: uri, autoplay: false, style: tmp11, onLoad };
    const tmp14 = closure_1_14(APNGPlayer.APNGPlayer, obj3);
    cResult[5] = onLoad;
    cResult[6] = uri;
    cResult[7] = tmp14;
    tmp12 = tmp14;
  }
  const fn = function n() {
    if (closure_0) {
      aPNGPlayerControls.play();
    } else {
      aPNGPlayerControls.stop();
    }
  };
  const items = [undefined === animate || animate, aPNGPlayerControls];
  cResult[0] = undefined === animate || animate;
  cResult[1] = aPNGPlayerControls;
  cResult[2] = fn;
  cResult[3] = items;
  tmp8 = items;
  tmp7 = fn;
  const tmpResult = APNGPlayer;
}) : (function OrbPlayerAndroid(animate) {
  let flag = animate.animate;
  ({ uri, onLoad } = animate);
  if (flag === undefined) {
    flag = true;
  }
  const ref = noop.useRef(null);
  const aPNGPlayerControls = APNGPlayer.useAPNGPlayerControls(ref);
  const items = [flag, aPNGPlayerControls];
  const effect = noop.useEffect(() => {
    if (flag) {
      aPNGPlayerControls.play();
    } else {
      aPNGPlayerControls.stop();
    }
  }, items);
  return closure_1_14(APNGPlayer.APNGPlayer, { ref, url, autoplay: false, style: { width: "100%", height: "100%" }, onLoad });
}));
ReactCompilerGating = fn(558);
let closure_26 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedOrb(arg0) {
  const cResult = c.c(7);
  ({ uri, style, onLoad, animate } = arg0);
  const tmpResult = utils_PlatformUtils;
  if (cResult[0] === (undefined === animate || animate)) {
    if (cResult[1] === onLoad) {
      if (cResult[2] === uri) {
        let tmp6 = cResult[3];
      }
      if (cResult[4] === style) {
        if (cResult[5] === tmp6) {
          let tmp8 = cResult[6];
        }
        return tmp8;
      }
      const obj2 = { style, renderToHardwareTextureAndroid: true, needsOffscreenAlphaCompositing: true, children: tmp6 };
      const tmp11 = closure_1_14(closure_1_8, obj2);
      cResult[4] = style;
      cResult[5] = tmp6;
      cResult[6] = tmp11;
      tmp8 = tmp11;
    }
  }
  const tmp7 = closure_1_14(utils_PlatformUtils.isAndroid() ? closure_25 : closure_24, { uri, onLoad, animate: undefined === animate || animate });
  cResult[0] = undefined === animate || animate;
  cResult[1] = onLoad;
  cResult[2] = uri;
  cResult[3] = tmp7;
  tmp6 = tmp7;
  const tmp5 = utils_PlatformUtils.isAndroid() ? closure_25 : closure_24;
}) : (function AnimatedOrb(animate) {
  let flag = animate.animate;
  ({ uri, style, onLoad } = animate);
  if (flag === undefined) {
    flag = true;
  }
  return closure_1_14(closure_1_8, { style, renderToHardwareTextureAndroid: true, needsOffscreenAlphaCompositing: true, children: closure_1_14(utils_PlatformUtils.isAndroid() ? closure_25 : closure_24, { uri, onLoad, animate: flag }) });
}));
createStyles = fn(5005);
let closure_27 = createStyles.createStyles({ animatedOrb: { position: "absolute", height: "130%", width: "130%", left: "-15%", top: "-15%", pointerEvents: "none" } });
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? (function StaticOrb() {
  const cResult = c.c(4);
  const tmp3 = closure_27();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const size = { width: "100%", height: "100%" };
    cResult[0] = size;
    let first = size;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { uri: _modDef14617 };
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp3.animatedOrb) {
    const obj3 = { style: first, children: null };
    const obj4 = { source: tmp5, style: tmp3.animatedOrb, fadeDuration: 0 };
    obj3.children = closure_1_14(FastImageDefault, obj4);
    const tmp11 = closure_1_14(closure_1_8, obj3);
    cResult[2] = tmp3.animatedOrb;
    cResult[3] = tmp11;
    let tmp7 = tmp11;
  } else {
    tmp7 = cResult[3];
  }
  return tmp7;
}) : (function StaticOrb() {
  const obj = { style: { width: "100%", height: "100%" }, children: null };
  const obj2 = { source: null, style: null, fadeDuration: 0 };
  const obj3 = { uri: null };
  const tmp = closure_27();
  obj3.uri = _modDef14617;
  obj2.source = obj3;
  obj2.style = tmp.animatedOrb;
  obj.children = closure_1_14(FastImageDefault, obj2);
  return closure_1_14(closure_1_8, obj);
});
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedOrbContainer(isAppActive) {
  const cResult = c.c(27);
  isAppActive = isAppActive.isAppActive;
  const tmp3 = closure_27();
  [first, closure_1] = noop.useState(false);
  [first1, _slicedToArray] = noop.useState(false);
  [tmp9, asyncGeneratorStep] = noop.useState(true);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      closure_1(true);
    };
    cResult[0] = fn;
    let first2 = fn;
  } else {
    first2 = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        tmp = closure_3(true);
        return;
      }
    }
    cResult[1] = E;
  } else {
    class E {
      constructor() {
        tmp = closure_3(true);
        return;
      }
    }
  }
  if (cResult[2] === first) {
    class E {
      constructor() {
        tmp = closure_3(true);
        return;
      }
    }
    const effect = noop.useEffect(fn2, items1);
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          tmp = closure_3(true);
          return;
        }
      }
      cResult[6] = tmp14;
    } else {
      class E {
        constructor() {
          tmp = closure_3(true);
          return;
        }
      }
    }
    if (cResult[7] === first) {
      class E {
        constructor() {
          tmp = closure_3(true);
          return;
        }
      }
      if (cResult[10] === first1) {
        class E {
          constructor() {
            tmp = closure_3(true);
            return;
          }
        }
        if (cResult[13] === tmp3.animatedOrb) {
          class E {
            constructor() {
              tmp = closure_3(true);
              return;
            }
          }
          if (!tmp9) {
            class E {
              constructor() {
                tmp = closure_3(true);
                return;
              }
            }
          }
          if (cResult[16] === tmp20) {
            class E {
              constructor() {
                tmp = closure_3(true);
                return;
              }
            }
            if (cResult[19] === isAppActive) {
              class E {
                constructor() {
                  tmp = closure_3(true);
                  return;
                }
              }
            }
            let tmp28 = tmp9;
            if (tmp9) {
              class E {
                constructor() {
                  tmp = closure_3(true);
                  return;
                }
              }
              const obj3 = { uri: _modDef14619, style: tmp3.animatedOrb, onLoad: first2, animate: isAppActive };
              tmp28 = closure_1_14(closure_26, obj3);
            }
            cResult[19] = isAppActive;
            cResult[20] = tmp9;
            cResult[21] = tmp3.animatedOrb;
            cResult[22] = tmp28;
          }
          const obj4 = { uri: _modDef14618, style: tmp20, onLoad: E, animate: !tmp9 };
          const tmp26 = closure_1_14(closure_26, obj4);
          cResult[16] = tmp20;
          cResult[17] = !tmp9;
          cResult[18] = tmp26;
        }
        const items = [tmp3.animatedOrb, tmp9];
        cResult[13] = tmp3.animatedOrb;
        cResult[14] = tmp9;
        cResult[15] = items;
      }
      if (!tmp9) {
        class E {
          constructor() {
            tmp = closure_3(true);
            return;
          }
        }
      }
      if (tmp9) {
        class E {
          constructor() {
            tmp = closure_3(true);
            return;
          }
        }
      }
      cResult[10] = first1;
      cResult[11] = tmp9;
      cResult[12] = tmp9;
    }
    let tmp16 = !first;
    if (!first) {
      class E {
        constructor() {
          tmp = closure_3(true);
          return;
        }
      }
    }
    if (tmp16) {
      class E {
        constructor() {
          tmp = closure_3(true);
          return;
        }
      }
      const obj5 = { style: { height: "100%" } };
      tmp16 = closure_1_14(closure_1_8, obj5);
    }
    cResult[7] = first;
    cResult[8] = first1;
    cResult[9] = tmp16;
  }
  fn2 = function w() {
    if (timeout) {
      if (first1) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          closure_1_4(false);
        }, 1450);
        return () => clearTimeout(closure_0);
      }
    }
  };
  items1 = [first, first1];
  cResult[2] = first;
  cResult[3] = first1;
  cResult[4] = fn2;
  cResult[5] = items1;
  const tmp8 = _slicedToArray(noop.useState(true), 2);
}) : (function AnimatedOrbContainer(isAppActive) {
  isAppActive = isAppActive.isAppActive;
  first = undefined;
  closure_1 = undefined;
  first1 = undefined;
  closure_3 = undefined;
  c4 = undefined;
  const tmp = closure_27();
  [first, closure_1] = noop.useState(false);
  [first1, closure_3] = noop.useState(false);
  [tmp7, c4] = noop.useState(true);
  const callback = noop.useCallback(() => {
    closure_1(true);
  }, []);
  const items = [first, first1];
  const callback1 = noop.useCallback(() => {
    closure_3(true);
  }, []);
  const effect = noop.useEffect(() => {
    if (timeout) {
      if (first1) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          closure_1_4(false);
        }, 1450);
        return () => clearTimeout(closure_0);
      }
    }
  }, items);
  const obj = { style: { width: "100%", height: "100%" }, children: null };
  let tmp13 = !first;
  if (!first) {
    tmp13 = !first1;
  }
  if (tmp13) {
    const obj2 = { style: { height: "100%" } };
    tmp13 = closure_1_14(closure_1_8, obj2);
  }
  const items1 = [tmp13, , ];
  const obj3 = { uri: _modDef14618, style: null, onLoad: null, animate: null };
  const items2 = [tmp.animatedOrb, ];
  let obj4 = tmp15Result;
  if (!tmp15Result) {
    obj4 = !first1;
  }
  if (obj4) {
    obj4 = { opacity: 0 };
  }
  items2[1] = obj4;
  obj3.style = items2;
  obj3.onLoad = callback1;
  let tmp19 = !tmp15Result;
  if (!tmp15Result) {
    tmp19 = isAppActive;
  }
  obj3.animate = tmp19;
  items1[1] = closure_1_14(closure_26, obj3);
  if (tmp15Result) {
    const obj5 = { uri: _modDef14619, style: tmp.animatedOrb, onLoad: callback, animate: isAppActive };
    tmp15Result = closure_1_14(closure_26, obj5);
  }
  items1[2] = tmp15Result;
  obj.children = items1;
  return value3(closure_1_8, obj);
});
ReactCompilerGating = fn(558);
let obj5 = { tintColor: nativeDefault.colors.WHITE };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestOrbsRewardModal.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function QuestOrbsRewardModal(quest) {
  let stringResult = dependencyMap;
  const cResult = balance(576).c(21);
  quest = quest.quest;
  const tmp4 = closure_19();
  const tmp5 = closure_20();
  const isWidthConstrained = tmp5.isWidthConstrained;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function f() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  let obj = balance(576);
  const stateFromStores = balance(504).useStateFromStores(tmp6, tmp7);
  const tmpResult = balance(504);
  balance = balance(9512).useFetchVirtualCurrencyBalance().balance;
  const tmpResult5 = balance(9512);
  [tmp11, importDefault] = noop.useState(false);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AppStateStore];
    class T {
      constructor() {
        return closure_1_11.getState();
      }
    }
    cResult[2] = items1;
    cResult[3] = T;
    let tmp13 = T;
    let tmp12 = items1;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  const tmp10 = _slicedToArray(noop.useState(false), 2);
  const stateFromStores1 = balance(504).useStateFromStores(tmp12, tmp13);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserStore];
    class U {
      constructor() {
        return closure_1_10.getCurrentUser();
      }
    }
    cResult[4] = items2;
    cResult[5] = U;
    let tmp17 = U;
    let tmp16 = items2;
  } else {
    tmp16 = cResult[4];
    tmp17 = cResult[5];
  }
  const tmpResult6 = balance(504);
  const userStatus = quest.userStatus;
  let orbQuantityClaimed;
  const stateFromStores2 = balance(504).useStateFromStores(tmp16, tmp17);
  if (userStatus != null) {
    orbQuantityClaimed = userStatus.orbQuantityClaimed;
  }
  if (orbQuantityClaimed == null) {
    orbQuantityClaimed = tmp(9655).getQuestOrbRewardQuantityForUser(quest.config, stateFromStores2);
    const tmpResult8 = tmp(9655);
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class K {
      constructor() {
        obj = balance(closure_1_2[33]);
        applyOrientationLockResult = obj.applyOrientationLock("PORTRAIT");
        return () => {
          const result = balance(dependencyMap[33]).restoreDefaultOrientationLock();
        };
      }
    }
    const items3 = [];
    class U {
      constructor() {
        return closure_1_10.getCurrentUser();
      }
    }
    cResult[7] = items3;
    let tmp22 = items3;
  } else {
    class K {
      constructor() {
        obj = balance(closure_1_2[33]);
        applyOrientationLockResult = obj.applyOrientationLock("PORTRAIT");
        return () => {
          const result = balance(dependencyMap[33]).restoreDefaultOrientationLock();
        };
      }
    }
    tmp22 = cResult[7];
  }
  const effect = noop.useEffect(K, tmp22);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor() {
        tmp = closure_1(true);
        return;
      }
    }
    cResult[8] = V;
    class U {
      constructor() {
        return closure_1_10.getCurrentUser();
      }
    }
  } else {
    class V {
      constructor() {
        tmp = closure_1(true);
        return;
      }
    }
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class Y {
      constructor() {
        obj = closure_1(closure_1_2[9]);
        popWithKeyResult = obj.popWithKey(closure_1_17);
        obj2 = balance(closure_1_2[34]);
        obj1 = { filter: closure_1_13.VIRTUAL_CURRENCY, fromContent: balance(closure_1_2[35]).QuestContent.REWARD_MODAL };
        openQuestHomeResult = obj2.openQuestHome(obj1);
        return;
      }
    }
    cResult[9] = Y;
    class U {
      constructor() {
        return closure_1_10.getCurrentUser();
      }
    }
  } else {
    class Y {
      constructor() {
        obj = closure_1(closure_1_2[9]);
        popWithKeyResult = obj.popWithKey(closure_1_17);
        obj2 = balance(closure_1_2[34]);
        obj1 = { filter: closure_1_13.VIRTUAL_CURRENCY, fromContent: balance(closure_1_2[35]).QuestContent.REWARD_MODAL };
        openQuestHomeResult = obj2.openQuestHome(obj1);
        return;
      }
    }
  }
  if (cResult[10] !== tmp4.background) {
    class Y {
      constructor() {
        obj = closure_1(closure_1_2[9]);
        popWithKeyResult = obj.popWithKey(closure_1_17);
        obj2 = balance(closure_1_2[34]);
        obj1 = { filter: closure_1_13.VIRTUAL_CURRENCY, fromContent: balance(closure_1_2[35]).QuestContent.REWARD_MODAL };
        openQuestHomeResult = obj2.openQuestHome(obj1);
        return;
      }
    }
    let obj2 = { style: null, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    class U {
      constructor() {
        return closure_1_10.getCurrentUser();
      }
    }
    const obj3 = { style: tmp4.background, onReady: tmp24 };
    obj2.children = closure_14(tmp(14621).OrbsRewardBackground, obj3);
    const tmp28 = closure_14(closure_8, obj2);
    cResult[10] = tmp4.background;
    cResult[11] = tmp28;
  } else {
    class Y {
      constructor() {
        obj = closure_1(closure_1_2[9]);
        popWithKeyResult = obj.popWithKey(closure_1_17);
        obj2 = balance(closure_1_2[34]);
        obj1 = { filter: closure_1_13.VIRTUAL_CURRENCY, fromContent: balance(closure_1_2[35]).QuestContent.REWARD_MODAL };
        openQuestHomeResult = obj2.openQuestHome(obj1);
        return;
      }
    }
  }
  if (cResult[12] === tmp11) {
    class Y {
      constructor() {
        obj = closure_1(closure_1_2[9]);
        popWithKeyResult = obj.popWithKey(closure_1_17);
        obj2 = balance(closure_1_2[34]);
        obj1 = { filter: closure_1_13.VIRTUAL_CURRENCY, fromContent: balance(closure_1_2[35]).QuestContent.REWARD_MODAL };
        openQuestHomeResult = obj2.openQuestHome(obj1);
        return;
      }
    }
    if (!tmp11) {
      class Y {
        constructor() {
          obj = closure_1(closure_1_2[9]);
          popWithKeyResult = obj.popWithKey(closure_1_17);
          obj2 = balance(closure_1_2[34]);
          obj1 = { filter: closure_1_13.VIRTUAL_CURRENCY, fromContent: balance(closure_1_2[35]).QuestContent.REWARD_MODAL };
          openQuestHomeResult = obj2.openQuestHome(obj1);
          return;
        }
      }
      const obj5 = { style: null, children: null };
      class U {
        constructor() {
          return closure_1_10.getCurrentUser();
        }
      }
      const items4 = [tmp26, tmp29, tmp11];
      obj5.children = items4;
      const tmp40 = closure_16(closure_8, obj5);
      cResult[15] = closure_8;
      cResult[16] = tmp4.root;
      cResult[17] = tmp26;
      cResult[18] = tmp29;
      cResult[19] = tmp11;
      cResult[20] = tmp40;
    } else {
      class Y {
        constructor() {
          obj = closure_1(closure_1_2[9]);
          popWithKeyResult = obj.popWithKey(closure_1_17);
          obj2 = balance(closure_1_2[34]);
          obj1 = { filter: closure_1_13.VIRTUAL_CURRENCY, fromContent: balance(closure_1_2[35]).QuestContent.REWARD_MODAL };
          openQuestHomeResult = obj2.openQuestHome(obj1);
          return;
        }
      }
      const rect = { style: tmp4.main, top: true, bottom: true, left: true, right: true, children: null };
      class U {
        constructor() {
          return closure_1_10.getCurrentUser();
        }
      }
      if (isWidthConstrained) {
        class Y {
          constructor() {
            obj = closure_1(closure_1_2[9]);
            popWithKeyResult = obj.popWithKey(closure_1_17);
            obj2 = balance(closure_1_2[34]);
            obj1 = { filter: closure_1_13.VIRTUAL_CURRENCY, fromContent: balance(closure_1_2[35]).QuestContent.REWARD_MODAL };
            openQuestHomeResult = obj2.openQuestHome(obj1);
            return;
          }
        }
        const obj6 = { style: tmp4.header, children: null };
        class U {
          constructor() {
            return closure_1_10.getCurrentUser();
          }
        }
        obj6.children = closure_14(closure_23, { alignEnd: true });
        const tmp32 = closure_14(closure_8, obj6);
      }
      const items5 = [tmp32, ];
      let obj7 = { style: null, children: null };
      const items6 = [tmp4.content, tmp5.maxWidthStyle];
      obj7.style = items6;
      let tmp33 = !isWidthConstrained;
      if (!isWidthConstrained) {
        class Y {
          constructor() {
            obj = closure_1(closure_1_2[9]);
            popWithKeyResult = obj.popWithKey(closure_1_17);
            obj2 = balance(closure_1_2[34]);
            obj1 = { filter: closure_1_13.VIRTUAL_CURRENCY, fromContent: balance(closure_1_2[35]).QuestContent.REWARD_MODAL };
            openQuestHomeResult = obj2.openQuestHome(obj1);
            return;
          }
        }
        const obj8 = { style: tmp4.header, children: null };
        class U {
          constructor() {
            return closure_1_10.getCurrentUser();
          }
        }
        obj8.children = closure_14(closure_23, {});
        tmp33 = closure_14(closure_8, obj8);
      }
      const items7 = [tmp33, , ];
      let obj9 = { style: isWidthConstrained ? tmp4.centeredLockup : tmp4.mainColumn, children: null };
      const obj10 = { style: isWidthConstrained ? tmp4.animationInLockup : tmp4.animation, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
      if (stateFromStores) {
        class Y {
          constructor() {
            obj = closure_1(closure_1_2[9]);
            popWithKeyResult = obj.popWithKey(closure_1_17);
            obj2 = balance(closure_1_2[34]);
            obj1 = { filter: closure_1_13.VIRTUAL_CURRENCY, fromContent: balance(closure_1_2[35]).QuestContent.REWARD_MODAL };
            openQuestHomeResult = obj2.openQuestHome(obj1);
            return;
          }
        }
        const tmp34Result = closure_14(closure_28, {});
      } else {
        class Y {
          constructor() {
            obj = closure_1(closure_1_2[9]);
            popWithKeyResult = obj.popWithKey(closure_1_17);
            obj2 = balance(closure_1_2[34]);
            obj1 = { filter: closure_1_13.VIRTUAL_CURRENCY, fromContent: balance(closure_1_2[35]).QuestContent.REWARD_MODAL };
            openQuestHomeResult = obj2.openQuestHome(obj1);
            return;
          }
        }
        { isAppActive: null }.isAppActive = stateFromStores1 === tmp(1104).AppStates.ACTIVE;
        class U {
          constructor() {
            return closure_1_10.getCurrentUser();
          }
        }
        const obj11 = { isAppActive: null };
      }
      obj10.children = tmp34Result;
      let items8 = [closure_14(closure_8, obj10), ];
      let obj12 = { style: isWidthConstrained ? tmp4.bodyInLockup : tmp4.body, children: null };
      const obj13 = { variant: "heading-xl/bold", color: "text-overlay-light", style: tmp4.title, children: null };
      let intl = tmp(1125).intl;
      if (orbQuantityClaimed == null) {
        class Y {
          constructor() {
            obj = closure_1(closure_1_2[9]);
            popWithKeyResult = obj.popWithKey(closure_1_17);
            obj2 = balance(closure_1_2[34]);
            obj1 = { filter: closure_1_13.VIRTUAL_CURRENCY, fromContent: balance(closure_1_2[35]).QuestContent.REWARD_MODAL };
            openQuestHomeResult = obj2.openQuestHome(obj1);
            return;
          }
        }
      }
      const obj14 = { count: orbQuantityClaimed };
      obj13.children = intl.format(tmp(1125).t.FIilK5, obj14);
      let items9 = [closure_14(tmp(5271).Heading, obj13), ];
      let obj15 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp4.title, children: null };
      if (balance == null) {
        class Y {
          constructor() {
            obj = closure_1(closure_1_2[9]);
            popWithKeyResult = obj.popWithKey(closure_1_17);
            obj2 = balance(closure_1_2[34]);
            obj1 = { filter: closure_1_13.VIRTUAL_CURRENCY, fromContent: balance(closure_1_2[35]).QuestContent.REWARD_MODAL };
            openQuestHomeResult = obj2.openQuestHome(obj1);
            return;
          }
        }
      }
      if (balance >= 4100) {
        class Y {
          constructor() {
            obj = closure_1(closure_1_2[9]);
            popWithKeyResult = obj.popWithKey(closure_1_17);
            obj2 = balance(closure_1_2[34]);
            obj1 = { filter: closure_1_13.VIRTUAL_CURRENCY, fromContent: balance(closure_1_2[35]).QuestContent.REWARD_MODAL };
            openQuestHomeResult = obj2.openQuestHome(obj1);
            return;
          }
        }
        const obj16 = { balanceHook: null, profileDecoHook: null };
        class U {
          constructor() {
            return closure_1_10.getCurrentUser();
          }
        }
        obj16.profileDecoHook = function profileDecoHook() {
          const obj = { variant: "text-md/semibold", color: "text-overlay-light", children: null };
          const intl = balance(1125).intl;
          obj.children = intl.string(balance(1125).t.pGDUH9);
          return closure_1_14(balance(5271).Text, obj, "profileDeco");
        };
        let formatResult = obj24.format(tmp(1125).t["2dz2AL"], obj16);
      } else {
        class Y {
          constructor() {
            obj = closure_1(closure_1_2[9]);
            popWithKeyResult = obj.popWithKey(closure_1_17);
            obj2 = balance(closure_1_2[34]);
            obj1 = { filter: closure_1_13.VIRTUAL_CURRENCY, fromContent: balance(closure_1_2[35]).QuestContent.REWARD_MODAL };
            openQuestHomeResult = obj2.openQuestHome(obj1);
            return;
          }
        }
        class U {
          constructor() {
            return closure_1_10.getCurrentUser();
          }
        }
        formatResult = obj22.format(tmp(1125).t.rKHvlX, { balanceHook: null });
        const obj17 = { balanceHook: null };
      }
      obj15.children = formatResult;
      obj15 = closure_14(tmp(5271).Text, obj15);
      items9[1] = obj15;
      obj12.children = items9;
      items8[1] = tmp31(closure_8, obj12);
      obj9.children = items8;
      items7[1] = tmp31(closure_8, obj9);
      const obj18 = { style: tmp4.buttonsContainer, children: null };
      obj12 = tmp(5281).Button;
      const obj19 = { onPress: string, variant: "primary-overlay", size: "lg", text: null };
      items9 = tmp(1125).intl;
      string = items9.string;
      stringResult = string(tmp(1125).t.uJAMFX);
      obj19.text = stringResult;
      items8 = closure_14(obj12, obj19);
      obj18.children = items8;
      obj9 = closure_14(closure_8, obj18);
      items7[2] = obj9;
      obj7.children = items7;
      obj7 = tmp31(closure_8, obj7);
      items5[1] = obj7;
      rect.children = items5;
      tmp31(tmp(7281).SafeAreaPaddingView, rect);
    }
  }
  let tmp30 = !tmp11;
  if (!tmp11) {
    class Y {
      constructor() {
        obj = closure_1(closure_1_2[9]);
        popWithKeyResult = obj.popWithKey(closure_1_17);
        obj2 = balance(closure_1_2[34]);
        obj1 = { filter: closure_1_13.VIRTUAL_CURRENCY, fromContent: balance(closure_1_2[35]).QuestContent.REWARD_MODAL };
        openQuestHomeResult = obj2.openQuestHome(obj1);
        return;
      }
    }
    const obj20 = { style: tmp4.loading, children: null };
    class U {
      constructor() {
        return closure_1_10.getCurrentUser();
      }
    }
    obj20.children = closure_14(closure_6, { animating: true });
    tmp30 = closure_14(closure_8, obj20);
  }
  cResult[12] = tmp11;
  cResult[13] = tmp4.loading;
  cResult[14] = tmp30;
  const tmpResult7 = balance(504);
}) : (function QuestOrbsRewardModal(quest) {
  quest = quest.quest;
  let num;
  c1 = undefined;
  let tmp = closure_19();
  const tmp2 = closure_20();
  const isWidthConstrained = tmp2.isWidthConstrained;
  let stringResult = dependencyMap;
  const items = [AccessibilityStore];
  const stateFromStores = num(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = num(504);
  num = num(9512).useFetchVirtualCurrencyBalance().balance;
  let obj2 = num(9512);
  [tmp7, c1] = noop.useState(false);
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  const items1 = [AppStateStore];
  const stateFromStores1 = num(504).useStateFromStores(items1, () => state.getState());
  const obj4 = num(504);
  const items2 = [UserStore];
  const userStatus = quest.userStatus;
  let num2;
  const stateFromStores2 = num(504).useStateFromStores(items2, () => currentUser.getCurrentUser());
  if (userStatus != null) {
    num2 = userStatus.orbQuantityClaimed;
  }
  if (num2 == null) {
    num2 = tmp3(9655).getQuestOrbRewardQuantityForUser(quest.config, stateFromStores2);
    const tmp3Result = tmp3(9655);
  }
  const effect = noop.useEffect(() => {
    num(14620).applyOrientationLock("PORTRAIT");
    return () => {
      const result = num(dependencyMap[33]).restoreDefaultOrientationLock();
    };
  }, []);
  const callback = noop.useCallback(() => {
    _undefined(true);
  }, []);
  let string = noop.useCallback(() => {
    _undefined(6731).popWithKey(QuestOrbsRewardModal);
    const obj = _undefined(6731);
    const obj2 = num(9633);
    obj2.openQuestHome({ filter: constants.VIRTUAL_CURRENCY, fromContent: num(6771).QuestContent.REWARD_MODAL });
  }, []);
  const obj6 = { style: tmp.root, children: null };
  const obj7 = { style: absoluteFill.absoluteFill, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_14(num(14621).OrbsRewardBackground, { style: tmp.background, onReady: callback }) };
  const items3 = [closure_14(closure_8, obj7), , ];
  let tmp14Result = !tmp7;
  if (!tmp7) {
    const obj9 = { style: tmp.loading, children: closure_14(closure_6, { animating: true }) };
    tmp14Result = closure_14(closure_8, obj9);
  }
  items3[1] = tmp14Result;
  if (!tmp7) {
    items3[2] = tmp7;
    obj6.children = items3;
    return closure_16(closure_8, obj6);
  } else {
    const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: null };
    let tmp14Result4 = isWidthConstrained;
    if (isWidthConstrained) {
      const obj10 = { style: tmp.header, children: closure_14(closure_23, { alignEnd: true }) };
      tmp14Result4 = closure_14(closure_8, obj10);
    }
    const items4 = [tmp14Result4, ];
    let obj11 = { style: null, children: null };
    const items5 = [tmp.content, tmp2.maxWidthStyle];
    obj11.style = items5;
    let tmp14Result5 = !isWidthConstrained;
    if (!isWidthConstrained) {
      const obj12 = { style: tmp.header, children: closure_14(closure_23, {}) };
      tmp14Result5 = closure_14(closure_8, obj12);
    }
    const items6 = [tmp14Result5, , ];
    let obj13 = { style: isWidthConstrained ? tmp.centeredLockup : tmp.mainColumn, children: null };
    const obj14 = { style: isWidthConstrained ? tmp.animationInLockup : tmp.animation, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    if (stateFromStores) {
      let tmp14Result6 = closure_14(closure_28, {});
    } else {
      const obj15 = { isAppActive: stateFromStores1 === num(1104).AppStates.ACTIVE };
      tmp14Result6 = closure_14(closure_29, obj15);
    }
    obj14.children = tmp14Result6;
    let items7 = [closure_14(closure_8, obj14), ];
    let obj16 = { style: isWidthConstrained ? tmp.bodyInLockup : tmp.body, children: null };
    const obj17 = { variant: "heading-xl/bold", color: "text-overlay-light", style: tmp.title, children: null };
    let intl = tmp3(1125).intl;
    if (num2 == null) {
      num2 = 0;
    }
    const obj18 = { count: num2 };
    obj17.children = intl.format(tmp3(1125).t.FIilK5, obj18);
    const items8 = [closure_14(tmp3(5271).Heading, obj17), ];
    let obj19 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.title, children: null };
    if (num == null) {
      num = 0;
    }
    if (num >= 4100) {
      const intl3 = tmp3(1125).intl;
      const obj20 = {
        balanceHook() {
              return closure_2_14(closure_22, { balance: num }, "balance");
            },
        profileDecoHook() {
              const obj = { variant: "text-md/semibold", color: "text-overlay-light", children: null };
              const intl = num(1125).intl;
              obj.children = intl.string(num(1125).t.pGDUH9);
              return closure_1_14(num(5271).Text, obj, "profileDeco");
            }
      };
      let formatResult = intl3.format(tmp3(1125).t["2dz2AL"], obj20);
    } else {
      const intl2 = tmp3(1125).intl;
      const obj21 = {
        balanceHook() {
              return closure_2_14(closure_22, { balance: num }, "balance");
            }
      };
      formatResult = intl2.format(tmp3(1125).t.rKHvlX, obj21);
    }
    obj19.children = formatResult;
    obj19 = closure_14(tmp3(5271).Text, obj19);
    items8[1] = obj19;
    obj16.children = items8;
    items7[1] = closure_16(closure_8, obj16);
    obj13.children = items7;
    items6[1] = closure_16(closure_8, obj13);
    const obj22 = { style: tmp.buttonsContainer, children: null };
    items7 = tmp3(5281).Button;
    const obj23 = { onPress: string, variant: "primary-overlay", size: "lg", text: null };
    obj16 = tmp3(1125).intl;
    string = obj16.string;
    stringResult = string(tmp3(1125).t.uJAMFX);
    obj23.text = stringResult;
    tmp = closure_14(items7, obj23);
    obj22.children = tmp;
    obj13 = closure_14(closure_8, obj22);
    items6[2] = obj13;
    obj11.children = items6;
    obj11 = closure_16(closure_8, obj11);
    items4[1] = obj11;
    rect.children = items4;
    closure_16(tmp3(7281).SafeAreaPaddingView, rect);
  }
  const obj5 = num(504);
  const obj8 = { style: tmp.background, onReady: callback };
});
export function openQuestOrbsRewardModal(quest) {
  ModalActionCreatorsDefault.pushLazy(asyncGeneratorStep(async () => {
    await require("asyncRequireImpl")(paths[10], paths.paths);
    return value.default;
  }), { quest: quest.quest }, QuestOrbsRewardModal);
}