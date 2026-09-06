// discord_app/modules/user_settings/voice/native/UserSettingsVoiceProcessing.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AudioActionCreatorsDefault from "../../../../actions/AudioActionCreators.tsx";
import UserSettingsVoiceUtils from "UserSettingsVoiceUtils.tsx";
import NoiseCancellationUtils from "../../../noise_cancellation/NoiseCancellationUtils.tsx";
import KrispLogoDefault from "KrispLogo.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

const util = EUNgko(1114);
const Text_Text = EUNgko(4556);
const TableRadioGroup = EUNgko(5685);
const TableRadioRow = EUNgko(5688);
const TableSwitchRow = EUNgko(7201);
const UserSettingsVoice = EUNgko(9979);
require = fn;
class VoiceProcessingOptions {
  constructor() {
    krisp = closure_8();
    EUNgko = closure_0;
    tmp = closure_2;
    obj = closure_0(closure_2[6]);
    items = [];
    items[0] = closure_4;
    stateFromStores = obj.useStateFromStores(items, () => MediaEngineStore.isNoiseCancellationSupported());
    obj2 = closure_0(closure_2[7]);
    selectedNoiseSuppressionOption = obj2.useSelectedNoiseSuppressionOption();
    obj3 = closure_0(closure_2[8]);
    noiseCancellationDeferredToSystem = obj3.useNoiseCancellationDeferredToSystem();
    if (stateFromStores) {
      tmp6 = jsxs;
      tmp7 = View;
      obj = { style: null, children: null };
      obj.style = krisp.optionsParentContainer;
      obj1 = { value: null, onChange: null, title: null, hasIcons: false, children: null };
      obj1.value = selectedNoiseSuppressionOption;
      obj1.onChange = function noiseCancellationChanged(arg0) {
        AudioActionCreatorsDefault.setNoiseCancellation(arg0 === UserSettingsVoiceUtils.NoiseSuppressionOpt.KRISP);
        AudioActionCreatorsDefault.setNoiseSuppression(arg0 === UserSettingsVoiceUtils.NoiseSuppressionOpt.STANDARD);
      };
      intl3 = EUNgko(tmp[11]).intl;
      obj1.title = intl3.string(EUNgko(tmp[11]).t.t8Qhib);
      tmp8 = jsx;
      obj2 = { value: null, label: null, disabled: null };
      obj2.value = EUNgko(tmp[7]).NoiseSuppressionOpt.KRISP;
      intl4 = EUNgko(tmp[11]).intl;
      obj2.label = intl4.string(EUNgko(tmp[11]).t.rdoNzt);
      obj2.disabled = noiseCancellationDeferredToSystem;
      items1 = [, ,];
      items1[0] = jsx(EUNgko(tmp[12]).TableRadioRow, obj2);
      obj3 = { disabled: null, value: null, label: null };
      obj3.disabled = noiseCancellationDeferredToSystem;
      obj3.value = EUNgko(tmp[7]).NoiseSuppressionOpt.STANDARD;
      intl5 = EUNgko(tmp[11]).intl;
      obj3.label = intl5.string(EUNgko(tmp[11]).t.qXeYHw);
      items1[1] = jsx(EUNgko(tmp[12]).TableRadioRow, obj3);
      obj4 = { disabled: null, value: null, label: null };
      obj4.disabled = noiseCancellationDeferredToSystem;
      obj4.value = EUNgko(tmp[7]).NoiseSuppressionOpt.NONE;
      intl6 = EUNgko(tmp[11]).intl;
      obj4.label = intl6.string(EUNgko(tmp[11]).t.wkYAlz);
      items1[2] = jsx(EUNgko(tmp[12]).TableRadioRow, obj4);
      obj1.children = items1;
      items2 = [,];
      items2[0] = jsxs(EUNgko(tmp[10]).TableRadioGroup, obj1);
      obj5 = { style: null, children: null };
      obj5.style = krisp.optionsDescriptionContainer;
      Text = EUNgko(tmp[13]).Text;
      intl7 = EUNgko(tmp[11]).intl;
      if (noiseCancellationDeferredToSystem) {
        EUNgko = EUNgko(tmp[11]).t.EUNgko;
        obj6 = { onSettingsClick: null };
        obj6.onSettingsClick = function onSettingsClick() {
          const mediaEngine = MediaEngineStore.getMediaEngine();
          const result = mediaEngine.showSystemCaptureConfigurationUI("microphone_modes");
        };
        formatResult = intl7.format(EUNgko, obj6);
      } else {
        formatResult = intl7.string(EUNgko(tmp[11]).t.k6h1F4);
      }
      obj7 = { variant: "text-xs/medium", color: "text-muted", children: null };
      obj7.children = formatResult;
      items3 = [,];
      items3[0] = tmp8(Text, obj7);
      obj8 = { style: null, children: null };
      krisp = krisp.krisp;
      obj8.style = krisp;
      tmp10 = closure_1;
      tmp = tmp8(closure_1(tmp[14]), {});
      obj8.children = tmp;
      Text = tmp8(tmp7, obj8);
      items3[1] = Text;
      obj5.children = items3;
      obj5 = tmp6(tmp7, obj5);
      items2[1] = obj5;
      obj.children = items2;
      tmp6Result = tmp6(tmp7, obj);
    } else {
      tmp5 = jsx;
      obj9 = { hasIcons: false, children: null };
      obj10 = { label: null, subLabel: null, value: null, onValueChange: null };
      intl = EUNgko(tmp[11]).intl;
      obj10.label = intl.string(EUNgko(tmp[11]).t.t8Qhib);
      intl2 = EUNgko(tmp[11]).intl;
      obj10.subLabel = intl2.string(EUNgko(tmp[11]).t.najZCV);
      obj10.value = selectedNoiseSuppressionOption === EUNgko(tmp[7]).NoiseSuppressionOpt.STANDARD;
      obj10.onValueChange = function onValueChange(arg0) {
        const NoiseSuppressionOpt = UserSettingsVoiceUtils.NoiseSuppressionOpt;
        return UserSettingsVoiceUtils.handleNoiseSuppressionChange(
          arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE,
        );
      };
      obj9.children = jsx(EUNgko(tmp[16]).TableSwitchRow, obj10);
      return jsx(EUNgko(tmp[15]).UserSettingsTableRowGroup, obj9);
    }
    return;
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
fn(4560);
let createStyles = { optionsParentContainer: { marginTop: 12 }, optionsDescriptionContainer: null, krisp: null };
createStyles = { paddingTop: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_4 };
createStyles.optionsDescriptionContainer = createStyles;
createStyles.krisp = { marginStart: -20 };
const React6 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceProcessing.tsx");

export default function UserSettingsVoiceProcessing() {
  let obj = initialize;
  const items = [MediaEngineStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({
    echoCancellation: MediaEngineStore.getEchoCancellation(),
    advancedVoiceActivitySupported: MediaEngineStore.isAdvancedVoiceActivitySupported(),
    automaticGainControl: MediaEngineStore.getAutomaticGainControl(),
    inputMode: MediaEngineStore.getMode(),
    vadUseKrisp: MediaEngineStore.getModeOptions().vadUseKrisp,
  }));
  ({ advancedVoiceActivitySupported, inputMode: require } = stateFromStoresObject);
  ({ echoCancellation, automaticGainControl, vadUseKrisp } = stateFromStoresObject);
  obj = { title: null, hasIcons: false, children: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["6I6GUv"]);
  obj = { label: null, value: null, onValueChange: null };
  const intl2 = util.intl;
  obj.label = intl2.string(util.t.iWTwu6);
  obj.value = echoCancellation;
  obj.onValueChange = UserSettingsVoiceUtils.handleEchoCancellationChange;
  obj.children = closure_5(TableSwitchRow.TableSwitchRow, obj);
  const items1 = [closure_5(UserSettingsVoice.UserSettingsTableRowGroup, obj), closure_5(VoiceProcessingOptions, {})];
  const obj1 = { label: null, subLabel: null, value: null, onValueChange: null };
  const intl3 = util.intl;
  obj1.label = intl3.string(util.t.cUMdH0);
  const intl4 = util.intl;
  obj1.subLabel = intl4.string(util.t["6EjbvA"]);
  obj1.value = automaticGainControl;
  obj1.onValueChange = UserSettingsVoiceUtils.handleAutomaticGainControlChange;
  const items2 = [closure_5(TableSwitchRow.TableSwitchRow, obj1)];
  if (advancedVoiceActivitySupported) {
    const obj2 = { label: null, subLabel: null, value: null, onValueChange: null };
    const intl5 = util.intl;
    obj2.label = intl5.string(util.t.BbESsg);
    const intl6 = util.intl;
    obj2.subLabel = intl6.string(util.t.LoOB1F);
    obj2.value = vadUseKrisp;
    obj2.onValueChange = function onValueChange(vadUseKrisp) {
      const obj = { vadUseKrisp };
      return obj.setMode(require, obj);
    };
    advancedVoiceActivitySupported = closure_5(TableSwitchRow.TableSwitchRow, obj2);
  }
  const obj3 = { children: null };
  items2[1] = advancedVoiceActivitySupported;
  items1[2] = closure_6(UserSettingsVoice.UserSettingsTableRowGroup, { hasIcons: false, children: items2 });
  obj3.children = items1;
  return closure_6(closure_7, obj3);
}
export { VoiceProcessingOptions };
