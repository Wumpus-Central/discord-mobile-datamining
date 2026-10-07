// === Module 11227: getGroupDMRecipientLimit ===

// Module 11227 (getGroupDMRecipientLimit)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1976 */;
import GroupDMNitroCapExperiment from "GroupDMNitroCapExperiment" /* 11229 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
let closure_3 = fn(11228).MAX_GROUP_DM_NITRO_PARTICIPANTS;
const Constants = fn(1085);
({ MAX_GROUP_DM_PARTICIPANTS: closure_4, MAX_GROUP_DM_STAFF_PARTICIPANTS: hasOwnProperty } = Constants);
const PremiumTypes = fn(1379).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/getGroupDMRecipientLimit.tsx");

export default function getGroupDMRecipientLimit() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.useNitroCapExperiment;
  if (flag === undefined) {
    flag = false;
  }
  const currentUser = UserStore.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  if (isStaffResult) {
    let tmp5 = hasOwnProperty;
  } else {
    if (flag) {
      if (obj3.isPremium(currentUser, PremiumTypes.TIER_2)) {
        if (tmp2Result.getGroupDMNitroCapConfig("getGroupDMRecipientLimit").enabled) {
          tmp5 = closure_3;
        }
        tmp2Result = GroupDMNitroCapExperiment;
      }
      obj3 = PremiumTypeUtils;
    }
    tmp5 = React4;
  }
  return tmp5;
};