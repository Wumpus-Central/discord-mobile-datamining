// === Module 15368: AppIconRow ===

// Module 15368 (AppIconRow)
import _modDef12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import react_native from "react-native" /* 4600 */;
import TableRow2 from "TableRow" /* 6000 */;
import FormRadio from "FormRadio" /* 6082 */;
import AppIconTypes from "AppIconTypes" /* 8859 */;
import AppIconDefault from "AppIcon" /* 15365 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let onLongPress;

let obj2;
const jsx = Fragment.jsx;
const items = [
  () => {
    const intl = intl2.intl;
    return intl.string(intl2.t["EgWTY+"]);
  },
  () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.umBn5f);
  },
  () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.dG1wD1);
  },
  () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.SesI4S);
  },
  () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.RnMLvl);
  }
];
let obj = { icon: obj2 };
obj2 = { borderRadius: nativeDefault.radii.md };
let closure_7 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((onLongPress) => {
  let accessibilityRole;
  let accessibilityState;
  let currentAppIcon;
  let hasNitro;
  let icon;
  let name;
  let onSelect;
  let showEasterEgg;
  const obj = react2;
  const cResult = obj.c(26);
  ({ icon, onSelect } = onLongPress);
  onLongPress = onLongPress.onLongPress;
  ({ hasNitro, currentAppIcon, showEasterEgg } = onLongPress);
  const tmp4 = closure_7();
  const id = icon.id;
  if (cResult[0] === icon.name) {
    let tmp6;
    let tmp13;
    if (cResult[1] === id) {
      tmp6 = cResult[2];
    }
    const first = _slicedToArray(react.useState(tmp6), 1)[0];
    if (cResult[3] !== (currentAppIcon === id)) {
      const obj3 = { selected: currentAppIcon === id };
      cResult[3] = currentAppIcon === id;
      cResult[4] = obj3;
      tmp13 = obj3;
    } else {
      tmp13 = cResult[4];
    }
    const tmpResult = react_native;
    const radioA11yNative = tmpResult.useRadioA11yNative(tmp13);
    ({ accessibilityRole, accessibilityState } = radioA11yNative);
    if (id === AppIconTypes.PremiumAppIconIds.BRAND_INVERTED) {
      return null;
    }
    if (!icon.isHidden) {
      if (cResult[5] === id) {
        let tmp16;
        if (cResult[6] === tmp4.icon) {
          tmp16 = cResult[7];
        }
        if (cResult[8] === id) {
          let tmp19;
          if (cResult[9] === onLongPress) {
            tmp19 = cResult[10];
          }
          if (cResult[11] === id) {
            let tmp20;
            let tmp22;
            if (cResult[12] === onSelect) {
              tmp20 = cResult[13];
            }
            if (cResult[14] === currentAppIcon === id) {
              let tmp21;
              if (cResult[15] === (currentAppIcon === id || !tmp5 || hasNitro)) {
                tmp21 = cResult[16];
              }
              if (cResult[17] === accessibilityRole) {
                if (cResult[18] === accessibilityState) {
                  if (cResult[19] === id) {
                    if (cResult[20] === first) {
                      if (cResult[21] === tmp16) {
                        if (cResult[22] === tmp19) {
                          if (cResult[23] === tmp20) {
                            let tmp24;
                            if (cResult[24] === tmp21) {
                              tmp24 = cResult[25];
                            }
                            return tmp24;
                          }
                        }
                      }
                    }
                  }
                }
              }
              class F {
                constructor() {
                  return onSelect(id);
                }
              }
              const tmp25 = jsx(TableRow2.TableRow, { icon: tmp16, label: first, onLongPress: tmp19, onPress: tmp20, accessibilityRole, accessibilityState, trailing: tmp21 }, id);
              cResult[17] = accessibilityRole;
              cResult[18] = accessibilityState;
              cResult[19] = id;
              cResult[20] = first;
              cResult[21] = tmp16;
              cResult[22] = tmp19;
              cResult[23] = tmp20;
              cResult[24] = tmp21;
              cResult[25] = tmp25;
              tmp24 = tmp25;
            }
            class F {
              constructor() {
                return onSelect(id);
              }
            }
            if (currentAppIcon === id || !tmp5 || hasNitro) {
              class F {
                constructor() {
                  return onSelect(id);
                }
              }
              tmp22 = jsx(FormRadio.FormRadio, { selected: null });
            }
            cResult[14] = currentAppIcon === id;
            cResult[15] = currentAppIcon === id || !tmp5 || hasNitro;
            cResult[16] = tmp22;
            tmp21 = tmp22;
          }
          class F {
            constructor() {
              return onSelect(id);
            }
          }
          cResult[11] = id;
          cResult[12] = onSelect;
          cResult[13] = F;
          tmp20 = F;
        }
        class B {
          constructor() {
            return onLongPress(id);
          }
        }
        cResult[8] = id;
        cResult[9] = onLongPress;
        cResult[10] = B;
        tmp19 = B;
      }
      const tmp18 = jsx(AppIconDefault, { id, style: tmp4.icon });
      cResult[5] = id;
      cResult[6] = tmp4.icon;
      cResult[7] = tmp18;
      tmp16 = tmp18;
    }
  }
  if (id === AppIconTypes.PremiumAppIconIds.PIRATE) {
    class F {
      constructor() {
        return onSelect(id);
      }
    }
    name = items[obj2.random(obj2, 0, items.length - 1)]();
  } else {
    name = icon.name;
  }
  cResult[0] = icon.name;
  cResult[1] = id;
  cResult[2] = name;
  tmp6 = name;
}) : ((arg0) => {
  let accessibilityRole;
  let accessibilityState;
  let closure_129_0;
  let closure_129_1;
  let currentAppIcon;
  let hasNitro;
  let icon;
  let name;
  let showEasterEgg;
  let tmp11Result;
  ({ icon, onSelect: closure_129_0, onLongPress: closure_129_1 } = arg0);
  ({ hasNitro, currentAppIcon, showEasterEgg } = arg0);
  const id = icon.id;
  const isPremium = icon.isPremium;
  const useState = react.useState;
  const tmp = closure_7();
  if (id === AppIconTypes.PremiumAppIconIds.PIRATE) {
    const obj = _modDef12;
    name = items[obj.random(obj, 0, items.length - 1)]();
  } else {
    name = icon.name;
  }
  const first = _slicedToArray(useState(name), 1)[0];
  const tmp3Result = react_native;
  const radioA11yNative = tmp3Result.useRadioA11yNative({ selected: tmp8 });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (id === AppIconTypes.PremiumAppIconIds.BRAND_INVERTED) {
    if (!showEasterEgg) {
      tmp11Result = null;
    }
    return tmp11Result;
  }
  tmp11Result = null;
  if (!icon.isHidden) {
    const obj2 = {
      icon: null,
      label: first,
      onLongPress() {
          return closure_1_1(id);
        },
      onPress() {
          return closure_1_0(id);
        },
      accessibilityRole,
      accessibilityState,
      trailing: null
    };
    const TableRow = TableRow2.TableRow;
    if (currentAppIcon !== id) {
      let tmp11Result2;
      if (isPremium) {
        tmp11Result2 = null;
      }
      obj2.trailing = tmp11Result2;
      tmp11Result = <TableRow key={id} {...obj2} />;
    }
    tmp11Result2 = jsx(FormRadio.FormRadio, { selected: currentAppIcon === id });
  }
});
const result = size.fileFinishedImporting("modules/app_icons/native/AppIconRow/AppIconRow.tsx");

export default tmp2;