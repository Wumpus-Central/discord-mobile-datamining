// === Module 15247: SettingsVoiceScreen ===

// Module 15247 (SettingsVoiceScreen)
import util from "util" /* 1114 */;
import shared from "shared" /* 4411 */;
import Text_Text from "Text/Text" /* 4556 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6655 */;
import NoiseCancellationUtils from "NoiseCancellationUtils" /* 9994 */;
import KrispLogo2 from "KrispLogo" /* 9997 */;
import _modDef9998 from "module_9998" /* 9998 */;
import _modDef9999 from "module_9999" /* 9999 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import SettingLayoutDefault from "SettingLayout" /* 14689 */;
import noop from "module_19" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import HelpdeskUtils from "HelpdeskUtils" /* 2024 */;

require = fn;
function KrispLogo() {
  const tmp = closure_13();
  let obj = shared;
  if (obj.isThemeLight(tmp4)) {
    let tmp2Result = _modDef9998;
  } else {
    tmp2Result = _modDef9999;
  }
  obj = { style: tmp.krisp, children: null };
  obj = { style: tmp.logo, source: tmp2Result, accessibilityLabel: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.vFiCSx);
  const items = [React7(hasOwnProperty, obj), ];
  const obj1 = { accessibilityRole: "link", accessibilityLabel: null, onPress: null, children: null };
  const intl2 = util.intl;
  obj1.accessibilityLabel = intl2.string(util.t.hvVgAZ);
  obj1.onPress = KrispLogo2.handleKrispLinkPressed;
  const obj2 = { variant: "text-sm/medium", color: "text-link", children: null };
  const intl3 = util.intl;
  obj2.children = intl3.string(util.t.hvVgAZ);
  obj1.children = React7(Text_Text.Text, obj2);
  items[1] = React7(LegacyBaseButton.LegacyPressable, obj1);
  obj.children = items;
  return closure_1_10(React4, obj);
}
function SystemProcessingSubLabel() {
  let obj = NoiseCancellationUtils;
  let tmp3 = null;
  if (obj.useNoiseCancellationDeferredToSystem()) {
    obj = { variant: "text-sm/medium", children: null };
    const intl = util.intl;
    obj = {
      onSettingsClick() {
          mediaEngine = mediaEngine.getMediaEngine();
          const result = mediaEngine.showSystemCaptureConfigurationUI("microphone_modes");
        }
    };
    obj.children = intl.format(util.t.EUNgko, obj);
    tmp3 = React7(Text_Text.Text, obj);
  }
  return tmp3;
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const MobileUserSettings = fn(7975).MobileUserSettings;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
let closure_12 = "" + HelpdeskUtils.getArticleURL(HelpdeskArticles.VOICE_VIDEO_TROUBLESHOOTING) + "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm";
const createStyles = fn(4560);
let closure_13 = createStyles.createStyles({ krisp: { marginTop: 8, flexDirection: "row", alignItems: "center" }, logo: { marginRight: 8, height: 30, width: 67 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/voice/native/SettingsVoiceScreen.tsx");

export default function SettingsVoiceScreen() {
  const node = noop.useMemo(() => {
    let obj = { sections: null };
    obj = { label: null, settings: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.LKCupB);
    const items = [, , ];
    ({ INPUT_MODE: arr[0], AUTO_VOICE_SENSITIVITY: arr[1], VOICE_SENSITIVITY: arr[2] } = constants);
    obj.settings = items;
    const items1 = [obj, , , , , , , ];
    const obj1 = { label: null, settings: null, subLabel: null };
    const intl2 = util.intl;
    obj1.label = intl2.string(util.t.UXxPGB);
    const items2 = [, ];
    ({ OUTPUT_VOLUME: arr3[0], STREAM_OUTPUT_VOLUME: arr3[1] } = constants);
    obj1.settings = items2;
    const intl3 = util.intl;
    obj1.subLabel = intl3.format(util.t["V+B3FH"], { guideURL });
    items1[1] = obj1;
    const obj3 = { label: null, settings: null, subLabel: null };
    const intl4 = util.intl;
    obj3.label = intl4.string(util.t.xbMc8r);
    const items3 = [constants.SOUNDBOARD_VOLUME];
    obj3.settings = items3;
    const intl5 = util.intl;
    const obj4 = { helpCenterArticle: null };
    let obj7 = HelpdeskUtils;
    obj4.helpCenterArticle = obj7.getArticleURL(constants2.SOUNDBOARD);
    obj3.subLabel = intl5.format(util.t.BPbGq7, obj4);
    items1[2] = obj3;
    const obj5 = { label: null, settings: null };
    const intl6 = util.intl;
    obj5.label = intl6.string(util.t.bNqkD9);
    const items4 = [constants.ANDROID_MOBILE_OVERLAY];
    obj5.settings = items4;
    items1[3] = obj5;
    const obj6 = { settings: null, subLabel: null };
    const items5 = [constants.NOISE_SUPPRESSION_KRISP];
    obj6.settings = items5;
    obj7 = { children: null };
    const items6 = [closure_1_9(SystemProcessingSubLabel, {}), closure_1_9(KrispLogo, {})];
    obj7.children = items6;
    obj6.subLabel = closure_1_10(closure_1_11, obj7);
    items1[4] = obj6;
    const obj8 = { label: null, settings: null };
    const intl7 = util.intl;
    obj8.label = intl7.string(util.t.t8Qhib);
    const items7 = [constants.NOISE_SUPPRESSION];
    obj8.settings = items7;
    items1[5] = obj8;
    const obj9 = { label: null, settings: null };
    const intl8 = util.intl;
    obj9.label = intl8.string(util.t["6I6GUv"]);
    const items8 = [, , , ];
    ({ ECHO_CANCELLATION: arr9[0], SIDECHAIN_COMPRESSION: arr9[1], AUTOMATIC_GAIN_CONTROL: arr9[2], ADVANCED_VOICE_ACTIVITY: arr9[3] } = constants);
    obj9.settings = items8;
    items1[6] = obj9;
    const obj10 = { label: null, settings: null };
    const intl9 = util.intl;
    obj10.label = intl9.string(util.t.OBwCXF);
    const items9 = [constants.DISABLE_STREAM_PREVIEWS];
    obj10.settings = items9;
    items1[7] = obj10;
    obj.sections = items1;
    return obj.createList(obj);
  }, []);
  return React7(SettingLayoutDefault, { node });
};