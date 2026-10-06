// === Module 11204: LegacyUserProfileConnections ===

// Module 11204 (LegacyUserProfileConnections)
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import FormConstants from "FormConstants" /* 1192 */;
import ToastUtils from "ToastUtils" /* 4573 */;
import HapticUtils from "HapticUtils" /* 4861 */;
import Text_Text from "Text/Text" /* 4892 */;
import PlatformsDefault from "Platforms" /* 5449 */;
import Constants2 from "Constants" /* 6686 */;
import ClipboardUtils from "ClipboardUtils" /* 6695 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 8057 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import UserRecord from "UserRecord" /* 1391 */;
import StreamerModeStore from "StreamerModeStore" /* 4729 */;
import UserProfileStore from "UserProfileStore" /* 7124 */;
import Constants from "Constants" /* 1085 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, copyResult, dependencyMap, handleClickResult, importDefault, locale, obj1, tmp3, user;

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_4;
let hasOwnProperty;
let items;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
let size1;
let unpackModuleId;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ AnalyticEvents: c10, PlatformTypes: unpackModuleId, ThemeTypes: closure_12 } = Constants);
const FORM_ROW_VERTICAL_PADDING = FormConstants.FORM_ROW_VERTICAL_PADDING;
const MetadataFields = Constants2.MetadataFields;
let Fragment = Fragment_mod;
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { connectedAccountContainer: obj2, connectedAccount: { flexDirection: "row", alignItems: "center" }, connectedAccountNameContainer: { flex: 1, marginLeft: 8 }, connectedAccountName: { flexDirection: "row", alignItems: "center" }, connectedAccountNameText: obj3, connectedAccountNameCreatedAtText: obj4, connectedAccountOpenLink: size, connectedAccountOpenHide: size1, verifiedCheckContainer: { marginLeft: 4, height: 16, width: 16 }, verifiedCheck: { position: "absolute", left: 0, top: 0 }, connectedAccountChildren: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", overflow: "hidden" }, metadataItem: obj5, appConnectionNameContainer: { flex: 1, flexDirection: "row", alignItems: "center", marginTop: 4 }, connectedAccountPoweredByContainer: obj6, connectedAccountPoweredByAvatar: { marginRight: 4 }, connectedAccountPoweredByText: { marginTop: -4, alignItems: "center", flexDirection: "row" } };
obj2 = { paddingHorizontal: 10, paddingVertical: FORM_ROW_VERTICAL_PADDING / 2 };
obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
createStyles = createStyles.createStyles;
obj4 = { color: nativeDefault.colors.TEXT_SUBTLE };
size = { height: 24, width: 24, transform: items, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
items = [{ rotate: "135deg" }];
size1 = { alignSelf: "flex-start", margin: 4, height: 16, width: 16, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj5 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj6 = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: 8, paddingVertical: 4, marginTop: 12 };
let closure_17 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((account) => {
  let closure_2;
  let color;
  let showInvisibleIcon;
  let showMetadata;
  let style;
  let theme;
  let userId;
  const tmp = account;
  let obj = account(576);
  const cResult = obj.c(62);
  account = account.account;
  ({ theme, userId } = account);
  ({ style, showMetadata, showInvisibleIcon } = account);
  locale = account.locale;
  if (null == showMetadata) {
    showMetadata = true;
  }
  const tmp4 = closure_17();
  let metadata = account.metadata;
  if (metadata == null) {
    metadata = {};
  }
  if (showMetadata) {
    const tmpResult = tmp(6685);
    const createdAtDate = tmpResult.getCreatedAtDate(metadata[MetadataFields.CREATED_AT], locale);
  }
  if (showMetadata) {
    const type = account.type;
    if (constants.REDDIT === type) {
      const tmpResult11 = tmp(11205);
      let redditMetadataItems = tmpResult11.generateRedditMetadataItems(metadata, tmp4.metadataItem);
    } else if (constants.STEAM === type) {
      const tmpResult12 = tmp(11205);
      redditMetadataItems = tmpResult12.generateSteamMetadataItems(metadata, tmp4.metadataItem);
    } else {
      if (constants.BLUESKY !== type) {
        if (constants.MASTODON !== type) {
          if (constants.TWITTER !== type) {
            if (constants.PAYPAL === type) {
              const tmpResult13 = tmp(11205);
              redditMetadataItems = tmpResult13.generatePaypalMetadataItems(metadata, tmp4.metadataItem);
            } else if (constants.EBAY === type) {
              const tmpResult14 = tmp(11205);
              redditMetadataItems = tmpResult14.generateEbayMetadataItems(metadata, tmp4.metadataItem);
            } else if (constants.TIKTOK === type) {
              const tmpResult15 = tmp(11205);
              redditMetadataItems = tmpResult15.generateTikTokMetadataItems(metadata, tmp4.metadataItem);
            }
          }
        }
      }
      const tmpResult16 = tmp(11205);
      const twitterMetadataItems = tmpResult16.generateTwitterMetadataItems(metadata, tmp4.metadataItem);
      redditMetadataItems = twitterMetadataItems;
      if ("1" === metadata[MetadataFields.TWITTER_VERIFIED]) {
        let first;
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj7 = userId(5449);
          const value = obj7.get(constants.TWITTER);
          cResult[0] = value;
          first = value;
        } else {
          first = cResult[0];
        }
        color = first.color;
        redditMetadataItems = twitterMetadataItems;
      }
    }
  }
  if (cResult[1] === account) {
    let tmp14;
    let tmp16;
    if (cResult[2] === theme) {
      tmp14 = cResult[3];
      tmp16 = cResult[5];
    }
    dependencyMap = tmp16;
    if (null != showInvisibleIcon) {
      if (showInvisibleIcon) {
        if (cResult[6] !== tmp4.connectedAccountOpenHide) {
          let obj2 = { style: tmp4.connectedAccountOpenHide, source: userId(11208) };
          const Icon = tmp(1188).Icon;
          const tmp28 = closure_14(Icon, obj2);
          cResult[6] = tmp4.connectedAccountOpenHide;
          cResult[7] = tmp28;
        }
      }
      const tmpResult17 = tmp(4586);
      let token = tmpResult17.useToken(userId(587).colors.BACKGROUND_MOD_MUTED, theme);
      const useToken = tmp(4586).useToken;
      tmp(4586);
      const INTERACTIVE_TEXT_ACTIVE = userId(587).colors.INTERACTIVE_TEXT_ACTIVE;
      if (null != color) {
        theme = constants2.DARK;
      }
      let WHITE = useToken(INTERACTIVE_TEXT_ACTIVE, theme);
      if (null != color) {
        WHITE = userId(587).unsafe_rawColors.WHITE;
        token = color;
      }
      if (cResult[10] === account.verified) {
        if (cResult[11] === tmp4.verifiedCheck) {
          if (cResult[12] === tmp4.verifiedCheckContainer) {
            if (cResult[13] === token) {
              let formatToPlainStringResult;
              if (cResult[16] !== account.name) {
                class H {
                  constructor() {
                    obj = closure_0(closure_2[25]);
                    result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
                    obj2 = closure_0(closure_2[26]);
                    copyResult = obj2.copy(account.name);
                    obj3 = closure_0(closure_2[27]);
                    result1 = obj3.presentCopiedToClipboard();
                    return;
                  }
                }
                cResult[16] = account.name;
                cResult[17] = H;
              } else {
                class H {
                  constructor() {
                    obj = closure_0(closure_2[25]);
                    result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
                    obj2 = closure_0(closure_2[26]);
                    copyResult = obj2.copy(account.name);
                    obj3 = closure_0(closure_2[27]);
                    result1 = obj3.presentCopiedToClipboard();
                    return;
                  }
                }
              }
              const tmp39 = cResult[18];
              if (tmp14 != null) {
                class H {
                  constructor() {
                    obj = closure_0(closure_2[25]);
                    result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
                    obj2 = closure_0(closure_2[26]);
                    copyResult = obj2.copy(account.name);
                    obj3 = closure_0(closure_2[27]);
                    result1 = obj3.presentCopiedToClipboard();
                    return;
                  }
                }
              }
              if (tmp39 === undefined) {
                class H {
                  constructor() {
                    obj = closure_0(closure_2[25]);
                    result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
                    obj2 = closure_0(closure_2[26]);
                    copyResult = obj2.copy(account.name);
                    obj3 = closure_0(closure_2[27]);
                    result1 = obj3.presentCopiedToClipboard();
                    return;
                  }
                }
                if (cResult[21] === account.type) {
                  class H {
                    constructor() {
                      obj = closure_0(closure_2[25]);
                      result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
                      obj2 = closure_0(closure_2[26]);
                      copyResult = obj2.copy(account.name);
                      obj3 = closure_0(closure_2[27]);
                      result1 = obj3.presentCopiedToClipboard();
                      return;
                    }
                  }
                }
                class K {
                  constructor() {
                    if (null != closure_2) {
                      tmp2 = closure_0;
                      tmp3 = closure_2;
                      obj = closure_0(closure_2[29]);
                      obj1 = { href: null, trusted: null, onConfirm: null };
                      obj1.href = tmp;
                      tmp4 = account;
                      tmp5 = PlatformTypes;
                      obj1.trusted = account.type !== PlatformTypes.DOMAIN;
                      obj1.onConfirm = function onConfirm() { /* body not rendered: F141367 */ };
                      handleClickResult = obj.handleClick(obj1);
                    }
                    return;
                  }
                }
                cResult[21] = account.type;
                cResult[22] = tmp16;
                cResult[23] = userId;
                cResult[24] = K;
              }
              if (null != tmp16) {
                class H {
                  constructor() {
                    obj = closure_0(closure_2[25]);
                    result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
                    obj2 = closure_0(closure_2[26]);
                    copyResult = obj2.copy(account.name);
                    obj3 = closure_0(closure_2[27]);
                    result1 = obj3.presentCopiedToClipboard();
                    return;
                  }
                }
                const string = tmp45.string;
                class K {
                  constructor() {
                    if (null != closure_2) {
                      tmp2 = closure_0;
                      tmp3 = closure_2;
                      obj = closure_0(closure_2[29]);
                      obj1 = { href: null, trusted: null, onConfirm: null };
                      obj1.href = tmp;
                      tmp4 = account;
                      tmp5 = PlatformTypes;
                      obj1.trusted = account.type !== PlatformTypes.DOMAIN;
                      obj1.onConfirm = function onConfirm() { /* body not rendered: F141367 */ };
                      handleClickResult = obj.handleClick(obj1);
                    }
                    return;
                  }
                }
              } else {
                class H {
                  constructor() {
                    obj = closure_0(closure_2[25]);
                    result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
                    obj2 = closure_0(closure_2[26]);
                    copyResult = obj2.copy(account.name);
                    obj3 = closure_0(closure_2[27]);
                    result1 = obj3.presentCopiedToClipboard();
                    return;
                  }
                }
                const formatToPlainString = tmp42.formatToPlainString;
                class K {
                  constructor() {
                    if (null != closure_2) {
                      tmp2 = closure_0;
                      tmp3 = closure_2;
                      obj = closure_0(closure_2[29]);
                      obj1 = { href: null, trusted: null, onConfirm: null };
                      obj1.href = tmp;
                      tmp4 = account;
                      tmp5 = PlatformTypes;
                      obj1.trusted = account.type !== PlatformTypes.DOMAIN;
                      obj1.onConfirm = function onConfirm() { /* body not rendered: F141367 */ };
                      handleClickResult = obj.handleClick(obj1);
                    }
                    return;
                  }
                }
                const OKzaN3 = tmp(1126).t.OKzaN3;
                if (tmp14 != null) {
                  class H {
                    constructor() {
                      obj = closure_0(closure_2[25]);
                      result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
                      obj2 = closure_0(closure_2[26]);
                      copyResult = obj2.copy(account.name);
                      obj3 = closure_0(closure_2[27]);
                      result1 = obj3.presentCopiedToClipboard();
                      return;
                    }
                  }
                }
                if (tmp43 == null) {
                  class H {
                    constructor() {
                      obj = closure_0(closure_2[25]);
                      result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
                      obj2 = closure_0(closure_2[26]);
                      copyResult = obj2.copy(account.name);
                      obj3 = closure_0(closure_2[27]);
                      result1 = obj3.presentCopiedToClipboard();
                      return;
                    }
                  }
                }
                let obj3 = { name: tmp43 };
                formatToPlainStringResult = formatToPlainString(OKzaN3, obj3);
              }
              if (tmp14 != null) {
                class H {
                  constructor() {
                    obj = closure_0(closure_2[25]);
                    result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
                    obj2 = closure_0(closure_2[26]);
                    copyResult = obj2.copy(account.name);
                    obj3 = closure_0(closure_2[27]);
                    result1 = obj3.presentCopiedToClipboard();
                    return;
                  }
                }
              }
              cResult[18] = undefined;
              cResult[19] = tmp16;
              cResult[20] = formatToPlainStringResult;
            }
          }
        }
      }
      let tmp34 = null;
      if (account.verified) {
        class H {
          constructor() {
            obj = closure_0(closure_2[25]);
            result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
            obj2 = closure_0(closure_2[26]);
            copyResult = obj2.copy(account.name);
            obj3 = closure_0(closure_2[27]);
            result1 = obj3.presentCopiedToClipboard();
            return;
          }
        }
        class K {
          constructor() {
            if (null != closure_2) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[29]);
              obj1 = { href: null, trusted: null, onConfirm: null };
              obj1.href = tmp;
              tmp4 = account;
              tmp5 = PlatformTypes;
              obj1.trusted = account.type !== PlatformTypes.DOMAIN;
              obj1.onConfirm = function onConfirm() { /* body not rendered: F141367 */ };
              handleClickResult = obj.handleClick(obj1);
            }
            return;
          }
        }
        tmp36[0] = tmp4.verifiedCheckContainer;
        const obj4 = { style: tmp4.verifiedCheck, size: tmp(1188).Icon.Sizes.REFRESH_SMALL_16, source: userId(11210), color: token };
        const Icon2 = tmp(1188).Icon;
        const items = [closure_14(Icon2, obj4), ];
        const obj5 = { style: tmp4.verifiedCheck, size: tmp(1188).Icon.Sizes.REFRESH_SMALL_16, source: userId(11211), color: WHITE };
        const Icon3 = tmp(1188).Icon;
        items[1] = closure_14(Icon3, obj5);
        tmp36[1] = items;
        tmp34 = closure_15(closure_5, tmp36);
      }
      cResult[10] = account.verified;
      cResult[11] = tmp4.verifiedCheck;
      cResult[12] = tmp4.verifiedCheckContainer;
      cResult[13] = token;
      cResult[14] = WHITE;
      cResult[15] = tmp34;
    }
    if (null != tmp16) {
      class H {
        constructor() {
          obj = closure_0(closure_2[25]);
          result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
          obj2 = closure_0(closure_2[26]);
          copyResult = obj2.copy(account.name);
          obj3 = closure_0(closure_2[27]);
          result1 = obj3.presentCopiedToClipboard();
          return;
        }
      }
    }
  }
  const obj10 = userId(5449);
  const value2 = obj10.get(account.type);
  const makeSource = tmp(1402).makeSource;
  tmp(1402);
  const tmpResult20 = tmp(4735);
  if (tmpResult20.isThemeDark(theme)) {
    class H {
      constructor() {
        obj = closure_0(closure_2[25]);
        result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
        obj2 = closure_0(closure_2[26]);
        copyResult = obj2.copy(account.name);
        obj3 = closure_0(closure_2[27]);
        result1 = obj3.presentCopiedToClipboard();
        return;
      }
    }
    if (value2 != null) {
      class H {
        constructor() {
          obj = closure_0(closure_2[25]);
          result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
          obj2 = closure_0(closure_2[26]);
          copyResult = obj2.copy(account.name);
          obj3 = closure_0(closure_2[27]);
          result1 = obj3.presentCopiedToClipboard();
          return;
        }
      }
    }
    class K {
      constructor() {
        if (null != closure_2) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[29]);
          obj1 = { href: null, trusted: null, onConfirm: null };
          obj1.href = tmp;
          tmp4 = account;
          tmp5 = PlatformTypes;
          obj1.trusted = account.type !== PlatformTypes.DOMAIN;
          obj1.onConfirm = function onConfirm() { /* body not rendered: F141367 */ };
          handleClickResult = obj.handleClick(obj1);
        }
        return;
      }
    }
  } else {
    class H {
      constructor() {
        obj = closure_0(closure_2[25]);
        result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
        obj2 = closure_0(closure_2[26]);
        copyResult = obj2.copy(account.name);
        obj3 = closure_0(closure_2[27]);
        result1 = obj3.presentCopiedToClipboard();
        return;
      }
    }
    if (value2 != null) {
      class H {
        constructor() {
          obj = closure_0(closure_2[25]);
          result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
          obj2 = closure_0(closure_2[26]);
          copyResult = obj2.copy(account.name);
          obj3 = closure_0(closure_2[27]);
          result1 = obj3.presentCopiedToClipboard();
          return;
        }
      }
    }
  }
  const source = makeSource(tmp20);
  if (value2 != null) {
    class H {
      constructor() {
        obj = closure_0(closure_2[25]);
        result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
        obj2 = closure_0(closure_2[26]);
        copyResult = obj2.copy(account.name);
        obj3 = closure_0(closure_2[27]);
        result1 = obj3.presentCopiedToClipboard();
        return;
      }
    }
    class K {
      constructor() {
        if (null != closure_2) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[29]);
          obj1 = { href: null, trusted: null, onConfirm: null };
          obj1.href = tmp;
          tmp4 = account;
          tmp5 = PlatformTypes;
          obj1.trusted = account.type !== PlatformTypes.DOMAIN;
          obj1.onConfirm = function onConfirm() { /* body not rendered: F141367 */ };
          handleClickResult = obj.handleClick(obj1);
        }
        return;
      }
    }
  }
  cResult[1] = account;
  cResult[2] = theme;
  cResult[3] = value2;
  cResult[4] = source;
  cResult[5] = undefined;
  tmp16 = tmp22;
  tmp14 = value2;
}) : ((account) => {
  let _undefined;
  let color;
  let intl;
  let items;
  let items4;
  let items5;
  let items6;
  let items7;
  let lightPNG;
  let obj15;
  let obj16;
  let obj23;
  let redditMetadataItems;
  let showInvisibleIcon;
  let showMetadata;
  let style;
  let theme;
  let tmp29;
  let tmp45;
  let userId;
  account = account.account;
  ({ theme, userId } = account);
  ({ showMetadata, showInvisibleIcon } = account);
  dependencyMap = undefined;
  let platformUserUrl;
  ({ locale, style } = account);
  if (null == showMetadata) {
    showMetadata = true;
  }
  const tmp = closure_17();
  let metadata = account.metadata;
  if (metadata == null) {
    metadata = {};
  }
  let createdAtDate = null;
  if (showMetadata) {
    let obj2 = account(6685);
    createdAtDate = obj2.getCreatedAtDate(metadata[MetadataFields.CREATED_AT], locale);
  }
  if (showMetadata) {
    const type = account.type;
    if (constants.REDDIT === type) {
      const obj8 = account(11205);
      redditMetadataItems = obj8.generateRedditMetadataItems(metadata, tmp.metadataItem);
    } else if (constants.STEAM === type) {
      const obj7 = account(11205);
      redditMetadataItems = obj7.generateSteamMetadataItems(metadata, tmp.metadataItem);
    } else {
      if (constants.BLUESKY !== type) {
        if (constants.MASTODON !== type) {
          if (constants.TWITTER !== type) {
            if (constants.PAYPAL === type) {
              const obj4 = account(11205);
              redditMetadataItems = obj4.generatePaypalMetadataItems(metadata, tmp.metadataItem);
            } else if (constants.EBAY === type) {
              let obj3 = account(11205);
              redditMetadataItems = obj3.generateEbayMetadataItems(metadata, tmp.metadataItem);
            } else if (constants.TIKTOK === type) {
              const obj28 = account(11205);
              redditMetadataItems = obj28.generateTikTokMetadataItems(metadata, tmp.metadataItem);
            }
          }
        }
      }
      const obj5 = account(11205);
      const twitterMetadataItems = obj5.generateTwitterMetadataItems(metadata, tmp.metadataItem);
      let str = "1";
      redditMetadataItems = twitterMetadataItems;
      if ("1" === metadata[MetadataFields.TWITTER_VERIFIED]) {
        const obj6 = userId(5449);
        color = obj6.get(constants.TWITTER).color;
        redditMetadataItems = twitterMetadataItems;
      }
    }
  }
  const obj9 = userId(5449);
  const value = obj9.get(account.type);
  dependencyMap = value;
  const makeSource = account(1402).makeSource;
  account(1402);
  const obj10 = account(4735);
  if (obj10.isThemeDark(theme)) {
    let darkPNG;
    if (value != null) {
      darkPNG = value.icon.darkPNG;
    }
    lightPNG = darkPNG;
  } else if (value != null) {
    lightPNG = value.icon.lightPNG;
  }
  platformUserUrl = undefined;
  const source = makeSource(lightPNG);
  if (value != null) {
    const getPlatformUserUrl = value.getPlatformUserUrl;
    if (getPlatformUserUrl != null) {
      platformUserUrl = getPlatformUserUrl(account);
    }
  }
  if (null != showInvisibleIcon) {
    let PressableOpacity;
    if (showInvisibleIcon) {
      let obj = { style: tmp.connectedAccountOpenHide, source: userId(11208) };
      const Icon2 = tmp23(1188).Icon;
      tmp29 = closure_14(Icon2, obj);
    }
    const tmp23Result = account(4586);
    const token = tmp23Result.useToken(userId(587).colors.BACKGROUND_MOD_MUTED, theme);
    const useToken = account(4586).useToken;
    account(4586);
    const INTERACTIVE_TEXT_ACTIVE = userId(587).colors.INTERACTIVE_TEXT_ACTIVE;
    if (null != color) {
      theme = constants2.DARK;
    }
    let WHITE = useToken(INTERACTIVE_TEXT_ACTIVE, theme);
    let tmp35 = token;
    if (null != color) {
      WHITE = userId(587).unsafe_rawColors.WHITE;
      tmp35 = color;
    }
    let tmp36 = null;
    if (account.verified) {
      const obj11 = { style: tmp.verifiedCheckContainer, children: items };
      const obj12 = { style: tmp.verifiedCheck, size: account(1188).Icon.Sizes.REFRESH_SMALL_16, source: userId(11210), color: tmp35 };
      const Icon3 = tmp23(1188).Icon;
      items = [closure_14(Icon3, obj12), ];
      const obj13 = { style: tmp.verifiedCheck, size: account(1188).Icon.Sizes.REFRESH_SMALL_16, source: userId(11211), color: WHITE };
      const Icon4 = tmp23(1188).Icon;
      items[1] = closure_14(Icon4, obj13);
      tmp36 = closure_15(closure_5, obj11);
    }
    const items1 = [account.name];
    let name;
    const callback = platformUserUrl.useCallback(() => {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
      const obj2 = ClipboardUtils;
      obj2.copy(account.name);
      const obj3 = ToastUtils;
      const result1 = obj3.presentCopiedToClipboard();
    }, items1);
    const useMemo = platformUserUrl.useMemo;
    const obj17 = platformUserUrl;
    if (value != null) {
      name = value.name;
    }
    const items2 = [name, platformUserUrl];
    const items3 = [account.type, platformUserUrl, userId];
    const memo = useMemo(() => {
      let stringResult;
      if (null != platformUserUrl) {
        const intl2 = intl3.intl;
        stringResult = intl2.string(intl3.t.wuRE8M);
      } else {
        const intl = intl3.intl;
        const formatToPlainString = intl.formatToPlainString;
        let str;
        const OKzaN3 = intl3.t.OKzaN3;
        if (_undefined != null) {
          str = _undefined.name;
        }
        if (str == null) {
          str = "";
        }
        const obj = { name: str };
        stringResult = formatToPlainString(OKzaN3, obj);
      }
      return stringResult;
    }, items2);
    const callback1 = obj17.useCallback(() => {
      let other_user_id;
      let type;
      if (null != platformUserUrl) {
        let obj = MaskedLinkUtils;
        let obj2 = {
          href: tmp,
          trusted: account.type !== unpackModuleId.DOMAIN,
          onConfirm() {
              const obj = account(c2[30]);
              const obj2 = { platform_type: type.type, other_user_id };
              obj.trackWithMetadata(constants.CONNECTED_ACCOUNT_VIEWED, obj2);
              const obj3 = userId(c2[31]);
              obj3.openURL(platformUserUrl);
            }
        };
        obj.handleClick(obj2);
      }
    }, items3);
    if (null != platformUserUrl) {
      PressableOpacity = tmp23(5916).PressableOpacity;
    } else {
      PressableOpacity = closure_4;
    }
    const obj14 = { accessibilityLabel: memo, accessibilityRole: "button", onPress: tmp45, onLongPress: callback, children: closure_14(closure_5, obj15) };
    tmp45 = undefined;
    if (null != platformUserUrl) {
      tmp45 = callback1;
    }
    obj15 = { style: items4, children: closure_15(closure_5, obj16) };
    items4 = [tmp.connectedAccountContainer, style];
    obj16 = { style: tmp.connectedAccount, children: items5 };
    const obj18 = { size: account(1188).Icon.Sizes.MEDIUM, source, disableColor: true };
    const Icon5 = tmp23(1188).Icon;
    items5 = [closure_14(Icon5, obj18), , ];
    const obj19 = { style: tmp.connectedAccountNameContainer, children: items7 };
    const obj20 = { style: tmp.connectedAccountName, children: items6 };
    const obj21 = { variant: "text-md/semibold", style: tmp.connectedAccountNameText, children: account.name };
    items6 = [closure_14(account(4892).Text, obj21), tmp36];
    items7 = [closure_15(closure_5, obj20), , ];
    let tmp44Result = null;
    if (null != createdAtDate) {
      const obj22 = { variant: "heading-deprecated-12/medium", style: tmp.connectedAccountNameCreatedAtText, children: intl.format(account(1126).t["9rfonh"], obj23) };
      const Text = tmp23(4892).Text;
      intl = tmp23(1126).intl;
      obj23 = { date: createdAtDate };
      tmp44Result = closure_14(Text, obj22);
    }
    items7[1] = tmp44Result;
    let tmp44Result2 = null;
    if (null != redditMetadataItems) {
      tmp44Result2 = null;
      if (redditMetadataItems.length > 0) {
        const obj24 = { style: tmp.connectedAccountChildren, children: redditMetadataItems };
        tmp44Result2 = closure_14(closure_5, obj24);
      }
    }
    items7[2] = tmp44Result2;
    items5[1] = closure_15(closure_5, obj19);
    items5[2] = tmp29;
    return closure_14(PressableOpacity, obj14);
  }
  tmp29 = null;
  if (null != platformUserUrl) {
    const obj25 = { style: tmp.connectedAccountOpenLink, source: userId(11209) };
    const Icon = tmp23(1188).Icon;
    tmp29 = closure_14(Icon, obj25);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((applicationRoleConnection) => {
  let arr;
  let items;
  let items1;
  let obj = applicationRoleConnection(576);
  const cResult = obj.c(34);
  applicationRoleConnection = applicationRoleConnection.applicationRoleConnection;
  const style = applicationRoleConnection.style;
  const tmp4 = closure_17();
  let closure_1 = tmp4;
  if (cResult[0] !== applicationRoleConnection) {
    const tmpResult = applicationRoleConnection(11205);
    const roleConnectionMetadataItems = tmpResult.generateRoleConnectionMetadataItems(applicationRoleConnection);
    cResult[0] = applicationRoleConnection;
    cResult[1] = roleConnectionMetadataItems;
    arr = roleConnectionMetadataItems;
  } else {
    arr = cResult[1];
  }
  if (cResult[2] === style) {
    let tmp6;
    let tmp7;
    let tmp10;
    if (cResult[3] === tmp4.connectedAccountContainer) {
      tmp6 = cResult[4];
    }
    if (cResult[5] !== applicationRoleConnection.platform_name) {
      let tmp8 = null;
      if (null != applicationRoleConnection.platform_name) {
        let obj2 = { variant: "eyebrow", color: "interactive-text-default", children: applicationRoleConnection.platform_name };
        tmp8 = closure_14(tmp(4892).Text, obj2);
      }
      cResult[5] = applicationRoleConnection.platform_name;
      cResult[6] = tmp8;
      tmp7 = tmp8;
    } else {
      tmp7 = cResult[6];
    }
    if (cResult[7] !== applicationRoleConnection.platform_username) {
      let tmp11 = null;
      if (null != applicationRoleConnection.platform_username) {
        let obj3 = { variant: "text-md/semibold", color: "interactive-text-active", children: applicationRoleConnection.platform_username };
        tmp11 = closure_14(tmp(4892).Text, obj3);
      }
      cResult[7] = applicationRoleConnection.platform_username;
      cResult[8] = tmp11;
      tmp10 = tmp11;
    } else {
      tmp10 = cResult[8];
    }
    if (cResult[9] === tmp4.appConnectionNameContainer) {
      let tmp13;
      if (cResult[10] === tmp10) {
        tmp13 = cResult[11];
      }
      if (cResult[12] === arr) {
        let tmp17;
        let tmp23;
        if (cResult[13] === tmp4.connectedAccountChildren) {
          tmp17 = cResult[14];
        }
        const _Symbol = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { flexDirection: "row" };
          cResult[15] = obj4;
          tmp23 = obj4;
        } else {
          tmp23 = cResult[15];
        }
        if (cResult[16] === applicationRoleConnection.application) {
          if (cResult[17] === tmp4.connectedAccountPoweredByAvatar) {
            let tmp25;
            let tmp27;
            if (cResult[18] === tmp4.connectedAccountPoweredByText) {
              tmp25 = cResult[19];
            }
            if (cResult[20] !== tmp25) {
              const obj5 = { variant: "text-xs/normal", color: "text-muted", children: tmp25 };
              const tmp29 = closure_14(applicationRoleConnection(4892).Text, obj5);
              cResult[20] = tmp25;
              cResult[21] = tmp29;
              tmp27 = tmp29;
            } else {
              tmp27 = cResult[21];
            }
            if (cResult[22] === tmp4.connectedAccountPoweredByContainer) {
              let tmp30;
              let tmp34;
              let tmp38;
              if (cResult[23] === tmp27) {
                tmp30 = cResult[24];
              }
              const _Symbol2 = Symbol;
              if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                const obj6 = { style: { flexGrow: 1 } };
                const tmp37 = closure_14(closure_5, obj6);
                cResult[25] = tmp37;
                tmp34 = tmp37;
              } else {
                tmp34 = cResult[25];
              }
              if (cResult[26] !== tmp30) {
                const obj7 = { style: tmp23, children: items };
                items = [tmp30, tmp34];
                const tmp41 = closure_15(closure_5, obj7);
                cResult[26] = tmp30;
                cResult[27] = tmp41;
                tmp38 = tmp41;
              } else {
                tmp38 = cResult[27];
              }
              if (cResult[28] === tmp38) {
                if (cResult[29] === tmp6) {
                  if (cResult[30] === tmp7) {
                    if (cResult[31] === tmp13) {
                      let tmp42;
                      if (cResult[32] === tmp17) {
                        tmp42 = cResult[33];
                      }
                      return tmp42;
                    }
                  }
                }
              }
              const obj8 = { style: tmp6, children: items1 };
              items1 = [tmp7, tmp13, tmp17, tmp38];
              const tmp45 = closure_15(closure_5, obj8);
              cResult[28] = tmp38;
              cResult[29] = tmp6;
              cResult[30] = tmp7;
              cResult[31] = tmp13;
              cResult[32] = tmp17;
              cResult[33] = tmp45;
              tmp42 = tmp45;
            }
            const obj9 = { style: tmp24, children: tmp27 };
            const tmp33 = closure_14(closure_5, obj9);
            cResult[22] = tmp4.connectedAccountPoweredByContainer;
            cResult[23] = tmp27;
            cResult[24] = tmp33;
            tmp30 = tmp33;
          }
        }
        const intl = tmp(1126).intl;
        const obj10 = {
          applicationHook() {
                  let items;
                  let tmp10;
                  let tmp5 = null;
                  const obj = { style: closure_1.connectedAccountPoweredByText, children: items };
                  if (null != applicationRoleConnection.application.bot) {
                    const self = this;
                    const self2 = this;
                    const obj2 = { style: tmp3.connectedAccountPoweredByAvatar, user: tmp10, size: native.AvatarSizes.SIZE_16, guildId: "Array" };
                    const Avatar = native.Avatar;
                    tmp10 = new UserRecord(applicationRoleConnection.application.bot);
                    tmp5 = authStore2(Avatar, obj2);
                  }
                  items = [tmp5, ];
                  const obj3 = { variant: "text-xs/normal", color: "text-default", children: applicationRoleConnection.application.name };
                  items[1] = authStore2(Text_Text.Text, obj3);
                  return closure_15(hasOwnProperty, obj);
                }
        };
        const formatResult = intl.format(applicationRoleConnection(1126).t.zIT9YA, obj10);
        cResult[16] = applicationRoleConnection.application;
        cResult[17] = tmp4.connectedAccountPoweredByAvatar;
        cResult[18] = tmp4.connectedAccountPoweredByText;
        cResult[19] = formatResult;
        tmp25 = formatResult;
      }
      let tmp19 = null;
      if (null != arr) {
        tmp19 = null;
        if (arr.length > 0) {
          const obj11 = { style: tmp4.connectedAccountChildren, children: arr };
          tmp19 = closure_14(closure_5, obj11);
        }
      }
      cResult[12] = arr;
      cResult[13] = tmp4.connectedAccountChildren;
      cResult[14] = tmp19;
      tmp17 = tmp19;
    }
    const obj12 = { style: tmp4.appConnectionNameContainer, children: tmp10 };
    const tmp16 = closure_14(closure_5, obj12);
    cResult[9] = tmp4.appConnectionNameContainer;
    cResult[10] = tmp10;
    cResult[11] = tmp16;
    tmp13 = tmp16;
  }
  const items2 = [tmp4.connectedAccountContainer, style];
  cResult[2] = style;
  cResult[3] = tmp4.connectedAccountContainer;
  cResult[4] = items2;
  tmp6 = items2;
}) : ((applicationRoleConnection) => {
  let Text;
  let intl;
  let items;
  let items1;
  let items2;
  let obj10;
  let obj9;
  let tmp8Result;
  applicationRoleConnection = applicationRoleConnection.applicationRoleConnection;
  const style = applicationRoleConnection.style;
  const tmp = closure_17();
  let closure_1 = tmp;
  let obj = applicationRoleConnection(11205);
  const roleConnectionMetadataItems = obj.generateRoleConnectionMetadataItems(applicationRoleConnection);
  let obj2 = { style: items, children: items1 };
  items = [tmp.connectedAccountContainer, style];
  let tmp6 = null;
  if (null != applicationRoleConnection.platform_name) {
    let obj3 = { variant: "eyebrow", color: "interactive-text-default", children: applicationRoleConnection.platform_name };
    tmp6 = closure_14(tmp2(4892).Text, obj3);
  }
  items1 = [tmp6, , , ];
  const obj4 = { style: tmp.appConnectionNameContainer, children: tmp8Result };
  tmp8Result = null;
  if (null != applicationRoleConnection.platform_username) {
    const obj5 = { variant: "text-md/semibold", color: "interactive-text-active", children: applicationRoleConnection.platform_username };
    tmp8Result = closure_14(tmp2(4892).Text, obj5);
  }
  items1[1] = closure_14(closure_5, obj4);
  let tmp8Result2 = null;
  if (null != roleConnectionMetadataItems) {
    tmp8Result2 = null;
    if (roleConnectionMetadataItems.length > 0) {
      const obj6 = { style: tmp.connectedAccountChildren, children: roleConnectionMetadataItems };
      tmp8Result2 = closure_14(closure_5, obj6);
    }
  }
  items1[2] = tmp8Result2;
  const obj7 = { style: { flexDirection: "row" }, children: items2 };
  const obj8 = { style: tmp.connectedAccountPoweredByContainer, children: closure_14(Text, obj9) };
  obj9 = { variant: "text-xs/normal", color: "text-muted", children: intl.format(applicationRoleConnection(1126).t.zIT9YA, obj10) };
  Text = tmp2(4892).Text;
  intl = tmp2(1126).intl;
  obj10 = {
    applicationHook() {
      let items;
      let tmp10;
      let tmp5 = null;
      const obj = { style: closure_1.connectedAccountPoweredByText, children: items };
      if (null != applicationRoleConnection.application.bot) {
        const self = this;
        const self2 = this;
        const obj2 = { style: tmp3.connectedAccountPoweredByAvatar, user: tmp10, size: native.AvatarSizes.SIZE_16, guildId: "Array" };
        const Avatar = native.Avatar;
        tmp10 = new UserRecord(applicationRoleConnection.application.bot);
        tmp5 = authStore2(Avatar, obj2);
      }
      items = [tmp5, ];
      const obj3 = { variant: "text-xs/normal", color: "text-default", children: applicationRoleConnection.application.name };
      items[1] = authStore2(Text_Text.Text, obj3);
      return closure_15(hasOwnProperty, obj);
    }
  };
  items2 = [closure_14(closure_5, obj8), closure_14(closure_5, { style: { flexGrow: 1 } })];
  items1[3] = closure_15(closure_5, obj7);
  return closure_15(closure_5, obj2);
});
let closure_18 = react.memo(tmp6);
let closure_19 = react.memo(tmp7);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arr, style) => {
  let stateFromStores;
  let tmp4;
  let tmp5;
  let tmp8;
  _require = style;
  let obj = require("react");
  const cResult = obj.c(11);
  let obj2 = require("native");
  const theme = obj2.useThemeContext().theme;
  const tmp = _require;
  const tmp2 = stateFromStores;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocaleStore];
    const fn = function i() {
      return locale.locale;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(tmp2[35]);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === arr) {
    if (cResult[3] === stateFromStores) {
      if (cResult[4] === style) {
        if (cResult[5] === theme) {
          tmp8 = cResult[6];
        }
        return tmp8;
      }
    }
  }
  if (cResult[7] === stateFromStores) {
    if (cResult[8] === style) {
      let tmp9;
      if (cResult[9] === theme) {
        tmp9 = cResult[10];
      }
      const mapped = arr.map(tmp9);
      cResult[2] = arr;
      cResult[3] = stateFromStores;
      cResult[4] = style;
      cResult[5] = theme;
      cResult[6] = mapped;
      tmp8 = mapped;
    }
  }
  class A {
    constructor(applicationRoleConnection, arg1) {
      let obj2;
      const Fragment = react.Fragment;
      const obj = { children: authStore2(closure_19, obj2) };
      obj2 = { applicationRoleConnection, theme, locale: stateFromStores, style };
      return authStore2(Fragment, obj, arg1);
    }
  }
  cResult[7] = stateFromStores;
  cResult[8] = style;
  cResult[9] = theme;
  cResult[10] = A;
  tmp9 = A;
}) : ((arr, style) => {
  let locale2;
  _require = style;
  let obj = require("native");
  const theme = obj.useThemeContext().theme;
  let obj2 = require("get initialized");
  const items = [LocaleStore];
  dependencyMap = obj2.useStateFromStores(items, () => locale2.locale);
  return arr.map((applicationRoleConnection, index) => {
    let obj2;
    const Fragment = react.Fragment;
    const obj = { children: authStore2(closure_19, obj2) };
    obj2 = { applicationRoleConnection, theme, locale, style };
    return authStore2(Fragment, obj, index);
  });
});
let closure_20 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arr, userId, style) => {
  let theme;
  let tmp10;
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp8;
  _require = userId;
  importDefault = style;
  let tmp2 = theme;
  let obj = require("react");
  const cResult = obj.c(17);
  let obj2 = require("native");
  theme = obj2.useThemeContext().theme;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocaleStore];
    const fn = function s() {
      return locale.locale;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { forUserProfile: true };
    cResult[2] = obj3;
    tmp8 = obj3;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult2 = require("ConnectionsHooks");
  const platformAllowed = tmpResult2.usePlatformAllowed(tmp8);
  if (cResult[3] === arr) {
    if (cResult[4] === stateFromStores) {
      if (cResult[5] === platformAllowed) {
        if (cResult[6] === style) {
          if (cResult[7] === theme) {
            if (cResult[8] === userId) {
              tmp10 = cResult[9];
            }
            return tmp10;
          }
        }
      }
    }
  }
  if (cResult[10] !== platformAllowed) {
    const fn2 = function f(type) {
      const obj = PlatformsDefault;
      const value = obj.get(type.type);
      const tmp2 = null != value && platformAllowed(value);
      return tmp2;
    };
    cResult[10] = platformAllowed;
    cResult[11] = fn2;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[11];
  }
  const found = arr.filter(tmp11);
  if (cResult[12] === stateFromStores) {
    if (cResult[13] === style) {
      if (cResult[14] === theme) {
        let tmp12;
        if (cResult[15] === userId) {
          tmp12 = cResult[16];
        }
        const mapped = found.map(tmp12);
        cResult[3] = arr;
        cResult[4] = stateFromStores;
        cResult[5] = platformAllowed;
        cResult[6] = style;
        cResult[7] = theme;
        cResult[8] = userId;
        cResult[9] = mapped;
        tmp10 = mapped;
      }
    }
  }
  class I {
    constructor(account, arg1) {
      let obj2;
      const Fragment = react.Fragment;
      const obj = { children: authStore2(closure_18, obj2) };
      obj2 = { account, theme, locale: stateFromStores, userId, style };
      return authStore2(Fragment, obj, arg1);
    }
  }
  cResult[12] = stateFromStores;
  cResult[13] = style;
  cResult[14] = theme;
  cResult[15] = userId;
  cResult[16] = I;
  tmp12 = I;
}) : ((arr, userId, style) => {
  let locale2;
  let theme;
  _require = userId;
  let obj = require("native");
  theme = obj.useThemeContext().theme;
  let obj2 = require("get initialized");
  const items = [LocaleStore];
  locale = obj2.useStateFromStores(items, () => locale2.locale);
  const obj3 = require("ConnectionsHooks");
  let closure_4 = obj3.usePlatformAllowed({ forUserProfile: true });
  const found = arr.filter((type) => {
    const obj = PlatformsDefault;
    const value = obj.get(type.type);
    const tmp2 = null != value && closure_4(value);
    return tmp2;
  });
  return found.map((account, index) => {
    let obj2;
    const Fragment = react.Fragment;
    const obj = { children: authStore2(closure_18, obj2) };
    obj2 = { account, theme, locale, userId, style };
    return authStore2(Fragment, obj, index);
  });
});
let closure_21 = tmp9;
let closure_22 = [];
let closure_23 = [];
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let arr3;
  let first;
  let intl;
  let items2;
  let tmp15;
  let tmp6;
  let tmp8;
  let tmp9;
  const obj = user(576);
  const cResult = obj.c(17);
  user = user.user;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function o() {
      return UserProfileStore.getUserProfile(user.id);
    };
    cResult[1] = user.id;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = user(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [StreamerModeStore];
    const fn2 = function h() {
      return StreamerModeStore.hidePersonalInformation;
    };
    cResult[3] = items1;
    cResult[4] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  let prop;
  const tmpResult2 = user(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp9);
  if (stateFromStores != null) {
    prop = stateFromStores.applicationRoleConnections;
  }
  if (prop == null) {
    prop = closure_23;
  }
  let connectedAccounts;
  const tmp13 = cResult[5];
  if (stateFromStores != null) {
    connectedAccounts = stateFromStores.connectedAccounts;
  }
  if (tmp13 !== connectedAccounts) {
    let connectedAccounts1;
    if (stateFromStores != null) {
      connectedAccounts1 = stateFromStores.connectedAccounts;
    }
    const fn3 = function p() {
      let connectedAccounts;
      if (stateFromStores != null) {
        connectedAccounts = stateFromStores.connectedAccounts;
      }
      if (connectedAccounts == null) {
        connectedAccounts = closure_22;
      }
      return connectedAccounts;
    };
    cResult[5] = connectedAccounts1;
    cResult[6] = fn3;
    tmp15 = fn3;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] !== tmp15) {
    const tmp15Result = tmp15();
    cResult[7] = tmp15;
    cResult[8] = tmp15Result;
    arr3 = tmp15Result;
  } else {
    arr3 = cResult[8];
  }
  const arr4 = closure_20(prop);
  const tmp18 = closure_21(arr3, user.id);
  let tmp19 = null;
  if (!stateFromStores1) {
    tmp19 = null;
    if (0 !== arr3.length) {
      let tmp20;
      let tmp25;
      let tmp27;
      if (cResult[9] !== arr4) {
        let tmp21 = null != arr4 && arr4.length > 0;
        if (tmp21) {
          const obj2 = { title: intl.string(user(1126).t.PHjkRE), showContainer: true, children: arr4 };
          const tmp24 = stateFromStores(11212);
          intl = tmp(1126).intl;
          tmp21 = closure_14(tmp24, obj2);
        }
        cResult[9] = arr4;
        cResult[10] = tmp21;
        tmp20 = tmp21;
      } else {
        tmp20 = cResult[10];
      }
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult = intl2.string(user(1126).t["3fe7U5"]);
        cResult[11] = stringResult;
        tmp25 = stringResult;
      } else {
        tmp25 = cResult[11];
      }
      if (cResult[12] !== tmp18) {
        const obj3 = { title: tmp25, showContainer: true, children: tmp18 };
        const tmp30 = closure_14(stateFromStores(11212), obj3);
        cResult[12] = tmp18;
        cResult[13] = tmp30;
        tmp27 = tmp30;
      } else {
        tmp27 = cResult[13];
      }
      if (cResult[14] === tmp20) {
        let tmp31;
        if (cResult[15] === tmp27) {
          tmp31 = cResult[16];
        }
        tmp19 = tmp31;
      }
      const obj4 = { children: items2 };
      items2 = [tmp20, tmp27];
      const tmp34 = closure_15(closure_16, obj4);
      cResult[14] = tmp20;
      cResult[15] = tmp27;
      cResult[16] = tmp34;
      tmp31 = tmp34;
    }
  }
  return tmp19;
}) : ((user) => {
  let intl;
  let intl2;
  let items4;
  user = user.user;
  const items = [UserProfileStore];
  const obj = user(504);
  const stateFromStores = obj.useStateFromStores(items, () => UserProfileStore.getUserProfile(user.id));
  const items1 = [StreamerModeStore];
  let prop;
  const obj2 = user(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => StreamerModeStore.hidePersonalInformation);
  const useMemo = react.useMemo;
  if (stateFromStores != null) {
    prop = stateFromStores.applicationRoleConnections;
  }
  const items2 = [prop];
  let connectedAccounts;
  const memo = useMemo(() => {
    let prop;
    if (stateFromStores != null) {
      prop = stateFromStores.applicationRoleConnections;
    }
    if (prop == null) {
      prop = closure_23;
    }
    return prop;
  }, items2);
  const useMemo2 = react.useMemo;
  if (stateFromStores != null) {
    connectedAccounts = stateFromStores.connectedAccounts;
  }
  const items3 = [connectedAccounts];
  const memo2 = useMemo2(() => {
    let connectedAccounts;
    if (stateFromStores != null) {
      connectedAccounts = stateFromStores.connectedAccounts;
    }
    if (connectedAccounts == null) {
      connectedAccounts = closure_22;
    }
    return connectedAccounts;
  }, items3);
  const arr6 = closure_20(memo);
  let tmp18Result = null;
  if (!stateFromStores1) {
    tmp18Result = null;
    if (0 !== memo2.length) {
      let tmp11 = null != arr6 && arr6.length > 0;
      if (tmp11) {
        const obj3 = { title: intl.string(user(1126).t.PHjkRE), showContainer: true, children: arr6 };
        const tmp14 = stateFromStores(11212);
        intl = tmp(1126).intl;
        tmp11 = closure_14(tmp14, obj3);
      }
      const obj4 = { children: items4 };
      items4 = [tmp11, ];
      const obj5 = { title: intl2.string(user(1126).t["3fe7U5"]), showContainer: true, children: tmp9 };
      const tmp17 = stateFromStores(11212);
      intl2 = tmp(1126).intl;
      items4[1] = closure_14(tmp17, obj5);
      tmp18Result = closure_15(closure_16, obj4);
    }
  }
  return tmp18Result;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/LegacyUserProfileConnections.tsx");

export default tmp10;
export const ConnectedUserAccount = tmp6;
export const ConnectedApplicationUserRoleAccount = tmp7;
export const useAppplicationRoleConnectionItems = tmp8;
export const useConnectedAccountItems = tmp9;