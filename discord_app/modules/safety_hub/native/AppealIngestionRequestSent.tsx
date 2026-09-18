// === Module 12149: AppealIngestionRequestSent ===

// Module 12149 (AppealIngestionRequestSent)
import AppealIngestionExternalLinkDefault from "AppealIngestionExternalLink" /* 12144 */;
import _modDef12150 from "module_12150" /* 12150 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const SafetyHubConstants = fn(8652);
({ SafetyHubAnalyticsActions: hasOwnProperty, SafetyHubLinks: metroRequire } = SafetyHubConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4722);
let closure_9 = createStyles.createStyles({ container: { flex: 1, padding: 8 }, actionsHeader: { marginTop: 31, marginBottom: 16 }, checkboxPng: { width: 86, height: 78.33, marginLeft: -2, alignSelf: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionRequestSent.tsx");

export default function AppealIngestionRequestSent() {
  _require = require("useEmitAppealIngestionEvent").useEmitAppealIngestionEvent();
  const tmp = closure_9();
  const intl = require("util").intl;
  const obj = require("useEmitAppealIngestionEvent");
  const intl2 = require("util").intl;
  const stringResult = intl.string(require("util").t.QMbTSu);
  const obj2 = { children: null };
  const obj3 = { style: tmp.container, children: null };
  const stringResult1 = intl2.string(require("util").t.Qdx8AP);
  const items = [closure_7(closure_4, { source: _modDef12150, style: tmp.checkboxPng }), closure_7(require("AppealIngestionModal").AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: stringResult1 }), , , ];
  const obj5 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", style: tmp.actionsHeader, children: null };
  const intl3 = require("util").intl;
  obj5.children = intl3.string(require("util").t["9BRc1N"]);
  items[2] = closure_7(require("Text/Text").Text, obj5);
  const obj6 = { text: null, url: null, onPress: null };
  const obj4 = { source: _modDef12150, style: tmp.checkboxPng };
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