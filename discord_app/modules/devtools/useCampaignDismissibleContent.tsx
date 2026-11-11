// === Module 18236: useCampaignDismissibleContent ===

// Module 18236 (useCampaignDismissibleContent)
import CampaignDevToolsUtils from "CampaignDevToolsUtils" /* 9604 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import UserStore from "UserStore" /* 1385 */;

const require = globalThis.__r;

require = fn;
let closure_7 = async function _resetCampaignDismissibleContent(arg0) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_1 = tmp4;
          currentUser = currentUser.getCurrentUser();
          let isStaffResult;
          if (currentUser != null) {
            isStaffResult = currentUser.isStaff();
          }
          if (isStaffResult) {
            if (obj3.isSnowflakeBoundDismissibleContent(closure_0)) {
              c2 = 1;
              c3 = 1;
              const obj6 = { value: require("UserSettingsProtoActionCreators").removeDismissedRecurringContent(closure_0), done: false };
              return obj6;
            }
            obj3 = require("DismissibleContentTypes");
          }
          const _Error = Error;
          const error = new Error("Staff access is required to reset campaign dismissals.");
          throw error;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        const result = closure_129_0(closure_129_1[7]).overrideDCFLastDCDismissed(null);
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp20) {
      c3 = tmp;
      throw tmp20;
    }
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/useCampaignDismissibleContent.tsx");

export default function useCampaignDismissibleContent(arg0, arg1) {
  _require = arg0;
  function reset() {
    const self = this;
    const apply = closure_7.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  closure_7 = async function _reset(arg0) {
    dependencyMap = arg0;
    c11 = 0;
    c12 = 0;
    c9 = 0;
    return (async (arg0) => {
      if (c12 === 2) {
        c12 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp9 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c12 = 2;
          if (0 === c11) {
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 === 2) {
              c12 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              closure_8 = tmp4;
              closure_7 = tmp7;
              closure_135_0 = undefined;
              closure_135_1 = undefined;
              closure_135_2 = undefined;
              closure_135_3 = undefined;
              const sum = ref.current + 1;
              ref.current = sum;
              closure_135_0 = sum;
              closure_2_3(null);
              closure_2_2(true);
              c9 = 2;
              closure_135_2 = async function _loop(arg0) {
                if (c1 === 2) {
                  c1 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "HermesInternal", done: null };
                  }
                } else {
                  try {
                    c1 = 2;
                    if (0 === c2) {
                      if (arg0 === 1) {
                        c1 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c1 = 3;
                        const obj3 = { value, done: true };
                        return obj3;
                      } else if (dependencyMap !== ref.current) {
                        c1 = 3;
                        const obj4 = { value: { v: "Array" }, done: true };
                        return obj4;
                      } else if (next.some((content) => content.content === closure_0)) {
                        c2 = 1;
                        c1 = 1;
                        const obj5 = {
                          value: (function resetCampaignDismissibleContent() {
                                    const self = this;
                                    const apply = closure_1_7.apply;
                                    if (typeof apply === "unknown") {
                                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                    } else {
                                      applyArgumentsResult = apply(self, arguments);
                                    }
                                    return applyArgumentsResult;
                                  })(tmp11),
                          done: false
                        };
                        return obj5;
                      }
                    } else if (arg0 === 1) {
                      c1 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c1 = 3;
                      const obj = { value, done: true };
                      return obj;
                    }
                    c1 = 3;
                    return { value: "HermesInternal", done: null };
                  } catch (tmp6) {
                    c1 = tmp;
                    throw tmp6;
                  }
                }
              };
              closure_2 = dependencyMap;
              closure_2 = dependencyMap;
              closure_1 = dependencyMap[Symbol.iterator]();
              if (closure_1 === undefined) {
                c9 = 1;
              } else {
                c9 = 3;
                closure_135_3 = tmp59;
                iter4 = closure_135_2(closure_135_3)[tmp90.iterator]();
                HermesBuiltin.ensureObject("iterator is not an object");
                next = iter4.next;
                closure_3 = undefined;
                let tmp22;
                const iter2 = next(tmp22);
                HermesBuiltin.ensureObject("iterator.next() did not return an object");
                iter = iter2;
                if (iter2.done) {
                  value = iter.value;
                  closure_135_1 = value;
                  if (value) {
                    c9 = 2;
                    closure_1.return();
                    c9 = 0;
                    if (closure_135_0 === closure_136_4.current) {
                      closure_136_2(false);
                    }
                    c12 = 3;
                    let obj4 = { value: closure_135_1.v, done: true };
                    return obj4;
                  } else {
                    c9 = 2;
                  }
                } else {
                  c11 = 4;
                  c12 = 1;
                  return iter2;
                }
                const tmp110 = closure_135_2(closure_135_3);
              }
            }
          } else if (1 === tmp10) {
            c9 = 0;
            if (closure_135_0 === closure_136_4.current) {
              closure_136_2(false);
            }
            throw closure_10;
          } else if (2 === tmp10) {
            c9 = 1;
            if (closure_135_0 === closure_136_4.current) {
              closure_136_3("Could not reset dismissed content. Try again.");
            }
          } else if (3 === tmp10) {
            c9 = 2;
            closure_1.return();
            throw closure_10;
          } else if (4 === tmp10) {
            c9 = 4;
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else {
              closure_3 = value;
              if (arg0 === 2) {
                closure_3 = value;
                c9 = 3;
                const method = HermesBuiltin.getMethod("return");
                if (method === undefined) {
                  c9 = 2;
                  closure_1.return();
                  c9 = 0;
                  if (closure_135_0 === closure_136_4.current) {
                    closure_136_2(false);
                  }
                  c12 = 3;
                  let obj5 = { value, done: true };
                  return obj5;
                } else {
                  const iter3 = method(closure_3);
                  HermesBuiltin.ensureObject("iterator.return() did not return an object");
                  if (iter3.done) {
                    c9 = 2;
                    closure_1.return();
                    c9 = 0;
                    if (closure_135_0 === closure_136_4.current) {
                      closure_136_2(false);
                    }
                    c12 = 3;
                    let obj = { value: iter3.value, done: true };
                    return obj;
                  } else {
                    c11 = 4;
                    c12 = 1;
                    return iter3;
                  }
                }
              } else {
                c9 = 3;
                tmp22 = value;
              }
            }
          } else {
            c9 = 3;
            const method1 = HermesBuiltin.getMethod("throw");
            if (method1 === undefined) {
              const method2 = HermesBuiltin.getMethod("return");
              if (method2 !== undefined) {
                HermesBuiltin.ensureObject("iterator.return() did not return an object");
              }
              throw new TypeError("yield* delegate must have a .throw() method");
            } else {
              iter = method1(tmp12);
              HermesBuiltin.ensureObject("iterator.throw() did not return an object");
              if (!iter.done) {
                c11 = 4;
                c12 = 1;
                return iter;
              }
            }
            tmp12 = closure_10;
          }
          c9 = 0;
          if (closure_135_0 === closure_136_4.current) {
            closure_136_2(false);
          }
          c12 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp83) {
          closure_10 = tmp83;
          if (tmp5 === c9) {
            c12 = tmp3;
            throw tmp83;
          } else if (tmp2 === tmp85) {
            c11 = tmp2;
          } else if (tmp === tmp85) {
            c11 = tmp;
          } else if (tmp3 === tmp85) {
            c11 = tmp3;
          } else {
            c11 = tmp6;
          }
        }
      }
    })();
  };
  items = [UserSettingsProtoStore];
  dependencyMap = require("initialize").useStateFromStores(items, () => flatMapResult.settings.userContent);
  const tmp = _slicedToArray(noop.useState(false), 2);
  _slicedToArray = tmp[1];
  const tmp2 = _slicedToArray(noop.useState(null), 2);
  closure_3 = tmp2[1];
  noop = noop.useRef(0);
  const items1 = [arg0];
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_2(false);
    closure_3(null);
    return () => {
      ref.current = ref.current + 1;
    };
  }, items1);
  let obj = require("initialize");
  const result = require("CampaignDevToolsUtils").campaignDismissibleContents(arg1);
  const flatMapResult = result.flatMap((content) => {
    content = content.content;
    if (null != closure_0) {
      if (obj.isSnowflakeBoundDismissibleContent(content)) {
        const obj2 = { content, label: tmp, status: null };
        let tmp6;
        if (closure_1 != null) {
          tmp6 = closure_1.recurringDismissibleContentStates[content];
        }
        obj2.status = CampaignDevToolsUtils.campaignPromotionDismissalStatus(tmp2, tmp6);
        items = [obj2];
        const tmp3Result = CampaignDevToolsUtils;
      }
      return [];
    }
  });
  UserSettingsProtoStore = flatMapResult;
  return {
    contents: flatMapResult,
    resetting: tmp[0],
    error: tmp2[0],
    resetOne(content) {
      items = [content];
      return reset(items);
    },
    resetAll() {
      return reset(flatMapResult.map((content) => content.content));
    }
  };
};