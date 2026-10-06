// === Module 17732: BaseActionInfo ===

// Module 17732 (BaseActionInfo)
import intl13 from "intl" /* 1126 */;
import GuildDisableCommunicationConstants from "GuildDisableCommunicationConstants" /* 2114 */;
import useChannelName from "useChannelName" /* 5049 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 11487 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
({ AutomodActionType: hasOwnProperty, AutomodTriggerType: metroRequire } = Constants);
const getFriendlyDurationString = GuildDisableCommunicationConstants.getFriendlyDurationString;
const result = size.fileFinishedImporting("modules/guild_automod/BaseActionInfo.tsx");

export const getBaseActionInfo = function getBaseActionInfo(actionType, metadata, triggerType) {
  let formatResult;
  let str2;
  if (hasOwnProperty.BLOCK_MESSAGE !== actionType) {
    if (hasOwnProperty.FLAG_TO_CHANNEL !== actionType) {
      let flag;
      if (hasOwnProperty.USER_COMMUNICATION_DISABLED !== actionType) {
        flag = false;
      }
      let tmp3 = null;
      if (flag) {
        let str;
        if (hasOwnProperty.BLOCK_MESSAGE === actionType) {
          const intl3 = intl13.intl;
          str = intl3.string(intl13.t.d1ab8n);
        } else if (hasOwnProperty.FLAG_TO_CHANNEL === actionType) {
          const intl2 = intl13.intl;
          str = intl2.string(intl13.t["Y+VmvU"]);
        } else if (hasOwnProperty.USER_COMMUNICATION_DISABLED === actionType) {
          const intl = intl13.intl;
          str = intl.string(intl13.t.Xz2njA);
        } else if (hasOwnProperty.QUARANTINE_USER === actionType) {
          const intl11 = intl13.intl;
          str = intl11.string(intl13.t.NPO8ee);
        }
        if (str == null) {
          str = "";
        }
        let KEYWORD = triggerType;
        const obj = { headerText: str, descriptionText: str2, helperText: formatResult, isEditable: actionType !== hasOwnProperty.QUARANTINE_USER };
        if (triggerType === undefined) {
          KEYWORD = metroRequire.KEYWORD;
        }
        if (hasOwnProperty.BLOCK_MESSAGE === actionType) {
          if (metroRequire.MENTION_SPAM === KEYWORD) {
            const intl8 = intl13.intl;
            str2 = intl8.string(intl13.t["8hdId3"]);
          } else if (tmp15.ML_SPAM === KEYWORD) {
            const intl7 = intl13.intl;
            str2 = intl7.string(intl13.t.tLQYs5);
          } else {
            const intl6 = intl13.intl;
            str2 = intl6.string(intl13.t.xAAoci);
          }
        } else if (hasOwnProperty.FLAG_TO_CHANNEL === actionType) {
          const intl5 = intl13.intl;
          str2 = intl5.string(intl13.t.BHAXfa);
        } else if (hasOwnProperty.USER_COMMUNICATION_DISABLED === actionType) {
          const intl4 = intl13.intl;
          str2 = intl4.string(intl13.t["bNK+gI"]);
        } else if (hasOwnProperty.QUARANTINE_USER === actionType) {
          const intl12 = intl13.intl;
          str2 = intl12.string(intl13.t["/7nL5R"]);
        }
        if (str2 == null) {
          str2 = "";
        }
        formatResult = null;
        if (hasOwnProperty.QUARANTINE_USER !== actionType) {
          formatResult = null;
          if (hasOwnProperty.BLOCK_MESSAGE !== actionType) {
            if (hasOwnProperty.FLAG_TO_CHANNEL === actionType) {
              let channelId;
              if (metadata != null) {
                const metadata2 = metadata.metadata;
                if (metadata2 != null) {
                  channelId = metadata2.channelId;
                }
              }
              formatResult = null;
              if (null != channelId) {
                const channel = ChannelStore.getChannel(channelId);
                formatResult = null;
                if (null != channel) {
                  const obj3 = useChannelName;
                  const channelName = obj3.computeChannelName(channel, UserStore, RelationshipStore);
                  const intl10 = intl13.intl;
                  const obj2 = { channelName };
                  formatResult = intl10.format(intl13.t.xQXnkK, obj2);
                }
              }
            } else if (hasOwnProperty.USER_COMMUNICATION_DISABLED === actionType) {
              let num;
              if (metadata != null) {
                metadata = metadata.metadata;
                if (metadata != null) {
                  num = metadata.durationSeconds;
                }
              }
              if (num == null) {
                num = 0;
              }
              const tmp40Result = getFriendlyDurationString(num);
              let formatResult1 = null;
              if (null != tmp40Result) {
                const intl9 = intl13.intl;
                const obj4 = { duration: tmp40Result };
                formatResult1 = intl9.format(intl13.t.AFmbfS, obj4);
              }
              formatResult = formatResult1;
            }
          }
        }
        if (formatResult == null) {
          formatResult = null;
        }
        tmp3 = obj;
      }
      return tmp3;
    }
  }
  flag = true;
};