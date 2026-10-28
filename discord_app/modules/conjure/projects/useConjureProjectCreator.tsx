// discord_app/modules/conjure/projects/useConjureProjectCreator.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import _modDef3863 from "../intl/ConjureUntranslated.messages.js";
import conjureMessageAuthors from "../chat/conjureMessageAuthors.tsx";
import ListUtils from "../../../utils/ListUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";
import ConjureChatStore from "../chat/ConjureChatStore.tsx";

const require = globalThis.__r;

const UserUtils = intl(5058);
require = fn;
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureProjectPeople(id) {
      const cResult = id(stateFromStoresArray[7]).c(20);
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      let owner_user_id;
      if (id != null) {
        owner_user_id = id.owner_user_id;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ConjureChatStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === owner_user_id) {
        if (cResult[2] === id) {
          let tmp8 = cResult[3];
          let tmp9 = cResult[4];
        }
        stateFromStoresArray = tmp(tmp2[8]).useStateFromStoresArray(first, tmp8, tmp9);
        if (cResult[5] === stateFromStoresArray) {
          if (cResult[6] === owner_user_id) {
            let tmp11 = cResult[7];
            let tmp12 = cResult[8];
          }
          const effect = noop.useEffect(tmp11, tmp12);
          const _Symbol = Symbol;
          class C {
            constructor() {
              if (null != owner_user_id) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[9]);
                messageAuthor = obj.requestMessageAuthor(tmp);
                tmp5 = closure_2;
                item = closure_2.forEach(closure_0(closure_2[9]).requestMessageAuthor);
              }
              return;
            }
          }
          if (cResult[10] !== owner_user_id) {
            class P {
              constructor() {
                user = null;
                if (null != owner_user_id) {
                  tmp3 = closure_4;
                  user = closure_4.getUser(tmp);
                }
                return user;
              }
            }
            const items1 = [owner_user_id];
            cResult[10] = owner_user_id;
            class C {
              constructor() {
                if (null != owner_user_id) {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[9]);
                  messageAuthor = obj.requestMessageAuthor(tmp);
                  tmp5 = closure_2;
                  item = closure_2.forEach(closure_0(closure_2[9]).requestMessageAuthor);
                }
                return;
              }
            }
            cResult[11] = P;
            cResult[12] = items1;
            let tmp18 = items1;
          } else {
            class P {
              constructor() {
                user = null;
                if (null != owner_user_id) {
                  tmp3 = closure_4;
                  user = closure_4.getUser(tmp);
                }
                return user;
              }
            }
            tmp18 = cResult[12];
          }
          const stateFromStores = tmp(tmp2[8]).useStateFromStores(tmp16, P, tmp18);
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            class P {
              constructor() {
                user = null;
                if (null != owner_user_id) {
                  tmp3 = closure_4;
                  user = closure_4.getUser(tmp);
                }
                return user;
              }
            }
            const items2 = [UserStore];
            cResult[13] = items2;
            class C {
              constructor() {
                if (null != owner_user_id) {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[9]);
                  messageAuthor = obj.requestMessageAuthor(tmp);
                  tmp5 = closure_2;
                  item = closure_2.forEach(closure_0(closure_2[9]).requestMessageAuthor);
                }
                return;
              }
            }
          } else {
            class P {
              constructor() {
                user = null;
                if (null != owner_user_id) {
                  tmp3 = closure_4;
                  user = closure_4.getUser(tmp);
                }
                return user;
              }
            }
          }
          if (cResult[14] !== stateFromStoresArray) {
            class P {
              constructor() {
                user = null;
                if (null != owner_user_id) {
                  tmp3 = closure_4;
                  user = closure_4.getUser(tmp);
                }
                return user;
              }
            }
            const items3 = [stateFromStoresArray];
            cResult[14] = stateFromStoresArray;
            class C {
              constructor() {
                if (null != owner_user_id) {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[9]);
                  messageAuthor = obj.requestMessageAuthor(tmp);
                  tmp5 = closure_2;
                  item = closure_2.forEach(closure_0(closure_2[9]).requestMessageAuthor);
                }
                return;
              }
            }
            cResult[15] = items3;
            cResult[16] = tmp23;
            let tmp22 = tmp23;
            const tmp21 = items3;
          } else {
            class P {
              constructor() {
                user = null;
                if (null != owner_user_id) {
                  tmp3 = closure_4;
                  user = closure_4.getUser(tmp);
                }
                return user;
              }
            }
            tmp22 = cResult[16];
          }
          const tmpResult3 = tmp(tmp2[8]);
          const stateFromStoresArray1 = tmp(tmp2[8]).useStateFromStoresArray(tmp20, tmp22, tmp21);
          if (stateFromStores == null) {
            class P {
              constructor() {
                user = null;
                if (null != owner_user_id) {
                  tmp3 = closure_4;
                  user = closure_4.getUser(tmp);
                }
                return user;
              }
            }
          }
          if (cResult[17] === stateFromStoresArray1) {
            class P {
              constructor() {
                user = null;
                if (null != owner_user_id) {
                  tmp3 = closure_4;
                  user = closure_4.getUser(tmp);
                }
                return user;
              }
            }
            return tmp26;
          }
          const obj2 = { creator: stateFromStores, collaborators: stateFromStoresArray1 };
          cResult[17] = stateFromStoresArray1;
          cResult[18] = stateFromStores;
          cResult[19] = obj2;
          tmp26 = obj2;
          const tmpResult4 = tmp(tmp2[8]);
        }
        class C {
          constructor() {
            if (null != owner_user_id) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[9]);
              messageAuthor = obj.requestMessageAuthor(tmp);
              tmp5 = closure_2;
              item = closure_2.forEach(closure_0(closure_2[9]).requestMessageAuthor);
            }
            return;
          }
        }
        const items4 = [owner_user_id, stateFromStoresArray];
        cResult[5] = stateFromStoresArray;
        cResult[6] = owner_user_id;
        cResult[7] = C;
        cResult[8] = items4;
        tmp12 = items4;
        tmp11 = C;
        const tmpResult = tmp(tmp2[8]);
      }
      const fn = function n() {
        if (null == id) {
          return [];
        } else {
          const messages = ConjureChatStore.getMessages(tmp);
          const _Set = Set;
          const set = new Set(
            messages
              .flatMap((user_id) => {
                if (null != user_id.user_id) {
                  if (user_id.user_id !== owner_user_id) {
                    const items = [user_id.user_id];
                  }
                  return [];
                }
              })
              .reverse(),
          );
          let items = [];
          HermesBuiltin.arraySpread(set, 0);
          return items;
        }
      };
      const items5 = [id, owner_user_id];
      cResult[1] = owner_user_id;
      cResult[2] = id;
      cResult[3] = fn;
      cResult[4] = items5;
      tmp9 = items5;
      tmp8 = fn;
      let obj = id(stateFromStoresArray[7]);
    }
  : function useConjureProjectPeople(id) {
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      let owner_user_id;
      if (id != null) {
        owner_user_id = id.owner_user_id;
      }
      let items = [ConjureChatStore];
      const items1 = [id, owner_user_id];
      stateFromStoresArray = id(stateFromStoresArray[8]).useStateFromStoresArray(
        items,
        () => {
          if (null == id) {
            return [];
          } else {
            const messages = ConjureChatStore.getMessages(tmp);
            const _Set = Set;
            const set = new Set(
              messages
                .flatMap((user_id) => {
                  if (null != user_id.user_id) {
                    if (user_id.user_id !== owner_user_id) {
                      const items = [user_id.user_id];
                    }
                    return [];
                  }
                })
                .reverse(),
            );
            let items = [];
            HermesBuiltin.arraySpread(set, 0);
            return items;
          }
        },
        items1,
      );
      const items2 = [owner_user_id, stateFromStoresArray];
      const effect = stateFromStores.useEffect(() => {
        if (null != owner_user_id) {
          const messageAuthor = conjureMessageAuthors.requestMessageAuthor(tmp);
          const item = stateFromStoresArray.forEach(conjureMessageAuthors.requestMessageAuthor);
        }
      }, items2);
      let obj = id(stateFromStoresArray[8]);
      const items3 = [stateFromStoresArray1];
      const items4 = [owner_user_id];
      stateFromStores = id(stateFromStoresArray[8]).useStateFromStores(
        items3,
        () => {
          let user = null;
          if (null != owner_user_id) {
            user = UserStore.getUser(tmp);
          }
          return user;
        },
        items4,
      );
      const obj2 = id(stateFromStoresArray[8]);
      const items5 = [stateFromStoresArray1];
      const items6 = [stateFromStoresArray];
      stateFromStoresArray1 = id(stateFromStoresArray[8]).useStateFromStoresArray(
        items5,
        () => {
          const mapped = stateFromStoresArray.map((item) => user.getUser(item));
          return mapped.filter((item) => null != item);
        },
        items6,
      );
      const items7 = [stateFromStores, stateFromStoresArray1];
      return stateFromStores.useMemo(() => {
        let tmp = stateFromStores;
        if (stateFromStores == null) {
          tmp = null;
        }
        return { creator: tmp, collaborators: stateFromStoresArray1 };
      }, items7);
    };
let closure_6 = tmp2;
ReactCompilerGating = fn(558);
function getConjureProjectCreatorLabel(creator, names) {
  if (0 === names.length) {
    const intl2 = util.intl;
    const obj3 = { creator };
    let formatToPlainStringResult = intl2.formatToPlainString(_modDef3863.t5RWBS, obj3);
  } else {
    const intl = util.intl;
    const obj = { creator, collaborators: ListUtils.getListSummaryLabel(names) };
    formatToPlainStringResult = intl.formatToPlainString(_modDef3863["b5uCe/"], obj);
  }
  return formatToPlainStringResult;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/useConjureProjectCreator.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureProjectCreator(arg0) {
      let intl = require;
      let obj = dependencyMap;
      const cResult = c.c(3);
      ({ creator, collaborators } = closure_6(arg0));
      if (cResult[0] === collaborators) {
        if (cResult[1] === creator) {
          let tmp3 = cResult[2];
        }
        return tmp3;
      }
      if (null == creator) {
        cResult[0] = collaborators;
        cResult[1] = creator;
        cResult[2] = null;
        tmp3 = null;
      } else {
        const obj3 = { creator, collaborators, label: null };
        const name = UserUtils.getName(creator);
        const mapped = collaborators.map((item) => require("UserUtils").getName(item));
        if (0 === mapped.length) {
          intl = util.intl;
          obj = { creator: name };
          let formatToPlainStringResult = intl.formatToPlainString(_modDef3863.t5RWBS, obj);
        } else {
          const intl2 = util.intl;
          const obj4 = { creator: name, collaborators: ListUtils.getListSummaryLabel(mapped) };
          formatToPlainStringResult = intl2.formatToPlainString(_modDef3863["b5uCe/"], obj4);
          const intlResult1 = ListUtils;
        }
        obj3.label = formatToPlainStringResult;
        const intlResult = UserUtils;
      }
      const tmp2 = closure_6(arg0);
    }
  : function useConjureProjectCreator(arg0) {
      const tmp = closure_6(arg0);
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
          const mapped = collaborators.map((item) => creator(closure_1_2[10]).getName(item));
          if (0 === mapped.length) {
            intl = intl(1125).intl;
            obj2 = { creator: name };
            let formatToPlainStringResult = intl.formatToPlainString(_modDef3863.t5RWBS, obj2);
          } else {
            const intl2 = intl(1125).intl;
            const obj4 = { creator: name, collaborators: intl(12558).getListSummaryLabel(mapped) };
            formatToPlainStringResult = intl2.formatToPlainString(_modDef3863["b5uCe/"], obj4);
            const intlResult = intl(12558);
          }
          obj.label = formatToPlainStringResult;
        }
      }, items);
    };
export { getConjureProjectCreatorLabel };
export const useConjureProjectPeople = tmp2;
