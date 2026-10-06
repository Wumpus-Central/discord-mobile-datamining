// === Module 16849: GuildChannelRow ===

// Module 16849 (GuildChannelRow)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useChannelNameDefault from "useChannelName" /* 5049 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5819 */;
import SearchConstants from "SearchConstants" /* 7524 */;
import SearchListRow2 from "SearchListRow" /* 16828 */;
import ChannelContent from "ChannelContent" /* 16850 */;
import renderChannelItem from "renderChannelItem" /* 16852 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let size;
let closure_3 = ["channel", "subtitle", "trailing", "extras", "onPress", "voiceStates"];
({ Image: hasOwnProperty, View: metroRequire } = react_native);
const layout = SearchConstants.CHANNEL_LIST_SEARCH_LAYOUT;
const jsx = Fragment.jsx;
let obj = { container: { paddingVertical: 10 }, content: { flexDirection: "row", alignItems: "center" }, iconContainer: { marginRight: 0 }, simpleIcon: size };
size = { width: 20, height: 20, marginRight: 8, tintColor: nativeDefault.colors.TEXT_MUTED };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const obj = react2;
  const cResult = obj.c(6);
  channel = channel.channel;
  const tmp4 = closure_9();
  const tmp5 = useChannelNameDefault(channel);
  if (cResult[0] === channel) {
    let tmp7;
    if (cResult[1] === tmp5) {
      tmp7 = cResult[2];
    }
    if (cResult[3] === tmp4.content) {
      let tmp9;
      if (cResult[4] === tmp7) {
        tmp9 = cResult[5];
      }
      return tmp9;
    }
    const tmp12 = <metroRequire style={tmp6}>{tmp7}</metroRequire>;
    cResult[3] = tmp4.content;
    cResult[4] = tmp7;
    cResult[5] = tmp12;
    tmp9 = tmp12;
  }
  const obj3 = { channel, layout, name: tmp5 };
  const tmpResult = ChannelContent;
  const renderChannelContentResult = tmpResult.renderChannelContent(obj3);
  cResult[0] = channel;
  cResult[1] = tmp5;
  cResult[2] = renderChannelContentResult;
  tmp7 = renderChannelContentResult;
}) : ((channel) => {
  channel = channel.channel;
  const tmp2 = useChannelNameDefault(channel);
  const obj2 = ChannelContent;
  const obj3 = { channel, layout, name: tmp2 };
  return <metroRequire style={closure_9().content}>{obj2.renderChannelContent(obj3)}</metroRequire>;
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let extras;
  let icon;
  let iconWidth;
  let onPress;
  let subtitle;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let tmpResult;
  let trailing;
  let voiceStates;
  const obj = react2;
  const cResult = obj.c(28);
  if (cResult[0] !== arg0) {
    ({ channel, subtitle, trailing, extras, onPress, voiceStates } = arg0);
    const tmp13 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = channel;
    cResult[2] = extras;
    cResult[3] = onPress;
    cResult[4] = tmp13;
    cResult[5] = subtitle;
    cResult[6] = trailing;
    cResult[7] = voiceStates;
    tmp10 = voiceStates;
    tmp9 = trailing;
    tmp8 = subtitle;
    tmp7 = tmp13;
    tmp6 = onPress;
    tmp5 = extras;
    tmp4 = channel;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
  }
  const tmp14 = closure_9();
  if (cResult[8] === tmp4) {
    let tmp15;
    if (cResult[9] === tmp10) {
      tmp15 = cResult[10];
    }
    if (cResult[11] === tmp4) {
      let tmp17;
      let tmp20;
      if (cResult[12] === tmp14) {
        tmp17 = cResult[13];
      }
      ({ icon, iconWidth } = tmp17);
      if (cResult[14] !== tmp4) {
        const tmp23 = <closure_10 channel={tmp4} />;
        cResult[14] = tmp4;
        cResult[15] = tmp23;
        tmp20 = tmp23;
      } else {
        tmp20 = cResult[15];
      }
      if (cResult[16] === tmp15) {
        if (cResult[17] === tmp5) {
          if (cResult[18] === icon) {
            if (cResult[19] === iconWidth) {
              if (cResult[20] === tmp6) {
                if (cResult[21] === tmp7) {
                  if (cResult[22] === tmp14.container) {
                    if (cResult[23] === tmp14.iconContainer) {
                      if (cResult[24] === tmp8) {
                        if (cResult[25] === tmp20) {
                          let tmp24;
                          if (cResult[26] === tmp9) {
                            tmp24 = cResult[27];
                          }
                          return tmp24;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const SearchListRow = SearchListRow2.SearchListRow;
      const merged = Object.assign(tmp15);
      const merged1 = Object.assign(tmp7);
      ({ container: obj7.containerStyle, iconContainer: obj7.iconContainerStyle } = tmp14);
      const tmp32 = <SearchListRow icon={icon} iconWidth={iconWidth} label={tmp20} subLabel={tmp8} onPress={tmp6} trailing={tmp9} extras={tmp5} />;
      cResult[16] = tmp15;
      cResult[17] = tmp5;
      cResult[18] = icon;
      cResult[19] = iconWidth;
      cResult[20] = tmp6;
      cResult[21] = tmp7;
      cResult[22] = tmp14.container;
      cResult[23] = tmp14.iconContainer;
      cResult[24] = tmp8;
      cResult[25] = tmp20;
      cResult[26] = tmp9;
      cResult[27] = tmp32;
      tmp24 = tmp32;
    }
    const obj4 = { icon: null, iconWidth: 32 };
    ({ style: tmp14.simpleIcon, source: tmpResult.getSimpleChannelIcon(tmp4) });
    cResult[11] = tmp4;
    cResult[12] = tmp14;
    cResult[13] = obj4;
    tmp17 = obj4;
    tmpResult = utils_ChannelUtils;
  }
  const tmpResult2 = renderChannelItem;
  const channelAccessibilityProps = tmpResult2.getChannelAccessibilityProps({ channel: tmp4, unread: false, mentionCount: 0, voiceStates: tmp10 });
  cResult[8] = tmp4;
  cResult[9] = tmp10;
  cResult[10] = channelAccessibilityProps;
  tmp15 = channelAccessibilityProps;
}) : ((channel) => {
  let extras;
  let onPress;
  let subtitle;
  let trailing;
  let voiceStates;
  channel = channel.channel;
  ({ subtitle, trailing, extras, onPress, voiceStates } = channel);
  const merged = Object.assign(channel, Object.assign({ channel: 0, subtitle: 0, trailing: 0, extras: 0, onPress: 0, voiceStates: 0 }));
  const tmp2 = closure_9();
  const obj = renderChannelItem;
  const channelAccessibilityProps = obj.getChannelAccessibilityProps({ channel, unread: false, mentionCount: 0, voiceStates });
  const tmp4 = <hasOwnProperty style={tmp2.simpleIcon} source={utils_ChannelUtils.getSimpleChannelIcon(channel)} />;
  const SearchListRow = SearchListRow2.SearchListRow;
  const merged1 = Object.assign(channelAccessibilityProps);
  const merged2 = Object.assign(merged);
  ({ container: obj4.containerStyle, iconContainer: obj4.iconContainerStyle } = tmp2);
  return <SearchListRow icon={tmp4} iconWidth={32} label={<closure_10 channel={channel} />} subLabel={subtitle} onPress={onPress} trailing={trailing} extras={extras} />;
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/GuildChannelRow.tsx");

export default memoResult;