// discord_app/modules/safety_hub/native/AppealIngestionSpeedBump.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Constants from "../../../Constants.tsx";
import AppealIngestionActivitySummaryDefault from "AppealIngestionActivitySummary.tsx";
import AppealIngestionPolicySummaryDefault from "AppealIngestionPolicySummary.tsx";
import AppealIngestionExternalLinkDefault from "AppealIngestionExternalLink.tsx";
import react from "../../../../_runtime/00019_react.js";
import SafetyHubStore from "../SafetyHubStore.tsx";
import SafetyHubConstants from "../SafetyHubConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
const View = react_native.View;
({ SafetyHubAnalyticsActions: hasOwnProperty, SafetyHubLinks: metroRequire } = SafetyHubConstants);
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ container: { flex: 1, alignSelf: "stretch", paddingHorizontal: 16 } });
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let appealClassificationId;
      let arr2;
      let classification;
      let emitAppealIngestionEvent;
      let intl3;
      let isCoppa;
      let isDeveloperClassification;
      let isDsaEligible;
      let isSpam;
      let items1;
      let items2;
      let tmp16;
      let tmp20;
      let tmp23;
      let tmp27;
      let tmp5;
      let tmp6;
      const obj = emitAppealIngestionEvent(576);
      const cResult = obj.c(36);
      ({ isCoppa, isSpam, isDeveloperClassification } = arg0);
      const tmp4 = closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SafetyHubStore];
        class A {
          constructor() {
            return appealClassificationId.getAppealClassificationId();
          }
        }
        cResult[0] = items;
        cResult[1] = A;
        tmp5 = items;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = emitAppealIngestionEvent(504);
      let stateFromStores = tmpResult.useStateFromStores(tmp5, A);
      const useSafetyHubClassification = emitAppealIngestionEvent(11492).useSafetyHubClassification;
      emitAppealIngestionEvent(11492);
      if (stateFromStores == null) {
        stateFromStores = EMPTY_STRING_SNOWFLAKE_ID;
      }
      const safetyHubClassification = useSafetyHubClassification(stateFromStores);
      const tmpResult4 = emitAppealIngestionEvent(11500);
      emitAppealIngestionEvent = tmpResult4.useEmitAppealIngestionEvent();
      ({ isDsaEligible, classification } = safetyHubClassification);
      let str;
      if (classification != null) {
        str = classification.explainer_link;
      }
      if (str == null) {
        str = "";
      }
      const classification2 = safetyHubClassification.classification;
      let flagged_content;
      const tmp12 = cResult[2];
      if (classification2 != null) {
        flagged_content = classification2.flagged_content;
      }
      if (tmp12 !== flagged_content) {
        const classification3 = safetyHubClassification.classification;
        let flagged_content1;
        if (classification3 != null) {
          flagged_content1 = classification3.flagged_content;
        }
        class A {
          constructor() {
            return appealClassificationId.getAppealClassificationId();
          }
        }
        const classification4 = safetyHubClassification.classification;
        let flagged_content2;
        if (classification4 != null) {
          flagged_content2 = classification4.flagged_content;
        }
        cResult[2] = flagged_content2;
        cResult[3] = flagged_content1;
        arr2 = flagged_content1;
      } else {
        arr2 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(emitAppealIngestionEvent(1126).t["C5q+pW"]);
        class A {
          constructor() {
            return appealClassificationId.getAppealClassificationId();
          }
        }
        cResult[4] = stringResult;
        tmp16 = stringResult;
      } else {
        tmp16 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(emitAppealIngestionEvent(1126).t.URt7VI);
        class A {
          constructor() {
            return appealClassificationId.getAppealClassificationId();
          }
        }
        cResult[5] = stringResult1;
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { headerText: tmp16, subHeaderText: null };
        class A {
          constructor() {
            return appealClassificationId.getAppealClassificationId();
          }
        }
        const tmp22 = closure_8(emitAppealIngestionEvent(11498).AppealIngestionModalHeader, obj2);
        cResult[6] = tmp22;
        tmp20 = tmp22;
      } else {
        tmp20 = cResult[6];
      }
      if (cResult[7] !== arr2) {
        let tmp24 = arr2.length > 0;
        if (tmp24) {
          const obj3 = { flaggedContent: null };
          class A {
            constructor() {
              return appealClassificationId.getAppealClassificationId();
            }
          }
          tmp24 = closure_8(AppealIngestionActivitySummaryDefault, obj3);
        }
        class A {
          constructor() {
            return appealClassificationId.getAppealClassificationId();
          }
        }
        cResult[7] = arr2;
        cResult[8] = tmp24;
        tmp23 = tmp24;
      } else {
        tmp23 = cResult[8];
      }
      if (cResult[9] !== safetyHubClassification.classification) {
        const obj4 = { classification: null };
        class A {
          constructor() {
            return appealClassificationId.getAppealClassificationId();
          }
        }
        const tmp30 = closure_8(AppealIngestionPolicySummaryDefault, obj4);
        cResult[9] = safetyHubClassification.classification;
        cResult[10] = tmp30;
        tmp27 = tmp30;
      } else {
        tmp27 = cResult[10];
      }
      if (cResult[11] === emitAppealIngestionEvent) {
        let tmp31;
        if (cResult[12] === isCoppa) {
          tmp31 = cResult[13];
        }
        if (cResult[14] === emitAppealIngestionEvent) {
          if (cResult[15] === isCoppa) {
            let tmp37;
            if (cResult[16] === isSpam) {
              tmp37 = cResult[17];
            }
            if (cResult[18] === emitAppealIngestionEvent) {
              let tmp39;
              if (cResult[19] === isDeveloperClassification) {
                tmp39 = cResult[20];
              }
              if (cResult[21] === emitAppealIngestionEvent) {
                if (cResult[22] === isCoppa) {
                  let tmp41;
                  let tmp43;
                  if (cResult[23] === str) {
                    tmp41 = cResult[24];
                  }
                  if (cResult[25] !== isDsaEligible) {
                    let tmp44 = isDsaEligible;
                    if (tmp44) {
                      const obj5 = {
                        variant: "text-xs/normal",
                        children: obj9.format(emitAppealIngestionEvent(1126).t.WMUgCX, {}),
                      };
                      const Text = tmp(4886).Text;
                      class A {
                        constructor() {
                          return appealClassificationId.getAppealClassificationId();
                        }
                      }
                      tmp44 = closure_8(Text, obj5);
                    }
                    class A {
                      constructor() {
                        return appealClassificationId.getAppealClassificationId();
                      }
                    }
                    cResult[26] = tmp44;
                    tmp43 = tmp44;
                  } else {
                    tmp43 = cResult[26];
                  }
                  if (cResult[27] === tmp4.container) {
                    if (cResult[28] === tmp37) {
                      if (cResult[29] === tmp39) {
                        if (cResult[30] === tmp41) {
                          if (cResult[31] === tmp43) {
                            if (cResult[32] === tmp23) {
                              if (cResult[33] === tmp27) {
                                let tmp46;
                                if (cResult[34] === tmp31) {
                                  tmp46 = cResult[35];
                                }
                                return tmp46;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  class A {
                    constructor() {
                      return appealClassificationId.getAppealClassificationId();
                    }
                  }
                  const obj6 = { children: items1 };
                  items1 = [tmp20];
                  const obj7 = { style: tmp4.container, children: items2 };
                  items2 = [tmp23, tmp27, tmp31, tmp37, tmp39, tmp41, tmp43];
                  const AppealIngestionModalScreen = tmp(11498).AppealIngestionModalScreen;
                  items1[1] = closure_9(View, obj7);
                  const tmp48 = closure_9(AppealIngestionModalScreen, obj6);
                  cResult[27] = tmp4.container;
                  cResult[28] = tmp37;
                  cResult[29] = tmp39;
                  cResult[30] = tmp41;
                  cResult[31] = tmp43;
                  cResult[32] = tmp23;
                  cResult[33] = tmp27;
                  cResult[34] = tmp31;
                  cResult[35] = tmp48;
                  tmp46 = tmp48;
                }
              }
              class A {
                constructor() {
                  return appealClassificationId.getAppealClassificationId();
                }
              }
              cResult[21] = emitAppealIngestionEvent;
              cResult[22] = isCoppa;
              cResult[23] = str;
              cResult[24] = !isCoppa;
              tmp41 = tmp42;
            }
            class A {
              constructor() {
                return appealClassificationId.getAppealClassificationId();
              }
            }
            cResult[18] = emitAppealIngestionEvent;
            cResult[19] = isDeveloperClassification;
            cResult[20] = isDeveloperClassification;
            tmp39 = isDeveloperClassification;
          }
        }
        class A {
          constructor() {
            return appealClassificationId.getAppealClassificationId();
          }
        }
        cResult[14] = emitAppealIngestionEvent;
        cResult[15] = isCoppa;
        cResult[16] = isSpam;
        cResult[17] = isSpam && !isCoppa;
        tmp37 = tmp38;
      }
      let tmp32 = isCoppa;
      if (tmp32) {
        const obj8 = {
          text: intl3.string(emitAppealIngestionEvent(1126).t["gJs+kf"]),
          url: constants.AGE_VERIFICATION_LINK,
          onPress() {
            return emitAppealIngestionEvent(hasOwnProperty.ClickAgeVerificationLink);
          },
        };
        class A {
          constructor() {
            return appealClassificationId.getAppealClassificationId();
          }
        }
        intl3 = tmp(1126).intl;
        tmp32 = closure_8(tmp35, obj8);
      }
      cResult[11] = emitAppealIngestionEvent;
      cResult[12] = isCoppa;
      cResult[13] = tmp32;
      tmp31 = tmp32;
    }
  : (arg0) => {
      let appealClassificationId;
      let classification;
      let closure_0;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let isCoppa;
      let isDeveloperClassification;
      let isDsaEligible;
      let isSpam;
      let items2;
      ({ isCoppa, isSpam, isDeveloperClassification } = arg0);
      _require = undefined;
      const items = [SafetyHubStore];
      const tmp = closure_10();
      const obj = require("get initialized");
      let stateFromStores = obj.useStateFromStores(items, () => appealClassificationId.getAppealClassificationId());
      const useSafetyHubClassification = require("useSafetyHubClassifications").useSafetyHubClassification;
      require("useSafetyHubClassifications");
      if (stateFromStores == null) {
        stateFromStores = EMPTY_STRING_SNOWFLAKE_ID;
      }
      const safetyHubClassification = useSafetyHubClassification(stateFromStores);
      const tmp2Result = require("useEmitAppealIngestionEvent");
      _require = tmp2Result.useEmitAppealIngestionEvent();
      ({ isDsaEligible, classification } = safetyHubClassification);
      let str;
      if (classification != null) {
        str = classification.explainer_link;
      }
      if (str == null) {
        str = "";
      }
      const classification2 = safetyHubClassification.classification;
      let flagged_content;
      if (classification2 != null) {
        flagged_content = classification2.flagged_content;
      }
      if (flagged_content == null) {
        flagged_content = [];
      }
      const intl = tmp2(1126).intl;
      const stringResult = intl.string(require("intl").t["C5q+pW"]);
      const intl2 = tmp2(1126).intl;
      const stringResult1 = intl2.string(require("intl").t.URt7VI);
      const AppealIngestionModalScreen = tmp2(11498).AppealIngestionModalScreen;
      const items1 = [
        closure_8(require("AppealIngestionModal").AppealIngestionModalHeader, {
          headerText: stringResult,
          subHeaderText: stringResult1,
        }),
      ];
      let tmp10Result = flagged_content.length > 0;
      const obj2 = { style: tmp.container, children: items2 };
      if (tmp10Result) {
        const obj3 = { flaggedContent: flagged_content };
        tmp10Result = closure_8(AppealIngestionActivitySummaryDefault, obj3);
      }
      items2 = [tmp10Result, , , , , ,];
      const obj4 = { classification: safetyHubClassification.classification };
      items2[1] = closure_8(AppealIngestionPolicySummaryDefault, obj4);
      let tmp10Result3 = isCoppa;
      if (tmp10Result3) {
        const obj5 = {
          text: intl3.string(require("intl").t["gJs+kf"]),
          url: constants.AGE_VERIFICATION_LINK,
          onPress() {
            return closure_0(hasOwnProperty.ClickAgeVerificationLink);
          },
        };
        const tmp14Result = AppealIngestionExternalLinkDefault;
        intl3 = tmp2(1126).intl;
        tmp10Result3 = closure_8(tmp14Result, obj5);
      }
      items2[2] = tmp10Result3;
      if (isSpam) {
        isSpam = !isCoppa;
      }
      if (isSpam) {
        const obj6 = {
          text: intl4.string(require("intl").t.NBsJvm),
          url: constants.SPAM_LINK,
          onPress() {
            return closure_0(hasOwnProperty.ClickSpamWebformLink);
          },
        };
        const tmp14Result4 = AppealIngestionExternalLinkDefault;
        intl4 = tmp2(1126).intl;
        isSpam = closure_8(tmp14Result4, obj6);
      }
      items2[3] = isSpam;
      if (isDeveloperClassification) {
        const obj7 = {
          text: intl5.string(require("intl").t.n9cZTH),
          url: constants.APP_APPEAL_LINK,
          onPress() {
            return closure_0(hasOwnProperty.ClickAppAppealLink);
          },
        };
        const tmp14Result5 = AppealIngestionExternalLinkDefault;
        intl5 = tmp2(1126).intl;
        isDeveloperClassification = closure_8(tmp14Result5, obj7);
      }
      items2[4] = isDeveloperClassification;
      let tmp10Result4 = !isCoppa;
      if (tmp10Result4) {
        const obj8 = {
          text: intl6.string(require("intl").t["Vtyn/7"]),
          url: str,
          onPress() {
            return closure_0(hasOwnProperty.ClickLearnMoreLink);
          },
        };
        const tmp14Result6 = AppealIngestionExternalLinkDefault;
        intl6 = tmp2(1126).intl;
        tmp10Result4 = closure_8(tmp14Result6, obj8);
      }
      items2[5] = tmp10Result4;
      if (isDsaEligible) {
        const obj9 = { variant: "text-xs/normal", children: intl7.format(require("intl").t.WMUgCX, {}) };
        const Text = tmp2(4886).Text;
        intl7 = tmp2(1126).intl;
        isDsaEligible = closure_8(Text, obj9);
      }
      const obj10 = { children: items1 };
      items2[6] = isDsaEligible;
      items1[1] = closure_9(View, obj2);
      return closure_9(AppealIngestionModalScreen, obj10);
    };
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionSpeedBump.tsx");

export default tmp5;
