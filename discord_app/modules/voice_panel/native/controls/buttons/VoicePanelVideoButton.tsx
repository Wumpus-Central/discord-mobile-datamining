// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelVideoButton.tsx
import ManaContext from "../../../../../../discord_common/js/packages/design/native.tsx";
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../video_calls/native/ChannelCallLifecycleStore.tsx";
import closure_6 from "../../../../../stores/ChannelStore.tsx";
import closure_7 from "../../../../../stores/GuildStore.tsx";
import closure_8 from "../../../../../stores/MediaEngineStore.tsx";
import closure_9 from "../../../../../stores/PermissionStore.tsx";
import { Features } from "../../../../../../discord_common/js/packages/media-engine/Constants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
function VideoButtonRive(arg0) {
  ({ isVideoEnabled, color } = arg0);
  let obj = { style: { width: 24, height: 24, pointerEvents: "none" }, children: null };
  obj = { dataBinding: { fill: color, on: isVideoEnabled }, defaultViewModelInstance: null, fallback: null };
  let str = "CamOff";
  if (isVideoEnabled) {
    str = "CamOn";
  }
  obj[1] = str;
  if (isVideoEnabled) {
    let VideoSlashIcon = tmp3(8037).VideoIcon;
  } else {
    VideoSlashIcon = tmp3(12201).VideoSlashIcon;
  }
  obj[2] = <VideoSlashIcon color={color} />;
  obj[1] = jsx(ManaContext.CameraRive, { dataBinding: { fill: color, on: isVideoEnabled }, defaultViewModelInstance: null, fallback: null });
  return <View dataBinding={{ fill: color, on: isVideoEnabled }} defaultViewModelInstance={null} fallback={null} />;
}
let result = require("set").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelVideoButton.tsx");

export default function VideoButton(arg0) {
  let channelId;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores2;
  let color;
  let obj = stateFromStores2;
  ({ props, wrapperSpecs } = arg0);
  channelId = stateFromStores2.useContext(stateFromStores(stateFromStores1[9])).channelId;
  const voicePanelButtonStyles = channelId(stateFromStores1[10]).useVoicePanelButtonStyles(wrapperSpecs);
  let obj2 = channelId(stateFromStores1[10]);
  let tmp = stateFromStores;
  const items = [closure_7, closure_9, closure_6];
  stateFromStores = channelId(stateFromStores1[11]).useStateFromStores(items, () => {
    const channel = closure_1_6.getChannel(channelId);
    let tmp = null != channel;
    if (tmp) {
      let isPrivateResult = channel.isPrivate();
      if (!isPrivateResult) {
        const obj2 = channelId(stateFromStores1[12]);
        isPrivateResult = obj2.canStreamInChannel(channel, closure_1_7, closure_1_9, false);
      }
      tmp = isPrivateResult;
    }
    return tmp;
  });
  let obj3 = channelId(stateFromStores1[11]);
  const items1 = [closure_8];
  stateFromStores1 = channelId(stateFromStores1[11]).useStateFromStores(items1, () => closure_8.isVideoEnabled());
  const obj4 = channelId(stateFromStores1[11]);
  const items2 = [closure_8];
  stateFromStores2 = channelId(stateFromStores1[11]).useStateFromStores(items2, () => closure_8.supports(constants.VIDEO));
  const items3 = [channelId, stateFromStores1, stateFromStores, stateFromStores2];
  if (stateFromStores2) {
    if (stateFromStores1) {
      let color2 = voicePanelButtonStyles.iconFillSelected.color;
    } else {
      color2 = voicePanelButtonStyles.iconFill.color;
    }
  } else {
    color = voicePanelButtonStyles.iconFillMuted.color;
    obj = { onPress: null, disabled: null, props: null, accessibilityLabel: null, style: null, children: null };
    obj[0] = tmp8;
    obj[1] = !stateFromStores2;
    obj[2] = props;
    const intl = tmp3(tmp2[18]).intl;
    const string = intl.string;
    const t = tmp3(tmp2[18]).t;
    if (stateFromStores1) {
      let stringResult = string(t.EnX2Jl);
    } else {
      stringResult = string(t["v8K+8W"]);
    }
    obj[3] = stringResult;
    obj[4] = stateFromStores1 ? voicePanelButtonStyles.iconBgSelected : voicePanelButtonStyles.iconBg;
    const items4 = [color, stateFromStores1];
    obj[5] = obj.useMemo(() => closure_1_11(closure_1_12, { isVideoEnabled: stateFromStores1, color }), items4);
    return jsx(tmp(tmp2[17]), { onPress: null, disabled: null, props: null, accessibilityLabel: null, style: null, children: null });
  }
};