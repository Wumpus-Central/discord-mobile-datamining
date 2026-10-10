// === Module 6798: useFlattenedChannels ===

// Module 6798 (useFlattenedChannels)
import _modDef12 from "module_12" /* 12 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import ChannelStore from "ChannelStore" /* 2065 */;

const require = globalThis.__r;

require = fn;
function getFlattenedChannels(guildId, set, found) {
  _require = set;
  importDefault = found;
  if (flag === undefined) {
    flag = false;
  }
  ChannelStore = undefined;
  const tmp = require("module_12");
  const values = require("module_12")(ChannelStore.getMutableGuildChannelsForGuild(guildId)).values();
  const tmpResult = require("module_12")(ChannelStore.getMutableGuildChannelsForGuild(guildId));
  ChannelStore = values.groupBy("parent_id").value();
  const iter = values.groupBy("parent_id");
  const mapped = require("module_12")(found).map((isCategory) => isCategory.isCategory() ? isCategory.id : isCategory.parent_id);
  found = mapped.filter(require("GlobalUtils").isNotNullish);
  const arr = require("module_12")(found);
  const mapped1 = found.uniq().map((item) => channel.getChannel(item));
  const found1 = mapped1.filter(require("GlobalUtils").isNotNullish);
  const uniqResult = found.uniq();
  const valueResult = found1.sortBy("position").value();
  set = new Set(valueResult.map((id) => id.id));
  let found2 = found.filter((isCategory) => {
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
  const sortByResult = require("module_12").sortBy(found2, (position) => {
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
    if (set.has(iter3.id)) {
      found = channel[iter3.id];
    } else {
      found = closure_1.filter((parent_id) => parent_id.parent_id === iter3.id);
    }
    if (found == null) {
      found = [];
    }
    const items = [
      ..._modDef12.sortBy(found, (position) => {
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
    set = iter3;
  }
  const iter3 = valueResult[Symbol.iterator]();
  while (iter3 !== undefined) {
    let _loopResult = _loop(iter3.next());
    continue;
  }
  return sortByResult;
}
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/useFlattenedChannels.tsx");

export { getFlattenedChannels };
export const useFlattenedChannels = ReactCompilerGating.isReactCompilerEnabled() ? (function useFlattenedChannels(arg0, arg1, arg2) {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(5);
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      if (cResult[3] === tmp4) {
        let tmp7 = cResult[4];
      }
      return tmp(504).useStateFromStoresArray(first, tmp7);
    }
  }
  const fn = function u() {
    const mapped = Array.from(closure_1).map((item) => channel.getChannel(item));
    return getFlattenedChannels(closure_0, closure_1, mapped.filter(GlobalUtils.isNotNullish), closure_2);
  };
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = undefined !== arg2 && arg2;
  cResult[4] = fn;
  tmp7 = fn;
  const obj = require("c");
  tmp = _require;
}) : (function useFlattenedChannels(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const items = [ChannelStore];
  return require("initialize").useStateFromStoresArray(items, () => {
    const mapped = Array.from(closure_1).map((item) => channel.getChannel(item));
    return getFlattenedChannels(closure_0, closure_1, mapped.filter(GlobalUtils.isNotNullish), flag);
  });
});