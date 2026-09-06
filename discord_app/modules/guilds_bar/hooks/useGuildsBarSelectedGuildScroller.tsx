// === Module 16359: useGuildsBarSelectedGuildScroller ===

// Module 16359 (useGuildsBarSelectedGuildScroller)
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/hooks/useGuildsBarSelectedGuildScroller.tsx");

export default function useGuildsBarSelectedGuildScroller(arg0) {
  noop = arg0;
  const items = [arg0];
  const effect = noop.useEffect(() => {
    function handleSelectedGuildChange() {
      let guildId = SelectedGuildStore.getGuildId();
      if (guildId !== c0) {
        let tmp3 = guildId;
        if (guildId == null) {
          tmp3 = null;
        }
        c0 = tmp3;
        if (guildId == null) {
          guildId = null;
        }
        _null(guildId, false);
      }
    }
    c0 = null;
    SelectedGuildStore.addChangeListener(handleSelectedGuildChange);
    return () => {
      SelectedGuildStore.removeChangeListener(handleSelectedGuildChange);
    };
  }, items);
};