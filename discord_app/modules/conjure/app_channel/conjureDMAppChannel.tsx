// === Module 6878: conjureDMAppChannel ===

// Module 6878 (conjureDMAppChannel)
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6879 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 6883 */;
import ApplicationStore from "ApplicationStore" /* 2038 */;
import GuildStore from "GuildStore" /* 4885 */;
import UserStore from "UserStore" /* 1383 */;

const require = globalThis.__r;

require = fn;
const Constants = fn(1072);
({ ApplicationFlags: hasOwnProperty, ChannelTypes: metroRequire } = Constants);
const DMAppChannel = "DMAppChannel";
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_channel/conjureDMAppChannel.tsx");

export function useDMAppChannelApplicationId(stateFromStores) {
  _require = stateFromStores;
  const items = [UserStore];
  const items1 = [stateFromStores];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    let type;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    if (type === constants2.DM) {
      if (!stateFromStores.isSystemDM()) {
        const user = UserStore.getUser(stateFromStores.getRecipientId());
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
    tmpResult = tmp(6883);
  }
  return id;
}
export function isDMAppChannel(channel) {
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
}