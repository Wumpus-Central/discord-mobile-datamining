// === Module 17325: useControlsButtons ===

// Module 17325 (useControlsButtons)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import VoicePanelControlsUtils from "VoicePanelControlsUtils" /* 11909 */;
import VoicePanelMicButton from "VoicePanelMicButton" /* 17326 */;
import VoicePanelConnectButtonDefault from "VoicePanelConnectButton" /* 17329 */;
import VoicePanelChatButtonDefault from "VoicePanelChatButton" /* 17335 */;
import VoicePanelDisconnectCancelButtonDefault from "VoicePanelDisconnectCancelButton" /* 17337 */;
import VoicePanelVideoButtonDefault from "VoicePanelVideoButton" /* 17339 */;
import VoicePanelSoundboardButtonDefault from "VoicePanelSoundboardButton" /* 17341 */;
import VoicePanelScreenshareButtonDefault from "VoicePanelScreenshareButton" /* 17343 */;
import VoicePanelDrawerToggleButtonDefault from "VoicePanelDrawerToggleButton" /* 17348 */;
import react from "react" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11900 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let hasOwnProperty;
let metroRequire;
({ CONTROLS_BUTTON_SIZE_LARGE: hasOwnProperty, CONTROLS_BUTTON_SIZE_NORMAL: metroRequire } = VoicePanelControlsConstants);
const InputModes = Constants.InputModes;
const jsx = Fragment.jsx;
let closure_9 = {
  mic(key, arg1) {
    const MicButton = VoicePanelMicButton.MicButton;
    const merged = Object.assign(arg1);
    return <MicButton key={key} />;
  },
  ptt(key, arg1) {
    const PTTButton = VoicePanelMicButton.PTTButton;
    const merged = Object.assign(arg1);
    return <PTTButton key={key} />;
  },
  micConnected(key, arg1) {
    const MicButton = VoicePanelMicButton.MicButton;
    const merged = Object.assign(arg1);
    return <MicButton key={key} />;
  },
  connect(key, arg1) {
    VoicePanelConnectButtonDefault;
    const merged = Object.assign(arg1);
    return <tmp key={key} />;
  },
  chat(key, arg1) {
    VoicePanelChatButtonDefault;
    const merged = Object.assign(arg1);
    return <tmp key={key} />;
  },
  disconnectCancel(key, arg1) {
    VoicePanelDisconnectCancelButtonDefault;
    const merged = Object.assign(arg1);
    return <tmp key={key} />;
  },
  video(key, arg1) {
    VoicePanelVideoButtonDefault;
    const merged = Object.assign(arg1);
    return <tmp key={key} />;
  },
  soundboard(key, arg1) {
    VoicePanelSoundboardButtonDefault;
    const merged = Object.assign(arg1);
    return <tmp key={key} />;
  },
  screenshare(key, arg1) {
    VoicePanelScreenshareButtonDefault;
    const merged = Object.assign(arg1);
    return <tmp key={key} />;
  },
  drawerToggle(key, arg1) {
    VoicePanelDrawerToggleButtonDefault;
    const merged = Object.assign(arg1);
    return <tmp key={key} />;
  }
};
const __initData = { code: "function useControlsButtonsTsx1(){const{getControlsDefaultWidth,windowDimensions,safeArea}=this.__closure;return getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);}" };
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/useControlsButtons.tsx");

export default function useControlsButtons() {
  let closure_2;
  let safeArea;
  let stateFromStores;
  let treatment;
  const context = treatment.useContext(safeArea(11901));
  const windowDimensions = context.windowDimensions;
  safeArea = context.safeArea;
  let tmp2 = safeArea(17190)(context.channelId);
  dependencyMap = tmp2;
  let obj = safeArea(17215);
  treatment = obj.useConfig({ location: "VoicePanelControlButtons" }).treatment;
  let obj2 = windowDimensions(504);
  let items = [stateFromStores];
  stateFromStores = obj2.useStateFromStores(items, () => stateFromStores.getMode() === constants.PUSH_TO_TALK);
  let obj3 = windowDimensions(4612);
  const fn = function o() {
    const getControlsDefaultWidth = VoicePanelControlsUtils.getControlsDefaultWidth;
    VoicePanelControlsUtils;
    const width = windowDimensions.get().width;
    return getControlsDefaultWidth(width, safeArea.get().left, safeArea.get().right);
  };
  let obj4 = { getControlsDefaultWidth: windowDimensions(11909).getControlsDefaultWidth, windowDimensions, safeArea };
  fn.__closure = obj4;
  fn.__workletHash = 16456936876254;
  fn.__initData = __initData;
  const derivedValue = obj3.useDerivedValue(fn);
  const tmp5 = safeArea(7941)(derivedValue);
  let closure_5 = tmp5;
  const items1 = [tmp2, stateFromStores, tmp5, treatment];
  return treatment.useMemo(() => {
    let redux;
    function getButtons(arg0, stateFromStores, treatment) {
      let tmp2;
      const items = [];
      const push = items.push;
      const tmp = arg0;
      if (tmp) {
        const obj2 = { type: "icon-normal", key: "connected-video", render: redux.video };
        push(obj2);
        if (!stateFromStores) {
          const obj3 = { type: "icon-normal", key: "connected-mic", render: redux.micConnected };
          items.push(obj3);
        }
        if (treatment === windowDimensions(closure_1_2[13]).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT) {
          const obj4 = { type: "icon-normal", key: "connected-screenshare", render: redux.screenshare };
          items.push(obj4);
        } else {
          const obj5 = { type: "icon-normal", key: "connected-chat", render: redux.chat };
          items.push(obj5);
        }
        if (stateFromStores) {
          const obj6 = { type: "icon-large", key: "connected-ptt", render: redux.ptt };
          items.push(obj6);
        }
        if (treatment === windowDimensions(closure_1_2[13]).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD) {
          const obj7 = { type: "icon-normal", key: "connected-screenshare", render: redux.screenshare };
          items.push(obj7);
        } else {
          const obj8 = { type: "icon-normal", key: "connected-soundboard", render: redux.soundboard };
          items.push(obj8);
        }
        const obj9 = { type: "icon-normal", key: "connected-disconnect", render: redux.disconnectCancel };
        items.push(obj9);
        tmp2 = redux;
      } else {
        tmp2 = redux;
        const obj = { type: "icon-normal", key: "disconnected-mute", render: redux.mic };
        push(obj);
        const obj10 = { type: "label", key: "disconnected-connect", render: redux.connect };
        items.push(obj10);
        const obj11 = { type: "icon-normal", key: "disconnected-chat", render: redux.chat };
        items.push(obj11);
      }
      const obj12 = windowDimensions(closure_1_2[14]);
      if (obj12.isMetaQuest()) {
        const obj13 = { type: "icon-normal", key: "drawer-toggle", render: tmp2.drawerToggle };
        items.push(obj13);
      }
      return items;
    }
    let c0 = false;
    let closure_1 = 0;
    const arr = getButtons(closure_2, stateFromStores, treatment);
    const mapped = arr.map((type) => {
      let num2;
      if ("label" === type.type) {
        c0 = true;
      }
      let tmp = closure_2_6;
      if ("icon-large" === type.type) {
        closure_1 = closure_1 + 1;
        tmp = closure_2_5;
      }
      const obj = { height: tmp, width: num2, x: 0, y: 0 };
      const merged = Object.assign(type);
      num2 = -1;
      if ("label" !== type.type) {
        num2 = tmp;
      }
      return obj;
    });
    let num = 16;
    if (!c0) {
      let tmp2 = closure_1;
      let num2 = 1;
      num = (hasOwnProperty - closure_1 * hasOwnProperty - (mapped.length - closure_1) * metroRequire - 32) / (mapped.length - 1);
    }
    let num4 = 16;
    const iter = mapped[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp7 = nextResult;
      let width = nextResult.width;
      let tmp8 = width;
      if (-1 === width) {
        let diff = hasOwnProperty - (32 + (mapped.length - 1) * metroRequire + (mapped.length - 1) * num);
        tmp8 = diff;
        tmp7.width = diff;
      }
      tmp7.x = num4 - hasOwnProperty / 2 + tmp8 / 2;
      num4 = num4 + (tmp8 + num);
      continue;
    }
    return mapped;
  }, items1);
};