// === Module 7990: cacheBustParam ===

// Module 7990 (cacheBustParam)
import explicitContentFromProto from "explicitContentFromProto";
import handleUserSettingsProtoStoreChange from "handleUserSettingsProtoStoreChange";
import { Endpoints } from "ME";
import { ChangelogPlatforms } from "CHANGELOG_MODAL_KEY";

const require = arg1;
function cacheBustParam() {
  return "x=" + Math.floor(new Date().getMinutes() / 5);
}
const result = require("ME").fileFinishedImporting("actions/ChangeLogActionCreators.tsx");

export default {
  lockChangeLog(key) {
    let obj = importDefault(709);
    obj = { type: "CHANGE_LOG_LOCK", key };
    obj.dispatch(obj);
  },
  unlockChangeLog(key) {
    let obj = importDefault(709);
    obj = { type: "CHANGE_LOG_UNLOCK", key };
    obj.dispatch(obj);
  },
  markChangelogAsSeen(id, date) {
    let obj = importDefault(709);
    obj = { type: "CHANGE_LOG_MARK_SEEN", changelogId: id, changelogDate: date };
    obj.dispatch(obj);
    const LastReceivedChangelogId = require(3928) /* explicitContentFromProto */.LastReceivedChangelogId;
    LastReceivedChangelogId.updateSetting(id);
  },
  setChangelogOverride(id) {
    let obj = importDefault(709);
    obj = { type: "CHANGE_LOG_SET_OVERRIDE", id };
    obj.dispatch(obj);
    if (null != id) {
      const self = this;
      this.sendChangelogMessage(id);
    }
  },
  sendChangelogMessage(changelog_id) {
    const HTTP = require(530) /* sendRequest */.HTTP;
    obj = { url: Endpoints.CHANGELOG_MESSAGES, body: obj, rejectWithError: true };
    obj = { changelog_id };
    HTTP.post(obj);
  },
  fetchChangelogConfig() {
    const HTTP = require(530) /* sendRequest */.HTTP;
    const obj = { url: null, rejectWithError: true };
    obj[0] = "https://cdn.discordapp.com/changelogs/config_" + ChangelogPlatforms.MOBILE + ".json?" + "x=" + Math.floor(new Date().getMinutes() / 5);
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
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp3;
              let closure_0 = tmp7;
              closure_0 = undefined;
              if (null != c4.getChangelog(outer1_0, outer1_1)) {
                c4 = 3;
                return { value: null, done: true };
              } else {
                if (dependencyMap) {
                  let MOBILE = tmp48.DESKTOP;
                } else {
                  MOBILE = tmp48.MOBILE;
                }
                let str = "";
                if (!c3) {
                  const _HermesInternal = HermesInternal;
                  str = "?" + outer1_7();
                }
                dependencyMap = 1;
                const HTTP = outer1_0(530).HTTP;
                let obj1 = { url: null, rejectWithError: true };
                const _HermesInternal2 = HermesInternal;
                obj1[0] = "https://cdn.discordapp.com/changelogs/" + MOBILE + "/" + outer1_0 + "/" + outer1_1 + ".json" + str;
                c3 = 2;
                c4 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = HTTP.get(obj1);
                return obj2;
              }
            }
          } else {
            if (1 === tmp7) {
              dependencyMap = 0;
              let obj5 = outer1_1(709);
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
                obj1 = outer1_1(709);
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
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
            }
            c4 = 3;
            const obj8 = { value: null, done: true };
            obj8[0] = tmp8;
            return obj8;
          }
        } catch (tmp35) {
          if (tmp4 === dependencyMap) {
            c4 = tmp2;
            throw tmp35;
          } else {
            c3 = tmp;
          }
        }
      }
    })();
  }
};