// === Module 19594: VoicePanelScreenshareButton ===

// Module 19594 (VoicePanelScreenshareButton)
import util from "util" /* 1112 */;
import NativeViewDefault from "NativeView" /* 7055 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11789 */;
import useVoicePanelScreenshareToggleDefault from "useVoicePanelScreenshareToggle" /* 18207 */;
import VoicePanelStyles from "VoicePanelStyles" /* 19580 */;
import VoicePanelAnimatedButtonWrapperDefault from "VoicePanelAnimatedButtonWrapper" /* 19581 */;
import MobilePhoneDenyIcon2 from "MobilePhoneDenyIcon" /* 19595 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4892 */;

require = fn;
function ScreenshareButtonInner(arg0) {
  ({ props, wrapperSpecs, channel } = arg0);
  const tmp = closure_7();
  const voicePanelButtonStyles = VoicePanelStyles.useVoicePanelButtonStyles(wrapperSpecs);
  const tmp6 = useVoicePanelScreenshareToggleDefault(channel, "VoicePanelScreenshareButton", "connected button");
  ({ isActive, videoBlocked } = tmp6);
  let tmp7 = !videoBlocked;
  if (!videoBlocked) {
    tmp7 = !tmp6.isFeatureEnabled;
  }
  if (tmp7) {
    let color = voicePanelButtonStyles.iconFillMuted.color;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  if (isActive) {
    color = voicePanelButtonStyles.iconFillSelected.color;
  }
  if (videoBlocked) {
    let MobilePhoneDenyIcon = MobilePhoneDenyIcon2.MobilePhoneDenyIcon;
  } else {
    MobilePhoneDenyIcon = MobilePhoneShareIcon;
  }
  const element = { onPress: tmp6.onPress, disabled: tmp7, props, accessibilityLabel: null, style: null, children: null };
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (isActive) {
    let stringResult = string(t.CpkXwZ);
  } else {
    stringResult = string(t.fjBNo1);
  }
  element.accessibilityLabel = stringResult;
  let iconBgSelected;
  if (isActive) {
    iconBgSelected = voicePanelButtonStyles.iconBgSelected;
  }
  element.style = iconBgSelected;
  const obj2 = { style: tmp.iconContainer, children: null };
  const tmp5Result = VoicePanelAnimatedButtonWrapperDefault;
  obj2.children = <MobilePhoneDenyIcon color={color} />;
  element.children = jsx(NativeViewDefault, { style: tmp.iconContainer, children: null });
  return <tmp5Result onPress={tmp6.onPress} disabled={tmp7} props={props} accessibilityLabel={null} style={null}>{null}</tmp5Result>;
}
const jsx = fn(21).jsx;
const MetaQuestUtils = fn(1626);
if (MetaQuestUtils.isMetaQuest()) {
  let MobilePhoneShareIcon = fn(13527).ScreenArrowIcon;
} else {
  MobilePhoneShareIcon = fn(18213).MobilePhoneShareIcon;
}
const createStyles = fn(5043);
let closure_7 = createStyles.createStyles({ iconContainer: { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx");

export default function ScreenshareButton(arg0) {
  const channelId = noop.useContext(VoicePanelStateContextDefault).channelId;
  items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores };
    const merged = Object.assign(arg0);
    tmp2 = <ScreenshareButtonInner channel={stateFromStores} />;
  }
  return tmp2;
};