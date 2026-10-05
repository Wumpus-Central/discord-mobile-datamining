// === Module 11517: AppealIngestionRequestSent ===

// Module 11517 (AppealIngestionRequestSent)
import AppealIngestionExternalLinkDefault from "AppealIngestionExternalLink" /* 11512 */;
import AssetRegistryDefault from "AssetRegistry" /* 11518 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SafetyHubConstants from "SafetyHubConstants" /* 8093 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ View: c3, Image: closure_4 } = react_native);
({ SafetyHubAnalyticsActions: hasOwnProperty, SafetyHubLinks: metroRequire } = SafetyHubConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ container: { flex: 1, padding: 8 }, actionsHeader: { marginTop: 31, marginBottom: 16 }, checkboxPng: { width: 86, height: 78.33, marginLeft: -2, alignSelf: "center" } });
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let emitAppealIngestionEvent;
  let first;
  let items;
  let obj9;
  let tmp10;
  let tmp15;
  let tmp18;
  let tmp20;
  let tmp23;
  let tmp25;
  let tmp30;
  let tmp32;
  let tmp8;
  const obj = emitAppealIngestionEvent(576);
  const cResult = obj.c(20);
  const obj2 = emitAppealIngestionEvent(11500);
  emitAppealIngestionEvent = obj2.useEmitAppealIngestionEvent();
  const tmp5 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(emitAppealIngestionEvent(1126).t.QMbTSu);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(emitAppealIngestionEvent(1126).t.Qdx8AP);
    cResult[1] = stringResult1;
    tmp8 = stringResult1;
  } else {
    tmp8 = cResult[1];
  }
  const container = tmp5.container;
  if (cResult[2] !== tmp5.checkboxPng) {
    const obj3 = { source: AssetRegistryDefault, style: tmp5.checkboxPng };
    const tmp14 = closure_7(closure_4, obj3);
    cResult[2] = tmp5.checkboxPng;
    cResult[3] = tmp14;
    tmp10 = tmp14;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { headerText: first, subHeaderText: tmp8 };
    const tmp17 = closure_7(emitAppealIngestionEvent(11498).AppealIngestionModalHeader, obj4);
    cResult[4] = tmp17;
    tmp15 = tmp17;
  } else {
    tmp15 = cResult[4];
  }
  const actionsHeader = tmp5.actionsHeader;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult2 = intl3.string(emitAppealIngestionEvent(1126).t["9BRc1N"]);
    cResult[5] = stringResult2;
    tmp18 = stringResult2;
  } else {
    tmp18 = cResult[5];
  }
  if (cResult[6] !== tmp5.actionsHeader) {
    const obj5 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", style: actionsHeader, children: tmp18 };
    const tmp22 = closure_7(emitAppealIngestionEvent(4886).Text, obj5);
    cResult[6] = tmp5.actionsHeader;
    cResult[7] = tmp22;
    tmp20 = tmp22;
  } else {
    tmp20 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = tmp(1126).intl;
    const stringResult3 = intl4.string(emitAppealIngestionEvent(1126).t.PxL38B);
    cResult[8] = stringResult3;
    tmp23 = stringResult3;
  } else {
    tmp23 = cResult[8];
  }
  if (cResult[9] !== emitAppealIngestionEvent) {
    const obj6 = {
      text: tmp23,
      url: constants.COMMUNITY_GUIDELINES,
      onPress() {
          return emitAppealIngestionEvent(hasOwnProperty.ClickCommunityGuidelinesLink);
        }
    };
    const tmp29 = closure_7(AppealIngestionExternalLinkDefault, obj6);
    cResult[9] = emitAppealIngestionEvent;
    cResult[10] = tmp29;
    tmp25 = tmp29;
  } else {
    tmp25 = cResult[10];
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    const intl5 = tmp(1126).intl;
    const stringResult4 = intl5.string(emitAppealIngestionEvent(1126).t.qC3XKa);
    cResult[11] = stringResult4;
    tmp30 = stringResult4;
  } else {
    tmp30 = cResult[11];
  }
  if (cResult[12] !== emitAppealIngestionEvent) {
    const obj7 = {
      text: tmp30,
      url: constants.WARNING_SYSTEM_HELPCENTER_LINK,
      onPress() {
          return emitAppealIngestionEvent(hasOwnProperty.ClickWarningSystemHelpcenterLink);
        }
    };
    const tmp36 = closure_7(AppealIngestionExternalLinkDefault, obj7);
    cResult[12] = emitAppealIngestionEvent;
    cResult[13] = tmp36;
    tmp32 = tmp36;
  } else {
    tmp32 = cResult[13];
  }
  if (cResult[14] === tmp5.container) {
    if (cResult[15] === tmp32) {
      if (cResult[16] === tmp10) {
        if (cResult[17] === tmp20) {
          let tmp37;
          if (cResult[18] === tmp25) {
            tmp37 = cResult[19];
          }
          return tmp37;
        }
      }
    }
  }
  const obj8 = { children: closure_8(closure_3, obj9) };
  obj9 = { style: container, children: items };
  items = [tmp10, tmp15, tmp20, tmp25, tmp32];
  const AppealIngestionModalScreen = tmp(11498).AppealIngestionModalScreen;
  const tmp38 = closure_7(AppealIngestionModalScreen, obj8);
  cResult[14] = tmp5.container;
  cResult[15] = tmp32;
  cResult[16] = tmp10;
  cResult[17] = tmp20;
  cResult[18] = tmp25;
  cResult[19] = tmp38;
  tmp37 = tmp38;
}) : (() => {
  let closure_0;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let obj3;
  const obj = require("useEmitAppealIngestionEvent");
  _require = obj.useEmitAppealIngestionEvent();
  const tmp = closure_9();
  const intl = require("intl").intl;
  const stringResult = intl.string(require("intl").t.QMbTSu);
  const intl2 = require("intl").intl;
  const obj2 = { children: closure_8(closure_3, obj3) };
  obj3 = { style: tmp.container, children: items };
  const obj4 = { source: AssetRegistryDefault, style: tmp.checkboxPng };
  const stringResult1 = intl2.string(require("intl").t.Qdx8AP);
  const AppealIngestionModalScreen = require("AppealIngestionModal").AppealIngestionModalScreen;
  items = [closure_7(closure_4, obj4), closure_7(require("AppealIngestionModal").AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: stringResult1 }), , , ];
  const obj5 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", style: tmp.actionsHeader, children: intl3.string(require("intl").t["9BRc1N"]) };
  const Text = require("Text/Text").Text;
  intl3 = require("intl").intl;
  items[2] = closure_7(Text, obj5);
  const obj6 = {
    text: intl4.string(require("intl").t.PxL38B),
    url: constants.COMMUNITY_GUIDELINES,
    onPress() {
      return closure_0(hasOwnProperty.ClickCommunityGuidelinesLink);
    }
  };
  const tmp4 = AppealIngestionExternalLinkDefault;
  intl4 = require("intl").intl;
  items[3] = closure_7(tmp4, obj6);
  const obj7 = {
    text: intl5.string(require("intl").t.qC3XKa),
    url: constants.WARNING_SYSTEM_HELPCENTER_LINK,
    onPress() {
      return closure_0(hasOwnProperty.ClickWarningSystemHelpcenterLink);
    }
  };
  const tmp5 = AppealIngestionExternalLinkDefault;
  intl5 = require("intl").intl;
  items[4] = closure_7(tmp5, obj7);
  return closure_7(AppealIngestionModalScreen, obj2);
});
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionRequestSent.tsx");

export default tmp6;