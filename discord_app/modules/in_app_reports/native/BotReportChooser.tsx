// discord_app/modules/in_app_reports/native/BotReportChooser.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import fetchApplication from "../../applications/ApplicationActionCreators.tsx";
import ActionSheet from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import ActionSheetRowIcon from "../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import closure_3 from "../../applications/ApplicationStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
function ReportAppProfile(arg0) {
  ({ user: require, contextualGuildId: importDefault, onSubmit: dependencyMap, appContext: closure_3 } = arg0);
  let obj = { label: null, subLabel: null, onPress: null, arrow: true };
  obj = { variant: "heading-md/semibold", children: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.eyEkG1);
  obj[0] = callback(Text.Text, obj);
  obj = { variant: "text-xs/medium", children: null };
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.ptItsj);
  obj[1] = callback(Text.Text, obj);
  obj[2] = function onPress() {
    closure_1_1(closure_1_2[7]).hideActionSheet(closure_1_6);
    const obj = closure_1_1(closure_1_2[7]);
    const result = closure_1_0(closure_1_2[8]).showReportModalForUser(closure_0, closure_1, closure_2, closure_3);
  };
  return callback(ActionSheetRowIcon.ActionSheetRow, obj);
}
function ReportAppBehavior(arg0) {
  ({
    user: require,
    entrypoint: importDefault,
    contextualGuildId: dependencyMap,
    contextualChannelId: closure_3,
    onSubmit: closure_4,
    appContext: closure_5,
  } = arg0);
  let data;
  let obj = initialize;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_3.getAppIdForBotUserId(id.id));
  obj1 = fetchApplication;
  data = obj1.useApplication(stateFromStores).data;
  obj = { label: null, subLabel: null, onPress: null, arrow: true, disabled: null };
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
      let obj = closure_1_1(closure_1_2[7]);
      obj.hideActionSheet(data);
      obj = {
        application: null,
        entrypoint: null,
        contextualGuildId: null,
        contextualChannelId: null,
        onSubmit: null,
        appContext: null,
      };
      obj[0] = tmp;
      obj[1] = closure_1;
      obj[2] = closure_2;
      obj[3] = closure_3;
      obj[4] = closure_4;
      obj[5] = closure_5;
      const result = closure_1_0(closure_1_2[8]).showReportModalForApp(obj);
      const obj2 = closure_1_0(closure_1_2[8]);
    }
  };
  obj[4] = null == data;
  return callback(ActionSheetRowIcon.ActionSheetRow, obj);
}
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const BotReportChooser = "BotReportChooser";
let result = require("set").fileFinishedImporting("modules/in_app_reports/native/BotReportChooser.tsx");

export default function BotReportChooser(arg0) {
  let obj = { header: null, children: null };
  obj = { style: { textAlign: "center" }, variant: "redesign/heading-18/bold", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.Bd10bR);
  obj[0] = callback(Text.Text, obj);
  obj = { hasIcons: false, children: null };
  const merged = Object.assign(arg0);
  const items = [callback(ReportAppProfile, {})];
  const merged1 = Object.assign(arg0);
  items[1] = callback(ReportAppBehavior, {});
  obj[1] = items;
  obj[1] = callback2(ActionSheetRowIcon.ActionSheetRow.Group, obj);
  return callback(ActionSheet.ActionSheet, obj);
}
export const BOT_REPORT_CHOOSER_KEY = "BotReportChooser";
