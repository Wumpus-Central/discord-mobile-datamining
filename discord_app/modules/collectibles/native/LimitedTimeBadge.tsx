// === Module 9237: LimitedTimeBadge ===

// Module 9237 (LimitedTimeBadge)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import useCountdownDefault from "useCountdown" /* 7410 */;
import { View } from "get ActivityIndicator" /* 17 */;
import _getSystemLocale from "_getSystemLocale" /* 1994 */;
import handleThemeChange from "handleThemeChange" /* 1302 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
const createCacheKey = { borderRadius: ThemesDefault.radii.md, paddingHorizontal: 8, paddingVertical: 2 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.WHITE };
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/collectibles/native/LimitedTimeBadge.tsx");

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
      const intl6 = getSystemLocale.intl;
      obj = { days: null };
      obj[0] = days;
      let formatToPlainStringResult = intl6.formatToPlainString(getSystemLocale.t.DkxLY0, obj);
    } else {
      if (days <= 1) {
        if (hours > 0) {
          const intl5 = getSystemLocale.intl;
          obj = { hours: null };
          obj[0] = hours;
          formatToPlainStringResult = intl5.formatToPlainString(getSystemLocale.t.WJieZ2, obj);
        }
      }
      const intl4 = getSystemLocale.intl;
      formatToPlainStringResult = intl4.formatToPlainString(getSystemLocale.t.WJieZ2, { hours: 0 });
    }
  } else {
    const intl = getSystemLocale.intl;
    let sum = days + intl.string(getSystemLocale.t.QJyuxY);
    const intl2 = getSystemLocale.intl;
    let sum1 = hours + intl2.string(getSystemLocale.t["1LyF1h"]);
    if (days <= 1) {
      if (days > 1) {
        const intl3 = getSystemLocale.intl;
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
    const intl7 = getSystemLocale.intl;
    const obj3 = { daysLeft: null };
    obj3[0] = days;
    obj2[2] = intl7.formatToPlainString(getSystemLocale.t.TlZULM, obj3);
    obj2[4] = sum;
    obj1[1] = jsx(Text.Text, { color: null, variant: "text-xs/bold", accessibilityLabel: null, allowFontScaling: false, children: null });
    return <View style={null}>{null}</View>;
  }
  const tmp6 = useCountdownDefault(unpublishedAt.unpublishedAt, 1000, undefined, true);
};