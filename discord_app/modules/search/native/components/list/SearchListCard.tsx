// === Module 15594: SearchListContentAuthor ===

// Module 15594 (SearchListContentAuthor)
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
class SearchListContentAuthor {
  constructor(arg0) {
    author = global.author;
    tmp = jsxs();
    obj = { style: tmp.author, children: null };
    obj = { source: global.avatarSource, size: null, style: null, avatarDecoration: null };
    obj[1] = require("Button").AvatarSizes.SIZE_16;
    obj[2] = tmp.avatar;
    obj[3] = author.avatarDecoration;
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
  const tmp = createCacheKey();
  let obj = { style: null, children: null };
  if (channel.isGroupDM()) {
    obj[0] = tmp.channel;
    obj = { style: null, children: null };
    obj[0] = tmp.gdmIcon;
    obj = { channel: null, size: null };
    obj[0] = channel;
    obj[1] = require(1297) /* Button */.AvatarSizes.SIZE_16;
    obj[1] = callback(importDefault(9274), obj);
    const items = [callback(tmp6, obj), ];
    const obj1 = { style: null, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: null };
    obj1[0] = tmp.channelName;
    obj1[4] = tmp4;
    items[1] = callback(require(4251) /* Text */.Text, obj1);
    obj[1] = items;
    let tmp5Result = tmp5(tmp6, obj);
    const tmp2Result = importDefault(9274);
  } else {
    obj[0] = tmp.privateChannelIcon;
    const obj2 = { style: null, size: "xs", color: "interactive-text-default" };
    obj2[0] = tmp.icon;
    const items1 = [callback(require(4768) /* ForumIcon */.ForumIcon, obj2), ];
    const obj3 = { variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj3[3] = intl.string(require(1236) /* getSystemLocale */.t.ACgJhM);
    items1[1] = callback(require(4251) /* Text */.Text, obj3);
    obj[1] = items1;
    tmp5Result = tmp5(tmp6, obj);
  }
  return tmp5Result;
}
class SearchListGuildChannel {
  constructor(arg0) {
    channel = global.channel;
    tmp = jsxs();
    tmp2 = require("computeChannelName")(channel);
    obj = require("getChannelIcon");
    obj = { style: tmp.channel, children: null };
    channelIcon = obj.getChannelIcon(channel, { ignoreTraits: true });
    obj1 = { size: null, source: null, color: null };
    obj1[0] = require("Button").Icon.Sizes.REFRESH_SMALL_16;
    obj1[1] = channelIcon;
    obj1[2] = tmp.channelIcon.color;
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
createCacheKey = { color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginRight: 2 };
createCacheKey[3] = { flexDirection: "row", alignItems: "center" };
createCacheKey[4] = { flexDirection: "row", alignItems: "center" };
createCacheKey[5] = { flexShrink: 1, marginStart: 2 };
createCacheKey[6] = { flex: 1, padding: 0, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
createCacheKey[7] = { paddingTop: 12, paddingHorizontal: 12, paddingBottom: 4 };
createCacheKey[8] = { flexDirection: "column", paddingTop: 4, paddingHorizontal: 12, paddingBottom: 12, gap: 4 };
let obj1 = { flex: 1, padding: 0, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
createCacheKey[9] = { flex: 1, overflow: "hidden", borderTopRightRadius: require("Themes").radii.lg, borderTopLeftRadius: require("Themes").radii.lg, backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, borderBottomWidth: 1, borderBottomColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[10] = { flexDirection: "row", alignItems: "center" };
createCacheKey[11] = { marginRight: 4 };
createCacheKey[12] = { width: 18 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { flex: 1, overflow: "hidden", borderTopRightRadius: require("Themes").radii.lg, borderTopLeftRadius: require("Themes").radii.lg, backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, borderBottomWidth: 1, borderBottomColor: require("Themes").colors.BORDER_SUBTLE };
const result = require("jsxProd").fileFinishedImporting("modules/search/native/components/list/SearchListCard.tsx");

export { SearchListContentAuthor };
export { SearchListGuildChannel };
export const SearchListCardContainer = function SearchListCardContainer(arg0) {
  let children;
  let containerStyle;
  let onPress;
  ({ children, onPress, containerStyle } = arg0);
  const style = [createCacheKey().container, containerStyle];
  return callback(require(5288) /* PressableCard */.Card, { shadow: "low", border: "subtle", onPress, style, children });
};
export const SearchListCardThumbnail = function SearchListCardThumbnail(children) {
  return callback(View, { style: createCacheKey().thumbnail, children: children.thumbnail });
};
export const SearchListCardContent = function SearchListCardContent(arg0) {
  let label;
  let subLabel;
  ({ label, subLabel } = arg0);
  let obj = { style: createCacheKey().content, children: null };
  let tmp3 = label;
  if (typeof label !== "ge") {
    obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: null };
    obj[3] = label;
    tmp3 = callback(require(4251) /* Text */.Text, obj);
  }
  const items = [tmp3, ];
  let tmp4 = subLabel;
  if (typeof subLabel !== "ge") {
    obj = { variant: "text-sm/normal", color: "text-default", lineClamp: 1, children: null };
    obj[3] = subLabel;
    tmp4 = callback(require(4251) /* Text */.Text, obj);
  }
  items[1] = tmp4;
  obj[1] = items;
  return closure_6(View, obj);
};
export const SearchListCardFooter = function SearchListCardFooter(channel) {
  let author;
  let avatarSource;
  channel = channel.channel;
  ({ author, avatarSource } = channel);
  const items = [channel];
  let obj = { style: createCacheKey().footer, children: null };
  const memo = React.useMemo(() => {
    let obj = channel;
    if (null == channel) {
      return null;
    } else if (null == obj.getGuildId()) {
      obj = { channel: null };
      obj[0] = obj;
      let tmp3 = outer1_5(outer1_9, obj);
    } else {
      obj = { channel: null };
      obj[0] = obj;
      tmp3 = outer1_5(outer1_10, obj);
    }
  }, items);
  const items1 = [callback(SearchListContentAuthor, { author, avatarSource }), memo];
  obj[1] = items1;
  return callback2(View, obj);
};