// discord_app/modules/polls/chat/formatPollMessageChatData.tsx
import util from "../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import CommunicationDisabledUtils from "../../guild_communication_disabled/CommunicationDisabledUtils.tsx";
import AutomodPermissionUtils from "../../guild_automod/AutomodPermissionUtils.tsx";
import UnicodeEmojisDefault from "../../emojis/UnicodeEmojis.tsx";
import EmojiUtilsDefault from "../../../utils/EmojiUtils.tsx";
import _mod4745 from "module_4745" /* 4745 */;
import useFormattedExpirationLabel from "useFormattedExpirationLabel.tsx";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import EmojiStore from "../../emojis/EmojiStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function reactionForId(reactions, combined) {
  const iter = reactions[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (typeof nextResult.emoji.id === "number") {
      let _HermesInternal = HermesInternal;
      let id = "" + tmp2.emoji.id;
    } else {
      id = tmp2.emoji.id;
    }
    if (id === combined) {
      iter.return();
      return nextResult;
    }
  }
}
function computeBasicPollChatData(message, arg1) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let formattedExpirationLabel = obj.formattedExpirationLabel;
  const poll = message.poll;
  if (null != poll) {
    let str = "";
    if (message.state === MessageStates.SENT) {
      if (formattedExpirationLabel == null) {
        formattedExpirationLabel = useFormattedExpirationLabel.formatExpirationLabel(poll.expiry);
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
      tmp8 = MessageStore.getMessage(message.channel_id, message.id) === message;
    }
    let flag = true;
    let obj3 = reactions;
    if (!tmp8) {
      message = MessageStore.getMessage(message.channel_id, message.id);
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
    const channel = ChannelStore.getChannel(message.getChannelId());
    let guildId;
    if (channel != null) {
      const getGuildId = channel.getGuildId;
      if (getGuildId != null) {
        guildId = getGuildId();
      }
    }
    let selfMember = null;
    if (null != guildId) {
      selfMember = GuildMemberStore.getSelfMember(guildId);
    }
    const result = AutomodPermissionUtils.hasAutomodQuarantinedProfile(selfMember);
    obj = {
      poll,
      canTapAnswers: tmp19,
      canRemoveVote: null,
      canShowVoteCounts: null,
      canSubmitVote: null,
      expirationLabel: null,
      hasSelectedAnswer: null,
      hasVoted: null,
      hasVoteRecorded: null,
      isEditingVote: null,
      isExpired: null,
      isInteractive: null,
      isSent: null,
      reactions: null,
      selectedAnswerIds: null,
      submitting: null,
      tapShouldOpenVotersModal: null,
      showResults: null,
    };
    let tmp30 = tmp16;
    const result1 = CommunicationDisabledUtils.isMemberCommunicationDisabled(selfMember);
    if (tmp16) {
      tmp30 = tmp2;
    }
    if (tmp30) {
      tmp30 = !tmp5;
    }
    obj.canRemoveVote = tmp30;
    obj.canShowVoteCounts = tmp18;
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
    obj.canSubmitVote = tmp31;
    obj.expirationLabel = str;
    obj.hasSelectedAnswer = selectedAnswerIds.size > 0;
    obj.hasVoted = tmp16;
    obj.hasVoteRecorded = someResult;
    obj.isEditingVote = editing;
    obj.isExpired = null == str && message.state === MessageStates.SENT;
    obj.isInteractive = flag;
    obj.isSent = message.state === MessageStates.SENT;
    obj.reactions = obj3;
    obj.selectedAnswerIds = selectedAnswerIds;
    obj.submitting = submitting;
    obj.tapShouldOpenVotersModal = tmp18;
    obj.showResults = showResults;
    return obj;
  }
}
const getPollState = fn(11427).getPollState;
const Constants = fn(1074);
const MessageStates = Constants.MessageStates;
let pollMedia = {
  channelId: Constants.EMPTY_STRING_SNOWFLAKE_ID,
  selectedAnswerIds: new Set(),
  submitting: false,
  editing: false,
  showResults: false,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/polls/chat/formatPollMessageChatData.tsx");

export default function formatPollMessageChatData(poll, arg1, time) {
  let obj = time;
  if (time === undefined) {
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
      let obj1 = flag(layout_type[15]);
      ({ answers, layout_type } = poll);
      obj = { formattedExpirationLabel: tmp };
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
        obj = { count: totalVotes };
        computeBasicPollChatData = intl2.formatToPlainString(tmp4(tmp5[16]).t.XRkuof, obj);
        let _Math = Math;
        const items = [];
        HermesBuiltin.arraySpread(
          answers.map((answer_id) => {
            const tmp = reactionForId(reactions, "" + answer_id.answer_id);
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
          }),
          0,
        );
        const _Math2 = Math;
        closure_14 = HermesBuiltin.apply(items, Math);
        const mapped = answers.map((answer_id) => {
          const combined = "" + answer_id.answer_id;
          const tmp2 = reactionForId(reactions, combined);
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
          pollMedia = { didSelfVote: tmp6, hasVoted, isExpired, isSelected: hasItem, isLeader: tmp4, showResults };
          let tmp7 = isExpired;
          const match = _mod4745.match(pollMedia);
          const withResult = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected");
          const withResult1 = match
            .with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected")
            .with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected");
          const withResult2 = match
            .with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected")
            .with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected")
            .with({ isExpired: true, didSelfVote: true }, () => "loserSelected");
          const withResult3 = match
            .with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected")
            .with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected")
            .with({ isExpired: true, didSelfVote: true }, () => "loserSelected")
            .with({ isExpired: true }, () => "notVoted");
          const withResult4 = match
            .with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected")
            .with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected")
            .with({ isExpired: true, didSelfVote: true }, () => "loserSelected")
            .with({ isExpired: true }, () => "notVoted")
            .with({ didSelfVote: true, isExpired: false }, () => "voted");
          const withResult5 = match
            .with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected")
            .with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected")
            .with({ isExpired: true, didSelfVote: true }, () => "loserSelected")
            .with({ isExpired: true }, () => "notVoted")
            .with({ didSelfVote: true, isExpired: false }, () => "voted")
            .with({ hasVoted: true, isExpired: false }, () => "notVoted");
          const withResult6 = match
            .with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected")
            .with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected")
            .with({ isExpired: true, didSelfVote: true }, () => "loserSelected")
            .with({ isExpired: true }, () => "notVoted")
            .with({ didSelfVote: true, isExpired: false }, () => "voted")
            .with({ hasVoted: true, isExpired: false }, () => "notVoted")
            .with({ isSelected: true }, () => "selected");
          pollMedia = {
            answerId: combined,
            pollMedia: null,
            isSelected: null,
            isVictor: null,
            didSelfVote: null,
            style: null,
            shouldAnimateTransition: null,
            votesPercentage: null,
            votes: null,
          };
          pollMedia = { text: answer_id.poll_media.text, emoji: null, stickerId: null, attachmentIds: null };
          let name = answer_id.poll_media.emoji;
          const obj1 = { animateEmoji: flag };
          let flag2 = obj1.animateEmoji;
          const withResult7 = match
            .with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected")
            .with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected")
            .with({ isExpired: true, didSelfVote: true }, () => "loserSelected")
            .with({ isExpired: true }, () => "notVoted")
            .with({ didSelfVote: true, isExpired: false }, () => "voted")
            .with({ hasVoted: true, isExpired: false }, () => "notVoted")
            .with({ isSelected: true }, () => "selected")
            .with({ isExpired: false, showResults: true }, () => "notVoted");
          if (flag2 === undefined) {
            flag2 = false;
          }
          let num3 = obj1.size;
          if (num3 === undefined) {
            num3 = 48;
          }
          if (null == name) {
            pollMedia.emoji = undefined;
            pollMedia.stickerId = answer_id.poll_media.sticker_id;
            pollMedia.attachmentIds = answer_id.poll_media.attachment_ids;
            pollMedia.pollMedia = pollMedia;
            pollMedia.isSelected = hasItem;
            if (tmp7) {
              tmp7 = tmp4;
            }
            pollMedia.isVictor = tmp7;
            pollMedia.didSelfVote = tmp6;
            pollMedia.style = otherwiseResult;
            let tmp20 = c10;
            if (c10) {
              tmp20 = !useReducedMotion;
            }
            pollMedia.shouldAnimateTransition = tmp20;
            const _Math = Math;
            pollMedia.votesPercentage = Math.round(100 * num2);
            const match1 = tmp8(4745).match(layout_type);
            const str2 = tmp8(4745);
            pollMedia.votes = match1
              .with(tmp8(11720).PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => "(" + num.toLocaleString() + ")")
              .otherwise(() => {
                const intl = flag(layout_type[16]).intl;
                return intl.formatToPlainString(flag(layout_type[16]).t.XRkuof, { count: num });
              });
            return pollMedia;
          } else {
            let flag3 = name.animated;
            if (tmp11) {
              const customEmojiById = EmojiStore.getCustomEmojiById(name.id);
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
            const obj2 = { id: combined1, name: name.name, displayName: null, src: null, animated: null };
            if (null == name.id) {
              let name2 = UnicodeEmojisDefault.convertSurrogateToName(name.name);
            } else {
              name2 = name.name;
            }
            obj2.displayName = name2;
            if (null == name.id) {
              name = name.name;
              let uRL = EmojiUtilsDefault.getURL(name);
            } else {
              const obj3 = { id: name.id, animated: flag2, size: num3 };
              uRL = AvatarUtilsDefault.getEmojiURL(obj3);
            }
            obj2.src = uRL;
            obj2.animated = flag2;
            tmp11 = null == flag3 && null != name.id;
          }
        });
        obj1 = { isExpired, canSubmitVote, hasVoted, isEditingVote, canRemoveVote, isInteractive, showResults };
        let match = tmp4(tmp5[8]).match(obj1);
        let str2 = tmp4(tmp5[8]);
        let withResult = match.with({ isInteractive: false }, () => {});
        let withResult1 = match.with({ isInteractive: false }, () => {}).with({ isExpired: true }, () => {});
        let withResult2 = match
          .with({ isInteractive: false }, () => {})
          .with({ isExpired: true }, () => {})
          .with({ isEditingVote: true }, () => {
            const obj = { label: null, presentation: "button", enabled: null, type: "submit" };
            const intl = util.intl;
            obj.label = intl.string(util.t.JwkNU4);
            obj.enabled = hasSelectedAnswer;
            return obj;
          });
        let withResult3 = match
          .with({ isInteractive: false }, () => {})
          .with({ isExpired: true }, () => {})
          .with({ isEditingVote: true }, () => {
            const obj = { label: null, presentation: "button", enabled: null, type: "submit" };
            const intl = util.intl;
            obj.label = intl.string(util.t.JwkNU4);
            obj.enabled = hasSelectedAnswer;
            return obj;
          })
          .with({ canRemoveVote: true }, () => {
            const obj = { label: null, presentation: "secondaryButton", enabled: true, type: "remove" };
            const intl = flag(layout_type[16]).intl;
            obj.label = intl.string(flag(layout_type[16]).t.XhQEh8);
            return obj;
          });
        let withResult4 = match
          .with({ isInteractive: false }, () => {})
          .with({ isExpired: true }, () => {})
          .with({ isEditingVote: true }, () => {
            const obj = { label: null, presentation: "button", enabled: null, type: "submit" };
            const intl = util.intl;
            obj.label = intl.string(util.t.JwkNU4);
            obj.enabled = hasSelectedAnswer;
            return obj;
          })
          .with({ canRemoveVote: true }, () => {
            const obj = { label: null, presentation: "secondaryButton", enabled: true, type: "remove" };
            const intl = flag(layout_type[16]).intl;
            obj.label = intl.string(flag(layout_type[16]).t.XhQEh8);
            return obj;
          })
          .with({ hasVoted: false, showResults: true }, () => {
            const obj = { label: null, presentation: "secondaryButton", enabled: true, type: "showVotes" };
            const intl = flag(layout_type[16]).intl;
            obj.label = intl.string(flag(layout_type[16]).t.gNj6In);
            return obj;
          });
        tmp4Result = tmp4(tmp5[19]);
        const otherwiseResult = match
          .with({ isInteractive: false }, () => {})
          .with({ isExpired: true }, () => {})
          .with({ isEditingVote: true }, () => {
            const obj = { label: null, presentation: "button", enabled: null, type: "submit" };
            const intl = util.intl;
            obj.label = intl.string(util.t.JwkNU4);
            obj.enabled = hasSelectedAnswer;
            return obj;
          })
          .with({ canRemoveVote: true }, () => {
            const obj = { label: null, presentation: "secondaryButton", enabled: true, type: "remove" };
            const intl = flag(layout_type[16]).intl;
            obj.label = intl.string(flag(layout_type[16]).t.XhQEh8);
            return obj;
          })
          .with({ hasVoted: false, showResults: true }, () => {
            const obj = { label: null, presentation: "secondaryButton", enabled: true, type: "showVotes" };
            const intl = flag(layout_type[16]).intl;
            obj.label = intl.string(flag(layout_type[16]).t.gNj6In);
            return obj;
          })
          .otherwise(() => {
            const obj = { label: null, presentation: "button", enabled: null, type: "submit" };
            const intl = util.intl;
            obj.label = intl.string(util.t.JwkNU4);
            obj.enabled = canSubmitVote;
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
        let obj2 = { isExpired, isInteractive, isEditingVote };
        let match1 = tmp4(tmp5[8]).match(obj2);
        const str3 = tmp4(tmp5[8]);
        let withResult5 = match1.with({ isInteractive: false, isExpired: false }, () => {
          const obj = { label: null, presentation: "text", enabled: false };
          const intl = flag(layout_type[16]).intl;
          obj.label = intl.string(flag(layout_type[16]).t.trrip0);
          return obj;
        });
        let tmp20;
        let withResult6 = match1
          .with({ isInteractive: false, isExpired: false }, () => {
            const obj = { label: null, presentation: "text", enabled: false };
            const intl = flag(layout_type[16]).intl;
            obj.label = intl.string(flag(layout_type[16]).t.trrip0);
            return obj;
          })
          .with({ isEditingVote: true }, () => {
            const obj = { label: null, presentation: "textButton", enabled: true, type: "cancel" };
            const intl = flag(layout_type[16]).intl;
            obj.label = intl.string(flag(layout_type[16]).t["ETE/oC"]);
            return obj;
          });
        if (isInteractive) {
          if (!isExpired) {
            if (!hasVoted) {
              if (!showResults) {
                let obj3 = { label: null, presentation: "textButton", enabled: true, type: "showVotes" };
                const intl4 = tmp4(tmp5[16]).intl;
                obj3.label = intl4.string(tmp4(tmp5[16]).t["/KHAUF"]);
                tmp20 = obj3;
              }
            }
          }
        }
        const allow_multiselect = poll.allow_multiselect;
        const otherwiseResult1 = match1
          .with({ isInteractive: false, isExpired: false }, () => {
            const obj = { label: null, presentation: "text", enabled: false };
            const intl = flag(layout_type[16]).intl;
            obj.label = intl.string(flag(layout_type[16]).t.trrip0);
            return obj;
          })
          .with({ isEditingVote: true }, () => {
            const obj = { label: null, presentation: "textButton", enabled: true, type: "cancel" };
            const intl = flag(layout_type[16]).intl;
            obj.label = intl.string(flag(layout_type[16]).t["ETE/oC"]);
            return obj;
          })
          .otherwise(() => ({
            label,
            secondaryLabel: expirationLabel,
            accessibilityHint,
            presentation: "text",
            enabled: true,
            type: "showVoterDetails",
          }));
        const obj4 = { isInteractive, isExpired, canSelectMultipleAnswers: allow_multiselect };
        const match2 = tmp4(tmp5[8]).match(obj4);
        const str4 = tmp4(tmp5[8]);
        let withResult7 = match2.with({ isInteractive: false }, () => {});
        const withResult8 = match2.with({ isInteractive: false }, () => {}).with({ isExpired: true }, () => {});
        const obj5 = {
          question: poll.question,
          promptLabel: match2
            .with({ isInteractive: false }, () => {})
            .with({ isExpired: true }, () => {})
            .with({ canSelectMultipleAnswers: true }, () => {
              const intl = flag(layout_type[16]).intl;
              return intl.string(flag(layout_type[16]).t.yCXvxa);
            })
            .otherwise(() => {
              const intl = flag(layout_type[16]).intl;
              return intl.string(flag(layout_type[16]).t["9Y2wKO"]);
            }),
          answers: mapped,
          answersInteraction: null,
          answerTapAccessibilityLabel: null,
          layoutType: null,
          resources: null,
          containerStyle: "normal",
          primaryAction: null,
          isInteractive: null,
          canTapAnswers: null,
          canSelectMultipleAnswers: null,
          hasSelectedAnswer: null,
          canShowVoteCounts: null,
          hasVoted: null,
          isExpired: null,
          myAvatarUrl: null,
          secondaryAction: null,
          tertiaryAction: null,
        };
        const withResult9 = match2
          .with({ isInteractive: false }, () => {})
          .with({ isExpired: true }, () => {})
          .with({ canSelectMultipleAnswers: true }, () => {
            const intl = flag(layout_type[16]).intl;
            return intl.string(flag(layout_type[16]).t.yCXvxa);
          });
        const obj6 = { tapShouldOpenVotersModal, canTapAnswers, canSelectMultipleAnswers: allow_multiselect };
        const match3 = tmp4(tmp5[8]).match(obj6);
        const str5 = tmp4(tmp5[8]);
        const withResult10 = match3.with(
          { tapShouldOpenVotersModal: true },
          () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST,
        );
        const withResult11 = match3
          .with({ tapShouldOpenVotersModal: true }, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST)
          .with({ canTapAnswers: false }, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST);
        const withResult12 = match3
          .with({ tapShouldOpenVotersModal: true }, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST)
          .with({ canTapAnswers: false }, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST)
          .with(
            { canSelectMultipleAnswers: false },
            () => flag(layout_type[20]).PollChatAnswerInteractionType.RADIO_BUTTONS,
          );
        obj5.answersInteraction = match3
          .with({ tapShouldOpenVotersModal: true }, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST)
          .with({ canTapAnswers: false }, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST)
          .with(
            { canSelectMultipleAnswers: false },
            () => flag(layout_type[20]).PollChatAnswerInteractionType.RADIO_BUTTONS,
          )
          .with(
            { canSelectMultipleAnswers: true },
            () => flag(layout_type[20]).PollChatAnswerInteractionType.CHECKBOXES,
          )
          .exhaustive();
        let tmp21;
        if (tapShouldOpenVotersModal) {
          tmp21 = stringResult;
        }
        obj5.answerTapAccessibilityLabel = tmp21;
        obj5.layoutType = layout_type;
        const obj7 = { theme: str, layoutType: layout_type };
        obj5.resources = useReducedMotion(tmp5[21])(obj7);
        obj5.primaryAction = otherwiseResult;
        obj5.isInteractive = isInteractive;
        obj5.canTapAnswers = canTapAnswers;
        obj5.canSelectMultipleAnswers = allow_multiselect;
        obj5.hasSelectedAnswer = hasSelectedAnswer;
        obj5.canShowVoteCounts = canShowVoteCounts;
        obj5.hasVoted = hasVoted;
        obj5.isExpired = isExpired;
        obj5.myAvatarUrl = avatarUrl;
        obj5.secondaryAction = otherwiseResult1;
        obj5.tertiaryAction = tmp20;
        return obj5;
      }
    }
  }
}
export { reactionForId };
export const isPollMessageDirectlyInteractive = function isPollMessageDirectlyInteractive(poll) {
  let tmp = null == poll.poll;
  if (!tmp) {
    tmp = MessageStore.getMessage(poll.channel_id, poll.id) === poll;
  }
  return tmp;
};
export { computeBasicPollChatData };
