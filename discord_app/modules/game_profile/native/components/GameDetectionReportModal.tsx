// === Module 9260: GameDetectionReportModal ===

// Module 9260 (GameDetectionReportModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import NavigatorHeader from "NavigatorHeader" /* 5929 */;
import Navigator from "Navigator" /* 7333 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9037 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function ReportContent(applicationId) {
  applicationId = applicationId.applicationId;
  first = undefined;
  _slicedToArray = undefined;
  str = undefined;
  closure_5 = undefined;
  first1 = undefined;
  closure_7 = undefined;
  let callback;
  const tmp = callback();
  const navigation = applicationId(first[6]).useNavigation();
  [first, _slicedToArray] = str.useState("issue_selection");
  [str, closure_5] = str.useState("");
  [first1, closure_7] = str.useState(null);
  const tmp10 = _slicedToArray(str.useState(""), 2);
  const str2 = tmp10[0];
  const memo = str.useMemo(() => applicationId(first[7]).generateViewId(), []);
  let obj = applicationId(first[6]);
  const results = applicationId(first[8]).useDebouncedGameAutocomplete(str).results;
  callback = str.useCallback(() => {
    navigation(first[9]).popWithKey(results);
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
        const obj = { IconComponent: applicationId(first[12]).XSmallIcon, accessibilityLabel: null, onPress: null };
        const intl = applicationId(first[10]).intl;
        obj.accessibilityLabel = intl.string(applicationId(first[10]).t.cpT0Cq);
        obj.onPress = onPress;
        return closure_7(applicationId(first[11]).HeaderActionButton, obj);
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
    let id;
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
  let obj3 = { style: tmp.container, keyboardShouldPersistTaps: "handled", children: null };
  if ("issue_selection" === first) {
    let obj4 = { style: tmp.content, children: null };
    let obj5 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl4 = tmp2(tmp3[10]).intl;
    obj5.children = intl4.string(tmp2(tmp3[10]).t.IQHicr);
    const items3 = [tmp15(tmp2(tmp3[14]).Text, obj5), ];
    const obj6 = {
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
    const obj7 = { value: "wrong_game_shown", label: null };
    const intl5 = tmp2(tmp3[10]).intl;
    obj7.label = intl5.string(tmp2(tmp3[10]).t.TZgkxY);
    const items4 = [tmp15(tmp2(tmp3[16]).TableRadioRow, obj7), ];
    const obj8 = { value: "other_feedback", label: null };
    const intl6 = tmp2(tmp3[10]).intl;
    obj8.label = intl6.string(tmp2(tmp3[10]).t.tdDpJj);
    items4[1] = tmp15(tmp2(tmp3[16]).TableRadioRow, obj8);
    obj6.children = items4;
    items3[1] = str2(tmp2(tmp3[15]).TableRadioGroup, obj6);
    obj4.children = items3;
    let tmp17Result = str2(first1, obj4);
  } else if ("game_search" === first) {
    const obj9 = { style: tmp.content, children: null };
    const obj10 = { variant: "text-sm/normal", color: "text-muted", children: null };
    let intl = tmp2(tmp3[10]).intl;
    obj10.children = intl.string(tmp2(tmp3[10]).t["79o/iq"]);
    const items5 = [tmp15(tmp2(tmp3[14]).Text, obj10), , ];
    const obj11 = {
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
    let intl2 = tmp2(tmp3[10]).intl;
    obj11.placeholder = intl2.string(tmp2(tmp3[10]).t["/SGi7v"]);
    items5[1] = tmp15(tmp2(tmp3[17]).TextInput, obj11);
    let tmp15Result = memo1.length > 0;
    if (tmp15Result) {
      let id;
      if (first1 != null) {
        id = first1.id;
      }
      const obj12 = {
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
      tmp15Result = tmp15(tmp2(tmp3[15]).TableRadioGroup, obj12);
    }
    const obj13 = { children: null };
    items5[2] = tmp15Result;
    obj9.children = items5;
    const items6 = [str2(first1, obj9), ];
    const obj14 = { style: tmp.submitContainer, children: null };
    const obj15 = { variant: "primary", size: "md", text: null, disabled: null, onPress: null };
    let intl3 = tmp2(tmp3[10]).intl;
    obj15.text = intl3.string(tmp2(tmp3[10]).t.geKm7t);
    obj15.disabled = "" === str.trim();
    obj15.onPress = callback1;
    obj14.children = tmp15(tmp2(tmp3[18]).Button, obj15);
    items6[1] = tmp15(first1, obj14);
    obj13.children = items6;
    tmp17Result = tmp17(memo, obj13);
  } else if ("other_feedback" === first) {
    const obj16 = { children: null };
    const obj17 = { style: tmp.content, children: null };
    const obj18 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl7 = tmp2(tmp3[10]).intl;
    obj18.children = intl7.string(tmp2(tmp3[10]).t.IblYEw);
    const items7 = [tmp15(tmp2(tmp3[14]).Text, obj18), ];
    const obj19 = { value: str2, onChange: tmp10[1], placeholder: null, maxLength: 300 };
    const intl8 = tmp2(tmp3[10]).intl;
    obj19.placeholder = intl8.string(tmp2(tmp3[10]).t.aiPKV4);
    items7[1] = tmp15(tmp2(tmp3[19]).TextArea, obj19);
    obj17.children = items7;
    const items8 = [str2(first1, obj17), ];
    const obj20 = { style: tmp.submitContainer, children: null };
    const obj21 = { variant: "primary", size: "md", text: null, disabled: null, onPress: null };
    const intl9 = tmp2(tmp3[10]).intl;
    obj21.text = intl9.string(tmp2(tmp3[10]).t.geKm7t);
    obj21.disabled = "" === str2.trim();
    obj21.onPress = callback1;
    obj20.children = tmp15(tmp2(tmp3[18]).Button, obj21);
    items8[1] = tmp15(first1, obj20);
    obj16.children = items8;
    tmp17Result = str2(memo, obj16);
  }
  obj3.children = tmp17Result;
  return closure_7(closure_5, obj3);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let c10 = "game-detection-report";
const createStyles = fn(4829);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, content: null, submitContainer: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.content = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
let obj4 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
obj2.submitContainer = { padding: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(obj2);
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
  const obj = { screens: memo, initialRouteStack: null };
  const items = [{ name: REPORT, params: { applicationId: applicationId.applicationId } }];
  obj.initialRouteStack = items;
  return React5(Navigator.Navigator, obj);
};
export const MODAL_KEY = "game-detection-report";