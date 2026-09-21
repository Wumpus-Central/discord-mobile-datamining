// discord_app/modules/nuf/native/components/ConnectGuardianModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const FamilyCenterAction = fn(7780).FamilyCenterAction;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  centered: null,
  header: null,
  title: null,
  description: null,
  cardSection: null,
  scanPrompt: null,
  grow: null,
  footer: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.centered = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
};
let obj4 = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
obj2.header = { marginBottom: nativeDefault.space.PX_40 };
let obj5 = { marginBottom: nativeDefault.space.PX_40 };
obj2.title = {
  paddingHorizontal: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_8,
  textAlign: "center",
};
let obj6 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_8,
  textAlign: "center",
};
obj2.description = { paddingHorizontal: nativeDefault.space.PX_16, textAlign: "center" };
obj2.cardSection = { alignItems: "center" };
let obj7 = { paddingHorizontal: nativeDefault.space.PX_16, textAlign: "center" };
obj2.scanPrompt = {
  paddingHorizontal: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_24,
  textAlign: "center",
};
obj2.grow = { flexGrow: 1 };
let obj8 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_24,
  textAlign: "center",
};
obj2.footer = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/components/ConnectGuardianModal.tsx");

export default function ConnectGuardianModal(route) {
  const onComplete = route.route.params.onComplete;
  const tmp = closure_9();
  const connectGuardianGate = onComplete(17860).useConnectGuardianGate();
  dependencyMap = noop.useRef(false);
  const items = [connectGuardianGate.state, onComplete];
  const effect = noop.useEffect(() => {
    let current = "error" !== connectGuardianGate.state;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      ref.current = true;
      const obj2 = { action: FamilyCenterAction.NufConsentGateLinkCodeError, source: "NUF Connect Guardian" };
      AnalyticsUtilsDefault.track(AnalyticEvents.FAMILY_CENTER_ACTION, obj2);
      if (onComplete != null) {
        onComplete(true);
      }
    }
  }, items);
  if ("gate" !== connectGuardianGate.state) {
    let obj2 = { style: null, children: null };
    const items1 = [,];
    ({ container: arr2[0], centered: arr2[1] } = tmp);
    obj2.style = items1;
    obj2.children = closure_7(tmp4(5794).ActivityIndicator, {});
    let tmp9 = closure_7(View, obj2);
  } else {
    const obj3 = { style: tmp.container, children: null };
    const obj4 = { style: tmp.header, children: null };
    const obj5 = { style: tmp.title, variant: "heading-xl/bold", color: "text-default", children: null };
    const intl = tmp4(1115).intl;
    obj5.children = intl.string(tmp2(2482).ITlV6p);
    const items2 = [closure_7(tmp4(4752).Text, obj5)];
    const obj6 = { style: tmp.description, variant: "text-sm/medium", color: "text-muted", children: null };
    const intl2 = tmp4(1115).intl;
    obj6.children = intl2.format(tmp2(2482).F4GT2S, { link: "https://support.discord.com/hc/articles/14155060633623" });
    items2[1] = closure_7(tmp4(4752).Text, obj6);
    obj4.children = items2;
    const items3 = [closure_8(View, obj4), , ,];
    const obj7 = { style: tmp.cardSection, children: null };
    const obj8 = { style: tmp.scanPrompt, variant: "text-md/semibold", color: "text-default", children: null };
    const intl3 = tmp4(1115).intl;
    obj8.children = intl3.string(tmp2(2482).Mi60fm);
    const items4 = [closure_7(tmp4(4752).Text, obj8)];
    ({ linkCode: obj9.linkCode, expiresAt: obj9.expiresAt, refresh: obj9.onRefresh } = connectGuardianGate);
    items4[1] = closure_7(tmp4(15159).ConnectGuardianCard, {
      shareActions: "compact",
      linkCode: null,
      expiresAt: null,
      onRefresh: null,
    });
    obj7.children = items4;
    items3[1] = closure_8(View, obj7);
    const obj11 = { style: tmp.grow };
    items3[2] = closure_7(View, obj11);
    const obj12 = { style: null, children: null };
    const items5 = [tmp.footer];
    const obj13 = { paddingBottom: connectGuardianGate(1612)().bottom + tmp2(576).space.PX_16 };
    items5[1] = obj13;
    obj12.style = items5;
    const obj25 = { variant: "primary", size: "lg", text: null, onPress: null };
    const intl4 = tmp4(1115).intl;
    obj25.text = intl4.string(tmp4(1115).t["3PatSz"]);
    obj25.onPress = function onPress() {
      let tmpResult;
      if (onComplete != null) {
        tmpResult = tmp(false);
      }
      return tmpResult;
    };
    obj12.children = closure_7(tmp4(5186).Button, obj25);
    items3[3] = closure_7(View, obj12);
    obj3.children = items3;
    tmp9 = closure_8(View, obj3);
    const obj10 = { shareActions: "compact", linkCode: null, expiresAt: null, onRefresh: null };
  }
  return tmp9;
}
