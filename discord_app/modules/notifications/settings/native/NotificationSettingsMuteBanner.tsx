// === Module 10151: NotificationSettingsMuteBanner ===

// Module 10151 (NotificationSettingsMuteBanner)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
let createStyles = { card: null };
createStyles = { padding: 16, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: nativeDefault.radii.lg + 8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles.card = createStyles;
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMuteBanner.tsx");

export const NotificationSettingsMuteBanner = function NotificationSettingsMuteBanner(children) {
  let obj = { style: null, children: null };
  const items = [children.style, closure_5().card];
  obj.style = items;
  obj = { style: { flex: 1, marginRight: 8 }, children: null };
  obj = { variant: "text-md/semibold", color: "text-overlay-light", children: children.title };
  const items1 = [React3(Text_Text.Text, obj), React3(Text_Text.Text, { variant: "text-xs/medium", color: "text-overlay-light", children: children.subtitle })];
  obj.children = items1;
  const items2 = [React4(View, obj), ];
  const obj2 = { text: null, onPress: null, variant: "primary-overlay" };
  const intl = util.intl;
  obj2.text = intl.string(util.t.YqAjXy);
  obj2.onPress = children.onPressUnmute;
  items2[1] = React3(components_Button_Button.Button, obj2);
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
    obj.endTime = date.toLocaleString(util.intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
    stringResult = intl2.formatToPlainString(util.t.C7m4oh, obj);
  }
  return stringResult;
};