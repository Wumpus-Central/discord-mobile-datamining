// === Module 17978: useArchiveOrDelete ===

// Module 17978 (useArchiveOrDelete)
import intl13 from "intl" /* 1126 */;
import ToastUtilsAll from "ToastUtils" /* 4573 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15060 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c2, closure_12, dependencyMap, importAll;

let metroImportDefault;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
({ useEffect: metroRequire, useRef: metroImportDefault } = react);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, guildId, arg3) => {
  let archiveSubscriptionListing;
  let closure_0;
  let closure_3;
  let deleteSubscriptionListing;
  let error;
  let obj7;
  let obj9;
  let stringResult2;
  let stringResult3;
  let submitting;
  let submitting2;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp21;
  _require = arg0;
  let closure_1 = arg1;
  importAll = guildId;
  dependencyMap = arg3;
  const tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(41);
  let obj2 = require("GuildRoleSubscriptionsHooks");
  const subscriptionListing = obj2.useSubscriptionListing(guildId);
  let obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const removeEditStateId = obj3.useEditStateIds(arg1, arg0).removeEditStateId;
  let obj4 = require("GuildRoleSubscriptionsHooks");
  const deleteSubscriptionListing1 = obj4.useDeleteSubscriptionListing();
  ({ submitting, error, deleteSubscriptionListing } = deleteSubscriptionListing1);
  let obj5 = require("GuildRoleSubscriptionsHooks");
  const archiveSubscriptionListing1 = obj5.useArchiveSubscriptionListing();
  ({ submitting: submitting2, archiveSubscriptionListing } = archiveSubscriptionListing1);
  const error2 = archiveSubscriptionListing1.error;
  const ref = removeEditStateId(null);
  let obj6 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = stringResult3(obj6.useName(guildId), 1)[0];
  let archived;
  if (subscriptionListing != null) {
    archived = subscriptionListing.archived;
  }
  let closure_11 = tmp9;
  closure_12 = tmp10;
  if (error == null) {
    error = error2;
  }
  if (cResult[0] === true === archived) {
    if (cResult[1] === undefined === subscriptionListing) {
      let stringResult1;
      if (cResult[2] === first) {
        stringResult2 = cResult[3];
        stringResult3 = cResult[4];
        stringResult1 = cResult[5];
        tmp14 = cResult[6];
        tmp15 = cResult[7];
        tmp16 = cResult[8];
      }
      if (cResult[18] === tmp11) {
        if (cResult[19] === tmp12) {
          if (cResult[20] === tmp13) {
            if (cResult[21] === archiveSubscriptionListing) {
              if (cResult[22] === deleteSubscriptionListing) {
                if (cResult[23] === guildId) {
                  if (cResult[24] === arg1) {
                    if (cResult[25] === arg0) {
                      if (cResult[26] === true === archived) {
                        if (cResult[27] === undefined === subscriptionListing) {
                          if (cResult[28] === arg3) {
                            let tmp33;
                            let tmp36;
                            if (cResult[29] === removeEditStateId) {
                              tmp33 = cResult[30];
                            }
                            if (cResult[31] !== error) {
                              class F {
                                constructor() {
                                  let tmp2;
                                  if (ref.current !== error) {
                                    tmp2 = error;
                                  }
                                  if (null != tmp2) {
                                    ref.current = tmp2;
                                    const presentFailedToast = ToastUtilsAll.presentFailedToast;
                                    ToastUtilsAll;
                                    const intl = intl13.intl;
                                    presentFailedToast(intl.string(intl13.t.R0RpRX));
                                  }
                                }
                              }
                              const items = [error];
                              cResult[31] = error;
                              cResult[32] = F;
                              cResult[33] = items;
                              tmp36 = items;
                            } else {
                              class F {
                                constructor() {
                                  let tmp2;
                                  if (ref.current !== error) {
                                    tmp2 = error;
                                  }
                                  if (null != tmp2) {
                                    ref.current = tmp2;
                                    const presentFailedToast = ToastUtilsAll.presentFailedToast;
                                    ToastUtilsAll;
                                    const intl = intl13.intl;
                                    presentFailedToast(intl.string(intl13.t.R0RpRX));
                                  }
                                }
                              }
                              tmp36 = cResult[33];
                            }
                            stringResult1(F, tmp36);
                            if (cResult[34] === submitting2) {
                              class F {
                                constructor() {
                                  let tmp2;
                                  if (ref.current !== error) {
                                    tmp2 = error;
                                  }
                                  if (null != tmp2) {
                                    ref.current = tmp2;
                                    const presentFailedToast = ToastUtilsAll.presentFailedToast;
                                    ToastUtilsAll;
                                    const intl = intl13.intl;
                                    presentFailedToast(intl.string(intl13.t.R0RpRX));
                                  }
                                }
                              }
                            }
                            let obj8 = { headerText: tmp14, buttonText: tmp15, descriptionText: tmp16, handleArchiveOrDelete: tmp33, deleting: submitting, archiving: submitting2 };
                            cResult[34] = submitting2;
                            cResult[35] = tmp15;
                            cResult[36] = submitting;
                            cResult[37] = tmp16;
                            cResult[38] = tmp33;
                            cResult[39] = tmp14;
                            cResult[40] = obj8;
                            let tmp39 = obj8;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      _require = stringResult2(function*() {
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c2 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                const obj4 = { title, body, confirmText, confirmColor: tmp(closure_2_3[9]).ButtonColors.RED };
                const _confirm = closure_2_1(closure_2_3[8]).confirm;
                const tmp39 = closure_2_1(closure_2_3[8]);
                c1 = 1;
                c2 = 1;
                const obj5 = { value: _confirm(obj4), done: false };
                return obj5;
              }
            } else {
              if (1 === c1) {
                if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                } else if (value) {
                  if (closure_1_12) {
                    removeEditStateId(c2);
                    if (null != navigation) {
                      navigation.goBack();
                    }
                  } else {
                    closure_2_1(closure_2_3[10])(null != c1, "group listing id cannot be null");
                    if (closure_1_11) {
                      c1 = 3;
                      c2 = 1;
                      const obj7 = { value: deleteSubscriptionListing(tmp, c1, c2), done: false };
                      return obj7;
                    } else {
                      c1 = 2;
                      c2 = 1;
                      const obj8 = { value: archiveSubscriptionListing(tmp, c1, c2), done: false };
                      return obj8;
                    }
                  }
                }
              } else if (2 === c1) {
                if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj9 = { value, done: true };
                  return obj9;
                }
              } else if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj = { value, done: true };
                return obj;
              } else if (null != navigation) {
                navigation.goBack();
              }
              c2 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp30) {
            c2 = 3;
            throw tmp30;
          }
        }
      });
      function handleArchiveOrDelete() {
        return closure_0(...arguments);
      }
      cResult[18] = tmp11;
      cResult[19] = tmp12;
      cResult[20] = tmp13;
      cResult[21] = archiveSubscriptionListing;
      cResult[22] = deleteSubscriptionListing;
      cResult[23] = guildId;
      cResult[24] = arg1;
      cResult[25] = arg0;
      cResult[26] = true === archived;
      cResult[27] = undefined === subscriptionListing;
      cResult[28] = arg3;
      cResult[29] = removeEditStateId;
      cResult[30] = handleArchiveOrDelete;
      tmp33 = handleArchiveOrDelete;
    }
  }
  if (true !== archived) {
    class F {
      constructor() {
        let tmp2;
        if (ref.current !== error) {
          tmp2 = error;
        }
        if (null != tmp2) {
          ref.current = tmp2;
          const presentFailedToast = ToastUtilsAll.presentFailedToast;
          ToastUtilsAll;
          const intl = intl13.intl;
          presentFailedToast(intl.string(intl13.t.R0RpRX));
        }
      }
    }
    cResult[0] = true === archived;
    cResult[1] = undefined === subscriptionListing;
    cResult[2] = first;
    cResult[3] = tmp21;
    cResult[4] = tmp22;
    cResult[5] = tmp20;
    cResult[6] = tmp17;
    cResult[7] = tmp18;
    cResult[8] = tmp29;
    tmp16 = tmp29;
    tmp15 = tmp18;
    tmp14 = tmp17;
  }
  if (cResult[9] !== first) {
    class F {
      constructor() {
        let tmp2;
        if (ref.current !== error) {
          tmp2 = error;
        }
        if (null != tmp2) {
          ref.current = tmp2;
          const presentFailedToast = ToastUtilsAll.presentFailedToast;
          ToastUtilsAll;
          const intl = intl13.intl;
          presentFailedToast(intl.string(intl13.t.R0RpRX));
        }
      }
    }
    const obj10 = { tierName: first };
    const formatToPlainStringResult = obj7.formatToPlainString(tmp(1126).t.x2qwWL, obj10);
    cResult[9] = first;
    cResult[10] = formatToPlainStringResult;
  } else {
    class F {
      constructor() {
        let tmp2;
        if (ref.current !== error) {
          tmp2 = error;
        }
        if (null != tmp2) {
          ref.current = tmp2;
          const presentFailedToast = ToastUtilsAll.presentFailedToast;
          ToastUtilsAll;
          const intl = intl13.intl;
          presentFailedToast(intl.string(intl13.t.R0RpRX));
        }
      }
    }
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        let tmp2;
        if (ref.current !== error) {
          tmp2 = error;
        }
        if (null != tmp2) {
          ref.current = tmp2;
          const presentFailedToast = ToastUtilsAll.presentFailedToast;
          ToastUtilsAll;
          const intl = intl13.intl;
          presentFailedToast(intl.string(intl13.t.R0RpRX));
        }
      }
    }
    const stringResult = obj9.string(tmp(1126).t.GMtG6p);
    cResult[11] = stringResult;
  } else {
    class F {
      constructor() {
        let tmp2;
        if (ref.current !== error) {
          tmp2 = error;
        }
        if (null != tmp2) {
          ref.current = tmp2;
          const presentFailedToast = ToastUtilsAll.presentFailedToast;
          ToastUtilsAll;
          const intl = intl13.intl;
          presentFailedToast(intl.string(intl13.t.R0RpRX));
        }
      }
    }
  }
  if (cResult[12] !== (undefined === subscriptionListing)) {
    class F {
      constructor() {
        let tmp2;
        if (ref.current !== error) {
          tmp2 = error;
        }
        if (null != tmp2) {
          ref.current = tmp2;
          const presentFailedToast = ToastUtilsAll.presentFailedToast;
          ToastUtilsAll;
          const intl = intl13.intl;
          presentFailedToast(intl.string(intl13.t.R0RpRX));
        }
      }
    }
    const string = tmp28.string;
    const t = tmp(1126).t;
    if (undefined === subscriptionListing) {
      class F {
        constructor() {
          let tmp2;
          if (ref.current !== error) {
            tmp2 = error;
          }
          if (null != tmp2) {
            ref.current = tmp2;
            const presentFailedToast = ToastUtilsAll.presentFailedToast;
            ToastUtilsAll;
            const intl = intl13.intl;
            presentFailedToast(intl.string(intl13.t.R0RpRX));
          }
        }
      }
    } else {
      class F {
        constructor() {
          let tmp2;
          if (ref.current !== error) {
            tmp2 = error;
          }
          if (null != tmp2) {
            ref.current = tmp2;
            const presentFailedToast = ToastUtilsAll.presentFailedToast;
            ToastUtilsAll;
            const intl = intl13.intl;
            presentFailedToast(intl.string(intl13.t.R0RpRX));
          }
        }
      }
    }
    cResult[12] = undefined === subscriptionListing;
    cResult[13] = tmp29;
  } else {
    class F {
      constructor() {
        let tmp2;
        if (ref.current !== error) {
          tmp2 = error;
        }
        if (null != tmp2) {
          ref.current = tmp2;
          const presentFailedToast = ToastUtilsAll.presentFailedToast;
          ToastUtilsAll;
          const intl = intl13.intl;
          presentFailedToast(intl.string(intl13.t.R0RpRX));
        }
      }
    }
  }
  let intl = tmp(1126).intl;
  stringResult1 = intl.string(tmp(1126).t["4H6RLl"]);
  const intl2 = tmp(1126).intl;
  stringResult2 = intl2.string(tmp(1126).t.uG6b1w);
  const intl3 = tmp(1126).intl;
  stringResult3 = intl3.string(tmp(1126).t.JoCdPC);
  tmp21 = stringResult2;
}) : ((arg0, arg1, guildId, arg3) => {
  let closure_0;
  let closure_3;
  let closure_5;
  let closure_8;
  let error;
  let error2;
  let stringResult3;
  let submitting;
  let submitting2;
  _require = arg0;
  let closure_1 = arg1;
  importAll = guildId;
  dependencyMap = arg3;
  let obj = function _handleArchiveOrDelete2() {
    let body;
    let confirmText;
    let title;
    obj = _asyncToGenerator(async () => {
      let v2;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === v2) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const obj4 = { title, body, confirmText, confirmColor: tmp(closure_1_3[9]).ButtonColors.RED };
              const _confirm = v2(closure_1_3[8]).confirm;
              const tmp39 = v2(closure_1_3[8]);
              v2 = 1;
              c2 = 1;
              const obj5 = { value: _confirm(obj4), done: false };
              return obj5;
            }
          } else {
            if (1 === v2) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else if (value) {
                if (closure_128_12) {
                  closure_128_7(closure_128_2);
                  if (null != closure_128_3) {
                    closure_128_3.goBack();
                  }
                } else {
                  v2(closure_1_3[10])(null != closure_128_1, "group listing id cannot be null");
                  if (closure_128_11) {
                    v2 = 3;
                    c2 = 1;
                    const obj7 = { value: closure_128_8(closure_128_0, closure_128_1, closure_128_2), done: false };
                    return obj7;
                  } else {
                    v2 = 2;
                    c2 = 1;
                    const obj8 = { value: closure_128_9(closure_128_0, closure_128_1, closure_128_2), done: false };
                    return obj8;
                  }
                }
              }
            } else if (2 === v2) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj9 = { value, done: true };
                return obj9;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            } else if (null != closure_128_3) {
              closure_128_3.goBack();
            }
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp30) {
          c2 = 3;
          throw tmp30;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = _require;
  let tmp2 = dependencyMap;
  obj = require("GuildRoleSubscriptionsHooks");
  const subscriptionListing = obj.useSubscriptionListing(guildId);
  let obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const removeEditStateId = obj2.useEditStateIds(arg1, arg0).removeEditStateId;
  let obj3 = require("GuildRoleSubscriptionsHooks");
  const deleteSubscriptionListing = obj3.useDeleteSubscriptionListing();
  ({ error, deleteSubscriptionListing: closure_8, submitting } = deleteSubscriptionListing);
  let obj4 = require("GuildRoleSubscriptionsHooks");
  let archiveSubscriptionListing = obj4.useArchiveSubscriptionListing();
  archiveSubscriptionListing = archiveSubscriptionListing.archiveSubscriptionListing;
  ({ submitting: submitting2, error: error2 } = archiveSubscriptionListing);
  const ref = removeEditStateId(null);
  let obj5 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj5.useName(guildId), 1)[0];
  let archived;
  if (subscriptionListing != null) {
    archived = subscriptionListing.archived;
  }
  let closure_11 = tmp8;
  closure_12 = tmp9;
  if (error == null) {
    error = error2;
  }
  if (true !== archived) {
    let formatToPlainStringResult;
    let stringResult;
    let stringResult1;
    let closure_6;
    if (undefined !== subscriptionListing) {
      let intl = tmp(1126).intl;
      let obj6 = { tierName: first };
      formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t.OuuIOY, obj6);
      const intl2 = tmp(1126).intl;
      stringResult = intl2.string(tmp(1126).t.RL0wjm);
      const intl3 = tmp(1126).intl;
      stringResult1 = intl3.string(tmp(1126).t["5/Jeg2"]);
      const intl4 = tmp(1126).intl;
      let closure_4 = intl4.string(tmp(1126).t.N5AIuE);
      const intl5 = tmp(1126).intl;
      _slicedToArray = intl5.string(tmp(1126).t.TEKiiP);
      const intl6 = tmp(1126).intl;
      closure_6 = intl6.string(tmp(1126).t["170XOL"]);
    }
    const items = [error];
    closure_6(() => {
      let tmp2;
      if (ref.current !== error) {
        tmp2 = error;
      }
      if (null != tmp2) {
        ref.current = tmp2;
        const presentFailedToast = ToastUtilsAll.presentFailedToast;
        ToastUtilsAll;
        const intl = intl13.intl;
        presentFailedToast(intl.string(intl13.t.R0RpRX));
      }
    }, items);
    let obj7 = {
      headerText: formatToPlainStringResult,
      buttonText: stringResult,
      descriptionText: stringResult1,
      handleArchiveOrDelete() {
          return obj(...arguments);
        },
      deleting: submitting,
      archiving: submitting2
    };
    return obj7;
  }
  const intl7 = tmp(1126).intl;
  const formatToPlainStringResult1 = intl7.formatToPlainString(tmp(1126).t.x2qwWL, { tierName: first });
  const intl8 = tmp(1126).intl;
  const stringResult2 = intl8.string(tmp(1126).t.GMtG6p);
  const intl9 = tmp(1126).intl;
  const string = intl9.string;
  const t = tmp(1126).t;
  if (undefined === subscriptionListing) {
    stringResult3 = string(t.DHWKJS);
  } else {
    stringResult3 = string(t.Y4KjUN);
  }
  const intl10 = tmp(1126).intl;
  closure_4 = intl10.string(tmp(1126).t["4H6RLl"]);
  const intl11 = tmp(1126).intl;
  _slicedToArray = intl11.string(tmp(1126).t.uG6b1w);
  const intl12 = tmp(1126).intl;
  closure_6 = intl12.string(tmp(1126).t.JoCdPC);
  stringResult1 = stringResult3;
  stringResult = stringResult2;
  formatToPlainStringResult = formatToPlainStringResult1;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/useArchiveOrDelete.tsx");

export default tmp3;