// === Module 9736: handleRelationshipAddError ===

// Module 9736 (handleRelationshipAddError)
import sendRequest from "sendRequest" /* 530 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import obj132Default from "obj132" /* 4827 */;
import openQuarantineModeInfoModalDefault from "openQuarantineModeInfoModal" /* 6780 */;
import openContextMenu from "openContextMenu" /* 6911 */;
import isLimitedAccessErrorCode from "isLimitedAccessErrorCode" /* 9739 */;
import validateDiscordTag from "validateDiscordTag" /* 9740 */;
import openClearAllIncomingRequestsConfirmationModalDefault from "openClearAllIncomingRequestsConfirmationModal" /* 9741 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import { ClearFriendRequestFilters } from "ClearFriendRequestFilters" /* 9737 */;

require = fn;
function handleRelationshipAddError(error, SHOW_ALWAYS, substr) {
  ({ status, body } = error);
  let num = body;
  if (body) {
    num = body.code;
  }
  if (429 === status) {
    if (SHOW_ALWAYS === obj.SHOW_ALWAYS) {
      obj = { title: null, body: null, confirmText: null };
      const intl7 = getSystemLocale.intl;
      obj[0] = intl7.string(getSystemLocale.t["3D5eox"]);
      const intl8 = getSystemLocale.intl;
      obj[1] = intl8.string(getSystemLocale.t.TuJriJ);
      const intl9 = getSystemLocale.intl;
      obj[2] = intl9.string(getSystemLocale.t.DppXIx);
      openContextMenu.closeContextMenu();
      obj132Default.show(obj);
    }
  } else {
    if (403 === status) {
      if (num === constants.EMAIL_VERIFICATION_REQUIRED) {
        obj = { title: null, body: null, confirmText: null, onConfirm: null };
        const intl4 = getSystemLocale.intl;
        obj[0] = intl4.string(getSystemLocale.t.Gqf33E);
        const intl5 = getSystemLocale.intl;
        obj[1] = intl5.string(getSystemLocale.t.GHOBdx);
        const intl6 = getSystemLocale.intl;
        obj[2] = intl6.string(getSystemLocale.t.HbTSE6);
        obj[3] = function onConfirm() {
          const result = callback(table[8]).openClaimAccountModal();
        };
        openContextMenu.closeContextMenu();
        obj132Default.show(obj);
      }
    }
    if (num === constants.USER_QUARANTINED) {
      openContextMenu.closeContextMenu();
      openQuarantineModeInfoModalDefault();
    } else {
      if (!obj9.isLimitedAccessErrorCode(status, num)) {
        if (num !== tmp2.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
          if (SHOW_ALWAYS === obj.SHOW_ALWAYS) {
            if (null != substr) {
              let tmp18Result = validateDiscordTag;
              if (!num) {
                num = 0;
              }
              let humanizeAbortCodeResult = tmp18Result.humanizeAbortCode(num, substr);
            } else {
              const intl = getSystemLocale.intl;
              humanizeAbortCodeResult = intl.string(getSystemLocale.t.paDJBM);
            }
            obj1 = { title: null, body: null, confirmText: null };
            const intl2 = getSystemLocale.intl;
            obj1[0] = intl2.string(getSystemLocale.t["6moJ8s"]);
            obj1[1] = humanizeAbortCodeResult;
            const intl3 = getSystemLocale.intl;
            obj1[2] = intl3.string(getSystemLocale.t.BddRzS);
            tmp18Result = openContextMenu;
            tmp18Result.closeContextMenu();
            obj132Default.show(obj1);
          }
        }
      }
      obj9 = isLimitedAccessErrorCode;
    }
  }
  throw error;
}
({ Endpoints: closure_6, AbortCodes: error, RelationshipTypes: closure_8 } = ME);
let obj = {
  sendRequest(discordTag) {
    const str = discordTag.discordTag;
    ({ captchaPayload, errorUxConfig } = discordTag);
    ({ context, note } = discordTag);
    if (errorUxConfig === undefined) {
      errorUxConfig = obj.SHOW_ALWAYS;
    }
    [tmp3, tmp4] = callback(str.split("#"), 2);
    const HTTP = str(530).HTTP;
    { url: closure_6.USER_RELATIONSHIPS(), body: null, context: null, oldFormErrors: true, rejectWithError: null };
    obj = { username: tmp3, discriminator: parseInt(tmp4), note };
    const merged = Object.assign(captchaPayload);
    obj[1] = obj;
    obj[2] = context;
    const tmp2 = callback(str.split("#"), 2);
    obj[4] = str(530).rejectWithMigratedError();
    const obj3 = str(530);
    return HTTP.post(obj).catch((error) => {
      handleRelationshipAddError(error, errorUxConfig, str);
    });
  },
  addRelationship(arg0, arg1) {
    ({ userId, captchaPayload } = arg0);
    const _require = arg1;
    let SHOW_ALWAYS = arg2;
    ({ context, type, fromFriendSuggestion, confirmStrangerRequest } = arg0);
    if (arg2 === undefined) {
      SHOW_ALWAYS = obj.SHOW_ALWAYS;
    }
    const user2 = user.getUser(userId);
    const HTTP = _require(530).HTTP;
    { url: closure_6.USER_RELATIONSHIP(userId), body: null, context: null, oldFormErrors: true, rejectWithError: null };
    obj = { type, from_friend_suggestion: fromFriendSuggestion, confirm_stranger_request: confirmStrangerRequest };
    const merged = Object.assign(captchaPayload);
    obj[1] = obj;
    obj[2] = context;
    obj[4] = _require(530).rejectWithMigratedError();
    const obj3 = _require(530);
    const putResult = HTTP.put(obj);
    return HTTP.put(obj).then((result) => {
      if (closure_0 != null) {
        tmp();
      }
    }).catch((error) => {
      handleRelationshipAddError(error, SHOW_ALWAYS, SHOW_ALWAYS(dependencyMap[12]).getUserTag(closure_2));
    });
  },
  acceptFriendRequest(arg0) {
    return obj.addRelationship(arg0, () => {
      const AccessibilityAnnouncer = callback(1363).AccessibilityAnnouncer;
      const intl = callback(1236).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(1236).t["3goNa5"]));
    });
  },
  cancelFriendRequest(arg0, arg1) {
    return obj.removeRelationship(arg0, arg1, () => {
      const AccessibilityAnnouncer = callback(1363).AccessibilityAnnouncer;
      const intl = callback(1236).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(1236).t.pLUaxR));
    });
  },
  removeFriend(arg0, arg1) {
    obj.removeRelationship(arg0, arg1, () => {
      const AccessibilityAnnouncer = callback(1363).AccessibilityAnnouncer;
      const intl = callback(1236).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(1236).t.vGSLa2));
    });
  },
  blockUser(userId, context) {
    obj = { userId, context, type: constants2.BLOCKED };
    return obj.addRelationship(obj, () => {
      const AccessibilityAnnouncer = callback(1363).AccessibilityAnnouncer;
      const intl = callback(1236).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(1236).t.mU0Vrp));
    });
  },
  unblockUser(id, arg1) {
    return obj.removeRelationship(id, arg1, () => {
      const AccessibilityAnnouncer = callback(1363).AccessibilityAnnouncer;
      const intl = callback(1236).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(1236).t["9t1au7"]));
    });
  },
  removeRelationship(userId, context) {
    const _require = arg2;
    const HTTP = _require(530).HTTP;
    obj = { url: closure_6.USER_RELATIONSHIP(userId), context, oldFormErrors: true, rejectWithError: _require(530).rejectWithMigratedError() };
    const obj2 = _require(530);
    const delResult = HTTP.del(obj);
    return HTTP.del(obj).then((result) => {
      if (closure_0 != null) {
        tmp();
      }
    }).catch((error) => {
      const AccessibilityAnnouncer = callback(1363).AccessibilityAnnouncer;
      const intl = callback(1236).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(1236).t.n6Jo3E));
    });
  },
  updateRelationship(userId, c0) {
    const HTTP = sendRequest.HTTP;
    { url: closure_6.USER_RELATIONSHIP(userId), body: obj, rejectWithError: null };
    obj = { nickname: c0 };
    obj[2] = sendRequest.rejectWithMigratedError();
    return HTTP.patch(obj);
  },
  fetchRelationships() {
    const HTTP = sendRequest.HTTP;
    const value = HTTP.get({ url: closure_6.USER_RELATIONSHIPS(), oldFormErrors: true, rejectWithError: true });
    value.then((result) => {
      callback(709);
      obj = { type: "LOAD_RELATIONSHIPS_SUCCESS", relationships: result.body };
      return obj.dispatch(obj);
    }, () => callback(709).dispatch({ type: "LOAD_RELATIONSHIPS_FAILURE" }));
  },
  confirmClearPendingRelationships(arg0) {
    openClearAllIncomingRequestsConfirmationModalDefault(arg0);
  },
  clearPendingRelationships() {
    const HTTP = sendRequest.HTTP;
    { url: closure_6.USER_RELATIONSHIPS(), query: obj, rejectWithError: null };
    obj = { relationship_type: constants2.PENDING_INCOMING };
    obj[2] = sendRequest.rejectWithMigratedError();
    const delResult = HTTP.del(obj);
    return HTTP.del(obj).then((result) => {
      callback2(709).dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
    }).catch((error) => {
      const AccessibilityAnnouncer = callback(1363).AccessibilityAnnouncer;
      const intl = callback(1236).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(1236).t.n6Jo3E));
    });
  },
  clearPendingSpamAndIgnored() {
    const HTTP = sendRequest.HTTP;
    { url: closure_6.USER_RELATIONSHIPS(), query: obj, body: { filters: items }, rejectWithError: null };
    obj = { relationship_type: constants2.PENDING_INCOMING };
    items = [, ];
    ({ SPAM: arr[0], IGNORED: arr[1] } = ClearFriendRequestFilters);
    obj[3] = sendRequest.rejectWithMigratedError();
    const delResult = HTTP.del(obj);
    return HTTP.del(obj).then((result) => {
      callback2(709).dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
    }).catch((error) => {
      const AccessibilityAnnouncer = callback(1363).AccessibilityAnnouncer;
      const intl = callback(1236).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(1236).t.n6Jo3E));
    });
  },
  ignoreUser(closure_3, IGNORE_CONFIRMATION_ACTION_SHEET, channelId) {
    const _require = closure_3;
    closure_1 = channelId;
    const HTTP = _require(530).HTTP;
    { url: closure_6.IGNORE_USER(closure_3), context: obj, rejectWithError: null };
    obj = { location: IGNORE_CONFIRMATION_ACTION_SHEET };
    obj[2] = _require(530).rejectWithMigratedError();
    const obj3 = _require(530);
    const putResult = HTTP.put(obj);
    return HTTP.put(obj).then((result) => {
      obj = channelId(dependencyMap[16]);
      result = obj.showIgnoreSuccessToast(callback, channelId);
      const AccessibilityAnnouncer = callback(dependencyMap[13]).AccessibilityAnnouncer;
      const intl = callback(dependencyMap[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(dependencyMap[7]).t.Us93Ca));
      obj = { type: "RELATIONSHIP_IGNORE_USER_SUCCESS", userId: callback, timestamp: Date.now() };
      channelId(dependencyMap[14]).dispatch(obj);
    }).catch((error) => {
      channelId(6553).showFailedToast();
      const AccessibilityAnnouncer = callback(1363).AccessibilityAnnouncer;
      const intl = callback(1236).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(1236).t.n6Jo3E));
    });
  },
  unignoreUser(id, newestAnalyticsLocation, id2) {
    const _require = id;
    closure_1 = id2;
    const HTTP = _require(530).HTTP;
    { url: closure_6.IGNORE_USER(id), context: obj, rejectWithError: null };
    obj = { location: newestAnalyticsLocation };
    obj[2] = _require(530).rejectWithMigratedError();
    const obj3 = _require(530);
    const delResult = HTTP.del(obj);
    return HTTP.del(obj).then((result) => {
      result = id2(dependencyMap[16]).showUnignoreSuccessToast(id, id2);
      const AccessibilityAnnouncer = id(dependencyMap[13]).AccessibilityAnnouncer;
      const intl = id(dependencyMap[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(id(dependencyMap[7]).t.QlH5w6));
    }).catch((error) => {
      id2(6553).showFailedToast();
      const AccessibilityAnnouncer = id(1363).AccessibilityAnnouncer;
      const intl = id(1236).intl;
      AccessibilityAnnouncer.announce(intl.string(id(1236).t.n6Jo3E));
    });
  }
};
let result = require("obj132").fileFinishedImporting("actions/RelationshipActionCreators.tsx");

export default obj;
export const RelationshipErrorUXConfig = obj;