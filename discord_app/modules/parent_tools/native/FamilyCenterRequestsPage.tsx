import { SafeAreaPaddingView } from "../../../components_native/common/SafeAreaView.tsx";
import { messagesProxy } from "../FamilyCenter.messages.js";
import { useAgeSpecificText } from "../hooks/useAgeSpecificText.tsx";
import { set } from "../hooks/useHelpLineVisibility.tsx";
import { useIsInAdultAgeGroup } from "../hooks/useIsInAdultAgeGroup.tsx";
import { useUserIdsForLinkStatus } from "../hooks/useUserLinks.tsx";
import { FamilyCenterAcceptedLinkRow } from "FamilyCenterAcceptedLinks.tsx";
import { FamilyCenterLinkingBannerParentContent } from "FamilyCenterLinkingBanner.tsx";
import { FamilyCenterParentalConsentNotice } from "FamilyCenterParentalConsentNotice.tsx";
import { FamilyCenterPendingLinkRow } from "FamilyCenterPendingLinks.tsx";
// discord_app/modules/parent_tools/native/FamilyCenterRequestsPage.tsx
import "set";
import get_ActivityIndicator from "FamilyCenterAcceptedLinkRow";
import items from "items";
import { THROUGHLINE_URL } from "LOCATION_CONTEXT_MOBILE";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let c9;
let closure_6;
let metroImportAll;
const require = arg1;
function FamilyCenterMaxConnectionsBlurb() {
  let obj = useUserIdsForLinkStatus /* useUserIdsForLinkStatus */;
  const hasMaxConnections = obj.useHasMaxConnections();
  const tmp = createCacheKey();
  const tmp5 = importDefault;
  useAgeSpecificText /* useAgeSpecificText */;
  const intl = tmp2(1236).intl;
  intl.formatToPlainString(tmp5(2285)["1/PzIj"], { maxConnections: useIsInAdultAgeGroup() ? closure_5 : closure_6 });
  const intl2 = tmp2(1236).intl;
  let tmp10 = null;
  if (hasMaxConnections) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { variant: "text-xxs/medium", color: "text-muted", children: null };
    obj[2] = tmp9;
    obj[1] = callback(tmp2(4281).Text, obj);
    tmp10 = callback(closure_3, obj);
  }
  return tmp10;
}
function FamilyCenterHelpLineInfo() {
  const tmp = callback3();
  let obj = set /* set */;
  const shouldShowHelplineLink = obj.useShouldShowHelplineLink();
  set /* set */;
  if (shouldShowHelplineLink) {
    const intl2 = tmp2(1236).intl;
    let formatResult = intl2.format(messagesProxy["KOwsf/"], { helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line" });
  } else {
    formatResult = null;
    if (tmp6) {
      const intl = tmp2(1236).intl;
      obj = { helpLink: null };
      obj[0] = THROUGHLINE_URL;
      formatResult = intl.format(messagesProxy["6tsC8u"], obj);
    }
  }
  let tmp11 = null;
  if (null != formatResult) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    const obj1 = { style: null, variant: "heading-sm/semibold", children: null };
    obj1[0] = tmp.supportHeader;
    const intl3 = tmp2(1236).intl;
    obj1[2] = intl3.string(messagesProxy["7/tVhv"]);
    const items = [callback(tmp2(4281).Text, obj1), ];
    const obj2 = { variant: "text-xs/medium", color: "text-muted", children: null };
    obj2[2] = formatResult;
    items[1] = callback(tmp2(4281).Text, obj2);
    obj[1] = items;
    tmp11 = callback2(closure_3, obj);
  }
  return tmp11;
}
({ View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: c5, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: closure_6 } = items);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { container: null };
createCacheKey = { display: "flex", paddingTop: require("Themes").space.PX_12, marginTop: require("Themes").space.PX_12, borderTopColor: require("Themes").colors.BORDER_SUBTLE, borderTopWidth: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { container: null, supportHeader: null };
obj1[0] = { display: "flex", marginTop: require("Themes").space.PX_16 };
createCacheKey = { marginBottom: require("Themes").space.PX_4 };
obj1[1] = createCacheKey;
let closure_12 = createCacheKey.createStyles(obj1);
const obj4 = { scrollView: { flex: 1 }, container: null };
let obj2 = { display: "flex", marginTop: require("Themes").space.PX_16 };
obj4[1] = { paddingHorizontal: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_16 };
let closure_14 = createCacheKey.createStyles(obj4);
const obj5 = { paddingHorizontal: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_16 };
const result = require("items").fileFinishedImporting("modules/parent_tools/native/FamilyCenterRequestsPage.tsx");

export default function FamilyCenterRequestsPage() {
  const tmp = callback4();
  let obj = { style: tmp.scrollView, children: null };
  obj = { bottom: true, children: null };
  obj = { style: tmp.container, children: null };
  const items = [callback(FamilyCenterParentalConsentNotice, {}), callback(FamilyCenterLinkingBannerParentContent, {}), callback(FamilyCenterAcceptedLinkRow, {}), callback(FamilyCenterPendingLinkRow, {}), callback(FamilyCenterMaxConnectionsBlurb, {}), callback(FamilyCenterHelpLineInfo, {})];
  obj[1] = items;
  obj[1] = callback2(closure_3, obj);
  obj[1] = callback(SafeAreaPaddingView /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
  return callback(closure_4, obj);
};