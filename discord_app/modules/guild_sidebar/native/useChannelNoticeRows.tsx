// === Module 16259: useChannelNoticeRows ===

// Module 16259 (useChannelNoticeRows)
import dismissible_content from "dismissible_content" /* 1943 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4380 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildProgressStore from "GuildProgressStore" /* 12475 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
let closure_9 = fn(7534).ChannelListChannelNoticeRow;
const MFALevels = fn(1074).MFALevels;
const DismissibleContentConstants = fn(1954);
({ ContentDismissActionType: closure_11, DismissibleContentGroupName: closure_12 } = DismissibleContentConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_sidebar/native/useChannelNoticeRows.tsx");

export default function useChannelNoticeRows(id) {
  _require = id;
  id = id.id;
  let obj = require("useStateFromStores");
  let items = [guildHasLiveChannelNotice];
  stateFromStores = obj.useStateFromStores(items, () => GuildProgressStore.hasProgress(id));
  const currentUser = UserStore.getCurrentUser();
  const items1 = [closure_6];
  const items2 = [currentUser, id.mfaLevel, id];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => {
    let result = null != currentUser;
    if (result) {
      result = guildId.mfaLevel === MFALevels.ELEVATED;
    }
    if (result) {
      result = !currentUser.mfaEnabled;
    }
    if (result) {
      result = GuildChannelStore.hasElevatedPermissions(id);
    }
    return result;
  }, items2);
  const obj2 = require("useStateFromStores");
  guildHasLiveChannelNotice = require("useGuildHasLiveChannelNotice").useGuildHasLiveChannelNotice(id);
  const obj3 = require("useGuildHasLiveChannelNotice");
  const canShowGameClaimCoachmark = require("useGameClaimCoachmark").useCanShowGameClaimCoachmark(id);
  const obj4 = require("useGameClaimCoachmark");
  if (canShowGameClaimCoachmark) {
    const items3 = [tmp(tmp2[14]).DismissibleContent.GAME_CLAIM_COACHMARK];
    let items4 = items3;
  } else {
    items4 = [];
  }
  const tmp10 = currentUser(require("useSelectedDismissibleContent").useSelectedSingleUseGuildDismissibleContent(items4, id, constants2.CHANNEL_NOTICES, true), 2);
  closure_6 = tmp11;
  closure_129_0 = id;
  tmp(tmp2[9]);
  const items5 = [closure_7];
  const tmpResult = tmp(tmp2[10]);
  const tmp12 = id(stateFromStores[11])(tmpResult.useApplication(tmpResult.useStateFromStoresArray(items5, () => {
    const guild = GuildStore.getGuild(closure_0);
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
  closure_129_1 = hasAlreadyLinked;
  ({ connectionApp, canStartAuthorization, startAuthorization } = tmp12);
  const obj5 = require("useSelectedDismissibleContent");
  const tmp8 = constants2;
  const tmp9 = currentUser;
  const defaultAuthorizationNotifiers = require("useDefaultAuthorizationNotifiers").useDefaultAuthorizationNotifiers(startAuthorization, hasAlreadyLinked);
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
  const tmpResult1 = require("useDefaultAuthorizationNotifiers");
  if (fetched) {
    const items6 = [tmp(tmp2[14]).DismissibleContent.MOBILE_ACCOUNT_LINKING_BANNER];
    let items7 = items6;
  } else {
    items7 = [];
  }
  const tmpResult2 = require("useSelectedDismissibleContent");
  const items8 = [id, hasAlreadyLinked];
  [tmp15, tmp16] = tmp9(require("useSelectedDismissibleContent").useSelectedSingleUseGuildDismissibleContent(items7, id, tmp8.CHANNEL_NOTICES, true), 2);
  const effect = stateFromStores1.useEffect(() => {
    if (id) {
      const obj = { dismissAction: constants.INDIRECT_ACTION, guildId, groupName: constants2.CHANNEL_NOTICES };
      const result = obj.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(dismissible_content.DismissibleContent.MOBILE_ACCOUNT_LINKING_BANNER, guildId, obj);
    }
  }, items8);
  closure_7 = tmp18;
  obj = { rows: null, gameClaimMarkAsDismissed: tmp10[1], applicationAccountLinkMarkAsDismissed: tmp16, startApplicationAccountLinkAuthorization: defaultAuthorizationNotifiers, accountLinkApplication: connectionApp };
  const items9 = [stateFromStores, stateFromStores1, guildHasLiveChannelNotice, null != tmp10[0], null != tmp15];
  obj.rows = stateFromStores1.useMemo(() => {
    const items = [constants.SPACER];
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
  }, items9);
  return obj;
};