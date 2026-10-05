// === Module 7888: useNameplate ===

// Module 7888 (useNameplate)
import utils from "utils" /* 1977 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let user;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let first;
  let guildId;
  const tmp = user;
  const obj = user(guildId[3]);
  const cResult = obj.c(7);
  user = user.user;
  guildId = user.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    let tmp6;
    if (cResult[2] === user) {
      tmp6 = cResult[3];
    }
    const tmpResult = tmp(guildId[4]);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
    let tmp9;
    if (null != user) {
      let nameplate1;
      const tmp10 = cResult[4];
      if (stateFromStores != null) {
        const collectibles = stateFromStores.collectibles;
        if (collectibles != null) {
          nameplate1 = collectibles.nameplate;
        }
      }
      if (tmp10 === nameplate1) {
        let tmp12;
        if (cResult[5] === user) {
          tmp12 = cResult[6];
        }
        tmp9 = tmp12;
      }
      let nameplate2;
      const getNameplateData = tmp(guildId[5]).getNameplateData;
      tmp(guildId[5]);
      if (stateFromStores != null) {
        const collectibles2 = stateFromStores.collectibles;
        if (collectibles2 != null) {
          nameplate2 = collectibles2.nameplate;
        }
      }
      let nameplate = getNameplateData(nameplate2);
      if (nameplate == null) {
        nameplate = user.nameplate;
      }
      let nameplate3;
      if (stateFromStores != null) {
        const collectibles3 = stateFromStores.collectibles;
        if (collectibles3 != null) {
          nameplate3 = collectibles3.nameplate;
        }
      }
      cResult[4] = nameplate3;
      cResult[5] = user;
      cResult[6] = nameplate;
      tmp12 = nameplate;
    }
    return tmp9;
  }
  const fn = function u() {
    let member = null;
    if (null != guildId) {
      member = null;
      if (null != user) {
        member = GuildMemberStore.getMember(tmp, tmp3.id);
      }
    }
    return member;
  };
  cResult[1] = guildId;
  cResult[2] = user;
  cResult[3] = fn;
  tmp6 = fn;
}) : ((user) => {
  user = user.user;
  const guildId = user.guildId;
  const items = [GuildMemberStore];
  const obj = user(guildId[4]);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (null != guildId) {
      member = null;
      if (null != user) {
        member = GuildMemberStore.getMember(tmp, tmp3.id);
      }
    }
    return member;
  });
  const items1 = [stateFromStores, user];
  return stateFromStores.useMemo(() => {
    if (null != user) {
      let nameplate1;
      const getNameplateData = utils.getNameplateData;
      utils;
      if (stateFromStores != null) {
        const collectibles = stateFromStores.collectibles;
        if (collectibles != null) {
          nameplate1 = collectibles.nameplate;
        }
      }
      let nameplate = getNameplateData(nameplate1);
      if (nameplate == null) {
        nameplate = tmp.nameplate;
      }
      return nameplate;
    }
  }, items1);
});
const result = size.fileFinishedImporting("modules/collectibles/nameplates/hooks/useNameplate.tsx");

export const useNameplate = tmp2;