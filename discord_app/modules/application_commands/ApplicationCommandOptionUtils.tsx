// discord_app/modules/application_commands/ApplicationCommandOptionUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import _modDef38 from "../../../_runtime/metro/00038__.js";
import obj132Default from "../../utils/RegexUtils.tsx";
import TRUE_OPTION_NAME2 from "ApplicationCommandConstants.tsx";
import numberParts from "../../intl/number-parts.tsx";

function getString(arg0, arg1) {
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
          str = str + "<" + str2 + ":" + str4.split("~")[0] + ":" + tmp2.emojiId + ">";
        }
      }
      continue;
    }
  }
  return str;
}
const TRUE_OPTION_NAME = TRUE_OPTION_NAME2.TRUE_OPTION_NAME;
const result = obj132.fileFinishedImporting("modules/application_commands/ApplicationCommandOptionUtils.tsx");

export const filterEmpty = function filterEmpty(closure_1) {
  closure_0 = importDefault;
  if (null == importDefault) {
    let items = [];
  } else {
    items = importDefault.filter((item, index) => {
      let str = item;
      if ("text" !== item.type) {
        return tmp;
      } else {
        if (index <= 0) {
          const tmp4 = "" !== str.text.trim();
        }
        str = "";
      }
    });
  }
  return items;
};
export const getBoolean = function getBoolean(arg0, arg1) {
  const arr = arg0[arg1];
  if (null == arr) {
    let items = [];
  } else {
    items = arr.filter((item, index) => {
      let str = item;
      if ("text" !== item.type) {
        return tmp;
      } else {
        if (index <= 0) {
          const tmp4 = "" !== str.text.trim();
        }
        str = "";
      }
    });
  }
  _modDef38(1 === items.length, "Contains multiple values");
  const first = items[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  _modDef38("text" === type, "First value is not text");
  return items[0].text === TRUE_OPTION_NAME;
};
export const getOptionalBoolean = function getOptionalBoolean(arg0, arg1) {
  let tmp = null;
  if (null != arg0[arg1]) {
    if (null == arg0[arg1]) {
      let items = [];
    } else {
      items = arr.filter((item, index) => {
        let str = item;
        if ("text" !== item.type) {
          return tmp;
        } else {
          if (index <= 0) {
            const tmp4 = "" !== str.text.trim();
          }
          str = "";
        }
      });
    }
    _modDef38(1 === items.length, "Contains multiple values");
    const first = items[0];
    let type;
    if (first != null) {
      type = first.type;
    }
    _modDef38("text" === type, "First value is not text");
    tmp = items[0].text === TRUE_OPTION_NAME;
  }
  return tmp;
};
export const getChannelId = function getChannelId(arg0, arg1) {
  const arr = arg0[arg1];
  if (null == arr) {
    let items = [];
  } else {
    items = arr.filter((item, index) => {
      let str = item;
      if ("text" !== item.type) {
        return tmp;
      } else {
        if (index <= 0) {
          const tmp4 = "" !== str.text.trim();
        }
        str = "";
      }
    });
  }
  _modDef38(1 === items.length, "Contains multiple values");
  const first = items[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  _modDef38("channelMention" === type, "First value is not a channel mention");
  return items[0].channelId;
};
export const getOptionalChannelId = function getOptionalChannelId(arg0, arg1) {
  let channelId = null;
  if (null != arg0[arg1]) {
    if (null == arg0[arg1]) {
      let items = [];
    } else {
      items = arr.filter((item, index) => {
        let str = item;
        if ("text" !== item.type) {
          return tmp;
        } else {
          if (index <= 0) {
            const tmp4 = "" !== str.text.trim();
          }
          str = "";
        }
      });
    }
    _modDef38(1 === items.length, "Contains multiple values");
    const first = items[0];
    let type;
    if (first != null) {
      type = first.type;
    }
    _modDef38("channelMention" === type, "First value is not a channel mention");
    channelId = items[0].channelId;
  }
  return channelId;
};
export const getUserId = function getUserId(arg0, arg1) {
  const arr = arg0[arg1];
  if (null == arr) {
    let items = [];
  } else {
    items = arr.filter((item, index) => {
      let str = item;
      if ("text" !== item.type) {
        return tmp;
      } else {
        if (index <= 0) {
          const tmp4 = "" !== str.text.trim();
        }
        str = "";
      }
    });
  }
  _modDef38(1 === items.length, "Contains multiple values");
  const first = items[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  _modDef38("userMention" === type, "First value is not a user mention");
  return items[0].userId;
};
export const getOptionalUserId = function getOptionalUserId(arg0, arg1) {
  let userId = null;
  if (null != arg0[arg1]) {
    if (null == arg0[arg1]) {
      let items = [];
    } else {
      items = arr.filter((item, index) => {
        let str = item;
        if ("text" !== item.type) {
          return tmp;
        } else {
          if (index <= 0) {
            const tmp4 = "" !== str.text.trim();
          }
          str = "";
        }
      });
    }
    _modDef38(1 === items.length, "Contains multiple values");
    const first = items[0];
    let type;
    if (first != null) {
      type = first.type;
    }
    _modDef38("userMention" === type, "First value is not a user mention");
    userId = items[0].userId;
  }
  return userId;
};
export const getRoleId = function getRoleId(arg0, arg1) {
  const arr = arg0[arg1];
  if (null == arr) {
    let items = [];
  } else {
    items = arr.filter((item, index) => {
      let str = item;
      if ("text" !== item.type) {
        return tmp;
      } else {
        if (index <= 0) {
          const tmp4 = "" !== str.text.trim();
        }
        str = "";
      }
    });
  }
  _modDef38(1 === items.length, "Contains multiple values");
  const first = items[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  _modDef38("roleMention" === type, "First value is not a role mention");
  return items[0].roleId;
};
export const getOptionalRoleId = function getOptionalRoleId(arg0, arg1) {
  let roleId = null;
  if (null != arg0[arg1]) {
    if (null == arg0[arg1]) {
      let items = [];
    } else {
      items = arr.filter((item, index) => {
        let str = item;
        if ("text" !== item.type) {
          return tmp;
        } else {
          if (index <= 0) {
            const tmp4 = "" !== str.text.trim();
          }
          str = "";
        }
      });
    }
    _modDef38(1 === items.length, "Contains multiple values");
    const first = items[0];
    let type;
    if (first != null) {
      type = first.type;
    }
    _modDef38("roleMention" === type, "First value is not a role mention");
    roleId = items[0].roleId;
  }
  return roleId;
};
export { getString };
export const getOptionalString = function getOptionalString(closure_1, name) {
  let tmp = null;
  if (null != importDefault[name]) {
    tmp = getString(importDefault, name);
  }
  return tmp;
};
export const normalizeNumericString = function normalizeNumericString(locale, trimmed) {
  if (locale !== closure_5) {
    closure_5 = locale;
    let prop = numberParts.numberParts[locale];
    if (prop == null) {
      prop = numberParts.numberParts["en-US"];
    }
    const _RegExp = RegExp;
    ({ group, decimal } = prop);
    const regExp = new RegExp(obj132Default.escape(group), "g");
    const _RegExp2 = RegExp;
    const regExp1 = new RegExp(obj132Default.escape(decimal), "g");
  }
  return trimmed.replace(regExp, "").replace(regExp1, ".");
};
export const getInitialValuesFromInteractionOptions = function getInitialValuesFromInteractionOptions(command, interactionOptions) {
  closure_0 = command;
  const obj = {};
  function _loop(iter) {
    command = iter;
    const options = command.options;
    if (options != null) {
      const found = options.find((item, index) => item.name === iter.name);
    }
    let num = 0;
    if (iter.type !== command(dependencyMap[4]).ApplicationCommandOptionType.ATTACHMENT) {
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