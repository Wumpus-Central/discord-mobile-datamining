// discord_app/design/components/Button/native/ButtonHooks.native.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../tokens/native/useToken.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";
import { ManaContext } from "../../../../../discord_common/js/packages/design/native.tsx";
import { ReanimatedRexport } from "../../../../modules/reanimated/ReanimatedRexport.tsx";

require = arg1;
let c4 = "rgba(0,0,0,0.001)";
let closure_5 = createCacheKey.experimental_createToken(() => "#161CBB");
let closure_6 = createCacheKey.experimental_createToken(() => "#1318A0");
createCacheKey = { primary: ThemesDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT, "experimental_welcome-secondary": ThemesDefault.unsafe_rawColors.WHITE, secondary: ThemesDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, tertiary: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT, destructive: ThemesDefault.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT, "critical-primary": ThemesDefault.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT, "critical-secondary": ThemesDefault.colors.CONTROL_CRITICAL_SECONDARY_TEXT_DEFAULT, active: ThemesDefault.colors.CONTROL_CONNECTED_TEXT_DEFAULT, "primary-overlay": ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, "secondary-overlay": ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, "experimental_premium-primary": ThemesDefault.colors.WHITE, "experimental_premium-basic": ThemesDefault.colors.WHITE, "experimental_premium-secondary": ThemesDefault.colors.TEXT_BRAND, "icon-only": ThemesDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT, expressive: ThemesDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT };
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
    case "container":
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
    case "guildIconText":
    break;
    case "IconTextBadge":
    break;
    case "TextBadge":
    break;
    case "useTraitHiddenOnAndroid":
    break;
    case "dragOffsetFromRight":
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
    case "serializeEnd":
    break;
    case "discovery_splash":
    break;
    case "splash":
    break;
    case "hash_mask":
    break;
    case "maskContentUnits":
    break;
    case "captureBillingException":
    break;
    case "stateDataTranslator":
    break;
    case "LanternSpotIllustration":
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
    case "NSFW_SERVER_INVITE":
    break;
    case "NSFW_SERVER_INVITE_EMBED":
    break;
    case "SERVER_INVITE":
    break;
    case "INVITE_EMBED":
    break;
    case "INVITE_EMBED_ACTIONED":
    break;
    case "MarketingPageBanner":
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
    case "LITTLE_ENDIAN":
    break;
    case "ANDROID_NOTIFICATION_LIGHTS":
    break;
    case "L":
    break;
    case "LI":
    break;
    case "SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS":
    break;
    case "earlyCacheInfo":
    break;
    case "footerSuggestionsContainer":
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
    case "limitedBadgeRow":
    break;
    case "mi":
    break;
    case "mit":
    break;
    case "with_bundled_skus":
    break;
    case "purchaseUpdatedListener":
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
    case "renderExecutedCommands":
    break;
    case "totalTokens":
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
    case "benefitType":
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
    case "SETTINGS_DESKTOP_APP":
    break;
    case "PX_80":
    break;
    case "_":
    break;
    case "XFU":
    break;
    case "computeEntries":
    break;
    case "subscription_trial":
    break;
    case "subscription_trial_id":
    break;
    case "trial_id":
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
    case "woman_and_man_holding_hands_tone2":
    break;
    case "woman_and_man_holding_hands_tone2_tone1":
    break;
    case "_parsedMessages":
    break;
    case "parsed":
    break;
    case "parsedMessage":
    break;
    case "view_watch_time":
    break;
    case "timeToInteractiveMs":
    break;
    case "QUEST_DECISION_RECEIVED":
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
    case "RTC_REGION_RANKING":
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
    case "QUEST_BAR_RENDER_DELAY":
    break;
    case "LAYER_POP_START":
    break;
    case "RTC_CONNECTION_FLAGS":
    break;
    case "cacheDisabled":
    break;
    case "ideograph_advantage":
    break;
    case "getAppHardwareAccelerationEnabled":
    break;
    case "ActionSheetHeaderPressableText":
    break;
    case "Pressable":
    break;
    case "ex":
    break;
    case "ext":
    break;
    case "isReduceMotionEnabled":
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
    case "createPublicInstance":
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
    case "SETTINGS_SENSITIVE_MEDIA_FILTERS":
    break;
    case "SENSITIVE_MEDIA_FILTERS":
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
    case "NOTIF_CENTER_ITEMS":
    break;
    case "NOTIF_CENTER_ITEMS_ACK":
    break;
    case "ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON":
    break;
    case "NER":
    break;
    case "FEED":
    break;
    case "BUTTON_CORNER_RADIUS":
    break;
    case "USER_CONTACTS_SYNC":
    break;
    case "PROFILE_THEMES_SETTINGS_VIEWED_V2":
    break;
    case "Role":
    break;
    case "RoleFlags":
    break;
    case "scrollToQuestId":
    break;
    case "accessibleDismiss":
    break;
    case "accessibleDismissStyle":
    break;
    case "ble":
    break;
    case "leg_tone3":
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
    case "PLUM_4":
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
    case "useThenable":
    break;
    case "enableAccessibilityFocusLock":
    break;
    case "TWITTER_VERIFIED":
    break;
    case "VERIFIED_TEEN":
    break;
    case "TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_NON_FRIEND_DM":
    break;
    case "NON_FRIEND_DM":
    break;
    case "DM_FRIEND_NUDGE":
    break;
    case "STICKER_AUTOCOMPLETE":
    break;
    case "AUTOCOMPLETE_OPTION_DEBOUNCE_TIME":
    break;
    case "TIME_OVER_DEADLINE":
    break;
    case "DEAD":
    break;
    case "DEADLINE_INITIAL_TIME_REMAINING":
    break;
    case "GDPR_REQUEST_DATA":
    break;
    case "REQUEST_DATA":
    break;
    case "REQUEST_DATA_LIMIT_DAYS":
    break;
    case "GuildEntityDao":
    break;
    case "EntityDao":
    break;
    case "Dao":
    break;
    case "renderThreadEmbeds":
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
    case "showHidden":
    break;
    case "_applyCombination":
    break;
    case "ly":
    break;
    case "trequest":
    break;
    case "requestActivityItems":
    break;
    case "black_nib":
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
    case "ACTIVITY_LAUNCH_UNKNOWN_CHANNEL":
    break;
    case "UNKNOWN":
    break;
    case "UNKNOWN_CHANNEL":
    break;
    case "DISCORD_CONSENT":
    break;
    case "FormSubmitErrorType":
    break;
    case "person_walking_facing_right_tone4":
    break;
    case "guildIconBorder":
    break;
    case "orderCollapsed":
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
    case "buttonPill":
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
    case "hasAction":
    break;
    case "hasActionSheetOpen":
    break;
    case "numFinished":
    break;
    case "channelContainer":
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
    case "ix8XIj":
    break;
    case "browserLinkedErrorsIntegration":
    break;
    case "onHasEdits":
    break;
    case "getSendMessageOptionsForReply":
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
    case "adRequestId":
    break;
    case "disableGuildSelect":
    break;
    case "GuildSelectDefaultIcon":
    break;
    case "concatSettings":
    break;
    case "subtractOrZero":
    break;
    case "ROBOT_VOICE":
    break;
    case "VOICE_ACTION_SHEET":
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
      obj[0] = ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
      obj[1] = ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE;
      obj[2] = c4;
      obj[3] = c4;
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
    case "AccountAgeTier10LargeBadge":
    break;
    case "cou":
    break;
    case "Badge":
    break;
    case "getColorLightnessAdjusted":
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
    case "containerIndex":
    break;
    case "expandCTALabelContainer":
    break;
    case "CTALabel":
    break;
    case "selectionHandleColor":
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
    case "shouldUseDMWishlistGiftingDesign":
    break;
    case "connectOrLurkStage":
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
    case "breast_feeding_medium_light_skin_tone":
    break;
    case "one_thirty":
    break;
    case "eP8yWU":
    break;
    case "WUTHERING_WAVES":
    break;
    case "inputHint":
    break;
    case "interstitial":
    break;
    case "aria-disabled":
    break;
    case "disable":
    break;
    case "disabledContainerStyle":
    break;
    case "isa":
    break;
    case "sab":
    break;
    case "led":
    break;
    case "payment_source_id":
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
    case "_debouncedFlush":
    break;
    case "debounce":
    break;
    case "PrivacyShieldLaptopSpotIllustration":
    break;
    case "LaptopSpotIllustration":
    break;
    case "parent_span_id":
    break;
    case "renderActivityInstanceEmbed":
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
    case "interestedIcon":
    break;
    case "contentSelectPlan":
    break;
    case "english":
    break;
    case "englishName":
    break;
    case "viewerData":
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
    case "shouldShowBountiesGivenFilters":
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
    case "safeRe":
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
    case "_flushOutcomes":
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
    case "SeverHubAbstractUI":
    break;
    case "[object Date]":
    break;
    case "EntitlementTenantFulfillmentStatus":
    break;
    case "ill":
    break;
    case "__findAnimatedPropsNodes":
    break;
    case "formatActiveA11yTimestamp":
    break;
    case "MILLIMETERS":
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
    case "USER_INTERACTION":
    break;
    case "INTERACTION_MESSAGE_COMPONENT":
    break;
    case "MESSAGE_COMPONENT":
    break;
    case "COMPONENT_PLAYGROUND":
    break;
    case "PLAYGROUND":
    break;
    case "ROUND_CEIL":
    break;
    case "ILLO_PURPLE_40":
    break;
    case "overrideQuestForPlacement":
    break;
    case "iconBorderRadius":
    break;
    case "useCanManageGuildRoleSubscriptions":
    break;
    case "fo":
    break;
    case "for":
    break;
    case "forEachChannel":
    break;
    case "useAnimatedValue":
    break;
    case "ValueXY":
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
    case "checkoutSdk":
    break;
    case "BILLING_PAYMENT":
    break;
    case "BILLING_PAYMENTS":
    break;
    case "BILLING_PAYMENTS_VOID":
    break;
    case "getChannelA11yHint":
    break;
    case "Channel":
    break;
    case "interpolationIndex":
    break;
    case "explicitMediaFalsePositiveInfo":
    break;
    case "footerTitle":
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
    case "_getGuildState":
    break;
    case "getGuildState":
    break;
    case "G":
    break;
    case "Guild":
    break;
    case "_guildId":
    break;
    case "gu":
    break;
    case "current_guild_id":
    break;
    case "getCopy":
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
    case "indicatorSpace":
    break;
    case "mediaMention":
    break;
    case "getGiftCode":
    break;
    case "getGiftCodeRedeemError":
    break;
    case "avatar_hash":
    break;
    case "_hash":
    break;
    case "hashKey":
    break;
    case "propsAndStyles":
    break;
    case "bhd":
    break;
    case "IN_APP_GUILD_TEMPLATES_MODAL_KEY":
    break;
    case "GUILD_TEMPLATE":
    break;
    case "GUILD_TEMPLATES":
    break;
    case "HOCKEY":
    break;
    case "invalid_type":
    break;
    case "computeLurkerPermissionsAllowList":
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
    case "FALSE_OPTION_NAME":
    break;
    case "OPTION_NAME_CONTAINS":
    break;
    case "CONTAINS_SELF_HARM_CONTENT":
    break;
    case "SELF_HARM":
    break;
    case "SELF_HARM_CONTENT":
    break;
    case "CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE":
    break;
    case "E2EE_STREAM_VERIFICATION_SHARE_CLICKED":
    break;
    case "CHECKPOINT_PERSONA_NINE_BACKGROUND_OVERLAY":
    break;
    case "NINE":
    break;
    case "OVERLAY_OOP_WELCOME_BACKGROUND_NUX":
    break;
    case "XBOX_URL_BASE":
    break;
    case "_touchState":
    break;
    case "touchState":
    break;
    case "optInChannels":
    break;
    case "optInChannelsEnabled":
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
    case "FadeOutRight":
    break;
    case "http":
    break;
    case "oc":
    break;
    case "oca":
      obj[0] = c4;
      obj[1] = c4;
      obj[2] = c4;
      obj[3] = c4;
      return obj;
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
    case "parseUrl":
    break;
    case "parseUrlencoded":
    break;
    case "encodedBodySize":
    break;
    case "presentTimestamp":
    break;
    case "parseLinks":
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
    case "registerTransportsForEmbeddedPlatform":
    break;
    case "formQuestion":
    break;
    case "QuestionSelectorEnum":
    break;
    case "onSelect":
    break;
    case "numAvailableGuildBoostSlots":
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
    case "isPerformanceEventTiming":
    break;
    case "PerformanceEventTiming":
    break;
    case "PerformanceEventTiming_public":
    break;
    case "publicKey":
    break;
    case "publicKeyFingerprint":
    break;
    case "int":
    break;
    case "intlMessage":
    break;
    case "tl":
    break;
    case "getAppIntentScheme":
    break;
    case "isAnyVoicePanelOpen":
    break;
    case "lkr":
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
    case "REQUIRES_PAYMENT_METHOD":
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
    case "PasskeysSpotIllustration":
    break;
    case "ke":
    break;
    case "isNestedNavigator":
    break;
    default:
  }
});
let closure_9 = { code: "function ButtonHooksNativeTsx1(){const{themedStyles,colors,interpolateColor,pressed}=this.__closure;var _themedStyles$backgro,_themedStyles,_themedStyles$borderC,_themedStyles2;const backgroundColor=(_themedStyles$backgro=(_themedStyles=themedStyles)===null||_themedStyles===void 0?void 0:_themedStyles.backgroundColor)!==null&&_themedStyles$backgro!==void 0?_themedStyles$backgro:[colors.backgroundInactive,colors.backgroundPressed];const borderColor=(_themedStyles$borderC=(_themedStyles2=themedStyles)===null||_themedStyles2===void 0?void 0:_themedStyles2.borderColor)!==null&&_themedStyles$borderC!==void 0?_themedStyles$borderC:[colors.borderInactive,colors.borderPressed];return{backgroundColor:interpolateColor(pressed.get(),[0,1],backgroundColor),borderColor:interpolateColor(pressed.get(),[0,1],borderColor)};}" };
let closure_10 = { code: "function ButtonHooksNativeTsx2(){const{width,scaleAmountInPx,withSpring,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const scale=width.get()>0?(width.get()-scaleAmountInPx)/width.get():1;return{transform:[{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING,'animate-always')}]};}" };
let result = require("set").fileFinishedImporting("design/components/Button/native/ButtonHooks.native.tsx");

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
      const WHITE = memo(712).unsafe_rawColors.WHITE;
      let obj = { base: null, contrastRatio: null };
      obj[0] = WHITE;
      obj[1] = variant(4173).WCAGContrastRatios.HighContrastText;
      const contrastingColor = variant(4173).getContrastingColor(tmp, obj);
      const obj8 = variant(4173);
      const darkenColorResult = variant(4173).darkenColor(contrastingColor, 0.5);
      obj = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj[0] = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj[1] = items1;
      obj[2] = WHITE;
      return obj;
    } else if ("secondary" === tmp45) {
      const obj5 = variant(1363);
      const tmp20 = dependencyMap;
      const isThemeLightResult = variant(1363).isThemeLight(dependencyMap);
      const setColorOpacity2 = variant(4173).setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const tmp24 = variant(4173);
      const obj6 = variant(1363);
      const isThemeLightResult1 = variant(1363).isThemeLight(tmp20);
      const setColorOpacity3 = variant(4173).setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      obj1 = { backgroundColor: null, borderColor: null, color: "Array" };
      items2[1] = setColorOpacity3Result;
      obj1[0] = items2;
      const items3 = [closure_1_4, closure_1_4];
      obj1[1] = items3;
      return obj1;
    } else if ("tertiary" === tmp45) {
      obj = variant(1363);
      const isThemeLightResult2 = obj.isThemeLight(dependencyMap);
      const tmp4 = dependencyMap;
      const setColorOpacity = variant(4173).setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      obj1 = variant(1363);
      const tmp8 = variant(4173);
      let obj2 = variant(4173);
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj2.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj2.setColorOpacity("white", 0.2);
      }
      obj2 = { backgroundColor: null, borderColor: null, color: "Array" };
      items4[1] = darkenColorResult1;
      obj2[0] = items4;
      const items5 = [closure_1_4, closure_1_4];
      obj2[1] = items5;
      return obj2;
    } else {
      return null;
    }
  }, items);
};
export const useForegroundColor = function useForegroundColor(variant) {
  return map.useToken(createCacheKey[variant]);
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
      const WHITE = memo(712).unsafe_rawColors.WHITE;
      let obj = { base: null, contrastRatio: null };
      obj[0] = WHITE;
      obj[1] = variant(4173).WCAGContrastRatios.HighContrastText;
      const contrastingColor = variant(4173).getContrastingColor(tmp, obj);
      const obj8 = variant(4173);
      const darkenColorResult = variant(4173).darkenColor(contrastingColor, 0.5);
      obj = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj[0] = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj[1] = items1;
      obj[2] = WHITE;
      return obj;
    } else if ("secondary" === tmp45) {
      const obj5 = variant(1363);
      const tmp20 = dependencyMap;
      const isThemeLightResult = variant(1363).isThemeLight(dependencyMap);
      const setColorOpacity2 = variant(4173).setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const tmp24 = variant(4173);
      const obj6 = variant(1363);
      const isThemeLightResult1 = variant(1363).isThemeLight(tmp20);
      const setColorOpacity3 = variant(4173).setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      obj1 = { backgroundColor: null, borderColor: null, color: "Array" };
      items2[1] = setColorOpacity3Result;
      obj1[0] = items2;
      const items3 = [closure_1_4, closure_1_4];
      obj1[1] = items3;
      return obj1;
    } else if ("tertiary" === tmp45) {
      obj = variant(1363);
      const isThemeLightResult2 = obj.isThemeLight(dependencyMap);
      const tmp4 = dependencyMap;
      const setColorOpacity = variant(4173).setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      obj1 = variant(1363);
      const tmp8 = variant(4173);
      let obj2 = variant(4173);
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj2.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj2.setColorOpacity("white", 0.2);
      }
      obj2 = { backgroundColor: null, borderColor: null, color: "Array" };
      items4[1] = darkenColorResult1;
      obj2[0] = items4;
      const items5 = [closure_1_4, closure_1_4];
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
      const WHITE = memo(712).unsafe_rawColors.WHITE;
      let obj = { base: null, contrastRatio: null };
      obj[0] = WHITE;
      obj[1] = variant(4173).WCAGContrastRatios.HighContrastText;
      const contrastingColor = variant(4173).getContrastingColor(tmp, obj);
      const obj8 = variant(4173);
      const darkenColorResult = variant(4173).darkenColor(contrastingColor, 0.5);
      obj = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj[0] = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj[1] = items1;
      obj[2] = WHITE;
      return obj;
    } else if ("secondary" === tmp45) {
      const obj5 = variant(1363);
      const tmp20 = dependencyMap;
      const isThemeLightResult = variant(1363).isThemeLight(dependencyMap);
      const setColorOpacity2 = variant(4173).setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const tmp24 = variant(4173);
      const obj6 = variant(1363);
      const isThemeLightResult1 = variant(1363).isThemeLight(tmp20);
      const setColorOpacity3 = variant(4173).setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      obj1 = { backgroundColor: null, borderColor: null, color: "Array" };
      items2[1] = setColorOpacity3Result;
      obj1[0] = items2;
      const items3 = [closure_1_4, closure_1_4];
      obj1[1] = items3;
      return obj1;
    } else if ("tertiary" === tmp45) {
      obj = variant(1363);
      const isThemeLightResult2 = obj.isThemeLight(dependencyMap);
      const tmp4 = dependencyMap;
      const setColorOpacity = variant(4173).setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      obj1 = variant(1363);
      const tmp8 = variant(4173);
      let obj2 = variant(4173);
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj2.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj2.setColorOpacity("white", 0.2);
      }
      obj2 = { backgroundColor: null, borderColor: null, color: "Array" };
      items4[1] = darkenColorResult1;
      obj2[0] = items4;
      const items5 = [closure_1_4, closure_1_4];
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
  let obj = ManaContext;
  const themeContext = obj.useThemeContext();
  const primaryColor = themeContext.primaryColor;
  let memo = primaryColor;
  const theme = themeContext.theme;
  dependencyMap = theme;
  let items = [theme, primaryColor, variant];
  memo = React.useMemo(() => {
    if (null == memo) {
      return null;
    } else if ("primary" === variant) {
      const WHITE = memo(712).unsafe_rawColors.WHITE;
      let obj = { base: null, contrastRatio: null };
      obj[0] = WHITE;
      obj[1] = variant(4173).WCAGContrastRatios.HighContrastText;
      const contrastingColor = variant(4173).getContrastingColor(tmp, obj);
      const obj8 = variant(4173);
      const darkenColorResult = variant(4173).darkenColor(contrastingColor, 0.5);
      obj = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj[0] = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj[1] = items1;
      obj[2] = WHITE;
      return obj;
    } else if ("secondary" === tmp45) {
      const obj5 = variant(1363);
      const tmp20 = dependencyMap;
      const isThemeLightResult = variant(1363).isThemeLight(dependencyMap);
      const setColorOpacity2 = variant(4173).setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const tmp24 = variant(4173);
      const obj6 = variant(1363);
      const isThemeLightResult1 = variant(1363).isThemeLight(tmp20);
      const setColorOpacity3 = variant(4173).setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      obj1 = { backgroundColor: null, borderColor: null, color: "Array" };
      items2[1] = setColorOpacity3Result;
      obj1[0] = items2;
      const items3 = [closure_1_4, closure_1_4];
      obj1[1] = items3;
      return obj1;
    } else if ("tertiary" === tmp45) {
      obj = variant(1363);
      const isThemeLightResult2 = obj.isThemeLight(dependencyMap);
      const tmp4 = dependencyMap;
      const setColorOpacity = variant(4173).setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      obj1 = variant(1363);
      const tmp8 = variant(4173);
      let obj2 = variant(4173);
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj2.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj2.setColorOpacity("white", 0.2);
      }
      obj2 = { backgroundColor: null, borderColor: null, color: "Array" };
      items4[1] = darkenColorResult1;
      obj2[0] = items4;
      const items5 = [closure_1_4, closure_1_4];
      obj2[1] = items5;
      return obj2;
    } else {
      return null;
    }
  }, items);
  const tmp3 = styleProperties(variant);
  dependencyMap = tmp3;
  const fn = function s() {
    let backgroundColor;
    if (memo != null) {
      backgroundColor = tmp.backgroundColor;
    }
    if (backgroundColor == null) {
      const items = [, ];
      ({ backgroundInactive: arr[0], backgroundPressed: arr[1] } = dependencyMap);
      backgroundColor = items;
    }
    let borderColor;
    if (memo != null) {
      borderColor = tmp.borderColor;
    }
    if (borderColor == null) {
      const items1 = [, ];
      ({ borderInactive: arr2[0], borderPressed: arr2[1] } = dependencyMap);
      borderColor = items1;
    }
    const obj = { backgroundColor: variant(4186).interpolateColor(variant.get(), [0, 1], backgroundColor), borderColor: null };
    const obj2 = variant(4186);
    obj[1] = variant(4186).interpolateColor(variant.get(), [0, 1], borderColor);
    return obj;
  };
  obj = { themedStyles: memo, colors: tmp3, interpolateColor: require("../../../../modules/reanimated/ReanimatedRexport.tsx").interpolateColor, pressed };
  fn.__closure = obj;
  fn.__workletHash = 2383933325137;
  fn.__initData = closure_9;
  return require("../../../../modules/reanimated/ReanimatedRexport.tsx").useAnimatedStyle(fn);
};
export const useButtonScaleStyles = function useButtonScaleStyles(pressed, width, scaleAmountInPx) {
  const _require = pressed;
  closure_1 = width;
  dependencyMap = scaleAmountInPx;
  let obj = ReanimatedRexport;
  const fn = function n() {
    let obj = sharedValue1;
    num = 1;
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
  obj = { width, scaleAmountInPx, withSpring: require("../../../animation/reanimated/spring/spring.tsx").withSpring, interpolate: require("../../../../modules/reanimated/ReanimatedRexport.tsx").interpolate, pressed, ON_PRESS_SPRING: require("../../../animation/reanimated/spring/springPresets.tsx").ON_PRESS_SPRING };
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
  let obj = sharedValue(4186);
  sharedValue = obj.useSharedValue(0);
  let tmpResult = tmp(4186);
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
  tmpResult = tmp(4186);
  const fn = function n() {
    let obj = sharedValue1;
    num = 1;
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
  obj = { width: sharedValue1, scaleAmountInPx: num, withSpring: tmp(4892).withSpring, interpolate: tmp(4186).interpolate, pressed: sharedValue, ON_PRESS_SPRING: tmp(4896).ON_PRESS_SPRING };
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