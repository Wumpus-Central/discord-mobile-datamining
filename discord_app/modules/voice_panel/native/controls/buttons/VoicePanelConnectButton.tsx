// === Module 17186: VoicePanelConnectButton ===

// Module 17186 (VoicePanelConnectButton)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import useAlertStore from "useAlertStore" /* 4906 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5411 */;
import VoicePanelSpoilerAlert from "VoicePanelSpoilerAlert" /* 12933 */;
import VoicePanelNoJoinPermissionsAlert from "VoicePanelNoJoinPermissionsAlert" /* 17187 */;
import VoicePanelMaxCapacityAlert from "VoicePanelMaxCapacityAlert" /* 17190 */;
import VoicePanelNsfwAlert from "VoicePanelNsfwAlert" /* 17191 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const VoicePanelSpoilerAlertDefault = VoicePanelSpoilerAlert;
const VoicePanelNoJoinPermissionsAlertDefault = VoicePanelNoJoinPermissionsAlert;
const VoicePanelMaxCapacityAlertDefault = VoicePanelMaxCapacityAlert;
const VoicePanelNsfwAlertDefault = VoicePanelNsfwAlert;

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { connectButton: null, connectText: null };
createStyles = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360, paddingLeft: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_8 };
createStyles.connectButton = createStyles;
createStyles.connectText = { textAlign: "center" };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelConnectButton.tsx");

export default function ConnectButton(props) {
  let channelId;
  let guildId;
  let canConnect;
  let isChannelSpoilerGated;
  const tmp = isChannelSpoilerGated();
  _require = tmp;
  const context = canConnect.useContext(channelId(guildId[5]));
  channelId = context.channelId;
  guildId = context.guildId;
  const tmp5 = channelId(guildId[6])(channelId);
  canConnect = tmp5.canConnect;
  const isAtMaxCapacity = tmp5.isAtMaxCapacity;
  const items = [isAtMaxCapacity];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const obj2 = require("initialize");
  const tmp2 = channelId;
  let isChannelContentGated = require("AgeGateUtils").useIsChannelContentGated(stateFromStores);
  if (isChannelContentGated) {
    isChannelContentGated = null != guildId;
  }
  if (isChannelContentGated) {
    isChannelContentGated = null != channelId;
  }
  let obj3 = require("AgeGateUtils");
  isChannelSpoilerGated = require("SpoilerChannelUtils").useIsChannelSpoilerGated(stateFromStores);
  if (isChannelSpoilerGated) {
    isChannelSpoilerGated = null != guildId;
  }
  if (isChannelSpoilerGated) {
    isChannelSpoilerGated = null != channelId;
  }
  const items1 = [canConnect, isAtMaxCapacity, channelId, isChannelContentGated, isChannelSpoilerGated, guildId];
  const callback = obj.useCallback(() => {
    if (canConnect) {
      if (!isAtMaxCapacity) {
        if (!isChannelContentGated) {
          if (!isChannelSpoilerGated) {
            let obj = SelectedChannelActionCreatorsDefault;
            const voiceChannel = obj.selectVoiceChannel(channelId);
          }
        }
      }
    }
    if (canConnect) {
      if (isAtMaxCapacity) {
        obj = { channelId };
        useAlertStore.openAlert(VoicePanelMaxCapacityAlert.VOICE_PANEL_MAX_CAPACITY_KEY, jsx(VoicePanelMaxCapacityAlertDefault, { channelId }));
      } else if (isChannelContentGated) {
        obj = { guildId, channelId };
        useAlertStore.openAlert(VoicePanelNsfwAlert.VOICE_PANEL_NSFW_KEY, jsx(VoicePanelNsfwAlertDefault, { guildId, channelId }));
      } else if (isChannelSpoilerGated) {
        let obj1 = { channelId };
        useAlertStore.openAlert(VoicePanelSpoilerAlert.VOICE_PANEL_SPOILER_KEY, jsx(VoicePanelSpoilerAlertDefault, { channelId }));
      }
    } else {
      obj1 = useAlertStore;
      obj1.openAlert(VoicePanelNoJoinPermissionsAlert.VOICE_PANEL_NO_JOIN_PERMS_KEY, jsx(VoicePanelNoJoinPermissionsAlertDefault, {}));
    }
  }, items1);
  const element = { onPress: callback, props: props.props, accessibilityLabel: null, style: null, children: null };
  const tmp6Result = require("SpoilerChannelUtils");
  let intl = tmp6(tmp3[17]).intl;
  element.accessibilityLabel = intl.string(require("util").t["96ANUN"]);
  element.style = tmp.connectButton;
  const items2 = [tmp.connectText];
  element.children = canConnect.useMemo(() => {
    const obj = { variant: "text-sm/semibold", color: "text-overlay-light", style: connectText.connectText, children: null };
    const intl = util.intl;
    obj.children = intl.string(util.t["96ANUN"]);
    return jsx(Text_Text.Text, { variant: "text-sm/semibold", color: "text-overlay-light", style: connectText.connectText, children: null });
  }, items2);
  return isChannelContentGated(tmp2(guildId[16]), element);
};