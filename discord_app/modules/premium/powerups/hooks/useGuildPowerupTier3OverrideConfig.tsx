// discord_app/modules/premium/powerups/hooks/useGuildPowerupTier3OverrideConfig.tsx
import _modDef2600 from "../GuildPowerups.messages.js";
import GuildStore from "../../../../stores/GuildStore.tsx";

const require = globalThis.__r;

const require = fn;
const GuildFeatures = fn(1085).GuildFeatures;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupTier3OverrideConfig.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useGuildPowerupTier3OverrideConfig(arg0) {
      _require = arg0;
      let intl = _require;
      let stringResult = dependencyMap;
      const cResult = require("c").c(5);
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
          let hasItem;
          if (guild != null) {
            const features = guild.features;
            hasItem = features.has(GuildFeatures.PREMIUM_TIER_3_OVERRIDE);
          }
          return true === hasItem;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[2];
      }
      const obj = require("c");
      if (intlResult.useStateFromStores(first, tmp5)) {
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { shouldShow: true, text: null };
          intl = intl(1126).intl;
          stringResult = intl.string(_modDef2600.l9n4QZ);
          obj2.text = stringResult;
          cResult[4] = obj2;
        }
      } else {
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { shouldShow: false, text: "" };
          cResult[3] = obj3;
          let tmp6 = obj3;
        } else {
          tmp6 = cResult[3];
        }
        return tmp6;
      }
      intlResult = intl(504);
    }
  : function useGuildPowerupTier3OverrideConfig(arg0) {
      _require = arg0;
      const items = [GuildStore];
      if (
        obj.useStateFromStores(items, () => {
          guild = GuildStore.getGuild(closure_0);
          let hasItem;
          if (guild != null) {
            const features = guild.features;
            hasItem = features.has(GuildFeatures.PREMIUM_TIER_3_OVERRIDE);
          }
          return true === hasItem;
        })
      ) {
        const obj2 = { shouldShow: true, text: null };
        const intl = require("util").intl;
        obj2.text = intl.string(_modDef2600.l9n4QZ);
        let obj3 = obj2;
      } else {
        obj3 = { shouldShow: false, text: "" };
      }
      return obj3;
    };
