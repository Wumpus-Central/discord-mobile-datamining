// === Module 5462: map ===

// Module 5462 (map)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;

ME.AutoCompleteResultTypes;
const items = [["game", "gameMentionInput"], ["time", "timestampMentionInput"]];
const map = new Map(items);
const result = set.fileFinishedImporting("utils/native/AutocompleteUtils.tsx");

export default {
  MENTION_EVERYONE() {
    const obj = { type: AutoCompleteResultTypes.GLOBAL, test: "everyone", text: "@everyone", description: null };
    const intl = getSystemLocale.intl;
    obj[3] = intl.string(getSystemLocale.t["5atMLZ"]);
    return obj;
  },
  MENTION_HERE() {
    const obj = { type: AutoCompleteResultTypes.GLOBAL, test: "here", text: "@here", description: null };
    const intl = getSystemLocale.intl;
    obj[3] = intl.string(getSystemLocale.t.iX9SFD);
    return obj;
  },
  MENTION_GAME() {
    const obj = { test: "game", text: "@game", inlineAutocompleteType: "gameMentionInput", description: null };
    const intl = getSystemLocale.intl;
    obj[3] = intl.string(getSystemLocale.t["1kR88y"]);
    return obj;
  },
  MENTION_TIMESTAMP() {
    const obj = { test: "time", text: "@time", inlineAutocompleteType: "timestampMentionInput", description: null };
    const intl = getSystemLocale.intl;
    obj[3] = intl.string(getSystemLocale.t.V6L3TV);
    return obj;
  },
  LAUNCHABLE_APPLICATIONS() {
    return [];
  },
  findAutoInsertOnSpaceMentionInlineAutocompleteType(trigger) {
    return map.get(trigger.toLowerCase());
  }
};