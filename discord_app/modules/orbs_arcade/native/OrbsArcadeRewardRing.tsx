// === Module 17290: OrbsArcadeRewardRing ===

// Module 17290 (OrbsArcadeRewardRing)
import _mod1652 from "module_1652" /* 1652 */;
import noop from "module_19" /* 19 */;

const module_1652 = _mod1652;

require = fn;
function RingArc(arcLength) {
  arcLength = arcLength.arcLength;
  ({ d, color, progress, strokeWidth } = arcLength);
  items = [closure_5, arcLength, progress];
  c0 = undefined;
  c1 = undefined;
  [tmp, tmp2, tmp3] = items;
  class OrbsArcadeRewardRingTsx1 {
    constructor() {
      obj = { strokeDashoffset: closure_0 * (1 - closure_1.get()), strokeOpacity: null };
      num = 0;
      if (closure_1.get() > 0) {
        num = 1;
      }
      obj.strokeOpacity = num;
      return obj;
    }
  }
  const items1 = [tmp2, tmp3];
  OrbsArcadeRewardRingTsx1.__closure = items1;
  OrbsArcadeRewardRingTsx1.__workletHash = 15686336593485;
  OrbsArcadeRewardRingTsx1.__initData = tmp;
  return <closure_4 d={d} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeDasharray={arcLength} animatedProps={_mod1652.useAnimatedProps(OrbsArcadeRewardRingTsx1)} />;
}
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
let closure_4 = module_1652.createAnimatedComponent(fn(8171).Path);
let closure_5 = { code: "(function OrbsArcadeRewardRingTsx1(){let[arcLength,progress]=this.__closure;return{strokeDashoffset:arcLength*(1-progress.get()),strokeOpacity:progress.get()>0?1:0};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardRing.tsx");

export default function OrbsArcadeRewardRing(rewardSize) {
  rewardSize = rewardSize.rewardSize;
  const strokeWidth = rewardSize.strokeWidth;
  ({ color: StyleSheet, progress: jsx } = rewardSize);
  const diff = rewardSize / 2 - strokeWidth / 2;
  c4 = diff;
  const arcLength = diff * Math.PI;
  const size = { width: rewardSize, height: rewardSize, style: StyleSheet.absoluteFill, children: null };
  items = [true, false];
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
    return <RingArc key={str} d={"M " + result + " " + result + c4 + " A " + c4 + " " + c4 + " 0 0 " + num + " " + result + " " + result - c4} color={color} progress={progress} strokeWidth={strokeWidth} arcLength={arcLength} />;
  });
  return jsx(rewardSize(strokeWidth[4]).Svg, { width: rewardSize, height: rewardSize, style: StyleSheet.absoluteFill, children: null });
};