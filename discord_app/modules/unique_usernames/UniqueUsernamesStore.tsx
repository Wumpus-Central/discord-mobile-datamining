// === Module 14519: UniqueUsernamesStore ===

// Module 14519 (UniqueUsernamesStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import LRUCacheDefault from "LRUCache" /* 1444 */;
import size from "module_2" /* 2 */;

let set;

let obj2;
let tmp2;
let closure_2 = { taken: null, error: "IconComponent", rateLimited: null };
let obj = { validations: tmp2, currentUsernameInvalid: false, retryAfterTime: null, suggestions: obj2 };
tmp2 = new LRUCacheDefault({ max: 100, maxAge: 60000 });
obj2 = { migration: { suggestion: { username: "r" }, fetched: false, usernameSuggestionLoading: false }, registration: { suggestion: { username: "r" }, source: "Set", fetched: null } };
const Store = get_initializedDefault.Store;
class UniqueUsernamesStore extends Store {
  isRateLimited() {
    let tmp2 = null != obj.retryAfterTime;
    if (tmp2) {
      const _Date = Date;
      tmp2 = Date.now() < tmp.retryAfterTime;
    }
    return tmp2;
  }
  validate(arg0) {
    let tmp4;
    const self = this;
    const validations = obj.validations;
    const value = validations.get(arg0);
    if (!this.isRateLimited()) {
      tmp4 = value;
    } else {
      tmp4 = closure_2;
    }
    return tmp4;
  }
  registrationUsernameSuggestion() {
    return obj.suggestions.registration.suggestion.username;
  }
  usernameSuggestion() {
    return obj.suggestions.migration.suggestion.username;
  }
  usernameSuggestionLoading() {
    return obj.suggestions.migration.usernameSuggestionLoading;
  }
  isCurrentUsernameInvalid() {
    return obj.currentUsernameInvalid;
  }
  wasRegistrationSuggestionFetched(globalName) {
    return obj.suggestions.registration.source === globalName && obj.suggestions.registration.fetched;
  }
  wasSuggestionsFetched() {
    return obj.suggestions.migration.fetched;
  }
}
const prototype = UniqueUsernamesStore.prototype;
UniqueUsernamesStore.displayName = "UniqueUsernamesStore";
const obj3 = {
  UNIQUE_USERNAME_ATTEMPT_SUCCESS: function handleUniqueUsernameAttemptSuccess(taken) {
    const validations = obj.validations;
    obj = { taken: taken.taken };
    const result = validations.set(taken.username, obj);
  },
  UNIQUE_USERNAME_ATTEMPT_FAILURE: function handleUniqueUsernameAttemptFailure(statusCode) {
    let error;
    let retryAfter;
    let tmp;
    let username;
    ({ username, error, retryAfter } = statusCode);
    if (429 === statusCode.statusCode) {
      const validations2 = obj.validations;
      let num = retryAfter;
      const obj2 = { taken: null, error, rateLimited: true };
      set = validations2.set;
      const tmp3 = obj;
      if (retryAfter == null) {
        num = 7;
      }
      const result = set(username, obj2, num * DurationsDefault.Millis.SECOND);
      tmp = tmp3;
    } else {
      tmp = obj;
      const validations = obj.validations;
      obj = { taken: null, error };
      const result1 = validations.set(username, obj);
    }
    if (null != retryAfter) {
      const _Date = Date;
      const timestamp = Date.now();
      tmp.retryAfterTime = timestamp + retryAfter * DurationsDefault.Millis.SECOND;
    }
  },
  UNIQUE_USERNAME_SUGGESTIONS_RESET: function handleUniqueUsernameSuggestionsReset() {
    obj.suggestions.migration = { suggestion: { username: "r" }, fetched: false, usernameSuggestionLoading: false };
    obj.suggestions.registration = { suggestion: { username: "r" }, source: "Set", fetched: null };
  },
  UNIQUE_USERNAME_SUGGESTIONS_SUCCESS: function handleUniqueUsernameSuggestionsSuccess(suggestion) {
    suggestion = suggestion.suggestion;
    obj.suggestions.migration = { suggestion, fetched: true, usernameSuggestionLoading: false };
    let prop;
    if (suggestion != null) {
      prop = suggestion.invalid_current_username;
    }
    if (true === prop) {
      obj.currentUsernameInvalid = true;
    }
  },
  UNIQUE_USERNAME_REGISTRATION_SUGGESTIONS_SUCCESS: function handleUniqueUsernameRegistrationSuggestionsSuccess(source) {
    const suggestion = source.suggestion;
    obj.suggestions.registration = { suggestion, source: source.source, fetched: true };
    let username;
    if (suggestion != null) {
      username = suggestion.username;
    }
    if (null != username) {
      const validations = obj.validations;
      const result = validations.set(suggestion.username, { taken: false });
    }
  }
};
const uniqueUsernamesStore = new UniqueUsernamesStore(DispatcherDefault, obj3);
let result = size.fileFinishedImporting("modules/unique_usernames/UniqueUsernamesStore.tsx");

export default uniqueUsernamesStore;