// discord_app/modules/polls/PollsUtils.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import reactionKey from "reactionKey";
import reinjectEphemerals from "reinjectEphemerals";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import POLL_ATTACHMENT_FOLDER from "POLL_ATTACHMENT_FOLDER";
import ME from "ME";
import { v1 } from "../../../_runtime/00514_v1.js";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { set } from "../../utils/Durations.tsx";
import { useNullableMessageAuthor } from "../messages/useMessageAuthor.tsx";

let c10;
let c9;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function getSampleOfVoterUsernamesForAnswer(message, id) {
  const channelId = message.getChannelId();
  reactions = reactions.getReactions(channelId, message.id, { id, name: "", animated: false }, closure_9, channel(7262).ReactionTypes.VOTE);
  channel = channel.getChannel(channelId);
  let guildId = null;
  if (null != channel) {
    guildId = null;
    if (!channel.isPrivate()) {
      guildId = channel.getGuildId();
    }
  }
  let items;
  if (reactions != null) {
    items = reactions.values();
  }
  if (items == null) {
    items = [];
  }
  const obj = { id, name: "", animated: false };
  const tmp2 = closure_9;
  const tmp5 = guildId(12);
  const tmp5Result = guildId(12)(Array.from(items));
  const rejectResult = guildId(12)(Array.from(items)).reject((id) => blockedOrIgnored.isBlockedOrIgnored(id.id));
  const takeResult = guildId(12)(Array.from(items)).reject((id) => blockedOrIgnored.isBlockedOrIgnored(id.id)).take(tmp2);
  return guildId(12)(Array.from(items)).reject((id) => blockedOrIgnored.isBlockedOrIgnored(id.id)).take(tmp2).map((arg0) => {
    let id;
    if (channel != null) {
      id = channel.id;
    }
    return guildId(outer1_2[16]).getName(guildId, id, arg0);
  }).value();
}
function formatVoterTooltipText(arr, arg1) {
  let first = arr;
  const bound = Math.max(0, arg1 - arr.length);
  if (1 === arr.length) {
    if (bound > 0) {
      const intl6 = getSystemLocale.intl;
      let obj = { a: null, n: null };
      first = first[0];
      obj[0] = first;
      obj[1] = bound;
      let formatToPlainStringResult = intl6.formatToPlainString(getSystemLocale.t["SV/iZn"], obj);
    } else {
      formatToPlainStringResult = first[0];
    }
  } else if (2 === first.length) {
    if (bound > 0) {
      const intl5 = getSystemLocale.intl;
      obj = { a: null, b: null, n: null };
      [obj5[0], obj5[1]] = first;
      obj[2] = bound;
      let formatToPlainStringResult1 = intl5.formatToPlainString(getSystemLocale.t.YBnZK0, obj);
    } else {
      const intl4 = getSystemLocale.intl;
      [obj4[0], obj4[1]] = first;
      formatToPlainStringResult1 = intl4.formatToPlainString(getSystemLocale.t["O5+f5c"], { a: null, b: null });
      const obj1 = { a: null, b: null };
    }
  } else if (3 === first.length) {
    if (bound > 0) {
      const intl3 = getSystemLocale.intl;
      const obj2 = { a: null, b: null, c: null, n: null };
      [obj3[0], obj3[1], obj3[2]] = first;
      obj2[3] = bound;
      let formatToPlainStringResult2 = intl3.formatToPlainString(getSystemLocale.t["ThXp+N"], obj2);
    } else {
      const intl2 = getSystemLocale.intl;
      const obj3 = { a: null, b: null, c: null };
      [obj2[0], obj2[1], obj2[2]] = first;
      formatToPlainStringResult2 = intl2.formatToPlainString(getSystemLocale.t["0UzBM3"], obj3);
    }
  } else {
    const intl = getSystemLocale.intl;
    obj = { n: null };
    obj[0] = bound;
    return intl.formatToPlainString(getSystemLocale.t.yVX6kE, obj);
  }
}
({ POLL_RESULT_MESSAGE_POLL_TITLE_MAX_VISIBLE_CHARS: metroImportAll, VOTES_TOOLTIP_MAX_USERS: c9 } = POLL_ATTACHMENT_FOLDER);
({ ChannelTypesSets: c10, Permissions: unpackModuleId } = ME);
const result = require("reinjectEphemerals").fileFinishedImporting("modules/polls/PollsUtils.tsx");

export const generateEmptyPollAnswer = function generateEmptyPollAnswer() {
  const obj = { text: "Array", image: "accessibilityRole", localCreationAnswerId: true };
  obj[2] = v1.v4();
  return obj;
};
export const generateLocalCreationAnswerId = function generateLocalCreationAnswerId() {
  return v1.v4();
};
export const filterOutUUID = function filterOutUUID(str) {
  return str.replace(/\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i, "");
};
export const hasNonVoteReactions = function hasNonVoteReactions(message) {
  const iter = message.reactions[Symbol.iterator]();
  while (iter !== undefined) {
    if (null == iter.next().me_vote) {
      let tmp = iter;
      iter.return();
      let flag = true;
      return true;
    }
  }
  return false;
};
export const useCanPostPollsInChannel = function useCanPostPollsInChannel(channel) {
  const _require = channel;
  const items = [getUncachedChannelPermissions];
  return _initialize.useStateFromStores(items, () => {
    let tmp = null != channel;
    if (tmp) {
      tmp = obj.id !== channel(outer1_2[9]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
    }
    if (tmp) {
      const POLLS = outer1_10.POLLS;
      let hasItem = POLLS.has(obj.type);
      if (hasItem) {
        let isPrivateResult = obj.isPrivate();
        if (!isPrivateResult) {
          isPrivateResult = outer1_6.can(outer1_11.SEND_MESSAGES, obj) && outer1_6.can(outer1_11.SEND_POLLS, obj);
          const obj2 = outer1_6;
          const tmp7 = outer1_11;
          const tmp8 = outer1_6.can(outer1_11.SEND_MESSAGES, obj) && outer1_6.can(outer1_11.SEND_POLLS, obj);
        }
        hasItem = isPrivateResult;
      }
      tmp = hasItem;
    }
    return tmp;
  });
};
export const isPollCreationEmpty = function isPollCreationEmpty(c4, answers) {
  let tmp = 0 === c4.length;
  if (tmp) {
    tmp = null == answers.find((text) => {
      let trimmed;
      if (text.text != null) {
        trimmed = str.trim();
      }
      let tmp2 = null != trimmed;
      if (tmp2) {
        tmp2 = trimmed.length > 0;
      }
      return tmp2;
    });
  }
  return tmp;
};
export const isAnswerFilled = function isAnswerFilled(text) {
  let trimmed;
  if (text.text != null) {
    trimmed = str.trim();
  }
  let tmp2 = null != trimmed;
  if (tmp2) {
    tmp2 = trimmed.length > 0;
  }
  return tmp2;
};
export const isIncompleteAnswer = function isIncompleteAnswer(text) {
  if (text.text != null) {
    const trimmed = str.trim();
  }
  let tmp = null != text.image;
  if (tmp) {
    let tmp2 = null == trimmed;
    if (!tmp2) {
      tmp2 = 0 === trimmed.length;
    }
    tmp = tmp2;
  }
  return tmp;
};
export const createPollExpiryTimestamp = function createPollExpiryTimestamp(arg0) {
  const timestamp = Date.now();
  return new Date(timestamp + arg0 * set.Millis.HOUR).toISOString();
};
export const createPollServerDataFromCreateRequest = function createPollServerDataFromCreateRequest(poll) {
  if (null != poll) {
    let mapped;
    if (poll != null) {
      const answers = poll.answers;
      if (answers != null) {
        mapped = answers.map((poll_media) => {
          let name;
          poll_media = poll_media.poll_media;
          let emoji;
          if (poll_media != null) {
            emoji = poll_media.emoji;
          }
          let obj = {};
          const merged = Object.assign(poll_media.poll_media);
          let tmp3;
          if (null != emoji) {
            obj = { id: null, name: null };
            ({ id: obj2[0], name } = emoji);
            if (name == null) {
              name = "";
            }
            obj[1] = name;
            tmp3 = obj;
          }
          obj.emoji = tmp3;
          obj = {};
          const merged1 = Object.assign(poll_media);
          obj.answer_id = arg1 + 1;
          obj.poll_media = obj;
          return obj;
        });
      }
    }
    let duration;
    if (poll != null) {
      duration = poll.duration;
    }
    let str = "0";
    if (null != duration) {
      const _Date = Date;
      const _Date2 = Date;
      const timestamp = Date.now();
      const date = new Date(timestamp + poll.duration * set.Millis.HOUR);
      str = date.toISOString();
    }
    let obj = {};
    let merged = Object.assign(poll);
    obj.expiry = str;
    obj.answers = mapped;
    return obj;
  }
};
export const getPollReplyPreview = function getPollReplyPreview(message) {
  const poll = message.poll;
  let str;
  if (poll != null) {
    const question = poll.question;
    if (question != null) {
      str = question.text;
    }
  }
  if (str == null) {
    str = "";
  }
  return str;
};
export const getPollResultsReplyPreview = function getPollResultsReplyPreview(message) {
  let obj = useNullableMessageAuthor;
  const first = message.embeds[0];
  let str;
  const messageAuthor = obj.getMessageAuthor(message);
  if (first != null) {
    const fields = first.fields;
    if (fields != null) {
      const found = fields.find((rawName) => "poll_question_text" === rawName.rawName);
      if (found != null) {
        str = found.rawValue;
      }
    }
  }
  if (str == null) {
    str = "";
  }
  let truncateTextResult = str;
  if (null != closure_8) {
    truncateTextResult = tmp(1904).truncateText(str, tmp4);
    const tmpResult = tmp(1904);
  }
  const intl = tmp(1236).intl;
  obj = { username: messageAuthor.nick, title: truncateTextResult };
  return intl.format(getSystemLocale.t.Vn97Ka, obj);
};
export const getPollResultsReplyPreviewMobile = function getPollResultsReplyPreviewMobile(message2) {
  if ("author" in message2) {
    let obj = useNullableMessageAuthor;
    const first = message2.embeds[0];
    let str;
    const messageAuthor = obj.getMessageAuthor(message2);
    if (first != null) {
      const fields = first.fields;
      if (fields != null) {
        const found = fields.find((rawName) => "poll_question_text" === rawName.rawName);
        if (found != null) {
          str = found.rawValue;
        }
      }
    }
    if (str == null) {
      str = "";
    }
    let truncateTextResult = str;
    if (null != closure_8) {
      truncateTextResult = tmp2(1904).truncateText(str, tmp5);
      const tmp2Result = tmp2(1904);
    }
    const intl = tmp2(1236).intl;
    obj = { username: null, title: null };
    obj[0] = messageAuthor.nick;
    obj[1] = truncateTextResult;
    return intl.formatToParts(getSystemLocale.t.Vn97Ka, obj);
  } else {
    return null;
  }
};
export const getTotalVotes = function getTotalVotes(reactions) {
  return reactions.reduce((arg0, count_details) => {
    count_details = count_details.count_details;
    let num;
    if (count_details != null) {
      num = count_details.vote;
    }
    if (num == null) {
      num = 0;
    }
    return arg0 + num;
  }, 0);
};
export { getSampleOfVoterUsernamesForAnswer };
export { formatVoterTooltipText };
export const getPollAnswerVotesTooltipText = function getPollAnswerVotesTooltipText(arg0, arg1, id) {
  message = message.getMessage(arg1, arg0);
  if (null == message) {
    return "";
  } else {
    const obj = { id: null, name: "", animated: false };
    obj[0] = id;
    const reaction = message.getReaction(obj);
    let num;
    if (reaction != null) {
      const count_details = reaction.count_details;
      if (count_details != null) {
        num = count_details.vote;
      }
    }
    if (num == null) {
      num = 0;
    }
    const arr = getSampleOfVoterUsernamesForAnswer(message, id);
    let str = "";
    if (0 !== arr.length) {
      str = formatVoterTooltipText(arr, num);
    }
    return str;
  }
};
export const formatPollResultNotificationCenterText = function formatPollResultNotificationCenterText(totalVotes) {
  let questionText;
  let victorAnswerId;
  let victorAnswerText;
  ({ questionText, totalVotes } = totalVotes);
  let num = 0;
  ({ victorAnswerText, victorAnswerId } = totalVotes);
  if (totalVotes.totalVotes > 0) {
    const _Math = Math;
    num = Math.round(tmp / totalVotes * 100);
  }
  if (0 === totalVotes) {
    const intl3 = getSystemLocale.intl;
    let obj = { questionText: null };
    obj[0] = questionText;
    let formatToPlainStringResult = intl3.formatToPlainString(getSystemLocale.t["8anM0l"], obj);
  } else if (null != victorAnswerId) {
    const intl2 = getSystemLocale.intl;
    obj = { questionText: null, victorAnswerText: null, percentage: null };
    obj[0] = questionText;
    obj[1] = victorAnswerText;
    const _HermesInternal2 = HermesInternal;
    obj[2] = "" + num + "%";
    formatToPlainStringResult = intl2.formatToPlainString(getSystemLocale.t["8yEgvE"], obj);
  } else {
    const intl = getSystemLocale.intl;
    obj = { questionText: null, percentage: null };
    obj[0] = questionText;
    const _HermesInternal = HermesInternal;
    obj[1] = "" + num + "%";
    formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t.XVk6Zv, obj);
  }
  return formatToPlainStringResult;
};