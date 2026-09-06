// discord_app/modules/voice_panel/native/controls/useControlsButtons.tsx
import PTTButton from "buttons/VoicePanelMicButton.tsx";
import ConnectButtonDefault from "buttons/VoicePanelConnectButton.tsx";
import ChatButtonDefault from "buttons/VoicePanelChatButton.tsx";
import DisconnectCancelButtonDefault from "buttons/VoicePanelDisconnectCancelButton.tsx";
import VideoButtonRiveDefault from "buttons/VoicePanelVideoButton.tsx";
import SoundboardButtonDefault from "buttons/VoicePanelSoundboardButton.tsx";
import MobilePhoneShareIconDefault from "buttons/VoicePanelScreenshareButton.tsx";
import VoicePanelDrawerToggleButtonDefault from "buttons/VoicePanelDrawerToggleButton.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../../stores/MediaEngineStore.tsx";
import VoicePanelControlsModes from "VoicePanelControlsConstants.tsx";
import { InputModes } from "../../../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
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
    return jsx(ConnectButtonDefault, {}, arg0);
  },
  chat(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(ChatButtonDefault, {}, arg0);
  },
  disconnectCancel(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(DisconnectCancelButtonDefault, {}, arg0);
  },
  video(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VideoButtonRiveDefault, {}, arg0);
  },
  soundboard(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(SoundboardButtonDefault, {}, arg0);
  },
  screenshare(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(MobilePhoneShareIconDefault, {}, arg0);
  },
  drawerToggle(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VoicePanelDrawerToggleButtonDefault, {}, arg0);
  },
};
let closure_10 = {
  code: "function useControlsButtonsTsx1(){const{getControlsDefaultWidth,windowDimensions,safeArea}=this.__closure;return getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);}",
};
const result = require("set").fileFinishedImporting("modules/voice_panel/native/controls/useControlsButtons.tsx");

export default function useControlsButtons() {
  const context = treatment.useContext(safeArea(12272));
  const windowDimensions = context.windowDimensions;
  safeArea = context.safeArea;
  const tmp2 = safeArea(17037)(context.channelId);
  dependencyMap = tmp2;
  let obj = safeArea(17101);
  treatment = obj.useConfig({ location: "VoicePanelControlButtons" }).treatment;
  let items = [stateFromStores];
  stateFromStores = windowDimensions(504).useStateFromStores(
    items,
    () => stateFromStores.getMode() === constants.PUSH_TO_TALK,
  );
  let obj2 = windowDimensions(504);
  const fn = function o() {
    return windowDimensions(table[19]).getControlsDefaultWidth(
      windowDimensions.get().width,
      safeArea.get().left,
      safeArea.get().right,
    );
  };
  obj = { getControlsDefaultWidth: windowDimensions(12279).getControlsDefaultWidth, windowDimensions, safeArea };
  fn.__closure = obj;
  fn.__workletHash = 16456936876254;
  fn.__initData = closure_10;
  const derivedValue = windowDimensions(4296).useDerivedValue(fn);
  const tmp5 = safeArea(8265)(derivedValue);
  closure_5 = tmp5;
  const items1 = [tmp2, stateFromStores, tmp5, treatment];
  return treatment.useMemo(() => {
    c0 = false;
    c1 = 0;
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
        if (treatment === callback(17101).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT) {
          obj1 = { type: "icon-normal", key: "connected-screenshare", render: null };
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
        if (treatment === tmp10(17101).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD) {
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
        c0 = true;
      }
      let tmp = closure_1_6;
      if ("icon-large" === type.type) {
        closure_1 = closure_1 + 1;
        tmp = closure_1_5;
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
      num = (closure_5 - c1 * closure_5 - (mapped.length - c1) * closure_1_6 - 32) / (mapped.length - 1);
    }
    let num4 = 16;
    const iter = mapped[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp7 = nextResult;
      let width = nextResult.width;
      let tmp8 = width;
      if (-1 === width) {
        let tmp9 = closure_1_6;
        let tmp10 = closure_5;
        let diff = closure_5 - (32 + (mapped.length - 1) * closure_1_6 + (mapped.length - 1) * num);
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
}
