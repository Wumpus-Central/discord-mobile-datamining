// === Module 8691: InviteSuggestionsActionCreators ===

// Module 8691 (InviteSuggestionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import UserAffinitiesActionCreators from "UserAffinitiesActionCreators" /* 8692 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 8673 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/InviteSuggestionsActionCreators.tsx");

export const loadInviteSuggestions = function loadInviteSuggestions(arg0) {
  ({ omitUserIds: require, guild: importDefault, channel: dependencyMap, applicationId: closure_3, inviteTargetType: closure_4 } = arg0);
  const userAffinitiesV2 = UserAffinitiesActionCreators.fetchUserAffinitiesV2();
  return userAffinitiesV2.then(() => {
    let set = require;
    if (require == null) {
      const _Set = Set;
      set = new Set();
    }
    DispatcherDefault.dispatch({ type: "LOAD_INVITE_SUGGESTIONS", omitUserIds: set, guild, channel, applicationId, inviteTargetType });
  });
};
export const searchInviteSuggestions = function searchInviteSuggestions(current) {
  DispatcherDefault.dispatch({ type: "INVITE_SUGGESTIONS_SEARCH", query: current });
};