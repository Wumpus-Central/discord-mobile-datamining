// === Module 16285: HomeDrawerFolderRow ===

// Module 16285 (HomeDrawerFolderRow)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import BellSlashIcon2 from "BellSlashIcon" /* 9826 */;
import react from "react" /* 19 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7134 */;
import GuildStore from "GuildStore" /* 2074 */;
import SortedGuildStore from "SortedGuildStore" /* 5623 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5077 */;
import VoiceStateStore from "VoiceStateStore" /* 4915 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let folder, folderId, set;

let closure_12;
let unpackModuleId;
const View = react_native.View;
const NOOP = Constants.NOOP;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles({ title: { flexDirection: "row", alignItems: "center", gap: 4 }, titleText: { flexShrink: 1 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((folder) => {
  let first;
  let items6;
  let stateFromStoresArray1;
  let stringResult;
  let tmp13;
  let tmp16;
  let tmp19;
  let tmp23;
  let tmp28;
  let tmp8;
  let tmp9;
  let tmp2 = stateFromStoresArray1;
  const obj = folder(stateFromStoresArray1[11]);
  const cResult = obj.c(42);
  folder = folder.folder;
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildReadStateStore, UserGuildSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== folder.guildIds) {
    const fn = function f() {
      let mentionCount;
      let muted;
      const guildIds = folder.guildIds;
      return guildIds.filter((item) => {
        let tmp2 = !muted.isMuted(item);
        muted.isMuted(item);
        if (tmp2) {
          tmp2 = mentionCount.getMentionCount(item) > 0;
        }
        return tmp2;
      });
    };
    cResult[1] = folder.guildIds;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = folder(tmp2[12]);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== stateFromStoresArray[0]) {
    class F {
      constructor() {
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
      }
    }
    cResult[4] = stateFromStoresArray[0];
    cResult[5] = F;
  } else {
    class F {
      constructor() {
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
      }
    }
  }
  const tmpResult6 = folder(tmp2[12]);
  const stateFromStores = tmpResult6.useStateFromStores(tmp9, F);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
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
      }
    }
    const items2 = [GuildReadStateStore, UserGuildSettingsStore];
    cResult[6] = items2;
    tmp13 = items2;
  } else {
    class F {
      constructor() {
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
      }
    }
  }
  if (cResult[7] !== folder.guildIds) {
    class N {
      constructor() {
        let muted;
        const guildIds = folder.guildIds;
        return guildIds.filter((item) => {
          let hasUnreadResult = !muted.isMuted(item);
          muted.isMuted(item);
          if (hasUnreadResult) {
            hasUnreadResult = closure_1_5.hasUnread(item);
          }
          return hasUnreadResult;
        });
      }
    }
    cResult[7] = folder.guildIds;
    cResult[8] = N;
  } else {
    class N {
      constructor() {
        let muted;
        const guildIds = folder.guildIds;
        return guildIds.filter((item) => {
          let hasUnreadResult = !muted.isMuted(item);
          muted.isMuted(item);
          if (hasUnreadResult) {
            hasUnreadResult = closure_1_5.hasUnread(item);
          }
          return hasUnreadResult;
        });
      }
    }
  }
  const tmpResult7 = folder(tmp2[12]);
  stateFromStoresArray1 = tmpResult7.useStateFromStoresArray(tmp13, N);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        let muted;
        const guildIds = folder.guildIds;
        return guildIds.filter((item) => {
          let hasUnreadResult = !muted.isMuted(item);
          muted.isMuted(item);
          if (hasUnreadResult) {
            hasUnreadResult = closure_1_5.hasUnread(item);
          }
          return hasUnreadResult;
        });
      }
    }
    const items3 = [GuildStore];
    cResult[9] = items3;
    tmp16 = items3;
  } else {
    class N {
      constructor() {
        let muted;
        const guildIds = folder.guildIds;
        return guildIds.filter((item) => {
          let hasUnreadResult = !muted.isMuted(item);
          muted.isMuted(item);
          if (hasUnreadResult) {
            hasUnreadResult = closure_1_5.hasUnread(item);
          }
          return hasUnreadResult;
        });
      }
    }
  }
  if (cResult[10] !== stateFromStoresArray1[0]) {
    class T {
      constructor() {
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
      }
    }
    cResult[10] = stateFromStoresArray1[0];
    cResult[11] = T;
  } else {
    class T {
      constructor() {
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
      }
    }
  }
  const tmpResult8 = folder(tmp2[12]);
  const stateFromStores1 = tmpResult8.useStateFromStores(tmp16, T);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
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
      }
    }
    const items4 = [VoiceStateStore, GuildStore, UserGuildSettingsStore];
    cResult[12] = items4;
    tmp19 = items4;
  } else {
    class T {
      constructor() {
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
      }
    }
  }
  if (cResult[13] !== folder.guildIds) {
    class O {
      constructor() {
        guildIds = folder.guildIds;
        return guildIds.filter(function(item) {
          let closure_0 = item;
          if (closure_8.isMuted(item)) {
            return false;
          } else {
            let afkChannelId;
            guild = guild.getGuild(item);
            let tmp3 = null;
            if (guild != null) {
              afkChannelId = guild.afkChannelId;
            }
            const _Set = Set;
            const self2 = this;
            const self = this;
            set = new Set();
            const _Object = Object;
            const values = Object.values(voiceStates.getVoiceStates(item));
            const tmp5 = set;
            for (const item10027 of values) {
              let tmp11 = null != item10027.channelId && item10027.channelId !== afkChannelId;
              if (tmp11) {
                let addResult = set.add(item10027.channelId);
              }
              continue;
            }
            const items = [];
            HermesBuiltin.arraySpread(items, tmp5, 0);
            return items.some((item) => {
              const isCategoryMutedResult = closure_2_8.isCategoryMuted(closure_0, item);
              const tmp3 = !isCategoryMutedResult && !closure_2_8.isChannelMuted(closure_0, item);
              return tmp3;
            });
          }
        });
      }
    }
    cResult[13] = folder.guildIds;
    cResult[14] = O;
  } else {
    class O {
      constructor() {
        guildIds = folder.guildIds;
        return guildIds.filter(function(item) {
          let closure_0 = item;
          if (closure_8.isMuted(item)) {
            return false;
          } else {
            let afkChannelId;
            guild = guild.getGuild(item);
            let tmp3 = null;
            if (guild != null) {
              afkChannelId = guild.afkChannelId;
            }
            const _Set = Set;
            const self2 = this;
            const self = this;
            set = new Set();
            const _Object = Object;
            const values = Object.values(voiceStates.getVoiceStates(item));
            const tmp5 = set;
            for (const item10027 of values) {
              let tmp11 = null != item10027.channelId && item10027.channelId !== afkChannelId;
              if (tmp11) {
                let addResult = set.add(item10027.channelId);
              }
              continue;
            }
            const items = [];
            HermesBuiltin.arraySpread(items, tmp5, 0);
            return items.some((item) => {
              const isCategoryMutedResult = closure_2_8.isCategoryMuted(closure_0, item);
              const tmp3 = !isCategoryMutedResult && !closure_2_8.isChannelMuted(closure_0, item);
              return tmp3;
            });
          }
        });
      }
    }
  }
  const tmpResult9 = folder(tmp2[12]);
  const stateFromStoresArray2 = tmpResult9.useStateFromStoresArray(tmp19, O);
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        guildIds = folder.guildIds;
        return guildIds.filter(function(item) {
          let closure_0 = item;
          if (closure_8.isMuted(item)) {
            return false;
          } else {
            let afkChannelId;
            guild = guild.getGuild(item);
            let tmp3 = null;
            if (guild != null) {
              afkChannelId = guild.afkChannelId;
            }
            const _Set = Set;
            const self2 = this;
            const self = this;
            set = new Set();
            const _Object = Object;
            const values = Object.values(voiceStates.getVoiceStates(item));
            const tmp5 = set;
            for (const item10027 of values) {
              let tmp11 = null != item10027.channelId && item10027.channelId !== afkChannelId;
              if (tmp11) {
                let addResult = set.add(item10027.channelId);
              }
              continue;
            }
            const items = [];
            HermesBuiltin.arraySpread(items, tmp5, 0);
            return items.some((item) => {
              const isCategoryMutedResult = closure_2_8.isCategoryMuted(closure_0, item);
              const tmp3 = !isCategoryMutedResult && !closure_2_8.isChannelMuted(closure_0, item);
              return tmp3;
            });
          }
        });
      }
    }
    const items5 = [GuildStore];
    cResult[15] = items5;
    tmp23 = items5;
  } else {
    class O {
      constructor() {
        guildIds = folder.guildIds;
        return guildIds.filter(function(item) {
          let closure_0 = item;
          if (closure_8.isMuted(item)) {
            return false;
          } else {
            let afkChannelId;
            guild = guild.getGuild(item);
            let tmp3 = null;
            if (guild != null) {
              afkChannelId = guild.afkChannelId;
            }
            const _Set = Set;
            const self2 = this;
            const self = this;
            set = new Set();
            const _Object = Object;
            const values = Object.values(voiceStates.getVoiceStates(item));
            const tmp5 = set;
            for (const item10027 of values) {
              let tmp11 = null != item10027.channelId && item10027.channelId !== afkChannelId;
              if (tmp11) {
                let addResult = set.add(item10027.channelId);
              }
              continue;
            }
            const items = [];
            HermesBuiltin.arraySpread(items, tmp5, 0);
            return items.some((item) => {
              const isCategoryMutedResult = closure_2_8.isCategoryMuted(closure_0, item);
              const tmp3 = !isCategoryMutedResult && !closure_2_8.isChannelMuted(closure_0, item);
              return tmp3;
            });
          }
        });
      }
    }
  }
  if (cResult[16] !== stateFromStoresArray2[0]) {
    class O {
      constructor() {
        guildIds = folder.guildIds;
        return guildIds.filter(function(item) {
          let closure_0 = item;
          if (closure_8.isMuted(item)) {
            return false;
          } else {
            let afkChannelId;
            guild = guild.getGuild(item);
            let tmp3 = null;
            if (guild != null) {
              afkChannelId = guild.afkChannelId;
            }
            const _Set = Set;
            const self2 = this;
            const self = this;
            set = new Set();
            const _Object = Object;
            const values = Object.values(voiceStates.getVoiceStates(item));
            const tmp5 = set;
            for (const item10027 of values) {
              let tmp11 = null != item10027.channelId && item10027.channelId !== afkChannelId;
              if (tmp11) {
                let addResult = set.add(item10027.channelId);
              }
              continue;
            }
            const items = [];
            HermesBuiltin.arraySpread(items, tmp5, 0);
            return items.some((item) => {
              const isCategoryMutedResult = closure_2_8.isCategoryMuted(closure_0, item);
              const tmp3 = !isCategoryMutedResult && !closure_2_8.isChannelMuted(closure_0, item);
              return tmp3;
            });
          }
        });
      }
    }
    cResult[16] = stateFromStoresArray2[0];
    cResult[17] = tmp25;
  } else {
    class O {
      constructor() {
        guildIds = folder.guildIds;
        return guildIds.filter(function(item) {
          let closure_0 = item;
          if (closure_8.isMuted(item)) {
            return false;
          } else {
            let afkChannelId;
            guild = guild.getGuild(item);
            let tmp3 = null;
            if (guild != null) {
              afkChannelId = guild.afkChannelId;
            }
            const _Set = Set;
            const self2 = this;
            const self = this;
            set = new Set();
            const _Object = Object;
            const values = Object.values(voiceStates.getVoiceStates(item));
            const tmp5 = set;
            for (const item10027 of values) {
              let tmp11 = null != item10027.channelId && item10027.channelId !== afkChannelId;
              if (tmp11) {
                let addResult = set.add(item10027.channelId);
              }
              continue;
            }
            const items = [];
            HermesBuiltin.arraySpread(items, tmp5, 0);
            return items.some((item) => {
              const isCategoryMutedResult = closure_2_8.isCategoryMuted(closure_0, item);
              const tmp3 = !isCategoryMutedResult && !closure_2_8.isChannelMuted(closure_0, item);
              return tmp3;
            });
          }
        });
      }
    }
  }
  const tmpResult10 = folder(tmp2[12]);
  const stateFromStores2 = tmpResult10.useStateFromStores(tmp23, tmp25);
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        guildIds = folder.guildIds;
        return guildIds.filter(function(item) {
          let closure_0 = item;
          if (closure_8.isMuted(item)) {
            return false;
          } else {
            let afkChannelId;
            guild = guild.getGuild(item);
            let tmp3 = null;
            if (guild != null) {
              afkChannelId = guild.afkChannelId;
            }
            const _Set = Set;
            const self2 = this;
            const self = this;
            set = new Set();
            const _Object = Object;
            const values = Object.values(voiceStates.getVoiceStates(item));
            const tmp5 = set;
            for (const item10027 of values) {
              let tmp11 = null != item10027.channelId && item10027.channelId !== afkChannelId;
              if (tmp11) {
                let addResult = set.add(item10027.channelId);
              }
              continue;
            }
            const items = [];
            HermesBuiltin.arraySpread(items, tmp5, 0);
            return items.some((item) => {
              const isCategoryMutedResult = closure_2_8.isCategoryMuted(closure_0, item);
              const tmp3 = !isCategoryMutedResult && !closure_2_8.isChannelMuted(closure_0, item);
              return tmp3;
            });
          }
        });
      }
    }
    const tmp29 = closure_11(NOOP, { size: "xs" });
    cResult[18] = tmp29;
    tmp28 = tmp29;
  } else {
    class O {
      constructor() {
        guildIds = folder.guildIds;
        return guildIds.filter(function(item) {
          let closure_0 = item;
          if (closure_8.isMuted(item)) {
            return false;
          } else {
            let afkChannelId;
            guild = guild.getGuild(item);
            let tmp3 = null;
            if (guild != null) {
              afkChannelId = guild.afkChannelId;
            }
            const _Set = Set;
            const self2 = this;
            const self = this;
            set = new Set();
            const _Object = Object;
            const values = Object.values(voiceStates.getVoiceStates(item));
            const tmp5 = set;
            for (const item10027 of values) {
              let tmp11 = null != item10027.channelId && item10027.channelId !== afkChannelId;
              if (tmp11) {
                let addResult = set.add(item10027.channelId);
              }
              continue;
            }
            const items = [];
            HermesBuiltin.arraySpread(items, tmp5, 0);
            return items.some((item) => {
              const isCategoryMutedResult = closure_2_8.isCategoryMuted(closure_0, item);
              const tmp3 = !isCategoryMutedResult && !closure_2_8.isChannelMuted(closure_0, item);
              return tmp3;
            });
          }
        });
      }
    }
  }
  if (cResult[19] !== folder.folderName) {
    class O {
      constructor() {
        guildIds = folder.guildIds;
        return guildIds.filter(function(item) {
          let closure_0 = item;
          if (closure_8.isMuted(item)) {
            return false;
          } else {
            let afkChannelId;
            guild = guild.getGuild(item);
            let tmp3 = null;
            if (guild != null) {
              afkChannelId = guild.afkChannelId;
            }
            const _Set = Set;
            const self2 = this;
            const self = this;
            set = new Set();
            const _Object = Object;
            const values = Object.values(voiceStates.getVoiceStates(item));
            const tmp5 = set;
            for (const item10027 of values) {
              let tmp11 = null != item10027.channelId && item10027.channelId !== afkChannelId;
              if (tmp11) {
                let addResult = set.add(item10027.channelId);
              }
              continue;
            }
            const items = [];
            HermesBuiltin.arraySpread(items, tmp5, 0);
            return items.some((item) => {
              const isCategoryMutedResult = closure_2_8.isCategoryMuted(closure_0, item);
              const tmp3 = !isCategoryMutedResult && !closure_2_8.isChannelMuted(closure_0, item);
              return tmp3;
            });
          }
        });
      }
    }
    if (stringResult == null) {
      class O {
        constructor() {
          guildIds = folder.guildIds;
          return guildIds.filter(function(item) {
            let closure_0 = item;
            if (closure_8.isMuted(item)) {
              return false;
            } else {
              let afkChannelId;
              guild = guild.getGuild(item);
              let tmp3 = null;
              if (guild != null) {
                afkChannelId = guild.afkChannelId;
              }
              const _Set = Set;
              const self2 = this;
              const self = this;
              set = new Set();
              const _Object = Object;
              const values = Object.values(voiceStates.getVoiceStates(item));
              const tmp5 = set;
              for (const item10027 of values) {
                let tmp11 = null != item10027.channelId && item10027.channelId !== afkChannelId;
                if (tmp11) {
                  let addResult = set.add(item10027.channelId);
                }
                continue;
              }
              const items = [];
              HermesBuiltin.arraySpread(items, tmp5, 0);
              return items.some((item) => {
                const isCategoryMutedResult = closure_2_8.isCategoryMuted(closure_0, item);
                const tmp3 = !isCategoryMutedResult && !closure_2_8.isChannelMuted(closure_0, item);
                return tmp3;
              });
            }
          });
        }
      }
      stringResult = obj8.string(folder(tmp2[14]).t["JQ/1n3"]);
    }
    cResult[19] = folder.folderName;
    cResult[20] = stringResult;
  } else {
    class O {
      constructor() {
        guildIds = folder.guildIds;
        return guildIds.filter(function(item) {
          let closure_0 = item;
          if (closure_8.isMuted(item)) {
            return false;
          } else {
            let afkChannelId;
            guild = guild.getGuild(item);
            let tmp3 = null;
            if (guild != null) {
              afkChannelId = guild.afkChannelId;
            }
            const _Set = Set;
            const self2 = this;
            const self = this;
            set = new Set();
            const _Object = Object;
            const values = Object.values(voiceStates.getVoiceStates(item));
            const tmp5 = set;
            for (const item10027 of values) {
              let tmp11 = null != item10027.channelId && item10027.channelId !== afkChannelId;
              if (tmp11) {
                let addResult = set.add(item10027.channelId);
              }
              continue;
            }
            const items = [];
            HermesBuiltin.arraySpread(items, tmp5, 0);
            return items.some((item) => {
              const isCategoryMutedResult = closure_2_8.isCategoryMuted(closure_0, item);
              const tmp3 = !isCategoryMutedResult && !closure_2_8.isChannelMuted(closure_0, item);
              return tmp3;
            });
          }
        });
      }
    }
  }
  if (cResult[21] === tmp4.titleText) {
    class O {
      constructor() {
        guildIds = folder.guildIds;
        return guildIds.filter(function(item) {
          let closure_0 = item;
          if (closure_8.isMuted(item)) {
            return false;
          } else {
            let afkChannelId;
            guild = guild.getGuild(item);
            let tmp3 = null;
            if (guild != null) {
              afkChannelId = guild.afkChannelId;
            }
            const _Set = Set;
            const self2 = this;
            const self = this;
            set = new Set();
            const _Object = Object;
            const values = Object.values(voiceStates.getVoiceStates(item));
            const tmp5 = set;
            for (const item10027 of values) {
              let tmp11 = null != item10027.channelId && item10027.channelId !== afkChannelId;
              if (tmp11) {
                let addResult = set.add(item10027.channelId);
              }
              continue;
            }
            const items = [];
            HermesBuiltin.arraySpread(items, tmp5, 0);
            return items.some((item) => {
              const isCategoryMutedResult = closure_2_8.isCategoryMuted(closure_0, item);
              const tmp3 = !isCategoryMutedResult && !closure_2_8.isChannelMuted(closure_0, item);
              return tmp3;
            });
          }
        });
      }
    }
    if (cResult[24] === tmp4.title) {
      let formatResult1;
      let str2;
      class O {
        constructor() {
          guildIds = folder.guildIds;
          return guildIds.filter(function(item) {
            let closure_0 = item;
            if (closure_8.isMuted(item)) {
              return false;
            } else {
              let afkChannelId;
              guild = guild.getGuild(item);
              let tmp3 = null;
              if (guild != null) {
                afkChannelId = guild.afkChannelId;
              }
              const _Set = Set;
              const self2 = this;
              const self = this;
              set = new Set();
              const _Object = Object;
              const values = Object.values(voiceStates.getVoiceStates(item));
              const tmp5 = set;
              for (const item10027 of values) {
                let tmp11 = null != item10027.channelId && item10027.channelId !== afkChannelId;
                if (tmp11) {
                  let addResult = set.add(item10027.channelId);
                }
                continue;
              }
              const items = [];
              HermesBuiltin.arraySpread(items, tmp5, 0);
              return items.some((item) => {
                const isCategoryMutedResult = closure_2_8.isCategoryMuted(closure_0, item);
                const tmp3 = !isCategoryMutedResult && !closure_2_8.isChannelMuted(closure_0, item);
                return tmp3;
              });
            }
          });
        }
      }
      if (cResult[27] === stateFromStoresArray2.length) {
        class O {
          constructor() {
            guildIds = folder.guildIds;
            return guildIds.filter(function(item) {
              let closure_0 = item;
              if (closure_8.isMuted(item)) {
                return false;
              } else {
                let afkChannelId;
                guild = guild.getGuild(item);
                let tmp3 = null;
                if (guild != null) {
                  afkChannelId = guild.afkChannelId;
                }
                const _Set = Set;
                const self2 = this;
                const self = this;
                set = new Set();
                const _Object = Object;
                const values = Object.values(voiceStates.getVoiceStates(item));
                const tmp5 = set;
                for (const item10027 of values) {
                  let tmp11 = null != item10027.channelId && item10027.channelId !== afkChannelId;
                  if (tmp11) {
                    let addResult = set.add(item10027.channelId);
                  }
                  continue;
                }
                const items = [];
                HermesBuiltin.arraySpread(items, tmp5, 0);
                return items.some((item) => {
                  const isCategoryMutedResult = closure_2_8.isCategoryMuted(closure_0, item);
                  const tmp3 = !isCategoryMutedResult && !closure_2_8.isChannelMuted(closure_0, item);
                  return tmp3;
                });
              }
            });
          }
        }
      }
      const intl = tmp(tmp2[14]).intl;
      const obj2 = { num: folder.guildIds.length };
      const formatResult = intl.format(folder(tmp2[14]).t.knOfkb, obj2);
      if (stateFromStoresArray.length > 0) {
        class O {
          constructor() {
            guildIds = folder.guildIds;
            return guildIds.filter(function(item) {
              let closure_0 = item;
              if (closure_8.isMuted(item)) {
                return false;
              } else {
                let afkChannelId;
                guild = guild.getGuild(item);
                let tmp3 = null;
                if (guild != null) {
                  afkChannelId = guild.afkChannelId;
                }
                const _Set = Set;
                const self2 = this;
                const self = this;
                set = new Set();
                const _Object = Object;
                const values = Object.values(voiceStates.getVoiceStates(item));
                const tmp5 = set;
                for (const item10027 of values) {
                  let tmp11 = null != item10027.channelId && item10027.channelId !== afkChannelId;
                  if (tmp11) {
                    let addResult = set.add(item10027.channelId);
                  }
                  continue;
                }
                const items = [];
                HermesBuiltin.arraySpread(items, tmp5, 0);
                return items.some((item) => {
                  const isCategoryMutedResult = closure_2_8.isCategoryMuted(closure_0, item);
                  const tmp3 = !isCategoryMutedResult && !closure_2_8.isChannelMuted(closure_0, item);
                  return tmp3;
                });
              }
            });
          }
        }
        if (null != stateFromStores) {
          class O {
            constructor() {
              guildIds = folder.guildIds;
              return guildIds.filter(function(item) {
                let closure_0 = item;
                if (closure_8.isMuted(item)) {
                  return false;
                } else {
                  let afkChannelId;
                  guild = guild.getGuild(item);
                  let tmp3 = null;
                  if (guild != null) {
                    afkChannelId = guild.afkChannelId;
                  }
                  const _Set = Set;
                  const self2 = this;
                  const self = this;
                  set = new Set();
                  const _Object = Object;
                  const values = Object.values(voiceStates.getVoiceStates(item));
                  const tmp5 = set;
                  for (const item10027 of values) {
                    let tmp11 = null != item10027.channelId && item10027.channelId !== afkChannelId;
                    if (tmp11) {
                      let addResult = set.add(item10027.channelId);
                    }
                    continue;
                  }
                  const items = [];
                  HermesBuiltin.arraySpread(items, tmp5, 0);
                  return items.some((item) => {
                    const isCategoryMutedResult = closure_2_8.isCategoryMuted(closure_0, item);
                    const tmp3 = !isCategoryMutedResult && !closure_2_8.isChannelMuted(closure_0, item);
                    return tmp3;
                  });
                }
              });
            }
          }
          const obj3 = { guildName: stateFromStores, count: stateFromStoresArray.length - 1 };
          formatResult1 = obj16.format(tmp(tmp2[14]).t.UoFb3H, obj3);
          str2 = "text-muted";
        }
        cResult[27] = stateFromStoresArray2.length;
        cResult[28] = stateFromStores2;
        cResult[29] = stateFromStores;
        cResult[30] = stateFromStores1;
        cResult[31] = folder.guildIds.length;
        cResult[32] = stateFromStoresArray.length;
        cResult[33] = stateFromStoresArray1.length;
        cResult[34] = str2;
        cResult[35] = formatResult1;
      }
      if (stateFromStoresArray2.length > 0) {
        class O {
          constructor() {
            guildIds = folder.guildIds;
            return guildIds.filter(function(item) {
              let closure_0 = item;
              if (closure_8.isMuted(item)) {
                return false;
              } else {
                let afkChannelId;
                guild = guild.getGuild(item);
                let tmp3 = null;
                if (guild != null) {
                  afkChannelId = guild.afkChannelId;
                }
                const _Set = Set;
                const self2 = this;
                const self = this;
                set = new Set();
                const _Object = Object;
                const values = Object.values(voiceStates.getVoiceStates(item));
                const tmp5 = set;
                for (const item10027 of values) {
                  let tmp11 = null != item10027.channelId && item10027.channelId !== afkChannelId;
                  if (tmp11) {
                    let addResult = set.add(item10027.channelId);
                  }
                  continue;
                }
                const items = [];
                HermesBuiltin.arraySpread(items, tmp5, 0);
                return items.some((item) => {
                  const isCategoryMutedResult = closure_2_8.isCategoryMuted(closure_0, item);
                  const tmp3 = !isCategoryMutedResult && !closure_2_8.isChannelMuted(closure_0, item);
                  return tmp3;
                });
              }
            });
          }
        }
        if (null != stateFromStores2) {
          class O {
            constructor() {
              guildIds = folder.guildIds;
              return guildIds.filter(function(item) {
                let closure_0 = item;
                if (closure_8.isMuted(item)) {
                  return false;
                } else {
                  let afkChannelId;
                  guild = guild.getGuild(item);
                  let tmp3 = null;
                  if (guild != null) {
                    afkChannelId = guild.afkChannelId;
                  }
                  const _Set = Set;
                  const self2 = this;
                  const self = this;
                  set = new Set();
                  const _Object = Object;
                  const values = Object.values(voiceStates.getVoiceStates(item));
                  const tmp5 = set;
                  for (const item10027 of values) {
                    let tmp11 = null != item10027.channelId && item10027.channelId !== afkChannelId;
                    if (tmp11) {
                      let addResult = set.add(item10027.channelId);
                    }
                    continue;
                  }
                  const items = [];
                  HermesBuiltin.arraySpread(items, tmp5, 0);
                  return items.some((item) => {
                    const isCategoryMutedResult = closure_2_8.isCategoryMuted(closure_0, item);
                    const tmp3 = !isCategoryMutedResult && !closure_2_8.isChannelMuted(closure_0, item);
                    return tmp3;
                  });
                }
              });
            }
          }
          const obj4 = { guildName: stateFromStores2, count: stateFromStoresArray2.length - 1 };
          formatResult1 = obj14.format(tmp(tmp2[14]).t["0CRdJQ"], obj4);
          str2 = "text-voice-connected";
        }
      }
      let tmp42 = stateFromStoresArray1.length > 0;
      if (tmp42) {
        class O {
          constructor() {
            guildIds = folder.guildIds;
            return guildIds.filter(function(item) {
              let closure_0 = item;
              if (closure_8.isMuted(item)) {
                return false;
              } else {
                let afkChannelId;
                guild = guild.getGuild(item);
                let tmp3 = null;
                if (guild != null) {
                  afkChannelId = guild.afkChannelId;
                }
                const _Set = Set;
                const self2 = this;
                const self = this;
                set = new Set();
                const _Object = Object;
                const values = Object.values(voiceStates.getVoiceStates(item));
                const tmp5 = set;
                for (const item10027 of values) {
                  let tmp11 = null != item10027.channelId && item10027.channelId !== afkChannelId;
                  if (tmp11) {
                    let addResult = set.add(item10027.channelId);
                  }
                  continue;
                }
                const items = [];
                HermesBuiltin.arraySpread(items, tmp5, 0);
                return items.some((item) => {
                  const isCategoryMutedResult = closure_2_8.isCategoryMuted(closure_0, item);
                  const tmp3 = !isCategoryMutedResult && !closure_2_8.isChannelMuted(closure_0, item);
                  return tmp3;
                });
              }
            });
          }
        }
        tmp42 = null != stateFromStores1;
      }
      formatResult1 = formatResult;
      str2 = "text-muted";
      if (tmp42) {
        class O {
          constructor() {
            guildIds = folder.guildIds;
            return guildIds.filter(function(item) {
              let closure_0 = item;
              if (closure_8.isMuted(item)) {
                return false;
              } else {
                let afkChannelId;
                guild = guild.getGuild(item);
                let tmp3 = null;
                if (guild != null) {
                  afkChannelId = guild.afkChannelId;
                }
                const _Set = Set;
                const self2 = this;
                const self = this;
                set = new Set();
                const _Object = Object;
                const values = Object.values(voiceStates.getVoiceStates(item));
                const tmp5 = set;
                for (const item10027 of values) {
                  let tmp11 = null != item10027.channelId && item10027.channelId !== afkChannelId;
                  if (tmp11) {
                    let addResult = set.add(item10027.channelId);
                  }
                  continue;
                }
                const items = [];
                HermesBuiltin.arraySpread(items, tmp5, 0);
                return items.some((item) => {
                  const isCategoryMutedResult = closure_2_8.isCategoryMuted(closure_0, item);
                  const tmp3 = !isCategoryMutedResult && !closure_2_8.isChannelMuted(closure_0, item);
                  return tmp3;
                });
              }
            });
          }
        }
        const obj5 = { guildName: stateFromStores1, count: stateFromStoresArray1.length - 1 };
        formatResult1 = obj12.format(tmp(tmp2[14]).t["3Pm7uY"], obj5);
        str2 = "text-muted";
      }
    }
    const obj6 = { style: tmp4.title, children: items6 };
    items6 = [tmp28, tmp33];
    cResult[24] = tmp4.title;
    cResult[25] = tmp33;
    cResult[26] = closure_12(View, obj6);
    const tmp38 = closure_12(View, obj6);
  }
  const obj7 = { variant: "text-md/medium", style: tmp4.titleText, lineClamp: 1, color: "text-default", children: tmp30 };
  cResult[21] = tmp4.titleText;
  cResult[22] = tmp30;
  cResult[23] = closure_11(folder(tmp2[15]).Text, obj7);
  const tmp34 = closure_11(folder(tmp2[15]).Text, obj7);
}) : ((folder) => {
  let color;
  let str;
  let tmp14;
  let tmp20;
  folder = folder.folder;
  let stateFromStoresArray;
  let stateFromStoresArray2;
  let formatResult3;
  const expanded = folder.expanded;
  const tmp = closure_13();
  let closure_1 = tmp;
  let obj = stateFromStoresArray;
  const memo = stateFromStoresArray.useMemo(() => ({ isMuted: false }), []);
  let tmp3 = folder;
  let obj2 = folder(memo[12]);
  let items = [stateFromStoresArray2, UserGuildSettingsStore];
  stateFromStoresArray = obj2.useStateFromStoresArray(items, () => {
    let mentionCount;
    let muted;
    const guildIds = folder.guildIds;
    return guildIds.filter((item) => {
      let tmp2 = !muted.isMuted(item);
      muted.isMuted(item);
      if (tmp2) {
        tmp2 = mentionCount.getMentionCount(item) > 0;
      }
      return tmp2;
    });
  });
  const items1 = [formatResult3];
  const obj3 = folder(memo[12]);
  const stateFromStores = obj3.useStateFromStores(items1, () => {
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
  const items2 = [stateFromStoresArray2, UserGuildSettingsStore];
  const obj4 = folder(memo[12]);
  const stateFromStoresArray1 = obj4.useStateFromStoresArray(items2, () => {
    let muted;
    const guildIds = folder.guildIds;
    return guildIds.filter((item) => {
      let hasUnreadResult = !muted.isMuted(item);
      muted.isMuted(item);
      if (hasUnreadResult) {
        hasUnreadResult = stateFromStoresArray2.hasUnread(item);
      }
      return hasUnreadResult;
    });
  });
  const items3 = [formatResult3];
  const obj5 = folder(memo[12]);
  const stateFromStores1 = obj5.useStateFromStores(items3, () => {
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
  const items4 = [VoiceStateStore, formatResult3, UserGuildSettingsStore];
  const obj6 = folder(memo[12]);
  stateFromStoresArray2 = obj6.useStateFromStoresArray(items4, () => {
    let voiceStates;
    const guildIds = folder.guildIds;
    return guildIds.filter(function(item) {
      let closure_0 = item;
      if (closure_8.isMuted(item)) {
        return false;
      } else {
        let afkChannelId;
        guild = guild.getGuild(item);
        let tmp3 = null;
        if (guild != null) {
          afkChannelId = guild.afkChannelId;
        }
        const _Set = Set;
        const self2 = this;
        const self = this;
        set = new Set();
        const _Object = Object;
        const values = Object.values(voiceStates.getVoiceStates(item));
        const tmp5 = set;
        for (const item10027 of values) {
          let tmp11 = null != item10027.channelId && item10027.channelId !== afkChannelId;
          if (tmp11) {
            let addResult = set.add(item10027.channelId);
          }
          continue;
        }
        const items = [];
        HermesBuiltin.arraySpread(items, tmp5, 0);
        return items.some((item) => {
          const isCategoryMutedResult = closure_2_8.isCategoryMuted(closure_0, item);
          const tmp3 = !isCategoryMutedResult && !closure_2_8.isChannelMuted(closure_0, item);
          return tmp3;
        });
      }
    });
  });
  const items5 = [formatResult3];
  const obj7 = folder(memo[12]);
  const stateFromStores2 = obj7.useStateFromStores(items5, () => {
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
  const items6 = [folder.folderName, memo, , ];
  ({ title: arr10[2], titleText: arr10[3] } = tmp);
  const memo1 = stateFromStoresArray.useMemo(() => {
    let BellSlashIcon;
    let folderName;
    let items;
    if (memo.isMuted) {
      BellSlashIcon = BellSlashIcon2.BellSlashIcon;
    } else {
      BellSlashIcon = NOOP;
    }
    const obj = { style: closure_1.title, children: items };
    items = [unpackModuleId(BellSlashIcon, { size: "xs" }), ];
    const obj2 = { variant: "text-md/medium", style: closure_1.titleText, lineClamp: 1, color: "text-default", children: folderName };
    folderName = folder.folderName;
    const Text = Text_Text.Text;
    if (folderName == null) {
      const intl = intl5.intl;
      folderName = intl.string(intl5.t["JQ/1n3"]);
    }
    items[1] = unpackModuleId(Text, obj2);
    return closure_12(View, obj);
  }, items6);
  let intl = folder(memo[14]).intl;
  const obj8 = { num: folder.guildIds.length };
  const formatResult = intl.format(folder(memo[14]).t.knOfkb, obj8);
  formatResult3 = formatResult;
  let c7 = "text-muted";
  if (stateFromStoresArray.length > 0) {
    if (null != stateFromStores) {
      const intl4 = tmp3(tmp4[14]).intl;
      const obj9 = { guildName: stateFromStores, count: stateFromStoresArray.length - 1 };
      const formatResult1 = intl4.format(tmp3(memo[14]).t.UoFb3H, obj9);
      formatResult3 = formatResult1;
      str = "text-muted";
      tmp14 = formatResult1;
    }
    const items7 = [tmp14, str];
    const memo2 = obj.useMemo(() => {
      const obj = { variant: "text-xs/medium", color, lineClamp: 1, children: formatResult3 };
      return unpackModuleId(Text_Text.Text, obj);
    }, items7);
    const obj10 = { title: memo1, subtitle: tmp20 };
    tmp20 = undefined;
    const HomeDrawerSharedItem = tmp3(tmp4[16]).HomeDrawerSharedItem;
    if (!expanded) {
      tmp20 = memo2;
    }
    return closure_11(HomeDrawerSharedItem, obj10);
  }
  if (stateFromStoresArray2.length > 0) {
    let tmp11 = null;
    if (null != stateFromStores2) {
      const intl3 = tmp3(tmp4[14]).intl;
      const obj11 = { guildName: stateFromStores2, count: stateFromStoresArray2.length - 1 };
      const formatResult2 = intl3.format(tmp3(memo[14]).t["0CRdJQ"], obj11);
      formatResult3 = formatResult2;
      c7 = "text-voice-connected";
      str = "text-voice-connected";
      tmp14 = formatResult2;
    }
  }
  str = "text-muted";
  tmp14 = formatResult;
  const tmp12 = stateFromStoresArray1.length > 0 && null != stateFromStores1;
  if (tmp12) {
    const intl2 = tmp3(tmp4[14]).intl;
    const obj12 = { guildName: stateFromStores1, count: stateFromStoresArray1.length - 1 };
    formatResult3 = intl2.format(tmp3(tmp4[14]).t["3Pm7uY"], obj12);
    str = "text-muted";
    tmp14 = formatResult3;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((folderId) => {
  let first;
  let tmp6;
  let tmp8;
  const tmp = folderId;
  const obj = folderId(576);
  const cResult = obj.c(7);
  folderId = folderId.folderId;
  const expanded = folderId.expanded;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SortedGuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== folderId) {
    const fn = function n() {
      let guildFolderById = null;
      if (null != folderId) {
        guildFolderById = SortedGuildStore.getGuildFolderById(tmp);
      }
      return guildFolderById;
    };
    cResult[1] = folderId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "folder-expanded-children" };
    cResult[3] = obj2;
    tmp8 = obj2;
  } else {
    tmp8 = cResult[3];
  }
  const MobileHomeDrawerExperiment = tmp(4748).MobileHomeDrawerExperiment;
  const enableHome = MobileHomeDrawerExperiment.useConfig(tmp8).enableHome;
  let tmp10 = null;
  if (null != stateFromStores) {
    tmp10 = null;
    if (enableHome) {
      tmp10 = null;
      if (!tmp9) {
        if (cResult[4] === expanded) {
          let tmp11;
          if (cResult[5] === stateFromStores) {
            tmp11 = cResult[6];
          }
          tmp10 = tmp11;
        }
        const obj3 = { folder: stateFromStores, expanded };
        const tmp14 = closure_11(closure_14, obj3);
        cResult[4] = expanded;
        cResult[5] = stateFromStores;
        cResult[6] = tmp14;
        tmp11 = tmp14;
      }
    }
  }
  return tmp10;
}) : ((folderId) => {
  folderId = folderId.folderId;
  const expanded = folderId.expanded;
  const items = [SortedGuildStore];
  const obj = folderId(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guildFolderById = null;
    if (null != folderId) {
      guildFolderById = SortedGuildStore.getGuildFolderById(tmp);
    }
    return guildFolderById;
  });
  const MobileHomeDrawerExperiment = folderId(4748).MobileHomeDrawerExperiment;
  const enableHome = MobileHomeDrawerExperiment.useConfig({ location: "folder-expanded-children" }).enableHome;
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = null;
    if (enableHome) {
      tmp3 = null;
      if (!tmp2) {
        const obj2 = { folder: stateFromStores, expanded };
        tmp3 = closure_11(closure_14, obj2);
      }
    }
  }
  return tmp3;
});
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerFolderRow.tsx");

export default tmp3;