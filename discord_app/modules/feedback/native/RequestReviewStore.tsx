// discord_app/modules/feedback/native/RequestReviewStore.tsx
import getHash from "getHash";
import initialize from "initialize";
import handleConnectionOpen from "handleConnectionOpen";
import { AnalyticEvents } from "ME";
import { Store } from "initialize";

const require = arg1;
function showReviewRequestModal() {
  const rootNavigationRef = require(4137) /* getRootNavigationRef */.getRootNavigationRef();
  let tmp3 = null != rootNavigationRef && rootNavigationRef.isReady();
  if (tmp3) {
    let tmpResult = tmp(4136);
    tmp3 = null != tmpResult.coerceGuildsRoute(rootNavigationRef.getCurrentRoute());
  }
  tmpResult = tmp(5913);
  const keyboardIsOpen = tmpResult.getKeyboardIsOpen();
  const tmp5 = null != voiceChannelId.getVoiceChannelId();
  if (tmp3) {
    if (!keyboardIsOpen) {
      if (!tmp5) {
        importDefault(698).track(AnalyticEvents.REVIEW_REQUEST_SHOW_ATTEMPTED);
        closure_9.revision = 1;
        const Storage = tmp(595).Storage;
        const result = Storage.set(RequestReviewStore, closure_9);
        importDefault(12866)();
        let c10 = false;
        const obj5 = importDefault(698);
      }
    }
  }
  const obj = require(4137) /* getRootNavigationRef */;
  importDefault(698).track(AnalyticEvents.REVIEW_REQUEST_DEFERRED, { is_keyboard_open: keyboardIsOpen, is_in_voice: tmp5, is_viewing_chat: tmp3 });
  if (-1 !== timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
    timeout = -1;
  }
  const RequestReviewNoTTIExperiment = tmp(12865).RequestReviewNoTTIExperiment;
  let skipTTICheck = RequestReviewNoTTIExperiment.getConfig({ location: "RequestReviewStore" }).skipTTICheck;
  let tmp18 = c10;
  if (c10) {
    if (!skipTTICheck) {
      let tmp20 = undefined !== closure_3;
      if (tmp20) {
        tmp20 = tmp19 < 2300;
      }
      skipTTICheck = tmp20;
    }
    tmp18 = skipTTICheck;
  }
  if (tmp18) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(showReviewRequestModal, tmp(4360).MS_PER_MINUTE);
  }
}
function handleConnectionClosedOrInterrupted() {
  if (-1 !== c11) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c11);
    c11 = -1;
  }
}
const RequestReviewStore = "RequestReviewStore";
let closure_9 = { revision: 0 };
let c10 = false;
let c11 = -1;
class RequestReviewStore extends Store {
}
RequestReviewStore.prototype["initialize"] = function initialize() {
  const Storage = require(595) /* Storage */.Storage;
  let obj = Storage.get(RequestReviewStore);
  if (obj == null) {
    obj = { revision: 0 };
  }
  this.waitFor(initialize, getHash, handleConnectionOpen);
};
RequestReviewStore.displayName = "RequestReviewStore";
const requestReviewStore = new RequestReviewStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    guilds = guilds.guilds;
    let obj = require(12868) /* getFirstInstallTimeMillis */;
    obj = { from: "authed", unit: require(4360) /* sleep */.TimeUnits.DAYS };
    let tmp3 = obj.getFirstInstallTimeElapsed(obj) >= 10;
    const someResult = guilds.some((member_count) => member_count.member_count >= 5);
    if (revision.revision < 1) {
      obj = { is_hfu: true, is_install_old_enough: null, is_in_large_enough_guild: null, is_account_verified: null };
      obj[1] = tmp3;
      obj[2] = someResult;
      obj[3] = tmp5;
      importDefault(698).track(AnalyticEvents.REVIEW_REQUEST_ELIGIBILITY_CHECKED, obj);
      const obj3 = importDefault(698);
    }
    if (tmp3) {
      tmp3 = tmp5;
    }
    if (tmp3) {
      tmp3 = someResult;
    }
    if (tmp3) {
      tmp3 = tmp6;
    }
    let c10 = tmp3;
    if (-1 !== timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
      timeout = -1;
    }
    const RequestReviewNoTTIExperiment = tmp(12865).RequestReviewNoTTIExperiment;
    let skipTTICheck = RequestReviewNoTTIExperiment.getConfig({ location: "RequestReviewStore" }).skipTTICheck;
    let tmp13 = c10;
    if (c10) {
      if (!skipTTICheck) {
        let tmp15 = undefined !== closure_3;
        if (tmp15) {
          tmp15 = tmp14 < 2300;
        }
        skipTTICheck = tmp15;
      }
      tmp13 = skipTTICheck;
    }
    if (tmp13) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(showReviewRequestModal, tmp(4360).MS_PER_MINUTE);
    }
  },
  CONNECTION_RESUMED: function handleConnectionResumed() {
    if (-1 !== timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
      timeout = -1;
    }
    const RequestReviewNoTTIExperiment = require(12865) /* apexExperiment */.RequestReviewNoTTIExperiment;
    let skipTTICheck = RequestReviewNoTTIExperiment.getConfig({ location: "RequestReviewStore" }).skipTTICheck;
    let tmp6 = c10;
    if (c10) {
      if (!skipTTICheck) {
        let tmp8 = undefined !== closure_3;
        if (tmp8) {
          tmp8 = tmp7 < 2300;
        }
        skipTTICheck = tmp8;
      }
      tmp6 = skipTTICheck;
    }
    if (tmp6) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(showReviewRequestModal, require(4360) /* sleep */.MS_PER_MINUTE);
    }
  },
  CONNECTION_CLOSED: handleConnectionClosedOrInterrupted,
  CONNECTION_INTERRUPTED: handleConnectionClosedOrInterrupted,
  TTI_RECORDED: function handleTTIRecorded(tti) {
    tti = tti.tti;
    if (-1 !== timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
      timeout = -1;
    }
    const RequestReviewNoTTIExperiment = require(12865) /* apexExperiment */.RequestReviewNoTTIExperiment;
    let skipTTICheck = RequestReviewNoTTIExperiment.getConfig({ location: "RequestReviewStore" }).skipTTICheck;
    let tmp6 = c10;
    if (c10) {
      if (!skipTTICheck) {
        let tmp8 = undefined !== tti;
        if (tmp8) {
          tmp8 = tmp7 < 2300;
        }
        skipTTICheck = tmp8;
      }
      tmp6 = skipTTICheck;
    }
    if (tmp6) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(showReviewRequestModal, require(4360) /* sleep */.MS_PER_MINUTE);
    }
  },
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    if (state.state === require(691) /* keys */.AppStates.ACTIVE) {
      if (-1 !== timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(timeout);
        timeout = -1;
      }
      const RequestReviewNoTTIExperiment = tmp(12865).RequestReviewNoTTIExperiment;
      let skipTTICheck = RequestReviewNoTTIExperiment.getConfig({ location: "RequestReviewStore" }).skipTTICheck;
      let tmp8 = c10;
      if (c10) {
        if (!skipTTICheck) {
          let tmp10 = undefined !== closure_3;
          if (tmp10) {
            tmp10 = tmp9 < 2300;
          }
          skipTTICheck = tmp10;
        }
        tmp8 = skipTTICheck;
      }
      if (tmp8) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(showReviewRequestModal, tmp(4360).MS_PER_MINUTE);
      }
    } else if (-1 !== timeout) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(timeout);
      timeout = -1;
    }
  }
});
let result = require("handleConnectionOpen").fileFinishedImporting("modules/feedback/native/RequestReviewStore.tsx");

export default requestReviewStore;