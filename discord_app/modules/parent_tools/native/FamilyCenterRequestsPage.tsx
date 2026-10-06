// === Module 14736: FamilyCenterRequestsPage ===

// Module 14736 (FamilyCenterRequestsPage)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import _modDef2521 from "module_2521" /* 2521 */;
import Text_Text from "Text/Text" /* 4892 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6626 */;
import useUserLinks from "useUserLinks" /* 8328 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8329 */;
import Constants from "Constants" /* 9797 */;
import useHelpLineVisibility from "useHelpLineVisibility" /* 9840 */;
import useAgeSpecificText from "useAgeSpecificText" /* 11544 */;
import FamilyCenterParentalConsentNoticeDefault from "FamilyCenterParentalConsentNotice" /* 14697 */;
import FamilyCenterLinkingBannerDefault from "FamilyCenterLinkingBanner" /* 14737 */;
import FamilyCenterAcceptedLinksDefault from "FamilyCenterAcceptedLinks" /* 14739 */;
import FamilyCenterPendingLinksDefault from "FamilyCenterPendingLinks" /* 14748 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7062 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj4;
let obj5;
let obj7;
({ View: c3, ScrollView: closure_4 } = react_native);
({ MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: hasOwnProperty, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: metroRequire } = FamilyCenterConstants);
const THROUGHLINE_URL = Constants.THROUGHLINE_URL;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2 };
obj2 = { display: "flex", paddingTop: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_12, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, borderTopWidth: 1 };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp10;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(9);
  const tmp4 = closure_10();
  const obj2 = useUserLinks;
  const hasMaxConnections = obj2.useHasMaxConnections();
  const tmp7 = useIsInAdultAgeGroupDefault() ? hasOwnProperty : metroRequire;
  if (cResult[0] !== tmp7) {
    const intl = intl4.intl;
    const obj3 = { maxConnections: tmp7 };
    const formatToPlainStringResult = intl.formatToPlainString(_modDef2521["1/PzIj"], obj3);
    cResult[0] = tmp7;
    cResult[1] = formatToPlainStringResult;
    tmp8 = formatToPlainStringResult;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== tmp7) {
    const intl2 = intl4.intl;
    const obj4 = { maxConnections: tmp7 };
    const formatToPlainStringResult1 = intl2.formatToPlainString(_modDef2521.RcTgiE, obj4);
    cResult[2] = tmp7;
    cResult[3] = formatToPlainStringResult1;
    tmp10 = formatToPlainStringResult1;
  } else {
    tmp10 = cResult[3];
  }
  const tmpResult = useAgeSpecificText;
  const ageSpecificText = tmpResult.useAgeSpecificText(tmp8, tmp10);
  let tmp13 = null;
  if (hasMaxConnections) {
    let tmp14;
    if (cResult[4] !== ageSpecificText) {
      const obj5 = { variant: "text-xxs/medium", color: "text-muted", children: ageSpecificText };
      const tmp16 = metroImportAll(Text_Text.Text, obj5);
      cResult[4] = ageSpecificText;
      cResult[5] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[5];
    }
    if (cResult[6] === tmp4.container) {
      let tmp17;
      if (cResult[7] === tmp14) {
        tmp17 = cResult[8];
      }
      tmp13 = tmp17;
    }
    const obj6 = { style: tmp4.container, children: tmp14 };
    const tmp20 = metroImportAll(_false, obj6);
    cResult[6] = tmp4.container;
    cResult[7] = tmp14;
    cResult[8] = tmp20;
    tmp17 = tmp20;
  }
  return tmp13;
}) : (() => {
  let obj3;
  const tmp = closure_10();
  const obj = useUserLinks;
  const hasMaxConnections = obj.useHasMaxConnections();
  const tmp6 = useIsInAdultAgeGroupDefault() ? hasOwnProperty : metroRequire;
  useAgeSpecificText;
  const intl = intl4.intl;
  intl.formatToPlainString(_modDef2521["1/PzIj"], { maxConnections: tmp6 });
  const intl2 = intl4.intl;
  let tmp10 = null;
  if (hasMaxConnections) {
    const obj2 = { style: tmp.container, children: metroImportAll(Text_Text.Text, obj3) };
    obj3 = { variant: "text-xxs/medium", color: "text-muted", children: tmp9 };
    tmp10 = metroImportAll(_false, obj2);
  }
  return tmp10;
});
createStyles = createStyles_mod;
let obj3 = { container: obj4, supportHeader: obj5 };
obj4 = { display: "flex", marginTop: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj5 = { marginBottom: nativeDefault.space.PX_4 };
let closure_12 = createStyles(obj3);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let container;
  let formatResult;
  let items;
  let supportHeader;
  const obj = react2;
  const cResult = obj.c(12);
  const tmp4 = closure_12();
  const obj2 = useHelpLineVisibility;
  const shouldShowHelplineLink = obj2.useShouldShowHelplineLink();
  const obj3 = useHelpLineVisibility;
  const shouldShowThroughlineLink = obj3.useShouldShowThroughlineLink();
  if (cResult[0] === shouldShowHelplineLink) {
    let tmp7;
    if (cResult[1] === shouldShowThroughlineLink) {
      tmp7 = cResult[2];
    }
    if (null == tmp7) {
      return null;
    } else {
      let tmp13;
      let tmp16;
      let tmp19;
      const _Symbol = Symbol;
      ({ container, supportHeader } = tmp4);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = intl4.intl;
        const stringResult = intl3.string(_modDef2521["7/tVhv"]);
        cResult[3] = stringResult;
        tmp13 = stringResult;
      } else {
        tmp13 = cResult[3];
      }
      if (cResult[4] !== tmp4.supportHeader) {
        const obj4 = { style: supportHeader, variant: "heading-sm/semibold", children: tmp13 };
        const tmp18 = metroImportAll(Text_Text.Text, obj4);
        cResult[4] = tmp4.supportHeader;
        cResult[5] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[5];
      }
      if (cResult[6] !== tmp7) {
        const obj5 = { variant: "text-xs/medium", color: "text-muted", children: tmp7 };
        const tmp21 = metroImportAll(Text_Text.Text, obj5);
        cResult[6] = tmp7;
        cResult[7] = tmp21;
        tmp19 = tmp21;
      } else {
        tmp19 = cResult[7];
      }
      if (cResult[8] === tmp4.container) {
        if (cResult[9] === tmp16) {
          let tmp22;
          if (cResult[10] === tmp19) {
            tmp22 = cResult[11];
          }
          return tmp22;
        }
      }
      const obj6 = { style: container, children: items };
      items = [tmp16, tmp19];
      const tmp25 = React4(_false, obj6);
      cResult[8] = tmp4.container;
      cResult[9] = tmp16;
      cResult[10] = tmp19;
      cResult[11] = tmp25;
      tmp22 = tmp25;
    }
  }
  if (shouldShowHelplineLink) {
    const intl2 = intl4.intl;
    formatResult = intl2.format(_modDef2521["KOwsf/"], { helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line" });
  } else {
    formatResult = null;
    if (shouldShowThroughlineLink) {
      const intl = intl4.intl;
      const obj7 = { helpLink: THROUGHLINE_URL };
      formatResult = intl.format(_modDef2521["6tsC8u"], obj7);
    }
  }
  cResult[0] = shouldShowHelplineLink;
  cResult[1] = shouldShowThroughlineLink;
  cResult[2] = formatResult;
  tmp7 = formatResult;
}) : (() => {
  let formatResult;
  let intl3;
  let items;
  const tmp = closure_12();
  const obj = useHelpLineVisibility;
  const shouldShowHelplineLink = obj.useShouldShowHelplineLink();
  useHelpLineVisibility;
  if (shouldShowHelplineLink) {
    const intl2 = intl4.intl;
    formatResult = intl2.format(_modDef2521["KOwsf/"], { helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line" });
  } else {
    formatResult = null;
    if (tmp6) {
      const intl = intl4.intl;
      const obj2 = { helpLink: THROUGHLINE_URL };
      formatResult = intl.format(_modDef2521["6tsC8u"], obj2);
    }
  }
  let tmp11 = null;
  if (null != formatResult) {
    const obj3 = { style: tmp.container, children: items };
    const obj4 = { style: tmp.supportHeader, variant: "heading-sm/semibold", children: intl3.string(_modDef2521["7/tVhv"]) };
    const Text = Text_Text.Text;
    intl3 = intl4.intl;
    items = [metroImportAll(Text, obj4), ];
    const obj5 = { variant: "text-xs/medium", color: "text-muted", children: formatResult };
    items[1] = metroImportAll(Text_Text.Text, obj5);
    tmp11 = React4(_false, obj3);
  }
  return tmp11;
});
createStyles = createStyles_mod;
let obj6 = { scrollView: { flex: 1 }, container: obj7 };
obj7 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(obj6);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items;
  let obj3;
  let tmp10;
  let tmp21;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(11);
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp13 = metroImportAll(FamilyCenterParentalConsentNoticeDefault, {});
    const tmp14 = metroImportAll(FamilyCenterLinkingBannerDefault, {});
    const tmp15 = metroImportAll(FamilyCenterAcceptedLinksDefault, {});
    const tmp16 = metroImportAll(FamilyCenterPendingLinksDefault, {});
    const tmp18 = metroImportAll(closure_11, {});
    const tmp20 = metroImportAll(closure_13, {});
    cResult[0] = tmp13;
    cResult[1] = tmp14;
    cResult[2] = tmp15;
    cResult[3] = tmp16;
    cResult[4] = tmp18;
    cResult[5] = tmp20;
    tmp10 = tmp20;
    tmp5 = tmp13;
    tmp6 = tmp14;
    tmp7 = tmp15;
    tmp8 = tmp16;
    tmp9 = tmp18;
  } else {
    [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = cResult;
  }
  if (cResult[6] !== tmp4.container) {
    const obj2 = { bottom: true, children: React4(_false, obj3) };
    obj3 = { style: tmp4.container, children: items };
    items = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10];
    const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
    const tmp25 = metroImportAll(SafeAreaPaddingView, obj2);
    cResult[6] = tmp4.container;
    cResult[7] = tmp25;
    tmp21 = tmp25;
  } else {
    tmp21 = cResult[7];
  }
  if (cResult[8] === tmp4.scrollView) {
    let tmp26;
    if (cResult[9] === tmp21) {
      tmp26 = cResult[10];
    }
    return tmp26;
  }
  const obj4 = { style: tmp4.scrollView, children: tmp21 };
  const tmp27 = metroImportAll(React3, obj4);
  cResult[8] = tmp4.scrollView;
  cResult[9] = tmp21;
  cResult[10] = tmp27;
  tmp26 = tmp27;
}) : (() => {
  let SafeAreaPaddingView;
  let items;
  let obj2;
  let obj3;
  const tmp = closure_14();
  const obj = { style: tmp.scrollView, children: metroImportAll(SafeAreaPaddingView, obj2) };
  obj2 = { bottom: true, children: React4(_false, obj3) };
  obj3 = { style: tmp.container, children: items };
  SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  items = [metroImportAll(FamilyCenterParentalConsentNoticeDefault, {}), metroImportAll(FamilyCenterLinkingBannerDefault, {}), metroImportAll(FamilyCenterAcceptedLinksDefault, {}), metroImportAll(FamilyCenterPendingLinksDefault, {}), metroImportAll(closure_11, {}), metroImportAll(closure_13, {})];
  return metroImportAll(React3, obj);
});
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterRequestsPage.tsx");

export default tmp7;