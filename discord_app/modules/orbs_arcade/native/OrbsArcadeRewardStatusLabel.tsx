// === Module 16444: OrbsArcadeRewardStatusLabel ===

// Module 16444 (OrbsArcadeRewardStatusLabel)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import Text_Text from "Text/Text" /* 5235 */;
import LockIcon from "LockIcon" /* 8566 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 16435 */;
import noop from "module_19" /* 19 */;

require = fn;
function getStatusLabel(type, arg1) {
  if (OrbsArcadeTypes.OrbsArcadeRewardStatus.CLAIMED === arg1) {
    const intl3 = util.intl;
    return intl3.string(util.t.R6Ksr9);
  } else {
    const tmp3 = type.type === OrbsArcadeTypes.OrbsArcadeRewardType.FRACTIONAL_PREMIUM;
    if (OrbsArcadeTypes.OrbsArcadeRewardStatus.CLAIMABLE === arg1) {
      const intl2 = util.intl;
      const t2 = util.t;
      return intl2.string(tmp3 ? t2.pxxI1f : t2["A7+nP8"]);
    } else if (OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED === arg1) {
      const intl = util.intl;
      const t = util.t;
      return intl.string(tmp3 ? t.vJFuxl : t["++O7TA"]);
    }
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4972);
let obj2 = { statusLabel: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardStatusLabel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeRewardStatusLabel(arg0) {
  const cResult = c.c(12);
  ({ reward, status, color } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === reward) {
    if (cResult[1] === status) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === color) {
      if (cResult[4] === tmp6) {
        let tmp8 = cResult[5];
      }
      if (cResult[6] !== status) {
        let tmp12 = null;
        if (status === OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED) {
          const obj2 = { size: "xxs", color: nativeDefault.colors.ICON_MUTED };
          tmp12 = React4(LockIcon.LockIcon, obj2);
        }
        cResult[6] = status;
        cResult[7] = tmp12;
        let tmp11 = tmp12;
      } else {
        tmp11 = cResult[7];
      }
      if (cResult[8] === tmp4.statusLabel) {
        if (cResult[9] === tmp8) {
          if (cResult[10] === tmp11) {
            let tmp15 = cResult[11];
          }
          return tmp15;
        }
      }
      const obj3 = { style: tmp5, children: null };
      const items = [tmp8, tmp11];
      obj3.children = items;
      const tmp18 = hasOwnProperty(View, obj3);
      cResult[8] = tmp4.statusLabel;
      cResult[9] = tmp8;
      cResult[10] = tmp11;
      cResult[11] = tmp18;
      tmp15 = tmp18;
    }
    const obj4 = { variant: "heading-sm/semibold", color, children: tmp6 };
    const tmp10 = React4(Text_Text.Text, obj4);
    cResult[3] = color;
    cResult[4] = tmp6;
    cResult[5] = tmp10;
    tmp8 = tmp10;
  }
  const tmp7 = getStatusLabel(reward, status);
  cResult[0] = reward;
  cResult[1] = status;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : (function OrbsArcadeRewardStatusLabel(status) {
  status = status.status;
  ({ reward, color } = status);
  const obj = { style: closure_6().statusLabel, children: null };
  const items = [React4(Text_Text.Text, { variant: "heading-sm/semibold", color, children: getStatusLabel(reward, status) }), ];
  let tmp3Result = null;
  if (status === OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED) {
    const obj3 = { size: "xxs", color: nativeDefault.colors.ICON_MUTED };
    tmp3Result = React4(LockIcon.LockIcon, obj3);
  }
  items[1] = tmp3Result;
  obj.children = items;
  return hasOwnProperty(View, obj);
});