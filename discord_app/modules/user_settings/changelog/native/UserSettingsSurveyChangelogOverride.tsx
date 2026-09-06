// discord_app/modules/user_settings/changelog/native/UserSettingsSurveyChangelogOverride.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import SurveyActionCreatorsAll from "../../../../actions/SurveyActionCreators.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import ActionSheetRow from "../../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import ChangeLogActionCreatorsDefault from "../../../../actions/ChangeLogActionCreators.tsx";
import usePreviousDefault from "../../../../hooks/usePrevious.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChangelogStore from "../../../changelog/ChangelogStore.tsx";
import SurveyStore from "../../../../stores/SurveyStore.tsx";

require = fn;
function SurveyOverrideInfoActionSheet(survey) {
  let obj = {
    header: React7(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: "Last Survey Data" }),
    children: null,
  };
  obj = { hasIcons: true, children: null };
  const entries = Object.entries(survey.survey);
  obj.children = entries.map((item) => {
    [tmp, tmp2] = item;
    const obj = { label: tmp, subLabel: null, icon: null, onPress: null };
    let str = "null";
    if (null != tmp2) {
      let _JSON = JSON;
      str = JSON.stringify(tmp2);
    }
    obj.subLabel = str;
    obj.icon = closure_9(closure_0(4507).CopyIcon, {});
    obj.onPress = function onPress() {
      let str = "null";
      if (null != closure_1_0) {
        const _JSON = JSON;
        str = JSON.stringify(tmp);
      }
      require("ClipboardUtils").copy(str);
    };
    return closure_9(closure_0(7200).ActionSheetRow, obj, tmp);
  });
  obj.children = React7(ActionSheetRow.ActionSheetRow.Group, obj);
  return React7(ActionSheet.ActionSheet, obj);
}
function SurveyOverrideActionSheet() {
  const tmp = _slicedToArray(
    noop.useState(() => {
      surveyOverride = surveyOverride.getSurveyOverride();
      if (surveyOverride == null) {
        surveyOverride = null;
      }
      return surveyOverride;
    }),
    2,
  );
  const first = tmp[0];
  let obj = { header: closure_9(first(7149).BottomSheetTitleHeader, { title: "Survey Override" }), children: null };
  const items = [
    closure_9(first(6606).TextInput, {
      label: "Survey Override",
      size: "md",
      placeholder: "Enter the ID of the Survey you want to test",
      onChange: tmp[1],
      isClearable: true,
    }),
  ];
  let str = "Fetch Survey";
  if ("" === first) {
    str = "Reset Survey Override";
  }
  obj = { text: str, variant: null, onPress: null };
  let str2 = "destructive";
  if ("" !== first) {
    let str3 = "primary";
    if (null == first) {
      str3 = "secondary";
    }
    str2 = str3;
  }
  obj.variant = str2;
  obj.onPress = function onPress() {
    if ("" === first) {
      SurveyActionCreatorsAll.overrideSurvey(null);
    } else {
      SurveyActionCreatorsAll.overrideSurvey(tmp);
    }
    ActionSheetActionCreatorsDefault.hideActionSheet("SurveyOverrideActionSheet");
  };
  items[1] = closure_9(first(4975).Button, obj);
  obj.children = items;
  return closure_10(first(7198).ActionSheet, obj);
}
function SurveyInfo() {
  let obj = require("initialize");
  const items = [SurveyStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentSurvey.getCurrentSurvey());
  const tmp2 = usePreviousDefault(stateFromStores);
  _require = tmp2;
  obj = {
    label: "Survey override",
    subLabel: "Force a survey to be shown.",
    arrow: true,
    onPress() {
      const obj = { default: SurveyOverrideActionSheet };
      obj.openLazy(Promise.resolve(obj), "SurveyOverrideActionSheet");
    },
  };
  const items1 = [closure_9(require("TableRow").TableRow, obj)];
  let str;
  if (null == tmp2) {
    str = "No survey data";
  }
  obj = { label: "Previous survey data", subLabel: str, arrow: null != tmp2, onPress: null };
  let fn;
  if (null != tmp2) {
    fn = () => {
      let obj = { default: SurveyOverrideInfoActionSheet };
      obj = { survey };
      obj.openLazy(Promise.resolve(obj), "SurveyOverrideInfoActionSheet", obj);
    };
  }
  const obj1 = { title: "Surveys", hasIcons: false, children: null };
  obj.onPress = fn;
  items1[1] = closure_9(require("TableRow").TableRow, obj);
  obj1.children = items1;
  return closure_10(require("TableRowGroup").TableRowGroup, obj1);
}
function ChangelogOverrideDebuggingActionSheet() {
  let obj = {
    header: React7(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: "Changelog Debugging" }),
    children: null,
  };
  obj = {
    variant: "text-md/semibold",
    children: "" + JSON.stringify(ChangelogStore.getStateForDebugging(), undefined, "\t"),
  };
  obj.children = React7(Text_Text.Text, obj);
  return React7(ActionSheet.ActionSheet, obj);
}
function ChangelogOverrideActionSheet() {
  const tmp = _slicedToArray(
    noop.useState(() => ChangelogStore.overrideId()),
    2,
  );
  const first = tmp[0];
  let obj = { header: closure_9(first(7149).BottomSheetTitleHeader, { title: "Changelog Override" }), children: null };
  const items = [
    closure_9(first(6606).TextInput, {
      label: "Changelog Override",
      size: "md",
      placeholder: "Enter the ID of the changelog you want to test",
      onChange: tmp[1],
      isClearable: true,
    }),
  ];
  let str = "Fetch Changelog";
  if ("" === first) {
    str = "Reset Changelog Override";
  }
  obj = { text: str, variant: null, onPress: null };
  let str2 = "destructive";
  if ("" !== first) {
    let str3 = "primary";
    if (null == first) {
      str3 = "secondary";
    }
    str2 = str3;
  }
  obj.variant = str2;
  obj.onPress = function onPress() {
    if ("" === first) {
      ChangeLogActionCreatorsDefault.setChangelogOverride(null);
    } else {
      ChangeLogActionCreatorsDefault.setChangelogOverride(tmp);
    }
    ActionSheetActionCreatorsDefault.hideActionSheet("ChangelogOverrideActionSheet");
  };
  items[1] = closure_9(first(4975).Button, obj);
  obj.children = items;
  return closure_10(first(7198).ActionSheet, obj);
}
function ChangelogInfo() {
  let obj = { title: "Changelog", hasIcons: false, children: null };
  obj = {
    label: "Changelog override",
    subLabel: "Force a changelog to be shown.",
    arrow: true,
    onPress() {
      const obj = { default: ChangelogOverrideActionSheet };
      obj.openLazy(Promise.resolve(obj), "ChangelogOverrideActionSheet");
    },
  };
  const items = [React7(TableRow.TableRow, obj)];
  obj = {
    label: "Changelog debugging",
    arrow: true,
    onPress() {
      const obj = { default: ChangelogOverrideDebuggingActionSheet };
      obj.openLazy(Promise.resolve(obj), "ChangelogOverrideDebuggingActionSheet");
    },
  };
  items[1] = React7(TableRow.TableRow, obj);
  obj.children = items;
  return closure_1_10(TableRowGroup.TableRowGroup, obj);
}
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let obj = { scrollView: null };
obj = { padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.scrollView = obj;
let closure_11 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/changelog/native/UserSettingsSurveyChangelogOverride.tsx",
);

export default noop.memo(function UserSettingsSurveyChangelogOverride() {
  let obj = { style: closure_11().scrollView, children: null };
  obj = { spacing: 16, children: null };
  const items = [React7(SurveyInfo, {}), React7(ChangelogInfo, {})];
  obj.children = items;
  obj.children = closure_1_10(Stack_Stack.Stack, obj);
  return React7(ScrollView, obj);
});
