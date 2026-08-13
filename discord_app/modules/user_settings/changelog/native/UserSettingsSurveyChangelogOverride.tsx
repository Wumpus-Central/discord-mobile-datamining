// discord_app/modules/user_settings/changelog/native/UserSettingsSurveyChangelogOverride.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "TableRowGroupTitle";
import { ScrollView } from "initialize";
import handleUserSettingsProtoStoreChange from "handleUserSettingsProtoStoreChange";
import fetchSurveyIfNeeded from "fetchSurveyIfNeeded";
import jsxProd from "Text";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { ActionSheet } from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import { ActionSheetRowIcon } from "../../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import { RedesignBottomSheetTitleHeaderBase } from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import { Stack } from "../../../../design/components/Stack/native/Stack.native.tsx";
import { TableRowInner } from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import { TableRowGroupTitle } from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { usePrevious } from "../../../../hooks/usePrevious.tsx";

let c10;
let c9;
let require = arg1;
function SurveyOverrideInfoActionSheet(survey) {
  let obj = { header: null, children: null };
  obj[0] = callback2(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, { title: "Last Survey Data" });
  obj = { hasIcons: true, children: null };
  const entries = Object.entries(survey.survey);
  obj[1] = entries.map((arg0) => {
    let tmp;
    let tmp2;
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
      outer1_0(outer1_3[12]).copy(str);
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
  let obj = { header: null, children: null };
  obj[0] = callback2(first(5436).BottomSheetTitleHeader, { title: "Survey Override" });
  const items = [callback2(first(7835).TextInput, { label: "Survey Override", size: "md", placeholder: "Enter the ID of the Survey you want to test", onChange: tmp[1], isClearable: true }), ];
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
      outer1_2(outer1_3[15]).overrideSurvey(null);
      const obj2 = outer1_2(outer1_3[15]);
    } else {
      outer1_2(outer1_3[15]).overrideSurvey(tmp);
      const obj = outer1_2(outer1_3[15]);
    }
    outer1_1(outer1_3[16]).hideActionSheet("SurveyOverrideActionSheet");
  };
  items[1] = callback2(first(4755).Button, obj);
  obj[1] = items;
  return closure_10(first(5804).ActionSheet, obj);
}
function SurveyInfo() {
  let obj = initialize;
  const items = [fetchSurveyIfNeeded];
  const stateFromStores = obj.useStateFromStores(items, () => currentSurvey.getCurrentSurvey());
  const tmp2 = usePrevious(stateFromStores);
  require = tmp2;
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
  const items1 = [callback2(TableRowInner.TableRow, obj), ];
  let str;
  if (null == tmp2) {
    str = "No survey data";
  }
  obj = { label: "Previous survey data", subLabel: str, arrow: null != tmp2, onPress: null };
  let fn;
  if (null != tmp2) {
    fn = () => {
      let obj = outer1_1(outer1_3[16]);
      obj = { default: outer1_12 };
      obj = { survey: closure_0 };
      obj.openLazy(Promise.resolve(obj), "SurveyOverrideInfoActionSheet", obj);
    };
  }
  const obj1 = { title: "Surveys", hasIcons: false, children: null };
  obj[3] = fn;
  items1[1] = callback2(TableRowInner.TableRow, obj);
  obj1[2] = items1;
  return closure_10(TableRowGroupTitle.TableRowGroup, obj1);
}
function ChangelogOverrideDebuggingActionSheet() {
  let obj = { header: null, children: null };
  obj[0] = callback2(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, { title: "Changelog Debugging" });
  obj = { variant: "text-md/semibold", children: null };
  obj[1] = "" + JSON.stringify(stateForDebugging.getStateForDebugging(), undefined, "\t");
  obj[1] = callback2(Text.Text, obj);
  return callback2(ActionSheet.ActionSheet, obj);
}
function ChangelogOverrideActionSheet() {
  const tmp = callback(importAllResult.useState(() => handleUserSettingsProtoStoreChange.overrideId()), 2);
  const first = tmp[0];
  let obj = { header: null, children: null };
  obj[0] = callback2(first(5436).BottomSheetTitleHeader, { title: "Changelog Override" });
  const items = [callback2(first(7835).TextInput, { label: "Changelog Override", size: "md", placeholder: "Enter the ID of the changelog you want to test", onChange: tmp[1], isClearable: true }), ];
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
      outer1_1(outer1_3[22]).setChangelogOverride(null);
      const obj2 = outer1_1(outer1_3[22]);
    } else {
      outer1_1(outer1_3[22]).setChangelogOverride(tmp);
      const obj = outer1_1(outer1_3[22]);
    }
    outer1_1(outer1_3[16]).hideActionSheet("ChangelogOverrideActionSheet");
  };
  items[1] = callback2(first(4755).Button, obj);
  obj[1] = items;
  return closure_10(first(5804).ActionSheet, obj);
}
function ChangelogInfo() {
  let obj = { title: "Changelog", hasIcons: false, children: null };
  obj = {
    label: "Changelog override",
    subLabel: "Force a changelog to be shown.",
    arrow: true,
    onPress() {
      let obj = callback(4310);
      obj = { default: closure_16 };
      obj.openLazy(Promise.resolve(obj), "ChangelogOverrideActionSheet");
    }
  };
  const items = [callback2(TableRowInner.TableRow, obj), ];
  obj = {
    label: "Changelog debugging",
    arrow: true,
    onPress() {
      let obj = callback(4310);
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
obj = { padding: require("Themes").space.PX_16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
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
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/changelog/native/UserSettingsSurveyChangelogOverride.tsx");

export default memoResult;