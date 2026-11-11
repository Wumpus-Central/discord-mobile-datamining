// === Module 19944: VoicePanelScreenshareButton ===

// Module 19944 (VoicePanelScreenshareButton)
import _modDef38 from "module_38" /* 38 */;
import NativeViewDefault from "NativeView" /* 7656 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11924 */;
import useVoicePanelScreenshareToggleDefault from "useVoicePanelScreenshareToggle" /* 19801 */;
import VoicePanelAnimatedButtonWrapperDefault from "VoicePanelAnimatedButtonWrapper" /* 19932 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 5092 */;

const require = fn;
const jsx = fn(21).jsx;
const MetaQuestUtils = fn(1624);
if (MetaQuestUtils.isMetaQuest()) {
  let MobilePhoneShareIcon = fn(10669).ScreenArrowIcon;
} else {
  MobilePhoneShareIcon = fn(19807).MobilePhoneShareIcon;
}
const createStyles = fn(5243);
let closure_7 = createStyles.createStyles({ iconContainer: { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx");

export default function ScreenshareButton(arg0) {
  ({ props, wrapperSpecs } = arg0);
  const channelId = noop.useContext(VoicePanelStateContextDefault).channelId;
  const tmp3 = closure_7();
  const voicePanelButtonStyles = channelId(19931).useVoicePanelButtonStyles(wrapperSpecs);
  const obj = channelId(19931);
  items = [ChannelStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  _modDef38(null != stateFromStores, "null channel in VoicePanelScreenshareButton");
  const tmp8 = useVoicePanelScreenshareToggleDefault(stateFromStores, "VoicePanelScreenshareButton", "connected button");
  ({ isActive, videoBlocked } = tmp8);
  let tmp9 = !videoBlocked;
  if (!videoBlocked) {
    tmp9 = !tmp8.isFeatureEnabled;
  }
  if (tmp9) {
    let color = voicePanelButtonStyles.iconFillMuted.color;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  if (isActive) {
    color = voicePanelButtonStyles.iconFillSelected.color;
  }
  if (videoBlocked) {
    let MobilePhoneDenyIcon = tmp4(19945).MobilePhoneDenyIcon;
  } else {
    MobilePhoneDenyIcon = MobilePhoneShareIcon;
  }
  const element = { onPress: tmp8.onPress, disabled: tmp9, props, accessibilityLabel: null, style: null, children: null };
  const obj2 = channelId(504);
  const intl = tmp4(1113).intl;
  const string = intl.string;
  const t = tmp4(1113).t;
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
  const obj3 = { style: tmp3.iconContainer, children: null };
  const tmpResult = VoicePanelAnimatedButtonWrapperDefault;
  obj3.children = <MobilePhoneDenyIcon color={color} />;
  element.children = jsx(NativeViewDefault, { style: tmp3.iconContainer, children: null });
  return <tmpResult onPress={tmp8.onPress} disabled={tmp9} props={props} accessibilityLabel={null} style={null}>{null}</tmpResult>;
};