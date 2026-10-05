// === Module 13248: useReferralProgramEligibleUsers ===

// Module 13248 (useReferralProgramEligibleUsers)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ReferralTrialStore from "ReferralTrialStore" /* 6961 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c10, c7, c9, map, set, users;

let react = react_mod;
let result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useReferralProgramEligibleUsers.tsx");

export const useReferralProgramEligibleUsers = function useReferralProgramEligibleUsers(searchQuery) {
  let _undefined;
  let c5;
  let c6;
  let limit;
  searchQuery = searchQuery.searchQuery;
  ({ selectedUsers: importDefault, limit } = searchQuery);
  react = undefined;
  c6 = undefined;
  let obj = function _getLocalReferrals() {
    obj = _asyncToGenerator(async function() {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        while (true) {
          let closure_4;
          let closure_0;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              let obj4 = { value, done: true };
              return obj4;
            } else {
              let c1;
              let closure_2;
              closure_3 = undefined;
              closure_4 = undefined;
              let _Map = Map;
              let self = this;
              let self2 = this;
              map = new Map();
              let closure_1 = closure_2_3;
              closure_0 = closure_2_3[Symbol.iterator]();
              if (closure_0 === undefined) {
                let tmp31 = closure_131_13(map);
                let _Array = Array;
                let tmp34 = closure_131_7(Array.from(map.values()));
                c7 = 3;
                return { value: "IconComponent", done: null };
              } else {
                c5 = 1;
                c1 = tmp17;
                closure_2 = stateFromStores(c1, 2);
                closure_3 = closure_2[0];
                if (closure_2[1] === closure_0(closure_2[6]).ReferralOfferStatus.PENDING) {
                  if (!closure_131_12.has(closure_3)) {
                    let obj2 = closure_0(closure_2[7]);
                    c6 = 2;
                    c7 = 1;
                    let obj5 = { value: obj2.getUser(closure_3), done: false };
                    return obj5;
                  }
                }
              }
            }
          } else if (1 === tmp5) {
            c5 = 0;
            closure_0.return();
            throw stateFromStores;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_0.return();
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = value;
            let result = map.set(closure_4.id, closure_4);
          }
          c5 = 0;
        }
      }
    });
    return obj(...arguments);
  };
  function getNextRows(c5, limit) {
    return obj(...arguments);
  }
  obj = function _getNextRows() {
    obj = _asyncToGenerator(async (arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      if (c10 === 2) {
        c10 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        while (true) {
          let items;
          let closure_6;
          let nextIndex;
          c10 = 2;
          let tmp6 = c9;
          if (0 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              let obj4 = { value, done: true };
              return obj4;
            } else {
              items = undefined;
              let c3;
              let closure_4;
              let closure_5;
              closure_6 = undefined;
              nextIndex = undefined;
              if (!first1) {
                if (!first2) {
                  if (null != tmp66) {
                    if (0 !== stateFromStores) {
                      let c8 = 2;
                      let tmp71 = closure_2_9(true);
                      let closure_2 = 0;
                      items = [];
                      closure_2 = HermesBuiltin.arraySpread(items, first3.values(), closure_2);
                      closure_4 = closure_2_3;
                      closure_3 = closure_2_3[Symbol.iterator]();
                      if (closure_3 === undefined) {
                        let obj5 = closure_0(closure_2[6]);
                        c9 = 4;
                        c10 = 1;
                        let obj6 = { value: obj5.fetchReferralEligibleUsers(closure_0, closure_134_0, closure_1), done: false };
                        return obj6;
                      } else {
                        c8 = 3;
                        c3 = tmp45;
                        closure_4 = closure_4(c3, 2);
                        closure_5 = closure_4[0];
                        if (closure_4[1] === closure_0(closure_2[6]).ReferralOfferStatus.PENDING) {
                          if (!closure_134_12.has(closure_5)) {
                            obj3 = closure_0(closure_2[7]);
                            c9 = 5;
                            c10 = 1;
                            let obj7 = { value: obj3.getUser(closure_5), done: false };
                            return obj7;
                          }
                        }
                        c8 = 2;
                      }
                    }
                  }
                }
              }
            }
          } else if (1 === tmp6) {
            c8 = 0;
            let tmp41 = closure_134_9(false);
            throw closure_1_7;
          } else {
            if (2 === tmp6) {
              c8 = 1;
              let tmp33 = closure_134_11(true);
            } else if (3 === tmp6) {
              c8 = 2;
              closure_3.return();
              throw closure_1_7;
            } else if (4 === tmp6) {
              if (arg0 === 1) {
                c10 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 0;
                let tmp26 = closure_134_9(false);
                c10 = 3;
                let obj8 = { value, done: true };
                return obj8;
              } else {
                nextIndex = value;
                let tmp18 = closure_134_7(function(arg0) {
                  let items1;
                  closure_2 = closure_2.filter((id) => !set.has(id.id));
                  const self = this;
                  set = new Set(closure_2.map((id) => id.id));
                  users = users.users;
                  const found = users.filter((id) => {
                    const hasItem = set.has(id.id);
                    const tmp2 = !hasItem && !set.has(id.id);
                    return tmp2;
                  });
                  if (0 === closure_1_0) {
                    const items = [];
                    const arraySpreadResult = HermesBuiltin.arraySpread(items, set.values(), 0);
                    HermesBuiltin.arraySpread(items, found, HermesBuiltin.arraySpread(items, closure_2.values(), arraySpreadResult));
                    items1 = items;
                  } else {
                    items1 = [];
                    HermesBuiltin.arraySpread(items1, found, HermesBuiltin.arraySpread(items1, arg0, 0));
                  }
                  return items1;
                });
                let tmp20 = closure_134_13((arg0) => {
                  map = new Map(arg0);
                  for (const item10012 of closure_2) {
                    let result = map.set(item10012.id, item10012);
                    continue;
                  }
                  return map;
                });
                let tmp23 = closure_134_6(nextIndex.nextIndex);
                c8 = 1;
              }
            } else if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              closure_3.return();
              c8 = 0;
              let tmp14 = closure_134_9(false);
              c10 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_6 = value;
              let arr = items.push(closure_6);
            }
            c8 = 0;
            let tmp36 = closure_134_9(false);
          }
          c10 = 3;
          return { value: "IconComponent", done: null };
        }
      }
    });
    return obj(...arguments);
  };
  obj = searchQuery(limit[4]);
  let items = [c6];
  let closure_3 = obj.useStateFromStores(items, () => c6.getRecipientStatus());
  let obj2 = searchQuery(limit[4]);
  let items1 = [c6];
  const stateFromStores = obj2.useStateFromStores(items1, () => c6.getReferralsRemaining());
  let tmp2 = stateFromStores(react.useState(0), 2);
  [c5, c6] = tmp2;
  const tmp3 = stateFromStores(react.useState([]), 2);
  let closure_7 = tmp3[1];
  const first = tmp3[0];
  const tmp5 = stateFromStores(react.useState(false), 2);
  const first1 = tmp5[0];
  let closure_9 = tmp5[1];
  let tmp7 = stateFromStores(react.useState(false), 2);
  const first2 = tmp7[0];
  let closure_11 = tmp7[1];
  const useState = react.useState;
  map = new Map();
  const tmp10 = stateFromStores(useState(map), 2);
  const first3 = tmp10[0];
  let closure_13 = tmp10[1];
  let tmp12 = require("module_38")(null != stateFromStores, "Referrals remaining should not be null");
  let obj3 = {
    limit,
    getNextRows,
    getLocalReferrals() {
      return obj(...arguments);
    }
  };
  let closure_18 = react.useRef(obj3);
  const effect = react.useEffect(() => {
    closure_18.current = obj3;
  });
  const items2 = [searchQuery, stateFromStores];
  const effect1 = react.useEffect(() => {
    if (stateFromStores > 0) {
      tmp(0, tmp2);
    } else {
      tmp3();
    }
  }, items2);
  let obj4 = {
    eligibleUsers: first,
    fetchUsers() {
      return getNextRows(c5, limit);
    },
    hasError: first2,
    isFetching: first1,
    resendUsers: first3
  };
  return obj4;
};