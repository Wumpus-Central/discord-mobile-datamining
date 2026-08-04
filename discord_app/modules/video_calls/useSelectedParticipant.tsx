// discord_app/modules/video_calls/useSelectedParticipant.tsx
import getParticipants from "getParticipants";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/video_calls/useSelectedParticipant.tsx");

export default function useSelectedParticipant(arg0) {
  const _require = arg0;
  const items = [getParticipants];
  return _require(589).useStateFromStores(items, () => outer1_2.getSelectedParticipant(id.id));
};