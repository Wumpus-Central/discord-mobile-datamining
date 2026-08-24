// discord_app/modules/game_relationships/GameRelationshipActionCreators.tsx
import getSystemLocale from "../../intl/index.native.tsx";
import V6OrEarlierAPIError from "../../errors/index.tsx";
import setDefault from "../../actions/AlertActionCreators.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import ME from "../../Constants.tsx";

require = arg1;
function showRequestFailedAlert(arg0) {
  const aPIError = new V6OrEarlierAPIError.APIError(arg0);
  let anyErrorMessage = aPIError.getAnyErrorMessage();
  const obj = { title: null, body: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["328j/I"]);
  if (null == anyErrorMessage) {
    const intl2 = tmp(1236).intl;
    anyErrorMessage = intl2.string(tmp(1236).t.fEptJP);
  }
  obj[1] = anyErrorMessage;
  setDefault.show(obj);
}
function deleteGameRelationship() {
  const self = this;
  const apply = _deleteGameRelationship.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _deleteGameRelationship() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          v0 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp3;
              c1 = tmp5;
              let callback;
              c1 = undefined;
              dependencyMap = undefined;
              ({ userId: c0, applicationId: c1, onSuccess: c2 } = callback);
              c5 = 1;
              v0 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              c4 = 1;
              const HTTP = callback(530).HTTP;
              const obj2 = { url: null, oldFormErrors: true, rejectWithError: false };
              obj2[0] = c4.USER_GAME_RELATIONSHIP(callback, c1);
              c5 = 3;
              v0 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.del(obj2);
              return obj3;
            }
          } else {
            if (2 === tmp8) {
              c4 = 0;
              v0(closure_3);
              v0 = 3;
            } else if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              dependencyMap();
              c4 = 0;
            }
            c4 = 0;
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp25) {
          closure_3 = tmp25;
          if (tmp4 === c4) {
            v0 = tmp2;
            throw tmp25;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_8 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _removeGameFriend() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_2 = tmp5;
              c1 = tmp2;
              c0 = undefined;
              c1 = undefined;
              ({ userId: c0, applicationId: c1 } = c0);
              c3 = 1;
              c4 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const obj2 = { userId: null, applicationId: null, onSuccess: null };
              obj2[0] = c0;
              obj2[1] = c1;
              obj2[2] = function onSuccess() {
                const AccessibilityAnnouncer = _undefined(1363).AccessibilityAnnouncer;
                const intl = _undefined(1236).intl;
                AccessibilityAnnouncer.announce(intl.string(_undefined(1236).t.zRf8cO));
              };
              c3 = 2;
              c4 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = callback(obj2);
              return obj3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp12) {
          c4 = tmp;
          throw tmp12;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _cancelGameFriendRequest() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_2 = tmp5;
              c1 = tmp2;
              c0 = undefined;
              c1 = undefined;
              ({ userId: c0, applicationId: c1 } = c0);
              c3 = 1;
              c4 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const obj2 = { userId: null, applicationId: null, onSuccess: null };
              obj2[0] = c0;
              obj2[1] = c1;
              obj2[2] = function onSuccess() {
                const AccessibilityAnnouncer = _undefined(1363).AccessibilityAnnouncer;
                const intl = _undefined(1236).intl;
                AccessibilityAnnouncer.announce(intl.string(_undefined(1236).t.XMf21q));
              };
              c3 = 2;
              c4 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = callback(obj2);
              return obj3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp12) {
          c4 = tmp;
          throw tmp12;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ Endpoints: c4, RelationshipTypes: c5 } = ME);
const result = require("set").fileFinishedImporting("modules/game_relationships/GameRelationshipActionCreators.tsx");

export default {
  removeGameFriend(arg0) {
    const self = this;
    const apply = _removeGameFriend.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  acceptGameFriendRequest(arg0) {
    function onSuccess(arg0) {

    }
    ({ userId, applicationId } = arg0);
    const HTTP = onSuccess(530).HTTP;
    let obj = { url: closure_4.USER_GAME_RELATIONSHIP(userId, applicationId), body: { type: constants.FRIEND }, oldFormErrors: true, rejectWithError: false };
    const putResult = HTTP.put({ url: closure_4.USER_GAME_RELATIONSHIP(userId, applicationId), body: { type: constants.FRIEND }, oldFormErrors: true, rejectWithError: false });
    return HTTP.put({ url: closure_4.USER_GAME_RELATIONSHIP(userId, applicationId), body: { type: constants.FRIEND }, oldFormErrors: true, rejectWithError: false }).then(() => {
      const AccessibilityAnnouncer = onSuccess(closure_1_2[6]).AccessibilityAnnouncer;
      const intl = onSuccess(closure_1_2[4]).intl;
      AccessibilityAnnouncer.announce(intl.string(onSuccess(closure_1_2[4]).t.taJiuc));
    }).catch((arg0) => {
      const aPIError = new onSuccess(4273).APIError(arg0);
      let anyErrorMessage = aPIError.getAnyErrorMessage();
      const obj = { title: null, body: null };
      const intl = onSuccess(1236).intl;
      obj[0] = intl.string(onSuccess(1236).t["328j/I"]);
      if (null == anyErrorMessage) {
        const intl2 = tmp(1236).intl;
        anyErrorMessage = intl2.string(tmp(1236).t.fEptJP);
      }
      obj[1] = anyErrorMessage;
      callback(4827).show(obj);
      return Promise.reject(arg0);
    });
  },
  cancelGameFriendRequest(arg0) {
    const self = this;
    const apply = _cancelGameFriendRequest.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
};