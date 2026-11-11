// === Module 10916: ConjureRemix ===

// Module 10916 (ConjureRemix)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6955 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import Dispatcher from "Dispatcher" /* 572 */;

require = fn;
const ConjureConnectionStore = fn(7301);
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
export function isValidCopyName(first1) {
  return first1.trim().length >= ConjureProjectTypes.MIN_PROJECT_NAME_LENGTH;
}
export function createConjureRemix(project, arg1, shareTicket) {
  closure_0 = project;
  closure_1 = arg1;
  closure_2 = shareTicket;
  closure_5 = async function _confirm(arg0) {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp3;
            dependencyMap = tmp7;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            closure_130_0 = closure_0;
            ({ name: closure_130_1, prompt: closure_130_2, copy: closure_130_3 } = closure_1);
            closure_130_4 = undefined;
            closure_130_5 = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "flexDirection", done: true };
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            let obj5 = { value, done: true };
            return obj5;
          } else if (closure_131_4) {
            c7 = 3;
            return { value: null, done: true };
          } else {
            closure_131_4 = true;
            closure_130_4 = closure_130_1.trim();
            c5 = 1;
            let guildId;
            if (closure_131_3 != null) {
              guildId = closure_131_3.guildId;
            }
            let tmp34 = guildId === closure_130_0;
            if (tmp34) {
              tmp34 = closure_131_3.name === closure_130_4;
            }
            if (!tmp34) {
              if (closure_131_3 != null) {
                obj4.abandon();
              }
              closure_131_3 = (function startRemix(id, guild_id, name, arg3, remix_share_ticket) {
                closure_0 = guild_id;
                closure_1 = arg3;
                function accept(comma) {
                  closure_2_5(comma);
                  if (closure_5 == null) {
                    const obj = closure_2_0(10917);
                    closure_5 = closure_2_0(10917).acceptRemix(mintRemixTicketResult, comma).catch(() => "rejected");
                    const acceptRemixResult = closure_2_0(10917).acceptRemix(mintRemixTicketResult, comma);
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
                            const obj13 = { value: v0(dependencyMap[9]).deleteProject(closure_128_0.id).catch(/* F145378 */ function() { ... }), done: false };
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
                dependencyMap = intl.string(closure_1(4079).Cn8H0Y);
                let tmp3;
                if (null != remix_share_ticket) {
                  let obj2 = { share_ticket: remix_share_ticket };
                  tmp3 = obj2;
                }
                const mintRemixTicketResult = closure_0(7272).mintRemixTicket(id.id, tmp3);
                closure_3 = mintRemixTicketResult;
                mintRemixTicketResult.catch(() => {

                });
                closure_5 = null;
                closure_6 = null;
                c7 = false;
                let obj = closure_0(7272);
                const nonce = closure_0(8786).createNonce();
                let result = map.set(nonce, (id, ws_ticket) => {
                  map.delete(nonce);
                  closure_6 = id;
                  const result = closure_2_0(7272).rememberCreatedProjectTicket(id, ws_ticket);
                  closure_2_5(id);
                  if (closure_5 == null) {
                    const tmp2Result = closure_2_0(10917);
                    closure_5 = closure_2_0(10917).acceptRemix(mintRemixTicketResult, id).catch(() => "rejected");
                    const acceptRemixResult = closure_2_0(10917).acceptRemix(mintRemixTicketResult, id);
                  }
                  const obj = closure_2_0(7272);
                });
                const tmpResult = closure_0(8786);
                const remix = closure_0(7265).createRemix({ name, guild_id, install_scope: id.install_scope, remix_source_project_id: id.id, remix_share_ticket, nonce });
                remix.then((remix_preview) => {
                  map.delete(nonce);
                  if (null != remix_preview.remix_preview) {
                    closure_2_0(7265).applyRemixPreview(remix_preview.id, remix_preview.remix_preview);
                    if (!c8) {
                      let tmp6;
                      if (closure_1 != null) {
                        tmp6 = closure_1(remix_preview);
                      }
                      closure_4 = tmp6;
                    }
                    const obj = closure_2_0(7265);
                  }
                  id = remix_preview.id;
                  closure_2_5(id);
                  if (closure_5 == null) {
                    const obj2 = closure_2_0(10917);
                    closure_5 = closure_2_0(10917).acceptRemix(mintRemixTicketResult, id).catch(() => "rejected");
                    const acceptRemixResult = closure_2_0(10917).acceptRemix(mintRemixTicketResult, id);
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
              })(closure_131_0, closure_130_0, closure_130_4, closure_131_1, closure_131_2);
              obj4 = closure_131_3;
            }
            c6 = 3;
            c7 = 1;
            let obj6 = { value: closure_131_3.open(), done: false };
            return obj6;
          }
        } else if (2 === tmp7) {
          c5 = 0;
          closure_131_4 = false;
          throw closure_4;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          closure_131_4 = false;
          c7 = 3;
          let obj7 = { value, done: true };
          return obj7;
        } else {
          closure_130_5 = value;
          if (!closure_130_5.ok) {
            if (!closure_130_5.kept) {
              closure_131_3 = null;
            }
            c5 = 0;
            closure_131_4 = false;
            c7 = 3;
          }
          const projectId = closure_130_5.projectId;
          if (true === closure_130_3) {
            let obj8 = { copy: closure_130_3 };
            let obj = obj8;
          } else {
            obj = { remix: true };
          }
          c6(projectId, closure_130_2, undefined, obj);
        }
      } catch (tmp51) {
        closure_4 = tmp51;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp51;
        } else {
          c6 = tmp;
        }
      }
    }
  };
  c3 = null;
  c4 = false;
  return {
    confirm(arg0, arg1) {
      const self = this;
      const apply = closure_5.apply;
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