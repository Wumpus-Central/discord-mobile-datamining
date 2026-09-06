// discord_app/modules/polls/PollsUtils.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import util from "../../intl/index.native.tsx";
import v1 from "../../../_runtime/01256_v1.js";
import NicknameUtilsDefault from "../../utils/NicknameUtils.tsx";
import useMessageAuthor from "../messages/useMessageAuthor.tsx";
import FakePlaceholderPrivateChannel from "../channel/FakePlaceholderPrivateChannel.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import MessageReactionsStore from "../../stores/MessageReactionsStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";

require = fn;
function getSampleOfVoterUsernamesForAnswer(message, id) {
  const channelId = message.getChannelId();
  const reactions = MessageReactionsStore.getReactions(
    channelId,
    message.id,
    { id, name: "", animated: false },
    closure_9,
    channel(7763).ReactionTypes.VOTE,
  );
  channel = ChannelStore.getChannel(channelId);
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
  const takeResult = guildId(12)(Array.from(items))
    .reject((id) => blockedOrIgnored.isBlockedOrIgnored(id.id))
    .take(tmp2);
  return guildId(12)(Array.from(items))
    .reject((id) => blockedOrIgnored.isBlockedOrIgnored(id.id))
    .take(tmp2)
    .map((item) => {
      let id;
      if (channel != null) {
        id = channel.id;
      }
      return NicknameUtilsDefault.getName(guildId, id, item);
    })
    .value();
}
function formatVoterTooltipText(arr, arg1) {
  let first = arr;
  const bound = Math.max(0, arg1 - arr.length);
  if (1 === arr.length) {
    if (bound > 0) {
      const intl6 = util.intl;
      let obj = { a: null, n: null };
      first = first[0];
      obj.a = first;
      obj.n = bound;
      let formatToPlainStringResult = intl6.formatToPlainString(util.t["SV/iZn"], obj);
    } else {
      formatToPlainStringResult = first[0];
    }
  } else if (2 === first.length) {
    if (bound > 0) {
      const intl5 = util.intl;
      obj = { a: null, b: null, n: null };
      [obj5.a, obj5.b] = first;
      obj.n = bound;
      let formatToPlainStringResult1 = intl5.formatToPlainString(util.t.YBnZK0, obj);
    } else {
      const intl4 = util.intl;
      [obj4.a, obj4.b] = first;
      formatToPlainStringResult1 = intl4.formatToPlainString(util.t["O5+f5c"], { a: null, b: null });
      const obj1 = { a: null, b: null };
    }
  } else if (3 === first.length) {
    if (bound > 0) {
      const intl3 = util.intl;
      const obj2 = { a: null, b: null, c: null, n: null };
      [obj3.a, obj3.b, obj3.c] = first;
      obj2.n = bound;
      let formatToPlainStringResult2 = intl3.formatToPlainString(util.t["ThXp+N"], obj2);
    } else {
      const intl2 = util.intl;
      const obj3 = { a: null, b: null, c: null };
      [obj2.a, obj2.b, obj2.c] = first;
      formatToPlainStringResult2 = intl2.formatToPlainString(util.t["0UzBM3"], obj3);
    }
  } else {
    const intl = util.intl;
    obj = { n: bound };
    return intl.formatToPlainString(util.t.yVX6kE, obj);
  }
}
const PollsConstants = fn(7829);
({ POLL_RESULT_MESSAGE_POLL_TITLE_MAX_VISIBLE_CHARS: closure_8, VOTES_TOOLTIP_MAX_USERS: closure_9 } = PollsConstants);
const Constants = fn(1074);
({ ChannelTypesSets: c10, Permissions: closure_11 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/polls/PollsUtils.tsx");

export const generateEmptyPollAnswer = function generateEmptyPollAnswer() {
  const obj = { text: "Array", image: "isArray", localCreationAnswerId: v1.v4() };
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
      iter.return();
      let flag = true;
      return true;
    }
  }
  return false;
};
export const useCanPostPollsInChannel = function useCanPostPollsInChannel(channel) {
  _require = channel;
  const items = [PermissionStore];
  return require("initialize").useStateFromStores(items, () => {
    let tmp = null != closure_0;
    if (tmp) {
      tmp = obj.id !== FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
    }
    if (tmp) {
      const POLLS = constants.POLLS;
      let hasItem = POLLS.has(obj.type);
      if (hasItem) {
        let isPrivateResult = obj.isPrivate();
        if (!isPrivateResult) {
          isPrivateResult =
            PermissionStore.can(constants2.SEND_MESSAGES, obj) && PermissionStore.can(constants2.SEND_POLLS, obj);
          const tmp8 =
            PermissionStore.can(constants2.SEND_MESSAGES, obj) && PermissionStore.can(constants2.SEND_POLLS, obj);
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
    tmp =
      null ==
      answers.find((text) => {
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
  return new Date(timestamp + arg0 * DurationsDefault.Millis.HOUR).toISOString();
};
export const createPollServerDataFromCreateRequest = function createPollServerDataFromCreateRequest(poll) {
  if (null != poll) {
    let mapped;
    if (poll != null) {
      const answers = poll.answers;
      if (answers != null) {
        mapped = answers.map((poll_media, index) => {
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
            ({ id: obj2.id, name } = emoji);
            if (name == null) {
              name = "";
            }
            obj.name = name;
            tmp3 = obj;
          }
          obj.emoji = tmp3;
          obj = {};
          const merged1 = Object.assign(poll_media);
          obj.answer_id = index + 1;
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
      const date = new Date(timestamp + poll.duration * DurationsDefault.Millis.HOUR);
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
  let obj = useMessageAuthor;
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
  if (null != React6) {
    truncateTextResult = tmp(1926).truncateText(str, tmp4);
    const tmpResult = tmp(1926);
  }
  const intl = tmp(1114).intl;
  obj = { username: messageAuthor.nick, title: truncateTextResult };
  return intl.format(util.t.Vn97Ka, obj);
};
export const getPollResultsReplyPreviewMobile = function getPollResultsReplyPreviewMobile(message2) {
  if ("author" in message2) {
    let obj = useMessageAuthor;
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
    if (null != React6) {
      truncateTextResult = tmp2(1926).truncateText(str, tmp5);
      const tmp2Result = tmp2(1926);
    }
    const intl = tmp2(1114).intl;
    obj = { username: messageAuthor.nick, title: truncateTextResult };
    return intl.formatToParts(util.t.Vn97Ka, obj);
  } else {
    return null;
  }
};
export const getTotalVotes = function getTotalVotes(reactions) {
  return reactions.reduce((acc, count_details) => {
    count_details = count_details.count_details;
    let num;
    if (count_details != null) {
      num = count_details.vote;
    }
    if (num == null) {
      num = 0;
    }
    return acc + num;
  }, 0);
};
export { getSampleOfVoterUsernamesForAnswer };
export { formatVoterTooltipText };
export const getPollAnswerVotesTooltipText = function getPollAnswerVotesTooltipText(arg0, arg1, id) {
  const message = MessageStore.getMessage(arg1, arg0);
  if (null == message) {
    return "";
  } else {
    const obj = { id, name: "", animated: false };
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
  ({ questionText, totalVotes } = totalVotes);
  let num = 0;
  ({ victorAnswerText, victorAnswerId } = totalVotes);
  if (totalVotes.totalVotes > 0) {
    const _Math = Math;
    num = Math.round((tmp / totalVotes) * 100);
  }
  if (0 === totalVotes) {
    const intl3 = util.intl;
    let obj = { questionText };
    let formatToPlainStringResult = intl3.formatToPlainString(util.t["8anM0l"], obj);
  } else if (null != victorAnswerId) {
    const intl2 = util.intl;
    obj = { questionText, victorAnswerText, percentage: null };
    const _HermesInternal2 = HermesInternal;
    obj.percentage = "" + num + "%";
    formatToPlainStringResult = intl2.formatToPlainString(util.t["8yEgvE"], obj);
  } else {
    const intl = util.intl;
    obj = { questionText, percentage: null };
    const _HermesInternal = HermesInternal;
    obj.percentage = "" + num + "%";
    formatToPlainStringResult = intl.formatToPlainString(util.t.XVk6Zv, obj);
  }
  return formatToPlainStringResult;
};
