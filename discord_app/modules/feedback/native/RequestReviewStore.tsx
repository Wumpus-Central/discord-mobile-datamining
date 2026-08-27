// === Module 13261: showReviewRequestModal ===

// Module 13261 (showReviewRequestModal)
import initializeDefault from "initialize" /* 589 */;
import Storage2 from "Storage" /* 595 */;
import keys from "keys" /* 691 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4300 */;
import sleep from "sleep" /* 4523 */;
import apexExperiment from "apexExperiment" /* 13262 */;
import _showAndroidRatingRequestDefault from "_showAndroidRatingRequest" /* 13263 */;
import getFirstInstallTimeMillis from "getFirstInstallTimeMillis" /* 13265 */;
import closure_4 from "getHash" /* 4358 */;
import closure_5 from "initialize" /* 1212 */;
import closure_6 from "handleConnectionOpen" /* 1981 */;
import { AnalyticEvents } from "ME" /* 676 */;

require = arg1;
function showReviewRequestModal() {
  const rootNavigationRef = getRootNavigationRef.getRootNavigationRef();
  let tmp3 = null != rootNavigationRef && rootNavigationRef.isReady();
  if (tmp3) {
    let tmpResult = tmp(4299);
    tmp3 = null != tmpResult.coerceGuildsRoute(rootNavigationRef.getCurrentRoute());
  }
  tmpResult = tmp(6185);
  const keyboardIsOpen = tmpResult.getKeyboardIsOpen();
  const tmp5 = null != voiceChannelId.getVoiceChannelId();
  if (tmp3) {
    if (!keyboardIsOpen) {
      if (!tmp5) {
        expandEventPropertiesDefault.track(AnalyticEvents.REVIEW_REQUEST_SHOW_ATTEMPTED);
        closure_9.revision = 1;
        const Storage = tmp(595).Storage;
        const result = Storage.set(RequestReviewStore, closure_9);
        _showAndroidRatingRequestDefault();
        c10 = false;
        const obj5 = expandEventPropertiesDefault;
      }
    }
  }
  const obj = getRootNavigationRef;
  expandEventPropertiesDefault.track(AnalyticEvents.REVIEW_REQUEST_DEFERRED, { is_keyboard_open: keyboardIsOpen, is_in_voice: tmp5, is_viewing_chat: tmp3 });
  if (-1 !== timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
    timeout = -1;
  }
  const RequestReviewNoTTIExperiment = tmp(13262).RequestReviewNoTTIExperiment;
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
    timeout = setTimeout(showReviewRequestModal, tmp(4523).MS_PER_MINUTE);
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
const Store = initializeDefault.Store;
class RequestReviewStore extends Store {
}
RequestReviewStore.prototype["initialize"] = function initialize() {
  const Storage = Storage2.Storage;
  let obj = Storage.get(RequestReviewStore);
  if (obj == null) {
    obj = { revision: 0 };
  }
  this.waitFor(closure_5, closure_4, closure_6);
};
RequestReviewStore.displayName = "RequestReviewStore";
const requestReviewStore = new RequestReviewStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    guilds = guilds.guilds;
    let obj = getFirstInstallTimeMillis;
    obj = { from: "authed", unit: sleep.TimeUnits.DAYS };
    let tmp3 = obj.getFirstInstallTimeElapsed(obj) >= 10;
    const someResult = guilds.some((member_count) => member_count.member_count >= 5);
    if (revision.revision < 1) {
      obj = { is_hfu: true, is_install_old_enough: null, is_in_large_enough_guild: null, is_account_verified: null };
      obj[1] = tmp3;
      obj[2] = someResult;
      obj[3] = tmp5;
      expandEventPropertiesDefault.track(AnalyticEvents.REVIEW_REQUEST_ELIGIBILITY_CHECKED, obj);
      const obj3 = expandEventPropertiesDefault;
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
    closure_10 = tmp3;
    if (-1 !== timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
      timeout = -1;
    }
    const RequestReviewNoTTIExperiment = tmp(13262).RequestReviewNoTTIExperiment;
    let skipTTICheck = RequestReviewNoTTIExperiment.getConfig({ location: "RequestReviewStore" }).skipTTICheck;
    let tmp13 = closure_10;
    if (closure_10) {
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
      timeout = setTimeout(showReviewRequestModal, tmp(4523).MS_PER_MINUTE);
    }
  },
  CONNECTION_RESUMED: function handleConnectionResumed() {
    if (-1 !== timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
      timeout = -1;
    }
    const RequestReviewNoTTIExperiment = apexExperiment.RequestReviewNoTTIExperiment;
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
      timeout = setTimeout(showReviewRequestModal, sleep.MS_PER_MINUTE);
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
    const RequestReviewNoTTIExperiment = apexExperiment.RequestReviewNoTTIExperiment;
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
      timeout = setTimeout(showReviewRequestModal, sleep.MS_PER_MINUTE);
    }
  },
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    if (state.state === keys.AppStates.ACTIVE) {
      if (-1 !== timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(timeout);
        timeout = -1;
      }
      const RequestReviewNoTTIExperiment = tmp(13262).RequestReviewNoTTIExperiment;
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
        timeout = setTimeout(showReviewRequestModal, tmp(4523).MS_PER_MINUTE);
      }
    } else if (-1 !== timeout) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(timeout);
      timeout = -1;
    }
  }
});
let result = require("set").fileFinishedImporting("modules/feedback/native/RequestReviewStore.tsx");

export default requestReviewStore;