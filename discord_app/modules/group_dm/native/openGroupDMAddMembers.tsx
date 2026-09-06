// discord_app/modules/group_dm/native/openGroupDMAddMembers.tsx
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import NavigationRouteUtils from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel.tsx";
import getGroupDMRecipientLimitDefault from "../getGroupDMRecipientLimit.tsx";
import openGroupDMNitroCapLimitSheetDefault from "openGroupDMNitroCapLimitSheet.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

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
      let obj = {
        memberCount: num + 1,
        recipientLimit: getGroupDMRecipientLimitDefault({ useNitroCapExperiment: true }),
        audience: null,
        showUpsell: null,
      };
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
}
export { getGroupDMAddMembersAction };
export const showGroupDMAddMembersRoadblock = function showGroupDMAddMembersRoadblock(
  groupDMAddMembersAction,
  CHANNEL_TEXT_AREA,
) {
  if ("upsell" === groupDMAddMembersAction) {
    openGroupDMNitroCapLimitSheetDefault(CHANNEL_TEXT_AREA);
  } else {
    ToastUtils.showMaxGroupMembers();
  }
};
