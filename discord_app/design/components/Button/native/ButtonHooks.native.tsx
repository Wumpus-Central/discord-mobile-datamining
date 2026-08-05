import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { ReanimatedRexport } from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import { CONFIG_NEVER_ANIMATE } from "../../../animation/reanimated/spring/spring.tsx";
import { SUBTLE_SPRING } from "../../../animation/reanimated/spring/springPresets.tsx";
import { map } from "../../../tokens/native/useToken.tsx";
// discord_app/design/components/Button/native/ButtonHooks.native.tsx
import noop from "noop";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

const require = arg1;
let c4 = "rgba(0,0,0,0.001)";
let closure_5 = createCacheKey.experimental_createToken(() => "#161CBB");
let closure_6 = createCacheKey.experimental_createToken(() => "#1318A0");
createCacheKey = { primary: require("Themes").colors.CONTROL_PRIMARY_TEXT_DEFAULT, "experimental_welcome-secondary": require("Themes").unsafe_rawColors.WHITE, secondary: require("Themes").colors.CONTROL_SECONDARY_TEXT_DEFAULT, tertiary: require("Themes").colors.REDESIGN_BUTTON_TERTIARY_TEXT, destructive: require("Themes").colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT, "critical-primary": require("Themes").colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT, "critical-secondary": require("Themes").colors.CONTROL_CRITICAL_SECONDARY_TEXT_DEFAULT, active: require("Themes").colors.CONTROL_CONNECTED_TEXT_DEFAULT, "primary-overlay": require("Themes").colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, "secondary-overlay": require("Themes").colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, "experimental_premium-primary": require("Themes").colors.WHITE, "experimental_premium-basic": require("Themes").colors.WHITE, "experimental_premium-secondary": require("Themes").colors.TEXT_BRAND, "icon-only": require("Themes").colors.CONTROL_ICON_ONLY_ICON_DEFAULT, expressive: require("Themes").colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT };
const styleProperties = createCacheKey.createStyleProperties((arg0) => {
  const obj = { backgroundInactive: null, backgroundPressed: null, borderInactive: null, borderPressed: null };
  switch (obj) {
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
    case "LIGHT":
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
    case "getGuild":
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
    case "ml":
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
    case "track":
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
    case "toString":
    break;
    case "top":
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
    case "warn":
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
    case "getVoiceStateForChannel":
    break;
    case "woman_gesturing_no":
    break;
    case "woman_gesturing_no_dark_skin_tone":
    break;
    case "man_gesturing_no":
    break;
    case "man_gesturing_no_dark_skin_tone":
    break;
    case "firstChild":
    break;
    case "emojiLineHeight":
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
    case "ary":
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
    case "DateParser":
    break;
    case "at":
    break;
    case "te":
    break;
    case "serializeDate":
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
    case "_createRenderMask":
    break;
    case "SEMANTIC_ATTRIBUTE_SENTRY_SOURCE":
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
    case "NSFW_SPACE_WARNING_MODAL_CLICKED":
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
    case "CardStyleInterpolators":
    break;
    case "pol":
    break;
    case "IdIcon":
    break;
    case "hasSameRoleAsUsername":
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
    case "USE_APP_COMMAND":
    break;
    case "ANDROID_NOTIFICATION_LIGHTS":
    break;
    case "L":
    break;
    case "LI":
    break;
    case "SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS":
    break;
    case "REQUIRE_SAFETY_FLOWS":
    break;
    case "SAFETY_FLOWS":
    break;
    case "SAFETY_FLOWS_MODAL_KEY":
    break;
    case "$ZodCheckMaxLength":
    break;
    case "kMaxLength":
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
    case "limitedTimeBadge":
    break;
    case "mi":
    break;
    case "mit":
    break;
    case "getAppStartInfo":
    break;
    case "AppStartInfo":
    break;
    case "forModalPresentationIOS":
    break;
    case "$ZodMap":
    break;
    case "ZodMap":
    break;
    case "M":
    break;
    case "ap":
    break;
    case "$ZodCheckGreaterThan":
    break;
    case "fetchMediaPostEmbed":
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
    case "MEDIA_PICKER_SEND_BUTTON_SPRING":
    break;
    case "marginHorizontal":
    break;
    case "Direction":
    break;
    case "rect":
    break;
    case "REGISTER_IDENTITY":
    break;
    case "PX_80":
    break;
    case "_":
    break;
    case "useICYMIEnabled":
    break;
    case "INVALID_PIN_MESSAGE_CHANNEL":
    break;
    case "CHANNEL_ADD_FLOW":
    break;
    case "FLOW_DISMISSED":
    break;
    case "MISSED_MESSAGES":
    break;
    case "MISSED_MESSAGES_DEFAULT":
    break;
    case "DEFAULT_KEYBOARD_BLUR_BEHAVIOR":
    break;
    case "KEYBOARD_BLUR_BEHAVIOR":
    break;
    case "UNKNOWN_USER":
    break;
    case "UNKNOWN_USER_OR_APPLICATION":
    break;
    case "APPLICATION_COMMAND_OPTIONAL_OPTION_REMOVED":
    break;
    case "FAVORITES_GUILD_ORDER_UPDATED":
    break;
    case "ORDER_UPDATE":
    break;
    case "SKIP_STEP":
    break;
    case "STEP_GUILD_CREATE":
    break;
    case "GUILD_CREATE":
    break;
    case "GUILD_CREATE_INVITE_SUGGESTION":
    break;
    case "INVITE_SUGGESTION_OPENED":
    break;
    case "CollectibleShopTab":
    break;
    case "TabActions":
    break;
    case "shouldMaintainScrollAtEnd":
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
    case "perGuildMaxCount":
    break;
    case "useEnableCommunitySharedStyles":
    break;
    case "PREMIUM_PLANS":
    break;
    case "ANSWER_HAS":
    break;
    case "HAS_APPLICATION":
    break;
    case "APPLICATION_COMMAND_INDEX_CHANNEL":
    break;
    case "CHANNEL_ACTION_BANNER_HEIGHT":
    break;
    case "BANNER_HEIGHT":
    break;
    case "fgClip":
    break;
    case "ClipViewAnimated":
    break;
    case "AnimatedFlashList":
    break;
    case "FlashList":
    break;
    case "FlashListRef":
    break;
    case "las":
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
    case "bam":
    break;
    case "bamboo":
    break;
    case "boost_price":
    break;
    case "price":
    break;
    case "priceChange":
    break;
    case "priceChangeId":
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
    case "langtag":
    break;
    case "tagIcon":
    break;
    case "tagIconUrl":
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
    case "QUEST_BOTTOM_SHEET":
    break;
    case "MAX_DAYS_AHEAD_AN_EVENT_CAN_END":
    break;
    case "dashedTint":
    break;
    case "interactive":
    break;
    case "interactiveFilter":
    break;
    case "fullScreenSwipeEnabled":
    break;
    case "ActionSheetHeaderPressableText":
    break;
    case "Pressable":
    break;
    case "ex":
    break;
    case "ext":
    break;
    case "isKeyVerified":
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
    case "MissionScrollSpotIllustration":
    break;
    case "onScroll":
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
    case "assetContainer":
    break;
    case "ss":
    break;
    case "closeCollectiblesShop":
    break;
    case "CollectiblesShopPerfCheckpoint":
    break;
    case "Checkpoint Intro Desktop":
    break;
    case "DesktopNotificationTypes":
    break;
    case "NotificationTypes":
    break;
    case "es-CO":
    break;
    case "COERCEPLAIN":
    break;
    case "PLAIN":
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
    case "STORE_HOME":
    break;
    case "HOME_EMPTY":
    break;
    case "EMPTY_GUILD_UPSELL":
    break;
    case "LuNsNf":
    break;
    case "Nfvo72":
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
    case "dist":
    break;
    case "distance":
    break;
    case "distanceFromEnd":
    break;
    case "sta":
    break;
    case "tan":
    break;
    case "nc":
    break;
    case "ce":
    break;
    case "access":
    break;
    case "accessibilityLabelCalendarFormat":
    break;
    case "cc":
    break;
    case "bi":
    break;
    case "bil":
    break;
    case "lit":
    break;
    case "Label":
    break;
    case "ab":
    break;
    case "abe":
    break;
    case "bel":
    break;
    case "fetchClaimedQuests":
    break;
    case "SPACE_32":
    break;
    case "Role":
    break;
    case "RoleFlags":
    break;
    case "scrollToNewMessages":
    break;
    case "useDiceRollState":
    break;
    case "accessibleDismiss":
    break;
    case "accessibleDismissStyle":
    break;
    case "ble":
    break;
    case "leg_tone1":
    break;
    case "captureReplay":
    break;
    case "FAB_BUTTON_SIZE":
    break;
    case "minWidth":
    break;
    case "pad":
    break;
    case "ad":
    break;
    case "adding":
    break;
    case "dd":
    break;
    case "din":
    break;
    case "z":
    break;
    case "tal":
    break;
    case "collapseText":
    break;
    case "paddingVertical":
    break;
    case "mostRecentTimeStamp":
    break;
    case "parseInline":
    break;
    case "parseInlineReply":
    break;
    case "parseInlineReplyToAST":
    break;
    case "STANDALONE_CHANNEL_HEADER_BORDER":
    break;
    case "BORDER_SUBTLE":
    break;
    case "LEGACY_STANDARD_BACKGROUND_THEMES":
    break;
    case "STANDARD":
    break;
    case "STANDARD_BACKGROUND_THEME":
    break;
    case "YCrcPL":
    break;
    case "PLATFORM_REDDIT":
    break;
    case "REDDIT":
    break;
    case "REDDIT_GOLD":
    break;
    case "GOLDFISH_PINK":
    break;
    case "PINK_34":
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
    case "zany_face":
    break;
    case "GuildEntityDao":
    break;
    case "EntityDao":
    break;
    case "Dao":
    break;
    case "NOTIF_SETTING_MAPPING":
    break;
    case "GUILD_CHANNEL_TYPES":
    break;
    case "SlideOutRight":
    break;
    case "status_code":
    break;
    case "BookmarkIcon":
    break;
    case "km":
    break;
    case "_initialPropsMap":
    break;
    case "initialProps":
    break;
    case "app":
    break;
    case "application":
    break;
    case "applicationIdToGuildIds":
    break;
    case "pp":
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
    case "showGuildBadgeIcon":
    break;
    case "convertToMajorUnits":
    break;
    case "suggestedGuilds":
    break;
    case "_applyCombination":
    break;
    case "ly":
    break;
    case "USER_PROFILE_WIDGETS":
    break;
    case "USER_PROFILE_WIDGETS_BOARD_MOBILE_EDIT_NOTICE":
    break;
    case "resolveOperation":
    break;
    case "oncoming_fist":
    break;
    case "quantize":
    break;
    case "postgresLang":
    break;
    case "angry":
    break;
    case "angry_face":
    break;
    case "face_palm":
    break;
    case "face_palm_tone1":
    break;
    case "authorContainer":
    break;
    case "acceptedRequestLabel":
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
    case "und":
    break;
    case "Color":
    break;
    case "ACTIVITY_LAYOUT_MODE_UPDATE":
    break;
    case "LAYOUT":
    break;
    case "YOU":
    break;
    case "UPDATE_CONFIG":
    break;
    case "DATE_CONFIG":
    break;
    case "GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL":
    break;
    case "ROLE_SUBSCRIPTION":
    break;
    case "canCreateExpressions":
    break;
    case "showProfilePreviewButton":
    break;
    case "GAME_PROFILE_DISABLED":
    break;
    case "FormSubmitErrorType":
    break;
    case "person_walking_facing_right_tone4":
    break;
    case "PREMIUM_COLLECTIBLES":
    break;
    case "COLLECTIBLE":
    break;
    case "COLLECTIBLES":
    break;
    case "COLLECTIBLES_APPLICATION_ID":
    break;
    case "APPLICATIONS_WITH_ASSETS":
    break;
    case "ASSET":
    break;
    case "omitGuildId":
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
    case "tom":
    break;
    case "right shift":
    break;
    case "shiftLeft":
    break;
    case "opencriticTopCriticImage":
    break;
    case "getAudioDeviceStats":
    break;
    case "appLauncherOnlyCompareNames":
    break;
    case "chatInputAppCommandManager":
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
      obj[0] = Themes.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
      obj[1] = Themes.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE;
      obj[2] = c4;
      obj[3] = c4;
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
    case "accessibilityIsModalView":
    break;
    case "wMWyci":
    break;
    case "ix8XIj":
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
    case "enableClips":
    break;
    case "enableClipsV3":
    break;
    case "enableClipsV3ML":
    break;
    case "MLS_INIT":
    break;
    case "INITIAL_SAFE_AREA_INSETS":
    break;
    case "woman_office_worker_tone1":
    break;
    case "man_office_worker_tone1":
    break;
    case "office_worker_tone1":
    break;
    case "112vVE":
    break;
    case "VE":
    break;
    case "VEHICULAR_COMBAT":
    break;
    case "BATTLENET_LINKED_ROLE_DEPRECATION":
    break;
    case "NEUTRAL_79":
    break;
    case "activityParticipantIdToApplicationId":
    break;
    case "disableGuildSelect":
    break;
    case "GuildSelectDefaultIcon":
    break;
    case "concatSettings":
    break;
    case "subscriptionPlanPrice":
    break;
    case "$constructor":
    break;
    case "const":
    break;
    case "constr":
    break;
    case "construct":
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
    case "tex":
    break;
    case "withBounce":
    break;
    case "BounceInDown":
    break;
    case "ownerDocument":
    break;
    case "AccountAgeTier10LargeBadge":
    break;
    case "cou":
    break;
    case "Badge":
    break;
    case "cls":
    break;
    case "generateViewId":
    break;
    case "cr":
    break;
    case "les":
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
    case "containerFloatingGradient":
    break;
    case "TWD":
    break;
    case "maximumValue":
    break;
    case "_isBackgrounded":
    break;
    case "isBackground":
    break;
    case "roundedNumber":
    break;
    case "_$esjava$cursor":
    break;
    case "cursorColor":
    break;
    case "so":
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
    case "propertyKeyTypes":
    break;
    case "define":
    break;
    case "efi":
    break;
    case "fi":
    break;
    case "fin":
    break;
    case "surveySeen":
    break;
    case "enableLayoutAnimationsOnIOS":
    break;
    case "IOS_TWO_FA_SUCCESS":
    break;
    case "assetLight":
    break;
    case "setLightsEnabled":
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
    case "shouldUseAltGateway":
    break;
    case "addDefaultOpForSpanFrom":
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
    case "isReady":
    break;
    case "inputHint":
    break;
    case "interstitial":
    break;
    case "aria-disabled":
    break;
    case "disable":
    break;
    case "disabledContainer":
    break;
    case "disabledContainerStyle":
    break;
    case "isa":
    break;
    case "sab":
    break;
    case "led":
    break;
    case "kiss_man_man_medium_skin_tone_light_skin_tone":
    break;
    case "isButtonVisible":
    break;
    case "onVisibleItemsChanged":
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
    case "launchSignature":
    break;
    case "reactionInfo":
    break;
    case "forceTransition":
    break;
    case "onTapGiftCodeAccept":
    break;
    case "getEffectiveSection":
    break;
    case "onTapThreadEmbed":
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
    case "flag_et":
    break;
    case "useFetchSocialLayerStorefrontProductDetailsEmbedData":
    break;
    case "div":
    break;
    case "diversityChildren":
    break;
    case "ve":
    break;
    case "ver":
    break;
    case "renderCommunicationDisabled":
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
    case "unreadByType":
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
    case "brx":
    break;
    case "rx":
    break;
    case "IN_GAME_FEATURES":
    break;
    case "RESPONDER_ACTIVE_PRESS_OUT":
    break;
    case "app_hardware_acceleration_enabled":
    break;
    case "_enabled":
    break;
    case "_enabledPaymentMethods":
    break;
    case "enable":
    break;
    case "shouldShowAgeGateForChannelId":
    break;
    case "AUTO_MODERATION_RULE_DELETE":
    break;
    case "DELETE_SAFETY_WARNINGS":
    break;
    case "SPACE_4":
    break;
    case "SPACE_40":
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
    case "_songbirdInitFailed":
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
    case "beforeAddRecordingEvent":
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
    case "nix":
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
    case "StreamingTier10LargeBadge":
    break;
    case "EntitlementTenantFulfillmentStatus":
    break;
    case "ill":
    break;
    case "__findAnimatedPropsNodes":
    break;
    case "channelDismissTimestamps":
    break;
    case "MESSAGE_REACTIONS":
    break;
    case "system_channel_flags":
    break;
    case "channel_flags":
    break;
    case "_flags":
    break;
    case "flag":
    break;
    case "flags_":
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
    case "_googlePayVersion":
    break;
    case "googlePay":
    break;
    case "onChannelSelected":
    break;
    case "NATIVE_MEDIA_PICKER":
    break;
    case "MEDIA_PICKER":
    break;
    case "MEDIA_PICKER_ACTION_SHEET_ENGAGED":
    break;
    case "fo":
    break;
    case "for":
    break;
    case "forEachChannel":
    break;
    case "isBrowser":
    break;
    case "isBrowserBundle":
    break;
    case "ga":
    break;
    case "gaps":
    break;
    case "BadgePacksAbstractUI":
    break;
    case "getChannelA11yHint":
    break;
    case "Channel":
    break;
    case "interpolationIndex":
    break;
    case "exposureTracking":
    break;
    case "exposureTrackingEnabled":
    break;
    case "incidentDate":
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
    case "StreamQualities":
    break;
    case "StreamQualitiesToPremiumType":
    break;
    case "PremiumTypeToActivePremiumSubscriptionSKU":
      obj[0] = c4;
      obj[1] = c4;
      obj[2] = c4;
      obj[3] = c4;
      return obj;
    case "PremiumSubscriptionSKUToPremiumType":
    break;
    case "PremiumTypeOrder":
    break;
    case "constraints":
    break;
    case "USER_SAFETY_TOOLS_BLOCK_CANCEL":
    break;
    case "_getGuildState":
    break;
    case "getGuildState":
    break;
    case "G":
    break;
    case "Guild":
    break;
    case "allowLogoutRedirect":
    break;
    case "flow_id":
    break;
    case "_guildId":
    break;
    case "gu":
    break;
    case "current_guild_id":
    break;
    case "getComponentRenderStats":
    break;
    case "PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_DISMISSED":
    break;
    case "STICKER_PREMIUM_TIER_2_UPSELL_MODAL":
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
    case "avatar_hash":
    break;
    case "_hash":
    break;
    case "hashKey":
    break;
    case "bhd":
    break;
    case "IN_APP_MESSAGE_SOUNDS":
    break;
    case "SOUNDS_PER_ROW":
    break;
    case "CUW":
    break;
    case "UNSTABLE_headerInsets":
    break;
    case "STABLE":
    break;
    case "_header":
    break;
    case "head":
    break;
    case "ade":
    break;
    case "shouldOpenGameProfile":
    break;
    case "GameProfileSources":
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
    case "withMutualGuilds":
    break;
    case "fieldText":
    break;
    case "fieldTextHook":
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
    case "iconsContainer":
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
    case "originalBuffer":
    break;
    case "ferry":
    break;
    case "__internalInstanceHandle":
    break;
    case "_int":
    break;
    case "_internalInstanceHandle":
    break;
    default:
  }
});
let closure_9 = { code: "function ButtonHooksNativeTsx1(){const{themedStyles,colors,interpolateColor,pressed}=this.__closure;var _themedStyles$backgro,_themedStyles,_themedStyles$borderC,_themedStyles2;const backgroundColor=(_themedStyles$backgro=(_themedStyles=themedStyles)===null||_themedStyles===void 0?void 0:_themedStyles.backgroundColor)!==null&&_themedStyles$backgro!==void 0?_themedStyles$backgro:[colors.backgroundInactive,colors.backgroundPressed];const borderColor=(_themedStyles$borderC=(_themedStyles2=themedStyles)===null||_themedStyles2===void 0?void 0:_themedStyles2.borderColor)!==null&&_themedStyles$borderC!==void 0?_themedStyles$borderC:[colors.borderInactive,colors.borderPressed];return{backgroundColor:interpolateColor(pressed.get(),[0,1],backgroundColor),borderColor:interpolateColor(pressed.get(),[0,1],borderColor)};}" };
let closure_10 = { code: "function ButtonHooksNativeTsx2(){const{width,scaleAmountInPx,withSpring,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const scale=width.get()>0?(width.get()-scaleAmountInPx)/width.get():1;return{transform:[{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING,'animate-always')}]};}" };
let result = require("ManaContext").fileFinishedImporting("design/components/Button/native/ButtonHooks.native.tsx");

export const SAFE_TRANSPARENT_COLOR = "rgba(0,0,0,0.001)";
export const useProfileThemedButtonStyles = function useProfileThemedButtonStyles(arg0) {
  const _require = arg0;
  const themeContext = _require(theme[2]).useThemeContext();
  const primaryColor = themeContext.primaryColor;
  theme = themeContext.theme;
  const items = [theme, primaryColor, arg0];
  return React.useMemo(() => {
    if (null == memo) {
      return null;
    } else if ("primary" === variant) {
      const WHITE = memo(theme[3]).unsafe_rawColors.WHITE;
      let obj = { base: null, contrastRatio: null };
      obj[0] = WHITE;
      obj[1] = variant(theme[2]).WCAGContrastRatios.HighContrastText;
      const contrastingColor = variant(theme[2]).getContrastingColor(tmp, obj);
      const obj8 = variant(theme[2]);
      const darkenColorResult = variant(theme[2]).darkenColor(contrastingColor, 0.5);
      obj = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj[0] = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj[1] = items1;
      obj[2] = WHITE;
      return obj;
    } else if ("secondary" === tmp45) {
      const obj5 = variant(theme[4]);
      const tmp20 = theme;
      const isThemeLightResult = variant(theme[4]).isThemeLight(theme);
      const setColorOpacity2 = variant(theme[2]).setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const tmp24 = variant(theme[2]);
      const obj6 = variant(theme[4]);
      const isThemeLightResult1 = variant(theme[4]).isThemeLight(tmp20);
      const setColorOpacity3 = variant(theme[2]).setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      let obj1 = { backgroundColor: null, borderColor: null, color: "disabled" };
      items2[1] = setColorOpacity3Result;
      obj1[0] = items2;
      const items3 = [outer1_4, outer1_4];
      obj1[1] = items3;
      return obj1;
    } else if ("tertiary" === tmp45) {
      obj = variant(theme[4]);
      const isThemeLightResult2 = obj.isThemeLight(theme);
      const tmp4 = theme;
      const setColorOpacity = variant(theme[2]).setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      obj1 = variant(theme[4]);
      const tmp8 = variant(theme[2]);
      let obj2 = variant(theme[2]);
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj2.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj2.setColorOpacity("white", 0.2);
      }
      obj2 = { backgroundColor: null, borderColor: null, color: "disabled" };
      items4[1] = darkenColorResult1;
      obj2[0] = items4;
      const items5 = [outer1_4, outer1_4];
      obj2[1] = items5;
      return obj2;
    } else {
      return null;
    }
  }, items);
};
export const useForegroundColor = function useForegroundColor(variant) {
  return map /* map */.useToken(createCacheKey[variant]);
};
export const useButtonColorStyles = styleProperties;
export const useButtonTextColorStyles = function useButtonTextColorStyles(style) {
  const _require = style;
  const themeContext = _require(theme[2]).useThemeContext();
  const primaryColor = themeContext.primaryColor;
  theme = themeContext.theme;
  const items = [theme, primaryColor, style];
  const memo = React.useMemo(() => {
    if (null == memo) {
      return null;
    } else if ("primary" === variant) {
      const WHITE = memo(theme[3]).unsafe_rawColors.WHITE;
      let obj = { base: null, contrastRatio: null };
      obj[0] = WHITE;
      obj[1] = variant(theme[2]).WCAGContrastRatios.HighContrastText;
      const contrastingColor = variant(theme[2]).getContrastingColor(tmp, obj);
      const obj8 = variant(theme[2]);
      const darkenColorResult = variant(theme[2]).darkenColor(contrastingColor, 0.5);
      obj = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj[0] = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj[1] = items1;
      obj[2] = WHITE;
      return obj;
    } else if ("secondary" === tmp45) {
      const obj5 = variant(theme[4]);
      const tmp20 = theme;
      const isThemeLightResult = variant(theme[4]).isThemeLight(theme);
      const setColorOpacity2 = variant(theme[2]).setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const tmp24 = variant(theme[2]);
      const obj6 = variant(theme[4]);
      const isThemeLightResult1 = variant(theme[4]).isThemeLight(tmp20);
      const setColorOpacity3 = variant(theme[2]).setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      let obj1 = { backgroundColor: null, borderColor: null, color: "disabled" };
      items2[1] = setColorOpacity3Result;
      obj1[0] = items2;
      const items3 = [outer1_4, outer1_4];
      obj1[1] = items3;
      return obj1;
    } else if ("tertiary" === tmp45) {
      obj = variant(theme[4]);
      const isThemeLightResult2 = obj.isThemeLight(theme);
      const tmp4 = theme;
      const setColorOpacity = variant(theme[2]).setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      obj1 = variant(theme[4]);
      const tmp8 = variant(theme[2]);
      let obj2 = variant(theme[2]);
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj2.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj2.setColorOpacity("white", 0.2);
      }
      obj2 = { backgroundColor: null, borderColor: null, color: "disabled" };
      items4[1] = darkenColorResult1;
      obj2[0] = items4;
      const items5 = [outer1_4, outer1_4];
      obj2[1] = items5;
      return obj2;
    } else {
      return null;
    }
  }, items);
  const obj = _require(theme[2]);
  let color;
  const token = _require(theme[5]).useToken(createCacheKey[style]);
  if (memo != null) {
    color = memo.color;
  }
  if (color == null) {
    color = token;
  }
  return { color };
};
export const useIconTintStyles = function useIconTintStyles(arg0) {
  const _require = arg0;
  const themeContext = _require(theme[2]).useThemeContext();
  const primaryColor = themeContext.primaryColor;
  theme = themeContext.theme;
  const items = [theme, primaryColor, arg0];
  const memo = React.useMemo(() => {
    if (null == memo) {
      return null;
    } else if ("primary" === variant) {
      const WHITE = memo(theme[3]).unsafe_rawColors.WHITE;
      let obj = { base: null, contrastRatio: null };
      obj[0] = WHITE;
      obj[1] = variant(theme[2]).WCAGContrastRatios.HighContrastText;
      const contrastingColor = variant(theme[2]).getContrastingColor(tmp, obj);
      const obj8 = variant(theme[2]);
      const darkenColorResult = variant(theme[2]).darkenColor(contrastingColor, 0.5);
      obj = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj[0] = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj[1] = items1;
      obj[2] = WHITE;
      return obj;
    } else if ("secondary" === tmp45) {
      const obj5 = variant(theme[4]);
      const tmp20 = theme;
      const isThemeLightResult = variant(theme[4]).isThemeLight(theme);
      const setColorOpacity2 = variant(theme[2]).setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const tmp24 = variant(theme[2]);
      const obj6 = variant(theme[4]);
      const isThemeLightResult1 = variant(theme[4]).isThemeLight(tmp20);
      const setColorOpacity3 = variant(theme[2]).setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      let obj1 = { backgroundColor: null, borderColor: null, color: "disabled" };
      items2[1] = setColorOpacity3Result;
      obj1[0] = items2;
      const items3 = [outer1_4, outer1_4];
      obj1[1] = items3;
      return obj1;
    } else if ("tertiary" === tmp45) {
      obj = variant(theme[4]);
      const isThemeLightResult2 = obj.isThemeLight(theme);
      const tmp4 = theme;
      const setColorOpacity = variant(theme[2]).setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      obj1 = variant(theme[4]);
      const tmp8 = variant(theme[2]);
      let obj2 = variant(theme[2]);
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj2.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj2.setColorOpacity("white", 0.2);
      }
      obj2 = { backgroundColor: null, borderColor: null, color: "disabled" };
      items4[1] = darkenColorResult1;
      obj2[0] = items4;
      const items5 = [outer1_4, outer1_4];
      obj2[1] = items5;
      return obj2;
    } else {
      return null;
    }
  }, items);
  const obj = _require(theme[2]);
  let tintColor;
  const token = _require(theme[5]).useToken(createCacheKey[arg0]);
  if (memo != null) {
    tintColor = memo.color;
  }
  if (tintColor == null) {
    tintColor = token;
  }
  return { tintColor };
};
export const useGradientPillStyles = function useGradientPillStyles(variant) {
  return { borderColor: styleProperties(variant).borderInactive };
};
export const useButtonPillStyles = function useButtonPillStyles(variant, pressed) {
  const _require = variant;
  let obj = _require(theme[2]);
  const themeContext = obj.useThemeContext();
  const primaryColor = themeContext.primaryColor;
  let memo = primaryColor;
  theme = themeContext.theme;
  let items = [theme, primaryColor, variant];
  memo = React.useMemo(() => {
    if (null == memo) {
      return null;
    } else if ("primary" === variant) {
      const WHITE = memo(theme[3]).unsafe_rawColors.WHITE;
      let obj = { base: null, contrastRatio: null };
      obj[0] = WHITE;
      obj[1] = variant(theme[2]).WCAGContrastRatios.HighContrastText;
      const contrastingColor = variant(theme[2]).getContrastingColor(tmp, obj);
      const obj8 = variant(theme[2]);
      const darkenColorResult = variant(theme[2]).darkenColor(contrastingColor, 0.5);
      obj = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj[0] = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj[1] = items1;
      obj[2] = WHITE;
      return obj;
    } else if ("secondary" === tmp45) {
      const obj5 = variant(theme[4]);
      const tmp20 = theme;
      const isThemeLightResult = variant(theme[4]).isThemeLight(theme);
      const setColorOpacity2 = variant(theme[2]).setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const tmp24 = variant(theme[2]);
      const obj6 = variant(theme[4]);
      const isThemeLightResult1 = variant(theme[4]).isThemeLight(tmp20);
      const setColorOpacity3 = variant(theme[2]).setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      let obj1 = { backgroundColor: null, borderColor: null, color: "disabled" };
      items2[1] = setColorOpacity3Result;
      obj1[0] = items2;
      const items3 = [outer1_4, outer1_4];
      obj1[1] = items3;
      return obj1;
    } else if ("tertiary" === tmp45) {
      obj = variant(theme[4]);
      const isThemeLightResult2 = obj.isThemeLight(theme);
      const tmp4 = theme;
      const setColorOpacity = variant(theme[2]).setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      obj1 = variant(theme[4]);
      const tmp8 = variant(theme[2]);
      let obj2 = variant(theme[2]);
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj2.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj2.setColorOpacity("white", 0.2);
      }
      obj2 = { backgroundColor: null, borderColor: null, color: "disabled" };
      items4[1] = darkenColorResult1;
      obj2[0] = items4;
      const items5 = [outer1_4, outer1_4];
      obj2[1] = items5;
      return obj2;
    } else {
      return null;
    }
  }, items);
  const tmp3 = styleProperties(variant);
  theme = tmp3;
  const fn = function s() {
    let backgroundColor;
    if (memo != null) {
      backgroundColor = tmp.backgroundColor;
    }
    if (backgroundColor == null) {
      const items = [, ];
      ({ backgroundInactive: arr[0], backgroundPressed: arr[1] } = theme);
      backgroundColor = items;
    }
    let borderColor;
    if (memo != null) {
      borderColor = tmp.borderColor;
    }
    if (borderColor == null) {
      const items1 = [, ];
      ({ borderInactive: arr2[0], borderPressed: arr2[1] } = theme);
      borderColor = items1;
    }
    const obj = { backgroundColor: null, borderColor: null };
    obj[0] = variant(theme[6]).interpolateColor(variant.get(), [0, 1], backgroundColor);
    const obj2 = variant(theme[6]);
    obj[1] = variant(theme[6]).interpolateColor(variant.get(), [0, 1], borderColor);
    return obj;
  };
  obj = { themedStyles: memo, colors: tmp3, interpolateColor: _require(theme[6]).interpolateColor, pressed };
  fn.__closure = obj;
  fn.__workletHash = 2383933325137;
  fn.__initData = closure_9;
  return _require(theme[6]).useAnimatedStyle(fn);
};
export const useButtonScaleStyles = function useButtonScaleStyles(pressed, width, scaleAmountInPx) {
  const _require = pressed;
  let closure_1 = width;
  const dependencyMap = scaleAmountInPx;
  let obj = _ReanimatedRexport;
  const fn = function n() {
    let obj = sharedValue1;
    let num = 1;
    if (sharedValue1.get() > 0) {
      const diff = obj.get() - num;
      num = diff / obj.get();
    }
    obj = { transform: null };
    obj = { scale: null };
    const obj4 = sharedValue(num[7]);
    const items = [1, num];
    const obj5 = sharedValue(num[6]);
    obj[0] = obj4.withSpring(sharedValue(num[6]).interpolate(sharedValue.get(), [0, 1], items), sharedValue(num[8]).ON_PRESS_SPRING, "animate-always");
    const items1 = [obj];
    obj[0] = items1;
    return obj;
  };
  obj = { width, scaleAmountInPx, withSpring: _CONFIG_NEVER_ANIMATE.withSpring, interpolate: _ReanimatedRexport.interpolate, pressed, ON_PRESS_SPRING: _SUBTLE_SPRING.ON_PRESS_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 17256006845494;
  fn.__initData = closure_10;
  return obj.useAnimatedStyle(fn);
};
export const useButtonPressAnimationProps = function useButtonPressAnimationProps(sharedValue, scaleAmountInPx, onLayout, onPressIn, onPressOut) {
  let num = scaleAmountInPx;
  if (scaleAmountInPx === undefined) {
    num = 8;
  }
  sharedValue = onLayout;
  let sharedValue1 = onPressIn;
  num = onPressOut;
  sharedValue = undefined;
  sharedValue1 = undefined;
  let obj = sharedValue(4146);
  sharedValue = obj.useSharedValue(0);
  let tmpResult = tmp(4146);
  sharedValue1 = tmpResult.useSharedValue(0);
  obj = {
    onPressIn: sharedValue.useCallback((arg0) => {
      const result = sharedValue.set(1);
      if (sharedValue1 != null) {
        tmp2(arg0);
      }
    }, items),
    onPressOut: sharedValue.useCallback((arg0) => {
      const result = sharedValue.set(0);
      if (num != null) {
        tmp2(arg0);
      }
    }, items1),
    onLayout: sharedValue.useCallback((nativeEvent) => {
      const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
      if (sharedValue != null) {
        tmp2(nativeEvent);
      }
    }, items2),
    style: null
  };
  items = [sharedValue, onPressIn];
  items1 = [sharedValue, onPressOut];
  items2 = [sharedValue1, onLayout];
  tmpResult = tmp(4146);
  const fn = function n() {
    let obj = sharedValue1;
    let num = 1;
    if (sharedValue1.get() > 0) {
      const diff = obj.get() - num;
      num = diff / obj.get();
    }
    obj = { transform: null };
    obj = { scale: null };
    const obj4 = sharedValue(num[7]);
    const items = [1, num];
    const obj5 = sharedValue(num[6]);
    obj[0] = obj4.withSpring(sharedValue(num[6]).interpolate(sharedValue.get(), [0, 1], items), sharedValue(num[8]).ON_PRESS_SPRING, "animate-always");
    const items1 = [obj];
    obj[0] = items1;
    return obj;
  };
  obj = { width: sharedValue1, scaleAmountInPx: num, withSpring: tmp(4694).withSpring, interpolate: tmp(4146).interpolate, pressed: sharedValue, ON_PRESS_SPRING: tmp(4698).ON_PRESS_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 17256006845494;
  fn.__initData = closure_10;
  obj[3] = tmpResult.useAnimatedStyle(fn);
  return obj;
};
export const useIconSizeStyles = (arg0) => {
  const _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = arg2;
  if (arg2 === undefined) {
    BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = _require(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[9]).BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  let fontScale;
  fontScale = _require(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[10]).useFontScale();
  const items = [arg0, flag, BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER, fontScale];
  return fontScale.useMemo(() => {
    callback(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[11]);
    if ("sm" === callback) {
      let tmpResult = tmp(tmp2[11]);
      let iconSize = tmpResult.getIconSize(tmp(tmp2[9]).SMALL_BUTTON_ICON_SIZE);
    } else {
      iconSize = tmp4;
      if ("lg" === tmp5) {
        tmpResult = tmp(tmp2[11]);
        iconSize = tmpResult.getIconSize(tmp(tmp2[9]).LARGE_BUTTON_ICON_SIZE);
      }
    }
    let width = iconSize;
    if (flag) {
      width = iconSize;
      if (fontScale > 1) {
        const tmpResult1 = tmp(tmp2[9]);
        const tmp13 = tmp(tmp2[12]).TextStyleSheet[tmpResult1.getButtonDefaultTextVariant(tmpResult1, tmp5)];
        const tmp9 = tmp(tmp2[13]).isAndroid() ? tmp13.fontSize : tmp13.lineHeight;
        width = iconSize;
        if (null != iconSize) {
          width = iconSize;
          if (null != tmp9) {
            const _Math = Math;
            const _Math2 = Math;
            width = Math.max(iconSize, tmp9 * Math.min(tmp8, BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER));
          }
        }
        const tmpResult2 = tmp(tmp2[13]);
      }
    }
    return { width, height: width };
  }, items);
};