// === Module 6793: getFlattenedChannels ===

// Module 6793 (getFlattenedChannels)
import closure_3 from "ensureGuildLoaded" /* 1391 */;

const require = arg1;
function getFlattenedChannels(guildId, set, found, arg3) {
  const _require = set;
  importDefault = found;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let mutableGuildChannelsForGuild;
  set = undefined;
  let found2;
  const tmp = importDefault(flag[1]);
  const values = importDefault(flag[1])(mutableGuildChannelsForGuild.getMutableGuildChannelsForGuild(guildId)).values();
  const tmpResult = importDefault(flag[1])(mutableGuildChannelsForGuild.getMutableGuildChannelsForGuild(guildId));
  mutableGuildChannelsForGuild = values.groupBy("parent_id").value();
  const iter = values.groupBy("parent_id");
  const mapped = importDefault(flag[1])(found).map((isCategory) => isCategory.isCategory() ? isCategory.id : isCategory.parent_id);
  found = mapped.filter(_require(flag[2]).isNotNullish);
  const arr = importDefault(flag[1])(found);
  const mapped1 = found.uniq().map((arg0) => channel.getChannel(arg0));
  const found1 = mapped1.filter(_require(flag[2]).isNotNullish);
  const uniqResult = found.uniq();
  const valueResult = found1.sortBy("position").value();
  set = new Set(valueResult.map((id) => id.id));
  found2 = found.filter((isCategory) => {
    let isCategoryResult = isCategory.isCategory();
    if (!isCategoryResult) {
      let hasItem = null != isCategory.parent_id;
      if (hasItem) {
        hasItem = set.has(isCategory.parent_id);
      }
      isCategoryResult = hasItem;
    }
    return !isCategoryResult;
  });
  const iter2 = found1.sortBy("position");
  const sortByResult = importDefault(flag[1]).sortBy(found2, (position) => {
    position = position.position;
    if (position.isGuildVocal()) {
      let sum = position + 10000;
    } else {
      sum = position;
    }
    return sum;
  });
  found2 = sortByResult;
  function _loop(iter3) {
    if (!flag) {
      found2.push(iter3);
    }
    if (iter3.has(iter3.id)) {
      found = channel[iter3.id];
    } else {
      found = lib.filter((parent_id) => parent_id.parent_id === iter3.id);
    }
    if (found == null) {
      found = [];
    }
    const items = [
      ...lib(flag[1]).sortBy(found, (position) => {
        position = position.position;
        if (position.isGuildVocal()) {
          let sum = position + 10000;
        } else {
          sum = position;
        }
        return sum;
      })
    ];
    found2.push.apply(items);
  }
  const iter3 = valueResult[Symbol.iterator]();
  while (iter3 !== undefined) {
    let _loopResult = _loop(iter3.next());
    continue;
  }
  return sortByResult;
}
const result = require("set").fileFinishedImporting("modules/guild_onboarding/useFlattenedChannels.tsx");

export { getFlattenedChannels };
export const useFlattenedChannels = function useFlattenedChannels(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const items = [closure_3];
  return _require(flag[3]).useStateFromStoresArray(items, () => {
    const mapped = Array.from(closure_1).map((arg0) => channel.getChannel(arg0));
    return closure_1_4(callback, closure_1, mapped.filter(callback(flag[2]).isNotNullish), flag);
  });
};