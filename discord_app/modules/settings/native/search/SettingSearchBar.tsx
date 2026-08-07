// discord_app/modules/settings/native/search/SettingSearchBar.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import zustandStore from "zustandStore";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { SearchField } from "../../../../design/components/TextField/native/SearchField.native.tsx";

const require = arg1;
createCacheKey = { container: null };
createCacheKey = { marginTop: require("Themes").modules.mobile.SETTINGS_PADDING_TOP };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("zustandStore").fileFinishedImporting("modules/settings/native/search/SettingSearchBar.tsx");

export default function SettingSearchBar() {
  const tmp = createCacheKey();
  const callback = React.useCallback(() => {
    store.setState({ isActive: false, query: "", isFocused: false });
    const result = callback(1872).dismissGlobalKeyboard();
  }, []);
  const callback1 = React.useCallback(() => {
    const result = callback(5955).trackSettingSearchInputFocused();
    store.setState({ isActive: true, isFocused: true });
  }, []);
  const callback2 = React.useCallback(() => {
    store.setState({ isFocused: false });
  }, []);
  let obj = { style: tmp.container, children: null };
  const callback3 = React.useCallback((query) => {
    store.setState({ query });
  }, []);
  obj = { ref: React.useRef(null), size: "md", onFocus: callback1, onBlur: callback2, onClear: callback, defaultValue: null, onChange: null };
  obj[5] = field.getField("query");
  obj[6] = callback3;
  obj[1] = jsx(SearchField.SearchField, { ref: React.useRef(null), size: "md", onFocus: callback1, onBlur: callback2, onClear: callback, defaultValue: null, onChange: null });
  return <View ref={React.useRef(null)} size="md" onFocus={callback1} onBlur={callback2} onClear={callback} defaultValue={null} onChange={null} />;
};