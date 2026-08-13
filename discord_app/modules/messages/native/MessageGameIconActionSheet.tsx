// discord_app/modules/messages/native/MessageGameIconActionSheet.tsx
import "noop";
import { View } from "get ActivityIndicator";
import addApplication from "addApplication";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import set from "set";
import set from "addApplication";
import { combined } from "../../../utils/HelpdeskUtils.tsx";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
let num = 0;
if (set.isAndroid()) {
  num = 16;
}
createCacheKey = { contentWrapper: { paddingHorizontal: 24, paddingTop: 8, paddingBottom: num }, gameDescriptionWrapper: { flexDirection: "column", justifyContent: "flex-start", flex: 1 }, gameIcon: null, gameDescriptionWrapperOuter: null, timestamp: null };
createCacheKey = { width: 56, height: 56, marginRight: 8, borderRadius: require("Themes").radii.sm };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { flexDirection: "row" };
createCacheKey[4] = { marginBottom: 4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = set.fileFinishedImporting("modules/messages/native/MessageGameIconActionSheet.tsx");

export default function MessageGameIconActionSheet(applicationId) {
  applicationId = applicationId.applicationId;
  const tmp = createCacheKey();
  let obj = applicationId(589);
  const items = [addApplication];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getApplication(applicationId));
  let tmp5Result = null;
  if (null != stateFromStores) {
    obj = { style: null, children: null };
    obj[0] = tmp.contentWrapper;
    obj = { style: null, children: null };
    obj[0] = tmp.gameDescriptionWrapperOuter;
    const obj1 = { style: null, resizeMode: "contain", source: null, disableColor: true };
    obj1[0] = tmp.gameIcon;
    let str;
    if (stateFromStores != null) {
      str = stateFromStores.getIconURL(56);
    }
    if (str == null) {
      str = "";
    }
    const obj2 = { startExpanded: true, children: null };
    const obj3 = { uri: null };
    obj3[0] = str;
    obj1[2] = obj3;
    const items1 = [closure_6(tmp2(1297).Icon, obj1), ];
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.gameDescriptionWrapper;
    const obj5 = { style: null, variant: "text-xs/medium", color: "text-muted", children: null };
    obj5[0] = tmp.timestamp;
    obj5[3] = applicationId.messageTimestamp;
    const items2 = [closure_6(tmp2(4338).Text, obj5), ];
    const obj6 = { variant: "text-sm/medium", children: null };
    const intl = tmp2(1236).intl;
    const obj7 = { applicationName: null };
    obj7[0] = stateFromStores.name;
    const items3 = [intl.format(tmp2(1236).t.J3s8JP, obj7), " ", ];
    const intl2 = tmp2(1236).intl;
    const obj8 = { helpdeskArticle: null };
    obj8[0] = combined.getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS);
    items3[2] = intl2.format(tmp2(1236).t.BPDKoA, obj8);
    obj6[1] = items3;
    items2[1] = closure_7(tmp2(4338).Text, obj6);
    obj4[1] = items2;
    items1[1] = closure_7(View, obj4);
    obj[1] = items1;
    obj[1] = closure_7(View, obj);
    obj2[1] = closure_6(View, obj);
    tmp5Result = tmp5(tmp2(5437).BottomSheet, obj2);
    const obj13 = combined;
  }
  return tmp5Result;
};