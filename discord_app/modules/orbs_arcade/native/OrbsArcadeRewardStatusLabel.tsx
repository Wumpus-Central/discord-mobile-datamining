// discord_app/modules/orbs_arcade/native/OrbsArcadeRewardStatusLabel.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import LockIcon from "../../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import OrbsArcadeTypes from "../OrbsArcadeTypes.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5014);
let closure_6 = createStyles.createStyles({ statusLabel: { flexDirection: "row", alignItems: "center", gap: 2 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardStatusLabel.tsx");

export default function OrbsArcadeRewardStatusLabel(status) {
  status = status.status;
  ({ reward, color } = status);
  const obj = { style: closure_6().statusLabel, children: null };
  const obj2 = { variant: "heading-sm/semibold", color, children: null };
  if (OrbsArcadeTypes.OrbsArcadeRewardStatus.CLAIMED === status) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.R6Ksr9);
  } else {
    const tmp9 = reward.type === OrbsArcadeTypes.OrbsArcadeRewardType.FRACTIONAL_PREMIUM;
    if (OrbsArcadeTypes.OrbsArcadeRewardStatus.CLAIMABLE === status) {
      const intl = util.intl;
      const t = util.t;
      stringResult = intl.string(tmp9 ? t.pxxI1f : t["A7+nP8"]);
    } else if (OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED === status) {
      const intl3 = util.intl;
      const t2 = util.t;
      stringResult = intl3.string(tmp9 ? t2.vJFuxl : t2["++O7TA"]);
    }
  }
  obj2.children = stringResult;
  const items = [React4(Text_Text.Text, obj2)];
  let tmp3Result = null;
  if (status === OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED) {
    const obj3 = { size: "xxs", color: nativeDefault.colors.ICON_MUTED };
    tmp3Result = React4(LockIcon.LockIcon, obj3);
  }
  items[1] = tmp3Result;
  obj.children = items;
  return hasOwnProperty(View, obj);
}
