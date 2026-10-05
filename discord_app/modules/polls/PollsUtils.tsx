// discord_app/modules/polls/PollsUtils.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import intl7 from "../../intl/index.native.tsx";
import v1 from "../../../_runtime/01266_v1.js";
import utils_StringUtils from "../../../discord_common/js/shared/utils/StringUtils.tsx";
import NicknameUtilsDefault from "../../utils/NicknameUtils.tsx";
import useMessageAuthor from "../messages/useMessageAuthor.tsx";
import FakePlaceholderPrivateChannel from "../channel/FakePlaceholderPrivateChannel.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import MessageReactionsStore from "../../stores/MessageReactionsStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import PollsConstants from "PollsConstants.tsx";
import Constants from "../../Constants.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, poll_media;

let c10;
let c9;
let metroImportAll;
let unpackModuleId;
const f94558 = (rawName) => "poll_question_text" === rawName.rawName;
function getSampleOfVoterUsernamesForAnswer(message, id) {
  let blockedOrIgnored;
  let channel;
  const channelId = message.getChannelId();
  const obj = { id, name: "", animated: false };
  const reactions = MessageReactionsStore.getReactions(
    channelId,
    message.id,
    obj,
    closure_9,
    channel(7259).ReactionTypes.VOTE,
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
  const _Array = Array;
  const tmp5 = guildId(12);
  if (reactions != null) {
    items = reactions.values();
  }
  if (items == null) {
    items = [];
  }
  const tmp5Result = tmp5(from(items));
  const rejectResult = tmp5Result.reject((id) => blockedOrIgnored.isBlockedOrIgnored(id.id));
  const takeResult = rejectResult.take(closure_9);
  const iter = takeResult.map((item) => {
    let id;
    const getName = NicknameUtilsDefault.getName;
    NicknameUtilsDefault;
    if (channel != null) {
      id = channel.id;
    }
    return getName(guildId, id, item);
  });
  return iter.value();
}
function formatVoterTooltipText(arr, arg1) {
  let formatToPlainStringResult3;
  const bound = Math.max(0, arg1 - arr.length);
  if (1 === arr.length) {
    let formatToPlainStringResult;
    if (bound > 0) {
      const intl6 = intl7.intl;
      const obj6 = { a: arr[0], n: bound };
      formatToPlainStringResult = intl6.formatToPlainString(intl7.t["SV/iZn"], obj6);
    } else {
      formatToPlainStringResult = arr[0];
    }
    formatToPlainStringResult3 = formatToPlainStringResult;
  } else if (2 === arr.length) {
    let formatToPlainStringResult1;
    if (bound > 0) {
      const intl5 = intl7.intl;
      const obj11 = { a: null, b: null, n: bound };
      [obj5.a, obj5.b] = arr;
      formatToPlainStringResult1 = intl5.formatToPlainString(intl7.t.YBnZK0, obj11);
    } else {
      const intl4 = intl7.intl;
      const obj12 = { a: null, b: null };
      [obj4.a, obj4.b] = arr;
      formatToPlainStringResult1 = intl4.formatToPlainString(intl7.t["O5+f5c"], obj12);
    }
    formatToPlainStringResult3 = formatToPlainStringResult1;
  } else if (3 === arr.length) {
    let formatToPlainStringResult2;
    if (bound > 0) {
      const intl3 = intl7.intl;
      const obj13 = { a: null, b: null, c: null, n: bound };
      [obj3.a, obj3.b, obj3.c] = arr;
      formatToPlainStringResult2 = intl3.formatToPlainString(intl7.t["ThXp+N"], obj13);
    } else {
      const intl2 = intl7.intl;
      const obj14 = { a: null, b: null, c: null };
      [obj2.a, obj2.b, obj2.c] = arr;
      formatToPlainStringResult2 = intl2.formatToPlainString(intl7.t["0UzBM3"], obj14);
    }
    formatToPlainStringResult3 = formatToPlainStringResult2;
  } else {
    const intl = intl7.intl;
    const obj = { n: bound };
    formatToPlainStringResult3 = intl.formatToPlainString(intl7.t.yVX6kE, obj);
  }
  return formatToPlainStringResult3;
}
({ POLL_RESULT_MESSAGE_POLL_TITLE_MAX_VISIBLE_CHARS: metroImportAll, VOTES_TOOLTIP_MAX_USERS: c9 } = PollsConstants);
({ ChannelTypesSets: c10, Permissions: unpackModuleId } = Constants);
function generateLocalCreationAnswerId() {
  const obj = v1;
  return obj.v4();
}
function isAnswerFilled(text) {
  let trimmed;
  if (text.text != null) {
    trimmed = str.trim();
  }
  return null != trimmed && trimmed.length > 0;
}
function createPollExpiryTimestamp(arg0) {
  const timestamp = Date.now();
  const date = new Date(timestamp + arg0 * DurationsDefault.Millis.HOUR);
  return date.toISOString();
}
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let _private;
      let first;
      let tmp6;
      _require = arg0;
      let tmp = _require;
      const obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          let tmp =
            null != _private && _private.id !== FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
          if (tmp) {
            const POLLS = constants.POLLS;
            let hasItem = POLLS.has(_private.type);
            if (hasItem) {
              let isPrivateResult = _private.isPrivate();
              if (!isPrivateResult) {
                isPrivateResult =
                  PermissionStore.can(unpackModuleId.SEND_MESSAGES, _private) &&
                  PermissionStore.can(unpackModuleId.SEND_POLLS, _private);
                PermissionStore.can(unpackModuleId.SEND_MESSAGES, _private) &&
                  PermissionStore.can(unpackModuleId.SEND_POLLS, _private);
              }
              hasItem = isPrivateResult;
            }
            tmp = hasItem;
          }
          return tmp;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6);
    }
  : (arg0) => {
      let _private;
      _require = arg0;
      const items = [PermissionStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
        let tmp = null != _private && _private.id !== FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
        if (tmp) {
          const POLLS = constants.POLLS;
          let hasItem = POLLS.has(_private.type);
          if (hasItem) {
            let isPrivateResult = _private.isPrivate();
            if (!isPrivateResult) {
              isPrivateResult =
                PermissionStore.can(unpackModuleId.SEND_MESSAGES, _private) &&
                PermissionStore.can(unpackModuleId.SEND_POLLS, _private);
              PermissionStore.can(unpackModuleId.SEND_MESSAGES, _private) &&
                PermissionStore.can(unpackModuleId.SEND_POLLS, _private);
            }
            hasItem = isPrivateResult;
          }
          tmp = hasItem;
        }
        return tmp;
      });
    };
const result = size.fileFinishedImporting("modules/polls/PollsUtils.tsx");

export const generateEmptyPollAnswer = function generateEmptyPollAnswer() {
  let obj2;
  const obj = { text: "Array", image: "Set", localCreationAnswerId: obj2.v4() };
  obj2 = v1;
  return obj;
};
export { generateLocalCreationAnswerId };
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
export const useCanPostPollsInChannel = tmp4;
export const isPollCreationEmpty = function isPollCreationEmpty(c4, answers) {
  let tmp = 0 === MessageReactionsStore.length;
  if (tmp) {
    tmp =
      null ==
      answers.find((text) => {
        let trimmed;
        if (text.text != null) {
          trimmed = str.trim();
        }
        return null != trimmed && trimmed.length > 0;
      });
  }
  return tmp;
};
export { isAnswerFilled };
export const isIncompleteAnswer = function isIncompleteAnswer(text) {
  let trimmed;
  if (text.text != null) {
    trimmed = str.trim();
  }
  let tmp = null != text.image;
  if (tmp) {
    tmp = null == trimmed || 0 === trimmed.length;
    const tmp2 = null == trimmed || 0 === trimmed.length;
  }
  return tmp;
};
export { createPollExpiryTimestamp };
export const createPollServerDataFromCreateRequest = function createPollServerDataFromCreateRequest(poll) {
  if (null != poll) {
    let mapped;
    if (poll != null) {
      const answers = poll.answers;
      if (answers != null) {
        mapped = answers.map((poll_media, index) => {
          let name;
          let tmp3;
          poll_media = poll_media.poll_media;
          let emoji;
          if (poll_media != null) {
            emoji = poll_media.emoji;
          }
          const obj = { emoji: tmp3 };
          const merged = Object.assign(poll_media.poll_media);
          tmp3 = undefined;
          if (null != emoji) {
            const obj3 = { id: null, name };
            ({ id: obj2.id, name } = emoji);
            if (name == null) {
              name = "";
            }
            tmp3 = obj3;
          }
          const obj5 = { answer_id: index + 1, poll_media: obj };
          const merged1 = Object.assign(poll_media);
          return obj5;
        });
      }
    }
    let duration1;
    if (poll != null) {
      duration1 = poll.duration;
    }
    let str = "0";
    if (null != duration1) {
      let tmp3 = globalThis;
      const _Date = Date;
      const _Date2 = Date;
      const duration = poll.duration;
      const timestamp = Date.now();
      const self = this;
      const self2 = this;
      const date = new Date(timestamp + duration * DurationsDefault.Millis.HOUR);
      str = date.toISOString();
    }
    let obj = { expiry: str, answers: mapped };
    let merged = Object.assign(poll);
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
  const first = message.embeds[0];
  let str;
  const obj = useMessageAuthor;
  const messageAuthor = obj.getMessageAuthor(message);
  if (first != null) {
    const fields = first.fields;
    if (fields != null) {
      const found = fields.find(f94558);
      if (found != null) {
        str = found.rawValue;
      }
    }
  }
  if (str == null) {
    str = "";
  }
  let truncateTextResult = str;
  if (null != metroImportAll) {
    const tmpResult = utils_StringUtils;
    truncateTextResult = tmpResult.truncateText(str, metroImportAll);
  }
  const intl = intl7.intl;
  const obj2 = { username: messageAuthor.nick, title: truncateTextResult };
  return intl.format(intl7.t.Vn97Ka, obj2);
};
export const getPollResultsReplyPreviewMobile = function getPollResultsReplyPreviewMobile(message5) {
  if ("author" in message5) {
    const first = message5.embeds[0];
    let str;
    const obj = useMessageAuthor;
    const messageAuthor = obj.getMessageAuthor(message5);
    if (first != null) {
      const fields = first.fields;
      if (fields != null) {
        const found = fields.find(f94558);
        if (found != null) {
          str = found.rawValue;
        }
      }
    }
    if (str == null) {
      str = "";
    }
    let truncateTextResult = str;
    if (null != metroImportAll) {
      const tmp2Result = utils_StringUtils;
      truncateTextResult = tmp2Result.truncateText(str, metroImportAll);
    }
    const intl = intl7.intl;
    const obj2 = { username: messageAuthor.nick, title: truncateTextResult };
    return intl.formatToParts(intl7.t.Vn97Ka, obj2);
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
  let formatToPlainStringResult;
  let questionText;
  let victorAnswerId;
  let victorAnswerText;
  ({ questionText, totalVotes } = totalVotes);
  let num = 0;
  ({ victorAnswerText, victorAnswerId } = totalVotes);
  if (totalVotes.totalVotes > 0) {
    const _Math = Math;
    num = Math.round((tmp / totalVotes) * 100);
  }
  if (0 === totalVotes) {
    const intl3 = intl7.intl;
    const obj2 = { questionText };
    formatToPlainStringResult = intl3.formatToPlainString(intl7.t["8anM0l"], obj2);
  } else if (null != victorAnswerId) {
    const intl2 = intl7.intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const _HermesInternal2 = HermesInternal;
    const obj3 = { questionText, victorAnswerText, percentage: "" + num + "%" };
    const v8yEgvE = intl7.t["8yEgvE"];
    formatToPlainStringResult = formatToPlainString2(v8yEgvE, obj3);
  } else {
    const intl = intl7.intl;
    const formatToPlainString = intl.formatToPlainString;
    const _HermesInternal = HermesInternal;
    const obj = { questionText, percentage: "" + num + "%" };
    const XVk6Zv = intl7.t.XVk6Zv;
    formatToPlainStringResult = formatToPlainString(XVk6Zv, obj);
  }
  return formatToPlainStringResult;
};
