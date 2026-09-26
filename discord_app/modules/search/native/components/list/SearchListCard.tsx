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
    obj1 = {
      source: global.avatarSource,
      size: closure_0(closure_2[5]).AvatarSizes.SIZE_16,
      style: tmp.avatar,
      avatarDecoration: author.avatarDecoration,
    };
    items = [,];
    items[0] = jsx(closure_0(closure_2[5]).Avatar, obj1);
    obj5 = {
      style: tmp.authorName,
      variant: "text-xs/medium",
      color: "interactive-text-default",
      lineClamp: 1,
      children: null,
    };
    obj4 = closure_1(closure_2[7]);
    obj5.children = obj4.getName(author);
    items[1] = jsx(closure_0(closure_2[6]).Text, obj5);
    obj.children = items;
    return jsxs(View, obj);
  }
}
function SearchListPrivateChannel(channel) {
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
}
class SearchListGuildChannel {
  constructor(arg0) {
    channel = global.channel;
    tmp = closure_7();
    tmp2 = closure_1(closure_2[8])(channel);
    obj = closure_0(closure_2[12]);
    obj1 = { style: tmp.channel, children: null };
    channelIcon = obj.getChannelIcon(channel, { ignoreTraits: true });
    obj5 = {
      size: closure_0(closure_2[5]).Icon.Sizes.REFRESH_SMALL_16,
      source: channelIcon,
      color: tmp.channelIcon.color,
    };
    items = [,];
    items[0] = jsx(closure_0(closure_2[5]).Icon, obj5);
    obj6 = {
      style: tmp.channelName,
      variant: "text-xs/medium",
      color: "interactive-text-default",
      lineClamp: 1,
      children: tmp2,
    };
    items[1] = jsx(closure_0(closure_2[6]).Text, obj6);
    obj1.children = items;
    return jsxs(View, obj1);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4836);
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
const React5 = createStyles.createStyles(obj2);
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
  const obj = { style: closure_7().content, children: null };
  let tmp3 = label;
  if (typeof label === "string") {
    const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: label };
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
export const SearchListCardFooter = function SearchListCardFooter(channel) {
  channel = channel.channel;
  ({ author, avatarSource } = channel);
  const items = [channel];
  const obj = { style: closure_7().footer, children: null };
  const memo = noop.useMemo(() => {
    if (null == channel) {
      return null;
    } else if (null == channel.getGuildId()) {
      const obj2 = { channel };
      let tmp3 = hasOwnProperty(SearchListPrivateChannel, obj2);
    } else {
      const obj3 = { channel };
      tmp3 = hasOwnProperty(SearchListGuildChannel, obj3);
    }
  }, items);
  const items1 = [closure_5(SearchListContentAuthor, { author, avatarSource }), memo];
  obj.children = items1;
  return closure_6(View, obj);
};
