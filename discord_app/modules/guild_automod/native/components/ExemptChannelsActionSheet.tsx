// === Module 17711: ExemptChannelsActionSheet ===

// Module 17711 (ExemptChannelsActionSheet)
import Fragment from "Fragment" /* 21 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5812 */;
import TableRow from "TableRow" /* 5993 */;
import getFlattedChannelListDefault from "getFlattedChannelList" /* 6607 */;
import react from "react" /* 19 */;
import GuildCategoryStore from "GuildCategoryStore" /* 6606 */;
import GuildStore from "GuildStore" /* 2074 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, guildId;

function getChannelOptionId(channel) {
  return channel.channel.id;
}
function getChannelOptionName(name) {
  return name.name;
}
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  let tmp9;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(8);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildCategoryStore];
    cResult[0] = items;
    first = items;
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
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] !== stateFromStores) {
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(channel) {
          channel = channel.channel;
          return !channel.isThread();
        }
      }
      cResult[6] = C;
    } else {
      class C {
        constructor(channel) {
          channel = channel.channel;
          return !channel.isThread();
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor(channel) {
          let obj2;
          channel = channel.channel;
          const obj = { channel, name: obj2.computeChannelName(channel, UserStore, RelationshipStore) };
          obj2 = closure_0(dependencyMap[9]);
          return obj;
        }
      }
      cResult[7] = S;
    } else {
      class S {
        constructor(channel) {
          let obj2;
          channel = channel.channel;
          const obj = { channel, name: obj2.computeChannelName(channel, UserStore, RelationshipStore) };
          obj2 = closure_0(dependencyMap[9]);
          return obj;
        }
      }
    }
    const arr3 = getFlattedChannelListDefault(stateFromStores._categories, stateFromStores, C);
    const mapped = arr3.map(S);
    cResult[4] = stateFromStores;
    cResult[5] = mapped;
    tmp9 = mapped;
  } else {
    class S {
      constructor(channel) {
        let obj2;
        channel = channel.channel;
        const obj = { channel, name: obj2.computeChannelName(channel, UserStore, RelationshipStore) };
        obj2 = closure_0(dependencyMap[9]);
        return obj;
      }
    }
  }
  return tmp9;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [GuildCategoryStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => GuildCategoryStore.getCategories(closure_0), items1);
  const items2 = [stateFromStores];
  return react.useMemo(() => {
    const arr = getFlattedChannelListDefault(stateFromStores._categories, stateFromStores, (channel) => {
      channel = channel.channel;
      return !channel.isThread();
    });
    return arr.map((channel) => {
      let obj2;
      channel = channel.channel;
      const obj = { channel, name: obj2.computeChannelName(channel, closure_1_7, closure_1_6) };
      obj2 = closure_1_0(closure_1_2[9]);
      return obj;
    });
  }, items2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let exemptChannels;
  let first;
  let onSave;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp6;
  let tmp7;
  let obj = guildId(576);
  const cResult = obj.c(13);
  guildId = guildId.guildId;
  ({ exemptChannels, onSave } = guildId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
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
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = guildId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  const tmp9 = closure_11(guildId);
  if (cResult[4] !== stateFromStores) {
    const fn2 = function v(channel) {
      channel = channel.channel;
      const obj = utils_ChannelUtils;
      const channelIconComponentWithGuild = obj.getChannelIconComponentWithGuild(channel, stateFromStores);
      let tmp4 = null;
      if (null != channelIconComponentWithGuild) {
        tmp4 = jsx(TableRow.TableRow.Icon, { IconComponent: channelIconComponentWithGuild });
      }
      return tmp4;
    };
    cResult[4] = stateFromStores;
    cResult[5] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(guildId(1126).t.OGiMXJ);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(guildId(1126).t.vephiL);
    cResult[6] = stringResult;
    cResult[7] = stringResult1;
    tmp12 = stringResult1;
    tmp11 = stringResult;
  } else {
    tmp11 = cResult[6];
    tmp12 = cResult[7];
  }
  if (cResult[8] === exemptChannels) {
    if (cResult[9] === onSave) {
      if (cResult[10] === tmp9) {
        let tmp15;
        if (cResult[11] === tmp10) {
          tmp15 = cResult[12];
        }
        return tmp15;
      }
    }
  }
  const tmp16 = jsx(stateFromStores(17710), { title: tmp11, searchPlaceholder: tmp12, listId: "automod-exempt-channels", items: tmp9, initialSelected: exemptChannels, getId: getChannelOptionId, getSearchText: getChannelOptionName, renderLabel: getChannelOptionName, renderIcon: tmp10, onSave });
  cResult[8] = exemptChannels;
  cResult[9] = onSave;
  cResult[10] = tmp9;
  cResult[11] = tmp10;
  cResult[12] = tmp16;
  tmp15 = tmp16;
}) : ((guildId) => {
  let exemptChannels;
  let onSave;
  guildId = guildId.guildId;
  ({ exemptChannels, onSave } = guildId);
  let obj = guildId(504);
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  const items2 = [stateFromStores];
  const tmp2 = closure_11(guildId);
  const callback = react.useCallback((channel) => {
    channel = channel.channel;
    const obj = utils_ChannelUtils;
    const channelIconComponentWithGuild = obj.getChannelIconComponentWithGuild(channel, stateFromStores);
    let tmp4 = null;
    if (null != channelIconComponentWithGuild) {
      tmp4 = jsx(TableRow.TableRow.Icon, { IconComponent: channelIconComponentWithGuild });
    }
    return tmp4;
  }, items2);
  let tmp4 = stateFromStores(17710);
  const intl = guildId(1126).intl;
  const intl2 = guildId(1126).intl;
  return <tmp4 title={intl.string(guildId(1126).t.OGiMXJ)} searchPlaceholder={intl2.string(guildId(1126).t.vephiL)} listId="automod-exempt-channels" items={tmp2} initialSelected={exemptChannels} getId={getChannelOptionId} getSearchText={getChannelOptionName} renderLabel={getChannelOptionName} renderIcon={callback} onSave={onSave} />;
});
const result = size.fileFinishedImporting("modules/guild_automod/native/components/ExemptChannelsActionSheet.tsx");

export default tmp2;