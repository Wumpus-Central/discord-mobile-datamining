// discord_app/modules/voice_panel/native/controls/useControlsButtons.tsx
import VOICE_PANEL_DRAWER_MAX_WIDTH from "VOICE_PANEL_DRAWER_MAX_WIDTH";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import VoicePanelControlsModes from "VoicePanelControlsModes";
import { InputModes } from "ME";
import { jsx } from "set";
import { ChatButton } from "buttons/VoicePanelChatButton.tsx";
import { ConnectButton } from "buttons/VoicePanelConnectButton.tsx";
import { DisconnectCancelButton } from "buttons/VoicePanelDisconnectCancelButton.tsx";
import { VoicePanelDrawerToggleButton } from "buttons/VoicePanelDrawerToggleButton.tsx";
import { PTTButton } from "buttons/VoicePanelMicButton.tsx";
import { MobilePhoneShareIcon } from "buttons/VoicePanelScreenshareButton.tsx";
import { SoundboardButton } from "buttons/VoicePanelSoundboardButton.tsx";
import { VideoButtonRive } from "buttons/VoicePanelVideoButton.tsx";

let c5;
let closure_6;
const require = arg1;
({ CONTROLS_BUTTON_SIZE_LARGE: c5, CONTROLS_BUTTON_SIZE_NORMAL: closure_6 } = VoicePanelControlsModes);
let closure_9 = {
  mic(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(PTTButton.MicButton, {}, arg0);
  },
  ptt(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(PTTButton.PTTButton, {}, arg0);
  },
  micConnected(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(PTTButton.MicButton, {}, arg0);
  },
  connect(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(ConnectButton, {}, arg0);
  },
  chat(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(ChatButton, {}, arg0);
  },
  disconnectCancel(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(DisconnectCancelButton, {}, arg0);
  },
  video(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VideoButtonRive, {}, arg0);
  },
  soundboard(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(SoundboardButton, {}, arg0);
  },
  screenshare(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(MobilePhoneShareIcon, {}, arg0);
  },
  drawerToggle(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VoicePanelDrawerToggleButton, {}, arg0);
  }
};
let closure_10 = { code: "function useControlsButtonsTsx1(){const{getControlsDefaultWidth,windowDimensions,safeArea}=this.__closure;return getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);}" };
const result = require("VoicePanelControlsModes").fileFinishedImporting("modules/voice_panel/native/controls/useControlsButtons.tsx");

export default function useControlsButtons() {
  const context = treatment.useContext(safeArea(11529));
  const windowDimensions = context.windowDimensions;
  safeArea = context.safeArea;
  const tmp2 = safeArea(15962)(context.channelId);
  const dependencyMap = tmp2;
  let obj = safeArea(16026);
  treatment = obj.useConfig({ location: "VoicePanelControlButtons" }).treatment;
  let items = [stateFromStores];
  stateFromStores = windowDimensions(589).useStateFromStores(items, () => stateFromStores.getMode() === constants.PUSH_TO_TALK);
  let obj2 = windowDimensions(589);
  const fn = function o() {
    return windowDimensions(tmp2[19]).getControlsDefaultWidth(windowDimensions.get().width, safeArea.get().left, safeArea.get().right);
  };
  obj = { getControlsDefaultWidth: windowDimensions(11536).getControlsDefaultWidth, windowDimensions, safeArea };
  fn.__closure = obj;
  fn.__workletHash = 16456936876254;
  fn.__initData = closure_10;
  const derivedValue = windowDimensions(4116).useDerivedValue(fn);
  const tmp5 = safeArea(8626)(derivedValue);
  let closure_5 = tmp5;
  const items1 = [tmp2, stateFromStores, tmp5, treatment];
  return treatment.useMemo(() => {
    let c0 = false;
    let c1 = 0;
    const mapped = (function getButtons(closure_2, stateFromStores, treatment) {
      const items = [];
      const push = items.push;
      if (closure_2) {
        let obj = { type: "icon-normal", key: "connected-video", render: null };
        obj[2] = redux.video;
        push(obj);
        if (!stateFromStores) {
          obj = { type: "icon-normal", key: "connected-mic", render: null };
          obj[2] = tmp6.micConnected;
          items.push(obj);
        }
        if (treatment === callback(16026).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT) {
          const obj1 = { type: "icon-normal", key: "connected-screenshare", render: null };
          obj1[2] = tmp6.screenshare;
          items.push(obj1);
        } else {
          const obj2 = { type: "icon-normal", key: "connected-chat", render: null };
          obj2[2] = tmp6.chat;
          items.push(obj2);
        }
        if (stateFromStores) {
          const obj3 = { type: "icon-large", key: "connected-ptt", render: null };
          obj3[2] = tmp6.ptt;
          items.push(obj3);
        }
        if (treatment === tmp10(16026).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD) {
          const obj4 = { type: "icon-normal", key: "connected-screenshare", render: null };
          obj4[2] = tmp6.screenshare;
          items.push(obj4);
        } else {
          const obj5 = { type: "icon-normal", key: "connected-soundboard", render: null };
          obj5[2] = tmp6.soundboard;
          items.push(obj5);
        }
        const obj6 = { type: "icon-normal", key: "connected-disconnect", render: null };
        obj6[2] = redux.disconnectCancel;
        items.push(obj6);
        tmp10 = callback;
      } else {
        obj = { type: "icon-normal", key: "disconnected-mute", render: null };
        obj[2] = redux.mic;
        push(obj);
        const obj7 = { type: "label", key: "disconnected-connect", render: null };
        obj7[2] = redux.connect;
        items.push(obj7);
        const obj8 = { type: "icon-normal", key: "disconnected-chat", render: null };
        obj8[2] = redux.chat;
        items.push(obj8);
        if (obj12.isMetaQuest()) {
          const obj9 = { type: "icon-normal", key: "drawer-toggle", render: null };
          obj9[2] = redux.drawerToggle;
          items.push(obj9);
        }
        return items;
      }
    })(closure_2, stateFromStores, treatment).map((type) => {
      if ("label" === type.type) {
        let c0 = true;
      }
      let tmp = outer1_6;
      if ("icon-large" === type.type) {
        closure_1 = closure_1 + 1;
        tmp = outer1_5;
      }
      const obj = {};
      const merged = Object.assign(type);
      obj.height = tmp;
      let num2 = -1;
      if ("label" !== type.type) {
        num2 = tmp;
      }
      obj.width = num2;
      obj.x = 0;
      obj.y = 0;
      return obj;
    });
    let num = 16;
    if (!c0) {
      num = (closure_5 - c1 * closure_5 - (mapped.length - c1) * outer1_6 - 32) / (mapped.length - 1);
    }
    let num4 = 16;
    const iter = mapped[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp7 = nextResult;
      let width = nextResult.width;
      let tmp8 = width;
      if (-1 === width) {
        let tmp9 = outer1_6;
        let tmp10 = closure_5;
        let diff = closure_5 - (32 + (mapped.length - 1) * outer1_6 + (mapped.length - 1) * num);
        tmp8 = diff;
        let tmp12 = nextResult;
        tmp7.width = diff;
      }
      let tmp13 = nextResult;
      let tmp14 = num4;
      let tmp15 = closure_5;
      let tmp16 = tmp8;
      tmp7.x = num4 - closure_5 / 2 + tmp8 / 2;
      num4 = num4 + (tmp8 + num);
      continue;
    }
    return mapped;
  }, items1);
};