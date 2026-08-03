// === Module 11541: downsampleWaveform ===

// Module 11541 (downsampleWaveform)
const result = require("set").fileFinishedImporting("modules/voice_messages/downsampleWaveform.tsx");

export default function downsampleWaveform(arg0, arg1) {
  importDefault(38)(arg0.length >= arg1, "Waveform smaller than samples");
  if (arg0.length === arg1) {
    return arg0;
  } else {
    const items = [];
    let num5 = 0;
    while (items.length < arg1) {
      let _Math = Math;
      let rounded = Math.round((items.length + 1) * tmp7);
      let tmp3 = num5;
      let num = 0;
      let num2 = 0;
      if (num5 < rounded) {
        let num3 = 0;
        let num4 = 0;
        num = 0;
        num2 = 0;
        if (tmp3 < arg0.length) {
          let sum = num4 + arg0[tmp3];
          let sum1 = num3 + 1;
          let sum2 = tmp3 + 1;
          num = sum1;
          num2 = sum;
          while (sum2 < rounded) {
            num3 = sum1;
            num4 = sum;
            num = sum1;
            num2 = sum;
            tmp3 = sum2;
            if (sum2 >= arg0.length) {
              break;
            }
          }
        }
      }
      items[items.length] = num2 / num;
      num5 = rounded;
    }
    return items;
  }
};