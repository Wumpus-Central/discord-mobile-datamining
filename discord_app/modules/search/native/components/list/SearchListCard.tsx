// discord_app/modules/search/native/components/list/SearchListCard.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import UserUtilsDefault from "../../../../../utils/UserUtils.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../../../channel/useChannelName.tsx";
import Card from "../../../../../design/components/Card/native/Card.native.tsx";
import utils_ChannelUtils from "../../../../../utils/native/ChannelUtils.tsx";
import ForumIcon from "../../../../../design/components/Icon/native/redesign/generated/ForumIcon.tsx";
import GroupDMAvatarDefault from "../../../../group_dm/native/GroupDMAvatar.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  channelName: { flexShrink: 1, marginStart: 4 },
  channelIcon: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT },
  avatar: { marginRight: 2 },
  channel: { flexDirection: "row", alignItems: "center" },
  author: { flexDirection: "row", alignItems: "center" },
  authorName: { flexShrink: 1, marginStart: 2 },
  container: null,
  content: null,
  footer: null,
  thumbnail: null,
  privateChannelIcon: null,
  icon: null,
  gdmIcon: null,
};
let obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.container = { flex: 1, padding: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
obj2.content = { paddingTop: 12, paddingHorizontal: 12, paddingBottom: 4 };
obj2.footer = { flexDirection: "column", paddingTop: 4, paddingHorizontal: 12, paddingBottom: 12, gap: 4 };
let obj4 = { flex: 1, padding: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
obj2.thumbnail = {
  flex: 1,
  overflow: "hidden",
  borderTopRightRadius: nativeDefault.radii.lg,
  borderTopLeftRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.privateChannelIcon = { flexDirection: "row", alignItems: "center" };
obj2.icon = { marginRight: 4 };
obj2.gdmIcon = { width: 18 };
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SearchListContentAuthor(arg0) {
      const cResult = c.c(13);
      ({ author, avatarSource } = arg0);
      const tmp4 = closure_7();
      if (cResult[0] === author.avatarDecoration) {
        if (cResult[1] === avatarSource) {
          if (cResult[2] === tmp4.avatar) {
            let tmp6 = cResult[3];
          }
          if (cResult[4] !== author) {
            const name = UserUtilsDefault.getName(author);
            cResult[4] = author;
            cResult[5] = name;
            let tmp8 = name;
          } else {
            tmp8 = cResult[5];
          }
          if (cResult[6] === tmp4.authorName) {
            if (cResult[7] === tmp8) {
              let tmp11 = cResult[8];
            }
            if (cResult[9] === tmp4.author) {
              if (cResult[10] === tmp6) {
                if (cResult[11] === tmp11) {
                  let tmp14 = cResult[12];
                }
                return tmp14;
              }
            }
            const obj2 = { style: tmp5, children: null };
            const items = [tmp6, tmp11];
            obj2.children = items;
            const tmp17 = timestampProducer(View, obj2);
            cResult[9] = tmp4.author;
            cResult[10] = tmp6;
            cResult[11] = tmp11;
            cResult[12] = tmp17;
            tmp14 = tmp17;
          }
          const obj4 = {
            style: tmp4.authorName,
            variant: "text-xs/medium",
            color: "interactive-text-default",
            lineClamp: 1,
            children: tmp8,
          };
          const tmp13 = hasOwnProperty(Text_Text.Text, obj4);
          cResult[6] = tmp4.authorName;
          cResult[7] = tmp8;
          cResult[8] = tmp13;
          tmp11 = tmp13;
        }
      }
      const tmp7 = hasOwnProperty(native.Avatar, {
        source: avatarSource,
        size: native.AvatarSizes.SIZE_16,
        style: tmp4.avatar,
        avatarDecoration: author.avatarDecoration,
      });
      cResult[0] = author.avatarDecoration;
      cResult[1] = avatarSource;
      cResult[2] = tmp4.avatar;
      cResult[3] = tmp7;
      tmp6 = tmp7;
      const obj5 = {
        source: avatarSource,
        size: native.AvatarSizes.SIZE_16,
        style: tmp4.avatar,
        avatarDecoration: author.avatarDecoration,
      };
    }
  : function SearchListContentAuthor(author) {
      author = author.author;
      const tmp = closure_7();
      const obj = { style: tmp.author, children: null };
      const items = [
        hasOwnProperty(native.Avatar, {
          source: author.avatarSource,
          size: native.AvatarSizes.SIZE_16,
          style: tmp.avatar,
          avatarDecoration: author.avatarDecoration,
        }),
      ];
      const obj3 = {
        style: tmp.authorName,
        variant: "text-xs/medium",
        color: "interactive-text-default",
        lineClamp: 1,
        children: null,
      };
      const obj2 = {
        source: author.avatarSource,
        size: native.AvatarSizes.SIZE_16,
        style: tmp.avatar,
        avatarDecoration: author.avatarDecoration,
      };
      obj3.children = UserUtilsDefault.getName(author);
      items[1] = hasOwnProperty(Text_Text.Text, obj3);
      obj.children = items;
      return timestampProducer(View, obj);
    };
let closure_8 = tmp3;
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SearchListPrivateChannel(channel) {
      const cResult = c.c(18);
      channel = channel.channel;
      let channel2 = closure_7();
      const tmp5 = useChannelNameDefault(channel);
      if (channel.isGroupDM()) {
        if (cResult[0] !== channel) {
          const obj2 = { channel, size: native.AvatarSizes.SIZE_16 };
          const tmp20 = hasOwnProperty(GroupDMAvatarDefault, obj2);
          cResult[0] = channel;
          cResult[1] = tmp20;
          let tmp17 = tmp20;
          const tmp4Result = GroupDMAvatarDefault;
        } else {
          tmp17 = cResult[1];
        }
        if (cResult[2] === channel2.gdmIcon) {
          if (cResult[3] === tmp17) {
            let tmp21 = cResult[4];
          }
          if (cResult[5] === tmp5) {
            if (cResult[6] === channel2.channelName) {
              let tmp25 = cResult[7];
            }
            if (cResult[8] === channel2.channel) {
              if (cResult[9] === tmp21) {
              }
            }
            const obj3 = { style: channel2.channel, children: null };
            const items = [tmp21, tmp25];
            obj3.children = items;
            const tmp31 = timestampProducer(View, obj3);
            channel2 = channel2.channel;
            cResult[8] = channel2;
            cResult[9] = tmp21;
            cResult[10] = tmp25;
            cResult[11] = tmp31;
          }
          const obj4 = {
            style: channel2.channelName,
            variant: "text-xs/medium",
            color: "interactive-text-default",
            lineClamp: 1,
            children: tmp5,
          };
          const tmp27 = hasOwnProperty(Text_Text.Text, obj4);
          cResult[5] = tmp5;
          cResult[6] = channel2.channelName;
          cResult[7] = tmp27;
          tmp25 = tmp27;
        }
        const obj5 = { style: channel2.gdmIcon, children: tmp17 };
        const tmp24 = hasOwnProperty(View, obj5);
        cResult[2] = channel2.gdmIcon;
        cResult[3] = tmp17;
        cResult[4] = tmp24;
        tmp21 = tmp24;
      } else {
        if (cResult[12] !== channel2.icon) {
          const obj6 = { style: channel2.icon, size: "xs", color: "interactive-text-default" };
          const tmp8 = hasOwnProperty(ForumIcon.ForumIcon, obj6);
          cResult[12] = channel2.icon;
          cResult[13] = tmp8;
          let tmp6 = tmp8;
        } else {
          tmp6 = cResult[13];
        }
        const _Symbol = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const obj7 = { variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: null };
          const intl = util.intl;
          obj7.children = intl.string(util.t.ACgJhM);
          const tmp12 = hasOwnProperty(Text_Text.Text, obj7);
          cResult[14] = tmp12;
          let tmp10 = tmp12;
        } else {
          tmp10 = cResult[14];
        }
        if (cResult[15] === channel2.privateChannelIcon) {
          if (cResult[16] === tmp6) {
            let tmp13 = cResult[17];
          }
          return tmp13;
        }
        const obj8 = { style: channel2.privateChannelIcon, children: null };
        const items1 = [tmp6, tmp10];
        obj8.children = items1;
        const tmp16 = timestampProducer(View, obj8);
        cResult[15] = channel2.privateChannelIcon;
        cResult[16] = tmp6;
        cResult[17] = tmp16;
        tmp13 = tmp16;
      }
    }
  : function SearchListPrivateChannel(channel) {
      channel = channel.channel;
      const tmp = closure_7();
      const obj = { style: null, children: null };
      if (channel.isGroupDM()) {
        obj.style = tmp.channel;
        const obj2 = { style: tmp.gdmIcon, children: null };
        const obj3 = { channel, size: native.AvatarSizes.SIZE_16 };
        obj2.children = hasOwnProperty(GroupDMAvatarDefault, obj3);
        const items = [hasOwnProperty(View, obj2)];
        const obj4 = {
          style: tmp.channelName,
          variant: "text-xs/medium",
          color: "interactive-text-default",
          lineClamp: 1,
          children: tmp4,
        };
        items[1] = hasOwnProperty(Text_Text.Text, obj4);
        obj.children = items;
        let tmp5Result = timestampProducer(View, obj);
        const tmp2Result = GroupDMAvatarDefault;
      } else {
        obj.style = tmp.privateChannelIcon;
        const obj5 = { style: tmp.icon, size: "xs", color: "interactive-text-default" };
        const items1 = [hasOwnProperty(ForumIcon.ForumIcon, obj5)];
        const obj6 = { variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: null };
        const intl = util.intl;
        obj6.children = intl.string(util.t.ACgJhM);
        items1[1] = hasOwnProperty(Text_Text.Text, obj6);
        obj.children = items1;
        tmp5Result = timestampProducer(View, obj);
      }
      return tmp5Result;
    };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SearchListGuildChannel(channel) {
      const cResult = c.c(12);
      channel = channel.channel;
      const tmp4 = closure_7();
      const tmp5 = useChannelNameDefault(channel);
      if (cResult[0] !== channel) {
        const channelIcon = utils_ChannelUtils.getChannelIcon(channel, { ignoreTraits: true });
        cResult[0] = channel;
        cResult[1] = channelIcon;
        let tmp6 = channelIcon;
        const tmpResult = utils_ChannelUtils;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === tmp6) {
        if (cResult[3] === tmp4.channelIcon.color) {
          let tmp8 = cResult[4];
        }
        if (cResult[5] === tmp5) {
          if (cResult[6] === tmp4.channelName) {
            let tmp10 = cResult[7];
          }
          if (cResult[8] === tmp4.channel) {
            if (cResult[9] === tmp8) {
              if (cResult[10] === tmp10) {
                let tmp13 = cResult[11];
              }
              return tmp13;
            }
          }
          const obj2 = { style: tmp4.channel, children: null };
          const items = [tmp8, tmp10];
          obj2.children = items;
          const tmp16 = timestampProducer(View, obj2);
          cResult[8] = tmp4.channel;
          cResult[9] = tmp8;
          cResult[10] = tmp10;
          cResult[11] = tmp16;
          tmp13 = tmp16;
        }
        const obj3 = {
          style: tmp4.channelName,
          variant: "text-xs/medium",
          color: "interactive-text-default",
          lineClamp: 1,
          children: tmp5,
        };
        const tmp12 = hasOwnProperty(Text_Text.Text, obj3);
        cResult[5] = tmp5;
        cResult[6] = tmp4.channelName;
        cResult[7] = tmp12;
        tmp10 = tmp12;
      }
      const tmp9 = hasOwnProperty(native.Icon, {
        size: native.Icon.Sizes.REFRESH_SMALL_16,
        source: tmp6,
        color: tmp4.channelIcon.color,
      });
      cResult[2] = tmp6;
      cResult[3] = tmp4.channelIcon.color;
      cResult[4] = tmp9;
      tmp8 = tmp9;
      const obj4 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: tmp6, color: tmp4.channelIcon.color };
    }
  : function SearchListGuildChannel(channel) {
      channel = channel.channel;
      const tmp = closure_7();
      const tmp2 = useChannelNameDefault(channel);
      const obj2 = { style: tmp.channel, children: null };
      const channelIcon = utils_ChannelUtils.getChannelIcon(channel, { ignoreTraits: true });
      const items = [
        hasOwnProperty(native.Icon, {
          size: native.Icon.Sizes.REFRESH_SMALL_16,
          source: channelIcon,
          color: tmp.channelIcon.color,
        }),
        hasOwnProperty(Text_Text.Text, {
          style: tmp.channelName,
          variant: "text-xs/medium",
          color: "interactive-text-default",
          lineClamp: 1,
          children: tmp2,
        }),
      ];
      obj2.children = items;
      return timestampProducer(View, obj2);
    };
let closure_10 = tmp4;
fn(558);
let obj5 = {
  flex: 1,
  overflow: "hidden",
  borderTopRightRadius: nativeDefault.radii.lg,
  borderTopLeftRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SearchListCardContainer(arg0) {
      const cResult = c.c(7);
      ({ children, onPress, containerStyle } = arg0);
      const tmp4 = closure_7();
      if (cResult[0] === containerStyle) {
        if (cResult[1] === tmp4.container) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === children) {
          if (cResult[4] === onPress) {
            if (cResult[5] === tmp5) {
              let tmp6 = cResult[6];
            }
            return tmp6;
          }
        }
        const obj2 = { shadow: "low", border: "subtle", onPress, style: tmp5, children };
        const tmp8 = hasOwnProperty(Card.Card, obj2);
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
    }
  : function SearchListCardContainer(arg0) {
      ({ children, onPress, containerStyle } = arg0);
      const obj = { shadow: "low", border: "subtle", onPress, style: null, children };
      const items = [closure_7().container, containerStyle];
      obj.style = items;
      return hasOwnProperty(Card.Card, obj);
    };
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SearchListCardThumbnail(thumbnail) {
      const cResult = c.c(3);
      thumbnail = thumbnail.thumbnail;
      const tmp2 = closure_7();
      if (cResult[0] === tmp2.thumbnail) {
        if (cResult[1] === thumbnail) {
          let tmp3 = cResult[2];
        }
        return tmp3;
      }
      const tmp4 = hasOwnProperty(View, { style: tmp2.thumbnail, children: thumbnail });
      cResult[0] = tmp2.thumbnail;
      cResult[1] = thumbnail;
      cResult[2] = tmp4;
      tmp3 = tmp4;
    }
  : function SearchListCardThumbnail(children) {
      return hasOwnProperty(View, { style: closure_7().thumbnail, children: children.thumbnail });
    };
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SearchListCardContent(arg0) {
      const cResult = c.c(8);
      ({ label, subLabel } = arg0);
      const tmp4 = closure_7();
      if (cResult[0] !== label) {
        let tmp6 = label;
        if (typeof label === "string") {
          const obj2 = {
            variant: "text-md/semibold",
            color: "mobile-text-heading-primary",
            lineClamp: 1,
            children: label,
          };
          tmp6 = hasOwnProperty(Text_Text.Text, obj2);
        }
        cResult[0] = label;
        cResult[1] = tmp6;
        let tmp5 = tmp6;
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
        let tmp7 = tmp8;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === tmp4.content) {
        if (cResult[5] === tmp5) {
          if (cResult[6] === tmp7) {
            let tmp9 = cResult[7];
          }
          return tmp9;
        }
      }
      const obj4 = { style: tmp4.content, children: null };
      const items = [tmp5, tmp7];
      obj4.children = items;
      const tmp10 = timestampProducer(View, obj4);
      cResult[4] = tmp4.content;
      cResult[5] = tmp5;
      cResult[6] = tmp7;
      cResult[7] = tmp10;
      tmp9 = tmp10;
    }
  : function SearchListCardContent(arg0) {
      ({ label, subLabel } = arg0);
      const obj = { style: closure_7().content, children: null };
      let tmp3 = label;
      if (typeof label === "string") {
        const obj2 = {
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          lineClamp: 1,
          children: label,
        };
        tmp3 = hasOwnProperty(Text_Text.Text, obj2);
      }
      const items = [tmp3];
      let tmp4 = subLabel;
      if (typeof subLabel === "string") {
        const obj3 = { variant: "text-sm/normal", color: "text-default", lineClamp: 1, children: subLabel };
        tmp4 = hasOwnProperty(Text_Text.Text, obj3);
      }
      items[1] = tmp4;
      obj.children = items;
      return timestampProducer(View, obj);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/SearchListCard.tsx");

export const SearchListContentAuthor = tmp3;
export const SearchListGuildChannel = tmp4;
export const SearchListCardContainer = tmp5;
export const SearchListCardThumbnail = tmp6;
export const SearchListCardContent = tmp7;
export const SearchListCardFooter = ReactCompilerGating.isReactCompilerEnabled()
  ? function SearchListCardFooter(arg0) {
      const cResult = c.c(11);
      ({ author, avatarSource, channel } = arg0);
      const tmp2 = closure_7();
      let tmp3 = null;
      if (null != channel) {
        if (null == channel.getGuildId()) {
          if (cResult[0] !== channel) {
            const obj2 = { channel };
            const tmp11 = hasOwnProperty(closure_9, obj2);
            cResult[0] = channel;
            cResult[1] = tmp11;
          }
        } else {
          if (cResult[2] !== channel) {
            const obj3 = { channel };
            const tmp7 = hasOwnProperty(closure_10, obj3);
            cResult[2] = channel;
            cResult[3] = tmp7;
            let tmp4 = tmp7;
          } else {
            tmp4 = cResult[3];
          }
          tmp3 = tmp4;
        }
      }
      if (cResult[4] === author) {
        if (cResult[5] === avatarSource) {
          let tmp13 = cResult[6];
        }
        if (cResult[7] === tmp3) {
          if (cResult[8] === tmp2.footer) {
            if (cResult[9] === tmp13) {
              let tmp15 = cResult[10];
            }
            return tmp15;
          }
        }
        const obj4 = { style: tmp2.footer, children: null };
        const items = [tmp13, tmp3];
        obj4.children = items;
        const tmp18 = timestampProducer(View, obj4);
        cResult[7] = tmp3;
        cResult[8] = tmp2.footer;
        cResult[9] = tmp13;
        cResult[10] = tmp18;
        tmp15 = tmp18;
      }
      const tmp14 = hasOwnProperty(closure_8, { author, avatarSource });
      cResult[4] = author;
      cResult[5] = avatarSource;
      cResult[6] = tmp14;
      tmp13 = tmp14;
    }
  : function SearchListCardFooter(channel) {
      channel = channel.channel;
      ({ author, avatarSource } = channel);
      const items = [channel];
      const obj = { style: closure_7().footer, children: null };
      const memo = noop.useMemo(() => {
        if (null == channel) {
          return null;
        } else if (null == channel.getGuildId()) {
          const obj2 = { channel };
          let tmp3 = hasOwnProperty(closure_9, obj2);
        } else {
          const obj3 = { channel };
          tmp3 = hasOwnProperty(closure_10, obj3);
        }
      }, items);
      const items1 = [closure_5(closure_8, { author, avatarSource }), memo];
      obj.children = items1;
      return closure_6(View, obj);
    };
