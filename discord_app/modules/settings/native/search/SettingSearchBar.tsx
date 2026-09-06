// discord_app/modules/settings/native/search/SettingSearchBar.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import KeyboardManagerUtils from "../../../../utils/native/KeyboardManagerUtils.tsx";
import Tracking from "../../tracking/Tracking.tsx";
import SearchField from "../../../../design/components/TextField/native/SearchField.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserSettingSearchStore from "../../../user_settings/UserSettingSearchStore.tsx";

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
  obj = {
    ref: noop.useRef(null),
    size: "md",
    onFocus: callback1,
    onBlur: callback2,
    onClear: callback,
    defaultValue: UserSettingSearchStore.getField("query"),
    onChange: callback3,
  };
  obj.children = jsx(SearchField.SearchField, {
    ref: noop.useRef(null),
    size: "md",
    onFocus: callback1,
    onBlur: callback2,
    onClear: callback,
    defaultValue: UserSettingSearchStore.getField("query"),
    onChange: callback3,
  });
  return (
    <View
      ref={noop.useRef(null)}
      size="md"
      onFocus={callback1}
      onBlur={callback2}
      onClear={callback}
      defaultValue={UserSettingSearchStore.getField("query")}
      onChange={callback3}
    />
  );
}
