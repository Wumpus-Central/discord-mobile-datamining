// === Module 18702: useConjureProjectEventLine ===

// Module 18702 (useConjureProjectEventLine)
import conjureMessageAuthors from "conjureMessageAuthors" /* 11553 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4914 */;
import UserStore from "UserStore" /* 1387 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/useConjureProjectEventLine.tsx");

export default function useConjureProjectEventLine(arg0, actor_user_id, arg2) {
  _require = actor_user_id;
  importDefault = arg2;
  actor_user_id = actor_user_id.actor_user_id;
  items = [actor_user_id];
  const effect = stateFromStores.useEffect(() => {
    const messageAuthor = conjureMessageAuthors.requestMessageAuthor(actor_user_id);
  }, items);
  const items1 = [moved_to_guild_id];
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
    let guild_name = null;
    if ("app_removed" === actor_user_id.type) {
      guild_name = actor_user_id.guild_name;
    }
    stateFromStores1 = guild_name;
  }
  if (stateFromStores1 == null) {
    const intl = tmp2(tmp3[7]).intl;
    stateFromStores1 = intl.string(tmp6(tmp3[8]).R1tPlP);
  }
  moved_to_guild_id = undefined;
  if ("app_removed" === actor_user_id.type) {
    moved_to_guild_id = actor_user_id.moved_to_guild_id;
  }
  const obj3 = require("initialize");
  const tmp8 = name;
  const items5 = [tmp8];
  const items6 = [moved_to_guild_id];
  const stateFromStores2 = require("initialize").useStateFromStores(items5, () => {
    let tmp2 = null;
    if (null != moved_to_guild_id) {
      guild = GuildStore.getGuild(tmp);
      name = undefined;
      if (guild != null) {
        name = guild.name;
      }
      tmp2 = name;
    }
    return tmp2;
  }, items6);
  let tmp13 = null;
  if (null != stateFromStores) {
    tmp13 = null;
    if (null != name) {
      const obj4 = {
        user: name,
        userHook(arg0, arg1) {
              return closure_1(stateFromStores.id, name, arg1);
            }
      };
      tmp13 = obj4;
    }
  }
  const type = actor_user_id.type;
  if ("app_removed" === type) {
    if (null != moved_to_guild_id) {
      let moved_to_guild_name = stateFromStores2;
      if (stateFromStores2 == null) {
        moved_to_guild_name = actor_user_id.moved_to_guild_name;
      }
      if (moved_to_guild_name == null) {
        const intl12 = tmp2(tmp3[7]).intl;
        moved_to_guild_name = intl12.string(tmp6(tmp3[8]).R1tPlP);
      }
      if (null == tmp13) {
        const intl14 = tmp2(tmp3[7]).intl;
        const obj5 = { app: tmp7, server: stateFromStores1, newServer: moved_to_guild_name };
        let formatResult = intl14.format(tmp6(tmp3[8]).NVM0sD, obj5);
      } else {
        const intl13 = tmp2(tmp3[7]).intl;
        const obj6 = { app: tmp7, server: stateFromStores1, newServer: moved_to_guild_name };
        const merged = Object.assign(tmp13);
        formatResult = intl13.format(tmp6(tmp3[8])["/hlliy"], obj6);
      }
      return formatResult;
    } else {
      if (null == tmp13) {
        const intl11 = tmp2(tmp3[7]).intl;
        const obj7 = { app: tmp7, server: stateFromStores1 };
        let formatResult1 = intl11.format(tmp6(tmp3[8]).Lwsrhg, obj7);
      } else {
        const intl10 = tmp2(tmp3[7]).intl;
        const obj8 = { app: tmp7, server: stateFromStores1 };
        const merged1 = Object.assign(tmp13);
        formatResult1 = intl10.format(tmp6(tmp3[8]).qqePfT, obj8);
      }
      return formatResult1;
    }
  } else if ("bot_removed" === type) {
    if (null == tmp13) {
      const intl9 = tmp2(tmp3[7]).intl;
      const obj9 = { app: tmp7, server: stateFromStores1 };
      let formatResult2 = intl9.format(tmp6(tmp3[8]).mT7EQG, obj9);
    } else {
      const intl8 = tmp2(tmp3[7]).intl;
      const obj10 = { app: tmp7, server: stateFromStores1 };
      const merged2 = Object.assign(tmp13);
      formatResult2 = intl8.format(tmp6(tmp3[8])["lA/crI"], obj10);
    }
    return formatResult2;
  } else if ("preview_bot_removed" === type) {
    if (null == tmp13) {
      const intl7 = tmp2(tmp3[7]).intl;
      const obj11 = { app: tmp7, server: stateFromStores1 };
      let formatResult3 = intl7.format(tmp6(tmp3[8])["4LVIeo"], obj11);
    } else {
      const intl6 = tmp2(tmp3[7]).intl;
      const obj12 = { app: tmp7, server: stateFromStores1 };
      const merged3 = Object.assign(tmp13);
      formatResult3 = intl6.format(tmp6(tmp3[8]).YJOV6D, obj12);
    }
    return formatResult3;
  } else if ("app_channel_deleted" === type) {
    let str4 = actor_user_id.channel_name;
    if (str4 == null) {
      str4 = "";
    }
    if (null == tmp13) {
      const intl5 = tmp2(tmp3[7]).intl;
      const obj13 = { channel: str4, server: stateFromStores1 };
      let formatResult4 = intl5.format(tmp6(tmp3[8])["4VQfid"], obj13);
    } else {
      const intl4 = tmp2(tmp3[7]).intl;
      const obj14 = { channel: str4, server: stateFromStores1 };
      const merged4 = Object.assign(tmp13);
      formatResult4 = intl4.format(tmp6(tmp3[8]).RlMIJN, obj14);
    }
    return formatResult4;
  } else if ("remixed" === type) {
    const intl3 = tmp2(tmp3[7]).intl;
    const obj15 = { source: actor_user_id.source_name };
    return intl3.format(tmp6(tmp3[8]).mHCXtm, obj15);
  } else if ("voice_channel_pin" === type) {
    const intl2 = tmp2(tmp3[7]).intl;
    return intl2.string(tmp6(tmp3[8]).UGAfl9);
  } else {
    return "staff_notice" === type ? actor_user_id.message : undefined;
  }
  const tmp2Result = require("initialize");
};