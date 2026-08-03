import ME from "ME";

let c3;
let c4;
let c5;
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
        const tmp35 = importDefault(5770)(content);
        let tmp36 = !tmp35;
        if (tmp35) {
          type = type.type;
          REPLY = REPLY.REPLY;
          tmp36 = type === REPLY;
        }
        let tmp32 = tmp36;
      } else {
        tmp32 = importDefault(5770)(content);
        if (!tmp32) {
          let tmp7 = content.author.id !== type.author.id;
          if (!tmp7) {
            let tmp9 = content.hasFlag(tmp.EPHEMERAL) !== type.hasFlag(tmp.EPHEMERAL);
            if (!tmp9) {
              let tmp11 = null != type.webhookId && content.author.username !== type.author.username;
              if (!tmp11) {
                let isForumPostResult;
                if (isForumPost != null) {
                  isForumPostResult = isForumPost.isForumPost();
                }
                let tmp14 = !isForumPostResult;
                if (isForumPostResult) {
                  tmp14 = content.id !== tmp38(11).castChannelIdAsMessageId(isForumPost.id);
                  const tmp38Result = tmp38(11);
                }
                let tmp15 = !tmp14;
                if (tmp14) {
                  const isSameDayResult = require(3925) /* resetCache */.isSameDay(content.timestamp, type.timestamp);
                  let tmp18 = !isSameDayResult;
                  if (isSameDayResult) {
                    const isWithinIntervalResult = tmp16(3925).isWithinInterval(content.timestamp, type.timestamp, closure_6);
                    let tmp21 = !isWithinIntervalResult;
                    if (isWithinIntervalResult) {
                      const hasFlagResult2 = type.hasFlag(tmp.SUPPRESS_NOTIFICATIONS);
                      let hasFlagResult3 = !hasFlagResult2;
                      if (hasFlagResult2) {
                        hasFlagResult3 = content.hasFlag(tmp.SUPPRESS_NOTIFICATIONS);
                      }
                      let tmp24 = !hasFlagResult3;
                      if (hasFlagResult3) {
                        const hasFlagResult4 = content.hasFlag(tmp.SUPPRESS_NOTIFICATIONS);
                        let hasFlagResult5 = !hasFlagResult4;
                        if (hasFlagResult4) {
                          hasFlagResult5 = type.hasFlag(tmp.SUPPRESS_NOTIFICATIONS);
                        }
                        if (!hasFlagResult5) {
                          hasFlagResult5 = !(type.mentions.length > 0 || type.mentionRoles.length > 0 || type.mentionEveryone);
                          const tmp27 = type.mentions.length > 0 || type.mentionRoles.length > 0 || type.mentionEveryone;
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
                    const tmp16Result = tmp16(3925);
                  }
                  tmp15 = tmp18;
                  const obj2 = require(3925) /* resetCache */;
                  tmp16 = require;
                }
                tmp11 = tmp15;
              }
              tmp9 = tmp11;
            }
            tmp7 = tmp9;
            const hasFlagResult1 = content.hasFlag(tmp.EPHEMERAL);
          }
          tmp32 = tmp7;
        }
        tmp38 = importDefault;
      }
    }
  }
  return tmp4;
}
({ MessageTypes: c3, ChannelStreamTypes: c4, MessageFlags: c5 } = ME);
let closure_6 = 7 * require("set").Millis.MINUTE;
const result = require("isSystemMessage").fileFinishedImporting("modules/messages/isNewMessageGroup.tsx");

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