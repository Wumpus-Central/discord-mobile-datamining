// _runtime/12848_notifyEventProcessors.js
const require = arg1;
let dependencyMap = arg6;

export const notifyEventProcessors = function notifyEventProcessors(arg0, arg1, arg2) {
  _require = arg0;
  dependencyMap = arg1;
  closure_2 = arg2;
  return new require("metro/12821__.js").SyncPromise((fn, arg1) => {
    dependencyMap = fn;
    if (null !== dependencyMap) {
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
        tmp5 = dependencyMap(dependencyMap[1]).DEBUG_BUILD && tmp3.id && null === tmp3Result;
        if (tmp19Result.isThenable(tmp3Result)) {
          tmp3Result.then((result) => {
            let dependencyMap = result;
            closure_2 = closure_2_2;
            closure_3 = closure_2_3 + 1;
            return new closure_3_0(closure_3_1[0]).SyncPromise((fn, arg1) => {
              dependencyMap = fn;
              if (null !== dependencyMap) {
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
                  tmp5 = dependencyMap(dependencyMap[1]).DEBUG_BUILD && tmp3.id && null === tmp3Result;
                  if (tmp19Result.isThenable(tmp3Result)) {
                    tmp3Result.then((result) => {
                      let dependencyMap = result;
                      closure_2 = closure_2_2;
                      closure_3 = closure_2_3 + 1;
                      return new closure_3_0(closure_3_1[0]).SyncPromise(() => { ... }).then(dependencyMap);
                    }).then(null, arg1);
                    let nextPromise = tmp3Result.then((result) => {
                      let dependencyMap = result;
                      closure_2 = closure_2_2;
                      closure_3 = closure_2_3 + 1;
                      return new closure_3_0(closure_3_1[0]).SyncPromise(() => { ... }).then(dependencyMap);
                    });
                  } else {
                    dependencyMap = tmp3Result;
                    closure_2 = tmp18;
                    closure_3 = tmp2 + 1;
                    let syncPromise = new tmp19(tmp20[0]).SyncPromise((fn, arg1) => {
                      dependencyMap = fn;
                      if (null !== dependencyMap) {
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
                          tmp5 = dependencyMap(dependencyMap[1]).DEBUG_BUILD && tmp3.id && null === tmp3Result;
                          if (tmp19Result.isThenable(tmp3Result)) {
                            tmp3Result.then(() => { ... }).then(null, arg1);
                            let nextPromise = tmp3Result.then(() => { ... });
                          } else {
                            dependencyMap = tmp3Result;
                            closure_2 = tmp18;
                            closure_3 = tmp2 + 1;
                            let syncPromise = new tmp19(tmp20[0]).SyncPromise(() => { ... });
                            syncPromise.then(fn).then(null, arg1);
                            let nextPromise2 = syncPromise.then(fn);
                          }
                          tmp19Result = dependencyMap(dependencyMap[3]);
                        }
                      }
                      fn(dependencyMap);
                    });
                    syncPromise.then(fn).then(null, arg1);
                    let nextPromise2 = syncPromise.then(fn);
                  }
                  tmp19Result = dependencyMap(dependencyMap[3]);
                }
              }
              fn(dependencyMap);
            }).then(dependencyMap);
          }).then(null, arg1);
          let nextPromise = tmp3Result.then((result) => {
            let dependencyMap = result;
            closure_2 = closure_2_2;
            closure_3 = closure_2_3 + 1;
            return new closure_3_0(closure_3_1[0]).SyncPromise((fn, arg1) => {
              dependencyMap = fn;
              if (null !== dependencyMap) {
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
                  tmp5 = dependencyMap(dependencyMap[1]).DEBUG_BUILD && tmp3.id && null === tmp3Result;
                  if (tmp19Result.isThenable(tmp3Result)) {
                    tmp3Result.then((result) => {
                      let dependencyMap = result;
                      closure_2 = closure_2_2;
                      closure_3 = closure_2_3 + 1;
                      return new closure_3_0(closure_3_1[0]).SyncPromise(() => { ... }).then(dependencyMap);
                    }).then(null, arg1);
                    let nextPromise = tmp3Result.then((result) => {
                      let dependencyMap = result;
                      closure_2 = closure_2_2;
                      closure_3 = closure_2_3 + 1;
                      return new closure_3_0(closure_3_1[0]).SyncPromise(() => { ... }).then(dependencyMap);
                    });
                  } else {
                    dependencyMap = tmp3Result;
                    closure_2 = tmp18;
                    closure_3 = tmp2 + 1;
                    let syncPromise = new tmp19(tmp20[0]).SyncPromise((fn, arg1) => {
                      dependencyMap = fn;
                      if (null !== dependencyMap) {
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
                          tmp5 = dependencyMap(dependencyMap[1]).DEBUG_BUILD && tmp3.id && null === tmp3Result;
                          if (tmp19Result.isThenable(tmp3Result)) {
                            tmp3Result.then(() => { ... }).then(null, arg1);
                            let nextPromise = tmp3Result.then(() => { ... });
                          } else {
                            dependencyMap = tmp3Result;
                            closure_2 = tmp18;
                            closure_3 = tmp2 + 1;
                            let syncPromise = new tmp19(tmp20[0]).SyncPromise(() => { ... });
                            syncPromise.then(fn).then(null, arg1);
                            let nextPromise2 = syncPromise.then(fn);
                          }
                          tmp19Result = dependencyMap(dependencyMap[3]);
                        }
                      }
                      fn(dependencyMap);
                    });
                    syncPromise.then(fn).then(null, arg1);
                    let nextPromise2 = syncPromise.then(fn);
                  }
                  tmp19Result = dependencyMap(dependencyMap[3]);
                }
              }
              fn(dependencyMap);
            }).then(dependencyMap);
          });
        } else {
          dependencyMap = tmp3Result;
          closure_2 = tmp18;
          closure_3 = tmp2 + 1;
          let syncPromise = new tmp19(tmp20[0]).SyncPromise((fn, arg1) => {
            dependencyMap = fn;
            if (null !== dependencyMap) {
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
                tmp5 = dependencyMap(dependencyMap[1]).DEBUG_BUILD && tmp3.id && null === tmp3Result;
                if (tmp19Result.isThenable(tmp3Result)) {
                  tmp3Result.then((result) => {
                    let dependencyMap = result;
                    closure_2 = closure_2_2;
                    closure_3 = closure_2_3 + 1;
                    return new closure_3_0(closure_3_1[0]).SyncPromise((fn, arg1) => {
                      dependencyMap = fn;
                      if (null !== dependencyMap) {
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
                          tmp5 = dependencyMap(dependencyMap[1]).DEBUG_BUILD && tmp3.id && null === tmp3Result;
                          if (tmp19Result.isThenable(tmp3Result)) {
                            tmp3Result.then(() => { ... }).then(null, arg1);
                            let nextPromise = tmp3Result.then(() => { ... });
                          } else {
                            dependencyMap = tmp3Result;
                            closure_2 = tmp18;
                            closure_3 = tmp2 + 1;
                            let syncPromise = new tmp19(tmp20[0]).SyncPromise(() => { ... });
                            syncPromise.then(fn).then(null, arg1);
                            let nextPromise2 = syncPromise.then(fn);
                          }
                          tmp19Result = dependencyMap(dependencyMap[3]);
                        }
                      }
                      fn(dependencyMap);
                    }).then(dependencyMap);
                  }).then(null, arg1);
                  let nextPromise = tmp3Result.then((result) => {
                    let dependencyMap = result;
                    closure_2 = closure_2_2;
                    closure_3 = closure_2_3 + 1;
                    return new closure_3_0(closure_3_1[0]).SyncPromise((fn, arg1) => {
                      dependencyMap = fn;
                      if (null !== dependencyMap) {
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
                          tmp5 = dependencyMap(dependencyMap[1]).DEBUG_BUILD && tmp3.id && null === tmp3Result;
                          if (tmp19Result.isThenable(tmp3Result)) {
                            tmp3Result.then(() => { ... }).then(null, arg1);
                            let nextPromise = tmp3Result.then(() => { ... });
                          } else {
                            dependencyMap = tmp3Result;
                            closure_2 = tmp18;
                            closure_3 = tmp2 + 1;
                            let syncPromise = new tmp19(tmp20[0]).SyncPromise(() => { ... });
                            syncPromise.then(fn).then(null, arg1);
                            let nextPromise2 = syncPromise.then(fn);
                          }
                          tmp19Result = dependencyMap(dependencyMap[3]);
                        }
                      }
                      fn(dependencyMap);
                    }).then(dependencyMap);
                  });
                } else {
                  dependencyMap = tmp3Result;
                  closure_2 = tmp18;
                  closure_3 = tmp2 + 1;
                  let syncPromise = new tmp19(tmp20[0]).SyncPromise((fn, arg1) => {
                    dependencyMap = fn;
                    if (null !== dependencyMap) {
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
                        tmp5 = dependencyMap(dependencyMap[1]).DEBUG_BUILD && tmp3.id && null === tmp3Result;
                        if (tmp19Result.isThenable(tmp3Result)) {
                          tmp3Result.then((result) => {
                            let dependencyMap = result;
                            closure_2 = closure_2_2;
                            closure_3 = closure_2_3 + 1;
                            return new closure_3_0(closure_3_1[0]).SyncPromise(() => { ... }).then(dependencyMap);
                          }).then(null, arg1);
                          let nextPromise = tmp3Result.then((result) => {
                            let dependencyMap = result;
                            closure_2 = closure_2_2;
                            closure_3 = closure_2_3 + 1;
                            return new closure_3_0(closure_3_1[0]).SyncPromise(() => { ... }).then(dependencyMap);
                          });
                        } else {
                          dependencyMap = tmp3Result;
                          closure_2 = tmp18;
                          closure_3 = tmp2 + 1;
                          let syncPromise = new tmp19(tmp20[0]).SyncPromise((fn, arg1) => {
                            dependencyMap = fn;
                            if (null !== dependencyMap) {
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
                                tmp5 = dependencyMap(dependencyMap[1]).DEBUG_BUILD && tmp3.id && null === tmp3Result;
                                if (tmp19Result.isThenable(tmp3Result)) {
                                  tmp3Result.then(() => { ... }).then(null, arg1);
                                  let nextPromise = tmp3Result.then(() => { ... });
                                } else {
                                  dependencyMap = tmp3Result;
                                  closure_2 = tmp18;
                                  closure_3 = tmp2 + 1;
                                  let syncPromise = new tmp19(tmp20[0]).SyncPromise(() => { ... });
                                  syncPromise.then(fn).then(null, arg1);
                                  let nextPromise2 = syncPromise.then(fn);
                                }
                                tmp19Result = dependencyMap(dependencyMap[3]);
                              }
                            }
                            fn(dependencyMap);
                          });
                          syncPromise.then(fn).then(null, arg1);
                          let nextPromise2 = syncPromise.then(fn);
                        }
                        tmp19Result = dependencyMap(dependencyMap[3]);
                      }
                    }
                    fn(dependencyMap);
                  });
                  syncPromise.then(fn).then(null, arg1);
                  let nextPromise2 = syncPromise.then(fn);
                }
                tmp19Result = dependencyMap(dependencyMap[3]);
              }
            }
            fn(dependencyMap);
          });
          syncPromise.then(fn).then(null, arg1);
          let nextPromise2 = syncPromise.then(fn);
        }
        tmp19Result = dependencyMap(dependencyMap[3]);
      }
    }
    fn(dependencyMap);
  });
};