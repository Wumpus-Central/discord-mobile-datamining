// === Module 8743: OrbsBadgeCoachmarkImg ===

// Module 8743 (OrbsBadgeCoachmarkImg)
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
function OrbsBadgeCoachmarkImg() {
  const tmp = callback();
  let obj = { style: tmp.coachmarkImageContainer, children: null };
  obj = { source: null, style: null };
  obj = { uri: importDefault(8744) };
  obj[0] = obj;
  obj[1] = tmp.coachmarkImage;
  obj[1] = <closure_5 uri={importDefault(8744)} />;
  return <closure_4 uri={importDefault(8744)} />;
}
({ View: c4, Image: c5 } = get_ActivityIndicator);
let closure_7 = createCacheKey.createStyles({ coachmarkImageContainer: { alignItems: "center", justifyContent: "center" }, coachmarkImage: { width: 80, height: 80 }, coachmarkDescription: { marginBottom: -10 } });
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/OrbsBadgeCoachmark.tsx");

export default function OrbsBadgeCoachmark(badgeRef) {
  const merged = Object.assign(badgeRef, Object.create(null));
  const coachmark = require(8745) /* useCoachmark */.useCoachmark(badgeRef.badgeRef, merged);
  return null;
};
export const useOrbsBadgeCoachmark = function useOrbsBadgeCoachmark(disabled) {
  disabled = disabled.disabled;
  let c1;
  const tmp = callback();
  c1 = tmp;
  const items = [disabled, tmp.coachmarkDescription];
  let tmp3 = null;
  if (!disabled) {
    let obj = { props: null };
    obj[0] = tmp2;
    tmp3 = obj;
  }
  return tmp3;
};