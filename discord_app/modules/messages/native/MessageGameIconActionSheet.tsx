// discord_app/modules/messages/native/MessageGameIconActionSheet.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import combinedDefault from "../../../utils/HelpdeskUtils.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import addApplication from "../../applications/ApplicationStore.tsx";
import { HelpdeskArticles } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import obj132 from "../../../utils/PlatformUtils.tsx";

const require = fn;
noopAll;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { width: 56, height: 56, marginRight: 8, borderRadius: ThemesDefault.radii.sm };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { flexDirection: "row" };
createCacheKey[4] = { marginBottom: 4 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = obj132.fileFinishedImporting("modules/messages/native/MessageGameIconActionSheet.tsx");

export default function MessageGameIconActionSheet(applicationId) {
  applicationId = applicationId.applicationId;
  const tmp = callback();
  let obj = applicationId(589);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getApplication(applicationId));
  let tmp5Result = null;
  if (null != stateFromStores) {
    obj = { style: null, children: null };
    obj[0] = tmp.contentWrapper;
    obj = { style: null, children: null };
    obj[0] = tmp.gameDescriptionWrapperOuter;
    obj1 = { style: null, resizeMode: "contain", source: null, disableColor: true };
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
    const items1 = [callback(tmp2(1297).Icon, obj1), ];
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.gameDescriptionWrapper;
    const obj5 = { style: null, variant: "text-xs/medium", color: "text-muted", children: null };
    obj5[0] = tmp.timestamp;
    obj5[3] = applicationId.messageTimestamp;
    const items2 = [callback(tmp2(4734).Text, obj5), ];
    const obj6 = { variant: "text-sm/medium", children: null };
    const intl = tmp2(1236).intl;
    const obj7 = { applicationName: null };
    obj7[0] = stateFromStores.name;
    const items3 = [intl.format(tmp2(1236).t.J3s8JP, obj7), " ", ];
    const intl2 = tmp2(1236).intl;
    const obj8 = { helpdeskArticle: null };
    obj8[0] = combinedDefault.getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS);
    items3[2] = intl2.format(tmp2(1236).t.BPDKoA, obj8);
    obj6[1] = items3;
    items2[1] = callback2(tmp2(4734).Text, obj6);
    obj4[1] = items2;
    items1[1] = callback2(View, obj4);
    obj[1] = items1;
    obj[1] = callback2(View, obj);
    obj2[1] = callback(View, obj);
    tmp5Result = callback(tmp2(6950).BottomSheet, obj2);
  }
  return tmp5Result;
};