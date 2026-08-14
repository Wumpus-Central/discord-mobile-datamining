// discord_app/modules/safety_hub/native/AppealIngestionRequestSent.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import SafetyHubView from "SafetyHubView";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../_runtime/11379_registerAsset.js";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { useEmitAppealIngestionEvent } from "../hooks/useEmitAppealIngestionEvent.tsx";
import { AppealIngestionExternalLink } from "AppealIngestionExternalLink.tsx";
import { AppealIngestionModal } from "AppealIngestionModal.tsx";

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
  let obj = _useEmitAppealIngestionEvent;
  _require = obj.useEmitAppealIngestionEvent();
  const tmp = callback3();
  const intl = _getSystemLocale.intl;
  const intl2 = _getSystemLocale.intl;
  const stringResult = intl.string(_getSystemLocale.t.QMbTSu);
  obj = { children: null };
  obj = { style: tmp.container, children: null };
  const obj1 = { source: null, style: null };
  obj1[0] = registerAsset;
  obj1[1] = tmp.checkboxPng;
  const items = [callback(closure_4, obj1), callback(_AppealIngestionModal.AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: intl2.string(_getSystemLocale.t.Qdx8AP) }), , , ];
  const obj2 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", style: tmp.actionsHeader, children: null };
  const intl3 = _getSystemLocale.intl;
  obj2[3] = intl3.string(_getSystemLocale.t["9BRc1N"]);
  items[2] = callback(_Text.Text, obj2);
  const obj3 = { text: null, url: null, onPress: null };
  const stringResult1 = intl2.string(_getSystemLocale.t.Qdx8AP);
  const intl4 = _getSystemLocale.intl;
  obj3[0] = intl4.string(_getSystemLocale.t.PxL38B);
  obj3[1] = constants.COMMUNITY_GUIDELINES;
  obj3[2] = function onPress() {
    return callback(outer1_5.ClickCommunityGuidelinesLink);
  };
  items[3] = callback(AppealIngestionExternalLink, obj3);
  const obj4 = { text: null, url: null, onPress: null };
  const tmp4 = AppealIngestionExternalLink;
  const intl5 = _getSystemLocale.intl;
  obj4[0] = intl5.string(_getSystemLocale.t.qC3XKa);
  obj4[1] = constants.WARNING_SYSTEM_HELPCENTER_LINK;
  obj4[2] = function onPress() {
    return callback(outer1_5.ClickWarningSystemHelpcenterLink);
  };
  items[4] = callback(AppealIngestionExternalLink, obj4);
  obj[1] = items;
  obj[0] = callback2(closure_3, obj);
  return callback(_AppealIngestionModal.AppealIngestionModalScreen, obj);
};