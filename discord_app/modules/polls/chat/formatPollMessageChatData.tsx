// discord_app/modules/polls/chat/formatPollMessageChatData.tsx
import Constants2 from "../../../../discord_common/js/shared/Constants.tsx";
import intl5 from "../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import CommunicationDisabledUtils from "../../guild_communication_disabled/CommunicationDisabledUtils.tsx";
import AutomodPermissionUtils from "../../guild_automod/AutomodPermissionUtils.tsx";
import UnicodeEmojisDefault from "../../emojis/UnicodeEmojis.tsx";
import EmojiUtilsDefault from "../../../utils/EmojiUtils.tsx";
import merged5 from "../../../../_runtime/05081_merged5.js";
import useFormattedExpirationLabel from "useFormattedExpirationLabel.tsx";
import PollsInteractionStore from "../PollsInteractionStore.tsx";
import PollLayoutTypes from "../../../../discord_common/js/shared/shared-constants/PollLayoutTypes.tsx";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import EmojiStore from "../../emojis/EmojiStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let EMPTY_STRING_SNOWFLAKE_ID;
let c10;
let set;
function reactionForId(reactions, combined) {
  const iter = reactions[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let id;
    let tmp2 = nextResult;
    if (typeof nextResult.emoji.id === "number") {
      let _HermesInternal = HermesInternal;
      id = "" + tmp2.emoji.id;
    } else {
      id = tmp2.emoji.id;
    }
    if (id === combined) {
      iter.return();
      return nextResult;
    }
  }
}
function computeBasicPollChatData(message, arg1, arg2) {
  let editing;
  let result1;
  let selectedAnswerIds;
  let showResults;
  let submitting;
  let tmp30;
  obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let formattedExpirationLabel = obj.formattedExpirationLabel;
  const poll = message.poll;
  if (null != poll) {
    let str = "";
    if (message.state === constants.SENT) {
      if (formattedExpirationLabel == null) {
        const obj2 = useFormattedExpirationLabel;
        formattedExpirationLabel = obj2.formatExpirationLabel(poll.expiry);
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
    const reactions = message.reactions;
    let flag = true;
    let obj3 = reactions;
    const tmp8 = null == message.poll || MessageStore.getMessage(message.channel_id, message.id) === message;
    if (!tmp8) {
      message = MessageStore.getMessage(message.channel_id, message.id);
      let reactions1;
      const tmp12 = !message.isSearchHit && null != message;
      if (message != null) {
        reactions1 = message.reactions;
      }
      if (reactions1 == null) {
        reactions1 = reactions;
      }
      obj3 = reactions1;
      flag = tmp12;
    }
    const someResult = obj3.some((me_vote) => true === me_vote.me_vote);
    const tmp18 = (!editing && someResult) || (null == str && message.state === constants.SENT) || showResults;
    let tmp19 = tmp2 && flag;
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
    const obj4 = AutomodPermissionUtils;
    const result = obj4.hasAutomodQuarantinedProfile(selfMember);
    const obj6 = {
      poll,
      canTapAnswers: tmp19,
      canRemoveVote: tmp30,
      canShowVoteCounts: tmp18,
      canSubmitVote:
        !submitting &&
        selectedAnswerIds.size > 0 &&
        !(!editing && someResult) &&
        message.state === constants.SENT &&
        !result &&
        !result1,
      expirationLabel: str,
      hasSelectedAnswer: selectedAnswerIds.size > 0,
      hasVoted: !editing && someResult,
      hasVoteRecorded: someResult,
      isEditingVote: editing,
      isExpired: null == str && message.state === constants.SENT,
      isInteractive: flag,
      isSent: message.state === constants.SENT,
      reactions: obj3,
      selectedAnswerIds,
      submitting,
      tapShouldOpenVotersModal: tmp18,
      showResults,
    };
    tmp30 = tmp16;
    const obj5 = CommunicationDisabledUtils;
    result1 = obj5.isMemberCommunicationDisabled(selfMember);
    if (!editing && someResult) {
      tmp30 = tmp2;
    }
    if (tmp30) {
      tmp30 = !tmp5;
    }
    return obj6;
  }
}
const getPollState = PollsInteractionStore.getPollState;
({ MessageStates: c10, EMPTY_STRING_SNOWFLAKE_ID } = Constants);
const ThemeTypes = Constants2.ThemeTypes;
let obj = {
  channelId: EMPTY_STRING_SNOWFLAKE_ID,
  selectedAnswerIds: set,
  submitting: false,
  editing: false,
  showResults: false,
};
set = new Set();
let result = size.fileFinishedImporting("modules/polls/chat/formatPollMessageChatData.tsx");

export default function formatPollMessageChatData(poll, arg1) {
  let accessibilityHint;
  let answers;
  let c10;
  let c9;
  let canRemoveVote;
  let canShowVoteCounts;
  let canSubmitVote;
  let canTapAnswers;
  let closure_14;
  let expirationLabel;
  let intl4;
  let isEditingVote;
  let isExpired;
  let isInteractive;
  let layout_type;
  let reactions;
  let showResults;
  let tapShouldOpenVotersModal;
  let tmp23;
  let withResult13;
  let withResult9;
  obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.animateEmoji;
  if (flag === undefined) {
    flag = false;
  }
  let DARK = obj.theme;
  if (DARK === undefined) {
    let tmp2 = showResults;
    DARK = showResults.DARK;
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
  let label;
  computeBasicPollChatData = undefined;
  let c15;
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
      let tmp6 = flag;
      let tmp7 = layout_type;
      let obj2 = flag(layout_type[16]);
      ({ answers, layout_type } = poll);
      let obj3 = { formattedExpirationLabel: tmp3 };
      const avatarUrl = obj2.getAvatarUrl(currentUser, guildId);
      const tmp10 = computeBasicPollChatData(poll, arg1, obj3);
      if (null != tmp10) {
        let stringResult;
        ({ canTapAnswers, canSubmitVote } = tmp10);
        ({ expirationLabel, canRemoveVote, canShowVoteCounts } = tmp10);
        if (undefined === expirationLabel) {
          let intl = tmp6(tmp7[17]).intl;
          expirationLabel = intl.string(tmp6(tmp7[17]).t["e+J3JZ"]);
        }
        hasSelectedAnswer = tmp10.hasSelectedAnswer;
        hasVoted = tmp10.hasVoted;
        ({ isEditingVote, isExpired } = tmp10);
        ({ isInteractive, reactions } = tmp10);
        ({ selectedAnswerIds: c9, submitting: c10, tapShouldOpenVotersModal, showResults } = tmp10);
        const tmp6Result = tmp6(tmp7[18]);
        totalVotes = tmp6Result.getTotalVotes(reactions);
        const intl2 = tmp6(tmp7[17]).intl;
        let obj4 = { count: totalVotes };
        label = intl2.formatToPlainString(tmp6(tmp7[17]).t.XRkuof, obj4);
        let tmp12 = globalThis;
        const _Math = Math;
        const items = [];
        let num = 0;
        HermesBuiltin.arraySpread(
          items,
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
        computeBasicPollChatData = HermesBuiltin.apply(max, items, Math);
        const mapped = answers.map((answer_id) => {
          let name;
          let obj3;
          let otherwiseResult;
          let tmp11;
          let tmp20;
          let uRL;
          let withResult8;
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
          const hasItem = set.has(combined);
          let tmp6 = hasVoted;
          if (tmp6) {
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
          const str = merged5;
          const match = str.match(obj);
          const withResult = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected");
          const withResult1 = withResult.with(
            { isExpired: true, isLeader: true, didSelfVote: false },
            () => "victorNotSelected",
          );
          const withResult2 = withResult1.with({ isExpired: true, didSelfVote: true }, () => "loserSelected");
          const withResult3 = withResult2.with({ isExpired: true }, () => "notVoted");
          const withResult4 = withResult3.with({ didSelfVote: true, isExpired: false }, () => "voted");
          const withResult5 = withResult4.with({ hasVoted: true, isExpired: false }, () => "notVoted");
          const withResult6 = withResult5.with({ isSelected: true }, () => "selected");
          const obj2 = {
            answerId: combined,
            pollMedia: obj3,
            isSelected: hasItem,
            isVictor: tmp7,
            didSelfVote: tmp6,
            style: otherwiseResult,
            shouldAnimateTransition: tmp20,
            votesPercentage: Math.round(100 * num2),
            votes: withResult8.otherwise(() => {
              const intl = flag(layout_type[17]).intl;
              obj = { count: num };
              return intl.formatToPlainString(flag(layout_type[17]).t.XRkuof, obj);
            }),
          };
          const emoji = answer_id.poll_media.emoji;
          const obj4 = { animateEmoji: flag };
          let flag2 = obj4.animateEmoji;
          obj3 = {
            text: answer_id.poll_media.text,
            emoji: tmp11,
            stickerId: answer_id.poll_media.sticker_id,
            attachmentIds: answer_id.poll_media.attachment_ids,
          };
          const withResult7 = withResult6.with({ isExpired: false, showResults: true }, () => "notVoted");
          otherwiseResult = withResult7.otherwise(() => "normalVote");
          if (flag2 === undefined) {
            flag2 = false;
          }
          let num3 = obj4.size;
          if (num3 === undefined) {
            num3 = 48;
          }
          tmp11 = undefined;
          if (null != emoji) {
            let flag3 = emoji.animated;
            const tmp12 = null == flag3 && null != emoji.id;
            if (tmp12) {
              const customEmojiById = EmojiStore.getCustomEmojiById(emoji.id);
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
            if (null != emoji.id) {
              const _HermesInternal = HermesInternal;
              combined1 = "" + emoji.id;
            }
            const obj5 = { id: combined1, name: emoji.name, displayName: name, src: uRL, animated: flag2 };
            if (null == emoji.id) {
              const obj15 = UnicodeEmojisDefault;
              name = obj15.convertSurrogateToName(emoji.name);
            } else {
              name = emoji.name;
            }
            if (null == emoji.id) {
              const obj18 = EmojiUtilsDefault;
              uRL = obj18.getURL(emoji.name);
            } else {
              const obj6 = { id: emoji.id, animated: flag2, size: num3 };
              const obj16 = AvatarUtilsDefault;
              uRL = obj16.getEmojiURL(obj6);
            }
            tmp11 = obj5;
          }
          if (tmp7) {
            tmp7 = tmp4;
          }
          tmp20 = c10 && !useReducedMotion;
          const str2 = merged5;
          const match1 = str2.match(layout_type);
          withResult8 = match1.with(
            PollLayoutTypes.PollLayoutTypes.IMAGE_ONLY_ANSWERS,
            () => "(" + num.toLocaleString() + ")",
          );
          return obj2;
        });
        let str = tmp6(tmp7[9]);
        let obj5 = { isExpired, canSubmitVote, hasVoted, isEditingVote, canRemoveVote, isInteractive, showResults };
        let match = str.match(obj5);
        let withResult = match.with({ isInteractive: false }, () => {});
        let withResult1 = withResult.with({ isExpired: true }, () => {});
        let withResult2 = withResult1.with({ isEditingVote: true }, () => {
          let intl;
          obj = {
            label: intl.string(intl5.t.JwkNU4),
            presentation: "button",
            enabled: hasSelectedAnswer,
            type: "submit",
          };
          intl = intl5.intl;
          return obj;
        });
        let withResult3 = withResult2.with({ canRemoveVote: true }, () => {
          let intl;
          obj = {
            label: intl.string(flag(layout_type[17]).t.XhQEh8),
            presentation: "secondaryButton",
            enabled: true,
            type: "remove",
          };
          intl = flag(layout_type[17]).intl;
          return obj;
        });
        let withResult4 = withResult3.with({ hasVoted: false, showResults: true }, () => {
          let intl;
          obj = {
            label: intl.string(flag(layout_type[17]).t.gNj6In),
            presentation: "secondaryButton",
            enabled: true,
            type: "showVotes",
          };
          intl = flag(layout_type[17]).intl;
          return obj;
        });
        let otherwiseResult = withResult4.otherwise(() => {
          let intl;
          obj = { label: intl.string(intl5.t.JwkNU4), presentation: "button", enabled: canSubmitVote, type: "submit" };
          intl = intl5.intl;
          return obj;
        });
        const tmp6Result2 = tmp6(tmp7[20]);
        const isIOSResult = tmp6Result2.isIOS();
        const intl3 = tmp6(tmp7[17]).intl;
        const string = intl3.string;
        const t = tmp6(tmp7[17]).t;
        if (isIOSResult) {
          stringResult = string(t["PVATM/"]);
        } else {
          stringResult = string(t.cHfFql);
        }
        c15 = stringResult;
        let str2 = tmp6(tmp7[9]);
        let obj6 = { isExpired, isInteractive, isEditingVote };
        let match1 = str2.match(obj6);
        let withResult5 = match1.with({ isInteractive: false, isExpired: false }, () => {
          let intl;
          obj = { label: intl.string(flag(layout_type[17]).t.trrip0), presentation: "text", enabled: false };
          intl = flag(layout_type[17]).intl;
          return obj;
        });
        let withResult6 = withResult5.with({ isEditingVote: true }, () => {
          let intl;
          obj = {
            label: intl.string(flag(layout_type[17]).t["ETE/oC"]),
            presentation: "textButton",
            enabled: true,
            type: "cancel",
          };
          intl = flag(layout_type[17]).intl;
          return obj;
        });
        let tmp22;
        const otherwiseResult1 = withResult6.otherwise(() => ({
          label,
          secondaryLabel: expirationLabel,
          accessibilityHint,
          presentation: "text",
          enabled: true,
          type: "showVoterDetails",
        }));
        if (isInteractive) {
          if (!isExpired) {
            if (!hasVoted) {
              if (!showResults) {
                const obj7 = {
                  label: intl4.string(tmp6(tmp7[17]).t["/KHAUF"]),
                  presentation: "textButton",
                  enabled: true,
                  type: "showVotes",
                };
                intl4 = tmp6(tmp7[17]).intl;
                tmp22 = obj7;
              }
            }
          }
        }
        const allow_multiselect = poll.allow_multiselect;
        const obj8 = { isInteractive, isExpired, canSelectMultipleAnswers: allow_multiselect };
        const str3 = tmp6(tmp7[9]);
        const match2 = str3.match(obj8);
        let withResult7 = match2.with({ isInteractive: false }, () => {});
        let withResult8 = withResult7.with({ isExpired: true }, () => {});
        const obj9 = {
          question: poll.question,
          promptLabel: withResult9.otherwise(() => {
            const intl = flag(layout_type[17]).intl;
            return intl.string(flag(layout_type[17]).t["9Y2wKO"]);
          }),
          answers: mapped,
          answersInteraction: withResult13.exhaustive(),
          answerTapAccessibilityLabel: tmp23,
          layoutType: layout_type,
          resources: useReducedMotion(tmp7[22])(obj11),
          containerStyle: "normal",
          primaryAction: otherwiseResult,
          isInteractive,
          canTapAnswers,
          canSelectMultipleAnswers: allow_multiselect,
          hasSelectedAnswer,
          canShowVoteCounts,
          hasVoted,
          isExpired,
          myAvatarUrl: avatarUrl,
          secondaryAction: otherwiseResult1,
          tertiaryAction: tmp22,
        };
        const obj10 = { tapShouldOpenVotersModal, canTapAnswers, canSelectMultipleAnswers: allow_multiselect };
        withResult9 = withResult8.with({ canSelectMultipleAnswers: true }, () => {
          const intl = flag(layout_type[17]).intl;
          return intl.string(flag(layout_type[17]).t.yCXvxa);
        });
        const str4 = tmp6(tmp7[9]);
        const match3 = str4.match(obj10);
        const withResult10 = match3.with(
          { tapShouldOpenVotersModal: true },
          () => flag(layout_type[21]).PollChatAnswerInteractionType.LIST,
        );
        const withResult11 = withResult10.with(
          { canTapAnswers: false },
          () => flag(layout_type[21]).PollChatAnswerInteractionType.LIST,
        );
        const withResult12 = withResult11.with(
          { canSelectMultipleAnswers: false },
          () => flag(layout_type[21]).PollChatAnswerInteractionType.RADIO_BUTTONS,
        );
        tmp23 = undefined;
        withResult13 = withResult12.with(
          { canSelectMultipleAnswers: true },
          () => flag(layout_type[21]).PollChatAnswerInteractionType.CHECKBOXES,
        );
        if (tapShouldOpenVotersModal) {
          tmp23 = stringResult;
        }
        return obj9;
      }
    }
  }
}
export { reactionForId };
export const isPollMessageDirectlyInteractive = function isPollMessageDirectlyInteractive(poll) {
  const tmp = null == poll.poll || MessageStore.getMessage(poll.channel_id, poll.id) === poll;
  return tmp;
};
export { computeBasicPollChatData };
