// discord_app/modules/video_calls/useSelectedParticipant.tsx
import closure_2 from "../calls/ChannelRTCStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/video_calls/useSelectedParticipant.tsx");

export default function useSelectedParticipant(arg0) {
  const _require = arg0;
  const items = [closure_2];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => closure_1_2.getSelectedParticipant(id.id));
};