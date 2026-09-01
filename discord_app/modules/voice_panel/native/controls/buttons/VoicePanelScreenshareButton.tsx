// === Module 16780: MobilePhoneShareIcon ===

// Module 16780 (MobilePhoneShareIcon)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "ensureGuildLoaded" /* 1387 */;
import { AnalyticEvents } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import isMetaQuest from "isMetaQuest" /* 1624 */;
import createCacheKey from "createCacheKey" /* 4478 */;

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
isMetaQuest[1] = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" };
let closure_9 = createCacheKey.createStyles(isMetaQuest);
const result = require("set").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx");

export default function ScreenshareButton(arg0) {
  let channelId;
  let isActive;
  let isFeatureEnabled;
  let onPress;
  ({ props, wrapperSpecs } = arg0);
  channelId = onPress.useContext(isActive(isFeatureEnabled[9])).channelId;
  const tmp3 = callback2();
  let obj = channelId(isFeatureEnabled[10]);
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  const items = [closure_4];
  const stateFromStores = channelId(isFeatureEnabled[11]).useStateFromStores(items, () => closure_1_4.getChannel(channelId));
  isActive(isFeatureEnabled[12])(null != stateFromStores, "null channel in VoicePanelScreenshareButton");
  const tmp8 = isActive(isFeatureEnabled[13])(stateFromStores);
  isActive = tmp8.isActive;
  isFeatureEnabled = tmp8.isFeatureEnabled;
  onPress = tmp8.onPress;
  const items1 = [isActive, isFeatureEnabled, onPress];
  const callback = onPress.useCallback(() => {
    if (isFeatureEnabled) {
      let obj = isActive(isFeatureEnabled[14]);
      obj = { source: "connected button", was_active: null };
      obj[1] = isActive;
      obj.track(closure_1_5.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, obj);
      onPress();
    }
  }, items1);
  if (isFeatureEnabled) {
    let color = voicePanelButtonStyles.iconFill.color;
  } else {
    color = voicePanelButtonStyles.iconFillMuted.color;
  }
  if (isActive) {
    let backgroundColor = voicePanelButtonStyles.iconBgSelected.backgroundColor;
  } else {
    backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
  }
  if (isActive) {
    color = voicePanelButtonStyles.iconFillSelected.color;
  }
  obj = { onPress: callback, disabled: !isFeatureEnabled, props, accessibilityLabel: null, style: null, children: null };
  let tmpResult = tmp(tmp2[15]);
  const intl = tmp4(tmp2[16]).intl;
  const string = intl.string;
  const t = tmp4(tmp2[16]).t;
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
  const items3 = [callback(isActive(isFeatureEnabled[17]), { style: items2 }), ];
  obj = { style: tmp3.iconContainer, children: null };
  tmpResult = tmp(tmp2[17]);
  obj[1] = callback(MobilePhoneShareIcon, { color });
  items3[1] = callback(tmpResult, obj);
  obj[5] = items3;
  return closure_7(tmpResult, obj);
};