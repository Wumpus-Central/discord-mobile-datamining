// discord_app/modules/channel/usePrivateChannelWave.native.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

const require = fn;
const Constants = fn(1074);
({ ME: metroRequire, Routes: closure_7 } = Constants);
const MessageSendLocation = fn(4553).MessageSendLocation;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/usePrivateChannelWave.native.tsx");

export default function usePrivateChannelWave(id, arg1) {
  _require = id;
  const tmp = _slicedToArray(noop.useState(false), 2);
  const first = tmp[0];
  dependencyMap = tmp[1];
  const items = [id.id, first];
  let obj = { waveShouldShow: null, wavePressed: null };
  const callback = noop.useCallback(
    asyncGeneratorStep(async () => {
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
          let tmp7 = c4;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              id = tmp7;
              tmp7 = first;
              if (!first) {
                tmp42(true);
                let obj3 = id(tmp42[5]);
                let obj1 = { channelId: id.id, source: "Messages Tab" };
                obj3.trackWaveCtaClicked(obj1);
                id(tmp42[6]).transitionTo(closure_1_7.CHANNEL(closure_1_6, id.id));
                c3 = 1;
                const obj7 = tmp3(tmp42[7]);
                const obj2 = { location: constants.SEND_WAVE };
                c4 = 2;
                c5 = 1;
                obj3 = { value: obj7.sendStickers(id.id, ["749054660769218631"], "", obj2), done: false };
                return obj3;
              }
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_0 = tmp42;
              let ok = closure_128_0.ok;
              if (!ok) {
                ok = 429 !== closure_128_0.status;
              }
              if (!ok) {
                obj1 = tmp3(tmp42[8]);
                const obj4 = { key: "HANDLE_WAVE_PRESS_TOAST", content: null, icon: null };
                const intl = id(tmp42[9]).intl;
                obj4.content = intl.string(id(tmp42[9]).t.Whhv4w);
                obj4.icon = tmp3(tmp42[10]);
                obj1.open(obj4);
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c3 = 0;
            }
            tmp7 = closure_129_2(false);
          }
          c5 = 3;
        } catch (tmp42) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp42;
          } else {
            c4 = tmp;
          }
        }
      }
    }),
    items,
  );
  obj.waveShouldShow = require("usePrivateChannelWaveEligible").usePrivateChannelWaveEligible(id, arg1);
  obj.wavePressed = callback;
  return obj;
}
