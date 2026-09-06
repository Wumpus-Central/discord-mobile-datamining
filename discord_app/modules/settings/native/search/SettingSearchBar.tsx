// === Module 14702: SettingSearchBar ===

// Module 14702 (SettingSearchBar)
import nativeDefault from "native" /* 576 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1874 */;
import Tracking from "Tracking" /* 6997 */;
import SearchField from "SearchField" /* 7050 */;
import noop from "module_19" /* 19 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14691 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null };
createStyles = { marginTop: nativeDefault.modules.mobile.SETTINGS_PADDING_TOP };
createStyles.container = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/settings/native/search/SettingSearchBar.tsx");

export default function SettingSearchBar() {
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
  let obj = { style: tmp.container, children: null };
  const callback3 = noop.useCallback((query) => {
    UserSettingSearchStore.setState({ query });
  }, []);
  obj = { ref: noop.useRef(null), size: "md", onFocus: callback1, onBlur: callback2, onClear: callback, defaultValue: UserSettingSearchStore.getField("query"), onChange: callback3 };
  obj.children = jsx(SearchField.SearchField, { ref: noop.useRef(null), size: "md", onFocus: callback1, onBlur: callback2, onClear: callback, defaultValue: UserSettingSearchStore.getField("query"), onChange: callback3 });
  return <View ref={noop.useRef(null)} size="md" onFocus={callback1} onBlur={callback2} onClear={callback} defaultValue={UserSettingSearchStore.getField("query")} onChange={callback3} />;
};