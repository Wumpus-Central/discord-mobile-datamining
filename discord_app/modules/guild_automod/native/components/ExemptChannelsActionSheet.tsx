// === Module 17687: ExemptChannelsActionSheet ===

// Module 17687 (ExemptChannelsActionSheet)
import utils_ChannelUtils from "utils/ChannelUtils" /* 5812 */;
import TableRow from "TableRow" /* 5993 */;
import getFlattedChannelListDefault from "getFlattedChannelList" /* 6607 */;
import noop from "module_19" /* 19 */;
import GuildCategoryStore from "GuildCategoryStore" /* 6606 */;
import GuildStore from "GuildStore" /* 2074 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
function getChannelOptionId(channel) {
  return channel.channel.id;
}
function getChannelOptionName(name) {
  return name.name;
}
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  let mapped = dependencyMap;
  const cResult = require("c").c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildCategoryStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return GuildCategoryStore.getCategories(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] !== stateFromStores) {
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0) {
          channel = arg0.channel;
          return !channel.isThread();
        }
      }
      cResult[6] = C;
    } else {
      class C {
        constructor(arg0) {
          channel = arg0.channel;
          return !channel.isThread();
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor(arg0) {
          channel = arg0.channel;
          obj = { channel, name: null };
          obj2 = closure_0(closure_1_2[9]);
          obj.name = obj2.computeChannelName(channel, closure_1_7, closure_1_6);
          return obj;
        }
      }
      cResult[7] = S;
    } else {
      class S {
        constructor(arg0) {
          channel = arg0.channel;
          obj = { channel, name: null };
          obj2 = closure_0(closure_1_2[9]);
          obj.name = obj2.computeChannelName(channel, closure_1_7, closure_1_6);
          return obj;
        }
      }
    }
    mapped = getFlattedChannelListDefault(stateFromStores._categories, stateFromStores, C).map(S);
    cResult[4] = stateFromStores;
    cResult[5] = mapped;
    const arr3 = getFlattedChannelListDefault(stateFromStores._categories, stateFromStores, C);
  } else {
    class S {
      constructor(arg0) {
        channel = arg0.channel;
        obj = { channel, name: null };
        obj2 = closure_0(closure_1_2[9]);
        obj.name = obj2.computeChannelName(channel, closure_1_7, closure_1_6);
        return obj;
      }
    }
  }
  const tmpResult = require("initialize");
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildCategoryStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildCategoryStore.getCategories(closure_0), items1);
  const items2 = [stateFromStores];
  return noop.useMemo(() => getFlattedChannelListDefault(stateFromStores._categories, stateFromStores, (channel) => {
    channel = channel.channel;
    return !channel.isThread();
  }).map((channel) => {
    channel = channel.channel;
    const obj = { channel, name: closure_1_0(closure_1_2[9]).computeChannelName(channel, closure_1_7, closure_1_6) };
    return obj;
  }), items2);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/ExemptChannelsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(576).c(13);
  guildId = guildId.guildId;
  ({ exemptChannels, onSave } = guildId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function l() {
      return GuildStore.getGuild(guildId);
    };
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = guildId(576);
  const stateFromStores = guildId(504).useStateFromStores(first, tmp6, tmp7);
  const tmp9 = closure_11(guildId);
  if (cResult[4] !== stateFromStores) {
    const fn2 = function v(channel) {
      const channelIconComponentWithGuild = utils_ChannelUtils.getChannelIconComponentWithGuild(channel.channel, stateFromStores);
      let tmp4 = null;
      if (null != channelIconComponentWithGuild) {
        const obj2 = { IconComponent: channelIconComponentWithGuild };
        tmp4 = jsx(TableRow.TableRow.Icon, { IconComponent: channelIconComponentWithGuild });
      }
      return tmp4;
    };
    cResult[4] = stateFromStores;
    cResult[5] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.OGiMXJ);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t.vephiL);
    cResult[6] = stringResult;
    cResult[7] = stringResult1;
    let tmp12 = stringResult1;
    let tmp11 = stringResult;
  } else {
    tmp11 = cResult[6];
    tmp12 = cResult[7];
  }
  if (cResult[8] === exemptChannels) {
    if (cResult[9] === onSave) {
      if (cResult[10] === tmp9) {
        if (cResult[11] === tmp10) {
          let tmp15 = cResult[12];
        }
        return tmp15;
      }
    }
  }
  const tmp16 = jsx(stateFromStores(17686), { title: tmp11, searchPlaceholder: tmp12, listId: "automod-exempt-channels", items: tmp9, initialSelected: exemptChannels, getId: getChannelOptionId, getSearchText: getChannelOptionName, renderLabel: getChannelOptionName, renderIcon: tmp10, onSave });
  cResult[8] = exemptChannels;
  cResult[9] = onSave;
  cResult[10] = tmp9;
  cResult[11] = tmp10;
  cResult[12] = tmp16;
  tmp15 = tmp16;
  let obj2 = { title: tmp11, searchPlaceholder: tmp12, listId: "automod-exempt-channels", items: tmp9, initialSelected: exemptChannels, getId: getChannelOptionId, getSearchText: getChannelOptionName, renderLabel: getChannelOptionName, renderIcon: tmp10, onSave };
  const tmpResult = guildId(504);
}) : ((guildId) => {
  guildId = guildId.guildId;
  ({ exemptChannels, onSave } = guildId);
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  const items2 = [stateFromStores];
  const obj = guildId(504);
  const callback = noop.useCallback((channel) => {
    const channelIconComponentWithGuild = utils_ChannelUtils.getChannelIconComponentWithGuild(channel.channel, stateFromStores);
    let tmp4 = null;
    if (null != channelIconComponentWithGuild) {
      const obj2 = { IconComponent: channelIconComponentWithGuild };
      tmp4 = jsx(TableRow.TableRow.Icon, { IconComponent: channelIconComponentWithGuild });
    }
    return tmp4;
  }, items2);
  let obj2 = { title: null, searchPlaceholder: null, listId: "automod-exempt-channels", items: null, initialSelected: null, getId: null, getSearchText: null, renderLabel: null, renderIcon: null, onSave: null };
  const tmp2 = closure_11(guildId);
  const intl = guildId(1126).intl;
  obj2.title = intl.string(guildId(1126).t.OGiMXJ);
  const intl2 = guildId(1126).intl;
  obj2.searchPlaceholder = intl2.string(guildId(1126).t.vephiL);
  obj2.items = tmp2;
  obj2.initialSelected = exemptChannels;
  obj2.getId = getChannelOptionId;
  obj2.getSearchText = getChannelOptionName;
  obj2.renderLabel = getChannelOptionName;
  obj2.renderIcon = callback;
  obj2.onSave = onSave;
  return jsx(stateFromStores(17686), { title: null, searchPlaceholder: null, listId: "automod-exempt-channels", items: null, initialSelected: null, getId: null, getSearchText: null, renderLabel: null, renderIcon: null, onSave: null });
});