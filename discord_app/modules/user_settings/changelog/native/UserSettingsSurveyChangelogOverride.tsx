// === Module 15599: UserSettingsSurveyChangelogOverride ===

// Module 15599 (UserSettingsSurveyChangelogOverride)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import TableRow from "TableRow" /* 6000 */;
import TableRowGroup from "TableRowGroup" /* 6081 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6651 */;
import ActionSheetRow from "ActionSheetRow" /* 6704 */;
import ActionSheet from "ActionSheet" /* 6708 */;
import ChangeLogActionCreatorsDefault from "ChangeLogActionCreators" /* 7776 */;
import usePreviousDefault from "usePrevious" /* 7957 */;
import SurveyActionCreatorsAll from "SurveyActionCreators" /* 15600 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChangelogStore from "ChangelogStore" /* 4910 */;
import SurveyStore from "SurveyStore" /* 5087 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4896);
let obj = { scrollView: { padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW } };
let closure_11 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((survey) => {
  const cResult = c.c(3);
  survey = survey.survey;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = options(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: "Last Survey Data" });
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== survey) {
    const obj2 = { header: first, children: null };
    const obj3 = { hasIcons: true, children: null };
    const _Object = Object;
    const entries = Object.entries(survey);
    obj3.children = entries.map((item) => {
      [tmp2, tmp3] = closure_4(item, 2);
      closure_0 = tmp3;
      const obj = { label: tmp2, subLabel: null, icon: null, onPress: null };
      let str = "null";
      if (null != tmp3) {
        let _JSON = JSON;
        str = JSON.stringify(tmp3);
      }
      obj.subLabel = str;
      obj.icon = closure_9(closure_0(4849).CopyIcon, {});
      obj.onPress = function onPress() {
        let str = "null";
        if (null != closure_0) {
          const _JSON = JSON;
          str = JSON.stringify(tmp);
        }
        require("ClipboardUtils").copy(str);
      };
      return closure_9(closure_0(6704).ActionSheetRow, obj, tmp2);
    });
    obj2.children = options(ActionSheetRow.ActionSheetRow.Group, obj3);
    const tmp9 = options(ActionSheet.ActionSheet, obj2);
    cResult[1] = survey;
    cResult[2] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  return tmp7;
}) : ((survey) => {
  let obj = { header: options(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: "Last Survey Data" }), children: null };
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
    obj.icon = closure_9(closure_0(4849).CopyIcon, {});
    obj.onPress = function onPress() {
      let str = "null";
      if (null != closure_1_0) {
        const _JSON = JSON;
        str = JSON.stringify(tmp);
      }
      require("ClipboardUtils").copy(str);
    };
    return closure_9(closure_0(6704).ActionSheetRow, obj, tmp);
  });
  obj.children = options(ActionSheetRow.ActionSheetRow.Group, obj2);
  return options(ActionSheet.ActionSheet, obj);
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = first1(576).c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      surveyOverride = surveyOverride.getSurveyOverride();
      if (surveyOverride == null) {
        surveyOverride = null;
      }
      return surveyOverride;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = _slicedToArray(noop.useState(first), 2);
  first1 = tmp5[0];
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp10 = closure_9(tmp(6651).BottomSheetTitleHeader, { title: "Survey Override" });
    let obj2 = { label: "Survey Override", size: "md", placeholder: "Enter the ID of the Survey you want to test", onChange: tmp5[1], clearable: true };
    const tmp11 = closure_9(tmp(6105).TextInput, obj2);
    cResult[1] = tmp10;
    cResult[2] = tmp11;
    let tmp8 = tmp11;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
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
        SurveyActionCreatorsAll.overrideSurvey(null);
      } else {
        SurveyActionCreatorsAll.overrideSurvey(tmp);
      }
      ActionSheetActionCreatorsDefault.hideActionSheet("SurveyOverrideActionSheet");
    };
    cResult[3] = first1;
    cResult[4] = fn2;
    let tmp14 = fn2;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] === str) {
    if (cResult[6] === str2) {
      if (cResult[7] === tmp14) {
        let tmp15 = cResult[8];
      }
      return tmp15;
    }
  }
  let obj3 = { header: tmp7, children: null };
  const items = [tmp8, closure_9(first1(5601).Button, { text: str, variant: str2, onPress: tmp14 })];
  obj3.children = items;
  const tmp16 = closure_10(first1(6708).ActionSheet, obj3);
  cResult[5] = str;
  cResult[6] = str2;
  cResult[7] = tmp14;
  cResult[8] = tmp16;
  tmp15 = tmp16;
  let obj = first1(576);
}) : (() => {
  const tmp = _slicedToArray(noop.useState(() => {
    surveyOverride = surveyOverride.getSurveyOverride();
    if (surveyOverride == null) {
      surveyOverride = null;
    }
    return surveyOverride;
  }), 2);
  const first = tmp[0];
  let obj = { header: closure_9(first(6651).BottomSheetTitleHeader, { title: "Survey Override" }), children: null };
  const items = [closure_9(first(6105).TextInput, { label: "Survey Override", size: "md", placeholder: "Enter the ID of the Survey you want to test", onChange: tmp[1], clearable: true }), ];
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
  items[1] = closure_9(first(5601).Button, obj2);
  obj.children = items;
  return closure_10(first(6708).ActionSheet, obj);
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(9);
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
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
  const tmp8 = usePreviousDefault(stateFromStores);
  _require = tmp8;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {
      label: "Survey override",
      subLabel: "Force a survey to be shown.",
      arrow: true,
      onPress() {
          ActionSheetActionCreatorsDefault.openLazy(Promise.resolve({ default: closure_1_13 }), "SurveyOverrideActionSheet");
        }
    };
    const tmp11 = closure_9(tmp(6000).TableRow, obj2);
    cResult[2] = tmp11;
    let tmp9 = tmp11;
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
        ActionSheetActionCreatorsDefault.openLazy(Promise.resolve({ default: closure_12 }), "SurveyOverrideInfoActionSheet", { survey });
      };
    }
    cResult[3] = tmp8;
    cResult[4] = fn2;
    let tmp13 = fn2;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] === str) {
    if (cResult[6] === tmp12) {
      if (cResult[7] === tmp13) {
        let tmp14 = cResult[8];
      }
      return tmp14;
    }
  }
  const obj3 = { title: "Surveys", hasIcons: false, children: null };
  const items1 = [tmp9, closure_9(require("TableRow").TableRow, { label: "Previous survey data", subLabel: str, arrow: null != tmp8, onPress: tmp13 })];
  obj3.children = items1;
  const tmp15 = closure_10(require("TableRowGroup").TableRowGroup, obj3);
  cResult[5] = str;
  cResult[6] = null != tmp8;
  cResult[7] = tmp13;
  cResult[8] = tmp15;
  tmp14 = tmp15;
  const tmpResult = require("initialize");
}) : (() => {
  const items = [SurveyStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentSurvey.getCurrentSurvey());
  const tmp2 = usePreviousDefault(stateFromStores);
  _require = tmp2;
  const items1 = [
    closure_9(require("TableRow").TableRow, {
      label: "Survey override",
      subLabel: "Force a survey to be shown.",
      arrow: true,
      onPress() {
        ActionSheetActionCreatorsDefault.openLazy(Promise.resolve({ default: closure_1_13 }), "SurveyOverrideActionSheet");
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
      ActionSheetActionCreatorsDefault.openLazy(Promise.resolve({ default: closure_12 }), "SurveyOverrideInfoActionSheet", { survey });
    };
  }
  const obj4 = { title: "Surveys", hasIcons: false, children: null };
  obj3.onPress = fn;
  items1[1] = closure_9(require("TableRow").TableRow, obj3);
  obj4.children = items1;
  return closure_10(require("TableRowGroup").TableRowGroup, obj4);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = options(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: "Changelog Debugging" });
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { header: first, children: null };
    const obj3 = { variant: "text-md/semibold", children: null };
    const _JSON = JSON;
    const _HermesInternal = HermesInternal;
    obj3.children = "" + JSON.stringify(ChangelogStore.getStateForDebugging(), undefined, "\t");
    obj2.children = options(Text_Text.Text, obj3);
    const tmp10 = options(ActionSheet.ActionSheet, obj2);
    cResult[1] = tmp10;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[1];
  }
  return tmp7;
}) : (() => {
  const obj = { header: options(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: "Changelog Debugging" }), children: options(Text_Text.Text, { variant: "text-md/semibold", children: "" + JSON.stringify(ChangelogStore.getStateForDebugging(), undefined, "\t") }) };
  return options(ActionSheet.ActionSheet, obj);
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = first1(576).c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      return ChangelogStore.overrideId();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = _slicedToArray(noop.useState(first), 2);
  first1 = tmp5[0];
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp10 = closure_9(tmp(6651).BottomSheetTitleHeader, { title: "Changelog Override" });
    let obj2 = { label: "Changelog Override", size: "md", placeholder: "Enter the ID of the changelog you want to test", onChange: tmp5[1], clearable: true };
    const tmp11 = closure_9(tmp(6105).TextInput, obj2);
    cResult[1] = tmp10;
    cResult[2] = tmp11;
    let tmp8 = tmp11;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
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
        ChangeLogActionCreatorsDefault.setChangelogOverride(null);
      } else {
        ChangeLogActionCreatorsDefault.setChangelogOverride(tmp);
      }
      ActionSheetActionCreatorsDefault.hideActionSheet("ChangelogOverrideActionSheet");
    };
    cResult[3] = first1;
    cResult[4] = fn2;
    let tmp14 = fn2;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] === str) {
    if (cResult[6] === str2) {
      if (cResult[7] === tmp14) {
        let tmp15 = cResult[8];
      }
      return tmp15;
    }
  }
  let obj3 = { header: tmp7, children: null };
  const items = [tmp8, closure_9(first1(5601).Button, { text: str, variant: str2, onPress: tmp14 })];
  obj3.children = items;
  const tmp16 = closure_10(first1(6708).ActionSheet, obj3);
  cResult[5] = str;
  cResult[6] = str2;
  cResult[7] = tmp14;
  cResult[8] = tmp16;
  tmp15 = tmp16;
  let obj = first1(576);
}) : (() => {
  const tmp = _slicedToArray(noop.useState(() => ChangelogStore.overrideId()), 2);
  const first = tmp[0];
  let obj = { header: closure_9(first(6651).BottomSheetTitleHeader, { title: "Changelog Override" }), children: null };
  const items = [closure_9(first(6105).TextInput, { label: "Changelog Override", size: "md", placeholder: "Enter the ID of the changelog you want to test", onChange: tmp[1], clearable: true }), ];
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
  items[1] = closure_9(first(5601).Button, obj2);
  obj.children = items;
  return closure_10(first(6708).ActionSheet, obj);
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {
      label: "Changelog override",
      subLabel: "Force a changelog to be shown.",
      arrow: true,
      onPress() {
          ActionSheetActionCreatorsDefault.openLazy(Promise.resolve({ default: closure_1_16 }), "ChangelogOverrideActionSheet");
        }
    };
    const tmp6 = options(TableRow.TableRow, obj2);
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { title: "Changelog", hasIcons: false, children: null };
    const items = [first, ];
    const obj4 = {
      label: "Changelog debugging",
      arrow: true,
      onPress() {
          ActionSheetActionCreatorsDefault.openLazy(Promise.resolve({ default: closure_1_15 }), "ChangelogOverrideDebuggingActionSheet");
        }
    };
    items[1] = options(TableRow.TableRow, obj4);
    obj3.children = items;
    const tmp10 = v65535(TableRowGroup.TableRowGroup, obj3);
    cResult[1] = tmp10;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[1];
  }
  return tmp7;
}) : (() => {
  const obj = { title: "Changelog", hasIcons: false, children: null };
  const items = [
    options(TableRow.TableRow, {
      label: "Changelog override",
      subLabel: "Force a changelog to be shown.",
      arrow: true,
      onPress() {
        ActionSheetActionCreatorsDefault.openLazy(Promise.resolve({ default: closure_1_16 }), "ChangelogOverrideActionSheet");
      }
    }),
    options(TableRow.TableRow, {
      label: "Changelog debugging",
      arrow: true,
      onPress() {
        ActionSheetActionCreatorsDefault.openLazy(Promise.resolve({ default: closure_1_15 }), "ChangelogOverrideDebuggingActionSheet");
      }
    })
  ];
  obj.children = items;
  return v65535(TableRowGroup.TableRowGroup, obj);
});
ReactCompilerGating = fn(558);
let obj3 = { padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/changelog/native/UserSettingsSurveyChangelogOverride.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { spacing: 16, children: null };
    const items = [options(closure_14, {}), options(closure_17, {})];
    obj2.children = items;
    const tmp10 = v65535(Stack_Stack.Stack, obj2);
    cResult[0] = tmp10;
    let first = tmp10;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.scrollView) {
    const obj3 = { style: tmp4.scrollView, children: first };
    const tmp14 = options(ScrollView, obj3);
    cResult[1] = tmp4.scrollView;
    cResult[2] = tmp14;
    let tmp11 = tmp14;
  } else {
    tmp11 = cResult[2];
  }
  return tmp11;
}) : (() => {
  const obj = { style: closure_11().scrollView, children: null };
  const obj2 = { spacing: 16, children: null };
  const items = [options(closure_14, {}), options(closure_17, {})];
  obj2.children = items;
  obj.children = v65535(Stack_Stack.Stack, obj2);
  return options(ScrollView, obj);
}));