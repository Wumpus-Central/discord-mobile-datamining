// === Module 9019: FramesActionCreators ===

// Module 9019 (FramesActionCreators)
import launchFrameAll from "launchFrame" /* 9021 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import VoiceStateStore from "VoiceStateStore" /* 4915 */;
import size from "module_2" /* 2 */;

let c1, value;

let obj = function _launchFrameOnNative() {
  obj = _asyncToGenerator(async (value) => {
    let c2 = 0;
    let c3 = 0;
    return (async (arg0) => {
      let currentClientInVoiceChannel;
      let obj3;
      function closeVoicePanel() {
        if (currentClientInVoiceChannel.isCurrentClientInVoiceChannel()) {
          closure_1_0(closure_1_2[2])();
        }
      }
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              c1 = 0;
              value = undefined;
              c2 = 1;
              c3 = 1;
              const obj5 = { value: obj3.launchFrame(value), done: false };
              obj3 = launchFrameAll;
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          } else {
            closeVoicePanel();
            c3 = 3;
            return { value, done: true };
          }
        } catch (tmp9) {
          c3 = 3;
          throw tmp9;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = {
  launchFrame: function launchFrameOnNative() {
    return obj(...arguments);
  }
};
const launchFrame = Object.assign(launchFrameAll);
const result = size.fileFinishedImporting("modules/frames/FramesActionCreators.native.tsx");

export default obj;