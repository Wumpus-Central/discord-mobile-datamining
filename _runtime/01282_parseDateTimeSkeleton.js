// === Module 1282: parseDateTimeSkeleton ===

// Module 1282 (parseDateTimeSkeleton)
arg5.parseDateTimeSkeleton = undefined;
const re0 = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
arg5.parseDateTimeSkeleton = function parseDateTimeSkeleton(str) {
  const obj = {};
  const replaced = str.replace(obj, (arg0) => {
    let first = arg0[0];
    switch (first) {
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
      case "ks":
      break;
      case "space":
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
      case "getVoiceStateForUser":
      break;
      case "emojiLineHeight":
      break;
      case "$ZodBoolean":
      break;
      case "ZodBoolean":
        first = obj;
        let str19 = "long";
        if (4 !== length) {
          let str20 = "short";
          if (5 === length) {
            str20 = "narrow";
          }
          str19 = str20;
        }
        first.era = str19;
        return "";
      case "B":
      break;
      case "le":
        let str18 = "numeric";
        if (2 === length) {
          str18 = "2-digit";
        }
        obj.year = str18;
        const tmp63 = obj;
      break;
      case "an":
      break;
      case "n":
        let _RangeError8 = RangeError;
        let rangeError = new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
        throw rangeError;
      case "useActionBarPrimaryButton":
      break;
      case "ActionBarPrimaryButton":
        _RangeError8 = RangeError;
        rangeError = new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
        throw rangeError;
      case "ary":
      break;
      case "u":
        _RangeError8 = RangeError;
        rangeError = new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
        throw rangeError;
      case "tt":
      break;
      case "on":
        _RangeError8 = RangeError;
        rangeError = new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
        throw rangeError;
      case "$ZodDate":
      break;
      case "ZodDate":
        let _RangeError7 = RangeError;
        let rangeError1 = new RangeError("`q/Q` (quarter) patterns are not supported");
        throw rangeError1;
      case "D":
      break;
      case "DateParser":
        _RangeError7 = RangeError;
        rangeError1 = new RangeError("`q/Q` (quarter) patterns are not supported");
        throw rangeError1;
      case "at":
      break;
      case "te":
        let diff = length - 1;
        let items = ["numeric", "2-digit", "short", "long", "narrow"];
        obj.month = items[diff];
      break;
      case "serializeDate":
      break;
      case "MarkupParserNodeTypeError":
        diff = length - 1;
        items = ["numeric", "2-digit", "short", "long", "narrow"];
        obj.month = items[diff];
      break;
      case "E":
      break;
      case "Err":
        let _RangeError6 = RangeError;
        let rangeError2 = new RangeError("`w/W` (week) patterns are not supported");
        throw rangeError2;
      case "ro":
      break;
      case "or":
        _RangeError6 = RangeError;
        rangeError2 = new RangeError("`w/W` (week) patterns are not supported");
        throw rangeError2;
      case "_createRenderMask":
      break;
      case "SEMANTIC_ATTRIBUTE_SENTRY_SOURCE":
        obj.day = ["numeric", "2-digit"][length - 1];
      break;
      case "BOT_HTTP_INTERACTIONS":
      break;
      case "H":
        let _RangeError5 = RangeError;
        let rangeError3 = new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
        throw rangeError3;
      case "HT":
      break;
      case "TP":
        _RangeError5 = RangeError;
        rangeError3 = new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
        throw rangeError3;
      case "P":
      break;
      case "INTERACTIONS":
        _RangeError5 = RangeError;
        rangeError3 = new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
        throw rangeError3;
      case "NSFW_SPACE_WARNING_MODAL_CLICKED":
      break;
      case "rm":
        let str12 = "long";
        if (4 !== length) {
          let str13 = "short";
          if (5 === length) {
            str13 = "narrow";
          }
          str12 = str13;
        }
        obj.weekday = str12;
        const tmp39 = obj;
      break;
      case "m":
      break;
      case "me":
        if (length < 4) {
          const _RangeError4 = RangeError;
          const rangeError4 = new RangeError("`e..eee` (weekday) patterns are not supported");
          throw rangeError4;
        } else {
          obj.weekday = ["short", "long", "narrow", "short"][length - 4];
        }
      break;
      case "mes":
        const rangeError5 = new first.RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
        throw rangeError5;
      case "I":
        if (length < 4) {
          const _RangeError3 = RangeError;
          const rangeError6 = new RangeError("`c..ccc` (weekday) patterns are not supported");
          throw rangeError6;
        } else {
          obj.weekday = ["short", "long", "narrow", "short"][length - 4];
        }
      break;
      case "InternalCard":
      break;
      case "ter":
        obj.hour12 = true;
      break;
      case "na":
      break;
      case "al":
        let _RangeError2 = RangeError;
        let rangeError7 = new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
        throw rangeError7;
      case "CardStyleInterpolators":
      break;
      case "pol":
        _RangeError2 = RangeError;
        rangeError7 = new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
        throw rangeError7;
      case "ImageLockIcon":
      break;
      case "getSpotifyResourceType":
        obj.hourCycle = "h12";
        obj.hour = ["numeric", "2-digit"][length - 1];
      break;
      case "SpotifyResourceTypes":
      break;
      case "sourceType":
        obj.hourCycle = "h23";
        obj.hour = ["numeric", "2-digit"][length - 1];
      break;
      case "scalar":
      break;
      case "scalarInfo":
        obj.hourCycle = "h11";
        obj.hour = ["numeric", "2-digit"][length - 1];
      break;
      case "forcedTheme":
      break;
      case "getChannelIcon":
        obj.hourCycle = "h24";
        obj.hour = ["numeric", "2-digit"][length - 1];
      break;
      case "getChannelIconComponent":
      break;
      case "getChannelIconComponentWithGuild":
        let _RangeError = RangeError;
        let rangeError8 = new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
        throw rangeError8;
      case "co":
      break;
      case "C":
        _RangeError = RangeError;
        rangeError8 = new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
        throw rangeError8;
      case "Component":
      break;
      case "om":
        _RangeError = RangeError;
        rangeError8 = new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
        throw rangeError8;
      case "mp":
      break;
      case "po":
        obj.minute = ["numeric", "2-digit"][length - 1];
      break;
      case "pon":
      break;
      case "one":
        obj.second = ["numeric", "2-digit"][length - 1];
      break;
      case "ne":
      break;
      case "en":
        let rangeError9 = new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
        throw rangeError9;
      case "useVirtualViewLogging":
      break;
      case "getLottieType":
        rangeError9 = new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
        throw rangeError9;
      case "LottieType":
      break;
      case "USE_APP_COMMAND":
        let str2 = "long";
        if (length < 4) {
          str2 = "short";
        }
        obj.timeZoneName = str2;
        const tmp5 = obj;
      break;
      case "ANDROID_NOTIFICATION_LIGHTS":
      break;
      case "L":
        first = globalThis;
      break;
      case "LI":
      break;
      case "SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS":
        first = globalThis;
      break;
      case "REQUIRE_SAFETY_FLOWS":
      break;
      case "SAFETY_FLOWS":
        first = globalThis;
      break;
      case "SAFETY_FLOWS_MODAL_KEY":
      break;
      case "$ZodCheckMaxLength":
        first = globalThis;
      break;
      case "kMaxLength":
      break;
      case "eng":
        first = globalThis;
      break;
      case "ng":
      break;
      case "el":
        first = globalThis;
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
      case "getAppealClassificationId":
      break;
      case "TableSwitchRow":
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
      case "shooting_star":
      break;
      case "starIconUnselected":
      break;
      case "selectedChannel":
      break;
      case "selectedChannelId":
      break;
      case "selectedChannelIds":
      break;
      case "navBar":
      break;
      case "VIDEO_MODAL_ICON_END_CARD":
      break;
      case "PX_80":
      break;
      case "_":
      break;
      case "disabledUntil":
      break;
      case "setVoiceMessageRecordingId":
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
      case "_findRegion":
      break;
      case "onChannelPress":
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
      case "verification_request_id":
      break;
      case "$ZodSet":
      break;
      case "ZodSet":
      break;
      case "S":
      break;
      case "et":
      break;
      case "allowUIToHandleError":
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
      case "blurTextInput":
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
      case "QUEST_BAR_VIDEO_QUEST_PREVIEW":
      break;
      case "QUEST_PREVIEW_TOOL":
      break;
      case "QUEST_PREVIEW_TOOL_2":
      break;
      case "filterAttribute":
        first = globalThis;
      break;
      case "from_user_id":
      break;
      case "ActionSheetHeaderPressableText":
        first = globalThis;
      break;
      case "Pressable":
      break;
      case "ex":
      break;
      case "ext":
      break;
      case "isImage":
      break;
      case "isImageCaptureIntentSupported":
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
        first = globalThis;
      break;
      case "ge":
      break;
      case "ger":
        first = globalThis;
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
      case "useNativeGiftContext":
      break;
      case "NativeGiftContextProvider":
      break;
      case "removeAnalyticsToken":
      break;
      case "enableImagePrefetchingAndroid":
      break;
      case "fetching":
      break;
      case "toAST":
      break;
      case "STEAM_ITEM_COUNT_DOTA2":
      break;
      case "Role":
      break;
      case "RoleFlags":
      break;
      case "scrollToLocation":
      break;
      case "accessibleDismiss":
      break;
      case "accessibleDismissStyle":
      break;
      case "ble":
      break;
      case "leg_tone1":
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
      case "couple_with_heart_person_person_medium_dark_skin_tone_medium_skin_tone":
      break;
      case "newPostCount":
      break;
      case "CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT":
      break;
      case "DEFAULT_CATEGORY_ROWS":
      break;
      case "WSM":
      break;
      case "SMALL_BUTTON_PADDING":
      break;
      case "GUILD_EVENT_USER_COUNTS":
      break;
      case "SvgUri":
      break;
      case "MANAGE_NICKNAMES":
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
      case "GuildEntityDao":
      break;
      case "EntityDao":
      break;
      case "Dao":
      break;
      case "assertInt32":
      break;
      case "merged":
      break;
      case "merged_members":
      break;
      case "_members":
      break;
      case "_membersMap":
      break;
      case "members":
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
      case "showGuardCallAlert":
      break;
      case "Backspace":
      break;
      case "BackspaceIcon":
      break;
      case "_applyCombination":
      break;
      case "ly":
      break;
      case "USER_PROFILE_WIDGETS":
      break;
      case "USER_PROFILE_WIDGETS_BOARD_MOBILE_EDIT_NOTICE":
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
      case "GUILD_GETTING_STARTED":
      break;
      case "getOriginApplicationId":
      break;
      case "FormSubmitErrorType":
      break;
      case "person_walking_facing_right_tone4":
      break;
      case "numTimesDismissed":
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
      case "closeContainer":
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
      case "premiumSubscriberCount":
      break;
      case "TK":
      break;
      case "TKL":
      break;
      case "KLOhbO":
      break;
      case "OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED":
      break;
      case "SEND_REACT_AVATAR":
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
      case "audioDevice":
      break;
      case "audioDeviceGuid":
      break;
      case "GuidePreviousDay":
      break;
      case "valueOf":
      break;
      case "setCommonResponseAttributes":
      break;
      case "activityParticipantIdToApplicationId":
      break;
      case "disableGuildSelect":
      break;
      case "GuildSelectDefaultIcon":
      break;
      case "concatSettings":
      break;
      case "subscriptionStatus":
      break;
      case "useCanViewArchivedPosts":
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
      case "QUICKSWITCHER_RESULT_SELECTED":
      break;
      case "generateTraceId":
      break;
      case "cr":
      break;
      case "les":
      break;
      case "createAnimatedThemedStyles":
      break;
      case "supportsFeature":
      break;
      case "recomputeViewableItems":
      break;
      case "computeViewableItems":
      break;
      case "_$esjava$current":
      break;
      case "cu":
      break;
      case "currentApp":
      break;
      case "currentAppIcon":
      break;
      case "containerIOS":
      break;
      case "IOS_TWO_FA_ADD_SMS":
      break;
      case "message_type":
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
      case "_formatPaymentResourceData":
      break;
      case "define":
      break;
      case "efi":
      break;
      case "fi":
      break;
      case "fin":
      break;
      case "setIncomingVideoEnabled":
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
      case "shouldTriggerResponderTransferOnScrollAndroid":
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
      case "isForGroupSetupModal":
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
      case "user_position":
      break;
      case "positionThread":
      break;
      case "onThreadCreated":
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
      case "getChannelThreadsVersion":
      break;
      case "onTapSafetyPolicyNoticeEmbed":
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
      case "flag_fi":
      break;
      case "_fill":
      break;
      case "_fillMissedErrors":
      break;
      case "shouldShowBlurredThumbnailImage":
      break;
      case "getAverageRenderTime":
      break;
      case "useScaledRowHeightData":
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
      case "addVerification":
      break;
      case "VerificationCriteria":
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
      case "SafetyWarningTypes":
      break;
      case "QUEST_CONTENT_CLICKED":
      break;
      case "QUEST_ENROLLMENT_BLOCKED_BOTTOM_SHEET":
      break;
      case "app_hardware_acceleration_enabled":
      break;
      case "_enabled":
      break;
      case "_enabledPaymentMethods":
      break;
      case "enable":
      break;
      case "shouldShowAddMediaToOriginalPostModal":
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
      case "StreamingTier10SmallBadge":
      break;
      case "EntitlementTenantFulfillmentStatus":
      break;
      case "ill":
      break;
      case "__findAnimatedPropsNodes":
      break;
      case "GUILD_MOD_DASH_MEMBER_SAFETY":
      break;
      case "MEMBER_SAFETY":
      break;
      case "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS":
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
      case "IMAGE_ONLY_ANSWERS":
      break;
      case "isCreatorMonetizationEnabledGuild":
      break;
      case "getGuildBannerURL":
      break;
      case "GIFTS":
      break;
      case "STICKY_HEADER_MARGIN_BOTTOM":
      break;
      case "MASTERPASS_POPUP_CLOSED":
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
      case "touchableHandleResponderTerminationRequest":
      break;
      case "onRequestSend":
      break;
      case "getChannelA11yHint":
      break;
      case "Channel":
      break;
      case "interpolationIndex":
      break;
      case "exposureType":
      break;
      case "allowDevLinks":
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
      break;
      case "PremiumSubscriptionSKUToPremiumType":
      break;
      case "PremiumTypeOrder":
      break;
      case "constraints":
      break;
      case "+TSRGD":
      break;
      case "SR":
      break;
      case "GD":
      break;
    }
  });
  return obj;
};