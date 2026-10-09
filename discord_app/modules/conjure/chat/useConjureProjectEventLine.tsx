// === Module 17160: useConjureProjectEventLine ===

// Module 17160 (useConjureProjectEventLine)
import conjureMessageAuthors from "conjureMessageAuthors" /* 17067 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/useConjureProjectEventLine.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureProjectEventLine(arg0, actor_user_id, arg2) {
  let type = actor_user_id;
  _require = actor_user_id;
  importDefault = arg2;
  let intl = _require;
  let obj = actor_user_id;
  const cResult = require("c").c(19);
  actor_user_id = actor_user_id.actor_user_id;
  if (cResult[0] !== actor_user_id) {
    const fn = function c() {
      return conjureMessageAuthors.requestMessageAuthor(actor_user_id);
    };
    const items = [actor_user_id];
    cResult[0] = actor_user_id;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp3 = items;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = stateFromStores.useEffect(tmp2, tmp3);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    cResult[3] = items1;
    let tmp5 = items1;
  } else {
    tmp5 = cResult[3];
  }
  if (cResult[4] !== actor_user_id) {
    const fn2 = function v() {
      let user = null;
      if (null != actor_user_id) {
        user = UserStore.getUser(tmp);
      }
      return user;
    };
    const items2 = [actor_user_id];
    cResult[4] = actor_user_id;
    cResult[5] = fn2;
    cResult[6] = items2;
    let tmp8 = items2;
    let tmp7 = fn2;
  } else {
    tmp7 = cResult[5];
    tmp8 = cResult[6];
  }
  const obj2 = require("c");
  stateFromStores = intl(obj[6]).useStateFromStores(tmp5, tmp7, tmp8);
  const intlResult = intl(obj[6]);
  let name = intl(obj[7]).useName(stateFromStores);
  let Lwsrhg = importDefault;
  let channel_name = require("useConjurePublishedAppName")(arg0);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [name];
    cResult[7] = items3;
    let tmp11 = items3;
  } else {
    tmp11 = cResult[7];
  }
  if (cResult[8] !== type.guild_id) {
    const fn3 = function y() {
      let tmp2 = null;
      if (null != actor_user_id.guild_id) {
        guild = GuildStore.getGuild(tmp.guild_id);
        name = undefined;
        if (guild != null) {
          name = guild.name;
        }
        tmp2 = name;
      }
      return tmp2;
    };
    const items4 = [type.guild_id];
    cResult[8] = type.guild_id;
    cResult[9] = fn3;
    cResult[10] = items4;
    let tmp14 = items4;
    let tmp13 = fn3;
  } else {
    tmp13 = cResult[9];
    tmp14 = cResult[10];
  }
  const intlResult1 = intl(obj[7]);
  const stateFromStores1 = intl(obj[6]).useStateFromStores(tmp11, tmp13, tmp14);
  if (cResult[11] === stateFromStores) {
    if (cResult[12] === channel_name) {
      if (cResult[13] === type.channel_name) {
        if (cResult[14] === type.type) {
          if (cResult[15] === stateFromStores1) {
            if (cResult[16] === arg2) {
              if (cResult[17] === name) {
                const _Symbol = Symbol;
                if (cResult[18] !== Symbol.for("react.early_return_sentinel")) {
                  return tmp16;
                }
              }
            }
          }
        }
      }
    }
  }
  let forResult = Symbol.for("react.early_return_sentinel");
  let stringResult = stateFromStores1;
  if (stateFromStores1 == null) {
    const intl2 = intl(obj[9]).intl;
    stringResult = intl2.string(Lwsrhg(obj[10]).R1tPlP);
  }
  let tmp19 = null;
  if (null != stateFromStores) {
    tmp19 = null;
    if (null != name) {
      const obj3 = {
        user: name,
        userHook(arg0, arg1) {
              return closure_1(stateFromStores.id, name, arg1);
            }
      };
      tmp19 = obj3;
    }
  }
  const type2 = type.type;
  if ("app_removed" === type2) {
    if (null == tmp19) {
      intl = intl(obj[9]).intl;
      Lwsrhg = Lwsrhg(obj[10]).Lwsrhg;
      obj = { app: channel_name, server: stringResult };
      let formatResult = intl.format(Lwsrhg, obj);
    } else {
      const intl9 = intl(obj[9]).intl;
      const obj4 = { app: channel_name, server: stringResult };
      const merged = Object.assign(tmp19);
      formatResult = intl9.format(Lwsrhg(obj[10]).qqePfT, obj4);
    }
  } else {
    if ("bot_removed" === type2) {
      if (null == tmp19) {
        const intl8 = intl(obj[9]).intl;
        const obj5 = { app: channel_name, server: stringResult };
        let formatResult1 = intl8.format(Lwsrhg(obj[10]).mT7EQG, obj5);
      } else {
        const intl7 = intl(obj[9]).intl;
        const obj6 = { app: channel_name, server: stringResult };
        const merged1 = Object.assign(tmp19);
        formatResult1 = intl7.format(Lwsrhg(obj[10])["lA/crI"], obj6);
      }
      forResult = formatResult1;
      cResult[11] = stateFromStores;
      cResult[12] = channel_name;
      channel_name = type.channel_name;
      cResult[13] = channel_name;
      type = type.type;
      cResult[14] = type;
      cResult[15] = stateFromStores1;
      cResult[16] = arg2;
      cResult[17] = name;
      cResult[18] = forResult;
    } else if ("preview_bot_removed" !== type2) {
      if ("app_channel_deleted" === type2) {
        let str = type.channel_name;
        if (str == null) {
          str = "";
        }
        if (null == tmp19) {
          const intl4 = intl(obj[9]).intl;
          const obj7 = { channel: str, server: stringResult };
          let formatResult2 = intl4.format(Lwsrhg(obj[10])["4VQfid"], obj7);
        } else {
          const intl3 = intl(obj[9]).intl;
          const obj8 = { channel: str, server: stringResult };
          const merged2 = Object.assign(tmp19);
          formatResult2 = intl3.format(Lwsrhg(obj[10]).RlMIJN, obj8);
        }
        forResult = formatResult2;
      }
    }
    if (null == tmp19) {
      const intl6 = intl(obj[9]).intl;
      const obj9 = { app: channel_name, server: stringResult };
      let formatResult3 = intl6.format(Lwsrhg(obj[10])["4LVIeo"], obj9);
    } else {
      const intl5 = intl(obj[9]).intl;
      const obj10 = { app: channel_name, server: stringResult };
      const merged3 = Object.assign(tmp19);
      formatResult3 = intl5.format(Lwsrhg(obj[10]).YJOV6D, obj10);
    }
    forResult = formatResult3;
  }
  const intlResult2 = intl(obj[6]);
}) : (function useConjureProjectEventLine(arg0, actor_user_id, arg2) {
  _require = actor_user_id;
  importDefault = arg2;
  actor_user_id = actor_user_id.actor_user_id;
  const items = [actor_user_id];
  const effect = stateFromStores.useEffect(() => conjureMessageAuthors.requestMessageAuthor(actor_user_id), items);
  const items1 = [UserStore];
  const items2 = [actor_user_id];
  stateFromStores = require("initialize").useStateFromStores(items1, () => {
    let user = null;
    if (null != actor_user_id) {
      user = UserStore.getUser(tmp);
    }
    return user;
  }, items2);
  const obj = require("initialize");
  let name = require("UserUtils").useName(stateFromStores);
  const tmp7 = require("useConjurePublishedAppName")(arg0);
  const obj2 = require("UserUtils");
  const items3 = [name];
  const items4 = [actor_user_id.guild_id];
  let stateFromStores1 = require("initialize").useStateFromStores(items3, () => {
    let tmp2 = null;
    if (null != actor_user_id.guild_id) {
      guild = GuildStore.getGuild(tmp.guild_id);
      name = undefined;
      if (guild != null) {
        name = guild.name;
      }
      tmp2 = name;
    }
    return tmp2;
  }, items4);
  if (stateFromStores1 == null) {
    const intl = tmp2(tmp3[9]).intl;
    stateFromStores1 = intl.string(tmp6(tmp3[10]).R1tPlP);
  }
  let tmp9 = null;
  if (null != stateFromStores) {
    tmp9 = null;
    if (null != name) {
      const obj4 = {
        user: name,
        userHook(arg0, arg1) {
              return closure_1(stateFromStores.id, name, arg1);
            }
      };
      tmp9 = obj4;
    }
  }
  const type = actor_user_id.type;
  if ("app_removed" === type) {
    if (null == tmp9) {
      const intl9 = tmp2(tmp3[9]).intl;
      const obj5 = { app: tmp7, server: stateFromStores1 };
      let formatResult = intl9.format(tmp6(tmp3[10]).Lwsrhg, obj5);
    } else {
      const intl8 = tmp2(tmp3[9]).intl;
      const obj6 = { app: tmp7, server: stateFromStores1 };
      const merged = Object.assign(tmp9);
      formatResult = intl8.format(tmp6(tmp3[10]).qqePfT, obj6);
    }
    return formatResult;
  } else if ("bot_removed" === type) {
    if (null == tmp9) {
      const intl7 = tmp2(tmp3[9]).intl;
      const obj7 = { app: tmp7, server: stateFromStores1 };
      let formatResult1 = intl7.format(tmp6(tmp3[10]).mT7EQG, obj7);
    } else {
      const intl6 = tmp2(tmp3[9]).intl;
      const obj8 = { app: tmp7, server: stateFromStores1 };
      const merged1 = Object.assign(tmp9);
      formatResult1 = intl6.format(tmp6(tmp3[10])["lA/crI"], obj8);
    }
    return formatResult1;
  } else if ("preview_bot_removed" === type) {
    if (null == tmp9) {
      const intl5 = tmp2(tmp3[9]).intl;
      const obj9 = { app: tmp7, server: stateFromStores1 };
      let formatResult2 = intl5.format(tmp6(tmp3[10])["4LVIeo"], obj9);
    } else {
      const intl4 = tmp2(tmp3[9]).intl;
      const obj10 = { app: tmp7, server: stateFromStores1 };
      const merged2 = Object.assign(tmp9);
      formatResult2 = intl4.format(tmp6(tmp3[10]).YJOV6D, obj10);
    }
    return formatResult2;
  } else if ("app_channel_deleted" === type) {
    let str = actor_user_id.channel_name;
    if (str == null) {
      str = "";
    }
    if (null == tmp9) {
      const intl3 = tmp2(tmp3[9]).intl;
      const obj11 = { channel: str, server: stateFromStores1 };
      let formatResult3 = intl3.format(tmp6(tmp3[10])["4VQfid"], obj11);
    } else {
      const intl2 = tmp2(tmp3[9]).intl;
      const obj12 = { channel: str, server: stateFromStores1 };
      const merged3 = Object.assign(tmp9);
      formatResult3 = intl2.format(tmp6(tmp3[10]).RlMIJN, obj12);
    }
    return formatResult3;
  }
  const obj3 = require("initialize");
});