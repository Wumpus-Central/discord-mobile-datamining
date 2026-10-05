// === Module 17687: getRuleInfo ===

// Module 17687 (getRuleInfo)
import LinkIcon from "LinkIcon" /* 4839 */;
import AtIcon from "AtIcon" /* 5874 */;
import RobotIcon from "RobotIcon" /* 8958 */;
import Constants from "Constants" /* 11474 */;
import MenuIcon from "MenuIcon" /* 15747 */;
import ChannelListPlusIcon from "ChannelListPlusIcon" /* 17688 */;
import AssetRegistryDefault from "AssetRegistry" /* 17690 */;
import BaseRuleInfo from "BaseRuleInfo" /* 17691 */;
import size from "module_2" /* 2 */;

const AutomodTriggerType = Constants.AutomodTriggerType;
const result = size.fileFinishedImporting("modules/guild_automod/native/getRuleInfo.tsx");

export const getRuleInfo = function getRuleInfo(triggerType, rule) {
  let tmp9;
  const obj = BaseRuleInfo;
  const baseRuleInfo = obj.getBaseRuleInfo(triggerType, rule);
  let tmp4 = null;
  if (null != baseRuleInfo) {
    tmp4 = null;
    if (null != triggerType) {
      const obj2 = { icon: tmp9 };
      const merged = Object.assign(baseRuleInfo);
      if (AutomodTriggerType.MENTION_SPAM === triggerType) {
        tmp9 = { IconComponent: AtIcon.AtIcon };
        const obj3 = { IconComponent: AtIcon.AtIcon };
      } else if (AutomodTriggerType.KEYWORD === triggerType) {
        tmp9 = { IconComponent: ChannelListPlusIcon.ChannelListPlusIcon };
        const obj4 = { IconComponent: ChannelListPlusIcon.ChannelListPlusIcon };
      } else {
        if (AutomodTriggerType.ML_SPAM !== triggerType) {
          if (AutomodTriggerType.USER_PROFILE !== triggerType) {
            if (AutomodTriggerType.DEFAULT_KEYWORD_LIST === triggerType) {
              tmp9 = { IconComponent: MenuIcon.MenuIcon };
              const obj5 = { IconComponent: MenuIcon.MenuIcon };
            } else if (AutomodTriggerType.APPLICATION === triggerType) {
              tmp9 = { IconComponent: RobotIcon.RobotIcon };
              const obj6 = { IconComponent: RobotIcon.RobotIcon };
            }
          }
        }
        tmp9 = { source: AssetRegistryDefault };
        const obj7 = { source: AssetRegistryDefault };
      }
      if (tmp9 == null) {
        tmp9 = { IconComponent: LinkIcon.LinkIcon };
        const obj8 = { IconComponent: LinkIcon.LinkIcon };
      }
      tmp4 = obj2;
    }
  }
  return tmp4;
};