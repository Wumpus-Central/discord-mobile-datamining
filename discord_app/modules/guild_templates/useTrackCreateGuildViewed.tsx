// discord_app/modules/guild_templates/useTrackCreateGuildViewed.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";

const GuildTemplateStates = fn(7326).GuildTemplateStates;
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
      let current = ref.current;
      if (!current.includes(closure_0.code)) {
        current = ref.current;
        current.push(closure_0.code);
        const obj = {
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
        obj.track(AnalyticEvents.CREATE_GUILD_VIEWED, obj);
      }
    }
  });
}
