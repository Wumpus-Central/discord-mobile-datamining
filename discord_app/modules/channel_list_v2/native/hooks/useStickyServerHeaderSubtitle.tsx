// discord_app/modules/channel_list_v2/native/hooks/useStickyServerHeaderSubtitle.tsx
import GuildMemberCountStore from "../../../../stores/GuildMemberCountStore.tsx";

const require = globalThis.__r;

const require = fn;
const GuildFeatures = fn(1085).GuildFeatures;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/hooks/useStickyServerHeaderSubtitle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (features) => {
      _require = features;
      const cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildMemberCountStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === features.features) {
        if (cResult[2] === features.id) {
          let tmp6 = cResult[3];
        }
        return tmp(504).useStateFromStores(first, tmp6);
      }
      const fn = function o() {
        features = features.features;
        if (features.has(GuildFeatures.COMMUNITY)) {
          return GuildMemberCountStore.getMemberCount(tmp.id);
        }
        tmp = features;
      };
      cResult[1] = features.features;
      cResult[2] = features.id;
      cResult[3] = fn;
      tmp6 = fn;
      const obj = require("c");
      tmp = _require;
    }
  : (arg0) => {
      _require = arg0;
      const items = [GuildMemberCountStore];
      return require("initialize").useStateFromStores(items, () => {
        features = features.features;
        let memberCount;
        if (features.has(GuildFeatures.COMMUNITY)) {
          memberCount = GuildMemberCountStore.getMemberCount(features.id);
        }
        return memberCount;
      });
    };
