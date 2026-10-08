// discord_app/modules/directory_channels/useCanManageGuildDirectoryEntry.tsx
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1085).Permissions;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useCanManageGuildDirectoryEntry(guildId) {
      _require = guildId;
      const cResult = require("c").c(16);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId.guildId) {
        class S {
          constructor() {
            return closure_3.getGuild(closure_0.guildId);
          }
        }
        cResult[1] = guildId.guildId;
        cResult[2] = S;
      } else {
        class S {
          constructor() {
            return closure_3.getGuild(closure_0.guildId);
          }
        }
      }
      const obj = require("c");
      stateFromStores = require("initialize").useStateFromStores(first, S);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return closure_3.getGuild(closure_0.guildId);
          }
        }
        const items1 = [stateFromStores1];
        cResult[3] = items1;
        const tmp8 = items1;
      } else {
        class S {
          constructor() {
            return closure_3.getGuild(closure_0.guildId);
          }
        }
      }
      if (cResult[4] !== guildId.channelId) {
        class S {
          constructor() {
            return closure_3.getGuild(closure_0.guildId);
          }
        }
        cResult[4] = guildId.channelId;
        cResult[5] = tmp10;
      } else {
        class S {
          constructor() {
            return closure_3.getGuild(closure_0.guildId);
          }
        }
      }
      const tmpResult = require("initialize");
      stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp10);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return closure_3.getGuild(closure_0.guildId);
          }
        }
        const items2 = [PermissionStore];
        cResult[6] = items2;
        const tmp12 = items2;
      } else {
        class S {
          constructor() {
            return closure_3.getGuild(closure_0.guildId);
          }
        }
      }
      if (cResult[7] !== stateFromStores) {
        class I {
          constructor() {
            return closure_4.can(Permissions.ADMINISTRATOR, closure_1);
          }
        }
        cResult[7] = stateFromStores;
        cResult[8] = I;
      } else {
        class I {
          constructor() {
            return closure_4.can(Permissions.ADMINISTRATOR, closure_1);
          }
        }
      }
      const tmpResult4 = require("initialize");
      const stateFromStores2 = require("initialize").useStateFromStores(tmp12, I);
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            return closure_4.can(Permissions.ADMINISTRATOR, closure_1);
          }
        }
        const items3 = [PermissionStore];
        cResult[9] = items3;
        const tmp15 = items3;
      } else {
        class I {
          constructor() {
            return closure_4.can(Permissions.ADMINISTRATOR, closure_1);
          }
        }
      }
      if (cResult[10] !== stateFromStores1) {
        class I {
          constructor() {
            return closure_4.can(Permissions.ADMINISTRATOR, closure_1);
          }
        }
        cResult[10] = stateFromStores1;
        cResult[11] = tmp17;
      } else {
        class I {
          constructor() {
            return closure_4.can(Permissions.ADMINISTRATOR, closure_1);
          }
        }
      }
      const tmpResult5 = require("initialize");
      const stateFromStores3 = require("initialize").useStateFromStores(tmp15, tmp17);
      if (!stateFromStores2) {
        class I {
          constructor() {
            return closure_4.can(Permissions.ADMINISTRATOR, closure_1);
          }
        }
      }
      if (!stateFromStores2) {
        class I {
          constructor() {
            return closure_4.can(Permissions.ADMINISTRATOR, closure_1);
          }
        }
      }
      if (cResult[12] === stateFromStores2) {
        class I {
          constructor() {
            return closure_4.can(Permissions.ADMINISTRATOR, closure_1);
          }
        }
      }
      cResult[12] = stateFromStores2;
      cResult[13] = stateFromStores2;
      cResult[14] = stateFromStores2;
      cResult[15] = { isEntryAdmin: stateFromStores2, canEdit: stateFromStores2, canRemove: stateFromStores2 };
      const obj2 = { isEntryAdmin: stateFromStores2, canEdit: stateFromStores2, canRemove: stateFromStores2 };
      const tmpResult6 = require("initialize");
    }
  : function useCanManageGuildDirectoryEntry(arg0) {
      _require = arg0;
      const items = [GuildStore];
      dependencyMap = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0.guildId));
      const obj = require("initialize");
      const items1 = [closure_2];
      closure_2 = require("initialize").useStateFromStores(items1, () => ChannelStore.getChannel(closure_0.channelId));
      const obj2 = require("initialize");
      const items2 = [PermissionStore];
      let stateFromStores = require("initialize").useStateFromStores(items2, () =>
        PermissionStore.can(Permissions.ADMINISTRATOR, closure_1),
      );
      const obj3 = require("initialize");
      const items3 = [PermissionStore];
      const stateFromStores1 = require("initialize").useStateFromStores(items3, () =>
        PermissionStore.can(Permissions.MANAGE_MESSAGES, closure_2),
      );
      const obj5 = { isEntryAdmin: stateFromStores, canEdit: null, canRemove: null };
      let tmp3 = stateFromStores;
      if (!stateFromStores) {
        tmp3 = stateFromStores1;
      }
      obj5.canEdit = tmp3;
      if (!stateFromStores) {
        stateFromStores = stateFromStores1;
      }
      obj5.canRemove = stateFromStores;
      return obj5;
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/useCanManageGuildDirectoryEntry.tsx");

export default tmp2;
export const useCanCreateOrAddGuildInDirectory = ReactCompilerGating.isReactCompilerEnabled()
  ? function useCanCreateOrAddGuildInDirectory(arg0) {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          return PermissionStore.can(Permissions.SEND_MESSAGES, closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      return require("initialize").useStateFromStores(first, tmp6);
    }
  : function useCanCreateOrAddGuildInDirectory(arg0) {
      _require = arg0;
      const items = [PermissionStore];
      return require("initialize").useStateFromStores(items, () =>
        PermissionStore.can(Permissions.SEND_MESSAGES, closure_0),
      );
    };
