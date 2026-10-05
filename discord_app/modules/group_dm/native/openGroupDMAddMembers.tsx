// discord_app/modules/group_dm/native/openGroupDMAddMembers.tsx
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import NavigationRouteUtils from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel.tsx";
import getGroupDMRecipientLimitDefault from "../getGroupDMRecipientLimit.tsx";
import GroupDMNitroCapExperimentDefault from "../GroupDMNitroCapExperiment.tsx";
import openGroupDMNitroCapLimitSheetDefault from "openGroupDMNitroCapLimitSheet.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function getGroupDMAddMembersAction(id, CHANNEL_TEXT_AREA) {
  let flag;
  let getGroupDMNitroAudience;
  let obj2;
  let premiumType;
  let tmp5Result;
  const channel = ChannelStore.getChannel(id);
  if (null != channel) {
    if (channel.isGroupDM()) {
      const currentUser = UserStore.getCurrentUser();
      const recipients = channel.recipients;
      let num;
      const getGroupDMAddMembersEntryAction = GroupDMNitroUpsellModel.getGroupDMAddMembersEntryAction;
      GroupDMNitroUpsellModel;
      if (recipients != null) {
        num = recipients.length;
      }
      if (num == null) {
        num = 0;
      }
      const obj = {
        memberCount: num + 1,
        recipientLimit: getGroupDMRecipientLimitDefault({ useNitroCapExperiment: true }),
        audience: getGroupDMNitroAudience(premiumType, flag),
        showUpsell: tmp5Result.getConfig(obj2).enabled,
      };
      premiumType = undefined;
      getGroupDMNitroAudience = GroupDMNitroUpsellModel.getGroupDMNitroAudience;
      GroupDMNitroUpsellModel;
      if (currentUser != null) {
        premiumType = currentUser.premiumType;
      }
      flag = undefined;
      if (currentUser != null) {
        flag = currentUser.isStaff();
      }
      if (flag == null) {
        flag = false;
      }
      obj2 = { location: CHANNEL_TEXT_AREA };
      tmp5Result = GroupDMNitroCapExperimentDefault;
      return getGroupDMAddMembersEntryAction(obj);
    }
  }
  return "open";
}
const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMAddMembers.tsx");

export default function openGroupDMAddMembers(channelId, locationPage) {
  const tmp = getGroupDMAddMembersAction(channelId, locationPage);
  if ("open" === tmp) {
    const obj2 = NavigationRouteUtils;
    obj2.navigateToNewGroupDM(channelId, locationPage);
  } else if ("upsell" === tmp) {
    openGroupDMNitroCapLimitSheetDefault(locationPage);
  } else {
    const obj = ToastUtils;
    obj.showMaxGroupMembers();
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
    const obj = ToastUtils;
    obj.showMaxGroupMembers();
  }
};
