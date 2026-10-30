// discord_app/modules/safety_hub/native/AppealIngestionRequestSent.tsx
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import AppealIngestionExternalLinkDefault from "AppealIngestionExternalLink.tsx";
import _modDef13295 from "../../../../_runtime/metro/13295__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const SafetyHubConstants = fn(7962);
({ SafetyHubAnalyticsActions: closure_4, SafetyHubLinks: hasOwnProperty } = SafetyHubConstants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5009);
let closure_8 = createStyles.createStyles({
  container: { flex: 1, padding: 8 },
  actionsHeader: { marginTop: 31, marginBottom: 16 },
  checkboxPng: { width: 86, height: 78.33, marginLeft: -2, alignSelf: "center" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionRequestSent.tsx");

export default function AppealIngestionRequestSent() {
  _require = require("useEmitAppealIngestionEvent").useEmitAppealIngestionEvent();
  const tmp = closure_8();
  const intl = require("util").intl;
  const obj = require("useEmitAppealIngestionEvent");
  const intl2 = require("util").intl;
  const stringResult = intl.string(require("util").t.QMbTSu);
  const obj2 = { children: null };
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { source: null, style: null };
  const stringResult1 = intl2.string(require("util").t.Qdx8AP);
  obj4.source = _modDef13295;
  obj4.style = tmp.checkboxPng;
  const items = [
    closure_6(FastImageDefault, obj4),
    closure_6(require("AppealIngestionModal").AppealIngestionModalHeader, {
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
  items[2] = closure_6(require("Text/Text").Text, obj5);
  const obj6 = { text: null, url: null, onPress: null };
  const intl4 = require("util").intl;
  obj6.text = intl4.string(require("util").t.PxL38B);
  obj6.url = constants.COMMUNITY_GUIDELINES;
  obj6.onPress = function onPress() {
    return closure_0(React4.ClickCommunityGuidelinesLink);
  };
  items[3] = closure_6(AppealIngestionExternalLinkDefault, obj6);
  const obj7 = { text: null, url: null, onPress: null };
  const intl5 = require("util").intl;
  obj7.text = intl5.string(require("util").t.qC3XKa);
  obj7.url = constants.WARNING_SYSTEM_HELPCENTER_LINK;
  obj7.onPress = function onPress() {
    return closure_0(React4.ClickWarningSystemHelpcenterLink);
  };
  items[4] = closure_6(AppealIngestionExternalLinkDefault, obj7);
  obj3.children = items;
  obj2.children = closure_7(View, obj3);
  return closure_6(require("AppealIngestionModal").AppealIngestionModalScreen, obj2);
}
