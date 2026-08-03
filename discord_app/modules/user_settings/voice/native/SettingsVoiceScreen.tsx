import set from "set";
import get_ActivityIndicator from "createToggle";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import { MobileSetting } from "MobileSetting";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "combined";

let c10;
let c4;
let c5;
let c9;
let unpackModuleId;
const require = arg1;
function KrispLogo() {
  const tmp = callback3();
  let obj = require(4039) /* AccessibilityAnnouncer */;
  if (obj.isThemeLight(tmp4)) {
    let tmp2Result = tmp2(10806);
  } else {
    tmp2Result = tmp2(10807);
  }
  obj = { style: tmp.krisp, children: null };
  obj = { style: tmp.logo, source: tmp2Result, accessibilityLabel: null };
  const intl = tmp5(1236).intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t.vFiCSx);
  const items = [callback(closure_5, obj), ];
  const obj1 = { accessibilityRole: "link", accessibilityLabel: null, onPress: null, children: null };
  const intl2 = tmp5(1236).intl;
  obj1[1] = intl2.string(require(1236) /* getSystemLocale */.t.hvVgAZ);
  obj1[2] = require(10805) /* handleKrispLinkPressed */.handleKrispLinkPressed;
  const obj2 = { variant: "text-sm/medium", color: "text-link", children: null };
  const intl3 = tmp5(1236).intl;
  obj2[2] = intl3.string(require(1236) /* getSystemLocale */.t.hvVgAZ);
  obj1[3] = callback(require(4189) /* Text */.Text, obj2);
  items[1] = callback(require(5277) /* Directions */.Pressable, obj1);
  obj[1] = items;
  return callback2(closure_4, obj);
}
function SystemProcessingSubLabel() {
  let obj = require(10802) /* getNoiseCancellationDeferredToSystem */;
  let tmp3 = null;
  if (obj.useNoiseCancellationDeferredToSystem()) {
    obj = { variant: "text-sm/medium", children: null };
    const intl = tmp(1236).intl;
    obj = { onSettingsClick: null };
    obj[0] = function onSettingsClick() {
      mediaEngine = mediaEngine.getMediaEngine();
      const result = mediaEngine.showSystemCaptureConfigurationUI("microphone_modes");
    };
    obj[1] = intl.format(tmp(1236).t.EUNgko, obj);
    tmp3 = callback(tmp(4189).Text, obj);
  }
  return tmp3;
}
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
let closure_12 = "" + require("combined").getArticleURL(HelpdeskArticles.VOICE_VIDEO_TROUBLESHOOTING) + "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm";
let closure_13 = createCacheKey.createStyles({ krisp: { marginTop: 8, flexDirection: "row", alignItems: "center" }, logo: { marginRight: 8, height: 30, width: 67 } });
let result = require("_detectH265HardwareDecode").fileFinishedImporting("modules/user_settings/voice/native/SettingsVoiceScreen.tsx");

export default function SettingsVoiceScreen() {
  const node = React.useMemo(() => {
    let obj = callback(10133);
    obj = { sections: null };
    obj = { label: null, settings: null };
    const intl = callback(1236).intl;
    obj[0] = intl.string(callback(1236).t.LKCupB);
    const items = [, , ];
    ({ INPUT_MODE: arr[0], AUTO_VOICE_SENSITIVITY: arr[1], VOICE_SENSITIVITY: arr[2] } = constants);
    obj[1] = items;
    const items1 = [obj, , , , , , , ];
    const obj1 = { label: null, settings: null, subLabel: null };
    const intl2 = callback(1236).intl;
    obj1[0] = intl2.string(callback(1236).t.UXxPGB);
    const items2 = [, ];
    ({ OUTPUT_VOLUME: arr3[0], STREAM_OUTPUT_VOLUME: arr3[1] } = constants);
    obj1[1] = items2;
    const intl3 = callback(1236).intl;
    obj1[2] = intl3.format(callback(1236).t["V+B3FH"], { guideURL: closure_12 });
    items1[1] = obj1;
    const obj3 = { label: null, settings: null, subLabel: null };
    const intl4 = callback(1236).intl;
    obj3[0] = intl4.string(callback(1236).t.xbMc8r);
    const items3 = [constants.SOUNDBOARD_VOLUME];
    obj3[1] = items3;
    const intl5 = callback(1236).intl;
    const obj4 = { helpCenterArticle: null };
    let obj7 = callback2(1945);
    obj4[0] = obj7.getArticleURL(constants2.SOUNDBOARD);
    obj3[2] = intl5.format(callback(1236).t.BPbGq7, obj4);
    items1[2] = obj3;
    const obj5 = { label: null, settings: null };
    const intl6 = callback(1236).intl;
    obj5[0] = intl6.string(callback(1236).t.bNqkD9);
    const items4 = [constants.ANDROID_MOBILE_OVERLAY];
    obj5[1] = items4;
    items1[3] = obj5;
    const obj6 = { settings: items5, subLabel: null };
    items5 = [constants.NOISE_SUPPRESSION_KRISP];
    obj7 = { children: null };
    const items6 = [callback3(closure_15, {}), callback3(closure_14, {})];
    obj7[0] = items6;
    obj6[1] = callback4(closure_11, obj7);
    items1[4] = obj6;
    const obj8 = { label: null, settings: null };
    const intl7 = callback(1236).intl;
    obj8[0] = intl7.string(callback(1236).t.t8Qhib);
    const items7 = [constants.NOISE_SUPPRESSION];
    obj8[1] = items7;
    items1[5] = obj8;
    const obj9 = { label: null, settings: null };
    const intl8 = callback(1236).intl;
    obj9[0] = intl8.string(callback(1236).t["6I6GUv"]);
    const items8 = [, , , ];
    ({ ECHO_CANCELLATION: arr9[0], SIDECHAIN_COMPRESSION: arr9[1], AUTOMATIC_GAIN_CONTROL: arr9[2], ADVANCED_VOICE_ACTIVITY: arr9[3] } = constants);
    obj9[1] = items8;
    items1[6] = obj9;
    const obj10 = { label: null, settings: null };
    const intl9 = callback(1236).intl;
    obj10[0] = intl9.string(callback(1236).t.OBwCXF);
    const items9 = [constants.DISABLE_STREAM_PREVIEWS];
    obj10[1] = items9;
    items1[7] = obj10;
    obj[0] = items1;
    return obj.createList(obj);
  }, []);
  return callback(importDefault(13697), { node });
};