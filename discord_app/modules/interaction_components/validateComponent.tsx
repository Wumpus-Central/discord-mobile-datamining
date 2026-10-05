// === Module 7798: validateComponent ===

// Module 7798 (validateComponent)
import _modDef38 from "module_38" /* 38 */;
import intl13 from "intl" /* 1126 */;
import Server from "Server" /* 1985 */;
import InteractionComponentUtils from "InteractionComponentUtils" /* 5114 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/interaction_components/validateComponent.tsx");

export default function validateComponent(type, type2, modal) {
  let maxLength;
  let maxValues;
  let maxValues2;
  let maxValues3;
  let minLength;
  let minValues;
  let minValues2;
  let minValues3;
  let required3;
  if (null != type2) {
    _modDef38(type2.type === type.type, "component type matches state");
  }
  type = type.type;
  if (Server.ComponentType.BUTTON === type) {
    return null;
  } else {
    let formatToPlainStringResult3;
    if (Server.ComponentType.STRING_SELECT !== type) {
      if (Server.ComponentType.USER_SELECT !== type) {
        if (Server.ComponentType.ROLE_SELECT !== type) {
          if (Server.ComponentType.MENTIONABLE_SELECT !== type) {
            if (Server.ComponentType.CHANNEL_SELECT !== type) {
              if (Server.ComponentType.TEXT_INPUT === type) {
                ({ minLength, maxLength, required: required3 } = type);
                if (null != type2) {
                  let formatToPlainStringResult;
                  if (0 !== type2.value.length) {
                    if (type2.value.length < minLength) {
                      const intl8 = intl13.intl;
                      const range = { min: minLength, max: maxLength };
                      formatToPlainStringResult = intl8.formatToPlainString(intl13.t.ONSqYd, range);
                    } else {
                      formatToPlainStringResult = null;
                    }
                  }
                  return formatToPlainStringResult;
                }
                let stringResult = null;
                if (required3) {
                  const intl9 = intl13.intl;
                  stringResult = intl9.string(intl13.t.eJEUvD);
                }
                formatToPlainStringResult = stringResult;
              } else if (Server.ComponentType.FILE_UPLOAD === type) {
                let formatToPlainStringResult1;
                ({ minValues: minValues2, maxValues: maxValues2 } = type);
                let num3;
                const required2 = type.required;
                if (type2 != null) {
                  num3 = type2.uploadIds.length;
                }
                if (num3 == null) {
                  num3 = 0;
                }
                if (0 === num3) {
                  let stringResult1 = null;
                  if (required2) {
                    const intl7 = intl13.intl;
                    stringResult1 = intl7.string(intl13.t.eJEUvD);
                  }
                  formatToPlainStringResult1 = stringResult1;
                } else if (num3 < minValues2) {
                  const intl6 = intl13.intl;
                  const obj2 = { minValues: minValues2 };
                  formatToPlainStringResult1 = intl6.formatToPlainString(intl13.t.pmAt62, obj2);
                } else {
                  formatToPlainStringResult1 = null;
                  if (num3 > maxValues2) {
                    const intl5 = intl13.intl;
                    const obj3 = { maxValues: maxValues2 };
                    formatToPlainStringResult1 = intl5.formatToPlainString(intl13.t.dy6viJ, obj3);
                  }
                }
                return formatToPlainStringResult1;
              } else if (Server.ComponentType.RADIO_GROUP === type) {
                let stringResult2;
                if (null == type2) {
                  stringResult2 = null;
                  if (tmp10) {
                    const intl4 = intl13.intl;
                    stringResult2 = intl4.string(intl13.t.eJEUvD);
                  }
                } else {
                  stringResult2 = null;
                }
                return stringResult2;
              } else if (Server.ComponentType.CHECKBOX_GROUP === type) {
                let formatToPlainStringResult2;
                ({ minValues, maxValues } = type);
                let num;
                const required = type.required;
                if (type2 != null) {
                  num = type2.values.length;
                }
                if (num == null) {
                  num = 0;
                }
                if (0 === num) {
                  let stringResult3 = null;
                  if (required) {
                    const intl3 = intl13.intl;
                    stringResult3 = intl3.string(intl13.t.eJEUvD);
                  }
                  formatToPlainStringResult2 = stringResult3;
                } else if (num < minValues) {
                  const intl2 = intl13.intl;
                  const obj4 = { count: minValues };
                  formatToPlainStringResult2 = intl2.formatToPlainString(intl13.t.Jmwzdx, obj4);
                } else {
                  formatToPlainStringResult2 = null;
                  if (num > maxValues) {
                    const intl = intl13.intl;
                    const obj = { count: maxValues };
                    formatToPlainStringResult2 = intl.formatToPlainString(intl13.t.LDvfRP, obj);
                  }
                }
                return formatToPlainStringResult2;
              } else if (Server.ComponentType.CHECKBOX === type) {
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
    let num7 = 0;
    const required4 = type.required;
    if (null != type2) {
      let length;
      if (type2.type === Server.ComponentType.STRING_SELECT) {
        length = type2.values.length;
      } else {
        length = type2.selectedOptions.length;
      }
      num7 = length;
    }
    if (0 === num7) {
      let stringResult4 = null;
      const obj5 = { minValues: minValues3, required: required4 };
      const tmp4Result = InteractionComponentUtils;
      if (!tmp4Result.canSelectBeEmpty(obj5, modal)) {
        const intl12 = intl13.intl;
        stringResult4 = intl12.string(intl13.t.eJEUvD);
      }
      formatToPlainStringResult3 = stringResult4;
    } else if (num7 < minValues3) {
      const intl11 = intl13.intl;
      const obj6 = { count: minValues3 };
      formatToPlainStringResult3 = intl11.formatToPlainString(intl13.t.Jmwzdx, obj6);
    } else {
      formatToPlainStringResult3 = null;
      if (num7 > maxValues3) {
        const intl10 = intl13.intl;
        const obj7 = { count: maxValues3 };
        formatToPlainStringResult3 = intl10.formatToPlainString(intl13.t.LDvfRP, obj7);
      }
    }
    return formatToPlainStringResult3;
  }
};