// discord_app/modules/app_launcher/native/base_components/AppLauncherSelectOptionFormRow.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../design/void/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import useAnimationDelayedAutoFocus from "../hooks/useAnimationDelayedAutoFocus.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
createCacheKey = { formRow: null };
createCacheKey = { flexDirection: "row", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.lg, alignItems: "center", flex: 1 };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherSelectOptionFormRow.tsx");

export default function AppLauncherSelectOptionFormRow(arg0) {
  ({ selected, selectedItemName: require, unselectedSubLabel } = arg0);
  ({ style, option, autoFocus } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let obj = useAnimationDelayedAutoFocus;
  const animationDelayedAutoFocus = obj.useAnimationDelayedAutoFocus(autoFocus, merged.onPress);
  obj = { start: true, end: true, style: items, label: null, subLabel: null, trailing: null };
  items = [callback().formRow, style];
  let str = "text-md/medium";
  if (selected) {
    str = "text-sm/medium";
  }
  obj = { variant: str, color: null, lineClamp: 1, children: null };
  let str2 = "text-default";
  if (selected) {
    str2 = "interactive-text-default";
  }
  obj[1] = str2;
  obj[3] = option.displayName;
  obj[3] = jsx(Text.Text, { variant: str, color: null, lineClamp: 1, children: null });
  if (selected) {
    let fn = () => closure_1_3(closure_1_0(closure_1_2[6]).Text, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: closure_0 });
  } else {
    fn = null;
    if (null != unselectedSubLabel) {
      fn = () => closure_1_3(closure_1_0(closure_1_2[6]).Text, { variant: "text-sm/normal", color: "text-muted", lineClamp: 1, children: unselectedSubLabel });
    }
  }
  obj[4] = fn;
  const tmp2 = callback();
  obj[5] = jsx(Button.Icon, { source: unselectedSubLabel(6330), size: Button.IconSizes.SMALL_20 });
  const merged1 = Object.assign(merged);
  return jsx(Form.FormRow, { variant: str, color: null, lineClamp: 1, children: null });
};