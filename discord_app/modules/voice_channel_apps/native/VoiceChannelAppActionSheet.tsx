// === Module 18848: VoiceChannelAppActionSheet ===

// Module 18848 (VoiceChannelAppActionSheet)
import _modDef3963 from "module_3963" /* 3963 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import TableRowApplicationIconDefault from "TableRowApplicationIcon" /* 9030 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const none = "none";
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_channel_apps/native/VoiceChannelAppActionSheet.tsx");

export default function VoiceChannelAppActionSheet(guildId) {
  ({ selectedApplicationId, onChange } = guildId);
  const voiceChannelAppSettingOptions = onChange(18846).useVoiceChannelAppSettingOptions(guildId.guildId, selectedApplicationId);
  ({ options, listState } = voiceChannelAppSettingOptions);
  const items = [onChange];
  const callback = noop.useCallback((arg0) => {
    let tmp2 = null;
    if (arg0 !== none) {
      tmp2 = arg0;
    }
    onChange(tmp2);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  const intl = onChange(1114).intl;
  const stringResult = intl.string(_modDef3963.AdT7SZ);
  const obj2 = { header: closure_4(onChange(7315).BottomSheetTitleHeader, { title: stringResult }), children: null };
  const obj3 = { accessibilityLabel: stringResult, value: null, onChange: null, helperText: null, hasIcons: true, children: null };
  if (selectedApplicationId == null) {
    selectedApplicationId = none;
  }
  obj3.value = selectedApplicationId;
  obj3.onChange = callback;
  if ("loading" === listState) {
    const intl4 = onChange(1114).intl;
    let stringResult1 = intl4.string(onChange(1114).t.ZTNur7);
  } else if ("failed" === listState) {
    const intl3 = onChange(1114).intl;
    stringResult1 = intl3.string(_modDef3963.X2xOBn);
  } else if ("empty" === listState) {
    const intl2 = onChange(1114).intl;
    stringResult1 = intl2.string(_modDef3963["4S6iHa"]);
  }
  obj3.helperText = stringResult1;
  const items1 = [
    options.map((applicationId) => {
      applicationId = applicationId.applicationId;
      ({ name, iconApplication } = applicationId);
      return closure_1_4(onChange(7055).TableRadioRow, { value: applicationId, label: name, icon: closure_1_4(TableRowApplicationIconDefault, { application: iconApplication }) }, applicationId);
    }),

  ];
  const obj4 = { value: none, label: null };
  const intl5 = onChange(1114).intl;
  obj4.label = intl5.string(_modDef3963.KEB4Rm);
  items1[1] = closure_4(onChange(7055).TableRadioRow, obj4);
  obj3.children = items1;
  obj2.children = closure_5(onChange(7052).TableRadioGroup, obj3);
  return closure_4(onChange(7360).ActionSheet, obj2);
};
export const VOICE_CHANNEL_APP_ACTION_SHEET_KEY = "VoiceChannelAppActionSheet";