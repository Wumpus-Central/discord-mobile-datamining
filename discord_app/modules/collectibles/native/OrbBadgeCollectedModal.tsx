// discord_app/modules/collectibles/native/OrbBadgeCollectedModal.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../a11y/AccessibilityStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function OrbBadgeCollectedRootScreen(modalKey) {
  modalKey = modalKey.modalKey;
  const onPressViewBadge = modalKey.onPressViewBadge;
  const tmp = callback2();
  let obj = modalKey(589);
  const items = [closure_5];
  const items1 = [onPressViewBadge];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items2 = [modalKey];
  const callback = React.useCallback(() => {
    onPressViewBadge();
  }, items1);
  obj = { style: tmp.root, children: null };
  const callback1 = React.useCallback(() => {
    onPressViewBadge(closure_1_2[7]).popWithKey(modalKey);
  }, items2);
  if (stateFromStores) {
    obj = { source: null, style: null };
    obj1 = { uri: null };
    obj1[0] = onPressViewBadge(10959);
    obj[0] = obj1;
    obj[1] = tmp.background;
    let tmp9Result = tmp9(onPressViewBadge(5449), obj);
    let tmp12 = onPressViewBadge;
    let tmp13 = tmp9;
    const tmp15 = onPressViewBadge(5449);
  } else {
    const obj2 = { source: null, poster: null, style: null, resizeMode: "contain", muted: true, pauseWhileAppInactive: true, paused: false };
    const obj3 = { uri: null };
    obj3[0] = onPressViewBadge(10960);
    obj2[0] = obj3;
    obj2[1] = onPressViewBadge(10959);
    obj2[2] = tmp.background;
    tmp9Result = tmp9(tmp2(9018).VideoComponent, obj2);
    tmp12 = onPressViewBadge;
    tmp13 = tmp9;
  }
  const items3 = [tmp9Result, ];
  const obj4 = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: null };
  const obj5 = { style: tmp.body, children: null };
  const obj6 = { source: null, style: null };
  const obj7 = { uri: tmp12(9246) };
  obj6[0] = obj7;
  obj6[1] = tmp.orbBadge;
  const items4 = [tmp13(tmp12(5449), obj6), ];
  const obj8 = { style: tmp.bottomContainer, children: null };
  const obj9 = { style: tmp.textContainer, children: null };
  const obj10 = { variant: "heading-xl/bold", color: "text-overlay-light", style: tmp.text, children: null };
  const intl = tmp2(1236).intl;
  obj10[3] = intl.string(modalKey(1236).t.Bal8Cv);
  const items5 = [tmp13(modalKey(4734).Text, obj10), ];
  const obj11 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.text, children: null };
  const intl2 = tmp2(1236).intl;
  obj11[3] = intl2.string(modalKey(1236).t.B25MUf);
  items5[1] = tmp13(modalKey(4734).Text, obj11);
  obj9[1] = items5;
  const items6 = [closure_7(closure_4, obj9), ];
  const obj12 = { style: tmp.buttonsContainer, children: null };
  const obj13 = { onPress: callback, variant: "primary", size: "lg", text: null };
  const intl3 = tmp2(1236).intl;
  obj13[3] = intl3.string(modalKey(1236).t.uYLGci);
  const items7 = [tmp13(modalKey(4745).Button, obj13), ];
  const obj14 = { onPress: callback1, variant: "secondary", size: "lg", text: null };
  const intl4 = tmp2(1236).intl;
  obj14[3] = intl4.string(modalKey(1236).t["6gF4aS"]);
  items7[1] = tmp13(modalKey(4745).Button, obj14);
  obj12[1] = items7;
  items6[1] = closure_7(closure_4, obj12);
  obj8[1] = items6;
  items4[1] = closure_7(closure_4, obj8);
  obj5[1] = items4;
  obj4[5] = closure_7(closure_4, obj5);
  items3[1] = tmp13(modalKey(6803).SafeAreaPaddingView, obj4);
  obj[1] = items3;
  return closure_7(closure_4, obj);
}
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { root: { flex: 1 }, background: null, orbBadge: null, main: null, body: null, bottomContainer: null, textContainer: null, text: null, buttonsContainer: null };
createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: 172, height: 172, alignSelf: "center" };
createCacheKey[3] = { flex: 1 };
createCacheKey[4] = { paddingTop: "50%", padding: ThemesDefault.space.PX_16, flex: 1, justifyContent: "space-between", gap: ThemesDefault.space.PX_32 };
let obj1 = { paddingTop: "50%", padding: ThemesDefault.space.PX_16, flex: 1, justifyContent: "space-between", gap: ThemesDefault.space.PX_32 };
createCacheKey[5] = { alignSelf: "flex-end", alignItems: "stretch", gap: ThemesDefault.space.PX_32, width: "100%" };
let obj2 = { alignSelf: "flex-end", alignItems: "stretch", gap: ThemesDefault.space.PX_32, width: "100%" };
createCacheKey[6] = { alignItems: "center", gap: ThemesDefault.space.PX_8 };
createCacheKey[7] = { textAlign: "center" };
let obj3 = { alignItems: "center", gap: ThemesDefault.space.PX_8 };
createCacheKey[8] = { alignItems: "stretch", gap: ThemesDefault.space.PX_16 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let closure_9 = { ROOT: "ROOT" };
let obj4 = { alignItems: "stretch", gap: ThemesDefault.space.PX_16 };
let result = require("set").fileFinishedImporting("modules/collectibles/native/OrbBadgeCollectedModal.tsx");

export default function OrbBadgeCollectedModal(arg0) {
  ({ modalKey, onPressViewBadge, orbBalancePriorToPurchase } = arg0);
  const effect = React.useEffect(() => {
    const obj = modalKey(orbBalancePriorToPurchase[20]);
    const items = [modalKey(orbBalancePriorToPurchase[21]).createOrbProfileBadge()];
    const result = obj.pinUserProfileBadgesOnClient(items, 600);
  }, []);
  obj = { screens: { [closure_9.ROOT]: obj }, initialRouteName: constants.ROOT };
  obj = {
    render() {
      return closure_1_6(closure_1_10, { modalKey, onPressViewBadge });
    },
    ignoreKeyboard: true,
    fullscreen: true,
    headerLeft() {
      return closure_1_6(modalKey(orbBalancePriorToPurchase[6]).getHeaderCloseButton(() => closure_1_1(closure_1_2[7]).popWithKey(closure_0)), { tintColor: "white" });
    },
    headerRight() {
      let obj = modalKey(orbBalancePriorToPurchase[8]);
      obj = { initialRenderedBalance: orbBalancePriorToPurchase, balance: obj.useFetchVirtualCurrencyBalance().balance };
      return closure_1_6(modalKey(orbBalancePriorToPurchase[9]).BalanceWidgetPill, obj);
    },
    title: ""
  };
  return callback(modalKey(orbBalancePriorToPurchase[22]).Navigator, obj);
};