// discord_app/modules/home_drawer/native/HomeDrawerFolderRow.tsx
import noop from "noop";
import { View } from "set";
import updateGuildUnreadSentinel from "updateGuildUnreadSentinel";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import insertUnsortedGuilds from "insertUnsortedGuilds";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import updateVoiceState from "updateVoiceState";
import { NOOP } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_12;
let unpackModuleId;
const require = arg1;
function Wrapper(folder) {
  folder = folder.folder;
  let c1;
  let memo;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  let stateFromStoresArray2;
  let formatResult3;
  let c7;
  const tmp = callback2();
  c1 = tmp;
  let obj = stateFromStoresArray;
  memo = stateFromStoresArray.useMemo(() => ({ isMuted: false }), []);
  let obj1 = folder(memo[10]);
  let items = [stateFromStoresArray2, updateUserGuildSettingsInternal];
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
  const items2 = [stateFromStoresArray2, updateUserGuildSettingsInternal];
  stateFromStoresArray1 = obj3.useStateFromStoresArray(items2, () => {
    const guildIds = folder.guildIds;
    return guildIds.filter((arg0) => {
      const isMutedResult = muted.isMuted(arg0);
      let hasUnreadResult = !isMutedResult;
      if (!isMutedResult) {
        hasUnreadResult = updateGuildUnreadSentinel.hasUnread(arg0);
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
  const items4 = [updateVoiceState, formatResult3, updateUserGuildSettingsInternal];
  stateFromStoresArray2 = folder(memo[10]).useStateFromStoresArray(items4, () => {
    const guildIds = folder.guildIds;
    return guildIds.filter((arg0) => {
      let closure_0 = arg0;
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
          const isCategoryMutedResult = outer1_8.isCategoryMuted(closure_0, id);
          let tmp3 = !isCategoryMutedResult;
          if (!isCategoryMutedResult) {
            tmp3 = !outer1_8.isChannelMuted(closure_0, id);
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
      BellSlashIcon = outer1_10;
    }
    let obj = { style: _undefined.title, children: null };
    const items = [outer1_11(BellSlashIcon, { size: "xs" }), ];
    obj = { variant: "text-md/medium", style: _undefined.titleText, lineClamp: 1, color: "text-default", children: null };
    let folderName = folder.folderName;
    if (folderName == null) {
      const intl = folder(memo[13]).intl;
      folderName = intl.string(folder(memo[13]).t["JQ/1n3"]);
    }
    obj[4] = folderName;
    items[1] = outer1_11(folder(memo[12]).Text, obj);
    obj[1] = items;
    return outer1_12(stateFromStoresArray1, obj);
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
    const memo2 = obj.useMemo(() => outer1_11(folder(memo[12]).Text, { variant: "text-xs/medium", color: c7, lineClamp: 1, children: formatResult3 }), items7);
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
const result = require("updateGuildUnreadSentinel").fileFinishedImporting("modules/home_drawer/native/HomeDrawerFolderRow.tsx");

export default function HomeDrawerFolderExpandedChildren(folderId) {
  folderId = folderId.folderId;
  let obj = folderId(589);
  const items = [insertUnsortedGuilds];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guildFolderById = null;
    if (null != folderId) {
      guildFolderById = outer1_7.getGuildFolderById(tmp);
    }
    return guildFolderById;
  });
  const MobileHomeDrawerExperiment = folderId(4203).MobileHomeDrawerExperiment;
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