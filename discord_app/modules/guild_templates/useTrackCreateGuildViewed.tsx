// === Module 11946: useTrackCreateGuildViewed ===

// Module 11946 (useTrackCreateGuildViewed)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import noop from "module_19" /* 19 */;

const GuildTemplateStates = fn(7440).GuildTemplateStates;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_templates/useTrackCreateGuildViewed.tsx");

export default function useTrackCreateGuildViewed(arg0) {
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
        ({ code: obj2.guild_template_code, name: obj2.guild_template_name, description: obj2.guild_template_description, sourceGuildId: obj2.guild_template_guild_id } = closure_0);
        AnalyticsUtilsDefault.track(AnalyticEvents.CREATE_GUILD_VIEWED, { guild_template_code: null, guild_template_name: null, guild_template_description: null, guild_template_guild_id: null });
        const obj3 = { guild_template_code: null, guild_template_name: null, guild_template_description: null, guild_template_guild_id: null };
      }
    }
  });
};