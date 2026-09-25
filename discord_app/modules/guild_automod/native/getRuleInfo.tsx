// discord_app/modules/guild_automod/native/getRuleInfo.tsx
import LinkIcon from "../../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import AtIcon from "../../../design/components/Icon/native/redesign/generated/AtIcon.tsx";
import RobotIcon from "../../../design/components/Icon/native/redesign/generated/RobotIcon.tsx";
import Constants from "../Constants.tsx";
import MenuIcon from "../../../design/components/Icon/native/redesign/generated/MenuIcon.tsx";
import ChannelListPlusIcon from "../../../design/components/Icon/native/redesign/generated/ChannelListPlusIcon.tsx";
import _modDef17285 from "../../../../_runtime/metro/17285__.js";
import BaseRuleInfo from "../BaseRuleInfo.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AutomodTriggerType = Constants.AutomodTriggerType;
const result = size.fileFinishedImporting("modules/guild_automod/native/getRuleInfo.tsx");

export const getRuleInfo = function getRuleInfo(triggerType, rule) {
  const baseRuleInfo = BaseRuleInfo.getBaseRuleInfo(triggerType, rule);
  let tmp4 = null;
  if (null != baseRuleInfo) {
    tmp4 = null;
    if (null != triggerType) {
      const obj2 = {};
      const merged = Object.assign(baseRuleInfo);
      if (AutomodTriggerType.MENTION_SPAM === triggerType) {
        const obj3 = { IconComponent: AtIcon.AtIcon };
        let tmp9 = obj3;
      } else if (AutomodTriggerType.KEYWORD === triggerType) {
        const obj4 = { IconComponent: ChannelListPlusIcon.ChannelListPlusIcon };
        tmp9 = obj4;
      } else {
        if (AutomodTriggerType.ML_SPAM !== triggerType) {
          if (AutomodTriggerType.USER_PROFILE !== triggerType) {
            if (AutomodTriggerType.DEFAULT_KEYWORD_LIST === triggerType) {
              const obj5 = { IconComponent: MenuIcon.MenuIcon };
              tmp9 = obj5;
            } else if (AutomodTriggerType.APPLICATION === triggerType) {
              const obj6 = { IconComponent: RobotIcon.RobotIcon };
              tmp9 = obj6;
            }
          }
        }
        const obj7 = { source: _modDef17285 };
        tmp9 = obj7;
      }
      if (tmp9 == null) {
        const obj8 = { IconComponent: LinkIcon.LinkIcon };
        tmp9 = obj8;
      }
      obj2.icon = tmp9;
      tmp4 = obj2;
    }
  }
  return tmp4;
};
