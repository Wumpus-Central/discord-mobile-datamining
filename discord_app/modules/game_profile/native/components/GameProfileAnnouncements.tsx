// === Module 14200: GameProfileAnnouncements ===

// Module 14200 (GameProfileAnnouncements)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import DateUtils from "DateUtils" /* 4865 */;
import Text_Text from "Text/Text" /* 5634 */;
import FastImageDefault from "FastImage" /* 5730 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7309 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8750 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8755 */;
import ReactionIcon from "ReactionIcon" /* 9705 */;
import GameProfileSkeleton from "GameProfileSkeleton" /* 14195 */;
import GameProfileSkeletonCardRowDefault from "GameProfileSkeletonCardRow" /* 14201 */;
import AnnouncementMessageUtils from "AnnouncementMessageUtils" /* 14202 */;
import ImageWithPlaceholder from "ImageWithPlaceholder" /* 14203 */;
import AnnouncementMarkupDefault from "AnnouncementMarkup" /* 14205 */;
import navigateToGameAnnouncementDefault from "navigateToGameAnnouncement" /* 14225 */;
import noop from "module_19" /* 19 */;

const GameProfileSkeletonDefault = GameProfileSkeleton;

require = fn;
function EmbedAnnouncementCard(message) {
  message = message.message;
  ({ onPress: importDefault, guildId, channelId } = message);
  const tmp = closure_10();
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
    let tmp7;
    if (null != embedSource.color) {
      const obj2 = { borderLeftColor: embedSource.color };
      tmp7 = obj2;
    }
    const obj3 = {
      style: tmp.card,
      onPress() {
          return importDefault(message.id);
        },
      accessibilityRole: "button",
      accessibilityLabel: message.title,
      children: null
    };
    const obj4 = { style: tmp.cardBody, children: null };
    let tmp8Result = null != embedSource.url;
    if (tmp8Result) {
      const obj5 = { variant: "body-xs/medium", color: "text-link", lineClamp: 1, children: embedSource.url };
      tmp8Result = metroImportDefault(Text_Text.Text, obj5);
    }
    items = [tmp8Result, ];
    const obj6 = { style: null, children: null };
    const items1 = [tmp.embedContentArea, tmp7];
    obj6.style = items1;
    let tmp10Result = null != embedSource.authorName;
    if (tmp10Result) {
      const obj7 = { style: tmp.embedAuthorRow, children: null };
      let tmp8Result6 = null != embedSource.authorIconUrl;
      if (tmp8Result6) {
        const obj8 = { source: null, style: null };
        const obj9 = { uri: embedSource.authorIconUrl };
        obj8.source = obj9;
        obj8.style = tmp.embedAuthorIcon;
        tmp8Result6 = metroImportDefault(FastImageDefault, obj8);
      }
      const items2 = [tmp8Result6, ];
      const obj10 = { variant: "body-xs/semibold", color: "text-strong", lineClamp: 1, children: embedSource.authorName };
      items2[1] = metroImportDefault(Text_Text.Text, obj10);
      obj7.children = items2;
      tmp10Result = React5(React4, obj7);
    }
    const items3 = [tmp10Result, , , , ];
    let tmp8Result7 = null != message.media && null != posterUrl;
    if (tmp8Result7) {
      const obj11 = { style: tmp.embedMedia, children: null };
      const obj12 = { uri: posterUrl, placeholder: message.media.placeholder, placeholderVersion: message.media.placeholderVersion, style: tmp.mediaImage };
      obj11.children = metroImportDefault(ImageWithPlaceholder.ImageWithPlaceholder, obj12);
      tmp8Result7 = metroImportDefault(React4, obj11);
    }
    items3[1] = tmp8Result7;
    let tmp8Result8 = null != message.title;
    if (tmp8Result8) {
      const obj13 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", lineClamp: 2, children: null };
      const obj14 = { content: message.title, guildId, channelId };
      obj13.children = metroImportDefault(AnnouncementMarkupDefault, obj14);
      tmp8Result8 = metroImportDefault(Text_Text.Text, obj13);
    }
    items3[2] = tmp8Result8;
    let tmp8Result9 = message.body.length > 0;
    if (tmp8Result9) {
      const obj15 = { variant: "body-sm/medium", color: "text-default", lineClamp: 3, children: null };
      obj16 = { content: message.body, guildId, channelId };
      obj15.children = metroImportDefault(AnnouncementMarkupDefault, obj16);
      tmp8Result9 = metroImportDefault(Text_Text.Text, obj15);
    }
    items3[3] = tmp8Result9;
    const obj17 = { style: tmp.metadataRow, children: null };
    let tmp8Result10 = null != embedSource.providerIconUrl;
    if (tmp8Result10) {
      const obj18 = { source: null, style: null };
      const obj19 = { uri: embedSource.providerIconUrl };
      obj18.source = obj19;
      obj18.style = tmp.embedProviderIcon;
      tmp8Result10 = metroImportDefault(FastImageDefault, obj18);
    }
    const items4 = [tmp8Result10, , ];
    let str2 = "";
    if (null != embedSource.providerName) {
      const _HermesInternal = HermesInternal;
      str2 = "" + embedSource.providerName + " \u00B7 ";
    }
    const obj20 = { variant: "body-xs/medium", color: "text-muted", children: null };
    const items5 = [str2, ];
    const _Date = Date;
    const date = new Date(message.timestamp);
    items5[1] = DateUtils.dateFormat(date, "LL");
    obj20.children = items5;
    items4[1] = React5(Text_Text.Text, obj20);
    let tmp10Result2 = message.reactionCount > 0;
    if (tmp10Result2) {
      const obj21 = { style: tmp.reactionInfo, children: null };
      const obj22 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
      const items6 = [metroImportDefault(ReactionIcon.ReactionIcon, obj22), ];
      let tmp46 = null != obj16;
      if (tmp46) {
        tmp46 = obj16.locale === util.intl.currentLocale;
      }
      if (!tmp46) {
        const obj23 = { locale: util.intl.currentLocale, format: null };
        const _Intl = Intl;
        const numberFormat = new Intl.NumberFormat(util.intl.currentLocale);
        obj23.format = numberFormat;
        obj16 = obj23;
      }
      const obj24 = { variant: "body-xs/medium", color: "text-muted", children: null };
      const format = obj16.format;
      obj24.children = format.format(message.reactionCount);
      items6[1] = metroImportDefault(Text_Text.Text, obj24);
      obj21.children = items6;
      tmp10Result2 = React5(React4, obj21);
    }
    items4[2] = tmp10Result2;
    obj17.children = items4;
    items3[4] = React5(React4, obj17);
    obj6.children = items3;
    items[1] = React5(React4, obj6);
    obj4.children = items;
    obj3.children = React5(React4, obj4);
    return metroImportDefault(hasOwnProperty, obj3);
  }
}
function MessageAnnouncementCard(message) {
  message = message.message;
  ({ onPress: importDefault, guildId, channelId } = message);
  const tmp = closure_10();
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
  const obj2 = {
    style: tmp.card,
    onPress() {
      return importDefault(message.id);
    },
    accessibilityRole: "button",
    accessibilityLabel: message.title,
    children: null
  };
  let tmp9 = null != message.media;
  if (tmp9) {
    tmp9 = null != posterUrl;
  }
  if (tmp9) {
    const obj3 = { style: tmp.smallCardMedia, children: null };
    const obj4 = { uri: posterUrl, placeholder: message.media.placeholder, placeholderVersion: message.media.placeholderVersion, style: tmp.mediaImage };
    obj3.children = metroImportDefault(ImageWithPlaceholder.ImageWithPlaceholder, obj4);
    tmp9 = metroImportDefault(React4, obj3);
  }
  items = [tmp9, ];
  const obj5 = { style: tmp.cardBody, children: null };
  let tmp15 = null != message.title;
  if (tmp15) {
    const obj6 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", lineClamp: 2, children: null };
    const obj7 = { content: message.title, guildId, channelId };
    obj6.children = metroImportDefault(AnnouncementMarkupDefault, obj7);
    tmp15 = metroImportDefault(Text_Text.Text, obj6);
  }
  const items1 = [tmp15, , , ];
  let tmp20 = message.body.length > 0;
  if (tmp20) {
    const obj8 = { variant: "body-sm/medium", color: "text-default", lineClamp: 3, children: null };
    const obj9 = { content: message.body, guildId, channelId };
    obj8.children = metroImportDefault(AnnouncementMarkupDefault, obj9);
    tmp20 = metroImportDefault(Text_Text.Text, obj8);
  }
  items1[1] = tmp20;
  let tmp25 = null != message.attachmentFilenames && message.attachmentFilenames.length > 0;
  if (tmp25) {
    const obj10 = { variant: "body-sm/medium", color: "text-default", lineClamp: 3, children: null };
    const attachmentFilenames = message.attachmentFilenames;
    obj10.children = attachmentFilenames.join(", ");
    tmp25 = metroImportDefault(Text_Text.Text, obj10);
  }
  items1[2] = tmp25;
  const obj11 = { style: tmp.metadataRow, children: null };
  const obj12 = { variant: "body-xs/medium", color: "text-muted", children: null };
  const obj13 = DateUtils;
  obj12.children = obj13.dateFormat(new Date(message.timestamp), "LL");
  const items2 = [metroImportDefault(Text_Text.Text, obj12), ];
  let tmp7Result = message.reactionCount > 0;
  if (tmp7Result) {
    const obj14 = { style: tmp.reactionInfo, children: null };
    const obj15 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
    const items3 = [metroImportDefault(ReactionIcon.ReactionIcon, obj15), ];
    let tmp36 = null != obj16;
    if (tmp36) {
      tmp36 = obj16.locale === util.intl.currentLocale;
    }
    if (!tmp36) {
      obj16 = { locale: util.intl.currentLocale, format: null };
      const _Intl = Intl;
      const numberFormat = new Intl.NumberFormat(util.intl.currentLocale);
      obj16.format = numberFormat;
    }
    const obj17 = { variant: "body-xs/medium", color: "text-muted", children: null };
    const format = obj16.format;
    obj17.children = format.format(message.reactionCount);
    items3[1] = metroImportDefault(Text_Text.Text, obj17);
    obj14.children = items3;
    tmp7Result = React5(React4, obj14);
  }
  items2[1] = tmp7Result;
  obj11.children = items2;
  items1[3] = React5(React4, obj11);
  obj5.children = items1;
  items[1] = React5(React4, obj5);
  obj2.children = items;
  return React5(hasOwnProperty, obj2);
}
function PollAnnouncementCard(message) {
  message = message.message;
  const onPress = message.onPress;
  const tmp = closure_10();
  dependencyMap = tmp;
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
      children: null
    };
    const obj3 = { style: tmp.cardBody, children: null };
    const obj4 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: poll.question.text };
    items = [closure_7(message(5634).Text, obj4), , ];
    const obj5 = { style: tmp.pollAnswers, children: null };
    const items1 = [
      substr.map((poll_media) => {
          const obj = { style: pollAnswerOption.pollAnswerOption, children: null };
          let str = poll_media.poll_media.text;
          if (str == null) {
            str = "";
          }
          obj.children = metroImportDefault(Text_Text.Text, { variant: "body-sm/medium", color: "text-default", lineClamp: 1, children: str });
          return metroImportDefault(React4, obj, poll_media.answer_id);
        }),

    ];
    let tmp9Result = diff > 0;
    if (tmp9Result) {
      let obj = { variant: "body-xs/medium", color: "text-muted", style: tmp.pollMoreOptions, children: null };
      const intl = tmp13(1112).intl;
      const obj6 = { count: diff };
      obj.children = intl.format(tmp13(1112).t["mv/nIa"], obj6);
      tmp9Result = closure_7(tmp13(5634).Text, obj);
    }
    items1[1] = tmp9Result;
    obj5.children = items1;
    items[1] = closure_8(closure_4, obj5);
    const obj7 = { style: tmp.metadataRow, children: null };
    const obj8 = { variant: "body-xs/medium", color: "text-muted", children: null };
    const intl2 = tmp13(1112).intl;
    const obj9 = { createdAt: null, expiryLabel: null };
    const _Date = Date;
    const date = new Date(message.timestamp);
    obj9.createdAt = date;
    obj9.expiryLabel = message(14202).getPollExpiryLabel(poll);
    obj8.children = intl2.format(message(1112).t.t0FTsH, obj9);
    obj7.children = closure_7(message(5634).Text, obj8);
    items[2] = closure_7(closure_4, obj7);
    obj3.children = items;
    obj2.children = closure_8(closure_4, obj3);
    return closure_7(closure_5, obj2);
  }
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable: hasOwnProperty } = get_ActivityIndicator);
const MAX_VISIBLE_ANNOUNCEMENTS = fn(8792).MAX_VISIBLE_ANNOUNCEMENTS;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5043);
let obj = { smallCardsScroller: { marginHorizontal: -nativeDefault.space.PX_16, overflow: "visible" }, skeletonCardsScroller: null, smallCardsContainer: null, skeletonCardsContainer: null, card: null, cardBody: null, smallCardMedia: null, mediaImage: null, metadataRow: null, reactionInfo: null, embedContentArea: null, embedAuthorRow: null, embedAuthorIcon: null, embedProviderIcon: null, embedMedia: null, pollAnswers: null, pollAnswerOption: null, pollMoreOptions: null, skeletonCard: null, skeletonCardLarge: null, skeletonAnimationRoot: null, skeletonCardImage: null, skeletonCardBody: null, skeletonCardContent: null, skeletonCardMetadata: null };
let obj3 = { marginHorizontal: -nativeDefault.space.PX_16, overflow: "visible" };
obj.skeletonCardsScroller = { marginHorizontal: -nativeDefault.space.PX_16 };
let obj4 = { marginHorizontal: -nativeDefault.space.PX_16 };
obj.smallCardsContainer = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
obj.skeletonCardsContainer = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj6 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj.card = { flexDirection: "column", borderRadius: nativeDefault.radii.lg, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, width: 160 };
let obj7 = { flexDirection: "column", borderRadius: nativeDefault.radii.lg, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, width: 160 };
obj.cardBody = { flex: 1, flexDirection: "column", gap: nativeDefault.space.PX_4, overflow: "hidden", padding: nativeDefault.space.PX_12 };
obj.smallCardMedia = { height: 120, overflow: "hidden", flexShrink: 0 };
obj.mediaImage = { width: "100%", height: "100%", resizeMode: "cover" };
let obj8 = { flex: 1, flexDirection: "column", gap: nativeDefault.space.PX_4, overflow: "hidden", padding: nativeDefault.space.PX_12 };
obj.metadataRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: "auto" };
let obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: "auto" };
obj.reactionInfo = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.embedContentArea = { flex: 1, gap: nativeDefault.space.PX_4, borderLeftWidth: 4, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, borderTopLeftRadius: nativeDefault.radii.xs, borderBottomLeftRadius: nativeDefault.radii.xs, paddingLeft: nativeDefault.space.PX_8 };
let obj11 = { flex: 1, gap: nativeDefault.space.PX_4, borderLeftWidth: 4, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, borderTopLeftRadius: nativeDefault.radii.xs, borderBottomLeftRadius: nativeDefault.radii.xs, paddingLeft: nativeDefault.space.PX_8 };
obj.embedAuthorRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let size = { width: 20, height: 20, borderRadius: nativeDefault.radii.round };
obj.embedAuthorIcon = size;
obj.embedProviderIcon = { width: 16, height: 16 };
let obj12 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.embedMedia = { overflow: "hidden", borderRadius: nativeDefault.radii.sm, aspectRatio: 1.7777777777777777 };
let obj13 = { overflow: "hidden", borderRadius: nativeDefault.radii.sm, aspectRatio: 1.7777777777777777 };
obj.pollAnswers = { flexDirection: "column", gap: nativeDefault.space.PX_4, flex: 1 };
let obj14 = { flexDirection: "column", gap: nativeDefault.space.PX_4, flex: 1 };
obj.pollAnswerOption = { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let obj16 = { paddingHorizontal: nativeDefault.space.PX_12 };
obj.pollMoreOptions = obj16;
obj.skeletonCard = { height: 282 };
obj.skeletonCardLarge = { height: 264 };
obj.skeletonAnimationRoot = { flex: 1 };
obj.skeletonCardImage = { width: "100%" };
let obj15 = { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.skeletonCardBody = { gap: nativeDefault.space.PX_8 };
const size1 = { height: nativeDefault.space.PX_48, borderRadius: nativeDefault.radii.xs, width: "88%" };
obj.skeletonCardContent = size1;
const size2 = { width: "60%", height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.xs, marginTop: "auto" };
obj.skeletonCardMetadata = size2;
let closure_10 = createStyles.createStyles(obj);
let closure_11 = noop.memo(function GameProfileAnnouncementCardSkeleton(arg0) {
  ({ index, isWindowLarge } = arg0);
  const tmp = closure_10();
  items = [tmp.card, ];
  const obj = { style: items, children: null };
  items[1] = isWindowLarge ? tmp.skeletonCardLarge : tmp.skeletonCard;
  const obj2 = { animationDelayMs: index * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS, style: tmp.skeletonAnimationRoot, children: null };
  const obj3 = { style: null };
  const items1 = [, ];
  ({ smallCardMedia: arr2[0], skeletonCardImage: arr2[1] } = tmp);
  obj3.style = items1;
  const items2 = [metroImportDefault(GameProfileSkeletonDefault, obj3), ];
  const obj4 = { style: null, children: null };
  const items3 = [, ];
  ({ cardBody: arr4[0], skeletonCardBody: arr4[1] } = tmp);
  obj4.style = items3;
  const items4 = [metroImportDefault(GameProfileSkeletonDefault, { style: tmp.skeletonCardContent }), metroImportDefault(GameProfileSkeletonDefault, { style: tmp.skeletonCardMetadata })];
  obj4.children = items4;
  items2[1] = React5(React4, obj4);
  obj2.children = items2;
  obj.children = React5(GameProfileSkeleton.GameProfileSkeletonContainer, obj2);
  return metroImportDefault(React4, obj);
});
let closure_12 = noop.memo(function GameProfileAnnouncementsSkeleton() {
  const tmp = closure_10();
  _require = useIsWindowLargeDefault();
  const obj = { showViewAllSkeleton: true, skeletonTitleWidth: 200, children: null };
  const obj2 = { style: tmp.skeletonCardsScroller, contentContainerStyle: tmp.skeletonCardsContainer, children: Array.from({ length: 3 }, (arg0, index) => metroImportDefault(closure_11, { index, isWindowLarge }, index)) };
  obj.children = closure_7(GameProfileSkeletonCardRowDefault, obj2);
  return closure_7(require("GameProfileSection").GameProfileSectionSkeleton, obj);
});
let closure_16 = noop.memo(function AnnouncementCard(message) {
  if (null != message.message.poll) {
    const obj2 = {};
    const merged = Object.assign(message);
    let tmp6 = metroImportDefault(PollAnnouncementCard, obj2);
  } else if (null != message.message.embedSource) {
    const obj3 = {};
    const merged1 = Object.assign(message);
    tmp6 = metroImportDefault(EmbedAnnouncementCard, obj3);
  } else {
    const obj = {};
    const merged2 = Object.assign(message);
    tmp6 = metroImportDefault(MessageAnnouncementCard, obj);
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
  const analyticsLocations = invite(closeModal[18])().analyticsLocations;
  const tmp4 = invite(closeModal[19])(gameId, channelId);
  ({ messages, channelId } = tmp4);
  const guildId = tmp4.guildId;
  items = [trackAction, scrollY, closeModal, invite, guildId, channelId, analyticsLocations, gameId];
  ({ loading, hasFetched } = tmp4);
  const items1 = [trackAction, scrollY, closeModal, invite, guildId, channelId, analyticsLocations, gameId];
  const callback = trackAction.useCallback(() => {
    let id;
    if (invite != null) {
      guild = invite.guild;
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
  const onPress = trackAction.useCallback((messageId) => {
    let id;
    if (invite != null) {
      guild = invite.guild;
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
      let tmp6 = guildId(closure_12, {});
    }
    return tmp6;
  }
  tmp6 = null;
  if (null != channelId) {
    tmp6 = null;
    if (0 !== messages.length) {
      let obj = { title: null, onPressViewAll: null, children: null };
      const intl = gameId(tmp3[4]).intl;
      obj.title = intl.string(gameId(tmp3[4]).t.B0BV3Y);
      obj.onPressViewAll = callback;
      let obj3 = { showsHorizontalScrollIndicator: false, style: null, contentContainerStyle: null, decelerationRate: "fast", snapToInterval: 172, snapToStart: false, snapToEnd: false, children: null };
      ({ smallCardsScroller: obj2.style, smallCardsContainer: obj2.contentContainerStyle } = tmp);
      const tmp2Result = tmp2(tmp3[9]);
      obj3.children = messages.map((message) => metroImportDefault(closure_16, { message, onPress, guildId, channelId }, message.id));
      obj.children = guildId(tmp2(tmp3[23]), obj3);
      tmp6 = guildId(tmp2Result, obj);
      const tmp2Result2 = tmp2(tmp3[23]);
    }
  }
  tmp = closure_10();
};