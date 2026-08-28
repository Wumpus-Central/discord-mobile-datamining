// === Module 11407: AppealIngestionModal ===

// Module 11407 (AppealIngestionModal)
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4442 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "_slicedToArray" /* 32 */;
import closure_6 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_8 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 11387 */;
import SafetyHubView from "SafetyHubView" /* 8636 */;
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
({ APPEAL_INGESTION_IMPRESSION_PROPERTIES: c9, AppealIngestionSections: c10 } = SafetyHubView);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
createCacheKey = { container: null, headerContainer: null, header: null, subheader: null, separator: null, footerContainer: null, footerText: null, footerButton: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "stretch", marginTop: 16, marginBottom: 8, paddingHorizontal: 16 };
createCacheKey[2] = { marginBottom: 8, textAlign: "center" };
createCacheKey[3] = { lineHeight: 20, marginBottom: 8, textAlign: "center" };
createCacheKey[4] = { height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, marginVertical: 24 };
createCacheKey[5] = { marginBottom: 16 };
createCacheKey[6] = { marginBottom: 16, textAlign: "center" };
createCacheKey[7] = { paddingHorizontal: 16 };
let closure_15 = createCacheKey.createStyles(createCacheKey);
let obj1 = { height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, marginVertical: 24 };
const result = require("set").fileFinishedImporting("modules/safety_hub/native/AppealIngestionModal.tsx");

export default function AppealIngestionModal(classificationId) {
  let _require;
  let flag;
  let flag2;
  let flag3;
  let obj = _require(flag3[12]);
  const safetyHubClassification = obj.useSafetyHubClassification(classificationId.classificationId);
  ({ isDsaEligible: c0, classification } = safetyHubClassification);
  flag = undefined;
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
      let obj = {};
      obj = { headerLeft: null, headerTitle: null, render: null, impressionName: null, impressionProperties: null };
      let obj2 = _undefined(flag3[21]);
      obj[0] = obj2.getHeaderCloseButton(flag(flag3[15]).close);
      obj[1] = function headerTitle() {
        return callback3(callback(4442).Text, { variant: "text-md/normal", children: "accessibilityRole" });
      };
      obj[2] = function render() {
        return closure_1_12(callback2(11408), { isDsaEligible: closure_0, isSpam: callback2, isCoppa: closure_2, isDeveloperClassification: dependencyMap });
      };
      obj[3] = _undefined(flag3[23]).ImpressionNames.APPEAL_INGESTION_SPEED_BUMP;
      obj[4] = closure_1_9;
      obj[closure_1_10.SPEED_BUMP] = obj;
      obj = { headerLeft: null, headerTitle: null, render: null, impressionName: null, impressionProperties: null };
      let obj4 = _undefined(flag3[21]);
      obj[0] = obj4.getHeaderBackButton();
      obj[1] = function headerTitle() {
        return callback3(callback(4442).Text, { variant: "text-md/normal", children: "accessibilityRole" });
      };
      obj[2] = function render() {
        return closure_1_12(callback2(11413), { isDsaEligible: closure_0 });
      };
      obj[3] = _undefined(flag3[23]).ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL;
      obj[4] = closure_1_9;
      obj[closure_1_10.COLLECT_SIGNAL] = obj;
      obj1 = {
        headerLeft: _undefined(flag3[21]).getHeaderBackButton(),
        headerTitle() {
          return callback3(callback(4442).Text, { variant: "text-md/normal", children: "accessibilityRole" });
        },
        render() {
          return closure_1_12(callback2(11415), { isDsaEligible: closure_0 });
        },
        impressionName: _undefined(flag3[23]).ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
        impressionProperties: closure_1_9
      };
      obj[closure_1_10.CONFIRM_SUBMISSION] = obj1;
      obj2 = { headerLeft: null, headerTitle: null, render: null, impressionName: null, impressionProperties: null };
      const obj7 = _undefined(flag3[21]);
      obj2[0] = _undefined(flag3[21]).getHeaderCloseButton(flag(flag3[15]).close);
      obj2[1] = function headerTitle() {
        return callback3(callback(4442).Text, { variant: "text-md/normal", children: "accessibilityRole" });
      };
      obj2[2] = function render() {
        return callback3(callback2(11417), {});
      };
      obj2[3] = _undefined(flag3[23]).ImpressionNames.APPEAL_INGESTION_REQUEST_SENT;
      obj2[4] = closure_1_9;
      obj[closure_1_10.REQUEST_SENT] = obj2;
      const obj3 = { headerLeft: null, headerTitle: null, render: null, impressionName: null, impressionProperties: null };
      const obj9 = _undefined(flag3[21]);
      obj3[0] = _undefined(flag3[21]).getHeaderCloseButton(flag(flag3[15]).close);
      obj3[1] = function headerTitle() {
        return callback3(callback(4442).Text, { variant: "text-md/normal", children: "accessibilityRole" });
      };
      obj3[2] = function render() {
        return callback3(callback2(11419), {});
      };
      obj3[3] = _undefined(flag3[23]).ImpressionNames.APPEAL_INGESTION_THANKS;
      obj3[4] = closure_1_9;
      obj[closure_1_10.THANKS] = obj3;
      obj4 = { headerLeft: null, headerTitle: null, render: null, impressionName: null, impressionProperties: null };
      const obj11 = _undefined(flag3[21]);
      obj4[0] = _undefined(flag3[21]).getHeaderCloseButton(flag(flag3[15]).close);
      obj4[1] = function headerTitle() {
        return callback3(callback(4442).Text, { variant: "text-md/normal", children: "accessibilityRole" });
      };
      obj4[2] = function render() {
        return callback3(callback2(11420), {});
      };
      obj4[3] = _undefined(flag3[23]).ImpressionNames.APPEAL_INGESTION_SPAM;
      obj4[4] = closure_1_9;
      obj[closure_1_10.SPAM] = obj4;
      return obj;
    }),
    headerBackTitle: null,
    headerTitleAlign: "center"
  };
  const intl = tmp(tmp2[19]).intl;
  obj[2] = intl.string(_require(flag3[19]).t["13/7kX"]);
  return callback2(_require(flag3[30]).Navigator, obj);
};
export const AppealIngestionModalHeader = function AppealIngestionModalHeader(arg0) {
  ({ headerText, subHeaderText } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.headerContainer, children: null };
  let tmp4 = null != headerText;
  if (tmp4) {
    tmp4 = "" !== headerText;
  }
  if (tmp4) {
    obj = { style: null, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
    obj[0] = tmp.header;
    obj[4] = headerText;
    tmp4 = callback2(Text.Text, obj);
  }
  const items = [tmp4, ];
  let tmp8 = null;
  if (null != subHeaderText) {
    tmp8 = null;
    if (subHeaderText.length > 0) {
      obj = { style: null, variant: "text-md/medium", color: "text-default", children: null };
      obj[0] = tmp.subheader;
      obj[3] = subHeaderText;
      tmp8 = callback2(Text.Text, obj);
    }
  }
  items[1] = tmp8;
  obj[1] = items;
  return closure_13(View, obj);
};
export const AppealIngestionModalScreen = function AppealIngestionModalScreen(children) {
  let safetyHubAppealSignal;
  let stateFromStores1;
  let stateFromStores2;
  let navigation;
  let callback;
  let first;
  let React;
  callback = undefined;
  let footerText = callback3();
  let stringResult = navigation;
  let obj = safetyHubAppealSignal(navigation[11]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => store.getIsSubmitting());
  obj1 = safetyHubAppealSignal(navigation[12]);
  safetyHubAppealSignal = obj1.useSafetyHubAppealSignal();
  let obj2 = safetyHubAppealSignal(navigation[11]);
  const items1 = [closure_8];
  stateFromStores1 = obj2.useStateFromStores(items1, () => store.getFreeTextAppealReason());
  let obj3 = safetyHubAppealSignal(navigation[11]);
  const items2 = [closure_8];
  stateFromStores2 = obj3.useStateFromStores(items2, () => store.getAppealClassificationId());
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
  [intl, c4] = first(React.useState(""), 2);
  const tmp14 = first(React.useState(""), 2);
  first = tmp14[0];
  React = tmp14[1];
  const items3 = [navigation];
  const effect = React.useEffect(() => {
    closure_0 = navigation.addListener("state", () => {
      callback(store.getState().routes[store.getState(store).routes.length - 1].name);
    });
    return () => {
      closure_1_3.removeListener("state", closure_0);
    };
  }, items3);
  const items4 = [navigation, first];
  callback = React.useCallback(() => {
    if (first === closure_1_10.SPEED_BUMP) {
      navigation.push(tmp2.COLLECT_SIGNAL);
    } else if (tmp === tmp2.COLLECT_SIGNAL) {
      navigation.push(tmp2.CONFIRM_SUBMISSION);
    } else if (tmp === tmp2.CONFIRM_SUBMISSION) {
      navigation.push(tmp2.REQUEST_SENT);
    } else {
      stateFromStores1(navigation[15]).close();
      const obj = stateFromStores1(navigation[15]);
    }
  }, items4);
  const items5 = [stateFromStores2, safetyHubAppealSignal, stateFromStores1, callback];
  let string = React.useCallback(callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp3;
            let body = tmp7;
            if (null !== closure_1_2) {
              dependencyMap = 1;
              v0("");
              v0 = 2;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_2(11393).requestReview(tmp36, closure_1_0, closure_1_1);
              return obj1;
            }
          }
        } else {
          if (1 === tmp7) {
            dependencyMap = 0;
            body = closure_2;
            obj1 = closure_1_0(8635);
            body = body.body;
            let code;
            if (body != null) {
              code = body.code;
            }
            v0(obj1.getRequestReviewErrorFromCode(code));
            const tmp15 = v0;
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            callback();
            dependencyMap = 0;
          }
          dependencyMap = 0;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        c5 = 3;
      } catch (tmp27) {
        closure_2 = tmp27;
        if (tmp4 === dependencyMap) {
          c5 = tmp2;
          throw tmp27;
        } else {
          v0 = tmp;
        }
      }
    }
  }), items5);
  obj = { style: footerText.container, children: null };
  const items6 = [children.children, ];
  obj = { style: footerText.footerContainer, children: null };
  obj1 = { style: footerText.separator };
  const items7 = [callback2(callback, obj1), ];
  if (tmp11) {
    items7[1] = tmp12;
    obj[1] = items7;
    items6[1] = tmp18(tmp19, obj);
    obj[1] = items6;
    return tmp18(tmp19, obj);
  } else {
    obj2 = { bottom: true, style: null, children: null };
    obj2[1] = footerText.footerButton;
    if (first === constants.CONFIRM_SUBMISSION) {
      obj3 = { variant: "text-xs/medium", color: "text-default", style: null, children: null };
      obj3[2] = footerText.footerText;
      const intl4 = tmp(stringResult[19]).intl;
      obj3[3] = intl4.string(tmp(stringResult[19]).t["d6qgY/"]);
      const items8 = [tmp20(tmp(stringResult[10]).Text, obj3), , ];
      let tmp20Result = `` !== intl;
      if (tmp20Result) {
        obj4 = { variant: "text-xs/medium", color: "text-feedback-critical", style: null, children: null };
        footerText = footerText.footerText;
        obj4[2] = footerText;
        obj4[3] = intl;
        tmp20Result = tmp20(tmp(stringResult[10]).Text, obj4);
      }
      obj5 = { children: null };
      items8[1] = tmp20Result;
      const obj6 = { onPress: null, text: null, variant: "destructive", loading: null, disabled: null };
      obj6[0] = string;
      intl = tmp(stringResult[19]).intl;
      string = intl.string;
      stringResult = string(tmp(stringResult[19]).t.geKm7t);
      obj6[1] = stringResult;
      obj6[3] = stateFromStores;
      obj6[4] = stateFromStores;
      items8[2] = tmp20(tmp(stringResult[20]).Button, obj6);
      obj5[0] = items8;
      tmp20Result = tmp18(closure_14, obj5);
      const tmp24 = closure_14;
    } else {
      const obj7 = { onPress: null, text: null };
      obj7[0] = callback;
      if (first !== tmp21.REQUEST_SENT) {
        if (first !== tmp21.THANKS) {
          const intl2 = tmp(stringResult[19]).intl;
          let stringResult1 = intl2.string(tmp(stringResult[19]).t.XiOHRX);
        }
        obj7[1] = stringResult1;
        tmp20Result = tmp20(tmp27, obj7);
      }
      const intl3 = tmp(stringResult[19]).intl;
      stringResult1 = intl3.string(tmp(stringResult[19]).t.i4jeWR);
    }
    obj2[2] = tmp20Result;
    tmp20(tmp(stringResult[18]).SafeAreaPaddingView, obj2);
  }
};