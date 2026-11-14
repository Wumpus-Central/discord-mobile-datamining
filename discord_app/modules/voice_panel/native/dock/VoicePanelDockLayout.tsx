// === Module 12008: VoicePanelDockLayout ===

// Module 12008 (VoicePanelDockLayout)
import MainTabsNavigatorPanelContextDefault from "MainTabsNavigatorPanelContext" /* 12011 */;
import noop from "module_19" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 6071 */;
import VoicePanelStore from "VoicePanelStore" /* 6901 */;

const require = globalThis.__r;

const require = fn;
const getVoicePanelDockHeight = fn(12009).getVoicePanelDockHeight;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockLayout.tsx");

export function useVoicePanelDockHeight() {
  const tmp = VoicePanelStore((voicePanelsWithDock) => voicePanelsWithDock.voicePanelsWithDock.size > 0);
  _require = tmp;
  items = [RTCConnectionStore];
  const items1 = [tmp];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let tmp = closure_0;
    if (closure_0) {
      tmp = null != RTCConnectionStore.getChannelId();
    }
    return tmp;
  }, items1);
  VoicePanelStore((voicePanelsWithDock) => Array.from(voicePanelsWithDock.voicePanelsWithDock).some((item) => {
    const voicePanelsPIP = voicePanelsWithDock.voicePanelsPIP;
    return voicePanelsPIP.has(item);
  }));
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
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let tmp = closure_0;
    if (closure_0) {
      tmp = null != RTCConnectionStore.getChannelId();
    }
    return tmp;
  }, items1);
  VoicePanelStore((voicePanelsWithDock) => Array.from(voicePanelsWithDock.voicePanelsWithDock).some((item) => {
    const voicePanelsPIP = voicePanelsWithDock.voicePanelsPIP;
    return voicePanelsPIP.has(item);
  }));
  if (stateFromStores) {
    let num = getVoicePanelDockHeight(tmp6);
  } else {
    num = 0;
  }
  const isNavigatorPanelsBesideChannelList = noop.useContext(MainTabsNavigatorPanelContextDefault).isNavigatorPanelsBesideChannelList;
  if (undefined === isNavigatorPanelsBesideChannelList) {
    let num2 = num;
  } else {
    num2 = 0;
  }
  return num2;
}
export function useChannelDockHeight() {
  let tmp = VoicePanelStore((voicePanelsWithDock) => voicePanelsWithDock.voicePanelsWithDock.size > 0);
  _require = tmp;
  items = [RTCConnectionStore];
  const items1 = [tmp];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let tmp = closure_0;
    if (closure_0) {
      tmp = null != RTCConnectionStore.getChannelId();
    }
    return tmp;
  }, items1);
  VoicePanelStore((voicePanelsWithDock) => Array.from(voicePanelsWithDock.voicePanelsWithDock).some((item) => {
    const voicePanelsPIP = voicePanelsWithDock.voicePanelsPIP;
    return voicePanelsPIP.has(item);
  }));
  if (stateFromStores) {
    let num = getVoicePanelDockHeight(tmp6);
  } else {
    num = 0;
  }
  const isNavigatorPanelsBesideChannelList = noop.useContext(MainTabsNavigatorPanelContextDefault).isNavigatorPanelsBesideChannelList;
  if (undefined === isNavigatorPanelsBesideChannelList) {
    let num2 = num;
  } else {
    num2 = 0;
  }
  let num3 = 0;
  if (noop.useContext(MainTabsNavigatorPanelContextDefault).isInMainTabs) {
    num3 = num2;
  }
  return num3;
}