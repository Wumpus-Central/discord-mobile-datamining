// === Module 12883: useReferralProgramEligibleUsers ===

// Module 12883 (useReferralProgramEligibleUsers)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import emitChanges from "emitChanges" /* 7423 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/premium/referral_program/hooks/useReferralProgramEligibleUsers.tsx");

export const useReferralProgramEligibleUsers = function useReferralProgramEligibleUsers(searchQuery) {
  searchQuery = searchQuery.searchQuery;
  ({ selectedUsers: importDefault, limit } = searchQuery);
  let React;
  c6 = undefined;
  function _getLocalReferrals() {
    const self = this;
    const tmp = callback(function*() {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        while (true) {
          v0 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = undefined;
              closure_3 = undefined;
              let id;
              let _Map = Map;
              let map = new Map();
              closure_1 = closure_1_3;
              closure_0 = closure_1_3[Symbol.iterator]();
              if (closure_0 === undefined) {
                let tmp31 = closure_1_13(closure_1_0);
                let _Array = Array;
                let tmp34 = v0(Array.from(closure_1_0.values()));
                v0 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              } else {
                c5 = 1;
                closure_1 = tmp17;
                dependencyMap = closure_1_4(closure_1, 2);
                closure_3 = 5;
                if (32 === closure_1_0(closure_1_2[6]).ReferralOfferStatus.PENDING) {
                  if (!set.has(closure_1_3)) {
                    closure_1_0(closure_1_2[7]);
                    c6 = 2;
                    v0 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = obj1.getUser(closure_1_3);
                    return obj1;
                  }
                }
              }
            }
          } else if (1 === tmp5) {
            c5 = 0;
            closure_0.return();
            throw id;
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_0.return();
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            id = arg1;
            let result = closure_0.set(id.id, id);
          }
          c5 = 0;
        }
      }
    });
    closure_14 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  function getNextRows(c5, limit) {
    const self = this;
    const apply = _getNextRows.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  function _getNextRows() {
    const self = this;
    const tmp = callback((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      c9 = 0;
      c10 = 0;
      c8 = 0;
      return (function*(arg0, arg1) {
        if (c10 === 2) {
          c10 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          while (true) {
            c10 = 2;
            let tmp5 = v0;
            if (0 === v0) {
              if (arg0 === 1) {
                c10 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c10 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let items;
                closure_3 = undefined;
                dependencyMap = undefined;
                closure_5 = undefined;
                let callback2;
                let lib;
                if (!c8) {
                  if (!c10) {
                    if (null != tmp66) {
                      if (0 !== closure_1_4) {
                        c8 = 2;
                        let tmp71 = v0(true);
                        items = [];
                        items = HermesBuiltin.arraySpread(closure_1_12.values(), items);
                        dependencyMap = closure_1_3;
                        closure_3 = closure_1_3[Symbol.iterator]();
                        if (closure_3 === undefined) {
                          let obj5 = callback(closure_1_2[6]);
                          v0 = 4;
                          c10 = 1;
                          obj1 = { value: null, done: false };
                          obj1[0] = obj5.fetchReferralEligibleUsers(callback, callback, closure_1);
                          return obj1;
                        } else {
                          c8 = 3;
                          closure_3 = tmp44;
                          dependencyMap = closure_1_4(closure_3, 2);
                          closure_5 = 5;
                          if (32 === callback(closure_1_2[6]).ReferralOfferStatus.PENDING) {
                            if (!set.has(closure_1_5)) {
                              callback(closure_1_2[7]);
                              v0 = 5;
                              c10 = 1;
                              let obj2 = { value: null, done: false };
                              obj2[0] = obj2.getUser(closure_1_5);
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
                let tmp32 = callback3(true);
              } else if (3 === tmp5) {
                c8 = 2;
                closure_3.return();
                throw lib;
              } else if (4 === tmp5) {
                if (arg0 === 1) {
                  c10 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c8 = 0;
                  let tmp25 = v0(false);
                  c10 = 3;
                  let obj3 = { value: null, done: true };
                  obj3[0] = arg1;
                  return obj3;
                } else {
                  lib = arg1;
                  let tmp17 = lib((arg0) => {
                    items = items.filter(() => { ... });
                    users = users.users;
                    const found = users.filter(() => { ... });
                    if (0 === set) {
                      items = [];
                      let arraySpreadResult = HermesBuiltin.arraySpread(closure_1.values(), 0);
                      arraySpreadResult = HermesBuiltin.arraySpread(found, HermesBuiltin.arraySpread(items.values(), arraySpreadResult));
                      let items1 = items;
                    } else {
                      items1 = [];
                      HermesBuiltin.arraySpread(found, HermesBuiltin.arraySpread(arg0, 0));
                    }
                    return items1;
                  });
                  let tmp19 = callback4((arg0) => {
                    const map = new Map(arg0);
                    for (const item10012 of items) {
                      let result = map.set(item10012.id, item10012);
                      continue;
                    }
                    return map;
                  });
                  let tmp22 = callback2(lib.nextIndex);
                  c8 = 1;
                }
              } else if (arg0 === 1) {
                c10 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                closure_3.return();
                c8 = 0;
                let tmp13 = v0(false);
                c10 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                callback2 = arg1;
                let arr = items.push(callback2);
              }
              c8 = 0;
              let tmp35 = v0(false);
            }
            c8 = 0;
            let tmp40 = v0(false);
            throw lib;
          }
        }
      })();
    });
    closure_16 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let obj = searchQuery(limit[4]);
  let items = [c6];
  closure_3 = obj.useStateFromStores(items, () => _undefined.getRecipientStatus());
  let items1 = [c6];
  const stateFromStores = searchQuery(limit[4]).useStateFromStores(items1, () => _undefined.getReferralsRemaining());
  let obj2 = searchQuery(limit[4]);
  [c5, c6] = stateFromStores(React.useState(0), 2);
  const tmp3 = stateFromStores(React.useState([]), 2);
  closure_7 = tmp3[1];
  const tmp4 = stateFromStores(React.useState(false), 2);
  const first = tmp4[0];
  closure_9 = tmp4[1];
  let tmp6 = stateFromStores(React.useState(false), 2);
  const first1 = tmp6[0];
  closure_11 = tmp6[1];
  let tmp2 = stateFromStores(React.useState(0), 2);
  let tmp9 = stateFromStores(React.useState(new Map()), 2);
  const first2 = tmp9[0];
  closure_13 = tmp9[1];
  importDefault(limit[5])(null != stateFromStores, "Referrals remaining should not be null");
  obj = {
    limit,
    getNextRows,
    getLocalReferrals() {
      const self = this;
      const apply = _getLocalReferrals.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
  };
  closure_18 = React.useRef(obj);
  const effect = React.useEffect(() => {
    closure_18.current = obj;
  });
  const items2 = [searchQuery, stateFromStores];
  const effect1 = React.useEffect(() => {
    if (stateFromStores > 0) {
      tmp(0, tmp2);
    } else {
      tmp3();
    }
  }, items2);
  obj = {
    eligibleUsers: tmp3[0],
    fetchUsers() {
      return getNextRows(c5, limit);
    },
    hasError: first1,
    isFetching: first,
    resendUsers: first2
  };
  return obj;
};