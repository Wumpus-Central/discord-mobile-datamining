// discord_app/modules/feedback/native/RequestReviewStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import Storage2 from "../../../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import TimeUtils from "../../../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import RequestReviewNoTTIExperiment2 from "RequestReviewNoTTIExperiment.tsx";
import requestReviewModalDefault from "requestReviewModal.tsx";
import InstallTime from "../../install/native/InstallTime.tsx";
import ExperimentStore from "../../experiments/ExperimentStore.tsx";
import ApexExperimentStore from "../../experiments/apex/ApexExperimentStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";

require = fn;
function showReviewRequestModal() {
  obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  let tmp3 = null != rootNavigationRef && rootNavigationRef.isReady();
  if (tmp3) {
    let tmpResult = tmp(4417);
    tmp3 = null != tmpResult.coerceGuildsRoute(rootNavigationRef.getCurrentRoute());
  }
  tmpResult = tmp(6625);
  const keyboardIsOpen = tmpResult.getKeyboardIsOpen();
  const tmp5 = null != SelectedChannelStore.getVoiceChannelId();
  if (tmp3) {
    if (!keyboardIsOpen) {
      if (!tmp5) {
        AnalyticsUtilsDefault.track(AnalyticEvents.REVIEW_REQUEST_SHOW_ATTEMPTED);
        obj.revision = 1;
        const Storage = tmp(510).Storage;
        const result = Storage.set(RequestReviewStore, obj);
        requestReviewModalDefault();
        closure_10 = false;
      }
    }
  }
  AnalyticsUtilsDefault.track(AnalyticEvents.REVIEW_REQUEST_DEFERRED, {
    is_keyboard_open: keyboardIsOpen,
    is_in_voice: tmp5,
    is_viewing_chat: tmp3,
  });
  if (-1 !== timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
    timeout = -1;
  }
  const RequestReviewNoTTIExperiment = tmp(13696).RequestReviewNoTTIExperiment;
  let skipTTICheck = RequestReviewNoTTIExperiment.getConfig({ location: "RequestReviewStore" }).skipTTICheck;
  let tmp18 = closure_10;
  if (closure_10) {
    if (!skipTTICheck) {
      let tmp20 = undefined !== tti;
      if (tmp20) {
        tmp20 = tmp19 < 2300;
      }
      skipTTICheck = tmp20;
    }
    tmp18 = skipTTICheck;
  }
  if (tmp18) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(showReviewRequestModal, tmp(4589).MS_PER_MINUTE);
  }
}
function handleConnectionClosedOrInterrupted() {
  if (-1 !== c11) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c11);
    c11 = -1;
  }
}
const AnalyticEvents = fn(1074).AnalyticEvents;
const RequestReviewStore = "RequestReviewStore";
let obj = { revision: 0 };
let closure_10 = false;
let c11 = -1;
const Store = initializeDefault.Store;
class RequestReviewStore extends Store {}
RequestReviewStore.prototype["initialize"] = function initialize() {
  const Storage = Storage2.Storage;
  obj = Storage.get(RequestReviewStore);
  if (obj == null) {
    obj = { revision: 0 };
  }
  this.waitFor(ApexExperimentStore, ExperimentStore, SelectedChannelStore);
};
RequestReviewStore.displayName = "RequestReviewStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    guilds = guilds.guilds;
    obj = { from: "authed", unit: TimeUtils.TimeUnits.DAYS };
    let tmp3 = obj.getFirstInstallTimeElapsed(obj) >= 10;
    const someResult = guilds.some((member_count) => member_count.member_count >= 5);
    if (obj.revision < 1) {
      obj = {
        is_hfu: true,
        is_install_old_enough: tmp3,
        is_in_large_enough_guild: someResult,
        is_account_verified: tmp5,
      };
      AnalyticsUtilsDefault.track(AnalyticEvents.REVIEW_REQUEST_ELIGIBILITY_CHECKED, obj);
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
    const RequestReviewNoTTIExperiment = tmp(13696).RequestReviewNoTTIExperiment;
    let skipTTICheck = RequestReviewNoTTIExperiment.getConfig({ location: "RequestReviewStore" }).skipTTICheck;
    let tmp13 = closure_10;
    if (closure_10) {
      if (!skipTTICheck) {
        let tmp15 = undefined !== tti;
        if (tmp15) {
          tmp15 = tmp14 < 2300;
        }
        skipTTICheck = tmp15;
      }
      tmp13 = skipTTICheck;
    }
    if (tmp13) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(showReviewRequestModal, tmp(4589).MS_PER_MINUTE);
    }
  },
  CONNECTION_RESUMED: function handleConnectionResumed() {
    if (-1 !== timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
      timeout = -1;
    }
    const RequestReviewNoTTIExperiment = RequestReviewNoTTIExperiment2.RequestReviewNoTTIExperiment;
    let skipTTICheck = RequestReviewNoTTIExperiment.getConfig({ location: "RequestReviewStore" }).skipTTICheck;
    let tmp6 = closure_10;
    if (closure_10) {
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
      timeout = setTimeout(showReviewRequestModal, TimeUtils.MS_PER_MINUTE);
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
    const RequestReviewNoTTIExperiment = RequestReviewNoTTIExperiment2.RequestReviewNoTTIExperiment;
    let skipTTICheck = RequestReviewNoTTIExperiment.getConfig({ location: "RequestReviewStore" }).skipTTICheck;
    let tmp6 = closure_10;
    if (closure_10) {
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
      timeout = setTimeout(showReviewRequestModal, TimeUtils.MS_PER_MINUTE);
    }
  },
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    if (state.state === ConstantsIOS.AppStates.ACTIVE) {
      if (-1 !== timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(timeout);
        timeout = -1;
      }
      const RequestReviewNoTTIExperiment = tmp(13696).RequestReviewNoTTIExperiment;
      let skipTTICheck = RequestReviewNoTTIExperiment.getConfig({ location: "RequestReviewStore" }).skipTTICheck;
      let tmp8 = closure_10;
      if (closure_10) {
        if (!skipTTICheck) {
          let tmp10 = undefined !== tti;
          if (tmp10) {
            tmp10 = tmp9 < 2300;
          }
          skipTTICheck = tmp10;
        }
        tmp8 = skipTTICheck;
      }
      if (tmp8) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(showReviewRequestModal, tmp(4589).MS_PER_MINUTE);
      }
    } else if (-1 !== timeout) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(timeout);
      timeout = -1;
    }
  },
};
const requestReviewStore = new RequestReviewStore(DispatcherDefault, obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/feedback/native/RequestReviewStore.tsx");

export default requestReviewStore;
