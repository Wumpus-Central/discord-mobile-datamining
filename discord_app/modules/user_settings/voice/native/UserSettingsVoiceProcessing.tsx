// discord_app/modules/user_settings/voice/native/UserSettingsVoiceProcessing.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text2 from "../../../../design/components/Text/native/Text.tsx";
import TableSwitchRow from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import context from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import UserSettingsVoice from "UserSettingsVoice.tsx";
import handleAutomaticGainControlChange from "UserSettingsVoiceUtils.tsx";
import getNoiseCancellationDeferredToSystem from "../../../noise_cancellation/NoiseCancellationUtils.tsx";
import handleKrispLinkPressedDefault from "KrispLogo.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../../stores/MediaEngineStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
class VoiceProcessingOptions {
  constructor() {
    krisp = closure_8();
    EUNgko = closure_0;
    tmp = closure_2;
    obj = require("initialize");
    items = [];
    items[0] = closure_4;
    stateFromStores = obj.useStateFromStores(items, () => closure_4.isNoiseCancellationSupported());
    obj2 = require("handleAutomaticGainControlChange");
    selectedNoiseSuppressionOption = obj2.useSelectedNoiseSuppressionOption();
    obj3 = require("getNoiseCancellationDeferredToSystem");
    noiseCancellationDeferredToSystem = obj3.useNoiseCancellationDeferredToSystem();
    if (stateFromStores) {
      tmp6 = jsxs;
      tmp7 = View;
      obj = { style: null, children: null };
      obj[0] = krisp.optionsParentContainer;
      obj1 = { value: null, onChange: null, title: null, hasIcons: false, children: null };
      obj1[0] = selectedNoiseSuppressionOption;
      obj1[1] = function noiseCancellationChanged(arg0) {
        callback2(9781).setNoiseCancellation(arg0 === callback(10076).NoiseSuppressionOpt.KRISP);
        const obj = callback2(9781);
        callback2(9781).setNoiseSuppression(arg0 === callback(10076).NoiseSuppressionOpt.STANDARD);
      };
      intl3 = require("getSystemLocale").intl;
      obj1[2] = intl3.string(require("getSystemLocale").t.t8Qhib);
      tmp8 = jsx;
      obj2 = { value: null, label: null, disabled: null };
      obj2[0] = require("handleAutomaticGainControlChange").NoiseSuppressionOpt.KRISP;
      intl4 = require("getSystemLocale").intl;
      obj2[1] = intl4.string(require("getSystemLocale").t.rdoNzt);
      obj2[2] = noiseCancellationDeferredToSystem;
      items1 = [, , ];
      items1[0] = jsx(require("TableRadioRow").TableRadioRow, obj2);
      obj3 = { disabled: null, value: null, label: null };
      obj3[0] = noiseCancellationDeferredToSystem;
      obj3[1] = require("handleAutomaticGainControlChange").NoiseSuppressionOpt.STANDARD;
      intl5 = require("getSystemLocale").intl;
      obj3[2] = intl5.string(require("getSystemLocale").t.qXeYHw);
      items1[1] = jsx(require("TableRadioRow").TableRadioRow, obj3);
      obj4 = { disabled: null, value: null, label: null };
      obj4[0] = noiseCancellationDeferredToSystem;
      obj4[1] = require("handleAutomaticGainControlChange").NoiseSuppressionOpt.NONE;
      intl6 = require("getSystemLocale").intl;
      obj4[2] = intl6.string(require("getSystemLocale").t.wkYAlz);
      items1[2] = jsx(require("TableRadioRow").TableRadioRow, obj4);
      obj1[4] = items1;
      items2 = [, ];
      items2[0] = jsxs(require("context").TableRadioGroup, obj1);
      obj5 = { style: null, children: null };
      obj5[0] = krisp.optionsDescriptionContainer;
      Text = require("Text").Text;
      intl7 = require("getSystemLocale").intl;
      if (noiseCancellationDeferredToSystem) {
        EUNgko = require("getSystemLocale").t.EUNgko;
        obj6 = { onSettingsClick: null };
        obj6[0] = function onSettingsClick() {
          const mediaEngine = closure_4.getMediaEngine();
          const result = mediaEngine.showSystemCaptureConfigurationUI("microphone_modes");
        };
        formatResult = intl7.format(EUNgko, obj6);
      } else {
        formatResult = intl7.string(require("getSystemLocale").t.k6h1F4);
      }
      obj7 = { variant: "text-xs/medium", color: "text-muted", children: null };
      obj7[2] = formatResult;
      items3 = [, ];
      items3[0] = tmp8(Text, obj7);
      obj8 = { style: null, children: null };
      krisp = krisp.krisp;
      obj8[0] = krisp;
      tmp10 = closure_1;
      tmp = tmp8(require("handleKrispLinkPressed"), {});
      obj8[1] = tmp;
      Text = tmp8(tmp7, obj8);
      items3[1] = Text;
      obj5[1] = items3;
      obj5 = tmp6(tmp7, obj5);
      items2[1] = obj5;
      obj[1] = items2;
      tmp6Result = tmp6(tmp7, obj);
    } else {
      tmp5 = jsx;
      obj9 = { hasIcons: false, children: null };
      obj10 = { label: null, subLabel: null, value: null, onValueChange: null };
      intl = require("getSystemLocale").intl;
      obj10[0] = intl.string(require("getSystemLocale").t.t8Qhib);
      intl2 = require("getSystemLocale").intl;
      obj10[1] = intl2.string(require("getSystemLocale").t.najZCV);
      obj10[2] = selectedNoiseSuppressionOption === require("handleAutomaticGainControlChange").NoiseSuppressionOpt.STANDARD;
      obj10[3] = function onValueChange(arg0) {
        const NoiseSuppressionOpt = callback(10076).NoiseSuppressionOpt;
        return callback(10076).handleNoiseSuppressionChange(arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE);
      };
      obj9[1] = jsx(require("TableSwitchRow").TableSwitchRow, obj10);
      return jsx(require("UserSettingsVoice").UserSettingsTableRowGroup, obj9);
    }
    return;
  }
}
noopAll;
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
createCacheKey = { optionsParentContainer: { marginTop: 12 }, optionsDescriptionContainer: null, krisp: null };
createCacheKey = { paddingTop: ThemesDefault.space.PX_4, gap: ThemesDefault.space.PX_4 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginStart: -20 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceProcessing.tsx");

export default function UserSettingsVoiceProcessing() {
  let obj = initialize;
  const items = [closure_4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ echoCancellation: store.getEchoCancellation(), advancedVoiceActivitySupported: store.isAdvancedVoiceActivitySupported(), automaticGainControl: store.getAutomaticGainControl(), inputMode: store.getMode(), vadUseKrisp: store.getModeOptions().vadUseKrisp }));
  ({ advancedVoiceActivitySupported, inputMode: require } = stateFromStoresObject);
  ({ echoCancellation, automaticGainControl, vadUseKrisp } = stateFromStoresObject);
  obj = { title: null, hasIcons: false, children: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["6I6GUv"]);
  obj = { label: null, value: null, onValueChange: null };
  const intl2 = getSystemLocale.intl;
  obj[0] = intl2.string(getSystemLocale.t.iWTwu6);
  obj[1] = echoCancellation;
  obj[2] = handleAutomaticGainControlChange.handleEchoCancellationChange;
  obj[2] = callback(TableSwitchRow.TableSwitchRow, obj);
  const items1 = [callback(UserSettingsVoice.UserSettingsTableRowGroup, obj), callback(VoiceProcessingOptions, {}), ];
  obj1 = { label: null, subLabel: null, value: null, onValueChange: null };
  const intl3 = getSystemLocale.intl;
  obj1[0] = intl3.string(getSystemLocale.t.cUMdH0);
  const intl4 = getSystemLocale.intl;
  obj1[1] = intl4.string(getSystemLocale.t["6EjbvA"]);
  obj1[2] = automaticGainControl;
  obj1[3] = handleAutomaticGainControlChange.handleAutomaticGainControlChange;
  const items2 = [callback(TableSwitchRow.TableSwitchRow, obj1), ];
  if (advancedVoiceActivitySupported) {
    const obj2 = { label: null, subLabel: null, value: null, onValueChange: null };
    const intl5 = tmp(1236).intl;
    obj2[0] = intl5.string(tmp(1236).t.BbESsg);
    const intl6 = tmp(1236).intl;
    obj2[1] = intl6.string(tmp(1236).t.LoOB1F);
    obj2[2] = vadUseKrisp;
    obj2[3] = function onValueChange(vadUseKrisp) {
      let obj = closure_1_1(closure_1_2[9]);
      obj = { vadUseKrisp };
      return obj.setMode(closure_0, obj);
    };
    advancedVoiceActivitySupported = callback(tmp(5993).TableSwitchRow, obj2);
  }
  const obj3 = { children: null };
  items2[1] = advancedVoiceActivitySupported;
  items1[2] = closure_6(UserSettingsVoice.UserSettingsTableRowGroup, { hasIcons: false, children: items2 });
  obj3[0] = items1;
  return closure_6(closure_7, obj3);
};
export { VoiceProcessingOptions };