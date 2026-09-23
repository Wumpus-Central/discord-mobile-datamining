// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelConnectButton.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import useAlertStore from "../../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import SelectedChannelActionCreatorsDefault from "../../../../../actions/SelectedChannelActionCreators.tsx";
import StageChannelModalActionCreators from "../../../../stage_channels/StageChannelModalActionCreators.tsx";
import VoicePanelSpoilerAlert from "../../../../spoiler_channels/native/VoicePanelSpoilerAlert.tsx";
import VoicePanelNoJoinPermissionsAlert from "../../alerts/VoicePanelNoJoinPermissionsAlert.tsx";
import VoicePanelMaxCapacityAlert from "../../alerts/VoicePanelMaxCapacityAlert.tsx";
import VoicePanelNsfwAlert from "../../alerts/VoicePanelNsfwAlert.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

const require = globalThis.__r;
const VoicePanelSpoilerAlertDefault = VoicePanelSpoilerAlert;
const VoicePanelNoJoinPermissionsAlertDefault = VoicePanelNoJoinPermissionsAlert;
const VoicePanelMaxCapacityAlertDefault = VoicePanelMaxCapacityAlert;
const VoicePanelNsfwAlertDefault = VoicePanelNsfwAlert;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4827);
let obj2 = {
  connectButton: {
    backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360,
    paddingLeft: nativeDefault.space.PX_8,
    paddingRight: nativeDefault.space.PX_8,
  },
  connectText: { textAlign: "center" },
};
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelConnectButton.tsx");

export default function ConnectButton(props) {
  let channelId;
  let guildId;
  let canConnect;
  let stateFromStores;
  c6 = undefined;
  closure_7 = undefined;
  closure_8 = undefined;
  let onConnect;
  const tmp = c6();
  _require = tmp;
  const context = canConnect.useContext(channelId(guildId[5]));
  channelId = context.channelId;
  guildId = context.guildId;
  const tmp5 = channelId(guildId[6])(channelId);
  canConnect = tmp5.canConnect;
  let isAtMaxCapacity = tmp5.isAtMaxCapacity;
  const items = [stateFromStores];
  stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  if (isAtMaxCapacity) {
    let isGuildStageVoiceResult;
    if (stateFromStores != null) {
      isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
    }
    isAtMaxCapacity = !isGuildStageVoiceResult;
  }
  const intl = tmp6(tmp3[8]).intl;
  let isGuildStageVoiceResult1;
  if (stateFromStores != null) {
    isGuildStageVoiceResult1 = stateFromStores.isGuildStageVoice();
  }
  const t = tmp6(tmp3[8]).t;
  const stringResult = intl.string(isGuildStageVoiceResult1 ? t["7vb2cc"] : t["96ANUN"]);
  c6 = stringResult;
  let obj2 = require("initialize");
  const tmp2 = channelId;
  const tmp11 =
    require("AgeGateUtils").useIsChannelContentGated(stateFromStores) && null != guildId && null != channelId;
  closure_7 = tmp11;
  const tmp6Result = require("AgeGateUtils");
  const tmp12 =
    require("SpoilerChannelUtils").useIsChannelSpoilerGated(stateFromStores) && null != guildId && null != channelId;
  closure_8 = tmp12;
  const items1 = [stateFromStores, channelId];
  onConnect = obj.useCallback(() => {
    let isGuildStageVoiceResult;
    if (stateFromStores != null) {
      isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      StageChannelModalActionCreators.connectAndOpen(stateFromStores);
    } else {
      const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channelId);
    }
  }, items1);
  const items2 = [canConnect, isAtMaxCapacity, channelId, tmp11, tmp12, guildId, onConnect];
  const callback1 = obj.useCallback(() => {
    if (canConnect) {
      if (!isAtMaxCapacity) {
        if (!closure_7) {
          if (!closure_8) {
            onConnect();
          }
        }
      }
    }
    if (canConnect) {
      if (isAtMaxCapacity) {
        const obj3 = { channelId };
        useAlertStore.openAlert(
          VoicePanelMaxCapacityAlert.VOICE_PANEL_MAX_CAPACITY_KEY,
          jsx(VoicePanelMaxCapacityAlertDefault, { channelId }),
        );
      } else if (closure_7) {
        const obj5 = { guildId, onConnect };
        useAlertStore.openAlert(
          VoicePanelNsfwAlert.VOICE_PANEL_NSFW_KEY,
          jsx(VoicePanelNsfwAlertDefault, { guildId, onConnect }),
        );
      } else if (closure_8) {
        const obj7 = { channelId, onConnect };
        useAlertStore.openAlert(
          VoicePanelSpoilerAlert.VOICE_PANEL_SPOILER_KEY,
          jsx(VoicePanelSpoilerAlertDefault, { channelId, onConnect }),
        );
      }
    } else {
      useAlertStore.openAlert(
        VoicePanelNoJoinPermissionsAlert.VOICE_PANEL_NO_JOIN_PERMS_KEY,
        jsx(VoicePanelNoJoinPermissionsAlertDefault, {}),
      );
    }
  }, items2);
  const element = {
    onPress: callback1,
    props: props.props,
    accessibilityLabel: stringResult,
    style: tmp.connectButton,
    children: null,
  };
  const items3 = [stringResult, tmp.connectText];
  const tmp6Result2 = require("SpoilerChannelUtils");
  element.children = canConnect.useMemo(
    () =>
      jsx(Text_Text.Text, {
        variant: "text-sm/semibold",
        color: "text-overlay-light",
        style: connectText.connectText,
        children,
      }),
    items3,
  );
  return isAtMaxCapacity(tmp2(guildId[18]), element);
}
