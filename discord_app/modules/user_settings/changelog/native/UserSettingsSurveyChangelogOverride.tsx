// === Module 17861: UserSettingsSurveyChangelogOverride ===

// Module 17861 (UserSettingsSurveyChangelogOverride)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import Text_Text from "Text/Text" /* 5747 */;
import Stack_Stack from "Stack/Stack" /* 6147 */;
import usePreviousDefault from "usePrevious" /* 6852 */;
import TableRow from "TableRow" /* 7101 */;
import TableRowGroup from "TableRowGroup" /* 7186 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7441 */;
import ActionSheet from "ActionSheet" /* 7486 */;
import ActionSheetRow from "ActionSheetRow" /* 7488 */;
import ChangeLogActionCreatorsDefault from "ChangeLogActionCreators" /* 8691 */;
import SurveyActionCreatorsAll from "SurveyActionCreators" /* 17862 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChangelogStore from "ChangelogStore" /* 7610 */;
import SurveyStore from "SurveyStore" /* 8053 */;

require = fn;
function SurveyOverrideInfoActionSheet(survey) {
  let obj = { header: React7(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: "Last Survey Data" }), children: null };
  const obj2 = { hasIcons: true, children: null };
  const entries = Object.entries(survey.survey);
  obj2.children = entries.map((item) => {
    [tmp, tmp2] = item;
    const obj = { label: tmp, subLabel: null, icon: null, onPress: null };
    let str = "null";
    if (null != tmp2) {
      let _JSON = JSON;
      str = JSON.stringify(tmp2);
    }
    obj.subLabel = str;
    obj.icon = closure_9(closure_0(5851).CopyIcon, {});
    obj.onPress = function onPress() {
      let str = "null";
      if (null != closure_1_0) {
        const _JSON = JSON;
        str = JSON.stringify(tmp);
      }
      require("ClipboardUtils").copy(str);
    };
    return closure_9(closure_0(7488).ActionSheetRow, obj, tmp);
  });
  obj.children = React7(ActionSheetRow.ActionSheetRow.Group, obj2);
  return React7(ActionSheet.ActionSheet, obj);
}
function SurveyOverrideActionSheet() {
  const tmp = _slicedToArray(noop.useState(() => {
    surveyOverride = surveyOverride.getSurveyOverride();
    if (surveyOverride == null) {
      surveyOverride = null;
    }
    return surveyOverride;
  }), 2);
  const first = tmp[0];
  let obj = { header: closure_9(first(7441).BottomSheetTitleHeader, { title: "Survey Override" }), children: null };
  items = [closure_9(first(7208).TextInput, { label: "Survey Override", size: "md", placeholder: "Enter the ID of the Survey you want to test", onChange: tmp[1], clearable: true }), ];
  let str = "Fetch Survey";
  if ("" === first) {
    str = "Reset Survey Override";
  }
  let obj2 = { text: str, variant: null, onPress: null };
  let str2 = "destructive";
  if ("" !== first) {
    let str3 = "primary";
    if (null == first) {
      str3 = "secondary";
    }
    str2 = str3;
  }
  obj2.variant = str2;
  obj2.onPress = function onPress() {
    if ("" === first) {
      SurveyActionCreatorsAll.overrideSurvey(null);
    } else {
      SurveyActionCreatorsAll.overrideSurvey(tmp);
    }
    ActionSheetActionCreatorsDefault.hideActionSheet("SurveyOverrideActionSheet");
  };
  items[1] = closure_9(first(5754).Button, obj2);
  obj.children = items;
  return closure_10(first(7486).ActionSheet, obj);
}
function SurveyInfo() {
  items = [SurveyStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentSurvey.getCurrentSurvey());
  const tmp2 = usePreviousDefault(stateFromStores);
  _require = tmp2;
  const items1 = [
    closure_9(require("TableRow").TableRow, {
      label: "Survey override",
      subLabel: "Force a survey to be shown.",
      arrow: true,
      onPress() {
        ActionSheetActionCreatorsDefault.openLazy(Promise.resolve({ default: SurveyOverrideActionSheet }), "SurveyOverrideActionSheet");
      }
    }),

  ];
  let str;
  if (null == tmp2) {
    str = "No survey data";
  }
  const obj3 = { label: "Previous survey data", subLabel: str, arrow: null != tmp2, onPress: null };
  let fn;
  if (null != tmp2) {
    fn = () => {
      ActionSheetActionCreatorsDefault.openLazy(Promise.resolve({ default: SurveyOverrideInfoActionSheet }), "SurveyOverrideInfoActionSheet", { survey });
    };
  }
  const obj4 = { title: "Surveys", hasIcons: false, children: null };
  obj3.onPress = fn;
  items1[1] = closure_9(require("TableRow").TableRow, obj3);
  obj4.children = items1;
  return closure_10(require("TableRowGroup").TableRowGroup, obj4);
}
function ChangelogOverrideDebuggingActionSheet() {
  const obj = { header: React7(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: "Changelog Debugging" }), children: React7(Text_Text.Text, { variant: "text-md/semibold", children: "" + JSON.stringify(ChangelogStore.getStateForDebugging(), undefined, "\t") }) };
  return React7(ActionSheet.ActionSheet, obj);
}
function ChangelogOverrideActionSheet() {
  const tmp = _slicedToArray(noop.useState(() => ChangelogStore.overrideId()), 2);
  const first = tmp[0];
  let obj = { header: closure_9(first(7441).BottomSheetTitleHeader, { title: "Changelog Override" }), children: null };
  items = [closure_9(first(7208).TextInput, { label: "Changelog Override", size: "md", placeholder: "Enter the ID of the changelog you want to test", onChange: tmp[1], clearable: true }), ];
  let str = "Fetch Changelog";
  if ("" === first) {
    str = "Reset Changelog Override";
  }
  let obj2 = { text: str, variant: null, onPress: null };
  let str2 = "destructive";
  if ("" !== first) {
    let str3 = "primary";
    if (null == first) {
      str3 = "secondary";
    }
    str2 = str3;
  }
  obj2.variant = str2;
  obj2.onPress = function onPress() {
    if ("" === first) {
      ChangeLogActionCreatorsDefault.setChangelogOverride(null);
    } else {
      ChangeLogActionCreatorsDefault.setChangelogOverride(tmp);
    }
    ActionSheetActionCreatorsDefault.hideActionSheet("ChangelogOverrideActionSheet");
  };
  items[1] = closure_9(first(5754).Button, obj2);
  obj.children = items;
  return closure_10(first(7486).ActionSheet, obj);
}
function ChangelogInfo() {
  const obj = { title: "Changelog", hasIcons: false, children: null };
  items = [
    React7(TableRow.TableRow, {
      label: "Changelog override",
      subLabel: "Force a changelog to be shown.",
      arrow: true,
      onPress() {
        ActionSheetActionCreatorsDefault.openLazy(Promise.resolve({ default: ChangelogOverrideActionSheet }), "ChangelogOverrideActionSheet");
      }
    }),
    React7(TableRow.TableRow, {
      label: "Changelog debugging",
      arrow: true,
      onPress() {
        ActionSheetActionCreatorsDefault.openLazy(Promise.resolve({ default: ChangelogOverrideDebuggingActionSheet }), "ChangelogOverrideDebuggingActionSheet");
      }
    })
  ];
  obj.children = items;
  return closure_1_10(TableRowGroup.TableRowGroup, obj);
}
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5141);
let obj = { scrollView: { padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW } };
let closure_11 = createStyles.createStyles(obj);
let obj3 = { padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/changelog/native/UserSettingsSurveyChangelogOverride.tsx");

export default noop.memo(function UserSettingsSurveyChangelogOverride() {
  const obj = { style: closure_11().scrollView, children: null };
  const obj2 = { spacing: 16, children: null };
  items = [React7(SurveyInfo, {}), React7(ChangelogInfo, {})];
  obj2.children = items;
  obj.children = closure_1_10(Stack_Stack.Stack, obj2);
  return React7(ScrollView, obj);
});