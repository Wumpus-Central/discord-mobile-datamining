// discord_app/modules/conjure/chat/useConjureProjectEventLine.tsx
import conjureMessageAuthors from "conjureMessageAuthors.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/useConjureProjectEventLine.tsx");

export default function useConjureProjectEventLine(arg0, actor_user_id, arg2) {
  _require = actor_user_id;
  importDefault = arg2;
  actor_user_id = actor_user_id.actor_user_id;
  const items = [actor_user_id];
  const effect = stateFromStores.useEffect(() => {
    const messageAuthor = conjureMessageAuthors.requestMessageAuthor(actor_user_id);
  }, items);
  const items1 = [UserStore];
  const items2 = [actor_user_id];
  stateFromStores = require("initialize").useStateFromStores(
    items1,
    () => {
      let user = null;
      if (null != actor_user_id) {
        user = UserStore.getUser(tmp);
      }
      return user;
    },
    items2,
  );
  const obj = require("initialize");
  let name = require("UserUtils").useName(stateFromStores);
  const tmp7 = require("useConjurePublishedAppName")(arg0);
  const obj2 = require("UserUtils");
  const items3 = [name];
  const items4 = [actor_user_id.guild_id];
  let stateFromStores1 = require("initialize").useStateFromStores(
    items3,
    () => {
      let tmp2 = null;
      if (null != actor_user_id.guild_id) {
        const guild = GuildStore.getGuild(tmp.guild_id);
        name = undefined;
        if (guild != null) {
          name = guild.name;
        }
        tmp2 = name;
      }
      return tmp2;
    },
    items4,
  );
  if (stateFromStores1 == null) {
    const intl = tmp2(tmp3[7]).intl;
    stateFromStores1 = intl.string(tmp6(tmp3[8]).R1tPlP);
  }
  let tmp9 = null;
  if (null != stateFromStores) {
    tmp9 = null;
    if (null != name) {
      const obj4 = {
        user: name,
        userHook(arg0, arg1) {
          return closure_1(stateFromStores.id, name, arg1);
        },
      };
      tmp9 = obj4;
    }
  }
  const type = actor_user_id.type;
  if ("app_removed" === type) {
    if (null == tmp9) {
      const intl11 = tmp2(tmp3[7]).intl;
      const obj5 = { app: tmp7, server: stateFromStores1 };
      let formatResult = intl11.format(tmp6(tmp3[8]).Lwsrhg, obj5);
    } else {
      const intl10 = tmp2(tmp3[7]).intl;
      const obj6 = { app: tmp7, server: stateFromStores1 };
      const merged = Object.assign(tmp9);
      formatResult = intl10.format(tmp6(tmp3[8]).qqePfT, obj6);
    }
    return formatResult;
  } else if ("bot_removed" === type) {
    if (null == tmp9) {
      const intl9 = tmp2(tmp3[7]).intl;
      const obj7 = { app: tmp7, server: stateFromStores1 };
      let formatResult1 = intl9.format(tmp6(tmp3[8]).mT7EQG, obj7);
    } else {
      const intl8 = tmp2(tmp3[7]).intl;
      const obj8 = { app: tmp7, server: stateFromStores1 };
      const merged1 = Object.assign(tmp9);
      formatResult1 = intl8.format(tmp6(tmp3[8])["lA/crI"], obj8);
    }
    return formatResult1;
  } else if ("preview_bot_removed" === type) {
    if (null == tmp9) {
      const intl7 = tmp2(tmp3[7]).intl;
      const obj9 = { app: tmp7, server: stateFromStores1 };
      let formatResult2 = intl7.format(tmp6(tmp3[8])["4LVIeo"], obj9);
    } else {
      const intl6 = tmp2(tmp3[7]).intl;
      const obj10 = { app: tmp7, server: stateFromStores1 };
      const merged2 = Object.assign(tmp9);
      formatResult2 = intl6.format(tmp6(tmp3[8]).YJOV6D, obj10);
    }
    return formatResult2;
  } else if ("app_channel_deleted" === type) {
    let str2 = actor_user_id.channel_name;
    if (str2 == null) {
      str2 = "";
    }
    if (null == tmp9) {
      const intl5 = tmp2(tmp3[7]).intl;
      const obj11 = { channel: str2, server: stateFromStores1 };
      let formatResult3 = intl5.format(tmp6(tmp3[8])["4VQfid"], obj11);
    } else {
      const intl4 = tmp2(tmp3[7]).intl;
      const obj12 = { channel: str2, server: stateFromStores1 };
      const merged3 = Object.assign(tmp9);
      formatResult3 = intl4.format(tmp6(tmp3[8]).RlMIJN, obj12);
    }
    return formatResult3;
  } else if ("remixed" === type) {
    const intl3 = tmp2(tmp3[7]).intl;
    const obj13 = { source: actor_user_id.source_name };
    return intl3.format(tmp6(tmp3[8]).mHCXtm, obj13);
  } else if ("voice_channel_pin" === type) {
    const intl2 = tmp2(tmp3[7]).intl;
    return intl2.string(tmp6(tmp3[8]).UGAfl9);
  }
  const obj3 = require("initialize");
}
