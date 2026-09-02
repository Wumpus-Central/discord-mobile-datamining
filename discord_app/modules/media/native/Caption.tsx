// === Module 10665: Caption ===

// Module 10665 (Caption)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import ME from "ME" /* 673 */;
import ThemesDefault from "Themes" /* 709 */;
import Button from "Button" /* 1296 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import hexToRgba from "hexToRgba" /* 4326 */;

const View = get_ActivityIndicator.View;
const jsx = jsxProd.jsx;
let obj = { captionText: null, labelContainer: null };
obj = { fontFamily: ME.Fonts.PRIMARY_BOLD, color: ThemesDefault.colors.WHITE, fontSize: 12 };
obj[0] = obj;
const obj1 = { backgroundColor: null, borderRadius: null, paddingHorizontal: 8, paddingVertical: 2, position: "absolute", right: 6, bottom: 6 };
obj1[0] = hexToRgba.hexWithOpacity(ThemesDefault.unsafe_rawColors.PRIMARY_700, 0.5);
obj1[1] = ThemesDefault.radii.xs;
obj[1] = obj1;
let closure_4 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/media/native/Caption.tsx");

export const Caption = function Caption(arg0) {
  ({ label, style, textStyle } = arg0);
  const tmp = callback();
  const items = [tmp.labelContainer, style];
  const items1 = [tmp.captionText, textStyle];
  return <View style={items}>{jsx(Button.LegacyText, { style: items1, children: label })}</View>;
};