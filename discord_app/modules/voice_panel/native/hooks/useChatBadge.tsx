// discord_app/modules/voice_panel/native/hooks/useChatBadge.tsx
import generateOldThreadCutoff from "../../../../stores/ReadStateStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/hooks/useChatBadge.tsx");

export default function useChatBadge(arg0) {
  const _require = arg0;
  const items = [closure_2];
  return require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let str = "mention";
    if (closure_1_2.getMentionCount(closure_0) <= 0) {
      let str2 = null;
      if (closure_1_2.hasUnread(closure_0)) {
        str2 = "unread";
      }
      str = str2;
    }
    return str;
  });
};