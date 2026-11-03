// === Module 19466: useControlsButtons ===

// Module 19466 (useControlsButtons)
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11359 */;
import MobileGoLiveEntrypointExperimentDefault from "MobileGoLiveEntrypointExperiment" /* 19373 */;
import VoicePanelMicButton from "VoicePanelMicButton" /* 19467 */;
import VoicePanelConnectButtonDefault from "VoicePanelConnectButton" /* 19470 */;
import VoicePanelChatButtonDefault from "VoicePanelChatButton" /* 19476 */;
import VoicePanelDisconnectCancelButtonDefault from "VoicePanelDisconnectCancelButton" /* 19478 */;
import VoicePanelVideoButtonDefault from "VoicePanelVideoButton" /* 19480 */;
import VoicePanelSoundboardButtonDefault from "VoicePanelSoundboardButton" /* 19482 */;
import VoicePanelScreenshareButtonDefault from "VoicePanelScreenshareButton" /* 19484 */;
import VoicePanelDrawerToggleButtonDefault from "VoicePanelDrawerToggleButton" /* 19489 */;
import useShowConnectedControlsDefault from "useShowConnectedControls" /* 19490 */;
import noop from "module_19" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 2135 */;

const require = globalThis.__r;

const useStateFromSharedValueDefault = tmp(8965);
require = fn;
const VoicePanelControlsConstants = fn(11358);
({ CONTROLS_BUTTON_SIZE_LARGE: hasOwnProperty, CONTROLS_BUTTON_SIZE_NORMAL: metroRequire } = VoicePanelControlsConstants);
const InputModes = fn(1072).InputModes;
const jsx = fn(21).jsx;
let closure_9 = {
  mic(key, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VoicePanelMicButton.MicButton, {}, key);
  },
  ptt(key, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VoicePanelMicButton.PTTButton, {}, key);
  },
  micConnected(key, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VoicePanelMicButton.MicButton, {}, key);
  },
  connect(key, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VoicePanelConnectButtonDefault, {}, key);
  },
  chat(key, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VoicePanelChatButtonDefault, {}, key);
  },
  disconnectCancel(key, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VoicePanelDisconnectCancelButtonDefault, {}, key);
  },
  video(key, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VoicePanelVideoButtonDefault, {}, key);
  },
  soundboard(key, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VoicePanelSoundboardButtonDefault, {}, key);
  },
  screenshare(key, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VoicePanelScreenshareButtonDefault, {}, key);
  },
  drawerToggle(key, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VoicePanelDrawerToggleButtonDefault, {}, key);
  }
};
let closure_10 = { code: "(function useControlsButtonsTsx1(){let[getControlsDefaultWidth,windowDimensions,safeArea]=this.__closure;return getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/useControlsButtons.tsx");

export default function useControlsButtons() {
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ channelId, windowDimensions, safeArea } = context);
  const tmp4 = useShowConnectedControlsDefault(channelId);
  _require = tmp4;
  const treatment = MobileGoLiveEntrypointExperimentDefault.useConfig({ location: "VoicePanelControlButtons" }).treatment;
  importDefault = treatment;
  let obj = noop;
  items = [MediaEngineStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => mode.getMode() === constants.PUSH_TO_TALK);
  let obj3 = require("initialize");
  const items1 = [closure_10, require("VoicePanelControlsUtils").getControlsDefaultWidth, windowDimensions, safeArea];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp6, tmp7, tmp8, tmp9] = items1;
  function useControlsButtonsTsx1() {
    return _undefined(_undefined2.get().width, _undefined3.get().left, _undefined3.get().right);
  }
  const items2 = [tmp7, tmp8, tmp9];
  useControlsButtonsTsx1.__closure = items2;
  useControlsButtonsTsx1.__workletHash = 5736026634823;
  useControlsButtonsTsx1.__initData = tmp6;
  const derivedValue = require("module_1652").useDerivedValue(useControlsButtonsTsx1);
  const tmp11 = useStateFromSharedValueDefault(derivedValue);
  noop = tmp11;
  const items3 = [tmp4, stateFromStores, tmp11, treatment];
  return obj.useMemo(() => {
    c0 = false;
    closure_1 = 0;
    const mapped = (function getButtons(c0, c2, c1) {
      items = [];
      const push = items.push;
      if (c0) {
        const obj2 = { type: "icon-normal", key: "connected-video", render: redux.video };
        push(obj2);
        if (!c2) {
          const obj3 = { type: "icon-normal", key: "connected-mic", render: redux.micConnected };
          items.push(obj3);
        }
        if (c1 === _true(19373).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT) {
          const obj4 = { type: "icon-normal", key: "connected-screenshare", render: redux.screenshare };
          items.push(obj4);
        } else {
          const obj5 = { type: "icon-normal", key: "connected-chat", render: redux.chat };
          items.push(obj5);
        }
        if (c2) {
          const obj6 = { type: "icon-large", key: "connected-ptt", render: redux.ptt };
          items.push(obj6);
        }
        if (c1 === _true(19373).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD) {
          const obj7 = { type: "icon-normal", key: "connected-screenshare", render: redux.screenshare };
          items.push(obj7);
        } else {
          const obj8 = { type: "icon-normal", key: "connected-soundboard", render: redux.soundboard };
          items.push(obj8);
        }
        const obj9 = { type: "icon-normal", key: "connected-disconnect", render: redux.disconnectCancel };
        items.push(obj9);
      } else {
        const obj = { type: "icon-normal", key: "disconnected-mute", render: redux.mic };
        push(obj);
        const obj10 = { type: "label", key: "disconnected-connect", render: redux.connect };
        items.push(obj10);
        const obj11 = { type: "icon-normal", key: "disconnected-chat", render: redux.chat };
        items.push(obj11);
        if (obj12.isMetaQuest()) {
          const obj13 = { type: "icon-normal", key: "drawer-toggle", render: redux.drawerToggle };
          items.push(obj13);
        }
        return items;
      }
    })(c0, c2, c1).map((type) => {
      if ("label" === type.type) {
        c0 = true;
      }
      let tmp = closure_2_6;
      if ("icon-large" === type.type) {
        closure_1 = closure_1 + 1;
        tmp = closure_2_5;
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
      num = (closure_3 - closure_1 * hasOwnProperty - (mapped.length - closure_1) * timestampProducer - 32) / (mapped.length - 1);
    }
    let num4 = 16;
    const iter = mapped[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp7 = nextResult;
      let width = nextResult.width;
      let tmp8 = width;
      if (-1 === width) {
        let diff = closure_3 - (32 + (mapped.length - 1) * timestampProducer + (mapped.length - 1) * num);
        tmp8 = diff;
        tmp7.width = diff;
      }
      tmp7.x = num4 - closure_3 / 2 + tmp8 / 2;
      num4 = num4 + (tmp8 + num);
      continue;
    }
    return mapped;
  }, items3);
};