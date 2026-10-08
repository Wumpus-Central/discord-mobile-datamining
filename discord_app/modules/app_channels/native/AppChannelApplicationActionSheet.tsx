// === Module 8588: AppChannelApplicationActionSheet ===

// Module 8588 (AppChannelApplicationActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import TableRowApplicationIconDefault from "TableRowApplicationIcon" /* 8587 */;
import getAppChannelApplicationUnsupportedTextDefault from "getAppChannelApplicationUnsupportedText" /* 8589 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/native/AppChannelApplicationActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AppChannelApplicationActionSheet(arg0) {
  const cResult = onChange(576).c(11);
  ({ selectedApplicationId, onChange } = arg0);
  ({ guildId, channelId } = arg0);
  const obj = onChange(576);
  options = onChange(8584).useAppChannelApplicationOptions(guildId, channelId, selectedApplicationId).options;
  if (cResult[0] !== onChange) {
    const fn = function l(arg0) {
      onChange(arg0);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    cResult[0] = onChange;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { title: null };
    const intl = onChange(1126).intl;
    obj3.title = intl.string(onChange(1126).t.F2FMFR);
    const tmp7 = jsx(onChange(6828).BottomSheetTitleHeader, { title: null });
    cResult[2] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = onChange(1126).intl;
    const stringResult = intl2.string(onChange(1126).t.F2FMFR);
    cResult[3] = stringResult;
    let tmp8 = stringResult;
  } else {
    tmp8 = cResult[3];
  }
  let str = selectedApplicationId;
  if (selectedApplicationId == null) {
    str = "";
  }
  if (cResult[4] !== options) {
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor(arg0) {
          ({ application, status } = arg0);
          obj = { value: application.id, label: application.name, subLabel: closure_1_1(closure_1_2[9])(status), disabled: !status.supported, icon: closure_1_4(closure_1_1(closure_1_2[10]), { application }) };
          return closure_1_4(onChange(closure_1_2[8]).TableRadioRow, obj, application.id);
        }
      }
      cResult[6] = S;
    } else {
      class S {
        constructor(arg0) {
          ({ application, status } = arg0);
          obj = { value: application.id, label: application.name, subLabel: closure_1_1(closure_1_2[9])(status), disabled: !status.supported, icon: closure_1_4(closure_1_1(closure_1_2[10]), { application }) };
          return closure_1_4(onChange(closure_1_2[8]).TableRadioRow, obj, application.id);
        }
      }
    }
    const mapped = options.map(S);
    cResult[4] = options;
    cResult[5] = mapped;
  } else {
    class S {
      constructor(arg0) {
        ({ application, status } = arg0);
        obj = { value: application.id, label: application.name, subLabel: closure_1_1(closure_1_2[9])(status), disabled: !status.supported, icon: closure_1_4(closure_1_1(closure_1_2[10]), { application }) };
        return closure_1_4(onChange(closure_1_2[8]).TableRadioRow, obj, application.id);
      }
    }
    if (cResult[7] === tmp4) {
      class S {
        constructor(arg0) {
          ({ application, status } = arg0);
          obj = { value: application.id, label: application.name, subLabel: closure_1_1(closure_1_2[9])(status), disabled: !status.supported, icon: closure_1_4(closure_1_1(closure_1_2[10]), { application }) };
          return closure_1_4(onChange(closure_1_2[8]).TableRadioRow, obj, application.id);
        }
      }
    }
    const obj4 = { header: tmp5, children: null };
    const obj5 = { accessibilityLabel: tmp8, value: str, onChange: tmp4, hasIcons: true, children: tmp10 };
    obj4.children = jsx(onChange(6265).TableRadioGroup, { accessibilityLabel: tmp8, value: str, onChange: tmp4, hasIcons: true, children: tmp10 });
    const tmp16 = jsx(onChange(6885).ActionSheet, { header: tmp5, children: null });
    cResult[7] = tmp4;
    cResult[8] = str;
    cResult[9] = tmp10;
    cResult[10] = tmp16;
  }
  const obj2 = onChange(8584);
}) : (function AppChannelApplicationActionSheet(arg0) {
  ({ selectedApplicationId, onChange } = arg0);
  ({ guildId, channelId } = arg0);
  options = onChange(8584).useAppChannelApplicationOptions(guildId, channelId, selectedApplicationId).options;
  const items = [onChange];
  const callback = noop.useCallback((arg0) => {
    onChange(arg0);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  const obj2 = { header: null, children: null };
  const obj3 = { title: null };
  const intl = onChange(1126).intl;
  obj3.title = intl.string(onChange(1126).t.F2FMFR);
  obj2.header = jsx(onChange(6828).BottomSheetTitleHeader, { title: null });
  const obj4 = { accessibilityLabel: null, value: null, onChange: null, hasIcons: true, children: null };
  const intl2 = onChange(1126).intl;
  obj4.accessibilityLabel = intl2.string(onChange(1126).t.F2FMFR);
  if (selectedApplicationId == null) {
    selectedApplicationId = "";
  }
  obj4.value = selectedApplicationId;
  obj4.onChange = callback;
  obj4.children = options.map((item) => {
    ({ application, status } = item);
    return jsx(onChange(6264).TableRadioRow, { value: application.id, label: application.name, subLabel: getAppChannelApplicationUnsupportedTextDefault(status), disabled: !status.supported, icon: jsx(TableRowApplicationIconDefault, { application }) }, application.id);
  });
  obj2.children = jsx(onChange(6265).TableRadioGroup, { accessibilityLabel: null, value: null, onChange: null, hasIcons: true, children: null });
  return jsx(onChange(6885).ActionSheet, { header: null, children: null });
});
export const APP_CHANNEL_APPLICATION_ACTION_SHEET_KEY = "AppChannelApplicationActionSheet";