// discord_app/modules/safety_hub/native/AppealIngestionRequestSent.tsx
import AppealIngestionExternalLinkDefault from "AppealIngestionExternalLink.tsx";
import _modDef11906 from "../../../../_runtime/metro/11906__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const SafetyHubConstants = fn(8419);
({ SafetyHubAnalyticsActions: hasOwnProperty, SafetyHubLinks: metroRequire } = SafetyHubConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({
  container: { flex: 1, padding: 8 },
  actionsHeader: { marginTop: 31, marginBottom: 16 },
  checkboxPng: { width: 86, height: 78.33, marginLeft: -2, alignSelf: "center" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionRequestSent.tsx");

export default function AppealIngestionRequestSent() {
  let obj = require("useEmitAppealIngestionEvent");
  _require = obj.useEmitAppealIngestionEvent();
  const tmp = closure_9();
  const intl = require("util").intl;
  const intl2 = require("util").intl;
  const stringResult = intl.string(require("util").t.QMbTSu);
  obj = { children: null };
  obj = { style: tmp.container, children: null };
  const stringResult1 = intl2.string(require("util").t.Qdx8AP);
  const items = [
    closure_7(closure_4, { source: _modDef11906, style: tmp.checkboxPng }),
    closure_7(require("AppealIngestionModal").AppealIngestionModalHeader, {
      headerText: stringResult,
      subHeaderText: stringResult1,
    }),
    ,
    ,
  ];
  const obj2 = {
    variant: "heading-md/bold",
    color: "mobile-text-heading-primary",
    style: tmp.actionsHeader,
    children: null,
  };
  const intl3 = require("util").intl;
  obj2.children = intl3.string(require("util").t["9BRc1N"]);
  items[2] = closure_7(require("Text/Text").Text, obj2);
  const obj3 = { text: null, url: null, onPress: null };
  const obj1 = { source: _modDef11906, style: tmp.checkboxPng };
  const intl4 = require("util").intl;
  obj3.text = intl4.string(require("util").t.PxL38B);
  obj3.url = constants.COMMUNITY_GUIDELINES;
  obj3.onPress = function onPress() {
    return closure_0(hasOwnProperty.ClickCommunityGuidelinesLink);
  };
  items[3] = closure_7(AppealIngestionExternalLinkDefault, obj3);
  const obj4 = { text: null, url: null, onPress: null };
  const intl5 = require("util").intl;
  obj4.text = intl5.string(require("util").t.qC3XKa);
  obj4.url = constants.WARNING_SYSTEM_HELPCENTER_LINK;
  obj4.onPress = function onPress() {
    return closure_0(hasOwnProperty.ClickWarningSystemHelpcenterLink);
  };
  items[4] = closure_7(AppealIngestionExternalLinkDefault, obj4);
  obj.children = items;
  obj.children = closure_8(closure_3, obj);
  return closure_7(require("AppealIngestionModal").AppealIngestionModalScreen, obj);
}
