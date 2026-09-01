// discord_app/modules/guilds_bar/hooks/useGuildsBarSelectedGuildScroller.tsx
import closure_0 from "../../../../_runtime/00019_noop.js";
import closure_1 from "../../../stores/SelectedGuildStore.tsx";

const result = require("set").fileFinishedImporting("modules/guilds_bar/hooks/useGuildsBarSelectedGuildScroller.tsx");

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
        const tmp4 = c0;
      }
    }
    c0 = null;
    closure_1_1.addChangeListener(handleSelectedGuildChange);
    return () => {
      closure_2_1.removeChangeListener(handleSelectedGuildChange);
    };
  }, items);
}
