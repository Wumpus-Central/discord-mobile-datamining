// discord_app/modules/main_tabs_v2/UserSearchUtils.tsx
import isNullOrEmpty from "../../utils/StringUtils.tsx";
import nameFromUserDefault from "../../utils/UserUtils.tsx";
import initialize from "../friend_suggestions/FriendSuggestionStore.tsx";
import trackCommunicationDisabled from "../../stores/GuildMemberStore.tsx";
import markAllUserIdListsStale from "../../stores/RelationshipStore.tsx";
import { RelationshipTypes } from "../../Constants.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/UserSearchUtils.tsx");

export const cleanString = function cleanString(toLocaleLowerCase) {
  return isNullOrEmpty.stripDiacritics(toLocaleLowerCase.toLocaleLowerCase()).trim();
};
export const getRelationshipType = function getRelationshipType(id) {
  const relationshipType = store.getRelationshipType(id);
  let SUGGESTION = relationshipType;
  if (relationshipType === RelationshipTypes.NONE) {
    SUGGESTION = relationshipType;
    if (null != suggestion.getSuggestion(id)) {
      SUGGESTION = tmp2.SUGGESTION;
    }
  }
  return SUGGESTION;
};
export const getNames = function getNames(user) {
  const names = {};
  const nick = store.getNickname(user.id);
  if (null != nick) {
    const obj3 = names(1903);
    let str = names(1903).stripDiacritics(nick.toLocaleLowerCase());
    names[nick] = names(1903).stripDiacritics(nick.toLocaleLowerCase()).trim().split(" ");
    let str2 = names(1903).stripDiacritics(nick.toLocaleLowerCase()).trim();
  }
  const globalName = nameFromUserDefault.getGlobalName(user);
  if (tmp4) {
    const obj6 = names(1903);
    const str4 = names(1903).stripDiacritics(globalName.toLocaleLowerCase());
    names[globalName] = names(1903).stripDiacritics(globalName.toLocaleLowerCase()).trim().split(" ");
    const str5 = names(1903).stripDiacritics(globalName.toLocaleLowerCase()).trim();
  }
  const username = user.username;
  tmp4 = null != globalName && null == names[globalName];
  const obj7 = names(1903);
  const str7 = names(1903).stripDiacritics(username.toLocaleLowerCase());
  names[user.username] = names(1903).stripDiacritics(username.toLocaleLowerCase()).trim().split(" ");
  nicknames = nicknames.getNicknames(user.id);
  const item = nicknames.forEach((item, index) => {
    if (null == names[item]) {
      const obj = names(dependencyMap[4]);
      const str = names(dependencyMap[4]).stripDiacritics(item.toLocaleLowerCase());
      tmp[item] = names(dependencyMap[4]).stripDiacritics(item.toLocaleLowerCase()).trim().split(" ");
      const str2 = names(dependencyMap[4]).stripDiacritics(item.toLocaleLowerCase()).trim();
    }
  });
  return { names, nick };
};