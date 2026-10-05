// discord_app/modules/user_profile/native/UserProfileConnections.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import shared from "../../../design/shared.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import TableRow2 from "../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import Constants2 from "../../connections/Constants.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import UserProfileCardDefault from "UserProfileCard.tsx";
import MaskedLinkUtils from "../../../utils/MaskedLinkUtils.tsx";
import ConnectionMetadataVanityItems from "../../connections/native/ConnectionMetadataVanityItems.tsx";
import AssetRegistryDefault from "../../../../_runtime/11197_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../_runtime/11198_AssetRegistry.js";
import useUserProfileApplicationRoleConnectionsDefault from "../hooks/useUserProfileApplicationRoleConnections.tsx";
import react_mod from "../../../../_runtime/00019_react.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import StreamerModeStore from "../../../stores/StreamerModeStore.tsx";
import Constants_mod from "Constants.tsx";
import Constants_mod2 from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import native_mod from "../../../design/void/native.tsx";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let application, copyResult, dependencyMap, handleClickResult, obj1;

let CARD_PADDING;
let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
let metroImportDefault;
let native;
let obj2;
let obj3;
let obj4;
let obj5;
function generateMetadataForPlatform(arg0) {
  let accountType;
  let metadata;
  let style;
  ({ accountType, metadata, style } = arg0);
  if (constants.REDDIT === accountType) {
    const obj6 = ConnectionMetadataVanityItems;
    return obj6.generateRedditMetadataItems(metadata, style);
  } else if (constants.STEAM === accountType) {
    const obj5 = ConnectionMetadataVanityItems;
    return obj5.generateSteamMetadataItems(metadata, style);
  } else {
    if (constants.BLUESKY !== accountType) {
      if (constants.TWITTER !== accountType) {
        if (constants.MASTODON !== accountType) {
          if (constants.PAYPAL === accountType) {
            const obj3 = ConnectionMetadataVanityItems;
            return obj3.generatePaypalMetadataItems(metadata, style);
          } else if (constants.EBAY === accountType) {
            const obj2 = ConnectionMetadataVanityItems;
            return obj2.generateEbayMetadataItems(metadata, style);
          } else if (constants.TIKTOK === accountType) {
            const obj = ConnectionMetadataVanityItems;
            return obj.generateTikTokMetadataItems(metadata, style);
          } else {
            return null;
          }
        }
      }
    }
    const obj4 = ConnectionMetadataVanityItems;
    return obj4.generateTwitterMetadataItems(metadata, style);
  }
}
let react = react_mod;
const View = react_native.View;
let Constants = Constants_mod2;
({ CARD_ROWS_ICON_SIZE: metroImportDefault, CARD_ROWS_ICON_SIZE_VARIANT: metroImportAll, CARD_PADDING } = Constants);
Constants = Constants_mod2;
({ AnalyticEvents: c9, PlatformTypes: c10 } = Constants);
const MetadataFields = Constants2.MetadataFields;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
const REFRESH_SMALL_16 = native.Icon.Sizes.REFRESH_SMALL_16;
native = native_mod;
const iconSize = native.getIconSize(REFRESH_SMALL_16);
let createStyles = createStyles_mod;
let obj = {
  cardContainer: obj2,
  refreshCardTitle: obj3,
  connectedAccountName: { flexDirection: "row", alignItems: "center", columnGap: 4 },
  linkIcon: { marginEnd: 4 },
  connectedAccountNameText: { flexShrink: 1 },
  verifiedIconContainer: { height: iconSize, width: iconSize },
  verifiedIcon: { position: "absolute", left: 0, top: 0 },
  connectionMetadata: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", overflow: "hidden" },
  metadataItem: obj4,
  poweredByContainer: { flexDirection: "row", alignItems: "center", marginTop: 6 },
  applicationIcon: obj5,
};
obj2 = { paddingBottom: CARD_PADDING - 12 };
obj3 = { marginBottom: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj4 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj5 = { borderRadius: native.getIconSize(native.Icon.Sizes.MEDIUM) };
native = native_mod;
let closure_16 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let isTwitterVerifiedAccount;
      let items;
      let theme;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(12);
      ({ theme, isTwitterVerifiedAccount } = arg0);
      const tmp5 = closure_16();
      if (cResult[0] !== tmp5.verifiedIcon) {
        const obj2 = { size: REFRESH_SMALL_16, style: tmp5.verifiedIcon };
        cResult[0] = tmp5.verifiedIcon;
        cResult[1] = obj2;
        tmp6 = obj2;
      } else {
        tmp6 = cResult[1];
      }
      const tmpResult = useToken;
      let PLATFORM_TWITTER = tmpResult.useToken(nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, theme);
      if (undefined !== isTwitterVerifiedAccount && isTwitterVerifiedAccount) {
        PLATFORM_TWITTER = nativeDefault.unsafe_rawColors.PLATFORM_TWITTER;
      }
      const tmpResult2 = shared;
      if (!tmpResult2.isThemeLight(theme)) {
        let WHITE;
        if (!(undefined !== isTwitterVerifiedAccount && isTwitterVerifiedAccount)) {
          WHITE = nativeDefault.unsafe_rawColors.BLACK;
        }
        if (cResult[2] === PLATFORM_TWITTER) {
          let tmp9;
          if (cResult[3] === tmp6) {
            tmp9 = cResult[4];
          }
          if (cResult[5] === WHITE) {
            let tmp15;
            if (cResult[6] === tmp6) {
              tmp15 = cResult[7];
            }
            if (cResult[8] === tmp5.verifiedIconContainer) {
              if (cResult[9] === tmp9) {
                let tmp21;
                if (cResult[10] === tmp15) {
                  tmp21 = cResult[11];
                }
                return tmp21;
              }
            }
            const obj3 = { style: tmp5.verifiedIconContainer, children: items };
            items = [tmp9, tmp15];
            const tmp24 = map1(View, obj3);
            cResult[8] = tmp5.verifiedIconContainer;
            cResult[9] = tmp9;
            cResult[10] = tmp15;
            cResult[11] = tmp24;
            tmp21 = tmp24;
          }
          const obj4 = { source: AssetRegistryDefault2, color: WHITE };
          const Icon2 = native.Icon;
          const merged = Object.assign(tmp6);
          const tmp20 = closure_12(Icon2, obj4);
          cResult[5] = WHITE;
          cResult[6] = tmp6;
          cResult[7] = tmp20;
          tmp15 = tmp20;
        }
        const obj5 = { source: AssetRegistryDefault, color: PLATFORM_TWITTER };
        const Icon = native.Icon;
        const merged1 = Object.assign(tmp6);
        const tmp14 = closure_12(Icon, obj5);
        cResult[2] = PLATFORM_TWITTER;
        cResult[3] = tmp6;
        cResult[4] = tmp14;
        tmp9 = tmp14;
      }
      WHITE = nativeDefault.unsafe_rawColors.WHITE;
    }
  : (arg0) => {
      let isTwitterVerifiedAccount;
      let items;
      let theme;
      ({ theme, isTwitterVerifiedAccount } = arg0);
      if (isTwitterVerifiedAccount === undefined) {
        isTwitterVerifiedAccount = false;
      }
      const tmp = closure_16();
      const obj = { size: REFRESH_SMALL_16, style: tmp.verifiedIcon };
      const obj2 = useToken;
      let PLATFORM_TWITTER = obj2.useToken(nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, theme);
      if (isTwitterVerifiedAccount) {
        PLATFORM_TWITTER = nativeDefault.unsafe_rawColors.PLATFORM_TWITTER;
      }
      const tmp2Result = shared;
      if (!tmp2Result.isThemeLight(theme)) {
        let WHITE;
        if (!isTwitterVerifiedAccount) {
          WHITE = nativeDefault.unsafe_rawColors.BLACK;
        }
        const obj3 = { style: tmp.verifiedIconContainer, children: items };
        const obj4 = { source: AssetRegistryDefault, color: PLATFORM_TWITTER };
        const Icon = native.Icon;
        const merged = Object.assign(obj);
        items = [closure_12(Icon, obj4)];
        const obj5 = { source: AssetRegistryDefault2, color: WHITE };
        const Icon2 = native.Icon;
        const merged1 = Object.assign(obj);
        items[1] = closure_12(Icon2, obj5);
        return map1(View, obj3);
      }
      WHITE = nativeDefault.unsafe_rawColors.WHITE;
    };
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (userId) => {
        let locale;
        let showMetadata;
        let theme;
        let trackUserProfileAction;
        const tmp = userId;
        let obj = userId(trackUserProfileAction[13]);
        const cResult = obj.c(65);
        userId = userId.userId;
        const account = userId.account;
        ({ theme, locale, showMetadata } = userId);
        const tmp5 = closure_16();
        const tmpResult = tmp(trackUserProfileAction[18]);
        trackUserProfileAction = tmpResult.useUserProfileAnalyticsContext().trackUserProfileAction;
        const tmpResult6 = tmp(trackUserProfileAction[14]);
        const token = tmpResult6.useToken(account(tmp2[10]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
        const tmpResult7 = tmp(trackUserProfileAction[14]);
        const token1 = tmpResult7.useToken(account(tmp2[10]).modules.mobile.TABLE_ROW_LABEL_COLOR);
        const tmp6 = account;
        if (cResult[0] === account.metadata) {
          if (cResult[1] === account.type) {
            if (cResult[2] === locale) {
              if (cResult[3] === (undefined === showMetadata || showMetadata)) {
                let tmp9;
                let tmp10;
                if (cResult[4] === tmp5.metadataItem) {
                  tmp9 = cResult[5];
                  tmp10 = cResult[6];
                }
                if (cResult[8] === account) {
                  let tmp20;
                  if (cResult[9] === theme) {
                    react = cResult[10];
                    tmp20 = cResult[12];
                  }
                  let closure_4 = tmp20;
                  let tmp30 = account.type === constants.TWITTER;
                  if (tmp30) {
                    let str = "1";
                    tmp30 = "1" === tmp10[MetadataFields.TWITTER_VERIFIED];
                  }
                  if (cResult[13] === account.type) {
                    if (cResult[14] === tmp20) {
                      if (cResult[15] === trackUserProfileAction) {
                        if (cResult[18] === account.name) {
                          if (cResult[21] === account.name) {
                            if (cResult[22] === tmp9) {
                              let obj7;
                              let name;
                              const tmp34 = cResult[23];
                              class H {
                                constructor() {
                                  tmp = trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
                                  obj = closure_0(closure_2[25]);
                                  result = obj.triggerHapticFeedback(
                                    closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT,
                                  );
                                  obj2 = closure_0(closure_2[26]);
                                  copyResult = obj2.copy(account.name);
                                  obj3 = closure_0(closure_2[27]);
                                  result1 = obj3.presentCopiedToClipboard();
                                  return;
                                }
                              }
                              if (tmp34 === undefined) {
                                obj7 = cResult[24];
                              }
                              const joined = obj7.join(", ");
                              class U {
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
                                    obj1.onConfirm = function onConfirm() {
                                      /* body not rendered: F143014 */
                                    };
                                    handleClickResult = obj.handleClick(obj1);
                                  }
                                  return;
                                }
                              }
                              const tmp45 = cResult[27];
                              if (tmp22 != null) {
                                name = tmp22.name;
                              }
                              if (tmp45 === name) {
                                let tmp46;
                                if (cResult[28] === tmp20) {
                                  tmp46 = cResult[29];
                                }
                                if (cResult[30] !== tmp46) {
                                  const tmp46Result = tmp46();
                                  class H {
                                    constructor() {
                                      tmp = trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
                                      obj = closure_0(closure_2[25]);
                                      result = obj.triggerHapticFeedback(
                                        closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT,
                                      );
                                      obj2 = closure_0(closure_2[26]);
                                      copyResult = obj2.copy(account.name);
                                      obj3 = closure_0(closure_2[27]);
                                      result1 = obj3.presentCopiedToClipboard();
                                      return;
                                    }
                                  }
                                  cResult[31] = tmp46Result;
                                }
                                class H {
                                  constructor() {
                                    tmp = trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
                                    obj = closure_0(closure_2[25]);
                                    result = obj.triggerHapticFeedback(
                                      closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT,
                                    );
                                    obj2 = closure_0(closure_2[26]);
                                    copyResult = obj2.copy(account.name);
                                    obj3 = closure_0(closure_2[27]);
                                    result1 = obj3.presentCopiedToClipboard();
                                    return;
                                  }
                                }
                                let obj2 = {
                                  variant: token,
                                  color: null,
                                  style: tmp5.connectedAccountNameText,
                                  lineClamp: 2,
                                  children: account.name,
                                };
                                class U {
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
                                      obj1.onConfirm = function onConfirm() {
                                        /* body not rendered: F143014 */
                                      };
                                      handleClickResult = obj.handleClick(obj1);
                                    }
                                    return;
                                  }
                                }
                                cResult[32] = account.name;
                                const tmp52 = closure_12(tmp(trackUserProfileAction[29]).Text, obj2);
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
                                      formatToPlainString = intl.formatToPlainString;
                                      str = undefined;
                                      OKzaN3 = closure_0(closure_2[28]).t.OKzaN3;
                                      if (closure_3 != null) {
                                        str = closure_3.name;
                                      }
                                      if (str == null) {
                                        str = "";
                                      }
                                      obj = { name: null };
                                      obj.name = str;
                                      stringResult = formatToPlainString(OKzaN3, obj);
                                    }
                                    return stringResult;
                                  }
                                }
                                cResult[33] = token1;
                                cResult[34] = token;
                                cResult[35] = tmp5.connectedAccountNameText;
                                cResult[36] = tmp52;
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
                                    formatToPlainString = intl.formatToPlainString;
                                    str = undefined;
                                    OKzaN3 = closure_0(closure_2[28]).t.OKzaN3;
                                    if (closure_3 != null) {
                                      str = closure_3.name;
                                    }
                                    if (str == null) {
                                      str = "";
                                    }
                                    obj = { name: null };
                                    obj.name = str;
                                    stringResult = formatToPlainString(OKzaN3, obj);
                                  }
                                  return stringResult;
                                }
                              }
                              cResult[27] = name1;
                              cResult[28] = tmp20;
                              cResult[29] = Y;
                              tmp46 = Y;
                            }
                          }
                          class H {
                            constructor() {
                              tmp = trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
                              obj = closure_0(closure_2[25]);
                              result = obj.triggerHapticFeedback(
                                closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT,
                              );
                              obj2 = closure_0(closure_2[26]);
                              copyResult = obj2.copy(account.name);
                              obj3 = closure_0(closure_2[27]);
                              result1 = obj3.presentCopiedToClipboard();
                              return;
                            }
                          }
                          let name2;
                          const push = arr2.push;
                          if (tmp22 != null) {
                            name2 = tmp22.name;
                          }
                          class U {
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
                                obj1.onConfirm = function onConfirm() {
                                  /* body not rendered: F143014 */
                                };
                                handleClickResult = obj.handleClick(obj1);
                              }
                              return;
                            }
                          }
                          push(name2);
                          arr2.push(account.name);
                          if (null != tmp9) {
                            let tmp39;
                            if (cResult[25] !== tmp9) {
                              let intl = tmp(tmp2[28]).intl;
                              let formatToPlainString = intl.formatToPlainString;
                              class H {
                                constructor() {
                                  tmp = trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
                                  obj = closure_0(closure_2[25]);
                                  result = obj.triggerHapticFeedback(
                                    closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT,
                                  );
                                  obj2 = closure_0(closure_2[26]);
                                  copyResult = obj2.copy(account.name);
                                  obj3 = closure_0(closure_2[27]);
                                  result1 = obj3.presentCopiedToClipboard();
                                  return;
                                }
                              }
                              tmp40[0] = tmp9;
                              const formatToPlainStringResult = formatToPlainString(
                                tmp(trackUserProfileAction[28]).t["9rfonh"],
                                tmp40,
                              );
                              class U {
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
                                    obj1.onConfirm = function onConfirm() {
                                      /* body not rendered: F143014 */
                                    };
                                    handleClickResult = obj.handleClick(obj1);
                                  }
                                  return;
                                }
                              }
                              cResult[26] = formatToPlainStringResult;
                              tmp39 = formatToPlainStringResult;
                            } else {
                              tmp39 = cResult[26];
                            }
                            arr2.push(tmp39);
                          }
                          cResult[21] = account.name;
                          cResult[22] = tmp9;
                          let name3;
                          if (tmp22 != null) {
                            name3 = tmp22.name;
                          }
                          cResult[23] = name3;
                          cResult[24] = arr2;
                          obj7 = arr2;
                        }
                        class H {
                          constructor() {
                            tmp = trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
                            obj = closure_0(closure_2[25]);
                            result = obj.triggerHapticFeedback(
                              closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_LIGHT,
                            );
                            obj2 = closure_0(closure_2[26]);
                            copyResult = obj2.copy(account.name);
                            obj3 = closure_0(closure_2[27]);
                            result1 = obj3.presentCopiedToClipboard();
                            return;
                          }
                        }
                        cResult[18] = account.name;
                        class U {
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
                              obj1.onConfirm = function onConfirm() {
                                /* body not rendered: F143014 */
                              };
                              handleClickResult = obj.handleClick(obj1);
                            }
                            return;
                          }
                        }
                        cResult[20] = H;
                      }
                    }
                  }
                  class U {
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
                        obj1.onConfirm = function onConfirm() {
                          /* body not rendered: F143014 */
                        };
                        handleClickResult = obj.handleClick(obj1);
                      }
                      return;
                    }
                  }
                  cResult[13] = account.type;
                  cResult[14] = tmp20;
                  cResult[16] = userId;
                  cResult[17] = U;
                }
                tmp6(trackUserProfileAction[20]);
                react = tmp22;
                const makeSource = tmp(trackUserProfileAction[21]).makeSource;
                tmp(trackUserProfileAction[21]);
                tmp(trackUserProfileAction[15]);
                const source = makeSource(tmp26);
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
                tmp20 = tmp28;
              }
            }
          }
        }
        let metadata = account.metadata;
        if (metadata == null) {
          metadata = {};
        }
        if (undefined === showMetadata || showMetadata) {
          tmp(trackUserProfileAction[19]);
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
          let obj3 = { accountType: null, metadata, style: tmp5.metadataItem };
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
          class U {
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
                obj1.onConfirm = function onConfirm() {
                  /* body not rendered: F143014 */
                };
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
        tmp10 = metadata;
        tmp9 = tmp11;
      }
    : (userId) => {
        let intl;
        let items4;
        let lightPNG;
        let obj13;
        let obj9;
        let showMetadata;
        let theme;
        let tmp27Result2;
        let tmp29Result6;
        let tmp38;
        let user;
        userId = userId.userId;
        const account = userId.account;
        ({ theme, showMetadata } = userId);
        const locale = userId.locale;
        if (showMetadata === undefined) {
          showMetadata = true;
        }
        let trackUserProfileAction;
        let createdAtDate;
        let c4;
        let platformUserUrl;
        const tmp = closure_16();
        const tmp3 = trackUserProfileAction;
        let obj = userId(trackUserProfileAction[18]);
        trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
        let obj2 = userId(trackUserProfileAction[14]);
        const token = obj2.useToken(account(trackUserProfileAction[10]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
        let obj3 = userId(trackUserProfileAction[14]);
        let metadata = account.metadata;
        const token1 = obj3.useToken(account(trackUserProfileAction[10]).modules.mobile.TABLE_ROW_LABEL_COLOR);
        const tmp4 = account;
        if (metadata == null) {
          metadata = {};
        }
        createdAtDate = null;
        if (showMetadata) {
          const tmp2Result = userId(tmp3[19]);
          createdAtDate = tmp2Result.getCreatedAtDate(metadata[MetadataFields.CREATED_AT], locale);
        }
        let tmp9 = null;
        if (showMetadata) {
          const obj4 = { accountType: account.type, metadata, style: tmp.metadataItem };
          tmp9 = generateMetadataForPlatform(obj4);
        }
        const tmp11 = null != tmp9 && tmp9.length > 0;
        const tmp4Result = tmp4(tmp3[20]);
        const value = tmp4Result.get(account.type);
        c4 = value;
        const makeSource = userId(tmp3[21]).makeSource;
        userId(tmp3[21]);
        const tmp2Result4 = userId(tmp3[15]);
        if (tmp2Result4.isThemeDark(theme)) {
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
        let tmp18 = account.type === constants.TWITTER;
        if (tmp18) {
          let str = "1";
          tmp18 = "1" === metadata[MetadataFields.TWITTER_VERIFIED];
        }
        let items = [account.type, platformUserUrl, trackUserProfileAction, userId];
        const items1 = [account.name, trackUserProfileAction];
        const callback = createdAtDate.useCallback(() => {
          let other_user_id;
          let type;
          if (null != platformUserUrl) {
            trackUserProfileAction({ action: "PRESS_VIEW_CONNECTED_ACCOUNT" });
            let obj = MaskedLinkUtils;
            let obj2 = {
              href: tmp,
              trusted: account.type !== constants.DOMAIN,
              onConfirm() {
                const obj = userId(trackUserProfileAction[23]);
                const obj2 = { platform_type: type.type, other_user_id };
                obj.trackWithMetadata(constants.CONNECTED_ACCOUNT_VIEWED, obj2);
                const obj3 = account(trackUserProfileAction[24]);
                obj3.openURL(platformUserUrl);
              },
            };
            obj.handleClick(obj2);
          }
        }, items);
        const callback1 = createdAtDate.useCallback(() => {
          trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
          const obj = HapticUtils;
          const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
          const obj2 = ClipboardUtils;
          obj2.copy(account.name);
          const obj3 = ToastUtils;
          const result1 = obj3.presentCopiedToClipboard();
        }, items1);
        const items2 = [account.name, createdAtDate];
        let name;
        const useMemo = createdAtDate.useMemo;
        const tmp20 = createdAtDate;
        if (value != null) {
          name = value.name;
        }
        items2[2] = name;
        let name1;
        const memo = useMemo(() => {
          const items = [];
          let str;
          const push = items.push;
          if (user != null) {
            str = user.name;
          }
          if (str == null) {
            str = "";
          }
          push(str);
          items.push(account.name);
          if (null != createdAtDate) {
            const push2 = items.push;
            const intl = intl3.intl;
            const obj = { date: tmp3 };
            push2(intl.formatToPlainString(intl3.t["9rfonh"], obj));
          }
          return items.join(", ");
        }, items2);
        const useMemo2 = tmp20.useMemo;
        if (value != null) {
          name1 = value.name;
        }
        const items3 = [name1, platformUserUrl];
        const obj5 = { style: tmp.connectedAccountName, children: items4 };
        const memo2 = useMemo2(() => {
          let stringResult;
          if (null != platformUserUrl) {
            const intl2 = intl3.intl;
            stringResult = intl2.string(intl3.t.wuRE8M);
          } else {
            const intl = intl3.intl;
            const formatToPlainString = intl.formatToPlainString;
            let str;
            const OKzaN3 = intl3.t.OKzaN3;
            if (user != null) {
              str = user.name;
            }
            if (str == null) {
              str = "";
            }
            const obj = { name: str };
            stringResult = formatToPlainString(OKzaN3, obj);
          }
          return stringResult;
        }, items3);
        items4 = [,];
        const obj6 = {
          variant: token,
          color: token1,
          style: tmp.connectedAccountNameText,
          lineClamp: 2,
          children: account.name,
        };
        items4[0] = closure_12(userId(tmp3[29]).Text, obj6);
        let tmp29Result = null;
        if (account.verified) {
          const obj7 = { theme, isTwitterVerifiedAccount: tmp18 };
          tmp29Result = closure_12(closure_18, obj7);
        }
        items4[1] = tmp29Result;
        const tmp27Result = closure_13(c4, obj5);
        if (null != createdAtDate) {
          let tmp29Result4 = null;
          if (null != createdAtDate) {
            const obj8 = {
              variant: "text-xs/medium",
              color: "text-subtle",
              children: intl.format(userId(tmp3[28]).t["9rfonh"], obj9),
            };
            const Text = tmp2(tmp3[29]).Text;
            intl = tmp2(tmp3[28]).intl;
            obj9 = { date: createdAtDate };
            tmp29Result4 = closure_12(Text, obj8);
          }
          const items5 = [tmp29Result4];
          let tmp29Result5 = null;
          if (tmp11) {
            const obj10 = { style: tmp.connectionMetadata, children: tmp9 };
            tmp29Result5 = closure_12(tmp28, obj10);
          }
          const obj11 = { children: items5 };
          items5[1] = tmp29Result5;
          tmp27Result2 = closure_13(closure_14, obj11);
        }
        const obj12 = {
          label: tmp27Result,
          subLabel: tmp27Result2,
          icon: closure_12(userId(tmp3[30]).BaseIconImage, obj13),
          trailing: tmp29Result6,
          onPress: tmp38,
          onLongPress: callback1,
          accessibilityLabel: memo,
          accessibilityHint: memo2,
          accessibilityRole: "button",
        };
        const TableRow = tmp2(tmp3[32]).TableRow;
        tmp29Result6 = undefined;
        obj13 = { size, source };
        if (null != platformUserUrl) {
          const obj14 = { size: "sm", style: tmp.linkIcon };
          tmp29Result6 = closure_12(tmp2(tmp3[31]).LinkExternalSmallIcon, obj14);
        }
        tmp38 = callback1;
        if (null != platformUserUrl) {
          tmp38 = callback;
        }
        return closure_12(TableRow, obj12);
      },
);
let memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (application) => {
        let tmp5;
        let trackUserProfileAction;
        let obj = trackUserProfileAction(576);
        const cResult = obj.c(19);
        application = application.application;
        const identity = application.identity;
        const tmp4 = closure_16();
        let obj2 = trackUserProfileAction(7861);
        trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
        if (cResult[0] !== application) {
          const iconSource = application.getIconSource(closure_7);
          cResult[0] = application;
          cResult[1] = iconSource;
          tmp5 = iconSource;
        } else {
          tmp5 = cResult[1];
        }
        const profile = identity.profile;
        let str;
        if (profile != null) {
          str = profile.username;
        }
        if (str == null) {
          str = "";
        }
        if (cResult[2] === str) {
          let tmp8;
          if (cResult[3] === trackUserProfileAction) {
            tmp8 = cResult[4];
          }
          if (cResult[5] === application.name) {
            let obj3;
            let tmp12;
            if (cResult[6] === str) {
              obj3 = cResult[7];
            }
            const joined = obj3.join(", ");
            if (cResult[8] !== application.name) {
              const intl = tmp(1126).intl;
              const obj4 = { name: application.name };
              const formatToPlainStringResult = intl.formatToPlainString(trackUserProfileAction(1126).t.OKzaN3, obj4);
              cResult[8] = application.name;
              cResult[9] = formatToPlainStringResult;
              tmp12 = formatToPlainStringResult;
            } else {
              tmp12 = cResult[9];
            }
            if (cResult[10] === tmp5) {
              let tmp14;
              if (cResult[11] === tmp4) {
                tmp14 = cResult[12];
              }
              if (cResult[13] === tmp12) {
                if (cResult[14] === joined) {
                  if (cResult[15] === tmp8) {
                    if (cResult[16] === str) {
                      let tmp18;
                      if (cResult[17] === tmp14) {
                        tmp18 = cResult[18];
                      }
                      return tmp18;
                    }
                  }
                }
              }
              const obj5 = {
                label: str,
                icon: tmp14,
                onPress: tmp8,
                onLongPress: tmp8,
                accessibilityLabel: joined,
                accessibilityHint: tmp12,
                accessibilityRole: "button",
              };
              cResult[13] = tmp12;
              cResult[14] = joined;
              cResult[15] = tmp8;
              cResult[16] = str;
              cResult[17] = tmp14;
              const tmp20 = closure_12(trackUserProfileAction(5993).TableRow, obj5);
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
              tmp18 = tmp20;
            }
            let tmp15;
            if (null != tmp5) {
              const obj6 = { size, source: tmp5, style: tmp4.applicationIcon };
              tmp15 = closure_12(tmp(4579).BaseIconImage, obj6);
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
      }
    : (application) => {
        let tmp8Result;
        application = application.application;
        let str;
        const identity = application.identity;
        const tmp = closure_16();
        let obj = application(str[18]);
        const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
        const iconSource = application.getIconSource(closure_7);
        const profile = identity.profile;
        str = undefined;
        if (profile != null) {
          str = profile.username;
        }
        if (str == null) {
          str = "";
        }
        let items = [str, trackUserProfileAction];
        const callback = react.useCallback(() => {
          trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
          const obj = HapticUtils;
          const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
          const obj2 = ClipboardUtils;
          obj2.copy(str);
          const obj3 = ToastUtils;
          const result1 = obj3.presentCopiedToClipboard();
        }, items);
        const items1 = [application.name, str];
        const items2 = [application.name];
        const memo = react.useMemo(() => {
          const items = [];
          items.push(application.name);
          items.push(str);
          return items.join(", ");
        }, items1);
        const memo1 = react.useMemo(() => {
          const intl = intl3.intl;
          const obj = { name: application.name };
          return intl.formatToPlainString(intl3.t.OKzaN3, obj);
        }, items2);
        let obj2 = {
          label: str,
          icon: tmp8Result,
          onPress: callback,
          onLongPress: callback,
          accessibilityLabel: memo,
          accessibilityHint: memo1,
          accessibilityRole: "button",
        };
        tmp8Result = undefined;
        const TableRow = tmp2(tmp3[32]).TableRow;
        if (null != iconSource) {
          let obj3 = { size, source: iconSource, style: tmp.applicationIcon };
          tmp8Result = closure_12(tmp2(tmp3[30]).BaseIconImage, obj3);
        }
        return closure_12(TableRow, obj2);
      },
);
const memo3 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo3Result = memo3(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (applicationRoleConnection) => {
        let arr;
        let items;
        const obj = react2;
        const cResult = obj.c(28);
        applicationRoleConnection = applicationRoleConnection.applicationRoleConnection;
        const tmp4 = closure_16();
        if (cResult[0] !== applicationRoleConnection) {
          const tmpResult = ConnectionMetadataVanityItems;
          const roleConnectionMetadataItems = tmpResult.generateRoleConnectionMetadataItems(applicationRoleConnection);
          cResult[0] = applicationRoleConnection;
          cResult[1] = roleConnectionMetadataItems;
          arr = roleConnectionMetadataItems;
        } else {
          arr = cResult[1];
        }
        if (cResult[2] === applicationRoleConnection.application.icon) {
          let tmp6;
          if (cResult[3] === applicationRoleConnection.application.id) {
            tmp6 = cResult[4];
          }
          if (cResult[5] === applicationRoleConnection.platform_name) {
            let tmp8;
            if (cResult[6] === applicationRoleConnection.platform_username) {
              tmp8 = cResult[7];
            }
            if (cResult[8] === arr) {
              let tmp12;
              let tmp17;
              let tmp19;
              if (cResult[9] === tmp4.connectionMetadata) {
                tmp12 = cResult[10];
              }
              const poweredByContainer = tmp4.poweredByContainer;
              if (cResult[11] !== applicationRoleConnection.application.name) {
                const intl = intl3.intl;
                const obj2 = {
                  applicationHook() {
                    return applicationRoleConnection.application.name;
                  },
                };
                const formatResult = intl.format(intl3.t.zIT9YA, obj2);
                cResult[11] = applicationRoleConnection.application.name;
                cResult[12] = formatResult;
                tmp17 = formatResult;
              } else {
                tmp17 = cResult[12];
              }
              if (cResult[13] !== tmp17) {
                const obj4 = { variant: "text-xs/medium", color: "text-muted", children: tmp17 };
                const tmp21 = closure_12(Text_Text.Text, obj4);
                cResult[13] = tmp17;
                cResult[14] = tmp21;
                tmp19 = tmp21;
              } else {
                tmp19 = cResult[14];
              }
              if (cResult[15] === tmp4.poweredByContainer) {
                let tmp22;
                if (cResult[16] === tmp19) {
                  tmp22 = cResult[17];
                }
                if (cResult[18] === tmp8) {
                  if (cResult[19] === tmp12) {
                    let tmp26;
                    let tmp31;
                    if (cResult[20] === tmp22) {
                      tmp26 = cResult[21];
                    }
                    let name = applicationRoleConnection.platform_name;
                    if (name == null) {
                      name = applicationRoleConnection.platform_username;
                    }
                    if (name == null) {
                      name = applicationRoleConnection.application.name;
                    }
                    if (cResult[22] !== tmp6) {
                      const obj5 = { size: native.Icon.Sizes.MEDIUM, source: tmp6, disableColor: true };
                      const Icon = native.Icon;
                      const tmp33 = closure_12(Icon, obj5);
                      cResult[22] = tmp6;
                      cResult[23] = tmp33;
                      tmp31 = tmp33;
                    } else {
                      tmp31 = cResult[23];
                    }
                    if (cResult[24] === tmp26) {
                      if (cResult[25] === name) {
                        let tmp34;
                        if (cResult[26] === tmp31) {
                          tmp34 = cResult[27];
                        }
                        return tmp34;
                      }
                    }
                    const obj6 = { label: name, subLabel: tmp26, icon: tmp31 };
                    const tmp36 = closure_12(TableRow2.TableRow, obj6);
                    cResult[24] = tmp26;
                    cResult[25] = name;
                    cResult[26] = tmp31;
                    cResult[27] = tmp36;
                    tmp34 = tmp36;
                  }
                }
                const obj7 = { children: items };
                items = [tmp8, tmp12, tmp22];
                const tmp29 = map1(authStore2, obj7);
                cResult[18] = tmp8;
                cResult[19] = tmp12;
                cResult[20] = tmp22;
                cResult[21] = tmp29;
                tmp26 = tmp29;
              }
              const obj8 = { style: poweredByContainer, children: tmp19 };
              const tmp25 = closure_12(View, obj8);
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
                tmp14 = closure_12(View, obj9);
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
              const obj10 = {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: applicationRoleConnection.platform_username,
              };
              tmp10 = closure_12(Text_Text.Text, obj10);
            }
          }
          cResult[5] = applicationRoleConnection.platform_name;
          cResult[6] = applicationRoleConnection.platform_username;
          cResult[7] = tmp10;
          tmp8 = tmp10;
        }
        const obj11 = {
          id: applicationRoleConnection.application.id,
          icon: applicationRoleConnection.application.icon,
        };
        const obj3 = AvatarUtilsDefault;
        const applicationIconSource = obj3.getApplicationIconSource(obj11);
        cResult[2] = applicationRoleConnection.application.icon;
        cResult[3] = applicationRoleConnection.application.id;
        cResult[4] = applicationIconSource;
        tmp6 = applicationIconSource;
      }
    : (applicationRoleConnection) => {
        let Icon;
        let Text;
        let intl;
        let obj11;
        let obj8;
        let obj9;
        applicationRoleConnection = applicationRoleConnection.applicationRoleConnection;
        const tmp = closure_16();
        const obj = ConnectionMetadataVanityItems;
        const roleConnectionMetadataItems = obj.generateRoleConnectionMetadataItems(applicationRoleConnection);
        let tmp7 = null;
        const obj2 = AvatarUtilsDefault;
        const obj3 = { id: applicationRoleConnection.application.id, icon: applicationRoleConnection.application.icon };
        const applicationIconSource = obj2.getApplicationIconSource(obj3);
        if (null != applicationRoleConnection.platform_name) {
          tmp7 = null;
          if (null != applicationRoleConnection.platform_username) {
            const obj4 = {
              variant: "text-xs/medium",
              color: "text-subtle",
              children: applicationRoleConnection.platform_username,
            };
            tmp7 = closure_12(Text_Text.Text, obj4);
          }
        }
        const items = [tmp7, ,];
        let tmp9 = null;
        if (null != roleConnectionMetadataItems) {
          tmp9 = null;
          if (roleConnectionMetadataItems.length > 0) {
            const obj5 = { style: tmp.connectionMetadata, children: roleConnectionMetadataItems };
            tmp9 = closure_12(View, obj5);
          }
        }
        const obj6 = { children: items };
        items[1] = tmp9;
        const obj7 = { style: tmp.poweredByContainer, children: closure_12(Text, obj8) };
        obj8 = { variant: "text-xs/medium", color: "text-muted", children: intl.format(intl3.t.zIT9YA, obj9) };
        Text = Text_Text.Text;
        intl = intl3.intl;
        obj9 = {
          applicationHook() {
            return applicationRoleConnection.application.name;
          },
        };
        items[2] = closure_12(View, obj7);
        let name = applicationRoleConnection.platform_name;
        const tmp5Result = map1(authStore2, obj6);
        const TableRow = TableRow2.TableRow;
        if (name == null) {
          name = applicationRoleConnection.platform_username;
        }
        if (name == null) {
          name = applicationRoleConnection.application.name;
        }
        const obj10 = { label: name, subLabel: tmp5Result, icon: closure_12(Icon, obj11) };
        obj11 = { size: native.Icon.Sizes.MEDIUM, source: applicationIconSource, disableColor: true };
        Icon = native.Icon;
        return closure_12(TableRow, obj10);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      let appIdentities;
      let connections;
      let locale;
      let stateFromStores;
      let tmp10;
      let tmp5;
      let tmp6;
      let tmp9;
      let obj = userId(stateFromStores[13]);
      const cResult = obj.c(25);
      userId = userId.userId;
      const style = userId.style;
      const tmp4 = closure_16();
      const obj2 = userId(stateFromStores[33]);
      const theme = obj2.useThemeContext().theme;
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
      const tmpResult = userId(stateFromStores[34]);
      stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [StreamerModeStore];
        class I {
          constructor() {
            return StreamerModeStore.hidePersonalInformation;
          }
        }
        cResult[2] = items1;
        cResult[3] = I;
        tmp10 = I;
        tmp9 = items1;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult2 = userId(stateFromStores[34]);
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp10);
      ({ connections, appIdentities } = theme(stateFromStores[35])(userId));
      theme(stateFromStores[35])(userId);
      const tmp13 = theme;
      if (!stateFromStores1) {
        if (cResult[4] === appIdentities) {
          if (cResult[5] === connections) {
            if (cResult[6] === stateFromStores) {
              if (cResult[7] === theme) {
                if (cResult[15] === style) {
                  let tmp17;
                  if (cResult[16] === tmp4.cardContainer) {
                    tmp17 = cResult[17];
                  }
                  const _Symbol = Symbol;
                  class I {
                    constructor() {
                      return StreamerModeStore.hidePersonalInformation;
                    }
                  }
                  class M {
                    constructor(account) {
                      const obj = { account, theme, locale: stateFromStores, userId };
                      return closure_12(closure_19, obj, account.id);
                    }
                  }
                  if (cResult[21] === tmp4.refreshCardTitle) {
                    if (cResult[22] === tmp17) {
                      let tmp21;
                      if (cResult[23] === tmp20) {
                        tmp21 = cResult[24];
                      }
                      return tmp21;
                    }
                  }
                  const obj3 = { style: tmp17, title: tmp19, titleStyle: tmp4.refreshCardTitle, children: tmp20 };
                  const tmp23 = closure_12(tmp13(stateFromStores[37]), obj3);
                  cResult[21] = tmp4.refreshCardTitle;
                  cResult[22] = tmp17;
                  cResult[23] = tmp20;
                  cResult[24] = tmp23;
                  tmp21 = tmp23;
                }
                const items2 = [,];
                class I {
                  constructor() {
                    return StreamerModeStore.hidePersonalInformation;
                  }
                }
                class M {
                  constructor(account) {
                    const obj = { account, theme, locale: stateFromStores, userId };
                    return closure_12(closure_19, obj, account.id);
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
        class I {
          constructor() {
            return StreamerModeStore.hidePersonalInformation;
          }
        }
        class M {
          constructor(account) {
            const obj = { account, theme, locale: stateFromStores, userId };
            return closure_12(closure_19, obj, account.id);
          }
        }
        cResult[10] = stateFromStores;
        cResult[11] = theme;
        cResult[12] = userId;
        cResult[13] = M;
      }
      return null;
    }
  : (userId) => {
      let appIdentities;
      let connections;
      let intl;
      let items3;
      let locale;
      let locale2;
      let obj5;
      userId = userId.userId;
      const style = userId.style;
      const tmp2 = closure_16();
      let obj = userId(4589);
      const theme = obj.useThemeContext().theme;
      const items = [LocaleStore];
      const obj2 = userId(504);
      dependencyMap = obj2.useStateFromStores(items, () => locale2.locale);
      const items1 = [StreamerModeStore];
      const obj3 = userId(504);
      const stateFromStores = obj3.useStateFromStores(items1, () => StreamerModeStore.hidePersonalInformation);
      ({ connections, appIdentities } = theme(12934)(userId));
      theme(12934)(userId);
      const tmp6 = theme;
      if (!stateFromStores) {
        const items2 = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(
          items2,
          connections.map((account) => {
            const obj = { account, theme, locale, userId };
            return closure_12(closure_19, obj, account.id);
          }),
          0,
        );
        HermesBuiltin.arraySpread(
          items2,
          appIdentities.map((application) => {
            const identity = application.identity;
            const obj = { identity, application: application.application };
            return closure_1_12(
              closure_1_20,
              obj,
              "" + identity.application_id + "-" + identity.provider_issued_user_id,
            );
          }),
          arraySpreadResult,
        );
        const obj4 = {
          style: items3,
          title: intl.string(userId(1126).t["3fe7U5"]),
          titleStyle: tmp2.refreshCardTitle,
          children: closure_12(userId(6074).TableRowGroup, obj5),
        };
        items3 = [tmp2.cardContainer, style];
        const tmp6Result = tmp6(6706);
        intl = tmp3(1126).intl;
        obj5 = { hasIcons: true, children: items2 };
        return closure_12(tmp6Result, obj4);
      }
      return null;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (style) => {
      let tmp6;
      let tmp7;
      let obj = react2;
      const cResult = obj.c(15);
      style = style.style;
      const userId = style.userId;
      const tmp4 = closure_16();
      const arr = useUserProfileApplicationRoleConnectionsDefault(userId);
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
      const tmpResult = get_initialized;
      if (!tmpResult.useStateFromStores(tmp6, tmp7)) {
        if (0 !== arr.length) {
          let tmp9;
          if (cResult[2] !== arr) {
            let tmp10;
            const _Symbol = Symbol;
            if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
              const fn2 = function s(applicationRoleConnection) {
                const obj = { applicationRoleConnection };
                return closure_1_12(closure_1_21, obj, applicationRoleConnection.application.id);
              };
              cResult[4] = fn2;
              tmp10 = fn2;
            } else {
              tmp10 = cResult[4];
            }
            const mapped = arr.map(tmp10);
            cResult[2] = arr;
            cResult[3] = mapped;
            tmp9 = mapped;
          } else {
            tmp9 = cResult[3];
          }
          if (cResult[5] === style) {
            let tmp12;
            let tmp13;
            let tmp15;
            if (cResult[6] === tmp4.cardContainer) {
              tmp12 = cResult[7];
            }
            const _Symbol2 = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = intl3.intl;
              const stringResult = intl.string(intl3.t.PHjkRE);
              cResult[8] = stringResult;
              tmp13 = stringResult;
            } else {
              tmp13 = cResult[8];
            }
            if (cResult[9] !== tmp9) {
              const obj2 = { hasIcons: true, children: tmp9 };
              const tmp17 = closure_12(TableRowGroup.TableRowGroup, obj2);
              cResult[9] = tmp9;
              cResult[10] = tmp17;
              tmp15 = tmp17;
            } else {
              tmp15 = cResult[10];
            }
            if (cResult[11] === tmp4.refreshCardTitle) {
              if (cResult[12] === tmp12) {
                let tmp18;
                if (cResult[13] === tmp15) {
                  tmp18 = cResult[14];
                }
                return tmp18;
              }
            }
            const obj3 = { style: tmp12, title: tmp13, titleStyle: tmp4.refreshCardTitle, children: tmp15 };
            const tmp20 = closure_12(UserProfileCardDefault, obj3);
            cResult[11] = tmp4.refreshCardTitle;
            cResult[12] = tmp12;
            cResult[13] = tmp15;
            cResult[14] = tmp20;
            tmp18 = tmp20;
          }
          const items1 = [tmp4.cardContainer, style];
          cResult[5] = style;
          cResult[6] = tmp4.cardContainer;
          cResult[7] = items1;
          tmp12 = items1;
        }
      }
      return null;
    }
  : (arg0) => {
      let intl;
      let items1;
      let obj3;
      let style;
      let userId;
      ({ userId, style } = arg0);
      const tmp = closure_16();
      const arr = useUserProfileApplicationRoleConnectionsDefault(userId);
      let obj = get_initialized;
      const items = [StreamerModeStore];
      if (!obj.useStateFromStores(items, () => StreamerModeStore.hidePersonalInformation)) {
        if (0 !== arr.length) {
          const mapped = arr.map((applicationRoleConnection) => {
            const obj = { applicationRoleConnection };
            return closure_1_12(closure_1_21, obj, applicationRoleConnection.application.id);
          });
          const obj2 = {
            style: items1,
            title: intl.string(intl3.t.PHjkRE),
            titleStyle: tmp.refreshCardTitle,
            children: closure_12(TableRowGroup.TableRowGroup, obj3),
          };
          items1 = [tmp.cardContainer, style];
          const tmp2Result = UserProfileCardDefault;
          intl = intl3.intl;
          obj3 = { hasIcons: true, children: mapped };
          return closure_12(tmp2Result, obj2);
        }
      }
      return null;
    };
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConnections.tsx");

export const ApplicationRoleConnection = memo3Result;
export const UserProfileAccountConnectionsCard = tmp9;
export const UserProfileApplicationRoleConnectionsCard = tmp10;
