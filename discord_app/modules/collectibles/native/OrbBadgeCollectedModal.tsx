// discord_app/modules/collectibles/native/OrbBadgeCollectedModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import _mod9209 from "../../virtual_currency/hooks/index.tsx";
import BalanceWidgetPill from "../../virtual_currency/native/index.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
function OrbBadgeCollectedRootScreen(modalKey) {
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
    const obj4 = { uri: onPressViewBadge(12126) };
    obj3.source = obj4;
    obj3.style = tmp.background;
    let tmp9Result = closure_6(onPressViewBadge(5892), obj3);
    let tmp12 = onPressViewBadge;
    let tmp13 = closure_6;
    const tmp15 = onPressViewBadge(5892);
  } else {
    const obj5 = {
      source: null,
      poster: null,
      style: null,
      resizeMode: "contain",
      muted: true,
      pauseWhileAppInactive: true,
      paused: false,
    };
    const obj6 = { uri: onPressViewBadge(12127) };
    obj5.source = obj6;
    obj5.poster = onPressViewBadge(12126);
    obj5.style = tmp.background;
    tmp9Result = closure_6(tmp2(8657).VideoComponent, obj5);
    tmp12 = onPressViewBadge;
    tmp13 = closure_6;
  }
  const items3 = [tmp9Result];
  const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: null };
  const obj7 = { style: tmp.body, children: null };
  const obj8 = { source: null, style: null };
  const obj9 = { uri: null };
  const obj = modalKey(504);
  obj9.uri = tmp12(9204);
  obj8.source = obj9;
  obj8.style = tmp.orbBadge;
  const items4 = [tmp13(tmp12(5892), obj8)];
  const obj10 = { style: tmp.bottomContainer, children: null };
  const obj11 = { style: tmp.textContainer, children: null };
  const obj12 = { variant: "heading-xl/bold", color: "text-overlay-light", style: tmp.text, children: null };
  const intl = tmp2(1115).intl;
  obj12.children = intl.string(modalKey(1115).t.Bal8Cv);
  const items5 = [tmp13(modalKey(4825).Text, obj12)];
  const obj13 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.text, children: null };
  const intl2 = tmp2(1115).intl;
  obj13.children = intl2.string(modalKey(1115).t.B25MUf);
  items5[1] = tmp13(modalKey(4825).Text, obj13);
  obj11.children = items5;
  const items6 = [closure_7(closure_4, obj11)];
  const obj14 = { style: tmp.buttonsContainer, children: null };
  const obj15 = { onPress: callback, variant: "primary", size: "lg", text: null };
  const intl3 = tmp2(1115).intl;
  obj15.text = intl3.string(modalKey(1115).t.uYLGci);
  const items7 = [tmp13(modalKey(5273).Button, obj15)];
  const obj16 = { onPress: callback1, variant: "secondary", size: "lg", text: null };
  const intl4 = tmp2(1115).intl;
  obj16.text = intl4.string(modalKey(1115).t["6gF4aS"]);
  items7[1] = tmp13(modalKey(5273).Button, obj16);
  obj14.children = items7;
  items6[1] = closure_7(closure_4, obj14);
  obj10.children = items6;
  items4[1] = closure_7(closure_4, obj10);
  obj7.children = items4;
  rect.children = closure_7(closure_4, obj7);
  items3[1] = tmp13(modalKey(7456).SafeAreaPaddingView, rect);
  obj2.children = items3;
  return closure_7(closure_4, obj2);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
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
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.background = {};
obj2.orbBadge = { width: 172, height: 172, alignSelf: "center" };
obj2.main = { flex: 1 };
obj2.body = {
  paddingTop: "50%",
  padding: nativeDefault.space.PX_16,
  flex: 1,
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_32,
};
let obj3 = {};
let obj4 = {
  paddingTop: "50%",
  padding: nativeDefault.space.PX_16,
  flex: 1,
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_32,
};
obj2.bottomContainer = { alignSelf: "flex-end", alignItems: "stretch", gap: nativeDefault.space.PX_32, width: "100%" };
let obj5 = { alignSelf: "flex-end", alignItems: "stretch", gap: nativeDefault.space.PX_32, width: "100%" };
obj2.textContainer = { alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.text = { textAlign: "center" };
let obj6 = { alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.buttonsContainer = { alignItems: "stretch", gap: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj2);
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
  let obj = {
    screens: {
      [closure_9.ROOT]: {
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
          return timestampProducer(BalanceWidgetPill.BalanceWidgetPill, {
            initialRenderedBalance: orbBalancePriorToPurchase,
            balance: _mod9209.useFetchVirtualCurrencyBalance().balance,
          });
        },
        title: "",
      },
    },
    initialRouteName: constants.ROOT,
  };
  return closure_6(modalKey(orbBalancePriorToPurchase[22]).Navigator, obj);
}
