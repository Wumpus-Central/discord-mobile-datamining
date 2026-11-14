// discord_app/modules/voice_panel/native/controls/useControlsButtons.tsx
import useCanSpeakInChannelDefault from "../../../stage_channels/useCanSpeakInChannel.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import MobileGoLiveEntrypointExperiment from "../../../go_live/MobileGoLiveEntrypointExperiment.tsx";
import VoicePanelMicButton from "buttons/VoicePanelMicButton.tsx";
import VoicePanelConnectButtonDefault from "buttons/VoicePanelConnectButton.tsx";
import VoicePanelChatButtonDefault from "buttons/VoicePanelChatButton.tsx";
import VoicePanelDisconnectCancelButtonDefault from "buttons/VoicePanelDisconnectCancelButton.tsx";
import VoicePanelVideoButtonDefault from "buttons/VoicePanelVideoButton.tsx";
import VoicePanelSoundboardButtonDefault from "buttons/VoicePanelSoundboardButton.tsx";
import VoicePanelScreenshareButtonDefault from "buttons/VoicePanelScreenshareButton.tsx";
import VoicePanelDrawerToggleButtonDefault from "buttons/VoicePanelDrawerToggleButton.tsx";
import VoicePanelRaiseHandButtonDefault from "buttons/VoicePanelRaiseHandButton.tsx";
import VoicePanelStageAudienceButtonDefault from "buttons/VoicePanelStageAudienceButton.tsx";
import VoicePanelLeaveStageButtonDefault from "buttons/VoicePanelLeaveStageButton.tsx";
import useShowConnectedControlsDefault from "useShowConnectedControls.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

const require = globalThis.__r;
const MobileGoLiveEntrypointExperimentDefault = MobileGoLiveEntrypointExperiment;

const useStateFromSharedValueDefault = tmp(11253);
require = fn;
function getButtons(c1, stateFromStores, c2, memo) {
  if (c1) {
    if (null != memo) {
      let isSpeaker = memo.isSpeaker;
      items = [];
      if (isSpeaker) {
        if (memo.isStageVideoEnabled) {
          const obj2 = { type: "icon-normal", key: "connected-video", render: redux.video };
          items.push(obj2);
        }
        if (!stateFromStores) {
          const obj3 = { type: "icon-normal", key: "connected-mic", render: redux.micConnected };
          items.push(obj3);
        }
        const obj4 = { type: "icon-normal", key: "connected-leave-stage", render: redux.leaveStage };
        items.push(obj4);
        let tmp19 = redux;
      } else {
        const obj5 = { type: "icon-normal", key: "connected-raise-hand", render: null };
        tmp19 = redux;
        obj5.render = redux.raiseHand;
        items.push(obj5);
        const obj6 = { type: "icon-normal", key: "connected-chat", render: redux.chat };
        items.push(obj6);
      }
      if (isSpeaker) {
        isSpeaker = stateFromStores;
      }
      if (isSpeaker) {
        const obj7 = { type: "icon-large", key: "connected-ptt", render: tmp19.ptt };
        items.push(obj7);
      }
      const obj8 = { type: "icon-normal", key: "connected-stage-audience", render: tmp19.stageAudience };
      items.push(obj8);
      const obj9 = { type: "icon-normal", key: "connected-disconnect", render: tmp19.disconnectCancel };
      items.push(obj9);
      let tmp3 = tmp19;
      let arr2 = items;
    }
    if (obj20.isMetaQuest()) {
      const obj10 = { type: "icon-normal", key: "drawer-toggle", render: tmp3.drawerToggle };
      arr2.push(obj10);
    }
    return arr2;
  }
  const items1 = [];
  const push = items1.push;
  if (c1) {
    const obj11 = { type: "icon-normal", key: "connected-video", render: redux.video };
    push(obj11);
    if (!stateFromStores) {
      const obj12 = { type: "icon-normal", key: "connected-mic", render: redux.micConnected };
      items1.push(obj12);
    }
    if (c2 === MobileGoLiveEntrypointExperiment.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT) {
      const obj13 = { type: "icon-normal", key: "connected-screenshare", render: redux.screenshare };
      items1.push(obj13);
    } else {
      const obj14 = { type: "icon-normal", key: "connected-chat", render: redux.chat };
      items1.push(obj14);
    }
    if (stateFromStores) {
      const obj15 = { type: "icon-large", key: "connected-ptt", render: redux.ptt };
      items1.push(obj15);
    }
    if (c2 === MobileGoLiveEntrypointExperiment.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD) {
      const obj16 = { type: "icon-normal", key: "connected-screenshare", render: redux.screenshare };
      items1.push(obj16);
    } else {
      const obj17 = { type: "icon-normal", key: "connected-soundboard", render: redux.soundboard };
      items1.push(obj17);
    }
    const obj18 = { type: "icon-normal", key: "connected-disconnect", render: redux.disconnectCancel };
    items1.push(obj18);
    tmp3 = redux;
    arr2 = items1;
  } else {
    const obj = { type: "icon-normal", key: "disconnected-mute", render: null };
    tmp3 = redux;
    obj.render = redux.mic;
    push(obj);
    const obj19 = { type: "label", key: "disconnected-connect", render: redux.connect };
    items1.push(obj19);
    const obj21 = { type: "icon-normal", key: "disconnected-chat", render: redux.chat };
    items1.push(obj21);
    arr2 = items1;
  }
}
const VoicePanelControlsConstants = fn(11983);
({ CONTROLS_BUTTON_SIZE_LARGE: closure_6, CONTROLS_BUTTON_SIZE_NORMAL: metroImportDefault } =
  VoicePanelControlsConstants);
const InputModes = fn(1072).InputModes;
const jsx = fn(21).jsx;
const redux = {
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
  },
  raiseHand(key, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VoicePanelRaiseHandButtonDefault, {}, key);
  },
  stageAudience(key, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VoicePanelStageAudienceButtonDefault, {}, key);
  },
  leaveStage(key, arg1) {
    const merged = Object.assign(arg1);
    return jsx(VoicePanelLeaveStageButtonDefault, {}, key);
  },
};
let closure_12 = {
  code: "(function useControlsButtonsTsx1(){let[getControlsDefaultWidth,windowDimensions,safeArea]=this.__closure;return getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/useControlsButtons.tsx");

export default function useControlsButtons() {
  const context = stateFromStores.useContext(VoicePanelStateContextDefault);
  const channelId = context.channelId;
  _require = channelId;
  ({ windowDimensions, safeArea } = context);
  const tmp4 = useShowConnectedControlsDefault(channelId);
  importDefault = tmp4;
  const treatment = MobileGoLiveEntrypointExperimentDefault.useConfig({
    location: "VoicePanelControlButtons",
  }).treatment;
  dependencyMap = treatment;
  items = [isSpeaker];
  stateFromStores = require("initialize").useStateFromStores(
    items,
    () => isSpeaker.getMode() === constants.PUSH_TO_TALK,
  );
  const obj3 = require("initialize");
  const items1 = [isStageUnifiedCall];
  const items2 = [channelId];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => ChannelStore.getChannel(c0), items2);
  const obj4 = require("initialize");
  isStageUnifiedCall = require("StageChannelUnifiedCallExperiment").useIsStageUnifiedCall(
    stateFromStores1,
    "VoicePanelControlButtons",
  );
  const tmp9 = useCanSpeakInChannelDefault(channelId);
  isSpeaker = tmp9;
  const obj5 = require("StageChannelUnifiedCallExperiment");
  let guild_id;
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  const isStageVideoEnabled = require("StageMediaHooks").useIsStageVideoEnabled(guild_id);
  const items3 = [isStageUnifiedCall, tmp9, isStageVideoEnabled];
  const memo = obj.useMemo(() => {
    let tmp = null;
    if (isStageUnifiedCall) {
      const obj = { isSpeaker, isStageVideoEnabled };
      tmp = obj;
    }
    return tmp;
  }, items3);
  const obj6 = require("StageMediaHooks");
  const items4 = [closure_12, require("VoicePanelControlsUtils").getControlsDefaultWidth, windowDimensions, safeArea];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp13, tmp14, tmp15, tmp16] = items4;
  function useControlsButtonsTsx1() {
    return _undefined(_undefined2.get().width, _undefined3.get().left, _undefined3.get().right);
  }
  const items5 = [tmp14, tmp15, tmp16];
  useControlsButtonsTsx1.__closure = items5;
  useControlsButtonsTsx1.__workletHash = 5736026634823;
  useControlsButtonsTsx1.__initData = tmp13;
  const derivedValue = require("../../../../../_runtime/metro/01655__.js").useDerivedValue(useControlsButtonsTsx1);
  const tmp18 = useStateFromSharedValueDefault(derivedValue);
  constants = tmp18;
  const items6 = [tmp4, stateFromStores, tmp18, treatment, memo];
  return stateFromStores.useMemo(() => {
    c0 = false;
    closure_1 = 0;
    const mapped = getButtons(c1, stateFromStores, c2, memo).map((type) => {
      if ("label" === type.type) {
        c0 = true;
      }
      let tmp = memo;
      if ("icon-large" === type.type) {
        closure_1 = closure_1 + 1;
        tmp = isStageVideoEnabled;
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
        (closure_8 - closure_1 * timestampProducer - (mapped.length - closure_1) * metroImportDefault - 32) /
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
        let diff = closure_8 - (32 + (mapped.length - 1) * metroImportDefault + (mapped.length - 1) * num);
        tmp8 = diff;
        tmp7.width = diff;
      }
      tmp7.x = num4 - closure_8 / 2 + tmp8 / 2;
      num4 = num4 + (tmp8 + num);
      continue;
    }
    return mapped;
  }, items6);
}
