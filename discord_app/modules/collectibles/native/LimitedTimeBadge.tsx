// === Module 9553: LimitedTimeBadge ===

// Module 9553 (LimitedTimeBadge)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import useCountdownDefault from "useCountdown" /* 7046 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "_getSystemLocale" /* 1996 */;
import closure_5 from "handleThemeChange" /* 1302 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
noopAll;
createCacheKey = { root: null, backgroundDarkMode: null, backgroundLightMode: null };
createCacheKey = { borderRadius: ThemesDefault.radii.md, paddingHorizontal: 8, paddingVertical: 2 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.WHITE };
let obj1 = { backgroundColor: ThemesDefault.colors.WHITE };
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj2 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG };
const result = require("set").fileFinishedImporting("modules/collectibles/native/LimitedTimeBadge.tsx");

export default function LimitedTimeBadge(unpublishedAt) {
  const tmp = callback();
  let obj = initialize;
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => callback(table[9]).isThemeDark(theme.theme));
  obj1 = initialize;
  const items1 = [closure_4];
  const items2 = ["en-US", "en-GB"];
  const hasItem = items2.includes(obj1.useStateFromStores(items1, () => locale.locale));
  ({ days, hours } = useCountdownDefault(unpublishedAt.unpublishedAt, 1000, undefined, true));
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
    obj1[1] = jsx(tmp2(4376).Text, { color: null, variant: "text-xs/bold", accessibilityLabel: null, allowFontScaling: false, children: null });
    return <View style={null}>{null}</View>;
  }
};