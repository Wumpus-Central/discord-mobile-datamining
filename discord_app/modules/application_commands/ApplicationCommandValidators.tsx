// discord_app/modules/application_commands/ApplicationCommandValidators.tsx
import _getSystemLocale from "_getSystemLocale";
import map from "map";

const require = arg1;
function validateNumericOptionRange(NumberResult, minValue, _8Y5zsp, CyRLmH, VD3Q_S) {
  if (null == minValue.minValue) {
    return { success: true };
  }
  if (null != minValue.maxValue) {
    if (null != minValue.minValue) {
      let obj = { success: false, error: null };
      const intl3 = require(1236) /* getSystemLocale */.intl;
      obj = { minimum: null, maximum: null };
      const minValue2 = minValue.minValue;
      obj[0] = minValue2.toLocaleString(require(1236) /* getSystemLocale */.intl.currentLocale, { useGrouping: false });
      const maxValue2 = minValue.maxValue;
      obj[1] = maxValue2.toLocaleString(require(1236) /* getSystemLocale */.intl.currentLocale, { useGrouping: false });
      obj[1] = intl3.formatToPlainString(_8Y5zsp, obj);
      return obj;
    }
  }
  if (null != minValue.minValue) {
    const obj1 = { success: false, error: null };
    const intl2 = require(1236) /* getSystemLocale */.intl;
    const obj2 = { minimum: null };
    minValue = minValue.minValue;
    obj2[0] = minValue.toLocaleString(require(1236) /* getSystemLocale */.intl.currentLocale, { useGrouping: false });
    obj1[1] = intl2.formatToPlainString(CyRLmH, obj2);
    return obj1;
  } else if (null != minValue.maxValue) {
    obj = { success: false, error: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    const obj3 = { maximum: null };
    const maxValue = minValue.maxValue;
    obj3[0] = maxValue.toLocaleString(require(1236) /* getSystemLocale */.intl.currentLocale, { useGrouping: false });
    obj[1] = intl.formatToPlainString(VD3Q_S, obj3);
    return obj;
  }
}
let obj = {
  [arg1(1906).ApplicationCommandOptionType.SUB_COMMAND]: () => ({ success: false }),
  [arg1(1906).ApplicationCommandOptionType.SUB_COMMAND_GROUP]: () => ({ success: false }),
  [arg1(1906).ApplicationCommandOptionType.BOOLEAN]: (type) => {
    if ("text" !== type.type) {
      return { success: false };
    } else {
      const obj = { success: null };
      const trimmed = type.text.trim();
      obj[0] = null != require(9913) /* toChoiceBooleanValue */.toChoiceBooleanValue(trimmed);
      return obj;
    }
  },
  [arg1(1906).ApplicationCommandOptionType.STRING]: (type, type2, id) => {
    importDefault(38)(type2.type === require(1906) /* PermissionOverwriteType */.ApplicationCommandOptionType.STRING, "option type must match validator type");
    type = type.type;
    if ("emoji" === type) {
      let surrogate = type.surrogate;
    } else if ("text" === type) {
      surrogate = type.text.trim();
      const str2 = type.text;
    } else {
      return { success: false };
    }
    if (null != type2.choices) {
      let obj = { success: null };
      let tmp3Result = tmp3(9913);
      obj[0] = null != tmp3Result.findChoiceStringValue(type2.choices, surrogate);
      return obj;
    } else {
      if (type2.autocomplete) {
        tmp3Result = tmp3(9913);
        if (null != tmp3Result.findAutocompleteChoiceStringValue(id, type2.name, surrogate)) {
          return { success: true };
        }
      }
      if (undefined !== type2.minLength) {
        if (null == surrogate) {
          return { success: false };
        } else {
          if (undefined === type2.minLength) {
            if (undefined !== type2.maxLength) {
              if (!obj.success) {
                return obj;
              }
            }
            obj = { success: true };
          }
          if (undefined !== type2.maxLength) {
            if (undefined !== type2.minLength) {
              if (type2.minLength === type2.maxLength) {
                const obj1 = { success: false, error: null };
                const intl4 = tmp3(1236).intl;
                const obj2 = { value: null };
                const minLength3 = type2.minLength;
                obj2[0] = minLength3.toLocaleString(tmp3(1236).intl.currentLocale, { useGrouping: false });
                obj1[1] = intl4.formatToPlainString(tmp3(1236).t["e+9/SY"], obj2);
                obj = obj1;
              }
            }
          }
          if (undefined !== type2.maxLength) {
            if (undefined !== type2.minLength) {
              const obj3 = { success: false, error: null };
              const intl3 = tmp3(1236).intl;
              const obj4 = { minimum: null, maximum: null };
              const minLength2 = type2.minLength;
              obj4[0] = minLength2.toLocaleString(tmp3(1236).intl.currentLocale, { useGrouping: false });
              const maxLength2 = type2.maxLength;
              obj4[1] = maxLength2.toLocaleString(tmp3(1236).intl.currentLocale, { useGrouping: false });
              obj3[1] = intl3.formatToPlainString(tmp3(1236).t.IE1sTh, obj4);
              obj = obj3;
            }
          }
          if (undefined !== type2.minLength) {
            const obj5 = { success: false, error: null };
            const intl2 = tmp3(1236).intl;
            const obj6 = { minimum: null };
            const minLength = type2.minLength;
            obj6[0] = minLength.toLocaleString(tmp3(1236).intl.currentLocale, { useGrouping: false });
            obj5[1] = intl2.formatToPlainString(tmp3(1236).t.rXAFQD, obj6);
            obj = obj5;
          } else if (undefined !== type2.maxLength) {
            const obj7 = { success: false, error: null };
            const intl = tmp3(1236).intl;
            const obj8 = { maximum: null };
            const maxLength = type2.maxLength;
            obj8[0] = maxLength.toLocaleString(tmp3(1236).intl.currentLocale, { useGrouping: false });
            obj7[1] = intl.formatToPlainString(tmp3(1236).t["ycEPx/"], obj8);
            obj = obj7;
          }
        }
      }
      return { success: true };
    }
    const tmp2 = importDefault(38);
  },
  [arg1(1906).ApplicationCommandOptionType.INTEGER]: (type, type2, id) => {
    importDefault(38)(type2.type === require(1906) /* PermissionOverwriteType */.ApplicationCommandOptionType.INTEGER, "option type must match validator type");
    let trimmed = null;
    if ("text" === type.type) {
      trimmed = type.text.trim();
      const str = type.text;
    }
    if (null != trimmed) {
      if (0 !== trimmed.length) {
        if (null != type2.choices) {
          let obj = { success: null };
          let tmp3Result = tmp3(9913);
          obj[0] = null != tmp3Result.findChoiceNumberValue(type2.choices, trimmed);
          return obj;
        } else {
          if (type2.autocomplete) {
            tmp3Result = tmp3(9913);
            if (null != tmp3Result.findAutocompleteChoiceNumberValue(id, type2.name, trimmed)) {
              return { success: true };
            }
          }
          const _Number = Number;
          const NumberResult = Number(importAll(9911).normalizeNumericString(_getSystemLocale.locale, trimmed));
          if (null != NumberResult) {
            const _isNaN = isNaN;
            if (!isNaN(NumberResult)) {
              const _Number2 = Number;
              if (Number.isInteger(NumberResult)) {
                const _Number3 = Number;
                if (Number.isSafeInteger(NumberResult)) {
                  obj = validateNumericOptionRange(NumberResult, type2, tmp3(1236).t["8Y5zsp"], tmp3(1236).t.CyRLmH, tmp3(1236).t["VD3Q+S"]);
                }
                return obj;
              }
            }
          }
          obj = { success: false };
          const obj2 = importAll(9911);
        }
      }
    }
    return { success: false };
  },
  [arg1(1906).ApplicationCommandOptionType.NUMBER]: (type, type2, id) => {
    importDefault(38)(type2.type === require(1906) /* PermissionOverwriteType */.ApplicationCommandOptionType.NUMBER, "option type must match validator type");
    let trimmed = null;
    if ("text" === type.type) {
      trimmed = type.text.trim();
      const str = type.text;
    }
    if (null != trimmed) {
      if (0 !== trimmed.length) {
        if (null != type2.choices) {
          let obj = { success: null };
          let tmp3Result = tmp3(9913);
          obj[0] = null != tmp3Result.findChoiceNumberValue(type2.choices, trimmed);
          return obj;
        } else {
          if (type2.autocomplete) {
            tmp3Result = tmp3(9913);
            if (null != tmp3Result.findAutocompleteChoiceNumberValue(id, type2.name, trimmed)) {
              return { success: true };
            }
          }
          const _Number = Number;
          const NumberResult = Number(importAll(9911).normalizeNumericString(_getSystemLocale.locale, trimmed));
          const _isNaN = isNaN;
          if (!isNaN(NumberResult)) {
            const _Number2 = Number;
            if (NumberResult <= Number.MAX_SAFE_INTEGER) {
              const _Number3 = Number;
              if (NumberResult >= Number.MIN_SAFE_INTEGER) {
                obj = validateNumericOptionRange(NumberResult, type2, tmp3(1236).t["8Y5zsp"], tmp3(1236).t.CyRLmH, tmp3(1236).t["VD3Q+S"]);
              }
              return obj;
            }
          }
          obj = { success: false };
          const obj2 = importAll(9911);
        }
      }
    }
    return { success: false };
  },
  [arg1(1906).ApplicationCommandOptionType.USER]: (type, arg1, id, throwTypeErrorResult) => {
    if ("text" === type.type) {
      if (obj2.isSnowflake(type.text)) {
        return { success: true };
      } else {
        const tmpResult = tmp(9914);
        const applicationCommandOption = tmpResult.resolveApplicationCommandOption(type.text, throwTypeErrorResult, id, { allowRoles: false });
        type = undefined;
        if (applicationCommandOption != null) {
          type = applicationCommandOption.type;
        }
        let obj = { success: null };
        obj[0] = "userMention" === type;
        return obj;
      }
      obj2 = require(6889) /* buildCommand */;
      tmp = require;
    } else {
      obj = { success: null };
      obj[0] = "userMention" === type.type;
      return obj;
    }
  },
  [arg1(1906).ApplicationCommandOptionType.CHANNEL]: (type, arg1, id, throwTypeErrorResult) => {
    if ("text" === type.type) {
      if (obj2.isSnowflake(type.text)) {
        return { success: true };
      } else {
        const applicationCommandOption = tmp(9914).resolveApplicationCommandOption(type.text, throwTypeErrorResult, id);
        type = undefined;
        if (applicationCommandOption != null) {
          type = applicationCommandOption.type;
        }
        let obj = { success: null };
        obj[0] = "channelMention" === type;
        return obj;
      }
      obj2 = require(6889) /* buildCommand */;
      tmp = require;
    } else {
      obj = { success: null };
      obj[0] = "channelMention" === type.type;
      return obj;
    }
  },
  [arg1(1906).ApplicationCommandOptionType.ROLE]: (type, arg1, id, throwTypeErrorResult) => {
    if ("text" === type.type) {
      if (obj2.isSnowflake(type.text)) {
        return { success: true };
      } else {
        const tmp3Result = tmp3(9914);
        const applicationCommandOption = tmp3Result.resolveApplicationCommandOption(type.text, throwTypeErrorResult, id, { allowUsers: false });
        type = undefined;
        if (applicationCommandOption != null) {
          type = applicationCommandOption.type;
        }
        let obj = { success: null };
        obj[0] = "roleMention" === type;
        return obj;
      }
      obj2 = require(6889) /* buildCommand */;
      tmp3 = require;
    } else {
      let tmp = "roleMention" === type.type;
      if (!tmp) {
        let tmp2 = "textMention" === type.type;
        if (tmp2) {
          tmp2 = "@everyone" === type.text;
        }
        tmp = tmp2;
      }
      obj = { success: null };
      obj[0] = tmp;
      return obj;
    }
  },
  [arg1(1906).ApplicationCommandOptionType.MENTIONABLE]: (type, arg1, id, throwTypeErrorResult) => {
    if ("text" === type.type) {
      if (obj2.isSnowflake(type.text)) {
        return { success: true };
      } else {
        const applicationCommandOption = tmp4(9914).resolveApplicationCommandOption(type.text, throwTypeErrorResult, id);
        let tmp10 = null != applicationCommandOption;
        if (tmp10) {
          let tmp11 = "userMention" === applicationCommandOption.type;
          if (!tmp11) {
            let tmp12 = "roleMention" === applicationCommandOption.type;
            if (!tmp12) {
              let tmp13 = "textMention" === applicationCommandOption.type;
              if (tmp13) {
                tmp13 = "@everyone" === applicationCommandOption.text;
              }
              tmp12 = tmp13;
            }
            tmp11 = tmp12;
          }
          tmp10 = tmp11;
        }
        let obj = { success: null };
        obj[0] = tmp10;
        return obj;
      }
      obj2 = require(6889) /* buildCommand */;
      tmp4 = require;
    } else {
      let tmp = "userMention" === type.type;
      if (!tmp) {
        let tmp2 = "roleMention" === type.type;
        if (!tmp2) {
          let tmp3 = "textMention" === type.type;
          if (tmp3) {
            tmp3 = "@everyone" === type.text;
          }
          tmp2 = tmp3;
        }
        tmp = tmp2;
      }
      obj = { success: null };
      obj[0] = tmp;
      return obj;
    }
  },
  [arg1(1906).ApplicationCommandOptionType.ATTACHMENT]: (type, name, channelId, arg3, closure_10) => {
    if ("text" !== type.type) {
      return { success: false };
    } else {
      let obj = require(6889) /* buildCommand */;
      upload = upload.getUpload(channelId, name.name, obj.getCommandAttachmentDraftType(closure_10));
      obj = { success: null };
      obj[0] = null != upload && upload.filename === type.text;
      return obj;
    }
  }
};
const result = require("PermissionOverwriteType").fileFinishedImporting("modules/application_commands/ApplicationCommandValidators.tsx");

export default obj;