// discord_app/modules/user_profile/native/UserProfileConnections.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native2 from "../../../design/void/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import shared from "../../../design/shared.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import UserProfileCardDefault from "UserProfileCard.tsx";
import MaskedLinkUtils from "../../../utils/MaskedLinkUtils.tsx";
import ConnectionMetadataVanityItems from "../../connections/native/ConnectionMetadataVanityItems.tsx";
import _modDef11327 from "../../../../_runtime/metro/11327__.js";
import _modDef11328 from "../../../../_runtime/metro/11328__.js";
import useUserProfileApplicationRoleConnectionsDefault from "../hooks/useUserProfileApplicationRoleConnections.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import StreamerModeStore from "../../../stores/StreamerModeStore.tsx";

require = fn;
function generateMetadataForPlatform(arg0) {
  ({ accountType, metadata, style } = arg0);
  if (constants.REDDIT === accountType) {
    return ConnectionMetadataVanityItems.generateRedditMetadataItems(metadata, style);
  } else if (constants.STEAM === accountType) {
    return ConnectionMetadataVanityItems.generateSteamMetadataItems(metadata, style);
  } else {
    if (constants.BLUESKY !== accountType) {
      if (constants.TWITTER !== accountType) {
        if (constants.MASTODON !== accountType) {
          if (constants.PAYPAL === accountType) {
            return ConnectionMetadataVanityItems.generatePaypalMetadataItems(metadata, style);
          } else if (constants.EBAY === accountType) {
            return ConnectionMetadataVanityItems.generateEbayMetadataItems(metadata, style);
          } else if (constants.TIKTOK === accountType) {
            return ConnectionMetadataVanityItems.generateTikTokMetadataItems(metadata, style);
          } else {
            return null;
          }
        }
      }
    }
    return ConnectionMetadataVanityItems.generateTwitterMetadataItems(metadata, style);
  }
}
const View = fn(17).View;
let Constants = fn(6891);
({ CARD_ROWS_ICON_SIZE: closure_7, CARD_ROWS_ICON_SIZE_VARIANT: closure_8, CARD_PADDING } = Constants);
Constants = fn(1085);
({ AnalyticEvents: closure_9, PlatformTypes: c10 } = Constants);
const MetadataFields = fn(6863).MetadataFields;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const REFRESH_SMALL_16 = fn(1200).Icon.Sizes.REFRESH_SMALL_16;
let native = fn(1200);
const iconSize = native.getIconSize(REFRESH_SMALL_16);
const createStyles = fn(5090);
let obj = { cardContainer: { paddingBottom: CARD_PADDING - 12 }, refreshCardTitle: { marginBottom: nativeDefault.space.PX_8 }, connectedAccountName: { flexDirection: "row", alignItems: "center", columnGap: 4 }, linkIcon: { marginEnd: 4 }, connectedAccountNameText: { flexShrink: 1 }, verifiedIconContainer: { height: iconSize, width: iconSize }, verifiedIcon: { position: "absolute", left: 0, top: 0 }, connectionMetadata: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", overflow: "hidden" }, metadataItem: null, poweredByContainer: null, applicationIcon: null };
let obj4 = { paddingBottom: CARD_PADDING - 12 };
let obj5 = { marginBottom: nativeDefault.space.PX_8 };
obj.metadataItem = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.poweredByContainer = { flexDirection: "row", alignItems: "center", marginTop: 6 };
let obj7 = { borderRadius: null };
native = fn(1200);
obj7.borderRadius = native.getIconSize(fn(1200).Icon.Sizes.MEDIUM);
obj.applicationIcon = obj7;
let closure_16 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function VerifiedIcon(arg0) {
  const cResult = c.c(12);
  ({ theme, isTwitterVerifiedAccount } = arg0);
  const tmp5 = closure_16();
  if (cResult[0] !== tmp5.verifiedIcon) {
    const obj2 = { size: REFRESH_SMALL_16, style: tmp5.verifiedIcon };
    cResult[0] = tmp5.verifiedIcon;
    cResult[1] = obj2;
    let tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  let PLATFORM_TWITTER = useToken.useToken(nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, theme);
  if (undefined !== isTwitterVerifiedAccount && isTwitterVerifiedAccount) {
    PLATFORM_TWITTER = nativeDefault.unsafe_rawColors.PLATFORM_TWITTER;
  }
  const tmpResult = useToken;
  if (!tmpResult2.isThemeLight(theme)) {
    if (!tmp4) {
      let WHITE = nativeDefault.unsafe_rawColors.BLACK;
    }
    if (cResult[2] === PLATFORM_TWITTER) {
      if (cResult[3] === tmp6) {
        let tmp9 = cResult[4];
      }
      if (cResult[5] === WHITE) {
        if (cResult[6] === tmp6) {
          let tmp15 = cResult[7];
        }
        if (cResult[8] === tmp5.verifiedIconContainer) {
          if (cResult[9] === tmp9) {
            if (cResult[10] === tmp15) {
              let tmp21 = cResult[11];
            }
            return tmp21;
          }
        }
        const obj3 = { style: tmp5.verifiedIconContainer, children: null };
        const items = [tmp9, tmp15];
        obj3.children = items;
        const tmp24 = __initData2(View, obj3);
        cResult[8] = tmp5.verifiedIconContainer;
        cResult[9] = tmp9;
        cResult[10] = tmp15;
        cResult[11] = tmp24;
        tmp21 = tmp24;
      }
      const obj4 = { source: _modDef11328, color: WHITE };
      const merged = Object.assign(tmp6);
      const tmp20 = __initData(native2.Icon, obj4);
      cResult[5] = WHITE;
      cResult[6] = tmp6;
      cResult[7] = tmp20;
      tmp15 = tmp20;
    }
    const obj5 = { source: _modDef11327, color: PLATFORM_TWITTER };
    const merged1 = Object.assign(tmp6);
    const tmp14 = __initData(native2.Icon, obj5);
    cResult[2] = PLATFORM_TWITTER;
    cResult[3] = tmp6;
    cResult[4] = tmp14;
    tmp9 = tmp14;
  }
  WHITE = nativeDefault.unsafe_rawColors.WHITE;
  tmpResult2 = shared;
}) : (function VerifiedIcon(arg0) {
  ({ theme, isTwitterVerifiedAccount } = arg0);
  if (isTwitterVerifiedAccount === undefined) {
    isTwitterVerifiedAccount = false;
  }
  const tmp = closure_16();
  const obj = { size: REFRESH_SMALL_16, style: tmp.verifiedIcon };
  let PLATFORM_TWITTER = useToken.useToken(nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, theme);
  if (isTwitterVerifiedAccount) {
    PLATFORM_TWITTER = nativeDefault.unsafe_rawColors.PLATFORM_TWITTER;
  }
  if (!tmp2Result.isThemeLight(theme)) {
    if (!isTwitterVerifiedAccount) {
      let WHITE = nativeDefault.unsafe_rawColors.BLACK;
    }
    const obj3 = { style: tmp.verifiedIconContainer, children: null };
    const obj4 = { source: _modDef11327, color: PLATFORM_TWITTER };
    const merged = Object.assign(obj);
    const items = [__initData(native2.Icon, obj4), ];
    const obj5 = { source: _modDef11328, color: WHITE };
    const merged1 = Object.assign(obj);
    items[1] = __initData(native2.Icon, obj5);
    obj3.children = items;
    return __initData2(View, obj3);
  }
  WHITE = nativeDefault.unsafe_rawColors.WHITE;
  tmp2Result = shared;
});
ReactCompilerGating = fn(558);
let closure_19 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function UserAccountConnection(userId) {
  const cResult = userId(trackUserProfileAction[13]).c(65);
  userId = userId.userId;
  const account = userId.account;
  ({ theme, locale, showMetadata } = userId);
  const tmp5 = closure_16();
  let obj = userId(trackUserProfileAction[13]);
  trackUserProfileAction = userId(trackUserProfileAction[18]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmpResult = userId(trackUserProfileAction[18]);
  const token = userId(trackUserProfileAction[14]).useToken(account(tmp2[10]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  const tmp6 = account;
  const tmpResult6 = userId(trackUserProfileAction[14]);
  const token1 = userId(trackUserProfileAction[14]).useToken(account(tmp2[10]).modules.mobile.TABLE_ROW_LABEL_COLOR);
  if (cResult[0] === account.metadata) {
    if (cResult[1] === account.type) {
      if (cResult[2] === locale) {
        if (cResult[3] === tmp4) {
          if (cResult[4] === tmp5.metadataItem) {
            let tmp9 = cResult[5];
            let tmp10 = cResult[6];
            let arr = cResult[7];
          }
          let tmp17 = null != arr;
          if (tmp17) {
            tmp17 = arr.length > 0;
          }
          if (cResult[8] === account) {
            if (cResult[9] === theme) {
              noop = cResult[10];
              let tmp20 = cResult[12];
            }
            closure_4 = tmp20;
            let tmp29 = account.type === constants.TWITTER;
            if (tmp29) {
              tmp29 = "1" === tmp10[MetadataFields.TWITTER_VERIFIED];
            }
            if (cResult[13] === account.type) {
              if (cResult[14] === tmp20) {
                if (cResult[15] === trackUserProfileAction) {
                  if (cResult[18] === account.name) {
                    if (cResult[21] === account.name) {
                      if (cResult[22] === tmp9) {
                        class H {
                          constructor() {
                            tmp = trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
                            obj = closure_0(closure_2[25]);
                            result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
                            obj2 = closure_0(closure_2[26]);
                            copyResult = obj2.copy(account.name);
                            obj3 = closure_0(closure_2[27]);
                            result1 = obj3.presentCopiedToClipboard();
                            return;
                          }
                        }
                        if (cResult[23] === undefined) {
                          let obj8 = cResult[24];
                        }
                        const joined = obj8.join(", ");
                        class D {
                          constructor() {
                            if (null != closure_4) {
                              tmp2 = trackUserProfileAction;
                              tmp3 = trackUserProfileAction({ action: "PRESS_VIEW_CONNECTED_ACCOUNT" });
                              tmp4 = closure_0;
                              tmp5 = closure_2;
                              obj = closure_0(closure_2[22]);
                              obj1 = { href: null, trusted: null, onConfirm: null };
                              obj1.href = tmp;
                              tmp6 = account;
                              tmp7 = PlatformTypes;
                              obj1.trusted = account.type !== PlatformTypes.DOMAIN;
                              obj1.onConfirm = function onConfirm() { ... };
                              handleClickResult = obj.handleClick(obj1);
                            }
                            return;
                          }
                        }
                        if (tmp22 != null) {
                          const name = tmp22.name;
                        }
                        if (cResult[27] === name) {
                          if (cResult[28] === tmp20) {
                            let tmp43 = cResult[29];
                          }
                          if (cResult[30] !== tmp43) {
                            const tmp43Result = tmp43();
                            class H {
                              constructor() {
                                tmp = trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
                                obj = closure_0(closure_2[25]);
                                result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
                                obj2 = closure_0(closure_2[26]);
                                copyResult = obj2.copy(account.name);
                                obj3 = closure_0(closure_2[27]);
                                result1 = obj3.presentCopiedToClipboard();
                                return;
                              }
                            }
                            cResult[31] = tmp43Result;
                          }
                          class H {
                            constructor() {
                              tmp = trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
                              obj = closure_0(closure_2[25]);
                              result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
                              obj2 = closure_0(closure_2[26]);
                              copyResult = obj2.copy(account.name);
                              obj3 = closure_0(closure_2[27]);
                              result1 = obj3.presentCopiedToClipboard();
                              return;
                            }
                          }
                          let obj2 = { variant: token, color: null, style: null, lineClamp: 2, children: null };
                          class D {
                            constructor() {
                              if (null != closure_4) {
                                tmp2 = trackUserProfileAction;
                                tmp3 = trackUserProfileAction({ action: "PRESS_VIEW_CONNECTED_ACCOUNT" });
                                tmp4 = closure_0;
                                tmp5 = closure_2;
                                obj = closure_0(closure_2[22]);
                                obj1 = { href: null, trusted: null, onConfirm: null };
                                obj1.href = tmp;
                                tmp6 = account;
                                tmp7 = PlatformTypes;
                                obj1.trusted = account.type !== PlatformTypes.DOMAIN;
                                obj1.onConfirm = function onConfirm() { ... };
                                handleClickResult = obj.handleClick(obj1);
                              }
                              return;
                            }
                          }
                          obj2.style = tmp5.connectedAccountNameText;
                          obj2.children = account.name;
                          const tmp49 = closure_12(tmp(tmp2[29]).Text, obj2);
                          cResult[32] = account.name;
                          class Y {
                            constructor() {
                              if (null != closure_4) {
                                tmp6 = closure_0;
                                tmp7 = closure_2;
                                intl2 = closure_0(closure_2[28]).intl;
                                tmp8 = closure_0;
                                tmp9 = closure_2;
                                stringResult = intl2.string(closure_0(closure_2[28]).t.wuRE8M);
                              } else {
                                tmp = closure_0;
                                tmp2 = closure_2;
                                intl = closure_0(closure_2[28]).intl;
                                tmp3 = closure_0;
                                tmp4 = closure_2;
                                str = undefined;
                                if (closure_3 != null) {
                                  str = closure_3.name;
                                }
                                if (str == null) {
                                  str = "";
                                }
                                obj = { name: null };
                                obj.name = str;
                                stringResult = intl.formatToPlainString(closure_0(closure_2[28]).t.OKzaN3, obj);
                              }
                              return stringResult;
                            }
                          }
                          cResult[33] = token1;
                          cResult[34] = token;
                          cResult[35] = tmp5.connectedAccountNameText;
                          cResult[36] = tmp49;
                        }
                        let name1;
                        if (tmp22 != null) {
                          name1 = tmp22.name;
                        }
                        class Y {
                          constructor() {
                            if (null != closure_4) {
                              tmp6 = closure_0;
                              tmp7 = closure_2;
                              intl2 = closure_0(closure_2[28]).intl;
                              tmp8 = closure_0;
                              tmp9 = closure_2;
                              stringResult = intl2.string(closure_0(closure_2[28]).t.wuRE8M);
                            } else {
                              tmp = closure_0;
                              tmp2 = closure_2;
                              intl = closure_0(closure_2[28]).intl;
                              tmp3 = closure_0;
                              tmp4 = closure_2;
                              str = undefined;
                              if (closure_3 != null) {
                                str = closure_3.name;
                              }
                              if (str == null) {
                                str = "";
                              }
                              obj = { name: null };
                              obj.name = str;
                              stringResult = intl.formatToPlainString(closure_0(closure_2[28]).t.OKzaN3, obj);
                            }
                            return stringResult;
                          }
                        }
                        cResult[27] = name1;
                        cResult[28] = tmp20;
                        cResult[29] = Y;
                        tmp43 = Y;
                      }
                    }
                    class H {
                      constructor() {
                        tmp = trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
                        obj = closure_0(closure_2[25]);
                        result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
                        obj2 = closure_0(closure_2[26]);
                        copyResult = obj2.copy(account.name);
                        obj3 = closure_0(closure_2[27]);
                        result1 = obj3.presentCopiedToClipboard();
                        return;
                      }
                    }
                    let name2;
                    if (tmp22 != null) {
                      name2 = tmp22.name;
                    }
                    class D {
                      constructor() {
                        if (null != closure_4) {
                          tmp2 = trackUserProfileAction;
                          tmp3 = trackUserProfileAction({ action: "PRESS_VIEW_CONNECTED_ACCOUNT" });
                          tmp4 = closure_0;
                          tmp5 = closure_2;
                          obj = closure_0(closure_2[22]);
                          obj1 = { href: null, trusted: null, onConfirm: null };
                          obj1.href = tmp;
                          tmp6 = account;
                          tmp7 = PlatformTypes;
                          obj1.trusted = account.type !== PlatformTypes.DOMAIN;
                          obj1.onConfirm = function onConfirm() { ... };
                          handleClickResult = obj.handleClick(obj1);
                        }
                        return;
                      }
                    }
                    arr2.push(name2);
                    arr2.push(account.name);
                    if (null == tmp9) {
                      cResult[21] = account.name;
                      class H {
                        constructor() {
                          tmp = trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
                          obj = closure_0(closure_2[25]);
                          result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
                          obj2 = closure_0(closure_2[26]);
                          copyResult = obj2.copy(account.name);
                          obj3 = closure_0(closure_2[27]);
                          result1 = obj3.presentCopiedToClipboard();
                          return;
                        }
                      }
                      cResult[22] = tmp9;
                      let name3;
                      if (tmp22 != null) {
                        name3 = tmp22.name;
                      }
                      class D {
                        constructor() {
                          if (null != closure_4) {
                            tmp2 = trackUserProfileAction;
                            tmp3 = trackUserProfileAction({ action: "PRESS_VIEW_CONNECTED_ACCOUNT" });
                            tmp4 = closure_0;
                            tmp5 = closure_2;
                            obj = closure_0(closure_2[22]);
                            obj1 = { href: null, trusted: null, onConfirm: null };
                            obj1.href = tmp;
                            tmp6 = account;
                            tmp7 = PlatformTypes;
                            obj1.trusted = account.type !== PlatformTypes.DOMAIN;
                            obj1.onConfirm = function onConfirm() { ... };
                            handleClickResult = obj.handleClick(obj1);
                          }
                          return;
                        }
                      }
                      cResult[23] = name3;
                      cResult[24] = arr2;
                      obj8 = arr2;
                    } else {
                      if (cResult[25] !== tmp9) {
                        let intl = tmp(tmp2[28]).intl;
                        class H {
                          constructor() {
                            tmp = trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
                            obj = closure_0(closure_2[25]);
                            result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
                            obj2 = closure_0(closure_2[26]);
                            copyResult = obj2.copy(account.name);
                            obj3 = closure_0(closure_2[27]);
                            result1 = obj3.presentCopiedToClipboard();
                            return;
                          }
                        }
                        tmp38[0] = tmp9;
                        const formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[28]).t["9rfonh"], tmp38);
                        class D {
                          constructor() {
                            if (null != closure_4) {
                              tmp2 = trackUserProfileAction;
                              tmp3 = trackUserProfileAction({ action: "PRESS_VIEW_CONNECTED_ACCOUNT" });
                              tmp4 = closure_0;
                              tmp5 = closure_2;
                              obj = closure_0(closure_2[22]);
                              obj1 = { href: null, trusted: null, onConfirm: null };
                              obj1.href = tmp;
                              tmp6 = account;
                              tmp7 = PlatformTypes;
                              obj1.trusted = account.type !== PlatformTypes.DOMAIN;
                              obj1.onConfirm = function onConfirm() { ... };
                              handleClickResult = obj.handleClick(obj1);
                            }
                            return;
                          }
                        }
                        cResult[26] = formatToPlainStringResult;
                        let tmp37 = formatToPlainStringResult;
                      } else {
                        tmp37 = cResult[26];
                      }
                      arr2.push(tmp37);
                    }
                  }
                  class H {
                    constructor() {
                      tmp = trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
                      obj = closure_0(closure_2[25]);
                      result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
                      obj2 = closure_0(closure_2[26]);
                      copyResult = obj2.copy(account.name);
                      obj3 = closure_0(closure_2[27]);
                      result1 = obj3.presentCopiedToClipboard();
                      return;
                    }
                  }
                  cResult[18] = account.name;
                  class D {
                    constructor() {
                      if (null != closure_4) {
                        tmp2 = trackUserProfileAction;
                        tmp3 = trackUserProfileAction({ action: "PRESS_VIEW_CONNECTED_ACCOUNT" });
                        tmp4 = closure_0;
                        tmp5 = closure_2;
                        obj = closure_0(closure_2[22]);
                        obj1 = { href: null, trusted: null, onConfirm: null };
                        obj1.href = tmp;
                        tmp6 = account;
                        tmp7 = PlatformTypes;
                        obj1.trusted = account.type !== PlatformTypes.DOMAIN;
                        obj1.onConfirm = function onConfirm() { ... };
                        handleClickResult = obj.handleClick(obj1);
                      }
                      return;
                    }
                  }
                  cResult[20] = H;
                }
              }
            }
            class D {
              constructor() {
                if (null != closure_4) {
                  tmp2 = trackUserProfileAction;
                  tmp3 = trackUserProfileAction({ action: "PRESS_VIEW_CONNECTED_ACCOUNT" });
                  tmp4 = closure_0;
                  tmp5 = closure_2;
                  obj = closure_0(closure_2[22]);
                  obj1 = { href: null, trusted: null, onConfirm: null };
                  obj1.href = tmp;
                  tmp6 = account;
                  tmp7 = PlatformTypes;
                  obj1.trusted = account.type !== PlatformTypes.DOMAIN;
                  obj1.onConfirm = function onConfirm() { ... };
                  handleClickResult = obj.handleClick(obj1);
                }
                return;
              }
            }
            cResult[13] = account.type;
            cResult[14] = tmp20;
            cResult[16] = userId;
            cResult[17] = D;
          }
          tmp6(tmp2[20]);
          noop = tmp22;
          tmp(tmp2[15]);
          const source = tmp(tmp2[21]).makeSource(tmp25);
          if (tmp22 != null) {
            const getPlatformUserUrl = tmp22.getPlatformUserUrl;
            class H {
              constructor() {
                tmp = trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
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
          cResult[8] = account;
          cResult[9] = theme;
          cResult[10] = tmp22;
          cResult[11] = source;
          cResult[12] = undefined;
          tmp20 = tmp27;
          const tmpResult8 = tmp(tmp2[21]);
        }
      }
    }
  }
  let metadata = account.metadata;
  if (metadata == null) {
    metadata = {};
  }
  if (undefined === showMetadata || showMetadata) {
    tmp(tmp2[19]);
    class H {
      constructor() {
        tmp = trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
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
  if (undefined === showMetadata || showMetadata) {
    const obj3 = { accountType: null, metadata: null, style: null };
    class H {
      constructor() {
        tmp = trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
        obj = closure_0(closure_2[25]);
        result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
        obj2 = closure_0(closure_2[26]);
        copyResult = obj2.copy(account.name);
        obj3 = closure_0(closure_2[27]);
        result1 = obj3.presentCopiedToClipboard();
        return;
      }
    }
    obj3.metadata = metadata;
    obj3.style = tmp5.metadataItem;
    class D {
      constructor() {
        if (null != closure_4) {
          tmp2 = trackUserProfileAction;
          tmp3 = trackUserProfileAction({ action: "PRESS_VIEW_CONNECTED_ACCOUNT" });
          tmp4 = closure_0;
          tmp5 = closure_2;
          obj = closure_0(closure_2[22]);
          obj1 = { href: null, trusted: null, onConfirm: null };
          obj1.href = tmp;
          tmp6 = account;
          tmp7 = PlatformTypes;
          obj1.trusted = account.type !== PlatformTypes.DOMAIN;
          obj1.onConfirm = function onConfirm() { ... };
          handleClickResult = obj.handleClick(obj1);
        }
        return;
      }
    }
  }
  cResult[0] = account.metadata;
  cResult[1] = account.type;
  cResult[2] = locale;
  cResult[3] = undefined === showMetadata || showMetadata;
  cResult[4] = tmp5.metadataItem;
  cResult[5] = null;
  cResult[6] = metadata;
  cResult[7] = null;
  arr = tmp14;
  tmp10 = metadata;
  tmp9 = tmp11;
  const tmpResult7 = userId(trackUserProfileAction[14]);
}) : (function UserAccountConnection(userId) {
  userId = userId.userId;
  const account = userId.account;
  ({ theme, showMetadata } = userId);
  if (showMetadata === undefined) {
    showMetadata = true;
  }
  let trackUserProfileAction;
  let createdAtDate;
  c4 = undefined;
  let platformUserUrl;
  const tmp = closure_16();
  trackUserProfileAction = userId(trackUserProfileAction[18]).useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj = userId(trackUserProfileAction[18]);
  const token = userId(trackUserProfileAction[14]).useToken(account(trackUserProfileAction[10]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  let obj2 = userId(trackUserProfileAction[14]);
  const tmp4 = account;
  let metadata = account.metadata;
  const token1 = userId(trackUserProfileAction[14]).useToken(account(trackUserProfileAction[10]).modules.mobile.TABLE_ROW_LABEL_COLOR);
  if (metadata == null) {
    metadata = {};
  }
  createdAtDate = null;
  if (showMetadata) {
    createdAtDate = tmp2(tmp3[19]).getCreatedAtDate(metadata[MetadataFields.CREATED_AT], userId.locale);
    const tmp2Result = tmp2(tmp3[19]);
  }
  let tmp9 = null;
  if (showMetadata) {
    const obj4 = { accountType: account.type, metadata, style: tmp.metadataItem };
    tmp9 = generateMetadataForPlatform(obj4);
  }
  let tmp11 = null != tmp9;
  if (tmp11) {
    tmp11 = tmp9.length > 0;
  }
  const obj3 = userId(trackUserProfileAction[14]);
  value = tmp4(trackUserProfileAction[20]).get(account.type);
  c4 = value;
  const tmp4Result = tmp4(trackUserProfileAction[20]);
  const tmp2Result3 = userId(trackUserProfileAction[21]);
  if (tmp2Result4.isThemeDark(theme)) {
    let darkPNG;
    if (!tmp13) {
      darkPNG = value.icon.darkPNG;
    }
    let lightPNG = darkPNG;
  } else if (!tmp13) {
    lightPNG = value.icon.lightPNG;
  }
  platformUserUrl = undefined;
  const source = tmp2Result3.makeSource(lightPNG);
  if (value != null) {
    const getPlatformUserUrl = value.getPlatformUserUrl;
    if (getPlatformUserUrl != null) {
      platformUserUrl = getPlatformUserUrl(account);
    }
  }
  let tmp17 = account.type === constants.TWITTER;
  if (tmp17) {
    tmp17 = "1" === metadata[MetadataFields.TWITTER_VERIFIED];
  }
  let items = [account.type, platformUserUrl, trackUserProfileAction, userId];
  const items1 = [account.name, trackUserProfileAction];
  const callback = createdAtDate.useCallback(() => {
    if (null != platformUserUrl) {
      trackUserProfileAction({ action: "PRESS_VIEW_CONNECTED_ACCOUNT" });
      let obj2 = {
        href: tmp,
        trusted: account.type !== constants.DOMAIN,
        onConfirm() {
            userId(trackUserProfileAction[23]).trackWithMetadata(constants.CONNECTED_ACCOUNT_VIEWED, { platform_type: type.type, other_user_id });
            const obj = userId(trackUserProfileAction[23]);
            const obj2 = { platform_type: type.type, other_user_id };
            account(trackUserProfileAction[24]).openURL(platformUserUrl);
          }
      };
      MaskedLinkUtils.handleClick(obj2);
    }
  }, items);
  const callback1 = createdAtDate.useCallback(() => {
    trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    ClipboardUtils.copy(account.name);
    const result1 = ToastUtils.presentCopiedToClipboard();
  }, items1);
  const items2 = [account.name, createdAtDate, ];
  let name;
  if (value != null) {
    name = value.name;
  }
  items2[2] = name;
  let name1;
  const memo = createdAtDate.useMemo(() => {
    const items = [];
    let str;
    if (_undefined != null) {
      str = _undefined.name;
    }
    if (str == null) {
      str = "";
    }
    items.push(str);
    items.push(account.name);
    if (null != createdAtDate) {
      const intl = util.intl;
      const obj = { date: tmp3 };
      items.push(intl.formatToPlainString(util.t["9rfonh"], obj));
    }
    return items.join(", ");
  }, items2);
  if (value != null) {
    name1 = value.name;
  }
  const items3 = [name1, platformUserUrl];
  const obj5 = { style: tmp.connectedAccountName, children: null };
  const memo1 = createdAtDate.useMemo(() => {
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
  }, items3);
  const items4 = [closure_12(userId(trackUserProfileAction[29]).Text, { variant: token, color: token1, style: tmp.connectedAccountNameText, lineClamp: 2, children: account.name }), ];
  let tmp27Result = null;
  if (account.verified) {
    const obj7 = { theme, isTwitterVerifiedAccount: tmp17 };
    tmp27Result = closure_12(closure_18, obj7);
  }
  items4[1] = tmp27Result;
  obj5.children = items4;
  const obj6 = { variant: token, color: token1, style: tmp.connectedAccountNameText, lineClamp: 2, children: account.name };
  tmp2Result4 = userId(trackUserProfileAction[15]);
  if (null != createdAtDate) {
    let tmp27Result4 = null;
    if (null != createdAtDate) {
      const obj8 = { variant: "text-xs/medium", color: "text-subtle", children: null };
      let intl = tmp2(tmp3[28]).intl;
      const obj9 = { date: createdAtDate };
      obj8.children = intl.format(tmp2(tmp3[28]).t["9rfonh"], obj9);
      tmp27Result4 = closure_12(tmp2(tmp3[29]).Text, obj8);
    }
    const items5 = [tmp27Result4, ];
    let tmp27Result5 = null;
    if (tmp11) {
      const obj11 = { style: tmp.connectionMetadata, children: tmp9 };
      tmp27Result5 = closure_12(tmp26, obj11);
    }
    const obj12 = { children: null };
    items5[1] = tmp27Result5;
    obj12.children = items5;
    const tmp25Result2 = closure_13(closure_14, obj12);
  }
  const obj13 = { label: closure_13(c4, obj5), subLabel: tmp25Result2, icon: closure_12(userId(trackUserProfileAction[30]).BaseIconImage, { size, source }), trailing: null, onPress: null, onLongPress: null, accessibilityLabel: null, accessibilityHint: null, accessibilityRole: "button" };
  let tmp27Result6;
  if (null != platformUserUrl) {
    const obj15 = { size: "sm", style: tmp.linkIcon };
    tmp27Result6 = closure_12(tmp2(tmp3[31]).LinkExternalSmallIcon, obj15);
  }
  obj13.trailing = tmp27Result6;
  let tmp36 = callback1;
  if (null != platformUserUrl) {
    tmp36 = callback;
  }
  obj13.onPress = tmp36;
  obj13.onLongPress = callback1;
  obj13.accessibilityLabel = memo;
  obj13.accessibilityHint = memo1;
  return closure_12(userId(trackUserProfileAction[32]).TableRow, obj13);
}));
ReactCompilerGating = fn(558);
let closure_20 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function UserAccountApplicationConnection(application) {
  const cResult = trackUserProfileAction(576).c(19);
  application = application.application;
  const tmp4 = closure_16();
  let obj = trackUserProfileAction(576);
  trackUserProfileAction = trackUserProfileAction(8290).useUserProfileAnalyticsContext().trackUserProfileAction;
  if (cResult[0] !== application) {
    const iconSource = application.getIconSource(closure_7);
    cResult[0] = application;
    cResult[1] = iconSource;
    let tmp5 = iconSource;
  } else {
    tmp5 = cResult[1];
  }
  const profile = application.identity.profile;
  let str;
  if (profile != null) {
    str = profile.username;
  }
  if (str == null) {
    str = "";
  }
  if (cResult[2] === str) {
    if (cResult[3] === trackUserProfileAction) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] === application.name) {
      if (cResult[6] === str) {
        let obj3 = cResult[7];
      }
      const joined = obj3.join(", ");
      if (cResult[8] !== application.name) {
        const intl = tmp(1126).intl;
        const obj4 = { name: application.name };
        const formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t.OKzaN3, obj4);
        cResult[8] = application.name;
        cResult[9] = formatToPlainStringResult;
        let tmp12 = formatToPlainStringResult;
      } else {
        tmp12 = cResult[9];
      }
      if (cResult[10] === tmp5) {
        if (cResult[11] === tmp4) {
          let tmp14 = cResult[12];
        }
        if (cResult[13] === tmp12) {
          if (cResult[14] === joined) {
            if (cResult[15] === tmp8) {
              if (cResult[16] === str) {
                if (cResult[17] === tmp14) {
                  let tmp18 = cResult[18];
                }
                return tmp18;
              }
            }
          }
        }
        const obj5 = { label: str, icon: tmp14, onPress: tmp8, onLongPress: tmp8, accessibilityLabel: joined, accessibilityHint: tmp12, accessibilityRole: "button" };
        cResult[13] = tmp12;
        cResult[14] = joined;
        cResult[15] = tmp8;
        cResult[16] = str;
        cResult[17] = tmp14;
        class C {
          constructor() {
            tmp = trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
            obj = closure_0(closure_2[25]);
            result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
            obj2 = closure_0(closure_2[26]);
            copyResult = obj2.copy(c1);
            obj3 = closure_0(closure_2[27]);
            result1 = obj3.presentCopiedToClipboard();
            return;
          }
        }
        tmp18 = closure_12(tmp(6184).TableRow, obj5);
        const tmp20 = closure_12(tmp(6184).TableRow, obj5);
      }
      let tmp15;
      if (null != tmp5) {
        const obj6 = { size, source: tmp5, style: tmp4.applicationIcon };
        tmp15 = closure_12(tmp(4777).BaseIconImage, obj6);
      }
      cResult[10] = tmp5;
      cResult[11] = tmp4;
      cResult[12] = tmp15;
      tmp14 = tmp15;
    }
    const items = [];
    items.push(application.name);
    items.push(str);
    cResult[5] = application.name;
    cResult[6] = str;
    cResult[7] = items;
    obj3 = items;
  }
  class C {
    constructor() {
      tmp = trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
      obj = closure_0(closure_2[25]);
      result = obj.triggerHapticFeedback(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT);
      obj2 = closure_0(closure_2[26]);
      copyResult = obj2.copy(c1);
      obj3 = closure_0(closure_2[27]);
      result1 = obj3.presentCopiedToClipboard();
      return;
    }
  }
  cResult[2] = str;
  cResult[3] = trackUserProfileAction;
  cResult[4] = C;
  tmp8 = C;
  let obj2 = trackUserProfileAction(8290);
}) : (function UserAccountApplicationConnection(application) {
  application = application.application;
  let str;
  const tmp = closure_16();
  const trackUserProfileAction = application(str[18]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const iconSource = application.getIconSource(closure_7);
  const profile = application.identity.profile;
  str = undefined;
  if (profile != null) {
    str = profile.username;
  }
  if (str == null) {
    str = "";
  }
  let items = [str, trackUserProfileAction];
  const callback = noop.useCallback(() => {
    trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    ClipboardUtils.copy(str);
    const result1 = ToastUtils.presentCopiedToClipboard();
  }, items);
  const items1 = [application.name, str];
  const items2 = [application.name];
  const memo = noop.useMemo(() => {
    const items = [];
    items.push(application.name);
    items.push(str);
    return items.join(", ");
  }, items1);
  const memo1 = noop.useMemo(() => {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.OKzaN3, { name: application.name });
  }, items2);
  let obj2 = { label: str, icon: null, onPress: null, onLongPress: null, accessibilityLabel: null, accessibilityHint: null, accessibilityRole: "button" };
  let tmp8Result;
  if (null != iconSource) {
    const obj3 = { size, source: iconSource, style: tmp.applicationIcon };
    tmp8Result = closure_12(tmp2(tmp3[30]).BaseIconImage, obj3);
  }
  obj2.icon = tmp8Result;
  obj2.onPress = callback;
  obj2.onLongPress = callback;
  obj2.accessibilityLabel = memo;
  obj2.accessibilityHint = memo1;
  return closure_12(application(str[32]).TableRow, obj2);
}));
ReactCompilerGating = fn(558);
const memoResult = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function UserAccountConnection(applicationRoleConnection) {
  const cResult = c.c(28);
  applicationRoleConnection = applicationRoleConnection.applicationRoleConnection;
  const tmp4 = closure_16();
  if (cResult[0] !== applicationRoleConnection) {
    const roleConnectionMetadataItems = ConnectionMetadataVanityItems.generateRoleConnectionMetadataItems(applicationRoleConnection);
    cResult[0] = applicationRoleConnection;
    cResult[1] = roleConnectionMetadataItems;
    let arr = roleConnectionMetadataItems;
    const tmpResult = ConnectionMetadataVanityItems;
  } else {
    arr = cResult[1];
  }
  if (cResult[2] === applicationRoleConnection.application.icon) {
    if (cResult[3] === applicationRoleConnection.application.id) {
      let tmp6 = cResult[4];
    }
    if (cResult[5] === applicationRoleConnection.platform_name) {
      if (cResult[6] === applicationRoleConnection.platform_username) {
        let tmp8 = cResult[7];
      }
      if (cResult[8] === arr) {
        if (cResult[9] === tmp4.connectionMetadata) {
          let tmp12 = cResult[10];
        }
        if (cResult[11] !== applicationRoleConnection.application.name) {
          const intl = util.intl;
          const obj2 = {
            applicationHook() {
                      return applicationRoleConnection.application.name;
                    }
          };
          const formatResult = intl.format(util.t.zIT9YA, obj2);
          cResult[11] = applicationRoleConnection.application.name;
          cResult[12] = formatResult;
          let tmp17 = formatResult;
        } else {
          tmp17 = cResult[12];
        }
        if (cResult[13] !== tmp17) {
          const obj4 = { variant: "text-xs/medium", color: "text-muted", children: tmp17 };
          const tmp21 = __initData(Text_Text.Text, obj4);
          cResult[13] = tmp17;
          cResult[14] = tmp21;
          let tmp19 = tmp21;
        } else {
          tmp19 = cResult[14];
        }
        if (cResult[15] === tmp4.poweredByContainer) {
          if (cResult[16] === tmp19) {
            let tmp22 = cResult[17];
          }
          if (cResult[18] === tmp8) {
            if (cResult[19] === tmp12) {
              if (cResult[20] === tmp22) {
                let tmp26 = cResult[21];
              }
              let name = applicationRoleConnection.platform_name;
              if (name == null) {
                name = applicationRoleConnection.platform_username;
              }
              if (name == null) {
                name = applicationRoleConnection.application.name;
              }
              if (cResult[22] !== tmp6) {
                const obj5 = { size: native2.Icon.Sizes.MEDIUM, source: tmp6, disableColor: true };
                const tmp33 = __initData(native2.Icon, obj5);
                cResult[22] = tmp6;
                cResult[23] = tmp33;
                let tmp31 = tmp33;
              } else {
                tmp31 = cResult[23];
              }
              if (cResult[24] === tmp26) {
                if (cResult[25] === name) {
                  if (cResult[26] === tmp31) {
                    let tmp34 = cResult[27];
                  }
                  return tmp34;
                }
              }
              const obj6 = { label: name, subLabel: tmp26, icon: tmp31 };
              const tmp36 = __initData(TableRow.TableRow, obj6);
              cResult[24] = tmp26;
              cResult[25] = name;
              cResult[26] = tmp31;
              cResult[27] = tmp36;
              tmp34 = tmp36;
            }
          }
          const obj7 = { children: null };
          const items = [tmp8, tmp12, tmp22];
          obj7.children = items;
          const tmp29 = __initData2(state, obj7);
          cResult[18] = tmp8;
          cResult[19] = tmp12;
          cResult[20] = tmp22;
          cResult[21] = tmp29;
          tmp26 = tmp29;
        }
        const obj8 = { style: tmp4.poweredByContainer, children: tmp19 };
        const tmp25 = __initData(View, obj8);
        cResult[15] = tmp4.poweredByContainer;
        cResult[16] = tmp19;
        cResult[17] = tmp25;
        tmp22 = tmp25;
      }
      let tmp14 = null;
      if (null != arr) {
        tmp14 = null;
        if (arr.length > 0) {
          const obj9 = { style: tmp4.connectionMetadata, children: arr };
          tmp14 = __initData(View, obj9);
        }
      }
      cResult[8] = arr;
      cResult[9] = tmp4.connectionMetadata;
      cResult[10] = tmp14;
      tmp12 = tmp14;
    }
    let tmp10 = null;
    if (null != applicationRoleConnection.platform_name) {
      tmp10 = null;
      if (null != applicationRoleConnection.platform_username) {
        const obj10 = { variant: "text-xs/medium", color: "text-subtle", children: applicationRoleConnection.platform_username };
        tmp10 = __initData(Text_Text.Text, obj10);
      }
    }
    cResult[5] = applicationRoleConnection.platform_name;
    cResult[6] = applicationRoleConnection.platform_username;
    cResult[7] = tmp10;
    tmp8 = tmp10;
  }
  const applicationIconSource = AvatarUtilsDefault.getApplicationIconSource({ id: applicationRoleConnection.application.id, icon: applicationRoleConnection.application.icon });
  cResult[2] = applicationRoleConnection.application.icon;
  cResult[3] = applicationRoleConnection.application.id;
  cResult[4] = applicationIconSource;
  tmp6 = applicationIconSource;
  const obj11 = { id: applicationRoleConnection.application.id, icon: applicationRoleConnection.application.icon };
}) : (function UserAccountConnection(applicationRoleConnection) {
  applicationRoleConnection = applicationRoleConnection.applicationRoleConnection;
  const tmp = closure_16();
  const roleConnectionMetadataItems = ConnectionMetadataVanityItems.generateRoleConnectionMetadataItems(applicationRoleConnection);
  let tmp7 = null;
  const applicationIconSource = AvatarUtilsDefault.getApplicationIconSource({ id: applicationRoleConnection.application.id, icon: applicationRoleConnection.application.icon });
  if (null != applicationRoleConnection.platform_name) {
    tmp7 = null;
    if (null != applicationRoleConnection.platform_username) {
      const obj4 = { variant: "text-xs/medium", color: "text-subtle", children: applicationRoleConnection.platform_username };
      tmp7 = __initData(Text_Text.Text, obj4);
    }
  }
  const items = [tmp7, , ];
  let tmp9 = null;
  if (null != roleConnectionMetadataItems) {
    tmp9 = null;
    if (roleConnectionMetadataItems.length > 0) {
      const obj5 = { style: tmp.connectionMetadata, children: roleConnectionMetadataItems };
      tmp9 = __initData(View, obj5);
    }
  }
  const obj6 = { children: null };
  items[1] = tmp9;
  const obj7 = { style: tmp.poweredByContainer, children: null };
  const obj8 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj8.children = intl.format(util.t.zIT9YA, {
    applicationHook() {
      return applicationRoleConnection.application.name;
    }
  });
  obj7.children = __initData(Text_Text.Text, obj8);
  items[2] = __initData(View, obj7);
  obj6.children = items;
  const obj3 = { id: applicationRoleConnection.application.id, icon: applicationRoleConnection.application.icon };
  const obj9 = {
    applicationHook() {
      return applicationRoleConnection.application.name;
    }
  };
  let name = applicationRoleConnection.platform_name;
  if (name == null) {
    name = applicationRoleConnection.platform_username;
  }
  if (name == null) {
    name = applicationRoleConnection.application.name;
  }
  const obj10 = { label: name, subLabel: __initData2(state, obj6), icon: null };
  const tmp5Result = __initData2(state, obj6);
  obj10.icon = __initData(native2.Icon, { size: native2.Icon.Sizes.MEDIUM, source: applicationIconSource, disableColor: true });
  return __initData(TableRow.TableRow, obj10);
}));
fn(558);
let obj6 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileAccountConnectionsCard(userId) {
  const cResult = userId(stateFromStores[13]).c(25);
  userId = userId.userId;
  const style = userId.style;
  const tmp4 = closure_16();
  const obj = userId(stateFromStores[13]);
  const theme = userId(stateFromStores[33]).useThemeContext().theme;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocaleStore];
    const fn = function c() {
      return locale.locale;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj2 = userId(stateFromStores[33]);
  stateFromStores = userId(stateFromStores[34]).useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [StreamerModeStore];
    class I {
      constructor() {
        return closure_1_6.hidePersonalInformation;
      }
    }
    cResult[2] = items1;
    cResult[3] = I;
    let tmp10 = I;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = userId(stateFromStores[34]);
  const stateFromStores1 = userId(stateFromStores[34]).useStateFromStores(tmp9, tmp10);
  const tmp13 = theme;
  const tmpResult2 = userId(stateFromStores[34]);
  ({ connections, appIdentities } = theme(stateFromStores[35])(userId));
  if (!stateFromStores1) {
    if (cResult[4] === appIdentities) {
      if (cResult[5] === connections) {
        if (cResult[6] === stateFromStores) {
          if (cResult[7] === theme) {
            if (cResult[8] === userId) {
              if (cResult[15] === style) {
                if (cResult[16] === tmp4.cardContainer) {
                  let tmp17 = cResult[17];
                }
                const _Symbol = Symbol;
                class I {
                  constructor() {
                    return closure_1_6.hidePersonalInformation;
                  }
                }
                class M {
                  constructor(arg0) {
                    obj = { account: userId, theme, locale: closure_2, userId };
                    return jsx(closure_19, obj, userId.id);
                  }
                }
                if (cResult[21] === tmp4.refreshCardTitle) {
                  if (cResult[22] === tmp17) {
                    if (cResult[23] === tmp20) {
                      let tmp21 = cResult[24];
                    }
                    return tmp21;
                  }
                }
                const obj3 = { style: tmp17, title: tmp19, titleStyle: tmp4.refreshCardTitle, children: tmp20 };
                const tmp23 = closure_12(tmp13(tmp2[37]), obj3);
                cResult[21] = tmp4.refreshCardTitle;
                cResult[22] = tmp17;
                cResult[23] = tmp20;
                cResult[24] = tmp23;
                tmp21 = tmp23;
              }
              const items2 = [, ];
              class I {
                constructor() {
                  return closure_1_6.hidePersonalInformation;
                }
              }
              class M {
                constructor(arg0) {
                  obj = { account: userId, theme, locale: closure_2, userId };
                  return jsx(closure_19, obj, userId.id);
                }
              }
              cResult[15] = style;
              cResult[16] = tmp4.cardContainer;
              cResult[17] = items2;
              tmp17 = items2;
            }
          }
        }
      }
    }
    class I {
      constructor() {
        return closure_1_6.hidePersonalInformation;
      }
    }
    class M {
      constructor(arg0) {
        obj = { account: userId, theme, locale: closure_2, userId };
        return jsx(closure_19, obj, userId.id);
      }
    }
    cResult[10] = stateFromStores;
    cResult[11] = theme;
    cResult[12] = userId;
    cResult[13] = M;
  }
  return null;
}) : (function UserProfileAccountConnectionsCard(userId) {
  userId = userId.userId;
  const tmp = closure_16();
  const theme = userId(4787).useThemeContext().theme;
  const obj = userId(4787);
  const items = [LocaleStore];
  dependencyMap = userId(504).useStateFromStores(items, () => locale2.locale);
  const obj2 = userId(504);
  const items1 = [StreamerModeStore];
  const stateFromStores = userId(504).useStateFromStores(items1, () => StreamerModeStore.hidePersonalInformation);
  const obj3 = userId(504);
  const tmp5 = theme;
  ({ connections, appIdentities } = theme(13232)(userId));
  if (!stateFromStores) {
    const items2 = [];
    HermesBuiltin.arraySpread(appIdentities.map((application) => {
      const identity = application.identity;
      return closure_1_12(closure_1_20, { identity, application: application.application }, "" + identity.application_id + "-" + identity.provider_issued_user_id);
    }), HermesBuiltin.arraySpread(connections.map((account) => __initData(closure_19, { account, theme, locale, userId }, account.id)), 0));
    const obj4 = { style: null, title: null, titleStyle: null, children: null };
    const items3 = [tmp.cardContainer, userId.style];
    obj4.style = items3;
    const arraySpreadResult = HermesBuiltin.arraySpread(connections.map((account) => __initData(closure_19, { account, theme, locale, userId }, account.id)), 0);
    const intl = tmp2(1126).intl;
    obj4.title = intl.string(tmp2(1126).t["3fe7U5"]);
    obj4.titleStyle = tmp.refreshCardTitle;
    const obj5 = { hasIcons: true, children: items2 };
    obj4.children = closure_12(tmp2(6267).TableRowGroup, obj5);
    return closure_12(tmp5(6890), obj4);
  }
  return null;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConnections.tsx");

export const ApplicationRoleConnection = memoResult;
export const UserProfileAccountConnectionsCard = tmp7;
export const UserProfileApplicationRoleConnectionsCard = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileApplicationRoleConnectionsCard(style) {
  const cResult = c.c(15);
  style = style.style;
  const tmp4 = closure_16();
  const arr = useUserProfileApplicationRoleConnectionsDefault(style.userId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StreamerModeStore];
    const fn = function o() {
      return StreamerModeStore.hidePersonalInformation;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  if (!tmpResult.useStateFromStores(tmp6, tmp7)) {
    if (0 !== arr.length) {
      if (cResult[2] !== arr) {
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function s(applicationRoleConnection) {
            return closure_1_12(closure_1_21, { applicationRoleConnection }, applicationRoleConnection.application.id);
          };
          cResult[4] = fn2;
          let tmp10 = fn2;
        } else {
          tmp10 = cResult[4];
        }
        const mapped = arr.map(tmp10);
        cResult[2] = arr;
        cResult[3] = mapped;
      } else {
        if (cResult[5] === style) {
          if (cResult[6] === tmp4.cardContainer) {
            let tmp13 = cResult[7];
          }
          const _Symbol2 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult = intl.string(util.t.PHjkRE);
            cResult[8] = stringResult;
            let tmp14 = stringResult;
          } else {
            tmp14 = cResult[8];
          }
          if (cResult[9] !== tmp9) {
            const obj2 = { hasIcons: true, children: tmp9 };
            const tmp18 = __initData(TableRowGroup.TableRowGroup, obj2);
            cResult[9] = tmp9;
            cResult[10] = tmp18;
            let tmp16 = tmp18;
          } else {
            tmp16 = cResult[10];
          }
          if (cResult[11] === tmp4.refreshCardTitle) {
            if (cResult[12] === tmp13) {
              if (cResult[13] === tmp16) {
                let tmp19 = cResult[14];
              }
              return tmp19;
            }
          }
          const obj3 = { style: tmp13, title: tmp14, titleStyle: tmp4.refreshCardTitle, children: tmp16 };
          const tmp21 = __initData(UserProfileCardDefault, obj3);
          cResult[11] = tmp4.refreshCardTitle;
          cResult[12] = tmp13;
          cResult[13] = tmp16;
          cResult[14] = tmp21;
          tmp19 = tmp21;
        }
        const items1 = [tmp4.cardContainer, style];
        cResult[5] = style;
        cResult[6] = tmp4.cardContainer;
        cResult[7] = items1;
        tmp13 = items1;
      }
    }
  }
  return null;
}) : (function UserProfileApplicationRoleConnectionsCard(arg0) {
  ({ userId, style } = arg0);
  const tmp = closure_16();
  const arr = useUserProfileApplicationRoleConnectionsDefault(userId);
  const items = [StreamerModeStore];
  if (!obj.useStateFromStores(items, () => StreamerModeStore.hidePersonalInformation)) {
    if (0 !== arr.length) {
      const mapped = arr.map((applicationRoleConnection) => closure_1_12(closure_1_21, { applicationRoleConnection }, applicationRoleConnection.application.id));
      const obj2 = { style: null, title: null, titleStyle: null, children: null };
      const items1 = [tmp.cardContainer, style];
      obj2.style = items1;
      const intl = util.intl;
      obj2.title = intl.string(util.t.PHjkRE);
      obj2.titleStyle = tmp.refreshCardTitle;
      const obj3 = { hasIcons: true, children: mapped };
      obj2.children = __initData(TableRowGroup.TableRowGroup, obj3);
      return __initData(UserProfileCardDefault, obj2);
    }
  }
  return null;
});