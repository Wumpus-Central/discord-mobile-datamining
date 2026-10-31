// _runtime/01035_logEnricherIntegration.js
const require = arg1;
const dependencyMap = arg6;
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    let _Promise = arg2;
    closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    return new _Promise((fn, arg1) => {
      closure_0 = fn;
      closure_1 = arg1;
      function fulfilled(result) {
        try {
          step(iter.next(result));
        } catch (tmp5) {
          closure_1(tmp5);
        }
      }
      function rejected(arg0) {
        try {
          step(iter.throw(arg0));
        } catch (tmp5) {
          closure_1(tmp5);
        }
      }
      let iter = rejected;
      function step(done) {
        if (done.done) {
          closure_0(done.value);
        } else {
          let tmp1 = done.value;
          closure_0 = tmp1;
          if (!(tmp1 instanceof Promise)) {
            tmp1 = new tmp((fn) => {
              fn(value);
            });
          }
          tmp1.then(fulfilled, iter);
        }
      }
      let items = closure_1;
      if (!closure_1) {
        items = [];
      }
      iter = iter.apply(closure_0, items);
      const iter2 = iter.next();
      value = iter2.value;
      if (iter2.done) {
        fn(value);
      } else {
        closure_0 = value;
        let tmp32 = value;
        if (!(value instanceof fulfilled)) {
          tmp32 = new tmp3((fn) => {
            fn(value);
          });
        }
        tmp32.then(fulfilled, rejected);
      }
    });
  };
}
let c3;

export () => ({
  name: "LogEnricher",
  setup(on) {
    closure_0 = on;
    on.on("afterInit", () => {
      fn(undefined, undefined, undefined, function*() {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_0 = tmp7;
                closure_128_0 = undefined;
                c3 = 1;
                const NATIVE = closure_0(tmp3[1]).NATIVE;
                c4 = 2;
                c5 = 1;
                const obj4 = { value: NATIVE.fetchNativeLogAttributes(), done: false };
                return obj4;
              }
            } else if (1 === tmp7) {
              c3 = 0;
              closure_128_1 = closure_2;
              const _HermesInternal = HermesInternal;
              c5 = 3;
              const obj5 = { value: Promise.reject("[LOGS]: Failed to prepare attributes from Native Layer: " + closure_128_1), done: true };
              return obj5;
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_128_0 = value;
              let contexts;
              if (null != closure_128_0) {
                contexts = closure_128_0.contexts;
              }
              closure_129_0 = contexts;
              let device1;
              if (null !== contexts) {
                if (undefined !== contexts) {
                  device1 = contexts.device;
                }
              }
              if (device1) {
                const device = closure_128_0.contexts.device;
                closure_129_1 = device;
                let brand;
                if (null !== device) {
                  if (undefined !== closure_129_1) {
                    brand = closure_129_1.brand;
                  }
                }
                const obj = { brand, model: null, family: null };
                const device2 = closure_128_0.contexts.device;
                closure_129_2 = device2;
                let model;
                if (null !== device2) {
                  if (undefined !== closure_129_2) {
                    model = closure_129_2.model;
                  }
                }
                obj.model = model;
                const device3 = closure_128_0.contexts.device;
                closure_129_3 = device3;
                let family;
                if (null !== device3) {
                  if (undefined !== closure_129_3) {
                    family = closure_129_3.family;
                  }
                }
                obj.family = family;
                device1 = obj;
              }
              let contexts1;
              const merged = Object.assign({}, device1);
              if (null != closure_128_0) {
                contexts1 = closure_128_0.contexts;
              }
              closure_129_4 = contexts1;
              let os;
              if (null !== contexts1) {
                if (undefined !== contexts1) {
                  os = contexts1.os;
                }
              }
              if (os) {
                const obj7 = { os: closure_128_0.contexts.os.name, version: closure_128_0.contexts.os.version };
                os = obj7;
              }
              let contexts2;
              const merged1 = Object.assign(merged, os);
              if (null != closure_128_0) {
                contexts2 = closure_128_0.contexts;
              }
              closure_129_5 = contexts2;
              let release;
              if (null !== contexts2) {
                if (undefined !== contexts2) {
                  release = contexts2.release;
                }
              }
              if (release) {
                const obj8 = { release: closure_128_0.contexts.release };
                release = obj8;
              }
              c3 = Object.assign(merged1, release);
              c3 = 0;
              c5 = 3;
              const obj9 = { value: Promise.resolve(), done: true };
              return obj9;
            }
          } catch (tmp62) {
            closure_2 = tmp62;
            if (tmp4 === c3) {
              c5 = tmp2;
              throw tmp62;
            } else {
              c4 = tmp;
            }
          }
        }
      }).then(() => {
        on.on("beforeCaptureLog", (attributes) => {
          if (undefined !== closure_2_3) {
            let attributes1 = attributes.attributes;
            if (null === attributes1) {
              attributes1 = {};
            }
            let obj2 = {};
            const globalScope = on(681).getGlobalScope();
            obj2 = undefined;
            if (globalScope) {
              if (typeof globalScope.getScopeData === "function") {
                let getScopeData;
                if (null != globalScope) {
                  getScopeData = globalScope.getScopeData;
                }
                let obj3;
                if (null !== getScopeData) {
                  if (undefined !== getScopeData) {
                    const call = getScopeData.call;
                    attributes = typeof call === "unknown" ? getScopeData() : call(globalScope).attributes;
                  }
                }
                if (!obj3) {
                  obj3 = {};
                }
                obj2 = obj3;
                const _Object = Object;
                const keys = Object.keys(obj3);
                const item = keys.forEach(/* F80288 */ function() { ... });
              }
            }
            const obj4 = on(681);
            const isolationScope = on(681).getIsolationScope();
            obj2 = undefined;
            if (isolationScope) {
              if (typeof isolationScope.getScopeData === "function") {
                let getScopeData1;
                if (null != isolationScope) {
                  getScopeData1 = isolationScope.getScopeData;
                }
                let obj5;
                if (null !== getScopeData1) {
                  if (undefined !== getScopeData1) {
                    const call2 = getScopeData1.call;
                    const attributes2 = typeof call2 === "unknown" ? getScopeData1() : call2(isolationScope).attributes;
                  }
                }
                if (!obj5) {
                  obj5 = {};
                }
                obj2 = obj5;
                const _Object2 = Object;
                const keys1 = Object.keys(obj5);
                const item1 = keys1.forEach(/* F80288 */ function() { ... });
              }
            }
            const tmpResult = on(681);
            const currentScope = on(681).getCurrentScope();
            obj2 = undefined;
            if (currentScope) {
              if (typeof currentScope.getScopeData === "function") {
                let getScopeData2;
                if (null != currentScope) {
                  getScopeData2 = currentScope.getScopeData;
                }
                let obj6;
                if (null !== getScopeData2) {
                  if (undefined !== getScopeData2) {
                    const call3 = getScopeData2.call;
                    const attributes3 = typeof call3 === "unknown" ? getScopeData2() : call3(currentScope).attributes;
                  }
                }
                if (!obj6) {
                  obj6 = {};
                }
                obj2 = obj6;
                const _Object3 = Object;
                const keys2 = Object.keys(obj6);
                const item2 = keys2.forEach(/* F80288 */ function() { ... });
              }
            }
            const _Object4 = Object;
            const keys3 = Object.keys(obj2);
            const item3 = keys3.forEach(/* F140264 */ function() { ... });
            const brand = closure_2_3.brand;
            let tmp18 = null == brand;
            if (!tmp18) {
              tmp18 = attributes1["device.brand"] && false;
              const tmp19 = attributes1["device.brand"] && false;
            }
            if (!tmp18) {
              attributes1["device.brand"] = brand;
            }
            const model = closure_2_3.model;
            let tmp21 = null == model;
            if (!tmp21) {
              tmp21 = attributes1["device.model"] && false;
              const tmp22 = attributes1["device.model"] && false;
            }
            if (!tmp21) {
              attributes1["device.model"] = model;
            }
            const family = closure_2_3.family;
            let tmp24 = null == family;
            if (!tmp24) {
              tmp24 = attributes1["device.family"] && false;
              const tmp25 = attributes1["device.family"] && false;
            }
            if (!tmp24) {
              attributes1["device.family"] = family;
            }
            const os = closure_2_3.os;
            let tmp27 = null == os;
            if (!tmp27) {
              tmp27 = attributes1["os.name"] && false;
              const tmp28 = attributes1["os.name"] && false;
            }
            if (!tmp27) {
              attributes1["os.name"] = os;
            }
            const version = closure_2_3.version;
            let tmp30 = null == version;
            if (!tmp30) {
              tmp30 = attributes1["os.version"] && false;
              const tmp31 = attributes1["os.version"] && false;
            }
            if (!tmp30) {
              attributes1["os.version"] = version;
            }
            const release = closure_2_3.release;
            let tmp33 = null == release;
            if (!tmp33) {
              tmp33 = attributes1["sentry.release"] && false;
              const tmp34 = attributes1["sentry.release"] && false;
            }
            if (!tmp33) {
              attributes1["sentry.release"] = release;
            }
            integrationByName = integrationByName.getIntegrationByName("MobileReplay");
            let replayId;
            if (null != integrationByName) {
              replayId = integrationByName.getReplayId();
            }
            let tmp36 = null == replayId;
            if (!tmp36) {
              tmp36 = attributes1["sentry.replay_id"] && false;
              const tmp37 = attributes1["sentry.replay_id"] && false;
            }
            if (!tmp36) {
              attributes1["sentry.replay_id"] = replayId;
            }
            attributes.attributes = attributes1;
            const tmpResult2 = on(681);
          }
        });
      }, (arg0) => {
        const debug = on(681).debug;
        debug.log(arg0);
      });
    });
  }
})