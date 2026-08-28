// discord_app/modules/directory_channels/native/GuildDirectoryRowGenerator.tsx
import set2 from "../../../../_runtime/00002_set.js";
import DirectoryEntryTypes from "../GuildDirectoryConstants.tsx";
import ArrayResult from "../../../../_runtime/00020_noop.js";

const DirectoryEntryCategories = DirectoryEntryTypes.DirectoryEntryCategories;
let obj = { ENTRY: 0, [0]: "ENTRY", HEADER: 1, [1]: "HEADER", PLACEHOLDER: 2, [2]: "PLACEHOLDER" };
obj = { type: obj.PLACEHOLDER };
let closure_4 = require("../../../../_runtime/00020_noop.js").fill(obj);
let result = set2.fileFinishedImporting("modules/directory_channels/native/GuildDirectoryRowGenerator.tsx");

export const RowType = obj;
export const generateDirectoryRows = function generateDirectoryRows(arg0, arr, currentCategoryId) {
  if (arg0) {
    if (0 === arr.length) {
      return closure_4;
    }
  }
  if (0 === arr.length) {
    return [];
  } else if (currentCategoryId !== DirectoryEntryCategories.ALL) {
    const obj4 = set(11807);
    return set(11807).rankGuildEntries(arr).map((entry) => ({ type: constants.ENTRY, entry }));
  } else {
    const items = [];
    const rankByDateAddedResult = set(11807).rankByDateAdded(arr);
    const _Set = Set;
    set = new Set(rankByDateAddedResult.map((guildId) => guildId.guildId));
    let combined = items;
    if (rankByDateAddedResult.length > 0) {
      obj = { type: null, header: null };
      obj[0] = obj.HEADER;
      const intl = tmp12(1236).intl;
      obj[1] = intl.string(tmp12(1236).t.CbaapP);
      items.push(obj);
      combined = items.concat(rankByDateAddedResult.map((entry) => ({ type: constants.ENTRY, entry })));
    }
    const found = arr.filter((guildId) => !set.has(guildId.guildId));
    const obj5 = set(11807);
    const result = set(11807).orderByTotalMemberCount(found);
    let combined1 = combined;
    if (result.length > 0) {
      obj = { type: null, header: null };
      obj[0] = obj.HEADER;
      const intl2 = tmp12(1236).intl;
      obj[1] = intl2.string(tmp12(1236).t.wxbhEe);
      combined.push(obj);
      combined1 = combined.concat(result.map((entry) => ({ type: constants.ENTRY, entry })));
    }
    return combined1;
  }
};