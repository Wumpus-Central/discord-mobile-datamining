// === Module 15080: SettingsVoiceScreen ===

// Module 15080 (SettingsVoiceScreen)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl10 from "intl" /* 1126 */;
import shared from "shared" /* 4735 */;
import useThemeDefault from "useTheme" /* 4797 */;
import Text_Text from "Text/Text" /* 4892 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6147 */;
import SettingsConstants from "SettingsConstants" /* 7645 */;
import NoiseCancellationUtils from "NoiseCancellationUtils" /* 9687 */;
import KrispLogo from "KrispLogo" /* 9690 */;
import AssetRegistryDefault from "AssetRegistry" /* 9691 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9692 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import SettingLayoutDefault from "SettingLayout" /* 14515 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import Fragment from "Fragment" /* 21 */;
import HelpdeskUtils from "HelpdeskUtils" /* 2115 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let mediaEngine;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let unpackModuleId;
function getVoiceSettings() {
  let BPbGq7;
  let format;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items;
  let items10;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj3;
  let obj5;
  let obj6;
  let obj9;
  const obj = { label: intl.string(intl10.t.LKCupB), settings: items };
  intl = intl10.intl;
  items = [, , ];
  ({ INPUT_MODE: arr[0], AUTO_VOICE_SENSITIVITY: arr[1], VOICE_SENSITIVITY: arr[2] } = MobileUserSettings);
  const items1 = [obj, , , , , , , , ];
  const obj2 = { label: intl2.string(intl10.t.UXxPGB), settings: items2, subLabel: intl3.format(intl10.t["V+B3FH"], obj3) };
  intl2 = intl10.intl;
  items2 = [, ];
  ({ OUTPUT_VOLUME: arr3[0], STREAM_OUTPUT_VOLUME: arr3[1] } = MobileUserSettings);
  intl3 = intl10.intl;
  obj3 = { guideURL };
  items1[1] = obj2;
  const obj4 = { label: intl4.string(intl10.t.xbMc8r), settings: items3, subLabel: format(BPbGq7, obj5) };
  intl4 = intl10.intl;
  items3 = [MobileUserSettings.SOUNDBOARD_VOLUME];
  const intl5 = intl10.intl;
  format = intl5.format;
  obj5 = { helpCenterArticle: obj6.getArticleURL(HelpdeskArticles.SOUNDBOARD) };
  BPbGq7 = intl10.t.BPbGq7;
  items1[2] = obj4;
  obj6 = HelpdeskUtils;
  const obj7 = { label: intl6.string(intl10.t.bNqkD9), settings: items4 };
  intl6 = intl10.intl;
  items4 = [MobileUserSettings.ANDROID_MOBILE_OVERLAY];
  items1[3] = obj7;
  const obj8 = { settings: items5, subLabel: authStore(unpackModuleId, obj9) };
  items5 = [MobileUserSettings.NOISE_SUPPRESSION_KRISP];
  obj9 = { children: items6 };
  items6 = [React4(closure_15, {}), React4(closure_14, {})];
  items1[4] = obj8;
  const obj10 = { label: intl7.string(intl10.t.t8Qhib), settings: items7 };
  intl7 = intl10.intl;
  items7 = [MobileUserSettings.NOISE_SUPPRESSION];
  items1[5] = obj10;
  const obj11 = { label: intl8.string(intl10.t["6I6GUv"]), settings: items8 };
  intl8 = intl10.intl;
  items8 = [, , , ];
  ({ ECHO_CANCELLATION: arr9[0], SIDECHAIN_COMPRESSION: arr9[1], AUTOMATIC_GAIN_CONTROL: arr9[2], ADVANCED_VOICE_ACTIVITY: arr9[3] } = MobileUserSettings);
  items1[6] = obj11;
  const obj12 = { label: intl9.string(intl10.t.OBwCXF), settings: items9 };
  intl9 = intl10.intl;
  items9 = [MobileUserSettings.DISABLE_STREAM_PREVIEWS];
  items1[7] = obj12;
  const obj13 = { settings: items10 };
  items10 = [MobileUserSettings.VIDEO_BACKGROUND];
  items1[8] = obj13;
  return items1;
}
({ View: closure_4, Image: hasOwnProperty } = react_native);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
const guideURL = "" + HelpdeskUtils.getArticleURL(HelpdeskArticles.VOICE_VIDEO_TROUBLESHOOTING) + "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm";
let closure_13 = createStyles.createStyles({ krisp: { marginTop: 8, flexDirection: "row", alignItems: "center" }, logo: { marginRight: 8, height: 30, width: 67 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let Text;
  let first;
  let intl3;
  let items;
  let krisp;
  let logo;
  let obj4;
  let tmp5Result;
  const obj = react2;
  const cResult = obj.c(9);
  const tmp4 = closure_13();
  const tmp6 = useThemeDefault();
  const obj2 = shared;
  if (obj2.isThemeLight(tmp6)) {
    tmp5Result = AssetRegistryDefault;
  } else {
    tmp5Result = AssetRegistryDefault2;
  }
  ({ krisp, logo } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl10.intl;
    const stringResult = intl.string(intl10.t.vFiCSx);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tmp5Result) {
    let tmp10;
    let tmp12;
    let tmp14;
    if (cResult[2] === tmp4.logo) {
      tmp10 = cResult[3];
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = intl10.intl;
      const stringResult1 = intl2.string(intl10.t.hvVgAZ);
      cResult[4] = stringResult1;
      tmp12 = stringResult1;
    } else {
      tmp12 = cResult[4];
    }
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { accessibilityRole: "link", accessibilityLabel: tmp12, onPress: KrispLogo.handleKrispLinkPressed, children: React4(Text, obj4) };
      const LegacyPressable = LegacyBaseButton.LegacyPressable;
      obj4 = { variant: "text-sm/medium", color: "text-link", children: intl3.string(intl10.t.hvVgAZ) };
      Text = Text_Text.Text;
      intl3 = intl10.intl;
      const tmp16 = React4(LegacyPressable, obj3);
      cResult[5] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[5];
    }
    if (cResult[6] === tmp4.krisp) {
      let tmp17;
      if (cResult[7] === tmp10) {
        tmp17 = cResult[8];
      }
      return tmp17;
    }
    const obj5 = { style: krisp, children: items };
    items = [tmp10, tmp14];
    const tmp20 = authStore(React3, obj5);
    cResult[6] = tmp4.krisp;
    cResult[7] = tmp10;
    cResult[8] = tmp20;
    tmp17 = tmp20;
  }
  const tmp11 = React4(hasOwnProperty, { style: logo, source: tmp5Result, accessibilityLabel: first });
  cResult[1] = tmp5Result;
  cResult[2] = tmp4.logo;
  cResult[3] = tmp11;
  tmp10 = tmp11;
}) : (() => {
  let Text;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj5;
  let tmp2Result;
  const tmp = closure_13();
  const tmp4 = useThemeDefault();
  const obj = shared;
  if (obj.isThemeLight(tmp4)) {
    tmp2Result = AssetRegistryDefault;
  } else {
    tmp2Result = AssetRegistryDefault2;
  }
  const obj2 = { style: tmp.krisp, children: items };
  const obj3 = { style: tmp.logo, source: tmp2Result, accessibilityLabel: intl.string(intl10.t.vFiCSx) };
  intl = intl10.intl;
  items = [React4(hasOwnProperty, obj3), ];
  const obj4 = { accessibilityRole: "link", accessibilityLabel: intl2.string(intl10.t.hvVgAZ), onPress: KrispLogo.handleKrispLinkPressed, children: React4(Text, obj5) };
  const LegacyPressable = LegacyBaseButton.LegacyPressable;
  intl2 = intl10.intl;
  obj5 = { variant: "text-sm/medium", color: "text-link", children: intl3.string(intl10.t.hvVgAZ) };
  Text = Text_Text.Text;
  intl3 = intl10.intl;
  items[1] = React4(LegacyPressable, obj4);
  return authStore(React3, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let intl;
  let obj4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = NoiseCancellationUtils;
  const noiseCancellationDeferredToSystem = obj2.useNoiseCancellationDeferredToSystem();
  if (cResult[0] !== noiseCancellationDeferredToSystem) {
    let tmp6 = null;
    if (noiseCancellationDeferredToSystem) {
      const obj3 = { variant: "text-sm/medium", children: intl.format(intl10.t.EUNgko, obj4) };
      const Text = Text_Text.Text;
      intl = intl10.intl;
      obj4 = {
        onSettingsClick() {
              mediaEngine = mediaEngine.getMediaEngine();
              const result = mediaEngine.showSystemCaptureConfigurationUI("microphone_modes");
            }
      };
      tmp6 = React4(Text, obj3);
    }
    cResult[0] = noiseCancellationDeferredToSystem;
    cResult[1] = tmp6;
    tmp5 = tmp6;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  let intl;
  let obj3;
  let tmp3 = null;
  const obj = NoiseCancellationUtils;
  if (obj.useNoiseCancellationDeferredToSystem()) {
    const obj2 = { variant: "text-sm/medium", children: intl.format(intl10.t.EUNgko, obj3) };
    const Text = Text_Text.Text;
    intl = intl10.intl;
    obj3 = {
      onSettingsClick() {
          mediaEngine = mediaEngine.getMediaEngine();
          const result = mediaEngine.showSystemCaptureConfigurationUI("microphone_modes");
        }
    };
    tmp3 = React4(Text, obj2);
  }
  return tmp3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { sections: getVoiceSettings() };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    const list = createList(obj2);
    cResult[0] = list;
    first = list;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { node: first };
    const tmp11 = React4(SettingLayoutDefault, obj3);
    cResult[1] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[1];
  }
  return tmp8;
}) : (() => {
  const node = react.useMemo(() => {
    const obj = SettingBuilders;
    const obj2 = { sections: getVoiceSettings() };
    return obj.createList(obj2);
  }, []);
  return React4(SettingLayoutDefault, { node });
});
let result = size.fileFinishedImporting("modules/user_settings/voice/native/SettingsVoiceScreen.tsx");

export default tmp4;