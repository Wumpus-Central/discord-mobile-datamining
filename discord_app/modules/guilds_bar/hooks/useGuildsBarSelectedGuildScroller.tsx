// === Module 15622: useGuildsBarSelectedGuildScroller ===

// Module 15622 (useGuildsBarSelectedGuildScroller)
import noop from "noop" /* 19 */;
import handleConnectionOpen from "handleConnectionOpen" /* 4197 */;

const result = require("obj132").fileFinishedImporting("modules/guilds_bar/hooks/useGuildsBarSelectedGuildScroller.tsx");

export default function useGuildsBarSelectedGuildScroller(arg0) {
  const React = arg0;
  const items = [arg0];
  const effect = React.useEffect(() => {
    function handleSelectedGuildChange() {
      let guildId = closure_2_1.getGuildId();
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
      }
    }
    c0 = null;
    closure_1_1.addChangeListener(handleSelectedGuildChange);
    return () => {
      closure_2_1.removeChangeListener(handleSelectedGuildChange);
    };
  }, items);
};