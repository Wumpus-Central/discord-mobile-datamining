// discord_app/modules/voice_panel/native/dock/VoicePanelDockLayout.tsx
import MainTabsNavigatorPanelContextDefault from "../../../main_tabs_v2/native/panels/MainTabsNavigatorPanelContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import RTCConnectionStore from "../../../../stores/RTCConnectionStore.tsx";
import VoicePanelStore from "../../VoicePanelStore.tsx";

const require = globalThis.__r;

const require = fn;
const getVoicePanelDockHeight = fn(11768).getVoicePanelDockHeight;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockLayout.tsx");

export function useVoicePanelDockHeight() {
  const tmp = VoicePanelStore((voicePanelsWithDock) => voicePanelsWithDock.voicePanelsWithDock.size > 0);
  _require = tmp;
  items = [RTCConnectionStore];
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
export function useChatDockHeight() {
  const tmp = VoicePanelStore((voicePanelsWithDock) => voicePanelsWithDock.voicePanelsWithDock.size > 0);
  _require = tmp;
  items = [RTCConnectionStore];
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
    let num = getVoicePanelDockHeight(tmp6);
  } else {
    num = 0;
  }
  let num2 = 0;
  if (!noop.useContext(MainTabsNavigatorPanelContextDefault).isNavigatorPanelsBesideChannelList) {
    num2 = num;
  }
  return num2;
}
export function useChannelDockHeight() {
  let tmp = VoicePanelStore((voicePanelsWithDock) => voicePanelsWithDock.voicePanelsWithDock.size > 0);
  _require = tmp;
  items = [RTCConnectionStore];
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
    let num = getVoicePanelDockHeight(tmp6);
  } else {
    num = 0;
  }
  let num2 = 0;
  if (!noop.useContext(MainTabsNavigatorPanelContextDefault).isNavigatorPanelsBesideChannelList) {
    num2 = num;
  }
  let num3 = 0;
  if (noop.useContext(MainTabsNavigatorPanelContextDefault).isInMainTabs) {
    num3 = num2;
  }
  return num3;
}
