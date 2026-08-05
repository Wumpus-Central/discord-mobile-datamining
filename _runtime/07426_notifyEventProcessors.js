// _runtime/07426_notifyEventProcessors.js
import { SyncPromise } from "07399_SyncPromise.js";
const require = arg1;
let dependencyMap = arg6;
arg5.notifyEventProcessors = function notifyEventProcessors(arg0, arg1, arg2) {
  const _require = arg0;
  const dependencyMap = arg1;
  let closure_2 = arg2;
  let num = arg3;
  if (arg3 === undefined) {
    num = 0;
  }
  return new _SyncPromise.SyncPromise((arg0, arg1) => {
    let dependencyMap = arg0;
    if (null !== table) {
      if (typeof tmp3 === "function") {
        let obj = {};
        let merged = Object.assign(tmp4);
        let tmp3Result = tmp3(obj, closure_2);
        if (tmp5) {
          let logger = tmp19(tmp20[2]).logger;
          let _HermesInternal = HermesInternal;
          logger.log("Event processor \"" + tmp3.id + "\" dropped event");
        }
        let tmp18 = closure_2;
        tmp5 = dependencyMap(table[1]).DEBUG_BUILD && tmp3.id && null === tmp3Result;
        if (tmp19Result.isThenable(tmp3Result)) {
          tmp3Result.then((arg0) => {
            let closure_1 = arg0;
            closure_3 = closure_3 + 1;
            return new outer2_0(outer2_1[0]).SyncPromise((arg0, arg1) => {
              let dependencyMap = arg0;
              if (null !== table) {
                if (typeof tmp3 === "function") {
                  let obj = {};
                  let merged = Object.assign(tmp4);
                  let tmp3Result = tmp3(obj, closure_2);
                  if (tmp5) {
                    let logger = tmp19(tmp20[2]).logger;
                    let _HermesInternal = HermesInternal;
                    logger.log("Event processor \"" + tmp3.id + "\" dropped event");
                  }
                  let tmp18 = closure_2;
                  tmp5 = dependencyMap(table[1]).DEBUG_BUILD && tmp3.id && null === tmp3Result;
                  if (tmp19Result.isThenable(tmp3Result)) {
                    tmp3Result.then((arg0) => {
                      let closure_1 = arg0;
                      closure_3 = closure_3 + 1;
                      return new outer2_0(outer2_1[0]).SyncPromise(() => { ... }).then(closure_0);
                    }).then(null, arg1);
                    let nextPromise = tmp3Result.then((arg0) => {
                      let closure_1 = arg0;
                      closure_3 = closure_3 + 1;
                      return new outer2_0(outer2_1[0]).SyncPromise(() => { ... }).then(closure_0);
                    });
                  } else {
                    dependencyMap = tmp;
                    table = tmp3Result;
                    closure_2 = tmp18;
                    let closure_3 = tmp2 + 1;
                    let syncPromise = new tmp19(tmp20[0]).SyncPromise((arg0, arg1) => {
                      let dependencyMap = arg0;
                      if (null !== table) {
                        if (typeof tmp3 === "function") {
                          let obj = {};
                          let merged = Object.assign(tmp4);
                          let tmp3Result = tmp3(obj, closure_2);
                          if (tmp5) {
                            let logger = tmp19(tmp20[2]).logger;
                            let _HermesInternal = HermesInternal;
                            logger.log("Event processor \"" + tmp3.id + "\" dropped event");
                          }
                          let tmp18 = closure_2;
                          tmp5 = dependencyMap(table[1]).DEBUG_BUILD && tmp3.id && null === tmp3Result;
                          if (tmp19Result.isThenable(tmp3Result)) {
                            tmp3Result.then(() => { ... }).then(null, arg1);
                            let nextPromise = tmp3Result.then(() => { ... });
                          } else {
                            dependencyMap = tmp;
                            table = tmp3Result;
                            closure_2 = tmp18;
                            let closure_3 = tmp2 + 1;
                            let syncPromise = new tmp19(tmp20[0]).SyncPromise(() => { ... });
                            syncPromise.then(arg0).then(null, arg1);
                            let nextPromise2 = syncPromise.then(arg0);
                          }
                          tmp19Result = dependencyMap(table[3]);
                        }
                      }
                      arg0(table);
                    });
                    syncPromise.then(arg0).then(null, arg1);
                    let nextPromise2 = syncPromise.then(arg0);
                  }
                  tmp19Result = dependencyMap(table[3]);
                }
              }
              arg0(table);
            }).then(closure_0);
          }).then(null, arg1);
          let nextPromise = tmp3Result.then((arg0) => {
            let closure_1 = arg0;
            closure_3 = closure_3 + 1;
            return new outer2_0(outer2_1[0]).SyncPromise((arg0, arg1) => {
              let dependencyMap = arg0;
              if (null !== table) {
                if (typeof tmp3 === "function") {
                  let obj = {};
                  let merged = Object.assign(tmp4);
                  let tmp3Result = tmp3(obj, closure_2);
                  if (tmp5) {
                    let logger = tmp19(tmp20[2]).logger;
                    let _HermesInternal = HermesInternal;
                    logger.log("Event processor \"" + tmp3.id + "\" dropped event");
                  }
                  let tmp18 = closure_2;
                  tmp5 = dependencyMap(table[1]).DEBUG_BUILD && tmp3.id && null === tmp3Result;
                  if (tmp19Result.isThenable(tmp3Result)) {
                    tmp3Result.then((arg0) => {
                      let closure_1 = arg0;
                      closure_3 = closure_3 + 1;
                      return new outer2_0(outer2_1[0]).SyncPromise(() => { ... }).then(closure_0);
                    }).then(null, arg1);
                    let nextPromise = tmp3Result.then((arg0) => {
                      let closure_1 = arg0;
                      closure_3 = closure_3 + 1;
                      return new outer2_0(outer2_1[0]).SyncPromise(() => { ... }).then(closure_0);
                    });
                  } else {
                    dependencyMap = tmp;
                    table = tmp3Result;
                    closure_2 = tmp18;
                    let closure_3 = tmp2 + 1;
                    let syncPromise = new tmp19(tmp20[0]).SyncPromise((arg0, arg1) => {
                      let dependencyMap = arg0;
                      if (null !== table) {
                        if (typeof tmp3 === "function") {
                          let obj = {};
                          let merged = Object.assign(tmp4);
                          let tmp3Result = tmp3(obj, closure_2);
                          if (tmp5) {
                            let logger = tmp19(tmp20[2]).logger;
                            let _HermesInternal = HermesInternal;
                            logger.log("Event processor \"" + tmp3.id + "\" dropped event");
                          }
                          let tmp18 = closure_2;
                          tmp5 = dependencyMap(table[1]).DEBUG_BUILD && tmp3.id && null === tmp3Result;
                          if (tmp19Result.isThenable(tmp3Result)) {
                            tmp3Result.then(() => { ... }).then(null, arg1);
                            let nextPromise = tmp3Result.then(() => { ... });
                          } else {
                            dependencyMap = tmp;
                            table = tmp3Result;
                            closure_2 = tmp18;
                            let closure_3 = tmp2 + 1;
                            let syncPromise = new tmp19(tmp20[0]).SyncPromise(() => { ... });
                            syncPromise.then(arg0).then(null, arg1);
                            let nextPromise2 = syncPromise.then(arg0);
                          }
                          tmp19Result = dependencyMap(table[3]);
                        }
                      }
                      arg0(table);
                    });
                    syncPromise.then(arg0).then(null, arg1);
                    let nextPromise2 = syncPromise.then(arg0);
                  }
                  tmp19Result = dependencyMap(table[3]);
                }
              }
              arg0(table);
            }).then(closure_0);
          });
        } else {
          dependencyMap = tmp;
          table = tmp3Result;
          closure_2 = tmp18;
          let closure_3 = tmp2 + 1;
          let syncPromise = new tmp19(tmp20[0]).SyncPromise((arg0, arg1) => {
            let dependencyMap = arg0;
            if (null !== table) {
              if (typeof tmp3 === "function") {
                let obj = {};
                let merged = Object.assign(tmp4);
                let tmp3Result = tmp3(obj, closure_2);
                if (tmp5) {
                  let logger = tmp19(tmp20[2]).logger;
                  let _HermesInternal = HermesInternal;
                  logger.log("Event processor \"" + tmp3.id + "\" dropped event");
                }
                let tmp18 = closure_2;
                tmp5 = dependencyMap(table[1]).DEBUG_BUILD && tmp3.id && null === tmp3Result;
                if (tmp19Result.isThenable(tmp3Result)) {
                  tmp3Result.then((arg0) => {
                    let closure_1 = arg0;
                    closure_3 = closure_3 + 1;
                    return new outer2_0(outer2_1[0]).SyncPromise((arg0, arg1) => {
                      let dependencyMap = arg0;
                      if (null !== table) {
                        if (typeof tmp3 === "function") {
                          let obj = {};
                          let merged = Object.assign(tmp4);
                          let tmp3Result = tmp3(obj, closure_2);
                          if (tmp5) {
                            let logger = tmp19(tmp20[2]).logger;
                            let _HermesInternal = HermesInternal;
                            logger.log("Event processor \"" + tmp3.id + "\" dropped event");
                          }
                          let tmp18 = closure_2;
                          tmp5 = dependencyMap(table[1]).DEBUG_BUILD && tmp3.id && null === tmp3Result;
                          if (tmp19Result.isThenable(tmp3Result)) {
                            tmp3Result.then(() => { ... }).then(null, arg1);
                            let nextPromise = tmp3Result.then(() => { ... });
                          } else {
                            dependencyMap = tmp;
                            table = tmp3Result;
                            closure_2 = tmp18;
                            let closure_3 = tmp2 + 1;
                            let syncPromise = new tmp19(tmp20[0]).SyncPromise(() => { ... });
                            syncPromise.then(arg0).then(null, arg1);
                            let nextPromise2 = syncPromise.then(arg0);
                          }
                          tmp19Result = dependencyMap(table[3]);
                        }
                      }
                      arg0(table);
                    }).then(closure_0);
                  }).then(null, arg1);
                  let nextPromise = tmp3Result.then((arg0) => {
                    let closure_1 = arg0;
                    closure_3 = closure_3 + 1;
                    return new outer2_0(outer2_1[0]).SyncPromise((arg0, arg1) => {
                      let dependencyMap = arg0;
                      if (null !== table) {
                        if (typeof tmp3 === "function") {
                          let obj = {};
                          let merged = Object.assign(tmp4);
                          let tmp3Result = tmp3(obj, closure_2);
                          if (tmp5) {
                            let logger = tmp19(tmp20[2]).logger;
                            let _HermesInternal = HermesInternal;
                            logger.log("Event processor \"" + tmp3.id + "\" dropped event");
                          }
                          let tmp18 = closure_2;
                          tmp5 = dependencyMap(table[1]).DEBUG_BUILD && tmp3.id && null === tmp3Result;
                          if (tmp19Result.isThenable(tmp3Result)) {
                            tmp3Result.then(() => { ... }).then(null, arg1);
                            let nextPromise = tmp3Result.then(() => { ... });
                          } else {
                            dependencyMap = tmp;
                            table = tmp3Result;
                            closure_2 = tmp18;
                            let closure_3 = tmp2 + 1;
                            let syncPromise = new tmp19(tmp20[0]).SyncPromise(() => { ... });
                            syncPromise.then(arg0).then(null, arg1);
                            let nextPromise2 = syncPromise.then(arg0);
                          }
                          tmp19Result = dependencyMap(table[3]);
                        }
                      }
                      arg0(table);
                    }).then(closure_0);
                  });
                } else {
                  dependencyMap = tmp;
                  table = tmp3Result;
                  closure_2 = tmp18;
                  let closure_3 = tmp2 + 1;
                  let syncPromise = new tmp19(tmp20[0]).SyncPromise((arg0, arg1) => {
                    let dependencyMap = arg0;
                    if (null !== table) {
                      if (typeof tmp3 === "function") {
                        let obj = {};
                        let merged = Object.assign(tmp4);
                        let tmp3Result = tmp3(obj, closure_2);
                        if (tmp5) {
                          let logger = tmp19(tmp20[2]).logger;
                          let _HermesInternal = HermesInternal;
                          logger.log("Event processor \"" + tmp3.id + "\" dropped event");
                        }
                        let tmp18 = closure_2;
                        tmp5 = dependencyMap(table[1]).DEBUG_BUILD && tmp3.id && null === tmp3Result;
                        if (tmp19Result.isThenable(tmp3Result)) {
                          tmp3Result.then((arg0) => {
                            let closure_1 = arg0;
                            closure_3 = closure_3 + 1;
                            return new outer2_0(outer2_1[0]).SyncPromise(() => { ... }).then(closure_0);
                          }).then(null, arg1);
                          let nextPromise = tmp3Result.then((arg0) => {
                            let closure_1 = arg0;
                            closure_3 = closure_3 + 1;
                            return new outer2_0(outer2_1[0]).SyncPromise(() => { ... }).then(closure_0);
                          });
                        } else {
                          dependencyMap = tmp;
                          table = tmp3Result;
                          closure_2 = tmp18;
                          let closure_3 = tmp2 + 1;
                          let syncPromise = new tmp19(tmp20[0]).SyncPromise((arg0, arg1) => {
                            let dependencyMap = arg0;
                            if (null !== table) {
                              if (typeof tmp3 === "function") {
                                let obj = {};
                                let merged = Object.assign(tmp4);
                                let tmp3Result = tmp3(obj, closure_2);
                                if (tmp5) {
                                  let logger = tmp19(tmp20[2]).logger;
                                  let _HermesInternal = HermesInternal;
                                  logger.log("Event processor \"" + tmp3.id + "\" dropped event");
                                }
                                let tmp18 = closure_2;
                                tmp5 = dependencyMap(table[1]).DEBUG_BUILD && tmp3.id && null === tmp3Result;
                                if (tmp19Result.isThenable(tmp3Result)) {
                                  tmp3Result.then(() => { ... }).then(null, arg1);
                                  let nextPromise = tmp3Result.then(() => { ... });
                                } else {
                                  dependencyMap = tmp;
                                  table = tmp3Result;
                                  closure_2 = tmp18;
                                  let closure_3 = tmp2 + 1;
                                  let syncPromise = new tmp19(tmp20[0]).SyncPromise(() => { ... });
                                  syncPromise.then(arg0).then(null, arg1);
                                  let nextPromise2 = syncPromise.then(arg0);
                                }
                                tmp19Result = dependencyMap(table[3]);
                              }
                            }
                            arg0(table);
                          });
                          syncPromise.then(arg0).then(null, arg1);
                          let nextPromise2 = syncPromise.then(arg0);
                        }
                        tmp19Result = dependencyMap(table[3]);
                      }
                    }
                    arg0(table);
                  });
                  syncPromise.then(arg0).then(null, arg1);
                  let nextPromise2 = syncPromise.then(arg0);
                }
                tmp19Result = dependencyMap(table[3]);
              }
            }
            arg0(table);
          });
          syncPromise.then(arg0).then(null, arg1);
          let nextPromise2 = syncPromise.then(arg0);
        }
        tmp19Result = dependencyMap(table[3]);
      }
    }
    arg0(table);
  });
};