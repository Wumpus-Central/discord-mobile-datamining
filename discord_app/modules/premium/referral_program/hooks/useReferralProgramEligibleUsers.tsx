import module_38 from "module_38";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import emitChanges from "emitChanges";

const require = arg1;
let result = require("noop").fileFinishedImporting("modules/premium/referral_program/hooks/useReferralProgramEligibleUsers.tsx");

export const useReferralProgramEligibleUsers = function useReferralProgramEligibleUsers(searchQuery) {
  let c5;
  let c6;
  let importDefault;
  let limit;
  searchQuery = searchQuery.searchQuery;
  ({ selectedUsers: importDefault, limit } = searchQuery);
  let module_38;
  let stateFromStores;
  let React;
  c6 = undefined;
  let closure_7;
  let first;
  let closure_9;
  let first1;
  let closure_11;
  let first2;
  let closure_13;
  let obj;
  let closure_18;
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
          let obj = { value: null, done: true };
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
              let module_38 = tmp;
              let dependencyMap = tmp2;
              let closure_0;
              let closure_1;
              dependencyMap = undefined;
              module_38 = undefined;
              let id;
              let _Map = Map;
              let tmp40 = new.target;
              let tmp41 = new.target;
              let map = new Map();
              let tmp43 = map;
              closure_0 = map;
              let tmp44 = outer1_3;
              closure_1 = outer1_3;
              let tmp45 = outer1_3;
              closure_1 = outer1_3;
              closure_0 = outer1_3[Symbol.iterator]();
              let tmp15 = closure_1;
              let tmp16 = closure_0;
              if (closure_0 === undefined) {
                let tmp27 = dependencyMap;
                let tmp28 = module_38;
                let tmp29 = outer1_13;
                let tmp30 = outer1_0;
                let tmp31 = outer1_13(outer1_0);
                let tmp32 = v0;
                let _Array = Array;
                let tmp33 = outer1_0;
                let tmp34 = v0(Array.from(outer1_0.values()));
                let num5 = 3;
                v0 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                let tmp46 = dependencyMap;
                let tmp47 = module_38;
                let c5 = 1;
                closure_1 = tmp17;
                let tmp48 = outer1_4;
                let tmp49 = closure_1;
                dependencyMap = outer1_4(closure_1, 2);
                let tmp50 = dependencyMap;
                module_38 = 5;
                let tmp51 = dependencyMap;
                let tmp52 = outer1_0;
                let tmp53 = outer1_2;
                if (32 === outer1_0(outer1_2[6]).ReferralOfferStatus.PENDING) {
                  let tmp18 = dependencyMap;
                  let tmp19 = module_38;
                  let tmp20 = set;
                  let tmp21 = outer1_3;
                  if (!set.has(outer1_3)) {
                    let tmp22 = dependencyMap;
                    let tmp23 = module_38;
                    let tmp24 = outer1_0;
                    let tmp25 = outer1_2;
                    let obj1 = outer1_0(outer1_2[7]);
                    let tmp26 = outer1_3;
                    c6 = 2;
                    let num4 = 1;
                    v0 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = obj1.getUser(outer1_3);
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
    const _getLocalReferrals = tmp;
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
      let closure_0 = arg0;
      let closure_1 = arg1;
      let c9 = 0;
      let c10 = 0;
      let c8 = 0;
      return (function*(arg0, arg1) {
        if (c10 === 2) {
          c10 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
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
                let noop = tmp2;
                let tmp67 = closure_1;
                let items;
                let module_38;
                let dependencyMap;
                noop = undefined;
                callback2 = undefined;
                let lib;
                let tmp68 = c8;
                if (!c8) {
                  let tmp41 = c10;
                  if (!c10) {
                    if (null != tmp66) {
                      let tmp69 = outer1_4;
                      if (0 !== outer1_4) {
                        c8 = 2;
                        let tmp70 = v0;
                        let tmp71 = v0(true);
                        items = 0;
                        let tmp72 = outer1_12;
                        items = [];
                        let tmp73 = items;
                        let tmp74 = items;
                        items = HermesBuiltin.arraySpread(outer1_12.values(), items);
                        let tmp75 = outer1_3;
                        dependencyMap = outer1_3;
                        let tmp76 = outer1_3;
                        dependencyMap = outer1_3;
                        module_38 = outer1_3[Symbol.iterator]();
                        let tmp42 = dependencyMap;
                        let tmp43 = module_38;
                        if (module_38 === undefined) {
                          let tmp54 = noop;
                          let tmp55 = callback2;
                          let tmp56 = callback;
                          let tmp57 = outer1_2;
                          let obj5 = callback(outer1_2[6]);
                          let tmp58 = callback;
                          let tmp59 = callback;
                          let tmp60 = closure_1;
                          v0 = 4;
                          let num7 = 1;
                          c10 = 1;
                          let obj1 = { value: null, done: false };
                          obj1[0] = obj5.fetchReferralEligibleUsers(callback, callback, closure_1);
                          return obj1;
                        } else {
                          let tmp77 = noop;
                          let tmp78 = callback2;
                          c8 = 3;
                          module_38 = tmp44;
                          let tmp79 = outer1_4;
                          let tmp80 = module_38;
                          dependencyMap = outer1_4(module_38, 2);
                          let tmp81 = dependencyMap;
                          noop = 5;
                          let tmp82 = dependencyMap;
                          let tmp83 = callback;
                          let tmp84 = outer1_2;
                          if (32 === callback(outer1_2[6]).ReferralOfferStatus.PENDING) {
                            let tmp45 = noop;
                            let tmp46 = callback2;
                            let tmp47 = set;
                            let tmp48 = outer1_5;
                            if (!set.has(outer1_5)) {
                              let tmp49 = noop;
                              let tmp50 = callback2;
                              let tmp51 = callback;
                              let tmp52 = outer1_2;
                              let obj2 = callback(outer1_2[7]);
                              let tmp53 = outer1_5;
                              v0 = 5;
                              let num6 = 1;
                              c10 = 1;
                              obj2 = { value: null, done: false };
                              obj2[0] = obj2.getUser(outer1_5);
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
                let tmp28 = module_38;
                module_38.return();
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
                  let tmp14 = noop;
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
                let tmp10 = module_38;
                module_38.return();
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
                let tmp6 = noop;
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
    const _getNextRows = tmp;
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
  module_38 = obj.useStateFromStores(items, () => _undefined.getRecipientStatus());
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