// discord_app/modules/orbs_arcade/native/OrbsArcadeRewardRing.tsx
import ReanimatedRexport2 from "../../reanimated/ReanimatedRexport.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
function RingArc(progress) {
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
  fn.__workletHash = 690721995284;
  fn.__initData = __initData;
  return (
    <closure_4
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeDasharray={arcLength}
      animatedProps={ReanimatedRexport2.useAnimatedProps(fn)}
    />
  );
}
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
let closure_4 = ReanimatedRexport.createAnimatedComponent(fn(8023).Path);
const __initData = {
  code: "function OrbsArcadeRewardRingTsx1(){const{arcLength,progress}=this.__closure;return{strokeDashoffset:arcLength*(1-progress.get()),strokeOpacity:progress.get()>0?1:0};}",
};
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
    return (
      <RingArc
        key={str}
        d={"M " + result + " " + result + c4 + " A " + c4 + " " + c4 + " 0 0 " + num + " " + result + " " + result - c4}
        color={color}
        progress={progress}
        strokeWidth={strokeWidth}
        arcLength={arcLength}
      />
    );
  });
  return jsx(rewardSize(strokeWidth[4]).Svg, {
    width: rewardSize,
    height: rewardSize,
    style: StyleSheet.absoluteFill,
    children: null,
  });
}
