// discord_app/modules/group_dm/native/openGroupDMAddMembers.tsx
import presentAddedFriendToast from "../../toast/native/ToastUtils.tsx";
import coerceMainRoute from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import GroupDMNitroAcquisitionStrategy from "GroupDMNitroUpsellModel.tsx";
import getGroupDMRecipientLimitDefault from "../getGroupDMRecipientLimit.tsx";
import openGroupDMNitroCapLimitSheetDefault from "openGroupDMNitroCapLimitSheet.tsx";
import closure_3 from "../../../stores/ChannelStore.tsx";
import closure_4 from "../../../stores/UserStore.tsx";

require = arg1;
function getGroupDMAddMembersAction(id, CHANNEL_TEXT_AREA) {
  channel = channel.getChannel(id);
  if (null != channel) {
    if (channel.isGroupDM()) {
      currentUser = currentUser.getCurrentUser();
      const recipients = channel.recipients;
      let num;
      if (recipients != null) {
        num = recipients.length;
      }
      if (num == null) {
        num = 0;
      }
      let obj = { memberCount: null, recipientLimit: null, audience: null, showUpsell: null };
      obj[0] = num + 1;
      obj[1] = getGroupDMRecipientLimitDefault({ useNitroCapExperiment: true });
      const obj3 = GroupDMNitroAcquisitionStrategy;
      const tmp2 = require;
      const tmp4 = importDefault;
      let premiumType;
      if (currentUser != null) {
        premiumType = currentUser.premiumType;
      }
      let flag;
      if (currentUser != null) {
        flag = currentUser.isStaff();
      }
      if (flag == null) {
        flag = false;
      }
      obj[2] = GroupDMNitroAcquisitionStrategy.getGroupDMNitroAudience(premiumType, flag);
      const tmp2Result = GroupDMNitroAcquisitionStrategy;
      obj = { location: null };
      obj[0] = CHANNEL_TEXT_AREA;
      obj[3] = tmp4(11594).getConfig(obj).enabled;
      return obj3.getGroupDMAddMembersEntryAction(obj);
    }
  }
  return "open";
}
const result = require("set").fileFinishedImporting("modules/group_dm/native/openGroupDMAddMembers.tsx");

export default function openGroupDMAddMembers(id, CHANNEL_TEXT_AREA) {
  const tmp = getGroupDMAddMembersAction(id, CHANNEL_TEXT_AREA);
  if ("open" === tmp) {
    coerceMainRoute.navigateToNewGroupDM(id, CHANNEL_TEXT_AREA);
    const obj2 = coerceMainRoute;
  } else if ("upsell" === tmp) {
    openGroupDMNitroCapLimitSheetDefault(CHANNEL_TEXT_AREA);
  } else {
    presentAddedFriendToast.showMaxGroupMembers();
    const obj = presentAddedFriendToast;
  }
}
export { getGroupDMAddMembersAction };
export const showGroupDMAddMembersRoadblock = function showGroupDMAddMembersRoadblock(
  groupDMAddMembersAction,
  CHANNEL_TEXT_AREA,
) {
  if ("upsell" === groupDMAddMembersAction) {
    openGroupDMNitroCapLimitSheetDefault(CHANNEL_TEXT_AREA);
  } else {
    presentAddedFriendToast.showMaxGroupMembers();
    const obj = presentAddedFriendToast;
  }
};
