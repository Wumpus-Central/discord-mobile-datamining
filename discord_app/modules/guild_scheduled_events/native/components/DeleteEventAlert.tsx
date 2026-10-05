// === Module 9479: DeleteEventAlert ===

// Module 9479 (DeleteEventAlert)
import Fragment from "Fragment" /* 21 */;
import intl7 from "intl" /* 1126 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7037 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c2, eventId;

let jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ contentText: { textAlign: "center" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((eventId) => {
  let closure_5;
  let first;
  let recurrenceId;
  let tmp7;
  const tmp = eventId;
  let obj = eventId(recurrenceId[6]);
  const cResult = obj.c(32);
  eventId = eventId.eventId;
  const guildId = eventId.guildId;
  recurrenceId = eventId.recurrenceId;
  const eventException = eventId.eventException;
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [closure_4];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== eventId) {
    const fn = function s() {
      return GuildScheduledEventStore.getGuildScheduledEvent(eventId);
    };
    cResult[1] = eventId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(recurrenceId[7]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  let recurrence_rule;
  if (stateFromStores != null) {
    recurrence_rule = stateFromStores.recurrence_rule;
  }
  closure_4 = tmp10;
  jsx = tmp11;
  if (cResult[3] === eventException) {
    if (cResult[4] === eventId) {
      if (cResult[5] === guildId) {
        if (cResult[6] === null != recurrenceId) {
          let tmp12;
          if (cResult[7] === recurrenceId) {
            tmp12 = cResult[8];
          }
          if (cResult[9] === null != recurrenceId) {
            let tmp13;
            let tmp14;
            let tmp16;
            if (cResult[10] === null != recurrence_rule) {
              tmp13 = cResult[11];
            }
            if (cResult[12] !== tmp13) {
              const tmp13Result = tmp13();
              class E {
                constructor() {
                  let stringResult;
                  if (closure_5) {
                    const intl2 = intl7.intl;
                    stringResult = intl2.string(intl7.t.tqClly);
                  } else {
                    const intl = intl7.intl;
                    const string = intl.string;
                    const t = intl7.t;
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
              tmp14 = tmp13Result;
            } else {
              tmp14 = cResult[13];
            }
            class E {
              constructor() {
                let stringResult;
                if (closure_5) {
                  const intl2 = intl7.intl;
                  stringResult = intl2.string(intl7.t.tqClly);
                } else {
                  const intl = intl7.intl;
                  const string = intl.string;
                  const t = intl7.t;
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
                  let stringResult;
                  if (closure_5) {
                    const intl2 = intl7.intl;
                    stringResult = intl2.string(intl7.t.tqClly);
                  } else {
                    const intl = intl7.intl;
                    const string = intl.string;
                    const t = intl7.t;
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
              tmp16 = tmp17;
            } else {
              tmp16 = cResult[14];
            }
            if (cResult[15] === null != recurrenceId) {
              if (cResult[16] === null != recurrence_rule) {
                let tmp18;
                if (cResult[17] === tmp4) {
                  tmp18 = cResult[18];
                }
                if (cResult[19] === null != recurrenceId) {
                  if (cResult[22] === tmp12) {
                    let tmp23;
                    let tmp30;
                    if (cResult[23] === tmp21) {
                      tmp23 = cResult[24];
                    }
                    const _Symbol = Symbol;
                    class E {
                      constructor() {
                        let stringResult;
                        if (closure_5) {
                          const intl2 = intl7.intl;
                          stringResult = intl2.string(intl7.t.tqClly);
                        } else {
                          const intl = intl7.intl;
                          const string = intl.string;
                          const t = intl7.t;
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
                      class E {
                        constructor() {
                          let stringResult;
                          if (closure_5) {
                            const intl2 = intl7.intl;
                            stringResult = intl2.string(intl7.t.tqClly);
                          } else {
                            const intl = intl7.intl;
                            const string = intl.string;
                            const t = intl7.t;
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
                      const tmp29 = <tmp28 key="cancel" variant="secondary" text={intl3.string(tmp(recurrenceId[10]).t.oEAioF)} />;
                      cResult[25] = tmp29;
                    }
                    if (cResult[26] !== tmp23) {
                      const items1 = [tmp23, ];
                      class E {
                        constructor() {
                          let stringResult;
                          if (closure_5) {
                            const intl2 = intl7.intl;
                            stringResult = intl2.string(intl7.t.tqClly);
                          } else {
                            const intl = intl7.intl;
                            const string = intl.string;
                            const t = intl7.t;
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
                      tmp30 = items1;
                    } else {
                      tmp30 = cResult[27];
                    }
                    if (cResult[28] === tmp30) {
                      if (cResult[29] === tmp14) {
                        let tmp31;
                        if (cResult[30] === tmp18) {
                          tmp31 = cResult[31];
                        }
                        return tmp31;
                      }
                    }
                    const tmp33 = jsx(tmp(recurrenceId[12]).AlertModal, { title: tmp14, content: tmp16, extraContent: tmp18, actions: tmp30 });
                    cResult[28] = tmp30;
                    cResult[29] = tmp14;
                    cResult[30] = tmp18;
                    cResult[31] = tmp33;
                    tmp31 = tmp33;
                  }
                  class E {
                    constructor() {
                      let stringResult;
                      if (closure_5) {
                        const intl2 = intl7.intl;
                        stringResult = intl2.string(intl7.t.tqClly);
                      } else {
                        const intl = intl7.intl;
                        const string = intl.string;
                        const t = intl7.t;
                        if (closure_4) {
                          stringResult = string(t.wr33rW);
                        } else {
                          stringResult = string(t.B9sJLX);
                        }
                      }
                      return stringResult;
                    }
                  }
                  const tmp24 = jsx(tmp(recurrenceId[12]).AlertActionButton, { variant: "destructive", onPress: tmp12, text: tmp21 }, "delete");
                  cResult[22] = tmp12;
                  cResult[23] = tmp21;
                  cResult[24] = tmp24;
                  tmp23 = tmp24;
                }
                class E {
                  constructor() {
                    let stringResult;
                    if (closure_5) {
                      const intl2 = intl7.intl;
                      stringResult = intl2.string(intl7.t.tqClly);
                    } else {
                      const intl = intl7.intl;
                      const string = intl.string;
                      const t = intl7.t;
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
                let stringResult = intl2.string(tmp(tmp2[10]).t.B9sJLX);
              }
            }
            let tmp19 = null;
            if (null != recurrence_rule) {
              tmp19 = null;
              if (null == recurrenceId) {
                class E {
                  constructor() {
                    let stringResult;
                    if (closure_5) {
                      const intl2 = intl7.intl;
                      stringResult = intl2.string(intl7.t.tqClly);
                    } else {
                      const intl = intl7.intl;
                      const string = intl.string;
                      const t = intl7.t;
                      if (closure_4) {
                        stringResult = string(t.wr33rW);
                      } else {
                        stringResult = string(t.B9sJLX);
                      }
                    }
                    return stringResult;
                  }
                }
                const Text = tmp(tmp2[11]).Text;
                let intl = tmp(tmp2[10]).intl;
                tmp19 = <Text variant="text-md/medium" color="text-default" style={null}>{intl.format(tmp(recurrenceId[10]).t.ZcpcyO, {})}</Text>;
              }
            }
            cResult[15] = null != recurrenceId;
            cResult[16] = null != recurrence_rule;
            cResult[17] = tmp4;
            cResult[18] = tmp19;
            tmp18 = tmp19;
          }
          class E {
            constructor() {
              let stringResult;
              if (closure_5) {
                const intl2 = intl7.intl;
                stringResult = intl2.string(intl7.t.tqClly);
              } else {
                const intl = intl7.intl;
                const string = intl.string;
                const t = intl7.t;
                if (closure_4) {
                  stringResult = string(t.wr33rW);
                } else {
                  stringResult = string(t.B9sJLX);
                }
              }
              return stringResult;
            }
          }
          cResult[9] = null != recurrenceId;
          cResult[10] = null != recurrence_rule;
          cResult[11] = E;
          tmp13 = E;
        }
      }
    }
  }
  _require = eventException(function*() {
    if (c2 === 2) {
      c2 = 3;
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
            closure_0 = tmp;
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
          if (1 === tmp4) {
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
          const obj2 = guildId(recurrenceId[9]);
          obj2.hideActionSheet();
          c2 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp16) {
        c2 = 3;
        throw tmp16;
      }
    }
  });
  function handleConfirmClick() {
    return closure_0(...arguments);
  }
  cResult[3] = eventException;
  cResult[4] = eventId;
  cResult[5] = guildId;
  cResult[6] = null != recurrenceId;
  cResult[7] = recurrenceId;
  cResult[8] = handleConfirmClick;
  tmp12 = handleConfirmClick;
}) : ((eventException) => {
  let intl2;
  let intl3;
  let intl6;
  let recurrenceId;
  let require;
  let stringResult;
  let tmp8Result;
  ({ eventId: require, guildId: importDefault, recurrenceId } = eventException);
  eventException = eventException.eventException;
  let closure_4;
  let obj = function _handleConfirmClick2() {
    obj = _asyncToGenerator(async () => {
      let v1;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
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
          if (0 === v1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_0 = tmp3;
              const obj8 = v1(c2[8]);
              if (closure_2_4) {
                v1 = 2;
                c2 = 1;
                const obj5 = { value: obj8.deleteRecurrence(importDefault, _require, recurrenceId, eventException), done: false };
                return obj5;
              } else {
                v1 = 1;
                c2 = 1;
                const obj6 = { value: obj8.deleteGuildEvent(_require, importDefault), done: false };
                return obj6;
              }
            }
          } else {
            if (1 === v1) {
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
              obj = { value, done: true };
              return obj;
            }
            const obj2 = v1(c2[9]);
            obj2.hideActionSheet();
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp15) {
          c2 = 3;
          throw tmp15;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_6();
  obj = require("get initialized");
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => GuildScheduledEventStore.getGuildScheduledEvent(_require));
  let recurrence_rule;
  if (stateFromStores != null) {
    recurrence_rule = stateFromStores.recurrence_rule;
  }
  closure_4 = tmp7;
  const AlertModal = require("AlertModal").AlertModal;
  const intl = require("intl").intl;
  const string = intl.string;
  const t = require("intl").t;
  if (null != recurrenceId) {
    stringResult = string(t.tqClly);
  } else if (null != recurrence_rule) {
    stringResult = string(t.wr33rW);
  } else {
    stringResult = string(t.B9sJLX);
  }
  let obj2 = { title: stringResult, content: intl2.string(require("intl").t.v2GWNQ), extraContent: tmp8Result, actions: null };
  intl2 = require("intl").intl;
  tmp8Result = null;
  if (null != recurrence_rule) {
    tmp8Result = null;
    if (null == recurrenceId) {
      let obj3 = { variant: "text-md/medium", color: "text-default", style: tmp.contentText, children: intl3.format(require("intl").t.ZcpcyO, {}) };
      const Text = require("Text/Text").Text;
      intl3 = require("intl").intl;
      tmp8Result = tmp8(Text, obj3);
    }
  }
  let obj4 = {
    variant: "destructive",
    onPress: function handleConfirmClick() {
      return obj(...arguments);
    },
    text: null
  };
  if (null != recurrence_rule) {
    let stringResult1;
    if (null == recurrenceId) {
      const intl4 = require("intl").intl;
      stringResult1 = intl4.string(require("intl").t["8ZsNv5"]);
    }
    obj4.text = stringResult1;
    const items1 = [obj(tmp11, obj4, "delete"), ];
    let obj5 = { variant: "secondary", text: intl6.string(require("intl").t.oEAioF) };
    const AlertActionButton = require("AlertModal").AlertActionButton;
    intl6 = require("intl").intl;
    items1[1] = obj(AlertActionButton, obj5, "cancel");
    obj2.actions = items1;
    return obj(AlertModal, obj2);
  }
  const intl5 = require("intl").intl;
  stringResult1 = intl5.string(require("intl").t.B9sJLX);
});
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/DeleteEventAlert.tsx");

export default tmp3;