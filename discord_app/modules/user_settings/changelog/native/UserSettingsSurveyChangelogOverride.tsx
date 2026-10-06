// discord_app/modules/user_settings/changelog/native/UserSettingsSurveyChangelogOverride.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import TableRow2 from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup2 from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheetRow2 from "../../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import ActionSheet2 from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import ChangeLogActionCreatorsDefault from "../../../../actions/ChangeLogActionCreators.tsx";
import usePreviousDefault from "../../../../hooks/usePrevious.tsx";
import SurveyActionCreatorsAll from "../../../../actions/SurveyActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import ChangelogStore from "../../../changelog/ChangelogStore.tsx";
import SurveyStore from "../../../../stores/SurveyStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, surveyOverride;

let c10;
let c9;
let obj2;
const ScrollView = react_native.ScrollView;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { scrollView: obj2 };
obj2 = { padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_11 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (survey) => {
      let Group;
      let entries;
      let first;
      let obj3;
      let tmp7;
      let obj = react2;
      const cResult = obj.c(3);
      survey = survey.survey;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp6 = React4(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: "Last Survey Data" });
        cResult[0] = tmp6;
        first = tmp6;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== survey) {
        const obj2 = { header: first, children: React4(Group, obj3) };
        const ActionSheet = ActionSheet2.ActionSheet;
        const _Object = Object;
        obj3 = {
          hasIcons: true,
          children: entries.map((item) => {
            let str;
            let tmp2;
            let tmp3;
            let tmp5;
            const tmp = closure_4(item, 2);
            [tmp2, tmp3] = tmp;
            let closure_0 = tmp3;
            const obj = {
              label: tmp2,
              subLabel: str,
              icon: closure_9(tmp5(closure_3[13]).CopyIcon, {}),
              onPress() {
                let str = "null";
                const copy = require("ClipboardUtils").copy;
                require("ClipboardUtils");
                if (null != closure_0) {
                  const _JSON = JSON;
                  str = JSON.stringify(tmp2);
                }
                copy(str);
              },
            };
            str = "null";
            const ActionSheetRow = closure_0(closure_3[12]).ActionSheetRow;
            tmp5 = closure_0;
            if (null != tmp3) {
              let _JSON = JSON;
              str = JSON.stringify(tmp3);
            }
            return closure_9(ActionSheetRow, obj, tmp2);
          }),
        };
        Group = ActionSheetRow2.ActionSheetRow.Group;
        entries = Object.entries(survey);
        const tmp9 = React4(ActionSheet, obj2);
        cResult[1] = survey;
        cResult[2] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      return tmp7;
    }
  : (survey) => {
      let Group;
      let entries;
      let obj2;
      survey = survey.survey;
      let obj = {
        header: React4(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: "Last Survey Data" }),
        children: React4(Group, obj2),
      };
      const ActionSheet = ActionSheet2.ActionSheet;
      obj2 = {
        hasIcons: true,
        children: entries.map((item) => {
          let str;
          let tmp;
          let tmp2;
          [tmp, tmp2] = item;
          const obj = {
            label: tmp,
            subLabel: str,
            icon: closure_9(closure_0(closure_3[13]).CopyIcon, {}),
            onPress() {
              let str = "null";
              const copy = require("ClipboardUtils").copy;
              require("ClipboardUtils");
              if (null != closure_1_0) {
                const _JSON = JSON;
                str = JSON.stringify(tmp2);
              }
              copy(str);
            },
          };
          str = "null";
          const ActionSheetRow = closure_0(closure_3[12]).ActionSheetRow;
          if (null != tmp2) {
            let _JSON = JSON;
            str = JSON.stringify(tmp2);
          }
          return closure_9(ActionSheetRow, obj, tmp);
        }),
      };
      Group = ActionSheetRow2.ActionSheetRow.Group;
      entries = Object.entries(survey);
      return React4(ActionSheet, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let first1;
      let items;
      let tmp15;
      let tmp7;
      let tmp8;
      let tmp9;
      const tmp = first1;
      let obj = first1(576);
      const cResult = obj.c(9);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          surveyOverride = surveyOverride.getSurveyOverride();
          if (surveyOverride == null) {
            surveyOverride = null;
          }
          return surveyOverride;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      [first1, tmp7] = react.useState(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp11 = closure_9(tmp(6651).BottomSheetTitleHeader, { title: "Survey Override" });
        let obj2 = {
          label: "Survey Override",
          size: "md",
          placeholder: "Enter the ID of the Survey you want to test",
          onChange: tmp7,
          clearable: true,
        };
        const tmp12 = closure_9(tmp(6105).TextInput, obj2);
        cResult[1] = tmp11;
        cResult[2] = tmp12;
        tmp9 = tmp12;
        tmp8 = tmp11;
      } else {
        tmp8 = cResult[1];
        tmp9 = cResult[2];
      }
      let str = "Fetch Survey";
      if ("" === first1) {
        str = "Reset Survey Override";
      }
      let str2 = "destructive";
      if ("" !== first1) {
        let str3 = "primary";
        if (null == first1) {
          str3 = "secondary";
        }
        str2 = str3;
      }
      if (cResult[3] !== first1) {
        const fn2 = function p() {
          if ("" === first1) {
            const obj2 = SurveyActionCreatorsAll;
            obj2.overrideSurvey(null);
          } else {
            const obj = SurveyActionCreatorsAll;
            obj.overrideSurvey(tmp);
          }
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideActionSheet("SurveyOverrideActionSheet");
        };
        cResult[3] = first1;
        cResult[4] = fn2;
        tmp15 = fn2;
      } else {
        tmp15 = cResult[4];
      }
      if (cResult[5] === str) {
        if (cResult[6] === str2) {
          let tmp16;
          if (cResult[7] === tmp15) {
            tmp16 = cResult[8];
          }
          return tmp16;
        }
      }
      let obj3 = { header: tmp8, children: items };
      items = [tmp9];
      const ActionSheet = tmp(6708).ActionSheet;
      items[1] = closure_9(tmp(5601).Button, { text: str, variant: str2, onPress: tmp15 });
      const tmp17 = closure_10(ActionSheet, obj3);
      cResult[5] = str;
      cResult[6] = str2;
      cResult[7] = tmp15;
      cResult[8] = tmp17;
      tmp16 = tmp17;
    }
  : () => {
      let first;
      let items;
      let str2;
      let tmp3;
      [first, tmp3] = react.useState(() => {
        surveyOverride = surveyOverride.getSurveyOverride();
        if (surveyOverride == null) {
          surveyOverride = null;
        }
        return surveyOverride;
      });
      let obj = {
        header: closure_9(first(6651).BottomSheetTitleHeader, { title: "Survey Override" }),
        children: items,
      };
      const ActionSheet = first(6708).ActionSheet;
      items = [
        closure_9(first(6105).TextInput, {
          label: "Survey Override",
          size: "md",
          placeholder: "Enter the ID of the Survey you want to test",
          onChange: tmp3,
          clearable: true,
        }),
      ];
      let str = "Fetch Survey";
      const Button = first(5601).Button;
      if ("" === first) {
        str = "Reset Survey Override";
      }
      let obj2 = {
        text: str,
        variant: str2,
        onPress() {
          if ("" === first) {
            const obj2 = SurveyActionCreatorsAll;
            obj2.overrideSurvey(null);
          } else {
            const obj = SurveyActionCreatorsAll;
            obj.overrideSurvey(tmp);
          }
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideActionSheet("SurveyOverrideActionSheet");
        },
      };
      str2 = "destructive";
      if ("" !== first) {
        let str3 = "primary";
        if (null == first) {
          str3 = "secondary";
        }
        str2 = str3;
      }
      items[1] = closure_9(Button, obj2);
      return closure_10(ActionSheet, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let currentSurvey;
      let items1;
      let survey;
      let tmp13;
      let tmp4;
      let tmp5;
      let tmp9;
      let obj = require("react");
      const cResult = obj.c(9);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SurveyStore];
        const fn = function o() {
          return currentSurvey.getCurrentSurvey();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      const tmp8 = usePreviousDefault(stateFromStores);
      _require = tmp8;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = {
          label: "Survey override",
          subLabel: "Force a survey to be shown.",
          arrow: true,
          onPress() {
            const obj = ActionSheetActionCreatorsDefault;
            const obj2 = { default: closure_1_13 };
            obj.openLazy(Promise.resolve(obj2), "SurveyOverrideActionSheet");
          },
        };
        const tmp11 = closure_9(require("TableRow").TableRow, obj2);
        cResult[2] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[2];
      }
      let str;
      if (null == tmp8) {
        str = "No survey data";
      }
      if (cResult[3] !== tmp8) {
        let fn2;
        if (null != tmp8) {
          fn2 = () => {
            const obj = ActionSheetActionCreatorsDefault;
            const obj2 = { default: closure_12 };
            const obj3 = { survey };
            obj.openLazy(Promise.resolve(obj2), "SurveyOverrideInfoActionSheet", obj3);
          };
        }
        cResult[3] = tmp8;
        cResult[4] = fn2;
        tmp13 = fn2;
      } else {
        tmp13 = cResult[4];
      }
      if (cResult[5] === str) {
        if ((cResult[6] === null) != tmp8) {
          let tmp14;
          if (cResult[7] === tmp13) {
            tmp14 = cResult[8];
          }
          return tmp14;
        }
      }
      let obj3 = { title: "Surveys", hasIcons: false, children: items1 };
      items1 = [tmp9];
      const TableRowGroup = tmp(6081).TableRowGroup;
      items1[1] = closure_9(require("TableRow").TableRow, {
        label: "Previous survey data",
        subLabel: str,
        arrow: null != tmp8,
        onPress: tmp13,
      });
      const tmp15 = closure_10(TableRowGroup, obj3);
      cResult[5] = str;
      cResult[6] = null != tmp8;
      cResult[7] = tmp13;
      cResult[8] = tmp15;
      tmp14 = tmp15;
    }
  : () => {
      let currentSurvey;
      let fn;
      let survey;
      let obj = require("get initialized");
      const items = [SurveyStore];
      const stateFromStores = obj.useStateFromStores(items, () => currentSurvey.getCurrentSurvey());
      const tmp2 = usePreviousDefault(stateFromStores);
      _require = tmp2;
      const TableRowGroup = require("TableRowGroup").TableRowGroup;
      let obj2 = {
        label: "Survey override",
        subLabel: "Force a survey to be shown.",
        arrow: true,
        onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { default: closure_1_13 };
          obj.openLazy(Promise.resolve(obj2), "SurveyOverrideActionSheet");
        },
      };
      const items1 = [closure_9(require("TableRow").TableRow, obj2)];
      let str;
      const TableRow = require("TableRow").TableRow;
      if (null == tmp2) {
        str = "No survey data";
      }
      let obj3 = { label: "Previous survey data", subLabel: str, arrow: null != tmp2, onPress: fn };
      fn = undefined;
      if (null != tmp2) {
        fn = () => {
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { default: closure_12 };
          const obj3 = { survey };
          obj.openLazy(Promise.resolve(obj2), "SurveyOverrideInfoActionSheet", obj3);
        };
      }
      const obj4 = { title: "Surveys", hasIcons: false, children: items1 };
      items1[1] = closure_9(TableRow, obj3);
      return closure_10(TableRowGroup, obj4);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let Text;
      let first;
      let obj3;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp6 = React4(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: "Changelog Debugging" });
        cResult[0] = tmp6;
        first = tmp6;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { header: first, children: React4(Text, obj3) };
        const ActionSheet = ActionSheet2.ActionSheet;
        const _JSON = JSON;
        obj3 = {
          variant: "text-md/semibold",
          children: "" + JSON.stringify(ChangelogStore.getStateForDebugging(), undefined, "\t"),
        };
        Text = Text_Text.Text;
        const _HermesInternal = HermesInternal;
        const tmp10 = React4(ActionSheet, obj2);
        cResult[1] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[1];
      }
      return tmp7;
    }
  : () => {
      let Text;
      let obj2;
      const obj = {
        header: React4(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: "Changelog Debugging" }),
        children: React4(Text, obj2),
      };
      const ActionSheet = ActionSheet2.ActionSheet;
      obj2 = {
        variant: "text-md/semibold",
        children: "" + JSON.stringify(ChangelogStore.getStateForDebugging(), undefined, "\t"),
      };
      Text = Text_Text.Text;
      return React4(ActionSheet, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let first1;
      let items;
      let tmp15;
      let tmp7;
      let tmp8;
      let tmp9;
      const tmp = first1;
      let obj = first1(576);
      const cResult = obj.c(9);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          return ChangelogStore.overrideId();
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      [first1, tmp7] = react.useState(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp11 = closure_9(tmp(6651).BottomSheetTitleHeader, { title: "Changelog Override" });
        let obj2 = {
          label: "Changelog Override",
          size: "md",
          placeholder: "Enter the ID of the changelog you want to test",
          onChange: tmp7,
          clearable: true,
        };
        const tmp12 = closure_9(tmp(6105).TextInput, obj2);
        cResult[1] = tmp11;
        cResult[2] = tmp12;
        tmp9 = tmp12;
        tmp8 = tmp11;
      } else {
        tmp8 = cResult[1];
        tmp9 = cResult[2];
      }
      let str = "Fetch Changelog";
      if ("" === first1) {
        str = "Reset Changelog Override";
      }
      let str2 = "destructive";
      if ("" !== first1) {
        let str3 = "primary";
        if (null == first1) {
          str3 = "secondary";
        }
        str2 = str3;
      }
      if (cResult[3] !== first1) {
        const fn2 = function p() {
          if ("" === first1) {
            const obj2 = ChangeLogActionCreatorsDefault;
            obj2.setChangelogOverride(null);
          } else {
            const obj = ChangeLogActionCreatorsDefault;
            obj.setChangelogOverride(tmp);
          }
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideActionSheet("ChangelogOverrideActionSheet");
        };
        cResult[3] = first1;
        cResult[4] = fn2;
        tmp15 = fn2;
      } else {
        tmp15 = cResult[4];
      }
      if (cResult[5] === str) {
        if (cResult[6] === str2) {
          let tmp16;
          if (cResult[7] === tmp15) {
            tmp16 = cResult[8];
          }
          return tmp16;
        }
      }
      let obj3 = { header: tmp8, children: items };
      items = [tmp9];
      const ActionSheet = tmp(6708).ActionSheet;
      items[1] = closure_9(tmp(5601).Button, { text: str, variant: str2, onPress: tmp15 });
      const tmp17 = closure_10(ActionSheet, obj3);
      cResult[5] = str;
      cResult[6] = str2;
      cResult[7] = tmp15;
      cResult[8] = tmp17;
      tmp16 = tmp17;
    }
  : () => {
      let first;
      let items;
      let str2;
      let tmp3;
      [first, tmp3] = react.useState(() => ChangelogStore.overrideId());
      let obj = {
        header: closure_9(first(6651).BottomSheetTitleHeader, { title: "Changelog Override" }),
        children: items,
      };
      const ActionSheet = first(6708).ActionSheet;
      items = [
        closure_9(first(6105).TextInput, {
          label: "Changelog Override",
          size: "md",
          placeholder: "Enter the ID of the changelog you want to test",
          onChange: tmp3,
          clearable: true,
        }),
      ];
      let str = "Fetch Changelog";
      const Button = first(5601).Button;
      if ("" === first) {
        str = "Reset Changelog Override";
      }
      let obj2 = {
        text: str,
        variant: str2,
        onPress() {
          if ("" === first) {
            const obj2 = ChangeLogActionCreatorsDefault;
            obj2.setChangelogOverride(null);
          } else {
            const obj = ChangeLogActionCreatorsDefault;
            obj.setChangelogOverride(tmp);
          }
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideActionSheet("ChangelogOverrideActionSheet");
        },
      };
      str2 = "destructive";
      if ("" !== first) {
        let str3 = "primary";
        if (null == first) {
          str3 = "secondary";
        }
        str2 = str3;
      }
      items[1] = closure_9(Button, obj2);
      return closure_10(ActionSheet, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let items;
      let tmp7;
      let obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = {
          label: "Changelog override",
          subLabel: "Force a changelog to be shown.",
          arrow: true,
          onPress() {
            const obj = ActionSheetActionCreatorsDefault;
            const obj2 = { default: closure_1_16 };
            obj.openLazy(Promise.resolve(obj2), "ChangelogOverrideActionSheet");
          },
        };
        const tmp6 = React4(TableRow2.TableRow, obj2);
        cResult[0] = tmp6;
        first = tmp6;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { title: "Changelog", hasIcons: false, children: items };
        items = [first];
        const TableRowGroup = TableRowGroup2.TableRowGroup;
        const obj4 = {
          label: "Changelog debugging",
          arrow: true,
          onPress() {
            const obj = ActionSheetActionCreatorsDefault;
            const obj2 = { default: closure_1_15 };
            obj.openLazy(Promise.resolve(obj2), "ChangelogOverrideDebuggingActionSheet");
          },
        };
        items[1] = React4(TableRow2.TableRow, obj4);
        const tmp10 = authStore(TableRowGroup, obj3);
        cResult[1] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[1];
      }
      return tmp7;
    }
  : () => {
      let items;
      let obj = { title: "Changelog", hasIcons: false, children: items };
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      let obj2 = {
        label: "Changelog override",
        subLabel: "Force a changelog to be shown.",
        arrow: true,
        onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { default: closure_1_16 };
          obj.openLazy(Promise.resolve(obj2), "ChangelogOverrideActionSheet");
        },
      };
      items = [React4(TableRow2.TableRow, obj2)];
      const obj3 = {
        label: "Changelog debugging",
        arrow: true,
        onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { default: closure_1_15 };
          obj.openLazy(Promise.resolve(obj2), "ChangelogOverrideDebuggingActionSheet");
        },
      };
      items[1] = React4(TableRow2.TableRow, obj3);
      return authStore(TableRowGroup, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let first;
        let items;
        let tmp11;
        const obj = react2;
        const cResult = obj.c(3);
        const tmp4 = closure_11();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { spacing: 16, children: items };
          const Stack = Stack_Stack.Stack;
          items = [React4(closure_14, {}), React4(closure_17, {})];
          const tmp10 = authStore(Stack, obj2);
          cResult[0] = tmp10;
          first = tmp10;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== tmp4.scrollView) {
          const obj3 = { style: tmp4.scrollView, children: first };
          const tmp14 = React4(ScrollView, obj3);
          cResult[1] = tmp4.scrollView;
          cResult[2] = tmp14;
          tmp11 = tmp14;
        } else {
          tmp11 = cResult[2];
        }
        return tmp11;
      }
    : () => {
        let Stack;
        let items;
        let obj2;
        const obj = { style: closure_11().scrollView, children: authStore(Stack, obj2) };
        obj2 = { spacing: 16, children: items };
        Stack = Stack_Stack.Stack;
        items = [React4(closure_14, {}), React4(closure_17, {})];
        return React4(ScrollView, obj);
      },
);
const result = size.fileFinishedImporting(
  "modules/user_settings/changelog/native/UserSettingsSurveyChangelogOverride.tsx",
);

export default memoResult;
