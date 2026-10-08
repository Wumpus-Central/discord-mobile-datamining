// discord_app/modules/user_profile/native/LegacyUserProfileConnections.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import PlatformsDefault from "../../../lib/Platforms.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import MaskedLinkUtils from "../../../utils/MaskedLinkUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import UserRecord from "../../../records/UserRecord.tsx";
import StreamerModeStore from "../../../stores/StreamerModeStore.tsx";
import UserProfileStore from "../UserProfileStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticEvents: c10, PlatformTypes: closure_11, ThemeTypes: closure_12 } = Constants);
const MetadataFields = fn(6863).MetadataFields;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const createStyles = fn(5090);
let obj = { connectedAccountContainer: { paddingHorizontal: 10, paddingVertical: fn(1204).FORM_ROW_VERTICAL_PADDING / 2 }, connectedAccount: { flexDirection: "row", alignItems: "center" }, connectedAccountNameContainer: { flex: 1, marginLeft: 8 }, connectedAccountName: { flexDirection: "row", alignItems: "center" }, connectedAccountNameText: null, connectedAccountNameCreatedAtText: null, connectedAccountOpenLink: null, connectedAccountOpenHide: null, verifiedCheckContainer: null, verifiedCheck: null, connectedAccountChildren: null, metadataItem: null, appConnectionNameContainer: null, connectedAccountPoweredByContainer: null, connectedAccountPoweredByAvatar: null, connectedAccountPoweredByText: null };
let obj3 = { paddingHorizontal: 10, paddingVertical: fn(1204).FORM_ROW_VERTICAL_PADDING / 2 };
obj.connectedAccountNameText = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let obj4 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.connectedAccountNameCreatedAtText = { color: nativeDefault.colors.TEXT_SUBTLE };
let size = { height: 24, width: 24, transform: null, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let items = [{ rotate: "135deg" }];
size.transform = items;
obj.connectedAccountOpenLink = size;
const size1 = { alignSelf: "flex-start", margin: 4, height: 16, width: 16, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj.connectedAccountOpenHide = size1;
obj.verifiedCheckContainer = { marginLeft: 4, height: 16, width: 16 };
obj.verifiedCheck = { position: "absolute", left: 0, top: 0 };
obj.connectedAccountChildren = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", overflow: "hidden" };
let obj5 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj.metadataItem = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.appConnectionNameContainer = { flex: 1, flexDirection: "row", alignItems: "center", marginTop: 4 };
let obj6 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.connectedAccountPoweredByContainer = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: 8, paddingVertical: 4, marginTop: 12 };
obj.connectedAccountPoweredByAvatar = { marginRight: 4 };
obj.connectedAccountPoweredByText = { marginTop: -4, alignItems: "center", flexDirection: "row" };
let closure_17 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectedUserAccount(account) {
  const cResult = account(576).c(62);
  account = account.account;
  ({ theme, userId } = account);
  ({ style, showMetadata, showInvisibleIcon } = account);
  if (null == showMetadata) {
    showMetadata = true;
  }
  const tmp4 = closure_17();
  let metadata = account.metadata;
  if (metadata == null) {
    metadata = {};
  }
  if (showMetadata) {
    const createdAtDate = tmp(6862).getCreatedAtDate(metadata[MetadataFields.CREATED_AT], account.locale);
    const tmpResult = tmp(6862);
  }
  if (showMetadata) {
    const type = account.type;
    if (constants.REDDIT === type) {
      let redditMetadataItems = tmp(11322).generateRedditMetadataItems(metadata, tmp4.metadataItem);
      const tmpResult11 = tmp(11322);
    } else if (constants.STEAM === type) {
      redditMetadataItems = tmp(11322).generateSteamMetadataItems(metadata, tmp4.metadataItem);
      const tmpResult12 = tmp(11322);
    } else {
      if (constants.BLUESKY !== type) {
        if (constants.MASTODON !== type) {
          if (constants.TWITTER !== type) {
            if (constants.PAYPAL === type) {
              redditMetadataItems = tmp(11322).generatePaypalMetadataItems(metadata, tmp4.metadataItem);
              const tmpResult13 = tmp(11322);
            } else if (constants.EBAY === type) {
              redditMetadataItems = tmp(11322).generateEbayMetadataItems(metadata, tmp4.metadataItem);
              const tmpResult14 = tmp(11322);
            } else if (constants.TIKTOK === type) {
              redditMetadataItems = tmp(11322).generateTikTokMetadataItems(metadata, tmp4.metadataItem);
              const tmpResult15 = tmp(11322);
            }
          }
        }
      }
      const twitterMetadataItems = tmp(11322).generateTwitterMetadataItems(metadata, tmp4.metadataItem);
      redditMetadataItems = twitterMetadataItems;
      if ("1" === metadata[MetadataFields.TWITTER_VERIFIED]) {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          value = userId(5759).get(constants.TWITTER);
          cResult[0] = value;
          let first = value;
          const obj7 = userId(5759);
        } else {
          first = cResult[0];
        }
        const color = first.color;
        redditMetadataItems = twitterMetadataItems;
      }
      const tmpResult16 = tmp(11322);
    }
  }
  if (cResult[1] === account) {
    if (cResult[2] === theme) {
      let tmp14 = cResult[3];
      let tmp16 = cResult[5];
    }
    dependencyMap = tmp16;
    if (null != showInvisibleIcon) {
      if (showInvisibleIcon) {
        if (cResult[6] !== tmp4.connectedAccountOpenHide) {
          let obj2 = { style: tmp4.connectedAccountOpenHide, source: userId(11325) };
          const tmp30 = closure_14(tmp(1200).Icon, obj2);
          cResult[6] = tmp4.connectedAccountOpenHide;
          cResult[7] = tmp30;
        }
      }
    }
    if (null != tmp16) {
      if (cResult[8] !== tmp4.connectedAccountOpenLink) {
        const obj3 = { style: tmp4.connectedAccountOpenLink, source: userId(11326) };
        const tmp26 = closure_14(tmp(1200).Icon, obj3);
        cResult[8] = tmp4.connectedAccountOpenLink;
        cResult[9] = tmp26;
      }
    }
    let token = tmp(4778).useToken(userId(587).colors.BACKGROUND_MOD_MUTED, theme);
    const tmpResult17 = tmp(4778);
    if (null != color) {
      theme = constants2.DARK;
    }
    let WHITE = tmp(4778).useToken(userId(587).colors.INTERACTIVE_TEXT_ACTIVE, theme);
    if (null != color) {
      WHITE = userId(587).unsafe_rawColors.WHITE;
      token = color;
    }
    if (cResult[10] === account.verified) {
      if (cResult[11] === tmp4.verifiedCheck) {
        if (cResult[12] === tmp4.verifiedCheckContainer) {
          if (cResult[13] === token) {
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
            if (cResult[18] === undefined) {
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
                    obj1.onConfirm = function onConfirm() { ... };
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
                    obj1.onConfirm = function onConfirm() { ... };
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
                    obj1.onConfirm = function onConfirm() { ... };
                    handleClickResult = obj.handleClick(obj1);
                  }
                  return;
                }
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
              const obj4 = { name: tmp43 };
              const formatToPlainStringResult = obj19.formatToPlainString(tmp(1126).t.OKzaN3, obj4);
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
    let tmp36 = null;
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
            obj1.onConfirm = function onConfirm() { ... };
            handleClickResult = obj.handleClick(obj1);
          }
          return;
        }
      }
      tmp38[0] = tmp4.verifiedCheckContainer;
      const obj5 = { style: tmp4.verifiedCheck, size: tmp(1200).Icon.Sizes.REFRESH_SMALL_16, source: userId(11327), color: token };
      const items = [closure_14(tmp(1200).Icon, obj5), ];
      const obj6 = { style: tmp4.verifiedCheck, size: tmp(1200).Icon.Sizes.REFRESH_SMALL_16, source: userId(11328), color: WHITE };
      items[1] = closure_14(tmp(1200).Icon, obj6);
      tmp38[1] = items;
      tmp36 = closure_15(closure_5, tmp38);
    }
    cResult[10] = account.verified;
    cResult[11] = tmp4.verifiedCheck;
    cResult[12] = tmp4.verifiedCheckContainer;
    cResult[13] = token;
    cResult[14] = WHITE;
    cResult[15] = tmp36;
    const tmpResult18 = tmp(4778);
  }
  let obj = account(576);
  value2 = userId(5759).get(account.type);
  const obj10 = userId(5759);
  const tmpResult19 = account(1414);
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
    if (!tmp18) {
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
          obj1.onConfirm = function onConfirm() { ... };
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
    if (!tmp18) {
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
  const source = tmpResult19.makeSource(tmp19);
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
          obj1.onConfirm = function onConfirm() { ... };
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
  tmp16 = tmp21;
  tmp14 = value2;
  tmpResult20 = account(4929);
}) : (function ConnectedUserAccount(account) {
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
    createdAtDate = account(6862).getCreatedAtDate(metadata[MetadataFields.CREATED_AT], locale);
    let obj2 = account(6862);
  }
  if (showMetadata) {
    const type = account.type;
    if (constants.REDDIT === type) {
      let redditMetadataItems = account(11322).generateRedditMetadataItems(metadata, tmp.metadataItem);
      const obj8 = account(11322);
    } else if (constants.STEAM === type) {
      redditMetadataItems = account(11322).generateSteamMetadataItems(metadata, tmp.metadataItem);
      const obj7 = account(11322);
    } else {
      if (constants.BLUESKY !== type) {
        if (constants.MASTODON !== type) {
          if (constants.TWITTER !== type) {
            if (constants.PAYPAL === type) {
              redditMetadataItems = account(11322).generatePaypalMetadataItems(metadata, tmp.metadataItem);
              const obj4 = account(11322);
            } else if (constants.EBAY === type) {
              redditMetadataItems = account(11322).generateEbayMetadataItems(metadata, tmp.metadataItem);
              const obj3 = account(11322);
            } else if (constants.TIKTOK === type) {
              redditMetadataItems = account(11322).generateTikTokMetadataItems(metadata, tmp.metadataItem);
              const obj30 = account(11322);
            }
          }
        }
      }
      const twitterMetadataItems = account(11322).generateTwitterMetadataItems(metadata, tmp.metadataItem);
      redditMetadataItems = twitterMetadataItems;
      if ("1" === metadata[MetadataFields.TWITTER_VERIFIED]) {
        const color = userId(5759).get(constants.TWITTER).color;
        redditMetadataItems = twitterMetadataItems;
        const obj6 = userId(5759);
      }
      const obj5 = account(11322);
    }
  }
  value = userId(5759).get(account.type);
  dependencyMap = value;
  const obj9 = userId(5759);
  const obj10 = account(1414);
  if (obj11.isThemeDark(theme)) {
    let darkPNG;
    if (!tmp24) {
      darkPNG = value.icon.darkPNG;
    }
    let lightPNG = darkPNG;
  } else if (!tmp24) {
    lightPNG = value.icon.lightPNG;
  }
  platformUserUrl = undefined;
  const source = obj10.makeSource(lightPNG);
  if (value != null) {
    const getPlatformUserUrl = value.getPlatformUserUrl;
    if (getPlatformUserUrl != null) {
      platformUserUrl = getPlatformUserUrl(account);
    }
  }
  if (null != showInvisibleIcon) {
    if (showInvisibleIcon) {
      let obj = { style: tmp.connectedAccountOpenHide, source: userId(11325) };
      let tmp28 = closure_14(tmp23(1200).Icon, obj);
    }
    const token = tmp23(4778).useToken(userId(587).colors.BACKGROUND_MOD_MUTED, theme);
    const tmp23Result = tmp23(4778);
    if (null != color) {
      theme = constants2.DARK;
    }
    let WHITE = tmp23(4778).useToken(userId(587).colors.INTERACTIVE_TEXT_ACTIVE, theme);
    let tmp33 = token;
    if (null != color) {
      WHITE = userId(587).unsafe_rawColors.WHITE;
      tmp33 = color;
    }
    let tmp34 = null;
    if (account.verified) {
      const obj12 = { style: tmp.verifiedCheckContainer, children: null };
      const obj13 = { style: tmp.verifiedCheck, size: tmp23(1200).Icon.Sizes.REFRESH_SMALL_16, source: userId(11327), color: tmp33 };
      const items = [closure_14(tmp23(1200).Icon, obj13), ];
      const obj14 = { style: tmp.verifiedCheck, size: tmp23(1200).Icon.Sizes.REFRESH_SMALL_16, source: userId(11328), color: WHITE };
      items[1] = closure_14(tmp23(1200).Icon, obj14);
      obj12.children = items;
      tmp34 = closure_15(closure_5, obj12);
    }
    const items1 = [account.name];
    let name;
    const callback = platformUserUrl.useCallback(() => {
      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
      ClipboardUtils.copy(account.name);
      const result1 = ToastUtils.presentCopiedToClipboard();
    }, items1);
    if (value != null) {
      name = value.name;
    }
    const items2 = [name, platformUserUrl];
    const items3 = [account.type, platformUserUrl, userId];
    const memo = platformUserUrl.useMemo(() => {
      if (null != platformUserUrl) {
        const intl2 = util.intl;
        let stringResult = intl2.string(util.t.wuRE8M);
      } else {
        const intl = util.intl;
        let str;
        if (_undefined != null) {
          str = _undefined.name;
        }
        if (str == null) {
          str = "";
        }
        const obj = { name: str };
        stringResult = intl.formatToPlainString(util.t.OKzaN3, obj);
      }
      return stringResult;
    }, items2);
    const callback1 = platformUserUrl.useCallback(() => {
      if (null != platformUserUrl) {
        let obj2 = {
          href: tmp,
          trusted: account.type !== constants.DOMAIN,
          onConfirm() {
              account(5105).trackWithMetadata(constants.CONNECTED_ACCOUNT_VIEWED, { platform_type: type.type, other_user_id });
              const obj = account(5105);
              const obj2 = { platform_type: type.type, other_user_id };
              userId(4763).openURL(platformUserUrl);
            }
        };
        MaskedLinkUtils.handleClick(obj2);
      }
    }, items3);
    if (null != platformUserUrl) {
      let PressableOpacity = tmp23(6189).PressableOpacity;
    } else {
      PressableOpacity = closure_4;
    }
    const obj15 = { accessibilityLabel: memo, accessibilityRole: "button", onPress: null, onLongPress: null, children: null };
    let tmp43;
    if (null != platformUserUrl) {
      tmp43 = callback1;
    }
    obj15.onPress = tmp43;
    obj15.onLongPress = callback;
    const obj16 = { style: null, children: null };
    const items4 = [tmp.connectedAccountContainer, style];
    obj16.style = items4;
    const obj17 = { style: tmp.connectedAccount, children: null };
    const obj18 = { size: tmp23(1200).Icon.Sizes.MEDIUM, source, disableColor: true };
    const items5 = [closure_14(tmp23(1200).Icon, obj18), , ];
    const obj20 = { style: tmp.connectedAccountNameContainer, children: null };
    const obj21 = { style: tmp.connectedAccountName, children: null };
    const obj22 = { variant: "text-md/semibold", style: tmp.connectedAccountNameText, children: account.name };
    const items6 = [closure_14(tmp23(5086).Text, obj22), tmp34];
    obj21.children = items6;
    const items7 = [closure_15(closure_5, obj21), , ];
    let tmp42Result = null;
    if (null != createdAtDate) {
      const obj23 = { variant: "heading-deprecated-12/medium", style: tmp.connectedAccountNameCreatedAtText, children: null };
      let intl = tmp23(1126).intl;
      const obj24 = { date: createdAtDate };
      obj23.children = intl.format(tmp23(1126).t["9rfonh"], obj24);
      tmp42Result = closure_14(tmp23(5086).Text, obj23);
    }
    items7[1] = tmp42Result;
    let tmp42Result2 = null;
    if (null != redditMetadataItems) {
      tmp42Result2 = null;
      if (redditMetadataItems.length > 0) {
        const obj25 = { style: tmp.connectedAccountChildren, children: redditMetadataItems };
        tmp42Result2 = closure_14(closure_5, obj25);
      }
    }
    items7[2] = tmp42Result2;
    obj20.children = items7;
    items5[1] = closure_15(closure_5, obj20);
    items5[2] = tmp28;
    obj17.children = items5;
    obj16.children = closure_15(closure_5, obj17);
    obj15.children = closure_14(closure_5, obj16);
    return closure_14(PressableOpacity, obj15);
  }
  tmp28 = null;
  if (null != platformUserUrl) {
    const obj26 = { style: tmp.connectedAccountOpenLink, source: userId(11326) };
    tmp28 = closure_14(tmp23(1200).Icon, obj26);
  }
  obj11 = account(4929);
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectedApplicationUserRoleAccount(applicationRoleConnection) {
  const cResult = applicationRoleConnection(576).c(34);
  applicationRoleConnection = applicationRoleConnection.applicationRoleConnection;
  const style = applicationRoleConnection.style;
  const tmp4 = closure_17();
  closure_1 = tmp4;
  if (cResult[0] !== applicationRoleConnection) {
    const roleConnectionMetadataItems = tmp(11322).generateRoleConnectionMetadataItems(applicationRoleConnection);
    cResult[0] = applicationRoleConnection;
    cResult[1] = roleConnectionMetadataItems;
    let arr = roleConnectionMetadataItems;
    const tmpResult = tmp(11322);
  } else {
    arr = cResult[1];
  }
  if (cResult[2] === style) {
    if (cResult[3] === tmp4.connectedAccountContainer) {
      let tmp6 = cResult[4];
    }
    if (cResult[5] !== applicationRoleConnection.platform_name) {
      let tmp8 = null;
      if (null != applicationRoleConnection.platform_name) {
        let obj2 = { variant: "eyebrow", color: "interactive-text-default", children: applicationRoleConnection.platform_name };
        tmp8 = closure_14(tmp(5086).Text, obj2);
      }
      cResult[5] = applicationRoleConnection.platform_name;
      cResult[6] = tmp8;
      let tmp7 = tmp8;
    } else {
      tmp7 = cResult[6];
    }
    if (cResult[7] !== applicationRoleConnection.platform_username) {
      let tmp11 = null;
      if (null != applicationRoleConnection.platform_username) {
        const obj3 = { variant: "text-md/semibold", color: "interactive-text-active", children: applicationRoleConnection.platform_username };
        tmp11 = closure_14(tmp(5086).Text, obj3);
      }
      cResult[7] = applicationRoleConnection.platform_username;
      cResult[8] = tmp11;
      let tmp10 = tmp11;
    } else {
      tmp10 = cResult[8];
    }
    if (cResult[9] === tmp4.appConnectionNameContainer) {
      if (cResult[10] === tmp10) {
        let tmp13 = cResult[11];
      }
      if (cResult[12] === arr) {
        if (cResult[13] === tmp4.connectedAccountChildren) {
          let tmp17 = cResult[14];
        }
        const _Symbol = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { flexDirection: "row" };
          cResult[15] = obj4;
          let tmp23 = obj4;
        } else {
          tmp23 = cResult[15];
        }
        if (cResult[16] === applicationRoleConnection.application) {
          if (cResult[17] === tmp4.connectedAccountPoweredByAvatar) {
            if (cResult[18] === tmp4.connectedAccountPoweredByText) {
              let tmp25 = cResult[19];
            }
            if (cResult[20] !== tmp25) {
              const obj5 = { variant: "text-xs/normal", color: "text-muted", children: tmp25 };
              const tmp29 = closure_14(tmp(5086).Text, obj5);
              cResult[20] = tmp25;
              cResult[21] = tmp29;
              let tmp27 = tmp29;
            } else {
              tmp27 = cResult[21];
            }
            if (cResult[22] === tmp4.connectedAccountPoweredByContainer) {
              if (cResult[23] === tmp27) {
                let tmp30 = cResult[24];
              }
              const _Symbol2 = Symbol;
              if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                const obj6 = { style: { flexGrow: 1 } };
                const tmp37 = closure_14(closure_5, obj6);
                cResult[25] = tmp37;
                let tmp34 = tmp37;
              } else {
                tmp34 = cResult[25];
              }
              if (cResult[26] !== tmp30) {
                const obj7 = { style: tmp23, children: null };
                let items = [tmp30, tmp34];
                obj7.children = items;
                const tmp41 = closure_15(closure_5, obj7);
                cResult[26] = tmp30;
                cResult[27] = tmp41;
                let tmp38 = tmp41;
              } else {
                tmp38 = cResult[27];
              }
              if (cResult[28] === tmp38) {
                if (cResult[29] === tmp6) {
                  if (cResult[30] === tmp7) {
                    if (cResult[31] === tmp13) {
                      if (cResult[32] === tmp17) {
                        let tmp42 = cResult[33];
                      }
                      return tmp42;
                    }
                  }
                }
              }
              const obj8 = { style: tmp6, children: null };
              const items1 = [tmp7, tmp13, tmp17, tmp38];
              obj8.children = items1;
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
                  const obj = { style: closure_1.connectedAccountPoweredByText, children: null };
                  let tmp5 = null;
                  if (null != applicationRoleConnection.application.bot) {
                    const obj2 = { style: tmp3.connectedAccountPoweredByAvatar, user: null, size: null, guildId: "Array" };
                    const tmp12 = new UserRecord(applicationRoleConnection.application.bot);
                    obj2.user = tmp12;
                    obj2.size = native.AvatarSizes.SIZE_16;
                    tmp5 = state(native.Avatar, obj2);
                  }
                  const items = [tmp5, state(Text_Text.Text, { variant: "text-xs/normal", color: "text-default", children: applicationRoleConnection.application.name })];
                  obj.children = items;
                  return closure_2_15(hasOwnProperty, obj);
                }
        };
        const formatResult = intl.format(tmp(1126).t.zIT9YA, obj10);
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
  let obj = applicationRoleConnection(576);
}) : (function ConnectedApplicationUserRoleAccount(applicationRoleConnection) {
  applicationRoleConnection = applicationRoleConnection.applicationRoleConnection;
  const tmp = closure_17();
  closure_1 = tmp;
  const roleConnectionMetadataItems = applicationRoleConnection(11322).generateRoleConnectionMetadataItems(applicationRoleConnection);
  let obj2 = { style: null, children: null };
  let items = [tmp.connectedAccountContainer, applicationRoleConnection.style];
  obj2.style = items;
  let tmp6 = null;
  if (null != applicationRoleConnection.platform_name) {
    const obj3 = { variant: "eyebrow", color: "interactive-text-default", children: applicationRoleConnection.platform_name };
    tmp6 = closure_14(tmp2(5086).Text, obj3);
  }
  const items1 = [tmp6, , , ];
  const obj4 = { style: tmp.appConnectionNameContainer, children: null };
  let tmp8Result = null;
  if (null != applicationRoleConnection.platform_username) {
    const obj5 = { variant: "text-md/semibold", color: "interactive-text-active", children: applicationRoleConnection.platform_username };
    tmp8Result = closure_14(tmp2(5086).Text, obj5);
  }
  obj4.children = tmp8Result;
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
  const obj7 = { style: { flexDirection: "row" }, children: null };
  const obj8 = { style: tmp.connectedAccountPoweredByContainer, children: null };
  const obj9 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = tmp2(1126).intl;
  obj9.children = intl.format(applicationRoleConnection(1126).t.zIT9YA, {
    applicationHook() {
      const obj = { style: closure_1.connectedAccountPoweredByText, children: null };
      let tmp5 = null;
      if (null != applicationRoleConnection.application.bot) {
        const obj2 = { style: tmp3.connectedAccountPoweredByAvatar, user: null, size: null, guildId: "Array" };
        const tmp12 = new UserRecord(applicationRoleConnection.application.bot);
        obj2.user = tmp12;
        obj2.size = native.AvatarSizes.SIZE_16;
        tmp5 = state(native.Avatar, obj2);
      }
      const items = [tmp5, state(Text_Text.Text, { variant: "text-xs/normal", color: "text-default", children: applicationRoleConnection.application.name })];
      obj.children = items;
      return closure_2_15(hasOwnProperty, obj);
    }
  });
  obj8.children = closure_14(applicationRoleConnection(5086).Text, obj9);
  const items2 = [closure_14(closure_5, obj8), closure_14(closure_5, { style: { flexGrow: 1 } })];
  obj7.children = items2;
  items1[3] = closure_15(closure_5, obj7);
  obj2.children = items1;
  return closure_15(closure_5, obj2);
});
let closure_18 = noop.memo(tmp5);
let closure_19 = noop.memo(tmp6);
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAppplicationRoleConnectionItems(arr, style) {
  _require = style;
  const cResult = require("c").c(11);
  let obj = require("c");
  const tmp = _require;
  const tmp2 = stateFromStores;
  const theme = require("native").useThemeContext().theme;
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
  const obj2 = require("native");
  stateFromStores = tmp(tmp2[35]).useStateFromStores(tmp4, tmp5);
  if (cResult[2] === arr) {
    if (cResult[3] === stateFromStores) {
      if (cResult[4] === style) {
        if (cResult[5] === theme) {
          return cResult[6];
        }
      }
    }
  }
  if (cResult[7] === stateFromStores) {
    if (cResult[8] === style) {
      if (cResult[9] === theme) {
        let tmp8 = cResult[10];
      }
      const mapped = arr.map(tmp8);
      cResult[2] = arr;
      cResult[3] = stateFromStores;
      cResult[4] = style;
      cResult[5] = theme;
      cResult[6] = mapped;
    }
  }
  const fn2 = function p(applicationRoleConnection, arg1) {
    const obj = { children: state(closure_19, { applicationRoleConnection, theme, locale: stateFromStores, style }) };
    return state(noop.Fragment, obj, arg1);
  };
  cResult[7] = stateFromStores;
  cResult[8] = style;
  cResult[9] = theme;
  cResult[10] = fn2;
  tmp8 = fn2;
  const tmpResult = tmp(tmp2[35]);
}) : (function useAppplicationRoleConnectionItems(arr, style) {
  _require = style;
  const theme = require("native").useThemeContext().theme;
  let obj = require("native");
  const items = [LocaleStore];
  dependencyMap = require("initialize").useStateFromStores(items, () => locale2.locale);
  return arr.map((applicationRoleConnection, index) => {
    const obj = { children: state(closure_19, { applicationRoleConnection, theme, locale, style }) };
    return state(noop.Fragment, obj, index);
  });
});
let closure_20 = tmp7;
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConnectedAccountItems(arr, userId, style) {
  _require = userId;
  importDefault = style;
  const cResult = require("c").c(17);
  let obj = require("c");
  theme = require("native").useThemeContext().theme;
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
  const obj2 = require("native");
  const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { forUserProfile: true };
    cResult[2] = obj3;
    let tmp8 = obj3;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = require("initialize");
  const platformAllowed = require("ConnectionsHooks").usePlatformAllowed(tmp8);
  if (cResult[3] === arr) {
    if (cResult[4] === stateFromStores) {
      if (cResult[5] === platformAllowed) {
        if (cResult[6] === style) {
          if (cResult[7] === theme) {
            if (cResult[8] === userId) {
              return cResult[9];
            }
          }
        }
      }
    }
  }
  if (cResult[10] !== platformAllowed) {
    class I {
      constructor(arg0) {
        obj = closure_1(closure_2[16]);
        value = obj.get(arr.type);
        tmp2 = null != value;
        if (tmp2) {
          tmp3 = closure_4;
          tmp2 = closure_4(value);
        }
        return tmp2;
      }
    }
    cResult[10] = platformAllowed;
    cResult[11] = I;
  } else {
    class I {
      constructor(arg0) {
        obj = closure_1(closure_2[16]);
        value = obj.get(arr.type);
        tmp2 = null != value;
        if (tmp2) {
          tmp3 = closure_4;
          tmp2 = closure_4(value);
        }
        return tmp2;
      }
    }
  }
  const found = arr.filter(I);
  if (cResult[12] === stateFromStores) {
    class I {
      constructor(arg0) {
        obj = closure_1(closure_2[16]);
        value = obj.get(arr.type);
        tmp2 = null != value;
        if (tmp2) {
          tmp3 = closure_4;
          tmp2 = closure_4(value);
        }
        return tmp2;
      }
    }
  }
  const fn2 = function f(account, arg1) {
    const obj = { children: state(closure_18, { account, theme, locale: stateFromStores, userId, style }) };
    return state(noop.Fragment, obj, arg1);
  };
  cResult[12] = stateFromStores;
  cResult[13] = style;
  cResult[14] = theme;
  cResult[15] = userId;
  cResult[16] = fn2;
  const tmpResult2 = require("ConnectionsHooks");
}) : (function useConnectedAccountItems(arr, userId, style) {
  _require = userId;
  theme = require("native").useThemeContext().theme;
  let obj = require("native");
  const items = [LocaleStore];
  locale = require("initialize").useStateFromStores(items, () => locale2.locale);
  const obj2 = require("initialize");
  closure_4 = require("ConnectionsHooks").usePlatformAllowed({ forUserProfile: true });
  const found = arr.filter((type) => {
    value = PlatformsDefault.get(type.type);
    let tmp2 = null != value;
    if (tmp2) {
      tmp2 = closure_4(value);
    }
    return tmp2;
  });
  return found.map((account, index) => {
    const obj = { children: state(closure_18, { account, theme, locale, userId, style }) };
    return state(noop.Fragment, obj, index);
  });
});
let closure_21 = tmp8;
let closure_22 = [];
let closure_23 = [];
ReactCompilerGating = fn(558);
let obj7 = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: 8, paddingVertical: 4, marginTop: 12 };
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/LegacyUserProfileConnections.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function LegacyUserProfileConnections(user) {
  const cResult = user(576).c(17);
  user = user.user;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function o() {
      return UserProfileStore.getUserProfile(user.id);
    };
    cResult[1] = user.id;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = user(576);
  const stateFromStores = user(504).useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [StreamerModeStore];
    class A {
      constructor() {
        return closure_1_8.hidePersonalInformation;
      }
    }
    cResult[3] = items1;
    cResult[4] = A;
    let tmp9 = A;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const tmpResult = user(504);
  let prop;
  const stateFromStores1 = user(504).useStateFromStores(tmp8, tmp9);
  if (stateFromStores != null) {
    prop = stateFromStores.applicationRoleConnections;
  }
  if (prop == null) {
    prop = closure_23;
  }
  let connectedAccounts;
  if (stateFromStores != null) {
    connectedAccounts = stateFromStores.connectedAccounts;
  }
  if (cResult[5] !== connectedAccounts) {
    let connectedAccounts1;
    if (stateFromStores != null) {
      connectedAccounts1 = stateFromStores.connectedAccounts;
    }
    const fn2 = function h() {
      let connectedAccounts;
      if (stateFromStores != null) {
        connectedAccounts = stateFromStores.connectedAccounts;
      }
      if (connectedAccounts == null) {
        connectedAccounts = closure_22;
      }
      return connectedAccounts;
    };
    class A {
      constructor() {
        return closure_1_8.hidePersonalInformation;
      }
    }
    cResult[5] = connectedAccounts1;
    cResult[6] = fn2;
    let tmp14 = fn2;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] !== tmp14) {
    const tmp14Result = tmp14();
    cResult[7] = tmp14;
    class A {
      constructor() {
        return closure_1_8.hidePersonalInformation;
      }
    }
    cResult[8] = tmp14Result;
    let arr3 = tmp14Result;
  } else {
    arr3 = cResult[8];
  }
  const arr4 = closure_20(prop);
  const tmp17 = closure_21(arr3, user.id);
  let tmp18 = null;
  if (!stateFromStores1) {
    tmp18 = null;
    if (0 !== arr3.length) {
      if (cResult[9] !== arr4) {
        let tmp20 = null != arr4 && arr4.length > 0;
        if (tmp20) {
          const obj2 = { title: null, showContainer: true, children: null };
          class A {
            constructor() {
              return closure_1_8.hidePersonalInformation;
            }
          }
          const intl = tmp(1126).intl;
          obj2.title = intl.string(tmp(1126).t.PHjkRE);
          obj2.children = arr4;
          tmp20 = closure_14(tmp23, obj2);
        }
        class A {
          constructor() {
            return closure_1_8.hidePersonalInformation;
          }
        }
        cResult[10] = tmp20;
        let tmp19 = tmp20;
      } else {
        tmp19 = cResult[10];
      }
      const _Symbol = Symbol;
      class A {
        constructor() {
          return closure_1_8.hidePersonalInformation;
        }
      }
      if (cResult[12] !== tmp17) {
        const obj3 = { title: null, showContainer: true, children: null };
        class A {
          constructor() {
            return closure_1_8.hidePersonalInformation;
          }
        }
        obj3.children = tmp17;
        const tmp28 = closure_14(stateFromStores(11329), obj3);
        cResult[12] = tmp17;
        cResult[13] = tmp28;
        let tmp25 = tmp28;
      } else {
        tmp25 = cResult[13];
      }
      if (cResult[14] === tmp19) {
      }
      const obj4 = { children: null };
      const items2 = [tmp19, tmp25];
      obj4.children = items2;
      const tmp32 = closure_15(closure_16, obj4);
      cResult[14] = tmp19;
      cResult[15] = tmp25;
      cResult[16] = tmp32;
    }
  }
  return tmp18;
}) : (function LegacyUserProfileConnections(user) {
  user = user.user;
  const items = [UserProfileStore];
  const stateFromStores = user(504).useStateFromStores(items, () => UserProfileStore.getUserProfile(user.id));
  const obj = user(504);
  const items1 = [StreamerModeStore];
  let prop;
  const stateFromStores1 = user(504).useStateFromStores(items1, () => StreamerModeStore.hidePersonalInformation);
  if (stateFromStores != null) {
    prop = stateFromStores.applicationRoleConnections;
  }
  const items2 = [prop];
  let connectedAccounts;
  const memo = noop.useMemo(() => {
    let prop;
    if (stateFromStores != null) {
      prop = stateFromStores.applicationRoleConnections;
    }
    if (prop == null) {
      prop = closure_23;
    }
    return prop;
  }, items2);
  if (stateFromStores != null) {
    connectedAccounts = stateFromStores.connectedAccounts;
  }
  const items3 = [connectedAccounts];
  const memo1 = noop.useMemo(() => {
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
  let tmp17Result = null;
  if (!stateFromStores1) {
    tmp17Result = null;
    if (0 !== memo1.length) {
      let tmp10 = null != arr6;
      if (tmp10) {
        tmp10 = arr6.length > 0;
      }
      if (tmp10) {
        const obj4 = { title: null, showContainer: true, children: null };
        const intl = tmp(1126).intl;
        obj4.title = intl.string(tmp(1126).t.PHjkRE);
        obj4.children = arr6;
        tmp10 = closure_14(stateFromStores(11329), obj4);
        const tmp13 = stateFromStores(11329);
      }
      const obj5 = { children: null };
      const items4 = [tmp10, ];
      const obj6 = { title: null, showContainer: true, children: null };
      const intl2 = tmp(1126).intl;
      obj6.title = intl2.string(tmp(1126).t["3fe7U5"]);
      obj6.children = tmp8;
      items4[1] = closure_14(stateFromStores(11329), obj6);
      obj5.children = items4;
      tmp17Result = closure_15(closure_16, obj5);
      const tmp16 = stateFromStores(11329);
    }
  }
  return tmp17Result;
});
export const ConnectedUserAccount = tmp5;
export const ConnectedApplicationUserRoleAccount = tmp6;
export const useAppplicationRoleConnectionItems = tmp7;
export const useConnectedAccountItems = tmp8;