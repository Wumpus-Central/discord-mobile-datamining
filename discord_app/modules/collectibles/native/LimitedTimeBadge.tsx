// discord_app/modules/collectibles/native/LimitedTimeBadge.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import shared from "../../../design/shared.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useCountdownDefault from "../../../hooks/useCountdown.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import ThemeStore from "../../user_settings/ThemeStore.tsx";

require = fn;
function getBadgeString(hasItem, days, hours) {
  if (hasItem) {
    if (days > 1) {
      const intl6 = util.intl;
      const obj2 = { days };
      let formatToPlainStringResult = intl6.formatToPlainString(util.t.DkxLY0, obj2);
    } else {
      if (days <= 1) {
        if (hours > 0) {
          const intl5 = util.intl;
          const obj = { hours };
          formatToPlainStringResult = intl5.formatToPlainString(util.t.WJieZ2, obj);
        }
      }
      const intl4 = util.intl;
      formatToPlainStringResult = intl4.formatToPlainString(util.t.WJieZ2, { hours: 0 });
    }
    return formatToPlainStringResult;
  } else {
    const intl = util.intl;
    let sum = days + intl.string(util.t.QJyuxY);
    const intl2 = util.intl;
    let sum1 = hours + intl2.string(util.t["1LyF1h"]);
    if (days <= 1) {
      if (days > 1) {
        const intl3 = util.intl;
        sum1 = `0${tmp5(tmp(1126).t["1LyF1h"])}`;
      }
      sum = sum1;
    }
    return sum;
  }
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = {
  root: { borderRadius: nativeDefault.radii.md, paddingHorizontal: 8, paddingVertical: 2 },
  backgroundDarkMode: null,
  backgroundLightMode: null,
};
let obj3 = { borderRadius: nativeDefault.radii.md, paddingHorizontal: 8, paddingVertical: 2 };
obj2.backgroundDarkMode = { backgroundColor: nativeDefault.colors.WHITE };
let obj4 = { backgroundColor: nativeDefault.colors.WHITE };
obj2.backgroundLightMode = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/LimitedTimeBadge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(22);
      ({ unpublishedAt, style } = arg0);
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ThemeStore];
        const fn = function h() {
          return shared.isThemeDark(theme.theme);
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [LocaleStore];
        const fn2 = function k() {
          return locale.locale;
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        let tmp10 = fn2;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = initialize;
      const stateFromStores1 = initialize.useStateFromStores(tmp9, tmp10);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = ["en-US", "en-GB"];
        cResult[4] = items2;
        let obj4 = items2;
      } else {
        obj4 = cResult[4];
      }
      const hasItem = obj4.includes(stateFromStores1);
      const tmpResult2 = initialize;
      ({ days, hours } = useCountdownDefault(unpublishedAt, 1000, undefined, true));
      if (cResult[5] === days) {
        if (cResult[6] === hours) {
          if (cResult[7] === hasItem) {
            let tmp15 = cResult[8];
          }
          const tmp17 = stateFromStores ? tmp4.backgroundDarkMode : tmp4.backgroundLightMode;
          if (cResult[9] === style) {
            if (cResult[10] === tmp4.root) {
              if (cResult[11] === tmp17) {
                let tmp18 = cResult[12];
              }
              let str = "text-overlay-light";
              if (stateFromStores) {
                str = "text-overlay-dark";
              }
              if (cResult[13] !== days) {
                const intl = util.intl;
                const obj2 = { daysLeft: days };
                const formatToPlainStringResult = intl.formatToPlainString(util.t.TlZULM, obj2);
                cResult[13] = days;
                cResult[14] = formatToPlainStringResult;
                let tmp19 = formatToPlainStringResult;
              } else {
                tmp19 = cResult[14];
              }
              if (cResult[15] === tmp19) {
                if (cResult[16] === str) {
                  if (cResult[17] === tmp15) {
                    let tmp21 = cResult[18];
                  }
                  if (cResult[19] === tmp21) {
                    if (cResult[20] === tmp18) {
                      let tmp24 = cResult[21];
                    }
                    return tmp24;
                  }
                  const obj3 = { style: tmp18, children: tmp21 };
                  const tmp27 = <View style={tmp18}>{tmp21}</View>;
                  cResult[19] = tmp21;
                  cResult[20] = tmp18;
                  cResult[21] = tmp27;
                  tmp24 = tmp27;
                }
              }
              const obj5 = {
                color: str,
                variant: "text-xs/bold",
                accessibilityLabel: tmp19,
                allowFontScaling: false,
                children: tmp15,
              };
              const tmp23 = jsx(Text_Text.Text, {
                color: str,
                variant: "text-xs/bold",
                accessibilityLabel: tmp19,
                allowFontScaling: false,
                children: tmp15,
              });
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
      const tmp14 = useCountdownDefault(unpublishedAt, 1000, undefined, true);
    }
  : (unpublishedAt) => {
      const tmp = closure_7();
      const items = [ThemeStore];
      const stateFromStores = initialize.useStateFromStores(items, () => shared.isThemeDark(theme.theme));
      const items1 = [LocaleStore];
      const items2 = ["en-US", "en-GB"];
      const hasItem = items2.includes(initialize.useStateFromStores(items1, () => locale.locale));
      const tmp6 = useCountdownDefault(unpublishedAt.unpublishedAt, 1000, undefined, true);
      const days = tmp6.days;
      const items3 = [tmp.root, ,];
      const obj3 = { style: items3, children: null };
      items3[1] = stateFromStores ? tmp.backgroundDarkMode : tmp.backgroundLightMode;
      items3[2] = unpublishedAt.style;
      let str = "text-overlay-light";
      if (stateFromStores) {
        str = "text-overlay-dark";
      }
      const obj4 = {
        color: str,
        variant: "text-xs/bold",
        accessibilityLabel: null,
        allowFontScaling: false,
        children: null,
      };
      const intl = util.intl;
      obj4.accessibilityLabel = intl.formatToPlainString(util.t.TlZULM, { daysLeft: days });
      obj4.children = getBadgeString(hasItem, days, tmp6.hours);
      obj3.children = jsx(Text_Text.Text, {
        color: str,
        variant: "text-xs/bold",
        accessibilityLabel: null,
        allowFontScaling: false,
        children: null,
      });
      return <View style={items3}>{null}</View>;
    };
