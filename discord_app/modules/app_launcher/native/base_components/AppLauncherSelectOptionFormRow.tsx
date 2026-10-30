// discord_app/modules/app_launcher/native/base_components/AppLauncherSelectOptionFormRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj2 = {
  formRow: {
    flexDirection: "row",
    backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT,
    borderRadius: nativeDefault.radii.lg,
    alignItems: "center",
    flex: 1,
  },
};
let closure_3 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/base_components/AppLauncherSelectOptionFormRow.tsx",
);

export default function AppLauncherSelectOptionFormRow(arg0) {
  ({ selected, selectedItemName: require, unselectedSubLabel } = arg0);
  ({ option, autoFocus } = arg0);
  const merged = Object.assign(
    arg0,
    Object.assign({ option: 0, selected: 0, selectedItemName: 0, unselectedSubLabel: 0, autoFocus: 0 }),
  );
  const tmp2 = closure_3();
  const animationDelayedAutoFocus = require("useAnimationDelayedAutoFocus").useAnimationDelayedAutoFocus(
    autoFocus,
    merged.onPress,
  );
  const obj2 = { start: true, end: true, style: tmp2.formRow, label: null, subLabel: null, trailing: null };
  let str = "text-md/medium";
  if (selected) {
    str = "text-sm/medium";
  }
  const obj3 = { variant: str, color: null, lineClamp: 1, children: null };
  let str2 = "text-default";
  if (selected) {
    str2 = "interactive-text-default";
  }
  obj3.color = str2;
  obj3.children = option.displayName;
  obj2.label = jsx(require("Text/Text").Text, { variant: str, color: null, lineClamp: 1, children: null });
  if (selected) {
    let fn = () => jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children });
  } else {
    fn = null;
    if (null != unselectedSubLabel) {
      fn = () =>
        jsx(Text_Text.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          lineClamp: 1,
          children: unselectedSubLabel,
        });
    }
  }
  obj2.subLabel = fn;
  obj2.trailing = jsx(require("TableRowArrow").TableRowArrow, {});
  const merged1 = Object.assign(merged);
  return jsx(require("Form").FormRow, {
    start: true,
    end: true,
    style: tmp2.formRow,
    label: null,
    subLabel: null,
    trailing: null,
  });
}
