// === Module 14512: SettingSearchBar ===

// Module 14512 (SettingSearchBar)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1881 */;
import Tracking from "Tracking" /* 6493 */;
import SearchField from "SearchField" /* 6547 */;
import noop from "module_19" /* 19 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14501 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { container: { marginTop: nativeDefault.modules.mobile.SETTINGS_PADDING_TOP } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginTop: nativeDefault.modules.mobile.SETTINGS_PADDING_TOP };
const size = fn(2);
let result = size.fileFinishedImporting("modules/settings/native/search/SettingSearchBar.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
    const fn2 = function y() {
      const result = Tracking.trackSettingSearchInputFocused();
      UserSettingSearchStore.setState({ isActive: true, isFocused: true });
    };
    cResult[1] = fn2;
    let tmp7 = fn2;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function h() {
      UserSettingSearchStore.setState({ isFocused: false });
    };
    cResult[2] = fn3;
    let tmp8 = fn3;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor(arg0) {
        obj = { query: arg0 };
        setStateResult = closure_1_4.setState(obj);
        return;
      }
    }
    cResult[3] = F;
  } else {
    class F {
      constructor(arg0) {
        obj = { query: arg0 };
        setStateResult = closure_1_4.setState(obj);
        return;
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor(arg0) {
        obj = { query: arg0 };
        setStateResult = closure_1_4.setState(obj);
        return;
      }
    }
    const obj2 = { ref, size: "md", onFocus: tmp7, onBlur: tmp8, onClear: first, defaultValue: UserSettingSearchStore.getField("query"), onChange: F };
    const tmp12 = jsx(SearchField.SearchField, { ref, size: "md", onFocus: tmp7, onBlur: tmp8, onClear: first, defaultValue: UserSettingSearchStore.getField("query"), onChange: F });
    cResult[4] = tmp12;
    const tmp10 = tmp12;
  } else {
    class F {
      constructor(arg0) {
        obj = { query: arg0 };
        setStateResult = closure_1_4.setState(obj);
        return;
      }
    }
  }
  if (cResult[5] !== tmp4.container) {
    class F {
      constructor(arg0) {
        obj = { query: arg0 };
        setStateResult = closure_1_4.setState(obj);
        return;
      }
    }
    const obj3 = { style: tmp4.container, children: tmp10 };
    const tmp15 = <View style={tmp4.container}>{tmp10}</View>;
    cResult[5] = tmp4.container;
    cResult[6] = tmp15;
    const tmp13 = tmp15;
  } else {
    class F {
      constructor(arg0) {
        obj = { query: arg0 };
        setStateResult = closure_1_4.setState(obj);
        return;
      }
    }
  }
  return tmp13;
}) : (() => {
  const tmp = closure_6();
  const callback = noop.useCallback(() => {
    UserSettingSearchStore.setState({ isActive: false, query: "", isFocused: false });
    const result = KeyboardManagerUtils.dismissGlobalKeyboard();
  }, []);
  const callback1 = noop.useCallback(() => {
    const result = Tracking.trackSettingSearchInputFocused();
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
  obj.children = jsx(SearchField.SearchField, { ref: noop.useRef(null), size: "md", onFocus: callback1, onBlur: callback2, onClear: callback, defaultValue: UserSettingSearchStore.getField("query"), onChange: callback3 });
  return <View style={tmp.container}>{null}</View>;
});