// discord_app/modules/safety_hub/native/AppealIngestionRequestSent.tsx
import noopAll from "noop" /* 19 */;
import AppealIngestionExternalLinkDefault from "AppealIngestionExternalLink" /* 11086 */;
import registerAssetDefault from "registerAsset" /* 11092 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import SafetyHubView from "SafetyHubView" /* 5438 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { useEmitAppealIngestionEvent } from "../hooks/useEmitAppealIngestionEvent.tsx";
import { AppealIngestionModal } from "AppealIngestionModal.tsx";

const require = arg1;
noopAll;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ SafetyHubAnalyticsActions: c5, SafetyHubLinks: closure_6 } = SafetyHubView);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles({ container: { flex: 1, padding: 8 }, actionsHeader: { marginTop: 31, marginBottom: 16 }, checkboxPng: { width: 86, height: 78.33, marginLeft: -2, alignSelf: "center" } });
const result = require("set").fileFinishedImporting("modules/safety_hub/native/AppealIngestionRequestSent.tsx");

export default function AppealIngestionRequestSent() {
  let obj = _useEmitAppealIngestionEvent;
  _require = obj.useEmitAppealIngestionEvent();
  const tmp = callback3();
  const intl = _getSystemLocale.intl;
  const intl2 = _getSystemLocale.intl;
  const stringResult = intl.string(_getSystemLocale.t.QMbTSu);
  obj = { children: null };
  obj = { style: tmp.container, children: null };
  const stringResult1 = intl2.string(_getSystemLocale.t.Qdx8AP);
  const items = [callback(closure_4, { source: registerAssetDefault, style: tmp.checkboxPng }), callback(_AppealIngestionModal.AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: stringResult1 }), , , ];
  const obj2 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", style: tmp.actionsHeader, children: null };
  const intl3 = _getSystemLocale.intl;
  obj2[3] = intl3.string(_getSystemLocale.t["9BRc1N"]);
  items[2] = callback(_Text.Text, obj2);
  const obj3 = { text: null, url: null, onPress: null };
  obj1 = { source: registerAssetDefault, style: tmp.checkboxPng };
  const intl4 = _getSystemLocale.intl;
  obj3[0] = intl4.string(_getSystemLocale.t.PxL38B);
  obj3[1] = constants.COMMUNITY_GUIDELINES;
  obj3[2] = function onPress() {
    return callback(closure_1_5.ClickCommunityGuidelinesLink);
  };
  items[3] = callback(AppealIngestionExternalLinkDefault, obj3);
  const obj4 = { text: null, url: null, onPress: null };
  const tmp4 = AppealIngestionExternalLinkDefault;
  const intl5 = _getSystemLocale.intl;
  obj4[0] = intl5.string(_getSystemLocale.t.qC3XKa);
  obj4[1] = constants.WARNING_SYSTEM_HELPCENTER_LINK;
  obj4[2] = function onPress() {
    return callback(closure_1_5.ClickWarningSystemHelpcenterLink);
  };
  items[4] = callback(AppealIngestionExternalLinkDefault, obj4);
  obj[1] = items;
  obj[0] = callback2(closure_3, obj);
  return callback(_AppealIngestionModal.AppealIngestionModalScreen, obj);
};