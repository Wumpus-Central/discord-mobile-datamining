// discord_app/modules/channel/usePrivateChannelWave.native.tsx
import getDmHasMessageHistory from "getDmHasMessageHistory";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import ME from "ME";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";
import { usePrivateChannelWaveEligible } from "usePrivateChannelWaveEligible.tsx";

let closure_6;
let error;
const require = arg1;
({ ME: closure_6, Routes: error } = ME);
const result = require("noop").fileFinishedImporting("modules/channel/usePrivateChannelWave.native.tsx");

export default function usePrivateChannelWave(id) {
  const _require = id;
  const tmp = callback2(React.useState(false), 2);
  const first = tmp[0];
  const dependencyMap = tmp[1];
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
        return { value: "HermesInternal", done: null };
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
            let closure_1 = tmp3;
            let closure_0 = tmp7;
            tmp7 = outer1_1;
            if (!outer1_1) {
              outer1_2(true);
              let obj3 = outer1_0(outer1_2[5]);
              let obj1 = { channelId: null, source: "Messages Tab" };
              obj1[0] = outer1_0.id;
              obj3.trackWaveCtaClicked(obj1);
              outer1_0(outer1_2[6]).transitionTo(outer1_7.CHANNEL(outer1_6, outer1_0.id));
              let c3 = 1;
              const obj7 = outer1_1(outer1_2[7]);
              const obj2 = { location: null };
              obj2[0] = outer1_8.SEND_WAVE;
              c4 = 2;
              c5 = 1;
              obj3 = { value: null, done: false };
              obj3[0] = obj7.sendStickers(outer1_0.id, ["749054660769218631"], "", obj2);
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
              obj1 = outer1_1(outer1_2[8]);
              const obj4 = { key: "HANDLE_WAVE_PRESS_TOAST", content: null, icon: null };
              const intl = outer1_0(outer1_2[9]).intl;
              obj4[1] = intl.string(outer1_0(outer1_2[9]).t.Whhv4w);
              obj4[2] = outer1_1(outer1_2[10]);
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
  obj[0] = _usePrivateChannelWaveEligible.usePrivateChannelWaveEligible(id, arg1);
  obj[1] = callback;
  return obj;
};