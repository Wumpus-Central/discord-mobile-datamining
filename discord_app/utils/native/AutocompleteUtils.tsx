// discord_app/utils/native/AutocompleteUtils.tsx
import Constants from "../../Constants.tsx";
import util from "../../intl/index.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

Constants.AutoCompleteResultTypes;
const items = [
  ["game", "gameMentionInput"],
  ["time", "timestampMentionInput"],
];
const map = new Map(items);
const result = size.fileFinishedImporting("utils/native/AutocompleteUtils.tsx");

export default {
  MENTION_EVERYONE() {
    const obj = { type: AutoCompleteResultTypes.GLOBAL, test: "everyone", text: "@everyone", description: null };
    const intl = util.intl;
    obj.description = intl.string(util.t["5atMLZ"]);
    return obj;
  },
  MENTION_HERE() {
    const obj = { type: AutoCompleteResultTypes.GLOBAL, test: "here", text: "@here", description: null };
    const intl = util.intl;
    obj.description = intl.string(util.t.iX9SFD);
    return obj;
  },
  MENTION_GAME() {
    const obj = { test: "game", text: "@game", inlineAutocompleteType: "gameMentionInput", description: null };
    const intl = util.intl;
    obj.description = intl.string(util.t["1kR88y"]);
    return obj;
  },
  MENTION_TIMESTAMP() {
    const obj = { test: "time", text: "@time", inlineAutocompleteType: "timestampMentionInput", description: null };
    const intl = util.intl;
    obj.description = intl.string(util.t.V6L3TV);
    return obj;
  },
  LAUNCHABLE_APPLICATIONS() {
    return [];
  },
  findAutoInsertOnSpaceMentionInlineAutocompleteType(trigger) {
    return map.get(trigger.toLowerCase());
  },
};
