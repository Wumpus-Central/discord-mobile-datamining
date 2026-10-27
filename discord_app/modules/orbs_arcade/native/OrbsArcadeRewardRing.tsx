// === Module 16463: OrbsArcadeRewardRing ===

// Module 16463 (OrbsArcadeRewardRing)
import c from "c" /* 576 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 5053 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
const StyleSheet = fn(17).StyleSheet;
let jsx = fn(21).jsx;
let closure_4 = ReanimatedRexport.createAnimatedComponent(fn(7960).Path);
const __initData = { code: "function OrbsArcadeRewardRingTsx1(){const{arcLength,progress}=this.__closure;return{strokeDashoffset:arcLength*(1-progress.get()),strokeOpacity:progress.get()>0?1:0};}" };
const __initData2 = { code: "function OrbsArcadeRewardRingTsx2(){const{arcLength,progress}=this.__closure;return{strokeDashoffset:arcLength*(1-progress.get()),strokeOpacity:progress.get()>0?1:0};}" };
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function RingArc(arg0) {
  const cResult = c.c(6);
  ({ d, color, progress } = arg0);
  ({ strokeWidth, arcLength } = arg0);
  const fn = function c() {
    const obj = { strokeDashoffset: arcLength * (1 - progress.get()), strokeOpacity: null };
    let num = 0;
    if (progress.get() > 0) {
      num = 1;
    }
    obj.strokeOpacity = num;
    return obj;
  };
  fn.__closure = { arcLength, progress };
  fn.__workletHash = 690721995284;
  fn.__initData = __initData;
  const animatedProps = ReanimatedRexport2.useAnimatedProps(fn);
  if (cResult[0] === animatedProps) {
    if (cResult[1] === arcLength) {
      if (cResult[2] === color) {
        if (cResult[3] === d) {
          if (cResult[4] === strokeWidth) {
            let tmp3 = cResult[5];
          }
          return tmp3;
        }
      }
    }
  }
  const tmp4 = <closure_4 d={d} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeDasharray={arcLength} animatedProps={animatedProps} />;
  cResult[0] = animatedProps;
  cResult[1] = arcLength;
  cResult[2] = color;
  cResult[3] = d;
  cResult[4] = strokeWidth;
  cResult[5] = tmp4;
  tmp3 = tmp4;
}) : (function RingArc(progress) {
  progress = progress.progress;
  const arcLength = progress.arcLength;
  ({ d, color, strokeWidth } = progress);
  const fn = function u() {
    const obj = { strokeDashoffset: arcLength * (1 - progress.get()), strokeOpacity: null };
    let num = 0;
    if (progress.get() > 0) {
      num = 1;
    }
    obj.strokeOpacity = num;
    return obj;
  };
  fn.__closure = { arcLength, progress };
  fn.__workletHash = 10186079557143;
  fn.__initData = __initData2;
  return <closure_4 d={d} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeDasharray={arcLength} animatedProps={ReanimatedRexport2.useAnimatedProps(fn)} />;
});
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardRing.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeRewardRing(color) {
  const cResult = strokeWidth(color[6]).c(10);
  ({ rewardSize, strokeWidth } = color);
  color = color.color;
  const progress = color.progress;
  const diff = rewardSize / 2 - strokeWidth / 2;
  jsx = diff;
  const result = diff * Math.PI;
  const result1 = rewardSize / 2;
  if (cResult[0] === result) {
    if (cResult[1] === result1) {
      if (cResult[2] === color) {
        if (cResult[3] === progress) {
          if (cResult[4] === diff) {
            if (cResult[5] === strokeWidth) {
              let tmp7 = cResult[6];
            }
            if (cResult[7] === rewardSize) {
              if (cResult[8] === tmp7) {
                let tmp9 = cResult[9];
              }
              return tmp9;
            }
            const size = { width: rewardSize, height: rewardSize, style: progress.absoluteFill, children: tmp7 };
            const tmp12 = jsx(strokeWidth(color[4]).Svg, { width: rewardSize, height: rewardSize, style: progress.absoluteFill, children: tmp7 });
            cResult[7] = rewardSize;
            cResult[8] = tmp7;
            cResult[9] = tmp12;
            tmp9 = tmp12;
          }
        }
      }
    }
  }
  const items = [true, false];
  const mapped = items.map((item) => {
    let num = 0;
    if (item) {
      num = 1;
    }
    let str = "right";
    if (item) {
      str = "left";
    }
    return <closure_7 key={str} d={"M " + result1 + " " + result1 + diff + " A " + diff + " " + diff + " 0 0 " + num + " " + result1 + " " + result1 - diff} color={color} progress={progress} strokeWidth={strokeWidth} arcLength={result} />;
  });
  cResult[0] = result;
  cResult[1] = result1;
  cResult[2] = color;
  cResult[3] = progress;
  cResult[4] = diff;
  cResult[5] = strokeWidth;
  cResult[6] = mapped;
  tmp7 = mapped;
}) : (function OrbsArcadeRewardRing(rewardSize) {
  rewardSize = rewardSize.rewardSize;
  const strokeWidth = rewardSize.strokeWidth;
  ({ color: StyleSheet, progress: jsx } = rewardSize);
  const diff = rewardSize / 2 - strokeWidth / 2;
  c4 = diff;
  const arcLength = diff * Math.PI;
  const size = { width: rewardSize, height: rewardSize, style: StyleSheet.absoluteFill, children: null };
  const items = [true, false];
  size.children = items.map((item) => {
    const result = rewardSize / 2;
    let num = 0;
    if (item) {
      num = 1;
    }
    let str = "right";
    if (item) {
      str = "left";
    }
    return <closure_7 key={str} d={"M " + result + " " + result + c4 + " A " + c4 + " " + c4 + " 0 0 " + num + " " + result + " " + result - c4} color={color} progress={progress} strokeWidth={strokeWidth} arcLength={arcLength} />;
  });
  return jsx(rewardSize(strokeWidth[4]).Svg, { width: rewardSize, height: rewardSize, style: StyleSheet.absoluteFill, children: null });
});