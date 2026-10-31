// discord_app/modules/collectibles/native/OrbsBadgeCoachmark.tsx
import util from "../../../intl/index.native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import useCoachmark from "../../../design/components/Coachmark/native/useCoachmark.native.tsx";
import _modDef11448 from "../../../../discord_assets/assets/orbs/orbs_badge_asset.png.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function OrbsBadgeCoachmarkImg() {
  const tmp = closure_6();
  const obj = { style: tmp.coachmarkImageContainer, children: null };
  const obj2 = { source: null, style: null };
  const obj3 = { uri: _modDef11448 };
  obj2.source = obj3;
  obj2.style = tmp.coachmarkImage;
  obj.children = jsx(FastImageDefault, { source: null, style: null });
  return <View style={tmp.coachmarkImageContainer}>{null}</View>;
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let closure_6 = createStyles.createStyles({
  coachmarkImageContainer: { alignItems: "center", justifyContent: "center" },
  coachmarkImage: { width: 80, height: 80 },
  coachmarkDescription: { marginBottom: -10 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/OrbsBadgeCoachmark.tsx");

export default function OrbsBadgeCoachmark(badgeRef) {
  const merged = Object.assign(badgeRef, Object.assign({ badgeRef: 0 }));
  const coachmark = useCoachmark.useCoachmark(badgeRef.badgeRef, merged);
  return null;
}
export function useOrbsBadgeCoachmark(disabled) {
  disabled = disabled.disabled;
  const tmp = closure_6();
  const coachmarkDescription = tmp;
  const items = [disabled, tmp.coachmarkDescription];
  let tmp3 = null;
  if (!disabled) {
    let obj = { props: tmp2 };
    tmp3 = obj;
  }
  return tmp3;
}
