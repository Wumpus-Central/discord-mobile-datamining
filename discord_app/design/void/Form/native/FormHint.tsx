// discord_app/design/void/Form/native/FormHint.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../native.tsx";
import Text_Text from "../../../components/Text/native/Text.tsx";
import RedesignCompat from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Platform = fn(17).Platform;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { formHintText: null, redesignHorizontalPadding: null, horizonatalPadding: null };
createStyles = { fontSize: 14, marginBottom: 0, color: nativeDefault.colors.TEXT_MUTED };
createStyles.formHintText = createStyles;
createStyles.redesignHorizontalPadding = { paddingHorizontal: 12 };
createStyles.horizonatalPadding = { paddingHorizontal: 16 };
let closure_4 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormHint.tsx");

export default function FormHint(inset) {
  let flag = inset.inset;
  if (flag === undefined) {
    flag = false;
  }
  ({ style, children } = inset);
  const tmp = closure_4();
  if (noop.useContext(RedesignCompat.RedesignCompatContext)) {
    let redesignHorizontalPadding = !flag;
    if (!flag) {
      redesignHorizontalPadding = tmp.redesignHorizontalPadding;
    }
    let obj = { variant: "text-sm/medium", color: "text-muted", style: null, children: null };
    const items = [redesignHorizontalPadding, style];
    obj.style = items;
    obj.children = children;
    let tmp4Result = jsx(Text_Text.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      style: null,
      children: null,
    });
  } else {
    const items1 = [tmp.formHintText, ,];
    let horizonatalPadding = !flag;
    if (!flag) {
      horizonatalPadding = tmp.horizonatalPadding;
    }
    obj = { style: null, children: null };
    items1[1] = horizonatalPadding;
    items1[2] = style;
    obj.style = items1;
    obj.children = children;
    tmp4Result = jsx(native.LegacyText, { style: null, children: null });
  }
  return tmp4Result;
}
