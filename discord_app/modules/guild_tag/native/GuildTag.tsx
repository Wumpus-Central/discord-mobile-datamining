// discord_app/modules/guild_tag/native/GuildTag.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01994_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import GuildTagUtils from "../GuildTagUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
let GuildTagBadgeSize = fn(8393).GuildTagBadgeSize;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5014);
let obj = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 1,
    columnGap: 2,
  },
  tag: null,
};
let PlatformUtils = fn(1375);
let num = 16;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
let obj4 = { lineHeight: num, textAlignVertical: null, overflow: "hidden" };
PlatformUtils = fn(1375);
let str;
if (PlatformUtils.isAndroid()) {
  str = "center";
}
obj4.textAlignVertical = str;
obj.tag = obj4;
let closure_10 = createStyles.createStyles(obj);
const memoResult = noop.memo(function GuildTagBadge(arg0) {
  ({ source, size } = arg0);
  if (size === undefined) {
    size = GuildTagBadgeSize.SIZE_12;
  }
  let tmp2 = null;
  if (null != source) {
    const obj = { source, accessibilityLabel: null, style: null };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t.HHYPgJ);
    const size1 = { width: size, height: size };
    obj.style = size1;
    tmp2 = React5(FastImageDefault, obj);
  }
  return tmp2;
});
const memoResult1 = noop.memo(function BaseGuildTagChiplet(textVariant) {
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
  ({ textStyle: View, badgeSize } = textVariant);
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
        tmp4 = React5(memoResult, obj2);
      }
    }
    const obj = { children: null };
    const items = [tmp4];
    const obj4 = { variant: str, color: str2, lineClamp: 1, ellipsizeMode: "tail", style: null, children };
    const items1 = [tag.tag, View];
    obj4.style = items1;
    items[1] = React5(Text_Text.Text, obj4);
    obj.children = items;
    return React7(React6, obj);
  }
  const tmp2 = closure_10();
  GuildTagBadgeSize = tmp2;
  if (null != onPress) {
    let obj2 = {
      onPress,
      style: null,
      disabled: null,
      accessibilityRole: "button",
      accessibilityState: null,
      children: null,
    };
    let items = [tmp2.container, containerStyles];
    obj2.style = items;
    obj2.disabled = disabled;
    let obj3 = { disabled };
    obj2.accessibilityState = obj3;
    obj2.children = renderContent();
    let tmp5 = closure_7(require("Pressables").PressableHighlight, obj2);
  } else {
    let obj = { style: null, children: null };
    let items1 = [tmp2.container, containerStyles];
    obj.style = items1;
    obj.children = renderContent();
    tmp5 = closure_7(View, obj);
  }
  return tmp5;
});
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  borderRadius: 4,
  paddingHorizontal: 4,
  paddingVertical: 1,
  columnGap: 2,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/GuildTag.tsx");

export default noop.memo(function GuildTagChiplet(primaryGuild) {
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
  const merged = Object.assign(
    primaryGuild,
    Object.assign({ primaryGuild: 0, userId: 0, disabledTooltip: 0, badgeSize: 0 }),
  );
  guildId = undefined;
  const items = [UserStore];
  const items1 = [userId, primaryGuild];
  const stateFromStoresObject = primaryGuild(guildId[12]).useStateFromStoresObject(
    items,
    () => {
      const user = UserStore.getUser(userId);
      primaryGuild = undefined;
      if (user != null) {
        primaryGuild = user.primaryGuild;
      }
      const userPrimaryGuild = GuildTagUtils.getUserPrimaryGuild(primaryGuild);
      return { tag: userPrimaryGuild.tag, badge: userPrimaryGuild.badge, guildId: userPrimaryGuild.guildId };
    },
    items1,
  );
  ({ tag, guildId } = stateFromStoresObject);
  [][0] = guildId;
  let tmp8Result = null;
  if (null != guildId) {
    tmp8Result = null;
    if (null != tag) {
      let obj2 = {
        guildTag: tag,
        guildBadge: primaryGuild(guildId[13]).getGuildTagBadgeUrl(guildId, stateFromStoresObject.badge, SIZE_12),
        badgeSize: SIZE_12,
      };
      const merged1 = Object.assign(merged);
      let tmp13;
      if (!flag) {
        tmp13 = tmp6;
      }
      obj2.onPress = tmp13;
      tmp8Result = closure_7(memoResult1, obj2);
      const tmp3Result = primaryGuild(guildId[13]);
    }
  }
  return tmp8Result;
});
export const GuildTagBadge = memoResult;
export const BaseGuildTagChiplet = memoResult1;
