// discord_app/design/components/TableRow/native/TableRowIcon.native.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { IconSizes } from "../../../void/Icon/native/Icon.tsx";

const require = arg1;
let closure_3 = ["color"];
createCacheKey = { container: null, default: null, statusOnline: null, statusIdle: null, statusDND: null, statusOffline: null, xbox: null, playstation: null, danger: null, secondary: null, translucent: null };
createCacheKey = { width: require("Themes").modules.mobile.TABLE_ROW_ICON_SIZE, height: require("Themes").modules.mobile.TABLE_ROW_ICON_SIZE, justifyContent: "center", alignItems: "center", borderRadius: require("Themes").radii.lg };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: require("Themes").colors.TABLEROW_ICON_COLOR_DEFAULT };
const obj1 = { color: require("Themes").colors.TABLEROW_ICON_COLOR_DEFAULT };
createCacheKey[2] = { color: require("Themes").colors.TEXT_STATUS_ONLINE };
const obj2 = { color: require("Themes").colors.TEXT_STATUS_ONLINE };
createCacheKey[3] = { color: require("Themes").colors.TEXT_STATUS_IDLE };
const obj3 = { color: require("Themes").colors.TEXT_STATUS_IDLE };
createCacheKey[4] = { color: require("Themes").colors.TEXT_STATUS_DND };
const obj4 = { color: require("Themes").colors.TEXT_STATUS_DND };
createCacheKey[5] = { color: require("Themes").colors.TEXT_STATUS_OFFLINE };
const obj5 = { color: require("Themes").colors.TEXT_STATUS_OFFLINE };
createCacheKey[6] = { backgroundColor: require("Themes").unsafe_rawColors.PLATFORM_XBOX, color: require("Themes").colors.WHITE };
const obj6 = { backgroundColor: require("Themes").unsafe_rawColors.PLATFORM_XBOX, color: require("Themes").colors.WHITE };
createCacheKey[7] = { backgroundColor: require("Themes").unsafe_rawColors.PLATFORM_PLAYSTATION, color: require("Themes").colors.WHITE };
const obj7 = { backgroundColor: require("Themes").unsafe_rawColors.PLATFORM_PLAYSTATION, color: require("Themes").colors.WHITE };
createCacheKey[8] = { color: require("Themes").colors.TEXT_FEEDBACK_CRITICAL };
const obj8 = { color: require("Themes").colors.TEXT_FEEDBACK_CRITICAL };
createCacheKey[9] = { color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
const obj9 = { color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[10] = { color: require("Themes").colors.WHITE };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj10 = { color: require("Themes").colors.WHITE };
const result = require("get ActivityIndicator").fileFinishedImporting("design/components/TableRow/native/TableRowIcon.native.tsx");

export const TableRowIcon = function TableRowIcon(arg0) {
  let IconComponent;
  let source;
  let variant;
  ({ source, IconComponent, variant } = arg0);
  if (variant === undefined) {
    variant = "default";
  }
  const tmp = createCacheKey();
  switch (variant) {
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
      let translucent = tmp.default;
      const color = translucent.color;
      if ("default" === variant) {
        let REFRESH_SMALL_16 = IconSizes.IconSizes.MEDIUM;
      } else {
        REFRESH_SMALL_16 = IconSizes.IconSizes.REFRESH_SMALL_16;
      }
      let str3 = "md";
      if ("default" !== variant) {
        str3 = "md";
        if ("danger" !== variant) {
          str3 = "md";
          if ("secondary" !== variant) {
            str3 = "md";
            if ("translucent" !== variant) {
              str3 = "sm";
            }
          }
        }
      }
      if (null == source) {
        if (null == IconComponent) {
          return null;
        }
      }
      let obj = { style: null, children: null };
      const items = [tmp.container, callback(translucent, closure_3)];
      obj[0] = items;
      if (null != IconComponent) {
        obj = { size: null, color: null };
        obj[0] = str3;
        obj[1] = color;
        let tmp11Result = tmp11(IconComponent, obj);
      } else {
        obj = { color: null, source: null, size: null };
        obj[0] = color;
        obj[1] = source;
        obj[2] = REFRESH_SMALL_16;
        tmp11Result = tmp11(IconSizes, obj);
      }
      obj[1] = tmp11Result;
      tmp11Result = tmp11(View, obj);
      const tmp12 = View;
      const tmp4 = callback(translucent, closure_3);
    break;
    case "create":
    break;
    case "createStyles":
      translucent = tmp.statusOnline;
    break;
    case "ty":
    break;
    case "current":
      translucent = tmp.statusIdle;
    break;
    case "cursor":
    break;
    case "data":
      translucent = tmp.statusDND;
    break;
    case "ddd":
    break;
    case "default":
      translucent = tmp.statusOffline;
    break;
    case "defineProperty":
    break;
    case "op":
      translucent = tmp.xbox;
    break;
    case "delete":
    break;
    case "description":
      translucent = tmp.playstation;
    break;
    case "ip":
    break;
    case "disabled":
      translucent = tmp.danger;
    break;
    case "sa":
    break;
    case "dispatch":
      translucent = tmp.secondary;
    break;
    case "displayName":
    break;
    case "diversity":
      translucent = tmp.translucent;
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
    case "getWebViewProxy":
    break;
    case "xyYt8A":
    break;
    case "ACTIVITIES_HOME":
    break;
    case "HOME":
    break;
    case "HOME_DRAWER_GUILD_CLICKED":
    break;
    case "enforcedHeight":
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
    case "STREAM_ON_DESKTOP":
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
    case "localeCompare":
    break;
    case "parentLocale":
    break;
    case "addPerformanceInstrumentationHandler":
    break;
    case "shopping_bags":
    break;
    case "instrumentStateGraphCompile":
    break;
    case "pile_of_poo":
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
    case "REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE":
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
    case "getAppTitle":
    break;
    case "$ZodMap":
    break;
    case "ZodMap":
    break;
    case "M":
    break;
    case "ap":
    break;
    case "floralwhite":
    break;
    case "white_check_mark":
    break;
    case "markVersionedDismissibleContentAsDismissed":
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
    case "GUILD_SOUNDBOARD_SOUND_PLAY_START":
    break;
    case "RTC_CONNECTION_PLATFORM":
    break;
    case "ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED":
    break;
    case "PX_80":
    break;
    case "_":
    break;
    case "sourcePid":
    break;
    case "AUTO_MODERATION_REMOVE_REGEX_PATTERNS":
    break;
  }
};