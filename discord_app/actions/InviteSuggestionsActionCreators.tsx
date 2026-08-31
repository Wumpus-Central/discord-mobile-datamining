// === Module 9899: loadInviteSuggestions ===

// Module 9899 (loadInviteSuggestions)
import set2 from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import fetchUserAffinitiesV2 from "fetchUserAffinitiesV2" /* 9900 */;
import _computeRows from "_computeRows" /* 9883 */;

const result = set2.fileFinishedImporting("actions/InviteSuggestionsActionCreators.tsx");

export const loadInviteSuggestions = function loadInviteSuggestions(arg0) {
  ({ omitUserIds: require, guild: importDefault, channel: dependencyMap, applicationId: closure_3, inviteTargetType: closure_4 } = arg0);
  const userAffinitiesV2 = fetchUserAffinitiesV2.fetchUserAffinitiesV2();
  return userAffinitiesV2.then(() => {
    let obj = closure_1_1(closure_1_2[2]);
    let set = closure_0;
    if (closure_0 == null) {
      const _Set = Set;
      set = new Set();
    }
    obj = { type: "LOAD_INVITE_SUGGESTIONS", omitUserIds: set, guild: closure_1, channel: closure_2, applicationId: closure_3, inviteTargetType: closure_4 };
    obj.dispatch(obj);
  });
};
export const searchInviteSuggestions = function searchInviteSuggestions(query) {
  let obj = dispatcherDefault;
  obj = { type: "INVITE_SUGGESTIONS_SEARCH", query };
  obj.dispatch(obj);
};