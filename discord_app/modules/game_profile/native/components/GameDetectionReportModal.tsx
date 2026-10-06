// === Module 8596: GameDetectionReportModal ===

// Module 8596 (GameDetectionReportModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl10 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import NavigatorHeader from "NavigatorHeader" /* 6017 */;
import TableRadioRow3 from "TableRadioRow" /* 6078 */;
import TableRadioGroup3 from "TableRadioGroup" /* 6079 */;
import TextInput_TextInput from "TextInput/TextInput" /* 6105 */;
import Navigator from "Navigator" /* 6503 */;
import TextArea2 from "TextArea" /* 6587 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8352 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let applicationId, importDefault, navigation, obj1, setOptions2Result, setOptions3Result, setOptionsResult, tmp13, tmp14, tmp17, tmp19, tmp21, tmp22, tmp3, tmp7;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let c10 = "game-detection-report";
let createStyles = createStyles_mod;
let obj = { container: obj2, content: obj3, submitContainer: obj4 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
obj4 = { padding: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((applicationId) => {
  let closure_1;
  let closure_4;
  let first;
  let first4;
  let items;
  let length;
  let onPress;
  let onSelect;
  let results;
  let tmp16;
  const tmp = applicationId;
  let tmp2 = navigation;
  let obj = applicationId(navigation[7]);
  const cResult = obj.c(31);
  applicationId = applicationId.applicationId;
  importDefault = first4();
  const tmp4 = first4();
  let obj2 = applicationId(navigation[8]);
  navigation = obj2.useNavigation();
  let obj3 = react;
  const tmp6 = first(react.useState("issue_selection"), 2);
  first = tmp6[0];
  react = tmp6[1];
  const tmp8 = first(react.useState(""), 2);
  const first1 = tmp8[0];
  let closure_6 = tmp8[1];
  const tmp10 = first(react.useState(null), 2);
  const first2 = tmp10[0];
  let closure_8 = tmp10[1];
  const tmp12 = first(react.useState(""), 2);
  const first3 = tmp12[0];
  const onChange = tmp12[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = tmp(tmp2[9]);
    const viewId = tmpResult.generateViewId();
    cResult[0] = viewId;
    first4 = viewId;
  } else {
    first4 = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj4 = { surface: tmp(tmp2[10]).GameSearchSurface.DETECTION_REPORT };
    cResult[1] = obj4;
    tmp16 = obj4;
  } else {
    tmp16 = cResult[1];
  }
  const tmpResult2 = tmp(tmp2[11]);
  const debouncedGameAutocomplete = tmpResult2.useDebouncedGameAutocomplete(first1, tmp16);
  ({ results, onSelect } = debouncedGameAutocomplete);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        const obj = closure_1(navigation[12]);
        obj.popWithKey(onChange);
      }
    }
    cResult[2] = N;
  } else {
    class N {
      constructor() {
        const obj = closure_1(navigation[12]);
        obj.popWithKey(onChange);
      }
    }
  }
  N = tmp18;
  if (cResult[3] === navigation) {
    class N {
      constructor() {
        const obj = closure_1(navigation[12]);
        obj.popWithKey(onChange);
      }
    }
    const layoutEffect = obj3.useLayoutEffect(V, items);
    if (cResult[7] === applicationId) {
      class N {
        constructor() {
          const obj = closure_1(navigation[12]);
          obj.popWithKey(onChange);
        }
      }
    }
    cResult[7] = applicationId;
    cResult[8] = first3;
    cResult[9] = first1;
    if (first2 != null) {
      class N {
        constructor() {
          const obj = closure_1(navigation[12]);
          obj.popWithKey(onChange);
        }
      }
    }
    const fn = function q() {
      let id;
      let trimmed;
      let trimmed1;
      const obj = { viewId: first4, applicationId, suggestedGameName: trimmed, suggestedGameApplicationId: id, feedback: trimmed1, submitted: true };
      const trackGameProfileFeedback = GameProfileAnalyticUtils.trackGameProfileFeedback;
      trimmed = undefined;
      GameProfileAnalyticUtils;
      if ("" !== first1.trim()) {
        trimmed = first1.trim();
      }
      id = undefined;
      if (first2 != null) {
        id = first2.id;
      }
      if (id == null) {
        id = null;
      }
      trimmed1 = undefined;
      if ("" !== first3.trim()) {
        trimmed1 = first3.trim();
      }
      const result = trackGameProfileFeedback(obj);
      N();
    };
    cResult[10] = undefined;
    cResult[11] = fn;
  }
  class V {
    constructor() {
      if ("issue_selection" === closure_3) {
        tmp10 = closure_2;
        obj1 = { title: null, headerLeft: null, headerRight: null };
        tmp11 = closure_0;
        tmp12 = closure_2;
        setOptions2 = closure_2.setOptions;
        intl2 = closure_0(closure_2[13]).intl;
        tmp13 = closure_0;
        tmp14 = closure_2;
        obj1.title = intl2.string(closure_0(closure_2[13]).t["6tnjbD"]);
        obj1.headerLeft = function headerLeft() {
          return null;
        };
        obj1.headerRight = function headerRight() {
          let intl;
          const obj = { IconComponent: applicationId(navigation[15]).XSmallIcon, accessibilityLabel: intl.string(applicationId(navigation[13]).t.cpT0Cq), onPress };
          const HeaderActionButton = applicationId(navigation[14]).HeaderActionButton;
          intl = applicationId(navigation[13]).intl;
          return first2(HeaderActionButton, obj);
        };
        setOptions2Result = setOptions2(obj1);
      } else {
        str = "game_search";
        if ("game_search" === tmp) {
          tmp2 = closure_2;
          obj = { title: null, headerLeft: null, headerRight: null };
          tmp3 = closure_0;
          tmp4 = closure_2;
          setOptions = closure_2.setOptions;
          intl = closure_0(closure_2[13]).intl;
          tmp5 = closure_0;
          tmp6 = closure_2;
          obj.title = intl.string(closure_0(closure_2[13]).t.TZgkxY);
          tmp7 = closure_0;
          tmp8 = closure_2;
          obj2 = closure_0(closure_2[16]);
          obj.headerLeft = obj2.getHeaderBackButton(() => closure_1_4("issue_selection"));
          obj.headerRight = function headerRight() {
            return null;
          };
          setOptionsResult = setOptions(obj);
        } else {
          tmp16 = closure_2;
          obj6 = { title: null, headerLeft: null, headerRight: null };
          tmp17 = closure_0;
          tmp18 = closure_2;
          setOptions3 = closure_2.setOptions;
          intl3 = closure_0(closure_2[13]).intl;
          tmp19 = closure_0;
          tmp20 = closure_2;
          obj6.title = intl3.string(closure_0(closure_2[13]).t.tdDpJj);
          tmp21 = closure_0;
          tmp22 = closure_2;
          obj5 = closure_0(closure_2[16]);
          obj6.headerLeft = obj5.getHeaderBackButton(() => closure_1_4("issue_selection"));
          obj6.headerRight = function headerRight() {
            return null;
          };
          setOptions3Result = setOptions3(obj6);
        }
      }
      return;
    }
  }
  items = [first, navigation, tmp18];
  cResult[3] = navigation;
  cResult[4] = first;
  cResult[5] = V;
  cResult[6] = items;
}) : ((applicationId) => {
  let Button;
  let Button2;
  let closure_3;
  let closure_5;
  let closure_7;
  let first;
  let first1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj16;
  let obj22;
  let str;
  let str2;
  let tmp11;
  let tmp19Result;
  applicationId = applicationId.applicationId;
  first = undefined;
  _slicedToArray = undefined;
  str = undefined;
  closure_5 = undefined;
  first1 = undefined;
  closure_7 = undefined;
  str2 = undefined;
  let onSelect;
  const tmp = onSelect();
  let tmp2 = applicationId;
  let obj = applicationId(first[8]);
  navigation = obj.useNavigation();
  [first, _slicedToArray] = str.useState("issue_selection");
  [str, closure_5] = str.useState("");
  [first1, closure_7] = str.useState(null);
  [str2, tmp11] = str.useState("");
  const memo = str.useMemo(() => {
    const obj = applicationId(first[9]);
    return obj.generateViewId();
  }, []);
  let obj2 = applicationId(first[11]);
  let obj3 = { surface: applicationId(first[10]).GameSearchSurface.DETECTION_REPORT };
  const debouncedGameAutocomplete = obj2.useDebouncedGameAutocomplete(str, obj3);
  const results = debouncedGameAutocomplete.results;
  onSelect = debouncedGameAutocomplete.onSelect;
  const callback = str.useCallback(() => {
    const obj = navigation(first[12]);
    obj.popWithKey(results);
  }, []);
  let items = [first, navigation, callback];
  const layoutEffect = str.useLayoutEffect(() => {
    let intl;
    let intl2;
    let intl3;
    let obj2;
    let obj5;
    let onPress;
    if ("issue_selection" === first) {
      const setOptions2 = navigation.setOptions;
      const obj3 = {
        title: intl2.string(intl10.t["6tnjbD"]),
        headerLeft() {
            return null;
          },
        headerRight() {
            let intl;
            const obj = { IconComponent: applicationId(first[15]).XSmallIcon, accessibilityLabel: intl.string(applicationId(first[13]).t.cpT0Cq), onPress };
            const HeaderActionButton = applicationId(first[14]).HeaderActionButton;
            intl = applicationId(first[13]).intl;
            return closure_7(HeaderActionButton, obj);
          }
      };
      intl2 = intl10.intl;
      setOptions2(obj3);
    } else if ("game_search" === tmp) {
      let obj = {
        title: intl.string(intl10.t.TZgkxY),
        headerLeft: obj2.getHeaderBackButton(() => closure_1_3("issue_selection")),
        headerRight() {
            return null;
          }
      };
      const setOptions = navigation.setOptions;
      intl = intl10.intl;
      obj2 = NavigatorHeader;
      setOptions(obj);
    } else {
      const setOptions3 = navigation.setOptions;
      const obj4 = {
        title: intl3.string(intl10.t.tdDpJj),
        headerLeft: obj5.getHeaderBackButton(() => closure_1_3("issue_selection")),
        headerRight() {
            return null;
          }
      };
      intl3 = intl10.intl;
      obj5 = NavigatorHeader;
      setOptions3(obj4);
    }
  }, items);
  const items1 = [memo, applicationId, str, first1, str2, callback];
  const callback1 = str.useCallback(() => {
    let id;
    let trimmed;
    let trimmed1;
    const obj = { viewId: memo, applicationId, suggestedGameName: trimmed, suggestedGameApplicationId: id, feedback: trimmed1, submitted: true };
    const trackGameProfileFeedback = GameProfileAnalyticUtils.trackGameProfileFeedback;
    trimmed = undefined;
    GameProfileAnalyticUtils;
    if ("" !== str.trim()) {
      trimmed = str.trim();
    }
    id = undefined;
    if (first1 != null) {
      id = first1.id;
    }
    if (id == null) {
      id = null;
    }
    trimmed1 = undefined;
    if ("" !== str2.trim()) {
      trimmed1 = str2.trim();
    }
    const result = trackGameProfileFeedback(obj);
    callback();
  }, items1);
  const items2 = [results];
  const memo1 = str.useMemo(() => {
    let items = results;
    if (results == null) {
      items = [];
    }
    return items.slice(0, 10);
  }, items2);
  let obj4 = { style: tmp.container, keyboardShouldPersistTaps: "handled", children: tmp19Result };
  const tmp18 = closure_5;
  if ("issue_selection" === first) {
    let obj5 = { style: tmp.content, children: items3 };
    const obj6 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(tmp2(first[13]).t.IQHicr) };
    const Text2 = tmp2(tmp3[17]).Text;
    intl4 = tmp2(tmp3[13]).intl;
    items3 = [closure_7(Text2, obj6), ];
    const obj7 = {
      value: "Array",
      onChange(arg0) {
          let closure_0 = arg0;
          const timerId = setTimeout(() => {
            str = "other_feedback";
            if ("wrong_game_shown" === closure_0) {
              str = "game_search";
            }
            closure_3(str);
          }, 100);
        },
      hasIcons: null,
      children: items4
    };
    const TableRadioGroup2 = tmp2(tmp3[18]).TableRadioGroup;
    const obj8 = { value: "wrong_game_shown", label: intl5.string(tmp2(first[13]).t.TZgkxY) };
    const TableRadioRow = tmp2(tmp3[19]).TableRadioRow;
    intl5 = tmp2(tmp3[13]).intl;
    items4 = [closure_7(TableRadioRow, obj8), ];
    const obj9 = { value: "other_feedback", label: intl6.string(tmp2(first[13]).t.tdDpJj) };
    const TableRadioRow2 = tmp2(tmp3[19]).TableRadioRow;
    intl6 = tmp2(tmp3[13]).intl;
    items4[1] = closure_7(TableRadioRow2, obj9);
    items3[1] = str2(TableRadioGroup2, obj7);
    tmp19Result = str2(first1, obj5);
  } else if ("game_search" === first) {
    const obj10 = { style: tmp.content, children: items5 };
    const obj11 = { variant: "text-sm/normal", color: "text-muted", children: intl.string(tmp2(first[13]).t["79o/iq"]) };
    const Text = tmp2(tmp3[17]).Text;
    intl = tmp2(tmp3[13]).intl;
    items5 = [closure_7(Text, obj11), , ];
    const obj12 = {
      value: str,
      onChange(arg0) {
          closure_5(arg0);
          const tmp2 = null != first1 && arg0 !== first1.name;
          if (tmp2) {
            closure_7(null);
          }
        },
      placeholder: intl2.string(tmp2(first[13]).t["/SGi7v"])
    };
    const TextInput = tmp2(tmp3[20]).TextInput;
    intl2 = tmp2(tmp3[13]).intl;
    items5[1] = closure_7(TextInput, obj12);
    let tmp17Result = memo1.length > 0;
    const tmp20 = memo;
    if (tmp17Result) {
      let id;
      const TableRadioGroup = tmp2(tmp3[18]).TableRadioGroup;
      if (first1 != null) {
        id = first1.id;
      }
      const obj13 = {
        value: id,
        onChange(arg0) {
              let closure_0 = arg0;
              let found = memo1.find((id) => id.id === closure_0);
              if (found == null) {
                found = null;
              }
              closure_7(found);
              if (null != found) {
                onSelect(found.id);
                closure_5(found.name);
              }
            },
        hasIcons: false,
        children: memo1.map((id, index) => {
              const obj = { value: id.id, label: id.name };
              return closure_7(applicationId(first[19]).TableRadioRow, obj, "" + id.id + "-" + index);
            })
      };
      tmp17Result = tmp17(TableRadioGroup, obj13);
    }
    const obj14 = { children: items6 };
    items5[2] = tmp17Result;
    items6 = [str2(first1, obj10), ];
    const obj15 = { style: tmp.submitContainer, children: closure_7(Button, obj16) };
    obj16 = { variant: "primary", size: "md", text: intl3.string(tmp2(first[13]).t.geKm7t), disabled: "" === str.trim(), onPress: callback1 };
    Button = tmp2(tmp3[21]).Button;
    intl3 = tmp2(tmp3[13]).intl;
    items6[1] = closure_7(first1, obj15);
    tmp19Result = tmp19(tmp20, obj14);
  } else if ("other_feedback" === first) {
    const obj17 = { children: items8 };
    const obj18 = { style: tmp.content, children: items7 };
    const obj19 = { variant: "text-sm/normal", color: "text-muted", children: intl7.string(tmp2(first[13]).t.IblYEw) };
    const Text3 = tmp2(tmp3[17]).Text;
    intl7 = tmp2(tmp3[13]).intl;
    items7 = [closure_7(Text3, obj19), ];
    const obj20 = { value: str2, onChange: tmp11, placeholder: intl8.string(tmp2(first[13]).t.aiPKV4), maxLength: 300 };
    const TextArea = tmp2(tmp3[22]).TextArea;
    intl8 = tmp2(tmp3[13]).intl;
    items7[1] = closure_7(TextArea, obj20);
    items8 = [str2(first1, obj18), ];
    const obj21 = { style: tmp.submitContainer, children: closure_7(Button2, obj22) };
    obj22 = { variant: "primary", size: "md", text: intl9.string(tmp2(first[13]).t.geKm7t), disabled: "" === str2.trim(), onPress: callback1 };
    Button2 = tmp2(tmp3[21]).Button;
    intl9 = tmp2(tmp3[13]).intl;
    items8[1] = closure_7(first1, obj21);
    tmp19Result = str2(memo, obj17);
  }
  return closure_7(tmp18, obj4);
});
const REPORT = "REPORT";
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((applicationId) => {
  let first;
  let items;
  let obj6;
  let tmp6;
  let obj = react2;
  const cResult = obj.c(3);
  applicationId = applicationId.applicationId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {};
    const obj3 = {
      render(arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          return closure_1_7(closure_1_12, obj);
        }
    };
    obj2[REPORT] = obj3;
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== applicationId) {
    const obj5 = { name: REPORT, params: obj6 };
    const obj4 = { screens: first, initialRouteStack: items };
    items = [obj5];
    obj6 = { applicationId };
    const tmp9 = metroImportDefault(Navigator.Navigator, obj4);
    cResult[1] = applicationId;
    cResult[2] = tmp9;
    tmp6 = tmp9;
  } else {
    tmp6 = cResult[2];
  }
  return tmp6;
}) : ((applicationId) => {
  let items;
  applicationId = applicationId.applicationId;
  const memo = react.useMemo(() => {
    let obj = {
      render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        return closure_1_7(closure_1_12, obj);
      }
    };
    return { [closure_1_13]: obj };
  }, []);
  let obj = { screens: memo, initialRouteStack: items };
  items = [];
  const obj2 = { name: REPORT, params: { applicationId } };
  items[0] = obj2;
  return metroImportDefault(Navigator.Navigator, obj);
});
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameDetectionReportModal.tsx");

export default tmp5;
export const MODAL_KEY = "game-detection-report";