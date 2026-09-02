// === Module 16126: Wrapper ===

// Module 16126 (Wrapper)
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "updateGuildUnreadSentinel" /* 7390 */;
import closure_6 from "createGuildRecordFromRust" /* 1908 */;
import closure_7 from "insertUnsortedGuilds" /* 5389 */;
import closure_8 from "updateUserGuildSettingsInternal" /* 4701 */;
import closure_9 from "updateVoiceState" /* 4497 */;
import { NOOP } from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
function Wrapper(folder) {
  folder = folder.folder;
  closure_1 = undefined;
  let memo;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  let stateFromStoresArray2;
  let formatResult3;
  c7 = undefined;
  const tmp = callback2();
  closure_1 = tmp;
  let obj = stateFromStoresArray;
  memo = stateFromStoresArray.useMemo(() => ({ isMuted: false }), []);
  obj1 = folder(memo[10]);
  let items = [stateFromStoresArray2, closure_8];
  stateFromStoresArray = obj1.useStateFromStoresArray(items, () => {
    const guildIds = folder.guildIds;
    return guildIds.filter((arg0) => {
      const isMutedResult = muted.isMuted(arg0);
      let tmp2 = !isMutedResult;
      if (!isMutedResult) {
        tmp2 = mentionCount.getMentionCount(arg0) > 0;
      }
      return tmp2;
    });
  });
  let obj2 = folder(memo[10]);
  const items1 = [formatResult3];
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    const first = stateFromStoresArray[0];
    let tmp2;
    if (null != first) {
      const guild = formatResult3.getGuild(first);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      tmp2 = name;
    }
    return tmp2;
  });
  let obj3 = folder(memo[10]);
  const items2 = [stateFromStoresArray2, closure_8];
  stateFromStoresArray1 = obj3.useStateFromStoresArray(items2, () => {
    const guildIds = folder.guildIds;
    return guildIds.filter((arg0) => {
      const isMutedResult = muted.isMuted(arg0);
      let hasUnreadResult = !isMutedResult;
      if (!isMutedResult) {
        hasUnreadResult = closure_5.hasUnread(arg0);
      }
      return hasUnreadResult;
    });
  });
  const items3 = [formatResult3];
  const stateFromStores1 = folder(memo[10]).useStateFromStores(items3, () => {
    const first = stateFromStoresArray1[0];
    let tmp2;
    if (null != first) {
      const guild = formatResult3.getGuild(first);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      tmp2 = name;
    }
    return tmp2;
  });
  const obj5 = folder(memo[10]);
  const items4 = [closure_9, formatResult3, closure_8];
  stateFromStoresArray2 = folder(memo[10]).useStateFromStoresArray(items4, () => {
    const guildIds = folder.guildIds;
    return guildIds.filter((arg0) => {
      closure_0 = arg0;
      if (muted.isMuted(arg0)) {
        return false;
      } else {
        guild = guild.getGuild(arg0);
        if (guild != null) {
          const afkChannelId = guild.afkChannelId;
        }
        const _Set = Set;
        const set = new Set();
        const _Object = Object;
        const values = Object.values(voiceStates.getVoiceStates(arg0));
        for (const item10027 of values) {
          let tmp12 = item10027;
          let tmp13 = null != item10027.channelId;
          if (tmp13) {
            let tmp14 = item10027;
            tmp13 = tmp12.channelId !== afkChannelId;
          }
          if (tmp13) {
            let tmp15 = item10027;
            let addResult = set.add(tmp12.channelId);
          }
          continue;
        }
        const items = [];
        HermesBuiltin.arraySpread(set, 0);
        return items.some((id) => {
          const isCategoryMutedResult = closure_1_8.isCategoryMuted(closure_0, id);
          let tmp3 = !isCategoryMutedResult;
          if (!isCategoryMutedResult) {
            tmp3 = !closure_1_8.isChannelMuted(closure_0, id);
          }
          return tmp3;
        });
      }
    });
  });
  const obj6 = folder(memo[10]);
  const items5 = [formatResult3];
  const stateFromStores2 = folder(memo[10]).useStateFromStores(items5, () => {
    const first = stateFromStoresArray2[0];
    let tmp2;
    if (null != first) {
      const guild = formatResult3.getGuild(first);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      tmp2 = name;
    }
    return tmp2;
  });
  const items6 = [folder.folderName, memo, , ];
  ({ title: arr10[2], titleText: arr10[3] } = tmp);
  const memo1 = stateFromStoresArray.useMemo(() => {
    if (memo.isMuted) {
      let BellSlashIcon = folder(memo[11]).BellSlashIcon;
    } else {
      BellSlashIcon = closure_1_10;
    }
    let obj = { style: closure_1.title, children: null };
    const items = [closure_1_11(BellSlashIcon, { size: "xs" }), ];
    obj = { variant: "text-md/medium", style: closure_1.titleText, lineClamp: 1, color: "text-default", children: null };
    let folderName = folder.folderName;
    if (folderName == null) {
      const intl = folder(memo[13]).intl;
      folderName = intl.string(folder(memo[13]).t["JQ/1n3"]);
    }
    obj[4] = folderName;
    items[1] = closure_1_11(folder(memo[12]).Text, obj);
    obj[1] = items;
    return closure_1_12(stateFromStoresArray1, obj);
  }, items6);
  let intl = folder(memo[13]).intl;
  obj = { num: folder.guildIds.length };
  const formatResult = intl.format(folder(memo[13]).t.knOfkb, obj);
  formatResult3 = formatResult;
  c7 = "text-muted";
  if (stateFromStoresArray.length > 0) {
    if (null != stateFromStores) {
      const intl4 = tmp3(tmp4[13]).intl;
      obj = { guildName: null, count: null };
      obj[0] = stateFromStores;
      obj[1] = stateFromStoresArray.length - 1;
      const formatResult1 = intl4.format(tmp3(tmp4[13]).t.UoFb3H, obj);
      formatResult3 = formatResult1;
      let str = "text-muted";
      let tmp14 = formatResult1;
    }
    const items7 = [tmp14, str];
    const memo2 = obj.useMemo(() => closure_1_11(folder(memo[12]).Text, { variant: "text-xs/medium", color: c7, lineClamp: 1, children: formatResult3 }), items7);
    obj1 = { title: null, subtitle: null };
    obj1[0] = memo1;
    let tmp20;
    if (!folder.expanded) {
      tmp20 = memo2;
    }
    obj1[1] = tmp20;
    return closure_11(tmp3(tmp4[14]).HomeDrawerSharedItem, obj1);
  }
  if (stateFromStoresArray2.length > 0) {
    if (null != stateFromStores2) {
      const intl3 = tmp3(tmp4[13]).intl;
      obj2 = { guildName: null, count: null };
      obj2[0] = stateFromStores2;
      obj2[1] = stateFromStoresArray2.length - 1;
      const formatResult2 = intl3.format(tmp3(tmp4[13]).t["0CRdJQ"], obj2);
      formatResult3 = formatResult2;
      c7 = "text-voice-connected";
      str = "text-voice-connected";
      tmp14 = formatResult2;
    }
  }
  let tmp12 = stateFromStoresArray1.length > 0;
  if (tmp12) {
    tmp12 = null != stateFromStores1;
  }
  str = "text-muted";
  tmp14 = formatResult;
  if (tmp12) {
    const intl2 = tmp3(tmp4[13]).intl;
    obj3 = { guildName: null, count: null };
    obj3[0] = stateFromStores1;
    obj3[1] = stateFromStoresArray1.length - 1;
    formatResult3 = intl2.format(tmp3(tmp4[13]).t["3Pm7uY"], obj3);
    str = "text-muted";
    tmp14 = formatResult3;
  }
}
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = createCacheKey.createStyles({ title: { flexDirection: "row", alignItems: "center", gap: 4 }, titleText: { flexShrink: 1 } });
const result = require("set").fileFinishedImporting("modules/home_drawer/native/HomeDrawerFolderRow.tsx");

export default function HomeDrawerFolderExpandedChildren(folderId) {
  folderId = folderId.folderId;
  let obj = folderId(586);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guildFolderById = null;
    if (null != folderId) {
      guildFolderById = closure_1_7.getGuildFolderById(tmp);
    }
    return guildFolderById;
  });
  const MobileHomeDrawerExperiment = folderId(4338).MobileHomeDrawerExperiment;
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = null;
    if (MobileHomeDrawerExperiment.useConfig({ location: "folder-expanded-children" }).enableHome) {
      tmp3 = null;
      if (!tmp2) {
        obj = { folder: null, expanded: null };
        obj[0] = stateFromStores;
        obj[1] = folderId.expanded;
        tmp3 = callback(Wrapper, obj);
      }
    }
  }
  return tmp3;
};