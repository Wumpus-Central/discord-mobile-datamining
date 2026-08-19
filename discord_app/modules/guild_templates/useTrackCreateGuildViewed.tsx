// === Module 10973: useTrackCreateGuildViewed ===

// Module 10973 (useTrackCreateGuildViewed)
import noop from "noop" /* 19 */;
import { GuildTemplateStates } from "GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD" /* 7289 */;
import { AnalyticEvents } from "ME" /* 676 */;

const result = require("obj132").fileFinishedImporting("modules/guild_templates/useTrackCreateGuildViewed.tsx");

export default function useTrackCreateGuildViewed(arg0) {
  closure_0 = arg0;
  closure_1 = React.useRef([]);
  const effect = React.useEffect(() => {
    let tmp2 = null != callback;
    if (tmp2) {
      tmp2 = callback.state !== GuildTemplateStates.RESOLVING;
    }
    if (tmp2) {
      let current = ref.current;
      if (!current.includes(callback.code)) {
        current = ref.current;
        current.push(callback.code);
        callback(ref[3]);
        const obj = { guild_template_code: null, guild_template_name: null, guild_template_description: null, guild_template_guild_id: null };
        ({ code: obj2[0], name: obj2[1], description: obj2[2], sourceGuildId: obj2[3] } = callback);
        obj.track(AnalyticEvents.CREATE_GUILD_VIEWED, obj);
      }
    }
  });
};