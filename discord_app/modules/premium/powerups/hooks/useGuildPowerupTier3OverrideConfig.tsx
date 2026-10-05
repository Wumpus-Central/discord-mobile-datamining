// discord_app/modules/premium/powerups/hooks/useGuildPowerupTier3OverrideConfig.tsx
import Constants from "../../../../Constants.tsx";
import _modDef2525 from "../GuildPowerups.messages.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const GuildFeatures = Constants.GuildFeatures;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let intl;
      let tmp6;
      let tmp7;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          const guild = GuildStore.getGuild(closure_0);
          let hasItem;
          if (guild != null) {
            const features = guild.features;
            hasItem = features.has(GuildFeatures.PREMIUM_TIER_3_OVERRIDE);
          }
          return true === hasItem;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = require("get initialized");
      if (tmpResult.useStateFromStores(first, tmp6)) {
        let tmp8;
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { shouldShow: true, text: intl.string(_modDef2525.l9n4QZ) };
          intl = tmp(1126).intl;
          cResult[4] = obj2;
          tmp8 = obj2;
        } else {
          tmp8 = cResult[4];
        }
        tmp7 = tmp8;
      } else {
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { shouldShow: false, text: "" };
          cResult[3] = obj3;
          tmp7 = obj3;
        } else {
          tmp7 = cResult[3];
        }
      }
      return tmp7;
    }
  : (arg0) => {
      let closure_0;
      let intl;
      let obj3;
      _require = arg0;
      const items = [GuildStore];
      const obj = require("get initialized");
      const tmp = _require;
      if (
        obj.useStateFromStores(items, () => {
          const guild = GuildStore.getGuild(closure_0);
          let hasItem;
          if (guild != null) {
            const features = guild.features;
            hasItem = features.has(GuildFeatures.PREMIUM_TIER_3_OVERRIDE);
          }
          return true === hasItem;
        })
      ) {
        const obj2 = { shouldShow: true, text: intl.string(_modDef2525.l9n4QZ) };
        intl = tmp(1126).intl;
        obj3 = obj2;
      } else {
        obj3 = { shouldShow: false, text: "" };
      }
      return obj3;
    };
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupTier3OverrideConfig.tsx");

export default tmp2;
