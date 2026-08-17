// discord_app/modules/guild_sidebar/native/useChannelNoticeRows.tsx
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import closure_5 from "../../guild_progress/GuildProgressStore.tsx";
import closure_6 from "../../../stores/GuildChannelStore.tsx";
import closure_7 from "../../../stores/GuildStore.tsx";
import closure_8 from "../../../stores/UserStore.tsx";
import { ChannelListChannelNoticeRow as closure_9 } from "../GuildSidebarConstants.tsx";
import { MFALevels } from "../../../Constants.tsx";
import ContentDismissActionType from "../../dismissible_content/DismissibleContentConstants.tsx";

const require = arg1;
({ ContentDismissActionType: unpackModuleId, DismissibleContentGroupName: closure_12 } = ContentDismissActionType);
let result = require("set").fileFinishedImporting("modules/guild_sidebar/native/useChannelNoticeRows.tsx");

export default function useChannelNoticeRows(id) {
  id = id.id;
  let hasAlreadyLinked = id;
  let obj = id(stateFromStores[10]);
  let items = [guildHasLiveChannelNotice];
  stateFromStores = obj.useStateFromStores(items, () => guildHasLiveChannelNotice.hasProgress(hasAlreadyLinked));
  currentUser = currentUser.getCurrentUser();
  const items1 = [closure_6];
  const items2 = [currentUser, id.mfaLevel, id];
  const stateFromStores1 = id(stateFromStores[10]).useStateFromStores(items1, () => {
    let result = null != currentUser;
    if (result) {
      result = id.mfaLevel === closure_1_10.ELEVATED;
    }
    if (result) {
      result = !currentUser.mfaEnabled;
    }
    if (result) {
      result = closure_6.hasElevatedPermissions(hasAlreadyLinked);
    }
    return result;
  }, items2);
  const obj2 = id(stateFromStores[10]);
  guildHasLiveChannelNotice = id(stateFromStores[17]).useGuildHasLiveChannelNotice(id);
  const obj3 = id(stateFromStores[17]);
  const canShowGameClaimCoachmark = id(stateFromStores[18]).useCanShowGameClaimCoachmark(id);
  const obj4 = id(stateFromStores[18]);
  if (canShowGameClaimCoachmark) {
    const items3 = [tmp(tmp2[15]).DismissibleContent.GAME_CLAIM_COACHMARK];
    let items4 = items3;
  } else {
    items4 = [];
  }
  const tmp10 = currentUser(id(stateFromStores[14]).useSelectedSingleUseGuildDismissibleContent(items4, id, constants.CHANNEL_NOTICES, true), 2);
  closure_6 = tmp11;
  hasAlreadyLinked = undefined;
  const obj5 = id(stateFromStores[14]);
  const tmp12 = hasAlreadyLinked;
  const tmp8 = constants;
  const tmp9 = currentUser;
  let enabled = hasAlreadyLinked(stateFromStores[9]).useConfig({ location: "useMobileAccountLinkRow" }).enabled;
  let tmpResult = tmp(tmp2[10]);
  const items5 = [closure_7];
  tmpResult = tmp(tmp2[11]);
  let first = null;
  if (enabled) {
    first = tmpResult.useStateFromStoresArray(items5, () => {
      guild = guild.getGuild(id);
      let gameApplicationIds;
      if (guild != null) {
        gameApplicationIds = guild.gameApplicationIds;
      }
      if (gameApplicationIds == null) {
        gameApplicationIds = [];
      }
      return gameApplicationIds;
    })[0];
  }
  const tmp14 = tmp12(stateFromStores[12])(tmpResult.useApplication(first).data);
  hasAlreadyLinked = tmp14.hasAlreadyLinked;
  ({ connectionApp, fetched, canStartAuthorization, startAuthorization } = tmp14);
  const obj6 = hasAlreadyLinked(stateFromStores[9]);
  const defaultAuthorizationNotifiers = id(stateFromStores[13]).useDefaultAuthorizationNotifiers(startAuthorization, hasAlreadyLinked);
  if (enabled) {
    enabled = fetched;
  }
  if (enabled) {
    enabled = !hasAlreadyLinked;
  }
  if (enabled) {
    enabled = canStartAuthorization;
  }
  if (enabled) {
    enabled = null != connectionApp;
  }
  if (enabled) {
    enabled = null != connectionApp.applicationAccountLinkBenefitConfig;
  }
  if (enabled) {
    enabled = null != connectionApp.applicationAccountLinkBenefitConfig.reward_name;
  }
  if (enabled) {
    enabled = null != connectionApp.applicationAccountLinkBenefitConfig.reward_image;
  }
  const tmpResult1 = id(stateFromStores[13]);
  if (enabled) {
    const items6 = [tmp(tmp2[15]).DismissibleContent.MOBILE_ACCOUNT_LINKING_BANNER];
    let items7 = items6;
  } else {
    items7 = [];
  }
  const tmpResult2 = id(stateFromStores[14]);
  const items8 = [id, hasAlreadyLinked];
  [tmp17, tmp18] = tmp9(id(stateFromStores[14]).useSelectedSingleUseGuildDismissibleContent(items7, id, tmp8.CHANNEL_NOTICES, true), 2);
  const effect = stateFromStores1.useEffect(() => {
    if (hasAlreadyLinked) {
      let obj = id(stateFromStores[16]);
      obj = { dismissAction: null, guildId: null, groupName: null };
      obj[0] = closure_1_11.INDIRECT_ACTION;
      obj[1] = id;
      obj[2] = closure_1_12.CHANNEL_NOTICES;
      const result = obj.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(id(stateFromStores[15]).DismissibleContent.MOBILE_ACCOUNT_LINKING_BANNER, id, obj);
    }
  }, items8);
  closure_7 = tmp20;
  obj = {
    rows: stateFromStores1.useMemo(() => {
      const items = [closure_1_9.SPACER];
      if (closure_6) {
        items.push(tmp.GAME_CLAIM);
      }
      if (closure_7) {
        items.push(tmp.APPLICATION_ACCOUNT_LINK);
      }
      if (stateFromStores) {
        items.push(tmp.GUILD_PROGRESS);
      } else if (stateFromStores1) {
        items.push(tmp.MFA_WARNING);
      }
      if (guildHasLiveChannelNotice) {
        items.push(tmp.LIVE_CHANNEL_NOTICE);
      }
      return items;
    }, items9),
    gameClaimMarkAsDismissed: tmp10[1],
    applicationAccountLinkMarkAsDismissed: tmp18,
    startApplicationAccountLinkAuthorization: defaultAuthorizationNotifiers,
    accountLinkApplication: connectionApp
  };
  items9 = [stateFromStores, stateFromStores1, guildHasLiveChannelNotice, null != tmp10[0], null != tmp17];
  return obj;
};