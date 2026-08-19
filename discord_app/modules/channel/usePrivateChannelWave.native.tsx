// === Module 15302: usePrivateChannelWave ===

// Module 15302 (usePrivateChannelWave)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import ME from "ME" /* 676 */;
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING" /* 4663 */;

const require = fn;
({ ME: closure_6, Routes: error } = ME);
const result = require("obj132").fileFinishedImporting("modules/channel/usePrivateChannelWave.native.tsx");

export default function usePrivateChannelWave(id) {
  const _require = id;
  const tmp = callback2(React.useState(false), 2);
  const first = tmp[0];
  dependencyMap = tmp[1];
  const items = [id.id, first];
  let obj = { waveShouldShow: null, wavePressed: null };
  callback = React.useCallback(callback(function*() {
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
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c5 = 2;
        let tmp7 = c4;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp3;
            closure_0 = tmp7;
            tmp7 = first;
            if (!first) {
              closure_1_2(true);
              let obj3 = id(closure_1_2[5]);
              obj1 = { channelId: null, source: "Messages Tab" };
              obj1[0] = id.id;
              obj3.trackWaveCtaClicked(obj1);
              id(closure_1_2[6]).transitionTo(closure_1_7.CHANNEL(closure_1_6, id.id));
              c3 = 1;
              const obj7 = first(closure_1_2[7]);
              const obj2 = { location: null };
              obj2[0] = closure_1_8.SEND_WAVE;
              c4 = 2;
              c5 = 1;
              obj3 = { value: null, done: false };
              obj3[0] = obj7.sendStickers(id.id, ["749054660769218631"], "", obj2);
              return obj3;
            }
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            closure_0 = callback;
            let ok = closure_0.ok;
            if (!ok) {
              ok = 429 !== closure_0.status;
            }
            if (!ok) {
              obj1 = first(closure_1_2[8]);
              const obj4 = { key: "HANDLE_WAVE_PRESS_TOAST", content: null, icon: null };
              const intl = id(closure_1_2[9]).intl;
              obj4[1] = intl.string(id(closure_1_2[9]).t.Whhv4w);
              obj4[2] = first(closure_1_2[10]);
              obj1.open(obj4);
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c3 = 0;
          }
          tmp7 = callback(false);
        }
        c5 = 3;
      } catch (tmp42) {
        callback = tmp42;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp42;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items);
  obj[0] = _require(15303).usePrivateChannelWaveEligible(id, arg1);
  obj[1] = callback;
  return obj;
};