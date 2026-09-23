// discord_app/modules/guild_automod/BaseActionInfo.tsx
import util from "../../intl/index.native.tsx";
import useChannelName from "../channel/useChannelName.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const Constants = fn(12198);
({ AutomodActionType: hasOwnProperty, AutomodTriggerType: metroRequire } = Constants);
const getFriendlyDurationString = fn(2107).getFriendlyDurationString;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/BaseActionInfo.tsx");

export const getBaseActionInfo = function getBaseActionInfo(actionType, metadata, triggerType) {
  if (constants.BLOCK_MESSAGE !== actionType) {
    if (constants.FLAG_TO_CHANNEL !== actionType) {
      if (constants.USER_COMMUNICATION_DISABLED !== actionType) {
        let flag = false;
      }
      let tmp3 = null;
      if (flag) {
        if (constants.BLOCK_MESSAGE === actionType) {
          const intl3 = util.intl;
          let str = intl3.string(util.t.d1ab8n);
        } else if (constants.FLAG_TO_CHANNEL === actionType) {
          const intl2 = util.intl;
          str = intl2.string(util.t["Y+VmvU"]);
        } else if (constants.USER_COMMUNICATION_DISABLED === actionType) {
          const intl = util.intl;
          str = intl.string(util.t.Xz2njA);
        } else if (constants.QUARANTINE_USER === actionType) {
          const intl11 = util.intl;
          str = intl11.string(util.t.NPO8ee);
        }
        if (str == null) {
          str = "";
        }
        let KEYWORD = triggerType;
        const obj = { headerText: str, descriptionText: null, helperText: null, isEditable: null };
        if (triggerType === undefined) {
          KEYWORD = constants2.KEYWORD;
        }
        if (constants.BLOCK_MESSAGE === actionType) {
          if (constants2.MENTION_SPAM === KEYWORD) {
            const intl8 = util.intl;
            let str2 = intl8.string(util.t["8hdId3"]);
          } else if (tmp15.ML_SPAM === KEYWORD) {
            const intl7 = util.intl;
            str2 = intl7.string(util.t.tLQYs5);
          } else {
            const intl6 = util.intl;
            str2 = intl6.string(util.t.xAAoci);
          }
        } else if (constants.FLAG_TO_CHANNEL === actionType) {
          const intl5 = util.intl;
          str2 = intl5.string(util.t.BHAXfa);
        } else if (constants.USER_COMMUNICATION_DISABLED === actionType) {
          const intl4 = util.intl;
          str2 = intl4.string(util.t["bNK+gI"]);
        } else if (constants.QUARANTINE_USER === actionType) {
          const intl12 = util.intl;
          str2 = intl12.string(util.t["/7nL5R"]);
        }
        if (str2 == null) {
          str2 = "";
        }
        obj.descriptionText = str2;
        let formatResult = null;
        if (constants.QUARANTINE_USER !== actionType) {
          formatResult = null;
          if (constants.BLOCK_MESSAGE !== actionType) {
            if (constants.FLAG_TO_CHANNEL === actionType) {
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
                  const channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
                  const intl10 = util.intl;
                  const obj2 = { channelName };
                  formatResult = intl10.format(util.t.xQXnkK, obj2);
                }
              }
            } else if (constants.USER_COMMUNICATION_DISABLED === actionType) {
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
                const intl9 = util.intl;
                const obj4 = { duration: tmp40Result };
                formatResult1 = intl9.format(util.t.AFmbfS, obj4);
              }
              formatResult = formatResult1;
            }
          }
        }
        if (formatResult == null) {
          formatResult = null;
        }
        obj.helperText = formatResult;
        obj.isEditable = actionType !== constants.QUARANTINE_USER;
        tmp3 = obj;
      }
      return tmp3;
    }
  }
  flag = true;
};
