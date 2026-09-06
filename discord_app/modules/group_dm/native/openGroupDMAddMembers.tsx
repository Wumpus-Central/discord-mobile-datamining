// === Module 11590: openGroupDMAddMembers ===

// Module 11590 (openGroupDMAddMembers)
import ToastUtils from "ToastUtils" /* 4258 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4417 */;
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel" /* 11591 */;
import getGroupDMRecipientLimitDefault from "getGroupDMRecipientLimit" /* 11592 */;
import openGroupDMNitroCapLimitSheetDefault from "openGroupDMNitroCapLimitSheet" /* 11595 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function getGroupDMAddMembersAction(id, CHANNEL_TEXT_AREA) {
  const channel = ChannelStore.getChannel(id);
  if (null != channel) {
    if (channel.isGroupDM()) {
      const currentUser = UserStore.getCurrentUser();
      const recipients = channel.recipients;
      let num;
      if (recipients != null) {
        num = recipients.length;
      }
      if (num == null) {
        num = 0;
      }
      let obj = { memberCount: num + 1, recipientLimit: getGroupDMRecipientLimitDefault({ useNitroCapExperiment: true }), audience: null, showUpsell: null };
      const obj3 = GroupDMNitroUpsellModel;
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
      obj.audience = GroupDMNitroUpsellModel.getGroupDMNitroAudience(premiumType, flag);
      const tmp2Result = GroupDMNitroUpsellModel;
      obj = { location: CHANNEL_TEXT_AREA };
      obj.showUpsell = tmp4(11594).getConfig(obj).enabled;
      return obj3.getGroupDMAddMembersEntryAction(obj);
    }
  }
  return "open";
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMAddMembers.tsx");

export default function openGroupDMAddMembers(channelId, locationPage) {
  const tmp = getGroupDMAddMembersAction(channelId, locationPage);
  if ("open" === tmp) {
    NavigationRouteUtils.navigateToNewGroupDM(channelId, locationPage);
  } else if ("upsell" === tmp) {
    openGroupDMNitroCapLimitSheetDefault(locationPage);
  } else {
    ToastUtils.showMaxGroupMembers();
  }
};
export { getGroupDMAddMembersAction };
export const showGroupDMAddMembersRoadblock = function showGroupDMAddMembersRoadblock(groupDMAddMembersAction, CHANNEL_TEXT_AREA) {
  if ("upsell" === groupDMAddMembersAction) {
    openGroupDMNitroCapLimitSheetDefault(CHANNEL_TEXT_AREA);
  } else {
    ToastUtils.showMaxGroupMembers();
  }
};