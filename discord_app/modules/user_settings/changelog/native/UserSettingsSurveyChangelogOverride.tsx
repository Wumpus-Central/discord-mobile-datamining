// discord_app/modules/user_settings/changelog/native/UserSettingsSurveyChangelogOverride.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import TableRowGroupTitle from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableRowInner from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import usePreviousDefault from "../../../../hooks/usePrevious.tsx";
import RedesignBottomSheetTitleHeaderBase from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import ActionSheetRowIcon from "../../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import cacheBustParamDefault from "../../../../actions/ChangeLogActionCreators.tsx";
import overrideSurveyAll from "../../../../actions/SurveyActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { ScrollView } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import handleUserSettingsProtoStoreChange from "../../../changelog/ChangelogStore.tsx";
import fetchSurveyIfNeeded from "../../../../stores/SurveyStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

require = fn;
function SurveyOverrideInfoActionSheet(survey) {
  { header: callback2(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, { title: "Last Survey Data" }), children: null };
  let obj = { hasIcons: true, children: null };
  const entries = Object.entries(survey.survey);
  obj[1] = entries.map((item, index) => {
    [tmp, tmp2] = item;
    const obj = { label: tmp, subLabel: null, icon: null, onPress: null };
    let str = "null";
    if (null != tmp2) {
      let _JSON = JSON;
      str = JSON.stringify(tmp2);
    }
    obj[1] = str;
    obj[2] = callback(callback(table[11]).CopyIcon, {});
    obj[3] = function onPress() {
      let str = "null";
      if (null != closure_0) {
        const _JSON = JSON;
        str = JSON.stringify(tmp);
      }
      closure_1_0(closure_1_3[12]).copy(str);
    };
    return callback(callback(table[10]).ActionSheetRow, obj, tmp);
  });
  obj[1] = callback2(ActionSheetRowIcon.ActionSheetRow.Group, obj);
  return callback2(ActionSheet.ActionSheet, obj);
}
function SurveyOverrideActionSheet() {
  const tmp = callback(importAllResult.useState(() => {
    surveyOverride = surveyOverride.getSurveyOverride();
    if (surveyOverride == null) {
      surveyOverride = null;
    }
    return surveyOverride;
  }), 2);
  const first = tmp[0];
  let obj = { header: callback2(first(6949).BottomSheetTitleHeader, { title: "Survey Override" }), children: null };
  const items = [callback2(first(8071).TextInput, { label: "Survey Override", size: "md", placeholder: "Enter the ID of the Survey you want to test", onChange: tmp[1], isClearable: true }), ];
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
  obj[1] = str2;
  obj[2] = function onPress() {
    if ("" === first) {
      overrideSurveyAll.overrideSurvey(null);
    } else {
      overrideSurveyAll.overrideSurvey(tmp);
    }
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet("SurveyOverrideActionSheet");
  };
  items[1] = callback2(first(4745).Button, obj);
  obj[1] = items;
  return callback(first(7175).ActionSheet, obj);
}
function SurveyInfo() {
  let obj = initialize;
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => currentSurvey.getCurrentSurvey());
  const tmp2 = usePreviousDefault(stateFromStores);
  _require = tmp2;
  obj = {
    label: "Survey override",
    subLabel: "Force a survey to be shown.",
    arrow: true,
    onPress() {
      callback(table[16]);
      const obj = { default: closure_13 };
      obj.openLazy(Promise.resolve(obj), "SurveyOverrideActionSheet");
    }
  };
  const items1 = [callback2(require("../../../../design/components/TableRow/native/TableRow.native.tsx").TableRow, obj), ];
  let str;
  if (null == tmp2) {
    str = "No survey data";
  }
  obj = { label: "Previous survey data", subLabel: str, arrow: null != tmp2, onPress: null };
  let fn;
  if (null != tmp2) {
    fn = () => {
      const obj = { survey: closure_0 };
      obj.openLazy(Promise.resolve(obj), "SurveyOverrideInfoActionSheet", obj);
    };
  }
  obj1 = { title: "Surveys", hasIcons: false, children: null };
  obj[3] = fn;
  items1[1] = callback2(require("../../../../design/components/TableRow/native/TableRow.native.tsx").TableRow, obj);
  obj1[2] = items1;
  return callback(require("../../../../design/components/TableRow/native/TableRowGroup.native.tsx").TableRowGroup, obj1);
}
function ChangelogOverrideDebuggingActionSheet() {
  { header: callback2(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, { title: "Changelog Debugging" }), children: null };
  const obj = { variant: "text-md/semibold", children: "" + JSON.stringify(stateForDebugging.getStateForDebugging(), undefined, "\t") };
  obj[1] = callback2(Text.Text, obj);
  return callback2(ActionSheet.ActionSheet, obj);
}
function ChangelogOverrideActionSheet() {
  const tmp = callback(importAllResult.useState(() => closure_7.overrideId()), 2);
  const first = tmp[0];
  let obj = { header: callback2(first(6949).BottomSheetTitleHeader, { title: "Changelog Override" }), children: null };
  const items = [callback2(first(8071).TextInput, { label: "Changelog Override", size: "md", placeholder: "Enter the ID of the changelog you want to test", onChange: tmp[1], isClearable: true }), ];
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
  obj[1] = str2;
  obj[2] = function onPress() {
    if ("" === first) {
      cacheBustParamDefault.setChangelogOverride(null);
    } else {
      cacheBustParamDefault.setChangelogOverride(tmp);
    }
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet("ChangelogOverrideActionSheet");
  };
  items[1] = callback2(first(4745).Button, obj);
  obj[1] = items;
  return callback(first(7175).ActionSheet, obj);
}
function ChangelogInfo() {
  let obj = {
    label: "Changelog override",
    subLabel: "Force a changelog to be shown.",
    arrow: true,
    onPress() {
      callback(4342);
      const obj = { default: closure_16 };
      obj.openLazy(Promise.resolve(obj), "ChangelogOverrideActionSheet");
    }
  };
  const items = [callback2(TableRowInner.TableRow, obj), ];
  obj = {
    label: "Changelog debugging",
    arrow: true,
    onPress() {
      callback(4342);
      const obj = { default: closure_15 };
      obj.openLazy(Promise.resolve(obj), "ChangelogOverrideDebuggingActionSheet");
    }
  };
  items[1] = callback2(TableRowInner.TableRow, obj);
  obj[2] = items;
  return callback3(TableRowGroupTitle.TableRowGroup, obj);
}
let c5 = importAllResult;
({ jsx: c9, jsxs: c10 } = jsxProd);
let obj = { padding: ThemesDefault.space.PX_16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[0] = obj;
let closure_11 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function UserSettingsSurveyChangelogOverride() {
  { style: callback4().scrollView, children: null };
  const obj = { spacing: 16, children: null };
  const items = [callback2(SurveyInfo, {}), callback2(ChangelogInfo, {})];
  obj[1] = items;
  obj[1] = callback3(Stack.Stack, obj);
  return callback2(ScrollView, obj);
});
const result = require("obj132").fileFinishedImporting("modules/user_settings/changelog/native/UserSettingsSurveyChangelogOverride.tsx");

export default memoResult;