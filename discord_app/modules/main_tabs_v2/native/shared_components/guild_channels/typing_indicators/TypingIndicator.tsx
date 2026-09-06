// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/typing_indicators/TypingIndicator.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../../design/void/native.tsx";
import shared from "../../../../../../design/shared.tsx";
import useThemeDefault from "../../../../../../hooks/useTheme.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles((arg0) => {
  let obj = { ellipsisWrapper: null, ellipsis: null, ellipsisDot: null };
  obj = { zIndex: 10, borderRadius: 17, borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.ellipsisWrapper = obj;
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  obj.ellipsis = {
    borderRadius: 13,
    paddingVertical: 4,
    paddingStart: 4,
    paddingEnd: 2,
    marginRight: 0,
    backgroundColor: arg0 ? unsafe_rawColors.BRAND_200 : unsafe_rawColors.BRAND_500,
  };
  const unsafe_rawColors2 = nativeDefault.unsafe_rawColors;
  obj.ellipsisDot = {
    width: 4,
    height: 4,
    backgroundColor: arg0 ? unsafe_rawColors2.BRAND_500 : unsafe_rawColors2.WHITE,
  };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/typing_indicators/TypingIndicator.tsx",
);

export const TypingIndicator = function TypingIndicator(style) {
  let obj = shared;
  const tmp2 = closure_5(obj.isThemeLight(useThemeDefault()));
  obj = { style: null, children: null };
  const items = [tmp2.ellipsisWrapper, style.style];
  obj.style = items;
  obj = { style: null, dotStyle: tmp2.ellipsisDot, disableScale: true };
  const items1 = [tmp2.ellipsis];
  obj.style = items1;
  obj.children = jsx(native.Ellipsis, { style: null, dotStyle: tmp2.ellipsisDot, disableScale: true });
  return <View style={null} dotStyle={tmp2.ellipsisDot} disableScale />;
};
