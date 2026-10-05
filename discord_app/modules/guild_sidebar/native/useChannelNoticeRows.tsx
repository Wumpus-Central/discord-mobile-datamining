// === Module 16195: useChannelNoticeRows ===

// Module 16195 (useChannelNoticeRows)
import Constants from "Constants" /* 1085 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4698 */;
import GuildSidebarConstants from "GuildSidebarConstants" /* 7045 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildProgressStore from "GuildProgressStore" /* 12131 */;
import GuildChannelStore from "GuildChannelStore" /* 4507 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_6, dependencyMap, guildId, id;

let closure_12;
let unpackModuleId;
const constants = GuildSidebarConstants.ChannelListChannelNoticeRow;
const MFALevels = Constants.MFALevels;
({ ContentDismissActionType: unpackModuleId, DismissibleContentGroupName: closure_12 } = DismissibleContentConstants);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let canStartAuthorization;
  let connectionApp;
  let fetched;
  let first;
  let hasAlreadyLinked;
  let startAuthorization;
  let tmp14;
  let tmp6;
  let obj = guildId(576);
  const cResult = obj.c(14);
  guildId = guildId.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function c() {
      const guild = GuildStore.getGuild(guildId);
      let gameApplicationIds;
      if (guild != null) {
        gameApplicationIds = guild.gameApplicationIds;
      }
      if (gameApplicationIds == null) {
        gameApplicationIds = [];
      }
      return gameApplicationIds;
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = guildId(573);
  const first1 = tmpResult.useStateFromStoresArray(first, tmp6)[0];
  const tmpResult4 = guildId(6658);
  const tmp8 = hasAlreadyLinked(6660)(tmpResult4.useApplication(first1).data);
  ({ fetched, hasAlreadyLinked } = tmp8);
  ({ connectionApp, canStartAuthorization, startAuthorization } = tmp8);
  const tmpResult5 = guildId(16196);
  const defaultAuthorizationNotifiers = tmpResult5.useDefaultAuthorizationNotifiers(startAuthorization, hasAlreadyLinked);
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
  if (cResult[3] !== fetched) {
    let items2;
    if (fetched) {
      const items1 = [guildId(2036).DismissibleContent.MOBILE_ACCOUNT_LINKING_BANNER];
      items2 = items1;
    } else {
      items2 = [];
    }
    cResult[3] = fetched;
    cResult[4] = items2;
    tmp14 = items2;
  } else {
    tmp14 = cResult[4];
  }
  const tmpResult6 = guildId(6891);
  const tmp15 = _slicedToArray(tmpResult6.useSelectedSingleUseGuildDismissibleContent(tmp14, guildId, constants3.CHANNEL_NOTICES, true), 2);
  if (cResult[5] === guildId) {
    let tmp18;
    let tmp19;
    if (cResult[6] === hasAlreadyLinked) {
      tmp18 = cResult[7];
      tmp19 = cResult[8];
    }
    const effect = react.useEffect(tmp18, tmp19);
    if (cResult[9] === connectionApp) {
      if (cResult[10] === tmp15[1]) {
        if (cResult[11] === null != tmp15[0]) {
          let tmp22;
          if (cResult[12] === defaultAuthorizationNotifiers) {
            tmp22 = cResult[13];
          }
          return tmp22;
        }
      }
    }
    let obj2 = { showApplicationAccountLink: null != tmp15[0], applicationAccountLinkMarkAsDismissed: tmp15[1], startApplicationAccountLinkAuthorization: defaultAuthorizationNotifiers, accountLinkApplication: connectionApp };
    cResult[9] = connectionApp;
    cResult[10] = tmp15[1];
    cResult[11] = null != tmp15[0];
    cResult[12] = defaultAuthorizationNotifiers;
    cResult[13] = obj2;
    tmp22 = obj2;
  }
  class G {
    constructor() {
      if (hasAlreadyLinked) {
        const obj2 = { dismissAction: unpackModuleId.INDIRECT_ACTION, guildId, groupName: constants.CHANNEL_NOTICES };
        const obj = DismissibleContentUnsafeUtils;
        const result = obj.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(dismissible_content.DismissibleContent.MOBILE_ACCOUNT_LINKING_BANNER, guildId, obj2);
      }
    }
  }
  const items3 = [guildId, hasAlreadyLinked];
  cResult[5] = guildId;
  cResult[6] = hasAlreadyLinked;
  cResult[7] = G;
  cResult[8] = items3;
  tmp19 = items3;
  tmp18 = G;
}) : ((guildId) => {
  let canStartAuthorization;
  let connectionApp;
  let fetched;
  let hasAlreadyLinked;
  let items2;
  let startAuthorization;
  let tmp12;
  let tmp13;
  guildId = guildId.guildId;
  hasAlreadyLinked = undefined;
  let obj = guildId(573);
  const items = [GuildStore];
  const first = obj.useStateFromStoresArray(items, () => {
    const guild = GuildStore.getGuild(guildId);
    let gameApplicationIds;
    if (guild != null) {
      gameApplicationIds = guild.gameApplicationIds;
    }
    if (gameApplicationIds == null) {
      gameApplicationIds = [];
    }
    return gameApplicationIds;
  })[0];
  let obj2 = guildId(6658);
  const tmp4 = hasAlreadyLinked(6660)(obj2.useApplication(first).data);
  ({ fetched, hasAlreadyLinked } = tmp4);
  ({ connectionApp, canStartAuthorization, startAuthorization } = tmp4);
  const obj3 = guildId(16196);
  const defaultAuthorizationNotifiers = obj3.useDefaultAuthorizationNotifiers(startAuthorization, hasAlreadyLinked);
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
  const useSelectedSingleUseGuildDismissibleContent = guildId(6891).useSelectedSingleUseGuildDismissibleContent;
  guildId(6891);
  if (fetched) {
    const items1 = [guildId(2036).DismissibleContent.MOBILE_ACCOUNT_LINKING_BANNER];
    items2 = items1;
  } else {
    items2 = [];
  }
  const items3 = [guildId, hasAlreadyLinked];
  [tmp12, tmp13] = useSelectedSingleUseGuildDismissibleContent(items2, guildId, constants3.CHANNEL_NOTICES, true);
  _slicedToArray(useSelectedSingleUseGuildDismissibleContent(items2, guildId, constants3.CHANNEL_NOTICES, true), 2);
  const effect = react.useEffect(() => {
    if (hasAlreadyLinked) {
      const obj2 = { dismissAction: unpackModuleId.INDIRECT_ACTION, guildId, groupName: constants.CHANNEL_NOTICES };
      const obj = DismissibleContentUnsafeUtils;
      const result = obj.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(dismissible_content.DismissibleContent.MOBILE_ACCOUNT_LINKING_BANNER, guildId, obj2);
    }
  }, items3);
  return { showApplicationAccountLink: null != tmp12, applicationAccountLinkMarkAsDismissed: tmp13, startApplicationAccountLinkAuthorization: defaultAuthorizationNotifiers, accountLinkApplication: connectionApp };
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let applicationAccountLinkMarkAsDismissed;
  let first;
  let mfaEnabled;
  let mfaLevel;
  let showApplicationAccountLink;
  let startApplicationAccountLinkAuthorization;
  let tmp11;
  let tmp6;
  let tmp8;
  _require = id;
  const obj = require("react");
  const cResult = obj.c(25);
  id = id.id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildProgressStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id) {
    const fn = function p() {
      return GuildProgressStore.hasProgress(id);
    };
    cResult[1] = id;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const currentUser = UserStore.getCurrentUser();
    cResult[3] = currentUser;
    tmp8 = currentUser;
  } else {
    tmp8 = cResult[3];
  }
  dependencyMap = tmp8;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildChannelStore];
    cResult[4] = items1;
    tmp11 = items1;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === id.mfaLevel) {
    let tmp13;
    let tmp14;
    let tmp18;
    let tmp28;
    if (cResult[6] === id) {
      tmp13 = cResult[7];
      tmp14 = cResult[8];
    }
    const tmpResult5 = require("useStateFromStores");
    const stateFromStores1 = tmpResult5.useStateFromStores(tmp11, tmp13, tmp14);
    const tmpResult6 = require("useGuildHasLiveChannelNotice");
    const guildHasLiveChannelNotice = tmpResult6.useGuildHasLiveChannelNotice(id);
    const tmpResult7 = require("useGameClaimCoachmark");
    const canShowGameClaimCoachmark = tmpResult7.useCanShowGameClaimCoachmark(id);
    if (cResult[9] !== canShowGameClaimCoachmark) {
      let items3;
      if (canShowGameClaimCoachmark) {
        const items2 = [require("dismissible_content").DismissibleContent.GAME_CLAIM_COACHMARK];
        items3 = items2;
      } else {
        items3 = [];
      }
      cResult[9] = canShowGameClaimCoachmark;
      cResult[10] = items3;
      tmp18 = items3;
    } else {
      tmp18 = cResult[10];
    }
    const tmpResult8 = require("useSelectedDismissibleContent");
    const tmp24 = _slicedToArray(tmpResult8.useSelectedSingleUseGuildDismissibleContent(tmp18, id, constants3.CHANNEL_NOTICES, true), 2);
    if (cResult[11] !== id) {
      const obj2 = { guildId: id };
      cResult[11] = id;
      cResult[12] = obj2;
      tmp28 = obj2;
    } else {
      tmp28 = cResult[12];
    }
    ({ showApplicationAccountLink, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization } = closure_13(tmp28));
    closure_13(tmp28);
    class S {
      constructor() {
        const result = null != mfaEnabled && mfaLevel.mfaLevel === MFALevels.ELEVATED && !mfaEnabled.mfaEnabled && GuildChannelStore.hasElevatedPermissions(id);
        return result;
      }
    }
    if (cResult[13] === stateFromStores) {
      if (cResult[14] === guildHasLiveChannelNotice) {
        if (cResult[15] === showApplicationAccountLink) {
          if (cResult[16] === null != tmp24[0]) {
            let tmp32;
            if (cResult[17] === stateFromStores1) {
              tmp32 = cResult[18];
            }
            if (cResult[19] === tmp31) {
              if (cResult[20] === applicationAccountLinkMarkAsDismissed) {
                if (cResult[21] === tmp24[1]) {
                  if (cResult[22] === tmp32) {
                    let tmp39;
                    if (cResult[23] === startApplicationAccountLinkAuthorization) {
                      tmp39 = cResult[24];
                    }
                    return tmp39;
                  }
                }
              }
            }
            const obj3 = { rows: tmp32, gameClaimMarkAsDismissed: tmp24[1], applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication: tmp31 };
            cResult[19] = tmp31;
            cResult[20] = applicationAccountLinkMarkAsDismissed;
            cResult[21] = tmp24[1];
            cResult[22] = tmp32;
            cResult[23] = startApplicationAccountLinkAuthorization;
            cResult[24] = obj3;
            tmp39 = obj3;
          }
        }
      }
    }
    const items4 = [constants.SPACER];
    if (null != tmp24[0]) {
      items4.push(constants.GAME_CLAIM);
    }
    if (showApplicationAccountLink) {
      items4.push(constants.APPLICATION_ACCOUNT_LINK);
    }
    if (stateFromStores) {
      items4.push(constants.GUILD_PROGRESS);
    } else if (stateFromStores1) {
      items4.push(constants.MFA_WARNING);
    }
    if (guildHasLiveChannelNotice) {
      items4.push(constants.LIVE_CHANNEL_NOTICE);
    }
    cResult[13] = stateFromStores;
    cResult[14] = guildHasLiveChannelNotice;
    cResult[15] = showApplicationAccountLink;
    cResult[16] = null != tmp24[0];
    cResult[17] = stateFromStores1;
    cResult[18] = items4;
    tmp32 = items4;
  }
  class S {
    constructor() {
      const result = null != mfaEnabled && mfaLevel.mfaLevel === MFALevels.ELEVATED && !mfaEnabled.mfaEnabled && GuildChannelStore.hasElevatedPermissions(id);
      return result;
    }
  }
  const items5 = [tmp8, id.mfaLevel, id];
  cResult[5] = id.mfaLevel;
  cResult[6] = id;
  cResult[7] = S;
  cResult[8] = items5;
  tmp14 = items5;
  tmp13 = S;
}) : ((id) => {
  let accountLinkApplication;
  let applicationAccountLinkMarkAsDismissed;
  let guildHasLiveChannelNotice;
  let items4;
  let items5;
  let mfaLevel;
  let startApplicationAccountLinkAuthorization;
  let stateFromStores;
  _require = id;
  id = id.id;
  let items = [guildHasLiveChannelNotice];
  const obj = require("useStateFromStores");
  const tmp2 = stateFromStores;
  stateFromStores = obj.useStateFromStores(items, () => GuildProgressStore.hasProgress(id));
  const currentUser = UserStore.getCurrentUser();
  const items1 = [closure_6];
  const items2 = [currentUser, id.mfaLevel, id];
  const obj2 = require("useStateFromStores");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const result = null != currentUser && mfaLevel.mfaLevel === MFALevels.ELEVATED && !currentUser.mfaEnabled && GuildChannelStore.hasElevatedPermissions(id);
    return result;
  }, items2);
  const obj3 = require("useGuildHasLiveChannelNotice");
  guildHasLiveChannelNotice = obj3.useGuildHasLiveChannelNotice(id);
  const obj4 = require("useGameClaimCoachmark");
  const canShowGameClaimCoachmark = obj4.useCanShowGameClaimCoachmark(id);
  const useSelectedSingleUseGuildDismissibleContent = require("useSelectedDismissibleContent").useSelectedSingleUseGuildDismissibleContent;
  require("useSelectedDismissibleContent");
  const tmp = _require;
  if (canShowGameClaimCoachmark) {
    const items3 = [tmp(tmp2[15]).DismissibleContent.GAME_CLAIM_COACHMARK];
    items4 = items3;
  } else {
    items4 = [];
  }
  const tmp9 = currentUser(useSelectedSingleUseGuildDismissibleContent(items4, id, constants3.CHANNEL_NOTICES, true), 2);
  closure_6 = tmp11;
  const tmp10 = tmp9[1];
  const tmp12 = closure_13({ guildId: id });
  const showApplicationAccountLink = tmp12.showApplicationAccountLink;
  const obj5 = {
    rows: stateFromStores1.useMemo(() => {
      const items = [constants.SPACER];
      if (closure_6) {
        items.push(constants.GAME_CLAIM);
      }
      if (showApplicationAccountLink) {
        items.push(constants.APPLICATION_ACCOUNT_LINK);
      }
      if (stateFromStores) {
        items.push(constants.GUILD_PROGRESS);
      } else if (stateFromStores1) {
        items.push(constants.MFA_WARNING);
      }
      if (guildHasLiveChannelNotice) {
        items.push(constants.LIVE_CHANNEL_NOTICE);
      }
      return items;
    }, items5),
    gameClaimMarkAsDismissed: tmp10,
    applicationAccountLinkMarkAsDismissed,
    startApplicationAccountLinkAuthorization,
    accountLinkApplication
  };
  items5 = [stateFromStores, stateFromStores1, guildHasLiveChannelNotice, null != tmp9[0], showApplicationAccountLink];
  ({ applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication } = tmp12);
  return obj5;
});
let result = size.fileFinishedImporting("modules/guild_sidebar/native/useChannelNoticeRows.tsx");

export default tmp3;