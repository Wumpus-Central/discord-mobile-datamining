// discord_app/modules/quests/native/QuestOrbsRewardModal.native.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_PlatformUtils from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeImageManagerModule.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import QuestConstants from "../QuestConstants.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import APNGPlayer from "../../image/native/APNGPlayer.android.tsx";
import OrbsIcon2 from "../../../design/components/Icon/native/redesign/generated/OrbsIcon.tsx";
import _modDef10961 from "../../../../discord_assets/assets/orbs/static_idle_orb.png.js";
import _modDef10962 from "../../../../discord_assets/assets/orbs/quest_reward_mobile_idle_dark.png.js";
import _modDef10963 from "../../../../discord_assets/assets/orbs/quest_reward_mobile_entry_dark.png.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, applyOrientationLockResult, isAppActive;

let closure_14;
let closure_15;
let items;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj5;
({ ActivityIndicator: metroRequire, StyleSheet: metroImportDefault, View: metroImportAll } = react_native);
const RewardFilterTypes = QuestConstants.RewardFilterTypes;
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = Fragment);
const QuestOrbsRewardModal = "QuestOrbsRewardModal";
let createStyles = createStyles_mod;
let obj = { closeButton: obj2, closeButtonIcon: obj3 };
obj2 = { alignSelf: "flex-start", marginHorizontal: nativeDefault.space.PX_16, zIndex: 999 };
createStyles = createStyles.createStyles;
obj3 = { tintColor: nativeDefault.colors.WHITE };
let closure_17 = createStyles(obj);
createStyles = createStyles_mod;
let closure_18 = createStyles.createStyles(() => {
  let obj3;
  const obj = {
    root: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
    background: metroImportDefault.absoluteFillObject,
    loading: obj3,
    header: { flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end" },
    main: { flex: 2 },
    animation: { flex: 3 },
    body: { flex: 2, flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_16 },
    title: { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 },
    buttonsContainer: { padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 },
  };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
  obj3 = { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  const merged = Object.assign(metroImportDefault.absoluteFillObject);
  ({ flex: 2, flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_16 });
  ({ textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 });
  ({ padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 });
  return obj;
});
createStyles = createStyles_mod;
let obj4 = { orbsIcon: obj5, spacer: { width: 2 } };
obj5 = { transform: items };
items = [{ translateY: 3 }];
let closure_19 = createStyles.createStyles(obj4);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (balance) => {
      let items;
      let tmp5;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(8);
      balance = balance.balance;
      const tmp4 = closure_19();
      if (cResult[0] !== tmp4.orbsIcon) {
        const obj2 = { size: "xs", color: nativeDefault.colors.WHITE, style: tmp4.orbsIcon };
        const OrbsIcon = OrbsIcon2.OrbsIcon;
        const tmp8 = map1(OrbsIcon, obj2);
        cResult[0] = tmp4.orbsIcon;
        cResult[1] = tmp8;
        tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== tmp4.spacer) {
        const obj3 = { style: tmp4.spacer };
        const tmp12 = map1(metroImportAll, obj3);
        cResult[2] = tmp4.spacer;
        cResult[3] = tmp12;
        tmp9 = tmp12;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === balance) {
        if (cResult[5] === tmp5) {
          let tmp13;
          if (cResult[6] === tmp9) {
            tmp13 = cResult[7];
          }
          return tmp13;
        }
      }
      const obj4 = { children: items };
      items = [tmp5, tmp9, balance];
      const tmp14 = closure_15(authStore2, obj4);
      cResult[4] = balance;
      cResult[5] = tmp5;
      cResult[6] = tmp9;
      cResult[7] = tmp14;
      tmp13 = tmp14;
    }
  : (balance) => {
      let items;
      balance = balance.balance;
      const tmp = closure_19();
      const obj = { children: items };
      const obj2 = { size: "xs", color: nativeDefault.colors.WHITE, style: tmp.orbsIcon };
      const OrbsIcon = OrbsIcon2.OrbsIcon;
      items = [map1(OrbsIcon, obj2), ,];
      const obj3 = { style: tmp.spacer };
      items[1] = map1(metroImportAll, obj3);
      items[2] = balance;
      return closure_15(authStore2, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closeButtonIcon;
      let first;
      let tmp6;
      let tmp7;
      let obj = require("react");
      const cResult = obj.c(7);
      const tmp4 = closure_17();
      _require = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          const obj = ModalActionCreatorsDefault;
          obj.popWithKey(QuestOrbsRewardModal);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.closeButtonIcon) {
        const fn2 = function l() {
          let items;
          const obj = { size: "lg", style: items };
          items = [closeButtonIcon.closeButtonIcon];
          return map1(XSmallIcon.XSmallIcon, obj);
        };
        cResult[1] = tmp4.closeButtonIcon;
        cResult[2] = fn2;
        tmp6 = fn2;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(require("intl").t.cpT0Cq);
        cResult[3] = stringResult;
        tmp7 = stringResult;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === tmp4.closeButton) {
        let tmp9;
        if (cResult[5] === tmp6) {
          tmp9 = cResult[6];
        }
        return tmp9;
      }
      const obj2 = {
        onPress: first,
        backImage: tmp6,
        accessibilityLabel: tmp7,
        displayMode: "minimal",
        style: tmp4.closeButton,
      };
      const tmp10 = closure_13(require("../../../../_runtime/metro/06019__.js").HeaderBackButton, obj2);
      cResult[4] = tmp4.closeButton;
      cResult[5] = tmp6;
      cResult[6] = tmp10;
      tmp9 = tmp10;
    }
  : () => {
      let closeButtonIcon;
      let intl;
      const tmp = closure_17();
      _require = tmp;
      let obj = {
        onPress() {
          const obj = ModalActionCreatorsDefault;
          obj.popWithKey(QuestOrbsRewardModal);
        },
        backImage() {
          let items;
          const obj = { size: "lg", style: items };
          items = [closeButtonIcon.closeButtonIcon];
          return map1(XSmallIcon.XSmallIcon, obj);
        },
        accessibilityLabel: intl.string(require("intl").t.cpT0Cq),
        displayMode: "minimal",
        style: tmp.closeButton,
      };
      const HeaderBackButton = require("../../../../_runtime/metro/06019__.js").HeaderBackButton;
      intl = require("intl").intl;
      return closure_13(HeaderBackButton, obj);
    };
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (uri) => {
        let animate;
        let onLoad;
        let tmp4;
        let tmp5;
        let tmp8;
        let tmp9;
        let obj = uri(576);
        const cResult = obj.c(11);
        uri = uri.uri;
        ({ onLoad, animate } = uri);
        if (cResult[0] !== uri) {
          const fn = function n() {
            const obj = react_nativeDefault;
            const obj2 = { uri };
            obj.preload(obj2);
          };
          const items = [uri];
          cResult[0] = uri;
          cResult[1] = fn;
          cResult[2] = items;
          tmp5 = items;
          tmp4 = fn;
        } else {
          tmp4 = cResult[1];
          tmp5 = cResult[2];
        }
        const effect = react.useEffect(tmp4, tmp5);
        const combined = "orb-animate-" + tmp3;
        if (cResult[3] !== uri) {
          let obj2 = { uri };
          cResult[3] = uri;
          cResult[4] = obj2;
          tmp8 = obj2;
        } else {
          tmp8 = cResult[4];
        }
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          size = { width: "100%", height: "100%" };
          cResult[5] = size;
          tmp9 = size;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] === (undefined === animate || animate)) {
          if (cResult[7] === onLoad) {
            if (cResult[8] === combined) {
              let tmp10;
              if (cResult[9] === tmp8) {
                tmp10 = cResult[10];
              }
              return tmp10;
            }
          }
        }
        const tmp11 = closure_13(
          FastImageDefault,
          {
            source: tmp8,
            style: tmp9,
            resizeMode: "cover",
            enableAnimation: undefined === animate || animate,
            onLoad,
            usesSmallCache: false,
            fade: false,
          },
          combined,
        );
        cResult[6] = undefined === animate || animate;
        cResult[7] = onLoad;
        cResult[8] = combined;
        cResult[9] = tmp8;
        cResult[10] = tmp11;
        tmp10 = tmp11;
      }
    : (uri) => {
        uri = uri.uri;
        let flag = uri.animate;
        const onLoad = uri.onLoad;
        if (flag === undefined) {
          flag = true;
        }
        const items = [uri];
        const effect = react.useEffect(() => {
          const obj = react_nativeDefault;
          const obj2 = { uri };
          obj.preload(obj2);
        }, items);
        let obj = {
          source: { uri },
          style: { width: "100%", height: "100%" },
          resizeMode: "cover",
          enableAnimation: flag,
          onLoad,
          usesSmallCache: false,
          fade: false,
        };
        const tmp2 = FastImageDefault;
        return closure_13(tmp2, obj, "orb-animate-" + flag);
      },
);
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let animate;
        let onLoad;
        let uri;
        const obj = react2;
        const cResult = obj.c(8);
        ({ uri, onLoad, animate } = arg0);
        let closure_0 = tmp4;
        const ref = react.useRef(null);
        const tmpResult = APNGPlayer;
        const aPNGPlayerControls = tmpResult.useAPNGPlayerControls(ref);
        if (cResult[0] === (undefined === animate || animate)) {
          let tmp7;
          let tmp8;
          let tmp11;
          if (cResult[1] === aPNGPlayerControls) {
            tmp7 = cResult[2];
            tmp8 = cResult[3];
          }
          const effect = react.useEffect(tmp7, tmp8);
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            size = { width: "100%", height: "100%" };
            cResult[4] = size;
            tmp11 = size;
          } else {
            tmp11 = cResult[4];
          }
          if (cResult[5] === onLoad) {
            let tmp12;
            if (cResult[6] === uri) {
              tmp12 = cResult[7];
            }
            return tmp12;
          }
          const obj3 = { ref, url: uri, autoplay: false, style: tmp11, onLoad };
          const tmp14 = map1(APNGPlayer.APNGPlayer, obj3);
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
      }
    : (animate) => {
        let onLoad;
        let uri;
        let flag = animate.animate;
        ({ uri, onLoad } = animate);
        if (flag === undefined) {
          flag = true;
        }
        const ref = react.useRef(null);
        const obj = APNGPlayer;
        const aPNGPlayerControls = obj.useAPNGPlayerControls(ref);
        const items = [flag, aPNGPlayerControls];
        const effect = react.useEffect(() => {
          if (flag) {
            aPNGPlayerControls.play();
          } else {
            aPNGPlayerControls.stop();
          }
        }, items);
        return map1(APNGPlayer.APNGPlayer, {
          ref,
          url,
          autoplay: false,
          style: { width: "100%", height: "100%" },
          onLoad,
        });
      },
);
const memo3 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = memo3(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let animate;
        let onLoad;
        let style;
        let uri;
        const obj = react2;
        const cResult = obj.c(7);
        ({ uri, style, onLoad, animate } = arg0);
        const tmpResult = utils_PlatformUtils;
        const tmp5 = tmpResult.isAndroid() ? closure_23 : closure_22;
        if (cResult[0] === (undefined === animate || animate)) {
          if (cResult[1] === onLoad) {
            let tmp6;
            if (cResult[2] === uri) {
              tmp6 = cResult[3];
            }
            if (cResult[4] === style) {
              let tmp8;
              if (cResult[5] === tmp6) {
                tmp8 = cResult[6];
              }
              return tmp8;
            }
            const obj2 = {
              style,
              renderToHardwareTextureAndroid: true,
              needsOffscreenAlphaCompositing: true,
              children: tmp6,
            };
            const tmp11 = map1(metroImportAll, obj2);
            cResult[4] = style;
            cResult[5] = tmp6;
            cResult[6] = tmp11;
            tmp8 = tmp11;
          }
        }
        const tmp7 = map1(tmp5, { uri, onLoad, animate: undefined === animate || animate });
        cResult[0] = undefined === animate || animate;
        cResult[1] = onLoad;
        cResult[2] = uri;
        cResult[3] = tmp7;
        tmp6 = tmp7;
      }
    : (animate) => {
        let onLoad;
        let style;
        let uri;
        let flag = animate.animate;
        ({ uri, style, onLoad } = animate);
        if (flag === undefined) {
          flag = true;
        }
        const obj = utils_PlatformUtils;
        const obj2 = {
          style,
          renderToHardwareTextureAndroid: true,
          needsOffscreenAlphaCompositing: true,
          children: map1(obj.isAndroid() ? closure_23 : closure_22, { uri, onLoad, animate: flag }),
        };
        return map1(metroImportAll, obj2);
      },
);
createStyles = createStyles_mod;
let closure_25 = createStyles.createStyles({
  animatedOrb: {
    position: "absolute",
    height: "130%",
    width: "130%",
    left: "-15%",
    top: "-15%",
    pointerEvents: "none",
  },
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let obj4;
      let tmp5;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(4);
      const tmp3 = closure_25();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        size = { width: "100%", height: "100%" };
        cResult[0] = size;
        first = size;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { uri: _modDef10961 };
        cResult[1] = obj2;
        tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== tmp3.animatedOrb) {
        const obj3 = { style: first, children: map1(FastImageDefault, obj4) };
        obj4 = { source: tmp5, style: tmp3.animatedOrb, fade: false };
        const tmp11 = map1(metroImportAll, obj3);
        cResult[2] = tmp3.animatedOrb;
        cResult[3] = tmp11;
        tmp7 = tmp11;
      } else {
        tmp7 = cResult[3];
      }
      return tmp7;
    }
  : () => {
      let obj2;
      let obj3;
      let tmp;
      let tmp2;
      const obj = { style: { width: "100%", height: "100%" }, children: map1(tmp2, obj2) };
      obj2 = { source: obj3, style: tmp.animatedOrb, fade: false };
      obj3 = { uri: _modDef10961 };
      tmp = closure_25();
      tmp2 = FastImageDefault;
      return map1(metroImportAll, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isAppActive) => {
      let closure_1;
      let closure_129_4;
      let first;
      let first1;
      let first2;
      let fn2;
      let items;
      let items2;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(27);
      isAppActive = isAppActive.isAppActive;
      const tmp3 = closure_25();
      [first, closure_1] = react.useState(false);
      [first1, _slicedToArray] = react.useState(false);
      [tmp9, closure_129_4] = react.useState(true);
      _slicedToArray(react.useState(true), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l() {
          closure_1(true);
        };
        cResult[0] = fn;
        first2 = fn;
      } else {
        first2 = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            closure_3(true);
          }
        }
        cResult[1] = L;
      } else {
        class L {
          constructor() {
            closure_3(true);
          }
        }
      }
      if (cResult[2] === first) {
        class L {
          constructor() {
            closure_3(true);
          }
        }
        const effect = react.useEffect(fn2, items2);
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class L {
            constructor() {
              closure_3(true);
            }
          }
          cResult[6] = tmp14;
        } else {
          class L {
            constructor() {
              closure_3(true);
            }
          }
        }
        if (cResult[7] === first) {
          class L {
            constructor() {
              closure_3(true);
            }
          }
          if (cResult[10] === first1) {
            class L {
              constructor() {
                closure_3(true);
              }
            }
            if (cResult[13] === tmp3.animatedOrb) {
              class L {
                constructor() {
                  closure_3(true);
                }
              }
              if (cResult[16] === tmp20) {
                class L {
                  constructor() {
                    closure_3(true);
                  }
                }
                if (cResult[19] === isAppActive) {
                  class L {
                    constructor() {
                      closure_3(true);
                    }
                  }
                }
                let tmp28 = tmp9;
                if (tmp28) {
                  class L {
                    constructor() {
                      closure_3(true);
                    }
                  }
                  const obj3 = { uri: _modDef10963, style: items, onLoad: first2, animate: isAppActive };
                  items = [tmp3.animatedOrb];
                  tmp28 = map1(closure_24, obj3);
                }
                cResult[19] = isAppActive;
                cResult[20] = tmp9;
                cResult[21] = tmp3.animatedOrb;
                cResult[22] = tmp28;
              }
              const obj4 = { uri: _modDef10962, style: tmp20, onLoad: L, animate: !tmp9 && isAppActive };
              cResult[16] = tmp20;
              cResult[17] = !tmp9 && isAppActive;
              cResult[18] = map1(closure_24, obj4);
              const tmp26 = map1(closure_24, obj4);
            }
            const items1 = [tmp3.animatedOrb, tmp18];
            cResult[13] = tmp3.animatedOrb;
            cResult[14] = tmp18;
            cResult[15] = items1;
          }
          const tmp19 = (tmp9 || !first1) && { opacity: 0 };
          cResult[10] = first1;
          cResult[11] = tmp9;
          cResult[12] = tmp19;
        }
        let tmp16 = !first && !first1;
        if (tmp16) {
          class L {
            constructor() {
              closure_3(true);
            }
          }
          const obj5 = { style: { height: "100%" } };
          tmp16 = map1(metroImportAll, obj5);
        }
        cResult[7] = first;
        cResult[8] = first1;
        cResult[9] = tmp16;
      }
      fn2 = function w() {
        let closure_0;
        let timeout;
        const tmp = timeout;
        if (tmp) {
          if (first1) {
            const _setTimeout = setTimeout;
            timeout = setTimeout(() => {
              closure_1_4(false);
            }, 1450);
            return () => clearTimeout(closure_0);
          }
        }
      };
      items2 = [first, first1];
      cResult[2] = first;
      cResult[3] = first1;
      cResult[4] = fn2;
      cResult[5] = items2;
    }
  : (isAppActive) => {
      let c4;
      let closure_1;
      let closure_3;
      let first;
      let first1;
      let items1;
      let items2;
      let items3;
      let tmp15Result;
      let tmp7;
      isAppActive = isAppActive.isAppActive;
      first = undefined;
      closure_1 = undefined;
      first1 = undefined;
      closure_3 = undefined;
      c4 = undefined;
      let tmp = closure_25();
      [first, closure_1] = react.useState(false);
      [first1, closure_3] = react.useState(false);
      [tmp7, c4] = react.useState(true);
      _slicedToArray(react.useState(true), 2);
      const callback = react.useCallback(() => {
        closure_1(true);
      }, []);
      const items = [first, first1];
      const callback1 = react.useCallback(() => {
        closure_3(true);
      }, []);
      const effect = react.useEffect(() => {
        let closure_0;
        let timeout;
        const tmp = timeout;
        if (tmp) {
          if (first1) {
            const _setTimeout = setTimeout;
            timeout = setTimeout(() => {
              closure_1_4(false);
            }, 1450);
            return () => clearTimeout(closure_0);
          }
        }
      }, items);
      let tmp13 = !first && !first1;
      const obj = { style: { width: "100%", height: "100%" }, children: items1 };
      if (tmp13) {
        const obj2 = { style: { height: "100%" } };
        tmp13 = map1(metroImportAll, obj2);
      }
      items1 = [tmp13, ,];
      const obj3 = { uri: _modDef10962, style: items2, onLoad: callback1, animate: !tmp15Result && isAppActive };
      items2 = [tmp.animatedOrb, (tmp15Result || !first1) && { opacity: 0 }];
      items1[1] = map1(closure_24, obj3);
      if (tmp15Result) {
        const obj4 = { uri: _modDef10963, style: items3, onLoad: callback, animate: isAppActive };
        items3 = [tmp.animatedOrb];
        tmp15Result = map1(closure_24, obj4);
      }
      items1[2] = tmp15Result;
      return closure_15(metroImportAll, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (quest) => {
      let Button;
      let FIilK5;
      let balance;
      let currentUser;
      let format;
      let format3Result;
      let intl2;
      let items4;
      let items5;
      let items6;
      let items7;
      let obj10;
      let obj15;
      let obj3;
      let state;
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp15;
      let tmp16;
      let tmp22;
      let tmp33Result;
      let tmp34Result;
      let tmp5;
      let tmp6;
      let useReducedMotion;
      let obj = balance(576);
      const cResult = obj.c(21);
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
      const tmpResult = balance(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      const tmpResult5 = balance(8508);
      balance = tmpResult5.useFetchVirtualCurrencyBalance().balance;
      [tmp10, importDefault] = react.useState(false);
      _slicedToArray(react.useState(false), 2);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [AppStateStore];
        class L {
          constructor() {
            return state.getState();
          }
        }
        cResult[2] = items1;
        cResult[3] = L;
        tmp12 = L;
        tmp11 = items1;
      } else {
        tmp11 = cResult[2];
        tmp12 = cResult[3];
      }
      const tmpResult6 = balance(504);
      const stateFromStores1 = tmpResult6.useStateFromStores(tmp11, tmp12);
      const ACTIVE = tmp(1105).AppStates.ACTIVE;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [UserStore];
        class L {
          constructor() {
            return state.getState();
          }
        }
        cResult[4] = items2;
        cResult[5] = tmp18;
        tmp16 = tmp18;
        tmp15 = items2;
      } else {
        tmp15 = cResult[4];
        tmp16 = cResult[5];
      }
      const userStatus = quest.userStatus;
      let orbQuantityClaimed;
      const tmpResult7 = balance(504);
      const stateFromStores2 = tmpResult7.useStateFromStores(tmp15, tmp16);
      if (userStatus != null) {
        orbQuantityClaimed = userStatus.orbQuantityClaimed;
      }
      if (orbQuantityClaimed == null) {
        const tmpResult8 = balance(10005);
        orbQuantityClaimed = tmpResult8.getQuestOrbRewardQuantityForUser(quest.config, stateFromStores2);
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            obj = balance(closure_1_2[31]);
            applyOrientationLockResult = obj.applyOrientationLock("PORTRAIT");
            return () => {
              const obj = balance(closure_1_2[31]);
              const result = obj.restoreDefaultOrientationLock();
            };
          }
        }
        const items3 = [];
        class L {
          constructor() {
            return state.getState();
          }
        }
        cResult[7] = items3;
        tmp22 = items3;
      } else {
        class U {
          constructor() {
            obj = balance(closure_1_2[31]);
            applyOrientationLockResult = obj.applyOrientationLock("PORTRAIT");
            return () => {
              const obj = balance(closure_1_2[31]);
              const result = obj.restoreDefaultOrientationLock();
            };
          }
        }
        tmp22 = cResult[7];
      }
      const effect = react.useEffect(U, tmp22);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class X {
          constructor() {
            importDefault(true);
          }
        }
        cResult[8] = X;
        class L {
          constructor() {
            return state.getState();
          }
        }
      } else {
        class X {
          constructor() {
            importDefault(true);
          }
        }
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class X {
          constructor() {
            importDefault(true);
          }
        }
        cResult[9] = tmp26;
        class L {
          constructor() {
            return state.getState();
          }
        }
      } else {
        class X {
          constructor() {
            importDefault(true);
          }
        }
      }
      if (cResult[10] !== tmp4.background) {
        class X {
          constructor() {
            importDefault(true);
          }
        }
        let obj2 = {
          style: null,
          accessible: false,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          children: closure_13(tmp(10965).OrbsRewardBackground, obj3),
        };
        class L {
          constructor() {
            return state.getState();
          }
        }
        obj3 = { style: tmp4.background, onReady: tmp24 };
        cResult[10] = tmp4.background;
        cResult[11] = closure_13(closure_8, obj2);
        const tmp30 = closure_13(closure_8, obj2);
      } else {
        class X {
          constructor() {
            importDefault(true);
          }
        }
      }
      if (cResult[12] === tmp33Result) {
        class X {
          constructor() {
            importDefault(true);
          }
        }
        if (tmp33Result) {
          class X {
            constructor() {
              importDefault(true);
            }
          }
          const rect = { style: items4, top: true, bottom: true, left: true, right: true, children: items5 };
          items4 = [];
          class L {
            constructor() {
              return state.getState();
            }
          }
          const obj5 = { style: tmp4.header, children: closure_13(closure_21, {}) };
          const SafeAreaPaddingView = tmp(6619).SafeAreaPaddingView;
          items5 = [closure_13(closure_8, obj5), , ,];
          const obj6 = {
            style: tmp4.animation,
            accessible: false,
            accessibilityElementsHidden: true,
            importantForAccessibility: "no-hide-descendants",
            children: tmp34Result,
          };
          if (stateFromStores) {
            class X {
              constructor() {
                importDefault(true);
              }
            }
            tmp34Result = closure_13(closure_26, {});
          } else {
            class X {
              constructor() {
                importDefault(true);
              }
            }
            class L {
              constructor() {
                return state.getState();
              }
            }
          }
          items5[1] = closure_13(closure_8, obj6);
          const obj8 = { style: tmp4.body, children: items6 };
          const obj9 = {
            variant: "heading-xl/bold",
            color: "text-overlay-light",
            style: tmp4.title,
            children: format(FIilK5, obj10),
          };
          const Heading = tmp(4886).Heading;
          let intl = tmp(1126).intl;
          format = intl.format;
          FIilK5 = tmp(1126).t.FIilK5;
          if (orbQuantityClaimed == null) {
            class X {
              constructor() {
                importDefault(true);
              }
            }
          }
          obj10 = { count: orbQuantityClaimed };
          items6 = [closure_13(Heading, obj9)];
          const obj11 = {
            variant: "text-md/normal",
            color: "text-overlay-light",
            style: tmp4.title,
            children: format3Result,
          };
          let Text = tmp(4886).Text;
          if (balance == null) {
            class X {
              constructor() {
                importDefault(true);
              }
            }
          }
          if (balance >= 4100) {
            class X {
              constructor() {
                importDefault(true);
              }
            }
            const format3 = tmp39.format;
            const obj12 = {
              balanceHook: null,
              profileDecoHook() {
                let intl;
                const obj = {
                  variant: "text-md/semibold",
                  color: "text-overlay-light",
                  children: intl.string(balance(dependencyMap[18]).t.pGDUH9),
                };
                const Text = balance(dependencyMap[36]).Text;
                intl = balance(dependencyMap[18]).intl;
                return closure_1_13(Text, obj, "profileDeco");
              },
            };
            class L {
              constructor() {
                return state.getState();
              }
            }
            format3Result = format3(tmp(1126).t["2dz2AL"], obj12);
          } else {
            class X {
              constructor() {
                importDefault(true);
              }
            }
            const format2 = tmp37.format;
            const obj13 = { balanceHook: null };
            class L {
              constructor() {
                return state.getState();
              }
            }
            format3Result = format2(tmp(1126).t.rKHvlX, obj13);
          }
          items6[1] = closure_13(Text, obj11);
          items5[2] = tmp33(closure_8, obj8);
          const obj14 = { style: tmp4.buttonsContainer, children: closure_13(Button, obj15) };
          obj15 = { onPress: tmp25, variant: "primary", size: "lg", text: intl2.string(balance(1126).t.uJAMFX) };
          Button = tmp(5594).Button;
          intl2 = tmp(1126).intl;
          items5[3] = closure_13(closure_8, obj14);
          tmp33Result = tmp33(SafeAreaPaddingView, rect);
        }
        if (cResult[15] === closure_8) {
          class X {
            constructor() {
              importDefault(true);
            }
          }
        }
        class L {
          constructor() {
            return state.getState();
          }
        }
        const obj16 = { style: tmp4.root, children: items7 };
        items7 = [tmp28, tmp31, tmp33Result];
        cResult[15] = closure_8;
        cResult[16] = tmp4.root;
        cResult[17] = tmp28;
        cResult[18] = tmp31;
        cResult[19] = tmp33Result;
        cResult[20] = closure_15(closure_8, obj16);
        const tmp41 = closure_15(closure_8, obj16);
      }
      let tmp32 = !tmp33Result;
      if (tmp32) {
        class X {
          constructor() {
            importDefault(true);
          }
        }
        const obj17 = { style: tmp4.loading, children: closure_13(closure_6, { animating: true }) };
        class L {
          constructor() {
            return state.getState();
          }
        }
        tmp32 = closure_13(closure_8, obj17);
      }
      cResult[12] = tmp33Result;
      cResult[13] = tmp4.loading;
      cResult[14] = tmp32;
    }
  : (quest) => {
      let Button;
      let FIilK5;
      let _undefined;
      let c1;
      let currentUser;
      let format;
      let formatResult;
      let intl4;
      let items3;
      let items4;
      let items5;
      let items6;
      let obj15;
      let obj20;
      let obj8;
      let state;
      let tmp12Result;
      let tmp14Result2;
      let tmp6;
      let useReducedMotion;
      quest = quest.quest;
      let num;
      c1 = undefined;
      const tmp = closure_18();
      let obj = num(504);
      const items = [AccessibilityStore];
      const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      let obj2 = num(8508);
      num = obj2.useFetchVirtualCurrencyBalance().balance;
      [tmp6, c1] = react.useState(false);
      _slicedToArray(react.useState(false), 2);
      const items1 = [AppStateStore];
      const obj4 = num(504);
      const stateFromStores1 = obj4.useStateFromStores(items1, () => state.getState());
      const ACTIVE = num(1105).AppStates.ACTIVE;
      const items2 = [UserStore];
      const userStatus = quest.userStatus;
      let num2;
      const obj5 = num(504);
      const stateFromStores2 = obj5.useStateFromStores(items2, () => currentUser.getCurrentUser());
      if (userStatus != null) {
        num2 = userStatus.orbQuantityClaimed;
      }
      if (num2 == null) {
        const tmp2Result = num(10005);
        num2 = tmp2Result.getQuestOrbRewardQuantityForUser(quest.config, stateFromStores2);
      }
      const effect = react.useEffect(() => {
        let obj = num(dependencyMap[31]);
        obj.applyOrientationLock("PORTRAIT");
        return () => {
          const obj = num(closure_1_2[31]);
          const result = obj.restoreDefaultOrientationLock();
        };
      }, []);
      const callback = react.useCallback(() => {
        _undefined(true);
      }, []);
      const obj6 = { style: tmp.root, children: items3 };
      const obj7 = {
        style: absoluteFill.absoluteFill,
        accessible: false,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: closure_13(num(10965).OrbsRewardBackground, obj8),
      };
      const callback1 = react.useCallback(() => {
        const obj = _undefined(dependencyMap[9]);
        obj.popWithKey(QuestOrbsRewardModal);
        const obj2 = num(dependencyMap[32]);
        const obj3 = {
          filter: constants.VIRTUAL_CURRENCY,
          fromContent: num(dependencyMap[33]).QuestContent.REWARD_MODAL,
        };
        obj2.openQuestHome(obj3);
      }, []);
      obj8 = { style: tmp.background, onReady: callback };
      items3 = [closure_13(closure_8, obj7), ,];
      let tmp14Result = !tmp12Result;
      if (tmp14Result) {
        const obj9 = { style: tmp.loading, children: closure_13(closure_6, { animating: true }) };
        tmp14Result = closure_13(closure_8, obj9);
      }
      items3[1] = tmp14Result;
      if (tmp12Result) {
        const rect = { style: items4, top: true, bottom: true, left: true, right: true, children: items5 };
        items4 = [tmp.main];
        const obj10 = { style: tmp.header, children: closure_13(closure_21, {}) };
        const SafeAreaPaddingView = tmp2(6619).SafeAreaPaddingView;
        items5 = [closure_13(closure_8, obj10), , ,];
        const obj11 = {
          style: tmp.animation,
          accessible: false,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          children: tmp14Result2,
        };
        if (stateFromStores) {
          tmp14Result2 = closure_13(closure_26, {});
        } else {
          const obj12 = { isAppActive: stateFromStores1 === ACTIVE };
          tmp14Result2 = closure_13(closure_27, obj12);
        }
        items5[1] = closure_13(closure_8, obj11);
        const obj13 = { style: tmp.body, children: items6 };
        const obj14 = {
          variant: "heading-xl/bold",
          color: "text-overlay-light",
          style: tmp.title,
          children: format(FIilK5, obj15),
        };
        const Heading = tmp2(4886).Heading;
        let intl = tmp2(1126).intl;
        format = intl.format;
        FIilK5 = tmp2(1126).t.FIilK5;
        if (num2 == null) {
          num2 = 0;
        }
        obj15 = { count: num2 };
        items6 = [closure_13(Heading, obj14)];
        const obj16 = {
          variant: "text-md/normal",
          color: "text-overlay-light",
          style: tmp.title,
          children: formatResult,
        };
        let Text = tmp2(4886).Text;
        if (num == null) {
          num = 0;
        }
        if (num >= 4100) {
          const intl3 = tmp2(1126).intl;
          const obj17 = {
            balanceHook() {
              const obj = { balance: num };
              return map1(closure_20, obj, "balance");
            },
            profileDecoHook() {
              let intl;
              const obj = {
                variant: "text-md/semibold",
                color: "text-overlay-light",
                children: intl.string(num(dependencyMap[18]).t.pGDUH9),
              };
              const Text = num(dependencyMap[36]).Text;
              intl = num(dependencyMap[18]).intl;
              return closure_1_13(Text, obj, "profileDeco");
            },
          };
          formatResult = intl3.format(tmp2(1126).t["2dz2AL"], obj17);
        } else {
          const intl2 = tmp2(1126).intl;
          const obj18 = {
            balanceHook() {
              const obj = { balance: num };
              return map1(closure_20, obj, "balance");
            },
          };
          formatResult = intl2.format(tmp2(1126).t.rKHvlX, obj18);
        }
        items6[1] = closure_13(Text, obj16);
        items5[2] = closure_15(closure_8, obj13);
        const obj19 = { style: tmp.buttonsContainer, children: closure_13(Button, obj20) };
        obj20 = { onPress: callback1, variant: "primary", size: "lg", text: intl4.string(num(1126).t.uJAMFX) };
        Button = tmp2(5594).Button;
        intl4 = tmp2(1126).intl;
        items5[3] = closure_13(closure_8, obj19);
        tmp12Result = closure_15(SafeAreaPaddingView, rect);
      }
      items3[2] = tmp12Result;
      return closure_15(closure_8, obj6);
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestOrbsRewardModal.native.tsx");

export default tmp6;
export const openQuestOrbsRewardModal = function openQuestOrbsRewardModal(quest) {
  let paths;
  quest = quest.quest;
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(
    _asyncToGenerator(async () => {
      let c0;
      let c1;
      await require("asyncRequire")(paths[10], paths.paths);
      return value.default;
    }),
    { quest },
    QuestOrbsRewardModal,
  );
};
