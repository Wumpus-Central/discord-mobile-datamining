// === Module 8961: LimitedTimeBadge ===

// Module 8961 (LimitedTimeBadge)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import shared from "shared" /* 4488 */;
import Text_Text from "Text/Text" /* 4632 */;
import useCountdownDefault from "useCountdown" /* 7542 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import ThemeStore from "ThemeStore" /* 1181 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let obj2 = { root: { borderRadius: nativeDefault.radii.md, paddingHorizontal: 8, paddingVertical: 2 }, backgroundDarkMode: null, backgroundLightMode: null };
let obj3 = { borderRadius: nativeDefault.radii.md, paddingHorizontal: 8, paddingVertical: 2 };
obj2.backgroundDarkMode = { backgroundColor: nativeDefault.colors.WHITE };
let obj4 = { backgroundColor: nativeDefault.colors.WHITE };
obj2.backgroundLightMode = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/LimitedTimeBadge.tsx");

export default function LimitedTimeBadge(unpublishedAt) {
  const tmp = closure_7();
  const items = [ThemeStore];
  const stateFromStores = initialize.useStateFromStores(items, () => shared.isThemeDark(theme.theme));
  const items1 = [LocaleStore];
  const items2 = ["en-US", "en-GB"];
  const hasItem = items2.includes(initialize.useStateFromStores(items1, () => locale.locale));
  ({ days, hours } = useCountdownDefault(unpublishedAt.unpublishedAt, 1000, undefined, true));
  if (hasItem) {
    if (days > 1) {
      const intl6 = util.intl;
      const obj3 = { days };
      let formatToPlainStringResult = intl6.formatToPlainString(util.t.DkxLY0, obj3);
    } else {
      if (days <= 1) {
        if (hours > 0) {
          const intl5 = util.intl;
          const obj4 = { hours };
          formatToPlainStringResult = intl5.formatToPlainString(util.t.WJieZ2, obj4);
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
    const obj5 = { style: null, children: null };
    items3[1] = stateFromStores ? tmp.backgroundDarkMode : tmp.backgroundLightMode;
    items3[2] = unpublishedAt.style;
    obj5.style = items3;
    let str2 = "text-overlay-light";
    if (stateFromStores) {
      str2 = "text-overlay-dark";
    }
    const obj6 = { color: str2, variant: "text-xs/bold", accessibilityLabel: null, allowFontScaling: false, children: null };
    const intl7 = util.intl;
    const obj7 = { daysLeft: days };
    obj6.accessibilityLabel = intl7.formatToPlainString(util.t.TlZULM, obj7);
    obj6.children = sum;
    obj5.children = jsx(Text_Text.Text, { color: str2, variant: "text-xs/bold", accessibilityLabel: null, allowFontScaling: false, children: null });
    return <View style={null}>{null}</View>;
  }
  const tmp6 = useCountdownDefault(unpublishedAt.unpublishedAt, 1000, undefined, true);
};