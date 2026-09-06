// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../../../stores/ChannelStore.tsx";
import { AnalyticEvents } from "../../../../../Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import isMetaQuest from "../../../../device/MetaQuestUtils.android.tsx";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
if (isMetaQuest.isMetaQuest()) {
  let MobilePhoneShareIcon = require("ScreenArrowIcon").ScreenArrowIcon;
} else {
  MobilePhoneShareIcon = require("MobilePhoneShareIcon").MobilePhoneShareIcon;
}
isMetaQuest = { circle: null, iconContainer: null };
isMetaQuest = { width: "100%", height: "100%", borderRadius: ThemesDefault.radii.round };
isMetaQuest[0] = isMetaQuest;
isMetaQuest[1] = {
  position: "absolute",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
};
let closure_9 = createCacheKey.createStyles(isMetaQuest);
const result = require("set").fileFinishedImporting(
  "modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx",
);

export default function ScreenshareButton(arg0) {
  let channelId;
  let isActive;
  let isFeatureEnabled;
  let onPress;
  closure_4 = undefined;
  ({ props, wrapperSpecs } = arg0);
  channelId = onPress.useContext(isActive(isFeatureEnabled[9])).channelId;
  const tmp3 = callback2();
  let obj = channelId(isFeatureEnabled[10]);
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  const items = [closure_4];
  const stateFromStores = channelId(isFeatureEnabled[11]).useStateFromStores(items, () =>
    channel.getChannel(channelId),
  );
  isActive(isFeatureEnabled[12])(null != stateFromStores, "null channel in VoicePanelScreenshareButton");
  const tmp8 = isActive(isFeatureEnabled[13])(stateFromStores);
  isActive = tmp8.isActive;
  isFeatureEnabled = tmp8.isFeatureEnabled;
  onPress = tmp8.onPress;
  const VideoGuardExperiment = channelId(isFeatureEnabled[14]).VideoGuardExperiment;
  const videoEnabled = VideoGuardExperiment.useConfig({ location: "VoicePanelScreenshareButton" }).videoEnabled;
  closure_4 = tmp9;
  const items1 = [isActive, isFeatureEnabled, onPress, !videoEnabled];
  let tmp11 = !tmp9;
  const callback = onPress.useCallback(() => {
    if (closure_4) {
      let obj = { title: null };
      const obj3 = channelId(isFeatureEnabled[15]);
      const intl = channelId(isFeatureEnabled[17]).intl;
      obj[0] = intl.string(channelId(isFeatureEnabled[17]).t.GFr0GR);
      obj3.openAlert(
        channelId(isFeatureEnabled[16]).VOICE_PANEL_VIDEO_GUARD_ERROR_KEY,
        closure_1_6(isActive(isFeatureEnabled[16]), obj),
      );
      const tmp15 = isActive(isFeatureEnabled[16]);
    } else if (isFeatureEnabled) {
      obj = isActive(isFeatureEnabled[18]);
      obj = { source: "connected button", was_active: null };
      obj[1] = isActive;
      obj.track(closure_1_5.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, obj);
      onPress();
    }
  }, items1);
  if (videoEnabled) {
    tmp11 = !isFeatureEnabled;
  }
  if (tmp11) {
    let color = voicePanelButtonStyles.iconFillMuted.color;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  if (isActive) {
    let backgroundColor = voicePanelButtonStyles.iconBgSelected.backgroundColor;
  } else {
    backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
  }
  if (isActive) {
    color = voicePanelButtonStyles.iconFillSelected.color;
  }
  if (videoEnabled) {
    let MobilePhoneDenyIcon = MobilePhoneShareIcon;
  } else {
    MobilePhoneDenyIcon = tmp4(tmp2[19]).MobilePhoneDenyIcon;
  }
  obj = { onPress: callback, disabled: tmp11, props, accessibilityLabel: null, style: null, children: null };
  let tmpResult = tmp(tmp2[20]);
  let intl = tmp4(tmp2[17]).intl;
  const string = intl.string;
  const t = tmp4(tmp2[17]).t;
  if (isActive) {
    let stringResult = string(t.CpkXwZ);
  } else {
    stringResult = string(t.fjBNo1);
  }
  obj[3] = stringResult;
  let iconBgSelected;
  if (isActive) {
    iconBgSelected = voicePanelButtonStyles.iconBgSelected;
  }
  obj[4] = iconBgSelected;
  const items2 = [tmp3.circle, { backgroundColor }];
  const items3 = [callback(isActive(isFeatureEnabled[21]), { style: items2 })];
  obj = { style: tmp3.iconContainer, children: null };
  tmpResult = tmp(tmp2[21]);
  obj[1] = callback(MobilePhoneDenyIcon, { color });
  items3[1] = callback(tmpResult, obj);
  obj[5] = items3;
  return closure_7(tmpResult, obj);
}
