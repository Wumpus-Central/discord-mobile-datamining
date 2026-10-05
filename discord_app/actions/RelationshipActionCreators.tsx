// discord_app/actions/RelationshipActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import intl10 from "../intl/index.native.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import UserUtilsDefault from "../utils/UserUtils.tsx";
import shared from "../design/shared.tsx";
import AlertActionCreatorsDefault from "AlertActionCreators.tsx";
import openQuarantineModeInfoModalDefault from "../modules/quarantine/openQuarantineModeInfoModal.native.tsx";
import ContextMenuActionCreators from "ContextMenuActionCreators.tsx";
import SafetyToastsActionCreatorsDefault from "../modules/safety_common/SafetyToastsActionCreators.native.tsx";
import RelationshipConstants from "../modules/relationships/RelationshipConstants.tsx";
import ClaimAccountModalActionCreatorsAll from "../modules/claim_account/ClaimAccountModalActionCreators.native.tsx";
import UserLimitedAccessUtils from "../modules/user_limited_access/UserLimitedAccessUtils.tsx";
import FriendsUtils from "../utils/FriendsUtils.tsx";
import ClearAllIncomingRequestsConfirmationModalDefault from "../modules/people/ClearAllIncomingRequestsConfirmationModal.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import UserStore from "../stores/UserStore.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let metroImportAll;
let metroImportDefault;
let metroRequire;
function handleRelationshipAddError(error, SHOW_ALWAYS, userTag) {
  let body;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let status;
  ({ status, body } = error);
  let num = body && body.code;
  if (429 === status) {
    if (SHOW_ALWAYS === obj.SHOW_ALWAYS) {
      obj2 = {
        title: intl7.string(intl10.t["3D5eox"]),
        body: intl8.string(intl10.t.TuJriJ),
        confirmText: intl9.string(intl10.t.DppXIx),
      };
      intl7 = intl10.intl;
      intl8 = intl10.intl;
      intl9 = intl10.intl;
      const obj10 = ContextMenuActionCreators;
      obj10.closeContextMenu();
      const obj11 = AlertActionCreatorsDefault;
      obj11.show(obj2);
    }
  } else {
    if (403 === status) {
      if (num === metroImportDefault.EMAIL_VERIFICATION_REQUIRED) {
        const obj5 = {
          title: intl4.string(intl10.t.Gqf33E),
          body: intl5.string(intl10.t.GHOBdx),
          confirmText: intl6.string(intl10.t.HbTSE6),
          onConfirm() {
            obj = ClaimAccountModalActionCreatorsAll;
            const result = obj.openClaimAccountModal();
          },
        };
        intl4 = intl10.intl;
        intl5 = intl10.intl;
        intl6 = intl10.intl;
        const obj6 = ContextMenuActionCreators;
        obj6.closeContextMenu();
        const obj7 = AlertActionCreatorsDefault;
        obj7.show(obj5);
      }
    }
    if (num === metroImportDefault.USER_QUARANTINED) {
      const obj4 = ContextMenuActionCreators;
      obj4.closeContextMenu();
      openQuarantineModeInfoModalDefault();
    } else {
      const obj8 = UserLimitedAccessUtils;
      if (!obj8.isLimitedAccessErrorCode(status, num)) {
        if (num !== tmp2.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
          if (SHOW_ALWAYS === obj.SHOW_ALWAYS) {
            let humanizeAbortCodeResult;
            if (null != userTag) {
              const humanizeAbortCode = FriendsUtils.humanizeAbortCode;
              FriendsUtils;
              if (!num) {
                num = 0;
              }
              humanizeAbortCodeResult = humanizeAbortCode(num, userTag);
            } else {
              const intl = intl10.intl;
              humanizeAbortCodeResult = intl.string(intl10.t.paDJBM);
            }
            obj = {
              title: intl2.string(intl10.t["6moJ8s"]),
              body: humanizeAbortCodeResult,
              confirmText: intl3.string(intl10.t.BddRzS),
            };
            intl2 = intl10.intl;
            intl3 = intl10.intl;
            const tmp19Result2 = ContextMenuActionCreators;
            tmp19Result2.closeContextMenu();
            const obj3 = AlertActionCreatorsDefault;
            obj3.show(obj);
          }
        }
      }
    }
  }
  throw error;
}
({ Endpoints: metroRequire, AbortCodes: metroImportDefault, RelationshipTypes: metroImportAll } = Constants);
const ClearFriendRequestFilters = RelationshipConstants.ClearFriendRequestFilters;
const RelationshipErrorUXConfig = {
  SHOW_ALWAYS: 0,
  [0]: "SHOW_ALWAYS",
  SHOW_ONLY_IF_ACTION_NEEDED: 1,
  [1]: "SHOW_ONLY_IF_ACTION_NEEDED",
};
let obj2 = {
  sendRequest(discordTag) {
    let body;
    let captchaPayload;
    let context;
    let errorUxConfig;
    let note;
    let obj3;
    let tmp3;
    let tmp4;
    const str = discordTag.discordTag;
    ({ captchaPayload, errorUxConfig } = discordTag);
    ({ context, note } = discordTag);
    if (errorUxConfig === undefined) {
      errorUxConfig = body.SHOW_ALWAYS;
    }
    [tmp3, tmp4] = str.split("#");
    _slicedToArray(str.split("#"), 2);
    const HTTP = str(1282).HTTP;
    const request = {
      url: closure_6.USER_RELATIONSHIPS(),
      body,
      context,
      oldFormErrors: true,
      rejectWithError: obj3.rejectWithMigratedError(),
    };
    const post = HTTP.post;
    body = { username: tmp3, discriminator: parseInt(tmp4), note };
    const merged = Object.assign(captchaPayload);
    obj3 = str(1282);
    const postResult = post(request);
    return postResult.catch((error) => {
      handleRelationshipAddError(error, errorUxConfig, str);
    });
  },
  addRelationship(arg0, arg1) {
    let body;
    let captchaPayload;
    let closure_0;
    let closure_2;
    let confirmStrangerRequest;
    let context;
    let fromFriendSuggestion;
    let obj3;
    let type;
    let userId;
    ({ userId, captchaPayload } = arg0);
    const _require = arg1;
    let SHOW_ALWAYS = arg2;
    ({ context, type, fromFriendSuggestion, confirmStrangerRequest } = arg0);
    if (arg2 === undefined) {
      const tmp = body;
      SHOW_ALWAYS = body.SHOW_ALWAYS;
    }
    const user = UserStore.getUser(userId);
    const HTTP = require("HTTPUtils").HTTP;
    const request = {
      url: closure_6.USER_RELATIONSHIP(userId),
      body,
      context,
      oldFormErrors: true,
      rejectWithError: obj3.rejectWithMigratedError(),
    };
    const put = HTTP.put;
    body = { type, from_friend_suggestion: fromFriendSuggestion, confirm_stranger_request: confirmStrangerRequest };
    const merged = Object.assign(captchaPayload);
    obj3 = require("HTTPUtils");
    const putResult = put(request);
    const nextPromise = putResult.then(() => {
      if (closure_0 != null) {
        tmp();
      }
    });
    return nextPromise.catch((error) => {
      obj = UserUtilsDefault;
      handleRelationshipAddError(error, SHOW_ALWAYS, obj.getUserTag(closure_2));
    });
  },
  acceptFriendRequest(arg0) {
    return obj2.addRelationship(arg0, () => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = require("intl").intl;
      announce(intl.string(require("intl").t["3goNa5"]));
    });
  },
  cancelFriendRequest(arg0, arg1) {
    return obj2.removeRelationship(arg0, arg1, () => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = require("intl").intl;
      announce(intl.string(require("intl").t.pLUaxR));
    });
  },
  removeFriend(arg0, arg1) {
    obj2.removeRelationship(arg0, arg1, () => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = require("intl").intl;
      announce(intl.string(require("intl").t.vGSLa2));
    });
  },
  blockUser(userId, context) {
    obj = { userId, context, type: metroImportAll.BLOCKED };
    return obj2.addRelationship(obj, () => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = require("intl").intl;
      announce(intl.string(require("intl").t.mU0Vrp));
    });
  },
  unblockUser(id, arg1) {
    return obj2.removeRelationship(id, arg1, () => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = require("intl").intl;
      announce(intl.string(require("intl").t["9t1au7"]));
    });
  },
  removeRelationship(userId, context, arg2) {
    let closure_0;
    const _require = arg2;
    const HTTP = require("HTTPUtils").HTTP;
    const del = HTTP.del;
    obj = {
      url: closure_6.USER_RELATIONSHIP(userId),
      context,
      oldFormErrors: true,
      rejectWithError: obj2.rejectWithMigratedError(),
    };
    obj2 = require("HTTPUtils");
    const delResult = del(obj);
    const nextPromise = delResult.then(() => {
      if (closure_0 != null) {
        tmp();
      }
    });
    return nextPromise.catch(() => {
      const AccessibilityAnnouncer = closure_0(dependencyMap[13]).AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = closure_0(dependencyMap[7]).intl;
      announce(intl.string(closure_0(dependencyMap[7]).t.n6Jo3E));
    });
  },
  updateRelationship(userId, c0) {
    let body;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: metroRequire.USER_RELATIONSHIP(userId),
      body,
      rejectWithError: obj3.rejectWithMigratedError(),
    };
    const patch = HTTP.patch;
    body = { nickname };
    obj3 = HTTPUtils;
    return patch(request);
  },
  fetchRelationships() {
    const HTTP = HTTPUtils.HTTP;
    obj = { url: metroRequire.USER_RELATIONSHIPS(), oldFormErrors: true, rejectWithError: true };
    const value = HTTP.get(obj);
    value.then(
      (body) => {
        obj = DispatcherDefault;
        obj2 = { type: "LOAD_RELATIONSHIPS_SUCCESS", relationships: body.body };
        return obj.dispatch(obj2);
      },
      () => {
        obj = DispatcherDefault;
        return obj.dispatch({ type: "LOAD_RELATIONSHIPS_FAILURE" });
      },
    );
  },
  confirmClearPendingRelationships(arg0) {
    ClearAllIncomingRequestsConfirmationModalDefault(arg0);
  },
  clearPendingRelationships() {
    let obj3;
    let query;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: metroRequire.USER_RELATIONSHIPS(), query, rejectWithError: obj3.rejectWithMigratedError() };
    const del = HTTP.del;
    query = { relationship_type: metroImportAll.PENDING_INCOMING };
    obj3 = HTTPUtils;
    const delResult = del(request);
    const nextPromise = delResult.then(() => {
      obj = DispatcherDefault;
      obj.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
    });
    return nextPromise.catch(() => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = require("intl").intl;
      announce(intl.string(require("intl").t.n6Jo3E));
    });
  },
  clearPendingSpamAndIgnored() {
    let items;
    let obj4;
    let query;
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: metroRequire.USER_RELATIONSHIPS(),
      query,
      body: obj2,
      rejectWithError: obj4.rejectWithMigratedError(),
    };
    const del = HTTP.del;
    query = { relationship_type: metroImportAll.PENDING_INCOMING };
    obj2 = { filters: items };
    items = [,];
    ({ SPAM: arr[0], IGNORED: arr[1] } = ClearFriendRequestFilters);
    obj4 = HTTPUtils;
    const delResult = del(request);
    const nextPromise = delResult.then(() => {
      obj = DispatcherDefault;
      obj.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
    });
    return nextPromise.catch(() => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = require("intl").intl;
      announce(intl.string(require("intl").t.n6Jo3E));
    });
  },
  ignoreUser(id, mobile_iar_ignore_user_element, channelId) {
    let obj3;
    let userId;
    const _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    obj = { url: closure_6.IGNORE_USER(id), context: obj2, rejectWithError: obj3.rejectWithMigratedError() };
    const put = HTTP.put;
    obj2 = { location: mobile_iar_ignore_user_element };
    obj3 = require("HTTPUtils");
    const putResult = put(obj);
    const nextPromise = putResult.then(() => {
      obj = SafetyToastsActionCreatorsDefault;
      const result = obj.showIgnoreSuccessToast(userId, channelId);
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl10.intl;
      announce(intl.string(intl10.t.Us93Ca));
      obj2 = DispatcherDefault;
      const obj3 = { type: "RELATIONSHIP_IGNORE_USER_SUCCESS", userId, timestamp: Date.now() };
      obj2.dispatch(obj3);
    });
    return nextPromise.catch(() => {
      obj = channelId(dependencyMap[16]);
      obj.showFailedToast();
      const AccessibilityAnnouncer = userId(dependencyMap[13]).AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = userId(dependencyMap[7]).intl;
      announce(intl.string(userId(dependencyMap[7]).t.n6Jo3E));
    });
  },
  unignoreUser(id, UserProfileRemediatedNotice, channelId) {
    let obj3;
    const _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    obj = { url: closure_6.IGNORE_USER(id), context: obj2, rejectWithError: obj3.rejectWithMigratedError() };
    const del = HTTP.del;
    obj2 = { location: UserProfileRemediatedNotice };
    obj3 = require("HTTPUtils");
    const delResult = del(obj);
    const nextPromise = delResult.then(() => {
      obj = SafetyToastsActionCreatorsDefault;
      const result = obj.showUnignoreSuccessToast(id, channelId);
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl10.intl;
      announce(intl.string(intl10.t.QlH5w6));
    });
    return nextPromise.catch(() => {
      obj = channelId(dependencyMap[16]);
      obj.showFailedToast();
      const AccessibilityAnnouncer = id(dependencyMap[13]).AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = id(dependencyMap[7]).intl;
      announce(intl.string(id(dependencyMap[7]).t.n6Jo3E));
    });
  },
};
let result = size.fileFinishedImporting("actions/RelationshipActionCreators.tsx");

export default obj2;
export { RelationshipErrorUXConfig };
