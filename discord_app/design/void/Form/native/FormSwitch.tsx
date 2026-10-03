// === Module 8905: Form/FormSwitch ===

// Module 8905 (Form/FormSwitch)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import shared from "shared" /* 4729 */;
import useThemeDefault from "useTheme" /* 4791 */;
import noop from "module_19" /* 19 */;

require = fn;
const Switch = fn(17).Switch;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { switch: { marginVertical: -5 }, track: { color: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED } };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { color: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormSwitch.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((tintColor) => {
  const cResult = c.c(20);
  ({ value, disabled, style, borderColor, onValueChange, accessible, accessibilityLabel, accessibilityHint, renderIosBackground } = tintColor);
  const tmp7 = closure_5();
  let color = tintColor.tintColor;
  const tmp6 = undefined !== renderIosBackground && renderIosBackground;
  if (color == null) {
    color = tmp7.track.color;
  }
  if (null == borderColor) {
    if (tmpResult.isThemeDark(tmp9)) {
      borderColor = nativeDefault.unsafe_rawColors.PRIMARY_400;
    }
    tmpResult = shared;
  }
  if (cResult[0] === color) {
    if (cResult[1] === borderColor) {
      let tmp10 = cResult[2];
    }
    if (cResult[3] === style) {
      if (cResult[4] === tmp7.switch) {
        let tmp12 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        if (cResult[7] === tmp4) {
          let tmp13 = cResult[8];
        }
        if (cResult[9] === accessibilityHint) {
          if (cResult[10] === accessibilityLabel) {
            if (cResult[11] === accessible) {
              if (cResult[12] === tmp5) {
                if (cResult[13] === onValueChange) {
                  if (cResult[14] === tmp10) {
                    if (cResult[15] === tmp11) {
                      if (cResult[16] === tmp12) {
                        if (cResult[17] === tmp13) {
                          if (cResult[18] === tmp4) {
                            let tmp14 = cResult[19];
                          }
                          return tmp14;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const obj2 = { accessible, trackColor: tmp10, ios_backgroundColor: tmp11, value: tmp4, disabled: tmp5, style: tmp12, onValueChange, accessibilityState: tmp13, accessibilityLabel, accessibilityHint };
        const tmp17 = <Switch accessible={accessible} trackColor={tmp10} ios_backgroundColor={tmp11} value={tmp4} disabled={tmp5} style={tmp12} onValueChange={onValueChange} accessibilityState={tmp13} accessibilityLabel={accessibilityLabel} accessibilityHint={accessibilityHint} />;
        cResult[9] = accessibilityHint;
        cResult[10] = accessibilityLabel;
        cResult[11] = accessible;
        cResult[12] = tmp5;
        cResult[13] = onValueChange;
        cResult[14] = tmp10;
        cResult[15] = tmp11;
        cResult[16] = tmp12;
        cResult[17] = tmp13;
        cResult[18] = tmp4;
        cResult[19] = tmp17;
        tmp14 = tmp17;
      }
      const obj3 = { disabled: tmp5, selected: tmp4 };
      cResult[6] = tmp5;
      cResult[7] = tmp4;
      cResult[8] = obj3;
      tmp13 = obj3;
    }
    const items = [tmp7.switch, style];
    cResult[3] = style;
    cResult[4] = tmp7.switch;
    cResult[5] = items;
    tmp12 = items;
  }
  const obj4 = { true: color, false: borderColor };
  cResult[0] = color;
  cResult[1] = borderColor;
  cResult[2] = obj4;
  tmp10 = obj4;
  tmp9 = useThemeDefault();
}) : ((value) => {
  value = value.value;
  const disabled = value.disabled;
  ({ borderColor, renderIosBackground } = value);
  let tmp3 = undefined !== renderIosBackground;
  ({ style, onValueChange, accessible, accessibilityLabel, accessibilityHint } = value);
  if (tmp3) {
    tmp3 = renderIosBackground;
  }
  const tmp4 = closure_5();
  let color = value.tintColor;
  if (color == null) {
    color = tmp4.track.color;
  }
  if (null == borderColor) {
    if (obj.isThemeDark(tmp7)) {
      borderColor = nativeDefault.unsafe_rawColors.PRIMARY_400;
    }
    obj = shared;
  }
  const obj2 = { accessible, trackColor: { true: color, false: borderColor }, ios_backgroundColor: null, value: null, disabled: null, style: null, onValueChange: null, accessibilityState: null, accessibilityLabel: null, accessibilityHint: null };
  let tmp11;
  if (false === (undefined !== value && value)) {
    if (tmp3) {
      tmp11 = borderColor;
    }
  }
  obj2.ios_backgroundColor = tmp11;
  obj2.value = undefined !== value && value;
  obj2.disabled = undefined !== disabled && disabled;
  const items = [tmp4.switch, style];
  obj2.style = items;
  obj2.onValueChange = onValueChange;
  obj2.accessibilityState = { disabled: undefined !== disabled && disabled, selected: undefined !== value && value };
  obj2.accessibilityLabel = accessibilityLabel;
  obj2.accessibilityHint = accessibilityHint;
  return <Switch accessible={accessible} trackColor={{ true: color, false: borderColor }} ios_backgroundColor={null} value={null} disabled={null} style={null} onValueChange={null} accessibilityState={null} accessibilityLabel={null} accessibilityHint={null} />;
});