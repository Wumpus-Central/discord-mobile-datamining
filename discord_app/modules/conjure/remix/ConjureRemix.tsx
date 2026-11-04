// === Module 11027: ConjureRemix ===

// Module 11027 (ConjureRemix)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6980 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import Dispatcher from "Dispatcher" /* 572 */;

require = fn;
const ConjureConnectionStore = fn(11028);
({ closeConnection: closure_4, ensureConnection: hasOwnProperty, sendUserMessage: closure_6 } = ConjureConnectionStore);
let c7 = " (Copy)";
const map = new Map();
const subscription = Dispatcher.subscribe("CONJURE_PROJECT_CREATE_PROGRESS", (nonce) => {
  ({ projectId, wsTicket } = nonce);
  value = map.get(nonce.nonce);
  if (value != null) {
    value(projectId, wsTicket);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/remix/ConjureRemix.tsx");

export function copyProjectName(name) {
  return "" + name.slice(0, ConjureProjectTypes.MAX_PROJECT_NAME_LENGTH - 7) + c7;
}
export function isValidCopyName(first2) {
  return first2.trim().length >= ConjureProjectTypes.MIN_PROJECT_NAME_LENGTH;
}
export function createConjureRemix(project, arg1) {
  closure_0 = project;
  closure_1 = arg1;
  closure_4 = async function _confirm(arg0) {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === v3) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp3;
            dependencyMap = tmp7;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            closure_130_0 = closure_0;
            ({ name: closure_130_1, prompt: closure_130_2 } = closure_1);
            closure_130_3 = undefined;
            closure_130_4 = undefined;
            v3 = 1;
            c7 = 1;
            return { value: "flexDirection", done: null };
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            let obj5 = { value, done: true };
            return obj5;
          } else if (closure_131_3) {
            c7 = 3;
            return { value: null, done: true };
          } else {
            closure_131_3 = true;
            closure_130_3 = closure_130_1.trim();
            c5 = 1;
            let guildId;
            if (closure_131_2 != null) {
              guildId = closure_131_2.guildId;
            }
            let tmp28 = guildId === closure_130_0;
            if (tmp28) {
              tmp28 = closure_131_2.name === closure_130_3;
            }
            if (!tmp28) {
              if (closure_131_2 != null) {
                obj2.abandon();
              }
              closure_131_2 = (function startRemix(id, guild_id, name, arg3) {
                closure_0 = guild_id;
                closure_1 = arg3;
                function accept(comma) {
                  closure_2_5(comma);
                  if (closure_5 == null) {
                    const obj = closure_2_0(11144);
                    closure_5 = closure_2_0(11144).acceptRemix(mintRemixTicketResult, comma).catch(() => "rejected");
                    const acceptRemixResult = closure_2_0(11144).acceptRemix(mintRemixTicketResult, comma);
                  }
                  return closure_5;
                }
                closure_12 = function _open() {
                  const self = this;
                  const tmp = closure_2_3(function*() {
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
                        if (0 === dependencyMap) {
                          if (arg0 === 1) {
                            c3 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c3 = 3;
                            const obj4 = { value, done: true };
                            return obj4;
                          } else {
                            closure_1 = tmp4;
                            const v0 = 0;
                            closure_128_0 = undefined;
                            closure_128_1 = undefined;
                            c7 = true;
                            dependencyMap = 1;
                            c3 = 1;
                            const obj5 = { value, done: false };
                            return obj5;
                          }
                        } else if (1 === tmp4) {
                          if (arg0 === 1) {
                            c3 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c3 = 3;
                            const obj6 = { value, done: true };
                            return obj6;
                          } else {
                            closure_128_0 = value;
                            if (null == closure_128_0) {
                              const obj7 = { ok: false, message: closure_129_2, kept: false };
                              c3 = 3;
                              const obj8 = { value: obj7, done: true };
                              return obj8;
                            } else {
                              dependencyMap = 2;
                              c3 = 1;
                              const obj9 = { value: closure_129_9(closure_128_0.id), done: false };
                              return obj9;
                            }
                          }
                        } else if (2 === tmp4) {
                          if (arg0 === 1) {
                            c3 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c3 = 3;
                            const obj10 = { value, done: true };
                            return obj10;
                          } else {
                            closure_128_1 = value;
                            if ("unreachable" === closure_128_1) {
                              closure_129_5 = null;
                              closure_129_7 = false;
                              const obj11 = { ok: false, message: closure_129_2, kept: true };
                              c3 = 3;
                            } else if ("rejected" !== closure_128_1) {
                              const obj12 = { ok: true, projectId: closure_128_0.id, guildId: closure_129_0 };
                            }
                            if (closure_129_4 != null) {
                              tmp12();
                            }
                            closure_1_4(closure_128_0.id);
                            const obj3 = v0(dependencyMap[9]);
                            dependencyMap = 3;
                            c3 = 1;
                            const obj13 = { value: v0(dependencyMap[9]).deleteProject(closure_128_0.id).catch(/* F143170 */ function() { ... }), done: false };
                            return obj13;
                          }
                        } else if (arg0 === 1) {
                          c3 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c3 = 3;
                          const obj = { value, done: true };
                          return obj;
                        } else {
                          { ok: false, message: null, kept: false }[1] = closure_129_2;
                        }
                      } catch (tmp36) {
                        c3 = tmp;
                        throw tmp36;
                      }
                    }
                  });
                  closure_12 = tmp;
                  const apply = tmp.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                };
                const intl = closure_0(1113).intl;
                dependencyMap = intl.string(closure_1(3995).Cn8H0Y);
                const mintRemixTicketResult = closure_0(11059).mintRemixTicket(id.id);
                closure_3 = mintRemixTicketResult;
                mintRemixTicketResult.catch(() => {

                });
                closure_5 = null;
                closure_6 = null;
                c7 = false;
                let obj = closure_0(11059);
                const nonce = closure_0(10493).createNonce();
                let result = map.set(nonce, (id, ws_ticket) => {
                  map.delete(nonce);
                  closure_6 = id;
                  const result = closure_2_0(11059).rememberCreatedProjectTicket(id, ws_ticket);
                  closure_2_5(id);
                  if (closure_5 == null) {
                    const tmp2Result = closure_2_0(11144);
                    closure_5 = closure_2_0(11144).acceptRemix(mintRemixTicketResult, id).catch(() => "rejected");
                    const acceptRemixResult = closure_2_0(11144).acceptRemix(mintRemixTicketResult, id);
                  }
                  const obj = closure_2_0(11059);
                });
                let obj2 = closure_0(10493);
                let obj4 = { name, guild_id, install_scope: null, remix_source_project_id: null, nonce: null };
                let str = id.install_scope;
                if (str == null) {
                  str = "guild";
                }
                obj4.install_scope = str;
                obj4.remix_source_project_id = id.id;
                obj4.nonce = nonce;
                const remix = closure_0(11054).createRemix(obj4);
                remix.then((remix_preview) => {
                  map.delete(nonce);
                  if (null != remix_preview.remix_preview) {
                    closure_2_0(11054).applyRemixPreview(remix_preview.id, remix_preview.remix_preview);
                    if (!c8) {
                      let tmp6;
                      if (closure_1 != null) {
                        tmp6 = closure_1(remix_preview);
                      }
                      closure_4 = tmp6;
                    }
                    const obj = closure_2_0(11054);
                  }
                  id = remix_preview.id;
                  closure_2_5(id);
                  if (closure_5 == null) {
                    const obj2 = closure_2_0(11144);
                    closure_5 = closure_2_0(11144).acceptRemix(mintRemixTicketResult, id).catch(() => "rejected");
                    const acceptRemixResult = closure_2_0(11144).acceptRemix(mintRemixTicketResult, id);
                  }
                  return remix_preview;
                }, () => {
                  map.delete(nonce);
                  if (null != closure_6) {
                    closure_2_4(closure_6);
                  }
                  return null;
                });
                return {
                  guildId: guild_id,
                  name,
                  open() {
                    const self = this;
                    const apply = closure_12.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  },
                  abandon() {
                    let tmp = c7;
                    if (!c7) {
                      tmp = c8;
                    }
                    if (!tmp) {
                      c8 = true;
                      promise.then((id) => {
                        if (closure_1_4 != null) {
                          tmp();
                        }
                        if (null != id) {
                          closure_4(id.id);
                        }
                      });
                    }
                  }
                };
              })(closure_131_0, closure_130_0, closure_130_3, closure_131_1);
              obj2 = closure_131_2;
            }
            v3 = 3;
            c7 = 1;
            let obj6 = { value: closure_131_2.open(), done: false };
            return obj6;
          }
        } else if (2 === tmp7) {
          c5 = 0;
          closure_131_3 = false;
          throw closure_4;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          closure_131_3 = false;
          c7 = 3;
          let obj = { value, done: true };
          return obj;
        } else {
          closure_130_4 = value;
          if (closure_130_4.ok) {
            v3(closure_130_4.projectId, closure_130_2, undefined, { remix: true });
          } else if (!closure_130_4.kept) {
            closure_131_2 = null;
          }
          c5 = 0;
          closure_131_3 = false;
          c7 = 3;
        }
      } catch (tmp44) {
        closure_4 = tmp44;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp44;
        } else {
          v3 = tmp;
        }
      }
    }
  };
  c2 = null;
  c3 = false;
  return {
    confirm(arg0, arg1) {
      const self = this;
      const apply = closure_4.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    dismiss() {
      let abandonResult;
      if (_null != null) {
        abandonResult = _null.abandon();
      }
      return abandonResult;
    }
  };
}