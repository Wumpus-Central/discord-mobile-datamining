// discord_app/modules/premium/referral_program/native/ReferralProgramShareActionSheetUtils.tsx
import closure_0 from "markAllUserIdListsStale" /* 4030 */;
import { UserRowModes } from "UserRowModes" /* 9081 */;

const result = require("set").fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramShareActionSheetUtils.tsx");

export const buildReferralUserRow = function buildReferralUserRow(selectedNotResendUsers) {
  ({ eligibleUsers, row, selectedUserIds, resendUsers } = selectedNotResendUsers);
  if (null != eligibleUsers[row]) {
    let tmp4 = selectedNotResendUsers.selectedNotResendUsers.length >= tmp;
    const hasItem = selectedUserIds.includes(tmp3.id);
    let obj = { type: null, user: null, onPress: null, selected: null, disabled: null, mode: null, start: null, end: null };
    const hasItem1 = resendUsers.has(tmp3.id);
    obj[0] = relationshipType.getRelationshipType(tmp3.id);
    obj[1] = tmp3;
    obj[2] = tmp2;
    obj[3] = hasItem;
    if (tmp4) {
      tmp4 = !hasItem;
    }
    if (tmp4) {
      tmp4 = !hasItem1;
    }
    obj = { type: "user", props: null };
    obj[4] = tmp4;
    obj[5] = UserRowModes.TOGGLE;
    obj[6] = 0 === row;
    obj[7] = row === eligibleUsers.length - 1;
    obj[1] = obj;
    return obj;
  }
};