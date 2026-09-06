// discord_app/modules/channel_list_v2/native/GuildHeaderCoachmarks.tsx
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import PermissionStore from "../../../stores/PermissionStore.tsx";

require = fn;
const Permissions = fn(1074).Permissions;
const constants = fn(1954).DismissibleContentGroupName;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/GuildHeaderCoachmarks.tsx");

export default function GuildHeaderCoachmarks(arg0) {
  ({ targetRef, guild } = arg0);
  let mobileBoostProgressBarEnabled;
  let obj = guild(mobileBoostProgressBarEnabled[6]);
  let items = [PermissionStore];
  const items1 = [guild];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => PermissionStore.can(Permissions.MANAGE_GUILD, guild),
    items1,
  );
  let obj1 = guild(mobileBoostProgressBarEnabled[7]);
  mobileBoostProgressBarEnabled = obj1.useMobileBoostProgressBarEnabled("GuildHeaderCoachmarks");
  const tmp6 = stateFromStores(mobileBoostProgressBarEnabled[8])(guild.id);
  _slicedToArray = tmp6;
  stateFromStores(mobileBoostProgressBarEnabled[9])(guild.id);
  const tmp8 = stateFromStores(mobileBoostProgressBarEnabled[10])(guild.id);
  const tmp10 = stateFromStores(mobileBoostProgressBarEnabled[12])(guild.id);
  const items2 = [stateFromStores, guild.premiumProgressBarEnabled, mobileBoostProgressBarEnabled, tmp6];
  const tmp9 = stateFromStores(mobileBoostProgressBarEnabled[11])();
  const memo = noop.useMemo(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = !guild.premiumProgressBarEnabled;
    }
    if (tmp) {
      tmp = mobileBoostProgressBarEnabled;
    }
    const items = [];
    if (tmp) {
      items.push(dismissible_content.DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK);
    }
    if (closure_3) {
      items.push(dismissible_content.DismissibleContent.GUILD_THEME_MEMBER_COACHMARK);
    }
    return items;
  }, items2);
  const tmp11 = stateFromStores(mobileBoostProgressBarEnabled[13])();
  const obj3 = guild(mobileBoostProgressBarEnabled[15]);
  const tmp13 = constants;
  const tmp14 = _slicedToArray;
  [tmp16, tmp17] = _slicedToArray(
    guild(mobileBoostProgressBarEnabled[15]).useSelectedDismissibleContent(memo, constants.GUILD_HEADER_TOOLTIPS),
    2,
  );
  const tmp15 = _slicedToArray(
    guild(mobileBoostProgressBarEnabled[15]).useSelectedDismissibleContent(memo, constants.GUILD_HEADER_TOOLTIPS),
    2,
  );
  let tmp18 = false === tmp8;
  if (tmp18) {
    tmp18 = tmp9;
  }
  if (tmp18) {
    tmp18 = null != tmp10;
  }
  if (tmp18) {
    tmp18 = tmp11;
  }
  const tmp14Result = tmp14(
    guild(mobileBoostProgressBarEnabled[16]).useBoostToUnlockCoachmarkDCF(tmp18, guild.id, tmp13.GUILD_HEADER_TOOLTIPS),
    2,
  );
  if (first == null) {
    first = tmp14Result[0];
  }
  if (guild(mobileBoostProgressBarEnabled[14]).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK === first) {
    obj = { targetRef, guild, markAsDismissed: tmp17 };
    return jsx(tmp5(tmp2[17]), { targetRef, guild, markAsDismissed: tmp17 });
  } else if (tmp(tmp2[14]).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK === first) {
    obj = { guildId: guild.id, targetRef, markAsDismissed: tmp17 };
    return jsx(tmp5(tmp2[18]), { guildId: guild.id, targetRef, markAsDismissed: tmp17 });
  } else if (tmp(tmp2[14]).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK === first) {
    let tmp21 = null;
    if (null != tmp10) {
      obj1 = { guildId: guild.id, powerup: tmp10, targetRef, markAsDismissed: tmp14Result[1] };
      tmp21 = jsx(tmp5(tmp2[19]), { guildId: guild.id, powerup: tmp10, targetRef, markAsDismissed: tmp14Result[1] });
    }
    return tmp21;
  } else {
    return null;
  }
  const obj4 = guild(mobileBoostProgressBarEnabled[16]);
}
