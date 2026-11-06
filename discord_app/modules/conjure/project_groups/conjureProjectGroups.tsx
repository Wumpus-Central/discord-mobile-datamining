// === Module 13199: conjureProjectGroups ===

// Module 13199 (conjureProjectGroups)
import conjureServerProject from "conjureServerProject" /* 7479 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/project_groups/conjureProjectGroups.tsx");

export function groupConjureProjects(arg0, stateFromStoresArray, stateFromStores) {
  const personal = [];
  const collaborating = [];
  const map = new Map();
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let obj2 = conjureServerProject;
    let result = obj2.conjureServerProjectGuildId(nextResult);
    let tmp6 = result;
    if (null != result) {
      value = map.get(tmp6);
      let arr4 = value;
      if (null != value) {
        let arr = arr4.push(tmp2);
      } else {
        let items2 = [tmp2];
        let result1 = map.set(tmp6, items2);
      }
    } else {
      let arr3 = collaborating;
      if (tmp2.owner_user_id === stateFromStores) {
        arr3 = personal;
      }
      let arr2 = arr3.push(tmp2);
    }
    continue;
  }
  new Map(stateFromStoresArray.map((item, index) => {
    items = [item, index];
    return items;
  }));
  const arr5 = Array.from(map, (arg0) => {
    [tmp, tmp2] = arg0;
    return { guildId, projects };
  });
  const sorted = arr5.sort((guildId, guildId2) => {
    let length = map1.get(guildId.guildId);
    if (length == null) {
      length = stateFromStoresArray.length;
    }
    let length2 = map1.get(guildId2.guildId);
    if (length2 == null) {
      length2 = stateFromStoresArray.length;
    }
    return length - length2;
  });
  return { personal, collaborating, servers: arr5 };
}