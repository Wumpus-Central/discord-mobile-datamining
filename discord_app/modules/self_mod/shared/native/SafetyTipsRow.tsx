// discord_app/modules/self_mod/shared/native/SafetyTipsRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
const createStyles = { indexContainer: null };
let size = {
  width: 32,
  height: 32,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
  alignItems: "center",
  justifyContent: "center",
  marginRight: nativeDefault.space.PX_4,
};
createStyles.indexContainer = size;
let closure_4 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyTipsRow.tsx");

export default function SafetyTipsRow(arg0) {
  ({ index, tip, description, end } = arg0);
  _require = closure_4();
  return jsx(require("TableRow").TableRow, {
    icon: jsx(
      (children) => (
        <View style={indexContainer.indexContainer}>
          {jsx(Text_Text.Text, { variant: "heading-md/semibold", color: "text-brand", children: children.index })}
        </View>
      ),
      { index },
    ),
    label: tip,
    subLabel: description,
    end,
  });
}
