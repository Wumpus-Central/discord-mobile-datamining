// === Module 14512: SettingSearchBar ===

// Module 14512 (SettingSearchBar)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1881 */;
import Tracking from "Tracking" /* 6493 */;
import SearchField2 from "SearchField" /* 6547 */;
import react from "react" /* 19 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14501 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { marginTop: nativeDefault.modules.mobile.SETTINGS_PADDING_TOP };
let closure_6 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp10;
  let tmp13;
  let tmp7;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(7);
  const tmp4 = closure_6();
  const ref = react.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      UserSettingSearchStore.setState({ isActive: false, query: "", isFocused: false });
      const obj = KeyboardManagerUtils;
      const result = obj.dismissGlobalKeyboard();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function y() {
      const obj = Tracking;
      const result = obj.trackSettingSearchInputFocused();
      UserSettingSearchStore.setState({ isActive: true, isFocused: true });
    };
    cResult[1] = fn2;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function h() {
      UserSettingSearchStore.setState({ isFocused: false });
    };
    cResult[2] = fn3;
    tmp8 = fn3;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor(query) {
        const obj = { query };
        UserSettingSearchStore.setState(obj);
      }
    }
    cResult[3] = F;
  } else {
    class F {
      constructor(query) {
        const obj = { query };
        UserSettingSearchStore.setState(obj);
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor(query) {
        const obj = { query };
        UserSettingSearchStore.setState(obj);
      }
    }
    const SearchField = SearchField2.SearchField;
    const tmp12 = <SearchField ref={ref} size="md" onFocus={tmp7} onBlur={tmp8} onClear={first} defaultValue={UserSettingSearchStore.getField("query")} onChange={F} />;
    cResult[4] = tmp12;
    tmp10 = tmp12;
  } else {
    class F {
      constructor(query) {
        const obj = { query };
        UserSettingSearchStore.setState(obj);
      }
    }
  }
  if (cResult[5] !== tmp4.container) {
    class F {
      constructor(query) {
        const obj = { query };
        UserSettingSearchStore.setState(obj);
      }
    }
    const tmp15 = <View style={tmp4.container}>{tmp10}</View>;
    cResult[5] = tmp4.container;
    cResult[6] = tmp15;
    tmp13 = tmp15;
  } else {
    class F {
      constructor(query) {
        const obj = { query };
        UserSettingSearchStore.setState(obj);
      }
    }
  }
  return tmp13;
}) : (() => {
  const tmp = closure_6();
  const ref = react.useRef(null);
  const callback = react.useCallback(() => {
    UserSettingSearchStore.setState({ isActive: false, query: "", isFocused: false });
    const obj = KeyboardManagerUtils;
    const result = obj.dismissGlobalKeyboard();
  }, []);
  const callback1 = react.useCallback(() => {
    const obj = Tracking;
    const result = obj.trackSettingSearchInputFocused();
    UserSettingSearchStore.setState({ isActive: true, isFocused: true });
  }, []);
  const callback2 = react.useCallback(() => {
    UserSettingSearchStore.setState({ isFocused: false });
  }, []);
  const callback3 = react.useCallback((query) => {
    const obj = { query };
    UserSettingSearchStore.setState(obj);
  }, []);
  ({ ref, size: "md", onFocus: callback1, onBlur: callback2, onClear: callback, defaultValue: UserSettingSearchStore.getField("query"), onChange: callback3 });
  const SearchField = SearchField2.SearchField;
  return <View style={tmp.container}>{null}</View>;
});
let result = size.fileFinishedImporting("modules/settings/native/search/SettingSearchBar.tsx");

export default tmp2;