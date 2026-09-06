// === Module 11714: PollsActionCreators ===

// Module 11714 (PollsActionCreators)
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5520 */;
import PollInteractionUtilsAll from "PollInteractionUtils" /* 11715 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import LurkingStore from "LurkingStore" /* 4200 */;
import ReferencedMessageStore from "ReferencedMessageStore" /* 7595 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5413 */;
import MessageStore from "MessageStore" /* 4781 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 4900 */;

const require = fn;
function getPollVoteEventProperties(arg0, arg1) {
  closure_0 = arg0;
  const items = [...arg1];
  importDefault = 0;
  importAll = 0;
  for (const item10012 of items) {
    let tmp = (function _loop(item10012) {
      closure_0 = item10012;
      let poll_media;
      if (closure_0 != null) {
        const found = closure_0.find((answer_id) => answer_id.answer_id === parseInt(closure_0));
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
    })(item10012);
    continue;
  }
  return { analyticsSelectedAnswerIds: items, selectedTextAnswersCount: importDefault, selectedEmojiAnswersCount: importAll };
}
function showLurkingAlert(guildId) {
  guildId = guildId.guildId;
  ({ title, body } = guildId);
  const obj = { title, body, confirmText: null, cancelText: null, onConfirm: null };
  const intl = guildId(1114).intl;
  obj.confirmText = intl.string(guildId(1114).t["9VLmlZ"]);
  const intl2 = guildId(1114).intl;
  obj.cancelText = intl2.string(guildId(1114).t["2m+Sqk"]);
  obj.onConfirm = function onConfirm() {
    const obj = { source: constants2.POLL_ALERT };
    obj.joinGuild(guild_id, obj);
  };
  obj.show(obj);
}
function handleShowVotesForAnswer(messageId) {
  ({ channelId, answerId } = messageId);
  const channel = ChannelStore.getChannel(channelId);
  if (null != channel) {
    if (LurkingStore.isLurking(channel.guild_id)) {
      const intl = guild_id(1114).intl;
      const intl2 = guild_id(1114).intl;
      guild_id = channel.guild_id;
      const stringResult = intl.string(guild_id(1114).t["7LpysO"]);
      const stringResult1 = intl2.string(guild_id(1114).t["5sHHoy"]);
      let obj = { title: stringResult, body: stringResult1, confirmText: null, cancelText: null, onConfirm: null };
      const intl3 = guild_id(1114).intl;
      obj.confirmText = intl3.string(guild_id(1114).t["9VLmlZ"]);
      const intl4 = guild_id(1114).intl;
      obj.cancelText = intl4.string(guild_id(1114).t["2m+Sqk"]);
      obj.onConfirm = function onConfirm() {
        const obj = { source: constants2.POLL_ALERT };
        obj.joinGuild(guild_id, obj);
      };
      AlertActionCreatorsDefault.show(obj);
    } else {
      const message = MessageStore.getMessage(channelId, messageId.messageId);
      if (null != message) {
        if (null != message.poll) {
          if (0 !== message.poll.answers.length) {
            if (answerId == null) {
              const _String = String;
              answerId = String(message.poll.answers[0].answer_id);
            }
            obj = { message, initialAnswerId: answerId };
            obj.showVotesForAnswer(obj);
          }
        }
      }
    }
  }
}
function handleUpdateVoteEditingState(channelId) {
  channelId = channelId.channelId;
  const isEditing = channelId.isEditing;
  closure_1_14(channelId, channelId.messageId, (showResults) => {
    const obj = { channelId, selectedAnswerIds: new Set(), submitting: false, editing: isEditing, showResults: null };
    let flag;
    if (showResults != null) {
      flag = showResults.showResults;
    }
    if (flag == null) {
      flag = false;
    }
    obj.showResults = flag;
    return obj;
  });
}
function getCurrentAnswerIds(channelId) {
  const message = MessageStore.getMessage(channelId.channelId, channelId.messageId);
  if (null == message) {
    let items = [];
  } else {
    const reactions = message.reactions;
    items = reactions.flatMap((me_vote) => {
      if (true === me_vote.me_vote) {
        let name = me_vote.emoji.name;
      } else {
        name = [];
      }
      return name;
    });
  }
  return items;
}
function optimisticallySetAnswers() {
  const self = this;
  const apply = closure_23.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_23 = async function _optimisticallySetAnswers(arg0, value) {
  if (1 === tmp5) {
    if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 3;
      return { value, done: true };
    } else {
      closure_130_3 = closure_131_21({ channelId: closure_130_0, messageId: closure_130_1 });
      closure_130_4 = closure_131_1(closure_131_3[18]).difference(closure_130_3, closure_130_2);
      closure_131_1(closure_131_3[18]);
      closure_130_5 = closure_131_1(closure_131_3[18]).difference(closure_130_2, closure_130_3);
      let id = closure_131_7.getId();
      let messageId = 0;
      const items = [];
      messageId = HermesBuiltin.arraySpread(closure_130_4.map((id) => ({ type: "MESSAGE_REACTION_REMOVE", id })), messageId);
      messageId = HermesBuiltin.arraySpread(closure_130_5.map((id) => ({ type: "MESSAGE_REACTION_ADD", id })), messageId);
      closure_130_7 = items;
      const Emitter = closure_131_1(closure_131_3[19]).Emitter;
      closure_130_8 = Emitter.batched(() => {
        let dispatchResult;
        for (const item10006 of closure_1_7) {
          let id = item10006.id;
          let obj = messageId(573);
          obj = { type: item10006.type, channelId: null, messageId: null, emoji: null, userId: null, optimistic: true, reactionType: null };
          obj.channelId = channelId;
          obj.messageId = messageId;
          obj = { id, name: id };
          obj.emoji = obj;
          obj.userId = userId;
          obj.reactionType = channelId(7763).ReactionTypes.VOTE;
          dispatchResult = obj.dispatch(obj);
          continue;
        }
        return dispatchResult;
      });
      if (null != closure_130_8) {
        c4 = 2;
        c5 = 1;
        return { value: closure_130_8, done: false };
      }
      closure_131_1(closure_131_3[18]);
    }
  } else if (arg0 === 1) {
    c5 = 3;
    throw value;
  } else if (arg0 === 2) {
    c5 = 3;
    return { value, done: true };
  }
  await "HermesInternal";
  closure_2 = tmp2;
  ({ channelId: closure_130_0, messageId: closure_130_1, answerIds: closure_130_2 } = channelId);
  return "PX_16";
};
function handlePollSubmitVote() {
  const self = this;
  const apply = closure_25.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_25 = async function _handlePollSubmitVote(arg0, value) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c9 = 2;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = tmp3;
          closure_4 = tmp7;
          closure_132_0 = undefined;
          closure_132_1 = undefined;
          ({ channelId: closure_132_0, messageId: closure_132_1 } = closure_0);
          let channel;
          closure_132_3 = undefined;
          closure_132_4 = undefined;
          closure_132_5 = undefined;
          c8 = 1;
          c9 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            channel = closure_133_8.getChannel(closure_132_0);
            if (null != channel) {
              if (closure_133_5.isLurking(channel.guild_id)) {
                let obj2 = { guildId: channel.guild_id, title: null, body: null };
                const intl7 = closure_133_0(closure_133_3[13]).intl;
                obj2.title = intl7.string(closure_133_0(closure_133_3[13]).t.Qic1FD);
                const intl8 = closure_133_0(closure_133_3[13]).intl;
                obj2.body = intl8.string(closure_133_0(closure_133_3[13]).t["5sHHoy"]);
                closure_133_18(obj2);
              } else if (closure_133_10.canChatInGuild(channel.guild_id)) {
                closure_132_3 = closure_133_13(closure_132_0, closure_132_1);
                closure_133_1(closure_133_3[11])(null != closure_132_3, "Must not be able to vote without existing state!");
                const obj3 = { channelId: closure_132_0, messageId: closure_132_1 };
                closure_132_4 = closure_133_21(obj3);
                c7 = 1;
                closure_3 = 0;
                const selectedAnswerIds = closure_132_3.selectedAnswerIds;
                const items = [];
                closure_3 = HermesBuiltin.arraySpread(selectedAnswerIds.values(), closure_3);
                closure_132_5 = items;
                closure_133_14(closure_132_0, closure_132_1, (arg0) => {
                  body(closure_1_3[11])(null != arg0, "Must not be able to vote without existing state!");
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj.submitting = true;
                  obj.editing = false;
                  return obj;
                });
                const obj4 = { channelId: closure_132_0, messageId: closure_132_1, answerIds: closure_132_5 };
                c8 = 3;
                c9 = 1;
                const obj5 = { value: closure_133_22(obj4), done: false };
                return obj5;
              } else {
                let obj10 = closure_133_1(closure_133_3[12]);
                let obj6 = { title: null, body: null };
                const intl5 = closure_133_0(closure_133_3[13]).intl;
                obj6.title = intl5.string(closure_133_0(closure_133_3[13]).t.p245wu);
                const intl6 = closure_133_0(closure_133_3[13]).intl;
                obj6.body = intl6.string(closure_133_0(closure_133_3[13]).t["U/uodt"]);
                obj10.show(obj6);
              }
            }
            c9 = 3;
          }
        } else if (2 === tmp7) {
          c7 = 0;
          closure_132_6 = closure_6;
          obj6 = closure_133_1(closure_133_3[12]);
          const obj7 = { title: null, body: null };
          const intl3 = closure_133_0(closure_133_3[13]).intl;
          obj7.title = intl3.string(closure_133_0(closure_133_3[13]).t.iufib1);
          const getAnyErrorMessage = closure_132_6.getAnyErrorMessage;
          let anyErrorMessage;
          if (getAnyErrorMessage != null) {
            anyErrorMessage = getAnyErrorMessage();
          }
          let message = anyErrorMessage;
          if (anyErrorMessage == null) {
            message = closure_132_6.message;
          }
          let body = message;
          if (message == null) {
            const intl4 = closure_133_0(closure_133_3[13]).intl;
            body = intl4.string(closure_133_0(closure_133_3[13]).t.eAn6z2);
          }
          obj7.body = body;
          obj6.show(obj7);
          const obj8 = { channelId: closure_132_0, messageId: closure_132_1, answerIds: closure_132_4 };
          c8 = 5;
          c9 = 1;
          const obj9 = { value: closure_133_22(obj8), done: false };
          return obj9;
        } else if (3 === tmp7) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            obj10 = { value, done: true };
            return obj10;
          } else {
            obj2 = closure_133_2(closure_133_3[22]);
            const obj11 = { channelId: closure_132_0, messageId: closure_132_1, answerIds: closure_132_5 };
            c8 = 4;
            c9 = 1;
            const obj12 = { value: obj2.submitPollVote(obj11), done: false };
            return obj12;
          }
        } else if (4 === tmp7) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            closure_133_14(closure_132_0, closure_132_1, () => {

            });
            const AccessibilityAnnouncer = closure_133_0(closure_133_3[23]).AccessibilityAnnouncer;
            if (0 === closure_132_5.length) {
              const intl2 = closure_133_0(closure_133_3[13]).intl;
              let stringResult = intl2.string(closure_133_0(closure_133_3[13]).t["xcvy+3"]);
            } else {
              const intl = closure_133_0(closure_133_3[13]).intl;
              stringResult = intl.string(closure_133_0(closure_133_3[13]).t.o20GSo);
            }
            AccessibilityAnnouncer.announce(stringResult);
            c7 = 0;
          }
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_133_14(closure_132_0, closure_132_1, (arg0) => {
            if (null != arg0) {
              const obj = {};
              const merged = Object.assign(arg0);
              obj.submitting = false;
              obj.editing = false;
              return obj;
            }
          });
        }
        c9 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp111) {
      closure_6 = tmp111;
      if (tmp4 === c7) {
        c9 = tmp2;
        throw tmp111;
      } else {
        c8 = tmp;
      }
    }
  }
};
let closure_26 = async function _handleClearPollVote(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp4;
          c1 = 0;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          ({ channelId: closure_129_0, messageId: closure_129_1 } = channelId);
          let channel;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp4) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          channel = closure_130_8.getChannel(closure_129_0);
          if (null != channel) {
            if (closure_130_5.isLurking(channel.guild_id)) {
              const obj2 = { guildId: channel.guild_id, title: null, body: null };
              const intl = closure_130_0(closure_130_3[13]).intl;
              obj2.title = intl.string(closure_130_0(closure_130_3[13]).t.B9QnBp);
              const intl2 = closure_130_0(closure_130_3[13]).intl;
              obj2.body = intl2.string(closure_130_0(closure_130_3[13]).t.BVZCTn);
              closure_130_18(obj2);
            } else {
              closure_130_14(closure_129_0, closure_129_1, (showResults) => {
                const obj = { channelId, selectedAnswerIds: new Set(), submitting: false, editing: false, showResults: null };
                let flag;
                if (showResults != null) {
                  flag = showResults.showResults;
                }
                if (flag == null) {
                  flag = false;
                }
                obj.showResults = flag;
                return obj;
              });
              const obj3 = { channelId: closure_129_0, messageId: closure_129_1 };
              c3 = 2;
              c4 = 1;
              const obj4 = { value: closure_130_24(obj3), done: false };
              return obj4;
            }
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        c4 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp18) {
      c4 = tmp;
      throw tmp18;
    }
  }
};
let closure_27 = async function _handlePollActionTapped(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          ({ channelId: closure_129_0, messageId: closure_129_1, type: closure_129_2 } = closure_0);
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else if ("submit" === closure_129_2) {
            const obj2 = { channelId: closure_129_0, messageId: closure_129_1 };
            c3 = 2;
            c4 = 1;
            const obj3 = { value: closure_130_24(obj2), done: false };
            return obj3;
          } else if ("remove" === tmp39) {
            const obj4 = { channelId: closure_129_0, messageId: closure_129_1 };
            c3 = 3;
            c4 = 1;
            const obj5 = {
              value: (function handleClearPollVote() {
                          const self = this;
                          const apply = closure_1_26.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })(obj4),
              done: false
            };
            return obj5;
          } else if ("cancel" === tmp39) {
            const obj6 = { channelId: closure_129_0, messageId: closure_129_1, isEditing: false };
            closure_130_20(obj6);
          } else {
            if ("showVotes" === tmp39) {
              const obj7 = { channelId: closure_129_0, messageId: closure_129_1 };
              (function handleShowVotes(channelId) {
                channelId = channelId.channelId;
                const messageId = channelId.messageId;
                closure_14(channelId, messageId, (showResults) => {
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
                  let obj = closure_2_1(closure_2_3[17]);
                  obj.trackWithMetadata(constants.POLL_SHOW_RESULTS_CLICKED, { channel_id: channelId, message_id: messageId, show_results: null == showResults || !showResults.showResults, votes_count: num });
                  obj = { channelId: tmp2, selectedAnswerIds: new Set(), submitting: null, editing: null, showResults: null };
                  let flag;
                  if (showResults != null) {
                    flag = showResults.submitting;
                  }
                  if (flag == null) {
                    flag = false;
                  }
                  obj.submitting = flag;
                  let flag2;
                  if (showResults != null) {
                    flag2 = showResults.submitting;
                  }
                  if (flag2 == null) {
                    flag2 = false;
                  }
                  obj.editing = flag2;
                  obj.showResults = null == showResults || !showResults.showResults;
                  return obj;
                });
              })(obj7);
            } else if ("showVoterDetails" !== tmp39) {
              const _HermesInternal = HermesInternal;
              closure_130_1(closure_130_3[11])(false, "Unknown poll action type: " + closure_129_2);
              const tmp9 = closure_130_1(closure_130_3[11]);
            }
            const obj8 = { channelId: closure_129_0, messageId: closure_129_1 };
            closure_130_19(obj8);
          }
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj9 = { value, done: true };
            return obj9;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        }
        c4 = 3;
      }
    } catch (tmp33) {
      c4 = tmp;
      throw tmp33;
    }
  }
};
let closure_28 = async function _createPoll(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          closure_129_7 = undefined;
          ({ channel: closure_129_0, question: closure_129_1, answers: closure_129_2, allowMultiSelect: closure_129_3, duration: closure_129_4, layout: closure_129_5, onClose: closure_129_6, scheduledTimestamp: closure_129_7 } = guildId);
          let uploads;
          closure_129_9 = undefined;
          closure_129_10 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          let obj1 = { value, done: true };
          return obj1;
        } else {
          uploads = closure_130_12.getUploads(closure_129_0.id, closure_130_9.Poll);
          closure_129_9 = closure_129_2.map((text) => {
            guildId = text;
            let poll_media = closure_1_8;
            let findIndexResult;
            if (closure_1_8 != null) {
              findIndexResult = poll_media.findIndex((id) => id.id === text.localCreationAnswerId);
            }
            let tmp2;
            if (-1 !== findIndexResult) {
              const _HermesInternal = HermesInternal;
              const items = ["" + findIndexResult];
              tmp2 = items;
            }
            poll_media = { attachment_ids: tmp2 };
            if (closure_1_5 === guildId(11720).PollLayoutTypes.DEFAULT) {
              let trimmed;
              if (text.text != null) {
                trimmed = str2.trim();
              }
              poll_media.text = trimmed;
            }
            const image = text.image;
            let emoji;
            if (image != null) {
              emoji = image.emoji;
            }
            if (null != emoji) {
              if (null != emoji.id) {
                const obj = { id: emoji.id, name: "" };
                poll_media.emoji = obj;
              } else if (null != emoji.optionallyDiverseSequence) {
                const obj1 = { name: emoji.optionallyDiverseSequence };
                poll_media.emoji = obj1;
              }
            }
            return { poll_media };
          });
          const obj2 = { question: null, answers: null, allow_multiselect: null, duration: null, layout_type: null };
          const obj3 = { text: closure_129_1.trim() };
          obj2.question = obj3;
          obj2.answers = closure_129_9;
          obj2.allow_multiselect = closure_129_3;
          obj2.duration = closure_129_4;
          obj2.layout_type = closure_129_5;
          closure_129_10 = obj2;
          c4 = 1;
          const obj4 = {
            attachmentsToUpload: uploads,
            scheduledTimestamp: closure_129_7,
            onAttachmentUploadError(file, code, reason) {
                      guildId(9309);
                      const obj = { file, guildId: guildId.getGuildId(), analyticsLocations: [], code, reason };
                      const result = obj.handleUploadMessageAttachmentsErrors(obj);
                    }
          };
          c5 = 3;
          c6 = 1;
          const obj5 = { value: closure_130_1(closure_130_3[25]).sendPollMessage(closure_129_0.id, closure_129_10, obj4), done: false };
          return obj5;
        }
      } else {
        if (2 === tmp7) {
          c4 = 0;
          closure_129_11 = dependencyMap;
          if (closure_129_11 instanceof closure_130_0(closure_130_3[27]).APIError) {
            let aPIError = closure_129_11;
          } else {
            aPIError = new closure_130_0(closure_130_3[27]).APIError(closure_129_11);
          }
          if ("poll" === aPIError.getAnyErrorMessage()) {
            if (null != closure_129_11.text) {
              const obj6 = {};
              const merged = Object.assign(closure_129_11);
              const _JSON = JSON;
              obj6.body = JSON.parse(closure_129_11.text);
              throw obj6;
            }
          }
          if (null == closure_129_7) {
            throw closure_129_11;
          } else {
            c6 = 3;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          if (closure_129_6 != null) {
            tmp9(closure_129_7);
          }
          c4 = 0;
        }
        c4 = 0;
        c6 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp38) {
      dependencyMap = tmp38;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp38;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_29 = async function _endPollEarly(arg0, value) {
  const obj2 = { title: null, body: null };
  const intl = closure_130_0(closure_130_3[13]).intl;
  obj2.title = intl.string(closure_130_0(closure_130_3[13]).t["+rfkTK"]);
  const intl2 = closure_130_0(closure_130_3[13]).intl;
  obj2.body = intl2.string(closure_130_0(closure_130_3[13]).t.H2I1gL);
  await closure_130_1(closure_130_3[12]).confirm(obj2);
  if (2 === tmp5) {
    if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else if (value) {
      c3 = 3;
      c4 = 1;
      closure_130_2(closure_130_3[22]);
      return { value: closure_130_2(closure_130_3[22]).endPollEarly({ channelId: closure_129_0, messageId: closure_129_1 }), done: false };
    }
  } else if (arg0 === 1) {
    c4 = 3;
    throw value;
  } else if (arg0 === 2) {
    c4 = 3;
    return { value, done: true };
  }
  await "HermesInternal";
  closure_1 = tmp2;
  ({ channelId: closure_129_0, messageId: closure_129_1 } = closure_0);
  return "PX_16";
};
const DraftType = fn(4901).DraftType;
const PollsInteractionStore = fn(11427);
({ getPollState: map1, updatePollState: closure_14 } = PollsInteractionStore);
const Constants = fn(1074);
({ AnalyticEvents: closure_15, JoinGuildSources: closure_16 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/polls/PollsActionCreators.tsx");

export default {
  handlePollAnswerTapped(answerId) {
    answerId = answerId.answerId;
    let merged = Object.assign(answerId, Object.assign({ answerId: 0 }));
    let channelId2;
    let messageId2;
    let allow_multiselect;
    ({ channelId, messageId } = merged);
    let message = MessageStore.getMessage(channelId, messageId);
    if (null != message) {
      let obj = { message, channelId, messageId };
    } else {
      const message1 = ReferencedMessageStore.getMessage(channelId, messageId);
      if (null != message1.message) {
        obj = { channelId, messageId, message: message1.message };
      } else {
        channelId2(message[11])(null != message, "Tapped on a non-existent poll message");
        const _Error = Error;
        const error = new Error();
        throw error;
      }
    }
    channelId2 = obj.channelId;
    messageId2 = obj.messageId;
    message = obj.message;
    let basicPollChatData = answerId(message[16]).computeBasicPollChatData(message);
    if (basicPollChatData == null) {
      basicPollChatData = {};
    }
    if (true !== basicPollChatData.tapShouldOpenVotersModal) {
      let poll = message.poll;
      allow_multiselect = undefined;
      if (poll != null) {
        allow_multiselect = poll.allow_multiselect;
      }
      closure_14(channelId2, messageId2, (arg0) => {
        if (null == arg0) {
          const _Set = Set;
          const items = [answerId];
          const set = new Set(items);
          const poll2 = message.poll;
          let answers;
          if (poll2 != null) {
            answers = poll2.answers;
          }
          ({ analyticsSelectedAnswerIds: analyticsSelectedAnswerIds2, selectedTextAnswersCount: selectedTextAnswersCount2, selectedEmojiAnswersCount: selectedEmojiAnswersCount2 } = getPollVoteEventProperties(answers, set));
          let obj2 = AppAnalyticsUtilsDefault;
          let obj = { channel_id: channelId2, message_id: messageId2, selected_answer_ids: analyticsSelectedAnswerIds2, selected_text_answers_count: selectedTextAnswersCount2, selected_emoji_answers_count: selectedEmojiAnswersCount2 };
          obj2.trackWithMetadata(constants.POLL_VOTE_SELECTED, obj);
          obj = { channelId: channelId2, selectedAnswerIds: set, submitting: false, editing: false, showResults: false };
          return obj;
        } else {
          const obj1 = {};
          const merged = Object.assign(arg0);
          const _Set2 = Set;
          const set1 = new Set(obj1.selectedAnswerIds);
          obj1.selectedAnswerIds = set1;
          if (set1.has(answerId)) {
            set1.delete(answerId);
          } else {
            if (!allow_multiselect) {
              for (const item10007 of tmp41) {
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
          obj = AppAnalyticsUtilsDefault;
          obj2 = { channel_id: channelId2, message_id: messageId2, selected_answer_ids: analyticsSelectedAnswerIds, selected_text_answers_count: selectedTextAnswersCount, selected_emoji_answers_count: selectedEmojiAnswersCount };
          obj.trackWithMetadata(constants.POLL_VOTE_SELECTED, obj2);
          return obj1;
        }
      });
    } else {
      obj = { channelId: channelId2, messageId: messageId2, answerId };
      handleShowVotesForAnswer(obj);
    }
  },
  handlePollSubmitVote,
  handleUpdateVoteEditingState,
  handlePollActionTapped() {
    const self = this;
    const apply = closure_27.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  createPoll() {
    const self = this;
    const apply = closure_28.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  endPollEarly() {
    const self = this;
    const apply = closure_29.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
};
export { handleShowVotesForAnswer };