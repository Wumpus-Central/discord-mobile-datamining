// === Module 15672: useConjureBotApplication ===

// Module 15672 (useConjureBotApplication)
import ApplicationStore from "ApplicationStore" /* 2165 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/bot_profile/useConjureBotApplication.tsx");

export default function useConjureBotApplication(autoTrackExposure, DMAppChannel) {
  _require = autoTrackExposure;
  hasConjureGuild = require("ConjureGuildExperiment").useHasConjureGuild(DMAppChannel, { autoTrackExposure: autoTrackExposure.bot });
  const obj = require("ConjureGuildExperiment");
  const obj2 = { autoTrackExposure: autoTrackExposure.bot };
  items = [ApplicationStore];
  const items1 = [hasConjureGuild, , ];
  ({ bot: arr2[1], id: arr2[2] } = autoTrackExposure);
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let tmp = null;
    if (hasConjureGuild) {
      tmp = null;
      if (autoTrackExposure.bot) {
        let id = ApplicationStore.getAppIdForBotUserId(autoTrackExposure.id);
        if (id == null) {
          id = autoTrackExposure.id;
        }
        tmp = id;
      }
    }
    return tmp;
  }, items1);
  const obj3 = require("initialize");
  const data = require("ApplicationActionCreators").useApplication(stateFromStores).data;
  let conjureProjectId;
  if (data != null) {
    conjureProjectId = data.conjureProjectId;
  }
  let tmp4 = null;
  if (null != conjureProjectId) {
    tmp4 = data;
  }
  return tmp4;
};