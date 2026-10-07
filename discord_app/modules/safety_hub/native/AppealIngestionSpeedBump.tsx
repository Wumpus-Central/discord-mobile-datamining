// discord_app/modules/safety_hub/native/AppealIngestionSpeedBump.tsx
import AppealIngestionActivitySummaryDefault from "AppealIngestionActivitySummary.tsx";
import AppealIngestionPolicySummaryDefault from "AppealIngestionPolicySummary.tsx";
import AppealIngestionExternalLinkDefault from "AppealIngestionExternalLink.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SafetyHubStore from "../SafetyHubStore.tsx";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const SafetyHubConstants = fn(8126);
({ SafetyHubAnalyticsActions: hasOwnProperty, SafetyHubLinks: metroRequire } = SafetyHubConstants);
const EMPTY_STRING_SNOWFLAKE_ID = fn(1085).EMPTY_STRING_SNOWFLAKE_ID;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
let closure_10 = createStyles.createStyles({ container: { flex: 1, alignSelf: "stretch", paddingHorizontal: 16 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionSpeedBump.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = emitAppealIngestionEvent(576).c(36);
      ({ isCoppa, isSpam, isDeveloperClassification } = arg0);
      const tmp4 = closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SafetyHubStore];
        class A {
          constructor() {
            return closure_1_4.getAppealClassificationId();
          }
        }
        cResult[0] = items;
        cResult[1] = A;
        tmp5 = items;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const obj = emitAppealIngestionEvent(576);
      let stateFromStores = emitAppealIngestionEvent(504).useStateFromStores(tmp5, A);
      const tmpResult = emitAppealIngestionEvent(504);
      if (stateFromStores == null) {
        stateFromStores = EMPTY_STRING_SNOWFLAKE_ID;
      }
      const safetyHubClassification = emitAppealIngestionEvent(11505).useSafetyHubClassification(stateFromStores);
      const tmpResult3 = emitAppealIngestionEvent(11505);
      emitAppealIngestionEvent = emitAppealIngestionEvent(11513).useEmitAppealIngestionEvent();
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
      if (cResult[2] !== flagged_content) {
        const classification3 = safetyHubClassification.classification;
        let flagged_content1;
        if (classification3 != null) {
          flagged_content1 = classification3.flagged_content;
        }
        class A {
          constructor() {
            return closure_1_4.getAppealClassificationId();
          }
        }
        const classification4 = safetyHubClassification.classification;
        let flagged_content2;
        if (classification4 != null) {
          flagged_content2 = classification4.flagged_content;
        }
        cResult[2] = flagged_content2;
        cResult[3] = flagged_content1;
        let arr2 = flagged_content1;
      } else {
        arr2 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t["C5q+pW"]);
        class A {
          constructor() {
            return closure_1_4.getAppealClassificationId();
          }
        }
        cResult[4] = stringResult;
        let tmp14 = stringResult;
      } else {
        tmp14 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(tmp(1126).t.URt7VI);
        class A {
          constructor() {
            return closure_1_4.getAppealClassificationId();
          }
        }
        cResult[5] = stringResult1;
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { headerText: tmp14, subHeaderText: null };
        class A {
          constructor() {
            return closure_1_4.getAppealClassificationId();
          }
        }
        const tmp20 = closure_8(tmp(11511).AppealIngestionModalHeader, obj2);
        cResult[6] = tmp20;
        let tmp18 = tmp20;
      } else {
        tmp18 = cResult[6];
      }
      if (cResult[7] !== arr2) {
        let tmp22 = arr2.length > 0;
        if (tmp22) {
          class A {
            constructor() {
              return closure_1_4.getAppealClassificationId();
            }
          }
          tmp22 = closure_8(AppealIngestionActivitySummaryDefault, { flaggedContent: null });
          const obj3 = { flaggedContent: null };
        }
        class A {
          constructor() {
            return closure_1_4.getAppealClassificationId();
          }
        }
        cResult[7] = arr2;
        cResult[8] = tmp22;
        let tmp21 = tmp22;
      } else {
        tmp21 = cResult[8];
      }
      if (cResult[9] !== safetyHubClassification.classification) {
        class A {
          constructor() {
            return closure_1_4.getAppealClassificationId();
          }
        }
        const tmp28 = closure_8(AppealIngestionPolicySummaryDefault, { classification: null });
        cResult[9] = safetyHubClassification.classification;
        cResult[10] = tmp28;
        let tmp25 = tmp28;
        const obj4 = { classification: null };
      } else {
        tmp25 = cResult[10];
      }
      if (cResult[11] === emitAppealIngestionEvent) {
        if (cResult[12] === isCoppa) {
          let tmp29 = cResult[13];
        }
        if (cResult[14] === emitAppealIngestionEvent) {
          if (cResult[15] === isCoppa) {
            if (cResult[16] === isSpam) {
              let tmp35 = cResult[17];
            }
            if (cResult[18] === emitAppealIngestionEvent) {
              if (cResult[19] === isDeveloperClassification) {
                let tmp41 = cResult[20];
              }
              if (cResult[21] === emitAppealIngestionEvent) {
                if (cResult[22] === isCoppa) {
                  if (cResult[23] === str) {
                    let tmp43 = cResult[24];
                  }
                  if (cResult[25] !== isDsaEligible) {
                    let tmp46 = isDsaEligible;
                    if (isDsaEligible) {
                      const obj5 = { variant: "text-xs/normal", children: null };
                      class A {
                        constructor() {
                          return closure_1_4.getAppealClassificationId();
                        }
                      }
                      obj5.children = obj11.format(tmp(1126).t.WMUgCX, {});
                      tmp46 = closure_8(tmp(4892).Text, obj5);
                    }
                    class A {
                      constructor() {
                        return closure_1_4.getAppealClassificationId();
                      }
                    }
                    cResult[26] = tmp46;
                    let tmp45 = tmp46;
                  } else {
                    tmp45 = cResult[26];
                  }
                  if (cResult[27] === tmp4.container) {
                    if (cResult[28] === tmp35) {
                      if (cResult[29] === tmp41) {
                        if (cResult[30] === tmp43) {
                          if (cResult[31] === tmp45) {
                            if (cResult[32] === tmp21) {
                              if (cResult[33] === tmp25) {
                                if (cResult[34] === tmp29) {
                                  let tmp48 = cResult[35];
                                }
                                return tmp48;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  class A {
                    constructor() {
                      return closure_1_4.getAppealClassificationId();
                    }
                  }
                  const obj6 = { children: null };
                  const items1 = [tmp18];
                  const obj7 = { style: tmp4.container, children: null };
                  const items2 = [tmp21, tmp25, tmp29, tmp35, tmp41, tmp43, tmp45];
                  obj7.children = items2;
                  items1[1] = closure_9(View, obj7);
                  obj6.children = items1;
                  const tmp50 = closure_9(tmp(11511).AppealIngestionModalScreen, obj6);
                  cResult[27] = tmp4.container;
                  cResult[28] = tmp35;
                  cResult[29] = tmp41;
                  cResult[30] = tmp43;
                  cResult[31] = tmp45;
                  cResult[32] = tmp21;
                  cResult[33] = tmp25;
                  cResult[34] = tmp29;
                  cResult[35] = tmp50;
                  tmp48 = tmp50;
                }
              }
              class A {
                constructor() {
                  return closure_1_4.getAppealClassificationId();
                }
              }
              cResult[21] = emitAppealIngestionEvent;
              cResult[22] = isCoppa;
              cResult[23] = str;
              cResult[24] = !isCoppa;
              tmp43 = tmp44;
            }
            class A {
              constructor() {
                return closure_1_4.getAppealClassificationId();
              }
            }
            cResult[18] = emitAppealIngestionEvent;
            cResult[19] = isDeveloperClassification;
            cResult[20] = isDeveloperClassification;
            tmp41 = isDeveloperClassification;
          }
        }
        let tmp36 = isSpam;
        class A {
          constructor() {
            return closure_1_4.getAppealClassificationId();
          }
        }
        if (tmp36) {
          const obj8 = { text: null, url: null, onPress: null };
          class A {
            constructor() {
              return closure_1_4.getAppealClassificationId();
            }
          }
          const intl4 = tmp(1126).intl;
          obj8.text = intl4.string(tmp(1126).t.NBsJvm);
          obj8.url = constants.SPAM_LINK;
          obj8.onPress = function onPress() {
            return emitAppealIngestionEvent(hasOwnProperty.ClickSpamWebformLink);
          };
          tmp36 = closure_8(tmp39, obj8);
        }
        cResult[14] = emitAppealIngestionEvent;
        cResult[15] = isCoppa;
        cResult[16] = isSpam;
        cResult[17] = tmp36;
        tmp35 = tmp36;
      }
      let tmp30 = isCoppa;
      if (isCoppa) {
        const obj9 = { text: null, url: null, onPress: null };
        class A {
          constructor() {
            return closure_1_4.getAppealClassificationId();
          }
        }
        const intl3 = tmp(1126).intl;
        obj9.text = intl3.string(tmp(1126).t["gJs+kf"]);
        obj9.url = constants.AGE_VERIFICATION_LINK;
        obj9.onPress = function onPress() {
          return emitAppealIngestionEvent(hasOwnProperty.ClickAgeVerificationLink);
        };
        tmp30 = closure_8(tmp33, obj9);
      }
      cResult[11] = emitAppealIngestionEvent;
      cResult[12] = isCoppa;
      cResult[13] = tmp30;
      tmp29 = tmp30;
      const tmpResult4 = emitAppealIngestionEvent(11513);
    }
  : (arg0) => {
      ({ isCoppa, isSpam, isDeveloperClassification } = arg0);
      _require = undefined;
      const tmp = closure_10();
      const items = [SafetyHubStore];
      let stateFromStores = require("initialize").useStateFromStores(items, () =>
        appealClassificationId.getAppealClassificationId(),
      );
      const obj = require("initialize");
      if (stateFromStores == null) {
        stateFromStores = EMPTY_STRING_SNOWFLAKE_ID;
      }
      const safetyHubClassification =
        require("useSafetyHubClassifications").useSafetyHubClassification(stateFromStores);
      const obj2 = require("useSafetyHubClassifications");
      _require = require("useEmitAppealIngestionEvent").useEmitAppealIngestionEvent();
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
      const tmp2Result = require("useEmitAppealIngestionEvent");
      const intl2 = tmp2(1126).intl;
      const stringResult = intl.string(require("util").t["C5q+pW"]);
      const items1 = [
        closure_8(require("AppealIngestionModal").AppealIngestionModalHeader, {
          headerText: stringResult,
          subHeaderText: intl2.string(require("util").t.URt7VI),
        }),
      ];
      const obj3 = { style: tmp.container, children: null };
      let tmp9Result = flagged_content.length > 0;
      if (tmp9Result) {
        const obj4 = { flaggedContent: flagged_content };
        tmp9Result = closure_8(AppealIngestionActivitySummaryDefault, obj4);
      }
      const items2 = [
        tmp9Result,
        closure_8(AppealIngestionPolicySummaryDefault, { classification: safetyHubClassification.classification }),
        ,
        ,
        ,
        ,
      ];
      let tmp9Result3 = isCoppa;
      if (isCoppa) {
        const obj6 = { text: null, url: null, onPress: null };
        const intl3 = tmp2(1126).intl;
        obj6.text = intl3.string(tmp2(1126).t["gJs+kf"]);
        obj6.url = constants.AGE_VERIFICATION_LINK;
        obj6.onPress = function onPress() {
          return closure_0(hasOwnProperty.ClickAgeVerificationLink);
        };
        tmp9Result3 = closure_8(AppealIngestionExternalLinkDefault, obj6);
        const tmp13Result = AppealIngestionExternalLinkDefault;
      }
      items2[2] = tmp9Result3;
      if (isSpam) {
        isSpam = !isCoppa;
      }
      if (isSpam) {
        const obj7 = { text: null, url: null, onPress: null };
        const intl4 = tmp2(1126).intl;
        obj7.text = intl4.string(tmp2(1126).t.NBsJvm);
        obj7.url = constants.SPAM_LINK;
        obj7.onPress = function onPress() {
          return closure_0(hasOwnProperty.ClickSpamWebformLink);
        };
        isSpam = closure_8(AppealIngestionExternalLinkDefault, obj7);
        const tmp13Result4 = AppealIngestionExternalLinkDefault;
      }
      items2[3] = isSpam;
      if (isDeveloperClassification) {
        const obj8 = { text: null, url: null, onPress: null };
        const intl5 = tmp2(1126).intl;
        obj8.text = intl5.string(tmp2(1126).t.n9cZTH);
        obj8.url = constants.APP_APPEAL_LINK;
        obj8.onPress = function onPress() {
          return closure_0(hasOwnProperty.ClickAppAppealLink);
        };
        isDeveloperClassification = closure_8(AppealIngestionExternalLinkDefault, obj8);
        const tmp13Result5 = AppealIngestionExternalLinkDefault;
      }
      items2[4] = isDeveloperClassification;
      let tmp9Result4 = !isCoppa;
      if (!isCoppa) {
        const obj9 = { text: null, url: null, onPress: null };
        const intl6 = tmp2(1126).intl;
        obj9.text = intl6.string(tmp2(1126).t["Vtyn/7"]);
        obj9.url = str;
        obj9.onPress = function onPress() {
          return closure_0(hasOwnProperty.ClickLearnMoreLink);
        };
        tmp9Result4 = closure_8(AppealIngestionExternalLinkDefault, obj9);
        const tmp13Result6 = AppealIngestionExternalLinkDefault;
      }
      items2[5] = tmp9Result4;
      if (isDsaEligible) {
        const obj10 = { variant: "text-xs/normal", children: null };
        const intl7 = tmp2(1126).intl;
        obj10.children = intl7.format(tmp2(1126).t.WMUgCX, {});
        isDsaEligible = closure_8(tmp2(4892).Text, obj10);
      }
      const obj11 = { children: null };
      items2[6] = isDsaEligible;
      obj3.children = items2;
      items1[1] = closure_9(View, obj3);
      obj11.children = items1;
      return closure_9(require("AppealIngestionModal").AppealIngestionModalScreen, obj11);
    };
