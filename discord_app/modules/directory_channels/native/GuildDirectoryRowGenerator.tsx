// === Module 12336: GuildDirectoryRowGenerator ===

// Module 12336 (GuildDirectoryRowGenerator)
import GuildDirectoryConstants from "GuildDirectoryConstants" /* 11947 */;
import size from "module_2" /* 2 */;

let set;

const DirectoryEntryCategories = GuildDirectoryConstants.DirectoryEntryCategories;
const RowType = { ENTRY: 0, [0]: "ENTRY", HEADER: 1, [1]: "HEADER", PLACEHOLDER: 2, [2]: "PLACEHOLDER" };
let obj2 = { type: RowType.PLACEHOLDER };
const ArrayResult = Array(20);
let closure_4 = ArrayResult.fill(obj2);
let result = size.fileFinishedImporting("modules/directory_channels/native/GuildDirectoryRowGenerator.tsx");

export { RowType };
export const generateDirectoryRows = function generateDirectoryRows(directoryIsFetching, arr, currentCategoryId) {
  let intl;
  let intl2;
  let obj;
  const tmp = directoryIsFetching;
  if (tmp) {
    if (0 === arr.length) {
      return closure_4;
    }
  }
  if (0 === arr.length) {
    return [];
  } else if (currentCategoryId !== DirectoryEntryCategories.ALL) {
    const obj4 = set(11946);
    const rankGuildEntriesResult = obj4.rankGuildEntries(arr);
    return rankGuildEntriesResult.map((entry) => ({ type: constants.ENTRY, entry }));
  } else {
    const items = [];
    const obj5 = set(11946);
    const rankByDateAddedResult = obj5.rankByDateAdded(arr);
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(rankByDateAddedResult.map((guildId) => guildId.guildId));
    let combined = items;
    if (rankByDateAddedResult.length > 0) {
      obj = { type: obj.HEADER, header: intl.string(set(1126).t.CbaapP) };
      const push = items.push;
      intl = tmp13(1126).intl;
      arr = push(obj);
      combined = items.concat(rankByDateAddedResult.map((entry) => ({ type: constants.ENTRY, entry })));
    }
    const found = arr.filter((guildId) => !set.has(guildId.guildId));
    const tmp13Result = set(11946);
    const result = tmp13Result.orderByTotalMemberCount(found);
    let combined1 = combined;
    if (result.length > 0) {
      const push2 = combined.push;
      const obj2 = { type: obj.HEADER, header: intl2.string(set(1126).t.wxbhEe) };
      intl2 = tmp13(1126).intl;
      push2(obj2);
      combined1 = combined.concat(result.map((entry) => ({ type: constants.ENTRY, entry })));
    }
    return combined1;
  }
};