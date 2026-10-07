// discord_app/modules/safety_hub/native/AppealIngestionRequestSent.tsx
import AppealIngestionExternalLinkDefault from "AppealIngestionExternalLink.tsx";
import _modDef11531 from "../../../../_runtime/metro/11531__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const SafetyHubConstants = fn(8126);
({ SafetyHubAnalyticsActions: hasOwnProperty, SafetyHubLinks: metroRequire } = SafetyHubConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4896);
let closure_9 = createStyles.createStyles({
  container: { flex: 1, padding: 8 },
  actionsHeader: { marginTop: 31, marginBottom: 16 },
  checkboxPng: { width: 86, height: 78.33, marginLeft: -2, alignSelf: "center" },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionRequestSent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = emitAppealIngestionEvent(576).c(20);
      const obj = emitAppealIngestionEvent(576);
      emitAppealIngestionEvent = emitAppealIngestionEvent(11513).useEmitAppealIngestionEvent();
      const tmp5 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.QMbTSu);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(tmp(1126).t.Qdx8AP);
        cResult[1] = stringResult1;
        let tmp8 = stringResult1;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] !== tmp5.checkboxPng) {
        const obj3 = { source: _modDef11531, style: tmp5.checkboxPng };
        const tmp14 = closure_7(closure_4, obj3);
        cResult[2] = tmp5.checkboxPng;
        cResult[3] = tmp14;
        let tmp10 = tmp14;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { headerText: first, subHeaderText: tmp8 };
        const tmp17 = closure_7(tmp(11511).AppealIngestionModalHeader, obj4);
        cResult[4] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1126).intl;
        const stringResult2 = intl3.string(tmp(1126).t["9BRc1N"]);
        cResult[5] = stringResult2;
        let tmp18 = stringResult2;
      } else {
        tmp18 = cResult[5];
      }
      if (cResult[6] !== tmp5.actionsHeader) {
        const obj5 = {
          variant: "heading-md/bold",
          color: "mobile-text-heading-primary",
          style: tmp5.actionsHeader,
          children: tmp18,
        };
        const tmp22 = closure_7(tmp(4892).Text, obj5);
        cResult[6] = tmp5.actionsHeader;
        cResult[7] = tmp22;
        let tmp20 = tmp22;
      } else {
        tmp20 = cResult[7];
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = tmp(1126).intl;
        const stringResult3 = intl4.string(tmp(1126).t.PxL38B);
        cResult[8] = stringResult3;
        let tmp23 = stringResult3;
      } else {
        tmp23 = cResult[8];
      }
      if (cResult[9] !== emitAppealIngestionEvent) {
        const obj6 = {
          text: tmp23,
          url: constants.COMMUNITY_GUIDELINES,
          onPress() {
            return emitAppealIngestionEvent(hasOwnProperty.ClickCommunityGuidelinesLink);
          },
        };
        const tmp29 = closure_7(AppealIngestionExternalLinkDefault, obj6);
        cResult[9] = emitAppealIngestionEvent;
        cResult[10] = tmp29;
        let tmp25 = tmp29;
      } else {
        tmp25 = cResult[10];
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = tmp(1126).intl;
        const stringResult4 = intl5.string(tmp(1126).t.qC3XKa);
        cResult[11] = stringResult4;
        let tmp30 = stringResult4;
      } else {
        tmp30 = cResult[11];
      }
      if (cResult[12] !== emitAppealIngestionEvent) {
        const obj7 = {
          text: tmp30,
          url: constants.WARNING_SYSTEM_HELPCENTER_LINK,
          onPress() {
            return emitAppealIngestionEvent(hasOwnProperty.ClickWarningSystemHelpcenterLink);
          },
        };
        const tmp36 = closure_7(AppealIngestionExternalLinkDefault, obj7);
        cResult[12] = emitAppealIngestionEvent;
        cResult[13] = tmp36;
        let tmp32 = tmp36;
      } else {
        tmp32 = cResult[13];
      }
      if (cResult[14] === tmp5.container) {
        if (cResult[15] === tmp32) {
          if (cResult[16] === tmp10) {
            if (cResult[17] === tmp20) {
              if (cResult[18] === tmp25) {
                let tmp37 = cResult[19];
              }
              return tmp37;
            }
          }
        }
      }
      const obj8 = { children: null };
      const obj9 = { style: tmp5.container, children: null };
      const items = [tmp10, tmp15, tmp20, tmp25, tmp32];
      obj9.children = items;
      obj8.children = closure_8(closure_3, obj9);
      const tmp38 = closure_7(emitAppealIngestionEvent(11511).AppealIngestionModalScreen, obj8);
      cResult[14] = tmp5.container;
      cResult[15] = tmp32;
      cResult[16] = tmp10;
      cResult[17] = tmp20;
      cResult[18] = tmp25;
      cResult[19] = tmp38;
      tmp37 = tmp38;
      const obj2 = emitAppealIngestionEvent(11513);
    }
  : () => {
      _require = require("useEmitAppealIngestionEvent").useEmitAppealIngestionEvent();
      const tmp = closure_9();
      const intl = require("util").intl;
      const obj = require("useEmitAppealIngestionEvent");
      const intl2 = require("util").intl;
      const stringResult = intl.string(require("util").t.QMbTSu);
      const obj2 = { children: null };
      const obj3 = { style: tmp.container, children: null };
      const stringResult1 = intl2.string(require("util").t.Qdx8AP);
      const items = [
        closure_7(closure_4, { source: _modDef11531, style: tmp.checkboxPng }),
        closure_7(require("AppealIngestionModal").AppealIngestionModalHeader, {
          headerText: stringResult,
          subHeaderText: stringResult1,
        }),
        ,
        ,
      ];
      const obj5 = {
        variant: "heading-md/bold",
        color: "mobile-text-heading-primary",
        style: tmp.actionsHeader,
        children: null,
      };
      const intl3 = require("util").intl;
      obj5.children = intl3.string(require("util").t["9BRc1N"]);
      items[2] = closure_7(require("Text/Text").Text, obj5);
      const obj6 = { text: null, url: null, onPress: null };
      const obj4 = { source: _modDef11531, style: tmp.checkboxPng };
      const intl4 = require("util").intl;
      obj6.text = intl4.string(require("util").t.PxL38B);
      obj6.url = constants.COMMUNITY_GUIDELINES;
      obj6.onPress = function onPress() {
        return closure_0(hasOwnProperty.ClickCommunityGuidelinesLink);
      };
      items[3] = closure_7(AppealIngestionExternalLinkDefault, obj6);
      const obj7 = { text: null, url: null, onPress: null };
      const intl5 = require("util").intl;
      obj7.text = intl5.string(require("util").t.qC3XKa);
      obj7.url = constants.WARNING_SYSTEM_HELPCENTER_LINK;
      obj7.onPress = function onPress() {
        return closure_0(hasOwnProperty.ClickWarningSystemHelpcenterLink);
      };
      items[4] = closure_7(AppealIngestionExternalLinkDefault, obj7);
      obj3.children = items;
      obj2.children = closure_8(closure_3, obj3);
      return closure_7(require("AppealIngestionModal").AppealIngestionModalScreen, obj2);
    };
