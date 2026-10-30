// discord_app/modules/channel_list_v2/native/components/StaticChannelIndicator.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import ReadStateConstants from "../../../read_states/ReadStateConstants.tsx";
import get_ActivityIndicator from "../../../../../_runtime/metro/00017__.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

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

export default function ChannelIndicator(arg0) {
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
    const items = [tmp.indicator, ,];
    const obj3 = { backgroundColor: tmp6 };
    items[1] = obj3;
    items[2] = style;
    obj2.style = items;
    obj.children = <React3 style={null} />;
    tmp7 = <React3 style={tmp.indicatorContainer}>{null}</React3>;
  }
  return tmp7;
}
