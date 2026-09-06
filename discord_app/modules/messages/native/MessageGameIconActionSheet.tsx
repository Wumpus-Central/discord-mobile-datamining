// === Module 11818: MessageGameIconActionSheet ===

// Module 11818 (MessageGameIconActionSheet)
import nativeDefault from "native" /* 576 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;

const require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let createStyles = fn(4560);
const PlatformUtils = fn(1115);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 16;
}
createStyles = { contentWrapper: { paddingHorizontal: 24, paddingTop: 8, paddingBottom: num }, gameDescriptionWrapper: { flexDirection: "column", justifyContent: "flex-start", flex: 1 }, gameIcon: null, gameDescriptionWrapperOuter: null, timestamp: null };
let size = { width: 56, height: 56, marginRight: 8, borderRadius: nativeDefault.radii.sm };
createStyles.gameIcon = size;
createStyles.gameDescriptionWrapperOuter = { flexDirection: "row" };
createStyles.timestamp = { marginBottom: 4 };
let closure_8 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/MessageGameIconActionSheet.tsx");

export default function MessageGameIconActionSheet(applicationId) {
  applicationId = applicationId.applicationId;
  const tmp = closure_8();
  let obj = applicationId(504);
  const items = [ApplicationStore];
  const stateFromStores = obj.useStateFromStores(items, () => ApplicationStore.getApplication(applicationId));
  let tmp5Result = null;
  if (null != stateFromStores) {
    obj = { style: tmp.contentWrapper, children: null };
    obj = { style: tmp.gameDescriptionWrapperOuter, children: null };
    const obj1 = { style: tmp.gameIcon, resizeMode: "contain", source: null, disableColor: true };
    let str;
    if (stateFromStores != null) {
      str = stateFromStores.getIconURL(56);
    }
    if (str == null) {
      str = "";
    }
    const obj2 = { startExpanded: true, children: null };
    const obj3 = { uri: str };
    obj1.source = obj3;
    const items1 = [closure_6(tmp2(1178).Icon, obj1), ];
    const obj4 = { style: tmp.gameDescriptionWrapper, children: null };
    const obj5 = { style: tmp.timestamp, variant: "text-xs/medium", color: "text-muted", children: applicationId.messageTimestamp };
    const items2 = [closure_6(tmp2(4556).Text, obj5), ];
    const obj6 = { variant: "text-sm/medium", children: null };
    const intl = tmp2(1114).intl;
    const obj7 = { applicationName: stateFromStores.name };
    const items3 = [intl.format(tmp2(1114).t.J3s8JP, obj7), " ", ];
    const intl2 = tmp2(1114).intl;
    const obj8 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS) };
    items3[2] = intl2.format(tmp2(1114).t.BPDKoA, obj8);
    obj6.children = items3;
    items2[1] = closure_7(tmp2(4556).Text, obj6);
    obj4.children = items2;
    items1[1] = closure_7(View, obj4);
    obj.children = items1;
    obj.children = closure_7(View, obj);
    obj2.children = closure_6(View, obj);
    tmp5Result = closure_6(tmp2(7150).BottomSheet, obj2);
  }
  return tmp5Result;
};