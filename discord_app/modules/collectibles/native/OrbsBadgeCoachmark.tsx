// discord_app/modules/collectibles/native/OrbsBadgeCoachmark.tsx
import useCoachmark from "../../../design/components/Coachmark/native/useCoachmark.native.tsx";
import metadataDefault from "../../../../discord_assets/assets/orbs/orbs_badge_asset.png.js";
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = fn;
function OrbsBadgeCoachmarkImg() {
  const tmp = callback();
  const obj = { uri: metadataDefault };
  obj[0] = obj;
  obj[1] = tmp.coachmarkImage;
  obj[1] = <closure_5 uri={metadataDefault} />;
  return <closure_4 uri={metadataDefault} />;
}
({ View: c4, Image: c5 } = get_ActivityIndicator);
let closure_7 = createCacheKey.createStyles({ coachmarkImageContainer: { alignItems: "center", justifyContent: "center" }, coachmarkImage: { width: 80, height: 80 }, coachmarkDescription: { marginBottom: -10 } });
const result = require("obj132").fileFinishedImporting("modules/collectibles/native/OrbsBadgeCoachmark.tsx");

export default function OrbsBadgeCoachmark(badgeRef) {
  const merged = Object.assign(badgeRef, Object.create(null));
  const coachmark = useCoachmark.useCoachmark(badgeRef.badgeRef, merged);
  return null;
};
export const useOrbsBadgeCoachmark = function useOrbsBadgeCoachmark(disabled) {
  disabled = disabled.disabled;
  const tmp = callback();
  closure_1 = tmp;
  const items = [disabled, tmp.coachmarkDescription];
  let tmp3 = null;
  if (!disabled) {
    let obj = { props: null };
    obj[0] = tmp2;
    tmp3 = obj;
  }
  return tmp3;
};