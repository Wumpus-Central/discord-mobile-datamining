// === Module 15987: SettingSearchBar ===

// Module 15987 (SettingSearchBar)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1896 */;
import Search_SearchBar from "Search/SearchBar" /* 7145 */;
import settings_tracking_Tracking from "settings/tracking/Tracking" /* 15981 */;
import noop from "module_19" /* 19 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 15975 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4971);
let obj2 = { container: { marginTop: nativeDefault.modules.mobile.SETTINGS_PADDING_TOP } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginTop: nativeDefault.modules.mobile.SETTINGS_PADDING_TOP };
const size = fn(2);
let result = size.fileFinishedImporting("modules/settings/native/search/SettingSearchBar.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SettingSearchBar() {
  const cResult = c.c(7);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      UserSettingSearchStore.setState({ isActive: false, query: "", isFocused: false });
      const result = KeyboardManagerUtils.dismissGlobalKeyboard();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function h() {
      const result = settings_tracking_Tracking.trackSettingSearchInputFocused();
      UserSettingSearchStore.setState({ isActive: true, isFocused: true });
    };
    cResult[1] = fn2;
    let tmp7 = fn2;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function y() {
      UserSettingSearchStore.setState({ isFocused: false });
    };
    cResult[2] = fn3;
    let tmp8 = fn3;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn4 = function v(query) {
      UserSettingSearchStore.setState({ query });
    };
    cResult[3] = fn4;
    let tmp9 = fn4;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { ref, testID: "user_settings_search_input", size: "md", onFocus: tmp7, onBlur: tmp8, onClear: first, defaultValue: UserSettingSearchStore.getField("query"), onChange: tmp9 };
    const tmp13 = jsx(Search_SearchBar.SearchBar, { ref, testID: "user_settings_search_input", size: "md", onFocus: tmp7, onBlur: tmp8, onClear: first, defaultValue: UserSettingSearchStore.getField("query"), onChange: tmp9 });
    cResult[4] = tmp13;
    let tmp10 = tmp13;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== tmp4.container) {
    const obj3 = { style: tmp4.container, children: tmp10 };
    const tmp17 = <View style={tmp4.container}>{tmp10}</View>;
    cResult[5] = tmp4.container;
    cResult[6] = tmp17;
    let tmp14 = tmp17;
  } else {
    tmp14 = cResult[6];
  }
  return tmp14;
}) : (function SettingSearchBar() {
  const tmp = closure_6();
  const callback = noop.useCallback(() => {
    UserSettingSearchStore.setState({ isActive: false, query: "", isFocused: false });
    const result = KeyboardManagerUtils.dismissGlobalKeyboard();
  }, []);
  const callback1 = noop.useCallback(() => {
    const result = settings_tracking_Tracking.trackSettingSearchInputFocused();
    UserSettingSearchStore.setState({ isActive: true, isFocused: true });
  }, []);
  const callback2 = noop.useCallback(() => {
    UserSettingSearchStore.setState({ isFocused: false });
  }, []);
  const obj = { style: tmp.container, children: null };
  const callback3 = noop.useCallback((query) => {
    UserSettingSearchStore.setState({ query });
  }, []);
  const ref = noop.useRef(null);
  obj.children = jsx(Search_SearchBar.SearchBar, { ref: noop.useRef(null), testID: "user_settings_search_input", size: "md", onFocus: callback1, onBlur: callback2, onClear: callback, defaultValue: UserSettingSearchStore.getField("query"), onChange: callback3 });
  return <View style={tmp.container}>{null}</View>;
});