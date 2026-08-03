// === Module 10481: ChannelIndicator ===

// Module 10481 (ChannelIndicator)
import get_ActivityIndicator from "get ActivityIndicator";
import { UnreadSetting } from "ReadStateTypes";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c3;
({ View: c3, StyleSheet } = get_ActivityIndicator);
let obj = { indicatorContainer: null, indicator: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.top = 0;
obj.bottom = 0;
obj.justifyContent = "center";
obj[0] = obj;
obj[1] = { width: 8, height: 8, borderRadius: require("Themes").radii.round, marginLeft: -4 };
let closure_6 = createCacheKey.createStyles(obj);
const obj1 = { width: 8, height: 8, borderRadius: require("Themes").radii.round, marginLeft: -4 };
const result = require("jsxProd").fileFinishedImporting("modules/channel_list_v2/native/components/StaticChannelIndicator.tsx");

export default function ChannelIndicator(arg0) {
  let resolvedUnreadSetting;
  let style;
  let unread;
  ({ unread, resolvedUnreadSetting, style } = arg0);
  const tmp = callback();
  require(3959) /* map */;
  if (resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES) {
    let CHANNELS_DEFAULT = importDefault(712).colors.INTERACTIVE_TEXT_ACTIVE;
  } else {
    CHANNELS_DEFAULT = importDefault(712).colors.CHANNELS_DEFAULT;
  }
  let tmp7 = null;
  if (unread) {
    let obj = { style: null, children: null };
    obj[0] = tmp.indicatorContainer;
    obj = { style: null };
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