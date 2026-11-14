// discord_app/modules/conjure/project_groups/conjureProjectGroups.tsx
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/conjure/project_groups/conjureProjectGroups.tsx");

export function groupConjureProjects(arg0, stateFromStoresArray, stateFromStores) {
  const personal = [];
  const collaborating = [];
  const map = new Map();
  const map1 = new Map(
    stateFromStoresArray.map((item, index) => {
      items = [item, index];
      return items;
    }),
  );
  function _loop() {
    let result = stateFromStoresArray(stateFromStores[0]).conjureServerAppGuildId(closure_6);
    stateFromStoresArray = result;
    if (null == result) {
      closure_6.owner_user_id === stateFromStores ? personal : collaborating.push(closure_6);
      return 1;
    } else {
      if (closure_6.owner_user_id === stateFromStores) {
        let guild_ids = closure_6.guild_ids;
        if (guild_ids == null) {
          guild_ids = [];
        }
        let found = guild_ids.filter((item) => {
          let hasItem = item !== result;
          if (hasItem) {
            hasItem = map1.has(item);
          }
          return hasItem;
        });
      } else {
        found = [];
      }
      items = [result];
      HermesBuiltin.arraySpread(found, 1);
      result = items;
      items[Symbol.iterator]();
    }
    const obj = stateFromStoresArray(stateFromStores[0]);
  }
  const iter = arg0[Symbol.iterator]();
  while (iter !== undefined) {
    closure_6 = iter.next();
    let _loopResult = _loop();
    continue;
  }
  const arr = Array.from(map, (arg0) => {
    [tmp, tmp2] = arg0;
    return { guildId, projects };
  });
  const sorted = arr.sort((guildId, guildId2) => {
    length = map1.get(guildId.guildId);
    if (length == null) {
      length = stateFromStoresArray.length;
    }
    let length2 = map1.get(guildId2.guildId);
    if (length2 == null) {
      length2 = stateFromStoresArray.length;
    }
    return length - length2;
  });
  return { personal, collaborating, servers: arr };
}
