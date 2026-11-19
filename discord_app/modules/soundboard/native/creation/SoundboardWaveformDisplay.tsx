// === Module 19857: SoundboardWaveformDisplay ===

// Module 19857 (SoundboardWaveformDisplay)
import nativeDefault from "native" /* 575 */;
import downsampleWaveformDefault from "downsampleWaveform" /* 13030 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const WAVEFORM_WAVE_MAX_VALUE = fn(12734).WAVEFORM_WAVE_MAX_VALUE;
let jsx = fn(21).jsx;
const createStyles = fn(4792);
let obj2 = { container: { flexDirection: "row", alignItems: "center" }, bar: { flex: 1, marginHorizontal: 1, borderRadius: nativeDefault.radii.round }, barActive: null, barTrimmedOut: null };
const obj3 = { flex: 1, marginHorizontal: 1, borderRadius: nativeDefault.radii.round };
obj2.barActive = { backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
const obj4 = { backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj2.barTrimmedOut = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/native/creation/SoundboardWaveformDisplay.tsx");

export default function SoundboardWaveformDisplay(waveform) {
  waveform = waveform.waveform;
  let num = waveform.barCount;
  if (num === undefined) {
    num = 32;
  }
  let num2 = waveform.height;
  if (num2 === undefined) {
    num2 = 32;
  }
  let num3 = waveform.trimStartRatio;
  if (num3 === undefined) {
    num3 = 0;
  }
  let num4 = waveform.trimEndRatio;
  if (num4 === undefined) {
    num4 = 1;
  }
  let memo;
  const tmp = memo();
  jsx = tmp;
  items = [waveform, num];
  memo = num2.useMemo(() => {
    const arr = (function decodeWaveform(waveform) {
      if (null == waveform) {
        return [];
      } else {
        try {
          const _Array = Array;
          return Array.from(waveform(num[6]).toByteArray(waveform));
        } catch (err) {
          return [];
        }
      }
    })(waveform);
    if (0 === arr.length) {
      let _Array = Array;
      const array = new Array(num);
      let fillResult = array.fill(0);
    } else {
      fillResult = arr;
      if (arr.length > num) {
        fillResult = downsampleWaveformDefault(arr, tmp);
      }
    }
    return fillResult;
  }, items);
  let obj = {
    style: null,
    children: memo.map((item, index) => {
      num = 0;
      if (memo.length > 1) {
        num = index / (memo.length - 1);
      }
      items = [bar.bar, , ];
      if (num >= num3) {
        if (num <= num4) {
          let barTrimmedOut = bar.barActive;
        }
        const obj = { style: null };
        items[1] = barTrimmedOut;
        const obj2 = { height: null };
        const _Math = Math;
        obj2.height = Math.max(2, item / WAVEFORM_WAVE_MAX_VALUE * 2);
        items[2] = obj2;
        obj.style = items;
        return tmp(tmp2, obj, index);
      }
      barTrimmedOut = bar.barTrimmedOut;
    })
  };
  const items1 = [tmp.container, { height: num2 }];
  obj.style = items1;
  return <num3 style={null}>{memo.map((item, index) => {
    num = 0;
    if (memo.length > 1) {
      num = index / (memo.length - 1);
    }
    items = [bar.bar, , ];
    if (num >= num3) {
      if (num <= num4) {
        let barTrimmedOut = bar.barActive;
      }
      const obj = { style: null };
      items[1] = barTrimmedOut;
      const obj2 = { height: null };
      const _Math = Math;
      obj2.height = Math.max(2, item / WAVEFORM_WAVE_MAX_VALUE * 2);
      items[2] = obj2;
      obj.style = items;
      return tmp(tmp2, obj, index);
    }
    barTrimmedOut = bar.barTrimmedOut;
  })}</num3>;
};