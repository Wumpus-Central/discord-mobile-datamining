// === Module 16793: useGuildsBarSelectedGuildScroller ===

// Module 16793 (useGuildsBarSelectedGuildScroller)
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4939 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/hooks/useGuildsBarSelectedGuildScroller.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildsBarSelectedGuildScroller(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] !== arg0) {
    const fn = function t() {
      c0 = null;
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
      SelectedGuildStore.addChangeListener(handleSelectedGuildChange);
      return () => {
        SelectedGuildStore.removeChangeListener(handleSelectedGuildChange);
      };
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp3 = items;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = noop.useEffect(tmp2, tmp3);
}) : (function useGuildsBarSelectedGuildScroller(arg0) {
  closure_0 = arg0;
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
});