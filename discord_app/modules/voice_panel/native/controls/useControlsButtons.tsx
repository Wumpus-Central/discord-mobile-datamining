// discord_app/modules/voice_panel/native/controls/useControlsButtons.tsx
import VoicePanelControlsUtils from "../utils/VoicePanelControlsUtils.tsx";
import VoicePanelMicButton from "buttons/VoicePanelMicButton.tsx";
import VoicePanelConnectButtonDefault from "buttons/VoicePanelConnectButton.tsx";
import VoicePanelChatButtonDefault from "buttons/VoicePanelChatButton.tsx";
import VoicePanelDisconnectCancelButtonDefault from "buttons/VoicePanelDisconnectCancelButton.tsx";
import VoicePanelVideoButtonDefault from "buttons/VoicePanelVideoButton.tsx";
import VoicePanelSoundboardButtonDefault from "buttons/VoicePanelSoundboardButton.tsx";
import VoicePanelScreenshareButtonDefault from "buttons/VoicePanelScreenshareButton.tsx";
import VoicePanelDrawerToggleButtonDefault from "buttons/VoicePanelDrawerToggleButton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

require = fn;
const VoicePanelControlsConstants = fn(12271);
({ CONTROLS_BUTTON_SIZE_LARGE: hasOwnProperty, CONTROLS_BUTTON_SIZE_NORMAL: metroRequire } =
  VoicePanelControlsConstants);
const InputModes = fn(1074).InputModes;
const jsx = fn(21).jsx;
let closure_9 = {
  mic(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VoicePanelMicButton.MicButton, {}, arg0);
  },
  ptt(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VoicePanelMicButton.PTTButton, {}, arg0);
  },
  micConnected(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VoicePanelMicButton.MicButton, {}, arg0);
  },
  connect(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VoicePanelConnectButtonDefault, {}, arg0);
  },
  chat(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VoicePanelChatButtonDefault, {}, arg0);
  },
  disconnectCancel(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VoicePanelDisconnectCancelButtonDefault, {}, arg0);
  },
  video(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VoicePanelVideoButtonDefault, {}, arg0);
  },
  soundboard(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VoicePanelSoundboardButtonDefault, {}, arg0);
  },
  screenshare(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VoicePanelScreenshareButtonDefault, {}, arg0);
  },
  drawerToggle(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VoicePanelDrawerToggleButtonDefault, {}, arg0);
  },
};
const __initData = {
  code: "function useControlsButtonsTsx1(){const{getControlsDefaultWidth,windowDimensions,safeArea}=this.__closure;return getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);}",
};
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
  stateFromStores = windowDimensions(504).useStateFromStores(
    items,
    () => stateFromStores.getMode() === constants.PUSH_TO_TALK,
  );
  let obj2 = windowDimensions(504);
  const fn = function o() {
    return VoicePanelControlsUtils.getControlsDefaultWidth(
      windowDimensions.get().width,
      safeArea.get().left,
      safeArea.get().right,
    );
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
    const mapped = (function getButtons(arg0, stateFromStores, treatment) {
      const items = [];
      const push = items.push;
      if (arg0) {
        let obj = { type: "icon-normal", key: "connected-video", render: redux.video };
        push(obj);
        if (!stateFromStores) {
          obj = { type: "icon-normal", key: "connected-mic", render: tmp6.micConnected };
          items.push(obj);
        }
        if (treatment === _true(17101).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT) {
          const obj1 = { type: "icon-normal", key: "connected-screenshare", render: tmp6.screenshare };
          items.push(obj1);
        } else {
          const obj2 = { type: "icon-normal", key: "connected-chat", render: tmp6.chat };
          items.push(obj2);
        }
        if (stateFromStores) {
          const obj3 = { type: "icon-large", key: "connected-ptt", render: tmp6.ptt };
          items.push(obj3);
        }
        if (treatment === tmp10(17101).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD) {
          const obj4 = { type: "icon-normal", key: "connected-screenshare", render: tmp6.screenshare };
          items.push(obj4);
        } else {
          const obj5 = { type: "icon-normal", key: "connected-soundboard", render: tmp6.soundboard };
          items.push(obj5);
        }
        const obj6 = { type: "icon-normal", key: "connected-disconnect", render: redux.disconnectCancel };
        items.push(obj6);
        tmp10 = _true;
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
      num =
        (closure_5 - closure_1 * hasOwnProperty - (mapped.length - closure_1) * timestampProducer - 32) /
        (mapped.length - 1);
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
}
