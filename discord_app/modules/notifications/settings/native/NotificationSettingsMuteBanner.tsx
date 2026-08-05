// discord_app/modules/notifications/settings/native/NotificationSettingsMuteBanner.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { card: null };
createCacheKey = { padding: 16, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: require("Themes").radii.lg + 8, backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMuteBanner.tsx");

export const NotificationSettingsMuteBanner = function NotificationSettingsMuteBanner(children) {
  let obj = { style: null, children: null };
  const items = [children.style, createCacheKey().card];
  obj[0] = items;
  obj = { style: { flex: 1, marginRight: 8 }, children: null };
  obj = { variant: "text-md/semibold", color: "text-overlay-light", children: children.title };
  const items1 = [callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj), callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, { variant: "text-xs/medium", color: "text-overlay-light", children: children.subtitle })];
  obj[1] = items1;
  const items2 = [callback2(View, obj), ];
  const obj2 = { text: null, onPress: null, variant: "primary-overlay" };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj2[0] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.YqAjXy);
  obj2[1] = children.onPressUnmute;
  items2[1] = callback(require("../../../../design/components/Button/native/Button.native.tsx") /* Button */.Button, obj2);
  obj[1] = items2;
  return callback2(View, obj);
};
export const getMuteBannerSubtitleFromConfig = function getMuteBannerSubtitleFromConfig(config) {
  let end_time;
  if (config != null) {
    end_time = config.end_time;
  }
  if (null == end_time) {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    let stringResult = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["tFqP/P"]);
  } else {
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const obj = { endTime: null };
    const _Date = Date;
    const date = new Date(config.end_time);
    obj[0] = date.toLocaleString(require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
    stringResult = intl2.formatToPlainString(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.C7m4oh, obj);
  }
  return stringResult;
};