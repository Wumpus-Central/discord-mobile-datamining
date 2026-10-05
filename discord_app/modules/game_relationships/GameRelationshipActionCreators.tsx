// === Module 10605: GameRelationshipActionCreators ===

// Module 10605 (GameRelationshipActionCreators)
import intl3 from "intl" /* 1126 */;
import shared from "shared" /* 4729 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 5312 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5707 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
function showRequestFailedAlert(arg0) {
  let intl;
  const aPIError = new V6OrEarlierAPIError.APIError(arg0);
  let anyErrorMessage = aPIError.getAnyErrorMessage();
  obj = { title: intl.string(intl3.t["328j/I"]), body: anyErrorMessage };
  const show = AlertActionCreatorsDefault.show;
  AlertActionCreatorsDefault;
  intl = intl3.intl;
  if (null == anyErrorMessage) {
    const intl2 = intl3.intl;
    anyErrorMessage = intl2.string(intl3.t.fEptJP);
  }
  show(obj);
}
function deleteGameRelationship() {
  return obj(...arguments);
}
let obj = function _deleteGameRelationship() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let c2;
    let closure_0 = arg0;
    const HTTP = closure_130_0(closure_130_2[5]).HTTP;
    const obj5 = { url: closure_130_4.USER_GAME_RELATIONSHIP(c0, c1), oldFormErrors: true, rejectWithError: false };
    const del = HTTP.del;
    let delResult = del(obj5);
    await delResult;
    if (2 === c5) {
      delResult = closure_3;
      let c4 = 0;
      closure_130_6(closure_3);
    } else if (arg0 === 1) {
      let c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 0;
      c6 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      tmp();
      c4 = 0;
    }
    await "IconComponent";
    let closure_2 = tmp;
    ({ userId: c0, applicationId: c1, onSuccess: c2 } = closure_0);
    return "Set";
  });
  return obj(...arguments);
};
obj = function _removeGameFriend() {
  obj = _asyncToGenerator(async (userId) => {
    let c0;
    let c1;
    let c3;
    let c4;
    let closure_2;
    const obj5 = {
      userId,
      applicationId,
      onSuccess() {
        const AccessibilityAnnouncer = userId(closure_1_2[6]).AccessibilityAnnouncer;
        const announce = AccessibilityAnnouncer.announce;
        const intl = userId(closure_1_2[4]).intl;
        announce(intl.string(userId(closure_1_2[4]).t.zRf8cO));
      }
    };
    await closure_130_7(obj5);
    await "IconComponent";
    ({ userId: c0, applicationId: c1 } = closure_0);
    return "Set";
  });
  return obj(...arguments);
};
obj = function _cancelGameFriendRequest() {
  obj = _asyncToGenerator(async (userId) => {
    let c0;
    let c1;
    let c3;
    let c4;
    let closure_2;
    const obj5 = {
      userId,
      applicationId,
      onSuccess() {
        const AccessibilityAnnouncer = userId(closure_1_2[6]).AccessibilityAnnouncer;
        const announce = AccessibilityAnnouncer.announce;
        const intl = userId(closure_1_2[4]).intl;
        announce(intl.string(userId(closure_1_2[4]).t.XMf21q));
      }
    };
    await closure_130_7(obj5);
    await "IconComponent";
    ({ userId: c0, applicationId: c1 } = closure_0);
    return "Set";
  });
  return obj(...arguments);
};
({ Endpoints: closure_4, RelationshipTypes: hasOwnProperty } = Constants);
obj = {
  removeGameFriend() {
    return obj(...arguments);
  },
  acceptGameFriendRequest(arg0) {
    let applicationId;
    let userId;
    function onSuccess() {

    }
    ({ userId, applicationId } = arg0);
    const FRIEND = constants.FRIEND;
    const HTTP = onSuccess(1282).HTTP;
    const request = { url: closure_4.USER_GAME_RELATIONSHIP(userId, applicationId), body: { type: FRIEND }, oldFormErrors: true, rejectWithError: false };
    const putResult = HTTP.put(request);
    const nextPromise = putResult.then(() => {
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl3.intl;
      announce(intl.string(intl3.t.taJiuc));
    });
    return nextPromise.catch((error) => {
      let intl;
      const aPIError = new onSuccess(dependencyMap[2]).APIError(error);
      let anyErrorMessage = aPIError.getAnyErrorMessage();
      obj = { title: intl.string(onSuccess(dependencyMap[4]).t["328j/I"]), body: anyErrorMessage };
      const show = AlertActionCreatorsDefault.show;
      AlertActionCreatorsDefault;
      intl = onSuccess(dependencyMap[4]).intl;
      if (null == anyErrorMessage) {
        const intl2 = onSuccess(dependencyMap[4]).intl;
        anyErrorMessage = intl2.string(onSuccess(dependencyMap[4]).t.fEptJP);
      }
      show(obj);
      return Promise.reject(error);
    });
  },
  cancelGameFriendRequest() {
    return obj(...arguments);
  }
};
const result = size.fileFinishedImporting("modules/game_relationships/GameRelationshipActionCreators.tsx");

export default obj;