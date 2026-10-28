// === Module 15269: RequestReviewStore ===

// Module 15269 (RequestReviewStore)
import initializeDefault from "initialize" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ConstantsIOS from "ConstantsIOS" /* 1104 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5186 */;
import RootNavigationRef from "RootNavigationRef" /* 5187 */;
import TimeUtils from "TimeUtils" /* 5758 */;
import useKeyboardIsOpen from "useKeyboardIsOpen" /* 7063 */;
import RequestReviewNoTTIExperiment2 from "RequestReviewNoTTIExperiment" /* 15270 */;
import requestReviewModalDefault from "requestReviewModal" /* 15271 */;
import InstallTime from "InstallTime" /* 15273 */;
import ExperimentStore from "ExperimentStore" /* 5226 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1258 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4907 */;

require = fn;
function delayShowReviewRequestModal() {
  if (-1 !== timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
    timeout = -1;
  }
  if (!obj.isMetaQuest()) {
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
  }
  obj = MetaQuestUtils;
}
function showReviewRequestModal() {
  obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  let tmp3 = null != rootNavigationRef && rootNavigationRef.isReady();
  if (tmp3) {
    tmp3 = null != NavigationRouteUtils.coerceGuildsRoute(rootNavigationRef.getCurrentRoute());
    const tmpResult = NavigationRouteUtils;
  }
  const keyboardIsOpen = useKeyboardIsOpen.getKeyboardIsOpen();
  const tmp5 = null != SelectedChannelStore.getVoiceChannelId();
  if (tmp3) {
    if (!keyboardIsOpen) {
      if (!tmp5) {
        AnalyticsUtilsDefault.track(AnalyticEvents.REVIEW_REQUEST_SHOW_ATTEMPTED);
        obj.revision = 1;
        const Storage = Storage2.Storage;
        const result = Storage.set(RequestReviewStore, obj);
        requestReviewModalDefault();
        closure_10 = false;
      }
    }
  }
  const tmpResult2 = useKeyboardIsOpen;
  AnalyticsUtilsDefault.track(AnalyticEvents.REVIEW_REQUEST_DEFERRED, { is_keyboard_open: keyboardIsOpen, is_in_voice: tmp5, is_viewing_chat: tmp3 });
  delayShowReviewRequestModal();
}
function handleConnectionClosedOrInterrupted() {
  if (-1 !== c11) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c11);
    c11 = -1;
  }
}
const AnalyticEvents = fn(1084).AnalyticEvents;
const RequestReviewStore = "RequestReviewStore";
let obj = { revision: 0 };
let closure_10 = false;
let c11 = -1;
const Store = initializeDefault.Store;
class RequestReviewStore extends Store {
}
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
    obj = InstallTime;
    let tmp2 = obj.getFirstInstallTimeElapsed({ from: "authed", unit: TimeUtils.TimeUnits.DAYS }) >= 10;
    const someResult = guilds.some((member_count) => member_count.member_count >= 5);
    if (obj.revision < 1) {
      const obj4 = { is_hfu: true, is_install_old_enough: tmp2, is_in_large_enough_guild: someResult, is_account_verified: tmp4 };
      AnalyticsUtilsDefault.track(AnalyticEvents.REVIEW_REQUEST_ELIGIBILITY_CHECKED, obj4);
    }
    if (tmp2) {
      tmp2 = tmp4;
    }
    if (tmp2) {
      tmp2 = someResult;
    }
    if (tmp2) {
      tmp2 = tmp5;
    }
    closure_10 = tmp2;
    delayShowReviewRequestModal();
    const obj2 = { from: "authed", unit: TimeUtils.TimeUnits.DAYS };
  },
  CONNECTION_RESUMED: function handleConnectionResumed() {
    delayShowReviewRequestModal();
  },
  CONNECTION_CLOSED: handleConnectionClosedOrInterrupted,
  CONNECTION_INTERRUPTED: handleConnectionClosedOrInterrupted,
  TTI_RECORDED: function handleTTIRecorded(tti) {
    tti = tti.tti;
    delayShowReviewRequestModal();
  },
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    if (state.state === ConstantsIOS.AppStates.ACTIVE) {
      delayShowReviewRequestModal();
    } else if (-1 !== c11) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c11);
      c11 = -1;
    }
  }
};
const requestReviewStore = new RequestReviewStore(DispatcherDefault, obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/feedback/native/RequestReviewStore.tsx");

export default requestReviewStore;