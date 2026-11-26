// === Module 12378: useConjureSharedProjectAppChannel ===

// Module 12378 (useConjureSharedProjectAppChannel)
import conjureSharedProjectHome from "conjureSharedProjectHome" /* 11998 */;
import findLoadedAppChannelDefault from "findLoadedAppChannel" /* 11999 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import GuildStore from "GuildStore" /* 4914 */;
import PermissionStore from "PermissionStore" /* 4975 */;

const require = globalThis.__r;

require = fn;
const ChannelLoader = fn(4892).ChannelLoader;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/share/useConjureSharedProjectAppChannel.tsx");

export default function useConjureSharedProjectAppChannel(arg0, arg1, channelId) {
  _require = arg0;
  closure_1 = arg1;
  channelId = channelId.channelId;
  let stateFromStores1;
  let ref;
  items = [ref];
  const items1 = [arg1, channelId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let sharedProjectHomeGuildId = null;
    if (null != closure_1) {
      sharedProjectHomeGuildId = null;
      if (null != channelId) {
        sharedProjectHomeGuildId = conjureSharedProjectHome.getSharedProjectHomeGuildId(tmp);
      }
    }
    return sharedProjectHomeGuildId;
  }, items1);
  let obj = require("initialize");
  const items2 = [stateFromStores1];
  const items3 = [stateFromStores];
  stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    let tmp2 = null == stateFromStores;
    if (!tmp2) {
      const _Object = Object;
      tmp2 = Object.keys(ChannelStore.getMutableGuildChannelsForGuild(tmp)).length > 0;
    }
    return tmp2;
  }, items3);
  const obj2 = require("initialize");
  const items4 = [stateFromStores1, PermissionStore];
  const items5 = [stateFromStores, arg0, channelId];
  const stateFromStores2 = require("initialize").useStateFromStores(items4, () => {
    let tmp2 = null;
    if (null != stateFromStores) {
      tmp2 = null;
      if (null != channelId) {
        const tmp7 = findLoadedAppChannelDefault(tmp, closure_0, tmp3);
        channelId = undefined;
        if (tmp7 != null) {
          channelId = tmp7.channelId;
        }
        if (channelId == null) {
          channelId = null;
        }
        tmp2 = channelId;
      }
    }
    return tmp2;
  }, items5);
  ref = stateFromStores.useRef(null);
  const items6 = [stateFromStores, stateFromStores1];
  const effect = stateFromStores.useEffect(() => {
    let tmp2 = null == stateFromStores || stateFromStores1;
    if (!tmp2) {
      tmp2 = ref.current === stateFromStores;
    }
    if (!tmp2) {
      ref.current = stateFromStores;
      items = [stateFromStores];
      const guildIds = ChannelLoader.loadGuildIds(items);
    }
  }, items6);
  const items7 = [stateFromStores, stateFromStores2];
  return stateFromStores.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores) {
      tmp2 = null;
      if (null != stateFromStores2) {
        const obj = { guildId: tmp, channelId: tmp3 };
        tmp2 = obj;
      }
    }
    return tmp2;
  }, items7);
};