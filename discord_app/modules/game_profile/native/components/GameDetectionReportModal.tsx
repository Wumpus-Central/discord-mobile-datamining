// === Module 9095: GameDetectionReportModal ===

// Module 9095 (GameDetectionReportModal)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5087 */;
import components_Button_Button from "components/Button/Button" /* 5376 */;
import NavigatorHeader from "NavigatorHeader" /* 6205 */;
import TableRadioRow from "TableRadioRow" /* 6266 */;
import TableRadioGroup from "TableRadioGroup" /* 6267 */;
import TextInput from "TextInput" /* 6290 */;
import Navigator from "Navigator" /* 6686 */;
import TextArea from "TextArea" /* 6770 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8859 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let c10 = "game-detection-report";
const createStyles = fn(5091);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, content: null, submitContainer: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.content = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
let obj4 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
obj2.submitContainer = { padding: nativeDefault.space.PX_16 };
let viewId = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function ReportContent(applicationId) {
  const cResult = applicationId(navigation[7]).c(31);
  applicationId = applicationId.applicationId;
  let obj = applicationId(navigation[7]);
  importDefault = first4();
  const tmp4 = first4();
  navigation = applicationId(navigation[8]).useNavigation();
  const tmp6 = first(noop.useState("issue_selection"), 2);
  first = tmp6[0];
  noop = tmp6[1];
  const tmp8 = first(noop.useState(""), 2);
  const first1 = tmp8[0];
  closure_6 = tmp8[1];
  const tmp10 = first(noop.useState(null), 2);
  const first2 = tmp10[0];
  closure_8 = tmp10[1];
  const tmp12 = first(noop.useState(""), 2);
  const first3 = tmp12[0];
  const onChange = tmp12[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    viewId = tmp(tmp2[9]).generateViewId();
    cResult[0] = viewId;
    first4 = viewId;
    const tmpResult = tmp(tmp2[9]);
  } else {
    first4 = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj4 = { surface: tmp(tmp2[10]).GameSearchSurface.DETECTION_REPORT, filterGroup: tmp(tmp2[11]).GameSearchFilterGroup.DEFAULT };
    cResult[1] = obj4;
    let tmp16 = obj4;
  } else {
    tmp16 = cResult[1];
  }
  let obj2 = applicationId(navigation[8]);
  let obj3 = noop;
  const debouncedGameAutocomplete = applicationId(navigation[12]).useDebouncedGameAutocomplete(first1, tmp16);
  ({ results, onSelect } = debouncedGameAutocomplete);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        obj = closure_1(closure_2[13]);
        popWithKeyResult = obj.popWithKey(closure_10);
        return;
      }
    }
    cResult[2] = N;
  } else {
    class N {
      constructor() {
        obj = closure_1(closure_2[13]);
        popWithKeyResult = obj.popWithKey(closure_10);
        return;
      }
    }
  }
  REPORT = N;
  if (cResult[3] === navigation) {
    class N {
      constructor() {
        obj = closure_1(closure_2[13]);
        popWithKeyResult = obj.popWithKey(closure_10);
        return;
      }
    }
    const layoutEffect = obj3.useLayoutEffect(Y, items);
    if (cResult[7] === applicationId) {
      class N {
        constructor() {
          obj = closure_1(closure_2[13]);
          popWithKeyResult = obj.popWithKey(closure_10);
          return;
        }
      }
    }
    cResult[7] = applicationId;
    cResult[8] = first3;
    cResult[9] = first1;
    if (first2 != null) {
      class N {
        constructor() {
          obj = closure_1(closure_2[13]);
          popWithKeyResult = obj.popWithKey(closure_10);
          return;
        }
      }
    }
    class X {
      constructor() {
        obj = closure_0(closure_2[9]);
        obj1 = { viewId: closure_11, applicationId, suggestedGameName: null, suggestedGameApplicationId: null, feedback: null, submitted: true };
        str = closure_5;
        trimmed = undefined;
        if ("" !== closure_5.trim()) {
          trimmed = str.trim();
        }
        obj1.suggestedGameName = trimmed;
        id = undefined;
        if (closure_7 != null) {
          id = closure_7.id;
        }
        if (id == null) {
          id = null;
        }
        obj1.suggestedGameApplicationId = id;
        str2 = closure_9;
        trimmed1 = undefined;
        if ("" !== closure_9.trim()) {
          trimmed1 = str2.trim();
        }
        obj1.feedback = trimmed1;
        result = obj.trackGameProfileFeedback(obj1);
        tmp5 = closure_13();
        return;
      }
    }
    cResult[10] = undefined;
    cResult[11] = X;
  }
  class Y {
    constructor() {
      if ("issue_selection" === closure_3) {
        tmp10 = closure_2;
        obj1 = { title: null, headerLeft: null, headerRight: null };
        tmp11 = closure_0;
        tmp12 = closure_2;
        intl2 = closure_0(closure_2[14]).intl;
        tmp13 = closure_0;
        tmp14 = closure_2;
        obj1.title = intl2.string(closure_0(closure_2[14]).t["6tnjbD"]);
        obj1.headerLeft = function headerLeft() { ... };
        obj1.headerRight = function headerRight() { ... };
        setOptionsResult = closure_2.setOptions(obj1);
      } else {
        str = "game_search";
        if ("game_search" === tmp) {
          tmp2 = closure_2;
          obj = { title: null, headerLeft: null, headerRight: null };
          tmp3 = closure_0;
          tmp4 = closure_2;
          intl = closure_0(closure_2[14]).intl;
          tmp5 = closure_0;
          tmp6 = closure_2;
          obj.title = intl.string(closure_0(closure_2[14]).t.TZgkxY);
          tmp7 = closure_0;
          tmp8 = closure_2;
          obj2 = closure_0(closure_2[17]);
          obj.headerLeft = obj2.getHeaderBackButton(() => { ... });
          obj.headerRight = function headerRight() { ... };
          setOptionsResult1 = closure_2.setOptions(obj);
        } else {
          tmp16 = closure_2;
          obj6 = { title: null, headerLeft: null, headerRight: null };
          tmp17 = closure_0;
          tmp18 = closure_2;
          intl3 = closure_0(closure_2[14]).intl;
          tmp19 = closure_0;
          tmp20 = closure_2;
          obj6.title = intl3.string(closure_0(closure_2[14]).t.tdDpJj);
          tmp21 = closure_0;
          tmp22 = closure_2;
          obj5 = closure_0(closure_2[17]);
          obj6.headerLeft = obj5.getHeaderBackButton(() => { ... });
          obj6.headerRight = function headerRight() { ... };
          setOptionsResult2 = closure_2.setOptions(obj6);
        }
      }
      return;
    }
  }
  items = [first, navigation, N];
  cResult[3] = navigation;
  cResult[4] = first;
  cResult[5] = Y;
  cResult[6] = items;
  const tmpResult2 = applicationId(navigation[12]);
}) : (function ReportContent(applicationId) {
  applicationId = applicationId.applicationId;
  first = undefined;
  _slicedToArray = undefined;
  str = undefined;
  closure_5 = undefined;
  first1 = undefined;
  id = undefined;
  let onSelect;
  const tmp = onSelect();
  const navigation = applicationId(first[8]).useNavigation();
  [first, _slicedToArray] = str.useState("issue_selection");
  [str, closure_5] = str.useState("");
  [first1, closure_7] = str.useState(null);
  const tmp10 = _slicedToArray(str.useState(""), 2);
  const str2 = tmp10[0];
  const memo = str.useMemo(() => applicationId(first[9]).generateViewId(), []);
  let obj = applicationId(first[8]);
  let obj2 = applicationId(first[12]);
  const debouncedGameAutocomplete = obj2.useDebouncedGameAutocomplete(str, { surface: applicationId(first[10]).GameSearchSurface.DETECTION_REPORT, filterGroup: applicationId(first[11]).GameSearchFilterGroup.DEFAULT });
  const results = debouncedGameAutocomplete.results;
  onSelect = debouncedGameAutocomplete.onSelect;
  const callback = str.useCallback(() => {
    navigation(first[13]).popWithKey(results);
  }, []);
  let items = [first, navigation, callback];
  const layoutEffect = str.useLayoutEffect(() => {
    if ("issue_selection" === first) {
      const obj3 = { title: null, headerLeft: null, headerRight: null };
      const intl2 = util.intl;
      obj3.title = intl2.string(util.t["6tnjbD"]);
      obj3.headerLeft = function headerLeft() {
        return null;
      };
      obj3.headerRight = function headerRight() {
        const obj = { IconComponent: applicationId(first[16]).XSmallIcon, accessibilityLabel: null, onPress: null };
        const intl = applicationId(first[14]).intl;
        obj.accessibilityLabel = intl.string(applicationId(first[14]).t.cpT0Cq);
        obj.onPress = onPress;
        return closure_7(applicationId(first[15]).HeaderActionButton, obj);
      };
      navigation.setOptions(obj3);
    } else if ("game_search" === tmp) {
      let obj = { title: null, headerLeft: null, headerRight: null };
      let intl = util.intl;
      obj.title = intl.string(util.t.TZgkxY);
      obj.headerLeft = NavigatorHeader.getHeaderBackButton(() => closure_1_3("issue_selection"));
      obj.headerRight = function headerRight() {
        return null;
      };
      navigation.setOptions(obj);
    } else {
      const obj4 = { title: null, headerLeft: null, headerRight: null };
      const intl3 = util.intl;
      obj4.title = intl3.string(util.t.tdDpJj);
      obj4.headerLeft = NavigatorHeader.getHeaderBackButton(() => closure_1_3("issue_selection"));
      obj4.headerRight = function headerRight() {
        return null;
      };
      navigation.setOptions(obj4);
    }
  }, items);
  const items1 = [memo, applicationId, str, first1, str2, callback];
  const callback1 = str.useCallback(() => {
    const obj2 = { viewId: memo, applicationId, suggestedGameName: null, suggestedGameApplicationId: null, feedback: null, submitted: true };
    let trimmed;
    if ("" !== str.trim()) {
      trimmed = str.trim();
    }
    obj2.suggestedGameName = trimmed;
    id = undefined;
    if (first1 != null) {
      id = first1.id;
    }
    if (id == null) {
      id = null;
    }
    obj2.suggestedGameApplicationId = id;
    let trimmed1;
    if ("" !== str2.trim()) {
      trimmed1 = str2.trim();
    }
    obj2.feedback = trimmed1;
    const result = GameProfileAnalyticUtils.trackGameProfileFeedback(obj2);
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
  let obj4 = { style: tmp.container, keyboardShouldPersistTaps: "handled", children: null };
  if ("issue_selection" === first) {
    let obj5 = { style: tmp.content, children: null };
    const obj6 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl4 = tmp2(tmp3[14]).intl;
    obj6.children = intl4.string(tmp2(tmp3[14]).t.IQHicr);
    const items3 = [tmp16(tmp2(tmp3[18]).Text, obj6), ];
    const obj7 = {
      value: "Array",
      onChange(arg0) {
          closure_0 = arg0;
          const timerId = setTimeout(() => {
            str = "other_feedback";
            if ("wrong_game_shown" === closure_0) {
              str = "game_search";
            }
            closure_3(str);
          }, 100);
        },
      hasIcons: null,
      children: false
    };
    const obj8 = { value: "wrong_game_shown", label: null };
    const intl5 = tmp2(tmp3[14]).intl;
    obj8.label = intl5.string(tmp2(tmp3[14]).t.TZgkxY);
    const items4 = [tmp16(tmp2(tmp3[20]).TableRadioRow, obj8), ];
    const obj9 = { value: "other_feedback", label: null };
    const intl6 = tmp2(tmp3[14]).intl;
    obj9.label = intl6.string(tmp2(tmp3[14]).t.tdDpJj);
    items4[1] = tmp16(tmp2(tmp3[20]).TableRadioRow, obj9);
    obj7.children = items4;
    items3[1] = str2(tmp2(tmp3[19]).TableRadioGroup, obj7);
    obj5.children = items3;
    let tmp18Result = str2(first1, obj5);
  } else if ("game_search" === first) {
    const obj10 = { style: tmp.content, children: null };
    const obj11 = { variant: "text-sm/normal", color: "text-muted", children: null };
    let intl = tmp2(tmp3[14]).intl;
    obj11.children = intl.string(tmp2(tmp3[14]).t["79o/iq"]);
    const items5 = [tmp16(tmp2(tmp3[18]).Text, obj11), , ];
    const obj12 = {
      value: str,
      onChange(arg0) {
          closure_5(arg0);
          if (tmp2) {
            closure_7(null);
          }
          tmp2 = null != first1 && arg0 !== first1.name;
        },
      placeholder: null
    };
    let intl2 = tmp2(tmp3[14]).intl;
    obj12.placeholder = intl2.string(tmp2(tmp3[14]).t["/SGi7v"]);
    items5[1] = tmp16(tmp2(tmp3[21]).TextInput, obj12);
    let tmp16Result = memo1.length > 0;
    if (tmp16Result) {
      id = undefined;
      if (first1 != null) {
        id = first1.id;
      }
      const obj13 = {
        value: id,
        onChange(arg0) {
              closure_0 = arg0;
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
        children: memo1.map((id, index) => closure_7(applicationId(first[20]).TableRadioRow, { value: id.id, label: id.name }, "" + id.id + "-" + index))
      };
      tmp16Result = tmp16(tmp2(tmp3[19]).TableRadioGroup, obj13);
    }
    const obj14 = { children: null };
    items5[2] = tmp16Result;
    obj10.children = items5;
    const items6 = [str2(first1, obj10), ];
    const obj15 = { style: tmp.submitContainer, children: null };
    const obj16 = { variant: "primary", size: "md", text: null, disabled: null, onPress: null };
    let intl3 = tmp2(tmp3[14]).intl;
    obj16.text = intl3.string(tmp2(tmp3[14]).t.geKm7t);
    obj16.disabled = "" === str.trim();
    obj16.onPress = callback1;
    obj15.children = tmp16(tmp2(tmp3[22]).Button, obj16);
    items6[1] = tmp16(first1, obj15);
    obj14.children = items6;
    tmp18Result = tmp18(memo, obj14);
  } else if ("other_feedback" === first) {
    const obj17 = { children: null };
    const obj18 = { style: tmp.content, children: null };
    const obj19 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl7 = tmp2(tmp3[14]).intl;
    obj19.children = intl7.string(tmp2(tmp3[14]).t.IblYEw);
    const items7 = [tmp16(tmp2(tmp3[18]).Text, obj19), ];
    const obj20 = { value: str2, onChange: tmp10[1], placeholder: null, maxLength: 300 };
    const intl8 = tmp2(tmp3[14]).intl;
    obj20.placeholder = intl8.string(tmp2(tmp3[14]).t.aiPKV4);
    items7[1] = tmp16(tmp2(tmp3[23]).TextArea, obj20);
    obj18.children = items7;
    const items8 = [str2(first1, obj18), ];
    const obj21 = { style: tmp.submitContainer, children: null };
    const obj22 = { variant: "primary", size: "md", text: null, disabled: null, onPress: null };
    const intl9 = tmp2(tmp3[14]).intl;
    obj22.text = intl9.string(tmp2(tmp3[14]).t.geKm7t);
    obj22.disabled = "" === str2.trim();
    obj22.onPress = callback1;
    obj21.children = tmp16(tmp2(tmp3[22]).Button, obj22);
    items8[1] = tmp16(first1, obj21);
    obj17.children = items8;
    tmp18Result = str2(memo, obj17);
  }
  obj4.children = tmp18Result;
  return id(closure_5, obj4);
});
let REPORT = "REPORT";
ReactCompilerGating = fn(558);
let obj5 = { padding: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameDetectionReportModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GameDetectionReportModal(applicationId) {
  const cResult = c.c(3);
  applicationId = applicationId.applicationId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {};
    const obj3 = {
      render(arg0) {
          const merged = Object.assign(arg0);
          return id(closure_1_12, {});
        }
    };
    obj2[REPORT] = obj3;
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== applicationId) {
    const obj4 = { screens: first, initialRouteStack: null };
    const obj5 = { name: REPORT, params: null };
    const obj6 = { applicationId };
    obj5.params = obj6;
    const items = [obj5];
    obj4.initialRouteStack = items;
    const tmp9 = React5(Navigator.Navigator, obj4);
    cResult[1] = applicationId;
    cResult[2] = tmp9;
    let tmp6 = tmp9;
  } else {
    tmp6 = cResult[2];
  }
  return tmp6;
}) : (function GameDetectionReportModal(applicationId) {
  const memo = noop.useMemo(() => ({
    [closure_1_13]: {
      render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_7(closure_1_12, {});
      }
    }
  }), []);
  const obj = { screens: memo, initialRouteStack: null };
  const items = [{ name: REPORT, params: { applicationId: applicationId.applicationId } }];
  obj.initialRouteStack = items;
  return React5(Navigator.Navigator, obj);
});
export const MODAL_KEY = "game-detection-report";