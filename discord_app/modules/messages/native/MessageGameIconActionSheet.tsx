// discord_app/modules/messages/native/MessageGameIconActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";

const require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
const PlatformUtils = fn(1364);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 16;
}
let obj3 = {
  contentWrapper: { paddingHorizontal: 24, paddingTop: 8, paddingBottom: num },
  gameDescriptionWrapper: { flexDirection: "column", justifyContent: "flex-start", flex: 1 },
  gameIcon: null,
  gameDescriptionWrapperOuter: null,
  timestamp: null,
};
let size = { width: 56, height: 56, marginRight: 8, borderRadius: nativeDefault.radii.sm };
obj3.gameIcon = size;
obj3.gameDescriptionWrapperOuter = { flexDirection: "row" };
obj3.timestamp = { marginBottom: 4 };
let closure_8 = createStyles.createStyles(obj3);
size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/MessageGameIconActionSheet.tsx");

export default function MessageGameIconActionSheet(applicationId) {
  applicationId = applicationId.applicationId;
  const tmp = closure_8();
  const items = [ApplicationStore];
  const stateFromStores = applicationId(504).useStateFromStores(items, () =>
    ApplicationStore.getApplication(applicationId),
  );
  let tmp5Result = null;
  if (null != stateFromStores) {
    const obj2 = { style: tmp.contentWrapper, children: null };
    const obj3 = { style: tmp.gameDescriptionWrapperOuter, children: null };
    const obj4 = { style: tmp.gameIcon, resizeMode: "contain", source: null, disableColor: true };
    let str;
    if (stateFromStores != null) {
      str = stateFromStores.getIconURL(56);
    }
    if (str == null) {
      str = "";
    }
    const obj5 = { startExpanded: true, children: null };
    const obj6 = { uri: str };
    obj4.source = obj6;
    const items1 = [closure_6(tmp2(1177).Icon, obj4)];
    const obj7 = { style: tmp.gameDescriptionWrapper, children: null };
    const obj8 = {
      style: tmp.timestamp,
      variant: "text-xs/medium",
      color: "text-muted",
      children: applicationId.messageTimestamp,
    };
    const items2 = [closure_6(tmp2(4825).Text, obj8)];
    const obj9 = { variant: "text-sm/medium", children: null };
    const intl = tmp2(1115).intl;
    const obj10 = { applicationName: stateFromStores.name };
    const items3 = [intl.format(tmp2(1115).t.J3s8JP, obj10), " "];
    const intl2 = tmp2(1115).intl;
    const obj11 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS) };
    items3[2] = intl2.format(tmp2(1115).t.BPDKoA, obj11);
    obj9.children = items3;
    items2[1] = closure_7(tmp2(4825).Text, obj9);
    obj7.children = items2;
    items1[1] = closure_7(View, obj7);
    obj3.children = items1;
    obj2.children = closure_7(View, obj3);
    obj5.children = closure_6(View, obj2);
    tmp5Result = closure_6(tmp2(7483).BottomSheet, obj5);
  }
  return tmp5Result;
}
