// discord_app/modules/premium/powerups/native/hooks/usePowerupGroupConfig.tsx
import util from "../../../../../intl/index.native.tsx";
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import _modDef2525 from "../../GuildPowerups.messages.js";
import GuildTagUtils from "../../../../guild_tag/GuildTagUtils.tsx";
import _modDef12209 from "../../../../../../discord_assets/assets/powerups/badge-packs/group-static.png.js";
import _modDef12210 from "../../../../../../discord_assets/assets/powerups/badge-packs/group-animated.png.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../../stores/GuildStore.tsx";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/usePowerupGroupConfig.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, group) => {
      _require = arg0;
      const cResult = require("c").c(10);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          guild = GuildStore.getGuild(closure_0);
          let guildSupportsTagsResult = null != guild;
          if (guildSupportsTagsResult) {
            guildSupportsTagsResult = GuildTagUtils.guildSupportsTags(guild);
          }
          return guildSupportsTagsResult;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      if ("guildTagsBadgePacks" !== group.group) {
        tmp(1375).assertNever(group.group);
        const tmpResult2 = tmp(1375);
      } else {
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(_modDef2525.KC9HRW);
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(_modDef2525.GJiSmP);
          const obj2 = { staticUrl: _modDef12209, animatedUrl: _modDef12210 };
          cResult[3] = stringResult;
          cResult[4] = stringResult1;
          cResult[5] = obj2;
          let tmp10 = obj2;
          let tmp9 = stringResult1;
          let tmp8 = stringResult;
        } else {
          tmp8 = cResult[3];
          tmp9 = cResult[4];
          tmp10 = cResult[5];
        }
        if (cResult[6] !== stateFromStores) {
          let stringResult2;
          if (!stateFromStores) {
            const intl3 = tmp(1126).intl;
            stringResult2 = intl3.string(_modDef2525.lvk1Gc);
          }
          cResult[6] = stateFromStores;
          cResult[7] = stringResult2;
          let tmp14 = stringResult2;
        } else {
          tmp14 = cResult[7];
        }
        if (cResult[8] !== tmp14) {
          const obj3 = {
            title: tmp8,
            description: tmp9,
            image: tmp10,
            disabledReason: tmp14,
            badge: "IconComponent",
            forceStaticImages: "/assets/modules/copy_experiments/registry",
          };
          cResult[8] = tmp14;
          cResult[9] = obj3;
          let tmp17 = obj3;
        } else {
          tmp17 = cResult[9];
        }
      }
      return tmp17;
    }
  : (arg0, arg1) => {
      _require = arg0;
      const group = arg1;
      const items = [GuildStore];
      stateFromStores = require("initialize").useStateFromStores(items, () => {
        guild = GuildStore.getGuild(closure_0);
        let guildSupportsTagsResult = null != guild;
        if (guildSupportsTagsResult) {
          guildSupportsTagsResult = GuildTagUtils.guildSupportsTags(guild);
        }
        return guildSupportsTagsResult;
      });
      const items1 = [arg1, stateFromStores];
      return noop.useMemo(() => {
        if ("guildTagsBadgePacks" === group.group) {
          const obj2 = {
            title: null,
            description: null,
            image: null,
            disabledReason: null,
            badge: "IconComponent",
            forceStaticImages: "/assets/modules/copy_experiments/registry",
          };
          const intl = util.intl;
          obj2.title = intl.string(_modDef2525.KC9HRW);
          const intl2 = util.intl;
          obj2.description = intl2.string(_modDef2525.GJiSmP);
          const obj3 = { staticUrl: _modDef12209, animatedUrl: _modDef12210 };
          obj2.image = obj3;
          let stringResult;
          if (!stateFromStores) {
            const intl3 = util.intl;
            stringResult = intl3.string(_modDef2525.lvk1Gc);
          }
          obj2.disabledReason = stringResult;
          return obj2;
        } else {
          GlobalUtils.assertNever(tmp.group);
        }
      }, items1);
    };
