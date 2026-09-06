// === Module 17454: ConnectGuardianModal ===

// Module 17454 (ConnectGuardianModal)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const FamilyCenterAction = fn(7538).FamilyCenterAction;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, centered: null, header: null, title: null, description: null, cardSection: null, scanPrompt: null, grow: null, footer: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.centered = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
let obj1 = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.header = { marginBottom: nativeDefault.space.PX_40 };
let obj2 = { marginBottom: nativeDefault.space.PX_40 };
createStyles.title = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
createStyles.description = { paddingHorizontal: nativeDefault.space.PX_16, textAlign: "center" };
createStyles.cardSection = { alignItems: "center" };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, textAlign: "center" };
createStyles.scanPrompt = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_24, textAlign: "center" };
createStyles.grow = { flexGrow: 1 };
let obj5 = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_24, textAlign: "center" };
createStyles.footer = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/components/ConnectGuardianModal.tsx");

export default function ConnectGuardianModal(route) {
  const onComplete = route.route.params.onComplete;
  const tmp = closure_9();
  let obj = onComplete(17455);
  const connectGuardianGate = obj.useConnectGuardianGate();
  dependencyMap = noop.useRef(false);
  const items = [connectGuardianGate.state, onComplete];
  const effect = noop.useEffect(() => {
    let current = "error" !== connectGuardianGate.state;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      ref.current = true;
      const obj = { action: FamilyCenterAction.NufConsentGateLinkCodeError, source: "NUF Connect Guardian" };
      obj.track(AnalyticEvents.FAMILY_CENTER_ACTION, obj);
      if (onComplete != null) {
        onComplete(true);
      }
    }
  }, items);
  if ("gate" !== connectGuardianGate.state) {
    obj = { style: null, children: null };
    const items1 = [, ];
    ({ container: arr2[0], centered: arr2[1] } = tmp);
    obj.style = items1;
    obj.children = closure_7(tmp4(5577).ActivityIndicator, {});
    let tmp9 = closure_7(View, obj);
  } else {
    obj = { style: tmp.container, children: null };
    const obj1 = { style: tmp.header, children: null };
    const obj2 = { style: tmp.title, variant: "heading-xl/bold", color: "text-default", children: null };
    const intl = tmp4(1114).intl;
    obj2.children = intl.string(tmp2(2396).ITlV6p);
    const items2 = [closure_7(tmp4(4556).Text, obj2), ];
    const obj3 = { style: tmp.description, variant: "text-sm/medium", color: "text-muted", children: null };
    const intl2 = tmp4(1114).intl;
    obj3.children = intl2.format(tmp2(2396).F4GT2S, { link: "https://support.discord.com/hc/articles/14155060633623" });
    items2[1] = closure_7(tmp4(4556).Text, obj3);
    obj1.children = items2;
    const items3 = [closure_8(View, obj1), , , ];
    const obj4 = { style: tmp.cardSection, children: null };
    const obj5 = { style: tmp.scanPrompt, variant: "text-md/semibold", color: "text-default", children: null };
    const intl3 = tmp4(1114).intl;
    obj5.children = intl3.string(tmp2(2396).Mi60fm);
    const items4 = [closure_7(tmp4(4556).Text, obj5), ];
    ({ linkCode: obj9.linkCode, expiresAt: obj9.expiresAt, refresh: obj9.onRefresh } = connectGuardianGate);
    items4[1] = closure_7(tmp4(14881).ConnectGuardianCard, { shareActions: "compact", linkCode: null, expiresAt: null, onRefresh: null });
    obj4.children = items4;
    items3[1] = closure_8(View, obj4);
    const obj7 = { style: tmp.grow };
    items3[2] = closure_7(View, obj7);
    const obj8 = { style: null, children: null };
    const items5 = [tmp.footer, ];
    const obj9 = { paddingBottom: connectGuardianGate(1611)().bottom + tmp2(576).space.PX_16 };
    items5[1] = obj9;
    obj8.style = items5;
    const obj10 = { variant: "primary", size: "lg", text: null, onPress: null };
    const intl4 = tmp4(1114).intl;
    obj10.text = intl4.string(tmp4(1114).t["3PatSz"]);
    obj10.onPress = function onPress() {
      let tmpResult;
      if (onComplete != null) {
        tmpResult = tmp(false);
      }
      return tmpResult;
    };
    obj8.children = closure_7(tmp4(4975).Button, obj10);
    items3[3] = closure_7(View, obj8);
    obj.children = items3;
    tmp9 = closure_8(View, obj);
    const obj6 = { shareActions: "compact", linkCode: null, expiresAt: null, onRefresh: null };
  }
  return tmp9;
};