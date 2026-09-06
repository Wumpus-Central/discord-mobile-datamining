// === Module 17182: useControlsButtons ===

// Module 17182 (useControlsButtons)
import VoicePanelControlsUtils from "VoicePanelControlsUtils" /* 12279 */;
import VoicePanelMicButton from "VoicePanelMicButton" /* 17183 */;
import VoicePanelConnectButtonDefault from "VoicePanelConnectButton" /* 17186 */;
import VoicePanelChatButtonDefault from "VoicePanelChatButton" /* 17192 */;
import VoicePanelDisconnectCancelButtonDefault from "VoicePanelDisconnectCancelButton" /* 17194 */;
import VoicePanelVideoButtonDefault from "VoicePanelVideoButton" /* 17196 */;
import VoicePanelSoundboardButtonDefault from "VoicePanelSoundboardButton" /* 17198 */;
import VoicePanelScreenshareButtonDefault from "VoicePanelScreenshareButton" /* 17200 */;
import VoicePanelDrawerToggleButtonDefault from "VoicePanelDrawerToggleButton" /* 17205 */;
import noop from "module_19" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

require = fn;
const VoicePanelControlsConstants = fn(12271);
({ CONTROLS_BUTTON_SIZE_LARGE: hasOwnProperty, CONTROLS_BUTTON_SIZE_NORMAL: metroRequire } = VoicePanelControlsConstants);
const InputModes = fn(1074).InputModes;
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
const __initData = { code: "function useControlsButtonsTsx1(){const{getControlsDefaultWidth,windowDimensions,safeArea}=this.__closure;return getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/useControlsButtons.tsx");

export default function useControlsButtons() {
  const context = treatment.useContext(safeArea(12272));
  const windowDimensions = context.windowDimensions;
  safeArea = context.safeArea;
  const tmp2 = safeArea(17037)(context.channelId);
  dependencyMap = tmp2;
  let obj = safeArea(17101);
  treatment = obj.useConfig({ location: "VoicePanelControlButtons" }).treatment;
  let items = [stateFromStores];
  stateFromStores = windowDimensions(504).useStateFromStores(items, () => stateFromStores.getMode() === constants.PUSH_TO_TALK);
  let obj2 = windowDimensions(504);
  const fn = function o() {
    return VoicePanelControlsUtils.getControlsDefaultWidth(windowDimensions.get().width, safeArea.get().left, safeArea.get().right);
  };
  obj = { getControlsDefaultWidth: windowDimensions(12279).getControlsDefaultWidth, windowDimensions, safeArea };
  fn.__closure = obj;
  fn.__workletHash = 16456936876254;
  fn.__initData = __initData;
  const derivedValue = windowDimensions(4296).useDerivedValue(fn);
  const tmp5 = safeArea(8265)(derivedValue);
  closure_5 = tmp5;
  const items1 = [tmp2, stateFromStores, tmp5, treatment];
  return treatment.useMemo(() => {
    c0 = false;
    closure_1 = 0;
    const mapped = (function getButtons(dependencyMap, stateFromStores, treatment) {
      const items = [];
      const push = items.push;
      if (dependencyMap) {
        let obj = { type: "icon-normal", key: "connected-video", render: redux.video };
        push(obj);
        if (!stateFromStores) {
          obj = { type: "icon-normal", key: "connected-mic", render: redux.micConnected };
          items.push(obj);
        }
        if (treatment === _true(17101).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT) {
          const obj1 = { type: "icon-normal", key: "connected-screenshare", render: redux.screenshare };
          items.push(obj1);
        } else {
          const obj2 = { type: "icon-normal", key: "connected-chat", render: redux.chat };
          items.push(obj2);
        }
        if (stateFromStores) {
          const obj3 = { type: "icon-large", key: "connected-ptt", render: redux.ptt };
          items.push(obj3);
        }
        if (treatment === _true(17101).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD) {
          const obj4 = { type: "icon-normal", key: "connected-screenshare", render: redux.screenshare };
          items.push(obj4);
        } else {
          const obj5 = { type: "icon-normal", key: "connected-soundboard", render: redux.soundboard };
          items.push(obj5);
        }
        const obj6 = { type: "icon-normal", key: "connected-disconnect", render: redux.disconnectCancel };
        items.push(obj6);
      } else {
        obj = { type: "icon-normal", key: "disconnected-mute", render: redux.mic };
        push(obj);
        const obj7 = { type: "label", key: "disconnected-connect", render: redux.connect };
        items.push(obj7);
        const obj8 = { type: "icon-normal", key: "disconnected-chat", render: redux.chat };
        items.push(obj8);
        if (obj12.isMetaQuest()) {
          const obj9 = { type: "icon-normal", key: "drawer-toggle", render: redux.drawerToggle };
          items.push(obj9);
        }
        return items;
      }
    })(dependencyMap, stateFromStores, treatment).map((type) => {
      if ("label" === type.type) {
        c0 = true;
      }
      let tmp = closure_2_6;
      if ("icon-large" === type.type) {
        closure_1 = closure_1 + 1;
        tmp = closure_5;
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
      num = (closure_5 - closure_1 * hasOwnProperty - (mapped.length - closure_1) * timestampProducer - 32) / (mapped.length - 1);
    }
    let num4 = 16;
    const iter = mapped[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp7 = nextResult;
      let width = nextResult.width;
      let tmp8 = width;
      if (-1 === width) {
        let diff = closure_5 - (32 + (mapped.length - 1) * timestampProducer + (mapped.length - 1) * num);
        tmp8 = diff;
        tmp7.width = diff;
      }
      tmp7.x = num4 - closure_5 / 2 + tmp8 / 2;
      num4 = num4 + (tmp8 + num);
      continue;
    }
    return mapped;
  }, items1);
};