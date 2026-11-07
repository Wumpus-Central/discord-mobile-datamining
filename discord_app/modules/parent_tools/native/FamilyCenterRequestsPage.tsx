// === Module 17123: FamilyCenterRequestsPage ===

// Module 17123 (FamilyCenterRequestsPage)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef2664 from "module_2664" /* 2664 */;
import Text_Text from "Text/Text" /* 5751 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7355 */;
import useUserLinks from "useUserLinks" /* 8440 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8441 */;
import useHelpLineVisibility from "useHelpLineVisibility" /* 11438 */;
import useAgeSpecificText from "useAgeSpecificText" /* 13593 */;
import FamilyCenterParentalConsentNoticeDefault from "FamilyCenterParentalConsentNotice" /* 17084 */;
import FamilyCenterLinkingBannerDefault from "FamilyCenterLinkingBanner" /* 17124 */;
import FamilyCenterAcceptedLinksDefault from "FamilyCenterAcceptedLinks" /* 17129 */;
import FamilyCenterPendingLinksDefault from "FamilyCenterPendingLinks" /* 17137 */;
import noop from "module_19" /* 19 */;

require = fn;
function FamilyCenterMaxConnectionsBlurb() {
  const tmp = closure_10();
  const hasMaxConnections = useUserLinks.useHasMaxConnections();
  useAgeSpecificText;
  const intl = util.intl;
  intl.formatToPlainString(_modDef2664["1/PzIj"], { maxConnections: useIsInAdultAgeGroupDefault() ? hasOwnProperty : timestampProducer });
  const intl2 = util.intl;
  let tmp10 = null;
  if (hasMaxConnections) {
    const obj2 = { style: tmp.container, children: null };
    const obj3 = { variant: "footnote/medium", color: "text-muted", children: tmp9 };
    obj2.children = React5(Text_Text.Text, obj3);
    tmp10 = React5(React3, obj2);
  }
  return tmp10;
}
function FamilyCenterHelpLineInfo() {
  const tmp = closure_12();
  const shouldShowHelplineLink = useHelpLineVisibility.useShouldShowHelplineLink();
  useHelpLineVisibility;
  if (shouldShowHelplineLink) {
    const intl2 = util.intl;
    let formatResult = intl2.format(_modDef2664["KOwsf/"], { helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line" });
  } else {
    formatResult = null;
    if (tmp6) {
      const intl = util.intl;
      const obj2 = { helpLink: THROUGHLINE_URL };
      formatResult = intl.format(_modDef2664["6tsC8u"], obj2);
    }
  }
  let tmp11 = null;
  if (null != formatResult) {
    const obj3 = { style: tmp.container, children: null };
    const obj4 = { style: tmp.supportHeader, variant: "heading-xs/semibold", children: null };
    const intl3 = util.intl;
    obj4.children = intl3.string(_modDef2664["7/tVhv"]);
    items = [React5(Text_Text.Text, obj4), ];
    const obj5 = { variant: "body-xs/medium", color: "text-muted", children: formatResult };
    items[1] = React5(Text_Text.Text, obj5);
    obj3.children = items;
    tmp11 = React6(React3, obj3);
  }
  return tmp11;
}
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const FamilyCenterConstants = fn(7792);
({ MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: hasOwnProperty, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: closure_6 } = FamilyCenterConstants);
const THROUGHLINE_URL = fn(11396).THROUGHLINE_URL;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let createStyles = fn(5140);
let obj2 = { container: { display: "flex", paddingTop: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_12, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, borderTopWidth: 1 } };
let closure_10 = createStyles.createStyles(obj2);
createStyles = fn(5140);
let obj5 = { container: null, supportHeader: null };
let obj3 = { display: "flex", paddingTop: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_12, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, borderTopWidth: 1 };
obj5.container = { display: "flex", marginTop: nativeDefault.space.PX_16 };
const obj6 = { display: "flex", marginTop: nativeDefault.space.PX_16 };
obj5.supportHeader = { marginBottom: nativeDefault.space.PX_4 };
let closure_12 = createStyles.createStyles(obj5);
createStyles = fn(5140);
const obj9 = { scrollView: { flex: 1 }, container: null };
const obj7 = { marginBottom: nativeDefault.space.PX_4 };
obj9.container = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(obj9);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterRequestsPage.tsx");

export default function FamilyCenterRequestsPage() {
  const tmp = closure_14();
  const obj = { style: tmp.scrollView, children: null };
  const obj2 = { bottom: true, children: null };
  const obj3 = { style: tmp.container, children: null };
  items = [React5(FamilyCenterParentalConsentNoticeDefault, {}), React5(FamilyCenterLinkingBannerDefault, {}), React5(FamilyCenterAcceptedLinksDefault, {}), React5(FamilyCenterPendingLinksDefault, {}), React5(FamilyCenterMaxConnectionsBlurb, {}), React5(FamilyCenterHelpLineInfo, {})];
  obj3.children = items;
  obj2.children = React6(React3, obj3);
  obj.children = React5(common_SafeAreaView.SafeAreaPaddingView, obj2);
  return React5(React4, obj);
};