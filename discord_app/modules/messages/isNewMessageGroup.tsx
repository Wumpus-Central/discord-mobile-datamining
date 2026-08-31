// === Module 11492: isNewMessageGroup ===

// Module 11492 (isNewMessageGroup)
import set from "set" /* 2 */;
import setDefault from "set" /* 687 */;
import resetCache from "resetCache" /* 4133 */;
import isSystemMessageDefault from "isSystemMessage" /* 6085 */;
import ME from "ME" /* 676 */;

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
        const tmp37 = isSystemMessageDefault(content);
        let tmp38 = !tmp37;
        if (tmp37) {
          type = type.type;
          REPLY = REPLY.REPLY;
          tmp38 = type === REPLY;
        }
        let tmp34 = tmp38;
      } else {
        tmp34 = isSystemMessageDefault(content);
        if (!tmp34) {
          let tmp7 = content.author.id !== type.author.id;
          if (!tmp7) {
            let tmp9 = content.hasFlag(tmp.EPHEMERAL) !== type.hasFlag(tmp.EPHEMERAL);
            if (!tmp9) {
              let tmp11 = content.hasFlag(tmp.IS_SCHEDULED) !== type.hasFlag(tmp.IS_SCHEDULED);
              if (!tmp11) {
                let tmp13 = null != type.webhookId && content.author.username !== type.author.username;
                if (!tmp13) {
                  let isForumPostResult;
                  if (isForumPost != null) {
                    isForumPostResult = isForumPost.isForumPost();
                  }
                  let tmp16 = !isForumPostResult;
                  if (isForumPostResult) {
                    tmp16 = content.id !== tmp40(11).castChannelIdAsMessageId(isForumPost.id);
                    const tmp40Result = tmp40(11);
                  }
                  let tmp17 = !tmp16;
                  if (tmp16) {
                    const isSameDayResult = resetCache.isSameDay(content.timestamp, type.timestamp);
                    let tmp20 = !isSameDayResult;
                    if (isSameDayResult) {
                      const isWithinIntervalResult = tmp18(4133).isWithinInterval(content.timestamp, type.timestamp, closure_6);
                      let tmp23 = !isWithinIntervalResult;
                      if (isWithinIntervalResult) {
                        const hasFlagResult3 = type.hasFlag(tmp.SUPPRESS_NOTIFICATIONS);
                        let hasFlagResult4 = !hasFlagResult3;
                        if (hasFlagResult3) {
                          hasFlagResult4 = content.hasFlag(tmp.SUPPRESS_NOTIFICATIONS);
                        }
                        let tmp26 = !hasFlagResult4;
                        if (hasFlagResult4) {
                          const hasFlagResult5 = content.hasFlag(tmp.SUPPRESS_NOTIFICATIONS);
                          let hasFlagResult6 = !hasFlagResult5;
                          if (hasFlagResult5) {
                            hasFlagResult6 = type.hasFlag(tmp.SUPPRESS_NOTIFICATIONS);
                          }
                          if (!hasFlagResult6) {
                            hasFlagResult6 = !(type.mentions.length > 0 || type.mentionRoles.length > 0 || type.mentionEveryone);
                            const tmp29 = type.mentions.length > 0 || type.mentionRoles.length > 0 || type.mentionEveryone;
                          }
                          let tmp30 = !hasFlagResult6;
                          if (hasFlagResult6) {
                            let tmp31 = type.applicationId !== content.applicationId;
                            if (!tmp31) {
                              const additionalName = type.additionalName;
                              let tmp32 = null;
                              if (null != additionalName) {
                                tmp32 = null;
                                if ("" !== additionalName) {
                                  tmp32 = additionalName;
                                }
                              }
                              const additionalName2 = content.additionalName;
                              let tmp33 = null;
                              if (null != additionalName2) {
                                tmp33 = null;
                                if ("" !== additionalName2) {
                                  tmp33 = additionalName2;
                                }
                              }
                              tmp31 = tmp32 !== tmp33;
                            }
                            tmp30 = tmp31;
                          }
                          tmp26 = tmp30;
                        }
                        tmp23 = tmp26;
                      }
                      tmp20 = tmp23;
                      const tmp18Result = tmp18(4133);
                    }
                    tmp17 = tmp20;
                    const obj2 = resetCache;
                    tmp18 = require;
                  }
                  tmp13 = tmp17;
                }
                tmp11 = tmp13;
              }
              tmp9 = tmp11;
              const hasFlagResult2 = content.hasFlag(tmp.IS_SCHEDULED);
            }
            tmp7 = tmp9;
            const hasFlagResult1 = content.hasFlag(tmp.EPHEMERAL);
          }
          tmp34 = tmp7;
        }
        tmp40 = importDefault;
      }
    }
  }
  return tmp4;
}
({ MessageTypes: c3, ChannelStreamTypes: c4, MessageFlags: c5 } = ME);
let closure_6 = 7 * setDefault.Millis.MINUTE;
const result = set.fileFinishedImporting("modules/messages/isNewMessageGroup.tsx");

export default isNewMessageGroup;
export const isNewGroupItem = function isNewGroupItem(isForumPost, type, hasFlag) {
  let tmp = null == type;
  if (!tmp) {
    let tmp3 = type.type === constants2.MESSAGE && type.content.id === type.content.channel_id;
    if (!tmp3) {
      let tmp4 = type.type !== tmp2.MESSAGE && type.type !== tmp2.THREAD_STARTER_MESSAGE;
      if (!tmp4) {
        tmp4 = isNewMessageGroup(isForumPost, type.content, hasFlag);
      }
      tmp3 = tmp4;
    }
    tmp = tmp3;
  }
  return tmp;
};