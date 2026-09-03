// === Module 10260: NotificationSettingsMuteBanner ===

// Module 10260 (NotificationSettingsMuteBanner)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Text from "Text" /* 4474 */;
import Button from "Button" /* 4929 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { card: null };
createCacheKey = { padding: 16, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: ThemesDefault.radii.lg + 8, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMuteBanner.tsx");

export const NotificationSettingsMuteBanner = function NotificationSettingsMuteBanner(children) {
  let obj = { style: null, children: null };
  const items = [children.style, callback3().card];
  obj[0] = items;
  obj = { style: { flex: 1, marginRight: 8 }, children: null };
  obj = { variant: "text-md/semibold", color: "text-overlay-light", children: children.title };
  const items1 = [callback(Text.Text, obj), callback(Text.Text, { variant: "text-xs/medium", color: "text-overlay-light", children: children.subtitle })];
  obj[1] = items1;
  const items2 = [callback2(View, obj), ];
  const obj2 = { text: null, onPress: null, variant: "primary-overlay" };
  const intl = getSystemLocale.intl;
  obj2[0] = intl.string(getSystemLocale.t.YqAjXy);
  obj2[1] = children.onPressUnmute;
  items2[1] = callback(Button.Button, obj2);
  obj[1] = items2;
  return callback2(View, obj);
};
export const getMuteBannerSubtitleFromConfig = function getMuteBannerSubtitleFromConfig(config) {
  let end_time;
  if (config != null) {
    end_time = config.end_time;
  }
  if (null == end_time) {
    const intl = getSystemLocale.intl;
    let stringResult = intl.string(getSystemLocale.t["tFqP/P"]);
  } else {
    const intl2 = getSystemLocale.intl;
    const obj = { endTime: null };
    const _Date = Date;
    const date = new Date(config.end_time);
    obj[0] = date.toLocaleString(getSystemLocale.intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
    stringResult = intl2.formatToPlainString(getSystemLocale.t.C7m4oh, obj);
  }
  return stringResult;
};