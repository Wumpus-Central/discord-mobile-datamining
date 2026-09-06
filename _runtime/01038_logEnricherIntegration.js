// === Module 1038: logEnricherIntegration ===

// Module 1038 (logEnricherIntegration)
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
    _Promise = new _Promise((fn, arg1) => {
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
          let tmp = done.value;
          closure_0 = tmp;
          if (!(tmp instanceof Promise)) {
            tmp = new tmp((fn) => {
              fn(value);
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
      value = iter2.value;
      if (iter2.done) {
        fn(value);
      } else {
        closure_0 = value;
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((fn) => {
            fn(value);
          });
        }
        tmp3.then(fulfilled, rejected);
      }
    });
    return _Promise;
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
            let obj = { value, done: true };
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
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
                obj = { value, done: true };
                return obj;
              } else {
                closure_0 = tmp7;
                closure_128_0 = undefined;
                c3 = 1;
                const NATIVE = closure_0(tmp3[1]).NATIVE;
                c4 = 2;
                c5 = 1;
                const obj1 = { value: NATIVE.fetchNativeLogAttributes(), done: false };
                return obj1;
              }
            } else if (1 === tmp7) {
              c3 = 0;
              closure_128_1 = closure_2;
              const _HermesInternal = HermesInternal;
              c5 = 3;
              const obj2 = { value: Promise.reject("[LOGS]: Failed to prepare attributes from Native Layer: " + closure_128_1), done: true };
              return obj2;
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_128_0 = value;
              let contexts;
              if (null != closure_128_0) {
                contexts = closure_128_0.contexts;
              }
              closure_129_0 = contexts;
              let device;
              if (null !== contexts) {
                if (undefined !== contexts) {
                  device = contexts.device;
                }
              }
              if (device) {
                device = closure_128_0.contexts.device;
                closure_129_1 = device;
                let brand;
                if (null !== device) {
                  if (undefined !== closure_129_1) {
                    brand = closure_129_1.brand;
                  }
                }
                obj = { brand, model: null, family: null };
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
                device = obj;
              }
              let contexts1;
              const merged = Object.assign({}, device);
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
                const obj4 = { os: closure_128_0.contexts.os.name, version: closure_128_0.contexts.os.version };
                os = obj4;
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
                const obj5 = { release: closure_128_0.contexts.release };
                release = obj5;
              }
              c3 = Object.assign(merged1, release);
              c3 = 0;
              c5 = 3;
              const obj6 = { value: Promise.resolve(), done: true };
              return obj6;
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
            attributes = attributes.attributes;
            if (null === attributes) {
              attributes = {};
            }
            const brand = closure_2_3.brand;
            let tmp2 = !brand;
            if (brand) {
              tmp2 = attributes["device.brand"] && false;
              const tmp3 = attributes["device.brand"] && false;
            }
            if (!tmp2) {
              attributes["device.brand"] = brand;
            }
            const model = closure_2_3.model;
            let tmp5 = !model;
            if (model) {
              tmp5 = attributes["device.model"] && false;
              const tmp6 = attributes["device.model"] && false;
            }
            if (!tmp5) {
              attributes["device.model"] = model;
            }
            const family = closure_2_3.family;
            let tmp8 = !family;
            if (family) {
              tmp8 = attributes["device.family"] && false;
              const tmp9 = attributes["device.family"] && false;
            }
            if (!tmp8) {
              attributes["device.family"] = family;
            }
            const os = closure_2_3.os;
            let tmp11 = !os;
            if (os) {
              tmp11 = attributes["os.name"] && false;
              const tmp12 = attributes["os.name"] && false;
            }
            if (!tmp11) {
              attributes["os.name"] = os;
            }
            const version = closure_2_3.version;
            let tmp14 = !version;
            if (version) {
              tmp14 = attributes["os.version"] && false;
              const tmp15 = attributes["os.version"] && false;
            }
            if (!tmp14) {
              attributes["os.version"] = version;
            }
            const release = closure_2_3.release;
            let tmp17 = !release;
            if (release) {
              tmp17 = attributes["sentry.release"] && false;
              const tmp18 = attributes["sentry.release"] && false;
            }
            if (!tmp17) {
              attributes["sentry.release"] = release;
            }
            integrationByName = integrationByName.getIntegrationByName("MobileReplay");
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
      }, (arg0) => {
        const debug = on(closure_1_1[0]).debug;
        debug.log(arg0);
      });
    });
  }
})