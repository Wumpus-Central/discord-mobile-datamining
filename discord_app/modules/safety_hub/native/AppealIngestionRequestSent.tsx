// discord_app/modules/safety_hub/native/AppealIngestionRequestSent.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import SafetyHubView from "SafetyHubView";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ SafetyHubAnalyticsActions: c5, SafetyHubLinks: closure_6 } = SafetyHubView);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let closure_9 = createCacheKey.createStyles({ container: { flex: 1, padding: 8 }, actionsHeader: { marginTop: 31, marginBottom: 16 }, checkboxPng: { width: 86, height: 78.33, marginLeft: -2, alignSelf: "center" } });
const result = require("SafetyHubView").fileFinishedImporting("modules/safety_hub/native/AppealIngestionRequestSent.tsx");

export default function AppealIngestionRequestSent() {
  let obj = _require("../hooks/useEmitAppealIngestionEvent.tsx");
  _require = obj.useEmitAppealIngestionEvent();
  const tmp = callback3();
  const intl = _require("../../../intl/index.native.tsx").intl;
  const intl2 = _require("../../../intl/index.native.tsx").intl;
  const stringResult = intl.string(_require("../../../intl/index.native.tsx").t.QMbTSu);
  obj = { children: null };
  obj = { style: tmp.container, children: null };
  const obj1 = { source: null, style: null };
  obj1[0] = require("../../../../_runtime/11224_registerAsset.js");
  obj1[1] = tmp.checkboxPng;
  const items = [callback(closure_4, obj1), callback(_require("AppealIngestionModal.tsx").AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: intl2.string(_require("../../../intl/index.native.tsx").t.Qdx8AP) }), , , ];
  const obj2 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", style: tmp.actionsHeader, children: null };
  const intl3 = _require("../../../intl/index.native.tsx").intl;
  obj2[3] = intl3.string(_require("../../../intl/index.native.tsx").t["9BRc1N"]);
  items[2] = callback(_require("../../../design/components/Text/native/Text.tsx").Text, obj2);
  const obj3 = { text: null, url: null, onPress: null };
  const stringResult1 = intl2.string(_require("../../../intl/index.native.tsx").t.Qdx8AP);
  const intl4 = _require("../../../intl/index.native.tsx").intl;
  obj3[0] = intl4.string(_require("../../../intl/index.native.tsx").t.PxL38B);
  obj3[1] = constants.COMMUNITY_GUIDELINES;
  obj3[2] = function onPress() {
    return callback(outer1_5.ClickCommunityGuidelinesLink);
  };
  items[3] = callback(require("AppealIngestionExternalLink.tsx"), obj3);
  const obj4 = { text: null, url: null, onPress: null };
  const tmp4 = require("AppealIngestionExternalLink.tsx");
  const intl5 = _require("../../../intl/index.native.tsx").intl;
  obj4[0] = intl5.string(_require("../../../intl/index.native.tsx").t.qC3XKa);
  obj4[1] = constants.WARNING_SYSTEM_HELPCENTER_LINK;
  obj4[2] = function onPress() {
    return callback(outer1_5.ClickWarningSystemHelpcenterLink);
  };
  items[4] = callback(require("AppealIngestionExternalLink.tsx"), obj4);
  obj[1] = items;
  obj[0] = callback2(closure_3, obj);
  return callback(_require("AppealIngestionModal.tsx").AppealIngestionModalScreen, obj);
};