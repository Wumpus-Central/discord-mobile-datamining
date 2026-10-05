// === Module 12993: OrbBadgeCollectedModal ===

// Module 12993 (OrbBadgeCollectedModal)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import _mod8508 from "module_8508" /* 8508 */;
import BalanceWidgetPill from "BalanceWidgetPill" /* 11000 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { root: { flex: 1 }, background: null, orbBadge: null, main: null, body: null, bottomContainer: null, textContainer: null, text: null, buttonsContainer: null };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.background = {};
obj2.orbBadge = { width: 172, height: 172, alignSelf: "center" };
obj2.main = { flex: 1 };
obj2.body = { paddingTop: "50%", padding: nativeDefault.space.PX_16, flex: 1, justifyContent: "space-between", gap: nativeDefault.space.PX_32 };
let obj3 = {};
let obj4 = { paddingTop: "50%", padding: nativeDefault.space.PX_16, flex: 1, justifyContent: "space-between", gap: nativeDefault.space.PX_32 };
obj2.bottomContainer = { alignSelf: "flex-end", alignItems: "stretch", gap: nativeDefault.space.PX_32, width: "100%" };
let obj5 = { alignSelf: "flex-end", alignItems: "stretch", gap: nativeDefault.space.PX_32, width: "100%" };
obj2.textContainer = { alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.text = { textAlign: "center" };
let obj6 = { alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.buttonsContainer = { alignItems: "stretch", gap: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((initialRenderedBalance) => {
  const cResult = c.c(3);
  const balance = _mod8508.useFetchVirtualCurrencyBalance().balance;
  if (cResult[0] === balance) {
    if (cResult[1] === initialRenderedBalance) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const tmp5 = timestampProducer(BalanceWidgetPill.BalanceWidgetPill, { initialRenderedBalance, balance });
  cResult[0] = balance;
  cResult[1] = initialRenderedBalance;
  cResult[2] = tmp5;
  tmp4 = tmp5;
  const obj3 = { initialRenderedBalance, balance };
}) : ((initialRenderedBalance) => timestampProducer(BalanceWidgetPill.BalanceWidgetPill, { initialRenderedBalance, balance: _mod8508.useFetchVirtualCurrencyBalance().balance }));
const constants = { ROOT: "ROOT" };
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((modalKey) => {
  const cResult = modalKey(576).c(47);
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
  const obj = modalKey(576);
  let background = modalKey(504).useStateFromStores(tmp5, tmp6);
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
        obj = closure_1(closure_2[7]);
        popWithKeyResult = obj.popWithKey(modalKey);
        return;
      }
    }
    cResult[4] = modalKey;
    cResult[5] = B;
  } else {
    class B {
      constructor() {
        obj = closure_1(closure_2[7]);
        popWithKeyResult = obj.popWithKey(modalKey);
        return;
      }
    }
  }
  if (cResult[6] === background) {
    class B {
      constructor() {
        obj = closure_1(closure_2[7]);
        popWithKeyResult = obj.popWithKey(modalKey);
        return;
      }
    }
  }
  if (background) {
    class B {
      constructor() {
        obj = closure_1(closure_2[7]);
        popWithKeyResult = obj.popWithKey(modalKey);
        return;
      }
    }
    const obj2 = { source: null, style: null };
    const obj3 = { uri: onPressViewBadge(10966) };
    obj2.source = obj3;
    obj2.style = tmp4.background;
    let tmp10Result = closure_6(onPressViewBadge(5974), obj2);
    const tmp14 = onPressViewBadge(5974);
  } else {
    class B {
      constructor() {
        obj = closure_1(closure_2[7]);
        popWithKeyResult = obj.popWithKey(modalKey);
        return;
      }
    }
    const obj4 = { uri: onPressViewBadge(10967) };
    tmp11[0] = obj4;
    tmp11[1] = onPressViewBadge(10966);
    tmp11[2] = tmp4.background;
    tmp10Result = closure_6(tmp(7983).VideoComponent, tmp11);
  }
  cResult[6] = background;
  background = tmp4.background;
  cResult[7] = background;
  cResult[8] = tmp10Result;
  const tmpResult = modalKey(504);
}) : ((modalKey) => {
  modalKey = modalKey.modalKey;
  const onPressViewBadge = modalKey.onPressViewBadge;
  const tmp = closure_8();
  const items = [AccessibilityStore];
  const items1 = [onPressViewBadge];
  const stateFromStores = modalKey(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items2 = [modalKey];
  const callback = noop.useCallback(() => {
    onPressViewBadge();
  }, items1);
  const obj2 = { style: tmp.root, children: null };
  const callback1 = noop.useCallback(() => {
    ModalActionCreatorsDefault.popWithKey(modalKey);
  }, items2);
  if (stateFromStores) {
    const obj3 = { source: null, style: null };
    const obj4 = { uri: onPressViewBadge(10966) };
    obj3.source = obj4;
    obj3.style = tmp.background;
    let tmp9Result = closure_6(onPressViewBadge(5974), obj3);
    let tmp12 = onPressViewBadge;
    let tmp13 = closure_6;
    const tmp15 = onPressViewBadge(5974);
  } else {
    const obj5 = { source: null, poster: null, style: null, resizeMode: "contain", muted: true, pauseWhileAppInactive: true, paused: false };
    const obj6 = { uri: onPressViewBadge(10967) };
    obj5.source = obj6;
    obj5.poster = onPressViewBadge(10966);
    obj5.style = tmp.background;
    tmp9Result = closure_6(tmp2(7983).VideoComponent, obj5);
    tmp12 = onPressViewBadge;
    tmp13 = closure_6;
  }
  const items3 = [tmp9Result, ];
  const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: null };
  const obj7 = { style: tmp.body, children: null };
  const obj8 = { source: null, style: null };
  const obj9 = { uri: null };
  const obj = modalKey(504);
  obj9.uri = tmp12(8499);
  obj8.source = obj9;
  obj8.style = tmp.orbBadge;
  const items4 = [tmp13(tmp12(5974), obj8), ];
  const obj10 = { style: tmp.bottomContainer, children: null };
  const obj11 = { style: tmp.textContainer, children: null };
  const obj12 = { variant: "heading-xl/bold", color: "text-overlay-light", style: tmp.text, children: null };
  const intl = tmp2(1126).intl;
  obj12.children = intl.string(modalKey(1126).t.Bal8Cv);
  const items5 = [tmp13(modalKey(4886).Text, obj12), ];
  const obj13 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.text, children: null };
  const intl2 = tmp2(1126).intl;
  obj13.children = intl2.string(modalKey(1126).t.B25MUf);
  items5[1] = tmp13(modalKey(4886).Text, obj13);
  obj11.children = items5;
  const items6 = [closure_7(closure_4, obj11), ];
  const obj14 = { style: tmp.buttonsContainer, children: null };
  const obj15 = { onPress: callback, variant: "primary", size: "lg", text: null };
  const intl3 = tmp2(1126).intl;
  obj15.text = intl3.string(modalKey(1126).t.uYLGci);
  const items7 = [tmp13(modalKey(5594).Button, obj15), ];
  const obj16 = { onPress: callback1, variant: "secondary", size: "lg", text: null };
  const intl4 = tmp2(1126).intl;
  obj16.text = intl4.string(modalKey(1126).t["6gF4aS"]);
  items7[1] = tmp13(modalKey(5594).Button, obj16);
  obj14.children = items7;
  items6[1] = closure_7(closure_4, obj14);
  obj10.children = items6;
  items4[1] = closure_7(closure_4, obj10);
  obj7.children = items4;
  rect.children = closure_7(closure_4, obj7);
  items3[1] = tmp13(modalKey(6619).SafeAreaPaddingView, rect);
  obj2.children = items3;
  return closure_7(closure_4, obj2);
});
ReactCompilerGating = fn(558);
let obj7 = { alignItems: "stretch", gap: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/OrbBadgeCollectedModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = modalKey(orbBalancePriorToPurchase[9]).c(8);
  ({ modalKey, onPressViewBadge, orbBalancePriorToPurchase } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const obj = modalKey(orbBalancePriorToPurchase[22]);
      const items = [modalKey(orbBalancePriorToPurchase[23]).createOrbProfileBadge()];
      const result = obj.pinUserProfileBadgesOnClient(items, 600);
    };
    let items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const effect = noop.useEffect(tmp4, tmp5);
  if (cResult[2] === modalKey) {
    if (cResult[3] === onPressViewBadge) {
      if (cResult[4] === orbBalancePriorToPurchase) {
        let tmp7 = cResult[5];
      }
      if (cResult[6] !== tmp7) {
        const obj2 = { screens: tmp7, initialRouteName: constants.ROOT };
        const tmp11 = closure_6(modalKey(orbBalancePriorToPurchase[24]).Navigator, obj2);
        cResult[6] = tmp7;
        cResult[7] = tmp11;
        let tmp8 = tmp11;
      } else {
        tmp8 = cResult[7];
      }
      return tmp8;
    }
  }
  const obj3 = { [closure_10.ROOT]: obj4 };
  cResult[2] = modalKey;
  cResult[3] = onPressViewBadge;
  cResult[4] = orbBalancePriorToPurchase;
  cResult[5] = obj3;
  tmp7 = obj3;
  let obj = modalKey(orbBalancePriorToPurchase[9]);
  obj4 = {
    render() {
      return timestampProducer(closure_11, { modalKey, onPressViewBadge });
    },
    ignoreKeyboard: true,
    fullscreen: true,
    headerLeft() {
      closure_0 = modalKey;
      return timestampProducer(NavigatorHeader.getHeaderCloseButton(() => onPressViewBadge(orbBalancePriorToPurchase[7]).popWithKey(closure_0)), { tintColor: "white" });
    },
    headerRight() {
      return closure_9(orbBalancePriorToPurchase);
    },
    title: ""
  };
}) : ((arg0) => {
  ({ modalKey, onPressViewBadge, orbBalancePriorToPurchase } = arg0);
  const effect = noop.useEffect(() => {
    const obj = modalKey(orbBalancePriorToPurchase[22]);
    const items = [modalKey(orbBalancePriorToPurchase[23]).createOrbProfileBadge()];
    const result = obj.pinUserProfileBadgesOnClient(items, 600);
  }, []);
  let obj = {
    screens: {
      [closure_10.ROOT]: {
        render() {
          return timestampProducer(closure_11, { modalKey, onPressViewBadge });
        },
        ignoreKeyboard: true,
        fullscreen: true,
        headerLeft() {
          closure_0 = modalKey;
          return timestampProducer(NavigatorHeader.getHeaderCloseButton(() => onPressViewBadge(orbBalancePriorToPurchase[7]).popWithKey(closure_0)), { tintColor: "white" });
        },
        headerRight() {
          return closure_9(orbBalancePriorToPurchase);
        },
        title: ""
      }
    },
    initialRouteName: constants.ROOT
  };
  return closure_6(modalKey(orbBalancePriorToPurchase[24]).Navigator, obj);
});