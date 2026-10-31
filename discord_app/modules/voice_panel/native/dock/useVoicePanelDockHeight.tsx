// discord_app/modules/voice_panel/native/dock/useVoicePanelDockHeight.tsx
import RTCConnectionStore from "../../../../stores/RTCConnectionStore.tsx";
import VoicePanelStore from "../../VoicePanelStore.tsx";

const require = globalThis.__r;

const require = fn;
const getVoicePanelDockHeight = fn(11241).getVoicePanelDockHeight;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useVoicePanelDockHeight.tsx");

export default function useVoicePanelDockHeight() {
  let tmp = VoicePanelStore((voicePanelsWithDock) => voicePanelsWithDock.voicePanelsWithDock.size > 0);
  _require = tmp;
  const items = [RTCConnectionStore];
  const items1 = [tmp];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
      let tmp = closure_0;
      if (closure_0) {
        tmp = null != RTCConnectionStore.getChannelId();
      }
      return tmp;
    },
    items1,
  );
  VoicePanelStore((voicePanelsWithDock) =>
    Array.from(voicePanelsWithDock.voicePanelsWithDock).some((item) => {
      const voicePanelsPIP = voicePanelsWithDock.voicePanelsPIP;
      return voicePanelsPIP.has(item);
    }),
  );
  if (stateFromStores) {
    let num = getVoicePanelDockHeight(tmp4);
  } else {
    num = 0;
  }
  return num;
}
