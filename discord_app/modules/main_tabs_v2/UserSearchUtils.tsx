// discord_app/modules/main_tabs_v2/UserSearchUtils.tsx
import initialize from "initialize";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import upsertRelationship from "upsertRelationship";
import { RelationshipTypes } from "ME";
import { isNullOrEmpty } from "../../utils/StringUtils.tsx";
import { nameFromUser } from "../../utils/UserUtils.tsx";

const require = arg1;
const result = require("upsertRelationship").fileFinishedImporting("modules/main_tabs_v2/UserSearchUtils.tsx");

export const cleanString = function cleanString(toLocaleLowerCase) {
  const obj = isNullOrEmpty;
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
    const obj3 = names(1884);
    let str = names(1884).stripDiacritics(nick.toLocaleLowerCase());
    names[nick] = names(1884).stripDiacritics(nick.toLocaleLowerCase()).trim().split(" ");
    let str2 = names(1884).stripDiacritics(nick.toLocaleLowerCase()).trim();
  }
  const globalName = nameFromUser.getGlobalName(user);
  if (tmp4) {
    const obj6 = names(1884);
    const str4 = names(1884).stripDiacritics(globalName.toLocaleLowerCase());
    names[globalName] = names(1884).stripDiacritics(globalName.toLocaleLowerCase()).trim().split(" ");
    const str5 = names(1884).stripDiacritics(globalName.toLocaleLowerCase()).trim();
  }
  const username = user.username;
  const obj4 = nameFromUser;
  tmp4 = null != globalName && null == names[globalName];
  const obj7 = names(1884);
  const str7 = names(1884).stripDiacritics(username.toLocaleLowerCase());
  names[user.username] = names(1884).stripDiacritics(username.toLocaleLowerCase()).trim().split(" ");
  nicknames = nicknames.getNicknames(user.id);
  const item = nicknames.forEach((toLocaleLowerCase) => {
    if (null == names[toLocaleLowerCase]) {
      const obj = names(outer1_2[4]);
      const str = names(outer1_2[4]).stripDiacritics(toLocaleLowerCase.toLocaleLowerCase());
      tmp[toLocaleLowerCase] = names(outer1_2[4]).stripDiacritics(toLocaleLowerCase.toLocaleLowerCase()).trim().split(" ");
      const str2 = names(outer1_2[4]).stripDiacritics(toLocaleLowerCase.toLocaleLowerCase()).trim();
    }
  });
  return { names, nick };
};