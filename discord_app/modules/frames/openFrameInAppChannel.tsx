// === Module 11492: openFrameInAppChannel ===

// Module 11492 (openFrameInAppChannel)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_4 = async function _openFrameInAppChannel(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "IconComponent" };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          ({ applicationId: closure_129_0, channelId: closure_129_1, analyticsContext: closure_129_2, launch: closure_129_3 } = closure_0);
          closure_129_4 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "Reflect", done: null };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let tmp6 = null;
            if (obj8.shouldOpenAppChannel(closure_129_0)) {
              const obj5 = { preferredChannelId: closure_129_1 };
              c3 = 2;
              c4 = 1;
              const obj6 = { value: closure_130_1(closure_130_2[2])(closure_129_0, obj5), done: false };
              return obj6;
            }
            obj8 = closure_130_0(closure_130_2[1]);
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else {
          tmp6 = value;
          if (arg0 === 2) {
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          }
        }
        closure_129_4 = tmp6;
        const obj7 = { applicationId: closure_129_0, channel: closure_129_4, analyticsContext: closure_129_2, launch: closure_129_3 };
        closure_130_1(closure_130_2[1])(obj7);
        c4 = 3;
        return { value: "IconComponent", done: "IconComponent" };
      }
    } catch (tmp23) {
      c4 = tmp;
      throw tmp23;
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/openFrameInAppChannel.tsx");

export default function openFrameInAppChannel() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};