// discord_app/modules/guilds_bar/hooks/useGuildsBarSelectedGuildScroller.tsx
import noop from "noop";
import handleConnectionOpen from "handleConnectionOpen";

const result = require("set").fileFinishedImporting("modules/guilds_bar/hooks/useGuildsBarSelectedGuildScroller.tsx");

export default function useGuildsBarSelectedGuildScroller(arg0) {
  const React = arg0;
  const items = [arg0];
  const effect = React.useEffect(() => {
    function handleSelectedGuildChange() {
      let guildId = outer2_1.getGuildId();
      if (guildId !== c0) {
        let tmp3 = guildId;
        if (guildId == null) {
          tmp3 = null;
        }
        c0 = tmp3;
        if (guildId == null) {
          guildId = null;
        }
        c0(guildId, false);
        const tmp4 = c0;
      }
    }
    let c0 = null;
    outer1_1.addChangeListener(handleSelectedGuildChange);
    return () => {
      outer2_1.removeChangeListener(handleSelectedGuildChange);
    };
  }, items);
};