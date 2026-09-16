// === Module 12298: ApplicationCommandValidators ===

// Module 12298 (ApplicationCommandValidators)
import _modDef38 from "module_38" /* 38 */;
import util from "util" /* 1115 */;
import Server from "Server" /* 1895 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7631 */;
import ApplicationCommandOptionUtilsAll from "ApplicationCommandOptionUtils" /* 9555 */;
import ApplicationCommandChoiceUtils from "ApplicationCommandChoiceUtils" /* 9557 */;
import PlaintextResolvers from "PlaintextResolvers" /* 9558 */;
import LocaleStore from "LocaleStore" /* 2026 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 4978 */;

require = fn;
function validateNumericOptionRange(NumberResult, minValue, _8Y5zsp, CyRLmH, VD3Q_S) {
  if (null == minValue.minValue) {
    return { success: true };
  }
  if (null != minValue.maxValue) {
    if (null != minValue.minValue) {
      const obj2 = { success: false, error: null };
      const intl3 = util.intl;
      const obj3 = { minimum: null, maximum: null };
      const minValue2 = minValue.minValue;
      obj3.minimum = minValue2.toLocaleString(util.intl.currentLocale, { useGrouping: false });
      const maxValue2 = minValue.maxValue;
      obj3.maximum = maxValue2.toLocaleString(util.intl.currentLocale, { useGrouping: false });
      obj2.error = intl3.formatToPlainString(_8Y5zsp, obj3);
      return obj2;
    }
  }
  if (null != minValue.minValue) {
    const obj4 = { success: false, error: null };
    const intl2 = util.intl;
    const obj5 = { minimum: null };
    minValue = minValue.minValue;
    obj5.minimum = minValue.toLocaleString(util.intl.currentLocale, { useGrouping: false });
    obj4.error = intl2.formatToPlainString(CyRLmH, obj5);
    return obj4;
  } else if (null != minValue.maxValue) {
    const obj = { success: false, error: null };
    const intl = util.intl;
    const obj6 = { maximum: null };
    const maxValue = minValue.maxValue;
    obj6.maximum = maxValue.toLocaleString(util.intl.currentLocale, { useGrouping: false });
    obj.error = intl.formatToPlainString(VD3Q_S, obj6);
    return obj;
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandValidators.tsx");

export default {
  [fn(1895).ApplicationCommandOptionType.SUB_COMMAND]: () => ({ success: false }),
  [fn(1895).ApplicationCommandOptionType.SUB_COMMAND_GROUP]: () => ({ success: false }),
  [fn(1895).ApplicationCommandOptionType.BOOLEAN]: (type) => {
    if ("text" !== type.type) {
      return { success: false };
    } else {
      const obj = { success: null };
      const trimmed = type.text.trim();
      obj.success = null != ApplicationCommandChoiceUtils.toChoiceBooleanValue(trimmed);
      return obj;
    }
  },
  [fn(1895).ApplicationCommandOptionType.STRING]: (type, type2, id) => {
    _modDef38(type2.type === Server.ApplicationCommandOptionType.STRING, "option type must match validator type");
    type = type.type;
    if ("emoji" === type) {
      let surrogate = type.surrogate;
    } else if ("text" === type) {
      surrogate = type.text.trim();
    } else {
      return { success: false };
    }
    if (null != type2.choices) {
      const obj = { success: null != ApplicationCommandChoiceUtils.findChoiceStringValue(type2.choices, surrogate) };
      return obj;
    } else {
      if (type2.autocomplete) {
        if (null != tmp3Result2.findAutocompleteChoiceStringValue(id, type2.name, surrogate)) {
          return { success: true };
        }
        tmp3Result2 = ApplicationCommandChoiceUtils;
      }
      if (undefined !== type2.minLength) {
        if (null == surrogate) {
          return { success: false };
        } else {
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
                const obj3 = { success: false, error: null };
                const intl4 = util.intl;
                const obj4 = { value: null };
                const minLength3 = type2.minLength;
                obj4.value = minLength3.toLocaleString(util.intl.currentLocale, { useGrouping: false });
                obj3.error = intl4.formatToPlainString(util.t["e+9/SY"], obj4);
                obj2 = obj3;
              }
            }
          }
          if (undefined !== type2.maxLength) {
            if (undefined !== type2.minLength) {
              const obj5 = { success: false, error: null };
              const intl3 = util.intl;
              const obj6 = { minimum: null, maximum: null };
              const minLength2 = type2.minLength;
              obj6.minimum = minLength2.toLocaleString(util.intl.currentLocale, { useGrouping: false });
              const maxLength2 = type2.maxLength;
              obj6.maximum = maxLength2.toLocaleString(util.intl.currentLocale, { useGrouping: false });
              obj5.error = intl3.formatToPlainString(util.t.IE1sTh, obj6);
              obj2 = obj5;
            }
          }
          if (undefined !== type2.minLength) {
            const obj7 = { success: false, error: null };
            const intl2 = util.intl;
            const obj8 = { minimum: null };
            const minLength = type2.minLength;
            obj8.minimum = minLength.toLocaleString(util.intl.currentLocale, { useGrouping: false });
            obj7.error = intl2.formatToPlainString(util.t.rXAFQD, obj8);
            obj2 = obj7;
          } else if (undefined !== type2.maxLength) {
            const obj9 = { success: false, error: null };
            const intl = util.intl;
            const obj10 = { maximum: null };
            const maxLength = type2.maxLength;
            obj10.maximum = maxLength.toLocaleString(util.intl.currentLocale, { useGrouping: false });
            obj9.error = intl.formatToPlainString(util.t["ycEPx/"], obj10);
            obj2 = obj9;
          }
        }
      }
      return { success: true };
    }
  },
  [fn(1895).ApplicationCommandOptionType.INTEGER]: (type, type2, id) => {
    _modDef38(type2.type === Server.ApplicationCommandOptionType.INTEGER, "option type must match validator type");
    let trimmed = null;
    if ("text" === type.type) {
      trimmed = type.text.trim();
    }
    if (null != trimmed) {
      if (0 !== trimmed.length) {
        if (null != type2.choices) {
          const obj = { success: null != ApplicationCommandChoiceUtils.findChoiceNumberValue(type2.choices, trimmed) };
          return obj;
        } else {
          if (type2.autocomplete) {
            if (null != tmp3Result2.findAutocompleteChoiceNumberValue(id, type2.name, trimmed)) {
              return { success: true };
            }
            tmp3Result2 = ApplicationCommandChoiceUtils;
          }
          const _Number = Number;
          const NumberResult = Number(ApplicationCommandOptionUtilsAll.normalizeNumericString(LocaleStore.locale, trimmed));
          if (null != NumberResult) {
            const _isNaN = isNaN;
            if (!isNaN(NumberResult)) {
              const _Number2 = Number;
              if (Number.isInteger(NumberResult)) {
                const _Number3 = Number;
                if (Number.isSafeInteger(NumberResult)) {
                  let obj3 = validateNumericOptionRange(NumberResult, type2, util.t["8Y5zsp"], util.t.CyRLmH, util.t["VD3Q+S"]);
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
  [fn(1895).ApplicationCommandOptionType.NUMBER]: (type, type2, id) => {
    _modDef38(type2.type === Server.ApplicationCommandOptionType.NUMBER, "option type must match validator type");
    let trimmed = null;
    if ("text" === type.type) {
      trimmed = type.text.trim();
    }
    if (null != trimmed) {
      if (0 !== trimmed.length) {
        if (null != type2.choices) {
          const obj = { success: null != ApplicationCommandChoiceUtils.findChoiceNumberValue(type2.choices, trimmed) };
          return obj;
        } else {
          if (type2.autocomplete) {
            if (null != tmp3Result2.findAutocompleteChoiceNumberValue(id, type2.name, trimmed)) {
              return { success: true };
            }
            tmp3Result2 = ApplicationCommandChoiceUtils;
          }
          const _Number = Number;
          const NumberResult = Number(ApplicationCommandOptionUtilsAll.normalizeNumericString(LocaleStore.locale, trimmed));
          const _isNaN = isNaN;
          if (!isNaN(NumberResult)) {
            const _Number2 = Number;
            if (NumberResult <= Number.MAX_SAFE_INTEGER) {
              const _Number3 = Number;
              if (NumberResult >= Number.MIN_SAFE_INTEGER) {
                let obj3 = validateNumericOptionRange(NumberResult, type2, util.t["8Y5zsp"], util.t.CyRLmH, util.t["VD3Q+S"]);
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
  [fn(1895).ApplicationCommandOptionType.USER]: (type, arg1, id2, id) => {
    if ("text" === type.type) {
      if (obj2.isSnowflake(type.text)) {
        return { success: true };
      } else {
        const tmpResult = PlaintextResolvers;
        const applicationCommandOption = tmpResult.resolveApplicationCommandOption(type.text, id, id2, { allowRoles: false });
        type = undefined;
        if (applicationCommandOption != null) {
          type = applicationCommandOption.type;
        }
        const obj3 = { success: "userMention" === type };
        return obj3;
      }
      obj2 = ApplicationCommandUtils;
    } else {
      const obj = { success: "userMention" === type.type };
      return obj;
    }
  },
  [fn(1895).ApplicationCommandOptionType.CHANNEL]: (type, arg1, id2, id) => {
    if ("text" === type.type) {
      if (obj2.isSnowflake(type.text)) {
        return { success: true };
      } else {
        const applicationCommandOption = PlaintextResolvers.resolveApplicationCommandOption(type.text, id, id2);
        type = undefined;
        if (applicationCommandOption != null) {
          type = applicationCommandOption.type;
        }
        const obj3 = { success: "channelMention" === type };
        return obj3;
      }
      obj2 = ApplicationCommandUtils;
    } else {
      const obj = { success: "channelMention" === type.type };
      return obj;
    }
  },
  [fn(1895).ApplicationCommandOptionType.ROLE]: (type, arg1, id2, id) => {
    if ("text" === type.type) {
      if (obj2.isSnowflake(type.text)) {
        return { success: true };
      } else {
        const tmp3Result = PlaintextResolvers;
        const applicationCommandOption = tmp3Result.resolveApplicationCommandOption(type.text, id, id2, { allowUsers: false });
        type = undefined;
        if (applicationCommandOption != null) {
          type = applicationCommandOption.type;
        }
        const obj3 = { success: "roleMention" === type };
        return obj3;
      }
      obj2 = ApplicationCommandUtils;
    } else {
      let tmp = "roleMention" === type.type;
      if (!tmp) {
        let tmp2 = "textMention" === type.type;
        if (tmp2) {
          tmp2 = "@everyone" === type.text;
        }
        tmp = tmp2;
      }
      const obj = { success: tmp };
      return obj;
    }
  },
  [fn(1895).ApplicationCommandOptionType.MENTIONABLE]: (type, arg1, id2, id) => {
    if ("text" === type.type) {
      if (obj2.isSnowflake(type.text)) {
        return { success: true };
      } else {
        const applicationCommandOption = PlaintextResolvers.resolveApplicationCommandOption(type.text, id, id2);
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
        const obj3 = { success: tmp10 };
        return obj3;
      }
      obj2 = ApplicationCommandUtils;
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
      const obj = { success: tmp };
      return obj;
    }
  },
  [fn(1895).ApplicationCommandOptionType.ATTACHMENT]: (type, name, channelId, arg3, arg4) => {
    if ("text" !== type.type) {
      return { success: false };
    } else {
      const upload = UploadAttachmentStore.getUpload(channelId, name.name, ApplicationCommandUtils.getCommandAttachmentDraftType(arg4));
      const obj2 = { success: null != upload && upload.filename === type.text };
      return obj2;
    }
  }
};