// === Module 8097: ChangeLogActionCreators ===

// Module 8097 (ChangeLogActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
import UserSettings from "UserSettings" /* 2040 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChangelogStore from "ChangelogStore" /* 7002 */;

require = fn;
function cacheBustParam() {
  return "x=" + Math.floor(new Date().getMinutes() / 5);
}
const ChangelogPlatforms = fn(2114).ChangelogPlatforms;
const size = fn(2);
const result = size.fileFinishedImporting("actions/ChangeLogActionCreators.tsx");

export default {
  lockChangeLog(key) {
    DispatcherDefault.dispatch({ type: "CHANGE_LOG_LOCK", key });
  },
  unlockChangeLog(key) {
    DispatcherDefault.dispatch({ type: "CHANGE_LOG_UNLOCK", key });
  },
  markChangelogAsSeen(id, date) {
    DispatcherDefault.dispatch({ type: "CHANGE_LOG_MARK_SEEN", changelogId: id, changelogDate: date });
    const LastReceivedChangelogId = UserSettings.LastReceivedChangelogId;
    LastReceivedChangelogId.updateSetting(id);
  },
  setChangelogOverride(id) {
    DispatcherDefault.dispatch({ type: "CHANGE_LOG_SET_OVERRIDE", id });
  },
  fetchChangelogConfig() {
    const HTTP = HTTPUtils.HTTP;
    const obj = { url: "https://cdn.discordapp.com/changelogs/config_" + ChangelogPlatforms.MOBILE + ".json?" + "x=" + Math.floor(new Date().getMinutes() / 5), rejectWithError: true };
    return HTTP.get(obj);
  },
  fetchChangelog(arg0, stateFromStores, arg2) {
    closure_0 = arg0;
    closure_1 = stateFromStores;
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    let flag2 = arg3;
    if (arg3 === undefined) {
      flag2 = false;
    }
    const self = this;
    return flag2(function*() {
      if (null != changelog.getChangelog(closure_0, tmp3)) {
        return null;
      }
      if (flag) {
        let MOBILE = constants.DESKTOP;
      } else {
        MOBILE = constants.MOBILE;
      }
      let str = "";
      if (!flag2) {
        const _HermesInternal = HermesInternal;
        str = "?" + cacheBustParam();
      }
      const HTTP = closure_0(1294).HTTP;
      const _HermesInternal2 = HermesInternal;
      yield HTTP.get({ url: "https://cdn.discordapp.com/changelogs/" + MOBILE + "/" + closure_0 + "/" + tmp3 + ".json" + str, rejectWithError: true });
      if (1 === tmp7) {
        dependencyMap = 0;
        tmp3(584).dispatch({ type: "CHANGE_LOG_FETCH_FAILED", id: closure_129_0, locale: closure_129_1 });
        let tmp8 = null;
        if ("en-US" !== closure_129_1) {
          c3 = 3;
          changelog = 1;
          return { value: closure_129_4.fetchChangelog(closure_129_0, "en-US"), done: false };
        }
        tmp3(584);
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          changelog = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 0;
          changelog = 3;
          return { value, done: true };
        } else {
          closure_128_0 = value;
          tmp3(584).dispatch({ type: "CHANGE_LOG_FETCH_SUCCESS", id: closure_129_0, changelog: closure_128_0.body });
          dependencyMap = 0;
          changelog = 3;
          return { value: closure_128_0.body, done: true };
        }
      } else if (arg0 === 1) {
        changelog = 3;
        throw value;
      } else {
        tmp8 = value;
        if (arg0 === 2) {
          changelog = 3;
          return { value, done: true };
        }
      }
      return tmp8;
    })();
  }
};