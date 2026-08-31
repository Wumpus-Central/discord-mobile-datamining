// === Module 15814: useChannelNoticeRows ===

// Module 15814 (useChannelNoticeRows)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "completeStep" /* 12006 */;
import closure_6 from "comparator" /* 1982 */;
import closure_7 from "createGuildRecordFromRust" /* 1909 */;
import closure_8 from "mergeGuildAvatar" /* 1922 */;
import { ChannelListChannelNoticeRow as closure_9 } from "ChannelListGuildActionRow" /* 7247 */;
import { MFALevels } from "ME" /* 676 */;
import ContentDismissActionType from "ContentDismissActionType" /* 1384 */;

const require = arg1;
({ ContentDismissActionType: unpackModuleId, DismissibleContentGroupName: closure_12 } = ContentDismissActionType);
let result = require("set").fileFinishedImporting("modules/guild_sidebar/native/useChannelNoticeRows.tsx");

export default function useChannelNoticeRows(id) {
  id = id.id;
  hasAlreadyLinked = id;
  let obj = id(stateFromStores[9]);
  let items = [guildHasLiveChannelNotice];
  stateFromStores = obj.useStateFromStores(items, () => guildHasLiveChannelNotice.hasProgress(hasAlreadyLinked));
  currentUser = currentUser.getCurrentUser();
  const items1 = [closure_6];
  const items2 = [currentUser, id.mfaLevel, id];
  const stateFromStores1 = id(stateFromStores[9]).useStateFromStores(items1, () => {
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
  const obj2 = id(stateFromStores[9]);
  guildHasLiveChannelNotice = id(stateFromStores[16]).useGuildHasLiveChannelNotice(id);
  const obj3 = id(stateFromStores[16]);
  const canShowGameClaimCoachmark = id(stateFromStores[17]).useCanShowGameClaimCoachmark(id);
  const obj4 = id(stateFromStores[17]);
  if (canShowGameClaimCoachmark) {
    const items3 = [tmp(tmp2[14]).DismissibleContent.GAME_CLAIM_COACHMARK];
    let items4 = items3;
  } else {
    items4 = [];
  }
  const tmp10 = currentUser(id(stateFromStores[13]).useSelectedSingleUseGuildDismissibleContent(items4, id, constants.CHANNEL_NOTICES, true), 2);
  closure_6 = tmp11;
  hasAlreadyLinked = undefined;
  let tmpResult = tmp(tmp2[9]);
  const items5 = [closure_7];
  tmpResult = tmp(tmp2[10]);
  const tmp12 = hasAlreadyLinked(stateFromStores[11])(tmpResult.useApplication(tmpResult.useStateFromStoresArray(items5, () => {
    guild = guild.getGuild(id);
    let gameApplicationIds;
    if (guild != null) {
      gameApplicationIds = guild.gameApplicationIds;
    }
    if (gameApplicationIds == null) {
      gameApplicationIds = [];
    }
    return gameApplicationIds;
  })[0]).data);
  ({ fetched, hasAlreadyLinked } = tmp12);
  ({ connectionApp, canStartAuthorization, startAuthorization } = tmp12);
  const obj5 = id(stateFromStores[13]);
  const tmp8 = constants;
  const tmp9 = currentUser;
  const defaultAuthorizationNotifiers = id(stateFromStores[12]).useDefaultAuthorizationNotifiers(startAuthorization, hasAlreadyLinked);
  if (fetched) {
    fetched = !hasAlreadyLinked;
  }
  if (fetched) {
    fetched = canStartAuthorization;
  }
  if (fetched) {
    fetched = null != connectionApp;
  }
  if (fetched) {
    fetched = null != connectionApp.applicationAccountLinkBenefitConfig;
  }
  if (fetched) {
    fetched = null != connectionApp.applicationAccountLinkBenefitConfig.reward_name;
  }
  if (fetched) {
    fetched = null != connectionApp.applicationAccountLinkBenefitConfig.reward_image;
  }
  const tmpResult1 = id(stateFromStores[12]);
  if (fetched) {
    const items6 = [tmp(tmp2[14]).DismissibleContent.MOBILE_ACCOUNT_LINKING_BANNER];
    let items7 = items6;
  } else {
    items7 = [];
  }
  const tmpResult2 = id(stateFromStores[13]);
  const items8 = [id, hasAlreadyLinked];
  [tmp15, tmp16] = tmp9(id(stateFromStores[13]).useSelectedSingleUseGuildDismissibleContent(items7, id, tmp8.CHANNEL_NOTICES, true), 2);
  const effect = stateFromStores1.useEffect(() => {
    if (hasAlreadyLinked) {
      let obj = id(stateFromStores[15]);
      obj = { dismissAction: null, guildId: null, groupName: null };
      obj[0] = closure_1_11.INDIRECT_ACTION;
      obj[1] = id;
      obj[2] = closure_1_12.CHANNEL_NOTICES;
      const result = obj.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(id(stateFromStores[14]).DismissibleContent.MOBILE_ACCOUNT_LINKING_BANNER, id, obj);
    }
  }, items8);
  closure_7 = tmp18;
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
    applicationAccountLinkMarkAsDismissed: tmp16,
    startApplicationAccountLinkAuthorization: defaultAuthorizationNotifiers,
    accountLinkApplication: connectionApp
  };
  items9 = [stateFromStores, stateFromStores1, guildHasLiveChannelNotice, null != tmp10[0], null != tmp15];
  return obj;
};