// === Module 11901: AppLauncherSelectOptionFormRow ===

// Module 11901 (AppLauncherSelectOptionFormRow)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5086 */;
import _modDef6822 from "module_6822" /* 6822 */;
import Form from "Form" /* 8555 */;
import useAnimationDelayedAutoFocus from "useAnimationDelayedAutoFocus" /* 11873 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["style", "option", "selected", "selectedItemName", "unselectedSubLabel", "autoFocus"];
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { formRow: { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, alignItems: "center", flex: 1 } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, alignItems: "center", flex: 1 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherSelectOptionFormRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherSelectOptionFormRow(unselectedSubLabel) {
  const cResult = require("c").c(25);
  if (cResult[0] !== unselectedSubLabel) {
    ({ style, option, selected, selectedItemName } = unselectedSubLabel);
    _require = selectedItemName;
    unselectedSubLabel = unselectedSubLabel.unselectedSubLabel;
    importDefault = unselectedSubLabel;
    const autoFocus = unselectedSubLabel.autoFocus;
    const tmp13 = _objectWithoutProperties(unselectedSubLabel, closure_3);
    cResult[0] = unselectedSubLabel;
    cResult[1] = autoFocus;
    cResult[2] = option;
    cResult[3] = tmp13;
    cResult[4] = selected;
    cResult[5] = selectedItemName;
    cResult[6] = style;
    cResult[7] = unselectedSubLabel;
    let tmp9 = style;
    let tmp7 = selected;
    let tmp6 = tmp13;
    let tmp5 = option;
    let tmp4 = autoFocus;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    _require = cResult[5];
    tmp9 = cResult[6];
    importDefault = cResult[7];
  }
  const tmp14 = closure_6();
  const obj = require("c");
  const animationDelayedAutoFocus = require("useAnimationDelayedAutoFocus").useAnimationDelayedAutoFocus(tmp4, tmp6.onPress);
  if (cResult[8] === tmp9) {
    if (cResult[9] === tmp14.formRow) {
      let tmp16 = cResult[10];
    }
    let str = "text-md/medium";
    if (tmp7) {
      str = "text-sm/medium";
    }
    let str2 = "text-default";
    if (tmp7) {
      str2 = "interactive-text-default";
    }
    if (cResult[11] === tmp5.displayName) {
      if (cResult[12] === str) {
        if (cResult[13] === str2) {
          let tmp17 = cResult[14];
        }
        if (cResult[15] === tmp7) {
          if (cResult[16] === selectedItemName) {
            if (cResult[17] === tmp10) {
              const _Symbol = Symbol;
              if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                const obj2 = { source: _modDef6822, size: tmp(1200).IconSizes.SMALL_20 };
                const tmp26 = jsx(tmp(1200).Icon, { source: _modDef6822, size: tmp(1200).IconSizes.SMALL_20 });
                cResult[19] = tmp26;
                let tmp23 = tmp26;
              } else {
                tmp23 = cResult[19];
              }
              if (cResult[20] === tmp6) {
                if (cResult[21] === tmp16) {
                  if (cResult[22] === tmp17) {
                    if (cResult[23] === tmp20) {
                      let tmp27 = cResult[24];
                    }
                    return tmp27;
                  }
                }
              }
              const obj3 = { start: true, end: true, style: tmp16, label: tmp17, subLabel: cResult[18], trailing: tmp23 };
              const merged = Object.assign(tmp6);
              const tmp32 = jsx(tmp(8555).FormRow, { start: true, end: true, style: tmp16, label: tmp17, subLabel: cResult[18], trailing: tmp23 });
              cResult[20] = tmp6;
              cResult[21] = tmp16;
              cResult[22] = tmp17;
              cResult[23] = cResult[18];
              cResult[24] = tmp32;
              tmp27 = tmp32;
            }
          }
        }
        if (tmp7) {
          let fn = () => jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children });
        } else {
          fn = null;
          if (null != tmp10) {
            fn = () => jsx(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", lineClamp: 1, children: children2 });
          }
        }
        cResult[15] = tmp7;
        cResult[16] = selectedItemName;
        cResult[17] = tmp10;
        cResult[18] = fn;
      }
    }
    const obj4 = { variant: str, color: str2, lineClamp: 1, children: tmp5.displayName };
    const tmp19 = jsx(tmp(5086).Text, { variant: str, color: str2, lineClamp: 1, children: tmp5.displayName });
    cResult[11] = tmp5.displayName;
    cResult[12] = str;
    cResult[13] = str2;
    cResult[14] = tmp19;
    tmp17 = tmp19;
  }
  const items = [tmp14.formRow, tmp9];
  cResult[8] = tmp9;
  cResult[9] = tmp14.formRow;
  cResult[10] = items;
  tmp16 = items;
  const tmpResult = require("useAnimationDelayedAutoFocus");
}) : (function AppLauncherSelectOptionFormRow(arg0) {
  ({ selected, selectedItemName: require, unselectedSubLabel } = arg0);
  ({ style, option, autoFocus } = arg0);
  const merged = Object.assign(arg0, Object.assign({ style: 0, option: 0, selected: 0, selectedItemName: 0, unselectedSubLabel: 0, autoFocus: 0 }));
  const tmp2 = closure_6();
  const animationDelayedAutoFocus = useAnimationDelayedAutoFocus.useAnimationDelayedAutoFocus(autoFocus, merged.onPress);
  const obj2 = { start: true, end: true, style: null, label: null, subLabel: null, trailing: null };
  const items = [tmp2.formRow, style];
  obj2.style = items;
  let str = "text-md/medium";
  if (selected) {
    str = "text-sm/medium";
  }
  const obj3 = { variant: str, color: null, lineClamp: 1, children: null };
  let str2 = "text-default";
  if (selected) {
    str2 = "interactive-text-default";
  }
  obj3.color = str2;
  obj3.children = option.displayName;
  obj2.label = jsx(Text_Text.Text, { variant: str, color: null, lineClamp: 1, children: null });
  if (selected) {
    let fn = () => jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children });
  } else {
    fn = null;
    if (null != unselectedSubLabel) {
      fn = () => jsx(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", lineClamp: 1, children: unselectedSubLabel });
    }
  }
  obj2.subLabel = fn;
  obj2.trailing = jsx(native.Icon, { source: unselectedSubLabel(6822), size: native.IconSizes.SMALL_20 });
  const merged1 = Object.assign(merged);
  return jsx(Form.FormRow, { start: true, end: true, style: null, label: null, subLabel: null, trailing: null });
});