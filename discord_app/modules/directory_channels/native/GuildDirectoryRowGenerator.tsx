// discord_app/modules/directory_channels/native/GuildDirectoryRowGenerator.tsx
import GuildDirectoryConstants from "../GuildDirectoryConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const DirectoryEntryCategories = GuildDirectoryConstants.DirectoryEntryCategories;
let RowType = { ENTRY: 0, [0]: "ENTRY", HEADER: 1, [1]: "HEADER", PLACEHOLDER: 2, [2]: "PLACEHOLDER" };
RowType = { type: RowType.PLACEHOLDER };
let closure_4 = Array(20).fill(RowType);
let result = size.fileFinishedImporting("modules/directory_channels/native/GuildDirectoryRowGenerator.tsx");

export { RowType };
export const generateDirectoryRows = function generateDirectoryRows(arg0, arr, currentCategoryId) {
  if (arg0) {
    if (0 === arr.length) {
      return closure_4;
    }
  }
  if (0 === arr.length) {
    return [];
  } else if (currentCategoryId !== DirectoryEntryCategories.ALL) {
    const obj4 = set(12304);
    return set(12304)
      .rankGuildEntries(arr)
      .map((entry) => ({ type: constants.ENTRY, entry }));
  } else {
    const items = [];
    const rankByDateAddedResult = set(12304).rankByDateAdded(arr);
    const _Set = Set;
    set = new Set(rankByDateAddedResult.map((guildId) => guildId.guildId));
    let combined = items;
    if (rankByDateAddedResult.length > 0) {
      let obj = { type: null, header: null };
      obj.type = obj.HEADER;
      const intl = tmp12(1114).intl;
      obj.header = intl.string(tmp12(1114).t.CbaapP);
      items.push(obj);
      combined = items.concat(rankByDateAddedResult.map((entry) => ({ type: constants.ENTRY, entry })));
    }
    const found = arr.filter((guildId) => !set.has(guildId.guildId));
    const obj5 = set(12304);
    const result = set(12304).orderByTotalMemberCount(found);
    let combined1 = combined;
    if (result.length > 0) {
      obj = { type: null, header: null };
      obj.type = obj.HEADER;
      const intl2 = tmp12(1114).intl;
      obj.header = intl2.string(tmp12(1114).t.wxbhEe);
      combined.push(obj);
      combined1 = combined.concat(result.map((entry) => ({ type: constants.ENTRY, entry })));
    }
    return combined1;
  }
};
