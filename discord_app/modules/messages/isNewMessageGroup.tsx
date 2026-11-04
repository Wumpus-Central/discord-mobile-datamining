// discord_app/modules/messages/isNewMessageGroup.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import DateUtils from "../../utils/DateUtils.tsx";
import isSystemMessageDefault from "isSystemMessage.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

function isNewMessageGroup(isForumPost, content, hasFlag) {
  let type = hasFlag;
  const hasFlagResult = hasFlag.hasFlag(constants3.HAS_THREAD);
  let tmp3 = !hasFlagResult;
  if (!hasFlagResult) {
    tmp3 = !type.isCommandType();
  }
  let tmp4 = !tmp3;
  if (tmp3) {
    if (content.blocked !== type.blocked || content.ignored !== type.ignored) {
      tmp4 = tmp6;
    } else {
      let REPLY = constants;
      if (type.type > constants.DEFAULT) {
        const tmp35 = isSystemMessageDefault(content);
        let tmp36 = !tmp35;
        if (tmp35) {
          type = type.type;
          REPLY = REPLY.REPLY;
          tmp36 = type === REPLY;
        }
        let tmp32 = tmp36;
      } else {
        tmp32 = isSystemMessageDefault(content);
        if (!tmp32) {
          let tmp7 = content.author.id !== type.author.id;
          if (!tmp7) {
            let tmp9 = content.hasFlag(constants3.EPHEMERAL) !== type.hasFlag(constants3.EPHEMERAL);
            if (!tmp9) {
              let tmp11 = null != type.webhookId && content.author.username !== type.author.username;
              if (!tmp11) {
                let isForumPostResult;
                if (isForumPost != null) {
                  isForumPostResult = isForumPost.isForumPost();
                }
                let tmp14 = !isForumPostResult;
                if (isForumPostResult) {
                  tmp14 = content.id !== SnowflakeUtilsDefault.castChannelIdAsMessageId(isForumPost.id);
                  const tmp38Result = SnowflakeUtilsDefault;
                }
                let tmp15 = !tmp14;
                if (tmp14) {
                  const isSameDayResult = DateUtils.isSameDay(content.timestamp, type.timestamp);
                  let tmp18 = !isSameDayResult;
                  if (isSameDayResult) {
                    const isWithinIntervalResult = DateUtils.isWithinInterval(
                      content.timestamp,
                      type.timestamp,
                      closure_6,
                    );
                    let tmp21 = !isWithinIntervalResult;
                    if (isWithinIntervalResult) {
                      const hasFlagResult2 = type.hasFlag(constants3.SUPPRESS_NOTIFICATIONS);
                      let hasFlagResult3 = !hasFlagResult2;
                      if (hasFlagResult2) {
                        hasFlagResult3 = content.hasFlag(constants3.SUPPRESS_NOTIFICATIONS);
                      }
                      let tmp24 = !hasFlagResult3;
                      if (hasFlagResult3) {
                        const hasFlagResult4 = content.hasFlag(constants3.SUPPRESS_NOTIFICATIONS);
                        let hasFlagResult5 = !hasFlagResult4;
                        if (hasFlagResult4) {
                          hasFlagResult5 = type.hasFlag(constants3.SUPPRESS_NOTIFICATIONS);
                        }
                        if (!hasFlagResult5) {
                          hasFlagResult5 = !(
                            type.mentions.length > 0 ||
                            type.mentionRoles.length > 0 ||
                            type.mentionEveryone
                          );
                          const tmp27 =
                            type.mentions.length > 0 || type.mentionRoles.length > 0 || type.mentionEveryone;
                        }
                        let tmp28 = !hasFlagResult5;
                        if (hasFlagResult5) {
                          let tmp29 = type.applicationId !== content.applicationId;
                          if (!tmp29) {
                            const additionalName = type.additionalName;
                            let tmp30 = null;
                            if (null != additionalName) {
                              tmp30 = null;
                              if ("" !== additionalName) {
                                tmp30 = additionalName;
                              }
                            }
                            const additionalName2 = content.additionalName;
                            let tmp31 = null;
                            if (null != additionalName2) {
                              tmp31 = null;
                              if ("" !== additionalName2) {
                                tmp31 = additionalName2;
                              }
                            }
                            tmp29 = tmp30 !== tmp31;
                          }
                          tmp28 = tmp29;
                        }
                        tmp24 = tmp28;
                      }
                      tmp21 = tmp24;
                    }
                    tmp18 = tmp21;
                    const tmp16Result = DateUtils;
                  }
                  tmp15 = tmp18;
                }
                tmp11 = tmp15;
              }
              tmp9 = tmp11;
            }
            tmp7 = tmp9;
            const hasFlagResult1 = content.hasFlag(constants3.EPHEMERAL);
          }
          tmp32 = tmp7;
        }
      }
    }
  }
  return tmp4;
}
({ MessageTypes: c3, ChannelStreamTypes: closure_4, MessageFlags: hasOwnProperty } = Constants);
let closure_6 = 7 * DurationsDefault.Millis.MINUTE;
const result = size.fileFinishedImporting("modules/messages/isNewMessageGroup.tsx");

export default isNewMessageGroup;
export function isNewGroupItem(isForumPost, type, hasFlag) {
  let tmp = null == type;
  if (!tmp) {
    let tmp3 = type.type === constants2.MESSAGE && type.content.id === type.content.channel_id;
    if (!tmp3) {
      let tmp4 = type.type !== constants2.MESSAGE && type.type !== constants2.THREAD_STARTER_MESSAGE;
      if (!tmp4) {
        tmp4 = isNewMessageGroup(isForumPost, type.content, hasFlag);
      }
      tmp3 = tmp4;
    }
    tmp = tmp3;
  }
  return tmp;
}
