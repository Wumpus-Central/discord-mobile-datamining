// discord_app/actions/ChangeLogActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../Constants.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import UserSettings from "../modules/user_settings/UserSettings.tsx";
import ChangelogConstants from "../modules/changelog/ChangelogConstants.tsx";
import _asyncToGenerator from "../../_runtime/metro/00005__asyncToGenerator.js";
import ChangelogStore from "../modules/changelog/ChangelogStore.tsx";
import size from "../../_runtime/metro/00002__.js";

let c2, c3;

function cacheBustParam() {
  const date = new Date();
  return "x=" + Math.floor(date.getMinutes() / 5);
}
const Endpoints = Constants.Endpoints;
const ChangelogPlatforms = ChangelogConstants.ChangelogPlatforms;
let obj = {
  lockChangeLog(key) {
    const obj = DispatcherDefault;
    const obj2 = { type: "CHANGE_LOG_LOCK", key };
    obj.dispatch(obj2);
  },
  unlockChangeLog(key) {
    const obj = DispatcherDefault;
    const obj2 = { type: "CHANGE_LOG_UNLOCK", key };
    obj.dispatch(obj2);
  },
  markChangelogAsSeen(id, date) {
    const obj = DispatcherDefault;
    const obj2 = { type: "CHANGE_LOG_MARK_SEEN", changelogId: id, changelogDate: date };
    obj.dispatch(obj2);
    const LastReceivedChangelogId = UserSettings.LastReceivedChangelogId;
    LastReceivedChangelogId.updateSetting(id);
  },
  setChangelogOverride(id) {
    const obj = DispatcherDefault;
    const obj2 = { type: "CHANGE_LOG_SET_OVERRIDE", id };
    obj.dispatch(obj2);
    if (null != id) {
      const self = this;
      this.sendChangelogMessage(id);
    }
  },
  sendChangelogMessage(changelog_id) {
    let obj;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.CHANGELOG_MESSAGES, body: obj, rejectWithError: true };
    obj = { changelog_id };
    HTTP.post(request);
  },
  fetchChangelogConfig() {
    let date;
    const MOBILE = ChangelogPlatforms.MOBILE;
    const HTTP = HTTPUtils.HTTP;
    const get = HTTP.get;
    const obj = {
      url:
        "https://cdn.discordapp.com/changelogs/config_" + MOBILE + ".json?" + "x=" + Math.floor(date.getMinutes() / 5),
      rejectWithError: true,
    };
    date = new Date();
    return get(obj);
  },
  fetchChangelog(id, stateFromStores, arg2) {
    let closure_1 = stateFromStores;
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
      let MOBILE;
      let changelog;
      let closure_0;
      let closure_1;
      let tmp5;
      id = tmp4;
      if (null != changelog.getChangelog(id, tmp)) {
        return null;
      }
      if (flag) {
        MOBILE = constants.DESKTOP;
      } else {
        MOBILE = constants.MOBILE;
      }
      let str = "";
      if (!flag2) {
        const _HermesInternal = HermesInternal;
        str = "?" + cacheBustParam();
      }
      const HTTP = id(c2[6]).HTTP;
      const obj5 = {
        url: "https://cdn.discordapp.com/changelogs/" + MOBILE + "/" + id + "/" + tmp + ".json" + str,
        rejectWithError: true,
      };
      const _HermesInternal2 = HermesInternal;
      const get = HTTP.get;
      yield get(obj5);
      if (1 === c3) {
        c2 = 0;
        const obj8 = { type: "CHANGE_LOG_FETCH_FAILED", id: closure_129_0, locale: closure_129_1 };
        const obj6 = tmp(c2[4]);
        obj6.dispatch(obj8);
        tmp5 = null;
        if ("en-US" !== closure_129_1) {
          c3 = 3;
          changelog = 1;
          const obj9 = { value: closure_129_4.fetchChangelog(closure_129_0, "en-US"), done: false };
          return obj9;
        }
      } else if (2 === c3) {
        if (arg0 === 1) {
          changelog = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          changelog = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          id = value;
          const obj11 = { type: "CHANGE_LOG_FETCH_SUCCESS", id: closure_129_0, changelog: id.body };
          const obj2 = tmp(c2[4]);
          obj2.dispatch(obj11);
          c2 = 0;
          changelog = 3;
          const obj12 = { value: id.body, done: true };
          return obj12;
        }
      } else if (arg0 === 1) {
        changelog = 3;
        throw value;
      } else {
        tmp5 = value;
        if (arg0 === 2) {
          changelog = 3;
          const obj = { value, done: true };
          return obj;
        }
      }
      return tmp5;
    })();
  },
};
const result = size.fileFinishedImporting("actions/ChangeLogActionCreators.tsx");

export default obj;
