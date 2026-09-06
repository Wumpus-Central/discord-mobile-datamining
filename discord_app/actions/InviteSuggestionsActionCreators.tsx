// discord_app/actions/InviteSuggestionsActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import UserAffinitiesActionCreators from "../modules/user_affinities/UserAffinitiesActionCreators.tsx";
import InviteSuggestionsStore from "../stores/InviteSuggestionsStore.tsx";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("actions/InviteSuggestionsActionCreators.tsx");

export const loadInviteSuggestions = function loadInviteSuggestions(arg0) {
  ({
    omitUserIds: require,
    guild: importDefault,
    channel: dependencyMap,
    applicationId: closure_3,
    inviteTargetType: closure_4,
  } = arg0);
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
