// === Module 8601: createWebFileVideoControls ===

// Module 8601 (createWebFileVideoControls)
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c4 = importAllResult;
let closure_6 = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
const memoResult = importAllResult.memo((style) => {
  const visible = style.visible;
  ({ source, controls } = style);
  const merged = Object.assign(style, Object.create(null));
  let first;
  let callback;
  importAllResult = undefined;
  jsx = undefined;
  let ref;
  let mediaPlayerMutedStore;
  let obj = importAllResult;
  const tmp4 = callback(importAllResult.useState(visible(first[3]).PlayerState.UNREADY), 2);
  first = tmp4[0];
  callback = tmp4[1];
  const tmp7 = controls(first[4])(first);
  importAllResult = tmp7;
  const tmp8 = controls(first[4])(visible);
  jsx = tmp8;
  ref = undefined;
  if (controls != null) {
    let props = controls.props;
    if (props != null) {
      ref = props.ref;
    }
  }
  const effect = obj.useEffect(() => {
    const MediaViewerAnalytics = visible(first[5]).MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "file", action: "attempted" });
  }, []);
  props = undefined;
  if (controls != null) {
    props = controls.props;
  }
  const items = [props];
  callback = obj.useCallback((arg0) => {
    const iter = ((arg0) => {
      try {
        const _JSON = JSON;
        return JSON.parse(arg0);
      } catch (err) {
        return {};
      }
    })(arg0);
    const value = iter.value;
    switch (iter.type) {
      case "t":
      break;
      case "to":
      break;
      case "Date":
      break;
      case "TypeError":
      break;
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
      case "category":
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
        callback(visible(first[3]).PlayerState.READY);
      break;
      case "skuId":
      break;
      case "slice":
        if (controls != null) {
          const props5 = controls.props;
          if (props5 != null) {
            props5.onPlayerStateChange(visible(first[3]).PlayerState.VIDEO_CUED);
          }
        }
        callback(visible(first[3]).PlayerState.VIDEO_CUED);
      break;
      case "source":
      break;
      case "split":
        callback(visible(first[3]).PlayerState.ERRORED);
        const MediaViewerAnalytics = visible(first[5]).MediaViewerAnalytics;
        const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "file", action: "errored", error: "unknown" });
      break;
      case "spriteIndex":
      break;
      case "sr":
        if (controls != null) {
          const props4 = controls.props;
          if (props4 != null) {
            props4.onPlayerStateChange(visible(first[3]).PlayerState.ENDED);
          }
        }
        callback(visible(first[3]).PlayerState.ENDED);
      break;
      case "start":
      break;
      case "state":
        if (controls != null) {
          const props3 = controls.props;
          if (props3 != null) {
            props3.onPlayerStateChange(visible(first[3]).PlayerState.PLAYING);
          }
        }
        callback(visible(first[3]).PlayerState.PLAYING);
      break;
      case "status":
      break;
      case "substring_i":
        if (controls != null) {
          const props2 = controls.props;
          if (props2 != null) {
            props2.onPlayerStateChange(visible(first[3]).PlayerState.PAUSED);
          }
        }
        callback(visible(first[3]).PlayerState.PAUSED);
      break;
      case "string":
      break;
      case "style":
        if (controls != null) {
          const props = controls.props;
          if (props != null) {
            props.onPlayerStateChange(visible(first[3]).PlayerState.BUFFERING);
          }
        }
        callback(visible(first[3]).PlayerState.BUFFERING);
      break;
      case "surrogates":
      break;
      case "tag":
        if (null != value) {
          if (controls != null) {
            const props8 = controls.props;
            if (props8 != null) {
              const onDuration = props8.onDuration;
              if (onDuration != null) {
                onDuration(value);
              }
            }
          }
        }
      break;
      case "test":
      break;
      case "then":
        if (null != value) {
          if (controls != null) {
            const props7 = controls.props;
            if (props7 != null) {
              const onDownloadProgress = props7.onDownloadProgress;
              if (onDownloadProgress != null) {
                onDownloadProgress(value);
              }
            }
          }
        }
      break;
      case "title":
      break;
      case "toCharArray$esjava$1":
        if (null != value) {
          if (controls != null) {
            const props6 = controls.props;
            if (props6 != null) {
              const onCurrentSecond = props6.onCurrentSecond;
              if (onCurrentSecond != null) {
                onCurrentSecond(value);
              }
            }
          }
        }
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
      case "guildIconContainer":
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
      case "waitForSession":
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
      case "wkst":
      break;
      case "FeDistantLight":
      break;
      case "LightSource":
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
      case "role_connections_verification_url":
      break;
      case "baseType":
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
      case "GAME_EVENT":
      break;
      case "PX_80":
      break;
      case "_":
      break;
      case "tabContainer":
      break;
      case "tabContainerSelected":
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
      case "sok":
      break;
      case "commandType":
      break;
      case "commandTypes":
      break;
      case "splatter":
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
      case "useExistingPin":
      break;
      case "PinPMove":
      break;
      case "MoveToAudienceButton":
      break;
      case "onAutocompleterResultsChange":
      break;
      case "getApplicationIdFromDetectableId":
      break;
      case "tableId":
      break;
      case "ActionSheetHeaderPressableText":
      break;
      case "Pressable":
      break;
      case "ex":
      break;
      case "ext":
      break;
      case "isSearchLocked":
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
      case "GuidelinesIllocon":
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
      case "ACTIVITY_SESSION_JOIN_FAILED":
      break;
      case "FAIL":
      break;
      case "FAILED":
      break;
      case "FAILED_ACTIVITY_LAUNCH_CHECKS":
      break;
      case "CHECKS_REQUIRED":
      break;
      case "REQUIRED_OPTIONS_FOR_START_PAYMENT":
      break;
      case "PAYMENT_FLOW_SUCCEEDED":
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
      case "isWishlistableCollectiblesProduct":
      break;
      case "INVALID_TYPE":
      break;
      case "PREMIUM_TIER_2_PURPLE":
      break;
      case "PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS":
      break;
      case "PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2":
      break;
      case "Role":
      break;
      case "RoleFlags":
      break;
      case "scrollToQuestId":
      break;
      case "AgeAssuranceMethod":
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
      case "GuildEntityDao":
      break;
      case "EntityDao":
      break;
      case "Dao":
      break;
      case "renderOptions":
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
      case "showHeader":
      break;
      case "showHeaderCloseButton":
      break;
      case "_applyCombination":
      break;
      case "ly":
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
      case "person_walking_facing_right_tone5":
      break;
      case "AvatarLockeExample":
      break;
      case "otherUser":
      break;
      case "otherUserId":
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
      case "canUseMoreQuestOrbs":
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
      case "DynamicallyInjectedByGestureHandler":
      break;
      case "cal":
      break;
      case "all":
      break;
      case "ll":
      break;
      case "discord_protos.discord_experimentation.v1.filter_category":
      break;
      case "_category":
      break;
      case "categoryContainer":
      break;
      case "go":
      break;
      case "ry":
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
      case "hasSocialLayerStorefront":
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
      case "remoteClipId":
      break;
      case "GuildActivityStatusRestrictionDefault":
      break;
      case "GuildActivityStatusRestrictionDefaultV2":
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
      case "toy":
      break;
      case "getDebugState":
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
      case "getConnectedActivityChannelId":
      break;
      case "cr":
      break;
      case "les":
      break;
      case "_buildKeyCodeMapFromKeyMap":
      break;
      case "build":
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
      case "expandEventProperties":
      break;
      case "addRelationship":
      break;
      case "TRAIN_SIMULATOR":
      break;
      case "getCurrentGuildSettings":
      break;
      case "GuildSettingsSubsections":
      break;
      case "sections":
      break;
      case "sectionsContainer":
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
      case "IsSanctionedSimpleUnitIdentifier":
      break;
      case "Identifier":
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
      case "formTitle":
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
      case "updateOwnerId":
      break;
      case "isArrayEqual":
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
      case "internalBinaryRead":
      break;
      case "blond_haired_woman_tone4":
      break;
      case "woman_tone4":
      break;
      case "woman_tone4_beard":
      break;
      case "man_tone4_beard":
      break;
      case "bearded_person_tone4":
      break;
      case "person_tone4_bald":
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
      case "unsubscribeMembers":
      break;
      case "subscribeMembers":
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
      case "internalBinaryWrite":
      break;
      case "GREEN_NEW_58":
      break;
      case "8Hvr3+":
      break;
      case "weekData":
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
      case "InboxSettings":
      break;
      case "jpg":
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
      case "shouldShowBlockedUsers":
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
    }
  }, items);
  mediaPlayerMutedStore = visible(first[6]).useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  const items1 = [ref, visible, tmp8, tmp7, first, mediaPlayerMutedStore];
  const effect1 = obj.useEffect(() => {
    let current;
    if (ref != null) {
      current = tmp.current;
    }
    let tmp3 = null != current;
    if (tmp3) {
      tmp3 = first !== visible(first[3]).PlayerState.UNREADY;
    }
    if (tmp3) {
      current = tmp.current;
      const _JSON = JSON;
      const _HermesInternal = HermesInternal;
      current.injectJavaScript("window.player.muted = " + JSON.stringify(mediaPlayerMutedStore) + "; true;");
      let tmp11 = visible;
      if (visible) {
        tmp11 = closure_4 === visible(first[3]).PlayerState.UNREADY;
      }
      if (tmp11) {
        tmp11 = first === visible(first[3]).PlayerState.READY;
      }
      if (tmp11) {
        const current2 = tmp.current;
        current2.injectJavaScript("window.player.play();  true;");
      }
      let tmp19 = tmp10;
      if (visible) {
        tmp19 = !closure_5;
      }
      if (tmp19) {
        const current3 = tmp.current;
        current3.injectJavaScript("window.player.play();  true;");
      }
      let tmp22 = !tmp10;
      if (!visible) {
        tmp22 = closure_5;
      }
      if (tmp22) {
        const current4 = tmp.current;
        current4.injectJavaScript("window.player.pause(); true;");
      }
    }
  }, items1);
  const combined = "\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"initial-scale=1\">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        inset: 0;\n        width: 100%;\n        height: 100%;\n        background-color: #000;\n        object-fit: contain;\n      }\n    </style>\n    <script>" + "\nfunction onReady() {\n  const player = window.player = document.createElement('video');\n  player.controls = false;\n  player.autoplay = false;\n  player.playsInline = true;\n  player.disablePictureInPicture = true;\n  const addEvent = (name, func) => {\n    player.addEventListener(name, (e) => {\n      window.ReactNativeWebView.postMessage(\n        JSON.stringify({type: name, value: func ? func() : undefined})\n      );\n    });\n  };\n  addEvent('error', () => player.error);\n  addEvent('canplay');\n  addEvent('ended');\n  addEvent('pause');\n  addEvent('play');\n  addEvent('stalled');\n  addEvent('durationchange', () => player.duration);\n  addEvent('timeupdate', () => player.currentTime);\n  addEvent('progress', () => {\n    const ranges = player.buffered;\n    let total = 0;\n    for (let i = 0; i < ranges.length; i++) {\n      total += (ranges.end(i) - ranges.start(i));\n    }\n    return total;\n  });\n  player.src = " + JSON.stringify(source.uri) + ";\n  document.body.appendChild(player);\n  player.load();\n  window.ReactNativeWebView.postMessage(JSON.stringify({type: 'loaded'}));\n}\nwindow.addEventListener('load', onReady);\n" + "</script>\n  </head>\n  <body>\n  </body>\n</html>\n";
  obj = { ref, style: style.style, source: obj, baseURL: ref, playerState: first, onDataReceived: callback, javaScriptEnabled: true, javaScriptCanOpenWindowsAutomatically: true };
  obj = { html: combined, baseUrl: ref };
  const tmp2 = visible;
  const tmp2Result = visible(first[6]);
  const tmp6 = controls;
  const merged1 = Object.assign(merged);
  return jsx(controls(first[3]), { html: combined, baseUrl: ref }, source.uri);
});
let result = require("set").fileFinishedImporting("modules/media_viewer/native/components/MediaModalWebVideoFile.tsx");

export default memoResult;
export const createWebFileVideoControls = function createWebFileVideoControls() {
  const ref = importAllResult.createRef();
  c5 = 0;
  c6 = 0;
  obj = {
    seek(arg0) {
      const current = ref.current;
      if (current != null) {
        const _JSON = JSON;
        const _HermesInternal = HermesInternal;
        current.injectJavaScript("window.player.currentTime = " + JSON.stringify(arg0) + "; true;");
      }
    },
    pause(arg0) {
      const current = ref.current;
      if (current != null) {
        let str = "play";
        if (arg0) {
          str = "pause";
        }
        const _HermesInternal = HermesInternal;
        current.injectJavaScript("window.player." + str + "(); true;");
      }
    },
    useSubscribe(arg0, arg1, arg2) {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_2 = arg2;
      const layoutEffect = React.useLayoutEffect(() => {
        if (closure_0 != null) {
          tmp(closure_4, closure_5);
        }
      }, []);
    },
    props: obj
  };
  obj = {
    ref,
    onPlayerStateChange(arg0) {
      if (closure_1 != null) {
        tmp(arg0 === closure_1_0(closure_1_2[3]).PlayerState.PAUSED || arg0 === closure_1_0(closure_1_2[3]).PlayerState.ENDED);
        const tmp3 = closure_1_0;
        const tmp4 = closure_1_2;
        const tmp5 = arg0 === closure_1_0(closure_1_2[3]).PlayerState.PAUSED || arg0 === closure_1_0(closure_1_2[3]).PlayerState.ENDED;
      }
    },
    onCurrentSecond(arg0) {
      closure_4 = arg0;
      if (closure_0 != null) {
        tmp(closure_4, c5);
      }
    },
    onDuration(arg0) {
      closure_5 = arg0;
      if (closure_0 != null) {
        tmp(c4, closure_5);
      }
      if (closure_5 > 0) {
        if (closure_2 != null) {
          tmp8(tmp7);
        }
      }
    },
    onDownloadProgress(arg0) {
      closure_6 = arg0;
      if (c5 > 0) {
        if (closure_2 != null) {
          tmp4(tmp3);
        }
      }
    }
  };
  return obj;
};