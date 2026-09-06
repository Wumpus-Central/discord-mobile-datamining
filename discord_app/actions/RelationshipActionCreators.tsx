// === Module 9042: RelationshipActionCreators ===

// Module 9042 (RelationshipActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1114 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import shared from "shared" /* 4411 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import openQuarantineModeInfoModalDefault from "openQuarantineModeInfoModal" /* 5522 */;
import ContextMenuActionCreators from "ContextMenuActionCreators" /* 5553 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 8404 */;
import ClaimAccountModalActionCreatorsAll from "ClaimAccountModalActionCreators" /* 9044 */;
import UserLimitedAccessUtils from "UserLimitedAccessUtils" /* 9045 */;
import FriendsUtils from "FriendsUtils" /* 9046 */;
import ClearAllIncomingRequestsConfirmationModalDefault from "ClearAllIncomingRequestsConfirmationModal" /* 9047 */;
import _slicedToArray from "module_32" /* 32 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function handleRelationshipAddError(error, SHOW_ALWAYS, userTag) {
  ({ status, body } = error);
  let num = body;
  if (body) {
    num = body.code;
  }
  if (429 === status) {
    if (SHOW_ALWAYS === obj.SHOW_ALWAYS) {
      obj = { title: null, body: null, confirmText: null };
      const intl7 = util.intl;
      obj.title = intl7.string(util.t["3D5eox"]);
      const intl8 = util.intl;
      obj.body = intl8.string(util.t.TuJriJ);
      const intl9 = util.intl;
      obj.confirmText = intl9.string(util.t.DppXIx);
      ContextMenuActionCreators.closeContextMenu();
      AlertActionCreatorsDefault.show(obj);
    }
  } else {
    if (403 === status) {
      if (num === constants.EMAIL_VERIFICATION_REQUIRED) {
        obj = { title: null, body: null, confirmText: null, onConfirm: null };
        const intl4 = util.intl;
        obj.title = intl4.string(util.t.Gqf33E);
        const intl5 = util.intl;
        obj.body = intl5.string(util.t.GHOBdx);
        const intl6 = util.intl;
        obj.confirmText = intl6.string(util.t.HbTSE6);
        obj.onConfirm = function onConfirm() {
          const result = ClaimAccountModalActionCreatorsAll.openClaimAccountModal();
        };
        ContextMenuActionCreators.closeContextMenu();
        AlertActionCreatorsDefault.show(obj);
      }
    }
    if (num === constants.USER_QUARANTINED) {
      ContextMenuActionCreators.closeContextMenu();
      openQuarantineModeInfoModalDefault();
    } else {
      if (!obj9.isLimitedAccessErrorCode(status, num)) {
        if (num !== tmp2.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
          if (SHOW_ALWAYS === obj.SHOW_ALWAYS) {
            if (null != userTag) {
              let tmp18Result = FriendsUtils;
              if (!num) {
                num = 0;
              }
              let humanizeAbortCodeResult = tmp18Result.humanizeAbortCode(num, userTag);
            } else {
              const intl = util.intl;
              humanizeAbortCodeResult = intl.string(util.t.paDJBM);
            }
            const obj1 = { title: null, body: null, confirmText: null };
            const intl2 = util.intl;
            obj1.title = intl2.string(util.t["6moJ8s"]);
            obj1.body = humanizeAbortCodeResult;
            const intl3 = util.intl;
            obj1.confirmText = intl3.string(util.t.BddRzS);
            tmp18Result = ContextMenuActionCreators;
            tmp18Result.closeContextMenu();
            AlertActionCreatorsDefault.show(obj1);
          }
        }
      }
      obj9 = UserLimitedAccessUtils;
    }
  }
  throw error;
}
const Constants = fn(1074);
({ Endpoints: metroRequire, AbortCodes: closure_7, RelationshipTypes: closure_8 } = Constants);
const ClearFriendRequestFilters = fn(9043).ClearFriendRequestFilters;
let obj = { SHOW_ALWAYS: 0, [0]: "SHOW_ALWAYS", SHOW_ONLY_IF_ACTION_NEEDED: 1, [1]: "SHOW_ONLY_IF_ACTION_NEEDED" };
obj = {
  sendRequest(discordTag) {
    const str = discordTag.discordTag;
    ({ captchaPayload, errorUxConfig } = discordTag);
    ({ context, note } = discordTag);
    if (errorUxConfig === undefined) {
      errorUxConfig = obj.SHOW_ALWAYS;
    }
    [tmp3, tmp4] = _slicedToArray(str.split("#"), 2);
    const HTTP = str(1272).HTTP;
    const request = { url: closure_6.USER_RELATIONSHIPS(), body: null, context: null, oldFormErrors: true, rejectWithError: null };
    obj = { username: tmp3, discriminator: parseInt(tmp4), note };
    const merged = Object.assign(captchaPayload);
    request.body = obj;
    request.context = context;
    const tmp2 = _slicedToArray(str.split("#"), 2);
    request.rejectWithError = str(1272).rejectWithMigratedError();
    const obj3 = str(1272);
    return HTTP.post(request).catch((error) => {
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
    const user = UserStore.getUser(userId);
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_6.USER_RELATIONSHIP(userId), body: null, context: null, oldFormErrors: true, rejectWithError: null };
    obj = { type, from_friend_suggestion: fromFriendSuggestion, confirm_stranger_request: confirmStrangerRequest };
    const merged = Object.assign(captchaPayload);
    request.body = obj;
    request.context = context;
    request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
    const obj3 = require("HTTPUtils");
    const putResult = HTTP.put(request);
    return HTTP.put(request).then(() => {
      if (closure_0 != null) {
        tmp();
      }
    }).catch((error) => {
      handleRelationshipAddError(error, SHOW_ALWAYS, UserUtilsDefault.getUserTag(closure_2));
    });
  },
  acceptFriendRequest(arg0) {
    return obj.addRelationship(arg0, () => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const intl = require("util").intl;
      AccessibilityAnnouncer.announce(intl.string(require("util").t["3goNa5"]));
    });
  },
  cancelFriendRequest(arg0, arg1) {
    return obj.removeRelationship(arg0, arg1, () => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const intl = require("util").intl;
      AccessibilityAnnouncer.announce(intl.string(require("util").t.pLUaxR));
    });
  },
  removeFriend(arg0, arg1) {
    obj.removeRelationship(arg0, arg1, () => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const intl = require("util").intl;
      AccessibilityAnnouncer.announce(intl.string(require("util").t.vGSLa2));
    });
  },
  blockUser(userId, context) {
    obj = { userId, context, type: constants2.BLOCKED };
    return obj.addRelationship(obj, () => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const intl = require("util").intl;
      AccessibilityAnnouncer.announce(intl.string(require("util").t.mU0Vrp));
    });
  },
  unblockUser(id, arg1) {
    return obj.removeRelationship(id, arg1, () => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const intl = require("util").intl;
      AccessibilityAnnouncer.announce(intl.string(require("util").t["9t1au7"]));
    });
  },
  removeRelationship(userId, context, arg2) {
    const _require = arg2;
    const HTTP = require("HTTPUtils").HTTP;
    obj = { url: closure_6.USER_RELATIONSHIP(userId), context, oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    const obj2 = require("HTTPUtils");
    const delResult = HTTP.del(obj);
    return HTTP.del(obj).then(() => {
      if (closure_0 != null) {
        tmp();
      }
    }).catch(() => {
      const AccessibilityAnnouncer = closure_0(4411).AccessibilityAnnouncer;
      const intl = closure_0(1114).intl;
      AccessibilityAnnouncer.announce(intl.string(closure_0(1114).t.n6Jo3E));
    });
  },
  updateRelationship(userId, c0) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: timestampProducer.USER_RELATIONSHIP(userId), body: { nickname }, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.patch(request);
  },
  fetchRelationships() {
    const HTTP = HTTPUtils.HTTP;
    value = HTTP.get({ url: timestampProducer.USER_RELATIONSHIPS(), oldFormErrors: true, rejectWithError: true });
    value.then((body) => {
      obj = { type: "LOAD_RELATIONSHIPS_SUCCESS", relationships: body.body };
      return obj.dispatch(obj);
    }, () => DispatcherDefault.dispatch({ type: "LOAD_RELATIONSHIPS_FAILURE" }));
  },
  confirmClearPendingRelationships(arg0) {
    ClearAllIncomingRequestsConfirmationModalDefault(arg0);
  },
  clearPendingRelationships() {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: timestampProducer.USER_RELATIONSHIPS(), query: { relationship_type: constants2.PENDING_INCOMING }, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    obj = { relationship_type: constants2.PENDING_INCOMING };
    const delResult = HTTP.del(request);
    return HTTP.del(request).then(() => {
      DispatcherDefault.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
    }).catch(() => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const intl = require("util").intl;
      AccessibilityAnnouncer.announce(intl.string(require("util").t.n6Jo3E));
    });
  },
  clearPendingSpamAndIgnored() {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: timestampProducer.USER_RELATIONSHIPS(), query: null, body: null, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    obj = { relationship_type: constants2.PENDING_INCOMING };
    request.query = obj;
    obj = { filters: null };
    const items = [, ];
    ({ SPAM: arr[0], IGNORED: arr[1] } = ClearFriendRequestFilters);
    obj.filters = items;
    request.body = obj;
    const delResult = HTTP.del(request);
    return HTTP.del(request).then(() => {
      DispatcherDefault.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
    }).catch(() => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const intl = require("util").intl;
      AccessibilityAnnouncer.announce(intl.string(require("util").t.n6Jo3E));
    });
  },
  ignoreUser(id, IGNORE_CONFIRMATION_ACTION_SHEET, channelId) {
    const _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    obj = { url: closure_6.IGNORE_USER(id), context: null, rejectWithError: null };
    obj = { location: IGNORE_CONFIRMATION_ACTION_SHEET };
    obj.context = obj;
    obj.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
    const obj3 = require("HTTPUtils");
    const putResult = HTTP.put(obj);
    return HTTP.put(obj).then(() => {
      obj = SafetyToastsActionCreatorsDefault;
      const result = obj.showIgnoreSuccessToast(userId, closure_1);
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t.Us93Ca));
      obj = { type: "RELATIONSHIP_IGNORE_USER_SUCCESS", userId, timestamp: Date.now() };
      DispatcherDefault.dispatch(obj);
    }).catch(() => {
      channelId(8404).showFailedToast();
      const AccessibilityAnnouncer = userId(4411).AccessibilityAnnouncer;
      const intl = userId(1114).intl;
      AccessibilityAnnouncer.announce(intl.string(userId(1114).t.n6Jo3E));
    });
  },
  unignoreUser(id, newestAnalyticsLocation, id2) {
    const _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    obj = { url: closure_6.IGNORE_USER(id), context: null, rejectWithError: null };
    obj = { location: newestAnalyticsLocation };
    obj.context = obj;
    obj.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
    const obj3 = require("HTTPUtils");
    const delResult = HTTP.del(obj);
    return HTTP.del(obj).then(() => {
      const result = SafetyToastsActionCreatorsDefault.showUnignoreSuccessToast(closure_0, closure_1);
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t.QlH5w6));
    }).catch(() => {
      id2(8404).showFailedToast();
      const AccessibilityAnnouncer = id(4411).AccessibilityAnnouncer;
      const intl = id(1114).intl;
      AccessibilityAnnouncer.announce(intl.string(id(1114).t.n6Jo3E));
    });
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("actions/RelationshipActionCreators.tsx");

export default obj;
export const RelationshipErrorUXConfig = obj;