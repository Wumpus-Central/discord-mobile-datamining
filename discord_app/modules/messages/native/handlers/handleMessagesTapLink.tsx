// === Module 11430: handleMessagesTapURLLink ===

// Module 11430 (handleMessagesTapURLLink)
import set from "set" /* 2 */;
import transitionTo from "transitionTo" /* 1219 */;
import AbortCodes from "AbortCodes" /* 1232 */;
import set2 from "set" /* 1393 */;
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON" /* 1497 */;
import KeyboardTypes from "KeyboardTypes" /* 1625 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;
import parseQueryDefault from "parseQuery" /* 4458 */;
import watchStream from "watchStream" /* 4663 */;
import _modDef5364 from "module_5364" /* 5364 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 5982 */;
import str22 from "str2" /* 6064 */;
import trackInviteDefault from "trackInvite" /* 7211 */;
import identityHook from "identityHook" /* 7913 */;
import canViewInteractionInfo from "canViewInteractionInfo" /* 8155 */;
import getIndexKey from "getIndexKey" /* 8158 */;
import isLinkTrusted from "isLinkTrusted" /* 8660 */;
import _mod8825 from "module_8825" /* 8825 */;
import GameProfileEmbedAction from "GameProfileEmbedAction" /* 8831 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8915 */;
import showChatGDMCustomizeActionSheetDefault from "showChatGDMCustomizeActionSheet" /* 10882 */;
import isAlertOrActionSheetOpen from "isAlertOrActionSheetOpen" /* 11369 */;
import isLinkTrusted2 from "isLinkTrusted" /* 11428 */;
import openPinnedMessagesDefault from "openPinnedMessages" /* 11431 */;
import removeAutomodMessageNotice from "removeAutomodMessageNotice" /* 11432 */;
import showExecutedApplicationCommandPopoutDefault from "showExecutedApplicationCommandPopout" /* 11433 */;
import openGuildHighlightNotificationForPush from "openGuildHighlightNotificationForPush" /* 11436 */;
import closure_4 from "addApplication" /* 4519 */;
import closure_5 from "handleMessageSendFailedAutomod" /* 7859 */;
import closure_6 from "handleQuickSwitcherUpdate" /* 11206 */;
import closure_7 from "createdAt" /* 1934 */;
import closure_8 from "ensureGuildLoaded" /* 1386 */;
import closure_9 from "updateInvite" /* 4462 */;
import closure_10 from "reinjectEphemerals" /* 4736 */;
import closure_11 from "mergeGuildAvatar" /* 1921 */;
import ME from "ME" /* 673 */;

function handleMessagesTapURLLink(data, channelId) {
  let flag = null != data.url;
  if (flag) {
    flag = "" !== data.url;
  }
  if (flag) {
    const node = data.node;
    let flag2 = false;
    if (null != node) {
      let obj = isLinkTrusted2;
      flag2 = false;
      if (obj.isLinkTrusted(node)) {
        const payload = parseQueryDefault(tmp).payload;
        flag2 = false;
        if (payload.type === constants2.INVITE) {
          flag2 = false;
          if (null != payload.inviteCode) {
            invite = invite.getInvite(payload.inviteCode);
            let num = null == invite;
            if (!num) {
              num = !tmp2(7491).isGuildScheduledEventInviteEmbed(invite);
              const tmp2Result = tmp2(7491);
            }
            if (!num) {
              tmp4(11429)(invite);
              num = 0;
            }
            flag2 = !num;
          }
        }
        tmp4 = importDefault;
      }
      tmp2 = require;
    }
    if (!flag2) {
      const payload2 = parseQueryDefault(data.url).payload;
      let flag3 = false;
      if (payload2.type === constants2.GAME_PROFILE) {
        const gameId = payload2.gameId;
        let tmp13;
        if (null != channelId) {
          if (null != data.messageId) {
            message = message.getMessage(channelId, data.messageId);
            let id;
            if (message != null) {
              id = message.author.id;
            }
            tmp13 = id;
          }
        }
        obj = { gameId: null, source: null, sourceUserId: null, gameProfileModalChecks: null };
        obj[0] = gameId;
        obj[1] = GameProfileEmbedAction.GameProfileSources.Deeplink;
        obj[2] = tmp13;
        obj = { shouldOpenGameProfile: true, gameId: null };
        obj[1] = gameId;
        obj[3] = obj;
        _mod8825.default.openGameProfileModal(obj);
        flag3 = true;
        const _default = _mod8825.default;
      }
      flag2 = flag3;
    }
    flag = true;
    if (!flag2) {
      obj1 = { href: null, trusted: null, messageId: null, channelId: null };
      obj1[0] = data.url;
      let isLinkTrustedResult = null != data.node;
      if (isLinkTrustedResult) {
        isLinkTrustedResult = tmp19(11428).isLinkTrusted(data.node);
        const tmp19Result = tmp19(11428);
      }
      obj1[1] = isLinkTrustedResult;
      obj1[2] = data.messageId;
      obj1[3] = channelId;
      isLinkTrusted.handleClick(obj1);
      flag = true;
      const obj5 = isLinkTrusted;
      tmp19 = require;
    }
  }
  return flag;
}
const getSection = getIndexKey.getSection;
({ AnalyticsLocations: closure_12, LinkingTypes: map1, Routes: closure_14 } = ME);
const AppLauncherRouteName = APP_LAUNCHER_BUILT_IN_SECTION_ICON.AppLauncherRouteName;
const StaticChannelRoute = set2.StaticChannelRoute;
const NotificationTypes = str22.NotificationTypes;
let closure_18 = AbortCodes.OpenThreadAnalyticsLocations;
let result = set.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapLink.tsx");

export { handleMessagesTapURLLink };
export const handleMessagesTapLink = function handleMessagesTapLink(tapLinkData) {
  ({ chatInputRef, message, messageChannel, selectedChannelId: notificationType } = tapLinkData);
  const data = tapLinkData.tapLinkData.data;
  if (true === tapLinkData.allowWithinModal) {
    let MESSAGE_EMBED = handleMessagesTapURLLink;
    let id;
    if (messageChannel != null) {
      id = messageChannel.id;
    }
    if (!MESSAGE_EMBED(data, id)) {
      if (null != data.action) {
        let action = data.action;
        switch (action) {
          case "Error":
          break;
          case "HTTP":
          break;
          case "T":
          break;
          case "HermesInternal":
          break;
          case "Icon":
          break;
          case "IconComponent":
          break;
          case "c":
          break;
          case "p":
          break;
          case "LengthDelimited":
          break;
          case "limit":
          break;
          case "i":
          break;
          case "it":
          break;
          case "d":
          break;
          case "Map":
          break;
          case "Math":
          break;
          case "h":
          break;
          case "Number":
          break;
          case "Object":
          break;
          case "ct":
          break;
          case "PX_16":
          break;
          case "flex":
          break;
          case "flexDirection":
          break;
          case "PX_8":
          break;
          case "Path":
          break;
          case "Promise":
          break;
          case "s":
          break;
          case "Reflect":
          break;
          case "Set":
          break;
          case "format":
          break;
          case "formatToPlainString":
          break;
          case "String":
          break;
          case "Symbol":
          break;
          case "Text":
          break;
          case "x":
          break;
          case "View":
          break;
          case "w":
          break;
          case "WireType":
          break;
          case "__closure":
          break;
          case "__d":
          break;
          case "__esModule":
          break;
          case "__initData":
          break;
          case "filter":
          break;
          case "__packager_asset":
          break;
          case "k":
          break;
          case "set":
          break;
          case "__workletHash":
          break;
          case "_desired":
          break;
          case "_distance":
          break;
          case "st":
          break;
          case "accessibilityLabel":
          break;
          case "accessibilityRole":
          break;
          case "accessible":
          break;
          case "padding":
          break;
          case "paddingHorizontal":
          break;
          case "add":
          break;
          case "alignItems":
          break;
          case "ao":
          break;
          case "applicationId":
          break;
          case "ti":
          break;
          case "apply":
          break;
          case "assign":
          break;
          case "backgroundColor":
          break;
          case "round":
          break;
          case "bm":
          break;
          case "body":
          break;
          case "borderRadius":
          break;
          case "bottom":
          break;
          case "call":
          break;
          case "channel":
          break;
          case "channelId":
          break;
          case "channel_id":
          break;
          case "id":
          break;
          case "children":
          break;
          case "cix":
          break;
          case "ix":
          break;
          case "unicodeVersion":
          break;
          case "code":
          break;
          case "color":
          break;
          case "colors":
          break;
          case "concat":
          break;
          case "construct":
          break;
          case "constructor":
          break;
          case "container":
          break;
          case "content":
          break;
          case "context":
          break;
          case "text":
          break;
          case "count":
          break;
          case "create":
          break;
          case "createStyles":
          break;
          case "ty":
          break;
          case "current":
          break;
          case "cursor":
          break;
          case "data":
          break;
          case "ddd":
          break;
          case "default":
          break;
          case "defineProperty":
          break;
          case "op":
          break;
          case "delete":
          break;
          case "description":
          break;
          case "ip":
          break;
          case "disabled":
          break;
          case "sa":
          break;
          case "dispatch":
          break;
          case "displayName":
          break;
          case "diversity":
          break;
          case "v":
          break;
          case "done":
          break;
          case "duration":
          break;
          case "enabled":
          break;
          case "end":
          break;
          case "enumerable":
            const actionResult = action(notificationType.id);
            let isBlockedEdit;
            if (actionResult != null) {
              isBlockedEdit = actionResult.isBlockedEdit;
            }
            if (isBlockedEdit) {
              const message3 = data.message;
              let id1;
              if (message3 != null) {
                id1 = message3.id;
              }
              const result = removeAutomodMessageNotice.removeAutomodMessageNotice(id1);
              const obj16 = removeAutomodMessageNotice;
            } else {
              const result1 = trackInviteDefault.dismissAutomatedMessage(data.message);
              const obj15 = trackInviteDefault;
            }
          break;
          case "error":
          break;
          case "exports":
          break;
          case "fileFinishedImporting":
          break;
          case "fill":
          break;
          case "find":
          break;
          case "ind":
          break;
          case "flags":
          break;
          case "forEach":
          break;
          case "gap":
          break;
          case "get":
          break;
          case "getChannel":
          break;
          case "getCurrentUser":
          break;
          case "guild":
          break;
          case "guildId":
          break;
          case "guild_id":
          break;
          case "has":
          break;
          case "hasDiversityParent":
          break;
          case "hash":
          break;
          case "hd":
          break;
          case "header":
          break;
          case "height":
          break;
          case "httpServerLocation":
          break;
          case "icon":
          break;
          case "includes":
          break;
          case "index":
          break;
          case "indexOf":
          break;
          case "intl":
          break;
          case "items":
          break;
          case "join":
          break;
          case "jsx":
          break;
          case "jsxs":
          break;
          case "justifyContent":
          break;
          case "key":
          break;
          case "keys":
          break;
          case "kind":
          break;
          case "ks":
          break;
          case "space":
          break;
          case "label":
          break;
          case "lc":
          break;
          case "left":
          break;
          case "length":
          break;
          case "lj":
          break;
          case "loadJsonAsset":
          break;
          case "location":
          break;
          case "map":
          break;
          case "marginTop":
          break;
          case "marginBottom":
          break;
          case "match":
          break;
          case "max":
          break;
          case "memo":
          break;
          case "message":
          break;
          case "messageId":
          break;
          case "method":
          break;
          case "methodobject":
          break;
          case "withTiming":
          break;
          case "min":
          break;
          case "mn":
          break;
          case "mode":
          break;
          case "name":
          break;
          case "names":
          break;
          case "next":
          break;
          case "nm":
          break;
          case "no":
          break;
          case "now":
          break;
          case "np":
          break;
          case "onPress":
          break;
          case "opacity":
          break;
          case "options":
          break;
          case "parent":
          break;
          case "paths":
          break;
          case "pos":
          break;
          case "position":
          break;
          case "props":
          break;
          case "prototype":
          break;
          case "type":
          break;
          case "push":
          break;
          case "radii":
          break;
          case "raw":
          break;
          case "ref":
          break;
          case "registerAsset":
          break;
          case "rejectWithError":
          break;
          case "replace":
          break;
          case "resizeMode":
          break;
          case "size":
          break;
          case "resolve":
          break;
          case "result":
          break;
          case "right":
          break;
          case "runOnJS":
          break;
          case "scales":
          break;
          case "shapes":
          break;
          case "sk":
          break;
          case "skuId":
          break;
          case "slice":
          break;
          case "source":
          break;
          case "split":
          break;
          case "spriteIndex":
          break;
          case "sr":
          break;
          case "start":
          break;
          case "state":
          break;
          case "status":
          break;
          case "substring_i":
          break;
          case "string":
          break;
          case "style":
          break;
          case "surrogates":
          break;
          case "tag":
          break;
          case "test":
          break;
          case "then":
          break;
          case "title":
          break;
          case "toCharArray$esjava$1":
          break;
          case "toLowerCase":
          break;
          case "toString":
          break;
          case "top":
          break;
          case "track":
          break;
          case "transform":
          break;
          case "uri":
          break;
          case "url":
          break;
          case "useCallback":
          break;
          case "useEffect":
          break;
          case "useMemo":
          break;
          case "useRef":
          break;
          case "useState":
          break;
          case "useStateFromStores":
          break;
          case "user":
          break;
          case "userId":
          break;
          case "value":
          break;
          case "values":
          break;
          case "variant":
          break;
          case "width":
          break;
          case "window":
          break;
          case "withSpring":
          break;
          case "":
          break;
          case "isArrayBuffer":
          break;
          case "A":
          break;
          case "ay":
          break;
          case "guildScheduledEvent":
          break;
          case "guildScheduledEventId":
          break;
          case "extraBottomHeight":
          break;
          case "$ZodBoolean":
          break;
          case "ZodBoolean":
          break;
          case "B":
          break;
          case "le":
          break;
          case "an":
          break;
          case "n":
          break;
          case "useActionBarPrimaryButton":
          break;
          case "ActionBarPrimaryButton":
          break;
          case "u":
          break;
          case "tt":
          break;
          case "on":
          break;
          case "$ZodDate":
          break;
          case "ZodDate":
          break;
          case "D":
          break;
          case "DateToSystemTimezoneSetter":
          break;
          case "at":
          break;
          case "te":
          break;
          case "mez":
          break;
          case "Setter":
          break;
          case "useDetectorAttachmentGuard":
          break;
          case "entitlementBranchId":
          break;
          case "NitroGem24Lottie":
          break;
          case "MarkupParserNodeTypeError":
          break;
          case "E":
          break;
          case "Err":
          break;
          case "ro":
          break;
          case "or":
          break;
          case "BOT_HTTP_INTERACTIONS":
          break;
          case "H":
          break;
          case "HT":
          break;
          case "TP":
          break;
          case "P":
          break;
          case "INTERACTIONS":
          break;
          case "NSFW_SERVER":
          break;
          case "NSFW_SERVER_AGE_RESTRICTION":
          break;
          case "AGE_RESTRICTION_STATUS_RESTRICTIVENESS_ORDERING":
          break;
          case "RING_CALL_ACCEPTED":
          break;
          case "CALL_ACCEPT":
          break;
          case "rm":
          break;
          case "m":
          break;
          case "me":
          break;
          case "mes":
          break;
          case "I":
          break;
          case "InternalCard":
          break;
          case "ter":
          break;
          case "na":
          break;
          case "al":
          break;
          case "CardA11yWrapper":
          break;
          case "perGuildMaxCount":
          break;
          case "flag_sm":
          break;
          case "getChannelIcon":
          break;
          case "getChannelIconComponent":
          break;
          case "getChannelIconComponentWithGuild":
          break;
          case "co":
          break;
          case "C":
          break;
          case "Component":
          break;
          case "om":
          break;
          case "mp":
          break;
          case "po":
          break;
          case "pon":
          break;
          case "one":
          break;
          case "ne":
          break;
          case "en":
          break;
          case "$ZodCheckMaxLength":
          break;
          case "kMaxLength":
          break;
          case "L":
          break;
          case "eng":
          break;
          case "ng":
          break;
          case "el":
          break;
          case "li":
          break;
          case "lim":
          break;
          case "limited":
          break;
          case "limitedBadgeRow":
          break;
          case "mi":
          break;
          case "mit":
          break;
          case "withTouchEventBoundary":
          break;
          case "TouchEventBoundary":
          break;
          case "createGuildReportFalseAlarmSystemMessage":
          break;
          case "$ZodMap":
          break;
          case "ZodMap":
          break;
          case "M":
          break;
          case "ap":
          break;
          case "compose":
          break;
          case "composed":
          break;
          case "composedPath":
          break;
          case "rules_version":
          break;
          case "onVideoEnd":
          break;
          case "AppStorePremiumProductIdsToPremiumBundledItems":
          break;
          case "ProductIds":
          break;
          case "rod":
          break;
          case "ItemsSortingHat":
          break;
          case "ToIntlMathematicalValue":
          break;
          case "th":
          break;
          case "ValueSetter":
          break;
          case "$ZodCheckNumberFormat":
          break;
          case "N":
          break;
          case "NumberFormat":
          break;
          case "um":
          break;
          case "b":
          break;
          case "be":
          break;
          case "$ZodObject":
          break;
          case "$ZodObjectJIT":
          break;
          case "ZodObject":
          break;
          case "O":
          break;
          case "j":
          break;
          case "je":
          break;
          case "IT":
          break;
          case "FadeInRight":
          break;
          case "PLUM_5":
          break;
          case "MEDIA_PICKER_SEND_BUTTON_SPRING":
          break;
          case "marginHorizontal":
          break;
          case "Direction":
          break;
          case "rect":
          break;
          case "DURATION_SECONDS":
          break;
          case "SECONDS":
          break;
          case "PX_80":
          break;
          case "_":
          break;
          case "system_channel_id":
          break;
          case "AUTO_MODERATION_REMOVE_REGEX_PATTERNS":
          break;
          case "RNSVGClipPath":
          break;
          case "ClipPath":
          break;
          case "$ZodPromise":
          break;
          case "ZodPromise":
          break;
          case "PromiseDeduper":
          break;
          case "is":
          break;
          case "se":
          break;
          case "dup":
          break;
          case "perUserFpsWindow":
          break;
          case "woman_and_man_holding_hands_tone1_tone4":
          break;
          case "guildEmojis":
          break;
          case "isAVI":
          break;
          case "isAVIF":
          break;
          case "IFD_TYPE_GPS":
          break;
          case "GPSAltitude":
          break;
          case "GPSAltitudeRef":
          break;
          case "Altitude":
          break;
          case "R":
          break;
          case "ReflectionBinaryReader":
          break;
          case "ef":
          break;
          case "f":
          break;
          case "BinaryReader":
          break;
          case "Touchable":
          break;
          case "TouchableHaptic":
          break;
          case "lastWarningFetchDayStart":
          break;
          case "artWrapper":
          break;
          case "performKeyboardAwareNavigation":
          break;
          case "selectorOuterContainer":
          break;
          case "ethernet":
          break;
          case "Google":
          break;
          case "Google TV":
          break;
          case "TV":
          break;
          case "$ZodSet":
          break;
          case "ZodSet":
          break;
          case "S":
          break;
          case "et":
          break;
          case "postformat":
          break;
          case "form":
          break;
          case "orm":
          break;
          case "ma":
          break;
          case "mat":
          break;
          case "lai":
          break;
          case "StringBuilder":
          break;
          case "tr":
          break;
          case "tri":
          break;
          case "ring":
          break;
          case "in":
          break;
          case "ing":
          break;
          case "g":
          break;
          case "VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE":
          break;
          case "MESSAGE_LONG_PRESS_MENU":
          break;
          case "$ZodSymbol":
          break;
          case "ZodSymbol":
          break;
          case "SymbolLock":
          break;
          case "bo":
          break;
          case "bol":
          break;
          case "QUEST_BAR_MOBILE":
          break;
          case "QUEST_BAR_MOBILE_TIME_TO_FIRST_PAINT":
          break;
          case "INTERACTIVE_MUTED":
          break;
          case "woman_kneeling_facing_right_tone4":
          break;
          case "man_kneeling_facing_right_tone4":
          break;
          case "fuseboxNetworkInspectionEnabled":
          break;
          case "ActionSheetHeaderPressableText":
          break;
          case "Pressable":
          break;
          case "ex":
          break;
          case "ext":
          break;
          case "isProfileEffectRecord":
          break;
          case "AccessibilityFocusView":
          break;
          case "V":
          break;
          case "W":
          break;
          case "ir":
          break;
          case "re":
          break;
          case "reType":
          break;
          case "pe":
          break;
          case "maxDynamicContentSize":
          break;
          case "ACTION_SHEET_START_HEIGHT_RATIO":
          break;
          case "STAR":
          break;
          case "START":
          break;
          case "IO":
          break;
          case "__":
          break;
          case "__c":
          break;
          case "cl":
          break;
          case "clo":
          break;
          case "lo":
          break;
          case "los":
          break;
          case "os":
          break;
          case "su":
          break;
          case "sur":
          break;
          case "ur":
          break;
          case "isExpanded":
          break;
          case "__data__":
          break;
          case "_d":
          break;
          case "_data":
          break;
          case "__REMOTEDEV__":
          break;
          case "__DISCORD_WINDOW_ID":
          break;
          case "__iteratees__":
          break;
          case "_iter":
          break;
          case "_iterate":
          break;
          case "iteratee":
          break;
          case "tee":
          break;
          case "__SENTRY_RELEASE__":
          break;
          case "SENTRY_RELEASE":
          break;
          case "__INTERNAL_SLOT_MAP__":
          break;
          case "__BUNDLE_START_TIME__":
          break;
          case "__e":
          break;
          case "Mo":
          break;
          case "ModuleNotFoundError":
          break;
          case "du":
          break;
          case "GroupGamingSpotIllustration":
          break;
          case "__i":
          break;
          case "__init":
          break;
          case "_i":
          break;
          case "_init":
          break;
          case "init":
          break;
          case "ni":
          break;
          case "nit":
          break;
          case "ta":
          break;
          case "__filtered__":
          break;
          case "lte":
          break;
          case "__SENTRY_DEBUG__":
          break;
          case "__FORMATJS_LISTFORMAT_DATA__":
          break;
          case "TJS":
          break;
          case "pa":
          break;
          case "pack":
          break;
          case "package":
          break;
          case "ack":
          break;
          case "ka":
          break;
          case "age":
          break;
          case "ge":
          break;
          case "ger":
          break;
          case "_a":
          break;
          case "as":
          break;
          case "ass":
          break;
          case "asset":
          break;
          case "assetDark":
          break;
          case "ss":
          break;
          case "_w":
          break;
          case "wo":
          break;
          case "work":
          break;
          case "worklet":
          break;
          case "kl":
          break;
          case "let":
          break;
          case "Hash":
          break;
          case "sh":
          break;
          case "flag_de":
          break;
          case "de":
          break;
          case "desired":
          break;
          case "es":
          break;
          case "si":
          break;
          case "sir":
          break;
          case "red":
          break;
          case "redBoxV2Android":
          break;
          case "getExperimentBucketName":
          break;
          case "di":
          break;
          case "dist":
          break;
          case "distance":
          break;
          case "distanceAttenuationEnabled":
          break;
          case "sta":
          break;
          case "tan":
          break;
          case "ce":
          break;
          case "NoResults":
          break;
          case "NoResultsAlt":
          break;
          case "access":
          break;
          case "accessibilityLabelCalendarFormat":
          break;
          case "cc":
            let obj = { userId: null, channelId: null, messageId: null };
            ({ userId: obj22[0], messageChannelId: obj22[1], messageId: obj22[2] } = data);
            showUserProfileActionSheetDefault(obj);
          break;
          case "bi":
          break;
          case "bil":
            if (null != data.messageReference) {
              let guild_id = data.messageReference.guild_id;
              if (null != guild_id) {
                const _HermesInternal = HermesInternal;
                const obj20 = ACTION_SHEET_HEIGHT_HALFDefault;
                obj = { guildId: null };
                obj[0] = guild_id;
                obj20.openLazy(asyncRequireImpl(9026, dependencyMap.paths), "GuildProfileActionSheet:" + guild_id, obj);
                const tmp93 = asyncRequireImpl(9026, dependencyMap.paths);
              }
            }
          break;
          case "lit":
          break;
          case "Label":
            const stream = data.stream;
            if (null != stream) {
              const voiceChannel = _modDef5364.selectVoiceChannel(stream.channelId);
              const obj18 = _modDef5364;
              const result2 = watchStream.watchStreamAndTransitionToStream(stream);
              const obj19 = watchStream;
            }
          break;
          case "ab":
          break;
          case "abe":
            openPinnedMessagesDefault(data.messageChannelId, "pinned-message-system-message");
          break;
          case "bel":
          break;
          case "PREMIUM_TIER_0_HEADER_GRADIENT_2":
            obj1 = { channelId: null };
            obj1[0] = data.messageChannelId;
            showChatGDMCustomizeActionSheetDefault(obj1);
          break;
          case "Role":
          break;
          case "RoleFlags":
            MESSAGE_EMBED = getMessage;
            action = getMessage.getMessage;
          break;
          case "scrollToEnd":
          break;
          case "addInpInstrumentationHandler":
            let obj2 = { userId: null, channelId: null, messageId: null, sourceAnalyticsLocations: null };
            ({ userId: obj14[0], messageChannelId: obj14[1], messageId: obj14[2] } = data);
            const items = [QUICK_SWITCHERDefault.USERNAME];
            obj2[3] = items;
            showUserProfileActionSheetDefault(obj2);
            const tmp68 = showUserProfileActionSheetDefault;
          break;
          case "r_mark_suffix_with_optional_n_consonant$esjava$0":
          break;
          case "rBIGBL":
            let interaction;
            if (message != null) {
              interaction = message.interaction;
            }
            if (null != interaction) {
              if (null != messageChannel) {
                user = user.getUser(data.userId);
                if (null != user) {
                  user = require;
                  user = dependencyMap;
                  if (obj24.isPrimaryEntryPointCommandMessage(message)) {
                    if (null != message.applicationId) {
                      user = store;
                      user = store.getChannel(data.messageChannelId);
                      if (null != user) {
                        user = getSection;
                        let obj3 = { channel: null, type: "channel" };
                        obj3[0] = user;
                        user = getSection(obj3, message.applicationId);
                        const descriptor = user.descriptor;
                        let application;
                        if (descriptor != null) {
                          application = descriptor.application;
                        }
                        if (null != application) {
                          if (chatInputRef != null) {
                            const current4 = chatInputRef.current;
                            if (current4 != null) {
                              const obj4 = { type: null, context: null };
                              obj4[0] = user(1625).KeyboardTypes.APP_LAUNCHER;
                              let obj5 = { initialRouteName: null, initiallyExpanded: true, application: null, installOnDemand: null };
                              user = AppLauncherRouteName;
                              obj5[0] = AppLauncherRouteName.APPLICATION_VIEW;
                              obj5[2] = user.descriptor.application;
                              const isGuildInstalled = user.isGuildInstalled;
                              let tmp64 = !isGuildInstalled;
                              if (!isGuildInstalled) {
                                tmp64 = !user.isUserInstalled;
                              }
                              obj5[3] = tmp64;
                              obj4[1] = obj5;
                              current4.openCustomKeyboard(obj4);
                            }
                          }
                        } else if (chatInputRef != null) {
                          const current3 = chatInputRef.current;
                          if (current3 != null) {
                            let obj6 = { type: null, context: null };
                            obj6[0] = user(1625).KeyboardTypes.APP_LAUNCHER;
                            let obj7 = { initialRouteName: null, initiallyExpanded: true, applicationId: null, installOnDemand: true };
                            user = AppLauncherRouteName;
                            obj7[0] = AppLauncherRouteName.APPLICATION_VIEW;
                            obj7[2] = message.applicationId;
                            obj6[1] = obj7;
                            user = current3.openCustomKeyboard(obj6);
                          }
                        }
                      }
                    }
                  } else {
                    let author;
                    if (message != null) {
                      author = message.author;
                    }
                    if (null != author) {
                      user = importDefault;
                      const obj8 = { author: null, channelId: null, chatInputRef: null, messageId: null, user: null, applicationUser: null, guildId: null, messageType: null };
                      user = showExecutedApplicationCommandPopoutDefault;
                      obj8[0] = user(4747).getUserAuthor(message.interaction.user, messageChannel);
                      obj8[1] = data.messageChannelId;
                      obj8[2] = chatInputRef;
                      obj8[3] = data.messageId;
                      obj8[4] = user;
                      let author1;
                      user = closure_7;
                      if (message != null) {
                        author1 = message.author;
                      }
                      user = new user(author1);
                      obj8[5] = user;
                      const guildId = messageChannel.getGuildId();
                      obj8[6] = guildId;
                      obj8[7] = data.messageType;
                      user(obj8);
                      const userResult = user(4747);
                    }
                  }
                  obj24 = canViewInteractionInfo;
                }
              }
            }
          break;
          case "Q8gkVL":
          break;
          case "accessibleDismiss":
            const application1 = application.getApplication(data.applicationUserId);
            if (chatInputRef != null) {
              const current2 = chatInputRef.current;
              if (current2 != null) {
                if (null == application1) {
                  const obj9 = { type: null, context: null };
                  obj9[0] = KeyboardTypes.KeyboardTypes.APP_LAUNCHER;
                  const obj10 = { initialRouteName: null, applicationId: null, initiallyExpanded: true };
                  obj10[0] = AppLauncherRouteName.APPLICATION_VIEW;
                  obj10[1] = data.applicationUserId;
                  obj9[1] = obj10;
                  let obj11 = obj9;
                } else {
                  obj11 = { type: null, context: null };
                  obj11[0] = KeyboardTypes.KeyboardTypes.APP_LAUNCHER;
                  const obj12 = { initialRouteName: null, application: null, initiallyExpanded: true };
                  obj12[0] = AppLauncherRouteName.APPLICATION_VIEW;
                  obj12[1] = application1;
                  obj11[1] = obj12;
                }
                current2.openCustomKeyboard(obj11);
              }
            }
          break;
          case "accessibleDismissStyle":
          break;
          case "ble":
            const channel = store.getChannel(data.threadId);
            if (null != channel) {
              guild_id = undefined;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              user(guild_id, channel.id, constants3.EMBED);
            }
          break;
          case "leg_tone3":
          break;
          case "FAB_BUTTON_SIZE":
            obj7 = trackInviteDefault;
            ({ targetChannelId: obj9[0], targetMessageId: obj9[1], messageId: obj9[3] } = data);
            obj7.jumpToMessage({ channelId: null, messageId: null, flash: true, returnMessageId: null });
            const obj13 = { channelId: null, messageId: null, flash: true, returnMessageId: null };
          break;
          case "minWidth":
          break;
          case "pad":
            obj5 = transitionTo;
            obj5.transitionTo(closure_14.CHANNEL(data.guildId, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
            obj6 = identityHook;
            const result3 = obj6.trackRoleSubscriptionPurchaseMessageTierClick(data.guildId, data.channelId, data.messageId, data.roleSubscriptionListingId);
          break;
          case "ad":
          break;
          case "adding":
            const channel1 = store.getChannel(data.message.channel_id);
            let guild_id1;
            if (channel1 != null) {
              guild_id1 = channel1.guild_id;
            }
            if (null != guild_id1) {
              const notificationType2 = data.notificationType;
              if (NotificationTypes.TRENDING_CONTENT_PUSH === notificationType2) {
                obj3 = openGuildHighlightNotificationForPush;
                ({ message: message2, notificationType } = data);
                MESSAGE_EMBED = constants.MESSAGE_EMBED;
                const selectedSummaryResult = closure_6.selectedSummary(data.message.channel_id);
                let str2;
                if (selectedSummaryResult != null) {
                  str2 = selectedSummaryResult.id;
                }
                if (str2 == null) {
                  str2 = "unknown";
                }
                action = { summary_id: null };
                action[0] = str2;
                const result4 = obj3.openGuildHighlightNotificationForPush(guild_id1, message2, notificationType, MESSAGE_EMBED, action);
              } else if (tmp99.TOP_MESSAGE_PUSH === notificationType2) {
                obj2 = openGuildHighlightNotificationForPush;
                const result5 = obj2.openGuildHighlightNotificationForPush(guild_id1, data.message, data.notificationType, constants.MESSAGE_EMBED);
              } else {
                user = require;
                user = dependencyMap;
                user = importDefault;
                user = asyncRequireImpl(11459, dependencyMap.paths);
                MESSAGE_EMBED = { location: null, messageId: null, notificationType: null };
                action = constants;
                MESSAGE_EMBED[0] = action.MESSAGE_EMBED;
                MESSAGE_EMBED[1] = data.message.id;
                let TOP_MESSAGE_PUSH = data.notificationType;
                if (TOP_MESSAGE_PUSH == null) {
                  TOP_MESSAGE_PUSH = tmp99.TOP_MESSAGE_PUSH;
                }
                MESSAGE_EMBED[2] = TOP_MESSAGE_PUSH;
                ACTION_SHEET_HEIGHT_HALFDefault.openLazy(user, "NotificationSurvey", MESSAGE_EMBED);
                const obj23 = ACTION_SHEET_HEIGHT_HALFDefault;
              }
            }
          break;
          case "dd":
          break;
          case "din":
            if (chatInputRef != null) {
              const current = chatInputRef.current;
              if (current != null) {
                let flag = data.addSpace;
                if (flag == null) {
                  flag = true;
                }
                current.insertText(data.text, null, flag);
              }
            }
          break;
          case "z":
          break;
          case "zo":
          break;
          case "zon":
          break;
          case "tal":
          break;
          case "collapseText":
          break;
          case "paddingVertical":
          break;
          case "getVideoQoEMetricsConfig":
          break;
          case "UNKNOWN_PAYMENT_SOURCE":
          break;
          case "PAYMENT_SOURCE_REQUIRED":
          break;
          case "RED_NEW_34":
          break;
          case "ali":
          break;
          case "align":
          break;
          case "alignItemsAtEnd":
          break;
          case "alignItemsAtEndPaddingEnabled":
          break;
          case "ig":
          break;
          case "em":
          break;
          case "ms":
          break;
          case "loadTimeCollector":
          break;
          case "GuildEntityDao":
          break;
          case "EntityDao":
          break;
          case "Dao":
          break;
          case "renderLatestMessages":
          break;
          case "app":
          break;
          case "application":
          break;
          case "applicationIdToGuildIds":
          break;
          case "pl":
          break;
          case "ca":
          break;
          case "cat":
          break;
          case "tio":
          break;
          case "io":
          break;
          case "showHelp":
          break;
          case "HelpMessage":
          break;
          case "HelpMessageTypes":
          break;
          case "MessageTypesWithLazyLoadedReferences":
          break;
          case "_applyCombination":
          break;
          case "ly":
          break;
          case "trequest":
          break;
          case "requestActivityItems":
          break;
          case "backoffTimeSec":
          break;
          case "../../../../lib/assign":
          break;
          case "../../../lib/assign":
          break;
          case "../../lib/assign":
          break;
          case "../lib/assign":
          break;
          case ".":
          break;
          case "./":
          break;
          case "lib":
          break;
          case "assignSimilarDate":
          break;
          case "sign":
          break;
          case "gn":
          break;
          case "map_of_japan":
          break;
          case "japan":
          break;
          case "japanese_castle":
          break;
          case "foi":
          break;
          case "ios_backgroundColor":
          break;
          case "ba":
          break;
          case "back":
          break;
          case "background":
          break;
          case "backgroundColorGradient":
          break;
          case "kg":
          break;
          case "gr":
          break;
          case "un":
          break;
          case "und":
          break;
          case "Color":
          break;
          case "ACTIVITY_LAUNCH_NOT_IN_EXPERIMENT":
          break;
          case "EXPERIMENT":
          break;
          case "EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS":
          break;
          case "SPECTATOR_MODE":
          break;
          case "_listRef":
          break;
          case "listRef":
          break;
          case "listRefHappeningNow":
          break;
          case "HappeningNowCardHeader":
          break;
          case "HeaderSubmittingIndicator":
          break;
          case "_sessionValue":
          break;
          case "onValueReached":
          break;
          case "_bodyArrayBuffer":
          break;
          case "dy":
          break;
          case "safeAreaRight":
          break;
          case "bor":
          break;
          case "border":
          break;
          case "order":
          break;
          case "der":
          break;
          case "Radius":
          break;
          case "iu":
          break;
          case "isCurrentUserTeen":
          break;
          case "Teen Screen Time Illo":
          break;
          case "overflow_bottom":
          break;
          case "_bottom":
          break;
          case "bot":
          break;
          case "bottom-right":
          break;
          case "ott":
          break;
          case "otto":
          break;
          case "tom":
          break;
          case "right shift":
          break;
          case "shiftLeft":
          break;
          case "DynamicallyInjectedByGestureHandler":
          break;
          case "cal":
          break;
          case "all":
          break;
          case "ll":
          break;
          case "_channelId":
          break;
          case "ch":
          break;
          case "cha":
          break;
          case "ha":
          break;
          case "ann":
          break;
          case "nn":
          break;
          case "isSelf":
          break;
          case "isSelfDeaf":
          break;
          case "afk_channel_id":
          break;
          case "_id":
          break;
          case "family_adult_adult_child":
          break;
          case "family_adult_adult_child_child":
          break;
          case "_children":
          break;
          case "_childrenToCellKey":
          break;
          case "child":
          break;
          case "hi":
          break;
          case "dr":
          break;
          case "ren":
          break;
          case "_longestInteractionMap":
          break;
          case "applicationTopWrapperScrollView":
          break;
          case "onTop":
          break;
          case "wMWyci":
          break;
          case "ci":
          break;
          case "ix8XIj":
          break;
          case "ClientOutdatedAcceptGiftError":
          break;
          case "td":
          break;
          case "Accept":
          break;
          case "uni":
          break;
          case "Version":
          break;
          case "burst_colors":
          break;
          case "col":
          break;
          case "ors":
          break;
          case "rs":
          break;
          case "isAutomatedPageLoadSpan":
          break;
          case "kiss_tone2":
          break;
          case "timeoutTimer":
          break;
          case "merman_medium_light_skin_tone":
          break;
          case "addUserId":
          break;
          case "disableGuildSelect":
          break;
          case "GuildSelectDefaultIcon":
          break;
          case "concatSettings":
          break;
          case "substreams":
          break;
          case "streams":
          break;
          case "jfif":
          break;
          case "$constructor":
          break;
          case "const":
          break;
          case "constr":
          break;
          case "ons":
          break;
          case "str":
          break;
          case "ru":
          break;
          case "tor":
          break;
          case "windowLength":
          break;
          case "LaunchApplication15":
          break;
          case "minutes":
          break;
          case "minutesAgo":
          break;
          case "goLiveUpsellVariant":
          break;
          case "trackUserProfileAction":
          break;
          case "useGetOrFetchSubscriptionPlan":
          break;
          case "_container":
          break;
          case "contain":
          break;
          case "containerBorderColor":
          break;
          case "ai":
          break;
          case "ner":
          break;
          case "creative_content":
          break;
          case "_contentAvailable":
          break;
          case "ten":
          break;
          case "tent":
          break;
          case "__wrapped__":
          break;
          case "__context":
          break;
          case "_context":
          break;
          case "contextBarRow":
          break;
          case "withAlphabeticalSections":
          break;
          case "man_with_turban":
          break;
          case "man_with_turban_tone1":
          break;
          case "_installSetStateHooks":
          break;
          case "install":
          break;
          case "SafetyBookletSpotIllustration":
          break;
          case "flag_ug":
          break;
          case "USER_FLOW_TRANSITION":
          break;
          case "getConstants":
          break;
          case "getConstantsForViewManager":
          break;
          case "parseUnicodeLocaleId":
          break;
          case "enablePanDownToClose":
          break;
          case "AccountAgeTier10LargeBadge":
          break;
          case "cou":
          break;
          case "Badge":
          break;
          case "getActiveTab":
          break;
          case "getActiveTabId":
          break;
          case "cr":
          break;
          case "les":
          break;
          case "connectionMetadata":
          break;
          case "connectionMetadataField":
          break;
          case "message_type":
          break;
          case "_$esjava$current":
          break;
          case "cu":
          break;
          case "currentApp":
          break;
          case "currentAppIcon":
          break;
          case "containerForFiveButtonLayout":
          break;
          case "onLayoutChange":
          break;
          case "getAssetDisplayConfig":
          break;
          case "AssetDisplayConfigRecord":
          break;
          case "destination":
          break;
          case "destinationKey":
          break;
          case "onKeyCommand":
          break;
          case "unread_count":
          break;
          case "setHasInvalidUrlError":
          break;
          case "_$esjava$cursor":
          break;
          case "cursorColor":
          break;
          case "so":
          break;
          case "THROUGHLINE_URL":
          break;
          case "propList":
          break;
          case "strm":
          break;
          case "NitroRubyBadgeLargeBadge":
          break;
          case "_clientSdkMetadata":
          break;
          case "MetadataFields":
          break;
          case "tada":
          break;
          case "da":
          break;
          case "dddd":
          break;
          case "RELATIONSHIP_INVALUD_USER_BOT":
          break;
          case "__defaultLocale":
          break;
          case "def":
          break;
          case "defaultLocale":
          break;
          case "fa":
          break;
          case "au":
          break;
          case "lt":
          break;
          case "localeIdentifier":
          break;
          case "define":
          break;
          case "efi":
          break;
          case "fi":
          break;
          case "fin":
          break;
          case "NitroWumpusFlightUpwards3dIllustration":
          break;
          case "prepareStackTrace":
          break;
          case "nand":
          break;
          case "doUpload":
          break;
          case "UploadErrorUpload":
          break;
          case "UploadErrorProgress":
          break;
          case "undelete":
          break;
          case "del":
          break;
          case "deleteAllExcept":
          break;
          case "ele":
          break;
          case "ptt_start":
          break;
          case "_startMs":
          break;
          case "startMs":
          break;
          case "shouldUseAnimatedObjectForTransform":
          break;
          case "formText":
          break;
          case "extractFeMerge":
          break;
          case "avatar_description":
          break;
          case "_description":
          break;
          case "desc":
          break;
          case "descriptionContainer":
          break;
          case "descriptionContainerStyle":
          break;
          case "esc":
          break;
          case "sc":
          break;
          case "scr":
          break;
          case "script":
          break;
          case "cri":
          break;
          case "pt":
          break;
          case "isParentModal":
          break;
          case "aria-disabled":
          break;
          case "disable":
          break;
          case "disabledAccessibilityHint":
          break;
          case "isa":
          break;
          case "sab":
          break;
          case "led":
          break;
          case "interestedIcon":
          break;
          case "contentRow":
          break;
          case "withAffinitySuggestions":
          break;
          case "AffinitySuggestions":
          break;
          case "ffi":
          break;
          case "ug":
          break;
          case "lady_beetle":
          break;
          case "beetle":
          break;
          case "paymentGatewaySubscriptionId":
          break;
          case "_dispatch":
          break;
          case "_dispatchFrame":
          break;
          case "dispatchFrameUrl":
          break;
          case "spa":
          break;
          case "pat":
          break;
          case "patch":
          break;
          case "tc":
          break;
          case "briefs":
          break;
          case "renderActivityInviteEmbed":
          break;
          case "time_to_full_display":
          break;
          case "_displayName":
          break;
          case "display":
          break;
          case "displayNameAccessibilityHint":
          break;
          case "spl":
          break;
          case "play":
          break;
          case "la":
          break;
          case "am":
          break;
          case "internalBinaryRead":
          break;
          case "div":
          break;
          case "diversityChildren":
          break;
          case "ve":
          break;
          case "ver":
          break;
          case "renderConfirmButton":
          break;
          case "LhlgY9":
          break;
          case "toExpPos":
          break;
          case "do":
          break;
          case "don":
          break;
          case "doneButton":
          break;
          case "doneButtonContainer":
          break;
          case "__duration":
          break;
          case "_duration":
          break;
          case "dur":
          break;
          case "durationContainer":
          break;
          case "ura":
          break;
          case "rat":
          break;
          case "ratio":
          break;
          case "assetFormat":
          break;
          case "app_hardware_acceleration_enabled":
          break;
          case "_enabled":
          break;
          case "_enabledPaymentMethods":
          break;
          case "enable":
          break;
          case "shouldShowAgeGateForVoiceChannel":
          break;
          case "SYSTEM_PANEL":
          break;
          case "@braintree/extended-promise":
          break;
          case "extend":
          break;
          case "extended":
          break;
          case "ended":
          break;
          case "nd":
          break;
          case "promise":
          break;
          case "promiseProcessor":
          break;
          case "checkoutFailed":
          break;
          case "enum":
          break;
          case "nu":
          break;
          case "num":
          break;
          case "mer":
          break;
          case "era":
          break;
          case "referrerPolicy":
          break;
          case "safetyTips":
          break;
          case "../../../lib/braintree-error":
          break;
          case "../../lib/braintree-error":
          break;
          case "../lib/braintree-error":
          break;
          case "brain":
          break;
          case "braintree":
          break;
          case "tre":
          break;
          case "tree":
          break;
          case "ee":
          break;
          case "err":
          break;
          case "errorApplyingMediaFilterSettings":
          break;
          case "FilterSettingsGraph":
          break;
          case "phoenix":
          break;
          case "googleAuthorizationFingerprint":
          break;
          case "printer":
          break;
          case "exp":
          break;
          case "expo":
          break;
          case "port":
          break;
          case "rtsState":
          break;
          case "ts":
          break;
          case "UnauthenticatedReportNames":
          break;
          case "auth":
          break;
          case "authenticated":
          break;
          case "fil":
          break;
          case "file":
          break;
          case "F":
          break;
          case "Finish":
          break;
          case "he":
          break;
          case "ServerIconLilQuackSPondverseExample":
          break;
          case "_cleanupSocket":
          break;
          case "SocketEvent":
          break;
          case "EntitlementTenantFulfillmentStatus":
          break;
          case "ill":
          break;
          case "__findAnimatedPropsNodes":
          break;
          case "MAX_VISIBLE_PAGES":
          break;
          case "system_channel_flags":
          break;
          case "channel_flags":
          break;
          case "_flags":
          break;
          case "flag":
          break;
          case "lag":
          break;
          case "gs":
          break;
          case "_oldestUnreadMessageId":
          break;
          case "oldestUnreadMessageId":
          break;
          case "oldestUnreadMessageIdStale":
          break;
          case "addPerformanceInstrumentationHandler":
          break;
          case "handleTapGuildEventInvite":
          break;
          case "fo":
          break;
          case "for":
          break;
          case "forEachChannel":
          break;
          case "DiscountsMegaphoneSpotIllustration":
          break;
          case "counts":
          break;
          case "ga":
          break;
          case "pho":
          break;
          case "phone":
          break;
          case "pointerType":
          break;
          case "MOP":
          break;
          case "OPACITY_BLACK_1":
          break;
          case "OPACITY_BLACK_12":
          break;
          case "parentElement":
          break;
          case "fakeScopeIcon":
          break;
          case "containerSearchBar":
          break;
          case "touchableHandleResponderTerminationRequest":
          break;
          case "onRequestSend":
          break;
          case "getChannelA11yHint":
          break;
          case "Channel":
          break;
          case "interpretNumericEntities":
          break;
          case "getCurrent":
          break;
          case "getCurrentUserActiveStream":
          break;
          case "U":
          break;
          case "Use":
          break;
          case "User":
          break;
          case "ser":
          break;
          case "StreamVolumeItem":
          break;
          case "_guildId":
          break;
          case "gu":
          break;
          case "current_guild_id":
          break;
          case "getContacts":
          break;
          case "FAMILY_CENTER_CONNECTION":
          break;
          case "FAMILY_CENTER_CONNECTION_PREREQUISITES":
          break;
          case "hasDiversity":
          break;
          case "Parent":
          break;
          case "ParentalControlledDefaultGuildsRestrictedV2":
          break;
          case "ar":
          break;
          case "DefaultGuildsRestricted":
          break;
          case "DefaultGuildsRestrictedV2":
          break;
          case "getMentionChannelIds":
          break;
          case "isWishlistOwner":
          break;
          case "avatar_hash":
          break;
          case "_hash":
          break;
          case "hashKey":
          break;
          case "bhd":
          break;
          case "INVITE_RESOLVE_SUCCESS":
          break;
          case "mother_christmas_tone4":
          break;
          case "_header":
          break;
          case "_headerLayoutYs":
          break;
          case "head":
          break;
          case "ade":
          break;
          case "YsCuyF":
          break;
          case "FAMILY_CENTER_ERROR_CODE_TO_FAILURE":
          break;
          case "REACTIVATION_OFFER_REDEEM":
          break;
          case "REDEEM_REWARD":
          break;
          case "IMAGE_VIDEO_DATA_SETTINGS_UPDATED":
          break;
          case "player_height":
          break;
          case "hei":
          break;
          case "heightAverageWindow":
          break;
          case "eight":
          break;
          case "ht":
          break;
          case "withMutualFriends":
          break;
          case "withMutualFriendsCount":
          break;
          case "FacebookNeutralIcon":
          break;
          case "advancedMode":
          break;
          case "debugLogCs2GsiPayload":
          break;
          case "loadAllGuildAndPrivateChannelsFromDisk":
          break;
          case "FadeOutRight":
          break;
          case "http":
          break;
          case "oc":
          break;
          case "oca":
          break;
          case "NonConvert":
          break;
          case "Convert":
          break;
          case "ConvertEmoticons":
          break;
          case "mot":
          break;
          case "icons":
          break;
          case "accessPermissions":
          break;
          case "shovel":
          break;
          case "handleCallback":
          break;
          case "handleCallbackErrors":
          break;
          case "CallbackError":
          break;
          case "USER_SETTINGS_MODAL_OPEN":
          break;
          case "OPEN_APP_LAUNCHER":
          break;
          case "APP_LAUNCHER":
          break;
          case "APP_LAUNCHER_ACTIVITY_ITEM_SELECTED":
          break;
          case "DCDNotificationManager":
          break;
          case "videoProgress":
          break;
          case "handleAnnouncementMessageViewTracking":
          break;
          case "MessageViewTrackingType":
          break;
          case "person_with_ball_tone5":
          break;
          case "_include":
          break;
          case "inc":
          break;
          case "include":
          break;
          case "includesBounties":
          break;
          case "lu":
          break;
          case "lud":
          break;
          case "Bounties Scroll Indicator":
          break;
          case "origin_pane":
          break;
          case "related_user_id":
          break;
          case "__internalInstanceHandle":
          break;
          case "_int":
          break;
          case "_internalInstanceHandle":
          break;
          case "internal":
          break;
          case "internalInstanceHandle":
          break;
          case "base64StringFromByteArray":
          break;
          case "indexOfSingleActiveTouch":
          break;
          case "TouchPad":
          break;
          case "deleteKeyFromRecyclePool":
          break;
          case "getGuildFlags":
          break;
          case "pronouns":
          break;
          case "pronounsAccessibilityHint":
          break;
          case "int":
          break;
          case "intlMessage":
          break;
          case "tl":
          break;
          case "getAnyStreamForUser":
          break;
          case "activity_items":
          break;
          case "_items":
          break;
          case "_itemsForType":
          break;
          case "item":
          break;
          case "activeUnjoinedThreads":
          break;
          case "jo":
          break;
          case "js":
          break;
          case "xs":
          break;
          case "isRendered":
          break;
          case "gradientOverlay":
          break;
          case "yOffset":
          break;
          case "hasInputText":
          break;
          case "targetHeight":
          break;
          case "getHeight":
          break;
          case "jus":
          break;
          case "justify":
          break;
          case "if":
          break;
          case "Content":
          break;
          case "checkContactPermissions":
          break;
          case "ContactPermissions":
          break;
          case "showThreadNotificationsBottomSheet":
          break;
          case "BottomSheetFlatList":
          break;
          case "FlatList":
          break;
          case "PasskeysSpotIllustration":
          break;
          case "ke":
          break;
          case "templatePair":
          break;
          case "isLurking":
          break;
          case "getInternalState":
          break;
          case "confettiColors":
          break;
          case "subtitleTrailing":
          break;
          case "getLengthableOrigin":
          break;
          case "inExperiment":
          break;
          case "trailingItem":
          break;
          case "embedded_activity_location_kind":
          break;
          case "ki":
          break;
          case "kin":
          break;
          case "hasTrackedDisabledAndroidNotifChannels":
          break;
          case "Backspace":
          break;
          case "BackspaceIcon":
          break;
          case "cardHeight":
          break;
          case "aria-label":
          break;
          case "aria-labelledby":
          break;
          case "lab":
          break;
          case "byAppEntry":
          break;
          case "tryItOutAvatarDecoration":
          break;
          case "GDM_JOIN":
          break;
          case "JOIN_STUDENT_HUB":
          break;
          case "CHANNEL_DRAWER_SPACING":
          break;
          case "CONTROLLER":
          break;
          case "CONTROLLER_SUPPORT":
          break;
          case "SUPPORTS_JOIN_URL":
          break;
          case "Buf8":
          break;
          case "f8wNDl":
          break;
          case "DlcqlU":
          break;
          case "lcq":
          break;
          case "arrow_left":
          break;
          case "leftBoundary":
          break;
          case "marginPanels":
          break;
          case "_$esjava$I_length":
          break;
          case "I_length":
          break;
          case "_l":
          break;
          case "_length":
          break;
          case "len":
          break;
          case "lengthComputable":
          break;
          case "analyticsId":
          break;
          case "disableImageViewPreallocationAndroid":
          break;
          case "stopCleanup":
          break;
          case "updateChannel":
          break;
          case "updateChannelDimensions":
          break;
          case "load":
          break;
          case "J":
          break;
          case "setDate":
          break;
          case "openMemberVerificationSuccessAlert":
          break;
          case "userGuildSettings":
          break;
          case "userGuildSettingsTransaction":
          break;
          case "action_location":
          break;
          case "loc":
          break;
          case "locationAnalyticsObject":
          break;
          case "AnalyticsObjects":
          break;
          case "__mapperRegistry":
          break;
          case "_map":
          break;
          case "mar":
          break;
          case "margin":
          break;
          case "arg":
          break;
          case "gi":
          break;
          case "_$esjava$B_found_a_match":
          break;
          case "B_found_a_match":
          break;
          case "matchAnyPattern":
          break;
          case "MOBILE_SEGMENTED_CONTROL_BACKGROUND":
          break;
          case "BACKGROUND_SAVED":
          break;
          case "SAVED":
          break;
          case "SAVED_BOOKMARKS_MAX":
          break;
          case "BOOKMARKS":
          break;
          case "MAX_ATTACHMENT_UPLOAD_COUNT":
          break;
          case "TOO_MANY_ANNOUNCEMENT_THREADS":
          break;
          case "ANNOUNCEMENT_THREAD":
          break;
          case "identifyWebSocket":
          break;
          case "CONVERSATION_HAS_MORE_EXPIRATION_MS":
          break;
          case "SHOP_THIS_LOOK_WEB_MARKETING":
          break;
          case "LOAD_MORE_AFTER":
          break;
          case "RN_GLOBAL_OBJ":
          break;
          case "GLOBAL_OBJ":
          break;
          case "OBJECTS":
          break;
          case "BJ":
          break;
          case "micros":
          break;
          case "microscope":
          break;
          case "scopeContainer":
          break;
          case "heap_max":
          break;
          case "_max":
          break;
          case "_maxListeners":
          break;
          case "maxListeners":
          break;
          case "shouldShowRoleDot":
          break;
          case "bvu":
          break;
          case "vu":
          break;
          case "__memo":
          break;
          case "mo":
          break;
          case "messageIds":
          break;
          case "sag":
          break;
          case "_$esjava$method":
          break;
          case "_$esjava$methodobject":
          break;
          case "ho":
          break;
          case "hod":
          break;
          case "dob":
          break;
          case "obj":
          break;
          case "object":
          break;
          case "objectAssign":
          break;
          case "avatarDecorationPreview":
          break;
          case "ActionStatusSubLabel":
          break;
          case "onStatus":
          break;
          case "Status":
          break;
          case "SubLabel":
          break;
          case "lineHeight":
          break;
          case "VibingWumpusSpotIllustration":
          break;
          case "bin":
          break;
          case "Omnibutton":
          break;
          case "OmnibuttonCoachmarkRive":
          break;
          case "mni":
          break;
          case "nib":
          break;
          case "button":
          break;
          case "Ambient":
          break;
          case "Ambient_Lightmode":
          break;
          case "bie":
          break;
          case "tm":
          break;
          case "mod":
          break;
          case "modeOptions":
          break;
          case "contact_names":
          break;
          case "nam":
          break;
          case "namesLegacy":
          break;
          case "LegacyBaseButton":
          break;
          case "BaseButton":
          break;
          case "getEmbedColor":
          break;
          case "hasVariant":
          break;
          case "track_next":
          break;
          case "_nextChannelId":
          break;
          case "didRetrySilentInitialScroll":
          break;
          case "snapToAlignment":
          break;
          case "Alignment":
          break;
          case "$ZodUnknown":
          break;
          case "ZodUnknown":
          break;
          case "Unknown":
          break;
          case "kn":
          break;
          case "$i":
          break;
          case "$input":
          break;
          case "inp":
          break;
          case "input":
          break;
          case "put":
          break;
          case "last4":
          break;
          case "cardholderName":
          break;
          case "expirationMonth":
          break;
          case "expirationYear":
          break;
          case "binData":
          break;
          case "useLegacyChatInput":
          break;
          case "ChatInputExpressionPressed":
          break;
          case "res":
          break;
          case "relativeReceptionDelay":
          break;
          case "_opacityActive":
          break;
          case "opa":
          break;
          case "city":
          break;
          case "emitPlayerReady":
          break;
          case "FORUM_THREAD_CREATED":
          break;
          case "THREAD_CREATE":
          break;
          case "THREAD_CREATED":
          break;
          case "MESSAGE_REACTION_REMOVE_EMOJI":
          break;
          case "REMOVE_EMOJI_REACTIONS":
          break;
          case "EMOJI_RE":
          break;
          case "EMOJI_REACTION":
          break;
          case "EMOJI_REACTIONS_ON_MESSAGES":
          break;
          case "MESSAGES_ITEM_CHANNEL_AVATAR_MARGIN_END":
          break;
          case "pfxLeft":
          break;
          case "CHAT_INPUT_PILL_BORDER_WIDTH":
          break;
          case "THUMBHASH":
          break;
          case "SHAKE_STEP_DIVIDER":
          break;
          case "DIVIDER_COLORS":
          break;
          case "SPACE_XL":
          break;
          case "XLink":
          break;
          case "gift_info_options":
          break;
          case "_options":
          break;
          case "opt":
          break;
          case "option":
          break;
          case "_parent":
          break;
          case "_parentSpanId":
          break;
          case "par":
          break;
          case "parentSpan":
          break;
          case "parentSpanId":
          break;
          case "did_force_clear_guild_hashes":
          break;
          case "hashes":
          break;
          case "isChannelOwner":
          break;
          case "preview_asset_paths":
          break;
          case "path":
          break;
          case "currentUsernameInvalid":
          break;
          case "InvalidRegexPatternError":
          break;
          case "Pattern":
          break;
          case "cacheComposition":
          break;
          case "positionComponentInternal":
          break;
          case "_props":
          break;
          case "_propsStack":
          break;
          case "pr":
          break;
          case "pro":
          break;
          case "prop":
          break;
          case "propsStack":
          break;
          case "ops":
          break;
          case "ps":
          break;
          case "StackRouter":
          break;
          case "outerRow":
          break;
          case "woman_and_man_holding_hands_medium_skin_tone_medium_light_skin_tone":
          break;
          case "isBrowserOpen":
          break;
          case "FePointLight":
          break;
          case "LightSpeedIn":
          break;
          case "LightSpeedInData":
          break;
          case "proto":
          break;
          case "prototypeInitialized":
          break;
          case "openMFAModal":
          break;
          case "_pushCells":
          break;
          case "pus":
          break;
          case "rad":
          break;
          case "ii":
          break;
          case "DrawerActions":
          break;
          case "aw":
          break;
          case "awe":
          break;
          case "verifiedBot":
          break;
          case "$ZodPrefault":
          break;
          case "ZodPrefault":
          break;
          case "reg":
          break;
          case "register":
          break;
          case "recipients":
          break;
          case "reject":
          break;
          case "eject":
          break;
          case "ErrorNumber":
          break;
          case "__replaceAnimatedNodeWithValues":
          break;
          case "place":
          break;
          case "lac":
          break;
          case "ace":
          break;
          case "isCamera":
          break;
          case "numOfAttachments":
          break;
          case "numOfAttachmentsPendingScan":
          break;
          case "canAcceptInvite":
          break;
          case "setFrecencySectionSelection":
          break;
          case "onSelectionOrTextChange":
          break;
          case "getAttachmentUploadAbortAlertContent":
          break;
          case "trackImpression":
          break;
          case "kiss_person_person_medium_dark_skin_tone_dark_skin_tone":
          break;
          case "_resolve":
          break;
          case "_resolveEmpty":
          break;
          case "sol":
          break;
          case "resultName":
          break;
          case "_$esjava$result":
          break;
          case "resultCount":
          break;
          case "sul":
          break;
          case "hideIcon":
          break;
          case "containsVideo":
          break;
          case "VideoSpinnerContext":
          break;
          case "inner":
          break;
          case "textMedium":
          break;
          case "maybeConfirmFriendRequestAccept":
          break;
          case "getBrightness":
          break;
          case "BrightnessDown":
          break;
          case "ownerId":
          break;
          case "addFrame":
          break;
          case "run":
          break;
          case "actionStatusAccessibilityLabel":
          break;
          case "scale":
          break;
          case "ale":
          break;
          case "streamEmptyImage":
          break;
          case "getBadgeTooltip":
          break;
          case "shape":
          break;
          case "hap":
          break;
          case "ape":
          break;
          case "pes":
          break;
          case "ariaDescription":
          break;
          case "stringifyUrl":
          break;
          case "minUserInstallCommandCount":
          break;
          case "sku":
          break;
          case "skuIds":
          break;
          case "woman_farmer_tone3":
          break;
          case "man_farmer_tone3":
          break;
          case "farmer_tone3":
          break;
          case "fromByteArray":
          break;
          case "sl":
          break;
          case "sliceBody":
          break;
          case "ice":
          break;
          case "minPressDuration":
          break;
          case "getGameRelationships":
          break;
          case "getGameRelationshipsByType":
          break;
          case "CheckmarkLargeBoldIcon":
          break;
          case "old":
          break;
          case "isPerformanceResourceTiming":
          break;
          case "PerformanceResourceTiming":
          break;
          case "PerformanceResourceTiming_public":
          break;
          case "sou":
          break;
          case "public_flags":
          break;
          case "flags_":
          break;
          case "flags_new":
          break;
          case "_new_centroid":
          break;
          case "new":
          break;
          case "centroidDimension":
          break;
          case "onLoadEnd":
          break;
          case "_splitColorsIntoChannels":
          break;
          case "MMlhsr":
          break;
          case "sr-Cyrl":
          break;
          case "sr-Cyrl-BA":
          break;
          case "BATTLENET_MIGRATION":
          break;
          case "MIGRATION_DESTINATION_ORIGIN":
          break;
          case "INPUT_FIELD_TEXT_STYLE_MD":
          break;
          case "ClipsRecordingRestartNeeded":
          break;
          case "star":
          break;
          case "art":
          break;
          case "clearFormData":
          break;
          case "client_app_state":
          break;
          case "app_state":
          break;
          case "_state":
          break;
          case "stat":
          break;
          case "stateActionComplete":
          break;
          case "woman_climbing_medium_light_skin_tone":
          break;
          case "man_climbing_medium_light_skin_tone":
          break;
          case "appeal_status":
          break;
          case "_status":
          break;
          case "statusAllowsPerks":
          break;
          case "_$esjava$s":
          break;
          case "_$esjava$substring_i":
          break;
          case "sub":
          break;
          case "substr":
          break;
          case "substring":
          break;
          case "bs":
          break;
          case "bst":
          break;
          case "string_id":
          break;
          case "DEPRECATED_style":
          break;
          case "_style":
          break;
          case "sty":
          break;
          case "styleAttr":
          break;
          case "surrogate":
          break;
          case "surrogatesFrame":
          break;
          case "rog":
          break;
          case "gat":
          break;
          case "gate":
          break;
          case "isStickerPackAnimated":
          break;
          case "AnimatedStartStagePrompt":
          break;
          case "StartStagePrompt":
          break;
          case "Prompt":
          break;
          case "canSend":
          break;
          case "canSendGuildOfficialMessages":
          break;
          case "FastestListPropsPlaceholderType":
          break;
          case "est":
          break;
          case "person_walking_facing_right_tone2":
          break;
          case "client-id":
          break;
          case "discounted":
          break;
          case "discountedPlan":
          break;
          case "epochAuthenticator":
          break;
          case "AuthenticatorType":
          break;
          case "the":
          break;
          case "people_holding_hands_medium_skin_tone_medium_dark_skin_tone":
          break;
          case "priceId":
          break;
          case "storeToken":
          break;
          case "enableIntegrityCheck":
          break;
          case "SceneView":
          break;
          case "EntitlementFeatureNames":
          break;
          case "EMOJI_UPLOAD_STARTED":
          break;
          case "INCIDENT_TIMESTAMP":
          break;
          case "TIMESTAMPS":
          break;
          case "willReconnect":
          break;
          case "setPreventRemove":
          break;
          case "moveInto":
          break;
          case "ja":
          break;
          case "java":
          break;
          case "av":
          break;
          case "$":
          break;
          case "nextIndex":
          break;
          case "ase":
          break;
          case "transformOrigin":
          break;
          case "isTouchWithinInset":
          break;
          case "setBigUint64":
          break;
          case "int64toString":
          break;
          case "supportsInAppBrowser":
          break;
          case "BrowserStop":
          break;
          case "Stop":
          break;
          case "StopWatch":
          break;
          case "WatchdogTimeout":
          break;
          case "dog":
          break;
          case "couple_with_heart_woman_woman_medium_skin_tone_light_skin_tone":
          break;
          case "next_track":
          break;
          case "_trackIfSessionMetadataExists":
          break;
          case "tra":
          break;
          case "rac":
          break;
          case "shouldUseMobileWebRedirectCheckout":
          break;
          case "MobileWebRedirectCheckoutDeepLinkQueryKeys":
          break;
          case "_transformMetadataToCamelCase":
          break;
          case "sf":
          break;
          case "mel":
          break;
          case "APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED":
          break;
          case "DCDSecurityKeyManager":
          break;
          case "getSpamChannelIds":
          break;
          case "../lib/create-assets-url":
          break;
          case "applicationCommands":
          break;
          case "INTERNAL_EMPLOYEE_ONLY":
          break;
          case "useFocus":
          break;
          case "useFocusEffect":
          break;
          case "use":
          break;
          case "Call":
          break;
          case "effectClick":
          break;
          case "ClickImage":
          break;
          case "Image Height":
          break;
          case "eight_pointed_black_star":
          break;
          case "star2":
          break;
          case "upsellContainer":
          break;
          case "useEffectEvent":
          break;
          case "ff":
          break;
          case "fec":
          break;
          case "CloudKeypadSpotIllustration":
          break;
          case "scrollAnchor":
          break;
          case "flag_tv":
          break;
          case "tv":
          break;
          case "timeZoneOffsetInMinutes":
          break;
          case "useMemoArray":
          break;
          case "Memo":
          break;
          case "updatePersistentCodesEnabled":
          break;
          case "useStateFromStoresArray":
          break;
          case "State":
          break;
          case "Store":
          break;
          case "ore":
          break;
          case "isLowPowerMode":
          break;
          case "default_thread_rate_limit_per_user":
          break;
          case "rate_limit_per_user":
          break;
          case "_limit":
          break;
          case "_userId":
          break;
          case "_userIds":
          break;
          case "userIds":
          break;
          case "userIdsAndWishlistIds":
          break;
          case "__sentry_template_values__":
          break;
          case "_value":
          break;
          case "va":
          break;
          case "val":
          break;
          case "lue":
          break;
          case "__await":
          break;
          case "__awaiter":
          break;
          case "wait":
          break;
          case "getClampedPIPPosition":
          break;
          case "PIP_WINDOW_OFFSET":
          break;
          case "pipY":
          break;
          case "pipState":
          break;
          case "ACTIVITY_PIP_SIZE":
          break;
          case "bottomAvoidanceRegion":
          break;
          case "dan":
          break;
          case "topAvoidanceRegion":
          break;
          case "pipAvoidanceSpecs":
          break;
          case "disableHorizontalSafeAreas":
          break;
          case "translateX":
          break;
          case "base_variant_name":
          break;
          case "ia":
          break;
          case "ian":
          break;
          case "ant":
          break;
          case "namePlaceholder":
          break;
          case "older_adult_tone1":
          break;
          case "adult_tone1":
          break;
          case "_handleBandwidthEstimationExperiment":
          break;
          case "BandwidthEstimationExperiment":
          break;
          case "dt":
          break;
          case "tim":
          break;
          case "FriendsIcon":
          break;
          case "selected_time_window":
          break;
          case "win":
          break;
          case "windowId":
          break;
          case "dow":
          break;
          case "getter":
          break;
          case "transitionCleanUp":
          break;
          case "wit":
          break;
          case "with":
          break;
          case "ACTIVITY_LAYOUT_PHYSICS_DEFAULT":
          break;
          case "LAYOUT_PHYSICS":
          break;
          case "IS_IOS":
          break;
          case "transitionState":
          break;
          case "YEETED":
          break;
          case "ACTIVITY_LAYOUT_PHYSICS_GESTURE":
          break;
          case "GESTURE":
          break;
          case "wrapperDimensions":
          break;
          case "isWindowLandscape":
          break;
          case "borderTopStartRadius":
          break;
          case "borderTopEndRadius":
          break;
          case "topBorder":
          break;
          case "topBorderRadius":
          break;
          case "handleChannelRecipientAdd":
          break;
          case "\r":
          break;
          case "getPlayerState":
          break;
          case "ReactNativeWebView":
          break;
          case "\n":
          break;
          case "\t":
          break;
          case "__sentry_captured__":
          break;
          case "captured":
          break;
          case "__active":
          break;
          case "_activeItems":
          break;
          case "activeItem":
          break;
          case ",":
          break;
          case "\"":
          break;
          case "authenticationInsight":
          break;
          case "peers":
          break;
          case "isTiffFile":
          break;
          case "channelCategoryName":
          break;
          case "#":
          break;
          case "#000000":
          break;
          case "00":
          break;
          case "#11806a":
          break;
          case "USER_BULK_RELATIONSHIPS":
          break;
          case "USER_BULK_RELATIONSHIPS_UPDATE":
          break;
          case "#1abc9c":
          break;
          case "abc":
          break;
          case "#1f8b4c":
          break;
          case "f8":
          break;
          case "#206694":
          break;
          case "06":
          break;
          case "trialSubText":
          break;
          case "trialSubTextContainer":
          break;
          case "#2ecc71":
          break;
          case "FAVORITES_GUILD_TOGGLE":
          break;
          case "GUILD_TOGGLE_COLLAPSE_MUTED":
          break;
          case "merchant_account_id":
          break;
          case "#3498db":
          break;
          case "packToScrollTo":
          break;
          case "#546e7a":
          break;
          case "#5865f2":
          break;
          case "f2":
          break;
          case "f20":
          break;
          case "#607d8b":
          break;
          case "GUILD_ROOM_OBJECT_CREATE":
          break;
          case "CREATE_GUILD_VIEWED":
          break;
          case "GUILD_VIEWED":
          break;
          case "GUILD_VIEWED_CLICKSTREAM":
          break;
          case "STREAM_BAD_NETWORK_QUALITY":
          break;
          case "IPC":
          break;
          case "IPCEvents":
          break;
          case "cardText":
          break;
          case "extent":
          break;
          case "extentCount":
          break;
          case "trackForumSortOrderUpdated":
          break;
          case "#71368a":
          break;
          case "useAllActionsCompleted":
          break;
          case "#95a5a6":
          break;
          case "#979c9f":
          break;
          case "couple_with_heart_woman_man_tone3_tone5":
          break;
          case "6MwJo/":
          break;
          case "#992d22":
          break;
          case "#99aab5":
          break;
          case "aa":
          break;
          case "onlineCount":
          break;
          case "HoldingGemSpotIllustration":
          break;
          case "#9b59b6":
          break;
          case "b64ToDeclarativeSettingsProto":
          break;
          case "DeclarativeSettings":
          break;
          case "ProtoAudioSettingsContextTypes":
          break;
          case "#a84300":
          break;
          case "getMobileFinePrintMessageForApplication":
          break;
          case "beforeSpanEnd":
          break;
          case "#ad1457":
          break;
          case "fetchScheduledMessages":
          break;
          case "blockEnd":
          break;
          case "#c27c0e":
          break;
          case "#e":
          break;
          case "#e67e22":
          break;
          case "#e74c3c":
          break;
          case "_lastSentSSRC":
          break;
          case "DeviceEventEmitter":
          break;
          case "EventEmitter":
          break;
          case "#e91e63":
          break;
          case "blockStart":
          break;
          case "#f1c40f":
          break;
          case "f1":
          break;
          case "URLSearchParams":
          break;
          case "$$typeof":
          break;
          case "typeofJsonValue":
          break;
          case "onValueUpdated":
          break;
          case "categoryStyles":
          break;
          case "$ZodAny":
          break;
          case "Z":
          break;
          case "ZodAny":
          break;
          case "Any":
          break;
          case "ny":
          break;
          case "notificationItem":
          break;
          case "onItemSizeChanged":
          break;
          case "formats":
          break;
          case "baa":
          break;
          case "hsla":
          break;
          case "properties":
          break;
          case "useOriginalIfSmaller":
          break;
          case "$ZodArray":
          break;
          case "ZodArray":
          break;
          case "nativePhoneIntegrationEnabled":
          break;
          case "logoUrl":
          break;
          case "|":
          break;
          case "%WeakMap%":
          break;
          case "WeakMap":
          break;
          case "%AsyncGeneratorFunction%":
          break;
          case "%":
          break;
          case "%AsyncGenerator%":
          break;
          case "ene":
          break;
          case "eventId":
          break;
          case "knownValues":
          break;
          case "$ZodAsyncError":
          break;
          case "sy":
          break;
          case "syn":
          break;
          case "sync":
          break;
          case "$ZodBase64":
          break;
          case "$ZodBase64URL":
          break;
          case "ZodBase64":
          break;
          case "ZodBase64URL":
          break;
          case "URL":
          break;
          case "MRO":
          break;
          case "RTC_PANEL":
          break;
          case "RTC_PANEL_HEIGHT":
          break;
          case "getNoiseSuppression":
          break;
          case "onVideoLoad":
          break;
          case "onVideoLoadStart":
          break;
          case "rtx_ssrc":
          break;
          case "ssrc":
          break;
          case "srcUnfurledMediaItem":
          break;
          case "UnfurledMediaItemFlags":
          break;
          case "fur":
          break;
          case "shouldPerformLatencyTest":
          break;
          case "showCreator":
          break;
          case "handleStoreChange":
          break;
          case "calculateProfileEffectHeight":
          break;
          case "$ZodBigInt":
          break;
          case "$ZodBigIntFormat":
          break;
          case "ZodBigInt":
          break;
          case "ZodBigIntFormat":
          break;
          case "BigInt":
          break;
          case "Form":
          break;
          case "FormatBuilder":
          break;
          case "favoritesSuggestionsNoticeHeight":
          break;
          case "$ZodCIDRv4":
          break;
          case "ZodCIDRv4":
          break;
          case "CI":
          break;
          case "ID":
          break;
          case "IDR":
          break;
          case "v4":
          break;
          case "returnKeyLabel":
          break;
          case "boostCount":
          break;
          case "trackExposureToExperiment":
          break;
          case "setExperimentFlag":
          break;
          case "$ZodCIDRv6":
          break;
          case "ZodCIDRv6":
          break;
          case "v6":
          break;
          case "$ZodCUID":
          break;
          case "$ZodCUID2":
          break;
          case "ZodCUID":
          break;
          case "ZodCUID2":
          break;
          case "2IW3C5":
          break;
          case "C5q+pW":
          break;
          case "pW3Ip3":
          break;
          case "hasViewManagerConfig":
          break;
          case "$ZodCatch":
          break;
          case "ZodCatch":
          break;
          case "Cat":
          break;
          case "$ZodCheck":
          break;
          case "$ZodCheckBigIntFormat":
          break;
          case "FormatJsNodeType":
          break;
          case "person_walking_facing_right_tone4":
          break;
          case "$ZodCheckEndsWith":
          break;
          case "End":
          break;
          case "nds":
          break;
          case "WithLocalSvg":
          break;
          case "LocalSvg":
          break;
          case "Svg":
          break;
          case "SvgAst":
          break;
          case "encrypted":
          break;
          case "sandbox":
          break;
          case "onload":
          break;
          case "$ZodCheckGreaterThan":
          break;
          case "G":
          break;
          case "cY+Oob":
          break;
          case "objCreate":
          break;
          case "isAtStart":
          break;
          case "$ZodCheckIncludes":
          break;
          case "deserialize":
          break;
          case "deserializeCache":
          break;
          case "useFontScale":
          break;
          case "useFontScaleStore":
          break;
          case "recordMediaSize":
          break;
          case "iii":
          break;
          case "$ZodCheckLengthEquals":
          break;
          case "q":
          break;
          case "qu":
          break;
          case "qua":
          break;
          case "alsoForwardToChannelId":
          break;
          case "ls":
          break;
          case "disableHighlightOnPress":
          break;
          case "$ZodCheckLessThan":
          break;
          case "hand_with_index_finger_and_thumb_crossed_tone3":
          break;
          case "homepage":
          break;
          case "page":
          break;
          case "page down":
          break;
          case "$ZodCheckLowerCase":
          break;
          case "USER_PROFILE_EDIT_SAVED":
          break;
          case "EDIT_SAVED":
          break;
          case "$ZodCheckMaxSize":
          break;
          case "useNewUserDismissibleContent":
          break;
          case "$ZodCheckMimeType":
          break;
          case "peekGradient":
          break;
          case "$ZodCheckMinLength":
          break;
          case "Mi":
          break;
          case "third_place":
          break;
          case "third_place_medal":
          break;
          case "navigationKey":
          break;
          case "$ZodCheckMinSize":
          break;
          case "$ZodCheckMultipleOf":
          break;
          case "Multiple":
          break;
          case "tip":
          break;
          case "coerceAudioContextForProto":
          break;
          case "ProtoClass":
          break;
          case "$ZodCheckOverwrite":
          break;
          case "rw":
          break;
          case "write":
          break;
          case "writeASCII":
          break;
          case "IS_FETCHING":
          break;
          case "FETCHING":
          break;
          case "GUILD_BOOST_TAB_BANNER":
          break;
          case "RNSVGSvgAndroid":
          break;
          case "assertFloat32":
          break;
          case "handleMediaEngineStateChange":
          break;
          case "string2buf":
          break;
          case "errorBoundary":
          break;
          case "$ZodCheckProperty":
          break;
          case "eventDescriptionContainer":
          break;
          case "$ZodCheckRegex":
          break;
          case "SOCIAL_LAYER_CONNECTIONS":
          break;
          case "CONNECTIONS_ROLE_POPOUT":
          break;
          case "POPOUT_HIDE":
          break;
          case "HIDE_CHANNEL_DETAILS":
          break;
          case "CHANNEL_DETAILS":
          break;
          case "CHANNEL_DETAILS_HEADER":
          break;
          case "HEADERS_RECEIVED":
          break;
          case "claimCode":
          break;
          case "debuglog":
          break;
          case "glog":
          break;
          case "$ZodCheckSizeEquals":
          break;
          case "$ZodCheckStartsWith":
          break;
          case "backgroundAssetUrl":
          break;
          case "tav":
          break;
          case "$ZodCheckStringFormat":
          break;
          case "FormatNumeric":
          break;
          case "FormatNumericToString":
          break;
          case "ToString":
          break;
          case "expectedCurrency":
          break;
          case "currencyIsoCode":
          break;
          case "deeplink_uri":
          break;
          case "$ZodCheckUpperCase":
          break;
          case "seis":
          break;
          case "cardImage":
          break;
          case "cardImageApplication":
          break;
          case "ApplicationLauncherCommand":
          break;
          case "CommandListSortOrder":
          break;
          case "OrderedPermissions":
          break;
          case "scrollDown":
          break;
          case "rS8FA+":
          break;
          case "+1_tone4":
          break;
          case "GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR":
          break;
          case "getSelectedProduct":
          break;
          case "getNewMemberActions":
          break;
          case "$ZodCodec":
          break;
          case "ZodCodec":
          break;
          case "Code":
          break;
          case "dec":
          break;
          case "decay":
          break;
          case "decayInterval":
          break;
          case "validateSecureFramesKeyConsistent":
          break;
          case "Avatar04/Username":
          break;
          case "Avatar04/UsernameVisibility":
          break;
          case "$ZodCustom":
          break;
          case "$ZodCustomStringFormat":
          break;
          case "ZodCustom":
          break;
          case "ZodCustomStringFormat":
          break;
          case "Custom":
          break;
          case "sto":
          break;
          case "$ZodDefault":
          break;
          case "ZodDefault":
          break;
          case "Default":
          break;
          case "DefaultCreatorMonetizationRestrictions":
          break;
          case "CreatorMonetizationRestrictions":
          break;
          case "getDebugOptionsHeaderValue":
          break;
          case "$ZodDiscriminatedUnion":
          break;
          case "ZodDiscriminatedUnion":
          break;
          case "nat":
          break;
          case "nio":
          break;
          case "xdays":
          break;
          case "$ZodE164":
          break;
          case "ZodE164":
          break;
          case "$ZodEmail":
          break;
          case "ZodEmail":
          break;
          case "mai":
          break;
          case "ail":
          break;
          case "doesEffectImpactLayout":
          break;
          case "openMemberVerificationRejectedAlert":
          break;
          case "onRejected":
          break;
          case "userFilters":
          break;
          case "$ZodEmoji":
          break;
          case "ZodEmoji":
          break;
          case "Emoji":
          break;
          case "EmojiEntranceAnimation":
          break;
          case "oj":
          break;
          case "ji":
          break;
          case "Animation Main":
          break;
          case "Main":
          break;
          case "MainDrawers":
          break;
          case "scrollContainer":
          break;
          case "scrollContainerGradient":
          break;
          case "$ZodEncodeError":
          break;
          case "ncode":
          break;
          case "sessionTimingIntegration":
          break;
          case "JOIN_GUILD_VIEWED":
          break;
          case "$ZodEnum":
          break;
          case "ZodEnum":
          break;
          case "num lock":
          break;
          case "lockToLandscape":
          break;
          case "lockToLandscapeLeft":
          break;
          case "trinketAnimationUrl":
          break;
          case "blurTextInput":
          break;
          case "sah":
          break;
          case "$ZodError":
          break;
          case "handleMuteSettingPress":
          break;
          case "$ZodExactOptional":
          break;
          case "ZodExactOptional":
          break;
          case "act":
          break;
          case "$ZodFile":
          break;
          case "ZodFile":
          break;
          case "File":
          break;
          case "$ZodFunction":
          break;
          case "ZodFunction":
          break;
          case "Function":
          break;
          case "getViewProp":
          break;
          case "commandText":
          break;
          case "externalPurchaseUrl":
          break;
          case "setDisableRecycling":
          break;
          case "mantlepiece_clock":
          break;
          case "clock3":
          break;
          case "clock330":
          break;
          case "$ZodGUID":
          break;
          case "ZodGUID":
          break;
          case "GU":
          break;
          case "ID_REGEX":
          break;
          case "EXISTING_USER_AGE_GATE_SUCCESS":
          break;
          case "AGE_GATE_SUCCESS":
          break;
          case "SUCCESS":
          break;
          case "OPEN_EMBEDDED_ACTIVITY":
          break;
          case "EMBEDDED_ACTIVITY_CLOSE":
          break;
          case "ACTIVITY_CLOSED_RPC_ERROR":
          break;
          case "CLOSE":
          break;
          case "CLOSED":
          break;
          case "RPC":
          break;
          case "PC":
          break;
          case "ERROR":
          break;
          case "ERROR_CHANNEL_NOT_FOUND":
          break;
          case "UNDELETABLE":
          break;
          case "TABLE_ROW_CONTENT_HEIGHT":
          break;
          case "herb":
          break;
          case "$ZodIPv4":
          break;
          case "ZodIPv4":
          break;
          case "IPv4address":
          break;
          case "address":
          break;
          case "dress":
          break;
          case "reversed_hand_with_middle_finger_extended_tone2":
          break;
          case "$ZodIPv6":
          break;
          case "ZodIPv6":
          break;
          case "IPv6address":
          break;
          case "headerStatusBarHeight":
          break;
          case "$ZodISODate":
          break;
          case "$ZodISODateTime":
          break;
          case "ZodISODate":
          break;
          case "ZodISODateTime":
          break;
          case "IS":
          break;
          case "SO":
          break;
          case "Time":
          break;
          case "javascript":
          break;
          case "javascript:":
          break;
          case "$ZodISODuration":
          break;
          case "ZodISODuration":
          break;
          case "Duration":
          break;
          case "DurationEnabled":
          break;
          case "$ZodISOTime":
          break;
          case "ZodISOTime":
          break;
          case "ISOTimezoneParser":
          break;
          case "service_dog":
          break;
          case "createMessageRecord":
          break;
          case "$ZodIntersection":
          break;
          case "ZodIntersection":
          break;
          case "sec":
          break;
          case "section":
          break;
          case "rootCommand":
          break;
          case "$ZodJWT":
          break;
          case "ZodJWT":
          break;
          case "StreamingTier5LargeBadge":
          break;
          case "a_7":
          break;
          case "{":
          break;
          case "$ZodKSUID":
          break;
          case "ZodKSUID":
          break;
          case "K":
          break;
          case "SU":
          break;
          case "ID_VERIFICATION":
          break;
          case "VERIFICATION_FAQ":
          break;
          case "$ZodLazy":
          break;
          case "ZodLazy":
          break;
          case "Lazy":
          break;
          case "LazyViewManagersEnabled":
          break;
          case "XjXqzh":
          break;
          case "zh":
          break;
          case "zh-Hant":
          break;
          case "zh-Hant-HK":
          break;
          case "$ZodLiteral":
          break;
          case "ZodLiteral":
          break;
          case "Literal":
          break;
          case "maxBudgetHour":
          break;
          case "getHours":
          break;
          case "removeModeratorOverwrite":
          break;
          case "writeExistingEventStorage":
          break;
          case "adjustingFromInitialMount":
          break;
          case "includeNotificationsCount":
          break;
          case "trailingSection":
          break;
          case "$ZodMAC":
          break;
          case "ZodMAC":
          break;
          case "MA":
          break;
          case "MAC":
          break;
          case "AC":
          break;
          case "$ZodNaN":
          break;
          case "ZodNaN":
          break;
          case "NaN":
          break;
          case "maxBufferMs":
          break;
          case "$ZodNanoID":
          break;
          case "ZodNanoID":
          break;
          case "ano":
          break;
          case "$ZodNever":
          break;
          case "ZodNever":
          break;
          case "Never":
          break;
          case "ev":
          break;
          case "$ZodNonOptional":
          break;
          case "ZodNonOptional":
          break;
          case "$ZodNull":
          break;
          case "$ZodNullable":
          break;
          case "ZodNull":
          break;
          case "ZodNullable":
          break;
          case "trackColor":
          break;
          case "trackColorForFalse":
          break;
          case "setOffset":
          break;
          case "setOffsetProjectionEnabled":
          break;
          case "$ZodNumber":
          break;
          case "$ZodNumberFormat":
          break;
          case "ZodNumber":
          break;
          case "ZodNumberFormat":
          break;
          case "getQuestContentName":
          break;
          case "subheader":
          break;
          case "subheaderLocalized":
          break;
          case "headerLocalized":
          break;
          case "$ZodOptional":
          break;
          case "ZodOptional":
          break;
          case "allowedNativeProps":
          break;
          case "$ZodPipe":
          break;
          case "ZodPipe":
          break;
          case "customProcessor":
          break;
          case "sortIndex":
          break;
          case "tldWhitelist":
          break;
          case "$ZodReadonly":
          break;
          case "ZodReadonly":
          break;
          case "only":
          break;
          case "onlyActivityApps":
          break;
          case "nl":
          break;
          case "zhStringToNumber":
          break;
          case "$ZodRealError":
          break;
          case "ZodRealError":
          break;
          case "GiftingTier6SmallBadge":
          break;
          case "isBypassInvite":
          break;
          case "benefitType":
          break;
          case "$ZodRecord":
          break;
          case "ZodRecord":
          break;
          case "RecordSpeedNext":
          break;
          case "$ZodString":
          break;
          case "$ZodStringFormat":
          break;
          case "ZodString":
          break;
          case "ZodStringFormat":
          break;
          case "$ZodSuccess":
          break;
          case "ZodSuccess":
          break;
          case "blocklistPatterns":
          break;
          case "Patterns":
          break;
          case "palm_up_hand_tone3":
          break;
          case "$ZodTemplateLiteral":
          break;
          case "ZodTemplateLiteral":
          break;
          case "lat":
          break;
          case "allowedPaymentMethods":
          break;
          case "showFeedback":
          break;
          case "showFeedbackButton":
          break;
          case "backButtonInCustomView":
          break;
          case "whenIdleOrHidden":
          break;
          case "enableMainQueueCoordinatorOnIOS":
          break;
          case "IOS_TWO_FA_SCAN":
          break;
          case "SCAN_QR_CODE":
          break;
          case "docx":
          break;
          case "pages":
          break;
          case "ppt":
          break;
          case "pptx":
          break;
          case "$ZodTransform":
          break;
          case "ZodTransform":
          break;
          case "flag_gm":
          break;
          case "gm":
          break;
          case "gm1Vej":
          break;
          case "woman_getting_face_massage_medium_light_skin_tone":
          break;
          case "man_getting_face_massage_medium_light_skin_tone":
          break;
          case "xls":
          break;
          case "xlsx":
          break;
          case "csv":
          break;
          case "sv":
          break;
          case "$ZodTuple":
          break;
          case "ZodTuple":
          break;
          case "up":
          break;
          case "pleading_face":
          break;
          case "$ZodType":
          break;
          case "ZodType":
          break;
          case "peer":
          break;
          case "peerDependencies":
          break;
          case "$ZodULID":
          break;
          case "ZodULID":
          break;
          case "appDmSettings":
          break;
          case "deleteRecurrence":
          break;
          case "$ZodURL":
          break;
          case "ZodURL":
          break;
          case "$ZodUUID":
          break;
          case "ZodUUID":
          break;
          case "$ZodUndefined":
          break;
          case "ZodUndefined":
          break;
          case "ned":
          break;
          case "maxCount":
          break;
          case "$ZodUnion":
          break;
          case "ZodUnion":
          break;
          case "queryResults":
          break;
          case "$ZodVoid":
          break;
          case "ZodVoid":
          break;
          case "maxDate":
          break;
          case "$ZodXID":
          break;
          case "ZodXID":
          break;
          case "X":
          break;
          case "totalListeners":
          break;
          case "$ZodXor":
          break;
          case "ZodXor":
          break;
          case "safelyMakeUrlHumanReadable":
          break;
          case "queryItems":
          break;
          case "_$esjava$b":
          break;
          case "_$esjava$bra":
          break;
          case "$b":
          break;
          case "$brand":
          break;
          case "br":
          break;
          case "bra":
          break;
          case "brand":
          break;
          case "brandBackground":
          break;
          case "and":
          break;
          case "limitedTimeBadge":
          break;
          case "getAppVersion":
          break;
          case "onTapGiftIntentPrimaryCta":
          break;
          case "returnMessageId":
          break;
          case "GiftReminderNagbar":
          break;
          case "Nagbar":
          break;
          case "$code":
          break;
          case "codeBlock":
          break;
          case "purchases":
          break;
          case "countryData":
          break;
          case "middle_finger_tone3":
          break;
          case "$defs":
          break;
          case "defs":
          break;
          case "fs":
          break;
          case "$del":
          break;
          case "delayV":
          break;
          case "pray_tone3":
          break;
          case "$link":
          break;
          case "link":
          break;
          case "linkAccountIcon":
          break;
          case "contentStyle":
          break;
          case "contentStyles":
          break;
          case "supportsFeature":
          break;
          case "reconcilePromise":
          break;
          case "setNativeValue":
          break;
          case "verticalInset":
          break;
          case "$modal":
          break;
          case "modal":
          break;
        }
      }
    }
  } else {
    obj = isAlertOrActionSheetOpen;
  }
};