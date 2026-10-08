// === Module 12105: StaticChannelIndicator ===

// Module 12105 (StaticChannelIndicator)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4778 */;
import ReadStateConstants from "ReadStateConstants" /* 5972 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

({ View: c3, StyleSheet } = get_ActivityIndicator);
const UnreadSetting = ReadStateConstants.UnreadSetting;
const jsx = jsxProd.jsx;
let obj = { indicatorContainer: null, indicator: null };
let obj2 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.top = 0;
obj2.bottom = 0;
obj2.justifyContent = "center";
obj.indicatorContainer = obj2;
let size = { width: 8, height: 8, borderRadius: nativeDefault.radii.round, marginLeft: -4 };
obj.indicator = size;
let closure_6 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/StaticChannelIndicator.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelIndicator(resolvedUnreadSetting) {
  const cResult = c.c(5);
  ({ unread, style } = resolvedUnreadSetting);
  const tmp3 = closure_6();
  if (resolvedUnreadSetting.resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES) {
    let CHANNELS_DEFAULT = nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE;
  } else {
    CHANNELS_DEFAULT = nativeDefault.colors.CHANNELS_DEFAULT;
  }
  const token = useToken.useToken(CHANNELS_DEFAULT);
  if (cResult[0] === token) {
    if (cResult[1] === style) {
      if (cResult[2] === tmp3) {
        if (cResult[3] === unread) {
          let tmp7 = cResult[4];
        }
        return tmp7;
      }
    }
  }
  let tmp8 = null;
  if (unread) {
    const obj3 = { style: tmp3.indicatorContainer, children: null };
    const obj4 = { style: null };
    const items = [tmp3.indicator, , ];
    const obj5 = { backgroundColor: token };
    items[1] = obj5;
    items[2] = style;
    obj4.style = items;
    obj3.children = <React3 style={null} />;
    tmp8 = <React3 style={tmp3.indicatorContainer}>{null}</React3>;
  }
  cResult[0] = token;
  cResult[1] = style;
  cResult[2] = tmp3;
  cResult[3] = unread;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : (function ChannelIndicator(arg0) {
  ({ unread, resolvedUnreadSetting, style } = arg0);
  const tmp = closure_6();
  useToken;
  if (resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES) {
    let CHANNELS_DEFAULT = nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE;
  } else {
    CHANNELS_DEFAULT = nativeDefault.colors.CHANNELS_DEFAULT;
  }
  let tmp7 = null;
  if (unread) {
    const obj = { style: tmp.indicatorContainer, children: null };
    const obj2 = { style: null };
    const items = [tmp.indicator, , ];
    const obj3 = { backgroundColor: tmp6 };
    items[1] = obj3;
    items[2] = style;
    obj2.style = items;
    obj.children = <React3 style={null} />;
    tmp7 = <React3 style={tmp.indicatorContainer}>{null}</React3>;
  }
  return tmp7;
});