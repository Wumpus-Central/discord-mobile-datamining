// === Module 10319: GameRelationshipActionCreators ===

// Module 10319 (GameRelationshipActionCreators)
import util from "util" /* 1115 */;
import shared from "shared" /* 4682 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 4731 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5196 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
function showRequestFailedAlert(arg0) {
  const aPIError = new V6OrEarlierAPIError.APIError(arg0);
  let anyErrorMessage = aPIError.getAnyErrorMessage();
  const obj = { title: null, body: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["328j/I"]);
  if (null == anyErrorMessage) {
    const intl2 = util.intl;
    anyErrorMessage = intl2.string(util.t.fEptJP);
  }
  obj.body = anyErrorMessage;
  AlertActionCreatorsDefault.show(obj);
}
function deleteGameRelationship() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = async function _deleteGameRelationship(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp5;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          ({ userId: closure_129_0, applicationId: closure_129_1, onSuccess: closure_129_2 } = closure_0);
          c5 = 1;
          c6 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp8) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          c4 = 1;
          const HTTP = closure_130_0(closure_130_2[5]).HTTP;
          const obj5 = { url: closure_130_4.USER_GAME_RELATIONSHIP(closure_129_0, closure_129_1), oldFormErrors: true, rejectWithError: false };
          c5 = 3;
          c6 = 1;
          const obj6 = { value: HTTP.del(obj5), done: false };
          return obj6;
        }
      } else {
        if (2 === tmp8) {
          c4 = 0;
          closure_130_6(closure_3);
          c6 = 3;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_2();
          c4 = 0;
        }
        c4 = 0;
        c6 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp25) {
      closure_3 = tmp25;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp25;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_9 = async function _removeGameFriend() {
  await closure_130_7({
    userId: closure_129_0,
    applicationId: closure_129_1,
    onSuccess() {
      const AccessibilityAnnouncer = closure_1_0(4682).AccessibilityAnnouncer;
      const intl = closure_1_0(1115).intl;
      AccessibilityAnnouncer.announce(intl.string(closure_1_0(1115).t.zRf8cO));
    }
  });
  await "HermesInternal";
  closure_1 = tmp2;
  ({ userId: closure_129_0, applicationId: closure_129_1 } = closure_0);
  return "flex";
};
let closure_10 = async function _cancelGameFriendRequest() {
  await closure_130_7({
    userId: closure_129_0,
    applicationId: closure_129_1,
    onSuccess() {
      const AccessibilityAnnouncer = closure_1_0(4682).AccessibilityAnnouncer;
      const intl = closure_1_0(1115).intl;
      AccessibilityAnnouncer.announce(intl.string(closure_1_0(1115).t.XMf21q));
    }
  });
  await "HermesInternal";
  closure_1 = tmp2;
  ({ userId: closure_129_0, applicationId: closure_129_1 } = closure_0);
  return "flex";
};
const Constants = fn(1074);
({ Endpoints: closure_4, RelationshipTypes: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_relationships/GameRelationshipActionCreators.tsx");

export default {
  removeGameFriend() {
    const self = this;
    const apply = closure_9.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  acceptGameFriendRequest(arg0) {
    function onSuccess() {

    }
    ({ userId, applicationId } = arg0);
    const HTTP = onSuccess(1271).HTTP;
    const request = { url: closure_4.USER_GAME_RELATIONSHIP(userId, applicationId), body: { type: constants.FRIEND }, oldFormErrors: true, rejectWithError: false };
    const putResult = HTTP.put(request);
    return HTTP.put(request).then(() => {
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t.taJiuc));
    }).catch((error) => {
      const aPIError = new onSuccess(4731).APIError(error);
      let anyErrorMessage = aPIError.getAnyErrorMessage();
      const obj = { title: null, body: null };
      const intl = onSuccess(1115).intl;
      obj.title = intl.string(onSuccess(1115).t["328j/I"]);
      if (null == anyErrorMessage) {
        const intl2 = onSuccess(1115).intl;
        anyErrorMessage = intl2.string(onSuccess(1115).t.fEptJP);
      }
      obj.body = anyErrorMessage;
      AlertActionCreatorsDefault.show(obj);
      return Promise.reject(error);
    });
  },
  cancelGameFriendRequest() {
    const self = this;
    const apply = closure_10.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
};