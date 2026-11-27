// discord_app/modules/channel_list_v2/native/GuildHeaderCoachmarks.tsx
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import PermissionStore from "../../../stores/PermissionStore.tsx";

require = fn;
const Permissions = fn(1071).Permissions;
const constants = fn(4889).DismissibleContentGroupName;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/GuildHeaderCoachmarks.tsx");

export default function GuildHeaderCoachmarks(arg0) {
  ({ targetRef, guild } = arg0);
  items = [PermissionStore];
  const items1 = [guild];
  const stateFromStores = guild(504).useStateFromStores(
    items,
    () => PermissionStore.can(Permissions.MANAGE_GUILD, guild),
    items1,
  );
  stateFromStores(17889)(guild.id);
  const obj = guild(504);
  const tmp6 = stateFromStores(13508)(guild.id);
  const tmp8 = stateFromStores(13501)(guild.id);
  const items2 = [stateFromStores, guild.premiumProgressBarEnabled];
  const tmp7 = stateFromStores(17896)();
  const memo = noop.useMemo(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = !guild.premiumProgressBarEnabled;
    }
    items = [];
    if (tmp) {
      items.push(dismissible_content.DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK);
    }
    return items;
  }, items2);
  const tmp9 = stateFromStores(13502)();
  const obj2 = guild(9562);
  const obj3 = { groupName: constants.GUILD_HEADER_TOOLTIPS };
  [tmp14, tmp15] = guild(9562).useSelectedDismissibleContent(memo, { groupName: constants.GUILD_HEADER_TOOLTIPS });
  const tmp13 = _slicedToArray(
    guild(9562).useSelectedDismissibleContent(memo, { groupName: constants.GUILD_HEADER_TOOLTIPS }),
    2,
  );
  let tmp16 = false === tmp6;
  if (tmp16) {
    tmp16 = tmp7;
  }
  if (tmp16) {
    tmp16 = null != tmp8;
  }
  if (tmp16) {
    tmp16 = tmp9;
  }
  const tmp12Result = _slicedToArray(
    guild(13498).useBoostToUnlockCoachmarkDCF(tmp16, guild.id, constants.GUILD_HEADER_TOOLTIPS),
    2,
  );
  if (first == null) {
    first = tmp12Result[0];
  }
  if (guild(4876).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK === first) {
    const obj5 = { targetRef, guild, markAsDismissed: tmp15 };
    return jsx(tmp4(17897), { targetRef, guild, markAsDismissed: tmp15 });
  } else if (guild(4876).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK === first) {
    let tmp19 = null;
    if (null != tmp8) {
      const obj6 = { guildId: guild.id, powerup: tmp8, targetRef, markAsDismissed: tmp12Result[1] };
      tmp19 = jsx(tmp4(17898), { guildId: guild.id, powerup: tmp8, targetRef, markAsDismissed: tmp12Result[1] });
    }
    return tmp19;
  } else {
    return null;
  }
  const obj4 = guild(13498);
}
