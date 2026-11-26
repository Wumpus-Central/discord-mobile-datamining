// === Module 14281: conjureProjectGroups ===

// Module 14281 (conjureProjectGroups)
import conjureServerProject from "conjureServerProject" /* 7575 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/project_groups/conjureProjectGroups.tsx");

export function groupConjureProjects(arg0, stateFromStoresArray, stateFromStores) {
  const personal = [];
  const collaborating = [];
  const map = new Map();
  new Map(stateFromStoresArray.map((item, index) => {
    items = [item, index];
    return items;
  }));
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let obj2 = conjureServerProject;
    let result = obj2.conjureServerProjectGuildId(nextResult);
    let tmp7 = result;
    if (null != result) {
      value = map.get(tmp7);
      let arr4 = value;
      if (null != value) {
        let arr = arr4.push(tmp3);
      } else {
        let items2 = [tmp3];
        let result1 = map.set(tmp7, items2);
      }
    } else {
      let arr3 = collaborating;
      if (tmp3.owner_user_id === stateFromStores) {
        arr3 = personal;
      }
      let arr2 = arr3.push(tmp3);
    }
    continue;
  }
  const arr5 = Array.from(map, (arg0) => {
    [tmp, tmp2] = arg0;
    return { guildId, projects };
  });
  const sorted = arr5.sort((guildId, guildId2) => {
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
  return { personal, collaborating, servers: arr5 };
}