// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx
import util from "../../../../../intl/index.native.tsx";
import NativeViewDefault from "../../../../core/native/NativeView.tsx";
import VoicePanelStateContextDefault from "../../VoicePanelStateContext.tsx";
import useVoicePanelScreenshareToggleDefault from "useVoicePanelScreenshareToggle.tsx";
import VoicePanelStyles from "VoicePanelStyles.tsx";
import VoicePanelAnimatedButtonWrapperDefault from "VoicePanelAnimatedButtonWrapper.tsx";
import MobilePhoneDenyIcon2 from "../../../../../design/components/Icon/native/redesign/generated/MobilePhoneDenyIcon.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

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
  const element = {
    onPress: tmp6.onPress,
    disabled: tmp7,
    props,
    accessibilityLabel: null,
    style: null,
    children: null,
  };
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
  return (
    <tmp5Result onPress={tmp6.onPress} disabled={tmp7} props={props} accessibilityLabel={null} style={null}>
      {null}
    </tmp5Result>
  );
}
const jsx = fn(21).jsx;
const MetaQuestUtils = fn(1626);
if (MetaQuestUtils.isMetaQuest()) {
  let MobilePhoneShareIcon = fn(13519).ScreenArrowIcon;
} else {
  MobilePhoneShareIcon = fn(18206).MobilePhoneShareIcon;
}
const createStyles = fn(5043);
let closure_7 = createStyles.createStyles({
  iconContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx",
);

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
}
