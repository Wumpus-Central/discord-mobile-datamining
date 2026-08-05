import { Button } from "../../../design/void/native.tsx";
// discord_app/modules/media/native/Caption.tsx
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import hexToRgba from "hexToRgba";

let obj = { captionText: null, labelContainer: null };
obj = { fontFamily: require("ME").Fonts.PRIMARY_BOLD, color: require("Themes").colors.WHITE, fontSize: 12 };
obj[0] = obj;
const obj1 = { backgroundColor: null, borderRadius: null, paddingHorizontal: 8, paddingVertical: 2, position: "absolute", right: 6, bottom: 6 };
obj1[0] = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.PRIMARY_700, 0.5);
obj1[1] = require("Themes").radii.xs;
obj[1] = obj1;
let closure_4 = createCacheKey.createStyles(obj);
const result = require("jsxProd").fileFinishedImporting("modules/media/native/Caption.tsx");

export const Caption = function Caption(arg0) {
  let label;
  let style;
  let textStyle;
  ({ label, style, textStyle } = arg0);
  const tmp = callback();
  const items = [tmp.labelContainer, style];
  const items1 = [tmp.captionText, textStyle];
  return <View style={items}>{jsx(Button /* Button */.LegacyText, { style: items1, children: label })}</View>;
};