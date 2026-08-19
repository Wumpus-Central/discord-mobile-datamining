// _runtime/00872__notifyEventProcessors.js
import SyncPromise from "00873_SyncPromise.js";

require = arg1;
let dependencyMap = arg6;
function _notifyEventProcessors(tmpResult, arg1, arg2, arg3) {
  const _require = arg1;
  dependencyMap = arg2;
  _notifyEventProcessors = arg3;
  if (tmpResult) {
    if (tmp) {
      const obj = {};
      const merged = Object.assign(tmpResult);
      tmpResult = tmp(obj, arg1);
      let DEBUG_BUILD = require("metro/00823___SENTRY_DEBUG__.js").DEBUG_BUILD;
      if (DEBUG_BUILD) {
        DEBUG_BUILD = null === tmpResult;
      }
      if (DEBUG_BUILD) {
        const debug = tmp5(824).debug;
        let str = tmp.id;
        if (!str) {
          str = "?";
        }
        const _HermesInternal = HermesInternal;
        debug.log("Event processor \"" + str + "\" dropped event");
      }
      if (tmp5Result.isThenable(tmpResult)) {
        let nextPromise = tmpResult.then((result) => {
          let sum = sum1 + 1;
          sum1 = sum;
          let tmp5 = result;
          if (result) {
            tmp5 = result;
            if (tmp4) {
              let obj = {};
              let merged = Object.assign(result);
              let tmp4Result = tmp4(obj, tmp);
              let DEBUG_BUILD = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
              if (DEBUG_BUILD) {
                DEBUG_BUILD = null === tmp4Result;
              }
              if (DEBUG_BUILD) {
                let debug = closure_1_0(closure_1_1[3]).debug;
                let str = tmp4.id;
                if (!str) {
                  str = "?";
                }
                let _HermesInternal = HermesInternal;
                debug.log("Event processor \"" + str + "\" dropped event");
              }
              let tmp9Result = closure_1_0(closure_1_1[0]);
              if (tmp9Result.isThenable(tmp4Result)) {
                let nextPromise = tmp4Result.then((result) => {
                  let sum = sum1 + 1;
                  sum1 = sum;
                  let tmp5 = result;
                  if (result) {
                    tmp5 = result;
                    if (tmp4) {
                      let obj = {};
                      let merged = Object.assign(result);
                      let tmp4Result = tmp4(obj, tmp);
                      let DEBUG_BUILD = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                      if (DEBUG_BUILD) {
                        DEBUG_BUILD = null === tmp4Result;
                      }
                      if (DEBUG_BUILD) {
                        let debug = closure_1_0(closure_1_1[3]).debug;
                        let str = tmp4.id;
                        if (!str) {
                          str = "?";
                        }
                        let _HermesInternal = HermesInternal;
                        debug.log("Event processor \"" + str + "\" dropped event");
                      }
                      let tmp9Result = closure_1_0(closure_1_1[0]);
                      if (tmp9Result.isThenable(tmp4Result)) {
                        let nextPromise = tmp4Result.then((result) => {
                          let sum = sum1 + 1;
                          sum1 = sum;
                          let tmp5 = result;
                          if (result) {
                            tmp5 = result;
                            if (tmp4) {
                              let obj = {};
                              let merged = Object.assign(result);
                              let tmp4Result = tmp4(obj, tmp);
                              let DEBUG_BUILD = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                              if (DEBUG_BUILD) {
                                DEBUG_BUILD = null === tmp4Result;
                              }
                              if (DEBUG_BUILD) {
                                let debug = closure_1_0(closure_1_1[3]).debug;
                                let str = tmp4.id;
                                if (!str) {
                                  str = "?";
                                }
                                let _HermesInternal = HermesInternal;
                                debug.log("Event processor \"" + str + "\" dropped event");
                              }
                              let tmp9Result = closure_1_0(closure_1_1[0]);
                              if (tmp9Result.isThenable(tmp4Result)) {
                                let nextPromise = tmp4Result.then((result) => {
                                  let sum = sum1 + 1;
                                  sum1 = sum;
                                  let tmp5 = result;
                                  if (result) {
                                    tmp5 = result;
                                    if (tmp4) {
                                      let obj = {};
                                      let merged = Object.assign(result);
                                      let tmp4Result = tmp4(obj, tmp);
                                      let DEBUG_BUILD = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                                      if (DEBUG_BUILD) {
                                        DEBUG_BUILD = null === tmp4Result;
                                      }
                                      if (DEBUG_BUILD) {
                                        let debug = closure_1_0(closure_1_1[3]).debug;
                                        let str = tmp4.id;
                                        if (!str) {
                                          str = "?";
                                        }
                                        let _HermesInternal = HermesInternal;
                                        debug.log("Event processor \"" + str + "\" dropped event");
                                      }
                                      let tmp9Result = closure_1_0(closure_1_1[0]);
                                      if (tmp9Result.isThenable(tmp4Result)) {
                                        let nextPromise = tmp4Result.then(() => { ... });
                                      } else {
                                        sum1 = sum + 1;
                                        closure_0 = tmp;
                                        let table = tmp2;
                                        nextPromise = tmp4Result;
                                        if (tmp4Result) {
                                          nextPromise = tmp4Result;
                                          if (tmp15) {
                                            obj = {};
                                            let merged1 = Object.assign(tmp4Result);
                                            let tmp15Result = tmp15(obj, tmp);
                                            let DEBUG_BUILD2 = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                                            if (DEBUG_BUILD2) {
                                              DEBUG_BUILD2 = null === tmp15Result;
                                            }
                                            if (DEBUG_BUILD2) {
                                              let debug2 = closure_1_0(closure_1_1[3]).debug;
                                              let str4 = tmp15.id;
                                              if (!str4) {
                                                str4 = "?";
                                              }
                                              let _HermesInternal2 = HermesInternal;
                                              debug2.log("Event processor \"" + str4 + "\" dropped event");
                                            }
                                            tmp9Result = closure_1_0(closure_1_1[0]);
                                            if (tmp9Result.isThenable(tmp15Result)) {
                                              let nextPromise1 = tmp15Result.then(() => { ... });
                                            } else {
                                              nextPromise1 = closure_1_2(tmp15Result, tmp, tmp2, sum1 + 1);
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  return tmp5;
                                });
                              } else {
                                sum1 = sum + 1;
                                closure_0 = tmp;
                                let table = tmp2;
                                nextPromise = tmp4Result;
                                if (tmp4Result) {
                                  nextPromise = tmp4Result;
                                  if (tmp15) {
                                    obj = {};
                                    let merged1 = Object.assign(tmp4Result);
                                    let tmp15Result = tmp15(obj, tmp);
                                    let DEBUG_BUILD2 = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                                    if (DEBUG_BUILD2) {
                                      DEBUG_BUILD2 = null === tmp15Result;
                                    }
                                    if (DEBUG_BUILD2) {
                                      let debug2 = closure_1_0(closure_1_1[3]).debug;
                                      let str4 = tmp15.id;
                                      if (!str4) {
                                        str4 = "?";
                                      }
                                      let _HermesInternal2 = HermesInternal;
                                      debug2.log("Event processor \"" + str4 + "\" dropped event");
                                    }
                                    tmp9Result = closure_1_0(closure_1_1[0]);
                                    if (tmp9Result.isThenable(tmp15Result)) {
                                      let nextPromise1 = tmp15Result.then((result) => {
                                        let sum = sum1 + 1;
                                        sum1 = sum;
                                        let tmp5 = result;
                                        if (result) {
                                          tmp5 = result;
                                          if (tmp4) {
                                            let obj = {};
                                            let merged = Object.assign(result);
                                            let tmp4Result = tmp4(obj, tmp);
                                            let DEBUG_BUILD = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                                            if (DEBUG_BUILD) {
                                              DEBUG_BUILD = null === tmp4Result;
                                            }
                                            if (DEBUG_BUILD) {
                                              let debug = closure_1_0(closure_1_1[3]).debug;
                                              let str = tmp4.id;
                                              if (!str) {
                                                str = "?";
                                              }
                                              let _HermesInternal = HermesInternal;
                                              debug.log("Event processor \"" + str + "\" dropped event");
                                            }
                                            let tmp9Result = closure_1_0(closure_1_1[0]);
                                            if (tmp9Result.isThenable(tmp4Result)) {
                                              let nextPromise = tmp4Result.then(() => { ... });
                                            } else {
                                              sum1 = sum + 1;
                                              closure_0 = tmp;
                                              let table = tmp2;
                                              nextPromise = tmp4Result;
                                              if (tmp4Result) {
                                                nextPromise = tmp4Result;
                                                if (tmp15) {
                                                  obj = {};
                                                  let merged1 = Object.assign(tmp4Result);
                                                  let tmp15Result = tmp15(obj, tmp);
                                                  let DEBUG_BUILD2 = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                                                  if (DEBUG_BUILD2) {
                                                    DEBUG_BUILD2 = null === tmp15Result;
                                                  }
                                                  if (DEBUG_BUILD2) {
                                                    let debug2 = closure_1_0(closure_1_1[3]).debug;
                                                    let str4 = tmp15.id;
                                                    if (!str4) {
                                                      str4 = "?";
                                                    }
                                                    let _HermesInternal2 = HermesInternal;
                                                    debug2.log("Event processor \"" + str4 + "\" dropped event");
                                                  }
                                                  tmp9Result = closure_1_0(closure_1_1[0]);
                                                  if (tmp9Result.isThenable(tmp15Result)) {
                                                    let nextPromise1 = tmp15Result.then(() => { ... });
                                                  } else {
                                                    nextPromise1 = closure_1_2(tmp15Result, tmp, tmp2, sum1 + 1);
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        return tmp5;
                                      });
                                    } else {
                                      nextPromise1 = closure_1_2(tmp15Result, tmp, tmp2, sum1 + 1);
                                    }
                                  }
                                }
                              }
                            }
                          }
                          return tmp5;
                        });
                      } else {
                        sum1 = sum + 1;
                        closure_0 = tmp;
                        let table = tmp2;
                        nextPromise = tmp4Result;
                        if (tmp4Result) {
                          nextPromise = tmp4Result;
                          if (tmp15) {
                            obj = {};
                            let merged1 = Object.assign(tmp4Result);
                            let tmp15Result = tmp15(obj, tmp);
                            let DEBUG_BUILD2 = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                            if (DEBUG_BUILD2) {
                              DEBUG_BUILD2 = null === tmp15Result;
                            }
                            if (DEBUG_BUILD2) {
                              let debug2 = closure_1_0(closure_1_1[3]).debug;
                              let str4 = tmp15.id;
                              if (!str4) {
                                str4 = "?";
                              }
                              let _HermesInternal2 = HermesInternal;
                              debug2.log("Event processor \"" + str4 + "\" dropped event");
                            }
                            tmp9Result = closure_1_0(closure_1_1[0]);
                            if (tmp9Result.isThenable(tmp15Result)) {
                              let nextPromise1 = tmp15Result.then((result) => {
                                let sum = sum1 + 1;
                                sum1 = sum;
                                let tmp5 = result;
                                if (result) {
                                  tmp5 = result;
                                  if (tmp4) {
                                    let obj = {};
                                    let merged = Object.assign(result);
                                    let tmp4Result = tmp4(obj, tmp);
                                    let DEBUG_BUILD = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                                    if (DEBUG_BUILD) {
                                      DEBUG_BUILD = null === tmp4Result;
                                    }
                                    if (DEBUG_BUILD) {
                                      let debug = closure_1_0(closure_1_1[3]).debug;
                                      let str = tmp4.id;
                                      if (!str) {
                                        str = "?";
                                      }
                                      let _HermesInternal = HermesInternal;
                                      debug.log("Event processor \"" + str + "\" dropped event");
                                    }
                                    let tmp9Result = closure_1_0(closure_1_1[0]);
                                    if (tmp9Result.isThenable(tmp4Result)) {
                                      let nextPromise = tmp4Result.then((result) => {
                                        let sum = sum1 + 1;
                                        sum1 = sum;
                                        let tmp5 = result;
                                        if (result) {
                                          tmp5 = result;
                                          if (tmp4) {
                                            let obj = {};
                                            let merged = Object.assign(result);
                                            let tmp4Result = tmp4(obj, tmp);
                                            let DEBUG_BUILD = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                                            if (DEBUG_BUILD) {
                                              DEBUG_BUILD = null === tmp4Result;
                                            }
                                            if (DEBUG_BUILD) {
                                              let debug = closure_1_0(closure_1_1[3]).debug;
                                              let str = tmp4.id;
                                              if (!str) {
                                                str = "?";
                                              }
                                              let _HermesInternal = HermesInternal;
                                              debug.log("Event processor \"" + str + "\" dropped event");
                                            }
                                            let tmp9Result = closure_1_0(closure_1_1[0]);
                                            if (tmp9Result.isThenable(tmp4Result)) {
                                              let nextPromise = tmp4Result.then(() => { ... });
                                            } else {
                                              sum1 = sum + 1;
                                              closure_0 = tmp;
                                              let table = tmp2;
                                              nextPromise = tmp4Result;
                                              if (tmp4Result) {
                                                nextPromise = tmp4Result;
                                                if (tmp15) {
                                                  obj = {};
                                                  let merged1 = Object.assign(tmp4Result);
                                                  let tmp15Result = tmp15(obj, tmp);
                                                  let DEBUG_BUILD2 = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                                                  if (DEBUG_BUILD2) {
                                                    DEBUG_BUILD2 = null === tmp15Result;
                                                  }
                                                  if (DEBUG_BUILD2) {
                                                    let debug2 = closure_1_0(closure_1_1[3]).debug;
                                                    let str4 = tmp15.id;
                                                    if (!str4) {
                                                      str4 = "?";
                                                    }
                                                    let _HermesInternal2 = HermesInternal;
                                                    debug2.log("Event processor \"" + str4 + "\" dropped event");
                                                  }
                                                  tmp9Result = closure_1_0(closure_1_1[0]);
                                                  if (tmp9Result.isThenable(tmp15Result)) {
                                                    let nextPromise1 = tmp15Result.then(() => { ... });
                                                  } else {
                                                    nextPromise1 = closure_1_2(tmp15Result, tmp, tmp2, sum1 + 1);
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        return tmp5;
                                      });
                                    } else {
                                      sum1 = sum + 1;
                                      closure_0 = tmp;
                                      let table = tmp2;
                                      nextPromise = tmp4Result;
                                      if (tmp4Result) {
                                        nextPromise = tmp4Result;
                                        if (tmp15) {
                                          obj = {};
                                          let merged1 = Object.assign(tmp4Result);
                                          let tmp15Result = tmp15(obj, tmp);
                                          let DEBUG_BUILD2 = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                                          if (DEBUG_BUILD2) {
                                            DEBUG_BUILD2 = null === tmp15Result;
                                          }
                                          if (DEBUG_BUILD2) {
                                            let debug2 = closure_1_0(closure_1_1[3]).debug;
                                            let str4 = tmp15.id;
                                            if (!str4) {
                                              str4 = "?";
                                            }
                                            let _HermesInternal2 = HermesInternal;
                                            debug2.log("Event processor \"" + str4 + "\" dropped event");
                                          }
                                          tmp9Result = closure_1_0(closure_1_1[0]);
                                          if (tmp9Result.isThenable(tmp15Result)) {
                                            let nextPromise1 = tmp15Result.then((result) => {
                                              let sum = sum1 + 1;
                                              sum1 = sum;
                                              let tmp5 = result;
                                              if (result) {
                                                tmp5 = result;
                                                if (tmp4) {
                                                  let obj = {};
                                                  let merged = Object.assign(result);
                                                  let tmp4Result = tmp4(obj, tmp);
                                                  let DEBUG_BUILD = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                                                  if (DEBUG_BUILD) {
                                                    DEBUG_BUILD = null === tmp4Result;
                                                  }
                                                  if (DEBUG_BUILD) {
                                                    let debug = closure_1_0(closure_1_1[3]).debug;
                                                    let str = tmp4.id;
                                                    if (!str) {
                                                      str = "?";
                                                    }
                                                    let _HermesInternal = HermesInternal;
                                                    debug.log("Event processor \"" + str + "\" dropped event");
                                                  }
                                                  let tmp9Result = closure_1_0(closure_1_1[0]);
                                                  if (tmp9Result.isThenable(tmp4Result)) {
                                                    let nextPromise = tmp4Result.then(() => { ... });
                                                  } else {
                                                    sum1 = sum + 1;
                                                    closure_0 = tmp;
                                                    let table = tmp2;
                                                    nextPromise = tmp4Result;
                                                    if (tmp4Result) {
                                                      nextPromise = tmp4Result;
                                                      if (tmp15) {
                                                        obj = {};
                                                        let merged1 = Object.assign(tmp4Result);
                                                        let tmp15Result = tmp15(obj, tmp);
                                                        let DEBUG_BUILD2 = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                                                        if (DEBUG_BUILD2) {
                                                          DEBUG_BUILD2 = null === tmp15Result;
                                                        }
                                                        if (DEBUG_BUILD2) {
                                                          let debug2 = closure_1_0(closure_1_1[3]).debug;
                                                          let str4 = tmp15.id;
                                                          if (!str4) {
                                                            str4 = "?";
                                                          }
                                                          let _HermesInternal2 = HermesInternal;
                                                          debug2.log("Event processor \"" + str4 + "\" dropped event");
                                                        }
                                                        tmp9Result = closure_1_0(closure_1_1[0]);
                                                        if (tmp9Result.isThenable(tmp15Result)) {
                                                          let nextPromise1 = tmp15Result.then(() => { ... });
                                                        } else {
                                                          nextPromise1 = closure_1_2(tmp15Result, tmp, tmp2, sum1 + 1);
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              return tmp5;
                                            });
                                          } else {
                                            nextPromise1 = closure_1_2(tmp15Result, tmp, tmp2, sum1 + 1);
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                return tmp5;
                              });
                            } else {
                              nextPromise1 = closure_1_2(tmp15Result, tmp, tmp2, sum1 + 1);
                            }
                          }
                        }
                      }
                    }
                  }
                  return tmp5;
                });
              } else {
                sum1 = sum + 1;
                closure_0 = tmp;
                let table = tmp2;
                nextPromise = tmp4Result;
                if (tmp4Result) {
                  nextPromise = tmp4Result;
                  if (tmp15) {
                    obj = {};
                    let merged1 = Object.assign(tmp4Result);
                    let tmp15Result = tmp15(obj, tmp);
                    let DEBUG_BUILD2 = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                    if (DEBUG_BUILD2) {
                      DEBUG_BUILD2 = null === tmp15Result;
                    }
                    if (DEBUG_BUILD2) {
                      let debug2 = closure_1_0(closure_1_1[3]).debug;
                      let str4 = tmp15.id;
                      if (!str4) {
                        str4 = "?";
                      }
                      let _HermesInternal2 = HermesInternal;
                      debug2.log("Event processor \"" + str4 + "\" dropped event");
                    }
                    tmp9Result = closure_1_0(closure_1_1[0]);
                    if (tmp9Result.isThenable(tmp15Result)) {
                      let nextPromise1 = tmp15Result.then((result) => {
                        let sum = sum1 + 1;
                        sum1 = sum;
                        let tmp5 = result;
                        if (result) {
                          tmp5 = result;
                          if (tmp4) {
                            let obj = {};
                            let merged = Object.assign(result);
                            let tmp4Result = tmp4(obj, tmp);
                            let DEBUG_BUILD = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                            if (DEBUG_BUILD) {
                              DEBUG_BUILD = null === tmp4Result;
                            }
                            if (DEBUG_BUILD) {
                              let debug = closure_1_0(closure_1_1[3]).debug;
                              let str = tmp4.id;
                              if (!str) {
                                str = "?";
                              }
                              let _HermesInternal = HermesInternal;
                              debug.log("Event processor \"" + str + "\" dropped event");
                            }
                            let tmp9Result = closure_1_0(closure_1_1[0]);
                            if (tmp9Result.isThenable(tmp4Result)) {
                              let nextPromise = tmp4Result.then((result) => {
                                let sum = sum1 + 1;
                                sum1 = sum;
                                let tmp5 = result;
                                if (result) {
                                  tmp5 = result;
                                  if (tmp4) {
                                    let obj = {};
                                    let merged = Object.assign(result);
                                    let tmp4Result = tmp4(obj, tmp);
                                    let DEBUG_BUILD = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                                    if (DEBUG_BUILD) {
                                      DEBUG_BUILD = null === tmp4Result;
                                    }
                                    if (DEBUG_BUILD) {
                                      let debug = closure_1_0(closure_1_1[3]).debug;
                                      let str = tmp4.id;
                                      if (!str) {
                                        str = "?";
                                      }
                                      let _HermesInternal = HermesInternal;
                                      debug.log("Event processor \"" + str + "\" dropped event");
                                    }
                                    let tmp9Result = closure_1_0(closure_1_1[0]);
                                    if (tmp9Result.isThenable(tmp4Result)) {
                                      let nextPromise = tmp4Result.then((result) => {
                                        let sum = sum1 + 1;
                                        sum1 = sum;
                                        let tmp5 = result;
                                        if (result) {
                                          tmp5 = result;
                                          if (tmp4) {
                                            let obj = {};
                                            let merged = Object.assign(result);
                                            let tmp4Result = tmp4(obj, tmp);
                                            let DEBUG_BUILD = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                                            if (DEBUG_BUILD) {
                                              DEBUG_BUILD = null === tmp4Result;
                                            }
                                            if (DEBUG_BUILD) {
                                              let debug = closure_1_0(closure_1_1[3]).debug;
                                              let str = tmp4.id;
                                              if (!str) {
                                                str = "?";
                                              }
                                              let _HermesInternal = HermesInternal;
                                              debug.log("Event processor \"" + str + "\" dropped event");
                                            }
                                            let tmp9Result = closure_1_0(closure_1_1[0]);
                                            if (tmp9Result.isThenable(tmp4Result)) {
                                              let nextPromise = tmp4Result.then(() => { ... });
                                            } else {
                                              sum1 = sum + 1;
                                              closure_0 = tmp;
                                              let table = tmp2;
                                              nextPromise = tmp4Result;
                                              if (tmp4Result) {
                                                nextPromise = tmp4Result;
                                                if (tmp15) {
                                                  obj = {};
                                                  let merged1 = Object.assign(tmp4Result);
                                                  let tmp15Result = tmp15(obj, tmp);
                                                  let DEBUG_BUILD2 = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                                                  if (DEBUG_BUILD2) {
                                                    DEBUG_BUILD2 = null === tmp15Result;
                                                  }
                                                  if (DEBUG_BUILD2) {
                                                    let debug2 = closure_1_0(closure_1_1[3]).debug;
                                                    let str4 = tmp15.id;
                                                    if (!str4) {
                                                      str4 = "?";
                                                    }
                                                    let _HermesInternal2 = HermesInternal;
                                                    debug2.log("Event processor \"" + str4 + "\" dropped event");
                                                  }
                                                  tmp9Result = closure_1_0(closure_1_1[0]);
                                                  if (tmp9Result.isThenable(tmp15Result)) {
                                                    let nextPromise1 = tmp15Result.then(() => { ... });
                                                  } else {
                                                    nextPromise1 = closure_1_2(tmp15Result, tmp, tmp2, sum1 + 1);
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        return tmp5;
                                      });
                                    } else {
                                      sum1 = sum + 1;
                                      closure_0 = tmp;
                                      let table = tmp2;
                                      nextPromise = tmp4Result;
                                      if (tmp4Result) {
                                        nextPromise = tmp4Result;
                                        if (tmp15) {
                                          obj = {};
                                          let merged1 = Object.assign(tmp4Result);
                                          let tmp15Result = tmp15(obj, tmp);
                                          let DEBUG_BUILD2 = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                                          if (DEBUG_BUILD2) {
                                            DEBUG_BUILD2 = null === tmp15Result;
                                          }
                                          if (DEBUG_BUILD2) {
                                            let debug2 = closure_1_0(closure_1_1[3]).debug;
                                            let str4 = tmp15.id;
                                            if (!str4) {
                                              str4 = "?";
                                            }
                                            let _HermesInternal2 = HermesInternal;
                                            debug2.log("Event processor \"" + str4 + "\" dropped event");
                                          }
                                          tmp9Result = closure_1_0(closure_1_1[0]);
                                          if (tmp9Result.isThenable(tmp15Result)) {
                                            let nextPromise1 = tmp15Result.then((result) => {
                                              let sum = sum1 + 1;
                                              sum1 = sum;
                                              let tmp5 = result;
                                              if (result) {
                                                tmp5 = result;
                                                if (tmp4) {
                                                  let obj = {};
                                                  let merged = Object.assign(result);
                                                  let tmp4Result = tmp4(obj, tmp);
                                                  let DEBUG_BUILD = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                                                  if (DEBUG_BUILD) {
                                                    DEBUG_BUILD = null === tmp4Result;
                                                  }
                                                  if (DEBUG_BUILD) {
                                                    let debug = closure_1_0(closure_1_1[3]).debug;
                                                    let str = tmp4.id;
                                                    if (!str) {
                                                      str = "?";
                                                    }
                                                    let _HermesInternal = HermesInternal;
                                                    debug.log("Event processor \"" + str + "\" dropped event");
                                                  }
                                                  let tmp9Result = closure_1_0(closure_1_1[0]);
                                                  if (tmp9Result.isThenable(tmp4Result)) {
                                                    let nextPromise = tmp4Result.then(() => { ... });
                                                  } else {
                                                    sum1 = sum + 1;
                                                    closure_0 = tmp;
                                                    let table = tmp2;
                                                    nextPromise = tmp4Result;
                                                    if (tmp4Result) {
                                                      nextPromise = tmp4Result;
                                                      if (tmp15) {
                                                        obj = {};
                                                        let merged1 = Object.assign(tmp4Result);
                                                        let tmp15Result = tmp15(obj, tmp);
                                                        let DEBUG_BUILD2 = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                                                        if (DEBUG_BUILD2) {
                                                          DEBUG_BUILD2 = null === tmp15Result;
                                                        }
                                                        if (DEBUG_BUILD2) {
                                                          let debug2 = closure_1_0(closure_1_1[3]).debug;
                                                          let str4 = tmp15.id;
                                                          if (!str4) {
                                                            str4 = "?";
                                                          }
                                                          let _HermesInternal2 = HermesInternal;
                                                          debug2.log("Event processor \"" + str4 + "\" dropped event");
                                                        }
                                                        tmp9Result = closure_1_0(closure_1_1[0]);
                                                        if (tmp9Result.isThenable(tmp15Result)) {
                                                          let nextPromise1 = tmp15Result.then(() => { ... });
                                                        } else {
                                                          nextPromise1 = closure_1_2(tmp15Result, tmp, tmp2, sum1 + 1);
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              return tmp5;
                                            });
                                          } else {
                                            nextPromise1 = closure_1_2(tmp15Result, tmp, tmp2, sum1 + 1);
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                return tmp5;
                              });
                            } else {
                              sum1 = sum + 1;
                              closure_0 = tmp;
                              let table = tmp2;
                              nextPromise = tmp4Result;
                              if (tmp4Result) {
                                nextPromise = tmp4Result;
                                if (tmp15) {
                                  obj = {};
                                  let merged1 = Object.assign(tmp4Result);
                                  let tmp15Result = tmp15(obj, tmp);
                                  let DEBUG_BUILD2 = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                                  if (DEBUG_BUILD2) {
                                    DEBUG_BUILD2 = null === tmp15Result;
                                  }
                                  if (DEBUG_BUILD2) {
                                    let debug2 = closure_1_0(closure_1_1[3]).debug;
                                    let str4 = tmp15.id;
                                    if (!str4) {
                                      str4 = "?";
                                    }
                                    let _HermesInternal2 = HermesInternal;
                                    debug2.log("Event processor \"" + str4 + "\" dropped event");
                                  }
                                  tmp9Result = closure_1_0(closure_1_1[0]);
                                  if (tmp9Result.isThenable(tmp15Result)) {
                                    let nextPromise1 = tmp15Result.then((result) => {
                                      let sum = sum1 + 1;
                                      sum1 = sum;
                                      let tmp5 = result;
                                      if (result) {
                                        tmp5 = result;
                                        if (tmp4) {
                                          let obj = {};
                                          let merged = Object.assign(result);
                                          let tmp4Result = tmp4(obj, tmp);
                                          let DEBUG_BUILD = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                                          if (DEBUG_BUILD) {
                                            DEBUG_BUILD = null === tmp4Result;
                                          }
                                          if (DEBUG_BUILD) {
                                            let debug = closure_1_0(closure_1_1[3]).debug;
                                            let str = tmp4.id;
                                            if (!str) {
                                              str = "?";
                                            }
                                            let _HermesInternal = HermesInternal;
                                            debug.log("Event processor \"" + str + "\" dropped event");
                                          }
                                          let tmp9Result = closure_1_0(closure_1_1[0]);
                                          if (tmp9Result.isThenable(tmp4Result)) {
                                            let nextPromise = tmp4Result.then((result) => {
                                              let sum = sum1 + 1;
                                              sum1 = sum;
                                              let tmp5 = result;
                                              if (result) {
                                                tmp5 = result;
                                                if (tmp4) {
                                                  let obj = {};
                                                  let merged = Object.assign(result);
                                                  let tmp4Result = tmp4(obj, tmp);
                                                  let DEBUG_BUILD = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                                                  if (DEBUG_BUILD) {
                                                    DEBUG_BUILD = null === tmp4Result;
                                                  }
                                                  if (DEBUG_BUILD) {
                                                    let debug = closure_1_0(closure_1_1[3]).debug;
                                                    let str = tmp4.id;
                                                    if (!str) {
                                                      str = "?";
                                                    }
                                                    let _HermesInternal = HermesInternal;
                                                    debug.log("Event processor \"" + str + "\" dropped event");
                                                  }
                                                  let tmp9Result = closure_1_0(closure_1_1[0]);
                                                  if (tmp9Result.isThenable(tmp4Result)) {
                                                    let nextPromise = tmp4Result.then(() => { ... });
                                                  } else {
                                                    sum1 = sum + 1;
                                                    closure_0 = tmp;
                                                    let table = tmp2;
                                                    nextPromise = tmp4Result;
                                                    if (tmp4Result) {
                                                      nextPromise = tmp4Result;
                                                      if (tmp15) {
                                                        obj = {};
                                                        let merged1 = Object.assign(tmp4Result);
                                                        let tmp15Result = tmp15(obj, tmp);
                                                        let DEBUG_BUILD2 = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                                                        if (DEBUG_BUILD2) {
                                                          DEBUG_BUILD2 = null === tmp15Result;
                                                        }
                                                        if (DEBUG_BUILD2) {
                                                          let debug2 = closure_1_0(closure_1_1[3]).debug;
                                                          let str4 = tmp15.id;
                                                          if (!str4) {
                                                            str4 = "?";
                                                          }
                                                          let _HermesInternal2 = HermesInternal;
                                                          debug2.log("Event processor \"" + str4 + "\" dropped event");
                                                        }
                                                        tmp9Result = closure_1_0(closure_1_1[0]);
                                                        if (tmp9Result.isThenable(tmp15Result)) {
                                                          let nextPromise1 = tmp15Result.then(() => { ... });
                                                        } else {
                                                          nextPromise1 = closure_1_2(tmp15Result, tmp, tmp2, sum1 + 1);
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              return tmp5;
                                            });
                                          } else {
                                            sum1 = sum + 1;
                                            closure_0 = tmp;
                                            let table = tmp2;
                                            nextPromise = tmp4Result;
                                            if (tmp4Result) {
                                              nextPromise = tmp4Result;
                                              if (tmp15) {
                                                obj = {};
                                                let merged1 = Object.assign(tmp4Result);
                                                let tmp15Result = tmp15(obj, tmp);
                                                let DEBUG_BUILD2 = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                                                if (DEBUG_BUILD2) {
                                                  DEBUG_BUILD2 = null === tmp15Result;
                                                }
                                                if (DEBUG_BUILD2) {
                                                  let debug2 = closure_1_0(closure_1_1[3]).debug;
                                                  let str4 = tmp15.id;
                                                  if (!str4) {
                                                    str4 = "?";
                                                  }
                                                  let _HermesInternal2 = HermesInternal;
                                                  debug2.log("Event processor \"" + str4 + "\" dropped event");
                                                }
                                                tmp9Result = closure_1_0(closure_1_1[0]);
                                                if (tmp9Result.isThenable(tmp15Result)) {
                                                  let nextPromise1 = tmp15Result.then((result) => {
                                                    let sum = sum1 + 1;
                                                    sum1 = sum;
                                                    let tmp5 = result;
                                                    if (result) {
                                                      tmp5 = result;
                                                      if (tmp4) {
                                                        let obj = {};
                                                        let merged = Object.assign(result);
                                                        let tmp4Result = tmp4(obj, tmp);
                                                        let DEBUG_BUILD = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                                                        if (DEBUG_BUILD) {
                                                          DEBUG_BUILD = null === tmp4Result;
                                                        }
                                                        if (DEBUG_BUILD) {
                                                          let debug = closure_1_0(closure_1_1[3]).debug;
                                                          let str = tmp4.id;
                                                          if (!str) {
                                                            str = "?";
                                                          }
                                                          let _HermesInternal = HermesInternal;
                                                          debug.log("Event processor \"" + str + "\" dropped event");
                                                        }
                                                        let tmp9Result = closure_1_0(closure_1_1[0]);
                                                        if (tmp9Result.isThenable(tmp4Result)) {
                                                          let nextPromise = tmp4Result.then(() => { ... });
                                                        } else {
                                                          sum1 = sum + 1;
                                                          closure_0 = tmp;
                                                          let table = tmp2;
                                                          nextPromise = tmp4Result;
                                                          if (tmp4Result) {
                                                            nextPromise = tmp4Result;
                                                            if (tmp15) {
                                                              obj = {};
                                                              let merged1 = Object.assign(tmp4Result);
                                                              let tmp15Result = tmp15(obj, tmp);
                                                              let DEBUG_BUILD2 = closure_1_0(closure_1_1[2]).DEBUG_BUILD;
                                                              if (DEBUG_BUILD2) {
                                                                DEBUG_BUILD2 = null === tmp15Result;
                                                              }
                                                              if (DEBUG_BUILD2) {
                                                                let debug2 = closure_1_0(closure_1_1[3]).debug;
                                                                let str4 = tmp15.id;
                                                                if (!str4) {
                                                                  str4 = "?";
                                                                }
                                                                let _HermesInternal2 = HermesInternal;
                                                                debug2.log("Event processor \"" + str4 + "\" dropped event");
                                                              }
                                                              tmp9Result = closure_1_0(closure_1_1[0]);
                                                              if (tmp9Result.isThenable(tmp15Result)) {
                                                                let nextPromise1 = tmp15Result.then(() => { ... });
                                                              } else {
                                                                nextPromise1 = closure_1_2(tmp15Result, tmp, tmp2, sum1 + 1);
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    return tmp5;
                                                  });
                                                } else {
                                                  nextPromise1 = closure_1_2(tmp15Result, tmp, tmp2, sum1 + 1);
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      return tmp5;
                                    });
                                  } else {
                                    nextPromise1 = closure_1_2(tmp15Result, tmp, tmp2, sum1 + 1);
                                  }
                                }
                              }
                            }
                          }
                        }
                        return tmp5;
                      });
                    } else {
                      nextPromise1 = closure_1_2(tmp15Result, tmp, tmp2, sum1 + 1);
                    }
                  }
                }
              }
            }
          }
          return tmp5;
        });
      } else {
        nextPromise = _notifyEventProcessors(tmpResult, arg1, arg2, arg3 + 1);
      }
      return nextPromise;
    }
  }
  return tmpResult;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.notifyEventProcessors = function notifyEventProcessors(arg0, tmpResult) {
  let num = arg3;
  if (arg3 === undefined) {
    num = 0;
  }
  try {
    const tmp7 = _notifyEventProcessors(tmpResult, arg2, arg0, num);
    if (obj.isThenable(tmp7)) {
      let resolvedSyncPromiseResult = tmp7;
    } else {
      resolvedSyncPromiseResult = SyncPromise.resolvedSyncPromise(tmp7);
      const tmp10Result = SyncPromise;
    }
    return resolvedSyncPromiseResult;
  } catch (tmp17) {
    return SyncPromise.rejectedSyncPromise(tmp17);
  }
};