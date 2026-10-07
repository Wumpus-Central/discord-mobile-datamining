// discord_app/modules/app_icons/native/AppIconRow/AppIconRow.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useA11yRolesNative from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import FormRadio from "../../../../design/components/Forms/native/FormRadio.native.tsx";
import AppIconTypes from "../../AppIconTypes.tsx";
import AppIconDefault from "../AppIcon.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const items = [
  () => {
    const intl = util.intl;
    return intl.string(util.t["EgWTY+"]);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.umBn5f);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.dG1wD1);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.SesI4S);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.RnMLvl);
  },
];
const createStyles = fn(4896);
let obj2 = { icon: { borderRadius: nativeDefault.radii.md } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { borderRadius: nativeDefault.radii.md };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_icons/native/AppIconRow/AppIconRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (onLongPress) => {
      const cResult = c.c(26);
      ({ icon, onSelect } = onLongPress);
      onLongPress = onLongPress.onLongPress;
      ({ hasNitro, currentAppIcon, showEasterEgg } = onLongPress);
      const tmp4 = closure_7();
      const id = icon.id;
      if (cResult[0] === icon.name) {
        if (cResult[1] === id) {
          const first = _slicedToArray(noop.useState(cResult[2]), 1)[0];
          if (cResult[3] !== (currentAppIcon === id)) {
            const obj3 = { selected: tmp11 };
            cResult[3] = tmp11;
            cResult[4] = obj3;
            let tmp12 = obj3;
          } else {
            tmp12 = cResult[4];
          }
          const radioA11yNative = useA11yRolesNative.useRadioA11yNative(tmp12);
          ({ accessibilityRole, accessibilityState } = radioA11yNative);
          if (id === AppIconTypes.PremiumAppIconIds.BRAND_INVERTED) {
            return null;
          }
          if (!icon.isHidden) {
            let tmp14 = tmp11;
            if (!tmp11) {
              tmp14 = !tmp5;
            }
            if (!tmp14) {
              tmp14 = hasNitro;
            }
            if (cResult[5] === id) {
              if (cResult[6] === tmp4.icon) {
                let tmp15 = cResult[7];
              }
              if (cResult[8] === id) {
                if (cResult[9] === onLongPress) {
                  let tmp19 = cResult[10];
                }
                if (cResult[11] === id) {
                  if (cResult[12] === onSelect) {
                    let tmp20 = cResult[13];
                  }
                  if (cResult[14] === tmp11) {
                    if (cResult[15] === tmp14) {
                      let tmp21 = cResult[16];
                    }
                    if (cResult[17] === accessibilityRole) {
                      if (cResult[18] === accessibilityState) {
                        if (cResult[19] === id) {
                          if (cResult[20] === first) {
                            if (cResult[21] === tmp15) {
                              if (cResult[22] === tmp19) {
                                if (cResult[23] === tmp20) {
                                  if (cResult[24] === tmp21) {
                                    let tmp24 = cResult[25];
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
                    const obj4 = {
                      icon: tmp15,
                      label: first,
                      onLongPress: tmp19,
                      onPress: tmp20,
                      accessibilityRole,
                      accessibilityState,
                      trailing: tmp21,
                    };
                    const tmp25 = jsx(
                      TableRow.TableRow,
                      {
                        icon: tmp15,
                        label: first,
                        onLongPress: tmp19,
                        onPress: tmp20,
                        accessibilityRole,
                        accessibilityState,
                        trailing: tmp21,
                      },
                      id,
                    );
                    cResult[17] = accessibilityRole;
                    cResult[18] = accessibilityState;
                    cResult[19] = id;
                    cResult[20] = first;
                    cResult[21] = tmp15;
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
                  if (tmp14) {
                    class F {
                      constructor() {
                        return onSelect(id);
                      }
                    }
                    const tmp22 = jsx(FormRadio.FormRadio, { selected: null });
                    const obj5 = { selected: null };
                  }
                  cResult[14] = tmp11;
                  cResult[15] = tmp14;
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
            const obj6 = { id, style: tmp4.icon };
            const tmp18 = jsx(AppIconDefault, { id, style: tmp4.icon });
            cResult[5] = id;
            cResult[6] = tmp4.icon;
            cResult[7] = tmp18;
            tmp15 = tmp18;
          }
          const tmpResult = useA11yRolesNative;
        }
      }
      if (id === AppIconTypes.PremiumAppIconIds.PIRATE) {
        class F {
          constructor() {
            return onSelect(id);
          }
        }
        let name = items[obj2.random(obj2, 0, items.length - 1)]();
      } else {
        name = icon.name;
      }
      cResult[0] = icon.name;
      cResult[1] = id;
      cResult[2] = name;
    }
  : (arg0) => {
      ({ icon, onSelect: require, onLongPress: importDefault } = arg0);
      ({ hasNitro, currentAppIcon, showEasterEgg } = arg0);
      const id = icon.id;
      if (id === AppIconTypes.PremiumAppIconIds.PIRATE) {
        const obj = _modDef12;
        let name = items[obj.random(obj, 0, items.length - 1)]();
      } else {
        name = icon.name;
      }
      const tmp = closure_7();
      const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected: tmp7 });
      ({ accessibilityRole, accessibilityState } = radioA11yNative);
      if (id === AppIconTypes.PremiumAppIconIds.BRAND_INVERTED) {
        if (!showEasterEgg) {
          let tmp10Result = null;
        }
        return tmp10Result;
      }
      tmp10Result = null;
      if (!icon.isHidden) {
        const obj2 = {
          icon: null,
          label: null,
          onLongPress: null,
          onPress: null,
          accessibilityRole: null,
          accessibilityState: null,
          trailing: null,
        };
        const obj3 = { id, style: tmp.icon };
        obj2.icon = jsx(AppIconDefault, { id, style: tmp.icon });
        obj2.label = _slicedToArray(noop.useState(name), 1)[0];
        obj2.onLongPress = function onLongPress() {
          return importDefault(id);
        };
        obj2.onPress = function onPress() {
          return require(id);
        };
        obj2.accessibilityRole = accessibilityRole;
        obj2.accessibilityState = accessibilityState;
        if (!tmp7) {
          if (icon.isPremium) {
            let tmp10Result2 = null;
          }
          obj2.trailing = tmp10Result2;
          tmp10Result = jsx(TableRow.TableRow, obj2, id);
        }
        const obj4 = { selected: tmp7 };
        tmp10Result2 = jsx(FormRadio.FormRadio, { selected: tmp7 });
      }
      const tmp3Result = useA11yRolesNative;
    };
