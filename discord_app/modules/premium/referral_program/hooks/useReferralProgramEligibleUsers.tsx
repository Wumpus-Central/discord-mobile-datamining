// === Module 13108: useReferralProgramEligibleUsers ===

// Module 13108 (useReferralProgramEligibleUsers)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import closure_6 from "emitChanges" /* 7197 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/premium/referral_program/hooks/useReferralProgramEligibleUsers.tsx");

export const useReferralProgramEligibleUsers = function useReferralProgramEligibleUsers(searchQuery) {
  searchQuery = searchQuery.searchQuery;
  ({ selectedUsers: importDefault, limit } = searchQuery);
  closure_3 = undefined;
  let stateFromStores;
  let React;
  c6 = undefined;
  closure_7 = undefined;
  let first;
  closure_9 = undefined;
  let first1;
  closure_11 = undefined;
  let first2;
  closure_13 = undefined;
  let obj;
  closure_18 = undefined;
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
          return { value: "HermesInternal", done: null };
        }
      } else {
        while (true) {
          let num = 2;
          v0 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              let num7 = 3;
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              let num6 = 3;
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp;
              dependencyMap = tmp2;
              closure_0 = undefined;
              closure_1 = undefined;
              dependencyMap = undefined;
              closure_3 = undefined;
              let id;
              let _Map = Map;
              let tmp40 = new.target;
              let tmp41 = new.target;
              let map = new Map();
              let tmp43 = map;
              closure_0 = map;
              let tmp44 = closure_1_3;
              closure_1 = closure_1_3;
              let tmp45 = closure_1_3;
              closure_1 = closure_1_3;
              closure_0 = closure_1_3[Symbol.iterator]();
              let tmp15 = closure_1;
              let tmp16 = closure_0;
              if (closure_0 === undefined) {
                let tmp27 = dependencyMap;
                let tmp28 = closure_3;
                let tmp29 = closure_1_13;
                let tmp30 = closure_1_0;
                let tmp31 = closure_1_13(closure_1_0);
                let tmp32 = v0;
                let _Array = Array;
                let tmp33 = closure_1_0;
                let tmp34 = v0(Array.from(closure_1_0.values()));
                let num5 = 3;
                v0 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                let tmp46 = dependencyMap;
                let tmp47 = closure_3;
                c5 = 1;
                closure_1 = tmp17;
                let tmp48 = closure_1_4;
                let tmp49 = closure_1;
                dependencyMap = closure_1_4(closure_1, 2);
                let tmp50 = dependencyMap;
                closure_3 = 5;
                let tmp51 = dependencyMap;
                let tmp52 = closure_1_0;
                let tmp53 = closure_1_2;
                if (32 === closure_1_0(closure_1_2[6]).ReferralOfferStatus.PENDING) {
                  let tmp18 = dependencyMap;
                  let tmp19 = closure_3;
                  let tmp20 = set;
                  let tmp21 = closure_1_3;
                  if (!set.has(closure_1_3)) {
                    let tmp22 = dependencyMap;
                    let tmp23 = closure_3;
                    let tmp24 = closure_1_0;
                    let tmp25 = closure_1_2;
                    obj1 = closure_1_0(closure_1_2[7]);
                    let tmp26 = closure_1_3;
                    c6 = 2;
                    let num4 = 1;
                    v0 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = obj1.getUser(closure_1_3);
                    return obj1;
                  }
                }
              }
            }
          } else if (1 === tmp5) {
            let tmp12 = id;
            let tmp13 = id;
            c5 = 0;
            let tmp14 = closure_0;
            closure_0.return();
            throw id;
          } else if (arg0 === 1) {
            let num3 = 3;
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            let tmp11 = closure_0;
            closure_0.return();
            let num2 = 3;
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let tmp6 = dependencyMap;
            id = arg1;
            let tmp7 = closure_0;
            let tmp8 = id;
            let tmp9 = id;
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
            return { value: "HermesInternal", done: null };
          }
        } else {
          while (true) {
            let num = 2;
            c10 = 2;
            let tmp5 = v0;
            if (0 === v0) {
              if (arg0 === 1) {
                let num10 = 3;
                c10 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                let num9 = 3;
                c10 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let callback2 = tmp;
                closure_5 = tmp2;
                let tmp67 = closure_1;
                let items;
                closure_3 = undefined;
                dependencyMap = undefined;
                closure_5 = undefined;
                callback2 = undefined;
                let lib;
                let tmp68 = c8;
                if (!c8) {
                  let tmp41 = c10;
                  if (!c10) {
                    if (null != tmp66) {
                      let tmp69 = closure_1_4;
                      if (0 !== closure_1_4) {
                        c8 = 2;
                        let tmp70 = v0;
                        let tmp71 = v0(true);
                        items = 0;
                        let tmp72 = closure_1_12;
                        items = [];
                        let tmp73 = items;
                        let tmp74 = items;
                        items = HermesBuiltin.arraySpread(closure_1_12.values(), items);
                        let tmp75 = closure_1_3;
                        dependencyMap = closure_1_3;
                        let tmp76 = closure_1_3;
                        dependencyMap = closure_1_3;
                        closure_3 = closure_1_3[Symbol.iterator]();
                        let tmp42 = dependencyMap;
                        let tmp43 = closure_3;
                        if (closure_3 === undefined) {
                          let tmp54 = closure_5;
                          let tmp55 = callback2;
                          let tmp56 = callback;
                          let tmp57 = closure_1_2;
                          let obj5 = callback(closure_1_2[6]);
                          let tmp58 = callback;
                          let tmp59 = callback;
                          let tmp60 = closure_1;
                          v0 = 4;
                          let num7 = 1;
                          c10 = 1;
                          obj1 = { value: null, done: false };
                          obj1[0] = obj5.fetchReferralEligibleUsers(callback, callback, closure_1);
                          return obj1;
                        } else {
                          let tmp77 = closure_5;
                          let tmp78 = callback2;
                          c8 = 3;
                          closure_3 = tmp44;
                          let tmp79 = closure_1_4;
                          let tmp80 = closure_3;
                          dependencyMap = closure_1_4(closure_3, 2);
                          let tmp81 = dependencyMap;
                          closure_5 = 5;
                          let tmp82 = dependencyMap;
                          let tmp83 = callback;
                          let tmp84 = closure_1_2;
                          if (32 === callback(closure_1_2[6]).ReferralOfferStatus.PENDING) {
                            let tmp45 = closure_5;
                            let tmp46 = callback2;
                            let tmp47 = set;
                            let tmp48 = closure_1_5;
                            if (!set.has(closure_1_5)) {
                              let tmp49 = closure_5;
                              let tmp50 = callback2;
                              let tmp51 = callback;
                              let tmp52 = closure_1_2;
                              let obj2 = callback(closure_1_2[7]);
                              let tmp53 = closure_1_5;
                              v0 = 5;
                              let num6 = 1;
                              c10 = 1;
                              obj2 = { value: null, done: false };
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
                let num8 = 3;
                c10 = 3;
              }
            } else if (1 !== tmp5) {
              if (2 === tmp5) {
                let tmp29 = callback2;
                let tmp30 = lib;
                c8 = 1;
                let tmp31 = callback3;
                let tmp32 = callback3(true);
              } else if (3 === tmp5) {
                let tmp26 = lib;
                let tmp27 = lib;
                c8 = 2;
                let tmp28 = closure_3;
                closure_3.return();
                throw lib;
              } else if (4 === tmp5) {
                if (arg0 === 1) {
                  let num5 = 3;
                  c10 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c8 = 0;
                  let tmp23 = callback2;
                  let tmp24 = v0;
                  let tmp25 = v0(false);
                  let num4 = 3;
                  c10 = 3;
                  let obj3 = { value: null, done: true };
                  obj3[0] = arg1;
                  return obj3;
                } else {
                  let tmp14 = closure_5;
                  let tmp15 = callback2;
                  lib = arg1;
                  let tmp16 = lib;
                  let tmp17 = lib((arg0) => {
                    items = items.filter(() => { ... });
                    const set = new Set(items.map(() => { ... }));
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
                  let tmp18 = callback4;
                  let tmp19 = callback4((arg0) => {
                    const map = new Map(arg0);
                    for (const item10012 of items) {
                      let result = map.set(item10012.id, item10012);
                      continue;
                    }
                    return map;
                  });
                  let tmp20 = callback2;
                  let tmp21 = lib;
                  let tmp22 = callback2(lib.nextIndex);
                  c8 = 1;
                }
              } else if (arg0 === 1) {
                let num3 = 3;
                c10 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c8 = 2;
                let tmp10 = closure_3;
                closure_3.return();
                c8 = 0;
                let tmp11 = callback2;
                let tmp12 = v0;
                let tmp13 = v0(false);
                let num2 = 3;
                c10 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let tmp6 = closure_5;
                callback2 = arg1;
                let tmp7 = items;
                let tmp8 = callback2;
                let arr = items.push(callback2);
              }
              c8 = 0;
              let tmp33 = callback2;
              let tmp34 = v0;
              let tmp35 = v0(false);
            }
            let tmp36 = callback2;
            let tmp37 = lib;
            let tmp38 = lib;
            c8 = 0;
            let tmp39 = v0;
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
  obj = searchQuery(limit[4]);
  let items = [c6];
  closure_3 = obj.useStateFromStores(items, () => _undefined.getRecipientStatus());
  let items1 = [c6];
  stateFromStores = searchQuery(limit[4]).useStateFromStores(items1, () => _undefined.getReferralsRemaining());
  let obj2 = searchQuery(limit[4]);
  [c5, c6] = stateFromStores(React.useState(0), 2);
  const tmp3 = stateFromStores(React.useState([]), 2);
  closure_7 = tmp3[1];
  const tmp4 = stateFromStores(React.useState(false), 2);
  first = tmp4[0];
  closure_9 = tmp4[1];
  let tmp6 = stateFromStores(React.useState(false), 2);
  first1 = tmp6[0];
  closure_11 = tmp6[1];
  let tmp2 = stateFromStores(React.useState(0), 2);
  let tmp9 = stateFromStores(React.useState(new Map()), 2);
  first2 = tmp9[0];
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