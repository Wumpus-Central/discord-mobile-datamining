// === Module 14081: AppealIngestionModal ===

// Module 14081 (AppealIngestionModal)
import nativeDefault from "native" /* 575 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import Text_Text from "Text/Text" /* 5866 */;
import NavigatorHeader from "NavigatorHeader" /* 7427 */;
import AppealIngestionModalActionCreatorsDefault from "AppealIngestionModalActionCreators" /* 14080 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8165 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const SafetyHubConstants = fn(8140);
({ APPEAL_INGESTION_IMPRESSION_PROPERTIES: closure_9, AppealIngestionSections: closure_10 } = SafetyHubConstants);
const EMPTY_STRING_SNOWFLAKE_ID = fn(1072).EMPTY_STRING_SNOWFLAKE_ID;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(5243);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, headerContainer: { alignSelf: "stretch", marginTop: 16, marginBottom: 8, paddingHorizontal: 16 }, header: { marginBottom: 8, textAlign: "center" }, subheader: { lineHeight: 20, marginBottom: 8, textAlign: "center" }, separator: null, footerContainer: null, footerText: null, footerButton: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.separator = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 24 };
obj2.footerContainer = { marginBottom: 16 };
obj2.footerText = { marginBottom: 16, textAlign: "center" };
obj2.footerButton = { paddingHorizontal: 16 };
let closure_15 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionModal.tsx");

export default function AppealIngestionModal(classificationId) {
  _require = undefined;
  let flag2;
  const safetyHubClassification = require("useSafetyHubClassifications").useSafetyHubClassification(classificationId.classificationId);
  ({ isDsaEligible: c0, classification } = safetyHubClassification);
  let flag;
  if (classification != null) {
    flag = classification.is_coppa;
  }
  if (!flag) {
    flag = false;
  }
  const classification2 = safetyHubClassification.classification;
  flag2 = undefined;
  if (classification2 != null) {
    flag2 = classification2.is_developer_classification;
  }
  if (!flag2) {
    flag2 = false;
  }
  let obj = require("useSafetyHubClassifications");
  let obj2 = {
    initialRouteName: constants.SPEED_BUMP,
    screens: flag(5854)(() => {
      const isDsaEligible = c0;
      const isCoppa = flag;
      const isDeveloperClassification = flag2;
      const obj = {};
      const obj2 = {
        headerLeft: NavigatorHeader.getHeaderCloseButton(AppealIngestionModalActionCreatorsDefault.close),
        headerTitle() {
          return closure_1_12(isDsaEligible(5866).Text, { variant: "body-md/normal", children: "paddingHorizontal" });
        },
        render() {
          return closure_2_12(flag(14082), { isDsaEligible, isCoppa, isDeveloperClassification });
        },
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.APPEAL_INGESTION_SPEED_BUMP,
        impressionProperties
      };
      obj[constants.SPEED_BUMP] = obj2;
      const obj4 = { headerLeft: null, headerTitle: null, render: null, impressionName: null, impressionProperties: null };
      obj4.headerLeft = NavigatorHeader.getHeaderBackButton();
      obj4.headerTitle = function headerTitle() {
        return closure_1_12(isDsaEligible(5866).Text, { variant: "body-md/normal", children: "paddingHorizontal" });
      };
      obj4.render = function render() {
        return closure_2_12(flag(14102), { isDsaEligible });
      };
      obj4.impressionName = discord_common_AnalyticsUtils.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL;
      obj4.impressionProperties = impressionProperties;
      obj[constants.COLLECT_SIGNAL] = obj4;
      const obj6 = { headerLeft: null, headerTitle: null, render: null, impressionName: null, impressionProperties: null };
      obj6.headerLeft = NavigatorHeader.getHeaderBackButton();
      obj6.headerTitle = function headerTitle() {
        return closure_1_12(isDsaEligible(5866).Text, { variant: "body-md/normal", children: "paddingHorizontal" });
      };
      obj6.render = function render() {
        return closure_2_12(flag(14104), { isDsaEligible });
      };
      obj6.impressionName = discord_common_AnalyticsUtils.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION;
      obj6.impressionProperties = impressionProperties;
      obj[constants.CONFIRM_SUBMISSION] = obj6;
      const obj8 = { headerLeft: null, headerTitle: null, render: null, impressionName: null, impressionProperties: null };
      obj8.headerLeft = NavigatorHeader.getHeaderCloseButton(AppealIngestionModalActionCreatorsDefault.close);
      obj8.headerTitle = function headerTitle() {
        return closure_1_12(isDsaEligible(5866).Text, { variant: "body-md/normal", children: "paddingHorizontal" });
      };
      obj8.render = function render() {
        return closure_1_12(isCoppa(14106), {});
      };
      obj8.impressionName = discord_common_AnalyticsUtils.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT;
      obj8.impressionProperties = impressionProperties;
      obj[constants.REQUEST_SENT] = obj8;
      const obj10 = { headerLeft: null, headerTitle: null, render: null, impressionName: null, impressionProperties: null };
      obj10.headerLeft = NavigatorHeader.getHeaderCloseButton(AppealIngestionModalActionCreatorsDefault.close);
      obj10.headerTitle = function headerTitle() {
        return closure_1_12(isDsaEligible(5866).Text, { variant: "body-md/normal", children: "paddingHorizontal" });
      };
      obj10.render = function render() {
        return closure_1_12(isCoppa(14108), {});
      };
      obj10.impressionName = discord_common_AnalyticsUtils.ImpressionNames.APPEAL_INGESTION_THANKS;
      obj10.impressionProperties = impressionProperties;
      obj[constants.THANKS] = obj10;
      return obj;
    }),
    headerBackTitle: null,
    headerTitleAlign: "center"
  };
  const intl = tmp(1113).intl;
  obj2.headerBackTitle = intl.string(require("util").t["13/7kX"]);
  return closure_12(require("Navigator").Navigator, obj2);
};
export function AppealIngestionModalHeader(arg0) {
  ({ headerText, subHeaderText } = arg0);
  const tmp = closure_15();
  const obj = { style: tmp.headerContainer, children: null };
  let tmp4 = null != headerText;
  if (tmp4) {
    tmp4 = "" !== headerText;
  }
  if (tmp4) {
    const obj2 = { style: tmp.header, variant: "heading-xl/semibold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: headerText };
    tmp4 = application_id(Text_Text.Text, obj2);
  }
  items = [tmp4, ];
  let tmp8 = null;
  if (null != subHeaderText) {
    tmp8 = null;
    if (subHeaderText.length > 0) {
      const obj3 = { style: tmp.subheader, variant: "body-md/medium", color: "text-default", children: subHeaderText };
      tmp8 = application_id(Text_Text.Text, obj3);
    }
  }
  items[1] = tmp8;
  obj.children = items;
  return state(View, obj);
}
export function AppealIngestionModalScreen(children) {
  let safetyHubAppealSignal;
  let navigation;
  asyncGeneratorStep = undefined;
  let first;
  noop = undefined;
  let onPress;
  let footerText = closure_15();
  let stringResult = navigation;
  items = [SafetyHubStore];
  const stateFromStores = safetyHubAppealSignal(navigation[11]).useStateFromStores(items, () => SafetyHubStore.getIsSubmitting());
  let obj = safetyHubAppealSignal(navigation[11]);
  safetyHubAppealSignal = safetyHubAppealSignal(navigation[12]).useSafetyHubAppealSignal();
  let obj2 = safetyHubAppealSignal(navigation[12]);
  const items1 = [SafetyHubStore];
  const stateFromStores1 = safetyHubAppealSignal(navigation[11]).useStateFromStores(items1, () => SafetyHubStore.getFreeTextAppealReason());
  const obj3 = safetyHubAppealSignal(navigation[11]);
  const items2 = [SafetyHubStore];
  const stateFromStores2 = safetyHubAppealSignal(navigation[11]).useStateFromStores(items2, () => SafetyHubStore.getAppealClassificationId());
  let obj4 = safetyHubAppealSignal(navigation[11]);
  let tmp7 = stateFromStores2;
  if (stateFromStores2 == null) {
    tmp7 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const safetyHubClassification = safetyHubAppealSignal(navigation[12]).useSafetyHubClassification(tmp7);
  const classification = safetyHubClassification.classification;
  let flag;
  if (classification != null) {
    flag = classification.is_coppa;
  }
  if (!flag) {
    flag = false;
  }
  const classification2 = safetyHubClassification.classification;
  let prop;
  if (classification2 != null) {
    prop = classification2.appeal_ingestion_type;
  }
  let obj5 = safetyHubAppealSignal(navigation[12]);
  navigation = safetyHubAppealSignal(stringResult[13]).useNavigation();
  const tmp11 = (null == prop || prop === safetyHubAppealSignal(stringResult[14]).AppealIngestionType.IN_APP) && !flag;
  let obj12 = "";
  const tmpResult = safetyHubAppealSignal(stringResult[13]);
  [intl, c4] = first(noop.useState(""), 2);
  const tmp13 = first(noop.useState(""), 2);
  first = tmp13[0];
  noop = tmp13[1];
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
      navigation.push(constants.COLLECT_SIGNAL);
    } else if (first === constants.COLLECT_SIGNAL) {
      navigation.push(constants.CONFIRM_SUBMISSION);
    } else if (first === constants.CONFIRM_SUBMISSION) {
      navigation.push(constants.REQUEST_SENT);
    } else {
      AppealIngestionModalActionCreatorsDefault.close();
    }
  }, items4);
  const items5 = [stateFromStores2, safetyHubAppealSignal, stateFromStores1, onPress];
  let string = noop.useCallback(asyncGeneratorStep(async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
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
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_1 = tmp3;
            safetyHubAppealSignal = tmp7;
            if (null !== stateFromStores2) {
              dependencyMap = 1;
              v2("");
              v2 = 2;
              c5 = 1;
              const obj6 = { value: tmp27(14076).requestReview(tmp35, safetyHubAppealSignal, stateFromStores1), done: false };
              return obj6;
            }
          }
        } else {
          if (1 === tmp7) {
            dependencyMap = 0;
            closure_128_0 = tmp27;
            const body = closure_128_0.body;
            let code;
            if (body != null) {
              code = body.code;
            }
            closure_129_4(safetyHubAppealSignal(8139).getRequestReviewErrorFromCode(code));
            const obj2 = safetyHubAppealSignal(8139);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_7();
            dependencyMap = 0;
          }
          dependencyMap = 0;
          c5 = 3;
          const obj = { value, done: true };
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
  let obj6 = { style: footerText.container, children: null };
  const items6 = [children.children, ];
  const obj7 = { style: footerText.footerContainer, children: null };
  const items7 = [closure_12(onPress, { style: footerText.separator }), ];
  if (!tmp11) {
    items7[1] = tmp11;
    obj7.children = items7;
    items6[1] = closure_13(tmp18, obj7);
    obj6.children = items6;
    return closure_13(tmp18, obj6);
  } else {
    const obj9 = { bottom: true, style: footerText.footerButton, children: null };
    if (first === constants.CONFIRM_SUBMISSION) {
      const obj10 = { variant: "body-xs/medium", color: "text-default", style: footerText.footerText, children: null };
      const intl4 = tmp(stringResult[19]).intl;
      obj10.children = intl4.string(tmp(stringResult[19]).t["d6qgY/"]);
      const items8 = [closure_12(tmp(stringResult[10]).Text, obj10), , ];
      let tmp19Result = `` !== intl;
      if (tmp19Result) {
        const obj11 = { variant: "body-xs/medium", color: "text-feedback-critical", style: null, children: null };
        footerText = footerText.footerText;
        obj11.style = footerText;
        obj11.children = intl;
        tmp19Result = closure_12(tmp(stringResult[10]).Text, obj11);
      }
      obj12 = { children: null };
      items8[1] = tmp19Result;
      const obj13 = { onPress: string, text: null, variant: "destructive", loading: null, disabled: null };
      intl = tmp(stringResult[19]).intl;
      string = intl.string;
      stringResult = string(tmp(stringResult[19]).t.geKm7t);
      obj13.text = stringResult;
      obj13.loading = stateFromStores;
      obj13.disabled = stateFromStores;
      items8[2] = closure_12(tmp(stringResult[20]).Button, obj13);
      obj12.children = items8;
      let tmp19Result2 = closure_13(closure_14, obj12);
    } else {
      const obj14 = { onPress, text: null };
      if (first !== constants.REQUEST_SENT) {
        if (first !== constants.THANKS) {
          const intl2 = tmp(stringResult[19]).intl;
          let stringResult1 = intl2.string(tmp(stringResult[19]).t.XiOHRX);
        }
        obj14.text = stringResult1;
        tmp19Result2 = closure_12(tmp26, obj14);
      }
      const intl3 = tmp(stringResult[19]).intl;
      stringResult1 = intl3.string(tmp(stringResult[19]).t.i4jeWR);
    }
    obj9.children = tmp19Result2;
    closure_12(tmp(stringResult[18]).SafeAreaPaddingView, obj9);
  }
  const obj8 = { style: footerText.separator };
  const tmp12 = first(noop.useState(""), 2);
}