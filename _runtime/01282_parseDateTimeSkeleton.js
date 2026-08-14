// _runtime/01282_parseDateTimeSkeleton.js
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
      case "getWindowOpen":
      break;
      case "numEvents":
      break;
      case "queueClass":
      break;
      case "mapToObject":
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
      case "ObjectData Preview File Format":
      break;
      case "isExtensionAnimated":
        let str18 = "numeric";
        if (2 === length) {
          str18 = "2-digit";
        }
        obj.year = str18;
        const tmp63 = obj;
      break;
      case "addMembersContainer":
      break;
      case "r_postlude$esjava$0":
        let _RangeError7 = RangeError;
        let rangeError = new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
        throw rangeError;
      case "enforcedHeight":
      break;
      case "$ZodBoolean":
        _RangeError7 = RangeError;
        rangeError = new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
        throw rangeError;
      case "ZodBoolean":
      break;
      case "B":
        _RangeError7 = RangeError;
        rangeError = new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
        throw rangeError;
      case "le":
      break;
      case "an":
        _RangeError7 = RangeError;
        rangeError = new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
        throw rangeError;
      case "n":
      break;
      case "useActionBarPrimaryButton":
        let _RangeError6 = RangeError;
        let rangeError1 = new RangeError("`q/Q` (quarter) patterns are not supported");
        throw rangeError1;
      case "ActionBarPrimaryButton":
      break;
      case "ary":
        _RangeError6 = RangeError;
        rangeError1 = new RangeError("`q/Q` (quarter) patterns are not supported");
        throw rangeError1;
      case "u":
      break;
      case "tt":
        let diff = length - 1;
        let items = ["numeric", "2-digit", "short", "long", "narrow"];
        obj.month = items[diff];
      break;
      case "on":
        tmp19.hour = ["numeric", "2-digit"][length - 1];
      break;
      case "$ZodDate":
        diff = length - 1;
        items = ["numeric", "2-digit", "short", "long", "narrow"];
        obj.month = items[diff];
      break;
      case "ZodDate":
      break;
      case "D":
        let _RangeError5 = RangeError;
        let rangeError2 = new RangeError("`w/W` (week) patterns are not supported");
        throw rangeError2;
      case "DateParser":
      break;
      case "at":
        _RangeError5 = RangeError;
        rangeError2 = new RangeError("`w/W` (week) patterns are not supported");
        throw rangeError2;
      case "te":
      break;
      case "serializeEnd":
        obj.day = ["numeric", "2-digit"][length - 1];
      break;
      case "MarkupParserNodeTypeError":
      break;
      case "E":
        let _RangeError4 = RangeError;
        let rangeError3 = new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
        throw rangeError3;
      case "Err":
      break;
      case "ro":
        _RangeError4 = RangeError;
        rangeError3 = new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
        throw rangeError3;
      case "or":
      break;
      case "SEMANTIC_ATTRIBUTE_SENTRY_SOURCE":
        _RangeError4 = RangeError;
        rangeError3 = new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
        throw rangeError3;
      case "BOT_HTTP_INTERACTIONS":
      break;
      case "H":
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
      case "HT":
      break;
      case "TP":
        if (length < 4) {
          first = globalThis;
          const rangeError4 = new first.RangeError("`e..eee` (weekday) patterns are not supported");
          throw rangeError4;
        } else {
          obj.weekday = ["short", "long", "narrow", "short"][length - 4];
        }
      break;
      case "P":
        const rangeError5 = new first.RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
        throw rangeError5;
      case "INTERACTIONS":
        if (length < 4) {
          const _RangeError3 = RangeError;
          const rangeError6 = new RangeError("`c..ccc` (weekday) patterns are not supported");
          throw rangeError6;
        } else {
          obj.weekday = ["short", "long", "narrow", "short"][length - 4];
        }
      break;
      case "NSFW_SPACE_WARNING_MODAL_CLICKED":
      break;
      case "rm":
        obj.hour12 = true;
      break;
      case "m":
      break;
      case "me":
        let _RangeError2 = RangeError;
        let rangeError7 = new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
        throw rangeError7;
      case "mes":
      break;
      case "I":
        _RangeError2 = RangeError;
        rangeError7 = new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
        throw rangeError7;
      case "InternalCard":
      break;
      case "ter":
        obj.hourCycle = "h12";
        let diff1 = length - 1;
        let items1 = ["numeric", "2-digit"];
        obj.hour = items1[diff1];
      break;
      case "na":
      break;
      case "al":
        obj.hourCycle = "h23";
      break;
      case "CardA11yWrapper":
      break;
      case "perGuildMaxCount":
        obj.hourCycle = "h11";
        obj.hour = ["numeric", "2-digit"][length - 1];
      break;
      case "hasSameRoleAsUsername":
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
      case "loadIfNecessary":
      break;
      case "USE_APP_COMMAND":
        rangeError9 = new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
        throw rangeError9;
      case "ANDROID_NOTIFICATION_LIGHTS":
      break;
      case "L":
        let str2 = "long";
        if (length < 4) {
          str2 = "short";
        }
        obj.timeZoneName = str2;
        const tmp5 = obj;
      break;
      case "LI":
      break;
      case "SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS":
        first = globalThis;
      break;
      case "REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE":
        obj.hourCycle = "h12";
        diff1 = length - 1;
        items1 = ["numeric", "2-digit"];
        obj.hour = items1[diff1];
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
        first = globalThis;
      break;
      case "limited":
      break;
      case "limitedTimeBadge":
        first = globalThis;
      break;
      case "mi":
      break;
      case "mit":
      break;
      case "getAppState":
      break;
      case "$ZodMap":
      break;
      case "ZodMap":
      break;
      case "M":
      break;
      case "ap":
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
      case "getClipsSentryDirSync":
      break;
      case "POPULAR_APPLICATION_COMMAND_CLICKED":
      break;
      case "PX_80":
      break;
      case "_":
      break;
      case "firstMessages":
      break;
      case "spatialAudio":
      break;
      case "spatialAudioEnabled":
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
      case "heavy_plus_sign":
      break;
      case "plus":
      break;
      case "always":
      break;
      case "alwaysBounceHorizontal":
      break;
      case "HorizontalScrollingDirection":
      break;
      case "onAgree":
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
      case "QUEST_BAR_V2":
      break;
      case "resolutionHeight":
      break;
      case "getRemoteSessionId":
      break;
      case "generateSessionFromPid":
      break;
      case "ActionSheetHeaderPressableText":
      break;
      case "Pressable":
      break;
      case "ex":
      break;
      case "ext":
      break;
      case "isModalSupported":
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
        first = globalThis;
      break;
      case "pe":
      break;
      case "maxDynamicContentSize":
        first = globalThis;
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
      case "NitroEmeraldBadgeLargeBadge":
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
        first = globalThis;
      break;
      case "Hash":
      break;
      case "sh":
        first = globalThis;
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
      case "enableStallTracking":
      break;
      case "getHasKnownStaleData":
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
      case "joinability":
      break;
      case "PLATFORM_STEAM":
      break;
      case "STEAM":
      break;
      case "STEAM_GAME_COUNT":
      break;
      case "QUEST_BAR_VIDEO_QUEST_PREVIEW":
      break;
      case "QUEST_PREVIEW_TOOL":
      break;
      case "QUEST_PREVIEW_TOOL_2":
      break;
      case "Role":
      break;
      case "RoleFlags":
      break;
      case "scrollToQuestId":
      break;
      case "paymentGateway":
      break;
      case "paymentGatewayName":
      break;
      case "authorName":
      break;
      case "memoizedImageSource":
      break;
      case "accessibleDismiss":
      break;
      case "accessibleDismissStyle":
      break;
      case "ble":
      break;
      case "leg_tone4":
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
      case "GuildEntityDao":
      break;
      case "EntityDao":
      break;
      case "Dao":
      break;
      case "useSoundmojiEmojiPickerSectionExperiment":
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
      case "showGenericGuildProfileUpdateFailureToast":
      break;
      case "APP_DMS_QUICK_LAUNCHER_IMPRESSION":
      break;
      case "IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED":
      break;
      case "WISHLIST_BANNER":
      break;
      case "statusSuccess":
      break;
      case "contentIds":
      break;
      case "subtotal":
      break;
      case "totalBitrate":
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
      case "ACTIVITY_LAUNCH_UNKNOWN_GUILD":
      break;
      case "UNKNOWN_GUILD":
      break;
      case "GUILD_ACTION_CREATE_CHANNEL_CARD":
      break;
      case "CARD_BORDER_DEFAULT":
      break;
      case "DEFAULT_APPEARS_ON_INDEX":
      break;
      case "FormSubmitErrorType":
      break;
      case "person_walking_facing_right_tone4":
      break;
      case "man_dancing_tone2":
      break;
      case "commandsByActiveSection":
      break;
      case "onMediaAttachmentPlaybackStarted":
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
      case "product_sku_ids":
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
      case "cardImageAssetContainer":
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
      case "orbPrice":
      break;
      case "orbPriceAmount":
      break;
      case "kiss_woman_man_medium_dark_skin_tone_medium_light_skin_tone":
      break;
      case "_updateHighlightMap":
      break;
      case "applicationTopWrapperScrollView":
      break;
      case "onTop":
      break;
      case "wMWyci":
      break;
      case "ix8XIj":
      break;
      case "inputSearchIcon":
      break;
      case "contentRow":
      break;
      case "withAlphabeticalSections":
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
      case "subscriptionPreview":
      break;
      case "view_ad_request_time":
      break;
      case "timeToDisplayIntegration":
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
      case "gaz":
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
      case "withArrow":
      break;
      case "popoutCheckIcon":
      break;
      case "convertChannelOverridesToMap":
      break;
      case "application_status":
      break;
      case "statusBackground":
      break;
      case "AccountAgeTier10LargeBadge":
      break;
      case "cou":
      break;
      case "Badge":
      break;
      case "applicationBot":
      break;
      case "getMentionChannelIds":
      break;
      case "keyboardDismissMode":
      break;
      case "department_store":
      break;
      case "_storeSecureFrameTransitionData":
      break;
      case "onDataChange":
      break;
      case "getApplicationIdFromDetectableId":
      break;
      case "tableId":
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
      case "containerForFiveButtonLayout":
      break;
      case "onLayoutChange":
      break;
      case "getAsciiAt":
      break;
      case "sci":
      break;
      case "trackLcpAsStandaloneSpan":
      break;
      case "enableZlibStreamSupport":
      break;
      case "wrapperStyle":
      break;
      case "wrapperStyles":
      break;
      case "gru":
      break;
      case "kangaroo":
      break;
      case "rootProvider":
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
      case "SETTINGS_SPAM":
      break;
      case "AMD_VAAPI":
      break;
      case "VAAPI":
      break;
      case "API":
      break;
      case "API_ENDPOINT":
      break;
      case "POINT_AND_CLICK":
      break;
      case "generateChannelStageSection":
      break;
      case "onTapGameIcon":
      break;
      case "GameIconImageSize":
      break;
      case "ImageSizes":
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
      case "lce":
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
      case "shouldSuppressFetch":
      break;
      case "nonChannelContainer":
      break;
      case "kiss_man_man_dark_skin_tone_medium_skin_tone":
      break;
      case "ctaLabel":
      break;
      case "ctaLabelLocalized":
      break;
      case "dispatchToSubscriptions":
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
      case "hideReportModal":
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
      case "channel_overrides":
      break;
      case "overrides":
      break;
      case "overridesFormatted":
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
      case "userCode":
      break;
      case "userCodeData":
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
      case "PremiumMarketingComponentProperties":
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
      case "app_hardware_acceleration_enabled":
      break;
      case "_enabled":
      break;
      case "_enabledPaymentMethods":
      break;
      case "enable":
      break;
      case "shouldRun":
      break;
      case "unbanUser":
      break;
      case "banUser":
      break;
      case "canAccessSettings":
      break;
      case "getEmbeddedActivityParticipantAvatarUris":
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
      case "handleTextMessageFailed":
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
      case "destructiveButtonIndex":
      break;
      case "expecting_woman_tone2":
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
      case "StreamingTier7LargeBadge":
      break;
      case "beforeSendSpan":
      break;
      case "EntitlementTenantFulfillmentStatus":
      break;
      case "ill":
      break;
      case "__findAnimatedPropsNodes":
      break;
      case "destructiveIcon":
      break;
      case "containerInfo":
      break;
      case "footerSafeAreaContainer":
      break;
      case "MLS_PAIRWISE_FINGERPRINTS":
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
      case "USER_LOGIN":
      break;
      case "USER_LOGIN_FLOW":
      break;
      case "WANT_TO_PLAY_GAMES":
      break;
      case "DEFAULT_PIP_POSITION":
      break;
      case "DELETED":
      break;
      case "DELETED_ENTITY_IDS":
      break;
      case "SHARE_SHEET_PRESENT_DELAY_MS":
      break;
      case "alternativeSkuIds":
      break;
      case "showDisabled":
      break;
      case "ZcgDJX":
      break;
      case "SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE":
      break;
      case "fo":
      break;
      case "for":
      break;
      case "forEachChannel":
      break;
      case "ga":
      break;
      case "gaps":
      break;
      case "BeakerIllocon":
      break;
      case "IncrementableMediaViewerActions":
      break;
      case "closeSuspendedUser":
      break;
      case "getChannelA11yHint":
      break;
      case "Channel":
      break;
      case "interpretNumericEntities":
      break;
      case "_workCallbackFn":
      break;
      case "wOr6hB":
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
      case "StreamQualities":
      break;
      case "StreamQualitiesToPremiumType":
      break;
      case "PremiumTypeToActivePremiumSubscriptionSKU":
      break;
    }
  });
  return obj;
};