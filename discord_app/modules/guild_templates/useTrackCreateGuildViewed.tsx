// discord_app/modules/guild_templates/useTrackCreateGuildViewed.tsx
import noop from "noop";
import { GuildTemplateStates } from "GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD";
import { AnalyticEvents } from "ME";

const result = require("ME").fileFinishedImporting("modules/guild_templates/useTrackCreateGuildViewed.tsx");

export default function useTrackCreateGuildViewed(arg0) {
  let closure_0 = arg0;
  let closure_1 = React.useRef([]);
  const effect = React.useEffect(() => {
    let tmp2 = null != callback;
    if (tmp2) {
      tmp2 = tmp.state !== outer1_3.RESOLVING;
    }
    if (tmp2) {
      let current = ref.current;
      if (!current.includes(tmp.code)) {
        current = tmp4.current;
        current.push(tmp.code);
        let obj = callback(ref[3]);
        obj = { guild_template_code: null, guild_template_name: null, guild_template_description: null, guild_template_guild_id: null };
        ({ code: obj2[0], name: obj2[1], description: obj2[2], sourceGuildId: obj2[3] } = tmp);
        obj.track(outer1_4.CREATE_GUILD_VIEWED, obj);
      }
      tmp4 = ref;
    }
  });
};