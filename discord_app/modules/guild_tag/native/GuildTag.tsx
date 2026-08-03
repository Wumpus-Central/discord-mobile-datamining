import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import mergeGuildAvatar from "mergeGuildAvatar";
import { GuildTagBadgeSize } from "items";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import set from "set";
import set from "set";
import set from "mergeGuildAvatar";

let c10;
let c4;
let c5;
let c9;
let metroImportAll;
const require = arg1;
let c3 = importAllResult;
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = jsxProd);
let obj = { container: null, tag: null };
obj = { flexDirection: "row", alignItems: "center", backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG, borderRadius: 4, paddingHorizontal: 4, paddingVertical: 1, columnGap: 2 };
obj[0] = obj;
let num = 16;
if (set.isAndroid()) {
  num = 14;
}
createCacheKey = { lineHeight: num, textAlignVertical: null, overflow: "hidden" };
let str;
if (set.isAndroid()) {
  str = "center";
}
createCacheKey[1] = str;
obj[1] = createCacheKey;
let closure_11 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  let size;
  let source;
  ({ source, size } = arg0);
  if (size === undefined) {
    size = GuildTagBadgeSize.SIZE_12;
  }
  let tmp2 = null;
  if (null != source) {
    let obj = { source: null, alt: null, style: null };
    obj[0] = source;
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl.string(require(1236) /* getSystemLocale */.t.HHYPgJ);
    obj = { width: null, height: null };
    obj[0] = size;
    obj[1] = size;
    obj[2] = obj;
    tmp2 = callback(closure_4, obj);
  }
  return tmp2;
});
const memoResult1 = importAllResult.memo((textVariant) => {
  let badgeSize;
  let closure_4;
  let containerStyles;
  let disabled;
  let importDefault;
  let onPress;
  let require;
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
  let c6;
  function renderContent() {
    let tmp4 = closure_1;
    if (null != closure_1) {
      tmp4 = tmp3;
      if (typeof tmp3 !== "__FORMATJS_LISTFORMAT_DATA__") {
        let obj = { source: null, size: null };
        obj = { uri: null };
        obj[0] = tmp3;
        obj[0] = obj;
        obj[1] = badgeSize;
        tmp4 = outer1_8(outer1_12, obj);
      }
    }
    obj = { children: null };
    const items = [tmp4, ];
    const items1 = [_undefined.tag, closure_4];
    items[1] = outer1_8(outer1_0(str[9]).Text, { variant: str, color: str2, lineClamp: 1, ellipsizeMode: "tail", style: items1, children: closure_0 });
    obj[0] = items;
    return outer1_10(outer1_9, obj);
  }
  const tmp2 = callback2();
  c6 = tmp2;
  if (null != onPress) {
    let obj = { onPress: null, style: null, disabled: null, accessibilityRole: "button", accessibilityState: null, children: null };
    obj[0] = onPress;
    let items = [tmp2.container, containerStyles];
    obj[1] = items;
    obj[2] = disabled;
    obj = { disabled: null };
    obj[0] = disabled;
    obj[4] = obj;
    obj[5] = renderContent();
    let tmp5 = callback(require(str[10]).PressableHighlight, obj);
  } else {
    obj = { style: null, children: null };
    let items1 = [tmp2.container, containerStyles];
    obj[0] = items1;
    obj[1] = renderContent();
    tmp5 = callback(badgeSize, obj);
  }
  return tmp5;
});
const result = set.fileFinishedImporting("modules/guild_tag/native/GuildTag.tsx");

export default importAllResult.memo((primaryGuild) => {
  let guildId;
  let tag;
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
  const merged = Object.assign(primaryGuild, Object.create(null));
  guildId = undefined;
  let obj = primaryGuild(guildId[11]);
  const items = [mergeGuildAvatar];
  const items1 = [userId, primaryGuild];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const user = outer1_6.getUser(userId);
    let primaryGuild;
    if (user != null) {
      primaryGuild = user.primaryGuild;
    }
    let obj = primaryGuild(guildId[12]);
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
      obj = { guildTag: null, guildBadge: null, badgeSize: null };
      obj[0] = tag;
      obj[1] = primaryGuild(guildId[12]).getGuildTagBadgeUrl(guildId, stateFromStoresObject.badge, SIZE_12);
      obj[2] = SIZE_12;
      const merged1 = Object.assign(merged);
      let tmp13;
      if (!flag) {
        tmp13 = tmp6;
      }
      obj.onPress = tmp13;
      tmp8Result = closure_8(memoResult1, obj);
      const tmp3Result = primaryGuild(guildId[12]);
      const tmp8 = closure_8;
      const tmp9 = memoResult1;
    }
  }
  return tmp8Result;
});
export const GuildTagBadge = memoResult;
export const BaseGuildTagChiplet = memoResult1;