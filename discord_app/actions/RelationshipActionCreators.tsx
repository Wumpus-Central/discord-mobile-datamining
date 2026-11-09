// === Module 7552: RelationshipActionCreators ===

// Module 7552 (RelationshipActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import util from "util" /* 1113 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import shared from "shared" /* 5147 */;
import UserUtilsDefault from "UserUtils" /* 5194 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 6090 */;
import openQuarantineModeInfoModalDefault from "openQuarantineModeInfoModal" /* 6959 */;
import ContextMenuActionCreators from "ContextMenuActionCreators" /* 6983 */;
import ClaimAccountModalActionCreatorsAll from "ClaimAccountModalActionCreators" /* 7555 */;
import UserLimitedAccessUtils from "UserLimitedAccessUtils" /* 7556 */;
import FriendsUtils from "FriendsUtils" /* 7557 */;
import QualtricsActionCreatorsDefault from "QualtricsActionCreators" /* 7559 */;
import SurveyActionTypes from "SurveyActionTypes" /* 7566 */;
import SafetyToastsUtils from "SafetyToastsUtils" /* 7567 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 7568 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import RelationshipStore from "RelationshipStore" /* 5082 */;
import UserStore from "UserStore" /* 1385 */;

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
        obj2 = { title: null, body: null, confirmText: null, onConfirm: null };
        const intl4 = util.intl;
        obj2.title = intl4.string(util.t.Gqf33E);
        const intl5 = util.intl;
        obj2.body = intl5.string(util.t.GHOBdx);
        const intl6 = util.intl;
        obj2.confirmText = intl6.string(util.t.HbTSE6);
        obj2.onConfirm = function onConfirm() {
          const result = ClaimAccountModalActionCreatorsAll.openClaimAccountModal();
        };
        ContextMenuActionCreators.closeContextMenu();
        AlertActionCreatorsDefault.show(obj2);
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
              if (!num) {
                num = 0;
              }
              let humanizeAbortCodeResult = FriendsUtils.humanizeAbortCode(num, userTag);
              const tmp18Result = FriendsUtils;
            } else {
              const intl = util.intl;
              humanizeAbortCodeResult = intl.string(util.t.paDJBM);
            }
            const obj3 = { title: null, body: null, confirmText: null };
            const intl2 = util.intl;
            obj3.title = intl2.string(util.t["6moJ8s"]);
            obj3.body = humanizeAbortCodeResult;
            const intl3 = util.intl;
            obj3.confirmText = intl3.string(util.t.BddRzS);
            ContextMenuActionCreators.closeContextMenu();
            const tmp18Result2 = ContextMenuActionCreators;
            AlertActionCreatorsDefault.show(obj3);
          }
        }
      }
      obj9 = UserLimitedAccessUtils;
    }
  }
  throw error;
}
function fireFriendRequestSurveyAction(arg0) {
  if (arg0 === constants2.PENDING_INCOMING) {
    QualtricsActionCreatorsDefault.fireSurveyAction(SurveyActionTypes.SurveyActionTypes.FRIEND_REQUEST_ACCEPTED);
  } else if (arg0 === tmp.NONE) {
    QualtricsActionCreatorsDefault.fireSurveyAction(SurveyActionTypes.SurveyActionTypes.FRIEND_REQUEST_SENT);
  }
}
const Constants = fn(1072);
({ Endpoints: closure_8, AbortCodes: closure_9, RelationshipTypes: closure_10 } = Constants);
const ClearFriendRequestFilters = fn(7553).ClearFriendRequestFilters;
const SafetyToastType = fn(7554).SafetyToastType;
const RelationshipErrorUXConfig = { SHOW_ALWAYS: 0, [0]: "SHOW_ALWAYS", SHOW_ONLY_IF_ACTION_NEEDED: 1, [1]: "SHOW_ONLY_IF_ACTION_NEEDED" };
let obj2 = {
  sendRequest(arg0) {
    ({ discordTag: require, context: importDefault, captchaPayload: importAll, note: dependencyMap, errorUxConfig } = arg0);
    if (errorUxConfig === undefined) {
      errorUxConfig = obj.SHOW_ALWAYS;
    }
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 !== v2) {
            if (1 === v2) {
              dependencyMap = 0;
              handleRelationshipAddError(closure_2, closure_129_4, closure_129_0);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_128_1 = value;
              fireFriendRequestSurveyAction(closure_128_0);
              dependencyMap = 0;
              c5 = 3;
              obj = { value: closure_128_1, done: true };
              return obj;
            }
          }
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp3;
            closure_0 = closure_129_4;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            [tmp27, tmp42] = v2(_require.split("#"), 2);
            let HTTP = UserStore.findByTag(merged, tmp42);
            if (null != HTTP) {
              let NONE = relationshipType.getRelationshipType(HTTP.id);
            } else {
              NONE = constants.NONE;
            }
            closure_128_0 = NONE;
            dependencyMap = 1;
            HTTP = closure_0(1282).HTTP;
            const request = { url: closure_1_8.USER_RELATIONSHIPS(), body: null, context: null, oldFormErrors: true, rejectWithError: null };
            const obj6 = { username: merged, discriminator: null, note: null };
            const _parseInt = parseInt;
            obj6.discriminator = parseInt(tmp42);
            obj6.note = note;
            merged = Object.assign(importAll);
            request.body = obj6;
            request.context = context;
            const tmp41 = v2(_require.split("#"), 2);
            request.rejectWithError = closure_0(1282).rejectWithMigratedError();
            HTTP.post(request);
            v2 = 2;
            c5 = 1;
            const obj5 = closure_0(1282);
          }
        } catch (tmp30) {
          closure_2 = tmp30;
          if (tmp4 === dependencyMap) {
            c5 = tmp2;
            throw tmp30;
          } else {
            v2 = tmp;
          }
        }
      }
    })();
  },
  addRelationship(captchaPayload, arg1) {
    ({ userId, type } = captchaPayload);
    closure_1 = arg1;
    let SHOW_ALWAYS = arg2;
    ({ context, fromFriendSuggestion, confirmStrangerRequest } = captchaPayload);
    if (arg2 === undefined) {
      SHOW_ALWAYS = body.SHOW_ALWAYS;
    }
    dependencyMap = UserStore.getUser(userId);
    const relationshipType = RelationshipStore.getRelationshipType(userId);
    const HTTP = type(1282).HTTP;
    const request = { url: closure_8.USER_RELATIONSHIP(userId), body: null, context: null, oldFormErrors: true, rejectWithError: null };
    body = { type, from_friend_suggestion: fromFriendSuggestion, confirm_stranger_request: confirmStrangerRequest };
    const merged = Object.assign(captchaPayload.captchaPayload);
    request.body = body;
    request.context = context;
    request.rejectWithError = type(1282).rejectWithMigratedError();
    let obj3 = type(1282);
    const putResult = HTTP.put(request);
    return HTTP.put(request).then(() => {
      if (type === constants2.BLOCKED) {
        if (closure_4 !== constants2.BLOCKED) {
          QualtricsActionCreatorsDefault.fireSurveyAction(SurveyActionTypes.SurveyActionTypes.USER_BLOCKED);
        }
        if (closure_1 != null) {
          tmp14();
        }
      }
      if (!tmp4) {
        if (closure_4 === constants2.PENDING_INCOMING) {
          QualtricsActionCreatorsDefault.fireSurveyAction(SurveyActionTypes.SurveyActionTypes.FRIEND_REQUEST_ACCEPTED);
        } else if (tmp5 === constants2.NONE) {
          QualtricsActionCreatorsDefault.fireSurveyAction(SurveyActionTypes.SurveyActionTypes.FRIEND_REQUEST_SENT);
        }
      }
      tmp4 = null != type && type !== constants2.FRIEND;
    }).catch((error) => {
      handleRelationshipAddError(error, SHOW_ALWAYS, UserUtilsDefault.getUserTag(closure_3));
    });
  },
  acceptFriendRequest(captchaPayload) {
    return obj2.addRelationship(captchaPayload, function onSuccess() {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const intl = require("util").intl;
      AccessibilityAnnouncer.announce(intl.string(require("util").t["3goNa5"]));
    });
  },
  cancelFriendRequest(arg0, arg1) {
    return obj2.removeRelationship(arg0, arg1, function onSuccess() {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const intl = require("util").intl;
      AccessibilityAnnouncer.announce(intl.string(require("util").t.pLUaxR));
    });
  },
  removeFriend(arg0, arg1) {
    obj2.removeRelationship(arg0, arg1, function onSuccess() {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const intl = require("util").intl;
      AccessibilityAnnouncer.announce(intl.string(require("util").t.vGSLa2));
    });
  },
  blockUser(id, context, channelId) {
    closure_0 = id;
    closure_1 = channelId;
    return obj2.addRelationship({ userId: id, context, type: constants2.BLOCKED }, function onSuccess() {
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(SafetyToastsUtils.getSafetyToastTypeContent(SafetyToastType.BLOCK_SUCCESS, closure_0, closure_1));
    });
  },
  unblockUser(id, arg1, channelId) {
    closure_0 = id;
    closure_1 = channelId;
    return obj2.removeRelationship(id, arg1, function onSuccess() {
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(SafetyToastsUtils.getSafetyToastTypeContent(SafetyToastType.UNBLOCK_SUCCESS, closure_0, closure_1));
    });
  },
  removeRelationship(userId, context, arg2) {
    const _require = arg2;
    const HTTP = require("HTTPUtils").HTTP;
    obj = { url: closure_8.USER_RELATIONSHIP(userId), context, oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    obj2 = require("HTTPUtils");
    const delResult = HTTP.del(obj);
    return HTTP.del(obj).then(() => {
      if (closure_0 != null) {
        tmp();
      }
    }).catch(() => {
      const AccessibilityAnnouncer = closure_0(5147).AccessibilityAnnouncer;
      const intl = closure_0(1113).intl;
      AccessibilityAnnouncer.announce(intl.string(closure_0(1113).t.n6Jo3E));
    });
  },
  updateRelationship(userId, c0) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: React5.USER_RELATIONSHIP(userId), body: null, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    const body = { nickname };
    request.body = body;
    return HTTP.patch(request);
  },
  fetchRelationships() {
    const HTTP = HTTPUtils.HTTP;
    value = HTTP.get({ url: React5.USER_RELATIONSHIPS(), oldFormErrors: true, rejectWithError: true });
    value.then((body) => DispatcherDefault.dispatch({ type: "LOAD_RELATIONSHIPS_SUCCESS", relationships: body.body }), () => DispatcherDefault.dispatch({ type: "LOAD_RELATIONSHIPS_FAILURE" }));
  },
  clearPendingRelationships() {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: React5.USER_RELATIONSHIPS(), query: null, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    const query = { relationship_type: constants2.PENDING_INCOMING };
    request.query = query;
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
    const request = { url: React5.USER_RELATIONSHIPS(), query: null, body: null, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    const query = { relationship_type: constants2.PENDING_INCOMING };
    request.query = query;
    obj2 = { filters: null };
    items = [, ];
    ({ SPAM: arr[0], IGNORED: arr[1] } = ClearFriendRequestFilters);
    obj2.filters = items;
    request.body = obj2;
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
    obj = { url: closure_8.IGNORE_USER(id), context: { location: IGNORE_CONFIRMATION_ACTION_SHEET }, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    obj2 = { location: IGNORE_CONFIRMATION_ACTION_SHEET };
    let obj3 = require("HTTPUtils");
    const putResult = HTTP.put(obj);
    return HTTP.put(obj).then(() => {
      obj = DispatcherDefault;
      obj.dispatch({ type: "RELATIONSHIP_IGNORE_USER_SUCCESS", userId, timestamp: Date.now() });
      obj2 = { type: "RELATIONSHIP_IGNORE_USER_SUCCESS", userId, timestamp: Date.now() };
      const result = SafetyToastsActionCreatorsDefault.showIgnoreSuccessToast(userId, closure_1);
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(SafetyToastsUtils.getSafetyToastTypeContent(SafetyToastType.IGNORE_SUCCESS, userId, closure_1));
    }).catch(() => {
      channelId(7568).showFailedToast();
      const AccessibilityAnnouncer = userId(5147).AccessibilityAnnouncer;
      const intl = userId(1113).intl;
      AccessibilityAnnouncer.announce(intl.string(userId(1113).t.n6Jo3E));
    });
  },
  unignoreUser(id, UserProfileRemediatedNotice, channelId) {
    const _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    obj = { url: closure_8.IGNORE_USER(id), context: { location: UserProfileRemediatedNotice }, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    obj2 = { location: UserProfileRemediatedNotice };
    let obj3 = require("HTTPUtils");
    const delResult = HTTP.del(obj);
    return HTTP.del(obj).then(() => {
      DispatcherDefault.dispatch({ type: "RELATIONSHIP_UNIGNORE_USER_SUCCESS", userId });
      obj2 = { type: "RELATIONSHIP_UNIGNORE_USER_SUCCESS", userId };
      const result = SafetyToastsActionCreatorsDefault.showUnignoreSuccessToast(userId, closure_1);
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(SafetyToastsUtils.getSafetyToastTypeContent(SafetyToastType.UNIGNORE_SUCCESS, userId, closure_1));
    }).catch(() => {
      channelId(7568).showFailedToast();
      const AccessibilityAnnouncer = userId(5147).AccessibilityAnnouncer;
      const intl = userId(1113).intl;
      AccessibilityAnnouncer.announce(intl.string(userId(1113).t.n6Jo3E));
    });
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("actions/RelationshipActionCreators.tsx");

export default obj2;
export { RelationshipErrorUXConfig };