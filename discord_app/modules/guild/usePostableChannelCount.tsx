// discord_app/modules/guild/usePostableChannelCount.tsx
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = globalThis.__r;

const require = fn;
let closure_4 = fn(4513).GUILD_SELECTABLE_CHANNELS_KEY;
const Permissions = fn(1085).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild/usePostableChannelCount.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function u() {
          let items = GuildChannelStore.getChannels(closure_0)[closure_4];
          if (items == null) {
            items = [];
          }
          return items;
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
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
      if (0 === stateFromStores.length) {
        return 0;
      } else if (cResult[4] !== stateFromStores) {
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function h(channel) {
            return PermissionStore.can(
              BigFlagUtilsAll.combine(constants.SEND_MESSAGES, constants.VIEW_CHANNEL),
              channel.channel,
            );
          };
          cResult[6] = fn2;
          let tmp8 = fn2;
        } else {
          tmp8 = cResult[6];
        }
        const found = stateFromStores.filter(tmp8);
        cResult[4] = stateFromStores;
        cResult[5] = found;
      } else {
        return cResult[5].length;
      }
      const tmpResult = require("initialize");
    }
  : (arg0) => {
      _require = arg0;
      let items = [GuildChannelStore];
      const items1 = [arg0];
      const stateFromStores = require("initialize").useStateFromStores(
        items,
        () => {
          let items = GuildChannelStore.getChannels(closure_0)[closure_4];
          if (items == null) {
            items = [];
          }
          return items;
        },
        items1,
      );
      let num = 0;
      if (0 !== stateFromStores.length) {
        num = stateFromStores.filter((channel) =>
          PermissionStore.can(
            BigFlagUtilsAll.combine(constants.SEND_MESSAGES, constants.VIEW_CHANNEL),
            channel.channel,
          ),
        ).length;
      }
      return num;
    };
