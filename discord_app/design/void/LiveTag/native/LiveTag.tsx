// discord_app/design/void/LiveTag/native/LiveTag.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { tag: null, tagText: null };
createStyles = {
  paddingHorizontal: 6,
  paddingVertical: 2,
  borderRadius: nativeDefault.radii.round,
  overflow: "hidden",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.unsafe_rawColors.RED_400,
};
createStyles.tag = createStyles;
const obj1 = { textAlign: "center", color: nativeDefault.unsafe_rawColors.WHITE, marginTop: null };
const PlatformUtils = fn(1115);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = -2;
}
obj1.marginTop = num;
createStyles.tagText = obj1;
let closure_4 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/LiveTag/native/LiveTag.tsx");

export default function LiveTag(arg0) {
  ({ style, textStyle, allowFontScaling } = arg0);
  const tmp = closure_4();
  let obj = { style: null, children: null };
  const items = [tmp.tag, style];
  obj.style = items;
  obj = { variant: "text-xs/bold", style: null, lineClamp: 1, allowFontScaling, children: null };
  const items1 = [tmp.tagText, textStyle];
  obj.style = items1;
  const intl = util.intl;
  obj.children = intl.string(util.t.dI3q4h).toUpperCase();
  obj.children = jsx(Text_Text.Text, {
    variant: "text-xs/bold",
    style: null,
    lineClamp: 1,
    allowFontScaling,
    children: null,
  });
  return (
    <View variant="text-xs/bold" style={null} lineClamp={1} allowFontScaling={allowFontScaling}>
      {null}
    </View>
  );
}
