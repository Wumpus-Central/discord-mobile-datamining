// === Module 20117: getRuleInfo ===

// Module 20117 (getRuleInfo)
import LinkIcon from "LinkIcon" /* 5853 */;
import AtIcon from "AtIcon" /* 8739 */;
import RobotIcon from "RobotIcon" /* 12277 */;
import Constants from "Constants" /* 13538 */;
import MenuIcon from "MenuIcon" /* 18237 */;
import ChannelListPlusIcon from "ChannelListPlusIcon" /* 20118 */;
import _modDef20120 from "module_20120" /* 20120 */;
import BaseRuleInfo from "BaseRuleInfo" /* 20121 */;
import size from "module_2" /* 2 */;

const AutomodTriggerType = Constants.AutomodTriggerType;
const result = size.fileFinishedImporting("modules/guild_automod/native/getRuleInfo.tsx");

export function getRuleInfo(triggerType, rule) {
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
        const obj7 = { source: _modDef20120 };
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
}