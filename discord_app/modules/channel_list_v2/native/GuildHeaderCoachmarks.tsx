// === Module 18535: GuildHeaderCoachmarks ===

// Module 18535 (GuildHeaderCoachmarks)
import dismissible_content from "dismissible_content" /* 4973 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 5072 */;

require = fn;
const Permissions = fn(1072).Permissions;
const constants = fn(4986).DismissibleContentGroupName;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/GuildHeaderCoachmarks.tsx");

export default function GuildHeaderCoachmarks(arg0) {
  ({ targetRef, guild } = arg0);
  items = [PermissionStore];
  const items1 = [guild];
  const stateFromStores = guild(504).useStateFromStores(items, () => PermissionStore.can(Permissions.MANAGE_GUILD, guild), items1);
  const tmp5 = stateFromStores(18536)(guild.id);
  dependencyMap = tmp5;
  stateFromStores(18538)(guild.id);
  const obj = guild(504);
  const tmp7 = stateFromStores(14329)(guild.id);
  const tmp9 = stateFromStores(14322)(guild.id);
  const tmp8 = stateFromStores(18545)();
  let num = 0;
  if (null != tmp9) {
    num = tmp9.cost - tmp11;
  }
  const items2 = [stateFromStores, guild.premiumProgressBarEnabled, tmp5];
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
  const tmp10 = stateFromStores(14323)();
  const obj2 = { groupName: constants.GUILD_HEADER_TOOLTIPS };
  const tmpResult = guild(7641);
  [tmp16, tmp17] = guild(7641).useSelectedDismissibleContent(memo, { groupName: constants.GUILD_HEADER_TOOLTIPS });
  const tmp15 = _slicedToArray(guild(7641).useSelectedDismissibleContent(memo, { groupName: constants.GUILD_HEADER_TOOLTIPS }), 2);
  let tmp18 = false === tmp7;
  if (tmp18) {
    tmp18 = tmp8;
  }
  if (tmp18) {
    tmp18 = null != tmp9;
  }
  if (tmp18) {
    tmp18 = tmp10;
  }
  const tmp14Result = _slicedToArray(guild(14315).useBoostToUnlockCoachmarkDCF(tmp18, guild.id, num, constants.GUILD_HEADER_TOOLTIPS), 2);
  if (first == null) {
    first = tmp14Result[0];
  }
  if (guild(4973).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK === first) {
    const obj3 = { targetRef, guild, markAsDismissed: tmp17 };
    return jsx(tmp4(18546), { targetRef, guild, markAsDismissed: tmp17 });
  } else if (guild(4973).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK === first) {
    const obj4 = { guildId: guild.id, targetRef, markAsDismissed: tmp17 };
    return jsx(tmp4(18547), { guildId: guild.id, targetRef, markAsDismissed: tmp17 });
  } else if (guild(4973).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK === first) {
    let tmp20 = null;
    if (null != tmp9) {
      const obj5 = { guildId: guild.id, powerup: tmp9, targetRef, markAsDismissed: tmp14Result[1] };
      tmp20 = jsx(tmp4(18549), { guildId: guild.id, powerup: tmp9, targetRef, markAsDismissed: tmp14Result[1] });
    }
    return tmp20;
  } else {
    return null;
  }
  const tmpResult2 = guild(14315);
};