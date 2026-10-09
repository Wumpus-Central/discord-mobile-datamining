// === Module 17278: GuildChannelRow ===

// Module 17278 (GuildChannelRow)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useChannelNameDefault from "useChannelName" /* 5418 */;
import FastImageDefault from "FastImage" /* 6163 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8142 */;
import SearchListRow from "SearchListRow" /* 17257 */;
import ChannelContent from "ChannelContent" /* 17279 */;
import renderChannelItem from "renderChannelItem" /* 17281 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["channel", "subtitle", "trailing", "extras", "onPress", "voiceStates"];
const View = fn(17).View;
const layout = fn(9285).CHANNEL_LIST_SEARCH_LAYOUT;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj = { container: { paddingVertical: 10 }, content: { flexDirection: "row", alignItems: "center" }, iconContainer: { marginRight: 0 }, simpleIcon: null };
let size = { width: 20, height: 20, marginRight: 8, tintColor: nativeDefault.colors.TEXT_MUTED };
obj.simpleIcon = size;
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildChannelLabel(channel) {
  const cResult = c.c(6);
  channel = channel.channel;
  const tmp4 = closure_8();
  const tmp5 = useChannelNameDefault(channel);
  if (cResult[0] === channel) {
    if (cResult[1] === tmp5) {
      let tmp7 = cResult[2];
    }
    if (cResult[3] === tmp4.content) {
      if (cResult[4] === tmp7) {
        let tmp9 = cResult[5];
      }
      return tmp9;
    }
    const obj2 = { style: tmp6, children: tmp7 };
    const tmp12 = <View style={tmp6}>{tmp7}</View>;
    cResult[3] = tmp4.content;
    cResult[4] = tmp7;
    cResult[5] = tmp12;
    tmp9 = tmp12;
  }
  const renderChannelContentResult = ChannelContent.renderChannelContent({ channel, layout, name: tmp5 });
  cResult[0] = channel;
  cResult[1] = tmp5;
  cResult[2] = renderChannelContentResult;
  tmp7 = renderChannelContentResult;
  const obj3 = { channel, layout, name: tmp5 };
  const tmpResult = ChannelContent;
}) : (function GuildChannelLabel(channel) {
  channel = channel.channel;
  const obj = { style: closure_8().content, children: null };
  const tmp = closure_8();
  const tmp2 = useChannelNameDefault(channel);
  obj.children = ChannelContent.renderChannelContent({ channel, layout, name: tmp2 });
  return <View style={closure_8().content}>{null}</View>;
});
ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/GuildChannelRow.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildChannelRow(arg0) {
  const cResult = c.c(28);
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
    let tmp10 = voiceStates;
    let tmp9 = trailing;
    let tmp8 = subtitle;
    let tmp7 = tmp13;
    let tmp6 = onPress;
    let tmp5 = extras;
    let tmp4 = channel;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
  }
  const tmp14 = closure_8();
  if (cResult[8] === tmp4) {
    if (cResult[9] === tmp10) {
      let tmp15 = cResult[10];
    }
    if (cResult[11] === tmp4) {
      if (cResult[12] === tmp14) {
        let tmp17 = cResult[13];
      }
      ({ icon, iconWidth } = tmp17);
      if (cResult[14] !== tmp4) {
        const obj2 = { channel: tmp4 };
        const tmp24 = <closure_9 channel={tmp4} />;
        cResult[14] = tmp4;
        cResult[15] = tmp24;
        let tmp21 = tmp24;
      } else {
        tmp21 = cResult[15];
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
                        if (cResult[25] === tmp21) {
                          if (cResult[26] === tmp9) {
                            let tmp25 = cResult[27];
                          }
                          return tmp25;
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
      const obj3 = {};
      const merged = Object.assign(tmp15);
      const merged1 = Object.assign(tmp7);
      ({ container: obj7.containerStyle, iconContainer: obj7.iconContainerStyle } = tmp14);
      obj3.icon = icon;
      obj3.iconWidth = iconWidth;
      obj3.label = tmp21;
      obj3.subLabel = tmp8;
      obj3.onPress = tmp6;
      obj3.trailing = tmp9;
      obj3.extras = tmp5;
      const tmp33 = jsx(SearchListRow.SearchListRow, {});
      cResult[16] = tmp15;
      cResult[17] = tmp5;
      cResult[18] = icon;
      cResult[19] = iconWidth;
      cResult[20] = tmp6;
      cResult[21] = tmp7;
      cResult[22] = tmp14.container;
      cResult[23] = tmp14.iconContainer;
      cResult[24] = tmp8;
      cResult[25] = tmp21;
      cResult[26] = tmp9;
      cResult[27] = tmp33;
      tmp25 = tmp33;
    }
    const obj4 = { icon: null, iconWidth: 32 };
    const obj5 = { style: tmp14.simpleIcon, source: null };
    obj5.source = utils_ChannelUtils.getSimpleChannelIcon(tmp4);
    obj4.icon = <tmp20 style={tmp14.simpleIcon} source={null} />;
    cResult[11] = tmp4;
    cResult[12] = tmp14;
    cResult[13] = obj4;
    tmp17 = obj4;
    const tmpResult = utils_ChannelUtils;
  }
  const channelAccessibilityProps = renderChannelItem.getChannelAccessibilityProps({ channel: tmp4, unread: false, mentionCount: 0, voiceStates: tmp10 });
  cResult[8] = tmp4;
  cResult[9] = tmp10;
  cResult[10] = channelAccessibilityProps;
  tmp15 = channelAccessibilityProps;
  const tmpResult2 = renderChannelItem;
}) : (function GuildChannelRow(channel) {
  channel = channel.channel;
  ({ subtitle, trailing, extras, onPress, voiceStates } = channel);
  const merged = Object.assign(channel, Object.assign({ channel: 0, subtitle: 0, trailing: 0, extras: 0, onPress: 0, voiceStates: 0 }));
  const tmp2 = closure_8();
  const channelAccessibilityProps = renderChannelItem.getChannelAccessibilityProps({ channel, unread: false, mentionCount: 0, voiceStates });
  const obj2 = { style: tmp2.simpleIcon, source: null };
  obj2.source = utils_ChannelUtils.getSimpleChannelIcon(channel);
  const obj6 = {};
  const merged1 = Object.assign(channelAccessibilityProps);
  const merged2 = Object.assign(merged);
  ({ container: obj4.containerStyle, iconContainer: obj4.iconContainerStyle } = tmp2);
  obj6.icon = <tmp4 style={tmp2.simpleIcon} source={null} />;
  obj6.iconWidth = 32;
  obj6.label = <closure_9 channel={channel} />;
  obj6.subLabel = subtitle;
  obj6.onPress = onPress;
  obj6.trailing = trailing;
  obj6.extras = extras;
  return jsx(SearchListRow.SearchListRow, {});
}));