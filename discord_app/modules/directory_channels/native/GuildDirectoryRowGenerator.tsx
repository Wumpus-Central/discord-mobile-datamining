// discord_app/modules/directory_channels/native/GuildDirectoryRowGenerator.tsx
import GuildDirectoryConstants from "../GuildDirectoryConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const DirectoryEntryCategories = GuildDirectoryConstants.DirectoryEntryCategories;
const RowType = { ENTRY: 0, [0]: "ENTRY", HEADER: 1, [1]: "HEADER", PLACEHOLDER: 2, [2]: "PLACEHOLDER" };
let closure_4 = Array(20).fill({ type: RowType.PLACEHOLDER });
let result = size.fileFinishedImporting("modules/directory_channels/native/GuildDirectoryRowGenerator.tsx");

export { RowType };
export const generateDirectoryRows = function generateDirectoryRows(directoryIsFetching, arr, currentCategoryId) {
  if (directoryIsFetching) {
    if (0 === arr.length) {
      return closure_4;
    }
  }
  if (0 === arr.length) {
    return [];
  } else if (currentCategoryId !== DirectoryEntryCategories.ALL) {
    const obj4 = set(12000);
    return set(12000)
      .rankGuildEntries(arr)
      .map((entry) => ({ type: constants.ENTRY, entry }));
  } else {
    const items = [];
    const rankByDateAddedResult = set(12000).rankByDateAdded(arr);
    const _Set = Set;
    set = new Set(rankByDateAddedResult.map((guildId) => guildId.guildId));
    let combined = items;
    if (rankByDateAddedResult.length > 0) {
      const obj = { type: null, header: null };
      obj.type = obj.HEADER;
      const intl = tmp12(1126).intl;
      obj.header = intl.string(tmp12(1126).t.CbaapP);
      arr = items.push(obj);
      combined = items.concat(rankByDateAddedResult.map((entry) => ({ type: constants.ENTRY, entry })));
    }
    const found = arr.filter((guildId) => !set.has(guildId.guildId));
    const obj5 = set(12000);
    const result = set(12000).orderByTotalMemberCount(found);
    let combined1 = combined;
    if (result.length > 0) {
      const obj2 = { type: obj.HEADER, header: null };
      const intl2 = tmp12(1126).intl;
      obj2.header = intl2.string(tmp12(1126).t.wxbhEe);
      combined.push(obj2);
      combined1 = combined.concat(result.map((entry) => ({ type: constants.ENTRY, entry })));
    }
    return combined1;
  }
};
