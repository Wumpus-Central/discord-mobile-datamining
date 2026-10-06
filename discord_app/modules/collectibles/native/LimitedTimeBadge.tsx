// === Module 8523: LimitedTimeBadge ===

// Module 8523 (LimitedTimeBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import shared from "shared" /* 4735 */;
import Text_Text from "Text/Text" /* 4892 */;
import useCountdownDefault from "useCountdown" /* 6961 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
let obj4;
function getBadgeString(hasItem, days, hours) {
  const tmp = hasItem;
  if (tmp) {
    let formatToPlainStringResult;
    if (days > 1) {
      const intl6 = intl7.intl;
      const obj2 = { days };
      formatToPlainStringResult = intl6.formatToPlainString(intl7.t.DkxLY0, obj2);
    } else {
      if (days <= 1) {
        if (hours > 0) {
          const intl5 = intl7.intl;
          const obj = { hours };
          formatToPlainStringResult = intl5.formatToPlainString(intl7.t.WJieZ2, obj);
        }
      }
      const intl4 = intl7.intl;
      formatToPlainStringResult = intl4.formatToPlainString(intl7.t.WJieZ2, { hours: 0 });
    }
    return formatToPlainStringResult;
  } else {
    const intl = intl7.intl;
    let sum = days + intl.string(intl7.t.QJyuxY);
    const intl2 = intl7.intl;
    let sum1 = hours + intl2.string(intl7.t["1LyF1h"]);
    if (days <= 1) {
      if (days > 1) {
        const intl3 = intl7.intl;
        const string = intl3.string;
        sum1 = `0${string(tmp2(1126).t["1LyF1h"])}`;
      }
      sum = sum1;
    }
    return sum;
  }
}
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { root: obj2, backgroundDarkMode: obj3, backgroundLightMode: obj4 };
obj2 = { borderRadius: nativeDefault.radii.md, paddingHorizontal: 8, paddingVertical: 2 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.WHITE };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_7 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let days;
  let hours;
  let locale;
  let obj4;
  let style;
  let theme;
  let tmp10;
  let tmp5;
  let tmp6;
  let tmp9;
  let unpublishedAt;
  let obj = react2;
  const cResult = obj.c(22);
  ({ unpublishedAt, style } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore];
    const fn = function h() {
      const obj = shared;
      return obj.isThemeDark(theme.theme);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [LocaleStore];
    const fn2 = function k() {
      return locale.locale;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult2 = get_initialized;
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = ["en-US", "en-GB"];
    cResult[4] = items2;
    obj4 = items2;
  } else {
    obj4 = cResult[4];
  }
  const hasItem = obj4.includes(stateFromStores1);
  ({ days, hours } = useCountdownDefault(unpublishedAt, 1000, undefined, true));
  useCountdownDefault(unpublishedAt, 1000, undefined, true);
  if (cResult[5] === days) {
    if (cResult[6] === hours) {
      let tmp15;
      if (cResult[7] === hasItem) {
        tmp15 = cResult[8];
      }
      const tmp17 = stateFromStores ? tmp4.backgroundDarkMode : tmp4.backgroundLightMode;
      if (cResult[9] === style) {
        if (cResult[10] === tmp4.root) {
          let tmp18;
          let tmp19;
          if (cResult[11] === tmp17) {
            tmp18 = cResult[12];
          }
          let str = "text-overlay-light";
          if (stateFromStores) {
            str = "text-overlay-dark";
          }
          if (cResult[13] !== days) {
            const intl = intl7.intl;
            const obj2 = { daysLeft: days };
            const formatToPlainStringResult = intl.formatToPlainString(intl7.t.TlZULM, obj2);
            cResult[13] = days;
            cResult[14] = formatToPlainStringResult;
            tmp19 = formatToPlainStringResult;
          } else {
            tmp19 = cResult[14];
          }
          if (cResult[15] === tmp19) {
            if (cResult[16] === str) {
              let tmp21;
              if (cResult[17] === tmp15) {
                tmp21 = cResult[18];
              }
              if (cResult[19] === tmp21) {
                let tmp24;
                if (cResult[20] === tmp18) {
                  tmp24 = cResult[21];
                }
                return tmp24;
              }
              const tmp27 = <View style={tmp18}>{tmp21}</View>;
              cResult[19] = tmp21;
              cResult[20] = tmp18;
              cResult[21] = tmp27;
              tmp24 = tmp27;
            }
          }
          const tmp23 = jsx(Text_Text.Text, { color: str, variant: "text-xs/bold", accessibilityLabel: tmp19, allowFontScaling: false, children: tmp15 });
          cResult[15] = tmp19;
          cResult[16] = str;
          cResult[17] = tmp15;
          cResult[18] = tmp23;
          tmp21 = tmp23;
        }
      }
      const items3 = [tmp4.root, tmp17, style];
      cResult[9] = style;
      cResult[10] = tmp4.root;
      cResult[11] = tmp17;
      cResult[12] = items3;
      tmp18 = items3;
    }
  }
  const tmp16 = getBadgeString(hasItem, days, hours);
  cResult[5] = days;
  cResult[6] = hours;
  cResult[7] = hasItem;
  cResult[8] = tmp16;
  tmp15 = tmp16;
}) : ((unpublishedAt) => {
  let intl;
  let locale;
  let theme;
  unpublishedAt = unpublishedAt.unpublishedAt;
  const style = unpublishedAt.style;
  const tmp = closure_7();
  let obj = get_initialized;
  const items = [ThemeStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = shared;
    return obj.isThemeDark(theme.theme);
  });
  const items1 = [LocaleStore];
  const items2 = ["en-US", "en-GB"];
  const obj2 = get_initialized;
  const hasItem = items2.includes(obj2.useStateFromStores(items1, () => locale.locale));
  const tmp6 = useCountdownDefault(unpublishedAt, 1000, undefined, true);
  const days = tmp6.days;
  const items3 = [tmp.root, , ];
  items3[1] = stateFromStores ? tmp.backgroundDarkMode : tmp.backgroundLightMode;
  items3[2] = style;
  let str = "text-overlay-light";
  const tmp7 = getBadgeString(hasItem, days, tmp6.hours);
  const Text = Text_Text.Text;
  if (stateFromStores) {
    str = "text-overlay-dark";
  }
  ({ color: str, variant: "text-xs/bold", accessibilityLabel: intl.formatToPlainString(intl7.t.TlZULM, { daysLeft: days }), allowFontScaling: false, children: tmp7 });
  intl = intl7.intl;
  return <View style={items3}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/collectibles/native/LimitedTimeBadge.tsx");

export default tmp4;