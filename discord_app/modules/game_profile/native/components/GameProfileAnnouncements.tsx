// discord_app/modules/game_profile/native/components/GameProfileAnnouncements.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import createRulesAll from "../../../markup/CustomMarkup.native.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { MAX_VISIBLE_ANNOUNCEMENTS } from "../../GameProfileConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function EmbedAnnouncementCard(message) {
  message = message.message;
  ({ onPress: importDefault, guildId, channelId } = message);
  const tmp = callback3();
  if (null == parser) {
    let obj = createRulesAll;
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
    obj1 = message(8897);
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
      obj = { borderLeftColor: null };
      obj[0] = embedSource.color;
      tmp11 = obj;
    }
    obj = { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
    obj[0] = tmp.card;
    obj[1] = function onPress() {
      return callback(message.id);
    };
    obj[3] = message.title;
    obj1 = { style: null, children: null };
    obj1[0] = tmp.cardBody;
    let tmp12Result = null != embedSource.url;
    if (tmp12Result) {
      const obj2 = { variant: "text-xs/medium", color: "text-link", lineClamp: 1, children: null };
      obj2[3] = embedSource.url;
      tmp12Result = tmp12(message(4474).Text, obj2);
    }
    const items = [tmp12Result];
    const obj3 = { style: null, children: null };
    const items1 = [tmp.embedContentArea, tmp11];
    obj3[0] = items1;
    let tmp14Result = null != embedSource.authorName;
    if (tmp14Result) {
      const obj4 = { style: null, children: null };
      obj4[0] = tmp.embedAuthorRow;
      tmp12Result = null != embedSource.authorIconUrl;
      if (tmp12Result) {
        const obj5 = { source: null, style: null };
        const obj6 = { uri: null };
        obj6[0] = embedSource.authorIconUrl;
        obj5[0] = obj6;
        obj5[1] = tmp.embedAuthorIcon;
        tmp12Result = tmp12(closure_5, obj5);
      }
      const items2 = [tmp12Result];
      const obj7 = { variant: "text-xs/semibold", color: "text-strong", lineClamp: 1, children: null };
      obj7[3] = embedSource.authorName;
      items2[1] = tmp12(message(4474).Text, obj7);
      obj4[1] = items2;
      tmp14Result = tmp14(tmp15, obj4);
    }
    const items3 = [tmp14Result, , , ,];
    let tmp12Result1 = null != message.media && null != posterUrl;
    if (tmp12Result1) {
      const obj8 = { style: null, children: null };
      obj8[0] = tmp.embedMedia;
      const obj9 = { uri: null, placeholder: null, placeholderVersion: null, style: null };
      obj9[0] = posterUrl;
      obj9[1] = message.media.placeholder;
      obj9[2] = message.media.placeholderVersion;
      obj9[3] = tmp.mediaImage;
      obj8[1] = tmp12(message(8899).ImageWithPlaceholder, obj9);
      tmp12Result1 = tmp12(tmp15, obj8);
    }
    items3[1] = tmp12Result1;
    let tmp12Result2 = null != message.title;
    if (tmp12Result2) {
      const obj10 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 2, children: null };
      const obj11 = { guildId: null, channelId: null };
      obj11[0] = guildId;
      obj11[1] = channelId;
      obj10[3] = tmp4(message.title, true, obj11);
      tmp12Result2 = tmp12(message(4474).Text, obj10);
    }
    items3[2] = tmp12Result2;
    let tmp12Result3 = message.body.length > 0;
    if (tmp12Result3) {
      const obj12 = { variant: "text-sm/medium", color: "text-default", lineClamp: 3, children: null };
      const obj13 = { guildId: null, channelId: null };
      obj13[0] = guildId;
      obj13[1] = channelId;
      obj12[3] = tmp4(message.body, true, obj13);
      tmp12Result3 = tmp12(message(4474).Text, obj12);
    }
    items3[3] = tmp12Result3;
    const obj14 = { style: null, children: null };
    obj14[0] = tmp.metadataRow;
    let tmp12Result4 = null != embedSource.providerIconUrl;
    if (tmp12Result4) {
      const obj15 = { source: null, style: null };
      const obj16 = { uri: null };
      obj16[0] = embedSource.providerIconUrl;
      obj15[0] = obj16;
      obj15[1] = tmp.embedProviderIcon;
      tmp12Result4 = tmp12(closure_5, obj15);
    }
    const items4 = [tmp12Result4, ,];
    let str2 = "";
    if (null != embedSource.providerName) {
      const _HermesInternal = HermesInternal;
      str2 = "" + embedSource.providerName + " \u00B7 ";
    }
    const obj17 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const items5 = [str2];
    const _Date = Date;
    const date = new Date(message.timestamp);
    items5[1] = message(4163).dateFormat(date, "LL");
    obj17[2] = items5;
    items4[1] = closure_11(message(4474).Text, obj17);
    tmp14Result = message.reactionCount > 0;
    if (tmp14Result) {
      const obj18 = { style: null, children: null };
      obj18[0] = tmp.reactionInfo;
      const obj19 = { size: "xs", color: null };
      obj19[1] = ThemesDefault.colors.TEXT_MUTED;
      const items6 = [tmp12(tmp35(8241).ReactionIcon, obj19)];
      let tmp46 = null != obj20;
      if (tmp46) {
        tmp46 = obj20.locale === tmp35(1233).intl.currentLocale;
      }
      if (!tmp46) {
        obj20 = { locale: null, format: null };
        obj20[0] = tmp35(1233).intl.currentLocale;
        const _Intl = Intl;
        const numberFormat = new Intl.NumberFormat(tmp35(1233).intl.currentLocale);
        obj20[1] = numberFormat;
      }
      const obj21 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const format = obj20.format;
      obj21[2] = format.format(message.reactionCount);
      items6[1] = tmp12(tmp35(4474).Text, obj21);
      obj18[1] = items6;
      tmp14Result = tmp14(tmp15, obj18);
    }
    items4[2] = tmp14Result;
    obj14[1] = items4;
    items3[4] = closure_11(closure_6, obj14);
    obj3[1] = items3;
    items[1] = closure_11(closure_6, obj3);
    obj1[1] = items;
    obj[4] = closure_11(closure_6, obj1);
    return closure_10(closure_7, obj);
  }
}
function MessageAnnouncementCard(message) {
  message = message.message;
  ({ onPress: importDefault, guildId, channelId } = message);
  const tmp = callback3();
  if (null == parser) {
    let obj = createRulesAll;
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
    obj1 = message(8897);
    posterUrl = obj1.getPosterUrl(proxyUrl, 160, c12);
  }
  if (posterUrl == null) {
    posterUrl = proxyUrl;
  }
  obj = {
    style: tmp.card,
    onPress() {
      return callback(message.id);
    },
    accessibilityRole: "button",
    accessibilityLabel: message.title,
    children: null,
  };
  let tmp13 = null != message.media;
  if (tmp13) {
    tmp13 = null != posterUrl;
  }
  if (tmp13) {
    obj = { style: null, children: null };
    obj[0] = tmp.smallCardMedia;
    obj1 = { uri: null, placeholder: null, placeholderVersion: null, style: null };
    obj1[0] = posterUrl;
    obj1[1] = message.media.placeholder;
    obj1[2] = message.media.placeholderVersion;
    obj1[3] = tmp.mediaImage;
    obj[1] = callback(message(8899).ImageWithPlaceholder, obj1);
    tmp13 = callback(closure_6, obj);
  }
  const items = [tmp13];
  const obj2 = { style: tmp.cardBody, children: null };
  let tmp19 = null != message.title;
  if (tmp19) {
    const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 2, children: null };
    const obj4 = { guildId: null, channelId: null };
    obj4[0] = guildId;
    obj4[1] = channelId;
    obj3[3] = tmp4(message.title, true, obj4);
    tmp19 = callback(message(4474).Text, obj3);
  }
  const items1 = [tmp19, ,];
  let tmp23 = message.body.length > 0;
  if (tmp23) {
    const obj5 = { variant: "text-sm/medium", color: "text-default", lineClamp: 3, children: null };
    const obj6 = { guildId: null, channelId: null };
    obj6[0] = guildId;
    obj6[1] = channelId;
    obj5[3] = tmp4(message.body, true, obj6);
    tmp23 = callback(message(4474).Text, obj5);
  }
  items1[1] = tmp23;
  const obj7 = { style: tmp.metadataRow, children: null };
  const obj8 = { variant: "text-xs/medium", color: "text-muted", children: null };
  let obj12 = message(4163);
  obj8[2] = obj12.dateFormat(new Date(message.timestamp), "LL");
  const items2 = [callback(message(4474).Text, obj8)];
  let tmp11Result = message.reactionCount > 0;
  if (tmp11Result) {
    const obj9 = { style: null, children: null };
    obj9[0] = tmp.reactionInfo;
    const obj10 = { size: "xs", color: null };
    obj10[1] = ThemesDefault.colors.TEXT_MUTED;
    const items3 = [tmp27(tmp28(8241).ReactionIcon, obj10)];
    let tmp34 = null != obj11;
    if (tmp34) {
      tmp34 = obj11.locale === tmp28(1233).intl.currentLocale;
    }
    if (!tmp34) {
      obj11 = { locale: null, format: null };
      obj11[0] = tmp28(1233).intl.currentLocale;
      const _Intl = Intl;
      const numberFormat = new Intl.NumberFormat(tmp28(1233).intl.currentLocale);
      obj11[1] = numberFormat;
    }
    obj12 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const format = obj11.format;
    obj12[2] = format.format(message.reactionCount);
    items3[1] = tmp27(tmp28(4474).Text, obj12);
    obj9[1] = items3;
    tmp11Result = tmp11(tmp18, obj9);
  }
  items2[1] = tmp11Result;
  obj7[1] = items2;
  items1[2] = closure_11(closure_6, obj7);
  obj2[1] = items1;
  items[1] = closure_11(closure_6, obj2);
  obj[4] = items;
  return closure_11(closure_7, obj);
}
function PollAnnouncementCard(message) {
  message = message.message;
  const onPress = message.onPress;
  closure_2 = undefined;
  const tmp = callback3();
  closure_2 = tmp;
  const poll = message.poll;
  if (null == poll) {
    return null;
  } else {
    const answers = poll.answers;
    const substr = answers.slice(0, 3);
    const diff = poll.answers.length - substr.length;
    let obj = { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
    obj[0] = tmp.card;
    obj[1] = function onPress() {
      return onPress(message.id);
    };
    obj[3] = poll.question.text;
    obj = { style: null, children: null };
    obj[0] = tmp.cardBody;
    obj1 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj1[2] = poll.question.text;
    const items = [callback(message(4474).Text, obj1), ,];
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.pollAnswers;
    const items1 = [
      substr.map((poll_media) => {
        const obj = { style: pollAnswerOption.pollAnswerOption, children: null };
        let str = poll_media.poll_media.text;
        if (str == null) {
          str = "";
        }
        obj[1] = closure_1_10(message(closure_1_3[9]).Text, {
          variant: "text-sm/medium",
          color: "text-default",
          lineClamp: 1,
          children: str,
        });
        return closure_1_10(closure_1_6, obj, poll_media.answer_id);
      }),
    ];
    let tmp9Result = diff > 0;
    if (tmp9Result) {
      obj = { variant: "text-xs/medium", color: "text-muted", style: null, children: null };
      obj[2] = tmp.pollMoreOptions;
      const intl = tmp13(1233).intl;
      const obj3 = { count: null };
      obj3[0] = diff;
      obj[3] = intl.format(tmp13(1233).t["mv/nIa"], obj3);
      tmp9Result = tmp9(tmp13(4474).Text, obj);
    }
    items1[1] = tmp9Result;
    obj2[1] = items1;
    items[1] = closure_11(closure_6, obj2);
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.metadataRow;
    const obj5 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl2 = tmp13(1233).intl;
    const obj6 = { createdAt: null, expiryLabel: null };
    const _Date = Date;
    const date = new Date(message.timestamp);
    obj6[0] = date;
    obj6[1] = message(8897).getPollExpiryLabel(poll);
    obj5[2] = intl2.format(message(1233).t.t0FTsH, obj6);
    obj4[1] = callback(message(4474).Text, obj5);
    items[2] = callback(closure_6, obj4);
    obj[1] = items;
    obj[4] = closure_11(closure_6, obj);
    return callback(closure_7, obj);
  }
}
let c4 = importAllResult;
({ Image: c5, View: closure_6, Pressable: error, ActivityIndicator: closure_8 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let c12 = 120;
let c13 = null;
let c14 = null;
let obj = {
  container: null,
  smallCardsScroller: null,
  smallCardsContainer: null,
  sectionHeader: null,
  loadingContainer: null,
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
};
obj = { gap: ThemesDefault.space.PX_8 };
obj[0] = obj;
createCacheKey = { marginHorizontal: -ThemesDefault.space.PX_16, overflow: "visible" };
obj[1] = createCacheKey;
obj[2] = { flexDirection: "row", gap: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_16 };
let obj2 = { flexDirection: "row", gap: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_16 };
obj[3] = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: ThemesDefault.space.PX_8,
};
obj[4] = { height: 120, alignItems: "center", justifyContent: "center" };
let obj3 = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: ThemesDefault.space.PX_8,
};
obj[5] = {
  flexDirection: "column",
  borderRadius: ThemesDefault.radii.lg,
  overflow: "hidden",
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW,
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BORDER_SUBTLE,
  width: 160,
};
let obj4 = {
  flexDirection: "column",
  borderRadius: ThemesDefault.radii.lg,
  overflow: "hidden",
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW,
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BORDER_SUBTLE,
  width: 160,
};
obj[6] = {
  flex: 1,
  flexDirection: "column",
  gap: ThemesDefault.space.PX_4,
  overflow: "hidden",
  padding: ThemesDefault.space.PX_12,
};
obj[7] = { height: 120, overflow: "hidden", flexShrink: 0 };
obj[8] = { width: "100%", height: "100%", resizeMode: "cover" };
let obj5 = {
  flex: 1,
  flexDirection: "column",
  gap: ThemesDefault.space.PX_4,
  overflow: "hidden",
  padding: ThemesDefault.space.PX_12,
};
obj[9] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8, marginTop: "auto" };
let obj6 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8, marginTop: "auto" };
obj[10] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
let obj7 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
obj[11] = {
  flex: 1,
  gap: ThemesDefault.space.PX_4,
  borderLeftWidth: 4,
  borderLeftColor: ThemesDefault.colors.BORDER_SUBTLE,
  borderTopLeftRadius: ThemesDefault.radii.xs,
  borderBottomLeftRadius: ThemesDefault.radii.xs,
  paddingLeft: ThemesDefault.space.PX_8,
};
let obj8 = {
  flex: 1,
  gap: ThemesDefault.space.PX_4,
  borderLeftWidth: 4,
  borderLeftColor: ThemesDefault.colors.BORDER_SUBTLE,
  borderTopLeftRadius: ThemesDefault.radii.xs,
  borderBottomLeftRadius: ThemesDefault.radii.xs,
  paddingLeft: ThemesDefault.space.PX_8,
};
obj[12] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
let obj9 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
obj[13] = { width: 20, height: 20, borderRadius: ThemesDefault.radii.round };
obj[14] = { width: 16, height: 16 };
let obj10 = { width: 20, height: 20, borderRadius: ThemesDefault.radii.round };
obj[15] = { overflow: "hidden", borderRadius: ThemesDefault.radii.sm, aspectRatio: 1.7777777777777777 };
let obj11 = { overflow: "hidden", borderRadius: ThemesDefault.radii.sm, aspectRatio: 1.7777777777777777 };
obj[16] = { flexDirection: "column", gap: ThemesDefault.space.PX_4, flex: 1 };
let obj12 = { flexDirection: "column", gap: ThemesDefault.space.PX_4, flex: 1 };
obj[17] = {
  paddingVertical: ThemesDefault.space.PX_8,
  paddingHorizontal: ThemesDefault.space.PX_12,
  borderRadius: ThemesDefault.radii.sm,
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
};
let obj13 = {
  paddingVertical: ThemesDefault.space.PX_8,
  paddingHorizontal: ThemesDefault.space.PX_12,
  borderRadius: ThemesDefault.radii.sm,
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
};
obj[18] = { paddingHorizontal: ThemesDefault.space.PX_12 };
let closure_15 = createCacheKey.createStyles(obj);
let closure_19 = importAllResult.memo((message) => {
  if (null != message.message.poll) {
    let obj = {};
    const merged = Object.assign(message);
    let tmp6 = callback(PollAnnouncementCard, obj);
  } else if (null != message.message.embedSource) {
    obj = {};
    const merged1 = Object.assign(message);
    tmp6 = callback(EmbedAnnouncementCard, obj);
  } else {
    obj = {};
    const merged2 = Object.assign(message);
    tmp6 = callback(MessageAnnouncementCard, obj);
  }
  return tmp6;
});
let obj14 = { paddingHorizontal: ThemesDefault.space.PX_12 };
let result = require("set").fileFinishedImporting(
  "modules/game_profile/native/components/GameProfileAnnouncements.tsx",
);

export default function GameProfileAnnouncements(gameId) {
  gameId = gameId.gameId;
  const invite = gameId.invite;
  const closeModal = gameId.closeModal;
  const trackAction = gameId.trackAction;
  const scrollOffsetRef = gameId.scrollOffsetRef;
  let analyticsLocations;
  channelId = undefined;
  let guildId;
  closure_8 = undefined;
  const tmp = callback3();
  analyticsLocations = invite(trackAction[13])().analyticsLocations;
  const tmp4 = invite(trackAction[14])(gameId, MAX_VISIBLE_ANNOUNCEMENTS);
  ({ messages, channelId } = tmp4);
  guildId = tmp4.guildId;
  const items = [trackAction, closeModal, invite, guildId, channelId, analyticsLocations, gameId, scrollOffsetRef];
  const items1 = [trackAction, closeModal, invite, guildId, channelId, analyticsLocations, gameId, scrollOffsetRef];
  const callback = scrollOffsetRef.useCallback(() => {
    let id;
    if (invite != null) {
      const guild = tmp.guild;
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
      trackAction(gameId(trackAction[15]).GameProfileTrackActionActions.Announcements);
      let obj = invite(trackAction[16]);
      obj = { gameId: null, channelId: null, initialScrollOffset: null };
      obj[0] = gameId;
      obj[1] = channelId;
      obj[2] = scrollOffsetRef.current;
      const result = obj.setGameProfilePendingReturn(obj);
      closeModal();
      obj = { invite: null, guildId: null, channelId: null, analyticsLocationStack: null };
      obj[0] = tmp;
      obj[1] = id;
      obj[2] = channelId;
      obj[3] = analyticsLocations;
      invite(trackAction[17])(obj);
    }
  }, items);
  closure_8 = scrollOffsetRef.useCallback((arg0) => {
    let id;
    if (invite != null) {
      const guild = tmp.guild;
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
      trackAction(gameId(trackAction[15]).GameProfileTrackActionActions.AnnouncementsItem);
      let obj = invite(trackAction[16]);
      obj = { gameId: null, channelId: null, initialScrollOffset: null };
      obj[0] = gameId;
      obj[1] = channelId;
      obj[2] = scrollOffsetRef.current;
      const result = obj.setGameProfilePendingReturn(obj);
      closeModal();
      obj = { invite: null, guildId: null, channelId: null, messageId: null, analyticsLocationStack: null };
      obj[0] = tmp;
      obj[1] = id;
      obj[2] = channelId;
      obj[3] = arg0;
      obj[4] = analyticsLocations;
      invite(trackAction[17])(obj);
    }
  }, items1);
  if (tmp4.loading) {
    let obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { style: null, children: null };
    obj[0] = tmp.sectionHeader;
    obj = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = gameId(tmp3[5]).intl;
    obj[2] = intl.string(gameId(tmp3[5]).t.B0BV3Y);
    obj[1] = callback(gameId(tmp3[9]).Text, obj);
    const items2 = [callback(channelId, obj)];
    obj1 = { style: null, children: null };
    obj1[0] = tmp.loadingContainer;
    obj1[1] = callback(closure_8, {});
    items2[1] = callback(channelId, obj1);
    obj[1] = items2;
    let tmp7 = callback2(channelId, obj);
  } else {
    tmp7 = null;
    if (null != channelId) {
      tmp7 = null;
      if (0 !== messages.length) {
        const obj2 = { style: null, children: null };
        obj2[0] = tmp.container;
        const obj3 = { style: null, children: null };
        obj3[0] = tmp.sectionHeader;
        const obj4 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: null };
        const intl2 = gameId(tmp3[5]).intl;
        obj4[2] = intl2.string(gameId(tmp3[5]).t.B0BV3Y);
        const items3 = [callback(gameId(tmp3[9]).Text, obj4)];
        const obj5 = { text: null, variant: "tertiary", size: "sm", icon: null, iconPosition: "end", onPress: null };
        const intl3 = gameId(tmp3[5]).intl;
        obj5[0] = intl3.string(gameId(tmp3[5]).t.budhsM);
        obj5[3] = callback(gameId(tmp3[19]).ChevronSmallRightIcon, { size: "sm" });
        obj5[5] = callback;
        items3[1] = callback(gameId(tmp3[18]).Button, obj5);
        obj3[1] = items3;
        const items4 = [callback2(channelId, obj3)];
        const obj6 = {
          showsHorizontalScrollIndicator: false,
          style: null,
          contentContainerStyle: null,
          decelerationRate: "fast",
          snapToInterval: 172,
          snapToStart: false,
          snapToEnd: false,
          children: null,
        };
        ({ smallCardsScroller: obj9[1], smallCardsContainer: obj9[2] } = tmp);
        obj6[7] = messages.map((id) =>
          closure_1_10(closure_1_19, { message: id, onPress: closure_8, guildId, channelId }, id.id),
        );
        items4[1] = callback(invite(tmp3[20]), obj6);
        obj2[1] = items4;
        tmp7 = callback2(channelId, obj2);
        const tmp2Result = invite(tmp3[20]);
      }
    }
  }
  return tmp7;
}
