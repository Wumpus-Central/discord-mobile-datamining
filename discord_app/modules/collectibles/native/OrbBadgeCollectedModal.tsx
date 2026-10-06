// === Module 13012: OrbBadgeCollectedModal ===

// Module 13012 (OrbBadgeCollectedModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import NavigatorHeader from "NavigatorHeader" /* 6017 */;
import _mod8541 from "module_8541" /* 8541 */;
import BalanceWidgetPill from "BalanceWidgetPill" /* 11013 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ View: closure_4, StyleSheet } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { root: { flex: 1 }, background: obj2, orbBadge: { width: 172, height: 172, alignSelf: "center" }, main: { flex: 1 }, body: obj3, bottomContainer: obj4, textContainer: obj5, text: { textAlign: "center" }, buttonsContainer: obj6 };
obj2 = {};
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { paddingTop: "50%", padding: nativeDefault.space.PX_16, flex: 1, justifyContent: "space-between", gap: nativeDefault.space.PX_32 };
obj4 = { alignSelf: "flex-end", alignItems: "stretch", gap: nativeDefault.space.PX_32, width: "100%" };
obj5 = { alignItems: "center", gap: nativeDefault.space.PX_8 };
obj6 = { alignItems: "stretch", gap: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((initialRenderedBalance) => {
  const obj = react2;
  const cResult = obj.c(3);
  const obj2 = _mod8541;
  const balance = obj2.useFetchVirtualCurrencyBalance().balance;
  if (cResult[0] === balance) {
    let tmp4;
    if (cResult[1] === initialRenderedBalance) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  const obj3 = { initialRenderedBalance, balance };
  const tmp5 = metroRequire(BalanceWidgetPill.BalanceWidgetPill, obj3);
  cResult[0] = balance;
  cResult[1] = initialRenderedBalance;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : ((initialRenderedBalance) => {
  const obj = _mod8541;
  const obj2 = { initialRenderedBalance, balance: obj.useFetchVirtualCurrencyBalance().balance };
  return metroRequire(BalanceWidgetPill.BalanceWidgetPill, obj2);
});
const constants = { ROOT: "ROOT" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((modalKey) => {
  let body;
  let bottomContainer;
  let items1;
  let main;
  let obj8;
  let text;
  let textContainer;
  let tmp11Result;
  let tmp5;
  let tmp6;
  let useReducedMotion;
  let obj = modalKey(576);
  const cResult = obj.c(47);
  modalKey = modalKey.modalKey;
  const onPressViewBadge = modalKey.onPressViewBadge;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function o() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = modalKey(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] !== onPressViewBadge) {
    const fn2 = function x() {
      onPressViewBadge();
    };
    cResult[2] = onPressViewBadge;
    cResult[3] = fn2;
  }
  if (cResult[4] !== modalKey) {
    class B {
      constructor() {
        const obj = ModalActionCreatorsDefault;
        obj.popWithKey(modalKey);
      }
    }
    cResult[4] = modalKey;
    cResult[5] = B;
  } else {
    class B {
      constructor() {
        const obj = ModalActionCreatorsDefault;
        obj.popWithKey(modalKey);
      }
    }
  }
  if (cResult[6] === stateFromStores) {
    let tmp22;
    let tmp26;
    class B {
      constructor() {
        const obj = ModalActionCreatorsDefault;
        obj.popWithKey(modalKey);
      }
    }
    const _Symbol = Symbol;
    ({ main, body } = tmp4);
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor() {
          const obj = ModalActionCreatorsDefault;
          obj.popWithKey(modalKey);
        }
      }
      tmp17[0] = onPressViewBadge(8532);
      cResult[9] = tmp17;
    } else {
      class B {
        constructor() {
          const obj = ModalActionCreatorsDefault;
          obj.popWithKey(modalKey);
        }
      }
    }
    if (cResult[10] !== tmp4.orbBadge) {
      class B {
        constructor() {
          const obj = ModalActionCreatorsDefault;
          obj.popWithKey(modalKey);
        }
      }
      const obj2 = { source: tmp17, style: tmp4.orbBadge };
      cResult[10] = tmp4.orbBadge;
      cResult[11] = closure_6(onPressViewBadge(5981), obj2);
      const tmp21 = closure_6(onPressViewBadge(5981), obj2);
    } else {
      class B {
        constructor() {
          const obj = ModalActionCreatorsDefault;
          obj.popWithKey(modalKey);
        }
      }
    }
    const _Symbol2 = Symbol;
    ({ bottomContainer, textContainer, text } = tmp4);
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor() {
          const obj = ModalActionCreatorsDefault;
          obj.popWithKey(modalKey);
        }
      }
      const stringResult = obj7.string(modalKey(1126).t.Bal8Cv);
      cResult[12] = stringResult;
      tmp22 = stringResult;
    } else {
      class B {
        constructor() {
          const obj = ModalActionCreatorsDefault;
          obj.popWithKey(modalKey);
        }
      }
    }
    if (cResult[13] !== tmp4.text) {
      class B {
        constructor() {
          const obj = ModalActionCreatorsDefault;
          obj.popWithKey(modalKey);
        }
      }
      const obj3 = { variant: "heading-xl/bold", color: "text-overlay-light", style: text, children: tmp22 };
      cResult[13] = tmp4.text;
      cResult[14] = closure_6(modalKey(4892).Text, obj3);
      const tmp25 = closure_6(modalKey(4892).Text, obj3);
    } else {
      class B {
        constructor() {
          const obj = ModalActionCreatorsDefault;
          obj.popWithKey(modalKey);
        }
      }
    }
    const _Symbol3 = Symbol;
    const text2 = tmp4.text;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor() {
          const obj = ModalActionCreatorsDefault;
          obj.popWithKey(modalKey);
        }
      }
      const stringResult1 = obj9.string(modalKey(1126).t.B25MUf);
      cResult[15] = stringResult1;
      tmp26 = stringResult1;
    } else {
      class B {
        constructor() {
          const obj = ModalActionCreatorsDefault;
          obj.popWithKey(modalKey);
        }
      }
    }
    if (cResult[16] !== tmp4.text) {
      class B {
        constructor() {
          const obj = ModalActionCreatorsDefault;
          obj.popWithKey(modalKey);
        }
      }
      const obj4 = { variant: "text-sm/medium", color: "text-overlay-light", style: text2, children: tmp26 };
      cResult[16] = tmp4.text;
      cResult[17] = closure_6(modalKey(4892).Text, obj4);
      const tmp29 = closure_6(modalKey(4892).Text, obj4);
    } else {
      class B {
        constructor() {
          const obj = ModalActionCreatorsDefault;
          obj.popWithKey(modalKey);
        }
      }
    }
    if (cResult[18] === tmp4.textContainer) {
      class B {
        constructor() {
          const obj = ModalActionCreatorsDefault;
          obj.popWithKey(modalKey);
        }
      }
    }
    const obj5 = { style: textContainer, children: items1 };
    items1 = [tmp24, tmp28];
    cResult[18] = tmp4.textContainer;
    cResult[19] = tmp24;
    cResult[20] = tmp28;
    cResult[21] = closure_7(closure_4, obj5);
    const tmp33 = closure_7(closure_4, obj5);
  }
  if (stateFromStores) {
    class B {
      constructor() {
        const obj = ModalActionCreatorsDefault;
        obj.popWithKey(modalKey);
      }
    }
    const obj6 = { source: obj8, style: tmp4.background };
    obj8 = { uri: onPressViewBadge(10979) };
    const tmp15 = onPressViewBadge(5981);
    tmp11Result = closure_6(tmp15, obj6);
  } else {
    class B {
      constructor() {
        const obj = ModalActionCreatorsDefault;
        obj.popWithKey(modalKey);
      }
    }
    const obj10 = { uri: onPressViewBadge(10980) };
    const VideoComponent = tmp(7993).VideoComponent;
    tmp12[0] = obj10;
    tmp12[1] = onPressViewBadge(10979);
    tmp12[2] = tmp4.background;
    tmp11Result = closure_6(VideoComponent, tmp12);
  }
  cResult[6] = stateFromStores;
  cResult[7] = tmp4.background;
  cResult[8] = tmp11Result;
}) : ((modalKey) => {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj4;
  let obj6;
  let obj7;
  let obj9;
  let tmp12;
  let tmp13;
  let tmp9Result;
  let useReducedMotion;
  modalKey = modalKey.modalKey;
  const onPressViewBadge = modalKey.onPressViewBadge;
  const tmp = closure_8();
  let obj = modalKey(504);
  const items = [AccessibilityStore];
  const items1 = [onPressViewBadge];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items2 = [modalKey];
  const callback = react.useCallback(() => {
    onPressViewBadge();
  }, items1);
  const obj2 = { style: tmp.root, children: items3 };
  const callback1 = react.useCallback(() => {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(modalKey);
  }, items2);
  if (stateFromStores) {
    const obj3 = { source: obj4, style: tmp.background };
    obj4 = { uri: onPressViewBadge(10979) };
    const tmp15 = onPressViewBadge(5981);
    tmp9Result = closure_6(tmp15, obj3);
    tmp12 = onPressViewBadge;
    tmp13 = closure_6;
  } else {
    const obj5 = { source: obj6, poster: onPressViewBadge(10979), style: tmp.background, resizeMode: "contain", muted: true, pauseWhileAppInactive: true, paused: false };
    obj6 = { uri: onPressViewBadge(10980) };
    const VideoComponent = tmp2(7993).VideoComponent;
    tmp9Result = closure_6(VideoComponent, obj5);
    tmp12 = onPressViewBadge;
    tmp13 = closure_6;
  }
  items3 = [tmp9Result, ];
  const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: closure_7(closure_4, obj7) };
  obj7 = { style: tmp.body, children: items4 };
  const SafeAreaPaddingView = tmp2(6626).SafeAreaPaddingView;
  const obj8 = { source: obj9, style: tmp.orbBadge };
  obj9 = { uri: tmp12(8532) };
  const tmp12Result = tmp12(5981);
  items4 = [tmp13(tmp12Result, obj8), ];
  const obj10 = { style: tmp.bottomContainer, children: items6 };
  const obj11 = { style: tmp.textContainer, children: items5 };
  const obj12 = { variant: "heading-xl/bold", color: "text-overlay-light", style: tmp.text, children: intl.string(modalKey(1126).t.Bal8Cv) };
  const Text = tmp2(4892).Text;
  intl = tmp2(1126).intl;
  items5 = [tmp13(Text, obj12), ];
  const obj13 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.text, children: intl2.string(modalKey(1126).t.B25MUf) };
  const Text2 = tmp2(4892).Text;
  intl2 = tmp2(1126).intl;
  items5[1] = tmp13(Text2, obj13);
  items6 = [closure_7(closure_4, obj11), ];
  const obj14 = { style: tmp.buttonsContainer, children: items7 };
  const obj15 = { onPress: callback, variant: "primary", size: "lg", text: intl3.string(modalKey(1126).t.uYLGci) };
  const Button = tmp2(5601).Button;
  intl3 = tmp2(1126).intl;
  items7 = [tmp13(Button, obj15), ];
  const obj16 = { onPress: callback1, variant: "secondary", size: "lg", text: intl4.string(modalKey(1126).t["6gF4aS"]) };
  const Button2 = tmp2(5601).Button;
  intl4 = tmp2(1126).intl;
  items7[1] = tmp13(Button2, obj16);
  items6[1] = closure_7(closure_4, obj14);
  items4[1] = closure_7(closure_4, obj10);
  items3[1] = tmp13(SafeAreaPaddingView, rect);
  return closure_7(closure_4, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let modalKey;
  let obj4;
  let onPressViewBadge;
  let orbBalancePriorToPurchase;
  let tmp4;
  let tmp5;
  let obj = modalKey(orbBalancePriorToPurchase[9]);
  const cResult = obj.c(8);
  ({ modalKey, onPressViewBadge, orbBalancePriorToPurchase } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const pinUserProfileBadgesOnClient = modalKey(orbBalancePriorToPurchase[22]).pinUserProfileBadgesOnClient;
      modalKey(orbBalancePriorToPurchase[22]);
      const items = [];
      const obj = modalKey(orbBalancePriorToPurchase[23]);
      items[0] = obj.createOrbProfileBadge();
      const result = pinUserProfileBadgesOnClient(items, 600);
    };
    let items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const effect = react.useEffect(tmp4, tmp5);
  if (cResult[2] === modalKey) {
    if (cResult[3] === onPressViewBadge) {
      let tmp7;
      let tmp8;
      if (cResult[4] === orbBalancePriorToPurchase) {
        tmp7 = cResult[5];
      }
      if (cResult[6] !== tmp7) {
        const obj2 = { screens: tmp7, initialRouteName: constants.ROOT };
        const tmp11 = closure_6(modalKey(orbBalancePriorToPurchase[24]).Navigator, obj2);
        cResult[6] = tmp7;
        cResult[7] = tmp11;
        tmp8 = tmp11;
      } else {
        tmp8 = cResult[7];
      }
      return tmp8;
    }
  }
  const obj3 = { [closure_10.ROOT]: obj4 };
  obj4 = {
    render() {
      const obj = { modalKey, onPressViewBadge };
      return metroRequire(closure_11, obj);
    },
    ignoreKeyboard: true,
    fullscreen: true,
    headerLeft() {
      let closure_0 = modalKey;
      let obj = NavigatorHeader;
      return metroRequire(obj.getHeaderCloseButton(() => {
        const obj = onPressViewBadge(orbBalancePriorToPurchase[7]);
        return obj.popWithKey(closure_0);
      }), { tintColor: "white" });
    },
    headerRight() {
      return closure_9(orbBalancePriorToPurchase);
    },
    title: ""
  };
  cResult[2] = modalKey;
  cResult[3] = onPressViewBadge;
  cResult[4] = orbBalancePriorToPurchase;
  cResult[5] = obj3;
  tmp7 = obj3;
}) : ((arg0) => {
  let modalKey;
  let obj2;
  let onPressViewBadge;
  let orbBalancePriorToPurchase;
  ({ modalKey, onPressViewBadge, orbBalancePriorToPurchase } = arg0);
  const effect = react.useEffect(() => {
    const pinUserProfileBadgesOnClient = modalKey(orbBalancePriorToPurchase[22]).pinUserProfileBadgesOnClient;
    modalKey(orbBalancePriorToPurchase[22]);
    const items = [];
    const obj = modalKey(orbBalancePriorToPurchase[23]);
    items[0] = obj.createOrbProfileBadge();
    const result = pinUserProfileBadgesOnClient(items, 600);
  }, []);
  let obj = { screens: { [closure_10.ROOT]: obj2 }, initialRouteName: constants.ROOT };
  obj2 = {
    render() {
      const obj = { modalKey, onPressViewBadge };
      return metroRequire(closure_11, obj);
    },
    ignoreKeyboard: true,
    fullscreen: true,
    headerLeft() {
      let closure_0 = modalKey;
      let obj = NavigatorHeader;
      return metroRequire(obj.getHeaderCloseButton(() => {
        const obj = onPressViewBadge(orbBalancePriorToPurchase[7]);
        return obj.popWithKey(closure_0);
      }), { tintColor: "white" });
    },
    headerRight() {
      return closure_9(orbBalancePriorToPurchase);
    },
    title: ""
  };
  return closure_6(modalKey(orbBalancePriorToPurchase[24]).Navigator, obj);
});
let result = size.fileFinishedImporting("modules/collectibles/native/OrbBadgeCollectedModal.tsx");

export default tmp6;