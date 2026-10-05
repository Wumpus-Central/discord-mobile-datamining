// === Module 8935: ApplicationCommandOptionUtils ===

// Module 8935 (ApplicationCommandOptionUtils)
import _modDef38 from "module_38" /* 38 */;
import Server from "Server" /* 1985 */;
import RegexUtilsDefault from "RegexUtils" /* 4874 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5788 */;
import numberParts from "numberParts" /* 8936 */;
import size from "module_2" /* 2 */;

let hasOwnProperty, regExp, regExp1;

function getString(arg0, arg1) {
  let tmp2;
  let str = "";
  const iter = arg0[arg1][Symbol.iterator]();
  const nextResult = iter.next();
  for (; iter !== undefined; str = str + tmp2.text) {
    tmp2 = nextResult;
    let type = nextResult.type;
    if ("text" !== type) {
      if ("textMention" !== type) {
        if ("userMention" === type) {
          let _HermesInternal4 = HermesInternal;
          str = `${"<@" + tmp2.userId + ">"}`;
        } else if ("channelMention" === type) {
          let _HermesInternal3 = HermesInternal;
          str = `${"<@" + tmp2.userId + ">"}${"<#" + tmp2.channelId + ">"}`;
        } else if ("roleMention" === type) {
          let _HermesInternal2 = HermesInternal;
          str = `${"<@" + tmp2.userId + ">"}${"<#" + tmp2.channelId + ">"}${"<@&" + tmp2.roleId + ">"}`;
        } else if ("emoji" === type) {
          str = `${"<@" + tmp2.userId + ">"}${"<#" + tmp2.channelId + ">"}${"<@&" + tmp2.roleId + ">"}${tmp2.surrogate}`;
        } else if ("customEmoji" === type) {
          let str2 = "";
          if (tmp2.animated) {
            str2 = "a";
          }
          let str3 = tmp2.name;
          let str4 = str3.replace(/:/g, "");
          let _HermesInternal = HermesInternal;
          let str5 = "<";
          let str6 = ":";
          let str7 = ":";
          let str8 = ">";
          str = str + "<" + str2 + ":" + str4.split("~")[0] + ":" + tmp2.emojiId + ">";
        }
      }
      continue;
    }
  }
  return str;
}
const TRUE_OPTION_NAME = ApplicationCommandConstants.TRUE_OPTION_NAME;
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandOptionUtils.tsx");

export const filterEmpty = function filterEmpty(c1) {
  let items;
  let closure_0 = importDefault;
  if (null == importDefault) {
    items = [];
  } else {
    items = importDefault.filter((type, index) => {
      let tmp = "text" !== type.type;
      if (!tmp) {
        if (index > 0) {
          let tmp4;
          if (index < arr.length - 1) {
            tmp4 = "" !== type.text;
          }
          tmp = tmp4;
        }
        const str = type.text;
        tmp4 = "" !== str.trim();
      }
      return tmp;
    });
  }
  return items;
};
export const getBoolean = function getBoolean(arg0, arg1) {
  let items;
  if (null == arg0[arg1]) {
    items = [];
  } else {
    items = arr.filter((type, index) => {
      let tmp = "text" !== type.type;
      if (!tmp) {
        if (index > 0) {
          let tmp4;
          if (index < arr.length - 1) {
            tmp4 = "" !== type.text;
          }
          tmp = tmp4;
        }
        const str = type.text;
        tmp4 = "" !== str.trim();
      }
      return tmp;
    });
  }
  _modDef38(1 === items.length, "Contains multiple values");
  const first = items[0];
  let type;
  const tmp2 = _modDef38;
  if (first != null) {
    type = first.type;
  }
  tmp2("text" === type, "First value is not text");
  return items[0].text === TRUE_OPTION_NAME;
};
export const getOptionalBoolean = function getOptionalBoolean(arg0, arg1) {
  let tmp = null;
  if (null != arg0[arg1]) {
    let items;
    if (null == arg0[arg1]) {
      items = [];
    } else {
      items = arr.filter((type, index) => {
        let tmp = "text" !== type.type;
        if (!tmp) {
          if (index > 0) {
            let tmp4;
            if (index < arr.length - 1) {
              tmp4 = "" !== type.text;
            }
            tmp = tmp4;
          }
          const str = type.text;
          tmp4 = "" !== str.trim();
        }
        return tmp;
      });
    }
    _modDef38(1 === items.length, "Contains multiple values");
    const first = items[0];
    let type;
    const tmp5 = _modDef38;
    if (first != null) {
      type = first.type;
    }
    tmp5("text" === type, "First value is not text");
    tmp = items[0].text === TRUE_OPTION_NAME;
  }
  return tmp;
};
export const getChannelId = function getChannelId(arg0, arg1) {
  let items;
  if (null == arg0[arg1]) {
    items = [];
  } else {
    items = arr.filter((type, index) => {
      let tmp = "text" !== type.type;
      if (!tmp) {
        if (index > 0) {
          let tmp4;
          if (index < arr.length - 1) {
            tmp4 = "" !== type.text;
          }
          tmp = tmp4;
        }
        const str = type.text;
        tmp4 = "" !== str.trim();
      }
      return tmp;
    });
  }
  _modDef38(1 === items.length, "Contains multiple values");
  const first = items[0];
  let type;
  const tmp2 = _modDef38;
  if (first != null) {
    type = first.type;
  }
  tmp2("channelMention" === type, "First value is not a channel mention");
  return items[0].channelId;
};
export const getOptionalChannelId = function getOptionalChannelId(arg0, arg1) {
  let channelId = null;
  if (null != arg0[arg1]) {
    let items;
    if (null == arg0[arg1]) {
      items = [];
    } else {
      items = arr.filter((type, index) => {
        let tmp = "text" !== type.type;
        if (!tmp) {
          if (index > 0) {
            let tmp4;
            if (index < arr.length - 1) {
              tmp4 = "" !== type.text;
            }
            tmp = tmp4;
          }
          const str = type.text;
          tmp4 = "" !== str.trim();
        }
        return tmp;
      });
    }
    _modDef38(1 === items.length, "Contains multiple values");
    const first = items[0];
    let type;
    const tmp5 = _modDef38;
    if (first != null) {
      type = first.type;
    }
    tmp5("channelMention" === type, "First value is not a channel mention");
    channelId = items[0].channelId;
  }
  return channelId;
};
export const getUserId = function getUserId(arg0, arg1) {
  let items;
  if (null == arg0[arg1]) {
    items = [];
  } else {
    items = arr.filter((type, index) => {
      let tmp = "text" !== type.type;
      if (!tmp) {
        if (index > 0) {
          let tmp4;
          if (index < arr.length - 1) {
            tmp4 = "" !== type.text;
          }
          tmp = tmp4;
        }
        const str = type.text;
        tmp4 = "" !== str.trim();
      }
      return tmp;
    });
  }
  _modDef38(1 === items.length, "Contains multiple values");
  const first = items[0];
  let type;
  const tmp2 = _modDef38;
  if (first != null) {
    type = first.type;
  }
  tmp2("userMention" === type, "First value is not a user mention");
  return items[0].userId;
};
export const getOptionalUserId = function getOptionalUserId(arg0, arg1) {
  let userId = null;
  if (null != arg0[arg1]) {
    let items;
    if (null == arg0[arg1]) {
      items = [];
    } else {
      items = arr.filter((type, index) => {
        let tmp = "text" !== type.type;
        if (!tmp) {
          if (index > 0) {
            let tmp4;
            if (index < arr.length - 1) {
              tmp4 = "" !== type.text;
            }
            tmp = tmp4;
          }
          const str = type.text;
          tmp4 = "" !== str.trim();
        }
        return tmp;
      });
    }
    _modDef38(1 === items.length, "Contains multiple values");
    const first = items[0];
    let type;
    const tmp5 = _modDef38;
    if (first != null) {
      type = first.type;
    }
    tmp5("userMention" === type, "First value is not a user mention");
    userId = items[0].userId;
  }
  return userId;
};
export const getRoleId = function getRoleId(arg0, arg1) {
  let items;
  if (null == arg0[arg1]) {
    items = [];
  } else {
    items = arr.filter((type, index) => {
      let tmp = "text" !== type.type;
      if (!tmp) {
        if (index > 0) {
          let tmp4;
          if (index < arr.length - 1) {
            tmp4 = "" !== type.text;
          }
          tmp = tmp4;
        }
        const str = type.text;
        tmp4 = "" !== str.trim();
      }
      return tmp;
    });
  }
  _modDef38(1 === items.length, "Contains multiple values");
  const first = items[0];
  let type;
  const tmp2 = _modDef38;
  if (first != null) {
    type = first.type;
  }
  tmp2("roleMention" === type, "First value is not a role mention");
  return items[0].roleId;
};
export const getOptionalRoleId = function getOptionalRoleId(arg0, arg1) {
  let roleId = null;
  if (null != arg0[arg1]) {
    let items;
    const arr = arg0[arg1];
    if (null == arr) {
      items = [];
    } else {
      items = arr.filter((type, index) => {
        let tmp = "text" !== type.type;
        if (!tmp) {
          if (index > 0) {
            let tmp4;
            if (index < arr.length - 1) {
              tmp4 = "" !== type.text;
            }
            tmp = tmp4;
          }
          const str = type.text;
          tmp4 = "" !== str.trim();
        }
        return tmp;
      });
    }
    let str = "Contains multiple values";
    let tmp4 = _modDef38(1 === items.length, "Contains multiple values");
    const first = items[0];
    let type;
    const tmp5 = _modDef38;
    if (first != null) {
      type = first.type;
    }
    tmp5("roleMention" === type, "First value is not a role mention");
    roleId = items[0].roleId;
  }
  return roleId;
};
export { getString };
export const getOptionalString = function getOptionalString(c1, name) {
  let tmp = null;
  if (null != importDefault[name]) {
    tmp = getString(importDefault, name);
  }
  return tmp;
};
export const normalizeNumericString = function normalizeNumericString(locale, trimmed) {
  let decimal;
  let group;
  if (locale !== hasOwnProperty) {
    hasOwnProperty = locale;
    let prop = numberParts.numberParts[locale];
    if (prop == null) {
      prop = numberParts.numberParts["en-US"];
    }
    const _RegExp = RegExp;
    ({ group, decimal } = prop);
    const self = this;
    const self2 = this;
    const obj = RegexUtilsDefault;
    regExp = new RegExp(obj.escape(group), "g");
    const _RegExp2 = RegExp;
    const self3 = this;
    const self4 = this;
    const obj2 = RegexUtilsDefault;
    regExp1 = new RegExp(obj2.escape(decimal), "g");
  }
  const str3 = trimmed.replace(regExp, "");
  return str3.replace(regExp1, ".");
};
export const getInitialValuesFromInteractionOptions = function getInitialValuesFromInteractionOptions(command, interactionOptions) {
  const obj = {};
  function _loop(iter) {
    let found;
    command = iter;
    const options = command.options;
    if (options != null) {
      found = options.find((name) => name.name === name.name);
    }
    let num = 0;
    if (iter.type !== Server.ApplicationCommandOptionType.ATTACHMENT) {
      let autocomplete;
      if (found != null) {
        autocomplete = found.autocomplete;
      }
      num = 0;
      if (!autocomplete) {
        obj[iter.name] = iter;
      }
    }
    return num;
  }
  const iter = interactionOptions[Symbol.iterator]();
  while (iter !== undefined) {
    let _loopResult = _loop(iter.next());
    continue;
  }
  return obj;
};