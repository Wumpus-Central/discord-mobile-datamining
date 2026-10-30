// === Module 14938: ProfileReadStateExperiment ===

// Module 14938 (ProfileReadStateExperiment)
import initialize from "initialize" /* 504 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1247 */;
import UserStore from "UserStore" /* 1384 */;

require = fn;
function getProfileReadStateConfigPeek() {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (null == id) {
    return null;
  } else {
    const assignment = ApexExperimentStore.getAssignment("user", id, apexExperiment.definition.name);
    let variantId;
    if (assignment != null) {
      variantId = assignment.variantId;
    }
    let tmp7 = null;
    if (null != variantId) {
      tmp7 = null;
      if (!assignment.useAsEligibility) {
        let tmp9 = obj2[assignment.variantId];
        if (tmp9 == null) {
          tmp9 = null;
        }
        tmp7 = tmp9;
      }
    }
    return tmp7;
  }
}
const obj = { enabled: false };
const obj2 = { 0: obj, 1: { enabled: true } };
const ApexExperiment = fn(1448);
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-10-profile-read-state", kind: "user", defaultConfig: obj, variations: obj2 });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/experiments/ProfileReadStateExperiment.tsx");

export default apexExperiment;
export { getProfileReadStateConfigPeek };
export function useProfileReadStateConfigPeek() {
  const items = [UserStore, ApexExperimentStore];
  return initialize.useStateFromStores(items, getProfileReadStateConfigPeek);
}
export function ProfileReadStateExposure(location) {
  const config = apexExperiment.useConfig({ location: location.location });
  return null;
}