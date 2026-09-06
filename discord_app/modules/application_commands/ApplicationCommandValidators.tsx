// discord_app/modules/application_commands/ApplicationCommandValidators.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import util from "../../intl/index.native.tsx";
import Server from "../../flow/Server.tsx";
import ApplicationCommandUtils from "ApplicationCommandUtils.tsx";
import ApplicationCommandOptionUtilsAll from "ApplicationCommandOptionUtils.tsx";
import ApplicationCommandChoiceUtils from "ApplicationCommandChoiceUtils.tsx";
import PlaintextResolvers from "../channel_text_area/PlaintextResolvers.tsx";
import LocaleStore from "../user_settings/LocaleStore.tsx";
import UploadAttachmentStore from "../../stores/UploadAttachmentStore.tsx";

require = fn;
function validateNumericOptionRange(NumberResult, minValue, _8Y5zsp, CyRLmH, VD3Q_S) {
  if (null == minValue.minValue) {
    return { success: true };
  }
  if (null != minValue.maxValue) {
    if (null != minValue.minValue) {
      let obj = { success: false, error: null };
      const intl3 = util.intl;
      obj = { minimum: null, maximum: null };
      const minValue2 = minValue.minValue;
      obj.minimum = minValue2.toLocaleString(util.intl.currentLocale, { useGrouping: false });
      const maxValue2 = minValue.maxValue;
      obj.maximum = maxValue2.toLocaleString(util.intl.currentLocale, { useGrouping: false });
      obj.error = intl3.formatToPlainString(_8Y5zsp, obj);
      return obj;
    }
  }
  if (null != minValue.minValue) {
    const obj1 = { success: false, error: null };
    const intl2 = util.intl;
    const obj2 = { minimum: null };
    minValue = minValue.minValue;
    obj2.minimum = minValue.toLocaleString(util.intl.currentLocale, { useGrouping: false });
    obj1.error = intl2.formatToPlainString(CyRLmH, obj2);
    return obj1;
  } else if (null != minValue.maxValue) {
    obj = { success: false, error: null };
    const intl = util.intl;
    const obj3 = { maximum: null };
    const maxValue = minValue.maxValue;
    obj3.maximum = maxValue.toLocaleString(util.intl.currentLocale, { useGrouping: false });
    obj.error = intl.formatToPlainString(VD3Q_S, obj3);
    return obj;
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandValidators.tsx");

export default {
  [fn(1894).ApplicationCommandOptionType.SUB_COMMAND]: () => ({ success: false }),
  [fn(1894).ApplicationCommandOptionType.SUB_COMMAND_GROUP]: () => ({ success: false }),
  [fn(1894).ApplicationCommandOptionType.BOOLEAN]: (type) => {
    if ("text" !== type.type) {
      return { success: false };
    } else {
      const obj = { success: null };
      const trimmed = type.text.trim();
      obj.success = null != ApplicationCommandChoiceUtils.toChoiceBooleanValue(trimmed);
      return obj;
    }
  },
  [fn(1894).ApplicationCommandOptionType.STRING]: (type, type2, id) => {
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
      let obj = { success: null };
      let tmp3Result = ApplicationCommandChoiceUtils;
      obj.success = null != tmp3Result.findChoiceStringValue(type2.choices, surrogate);
      return obj;
    } else {
      if (type2.autocomplete) {
        tmp3Result = ApplicationCommandChoiceUtils;
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
                const intl4 = util.intl;
                const obj2 = { value: null };
                const minLength3 = type2.minLength;
                obj2.value = minLength3.toLocaleString(util.intl.currentLocale, { useGrouping: false });
                obj1.error = intl4.formatToPlainString(util.t["e+9/SY"], obj2);
                obj = obj1;
              }
            }
          }
          if (undefined !== type2.maxLength) {
            if (undefined !== type2.minLength) {
              const obj3 = { success: false, error: null };
              const intl3 = util.intl;
              const obj4 = { minimum: null, maximum: null };
              const minLength2 = type2.minLength;
              obj4.minimum = minLength2.toLocaleString(util.intl.currentLocale, { useGrouping: false });
              const maxLength2 = type2.maxLength;
              obj4.maximum = maxLength2.toLocaleString(util.intl.currentLocale, { useGrouping: false });
              obj3.error = intl3.formatToPlainString(util.t.IE1sTh, obj4);
              obj = obj3;
            }
          }
          if (undefined !== type2.minLength) {
            const obj5 = { success: false, error: null };
            const intl2 = util.intl;
            const obj6 = { minimum: null };
            const minLength = type2.minLength;
            obj6.minimum = minLength.toLocaleString(util.intl.currentLocale, { useGrouping: false });
            obj5.error = intl2.formatToPlainString(util.t.rXAFQD, obj6);
            obj = obj5;
          } else if (undefined !== type2.maxLength) {
            const obj7 = { success: false, error: null };
            const intl = util.intl;
            const obj8 = { maximum: null };
            const maxLength = type2.maxLength;
            obj8.maximum = maxLength.toLocaleString(util.intl.currentLocale, { useGrouping: false });
            obj7.error = intl.formatToPlainString(util.t["ycEPx/"], obj8);
            obj = obj7;
          }
        }
      }
      return { success: true };
    }
  },
  [fn(1894).ApplicationCommandOptionType.INTEGER]: (type, type2, id) => {
    _modDef38(type2.type === Server.ApplicationCommandOptionType.INTEGER, "option type must match validator type");
    let trimmed = null;
    if ("text" === type.type) {
      trimmed = type.text.trim();
    }
    if (null != trimmed) {
      if (0 !== trimmed.length) {
        if (null != type2.choices) {
          let obj = { success: null };
          let tmp3Result = ApplicationCommandChoiceUtils;
          obj.success = null != tmp3Result.findChoiceNumberValue(type2.choices, trimmed);
          return obj;
        } else {
          if (type2.autocomplete) {
            tmp3Result = ApplicationCommandChoiceUtils;
            if (null != tmp3Result.findAutocompleteChoiceNumberValue(id, type2.name, trimmed)) {
              return { success: true };
            }
          }
          const _Number = Number;
          const NumberResult = Number(
            ApplicationCommandOptionUtilsAll.normalizeNumericString(LocaleStore.locale, trimmed),
          );
          if (null != NumberResult) {
            const _isNaN = isNaN;
            if (!isNaN(NumberResult)) {
              const _Number2 = Number;
              if (Number.isInteger(NumberResult)) {
                const _Number3 = Number;
                if (Number.isSafeInteger(NumberResult)) {
                  obj = validateNumericOptionRange(
                    NumberResult,
                    type2,
                    util.t["8Y5zsp"],
                    util.t.CyRLmH,
                    util.t["VD3Q+S"],
                  );
                }
                return obj;
              }
            }
          }
          obj = { success: false };
        }
      }
    }
    return { success: false };
  },
  [fn(1894).ApplicationCommandOptionType.NUMBER]: (type, type2, id) => {
    _modDef38(type2.type === Server.ApplicationCommandOptionType.NUMBER, "option type must match validator type");
    let trimmed = null;
    if ("text" === type.type) {
      trimmed = type.text.trim();
    }
    if (null != trimmed) {
      if (0 !== trimmed.length) {
        if (null != type2.choices) {
          let obj = { success: null };
          let tmp3Result = ApplicationCommandChoiceUtils;
          obj.success = null != tmp3Result.findChoiceNumberValue(type2.choices, trimmed);
          return obj;
        } else {
          if (type2.autocomplete) {
            tmp3Result = ApplicationCommandChoiceUtils;
            if (null != tmp3Result.findAutocompleteChoiceNumberValue(id, type2.name, trimmed)) {
              return { success: true };
            }
          }
          const _Number = Number;
          const NumberResult = Number(
            ApplicationCommandOptionUtilsAll.normalizeNumericString(LocaleStore.locale, trimmed),
          );
          const _isNaN = isNaN;
          if (!isNaN(NumberResult)) {
            const _Number2 = Number;
            if (NumberResult <= Number.MAX_SAFE_INTEGER) {
              const _Number3 = Number;
              if (NumberResult >= Number.MIN_SAFE_INTEGER) {
                obj = validateNumericOptionRange(
                  NumberResult,
                  type2,
                  util.t["8Y5zsp"],
                  util.t.CyRLmH,
                  util.t["VD3Q+S"],
                );
              }
              return obj;
            }
          }
          obj = { success: false };
        }
      }
    }
    return { success: false };
  },
  [fn(1894).ApplicationCommandOptionType.USER]: (type, arg1, id2, id) => {
    if ("text" === type.type) {
      if (obj2.isSnowflake(type.text)) {
        return { success: true };
      } else {
        const tmpResult = PlaintextResolvers;
        const applicationCommandOption = tmpResult.resolveApplicationCommandOption(type.text, id, id2, {
          allowRoles: false,
        });
        type = undefined;
        if (applicationCommandOption != null) {
          type = applicationCommandOption.type;
        }
        let obj = { success: "userMention" === type };
        return obj;
      }
      obj2 = ApplicationCommandUtils;
    } else {
      obj = { success: "userMention" === type.type };
      return obj;
    }
  },
  [fn(1894).ApplicationCommandOptionType.CHANNEL]: (type, arg1, id2, id) => {
    if ("text" === type.type) {
      if (obj2.isSnowflake(type.text)) {
        return { success: true };
      } else {
        const applicationCommandOption = PlaintextResolvers.resolveApplicationCommandOption(type.text, id, id2);
        type = undefined;
        if (applicationCommandOption != null) {
          type = applicationCommandOption.type;
        }
        let obj = { success: "channelMention" === type };
        return obj;
      }
      obj2 = ApplicationCommandUtils;
    } else {
      obj = { success: "channelMention" === type.type };
      return obj;
    }
  },
  [fn(1894).ApplicationCommandOptionType.ROLE]: (type, arg1, id2, id) => {
    if ("text" === type.type) {
      if (obj2.isSnowflake(type.text)) {
        return { success: true };
      } else {
        const tmp3Result = PlaintextResolvers;
        const applicationCommandOption = tmp3Result.resolveApplicationCommandOption(type.text, id, id2, {
          allowUsers: false,
        });
        type = undefined;
        if (applicationCommandOption != null) {
          type = applicationCommandOption.type;
        }
        let obj = { success: "roleMention" === type };
        return obj;
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
      obj = { success: tmp };
      return obj;
    }
  },
  [fn(1894).ApplicationCommandOptionType.MENTIONABLE]: (type, arg1, id2, id) => {
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
        let obj = { success: tmp10 };
        return obj;
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
      obj = { success: tmp };
      return obj;
    }
  },
  [fn(1894).ApplicationCommandOptionType.ATTACHMENT]: (type, name, channelId, arg3, arg4) => {
    if ("text" !== type.type) {
      return { success: false };
    } else {
      let obj = ApplicationCommandUtils;
      const upload = UploadAttachmentStore.getUpload(channelId, name.name, obj.getCommandAttachmentDraftType(arg4));
      obj = { success: null != upload && upload.filename === type.text };
      return obj;
    }
  },
};
