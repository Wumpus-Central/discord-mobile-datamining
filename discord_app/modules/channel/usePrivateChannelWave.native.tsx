// discord_app/modules/channel/usePrivateChannelWave.native.tsx
import MessageConstants from "../messages/MessageConstants.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import Constants from "../../Constants.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c4, c5, id;

let metroImportDefault;
let metroRequire;
({ ME: metroRequire, Routes: metroImportDefault } = Constants);
const MessageSendLocation = MessageConstants.MessageSendLocation;
let c9 = "749054660769218631";
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id, arg1) => {
      let closure_2;
      let first;
      _require = id;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(6);
      [first, dependencyMap] = react.useState(false);
      if (cResult[0] === id.id) {
        let tmp6;
        if (cResult[1] === first) {
          tmp6 = cResult[2];
        }
        const tmpResult = tmp(16004);
        const privateChannelWaveEligible = tmpResult.usePrivateChannelWaveEligible(id, arg1);
        if (cResult[3] === tmp6) {
          let tmp9;
          if (cResult[4] === privateChannelWaveEligible) {
            tmp9 = cResult[5];
          }
          return tmp9;
        }
        let obj2 = { waveShouldShow: privateChannelWaveEligible, wavePressed: tmp6 };
        cResult[3] = tmp6;
        cResult[4] = privateChannelWaveEligible;
        cResult[5] = obj2;
        tmp9 = obj2;
      }
      _require = _asyncToGenerator(async () => {
        let intl;
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
          let c3;
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let closure_1 = tmp;
                closure_0 = undefined;
                const tmp49 = closure_1;
                if (!tmp49) {
                  tmp43(true);
                  const obj7 = { channelId: closure_0.id, source: "Messages Tab" };
                  const obj3 = closure_0(closure_2_2[7]);
                  obj3.trackWaveCtaClicked(obj7);
                  const obj5 = closure_0(closure_2_2[8]);
                  obj5.transitionTo(closure_2_7.CHANNEL(closure_2_6, closure_0.id));
                  c3 = 1;
                  const obj6 = first(closure_2_2[9]);
                  const items = [closure_2_9];
                  const obj8 = { location: constants.SEND_WAVE };
                  c4 = 2;
                  c5 = 1;
                  const obj9 = { value: obj6.sendStickers(closure_0.id, items, "", obj8), done: false };
                  return obj9;
                }
              }
            } else {
              if (1 === c4) {
                c3 = 0;
                closure_0 = tmp43;
                const ok = closure_0.ok || 429 !== closure_0.status;
                if (!ok) {
                  const obj10 = {
                    key: "HANDLE_WAVE_PRESS_TOAST",
                    content: intl.string(closure_0(closure_2_2[11]).t.Whhv4w),
                    icon: first(closure_2_2[12]),
                  };
                  const open = first(closure_2_2[10]).open;
                  const tmp14 = first(closure_2_2[10]);
                  intl = closure_0(closure_2_2[11]).intl;
                  open(obj10);
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
              tmp43(false);
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp43) {
            if (0 === c3) {
              c5 = 3;
              throw tmp43;
            } else {
              c4 = 1;
            }
          }
        }
      });
      const fn = function () {
        return closure_0(...arguments);
      };
      cResult[0] = id.id;
      cResult[1] = first;
      cResult[2] = fn;
      tmp6 = fn;
    }
  : (id, arg1) => {
      let callback;
      let first;
      let obj2;
      _require = id;
      [first, dependencyMap] = react.useState(false);
      let items = [id.id, first];
      let obj = { waveShouldShow: obj2.usePrivateChannelWaveEligible(id, arg1), wavePressed: callback };
      callback = react.useCallback(
        _asyncToGenerator(async () => {
          let closure_0;
          let closure_1;
          let intl;
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
            let c3;
            try {
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  id = tmp4;
                  if (!first) {
                    closure_2(true);
                    const obj7 = { channelId: id.id, source: "Messages Tab" };
                    const obj3 = id(closure_2[7]);
                    obj3.trackWaveCtaClicked(obj7);
                    const obj5 = id(closure_2[8]);
                    obj5.transitionTo(closure_1_7.CHANNEL(closure_1_6, id.id));
                    c3 = 1;
                    const obj6 = tmp(closure_2[9]);
                    const items = [closure_1_9];
                    const obj8 = { location: constants.SEND_WAVE };
                    c4 = 2;
                    c5 = 1;
                    const obj9 = { value: obj6.sendStickers(id.id, items, "", obj8), done: false };
                    return obj9;
                  }
                }
              } else {
                if (1 === c4) {
                  c3 = 0;
                  id = closure_2;
                  const ok = id.ok || 429 !== id.status;
                  if (!ok) {
                    const obj10 = {
                      key: "HANDLE_WAVE_PRESS_TOAST",
                      content: intl.string(id(closure_2[11]).t.Whhv4w),
                      icon: tmp(closure_2[12]),
                    };
                    const open = tmp(closure_2[10]).open;
                    const tmp14 = tmp(closure_2[10]);
                    intl = id(closure_2[11]).intl;
                    open(obj10);
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
                closure_129_2(false);
              }
              c5 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp43) {
              closure_2 = tmp43;
              if (0 === c3) {
                c5 = 3;
                throw tmp43;
              } else {
                c4 = 1;
              }
            }
          }
        }),
        items,
      );
      obj2 = require("usePrivateChannelWaveEligible");
      return obj;
    };
const result = size.fileFinishedImporting("modules/channel/usePrivateChannelWave.native.tsx");

export default tmp3;
