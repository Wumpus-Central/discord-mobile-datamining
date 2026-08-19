// discord_app/modules/guild_role_subscriptions/native/components/WarningNotice.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import Button from "../../../../design/components/Button/native/Button.native.tsx";
import preloadDefault from "../../../../components_native/common/FastImage.tsx";
import registerAssetDefault from "../../../../../_runtime/08555_registerAsset.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { borderRadius: ThemesDefault.radii.xs, borderWidth: 1, padding: 12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center" };
createCacheKey[2] = { flex: 1, marginStart: 10, textAlignVertical: "center" };
createCacheKey[3] = { marginTop: 24, alignSelf: "center", width: "100%" };
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderColor: ThemesDefault.colors.STATUS_WARNING };
createCacheKey[5] = { color: ThemesDefault.colors.TEXT_FEEDBACK_WARNING };
createCacheKey[6] = { alignSelf: "flex-start", width: 20, height: 20 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/components/WarningNotice.tsx");

export default function WarningNotice(arg0) {
  ({ ctaLabel, onClick } = arg0);
  ({ style, notice, submitting, disabled } = arg0);
  const tmp = callback3();
  const items = [style, , ];
  ({ container: arr[1], containerYellow: arr[2] } = tmp);
  const obj = { style: tmp.alertIcon, source: registerAssetDefault };
  const items1 = [callback(preloadDefault, obj), ];
  const items2 = [, ];
  ({ message: arr3[0], textYellow: arr3[1] } = tmp);
  items1[1] = callback(Text.Text, { style: items2, variant: "text-sm/medium", color: "interactive-text-active", children: notice });
  obj[1] = items1;
  const items3 = [callback2(View, obj), ];
  let tmp4Result = null != onClick && null != ctaLabel;
  if (tmp4Result) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.actionButtonWrapper;
    const obj2 = { onPress: null, disabled: null, loading: null, text: null, grow: true };
    obj2[0] = onClick;
    obj2[1] = disabled;
    obj2[2] = submitting;
    obj2[3] = ctaLabel;
    obj1[1] = callback(Button.Button, obj2);
    tmp4Result = callback(View, obj1);
  }
  items3[1] = tmp4Result;
  obj[1] = items3;
  return callback2(View, obj);
};