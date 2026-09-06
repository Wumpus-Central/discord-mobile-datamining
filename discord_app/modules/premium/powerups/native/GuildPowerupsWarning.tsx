// discord_app/modules/premium/powerups/native/GuildPowerupsWarning.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: null, contentContainer: null, warningText: null, text: null };
createStyles = {
  flexDirection: "row",
  alignItems: "flex-start",
  padding: nativeDefault.space.PX_24,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING,
  borderWidth: 1,
  borderColor: nativeDefault.colors.STATUS_WARNING,
  borderRadius: nativeDefault.radii.lg,
  gap: nativeDefault.space.PX_8,
  overflow: "hidden",
};
createStyles.container = createStyles;
createStyles.contentContainer = { flex: 1, gap: nativeDefault.space.PX_4, alignItems: "center" };
let obj1 = { flex: 1, gap: nativeDefault.space.PX_4, alignItems: "center" };
createStyles.warningText = { marginTop: nativeDefault.space.PX_4 };
createStyles.text = { textAlign: "center" };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsWarning.tsx");

export default function GuildPowerupsWarning(warnings) {
  warnings = warnings.warnings;
  ({ guildId, powerupNames } = warnings);
  const tmp = closure_6();
  _require = tmp;
  let obj = require("ManaTypeConsolidationExperiment");
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsWarning");
  let tmp10Result = null;
  if (tmp6.shouldShow) {
    obj = { style: tmp.container, children: null };
    obj = { style: tmp.contentContainer, children: null };
    const obj1 = { color: manaTypeConsolidationExperiment(576).colors.TEXT_FEEDBACK_WARNING, size: "md" };
    let items = [closure_4(tmp2(6610).CircleErrorIcon, obj1), , ,];
    const obj2 = { variant: "text-md/semibold", color: "text-feedback-warning", style: tmp.text, children: tmp7 };
    items[1] = closure_4(tmp2(4556).Text, obj2);
    let str = "text-sm/medium";
    if (manaTypeConsolidationExperiment) {
      str = "experimental/body-sm/normal";
    }
    const obj3 = { variant: str, style: tmp.text, children: tmp8 };
    items[2] = closure_4(tmp2(4556).Text, obj3);
    let mapped;
    if (warnings != null) {
      mapped = warnings.map((children, index) => {
        let str = "text-sm/medium";
        if (manaTypeConsolidationExperiment) {
          str = "experimental/body-sm/normal";
        }
        const obj = { variant: str, color: "text-feedback-warning", style: null, children };
        const items = [,];
        ({ warningText: arr[0], text: arr[1] } = closure_0);
        obj.style = items;
        return React4(Text_Text.Text, obj, "warning-" + index);
      });
    }
    items[3] = mapped;
    obj.children = items;
    obj.children = closure_5(View, obj);
    tmp10Result = tmp10(tmp11, obj);
  }
  return tmp10Result;
}
