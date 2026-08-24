// discord_app/modules/guild_role_subscriptions/native/components/ShinyButton.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import CollapsingText from "../../../../design/components/Button/native/BaseTextButton.native.tsx";
import registerAssetDefault from "../../../../../_runtime/09392_registerAsset.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
createCacheKey = { container: null, sparkleIcon: null, disabled: null };
createCacheKey = { borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginRight: 4, tintColor: ThemesDefault.colors.WHITE };
createCacheKey[2] = { opacity: 0.5 };
let closure_4 = createCacheKey.createStyles(createCacheKey);
const obj1 = { marginRight: 4, tintColor: ThemesDefault.colors.WHITE };
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/ShinyButton.tsx");

export default function ShinyButton(style) {
  ({ loading, disabled, onPress } = style);
  if (onPress === undefined) {
    onPress = function c() {

    };
  }
  const merged = Object.assign(style, Object.create(null));
  const tmp2 = callback();
  let obj = { onPress, pillStyle: items, loading, disabled, icon: null };
  items = [tmp2.container, style.style];
  let tmp3Result;
  if (!loading) {
    obj = { size: null, source: null, style: null };
    obj[0] = tmp4(1297).Icon.Sizes.REFRESH_SMALL_16;
    obj[1] = registerAssetDefault;
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
  return jsx(CollapsingText.BaseTextButton, { onPress, pillStyle: items, loading, disabled, icon: null });
};