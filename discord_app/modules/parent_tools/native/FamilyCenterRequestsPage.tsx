// discord_app/modules/parent_tools/native/FamilyCenterRequestsPage.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2397 from "../FamilyCenter.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import common_SafeAreaView from "../../../components_native/common/SafeAreaView.tsx";
import useUserLinks from "../hooks/useUserLinks.tsx";
import useIsInAdultAgeGroupDefault from "../hooks/useIsInAdultAgeGroup.tsx";
import useHelpLineVisibility from "../hooks/useHelpLineVisibility.tsx";
import useAgeSpecificText from "../hooks/useAgeSpecificText.tsx";
import FamilyCenterParentalConsentNoticeDefault from "FamilyCenterParentalConsentNotice.tsx";
import FamilyCenterLinkingBannerDefault from "FamilyCenterLinkingBanner.tsx";
import FamilyCenterAcceptedLinksDefault from "FamilyCenterAcceptedLinks.tsx";
import FamilyCenterPendingLinksDefault from "FamilyCenterPendingLinks.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function FamilyCenterMaxConnectionsBlurb() {
  const tmp = closure_10();
  const hasMaxConnections = useUserLinks.useHasMaxConnections();
  useAgeSpecificText;
  const intl = util.intl;
  intl.formatToPlainString(_modDef2397["1/PzIj"], {
    maxConnections: useIsInAdultAgeGroupDefault() ? hasOwnProperty : timestampProducer,
  });
  const intl2 = util.intl;
  let tmp10 = null;
  if (hasMaxConnections) {
    const obj2 = { style: tmp.container, children: null };
    const obj3 = { variant: "text-xxs/medium", color: "text-muted", children: tmp9 };
    obj2.children = React6(Text_Text.Text, obj3);
    tmp10 = React6(React3, obj2);
  }
  return tmp10;
}
function FamilyCenterHelpLineInfo() {
  const tmp = closure_12();
  const shouldShowHelplineLink = useHelpLineVisibility.useShouldShowHelplineLink();
  useHelpLineVisibility;
  if (shouldShowHelplineLink) {
    const intl2 = util.intl;
    let formatResult = intl2.format(_modDef2397["KOwsf/"], {
      helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line",
    });
  } else {
    formatResult = null;
    if (tmp6) {
      const intl = util.intl;
      const obj2 = { helpLink: THROUGHLINE_URL };
      formatResult = intl.format(_modDef2397["6tsC8u"], obj2);
    }
  }
  let tmp11 = null;
  if (null != formatResult) {
    const obj3 = { style: tmp.container, children: null };
    const obj4 = { style: tmp.supportHeader, variant: "heading-sm/semibold", children: null };
    const intl3 = util.intl;
    obj4.children = intl3.string(_modDef2397["7/tVhv"]);
    const items = [React6(Text_Text.Text, obj4)];
    const obj5 = { variant: "text-xs/medium", color: "text-muted", children: formatResult };
    items[1] = React6(Text_Text.Text, obj5);
    obj3.children = items;
    tmp11 = React7(React3, obj3);
  }
  return tmp11;
}
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const FamilyCenterConstants = fn(7652);
({ MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: hasOwnProperty, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: metroRequire } =
  FamilyCenterConstants);
const THROUGHLINE_URL = fn(11517).THROUGHLINE_URL;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let createStyles = fn(4640);
let obj2 = {
  container: {
    display: "flex",
    paddingTop: nativeDefault.space.PX_12,
    marginTop: nativeDefault.space.PX_12,
    borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
    borderTopWidth: 1,
  },
};
let closure_10 = createStyles.createStyles(obj2);
createStyles = fn(4640);
let obj5 = { container: null, supportHeader: null };
let obj3 = {
  display: "flex",
  paddingTop: nativeDefault.space.PX_12,
  marginTop: nativeDefault.space.PX_12,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  borderTopWidth: 1,
};
obj5.container = { display: "flex", marginTop: nativeDefault.space.PX_16 };
const obj6 = { display: "flex", marginTop: nativeDefault.space.PX_16 };
obj5.supportHeader = { marginBottom: nativeDefault.space.PX_4 };
let closure_12 = createStyles.createStyles(obj5);
createStyles = fn(4640);
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
  const items = [
    React6(FamilyCenterParentalConsentNoticeDefault, {}),
    React6(FamilyCenterLinkingBannerDefault, {}),
    React6(FamilyCenterAcceptedLinksDefault, {}),
    React6(FamilyCenterPendingLinksDefault, {}),
    React6(FamilyCenterMaxConnectionsBlurb, {}),
    React6(FamilyCenterHelpLineInfo, {}),
  ];
  obj3.children = items;
  obj2.children = React7(React3, obj3);
  obj.children = React6(common_SafeAreaView.SafeAreaPaddingView, obj2);
  return React6(React4, obj);
}
