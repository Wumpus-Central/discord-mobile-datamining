// discord_app/components_native/premium/PremiumPerksList.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
const createStyles = {
  perkInfoContainer: { flexDirection: "row", alignItems: "center", gap: 16 },
  perkInfoTextContainer: { flexDirection: "column", gap: 4, maxWidth: 279 },
  perkListContainer: { width: "100%", paddingVertical: 24, flexDirection: "column", gap: 24 },
  perkIconContainer: null,
};
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.round,
  width: 40,
  height: 40,
  justifyContent: "center",
  alignItems: "center",
};
createStyles.perkIconContainer = size;
let closure_5 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumPerksList.tsx");

export default function PremiumPerksList(perks) {
  perks = perks.perks;
  const tmp = closure_5();
  closure_0 = tmp;
  return closure_3(View, {
    style: tmp.perkListContainer,
    children: perks.map((children, index) => {
      let obj = { style: closure_0.perkInfoContainer, children: null };
      obj = { style: closure_0.perkIconContainer, children: React3(children.IconComponent, { size: "md" }) };
      const items = [React3(View, obj)];
      obj = { style: closure_0.perkInfoTextContainer, children: null };
      const items1 = [
        React3(Text_Text.Text, { variant: "text-md/bold", color: "text-strong", children: children.label }),
        React3(Text_Text.Text, { variant: "text-md/medium", color: "text-default", children: children.description }),
      ];
      obj.children = items1;
      items[1] = React4(View, obj);
      obj.children = items;
      return React4(View, obj, index);
    }),
  });
}
