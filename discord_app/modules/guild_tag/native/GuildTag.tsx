// === Module 10019: GuildTag ===

// Module 10019 (GuildTag)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import Text_Text from "Text/Text" /* 4753 */;
import GuildTagUtils from "GuildTagUtils" /* 8438 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const GuildTagBadgeSize = fn(8206).GuildTagBadgeSize;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4757);
let obj = { container: { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: 4, paddingHorizontal: 4, paddingVertical: 1, columnGap: 2 }, tag: null };
let PlatformUtils = fn(1364);
let num = 16;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
let obj4 = { lineHeight: num, textAlignVertical: null, overflow: "hidden" };
PlatformUtils = fn(1364);
let str;
if (PlatformUtils.isAndroid()) {
  str = "center";
}
obj4.textAlignVertical = str;
obj.tag = obj4;
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
    const size1 = { width: size, height: size };
    obj.style = size1;
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
      tmp4 = importDefault;
      if (typeof importDefault === "string") {
        const obj2 = { source: null, size: null };
        const obj3 = { uri: importDefault };
        obj2.source = obj3;
        obj2.size = badgeSize;
        tmp4 = React6(memoResult, obj2);
      }
    }
    const obj = { children: null };
    const items = [tmp4, ];
    const obj4 = { variant: str, color: str2, lineClamp: 1, ellipsizeMode: "tail", style: null, children };
    const items1 = [tag.tag, closure_1_4];
    obj4.style = items1;
    items[1] = React6(Text_Text.Text, obj4);
    obj.children = items;
    return closure_2_10(React7, obj);
  }
  const tmp2 = closure_11();
  const tag = tmp2;
  if (null != onPress) {
    let obj2 = { onPress, style: null, disabled: null, accessibilityRole: "button", accessibilityState: null, children: null };
    let items = [tmp2.container, containerStyles];
    obj2.style = items;
    obj2.disabled = disabled;
    let obj3 = { disabled };
    obj2.accessibilityState = obj3;
    obj2.children = renderContent();
    let tmp5 = closure_8(require("Pressables").PressableHighlight, obj2);
  } else {
    let obj = { style: null, children: null };
    let items1 = [tmp2.container, containerStyles];
    obj.style = items1;
    obj.children = renderContent();
    tmp5 = closure_8(badgeSize, obj);
  }
  return tmp5;
});
let obj3 = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: 4, paddingHorizontal: 4, paddingVertical: 1, columnGap: 2 };
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
  const items = [UserStore];
  const items1 = [userId, primaryGuild];
  const stateFromStoresObject = primaryGuild(guildId[11]).useStateFromStoresObject(items, () => {
    const user = UserStore.getUser(userId);
    primaryGuild = undefined;
    if (user != null) {
      primaryGuild = user.primaryGuild;
    }
    const userPrimaryGuild = GuildTagUtils.getUserPrimaryGuild(primaryGuild);
    return { tag: userPrimaryGuild.tag, badge: userPrimaryGuild.badge, guildId: userPrimaryGuild.guildId };
  }, items1);
  ({ tag, guildId } = stateFromStoresObject);
  [][0] = guildId;
  let tmp8Result = null;
  if (null != guildId) {
    tmp8Result = null;
    if (null != tag) {
      let obj2 = { guildTag: tag, guildBadge: primaryGuild(guildId[12]).getGuildTagBadgeUrl(guildId, stateFromStoresObject.badge, SIZE_12), badgeSize: SIZE_12 };
      const merged1 = Object.assign(merged);
      let tmp13;
      if (!flag) {
        tmp13 = tmp6;
      }
      obj2.onPress = tmp13;
      tmp8Result = closure_8(memoResult1, obj2);
      const tmp3Result = primaryGuild(guildId[12]);
    }
  }
  return tmp8Result;
});
export const GuildTagBadge = memoResult;
export const BaseGuildTagChiplet = memoResult1;