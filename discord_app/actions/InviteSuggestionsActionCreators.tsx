// === Module 9847: InviteSuggestionsActionCreators ===

// Module 9847 (InviteSuggestionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import UserAffinitiesActionCreators from "UserAffinitiesActionCreators" /* 9848 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 9833 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/InviteSuggestionsActionCreators.tsx");

export const loadInviteSuggestions = function loadInviteSuggestions(arg0) {
  ({ omitUserIds: require, guild: importDefault, channel: dependencyMap, applicationId: closure_3, inviteTargetType: closure_4 } = arg0);
  const userAffinitiesV2 = UserAffinitiesActionCreators.fetchUserAffinitiesV2();
  return userAffinitiesV2.then(() => {
    let obj = DispatcherDefault;
    let set = require;
    if (require == null) {
      const _Set = Set;
      set = new Set();
    }
    obj = { type: "LOAD_INVITE_SUGGESTIONS", omitUserIds: set, guild, channel, applicationId, inviteTargetType };
    obj.dispatch(obj);
  });
};
export const searchInviteSuggestions = function searchInviteSuggestions(query) {
  const obj = { type: "INVITE_SUGGESTIONS_SEARCH", query };
  obj.dispatch(obj);
};