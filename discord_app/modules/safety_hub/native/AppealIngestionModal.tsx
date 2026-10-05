// === Module 11498: AppealIngestionModal ===

// Module 11498 (AppealIngestionModal)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import Text_Text from "Text/Text" /* 4886 */;
import AppealIngestionModalActionCreatorsDefault from "AppealIngestionModalActionCreators" /* 11497 */;
import AppealIngestionSpeedBumpDefault from "AppealIngestionSpeedBump" /* 11499 */;
import AppealIngestionCollectSignalDefault from "AppealIngestionCollectSignal" /* 11513 */;
import AppealIngestionConfirmSubmissionDefault from "AppealIngestionConfirmSubmission" /* 11515 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8106 */;
import SafetyHubConstants from "SafetyHubConstants" /* 8093 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c5, children, classificationId, dependencyMap, importDefault, navigation;

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let obj2;
let obj3;
function getScreens(isDsaEligible, isSpam, isCoppa, isDeveloperClassification) {
  let obj11;
  let obj13;
  let obj3;
  let obj5;
  let obj7;
  let obj9;
  _require = isDsaEligible;
  importDefault = isSpam;
  dependencyMap = isDeveloperClassification;
  let obj = {};
  const SPEED_BUMP = constants.SPEED_BUMP;
  const obj2 = {
    headerLeft: obj3.getHeaderCloseButton(AppealIngestionModalActionCreatorsDefault.close),
    headerTitle() {
      return closure_1_12(isDsaEligible(isDeveloperClassification[12]).Text, { variant: "text-md/normal", children: "applicationId" });
    },
    render() {
      const obj = { isDsaEligible, isSpam, isCoppa, isDeveloperClassification };
      return closure_12(AppealIngestionSpeedBumpDefault, obj);
    },
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.APPEAL_INGESTION_SPEED_BUMP,
    impressionProperties
  };
  obj[SPEED_BUMP] = obj2;
  obj3 = require("NavigatorHeader");
  const COLLECT_SIGNAL = constants.COLLECT_SIGNAL;
  const obj4 = {
    headerLeft: obj5.getHeaderBackButton(),
    headerTitle() {
      return closure_1_12(isDsaEligible(isDeveloperClassification[12]).Text, { variant: "text-md/normal", children: "applicationId" });
    },
    render() {
      const obj = { isDsaEligible };
      return closure_12(AppealIngestionCollectSignalDefault, obj);
    },
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL,
    impressionProperties
  };
  obj[COLLECT_SIGNAL] = obj4;
  obj5 = require("NavigatorHeader");
  const CONFIRM_SUBMISSION = constants.CONFIRM_SUBMISSION;
  const obj6 = {
    headerLeft: obj7.getHeaderBackButton(),
    headerTitle() {
      return closure_1_12(isDsaEligible(isDeveloperClassification[12]).Text, { variant: "text-md/normal", children: "applicationId" });
    },
    render() {
      const obj = { isDsaEligible };
      return closure_12(AppealIngestionConfirmSubmissionDefault, obj);
    },
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
    impressionProperties
  };
  obj[CONFIRM_SUBMISSION] = obj6;
  obj7 = require("NavigatorHeader");
  const REQUEST_SENT = constants.REQUEST_SENT;
  const obj8 = {
    headerLeft: obj9.getHeaderCloseButton(AppealIngestionModalActionCreatorsDefault.close),
    headerTitle() {
      return closure_1_12(isDsaEligible(isDeveloperClassification[12]).Text, { variant: "text-md/normal", children: "applicationId" });
    },
    render() {
      return closure_1_12(isSpam(isDeveloperClassification[28]), {});
    },
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.APPEAL_INGESTION_REQUEST_SENT,
    impressionProperties
  };
  obj[REQUEST_SENT] = obj8;
  obj9 = require("NavigatorHeader");
  const THANKS = constants.THANKS;
  const obj10 = {
    headerLeft: obj11.getHeaderCloseButton(AppealIngestionModalActionCreatorsDefault.close),
    headerTitle() {
      return closure_1_12(isDsaEligible(isDeveloperClassification[12]).Text, { variant: "text-md/normal", children: "applicationId" });
    },
    render() {
      return closure_1_12(isSpam(isDeveloperClassification[29]), {});
    },
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.APPEAL_INGESTION_THANKS,
    impressionProperties
  };
  obj[THANKS] = obj10;
  obj11 = require("NavigatorHeader");
  const SPAM = constants.SPAM;
  const obj12 = {
    headerLeft: obj13.getHeaderCloseButton(AppealIngestionModalActionCreatorsDefault.close),
    headerTitle() {
      return closure_1_12(isDsaEligible(isDeveloperClassification[12]).Text, { variant: "text-md/normal", children: "applicationId" });
    },
    render() {
      return closure_1_12(isSpam(isDeveloperClassification[30]), {});
    },
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.APPEAL_INGESTION_SPAM,
    impressionProperties
  };
  obj[SPAM] = obj12;
  obj13 = require("NavigatorHeader");
  return obj;
}
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
let View = react_native.View;
({ APPEAL_INGESTION_IMPRESSION_PROPERTIES: c9, AppealIngestionSections: c10 } = SafetyHubConstants);
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerContainer: { alignSelf: "stretch", marginTop: 16, marginBottom: 8, paddingHorizontal: 16 }, header: { marginBottom: 8, textAlign: "center" }, subheader: { lineHeight: 20, marginBottom: 8, textAlign: "center" }, separator: obj3, footerContainer: { marginBottom: 16 }, footerText: { marginBottom: 16, textAlign: "center" }, footerButton: { paddingHorizontal: 16 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 24 };
let closure_15 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let headerText;
  let items;
  let subHeaderText;
  const obj = react2;
  const cResult = obj.c(10);
  ({ headerText, subHeaderText } = arg0);
  const tmp4 = closure_15();
  if (cResult[0] === headerText) {
    let tmp5;
    if (cResult[1] === tmp4.header) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.subheader) {
      let tmp8;
      if (cResult[4] === subHeaderText) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === tmp4.headerContainer) {
        if (cResult[7] === tmp5) {
          let tmp12;
          if (cResult[8] === tmp8) {
            tmp12 = cResult[9];
          }
          return tmp12;
        }
      }
      const obj2 = { style: tmp4.headerContainer, children: items };
      items = [tmp5, tmp8];
      const tmp15 = map1(View, obj2);
      cResult[6] = tmp4.headerContainer;
      cResult[7] = tmp5;
      cResult[8] = tmp8;
      cResult[9] = tmp15;
      tmp12 = tmp15;
    }
    let tmp10 = null;
    if (null != subHeaderText) {
      tmp10 = null;
      if (subHeaderText.length > 0) {
        const obj3 = { style: tmp4.subheader, variant: "text-md/medium", color: "text-default", children: subHeaderText };
        tmp10 = closure_12(Text_Text.Text, obj3);
      }
    }
    cResult[3] = tmp4.subheader;
    cResult[4] = subHeaderText;
    cResult[5] = tmp10;
    tmp8 = tmp10;
  }
  let tmp6 = null != headerText && "" !== headerText;
  if (tmp6) {
    const obj4 = { style: tmp4.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: headerText };
    tmp6 = closure_12(Text_Text.Text, obj4);
  }
  cResult[0] = headerText;
  cResult[1] = tmp4.header;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((arg0) => {
  let headerText;
  let items;
  let subHeaderText;
  ({ headerText, subHeaderText } = arg0);
  const tmp = closure_15();
  let tmp4 = null != headerText && "" !== headerText;
  const obj = { style: tmp.headerContainer, children: items };
  if (tmp4) {
    const obj2 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: headerText };
    tmp4 = closure_12(Text_Text.Text, obj2);
  }
  items = [tmp4, ];
  let tmp8 = null;
  if (null != subHeaderText) {
    tmp8 = null;
    if (subHeaderText.length > 0) {
      const obj3 = { style: tmp.subheader, variant: "text-md/medium", color: "text-default", children: subHeaderText };
      tmp8 = closure_12(Text_Text.Text, obj3);
    }
  }
  items[1] = tmp8;
  return map1(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_6;
  let closure_7;
  let first;
  let safetyHubAppealSignal;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp15;
  let tmp29;
  let tmp5;
  let tmp6;
  const tmp = safetyHubAppealSignal;
  let obj = safetyHubAppealSignal(navigation[11]);
  const cResult = obj.c(36);
  const tmp4 = closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SafetyHubStore];
    const fn = function f() {
      return SafetyHubStore.getIsSubmitting();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(navigation[13]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmpResult6 = tmp(navigation[14]);
  safetyHubAppealSignal = tmpResult6.useSafetyHubAppealSignal();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SafetyHubStore];
    class A {
      constructor() {
        return SafetyHubStore.getFreeTextAppealReason();
      }
    }
    cResult[2] = items1;
    cResult[3] = A;
    tmp11 = A;
    tmp10 = items1;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  const tmpResult7 = tmp(navigation[13]);
  const stateFromStores1 = tmpResult7.useStateFromStores(tmp10, tmp11);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [SafetyHubStore];
    class A {
      constructor() {
        return SafetyHubStore.getFreeTextAppealReason();
      }
    }
    cResult[4] = items2;
    cResult[5] = tmp17;
    tmp15 = tmp17;
    tmp14 = items2;
  } else {
    tmp14 = cResult[4];
    tmp15 = cResult[5];
  }
  const tmpResult8 = tmp(navigation[13]);
  const stateFromStores2 = tmpResult8.useStateFromStores(tmp14, tmp15);
  let tmp20 = stateFromStores2;
  const useSafetyHubClassification = tmp(navigation[14]).useSafetyHubClassification;
  tmp(navigation[14]);
  if (stateFromStores2 == null) {
    tmp20 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const safetyHubClassification = useSafetyHubClassification(tmp20);
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
  const tmpResult10 = tmp(navigation[15]);
  navigation = tmpResult10.useNavigation();
  null != prop && prop !== tmp(tmp2[16]).AppealIngestionType.IN_APP || flag2 || flag;
  const tmp25 = first(react.useState(""), 2);
  [r10095, _asyncToGenerator] = tmp25;
  const tmp26 = first(react.useState(""), 2);
  first = tmp26[0];
  const obj7 = react;
  react = tmp26[1];
  if (cResult[6] !== navigation) {
    class R {
      constructor() {
        closure_0 = closure_3.addListener("state", () => {
          closure_1_6(navigation.getState().routes[navigation.getState(navigation).routes.length - 1].name);
        });
        return () => {
          navigation.removeListener("state", closure_0);
        };
      }
    }
    const items3 = [navigation];
    class A {
      constructor() {
        return SafetyHubStore.getFreeTextAppealReason();
      }
    }
    cResult[6] = navigation;
    cResult[7] = R;
    cResult[8] = items3;
    tmp29 = items3;
  } else {
    class R {
      constructor() {
        closure_0 = closure_3.addListener("state", () => {
          closure_1_6(navigation.getState().routes[navigation.getState(navigation).routes.length - 1].name);
        });
        return () => {
          navigation.removeListener("state", closure_0);
        };
      }
    }
    tmp29 = cResult[8];
  }
  const effect = obj7.useEffect(R, tmp29);
  if (cResult[9] === navigation) {
    class R {
      constructor() {
        closure_0 = closure_3.addListener("state", () => {
          closure_1_6(navigation.getState().routes[navigation.getState(navigation).routes.length - 1].name);
        });
        return () => {
          navigation.removeListener("state", closure_0);
        };
      }
    }
    View = O;
    if (cResult[12] === safetyHubAppealSignal) {
      class R {
        constructor() {
          closure_0 = closure_3.addListener("state", () => {
            closure_1_6(navigation.getState().routes[navigation.getState(navigation).routes.length - 1].name);
          });
          return () => {
            navigation.removeListener("state", closure_0);
          };
        }
      }
    }
    class A {
      constructor() {
        return SafetyHubStore.getFreeTextAppealReason();
      }
    }
    let closure_0 = _asyncToGenerator(async () => {
      let obj2;
      let v1;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          c5 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_1 = tmp;
              closure_0 = undefined;
              if (null !== closure_2) {
                c3 = 1;
                v1("");
                v1 = 2;
                c5 = 1;
                const obj5 = { value: obj2.requestReview(tmp32, closure_0, closure_1), done: false };
                obj2 = stateFromStores2(navigation[18]);
                return obj5;
              }
            }
          } else if (1 === v1) {
            c3 = 0;
            closure_0 = closure_2;
            const body = closure_0.body;
            let code;
            const getRequestReviewErrorFromCode = closure_0(navigation[19]).getRequestReviewErrorFromCode;
            const tmp12 = v1;
            const tmp15 = closure_0(navigation[19]);
            if (body != null) {
              code = body.code;
            }
            tmp12(getRequestReviewErrorFromCode(code));
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_1_7();
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp25) {
          closure_2 = tmp25;
          if (0 === c3) {
            c5 = 3;
            throw tmp25;
          } else {
            v1 = 1;
          }
        }
      }
    });
    const fn2 = function() {
      return closure_0(...arguments);
    };
    cResult[12] = safetyHubAppealSignal;
    cResult[13] = stateFromStores2;
    cResult[14] = stateFromStores1;
    cResult[15] = O;
    cResult[16] = fn2;
    const tmp32 = fn2;
  }
  class O {
    constructor() {
      if (first === constants.SPEED_BUMP) {
        navigation.push(constants.COLLECT_SIGNAL);
      } else if (first === constants.COLLECT_SIGNAL) {
        navigation.push(constants.CONFIRM_SUBMISSION);
      } else if (first === constants.CONFIRM_SUBMISSION) {
        navigation.push(constants.REQUEST_SENT);
      } else {
        const obj = AppealIngestionModalActionCreatorsDefault;
        obj.close();
      }
    }
  }
  cResult[9] = navigation;
  cResult[10] = first;
  cResult[11] = O;
}) : ((children) => {
  let c4;
  let closure_6;
  let intl3;
  let intl4;
  let items6;
  let items7;
  let tmp16;
  let tmp24Result2;
  let safetyHubAppealSignal;
  navigation = undefined;
  _asyncToGenerator = undefined;
  let first;
  react = undefined;
  let onPress;
  children = children.children;
  const tmp = closure_15();
  const tmp3 = navigation;
  let obj = safetyHubAppealSignal(navigation[13]);
  const items = [SafetyHubStore];
  const stateFromStores = obj.useStateFromStores(items, () => SafetyHubStore.getIsSubmitting());
  let obj2 = safetyHubAppealSignal(navigation[14]);
  safetyHubAppealSignal = obj2.useSafetyHubAppealSignal();
  let obj3 = safetyHubAppealSignal(navigation[13]);
  const items1 = [SafetyHubStore];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => SafetyHubStore.getFreeTextAppealReason());
  let obj4 = safetyHubAppealSignal(navigation[13]);
  const items2 = [SafetyHubStore];
  const stateFromStores2 = obj4.useStateFromStores(items2, () => SafetyHubStore.getAppealClassificationId());
  let tmp9 = stateFromStores2;
  const useSafetyHubClassification = safetyHubAppealSignal(navigation[14]).useSafetyHubClassification;
  const tmp8 = safetyHubAppealSignal(navigation[14]);
  if (stateFromStores2 == null) {
    tmp9 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const safetyHubClassification = useSafetyHubClassification(tmp9);
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
  const tmp2Result = safetyHubAppealSignal(tmp3[15]);
  navigation = tmp2Result.useNavigation();
  const tmp13 = null != prop && prop !== tmp2(tmp3[16]).AppealIngestionType.IN_APP || flag2 || flag;
  let tmp24Result3 = !tmp13;
  let tmp15 = first(react.useState(""), 2);
  [tmp16, c4] = tmp15;
  const tmp17 = first(react.useState(""), 2);
  first = tmp17[0];
  react = tmp17[1];
  const items3 = [navigation];
  const effect = react.useEffect(() => {
    let closure_0 = navigation.addListener("state", () => {
      closure_1_6(navigation.getState().routes[navigation.getState(navigation).routes.length - 1].name);
    });
    return () => {
      navigation.removeListener("state", closure_0);
    };
  }, items3);
  const items4 = [navigation, first];
  onPress = react.useCallback(() => {
    if (first === constants.SPEED_BUMP) {
      navigation.push(constants.COLLECT_SIGNAL);
    } else if (first === constants.COLLECT_SIGNAL) {
      navigation.push(constants.CONFIRM_SUBMISSION);
    } else if (first === constants.CONFIRM_SUBMISSION) {
      navigation.push(constants.REQUEST_SENT);
    } else {
      const obj = AppealIngestionModalActionCreatorsDefault;
      obj.close();
    }
  }, items4);
  const items5 = [stateFromStores2, safetyHubAppealSignal, stateFromStores1, onPress];
  let obj5 = { style: tmp.container, children: items6 };
  items6 = [children, ];
  const obj6 = { style: tmp.footerContainer, children: items7 };
  const obj7 = { style: tmp.separator };
  const callback1 = react.useCallback(_asyncToGenerator(async () => {
    let c3;
    let closure_0;
    let closure_2;
    let obj2;
    let v1;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp;
            safetyHubAppealSignal = tmp4;
            if (null !== stateFromStores2) {
              navigation = 1;
              v1("");
              v1 = 2;
              c5 = 1;
              const obj5 = { value: obj2.requestReview(tmp32, safetyHubAppealSignal, stateFromStores1), done: false };
              obj2 = tmp25(navigation[18]);
              return obj5;
            }
          }
        } else if (1 === v1) {
          navigation = 0;
          safetyHubAppealSignal = tmp25;
          const body = safetyHubAppealSignal.body;
          let code;
          const getRequestReviewErrorFromCode = safetyHubAppealSignal(navigation[19]).getRequestReviewErrorFromCode;
          const tmp15 = safetyHubAppealSignal(navigation[19]);
          if (body != null) {
            code = body.code;
          }
          closure_129_4(getRequestReviewErrorFromCode(code));
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          navigation = 0;
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_129_7();
          navigation = 0;
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp25) {
        if (0 === navigation) {
          c5 = 3;
          throw tmp25;
        } else {
          v1 = 1;
        }
      }
    }
  }), items5);
  items7 = [closure_12(onPress, obj7), ];
  if (!tmp13) {
    const obj8 = { bottom: true, style: tmp.footerButton, children: tmp24Result2 };
    const SafeAreaPaddingView = tmp2(tmp3[20]).SafeAreaPaddingView;
    if (first === constants.CONFIRM_SUBMISSION) {
      const obj9 = { variant: "text-xs/medium", color: "text-default", style: tmp.footerText, children: intl3.string(safetyHubAppealSignal(tmp3[21]).t["d6qgY/"]) };
      const Text = tmp2(tmp3[12]).Text;
      intl3 = tmp2(tmp3[21]).intl;
      const items8 = [closure_12(Text, obj9), , ];
      let tmp24Result = "" !== tmp16;
      if (tmp24Result) {
        const obj10 = { variant: "text-xs/medium", color: "text-feedback-critical", style: tmp.footerText, children: tmp16 };
        tmp24Result = closure_12(tmp2(tmp3[12]).Text, obj10);
      }
      const obj11 = { children: items8 };
      items8[1] = tmp24Result;
      const obj12 = { onPress: callback1, text: intl4.string(safetyHubAppealSignal(tmp3[21]).t.geKm7t), variant: "destructive", loading: stateFromStores, disabled: stateFromStores };
      const Button = tmp2(tmp3[22]).Button;
      intl4 = tmp2(tmp3[21]).intl;
      items8[2] = closure_12(Button, obj12);
      tmp24Result2 = closure_13(closure_14, obj11);
    } else {
      const obj13 = { onPress, text: null };
      if (first !== constants.REQUEST_SENT) {
        let stringResult;
        if (first !== constants.THANKS) {
          const intl = tmp2(tmp3[21]).intl;
          stringResult = intl.string(tmp2(tmp3[21]).t.XiOHRX);
        }
        obj13.text = stringResult;
        tmp24Result2 = closure_12(tmp30, obj13);
      }
      const intl2 = tmp2(tmp3[21]).intl;
      stringResult = intl2.string(tmp2(tmp3[21]).t.i4jeWR);
    }
    tmp24Result3 = closure_12(SafeAreaPaddingView, obj8);
  }
  items7[1] = tmp24Result3;
  items6[1] = closure_13(onPress, obj6);
  return closure_13(onPress, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((classificationId) => {
  let flag3;
  let isDsaEligible;
  const obj = isDsaEligible(flag3[11]);
  const cResult = obj.c(8);
  classificationId = classificationId.classificationId;
  const obj2 = isDsaEligible(flag3[14]);
  const safetyHubClassification = obj2.useSafetyHubClassification(classificationId);
  isDsaEligible = safetyHubClassification.isDsaEligible;
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
  flag3 = undefined;
  if (classification3 != null) {
    flag3 = classification3.is_developer_classification;
  }
  if (!flag3) {
    flag3 = false;
  }
  if (cResult[0] === flag2) {
    if (cResult[1] === flag3) {
      if (cResult[2] === isDsaEligible) {
        let tmp5;
        let tmp9;
        let tmp11;
        if (cResult[3] === flag) {
          tmp5 = cResult[4];
        }
        const tmp7 = flag(flag3[31])(tmp5);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(tmp2[21]).intl;
          const stringResult = intl.string(isDsaEligible(flag3[21]).t["13/7kX"]);
          cResult[5] = stringResult;
          tmp9 = stringResult;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] !== tmp7) {
          const obj3 = { initialRouteName: constants.SPEED_BUMP, screens: tmp7, headerBackTitle: tmp9, headerTitleAlign: "center" };
          const tmp14 = closure_12(isDsaEligible(flag3[32]).Navigator, obj3);
          cResult[6] = tmp7;
          cResult[7] = tmp14;
          tmp11 = tmp14;
        } else {
          tmp11 = cResult[7];
        }
        return tmp11;
      }
    }
  }
  const fn = function n() {
    return getScreens(isDsaEligible, flag, flag2, flag3);
  };
  cResult[0] = flag2;
  cResult[1] = flag3;
  cResult[2] = isDsaEligible;
  cResult[3] = flag;
  cResult[4] = fn;
  tmp5 = fn;
}) : ((classificationId) => {
  let c0;
  let classification;
  let intl;
  _require = undefined;
  let flag2;
  let flag3;
  classificationId = classificationId.classificationId;
  const obj = require("useSafetyHubClassifications");
  const safetyHubClassification = obj.useSafetyHubClassification(classificationId);
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
  const obj2 = { initialRouteName: constants.SPEED_BUMP, screens: flag(flag3[31])(() => getScreens(c0, flag, flag2, flag3)), headerBackTitle: intl.string(require("intl").t["13/7kX"]), headerTitleAlign: "center" };
  const Navigator = tmp(tmp2[32]).Navigator;
  intl = tmp(tmp2[21]).intl;
  return closure_12(Navigator, obj2);
});
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionModal.tsx");

export default tmp7;
export const AppealIngestionModalHeader = tmp5;
export const AppealIngestionModalScreen = tmp6;