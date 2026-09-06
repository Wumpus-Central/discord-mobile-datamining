// discord_app/actions/ChangeLogActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import UserSettings from "../modules/user_settings/UserSettings.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import ChangelogStore from "../modules/changelog/ChangelogStore.tsx";

require = fn;
function cacheBustParam() {
  return "x=" + Math.floor(new Date().getMinutes() / 5);
}
const Endpoints = fn(1074).Endpoints;
const ChangelogPlatforms = fn(2010).ChangelogPlatforms;
const size = fn(2);
const result = size.fileFinishedImporting("actions/ChangeLogActionCreators.tsx");

export default {
  lockChangeLog(key) {
    const obj = { type: "CHANGE_LOG_LOCK", key };
    obj.dispatch(obj);
  },
  unlockChangeLog(key) {
    const obj = { type: "CHANGE_LOG_UNLOCK", key };
    obj.dispatch(obj);
  },
  markChangelogAsSeen(id, date) {
    const obj = { type: "CHANGE_LOG_MARK_SEEN", changelogId: id, changelogDate: date };
    obj.dispatch(obj);
    const LastReceivedChangelogId = UserSettings.LastReceivedChangelogId;
    LastReceivedChangelogId.updateSetting(id);
  },
  setChangelogOverride(id) {
    const obj = { type: "CHANGE_LOG_SET_OVERRIDE", id };
    obj.dispatch(obj);
    if (null != id) {
      const self = this;
      this.sendChangelogMessage(id);
    }
  },
  sendChangelogMessage(changelog_id) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.CHANGELOG_MESSAGES, body: { changelog_id }, rejectWithError: true };
    HTTP.post(request);
  },
  fetchChangelogConfig() {
    const HTTP = HTTPUtils.HTTP;
    const obj = {
      url:
        "https://cdn.discordapp.com/changelogs/config_" +
        ChangelogPlatforms.MOBILE +
        ".json?" +
        "x=" +
        Math.floor(new Date().getMinutes() / 5),
      rejectWithError: true,
    };
    return HTTP.get(obj);
  },
  fetchChangelog(arg0, locale, arg2) {
    closure_0 = arg0;
    closure_1 = locale;
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    let flag2 = arg3;
    if (arg3 === undefined) {
      flag2 = false;
    }
    const self = this;
    return flag2(function* () {
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
      const HTTP = closure_0(1272).HTTP;
      let obj1 = {
        url: "https://cdn.discordapp.com/changelogs/" + MOBILE + "/" + closure_0 + "/" + tmp3 + ".json" + str,
        rejectWithError: true,
      };
      const _HermesInternal2 = HermesInternal;
      yield HTTP.get(obj1);
      if (1 === tmp7) {
        dependencyMap = 0;
        let obj5 = tmp3(573);
        obj5.dispatch({ type: "CHANGE_LOG_FETCH_FAILED", id: closure_129_0, locale: closure_129_1 });
        let tmp8 = null;
        if ("en-US" !== closure_129_1) {
          c3 = 3;
          changelog = 1;
          return { value: closure_129_4.fetchChangelog(closure_129_0, "en-US"), done: false };
        }
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          changelog = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 0;
          changelog = 3;
          obj5 = { value, done: true };
          return obj5;
        } else {
          closure_128_0 = value;
          obj1 = tmp3(573);
          obj1.dispatch({ type: "CHANGE_LOG_FETCH_SUCCESS", id: closure_129_0, changelog: closure_128_0.body });
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
  },
};
