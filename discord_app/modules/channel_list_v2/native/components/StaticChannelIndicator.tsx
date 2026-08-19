// discord_app/modules/channel_list_v2/native/components/StaticChannelIndicator.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../../design/tokens/native/useToken.tsx";
import ReadStateTypes from "../../../read_states/ReadStateConstants.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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