// discord_app/modules/conjure/share/useConjureSharedProjectAppChannel.tsx
import findLoadedAppChannelDefault from "../shared/findLoadedAppChannel.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";

const require = globalThis.__r;

const require = fn;
const ChannelLoader = fn(4991).ChannelLoader;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/share/useConjureSharedProjectAppChannel.tsx");

export default function useConjureSharedProjectAppChannel(arg0, install_scope, arg2) {
  _require = arg0;
  ({ guildId, channelId } = arg2);
  guildId = undefined;
  let stateFromStores;
  let stateFromStores1;
  let tmp = null;
  if (null != install_scope) {
    tmp = null;
    if (null != channelId) {
      tmp = null;
      if (obj.isSharedProjectHomeServer(install_scope, guildId)) {
        tmp = guildId;
      }
      obj = require("conjureSharedProjectHome");
    }
  }
  guildId = tmp;
  items = [stateFromStores1];
  const items1 = [tmp];
  stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
      let tmp2 = null == guildId;
      if (!tmp2) {
        const _Object = Object;
        tmp2 = Object.keys(ChannelStore.getMutableGuildChannelsForGuild(tmp)).length > 0;
      }
      return tmp2;
    },
    items1,
  );
  const obj2 = require("initialize");
  const items2 = [stateFromStores1, PermissionStore];
  const items3 = [tmp, arg0, channelId];
  stateFromStores1 = require("initialize").useStateFromStores(
    items2,
    () => {
      let tmp2 = null;
      if (null != guildId) {
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
    },
    items3,
  );
  stateFromStores.useRef(null);
  const items4 = [tmp, stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    let tmp2 = null == guildId || stateFromStores;
    if (!tmp2) {
      tmp2 = ref.current === guildId;
    }
    if (!tmp2) {
      ref.current = guildId;
      items = [guildId];
      const guildIds = ChannelLoader.loadGuildIds(items);
    }
  }, items4);
  const items5 = [tmp, stateFromStores1];
  return stateFromStores.useMemo(() => {
    let tmp2 = null;
    if (null != guildId) {
      tmp2 = null;
      if (null != stateFromStores1) {
        const obj = { guildId: tmp, channelId: tmp3 };
        tmp2 = obj;
      }
    }
    return tmp2;
  }, items5);
}
