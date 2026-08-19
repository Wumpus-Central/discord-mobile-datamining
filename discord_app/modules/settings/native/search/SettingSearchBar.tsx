// === Module 15067: SettingSearchBar ===

// Module 15067 (SettingSearchBar)
import ThemesDefault from "Themes" /* 712 */;
import SearchField from "SearchField" /* 7337 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import zustandStore from "zustandStore" /* 13993 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
const createCacheKey = { marginTop: ThemesDefault.modules.mobile.SETTINGS_PADDING_TOP };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/settings/native/search/SettingSearchBar.tsx");

export default function SettingSearchBar() {
  const tmp = callback();
  callback = React.useCallback(() => {
    store.setState({ isActive: false, query: "", isFocused: false });
    const result = callback(1892).dismissGlobalKeyboard();
  }, []);
  const callback1 = React.useCallback(() => {
    const result = callback(7359).trackSettingSearchInputFocused();
    store.setState({ isActive: true, isFocused: true });
  }, []);
  const callback2 = React.useCallback(() => {
    store.setState({ isFocused: false });
  }, []);
  const callback3 = React.useCallback((query) => {
    store.setState({ query });
  }, []);
  const obj = { ref: React.useRef(null), size: "md", onFocus: callback1, onBlur: callback2, onClear: callback, defaultValue: field.getField("query"), onChange: callback3 };
  obj[1] = jsx(SearchField.SearchField, { ref: React.useRef(null), size: "md", onFocus: callback1, onBlur: callback2, onClear: callback, defaultValue: field.getField("query"), onChange: callback3 });
  return <View ref={React.useRef(null)} size="md" onFocus={callback1} onBlur={callback2} onClear={callback} defaultValue={field.getField("query")} onChange={callback3} />;
};