// === Module 11816: AppLauncherSelectOptionFormRow ===

// Module 11816 (AppLauncherSelectOptionFormRow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4892 */;
import AssetRegistryDefault from "AssetRegistry" /* 6645 */;
import Form from "Form" /* 8924 */;
import useAnimationDelayedAutoFocus from "useAnimationDelayedAutoFocus" /* 11806 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let obj2;
let closure_3 = ["style", "option", "selected", "selectedItemName", "unselectedSubLabel", "autoFocus"];
const jsx = Fragment.jsx;
let obj = { formRow: obj2 };
obj2 = { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, alignItems: "center", flex: 1 };
let closure_6 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((unselectedSubLabel) => {
  let children;
  let children2;
  let option;
  let selected;
  let selectedItemName;
  let style;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp9;
  const obj = require("react");
  const cResult = obj.c(25);
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
    tmp9 = style;
    tmp7 = selected;
    tmp6 = tmp13;
    tmp5 = option;
    tmp4 = autoFocus;
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
  const onPress = tmp6.onPress;
  const tmpResult = require("useAnimationDelayedAutoFocus");
  const animationDelayedAutoFocus = tmpResult.useAnimationDelayedAutoFocus(tmp4, onPress);
  if (cResult[8] === tmp9) {
    let tmp16;
    if (cResult[9] === tmp14.formRow) {
      tmp16 = cResult[10];
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
        let tmp17;
        let fn;
        if (cResult[13] === str2) {
          tmp17 = cResult[14];
        }
        if (cResult[15] === tmp7) {
          if (cResult[16] === selectedItemName) {
            let tmp20;
            let tmp22;
            if (cResult[17] === tmp10) {
              tmp20 = cResult[18];
            }
            const _Symbol = Symbol;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const Icon = tmp(1188).Icon;
              const tmp25 = <Icon source={AssetRegistryDefault} size={require("native").IconSizes.SMALL_20} />;
              cResult[19] = tmp25;
              tmp22 = tmp25;
            } else {
              tmp22 = cResult[19];
            }
            if (cResult[20] === tmp6) {
              if (cResult[21] === tmp16) {
                if (cResult[22] === tmp17) {
                  let tmp26;
                  if (cResult[23] === tmp20) {
                    tmp26 = cResult[24];
                  }
                  return tmp26;
                }
              }
            }
            const FormRow = tmp(8924).FormRow;
            const merged = Object.assign(tmp6);
            const tmp31 = <FormRow start end style={tmp16} label={tmp17} subLabel={tmp20} trailing={tmp22} />;
            cResult[20] = tmp6;
            cResult[21] = tmp16;
            cResult[22] = tmp17;
            cResult[23] = tmp20;
            cResult[24] = tmp31;
            tmp26 = tmp31;
          }
        }
        if (tmp7) {
          fn = () => jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children });
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
        tmp20 = fn;
      }
    }
    const tmp19 = jsx(require("Text/Text").Text, { variant: str, color: str2, lineClamp: 1, children: tmp5.displayName });
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
}) : ((arg0) => {
  let autoFocus;
  let children;
  let fn;
  let option;
  let require;
  let selected;
  let style;
  let unselectedSubLabel;
  ({ selected, selectedItemName: require, unselectedSubLabel } = arg0);
  ({ style, option, autoFocus } = arg0);
  const merged = Object.assign(arg0, Object.assign({ style: 0, option: 0, selected: 0, selectedItemName: 0, unselectedSubLabel: 0, autoFocus: 0 }));
  const onPress = merged.onPress;
  const tmp2 = closure_6();
  const obj = useAnimationDelayedAutoFocus;
  const animationDelayedAutoFocus = obj.useAnimationDelayedAutoFocus(autoFocus, onPress);
  const items = [tmp2.formRow, style];
  const FormRow = Form.FormRow;
  let str = "text-md/medium";
  const Text = Text_Text.Text;
  if (selected) {
    str = "text-sm/medium";
  }
  let str2 = "text-default";
  if (selected) {
    str2 = "interactive-text-default";
  }
  if (selected) {
    fn = () => jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: require });
  } else {
    fn = null;
    if (null != unselectedSubLabel) {
      fn = () => jsx(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", lineClamp: 1, children: unselectedSubLabel });
    }
  }
  ({ source: unselectedSubLabel(6645), size: native.IconSizes.SMALL_20 });
  const Icon = native.Icon;
  const merged1 = Object.assign(merged);
  return <FormRow start end style={items} label={null} subLabel={fn} trailing={null} />;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherSelectOptionFormRow.tsx");

export default tmp3;