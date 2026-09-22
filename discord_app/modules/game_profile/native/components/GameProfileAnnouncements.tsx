// discord_app/modules/game_profile/native/components/GameProfileAnnouncements.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import DateUtils from "../../../../utils/DateUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import CustomMarkupAll from "../../../markup/CustomMarkup.native.tsx";
import useIsWindowLargeDefault from "../../../screen/native/useIsWindowLarge.tsx";
import GameProfileActionCreatorsDefault from "../../GameProfileActionCreators.native.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import GameProfileSkeleton from "GameProfileSkeleton.tsx";
import GameProfileSkeletonCardRowDefault from "GameProfileSkeletonCardRow.tsx";
import AnnouncementMessageUtils from "../../AnnouncementMessageUtils.tsx";
import ImageWithPlaceholder from "../../../../components_native/common/ImageWithPlaceholder.tsx";
import ReactionIcon from "../../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import navigateToGameAnnouncementDefault from "../../navigateToGameAnnouncement.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const GameProfileSkeletonDefault = GameProfileSkeleton;

require = fn;
function EmbedAnnouncementCard(message) {
  message = message.message;
  ({ onPress: importDefault, guildId, channelId } = message);
  const tmp = closure_13();
  if (null == parser) {
    parser = CustomMarkupAll.getParser();
  }
  const media = message.media;
  let proxyUrl;
  if (media != null) {
    proxyUrl = media.proxyUrl;
  }
  if (proxyUrl == null) {
    const media2 = message.media;
    let url;
    if (media2 != null) {
      url = media2.url;
    }
    proxyUrl = url;
  }
  let posterUrl = null;
  if (null != proxyUrl) {
    posterUrl = AnnouncementMessageUtils.getPosterUrl(proxyUrl, 160, 120);
  }
  if (posterUrl == null) {
    posterUrl = proxyUrl;
  }
  const embedSource = message.embedSource;
  if (null == embedSource) {
    return null;
  } else {
    let tmp10;
    if (null != embedSource.color) {
      const obj3 = { borderLeftColor: embedSource.color };
      tmp10 = obj3;
    }
    const obj4 = {
      style: tmp.card,
      onPress() {
        return importDefault(message.id);
      },
      accessibilityRole: "button",
      accessibilityLabel: message.title,
      children: null,
    };
    const obj5 = { style: tmp.cardBody, children: null };
    let tmp11Result = null != embedSource.url;
    if (tmp11Result) {
      const obj6 = { variant: "text-xs/medium", color: "text-link", lineClamp: 1, children: embedSource.url };
      tmp11Result = React7(Text_Text.Text, obj6);
    }
    const items = [tmp11Result];
    const obj7 = { style: null, children: null };
    const items1 = [tmp.embedContentArea, tmp10];
    obj7.style = items1;
    let tmp13Result = null != embedSource.authorName;
    if (tmp13Result) {
      const obj8 = { style: tmp.embedAuthorRow, children: null };
      let tmp11Result6 = null != embedSource.authorIconUrl;
      if (tmp11Result6) {
        const obj9 = { source: null, style: null };
        const obj10 = { uri: embedSource.authorIconUrl };
        obj9.source = obj10;
        obj9.style = tmp.embedAuthorIcon;
        tmp11Result6 = React7(hasOwnProperty, obj9);
      }
      const items2 = [tmp11Result6];
      const obj11 = {
        variant: "text-xs/semibold",
        color: "text-strong",
        lineClamp: 1,
        children: embedSource.authorName,
      };
      items2[1] = React7(Text_Text.Text, obj11);
      obj8.children = items2;
      tmp13Result = closure_1_10(timestampProducer, obj8);
    }
    const items3 = [tmp13Result, , , ,];
    let tmp11Result7 = null != message.media && null != posterUrl;
    if (tmp11Result7) {
      const obj12 = { style: tmp.embedMedia, children: null };
      const obj13 = {
        uri: posterUrl,
        placeholder: message.media.placeholder,
        placeholderVersion: message.media.placeholderVersion,
        style: tmp.mediaImage,
      };
      obj12.children = React7(ImageWithPlaceholder.ImageWithPlaceholder, obj13);
      tmp11Result7 = React7(timestampProducer, obj12);
    }
    items3[1] = tmp11Result7;
    let tmp11Result8 = null != message.title;
    if (tmp11Result8) {
      const obj14 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 2, children: null };
      const obj15 = { guildId, channelId };
      obj14.children = tmp4(message.title, true, obj15);
      tmp11Result8 = React7(Text_Text.Text, obj14);
    }
    items3[2] = tmp11Result8;
    let tmp11Result9 = message.body.length > 0;
    if (tmp11Result9) {
      obj16 = { variant: "text-sm/medium", color: "text-default", lineClamp: 3, children: null };
      const obj17 = { guildId, channelId };
      obj16.children = tmp4(message.body, true, obj17);
      tmp11Result9 = React7(Text_Text.Text, obj16);
    }
    items3[3] = tmp11Result9;
    const obj18 = { style: tmp.metadataRow, children: null };
    let tmp11Result10 = null != embedSource.providerIconUrl;
    if (tmp11Result10) {
      const obj19 = { source: null, style: null };
      const obj20 = { uri: embedSource.providerIconUrl };
      obj19.source = obj20;
      obj19.style = tmp.embedProviderIcon;
      tmp11Result10 = React7(hasOwnProperty, obj19);
    }
    const items4 = [tmp11Result10, ,];
    let str2 = "";
    if (null != embedSource.providerName) {
      const _HermesInternal = HermesInternal;
      str2 = "" + embedSource.providerName + " \u00B7 ";
    }
    const obj21 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const items5 = [str2];
    const _Date = Date;
    const date = new Date(message.timestamp);
    items5[1] = DateUtils.dateFormat(date, "LL");
    obj21.children = items5;
    items4[1] = closure_1_10(Text_Text.Text, obj21);
    let tmp13Result2 = message.reactionCount > 0;
    if (tmp13Result2) {
      const obj22 = { style: tmp.reactionInfo, children: null };
      const obj23 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
      const items6 = [React7(ReactionIcon.ReactionIcon, obj23)];
      let tmp45 = null != obj16;
      if (tmp45) {
        tmp45 = obj16.locale === util.intl.currentLocale;
      }
      if (!tmp45) {
        const obj24 = { locale: util.intl.currentLocale, format: null };
        const _Intl = Intl;
        const numberFormat = new Intl.NumberFormat(util.intl.currentLocale);
        obj24.format = numberFormat;
        obj16 = obj24;
      }
      const obj25 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const format = obj16.format;
      obj25.children = format.format(message.reactionCount);
      items6[1] = React7(Text_Text.Text, obj25);
      obj22.children = items6;
      tmp13Result2 = closure_1_10(timestampProducer, obj22);
    }
    items4[2] = tmp13Result2;
    obj18.children = items4;
    items3[4] = closure_1_10(timestampProducer, obj18);
    obj7.children = items3;
    items[1] = closure_1_10(timestampProducer, obj7);
    obj5.children = items;
    obj4.children = closure_1_10(timestampProducer, obj5);
    return React7(React5, obj4);
  }
}
function MessageAnnouncementCard(message) {
  message = message.message;
  ({ onPress: importDefault, guildId, channelId } = message);
  const tmp = closure_13();
  if (null == parser) {
    parser = CustomMarkupAll.getParser();
  }
  const media = message.media;
  let proxyUrl;
  if (media != null) {
    proxyUrl = media.proxyUrl;
  }
  if (proxyUrl == null) {
    const media2 = message.media;
    let url;
    if (media2 != null) {
      url = media2.url;
    }
    proxyUrl = url;
  }
  let posterUrl = null;
  if (null != proxyUrl) {
    posterUrl = AnnouncementMessageUtils.getPosterUrl(proxyUrl, 160, 120);
  }
  if (posterUrl == null) {
    posterUrl = proxyUrl;
  }
  const obj3 = {
    style: tmp.card,
    onPress() {
      return importDefault(message.id);
    },
    accessibilityRole: "button",
    accessibilityLabel: message.title,
    children: null,
  };
  let tmp12 = null != message.media;
  if (tmp12) {
    tmp12 = null != posterUrl;
  }
  if (tmp12) {
    const obj4 = { style: tmp.smallCardMedia, children: null };
    const obj5 = {
      uri: posterUrl,
      placeholder: message.media.placeholder,
      placeholderVersion: message.media.placeholderVersion,
      style: tmp.mediaImage,
    };
    obj4.children = React7(ImageWithPlaceholder.ImageWithPlaceholder, obj5);
    tmp12 = React7(timestampProducer, obj4);
  }
  const items = [tmp12];
  const obj6 = { style: tmp.cardBody, children: null };
  let tmp18 = null != message.title;
  if (tmp18) {
    const obj7 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 2, children: null };
    const obj8 = { guildId, channelId };
    obj7.children = tmp4(message.title, true, obj8);
    tmp18 = React7(Text_Text.Text, obj7);
  }
  const items1 = [tmp18, ,];
  let tmp22 = message.body.length > 0;
  if (tmp22) {
    const obj9 = { variant: "text-sm/medium", color: "text-default", lineClamp: 3, children: null };
    const obj10 = { guildId, channelId };
    obj9.children = tmp4(message.body, true, obj10);
    tmp22 = React7(Text_Text.Text, obj9);
  }
  items1[1] = tmp22;
  const obj11 = { style: tmp.metadataRow, children: null };
  const obj12 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const obj13 = DateUtils;
  obj12.children = obj13.dateFormat(new Date(message.timestamp), "LL");
  const items2 = [React7(Text_Text.Text, obj12)];
  let tmp10Result = message.reactionCount > 0;
  if (tmp10Result) {
    const obj14 = { style: tmp.reactionInfo, children: null };
    const obj15 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
    const items3 = [React7(ReactionIcon.ReactionIcon, obj15)];
    let tmp33 = null != obj16;
    if (tmp33) {
      tmp33 = obj16.locale === util.intl.currentLocale;
    }
    if (!tmp33) {
      obj16 = { locale: util.intl.currentLocale, format: null };
      const _Intl = Intl;
      const numberFormat = new Intl.NumberFormat(util.intl.currentLocale);
      obj16.format = numberFormat;
    }
    const obj17 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const format = obj16.format;
    obj17.children = format.format(message.reactionCount);
    items3[1] = React7(Text_Text.Text, obj17);
    obj14.children = items3;
    tmp10Result = closure_1_10(timestampProducer, obj14);
  }
  items2[1] = tmp10Result;
  obj11.children = items2;
  items1[2] = closure_1_10(timestampProducer, obj11);
  obj6.children = items1;
  items[1] = closure_1_10(timestampProducer, obj6);
  obj3.children = items;
  return closure_1_10(React5, obj3);
}
function PollAnnouncementCard(message) {
  message = message.message;
  const onPress = message.onPress;
  const tmp = closure_13();
  const pollAnswerOption = tmp;
  const poll = message.poll;
  if (null == poll) {
    return null;
  } else {
    const answers = poll.answers;
    const substr = answers.slice(0, 3);
    const diff = poll.answers.length - substr.length;
    const obj2 = {
      style: tmp.card,
      onPress() {
        return onPress(message.id);
      },
      accessibilityRole: "button",
      accessibilityLabel: poll.question.text,
      children: null,
    };
    const obj3 = { style: tmp.cardBody, children: null };
    const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: poll.question.text };
    const items = [closure_9(message(4753).Text, obj4), ,];
    const obj5 = { style: tmp.pollAnswers, children: null };
    const items1 = [
      substr.map((poll_media) => {
        const obj = { style: pollAnswerOption.pollAnswerOption, children: null };
        let str = poll_media.poll_media.text;
        if (str == null) {
          str = "";
        }
        obj.children = React7(Text_Text.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          lineClamp: 1,
          children: str,
        });
        return React7(timestampProducer, obj, poll_media.answer_id);
      }),
    ];
    let tmp9Result = diff > 0;
    if (tmp9Result) {
      let obj = { variant: "text-xs/medium", color: "text-muted", style: tmp.pollMoreOptions, children: null };
      const intl = tmp13(1115).intl;
      const obj6 = { count: diff };
      obj.children = intl.format(tmp13(1115).t["mv/nIa"], obj6);
      tmp9Result = closure_9(tmp13(4753).Text, obj);
    }
    items1[1] = tmp9Result;
    obj5.children = items1;
    items[1] = closure_10(closure_6, obj5);
    const obj7 = { style: tmp.metadataRow, children: null };
    const obj8 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl2 = tmp13(1115).intl;
    const obj9 = { createdAt: null, expiryLabel: null };
    const _Date = Date;
    const date = new Date(message.timestamp);
    obj9.createdAt = date;
    obj9.expiryLabel = message(9037).getPollExpiryLabel(poll);
    obj8.children = intl2.format(message(1115).t.t0FTsH, obj9);
    obj7.children = closure_9(message(4753).Text, obj8);
    items[2] = closure_9(closure_6, obj7);
    obj3.children = items;
    obj2.children = closure_10(closure_6, obj3);
    return closure_9(closure_7, obj2);
  }
}
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire, Pressable: closure_7 } = get_ActivityIndicator);
const MAX_VISIBLE_ANNOUNCEMENTS = fn(8990).MAX_VISIBLE_ANNOUNCEMENTS;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let closure_11 = null;
const createStyles = fn(4757);
let obj = {
  smallCardsScroller: { marginHorizontal: -nativeDefault.space.PX_16, overflow: "visible" },
  skeletonCardsScroller: null,
  smallCardsContainer: null,
  skeletonCardsContainer: null,
  card: null,
  cardBody: null,
  smallCardMedia: null,
  mediaImage: null,
  metadataRow: null,
  reactionInfo: null,
  embedContentArea: null,
  embedAuthorRow: null,
  embedAuthorIcon: null,
  embedProviderIcon: null,
  embedMedia: null,
  pollAnswers: null,
  pollAnswerOption: null,
  pollMoreOptions: null,
  skeletonCard: null,
  skeletonCardLarge: null,
  skeletonAnimationRoot: null,
  skeletonCardImage: null,
  skeletonCardBody: null,
  skeletonCardContent: null,
  skeletonCardMetadata: null,
};
let obj3 = { marginHorizontal: -nativeDefault.space.PX_16, overflow: "visible" };
obj.skeletonCardsScroller = { marginHorizontal: -nativeDefault.space.PX_16 };
let obj4 = { marginHorizontal: -nativeDefault.space.PX_16 };
obj.smallCardsContainer = {
  flexDirection: "row",
  gap: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_16,
};
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
obj.skeletonCardsContainer = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj6 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj.card = {
  flexDirection: "column",
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  width: 160,
};
let obj7 = {
  flexDirection: "column",
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  width: 160,
};
obj.cardBody = {
  flex: 1,
  flexDirection: "column",
  gap: nativeDefault.space.PX_4,
  overflow: "hidden",
  padding: nativeDefault.space.PX_12,
};
obj.smallCardMedia = { height: 120, overflow: "hidden", flexShrink: 0 };
obj.mediaImage = { width: "100%", height: "100%", resizeMode: "cover" };
let obj8 = {
  flex: 1,
  flexDirection: "column",
  gap: nativeDefault.space.PX_4,
  overflow: "hidden",
  padding: nativeDefault.space.PX_12,
};
obj.metadataRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: "auto" };
let obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: "auto" };
obj.reactionInfo = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.embedContentArea = {
  flex: 1,
  gap: nativeDefault.space.PX_4,
  borderLeftWidth: 4,
  borderLeftColor: nativeDefault.colors.BORDER_SUBTLE,
  borderTopLeftRadius: nativeDefault.radii.xs,
  borderBottomLeftRadius: nativeDefault.radii.xs,
  paddingLeft: nativeDefault.space.PX_8,
};
let obj11 = {
  flex: 1,
  gap: nativeDefault.space.PX_4,
  borderLeftWidth: 4,
  borderLeftColor: nativeDefault.colors.BORDER_SUBTLE,
  borderTopLeftRadius: nativeDefault.radii.xs,
  borderBottomLeftRadius: nativeDefault.radii.xs,
  paddingLeft: nativeDefault.space.PX_8,
};
obj.embedAuthorRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let size = { width: 20, height: 20, borderRadius: nativeDefault.radii.round };
obj.embedAuthorIcon = size;
obj.embedProviderIcon = { width: 16, height: 16 };
let obj12 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.embedMedia = { overflow: "hidden", borderRadius: nativeDefault.radii.sm, aspectRatio: 1.7777777777777777 };
let obj13 = { overflow: "hidden", borderRadius: nativeDefault.radii.sm, aspectRatio: 1.7777777777777777 };
obj.pollAnswers = { flexDirection: "column", gap: nativeDefault.space.PX_4, flex: 1 };
let obj14 = { flexDirection: "column", gap: nativeDefault.space.PX_4, flex: 1 };
obj.pollAnswerOption = {
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
let obj16 = { paddingHorizontal: nativeDefault.space.PX_12 };
obj.pollMoreOptions = obj16;
obj.skeletonCard = { height: 282 };
obj.skeletonCardLarge = { height: 264 };
obj.skeletonAnimationRoot = { flex: 1 };
obj.skeletonCardImage = { width: "100%" };
let obj15 = {
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
obj.skeletonCardBody = { gap: nativeDefault.space.PX_8 };
const size1 = { height: nativeDefault.space.PX_48, borderRadius: nativeDefault.radii.xs, width: "88%" };
obj.skeletonCardContent = size1;
const size2 = {
  width: "60%",
  height: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.xs,
  marginTop: "auto",
};
obj.skeletonCardMetadata = size2;
let closure_13 = createStyles.createStyles(obj);
let closure_14 = noop.memo((arg0) => {
  ({ index, isWindowLarge } = arg0);
  const tmp = closure_13();
  const items = [tmp.card];
  const obj = { style: items, children: null };
  items[1] = isWindowLarge ? tmp.skeletonCardLarge : tmp.skeletonCard;
  const obj2 = {
    animationDelayMs: index * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS,
    style: tmp.skeletonAnimationRoot,
    children: null,
  };
  const obj3 = { style: null };
  const items1 = [,];
  ({ smallCardMedia: arr2[0], skeletonCardImage: arr2[1] } = tmp);
  obj3.style = items1;
  const items2 = [React7(GameProfileSkeletonDefault, obj3)];
  const obj4 = { style: null, children: null };
  const items3 = [,];
  ({ cardBody: arr4[0], skeletonCardBody: arr4[1] } = tmp);
  obj4.style = items3;
  const items4 = [
    React7(GameProfileSkeletonDefault, { style: tmp.skeletonCardContent }),
    React7(GameProfileSkeletonDefault, { style: tmp.skeletonCardMetadata }),
  ];
  obj4.children = items4;
  items2[1] = closure_1_10(timestampProducer, obj4);
  obj2.children = items2;
  obj.children = closure_1_10(GameProfileSkeleton.GameProfileSkeletonContainer, obj2);
  return React7(timestampProducer, obj);
});
let closure_15 = noop.memo(() => {
  const tmp = closure_13();
  _require = useIsWindowLargeDefault();
  const obj = { showViewAllSkeleton: true, skeletonTitleWidth: 200, children: null };
  const obj2 = {
    style: tmp.skeletonCardsScroller,
    contentContainerStyle: tmp.skeletonCardsContainer,
    children: Array.from({ length: 3 }, (arg0, index) => React7(closure_14, { index, isWindowLarge }, index)),
  };
  obj.children = closure_9(GameProfileSkeletonCardRowDefault, obj2);
  return closure_9(require("GameProfileSection").GameProfileSectionSkeleton, obj);
});
let closure_19 = noop.memo((message) => {
  if (null != message.message.poll) {
    const obj2 = {};
    const merged = Object.assign(message);
    let tmp6 = React7(PollAnnouncementCard, obj2);
  } else if (null != message.message.embedSource) {
    const obj3 = {};
    const merged1 = Object.assign(message);
    tmp6 = React7(EmbedAnnouncementCard, obj3);
  } else {
    const obj = {};
    const merged2 = Object.assign(message);
    tmp6 = React7(MessageAnnouncementCard, obj);
  }
  return tmp6;
});
size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileAnnouncements.tsx");

export default function GameProfileAnnouncements(gameId) {
  gameId = gameId.gameId;
  const invite = gameId.invite;
  const closeModal = gameId.closeModal;
  const trackAction = gameId.trackAction;
  const scrollY = gameId.scrollY;
  channelId = undefined;
  let onPress;
  const analyticsLocations = invite(trackAction[17])().analyticsLocations;
  const tmp4 = invite(trackAction[18])(gameId, onPress);
  ({ messages, channelId } = tmp4);
  const guildId = tmp4.guildId;
  const items = [trackAction, scrollY, closeModal, invite, guildId, channelId, analyticsLocations, gameId];
  ({ loading, hasFetched } = tmp4);
  const items1 = [trackAction, scrollY, closeModal, invite, guildId, channelId, analyticsLocations, gameId];
  const callback = scrollY.useCallback(() => {
    let id;
    if (invite != null) {
      const guild = invite.guild;
      if (guild != null) {
        id = guild.id;
      }
    }
    if (id == null) {
      id = guildId;
    }
    let tmp3 = null != id;
    if (tmp3) {
      tmp3 = null != channelId;
    }
    if (tmp3) {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.Announcements);
      const obj2 = { gameId, channelId, initialScrollOffset: scrollY.get() };
      const result = GameProfileActionCreatorsDefault.setGameProfilePendingReturn(obj2);
      closeModal();
      const obj3 = { invite, guildId: id, channelId, analyticsLocationStack: analyticsLocations };
      navigateToGameAnnouncementDefault(obj3);
    }
  }, items);
  onPress = scrollY.useCallback((messageId) => {
    let id;
    if (invite != null) {
      const guild = invite.guild;
      if (guild != null) {
        id = guild.id;
      }
    }
    if (id == null) {
      id = guildId;
    }
    let tmp3 = null != id;
    if (tmp3) {
      tmp3 = null != channelId;
    }
    if (tmp3) {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.AnnouncementsItem);
      const obj2 = { gameId, channelId, initialScrollOffset: scrollY.get() };
      const result = GameProfileActionCreatorsDefault.setGameProfilePendingReturn(obj2);
      closeModal();
      const obj3 = { invite, guildId: id, channelId, messageId, analyticsLocationStack: analyticsLocations };
      navigateToGameAnnouncementDefault(obj3);
    }
  }, items1);
  if (!hasFetched) {
    if (gameId.hasDiscordWebsite) {
      let tmp6 = closure_9(closure_15, {});
    }
    return tmp6;
  }
  tmp6 = null;
  if (null != channelId) {
    tmp6 = null;
    if (0 !== messages.length) {
      let obj = { title: null, onPressViewAll: null, children: null };
      const intl = gameId(tmp3[5]).intl;
      obj.title = intl.string(gameId(tmp3[5]).t.B0BV3Y);
      obj.onPressViewAll = callback;
      let obj3 = {
        showsHorizontalScrollIndicator: false,
        style: null,
        contentContainerStyle: null,
        decelerationRate: "fast",
        snapToInterval: 172,
        snapToStart: false,
        snapToEnd: false,
        children: null,
      };
      ({ smallCardsScroller: obj2.style, smallCardsContainer: obj2.contentContainerStyle } = tmp);
      const tmp2Result = tmp2(tmp3[10]);
      obj3.children = messages.map((message) =>
        React7(closure_19, { message, onPress, guildId, channelId }, message.id),
      );
      obj.children = closure_9(tmp2(tmp3[22]), obj3);
      tmp6 = closure_9(tmp2Result, obj);
      const tmp2Result2 = tmp2(tmp3[22]);
    }
  }
  tmp = closure_13();
}
