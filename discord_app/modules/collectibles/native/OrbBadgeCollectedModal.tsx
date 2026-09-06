// discord_app/modules/collectibles/native/OrbBadgeCollectedModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import _mod8850 from "../../virtual_currency/hooks/index.tsx";
import BalanceWidgetPill from "../../virtual_currency/native/index.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
function OrbBadgeCollectedRootScreen(modalKey) {
  modalKey = modalKey.modalKey;
  const onPressViewBadge = modalKey.onPressViewBadge;
  const tmp = closure_8();
  let obj = modalKey(504);
  const items = [AccessibilityStore];
  const items1 = [onPressViewBadge];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items2 = [modalKey];
  const callback = noop.useCallback(() => {
    onPressViewBadge();
  }, items1);
  obj = { style: tmp.root, children: null };
  const callback1 = noop.useCallback(() => {
    ModalActionCreatorsDefault.popWithKey(modalKey);
  }, items2);
  if (stateFromStores) {
    obj = { source: null, style: null };
    const obj1 = { uri: onPressViewBadge(11780) };
    obj.source = obj1;
    obj.style = tmp.background;
    let tmp9Result = closure_6(onPressViewBadge(5587), obj);
    let tmp12 = onPressViewBadge;
    let tmp13 = closure_6;
    const tmp15 = onPressViewBadge(5587);
  } else {
    const obj2 = {
      source: null,
      poster: null,
      style: null,
      resizeMode: "contain",
      muted: true,
      pauseWhileAppInactive: true,
      paused: false,
    };
    const obj3 = { uri: onPressViewBadge(11781) };
    obj2.source = obj3;
    obj2.poster = onPressViewBadge(11780);
    obj2.style = tmp.background;
    tmp9Result = closure_6(tmp2(8307).VideoComponent, obj2);
    tmp12 = onPressViewBadge;
    tmp13 = closure_6;
  }
  const items3 = [tmp9Result];
  const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: null };
  const obj4 = { style: tmp.body, children: null };
  const obj5 = { source: null, style: null };
  const obj6 = { uri: tmp12(8845) };
  obj5.source = obj6;
  obj5.style = tmp.orbBadge;
  const items4 = [tmp13(tmp12(5587), obj5)];
  const obj7 = { style: tmp.bottomContainer, children: null };
  const obj8 = { style: tmp.textContainer, children: null };
  const obj9 = { variant: "heading-xl/bold", color: "text-overlay-light", style: tmp.text, children: null };
  const intl = tmp2(1114).intl;
  obj9.children = intl.string(modalKey(1114).t.Bal8Cv);
  const items5 = [tmp13(modalKey(4556).Text, obj9)];
  const obj10 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.text, children: null };
  const intl2 = tmp2(1114).intl;
  obj10.children = intl2.string(modalKey(1114).t.B25MUf);
  items5[1] = tmp13(modalKey(4556).Text, obj10);
  obj8.children = items5;
  const items6 = [closure_7(closure_4, obj8)];
  const obj11 = { style: tmp.buttonsContainer, children: null };
  const obj12 = { onPress: callback, variant: "primary", size: "lg", text: null };
  const intl3 = tmp2(1114).intl;
  obj12.text = intl3.string(modalKey(1114).t.uYLGci);
  const items7 = [tmp13(modalKey(4975).Button, obj12)];
  const obj13 = { onPress: callback1, variant: "secondary", size: "lg", text: null };
  const intl4 = tmp2(1114).intl;
  obj13.text = intl4.string(modalKey(1114).t["6gF4aS"]);
  items7[1] = tmp13(modalKey(4975).Button, obj13);
  obj11.children = items7;
  items6[1] = closure_7(closure_4, obj11);
  obj7.children = items6;
  items4[1] = closure_7(closure_4, obj7);
  obj4.children = items4;
  rect.children = closure_7(closure_4, obj4);
  items3[1] = tmp13(modalKey(7123).SafeAreaPaddingView, rect);
  obj.children = items3;
  return closure_7(closure_4, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = {
  root: { flex: 1 },
  background: null,
  orbBadge: null,
  main: null,
  body: null,
  bottomContainer: null,
  textContainer: null,
  text: null,
  buttonsContainer: null,
};
createStyles = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.background = createStyles;
createStyles.orbBadge = { width: 172, height: 172, alignSelf: "center" };
createStyles.main = { flex: 1 };
createStyles.body = {
  paddingTop: "50%",
  padding: nativeDefault.space.PX_16,
  flex: 1,
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_32,
};
let obj1 = {
  paddingTop: "50%",
  padding: nativeDefault.space.PX_16,
  flex: 1,
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_32,
};
createStyles.bottomContainer = {
  alignSelf: "flex-end",
  alignItems: "stretch",
  gap: nativeDefault.space.PX_32,
  width: "100%",
};
let obj2 = { alignSelf: "flex-end", alignItems: "stretch", gap: nativeDefault.space.PX_32, width: "100%" };
createStyles.textContainer = { alignItems: "center", gap: nativeDefault.space.PX_8 };
createStyles.text = { textAlign: "center" };
let obj3 = { alignItems: "center", gap: nativeDefault.space.PX_8 };
createStyles.buttonsContainer = { alignItems: "stretch", gap: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(createStyles);
const constants = { ROOT: "ROOT" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/OrbBadgeCollectedModal.tsx");

export default function OrbBadgeCollectedModal(arg0) {
  ({ modalKey, onPressViewBadge, orbBalancePriorToPurchase } = arg0);
  const effect = noop.useEffect(() => {
    const obj = modalKey(orbBalancePriorToPurchase[20]);
    const items = [modalKey(orbBalancePriorToPurchase[21]).createOrbProfileBadge()];
    const result = obj.pinUserProfileBadgesOnClient(items, 600);
  }, []);
  let obj = { screens: null, initialRouteName: constants.ROOT };
  obj = {
    render() {
      return timestampProducer(OrbBadgeCollectedRootScreen, { modalKey, onPressViewBadge });
    },
    ignoreKeyboard: true,
    fullscreen: true,
    headerLeft() {
      closure_0 = modalKey;
      return timestampProducer(
        NavigatorHeader.getHeaderCloseButton(() =>
          onPressViewBadge(orbBalancePriorToPurchase[7]).popWithKey(closure_0),
        ),
        { tintColor: "white" },
      );
    },
    headerRight() {
      let obj = _mod8850;
      obj = {
        initialRenderedBalance: orbBalancePriorToPurchase,
        balance: obj.useFetchVirtualCurrencyBalance().balance,
      };
      return timestampProducer(BalanceWidgetPill.BalanceWidgetPill, obj);
    },
    title: "",
  };
  obj.screens = { [closure_9.ROOT]: obj };
  return closure_6(modalKey(orbBalancePriorToPurchase[22]).Navigator, obj);
}
