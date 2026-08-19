// === Module 14269: FamilyCenterMaxConnectionsBlurb ===

// Module 14269 (FamilyCenterMaxConnectionsBlurb)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2335 */;
import Text from "Text" /* 4734 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 6803 */;
import useUserIdsForLinkStatus from "useUserIdsForLinkStatus" /* 7621 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 7622 */;
import set from "set" /* 10606 */;
import useAgeSpecificText from "useAgeSpecificText" /* 11107 */;
import FamilyCenterParentalConsentNoticeDefault from "FamilyCenterParentalConsentNotice" /* 14230 */;
import FamilyCenterLinkingBannerParentContentDefault from "FamilyCenterLinkingBannerParentContent" /* 14270 */;
import FamilyCenterAcceptedLinkRowDefault from "FamilyCenterAcceptedLinkRow" /* 14272 */;
import FamilyCenterPendingLinkRowDefault from "FamilyCenterPendingLinkRow" /* 14281 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import items from "items" /* 5297 */;
import { THROUGHLINE_URL } from "LOCATION_CONTEXT_MOBILE" /* 10569 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
function FamilyCenterMaxConnectionsBlurb() {
  let obj = useUserIdsForLinkStatus;
  const hasMaxConnections = obj.useHasMaxConnections();
  const tmp = callback3();
  useAgeSpecificText;
  const intl = getSystemLocale.intl;
  intl.formatToPlainString(messagesProxyDefault["1/PzIj"], { maxConnections: useIsInAdultAgeGroupDefault() ? closure_5 : closure_6 });
  const intl2 = getSystemLocale.intl;
  let tmp10 = null;
  if (hasMaxConnections) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { variant: "text-xxs/medium", color: "text-muted", children: null };
    obj[2] = tmp9;
    obj[1] = callback(Text.Text, obj);
    tmp10 = callback(closure_3, obj);
  }
  return tmp10;
}
function FamilyCenterHelpLineInfo() {
  const tmp = callback4();
  let obj = set;
  const shouldShowHelplineLink = obj.useShouldShowHelplineLink();
  set;
  if (shouldShowHelplineLink) {
    const intl2 = getSystemLocale.intl;
    let formatResult = intl2.format(messagesProxyDefault["KOwsf/"], { helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line" });
  } else {
    formatResult = null;
    if (tmp6) {
      const intl = getSystemLocale.intl;
      obj = { helpLink: null };
      obj[0] = THROUGHLINE_URL;
      formatResult = intl.format(messagesProxyDefault["6tsC8u"], obj);
    }
  }
  let tmp11 = null;
  if (null != formatResult) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj1 = { style: null, variant: "heading-sm/semibold", children: null };
    obj1[0] = tmp.supportHeader;
    const intl3 = getSystemLocale.intl;
    obj1[2] = intl3.string(messagesProxyDefault["7/tVhv"]);
    const items = [callback(Text.Text, obj1), ];
    const obj2 = { variant: "text-xs/medium", color: "text-muted", children: null };
    obj2[2] = formatResult;
    items[1] = callback(Text.Text, obj2);
    obj[1] = items;
    tmp11 = callback2(closure_3, obj);
  }
  return tmp11;
}
noopAll;
({ View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: c5, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: closure_6 } = items);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let createCacheKey = { display: "flex", paddingTop: ThemesDefault.space.PX_12, marginTop: ThemesDefault.space.PX_12, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE, borderTopWidth: 1 };
createCacheKey[0] = createCacheKey;
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj1 = { container: { display: "flex", marginTop: ThemesDefault.space.PX_16 }, supportHeader: null };
createCacheKey = { marginBottom: ThemesDefault.space.PX_4 };
obj1[1] = createCacheKey;
let closure_12 = createCacheKey.createStyles(obj1);
const obj4 = { scrollView: { flex: 1 }, container: null };
obj4[1] = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 };
let closure_14 = createCacheKey.createStyles(obj4);
const result = require("obj132").fileFinishedImporting("modules/parent_tools/native/FamilyCenterRequestsPage.tsx");

export default function FamilyCenterRequestsPage() {
  const tmp = callback5();
  const obj = { style: tmp.container, children: null };
  const items = [callback(FamilyCenterParentalConsentNoticeDefault, {}), callback(FamilyCenterLinkingBannerParentContentDefault, {}), callback(FamilyCenterAcceptedLinkRowDefault, {}), callback(FamilyCenterPendingLinkRowDefault, {}), callback(FamilyCenterMaxConnectionsBlurb, {}), callback(FamilyCenterHelpLineInfo, {})];
  obj[1] = items;
  obj[1] = callback2(closure_3, obj);
  obj[1] = callback(SafeAreaPaddingView.SafeAreaPaddingView, obj);
  return callback(closure_4, obj);
};