// === Module 11886: AppealIngestionModal ===

// Module 11886 (AppealIngestionModal)
import nativeDefault from "native" /* 576 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import Text_Text from "Text/Text" /* 4556 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import AppealIngestionModalActionCreatorsDefault from "AppealIngestionModalActionCreators" /* 11885 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8430 */;

require = fn;
const View = fn(17).View;
const SafetyHubConstants = fn(8419);
({ APPEAL_INGESTION_IMPRESSION_PROPERTIES: closure_9, AppealIngestionSections: c10 } = SafetyHubConstants);
const EMPTY_STRING_SNOWFLAKE_ID = fn(1074).EMPTY_STRING_SNOWFLAKE_ID;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
fn(4560);
let createStyles = { container: null, headerContainer: null, header: null, subheader: null, separator: null, footerContainer: null, footerText: null, footerButton: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.headerContainer = { alignSelf: "stretch", marginTop: 16, marginBottom: 8, paddingHorizontal: 16 };
createStyles.header = { marginBottom: 8, textAlign: "center" };
createStyles.subheader = { lineHeight: 20, marginBottom: 8, textAlign: "center" };
createStyles.separator = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 24 };
createStyles.footerContainer = { marginBottom: 16 };
createStyles.footerText = { marginBottom: 16, textAlign: "center" };
createStyles.footerButton = { paddingHorizontal: 16 };
let closure_15 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionModal.tsx");

export default function AppealIngestionModal(classificationId) {
  _require = undefined;
  let flag2;
  let flag3;
  let obj = require("useSafetyHubClassifications");
  const safetyHubClassification = obj.useSafetyHubClassification(classificationId.classificationId);
  ({ isDsaEligible: c0, classification } = safetyHubClassification);
  let flag;
  if (classification != null) {
    flag = classification.is_spam;
  }
  if (!flag) {
    flag = false;
  }
  const classification2 = safetyHubClassification.classification;
  flag2 = undefined;
  if (classification2 != null) {
    flag2 = classification2.is_coppa;
  }
  if (!flag2) {
    flag2 = false;
  }
  const classification3 = safetyHubClassification.classification;
  flag3 = undefined;
  if (classification3 != null) {
    flag3 = classification3.is_developer_classification;
  }
  if (!flag3) {
    flag3 = false;
  }
  obj = {
    initialRouteName: constants.SPEED_BUMP,
    screens: flag(flag3[29])(() => {
      const isDsaEligible = c0;
      const isSpam = flag;
      const isCoppa = flag2;
      const isDeveloperClassification = flag3;
      let obj = {};
      obj = { headerLeft: null, headerTitle: null, render: null, impressionName: null, impressionProperties: null };
      let obj2 = NavigatorHeader;
      obj.headerLeft = obj2.getHeaderCloseButton(AppealIngestionModalActionCreatorsDefault.close);
      obj.headerTitle = function headerTitle() {
        return closure_1_12(isDsaEligible(isDeveloperClassification[10]).Text, { variant: "text-md/normal", children: "accessible" });
      };
      obj.render = function render() {
        return closure_2_12(flag(flag3[22]), { isDsaEligible, isSpam, isCoppa, isDeveloperClassification });
      };
      obj.impressionName = discord_common_AnalyticsUtils.ImpressionNames.APPEAL_INGESTION_SPEED_BUMP;
      obj.impressionProperties = impressionProperties;
      obj[constants.SPEED_BUMP] = obj;
      obj = { headerLeft: null, headerTitle: null, render: null, impressionName: null, impressionProperties: null };
      let obj4 = NavigatorHeader;
      obj.headerLeft = obj4.getHeaderBackButton();
      obj.headerTitle = function headerTitle() {
        return closure_1_12(isDsaEligible(isDeveloperClassification[10]).Text, { variant: "text-md/normal", children: "accessible" });
      };
      obj.render = function render() {
        return closure_2_12(flag(flag3[24]), { isDsaEligible });
      };
      obj.impressionName = discord_common_AnalyticsUtils.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL;
      obj.impressionProperties = impressionProperties;
      obj[constants.COLLECT_SIGNAL] = obj;
      const obj1 = {
        headerLeft: NavigatorHeader.getHeaderBackButton(),
        headerTitle() {
          return closure_1_12(isDsaEligible(isDeveloperClassification[10]).Text, { variant: "text-md/normal", children: "accessible" });
        },
        render() {
          return closure_2_12(flag(flag3[25]), { isDsaEligible });
        },
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
        impressionProperties
      };
      obj[constants.CONFIRM_SUBMISSION] = obj1;
      obj2 = { headerLeft: null, headerTitle: null, render: null, impressionName: null, impressionProperties: null };
      obj2.headerLeft = NavigatorHeader.getHeaderCloseButton(AppealIngestionModalActionCreatorsDefault.close);
      obj2.headerTitle = function headerTitle() {
        return closure_1_12(isDsaEligible(isDeveloperClassification[10]).Text, { variant: "text-md/normal", children: "accessible" });
      };
      obj2.render = function render() {
        return closure_1_12(isSpam(isDeveloperClassification[26]), {});
      };
      obj2.impressionName = discord_common_AnalyticsUtils.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT;
      obj2.impressionProperties = impressionProperties;
      obj[constants.REQUEST_SENT] = obj2;
      const obj3 = { headerLeft: null, headerTitle: null, render: null, impressionName: null, impressionProperties: null };
      obj3.headerLeft = NavigatorHeader.getHeaderCloseButton(AppealIngestionModalActionCreatorsDefault.close);
      obj3.headerTitle = function headerTitle() {
        return closure_1_12(isDsaEligible(isDeveloperClassification[10]).Text, { variant: "text-md/normal", children: "accessible" });
      };
      obj3.render = function render() {
        return closure_1_12(isSpam(isDeveloperClassification[27]), {});
      };
      obj3.impressionName = discord_common_AnalyticsUtils.ImpressionNames.APPEAL_INGESTION_THANKS;
      obj3.impressionProperties = impressionProperties;
      obj[constants.THANKS] = obj3;
      obj4 = { headerLeft: null, headerTitle: null, render: null, impressionName: null, impressionProperties: null };
      obj4.headerLeft = NavigatorHeader.getHeaderCloseButton(AppealIngestionModalActionCreatorsDefault.close);
      obj4.headerTitle = function headerTitle() {
        return closure_1_12(isDsaEligible(isDeveloperClassification[10]).Text, { variant: "text-md/normal", children: "accessible" });
      };
      obj4.render = function render() {
        return closure_1_12(isSpam(isDeveloperClassification[28]), {});
      };
      obj4.impressionName = discord_common_AnalyticsUtils.ImpressionNames.APPEAL_INGESTION_SPAM;
      obj4.impressionProperties = impressionProperties;
      obj[constants.SPAM] = obj4;
      return obj;
    }),
    headerBackTitle: null,
    headerTitleAlign: "center"
  };
  const intl = tmp(tmp2[19]).intl;
  obj.headerBackTitle = intl.string(require("util").t["13/7kX"]);
  return closure_12(require("Navigator").Navigator, obj);
};
export const AppealIngestionModalHeader = function AppealIngestionModalHeader(arg0) {
  ({ headerText, subHeaderText } = arg0);
  const tmp = closure_15();
  let obj = { style: tmp.headerContainer, children: null };
  let tmp4 = null != headerText;
  if (tmp4) {
    tmp4 = "" !== headerText;
  }
  if (tmp4) {
    obj = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: headerText };
    tmp4 = closure_1_12(Text_Text.Text, obj);
  }
  const items = [tmp4, ];
  let tmp8 = null;
  if (null != subHeaderText) {
    tmp8 = null;
    if (subHeaderText.length > 0) {
      obj = { style: tmp.subheader, variant: "text-md/medium", color: "text-default", children: subHeaderText };
      tmp8 = closure_1_12(Text_Text.Text, obj);
    }
  }
  items[1] = tmp8;
  obj.children = items;
  return map1(View, obj);
};
export const AppealIngestionModalScreen = function AppealIngestionModalScreen(children) {
  let safetyHubAppealSignal;
  let navigation;
  asyncGeneratorStep = undefined;
  let first;
  noop = undefined;
  let onPress;
  let footerText = closure_15();
  let stringResult = navigation;
  let obj = safetyHubAppealSignal(navigation[11]);
  const items = [SafetyHubStore];
  const stateFromStores = obj.useStateFromStores(items, () => SafetyHubStore.getIsSubmitting());
  let obj1 = safetyHubAppealSignal(navigation[12]);
  safetyHubAppealSignal = obj1.useSafetyHubAppealSignal();
  let obj2 = safetyHubAppealSignal(navigation[11]);
  const items1 = [SafetyHubStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => SafetyHubStore.getFreeTextAppealReason());
  let obj3 = safetyHubAppealSignal(navigation[11]);
  const items2 = [SafetyHubStore];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => SafetyHubStore.getAppealClassificationId());
  let obj4 = safetyHubAppealSignal(navigation[12]);
  let tmp7 = stateFromStores2;
  if (stateFromStores2 == null) {
    tmp7 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const safetyHubClassification = obj4.useSafetyHubClassification(tmp7);
  const classification = safetyHubClassification.classification;
  let flag;
  if (classification != null) {
    flag = classification.is_spam;
  }
  if (!flag) {
    flag = false;
  }
  const classification2 = safetyHubClassification.classification;
  let flag2;
  if (classification2 != null) {
    flag2 = classification2.is_coppa;
  }
  if (!flag2) {
    flag2 = false;
  }
  const classification3 = safetyHubClassification.classification;
  let prop;
  if (classification3 != null) {
    prop = classification3.appeal_ingestion_type;
  }
  navigation = safetyHubAppealSignal(stringResult[13]).useNavigation();
  const tmp11 = null != prop && prop !== safetyHubAppealSignal(stringResult[14]).AppealIngestionType.IN_APP || flag2 || flag;
  let obj5 = "";
  const tmp12 = !tmp11;
  const tmpResult = safetyHubAppealSignal(stringResult[13]);
  [intl, c4] = first(noop.useState(""), 2);
  const tmp14 = first(noop.useState(""), 2);
  first = tmp14[0];
  noop = tmp14[1];
  const items3 = [navigation];
  const effect = noop.useEffect(() => {
    closure_0 = navigation.addListener("state", () => {
      closure_1_6(navigation.getState().routes[navigation.getState(navigation).routes.length - 1].name);
    });
    return () => {
      navigation.removeListener("state", closure_0);
    };
  }, items3);
  const items4 = [navigation, first];
  onPress = noop.useCallback(() => {
    if (first === constants.SPEED_BUMP) {
      navigation.push(tmp2.COLLECT_SIGNAL);
    } else if (tmp === tmp2.COLLECT_SIGNAL) {
      navigation.push(tmp2.CONFIRM_SUBMISSION);
    } else if (tmp === tmp2.CONFIRM_SUBMISSION) {
      navigation.push(tmp2.REQUEST_SENT);
    } else {
      AppealIngestionModalActionCreatorsDefault.close();
    }
  }, items4);
  const items5 = [stateFromStores2, safetyHubAppealSignal, stateFromStores1, onPress];
  let string = noop.useCallback(asyncGeneratorStep(async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp3;
            safetyHubAppealSignal = tmp7;
            if (null !== stateFromStores2) {
              dependencyMap = 1;
              v2("");
              v2 = 2;
              c5 = 1;
              let obj1 = { value: tmp27(11881).requestReview(tmp35, safetyHubAppealSignal, stateFromStores1), done: false };
              return obj1;
            }
          }
        } else {
          if (1 === tmp7) {
            dependencyMap = 0;
            closure_128_0 = tmp27;
            obj1 = safetyHubAppealSignal(8418);
            const body = closure_128_0.body;
            let code;
            if (body != null) {
              code = body.code;
            }
            closure_129_4(obj1.getRequestReviewErrorFromCode(code));
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_7();
            dependencyMap = 0;
          }
          dependencyMap = 0;
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
        c5 = 3;
      } catch (tmp27) {
        if (tmp4 === dependencyMap) {
          c5 = tmp2;
          throw tmp27;
        } else {
          v2 = tmp;
        }
      }
    }
  }), items5);
  obj = { style: footerText.container, children: null };
  const items6 = [children.children, ];
  obj = { style: footerText.footerContainer, children: null };
  obj1 = { style: footerText.separator };
  const items7 = [closure_12(onPress, obj1), ];
  if (tmp11) {
    items7[1] = tmp12;
    obj.children = items7;
    items6[1] = tmp18(tmp19, obj);
    obj.children = items6;
    return tmp18(tmp19, obj);
  } else {
    obj2 = { bottom: true, style: footerText.footerButton, children: null };
    if (first === constants.CONFIRM_SUBMISSION) {
      obj3 = { variant: "text-xs/medium", color: "text-default", style: footerText.footerText, children: null };
      const intl4 = tmp(stringResult[19]).intl;
      obj3.children = intl4.string(tmp(stringResult[19]).t["d6qgY/"]);
      const items8 = [tmp20(tmp(stringResult[10]).Text, obj3), , ];
      let tmp20Result = `` !== intl;
      if (tmp20Result) {
        obj4 = { variant: "text-xs/medium", color: "text-feedback-critical", style: null, children: null };
        footerText = footerText.footerText;
        obj4.style = footerText;
        obj4.children = intl;
        tmp20Result = tmp20(tmp(stringResult[10]).Text, obj4);
      }
      obj5 = { children: null };
      items8[1] = tmp20Result;
      const obj6 = { onPress: string, text: null, variant: "destructive", loading: null, disabled: null };
      intl = tmp(stringResult[19]).intl;
      string = intl.string;
      stringResult = string(tmp(stringResult[19]).t.geKm7t);
      obj6.text = stringResult;
      obj6.loading = stateFromStores;
      obj6.disabled = stateFromStores;
      items8[2] = tmp20(tmp(stringResult[20]).Button, obj6);
      obj5.children = items8;
      tmp20Result = tmp18(closure_14, obj5);
    } else {
      const obj7 = { onPress, text: null };
      if (first !== tmp21.REQUEST_SENT) {
        if (first !== tmp21.THANKS) {
          const intl2 = tmp(stringResult[19]).intl;
          let stringResult1 = intl2.string(tmp(stringResult[19]).t.XiOHRX);
        }
        obj7.text = stringResult1;
        tmp20Result = tmp20(tmp27, obj7);
      }
      const intl3 = tmp(stringResult[19]).intl;
      stringResult1 = intl3.string(tmp(stringResult[19]).t.i4jeWR);
    }
    obj2.children = tmp20Result;
    tmp20(tmp(stringResult[18]).SafeAreaPaddingView, obj2);
  }
};