// === Module 10108: ChannelIndicator ===

// Module 10108 (ChannelIndicator)
import obj132 from "obj132" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import ThemesDefault from "Themes" /* 712 */;
import map from "map" /* 4097 */;
import ReadStateTypes from "ReadStateTypes" /* 5044 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import createCacheKey from "createCacheKey" /* 4661 */;

({ View: c3, StyleSheet } = get_ActivityIndicator);
const UnreadSetting = ReadStateTypes.UnreadSetting;
const jsx = jsxProd.jsx;
let obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.top = 0;
obj.bottom = 0;
obj.justifyContent = "center";
obj[0] = obj;
obj[1] = { width: 8, height: 8, borderRadius: ThemesDefault.radii.round, marginLeft: -4 };
let closure_6 = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/channel_list_v2/native/components/StaticChannelIndicator.tsx");

export default function ChannelIndicator(arg0) {
  ({ unread, resolvedUnreadSetting, style } = arg0);
  const tmp = callback();
  map;
  if (resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES) {
    let CHANNELS_DEFAULT = ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE;
  } else {
    CHANNELS_DEFAULT = ThemesDefault.colors.CHANNELS_DEFAULT;
  }
  let tmp7 = null;
  if (unread) {
    let obj = { style: null, children: null };
    obj[0] = tmp.indicatorContainer;
    const items = [tmp.indicator, , ];
    obj = { backgroundColor: null };
    obj[0] = tmp6;
    items[1] = obj;
    items[2] = style;
    obj[0] = items;
    obj[1] = <closure_3 backgroundColor={null} />;
    tmp7 = <closure_3 backgroundColor={null} />;
  }
  return tmp7;
};