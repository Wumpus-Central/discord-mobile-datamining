// === Module 15159: SurveyOverrideInfoActionSheet ===

// Module 15159 (SurveyOverrideInfoActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import Stack from "Stack" /* 4733 */;
import Text from "Text" /* 4734 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 6286 */;
import TableRowInner from "TableRowInner" /* 6291 */;
import usePreviousDefault from "usePrevious" /* 6701 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 6949 */;
import ActionSheet from "ActionSheet" /* 7175 */;
import ActionSheetRowIcon from "ActionSheetRowIcon" /* 7177 */;
import cacheBustParamDefault from "cacheBustParam" /* 8304 */;
import overrideSurveyAll from "overrideSurvey" /* 9875 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import handleUserSettingsProtoStoreChange from "handleUserSettingsProtoStoreChange" /* 4771 */;
import fetchSurveyIfNeeded from "fetchSurveyIfNeeded" /* 9874 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

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
  let obj = _require(589);
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
  const items1 = [callback2(_require(6291).TableRow, obj), ];
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
  items1[1] = callback2(_require(6291).TableRow, obj);
  obj1[2] = items1;
  return callback(_require(6286).TableRowGroup, obj1);
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