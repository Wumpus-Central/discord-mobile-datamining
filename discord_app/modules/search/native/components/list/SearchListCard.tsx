// === Module 16841: SearchListCard ===

// Module 16841 (SearchListCard)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import UserUtilsDefault from "UserUtils" /* 4722 */;
import Text_Text from "Text/Text" /* 4886 */;
import useChannelNameDefault from "useChannelName" /* 5043 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5812 */;
import ForumIcon from "ForumIcon" /* 5872 */;
import Card_Card from "Card/Card" /* 5995 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10648 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let thumbnail;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { channelName: { flexShrink: 1, marginStart: 4 }, channelIcon: obj2, avatar: { marginRight: 2 }, channel: { flexDirection: "row", alignItems: "center" }, author: { flexDirection: "row", alignItems: "center" }, authorName: { flexShrink: 1, marginStart: 2 }, container: obj3, content: { paddingTop: 12, paddingHorizontal: 12, paddingBottom: 4 }, footer: { flexDirection: "column", paddingTop: 4, paddingHorizontal: 12, paddingBottom: 12, gap: 4 }, thumbnail: obj4, privateChannelIcon: { flexDirection: "row", alignItems: "center" }, icon: { marginRight: 4 }, gdmIcon: { width: 18 } };
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, padding: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
obj4 = { flex: 1, overflow: "hidden", borderTopRightRadius: nativeDefault.radii.lg, borderTopLeftRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let author;
  let avatarSource;
  let items;
  const obj = react2;
  const cResult = obj.c(13);
  ({ author, avatarSource } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === author.avatarDecoration) {
    if (cResult[1] === avatarSource) {
      let tmp6;
      let tmp8;
      if (cResult[2] === tmp4.avatar) {
        tmp6 = cResult[3];
      }
      const authorName = tmp4.authorName;
      if (cResult[4] !== author) {
        const obj3 = UserUtilsDefault;
        const name = obj3.getName(author);
        cResult[4] = author;
        cResult[5] = name;
        tmp8 = name;
      } else {
        tmp8 = cResult[5];
      }
      if (cResult[6] === tmp4.authorName) {
        let tmp11;
        if (cResult[7] === tmp8) {
          tmp11 = cResult[8];
        }
        if (cResult[9] === tmp4.author) {
          if (cResult[10] === tmp6) {
            let tmp14;
            if (cResult[11] === tmp11) {
              tmp14 = cResult[12];
            }
            return tmp14;
          }
        }
        const obj2 = { style: tmp5, children: items };
        items = [tmp6, tmp11];
        const tmp17 = metroRequire(View, obj2);
        cResult[9] = tmp4.author;
        cResult[10] = tmp6;
        cResult[11] = tmp11;
        cResult[12] = tmp17;
        tmp14 = tmp17;
      }
      const obj4 = { style: authorName, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: tmp8 };
      const tmp13 = hasOwnProperty(Text_Text.Text, obj4);
      cResult[6] = tmp4.authorName;
      cResult[7] = tmp8;
      cResult[8] = tmp13;
      tmp11 = tmp13;
    }
  }
  const obj5 = { source: avatarSource, size: native.AvatarSizes.SIZE_16, style: tmp4.avatar, avatarDecoration: author.avatarDecoration };
  const Avatar = native.Avatar;
  const tmp7 = hasOwnProperty(Avatar, obj5);
  cResult[0] = author.avatarDecoration;
  cResult[1] = avatarSource;
  cResult[2] = tmp4.avatar;
  cResult[3] = tmp7;
  tmp6 = tmp7;
}) : ((author) => {
  let items;
  let obj4;
  author = author.author;
  const avatarSource = author.avatarSource;
  const tmp = closure_7();
  const obj = { style: tmp.author, children: items };
  const obj2 = { source: avatarSource, size: native.AvatarSizes.SIZE_16, style: tmp.avatar, avatarDecoration: author.avatarDecoration };
  const Avatar = native.Avatar;
  items = [hasOwnProperty(Avatar, obj2), ];
  const obj3 = { style: tmp.authorName, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: obj4.getName(author) };
  const Text = Text_Text.Text;
  obj4 = UserUtilsDefault;
  items[1] = hasOwnProperty(Text, obj3);
  return metroRequire(View, obj);
});
let closure_8 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let intl;
  let items;
  let items1;
  let tmp14;
  const obj = react2;
  const cResult = obj.c(18);
  channel = channel.channel;
  const tmp4 = closure_7();
  const tmp6 = useChannelNameDefault(channel);
  if (channel.isGroupDM()) {
    let tmp18;
    if (cResult[0] !== channel) {
      const obj2 = { channel, size: native.AvatarSizes.SIZE_16 };
      const tmp5Result = GroupDMAvatarDefault;
      const tmp21 = hasOwnProperty(tmp5Result, obj2);
      cResult[0] = channel;
      cResult[1] = tmp21;
      tmp18 = tmp21;
    } else {
      tmp18 = cResult[1];
    }
    if (cResult[2] === tmp4.gdmIcon) {
      let tmp22;
      if (cResult[3] === tmp18) {
        tmp22 = cResult[4];
      }
      if (cResult[5] === tmp6) {
        let tmp26;
        if (cResult[6] === tmp4.channelName) {
          tmp26 = cResult[7];
        }
        if (cResult[8] === tmp4.channel) {
          if (cResult[9] === tmp22) {
            let tmp29;
            if (cResult[10] === tmp26) {
              tmp29 = cResult[11];
            }
            tmp14 = tmp29;
          }
        }
        const obj3 = { style: tmp4.channel, children: items };
        items = [tmp22, tmp26];
        const tmp32 = metroRequire(View, obj3);
        cResult[8] = tmp4.channel;
        cResult[9] = tmp22;
        cResult[10] = tmp26;
        cResult[11] = tmp32;
        tmp29 = tmp32;
      }
      const obj4 = { style: tmp4.channelName, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: tmp6 };
      const tmp28 = hasOwnProperty(Text_Text.Text, obj4);
      cResult[5] = tmp6;
      cResult[6] = tmp4.channelName;
      cResult[7] = tmp28;
      tmp26 = tmp28;
    }
    const obj5 = { style: tmp4.gdmIcon, children: tmp18 };
    const tmp25 = hasOwnProperty(View, obj5);
    cResult[2] = tmp4.gdmIcon;
    cResult[3] = tmp18;
    cResult[4] = tmp25;
    tmp22 = tmp25;
  } else {
    let tmp7;
    let tmp11;
    if (cResult[12] !== tmp4.icon) {
      const obj6 = { style: tmp4.icon, size: "xs", color: "interactive-text-default" };
      const tmp9 = hasOwnProperty(ForumIcon.ForumIcon, obj6);
      cResult[12] = tmp4.icon;
      cResult[13] = tmp9;
      tmp7 = tmp9;
    } else {
      tmp7 = cResult[13];
    }
    const _Symbol = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      const obj7 = { variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: intl.string(intl2.t.ACgJhM) };
      const Text = Text_Text.Text;
      intl = intl2.intl;
      const tmp13 = hasOwnProperty(Text, obj7);
      cResult[14] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[14];
    }
    if (cResult[15] === tmp4.privateChannelIcon) {
      if (cResult[16] === tmp7) {
        tmp14 = cResult[17];
      }
    }
    const obj8 = { style: tmp4.privateChannelIcon, children: items1 };
    items1 = [tmp7, tmp11];
    const tmp17 = metroRequire(View, obj8);
    cResult[15] = tmp4.privateChannelIcon;
    cResult[16] = tmp7;
    cResult[17] = tmp17;
    tmp14 = tmp17;
  }
  return tmp14;
}) : ((channel) => {
  let intl;
  let obj3;
  let tmp2Result;
  let tmp5Result;
  channel = channel.channel;
  const tmp = closure_7();
  const obj = { style: null, children: null };
  const tmp4 = useChannelNameDefault(channel);
  if (channel.isGroupDM()) {
    obj.style = tmp.channel;
    const obj2 = { style: tmp.gdmIcon, children: hasOwnProperty(tmp2Result, obj3) };
    obj3 = { channel, size: native.AvatarSizes.SIZE_16 };
    tmp2Result = GroupDMAvatarDefault;
    const items = [hasOwnProperty(View, obj2), ];
    const obj4 = { style: tmp.channelName, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: tmp4 };
    items[1] = hasOwnProperty(Text_Text.Text, obj4);
    obj.children = items;
    tmp5Result = metroRequire(View, obj);
  } else {
    obj.style = tmp.privateChannelIcon;
    const obj5 = { style: tmp.icon, size: "xs", color: "interactive-text-default" };
    const items1 = [hasOwnProperty(ForumIcon.ForumIcon, obj5), ];
    const obj6 = { variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: intl.string(intl2.t.ACgJhM) };
    const Text = Text_Text.Text;
    intl = intl2.intl;
    items1[1] = hasOwnProperty(Text, obj6);
    obj.children = items1;
    tmp5Result = metroRequire(View, obj);
  }
  return tmp5Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let items;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(12);
  channel = channel.channel;
  const tmp4 = closure_7();
  const tmp5 = useChannelNameDefault(channel);
  if (cResult[0] !== channel) {
    const tmpResult = utils_ChannelUtils;
    const channelIcon = tmpResult.getChannelIcon(channel, { ignoreTraits: true });
    cResult[0] = channel;
    cResult[1] = channelIcon;
    tmp6 = channelIcon;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp6) {
    let tmp8;
    if (cResult[3] === tmp4.channelIcon.color) {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp5) {
      let tmp10;
      if (cResult[6] === tmp4.channelName) {
        tmp10 = cResult[7];
      }
      if (cResult[8] === tmp4.channel) {
        if (cResult[9] === tmp8) {
          let tmp13;
          if (cResult[10] === tmp10) {
            tmp13 = cResult[11];
          }
          return tmp13;
        }
      }
      const obj2 = { style: tmp4.channel, children: items };
      items = [tmp8, tmp10];
      const tmp16 = metroRequire(View, obj2);
      cResult[8] = tmp4.channel;
      cResult[9] = tmp8;
      cResult[10] = tmp10;
      cResult[11] = tmp16;
      tmp13 = tmp16;
    }
    const obj3 = { style: tmp4.channelName, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: tmp5 };
    const tmp12 = hasOwnProperty(Text_Text.Text, obj3);
    cResult[5] = tmp5;
    cResult[6] = tmp4.channelName;
    cResult[7] = tmp12;
    tmp10 = tmp12;
  }
  const obj4 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: tmp6, color: tmp4.channelIcon.color };
  const Icon = native.Icon;
  const tmp9 = hasOwnProperty(Icon, obj4);
  cResult[2] = tmp6;
  cResult[3] = tmp4.channelIcon.color;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : ((channel) => {
  let items;
  channel = channel.channel;
  const tmp = closure_7();
  const obj2 = { style: tmp.channel, children: items };
  const tmp2 = useChannelNameDefault(channel);
  const obj = utils_ChannelUtils;
  const channelIcon = obj.getChannelIcon(channel, { ignoreTraits: true });
  const obj3 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: channelIcon, color: tmp.channelIcon.color };
  const Icon = native.Icon;
  items = [hasOwnProperty(Icon, obj3), ];
  const obj4 = { style: tmp.channelName, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: tmp2 };
  items[1] = hasOwnProperty(Text_Text.Text, obj4);
  return metroRequire(View, obj2);
});
let closure_10 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let containerStyle;
  let onPress;
  const obj = react2;
  const cResult = obj.c(7);
  ({ children, onPress, containerStyle } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === containerStyle) {
    let tmp5;
    if (cResult[1] === tmp4.container) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === children) {
      if (cResult[4] === onPress) {
        let tmp6;
        if (cResult[5] === tmp5) {
          tmp6 = cResult[6];
        }
        return tmp6;
      }
    }
    const obj2 = { shadow: "low", border: "subtle", onPress, style: tmp5, children };
    const tmp8 = hasOwnProperty(Card_Card.Card, obj2);
    cResult[3] = children;
    cResult[4] = onPress;
    cResult[5] = tmp5;
    cResult[6] = tmp8;
    tmp6 = tmp8;
  }
  const items = [tmp4.container, containerStyle];
  cResult[0] = containerStyle;
  cResult[1] = tmp4.container;
  cResult[2] = items;
  tmp5 = items;
}) : ((arg0) => {
  let children;
  let containerStyle;
  let items;
  let onPress;
  ({ children, onPress, containerStyle } = arg0);
  const obj = { shadow: "low", border: "subtle", onPress, style: items, children };
  items = [closure_7().container, containerStyle];
  closure_7();
  return hasOwnProperty(Card_Card.Card, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((thumbnail) => {
  const obj = react2;
  const cResult = obj.c(3);
  thumbnail = thumbnail.thumbnail;
  const tmp2 = closure_7();
  if (cResult[0] === tmp2.thumbnail) {
    let tmp3;
    if (cResult[1] === thumbnail) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const obj2 = { style: tmp2.thumbnail, children: thumbnail };
  const tmp4 = hasOwnProperty(View, obj2);
  cResult[0] = tmp2.thumbnail;
  cResult[1] = thumbnail;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : ((children) => {
  const obj = { style: closure_7().thumbnail, children: children.thumbnail };
  return hasOwnProperty(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let label;
  let subLabel;
  let tmp5;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(8);
  ({ label, subLabel } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] !== label) {
    let tmp6 = label;
    if (typeof label === "string") {
      const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: label };
      tmp6 = hasOwnProperty(Text_Text.Text, obj2);
    }
    cResult[0] = label;
    cResult[1] = tmp6;
    tmp5 = tmp6;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== subLabel) {
    let tmp8 = subLabel;
    if (typeof subLabel === "string") {
      const obj3 = { variant: "text-sm/normal", color: "text-default", lineClamp: 1, children: subLabel };
      tmp8 = hasOwnProperty(Text_Text.Text, obj3);
    }
    cResult[2] = subLabel;
    cResult[3] = tmp8;
    tmp7 = tmp8;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === tmp4.content) {
    if (cResult[5] === tmp5) {
      let tmp9;
      if (cResult[6] === tmp7) {
        tmp9 = cResult[7];
      }
      return tmp9;
    }
  }
  const obj4 = { style: tmp4.content, children: items };
  items = [tmp5, tmp7];
  const tmp10 = metroRequire(View, obj4);
  cResult[4] = tmp4.content;
  cResult[5] = tmp5;
  cResult[6] = tmp7;
  cResult[7] = tmp10;
  tmp9 = tmp10;
}) : ((arg0) => {
  let items;
  let label;
  let subLabel;
  ({ label, subLabel } = arg0);
  let tmp3 = label;
  const obj = { style: closure_7().content, children: items };
  if (typeof label === "string") {
    const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: label };
    tmp3 = hasOwnProperty(Text_Text.Text, obj2);
  }
  items = [tmp3, ];
  let tmp4 = subLabel;
  if (typeof subLabel === "string") {
    const obj3 = { variant: "text-sm/normal", color: "text-default", lineClamp: 1, children: subLabel };
    tmp4 = hasOwnProperty(Text_Text.Text, obj3);
  }
  items[1] = tmp4;
  return metroRequire(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let author;
  let avatarSource;
  let channel;
  let items;
  const obj = react2;
  const cResult = obj.c(11);
  ({ author, avatarSource, channel } = arg0);
  const tmp2 = closure_7();
  let tmp3 = null;
  if (null != channel) {
    if (null == channel.getGuildId()) {
      let tmp8;
      if (cResult[0] !== channel) {
        const obj2 = { channel };
        const tmp11 = hasOwnProperty(closure_9, obj2);
        cResult[0] = channel;
        cResult[1] = tmp11;
        tmp8 = tmp11;
      } else {
        tmp8 = cResult[1];
      }
      tmp3 = tmp8;
    } else {
      let tmp4;
      if (cResult[2] !== channel) {
        const obj3 = { channel };
        const tmp7 = hasOwnProperty(closure_10, obj3);
        cResult[2] = channel;
        cResult[3] = tmp7;
        tmp4 = tmp7;
      } else {
        tmp4 = cResult[3];
      }
      tmp3 = tmp4;
    }
  }
  if (cResult[4] === author) {
    let tmp12;
    if (cResult[5] === avatarSource) {
      tmp12 = cResult[6];
    }
    if (cResult[7] === tmp3) {
      if (cResult[8] === tmp2.footer) {
        let tmp14;
        if (cResult[9] === tmp12) {
          tmp14 = cResult[10];
        }
        return tmp14;
      }
    }
    const obj4 = { style: tmp2.footer, children: items };
    items = [tmp12, tmp3];
    const tmp17 = metroRequire(View, obj4);
    cResult[7] = tmp3;
    cResult[8] = tmp2.footer;
    cResult[9] = tmp12;
    cResult[10] = tmp17;
    tmp14 = tmp17;
  }
  const tmp13 = hasOwnProperty(closure_8, { author, avatarSource });
  cResult[4] = author;
  cResult[5] = avatarSource;
  cResult[6] = tmp13;
  tmp12 = tmp13;
}) : ((channel) => {
  let author;
  let avatarSource;
  let items1;
  channel = channel.channel;
  ({ author, avatarSource } = channel);
  const items = [channel];
  let tmp = closure_7();
  const obj = { style: tmp.footer, children: items1 };
  const memo = react.useMemo(() => {
    let tmp = null;
    if (null != channel) {
      let tmp4;
      if (null == channel.getGuildId()) {
        const obj2 = { channel };
        tmp4 = hasOwnProperty(closure_9, obj2);
      } else {
        const obj3 = { channel };
        tmp4 = hasOwnProperty(closure_10, obj3);
      }
      tmp = tmp4;
    }
    return tmp;
  }, items);
  items1 = [closure_5(closure_8, { author, avatarSource }), memo];
  return closure_6(View, obj);
});
const result = size.fileFinishedImporting("modules/search/native/components/list/SearchListCard.tsx");

export const SearchListContentAuthor = tmp4;
export const SearchListGuildChannel = tmp5;
export const SearchListCardContainer = tmp6;
export const SearchListCardThumbnail = tmp7;
export const SearchListCardContent = tmp8;
export const SearchListCardFooter = tmp9;