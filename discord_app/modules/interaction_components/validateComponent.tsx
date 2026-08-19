// === Module 8329: validateComponent ===

// Module 8329 (validateComponent)
import obj132 from "obj132" /* 2 */;
import _modDef38 from "module_38" /* 38 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1954 */;
import flattenComponents from "flattenComponents" /* 4805 */;

const result = obj132.fileFinishedImporting("modules/interaction_components/validateComponent.tsx");

export default function validateComponent(type, arg1, modal) {
  values = arg1;
  if (null != arg1) {
    _modDef38(values.type === type.type, "component type matches state");
  }
  type = type.type;
  if (PermissionOverwriteType.ComponentType.BUTTON === type) {
    return null;
  } else {
    if (PermissionOverwriteType.ComponentType.STRING_SELECT !== type) {
      if (PermissionOverwriteType.ComponentType.USER_SELECT !== type) {
        if (PermissionOverwriteType.ComponentType.ROLE_SELECT !== type) {
          if (PermissionOverwriteType.ComponentType.MENTIONABLE_SELECT !== type) {
            if (PermissionOverwriteType.ComponentType.CHANNEL_SELECT !== type) {
              if (PermissionOverwriteType.ComponentType.TEXT_INPUT === type) {
                ({ minLength, maxLength, required } = type);
                if (null != values) {
                  if (0 !== values.value.length) {
                    if (values.value.length < minLength) {
                      const intl8 = getSystemLocale.intl;
                      let obj = { min: null, max: null };
                      obj[0] = minLength;
                      obj[1] = maxLength;
                      let formatToPlainStringResult = intl8.formatToPlainString(getSystemLocale.t.ONSqYd, obj);
                    } else {
                      formatToPlainStringResult = null;
                    }
                  }
                  return formatToPlainStringResult;
                }
                let stringResult = null;
                if (required) {
                  const intl9 = getSystemLocale.intl;
                  stringResult = intl9.string(getSystemLocale.t.eJEUvD);
                }
                formatToPlainStringResult = stringResult;
              } else if (PermissionOverwriteType.ComponentType.FILE_UPLOAD === type) {
                ({ minValues: minValues2, maxValues: maxValues2 } = type);
                let num3;
                if (values != null) {
                  num3 = values.uploadIds.length;
                }
                if (num3 == null) {
                  num3 = 0;
                }
                if (0 === num3) {
                  let stringResult1 = null;
                  if (type.required) {
                    const intl7 = getSystemLocale.intl;
                    stringResult1 = intl7.string(getSystemLocale.t.eJEUvD);
                  }
                  let formatToPlainStringResult1 = stringResult1;
                } else if (num3 < minValues2) {
                  const intl6 = getSystemLocale.intl;
                  obj = { minValues: null };
                  obj[0] = minValues2;
                  formatToPlainStringResult1 = intl6.formatToPlainString(getSystemLocale.t.pmAt62, obj);
                } else {
                  formatToPlainStringResult1 = null;
                  if (num3 > maxValues2) {
                    const intl5 = getSystemLocale.intl;
                    obj1 = { maxValues: null };
                    obj1[0] = maxValues2;
                    formatToPlainStringResult1 = intl5.formatToPlainString(getSystemLocale.t.dy6viJ, obj1);
                  }
                }
                return formatToPlainStringResult1;
              } else if (PermissionOverwriteType.ComponentType.RADIO_GROUP === type) {
                if (null == values) {
                  let stringResult2 = null;
                  if (tmp10) {
                    const intl4 = getSystemLocale.intl;
                    stringResult2 = intl4.string(getSystemLocale.t.eJEUvD);
                  }
                } else {
                  stringResult2 = null;
                }
                return stringResult2;
              } else if (PermissionOverwriteType.ComponentType.CHECKBOX_GROUP === type) {
                ({ minValues, maxValues } = type);
                let num;
                if (values != null) {
                  num = values.values.length;
                }
                if (num == null) {
                  num = 0;
                }
                if (0 === num) {
                  let stringResult3 = null;
                  if (type.required) {
                    const intl3 = getSystemLocale.intl;
                    stringResult3 = intl3.string(getSystemLocale.t.eJEUvD);
                  }
                  let formatToPlainStringResult2 = stringResult3;
                } else if (num < minValues) {
                  const intl2 = getSystemLocale.intl;
                  const obj2 = { count: null };
                  obj2[0] = minValues;
                  formatToPlainStringResult2 = intl2.formatToPlainString(getSystemLocale.t.Jmwzdx, obj2);
                } else {
                  formatToPlainStringResult2 = null;
                  if (num > maxValues) {
                    const intl = getSystemLocale.intl;
                    obj = { count: null };
                    obj[0] = maxValues;
                    formatToPlainStringResult2 = intl.formatToPlainString(getSystemLocale.t.LDvfRP, obj);
                  }
                }
                return formatToPlainStringResult2;
              } else if (PermissionOverwriteType.ComponentType.CHECKBOX === type) {
                return null;
              } else {
                _modDef38(false, "missing validator for this component");
              }
            }
          }
        }
      }
    }
    ({ minValues: minValues3, maxValues: maxValues3 } = type);
    if (null == values) {
      {
        const obj3 = { minValues: null, required: null };
        obj3[0] = minValues3;
        obj3[1] = tmp16;
        let stringResult4 = null;
        if (!tmp4Result.canSelectBeEmpty(obj3, modal)) {
          const intl10 = getSystemLocale.intl;
          stringResult4 = intl10.string(getSystemLocale.t.eJEUvD);
        }
        const tmp18 = stringResult4;
        tmp4Result = flattenComponents;
      }
      return tmp18;
    } else if (values.type === PermissionOverwriteType.ComponentType.STRING_SELECT) {
      ({ values, length } = values);
    } else {
      length = values.selectedOptions.length;
    }
  }
};