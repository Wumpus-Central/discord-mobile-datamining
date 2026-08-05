import { registerAsset } from "../../../../../_runtime/08610_registerAsset.js";
import { CollapsingText } from "../../../../design/components/Button/native/BaseTextButton.native.tsx";
// discord_app/modules/guild_role_subscriptions/native/components/ShinyButton.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { container: null, sparkleIcon: null, disabled: null };
createCacheKey = { borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginRight: 4, tintColor: require("Themes").colors.WHITE };
createCacheKey[2] = { opacity: 0.5 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { marginRight: 4, tintColor: require("Themes").colors.WHITE };
const result = require("createCacheKey").fileFinishedImporting("modules/guild_role_subscriptions/native/components/ShinyButton.tsx");

export default function ShinyButton(style) {
  let disabled;
  let loading;
  let onPress;
  ({ loading, disabled, onPress } = style);
  if (onPress === undefined) {
    onPress = function c() {

    };
  }
  const merged = Object.assign(style, Object.create(null));
  const tmp2 = createCacheKey();
  let obj = { onPress, pillStyle: items, loading, disabled, icon: null };
  items = [tmp2.container, style.style];
  let tmp3Result;
  if (!loading) {
    obj = { size: null, source: null, style: null };
    obj[0] = tmp4(1297).Icon.Sizes.REFRESH_SMALL_16;
    obj[1] = registerAsset;
    const items1 = [tmp2.sparkleIcon, ];
    if (disabled) {
      disabled = tmp2.disabled;
    }
    items1[1] = disabled;
    obj[2] = items1;
    tmp3Result = tmp3(tmp4(1297).Icon, obj);
  }
  obj[4] = tmp3Result;
  const merged1 = Object.assign(merged);
  return jsx(CollapsingText /* CollapsingText */.BaseTextButton, { onPress, pillStyle: items, loading, disabled, icon: null });
};