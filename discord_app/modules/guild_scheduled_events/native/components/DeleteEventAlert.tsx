// discord_app/modules/guild_scheduled_events/native/components/DeleteEventAlert.tsx
import util from "../../../../intl/index.native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildScheduledEventStore from "../../GuildScheduledEventStore.tsx";

const require = globalThis.__r;

require = fn;
let jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_6 = createStyles.createStyles({ contentText: { textAlign: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/DeleteEventAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (eventId) => {
      const cResult = require("c").c(32);
      eventId = eventId.eventId;
      _require = eventId;
      const guildId = eventId.guildId;
      recurrenceId = eventId.recurrenceId;
      const eventException = eventId.eventException;
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [closure_4];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== eventId) {
        const fn = function s() {
          return GuildScheduledEventStore.getGuildScheduledEvent(closure_0);
        };
        cResult[1] = eventId;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp7);
      let recurrence_rule;
      if (stateFromStores != null) {
        recurrence_rule = stateFromStores.recurrence_rule;
      }
      closure_4 = tmp10;
      jsx = tmp11;
      if (cResult[3] === eventException) {
        if (cResult[4] === eventId) {
          if (cResult[5] === guildId) {
            if (cResult[6] === tmp11) {
              if (cResult[7] === recurrenceId) {
                let tmp12 = cResult[8];
              }
              if (cResult[9] === tmp11) {
                if (cResult[10] === tmp10) {
                  let tmp13 = cResult[11];
                }
                if (cResult[12] !== tmp13) {
                  const tmp13Result = tmp13();
                  class E {
                    constructor() {
                      if (closure_5) {
                        tmp7 = closure_0;
                        tmp8 = closure_2;
                        intl2 = closure_0(closure_2[10]).intl;
                        tmp9 = closure_0;
                        tmp10 = closure_2;
                        stringResult = intl2.string(closure_0(closure_2[10]).t.tqClly);
                      } else {
                        tmp = closure_4;
                        tmp2 = closure_0;
                        tmp3 = closure_2;
                        intl = closure_0(closure_2[10]).intl;
                        string = intl.string;
                        tmp4 = closure_0;
                        tmp5 = closure_2;
                        t = closure_0(closure_2[10]).t;
                        if (closure_4) {
                          stringResult = string(t.wr33rW);
                        } else {
                          stringResult = string(t.B9sJLX);
                        }
                      }
                      return stringResult;
                    }
                  }
                  cResult[13] = tmp13Result;
                  let tmp14 = tmp13Result;
                } else {
                  tmp14 = cResult[13];
                }
                class E {
                  constructor() {
                    if (closure_5) {
                      tmp7 = closure_0;
                      tmp8 = closure_2;
                      intl2 = closure_0(closure_2[10]).intl;
                      tmp9 = closure_0;
                      tmp10 = closure_2;
                      stringResult = intl2.string(closure_0(closure_2[10]).t.tqClly);
                    } else {
                      tmp = closure_4;
                      tmp2 = closure_0;
                      tmp3 = closure_2;
                      intl = closure_0(closure_2[10]).intl;
                      string = intl.string;
                      tmp4 = closure_0;
                      tmp5 = closure_2;
                      t = closure_0(closure_2[10]).t;
                      if (closure_4) {
                        stringResult = string(t.wr33rW);
                      } else {
                        stringResult = string(t.B9sJLX);
                      }
                    }
                    return stringResult;
                  }
                }
                if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                  let string = tmp(tmp2[10]).intl.string;
                  class E {
                    constructor() {
                      if (closure_5) {
                        tmp7 = closure_0;
                        tmp8 = closure_2;
                        intl2 = closure_0(closure_2[10]).intl;
                        tmp9 = closure_0;
                        tmp10 = closure_2;
                        stringResult = intl2.string(closure_0(closure_2[10]).t.tqClly);
                      } else {
                        tmp = closure_4;
                        tmp2 = closure_0;
                        tmp3 = closure_2;
                        intl = closure_0(closure_2[10]).intl;
                        string = intl.string;
                        tmp4 = closure_0;
                        tmp5 = closure_2;
                        t = closure_0(closure_2[10]).t;
                        if (closure_4) {
                          stringResult = string(t.wr33rW);
                        } else {
                          stringResult = string(t.B9sJLX);
                        }
                      }
                      return stringResult;
                    }
                  }
                  cResult[14] = tmp17;
                  let tmp16 = tmp17;
                } else {
                  tmp16 = cResult[14];
                }
                if (cResult[15] === tmp11) {
                  if (cResult[16] === tmp10) {
                    if (cResult[17] === tmp4) {
                      let tmp18 = cResult[18];
                    }
                    if (cResult[19] === tmp11) {
                      if (cResult[20] === tmp10) {
                        if (cResult[22] === tmp12) {
                          if (cResult[23] === tmp21) {
                            let tmp23 = cResult[24];
                          }
                          const _Symbol = Symbol;
                          class E {
                            constructor() {
                              if (closure_5) {
                                tmp7 = closure_0;
                                tmp8 = closure_2;
                                intl2 = closure_0(closure_2[10]).intl;
                                tmp9 = closure_0;
                                tmp10 = closure_2;
                                stringResult = intl2.string(closure_0(closure_2[10]).t.tqClly);
                              } else {
                                tmp = closure_4;
                                tmp2 = closure_0;
                                tmp3 = closure_2;
                                intl = closure_0(closure_2[10]).intl;
                                string = intl.string;
                                tmp4 = closure_0;
                                tmp5 = closure_2;
                                t = closure_0(closure_2[10]).t;
                                if (closure_4) {
                                  stringResult = string(t.wr33rW);
                                } else {
                                  stringResult = string(t.B9sJLX);
                                }
                              }
                              return stringResult;
                            }
                          }
                          if (tmp25 === Symbol.for("react.memo_cache_sentinel")) {
                            const obj2 = { variant: "secondary", text: null };
                            class E {
                              constructor() {
                                if (closure_5) {
                                  tmp7 = closure_0;
                                  tmp8 = closure_2;
                                  intl2 = closure_0(closure_2[10]).intl;
                                  tmp9 = closure_0;
                                  tmp10 = closure_2;
                                  stringResult = intl2.string(closure_0(closure_2[10]).t.tqClly);
                                } else {
                                  tmp = closure_4;
                                  tmp2 = closure_0;
                                  tmp3 = closure_2;
                                  intl = closure_0(closure_2[10]).intl;
                                  string = intl.string;
                                  tmp4 = closure_0;
                                  tmp5 = closure_2;
                                  t = closure_0(closure_2[10]).t;
                                  if (closure_4) {
                                    stringResult = string(t.wr33rW);
                                  } else {
                                    stringResult = string(t.B9sJLX);
                                  }
                                }
                                return stringResult;
                              }
                            }
                            const intl3 = tmp(tmp2[10]).intl;
                            obj2.text = intl3.string(tmp(tmp2[10]).t.oEAioF);
                            const tmp29 = <tmp28 key="cancel" variant="secondary" text={null} />;
                            cResult[25] = tmp29;
                          }
                          if (cResult[26] !== tmp23) {
                            const items1 = [tmp23];
                            class E {
                              constructor() {
                                if (closure_5) {
                                  tmp7 = closure_0;
                                  tmp8 = closure_2;
                                  intl2 = closure_0(closure_2[10]).intl;
                                  tmp9 = closure_0;
                                  tmp10 = closure_2;
                                  stringResult = intl2.string(closure_0(closure_2[10]).t.tqClly);
                                } else {
                                  tmp = closure_4;
                                  tmp2 = closure_0;
                                  tmp3 = closure_2;
                                  intl = closure_0(closure_2[10]).intl;
                                  string = intl.string;
                                  tmp4 = closure_0;
                                  tmp5 = closure_2;
                                  t = closure_0(closure_2[10]).t;
                                  if (closure_4) {
                                    stringResult = string(t.wr33rW);
                                  } else {
                                    stringResult = string(t.B9sJLX);
                                  }
                                }
                                return stringResult;
                              }
                            }
                            cResult[26] = tmp23;
                            cResult[27] = items1;
                            let tmp30 = items1;
                          } else {
                            tmp30 = cResult[27];
                          }
                          if (cResult[28] === tmp30) {
                            if (cResult[29] === tmp14) {
                              if (cResult[30] === tmp18) {
                                let tmp31 = cResult[31];
                              }
                              return tmp31;
                            }
                          }
                          let obj3 = { title: tmp14, content: tmp16, extraContent: tmp18, actions: tmp30 };
                          const tmp33 = jsx(tmp(tmp2[12]).AlertModal, {
                            title: tmp14,
                            content: tmp16,
                            extraContent: tmp18,
                            actions: tmp30,
                          });
                          cResult[28] = tmp30;
                          cResult[29] = tmp14;
                          cResult[30] = tmp18;
                          cResult[31] = tmp33;
                          tmp31 = tmp33;
                        }
                        class E {
                          constructor() {
                            if (closure_5) {
                              tmp7 = closure_0;
                              tmp8 = closure_2;
                              intl2 = closure_0(closure_2[10]).intl;
                              tmp9 = closure_0;
                              tmp10 = closure_2;
                              stringResult = intl2.string(closure_0(closure_2[10]).t.tqClly);
                            } else {
                              tmp = closure_4;
                              tmp2 = closure_0;
                              tmp3 = closure_2;
                              intl = closure_0(closure_2[10]).intl;
                              string = intl.string;
                              tmp4 = closure_0;
                              tmp5 = closure_2;
                              t = closure_0(closure_2[10]).t;
                              if (closure_4) {
                                stringResult = string(t.wr33rW);
                              } else {
                                stringResult = string(t.B9sJLX);
                              }
                            }
                            return stringResult;
                          }
                        }
                        let obj4 = { variant: "destructive", onPress: tmp12, text: cResult[21] };
                        const tmp24 = jsx(
                          tmp(tmp2[12]).AlertActionButton,
                          { variant: "destructive", onPress: tmp12, text: cResult[21] },
                          "delete",
                        );
                        cResult[22] = tmp12;
                        cResult[23] = cResult[21];
                        cResult[24] = tmp24;
                        tmp23 = tmp24;
                      }
                    }
                    class E {
                      constructor() {
                        if (closure_5) {
                          tmp7 = closure_0;
                          tmp8 = closure_2;
                          intl2 = closure_0(closure_2[10]).intl;
                          tmp9 = closure_0;
                          tmp10 = closure_2;
                          stringResult = intl2.string(closure_0(closure_2[10]).t.tqClly);
                        } else {
                          tmp = closure_4;
                          tmp2 = closure_0;
                          tmp3 = closure_2;
                          intl = closure_0(closure_2[10]).intl;
                          string = intl.string;
                          tmp4 = closure_0;
                          tmp5 = closure_2;
                          t = closure_0(closure_2[10]).t;
                          if (closure_4) {
                            stringResult = string(t.wr33rW);
                          } else {
                            stringResult = string(t.B9sJLX);
                          }
                        }
                        return stringResult;
                      }
                    }
                    let intl2 = tmp(tmp2[10]).intl;
                    intl2.string(tmp(tmp2[10]).t.B9sJLX);
                  }
                }
                let tmp19 = null;
                if (tmp10) {
                  tmp19 = null;
                  if (!tmp11) {
                    let obj5 = { variant: "text-md/medium", color: "text-default", style: null, children: null };
                    class E {
                      constructor() {
                        if (closure_5) {
                          tmp7 = closure_0;
                          tmp8 = closure_2;
                          intl2 = closure_0(closure_2[10]).intl;
                          tmp9 = closure_0;
                          tmp10 = closure_2;
                          stringResult = intl2.string(closure_0(closure_2[10]).t.tqClly);
                        } else {
                          tmp = closure_4;
                          tmp2 = closure_0;
                          tmp3 = closure_2;
                          intl = closure_0(closure_2[10]).intl;
                          string = intl.string;
                          tmp4 = closure_0;
                          tmp5 = closure_2;
                          t = closure_0(closure_2[10]).t;
                          if (closure_4) {
                            stringResult = string(t.wr33rW);
                          } else {
                            stringResult = string(t.B9sJLX);
                          }
                        }
                        return stringResult;
                      }
                    }
                    let intl = tmp(tmp2[10]).intl;
                    obj5.children = intl.format(tmp(tmp2[10]).t.ZcpcyO, {});
                    tmp19 = jsx(tmp(tmp2[11]).Text, {
                      variant: "text-md/medium",
                      color: "text-default",
                      style: null,
                      children: null,
                    });
                  }
                }
                cResult[15] = tmp11;
                cResult[16] = tmp10;
                cResult[17] = tmp4;
                cResult[18] = tmp19;
                tmp18 = tmp19;
              }
              class E {
                constructor() {
                  if (closure_5) {
                    tmp7 = closure_0;
                    tmp8 = closure_2;
                    intl2 = closure_0(closure_2[10]).intl;
                    tmp9 = closure_0;
                    tmp10 = closure_2;
                    stringResult = intl2.string(closure_0(closure_2[10]).t.tqClly);
                  } else {
                    tmp = closure_4;
                    tmp2 = closure_0;
                    tmp3 = closure_2;
                    intl = closure_0(closure_2[10]).intl;
                    string = intl.string;
                    tmp4 = closure_0;
                    tmp5 = closure_2;
                    t = closure_0(closure_2[10]).t;
                    if (closure_4) {
                      stringResult = string(t.wr33rW);
                    } else {
                      stringResult = string(t.B9sJLX);
                    }
                  }
                  return stringResult;
                }
              }
              cResult[9] = tmp11;
              cResult[10] = tmp10;
              cResult[11] = E;
              tmp13 = E;
            }
          }
        }
      }
      _require = eventException(function* () {
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
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
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_0 = tmp2;
                const obj8 = guildId(recurrenceId[8]);
                if (closure_1_5) {
                  c1 = 2;
                  c2 = 1;
                  const obj5 = { value: obj8.deleteRecurrence(c1, closure_0, c2, eventException), done: false };
                  return obj5;
                } else {
                  c1 = 1;
                  c2 = 1;
                  const obj6 = { value: obj8.deleteGuildEvent(closure_0, c1), done: false };
                  return obj6;
                }
              }
            } else {
              if (1 === tmp5) {
                if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj7 = { value, done: true };
                  return obj7;
                }
              } else if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj = { value, done: true };
                return obj;
              }
              guildId(recurrenceId[9]).hideActionSheet();
              c2 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp17) {
            c2 = tmp;
            throw tmp17;
          }
        }
      });
      function handleConfirmClick() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      cResult[3] = eventException;
      cResult[4] = eventId;
      cResult[5] = guildId;
      cResult[6] = null != recurrenceId;
      cResult[7] = recurrenceId;
      cResult[8] = handleConfirmClick;
      tmp12 = handleConfirmClick;
    }
  : (eventException) => {
      ({ eventId: require, guildId: importDefault, recurrenceId } = eventException);
      eventException = eventException.eventException;
      closure_4 = undefined;
      closure_5 = async function _handleConfirmClick2() {
        if (dependencyMap === 2) {
          dependencyMap = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            dependencyMap = 2;
            if (0 === v1) {
              if (arg0 === 1) {
                dependencyMap = 3;
                throw value;
              } else if (arg0 === 2) {
                dependencyMap = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_0 = tmp4;
                const obj8 = v1(9178);
                if (GuildScheduledEventStore) {
                  v1 = 2;
                  dependencyMap = 1;
                  const obj5 = {
                    value: obj8.deleteRecurrence(importDefault, _require, recurrenceId, eventException),
                    done: false,
                  };
                  return obj5;
                } else {
                  v1 = 1;
                  dependencyMap = 1;
                  const obj6 = { value: obj8.deleteGuildEvent(_require, importDefault), done: false };
                  return obj6;
                }
              }
            } else {
              if (1 === tmp4) {
                if (arg0 === 1) {
                  dependencyMap = 3;
                  throw value;
                } else if (arg0 === 2) {
                  dependencyMap = 3;
                  const obj7 = { value, done: true };
                  return obj7;
                }
              } else if (arg0 === 1) {
                dependencyMap = 3;
                throw value;
              } else if (arg0 === 2) {
                dependencyMap = 3;
                const obj = { value, done: true };
                return obj;
              }
              v1(4854).hideActionSheet();
              dependencyMap = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp16) {
            dependencyMap = tmp;
            throw tmp16;
          }
        }
      };
      const tmp = closure_6();
      const items = [closure_4];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        GuildScheduledEventStore.getGuildScheduledEvent(_require),
      );
      let recurrence_rule;
      if (stateFromStores != null) {
        recurrence_rule = stateFromStores.recurrence_rule;
      }
      closure_4 = tmp7;
      const intl = require("util").intl;
      const string = intl.string;
      const t = require("util").t;
      if (null != recurrenceId) {
        let stringResult = string(t.tqClly);
      } else if (tmp6) {
        stringResult = string(t.wr33rW);
      } else {
        stringResult = string(t.B9sJLX);
      }
      const obj2 = { title: stringResult, content: null, extraContent: null, actions: null };
      const intl2 = require("util").intl;
      obj2.content = intl2.string(require("util").t.v2GWNQ);
      let tmp8Result = null;
      if (null != recurrence_rule) {
        tmp8Result = null;
        if (!tmp7) {
          let obj3 = { variant: "text-md/medium", color: "text-default", style: tmp.contentText, children: null };
          const intl3 = require("util").intl;
          obj3.children = intl3.format(require("util").t.ZcpcyO, {});
          tmp8Result = tmp8(require("Text/Text").Text, obj3);
        }
      }
      obj2.extraContent = tmp8Result;
      let obj4 = {
        variant: "destructive",
        onPress: function handleConfirmClick() {
          const self = this;
          const apply = closure_5.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        },
        text: null,
      };
      if (null != recurrence_rule) {
        if (!tmp7) {
          const intl4 = require("util").intl;
          let stringResult1 = intl4.string(require("util").t["8ZsNv5"]);
        }
        obj4.text = stringResult1;
        const items1 = [tmp8(tmp11, obj4, "delete")];
        let obj5 = { variant: "secondary", text: null };
        const intl6 = require("util").intl;
        obj5.text = intl6.string(require("util").t.oEAioF);
        items1[1] = tmp8(require("AlertModal").AlertActionButton, obj5, "cancel");
        obj2.actions = items1;
        return tmp8(require("AlertModal").AlertModal, obj2);
      }
      const intl5 = require("util").intl;
      stringResult1 = intl5.string(require("util").t.B9sJLX);
      let obj = require("initialize");
    };
