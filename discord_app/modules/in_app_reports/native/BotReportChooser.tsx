// === Module 12991: BotReportChooser ===

// Module 12991 (BotReportChooser)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 7163 */;
import ActionSheet from "ActionSheet" /* 7198 */;
import ActionSheetRow from "ActionSheetRow" /* 7200 */;
import ReportModals from "ReportModals" /* 8629 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;

require = fn;
function ReportAppProfile(arg0) {
  ({ user: require, contextualGuildId: importDefault, onSubmit: dependencyMap, appContext: ApplicationStore } = arg0);
  let obj = { label: null, subLabel: null, onPress: null, arrow: true };
  obj = { variant: "heading-md/semibold", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.eyEkG1);
  obj.label = closure_4(Text_Text.Text, obj);
  obj = { variant: "text-xs/medium", children: null };
  const intl2 = util.intl;
  obj.children = intl2.string(util.t.ptItsj);
  obj.subLabel = closure_4(Text_Text.Text, obj);
  obj.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet(BotReportChooser);
    const result = ReportModals.showReportModalForUser(closure_1_0, closure_1_1, dependencyMap, ApplicationStore);
  };
  return closure_4(ActionSheetRow.ActionSheetRow, obj);
}
function ReportAppBehavior(arg0) {
  ({ user: require, entrypoint: importDefault, contextualGuildId: dependencyMap, contextualChannelId: ApplicationStore, onSubmit: closure_4, appContext: closure_5 } = arg0);
  let obj = initialize;
  const items = [ApplicationStore];
  const stateFromStores = obj.useStateFromStores(items, () => ApplicationStore.getAppIdForBotUserId(id.id));
  let obj1 = ApplicationActionCreators;
  const data = obj1.useApplication(stateFromStores).data;
  obj = { label: null, subLabel: null, onPress: null, arrow: true, disabled: null };
  obj = { variant: "heading-md/semibold", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.atP0yX);
  obj.label = onSubmit(Text_Text.Text, obj);
  obj1 = { variant: "text-xs/medium", children: null };
  const intl2 = util.intl;
  obj1.children = intl2.string(util.t.UGg603);
  obj.subLabel = onSubmit(Text_Text.Text, obj1);
  obj.onPress = function onPress() {
    if (null != data) {
      let obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(BotReportChooser);
      obj = { application: tmp, entrypoint, contextualGuildId, contextualChannelId, onSubmit, appContext };
      const result = ReportModals.showReportModalForApp(obj);
    }
  };
  obj.disabled = null == data;
  return onSubmit(ActionSheetRow.ActionSheetRow, obj);
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const BotReportChooser = "BotReportChooser";
const size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_reports/native/BotReportChooser.tsx");

export default function BotReportChooser(arg0) {
  let obj = { header: null, children: null };
  obj = { style: { textAlign: "center" }, variant: "redesign/heading-18/bold", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.Bd10bR);
  obj.header = React4(Text_Text.Text, obj);
  obj = { hasIcons: false, children: null };
  const merged = Object.assign(arg0);
  const items = [React4(ReportAppProfile, {}), ];
  const merged1 = Object.assign(arg0);
  items[1] = React4(ReportAppBehavior, {});
  obj.children = items;
  obj.children = hasOwnProperty(ActionSheetRow.ActionSheetRow.Group, obj);
  return React4(ActionSheet.ActionSheet, obj);
};
export const BOT_REPORT_CHOOSER_KEY = "BotReportChooser";