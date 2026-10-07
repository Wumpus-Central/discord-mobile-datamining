// discord_app/modules/guild_role_subscriptions/native/guild_settings/useArchiveOrDelete.tsx
import util from "../../../../intl/index.native.tsx";
import ToastUtilsAll from "../../../toast/native/ToastUtils.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";

const require = globalThis.__r;

require = fn;
const noop = fn(19);
({ useEffect: metroRequire, useRef: closure_7 } = noop);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/useArchiveOrDelete.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, guildId, arg3) => {
      _require = arg0;
      closure_1 = arg1;
      importAll = guildId;
      dependencyMap = arg3;
      let stringResult3 = dependencyMap;
      const cResult = require("c").c(41);
      let obj = require("c");
      const subscriptionListing = require("GuildRoleSubscriptionsHooks").useSubscriptionListing(guildId);
      let obj2 = require("GuildRoleSubscriptionsHooks");
      const removeEditStateId = GuildRoleSubscriptionListingEditStateUtilsAll.useEditStateIds(
        arg1,
        arg0,
      ).removeEditStateId;
      const deleteSubscriptionListing1 = require("GuildRoleSubscriptionsHooks").useDeleteSubscriptionListing();
      ({ submitting, error, deleteSubscriptionListing } = deleteSubscriptionListing1);
      let obj4 = require("GuildRoleSubscriptionsHooks");
      const archiveSubscriptionListing1 = require("GuildRoleSubscriptionsHooks").useArchiveSubscriptionListing();
      ({ submitting: submitting2, archiveSubscriptionListing } = archiveSubscriptionListing1);
      removeEditStateId(null);
      let obj5 = require("GuildRoleSubscriptionsHooks");
      const first = stringResult3(GuildRoleSubscriptionListingEditStateUtilsAll.useName(guildId), 1)[0];
      let archived;
      if (subscriptionListing != null) {
        archived = subscriptionListing.archived;
      }
      closure_11 = tmp9;
      closure_12 = tmp10;
      if (error == null) {
        error = archiveSubscriptionListing1.error;
      }
      if ((cResult[0] === true) === archived) {
        if (cResult[1] === tmp10) {
          if (cResult[2] === first) {
            let stringResult2 = tmp11;
            stringResult3 = tmp12;
            let stringResult1 = tmp13;
            if (cResult[18] === cResult[3]) {
              if (cResult[19] === tmp12) {
                if (cResult[20] === tmp13) {
                  if (cResult[21] === archiveSubscriptionListing) {
                    if (cResult[22] === deleteSubscriptionListing) {
                      if (cResult[23] === guildId) {
                        if (cResult[24] === arg1) {
                          if (cResult[25] === arg0) {
                            if (cResult[26] === tmp9) {
                              if (cResult[27] === tmp10) {
                                if (cResult[28] === arg3) {
                                  if (cResult[29] === removeEditStateId) {
                                    let tmp31 = cResult[30];
                                  }
                                  if (cResult[31] !== error) {
                                    class F {
                                      constructor() {
                                        tmp2 = undefined;
                                        tmp = closure_10;
                                        if (closure_10.current !== error) {
                                          tmp2 = error;
                                        }
                                        if (null != tmp2) {
                                          tmp.current = tmp2;
                                          tmp3 = closure_2;
                                          tmp4 = closure_3;
                                          obj = closure_2(closure_3[11]);
                                          tmp5 = closure_0;
                                          intl = closure_0(closure_3[7]).intl;
                                          presentFailedToastResult = obj.presentFailedToast(
                                            intl.string(closure_0(closure_3[7]).t.R0RpRX),
                                          );
                                        }
                                        return;
                                      }
                                    }
                                    const items = [error];
                                    cResult[31] = error;
                                    cResult[32] = F;
                                    cResult[33] = items;
                                    let tmp34 = items;
                                  } else {
                                    class F {
                                      constructor() {
                                        tmp2 = undefined;
                                        tmp = closure_10;
                                        if (closure_10.current !== error) {
                                          tmp2 = error;
                                        }
                                        if (null != tmp2) {
                                          tmp.current = tmp2;
                                          tmp3 = closure_2;
                                          tmp4 = closure_3;
                                          obj = closure_2(closure_3[11]);
                                          tmp5 = closure_0;
                                          intl = closure_0(closure_3[7]).intl;
                                          presentFailedToastResult = obj.presentFailedToast(
                                            intl.string(closure_0(closure_3[7]).t.R0RpRX),
                                          );
                                        }
                                        return;
                                      }
                                    }
                                    tmp34 = cResult[33];
                                  }
                                  stringResult1(F, tmp34);
                                  if (cResult[34] === submitting2) {
                                    class F {
                                      constructor() {
                                        tmp2 = undefined;
                                        tmp = closure_10;
                                        if (closure_10.current !== error) {
                                          tmp2 = error;
                                        }
                                        if (null != tmp2) {
                                          tmp.current = tmp2;
                                          tmp3 = closure_2;
                                          tmp4 = closure_3;
                                          obj = closure_2(closure_3[11]);
                                          tmp5 = closure_0;
                                          intl = closure_0(closure_3[7]).intl;
                                          presentFailedToastResult = obj.presentFailedToast(
                                            intl.string(closure_0(closure_3[7]).t.R0RpRX),
                                          );
                                        }
                                        return;
                                      }
                                    }
                                  }
                                  let obj8 = {
                                    headerText: tmp14,
                                    buttonText: tmp15,
                                    descriptionText: tmp16,
                                    handleArchiveOrDelete: tmp31,
                                    deleting: submitting,
                                    archiving: submitting2,
                                  };
                                  cResult[34] = submitting2;
                                  cResult[35] = tmp15;
                                  cResult[36] = submitting;
                                  cResult[37] = tmp16;
                                  cResult[38] = tmp31;
                                  cResult[39] = tmp14;
                                  cResult[40] = obj8;
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
            _require = stringResult2(function* () {
              if (c2 === 2) {
                c2 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp4 === 3) {
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
                      const obj4 = { title, body, confirmText, confirmColor: tmp2(navigation[9]).ButtonColors.RED };
                      c1 = 1;
                      c2 = 1;
                      const obj5 = { value: v2(navigation[8]).confirm(obj4), done: false };
                      return obj5;
                    }
                  } else {
                    if (1 === tmp5) {
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
                          v2(navigation[10])(null != c1, "group listing id cannot be null");
                          if (closure_1_11) {
                            c1 = 3;
                            c2 = 1;
                            const obj7 = { value: deleteSubscriptionListing(tmp2, tmp14, c2), done: false };
                            return obj7;
                          } else {
                            c1 = 2;
                            c2 = 1;
                            const obj8 = { value: archiveSubscriptionListing(tmp2, tmp14, c2), done: false };
                            return obj8;
                          }
                        }
                      }
                    } else {
                      if (2 === tmp5) {
                        if (arg0 === 1) {
                          c2 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c2 = 3;
                          const obj10 = { value, done: true };
                          return obj10;
                        }
                      } else if (arg0 === 1) {
                        c2 = 3;
                        throw value;
                      } else if (arg0 !== 2) {
                        if (null != navigation) {
                          navigation.goBack();
                        }
                      }
                      c2 = 3;
                      const obj = { value, done: true };
                      return obj;
                    }
                    c2 = 3;
                  }
                } catch (tmp31) {
                  c2 = tmp;
                  throw tmp31;
                }
              }
            });
            function handleArchiveOrDelete() {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            }
            cResult[18] = cResult[3];
            cResult[19] = cResult[4];
            cResult[20] = cResult[5];
            cResult[21] = archiveSubscriptionListing;
            cResult[22] = deleteSubscriptionListing;
            cResult[23] = guildId;
            cResult[24] = arg1;
            cResult[25] = arg0;
            cResult[26] = tmp9;
            cResult[27] = tmp10;
            cResult[28] = arg3;
            cResult[29] = removeEditStateId;
            cResult[30] = handleArchiveOrDelete;
            tmp31 = handleArchiveOrDelete;
          }
        }
      }
      if (true !== archived) {
        class F {
          constructor() {
            tmp2 = undefined;
            tmp = closure_10;
            if (closure_10.current !== error) {
              tmp2 = error;
            }
            if (null != tmp2) {
              tmp.current = tmp2;
              tmp3 = closure_2;
              tmp4 = closure_3;
              obj = closure_2(closure_3[11]);
              tmp5 = closure_0;
              intl = closure_0(closure_3[7]).intl;
              presentFailedToastResult = obj.presentFailedToast(intl.string(closure_0(closure_3[7]).t.R0RpRX));
            }
            return;
          }
        }
      }
      if (cResult[9] !== first) {
        class F {
          constructor() {
            tmp2 = undefined;
            tmp = closure_10;
            if (closure_10.current !== error) {
              tmp2 = error;
            }
            if (null != tmp2) {
              tmp.current = tmp2;
              tmp3 = closure_2;
              tmp4 = closure_3;
              obj = closure_2(closure_3[11]);
              tmp5 = closure_0;
              intl = closure_0(closure_3[7]).intl;
              presentFailedToastResult = obj.presentFailedToast(intl.string(closure_0(closure_3[7]).t.R0RpRX));
            }
            return;
          }
        }
        let obj10 = { tierName: first };
        const formatToPlainStringResult = obj7.formatToPlainString(tmp(1126).t.x2qwWL, obj10);
        cResult[9] = first;
        cResult[10] = formatToPlainStringResult;
      } else {
        class F {
          constructor() {
            tmp2 = undefined;
            tmp = closure_10;
            if (closure_10.current !== error) {
              tmp2 = error;
            }
            if (null != tmp2) {
              tmp.current = tmp2;
              tmp3 = closure_2;
              tmp4 = closure_3;
              obj = closure_2(closure_3[11]);
              tmp5 = closure_0;
              intl = closure_0(closure_3[7]).intl;
              presentFailedToastResult = obj.presentFailedToast(intl.string(closure_0(closure_3[7]).t.R0RpRX));
            }
            return;
          }
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            tmp2 = undefined;
            tmp = closure_10;
            if (closure_10.current !== error) {
              tmp2 = error;
            }
            if (null != tmp2) {
              tmp.current = tmp2;
              tmp3 = closure_2;
              tmp4 = closure_3;
              obj = closure_2(closure_3[11]);
              tmp5 = closure_0;
              intl = closure_0(closure_3[7]).intl;
              presentFailedToastResult = obj.presentFailedToast(intl.string(closure_0(closure_3[7]).t.R0RpRX));
            }
            return;
          }
        }
        const stringResult = obj9.string(tmp(1126).t.GMtG6p);
        cResult[11] = stringResult;
      } else {
        class F {
          constructor() {
            tmp2 = undefined;
            tmp = closure_10;
            if (closure_10.current !== error) {
              tmp2 = error;
            }
            if (null != tmp2) {
              tmp.current = tmp2;
              tmp3 = closure_2;
              tmp4 = closure_3;
              obj = closure_2(closure_3[11]);
              tmp5 = closure_0;
              intl = closure_0(closure_3[7]).intl;
              presentFailedToastResult = obj.presentFailedToast(intl.string(closure_0(closure_3[7]).t.R0RpRX));
            }
            return;
          }
        }
      }
      if ((cResult[12] === undefined) === subscriptionListing) {
        class F {
          constructor() {
            tmp2 = undefined;
            tmp = closure_10;
            if (closure_10.current !== error) {
              tmp2 = error;
            }
            if (null != tmp2) {
              tmp.current = tmp2;
              tmp3 = closure_2;
              tmp4 = closure_3;
              obj = closure_2(closure_3[11]);
              tmp5 = closure_0;
              intl = closure_0(closure_3[7]).intl;
              presentFailedToastResult = obj.presentFailedToast(intl.string(closure_0(closure_3[7]).t.R0RpRX));
            }
            return;
          }
        }
        const intl2 = tmp(1126).intl;
        stringResult1 = intl2.string(tmp(1126).t["4H6RLl"]);
        const intl3 = tmp(1126).intl;
        stringResult2 = intl3.string(tmp(1126).t.uG6b1w);
        const intl4 = tmp(1126).intl;
        stringResult3 = intl4.string(tmp(1126).t.JoCdPC);
      }
      let intl = tmp(1126).intl;
      if (undefined === subscriptionListing) {
        class F {
          constructor() {
            tmp2 = undefined;
            tmp = closure_10;
            if (closure_10.current !== error) {
              tmp2 = error;
            }
            if (null != tmp2) {
              tmp.current = tmp2;
              tmp3 = closure_2;
              tmp4 = closure_3;
              obj = closure_2(closure_3[11]);
              tmp5 = closure_0;
              intl = closure_0(closure_3[7]).intl;
              presentFailedToastResult = obj.presentFailedToast(intl.string(closure_0(closure_3[7]).t.R0RpRX));
            }
            return;
          }
        }
        const stringResult4 = intl.string(tmp(1126).t);
      } else {
        class F {
          constructor() {
            tmp2 = undefined;
            tmp = closure_10;
            if (closure_10.current !== error) {
              tmp2 = error;
            }
            if (null != tmp2) {
              tmp.current = tmp2;
              tmp3 = closure_2;
              tmp4 = closure_3;
              obj = closure_2(closure_3[11]);
              tmp5 = closure_0;
              intl = closure_0(closure_3[7]).intl;
              presentFailedToastResult = obj.presentFailedToast(intl.string(closure_0(closure_3[7]).t.R0RpRX));
            }
            return;
          }
        }
      }
      cResult[12] = undefined === subscriptionListing;
      cResult[13] = stringResult4;
    }
  : (arg0, arg1, guildId, arg3) => {
      _require = arg0;
      closure_1 = arg1;
      importAll = guildId;
      dependencyMap = arg3;
      closure_14 = async function _handleArchiveOrDelete2() {
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
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
                const obj4 = { title, body, confirmText, confirmColor: tmp2(1188).ButtonColors.RED };
                v2 = 1;
                c2 = 1;
                const obj5 = { value: v2(5715).confirm(obj4), done: false };
                return obj5;
              }
            } else {
              if (1 === tmp5) {
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
                    v2(38)(null != closure_128_1, "group listing id cannot be null");
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
              } else {
                if (2 === tmp5) {
                  if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj10 = { value, done: true };
                    return obj10;
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  if (null != closure_128_3) {
                    closure_128_3.goBack();
                  }
                }
                c2 = 3;
                const obj = { value, done: true };
                return obj;
              }
              c2 = 3;
            }
          } catch (tmp31) {
            c2 = tmp;
            throw tmp31;
          }
        }
      };
      let stringResult3 = dependencyMap;
      const subscriptionListing = require("GuildRoleSubscriptionsHooks").useSubscriptionListing(guildId);
      let obj = require("GuildRoleSubscriptionsHooks");
      const removeEditStateId = GuildRoleSubscriptionListingEditStateUtilsAll.useEditStateIds(
        arg1,
        arg0,
      ).removeEditStateId;
      const deleteSubscriptionListing = require("GuildRoleSubscriptionsHooks").useDeleteSubscriptionListing();
      ({ error, deleteSubscriptionListing: closure_8, submitting } = deleteSubscriptionListing);
      let obj3 = require("GuildRoleSubscriptionsHooks");
      const archiveSubscriptionListing = require("GuildRoleSubscriptionsHooks").useArchiveSubscriptionListing();
      closure_9 = archiveSubscriptionListing.archiveSubscriptionListing;
      ({ submitting: submitting2, error: error2 } = archiveSubscriptionListing);
      removeEditStateId(null);
      let obj4 = require("GuildRoleSubscriptionsHooks");
      const first = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useName(guildId), 1)[0];
      let archived;
      if (subscriptionListing != null) {
        archived = subscriptionListing.archived;
      }
      closure_11 = tmp8;
      closure_12 = tmp9;
      if (error == null) {
        error = error2;
      }
      if (true !== archived) {
        if (!tmp9) {
          let intl = tmp(1126).intl;
          let obj6 = { tierName: first };
          const intl2 = tmp(1126).intl;
          const formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t.OuuIOY, obj6);
          const intl3 = tmp(1126).intl;
          const stringResult = intl2.string(tmp(1126).t.RL0wjm);
          const intl4 = tmp(1126).intl;
          closure_4 = intl4.string(tmp(1126).t.N5AIuE);
          const intl5 = tmp(1126).intl;
          _slicedToArray = intl5.string(tmp(1126).t.TEKiiP);
          const intl6 = tmp(1126).intl;
          stringResult3 = intl6.string(tmp(1126).t["170XOL"]);
          const items = [error];
          stringResult3(() => {
            let tmp2;
            if (ref.current !== error) {
              tmp2 = error;
            }
            if (null != tmp2) {
              ref.current = tmp2;
              const intl = util.intl;
              ToastUtilsAll.presentFailedToast(intl.string(util.t.R0RpRX));
            }
          }, items);
          let obj7 = {
            headerText: formatToPlainStringResult,
            buttonText: stringResult,
            descriptionText: intl3.string(tmp(1126).t["5/Jeg2"]),
            handleArchiveOrDelete() {
              const self = this;
              const apply = closure_14.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            },
            deleting: submitting,
            archiving: submitting2,
          };
          return obj7;
        }
      }
      const intl7 = tmp(1126).intl;
      intl7.formatToPlainString(require("util").t.x2qwWL, { tierName: first });
      const intl8 = tmp(1126).intl;
      intl8.string(require("util").t.GMtG6p);
      let intl9 = tmp(1126).intl;
      let intl10 = intl9.string;
      let string = tmp(1126).t;
      if (undefined === subscriptionListing) {
        intl10(string.DHWKJS);
      } else {
        intl10(string.Y4KjUN);
      }
      const intl11 = tmp(1126).intl;
      closure_4 = intl11.string(tmp(1126).t["4H6RLl"]);
      intl9 = tmp(1126).intl;
      _slicedToArray = intl9.string(tmp(1126).t.uG6b1w);
      intl10 = tmp(1126).intl;
      string = intl10.string;
      stringResult3 = string(tmp(1126).t.JoCdPC);
    };
