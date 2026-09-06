// discord_app/modules/collectibles/native/OrbsBadgeCoachmark.tsx
import util from "../../../intl/index.native.tsx";
import useCoachmark from "../../../design/components/Coachmark/native/useCoachmark.native.tsx";
import _modDef11188 from "../../../../discord_assets/assets/orbs/orbs_badge_asset.png.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function OrbsBadgeCoachmarkImg() {
  const tmp = closure_7();
  let obj = { style: tmp.coachmarkImageContainer, children: null };
  obj = { source: null, style: null };
  obj = { uri: _modDef11188 };
  obj.source = obj;
  obj.style = tmp.coachmarkImage;
  obj.children = <hasOwnProperty uri={_modDef11188} />;
  return <React4 uri={_modDef11188} />;
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({
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
export const useOrbsBadgeCoachmark = function useOrbsBadgeCoachmark(disabled) {
  disabled = disabled.disabled;
  const tmp = closure_7();
  const coachmarkDescription = tmp;
  const items = [disabled, tmp.coachmarkDescription];
  let tmp3 = null;
  if (!disabled) {
    let obj = { props: tmp2 };
    tmp3 = obj;
  }
  return tmp3;
};
