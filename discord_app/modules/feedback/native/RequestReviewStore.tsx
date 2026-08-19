// discord_app/modules/feedback/native/RequestReviewStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import Storage2 from "../../../../discord_common/js/packages/storage/Storage.tsx";
import keys from "../../../ConstantsIOS.tsx";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import coerceMainRoute from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import getRootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import sleep from "../../../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import useKeyboardIsOpen from "../../keyboard/native/useKeyboardIsOpen.tsx";
import apexExperiment from "RequestReviewNoTTIExperiment.tsx";
import _showAndroidRatingRequestDefault from "requestReviewModal.tsx";
import getFirstInstallTimeMillis from "../../install/native/InstallTime.tsx";
import getHash from "../../experiments/ExperimentStore.tsx";
import initialize from "../../experiments/apex/ApexExperimentStore.tsx";
import handleConnectionOpen from "../../../stores/SelectedChannelStore.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";

require = fn;
function showReviewRequestModal() {
  const rootNavigationRef = getRootNavigationRef.getRootNavigationRef();
  let tmp3 = null != rootNavigationRef && rootNavigationRef.isReady();
  if (tmp3) {
    let tmpResult = coerceMainRoute;
    tmp3 = null != tmpResult.coerceGuildsRoute(rootNavigationRef.getCurrentRoute());
  }
  tmpResult = useKeyboardIsOpen;
  const keyboardIsOpen = tmpResult.getKeyboardIsOpen();
  const tmp5 = null != voiceChannelId.getVoiceChannelId();
  if (tmp3) {
    if (!keyboardIsOpen) {
      if (!tmp5) {
        expandEventPropertiesDefault.track(AnalyticEvents.REVIEW_REQUEST_SHOW_ATTEMPTED);
        closure_9.revision = 1;
        const Storage = Storage2.Storage;
        const result = Storage.set(RequestReviewStore, closure_9);
        _showAndroidRatingRequestDefault();
        c10 = false;
      }
    }
  }
  expandEventPropertiesDefault.track(AnalyticEvents.REVIEW_REQUEST_DEFERRED, { is_keyboard_open: keyboardIsOpen, is_in_voice: tmp5, is_viewing_chat: tmp3 });
  if (-1 !== timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
    timeout = -1;
  }
  const RequestReviewNoTTIExperiment = apexExperiment.RequestReviewNoTTIExperiment;
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
    timeout = setTimeout(showReviewRequestModal, sleep.MS_PER_MINUTE);
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
    let obj = { from: "authed", unit: sleep.TimeUnits.DAYS };
    let tmp3 = obj.getFirstInstallTimeElapsed(obj) >= 10;
    const someResult = guilds.some((item, index) => item.member_count >= 5);
    if (revision.revision < 1) {
      obj = { is_hfu: true, is_install_old_enough: null, is_in_large_enough_guild: null, is_account_verified: null };
      obj[1] = tmp3;
      obj[2] = someResult;
      obj[3] = tmp5;
      expandEventPropertiesDefault.track(AnalyticEvents.REVIEW_REQUEST_ELIGIBILITY_CHECKED, obj);
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
    const RequestReviewNoTTIExperiment = apexExperiment.RequestReviewNoTTIExperiment;
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
      timeout = setTimeout(showReviewRequestModal, sleep.MS_PER_MINUTE);
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
      const RequestReviewNoTTIExperiment = apexExperiment.RequestReviewNoTTIExperiment;
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
        timeout = setTimeout(showReviewRequestModal, sleep.MS_PER_MINUTE);
      }
    } else if (-1 !== timeout) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(timeout);
      timeout = -1;
    }
  }
});
let result = require("obj132").fileFinishedImporting("modules/feedback/native/RequestReviewStore.tsx");

export default requestReviewStore;