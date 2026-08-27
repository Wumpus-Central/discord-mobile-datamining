// === Module 16164: SearchListContentAuthor ===

// Module 16164 (SearchListContentAuthor)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import nameFromUserDefault from "nameFromUser" /* 4289 */;
import Text from "Text" /* 4441 */;
import computeChannelNameDefault from "computeChannelName" /* 4639 */;
import getChannelIcon from "getChannelIcon" /* 4933 */;
import ForumIcon from "ForumIcon" /* 4989 */;
import PressableCard from "PressableCard" /* 5553 */;
import FacepileGroupDMAvatarDefault from "FacepileGroupDMAvatar" /* 10568 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
class SearchListContentAuthor {
  constructor(arg0) {
    author = global.author;
    tmp = closure_7();
    obj = { style: tmp.author, children: null };
    obj = { source: global.avatarSource, size: require("Button").AvatarSizes.SIZE_16, style: tmp.avatar, avatarDecoration: author.avatarDecoration };
    items = [, ];
    items[0] = jsx(require("Button").Avatar, obj);
    obj1 = { style: tmp.authorName, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: null };
    obj4 = require("nameFromUser");
    obj1[4] = obj4.getName(author);
    items[1] = jsx(require("Text").Text, obj1);
    obj[1] = items;
    return jsxs(View, obj);
  }
}
function SearchListPrivateChannel(channel) {
  channel = channel.channel;
  const tmp = callback3();
  let obj = { style: null, children: null };
  if (channel.isGroupDM()) {
    obj[0] = tmp.channel;
    obj = { style: null, children: null };
    obj[0] = tmp.gdmIcon;
    obj = { channel: null, size: null };
    obj[0] = channel;
    obj[1] = Button.AvatarSizes.SIZE_16;
    obj[1] = callback(FacepileGroupDMAvatarDefault, obj);
    const items = [callback(tmp6, obj), ];
    obj1 = { style: null, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: null };
    obj1[0] = tmp.channelName;
    obj1[4] = tmp4;
    items[1] = callback(Text.Text, obj1);
    obj[1] = items;
    let tmp5Result = tmp5(tmp6, obj);
    const tmp2Result = FacepileGroupDMAvatarDefault;
  } else {
    obj[0] = tmp.privateChannelIcon;
    const obj2 = { style: null, size: "xs", color: "interactive-text-default" };
    obj2[0] = tmp.icon;
    const items1 = [callback(ForumIcon.ForumIcon, obj2), ];
    const obj3 = { variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: null };
    const intl = getSystemLocale.intl;
    obj3[3] = intl.string(getSystemLocale.t.ACgJhM);
    items1[1] = callback(Text.Text, obj3);
    obj[1] = items1;
    tmp5Result = tmp5(tmp6, obj);
  }
  return tmp5Result;
}
class SearchListGuildChannel {
  constructor(arg0) {
    channel = global.channel;
    tmp = closure_7();
    tmp2 = require("computeChannelName")(channel);
    obj = require("getChannelIcon");
    obj = { style: tmp.channel, children: null };
    channelIcon = obj.getChannelIcon(channel, { ignoreTraits: true });
    obj1 = { size: require("Button").Icon.Sizes.REFRESH_SMALL_16, source: channelIcon, color: tmp.channelIcon.color };
    items = [, ];
    items[0] = jsx(require("Button").Icon, obj1);
    obj2 = { style: tmp.channelName, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: tmp2 };
    items[1] = jsx(require("Text").Text, obj2);
    obj[1] = items;
    return jsxs(View, obj);
  }
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { channelName: { flexShrink: 1, marginStart: 4 }, channelIcon: null, avatar: null, channel: null, author: null, authorName: null, container: null, content: null, footer: null, thumbnail: null, privateChannelIcon: null, icon: null, gdmIcon: null };
createCacheKey = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginRight: 2 };
createCacheKey[3] = { flexDirection: "row", alignItems: "center" };
createCacheKey[4] = { flexDirection: "row", alignItems: "center" };
createCacheKey[5] = { flexShrink: 1, marginStart: 2 };
createCacheKey[6] = { flex: 1, padding: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
createCacheKey[7] = { paddingTop: 12, paddingHorizontal: 12, paddingBottom: 4 };
createCacheKey[8] = { flexDirection: "column", paddingTop: 4, paddingHorizontal: 12, paddingBottom: 12, gap: 4 };
let obj1 = { flex: 1, padding: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
createCacheKey[9] = { flex: 1, overflow: "hidden", borderTopRightRadius: ThemesDefault.radii.lg, borderTopLeftRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderBottomWidth: 1, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[10] = { flexDirection: "row", alignItems: "center" };
createCacheKey[11] = { marginRight: 4 };
createCacheKey[12] = { width: 18 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj2 = { flex: 1, overflow: "hidden", borderTopRightRadius: ThemesDefault.radii.lg, borderTopLeftRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderBottomWidth: 1, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE };
const result = require("set").fileFinishedImporting("modules/search/native/components/list/SearchListCard.tsx");

export { SearchListContentAuthor };
export { SearchListGuildChannel };
export const SearchListCardContainer = function SearchListCardContainer(arg0) {
  ({ children, onPress, containerStyle } = arg0);
  const style = [callback3().container, containerStyle];
  return callback(PressableCard.Card, { shadow: "low", border: "subtle", onPress, style, children });
};
export const SearchListCardThumbnail = function SearchListCardThumbnail(children) {
  return callback(View, { style: callback3().thumbnail, children: children.thumbnail });
};
export const SearchListCardContent = function SearchListCardContent(arg0) {
  ({ label, subLabel } = arg0);
  let obj = { style: callback3().content, children: null };
  let tmp3 = label;
  if (typeof label === "string") {
    obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: null };
    obj[3] = label;
    tmp3 = callback(Text.Text, obj);
  }
  const items = [tmp3, ];
  let tmp4 = subLabel;
  if (typeof subLabel === "string") {
    obj = { variant: "text-sm/normal", color: "text-default", lineClamp: 1, children: null };
    obj[3] = subLabel;
    tmp4 = callback(Text.Text, obj);
  }
  items[1] = tmp4;
  obj[1] = items;
  return closure_6(View, obj);
};
export const SearchListCardFooter = function SearchListCardFooter(channel) {
  channel = channel.channel;
  ({ author, avatarSource } = channel);
  const items = [channel];
  let obj = { style: callback3().footer, children: null };
  const memo = React.useMemo(() => {
    let obj = channel;
    if (null == channel) {
      return null;
    } else if (null == obj.getGuildId()) {
      obj = { channel: null };
      obj[0] = obj;
      let tmp3 = closure_1_5(closure_1_9, obj);
    } else {
      obj = { channel: null };
      obj[0] = obj;
      tmp3 = closure_1_5(closure_1_10, obj);
    }
  }, items);
  const items1 = [callback(SearchListContentAuthor, { author, avatarSource }), memo];
  obj[1] = items1;
  return callback2(View, obj);
};