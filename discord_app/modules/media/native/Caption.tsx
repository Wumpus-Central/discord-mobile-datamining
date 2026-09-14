// discord_app/modules/media/native/Caption.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import native from "../../../design/void/native.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
const jsx = jsxProd.jsx;
let obj = {
  captionText: { fontFamily: Constants.Fonts.PRIMARY_BOLD, color: nativeDefault.colors.WHITE, fontSize: 12 },
  labelContainer: null,
};
const rect = {
  backgroundColor: null,
  borderRadius: null,
  paddingHorizontal: 8,
  paddingVertical: 2,
  position: "absolute",
  right: 6,
  bottom: 6,
};
rect.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5);
rect.borderRadius = nativeDefault.radii.xs;
obj.labelContainer = rect;
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/media/native/Caption.tsx");

export const Caption = function Caption(arg0) {
  ({ label, style, textStyle } = arg0);
  const tmp = closure_4();
  const obj = { style: null, children: null };
  const items = [tmp.labelContainer, style];
  obj.style = items;
  const obj2 = { style: null, children: label };
  const items1 = [tmp.captionText, textStyle];
  obj2.style = items1;
  obj.children = jsx(native.LegacyText, { style: null, children: label });
  return <View style={null}>{null}</View>;
};
