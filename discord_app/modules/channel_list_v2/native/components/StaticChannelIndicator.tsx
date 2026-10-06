// === Module 12032: StaticChannelIndicator ===

// Module 12032 (StaticChannelIndicator)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken2 from "useToken" /* 4586 */;
import ReadStateConstants from "ReadStateConstants" /* 5078 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let c3;
let obj2;
let size;
({ View: c3, StyleSheet } = react_native);
const UnreadSetting = ReadStateConstants.UnreadSetting;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { indicatorContainer: obj2, indicator: size };
obj2 = { top: 0, bottom: 0, justifyContent: "center" };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
size = { width: 8, height: 8, borderRadius: nativeDefault.radii.round, marginLeft: -4 };
let closure_6 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((resolvedUnreadSetting) => {
  let CHANNELS_DEFAULT;
  let style;
  let unread;
  const obj = react;
  const cResult = obj.c(5);
  ({ unread, style } = resolvedUnreadSetting);
  resolvedUnreadSetting = resolvedUnreadSetting.resolvedUnreadSetting;
  const tmp3 = closure_6();
  const useToken = useToken2.useToken;
  useToken2;
  if (resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES) {
    CHANNELS_DEFAULT = nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE;
  } else {
    CHANNELS_DEFAULT = nativeDefault.colors.CHANNELS_DEFAULT;
  }
  const token = useToken(CHANNELS_DEFAULT);
  if (cResult[0] === token) {
    if (cResult[1] === style) {
      if (cResult[2] === tmp3) {
        let tmp8;
        if (cResult[3] === unread) {
          tmp8 = cResult[4];
        }
        return tmp8;
      }
    }
  }
  let tmp9 = null;
  if (unread) {
    const items = [tmp3.indicator, , ];
    const obj4 = { backgroundColor: token };
    items[1] = obj4;
    items[2] = style;
    tmp9 = <_false style={tmp3.indicatorContainer}>{null}</_false>;
  }
  cResult[0] = token;
  cResult[1] = style;
  cResult[2] = tmp3;
  cResult[3] = unread;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : ((arg0) => {
  let resolvedUnreadSetting;
  let style;
  let unread;
  ({ unread, resolvedUnreadSetting, style } = arg0);
  const tmp = closure_6();
  useToken2;
  if (resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES) {
    let CHANNELS_DEFAULT = nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE;
  } else {
    CHANNELS_DEFAULT = nativeDefault.colors.CHANNELS_DEFAULT;
  }
  let tmp7 = null;
  if (unread) {
    const items = [tmp.indicator, , ];
    const obj3 = { backgroundColor: tmp6 };
    items[1] = obj3;
    items[2] = style;
    tmp7 = <_false style={tmp.indicatorContainer}>{null}</_false>;
  }
  return tmp7;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/StaticChannelIndicator.tsx");

export default tmp5;