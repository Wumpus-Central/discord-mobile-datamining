// === Module 13507: RequestReviewStore ===

// Module 13507 (RequestReviewStore)
import get_initializedDefault from "get initialized" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4736 */;
import RootNavigationRef from "RootNavigationRef" /* 4737 */;
import TimeUtils from "TimeUtils" /* 4919 */;
import useKeyboardIsOpen from "useKeyboardIsOpen" /* 6110 */;
import RequestReviewNoTTIExperiment2 from "RequestReviewNoTTIExperiment" /* 13508 */;
import requestReviewModalDefault from "requestReviewModal" /* 13509 */;
import InstallTime from "InstallTime" /* 13511 */;
import ExperimentStore from "ExperimentStore" /* 4776 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import size from "module_2" /* 2 */;

function showReviewRequestModal() {
  let timeout;
  obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  let tmp3 = null != rootNavigationRef && rootNavigationRef.isReady();
  if (tmp3) {
    const tmpResult = NavigationRouteUtils;
    tmp3 = null != tmpResult.coerceGuildsRoute(rootNavigationRef.getCurrentRoute());
  }
  const tmpResult2 = useKeyboardIsOpen;
  const keyboardIsOpen = tmpResult2.getKeyboardIsOpen();
  const tmp5 = null != SelectedChannelStore.getVoiceChannelId();
  if (tmp3) {
    if (!keyboardIsOpen) {
      if (!tmp5) {
        const obj5 = AnalyticsUtilsDefault;
        obj5.track(AnalyticEvents.REVIEW_REQUEST_SHOW_ATTEMPTED);
        obj.revision = 1;
        const Storage = Storage2.Storage;
        const result = Storage.set(RequestReviewStore_str, obj);
        requestReviewModalDefault();
        closure_10 = false;
      }
    }
  }
  const obj6 = AnalyticsUtilsDefault;
  obj6.track(AnalyticEvents.REVIEW_REQUEST_DEFERRED, { is_keyboard_open: keyboardIsOpen, is_in_voice: tmp5, is_viewing_chat: tmp3 });
  if (-1 !== timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
    timeout = -1;
  }
  const RequestReviewNoTTIExperiment = RequestReviewNoTTIExperiment2.RequestReviewNoTTIExperiment;
  let skipTTICheck = RequestReviewNoTTIExperiment.getConfig({ location: "RequestReviewStore" }).skipTTICheck;
  let tmp18 = closure_10;
  if (tmp18) {
    if (!skipTTICheck) {
      skipTTICheck = undefined !== tti && tmp19 < 2300;
      const tmp20 = undefined !== tti && tmp19 < 2300;
    }
    tmp18 = skipTTICheck;
  }
  if (tmp18) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(showReviewRequestModal, TimeUtils.MS_PER_MINUTE);
  }
}
function handleConnectionClosedOrInterrupted() {
  if (-1 !== c11) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c11);
    c11 = -1;
  }
}
const AnalyticEvents = Constants.AnalyticEvents;
const RequestReviewStore_str = "RequestReviewStore";
let obj = { revision: 0 };
let closure_10 = false;
let c11 = -1;
const Store = get_initializedDefault.Store;
class RequestReviewStore extends Store {
  initialize() {
    const Storage = Storage2.Storage;
    obj = Storage.get(RequestReviewStore_str);
    if (obj == null) {
      obj = { revision: 0 };
    }
    this.waitFor(ApexExperimentStore, ExperimentStore, SelectedChannelStore);
  }
}
const prototype = RequestReviewStore.prototype;
RequestReviewStore.displayName = "RequestReviewStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    let timeout;
    guilds = guilds.guilds;
    const user = guilds.user;
    obj = InstallTime;
    const obj2 = { from: "authed", unit: TimeUtils.TimeUnits.DAYS };
    let tmp3 = obj.getFirstInstallTimeElapsed(obj2) >= 10;
    const someResult = guilds.some((member_count) => member_count.member_count >= 5);
    if (obj.revision < 1) {
      const obj4 = { is_hfu: true, is_install_old_enough: tmp3, is_in_large_enough_guild: someResult, is_account_verified: true === user.verified };
      const obj3 = AnalyticsUtilsDefault;
      obj3.track(AnalyticEvents.REVIEW_REQUEST_ELIGIBILITY_CHECKED, obj4);
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
    const RequestReviewNoTTIExperiment = RequestReviewNoTTIExperiment2.RequestReviewNoTTIExperiment;
    let skipTTICheck = RequestReviewNoTTIExperiment.getConfig({ location: "RequestReviewStore" }).skipTTICheck;
    let tmp13 = closure_10;
    if (tmp13) {
      if (!skipTTICheck) {
        skipTTICheck = undefined !== tti && tmp14 < 2300;
        const tmp15 = undefined !== tti && tmp14 < 2300;
      }
      tmp13 = skipTTICheck;
    }
    if (tmp13) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(showReviewRequestModal, TimeUtils.MS_PER_MINUTE);
    }
  },
  CONNECTION_RESUMED: function handleConnectionResumed() {
    let timeout;
    if (-1 !== timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
      timeout = -1;
    }
    const RequestReviewNoTTIExperiment = RequestReviewNoTTIExperiment2.RequestReviewNoTTIExperiment;
    let skipTTICheck = RequestReviewNoTTIExperiment.getConfig({ location: "RequestReviewStore" }).skipTTICheck;
    let tmp6 = closure_10;
    if (tmp6) {
      if (!skipTTICheck) {
        skipTTICheck = undefined !== tti && tmp7 < 2300;
        const tmp8 = undefined !== tti && tmp7 < 2300;
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
    let timeout;
    tti = tti.tti;
    if (-1 !== timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
      timeout = -1;
    }
    const RequestReviewNoTTIExperiment = RequestReviewNoTTIExperiment2.RequestReviewNoTTIExperiment;
    let skipTTICheck = RequestReviewNoTTIExperiment.getConfig({ location: "RequestReviewStore" }).skipTTICheck;
    let tmp6 = closure_10;
    if (tmp6) {
      if (!skipTTICheck) {
        skipTTICheck = undefined !== tti && tmp7 < 2300;
        const tmp8 = undefined !== tti && tmp7 < 2300;
      }
      tmp6 = skipTTICheck;
    }
    if (tmp6) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(showReviewRequestModal, TimeUtils.MS_PER_MINUTE);
    }
  },
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    let timeout;
    if (state.state === ConstantsIOS.AppStates.ACTIVE) {
      if (-1 !== timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(timeout);
        timeout = -1;
      }
      const RequestReviewNoTTIExperiment = RequestReviewNoTTIExperiment2.RequestReviewNoTTIExperiment;
      let skipTTICheck = RequestReviewNoTTIExperiment.getConfig({ location: "RequestReviewStore" }).skipTTICheck;
      let tmp8 = closure_10;
      if (tmp8) {
        if (!skipTTICheck) {
          skipTTICheck = undefined !== tti && tmp9 < 2300;
          const tmp10 = undefined !== tti && tmp9 < 2300;
        }
        tmp8 = skipTTICheck;
      }
      if (tmp8) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(showReviewRequestModal, TimeUtils.MS_PER_MINUTE);
      }
    } else if (-1 !== timeout) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(timeout);
      timeout = -1;
    }
  }
};
const requestReviewStore = new RequestReviewStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/feedback/native/RequestReviewStore.tsx");

export default requestReviewStore;