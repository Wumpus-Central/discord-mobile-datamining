// discord_app/modules/home_drawer/native/HomeDrawerFolderRow.tsx
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import BellSlashIcon2 from "../../../design/components/Icon/native/redesign/generated/BellSlashIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildReadStateStore from "../../../stores/GuildReadStateStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import SortedGuildStore from "../../../stores/SortedGuildStore.tsx";
import UserGuildSettingsStore from "../../../stores/UserGuildSettingsStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";

require = fn;
function Wrapper(folder) {
  folder = folder.folder;
  let stateFromStoresArray;
  let stateFromStoresArray2;
  let formatResult3;
  const tmp = closure_13();
  closure_1 = tmp;
  const memo = stateFromStoresArray.useMemo(() => ({ isMuted: false }), []);
  let obj1 = folder(memo[10]);
  let items = [stateFromStoresArray2, UserGuildSettingsStore];
  stateFromStoresArray = obj1.useStateFromStoresArray(items, () => {
    const guildIds = folder.guildIds;
    return guildIds.filter((item) => {
      const isMutedResult = muted.isMuted(item);
      let tmp2 = !isMutedResult;
      if (!isMutedResult) {
        tmp2 = mentionCount.getMentionCount(item) > 0;
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
      const guild = GuildStore.getGuild(first);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      tmp2 = name;
    }
    return tmp2;
  });
  let obj3 = folder(memo[10]);
  const items2 = [stateFromStoresArray2, UserGuildSettingsStore];
  const stateFromStoresArray1 = obj3.useStateFromStoresArray(items2, () => {
    const guildIds = folder.guildIds;
    return guildIds.filter((item) => {
      const isMutedResult = muted.isMuted(item);
      let hasUnreadResult = !isMutedResult;
      if (!isMutedResult) {
        hasUnreadResult = stateFromStoresArray2.hasUnread(item);
      }
      return hasUnreadResult;
    });
  });
  const items3 = [formatResult3];
  const stateFromStores1 = folder(memo[10]).useStateFromStores(items3, () => {
    const first = stateFromStoresArray1[0];
    let tmp2;
    if (null != first) {
      const guild = GuildStore.getGuild(first);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      tmp2 = name;
    }
    return tmp2;
  });
  const obj5 = folder(memo[10]);
  const items4 = [VoiceStateStore, formatResult3, UserGuildSettingsStore];
  stateFromStoresArray2 = folder(memo[10]).useStateFromStoresArray(items4, () => {
    const guildIds = folder.guildIds;
    return guildIds.filter((item) => {
      closure_0 = item;
      if (closure_8.isMuted(item)) {
        return false;
      } else {
        guild = guild.getGuild(item);
        if (guild != null) {
          const afkChannelId = guild.afkChannelId;
        }
        const _Set = Set;
        const set = new Set();
        const _Object = Object;
        const values = Object.values(voiceStates.getVoiceStates(item));
        for (const item10027 of values) {
          let tmp13 = null != item10027.channelId;
          if (tmp13) {
            tmp13 = item10027.channelId !== afkChannelId;
          }
          if (tmp13) {
            let addResult = set.add(item10027.channelId);
          }
          continue;
        }
        const items = [];
        HermesBuiltin.arraySpread(set, 0);
        return items.some((item) => {
          const isCategoryMutedResult = closure_2_8.isCategoryMuted(closure_0, item);
          let tmp3 = !isCategoryMutedResult;
          if (!isCategoryMutedResult) {
            tmp3 = !closure_2_8.isChannelMuted(closure_0, item);
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
      const guild = GuildStore.getGuild(first);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      tmp2 = name;
    }
    return tmp2;
  });
  const items6 = [folder.folderName, memo, ,];
  ({ title: arr10[2], titleText: arr10[3] } = tmp);
  const memo1 = stateFromStoresArray.useMemo(() => {
    if (memo.isMuted) {
      let BellSlashIcon = BellSlashIcon2.BellSlashIcon;
    } else {
      BellSlashIcon = NOOP;
    }
    let obj = { style: closure_1.title, children: null };
    const items = [closure_2_11(BellSlashIcon, { size: "xs" })];
    obj = {
      variant: "text-md/medium",
      style: closure_1.titleText,
      lineClamp: 1,
      color: "text-default",
      children: null,
    };
    let folderName = folder.folderName;
    if (folderName == null) {
      const intl = util.intl;
      folderName = intl.string(util.t["JQ/1n3"]);
    }
    obj.children = folderName;
    items[1] = closure_2_11(Text_Text.Text, obj);
    obj.children = items;
    return closure_2_12(View, obj);
  }, items6);
  let intl = folder(memo[13]).intl;
  let obj = { num: folder.guildIds.length };
  const formatResult = intl.format(folder(memo[13]).t.knOfkb, obj);
  formatResult3 = formatResult;
  c7 = "text-muted";
  if (stateFromStoresArray.length > 0) {
    if (null != stateFromStores) {
      const intl4 = tmp3(tmp4[13]).intl;
      obj = { guildName: stateFromStores, count: stateFromStoresArray.length - 1 };
      const formatResult1 = intl4.format(tmp3(tmp4[13]).t.UoFb3H, obj);
      formatResult3 = formatResult1;
      let str = "text-muted";
      let tmp14 = formatResult1;
    }
    const items7 = [tmp14, str];
    const memo2 = obj.useMemo(
      () => closure_2_11(Text_Text.Text, { variant: "text-xs/medium", color, lineClamp: 1, children: formatResult3 }),
      items7,
    );
    obj1 = { title: memo1, subtitle: null };
    let tmp20;
    if (!folder.expanded) {
      tmp20 = memo2;
    }
    obj1.subtitle = tmp20;
    return closure_11(tmp3(tmp4[14]).HomeDrawerSharedItem, obj1);
  }
  if (stateFromStoresArray2.length > 0) {
    if (null != stateFromStores2) {
      const intl3 = tmp3(tmp4[13]).intl;
      obj2 = { guildName: stateFromStores2, count: stateFromStoresArray2.length - 1 };
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
    obj3 = { guildName: stateFromStores1, count: stateFromStoresArray1.length - 1 };
    formatResult3 = intl2.format(tmp3(tmp4[13]).t["3Pm7uY"], obj3);
    str = "text-muted";
    tmp14 = formatResult3;
  }
  const obj7 = folder(memo[10]);
}
const View = fn(17).View;
const NOOP = fn(1074).NOOP;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4560);
let closure_13 = createStyles.createStyles({
  title: { flexDirection: "row", alignItems: "center", gap: 4 },
  titleText: { flexShrink: 1 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerFolderRow.tsx");

export default function HomeDrawerFolderExpandedChildren(folderId) {
  folderId = folderId.folderId;
  let obj = folderId(504);
  const items = [SortedGuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guildFolderById = null;
    if (null != folderId) {
      guildFolderById = SortedGuildStore.getGuildFolderById(tmp);
    }
    return guildFolderById;
  });
  const MobileHomeDrawerExperiment = folderId(4423).MobileHomeDrawerExperiment;
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = null;
    if (MobileHomeDrawerExperiment.useConfig({ location: "folder-expanded-children" }).enableHome) {
      tmp3 = null;
      if (!tmp2) {
        obj = { folder: stateFromStores, expanded: folderId.expanded };
        tmp3 = closure_11(Wrapper, obj);
      }
    }
  }
  return tmp3;
}
