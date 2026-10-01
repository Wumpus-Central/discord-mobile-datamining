// === Module 16505: useVibegrationsPublishedChannelId ===

// Module 16505 (useVibegrationsPublishedChannelId)
import VibegrationsUtils from "VibegrationsUtils" /* 5554 */;
import GuildChannelStore from "GuildChannelStore" /* 4496 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsPublishedChannelId.tsx");

export default function useVibegrationsPublishedChannelId(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [GuildChannelStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => {
    let result = null;
    if (null != closure_1) {
      result = VibegrationsUtils.findVibegrationChannelId(closure_0, tmp);
    }
    return result;
  }, items1);
};