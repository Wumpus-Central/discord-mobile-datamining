// === Module 9508: InviteSuggestionsActionCreators ===

// Module 9508 (InviteSuggestionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import UserAffinitiesActionCreators from "UserAffinitiesActionCreators" /* 9509 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 9494 */;
import size from "module_2" /* 2 */;

let set;

const result = size.fileFinishedImporting("actions/InviteSuggestionsActionCreators.tsx");

export const loadInviteSuggestions = function loadInviteSuggestions(arg0) {
  let applicationId;
  let channel;
  let closure_3;
  let closure_4;
  let guild;
  let inviteTargetType;
  ({ omitUserIds: require, guild: importDefault, channel: dependencyMap, applicationId: closure_3, inviteTargetType: closure_4 } = arg0);
  let obj = UserAffinitiesActionCreators;
  const userAffinitiesV2 = obj.fetchUserAffinitiesV2();
  return userAffinitiesV2.then(function() {
    set = require;
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (require == null) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
    }
    const obj = { type: "LOAD_INVITE_SUGGESTIONS", omitUserIds: set, guild: importDefault, channel: dependencyMap, applicationId, inviteTargetType };
    dispatch(obj);
  });
};
export const searchInviteSuggestions = function searchInviteSuggestions(current) {
  const obj = DispatcherDefault;
  const obj2 = { type: "INVITE_SUGGESTIONS_SEARCH", query: current };
  obj.dispatch(obj2);
};