// === Module 14912: FamilyCenterRequestsPage ===

// Module 14912 (FamilyCenterRequestsPage)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef2396 from "module_2396" /* 2396 */;
import Text_Text from "Text/Text" /* 4556 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7123 */;
import useUserLinks from "useUserLinks" /* 8645 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8646 */;
import useHelpLineVisibility from "useHelpLineVisibility" /* 11393 */;
import useAgeSpecificText from "useAgeSpecificText" /* 11919 */;
import FamilyCenterParentalConsentNoticeDefault from "FamilyCenterParentalConsentNotice" /* 14873 */;
import FamilyCenterLinkingBannerDefault from "FamilyCenterLinkingBanner" /* 14913 */;
import FamilyCenterAcceptedLinksDefault from "FamilyCenterAcceptedLinks" /* 14915 */;
import FamilyCenterPendingLinksDefault from "FamilyCenterPendingLinks" /* 14924 */;
import noop from "module_19" /* 19 */;

require = fn;
function FamilyCenterMaxConnectionsBlurb() {
  let obj = useUserLinks;
  const hasMaxConnections = obj.useHasMaxConnections();
  const tmp = closure_10();
  useAgeSpecificText;
  const intl = util.intl;
  intl.formatToPlainString(_modDef2396["1/PzIj"], { maxConnections: useIsInAdultAgeGroupDefault() ? hasOwnProperty : timestampProducer });
  const intl2 = util.intl;
  let tmp10 = null;
  if (hasMaxConnections) {
    obj = { style: tmp.container, children: null };
    obj = { variant: "text-xxs/medium", color: "text-muted", children: tmp9 };
    obj.children = React6(Text_Text.Text, obj);
    tmp10 = React6(React3, obj);
  }
  return tmp10;
}
function FamilyCenterHelpLineInfo() {
  const tmp = closure_12();
  let obj = useHelpLineVisibility;
  const shouldShowHelplineLink = obj.useShouldShowHelplineLink();
  useHelpLineVisibility;
  if (shouldShowHelplineLink) {
    const intl2 = util.intl;
    let formatResult = intl2.format(_modDef2396["KOwsf/"], { helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line" });
  } else {
    formatResult = null;
    if (tmp6) {
      const intl = util.intl;
      obj = { helpLink: THROUGHLINE_URL };
      formatResult = intl.format(_modDef2396["6tsC8u"], obj);
    }
  }
  let tmp11 = null;
  if (null != formatResult) {
    obj = { style: tmp.container, children: null };
    const obj1 = { style: tmp.supportHeader, variant: "heading-sm/semibold", children: null };
    const intl3 = util.intl;
    obj1.children = intl3.string(_modDef2396["7/tVhv"]);
    const items = [React6(Text_Text.Text, obj1), ];
    const obj2 = { variant: "text-xs/medium", color: "text-muted", children: formatResult };
    items[1] = React6(Text_Text.Text, obj2);
    obj.children = items;
    tmp11 = React7(React3, obj);
  }
  return tmp11;
}
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const FamilyCenterConstants = fn(7538);
({ MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: hasOwnProperty, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: metroRequire } = FamilyCenterConstants);
const THROUGHLINE_URL = fn(11363).THROUGHLINE_URL;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { container: null };
createStyles = { display: "flex", paddingTop: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_12, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, borderTopWidth: 1 };
createStyles.container = createStyles;
let closure_10 = createStyles.createStyles(createStyles);
fn(4560);
let obj1 = { container: { display: "flex", marginTop: nativeDefault.space.PX_16 }, supportHeader: null };
createStyles = { marginBottom: nativeDefault.space.PX_4 };
obj1.supportHeader = createStyles;
let closure_12 = createStyles.createStyles(obj1);
createStyles = fn(4560);
const obj4 = { scrollView: { flex: 1 }, container: null };
let obj2 = { display: "flex", marginTop: nativeDefault.space.PX_16 };
obj4.container = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(obj4);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterRequestsPage.tsx");

export default function FamilyCenterRequestsPage() {
  const tmp = closure_14();
  let obj = { style: tmp.scrollView, children: null };
  obj = { bottom: true, children: null };
  obj = { style: tmp.container, children: null };
  const items = [React6(FamilyCenterParentalConsentNoticeDefault, {}), React6(FamilyCenterLinkingBannerDefault, {}), React6(FamilyCenterAcceptedLinksDefault, {}), React6(FamilyCenterPendingLinksDefault, {}), React6(FamilyCenterMaxConnectionsBlurb, {}), React6(FamilyCenterHelpLineInfo, {})];
  obj.children = items;
  obj.children = React7(React3, obj);
  obj.children = React6(common_SafeAreaView.SafeAreaPaddingView, obj);
  return React6(React4, obj);
};