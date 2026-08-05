// discord_app/actions/InviteSuggestionsActionCreators.tsx
import _computeRows from "_computeRows";

const result = require("dispatcher").fileFinishedImporting("actions/InviteSuggestionsActionCreators.tsx");

export const loadInviteSuggestions = function loadInviteSuggestions(arg0) {
  let closure_3;
  let closure_4;
  let dependencyMap;
  let importDefault;
  let require;
  ({ omitUserIds: require, guild: importDefault, channel: dependencyMap, applicationId: closure_3, inviteTargetType: closure_4 } = arg0);
  const userAffinitiesV2 = require(9003) /* fetchUserAffinitiesV2 */.fetchUserAffinitiesV2();
  return userAffinitiesV2.then(() => {
    let obj = outer1_1(outer1_2[2]);
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
  let obj = importDefault(709);
  obj = { type: "INVITE_SUGGESTIONS_SEARCH", query };
  obj.dispatch(obj);
};