// discord_app/modules/parent_tools/native/FamilyCenterEmpty.tsx
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let closure_4 = createStyles.createStyles({
  empty: { display: "flex", alignItems: "center", justifyContent: "center" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterEmpty.tsx");

export default function FamilyCenterEmpty(children) {
  return (
    <View style={closure_4().empty}>
      {jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: children.text })}
    </View>
  );
}
