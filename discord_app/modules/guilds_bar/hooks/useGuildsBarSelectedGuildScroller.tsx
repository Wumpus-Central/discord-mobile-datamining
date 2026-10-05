// === Module 16300: useGuildsBarSelectedGuildScroller ===

// Module 16300 (useGuildsBarSelectedGuildScroller)
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp2;
  let tmp3;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] !== arg0) {
    const fn = function t() {
      let _null;
      let c0 = null;
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
    tmp3 = items;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = react.useEffect(tmp2, tmp3);
}) : ((arg0) => {
  let closure_0 = arg0;
  const items = [arg0];
  const effect = react.useEffect(() => {
    let _null;
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
    let c0 = null;
    SelectedGuildStore.addChangeListener(handleSelectedGuildChange);
    return () => {
      SelectedGuildStore.removeChangeListener(handleSelectedGuildChange);
    };
  }, items);
});
const result = size.fileFinishedImporting("modules/guilds_bar/hooks/useGuildsBarSelectedGuildScroller.tsx");

export default tmp2;