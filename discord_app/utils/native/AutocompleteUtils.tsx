// discord_app/utils/native/AutocompleteUtils.tsx
import { getSystemLocale } from "../../intl/index.native.tsx";
require("ME").AutoCompleteResultTypes;
const items = [["game", "gameMentionInput"]];
const map = new Map(items);
const result = require("set").fileFinishedImporting("utils/native/AutocompleteUtils.tsx");

export default {
  MENTION_EVERYONE() {
    const obj = { type: AutoCompleteResultTypes.GLOBAL, test: "everyone", text: "@everyone", description: null };
    const intl = getSystemLocale /* getSystemLocale */.intl;
    obj[3] = intl.string(getSystemLocale /* getSystemLocale */.t["5atMLZ"]);
    return obj;
  },
  MENTION_HERE() {
    const obj = { type: AutoCompleteResultTypes.GLOBAL, test: "here", text: "@here", description: null };
    const intl = getSystemLocale /* getSystemLocale */.intl;
    obj[3] = intl.string(getSystemLocale /* getSystemLocale */.t.iX9SFD);
    return obj;
  },
  MENTION_GAME() {
    const obj = { test: "game", text: "@game", inlineAutocompleteType: "gameMentionInput", description: null };
    const intl = getSystemLocale /* getSystemLocale */.intl;
    obj[3] = intl.string(getSystemLocale /* getSystemLocale */.t["1kR88y"]);
    return obj;
  },
  LAUNCHABLE_APPLICATIONS() {
    return [];
  },
  findAutoInsertOnSpaceMentionInlineAutocompleteType(trigger) {
    return map.get(trigger.toLowerCase());
  }
};