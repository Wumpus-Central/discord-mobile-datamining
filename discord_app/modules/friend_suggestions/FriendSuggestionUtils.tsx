// discord_app/modules/friend_suggestions/FriendSuggestionUtils.tsx
const result = require("set").fileFinishedImporting("modules/friend_suggestions/FriendSuggestionUtils.tsx");

export const getSuggestedContactNameForSuggestion = function getSuggestedContactNameForSuggestion(friendSuggestionName, suggestedFriend) {
  let contactNames;
  if (suggestedFriend != null) {
    contactNames = suggestedFriend.contactNames;
  }
  let tmp2;
  if (null != contactNames) {
    let length;
    if (suggestedFriend != null) {
      length = suggestedFriend.contactNames.length;
    }
    if (length >= 2) {
      let trimmed;
      if (suggestedFriend != null) {
        const contactNames1 = suggestedFriend.contactNames;
        const substr = contactNames1.slice(0, 2);
        trimmed = substr.join(" ").trim();
        const str2 = substr.join(" ");
      }
      tmp2 = trimmed;
    }
  }
  if (null != tmp2) {
    if (null == friendSuggestionName) {
      if (null != tmp2) {
        return tmp2;
      }
    }
    if (null != friendSuggestionName) {
      if (friendSuggestionName !== tmp2) {
        if (friendSuggestionName.split(" ")[0] !== tmp2.split(" ")[0]) {
          return tmp2;
        }
      }
    }
  }
};