// === Module 8750: GameProfileAnnouncements ===

// Module 8750 (GameProfileAnnouncements)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import DateUtils from "DateUtils" /* 4242 */;
import Text_Text from "Text/Text" /* 4556 */;
import CustomMarkupAll from "CustomMarkup" /* 4995 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8680 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8686 */;
import AnnouncementMessageUtils from "AnnouncementMessageUtils" /* 8752 */;
import ImageWithPlaceholder from "ImageWithPlaceholder" /* 8755 */;
import ReactionIcon from "ReactionIcon" /* 8757 */;
import navigateToGameAnnouncementDefault from "navigateToGameAnnouncement" /* 8762 */;
import noop from "module_19" /* 19 */;

require = fn;
function EmbedAnnouncementCard(message) {
  message = message.message;
  ({ onPress: importDefault, guildId, channelId } = message);
  const tmp = closure_15();
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
    posterUrl = obj1.getPosterUrl(proxyUrl, 160, c12);
  }
  if (posterUrl == null) {
    posterUrl = proxyUrl;
  }
  const embedSource = message.embedSource;
  if (null == embedSource) {
    return null;
  } else {
    let tmp11;
    if (null != embedSource.color) {
      obj = { borderLeftColor: embedSource.color };
      tmp11 = obj;
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
    let tmp12Result = null != embedSource.url;
    if (tmp12Result) {
      const obj2 = { variant: "text-xs/medium", color: "text-link", lineClamp: 1, children: embedSource.url };
      tmp12Result = closure_1_10(Text_Text.Text, obj2);
    }
    const items = [tmp12Result, ];
    const obj3 = { style: null, children: null };
    const items1 = [tmp.embedContentArea, tmp11];
    obj3.style = items1;
    let tmp14Result = null != embedSource.authorName;
    if (tmp14Result) {
      const obj4 = { style: tmp.embedAuthorRow, children: null };
      tmp12Result = null != embedSource.authorIconUrl;
      if (tmp12Result) {
        const obj5 = { source: null, style: null };
        const obj6 = { uri: embedSource.authorIconUrl };
        obj5.source = obj6;
        obj5.style = tmp.embedAuthorIcon;
        tmp12Result = closure_1_10(hasOwnProperty, obj5);
      }
      const items2 = [tmp12Result, ];
      const obj7 = { variant: "text-xs/semibold", color: "text-strong", lineClamp: 1, children: embedSource.authorName };
      items2[1] = closure_1_10(Text_Text.Text, obj7);
      obj4.children = items2;
      tmp14Result = closure_1_11(timestampProducer, obj4);
    }
    const items3 = [tmp14Result, , , , ];
    let tmp12Result1 = null != message.media && null != posterUrl;
    if (tmp12Result1) {
      const obj8 = { style: tmp.embedMedia, children: null };
      const obj9 = { uri: posterUrl, placeholder: message.media.placeholder, placeholderVersion: message.media.placeholderVersion, style: tmp.mediaImage };
      obj8.children = closure_1_10(ImageWithPlaceholder.ImageWithPlaceholder, obj9);
      tmp12Result1 = closure_1_10(timestampProducer, obj8);
    }
    items3[1] = tmp12Result1;
    let tmp12Result2 = null != message.title;
    if (tmp12Result2) {
      const obj10 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 2, children: null };
      obj11 = { guildId, channelId };
      obj10.children = tmp4(message.title, true, obj11);
      tmp12Result2 = closure_1_10(Text_Text.Text, obj10);
    }
    items3[2] = tmp12Result2;
    let tmp12Result3 = message.body.length > 0;
    if (tmp12Result3) {
      const obj12 = { variant: "text-sm/medium", color: "text-default", lineClamp: 3, children: null };
      const obj13 = { guildId, channelId };
      obj12.children = tmp4(message.body, true, obj13);
      tmp12Result3 = closure_1_10(Text_Text.Text, obj12);
    }
    items3[3] = tmp12Result3;
    const obj14 = { style: tmp.metadataRow, children: null };
    let tmp12Result4 = null != embedSource.providerIconUrl;
    if (tmp12Result4) {
      const obj15 = { source: null, style: null };
      const obj16 = { uri: embedSource.providerIconUrl };
      obj15.source = obj16;
      obj15.style = tmp.embedProviderIcon;
      tmp12Result4 = closure_1_10(hasOwnProperty, obj15);
    }
    const items4 = [tmp12Result4, , ];
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
    items4[1] = closure_1_11(Text_Text.Text, obj17);
    tmp14Result = message.reactionCount > 0;
    if (tmp14Result) {
      const obj18 = { style: tmp.reactionInfo, children: null };
      const obj19 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
      const items6 = [closure_1_10(ReactionIcon.ReactionIcon, obj19), ];
      let tmp46 = null != obj11;
      if (tmp46) {
        tmp46 = obj11.locale === util.intl.currentLocale;
      }
      if (!tmp46) {
        const obj20 = { locale: util.intl.currentLocale, format: null };
        const _Intl = Intl;
        const numberFormat = new Intl.NumberFormat(util.intl.currentLocale);
        obj20.format = numberFormat;
        obj11 = obj20;
      }
      const obj21 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const format = obj11.format;
      obj21.children = format.format(message.reactionCount);
      items6[1] = closure_1_10(Text_Text.Text, obj21);
      obj18.children = items6;
      tmp14Result = closure_1_11(timestampProducer, obj18);
    }
    items4[2] = tmp14Result;
    obj14.children = items4;
    items3[4] = closure_1_11(timestampProducer, obj14);
    obj3.children = items3;
    items[1] = closure_1_11(timestampProducer, obj3);
    obj1.children = items;
    obj.children = closure_1_11(timestampProducer, obj1);
    return closure_1_10(React5, obj);
  }
}
function MessageAnnouncementCard(message) {
  message = message.message;
  ({ onPress: importDefault, guildId, channelId } = message);
  const tmp = closure_15();
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
    posterUrl = obj1.getPosterUrl(proxyUrl, 160, c12);
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
  let tmp13 = null != message.media;
  if (tmp13) {
    tmp13 = null != posterUrl;
  }
  if (tmp13) {
    obj = { style: tmp.smallCardMedia, children: null };
    obj1 = { uri: posterUrl, placeholder: message.media.placeholder, placeholderVersion: message.media.placeholderVersion, style: tmp.mediaImage };
    obj.children = closure_1_10(ImageWithPlaceholder.ImageWithPlaceholder, obj1);
    tmp13 = closure_1_10(timestampProducer, obj);
  }
  const items = [tmp13, ];
  const obj2 = { style: tmp.cardBody, children: null };
  let tmp19 = null != message.title;
  if (tmp19) {
    const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 2, children: null };
    const obj4 = { guildId, channelId };
    obj3.children = tmp4(message.title, true, obj4);
    tmp19 = closure_1_10(Text_Text.Text, obj3);
  }
  const items1 = [tmp19, , ];
  let tmp23 = message.body.length > 0;
  if (tmp23) {
    const obj5 = { variant: "text-sm/medium", color: "text-default", lineClamp: 3, children: null };
    const obj6 = { guildId, channelId };
    obj5.children = tmp4(message.body, true, obj6);
    tmp23 = closure_1_10(Text_Text.Text, obj5);
  }
  items1[1] = tmp23;
  const obj7 = { style: tmp.metadataRow, children: null };
  const obj8 = { variant: "text-xs/medium", color: "text-muted", children: null };
  let obj12 = DateUtils;
  obj8.children = obj12.dateFormat(new Date(message.timestamp), "LL");
  const items2 = [closure_1_10(Text_Text.Text, obj8), ];
  let tmp11Result = message.reactionCount > 0;
  if (tmp11Result) {
    const obj9 = { style: tmp.reactionInfo, children: null };
    const obj10 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
    const items3 = [closure_1_10(ReactionIcon.ReactionIcon, obj10), ];
    let tmp34 = null != obj11;
    if (tmp34) {
      tmp34 = obj11.locale === util.intl.currentLocale;
    }
    if (!tmp34) {
      obj11 = { locale: util.intl.currentLocale, format: null };
      const _Intl = Intl;
      const numberFormat = new Intl.NumberFormat(util.intl.currentLocale);
      obj11.format = numberFormat;
    }
    obj12 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const format = obj11.format;
    obj12.children = format.format(message.reactionCount);
    items3[1] = closure_1_10(Text_Text.Text, obj12);
    obj9.children = items3;
    tmp11Result = closure_1_11(timestampProducer, obj9);
  }
  items2[1] = tmp11Result;
  obj7.children = items2;
  items1[2] = closure_1_11(timestampProducer, obj7);
  obj2.children = items1;
  items[1] = closure_1_11(timestampProducer, obj2);
  obj.children = items;
  return closure_1_11(React5, obj);
}
function PollAnnouncementCard(message) {
  message = message.message;
  const onPress = message.onPress;
  const tmp = closure_15();
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
    const items = [closure_10(message(4556).Text, obj1), , ];
    const obj2 = { style: tmp.pollAnswers, children: null };
    const items1 = [
      substr.map((poll_media) => {
          const obj = { style: pollAnswerOption.pollAnswerOption, children: null };
          let str = poll_media.poll_media.text;
          if (str == null) {
            str = "";
          }
          obj.children = closure_2_10(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: str });
          return closure_2_10(timestampProducer, obj, poll_media.answer_id);
        }),

    ];
    let tmp9Result = diff > 0;
    if (tmp9Result) {
      obj = { variant: "text-xs/medium", color: "text-muted", style: tmp.pollMoreOptions, children: null };
      const intl = tmp13(1114).intl;
      const obj3 = { count: diff };
      obj.children = intl.format(tmp13(1114).t["mv/nIa"], obj3);
      tmp9Result = closure_10(tmp13(4556).Text, obj);
    }
    items1[1] = tmp9Result;
    obj2.children = items1;
    items[1] = closure_11(closure_6, obj2);
    const obj4 = { style: tmp.metadataRow, children: null };
    const obj5 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl2 = tmp13(1114).intl;
    const obj6 = { createdAt: null, expiryLabel: null };
    const _Date = Date;
    const date = new Date(message.timestamp);
    obj6.createdAt = date;
    obj6.expiryLabel = message(8752).getPollExpiryLabel(poll);
    obj5.children = intl2.format(message(1114).t.t0FTsH, obj6);
    obj4.children = closure_10(message(4556).Text, obj5);
    items[2] = closure_10(closure_6, obj4);
    obj.children = items;
    obj.children = closure_11(closure_6, obj);
    return closure_10(closure_7, obj);
  }
}
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire, Pressable: closure_7, ActivityIndicator: closure_8 } = get_ActivityIndicator);
const MAX_VISIBLE_ANNOUNCEMENTS = fn(8751).MAX_VISIBLE_ANNOUNCEMENTS;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let c12 = 120;
let closure_13 = null;
fn(4560);
let obj = { container: null, smallCardsScroller: null, smallCardsContainer: null, sectionHeader: null, loadingContainer: null, card: null, cardBody: null, smallCardMedia: null, mediaImage: null, metadataRow: null, reactionInfo: null, embedContentArea: null, embedAuthorRow: null, embedAuthorIcon: null, embedProviderIcon: null, embedMedia: null, pollAnswers: null, pollAnswerOption: null, pollMoreOptions: null };
obj = { gap: nativeDefault.space.PX_8 };
obj.container = obj;
const createStyles = { marginHorizontal: -nativeDefault.space.PX_16, overflow: "visible" };
obj.smallCardsScroller = createStyles;
obj.smallCardsContainer = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
let obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
obj.sectionHeader = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8 };
obj.loadingContainer = { height: 120, alignItems: "center", justifyContent: "center" };
let obj3 = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8 };
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
let closure_15 = createStyles.createStyles(obj);
let closure_19 = noop.memo((message) => {
  if (null != message.message.poll) {
    let obj = {};
    const merged = Object.assign(message);
    let tmp6 = closure_1_10(PollAnnouncementCard, obj);
  } else if (null != message.message.embedSource) {
    obj = {};
    const merged1 = Object.assign(message);
    tmp6 = closure_1_10(EmbedAnnouncementCard, obj);
  } else {
    obj = {};
    const merged2 = Object.assign(message);
    tmp6 = closure_1_10(MessageAnnouncementCard, obj);
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
  const scrollOffsetRef = gameId.scrollOffsetRef;
  channelId = undefined;
  const tmp = closure_15();
  const analyticsLocations = invite(trackAction[13])().analyticsLocations;
  const tmp4 = invite(trackAction[14])(gameId, MAX_VISIBLE_ANNOUNCEMENTS);
  ({ messages, channelId } = tmp4);
  const guildId = tmp4.guildId;
  const items = [trackAction, closeModal, invite, guildId, channelId, analyticsLocations, gameId, scrollOffsetRef];
  const items1 = [trackAction, closeModal, invite, guildId, channelId, analyticsLocations, gameId, scrollOffsetRef];
  const callback = scrollOffsetRef.useCallback(() => {
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
      let obj = { gameId, channelId, initialScrollOffset: scrollOffsetRef.current };
      const result = obj.setGameProfilePendingReturn(obj);
      closeModal();
      obj = { invite, guildId: id, channelId, analyticsLocationStack: analyticsLocations };
      navigateToGameAnnouncementDefault(obj);
    }
  }, items);
  const onPress = scrollOffsetRef.useCallback((messageId) => {
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
      let obj = { gameId, channelId, initialScrollOffset: scrollOffsetRef.current };
      const result = obj.setGameProfilePendingReturn(obj);
      closeModal();
      obj = { invite, guildId: id, channelId, messageId, analyticsLocationStack: analyticsLocations };
      navigateToGameAnnouncementDefault(obj);
    }
  }, items1);
  if (tmp4.loading) {
    let obj = { style: tmp.container, children: null };
    obj = { style: tmp.sectionHeader, children: null };
    obj = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = gameId(tmp3[5]).intl;
    obj.children = intl.string(gameId(tmp3[5]).t.B0BV3Y);
    obj.children = closure_10(gameId(tmp3[9]).Text, obj);
    const items2 = [closure_10(channelId, obj), ];
    const obj1 = { style: tmp.loadingContainer, children: closure_10(onPress, {}) };
    items2[1] = closure_10(channelId, obj1);
    obj.children = items2;
    let tmp7 = closure_11(channelId, obj);
  } else {
    tmp7 = null;
    if (null != channelId) {
      tmp7 = null;
      if (0 !== messages.length) {
        const obj2 = { style: tmp.container, children: null };
        const obj3 = { style: tmp.sectionHeader, children: null };
        const obj4 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: null };
        const intl2 = gameId(tmp3[5]).intl;
        obj4.children = intl2.string(gameId(tmp3[5]).t.B0BV3Y);
        const items3 = [closure_10(gameId(tmp3[9]).Text, obj4), ];
        const obj5 = { text: null, variant: "tertiary", size: "sm", icon: null, iconPosition: "end", onPress: null };
        const intl3 = gameId(tmp3[5]).intl;
        obj5.text = intl3.string(gameId(tmp3[5]).t.budhsM);
        obj5.icon = closure_10(gameId(tmp3[19]).ChevronSmallRightIcon, { size: "sm" });
        obj5.onPress = callback;
        items3[1] = closure_10(gameId(tmp3[18]).Button, obj5);
        obj3.children = items3;
        const items4 = [closure_11(channelId, obj3), ];
        const obj6 = { showsHorizontalScrollIndicator: false, style: null, contentContainerStyle: null, decelerationRate: "fast", snapToInterval: 172, snapToStart: false, snapToEnd: false, children: null };
        ({ smallCardsScroller: obj9.style, smallCardsContainer: obj9.contentContainerStyle } = tmp);
        obj6.children = messages.map((message) => closure_2_10(closure_19, { message, onPress, guildId, channelId }, message.id));
        items4[1] = closure_10(invite(tmp3[20]), obj6);
        obj2.children = items4;
        tmp7 = closure_11(channelId, obj2);
        const tmp2Result = invite(tmp3[20]);
      }
    }
  }
  return tmp7;
};