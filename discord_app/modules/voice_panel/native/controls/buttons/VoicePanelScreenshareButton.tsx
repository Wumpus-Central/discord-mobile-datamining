import set from "set";
import { Image } from "AnimatedButtonWrapper";
import ensureGuildLoaded from "ensureGuildLoaded";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import isMetaQuest from "isMetaQuest";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
if (isMetaQuest.isMetaQuest()) {
  let MobilePhoneShareIcon = require("ScreenArrowIcon").ScreenArrowIcon;
} else {
  MobilePhoneShareIcon = require("MobilePhoneShareIcon").MobilePhoneShareIcon;
}
isMetaQuest = { circle: null, iconContainer: null, icon: null };
isMetaQuest = { width: "100%", height: "100%", borderRadius: require("Themes").radii.round };
isMetaQuest[0] = isMetaQuest;
isMetaQuest[1] = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" };
isMetaQuest[2] = { width: 24, height: 24 };
isMetaQuest = createCacheKey.createStyles(isMetaQuest);
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx");

export default function ScreenshareButton(arg0) {
  let props;
  let wrapperSpecs;
  let channelId;
  let isActive;
  let isFeatureEnabled;
  let onPress;
  ({ props, wrapperSpecs } = arg0);
  channelId = onPress.useContext(isActive(isFeatureEnabled[10])).channelId;
  const tmp3 = isMetaQuest();
  let obj = channelId(isFeatureEnabled[11]);
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  let obj1 = channelId(isFeatureEnabled[12]);
  const items = [ensureGuildLoaded];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_5.getChannel(channelId));
  isActive(isFeatureEnabled[13])(null != stateFromStores, "null channel in VoicePanelScreenshareButton");
  const tmp8 = isActive(isFeatureEnabled[14])(stateFromStores);
  isActive = tmp8.isActive;
  isFeatureEnabled = tmp8.isFeatureEnabled;
  onPress = tmp8.onPress;
  const items1 = [isActive, isFeatureEnabled, onPress];
  const callback = onPress.useCallback(() => {
    if (isFeatureEnabled) {
      let obj = isActive(isFeatureEnabled[15]);
      obj = { source: "connected button", was_active: null };
      obj[1] = isActive;
      obj.track(outer1_6.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, obj);
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
  let tmpResult = tmp(tmp2[17]);
  const intl = tmp4(tmp2[18]).intl;
  const string = intl.string;
  const t = tmp4(tmp2[18]).t;
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
  const items3 = [callback(isActive(isFeatureEnabled[19]), { style: items2 }), ];
  obj = { style: tmp3.iconContainer, children: null };
  tmpResult = tmp(tmp2[19]);
  if (tmp11) {
    obj1 = { color: null };
    obj1[0] = color;
    let tmp16Result = tmp16(MobilePhoneShareIcon, obj1);
  } else {
    const obj2 = { source: null, style: null };
    obj2[0] = tmp8.imgSource;
    const items4 = [tmp3.icon, ];
    const obj3 = { tintColor: null };
    obj3[0] = color;
    items4[1] = obj3;
    obj2[1] = items4;
    tmp16Result = tmp16(Image, obj2);
  }
  obj[1] = tmp16Result;
  items3[1] = callback(tmpResult, obj);
  obj[5] = items3;
  return closure_8(tmpResult, obj);
};