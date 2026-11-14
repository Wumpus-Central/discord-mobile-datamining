// === Module 18873: GuildHeaderCoachmarks ===

// Module 18873 (GuildHeaderCoachmarks)
import dismissible_content from "dismissible_content" /* 5139 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 5238 */;

require = fn;
const Permissions = fn(1072).Permissions;
const constants = fn(5152).DismissibleContentGroupName;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/GuildHeaderCoachmarks.tsx");

export default function GuildHeaderCoachmarks(arg0) {
  ({ targetRef, guild } = arg0);
  items = [PermissionStore];
  const items1 = [guild];
  const stateFromStores = guild(504).useStateFromStores(items, () => PermissionStore.can(Permissions.MANAGE_GUILD, guild), items1);
  const tmp5 = stateFromStores(18874)(guild.id);
  dependencyMap = tmp5;
  stateFromStores(18876)(guild.id);
  const obj = guild(504);
  const tmp7 = stateFromStores(10676)(guild.id);
  const tmp9 = stateFromStores(10704)(guild.id);
  const items2 = [stateFromStores, guild.premiumProgressBarEnabled, tmp5];
  const tmp8 = stateFromStores(18883)();
  const memo = noop.useMemo(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = !guild.premiumProgressBarEnabled;
    }
    items = [];
    if (tmp) {
      items.push(dismissible_content.DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK);
    }
    if (closure_2) {
      items.push(dismissible_content.DismissibleContent.GUILD_THEME_MEMBER_COACHMARK);
    }
    return items;
  }, items2);
  const tmp10 = stateFromStores(10705)();
  const obj2 = guild(9560);
  const obj3 = { groupName: constants.GUILD_HEADER_TOOLTIPS };
  [tmp15, tmp16] = guild(9560).useSelectedDismissibleContent(memo, { groupName: constants.GUILD_HEADER_TOOLTIPS });
  const tmp14 = _slicedToArray(guild(9560).useSelectedDismissibleContent(memo, { groupName: constants.GUILD_HEADER_TOOLTIPS }), 2);
  let tmp17 = false === tmp7;
  if (tmp17) {
    tmp17 = tmp8;
  }
  if (tmp17) {
    tmp17 = null != tmp9;
  }
  if (tmp17) {
    tmp17 = tmp10;
  }
  const tmp13Result = _slicedToArray(guild(10701).useBoostToUnlockCoachmarkDCF(tmp17, guild.id, constants.GUILD_HEADER_TOOLTIPS), 2);
  if (first == null) {
    first = tmp13Result[0];
  }
  if (guild(5139).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK === first) {
    const obj5 = { targetRef, guild, markAsDismissed: tmp16 };
    return jsx(tmp4(18884), { targetRef, guild, markAsDismissed: tmp16 });
  } else if (guild(5139).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK === first) {
    const obj6 = { guildId: guild.id, targetRef, markAsDismissed: tmp16 };
    return jsx(tmp4(18885), { guildId: guild.id, targetRef, markAsDismissed: tmp16 });
  } else if (guild(5139).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK === first) {
    let tmp20 = null;
    if (null != tmp9) {
      const obj7 = { guildId: guild.id, powerup: tmp9, targetRef, markAsDismissed: tmp13Result[1] };
      tmp20 = jsx(tmp4(18887), { guildId: guild.id, powerup: tmp9, targetRef, markAsDismissed: tmp13Result[1] });
    }
    return tmp20;
  } else {
    return null;
  }
  const obj4 = guild(10701);
};