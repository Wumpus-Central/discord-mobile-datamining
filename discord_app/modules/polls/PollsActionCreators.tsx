// === Module 11357: PollsActionCreators ===

// Module 11357 (PollsActionCreators)
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5076 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5712 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5714 */;
import JoinGuildRefusedError from "JoinGuildRefusedError" /* 6730 */;
import DraftStore from "DraftStore" /* 7044 */;
import PollInteractionUtilsAll from "PollInteractionUtils" /* 11358 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import LurkingStore from "LurkingStore" /* 4516 */;
import ReferencedMessageStore from "ReferencedMessageStore" /* 7115 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5577 */;
import MessageStore from "MessageStore" /* 5116 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7280 */;
import PollsInteractionStore from "PollsInteractionStore" /* 11099 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let attachmentsToUpload, c8, duration, importAll, importDefault, layout_type, scheduledTimestamp;

let closure_14;
let closure_15;
let closure_16;
let map1;
function getPollVoteEventProperties(answers, set) {
  function _loop(item10012) {
    let closure_0 = item10012;
    let poll_media;
    const arr = closure_0;
    if (closure_0 != null) {
      const found = arr.find((answer_id) => answer_id.answer_id === parseInt(closure_0));
      if (found != null) {
        poll_media = found.poll_media;
      }
    }
    let text;
    if (poll_media != null) {
      text = poll_media.text;
    }
    if (null != text) {
      closure_1 = closure_1 + 1;
    }
    let emoji;
    if (poll_media != null) {
      emoji = poll_media.emoji;
    }
    if (null != emoji) {
      closure_2 = closure_2 + 1;
    }
  }
  let closure_0 = answers;
  const items = [...set];
  importDefault = 0;
  importAll = 0;
  for (const item10012 of items) {
    let tmp = _loop(item10012);
    continue;
  }
  return { analyticsSelectedAnswerIds: items, selectedTextAnswersCount: importDefault, selectedEmojiAnswersCount: importAll };
}
function showLurkingAlert(guildId) {
  let body;
  let intl;
  let intl2;
  let title;
  guildId = guildId.guildId;
  ({ title, body } = guildId);
  obj = {
    title,
    body,
    confirmText: intl.string(guildId(1126).t["9VLmlZ"]),
    cancelText: intl2.string(guildId(1126).t["2m+Sqk"]),
    onConfirm() {
      obj = GuildActionCreatorsDefault;
      const obj2 = { source: constants.POLL_ALERT };
      const joinGuildResult = obj.joinGuild(guild_id, obj2);
      joinGuildResult.catch(JoinGuildRefusedError.ignoreJoinGuildRefused);
    }
  };
  const show = AlertActionCreatorsDefault.show;
  AlertActionCreatorsDefault;
  intl = guildId(1126).intl;
  intl2 = guildId(1126).intl;
  show(obj);
}
function handleShowVotesForAnswer(messageId) {
  let answerId;
  let channelId;
  let intl3;
  let intl4;
  ({ channelId, answerId } = messageId);
  messageId = messageId.messageId;
  const channel = ChannelStore.getChannel(channelId);
  if (null != channel) {
    if (LurkingStore.isLurking(channel.guild_id)) {
      const guild_id = channel.guild_id;
      const intl = guild_id(1126).intl;
      const stringResult = intl.string(guild_id(1126).t["7LpysO"]);
      const intl2 = guild_id(1126).intl;
      const stringResult1 = intl2.string(guild_id(1126).t["5sHHoy"]);
      let obj2 = {
        title: stringResult,
        body: stringResult1,
        confirmText: intl3.string(guild_id(1126).t["9VLmlZ"]),
        cancelText: intl4.string(guild_id(1126).t["2m+Sqk"]),
        onConfirm() {
              obj = GuildActionCreatorsDefault;
              const obj2 = { source: constants.POLL_ALERT };
              const joinGuildResult = obj.joinGuild(guild_id, obj2);
              joinGuildResult.catch(JoinGuildRefusedError.ignoreJoinGuildRefused);
            }
      };
      const show = AlertActionCreatorsDefault.show;
      AlertActionCreatorsDefault;
      intl3 = guild_id(1126).intl;
      intl4 = guild_id(1126).intl;
      show(obj2);
    } else {
      const message = MessageStore.getMessage(channelId, messageId);
      if (null != message) {
        if (null != message.poll) {
          if (0 !== message.poll.answers.length) {
            if (answerId == null) {
              const _String = String;
              answerId = String(message.poll.answers[0].answer_id);
            }
            obj = PollInteractionUtilsAll;
            const obj3 = { message, initialAnswerId: answerId };
            obj.showVotesForAnswer(obj3);
          }
        }
      }
    }
  }
}
function handleUpdateVoteEditingState(channelId) {
  channelId = channelId.channelId;
  const isEditing = channelId.isEditing;
  authStore2(channelId, channelId.messageId, (showResults) => {
    let flag;
    obj = { channelId, selectedAnswerIds: new Set(), submitting: false, editing: isEditing, showResults: flag };
    flag = undefined;
    new Set();
    if (showResults != null) {
      flag = showResults.showResults;
    }
    if (flag == null) {
      flag = false;
    }
    return obj;
  });
}
function getCurrentAnswerIds(channelId) {
  let items;
  const message = MessageStore.getMessage(channelId.channelId, channelId.messageId);
  if (null == message) {
    items = [];
  } else {
    const reactions = message.reactions;
    items = reactions.flatMap((me_vote) => {
      let name;
      if (true === me_vote.me_vote) {
        name = me_vote.emoji.name;
      } else {
        name = [];
      }
      return name;
    });
  }
  return items;
}
function optimisticallySetAnswers() {
  return obj(...arguments);
}
let obj = function _optimisticallySetAnswers() {
  obj = _asyncToGenerator(async (channelId) => {
    let c0;
    let c1;
    let c2;
    let closure_2;
    let messageId;
    let value;
    if (1 === c4) {
      if (channelId === 1) {
        let c5 = 3;
        throw value;
      } else if (channelId === 2) {
        c5 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        const obj5 = { channelId, messageId };
        let closure_3 = closure_131_21(obj5);
        const obj7 = closure_131_1(closure_131_3[19]);
        let closure_4 = obj7.difference(closure_3, c2);
        const obj8 = closure_131_1(closure_131_3[19]);
        let closure_5 = obj8.difference(c2, closure_3);
        const userId = closure_131_7.getId();
        messageId = 0;
        const items = [];
        messageId = HermesBuiltin.arraySpread(items, closure_4.map((id) => ({ type: "MESSAGE_REACTION_REMOVE", id })), messageId);
        messageId = HermesBuiltin.arraySpread(items, closure_5.map((id) => ({ type: "MESSAGE_REACTION_ADD", id })), messageId);
        const Emitter = closure_131_1(closure_131_3[20]).Emitter;
        value = Emitter.batched(() => {
          let dispatchResult;
          for (const item10006 of closure_1_7) {
            let id = item10006.id;
            let type = item10006.type;
            let tmp4 = messageId(closure_3[21]);
            obj = { type, channelId, messageId, emoji: obj2, userId, optimistic: true, reactionType: channelId(closure_3[22]).ReactionTypes.VOTE };
            let obj2 = { id, name: id };
            let dispatch = tmp4.dispatch;
            dispatchResult = dispatch(obj);
            continue;
          }
          return dispatchResult;
        });
        if (null != value) {
          c4 = 2;
          c5 = 1;
          const obj6 = { value, done: false };
          return obj6;
        }
      }
    } else if (channelId === 1) {
      c5 = 3;
      throw value;
    } else if (channelId === 2) {
      c5 = 3;
      obj = { value, done: true };
      return obj;
    }
    await "IconComponent";
    closure_3 = tmp5;
    ({ channelId: c0, messageId: c1, answerIds: c2 } = channelId);
    return "Reflect";
  });
  return obj(...arguments);
};
function handlePollSubmitVote() {
  return obj(...arguments);
}
obj = function _handlePollSubmitVote() {
  obj = _asyncToGenerator(async (channelId) => {
    let answerIds;
    let body;
    let c0;
    let c1;
    let closure_1;
    let closure_5;
    let closure_6;
    let intl3;
    let intl5;
    let intl6;
    let intl7;
    let intl8;
    let items;
    let message;
    let obj3;
    if (1 === c8) {
      if (channelId === 1) {
        let c9 = 3;
        throw value;
      } else if (channelId === 2) {
        c9 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        message = closure_133_8.getChannel(channelId);
        if (null != message) {
          if (closure_133_5.isLurking(message.guild_id)) {
            const obj6 = { guildId: message.guild_id, title: intl7.string(closure_133_0(closure_133_3[13]).t.Qic1FD), body: intl8.string(closure_133_0(closure_133_3[13]).t["5sHHoy"]) };
            intl7 = closure_133_0(closure_133_3[13]).intl;
            intl8 = closure_133_0(closure_133_3[13]).intl;
            closure_133_18(obj6);
          } else if (closure_133_10.canChatInGuild(message.guild_id)) {
            let selectedAnswerIds = closure_133_13(channelId, messageId);
            closure_133_1(closure_133_3[11])(null != selectedAnswerIds, "Must not be able to vote without existing state!");
            const obj7 = { channelId, messageId };
            answerIds = closure_133_21(obj7);
            let c7 = 1;
            selectedAnswerIds = 0;
            selectedAnswerIds = selectedAnswerIds.selectedAnswerIds;
            items = [];
            selectedAnswerIds = HermesBuiltin.arraySpread(items, selectedAnswerIds.values(), selectedAnswerIds);
            closure_133_14(channelId, messageId, (arg0) => {
              closure_1_1(selectedAnswerIds[11])(null != arg0, "Must not be able to vote without existing state!");
              obj = { submitting: true, editing: false };
              const merged = Object.assign(arg0);
              return obj;
            });
            const obj8 = { channelId, messageId, answerIds: items };
            c8 = 3;
            c9 = 1;
            const obj9 = { value: closure_133_22(obj8), done: false };
            return obj9;
          } else {
            const obj10 = { title: intl5.string(closure_133_0(closure_133_3[13]).t.p245wu), body: intl6.string(closure_133_0(closure_133_3[13]).t["U/uodt"]) };
            const show2 = closure_133_1(closure_133_3[12]).show;
            const tmp64 = closure_133_1(closure_133_3[12]);
            intl5 = closure_133_0(closure_133_3[13]).intl;
            intl6 = closure_133_0(closure_133_3[13]).intl;
            show2(obj10);
          }
        }
      }
    } else if (2 === c8) {
      c7 = 0;
      const obj11 = { title: intl3.string(closure_133_0(closure_133_3[13]).t.iufib1), body };
      const show = closure_133_1(closure_133_3[12]).show;
      const tmp37 = closure_133_1(closure_133_3[12]);
      intl3 = closure_133_0(closure_133_3[13]).intl;
      const getAnyErrorMessage = tmp111.getAnyErrorMessage;
      let anyErrorMessage;
      if (getAnyErrorMessage != null) {
        anyErrorMessage = getAnyErrorMessage();
      }
      message = anyErrorMessage;
      if (anyErrorMessage == null) {
        message = tmp111.message;
      }
      body = message;
      if (message == null) {
        const intl4 = closure_133_0(closure_133_3[13]).intl;
        body = intl4.string(closure_133_0(closure_133_3[13]).t.eAn6z2);
      }
      show(obj11);
      const obj12 = { channelId, messageId, answerIds };
      c8 = 5;
      c9 = 1;
      const obj13 = { value: closure_133_22(obj12), done: false };
      return obj13;
    } else if (3 === c8) {
      if (channelId === 1) {
        c9 = 3;
        throw value;
      } else if (channelId === 2) {
        c7 = 0;
        c9 = 3;
        const obj14 = { value, done: true };
        return obj14;
      } else {
        const obj15 = { channelId, messageId, answerIds: items };
        c8 = 4;
        c9 = 1;
        const obj16 = { value: obj3.submitPollVote(obj15), done: false };
        obj3 = closure_133_2(closure_133_3[23]);
        return obj16;
      }
    } else if (4 === c8) {
      if (channelId === 1) {
        c9 = 3;
        throw value;
      } else if (channelId === 2) {
        c7 = 0;
        c9 = 3;
        const obj17 = { value, done: true };
        return obj17;
      } else {
        let stringResult;
        closure_133_14(channelId, messageId, () => {

        });
        const AccessibilityAnnouncer = closure_133_0(closure_133_3[24]).AccessibilityAnnouncer;
        const announce = AccessibilityAnnouncer.announce;
        if (0 === items.length) {
          const intl2 = closure_133_0(closure_133_3[13]).intl;
          stringResult = intl2.string(closure_133_0(closure_133_3[13]).t["xcvy+3"]);
        } else {
          const intl = closure_133_0(closure_133_3[13]).intl;
          stringResult = intl.string(closure_133_0(closure_133_3[13]).t.o20GSo);
        }
        announce(stringResult);
        c7 = 0;
      }
    } else if (channelId === 1) {
      c9 = 3;
      throw value;
    } else if (channelId === 2) {
      c9 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      closure_133_14(channelId, messageId, (arg0) => {
        if (null != arg0) {
          obj = { submitting: false, editing: false };
          const merged = Object.assign(arg0);
          return obj;
        }
      });
    }
    await "IconComponent";
    answerIds = tmp5;
    ({ channelId: c0, messageId: c1 } = closure_0);
    return "Reflect";
  });
  return obj(...arguments);
};
obj = function _handleClearPollVote() {
  obj = _asyncToGenerator(async (channelId) => {
    let c0;
    let c1;
    let closure_2;
    let intl;
    let intl2;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (channelId === 1) {
        throw value;
      } else if (channelId === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let messageId;
        let channel;
        c4 = 2;
        if (0 === c3) {
          if (channelId === 1) {
            c4 = 3;
            throw value;
          } else if (channelId === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            channelId = undefined;
            messageId = undefined;
            ({ channelId: c0, messageId: c1 } = channelId);
            channel = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c3) {
          if (channelId === 1) {
            c4 = 3;
            throw value;
          } else if (channelId === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            channel = closure_130_8.getChannel(channelId);
            if (null != channel) {
              if (closure_130_5.isLurking(channel.guild_id)) {
                const obj5 = { guildId: channel.guild_id, title: intl.string(closure_130_0(closure_130_3[13]).t.B9QnBp), body: intl2.string(closure_130_0(closure_130_3[13]).t.BVZCTn) };
                intl = closure_130_0(closure_130_3[13]).intl;
                intl2 = closure_130_0(closure_130_3[13]).intl;
                closure_130_18(obj5);
              } else {
                closure_130_14(channelId, messageId, (showResults) => {
                  let flag;
                  obj = { channelId, selectedAnswerIds: new Set(), submitting: false, editing: false, showResults: flag };
                  flag = undefined;
                  new Set();
                  if (showResults != null) {
                    flag = showResults.showResults;
                  }
                  if (flag == null) {
                    flag = false;
                  }
                  return obj;
                });
                const obj6 = { channelId, messageId };
                c3 = 2;
                c4 = 1;
                const obj7 = { value: closure_130_24(obj6), done: false };
                return obj7;
              }
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (channelId === 1) {
          c4 = 3;
          throw value;
        } else if (channelId === 2) {
          c4 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp17) {
        c4 = 3;
        throw tmp17;
      }
    }
  });
  return obj(...arguments);
};
obj = function _handlePollActionTapped() {
  obj = _asyncToGenerator(async (channelId) => {
    let c0;
    let c1;
    let c2;
    let closure_2;
    let messageId;
    function handleClearPollVote() {
      return closure_1_26(...arguments);
    }
    function handleShowVotes(channelId) {
      channelId = channelId.channelId;
      messageId = channelId.messageId;
      closure_14(channelId, messageId, (showResults) => {
        let flag;
        let flag2;
        message = message.getMessage(channelId, messageId);
        let num = 0;
        if (null != message) {
          const reactions = message.reactions;
          num = reactions.reduce((acc, count_details) => {
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
        }
        obj = closure_2_1(closure_2_3[18]);
        obj.trackWithMetadata(constants.POLL_SHOW_RESULTS_CLICKED, { channel_id: channelId, message_id: messageId, show_results: null == showResults || !showResults.showResults, votes_count: num });
        const obj2 = { channelId, selectedAnswerIds: new Set(), submitting: flag, editing: flag2, showResults: null == showResults || !showResults.showResults };
        flag = undefined;
        new Set();
        if (showResults != null) {
          flag = showResults.submitting;
        }
        if (flag == null) {
          flag = false;
        }
        flag2 = undefined;
        if (showResults != null) {
          flag2 = showResults.submitting;
        }
        if (flag2 == null) {
          flag2 = false;
        }
        return obj2;
      });
    }
    if (1 === c3) {
      if (channelId === 1) {
        let c4 = 3;
        throw value;
      } else if (channelId === 2) {
        c4 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else if ("submit" === c2) {
        const obj5 = { channelId, messageId };
        c3 = 2;
        c4 = 1;
        const obj6 = { value: closure_130_24(obj5), done: false };
        return obj6;
      } else if ("remove" === c2) {
        const obj7 = { channelId, messageId };
        c3 = 3;
        c4 = 1;
        const obj8 = { value: handleClearPollVote(obj7), done: false };
        return obj8;
      } else if ("cancel" === c2) {
        const obj9 = { channelId, messageId, isEditing: false };
        closure_130_20(obj9);
      } else if ("showVotes" === c2) {
        const obj10 = { channelId, messageId };
        handleShowVotes(obj10);
      } else if ("showVoterDetails" === c2) {
        const obj11 = { channelId, messageId };
        closure_130_19(obj11);
      } else {
        const _HermesInternal = HermesInternal;
        let flag = false;
        const tmp8 = closure_130_1(closure_130_3[11]);
        tmp8(false, "Unknown poll action type: " + c2);
      }
    } else if (2 === c3) {
      if (channelId === 1) {
        c4 = 3;
        throw value;
      } else if (channelId === 2) {
        c4 = 3;
        const obj12 = { value, done: true };
        return obj12;
      }
    } else if (channelId === 1) {
      c4 = 3;
      throw value;
    } else if (channelId === 2) {
      c4 = 3;
      obj = { value, done: true };
      return obj;
    }
    await "IconComponent";
    ({ channelId: c0, messageId: c1, type: c2 } = closure_0);
    return "Reflect";
  });
  return obj(...arguments);
};
obj = function _createPoll() {
  obj = _asyncToGenerator(async (arg0) => {
    let user = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (async function(arg0) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c7;
      let guildId;
      let obj10;
      let obj6;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else {
        const str2 = "poll";
        if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            let obj5;
            c6 = 2;
            if (0 === layout_type) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                let obj3 = { value, done: true };
                return obj3;
              } else {
                closure_2 = tmp;
                closure_1 = tmp4;
                user = undefined;
                c1 = undefined;
                allow_multiselect = undefined;
                duration = undefined;
                scheduledTimestamp = undefined;
                ({ channel: c0, question: c1, answers: c2, allowMultiSelect: c3, duration: c4, layout: c5, onClose: c6, scheduledTimestamp: c7 } = guildId);
                attachmentsToUpload = undefined;
                answers = undefined;
                obj5 = undefined;
                layout_type = 1;
                c6 = 1;
                return { value: "Reflect", done: true };
              }
            } else if (1 === layout_type) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                let obj4 = { value, done: true };
                return obj4;
              } else {
                attachmentsToUpload = closure_130_12.getUploads(user.id, closure_130_9.Poll);
                answers = tmp.map((text) => {
                  guildId = text;
                  let findIndexResult;
                  if (attachmentsToUpload != null) {
                    findIndexResult = attachmentsToUpload.findIndex((id) => id.id === closure_0.localCreationAnswerId);
                  }
                  let tmp2;
                  if (-1 !== findIndexResult) {
                    const _HermesInternal = HermesInternal;
                    const items = ["" + findIndexResult];
                    tmp2 = items;
                  }
                  const obj2 = { attachment_ids: tmp2 };
                  if (layout_type === guildId(allow_multiselect[25]).PollLayoutTypes.DEFAULT) {
                    let trimmed;
                    if (text.text != null) {
                      trimmed = str2.trim();
                    }
                    obj2.text = trimmed;
                  }
                  const image = text.image;
                  let emoji;
                  if (image != null) {
                    emoji = image.emoji;
                  }
                  if (null != emoji) {
                    if (null != emoji.id) {
                      const obj3 = { id: emoji.id, name: "" };
                      obj2.emoji = obj3;
                    } else if (null != emoji.optionallyDiverseSequence) {
                      const obj4 = { name: emoji.optionallyDiverseSequence };
                      obj2.emoji = obj4;
                    }
                  }
                  return { poll_media: obj2 };
                });
                obj5 = { question: obj6, answers, allow_multiselect, duration, layout_type };
                duration = 1;
                layout_type = 3;
                c6 = 1;
                obj6 = { text: c1.trim() };
                const obj7 = {
                  attachmentsToUpload,
                  scheduledTimestamp,
                  onAttachmentUploadError(file, code, reason) {
                              obj = guildId(allow_multiselect[27]);
                              const obj2 = { file, guildId: guildId.getGuildId(), analyticsLocations: [], code, reason };
                              const result = obj.handleUploadMessageAttachmentsErrors(obj2);
                            }
                };
                const obj8 = { value: obj10.sendPollMessage(user.id, obj5, obj7), done: false };
                obj10 = closure_130_1(closure_130_3[26]);
                return obj8;
              }
            } else {
              if (2 === layout_type) {
                let aPIError;
                duration = 0;
                let closure_11 = closure_3;
                if (closure_11 instanceof closure_130_0(closure_130_3[28]).APIError) {
                  aPIError = closure_11;
                } else {
                  const self = this;
                  const self2 = this;
                  aPIError = new closure_130_0(closure_130_3[28]).APIError(closure_11);
                }
                if ("poll" === aPIError.getAnyErrorMessage()) {
                  if (null != closure_11.text) {
                    const obj9 = { body: JSON.parse(closure_11.text) };
                    const merged = Object.assign(closure_11);
                    const _JSON = JSON;
                    throw obj9;
                  }
                }
                if (null == scheduledTimestamp) {
                  throw closure_11;
                }
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                duration = 0;
                c6 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                if (c6 != null) {
                  tmp6(scheduledTimestamp);
                }
                duration = 0;
              }
              c6 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp33) {
            closure_3 = tmp33;
            if (0 === duration) {
              c6 = 3;
              throw tmp33;
            } else {
              layout_type = 2;
            }
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _endPollEarly() {
  obj = _asyncToGenerator(async (channelId) => {
    let c0;
    let c1;
    let closure_2;
    let intl;
    let intl2;
    let obj2;
    const obj6 = { title: intl.string(closure_130_0(closure_130_3[13]).t["+rfkTK"]), body: intl2.string(closure_130_0(closure_130_3[13]).t.H2I1gL) };
    const _confirm = closure_130_1(closure_130_3[12]).confirm;
    const tmp19 = closure_130_1(closure_130_3[12]);
    intl = closure_130_0(closure_130_3[13]).intl;
    intl2 = closure_130_0(closure_130_3[13]).intl;
    await _confirm(obj6);
    if (2 === c3) {
      if (channelId === 1) {
        let c4 = 3;
        throw value;
      } else if (channelId === 2) {
        c4 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else if (value) {
        const obj9 = { channelId, messageId };
        c3 = 3;
        c4 = 1;
        const obj10 = { value: obj2.endPollEarly(obj9), done: false };
        obj2 = closure_130_2(closure_130_3[23]);
        return obj10;
      }
    } else if (channelId === 1) {
      c4 = 3;
      throw value;
    } else if (channelId === 2) {
      c4 = 3;
      obj = { value, done: true };
      return obj;
    }
    await "IconComponent";
    ({ channelId: c0, messageId: c1 } = closure_0);
    return "Reflect";
  });
  return obj(...arguments);
};
const DraftType = DraftStore.DraftType;
({ getPollState: map1, updatePollState: closure_14 } = PollsInteractionStore);
({ AnalyticEvents: closure_15, JoinGuildSources: closure_16 } = Constants);
obj = {
  handlePollAnswerTapped(answerId) {
    let channelId;
    let messageId;
    answerId = answerId.answerId;
    let merged = Object.assign(answerId, Object.assign({ answerId: 0 }));
    let channelId2;
    let messageId2;
    let message;
    let allow_multiselect;
    ({ channelId, messageId } = merged);
    const message1 = MessageStore.getMessage(channelId, messageId);
    if (null != message1) {
      let obj2 = { message: message1, channelId, messageId };
      obj = obj2;
    } else {
      const message2 = ReferencedMessageStore.getMessage(channelId, messageId);
      if (null != message2.message) {
        obj = { channelId, messageId, message: message2.message };
      } else {
        channelId2(message[11])(null != message1, "Tapped on a non-existent poll message");
        const _Error = Error;
        let self = this;
        let self2 = this;
        const error = new Error();
        throw error;
      }
    }
    channelId2 = obj.channelId;
    messageId2 = obj.messageId;
    message = obj.message;
    let obj3 = answerId(message[17]);
    let basicPollChatData = obj3.computeBasicPollChatData(message);
    if (basicPollChatData == null) {
      basicPollChatData = {};
    }
    if (true !== basicPollChatData.tapShouldOpenVotersModal) {
      let poll = message.poll;
      allow_multiselect = undefined;
      if (poll != null) {
        allow_multiselect = poll.allow_multiselect;
      }
      closure_14(channelId2, messageId2, function(arg0) {
        let analyticsSelectedAnswerIds;
        let analyticsSelectedAnswerIds2;
        let selectedEmojiAnswersCount;
        let selectedEmojiAnswersCount2;
        let selectedTextAnswersCount;
        let selectedTextAnswersCount2;
        let set1;
        if (null == arg0) {
          const _Set = Set;
          const items = [answerId];
          const self = this;
          const self2 = this;
          set = new Set(items);
          const poll2 = message.poll;
          let answers;
          if (poll2 != null) {
            answers = poll2.answers;
          }
          ({ analyticsSelectedAnswerIds: analyticsSelectedAnswerIds2, selectedTextAnswersCount: selectedTextAnswersCount2, selectedEmojiAnswersCount: selectedEmojiAnswersCount2 } = getPollVoteEventProperties(answers, set));
          getPollVoteEventProperties(answers, set);
          const obj2 = { channel_id: channelId2, message_id: messageId2, selected_answer_ids: analyticsSelectedAnswerIds2, selected_text_answers_count: selectedTextAnswersCount2, selected_emoji_answers_count: selectedEmojiAnswersCount2 };
          const obj3 = AppAnalyticsUtilsDefault;
          obj3.trackWithMetadata(constants.POLL_VOTE_SELECTED, obj2);
          return { channelId: channelId2, selectedAnswerIds: set, submitting: false, editing: false, showResults: false };
        } else {
          const obj5 = { selectedAnswerIds: set1 };
          const merged = Object.assign(arg0);
          const _Set2 = Set;
          const self3 = this;
          const self4 = this;
          set1 = new Set(obj5.selectedAnswerIds);
          if (set1.has(answerId)) {
            set1.delete(answerId);
          } else {
            if (!allow_multiselect) {
              for (const item10007 of tmp37) {
                let deleteResult1 = set1.delete(item10007);
                continue;
              }
            }
            set1.add(answerId);
          }
          const poll = message.poll;
          let answers1;
          if (poll != null) {
            answers1 = poll.answers;
          }
          ({ analyticsSelectedAnswerIds, selectedTextAnswersCount, selectedEmojiAnswersCount } = getPollVoteEventProperties(answers1, set1));
          getPollVoteEventProperties(answers1, set1);
          const obj6 = { channel_id: channelId2, message_id: messageId2, selected_answer_ids: analyticsSelectedAnswerIds, selected_text_answers_count: selectedTextAnswersCount, selected_emoji_answers_count: selectedEmojiAnswersCount };
          obj = AppAnalyticsUtilsDefault;
          obj.trackWithMetadata(constants.POLL_VOTE_SELECTED, obj6);
          return obj5;
        }
      });
    } else {
      const obj4 = { channelId: channelId2, messageId: messageId2, answerId };
      handleShowVotesForAnswer(obj4);
    }
  },
  handlePollSubmitVote,
  handleUpdateVoteEditingState,
  handlePollActionTapped() {
    return obj(...arguments);
  },
  createPoll() {
    return obj(...arguments);
  },
  endPollEarly() {
    return obj(...arguments);
  }
};
let result = size.fileFinishedImporting("modules/polls/PollsActionCreators.tsx");

export default obj;
export { handleShowVotesForAnswer };