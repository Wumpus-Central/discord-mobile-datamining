// === Module 13127: BotReportChooser ===

// Module 13127 (BotReportChooser)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import Text_Text from "Text/Text" /* 4635 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 7270 */;
import ActionSheet from "ActionSheet" /* 7304 */;
import ActionSheetRow from "ActionSheetRow" /* 7306 */;
import ReportModals from "ReportModals" /* 8755 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 4867 */;

require = fn;
function ReportAppProfile(arg0) {
  ({ user: require, contextualGuildId: importDefault, onSubmit: dependencyMap, appContext: ApplicationStore } = arg0);
  let obj = { label: null, subLabel: null, onPress: null, arrow: true };
  const obj2 = { variant: "heading-md/semibold", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.eyEkG1);
  obj.label = closure_4(Text_Text.Text, obj2);
  const obj3 = { variant: "text-xs/medium", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t.ptItsj);
  obj.subLabel = closure_4(Text_Text.Text, obj3);
  obj.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet(BotReportChooser);
    const result = ReportModals.showReportModalForUser(closure_1_0, closure_1_1, dependencyMap, ApplicationStore);
  };
  return closure_4(ActionSheetRow.ActionSheetRow, obj);
}
function ReportAppBehavior(arg0) {
  ({ user: require, entrypoint: importDefault, contextualGuildId: dependencyMap, contextualChannelId: ApplicationStore, onSubmit: closure_4, appContext: closure_5 } = arg0);
  const items = [ApplicationStore];
  const stateFromStores = initialize.useStateFromStores(items, () => ApplicationStore.getAppIdForBotUserId(id.id));
  const data = ApplicationActionCreators.useApplication(stateFromStores).data;
  let obj3 = { label: null, subLabel: null, onPress: null, arrow: true, disabled: null };
  const obj4 = { variant: "heading-md/semibold", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.atP0yX);
  obj3.label = onSubmit(Text_Text.Text, obj4);
  const obj5 = { variant: "text-xs/medium", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t.UGg603);
  obj3.subLabel = onSubmit(Text_Text.Text, obj5);
  obj3.onPress = function onPress() {
    if (null != data) {
      ActionSheetActionCreatorsDefault.hideActionSheet(BotReportChooser);
      const obj3 = { application: tmp, entrypoint, contextualGuildId, contextualChannelId, onSubmit, appContext };
      const result = ReportModals.showReportModalForApp(obj3);
    }
  };
  obj3.disabled = null == data;
  return onSubmit(ActionSheetRow.ActionSheetRow, obj3);
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const BotReportChooser = "BotReportChooser";
const size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_reports/native/BotReportChooser.tsx");

export default function BotReportChooser(arg0) {
  const obj = { header: null, children: null };
  const obj2 = { style: { textAlign: "center" }, variant: "redesign/heading-18/bold", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.Bd10bR);
  obj.header = React4(Text_Text.Text, obj2);
  const obj3 = { hasIcons: false, children: null };
  const merged = Object.assign(arg0);
  const items = [React4(ReportAppProfile, {}), ];
  const merged1 = Object.assign(arg0);
  items[1] = React4(ReportAppBehavior, {});
  obj3.children = items;
  obj.children = hasOwnProperty(ActionSheetRow.ActionSheetRow.Group, obj3);
  return React4(ActionSheet.ActionSheet, obj);
};
export const BOT_REPORT_CHOOSER_KEY = "BotReportChooser";