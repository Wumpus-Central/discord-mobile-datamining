// discord_app/modules/premium/powerups/native/GuildPowerupsWarning.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5243);
let obj2 = {
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: nativeDefault.space.PX_24,
    backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_MOD_WARNING,
    borderWidth: 1,
    borderColor: nativeDefault.colors.STATUS_WARNING,
    borderRadius: nativeDefault.radii.lg,
    gap: nativeDefault.space.PX_8,
    overflow: "hidden",
  },
  contentContainer: null,
  warningText: null,
  text: null,
};
let obj3 = {
  flexDirection: "row",
  alignItems: "flex-start",
  padding: nativeDefault.space.PX_24,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_MOD_WARNING,
  borderWidth: 1,
  borderColor: nativeDefault.colors.STATUS_WARNING,
  borderRadius: nativeDefault.radii.lg,
  gap: nativeDefault.space.PX_8,
  overflow: "hidden",
};
obj2.contentContainer = { flex: 1, gap: nativeDefault.space.PX_4, alignItems: "center" };
let obj4 = { flex: 1, gap: nativeDefault.space.PX_4, alignItems: "center" };
obj2.warningText = { marginTop: nativeDefault.space.PX_4 };
obj2.text = { textAlign: "center" };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsWarning.tsx");

export default function GuildPowerupsWarning(warnings) {
  warnings = warnings.warnings;
  ({ guildId, powerupNames } = warnings);
  const tmp = closure_6();
  _require = tmp;
  let tmp8Result = null;
  if (tmp4.shouldShow) {
    let obj = { style: tmp.container, children: null };
    const obj2 = { style: tmp.contentContainer, children: null };
    const obj3 = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING, size: "md" };
    items = [closure_4(require("CircleErrorIcon").CircleErrorIcon, obj3), , ,];
    const obj4 = { variant: "body-md/semibold", color: "text-feedback-warning", style: tmp.text, children: tmp5 };
    items[1] = closure_4(require("Text/Text").Text, obj4);
    const obj5 = { variant: "body-sm/normal", style: tmp.text, children: tmp6 };
    items[2] = closure_4(require("Text/Text").Text, obj5);
    let mapped;
    if (warnings != null) {
      mapped = warnings.map((children, index) => {
        const obj = { variant: "body-sm/normal", color: "text-feedback-warning", style: null, children };
        items = [,];
        ({ warningText: arr[0], text: arr[1] } = closure_0);
        obj.style = items;
        return React4(Text_Text.Text, obj, "warning-" + index);
      });
    }
    items[3] = mapped;
    obj2.children = items;
    obj.children = closure_5(View, obj2);
    tmp8Result = closure_4(View, obj);
  }
  return tmp8Result;
}
