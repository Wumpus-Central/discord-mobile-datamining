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
const View = fn(17).View;
const NOOP = fn(1085).NOOP;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4890);
let closure_13 = createStyles.createStyles({
  title: { flexDirection: "row", alignItems: "center", gap: 4 },
  titleText: { flexShrink: 1 },
});
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (folder) => {
      const cResult = length(stateFromStoresArray1[11]).c(42);
      length = folder.folder;
      const tmp4 = closure_13();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildReadStateStore, UserGuildSettingsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== length.guildIds) {
        const fn = function f() {
          const guildIds = length.guildIds;
          return guildIds.filter((item) => {
            const isMutedResult = muted.isMuted(item);
            let tmp2 = !isMutedResult;
            if (!isMutedResult) {
              tmp2 = mentionCount.getMentionCount(item) > 0;
            }
            return tmp2;
          });
        };
        cResult[1] = length.guildIds;
        cResult[2] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const obj = length(stateFromStoresArray1[11]);
      let stateFromStoresArray = length(stateFromStoresArray1[12]).useStateFromStoresArray(first, tmp8);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildStore];
        cResult[3] = items1;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== stateFromStoresArray[0]) {
        class F {
          constructor() {
            first = closure_1[0];
            tmp2 = undefined;
            if (null != first) {
              tmp3 = closure_6;
              guild = closure_6.getGuild(first);
              name = undefined;
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
            first = closure_1[0];
            tmp2 = undefined;
            if (null != first) {
              tmp3 = closure_6;
              guild = closure_6.getGuild(first);
              name = undefined;
              if (guild != null) {
                name = guild.name;
              }
              tmp2 = name;
            }
            return tmp2;
          }
        }
      }
      const tmpResult = length(stateFromStoresArray1[12]);
      const stateFromStores = length(stateFromStoresArray1[12]).useStateFromStores(tmp9, F);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            first = closure_1[0];
            tmp2 = undefined;
            if (null != first) {
              tmp3 = closure_6;
              guild = closure_6.getGuild(first);
              name = undefined;
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
        let tmp13 = items2;
      } else {
        class F {
          constructor() {
            first = closure_1[0];
            tmp2 = undefined;
            if (null != first) {
              tmp3 = closure_6;
              guild = closure_6.getGuild(first);
              name = undefined;
              if (guild != null) {
                name = guild.name;
              }
              tmp2 = name;
            }
            return tmp2;
          }
        }
      }
      if (cResult[7] !== length.guildIds) {
        class N {
          constructor() {
            guildIds = folder.guildIds;
            return guildIds.filter((item) => {
              const isMutedResult = muted.isMuted(item);
              let hasUnreadResult = !isMutedResult;
              if (!isMutedResult) {
                hasUnreadResult = closure_1_5.hasUnread(item);
              }
              return hasUnreadResult;
            });
          }
        }
        cResult[7] = length.guildIds;
        cResult[8] = N;
      } else {
        class N {
          constructor() {
            guildIds = folder.guildIds;
            return guildIds.filter((item) => {
              const isMutedResult = muted.isMuted(item);
              let hasUnreadResult = !isMutedResult;
              if (!isMutedResult) {
                hasUnreadResult = closure_1_5.hasUnread(item);
              }
              return hasUnreadResult;
            });
          }
        }
      }
      const tmpResult6 = length(stateFromStoresArray1[12]);
      stateFromStoresArray1 = length(stateFromStoresArray1[12]).useStateFromStoresArray(tmp13, N);
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor() {
            guildIds = folder.guildIds;
            return guildIds.filter((item) => {
              const isMutedResult = muted.isMuted(item);
              let hasUnreadResult = !isMutedResult;
              if (!isMutedResult) {
                hasUnreadResult = closure_1_5.hasUnread(item);
              }
              return hasUnreadResult;
            });
          }
        }
        const items3 = [GuildStore];
        cResult[9] = items3;
        const tmp16 = items3;
      } else {
        class N {
          constructor() {
            guildIds = folder.guildIds;
            return guildIds.filter((item) => {
              const isMutedResult = muted.isMuted(item);
              let hasUnreadResult = !isMutedResult;
              if (!isMutedResult) {
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
            first = closure_2[0];
            tmp2 = undefined;
            if (null != first) {
              tmp3 = closure_6;
              guild = closure_6.getGuild(first);
              name = undefined;
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
            first = closure_2[0];
            tmp2 = undefined;
            if (null != first) {
              tmp3 = closure_6;
              guild = closure_6.getGuild(first);
              name = undefined;
              if (guild != null) {
                name = guild.name;
              }
              tmp2 = name;
            }
            return tmp2;
          }
        }
      }
      const tmpResult7 = length(stateFromStoresArray1[12]);
      const stateFromStores1 = length(stateFromStoresArray1[12]).useStateFromStores(tmp16, T);
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            first = closure_2[0];
            tmp2 = undefined;
            if (null != first) {
              tmp3 = closure_6;
              guild = closure_6.getGuild(first);
              name = undefined;
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
        const tmp19 = items4;
      } else {
        class T {
          constructor() {
            first = closure_2[0];
            tmp2 = undefined;
            if (null != first) {
              tmp3 = closure_6;
              guild = closure_6.getGuild(first);
              name = undefined;
              if (guild != null) {
                name = guild.name;
              }
              tmp2 = name;
            }
            return tmp2;
          }
        }
      }
      if (cResult[13] !== length.guildIds) {
        class O {
          constructor() {
            guildIds = folder.guildIds;
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
          }
        }
        cResult[13] = length.guildIds;
        cResult[14] = O;
      } else {
        class O {
          constructor() {
            guildIds = folder.guildIds;
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
          }
        }
      }
      const tmpResult8 = length(stateFromStoresArray1[12]);
      let stateFromStoresArray2 = length(stateFromStoresArray1[12]).useStateFromStoresArray(tmp19, O);
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class O {
          constructor() {
            guildIds = folder.guildIds;
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
          }
        }
        const items5 = [GuildStore];
        cResult[15] = items5;
        const tmp23 = items5;
      } else {
        class O {
          constructor() {
            guildIds = folder.guildIds;
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
          }
        }
      }
      if (cResult[16] !== stateFromStoresArray2[0]) {
        class O {
          constructor() {
            guildIds = folder.guildIds;
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
          }
        }
        cResult[16] = stateFromStoresArray2[0];
        cResult[17] = tmp25;
      } else {
        class O {
          constructor() {
            guildIds = folder.guildIds;
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
          }
        }
      }
      const tmpResult9 = length(stateFromStoresArray1[12]);
      const stateFromStores2 = length(stateFromStoresArray1[12]).useStateFromStores(tmp23, tmp25);
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        class O {
          constructor() {
            guildIds = folder.guildIds;
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
          }
        }
        const tmp29 = closure_11(NOOP, { size: "xs" });
        cResult[18] = tmp29;
        const tmp28 = tmp29;
      } else {
        class O {
          constructor() {
            guildIds = folder.guildIds;
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
          }
        }
      }
      if (cResult[19] !== length.folderName) {
        class O {
          constructor() {
            guildIds = folder.guildIds;
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
          }
        }
        if (stringResult == null) {
          class O {
            constructor() {
              guildIds = folder.guildIds;
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
            }
          }
          stringResult = obj8.string(tmp(tmp2[14]).t["JQ/1n3"]);
        }
        cResult[19] = length.folderName;
        cResult[20] = stringResult;
      } else {
        class O {
          constructor() {
            guildIds = folder.guildIds;
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
          }
        }
      }
      if (cResult[21] === tmp4.titleText) {
        class O {
          constructor() {
            guildIds = folder.guildIds;
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
          }
        }
        if (cResult[24] === tmp4.title) {
          class O {
            constructor() {
              guildIds = folder.guildIds;
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
            }
          }
          if (cResult[27] === stateFromStoresArray2.length) {
            class O {
              constructor() {
                guildIds = folder.guildIds;
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
              }
            }
          }
          const intl = tmp(tmp2[14]).intl;
          const obj2 = { num: length.guildIds.length };
          if (stateFromStoresArray.length > 0) {
            class O {
              constructor() {
                guildIds = folder.guildIds;
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
              }
            }
            if (null != stateFromStores) {
              class O {
                constructor() {
                  guildIds = folder.guildIds;
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
                }
              }
              const obj3 = { guildName: stateFromStores, count: stateFromStoresArray.length - 1 };
              let formatResult1 = obj15.format(tmp(tmp2[14]).t.UoFb3H, obj3);
              let str2 = "text-muted";
              stateFromStoresArray2 = stateFromStoresArray2.length;
              cResult[27] = stateFromStoresArray2;
              cResult[28] = stateFromStores2;
              cResult[29] = stateFromStores;
              cResult[30] = stateFromStores1;
              length = length.guildIds.length;
              cResult[31] = length;
              stateFromStoresArray = stateFromStoresArray.length;
              cResult[32] = stateFromStoresArray;
              stateFromStoresArray1 = stateFromStoresArray1.length;
              cResult[33] = stateFromStoresArray1;
              cResult[34] = str2;
              cResult[35] = formatResult1;
            }
            const intl2 = tmp(tmp2[14]).intl;
            const obj4 = { guildName: stateFromStores2, count: stateFromStoresArray2.length - 1 };
            formatResult1 = intl2.format(tmp(tmp2[14]).t["0CRdJQ"], obj4);
            str2 = "text-voice-connected";
          }
          if (stateFromStoresArray2.length <= 0) {
            class O {
              constructor() {
                guildIds = folder.guildIds;
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
              }
            }
            if (tmp40) {
              class O {
                constructor() {
                  guildIds = folder.guildIds;
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
                }
              }
            }
            formatResult1 = formatResult;
            str2 = "text-muted";
            if (tmp40) {
              class O {
                constructor() {
                  guildIds = folder.guildIds;
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
                }
              }
              const obj5 = { guildName: stateFromStores1, count: stateFromStoresArray1.length - 1 };
              formatResult1 = obj12.format(tmp(tmp2[14]).t["3Pm7uY"], obj5);
              str2 = "text-muted";
            }
          } else {
            class O {
              constructor() {
                guildIds = folder.guildIds;
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
              }
            }
          }
          formatResult = intl.format(tmp(tmp2[14]).t.knOfkb, obj2);
        }
        const obj6 = { style: tmp4.title, children: null };
        const items6 = [tmp28, tmp33];
        obj6.children = items6;
        const tmp38 = closure_12(View, obj6);
        cResult[24] = tmp4.title;
        cResult[25] = tmp33;
        cResult[26] = tmp38;
      }
      const tmp34 = closure_11(length(stateFromStoresArray1[15]).Text, {
        variant: "text-md/medium",
        style: tmp4.titleText,
        lineClamp: 1,
        color: "text-default",
        children: tmp30,
      });
      cResult[21] = tmp4.titleText;
      cResult[22] = tmp30;
      cResult[23] = tmp34;
      const obj7 = {
        variant: "text-md/medium",
        style: tmp4.titleText,
        lineClamp: 1,
        color: "text-default",
        children: tmp30,
      };
      const tmpResult10 = length(stateFromStoresArray1[12]);
    }
  : (folder) => {
      folder = folder.folder;
      let stateFromStoresArray;
      let stateFromStoresArray2;
      let formatResult3;
      const tmp = closure_13();
      closure_1 = tmp;
      const memo = stateFromStoresArray.useMemo(() => ({ isMuted: false }), []);
      let items = [stateFromStoresArray2, UserGuildSettingsStore];
      stateFromStoresArray = folder(memo[12]).useStateFromStoresArray(items, () => {
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
      let obj = stateFromStoresArray;
      let obj2 = folder(memo[12]);
      const items1 = [formatResult3];
      const stateFromStores = folder(memo[12]).useStateFromStores(items1, () => {
        const first = stateFromStoresArray[0];
        let tmp2;
        if (null != first) {
          guild = GuildStore.getGuild(first);
          let name;
          if (guild != null) {
            name = guild.name;
          }
          tmp2 = name;
        }
        return tmp2;
      });
      const obj3 = folder(memo[12]);
      const items2 = [stateFromStoresArray2, UserGuildSettingsStore];
      const stateFromStoresArray1 = folder(memo[12]).useStateFromStoresArray(items2, () => {
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
      const obj4 = folder(memo[12]);
      const items3 = [formatResult3];
      const stateFromStores1 = folder(memo[12]).useStateFromStores(items3, () => {
        const first = stateFromStoresArray1[0];
        let tmp2;
        if (null != first) {
          guild = GuildStore.getGuild(first);
          let name;
          if (guild != null) {
            name = guild.name;
          }
          tmp2 = name;
        }
        return tmp2;
      });
      const obj5 = folder(memo[12]);
      const items4 = [VoiceStateStore, formatResult3, UserGuildSettingsStore];
      stateFromStoresArray2 = folder(memo[12]).useStateFromStoresArray(items4, () => {
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
      const obj6 = folder(memo[12]);
      const items5 = [formatResult3];
      const stateFromStores2 = folder(memo[12]).useStateFromStores(items5, () => {
        const first = stateFromStoresArray2[0];
        let tmp2;
        if (null != first) {
          guild = GuildStore.getGuild(first);
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
        const obj = { style: closure_1.title, children: null };
        const items = [closure_2_11(BellSlashIcon, { size: "xs" })];
        const obj2 = {
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
        obj2.children = folderName;
        items[1] = closure_2_11(Text_Text.Text, obj2);
        obj.children = items;
        return __initData(View, obj);
      }, items6);
      let intl = folder(memo[14]).intl;
      const formatResult = intl.format(folder(memo[14]).t.knOfkb, { num: folder.guildIds.length });
      formatResult3 = formatResult;
      c7 = "text-muted";
      if (stateFromStoresArray.length > 0) {
        if (null != stateFromStores) {
          const intl4 = tmp3(tmp4[14]).intl;
          const obj9 = { guildName: stateFromStores, count: stateFromStoresArray.length - 1 };
          const formatResult1 = intl4.format(tmp3(tmp4[14]).t.UoFb3H, obj9);
          formatResult3 = formatResult1;
          let str = "text-muted";
          let tmp14 = formatResult1;
        }
        const items7 = [tmp14, str];
        const memo2 = obj.useMemo(
          () =>
            closure_2_11(Text_Text.Text, { variant: "text-xs/medium", color, lineClamp: 1, children: formatResult3 }),
          items7,
        );
        const obj10 = { title: memo1, subtitle: null };
        let tmp20;
        if (!folder.expanded) {
          tmp20 = memo2;
        }
        obj10.subtitle = tmp20;
        return closure_11(tmp3(tmp4[16]).HomeDrawerSharedItem, obj10);
      }
      if (stateFromStoresArray2.length > 0) {
        if (null != stateFromStores2) {
          const intl3 = tmp3(tmp4[14]).intl;
          const obj11 = { guildName: stateFromStores2, count: stateFromStoresArray2.length - 1 };
          const formatResult2 = intl3.format(tmp3(tmp4[14]).t["0CRdJQ"], obj11);
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
        const intl2 = tmp3(tmp4[14]).intl;
        const obj12 = { guildName: stateFromStores1, count: stateFromStoresArray1.length - 1 };
        formatResult3 = intl2.format(tmp3(tmp4[14]).t["3Pm7uY"], obj12);
        str = "text-muted";
        tmp14 = formatResult3;
      }
      const obj7 = folder(memo[12]);
      const obj8 = { num: folder.guildIds.length };
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerFolderRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (folderId) => {
      const cResult = folderId(576).c(7);
      folderId = folderId.folderId;
      const expanded = folderId.expanded;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SortedGuildStore];
        cResult[0] = items;
        let first = items;
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
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = folderId(576);
      const stateFromStores = folderId(504).useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "folder-expanded-children" };
        cResult[3] = obj2;
        let tmp8 = obj2;
      } else {
        tmp8 = cResult[3];
      }
      const MobileHomeDrawerExperiment = tmp(4742).MobileHomeDrawerExperiment;
      let tmp10 = null;
      if (null != stateFromStores) {
        tmp10 = null;
        if (MobileHomeDrawerExperiment.useConfig(tmp8).enableHome) {
          tmp10 = null;
          if (!tmp9) {
            if (cResult[4] === expanded) {
            }
            const obj3 = { folder: stateFromStores, expanded };
            const tmp14 = closure_11(closure_14, obj3);
            cResult[4] = expanded;
            cResult[5] = stateFromStores;
            cResult[6] = tmp14;
          }
        }
      }
      return tmp10;
    }
  : (folderId) => {
      folderId = folderId.folderId;
      const items = [SortedGuildStore];
      const stateFromStores = folderId(504).useStateFromStores(items, () => {
        let guildFolderById = null;
        if (null != folderId) {
          guildFolderById = SortedGuildStore.getGuildFolderById(tmp);
        }
        return guildFolderById;
      });
      const MobileHomeDrawerExperiment = folderId(4742).MobileHomeDrawerExperiment;
      let tmp3 = null;
      if (null != stateFromStores) {
        tmp3 = null;
        if (MobileHomeDrawerExperiment.useConfig({ location: "folder-expanded-children" }).enableHome) {
          tmp3 = null;
          if (!tmp2) {
            const obj2 = { folder: stateFromStores, expanded: folderId.expanded };
            tmp3 = closure_11(closure_14, obj2);
          }
        }
      }
      return tmp3;
    };
