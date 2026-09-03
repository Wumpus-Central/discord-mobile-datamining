// discord_app/modules/interaction_components/validateComponent.tsx
import set from "../../../_runtime/00002_set.js";
import _modDef38 from "../../../_runtime/metro/00038__.js";
import PermissionOverwriteType from "../../flow/Server.tsx";

const result = set.fileFinishedImporting("modules/interaction_components/validateComponent.tsx");

export default function validateComponent(type, arg1, modal) {
  values = arg1;
  if (null != arg1) {
    _modDef38(values.type === type.type, "component type matches state");
  }
  type = type.type;
  if (PermissionOverwriteType.ComponentType.BUTTON === type) {
    return null;
  } else {
    if (tmp4(1954).ComponentType.STRING_SELECT !== type) {
      if (tmp4(1954).ComponentType.USER_SELECT !== type) {
        if (tmp4(1954).ComponentType.ROLE_SELECT !== type) {
          if (tmp4(1954).ComponentType.MENTIONABLE_SELECT !== type) {
            if (tmp4(1954).ComponentType.CHANNEL_SELECT !== type) {
              if (tmp4(1954).ComponentType.TEXT_INPUT === type) {
                ({ minLength, maxLength, required } = type);
                if (null != values) {
                  if (0 !== values.value.length) {
                    if (values.value.length < minLength) {
                      const intl8 = tmp4(1233).intl;
                      let obj = { min: null, max: null };
                      obj[0] = minLength;
                      obj[1] = maxLength;
                      let formatToPlainStringResult = intl8.formatToPlainString(tmp4(1233).t.ONSqYd, obj);
                    } else {
                      formatToPlainStringResult = null;
                    }
                  }
                  return formatToPlainStringResult;
                }
                let stringResult = null;
                if (required) {
                  const intl9 = tmp4(1233).intl;
                  stringResult = intl9.string(tmp4(1233).t.eJEUvD);
                }
                formatToPlainStringResult = stringResult;
              } else if (tmp4(1954).ComponentType.FILE_UPLOAD === type) {
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
                    const intl7 = tmp4(1233).intl;
                    stringResult1 = intl7.string(tmp4(1233).t.eJEUvD);
                  }
                  let formatToPlainStringResult1 = stringResult1;
                } else if (num3 < minValues2) {
                  const intl6 = tmp4(1233).intl;
                  obj = { minValues: null };
                  obj[0] = minValues2;
                  formatToPlainStringResult1 = intl6.formatToPlainString(tmp4(1233).t.pmAt62, obj);
                } else {
                  formatToPlainStringResult1 = null;
                  if (num3 > maxValues2) {
                    const intl5 = tmp4(1233).intl;
                    obj1 = { maxValues: null };
                    obj1[0] = maxValues2;
                    formatToPlainStringResult1 = intl5.formatToPlainString(tmp4(1233).t.dy6viJ, obj1);
                  }
                }
                return formatToPlainStringResult1;
              } else if (tmp4(1954).ComponentType.RADIO_GROUP === type) {
                if (null == values) {
                  let stringResult2 = null;
                  if (tmp10) {
                    const intl4 = tmp4(1233).intl;
                    stringResult2 = intl4.string(tmp4(1233).t.eJEUvD);
                  }
                } else {
                  stringResult2 = null;
                }
                return stringResult2;
              } else if (tmp4(1954).ComponentType.CHECKBOX_GROUP === type) {
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
                    const intl3 = tmp4(1233).intl;
                    stringResult3 = intl3.string(tmp4(1233).t.eJEUvD);
                  }
                  let formatToPlainStringResult2 = stringResult3;
                } else if (num < minValues) {
                  const intl2 = tmp4(1233).intl;
                  const obj2 = { count: null };
                  obj2[0] = minValues;
                  formatToPlainStringResult2 = intl2.formatToPlainString(tmp4(1233).t.Jmwzdx, obj2);
                } else {
                  formatToPlainStringResult2 = null;
                  if (num > maxValues) {
                    const intl = tmp4(1233).intl;
                    obj = { count: null };
                    obj[0] = maxValues;
                    formatToPlainStringResult2 = intl.formatToPlainString(tmp4(1233).t.LDvfRP, obj);
                  }
                }
                return formatToPlainStringResult2;
              } else if (tmp4(1954).ComponentType.CHECKBOX === type) {
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
          const intl10 = tmp4(1233).intl;
          stringResult4 = intl10.string(tmp4(1233).t.eJEUvD);
        }
        const tmp18 = stringResult4;
        tmp4Result = tmp4(4740);
      }
      return tmp18;
    } else if (values.type === tmp4(1954).ComponentType.STRING_SELECT) {
      ({ values, length } = values);
    } else {
      length = values.selectedOptions.length;
    }
  }
}
