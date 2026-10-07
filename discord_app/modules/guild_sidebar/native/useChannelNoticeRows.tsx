// === Module 16235: useChannelNoticeRows ===

// Module 16235 (useChannelNoticeRows)
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4704 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildProgressStore from "GuildProgressStore" /* 12146 */;
import GuildChannelStore from "GuildChannelStore" /* 4513 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;

require = fn;
const constants = fn(7058).ChannelListChannelNoticeRow;
const MFALevels = fn(1085).MFALevels;
const DismissibleContentConstants = fn(2048);
({ ContentDismissActionType: closure_11, DismissibleContentGroupName: closure_12 } = DismissibleContentConstants);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(576).c(14);
  guildId = guildId.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function c() {
      guild = GuildStore.getGuild(guildId);
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
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = guildId(576);
  const tmpResult = guildId(573);
  const tmp7 = hasAlreadyLinked(6667)(guildId(6665).useApplication(tmpResult.useStateFromStoresArray(first, tmp6)[0]).data);
  ({ fetched, hasAlreadyLinked } = tmp7);
  ({ connectionApp, canStartAuthorization, startAuthorization } = tmp7);
  const tmpResult4 = guildId(6665);
  const defaultAuthorizationNotifiers = guildId(16236).useDefaultAuthorizationNotifiers(startAuthorization, hasAlreadyLinked);
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
    if (fetched) {
      const items1 = [tmp(2036).DismissibleContent.MOBILE_ACCOUNT_LINKING_BANNER];
      let items2 = items1;
    } else {
      items2 = [];
    }
    cResult[3] = fetched;
    cResult[4] = items2;
  } else {
    const tmpResult6 = tmp(6901);
    const tmp20 = _slicedToArray(tmpResult6.useSelectedSingleUseGuildDismissibleContent(cResult[4], guildId, constants3.CHANNEL_NOTICES, true), 2);
    if (cResult[5] === guildId) {
      if (cResult[6] === hasAlreadyLinked) {
        let tmp24 = cResult[7];
        let tmp25 = cResult[8];
      }
      const effect = noop.useEffect(tmp24, tmp25);
      if (cResult[9] === connectionApp) {
        if (cResult[10] === tmp21) {
          if (cResult[11] === tmp23) {
            if (cResult[12] === defaultAuthorizationNotifiers) {
              let tmp28 = cResult[13];
            }
            return tmp28;
          }
        }
      }
      let obj2 = { showApplicationAccountLink: tmp23, applicationAccountLinkMarkAsDismissed: tmp21, startApplicationAccountLinkAuthorization: defaultAuthorizationNotifiers, accountLinkApplication: connectionApp };
      cResult[9] = connectionApp;
      cResult[10] = tmp21;
      class G {
        constructor() {
          if (hasAlreadyLinked) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[17]);
            tmp3 = guildId;
            obj1 = { dismissAction: null, guildId: null, groupName: null };
            tmp4 = ContentDismissActionType;
            obj1.dismissAction = ContentDismissActionType.INDIRECT_ACTION;
            obj1.guildId = guildId;
            tmp5 = closure_12;
            obj1.groupName = closure_12.CHANNEL_NOTICES;
            result = obj.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(closure_0(closure_2[15]).DismissibleContent.MOBILE_ACCOUNT_LINKING_BANNER, guildId, obj1);
          }
          return;
        }
      }
      cResult[12] = defaultAuthorizationNotifiers;
      cResult[13] = obj2;
      tmp28 = obj2;
    }
    class G {
      constructor() {
        if (hasAlreadyLinked) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[17]);
          tmp3 = guildId;
          obj1 = { dismissAction: null, guildId: null, groupName: null };
          tmp4 = ContentDismissActionType;
          obj1.dismissAction = ContentDismissActionType.INDIRECT_ACTION;
          obj1.guildId = guildId;
          tmp5 = closure_12;
          obj1.groupName = closure_12.CHANNEL_NOTICES;
          result = obj.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(closure_0(closure_2[15]).DismissibleContent.MOBILE_ACCOUNT_LINKING_BANNER, guildId, obj1);
        }
        return;
      }
    }
    const items3 = [guildId, hasAlreadyLinked];
    cResult[5] = guildId;
    cResult[6] = hasAlreadyLinked;
    cResult[7] = G;
    cResult[8] = items3;
    tmp25 = items3;
    tmp24 = G;
  }
  const tmpResult5 = guildId(16236);
}) : ((guildId) => {
  guildId = guildId.guildId;
  hasAlreadyLinked = undefined;
  const items = [GuildStore];
  let obj = guildId(573);
  const tmp3 = hasAlreadyLinked(6667)(guildId(6665).useApplication(obj.useStateFromStoresArray(items, () => {
    guild = GuildStore.getGuild(guildId);
    let gameApplicationIds;
    if (guild != null) {
      gameApplicationIds = guild.gameApplicationIds;
    }
    if (gameApplicationIds == null) {
      gameApplicationIds = [];
    }
    return gameApplicationIds;
  })[0]).data);
  ({ fetched, hasAlreadyLinked } = tmp3);
  ({ connectionApp, canStartAuthorization, startAuthorization } = tmp3);
  let obj2 = guildId(6665);
  const defaultAuthorizationNotifiers = guildId(16236).useDefaultAuthorizationNotifiers(startAuthorization, hasAlreadyLinked);
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
  const obj3 = guildId(16236);
  if (fetched) {
    const items1 = [tmp(2036).DismissibleContent.MOBILE_ACCOUNT_LINKING_BANNER];
    let items2 = items1;
  } else {
    items2 = [];
  }
  const tmpResult = guildId(6901);
  const items3 = [guildId, hasAlreadyLinked];
  [tmp10, tmp11] = guildId(6901).useSelectedSingleUseGuildDismissibleContent(items2, guildId, constants3.CHANNEL_NOTICES, true);
  const effect = noop.useEffect(() => {
    if (hasAlreadyLinked) {
      const obj2 = { dismissAction: constants2.INDIRECT_ACTION, guildId, groupName: constants3.CHANNEL_NOTICES };
      const result = DismissibleContentUnsafeUtils.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(dismissible_content.DismissibleContent.MOBILE_ACCOUNT_LINKING_BANNER, guildId, obj2);
    }
  }, items3);
  return { showApplicationAccountLink: null != tmp10, applicationAccountLinkMarkAsDismissed: tmp11, startApplicationAccountLinkAuthorization: defaultAuthorizationNotifiers, accountLinkApplication: connectionApp };
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_sidebar/native/useChannelNoticeRows.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  _require = id;
  const cResult = require("c").c(25);
  id = id.id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildProgressStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id) {
    const fn = function p() {
      return GuildProgressStore.hasProgress(id);
    };
    cResult[1] = id;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const currentUser = UserStore.getCurrentUser();
    cResult[3] = currentUser;
    let tmp8 = currentUser;
  } else {
    tmp8 = cResult[3];
  }
  dependencyMap = tmp8;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildChannelStore];
    cResult[4] = items1;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === id.mfaLevel) {
    if (cResult[6] === id) {
      let tmp13 = cResult[7];
      let tmp14 = cResult[8];
    }
    const stateFromStores1 = tmp(573).useStateFromStores(tmp11, tmp13, tmp14);
    const tmpResult5 = tmp(573);
    const guildHasLiveChannelNotice = tmp(16148).useGuildHasLiveChannelNotice(id);
    const tmpResult6 = tmp(16148);
    const canShowGameClaimCoachmark = tmp(16237).useCanShowGameClaimCoachmark(id);
    if (cResult[9] !== canShowGameClaimCoachmark) {
      if (canShowGameClaimCoachmark) {
        const items2 = [tmp(2036).DismissibleContent.GAME_CLAIM_COACHMARK];
        let items3 = items2;
      } else {
        items3 = [];
      }
      cResult[9] = canShowGameClaimCoachmark;
      cResult[10] = items3;
    } else {
      const tmpResult8 = tmp(6901);
      const tmp25 = _slicedToArray(tmpResult8.useSelectedSingleUseGuildDismissibleContent(cResult[10], id, constants3.CHANNEL_NOTICES, true), 2);
      if (cResult[11] !== id) {
        const obj2 = { guildId: id };
        cResult[11] = id;
        cResult[12] = obj2;
        let tmp29 = obj2;
      } else {
        tmp29 = cResult[12];
      }
      ({ showApplicationAccountLink, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication } = closure_13(tmp29));
      if (cResult[13] === stateFromStores) {
        if (cResult[14] === guildHasLiveChannelNotice) {
          if (cResult[15] === showApplicationAccountLink) {
            if (cResult[16] === tmp28) {
              if (cResult[17] === stateFromStores1) {
                let tmp32 = cResult[18];
              }
              if (cResult[19] === accountLinkApplication) {
                if (cResult[20] === applicationAccountLinkMarkAsDismissed) {
                  if (cResult[21] === tmp26) {
                    if (cResult[22] === tmp32) {
                      if (cResult[23] === startApplicationAccountLinkAuthorization) {
                        let tmp37 = cResult[24];
                      }
                      return tmp37;
                    }
                  }
                }
              }
              const obj3 = { rows: tmp32, gameClaimMarkAsDismissed: tmp26, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication };
              cResult[19] = accountLinkApplication;
              cResult[20] = applicationAccountLinkMarkAsDismissed;
              cResult[21] = tmp26;
              cResult[22] = tmp32;
              cResult[23] = startApplicationAccountLinkAuthorization;
              cResult[24] = obj3;
              tmp37 = obj3;
            }
          }
        }
      }
      const items4 = [constants.SPACER];
      if (null != tmp25[0]) {
        items4.push(constants.GAME_CLAIM);
      }
      if (showApplicationAccountLink) {
        items4.push(constants.APPLICATION_ACCOUNT_LINK);
      }
      class S {
        constructor() {
          result = null != closure_2;
          tmp = closure_2;
          if (result) {
            tmp3 = closure_0;
            tmp4 = MFALevels;
            result = closure_0.mfaLevel === MFALevels.ELEVATED;
          }
          if (result) {
            result = !tmp.mfaEnabled;
          }
          if (result) {
            tmp5 = closure_6;
            tmp6 = id;
            result = closure_6.hasElevatedPermissions(id);
          }
          return result;
        }
      }
      if (guildHasLiveChannelNotice) {
        items4.push(constants.LIVE_CHANNEL_NOTICE);
      }
      cResult[13] = stateFromStores;
      cResult[14] = guildHasLiveChannelNotice;
      cResult[15] = showApplicationAccountLink;
      cResult[16] = null != tmp25[0];
      cResult[17] = stateFromStores1;
      cResult[18] = items4;
      tmp32 = items4;
      const tmp31 = closure_13(tmp29);
    }
    const tmpResult7 = tmp(16237);
  }
  class S {
    constructor() {
      result = null != closure_2;
      tmp = closure_2;
      if (result) {
        tmp3 = closure_0;
        tmp4 = MFALevels;
        result = closure_0.mfaLevel === MFALevels.ELEVATED;
      }
      if (result) {
        result = !tmp.mfaEnabled;
      }
      if (result) {
        tmp5 = closure_6;
        tmp6 = id;
        result = closure_6.hasElevatedPermissions(id);
      }
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
  const tmpResult = require("useStateFromStores");
}) : ((id) => {
  _require = id;
  id = id.id;
  let items = [guildHasLiveChannelNotice];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => GuildProgressStore.hasProgress(id));
  const currentUser = UserStore.getCurrentUser();
  const obj = require("useStateFromStores");
  const tmp = _require;
  const tmp2 = stateFromStores;
  const items1 = [closure_6];
  const items2 = [currentUser, id.mfaLevel, id];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => {
    let result = null != currentUser;
    if (result) {
      result = mfaLevel.mfaLevel === MFALevels.ELEVATED;
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
    const items3 = [tmp(tmp2[15]).DismissibleContent.GAME_CLAIM_COACHMARK];
    let items4 = items3;
  } else {
    items4 = [];
  }
  const tmp8 = currentUser(require("useSelectedDismissibleContent").useSelectedSingleUseGuildDismissibleContent(items4, id, constants3.CHANNEL_NOTICES, true), 2);
  closure_6 = tmp9;
  const tmp10 = closure_13({ guildId: id });
  const showApplicationAccountLink = tmp10.showApplicationAccountLink;
  const obj6 = { rows: null, gameClaimMarkAsDismissed: tmp8[1], applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication };
  const items5 = [stateFromStores, stateFromStores1, guildHasLiveChannelNotice, null != tmp8[0], showApplicationAccountLink];
  ({ applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication } = tmp10);
  obj6.rows = stateFromStores1.useMemo(() => {
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
  }, items5);
  return obj6;
});