// discord_app/modules/conjure/publish/useConjurePublishedServerName.tsx
import GuildStore from "../../../stores/GuildStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishedServerName.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjurePublishedServerName(arg0) {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureProjectStore, GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          const project = ConjureProjectStore.getProject(closure_0);
          let tmp2 = null;
          if (null != project) {
            tmp2 = null;
            if ("user" !== project.install_scope) {
              tmp2 = null;
              if (null != project.guild_id) {
                guild = GuildStore.getGuild(project.guild_id);
                let name;
                if (guild != null) {
                  name = guild.name;
                }
                if (name == null) {
                  name = null;
                }
                tmp2 = name;
              }
            }
          }
          return tmp2;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj = require("c");
      return require("initialize").useStateFromStores(first, tmp7);
    }
  : function useConjurePublishedServerName(arg0) {
      _require = arg0;
      const items = [ConjureProjectStore, GuildStore];
      return require("initialize").useStateFromStores(items, () => {
        const project = ConjureProjectStore.getProject(closure_0);
        let tmp2 = null;
        if (null != project) {
          tmp2 = null;
          if ("user" !== project.install_scope) {
            tmp2 = null;
            if (null != project.guild_id) {
              guild = GuildStore.getGuild(project.guild_id);
              let name;
              if (guild != null) {
                name = guild.name;
              }
              if (name == null) {
                name = null;
              }
              tmp2 = name;
            }
          }
        }
        return tmp2;
      });
    };
