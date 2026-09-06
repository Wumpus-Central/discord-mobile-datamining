// === Module 13450: useReferralProgramEligibleUsers ===

// Module 13450 (useReferralProgramEligibleUsers)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7452 */;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useReferralProgramEligibleUsers.tsx");

export const useReferralProgramEligibleUsers = function useReferralProgramEligibleUsers(searchQuery) {
  searchQuery = searchQuery.searchQuery;
  ({ selectedUsers: importDefault, limit } = searchQuery);
  noop = undefined;
  c6 = undefined;
  closure_14 = async function _getLocalReferrals() {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      while (true) {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            closure_130_4 = undefined;
            let _Map = Map;
            let tmp39 = new.target;
            let tmp40 = new.target;
            let map = new Map();
            closure_130_0 = map;
            closure_1 = dependencyMap;
            searchQuery = dependencyMap[Symbol.iterator]();
            if (searchQuery === undefined) {
              let tmp31 = closure_131_13(closure_130_0);
              let _Array = Array;
              let tmp34 = closure_131_7(Array.from(closure_130_0.values()));
              c7 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              c5 = 1;
              closure_130_1 = tmp17;
              closure_130_2 = stateFromStores(closure_130_1, 2);
              closure_130_3 = closure_130_2[0];
              if (closure_130_2[1] === searchQuery(tmp2[6]).ReferralOfferStatus.PENDING) {
                if (!closure_131_12.has(closure_130_3)) {
                  searchQuery(tmp2[7]);
                  c6 = 2;
                  c7 = 1;
                  let obj1 = { value: null, done: false };
                  obj1.value = obj1.getUser(closure_130_3);
                  return obj1;
                }
              }
            }
          }
        } else if (1 === tmp5) {
          c5 = 0;
          searchQuery.return();
          throw stateFromStores;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          searchQuery.return();
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_130_4 = value;
          let result = closure_130_0.set(closure_130_4.id, closure_130_4);
        }
        c5 = 0;
      }
    }
  };
  function getNextRows(c5, limit) {
    const self = this;
    const apply = closure_16.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  closure_16 = async function _getNextRows(arg0) {
    if (c10 === 2) {
      c10 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      while (true) {
        c10 = 2;
        let tmp5 = c9;
        if (0 === c9) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_6 = tmp;
            closure_5 = tmp2;
            closure_133_0 = searchQuery;
            closure_133_1 = set;
            closure_133_2 = undefined;
            closure_133_3 = undefined;
            closure_133_4 = undefined;
            closure_133_5 = undefined;
            closure_133_6 = undefined;
            closure_133_7 = undefined;
            if (!isFetching) {
              if (!first1) {
                if (null != tmp65) {
                  if (0 !== stateFromStores) {
                    c8 = 2;
                    let tmp70 = React7(true);
                    dependencyMap = 0;
                    let items = [];
                    dependencyMap = HermesBuiltin.arraySpread(first2.values(), dependencyMap);
                    closure_133_2 = items;
                    stateFromStores = dependencyMap;
                    closure_3 = dependencyMap[Symbol.iterator]();
                    if (closure_3 === undefined) {
                      let obj5 = searchQuery(7453);
                      c9 = 4;
                      c10 = 1;
                      let obj1 = { value: obj5.fetchReferralEligibleUsers(closure_133_0, closure_134_0, closure_133_1), done: false };
                      return obj1;
                    } else {
                      c8 = 3;
                      closure_133_3 = tmp44;
                      closure_133_4 = stateFromStores(closure_133_3, 2);
                      closure_133_5 = closure_133_4[0];
                      if (closure_133_4[1] === searchQuery(7453).ReferralOfferStatus.PENDING) {
                        if (!closure_134_12.has(closure_133_5)) {
                          searchQuery(8181);
                          c9 = 5;
                          c10 = 1;
                          let obj2 = { value: null, done: false };
                          obj2.value = obj2.getUser(closure_133_5);
                          return obj2;
                        }
                      }
                      c8 = 2;
                    }
                  }
                }
              }
            }
            c10 = 3;
          }
        } else if (1 !== tmp5) {
          if (2 === tmp5) {
            c8 = 1;
            let tmp32 = closure_134_11(true);
          } else if (3 === tmp5) {
            c8 = 2;
            closure_3.return();
            throw closure_1_7;
          } else if (4 === tmp5) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 0;
              let tmp25 = closure_134_9(false);
              c10 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              closure_133_7 = value;
              let tmp17 = closure_134_7((arg0) => {
                closure_2 = closure_2.filter((id) => !set.has(id.id));
                set = new Set(closure_2.map((id) => id.id));
                users = users.users;
                const found = users.filter((id) => {
                  const hasItem = set.has(id.id);
                  let tmp2 = !hasItem;
                  if (!hasItem) {
                    tmp2 = !set.has(id.id);
                  }
                  return tmp2;
                });
                if (0 === closure_1_0) {
                  const items = [];
                  let arraySpreadResult = HermesBuiltin.arraySpread(set.values(), 0);
                  arraySpreadResult = HermesBuiltin.arraySpread(found, HermesBuiltin.arraySpread(closure_2.values(), arraySpreadResult));
                  let items1 = items;
                } else {
                  items1 = [];
                  HermesBuiltin.arraySpread(found, HermesBuiltin.arraySpread(arg0, 0));
                }
                return items1;
              });
              let tmp19 = closure_134_13((arg0) => {
                const map = new Map(arg0);
                for (const item10012 of closure_2) {
                  let result = map.set(item10012.id, item10012);
                  continue;
                }
                return map;
              });
              let tmp22 = closure_134_6(closure_133_7.nextIndex);
              c8 = 1;
            }
          } else if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            closure_3.return();
            c8 = 0;
            let tmp13 = closure_134_9(false);
            c10 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_133_6 = value;
            let arr = closure_133_2.push(closure_133_6);
          }
          c8 = 0;
          let tmp35 = closure_134_9(false);
        }
        c8 = 0;
        let tmp40 = closure_134_9(false);
        throw closure_1_7;
      }
    }
  };
  let current = searchQuery(limit[4]);
  let items = [c6];
  closure_3 = current.useStateFromStores(items, () => _undefined.getRecipientStatus());
  let items1 = [c6];
  let stateFromStores = searchQuery(limit[4]).useStateFromStores(items1, () => _undefined.getReferralsRemaining());
  let obj2 = searchQuery(limit[4]);
  [c5, c6] = stateFromStores(noop.useState(0), 2);
  const tmp3 = stateFromStores(noop.useState([]), 2);
  closure_7 = tmp3[1];
  const tmp4 = stateFromStores(noop.useState(false), 2);
  const isFetching = tmp4[0];
  closure_9 = tmp4[1];
  let tmp6 = stateFromStores(noop.useState(false), 2);
  const first1 = tmp6[0];
  closure_11 = tmp6[1];
  let tmp2 = stateFromStores(noop.useState(0), 2);
  let tmp9 = stateFromStores(noop.useState(new Map()), 2);
  const first2 = tmp9[0];
  closure_13 = tmp9[1];
  require("module_38")(null != stateFromStores, "Referrals remaining should not be null");
  current = {
    limit,
    getNextRows,
    getLocalReferrals() {
      const self = this;
      const apply = closure_14.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
  };
  closure_18 = noop.useRef(current);
  const effect = noop.useEffect(() => {
    closure_18.current = current;
  });
  const items2 = [searchQuery, stateFromStores];
  const effect1 = noop.useEffect(() => {
    if (stateFromStores > 0) {
      tmp(0, tmp2);
    } else {
      tmp3();
    }
  }, items2);
  current = {
    eligibleUsers: tmp3[0],
    fetchUsers() {
      return getNextRows(c5, limit);
    },
    hasError: first1,
    isFetching,
    resendUsers: first2
  };
  return current;
};