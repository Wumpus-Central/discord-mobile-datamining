// === Module 8898: GameDetectionReportModal ===

// Module 8898 (GameDetectionReportModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import Navigator from "Navigator" /* 7000 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8686 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function ReportContent(applicationId) {
  applicationId = applicationId.applicationId;
  let first;
  _slicedToArray = undefined;
  let str;
  let callback;
  const tmp = callback();
  let obj = applicationId(first[6]);
  const navigation = obj.useNavigation();
  const tmp5 = _slicedToArray(str.useState("issue_selection"), 2);
  first = tmp5[0];
  _slicedToArray = tmp5[1];
  const tmp7 = _slicedToArray(str.useState(""), 2);
  str = tmp7[0];
  closure_5 = tmp7[1];
  const tmp8 = _slicedToArray(str.useState(null), 2);
  const first1 = tmp8[0];
  closure_7 = tmp8[1];
  const tmp10 = _slicedToArray(str.useState(""), 2);
  const str2 = tmp10[0];
  const memo = str.useMemo(() => applicationId(first[7]).generateViewId(), []);
  let obj1 = applicationId(first[8]);
  const results = obj1.useDebouncedGameAutocomplete(str).results;
  callback = str.useCallback(() => {
    navigation(first[9]).popWithKey(results);
  }, []);
  let items = [first, navigation, callback];
  const layoutEffect = str.useLayoutEffect(() => {
    if ("issue_selection" === first) {
      let obj = { title: null, headerLeft: null, headerRight: null };
      const intl2 = util.intl;
      obj.title = intl2.string(util.t["6tnjbD"]);
      obj.headerLeft = function headerLeft() {
        return null;
      };
      obj.headerRight = function headerRight() {
        const obj = { IconComponent: applicationId(first[12]).XSmallIcon, accessibilityLabel: null, onPress: null };
        const intl = applicationId(first[10]).intl;
        obj.accessibilityLabel = intl.string(applicationId(first[10]).t.cpT0Cq);
        obj.onPress = onPress;
        return closure_7(applicationId(first[11]).HeaderActionButton, obj);
      };
      navigation.setOptions(obj);
    } else if ("game_search" === tmp) {
      obj = { title: null, headerLeft: null, headerRight: null };
      let intl = util.intl;
      obj.title = intl.string(util.t.TZgkxY);
      obj.headerLeft = NavigatorHeader.getHeaderBackButton(() => closure_1_3("issue_selection"));
      obj.headerRight = function headerRight() {
        return null;
      };
      navigation.setOptions(obj);
    } else {
      obj = { title: null, headerLeft: null, headerRight: null };
      const intl3 = util.intl;
      obj.title = intl3.string(util.t.tdDpJj);
      obj.headerLeft = NavigatorHeader.getHeaderBackButton(() => closure_1_3("issue_selection"));
      obj.headerRight = function headerRight() {
        return null;
      };
      navigation.setOptions(obj);
    }
  }, items);
  const items1 = [memo, applicationId, str, first1, str2, callback];
  const callback1 = str.useCallback(() => {
    const obj = { viewId: memo, applicationId, suggestedGameName: null, suggestedGameApplicationId: null, feedback: null, submitted: true };
    let trimmed;
    if ("" !== str.trim()) {
      trimmed = str.trim();
    }
    obj.suggestedGameName = trimmed;
    let id;
    if (first1 != null) {
      id = first1.id;
    }
    if (id == null) {
      id = null;
    }
    obj.suggestedGameApplicationId = id;
    let trimmed1;
    if ("" !== str2.trim()) {
      trimmed1 = str2.trim();
    }
    obj.feedback = trimmed1;
    const result = obj.trackGameProfileFeedback(obj);
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
  obj = { style: tmp.container, keyboardShouldPersistTaps: "handled", children: null };
  if ("issue_selection" === first) {
    obj = { style: tmp.content, children: null };
    obj1 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl4 = tmp2(tmp3[10]).intl;
    obj1.children = intl4.string(tmp2(tmp3[10]).t.IQHicr);
    const items3 = [tmp15(tmp2(tmp3[14]).Text, obj1), ];
    let obj2 = {
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
      children: ""
    };
    const obj3 = { value: "wrong_game_shown", label: null };
    const intl5 = tmp2(tmp3[10]).intl;
    obj3.label = intl5.string(tmp2(tmp3[10]).t.TZgkxY);
    const items4 = [tmp15(tmp2(tmp3[16]).TableRadioRow, obj3), ];
    const obj4 = { value: "other_feedback", label: null };
    const intl6 = tmp2(tmp3[10]).intl;
    obj4.label = intl6.string(tmp2(tmp3[10]).t.tdDpJj);
    items4[1] = tmp15(tmp2(tmp3[16]).TableRadioRow, obj4);
    obj2.children = items4;
    items3[1] = str2(tmp2(tmp3[15]).TableRadioGroup, obj2);
    obj.children = items3;
    let tmp17Result = str2(first1, obj);
  } else if ("game_search" === first) {
    let obj5 = { style: tmp.content, children: null };
    const obj6 = { variant: "text-sm/normal", color: "text-muted", children: null };
    let intl = tmp2(tmp3[10]).intl;
    obj6.children = intl.string(tmp2(tmp3[10]).t["79o/iq"]);
    const items5 = [tmp15(tmp2(tmp3[14]).Text, obj6), , ];
    const obj7 = {
      value: str,
      onChange(arg0) {
          closure_5(arg0);
          if (tmp2) {
            closure_7(null);
          }
        },
      placeholder: null
    };
    let intl2 = tmp2(tmp3[10]).intl;
    obj7.placeholder = intl2.string(tmp2(tmp3[10]).t["/SGi7v"]);
    items5[1] = tmp15(tmp2(tmp3[17]).TextInput, obj7);
    let tmp15Result = memo1.length > 0;
    if (tmp15Result) {
      let id;
      if (first1 != null) {
        id = first1.id;
      }
      const obj8 = {
        value: id,
        onChange(arg0) {
              closure_0 = arg0;
              let found = memo1.find((id) => id.id === closure_0);
              if (found == null) {
                found = null;
              }
              closure_7(found);
              if (null != found) {
                closure_5(found.name);
              }
            },
        hasIcons: false,
        children: memo1.map((id, index) => closure_7(applicationId(first[16]).TableRadioRow, { value: id.id, label: id.name }, "" + id.id + "-" + index))
      };
      tmp15Result = tmp15(tmp2(tmp3[15]).TableRadioGroup, obj8);
    }
    const obj9 = { children: null };
    items5[2] = tmp15Result;
    obj5.children = items5;
    const items6 = [str2(first1, obj5), ];
    const obj10 = { style: tmp.submitContainer, children: null };
    const obj11 = { variant: "primary", size: "md", text: null, disabled: null, onPress: null };
    let intl3 = tmp2(tmp3[10]).intl;
    obj11.text = intl3.string(tmp2(tmp3[10]).t.geKm7t);
    obj11.disabled = "" === str.trim();
    obj11.onPress = callback1;
    obj10.children = tmp15(tmp2(tmp3[18]).Button, obj11);
    items6[1] = tmp15(first1, obj10);
    obj9.children = items6;
    tmp17Result = tmp17(memo, obj9);
  } else if ("other_feedback" === first) {
    const obj12 = { children: null };
    const obj13 = { style: tmp.content, children: null };
    const obj14 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl7 = tmp2(tmp3[10]).intl;
    obj14.children = intl7.string(tmp2(tmp3[10]).t.IblYEw);
    const items7 = [tmp15(tmp2(tmp3[14]).Text, obj14), ];
    const obj15 = { value: str2, onChange: tmp10[1], placeholder: null, maxLength: 300 };
    const intl8 = tmp2(tmp3[10]).intl;
    obj15.placeholder = intl8.string(tmp2(tmp3[10]).t.aiPKV4);
    items7[1] = tmp15(tmp2(tmp3[19]).TextArea, obj15);
    obj13.children = items7;
    const items8 = [str2(first1, obj13), ];
    const obj16 = { style: tmp.submitContainer, children: null };
    const obj17 = { variant: "primary", size: "md", text: null, disabled: null, onPress: null };
    const intl9 = tmp2(tmp3[10]).intl;
    obj17.text = intl9.string(tmp2(tmp3[10]).t.geKm7t);
    obj17.disabled = "" === str2.trim();
    obj17.onPress = callback1;
    obj16.children = tmp15(tmp2(tmp3[18]).Button, obj17);
    items8[1] = tmp15(first1, obj16);
    obj12.children = items8;
    tmp17Result = str2(memo, obj12);
  }
  obj.children = tmp17Result;
  return closure_7(closure_5, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let c10 = "game-detection-report";
fn(4560);
let createStyles = { container: null, content: null, submitContainer: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.content = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
let obj1 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
createStyles.submitContainer = { padding: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(createStyles);
const REPORT = "REPORT";
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameDetectionReportModal.tsx");

export default function GameDetectionReportModal(applicationId) {
  const memo = noop.useMemo(() => ({
    [closure_1_13]: {
      render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_7(closure_1_12, {});
      }
    }
  }), []);
  let obj = { screens: memo, initialRouteStack: null };
  obj = { name: REPORT, params: { applicationId: applicationId.applicationId } };
  const items = [obj];
  obj.initialRouteStack = items;
  return React5(Navigator.Navigator, obj);
};
export const MODAL_KEY = "game-detection-report";