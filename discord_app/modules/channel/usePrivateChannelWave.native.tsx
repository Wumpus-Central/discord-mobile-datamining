// === Module 16263: usePrivateChannelWave ===

// Module 16263 (usePrivateChannelWave)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const Constants = fn(1085);
({ ME: metroRequire, Routes: closure_7 } = Constants);
const MessageSendLocation = fn(5083).MessageSendLocation;
let c9 = "749054660769218631";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/usePrivateChannelWave.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function usePrivateChannelWave(id, arg1) {
  _require = id;
  const cResult = require("c").c(6);
  [first, dependencyMap] = noop.useState(false);
  if (cResult[0] === id.id) {
    if (cResult[1] === first) {
      let tmp6 = cResult[2];
    }
    const privateChannelWaveEligible = require("usePrivateChannelWaveEligible").usePrivateChannelWaveEligible(id, arg1);
    if (cResult[3] === tmp6) {
      if (cResult[4] === privateChannelWaveEligible) {
        let tmp9 = cResult[5];
      }
      return tmp9;
    }
    let obj2 = { waveShouldShow: privateChannelWaveEligible, wavePressed: tmp6 };
    cResult[3] = tmp6;
    cResult[4] = privateChannelWaveEligible;
    cResult[5] = obj2;
    tmp9 = obj2;
    const tmpResult = require("usePrivateChannelWaveEligible");
  }
  _require = asyncGeneratorStep(async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c5 = 2;
        let tmp7 = c4;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_1 = tmp3;
            closure_0 = tmp7;
            closure_128_0 = undefined;
            tmp7 = closure_1;
            if (!closure_1) {
              tmp44(true);
              const obj8 = { channelId: closure_0.id, source: "Messages Tab" };
              closure_0(tmp44[7]).trackWaveCtaClicked(obj8);
              const obj4 = closure_0(tmp44[7]);
              closure_0(tmp44[8]).transitionTo(React5.CHANNEL(timestampProducer, closure_0.id));
              c3 = 1;
              const obj7 = first(tmp44[9]);
              const items = [closure_2_9];
              const obj9 = { location: constants.SEND_WAVE };
              c4 = 2;
              c5 = 1;
              const obj10 = { value: obj7.sendStickers(closure_0.id, items, "", obj9), done: false };
              return obj10;
            }
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            closure_128_0 = tmp44;
            let ok = closure_128_0.ok;
            if (!ok) {
              ok = 429 !== closure_128_0.status;
            }
            if (!ok) {
              const obj11 = { key: "HANDLE_WAVE_PRESS_TOAST", content: null, icon: null };
              const intl = closure_0(tmp44[11]).intl;
              obj11.content = intl.string(closure_0(tmp44[11]).t.Whhv4w);
              obj11.icon = first(tmp44[12]);
              first(tmp44[10]).open(obj11);
              const obj2 = first(tmp44[10]);
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          tmp7 = tmp44(false);
        }
        c5 = 3;
      } catch (tmp44) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp44;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  function t0() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[0] = id.id;
  cResult[1] = first;
  cResult[2] = t0;
  tmp6 = t0;
}) : (function usePrivateChannelWave(id, arg1) {
  _require = id;
  [first, dependencyMap] = noop.useState(false);
  let items = [id.id, first];
  let obj = { waveShouldShow: null, wavePressed: null };
  const callback = noop.useCallback(asyncGeneratorStep(async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c5 = 2;
        let tmp7 = c4;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            id = tmp7;
            tmp7 = first;
            if (!first) {
              tmp44(true);
              const obj8 = { channelId: id.id, source: "Messages Tab" };
              id(tmp44[7]).trackWaveCtaClicked(obj8);
              const obj4 = id(tmp44[7]);
              id(tmp44[8]).transitionTo(closure_1_7.CHANNEL(closure_1_6, id.id));
              c3 = 1;
              const obj7 = tmp3(tmp44[9]);
              const items = [closure_1_9];
              const obj9 = { location: constants.SEND_WAVE };
              c4 = 2;
              c5 = 1;
              const obj10 = { value: obj7.sendStickers(id.id, items, "", obj9), done: false };
              return obj10;
            }
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            closure_128_0 = tmp44;
            let ok = closure_128_0.ok;
            if (!ok) {
              ok = 429 !== closure_128_0.status;
            }
            if (!ok) {
              const obj11 = { key: "HANDLE_WAVE_PRESS_TOAST", content: null, icon: null };
              const intl = id(tmp44[11]).intl;
              obj11.content = intl.string(id(tmp44[11]).t.Whhv4w);
              obj11.icon = tmp3(tmp44[12]);
              tmp3(tmp44[10]).open(obj11);
              const obj2 = tmp3(tmp44[10]);
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          tmp7 = closure_129_2(false);
        }
        c5 = 3;
      } catch (tmp44) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp44;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items);
  obj.waveShouldShow = require("usePrivateChannelWaveEligible").usePrivateChannelWaveEligible(id, arg1);
  obj.wavePressed = callback;
  return obj;
});