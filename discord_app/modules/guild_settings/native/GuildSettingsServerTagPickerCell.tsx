// === Module 17763: GuildSettingsServerTagPickerCell ===

// Module 17763 (GuildSettingsServerTagPickerCell)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4594 */;
import noop from "module_19" /* 19 */;

require = fn;
const Pressable = fn(17).Pressable;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { cell: { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.md, borderWidth: 2, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderColor: nativeDefault.colors.BORDER_MUTED }, cellSelected: null };
let obj3 = { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.md, borderWidth: 2, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderColor: nativeDefault.colors.BORDER_MUTED };
obj2.cellSelected = { borderColor: nativeDefault.unsafe_rawColors.BRAND_500 };
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { borderColor: nativeDefault.unsafe_rawColors.BRAND_500 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagPickerCell.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(19);
  ({ size, selected, accessibilityLabel, accessibilityRole, onPress, children } = arg0);
  let str = "radio";
  if (undefined !== accessibilityRole) {
    str = accessibilityRole;
  }
  const tmp4 = closure_4();
  if (cResult[0] !== selected) {
    const obj2 = { selected };
    cResult[0] = selected;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative(tmp5);
  if (cResult[2] === str) {
    if (cResult[3] === radioA11yNative) {
      if (cResult[4] === selected) {
        let tmp7 = cResult[5];
      }
      if (selected) {
        selected = tmp4.cellSelected;
      }
      if (cResult[6] !== size) {
        const size1 = { width: size, height: size };
        cResult[6] = size;
        cResult[7] = size1;
        let tmp9 = size1;
      } else {
        tmp9 = cResult[7];
      }
      if (cResult[8] === tmp4.cell) {
        if (cResult[9] === selected) {
          if (cResult[10] === tmp9) {
            let tmp10 = cResult[11];
          }
          if (cResult[12] === tmp7.accessibilityRole) {
            if (cResult[13] === tmp7.accessibilityState) {
              if (cResult[14] === accessibilityLabel) {
                if (cResult[15] === children) {
                  if (cResult[16] === onPress) {
                    if (cResult[17] === tmp10) {
                      let tmp11 = cResult[18];
                    }
                    return tmp11;
                  }
                }
              }
            }
          }
          const obj3 = { accessibilityRole: null, accessibilityState: null, accessibilityLabel: null, onPress: null, style: null, children: null };
          ({ accessibilityRole: obj7.accessibilityRole, accessibilityState: obj7.accessibilityState } = tmp7);
          obj3.accessibilityLabel = accessibilityLabel;
          obj3.onPress = onPress;
          obj3.style = tmp10;
          obj3.children = children;
          const tmp14 = <Pressable accessibilityRole={null} accessibilityState={null} accessibilityLabel={null} onPress={null} style={null}>{null}</Pressable>;
          cResult[12] = tmp7.accessibilityRole;
          cResult[13] = tmp7.accessibilityState;
          cResult[14] = accessibilityLabel;
          cResult[15] = children;
          cResult[16] = onPress;
          cResult[17] = tmp10;
          cResult[18] = tmp14;
          tmp11 = tmp14;
        }
      }
      const items = [tmp4.cell, selected, tmp9];
      cResult[8] = tmp4.cell;
      cResult[9] = selected;
      cResult[10] = tmp9;
      cResult[11] = items;
      tmp10 = items;
    }
  }
  let tmp8 = radioA11yNative;
  if ("button" === str) {
    const obj4 = { accessibilityRole: "button", accessibilityState: null };
    const obj5 = { selected };
    obj4.accessibilityState = obj5;
    tmp8 = obj4;
  }
  cResult[2] = str;
  cResult[3] = radioA11yNative;
  cResult[4] = selected;
  cResult[5] = tmp8;
  tmp7 = tmp8;
  const tmpResult = useA11yRolesNative;
}) : ((accessibilityLabel) => {
  ({ size, selected, accessibilityRole } = accessibilityLabel);
  if (accessibilityRole === undefined) {
    accessibilityRole = "radio";
  }
  ({ onPress, children } = accessibilityLabel);
  const tmp = closure_4();
  let radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected });
  if ("button" === accessibilityRole) {
    const obj2 = { accessibilityRole: "button", accessibilityState: null };
    const obj3 = { selected };
    obj2.accessibilityState = obj3;
    radioA11yNative = obj2;
  }
  const obj4 = { accessibilityRole: radioA11yNative.accessibilityRole, accessibilityState: radioA11yNative.accessibilityState, accessibilityLabel: accessibilityLabel.accessibilityLabel, onPress, style: null, children: null };
  const items = [tmp.cell, , ];
  if (selected) {
    selected = tmp.cellSelected;
  }
  items[1] = selected;
  items[2] = { width: size, height: size };
  obj4.style = items;
  obj4.children = children;
  return <Pressable accessibilityRole={radioA11yNative.accessibilityRole} accessibilityState={radioA11yNative.accessibilityState} accessibilityLabel={accessibilityLabel.accessibilityLabel} onPress={onPress} style={null}>{null}</Pressable>;
});