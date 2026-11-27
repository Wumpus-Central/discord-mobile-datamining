// === Module 10446: InviteSuggestionsActionCreators ===

// Module 10446 (InviteSuggestionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import UserAffinitiesActionCreators from "UserAffinitiesActionCreators" /* 10447 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 10444 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/InviteSuggestionsActionCreators.tsx");

export function loadInviteSuggestions(arg0) {
  ({ omitUserIds: require, guild: importDefault, channel: dependencyMap, applicationId: closure_3, inviteTargetType: closure_4 } = arg0);
  const userAffinitiesV2 = UserAffinitiesActionCreators.fetchUserAffinitiesV2();
  return userAffinitiesV2.then(() => {
    set = require;
    if (require == null) {
      const _Set = Set;
      set = new Set();
    }
    DispatcherDefault.dispatch({ type: "LOAD_INVITE_SUGGESTIONS", omitUserIds: set, guild, channel, applicationId, inviteTargetType });
  });
}
export function searchInviteSuggestions(current) {
  DispatcherDefault.dispatch({ type: "INVITE_SUGGESTIONS_SEARCH", query: current });
}