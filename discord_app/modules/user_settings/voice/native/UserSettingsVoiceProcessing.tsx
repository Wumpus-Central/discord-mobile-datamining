// discord_app/modules/user_settings/voice/native/UserSettingsVoiceProcessing.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AudioActionCreatorsDefault from "../../../../actions/AudioActionCreators.tsx";
import UserSettingsVoiceUtils from "UserSettingsVoiceUtils.tsx";
import NoiseCancellationUtils from "../../../noise_cancellation/NoiseCancellationUtils.tsx";
import KrispLogoDefault from "KrispLogo.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

const util = EUNgko(1115);
const Text_Text = EUNgko(4718);
const TableRadioGroup = EUNgko(5855);
const TableRadioRow = EUNgko(5858);
const TableSwitchRow = EUNgko(7396);
const UserSettingsVoice = EUNgko(10223);
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
      obj1 = { style: null, children: null };
      obj1.style = krisp.optionsParentContainer;
      obj15 = { value: null, onChange: null, title: null, hasIcons: false, children: null };
      obj15.value = selectedNoiseSuppressionOption;
      obj15.onChange = function noiseCancellationChanged(arg0) {
        AudioActionCreatorsDefault.setNoiseCancellation(arg0 === UserSettingsVoiceUtils.NoiseSuppressionOpt.KRISP);
        AudioActionCreatorsDefault.setNoiseSuppression(arg0 === UserSettingsVoiceUtils.NoiseSuppressionOpt.STANDARD);
      };
      intl3 = EUNgko(tmp[11]).intl;
      obj15.title = intl3.string(EUNgko(tmp[11]).t.t8Qhib);
      tmp8 = jsx;
      obj16 = { value: null, label: null, disabled: null };
      obj16.value = EUNgko(tmp[7]).NoiseSuppressionOpt.KRISP;
      intl4 = EUNgko(tmp[11]).intl;
      obj16.label = intl4.string(EUNgko(tmp[11]).t.rdoNzt);
      obj16.disabled = noiseCancellationDeferredToSystem;
      items1 = [, ,];
      items1[0] = jsx(EUNgko(tmp[12]).TableRadioRow, obj16);
      obj17 = { disabled: null, value: null, label: null };
      obj17.disabled = noiseCancellationDeferredToSystem;
      obj17.value = EUNgko(tmp[7]).NoiseSuppressionOpt.STANDARD;
      intl5 = EUNgko(tmp[11]).intl;
      obj17.label = intl5.string(EUNgko(tmp[11]).t.qXeYHw);
      items1[1] = jsx(EUNgko(tmp[12]).TableRadioRow, obj17);
      obj18 = { disabled: null, value: null, label: null };
      obj18.disabled = noiseCancellationDeferredToSystem;
      obj18.value = EUNgko(tmp[7]).NoiseSuppressionOpt.NONE;
      intl6 = EUNgko(tmp[11]).intl;
      obj18.label = intl6.string(EUNgko(tmp[11]).t.wkYAlz);
      items1[2] = jsx(EUNgko(tmp[12]).TableRadioRow, obj18);
      obj15.children = items1;
      items2 = [,];
      items2[0] = jsxs(EUNgko(tmp[10]).TableRadioGroup, obj15);
      obj19 = { style: null, children: null };
      obj19.style = krisp.optionsDescriptionContainer;
      Text = EUNgko(tmp[13]).Text;
      intl7 = EUNgko(tmp[11]).intl;
      if (noiseCancellationDeferredToSystem) {
        EUNgko = EUNgko(tmp[11]).t.EUNgko;
        obj20 = { onSettingsClick: null };
        obj20.onSettingsClick = function onSettingsClick() {
          const mediaEngine = MediaEngineStore.getMediaEngine();
          const result = mediaEngine.showSystemCaptureConfigurationUI("microphone_modes");
        };
        formatResult = intl7.format(EUNgko, obj20);
      } else {
        formatResult = intl7.string(EUNgko(tmp[11]).t.k6h1F4);
      }
      obj21 = { variant: "text-xs/medium", color: "text-muted", children: null };
      obj21.children = formatResult;
      items3 = [,];
      items3[0] = tmp8(Text, obj21);
      obj22 = { style: null, children: null };
      krisp = krisp.krisp;
      obj22.style = krisp;
      tmp10 = closure_1;
      tmp = tmp8(closure_1(tmp[14]), {});
      obj22.children = tmp;
      Text = tmp8(tmp7, obj22);
      items3[1] = Text;
      obj19.children = items3;
      obj19 = tmp6(tmp7, obj19);
      items2[1] = obj19;
      obj1.children = items2;
      tmp6Result = tmp6(tmp7, obj1);
    } else {
      tmp5 = jsx;
      obj23 = { hasIcons: false, children: null };
      obj24 = { label: null, subLabel: null, value: null, onValueChange: null };
      intl = EUNgko(tmp[11]).intl;
      obj24.label = intl.string(EUNgko(tmp[11]).t.t8Qhib);
      intl2 = EUNgko(tmp[11]).intl;
      obj24.subLabel = intl2.string(EUNgko(tmp[11]).t.najZCV);
      obj24.value = selectedNoiseSuppressionOption === EUNgko(tmp[7]).NoiseSuppressionOpt.STANDARD;
      obj24.onValueChange = function onValueChange(arg0) {
        const NoiseSuppressionOpt = UserSettingsVoiceUtils.NoiseSuppressionOpt;
        return UserSettingsVoiceUtils.handleNoiseSuppressionChange(
          arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE,
        );
      };
      obj23.children = jsx(EUNgko(tmp[16]).TableSwitchRow, obj24);
      return jsx(EUNgko(tmp[15]).UserSettingsTableRowGroup, obj23);
    }
    return;
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4722);
let obj2 = {
  optionsParentContainer: { marginTop: 12 },
  optionsDescriptionContainer: { paddingTop: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_4 },
  krisp: { marginStart: -20 },
};
const React6 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceProcessing.tsx");

export default function UserSettingsVoiceProcessing() {
  const items = [MediaEngineStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => ({
    echoCancellation: MediaEngineStore.getEchoCancellation(),
    advancedVoiceActivitySupported: MediaEngineStore.isAdvancedVoiceActivitySupported(),
    automaticGainControl: MediaEngineStore.getAutomaticGainControl(),
    inputMode: MediaEngineStore.getMode(),
    vadUseKrisp: MediaEngineStore.getModeOptions().vadUseKrisp,
  }));
  ({ advancedVoiceActivitySupported, inputMode: require } = stateFromStoresObject);
  ({ echoCancellation, automaticGainControl, vadUseKrisp } = stateFromStoresObject);
  const obj2 = { title: null, hasIcons: false, children: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t["6I6GUv"]);
  const obj3 = { label: null, value: null, onValueChange: null };
  const intl2 = util.intl;
  obj3.label = intl2.string(util.t.iWTwu6);
  obj3.value = echoCancellation;
  obj3.onValueChange = UserSettingsVoiceUtils.handleEchoCancellationChange;
  obj2.children = closure_5(TableSwitchRow.TableSwitchRow, obj3);
  const items1 = [closure_5(UserSettingsVoice.UserSettingsTableRowGroup, obj2), closure_5(VoiceProcessingOptions, {})];
  const obj4 = { label: null, subLabel: null, value: null, onValueChange: null };
  const intl3 = util.intl;
  obj4.label = intl3.string(util.t.cUMdH0);
  const intl4 = util.intl;
  obj4.subLabel = intl4.string(util.t["6EjbvA"]);
  obj4.value = automaticGainControl;
  obj4.onValueChange = UserSettingsVoiceUtils.handleAutomaticGainControlChange;
  const items2 = [closure_5(TableSwitchRow.TableSwitchRow, obj4)];
  if (advancedVoiceActivitySupported) {
    const obj5 = { label: null, subLabel: null, value: null, onValueChange: null };
    const intl5 = util.intl;
    obj5.label = intl5.string(util.t.BbESsg);
    const intl6 = util.intl;
    obj5.subLabel = intl6.string(util.t.LoOB1F);
    obj5.value = vadUseKrisp;
    obj5.onValueChange = function onValueChange(vadUseKrisp) {
      return AudioActionCreatorsDefault.setMode(require, { vadUseKrisp });
    };
    advancedVoiceActivitySupported = closure_5(TableSwitchRow.TableSwitchRow, obj5);
  }
  const obj6 = { children: null };
  items2[1] = advancedVoiceActivitySupported;
  items1[2] = closure_6(UserSettingsVoice.UserSettingsTableRowGroup, { hasIcons: false, children: items2 });
  obj6.children = items1;
  return closure_6(closure_7, obj6);
}
export { VoiceProcessingOptions };
