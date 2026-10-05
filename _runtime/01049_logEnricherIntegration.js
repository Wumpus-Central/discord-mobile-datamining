// _runtime/01049_logEnricherIntegration.js
let attributes, c4, c5, closure_2, integrationByName;

const fn =
  (this && this.__awaiter) ||
  ((arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let _Promise = arg2;
    const Promise = arg2;
    let closure_3 = arg3;
    if (!arg2) {
      let tmp = globalThis;
      _Promise = Promise;
    }
    const _Promise1 = new _Promise(function (fn, arg1) {
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
          fn(done.value);
        } else {
          let tmp1 = done.value;
          const value = tmp1;
          if (!(tmp1 instanceof Promise)) {
            const self = this;
            const self2 = this;
            tmp1 = new tmp((fn) => {
              fn(value);
            });
          }
          tmp1.then(fulfilled, iter);
        }
      }
      let items = closure_1;
      const tmp = iter;
      const apply = iter.apply;
      const tmp2 = closure_0;
      if (!closure_1) {
        items = [];
      }
      iter = apply(tmp2, items);
      const iter2 = iter.next();
      let value = iter2.value;
      if (iter2.done) {
        const tmp5 = fn(value);
      } else {
        let tmp32 = value;
        if (!(value instanceof fulfilled)) {
          let self = this;
          let self2 = this;
          tmp32 = new tmp3((fn) => {
            fn(value);
          });
        }
        tmp32.then(fulfilled, rejected);
      }
    });
    return _Promise1;
  });
let c3;

export const logEnricherIntegration = () => {
  let obj = {
    name: "LogEnricher",
    setup(on) {
      let closure_0 = on;
      on.on("afterInit", () => {
        const promise = fn(undefined, undefined, undefined, function* () {
          let family;
          let model;
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let closure_1;
              let closure_0;
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
                  closure_1 = tmp;
                  closure_0 = undefined;
                  c3 = 1;
                  const NATIVE = closure_0(closure_1[1]).NATIVE;
                  c4 = 2;
                  c5 = 1;
                  const obj4 = { value: NATIVE.fetchNativeLogAttributes(), done: false };
                  return obj4;
                }
              } else if (1 === c4) {
                c3 = 0;
                closure_1 = closure_2;
                const _HermesInternal = HermesInternal;
                c5 = 3;
                const obj5 = {
                  value: Promise.reject("[LOGS]: Failed to prepare attributes from Native Layer: " + closure_1),
                  done: true,
                };
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
                closure_0 = value;
                let contexts;
                const _Object = Object;
                const _Object2 = Object;
                const assign2 = Object.assign;
                const _Object3 = Object;
                const assign3 = Object.assign;
                if (null != closure_0) {
                  contexts = closure_0.contexts;
                }
                let device1;
                if (null !== contexts) {
                  if (undefined !== contexts) {
                    device1 = contexts.device;
                  }
                }
                if (device1) {
                  const device = closure_0.contexts.device;
                  let brand;
                  if (null !== device) {
                    if (undefined !== device) {
                      brand = device.brand;
                    }
                  }
                  const obj = { brand, model, family };
                  const device2 = closure_0.contexts.device;
                  model = undefined;
                  if (null !== device2) {
                    if (undefined !== device2) {
                      model = device2.model;
                    }
                  }
                  const device3 = closure_0.contexts.device;
                  family = undefined;
                  if (null !== device3) {
                    if (undefined !== device3) {
                      family = device3.family;
                    }
                  }
                  device1 = obj;
                }
                let contexts1;
                const assign3Result = assign3({}, device1);
                if (null != closure_0) {
                  contexts1 = closure_0.contexts;
                }
                let os;
                if (null !== contexts1) {
                  if (undefined !== contexts1) {
                    os = contexts1.os;
                  }
                }
                if (os) {
                  const obj7 = { os: closure_0.contexts.os.name, version: closure_0.contexts.os.version };
                  os = obj7;
                }
                let contexts2;
                const assign2Result = assign2(assign3Result, os);
                if (null != closure_0) {
                  contexts2 = closure_0.contexts;
                }
                let release;
                if (null !== contexts2) {
                  if (undefined !== contexts2) {
                    release = contexts2.release;
                  }
                }
                if (release) {
                  const obj8 = { release: closure_0.contexts.release };
                  release = obj8;
                }
                assign(assign2Result, release);
                c3 = 0;
                c5 = 3;
                const obj9 = { value: Promise.resolve(), done: true };
                return obj9;
              }
            } catch (tmp59) {
              closure_2 = tmp59;
              if (0 === c3) {
                c5 = 3;
                throw tmp59;
              } else {
                c4 = 1;
              }
            }
          }
        });
        promise.then(
          () => {
            on.on("beforeCaptureLog", (attributes) => {
              if (undefined !== closure_2_3) {
                attributes = attributes.attributes ?? {};
                const brand = closure_2_3.brand;
                let tmp2 = !brand;
                if (brand) {
                  tmp2 = attributes["device.brand"] && false;
                }
                if (!tmp2) {
                  attributes["device.brand"] = brand;
                }
                const model = closure_2_3.model;
                let tmp5 = !model;
                if (model) {
                  tmp5 = attributes["device.model"] && false;
                }
                if (!tmp5) {
                  attributes["device.model"] = model;
                }
                const family = closure_2_3.family;
                let tmp8 = !family;
                if (family) {
                  tmp8 = attributes["device.family"] && false;
                }
                if (!tmp8) {
                  attributes["device.family"] = family;
                }
                const os = closure_2_3.os;
                let tmp11 = !os;
                if (os) {
                  tmp11 = attributes["os.name"] && false;
                }
                if (!tmp11) {
                  attributes["os.name"] = os;
                }
                const version = closure_2_3.version;
                let tmp14 = !version;
                if (version) {
                  tmp14 = attributes["os.version"] && false;
                }
                if (!tmp14) {
                  attributes["os.version"] = version;
                }
                const release = closure_2_3.release;
                let tmp17 = !release;
                if (release) {
                  tmp17 = attributes["sentry.release"] && false;
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
                }
                if (!tmp20) {
                  attributes["sentry.replay_id"] = replayId;
                }
                attributes.attributes = attributes;
              }
            });
          },
          (arg0) => {
            const debug = on(closure_1_1[0]).debug;
            debug.log(arg0);
          },
        );
      });
    },
  };
  return obj;
};
