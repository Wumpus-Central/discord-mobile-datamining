// === Module 15238: SurveyOverrideInfoActionSheet ===

// Module 15238 (SurveyOverrideInfoActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4442 */;
import Stack from "Stack" /* 4891 */;
import TableRowInner from "TableRowInner" /* 5564 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 5586 */;
import ActionSheet from "ActionSheet" /* 5954 */;
import ActionSheetRowIcon from "ActionSheetRowIcon" /* 5956 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 5957 */;
import usePreviousDefault from "usePrevious" /* 8522 */;
import closure_4 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import closure_7 from "handleUserSettingsProtoStoreChange" /* 4460 */;
import closure_8 from "fetchSurveyIfNeeded" /* 4677 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
function SurveyOverrideInfoActionSheet(survey) {
  let obj = { header: callback2(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, { title: "Last Survey Data" }), children: null };
  obj = { hasIcons: true, children: null };
  const entries = Object.entries(survey.survey);
  obj[1] = entries.map((arg0) => {
    [tmp, tmp2] = arg0;
    const obj = { label: tmp, subLabel: null, icon: null, onPress: null };
    let str = "null";
    if (null != tmp2) {
      let _JSON = JSON;
      str = JSON.stringify(tmp2);
    }
    obj[1] = str;
    obj[2] = closure_9(callback(table[11]).CopyIcon, {});
    obj[3] = function onPress() {
      let str = "null";
      if (null != closure_0) {
        const _JSON = JSON;
        str = JSON.stringify(tmp);
      }
      closure_1_0(closure_1_3[12]).copy(str);
    };
    return closure_9(callback(table[10]).ActionSheetRow, obj, tmp);
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
  let obj = { header: callback2(first(5586).BottomSheetTitleHeader, { title: "Survey Override" }), children: null };
  const items = [callback2(first(7652).TextInput, { label: "Survey Override", size: "md", placeholder: "Enter the ID of the Survey you want to test", onChange: tmp[1], isClearable: true }), ];
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
      closure_1_2(closure_1_3[15]).overrideSurvey(null);
      const obj2 = closure_1_2(closure_1_3[15]);
    } else {
      closure_1_2(closure_1_3[15]).overrideSurvey(tmp);
      const obj = closure_1_2(closure_1_3[15]);
    }
    closure_1_1(closure_1_3[16]).hideActionSheet("SurveyOverrideActionSheet");
  };
  items[1] = callback2(first(4893).Button, obj);
  obj[1] = items;
  return closure_10(first(5954).ActionSheet, obj);
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
      let obj = callback(table[16]);
      obj = { default: closure_13 };
      obj.openLazy(Promise.resolve(obj), "SurveyOverrideActionSheet");
    }
  };
  const items1 = [callback2(_require(5564).TableRow, obj), ];
  let str;
  if (null == tmp2) {
    str = "No survey data";
  }
  obj = { label: "Previous survey data", subLabel: str, arrow: null != tmp2, onPress: null };
  let fn;
  if (null != tmp2) {
    fn = () => {
      let obj = closure_1_1(closure_1_3[16]);
      obj = { default: closure_1_12 };
      obj = { survey: closure_0 };
      obj.openLazy(Promise.resolve(obj), "SurveyOverrideInfoActionSheet", obj);
    };
  }
  obj1 = { title: "Surveys", hasIcons: false, children: null };
  obj[3] = fn;
  items1[1] = callback2(_require(5564).TableRow, obj);
  obj1[2] = items1;
  return closure_10(_require(5957).TableRowGroup, obj1);
}
function ChangelogOverrideDebuggingActionSheet() {
  let obj = { header: callback2(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, { title: "Changelog Debugging" }), children: null };
  obj = { variant: "text-md/semibold", children: "" + JSON.stringify(stateForDebugging.getStateForDebugging(), undefined, "\t") };
  obj[1] = callback2(Text.Text, obj);
  return callback2(ActionSheet.ActionSheet, obj);
}
function ChangelogOverrideActionSheet() {
  const tmp = callback(importAllResult.useState(() => closure_7.overrideId()), 2);
  const first = tmp[0];
  let obj = { header: callback2(first(5586).BottomSheetTitleHeader, { title: "Changelog Override" }), children: null };
  const items = [callback2(first(7652).TextInput, { label: "Changelog Override", size: "md", placeholder: "Enter the ID of the changelog you want to test", onChange: tmp[1], isClearable: true }), ];
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
      closure_1_1(closure_1_3[22]).setChangelogOverride(null);
      const obj2 = closure_1_1(closure_1_3[22]);
    } else {
      closure_1_1(closure_1_3[22]).setChangelogOverride(tmp);
      const obj = closure_1_1(closure_1_3[22]);
    }
    closure_1_1(closure_1_3[16]).hideActionSheet("ChangelogOverrideActionSheet");
  };
  items[1] = callback2(first(4893).Button, obj);
  obj[1] = items;
  return closure_10(first(5954).ActionSheet, obj);
}
function ChangelogInfo() {
  let obj = { title: "Changelog", hasIcons: false, children: null };
  obj = {
    label: "Changelog override",
    subLabel: "Force a changelog to be shown.",
    arrow: true,
    onPress() {
      let obj = callback(4413);
      obj = { default: closure_16 };
      obj.openLazy(Promise.resolve(obj), "ChangelogOverrideActionSheet");
    }
  };
  const items = [callback2(TableRowInner.TableRow, obj), ];
  obj = {
    label: "Changelog debugging",
    arrow: true,
    onPress() {
      let obj = callback(4413);
      obj = { default: closure_15 };
      obj.openLazy(Promise.resolve(obj), "ChangelogOverrideDebuggingActionSheet");
    }
  };
  items[1] = callback2(TableRowInner.TableRow, obj);
  obj[2] = items;
  return callback3(TableRowGroupTitle.TableRowGroup, obj);
}
let c5 = importAllResult;
({ jsx: c9, jsxs: c10 } = jsxProd);
let obj = { scrollView: null };
obj = { padding: ThemesDefault.space.PX_16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[0] = obj;
let closure_11 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function UserSettingsSurveyChangelogOverride() {
  let obj = { style: callback4().scrollView, children: null };
  obj = { spacing: 16, children: null };
  const items = [callback2(SurveyInfo, {}), callback2(ChangelogInfo, {})];
  obj[1] = items;
  obj[1] = callback3(Stack.Stack, obj);
  return callback2(ScrollView, obj);
});
const result = require("set").fileFinishedImporting("modules/user_settings/changelog/native/UserSettingsSurveyChangelogOverride.tsx");

export default memoResult;