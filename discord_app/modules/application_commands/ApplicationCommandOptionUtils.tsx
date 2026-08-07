// discord_app/modules/application_commands/ApplicationCommandOptionUtils.tsx
import { TRUE_OPTION_NAME } from "TRUE_OPTION_NAME";
import { 00038__ } from "../../../_runtime/metro/00038__.js";
import { numberParts } from "../../intl/number-parts.tsx";
import { set } from "../../utils/RegexUtils.tsx";

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
          let tmp11 = str;
          let tmp12 = nextResult;
          let _HermesInternal4 = HermesInternal;
          str = `${"<@" + tmp2.userId + ">"}`;
        } else if ("channelMention" === type) {
          let tmp9 = str;
          let tmp10 = nextResult;
          let _HermesInternal3 = HermesInternal;
          str = `${"<@" + tmp2.userId + ">"}${"<#" + tmp2.channelId + ">"}`;
        } else if ("roleMention" === type) {
          let tmp7 = str;
          let tmp8 = nextResult;
          let _HermesInternal2 = HermesInternal;
          str = `${"<@" + tmp2.userId + ">"}${"<#" + tmp2.channelId + ">"}${"<@&" + tmp2.roleId + ">"}`;
        } else if ("emoji" === type) {
          let tmp5 = str;
          let tmp6 = nextResult;
          str = `${"<@" + tmp2.userId + ">"}${"<#" + tmp2.channelId + ">"}${"<@&" + tmp2.roleId + ">"}${tmp2.surrogate}`;
        } else if ("customEmoji" === type) {
          let tmp15 = str;
          let tmp16 = nextResult;
          let str2 = "";
          if (tmp2.animated) {
            str2 = "a";
          }
          let tmp3 = nextResult;
          let str3 = tmp2.name;
          let str4 = str3.replace(/:/g, "");
          let _HermesInternal = HermesInternal;
          let str5 = "<";
          let tmp4 = str2;
          let str6 = ":";
          let str7 = ":";
          let str8 = ">";
          str = str + "<" + str2 + ":" + str4.split("~")[0] + ":" + tmp2.emojiId + ">";
        }
      }
      continue;
    }
    let tmp13 = str;
    let tmp14 = nextResult;
  }
  return str;
}
const result = require("numberParts").fileFinishedImporting("modules/application_commands/ApplicationCommandOptionUtils.tsx");

export const filterEmpty = function filterEmpty(arr) {
  let closure_0 = arr;
  if (null == arr) {
    let items = [];
  } else {
    items = arr.filter((type) => {
      let str = type;
      if ("text" !== type.type) {
        return tmp;
      } else {
        if (arg1 <= 0) {
          let tmp4 = "" !== str.text.trim();
          const str2 = str.text;
        }
        str = "";
        tmp4 = "" !== str.text;
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
    items = arr.filter((type) => {
      let str = type;
      if ("text" !== type.type) {
        return tmp;
      } else {
        if (arg1 <= 0) {
          let tmp4 = "" !== str.text.trim();
          const str2 = str.text;
        }
        str = "";
        tmp4 = "" !== str.text;
      }
    });
  }
  00038__(1 === items.length, "Contains multiple values");
  const first = items[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  00038__("text" === type, "First value is not text");
  return items[0].text === TRUE_OPTION_NAME;
};
export const getOptionalBoolean = function getOptionalBoolean(arg0, arg1) {
  let tmp = null;
  if (null != arg0[arg1]) {
    const arr = arg0[arg1];
    if (null == arr) {
      let items = [];
    } else {
      items = arr.filter((type) => {
        let str = type;
        if ("text" !== type.type) {
          return tmp;
        } else {
          if (arg1 <= 0) {
            let tmp4 = "" !== str.text.trim();
            const str2 = str.text;
          }
          str = "";
          tmp4 = "" !== str.text;
        }
      });
    }
    00038__(1 === items.length, "Contains multiple values");
    const first = items[0];
    let type;
    if (first != null) {
      type = first.type;
    }
    00038__("text" === type, "First value is not text");
    tmp = items[0].text === TRUE_OPTION_NAME;
    const tmp5 = 00038__;
  }
  return tmp;
};
export const getChannelId = function getChannelId(arg0, arg1) {
  const arr = arg0[arg1];
  if (null == arr) {
    let items = [];
  } else {
    items = arr.filter((type) => {
      let str = type;
      if ("text" !== type.type) {
        return tmp;
      } else {
        if (arg1 <= 0) {
          let tmp4 = "" !== str.text.trim();
          const str2 = str.text;
        }
        str = "";
        tmp4 = "" !== str.text;
      }
    });
  }
  00038__(1 === items.length, "Contains multiple values");
  const first = items[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  00038__("channelMention" === type, "First value is not a channel mention");
  return items[0].channelId;
};
export const getOptionalChannelId = function getOptionalChannelId(arg0, arg1) {
  let channelId = null;
  if (null != arg0[arg1]) {
    const arr = arg0[arg1];
    if (null == arr) {
      let items = [];
    } else {
      items = arr.filter((type) => {
        let str = type;
        if ("text" !== type.type) {
          return tmp;
        } else {
          if (arg1 <= 0) {
            let tmp4 = "" !== str.text.trim();
            const str2 = str.text;
          }
          str = "";
          tmp4 = "" !== str.text;
        }
      });
    }
    00038__(1 === items.length, "Contains multiple values");
    const first = items[0];
    let type;
    if (first != null) {
      type = first.type;
    }
    00038__("channelMention" === type, "First value is not a channel mention");
    channelId = items[0].channelId;
    const tmp5 = 00038__;
  }
  return channelId;
};
export const getUserId = function getUserId(arg0, arg1) {
  const arr = arg0[arg1];
  if (null == arr) {
    let items = [];
  } else {
    items = arr.filter((type) => {
      let str = type;
      if ("text" !== type.type) {
        return tmp;
      } else {
        if (arg1 <= 0) {
          let tmp4 = "" !== str.text.trim();
          const str2 = str.text;
        }
        str = "";
        tmp4 = "" !== str.text;
      }
    });
  }
  00038__(1 === items.length, "Contains multiple values");
  const first = items[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  00038__("userMention" === type, "First value is not a user mention");
  return items[0].userId;
};
export const getOptionalUserId = function getOptionalUserId(arg0, arg1) {
  let userId = null;
  if (null != arg0[arg1]) {
    const arr = arg0[arg1];
    if (null == arr) {
      let items = [];
    } else {
      items = arr.filter((type) => {
        let str = type;
        if ("text" !== type.type) {
          return tmp;
        } else {
          if (arg1 <= 0) {
            let tmp4 = "" !== str.text.trim();
            const str2 = str.text;
          }
          str = "";
          tmp4 = "" !== str.text;
        }
      });
    }
    00038__(1 === items.length, "Contains multiple values");
    const first = items[0];
    let type;
    if (first != null) {
      type = first.type;
    }
    00038__("userMention" === type, "First value is not a user mention");
    userId = items[0].userId;
    const tmp5 = 00038__;
  }
  return userId;
};
export const getRoleId = function getRoleId(arg0, arg1) {
  const arr = arg0[arg1];
  if (null == arr) {
    let items = [];
  } else {
    items = arr.filter((type) => {
      let str = type;
      if ("text" !== type.type) {
        return tmp;
      } else {
        if (arg1 <= 0) {
          let tmp4 = "" !== str.text.trim();
          const str2 = str.text;
        }
        str = "";
        tmp4 = "" !== str.text;
      }
    });
  }
  00038__(1 === items.length, "Contains multiple values");
  const first = items[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  00038__("roleMention" === type, "First value is not a role mention");
  return items[0].roleId;
};
export const getOptionalRoleId = function getOptionalRoleId(arg0, arg1) {
  let roleId = null;
  if (null != arg0[arg1]) {
    const arr = arg0[arg1];
    if (null == arr) {
      let items = [];
    } else {
      items = arr.filter((type) => {
        let str = type;
        if ("text" !== type.type) {
          return tmp;
        } else {
          if (arg1 <= 0) {
            let tmp4 = "" !== str.text.trim();
            const str2 = str.text;
          }
          str = "";
          tmp4 = "" !== str.text;
        }
      });
    }
    00038__(1 === items.length, "Contains multiple values");
    const first = items[0];
    let type;
    if (first != null) {
      type = first.type;
    }
    00038__("roleMention" === type, "First value is not a role mention");
    roleId = items[0].roleId;
    const tmp5 = 00038__;
  }
  return roleId;
};
export { getString };
export const getOptionalString = function getOptionalString(closure_1, name) {
  let tmp = null;
  if (null != closure_1[name]) {
    tmp = getString(closure_1, name);
  }
  return tmp;
};
export const normalizeNumericString = function normalizeNumericString(locale, trimmed) {
  let decimal;
  let group;
  if (locale !== closure_5) {
    closure_5 = locale;
    en_US = numberParts.numberParts[locale];
    if (en_US == null) {
      en_US = tmp11(9930).numberParts["en-US"];
    }
    const _RegExp = RegExp;
    ({ group, decimal } = en_US);
    const regExp = new RegExp(set.escape(group), "g");
    const _RegExp2 = RegExp;
    const obj = set;
    tmp11 = require;
    const regExp1 = new RegExp(set.escape(decimal), "g");
    const obj2 = set;
  }
  return trimmed.replace(regExp, "").replace(regExp1, ".");
};
export const getInitialValuesFromInteractionOptions = function getInitialValuesFromInteractionOptions(command, interactionOptions) {
  let closure_0 = command;
  const obj = {};
  function _loop(iter) {
    const command = iter;
    const options = command.options;
    if (options != null) {
      const found = options.find((name) => name.name === iter.name);
    }
    let num = 0;
    if (iter.type !== command(outer1_2[4]).ApplicationCommandOptionType.ATTACHMENT) {
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