// === Module 8836: LimitedTimeBadge ===

// Module 8836 (LimitedTimeBadge)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import shared from "shared" /* 4411 */;
import Text_Text from "Text/Text" /* 4556 */;
import useCountdownDefault from "useCountdown" /* 7439 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import ThemeStore from "ThemeStore" /* 1183 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { root: null, backgroundDarkMode: null, backgroundLightMode: null };
createStyles = { borderRadius: nativeDefault.radii.md, paddingHorizontal: 8, paddingVertical: 2 };
createStyles.root = createStyles;
createStyles.backgroundDarkMode = { backgroundColor: nativeDefault.colors.WHITE };
let obj1 = { backgroundColor: nativeDefault.colors.WHITE };
createStyles.backgroundLightMode = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/LimitedTimeBadge.tsx");

export default function LimitedTimeBadge(unpublishedAt) {
  const tmp = closure_7();
  let obj = initialize;
  const items = [ThemeStore];
  const stateFromStores = obj.useStateFromStores(items, () => shared.isThemeDark(theme.theme));
  let obj1 = initialize;
  const items1 = [LocaleStore];
  const items2 = ["en-US", "en-GB"];
  const hasItem = items2.includes(obj1.useStateFromStores(items1, () => locale.locale));
  ({ days, hours } = useCountdownDefault(unpublishedAt.unpublishedAt, 1000, undefined, true));
  if (hasItem) {
    if (days > 1) {
      const intl6 = util.intl;
      obj = { days };
      let formatToPlainStringResult = intl6.formatToPlainString(util.t.DkxLY0, obj);
    } else {
      if (days <= 1) {
        if (hours > 0) {
          const intl5 = util.intl;
          obj = { hours };
          formatToPlainStringResult = intl5.formatToPlainString(util.t.WJieZ2, obj);
        }
      }
      const intl4 = util.intl;
      formatToPlainStringResult = intl4.formatToPlainString(util.t.WJieZ2, { hours: 0 });
    }
  } else {
    const intl = util.intl;
    let sum = days + intl.string(util.t.QJyuxY);
    const intl2 = util.intl;
    let sum1 = hours + intl2.string(util.t["1LyF1h"]);
    if (days <= 1) {
      if (days > 1) {
        const intl3 = util.intl;
        sum1 = `0${tmp9(tmp2(1114).t["1LyF1h"])}`;
      }
      sum = sum1;
    }
    const items3 = [tmp.root, , ];
    obj1 = { style: null, children: null };
    items3[1] = stateFromStores ? tmp.backgroundDarkMode : tmp.backgroundLightMode;
    items3[2] = unpublishedAt.style;
    obj1.style = items3;
    let str2 = "text-overlay-light";
    if (stateFromStores) {
      str2 = "text-overlay-dark";
    }
    const obj2 = { color: str2, variant: "text-xs/bold", accessibilityLabel: null, allowFontScaling: false, children: null };
    const intl7 = util.intl;
    const obj3 = { daysLeft: days };
    obj2.accessibilityLabel = intl7.formatToPlainString(util.t.TlZULM, obj3);
    obj2.children = sum;
    obj1.children = jsx(Text_Text.Text, { color: str2, variant: "text-xs/bold", accessibilityLabel: null, allowFontScaling: false, children: null });
    return <View style={null}>{null}</View>;
  }
  const tmp6 = useCountdownDefault(unpublishedAt.unpublishedAt, 1000, undefined, true);
};