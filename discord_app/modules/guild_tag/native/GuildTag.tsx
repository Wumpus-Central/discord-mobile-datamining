// === Module 9184: GuildTag ===

// Module 9184 (GuildTag)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import GuildTagUtils from "GuildTagUtils" /* 8165 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const GuildTagBadgeSize = fn(7944).GuildTagBadgeSize;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
let createStyles = fn(4560);
let obj = { container: null, tag: null };
obj = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: 4, paddingHorizontal: 4, paddingVertical: 1, columnGap: 2 };
obj.container = obj;
let PlatformUtils = fn(1115);
let num = 16;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
createStyles = { lineHeight: num, textAlignVertical: null, overflow: "hidden" };
PlatformUtils = fn(1115);
let str;
if (PlatformUtils.isAndroid()) {
  str = "center";
}
createStyles.textAlignVertical = str;
obj.tag = createStyles;
let closure_11 = createStyles.createStyles(obj);
const memoResult = noop.memo((arg0) => {
  ({ source, size } = arg0);
  if (size === undefined) {
    size = GuildTagBadgeSize.SIZE_12;
  }
  let tmp2 = null;
  if (null != source) {
    const obj = { source, alt: null, style: null };
    const intl = util.intl;
    obj.alt = intl.string(util.t.HHYPgJ);
    size = { width: null, height: null };
    size.width = size;
    size.height = size;
    obj.style = size;
    tmp2 = React6(React4, obj);
  }
  return tmp2;
});
const memoResult1 = noop.memo((textVariant) => {
  ({ containerStyles, guildTag: require, guildBadge: importDefault, onPress, disabled } = textVariant);
  if (disabled === undefined) {
    disabled = false;
  }
  let str = textVariant.textVariant;
  if (str === undefined) {
    str = "text-xs/semibold";
  }
  let str2 = textVariant.textColor;
  if (str2 === undefined) {
    str2 = "text-default";
  }
  ({ textStyle: closure_4, badgeSize } = textVariant);
  if (badgeSize === undefined) {
    badgeSize = GuildTagBadgeSize.SIZE_12;
  }
  function renderContent() {
    let tmp4 = importDefault;
    if (null != importDefault) {
      tmp4 = tmp3;
      if (typeof tmp3 === "string") {
        let obj = { source: null, size: null };
        obj = { uri: tmp3 };
        obj.source = obj;
        obj.size = badgeSize;
        tmp4 = React6(memoResult, obj);
      }
    }
    obj = { children: null };
    const items = [tmp4, ];
    const obj1 = { variant: str, color: str2, lineClamp: 1, ellipsizeMode: "tail", style: null, children };
    const items1 = [tag.tag, closure_1_4];
    obj1.style = items1;
    items[1] = React6(Text_Text.Text, obj1);
    obj.children = items;
    return closure_2_10(React7, obj);
  }
  const tmp2 = closure_11();
  const tag = tmp2;
  if (null != onPress) {
    let obj = { onPress, style: null, disabled: null, accessibilityRole: "button", accessibilityState: null, children: null };
    let items = [tmp2.container, containerStyles];
    obj.style = items;
    obj.disabled = disabled;
    obj = { disabled };
    obj.accessibilityState = obj;
    obj.children = renderContent();
    let tmp5 = closure_8(require("Pressables").PressableHighlight, obj);
  } else {
    obj = { style: null, children: null };
    let items1 = [tmp2.container, containerStyles];
    obj.style = items1;
    obj.children = renderContent();
    tmp5 = closure_8(badgeSize, obj);
  }
  return tmp5;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/GuildTag.tsx");

export default noop.memo((primaryGuild) => {
  primaryGuild = primaryGuild.primaryGuild;
  const userId = primaryGuild.userId;
  let flag = primaryGuild.disabledTooltip;
  if (flag === undefined) {
    flag = false;
  }
  let SIZE_12 = primaryGuild.badgeSize;
  if (SIZE_12 === undefined) {
    SIZE_12 = GuildTagBadgeSize.SIZE_12;
  }
  const merged = Object.assign(primaryGuild, Object.assign({ primaryGuild: 0, userId: 0, disabledTooltip: 0, badgeSize: 0 }));
  guildId = undefined;
  let obj = primaryGuild(guildId[11]);
  const items = [UserStore];
  const items1 = [userId, primaryGuild];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const user = UserStore.getUser(userId);
    primaryGuild = undefined;
    if (user != null) {
      primaryGuild = user.primaryGuild;
    }
    let obj = GuildTagUtils;
    const userPrimaryGuild = obj.getUserPrimaryGuild(primaryGuild);
    obj = { tag: userPrimaryGuild.tag, badge: userPrimaryGuild.badge, guildId: userPrimaryGuild.guildId };
    return obj;
  }, items1);
  ({ tag, guildId } = stateFromStoresObject);
  [][0] = guildId;
  let tmp8Result = null;
  if (null != guildId) {
    tmp8Result = null;
    if (null != tag) {
      obj = { guildTag: tag, guildBadge: primaryGuild(guildId[12]).getGuildTagBadgeUrl(guildId, stateFromStoresObject.badge, SIZE_12), badgeSize: SIZE_12 };
      const merged1 = Object.assign(merged);
      let tmp13;
      if (!flag) {
        tmp13 = tmp6;
      }
      obj.onPress = tmp13;
      tmp8Result = closure_8(memoResult1, obj);
      const tmp3Result = primaryGuild(guildId[12]);
    }
  }
  return tmp8Result;
});
export const GuildTagBadge = memoResult;
export const BaseGuildTagChiplet = memoResult1;