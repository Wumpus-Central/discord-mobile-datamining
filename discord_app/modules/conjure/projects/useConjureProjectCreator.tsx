// === Module 12763: useConjureProjectCreator ===

// Module 12763 (useConjureProjectCreator)
import util from "util" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import UserUtils from "UserUtils" /* 5063 */;
import conjureMessageAuthors from "conjureMessageAuthors" /* 12598 */;
import ListUtils from "ListUtils" /* 12764 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import ConjureChatStore from "ConjureChatStore" /* 10831 */;

require = fn;
function useConjureProjectPeople(stateFromStores) {
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let owner_user_id;
  if (stateFromStores != null) {
    owner_user_id = stateFromStores.owner_user_id;
  }
  let items = [ConjureChatStore];
  const items1 = [id, owner_user_id];
  stateFromStoresArray = id(stateFromStoresArray[6]).useStateFromStoresArray(items, () => {
    if (null == id) {
      return [];
    } else {
      const messages = ConjureChatStore.getMessages(tmp);
      const _Set = Set;
      const set = new Set(messages.flatMap((user_id) => {
        if (null != user_id.user_id) {
          if (user_id.user_id !== owner_user_id) {
            const items = [user_id.user_id];
          }
          return [];
        }
      }).reverse());
      let items = [];
      HermesBuiltin.arraySpread(set, 0);
      return items;
    }
  }, items1);
  const items2 = [owner_user_id, stateFromStoresArray];
  const effect = stateFromStores.useEffect(() => {
    if (null != owner_user_id) {
      const messageAuthor = conjureMessageAuthors.requestMessageAuthor(tmp);
      const item = stateFromStoresArray.forEach(conjureMessageAuthors.requestMessageAuthor);
    }
  }, items2);
  let obj = id(stateFromStoresArray[6]);
  const items3 = [stateFromStoresArray1];
  const items4 = [owner_user_id];
  stateFromStores = id(stateFromStoresArray[6]).useStateFromStores(items3, () => {
    let user = null;
    if (null != owner_user_id) {
      user = UserStore.getUser(tmp);
    }
    return user;
  }, items4);
  const obj2 = id(stateFromStoresArray[6]);
  const items5 = [stateFromStoresArray1];
  const items6 = [stateFromStoresArray];
  stateFromStoresArray1 = id(stateFromStoresArray[6]).useStateFromStoresArray(items5, () => {
    const mapped = stateFromStoresArray.map((item) => user.getUser(item));
    return mapped.filter((item) => null != item);
  }, items6);
  const items7 = [stateFromStores, stateFromStoresArray1];
  return stateFromStores.useMemo(() => {
    let tmp = stateFromStores;
    if (stateFromStores == null) {
      tmp = null;
    }
    return { creator: tmp, collaborators: stateFromStoresArray1 };
  }, items7);
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/useConjureProjectCreator.tsx");

export default function useConjureProjectCreator(stateFromStores) {
  const tmp = useConjureProjectPeople(stateFromStores);
  const creator = tmp.creator;
  const collaborators = tmp.collaborators;
  const items = [creator, collaborators];
  return noop.useMemo(() => {
    if (null == creator) {
      return null;
    } else {
      const obj = { creator, collaborators, label: null };
      let intl = require;
      let obj2 = dependencyMap;
      const name = UserUtils.getName(creator);
      const mapped = collaborators.map((item) => creator(closure_1_2[8]).getName(item));
      if (0 === mapped.length) {
        intl = intl(1114).intl;
        obj2 = { creator: name };
        let formatToPlainStringResult = intl.formatToPlainString(_modDef3865.t5RWBS, obj2);
      } else {
        const intl2 = intl(1114).intl;
        const obj4 = { creator: name, collaborators: intl(12764).getListSummaryLabel(mapped) };
        formatToPlainStringResult = intl2.formatToPlainString(_modDef3865["b5uCe/"], obj4);
        const intlResult = intl(12764);
      }
      obj.label = formatToPlainStringResult;
    }
  }, items);
};
export function getConjureProjectCreatorLabel(creator, names) {
  if (0 === names.length) {
    const intl2 = util.intl;
    const obj3 = { creator };
    let formatToPlainStringResult = intl2.formatToPlainString(_modDef3865.t5RWBS, obj3);
  } else {
    const intl = util.intl;
    const obj = { creator, collaborators: ListUtils.getListSummaryLabel(names) };
    formatToPlainStringResult = intl.formatToPlainString(_modDef3865["b5uCe/"], obj);
  }
  return formatToPlainStringResult;
}
export { useConjureProjectPeople };