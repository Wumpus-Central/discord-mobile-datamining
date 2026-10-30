// === Module 12538: useConjureIncompleteAppNotice ===

// Module 12538 (useConjureIncompleteAppNotice)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4880 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjureIncompleteAppNotice.tsx");

export default function useConjureIncompleteAppNotice(arg0) {
  _require = arg0;
  const tmp3 = guildId(12400)(arg0);
  guildId = undefined;
  if (tmp3 != null) {
    guildId = tmp3.guildId;
  }
  if (guildId == null) {
    guildId = null;
  }
  const items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != guildId) {
      const guild = GuildStore.getGuild(tmp);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      if (name == null) {
        name = null;
      }
      tmp2 = name;
    }
    return tmp2;
  });
  const tmp7 = _slicedToArray(noop.useState(null), 2);
  dependencyMap = tmp7[1];
  let missingSurface;
  if (tmp3 != null) {
    missingSurface = tmp3.missingSurface;
  }
  if (missingSurface == null) {
    missingSurface = null;
  }
  let tmp9 = null;
  if (null != missingSurface) {
    tmp9 = null;
    if (tmp7[0] !== arg0) {
      const intl = require("util").intl;
      if ("channel" === missingSurface) {
        let Lm7IRC = tmp(3865)["1cm4fj"];
      } else {
        Lm7IRC = tmp(3865).Lm7IRC;
      }
      let str2 = stateFromStores;
      if (stateFromStores == null) {
        str2 = "";
      }
      const obj2 = { message: null, onDismiss: null };
      const obj3 = { server: str2 };
      obj2.message = intl.format(Lm7IRC, obj3);
      obj2.onDismiss = function onDismiss() {
        return closure_2(closure_0);
      };
      tmp9 = obj2;
    }
  }
  return tmp9;
};