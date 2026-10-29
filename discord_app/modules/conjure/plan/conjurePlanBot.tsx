// === Module 12547: conjurePlanBot ===

// Module 12547 (conjurePlanBot)
import Server from "Server" /* 1998 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6832 */;
import conjurePlanTags from "conjurePlanTags" /* 12536 */;
import size from "module_2" /* 2 */;

function isAppCommand(type) {
  let CHAT = type.type;
  if (CHAT == null) {
    CHAT = Server.ApplicationCommandType.CHAT;
  }
  return set.has(CHAT);
}
function isContextMenuExchange(kind) {
  let tmp = "user_command" === kind.kind;
  if (!tmp) {
    tmp = "message_command" === kind.kind;
  }
  return tmp;
}
function pickSamples(items3, arg1) {
  let items1 = items3;
  let tmp = arg1;
  const flatMapResult = closure_2.flatMap((item) => {
    items3 = item;
    let found = items3.find((kind) => kind.kind === closure_0);
    if (found == null) {
      found = [];
    }
    return found;
  });
  const items = [
    ...flatMapResult.filter((kind) => {
      let tmp = "user_command" === kind.kind;
      if (!tmp) {
        tmp = "message_command" === kind.kind;
      }
      return !tmp;
    }),
    ...flatMapResult.filter(isContextMenuExchange)
  ];
  const substr = items.slice(0, 3);
  if (!arg1) {
    tmp = 1 === flatMapResult.length;
  }
  if (!tmp) {
    items1 = [];
  }
  for (const item10029 of items1) {
    if (substr.length >= 3) {
      obj.return();
      break;
    } else {
      let hasItem = substr.includes(item10029);
      if (!hasItem) {
        hasItem = isContextMenuExchange(item10029);
      }
      if (!hasItem) {
        let arr = substr.push(item10029);
      }
      continue;
    }
    return closure_2.flatMap((item) => {
      items3 = item;
      return items3.filter((kind) => {
        let hasItem = kind.kind === closure_0;
        if (hasItem) {
          hasItem = substr.includes(kind);
        }
        return hasItem;
      });
    });
  }
}
let closure_2 = ["command", "user_command", "message_command", "message"];
let items = [Server.ApplicationCommandType.CHAT, Server.ApplicationCommandType.USER, Server.ApplicationCommandType.MESSAGE];
const set = new Set(items);
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanBot.tsx");

export { isAppCommand };
export function getConjurePlanBotInteraction(supported_surfaces) {
  bot = supported_surfaces;
  const planDeclaresSurfaceResult = conjurePlanTags.planDeclaresSurface(supported_surfaces, ConjureProjectTypes.ConjureSupportedSurface.APPLICATION_COMMANDS);
  if (!obj2.planDeclaresSurface(supported_surfaces, ConjureProjectTypes.ConjureSupportedSurface.BOT)) {
    if (!planDeclaresSurfaceResult) {
      return null;
    }
  }
  if (null != bot.bot) {
    ({ bot, interaction } = bot);
  } else {
    interaction = null;
    if (planDeclaresSurfaceResult) {
      const commands = bot.commands;
      interaction = null;
      if (commands.some(isAppCommand)) {
        interaction = "commands";
      }
    }
  }
  obj2 = conjurePlanTags;
}
export function getConjurePlanExperienceBotExchanges(arr) {
  const found = arr.filter((bot) => "" !== bot.bot.trim());
  const substr = found.slice(0, 3);
  return substr.map((item) => {
    ({ user, bot } = item);
    const trimmed = user.trim();
    if ("" === trimmed) {
      const obj = { kind: "event", user: "", bot };
      let obj2 = obj;
    } else {
      let str2 = "message";
      if (trimmed.startsWith("/")) {
        str2 = "command";
      }
      obj2 = { kind: str2, user: trimmed, bot };
    }
    return obj2;
  });
}
export function mergeConjurePlanBotExchanges(arr, arg1) {
  if (0 !== arg1.length) {
    if (!arr.some((kind) => {
      let tmp = "command" === kind.kind;
      if (!tmp) {
        let tmp2 = "user_command" === kind.kind;
        if (!tmp2) {
          tmp2 = "message_command" === kind.kind;
        }
        tmp = tmp2;
      }
      return tmp;
    })) {
      let items = [];
      items[HermesBuiltin.arraySpread(arr.slice(0, 2), 0)] = arg1[0];
    }
    return items;
  }
  items = arr.slice(0, 3);
}
export function getConjurePlanSectionBotExchanges(kind, botExchanges, conjurePlanCommandExchanges) {
  if ("commands" === kind.kind) {
    return conjurePlanCommandExchanges;
  } else {
    let example_exchanges = kind.example_exchanges;
    if (example_exchanges == null) {
      example_exchanges = [];
    }
    let arr2 = botExchanges;
    const found = example_exchanges.filter((bot) => "" !== bot.bot.trim());
    const substr = found.slice(0, 3);
    const mapped = substr.map((item) => {
      ({ user, bot } = item);
      const trimmed = user.trim();
      if ("" === trimmed) {
        const obj = { kind: "event", user: "", bot };
        let obj2 = obj;
      } else {
        let str2 = "message";
        if (trimmed.startsWith("/")) {
          str2 = "command";
        }
        obj2 = { kind: str2, user: trimmed, bot };
      }
      return obj2;
    });
    if (mapped.length > 0) {
      arr2 = mapped;
    }
    if (0 !== conjurePlanCommandExchanges.length) {
      if (!arr2.some((kind) => {
        let tmp = "command" === kind.kind;
        if (!tmp) {
          let tmp2 = "user_command" === kind.kind;
          if (!tmp2) {
            tmp2 = "message_command" === kind.kind;
          }
          tmp = tmp2;
        }
        return tmp;
      })) {
        let items = [];
        items[HermesBuiltin.arraySpread(arr2.slice(0, 2), 0)] = conjurePlanCommandExchanges[0];
      }
      return items;
    }
    items = arr2.slice(0, 3);
  }
}
export function getConjurePlanBotExchanges(bot, commands, bot2) {
  closure_0 = commands;
  bot = bot.bot;
  let example_exchanges;
  if (bot != null) {
    example_exchanges = bot.example_exchanges;
  }
  if (example_exchanges == null) {
    example_exchanges = [];
  }
  let obj = { kind: "event", user: "", bot: bot2.event };
  if ("events" === commands) {
    const substr = example_exchanges.slice(0, 3);
    let mapped = substr.map((bot) => {
      if ("" !== bot.bot.trim()) {
        obj = {};
        const merged = Object.assign(obj);
        obj.bot = str;
        let tmp = obj;
      } else {
        tmp = obj;
      }
      return tmp;
    });
    if (mapped.length <= 0) {
      let items = [obj];
      mapped = items;
    }
    return mapped;
  } else {
    const flatMapResult = example_exchanges.flatMap((item) => {
      ({ user, bot } = item);
      if ("" === user.trim()) {
        let items = [];
      } else {
        let str3 = "message";
        if ("messages" !== closure_0) {
          str3 = "message";
          if (trimStartResult.startsWith("/")) {
            str3 = "command";
          }
          trimStartResult = user.trimStart();
        }
        obj = { kind: str3, user, bot };
        items = [obj];
      }
      return items;
    });
    let obj3 = { kind: "message", user: null, bot: null };
    ({ message: obj2.user, reply: obj2.bot } = bot2);
    if ("messages" === commands) {
      if (0 === flatMapResult.length) {
        const items1 = [obj3];
        return items1;
      }
    }
    commands = bot.commands;
    const found = commands.filter(isAppCommand);
    const mapped1 = found.map((description) => {
      let str2;
      if (description.description != null) {
        str2 = str.trim();
      }
      if (str2 == null) {
        str2 = "";
      }
      if ("" === str2) {
        str2 = bot2.reply;
      }
      let CHAT = description.type;
      if (CHAT == null) {
        CHAT = Server.ApplicationCommandType.CHAT;
      }
      if (Server.ApplicationCommandType.USER === CHAT) {
        const obj2 = { kind: "user_command", user: description.name, bot: str2 };
        obj = obj2;
      } else if (Server.ApplicationCommandType.MESSAGE === CHAT) {
        const obj3 = { kind: "message_command", user: description.name, bot: str2 };
        obj = obj3;
      } else {
        obj = { kind: "command", user: null, bot: null };
        const _HermesInternal = HermesInternal;
        obj.user = "/" + description.name;
        obj.bot = str2;
      }
      return obj;
    });
    if ("messages" === commands) {
      let items2 = [];
    } else {
      items2 = mapped1.filter(isContextMenuExchange);
    }
    if (flatMapResult.length > 0) {
      const items3 = [];
      HermesBuiltin.arraySpread(items2, HermesBuiltin.arraySpread(flatMapResult, 0));
      let tmp3Result = pickSamples(items3, true);
    } else {
      let tmp4 = mapped1;
      if ("both" === commands) {
        const items4 = [];
        items4[HermesBuiltin.arraySpread(mapped1, 0)] = obj3;
        tmp4 = items4;
      }
      tmp3Result = pickSamples(tmp4, false);
    }
    if (tmp3Result.length <= 0) {
      const items5 = [obj];
      tmp3Result = items5;
    }
    return tmp3Result;
  }
}