// discord_app/modules/channel_list_v2/native/GuildHeaderCoachmarks.tsx
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import closure_5 from "../../../stores/PermissionStore.tsx";
import { Permissions } from "../../../Constants.tsx";
import { DismissibleContentGroupName as closure_7 } from "../../dismissible_content/DismissibleContentConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/channel_list_v2/native/GuildHeaderCoachmarks.tsx");

export default function GuildHeaderCoachmarks(arg0) {
  ({ targetRef, guild } = arg0);
  let stateFromStores;
  let mobileBoostProgressBarEnabled;
  let callback;
  let obj = guild(mobileBoostProgressBarEnabled[6]);
  let items = [closure_5];
  const items1 = [guild];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_5.can(closure_1_6.MANAGE_GUILD, guild), items1);
  obj1 = guild(mobileBoostProgressBarEnabled[7]);
  mobileBoostProgressBarEnabled = obj1.useMobileBoostProgressBarEnabled("GuildHeaderCoachmarks");
  const tmp6 = stateFromStores(mobileBoostProgressBarEnabled[8])(guild.id);
  callback = tmp6;
  stateFromStores(mobileBoostProgressBarEnabled[9])(guild.id);
  const tmp8 = stateFromStores(mobileBoostProgressBarEnabled[10])(guild.id);
  const tmp10 = stateFromStores(mobileBoostProgressBarEnabled[12])(guild.id);
  const items2 = [stateFromStores, guild.premiumProgressBarEnabled, mobileBoostProgressBarEnabled, tmp6];
  const tmp9 = stateFromStores(mobileBoostProgressBarEnabled[11])();
  const memo = React.useMemo(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = !guild.premiumProgressBarEnabled;
    }
    if (tmp) {
      tmp = mobileBoostProgressBarEnabled;
    }
    const items = [];
    if (tmp) {
      items.push(guild(mobileBoostProgressBarEnabled[14]).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK);
    }
    if (closure_3) {
      items.push(guild(mobileBoostProgressBarEnabled[14]).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK);
    }
    return items;
  }, items2);
  const tmp11 = stateFromStores(mobileBoostProgressBarEnabled[13])();
  const obj3 = guild(mobileBoostProgressBarEnabled[15]);
  const tmp13 = constants;
  const tmp14 = callback;
  [tmp16, tmp17] = callback(guild(mobileBoostProgressBarEnabled[15]).useSelectedDismissibleContent(memo, constants.GUILD_HEADER_TOOLTIPS), 2);
  const tmp15 = callback(guild(mobileBoostProgressBarEnabled[15]).useSelectedDismissibleContent(memo, constants.GUILD_HEADER_TOOLTIPS), 2);
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
  const tmp14Result = tmp14(guild(mobileBoostProgressBarEnabled[16]).useBoostToUnlockCoachmarkDCF(tmp18, guild.id, tmp13.GUILD_HEADER_TOOLTIPS), 2);
  if (first == null) {
    first = tmp14Result[0];
  }
  if (guild(mobileBoostProgressBarEnabled[14]).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK === first) {
    obj = { targetRef: null, guild: null, markAsDismissed: null };
    obj[0] = targetRef;
    obj[1] = guild;
    obj[2] = tmp17;
    return jsx(tmp5(tmp2[17]), { targetRef: null, guild: null, markAsDismissed: null });
  } else if (tmp(tmp2[14]).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK === first) {
    obj = { guildId: null, targetRef: null, markAsDismissed: null };
    obj[0] = guild.id;
    obj[1] = targetRef;
    obj[2] = tmp17;
    return jsx(tmp5(tmp2[18]), { guildId: null, targetRef: null, markAsDismissed: null });
  } else if (tmp(tmp2[14]).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK === first) {
    let tmp21 = null;
    if (null != tmp10) {
      obj1 = { guildId: null, powerup: null, targetRef: null, markAsDismissed: null };
      obj1[0] = guild.id;
      obj1[1] = tmp10;
      obj1[2] = targetRef;
      obj1[3] = tmp14Result[1];
      tmp21 = jsx(tmp5(tmp2[19]), { guildId: null, powerup: null, targetRef: null, markAsDismissed: null });
    }
    return tmp21;
  } else {
    return null;
  }
  const obj4 = guild(mobileBoostProgressBarEnabled[16]);
};