// discord_app/modules/in_app_reports/native/BotReportChooser.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import intl3 from "../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ApplicationActionCreators from "../../applications/ApplicationActionCreators.tsx";
import ActionSheetRow2 from "../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import ActionSheet2 from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import ReportModals from "../ReportModals.tsx";
import react from "../../../../_runtime/00019_react.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let user;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const BotReportChooser = "BotReportChooser";
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let Group;
      let first;
      let intl;
      let items;
      let obj5;
      let tmp5;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { textAlign: "center" };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { style: first, variant: "redesign/heading-18/bold", children: intl.string(intl3.t.Bd10bR) };
        const Text = Text_Text.Text;
        intl = intl3.intl;
        const tmp7 = React3(Text, obj3);
        cResult[1] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== arg0) {
        const obj4 = { header: tmp5, children: hasOwnProperty(Group, obj5) };
        const ActionSheet = ActionSheet2.ActionSheet;
        obj5 = { hasIcons: false, children: items };
        const obj6 = {};
        Group = ActionSheetRow2.ActionSheetRow.Group;
        const merged = Object.assign(arg0);
        items = [React3(closure_7, obj6)];
        const obj7 = {};
        const merged1 = Object.assign(arg0);
        items[1] = React3(closure_8, obj7);
        const tmp19 = React3(ActionSheet, obj4);
        cResult[2] = arg0;
        cResult[3] = tmp19;
        tmp8 = tmp19;
      } else {
        tmp8 = cResult[3];
      }
      return tmp8;
    }
  : (arg0) => {
      let Group;
      let Text;
      let intl;
      let items;
      let obj2;
      let obj3;
      const obj = { header: React3(Text, obj2), children: hasOwnProperty(Group, obj3) };
      const ActionSheet = ActionSheet2.ActionSheet;
      obj2 = {
        style: { textAlign: "center" },
        variant: "redesign/heading-18/bold",
        children: intl.string(intl3.t.Bd10bR),
      };
      Text = Text_Text.Text;
      intl = intl3.intl;
      obj3 = { hasIcons: false, children: items };
      const obj4 = {};
      Group = ActionSheetRow2.ActionSheetRow.Group;
      const merged = Object.assign(arg0);
      items = [React3(closure_7, obj4)];
      const obj5 = {};
      const merged1 = Object.assign(arg0);
      items[1] = React3(closure_8, obj5);
      return React3(ActionSheet, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      let first;
      let intl;
      let intl2;
      let onSubmit;
      let tmp7;
      let obj = user(onSubmit[4]);
      const cResult = obj.c(7);
      user = user.user;
      const contextualGuildId = user.contextualGuildId;
      onSubmit = user.onSubmit;
      const appContext = user.appContext;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { variant: "heading-md/semibold", children: intl.string(user(onSubmit[6]).t.eyEkG1) };
        const Text = tmp(tmp2[5]).Text;
        intl = tmp(tmp2[6]).intl;
        const tmp6 = closure_4(Text, obj2);
        cResult[0] = tmp6;
        first = tmp6;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { variant: "text-xs/medium", children: intl2.string(user(onSubmit[6]).t.ptItsj) };
        const Text2 = tmp(tmp2[5]).Text;
        intl2 = tmp(tmp2[6]).intl;
        const tmp9 = closure_4(Text2, obj3);
        cResult[1] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === appContext) {
        if (cResult[3] === contextualGuildId) {
          if (cResult[4] === onSubmit) {
            let tmp10;
            if (cResult[5] === user) {
              tmp10 = cResult[6];
            }
            return tmp10;
          }
        }
      }
      const obj4 = {
        label: first,
        subLabel: tmp7,
        onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(BotReportChooser);
          const obj2 = ReportModals;
          const result = obj2.showReportModalForUser(user, contextualGuildId, onSubmit, appContext);
        },
        arrow: true,
      };
      const tmp11 = closure_4(user(onSubmit[8]).ActionSheetRow, obj4);
      cResult[2] = appContext;
      cResult[3] = contextualGuildId;
      cResult[4] = onSubmit;
      cResult[5] = user;
      cResult[6] = tmp11;
      tmp10 = tmp11;
    }
  : (arg0) => {
      let Text;
      let Text2;
      let intl;
      let intl2;
      let obj2;
      let obj3;
      ({
        user: require,
        contextualGuildId: importDefault,
        onSubmit: dependencyMap,
        appContext: ApplicationStore,
      } = arg0);
      let obj = {
        label: closure_4(Text, obj2),
        subLabel: closure_4(Text2, obj3),
        onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(BotReportChooser);
          const obj2 = ReportModals;
          const result = obj2.showReportModalForUser(require, importDefault, dependencyMap, ApplicationStore);
        },
        arrow: true,
      };
      const ActionSheetRow = ActionSheetRow2.ActionSheetRow;
      obj2 = { variant: "heading-md/semibold", children: intl.string(intl3.t.eyEkG1) };
      Text = Text_Text.Text;
      intl = intl3.intl;
      obj3 = { variant: "text-xs/medium", children: intl2.string(intl3.t.ptItsj) };
      Text2 = Text_Text.Text;
      intl2 = intl3.intl;
      return closure_4(ActionSheetRow, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      let contextualGuildId;
      let first;
      let intl;
      let intl2;
      let tmp11;
      let tmp6;
      let tmp8;
      const tmp = user;
      let obj = user(contextualGuildId[4]);
      const cResult = obj.c(15);
      user = user.user;
      const entrypoint = user.entrypoint;
      contextualGuildId = user.contextualGuildId;
      const contextualChannelId = user.contextualChannelId;
      const onSubmit = user.onSubmit;
      const appContext = user.appContext;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [contextualChannelId];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== user.id) {
        const fn = function c() {
          return ApplicationStore.getAppIdForBotUserId(user.id);
        };
        cResult[1] = user.id;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(contextualGuildId[11]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      const tmpResult2 = tmp(contextualGuildId[12]);
      const data = tmpResult2.useApplication(stateFromStores).data;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { variant: "heading-md/semibold", children: intl.string(tmp(contextualGuildId[6]).t.atP0yX) };
        const Text = tmp(tmp2[5]).Text;
        intl = tmp(tmp2[6]).intl;
        const tmp10 = onSubmit(Text, obj2);
        cResult[3] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        let obj3 = { variant: "text-xs/medium", children: intl2.string(tmp(contextualGuildId[6]).t.UGg603) };
        const Text2 = tmp(tmp2[5]).Text;
        intl2 = tmp(tmp2[6]).intl;
        const tmp13 = onSubmit(Text2, obj3);
        cResult[4] = tmp13;
        tmp11 = tmp13;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] === appContext) {
        if (cResult[6] === contextualChannelId) {
          if (cResult[7] === contextualGuildId) {
            if (cResult[8] === data) {
              if (cResult[9] === entrypoint) {
                let tmp14;
                if (cResult[10] === onSubmit) {
                  tmp14 = cResult[11];
                }
                if (cResult[12] === tmp14) {
                  let tmp17;
                  if ((cResult[13] === null) == data) {
                    tmp17 = cResult[14];
                  }
                  return tmp17;
                }
                const obj4 = { label: tmp8, subLabel: tmp11, onPress: tmp14, arrow: true, disabled: null == data };
                const tmp19 = onSubmit(tmp(contextualGuildId[8]).ActionSheetRow, obj4);
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
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(BotReportChooser);
          const obj3 = { application: tmp, entrypoint, contextualGuildId, contextualChannelId, onSubmit, appContext };
          const obj2 = ReportModals;
          const result = obj2.showReportModalForApp(obj3);
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
    }
  : (arg0) => {
      let Text;
      let Text2;
      let appContext;
      let closure_4;
      let closure_5;
      let contextualChannelId;
      let contextualGuildId;
      let entrypoint;
      let id;
      let intl;
      let intl2;
      let obj4;
      let obj5;
      ({
        user: require,
        entrypoint: importDefault,
        contextualGuildId: dependencyMap,
        contextualChannelId: ApplicationStore,
        onSubmit: closure_4,
        appContext: closure_5,
      } = arg0);
      let obj = get_initialized;
      const items = [ApplicationStore];
      const stateFromStores = obj.useStateFromStores(items, () => ApplicationStore.getAppIdForBotUserId(require.id));
      let obj2 = ApplicationActionCreators;
      const data = obj2.useApplication(stateFromStores).data;
      let obj3 = {
        label: onSubmit(Text, obj4),
        subLabel: onSubmit(Text2, obj5),
        onPress() {
          if (null != data) {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(BotReportChooser);
            const obj3 = {
              application: tmp,
              entrypoint: importDefault,
              contextualGuildId: dependencyMap,
              contextualChannelId: ApplicationStore,
              onSubmit,
              appContext,
            };
            const obj2 = ReportModals;
            const result = obj2.showReportModalForApp(obj3);
          }
        },
        arrow: true,
        disabled: null == data,
      };
      const ActionSheetRow = ActionSheetRow2.ActionSheetRow;
      obj4 = { variant: "heading-md/semibold", children: intl.string(intl3.t.atP0yX) };
      Text = Text_Text.Text;
      intl = intl3.intl;
      obj5 = { variant: "text-xs/medium", children: intl2.string(intl3.t.UGg603) };
      Text2 = Text_Text.Text;
      intl2 = intl3.intl;
      return onSubmit(ActionSheetRow, obj3);
    };
let result = size.fileFinishedImporting("modules/in_app_reports/native/BotReportChooser.tsx");

export default tmp4;
export const BOT_REPORT_CHOOSER_KEY = "BotReportChooser";
