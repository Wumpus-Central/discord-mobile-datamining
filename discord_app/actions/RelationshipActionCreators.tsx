// discord_app/actions/RelationshipActionCreators.tsx
import _slicedToArray from "_slicedToArray";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { ClearFriendRequestFilters } from "ClearFriendRequestFilters";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
function handleRelationshipAddError(arg0, arg1, substr) {
  let body;
  let status;
  ({ status, body } = arg0);
  let num = body;
  if (body) {
    num = body.code;
  }
  if (429 === status) {
    if (arg1 === obj.SHOW_ALWAYS) {
      obj = { title: null, body: null, confirmText: null };
      const intl7 = require("../intl/index.native.tsx") /* getSystemLocale */.intl;
      obj[0] = intl7.string(require("../intl/index.native.tsx") /* getSystemLocale */.t["3D5eox"]);
      const intl8 = require("../intl/index.native.tsx") /* getSystemLocale */.intl;
      obj[1] = intl8.string(require("../intl/index.native.tsx") /* getSystemLocale */.t.TuJriJ);
      const intl9 = require("../intl/index.native.tsx") /* getSystemLocale */.intl;
      obj[2] = intl9.string(require("../intl/index.native.tsx") /* getSystemLocale */.t.DppXIx);
      require("ContextMenuActionCreators.tsx") /* openContextMenu */.closeContextMenu();
      const obj11 = require("ContextMenuActionCreators.tsx") /* openContextMenu */;
      require("AlertActionCreators.tsx").show(obj);
      const obj12 = require("AlertActionCreators.tsx");
    }
  } else {
    if (403 === status) {
      if (num === constants.EMAIL_VERIFICATION_REQUIRED) {
        obj = { title: null, body: null, confirmText: null, onConfirm: null };
        const intl4 = require("../intl/index.native.tsx") /* getSystemLocale */.intl;
        obj[0] = intl4.string(require("../intl/index.native.tsx") /* getSystemLocale */.t.Gqf33E);
        const intl5 = require("../intl/index.native.tsx") /* getSystemLocale */.intl;
        obj[1] = intl5.string(require("../intl/index.native.tsx") /* getSystemLocale */.t.GHOBdx);
        const intl6 = require("../intl/index.native.tsx") /* getSystemLocale */.intl;
        obj[2] = intl6.string(require("../intl/index.native.tsx") /* getSystemLocale */.t.HbTSE6);
        obj[3] = function onConfirm() {
          const result = callback(table[8]).openClaimAccountModal();
        };
        require("ContextMenuActionCreators.tsx") /* openContextMenu */.closeContextMenu();
        const obj7 = require("ContextMenuActionCreators.tsx") /* openContextMenu */;
        require("AlertActionCreators.tsx").show(obj);
        const obj8 = require("AlertActionCreators.tsx");
      }
    }
    if (num === constants.USER_QUARANTINED) {
      require("ContextMenuActionCreators.tsx") /* openContextMenu */.closeContextMenu();
      require("../modules/quarantine/openQuarantineModeInfoModal.native.tsx")();
      const obj5 = require("ContextMenuActionCreators.tsx") /* openContextMenu */;
    } else {
      if (!obj9.isLimitedAccessErrorCode(status, num)) {
        if (num !== tmp2.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
          if (arg1 === obj.SHOW_ALWAYS) {
            if (null != substr) {
              let tmp18Result = tmp18(9165);
              if (!num) {
                num = 0;
              }
              let humanizeAbortCodeResult = tmp18Result.humanizeAbortCode(num, substr);
            } else {
              const intl = tmp18(1236).intl;
              humanizeAbortCodeResult = intl.string(tmp18(1236).t.paDJBM);
            }
            const obj1 = { title: null, body: null, confirmText: null };
            const intl2 = tmp18(1236).intl;
            obj1[0] = intl2.string(tmp18(1236).t["6moJ8s"]);
            obj1[1] = humanizeAbortCodeResult;
            const intl3 = tmp18(1236).intl;
            obj1[2] = intl3.string(tmp18(1236).t.BddRzS);
            tmp18Result = tmp18(5283);
            tmp18Result.closeContextMenu();
            require("AlertActionCreators.tsx").show(obj1);
            const obj4 = require("AlertActionCreators.tsx");
          }
        }
      }
      obj9 = require("../modules/user_limited_access/UserLimitedAccessUtils.tsx") /* isLimitedAccessErrorCode */;
    }
  }
  throw arg0;
}
({ Endpoints: closure_6, AbortCodes: error, RelationshipTypes: metroImportAll } = ME);
let obj = { SHOW_ALWAYS: 0, [0]: "SHOW_ALWAYS", SHOW_ONLY_IF_ACTION_NEEDED: 1, [1]: "SHOW_ONLY_IF_ACTION_NEEDED" };
obj = {
  sendRequest(discordTag) {
    let captchaPayload;
    let context;
    let errorUxConfig;
    let note;
    let tmp3;
    let tmp4;
    const str = discordTag.discordTag;
    ({ captchaPayload, errorUxConfig } = discordTag);
    ({ context, note } = discordTag);
    if (errorUxConfig === undefined) {
      errorUxConfig = obj.SHOW_ALWAYS;
    }
    [tmp3, tmp4] = callback(str.split("#"), 2);
    const HTTP = str(530).HTTP;
    obj = { url: closure_6.USER_RELATIONSHIPS(), body: null, context: null, oldFormErrors: true, rejectWithError: null };
    obj = { username: tmp3, discriminator: parseInt(tmp4), note };
    const merged = Object.assign(captchaPayload);
    obj[1] = obj;
    obj[2] = context;
    const tmp2 = callback(str.split("#"), 2);
    obj[4] = str(530).rejectWithMigratedError();
    const obj3 = str(530);
    return HTTP.post(obj).catch((arg0) => {
      outer1_11(arg0, errorUxConfig, str);
    });
  },
  addRelationship(arg0, arg1) {
    let captchaPayload;
    let confirmStrangerRequest;
    let context;
    let fromFriendSuggestion;
    let type;
    let userId;
    ({ userId, captchaPayload } = arg0);
    const _require = arg1;
    let SHOW_ALWAYS = arg2;
    ({ context, type, fromFriendSuggestion, confirmStrangerRequest } = arg0);
    if (arg2 === undefined) {
      SHOW_ALWAYS = obj.SHOW_ALWAYS;
    }
    let user2;
    user2 = user.getUser(userId);
    const HTTP = _require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
    obj = { url: closure_6.USER_RELATIONSHIP(userId), body: null, context: null, oldFormErrors: true, rejectWithError: null };
    obj = { type, from_friend_suggestion: fromFriendSuggestion, confirm_stranger_request: confirmStrangerRequest };
    const merged = Object.assign(captchaPayload);
    obj[1] = obj;
    obj[2] = context;
    obj[4] = _require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").rejectWithMigratedError();
    const obj3 = _require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx");
    const putResult = HTTP.put(obj);
    return HTTP.put(obj).then(() => {
      if (closure_0 != null) {
        tmp();
      }
    }).catch((arg0) => {
      outer1_11(arg0, SHOW_ALWAYS, SHOW_ALWAYS(outer1_3[12]).getUserTag(closure_2));
    });
  },
  acceptFriendRequest(arg0) {
    return obj.addRelationship(arg0, () => {
      const AccessibilityAnnouncer = callback(4131).AccessibilityAnnouncer;
      const intl = callback(1236).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(1236).t["3goNa5"]));
    });
  },
  cancelFriendRequest(arg0, arg1) {
    return obj.removeRelationship(arg0, arg1, () => {
      const AccessibilityAnnouncer = callback(4131).AccessibilityAnnouncer;
      const intl = callback(1236).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(1236).t.pLUaxR));
    });
  },
  removeFriend(arg0, arg1) {
    obj.removeRelationship(arg0, arg1, () => {
      const AccessibilityAnnouncer = callback(4131).AccessibilityAnnouncer;
      const intl = callback(1236).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(1236).t.vGSLa2));
    });
  },
  blockUser(userId, context) {
    const obj = { userId, context, type: constants2.BLOCKED };
    return obj.addRelationship(obj, () => {
      const AccessibilityAnnouncer = callback(4131).AccessibilityAnnouncer;
      const intl = callback(1236).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(1236).t.mU0Vrp));
    });
  },
  unblockUser(id, arg1) {
    return obj.removeRelationship(id, arg1, () => {
      const AccessibilityAnnouncer = callback(4131).AccessibilityAnnouncer;
      const intl = callback(1236).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(1236).t["9t1au7"]));
    });
  },
  removeRelationship(userId, context) {
    const _require = arg2;
    const HTTP = _require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
    const obj = { url: closure_6.USER_RELATIONSHIP(userId), context, oldFormErrors: true, rejectWithError: null };
    obj[3] = _require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").rejectWithMigratedError();
    const obj2 = _require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx");
    const delResult = HTTP.del(obj);
    return HTTP.del(obj).then(() => {
      if (closure_0 != null) {
        tmp();
      }
    }).catch(() => {
      const AccessibilityAnnouncer = callback(4131).AccessibilityAnnouncer;
      const intl = callback(1236).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(1236).t.n6Jo3E));
    });
  },
  updateRelationship(userId, c0) {
    const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.HTTP;
    obj = { url: closure_6.USER_RELATIONSHIP(userId), body: obj, rejectWithError: null };
    obj = { nickname: c0 };
    obj[2] = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.rejectWithMigratedError();
    return HTTP.patch(obj);
  },
  fetchRelationships() {
    const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.HTTP;
    const value = HTTP.get({ url: closure_6.USER_RELATIONSHIPS(), oldFormErrors: true, rejectWithError: true });
    value.then((body) => {
      let obj = callback(709);
      obj = { type: "LOAD_RELATIONSHIPS_SUCCESS", relationships: body.body };
      return obj.dispatch(obj);
    }, () => callback(709).dispatch({ type: "LOAD_RELATIONSHIPS_FAILURE" }));
  },
  confirmClearPendingRelationships(arg0) {
    require("../modules/people/ClearAllIncomingRequestsConfirmationModal.tsx")(arg0);
  },
  clearPendingRelationships() {
    const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.HTTP;
    obj = { url: closure_6.USER_RELATIONSHIPS(), query: obj, rejectWithError: null };
    obj = { relationship_type: constants2.PENDING_INCOMING };
    obj[2] = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.rejectWithMigratedError();
    const obj3 = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */;
    const delResult = HTTP.del(obj);
    return HTTP.del(obj).then(() => {
      callback2(709).dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
    }).catch(() => {
      const AccessibilityAnnouncer = callback(4131).AccessibilityAnnouncer;
      const intl = callback(1236).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(1236).t.n6Jo3E));
    });
  },
  clearPendingSpamAndIgnored() {
    const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.HTTP;
    obj = { url: closure_6.USER_RELATIONSHIPS(), query: obj, body: { filters: items }, rejectWithError: null };
    obj = { relationship_type: constants2.PENDING_INCOMING };
    items = [, ];
    ({ SPAM: arr[0], IGNORED: arr[1] } = ClearFriendRequestFilters);
    obj[3] = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.rejectWithMigratedError();
    const obj3 = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */;
    const delResult = HTTP.del(obj);
    return HTTP.del(obj).then(() => {
      callback2(709).dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
    }).catch(() => {
      const AccessibilityAnnouncer = callback(4131).AccessibilityAnnouncer;
      const intl = callback(1236).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(1236).t.n6Jo3E));
    });
  },
  ignoreUser(closure_3, IGNORE_CONFIRMATION_ACTION_SHEET, channelId) {
    const _require = closure_3;
    let closure_1 = channelId;
    const HTTP = _require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
    obj = { url: closure_6.IGNORE_USER(closure_3), context: obj, rejectWithError: null };
    obj = { location: IGNORE_CONFIRMATION_ACTION_SHEET };
    obj[2] = _require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").rejectWithMigratedError();
    const obj3 = _require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx");
    const putResult = HTTP.put(obj);
    return HTTP.put(obj).then(() => {
      let obj = channelId(outer1_3[16]);
      const result = obj.showIgnoreSuccessToast(callback, channelId);
      const AccessibilityAnnouncer = callback(outer1_3[13]).AccessibilityAnnouncer;
      const intl = callback(outer1_3[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(outer1_3[7]).t.Us93Ca));
      obj = { type: "RELATIONSHIP_IGNORE_USER_SUCCESS", userId: callback, timestamp: Date.now() };
      channelId(outer1_3[14]).dispatch(obj);
    }).catch(() => {
      channelId(7707).showFailedToast();
      const AccessibilityAnnouncer = callback(4131).AccessibilityAnnouncer;
      const intl = callback(1236).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(1236).t.n6Jo3E));
    });
  },
  unignoreUser(id, UserProfileRemediatedNotice, id2) {
    const _require = id;
    let closure_1 = id2;
    const HTTP = _require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
    obj = { url: closure_6.IGNORE_USER(id), context: obj, rejectWithError: null };
    obj = { location: UserProfileRemediatedNotice };
    obj[2] = _require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").rejectWithMigratedError();
    const obj3 = _require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx");
    const delResult = HTTP.del(obj);
    return HTTP.del(obj).then(() => {
      const result = id2(outer1_3[16]).showUnignoreSuccessToast(id, id2);
      const AccessibilityAnnouncer = id(outer1_3[13]).AccessibilityAnnouncer;
      const intl = id(outer1_3[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(id(outer1_3[7]).t.QlH5w6));
    }).catch(() => {
      id2(7707).showFailedToast();
      const AccessibilityAnnouncer = id(4131).AccessibilityAnnouncer;
      const intl = id(1236).intl;
      AccessibilityAnnouncer.announce(intl.string(id(1236).t.n6Jo3E));
    });
  }
};
let result = require("ME").fileFinishedImporting("actions/RelationshipActionCreators.tsx");

export default obj;
export const RelationshipErrorUXConfig = obj;