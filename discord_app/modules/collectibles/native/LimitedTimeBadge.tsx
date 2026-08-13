// discord_app/modules/collectibles/native/LimitedTimeBadge.tsx
import "noop";
import { View } from "get ActivityIndicator";
import _getSystemLocale from "_getSystemLocale";
import handleThemeChange from "handleThemeChange";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { useCountdown } from "../../../hooks/useCountdown.tsx";

const require = arg1;
createCacheKey = { root: null, backgroundDarkMode: null, backgroundLightMode: null };
createCacheKey = { borderRadius: require("Themes").radii.md, paddingHorizontal: 8, paddingVertical: 2 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: require("Themes").colors.WHITE };
let obj1 = { backgroundColor: require("Themes").colors.WHITE };
createCacheKey[2] = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG };
const result = require("_getSystemLocale").fileFinishedImporting("modules/collectibles/native/LimitedTimeBadge.tsx");

export default function LimitedTimeBadge(unpublishedAt) {
  let days;
  let hours;
  const tmp = createCacheKey();
  let obj = initialize;
  const items = [handleThemeChange];
  const stateFromStores = obj.useStateFromStores(items, () => callback(table[9]).isThemeDark(theme.theme));
  let obj1 = initialize;
  const items1 = [_getSystemLocale];
  const items2 = ["en-US", "en-GB"];
  const hasItem = items2.includes(obj1.useStateFromStores(items1, () => locale.locale));
  ({ days, hours } = useCountdown(unpublishedAt.unpublishedAt, 1000, undefined, true));
  if (hasItem) {
    if (days > 1) {
      const intl6 = tmp2(1236).intl;
      obj = { days: null };
      obj[0] = days;
      let formatToPlainStringResult = intl6.formatToPlainString(tmp2(1236).t.DkxLY0, obj);
    } else {
      if (days <= 1) {
        if (hours > 0) {
          const intl5 = tmp2(1236).intl;
          obj = { hours: null };
          obj[0] = hours;
          formatToPlainStringResult = intl5.formatToPlainString(tmp2(1236).t.WJieZ2, obj);
        }
      }
      const intl4 = tmp2(1236).intl;
      formatToPlainStringResult = intl4.formatToPlainString(tmp2(1236).t.WJieZ2, { hours: 0 });
    }
  } else {
    const intl = tmp2(1236).intl;
    let sum = days + intl.string(tmp2(1236).t.QJyuxY);
    const intl2 = tmp2(1236).intl;
    let sum1 = hours + intl2.string(tmp2(1236).t["1LyF1h"]);
    if (days <= 1) {
      if (days > 1) {
        const intl3 = tmp2(1236).intl;
        sum1 = `0${tmp9(tmp2(1236).t["1LyF1h"])}`;
      }
      sum = sum1;
    }
    const items3 = [tmp.root, , ];
    obj1 = { style: null, children: null };
    items3[1] = stateFromStores ? tmp.backgroundDarkMode : tmp.backgroundLightMode;
    items3[2] = unpublishedAt.style;
    obj1[0] = items3;
    let str2 = "text-overlay-light";
    if (stateFromStores) {
      str2 = "text-overlay-dark";
    }
    const obj2 = { color: null, variant: "text-xs/bold", accessibilityLabel: null, allowFontScaling: false, children: null };
    obj2[0] = str2;
    const intl7 = tmp2(1236).intl;
    const obj3 = { daysLeft: null };
    obj3[0] = days;
    obj2[2] = intl7.formatToPlainString(tmp2(1236).t.TlZULM, obj3);
    obj2[4] = sum;
    obj1[1] = jsx(tmp2(4338).Text, { color: null, variant: "text-xs/bold", accessibilityLabel: null, allowFontScaling: false, children: null });
    return <View style={null}>{null}</View>;
  }
};