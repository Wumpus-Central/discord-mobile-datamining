// _runtime/00737__notifyEventProcessors.js
import SyncPromise from "00738_SyncPromise.js";

require = arg1;
let dependencyMap = arg6;
function _notifyEventProcessors(arg0, arg1, arg2, arg3) {
  _require = arg1;
  dependencyMap = arg2;
  _notifyEventProcessors = arg3;
  if (arg0) {
    if (tmp) {
      const obj = {};
      const merged = Object.assign(arg0);
      const tmpResult = tmp(obj, arg1);
      let DEBUG_BUILD = require("metro/00688__.js").DEBUG_BUILD;
      if (DEBUG_BUILD) {
        DEBUG_BUILD = null === tmpResult;
      }
      if (DEBUG_BUILD) {
        const debug = tmp5(689).debug;
        let str = tmp.id;
        if (!str) {
          str = "?";
        }
        const _HermesInternal = HermesInternal;
        debug.log("Event processor \"" + str + "\" dropped event");
      }
      if (tmp5Result.isThenable(tmpResult)) {
        let nextPromise = tmpResult.then((result) => {
          let sum = closure_1_2 + 1;
          closure_0 = closure_1_0;
          closure_1 = closure_1_1;
          sum1 = sum;
          let tmp5 = result;
          if (result) {
            tmp5 = result;
            if (tmp4) {
              let obj = {};
              let merged = Object.assign(result);
              let tmp4Result = tmp4(obj, tmp);
              let DEBUG_BUILD = closure_2_0(closure_2_1[2]).DEBUG_BUILD;
              if (DEBUG_BUILD) {
                DEBUG_BUILD = null === tmp4Result;
              }
              if (DEBUG_BUILD) {
                let debug = tmp9(tmp10[3]).debug;
                let str = tmp4.id;
                if (!str) {
                  str = "?";
                }
                let _HermesInternal = HermesInternal;
                debug.log("Event processor \"" + str + "\" dropped event");
              }
              let tmp9Result = tmp9(tmp10[0]);
              if (tmp9Result.isThenable(tmp4Result)) {
                let nextPromise = tmp4Result.then((result) => {
                  let sum = closure_1_2 + 1;
                  closure_0 = closure_1_0;
                  closure_1 = closure_1_1;
                  sum1 = sum;
                  let tmp5 = result;
                  if (result) {
                    tmp5 = result;
                    if (tmp4) {
                      let obj = {};
                      let merged = Object.assign(result);
                      let tmp4Result = tmp4(obj, tmp);
                      let DEBUG_BUILD = closure_2_0(closure_2_1[2]).DEBUG_BUILD;
                      if (DEBUG_BUILD) {
                        DEBUG_BUILD = null === tmp4Result;
                      }
                      if (DEBUG_BUILD) {
                        let debug = tmp9(tmp10[3]).debug;
                        let str = tmp4.id;
                        if (!str) {
                          str = "?";
                        }
                        let _HermesInternal = HermesInternal;
                        debug.log("Event processor \"" + str + "\" dropped event");
                      }
                      let tmp9Result = tmp9(tmp10[0]);
                      if (tmp9Result.isThenable(tmp4Result)) {
                        let nextPromise = tmp4Result.then((result) => {
                          let sum = closure_1_2 + 1;
                          closure_0 = closure_1_0;
                          closure_1 = closure_1_1;
                          sum1 = sum;
                          let tmp5 = result;
                          if (result) {
                            tmp5 = result;
                            if (tmp4) {
                              let obj = {};
                              let merged = Object.assign(result);
                              let tmp4Result = tmp4(obj, tmp);
                              let DEBUG_BUILD = closure_2_0(closure_2_1[2]).DEBUG_BUILD;
                              if (DEBUG_BUILD) {
                                DEBUG_BUILD = null === tmp4Result;
                              }
                              if (DEBUG_BUILD) {
                                let debug = tmp9(tmp10[3]).debug;
                                let str = tmp4.id;
                                if (!str) {
                                  str = "?";
                                }
                                let _HermesInternal = HermesInternal;
                                debug.log("Event processor \"" + str + "\" dropped event");
                              }
                              let tmp9Result = tmp9(tmp10[0]);
                              if (tmp9Result.isThenable(tmp4Result)) {
                                let nextPromise = tmp4Result.then((result) => {
                                  let sum = closure_1_2 + 1;
                                  closure_0 = closure_1_0;
                                  closure_1 = closure_1_1;
                                  sum1 = sum;
                                  let tmp5 = result;
                                  if (result) {
                                    tmp5 = result;
                                    if (tmp4) {
                                      let obj = {};
                                      let merged = Object.assign(result);
                                      let tmp4Result = tmp4(obj, tmp);
                                      let DEBUG_BUILD = closure_2_0(closure_2_1[2]).DEBUG_BUILD;
                                      if (DEBUG_BUILD) {
                                        DEBUG_BUILD = null === tmp4Result;
                                      }
                                      if (DEBUG_BUILD) {
                                        let debug = tmp9(tmp10[3]).debug;
                                        let str = tmp4.id;
                                        if (!str) {
                                          str = "?";
                                        }
                                        let _HermesInternal = HermesInternal;
                                        debug.log("Event processor \"" + str + "\" dropped event");
                                      }
                                      let tmp9Result = tmp9(tmp10[0]);
                                      if (tmp9Result.isThenable(tmp4Result)) {
                                        let nextPromise = tmp4Result.then(() => { ... });
                                      } else {
                                        sum1 = sum + 1;
                                        closure_0 = tmp;
                                        closure_1 = tmp2;
                                        nextPromise = tmp4Result;
                                        if (tmp4Result) {
                                          nextPromise = tmp4Result;
                                          if (tmp15) {
                                            obj = {};
                                            let merged1 = Object.assign(tmp4Result);
                                            let tmp15Result = tmp15(obj, tmp);
                                            let DEBUG_BUILD2 = tmp9(tmp10[2]).DEBUG_BUILD;
                                            if (DEBUG_BUILD2) {
                                              DEBUG_BUILD2 = null === tmp15Result;
                                            }
                                            if (DEBUG_BUILD2) {
                                              let debug2 = tmp9(tmp10[3]).debug;
                                              let str4 = tmp15.id;
                                              if (!str4) {
                                                str4 = "?";
                                              }
                                              let _HermesInternal2 = HermesInternal;
                                              debug2.log("Event processor \"" + str4 + "\" dropped event");
                                            }
                                            tmp9Result = tmp9(tmp10[0]);
                                            if (tmp9Result.isThenable(tmp15Result)) {
                                              let nextPromise1 = tmp15Result.then(() => { ... });
                                            } else {
                                              nextPromise1 = closure_2_2(tmp15Result, tmp, tmp2, sum1 + 1);
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
                                closure_1 = tmp2;
                                nextPromise = tmp4Result;
                                if (tmp4Result) {
                                  nextPromise = tmp4Result;
                                  if (tmp15) {
                                    obj = {};
                                    let merged1 = Object.assign(tmp4Result);
                                    let tmp15Result = tmp15(obj, tmp);
                                    let DEBUG_BUILD2 = tmp9(tmp10[2]).DEBUG_BUILD;
                                    if (DEBUG_BUILD2) {
                                      DEBUG_BUILD2 = null === tmp15Result;
                                    }
                                    if (DEBUG_BUILD2) {
                                      let debug2 = tmp9(tmp10[3]).debug;
                                      let str4 = tmp15.id;
                                      if (!str4) {
                                        str4 = "?";
                                      }
                                      let _HermesInternal2 = HermesInternal;
                                      debug2.log("Event processor \"" + str4 + "\" dropped event");
                                    }
                                    tmp9Result = tmp9(tmp10[0]);
                                    if (tmp9Result.isThenable(tmp15Result)) {
                                      let nextPromise1 = tmp15Result.then((result) => {
                                        let sum = closure_1_2 + 1;
                                        closure_0 = closure_1_0;
                                        closure_1 = closure_1_1;
                                        sum1 = sum;
                                        let tmp5 = result;
                                        if (result) {
                                          tmp5 = result;
                                          if (tmp4) {
                                            let obj = {};
                                            let merged = Object.assign(result);
                                            let tmp4Result = tmp4(obj, tmp);
                                            let DEBUG_BUILD = closure_2_0(closure_2_1[2]).DEBUG_BUILD;
                                            if (DEBUG_BUILD) {
                                              DEBUG_BUILD = null === tmp4Result;
                                            }
                                            if (DEBUG_BUILD) {
                                              let debug = tmp9(tmp10[3]).debug;
                                              let str = tmp4.id;
                                              if (!str) {
                                                str = "?";
                                              }
                                              let _HermesInternal = HermesInternal;
                                              debug.log("Event processor \"" + str + "\" dropped event");
                                            }
                                            let tmp9Result = tmp9(tmp10[0]);
                                            if (tmp9Result.isThenable(tmp4Result)) {
                                              let nextPromise = tmp4Result.then(() => { ... });
                                            } else {
                                              sum1 = sum + 1;
                                              closure_0 = tmp;
                                              closure_1 = tmp2;
                                              nextPromise = tmp4Result;
                                              if (tmp4Result) {
                                                nextPromise = tmp4Result;
                                                if (tmp15) {
                                                  obj = {};
                                                  let merged1 = Object.assign(tmp4Result);
                                                  let tmp15Result = tmp15(obj, tmp);
                                                  let DEBUG_BUILD2 = tmp9(tmp10[2]).DEBUG_BUILD;
                                                  if (DEBUG_BUILD2) {
                                                    DEBUG_BUILD2 = null === tmp15Result;
                                                  }
                                                  if (DEBUG_BUILD2) {
                                                    let debug2 = tmp9(tmp10[3]).debug;
                                                    let str4 = tmp15.id;
                                                    if (!str4) {
                                                      str4 = "?";
                                                    }
                                                    let _HermesInternal2 = HermesInternal;
                                                    debug2.log("Event processor \"" + str4 + "\" dropped event");
                                                  }
                                                  tmp9Result = tmp9(tmp10[0]);
                                                  if (tmp9Result.isThenable(tmp15Result)) {
                                                    let nextPromise1 = tmp15Result.then(() => { ... });
                                                  } else {
                                                    nextPromise1 = closure_2_2(tmp15Result, tmp, tmp2, sum1 + 1);
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        return tmp5;
                                      });
                                    } else {
                                      nextPromise1 = closure_2_2(tmp15Result, tmp, tmp2, sum1 + 1);
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
                        closure_1 = tmp2;
                        nextPromise = tmp4Result;
                        if (tmp4Result) {
                          nextPromise = tmp4Result;
                          if (tmp15) {
                            obj = {};
                            let merged1 = Object.assign(tmp4Result);
                            let tmp15Result = tmp15(obj, tmp);
                            let DEBUG_BUILD2 = tmp9(tmp10[2]).DEBUG_BUILD;
                            if (DEBUG_BUILD2) {
                              DEBUG_BUILD2 = null === tmp15Result;
                            }
                            if (DEBUG_BUILD2) {
                              let debug2 = tmp9(tmp10[3]).debug;
                              let str4 = tmp15.id;
                              if (!str4) {
                                str4 = "?";
                              }
                              let _HermesInternal2 = HermesInternal;
                              debug2.log("Event processor \"" + str4 + "\" dropped event");
                            }
                            tmp9Result = tmp9(tmp10[0]);
                            if (tmp9Result.isThenable(tmp15Result)) {
                              let nextPromise1 = tmp15Result.then((result) => {
                                let sum = closure_1_2 + 1;
                                closure_0 = closure_1_0;
                                closure_1 = closure_1_1;
                                sum1 = sum;
                                let tmp5 = result;
                                if (result) {
                                  tmp5 = result;
                                  if (tmp4) {
                                    let obj = {};
                                    let merged = Object.assign(result);
                                    let tmp4Result = tmp4(obj, tmp);
                                    let DEBUG_BUILD = closure_2_0(closure_2_1[2]).DEBUG_BUILD;
                                    if (DEBUG_BUILD) {
                                      DEBUG_BUILD = null === tmp4Result;
                                    }
                                    if (DEBUG_BUILD) {
                                      let debug = tmp9(tmp10[3]).debug;
                                      let str = tmp4.id;
                                      if (!str) {
                                        str = "?";
                                      }
                                      let _HermesInternal = HermesInternal;
                                      debug.log("Event processor \"" + str + "\" dropped event");
                                    }
                                    let tmp9Result = tmp9(tmp10[0]);
                                    if (tmp9Result.isThenable(tmp4Result)) {
                                      let nextPromise = tmp4Result.then((result) => {
                                        let sum = closure_1_2 + 1;
                                        closure_0 = closure_1_0;
                                        closure_1 = closure_1_1;
                                        sum1 = sum;
                                        let tmp5 = result;
                                        if (result) {
                                          tmp5 = result;
                                          if (tmp4) {
                                            let obj = {};
                                            let merged = Object.assign(result);
                                            let tmp4Result = tmp4(obj, tmp);
                                            let DEBUG_BUILD = closure_2_0(closure_2_1[2]).DEBUG_BUILD;
                                            if (DEBUG_BUILD) {
                                              DEBUG_BUILD = null === tmp4Result;
                                            }
                                            if (DEBUG_BUILD) {
                                              let debug = tmp9(tmp10[3]).debug;
                                              let str = tmp4.id;
                                              if (!str) {
                                                str = "?";
                                              }
                                              let _HermesInternal = HermesInternal;
                                              debug.log("Event processor \"" + str + "\" dropped event");
                                            }
                                            let tmp9Result = tmp9(tmp10[0]);
                                            if (tmp9Result.isThenable(tmp4Result)) {
                                              let nextPromise = tmp4Result.then(() => { ... });
                                            } else {
                                              sum1 = sum + 1;
                                              closure_0 = tmp;
                                              closure_1 = tmp2;
                                              nextPromise = tmp4Result;
                                              if (tmp4Result) {
                                                nextPromise = tmp4Result;
                                                if (tmp15) {
                                                  obj = {};
                                                  let merged1 = Object.assign(tmp4Result);
                                                  let tmp15Result = tmp15(obj, tmp);
                                                  let DEBUG_BUILD2 = tmp9(tmp10[2]).DEBUG_BUILD;
                                                  if (DEBUG_BUILD2) {
                                                    DEBUG_BUILD2 = null === tmp15Result;
                                                  }
                                                  if (DEBUG_BUILD2) {
                                                    let debug2 = tmp9(tmp10[3]).debug;
                                                    let str4 = tmp15.id;
                                                    if (!str4) {
                                                      str4 = "?";
                                                    }
                                                    let _HermesInternal2 = HermesInternal;
                                                    debug2.log("Event processor \"" + str4 + "\" dropped event");
                                                  }
                                                  tmp9Result = tmp9(tmp10[0]);
                                                  if (tmp9Result.isThenable(tmp15Result)) {
                                                    let nextPromise1 = tmp15Result.then(() => { ... });
                                                  } else {
                                                    nextPromise1 = closure_2_2(tmp15Result, tmp, tmp2, sum1 + 1);
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
                                      closure_1 = tmp2;
                                      nextPromise = tmp4Result;
                                      if (tmp4Result) {
                                        nextPromise = tmp4Result;
                                        if (tmp15) {
                                          obj = {};
                                          let merged1 = Object.assign(tmp4Result);
                                          let tmp15Result = tmp15(obj, tmp);
                                          let DEBUG_BUILD2 = tmp9(tmp10[2]).DEBUG_BUILD;
                                          if (DEBUG_BUILD2) {
                                            DEBUG_BUILD2 = null === tmp15Result;
                                          }
                                          if (DEBUG_BUILD2) {
                                            let debug2 = tmp9(tmp10[3]).debug;
                                            let str4 = tmp15.id;
                                            if (!str4) {
                                              str4 = "?";
                                            }
                                            let _HermesInternal2 = HermesInternal;
                                            debug2.log("Event processor \"" + str4 + "\" dropped event");
                                          }
                                          tmp9Result = tmp9(tmp10[0]);
                                          if (tmp9Result.isThenable(tmp15Result)) {
                                            let nextPromise1 = tmp15Result.then((result) => {
                                              let sum = closure_1_2 + 1;
                                              closure_0 = closure_1_0;
                                              closure_1 = closure_1_1;
                                              sum1 = sum;
                                              let tmp5 = result;
                                              if (result) {
                                                tmp5 = result;
                                                if (tmp4) {
                                                  let obj = {};
                                                  let merged = Object.assign(result);
                                                  let tmp4Result = tmp4(obj, tmp);
                                                  let DEBUG_BUILD = closure_2_0(closure_2_1[2]).DEBUG_BUILD;
                                                  if (DEBUG_BUILD) {
                                                    DEBUG_BUILD = null === tmp4Result;
                                                  }
                                                  if (DEBUG_BUILD) {
                                                    let debug = tmp9(tmp10[3]).debug;
                                                    let str = tmp4.id;
                                                    if (!str) {
                                                      str = "?";
                                                    }
                                                    let _HermesInternal = HermesInternal;
                                                    debug.log("Event processor \"" + str + "\" dropped event");
                                                  }
                                                  let tmp9Result = tmp9(tmp10[0]);
                                                  if (tmp9Result.isThenable(tmp4Result)) {
                                                    let nextPromise = tmp4Result.then(() => { ... });
                                                  } else {
                                                    sum1 = sum + 1;
                                                    closure_0 = tmp;
                                                    closure_1 = tmp2;
                                                    nextPromise = tmp4Result;
                                                    if (tmp4Result) {
                                                      nextPromise = tmp4Result;
                                                      if (tmp15) {
                                                        obj = {};
                                                        let merged1 = Object.assign(tmp4Result);
                                                        let tmp15Result = tmp15(obj, tmp);
                                                        let DEBUG_BUILD2 = tmp9(tmp10[2]).DEBUG_BUILD;
                                                        if (DEBUG_BUILD2) {
                                                          DEBUG_BUILD2 = null === tmp15Result;
                                                        }
                                                        if (DEBUG_BUILD2) {
                                                          let debug2 = tmp9(tmp10[3]).debug;
                                                          let str4 = tmp15.id;
                                                          if (!str4) {
                                                            str4 = "?";
                                                          }
                                                          let _HermesInternal2 = HermesInternal;
                                                          debug2.log("Event processor \"" + str4 + "\" dropped event");
                                                        }
                                                        tmp9Result = tmp9(tmp10[0]);
                                                        if (tmp9Result.isThenable(tmp15Result)) {
                                                          let nextPromise1 = tmp15Result.then(() => { ... });
                                                        } else {
                                                          nextPromise1 = closure_2_2(tmp15Result, tmp, tmp2, sum1 + 1);
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              return tmp5;
                                            });
                                          } else {
                                            nextPromise1 = closure_2_2(tmp15Result, tmp, tmp2, sum1 + 1);
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                return tmp5;
                              });
                            } else {
                              nextPromise1 = closure_2_2(tmp15Result, tmp, tmp2, sum1 + 1);
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
                closure_1 = tmp2;
                nextPromise = tmp4Result;
                if (tmp4Result) {
                  nextPromise = tmp4Result;
                  if (tmp15) {
                    obj = {};
                    let merged1 = Object.assign(tmp4Result);
                    let tmp15Result = tmp15(obj, tmp);
                    let DEBUG_BUILD2 = tmp9(tmp10[2]).DEBUG_BUILD;
                    if (DEBUG_BUILD2) {
                      DEBUG_BUILD2 = null === tmp15Result;
                    }
                    if (DEBUG_BUILD2) {
                      let debug2 = tmp9(tmp10[3]).debug;
                      let str4 = tmp15.id;
                      if (!str4) {
                        str4 = "?";
                      }
                      let _HermesInternal2 = HermesInternal;
                      debug2.log("Event processor \"" + str4 + "\" dropped event");
                    }
                    tmp9Result = tmp9(tmp10[0]);
                    if (tmp9Result.isThenable(tmp15Result)) {
                      let nextPromise1 = tmp15Result.then((result) => {
                        let sum = closure_1_2 + 1;
                        closure_0 = closure_1_0;
                        closure_1 = closure_1_1;
                        sum1 = sum;
                        let tmp5 = result;
                        if (result) {
                          tmp5 = result;
                          if (tmp4) {
                            let obj = {};
                            let merged = Object.assign(result);
                            let tmp4Result = tmp4(obj, tmp);
                            let DEBUG_BUILD = closure_2_0(closure_2_1[2]).DEBUG_BUILD;
                            if (DEBUG_BUILD) {
                              DEBUG_BUILD = null === tmp4Result;
                            }
                            if (DEBUG_BUILD) {
                              let debug = tmp9(tmp10[3]).debug;
                              let str = tmp4.id;
                              if (!str) {
                                str = "?";
                              }
                              let _HermesInternal = HermesInternal;
                              debug.log("Event processor \"" + str + "\" dropped event");
                            }
                            let tmp9Result = tmp9(tmp10[0]);
                            if (tmp9Result.isThenable(tmp4Result)) {
                              let nextPromise = tmp4Result.then((result) => {
                                let sum = closure_1_2 + 1;
                                closure_0 = closure_1_0;
                                closure_1 = closure_1_1;
                                sum1 = sum;
                                let tmp5 = result;
                                if (result) {
                                  tmp5 = result;
                                  if (tmp4) {
                                    let obj = {};
                                    let merged = Object.assign(result);
                                    let tmp4Result = tmp4(obj, tmp);
                                    let DEBUG_BUILD = closure_2_0(closure_2_1[2]).DEBUG_BUILD;
                                    if (DEBUG_BUILD) {
                                      DEBUG_BUILD = null === tmp4Result;
                                    }
                                    if (DEBUG_BUILD) {
                                      let debug = tmp9(tmp10[3]).debug;
                                      let str = tmp4.id;
                                      if (!str) {
                                        str = "?";
                                      }
                                      let _HermesInternal = HermesInternal;
                                      debug.log("Event processor \"" + str + "\" dropped event");
                                    }
                                    let tmp9Result = tmp9(tmp10[0]);
                                    if (tmp9Result.isThenable(tmp4Result)) {
                                      let nextPromise = tmp4Result.then((result) => {
                                        let sum = closure_1_2 + 1;
                                        closure_0 = closure_1_0;
                                        closure_1 = closure_1_1;
                                        sum1 = sum;
                                        let tmp5 = result;
                                        if (result) {
                                          tmp5 = result;
                                          if (tmp4) {
                                            let obj = {};
                                            let merged = Object.assign(result);
                                            let tmp4Result = tmp4(obj, tmp);
                                            let DEBUG_BUILD = closure_2_0(closure_2_1[2]).DEBUG_BUILD;
                                            if (DEBUG_BUILD) {
                                              DEBUG_BUILD = null === tmp4Result;
                                            }
                                            if (DEBUG_BUILD) {
                                              let debug = tmp9(tmp10[3]).debug;
                                              let str = tmp4.id;
                                              if (!str) {
                                                str = "?";
                                              }
                                              let _HermesInternal = HermesInternal;
                                              debug.log("Event processor \"" + str + "\" dropped event");
                                            }
                                            let tmp9Result = tmp9(tmp10[0]);
                                            if (tmp9Result.isThenable(tmp4Result)) {
                                              let nextPromise = tmp4Result.then(() => { ... });
                                            } else {
                                              sum1 = sum + 1;
                                              closure_0 = tmp;
                                              closure_1 = tmp2;
                                              nextPromise = tmp4Result;
                                              if (tmp4Result) {
                                                nextPromise = tmp4Result;
                                                if (tmp15) {
                                                  obj = {};
                                                  let merged1 = Object.assign(tmp4Result);
                                                  let tmp15Result = tmp15(obj, tmp);
                                                  let DEBUG_BUILD2 = tmp9(tmp10[2]).DEBUG_BUILD;
                                                  if (DEBUG_BUILD2) {
                                                    DEBUG_BUILD2 = null === tmp15Result;
                                                  }
                                                  if (DEBUG_BUILD2) {
                                                    let debug2 = tmp9(tmp10[3]).debug;
                                                    let str4 = tmp15.id;
                                                    if (!str4) {
                                                      str4 = "?";
                                                    }
                                                    let _HermesInternal2 = HermesInternal;
                                                    debug2.log("Event processor \"" + str4 + "\" dropped event");
                                                  }
                                                  tmp9Result = tmp9(tmp10[0]);
                                                  if (tmp9Result.isThenable(tmp15Result)) {
                                                    let nextPromise1 = tmp15Result.then(() => { ... });
                                                  } else {
                                                    nextPromise1 = closure_2_2(tmp15Result, tmp, tmp2, sum1 + 1);
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
                                      closure_1 = tmp2;
                                      nextPromise = tmp4Result;
                                      if (tmp4Result) {
                                        nextPromise = tmp4Result;
                                        if (tmp15) {
                                          obj = {};
                                          let merged1 = Object.assign(tmp4Result);
                                          let tmp15Result = tmp15(obj, tmp);
                                          let DEBUG_BUILD2 = tmp9(tmp10[2]).DEBUG_BUILD;
                                          if (DEBUG_BUILD2) {
                                            DEBUG_BUILD2 = null === tmp15Result;
                                          }
                                          if (DEBUG_BUILD2) {
                                            let debug2 = tmp9(tmp10[3]).debug;
                                            let str4 = tmp15.id;
                                            if (!str4) {
                                              str4 = "?";
                                            }
                                            let _HermesInternal2 = HermesInternal;
                                            debug2.log("Event processor \"" + str4 + "\" dropped event");
                                          }
                                          tmp9Result = tmp9(tmp10[0]);
                                          if (tmp9Result.isThenable(tmp15Result)) {
                                            let nextPromise1 = tmp15Result.then((result) => {
                                              let sum = closure_1_2 + 1;
                                              closure_0 = closure_1_0;
                                              closure_1 = closure_1_1;
                                              sum1 = sum;
                                              let tmp5 = result;
                                              if (result) {
                                                tmp5 = result;
                                                if (tmp4) {
                                                  let obj = {};
                                                  let merged = Object.assign(result);
                                                  let tmp4Result = tmp4(obj, tmp);
                                                  let DEBUG_BUILD = closure_2_0(closure_2_1[2]).DEBUG_BUILD;
                                                  if (DEBUG_BUILD) {
                                                    DEBUG_BUILD = null === tmp4Result;
                                                  }
                                                  if (DEBUG_BUILD) {
                                                    let debug = tmp9(tmp10[3]).debug;
                                                    let str = tmp4.id;
                                                    if (!str) {
                                                      str = "?";
                                                    }
                                                    let _HermesInternal = HermesInternal;
                                                    debug.log("Event processor \"" + str + "\" dropped event");
                                                  }
                                                  let tmp9Result = tmp9(tmp10[0]);
                                                  if (tmp9Result.isThenable(tmp4Result)) {
                                                    let nextPromise = tmp4Result.then(() => { ... });
                                                  } else {
                                                    sum1 = sum + 1;
                                                    closure_0 = tmp;
                                                    closure_1 = tmp2;
                                                    nextPromise = tmp4Result;
                                                    if (tmp4Result) {
                                                      nextPromise = tmp4Result;
                                                      if (tmp15) {
                                                        obj = {};
                                                        let merged1 = Object.assign(tmp4Result);
                                                        let tmp15Result = tmp15(obj, tmp);
                                                        let DEBUG_BUILD2 = tmp9(tmp10[2]).DEBUG_BUILD;
                                                        if (DEBUG_BUILD2) {
                                                          DEBUG_BUILD2 = null === tmp15Result;
                                                        }
                                                        if (DEBUG_BUILD2) {
                                                          let debug2 = tmp9(tmp10[3]).debug;
                                                          let str4 = tmp15.id;
                                                          if (!str4) {
                                                            str4 = "?";
                                                          }
                                                          let _HermesInternal2 = HermesInternal;
                                                          debug2.log("Event processor \"" + str4 + "\" dropped event");
                                                        }
                                                        tmp9Result = tmp9(tmp10[0]);
                                                        if (tmp9Result.isThenable(tmp15Result)) {
                                                          let nextPromise1 = tmp15Result.then(() => { ... });
                                                        } else {
                                                          nextPromise1 = closure_2_2(tmp15Result, tmp, tmp2, sum1 + 1);
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              return tmp5;
                                            });
                                          } else {
                                            nextPromise1 = closure_2_2(tmp15Result, tmp, tmp2, sum1 + 1);
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
                              closure_1 = tmp2;
                              nextPromise = tmp4Result;
                              if (tmp4Result) {
                                nextPromise = tmp4Result;
                                if (tmp15) {
                                  obj = {};
                                  let merged1 = Object.assign(tmp4Result);
                                  let tmp15Result = tmp15(obj, tmp);
                                  let DEBUG_BUILD2 = tmp9(tmp10[2]).DEBUG_BUILD;
                                  if (DEBUG_BUILD2) {
                                    DEBUG_BUILD2 = null === tmp15Result;
                                  }
                                  if (DEBUG_BUILD2) {
                                    let debug2 = tmp9(tmp10[3]).debug;
                                    let str4 = tmp15.id;
                                    if (!str4) {
                                      str4 = "?";
                                    }
                                    let _HermesInternal2 = HermesInternal;
                                    debug2.log("Event processor \"" + str4 + "\" dropped event");
                                  }
                                  tmp9Result = tmp9(tmp10[0]);
                                  if (tmp9Result.isThenable(tmp15Result)) {
                                    let nextPromise1 = tmp15Result.then((result) => {
                                      let sum = closure_1_2 + 1;
                                      closure_0 = closure_1_0;
                                      closure_1 = closure_1_1;
                                      sum1 = sum;
                                      let tmp5 = result;
                                      if (result) {
                                        tmp5 = result;
                                        if (tmp4) {
                                          let obj = {};
                                          let merged = Object.assign(result);
                                          let tmp4Result = tmp4(obj, tmp);
                                          let DEBUG_BUILD = closure_2_0(closure_2_1[2]).DEBUG_BUILD;
                                          if (DEBUG_BUILD) {
                                            DEBUG_BUILD = null === tmp4Result;
                                          }
                                          if (DEBUG_BUILD) {
                                            let debug = tmp9(tmp10[3]).debug;
                                            let str = tmp4.id;
                                            if (!str) {
                                              str = "?";
                                            }
                                            let _HermesInternal = HermesInternal;
                                            debug.log("Event processor \"" + str + "\" dropped event");
                                          }
                                          let tmp9Result = tmp9(tmp10[0]);
                                          if (tmp9Result.isThenable(tmp4Result)) {
                                            let nextPromise = tmp4Result.then((result) => {
                                              let sum = closure_1_2 + 1;
                                              closure_0 = closure_1_0;
                                              closure_1 = closure_1_1;
                                              sum1 = sum;
                                              let tmp5 = result;
                                              if (result) {
                                                tmp5 = result;
                                                if (tmp4) {
                                                  let obj = {};
                                                  let merged = Object.assign(result);
                                                  let tmp4Result = tmp4(obj, tmp);
                                                  let DEBUG_BUILD = closure_2_0(closure_2_1[2]).DEBUG_BUILD;
                                                  if (DEBUG_BUILD) {
                                                    DEBUG_BUILD = null === tmp4Result;
                                                  }
                                                  if (DEBUG_BUILD) {
                                                    let debug = tmp9(tmp10[3]).debug;
                                                    let str = tmp4.id;
                                                    if (!str) {
                                                      str = "?";
                                                    }
                                                    let _HermesInternal = HermesInternal;
                                                    debug.log("Event processor \"" + str + "\" dropped event");
                                                  }
                                                  let tmp9Result = tmp9(tmp10[0]);
                                                  if (tmp9Result.isThenable(tmp4Result)) {
                                                    let nextPromise = tmp4Result.then(() => { ... });
                                                  } else {
                                                    sum1 = sum + 1;
                                                    closure_0 = tmp;
                                                    closure_1 = tmp2;
                                                    nextPromise = tmp4Result;
                                                    if (tmp4Result) {
                                                      nextPromise = tmp4Result;
                                                      if (tmp15) {
                                                        obj = {};
                                                        let merged1 = Object.assign(tmp4Result);
                                                        let tmp15Result = tmp15(obj, tmp);
                                                        let DEBUG_BUILD2 = tmp9(tmp10[2]).DEBUG_BUILD;
                                                        if (DEBUG_BUILD2) {
                                                          DEBUG_BUILD2 = null === tmp15Result;
                                                        }
                                                        if (DEBUG_BUILD2) {
                                                          let debug2 = tmp9(tmp10[3]).debug;
                                                          let str4 = tmp15.id;
                                                          if (!str4) {
                                                            str4 = "?";
                                                          }
                                                          let _HermesInternal2 = HermesInternal;
                                                          debug2.log("Event processor \"" + str4 + "\" dropped event");
                                                        }
                                                        tmp9Result = tmp9(tmp10[0]);
                                                        if (tmp9Result.isThenable(tmp15Result)) {
                                                          let nextPromise1 = tmp15Result.then(() => { ... });
                                                        } else {
                                                          nextPromise1 = closure_2_2(tmp15Result, tmp, tmp2, sum1 + 1);
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
                                            closure_1 = tmp2;
                                            nextPromise = tmp4Result;
                                            if (tmp4Result) {
                                              nextPromise = tmp4Result;
                                              if (tmp15) {
                                                obj = {};
                                                let merged1 = Object.assign(tmp4Result);
                                                let tmp15Result = tmp15(obj, tmp);
                                                let DEBUG_BUILD2 = tmp9(tmp10[2]).DEBUG_BUILD;
                                                if (DEBUG_BUILD2) {
                                                  DEBUG_BUILD2 = null === tmp15Result;
                                                }
                                                if (DEBUG_BUILD2) {
                                                  let debug2 = tmp9(tmp10[3]).debug;
                                                  let str4 = tmp15.id;
                                                  if (!str4) {
                                                    str4 = "?";
                                                  }
                                                  let _HermesInternal2 = HermesInternal;
                                                  debug2.log("Event processor \"" + str4 + "\" dropped event");
                                                }
                                                tmp9Result = tmp9(tmp10[0]);
                                                if (tmp9Result.isThenable(tmp15Result)) {
                                                  let nextPromise1 = tmp15Result.then((result) => {
                                                    let sum = closure_1_2 + 1;
                                                    closure_0 = closure_1_0;
                                                    closure_1 = closure_1_1;
                                                    sum1 = sum;
                                                    let tmp5 = result;
                                                    if (result) {
                                                      tmp5 = result;
                                                      if (tmp4) {
                                                        let obj = {};
                                                        let merged = Object.assign(result);
                                                        let tmp4Result = tmp4(obj, tmp);
                                                        let DEBUG_BUILD = closure_2_0(closure_2_1[2]).DEBUG_BUILD;
                                                        if (DEBUG_BUILD) {
                                                          DEBUG_BUILD = null === tmp4Result;
                                                        }
                                                        if (DEBUG_BUILD) {
                                                          let debug = tmp9(tmp10[3]).debug;
                                                          let str = tmp4.id;
                                                          if (!str) {
                                                            str = "?";
                                                          }
                                                          let _HermesInternal = HermesInternal;
                                                          debug.log("Event processor \"" + str + "\" dropped event");
                                                        }
                                                        let tmp9Result = tmp9(tmp10[0]);
                                                        if (tmp9Result.isThenable(tmp4Result)) {
                                                          let nextPromise = tmp4Result.then(() => { ... });
                                                        } else {
                                                          sum1 = sum + 1;
                                                          closure_0 = tmp;
                                                          closure_1 = tmp2;
                                                          nextPromise = tmp4Result;
                                                          if (tmp4Result) {
                                                            nextPromise = tmp4Result;
                                                            if (tmp15) {
                                                              obj = {};
                                                              let merged1 = Object.assign(tmp4Result);
                                                              let tmp15Result = tmp15(obj, tmp);
                                                              let DEBUG_BUILD2 = tmp9(tmp10[2]).DEBUG_BUILD;
                                                              if (DEBUG_BUILD2) {
                                                                DEBUG_BUILD2 = null === tmp15Result;
                                                              }
                                                              if (DEBUG_BUILD2) {
                                                                let debug2 = tmp9(tmp10[3]).debug;
                                                                let str4 = tmp15.id;
                                                                if (!str4) {
                                                                  str4 = "?";
                                                                }
                                                                let _HermesInternal2 = HermesInternal;
                                                                debug2.log("Event processor \"" + str4 + "\" dropped event");
                                                              }
                                                              tmp9Result = tmp9(tmp10[0]);
                                                              if (tmp9Result.isThenable(tmp15Result)) {
                                                                let nextPromise1 = tmp15Result.then(() => { ... });
                                                              } else {
                                                                nextPromise1 = closure_2_2(tmp15Result, tmp, tmp2, sum1 + 1);
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    return tmp5;
                                                  });
                                                } else {
                                                  nextPromise1 = closure_2_2(tmp15Result, tmp, tmp2, sum1 + 1);
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      return tmp5;
                                    });
                                  } else {
                                    nextPromise1 = closure_2_2(tmp15Result, tmp, tmp2, sum1 + 1);
                                  }
                                }
                              }
                            }
                          }
                        }
                        return tmp5;
                      });
                    } else {
                      nextPromise1 = closure_2_2(tmp15Result, tmp, tmp2, sum1 + 1);
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
  return arg0;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const notifyEventProcessors = function notifyEventProcessors(arg0, arg1, arg2) {
  let num = arg3;
  if (arg3 === undefined) {
    num = 0;
  }
  try {
    const tmp7 = _notifyEventProcessors(arg1, arg2, arg0, num);
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