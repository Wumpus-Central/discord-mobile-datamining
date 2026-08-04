import sendRequest from "sendRequest";
import ME from "ME";

let c4;
let c5;
const require = arg1;
function showRequestFailedAlert(arg0) {
  const aPIError = new require(4184) /* V6OrEarlierAPIError */.APIError(arg0);
  let anyErrorMessage = aPIError.getAnyErrorMessage();
  const obj = { title: null, body: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["328j/I"]);
  if (null == anyErrorMessage) {
    const intl2 = tmp(1236).intl;
    anyErrorMessage = intl2.string(tmp(1236).t.fEptJP);
  }
  obj[1] = anyErrorMessage;
  importDefault(4623).show(obj);
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
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      const dependencyMap = tmp3;
      c1 = tmp5;
      ({ userId: c0, applicationId: c1, onSuccess: c2 } = callback);
      yield "ct";
      let c4 = 1;
      const HTTP = callback(530).HTTP;
      const obj2 = { url: null, oldFormErrors: true, rejectWithError: false };
      obj2[0] = c4.USER_GAME_RELATIONSHIP(callback, c1);
      yield HTTP.del(obj2);
      if (2 === tmp8) {
        c4 = 0;
        v0(sendRequest);
        v0 = 3;
      } else if (arg0 === 1) {
        v0 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        dependencyMap();
        c4 = 0;
      }
      c4 = 0;
      return arg1;
    })();
    iter.next();
    return iter;
  });
  const _deleteGameRelationship = tmp;
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
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
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
              let closure_2 = tmp5;
              c1 = tmp2;
              c0 = undefined;
              c1 = undefined;
              ({ userId: c0, applicationId: c1 } = c0);
              c3 = 1;
              c4 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const obj2 = { userId: null, applicationId: null, onSuccess: null };
              obj2[0] = c0;
              obj2[1] = c1;
              obj2[2] = function onSuccess() {
                const AccessibilityAnnouncer = _undefined(tmp5[6]).AccessibilityAnnouncer;
                const intl = _undefined(tmp5[4]).intl;
                AccessibilityAnnouncer.announce(intl.string(_undefined(tmp5[4]).t.zRf8cO));
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
            return { value: "HermesInternal", done: null };
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
  const _removeGameFriend = tmp;
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
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
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
              let closure_2 = tmp5;
              c1 = tmp2;
              c0 = undefined;
              c1 = undefined;
              ({ userId: c0, applicationId: c1 } = c0);
              c3 = 1;
              c4 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const obj2 = { userId: null, applicationId: null, onSuccess: null };
              obj2[0] = c0;
              obj2[1] = c1;
              obj2[2] = function onSuccess() {
                const AccessibilityAnnouncer = _undefined(tmp5[6]).AccessibilityAnnouncer;
                const intl = _undefined(tmp5[4]).intl;
                AccessibilityAnnouncer.announce(intl.string(_undefined(tmp5[4]).t.XMf21q));
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
            return { value: "HermesInternal", done: null };
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
  const _cancelGameFriendRequest = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ Endpoints: c4, RelationshipTypes: c5 } = ME);
const result = require("V6OrEarlierAPIError").fileFinishedImporting("modules/game_relationships/GameRelationshipActionCreators.tsx");

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
    let applicationId;
    let userId;
    function onSuccess(arg0) {

    }
    ({ userId, applicationId } = arg0);
    const HTTP = onSuccess(530).HTTP;
    let obj = { url: closure_4.USER_GAME_RELATIONSHIP(userId, applicationId), body: { type: constants.FRIEND }, oldFormErrors: true, rejectWithError: false };
    const putResult = HTTP.put({ url: closure_4.USER_GAME_RELATIONSHIP(userId, applicationId), body: { type: constants.FRIEND }, oldFormErrors: true, rejectWithError: false });
    return HTTP.put({ url: closure_4.USER_GAME_RELATIONSHIP(userId, applicationId), body: { type: constants.FRIEND }, oldFormErrors: true, rejectWithError: false }).then(() => {
      const AccessibilityAnnouncer = onSuccess(outer1_2[6]).AccessibilityAnnouncer;
      const intl = onSuccess(outer1_2[4]).intl;
      AccessibilityAnnouncer.announce(intl.string(onSuccess(outer1_2[4]).t.taJiuc));
    }).catch((arg0) => {
      const aPIError = new onSuccess(4184).APIError(arg0);
      let anyErrorMessage = aPIError.getAnyErrorMessage();
      const obj = { title: null, body: null };
      const intl = onSuccess(1236).intl;
      obj[0] = intl.string(onSuccess(1236).t["328j/I"]);
      if (null == anyErrorMessage) {
        const intl2 = tmp(1236).intl;
        anyErrorMessage = intl2.string(tmp(1236).t.fEptJP);
      }
      obj[1] = anyErrorMessage;
      callback(4623).show(obj);
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