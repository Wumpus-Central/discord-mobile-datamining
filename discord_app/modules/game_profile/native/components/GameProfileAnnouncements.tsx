// === Module 8876: GameProfileAnnouncements ===

// Module 8876 (GameProfileAnnouncements)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import DateUtils from "DateUtils" /* 4318 */;
import Text_Text from "Text/Text" /* 4632 */;
import CustomMarkupAll from "CustomMarkup" /* 5076 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7046 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8803 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8809 */;
import GameProfileSkeleton from "GameProfileSkeleton" /* 8860 */;
import GameProfileSkeletonCardRowDefault from "GameProfileSkeletonCardRow" /* 8877 */;
import AnnouncementMessageUtils from "AnnouncementMessageUtils" /* 8878 */;
import ImageWithPlaceholder from "ImageWithPlaceholder" /* 8881 */;
import ReactionIcon from "ReactionIcon" /* 8883 */;
import navigateToGameAnnouncementDefault from "navigateToGameAnnouncement" /* 8888 */;
import noop from "module_19" /* 19 */;

const GameProfileSkeletonDefault = GameProfileSkeleton;

require = fn;
function EmbedAnnouncementCard(message) {
  message = message.message;
  ({ onPress: importDefault, guildId, channelId } = message);
  const tmp = closure_13();
  if (null == parser) {
    let obj = CustomMarkupAll;
    parser = obj.getParser();
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
    let obj1 = AnnouncementMessageUtils;
    posterUrl = obj1.getPosterUrl(proxyUrl, 160, 120);
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
      obj = { borderLeftColor: embedSource.color };
      tmp10 = obj;
    }
    obj = {
      style: tmp.card,
      onPress() {
          return importDefault(message.id);
        },
      accessibilityRole: "button",
      accessibilityLabel: message.title,
      children: null
    };
    obj1 = { style: tmp.cardBody, children: null };
    let tmp11Result = null != embedSource.url;
    if (tmp11Result) {
      const obj2 = { variant: "text-xs/medium", color: "text-link", lineClamp: 1, children: embedSource.url };
      tmp11Result = React7(Text_Text.Text, obj2);
    }
    const items = [tmp11Result, ];
    const obj3 = { style: null, children: null };
    const items1 = [tmp.embedContentArea, tmp10];
    obj3.style = items1;
    let tmp13Result = null != embedSource.authorName;
    if (tmp13Result) {
      const obj4 = { style: tmp.embedAuthorRow, children: null };
      tmp11Result = null != embedSource.authorIconUrl;
      if (tmp11Result) {
        const obj5 = { source: null, style: null };
        const obj6 = { uri: embedSource.authorIconUrl };
        obj5.source = obj6;
        obj5.style = tmp.embedAuthorIcon;
        tmp11Result = React7(hasOwnProperty, obj5);
      }
      const items2 = [tmp11Result, ];
      const obj7 = { variant: "text-xs/semibold", color: "text-strong", lineClamp: 1, children: embedSource.authorName };
      items2[1] = React7(Text_Text.Text, obj7);
      obj4.children = items2;
      tmp13Result = closure_1_10(timestampProducer, obj4);
    }
    const items3 = [tmp13Result, , , , ];
    let tmp11Result1 = null != message.media && null != posterUrl;
    if (tmp11Result1) {
      const obj8 = { style: tmp.embedMedia, children: null };
      const obj9 = { uri: posterUrl, placeholder: message.media.placeholder, placeholderVersion: message.media.placeholderVersion, style: tmp.mediaImage };
      obj8.children = React7(ImageWithPlaceholder.ImageWithPlaceholder, obj9);
      tmp11Result1 = React7(timestampProducer, obj8);
    }
    items3[1] = tmp11Result1;
    let tmp11Result2 = null != message.title;
    if (tmp11Result2) {
      const obj10 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 2, children: null };
      obj11 = { guildId, channelId };
      obj10.children = tmp4(message.title, true, obj11);
      tmp11Result2 = React7(Text_Text.Text, obj10);
    }
    items3[2] = tmp11Result2;
    let tmp11Result3 = message.body.length > 0;
    if (tmp11Result3) {
      const obj12 = { variant: "text-sm/medium", color: "text-default", lineClamp: 3, children: null };
      const obj13 = { guildId, channelId };
      obj12.children = tmp4(message.body, true, obj13);
      tmp11Result3 = React7(Text_Text.Text, obj12);
    }
    items3[3] = tmp11Result3;
    const obj14 = { style: tmp.metadataRow, children: null };
    let tmp11Result4 = null != embedSource.providerIconUrl;
    if (tmp11Result4) {
      const obj15 = { source: null, style: null };
      const obj16 = { uri: embedSource.providerIconUrl };
      obj15.source = obj16;
      obj15.style = tmp.embedProviderIcon;
      tmp11Result4 = React7(hasOwnProperty, obj15);
    }
    const items4 = [tmp11Result4, , ];
    let str2 = "";
    if (null != embedSource.providerName) {
      const _HermesInternal = HermesInternal;
      str2 = "" + embedSource.providerName + " \u00B7 ";
    }
    const obj17 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const items5 = [str2, ];
    const _Date = Date;
    const date = new Date(message.timestamp);
    items5[1] = DateUtils.dateFormat(date, "LL");
    obj17.children = items5;
    items4[1] = closure_1_10(Text_Text.Text, obj17);
    tmp13Result = message.reactionCount > 0;
    if (tmp13Result) {
      const obj18 = { style: tmp.reactionInfo, children: null };
      const obj19 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
      const items6 = [React7(ReactionIcon.ReactionIcon, obj19), ];
      let tmp45 = null != obj11;
      if (tmp45) {
        tmp45 = obj11.locale === util.intl.currentLocale;
      }
      if (!tmp45) {
        const obj20 = { locale: util.intl.currentLocale, format: null };
        const _Intl = Intl;
        const numberFormat = new Intl.NumberFormat(util.intl.currentLocale);
        obj20.format = numberFormat;
        obj11 = obj20;
      }
      const obj21 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const format = obj11.format;
      obj21.children = format.format(message.reactionCount);
      items6[1] = React7(Text_Text.Text, obj21);
      obj18.children = items6;
      tmp13Result = closure_1_10(timestampProducer, obj18);
    }
    items4[2] = tmp13Result;
    obj14.children = items4;
    items3[4] = closure_1_10(timestampProducer, obj14);
    obj3.children = items3;
    items[1] = closure_1_10(timestampProducer, obj3);
    obj1.children = items;
    obj.children = closure_1_10(timestampProducer, obj1);
    return React7(React5, obj);
  }
}
function MessageAnnouncementCard(message) {
  message = message.message;
  ({ onPress: importDefault, guildId, channelId } = message);
  const tmp = closure_13();
  if (null == parser) {
    let obj = CustomMarkupAll;
    parser = obj.getParser();
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
    let obj1 = AnnouncementMessageUtils;
    posterUrl = obj1.getPosterUrl(proxyUrl, 160, 120);
  }
  if (posterUrl == null) {
    posterUrl = proxyUrl;
  }
  obj = {
    style: tmp.card,
    onPress() {
      return importDefault(message.id);
    },
    accessibilityRole: "button",
    accessibilityLabel: message.title,
    children: null
  };
  let tmp12 = null != message.media;
  if (tmp12) {
    tmp12 = null != posterUrl;
  }
  if (tmp12) {
    obj = { style: tmp.smallCardMedia, children: null };
    obj1 = { uri: posterUrl, placeholder: message.media.placeholder, placeholderVersion: message.media.placeholderVersion, style: tmp.mediaImage };
    obj.children = React7(ImageWithPlaceholder.ImageWithPlaceholder, obj1);
    tmp12 = React7(timestampProducer, obj);
  }
  const items = [tmp12, ];
  const obj2 = { style: tmp.cardBody, children: null };
  let tmp18 = null != message.title;
  if (tmp18) {
    const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 2, children: null };
    const obj4 = { guildId, channelId };
    obj3.children = tmp4(message.title, true, obj4);
    tmp18 = React7(Text_Text.Text, obj3);
  }
  const items1 = [tmp18, , ];
  let tmp22 = message.body.length > 0;
  if (tmp22) {
    const obj5 = { variant: "text-sm/medium", color: "text-default", lineClamp: 3, children: null };
    const obj6 = { guildId, channelId };
    obj5.children = tmp4(message.body, true, obj6);
    tmp22 = React7(Text_Text.Text, obj5);
  }
  items1[1] = tmp22;
  const obj7 = { style: tmp.metadataRow, children: null };
  const obj8 = { variant: "text-xs/medium", color: "text-muted", children: null };
  let obj12 = DateUtils;
  obj8.children = obj12.dateFormat(new Date(message.timestamp), "LL");
  const items2 = [React7(Text_Text.Text, obj8), ];
  let tmp10Result = message.reactionCount > 0;
  if (tmp10Result) {
    const obj9 = { style: tmp.reactionInfo, children: null };
    const obj10 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
    const items3 = [React7(ReactionIcon.ReactionIcon, obj10), ];
    let tmp33 = null != obj11;
    if (tmp33) {
      tmp33 = obj11.locale === util.intl.currentLocale;
    }
    if (!tmp33) {
      obj11 = { locale: util.intl.currentLocale, format: null };
      const _Intl = Intl;
      const numberFormat = new Intl.NumberFormat(util.intl.currentLocale);
      obj11.format = numberFormat;
    }
    obj12 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const format = obj11.format;
    obj12.children = format.format(message.reactionCount);
    items3[1] = React7(Text_Text.Text, obj12);
    obj9.children = items3;
    tmp10Result = closure_1_10(timestampProducer, obj9);
  }
  items2[1] = tmp10Result;
  obj7.children = items2;
  items1[2] = closure_1_10(timestampProducer, obj7);
  obj2.children = items1;
  items[1] = closure_1_10(timestampProducer, obj2);
  obj.children = items;
  return closure_1_10(React5, obj);
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
    let obj = {
      style: tmp.card,
      onPress() {
          return onPress(message.id);
        },
      accessibilityRole: "button",
      accessibilityLabel: poll.question.text,
      children: null
    };
    obj = { style: tmp.cardBody, children: null };
    const obj1 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: poll.question.text };
    const items = [closure_9(message(4632).Text, obj1), , ];
    const obj2 = { style: tmp.pollAnswers, children: null };
    const items1 = [
      substr.map((poll_media) => {
          const obj = { style: pollAnswerOption.pollAnswerOption, children: null };
          let str = poll_media.poll_media.text;
          if (str == null) {
            str = "";
          }
          obj.children = React7(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: str });
          return React7(timestampProducer, obj, poll_media.answer_id);
        }),

    ];
    let tmp9Result = diff > 0;
    if (tmp9Result) {
      obj = { variant: "text-xs/medium", color: "text-muted", style: tmp.pollMoreOptions, children: null };
      const intl = tmp13(1114).intl;
      const obj3 = { count: diff };
      obj.children = intl.format(tmp13(1114).t["mv/nIa"], obj3);
      tmp9Result = closure_9(tmp13(4632).Text, obj);
    }
    items1[1] = tmp9Result;
    obj2.children = items1;
    items[1] = closure_10(closure_6, obj2);
    const obj4 = { style: tmp.metadataRow, children: null };
    const obj5 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl2 = tmp13(1114).intl;
    const obj6 = { createdAt: null, expiryLabel: null };
    const _Date = Date;
    const date = new Date(message.timestamp);
    obj6.createdAt = date;
    obj6.expiryLabel = message(8878).getPollExpiryLabel(poll);
    obj5.children = intl2.format(message(1114).t.t0FTsH, obj6);
    obj4.children = closure_9(message(4632).Text, obj5);
    items[2] = closure_9(closure_6, obj4);
    obj.children = items;
    obj.children = closure_10(closure_6, obj);
    return closure_9(closure_7, obj);
  }
}
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire, Pressable: closure_7 } = get_ActivityIndicator);
const MAX_VISIBLE_ANNOUNCEMENTS = fn(8837).MAX_VISIBLE_ANNOUNCEMENTS;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let closure_11 = null;
fn(4636);
let obj = { smallCardsScroller: null, skeletonCardsScroller: null, smallCardsContainer: null, skeletonCardsContainer: null, card: null, cardBody: null, smallCardMedia: null, mediaImage: null, metadataRow: null, reactionInfo: null, embedContentArea: null, embedAuthorRow: null, embedAuthorIcon: null, embedProviderIcon: null, embedMedia: null, pollAnswers: null, pollAnswerOption: null, pollMoreOptions: null, skeletonCard: null, skeletonCardLarge: null, skeletonAnimationRoot: null, skeletonCardImage: null, skeletonCardBody: null, skeletonCardContent: null, skeletonCardMetadata: null };
obj = { marginHorizontal: -nativeDefault.space.PX_16, overflow: "visible" };
obj.smallCardsScroller = obj;
const createStyles = { marginHorizontal: -nativeDefault.space.PX_16 };
obj.skeletonCardsScroller = createStyles;
obj.smallCardsContainer = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
let obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
obj.skeletonCardsContainer = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj.card = { flexDirection: "column", borderRadius: nativeDefault.radii.lg, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, width: 160 };
let obj4 = { flexDirection: "column", borderRadius: nativeDefault.radii.lg, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, width: 160 };
obj.cardBody = { flex: 1, flexDirection: "column", gap: nativeDefault.space.PX_4, overflow: "hidden", padding: nativeDefault.space.PX_12 };
obj.smallCardMedia = { height: 120, overflow: "hidden", flexShrink: 0 };
obj.mediaImage = { width: "100%", height: "100%", resizeMode: "cover" };
let obj5 = { flex: 1, flexDirection: "column", gap: nativeDefault.space.PX_4, overflow: "hidden", padding: nativeDefault.space.PX_12 };
obj.metadataRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: "auto" };
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: "auto" };
obj.reactionInfo = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.embedContentArea = { flex: 1, gap: nativeDefault.space.PX_4, borderLeftWidth: 4, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, borderTopLeftRadius: nativeDefault.radii.xs, borderBottomLeftRadius: nativeDefault.radii.xs, paddingLeft: nativeDefault.space.PX_8 };
let obj8 = { flex: 1, gap: nativeDefault.space.PX_4, borderLeftWidth: 4, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, borderTopLeftRadius: nativeDefault.radii.xs, borderBottomLeftRadius: nativeDefault.radii.xs, paddingLeft: nativeDefault.space.PX_8 };
obj.embedAuthorRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let size = { width: 20, height: 20, borderRadius: nativeDefault.radii.round };
obj.embedAuthorIcon = size;
obj.embedProviderIcon = { width: 16, height: 16 };
let obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.embedMedia = { overflow: "hidden", borderRadius: nativeDefault.radii.sm, aspectRatio: 1.7777777777777777 };
let obj11 = { flexDirection: "column", gap: nativeDefault.space.PX_4, flex: 1 };
obj.pollAnswers = obj11;
let obj10 = { overflow: "hidden", borderRadius: nativeDefault.radii.sm, aspectRatio: 1.7777777777777777 };
obj.pollAnswerOption = { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let obj12 = { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.pollMoreOptions = { paddingHorizontal: nativeDefault.space.PX_12 };
obj.skeletonCard = { height: 282 };
obj.skeletonCardLarge = { height: 264 };
obj.skeletonAnimationRoot = { flex: 1 };
obj.skeletonCardImage = { width: "100%" };
let obj13 = { paddingHorizontal: nativeDefault.space.PX_12 };
obj.skeletonCardBody = { gap: nativeDefault.space.PX_8 };
const size1 = { height: nativeDefault.space.PX_48, borderRadius: nativeDefault.radii.xs, width: "88%" };
obj.skeletonCardContent = size1;
const size2 = { width: "60%", height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.xs, marginTop: "auto" };
obj.skeletonCardMetadata = size2;
let closure_13 = createStyles.createStyles(obj);
let closure_14 = noop.memo((arg0) => {
  ({ index, isWindowLarge } = arg0);
  const tmp = closure_13();
  const items = [tmp.card, ];
  let obj = { style: items, children: null };
  items[1] = isWindowLarge ? tmp.skeletonCardLarge : tmp.skeletonCard;
  obj = { animationDelayMs: index * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS, style: tmp.skeletonAnimationRoot, children: null };
  obj = { style: null };
  const items1 = [, ];
  ({ smallCardMedia: arr2[0], skeletonCardImage: arr2[1] } = tmp);
  obj.style = items1;
  const items2 = [React7(GameProfileSkeletonDefault, obj), ];
  const obj1 = { style: null, children: null };
  const items3 = [, ];
  ({ cardBody: arr4[0], skeletonCardBody: arr4[1] } = tmp);
  obj1.style = items3;
  const items4 = [React7(GameProfileSkeletonDefault, { style: tmp.skeletonCardContent }), React7(GameProfileSkeletonDefault, { style: tmp.skeletonCardMetadata })];
  obj1.children = items4;
  items2[1] = closure_1_10(timestampProducer, obj1);
  obj.children = items2;
  obj.children = closure_1_10(GameProfileSkeleton.GameProfileSkeletonContainer, obj);
  return React7(timestampProducer, obj);
});
let closure_15 = noop.memo(() => {
  const tmp = closure_13();
  _require = useIsWindowLargeDefault();
  let obj = { showViewAllSkeleton: true, skeletonTitleWidth: 200, children: null };
  obj = { style: tmp.skeletonCardsScroller, contentContainerStyle: tmp.skeletonCardsContainer, children: Array.from({ length: 3 }, (arg0, index) => React7(closure_14, { index, isWindowLarge }, index)) };
  obj.children = closure_9(GameProfileSkeletonCardRowDefault, obj);
  return closure_9(require("GameProfileSection").GameProfileSectionSkeleton, obj);
});
let closure_19 = noop.memo((message) => {
  if (null != message.message.poll) {
    let obj = {};
    const merged = Object.assign(message);
    let tmp6 = React7(PollAnnouncementCard, obj);
  } else if (null != message.message.embedSource) {
    obj = {};
    const merged1 = Object.assign(message);
    tmp6 = React7(EmbedAnnouncementCard, obj);
  } else {
    obj = {};
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
      let obj = { gameId, channelId, initialScrollOffset: scrollY.get() };
      const result = obj.setGameProfilePendingReturn(obj);
      closeModal();
      obj = { invite, guildId: id, channelId, analyticsLocationStack: analyticsLocations };
      navigateToGameAnnouncementDefault(obj);
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
      let obj = { gameId, channelId, initialScrollOffset: scrollY.get() };
      const result = obj.setGameProfilePendingReturn(obj);
      closeModal();
      obj = { invite, guildId: id, channelId, messageId, analyticsLocationStack: analyticsLocations };
      navigateToGameAnnouncementDefault(obj);
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
      tmp2(tmp3[10]);
      const intl = gameId(tmp3[5]).intl;
      obj.title = intl.string(gameId(tmp3[5]).t.B0BV3Y);
      obj.onPressViewAll = callback;
      obj = { showsHorizontalScrollIndicator: false, style: null, contentContainerStyle: null, decelerationRate: "fast", snapToInterval: 172, snapToStart: false, snapToEnd: false, children: null };
      ({ smallCardsScroller: obj2.style, smallCardsContainer: obj2.contentContainerStyle } = tmp);
      const tmp2Result = tmp2(tmp3[22]);
      obj.children = messages.map((message) => React7(closure_19, { message, onPress, guildId, channelId }, message.id));
      obj.children = closure_9(tmp2Result, obj);
      tmp6 = closure_9(tmp2Result, obj);
    }
  }
  tmp = closure_13();
};