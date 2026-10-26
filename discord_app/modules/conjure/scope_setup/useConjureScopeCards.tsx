// === Module 12470: useConjureScopeCards ===

// Module 12470 (useConjureScopeCards)
import util from "util" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import conjureScopeSetup from "conjureScopeSetup" /* 11754 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;

const require = globalThis.__r;

require = fn;
function errorStatus(status) {
  return status.status;
}
function scopeClarification() {
  const obj = { id: "scope-setup", questions: null };
  const obj2 = { id, question: null, recommendation_reason: "", allow_custom: false, options: null };
  const intl = util.intl;
  obj2.question = intl.string(_modDef3830.ickKBI);
  const obj3 = { id: id2, label: null, detail: null };
  const intl2 = util.intl;
  obj3.label = intl2.string(_modDef3830.qLYOpH);
  const intl3 = util.intl;
  obj3.detail = intl3.string(_modDef3830.QSKvUE);
  const items = [obj3, ];
  const obj4 = { id: id3, label: null, detail: null };
  const intl4 = util.intl;
  obj4.label = intl4.string(_modDef3830.QV5C7b);
  const intl5 = util.intl;
  obj4.detail = intl5.string(_modDef3830["ZzHR4/"]);
  items[1] = obj4;
  obj2.options = items;
  const items1 = [obj2];
  obj.questions = items1;
  return obj;
}
function serverClarification(conjureEligibleGuilds, guild_id) {
  let str = "server-setup-empty";
  if (conjureEligibleGuilds.length > 0) {
    str = "server-setup";
  }
  const obj = { id: str, questions: null };
  const intl = util.intl;
  if (conjureEligibleGuilds.length > 0) {
    let ZWXDeI = _modDef3830.ZWXDeI;
    let tmp5 = importDefault;
  } else {
    ZWXDeI = _modDef3830["u5+Qhu"];
    tmp5 = importDefault;
  }
  const obj2 = { id: "server-setup:q0", question: intl.string(ZWXDeI), recommendation_reason: "", allow_custom: false, options: null };
  if (conjureEligibleGuilds.length > 0) {
    let items = [];
  } else {
    const obj3 = { id: id2, label: null };
    const intl2 = util.intl;
    obj3.label = intl2.string(tmp5(3830).qLYOpH);
    items = [obj3];
  }
  obj2.options = items;
  const merged = Object.assign(conjureScopeSetup.serverQuestionFields(conjureEligibleGuilds, guild_id));
  const items1 = [obj2];
  obj.questions = items1;
  return obj;
}
let isProjectOwner = fn(6773).isProjectOwner;
const ConjureScopeSetupCard = "ConjureScopeSetupCard";
const ConjureScopeSwitchCard = "ConjureScopeSwitchCard";
let c10 = "scope-setup:q0";
const id2 = "" + "scope-setup:q0" + ":0";
const id3 = "" + "scope-setup:q0" + ":1";
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureScopeSetupCard(arg0) {
  _require = arg0;
  const cResult = require("c").c(25);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function p() {
      return ConjureProjectStore.getProject(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  const tmpResult = require("initialize");
  const conjureEligibleGuilds = require("useConjureProjects").useConjureEligibleGuilds(ConjureScopeSetupCard);
  const tmpResult3 = require("useConjureProjects");
  [tmp11, importDefault] = settle(noop.useState(null), 2);
  const tmp10 = settle(noop.useState(null), 2);
  [tmp13, dependencyMap] = settle(noop.useState(false), 2);
  const tmp12 = settle(noop.useState(false), 2);
  [tmp15, asyncGeneratorStep] = settle(noop.useState(null), 2);
  if (stateFromStores != null) {
    const install_scope_setup = stateFromStores.install_scope_setup;
  }
  let tmp16 = "server" === tmp11;
  if (!tmp16) {
    let tmp17 = null == tmp11;
    if (tmp17) {
      tmp17 = "choose_server" === install_scope_setup;
    }
    tmp16 = tmp17;
  }
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (cResult[4] === tmp16) {
    if (cResult[5] === conjureEligibleGuilds) {
      if (cResult[6] === guild_id) {
        if (null == install_scope_setup) {
          return null;
        } else {
          if (null != stateFromStores) {
            if (isProjectOwner(stateFromStores)) {
              if (cResult[12] !== arg0) {
                _require = asyncGeneratorStep(async (arg0, arg1) => {
                  closure_130_0 = closure_1;
                  closure_2(true);
                  tmp3(null);
                  await closure_0(dependencyMap[6]).settleConjureInstallScope(closure_0, closure_0, closure_1);
                  if (1 === tmp7) {
                    c5 = 0;
                    closure_130_1 = closure_4;
                    closure_2(false);
                    let str = "failed";
                    if (null != closure_130_0) {
                      str = "failed";
                      if (403 === errorStatus(closure_130_1)) {
                        str = "server";
                      }
                    }
                    tmp3(str);
                    c7 = 3;
                  } else if (arg0 === 1) {
                    c7 = 3;
                    throw value;
                  } else if (arg0 !== 2) {
                    c5 = 0;
                  }
                  return value;
                });
                settle = function settle() {
                  const self = this;
                  const apply = closure_0.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                };
                function handleAnswered(arg0, arg1) {
                  let first;
                  if (arg1 != null) {
                    first = arg1.answers[0];
                  }
                  if (null != first) {
                    const entities = first.entities;
                    if (entities != null) {
                      const first1 = entities[0];
                      if (first1 != null) {
                        id = first1.id;
                      }
                    }
                    const option_ids = first.option_ids;
                    if (option_ids.includes(closure_12)) {
                      importDefault("server");
                    } else if (null != id) {
                      settle("guild", id);
                    } else {
                      settle("user", null);
                    }
                  }
                }
                cResult[12] = arg0;
                cResult[13] = handleAnswered;
              }
              const _Symbol = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = tmp(1128).intl;
                const stringResult = intl.string(tmp(1128).t["cY+Oob"]);
                cResult[14] = stringResult;
                let tmp26 = stringResult;
              } else {
                tmp26 = cResult[14];
              }
              if (cResult[15] === tmp16) {
                if (cResult[16] === tmp13) {
                  let tmp28 = cResult[17];
                }
                if (cResult[18] !== tmp15) {
                  if (null == tmp15) {
                    cResult[18] = tmp15;
                    cResult[19] = null;
                    let tmp29 = null;
                  } else {
                    const intl2 = tmp(1128).intl;
                    if ("server" === tmp15) {
                      let jNVZ3e = _modDef3830["XXKd+7"];
                    } else {
                      jNVZ3e = _modDef3830.jNVZ3e;
                    }
                    intl2.string(jNVZ3e);
                  }
                } else {
                  tmp29 = cResult[19];
                }
                if (cResult[20] === tmp19) {
                  if (cResult[21] === tmp25) {
                    if (cResult[22] === tmp28) {
                      if (cResult[23] === tmp29) {
                        let tmp34 = cResult[24];
                      }
                      return tmp34;
                    }
                  }
                }
                const obj2 = { clarification: tmp19, readOnly: false, onSubmit: tmp25, submitText: tmp26, onBack: tmp28, hideSubmit: false, failure: tmp29 };
                cResult[20] = tmp19;
                cResult[21] = tmp25;
                cResult[22] = tmp28;
                cResult[23] = tmp29;
                cResult[24] = obj2;
                tmp34 = obj2;
              }
              let fn2;
              if (tmp16) {
                if (!tmp13) {
                  fn2 = () => importDefault("scope");
                }
              }
              cResult[15] = tmp16;
              cResult[16] = tmp13;
              cResult[17] = fn2;
              tmp28 = fn2;
            }
          }
          if (cResult[8] !== tmp19) {
            const result = tmp(11754).ownerOnlyClarification(tmp19);
            cResult[8] = tmp19;
            cResult[9] = result;
            let tmp35 = result;
            const tmpResult4 = tmp(11754);
          } else {
            tmp35 = cResult[9];
          }
          if (cResult[10] !== tmp35) {
            const obj3 = { clarification: tmp35, readOnly: true, hideSubmit: true, failure: null };
            cResult[10] = tmp35;
            cResult[11] = obj3;
            let tmp37 = obj3;
          } else {
            tmp37 = cResult[11];
          }
          return tmp37;
        }
      }
    }
  }
  if (tmp16) {
    let tmp21 = serverClarification(conjureEligibleGuilds, guild_id);
  } else {
    tmp21 = scopeClarification();
  }
  cResult[4] = tmp16;
  cResult[5] = conjureEligibleGuilds;
  cResult[6] = guild_id;
  cResult[7] = tmp21;
  const tmp14 = settle(noop.useState(null), 2);
}) : (function useConjureScopeSetupCard(arg0) {
  _require = arg0;
  function settle() {
    const self = this;
    const apply = closure_8.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  closure_8 = async function _settle2(arg0) {
    closure_3 = tmp3;
    closure_130_0 = closure_1;
    asyncGeneratorStep(true);
    _slicedToArray(null);
    await closure_0(closure_2[6]).settleConjureInstallScope(closure_2_0, closure_0, closure_1);
    if (1 === tmp7) {
      c5 = 0;
      closure_130_1 = closure_4;
      closure_131_3(false);
      let str = "failed";
      if (null != closure_130_0) {
        str = "failed";
        if (403 === errorStatus(closure_130_1)) {
          str = "server";
        }
      }
      closure_131_4(str);
      c7 = 3;
    } else if (arg0 === 1) {
      c7 = 3;
      throw value;
    } else if (arg0 !== 2) {
      c5 = 0;
    }
    return value;
  };
  const items = [guild_id];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ConjureProjectStore.getProject(closure_0), items1);
  const obj = require("initialize");
  const conjureEligibleGuilds = require("useConjureProjects").useConjureEligibleGuilds(closure_8);
  const obj2 = require("useConjureProjects");
  const obj3 = noop;
  [tmp6, dependencyMap] = noop.useState(null);
  const tmp5 = _slicedToArray(noop.useState(null), 2);
  [tmp8, asyncGeneratorStep] = noop.useState(false);
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  [tmp10, _slicedToArray] = noop.useState(null);
  let install_scope_setup;
  if (stateFromStores != null) {
    install_scope_setup = stateFromStores.install_scope_setup;
  }
  let tmp12 = "server" === tmp6;
  if (!tmp12) {
    let tmp13 = null == tmp6;
    if (tmp13) {
      tmp13 = "choose_server" === install_scope_setup;
    }
    tmp12 = tmp13;
  }
  noop = tmp12;
  guild_id = undefined;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const items2 = [tmp12, conjureEligibleGuilds, guild_id];
  const memo = obj3.useMemo(() => {
    if (closure_5) {
      let tmp2 = serverClarification(conjureEligibleGuilds, guild_id);
    } else {
      tmp2 = scopeClarification();
    }
    return tmp2;
  }, items2);
  if (null == install_scope_setup) {
    return null;
  } else {
    if (null != stateFromStores) {
      if (settle(stateFromStores)) {
        const obj4 = { clarification: memo, readOnly: false, onSubmit: null, submitText: null, onBack: null, hideSubmit: false, failure: null };
        let handleAnswered;
        if (!tmp8) {
          handleAnswered = function handleAnswered(arg0, arg1) {
            let first;
            if (arg1 != null) {
              first = arg1.answers[0];
            }
            if (null != first) {
              const entities = first.entities;
              if (entities != null) {
                const first1 = entities[0];
                if (first1 != null) {
                  id = first1.id;
                }
              }
              const option_ids = first.option_ids;
              if (option_ids.includes(closure_12)) {
                dependencyMap("server");
              } else if (null != id) {
                settle("guild", id);
              } else {
                settle("user", null);
              }
            }
          };
        }
        obj4.onSubmit = handleAnswered;
        const intl = tmp(1128).intl;
        obj4.submitText = intl.string(tmp(1128).t["cY+Oob"]);
        let fn;
        if (tmp12) {
          if (!tmp8) {
            fn = () => dependencyMap("scope");
          }
        }
        obj4.onBack = fn;
        if (null == tmp10) {
          obj4.failure = null;
          return obj4;
        } else {
          const intl2 = tmp(1128).intl;
          if ("server" === tmp10) {
            let jNVZ3e = conjureEligibleGuilds(3830)["XXKd+7"];
          } else {
            jNVZ3e = conjureEligibleGuilds(3830).jNVZ3e;
          }
          intl2.string(jNVZ3e);
        }
      }
    }
    const obj5 = { clarification: tmp(11754).ownerOnlyClarification(memo), readOnly: true, hideSubmit: true, failure: null };
    return obj5;
  }
  const tmp9 = _slicedToArray(noop.useState(null), 2);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/scope_setup/useConjureScopeCards.tsx");

export const useConjureScopeSetupCard = tmp2;
export const useConjureScopeSwitchCard = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureScopeSwitchCard(projectId) {
  const cResult = require("c").c(44);
  projectId = projectId.projectId;
  _require = projectId;
  const clarification = projectId.clarification;
  ({ offer, onKept } = projectId);
  const scope = offer.scope;
  const feature = offer.feature;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [closure_6];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const fn = function p() {
      return ConjureProjectStore.getProject(closure_0);
    };
    const items1 = [projectId];
    cResult[1] = projectId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  const tmpResult = require("initialize");
  const conjureEligibleGuilds = require("useConjureProjects").useConjureEligibleGuilds(ConjureScopeSwitchCard);
  const tmpResult4 = require("useConjureProjects");
  [tmp12, _slicedToArray] = noop.useState(false);
  const tmp11 = _slicedToArray(noop.useState(false), 2);
  [tmp14, noop] = noop.useState(null);
  if (stateFromStores != null) {
    const guild_id = stateFromStores.guild_id;
  }
  let first1 = _slicedToArray(clarification.questions, 1)[0];
  if (cResult[4] === feature) {
    if (cResult[5] === scope) {
      if (cResult[7] === conjureEligibleGuilds) {
        if (cResult[8] === tmp16) {
          if (cResult[9] === guild_id) {
            if (cResult[10] === first1) {
              if (cResult[11] === scope) {
                if (cResult[13] === clarification.id) {
                  if (cResult[14] === tmp20) {
                    let tmp28 = cResult[15];
                  }
                  if (null != stateFromStores) {
                    if (isProjectOwner(stateFromStores)) {
                      if (cResult[20] === clarification.id) {
                        if (cResult[21] === projectId) {
                          if (cResult[22] === scope) {
                            let tmp29 = cResult[23];
                          }
                          closure_6 = tmp29;
                          if (cResult[24] === onKept) {
                            if (cResult[27] === tmp29) {
                              if (cResult[30] !== scope) {
                                const intl2 = tmp(onKept[4]).intl;
                                if ("guild" === scope) {
                                  let TVRkVh = clarification(onKept[5]).Ua7yKM;
                                } else {
                                  TVRkVh = clarification(onKept[5]).TVRkVh;
                                }
                                const stringResult = intl2.string(TVRkVh);
                                cResult[30] = scope;
                                cResult[31] = stringResult;
                              } else if (cResult[32] !== scope) {
                                const intl3 = tmp(onKept[4]).intl;
                                if ("guild" === scope) {
                                  let v4WnIqd = clarification(onKept[5])["4WnIqd"];
                                } else {
                                  v4WnIqd = clarification(onKept[5])["am+p7p"];
                                }
                                const stringResult1 = intl3.string(v4WnIqd);
                                cResult[32] = scope;
                                cResult[33] = stringResult1;
                              } else {
                                if (cResult[34] !== tmp14) {
                                  if (null == tmp14) {
                                    cResult[34] = tmp14;
                                    cResult[35] = null;
                                    let tmp46 = null;
                                  } else {
                                    const intl4 = tmp(onKept[4]).intl;
                                    if ("locked" === tmp14) {
                                      let jNVZ3e = clarification(onKept[5]).irUT0N;
                                    } else {
                                      jNVZ3e = clarification(onKept[5]).jNVZ3e;
                                    }
                                    intl4.string(jNVZ3e);
                                  }
                                } else {
                                  tmp46 = cResult[35];
                                }
                                if (cResult[36] === tmp28) {
                                  if (cResult[37] === tmp33) {
                                    if (cResult[38] === tmp34) {
                                      if (cResult[39] === tmp39) {
                                        if (cResult[40] === tmp40) {
                                          if (cResult[41] === tmp51) {
                                            if (cResult[42] === tmp46) {
                                              let tmp52 = cResult[43];
                                            }
                                            return tmp52;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                const obj2 = { clarification: tmp28, readOnly: false, onSubmit: tmp33, submitText: tmp34, onBack: tmp39, backText: cResult[33], hideSubmit: "user" === scope, failure: tmp46 };
                                cResult[36] = tmp28;
                                cResult[37] = tmp33;
                                cResult[38] = tmp34;
                                cResult[39] = tmp39;
                                cResult[40] = cResult[33];
                                cResult[41] = "user" === scope;
                                cResult[42] = tmp46;
                                cResult[43] = obj2;
                                tmp52 = obj2;
                              }
                            }
                            function handleAnswered(arg0, arg1) {
                              if (arg1 != null) {
                                const first = arg1.answers[0];
                                if (first != null) {
                                  const entities = first.entities;
                                  if (entities != null) {
                                    const first1 = entities[0];
                                  }
                                }
                              }
                              if ("user" === scope) {
                                closure_6(null);
                              } else if (null != first1) {
                                closure_6(first1.id);
                              }
                            }
                            cResult[27] = tmp29;
                            cResult[28] = scope;
                            cResult[29] = handleAnswered;
                          }
                          function keep() {
                            noop(null);
                            if (obj.keepConjureInstallScope(closure_0)) {
                              onKept();
                            } else {
                              noop("failed");
                            }
                            obj = conjureScopeSetup;
                          }
                          cResult[24] = onKept;
                          cResult[25] = projectId;
                          cResult[26] = keep;
                        }
                      }
                      _require = scope(function*(arg0) {
                        closure_2 = tmp3;
                        v0(true);
                        v2(null);
                        v0 = 1;
                        yield closure_0(onKept[6]).switchConjureInstallScope(closure_0, id.id, closure_3, closure_0);
                        if (1 === tmp7) {
                          v0 = 0;
                          closure_129_0 = closure_3;
                          v0(false);
                          let str = "failed";
                          if (409 === errorStatus(closure_129_0)) {
                            str = "locked";
                          }
                          v2(str);
                          c6 = 3;
                        } else if (arg0 === 1) {
                          c6 = 3;
                          throw value;
                        } else if (arg0 !== 2) {
                          v0 = 0;
                        }
                        v0 = 0;
                        return value;
                      });
                      function switchTo() {
                        const self = this;
                        const apply = closure_0.apply;
                        if (typeof apply === "unknown") {
                          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                        } else {
                          applyArgumentsResult = apply(self, arguments);
                        }
                        return applyArgumentsResult;
                      }
                      cResult[20] = clarification.id;
                      cResult[21] = projectId;
                      cResult[22] = scope;
                      cResult[23] = switchTo;
                      tmp29 = switchTo;
                    }
                  }
                  if (cResult[16] !== tmp28) {
                    const result = tmp(onKept[6]).ownerOnlyClarification(tmp28);
                    cResult[16] = tmp28;
                    cResult[17] = result;
                    let tmp53 = result;
                    const tmpResult5 = tmp(onKept[6]);
                  } else {
                    tmp53 = cResult[17];
                  }
                  if (cResult[18] !== tmp53) {
                    const obj3 = { clarification: tmp53, readOnly: true, hideSubmit: true, failure: null };
                    cResult[18] = tmp53;
                    cResult[19] = obj3;
                    let tmp55 = obj3;
                  } else {
                    tmp55 = cResult[19];
                  }
                  return tmp55;
                }
                const obj4 = { id: clarification.id, questions: cResult[12] };
                cResult[13] = clarification.id;
                cResult[14] = cResult[12];
                cResult[15] = obj4;
                tmp28 = obj4;
              }
            }
          }
        }
      }
      if ("guild" === scope) {
        const obj5 = {};
        const merged = Object.assign(first1);
        obj5.question = tmp16;
        obj5.allow_custom = false;
        const merged1 = Object.assign(tmp(onKept[6]).serverQuestionFields(conjureEligibleGuilds, guild_id));
        let tmp26 = obj5;
        const tmpResult6 = tmp(onKept[6]);
      } else {
        const obj6 = {};
        const merged2 = Object.assign(first1);
        obj6.question = tmp16;
        obj6.allow_custom = false;
        const obj7 = { id: null, label: null };
        const _HermesInternal = HermesInternal;
        obj7.id = "" + first1.id + ":0";
        const intl5 = tmp(onKept[4]).intl;
        obj7.label = intl5.string(clarification(onKept[5]).TVRkVh);
        const items2 = [obj7];
        obj6.options = items2;
        tmp26 = obj6;
      }
      const items3 = [tmp26];
      cResult[7] = conjureEligibleGuilds;
      cResult[8] = cResult[6];
      cResult[9] = guild_id;
      cResult[10] = first1;
      cResult[11] = scope;
      cResult[12] = items3;
    }
  }
  const intl = tmp(onKept[4]).intl;
  if ("guild" === scope) {
    let d7jxeT = clarification(onKept[5])["jh/iy+"];
  } else {
    d7jxeT = clarification(onKept[5]).d7jxeT;
  }
  const tmp13 = _slicedToArray(noop.useState(null), 2);
  cResult[4] = feature;
  cResult[5] = scope;
  cResult[6] = intl.formatToPlainString(d7jxeT, { feature });
  const formatToPlainStringResult = intl.formatToPlainString(d7jxeT, { feature });
}) : (function useConjureScopeSwitchCard(projectId) {
  projectId = projectId.projectId;
  const clarification = projectId.clarification;
  ({ offer, onKept: dependencyMap } = projectId);
  c6 = undefined;
  isProjectOwner = undefined;
  function switchTo() {
    const self = this;
    const apply = closure_10.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  closure_10 = async function _switchTo2(arg0) {
    ConjureProjectStore(true);
    _undefined(null);
    await closure_0(tmp3[6]).switchConjureInstallScope(projectId, id.id, scope, closure_0);
    if (1 === tmp7) {
      c4 = 0;
      closure_129_0 = closure_3;
      closure_130_6(false);
      let str = "failed";
      if (409 === errorStatus(closure_129_0)) {
        str = "locked";
      }
      closure_130_7(str);
      c6 = 3;
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 !== 2) {
      c4 = 0;
    }
    return value;
  };
  const scope = offer.scope;
  const feature = offer.feature;
  let items = [c6];
  let items1 = [projectId];
  const stateFromStores = projectId(504).useStateFromStores(items, () => ConjureProjectStore.getProject(projectId), items1);
  let obj = projectId(504);
  const conjureEligibleGuilds = projectId(11750).useConjureEligibleGuilds(switchTo);
  let obj2 = projectId(11750);
  let obj3 = conjureEligibleGuilds;
  [tmp6, c6] = feature(conjureEligibleGuilds.useState(false), 2);
  const tmp5 = feature(conjureEligibleGuilds.useState(false), 2);
  [tmp8, c7] = feature(conjureEligibleGuilds.useState(null), 2);
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const items2 = [clarification, feature, conjureEligibleGuilds, guild_id, scope];
  const memo = obj3.useMemo(() => {
    const first = _slicedToArray(clarification.questions, 1)[0];
    const intl = util.intl;
    const tmp7 = _modDef3830;
    if ("guild" === scope) {
      let d7jxeT = tmp7["jh/iy+"];
      let tmp8 = importDefault;
    } else {
      d7jxeT = tmp7.d7jxeT;
      tmp8 = importDefault;
    }
    const obj2 = { id: clarification.id, questions: null };
    const obj3 = {};
    const merged = Object.assign(first);
    obj3.question = intl.formatToPlainString(d7jxeT, { feature });
    obj3.allow_custom = false;
    if ("guild" === scope) {
      const merged1 = Object.assign(conjureScopeSetup.serverQuestionFields(conjureEligibleGuilds, guild_id));
      let tmp12 = obj3;
      const tmp3Result = conjureScopeSetup;
    } else {
      const obj4 = { id: null, label: null };
      const _HermesInternal = HermesInternal;
      obj4.id = "" + first.id + ":0";
      const intl2 = util.intl;
      obj4.label = intl2.string(tmp8(3830).TVRkVh);
      const items = [obj4];
      obj3.options = items;
      tmp12 = obj3;
    }
    const items1 = [tmp12];
    obj2.questions = items1;
    return obj2;
  }, items2);
  if (null != stateFromStores) {
    if (isProjectOwner(stateFromStores)) {
      let obj4 = { clarification: memo, readOnly: false, onSubmit: null, submitText: null, onBack: null, backText: null, hideSubmit: null, failure: null };
      let handleAnswered;
      if (!tmp6) {
        handleAnswered = function handleAnswered(arg0, arg1) {
          if (arg1 != null) {
            const first = arg1.answers[0];
            if (first != null) {
              const entities = first.entities;
              if (entities != null) {
                const first1 = entities[0];
              }
            }
          }
          if ("user" === scope) {
            switchTo(null);
          } else if (null != first1) {
            switchTo(first1.id);
          }
        };
      }
      obj4.onSubmit = handleAnswered;
      let intl = tmp(1128).intl;
      const tmp13 = clarification(3830);
      if ("guild" === scope) {
        let TVRkVh = tmp13.Ua7yKM;
        let tmp14 = tmp12;
      } else {
        TVRkVh = tmp13.TVRkVh;
        tmp14 = tmp12;
      }
      obj4.submitText = intl.string(TVRkVh);
      let keep;
      if (!tmp6) {
        keep = function keep() {
          _undefined(null);
          if (obj.keepConjureInstallScope(projectId)) {
            dependencyMap();
          } else {
            _undefined("failed");
          }
          obj = conjureScopeSetup;
        };
      }
      obj4.onBack = keep;
      let intl2 = tmp(1128).intl;
      const tmp14Result = tmp14(3830);
      obj4.backText = intl2.string("guild" === scope ? tmp14Result["4WnIqd"] : tmp14Result["am+p7p"]);
      obj4.hideSubmit = "user" === scope;
      if (null == tmp8) {
        obj4.failure = null;
        return obj4;
      } else {
        const intl3 = tmp(1128).intl;
        if ("locked" === tmp8) {
          let jNVZ3e = tmp14(3830).irUT0N;
        } else {
          jNVZ3e = tmp14(3830).jNVZ3e;
        }
        intl3.string(jNVZ3e);
      }
    }
  }
  const obj5 = { clarification: null, readOnly: true, hideSubmit: true, failure: null };
  let tmp7 = feature(conjureEligibleGuilds.useState(null), 2);
  obj5.clarification = projectId(11754).ownerOnlyClarification(memo);
  return obj5;
});