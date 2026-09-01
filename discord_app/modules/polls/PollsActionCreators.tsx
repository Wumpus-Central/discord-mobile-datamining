// discord_app/modules/polls/PollsActionCreators.tsx
import setDefault from "../../actions/AlertActionCreators.tsx";
import showVotesForAnswerAll from "PollInteractionUtils.native.tsx";
import closure_4 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../lurker_mode/LurkingStore.tsx";
import closure_6 from "../replies/ReferencedMessageStore.tsx";
import closure_7 from "../../stores/AuthenticationStore.tsx";
import closure_8 from "../../stores/ChannelStore.tsx";
import { DraftType } from "../../stores/DraftStore.tsx";
import closure_10 from "../../stores/GuildVerificationStore.tsx";
import closure_11 from "../../stores/MessageStore.tsx";
import closure_12 from "../../stores/UploadAttachmentStore.tsx";
import useMessagePollInteractions from "PollsInteractionStore.tsx";
import ME from "../../Constants.tsx";

const require = arg1;
function getPollVoteEventProperties(arg0, arg1) {
  closure_0 = arg0;
  const items = [...arg1];
  c1 = 0;
  c2 = 0;
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
  return { analyticsSelectedAnswerIds: items, selectedTextAnswersCount: c1, selectedEmojiAnswersCount: c2 };
}
function showLurkingAlert(guildId) {
  guildId = guildId.guildId;
  ({ title, body } = guildId);
  let obj = setDefault;
  obj = { title, body, confirmText: null, cancelText: null, onConfirm: null };
  const intl = guildId(1236).intl;
  obj[2] = intl.string(guildId(1236).t["9VLmlZ"]);
  const intl2 = guildId(1236).intl;
  obj[3] = intl2.string(guildId(1236).t["2m+Sqk"]);
  obj[4] = function onConfirm() {
    let obj = closure_1_1(closure_1_3[14]);
    obj = { source: closure_1_16.POLL_ALERT };
    obj.joinGuild(guild_id, obj);
  };
  obj.show(obj);
}
function handleShowVotesForAnswer(messageId) {
  ({ channelId, answerId } = messageId);
  channel = channel.getChannel(channelId);
  if (null != channel) {
    if (lurking.isLurking(channel.guild_id)) {
      const intl = guild_id(1236).intl;
      const intl2 = guild_id(1236).intl;
      guild_id = channel.guild_id;
      const stringResult = intl.string(guild_id(1236).t["7LpysO"]);
      const stringResult1 = intl2.string(guild_id(1236).t["5sHHoy"]);
      let obj = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null };
      obj[0] = stringResult;
      obj[1] = stringResult1;
      const intl3 = guild_id(1236).intl;
      obj[2] = intl3.string(guild_id(1236).t["9VLmlZ"]);
      const intl4 = guild_id(1236).intl;
      obj[3] = intl4.string(guild_id(1236).t["2m+Sqk"]);
      obj[4] = function onConfirm() {
        let obj = closure_1_1(closure_1_3[14]);
        obj = { source: closure_1_16.POLL_ALERT };
        obj.joinGuild(guild_id, obj);
      };
      setDefault.show(obj);
      const obj3 = setDefault;
    } else {
      const message = store.getMessage(channelId, messageId.messageId);
      if (null != message) {
        if (null != message.poll) {
          if (0 !== message.poll.answers.length) {
            if (answerId == null) {
              const _String = String;
              answerId = String(message.poll.answers[0].answer_id);
            }
            obj = showVotesForAnswerAll;
            obj = { message: null, initialAnswerId: null };
            obj[0] = message;
            obj[1] = answerId;
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
  callback2(channelId, channelId.messageId, (showResults) => {
    const obj = { channelId, selectedAnswerIds: new Set(), submitting: false, editing: isEditing, showResults: null };
    let flag;
    if (showResults != null) {
      flag = showResults.showResults;
    }
    if (flag == null) {
      flag = false;
    }
    obj[4] = flag;
    return obj;
  });
}
function getCurrentAnswerIds(channelId) {
  const message = store.getMessage(channelId.channelId, channelId.messageId);
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
  const apply = _optimisticallySetAnswers.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _optimisticallySetAnswers() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp5;
              c2 = tmp2;
              c0 = undefined;
              let callback;
              c2 = undefined;
              ({ channelId: c0, messageId: closure_1, answerIds: c2 } = c0);
              dependencyMap = undefined;
              c4 = undefined;
              c5 = undefined;
              let id;
              let items;
              closure_8 = undefined;
              c4 = 1;
              c5 = 1;
              return { value: "PX_16", done: null };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                const obj2 = { channelId: null, messageId: null };
                obj2[0] = c0;
                obj2[1] = callback;
                dependencyMap = callback2(obj2);
                c4 = callback(12).difference(dependencyMap, c2);
                const obj7 = callback(12);
                c5 = callback(12).difference(c2, dependencyMap);
                id = items.getId();
                callback = 0;
                items = [];
                callback = HermesBuiltin.arraySpread(c4.map((id) => ({ type: "MESSAGE_REACTION_REMOVE", id })), callback);
                callback = HermesBuiltin.arraySpread(c5.map((id) => ({ type: "MESSAGE_REACTION_ADD", id })), callback);
                const Emitter = callback(589).Emitter;
                closure_8 = Emitter.batched(() => {
                  let dispatchResult;
                  for (const item10006 of items) {
                    let id = item10006.id;
                    let tmp2 = callback;
                    let tmp3 = dependencyMap;
                    let obj = callback(709);
                    obj = { type: null, channelId: null, messageId: null, emoji: null, userId: null, optimistic: true, reactionType: null };
                    obj[0] = item10006.type;
                    let tmp4 = _undefined;
                    obj[1] = _undefined;
                    let tmp5 = callback;
                    obj[2] = callback;
                    obj = { id: null, name: null };
                    obj[0] = id;
                    obj[1] = id;
                    obj[3] = obj;
                    let tmp6 = closure_6;
                    obj[4] = closure_6;
                    let tmp7 = _undefined;
                    obj[6] = _undefined(7507).ReactionTypes.VOTE;
                    dispatchResult = obj.dispatch(obj);
                    continue;
                  }
                  return dispatchResult;
                });
                if (null != closure_8) {
                  c4 = 2;
                  c5 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = closure_8;
                  return obj3;
                }
                const obj8 = callback(12);
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp8) {
          c5 = tmp;
          throw tmp8;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_23 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function handlePollSubmitVote(result) {
  const self = this;
  const apply = _handlePollSubmitVote.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handlePollSubmitVote() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c8 = 0;
    c9 = 0;
    c7 = 0;
    const iter = (function*(arg0) {
      let items = tmp3;
      let throwTypeErrorResult = callback;
      ({ channelId: c0, messageId: closure_1 } = callback);
      yield "PX_16";
      if (1 === tmp7) {
        if (arg0 === 1) {
          c9 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c9 = 3;
          obj1 = { value: null, done: true };
          obj1[0] = arg1;
          return obj1;
        } else {
          throwTypeErrorResult = closure_4;
          throwTypeErrorResult = items;
          throwTypeErrorResult = channel;
          throwTypeErrorResult = callback;
          let message = channel.getChannel(callback);
          throwTypeErrorResult = message;
          if (null != message) {
            throwTypeErrorResult = closure_4;
            throwTypeErrorResult = items;
            throwTypeErrorResult = items;
            throwTypeErrorResult = message;
            throwTypeErrorResult = closure_4;
            throwTypeErrorResult = items;
            if (items.isLurking(message.guild_id)) {
              let obj2 = { guildId: null, title: null, body: null };
              throwTypeErrorResult = message;
              obj2[0] = message.guild_id;
              throwTypeErrorResult = callback;
              throwTypeErrorResult = selectedAnswerIds;
              const intl7 = callback(selectedAnswerIds[13]).intl;
              throwTypeErrorResult = callback;
              throwTypeErrorResult = selectedAnswerIds;
              obj2[1] = intl7.string(callback(selectedAnswerIds[13]).t.Qic1FD);
              throwTypeErrorResult = callback;
              throwTypeErrorResult = selectedAnswerIds;
              const intl8 = callback(selectedAnswerIds[13]).intl;
              throwTypeErrorResult = callback;
              throwTypeErrorResult = selectedAnswerIds;
              obj2[2] = intl8.string(callback(selectedAnswerIds[13]).t["5sHHoy"]);
              throwTypeErrorResult = callback5(obj2);
            } else if (closure_10.canChatInGuild(message.guild_id)) {
              selectedAnswerIds = callback3(callback, callback2);
              callback2(selectedAnswerIds[11])(null != selectedAnswerIds, "Must not be able to vote without existing state!");
              const obj3 = { channelId: null, messageId: null };
              obj3[0] = callback;
              obj3[1] = callback2;
              closure_4 = callback6(obj3);
              c7 = 1;
              selectedAnswerIds = 0;
              selectedAnswerIds = selectedAnswerIds.selectedAnswerIds;
              items = [];
              selectedAnswerIds = HermesBuiltin.arraySpread(selectedAnswerIds.values(), selectedAnswerIds);
              callback4(callback, callback2, (arg0) => {
                callback(table[11])(null != arg0, "Must not be able to vote without existing state!");
                const obj = {};
                const merged = Object.assign(arg0);
                obj.submitting = true;
                obj.editing = false;
                return obj;
              });
              const obj4 = { channelId: null, messageId: null, answerIds: null };
              obj4[0] = callback;
              obj4[1] = callback2;
              obj4[2] = items;
              channel = 3;
              c9 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = callback7(obj4);
              return obj5;
            } else {
              let obj10 = callback2(selectedAnswerIds[12]);
              let obj6 = { title: null, body: null };
              const intl5 = callback(selectedAnswerIds[13]).intl;
              obj6[0] = intl5.string(callback(selectedAnswerIds[13]).t.p245wu);
              const intl6 = callback(selectedAnswerIds[13]).intl;
              obj6[1] = intl6.string(callback(selectedAnswerIds[13]).t["U/uodt"]);
              obj10.show(obj6);
            }
          }
          c9 = 3;
        }
      } else if (2 === tmp7) {
        c7 = 0;
        obj6 = callback2(selectedAnswerIds[12]);
        const obj7 = { title: null, body: null };
        const intl3 = callback(selectedAnswerIds[13]).intl;
        obj7[0] = intl3.string(callback(selectedAnswerIds[13]).t.iufib1);
        const getAnyErrorMessage = throwTypeErrorResult.getAnyErrorMessage;
        let anyErrorMessage;
        if (getAnyErrorMessage != null) {
          anyErrorMessage = getAnyErrorMessage();
        }
        message = anyErrorMessage;
        if (anyErrorMessage == null) {
          message = throwTypeErrorResult.message;
        }
        callback2 = message;
        if (message == null) {
          const intl4 = callback(selectedAnswerIds[13]).intl;
          callback2 = intl4.string(callback(selectedAnswerIds[13]).t.eAn6z2);
        }
        obj7[1] = callback2;
        obj6.show(obj7);
        const obj8 = { channelId: null, messageId: null, answerIds: null };
        obj8[0] = callback;
        obj8[1] = callback2;
        obj8[2] = closure_4;
        channel = 5;
        c9 = 1;
        const obj9 = { value: null, done: false };
        obj9[0] = callback7(obj8);
        return obj9;
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c9 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c7 = 0;
          c9 = 3;
          obj10 = { value: null, done: true };
          obj10[0] = arg1;
          return obj10;
        } else {
          obj2 = message(selectedAnswerIds[22]);
          const obj11 = { channelId: null, messageId: null, answerIds: null };
          obj11[0] = callback;
          obj11[1] = callback2;
          obj11[2] = items;
          channel = 4;
          c9 = 1;
          const obj12 = { value: null, done: false };
          obj12[0] = obj2.submitPollVote(obj11);
          return obj12;
        }
      } else if (4 === tmp7) {
        if (arg0 === 1) {
          c9 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c7 = 0;
          c9 = 3;
          const obj13 = { value: null, done: true };
          obj13[0] = arg1;
          return obj13;
        } else {
          throwTypeErrorResult = closure_4;
          throwTypeErrorResult = items;
          throwTypeErrorResult = callback4;
          throwTypeErrorResult = callback;
          throwTypeErrorResult = callback2;
          throwTypeErrorResult = callback4(callback, callback2, () => {

          });
          throwTypeErrorResult = callback;
          throwTypeErrorResult = selectedAnswerIds;
          const AccessibilityAnnouncer = callback(selectedAnswerIds[23]).AccessibilityAnnouncer;
          throwTypeErrorResult = items;
          if (0 === items.length) {
            const intl2 = callback(selectedAnswerIds[13]).intl;
            let stringResult = intl2.string(callback(selectedAnswerIds[13]).t["xcvy+3"]);
          } else {
            const intl = callback(selectedAnswerIds[13]).intl;
            stringResult = intl.string(callback(selectedAnswerIds[13]).t.o20GSo);
          }
          AccessibilityAnnouncer.announce(stringResult);
          c7 = 0;
        }
      } else if (arg0 === 1) {
        c9 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        callback4(callback, callback2, (arg0) => {
          if (null != arg0) {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.submitting = false;
            obj.editing = false;
            return obj;
          }
        });
      }
      return arg1;
    })();
    iter.next();
    return iter;
  });
  closure_25 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleClearPollVote() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      c1 = 0;
      ({ channelId: c0, messageId: c1 } = callback);
      yield "PX_16";
      const channel2 = channel.getChannel(callback);
      if (null != channel2) {
        if (lurking.isLurking(channel2.guild_id)) {
          const obj2 = { guildId: null, title: null, body: null };
          obj2[0] = channel2.guild_id;
          const intl = callback(1236).intl;
          obj2[1] = intl.string(callback(1236).t.B9QnBp);
          const intl2 = callback(1236).intl;
          obj2[2] = intl2.string(callback(1236).t.BVZCTn);
          callback3(obj2);
        } else {
          callback2(callback, c1, (showResults) => {
            const obj = { channelId: c0, selectedAnswerIds: new Set(), submitting: false, editing: false, showResults: null };
            let flag;
            if (showResults != null) {
              flag = showResults.showResults;
            }
            if (flag == null) {
              flag = false;
            }
            obj[4] = flag;
            return obj;
          });
          const obj3 = { channelId: null, messageId: null };
          obj3[0] = callback;
          obj3[1] = c1;
          dependencyMap = 2;
          c4 = 1;
          const obj4 = { value: null, done: false };
          obj4[0] = callback4(obj3);
          return obj4;
        }
      }
      yield "HermesInternal";
      return arg1;
    })();
    iter.next();
    return iter;
  });
  closure_26 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handlePollActionTapped() {
  let self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c2 = tmp5;
              let callback = tmp2;
              c0 = undefined;
              callback = undefined;
              c2 = undefined;
              ({ channelId: c0, messageId: c1, type: c2 } = c0);
              table = 1;
              c4 = 1;
              return { value: "PX_16", done: null };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else if ("submit" === c2) {
                const obj2 = { channelId: null, messageId: null };
                obj2[0] = c0;
                obj2[1] = callback;
                table = 2;
                c4 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = closure_1_24(obj2);
                return obj3;
              } else if ("remove" === tmp40) {
                const obj4 = { channelId: null, messageId: null };
                obj4[0] = c0;
                obj4[1] = callback;
                table = 3;
                c4 = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = (function handleClearPollVote(arg0) {
                  const self = this;
                  const apply = closure_26.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(obj4);
                return obj5;
              } else if ("cancel" === tmp40) {
                const obj6 = { channelId: null, messageId: null, isEditing: false };
                obj6[0] = c0;
                obj6[1] = callback;
                closure_1_20(obj6);
              } else {
                if ("showVotes" === tmp40) {
                  const obj7 = { channelId: null, messageId: null };
                  obj7[0] = c0;
                  obj7[1] = callback;
                  (function handleShowVotes(channelId) {
                    channelId = channelId.channelId;
                    const messageId = channelId.messageId;
                    callback(channelId, messageId, (showResults) => {
                      const message = closure_1_11.getMessage(channelId, messageId);
                      let num = 0;
                      if (null != message) {
                        const reactions = message.reactions;
                        num = reactions.reduce(() => { ... }, 0);
                      }
                      let obj = messageId(closure_1_3[17]);
                      obj.trackWithMetadata(closure_1_15.POLL_SHOW_RESULTS_CLICKED, { channel_id: channelId, message_id: messageId, show_results: null == showResults || !showResults.showResults, votes_count: num });
                      obj = { channelId: tmp2, selectedAnswerIds: new Set(), submitting: null, editing: null, showResults: null };
                      let flag;
                      if (showResults != null) {
                        flag = showResults.submitting;
                      }
                      if (flag == null) {
                        flag = false;
                      }
                      obj[2] = flag;
                      let flag2;
                      if (showResults != null) {
                        flag2 = showResults.submitting;
                      }
                      if (flag2 == null) {
                        flag2 = false;
                      }
                      obj[3] = flag2;
                      obj[4] = null == showResults || !showResults.showResults;
                      return obj;
                    });
                  })(obj7);
                } else if ("showVoterDetails" !== tmp40) {
                  const _HermesInternal = HermesInternal;
                  callback(table[11])(false, "Unknown poll action type: " + c2);
                  const tmp9 = callback(table[11]);
                }
                const obj8 = { channelId: null, messageId: null };
                obj8[0] = c0;
                obj8[1] = callback;
                callback2(obj8);
              }
            } else if (2 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj9 = { value: null, done: true };
                obj9[0] = arg1;
                return obj9;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c4 = 3;
          }
        } catch (tmp33) {
          c4 = tmp;
          throw tmp33;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_27 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createPoll() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      c2 = tmp3;
      ({ channel: c0, question: c1, answers: c2, allowMultiSelect: c3, duration: c4, layout: c5, onClose: c6, scheduledTimestamp: c7 } = lib);
      yield "PX_16";
      const uploads2 = uploads.getUploads(lib.id, Poll.Poll);
      Poll = c2.map((text) => {
        closure_0 = text;
        let poll_media = closure_8;
        let findIndexResult;
        if (closure_8 != null) {
          findIndexResult = poll_media.findIndex((id) => id.id === text.localCreationAnswerId);
        }
        let tmp2;
        if (-1 !== findIndexResult) {
          const _HermesInternal = HermesInternal;
          const items = ["" + findIndexResult];
          tmp2 = items;
        }
        poll_media = { attachment_ids: tmp2 };
        if (c5 === _undefined(_undefined2[24]).PollLayoutTypes.DEFAULT) {
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
            const obj = { id: null, name: "" };
            obj[0] = emoji.id;
            poll_media.emoji = obj;
          } else if (null != emoji.optionallyDiverseSequence) {
            obj1 = { name: null };
            obj1[0] = emoji.optionallyDiverseSequence;
            poll_media.emoji = obj1;
          }
        }
        return { poll_media };
      });
      const obj2 = { question: null, answers: null, allow_multiselect: null, duration: null, layout_type: null };
      const obj3 = { text: null };
      obj3[0] = lib2.trim();
      obj2[0] = obj3;
      obj2[1] = Poll;
      obj2[2] = dependencyMap;
      obj2[3] = c4;
      obj2[4] = c5;
      c4 = 1;
      const obj4 = { attachmentsToUpload: null, scheduledTimestamp: null, onAttachmentUploadError: null };
      obj4[0] = uploads2;
      obj4[1] = c7;
      obj4[2] = function onAttachmentUploadError(file, code, reason) {
        let obj = _undefined(_undefined2[26]);
        obj = { file, guildId: _undefined.getGuildId(), analyticsLocations: [], code, reason };
        const result = obj.handleUploadMessageAttachmentsErrors(obj);
      };
      yield lib2(7201).sendPollMessage(lib.id, obj2, obj4);
      if (2 === tmp7) {
        c4 = 0;
        closure_11 = dependencyMap;
        if (closure_11 instanceof lib(4376).APIError) {
          let aPIError = closure_11;
        } else {
          aPIError = new lib(4376).APIError(closure_11);
        }
        if ("poll" === aPIError.getAnyErrorMessage()) {
          if (null != closure_11.text) {
            const obj6 = {};
            const merged = Object.assign(closure_11);
            const _JSON = JSON;
            obj6.body = JSON.parse(closure_11.text);
            throw obj6;
          }
        }
        if (null == c7) {
          throw closure_11;
        } else {
          c6 = 3;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        if (c6 != null) {
          tmp9(c7);
        }
        c4 = 0;
      }
      c4 = 0;
      return arg1;
    })();
    iter.next();
    return iter;
  });
  closure_28 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _endPollEarly() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const callback3 = tmp5;
              let callback2 = tmp2;
              let callback;
              callback2 = undefined;
              ({ channelId: c0, messageId: c1 } = callback);
              dependencyMap = 1;
              c4 = 1;
              return { value: "PX_16", done: null };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const obj2 = { title: null, body: null };
              const intl = callback(1236).intl;
              obj2[0] = intl.string(callback(1236).t["+rfkTK"]);
              const intl2 = callback(1236).intl;
              obj2[1] = intl2.string(callback(1236).t.H2I1gL);
              dependencyMap = 2;
              c4 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = callback2(4857).confirm(obj2);
              return obj3;
            }
          } else {
            if (2 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              } else if (arg1) {
                obj1 = callback3(11303);
                const obj5 = { channelId: null, messageId: null };
                obj5[0] = callback;
                obj5[1] = callback2;
                dependencyMap = 3;
                c4 = 1;
                const obj6 = { value: null, done: false };
                obj6[0] = obj1.endPollEarly(obj5);
                return obj6;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp13) {
          c4 = tmp;
          throw tmp13;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_29 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ getPollState: map1, updatePollState: closure_14 } = useMessagePollInteractions);
({ AnalyticEvents: closure_15, JoinGuildSources: closure_16 } = ME);
let result = require("set").fileFinishedImporting("modules/polls/PollsActionCreators.tsx");

export default {
  handlePollAnswerTapped(result) {
    const answerId = result.answerId;
    let merged = Object.assign(result, Object.create(null));
    let channelId2;
    let messageId2;
    let message;
    let allow_multiselect;
    ({ channelId, messageId } = merged);
    message = store.getMessage(channelId, messageId);
    if (null != message) {
      let obj = { message: null, channelId: null, messageId: null };
      obj[0] = message;
      obj[1] = channelId;
      obj[2] = messageId;
    } else {
      const message1 = message.getMessage(channelId, messageId);
      if (null != message1.message) {
        obj = { channelId: null, messageId: null, message: null };
        obj[0] = channelId;
        obj[1] = messageId;
        obj[2] = message1.message;
      } else {
        channelId2(message[11])(null != message, "Tapped on a non-existent poll message");
        const _Error = Error;
        error = new Error();
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
      callback2(channelId2, messageId2, (arg0) => {
        if (null == arg0) {
          const _Set = Set;
          const items = [answerId];
          const set = new Set(items);
          const poll2 = message.poll;
          let answers;
          if (poll2 != null) {
            answers = poll2.answers;
          }
          ({ analyticsSelectedAnswerIds: analyticsSelectedAnswerIds2, selectedTextAnswersCount: selectedTextAnswersCount2, selectedEmojiAnswersCount: selectedEmojiAnswersCount2 } = closure_1_17(answers, set));
          let obj2 = channelId2(message[17]);
          let obj = { channel_id: null, message_id: null, selected_answer_ids: null, selected_text_answers_count: null, selected_emoji_answers_count: null };
          obj[0] = channelId2;
          obj[1] = messageId2;
          obj[2] = analyticsSelectedAnswerIds2;
          obj[3] = selectedTextAnswersCount2;
          obj[4] = selectedEmojiAnswersCount2;
          obj2.trackWithMetadata(closure_1_15.POLL_VOTE_SELECTED, obj);
          obj = { channelId: null, selectedAnswerIds: null, submitting: false, editing: false, showResults: false };
          obj[0] = channelId2;
          obj[1] = set;
          return obj;
        } else {
          obj1 = {};
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
          ({ analyticsSelectedAnswerIds, selectedTextAnswersCount, selectedEmojiAnswersCount } = closure_1_17(answers1, set1));
          obj = channelId2(message[17]);
          obj2 = { channel_id: null, message_id: null, selected_answer_ids: null, selected_text_answers_count: null, selected_emoji_answers_count: null };
          obj2[0] = channelId2;
          obj2[1] = messageId2;
          obj2[2] = analyticsSelectedAnswerIds;
          obj2[3] = selectedTextAnswersCount;
          obj2[4] = selectedEmojiAnswersCount;
          obj.trackWithMetadata(closure_1_15.POLL_VOTE_SELECTED, obj2);
          return obj1;
        }
      });
    } else {
      obj = { channelId: null, messageId: null, answerId: null };
      obj[0] = channelId2;
      obj[1] = messageId2;
      obj[2] = answerId;
      handleShowVotesForAnswer(obj);
    }
  },
  handlePollSubmitVote,
  handleUpdateVoteEditingState,
  handlePollActionTapped(result) {
    const self = this;
    const apply = _handlePollActionTapped.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  createPoll() {
    const self = this;
    const apply = _createPoll.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  endPollEarly() {
    const self = this;
    const apply = _endPollEarly.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
};
export { handleShowVotesForAnswer };