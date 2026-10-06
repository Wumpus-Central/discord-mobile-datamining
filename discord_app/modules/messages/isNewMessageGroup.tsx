// === Module 11578: isNewMessageGroup ===

// Module 11578 (isNewMessageGroup)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DurationsDefault from "Durations" /* 1102 */;
import DateUtils from "DateUtils" /* 4558 */;
import isSystemMessageDefault from "isSystemMessage" /* 6783 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
function isNewMessageGroup(isForumPost, content, hasFlag) {
  const hasFlagResult = hasFlag.hasFlag(hasOwnProperty.HAS_THREAD);
  const tmp3 = !hasFlagResult && !hasFlag.isCommandType();
  let tmp4 = !tmp3;
  if (tmp3) {
    let tmp6 = content.blocked !== hasFlag.blocked || content.ignored !== hasFlag.ignored;
    if (!tmp6) {
      let tmp35;
      if (hasFlag.type > constants.DEFAULT) {
        const tmp38 = isSystemMessageDefault(content);
        let tmp39 = !tmp38;
        if (tmp38) {
          tmp39 = hasFlag.type === tmp7.REPLY;
        }
        tmp35 = tmp39;
      } else {
        tmp35 = isSystemMessageDefault(content);
        if (!tmp35) {
          let tmp8 = content.author.id !== hasFlag.author.id;
          if (!tmp8) {
            const hasFlagResult1 = content.hasFlag(hasOwnProperty.EPHEMERAL);
            let tmp10 = hasFlagResult1 !== hasFlag.hasFlag(hasOwnProperty.EPHEMERAL);
            if (!tmp10) {
              const hasFlagResult2 = content.hasFlag(hasOwnProperty.IS_SCHEDULED);
              let tmp12 = hasFlagResult2 !== hasFlag.hasFlag(hasOwnProperty.IS_SCHEDULED);
              if (!tmp12) {
                let tmp14 = null != hasFlag.webhookId && content.author.username !== hasFlag.author.username;
                if (!tmp14) {
                  let isForumPostResult;
                  if (isForumPost != null) {
                    isForumPostResult = isForumPost.isForumPost();
                  }
                  let tmp17 = !isForumPostResult;
                  if (isForumPostResult) {
                    const id = content.id;
                    const tmp40Result = SnowflakeUtilsDefault;
                    tmp17 = id !== tmp40Result.castChannelIdAsMessageId(isForumPost.id);
                  }
                  let tmp18 = !tmp17;
                  if (tmp17) {
                    const obj2 = DateUtils;
                    const isSameDayResult = obj2.isSameDay(content.timestamp, hasFlag.timestamp);
                    let tmp21 = !isSameDayResult;
                    if (isSameDayResult) {
                      const tmp19Result = DateUtils;
                      const isWithinIntervalResult = tmp19Result.isWithinInterval(content.timestamp, hasFlag.timestamp, closure_6);
                      let tmp24 = !isWithinIntervalResult;
                      if (isWithinIntervalResult) {
                        const hasFlagResult3 = hasFlag.hasFlag(hasOwnProperty.SUPPRESS_NOTIFICATIONS);
                        let hasFlagResult4 = !hasFlagResult3;
                        if (hasFlagResult3) {
                          hasFlagResult4 = content.hasFlag(hasOwnProperty.SUPPRESS_NOTIFICATIONS);
                        }
                        let tmp27 = !hasFlagResult4;
                        if (hasFlagResult4) {
                          const hasFlagResult5 = content.hasFlag(hasOwnProperty.SUPPRESS_NOTIFICATIONS);
                          let hasFlagResult6 = !hasFlagResult5;
                          if (hasFlagResult5) {
                            hasFlagResult6 = hasFlag.hasFlag(hasOwnProperty.SUPPRESS_NOTIFICATIONS);
                          }
                          if (!hasFlagResult6) {
                            hasFlagResult6 = !(hasFlag.mentions.length > 0 || hasFlag.mentionRoles.length > 0 || hasFlag.mentionEveryone);
                          }
                          let tmp31 = !hasFlagResult6;
                          if (hasFlagResult6) {
                            let tmp32 = hasFlag.applicationId !== content.applicationId;
                            if (!tmp32) {
                              const additionalName = hasFlag.additionalName;
                              let tmp33 = null;
                              if (null != additionalName) {
                                tmp33 = null;
                                if ("" !== additionalName) {
                                  tmp33 = additionalName;
                                }
                              }
                              const additionalName2 = content.additionalName;
                              let tmp34 = null;
                              if (null != additionalName2) {
                                tmp34 = null;
                                if ("" !== additionalName2) {
                                  tmp34 = additionalName2;
                                }
                              }
                              tmp32 = tmp33 !== tmp34;
                            }
                            tmp31 = tmp32;
                          }
                          tmp27 = tmp31;
                        }
                        tmp24 = tmp27;
                      }
                      tmp21 = tmp24;
                    }
                    tmp18 = tmp21;
                  }
                  tmp14 = tmp18;
                }
                tmp12 = tmp14;
              }
              tmp10 = tmp12;
            }
            tmp8 = tmp10;
          }
          tmp35 = tmp8;
        }
      }
      tmp6 = tmp35;
    }
    tmp4 = tmp6;
  }
  return tmp4;
}
({ MessageTypes: c3, ChannelStreamTypes: closure_4, MessageFlags: hasOwnProperty } = Constants);
let closure_6 = 7 * DurationsDefault.Millis.MINUTE;
const result = size.fileFinishedImporting("modules/messages/isNewMessageGroup.tsx");

export default isNewMessageGroup;
export const isNewGroupItem = function isNewGroupItem(isForumPost, type, hasFlag) {
  let tmp = null == type;
  if (!tmp) {
    let tmp3 = type.type === constants2.MESSAGE && type.content.id === type.content.channel_id;
    if (!tmp3) {
      tmp3 = type.type !== constants2.MESSAGE && type.type !== constants2.THREAD_STARTER_MESSAGE || isNewMessageGroup(isForumPost, type.content, hasFlag);
      const tmp4 = type.type !== constants2.MESSAGE && type.type !== constants2.THREAD_STARTER_MESSAGE || isNewMessageGroup(isForumPost, type.content, hasFlag);
    }
    tmp = tmp3;
  }
  return tmp;
};