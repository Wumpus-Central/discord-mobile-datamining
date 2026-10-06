// === Module 12513: NotificationSettingsMuteBanner ===

// Module 12513 (NotificationSettingsMuteBanner)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { card: obj2 };
obj2 = { padding: 16, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: nativeDefault.radii.lg + 8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_5 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  let items;
  let items1;
  const obj = react2;
  const cResult = obj.c(18);
  const tmp4 = closure_5();
  if (cResult[0] === style.style) {
    let tmp5;
    let tmp7;
    let tmp8;
    let tmp11;
    if (cResult[1] === tmp4.card) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { flex: 1, marginRight: 8 };
      cResult[3] = obj2;
      tmp7 = obj2;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== style.title) {
      const obj3 = { variant: "text-md/semibold", color: "text-overlay-light", children: style.title };
      const tmp10 = _false(Text_Text.Text, obj3);
      cResult[4] = style.title;
      cResult[5] = tmp10;
      tmp8 = tmp10;
    } else {
      tmp8 = cResult[5];
    }
    if (cResult[6] !== style.subtitle) {
      const obj4 = { variant: "text-xs/medium", color: "text-overlay-light", children: style.subtitle };
      const tmp13 = _false(Text_Text.Text, obj4);
      cResult[6] = style.subtitle;
      cResult[7] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[7];
    }
    if (cResult[8] === tmp8) {
      let tmp14;
      let tmp18;
      let tmp20;
      if (cResult[9] === tmp11) {
        tmp14 = cResult[10];
      }
      const _Symbol2 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult = intl.string(intl3.t.YqAjXy);
        cResult[11] = stringResult;
        tmp18 = stringResult;
      } else {
        tmp18 = cResult[11];
      }
      if (cResult[12] !== style.onPressUnmute) {
        const obj5 = { text: tmp18, onPress: style.onPressUnmute, variant: "primary-overlay" };
        const tmp22 = _false(components_Button_Button.Button, obj5);
        cResult[12] = style.onPressUnmute;
        cResult[13] = tmp22;
        tmp20 = tmp22;
      } else {
        tmp20 = cResult[13];
      }
      if (cResult[14] === tmp5) {
        if (cResult[15] === tmp14) {
          let tmp23;
          if (cResult[16] === tmp20) {
            tmp23 = cResult[17];
          }
          return tmp23;
        }
      }
      const obj6 = { style: tmp5, children: items };
      items = [tmp14, tmp20];
      const tmp26 = React3(View, obj6);
      cResult[14] = tmp5;
      cResult[15] = tmp14;
      cResult[16] = tmp20;
      cResult[17] = tmp26;
      tmp23 = tmp26;
    }
    const obj7 = { style: tmp7, children: items1 };
    items1 = [tmp8, tmp11];
    const tmp17 = React3(View, obj7);
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
}) : ((children) => {
  let intl;
  let items;
  let items1;
  let items2;
  const obj = { style: items, children: items2 };
  items = [children.style, closure_5().card];
  const obj2 = { style: { flex: 1, marginRight: 8 }, children: items1 };
  items1 = [, ];
  const obj3 = { variant: "text-md/semibold", color: "text-overlay-light", children: children.title };
  items1[0] = _false(Text_Text.Text, obj3);
  const obj4 = { variant: "text-xs/medium", color: "text-overlay-light", children: children.subtitle };
  items1[1] = _false(Text_Text.Text, obj4);
  items2 = [React3(View, obj2), ];
  const obj5 = { text: intl.string(intl3.t.YqAjXy), onPress: children.onPressUnmute, variant: "primary-overlay" };
  const Button = components_Button_Button.Button;
  intl = intl3.intl;
  items2[1] = _false(Button, obj5);
  return React3(View, obj);
});
const result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMuteBanner.tsx");

export const NotificationSettingsMuteBanner = tmp4;
export const getMuteBannerSubtitleFromConfig = function getMuteBannerSubtitleFromConfig(config) {
  let date;
  let stringResult;
  let end_time;
  if (config != null) {
    end_time = config.end_time;
  }
  if (null == end_time) {
    const intl = intl3.intl;
    stringResult = intl.string(intl3.t["tFqP/P"]);
  } else {
    const intl2 = intl3.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const _Date = Date;
    const self = this;
    const self2 = this;
    const obj = { endTime: date.toLocaleString(intl3.intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" }) };
    const C7m4oh = intl3.t.C7m4oh;
    date = new Date(config.end_time);
    stringResult = formatToPlainString(C7m4oh, obj);
  }
  return stringResult;
};