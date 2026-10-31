// discord_app/modules/game_profile/native/components/GameDetectionReportModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import Navigator from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function ReportContent(applicationId) {
  applicationId = applicationId.applicationId;
  first = undefined;
  _slicedToArray = undefined;
  str = undefined;
  closure_5 = undefined;
  first1 = undefined;
  closure_7 = undefined;
  let onSelect;
  const tmp = onSelect();
  const navigation = applicationId(first[6]).useNavigation();
  [first, _slicedToArray] = str.useState("issue_selection");
  [str, closure_5] = str.useState("");
  [first1, closure_7] = str.useState(null);
  const tmp10 = _slicedToArray(str.useState(""), 2);
  const str2 = tmp10[0];
  const memo = str.useMemo(() => applicationId(first[7]).generateViewId(), []);
  let obj = applicationId(first[6]);
  let obj2 = applicationId(first[8]);
  const debouncedGameAutocomplete = obj2.useDebouncedGameAutocomplete(str, {
    surface: applicationId(first[9]).GameSearchSurface.DETECTION_REPORT,
    filterGroup: applicationId(first[10]).GameSearchFilterGroup.DEFAULT,
  });
  const results = debouncedGameAutocomplete.results;
  onSelect = debouncedGameAutocomplete.onSelect;
  const callback = str.useCallback(() => {
    navigation(first[11]).popWithKey(results);
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
        const obj = { IconComponent: applicationId(first[14]).XSmallIcon, accessibilityLabel: null, onPress: null };
        const intl = applicationId(first[12]).intl;
        obj.accessibilityLabel = intl.string(applicationId(first[12]).t.cpT0Cq);
        obj.onPress = onPress;
        return closure_7(applicationId(first[13]).HeaderActionButton, obj);
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
    const obj2 = {
      viewId: memo,
      applicationId,
      suggestedGameName: null,
      suggestedGameApplicationId: null,
      feedback: null,
      submitted: true,
    };
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
  let obj4 = { style: tmp.container, keyboardShouldPersistTaps: "handled", children: null };
  if ("issue_selection" === first) {
    let obj5 = { style: tmp.content, children: null };
    const obj6 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl4 = tmp2(tmp3[12]).intl;
    obj6.children = intl4.string(tmp2(tmp3[12]).t.IQHicr);
    const items3 = [tmp16(tmp2(tmp3[16]).Text, obj6)];
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
      children: true,
    };
    const obj8 = { value: "wrong_game_shown", label: null };
    const intl5 = tmp2(tmp3[12]).intl;
    obj8.label = intl5.string(tmp2(tmp3[12]).t.TZgkxY);
    const items4 = [tmp16(tmp2(tmp3[18]).TableRadioRow, obj8)];
    const obj9 = { value: "other_feedback", label: null };
    const intl6 = tmp2(tmp3[12]).intl;
    obj9.label = intl6.string(tmp2(tmp3[12]).t.tdDpJj);
    items4[1] = tmp16(tmp2(tmp3[18]).TableRadioRow, obj9);
    obj7.children = items4;
    items3[1] = str2(tmp2(tmp3[17]).TableRadioGroup, obj7);
    obj5.children = items3;
    let tmp18Result = str2(first1, obj5);
  } else if ("game_search" === first) {
    const obj10 = { style: tmp.content, children: null };
    const obj11 = { variant: "text-sm/normal", color: "text-muted", children: null };
    let intl = tmp2(tmp3[12]).intl;
    obj11.children = intl.string(tmp2(tmp3[12]).t["79o/iq"]);
    const items5 = [tmp16(tmp2(tmp3[16]).Text, obj11), ,];
    const obj12 = {
      value: str,
      onChange(arg0) {
        closure_5(arg0);
        if (tmp2) {
          closure_7(null);
        }
        tmp2 = null != first1 && arg0 !== first1.name;
      },
      placeholder: null,
    };
    let intl2 = tmp2(tmp3[12]).intl;
    obj12.placeholder = intl2.string(tmp2(tmp3[12]).t["/SGi7v"]);
    items5[1] = tmp16(tmp2(tmp3[19]).TextInput, obj12);
    let tmp16Result = memo1.length > 0;
    if (tmp16Result) {
      let id;
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
        children: memo1.map((id, index) =>
          closure_7(applicationId(first[18]).TableRadioRow, { value: id.id, label: id.name }, "" + id.id + "-" + index),
        ),
      };
      tmp16Result = tmp16(tmp2(tmp3[17]).TableRadioGroup, obj13);
    }
    const obj14 = { children: null };
    items5[2] = tmp16Result;
    obj10.children = items5;
    const items6 = [str2(first1, obj10)];
    const obj15 = { style: tmp.submitContainer, children: null };
    const obj16 = { variant: "primary", size: "md", text: null, disabled: null, onPress: null };
    let intl3 = tmp2(tmp3[12]).intl;
    obj16.text = intl3.string(tmp2(tmp3[12]).t.geKm7t);
    obj16.disabled = "" === str.trim();
    obj16.onPress = callback1;
    obj15.children = tmp16(tmp2(tmp3[20]).Button, obj16);
    items6[1] = tmp16(first1, obj15);
    obj14.children = items6;
    tmp18Result = tmp18(memo, obj14);
  } else if ("other_feedback" === first) {
    const obj17 = { children: null };
    const obj18 = { style: tmp.content, children: null };
    const obj19 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl7 = tmp2(tmp3[12]).intl;
    obj19.children = intl7.string(tmp2(tmp3[12]).t.IblYEw);
    const items7 = [tmp16(tmp2(tmp3[16]).Text, obj19)];
    const obj20 = { value: str2, onChange: tmp10[1], placeholder: null, maxLength: 300 };
    const intl8 = tmp2(tmp3[12]).intl;
    obj20.placeholder = intl8.string(tmp2(tmp3[12]).t.aiPKV4);
    items7[1] = tmp16(tmp2(tmp3[21]).TextArea, obj20);
    obj18.children = items7;
    const items8 = [str2(first1, obj18)];
    const obj21 = { style: tmp.submitContainer, children: null };
    const obj22 = { variant: "primary", size: "md", text: null, disabled: null, onPress: null };
    const intl9 = tmp2(tmp3[12]).intl;
    obj22.text = intl9.string(tmp2(tmp3[12]).t.geKm7t);
    obj22.disabled = "" === str2.trim();
    obj22.onPress = callback1;
    obj21.children = tmp16(tmp2(tmp3[20]).Button, obj22);
    items8[1] = tmp16(first1, obj21);
    obj17.children = items8;
    tmp18Result = str2(memo, obj17);
  }
  obj4.children = tmp18Result;
  return closure_7(closure_5, obj4);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let c10 = "game-detection-report";
const createStyles = fn(5014);
let obj2 = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  content: null,
  submitContainer: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.content = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
let obj4 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
obj2.submitContainer = { padding: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(obj2);
const REPORT = "REPORT";
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameDetectionReportModal.tsx");

export default function GameDetectionReportModal(applicationId) {
  const memo = noop.useMemo(
    () => ({
      [closure_1_13]: {
        render(arg0) {
          const merged = Object.assign(arg0);
          return closure_1_7(closure_1_12, {});
        },
      },
    }),
    [],
  );
  const obj = { screens: memo, initialRouteStack: null };
  const items = [{ name: REPORT, params: { applicationId: applicationId.applicationId } }];
  obj.initialRouteStack = items;
  return React5(Navigator.Navigator, obj);
}
export const MODAL_KEY = "game-detection-report";
