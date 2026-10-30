// === Module 18039: usePrivateChannelWave ===

// Module 18039 (usePrivateChannelWave)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const Constants = fn(1072);
({ ME: metroRequire, Routes: closure_7 } = Constants);
const MessageSendLocation = fn(5014).MessageSendLocation;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/usePrivateChannelWave.native.tsx");

export default function usePrivateChannelWave(id, arg1) {
  _require = id;
  [first, dependencyMap] = noop.useState(false);
  const items = [id.id, first];
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
        return { value: "HermesInternal", done: null };
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
              tmp40(true);
              const obj8 = { channelId: id.id, source: "Messages Tab" };
              id(tmp40[5]).trackWaveCtaClicked(obj8);
              const obj4 = id(tmp40[5]);
              id(tmp40[6]).transitionTo(closure_1_7.CHANNEL(closure_1_6, id.id));
              c3 = 1;
              const obj7 = tmp3(tmp40[7]);
              const obj9 = { location: constants.SEND_WAVE };
              c4 = 2;
              c5 = 1;
              const obj10 = { value: obj7.sendStickers(id.id, ["749054660769218631"], "", obj9), done: false };
              return obj10;
            }
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            closure_128_0 = tmp40;
            let ok = closure_128_0.ok;
            if (!ok) {
              ok = 429 !== closure_128_0.status;
            }
            if (!ok) {
              const obj11 = { text: null, variant: "critical" };
              const intl = id(tmp40[9]).intl;
              obj11.text = intl.string(id(tmp40[9]).t.Whhv4w);
              tmp3(tmp40[8]).open("HANDLE_WAVE_PRESS_TOAST", obj11);
              const obj2 = tmp3(tmp40[8]);
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
      } catch (tmp40) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp40;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items);
  obj.waveShouldShow = require("usePrivateChannelWaveEligible").usePrivateChannelWaveEligible(id, arg1);
  obj.wavePressed = callback;
  return obj;
};