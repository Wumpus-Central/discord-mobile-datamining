// === Module 14119: isRateLimited ===

// Module 14119 (isRateLimited)
import initializeDefault from "initialize" /* 589 */;
import obj132Default from "obj132" /* 687 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import privDefault from "priv" /* 1405 */;

let closure_2 = { taken: null, error: "HermesInternal", rateLimited: null };
let obj = { validations: new privDefault({ max: 100, maxAge: 60000 }), currentUsernameInvalid: false, retryAfterTime: null, suggestions: { migration: { suggestion: { username: "r" }, fetched: false, usernameSuggestionLoading: false }, registration: { suggestion: { username: "r" }, source: "ct", fetched: "RNSVGFeBlend" } } };
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
  const value = validations.get(arg0);
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
prototype["wasRegistrationSuggestionFetched"] = function wasRegistrationSuggestionFetched(callback) {
  return obj.suggestions.registration.source === callback && obj.suggestions.registration.fetched;
};
prototype["wasSuggestionsFetched"] = function wasSuggestionsFetched() {
  return obj.suggestions.migration.fetched;
};
UniqueUsernamesStore.displayName = "UniqueUsernamesStore";
obj = {
  UNIQUE_USERNAME_ATTEMPT_SUCCESS: function handleUniqueUsernameAttemptSuccess(taken) {
    const validations = obj.validations;
    obj = { taken: taken.taken };
    const result = validations.set(taken.username, obj);
  },
  UNIQUE_USERNAME_ATTEMPT_FAILURE: function handleUniqueUsernameAttemptFailure(statusCode) {
    ({ username, error, retryAfter } = statusCode);
    if (429 === statusCode.statusCode) {
      let validations = obj.validations;
      obj = { taken: null, error: null, rateLimited: true };
      obj[1] = error;
      let num = retryAfter;
      if (retryAfter == null) {
        num = 7;
      }
      const result = validations.set(username, obj, num * obj132Default.Millis.SECOND);
      let tmp = obj;
    } else {
      tmp = obj;
      validations = obj.validations;
      obj = { taken: null, error: null };
      obj[1] = error;
      const result1 = validations.set(username, obj);
    }
    if (null != retryAfter) {
      const _Date = Date;
      const timestamp = Date.now();
      tmp.retryAfterTime = timestamp + retryAfter * obj132Default.Millis.SECOND;
    }
  },
  UNIQUE_USERNAME_SUGGESTIONS_RESET: function handleUniqueUsernameSuggestionsReset() {
    obj.suggestions.migration = { suggestion: { username: "r" }, fetched: false, usernameSuggestionLoading: false };
    obj.suggestions.registration = { suggestion: { username: "r" }, source: "ct", fetched: "RNSVGFeBlend" };
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
const uniqueUsernamesStore = new UniqueUsernamesStore(dispatcherDefault, obj);
let tmp2 = new privDefault({ max: 100, maxAge: 60000 });
let result = require("obj132").fileFinishedImporting("modules/unique_usernames/UniqueUsernamesStore.tsx");

export default uniqueUsernamesStore;