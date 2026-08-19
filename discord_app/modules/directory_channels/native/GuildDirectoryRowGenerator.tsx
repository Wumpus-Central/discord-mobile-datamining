// === Module 11843: RowType ===

// Module 11843 (RowType)
import obj132 from "obj132" /* 2 */;
import DirectoryEntryTypes from "DirectoryEntryTypes" /* 11472 */;
import ArrayResult from "module_20" /* 20 */;

const DirectoryEntryCategories = DirectoryEntryTypes.DirectoryEntryCategories;
let obj = { ENTRY: 0, [0]: "ENTRY", HEADER: 1, [1]: "HEADER", PLACEHOLDER: 2, [2]: "PLACEHOLDER" };
obj = { type: obj.PLACEHOLDER };
let closure_4 = require("module_20").fill(obj);
let result = obj132.fileFinishedImporting("modules/directory_channels/native/GuildDirectoryRowGenerator.tsx");

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
    const obj4 = set(11471);
    return set(11471).rankGuildEntries(arr).map((item, index) => ({ type: constants.ENTRY, entry: item }));
  } else {
    const items = [];
    const rankByDateAddedResult = set(11471).rankByDateAdded(arr);
    const _Set = Set;
    set = new Set(rankByDateAddedResult.map((item, index) => item.guildId));
    let combined = items;
    if (rankByDateAddedResult.length > 0) {
      obj = { type: null, header: null };
      obj[0] = obj.HEADER;
      const intl = tmp12(1236).intl;
      obj[1] = intl.string(tmp12(1236).t.CbaapP);
      arr = items.push(obj);
      combined = items.concat(rankByDateAddedResult.map((item, index) => ({ type: constants.ENTRY, entry: item })));
    }
    const found = arr.filter((item, index) => !set.has(item.guildId));
    const obj5 = set(11471);
    const result = set(11471).orderByTotalMemberCount(found);
    let combined1 = combined;
    if (result.length > 0) {
      obj = { type: null, header: null };
      obj[0] = obj.HEADER;
      const intl2 = tmp12(1236).intl;
      obj[1] = intl2.string(tmp12(1236).t.wxbhEe);
      arr = combined.push(obj);
      combined1 = combined.concat(result.map((item, index) => ({ type: constants.ENTRY, entry: item })));
    }
    return combined1;
  }
};