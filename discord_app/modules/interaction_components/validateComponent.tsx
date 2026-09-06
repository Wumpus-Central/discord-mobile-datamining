// === Module 8115: validateComponent ===

// Module 8115 (validateComponent)
import _modDef38 from "module_38" /* 38 */;
import Server from "Server" /* 1894 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/interaction_components/validateComponent.tsx");

export default function validateComponent(type, arg1, modal) {
  values = arg1;
  if (null != arg1) {
    _modDef38(values.type === type.type, "component type matches state");
  }
  type = type.type;
  if (Server.ComponentType.BUTTON === type) {
    return null;
  } else {
    if (tmp4(1894).ComponentType.STRING_SELECT !== type) {
      if (tmp4(1894).ComponentType.USER_SELECT !== type) {
        if (tmp4(1894).ComponentType.ROLE_SELECT !== type) {
          if (tmp4(1894).ComponentType.MENTIONABLE_SELECT !== type) {
            if (tmp4(1894).ComponentType.CHANNEL_SELECT !== type) {
              if (tmp4(1894).ComponentType.TEXT_INPUT === type) {
                ({ minLength, maxLength, required } = type);
                if (null != values) {
                  if (0 !== values.value.length) {
                    if (values.value.length < minLength) {
                      const intl8 = tmp4(1114).intl;
                      const range = { min: minLength, max: maxLength };
                      let formatToPlainStringResult = intl8.formatToPlainString(tmp4(1114).t.ONSqYd, range);
                    } else {
                      formatToPlainStringResult = null;
                    }
                  }
                  return formatToPlainStringResult;
                }
                let stringResult = null;
                if (required) {
                  const intl9 = tmp4(1114).intl;
                  stringResult = intl9.string(tmp4(1114).t.eJEUvD);
                }
                formatToPlainStringResult = stringResult;
              } else if (tmp4(1894).ComponentType.FILE_UPLOAD === type) {
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
                    const intl7 = tmp4(1114).intl;
                    stringResult1 = intl7.string(tmp4(1114).t.eJEUvD);
                  }
                  let formatToPlainStringResult1 = stringResult1;
                } else if (num3 < minValues2) {
                  const intl6 = tmp4(1114).intl;
                  let obj = { minValues: minValues2 };
                  formatToPlainStringResult1 = intl6.formatToPlainString(tmp4(1114).t.pmAt62, obj);
                } else {
                  formatToPlainStringResult1 = null;
                  if (num3 > maxValues2) {
                    const intl5 = tmp4(1114).intl;
                    obj = { maxValues: maxValues2 };
                    formatToPlainStringResult1 = intl5.formatToPlainString(tmp4(1114).t.dy6viJ, obj);
                  }
                }
                return formatToPlainStringResult1;
              } else if (tmp4(1894).ComponentType.RADIO_GROUP === type) {
                if (null == values) {
                  let stringResult2 = null;
                  if (tmp10) {
                    const intl4 = tmp4(1114).intl;
                    stringResult2 = intl4.string(tmp4(1114).t.eJEUvD);
                  }
                } else {
                  stringResult2 = null;
                }
                return stringResult2;
              } else if (tmp4(1894).ComponentType.CHECKBOX_GROUP === type) {
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
                    const intl3 = tmp4(1114).intl;
                    stringResult3 = intl3.string(tmp4(1114).t.eJEUvD);
                  }
                  let formatToPlainStringResult2 = stringResult3;
                } else if (num < minValues) {
                  const intl2 = tmp4(1114).intl;
                  const obj1 = { count: minValues };
                  formatToPlainStringResult2 = intl2.formatToPlainString(tmp4(1114).t.Jmwzdx, obj1);
                } else {
                  formatToPlainStringResult2 = null;
                  if (num > maxValues) {
                    const intl = tmp4(1114).intl;
                    obj = { count: maxValues };
                    formatToPlainStringResult2 = intl.formatToPlainString(tmp4(1114).t.LDvfRP, obj);
                  }
                }
                return formatToPlainStringResult2;
              } else if (tmp4(1894).ComponentType.CHECKBOX === type) {
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
        const obj2 = { minValues: minValues3, required: tmp16 };
        let stringResult4 = null;
        if (!tmp4Result.canSelectBeEmpty(obj2, modal)) {
          const intl10 = tmp4(1114).intl;
          stringResult4 = intl10.string(tmp4(1114).t.eJEUvD);
        }
        const tmp18 = stringResult4;
        tmp4Result = tmp4(4785);
      }
      return tmp18;
    } else if (values.type === tmp4(1894).ComponentType.STRING_SELECT) {
      ({ values, length } = values);
    } else {
      length = values.selectedOptions.length;
    }
  }
};