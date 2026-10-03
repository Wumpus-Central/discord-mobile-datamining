// discord_app/modules/user_settings/voice/native/SettingsVoiceScreen.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import shared from "../../../../design/shared.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LegacyBaseButton from "../../../../../_runtime/06140_LegacyBaseButton.js";
import NoiseCancellationUtils from "../../../noise_cancellation/NoiseCancellationUtils.tsx";
import KrispLogo from "KrispLogo.tsx";
import _modDef9678 from "../../../../../_runtime/metro/09678__.js";
import _modDef9679 from "../../../../../_runtime/metro/09679__.js";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../settings/native/renderer/SettingLayout.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import HelpdeskUtils from "../../../../utils/HelpdeskUtils.tsx";

require = fn;
function getVoiceSettings() {
  const obj = { label: null, settings: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.LKCupB);
  const items = [, ,];
  ({ INPUT_MODE: arr[0], AUTO_VOICE_SENSITIVITY: arr[1], VOICE_SENSITIVITY: arr[2] } = MobileUserSettings);
  obj.settings = items;
  const items1 = [obj, , , , , , , ,];
  const obj2 = { label: null, settings: null, subLabel: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.UXxPGB);
  const items2 = [,];
  ({ OUTPUT_VOLUME: arr3[0], STREAM_OUTPUT_VOLUME: arr3[1] } = MobileUserSettings);
  obj2.settings = items2;
  const intl3 = util.intl;
  obj2.subLabel = intl3.format(util.t["V+B3FH"], { guideURL });
  items1[1] = obj2;
  const obj4 = { label: null, settings: null, subLabel: null };
  const intl4 = util.intl;
  obj4.label = intl4.string(util.t.xbMc8r);
  const items3 = [MobileUserSettings.SOUNDBOARD_VOLUME];
  obj4.settings = items3;
  const intl5 = util.intl;
  const obj5 = { helpCenterArticle: HelpdeskUtils.getArticleURL(HelpdeskArticles.SOUNDBOARD) };
  obj4.subLabel = intl5.format(util.t.BPbGq7, obj5);
  items1[2] = obj4;
  const obj7 = { label: null, settings: null };
  const intl6 = util.intl;
  obj7.label = intl6.string(util.t.bNqkD9);
  const items4 = [MobileUserSettings.ANDROID_MOBILE_OVERLAY];
  obj7.settings = items4;
  items1[3] = obj7;
  const obj8 = { settings: null, subLabel: null };
  const items5 = [MobileUserSettings.NOISE_SUPPRESSION_KRISP];
  obj8.settings = items5;
  const obj9 = { children: null };
  const items6 = [options(closure_15, {}), options(closure_14, {})];
  obj9.children = items6;
  obj8.subLabel = v65535(closure_1_11, obj9);
  items1[4] = obj8;
  const obj10 = { label: null, settings: null };
  const intl7 = util.intl;
  obj10.label = intl7.string(util.t.t8Qhib);
  const items7 = [MobileUserSettings.NOISE_SUPPRESSION];
  obj10.settings = items7;
  items1[5] = obj10;
  const obj11 = { label: null, settings: null };
  const intl8 = util.intl;
  obj11.label = intl8.string(util.t["6I6GUv"]);
  const items8 = [, , ,];
  ({
    ECHO_CANCELLATION: arr9[0],
    SIDECHAIN_COMPRESSION: arr9[1],
    AUTOMATIC_GAIN_CONTROL: arr9[2],
    ADVANCED_VOICE_ACTIVITY: arr9[3],
  } = MobileUserSettings);
  obj11.settings = items8;
  items1[6] = obj11;
  const obj12 = { label: null, settings: null };
  const intl9 = util.intl;
  obj12.label = intl9.string(util.t.OBwCXF);
  const items9 = [MobileUserSettings.DISABLE_STREAM_PREVIEWS];
  obj12.settings = items9;
  items1[7] = obj12;
  const obj13 = { settings: null };
  const items10 = [MobileUserSettings.VIDEO_BACKGROUND];
  obj13.settings = items10;
  items1[8] = obj13;
  return items1;
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const MobileUserSettings = fn(7634).MobileUserSettings;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const guideURL =
  "" +
  HelpdeskUtils.getArticleURL(HelpdeskArticles.VOICE_VIDEO_TROUBLESHOOTING) +
  "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm";
const createStyles = fn(4890);
let closure_13 = createStyles.createStyles({
  krisp: { marginTop: 8, flexDirection: "row", alignItems: "center" },
  logo: { marginRight: 8, height: 30, width: 67 },
});
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(9);
      const tmp4 = closure_13();
      const tmp6 = useThemeDefault();
      if (obj2.isThemeLight(tmp6)) {
        let tmp5Result = _modDef9678;
      } else {
        tmp5Result = _modDef9679;
      }
      ({ krisp, logo } = tmp4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.vFiCSx);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === tmp5Result) {
        if (cResult[2] === tmp4.logo) {
          let tmp10 = cResult[3];
        }
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = util.intl;
          const stringResult1 = intl2.string(util.t.hvVgAZ);
          cResult[4] = stringResult1;
          let tmp12 = stringResult1;
        } else {
          tmp12 = cResult[4];
        }
        const _Symbol2 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = {
            accessibilityRole: "link",
            accessibilityLabel: tmp12,
            onPress: KrispLogo.handleKrispLinkPressed,
            children: null,
          };
          const obj4 = { variant: "text-sm/medium", color: "text-link", children: null };
          const intl3 = util.intl;
          obj4.children = intl3.string(util.t.hvVgAZ);
          obj3.children = options(Text_Text.Text, obj4);
          const tmp16 = options(LegacyBaseButton.LegacyPressable, obj3);
          cResult[5] = tmp16;
          let tmp14 = tmp16;
        } else {
          tmp14 = cResult[5];
        }
        if (cResult[6] === tmp4.krisp) {
          if (cResult[7] === tmp10) {
            let tmp17 = cResult[8];
          }
          return tmp17;
        }
        const obj5 = { style: krisp, children: null };
        const items = [tmp10, tmp14];
        obj5.children = items;
        const tmp20 = v65535(React4, obj5);
        cResult[6] = tmp4.krisp;
        cResult[7] = tmp10;
        cResult[8] = tmp20;
        tmp17 = tmp20;
      }
      const tmp11 = options(hasOwnProperty, { style: logo, source: tmp5Result, accessibilityLabel: first });
      cResult[1] = tmp5Result;
      cResult[2] = tmp4.logo;
      cResult[3] = tmp11;
      tmp10 = tmp11;
      obj2 = shared;
    }
  : () => {
      const tmp = closure_13();
      const tmp4 = useThemeDefault();
      if (obj.isThemeLight(tmp4)) {
        let tmp2Result = _modDef9678;
      } else {
        tmp2Result = _modDef9679;
      }
      const obj2 = { style: tmp.krisp, children: null };
      const obj3 = { style: tmp.logo, source: tmp2Result, accessibilityLabel: null };
      const intl = util.intl;
      obj3.accessibilityLabel = intl.string(util.t.vFiCSx);
      const items = [options(hasOwnProperty, obj3)];
      const obj4 = { accessibilityRole: "link", accessibilityLabel: null, onPress: null, children: null };
      const intl2 = util.intl;
      obj4.accessibilityLabel = intl2.string(util.t.hvVgAZ);
      obj4.onPress = KrispLogo.handleKrispLinkPressed;
      const obj5 = { variant: "text-sm/medium", color: "text-link", children: null };
      const intl3 = util.intl;
      obj5.children = intl3.string(util.t.hvVgAZ);
      obj4.children = options(Text_Text.Text, obj5);
      items[1] = options(LegacyBaseButton.LegacyPressable, obj4);
      obj2.children = items;
      return v65535(React4, obj2);
    };
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      const noiseCancellationDeferredToSystem = NoiseCancellationUtils.useNoiseCancellationDeferredToSystem();
      if (cResult[0] !== noiseCancellationDeferredToSystem) {
        let tmp6 = null;
        if (noiseCancellationDeferredToSystem) {
          const obj3 = { variant: "text-sm/medium", children: null };
          const intl = util.intl;
          const obj4 = {
            onSettingsClick() {
              mediaEngine = mediaEngine.getMediaEngine();
              const result = mediaEngine.showSystemCaptureConfigurationUI("microphone_modes");
            },
          };
          obj3.children = intl.format(util.t.EUNgko, obj4);
          tmp6 = options(Text_Text.Text, obj3);
        }
        cResult[0] = noiseCancellationDeferredToSystem;
        cResult[1] = tmp6;
        let tmp5 = tmp6;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : () => {
      let tmp3 = null;
      if (obj.useNoiseCancellationDeferredToSystem()) {
        const obj2 = { variant: "text-sm/medium", children: null };
        const intl = util.intl;
        const obj3 = {
          onSettingsClick() {
            mediaEngine = mediaEngine.getMediaEngine();
            const result = mediaEngine.showSystemCaptureConfigurationUI("microphone_modes");
          },
        };
        obj2.children = intl.format(util.t.EUNgko, obj3);
        tmp3 = options(Text_Text.Text, obj2);
      }
      return tmp3;
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/voice/native/SettingsVoiceScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { sections: getVoiceSettings() };
        const list = SettingBuilders.createList(obj2);
        cResult[0] = list;
        let first = list;
        const tmpResult = SettingBuilders;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { node: first };
        const tmp10 = options(SettingLayoutDefault, obj3);
        cResult[1] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[1];
      }
      return tmp7;
    }
  : () => {
      const node = noop.useMemo(() => {
        const obj = SettingBuilders;
        return obj.createList({ sections: getVoiceSettings() });
      }, []);
      return options(SettingLayoutDefault, { node });
    };
