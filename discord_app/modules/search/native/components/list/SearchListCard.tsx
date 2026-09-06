// discord_app/modules/search/native/components/list/SearchListCard.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import UserUtilsDefault from "../../../../../utils/UserUtils.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../../../channel/useChannelName.tsx";
import utils_ChannelUtils from "../../../../../utils/native/ChannelUtils.tsx";
import ForumIcon from "../../../../../design/components/Icon/native/redesign/generated/ForumIcon.tsx";
import Card from "../../../../../design/components/Card/native/Card.native.tsx";
import GroupDMAvatarDefault from "../../../../group_dm/native/GroupDMAvatar.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
class SearchListContentAuthor {
  constructor(arg0) {
    author = global.author;
    tmp = closure_7();
    obj = { style: tmp.author, children: null };
    obj = {
      source: global.avatarSource,
      size: closure_0(closure_2[5]).AvatarSizes.SIZE_16,
      style: tmp.avatar,
      avatarDecoration: author.avatarDecoration,
    };
    items = [,];
    items[0] = jsx(closure_0(closure_2[5]).Avatar, obj);
    obj1 = {
      style: tmp.authorName,
      variant: "text-xs/medium",
      color: "interactive-text-default",
      lineClamp: 1,
      children: null,
    };
    obj4 = closure_1(closure_2[7]);
    obj1.children = obj4.getName(author);
    items[1] = jsx(closure_0(closure_2[6]).Text, obj1);
    obj.children = items;
    return jsxs(View, obj);
  }
}
function SearchListPrivateChannel(channel) {
  channel = channel.channel;
  const tmp = closure_7();
  let obj = { style: null, children: null };
  if (channel.isGroupDM()) {
    obj.style = tmp.channel;
    obj = { style: tmp.gdmIcon, children: null };
    obj = { channel, size: native.AvatarSizes.SIZE_16 };
    obj.children = hasOwnProperty(GroupDMAvatarDefault, obj);
    const items = [hasOwnProperty(tmp6, obj)];
    const obj1 = {
      style: tmp.channelName,
      variant: "text-xs/medium",
      color: "interactive-text-default",
      lineClamp: 1,
      children: tmp4,
    };
    items[1] = hasOwnProperty(Text_Text.Text, obj1);
    obj.children = items;
    let tmp5Result = tmp5(tmp6, obj);
    const tmp2Result = GroupDMAvatarDefault;
  } else {
    obj.style = tmp.privateChannelIcon;
    const obj2 = { style: tmp.icon, size: "xs", color: "interactive-text-default" };
    const items1 = [hasOwnProperty(ForumIcon.ForumIcon, obj2)];
    const obj3 = { variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: null };
    const intl = util.intl;
    obj3.children = intl.string(util.t.ACgJhM);
    items1[1] = hasOwnProperty(Text_Text.Text, obj3);
    obj.children = items1;
    tmp5Result = tmp5(tmp6, obj);
  }
  return tmp5Result;
}
class SearchListGuildChannel {
  constructor(arg0) {
    channel = global.channel;
    tmp = closure_7();
    tmp2 = closure_1(closure_2[8])(channel);
    obj = closure_0(closure_2[12]);
    obj = { style: tmp.channel, children: null };
    channelIcon = obj.getChannelIcon(channel, { ignoreTraits: true });
    obj1 = {
      size: closure_0(closure_2[5]).Icon.Sizes.REFRESH_SMALL_16,
      source: channelIcon,
      color: tmp.channelIcon.color,
    };
    items = [,];
    items[0] = jsx(closure_0(closure_2[5]).Icon, obj1);
    obj2 = {
      style: tmp.channelName,
      variant: "text-xs/medium",
      color: "interactive-text-default",
      lineClamp: 1,
      children: tmp2,
    };
    items[1] = jsx(closure_0(closure_2[6]).Text, obj2);
    obj.children = items;
    return jsxs(View, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = {
  channelName: { flexShrink: 1, marginStart: 4 },
  channelIcon: null,
  avatar: null,
  channel: null,
  author: null,
  authorName: null,
  container: null,
  content: null,
  footer: null,
  thumbnail: null,
  privateChannelIcon: null,
  icon: null,
  gdmIcon: null,
};
createStyles = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.channelIcon = createStyles;
createStyles.avatar = { marginRight: 2 };
createStyles.channel = { flexDirection: "row", alignItems: "center" };
createStyles.author = { flexDirection: "row", alignItems: "center" };
createStyles.authorName = { flexShrink: 1, marginStart: 2 };
createStyles.container = {
  flex: 1,
  padding: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  overflow: "hidden",
};
createStyles.content = { paddingTop: 12, paddingHorizontal: 12, paddingBottom: 4 };
createStyles.footer = { flexDirection: "column", paddingTop: 4, paddingHorizontal: 12, paddingBottom: 12, gap: 4 };
let obj1 = { flex: 1, padding: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
createStyles.thumbnail = {
  flex: 1,
  overflow: "hidden",
  borderTopRightRadius: nativeDefault.radii.lg,
  borderTopLeftRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
createStyles.privateChannelIcon = { flexDirection: "row", alignItems: "center" };
createStyles.icon = { marginRight: 4 };
createStyles.gdmIcon = { width: 18 };
const React5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/SearchListCard.tsx");

export { SearchListContentAuthor };
export { SearchListGuildChannel };
export const SearchListCardContainer = function SearchListCardContainer(arg0) {
  ({ children, onPress, containerStyle } = arg0);
  const obj = { shadow: "low", border: "subtle", onPress, style: null, children };
  const items = [closure_7().container, containerStyle];
  obj.style = items;
  return hasOwnProperty(Card.Card, obj);
};
export const SearchListCardThumbnail = function SearchListCardThumbnail(children) {
  return hasOwnProperty(View, { style: closure_7().thumbnail, children: children.thumbnail });
};
export const SearchListCardContent = function SearchListCardContent(arg0) {
  ({ label, subLabel } = arg0);
  let obj = { style: closure_7().content, children: null };
  let tmp3 = label;
  if (typeof label === "string") {
    obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: label };
    tmp3 = hasOwnProperty(Text_Text.Text, obj);
  }
  const items = [tmp3];
  let tmp4 = subLabel;
  if (typeof subLabel === "string") {
    obj = { variant: "text-sm/normal", color: "text-default", lineClamp: 1, children: subLabel };
    tmp4 = hasOwnProperty(Text_Text.Text, obj);
  }
  items[1] = tmp4;
  obj.children = items;
  return timestampProducer(View, obj);
};
export const SearchListCardFooter = function SearchListCardFooter(channel) {
  channel = channel.channel;
  ({ author, avatarSource } = channel);
  const items = [channel];
  let obj = { style: closure_7().footer, children: null };
  const memo = noop.useMemo(() => {
    let obj = channel;
    if (null == channel) {
      return null;
    } else if (null == obj.getGuildId()) {
      obj = { channel: null };
      obj.channel = obj;
      let tmp3 = hasOwnProperty(SearchListPrivateChannel, obj);
    } else {
      obj = { channel: null };
      obj.channel = obj;
      tmp3 = hasOwnProperty(SearchListGuildChannel, obj);
    }
  }, items);
  const items1 = [closure_5(SearchListContentAuthor, { author, avatarSource }), memo];
  obj.children = items1;
  return closure_6(View, obj);
};
