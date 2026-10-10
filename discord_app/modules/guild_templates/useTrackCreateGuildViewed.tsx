// discord_app/modules/guild_templates/useTrackCreateGuildViewed.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const GuildTemplateStates = fn(7030).GuildTemplateStates;
const AnalyticEvents = fn(1085).AnalyticEvents;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_templates/useTrackCreateGuildViewed.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useTrackCreateGuildViewed(arg0) {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      noop.useRef(first);
      if (cResult[1] !== arg0) {
        const fn = function _() {
          let tmp2 = null != closure_0;
          if (tmp2) {
            tmp2 = closure_0.state !== GuildTemplateStates.RESOLVING;
          }
          if (tmp2) {
            const current = ref.current;
            if (!current.includes(closure_0.code)) {
              const current1 = ref.current;
              current1.push(closure_0.code);
              ({
                code: obj2.guild_template_code,
                name: obj2.guild_template_name,
                description: obj2.guild_template_description,
                sourceGuildId: obj2.guild_template_guild_id,
              } = closure_0);
              AnalyticsUtilsDefault.track(AnalyticEvents.CREATE_GUILD_VIEWED, {
                guild_template_code: null,
                guild_template_name: null,
                guild_template_description: null,
                guild_template_guild_id: null,
              });
              const obj3 = {
                guild_template_code: null,
                guild_template_name: null,
                guild_template_description: null,
                guild_template_guild_id: null,
              };
            }
          }
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp3 = fn;
      } else {
        tmp3 = cResult[2];
      }
      const effect = noop.useEffect(tmp3);
      let obj = require("c");
    }
  : function useTrackCreateGuildViewed(arg0) {
      closure_0 = arg0;
      noop.useRef([]);
      const effect = noop.useEffect(() => {
        let tmp2 = null != closure_0;
        if (tmp2) {
          tmp2 = closure_0.state !== GuildTemplateStates.RESOLVING;
        }
        if (tmp2) {
          const current = ref.current;
          if (!current.includes(closure_0.code)) {
            const current1 = ref.current;
            current1.push(closure_0.code);
            ({
              code: obj2.guild_template_code,
              name: obj2.guild_template_name,
              description: obj2.guild_template_description,
              sourceGuildId: obj2.guild_template_guild_id,
            } = closure_0);
            AnalyticsUtilsDefault.track(AnalyticEvents.CREATE_GUILD_VIEWED, {
              guild_template_code: null,
              guild_template_name: null,
              guild_template_description: null,
              guild_template_guild_id: null,
            });
            const obj3 = {
              guild_template_code: null,
              guild_template_name: null,
              guild_template_description: null,
              guild_template_guild_id: null,
            };
          }
        }
      });
    };
