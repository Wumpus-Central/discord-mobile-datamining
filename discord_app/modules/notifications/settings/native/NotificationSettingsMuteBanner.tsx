// discord_app/modules/notifications/settings/native/NotificationSettingsMuteBanner.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  card: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: nativeDefault.radii.lg + 8,
    backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  },
};
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  padding: 16,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: nativeDefault.radii.lg + 8,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMuteBanner.tsx");

export const NotificationSettingsMuteBanner = ReactCompilerGating.isReactCompilerEnabled()
  ? function NotificationSettingsMuteBanner(style) {
      const cResult = c.c(18);
      const tmp4 = closure_5();
      if (cResult[0] === style.style) {
        if (cResult[1] === tmp4.card) {
          let tmp5 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { flex: 1, marginRight: 8 };
          cResult[3] = obj2;
          let tmp7 = obj2;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] !== style.title) {
          const obj3 = { variant: "text-md/semibold", color: "text-overlay-light", children: style.title };
          const tmp10 = React3(Text_Text.Text, obj3);
          cResult[4] = style.title;
          cResult[5] = tmp10;
          let tmp8 = tmp10;
        } else {
          tmp8 = cResult[5];
        }
        if (cResult[6] !== style.subtitle) {
          const obj4 = { variant: "text-xs/medium", color: "text-overlay-light", children: style.subtitle };
          const tmp13 = React3(Text_Text.Text, obj4);
          cResult[6] = style.subtitle;
          cResult[7] = tmp13;
          let tmp11 = tmp13;
        } else {
          tmp11 = cResult[7];
        }
        if (cResult[8] === tmp8) {
          if (cResult[9] === tmp11) {
            let tmp14 = cResult[10];
          }
          const _Symbol2 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult = intl.string(util.t.YqAjXy);
            cResult[11] = stringResult;
            let tmp18 = stringResult;
          } else {
            tmp18 = cResult[11];
          }
          if (cResult[12] !== style.onPressUnmute) {
            const obj5 = { text: tmp18, onPress: style.onPressUnmute, variant: "primary-overlay" };
            const tmp22 = React3(components_Button_Button.Button, obj5);
            cResult[12] = style.onPressUnmute;
            cResult[13] = tmp22;
            let tmp20 = tmp22;
          } else {
            tmp20 = cResult[13];
          }
          if (cResult[14] === tmp5) {
            if (cResult[15] === tmp14) {
              if (cResult[16] === tmp20) {
                let tmp23 = cResult[17];
              }
              return tmp23;
            }
          }
          const obj6 = { style: tmp5, children: null };
          const items = [tmp14, tmp20];
          obj6.children = items;
          const tmp26 = React4(View, obj6);
          cResult[14] = tmp5;
          cResult[15] = tmp14;
          cResult[16] = tmp20;
          cResult[17] = tmp26;
          tmp23 = tmp26;
        }
        const obj7 = { style: tmp7, children: null };
        const items1 = [tmp8, tmp11];
        obj7.children = items1;
        const tmp17 = React4(View, obj7);
        cResult[8] = tmp8;
        cResult[9] = tmp11;
        cResult[10] = tmp17;
        tmp14 = tmp17;
      }
      const items2 = [style.style, tmp4.card];
      cResult[0] = style.style;
      cResult[1] = tmp4.card;
      cResult[2] = items2;
      tmp5 = items2;
    }
  : function NotificationSettingsMuteBanner(children) {
      const obj = { style: null, children: null };
      const items = [children.style, closure_5().card];
      obj.style = items;
      const obj2 = { style: { flex: 1, marginRight: 8 }, children: null };
      const items1 = [
        React3(Text_Text.Text, { variant: "text-md/semibold", color: "text-overlay-light", children: children.title }),
        React3(Text_Text.Text, { variant: "text-xs/medium", color: "text-overlay-light", children: children.subtitle }),
      ];
      obj2.children = items1;
      const items2 = [React4(View, obj2)];
      const obj5 = { text: null, onPress: null, variant: "primary-overlay" };
      const intl = util.intl;
      obj5.text = intl.string(util.t.YqAjXy);
      obj5.onPress = children.onPressUnmute;
      items2[1] = React3(components_Button_Button.Button, obj5);
      obj.children = items2;
      return React4(View, obj);
    };
export const getMuteBannerSubtitleFromConfig = function getMuteBannerSubtitleFromConfig(config) {
  let end_time;
  if (config != null) {
    end_time = config.end_time;
  }
  if (null == end_time) {
    const intl = util.intl;
    let stringResult = intl.string(util.t["tFqP/P"]);
  } else {
    const intl2 = util.intl;
    const obj = { endTime: null };
    const _Date = Date;
    const date = new Date(config.end_time);
    obj.endTime = date.toLocaleString(util.intl.currentLocale, {
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
    stringResult = intl2.formatToPlainString(util.t.C7m4oh, obj);
  }
  return stringResult;
};
