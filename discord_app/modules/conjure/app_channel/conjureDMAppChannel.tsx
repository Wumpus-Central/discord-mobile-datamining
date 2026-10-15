// === Module 6282: conjureDMAppChannel ===

// Module 6282 (conjureDMAppChannel)
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6283 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 6286 */;
import ApplicationStore from "ApplicationStore" /* 5500 */;
import GuildStore from "GuildStore" /* 2087 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

require = fn;
const Constants = fn(1085);
({ ApplicationFlags: hasOwnProperty, ChannelTypes: metroRequire } = Constants);
const DMAppChannel = "DMAppChannel";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_channel/conjureDMAppChannel.tsx");

export const useDMAppChannelApplicationId = ReactCompilerGating.isReactCompilerEnabled() ? (function useDMAppChannelApplicationId(arg0) {
  _require = arg0;
  const cResult = require("c").c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      let type;
      if (closure_0 != null) {
        type = closure_0.type;
      }
      if (type === constants2.DM) {
        if (!closure_0.isSystemDM()) {
          const user = UserStore.getUser(closure_0.getRecipientId());
          let bot;
          if (user != null) {
            bot = user.bot;
          }
          let id = null;
          if (true === bot) {
            id = user.id;
          }
          return id;
        }
      }
      return null;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] !== (null != stateFromStores)) {
    const obj2 = { autoTrackExposure: tmp9 };
    cResult[4] = tmp9;
    cResult[5] = obj2;
    let tmp10 = obj2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult = require("initialize");
  const hasConjureGuild = require("ConjureGuildExperiment").useHasConjureGuild(DMAppChannel, tmp10);
  const tmpResult4 = require("ConjureGuildExperiment");
  let tmp12 = null;
  if (hasConjureGuild) {
    tmp12 = stateFromStores;
  }
  const data = require("ApplicationActionCreators").useApplication(tmp12).data;
  if (cResult[6] !== data) {
    let id = null;
    if (null != data) {
      id = null;
      if (tmpResult6.hasApplicationFlag(data, constants.DM_OPENS_ACTIVITY)) {
        id = data.id;
      }
      tmpResult6 = tmp(6286);
    }
    cResult[6] = data;
    cResult[7] = id;
    let tmp13 = id;
  } else {
    tmp13 = cResult[7];
  }
  return tmp13;
}) : (function useDMAppChannelApplicationId(arg0) {
  _require = arg0;
  const items = [UserStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let type;
    if (closure_0 != null) {
      type = closure_0.type;
    }
    if (type === constants2.DM) {
      if (!closure_0.isSystemDM()) {
        const user = UserStore.getUser(closure_0.getRecipientId());
        let bot;
        if (user != null) {
          bot = user.bot;
        }
        let id = null;
        if (true === bot) {
          id = user.id;
        }
        return id;
      }
    }
    return null;
  }, items1);
  const obj = require("initialize");
  const tmp = _require;
  const hasConjureGuild = require("ConjureGuildExperiment").useHasConjureGuild(DMAppChannel, { autoTrackExposure: null != stateFromStores });
  const obj2 = require("ConjureGuildExperiment");
  const obj3 = { autoTrackExposure: null != stateFromStores };
  let tmp5 = null;
  if (hasConjureGuild) {
    tmp5 = stateFromStores;
  }
  const data = require("ApplicationActionCreators").useApplication(tmp5).data;
  let id = null;
  if (null != data) {
    id = null;
    if (tmpResult.hasApplicationFlag(data, constants.DM_OPENS_ACTIVITY)) {
      id = data.id;
    }
    tmpResult = tmp(6286);
  }
  return id;
});
export const isDMAppChannel = function isDMAppChannel(channel) {
  if (channel.type === constants2.DM) {
    if (!channel.isSystemDM()) {
      const user = UserStore.getUser(channel.getRecipientId());
      let bot;
      if (user != null) {
        bot = user.bot;
      }
      if (true === bot) {
        const _Object = Object;
        if (obj2.hasConjureGuild(Object.values(GuildStore.getGuilds()), DMAppChannel)) {
          let id = ApplicationStore.getAppIdForBotUserId(user.id);
          if (id == null) {
            id = user.id;
          }
          const application = ApplicationStore.getApplication(id);
          return ApplicationFlagUtils.hasApplicationFlag(application, constants.DM_OPENS_ACTIVITY);
        }
        obj2 = ConjureGuildExperiment;
      }
      return false;
    }
  }
  return false;
};