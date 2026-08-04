// discord_app/modules/app_launcher/native/base_components/AppLauncherSelectOptionFormRow.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { formRow: null };
createCacheKey = { flexDirection: "row", backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.lg, alignItems: "center", flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherSelectOptionFormRow.tsx");

export default function AppLauncherSelectOptionFormRow(arg0) {
  let autoFocus;
  let option;
  let require;
  let selected;
  let style;
  let unselectedSubLabel;
  ({ selected, selectedItemName: require, unselectedSubLabel } = arg0);
  ({ style, option, autoFocus } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let obj = require(11360) /* useAnimationDelayedAutoFocus */;
  const animationDelayedAutoFocus = obj.useAnimationDelayedAutoFocus(autoFocus, merged.onPress);
  obj = { start: true, end: true, style: items, label: null, subLabel: null, trailing: null };
  items = [createCacheKey().formRow, style];
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
  obj[3] = jsx(require(4189) /* Text */.Text, { variant: str, color: null, lineClamp: 1, children: null });
  if (selected) {
    let fn = () => outer1_3(outer1_0(outer1_2[6]).Text, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: closure_0 });
  } else {
    fn = null;
    if (null != unselectedSubLabel) {
      fn = () => outer1_3(outer1_0(outer1_2[6]).Text, { variant: "text-sm/normal", color: "text-muted", lineClamp: 1, children: unselectedSubLabel });
    }
  }
  obj[4] = fn;
  const obj1 = { source: null, size: null };
  obj1[0] = unselectedSubLabel(5233);
  obj1[1] = require(1297) /* Button */.IconSizes.SMALL_20;
  obj[5] = jsx(require(1297) /* Button */.Icon, { source: null, size: null });
  const merged1 = Object.assign(merged);
  return jsx(require(7639) /* Form */.FormRow, { variant: str, color: null, lineClamp: 1, children: null });
};