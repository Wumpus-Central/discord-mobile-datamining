// discord_app/actions/ChangeLogActionCreators.tsx
import sendRequest from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import explicitContentFromProto from "../modules/user_settings/UserSettings.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import handleUserSettingsProtoStoreChange from "../modules/changelog/ChangelogStore.tsx";
import { Endpoints } from "../Constants.tsx";
import { ChangelogPlatforms } from "../modules/changelog/ChangelogConstants.tsx";

require = fn;
function cacheBustParam() {
  return "x=" + Math.floor(new Date().getMinutes() / 5);
}
const result = require("obj132").fileFinishedImporting("actions/ChangeLogActionCreators.tsx");

export default {
  lockChangeLog(key) {
    const obj = { type: "CHANGE_LOG_LOCK", key };
    obj.dispatch(obj);
  },
  unlockChangeLog(key) {
    const obj = { type: "CHANGE_LOG_UNLOCK", key };
    obj.dispatch(obj);
  },
  markChangelogAsSeen(closure_2, date) {
    const obj = { type: "CHANGE_LOG_MARK_SEEN", changelogId: closure_2, changelogDate: date };
    obj.dispatch(obj);
    const LastReceivedChangelogId = explicitContentFromProto.LastReceivedChangelogId;
    LastReceivedChangelogId.updateSetting(closure_2);
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
    const HTTP = sendRequest.HTTP;
    const obj = { changelog_id };
    HTTP.post(obj);
  },
  fetchChangelogConfig() {
    const HTTP = sendRequest.HTTP;
    const obj = { url: "https://cdn.discordapp.com/changelogs/config_" + ChangelogPlatforms.MOBILE + ".json?" + "x=" + Math.floor(new Date().getMinutes() / 5), rejectWithError: true };
    return HTTP.get(obj);
  },
  fetchChangelog(closure_0, closure_1, arg2) {
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
      closure_1 = tmp3;
      if (null != c4.getChangelog(closure_1_0, closure_1_1)) {
        return null;
      }
      if (dependencyMap) {
        let MOBILE = closure_1_6.DESKTOP;
      } else {
        MOBILE = closure_1_6.MOBILE;
      }
      let str = "";
      if (!c3) {
        const _HermesInternal = HermesInternal;
        str = "?" + closure_1_7();
      }
      dependencyMap = 1;
      const HTTP = closure_1_0(530).HTTP;
      obj1 = { url: null, rejectWithError: true };
      const _HermesInternal2 = HermesInternal;
      obj1[0] = "https://cdn.discordapp.com/changelogs/" + MOBILE + "/" + closure_1_0 + "/" + closure_1_1 + ".json" + str;
      yield HTTP.get(obj1);
      if (1 === tmp7) {
        dependencyMap = 0;
        let obj5 = closure_1_1(709);
        const obj3 = { type: "CHANGE_LOG_FETCH_FAILED", id: null, locale: null };
        obj3[1] = closure_0;
        obj3[2] = closure_1;
        obj5.dispatch(obj3);
        let tmp8 = null;
        if ("en-US" !== closure_1) {
          c3 = 3;
          c4 = 1;
          const obj4 = { value: null, done: false };
          obj4[0] = c4.fetchChangelog(closure_0, "en-US");
          return obj4;
        }
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          dependencyMap = 0;
          c4 = 3;
          obj5 = { value: null, done: true };
          obj5[0] = arg1;
          return obj5;
        } else {
          closure_0 = arg1;
          obj1 = closure_1_1(709);
          const obj6 = { type: "CHANGE_LOG_FETCH_SUCCESS", id: null, changelog: null };
          obj6[1] = closure_0;
          obj6[2] = closure_0.body;
          obj1.dispatch(obj6);
          dependencyMap = 0;
          c4 = 3;
          const obj7 = { value: null, done: true };
          obj7[0] = closure_0.body;
          return obj7;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw arg1;
      } else {
        tmp8 = arg1;
        if (arg0 === 2) {
          c4 = 3;
          const obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      }
      return tmp8;
    })();
  }
};