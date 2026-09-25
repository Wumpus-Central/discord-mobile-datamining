// === Module 15690: typing_indicators/TypingIndicator ===

// Module 15690 (typing_indicators/TypingIndicator)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import shared from "shared" /* 4682 */;
import useThemeDefault from "useTheme" /* 4763 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_5 = createStyles.createStyles((arg0) => {
  const obj = { ellipsisWrapper: { zIndex: 10, borderRadius: 17, borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, ellipsis: null, ellipsisDot: null };
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  obj.ellipsis = { borderRadius: 13, paddingVertical: 4, paddingStart: 4, paddingEnd: 2, marginRight: 0, backgroundColor: arg0 ? unsafe_rawColors.BRAND_200 : unsafe_rawColors.BRAND_500 };
  const unsafe_rawColors2 = nativeDefault.unsafe_rawColors;
  obj.ellipsisDot = { width: 4, height: 4, backgroundColor: arg0 ? unsafe_rawColors2.BRAND_500 : unsafe_rawColors2.WHITE };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/typing_indicators/TypingIndicator.tsx");

export const TypingIndicator = function TypingIndicator(style) {
  const tmp = useThemeDefault();
  const tmp2 = closure_5(shared.isThemeLight(tmp));
  const obj2 = { style: null, children: null };
  const items = [tmp2.ellipsisWrapper, style.style];
  obj2.style = items;
  const obj3 = { style: null, dotStyle: tmp2.ellipsisDot, disableScale: true };
  const items1 = [tmp2.ellipsis];
  obj3.style = items1;
  obj2.children = jsx(native.Ellipsis, { style: null, dotStyle: tmp2.ellipsisDot, disableScale: true });
  return <View style={null}>{null}</View>;
};