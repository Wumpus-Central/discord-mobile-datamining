// === Module 17522: VoiceChannelAppActionSheet ===

// Module 17522 (VoiceChannelAppActionSheet)
import _modDef3947 from "module_3947" /* 3947 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import TableRowApplicationIconDefault from "TableRowApplicationIcon" /* 8611 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const none = "none";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_channel_apps/native/VoiceChannelAppActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceChannelAppActionSheet(guildId) {
  const cResult = onChange(576).c(15);
  ({ selectedApplicationId, onChange } = guildId);
  let obj = onChange(576);
  const voiceChannelAppSettingOptions = onChange(17520).useVoiceChannelAppSettingOptions(guildId.guildId, selectedApplicationId);
  ({ options, listState } = voiceChannelAppSettingOptions);
  if (cResult[0] !== onChange) {
    const fn = function n(arg0) {
      let tmp2 = null;
      if (arg0 !== none) {
        tmp2 = arg0;
      }
      onChange(tmp2);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    cResult[0] = onChange;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = onChange(1126).intl;
    const stringResult = intl.string(_modDef3947.AdT7SZ);
    cResult[2] = stringResult;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { title: tmp6 };
    const tmp11 = closure_4(onChange(6838).BottomSheetTitleHeader, obj3);
    cResult[3] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  let tmp12 = selectedApplicationId;
  if (selectedApplicationId == null) {
    tmp12 = none;
  }
  if (cResult[4] !== listState) {
    if ("loading" === listState) {
      const intl4 = onChange(1126).intl;
      let stringResult1 = intl4.string(onChange(1126).t.ZTNur7);
    } else {
      if ("failed" === listState) {
        const intl3 = onChange(1126).intl;
        stringResult1 = intl3.string(_modDef3947.X2xOBn);
      }
      const intl2 = onChange(1126).intl;
      stringResult1 = intl2.string(_modDef3947["4S6iHa"]);
    }
    cResult[4] = listState;
    cResult[5] = stringResult1;
  } else if (cResult[6] !== options) {
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(arg0) {
          applicationId = guildId.applicationId;
          ({ name, iconApplication } = guildId);
          obj = { value: applicationId, label: name, icon: closure_1_4(closure_1_1(closure_1_2[10]), { application: iconApplication }) };
          return closure_1_4(onChange(closure_1_2[9]).TableRadioRow, obj, applicationId);
        }
      }
      cResult[8] = I;
    } else {
      class I {
        constructor(arg0) {
          applicationId = guildId.applicationId;
          ({ name, iconApplication } = guildId);
          obj = { value: applicationId, label: name, icon: closure_1_4(closure_1_1(closure_1_2[10]), { application: iconApplication }) };
          return closure_1_4(onChange(closure_1_2[9]).TableRadioRow, obj, applicationId);
        }
      }
    }
    const mapped = options.map(I);
    cResult[6] = options;
    cResult[7] = mapped;
  } else {
    class I {
      constructor(arg0) {
        applicationId = guildId.applicationId;
        ({ name, iconApplication } = guildId);
        obj = { value: applicationId, label: name, icon: closure_1_4(closure_1_1(closure_1_2[10]), { application: iconApplication }) };
        return closure_1_4(onChange(closure_1_2[9]).TableRadioRow, obj, applicationId);
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(arg0) {
          applicationId = guildId.applicationId;
          ({ name, iconApplication } = guildId);
          obj = { value: applicationId, label: name, icon: closure_1_4(closure_1_1(closure_1_2[10]), { application: iconApplication }) };
          return closure_1_4(onChange(closure_1_2[9]).TableRadioRow, obj, applicationId);
        }
      }
      const obj4 = { value: none, label: null };
      const intl5 = onChange(1126).intl;
      obj4.label = intl5.string(_modDef3947.KEB4Rm);
      const tmp25 = closure_4(onChange(6261).TableRadioRow, obj4);
      cResult[9] = tmp25;
      const tmp22 = tmp25;
    } else {
      class I {
        constructor(arg0) {
          applicationId = guildId.applicationId;
          ({ name, iconApplication } = guildId);
          obj = { value: applicationId, label: name, icon: closure_1_4(closure_1_1(closure_1_2[10]), { application: iconApplication }) };
          return closure_1_4(onChange(closure_1_2[9]).TableRadioRow, obj, applicationId);
        }
      }
    }
    if (cResult[10] === tmp5) {
      class I {
        constructor(arg0) {
          applicationId = guildId.applicationId;
          ({ name, iconApplication } = guildId);
          obj = { value: applicationId, label: name, icon: closure_1_4(closure_1_1(closure_1_2[10]), { application: iconApplication }) };
          return closure_1_4(onChange(closure_1_2[9]).TableRadioRow, obj, applicationId);
        }
      }
    }
    const obj5 = { header: tmp9, children: null };
    const obj6 = { accessibilityLabel: tmp6, value: tmp12, onChange: tmp5, helperText: tmp13, hasIcons: true, children: null };
    const items = [tmp18, tmp22];
    obj6.children = items;
    obj5.children = closure_5(onChange(6262).TableRadioGroup, obj6);
    const tmp29 = closure_4(onChange(6898).ActionSheet, obj5);
    cResult[10] = tmp5;
    cResult[11] = tmp12;
    cResult[12] = tmp13;
    cResult[13] = tmp18;
    cResult[14] = tmp29;
  }
  const obj2 = onChange(17520);
}) : (function VoiceChannelAppActionSheet(guildId) {
  ({ selectedApplicationId, onChange } = guildId);
  const voiceChannelAppSettingOptions = onChange(17520).useVoiceChannelAppSettingOptions(guildId.guildId, selectedApplicationId);
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
  const intl = onChange(1126).intl;
  const stringResult = intl.string(_modDef3947.AdT7SZ);
  const obj2 = { header: closure_4(onChange(6838).BottomSheetTitleHeader, { title: stringResult }), children: null };
  const obj3 = { accessibilityLabel: stringResult, value: null, onChange: null, helperText: null, hasIcons: true, children: null };
  if (selectedApplicationId == null) {
    selectedApplicationId = none;
  }
  obj3.value = selectedApplicationId;
  obj3.onChange = callback;
  if ("loading" === listState) {
    const intl4 = onChange(1126).intl;
    let stringResult1 = intl4.string(onChange(1126).t.ZTNur7);
  } else if ("failed" === listState) {
    const intl3 = onChange(1126).intl;
    stringResult1 = intl3.string(_modDef3947.X2xOBn);
  } else if ("empty" === listState) {
    const intl2 = onChange(1126).intl;
    stringResult1 = intl2.string(_modDef3947["4S6iHa"]);
  }
  obj3.helperText = stringResult1;
  const items1 = [
    options.map((applicationId) => {
      applicationId = applicationId.applicationId;
      ({ name, iconApplication } = applicationId);
      return closure_1_4(onChange(6261).TableRadioRow, { value: applicationId, label: name, icon: closure_1_4(TableRowApplicationIconDefault, { application: iconApplication }) }, applicationId);
    }),

  ];
  const obj4 = { value: none, label: null };
  const intl5 = onChange(1126).intl;
  obj4.label = intl5.string(_modDef3947.KEB4Rm);
  items1[1] = closure_4(onChange(6261).TableRadioRow, obj4);
  obj3.children = items1;
  obj2.children = closure_5(onChange(6262).TableRadioGroup, obj3);
  return closure_4(onChange(6898).ActionSheet, obj2);
});
export const VOICE_CHANNEL_APP_ACTION_SHEET_KEY = "VoiceChannelAppActionSheet";