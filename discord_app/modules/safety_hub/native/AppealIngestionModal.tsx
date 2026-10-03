// discord_app/modules/safety_hub/native/AppealIngestionModal.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AppealIngestionModalActionCreatorsDefault from "AppealIngestionModalActionCreators.tsx";
import AppealIngestionSpeedBumpDefault from "AppealIngestionSpeedBump.tsx";
import AppealIngestionCollectSignalDefault from "AppealIngestionCollectSignal.tsx";
import AppealIngestionConfirmSubmissionDefault from "AppealIngestionConfirmSubmission.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import SafetyHubStore from "../SafetyHubStore.tsx";

const require = globalThis.__r;

require = fn;
function getScreens(isDsaEligible, isSpam, isCoppa, isDeveloperClassification) {
  _require = isDsaEligible;
  importDefault = isSpam;
  dependencyMap = isDeveloperClassification;
  const obj = {};
  const obj2 = {
    headerLeft: require("NavigatorHeader").getHeaderCloseButton(AppealIngestionModalActionCreatorsDefault.close),
    headerTitle() {
      return closure_1_12(isDsaEligible(isDeveloperClassification[12]).Text, {
        variant: "text-md/normal",
        children: "application",
      });
    },
    render() {
      return __initData(AppealIngestionSpeedBumpDefault, { isDsaEligible, isSpam, isCoppa, isDeveloperClassification });
    },
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.APPEAL_INGESTION_SPEED_BUMP,
    impressionProperties,
  };
  obj[constants.SPEED_BUMP] = obj2;
  const obj4 = { headerLeft: null, headerTitle: null, render: null, impressionName: null, impressionProperties: null };
  const obj3 = require("NavigatorHeader");
  obj4.headerLeft = require("NavigatorHeader").getHeaderBackButton();
  obj4.headerTitle = function headerTitle() {
    return closure_1_12(isDsaEligible(isDeveloperClassification[12]).Text, {
      variant: "text-md/normal",
      children: "application",
    });
  };
  obj4.render = function render() {
    return __initData(AppealIngestionCollectSignalDefault, { isDsaEligible });
  };
  obj4.impressionName = require("discord_common/AnalyticsUtils").ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL;
  obj4.impressionProperties = impressionProperties;
  obj[constants.COLLECT_SIGNAL] = obj4;
  const obj6 = { headerLeft: null, headerTitle: null, render: null, impressionName: null, impressionProperties: null };
  const obj5 = require("NavigatorHeader");
  obj6.headerLeft = require("NavigatorHeader").getHeaderBackButton();
  obj6.headerTitle = function headerTitle() {
    return closure_1_12(isDsaEligible(isDeveloperClassification[12]).Text, {
      variant: "text-md/normal",
      children: "application",
    });
  };
  obj6.render = function render() {
    return __initData(AppealIngestionConfirmSubmissionDefault, { isDsaEligible });
  };
  obj6.impressionName = require("discord_common/AnalyticsUtils").ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION;
  obj6.impressionProperties = impressionProperties;
  obj[constants.CONFIRM_SUBMISSION] = obj6;
  const obj8 = { headerLeft: null, headerTitle: null, render: null, impressionName: null, impressionProperties: null };
  const obj7 = require("NavigatorHeader");
  obj8.headerLeft = require("NavigatorHeader").getHeaderCloseButton(AppealIngestionModalActionCreatorsDefault.close);
  obj8.headerTitle = function headerTitle() {
    return closure_1_12(isDsaEligible(isDeveloperClassification[12]).Text, {
      variant: "text-md/normal",
      children: "application",
    });
  };
  obj8.render = function render() {
    return closure_1_12(isSpam(isDeveloperClassification[28]), {});
  };
  obj8.impressionName = require("discord_common/AnalyticsUtils").ImpressionNames.APPEAL_INGESTION_REQUEST_SENT;
  obj8.impressionProperties = impressionProperties;
  obj[constants.REQUEST_SENT] = obj8;
  const obj10 = { headerLeft: null, headerTitle: null, render: null, impressionName: null, impressionProperties: null };
  const obj9 = require("NavigatorHeader");
  obj10.headerLeft = require("NavigatorHeader").getHeaderCloseButton(AppealIngestionModalActionCreatorsDefault.close);
  obj10.headerTitle = function headerTitle() {
    return closure_1_12(isDsaEligible(isDeveloperClassification[12]).Text, {
      variant: "text-md/normal",
      children: "application",
    });
  };
  obj10.render = function render() {
    return closure_1_12(isSpam(isDeveloperClassification[29]), {});
  };
  obj10.impressionName = require("discord_common/AnalyticsUtils").ImpressionNames.APPEAL_INGESTION_THANKS;
  obj10.impressionProperties = impressionProperties;
  obj[constants.THANKS] = obj10;
  const obj12 = { headerLeft: null, headerTitle: null, render: null, impressionName: null, impressionProperties: null };
  const obj11 = require("NavigatorHeader");
  obj12.headerLeft = require("NavigatorHeader").getHeaderCloseButton(AppealIngestionModalActionCreatorsDefault.close);
  obj12.headerTitle = function headerTitle() {
    return closure_1_12(isDsaEligible(isDeveloperClassification[12]).Text, {
      variant: "text-md/normal",
      children: "application",
    });
  };
  obj12.render = function render() {
    return closure_1_12(isSpam(isDeveloperClassification[30]), {});
  };
  obj12.impressionName = require("discord_common/AnalyticsUtils").ImpressionNames.APPEAL_INGESTION_SPAM;
  obj12.impressionProperties = impressionProperties;
  obj[constants.SPAM] = obj12;
  return obj;
}
let View = fn(17).View;
const SafetyHubConstants = fn(8093);
({ APPEAL_INGESTION_IMPRESSION_PROPERTIES: closure_9, AppealIngestionSections: c10 } = SafetyHubConstants);
const EMPTY_STRING_SNOWFLAKE_ID = fn(1085).EMPTY_STRING_SNOWFLAKE_ID;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  headerContainer: { alignSelf: "stretch", marginTop: 16, marginBottom: 8, paddingHorizontal: 16 },
  header: { marginBottom: 8, textAlign: "center" },
  subheader: { lineHeight: 20, marginBottom: 8, textAlign: "center" },
  separator: null,
  footerContainer: null,
  footerText: null,
  footerButton: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.separator = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 24 };
obj2.footerContainer = { marginBottom: 16 };
obj2.footerText = { marginBottom: 16, textAlign: "center" };
obj2.footerButton = { paddingHorizontal: 16 };
let closure_15 = createStyles.createStyles(obj2);
fn(558);
let obj4 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 24 };
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(10);
      ({ headerText, subHeaderText } = arg0);
      const tmp4 = closure_15();
      if (cResult[0] === headerText) {
        if (cResult[1] === tmp4.header) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === tmp4.subheader) {
          if (cResult[4] === subHeaderText) {
            let tmp8 = cResult[5];
          }
          if (cResult[6] === tmp4.headerContainer) {
            if (cResult[7] === tmp5) {
              if (cResult[8] === tmp8) {
                let tmp12 = cResult[9];
              }
              return tmp12;
            }
          }
          const obj2 = { style: tmp4.headerContainer, children: null };
          const items = [tmp5, tmp8];
          obj2.children = items;
          const tmp15 = __initData2(View, obj2);
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
            const obj3 = {
              style: tmp4.subheader,
              variant: "text-md/medium",
              color: "text-default",
              children: subHeaderText,
            };
            tmp10 = __initData(Text_Text.Text, obj3);
          }
        }
        cResult[3] = tmp4.subheader;
        cResult[4] = subHeaderText;
        cResult[5] = tmp10;
        tmp8 = tmp10;
      }
      let tmp6 = null != headerText;
      if (tmp6) {
        tmp6 = "" !== headerText;
      }
      if (tmp6) {
        const obj4 = {
          style: tmp4.header,
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          accessibilityRole: "header",
          children: headerText,
        };
        tmp6 = __initData(Text_Text.Text, obj4);
      }
      cResult[0] = headerText;
      cResult[1] = tmp4.header;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (arg0) => {
      ({ headerText, subHeaderText } = arg0);
      const tmp = closure_15();
      const obj = { style: tmp.headerContainer, children: null };
      let tmp4 = null != headerText;
      if (tmp4) {
        tmp4 = "" !== headerText;
      }
      if (tmp4) {
        const obj2 = {
          style: tmp.header,
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          accessibilityRole: "header",
          children: headerText,
        };
        tmp4 = __initData(Text_Text.Text, obj2);
      }
      const items = [tmp4];
      let tmp8 = null;
      if (null != subHeaderText) {
        tmp8 = null;
        if (subHeaderText.length > 0) {
          const obj3 = {
            style: tmp.subheader,
            variant: "text-md/medium",
            color: "text-default",
            children: subHeaderText,
          };
          tmp8 = __initData(Text_Text.Text, obj3);
        }
      }
      items[1] = tmp8;
      obj.children = items;
      return __initData2(View, obj);
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = require("c").c(36);
      closure_15();
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
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
      const tmpResult = require("initialize");
      const safetyHubAppealSignal = require("useSafetyHubClassifications").useSafetyHubAppealSignal();
      _require = safetyHubAppealSignal;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SafetyHubStore];
        class A {
          constructor() {
            return closure_1_8.getFreeTextAppealReason();
          }
        }
        cResult[2] = items1;
        cResult[3] = A;
        let tmp11 = A;
        let tmp10 = items1;
      } else {
        tmp10 = cResult[2];
        tmp11 = cResult[3];
      }
      const tmpResult6 = require("useSafetyHubClassifications");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp10, tmp11);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [SafetyHubStore];
        class A {
          constructor() {
            return closure_1_8.getFreeTextAppealReason();
          }
        }
        cResult[4] = items2;
        cResult[5] = tmp17;
        let tmp15 = tmp17;
        let tmp14 = items2;
      } else {
        tmp14 = cResult[4];
        tmp15 = cResult[5];
      }
      const tmpResult7 = require("initialize");
      const stateFromStores2 = require("initialize").useStateFromStores(tmp14, tmp15);
      const tmpResult8 = require("initialize");
      let tmp19 = stateFromStores2;
      if (stateFromStores2 == null) {
        tmp19 = EMPTY_STRING_SNOWFLAKE_ID;
      }
      const safetyHubClassification = require("useSafetyHubClassifications").useSafetyHubClassification(tmp19);
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
      const tmpResult9 = require("useSafetyHubClassifications");
      navigation = require("useNavigation").useNavigation();
      (null != prop && prop !== require("SafetyHubModels").AppealIngestionType.IN_APP) || flag2 || flag;
      const obj8 = noop;
      const tmpResult10 = require("useNavigation");
      [r10095, asyncGeneratorStep] = first(noop.useState(""), 2);
      const tmp25 = first(noop.useState(""), 2);
      first = tmp25[0];
      noop = tmp25[1];
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
            return closure_1_8.getFreeTextAppealReason();
          }
        }
        cResult[6] = navigation;
        cResult[7] = R;
        cResult[8] = items3;
        let tmp28 = items3;
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
        tmp28 = cResult[8];
      }
      const effect = obj8.useEffect(R, tmp28);
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
            return closure_1_8.getFreeTextAppealReason();
          }
        }
        _require = asyncGeneratorStep(async () => {
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
              return { value: "IconComponent", done: "IconComponent" };
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
                  closure_0 = tmp7;
                  closure_128_0 = undefined;
                  if (null !== closure_2) {
                    c3 = 1;
                    v2("");
                    v2 = 2;
                    c5 = 1;
                    const obj6 = {
                      value: stateFromStores2(navigation[18]).requestReview(tmp35, closure_0, closure_1),
                      done: false,
                    };
                    return obj6;
                  }
                }
              } else {
                if (1 === tmp7) {
                  c3 = 0;
                  closure_128_0 = closure_2;
                  const body = closure_128_0.body;
                  let code;
                  if (body != null) {
                    code = body.code;
                  }
                  v2(closure_0(navigation[19]).getRequestReviewErrorFromCode(code));
                  const obj2 = closure_0(navigation[19]);
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  tmp30();
                  c3 = 0;
                }
                c3 = 0;
                c5 = 3;
                const obj = { value, done: true };
                return obj;
              }
              c5 = 3;
            } catch (tmp27) {
              closure_2 = tmp27;
              if (tmp4 === c3) {
                c5 = tmp2;
                throw tmp27;
              } else {
                v2 = tmp;
              }
            }
          }
        });
        const fn2 = function () {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        cResult[12] = safetyHubAppealSignal;
        cResult[13] = stateFromStores2;
        cResult[14] = stateFromStores1;
        cResult[15] = O;
        cResult[16] = fn2;
      }
      class O {
        constructor() {
          tmp = closure_5;
          tmp2 = AppealIngestionSections;
          if (closure_5 === AppealIngestionSections.SPEED_BUMP) {
            tmp10 = closure_3;
            arr = closure_3.push(tmp2.COLLECT_SIGNAL);
          } else if (tmp === tmp2.COLLECT_SIGNAL) {
            tmp8 = closure_3;
            arr1 = closure_3.push(tmp2.CONFIRM_SUBMISSION);
          } else if (tmp === tmp2.CONFIRM_SUBMISSION) {
            tmp6 = closure_3;
            arr2 = closure_3.push(tmp2.REQUEST_SENT);
          } else {
            tmp3 = closure_1;
            tmp4 = closure_3;
            obj = closure_1(closure_3[17]);
            closeResult = obj.close();
          }
          return;
        }
      }
      cResult[9] = navigation;
      cResult[10] = first;
      cResult[11] = O;
      const tmp24 = first(noop.useState(""), 2);
    }
  : (children) => {
      let safetyHubAppealSignal;
      let navigation;
      asyncGeneratorStep = undefined;
      let first;
      noop = undefined;
      let onPress;
      let footerText = closure_15();
      let stringResult = navigation;
      const items = [SafetyHubStore];
      const stateFromStores = safetyHubAppealSignal(navigation[13]).useStateFromStores(items, () =>
        SafetyHubStore.getIsSubmitting(),
      );
      let obj = safetyHubAppealSignal(navigation[13]);
      safetyHubAppealSignal = safetyHubAppealSignal(navigation[14]).useSafetyHubAppealSignal();
      let obj2 = safetyHubAppealSignal(navigation[14]);
      const items1 = [SafetyHubStore];
      const stateFromStores1 = safetyHubAppealSignal(navigation[13]).useStateFromStores(items1, () =>
        SafetyHubStore.getFreeTextAppealReason(),
      );
      const obj3 = safetyHubAppealSignal(navigation[13]);
      const items2 = [SafetyHubStore];
      const stateFromStores2 = safetyHubAppealSignal(navigation[13]).useStateFromStores(items2, () =>
        SafetyHubStore.getAppealClassificationId(),
      );
      let obj4 = safetyHubAppealSignal(navigation[13]);
      let tmp7 = stateFromStores2;
      if (stateFromStores2 == null) {
        tmp7 = EMPTY_STRING_SNOWFLAKE_ID;
      }
      const safetyHubClassification = safetyHubAppealSignal(navigation[14]).useSafetyHubClassification(tmp7);
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
      let obj5 = safetyHubAppealSignal(navigation[14]);
      navigation = safetyHubAppealSignal(stringResult[15]).useNavigation();
      const tmp11 =
        (null != prop && prop !== safetyHubAppealSignal(stringResult[16]).AppealIngestionType.IN_APP) || flag2 || flag;
      let obj12 = "";
      const tmp12 = !tmp11;
      const tmpResult = safetyHubAppealSignal(stringResult[15]);
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
      let string = noop.useCallback(
        asyncGeneratorStep(async () => {
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
              return { value: "IconComponent", done: "IconComponent" };
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
                    const obj6 = {
                      value: tmp27(11493).requestReview(tmp35, safetyHubAppealSignal, stateFromStores1),
                      done: false,
                    };
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
                  closure_129_4(safetyHubAppealSignal(8092).getRequestReviewErrorFromCode(code));
                  const obj2 = safetyHubAppealSignal(8092);
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
        }),
        items5,
      );
      let obj6 = { style: footerText.container, children: null };
      const items6 = [children.children];
      const obj7 = { style: footerText.footerContainer, children: null };
      const items7 = [closure_12(onPress, { style: footerText.separator })];
      if (tmp11) {
        items7[1] = tmp12;
        obj7.children = items7;
        items6[1] = closure_13(tmp19, obj7);
        obj6.children = items6;
        return closure_13(tmp19, obj6);
      } else {
        const obj9 = { bottom: true, style: footerText.footerButton, children: null };
        if (first === constants.CONFIRM_SUBMISSION) {
          const obj10 = {
            variant: "text-xs/medium",
            color: "text-default",
            style: footerText.footerText,
            children: null,
          };
          const intl4 = tmp(stringResult[21]).intl;
          obj10.children = intl4.string(tmp(stringResult[21]).t["d6qgY/"]);
          const items8 = [closure_12(tmp(stringResult[12]).Text, obj10), ,];
          let tmp20Result = `` !== intl;
          if (tmp20Result) {
            const obj11 = { variant: "text-xs/medium", color: "text-feedback-critical", style: null, children: null };
            footerText = footerText.footerText;
            obj11.style = footerText;
            obj11.children = intl;
            tmp20Result = closure_12(tmp(stringResult[12]).Text, obj11);
          }
          obj12 = { children: null };
          items8[1] = tmp20Result;
          const obj13 = { onPress: string, text: null, variant: "destructive", loading: null, disabled: null };
          intl = tmp(stringResult[21]).intl;
          string = intl.string;
          stringResult = string(tmp(stringResult[21]).t.geKm7t);
          obj13.text = stringResult;
          obj13.loading = stateFromStores;
          obj13.disabled = stateFromStores;
          items8[2] = closure_12(tmp(stringResult[22]).Button, obj13);
          obj12.children = items8;
          let tmp20Result2 = closure_13(closure_14, obj12);
        } else {
          const obj14 = { onPress, text: null };
          if (first !== constants.REQUEST_SENT) {
            if (first !== constants.THANKS) {
              const intl2 = tmp(stringResult[21]).intl;
              let stringResult1 = intl2.string(tmp(stringResult[21]).t.XiOHRX);
            }
            obj14.text = stringResult1;
            tmp20Result2 = closure_12(tmp27, obj14);
          }
          const intl3 = tmp(stringResult[21]).intl;
          stringResult1 = intl3.string(tmp(stringResult[21]).t.i4jeWR);
        }
        obj9.children = tmp20Result2;
        closure_12(tmp(stringResult[20]).SafeAreaPaddingView, obj9);
      }
      const obj8 = { style: footerText.separator };
      const tmp13 = first(noop.useState(""), 2);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (classificationId) => {
      const cResult = isDsaEligible(flag3[11]).c(8);
      const obj = isDsaEligible(flag3[11]);
      const safetyHubClassification = isDsaEligible(flag3[14]).useSafetyHubClassification(
        classificationId.classificationId,
      );
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
            if (cResult[3] === flag) {
              let tmp5 = cResult[4];
            }
            const tmp7 = flag(tmp2[31])(tmp5);
            const _Symbol = Symbol;
            if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(tmp2[21]).intl;
              const stringResult = intl.string(tmp(tmp2[21]).t["13/7kX"]);
              cResult[5] = stringResult;
              let tmp9 = stringResult;
            } else {
              tmp9 = cResult[5];
            }
            if (cResult[6] !== tmp7) {
              const obj3 = {
                initialRouteName: constants.SPEED_BUMP,
                screens: tmp7,
                headerBackTitle: tmp9,
                headerTitleAlign: "center",
              };
              const tmp14 = closure_12(tmp(tmp2[32]).Navigator, obj3);
              cResult[6] = tmp7;
              cResult[7] = tmp14;
              let tmp11 = tmp14;
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
      const obj2 = isDsaEligible(flag3[14]);
    }
  : (classificationId) => {
      _require = undefined;
      let flag2;
      let flag3;
      const safetyHubClassification = require("useSafetyHubClassifications").useSafetyHubClassification(
        classificationId.classificationId,
      );
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
      const obj = require("useSafetyHubClassifications");
      const obj2 = {
        initialRouteName: constants.SPEED_BUMP,
        screens: flag(flag3[31])(() => getScreens(c0, flag, flag2, flag3)),
        headerBackTitle: null,
        headerTitleAlign: "center",
      };
      const intl = tmp(tmp2[21]).intl;
      obj2.headerBackTitle = intl.string(require("util").t["13/7kX"]);
      return closure_12(require("Navigator").Navigator, obj2);
    };
export const AppealIngestionModalHeader = tmp4;
export const AppealIngestionModalScreen = tmp5;
