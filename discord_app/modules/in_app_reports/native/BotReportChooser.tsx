// === Module 12973: BotReportChooser ===

// Module 12973 (BotReportChooser)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import Text_Text from "Text/Text" /* 5086 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6842 */;
import ActionSheetRow from "ActionSheetRow" /* 6881 */;
import ActionSheet from "ActionSheet" /* 6885 */;
import ReportModals from "ReportModals" /* 7695 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5436 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const BotReportChooser = "BotReportChooser";
fn(558);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ReportAppProfile(user) {
  const cResult = user(onSubmit[4]).c(7);
  user = user.user;
  const contextualGuildId = user.contextualGuildId;
  onSubmit = user.onSubmit;
  const appContext = user.appContext;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "heading-md/semibold", children: null };
    const intl = tmp(tmp2[6]).intl;
    obj2.children = intl.string(tmp(tmp2[6]).t.eyEkG1);
    const tmp6 = closure_4(tmp(tmp2[5]).Text, obj2);
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-xs/medium", children: null };
    const intl2 = tmp(tmp2[6]).intl;
    obj3.children = intl2.string(tmp(tmp2[6]).t.ptItsj);
    const tmp9 = closure_4(tmp(tmp2[5]).Text, obj3);
    cResult[1] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === appContext) {
    if (cResult[3] === contextualGuildId) {
      if (cResult[4] === onSubmit) {
        if (cResult[5] === user) {
          let tmp10 = cResult[6];
        }
        return tmp10;
      }
    }
  }
  const tmp11 = closure_4(user(onSubmit[8]).ActionSheetRow, {
    label: first,
    subLabel: tmp7,
    onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet(BotReportChooser);
      const result = ReportModals.showReportModalForUser(user, contextualGuildId, onSubmit, appContext);
    },
    arrow: true
  });
  cResult[2] = appContext;
  cResult[3] = contextualGuildId;
  cResult[4] = onSubmit;
  cResult[5] = user;
  cResult[6] = tmp11;
  tmp10 = tmp11;
  let obj = user(onSubmit[4]);
  const obj4 = {
    label: first,
    subLabel: tmp7,
    onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet(BotReportChooser);
      const result = ReportModals.showReportModalForUser(user, contextualGuildId, onSubmit, appContext);
    },
    arrow: true
  };
}) : (function ReportAppProfile(arg0) {
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
});
ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ReportAppBehavior(user) {
  const cResult = user(contextualGuildId[4]).c(15);
  user = user.user;
  const entrypoint = user.entrypoint;
  contextualGuildId = user.contextualGuildId;
  const contextualChannelId = user.contextualChannelId;
  const onSubmit = user.onSubmit;
  const appContext = user.appContext;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [contextualChannelId];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function c() {
      return ApplicationStore.getAppIdForBotUserId(user.id);
    };
    cResult[1] = user.id;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = user(contextualGuildId[4]);
  const stateFromStores = user(contextualGuildId[11]).useStateFromStores(first, tmp6);
  const tmpResult = user(contextualGuildId[11]);
  const data = user(contextualGuildId[12]).useApplication(stateFromStores).data;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { variant: "heading-md/semibold", children: null };
    const intl = tmp(tmp2[6]).intl;
    obj2.children = intl.string(tmp(tmp2[6]).t.atP0yX);
    const tmp10 = onSubmit(tmp(tmp2[5]).Text, obj2);
    cResult[3] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { variant: "text-xs/medium", children: null };
    const intl2 = tmp(tmp2[6]).intl;
    obj3.children = intl2.string(tmp(tmp2[6]).t.UGg603);
    const tmp13 = onSubmit(tmp(tmp2[5]).Text, obj3);
    cResult[4] = tmp13;
    let tmp11 = tmp13;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === appContext) {
    if (cResult[6] === contextualChannelId) {
      if (cResult[7] === contextualGuildId) {
        if (cResult[8] === data) {
          if (cResult[9] === entrypoint) {
            if (cResult[10] === onSubmit) {
              let tmp14 = cResult[11];
            }
            if (cResult[12] === tmp14) {
              if (cResult[13] === tmp16) {
                let tmp17 = cResult[14];
              }
              return tmp17;
            }
            const obj4 = { label: tmp8, subLabel: tmp11, onPress: tmp14, arrow: true, disabled: null == data };
            const tmp19 = onSubmit(tmp(tmp2[8]).ActionSheetRow, obj4);
            cResult[12] = tmp14;
            cResult[13] = null == data;
            cResult[14] = tmp19;
            tmp17 = tmp19;
          }
        }
      }
    }
  }
  const fn2 = function v() {
    if (null != data) {
      ActionSheetActionCreatorsDefault.hideActionSheet(BotReportChooser);
      const obj3 = { application: tmp, entrypoint, contextualGuildId, contextualChannelId, onSubmit, appContext };
      const result = ReportModals.showReportModalForApp(obj3);
    }
  };
  cResult[5] = appContext;
  cResult[6] = contextualChannelId;
  cResult[7] = contextualGuildId;
  cResult[8] = data;
  cResult[9] = entrypoint;
  cResult[10] = onSubmit;
  cResult[11] = fn2;
  tmp14 = fn2;
}) : (function ReportAppBehavior(arg0) {
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
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_reports/native/BotReportChooser.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function BotReportChooser(arg0) {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { textAlign: "center" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { style: first, variant: "redesign/heading-18/bold", children: null };
    const intl = util.intl;
    obj3.children = intl.string(util.t.Bd10bR);
    const tmp7 = React4(Text_Text.Text, obj3);
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== arg0) {
    const obj4 = { header: tmp5, children: null };
    const obj5 = { hasIcons: false, children: null };
    const obj6 = {};
    const merged = Object.assign(arg0);
    const items = [React4(closure_7, obj6), ];
    const obj7 = {};
    const merged1 = Object.assign(arg0);
    items[1] = React4(closure_8, obj7);
    obj5.children = items;
    obj4.children = hasOwnProperty(ActionSheetRow.ActionSheetRow.Group, obj5);
    const tmp19 = React4(ActionSheet.ActionSheet, obj4);
    cResult[2] = arg0;
    cResult[3] = tmp19;
    let tmp8 = tmp19;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (function BotReportChooser(arg0) {
  const obj = { header: null, children: null };
  const obj2 = { style: { textAlign: "center" }, variant: "redesign/heading-18/bold", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.Bd10bR);
  obj.header = React4(Text_Text.Text, obj2);
  const obj3 = { hasIcons: false, children: null };
  const merged = Object.assign(arg0);
  const items = [React4(closure_7, {}), ];
  const merged1 = Object.assign(arg0);
  items[1] = React4(closure_8, {});
  obj3.children = items;
  obj.children = hasOwnProperty(ActionSheetRow.ActionSheetRow.Group, obj3);
  return React4(ActionSheet.ActionSheet, obj);
});
export const BOT_REPORT_CHOOSER_KEY = "BotReportChooser";