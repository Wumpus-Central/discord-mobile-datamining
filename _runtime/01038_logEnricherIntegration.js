// _runtime/01038_logEnricherIntegration.js
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
    _Promise = new _Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      function fulfilled(arg0) {
        try {
          step(iter.next(arg0));
        } catch (tmp5) {
          callback2(tmp5);
        }
      }
      function rejected(arg0) {
        try {
          step(iter.throw(arg0));
        } catch (tmp5) {
          callback2(tmp5);
        }
      }
      let iter = rejected;
      function step(done) {
        if (done.done) {
          callback(done.value);
        } else {
          let tmp = done.value;
          callback = tmp;
          if (!(tmp instanceof fulfilled)) {
            tmp = new tmp((arg0) => {
              arg0(closure_0);
            });
          }
          tmp.then(fulfilled, iter);
        }
      }
      let items = closure_1;
      if (!closure_1) {
        items = [];
      }
      iter = iter.apply(closure_0, items);
      const iter2 = iter.next();
      const value = iter2.value;
      if (iter2.done) {
        arg0(value);
      } else {
        closure_0 = value;
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((arg0) => {
            arg0(closure_0);
          });
        }
        tmp3.then(fulfilled, rejected);
      }
    });
    return _Promise;
  };
}
let c3;
arg5.logEnricherIntegration = () => ({
  name: "LogEnricher",
  setup(on) {
    closure_0 = on;
    on.on("afterInit", () => {
      closure_1_2(undefined, undefined, undefined, function* () {
        if (c5 === 2) {
          c5 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c5 = 2;
            if (0 === contexts1) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let device = tmp3;
                let contexts = tmp7;
                contexts = undefined;
                let family = 1;
                const NATIVE = closure_1_0(table[1]).NATIVE;
                contexts1 = 2;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = NATIVE.fetchNativeLogAttributes();
                return obj1;
              }
            } else if (1 === tmp7) {
              family = 0;
              table = device2;
              const _HermesInternal = HermesInternal;
              c5 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = Promise.reject("[LOGS]: Failed to prepare attributes from Native Layer: " + table);
              return obj2;
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              family = 0;
              c5 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              contexts = arg1;
              contexts = undefined;
              if (null != contexts) {
                contexts = contexts.contexts;
              }
              device = undefined;
              if (null !== contexts) {
                if (undefined !== contexts) {
                  device = contexts.device;
                }
              }
              if (device) {
                device = contexts.contexts.device;
                let brand;
                if (null !== device) {
                  if (undefined !== device) {
                    brand = device.brand;
                  }
                }
                obj = { brand: null, model: null, family: null };
                obj[0] = brand;
                device2 = contexts.contexts.device;
                let model;
                if (null !== device2) {
                  if (undefined !== device2) {
                    model = device2.model;
                  }
                }
                obj[1] = model;
                const device3 = contexts.contexts.device;
                family = device3;
                family = undefined;
                if (null !== device3) {
                  if (undefined !== family) {
                    family = family.family;
                  }
                }
                obj[2] = family;
                device = obj;
              }
              contexts1 = undefined;
              const merged = Object.assign({}, device);
              if (null != contexts) {
                contexts1 = contexts.contexts;
              }
              let os;
              if (null !== contexts1) {
                if (undefined !== contexts1) {
                  os = contexts1.os;
                }
              }
              if (os) {
                const obj4 = { os: null, version: null };
                obj4[0] = contexts.contexts.os.name;
                obj4[1] = contexts.contexts.os.version;
                os = obj4;
              }
              let contexts2;
              const merged1 = Object.assign(merged, os);
              if (null != contexts) {
                contexts2 = contexts.contexts;
              }
              c5 = contexts2;
              let release;
              if (null !== contexts2) {
                if (undefined !== contexts2) {
                  release = contexts2.release;
                }
              }
              if (release) {
                const obj5 = { release: null };
                obj5[0] = contexts.contexts.release;
                release = obj5;
              }
              closure_3 = Object.assign(merged1, release);
              family = 0;
              c5 = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = Promise.resolve();
              return obj6;
            }
          } catch (tmp62) {
            device2 = tmp62;
            if (tmp4 === family) {
              c5 = tmp2;
              throw tmp62;
            } else {
              contexts1 = tmp;
            }
          }
        }
      }).then(
        () => {
          lib.on("beforeCaptureLog", (attributes) => {
            if (undefined !== closure_1_3) {
              attributes = attributes.attributes;
              if (null === attributes) {
                attributes = {};
              }
              const brand = closure_1_3.brand;
              let tmp2 = !brand;
              if (brand) {
                tmp2 = attributes["device.brand"] && false;
                const tmp3 = attributes["device.brand"] && false;
              }
              if (!tmp2) {
                attributes["device.brand"] = brand;
              }
              const model = closure_1_3.model;
              let tmp5 = !model;
              if (model) {
                tmp5 = attributes["device.model"] && false;
                const tmp6 = attributes["device.model"] && false;
              }
              if (!tmp5) {
                attributes["device.model"] = model;
              }
              const family = closure_1_3.family;
              let tmp8 = !family;
              if (family) {
                tmp8 = attributes["device.family"] && false;
                const tmp9 = attributes["device.family"] && false;
              }
              if (!tmp8) {
                attributes["device.family"] = family;
              }
              const os = closure_1_3.os;
              let tmp11 = !os;
              if (os) {
                tmp11 = attributes["os.name"] && false;
                const tmp12 = attributes["os.name"] && false;
              }
              if (!tmp11) {
                attributes["os.name"] = os;
              }
              const version = closure_1_3.version;
              let tmp14 = !version;
              if (version) {
                tmp14 = attributes["os.version"] && false;
                const tmp15 = attributes["os.version"] && false;
              }
              if (!tmp14) {
                attributes["os.version"] = version;
              }
              const release = closure_1_3.release;
              let tmp17 = !release;
              if (release) {
                tmp17 = attributes["sentry.release"] && false;
                const tmp18 = attributes["sentry.release"] && false;
              }
              if (!tmp17) {
                attributes["sentry.release"] = release;
              }
              const integrationByName = closure_0.getIntegrationByName("MobileReplay");
              let replayId;
              if (null != integrationByName) {
                replayId = integrationByName.getReplayId();
              }
              let tmp20 = !replayId;
              if (replayId) {
                tmp20 = attributes["sentry.replay_id"] && false;
                const tmp21 = attributes["sentry.replay_id"] && false;
              }
              if (!tmp20) {
                attributes["sentry.replay_id"] = replayId;
              }
              attributes.attributes = attributes;
            }
          });
        },
        (arg0) => {
          const debug = lib(table[0]).debug;
          debug.log(arg0);
        },
      );
    });
  },
});
