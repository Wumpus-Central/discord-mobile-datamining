// === Module 11588: useTrackCreateGuildViewed ===

// Module 11588 (useTrackCreateGuildViewed)
import closure_2 from "noop" /* 19 */;
import { GuildTemplateStates } from "GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD" /* 6179 */;
import { AnalyticEvents } from "ME" /* 673 */;

const result = require("set").fileFinishedImporting("modules/guild_templates/useTrackCreateGuildViewed.tsx");

export default function useTrackCreateGuildViewed(arg0) {
  closure_0 = arg0;
  closure_1 = React.useRef([]);
  const effect = React.useEffect(() => {
    let tmp2 = null != callback;
    if (tmp2) {
      tmp2 = tmp.state !== closure_1_3.RESOLVING;
    }
    if (tmp2) {
      let current = ref.current;
      if (!current.includes(tmp.code)) {
        current = tmp4.current;
        current.push(tmp.code);
        let obj = callback(ref[3]);
        obj = { guild_template_code: null, guild_template_name: null, guild_template_description: null, guild_template_guild_id: null };
        ({ code: obj2[0], name: obj2[1], description: obj2[2], sourceGuildId: obj2[3] } = tmp);
        obj.track(closure_1_4.CREATE_GUILD_VIEWED, obj);
      }
      tmp4 = ref;
    }
  });
};