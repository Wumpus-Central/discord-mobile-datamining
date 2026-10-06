// === Module 11794: ApplicationCommandValidators ===

// Module 11794 (ApplicationCommandValidators)
import _modDef38 from "module_38" /* 38 */;
import intl5 from "intl" /* 1126 */;
import Server from "Server" /* 1985 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7043 */;
import ApplicationCommandOptionUtilsAll from "ApplicationCommandOptionUtils" /* 8964 */;
import ApplicationCommandChoiceUtils from "ApplicationCommandChoiceUtils" /* 8966 */;
import PlaintextResolvers from "PlaintextResolvers" /* 8967 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7280 */;
import size from "module_2" /* 2 */;

function validateNumericOptionRange(NumberResult, minValue, v8Y5zsp, CyRLmH, VD3Q_S) {
  let formatToPlainString;
  let formatToPlainString2;
  let formatToPlainString3;
  let maxValue;
  let maxValue2;
  let minValue2;
  let obj3;
  let obj5;
  let obj6;
  if (null == minValue.minValue) {
    return { success: true };
  }
  if (null != minValue.maxValue) {
    if (null != minValue.minValue) {
      const obj2 = { success: false, error: formatToPlainString3(v8Y5zsp, obj3) };
      const intl3 = intl5.intl;
      obj3 = { minimum: minValue2.toLocaleString(intl5.intl.currentLocale, { useGrouping: false }), maximum: maxValue2.toLocaleString(intl5.intl.currentLocale, { useGrouping: false }) };
      minValue2 = minValue.minValue;
      formatToPlainString3 = intl3.formatToPlainString;
      maxValue2 = minValue.maxValue;
      return obj2;
    }
  }
  if (null != minValue.minValue) {
    const obj4 = { success: false, error: formatToPlainString2(CyRLmH, obj5) };
    const intl2 = intl5.intl;
    obj5 = { minimum: minValue.toLocaleString(intl5.intl.currentLocale, { useGrouping: false }) };
    minValue = minValue.minValue;
    formatToPlainString2 = intl2.formatToPlainString;
    return obj4;
  } else if (null != minValue.maxValue) {
    const obj = { success: false, error: formatToPlainString(VD3Q_S, obj6) };
    const intl = intl5.intl;
    obj6 = { maximum: maxValue.toLocaleString(intl5.intl.currentLocale, { useGrouping: false }) };
    maxValue = minValue.maxValue;
    formatToPlainString = intl.formatToPlainString;
    return obj;
  }
}
let obj = {
  [Server.ApplicationCommandOptionType.SUB_COMMAND]: () => ({ success: false }),
  [Server.ApplicationCommandOptionType.SUB_COMMAND_GROUP]: () => ({ success: false }),
  [Server.ApplicationCommandOptionType.BOOLEAN]: (type) => {
    let obj2;
    let trimmed;
    if ("text" !== type.type) {
      return { success: false };
    } else {
      const obj = { success: null != obj2.toChoiceBooleanValue(trimmed) };
      const str = type.text;
      trimmed = str.trim();
      obj2 = ApplicationCommandChoiceUtils;
      return obj;
    }
  },
  [Server.ApplicationCommandOptionType.STRING]: (type, type2, id) => {
    let formatToPlainString;
    let formatToPlainString2;
    let formatToPlainString3;
    let formatToPlainString4;
    let maxLength;
    let maxLength2;
    let minLength;
    let minLength2;
    let minLength3;
    let obj10;
    let obj2;
    let obj4;
    let obj6;
    let obj8;
    let surrogate;
    let tmp3Result;
    const tmp2 = _modDef38;
    tmp2(type2.type === Server.ApplicationCommandOptionType.STRING, "option type must match validator type");
    type = type.type;
    if ("emoji" === type) {
      surrogate = type.surrogate;
    } else if ("text" === type) {
      const str2 = type.text;
      surrogate = str2.trim();
    } else {
      return { success: false };
    }
    if (null != type2.choices) {
      const obj = { success: null != tmp3Result.findChoiceStringValue(type2.choices, surrogate) };
      tmp3Result = ApplicationCommandChoiceUtils;
      return obj;
    } else {
      if (type2.autocomplete) {
        const tmp3Result2 = ApplicationCommandChoiceUtils;
        if (null != tmp3Result2.findAutocompleteChoiceStringValue(id, type2.name, surrogate)) {
          return { success: true };
        }
      }
      if (undefined !== type2.minLength) {
        if (null == surrogate) {
          return { success: false };
        } else {
          const prop = intl5.t["e+9/SY"];
          const IE1sTh = intl5.t.IE1sTh;
          const rXAFQD = intl5.t.rXAFQD;
          const prop1 = intl5.t["ycEPx/"];
          if (undefined === type2.minLength) {
            if (undefined !== type2.maxLength) {
              if (!obj2.success) {
                return obj2;
              }
            }
            obj2 = { success: true };
          }
          if (undefined !== type2.maxLength) {
            if (undefined !== type2.minLength) {
              if (type2.minLength === type2.maxLength) {
                const obj3 = { success: false, error: formatToPlainString4(prop, obj4) };
                const intl4 = intl5.intl;
                obj4 = { value: minLength3.toLocaleString(intl5.intl.currentLocale, { useGrouping: false }) };
                minLength3 = type2.minLength;
                formatToPlainString4 = intl4.formatToPlainString;
                obj2 = obj3;
              }
            }
          }
          if (undefined !== type2.maxLength) {
            if (undefined !== type2.minLength) {
              const obj5 = { success: false, error: formatToPlainString3(IE1sTh, obj6) };
              const intl3 = intl5.intl;
              obj6 = { minimum: minLength2.toLocaleString(intl5.intl.currentLocale, { useGrouping: false }), maximum: maxLength2.toLocaleString(intl5.intl.currentLocale, { useGrouping: false }) };
              minLength2 = type2.minLength;
              formatToPlainString3 = intl3.formatToPlainString;
              maxLength2 = type2.maxLength;
              obj2 = obj5;
            }
          }
          if (undefined !== type2.minLength) {
            const obj7 = { success: false, error: formatToPlainString2(rXAFQD, obj8) };
            const intl2 = intl5.intl;
            obj8 = { minimum: minLength.toLocaleString(intl5.intl.currentLocale, { useGrouping: false }) };
            minLength = type2.minLength;
            formatToPlainString2 = intl2.formatToPlainString;
            obj2 = obj7;
          } else if (undefined !== type2.maxLength) {
            const obj9 = { success: false, error: formatToPlainString(prop1, obj10) };
            const intl = intl5.intl;
            obj10 = { maximum: maxLength.toLocaleString(intl5.intl.currentLocale, { useGrouping: false }) };
            maxLength = type2.maxLength;
            formatToPlainString = intl.formatToPlainString;
            obj2 = obj9;
          }
        }
      }
      return { success: true };
    }
  },
  [Server.ApplicationCommandOptionType.INTEGER]: (type, type2, id) => {
    let tmp3Result;
    const tmp2 = _modDef38;
    tmp2(type2.type === Server.ApplicationCommandOptionType.INTEGER, "option type must match validator type");
    let trimmed = null;
    if ("text" === type.type) {
      const str = type.text;
      trimmed = str.trim();
    }
    if (null != trimmed) {
      if (0 !== trimmed.length) {
        if (null != type2.choices) {
          const obj = { success: null != tmp3Result.findChoiceNumberValue(type2.choices, trimmed) };
          tmp3Result = ApplicationCommandChoiceUtils;
          return obj;
        } else {
          if (type2.autocomplete) {
            const tmp3Result2 = ApplicationCommandChoiceUtils;
            if (null != tmp3Result2.findAutocompleteChoiceNumberValue(id, type2.name, trimmed)) {
              return { success: true };
            }
          }
          const _Number = Number;
          const obj2 = ApplicationCommandOptionUtilsAll;
          const NumberResult = Number(obj2.normalizeNumericString(LocaleStore.locale, trimmed));
          if (null != NumberResult) {
            const _isNaN = isNaN;
            if (!isNaN(NumberResult)) {
              const _Number2 = Number;
              if (Number.isInteger(NumberResult)) {
                let obj3;
                const _Number3 = Number;
                if (Number.isSafeInteger(NumberResult)) {
                  const v8Y5zsp = intl5.t["8Y5zsp"];
                  obj3 = validateNumericOptionRange(NumberResult, type2, v8Y5zsp, intl5.t.CyRLmH, intl5.t["VD3Q+S"]);
                }
                return obj3;
              }
            }
          }
          obj3 = { success: false };
        }
      }
    }
    return { success: false };
  },
  [Server.ApplicationCommandOptionType.NUMBER]: (type, type2, id) => {
    let tmp3Result;
    const tmp2 = _modDef38;
    tmp2(type2.type === Server.ApplicationCommandOptionType.NUMBER, "option type must match validator type");
    let trimmed = null;
    if ("text" === type.type) {
      const str = type.text;
      trimmed = str.trim();
    }
    if (null != trimmed) {
      if (0 !== trimmed.length) {
        if (null != type2.choices) {
          const obj = { success: null != tmp3Result.findChoiceNumberValue(type2.choices, trimmed) };
          tmp3Result = ApplicationCommandChoiceUtils;
          return obj;
        } else {
          if (type2.autocomplete) {
            const tmp3Result2 = ApplicationCommandChoiceUtils;
            if (null != tmp3Result2.findAutocompleteChoiceNumberValue(id, type2.name, trimmed)) {
              return { success: true };
            }
          }
          const _Number = Number;
          const obj2 = ApplicationCommandOptionUtilsAll;
          const NumberResult = Number(obj2.normalizeNumericString(LocaleStore.locale, trimmed));
          const _isNaN = isNaN;
          if (!isNaN(NumberResult)) {
            const _Number2 = Number;
            if (NumberResult <= Number.MAX_SAFE_INTEGER) {
              let obj3;
              const _Number3 = Number;
              if (NumberResult >= Number.MIN_SAFE_INTEGER) {
                const v8Y5zsp = intl5.t["8Y5zsp"];
                obj3 = validateNumericOptionRange(NumberResult, type2, v8Y5zsp, intl5.t.CyRLmH, intl5.t["VD3Q+S"]);
              }
              return obj3;
            }
          }
          obj3 = { success: false };
        }
      }
    }
    return { success: false };
  },
  [Server.ApplicationCommandOptionType.USER]: (type, arg1, id, id5) => {
    if ("text" === type.type) {
      const obj2 = ApplicationCommandUtils;
      if (obj2.isSnowflake(type.text)) {
        return { success: true };
      } else {
        const tmpResult = PlaintextResolvers;
        const applicationCommandOption = tmpResult.resolveApplicationCommandOption(type.text, id5, id, { allowRoles: false });
        type = undefined;
        if (applicationCommandOption != null) {
          type = applicationCommandOption.type;
        }
        return { success: "userMention" === type };
      }
    } else {
      return { success: "userMention" === type.type };
    }
  },
  [Server.ApplicationCommandOptionType.CHANNEL]: (type, arg1, id, id5) => {
    if ("text" === type.type) {
      const obj2 = ApplicationCommandUtils;
      if (obj2.isSnowflake(type.text)) {
        return { success: true };
      } else {
        const tmpResult = PlaintextResolvers;
        const applicationCommandOption = tmpResult.resolveApplicationCommandOption(type.text, id5, id);
        type = undefined;
        if (applicationCommandOption != null) {
          type = applicationCommandOption.type;
        }
        return { success: "channelMention" === type };
      }
    } else {
      return { success: "channelMention" === type.type };
    }
  },
  [Server.ApplicationCommandOptionType.ROLE]: (type, arg1, id, id5) => {
    if ("text" === type.type) {
      const obj2 = ApplicationCommandUtils;
      if (obj2.isSnowflake(type.text)) {
        return { success: true };
      } else {
        const tmp3Result = PlaintextResolvers;
        const applicationCommandOption = tmp3Result.resolveApplicationCommandOption(type.text, id5, id, { allowUsers: false });
        type = undefined;
        if (applicationCommandOption != null) {
          type = applicationCommandOption.type;
        }
        return { success: "roleMention" === type };
      }
    } else {
      let tmp = "roleMention" === type.type;
      if (!tmp) {
        tmp = "textMention" === type.type && "@everyone" === type.text;
        const tmp2 = "textMention" === type.type && "@everyone" === type.text;
      }
      return { success: tmp };
    }
  },
  [Server.ApplicationCommandOptionType.MENTIONABLE]: (type, arg1, id, id5) => {
    if ("text" === type.type) {
      const obj2 = ApplicationCommandUtils;
      if (obj2.isSnowflake(type.text)) {
        return { success: true };
      } else {
        const tmp4Result = PlaintextResolvers;
        const applicationCommandOption = tmp4Result.resolveApplicationCommandOption(type.text, id5, id);
        let tmp10 = null != applicationCommandOption;
        if (tmp10) {
          let tmp11 = "userMention" === applicationCommandOption.type;
          if (!tmp11) {
            let tmp12 = "roleMention" === applicationCommandOption.type;
            if (!tmp12) {
              tmp12 = "textMention" === applicationCommandOption.type && "@everyone" === applicationCommandOption.text;
              const tmp13 = "textMention" === applicationCommandOption.type && "@everyone" === applicationCommandOption.text;
            }
            tmp11 = tmp12;
          }
          tmp10 = tmp11;
        }
        return { success: tmp10 };
      }
    } else {
      let tmp = "userMention" === type.type;
      if (!tmp) {
        let tmp2 = "roleMention" === type.type;
        if (!tmp2) {
          tmp2 = "textMention" === type.type && "@everyone" === type.text;
          const tmp3 = "textMention" === type.type && "@everyone" === type.text;
        }
        tmp = tmp2;
      }
      return { success: tmp };
    }
  },
  [Server.ApplicationCommandOptionType.ATTACHMENT]: (type, name, channelId, arg3, commandOrigin) => {
    if ("text" !== type.type) {
      return { success: false };
    } else {
      const getUpload = UploadAttachmentStore.getUpload;
      name = name.name;
      const obj = ApplicationCommandUtils;
      const upload = getUpload(channelId, name, obj.getCommandAttachmentDraftType(commandOrigin));
      const obj2 = { success: tmp9 };
      return obj2;
    }
  }
};
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandValidators.tsx");

export default obj;