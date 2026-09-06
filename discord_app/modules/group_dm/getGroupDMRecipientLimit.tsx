// discord_app/modules/group_dm/getGroupDMRecipientLimit.tsx
import PremiumTypeUtils from "../../utils/PremiumTypeUtils.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
let closure_3 = fn(11593).MAX_GROUP_DM_NITRO_PARTICIPANTS;
const Constants = fn(1074);
({ MAX_GROUP_DM_PARTICIPANTS: closure_4, MAX_GROUP_DM_STAFF_PARTICIPANTS: hasOwnProperty } = Constants);
const PremiumTypes = fn(1373).PremiumTypes;
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
        tmp2Result = tmp2(11594);
      }
      obj3 = PremiumTypeUtils;
      tmp2 = require;
    }
    tmp5 = React4;
  }
  return tmp5;
}
