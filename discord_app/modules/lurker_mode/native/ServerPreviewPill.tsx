// discord_app/modules/lurker_mode/native/ServerPreviewPill.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj2 = {
  pill: {
    paddingHorizontal: 10,
    paddingVertical: nativeDefault.space.PX_4,
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: nativeDefault.colors.WHITE,
  },
  text: null,
};
const obj3 = {
  paddingHorizontal: 10,
  paddingVertical: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.WHITE,
};
obj2.text = { color: nativeDefault.colors.BLACK, textTransform: "uppercase", letterSpacing: 0.5 };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/lurker_mode/native/ServerPreviewPill.tsx");

export default function ServerPreviewPill() {
  const tmp = closure_4();
  const obj = { style: tmp.pill, accessibilityRole: "text", children: null };
  const obj2 = { variant: "text-xs/bold", style: tmp.text, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.KNhFgD);
  obj.children = jsx(Text_Text.Text, { variant: "text-xs/bold", style: tmp.text, children: null });
  return (
    <View style={tmp.pill} accessibilityRole="text">
      {null}
    </View>
  );
}
