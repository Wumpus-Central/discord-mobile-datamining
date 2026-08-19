// === Module 12088: ReportAppProfile ===

// Module 12088 (ReportAppProfile)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import Text from "Text" /* 4734 */;
import fetchApplication from "fetchApplication" /* 7140 */;
import ActionSheet from "ActionSheet" /* 7175 */;
import ActionSheetRowIcon from "ActionSheetRowIcon" /* 7177 */;
import _submitHamReportForFirstDM from "_submitHamReportForFirstDM" /* 8136 */;
import addApplication from "addApplication" /* 4478 */;
import jsxProd from "jsxProd" /* 21 */;

require = fn;
function ReportAppProfile(arg0) {
  ({ user: require, contextualGuildId: importDefault, onSubmit: dependencyMap, appContext: closure_3 } = arg0);
  let obj = { variant: "heading-md/semibold", children: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.eyEkG1);
  obj[0] = callback(Text.Text, obj);
  obj = { variant: "text-xs/medium", children: null };
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.ptItsj);
  obj[1] = callback(Text.Text, obj);
  obj[2] = function onPress() {
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet(BotReportChooser);
    const result = _submitHamReportForFirstDM.showReportModalForUser(closure_0, closure_1, closure_2, closure_3);
  };
  return callback(ActionSheetRowIcon.ActionSheetRow, obj);
}
function ReportAppBehavior(arg0) {
  ({ user: require, entrypoint: importDefault, contextualGuildId: dependencyMap, contextualChannelId: closure_3, onSubmit: closure_4, appContext: closure_5 } = arg0);
  let obj = initialize;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_3.getAppIdForBotUserId(id.id));
  obj1 = fetchApplication;
  const data = obj1.useApplication(stateFromStores).data;
  obj = { variant: "heading-md/semibold", children: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.atP0yX);
  obj[0] = callback(Text.Text, obj);
  obj1 = { variant: "text-xs/medium", children: null };
  const intl2 = getSystemLocale.intl;
  obj1[1] = intl2.string(getSystemLocale.t.UGg603);
  obj[1] = callback(Text.Text, obj1);
  obj[2] = function onPress() {
    if (null != data) {
      let obj = ACTION_SHEET_HEIGHT_HALFDefault;
      obj.hideActionSheet(data);
      obj = { application: null, entrypoint: null, contextualGuildId: null, contextualChannelId: null, onSubmit: null, appContext: null };
      obj[0] = tmp;
      obj[1] = closure_1;
      obj[2] = closure_2;
      obj[3] = closure_3;
      obj[4] = closure_4;
      obj[5] = closure_5;
      const result = _submitHamReportForFirstDM.showReportModalForApp(obj);
    }
  };
  obj[4] = null == data;
  return callback(ActionSheetRowIcon.ActionSheetRow, obj);
}
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const BotReportChooser = "BotReportChooser";
let result = require("obj132").fileFinishedImporting("modules/in_app_reports/native/BotReportChooser.tsx");

export default function BotReportChooser(arg0) {
  let obj = { style: { textAlign: "center" }, variant: "redesign/heading-18/bold", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.Bd10bR);
  obj[0] = callback(Text.Text, obj);
  obj = { hasIcons: false, children: null };
  const merged = Object.assign(arg0);
  const items = [callback(ReportAppProfile, {}), ];
  const merged1 = Object.assign(arg0);
  items[1] = callback(ReportAppBehavior, {});
  obj[1] = items;
  obj[1] = callback2(ActionSheetRowIcon.ActionSheetRow.Group, obj);
  return callback(ActionSheet.ActionSheet, obj);
};
export const BOT_REPORT_CHOOSER_KEY = "BotReportChooser";