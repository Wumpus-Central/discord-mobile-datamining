// === Module 11166: QuestOrbsRewardModal ===

// Module 11166 (QuestOrbsRewardModal)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1382 */;
import NativeImageManagerModuleDefault from "NativeImageManagerModule" /* 1898 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import FastImageDefault from "FastImage" /* 6164 */;
import XSmallIcon from "XSmallIcon" /* 6210 */;
import APNGPlayer from "APNGPlayer" /* 8981 */;
import OrbsIcon from "OrbsIcon" /* 9009 */;
import _modDef11167 from "module_11167" /* 11167 */;
import _modDef11168 from "module_11168" /* 11168 */;
import _modDef11169 from "module_11169" /* 11169 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import UserStore from "UserStore" /* 1389 */;
import AppStateStore from "AppStateStore" /* 1998 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, StyleSheet: closure_7, View: closure_8 } = get_ActivityIndicator);
const RewardFilterTypes = fn(5977).RewardFilterTypes;
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
const QuestOrbsRewardModal = "QuestOrbsRewardModal";
let createStyles = fn(5090);
let obj = { closeButton: { alignSelf: "flex-start", marginHorizontal: nativeDefault.space.PX_16, zIndex: 999 }, closeButtonIcon: null };
let obj3 = { alignSelf: "flex-start", marginHorizontal: nativeDefault.space.PX_16, zIndex: 999 };
obj.closeButtonIcon = { tintColor: nativeDefault.colors.WHITE };
let closure_17 = createStyles.createStyles(obj);
createStyles = fn(5090);
let closure_18 = createStyles.createStyles(() => {
  const obj = { root: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, background: React5.absoluteFillObject, loading: null, header: null, main: null, animation: null, body: null, title: null, buttonsContainer: null };
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  const merged = Object.assign(React5.absoluteFillObject);
  obj.loading = { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.header = { flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end" };
  obj.main = { flex: 2 };
  obj.animation = { flex: 3 };
  const obj3 = { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.body = { flex: 2, flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_16 };
  const obj4 = { flex: 2, flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_16 };
  obj.title = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
  const obj5 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
  obj.buttonsContainer = { padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
  return obj;
});
createStyles = fn(5090);
let obj5 = { orbsIcon: null, spacer: { width: 2 } };
let obj8 = { transform: null };
let items = [{ translateY: 3 }];
obj8.transform = items;
obj5.orbsIcon = obj8;
let closure_19 = createStyles.createStyles(obj5);
let ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsBalance(balance) {
  const cResult = c.c(8);
  balance = balance.balance;
  const tmp4 = closure_19();
  if (cResult[0] !== tmp4.orbsIcon) {
    const obj2 = { size: "xs", color: nativeDefault.colors.WHITE, style: tmp4.orbsIcon };
    const tmp8 = __initData2(OrbsIcon.OrbsIcon, obj2);
    cResult[0] = tmp4.orbsIcon;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp4.spacer) {
    const obj3 = { style: tmp4.spacer };
    const tmp12 = __initData2(closure_1_8, obj3);
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
  const tmp14 = closure_1_15(state, obj4);
  cResult[4] = balance;
  cResult[5] = tmp5;
  cResult[6] = tmp9;
  cResult[7] = tmp14;
  tmp13 = tmp14;
}) : (function OrbsBalance(balance) {
  const tmp = closure_19();
  const obj = { children: null };
  const items = [__initData2(OrbsIcon.OrbsIcon, { size: "xs", color: nativeDefault.colors.WHITE, style: tmp.orbsIcon }), __initData2(closure_1_8, { style: tmp.spacer }), balance.balance];
  obj.children = items;
  return closure_1_15(state, obj);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function CancelButton() {
  const cResult = require("c").c(7);
  const tmp4 = closure_17();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function onClose() {
      ModalActionCreatorsDefault.popWithKey(QuestOrbsRewardModal);
    }
    cResult[0] = onClose;
    let first = onClose;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.closeButtonIcon) {
    const fn = function l() {
      return __initData2(XSmallIcon.XSmallIcon, { size: "lg", style: closeButtonIcon.closeButtonIcon });
    };
    cResult[1] = tmp4.closeButtonIcon;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.cpT0Cq);
    cResult[3] = stringResult;
    let tmp7 = stringResult;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === tmp4.closeButton) {
    if (cResult[5] === tmp6) {
      let tmp9 = cResult[6];
    }
    return tmp9;
  }
  const tmp10 = closure_13(require("module_6212").HeaderBackButton, { onPress: first, backImage: tmp6, accessibilityLabel: tmp7, displayMode: "minimal", style: tmp4.closeButton });
  cResult[4] = tmp4.closeButton;
  cResult[5] = tmp6;
  cResult[6] = tmp10;
  tmp9 = tmp10;
  const obj = require("c");
  const obj2 = { onPress: first, backImage: tmp6, accessibilityLabel: tmp7, displayMode: "minimal", style: tmp4.closeButton };
}) : (function CancelButton() {
  const tmp = closure_17();
  _require = tmp;
  const obj = {
    onPress: function onClose() {
      ModalActionCreatorsDefault.popWithKey(QuestOrbsRewardModal);
    },
    backImage() {
      return __initData2(XSmallIcon.XSmallIcon, { size: "lg", style: closeButtonIcon.closeButtonIcon });
    },
    accessibilityLabel: null,
    displayMode: "minimal",
    style: null
  };
  const intl = require("util").intl;
  obj.accessibilityLabel = intl.string(require("util").t.cpT0Cq);
  obj.style = tmp.closeButton;
  return closure_13(require("module_6212").HeaderBackButton, obj);
});
ReactCompilerGating = fn(558);
let closure_22 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function OrbPlayerIOS(uri) {
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
  const tmp11 = closure_13(FastImageDefault, { source: tmp8, style: tmp9, resizeMode: "cover", enableAnimation: undefined === animate || animate, onLoad, usesSmallCache: false, fadeDuration: 0 }, combined);
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
  return closure_13(FastImageDefault, { source: { uri }, style: { width: "100%", height: "100%" }, resizeMode: "cover", enableAnimation: flag, onLoad: onLoad.onLoad, usesSmallCache: false, fadeDuration: 0 }, "orb-animate-" + flag);
}));
ReactCompilerGating = fn(558);
let closure_23 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function OrbPlayerAndroid(arg0) {
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
    const tmp14 = __initData2(APNGPlayer.APNGPlayer, obj3);
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
  return __initData2(APNGPlayer.APNGPlayer, { ref, url, autoplay: false, style: { width: "100%", height: "100%" }, onLoad });
}));
ReactCompilerGating = fn(558);
let closure_24 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedOrb(arg0) {
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
      const tmp11 = __initData2(closure_1_8, obj2);
      cResult[4] = style;
      cResult[5] = tmp6;
      cResult[6] = tmp11;
      tmp8 = tmp11;
    }
  }
  const tmp7 = __initData2(utils_PlatformUtils.isAndroid() ? closure_23 : closure_22, { uri, onLoad, animate: undefined === animate || animate });
  cResult[0] = undefined === animate || animate;
  cResult[1] = onLoad;
  cResult[2] = uri;
  cResult[3] = tmp7;
  tmp6 = tmp7;
  const tmp5 = utils_PlatformUtils.isAndroid() ? closure_23 : closure_22;
}) : (function AnimatedOrb(animate) {
  let flag = animate.animate;
  ({ uri, style, onLoad } = animate);
  if (flag === undefined) {
    flag = true;
  }
  return __initData2(closure_1_8, { style, renderToHardwareTextureAndroid: true, needsOffscreenAlphaCompositing: true, children: __initData2(utils_PlatformUtils.isAndroid() ? closure_23 : closure_22, { uri, onLoad, animate: flag }) });
}));
createStyles = fn(5090);
let closure_25 = createStyles.createStyles({ animatedOrb: { position: "absolute", height: "130%", width: "130%", left: "-15%", top: "-15%", pointerEvents: "none" } });
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function StaticOrb() {
  const cResult = c.c(4);
  const tmp3 = closure_25();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const size = { width: "100%", height: "100%" };
    cResult[0] = size;
    let first = size;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { uri: _modDef11167 };
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp3.animatedOrb) {
    const obj3 = { style: first, children: null };
    const obj4 = { source: tmp5, style: tmp3.animatedOrb, fadeDuration: 0 };
    obj3.children = __initData2(FastImageDefault, obj4);
    const tmp11 = __initData2(closure_1_8, obj3);
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
  const tmp = closure_25();
  obj3.uri = _modDef11167;
  obj2.source = obj3;
  obj2.style = tmp.animatedOrb;
  obj.children = __initData2(FastImageDefault, obj2);
  return __initData2(closure_1_8, obj);
});
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedOrbContainer(isAppActive) {
  const cResult = c.c(27);
  isAppActive = isAppActive.isAppActive;
  const tmp3 = closure_25();
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
    class L {
      constructor() {
        tmp = closure_3(true);
        return;
      }
    }
    cResult[1] = L;
  } else {
    class L {
      constructor() {
        tmp = closure_3(true);
        return;
      }
    }
  }
  if (cResult[2] === first) {
    class L {
      constructor() {
        tmp = closure_3(true);
        return;
      }
    }
    const effect = noop.useEffect(H, items1);
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
        constructor() {
          tmp = closure_3(true);
          return;
        }
      }
      cResult[6] = tmp14;
    } else {
      class L {
        constructor() {
          tmp = closure_3(true);
          return;
        }
      }
    }
    if (cResult[7] === first) {
      class L {
        constructor() {
          tmp = closure_3(true);
          return;
        }
      }
      if (cResult[10] === first1) {
        class L {
          constructor() {
            tmp = closure_3(true);
            return;
          }
        }
        if (cResult[13] === tmp3.animatedOrb) {
          class L {
            constructor() {
              tmp = closure_3(true);
              return;
            }
          }
          if (!tmp9) {
            class L {
              constructor() {
                tmp = closure_3(true);
                return;
              }
            }
          }
          if (cResult[16] === tmp20) {
            class L {
              constructor() {
                tmp = closure_3(true);
                return;
              }
            }
            if (cResult[19] === isAppActive) {
              class L {
                constructor() {
                  tmp = closure_3(true);
                  return;
                }
              }
            }
            let tmp28 = tmp9;
            if (tmp9) {
              class L {
                constructor() {
                  tmp = closure_3(true);
                  return;
                }
              }
              const obj3 = { uri: _modDef11169, style: tmp3.animatedOrb, onLoad: first2, animate: isAppActive };
              tmp28 = __initData2(closure_24, obj3);
            }
            cResult[19] = isAppActive;
            cResult[20] = tmp9;
            cResult[21] = tmp3.animatedOrb;
            cResult[22] = tmp28;
          }
          const obj4 = { uri: _modDef11168, style: tmp20, onLoad: L, animate: !tmp9 };
          const tmp26 = __initData2(closure_24, obj4);
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
        class L {
          constructor() {
            tmp = closure_3(true);
            return;
          }
        }
      }
      if (tmp9) {
        class L {
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
      class L {
        constructor() {
          tmp = closure_3(true);
          return;
        }
      }
    }
    if (tmp16) {
      class L {
        constructor() {
          tmp = closure_3(true);
          return;
        }
      }
      const obj5 = { style: { height: "100%" } };
      tmp16 = __initData2(closure_1_8, obj5);
    }
    cResult[7] = first;
    cResult[8] = first1;
    cResult[9] = tmp16;
  }
  class H {
    constructor() {
      if (closure_0) {
        tmp = closure_2;
        if (closure_2) {
          tmp2 = globalThis;
          _setTimeout = setTimeout;
          num = 1450;
          closure_0 = setTimeout(() => {
            closure_1_4(false);
          }, 1450);
          return () => clearTimeout(closure_0);
        }
      }
      return;
    }
  }
  items1 = [first, first1];
  cResult[2] = first;
  cResult[3] = first1;
  cResult[4] = H;
  cResult[5] = items1;
  const tmp8 = _slicedToArray(noop.useState(true), 2);
}) : (function AnimatedOrbContainer(isAppActive) {
  isAppActive = isAppActive.isAppActive;
  first = undefined;
  closure_1 = undefined;
  first1 = undefined;
  closure_3 = undefined;
  c4 = undefined;
  const tmp = closure_25();
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
    tmp13 = __initData2(closure_1_8, obj2);
  }
  const items1 = [tmp13, , ];
  const obj3 = { uri: _modDef11168, style: null, onLoad: null, animate: null };
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
  items1[1] = __initData2(closure_24, obj3);
  if (tmp15Result) {
    const obj5 = { uri: _modDef11169, style: tmp.animatedOrb, onLoad: callback, animate: isAppActive };
    tmp15Result = __initData2(closure_24, obj5);
  }
  items1[2] = tmp15Result;
  obj.children = items1;
  return closure_1_15(closure_1_8, obj);
});
ReactCompilerGating = fn(558);
let obj4 = { tintColor: nativeDefault.colors.WHITE };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestOrbsRewardModal.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function QuestOrbsRewardModal(quest) {
  let stringResult = dependencyMap;
  const cResult = balance(576).c(21);
  quest = quest.quest;
  const tmp4 = closure_18();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function p() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = balance(576);
  const stateFromStores = balance(504).useStateFromStores(tmp5, tmp6);
  const tmpResult = balance(504);
  balance = balance(9026).useFetchVirtualCurrencyBalance().balance;
  const tmpResult5 = balance(9026);
  [tmp10, importDefault] = noop.useState(false);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AppStateStore];
    class L {
      constructor() {
        return closure_1_11.getState();
      }
    }
    cResult[2] = items1;
    cResult[3] = L;
    let tmp12 = L;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  const tmp9 = _slicedToArray(noop.useState(false), 2);
  const stateFromStores1 = balance(504).useStateFromStores(tmp11, tmp12);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserStore];
    class Q {
      constructor() {
        return closure_1_10.getCurrentUser();
      }
    }
    cResult[4] = items2;
    cResult[5] = Q;
    let tmp16 = Q;
    let tmp15 = items2;
  } else {
    tmp15 = cResult[4];
    tmp16 = cResult[5];
  }
  const tmpResult6 = balance(504);
  const userStatus = quest.userStatus;
  let orbQuantityClaimed;
  const stateFromStores2 = balance(504).useStateFromStores(tmp15, tmp16);
  if (userStatus != null) {
    orbQuantityClaimed = userStatus.orbQuantityClaimed;
  }
  if (orbQuantityClaimed == null) {
    orbQuantityClaimed = tmp(9549).getQuestOrbRewardQuantityForUser(quest.config, stateFromStores2);
    const tmpResult8 = tmp(9549);
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor() {
        obj = balance(closure_1_2[31]);
        applyOrientationLockResult = obj.applyOrientationLock("PORTRAIT");
        return () => {
          const result = balance(dependencyMap[31]).restoreDefaultOrientationLock();
        };
      }
    }
    const items3 = [];
    class Q {
      constructor() {
        return closure_1_10.getCurrentUser();
      }
    }
    cResult[7] = items3;
    let tmp21 = items3;
  } else {
    class U {
      constructor() {
        obj = balance(closure_1_2[31]);
        applyOrientationLockResult = obj.applyOrientationLock("PORTRAIT");
        return () => {
          const result = balance(dependencyMap[31]).restoreDefaultOrientationLock();
        };
      }
    }
    tmp21 = cResult[7];
  }
  const effect = noop.useEffect(U, tmp21);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor() {
        tmp = closure_1(true);
        return;
      }
    }
    cResult[8] = X;
    class Q {
      constructor() {
        return closure_1_10.getCurrentUser();
      }
    }
  } else {
    class X {
      constructor() {
        tmp = closure_1(true);
        return;
      }
    }
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor() {
        tmp = closure_1(true);
        return;
      }
    }
    cResult[9] = tmp24;
    class Q {
      constructor() {
        return closure_1_10.getCurrentUser();
      }
    }
  } else {
    class X {
      constructor() {
        tmp = closure_1(true);
        return;
      }
    }
  }
  if (cResult[10] !== tmp4.background) {
    class X {
      constructor() {
        tmp = closure_1(true);
        return;
      }
    }
    let obj2 = { style: null, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    class Q {
      constructor() {
        return closure_1_10.getCurrentUser();
      }
    }
    const obj3 = { style: tmp4.background, onReady: tmp23 };
    obj2.children = closure_13(tmp(11171).OrbsRewardBackground, obj3);
    const tmp28 = closure_13(closure_8, obj2);
    cResult[10] = tmp4.background;
    cResult[11] = tmp28;
  } else {
    class X {
      constructor() {
        tmp = closure_1(true);
        return;
      }
    }
  }
  if (cResult[12] === tmp10) {
    class X {
      constructor() {
        tmp = closure_1(true);
        return;
      }
    }
    if (!tmp10) {
      class X {
        constructor() {
          tmp = closure_1(true);
          return;
        }
      }
      const obj5 = { style: null, children: null };
      class Q {
        constructor() {
          return closure_1_10.getCurrentUser();
        }
      }
      const items4 = [tmp26, tmp29, tmp10];
      obj5.children = items4;
      const tmp39 = closure_15(closure_8, obj5);
      cResult[15] = closure_8;
      cResult[16] = tmp4.root;
      cResult[17] = tmp26;
      cResult[18] = tmp29;
      cResult[19] = tmp10;
      cResult[20] = tmp39;
    } else {
      class X {
        constructor() {
          tmp = closure_1(true);
          return;
        }
      }
      const rect = { style: tmp4.main, top: true, bottom: true, left: true, right: true, children: null };
      class Q {
        constructor() {
          return closure_1_10.getCurrentUser();
        }
      }
      const obj6 = { style: tmp4.header, children: closure_13(closure_21, {}) };
      const items5 = [closure_13(closure_8, obj6), , , ];
      const obj7 = { style: tmp4.animation, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
      if (stateFromStores) {
        class X {
          constructor() {
            tmp = closure_1(true);
            return;
          }
        }
        const tmp32Result = tmp32(closure_26, {});
      } else {
        class X {
          constructor() {
            tmp = closure_1(true);
            return;
          }
        }
        { isAppActive: null }.isAppActive = stateFromStores1 === tmp(1105).AppStates.ACTIVE;
        class Q {
          constructor() {
            return closure_1_10.getCurrentUser();
          }
        }
        const obj8 = { isAppActive: null };
      }
      obj7.children = tmp32Result;
      items5[1] = tmp32(closure_8, obj7);
      let obj9 = { style: tmp4.body, children: null };
      const obj10 = { variant: "heading-xl/bold", color: "text-overlay-light", style: tmp4.title, children: null };
      let intl = tmp(1126).intl;
      if (orbQuantityClaimed == null) {
        class X {
          constructor() {
            tmp = closure_1(true);
            return;
          }
        }
      }
      const obj11 = { count: orbQuantityClaimed };
      obj10.children = intl.format(tmp(1126).t.FIilK5, obj11);
      let items6 = [tmp32(tmp(5086).Heading, obj10), ];
      let intl2 = tmp(5086).Text;
      let obj12 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp4.title, children: null };
      if (balance == null) {
        class X {
          constructor() {
            tmp = closure_1(true);
            return;
          }
        }
      }
      if (balance >= 4100) {
        class X {
          constructor() {
            tmp = closure_1(true);
            return;
          }
        }
        const obj13 = { balanceHook: null, profileDecoHook: null };
        class Q {
          constructor() {
            return closure_1_10.getCurrentUser();
          }
        }
        obj13.profileDecoHook = function profileDecoHook() {
          const obj = { variant: "text-md/semibold", color: "text-overlay-light", children: null };
          const intl = balance(1126).intl;
          obj.children = intl.string(balance(1126).t.pGDUH9);
          return closure_1_13(balance(5086).Text, obj, "profileDeco");
        };
        let formatResult = obj21.format(tmp(1126).t["2dz2AL"], obj13);
      } else {
        class X {
          constructor() {
            tmp = closure_1(true);
            return;
          }
        }
        class Q {
          constructor() {
            return closure_1_10.getCurrentUser();
          }
        }
        formatResult = obj19.format(tmp(1126).t.rKHvlX, { balanceHook: null });
        const obj14 = { balanceHook: null };
      }
      obj12.children = formatResult;
      items6[1] = tmp32(intl2, obj12);
      obj9.children = items6;
      items5[2] = tmp31(closure_8, obj9);
      const obj15 = { style: tmp4.buttonsContainer, children: null };
      obj12 = tmp(5375).Button;
      const obj16 = { onPress: string, variant: "primary", size: "lg", text: null };
      intl2 = tmp(1126).intl;
      string = intl2.string;
      stringResult = string(tmp(1126).t.uJAMFX);
      obj16.text = stringResult;
      items6 = tmp32(obj12, obj16);
      obj15.children = items6;
      obj9 = tmp32(closure_8, obj15);
      items5[3] = obj9;
      rect.children = items5;
      tmp31(tmp(6803).SafeAreaPaddingView, rect);
    }
  }
  let tmp30 = !tmp10;
  if (!tmp10) {
    class X {
      constructor() {
        tmp = closure_1(true);
        return;
      }
    }
    const obj17 = { style: tmp4.loading, children: null };
    class Q {
      constructor() {
        return closure_1_10.getCurrentUser();
      }
    }
    obj17.children = closure_13(closure_6, { animating: true });
    tmp30 = closure_13(closure_8, obj17);
  }
  cResult[12] = tmp10;
  cResult[13] = tmp4.loading;
  cResult[14] = tmp30;
  const tmpResult7 = balance(504);
}) : (function QuestOrbsRewardModal(quest) {
  quest = quest.quest;
  let num;
  c1 = undefined;
  let tmp = closure_18();
  let stringResult = dependencyMap;
  const items = [AccessibilityStore];
  const stateFromStores = num(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = num(504);
  num = num(9026).useFetchVirtualCurrencyBalance().balance;
  let obj2 = num(9026);
  [tmp6, c1] = noop.useState(false);
  const tmp5 = _slicedToArray(noop.useState(false), 2);
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
    num2 = tmp2(9549).getQuestOrbRewardQuantityForUser(quest.config, stateFromStores2);
    const tmp2Result = tmp2(9549);
  }
  const effect = noop.useEffect(() => {
    num(11170).applyOrientationLock("PORTRAIT");
    return () => {
      const result = num(dependencyMap[31]).restoreDefaultOrientationLock();
    };
  }, []);
  const callback = noop.useCallback(() => {
    _undefined(true);
  }, []);
  let string = noop.useCallback(() => {
    _undefined(5940).popWithKey(QuestOrbsRewardModal);
    const obj = _undefined(5940);
    const obj2 = num(10572);
    obj2.openQuestHome({ filter: constants.VIRTUAL_CURRENCY, fromContent: num(5980).QuestContent.REWARD_MODAL });
  }, []);
  const obj6 = { style: tmp.root, children: null };
  const obj7 = { style: absoluteFill.absoluteFill, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_13(num(11171).OrbsRewardBackground, { style: tmp.background, onReady: callback }) };
  const items3 = [closure_13(closure_8, obj7), , ];
  let tmp13Result = !tmp6;
  if (!tmp6) {
    const obj9 = { style: tmp.loading, children: closure_13(closure_6, { animating: true }) };
    tmp13Result = closure_13(closure_8, obj9);
  }
  items3[1] = tmp13Result;
  if (!tmp6) {
    items3[2] = tmp6;
    obj6.children = items3;
    return closure_15(closure_8, obj6);
  } else {
    const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: null };
    const obj10 = { style: tmp.header, children: closure_13(closure_21, {}) };
    const items4 = [closure_13(closure_8, obj10), , , ];
    const obj11 = { style: tmp.animation, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    if (stateFromStores) {
      let tmp13Result2 = closure_13(closure_26, {});
    } else {
      const obj12 = { isAppActive: stateFromStores1 === num(1105).AppStates.ACTIVE };
      tmp13Result2 = closure_13(closure_27, obj12);
    }
    obj11.children = tmp13Result2;
    items4[1] = closure_13(closure_8, obj11);
    let obj13 = { style: tmp.body, children: null };
    const obj14 = { variant: "heading-xl/bold", color: "text-overlay-light", style: tmp.title, children: null };
    let intl = tmp2(1126).intl;
    if (num2 == null) {
      num2 = 0;
    }
    const obj15 = { count: num2 };
    obj14.children = intl.format(tmp2(1126).t.FIilK5, obj15);
    let items5 = [closure_13(tmp2(5086).Heading, obj14), ];
    let obj16 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.title, children: null };
    if (num == null) {
      num = 0;
    }
    if (num >= 4100) {
      const intl3 = tmp2(1126).intl;
      const obj17 = {
        balanceHook() {
              return __initData2(closure_20, { balance: num }, "balance");
            },
        profileDecoHook() {
              const obj = { variant: "text-md/semibold", color: "text-overlay-light", children: null };
              const intl = num(1126).intl;
              obj.children = intl.string(num(1126).t.pGDUH9);
              return closure_1_13(num(5086).Text, obj, "profileDeco");
            }
      };
      let formatResult = intl3.format(tmp2(1126).t["2dz2AL"], obj17);
    } else {
      const intl2 = tmp2(1126).intl;
      const obj18 = {
        balanceHook() {
              return __initData2(closure_20, { balance: num }, "balance");
            }
      };
      formatResult = intl2.format(tmp2(1126).t.rKHvlX, obj18);
    }
    obj16.children = formatResult;
    items5[1] = closure_13(tmp2(5086).Text, obj16);
    obj13.children = items5;
    items4[2] = closure_15(closure_8, obj13);
    const obj19 = { style: tmp.buttonsContainer, children: null };
    items5 = tmp2(5375).Button;
    const obj20 = { onPress: string, variant: "primary", size: "lg", text: null };
    obj16 = tmp2(1126).intl;
    string = obj16.string;
    stringResult = string(tmp2(1126).t.uJAMFX);
    obj20.text = stringResult;
    tmp = closure_13(items5, obj20);
    obj19.children = tmp;
    obj13 = closure_13(closure_8, obj19);
    items4[3] = obj13;
    rect.children = items4;
    closure_15(tmp2(6803).SafeAreaPaddingView, rect);
  }
  const obj5 = num(504);
  const obj8 = { style: tmp.background, onReady: callback };
});
export const openQuestOrbsRewardModal = function openQuestOrbsRewardModal(quest) {
  ModalActionCreatorsDefault.pushLazy(asyncGeneratorStep(async () => {
    await require("asyncRequireImpl")(paths[10], paths.paths);
    return value.default;
  }), { quest: quest.quest }, QuestOrbsRewardModal);
};