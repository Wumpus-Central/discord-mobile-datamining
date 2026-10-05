// discord_app/modules/guild_templates/useTrackCreateGuildViewed.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import GuildTemplatesConstants from "GuildTemplatesConstants.tsx";
import react from "../../../_runtime/00019_react.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const GuildTemplateStates = GuildTemplatesConstants.GuildTemplateStates;
const AnalyticEvents = Constants.AnalyticEvents;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp3;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      const ref = react.useRef(first);
      if (cResult[1] !== arg0) {
        const fn = function s() {
          const tmp2 = null != closure_0 && closure_0.state !== GuildTemplateStates.RESOLVING;
          if (tmp2) {
            const current = ref.current;
            if (!current.includes(closure_0.code)) {
              const current1 = ref.current;
              current1.push(closure_0.code);
              const obj3 = {
                guild_template_code: null,
                guild_template_name: null,
                guild_template_description: null,
                guild_template_guild_id: null,
              };
              ({
                code: obj2.guild_template_code,
                name: obj2.guild_template_name,
                description: obj2.guild_template_description,
                sourceGuildId: obj2.guild_template_guild_id,
              } = closure_0);
              const obj = AnalyticsUtilsDefault;
              obj.track(AnalyticEvents.CREATE_GUILD_VIEWED, obj3);
            }
          }
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp3 = fn;
      } else {
        tmp3 = cResult[2];
      }
      const effect = react.useEffect(tmp3);
    }
  : (arg0) => {
      let closure_0 = arg0;
      const ref = react.useRef([]);
      const effect = react.useEffect(() => {
        const tmp2 = null != closure_0 && closure_0.state !== GuildTemplateStates.RESOLVING;
        if (tmp2) {
          const current = ref.current;
          if (!current.includes(closure_0.code)) {
            const current1 = ref.current;
            current1.push(closure_0.code);
            const obj3 = {
              guild_template_code: null,
              guild_template_name: null,
              guild_template_description: null,
              guild_template_guild_id: null,
            };
            ({
              code: obj2.guild_template_code,
              name: obj2.guild_template_name,
              description: obj2.guild_template_description,
              sourceGuildId: obj2.guild_template_guild_id,
            } = closure_0);
            const obj = AnalyticsUtilsDefault;
            obj.track(AnalyticEvents.CREATE_GUILD_VIEWED, obj3);
          }
        }
      });
    };
const result = size.fileFinishedImporting("modules/guild_templates/useTrackCreateGuildViewed.tsx");

export default tmp2;
