// === Module 9499: OrbsBadgeCoachmarkImg ===

// Module 9499 (OrbsBadgeCoachmarkImg)
import useCoachmark from "useCoachmark" /* 9314 */;
import metadataDefault from "metadata" /* 9500 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

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