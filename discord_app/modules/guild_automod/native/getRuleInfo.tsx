// === Module 19726: getRuleInfo ===

// Module 19726 (getRuleInfo)
import LinkIcon from "LinkIcon" /* 5609 */;
import AtIcon from "AtIcon" /* 7690 */;
import RobotIcon from "RobotIcon" /* 12179 */;
import Constants from "Constants" /* 12408 */;
import MenuIcon from "MenuIcon" /* 17328 */;
import ChannelListPlusIcon from "ChannelListPlusIcon" /* 19727 */;
import _modDef19729 from "module_19729" /* 19729 */;
import BaseRuleInfo from "BaseRuleInfo" /* 19730 */;
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
        const obj7 = { source: _modDef19729 };
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