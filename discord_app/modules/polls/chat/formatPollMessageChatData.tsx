// === Module 8135: reactionForId ===

// Module 8135 (reactionForId)
import isCommunicationDisabled from "isCommunicationDisabled" /* 4109 */;
import GuildMemberFlags from "GuildMemberFlags" /* 4126 */;
import formatExpirationLabel from "formatExpirationLabel" /* 8137 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import closure_4 from "getEmojiToGroupId" /* 5409 */;
import closure_5 from "ensureGuildLoaded" /* 1386 */;
import closure_6 from "trackCommunicationDisabled" /* 1991 */;
import closure_7 from "reinjectEphemerals" /* 4735 */;
import closure_8 from "mergeGuildAvatar" /* 1921 */;
import { getPollState } from "useMessagePollInteractions" /* 8136 */;
import ME from "ME" /* 673 */;
import set from "set" /* 2 */;

require = arg1;
function reactionForId(reactions, first) {
  const iter = reactions[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (typeof nextResult.emoji.id === "number") {
      let tmp3 = nextResult;
      let _HermesInternal = HermesInternal;
      let id = "" + tmp2.emoji.id;
    } else {
      let tmp5 = nextResult;
      id = tmp2.emoji.id;
    }
    if (id === first) {
      let tmp4 = iter;
      iter.return();
      return nextResult;
    }
  }
}
function computeBasicPollChatData(message) {
  obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let formattedExpirationLabel = obj.formattedExpirationLabel;
  const poll = message.poll;
  if (null != poll) {
    let str = "";
    if (message.state === MessageStates.SENT) {
      if (formattedExpirationLabel == null) {
        formattedExpirationLabel = formatExpirationLabel.formatExpirationLabel(poll.expiry);
        const obj2 = formatExpirationLabel;
      }
      str = formattedExpirationLabel;
    }
    let tmp6 = arg1;
    if (arg1 == null) {
      tmp6 = getPollState(message.getChannelId(), message.id);
    }
    if (tmp6 == null) {
      tmp6 = obj;
    }
    ({ selectedAnswerIds, submitting, editing, showResults } = tmp6);
    let reactions = message.reactions;
    let tmp8 = null == message.poll;
    if (!tmp8) {
      tmp8 = store.getMessage(message.channel_id, message.id) === message;
    }
    let flag = true;
    let obj3 = reactions;
    if (!tmp8) {
      message = store.getMessage(message.channel_id, message.id);
      const isSearchHit = message.isSearchHit;
      let tmp12 = !isSearchHit;
      if (!isSearchHit) {
        tmp12 = null != message;
      }
      reactions = undefined;
      if (message != null) {
        reactions = message.reactions;
      }
      obj3 = reactions;
      flag = tmp12;
    }
    const someResult = obj3.some((me_vote) => true === me_vote.me_vote);
    let tmp16 = !editing;
    if (!editing) {
      tmp16 = someResult;
    }
    let tmp18 = tmp16;
    if (!tmp16) {
      tmp18 = tmp5;
    }
    if (!tmp18) {
      tmp18 = showResults;
    }
    let tmp19 = tmp2;
    if (message.state === MessageStates.SENT) {
      tmp19 = flag;
    }
    if (tmp19) {
      let tmp20 = !someResult;
      if (someResult) {
        tmp20 = editing;
      }
      if (!tmp20) {
        tmp20 = tmp18;
      }
      tmp19 = tmp20;
    }
    channel = channel.getChannel(message.getChannelId());
    let guildId;
    if (channel != null) {
      const getGuildId = channel.getGuildId;
      if (getGuildId != null) {
        guildId = getGuildId();
      }
    }
    let selfMember = null;
    if (null != guildId) {
      selfMember = selfMember.getSelfMember(guildId);
    }
    const result = GuildMemberFlags.hasAutomodQuarantinedProfile(selfMember);
    const obj4 = GuildMemberFlags;
    obj = { poll: null, canTapAnswers: null, canRemoveVote: null, canShowVoteCounts: null, canSubmitVote: null, expirationLabel: null, hasSelectedAnswer: null, hasVoted: null, hasVoteRecorded: null, isEditingVote: null, isExpired: null, isInteractive: null, isSent: null, reactions: null, selectedAnswerIds: null, submitting: null, tapShouldOpenVotersModal: null, showResults: null };
    obj[0] = poll;
    obj[1] = tmp19;
    let tmp30 = tmp16;
    const result1 = isCommunicationDisabled.isMemberCommunicationDisabled(selfMember);
    if (tmp16) {
      tmp30 = tmp2;
    }
    if (tmp30) {
      tmp30 = !tmp5;
    }
    obj[2] = tmp30;
    obj[3] = tmp18;
    let tmp31 = !submitting;
    if (!submitting) {
      tmp31 = tmp14;
    }
    if (tmp31) {
      tmp31 = !tmp16;
    }
    if (tmp31) {
      tmp31 = tmp2;
    }
    if (tmp31) {
      tmp31 = !result;
    }
    if (tmp31) {
      tmp31 = !result1;
    }
    obj[4] = tmp31;
    obj[5] = str;
    obj[6] = selectedAnswerIds.size > 0;
    obj[7] = tmp16;
    obj[8] = someResult;
    obj[9] = editing;
    obj[10] = null == str && message.state === MessageStates.SENT;
    obj[11] = flag;
    obj[12] = message.state === MessageStates.SENT;
    obj[13] = obj3;
    obj[14] = selectedAnswerIds;
    obj[15] = submitting;
    obj[16] = tmp18;
    obj[17] = showResults;
    return obj;
  }
}
const MessageStates = ME.MessageStates;
let obj = { channelId: ME.EMPTY_STRING_SNOWFLAKE_ID, selectedAnswerIds: null, submitting: false, editing: false, showResults: false };
let set = new Set();
obj[1] = set;
let result = set.fileFinishedImporting("modules/polls/chat/formatPollMessageChatData.tsx");

export default function formatPollMessageChatData(poll, arg1, maxSettingsForPreset) {
  obj = maxSettingsForPreset;
  if (maxSettingsForPreset === undefined) {
    obj = {};
  }
  let flag = obj.animateEmoji;
  if (flag === undefined) {
    flag = false;
  }
  let str = obj.theme;
  if (str === undefined) {
    str = "dark";
  }
  let useReducedMotion;
  layout_type = undefined;
  canSubmitVote = undefined;
  expirationLabel = undefined;
  let hasSelectedAnswer;
  let hasVoted;
  isExpired = undefined;
  reactions = undefined;
  c9 = undefined;
  c10 = undefined;
  showResults = undefined;
  let totalVotes;
  computeBasicPollChatData = undefined;
  closure_14 = undefined;
  c15 = undefined;
  poll = poll.poll;
  if (null != poll) {
    const currentUser = reactions.getCurrentUser();
    if (null != currentUser) {
      useReducedMotion = canSubmitVote.useReducedMotion;
      const channel = hasSelectedAnswer.getChannel(poll.getChannelId());
      let guildId;
      if (channel != null) {
        const getGuildId = channel.getGuildId;
        if (getGuildId != null) {
          guildId = getGuildId();
        }
      }
      obj1 = flag(layout_type[15]);
      ({ answers, layout_type } = poll);
      obj = { formattedExpirationLabel: null };
      obj[0] = tmp;
      const avatarUrl = obj1.getAvatarUrl(currentUser, guildId);
      const tmp8 = computeBasicPollChatData(poll, arg1, obj);
      if (null != tmp8) {
        ({ canTapAnswers, canSubmitVote } = tmp8);
        ({ expirationLabel, canRemoveVote, canShowVoteCounts } = tmp8);
        if (undefined === expirationLabel) {
          let intl = tmp4(tmp5[16]).intl;
          expirationLabel = intl.string(tmp4(tmp5[16]).t["e+J3JZ"]);
        }
        hasSelectedAnswer = tmp8.hasSelectedAnswer;
        hasVoted = tmp8.hasVoted;
        ({ isEditingVote, isExpired } = tmp8);
        ({ isInteractive, reactions } = tmp8);
        ({ selectedAnswerIds: c9, submitting: c10, tapShouldOpenVotersModal, showResults } = tmp8);
        let tmp4Result = tmp4(tmp5[17]);
        totalVotes = tmp4Result.getTotalVotes(reactions);
        const intl2 = tmp4(tmp5[16]).intl;
        obj = { count: null };
        obj[0] = totalVotes;
        computeBasicPollChatData = intl2.formatToPlainString(tmp4(tmp5[16]).t.XRkuof, obj);
        let _Math = Math;
        const items = [];
        HermesBuiltin.arraySpread(answers.map((answer_id) => {
          const tmp = totalVotes(reactions, "" + answer_id.answer_id);
          let num;
          if (tmp != null) {
            const count_details = tmp.count_details;
            if (count_details != null) {
              num = count_details.vote;
            }
          }
          if (num == null) {
            num = 0;
          }
          return num;
        }), 0);
        const _Math2 = Math;
        closure_14 = HermesBuiltin.apply(items, Math);
        const mapped = answers.map((answer_id) => {
          const combined = "" + answer_id.answer_id;
          const tmp2 = totalVotes(reactions, combined);
          let num;
          if (tmp2 != null) {
            const count_details = tmp2.count_details;
            if (count_details != null) {
              num = count_details.vote;
            }
          }
          if (num == null) {
            num = 0;
          }
          let num2 = 0;
          if (0 !== totalVotes) {
            num2 = num / totalVotes;
          }
          const hasItem = _undefined.has(combined);
          let tmp6 = hasVoted;
          if (hasVoted) {
            flag = undefined;
            if (tmp2 != null) {
              flag = tmp2.me_vote;
            }
            if (flag == null) {
              flag = false;
            }
            tmp6 = flag;
          }
          obj = { didSelfVote: tmp6, hasVoted, isExpired, isSelected: hasItem, isLeader: tmp4, showResults };
          let tmp7 = isExpired;
          const match = flag(layout_type[8]).match(obj);
          const str = flag(layout_type[8]);
          const tmp5 = hasVoted;
          const withResult = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected");
          const withResult1 = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected").with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected");
          const withResult2 = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected").with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected").with({ isExpired: true, didSelfVote: true }, () => "loserSelected");
          const withResult3 = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected").with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected").with({ isExpired: true, didSelfVote: true }, () => "loserSelected").with({ isExpired: true }, () => "notVoted");
          const withResult4 = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected").with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected").with({ isExpired: true, didSelfVote: true }, () => "loserSelected").with({ isExpired: true }, () => "notVoted").with({ didSelfVote: true, isExpired: false }, () => "voted");
          const withResult5 = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected").with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected").with({ isExpired: true, didSelfVote: true }, () => "loserSelected").with({ isExpired: true }, () => "notVoted").with({ didSelfVote: true, isExpired: false }, () => "voted").with({ hasVoted: true, isExpired: false }, () => "notVoted");
          const withResult6 = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected").with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected").with({ isExpired: true, didSelfVote: true }, () => "loserSelected").with({ isExpired: true }, () => "notVoted").with({ didSelfVote: true, isExpired: false }, () => "voted").with({ hasVoted: true, isExpired: false }, () => "notVoted").with({ isSelected: true }, () => "selected");
          obj = { answerId: combined, pollMedia: null, isSelected: null, isVictor: null, didSelfVote: null, style: null, shouldAnimateTransition: null, votesPercentage: null, votes: null };
          obj = { text: answer_id.poll_media.text, emoji: null, stickerId: null, attachmentIds: null };
          let name = answer_id.poll_media.emoji;
          obj1 = { animateEmoji: num };
          let flag2 = obj1.animateEmoji;
          const withResult7 = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected").with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected").with({ isExpired: true, didSelfVote: true }, () => "loserSelected").with({ isExpired: true }, () => "notVoted").with({ didSelfVote: true, isExpired: false }, () => "voted").with({ hasVoted: true, isExpired: false }, () => "notVoted").with({ isSelected: true }, () => "selected").with({ isExpired: false, showResults: true }, () => "notVoted");
          if (flag2 === undefined) {
            flag2 = false;
          }
          let num3 = obj1.size;
          if (num3 === undefined) {
            num3 = 48;
          }
          if (null == name) {
            obj[1] = undefined;
            obj[2] = answer_id.poll_media.sticker_id;
            obj[3] = answer_id.poll_media.attachment_ids;
            obj[1] = obj;
            obj[2] = hasItem;
            if (tmp7) {
              tmp7 = tmp4;
            }
            obj[3] = tmp7;
            obj[4] = tmp6;
            obj[5] = otherwiseResult;
            let tmp20 = c10;
            if (c10) {
              tmp20 = !useReducedMotion;
            }
            obj[6] = tmp20;
            const _Math = Math;
            obj[7] = Math.round(100 * num2);
            const match1 = tmp8(tmp9[8]).match(layout_type);
            const str2 = tmp8(tmp9[8]);
            obj[8] = match1.with(tmp8(tmp9[18]).PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => "(" + num.toLocaleString() + ")").otherwise(() => {
              const intl = num(closure_1_2[16]).intl;
              return intl.formatToPlainString(num(closure_1_2[16]).t.XRkuof, { count: num });
            });
            return obj;
          } else {
            let flag3 = name.animated;
            if (tmp11) {
              const customEmojiById = expirationLabel.getCustomEmojiById(name.id);
              let flag4;
              if (customEmojiById != null) {
                flag4 = customEmojiById.animated;
              }
              if (flag4 == null) {
                flag4 = false;
              }
              flag3 = flag4;
            }
            if (flag2) {
              if (flag3 == null) {
                flag3 = false;
              }
              flag2 = flag3;
            }
            let combined1 = null;
            if (null != name.id) {
              const _HermesInternal = HermesInternal;
              combined1 = "" + name.id;
            }
            const obj2 = { id: null, name: null, displayName: null, src: null, animated: null };
            obj2[0] = combined1;
            obj2[1] = name.name;
            if (null == name.id) {
              let name2 = useReducedMotion(tmp9[9]).convertSurrogateToName(name.name);
              const obj15 = useReducedMotion(tmp9[9]);
            } else {
              name2 = name.name;
            }
            obj2[2] = name2;
            if (null == name.id) {
              name = name.name;
              let uRL = useReducedMotion(tmp9[10]).getURL(name);
              const obj18 = useReducedMotion(tmp9[10]);
            } else {
              const obj3 = { id: null, animated: null, size: null };
              obj3[0] = name.id;
              obj3[1] = flag2;
              obj3[2] = num3;
              uRL = useReducedMotion(tmp9[11]).getEmojiURL(obj3);
              const obj16 = useReducedMotion(tmp9[11]);
            }
            obj2[3] = uRL;
            obj2[4] = flag2;
            tmp11 = null == flag3 && null != name.id;
          }
        });
        obj1 = { isExpired: null, canSubmitVote: null, hasVoted: null, isEditingVote: null, canRemoveVote: null, isInteractive: null, showResults: null };
        obj1[0] = isExpired;
        obj1[1] = canSubmitVote;
        obj1[2] = hasVoted;
        obj1[3] = isEditingVote;
        obj1[4] = canRemoveVote;
        obj1[5] = isInteractive;
        obj1[6] = showResults;
        let match = tmp4(tmp5[8]).match(obj1);
        let str2 = tmp4(tmp5[8]);
        let withResult = match.with({ isInteractive: false }, () => {

        });
        let withResult1 = match.with({ isInteractive: false }, () => {

        }).with({ isExpired: true }, () => {

        });
        let withResult2 = match.with({ isInteractive: false }, () => {

        }).with({ isExpired: true }, () => {

        }).with({ isEditingVote: true }, () => {
          obj = { label: null, presentation: "button", enabled: null, type: "submit" };
          const intl = flag(layout_type[16]).intl;
          obj[0] = intl.string(flag(layout_type[16]).t.JwkNU4);
          obj[2] = hasSelectedAnswer;
          return obj;
        });
        let withResult3 = match.with({ isInteractive: false }, () => {

        }).with({ isExpired: true }, () => {

        }).with({ isEditingVote: true }, () => {
          obj = { label: null, presentation: "button", enabled: null, type: "submit" };
          const intl = flag(layout_type[16]).intl;
          obj[0] = intl.string(flag(layout_type[16]).t.JwkNU4);
          obj[2] = hasSelectedAnswer;
          return obj;
        }).with({ canRemoveVote: true }, () => {
          obj = { label: null, presentation: "secondaryButton", enabled: true, type: "remove" };
          const intl = flag(layout_type[16]).intl;
          obj[0] = intl.string(flag(layout_type[16]).t.XhQEh8);
          return obj;
        });
        let withResult4 = match.with({ isInteractive: false }, () => {

        }).with({ isExpired: true }, () => {

        }).with({ isEditingVote: true }, () => {
          obj = { label: null, presentation: "button", enabled: null, type: "submit" };
          const intl = flag(layout_type[16]).intl;
          obj[0] = intl.string(flag(layout_type[16]).t.JwkNU4);
          obj[2] = hasSelectedAnswer;
          return obj;
        }).with({ canRemoveVote: true }, () => {
          obj = { label: null, presentation: "secondaryButton", enabled: true, type: "remove" };
          const intl = flag(layout_type[16]).intl;
          obj[0] = intl.string(flag(layout_type[16]).t.XhQEh8);
          return obj;
        }).with({ hasVoted: false, showResults: true }, () => {
          obj = { label: null, presentation: "secondaryButton", enabled: true, type: "showVotes" };
          const intl = flag(layout_type[16]).intl;
          obj[0] = intl.string(flag(layout_type[16]).t.gNj6In);
          return obj;
        });
        tmp4Result = tmp4(tmp5[19]);
        const otherwiseResult = match.with({ isInteractive: false }, () => {

        }).with({ isExpired: true }, () => {

        }).with({ isEditingVote: true }, () => {
          obj = { label: null, presentation: "button", enabled: null, type: "submit" };
          const intl = flag(layout_type[16]).intl;
          obj[0] = intl.string(flag(layout_type[16]).t.JwkNU4);
          obj[2] = hasSelectedAnswer;
          return obj;
        }).with({ canRemoveVote: true }, () => {
          obj = { label: null, presentation: "secondaryButton", enabled: true, type: "remove" };
          const intl = flag(layout_type[16]).intl;
          obj[0] = intl.string(flag(layout_type[16]).t.XhQEh8);
          return obj;
        }).with({ hasVoted: false, showResults: true }, () => {
          obj = { label: null, presentation: "secondaryButton", enabled: true, type: "showVotes" };
          const intl = flag(layout_type[16]).intl;
          obj[0] = intl.string(flag(layout_type[16]).t.gNj6In);
          return obj;
        }).otherwise(() => {
          obj = { label: null, presentation: "button", enabled: null, type: "submit" };
          const intl = flag(layout_type[16]).intl;
          obj[0] = intl.string(flag(layout_type[16]).t.JwkNU4);
          obj[2] = canSubmitVote;
          return obj;
        });
        const intl3 = tmp4(tmp5[16]).intl;
        const string = intl3.string;
        const t = tmp4(tmp5[16]).t;
        if (isIOSResult) {
          let stringResult = string(t["PVATM/"]);
        } else {
          stringResult = string(t.cHfFql);
        }
        c15 = stringResult;
        isIOSResult = tmp4Result.isIOS();
        let obj2 = { isExpired: null, isInteractive: null, isEditingVote: null };
        obj2[0] = isExpired;
        obj2[1] = isInteractive;
        obj2[2] = isEditingVote;
        let match1 = tmp4(tmp5[8]).match(obj2);
        const str3 = tmp4(tmp5[8]);
        let withResult5 = match1.with({ isInteractive: false, isExpired: false }, () => {
          obj = { label: null, presentation: "text", enabled: false };
          const intl = flag(layout_type[16]).intl;
          obj[0] = intl.string(flag(layout_type[16]).t.trrip0);
          return obj;
        });
        let tmp20;
        let withResult6 = match1.with({ isInteractive: false, isExpired: false }, () => {
          obj = { label: null, presentation: "text", enabled: false };
          const intl = flag(layout_type[16]).intl;
          obj[0] = intl.string(flag(layout_type[16]).t.trrip0);
          return obj;
        }).with({ isEditingVote: true }, () => {
          obj = { label: null, presentation: "textButton", enabled: true, type: "cancel" };
          const intl = flag(layout_type[16]).intl;
          obj[0] = intl.string(flag(layout_type[16]).t["ETE/oC"]);
          return obj;
        });
        if (isInteractive) {
          if (!isExpired) {
            if (!hasVoted) {
              if (!showResults) {
                let obj3 = { label: null, presentation: "textButton", enabled: true, type: "showVotes" };
                const intl4 = tmp4(tmp5[16]).intl;
                obj3[0] = intl4.string(tmp4(tmp5[16]).t["/KHAUF"]);
                tmp20 = obj3;
              }
            }
          }
        }
        const allow_multiselect = poll.allow_multiselect;
        const otherwiseResult1 = match1.with({ isInteractive: false, isExpired: false }, () => {
          obj = { label: null, presentation: "text", enabled: false };
          const intl = flag(layout_type[16]).intl;
          obj[0] = intl.string(flag(layout_type[16]).t.trrip0);
          return obj;
        }).with({ isEditingVote: true }, () => {
          obj = { label: null, presentation: "textButton", enabled: true, type: "cancel" };
          const intl = flag(layout_type[16]).intl;
          obj[0] = intl.string(flag(layout_type[16]).t["ETE/oC"]);
          return obj;
        }).otherwise(() => ({ label: closure_13, secondaryLabel: expirationLabel, accessibilityHint: c15, presentation: "text", enabled: true, type: "showVoterDetails" }));
        const obj4 = { isInteractive: null, isExpired: null, canSelectMultipleAnswers: null };
        obj4[0] = isInteractive;
        obj4[1] = isExpired;
        obj4[2] = allow_multiselect;
        const match2 = tmp4(tmp5[8]).match(obj4);
        const str4 = tmp4(tmp5[8]);
        let withResult7 = match2.with({ isInteractive: false }, () => {

        });
        const withResult8 = match2.with({ isInteractive: false }, () => {

        }).with({ isExpired: true }, () => {

        });
        const obj5 = { question: null, promptLabel: null, answers: null, answersInteraction: null, answerTapAccessibilityLabel: null, layoutType: null, resources: null, containerStyle: "normal", primaryAction: null, isInteractive: null, canTapAnswers: null, canSelectMultipleAnswers: null, hasSelectedAnswer: null, canShowVoteCounts: null, hasVoted: null, isExpired: null, myAvatarUrl: null, secondaryAction: null, tertiaryAction: null };
        obj5[0] = poll.question;
        obj5[1] = match2.with({ isInteractive: false }, () => {

        }).with({ isExpired: true }, () => {

        }).with({ canSelectMultipleAnswers: true }, () => {
          const intl = flag(layout_type[16]).intl;
          return intl.string(flag(layout_type[16]).t.yCXvxa);
        }).otherwise(() => {
          const intl = flag(layout_type[16]).intl;
          return intl.string(flag(layout_type[16]).t["9Y2wKO"]);
        });
        obj5[2] = mapped;
        const withResult9 = match2.with({ isInteractive: false }, () => {

        }).with({ isExpired: true }, () => {

        }).with({ canSelectMultipleAnswers: true }, () => {
          const intl = flag(layout_type[16]).intl;
          return intl.string(flag(layout_type[16]).t.yCXvxa);
        });
        const obj6 = { tapShouldOpenVotersModal: null, canTapAnswers: null, canSelectMultipleAnswers: null };
        obj6[0] = tapShouldOpenVotersModal;
        obj6[1] = canTapAnswers;
        obj6[2] = allow_multiselect;
        const match3 = tmp4(tmp5[8]).match(obj6);
        const str5 = tmp4(tmp5[8]);
        const withResult10 = match3.with({ tapShouldOpenVotersModal: true }, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST);
        const withResult11 = match3.with({ tapShouldOpenVotersModal: true }, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST).with({ canTapAnswers: false }, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST);
        const withResult12 = match3.with({ tapShouldOpenVotersModal: true }, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST).with({ canTapAnswers: false }, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST).with({ canSelectMultipleAnswers: false }, () => flag(layout_type[20]).PollChatAnswerInteractionType.RADIO_BUTTONS);
        obj5[3] = match3.with({ tapShouldOpenVotersModal: true }, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST).with({ canTapAnswers: false }, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST).with({ canSelectMultipleAnswers: false }, () => flag(layout_type[20]).PollChatAnswerInteractionType.RADIO_BUTTONS).with({ canSelectMultipleAnswers: true }, () => flag(layout_type[20]).PollChatAnswerInteractionType.CHECKBOXES).exhaustive();
        let tmp21;
        if (tapShouldOpenVotersModal) {
          tmp21 = stringResult;
        }
        obj5[4] = tmp21;
        obj5[5] = layout_type;
        const obj7 = { theme: null, layoutType: null };
        obj7[0] = str;
        obj7[1] = layout_type;
        obj5[6] = useReducedMotion(tmp5[21])(obj7);
        obj5[8] = otherwiseResult;
        obj5[9] = isInteractive;
        obj5[10] = canTapAnswers;
        obj5[11] = allow_multiselect;
        obj5[12] = hasSelectedAnswer;
        obj5[13] = canShowVoteCounts;
        obj5[14] = hasVoted;
        obj5[15] = isExpired;
        obj5[16] = avatarUrl;
        obj5[17] = otherwiseResult1;
        obj5[18] = tmp20;
        return obj5;
      }
    }
  }
};
export { reactionForId };
export const isPollMessageDirectlyInteractive = function isPollMessageDirectlyInteractive(poll) {
  let tmp = null == poll.poll;
  if (!tmp) {
    tmp = store.getMessage(poll.channel_id, poll.id) === poll;
  }
  return tmp;
};
export { computeBasicPollChatData };