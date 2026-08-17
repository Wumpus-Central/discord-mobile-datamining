// discord_app/modules/guild_role_subscriptions/native/components/WarningNotice.tsx
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4734 */;
import Button from "Button" /* 4745 */;
import preloadDefault from "preload" /* 5449 */;
import registerAssetDefault from "registerAsset" /* 8555 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, horizontalContainer: null, message: null, actionButtonWrapper: null, containerYellow: null, textYellow: null, alertIcon: null };
createCacheKey = { borderRadius: ThemesDefault.radii.xs, borderWidth: 1, padding: 12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center" };
createCacheKey[2] = { flex: 1, marginStart: 10, textAlignVertical: "center" };
createCacheKey[3] = { marginTop: 24, alignSelf: "center", width: "100%" };
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderColor: ThemesDefault.colors.STATUS_WARNING };
let obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderColor: ThemesDefault.colors.STATUS_WARNING };
createCacheKey[5] = { color: ThemesDefault.colors.TEXT_FEEDBACK_WARNING };
createCacheKey[6] = { alignSelf: "flex-start", width: 20, height: 20 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj2 = { color: ThemesDefault.colors.TEXT_FEEDBACK_WARNING };
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/WarningNotice.tsx");

export default function WarningNotice(arg0) {
  ({ ctaLabel, onClick } = arg0);
  ({ style, notice, submitting, disabled } = arg0);
  const tmp = callback3();
  let obj = { style: items, children: null };
  items = [style, , ];
  ({ container: arr[1], containerYellow: arr[2] } = tmp);
  obj = { style: tmp.horizontalContainer, children: null };
  obj = { style: tmp.alertIcon, source: registerAssetDefault };
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
    obj1[1] = tmp4(Button.Button, obj2);
    tmp4Result = tmp4(tmp3, obj1);
  }
  items3[1] = tmp4Result;
  obj[1] = items3;
  return callback2(View, obj);
};