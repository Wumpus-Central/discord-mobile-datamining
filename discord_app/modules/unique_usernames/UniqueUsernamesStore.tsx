// === Module 14709: UniqueUsernamesStore ===

// Module 14709 (UniqueUsernamesStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;
import privDefault from "priv" /* 1437 */;

let closure_2 = { taken: null, error: "HermesInternal", rateLimited: null };
let suggestions = { validations: new privDefault({ max: 100, maxAge: 60000 }), currentUsernameInvalid: false, retryAfterTime: null, suggestions: null };
suggestions = { migration: { suggestion: { username: "Array" }, fetched: false, usernameSuggestionLoading: false }, registration: { suggestion: { username: "Array" }, source: "PX_16", fetched: "2026-05-mana-type-consolidation" } };
suggestions.suggestions = suggestions;
const Store = initializeDefault.Store;
class UniqueUsernamesStore extends Store {
}
const prototype = UniqueUsernamesStore.prototype;
prototype["isRateLimited"] = function isRateLimited() {
  let tmp2 = null != obj.retryAfterTime;
  if (tmp2) {
    const _Date = Date;
    tmp2 = Date.now() < tmp.retryAfterTime;
  }
  return tmp2;
};
prototype["validate"] = function validate(arg0) {
  const self = this;
  const validations = obj.validations;
  value = validations.get(arg0);
  if (!this.isRateLimited()) {
    let tmp4 = value;
  } else {
    tmp4 = closure_2;
  }
  return tmp4;
};
prototype["registrationUsernameSuggestion"] = function registrationUsernameSuggestion() {
  return obj.suggestions.registration.suggestion.username;
};
prototype["usernameSuggestion"] = function usernameSuggestion() {
  return obj.suggestions.migration.suggestion.username;
};
prototype["usernameSuggestionLoading"] = function usernameSuggestionLoading() {
  return obj.suggestions.migration.usernameSuggestionLoading;
};
prototype["isCurrentUsernameInvalid"] = function isCurrentUsernameInvalid() {
  return obj.currentUsernameInvalid;
};
prototype["wasRegistrationSuggestionFetched"] = function wasRegistrationSuggestionFetched(globalName) {
  return obj.suggestions.registration.source === globalName && obj.suggestions.registration.fetched;
};
prototype["wasSuggestionsFetched"] = function wasSuggestionsFetched() {
  return obj.suggestions.migration.fetched;
};
UniqueUsernamesStore.displayName = "UniqueUsernamesStore";
suggestions = {
  UNIQUE_USERNAME_ATTEMPT_SUCCESS: function handleUniqueUsernameAttemptSuccess(taken) {
    const validations = obj.validations;
    obj = { taken: taken.taken };
    const result = validations.set(taken.username, obj);
  },
  UNIQUE_USERNAME_ATTEMPT_FAILURE: function handleUniqueUsernameAttemptFailure(statusCode) {
    ({ username, error, retryAfter } = statusCode);
    if (429 === statusCode.statusCode) {
      let validations = obj.validations;
      obj = { taken: null, error, rateLimited: true };
      let num = retryAfter;
      if (retryAfter == null) {
        num = 7;
      }
      const result = validations.set(username, obj, num * DurationsDefault.Millis.SECOND);
      let tmp = obj;
    } else {
      tmp = obj;
      validations = obj.validations;
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
    obj.suggestions.migration = { suggestion: { username: "Array" }, fetched: false, usernameSuggestionLoading: false };
    obj.suggestions.registration = { suggestion: { username: "Array" }, source: "PX_16", fetched: "2026-05-mana-type-consolidation" };
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
const uniqueUsernamesStore = new UniqueUsernamesStore(DispatcherDefault, suggestions);
const size = fn(2);
let result = size.fileFinishedImporting("modules/unique_usernames/UniqueUsernamesStore.tsx");

export default uniqueUsernamesStore;