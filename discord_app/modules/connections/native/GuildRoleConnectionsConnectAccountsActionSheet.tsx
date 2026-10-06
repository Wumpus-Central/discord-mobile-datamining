// === Module 11192: GuildRoleConnectionsConnectAccountsActionSheet ===

// Module 11192 (GuildRoleConnectionsConnectAccountsActionSheet)
import _modDef12 from "module_12" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import nativeDefault from "native" /* 587 */;
import intl14 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import shared from "shared" /* 4735 */;
import useThemeDefault from "useTheme" /* 4797 */;
import AssetRegistryDefault from "AssetRegistry" /* 4817 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import useChannelNameDefault from "useChannelName" /* 5049 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5076 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import PlatformsDefault from "Platforms" /* 5449 */;
import useMountEffectDefault from "useMountEffect" /* 5597 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5712 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5819 */;
import ConnectedAccountsActionCreatorsDefault from "ConnectedAccountsActionCreators" /* 6684 */;
import ConnectionsUtils from "ConnectionsUtils" /* 6685 */;
import getConnectionsRolesDefault from "getConnectionsRoles" /* 6687 */;
import openUserSettings from "openUserSettings" /* 6895 */;
import BotTagDefault from "BotTag" /* 8990 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11194 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11195 */;
import ConnectionsRoleActionCreators from "ConnectionsRoleActionCreators" /* 11203 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 6609 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import UserRecord from "UserRecord" /* 1391 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore_mod from "ChannelStore" /* 2051 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5447 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import Constants_mod from "Constants" /* 6686 */;
import Constants_mod2 from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, account, c0, importDefault, obj1, onPlatformConnect, tmp7Result;

let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
let size;
let size1;
let size2;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ActivityIndicator: metroRequire, Pressable: metroImportDefault, View: metroImportAll } = react_native);
let ChannelStore = ChannelStore_mod;
let Constants = Constants_mod2;
({ MetadataFields: closure_17, OperatorTypes: closure_18, GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE: closure_19, GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE: closure_20 } = Constants);
Constants = Constants_mod2;
({ PlatformTypes: closure_21, UserSettingsSections: closure_22, AnalyticEvents: closure_23, MarketingURLs: closure_24, FRIEND_SYNC_PLATFORM_TYPES: closure_25, ACTIVITY_PLATFORM_TYPES: closure_26, Permissions: closure_27, EMPTY_STRING_SNOWFLAKE_ID: closure_28 } = Constants);
({ jsx: closure_29, jsxs: closure_30, Fragment: closure_31 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { padding: 12 }, connectionsChecksGroups: { marginTop: 16, flexDirection: "column" }, connectionsChecksGroup: obj2, connectionsChecksGroupPassed: obj3, connectionsChecksGroupPlatformDisabled: obj4, connectionsChecksGroupRequirementsNotMet: rect, connectionsChecksGroupTextContainer: { flex: 1 }, connectionsChecksGroupTextNameContainer: { flexDirection: "row", alignItems: "center" }, connectionsChecksGroupTextNameInfoIcon: obj5, connectionsChecksGroupCheckmark: size, connectionsChecksGroupCaret: size1, connectionsCheck: { marginTop: 4 }, platformIcon: { width: 24, height: 24, marginRight: 12 }, channelName: { flexDirection: "row", alignItems: "center", marginBottom: 4 }, channelNameIcon: size2, channelNameText: { overflow: "hidden" }, header: { flexDirection: "row", width: "100%", alignItems: "center", marginBottom: 8 }, content: { width: "100%" }, footerText: { marginBottom: 16 }, accountConnectedContainer: { flexDirection: "column", alignItems: "flex-start", marginVertical: 24 }, accountConnectedPreview: { width: "100%" }, accountConnectedPreviewConnectedUserAccount: obj6, accountConnectedPrivacy: { marginTop: 16, width: "100%" }, accountConnectedPrivacyOptionsContainer: obj7, roleGranted: obj8, roleGrantedName: { overflow: "hidden", marginRight: 24 }, verifiedIcon: { marginRight: 8 }, channelsGranted: obj9, manageConnectionsButton: { marginTop: 8 }, loading: { marginTop: 24, marginBottom: 32, alignSelf: "center" }, appIcon: { marginRight: 8 }, botTag: { marginLeft: 4 } };
obj2 = { flexDirection: "row", borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 2, borderRadius: nativeDefault.radii.md, paddingHorizontal: 16, paddingVertical: 20, marginBottom: 16, width: "100%", alignItems: "center", position: "relative" };
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj4 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
rect = { paddingVertical: 4, paddingHorizontal: 12, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, position: "absolute", top: -8, right: 20 };
obj5 = { marginLeft: 4, tintColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
size = { tintColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE, width: 24, height: 24 };
size1 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: 24, height: 24 };
size2 = { tintColor: nativeDefault.colors.TEXT_MUTED, marginRight: 8, width: 24, height: 24 };
obj6 = { marginTop: 8, borderRadius: nativeDefault.radii.xs, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj7 = { marginTop: 8, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.xs, padding: 8, flexDirection: "column" };
obj8 = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingVertical: 12, paddingHorizontal: 8, borderTopStartRadius: 4, borderTopEndRadius: 4, marginTop: 16 };
obj9 = { flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, padding: 16, borderBottomStartRadius: 4, borderBottomEndRadius: 4, marginBottom: 24 };
const __initData2 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_33 = ReactCompilerGating.isReactCompilerEnabled() ? ((platformType) => {
  const obj = react2;
  const cResult = obj.c(6);
  platformType = platformType.platformType;
  const tmp4 = closure_32();
  const tmp6 = useThemeDefault();
  if (cResult[0] === platformType) {
    let tmp7;
    if (cResult[1] === tmp6) {
      tmp7 = cResult[2];
    }
    if (cResult[3] === tmp7) {
      let tmp11;
      if (cResult[4] === tmp4.platformIcon) {
        tmp11 = cResult[5];
      }
      return tmp11;
    }
    const obj2 = { source: tmp7, style: tmp4.platformIcon, disableColor: true };
    const tmp13 = set(native.Icon, obj2);
    cResult[3] = tmp7;
    cResult[4] = tmp4.platformIcon;
    cResult[5] = tmp13;
    tmp11 = tmp13;
  }
  const tmp5Result = PlatformsDefault;
  const value = tmp5Result.get(platformType);
  const makeSource = AvatarUtils.makeSource;
  AvatarUtils;
  const icon = value.icon;
  const tmpResult2 = shared;
  const source = makeSource(tmpResult2.isThemeLight(tmp6) ? icon.lightPNG : icon.darkPNG);
  cResult[0] = platformType;
  cResult[1] = tmp6;
  cResult[2] = source;
  tmp7 = source;
}) : ((platformType) => {
  platformType = platformType.platformType;
  const tmp = closure_32();
  const tmp3 = useThemeDefault();
  const obj = PlatformsDefault;
  const value = obj.get(platformType);
  const makeSource = AvatarUtils.makeSource;
  AvatarUtils;
  const icon = value.icon;
  const obj2 = shared;
  const source = makeSource(obj2.isThemeLight(tmp3) ? icon.lightPNG : icon.darkPNG);
  const obj3 = { source, style: tmp.platformIcon, disableColor: true };
  return set(native.Icon, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let items;
  let style;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(15);
  ({ channel, style } = arg0);
  const tmp4 = closure_32();
  if (cResult[0] !== channel) {
    const tmpResult = utils_ChannelUtils;
    const channelIcon = tmpResult.getChannelIcon(channel);
    cResult[0] = channel;
    cResult[1] = channelIcon;
    tmp5 = channelIcon;
  } else {
    tmp5 = cResult[1];
  }
  const tmp7 = useChannelNameDefault(channel);
  if (cResult[2] === style) {
    let tmp8;
    if (cResult[3] === tmp4.channelName) {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp5) {
      let tmp9;
      if (cResult[6] === tmp4.channelNameIcon) {
        tmp9 = cResult[7];
      }
      if (cResult[8] === tmp7) {
        let tmp12;
        if (cResult[9] === tmp4.channelNameText) {
          tmp12 = cResult[10];
        }
        if (cResult[11] === tmp8) {
          if (cResult[12] === tmp9) {
            let tmp15;
            if (cResult[13] === tmp12) {
              tmp15 = cResult[14];
            }
            return tmp15;
          }
        }
        const obj2 = { style: tmp8, children: items };
        items = [tmp9, tmp12];
        const tmp18 = __initData(metroImportAll, obj2);
        cResult[11] = tmp8;
        cResult[12] = tmp9;
        cResult[13] = tmp12;
        cResult[14] = tmp18;
        tmp15 = tmp18;
      }
      const obj3 = { variant: "heading-lg/semibold", color: "text-default", style: tmp4.channelNameText, lineClamp: 1, children: tmp7 };
      const tmp14 = set(Text_Text.Text, obj3);
      cResult[8] = tmp7;
      cResult[9] = tmp4.channelNameText;
      cResult[10] = tmp14;
      tmp12 = tmp14;
    }
    let tmp10 = null;
    if (null != tmp5) {
      const obj4 = { source: tmp5, style: tmp4.channelNameIcon };
      tmp10 = set(native.Icon, obj4);
    }
    cResult[5] = tmp5;
    cResult[6] = tmp4.channelNameIcon;
    cResult[7] = tmp10;
    tmp9 = tmp10;
  }
  const items1 = [tmp4.channelName, style];
  cResult[2] = style;
  cResult[3] = tmp4.channelName;
  cResult[4] = items1;
  tmp8 = items1;
}) : ((channel) => {
  let items;
  let items1;
  channel = channel.channel;
  const style = channel.style;
  const tmp = closure_32();
  const obj = utils_ChannelUtils;
  const channelIcon = obj.getChannelIcon(channel);
  const obj2 = { style: items, children: items1 };
  items = [tmp.channelName, style];
  let tmp8 = null;
  const tmp5 = useChannelNameDefault(channel);
  if (null != channelIcon) {
    const obj3 = { source: channelIcon, style: tmp.channelNameIcon };
    tmp8 = set(native.Icon, obj3);
  }
  items1 = [tmp8, ];
  const obj4 = { variant: "heading-lg/semibold", color: "text-default", style: tmp.channelNameText, lineClamp: 1, children: tmp5 };
  items1[1] = set(Text_Text.Text, obj4);
  return __initData(metroImportAll, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_35 = ReactCompilerGating.isReactCompilerEnabled() ? ((result) => {
  let connectionMetadataField;
  let connectionType;
  let description;
  let operator;
  let value;
  const obj = react2;
  const cResult = obj.c(16);
  ({ connectionType, connectionMetadataField, operator, value, description } = result);
  result = result.result;
  const tmp4 = closure_32();
  if (connectionType === closure_20) {
    return null;
  } else {
    let tmp10;
    if (null != description) {
      if (constants2.LESS_THAN === operator) {
        if (cResult[0] === description) {
          let tmp17;
          if (cResult[1] === value) {
            tmp17 = cResult[2];
          }
          tmp10 = tmp17;
        }
        const intl2 = intl14.intl;
        const format2 = intl2.format;
        const _Math2 = Math;
        const _Number2 = Number;
        const obj2 = { description, count: Math.max(0, Number(value) - 1) };
        const v2p7dA3 = intl14.t["2p7dA3"];
        const format2Result = format2(v2p7dA3, obj2);
        cResult[0] = description;
        cResult[1] = value;
        cResult[2] = format2Result;
        tmp17 = format2Result;
      } else {
        tmp10 = description;
        if (tmp12.GREATER_THAN === operator) {
          if (cResult[3] === description) {
            let tmp13;
            if (cResult[4] === value) {
              tmp13 = cResult[5];
            }
            tmp10 = tmp13;
          }
          const intl = intl14.intl;
          const format = intl.format;
          const _Math = Math;
          const _Number = Number;
          const obj3 = { description, count: Math.max(0, Number(value) + 1) };
          const v2p7dA31 = intl14.t["2p7dA3"];
          const formatResult = format(v2p7dA31, obj3);
          cResult[3] = description;
          cResult[4] = value;
          cResult[5] = formatResult;
          tmp13 = formatResult;
        }
      }
    } else {
      let dcSDhW;
      if (constants2.EQUAL === operator) {
        let tmp8 = connectionType === constants3.PAYPAL;
        const v0BlpbA = intl14.t["0BlpbA"];
        if (tmp8) {
          tmp8 = connectionMetadataField === constants.PAYPAL_VERIFIED;
        }
        dcSDhW = v0BlpbA;
        if (tmp8) {
          dcSDhW = intl14.t.dcSDhW;
        }
      } else if (constants2.NOT_EQUAL === operator) {
        dcSDhW = intl14.t.otcpTN;
      } else if (constants2.LESS_THAN === operator) {
        dcSDhW = intl14.t.Ef35xs;
      } else if (constants2.GREATER_THAN === operator) {
        dcSDhW = intl14.t["8W9OXU"];
      } else {
        return null;
      }
      if (cResult[6] === connectionMetadataField) {
        if (cResult[7] === connectionType) {
          if (cResult[8] === operator) {
            if (cResult[9] === dcSDhW) {
              if (cResult[10] === value) {
                tmp10 = cResult[11];
              }
            }
          }
        }
      }
      const obj4 = { connectionType, connectionMetadataField, operator, operatorText: dcSDhW, value };
      const tmpResult = ConnectionsUtils;
      const connectionsCheckText = tmpResult.getConnectionsCheckText(obj4);
      cResult[6] = connectionMetadataField;
      cResult[7] = connectionType;
      cResult[8] = operator;
      cResult[9] = dcSDhW;
      cResult[10] = value;
      cResult[11] = connectionsCheckText;
      tmp10 = connectionsCheckText;
    }
    if (null == tmp10) {
      return null;
    } else {
      let str = "text-feedback-critical";
      if (result) {
        str = "text-default";
      }
      if (cResult[12] === tmp10) {
        if (cResult[13] === tmp4.connectionsCheck) {
          let tmp21;
          if (cResult[14] === str) {
            tmp21 = cResult[15];
          }
          return tmp21;
        }
      }
      const obj5 = { variant: "text-xs/normal", color: str, style: tmp4.connectionsCheck, children: tmp10 };
      const tmp23 = set(Text_Text.Text, obj5);
      cResult[12] = tmp10;
      cResult[13] = tmp4.connectionsCheck;
      cResult[14] = str;
      cResult[15] = tmp23;
      tmp21 = tmp23;
    }
  }
}) : ((result) => {
  let connectionMetadataField;
  let connectionType;
  let description;
  let operator;
  let value;
  ({ connectionType, connectionMetadataField, operator, value, description } = result);
  result = result.result;
  if (connectionType === closure_20) {
    return null;
  } else {
    let formatResult;
    if (null != description) {
      if (constants2.LESS_THAN === operator) {
        const intl = intl14.intl;
        const format = intl.format;
        const _Math = Math;
        const _Number = Number;
        const obj2 = { description, count: Math.max(0, Number(value) - 1) };
        const v2p7dA3 = intl14.t["2p7dA3"];
        formatResult = format(v2p7dA3, obj2);
      } else {
        formatResult = description;
        if (tmp18.GREATER_THAN === operator) {
          const intl2 = intl14.intl;
          const format2 = intl2.format;
          const _Math2 = Math;
          const _Number2 = Number;
          const obj3 = { description, count: Math.max(0, Number(value) + 1) };
          const v2p7dA31 = intl14.t["2p7dA3"];
          formatResult = format2(v2p7dA31, obj3);
        }
      }
    } else {
      let dcSDhW;
      if (constants2.EQUAL === operator) {
        let tmp13 = connectionType === constants3.PAYPAL;
        const v0BlpbA = intl14.t["0BlpbA"];
        if (tmp13) {
          tmp13 = connectionMetadataField === constants.PAYPAL_VERIFIED;
        }
        dcSDhW = v0BlpbA;
        if (tmp13) {
          dcSDhW = intl14.t.dcSDhW;
        }
      } else if (constants2.NOT_EQUAL === operator) {
        dcSDhW = intl14.t.otcpTN;
      } else if (constants2.LESS_THAN === operator) {
        dcSDhW = intl14.t.Ef35xs;
      } else if (constants2.GREATER_THAN === operator) {
        dcSDhW = intl14.t["8W9OXU"];
      } else {
        return null;
      }
      const obj4 = { connectionType, connectionMetadataField, operator, operatorText: dcSDhW, value };
      const obj = ConnectionsUtils;
      formatResult = obj.getConnectionsCheckText(obj4);
    }
    let tmp24Result = null;
    if (null != formatResult) {
      let str = "text-feedback-critical";
      const Text = Text_Text.Text;
      if (result) {
        str = "text-default";
      }
      const obj5 = { variant: "text-xs/normal", color: str, style: tmp.connectionsCheck, children: formatResult };
      tmp24Result = set(Text, obj5);
    }
    return tmp24Result;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? (function(eligibilityState) {
  let canStartAuthorization;
  let identity_auth_required_scopes;
  let identity_connected_account_type;
  let intl;
  let intl2;
  let items;
  let items2;
  let obj = canStartAuthorization(identity_connected_account_type[18]);
  const cResult = obj.c(57);
  eligibilityState = eligibilityState.eligibilityState;
  const onAttempted = eligibilityState.onAttempted;
  const onIdentityAuthorize = eligibilityState.onIdentityAuthorize;
  const tmp4 = closure_32();
  let obj2 = canStartAuthorization(identity_connected_account_type[29]);
  const getOrFetchApplicationBatched = obj2.useGetOrFetchApplicationBatched(eligibilityState.application_id);
  const tmp7 = identity_auth_required_scopes(identity_connected_account_type[30])(getOrFetchApplicationBatched);
  canStartAuthorization = tmp7.canStartAuthorization;
  const startAuthorization = tmp7.startAuthorization;
  if (cResult[0] === canStartAuthorization) {
    if (cResult[1] === eligibilityState.identity_auth_required_scopes) {
      let obj4;
      let tmp26;
      if (cResult[2] === eligibilityState.identity_connected_account_type) {
        canStartAuthorization = cResult[3];
        identity_auth_required_scopes = cResult[4];
        identity_connected_account_type = cResult[5];
      }
      const application = eligibilityState.application;
      if (cResult[6] !== application) {
        let tmp14 = null;
        let bot;
        if (application != null) {
          bot = application.bot;
        }
        let tmp16 = null;
        if (null != bot) {
          const self = this;
          const self2 = this;
          tmp16 = new UserRecord(application.bot);
        }
        cResult[6] = application;
        cResult[7] = tmp16;
        obj4 = tmp16;
      } else {
        obj4 = cResult[7];
      }
      const result = eligibilityState.result;
      let closure_8 = result;
      if (null != obj4) {
        let tmp20;
        const botTag = tmp4.botTag;
        if (cResult[8] !== obj4) {
          const isVerifiedBotResult = obj4.isVerifiedBot();
          cResult[8] = obj4;
          cResult[9] = isVerifiedBotResult;
          tmp20 = isVerifiedBotResult;
        } else {
          tmp20 = cResult[9];
        }
        const obj3 = { style: botTag, verified: tmp20 };
        const tmp24 = closure_29(identity_auth_required_scopes(identity_connected_account_type[31]), obj3);
        cResult[10] = tmp4.botTag;
        class G {
          constructor() {
            tmp = result;
            if (!tmp) {
              tmp2 = c0;
              if (tmp2) {
                tmp3 = closure_2;
                tmp4 = null;
                someResult = null != closure_2;
                if (someResult) {
                  tmp6 = closure_14;
                  accounts = closure_14.getAccounts();
                  someResult = accounts.some(() => { /* body not rendered: F141318 */ });
                }
                connection_type = null;
                tmp7 = onAttempted;
                if (!someResult) {
                  tmp9 = eligibilityState;
                  connection_type = eligibilityState.connection_type;
                }
                tmp10 = eligibilityState;
                application_id = eligibilityState.application_id;
                if (application_id == null) {
                  application_id = null;
                }
                tmp7Result = tmp7(connection_type, application_id);
                tmp13 = canStartAuthorization;
                if (tmp13) {
                  tmp19 = startAuthorization;
                  obj1 = { analyticsLocations: null };
                  obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
                  tmp20 = startAuthorization(obj1);
                } else {
                  tmp14 = null != tmp3;
                  if (tmp14) {
                    tmp15 = closure_1;
                    tmp14 = null != closure_1;
                  }
                  if (tmp14) {
                    tmp14 = null != tmp10.application_id;
                  }
                  if (tmp14) {
                    tmp16 = onIdentityAuthorize;
                    obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                    obj4.applicationId = tmp10.application_id;
                    tmp17 = closure_1;
                    obj4.scopes = closure_1;
                    obj4.connectedAccountProvider = tmp3;
                    obj4.wasAlreadyConnected = someResult;
                    tmp18 = onIdentityAuthorize(obj4);
                  }
                }
              }
            }
            return;
          }
        }
        cResult[11] = tmp20;
        cResult[12] = tmp24;
      }
      if (result) {
        let tmp32;
        if (cResult[13] !== tmp4.connectionsChecksGroupCheckmark) {
          const obj5 = { source: identity_auth_required_scopes(identity_connected_account_type[32]), style: tmp4.connectionsChecksGroupCheckmark };
          const Icon2 = tmp(tmp2[23]).Icon;
          cResult[13] = tmp4.connectionsChecksGroupCheckmark;
          cResult[14] = closure_29(Icon2, obj5);
          closure_29(Icon2, obj5);
          class G {
            constructor() {
              tmp = result;
              if (!tmp) {
                tmp2 = c0;
                if (tmp2) {
                  tmp3 = closure_2;
                  tmp4 = null;
                  someResult = null != closure_2;
                  if (someResult) {
                    tmp6 = closure_14;
                    accounts = closure_14.getAccounts();
                    someResult = accounts.some(() => { /* body not rendered: F141318 */ });
                  }
                  connection_type = null;
                  tmp7 = onAttempted;
                  if (!someResult) {
                    tmp9 = eligibilityState;
                    connection_type = eligibilityState.connection_type;
                  }
                  tmp10 = eligibilityState;
                  application_id = eligibilityState.application_id;
                  if (application_id == null) {
                    application_id = null;
                  }
                  tmp7Result = tmp7(connection_type, application_id);
                  tmp13 = canStartAuthorization;
                  if (tmp13) {
                    tmp19 = startAuthorization;
                    obj1 = { analyticsLocations: null };
                    obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
                    tmp20 = startAuthorization(obj1);
                  } else {
                    tmp14 = null != tmp3;
                    if (tmp14) {
                      tmp15 = closure_1;
                      tmp14 = null != closure_1;
                    }
                    if (tmp14) {
                      tmp14 = null != tmp10.application_id;
                    }
                    if (tmp14) {
                      tmp16 = onIdentityAuthorize;
                      obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                      obj4.applicationId = tmp10.application_id;
                      tmp17 = closure_1;
                      obj4.scopes = closure_1;
                      obj4.connectedAccountProvider = tmp3;
                      obj4.wasAlreadyConnected = someResult;
                      tmp18 = onIdentityAuthorize(obj4);
                    }
                  }
                }
              }
              return;
            }
          }
        } else {
          tmp32 = cResult[14];
        }
        tmp26 = tmp32;
      } else if (tmp8) {
        let tmp29;
        if (cResult[16] !== tmp4.connectionsChecksGroupCaret) {
          const obj6 = { source: identity_auth_required_scopes(identity_connected_account_type[33]), style: tmp4.connectionsChecksGroupCaret };
          const Icon = tmp(tmp2[23]).Icon;
          cResult[16] = tmp4.connectionsChecksGroupCaret;
          cResult[17] = closure_29(Icon, obj6);
          closure_29(Icon, obj6);
          class G {
            constructor() {
              tmp = result;
              if (!tmp) {
                tmp2 = c0;
                if (tmp2) {
                  tmp3 = closure_2;
                  tmp4 = null;
                  someResult = null != closure_2;
                  if (someResult) {
                    tmp6 = closure_14;
                    accounts = closure_14.getAccounts();
                    someResult = accounts.some(() => { /* body not rendered: F141318 */ });
                  }
                  connection_type = null;
                  tmp7 = onAttempted;
                  if (!someResult) {
                    tmp9 = eligibilityState;
                    connection_type = eligibilityState.connection_type;
                  }
                  tmp10 = eligibilityState;
                  application_id = eligibilityState.application_id;
                  if (application_id == null) {
                    application_id = null;
                  }
                  tmp7Result = tmp7(connection_type, application_id);
                  tmp13 = canStartAuthorization;
                  if (tmp13) {
                    tmp19 = startAuthorization;
                    obj1 = { analyticsLocations: null };
                    obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
                    tmp20 = startAuthorization(obj1);
                  } else {
                    tmp14 = null != tmp3;
                    if (tmp14) {
                      tmp15 = closure_1;
                      tmp14 = null != closure_1;
                    }
                    if (tmp14) {
                      tmp14 = null != tmp10.application_id;
                    }
                    if (tmp14) {
                      tmp16 = onIdentityAuthorize;
                      obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                      obj4.applicationId = tmp10.application_id;
                      tmp17 = closure_1;
                      obj4.scopes = closure_1;
                      obj4.connectedAccountProvider = tmp3;
                      obj4.wasAlreadyConnected = someResult;
                      tmp18 = onIdentityAuthorize(obj4);
                    }
                  }
                }
              }
              return;
            }
          }
        } else {
          tmp29 = cResult[17];
        }
        tmp26 = tmp29;
      } else {
        const _Symbol = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          const obj7 = { variant: "text-md/medium", color: "text-muted", children: intl.string(canStartAuthorization(identity_connected_account_type[27]).t.cEts68) };
          const Text = tmp(tmp2[26]).Text;
          intl = tmp(tmp2[27]).intl;
          const tmp28 = closure_29(Text, obj7);
          cResult[15] = tmp28;
          tmp26 = tmp28;
        } else {
          tmp26 = cResult[15];
        }
      }
      if (cResult[18] === tmp8) {
        if (cResult[19] === canStartAuthorization) {
          if (cResult[20] === eligibilityState.application_id) {
            if (cResult[21] === eligibilityState.connection_type) {
              if (cResult[22] === result) {
                if (cResult[23] === tmp9) {
                  if (cResult[24] === tmp10) {
                    if (cResult[25] === onAttempted) {
                      if (cResult[26] === onIdentityAuthorize) {
                        let tmp35;
                        if (cResult[27] === startAuthorization) {
                          tmp35 = cResult[28];
                        }
                        const officialApplicationIds = tmp(tmp2[28]).officialApplicationIds;
                        let str2;
                        const includes = officialApplicationIds.includes;
                        if (application != null) {
                          str2 = application.id;
                        }
                        if (str2 == null) {
                          str2 = "";
                        }
                        if (includes(str2)) {
                          return null;
                        } else {
                          let prop = null;
                          if (result) {
                            prop = tmp4.connectionsChecksGroupPassed;
                          }
                          let prop1 = null;
                          if (!tmp8) {
                            prop1 = tmp4.connectionsChecksGroupPlatformDisabled;
                          }
                          if (cResult[29] === tmp4.connectionsChecksGroup) {
                            if (cResult[30] === prop) {
                              let tmp38;
                              if (cResult[31] === prop1) {
                                tmp38 = cResult[32];
                              }
                              if (cResult[33] === obj4) {
                                let tmp40;
                                let tmp44;
                                if (cResult[34] === tmp4.appIcon) {
                                  tmp40 = cResult[35];
                                }
                                let name;
                                if (application != null) {
                                  name = application.name;
                                }
                                if (cResult[36] !== name) {
                                  const obj8 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: name };
                                  const tmp46 = closure_29(canStartAuthorization(identity_connected_account_type[26]).Text, obj8);
                                  cResult[36] = name;
                                  cResult[37] = tmp46;
                                  tmp44 = tmp46;
                                } else {
                                  tmp44 = cResult[37];
                                }
                                if (cResult[38] === tmp19) {
                                  if (cResult[39] === tmp4.connectionsChecksGroupTextNameContainer) {
                                    let tmp47;
                                    if (cResult[40] === tmp44) {
                                      tmp47 = cResult[41];
                                    }
                                    if (cResult[42] === tmp8) {
                                      if (cResult[43] === result) {
                                        let tmp51;
                                        if (cResult[44] === tmp4.connectionsCheck) {
                                          tmp51 = cResult[45];
                                        }
                                        if (cResult[46] === tmp4.connectionsChecksGroupTextContainer) {
                                          if (cResult[47] === tmp47) {
                                            let tmp54;
                                            if (cResult[48] === tmp51) {
                                              tmp54 = cResult[49];
                                            }
                                            if (cResult[50] === tmp35) {
                                              if (cResult[51] === tmp26) {
                                                if (cResult[52] === tmp54) {
                                                  if (cResult[53] === tmp38) {
                                                    if (cResult[54] === (result || !tmp8)) {
                                                      let tmp58;
                                                      if (cResult[55] === tmp40) {
                                                        tmp58 = cResult[56];
                                                      }
                                                      return tmp58;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            const obj9 = { accessibilityRole: "button", style: tmp38, disabled: result || !tmp8, onPress: tmp35, children: items };
                                            items = [tmp40, , ];
                                            class G {
                                              constructor() {
                                                tmp = result;
                                                if (!tmp) {
                                                  tmp2 = c0;
                                                  if (tmp2) {
                                                    tmp3 = closure_2;
                                                    tmp4 = null;
                                                    someResult = null != closure_2;
                                                    if (someResult) {
                                                      tmp6 = closure_14;
                                                      accounts = closure_14.getAccounts();
                                                      someResult = accounts.some(() => { /* body not rendered: F141318 */ });
                                                    }
                                                    connection_type = null;
                                                    tmp7 = onAttempted;
                                                    if (!someResult) {
                                                      tmp9 = eligibilityState;
                                                      connection_type = eligibilityState.connection_type;
                                                    }
                                                    tmp10 = eligibilityState;
                                                    application_id = eligibilityState.application_id;
                                                    if (application_id == null) {
                                                      application_id = null;
                                                    }
                                                    tmp7Result = tmp7(connection_type, application_id);
                                                    tmp13 = canStartAuthorization;
                                                    if (tmp13) {
                                                      tmp19 = startAuthorization;
                                                      obj1 = { analyticsLocations: null };
                                                      obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
                                                      tmp20 = startAuthorization(obj1);
                                                    } else {
                                                      tmp14 = null != tmp3;
                                                      if (tmp14) {
                                                        tmp15 = closure_1;
                                                        tmp14 = null != closure_1;
                                                      }
                                                      if (tmp14) {
                                                        tmp14 = null != tmp10.application_id;
                                                      }
                                                      if (tmp14) {
                                                        tmp16 = onIdentityAuthorize;
                                                        obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                                                        obj4.applicationId = tmp10.application_id;
                                                        tmp17 = closure_1;
                                                        obj4.scopes = closure_1;
                                                        obj4.connectedAccountProvider = tmp3;
                                                        obj4.wasAlreadyConnected = someResult;
                                                        tmp18 = onIdentityAuthorize(obj4);
                                                      }
                                                    }
                                                  }
                                                }
                                                return;
                                              }
                                            }
                                            items[2] = tmp26;
                                            const tmp61 = closure_30(startAuthorization, obj9);
                                            cResult[50] = tmp35;
                                            cResult[51] = tmp26;
                                            cResult[52] = tmp54;
                                            cResult[53] = tmp38;
                                            cResult[54] = result || !tmp8;
                                            cResult[55] = tmp40;
                                            cResult[56] = tmp61;
                                            tmp58 = tmp61;
                                          }
                                        }
                                        const items1 = [tmp47, tmp51];
                                        class G {
                                          constructor() {
                                            tmp = result;
                                            if (!tmp) {
                                              tmp2 = c0;
                                              if (tmp2) {
                                                tmp3 = closure_2;
                                                tmp4 = null;
                                                someResult = null != closure_2;
                                                if (someResult) {
                                                  tmp6 = closure_14;
                                                  accounts = closure_14.getAccounts();
                                                  someResult = accounts.some(() => { /* body not rendered: F141318 */ });
                                                }
                                                connection_type = null;
                                                tmp7 = onAttempted;
                                                if (!someResult) {
                                                  tmp9 = eligibilityState;
                                                  connection_type = eligibilityState.connection_type;
                                                }
                                                tmp10 = eligibilityState;
                                                application_id = eligibilityState.application_id;
                                                if (application_id == null) {
                                                  application_id = null;
                                                }
                                                tmp7Result = tmp7(connection_type, application_id);
                                                tmp13 = canStartAuthorization;
                                                if (tmp13) {
                                                  tmp19 = startAuthorization;
                                                  obj1 = { analyticsLocations: null };
                                                  obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
                                                  tmp20 = startAuthorization(obj1);
                                                } else {
                                                  tmp14 = null != tmp3;
                                                  if (tmp14) {
                                                    tmp15 = closure_1;
                                                    tmp14 = null != closure_1;
                                                  }
                                                  if (tmp14) {
                                                    tmp14 = null != tmp10.application_id;
                                                  }
                                                  if (tmp14) {
                                                    tmp16 = onIdentityAuthorize;
                                                    obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                                                    obj4.applicationId = tmp10.application_id;
                                                    tmp17 = closure_1;
                                                    obj4.scopes = closure_1;
                                                    obj4.connectedAccountProvider = tmp3;
                                                    obj4.wasAlreadyConnected = someResult;
                                                    tmp18 = onIdentityAuthorize(obj4);
                                                  }
                                                }
                                              }
                                            }
                                            return;
                                          }
                                        }
                                        cResult[46] = tmp4.connectionsChecksGroupTextContainer;
                                        cResult[47] = tmp47;
                                        cResult[48] = tmp51;
                                        cResult[49] = tmp57;
                                        tmp54 = tmp57;
                                      }
                                    }
                                    let tmp52 = null;
                                    if (!tmp8) {
                                      tmp52 = null;
                                      if (!result) {
                                        const obj11 = { variant: "text-xs/normal", color: "text-muted", style: tmp4.connectionsCheck, children: intl2.string(canStartAuthorization(identity_connected_account_type[27]).t["+z5dYe"]) };
                                        const Text2 = tmp(tmp2[26]).Text;
                                        intl2 = tmp(tmp2[27]).intl;
                                        tmp52 = closure_29(Text2, obj11);
                                      }
                                    }
                                    cResult[42] = tmp8;
                                    cResult[43] = result;
                                    cResult[44] = tmp4.connectionsCheck;
                                    class G {
                                      constructor() {
                                        tmp = result;
                                        if (!tmp) {
                                          tmp2 = c0;
                                          if (tmp2) {
                                            tmp3 = closure_2;
                                            tmp4 = null;
                                            someResult = null != closure_2;
                                            if (someResult) {
                                              tmp6 = closure_14;
                                              accounts = closure_14.getAccounts();
                                              someResult = accounts.some(() => { /* body not rendered: F141318 */ });
                                            }
                                            connection_type = null;
                                            tmp7 = onAttempted;
                                            if (!someResult) {
                                              tmp9 = eligibilityState;
                                              connection_type = eligibilityState.connection_type;
                                            }
                                            tmp10 = eligibilityState;
                                            application_id = eligibilityState.application_id;
                                            if (application_id == null) {
                                              application_id = null;
                                            }
                                            tmp7Result = tmp7(connection_type, application_id);
                                            tmp13 = canStartAuthorization;
                                            if (tmp13) {
                                              tmp19 = startAuthorization;
                                              obj1 = { analyticsLocations: null };
                                              obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
                                              tmp20 = startAuthorization(obj1);
                                            } else {
                                              tmp14 = null != tmp3;
                                              if (tmp14) {
                                                tmp15 = closure_1;
                                                tmp14 = null != closure_1;
                                              }
                                              if (tmp14) {
                                                tmp14 = null != tmp10.application_id;
                                              }
                                              if (tmp14) {
                                                tmp16 = onIdentityAuthorize;
                                                obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                                                obj4.applicationId = tmp10.application_id;
                                                tmp17 = closure_1;
                                                obj4.scopes = closure_1;
                                                obj4.connectedAccountProvider = tmp3;
                                                obj4.wasAlreadyConnected = someResult;
                                                tmp18 = onIdentityAuthorize(obj4);
                                              }
                                            }
                                          }
                                        }
                                        return;
                                      }
                                    }
                                    cResult[45] = tmp52;
                                    tmp51 = tmp52;
                                  }
                                }
                                const obj12 = { style: tmp4.connectionsChecksGroupTextNameContainer, children: items2 };
                                items2 = [, ];
                                class G {
                                  constructor() {
                                    tmp = result;
                                    if (!tmp) {
                                      tmp2 = c0;
                                      if (tmp2) {
                                        tmp3 = closure_2;
                                        tmp4 = null;
                                        someResult = null != closure_2;
                                        if (someResult) {
                                          tmp6 = closure_14;
                                          accounts = closure_14.getAccounts();
                                          someResult = accounts.some(() => { /* body not rendered: F141318 */ });
                                        }
                                        connection_type = null;
                                        tmp7 = onAttempted;
                                        if (!someResult) {
                                          tmp9 = eligibilityState;
                                          connection_type = eligibilityState.connection_type;
                                        }
                                        tmp10 = eligibilityState;
                                        application_id = eligibilityState.application_id;
                                        if (application_id == null) {
                                          application_id = null;
                                        }
                                        tmp7Result = tmp7(connection_type, application_id);
                                        tmp13 = canStartAuthorization;
                                        if (tmp13) {
                                          tmp19 = startAuthorization;
                                          obj1 = { analyticsLocations: null };
                                          obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
                                          tmp20 = startAuthorization(obj1);
                                        } else {
                                          tmp14 = null != tmp3;
                                          if (tmp14) {
                                            tmp15 = closure_1;
                                            tmp14 = null != closure_1;
                                          }
                                          if (tmp14) {
                                            tmp14 = null != tmp10.application_id;
                                          }
                                          if (tmp14) {
                                            tmp16 = onIdentityAuthorize;
                                            obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                                            obj4.applicationId = tmp10.application_id;
                                            tmp17 = closure_1;
                                            obj4.scopes = closure_1;
                                            obj4.connectedAccountProvider = tmp3;
                                            obj4.wasAlreadyConnected = someResult;
                                            tmp18 = onIdentityAuthorize(obj4);
                                          }
                                        }
                                      }
                                    }
                                    return;
                                  }
                                }
                                items2[1] = tmp19;
                                const tmp50 = closure_30(closure_8, obj12);
                                cResult[38] = tmp19;
                                cResult[39] = tmp4.connectionsChecksGroupTextNameContainer;
                                cResult[40] = tmp44;
                                cResult[41] = tmp50;
                                tmp47 = tmp50;
                              }
                              let tmp41 = null;
                              if (null != obj4) {
                                const obj13 = { style: tmp4.appIcon, user: obj4, size: canStartAuthorization(identity_connected_account_type[23]).AvatarSizes.XSMALL, guildId: "Array" };
                                const Avatar = tmp(tmp2[23]).Avatar;
                                tmp41 = closure_29(Avatar, obj13);
                              }
                              cResult[33] = obj4;
                              cResult[34] = tmp4.appIcon;
                              class G {
                                constructor() {
                                  tmp = result;
                                  if (!tmp) {
                                    tmp2 = c0;
                                    if (tmp2) {
                                      tmp3 = closure_2;
                                      tmp4 = null;
                                      someResult = null != closure_2;
                                      if (someResult) {
                                        tmp6 = closure_14;
                                        accounts = closure_14.getAccounts();
                                        someResult = accounts.some(() => { /* body not rendered: F141318 */ });
                                      }
                                      connection_type = null;
                                      tmp7 = onAttempted;
                                      if (!someResult) {
                                        tmp9 = eligibilityState;
                                        connection_type = eligibilityState.connection_type;
                                      }
                                      tmp10 = eligibilityState;
                                      application_id = eligibilityState.application_id;
                                      if (application_id == null) {
                                        application_id = null;
                                      }
                                      tmp7Result = tmp7(connection_type, application_id);
                                      tmp13 = canStartAuthorization;
                                      if (tmp13) {
                                        tmp19 = startAuthorization;
                                        obj1 = { analyticsLocations: null };
                                        obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
                                        tmp20 = startAuthorization(obj1);
                                      } else {
                                        tmp14 = null != tmp3;
                                        if (tmp14) {
                                          tmp15 = closure_1;
                                          tmp14 = null != closure_1;
                                        }
                                        if (tmp14) {
                                          tmp14 = null != tmp10.application_id;
                                        }
                                        if (tmp14) {
                                          tmp16 = onIdentityAuthorize;
                                          obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                                          obj4.applicationId = tmp10.application_id;
                                          tmp17 = closure_1;
                                          obj4.scopes = closure_1;
                                          obj4.connectedAccountProvider = tmp3;
                                          obj4.wasAlreadyConnected = someResult;
                                          tmp18 = onIdentityAuthorize(obj4);
                                        }
                                      }
                                    }
                                  }
                                  return;
                                }
                              }
                              tmp40 = tmp41;
                            }
                          }
                          const items3 = [tmp4.connectionsChecksGroup, prop, prop1];
                          class G {
                            constructor() {
                              tmp = result;
                              if (!tmp) {
                                tmp2 = c0;
                                if (tmp2) {
                                  tmp3 = closure_2;
                                  tmp4 = null;
                                  someResult = null != closure_2;
                                  if (someResult) {
                                    tmp6 = closure_14;
                                    accounts = closure_14.getAccounts();
                                    someResult = accounts.some(() => { /* body not rendered: F141318 */ });
                                  }
                                  connection_type = null;
                                  tmp7 = onAttempted;
                                  if (!someResult) {
                                    tmp9 = eligibilityState;
                                    connection_type = eligibilityState.connection_type;
                                  }
                                  tmp10 = eligibilityState;
                                  application_id = eligibilityState.application_id;
                                  if (application_id == null) {
                                    application_id = null;
                                  }
                                  tmp7Result = tmp7(connection_type, application_id);
                                  tmp13 = canStartAuthorization;
                                  if (tmp13) {
                                    tmp19 = startAuthorization;
                                    obj1 = { analyticsLocations: null };
                                    obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
                                    tmp20 = startAuthorization(obj1);
                                  } else {
                                    tmp14 = null != tmp3;
                                    if (tmp14) {
                                      tmp15 = closure_1;
                                      tmp14 = null != closure_1;
                                    }
                                    if (tmp14) {
                                      tmp14 = null != tmp10.application_id;
                                    }
                                    if (tmp14) {
                                      tmp16 = onIdentityAuthorize;
                                      obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                                      obj4.applicationId = tmp10.application_id;
                                      tmp17 = closure_1;
                                      obj4.scopes = closure_1;
                                      obj4.connectedAccountProvider = tmp3;
                                      obj4.wasAlreadyConnected = someResult;
                                      tmp18 = onIdentityAuthorize(obj4);
                                    }
                                  }
                                }
                              }
                              return;
                            }
                          }
                          cResult[30] = prop;
                          cResult[31] = prop1;
                          cResult[32] = items3;
                          tmp38 = items3;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      class G {
        constructor() {
          tmp = result;
          if (!tmp) {
            tmp2 = c0;
            if (tmp2) {
              tmp3 = closure_2;
              tmp4 = null;
              someResult = null != closure_2;
              if (someResult) {
                tmp6 = closure_14;
                accounts = closure_14.getAccounts();
                someResult = accounts.some(() => { /* body not rendered: F141318 */ });
              }
              connection_type = null;
              tmp7 = onAttempted;
              if (!someResult) {
                tmp9 = eligibilityState;
                connection_type = eligibilityState.connection_type;
              }
              tmp10 = eligibilityState;
              application_id = eligibilityState.application_id;
              if (application_id == null) {
                application_id = null;
              }
              tmp7Result = tmp7(connection_type, application_id);
              tmp13 = canStartAuthorization;
              if (tmp13) {
                tmp19 = startAuthorization;
                obj1 = { analyticsLocations: null };
                obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
                tmp20 = startAuthorization(obj1);
              } else {
                tmp14 = null != tmp3;
                if (tmp14) {
                  tmp15 = closure_1;
                  tmp14 = null != closure_1;
                }
                if (tmp14) {
                  tmp14 = null != tmp10.application_id;
                }
                if (tmp14) {
                  tmp16 = onIdentityAuthorize;
                  obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                  obj4.applicationId = tmp10.application_id;
                  tmp17 = closure_1;
                  obj4.scopes = closure_1;
                  obj4.connectedAccountProvider = tmp3;
                  obj4.wasAlreadyConnected = someResult;
                  tmp18 = onIdentityAuthorize(obj4);
                }
              }
            }
          }
          return;
        }
      }
      cResult[18] = tmp8;
      cResult[19] = canStartAuthorization;
      cResult[20] = eligibilityState.application_id;
      cResult[21] = eligibilityState.connection_type;
      cResult[22] = result;
      cResult[23] = tmp9;
      cResult[24] = tmp10;
      cResult[25] = onAttempted;
      cResult[26] = onIdentityAuthorize;
      cResult[27] = startAuthorization;
      cResult[28] = G;
      tmp35 = G;
    }
  }
  identity_connected_account_type = eligibilityState.identity_connected_account_type;
  identity_auth_required_scopes = eligibilityState.identity_auth_required_scopes;
  let flag = canStartAuthorization;
  if (!flag) {
    flag = canStartAuthorization;
    if (null != identity_connected_account_type) {
      flag = canStartAuthorization;
      if (null != identity_auth_required_scopes) {
        const tmp6Result = identity_auth_required_scopes(identity_connected_account_type[20]);
        const value = tmp6Result.get(identity_connected_account_type);
        flag = canStartAuthorization;
        const tmp13 = null != value && value.enabled;
        if (tmp13) {
          canStartAuthorization = true;
          flag = true;
        }
      }
    }
  }
  cResult[0] = canStartAuthorization;
  cResult[1] = eligibilityState.identity_auth_required_scopes;
  cResult[2] = eligibilityState.identity_connected_account_type;
  cResult[3] = flag;
  cResult[4] = identity_auth_required_scopes;
  cResult[5] = identity_connected_account_type;
}) : ((eligibilityState) => {
  let c5;
  let intl;
  let intl2;
  let items3;
  let items4;
  let items5;
  let tmp10;
  let tmp13Result;
  let tmp15;
  eligibilityState = eligibilityState.eligibilityState;
  const onAttempted = eligibilityState.onAttempted;
  const onIdentityAuthorize = eligibilityState.onIdentityAuthorize;
  let application;
  let c9;
  const tmp = closure_32();
  let tmp3 = onIdentityAuthorize;
  let obj = eligibilityState(onIdentityAuthorize[29]);
  const getOrFetchApplicationBatched = obj.useGetOrFetchApplicationBatched(eligibilityState.application_id);
  const tmp6 = onAttempted(onIdentityAuthorize[30])(getOrFetchApplicationBatched);
  const canStartAuthorization = tmp6.canStartAuthorization;
  const startAuthorization = tmp6.startAuthorization;
  react = canStartAuthorization;
  const identity_connected_account_type = eligibilityState.identity_connected_account_type;
  const identity_auth_required_scopes = eligibilityState.identity_auth_required_scopes;
  let flag = canStartAuthorization;
  if (!flag) {
    flag = canStartAuthorization;
    if (null != identity_connected_account_type) {
      flag = canStartAuthorization;
      if (null != identity_auth_required_scopes) {
        const tmp5Result = onAttempted(tmp3[20]);
        const value = tmp5Result.get(identity_connected_account_type);
        flag = canStartAuthorization;
        const tmp9 = null != value && value.enabled;
        if (tmp9) {
          react = true;
          flag = true;
        }
      }
    }
  }
  application = eligibilityState.application;
  const items = [application];
  const memo = react.useMemo(function() {
    let bot;
    if (application != null) {
      bot = application.bot;
    }
    let tmp3 = null;
    if (null != bot) {
      const self = this;
      const self2 = this;
      tmp3 = new UserRecord(application.bot);
    }
    return tmp3;
  }, items);
  const result = eligibilityState.result;
  c9 = result;
  const obj3 = react;
  if (null != memo) {
    let obj2 = { style: tmp.botTag, verified: memo.isVerifiedBot() };
    const tmp5Result2 = onAttempted(tmp3[31]);
    tmp10 = closure_29(tmp5Result2, obj2);
  }
  if (result) {
    const obj4 = { source: onAttempted(tmp3[32]), style: tmp.connectionsChecksGroupCheckmark };
    const Icon2 = tmp2(tmp3[23]).Icon;
    tmp13Result = closure_29(Icon2, obj4);
    tmp15 = closure_29;
  } else if (flag) {
    const obj5 = { source: onAttempted(tmp3[33]), style: tmp.connectionsChecksGroupCaret };
    const Icon = tmp2(tmp3[23]).Icon;
    tmp13Result = closure_29(Icon, obj5);
    tmp15 = closure_29;
  } else {
    const obj6 = { variant: "text-md/medium", color: "text-muted", children: intl.string(eligibilityState(tmp3[27]).t.cEts68) };
    const Text = tmp2(tmp3[26]).Text;
    intl = tmp2(tmp3[27]).intl;
    tmp13Result = closure_29(Text, obj6);
    tmp15 = closure_29;
  }
  const items1 = [result, flag, canStartAuthorization, startAuthorization, onAttempted, onIdentityAuthorize, , , , ];
  ({ connection_type: arr2[6], application_id: arr2[7] } = eligibilityState);
  items1[8] = identity_connected_account_type;
  items1[9] = identity_auth_required_scopes;
  const callback = obj3.useCallback(() => {
    if (!c9) {
      if (c5) {
        let someResult = null != identity_connected_account_type;
        if (someResult) {
          const accounts = ConnectedAccountsStore.getAccounts();
          someResult = accounts.some((type) => type.type === identity_connected_account_type);
        }
        let connection_type = null;
        if (!someResult) {
          connection_type = eligibilityState.connection_type;
        }
        let application_id = eligibilityState.application_id;
        if (application_id == null) {
          application_id = null;
        }
        onAttempted(connection_type, application_id);
        if (canStartAuthorization) {
          const obj = { analyticsLocations: ["Verified Roles Connect Accounts Modal"] };
          startAuthorization(obj);
        } else {
          const tmp14 = null != identity_connected_account_type && null != identity_auth_required_scopes && null != eligibilityState.application_id;
          if (tmp14) {
            const obj2 = { applicationId: eligibilityState.application_id, scopes: identity_auth_required_scopes, connectedAccountProvider: identity_connected_account_type, wasAlreadyConnected: someResult };
            onIdentityAuthorize(obj2);
          }
        }
      }
    }
  }, items1);
  const officialApplicationIds = tmp2(tmp3[28]).officialApplicationIds;
  let str;
  const includes = officialApplicationIds.includes;
  if (application != null) {
    str = application.id;
  }
  if (str == null) {
    str = "";
  }
  let tmp18Result = null;
  if (!includes(str)) {
    const items2 = [tmp.connectionsChecksGroup, , ];
    let prop = null;
    const tmp19 = identity_auth_required_scopes;
    if (result) {
      prop = tmp.connectionsChecksGroupPassed;
    }
    items2[1] = prop;
    let prop1 = null;
    if (!flag) {
      prop1 = tmp.connectionsChecksGroupPlatformDisabled;
    }
    const obj7 = { accessibilityRole: "button", style: items2, disabled: result || !flag, onPress: callback, children: items3 };
    items2[2] = prop1;
    let tmp15Result = null;
    if (null != memo) {
      const obj8 = { style: tmp.appIcon, user: memo, size: eligibilityState(tmp3[23]).AvatarSizes.XSMALL, guildId: "Array" };
      const Avatar = tmp2(tmp3[23]).Avatar;
      tmp15Result = tmp15(Avatar, obj8);
    }
    items3 = [tmp15Result, , ];
    let name;
    const obj10 = { style: tmp.connectionsChecksGroupTextNameContainer, children: items4 };
    const obj9 = { style: tmp.connectionsChecksGroupTextContainer, children: items5 };
    const Text2 = tmp2(tmp3[26]).Text;
    if (application != null) {
      name = application.name;
    }
    const obj11 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: name };
    items4 = [tmp15(Text2, obj11), tmp10];
    items5 = [closure_30(application, obj10), ];
    let tmp15Result2 = null;
    if (!flag) {
      tmp15Result2 = null;
      if (!result) {
        const obj12 = { variant: "text-xs/normal", color: "text-muted", style: tmp.connectionsCheck, children: intl2.string(eligibilityState(tmp3[27]).t["+z5dYe"]) };
        const Text3 = tmp2(tmp3[26]).Text;
        intl2 = tmp2(tmp3[27]).intl;
        tmp15Result2 = tmp15(Text3, obj12);
      }
    }
    items5[1] = tmp15Result2;
    items3[1] = closure_30(application, obj9);
    items3[2] = tmp13Result;
    tmp18Result = closure_30(tmp19, obj7);
  }
  return tmp18Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_37 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPlatformConnect) => {
  let closure_10;
  let closure_11;
  let closure_4;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let eligibilityStatesGroups;
  let first;
  let first1;
  let guildId;
  let initialAttemptedApplicationId;
  let initialAttemptedPlatformType;
  let onPlatformAttempt;
  let onPlatformConnected;
  let roleColor;
  let tmp12;
  let tmp15;
  const tmp = onPlatformConnected;
  let obj = onPlatformAttempt(onPlatformConnected[18]);
  const cResult = obj.c(32);
  ({ eligibilityStatesGroups, onPlatformAttempt } = onPlatformConnect);
  onPlatformConnect = onPlatformConnect.onPlatformConnect;
  onPlatformConnected = onPlatformConnect.onPlatformConnected;
  const onIdentityAuthorize = onPlatformConnect.onPlatformIdentityAuthorize;
  ({ initialAttemptedPlatformType, initialAttemptedApplicationId } = onPlatformConnect);
  let tmp3 = closure_32();
  _slicedToArray = tmp3;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = {};
    let num = 0;
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp5 = first1;
  [first1, closure_6] = first1.useState(first);
  [closure_7, closure_8] = first1.useState(0);
  const useState = first1.useState;
  if (initialAttemptedPlatformType == null) {
    initialAttemptedPlatformType = null;
  }
  [closure_9, closure_10] = useState(initialAttemptedPlatformType);
  const useState2 = tmp5.useState;
  if (initialAttemptedApplicationId == null) {
    initialAttemptedApplicationId = null;
  }
  [closure_11, closure_12] = useState2(initialAttemptedApplicationId);
  if (cResult[1] !== eligibilityStatesGroups) {
    const tmp13 = onPlatformConnect;
    let obj3 = onPlatformConnect(tmp[34]);
    const flattenResult = obj3.flatten(eligibilityStatesGroups);
    let num2 = 1;
    cResult[1] = eligibilityStatesGroups;
    cResult[2] = flattenResult;
    tmp12 = flattenResult;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] !== tmp12) {
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class Z {
        constructor(connection_type) {
          let str = "";
          connection_type = connection_type.connection_type;
          if (null != connection_type.application_id) {
            const _HermesInternal = HermesInternal;
            str = ":" + connection_type.application_id;
          }
          return "" + connection_type + str;
        }
      }
      cResult[5] = Z;
    } else {
      class Z {
        constructor(connection_type) {
          let str = "";
          connection_type = connection_type.connection_type;
          if (null != connection_type.application_id) {
            const _HermesInternal = HermesInternal;
            str = ":" + connection_type.application_id;
          }
          return "" + connection_type + str;
        }
      }
    }
    const tmp17 = onPlatformConnect;
    let obj4 = onPlatformConnect(tmp[34]);
    const groupByResult = obj4.groupBy(tmp12, Z);
    cResult[3] = tmp12;
    cResult[4] = groupByResult;
    tmp15 = groupByResult;
  } else {
    class Z {
      constructor(connection_type) {
        let str = "";
        connection_type = connection_type.connection_type;
        if (null != connection_type.application_id) {
          const _HermesInternal = HermesInternal;
          str = ":" + connection_type.application_id;
        }
        return "" + connection_type + str;
      }
    }
  }
  ChannelStore = tmp15;
  if (cResult[6] === first1) {
    class Z {
      constructor(connection_type) {
        let str = "";
        connection_type = connection_type.connection_type;
        if (null != connection_type.application_id) {
          const _HermesInternal = HermesInternal;
          str = ":" + connection_type.application_id;
        }
        return "" + connection_type + str;
      }
    }
  }
  function ee(arg0, id) {
    const obj = {};
    const merged = Object.assign(first1);
    obj[arg0] = Date.now();
    closure_6(obj);
    closure_10(arg0);
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    if (id == null) {
      id = null;
    }
    closure_12(id);
    onPlatformAttempt();
    onPlatformConnect(arg0, id);
  }
  cResult[6] = first1;
  cResult[7] = onPlatformAttempt;
  cResult[8] = onPlatformConnect;
  cResult[9] = ee;
}) : ((eligibilityStatesGroups) => {
  let _undefined;
  let _undefined2;
  let c6;
  let c7;
  let c8;
  let c9;
  let closure_11;
  let closure_13;
  let closure_5;
  let first;
  let first1;
  let guildId;
  let initialAttemptedApplicationId;
  let initialAttemptedPlatformType;
  let onIdentityAuthorize;
  let onPlatformConnected;
  let sorted;
  eligibilityStatesGroups = eligibilityStatesGroups.eligibilityStatesGroups;
  ({ onPlatformAttempt: importDefault, onPlatformConnect: dependencyMap, onPlatformConnected } = eligibilityStatesGroups);
  ({ onPlatformIdentityAuthorize: _slicedToArray, initialAttemptedPlatformType, initialAttemptedApplicationId } = eligibilityStatesGroups);
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  first = undefined;
  closure_11 = undefined;
  first1 = undefined;
  closure_13 = undefined;
  let memo;
  let memo1;
  let roleColor;
  react = closure_32();
  let obj = react;
  let tmp2 = _slicedToArray(react.useState({}), 2);
  [c6, c7] = tmp2;
  let tmp3 = _slicedToArray(react.useState(0), 2);
  [c8, c9] = tmp3;
  const useState = react.useState;
  if (initialAttemptedPlatformType == null) {
    initialAttemptedPlatformType = null;
  }
  [first, closure_11] = useState(initialAttemptedPlatformType);
  const useState2 = obj.useState;
  if (initialAttemptedApplicationId == null) {
    initialAttemptedApplicationId = null;
  }
  [first1, closure_13] = useState2(initialAttemptedApplicationId);
  let items = [eligibilityStatesGroups];
  memo = obj.useMemo(() => {
    const obj = _modDef12;
    return obj.flatten(eligibilityStatesGroups);
  }, items);
  let items1 = [memo];
  memo1 = obj.useMemo(() => {
    const obj = _modDef12;
    return obj.groupBy(memo, (connection_type) => {
      let str = "";
      connection_type = connection_type.connection_type;
      if (null != connection_type.application_id) {
        const _HermesInternal = HermesInternal;
        str = ":" + connection_type.application_id;
      }
      return "" + connection_type + str;
    });
  }, items1);
  let items2 = [memo];
  const effect = obj.useEffect(() => _undefined2(Date.now()), items2);
  let items3 = [memo1, first, first1, onPlatformConnected];
  const effect1 = obj.useEffect(() => {
    if (null != first) {
      let str2 = "";
      if (null != first1) {
        const _HermesInternal = HermesInternal;
        str2 = ":" + tmp11;
      }
      const _HermesInternal2 = HermesInternal;
      const arr = memo1["" + first + str2];
      if (null != arr) {
        if (arr.every((item) => item.result)) {
          first = arr[0];
          let prop;
          if (first != null) {
            prop = first.identity_connected_account_type;
          }
          if (prop == null) {
            prop = tmp;
          }
          const found = arr.find((application) => null != application.application);
          let application;
          if (found != null) {
            application = found.application;
          }
          if (application == null) {
            application = null;
          }
          onPlatformConnected(prop, application);
        }
      }
    }
  }, items3);
  let obj2 = eligibilityStatesGroups(4586);
  roleColor = obj2.useToken(nativeDefault.unsafe_rawColors.GREEN_330);
  let obj3 = {
    children: sorted.map(function(item) {
      let Icon3;
      let Text3;
      let intl;
      let intl2;
      let intl4;
      let items1;
      let items2;
      let items3;
      let obj11;
      let obj17;
      let tmp20Result;
      let tmp22;
      let tmp22Result;
      if (item.startsWith("" + closure_1_20 + ":")) {
        if (null != memo1[item][0]) {
          let obj2 = {
            eligibilityState: memo1[item][0],
            onAttempted(arg0, arg1) {
                  closure_1_11(arg0);
                  closure_1_13(arg1);
                  if (null != arg0) {
                    value();
                  }
                },
            onIdentityAuthorize
          };
          return closure_1_29(closure_1_36, obj2, item);
        }
      }
      const found = arr.find((operator) => null == operator.operator);
      const found1 = arr.filter((operator) => null != operator.operator);
      const tmp3 = (null == found || found.result) && found1.every((item) => item.result);
      const found2 = arr.find((application) => null != application.application);
      let obj = PlatformsDefault;
      const value = obj.get(item);
      importDefault = value;
      let application;
      if (found2 != null) {
        application = found2.application;
      }
      let bot;
      if (application != null) {
        bot = application.bot;
      }
      let tmp11 = null;
      if (null != bot) {
        const self = this;
        const self2 = this;
        tmp11 = new closure_11(application.bot);
      }
      const officialApplicationIds = eligibilityStatesGroups(dependencyMap[28]).officialApplicationIds;
      let str;
      const includes = officialApplicationIds.includes;
      if (application != null) {
        str = application.id;
      }
      if (str == null) {
        str = "";
      }
      let type;
      const hasItem = includes(str);
      if (value != null) {
        type = value.type;
      }
      if (type == null) {
        type = closure_1_19;
      }
      if (tmp3) {
        const obj3 = { source: AssetRegistryDefault2, style: closure_5.connectionsChecksGroupCheckmark };
        const Icon2 = tmp13(dependencyMap[23]).Icon;
        tmp20Result = closure_1_29(Icon2, obj3);
        tmp22 = closure_1_29;
      } else if (!tmp3 && null != tmp17 && tmp17 <= c8) {
        const obj4 = { variant: "text-sm/semibold", color: "text-brand", children: intl2.string(eligibilityStatesGroups(dependencyMap[27]).t["5911Lb"]) };
        const Text2 = tmp13(dependencyMap[26]).Text;
        intl2 = tmp13(dependencyMap[27]).intl;
        tmp20Result = closure_1_29(Text2, obj4);
        tmp22 = closure_1_29;
      } else if (null == value || value.enabled) {
        const obj5 = { source: AssetRegistryDefault3, style: closure_5.connectionsChecksGroupCaret };
        const Icon = tmp13(dependencyMap[23]).Icon;
        tmp20Result = closure_1_29(Icon, obj5);
        tmp22 = closure_1_29;
      } else {
        const obj6 = { variant: "text-md/medium", color: "text-muted", children: intl.string(eligibilityStatesGroups(dependencyMap[27]).t.cEts68) };
        const Text = tmp13(dependencyMap[26]).Text;
        intl = tmp13(dependencyMap[27]).intl;
        tmp20Result = closure_1_29(Text, obj6);
        tmp22 = closure_1_29;
      }
      let type1;
      if (value != null) {
        type1 = value.type;
      }
      let tmp26;
      if (type1 === constants.STEAM) {
        const intl3 = tmp13(dependencyMap[27]).intl;
        const stringResult = intl3.string(tmp13(dependencyMap[27]).t.NcZh6K);
        eligibilityStatesGroups = stringResult;
        tmp26 = stringResult;
      }
      if (hasItem) {
        const obj7 = { style: closure_5.botTag, guildId, roleColor, size: 16 };
        tmp22Result = tmp22(tmp5(dependencyMap[36]), obj7);
      } else if (null != tmp11) {
        const obj8 = { style: closure_5.botTag, verified: tmp11.isVerifiedBot() };
        const tmp5Result = BotTagDefault;
        tmp22Result = tmp22(tmp5Result, obj8);
      }
      const items = [closure_5.connectionsChecksGroup, , ];
      let prop = null;
      if (tmp3) {
        prop = closure_5.connectionsChecksGroupPassed;
      }
      items[1] = prop;
      let prop1 = null;
      if (!(null == value || value.enabled)) {
        prop1 = closure_5.connectionsChecksGroupPlatformDisabled;
      }
      const obj9 = {
        accessibilityRole: "button",
        style: items,
        disabled: tmp3 || !(null == value || value.enabled),
        onPress() {
          let type;
          if (value != null) {
            type = value.type;
          }
          if (type == null) {
            type = closure_19;
          }
          let tmp2 = application;
          if (application == null) {
            tmp2 = null;
          }
          const obj = {};
          const merged = Object.assign(c6);
          obj[type] = Date.now();
          c7(obj);
          closure_11(type);
          let id;
          if (tmp2 != null) {
            id = tmp2.id;
          }
          if (id == null) {
            id = null;
          }
          closure_13(id);
          importDefault();
          dependencyMap(type, tmp2);
        },
        children: items1
      };
      items[2] = prop1;
      let tmp22Result5 = null;
      if (!tmp3) {
        tmp22Result5 = null;
        if (!tmp3 && null != tmp17 && tmp17 <= c8) {
          const obj10 = { style: closure_5.connectionsChecksGroupRequirementsNotMet, children: tmp22(Text3, obj11) };
          obj11 = { variant: "text-xs/normal", color: "text-overlay-light", children: intl4.string(eligibilityStatesGroups(dependencyMap[27]).t.UB3hKo) };
          Text3 = tmp13(dependencyMap[26]).Text;
          intl4 = tmp13(dependencyMap[27]).intl;
          tmp22Result5 = tmp22(c8, obj10);
        }
      }
      items1 = [tmp22Result5, , , , ];
      let tmp22Result6 = null;
      if (null != value) {
        const obj12 = { platformType: value.type };
        tmp22Result6 = tmp22(closure_1_33, obj12);
      }
      items1[1] = tmp22Result6;
      let tmp22Result7 = null;
      if (null != tmp11) {
        const obj13 = { style: closure_5.appIcon, user: tmp11, size: eligibilityStatesGroups(dependencyMap[23]).AvatarSizes.XSMALL, guildId: "Array" };
        const Avatar = tmp13(dependencyMap[23]).Avatar;
        tmp22Result7 = tmp22(Avatar, obj13);
      }
      items1[2] = tmp22Result7;
      let name;
      const obj14 = { style: closure_5.connectionsChecksGroupTextContainer, children: items3 };
      const obj15 = { style: closure_5.connectionsChecksGroupTextNameContainer, children: items2 };
      const Text4 = tmp13(dependencyMap[26]).Text;
      if (value != null) {
        name = value.name;
      }
      if (name == null) {
        let name1;
        if (application != null) {
          name1 = application.name;
        }
        name = name1;
      }
      items2 = [tmp22(Text4, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: name }), tmp22Result, ];
      let tmp22Result8 = null;
      if (null != tmp26) {
        const obj16 = {
          onPress() {
              _modDef38(null != stringResult, "tooltip is null");
              const obj = ToastActionCreatorsDefault;
              const obj2 = { key: "CONNECTIONS_STEAM_TOOLTIP", icon: AssetRegistryDefault, content: stringResult };
              obj.open(obj2);
            },
          children: tmp22(Icon3, obj17)
        };
        obj17 = { source: AssetRegistryDefault, size: eligibilityStatesGroups(dependencyMap[23]).Icon.Sizes.SMALL_20, style: closure_5.connectionsChecksGroupTextNameInfoIcon };
        Icon3 = tmp13(dependencyMap[23]).Icon;
        tmp22Result8 = tmp22(c7, obj16);
      }
      items2[2] = tmp22Result8;
      items3 = [
        closure_1_30(c8, obj15),
        found1.map((item) => {
          let connection_metadata_field;
          let connection_type;
          let description;
          let operator;
          let result;
          ({ connection_metadata_field, operator, value } = item);
          ({ connection_type, result, description } = item);
          value(application[37])(null != connectionMetadataField, "connectionMetadataField is null");
          value(application[37])(null != operator, "operator is null");
          value(application[37])(null != value, "value is null");
          return closure_1_29(closure_1_35, { connectionType, connectionMetadataField, operator, value, result, description }, connectionMetadataField);
        })
      ];
      items1[3] = closure_1_30(c8, obj14);
      items1[4] = tmp20Result;
      return closure_1_30(c7, obj9, item);
    })
  };
  const keys = Object.keys(memo1);
  sorted = keys.sort((arg0, arg1) => {
    let num;
    const obj = memo1[arg0];
    const everyResult = obj.every((item) => item.result);
    const obj2 = memo1[arg1];
    const everyResult1 = obj2.every((item) => item.result);
    if (true !== everyResult) {
      let num2 = 0;
      if (false === everyResult) {
        num2 = 0;
        if (true === everyResult1) {
          num2 = -1;
        }
      }
      num = num2;
    } else {
      num = 1;
    }
    return num;
  });
  return closure_29(closure_31, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_38 = ReactCompilerGating.isReactCompilerEnabled() ? ((account) => {
  let closure_6;
  let closure_8;
  let first1;
  let formatToPlainString;
  let items;
  let setShowPreviewMetadata;
  let tmp6;
  let tmp8;
  let value;
  let obj = account(setShowPreviewMetadata[18]);
  const cResult = obj.c(45);
  account = account.account;
  const setShowPreviewInvisibleIcon = account.setShowPreviewInvisibleIcon;
  setShowPreviewMetadata = account.setShowPreviewMetadata;
  const tmp4 = closure_32();
  [tmp6, _asyncToGenerator] = value.useState(account.friendSync);
  _slicedToArray(value.useState(account.friendSync), 2);
  const tmp7 = _slicedToArray(value.useState(account.showActivity), 2);
  [tmp8, _slicedToArray] = tmp7;
  [value, closure_6] = value.useState(1 === account.metadataVisibility);
  [first1, closure_8] = value.useState(1 === account.visibility);
  if (cResult[0] === value) {
    if (cResult[1] === setShowPreviewInvisibleIcon) {
      if (cResult[2] === setShowPreviewMetadata) {
        let tmp13;
        if (cResult[3] === first1) {
          tmp13 = cResult[4];
        }
        setShowPreviewInvisibleIcon(setShowPreviewMetadata[40])(tmp13);
        const tmp14 = setShowPreviewInvisibleIcon;
        if (cResult[5] === account.id) {
          if (cResult[6] === account.type) {
            if (cResult[7] === tmp6) {
              let tmp16;
              let tmp17;
              let tmp18;
              let tmp42;
              if (cResult[8] === tmp8) {
                tmp16 = cResult[9];
                tmp17 = cResult[10];
                tmp18 = cResult[11];
              }
              if (true === tmp16.hasMetadata) {
                let tmp34;
                const _Symbol3 = Symbol;
                if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl3 = tmp(tmp2[27]).intl;
                  const stringResult = intl3.string(account(setShowPreviewMetadata[27]).t.FYKGsL);
                  cResult[22] = stringResult;
                  tmp34 = stringResult;
                } else {
                  tmp34 = cResult[22];
                }
                if (cResult[23] === account.id) {
                  if (cResult[24] === account.type) {
                    let tmp37;
                    if (cResult[25] === setShowPreviewMetadata) {
                      tmp37 = cResult[26];
                    }
                    const obj2 = { label: tmp34, value, disabled: !first1, onValueChange: tmp37 };
                    const tmp40 = closure_29(account(setShowPreviewMetadata[42]).FormSwitchRow, obj2);
                    cResult[27] = value;
                    cResult[28] = !first1;
                    cResult[29] = tmp37;
                    cResult[30] = tmp40;
                  }
                }
                const fn2 = function $(arg0) {
                  let id;
                  let type;
                  setShowPreviewMetadata(arg0);
                  closure_6(arg0);
                  let num = 0;
                  const setMetadataVisibility = ConnectedAccountsActionCreatorsDefault.setMetadataVisibility;
                  ({ type, id } = account);
                  ConnectedAccountsActionCreatorsDefault;
                  if (arg0) {
                    num = 1;
                  }
                  const result = setMetadataVisibility(type, id, num);
                };
                cResult[23] = account.id;
                cResult[24] = account.type;
                cResult[25] = setShowPreviewMetadata;
                cResult[26] = fn2;
                tmp37 = fn2;
              }
              const _Symbol2 = Symbol;
              const accountConnectedPrivacyOptionsContainer = tmp4.accountConnectedPrivacyOptionsContainer;
              if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                const intl4 = tmp(tmp2[27]).intl;
                const stringResult1 = intl4.string(account(setShowPreviewMetadata[27]).t.f7yOAX);
                cResult[31] = stringResult1;
                tmp42 = stringResult1;
              } else {
                tmp42 = cResult[31];
              }
              if (cResult[32] === account.id) {
                if (cResult[33] === account.type) {
                  let tmp44;
                  if (cResult[34] === setShowPreviewInvisibleIcon) {
                    tmp44 = cResult[35];
                  }
                  if (cResult[36] === tmp44) {
                    let tmp45;
                    if (cResult[37] === first1) {
                      tmp45 = cResult[38];
                    }
                    if (cResult[39] === tmp33) {
                      if (cResult[40] === tmp17) {
                        if (cResult[41] === tmp4.accountConnectedPrivacyOptionsContainer) {
                          if (cResult[42] === tmp18) {
                            let tmp48;
                            if (cResult[43] === tmp45) {
                              tmp48 = cResult[44];
                            }
                            return tmp48;
                          }
                        }
                      }
                    }
                    const obj3 = { style: accountConnectedPrivacyOptionsContainer, children: items };
                    items = [tmp45, tmp33, tmp17, tmp18];
                    const tmp51 = closure_30(closure_8, obj3);
                    cResult[39] = tmp33;
                    cResult[40] = tmp17;
                    cResult[41] = tmp4.accountConnectedPrivacyOptionsContainer;
                    cResult[42] = tmp18;
                    cResult[43] = tmp45;
                    cResult[44] = tmp51;
                    tmp48 = tmp51;
                  }
                  const obj4 = { label: tmp42, value: first1, onValueChange: tmp44 };
                  const tmp47 = closure_29(account(setShowPreviewMetadata[42]).FormSwitchRow, obj4);
                  cResult[36] = tmp44;
                  cResult[37] = first1;
                  cResult[38] = tmp47;
                  tmp45 = tmp47;
                }
              }
              const fn3 = function q(arg0) {
                let id;
                let type;
                setShowPreviewInvisibleIcon(!arg0);
                closure_8(arg0);
                let num = 0;
                const setVisibility = ConnectedAccountsActionCreatorsDefault.setVisibility;
                ({ type, id } = account);
                ConnectedAccountsActionCreatorsDefault;
                if (arg0) {
                  num = 1;
                }
                setVisibility(type, id, num);
              };
              cResult[32] = account.id;
              cResult[33] = account.type;
              cResult[34] = setShowPreviewInvisibleIcon;
              cResult[35] = fn3;
              tmp44 = fn3;
            }
          }
        }
        const tmp14Result = tmp14(setShowPreviewMetadata[20]);
        value = tmp14Result.get(account.type);
        let tmp21;
        if (set.has(account.type)) {
          let tmp23;
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[27]).intl;
            const stringResult2 = intl.string(account(setShowPreviewMetadata[27]).t["+KCMSi"]);
            let num = 12;
            cResult[12] = stringResult2;
            tmp23 = stringResult2;
          } else {
            tmp23 = cResult[12];
          }
          if (cResult[13] === account.id) {
            let tmp25;
            if (cResult[14] === account.type) {
              tmp25 = cResult[15];
            }
            if (cResult[16] === tmp6) {
              let tmp26;
              if (cResult[17] === tmp25) {
                tmp26 = cResult[18];
              }
              tmp21 = tmp26;
            }
            const obj5 = { label: tmp23, value: tmp6, onValueChange: null };
            class H {
              constructor(enabled) {
                _asyncToGenerator(enabled);
                const obj = ConnectedAccountsActionCreatorsDefault;
                obj.setFriendSync(account.type, account.id, enabled);
              }
            }
            const tmp28 = closure_29(account(setShowPreviewMetadata[42]).FormSwitchRow, obj5);
            cResult[16] = tmp6;
            cResult[17] = tmp25;
            cResult[18] = tmp28;
            tmp26 = tmp28;
          }
          class H {
            constructor(enabled) {
              _asyncToGenerator(enabled);
              const obj = ConnectedAccountsActionCreatorsDefault;
              obj.setFriendSync(account.type, account.id, enabled);
            }
          }
          cResult[13] = account.id;
          cResult[14] = account.type;
          cResult[15] = H;
          tmp25 = H;
        }
        let tmp30;
        if (set2.has(account.type)) {
          if (cResult[19] === account.id) {
            let tmp31;
            if (cResult[20] === account.type) {
              tmp31 = cResult[21];
            }
            class W {
              constructor(show_activity) {
                _slicedToArray(show_activity);
                const obj = ConnectedAccountsActionCreatorsDefault;
                obj.setShowActivity(account.type, account.id, show_activity);
              }
            }
            const obj6 = { label: formatToPlainString(account(setShowPreviewMetadata[27]).t["6u6J0q"], tmp32), value: tmp8, onValueChange: tmp31 };
            const FormSwitchRow = tmp(tmp2[42]).FormSwitchRow;
            const intl2 = tmp(tmp2[27]).intl;
            formatToPlainString = intl2.formatToPlainString;
            class H {
              constructor(enabled) {
                _asyncToGenerator(enabled);
                const obj = ConnectedAccountsActionCreatorsDefault;
                obj.setFriendSync(account.type, account.id, enabled);
              }
            }
            tmp32[0] = value.name;
            tmp30 = closure_29(FormSwitchRow, obj6);
          }
          class W {
            constructor(show_activity) {
              _slicedToArray(show_activity);
              const obj = ConnectedAccountsActionCreatorsDefault;
              obj.setShowActivity(account.type, account.id, show_activity);
            }
          }
          cResult[19] = account.id;
          cResult[20] = account.type;
          class H {
            constructor(enabled) {
              _asyncToGenerator(enabled);
              const obj = ConnectedAccountsActionCreatorsDefault;
              obj.setFriendSync(account.type, account.id, enabled);
            }
          }
          cResult[21] = W;
          tmp31 = W;
        }
        cResult[5] = account.id;
        cResult[6] = account.type;
        cResult[7] = tmp6;
        cResult[8] = tmp8;
        cResult[9] = value;
        cResult[10] = tmp30;
        cResult[11] = tmp21;
        tmp17 = tmp30;
        tmp18 = tmp21;
        tmp16 = value;
      }
    }
  }
  const fn = function l() {
    setShowPreviewInvisibleIcon(!first1);
    setShowPreviewMetadata(first);
  };
  cResult[0] = value;
  cResult[1] = setShowPreviewInvisibleIcon;
  cResult[2] = setShowPreviewMetadata;
  cResult[3] = first1;
  cResult[4] = fn;
  tmp13 = fn;
}) : ((account) => {
  let _undefined;
  let c3;
  let closure_4;
  let closure_6;
  let closure_8;
  let first;
  let first1;
  let first2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj4;
  let tmp3;
  account = account.account;
  ({ setShowPreviewInvisibleIcon: importDefault, setShowPreviewMetadata: dependencyMap } = account);
  c3 = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  closure_6 = undefined;
  first2 = undefined;
  closure_8 = undefined;
  const tmp = closure_32();
  [tmp3, c3] = _slicedToArray(first1.useState(account.friendSync), 2);
  const tmp2 = _slicedToArray(first1.useState(account.friendSync), 2);
  [first, _slicedToArray] = first1.useState(account.showActivity);
  [first1, closure_6] = first1.useState(1 === account.metadataVisibility);
  [first2, closure_8] = first1.useState(1 === account.visibility);
  useMountEffectDefault(() => {
    importDefault(!first2);
    dependencyMap(first1);
  });
  let obj = PlatformsDefault;
  const value = obj.get(account.type);
  let tmp13;
  if (set.has(account.type)) {
    const obj2 = {
      label: intl.string(account(1126).t["+KCMSi"]),
      value: tmp3,
      onValueChange(enabled) {
          _undefined(enabled);
          const obj = ConnectedAccountsActionCreatorsDefault;
          obj.setFriendSync(account.type, account.id, enabled);
        }
    };
    const FormSwitchRow = account(8924).FormSwitchRow;
    intl = account(1126).intl;
    tmp13 = closure_29(FormSwitchRow, obj2);
  }
  let tmp16;
  if (set2.has(account.type)) {
    const obj3 = {
      label: intl2.formatToPlainString(account(1126).t["6u6J0q"], obj4),
      value: first,
      onValueChange(show_activity) {
          closure_4(show_activity);
          const obj = ConnectedAccountsActionCreatorsDefault;
          obj.setShowActivity(account.type, account.id, show_activity);
        }
    };
    const FormSwitchRow2 = account(8924).FormSwitchRow;
    intl2 = account(1126).intl;
    obj4 = { platform: value.name };
    tmp16 = closure_29(FormSwitchRow2, obj3);
  }
  let tmp19;
  if (true === value.hasMetadata) {
    const obj5 = {
      label: intl3.string(account(1126).t.FYKGsL),
      value: first1,
      disabled: !first2,
      onValueChange(arg0) {
          let id;
          let type;
          dependencyMap(arg0);
          closure_6(arg0);
          let num = 0;
          const setMetadataVisibility = ConnectedAccountsActionCreatorsDefault.setMetadataVisibility;
          ({ type, id } = account);
          ConnectedAccountsActionCreatorsDefault;
          if (arg0) {
            num = 1;
          }
          const result = setMetadataVisibility(type, id, num);
        }
    };
    const FormSwitchRow3 = account(8924).FormSwitchRow;
    intl3 = account(1126).intl;
    tmp19 = closure_29(FormSwitchRow3, obj5);
  }
  const obj6 = { style: tmp.accountConnectedPrivacyOptionsContainer, children: items };
  const obj7 = {
    label: intl4.string(account(1126).t.f7yOAX),
    value: first2,
    onValueChange(arg0) {
      let id;
      let type;
      importDefault(!arg0);
      closure_8(arg0);
      let num = 0;
      const setVisibility = ConnectedAccountsActionCreatorsDefault.setVisibility;
      ({ type, id } = account);
      ConnectedAccountsActionCreatorsDefault;
      if (arg0) {
        num = 1;
      }
      setVisibility(type, id, num);
    }
  };
  const FormSwitchRow4 = account(8924).FormSwitchRow;
  intl4 = account(1126).intl;
  items = [closure_29(FormSwitchRow4, obj7), tmp19, tmp16, tmp13];
  return closure_30(closure_8, obj6);
});
const constants8 = { CHECKS_REQUIRED: 0, [0]: "CHECKS_REQUIRED", ACCOUNT_CONNECTED: 1, [1]: "ACCOUNT_CONNECTED", ROLE_GRANTED: 2, [2]: "ROLE_GRANTED" };
size = size_mod;
let result = size.fileFinishedImporting("modules/connections/native/GuildRoleConnectionsConnectAccountsActionSheet.tsx");
class GuildRoleConnectionsConnectAccountsActionSheet {
  constructor(guildId) {
    let Button2;
    let Text2;
    let _undefined;
    let _undefined2;
    let applicationId;
    let arr;
    let arr6;
    let c16;
    let c17;
    let c5;
    let c6;
    let c8;
    let closure_10;
    let closure_13;
    let closure_15;
    let closure_7;
    let first;
    let first1;
    let first2;
    let first3;
    let intl;
    let intl10;
    let intl11;
    let intl12;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let intl7;
    let intl8;
    let intl9;
    let items10;
    let items12;
    let items13;
    let items14;
    let items16;
    let items17;
    let items18;
    let items9;
    let obj11;
    let obj15;
    let obj17;
    let obj19;
    let obj25;
    let obj46;
    let obj9;
    let onCloseModal;
    let platformType;
    let tmp13;
    let tmp14;
    let tmp16;
    let tmp17;
    let tmp27;
    let tmp37Result;
    let tmp37Result6;
    let tmp38Result4;
    let tmp4;
    let tmp9;
    const f107083 = () => {
      let tmp3;
      let tmp2 = null;
      if (null != initialAttemptedPlatformType) {
        obj = { platformType: tmp, applicationId: tmp3 };
        tmp3 = _asyncToGenerator;
        if (_asyncToGenerator == null) {
          tmp3 = null;
        }
        tmp2 = obj;
      }
      return tmp2;
    };
    guildId = guildId.guildId;
    const role = guildId.role;
    const initialAttemptedPlatformType = guildId.initialAttemptedPlatformType;
    ({ initialAttemptedApplicationId: _asyncToGenerator, onCloseModal: _slicedToArray } = guildId);
    react = undefined;
    c6 = undefined;
    closure_7 = undefined;
    c8 = undefined;
    first1 = undefined;
    closure_10 = undefined;
    first2 = undefined;
    closure_13 = undefined;
    first3 = undefined;
    closure_15 = undefined;
    c16 = undefined;
    c17 = undefined;
    let obj = function _handleAssignRole() {
      let id;
      obj = _asyncToGenerator(async () => {
        let v1;
        if (c0 === 2) {
          c0 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c0 = 2;
            if (0 === v1) {
              if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_2_10(true);
                const obj2 = v1(initialAttemptedPlatformType[45]);
                v1 = 1;
                c0 = 1;
                const obj5 = { value: obj2.assignGuildRoleConnection(guildId, id.id), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c0 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp10) {
            c0 = 3;
            throw tmp10;
          }
        }
      });
      return obj(...arguments);
    };
    let tmp = closure_32();
    let tmp3 = _slicedToArray(react.useState(constants8.CHECKS_REQUIRED), 2);
    [tmp4, c5] = tmp3;
    let tmp5 = _slicedToArray(react.useState(null), 2);
    [arr, c6] = tmp5;
    [first, closure_7] = react.useState(false);
    let tmp8 = _slicedToArray(react.useState(true), 2);
    [tmp9, c8] = tmp8;
    [first1, closure_10] = react.useState(false);
    [tmp13, tmp14] = _slicedToArray(react.useState(true), 2);
    const tmp12 = _slicedToArray(react.useState(true), 2);
    [tmp16, tmp17] = react.useState(false);
    _slicedToArray(react.useState(false), 2);
    obj = guildId(initialAttemptedPlatformType[43]);
    const items = [first3];
    const stateFromStores = obj.useStateFromStores(items, () => first3.getAccounts());
    let obj2 = guildId(initialAttemptedPlatformType[43]);
    const items1 = [first1];
    const stateFromStores1 = obj2.useStateFromStores(items1, () => first1.getNewestTokens());
    let obj3 = guildId(initialAttemptedPlatformType[43]);
    const items2 = [first2];
    const stateFromStores2 = obj3.useStateFromStores(items2, () => first2.getId());
    [first2, closure_13] = react.useState(null);
    [first3, closure_15] = react.useState(null);
    [tmp27, c16] = react.useState(f107083);
    _slicedToArray(react.useState(f107083), 2);
    [arr6, c17] = react.useState(null);
    _slicedToArray(react.useState(null), 2);
    const tmp30 = role(initialAttemptedPlatformType[19])();
    let obj4 = guildId(initialAttemptedPlatformType[43]);
    const items3 = [closure_15];
    const stateFromStores3 = obj4.useStateFromStores(items3, () => GuildMemberStore.getMember(guildId, stateFromStores2));
    let obj5 = guildId(initialAttemptedPlatformType[43]);
    const items4 = [closure_13];
    const stateFromStores4 = obj5.useStateFromStores(items4, () => ChannelStore.getMutableGuildChannelsForGuild(guildId));
    const items5 = [closure_10];
    const obj6 = guildId(initialAttemptedPlatformType[43]);
    const stateFromStores5 = obj6.useStateFromStores(items5, () => closure_10.locale);
    const values = Object.values(stateFromStores4);
    const found = values.filter((item) => {
      let hasItem = PermissionStore.can(constants3.VIEW_CHANNEL, item) && PermissionStore.can(constants3.SEND_MESSAGES, item);
      if (hasItem) {
        const obj2 = getConnectionsRolesDefault(item);
        hasItem = obj2.includes(role);
      }
      return hasItem;
    });
    const items6 = [guildId, role.id, stateFromStores, stateFromStores1];
    const effect = react.useEffect(() => {
      obj = GuildActionCreatorsDefault;
      const guildRoleConnectionsEligibility = obj.fetchGuildRoleConnectionsEligibility(guildId, role.id);
      guildRoleConnectionsEligibility.then((arr) => {
        closure_1_6(arr);
        closure_1_7(arr.some((arr) => arr.every((item) => item.result)));
        closure_1_8(false);
      });
    }, items6);
    const items7 = [initialAttemptedPlatformType, role.id, guildId];
    const effect1 = react.useEffect(() => {
      if (null == initialAttemptedPlatformType) {
        obj = { role_id: role.id };
        const track = AnalyticsUtilsDefault.track;
        const PASSPORT_CHALLENGE_VIEWED = constants2.PASSPORT_CHALLENGE_VIEWED;
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
        track(PASSPORT_CHALLENGE_VIEWED, obj);
      }
    }, items7);
    const items8 = [first1, found.length, stateFromStores3, guildId, role.id];
    const effect2 = react.useEffect(() => {
      let hasItem = first1 && null != stateFromStores3;
      if (hasItem) {
        const roles = stateFromStores3.roles;
        hasItem = roles.includes(role.id);
      }
      if (hasItem) {
        closure_10(false);
        if (found.length > 0) {
          _undefined(constants.ROLE_GRANTED);
        } else {
          obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        }
        const obj2 = { role_id: role.id };
        const track = AnalyticsUtilsDefault.track;
        const PASSPORT_CHALLENGE_FINISHED = constants2.PASSPORT_CHALLENGE_FINISHED;
        AnalyticsUtilsDefault;
        const obj3 = AppAnalyticsUtils;
        const merged = Object.assign(obj3.collectGuildAnalyticsMetadata(guildId));
        track(PASSPORT_CHALLENGE_FINISHED, obj2);
      }
    }, items8);
    const obj7 = { style: tmp.container, children: items9 };
    BottomSheet = guildId(initialAttemptedPlatformType[58]).BottomSheet;
    if (constants8.CHECKS_REQUIRED === tmp4) {
      const obj8 = { style: tmp.header, children: closure_29(Text2, obj9) };
      obj9 = { variant: "heading-lg/extrabold", children: intl2.string(guildId(initialAttemptedPlatformType[27]).t.zOZh3R) };
      Text2 = tmp18(tmp19[26]).Text;
      intl2 = tmp18(tmp19[27]).intl;
      tmp37Result = closure_29(tmp39, obj8);
    } else if (constants8.ACCOUNT_CONNECTED === tmp4) {
      role(initialAttemptedPlatformType[37])(null != first2, "lastPlatformConnected is null");
      const tmp29Result = role(initialAttemptedPlatformType[20]);
      const value = tmp29Result.get(first2);
      let name;
      if (value != null) {
        name = value.name;
      }
      if (name == null) {
        let name1;
        if (first3 != null) {
          name1 = first3.name;
        }
        name = name1;
      }
      const obj10 = { variant: "heading-lg/extrabold", style: tmp.header, children: intl.format(guildId(initialAttemptedPlatformType[27]).t.yQvgBO, obj11) };
      const Text = tmp18(tmp19[26]).Text;
      intl = tmp18(tmp19[27]).intl;
      obj11 = { platformName: name };
      tmp37Result = closure_29(Text, obj10);
    } else {
      tmp37Result = null;
      if (constants8.ROLE_GRANTED === tmp4) {
        const obj12 = { variant: "heading-lg/extrabold", style: tmp.header, children: intl12.string(guildId(initialAttemptedPlatformType[27]).t.najNdz) };
        const Text8 = tmp18(tmp19[26]).Text;
        intl12 = tmp18(tmp19[27]).intl;
        tmp37Result = closure_29(Text8, obj12);
      }
    }
    function handleManageConnections() {
      if (_slicedToArray != null) {
        tmp();
      }
      obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = openUserSettings;
      const obj3 = { screen: constants.CONNECTIONS };
      obj2.openUserSettings(obj3);
    }
    function handleManageAuthorizedApplications() {
      if (_slicedToArray != null) {
        tmp();
      }
      obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = openUserSettings;
      const obj3 = { screen: constants.AUTHORIZED_APPS };
      obj2.openUserSettings(obj3);
    }
    items9 = [tmp37Result, , ];
    if (constants8.CHECKS_REQUIRED === tmp4) {
      let tmp56 = null != arr;
      if (tmp56) {
        tmp56 = arr.length > 1;
      }
      let tmp57 = null != arr;
      if (tmp57) {
        tmp57 = 1 === arr.length;
      }
      if (tmp57) {
        tmp57 = 1 === arr[0].length;
      }
      if (!tmp9) {
        let tmp37Result4;
        if (null != arr) {
          let jHfRvZ;
          const obj13 = { style: tmp.content, children: items10 };
          const Text9 = tmp18(tmp19[26]).Text;
          const intl13 = tmp18(tmp19[27]).intl;
          const format = intl13.format;
          const t = tmp18(tmp19[27]).t;
          if (tmp57) {
            jHfRvZ = t.jHfRvZ;
          } else {
            jHfRvZ = tmp56 ? t["mOQ8k+"] : t.U0olLg;
          }
          const obj14 = { variant: "text-md/medium", color: "text-default", children: format(jHfRvZ, obj15) };
          function handlePlatformAttempt() {
            const track = AnalyticsUtilsDefault.track;
            const PASSPORT_CHALLENGE_STARTED = constants2.PASSPORT_CHALLENGE_STARTED;
            obj = { role_id: role.id };
            AnalyticsUtilsDefault;
            const obj2 = AppAnalyticsUtils;
            const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
            track(PASSPORT_CHALLENGE_STARTED, obj);
          }
          function handlePlatformConnect(platformType, role_connections_verification_url) {
            let prop;
            obj = {
              platformType,
              location: "Verified Roles Connect Accounts Modal",
              onClose() {
                let tmp8;
                let id;
                if (role_connections_verification_url != null) {
                  id = role_connections_verification_url.id;
                }
                if (id == null) {
                  id = null;
                }
                let prop;
                if (role_connections_verification_url != null) {
                  prop = role_connections_verification_url.role_connections_verification_url;
                }
                const openLazy = role_connections_verification_url(initialAttemptedPlatformType[48]).openLazy;
                obj = { default: closure_1_40 };
                role_connections_verification_url(initialAttemptedPlatformType[48]);
                const resolved = Promise.resolve(obj);
                const obj3 = { role, guildId, initialAttemptedPlatformType: platformType, initialAttemptedApplicationId: tmp8, overrideUrl: { overrideUrl: prop }.overrideUrl, onCloseModal: _slicedToArray };
                tmp8 = null;
                const obj2 = platformType(initialAttemptedPlatformType[50]);
                const guildRoleConnectionsConnectAccountsActionSheetKey = obj2.makeGuildRoleConnectionsConnectAccountsActionSheetKey(role.id);
                if (null != platformType) {
                  tmp8 = id;
                }
                openLazy(resolved, guildRoleConnectionsConnectAccountsActionSheetKey, obj3);
              },
              overrideUrl: prop
            };
            prop = undefined;
            const tmp = role(initialAttemptedPlatformType[51]);
            if (role_connections_verification_url != null) {
              prop = role_connections_verification_url.role_connections_verification_url;
            }
            tmp(obj);
          }
          function handlePlatformIdentityAuthorize(applicationId) {
            let connectedAccountProvider;
            let scopes;
            applicationId = applicationId.applicationId;
            const wasAlreadyConnected = applicationId.wasAlreadyConnected;
            ({ scopes, connectedAccountProvider } = applicationId);
            obj = role(initialAttemptedPlatformType[48]);
            obj.hideActionSheet();
            const combined = "OAuth2AuthorizeModal-" + applicationId;
            let obj2 = role(initialAttemptedPlatformType[52]);
            function handleModalClose(key) {
              let tmp14;
              if (key.key === combined) {
                const obj4 = DispatcherDefault;
                obj4.unsubscribe("MODAL_POP", handleModalClose);
                let tmp = null;
                if (!wasAlreadyConnected) {
                  tmp = closure_20;
                }
                obj = { default: closure_1_40 };
                const openLazy = wasAlreadyConnected(combined[48]).openLazy;
                wasAlreadyConnected(combined[48]);
                const resolved = Promise.resolve(obj);
                const obj3 = { role, guildId, initialAttemptedPlatformType: tmp, initialAttemptedApplicationId: tmp14, overrideUrl: {}.overrideUrl, onCloseModal: _slicedToArray };
                tmp14 = null;
                const obj2 = applicationId(combined[50]);
                const guildRoleConnectionsConnectAccountsActionSheetKey = obj2.makeGuildRoleConnectionsConnectAccountsActionSheetKey(role.id);
                if (null != tmp) {
                  tmp14 = applicationId;
                }
                openLazy(resolved, guildRoleConnectionsConnectAccountsActionSheetKey, obj3);
              }
            }
            const subscription = obj2.subscribe("MODAL_POP", handleModalClose);
            const pushLazy = role(initialAttemptedPlatformType[53]).pushLazy;
            let obj3 = {
              clientId: applicationId,
              scopes,
              integrationType: guildId(initialAttemptedPlatformType[56]).ApplicationIntegrationType.USER_INSTALL,
              connectedAccountProvider,
              callback() {

              },
              dismissOAuthModal() {
                obj = ModalActionCreatorsDefault;
                return obj.popWithKey(combined);
              }
            };
            role(initialAttemptedPlatformType[53]);
            const tmp5 = guildId(initialAttemptedPlatformType[55])(initialAttemptedPlatformType[54], initialAttemptedPlatformType.paths);
            pushLazy(tmp5, obj3, combined);
          }
          function handlePlatformConnected(arg0, arg1) {
            closure_13(arg0);
            closure_15(arg1);
            _undefined(constants.ACCOUNT_CONNECTED);
            _undefined2(null);
            if (null != arg1) {
              obj = ConnectionsRoleActionCreators;
              const userApplicationRoleConnections = obj.fetchUserApplicationRoleConnections();
              const nextPromise = userApplicationRoleConnections.then((result) => {
                closure_1_17(result);
              });
              nextPromise.catch(() => {

              });
            }
          }
          obj15 = { roleName: role.name };
          items10 = [closure_29(Text9, obj14), , ];
          const obj16 = { style: tmp.connectionsChecksGroups, children: closure_29(closure_37, obj17) };
          obj17 = { eligibilityStatesGroups: arr, onPlatformAttempt: handlePlatformAttempt, onPlatformConnect: handlePlatformConnect, onPlatformConnected: handlePlatformConnected, onPlatformIdentityAuthorize: handlePlatformIdentityAuthorize, initialAttemptedPlatformType: platformType, initialAttemptedApplicationId: applicationId };
          platformType = undefined;
          if (tmp27 != null) {
            platformType = tmp27.platformType;
          }
          if (platformType == null) {
            platformType = null;
          }
          applicationId = undefined;
          if (tmp27 != null) {
            applicationId = tmp27.applicationId;
          }
          if (applicationId == null) {
            applicationId = null;
          }
          items10[1] = closure_29(c8, obj16);
          const obj18 = { variant: "text-xs/normal", style: tmp.footerText, color: "text-default", children: intl7.format(guildId(initialAttemptedPlatformType[27]).t.gsgvxh, obj19) };
          const Text7 = tmp18(tmp19[26]).Text;
          intl7 = tmp18(tmp19[27]).intl;
          obj19 = { privacyPolicyUrl: constants6.PRIVACY, onAuthorizedApplicationsClick: handleManageAuthorizedApplications, onConnectionsClick: handleManageConnections };
          items10[2] = closure_29(Text7, obj18);
          tmp37Result4 = closure_30(tmp39, obj13);
        }
        tmp38Result4 = tmp37Result4;
      }
      const obj20 = { size: "large", style: tmp.loading };
      tmp37Result4 = closure_29(c6, obj20);
    } else if (constants8.ACCOUNT_CONNECTED === tmp4) {
      role(initialAttemptedPlatformType[37])(null != first2, "lastPlatformConnected is null");
      const found1 = stateFromStores.find((type) => first2 === type.type);
      let found2;
      if (arr6 != null) {
        found2 = arr6.find((application) => {
          let id1;
          const id = application.application.id;
          if (first3 != null) {
            id1 = first3.id;
          }
          return id === id1;
        });
      }
      const obj21 = { style: tmp.content, children: null };
      const obj22 = { style: tmp.accountConnectedContainer, children: null };
      if (null == found1) {
        let tmp37Result5;
        if (null == found2) {
          const obj23 = { size: "large", style: tmp.loading };
          tmp37Result5 = closure_29(c6, obj23);
        }
        obj22.children = tmp37Result5;
        const items11 = [closure_29(c8, obj22), ];
        const obj24 = { variant: "text-md/normal", color: "text-default", children: intl6.format(guildId(initialAttemptedPlatformType[27]).t.gsgvxh, obj25) };
        const Text6 = tmp18(tmp19[26]).Text;
        intl6 = tmp18(tmp19[27]).intl;
        obj25 = { privacyPolicyUrl: constants6.PRIVACY, onAuthorizedApplicationsClick: handleManageAuthorizedApplications, onConnectionsClick: handleManageConnections };
        items11[1] = closure_29(Text6, obj24);
        obj21.children = items11;
        tmp38Result4 = closure_30(tmp39, obj21);
      }
      let tmp38Result5 = null;
      if (null != found1) {
        const obj26 = { children: items13 };
        const obj27 = { style: tmp.accountConnectedPreview, children: items12 };
        const obj28 = { variant: "eyebrow", color: "text-default", children: intl3.string(guildId(initialAttemptedPlatformType[27]).t.TOjkEg) };
        const Text3 = tmp18(tmp19[26]).Text;
        intl3 = tmp18(tmp19[27]).intl;
        items12 = [closure_29(Text3, obj28), ];
        const obj29 = { account: found1, userId: stateFromStores2, theme: tmp30, locale: stateFromStores5, style: tmp.accountConnectedPreviewConnectedUserAccount, showMetadata: tmp13, showInvisibleIcon: tmp16 };
        items12[1] = closure_29(guildId(initialAttemptedPlatformType[59]).ConnectedUserAccount, obj29);
        items13 = [closure_30(c8, obj27), ];
        const obj30 = { style: tmp.accountConnectedPrivacy, children: items14 };
        const obj31 = { variant: "eyebrow", color: "text-default", children: intl4.string(guildId(initialAttemptedPlatformType[27]).t.jndPhX) };
        const Text4 = tmp18(tmp19[26]).Text;
        intl4 = tmp18(tmp19[27]).intl;
        items14 = [closure_29(Text4, obj31), ];
        const obj32 = { account: found1, setShowPreviewInvisibleIcon: tmp17, setShowPreviewMetadata: tmp14 };
        items14[1] = closure_29(closure_38, obj32);
        items13[1] = closure_30(c8, obj30);
        tmp38Result5 = closure_30(closure_31, obj26);
      }
      const items15 = [tmp38Result5, ];
      let tmp38Result6 = null;
      if (null != found2) {
        const obj33 = { style: tmp.accountConnectedPreview, children: items16 };
        const obj34 = { variant: "eyebrow", color: "text-default", children: intl5.string(guildId(initialAttemptedPlatformType[27]).t.TOjkEg) };
        const Text5 = tmp18(tmp19[26]).Text;
        intl5 = tmp18(tmp19[27]).intl;
        items16 = [closure_29(Text5, obj34), ];
        const obj35 = { applicationRoleConnection: found2, theme: tmp30, locale: stateFromStores5, style: tmp.accountConnectedPreviewConnectedUserAccount };
        items16[1] = closure_29(guildId(initialAttemptedPlatformType[59]).ConnectedApplicationUserRoleAccount, obj35);
        tmp38Result6 = closure_30(tmp39, obj33);
      }
      const obj36 = { children: items15 };
      items15[1] = tmp38Result6;
      tmp37Result5 = closure_30(closure_31, obj36);
    } else {
      tmp38Result4 = null;
      if (constants8.ROLE_GRANTED === tmp4) {
        const obj37 = { style: tmp.content, children: items18 };
        const obj38 = { style: tmp.roleGranted, children: items17 };
        const obj39 = { guildId, style: tmp.verifiedIcon, role, size: 24 };
        items17 = [closure_29(role(initialAttemptedPlatformType[60]), obj39), ];
        const obj40 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: tmp.roleGrantedName, children: role.name };
        items17[1] = closure_29(guildId(initialAttemptedPlatformType[26]).Text, obj40);
        items18 = [closure_30(c8, obj38), ];
        const obj41 = {
          style: tmp.channelsGranted,
          children: found.map((channel) => {
                obj = { channel };
                return closure_1_29(closure_1_34, obj, channel.id);
              })
        };
        items18[1] = closure_29(c8, obj41);
        tmp38Result4 = closure_30(tmp39, obj37);
      }
    }
    items9[1] = tmp38Result4;
    if (constants8.CHECKS_REQUIRED === tmp4) {
      const obj42 = {
        variant: "primary",
        onPress() {
            function handleAssignRole() {
              return obj(...arguments);
            }
            return handleAssignRole();
          },
        disabled: tmp9,
        text: intl11.string(guildId(initialAttemptedPlatformType[27]).t["8SuVoE"]),
        grow: true
      };
      const Button4 = tmp18(tmp19[61]).Button;
      if (!tmp9) {
        tmp9 = !first;
      }
      if (!tmp9) {
        tmp9 = first1;
      }
      intl11 = tmp18(tmp19[27]).intl;
      tmp37Result6 = closure_29(Button4, obj42);
    } else if (constants8.ACCOUNT_CONNECTED === tmp4) {
      const obj43 = {
        variant: "primary",
        onPress() {
            return _undefined(constants.CHECKS_REQUIRED);
          },
        text: intl10.string(guildId(initialAttemptedPlatformType[27]).t.i4jeWR),
        grow: true
      };
      const Button3 = tmp18(tmp19[61]).Button;
      intl10 = tmp18(tmp19[27]).intl;
      tmp37Result6 = closure_29(Button3, obj43);
    } else {
      let flag;
      if (arr != null) {
        const flatResult = arr.flat();
        flag = flatResult.some((application_id) => null == application_id.application_id);
      }
      if (flag == null) {
        flag = false;
      }
      const obj44 = {
        variant: "primary",
        onPress() {
            if (_slicedToArray != null) {
              tmp();
            }
            obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          },
        text: intl8.string(guildId(initialAttemptedPlatformType[27]).t.cpT0Cq),
        grow: true
      };
      const Button = tmp18(tmp19[61]).Button;
      intl8 = tmp18(tmp19[27]).intl;
      const items19 = [closure_29(Button, obj44), ];
      let tmp37Result7 = null;
      if (flag) {
        const obj45 = { style: tmp.manageConnectionsButton, children: closure_29(Button2, obj46) };
        obj46 = { variant: "secondary", onPress: handleManageConnections, text: intl9.string(guildId(initialAttemptedPlatformType[27]).t.VXV55P), grow: true };
        Button2 = tmp18(tmp19[61]).Button;
        intl9 = tmp18(tmp19[27]).intl;
        tmp37Result7 = closure_29(tmp39, obj45);
      }
      const obj47 = { children: items19 };
      items19[1] = tmp37Result7;
      tmp37Result6 = closure_30(closure_31, obj47);
    }
    items9[2] = tmp37Result6;
    const obj48 = { children: closure_30(c8, obj7) };
    return closure_29(BottomSheet, obj48);
  }
}

export default GuildRoleConnectionsConnectAccountsActionSheet;