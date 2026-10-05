// === Module 11179: GuildRoleConnectionsConnectAccountsActionSheet ===

// Module 11179 (GuildRoleConnectionsConnectAccountsActionSheet)
import _modDef12 from "module_12" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import c from "c" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import shared from "shared" /* 4729 */;
import useThemeDefault from "useTheme" /* 4791 */;
import _modDef4811 from "module_4811" /* 4811 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import useChannelNameDefault from "useChannelName" /* 5043 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5070 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import PlatformsDefault from "Platforms" /* 5442 */;
import useMountEffectDefault from "useMountEffect" /* 5590 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5705 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5812 */;
import ConnectedAccountsActionCreatorsDefault from "ConnectedAccountsActionCreators" /* 6677 */;
import ConnectionsUtils from "ConnectionsUtils" /* 6678 */;
import getConnectionsRolesDefault from "getConnectionsRoles" /* 6680 */;
import openUserSettings from "openUserSettings" /* 6885 */;
import BotTagDefault from "BotTag" /* 8961 */;
import _modDef11181 from "module_11181" /* 11181 */;
import _modDef11182 from "module_11182" /* 11182 */;
import OfficialConnectionIconDefault from "OfficialConnectionIcon" /* 11183 */;
import ConnectionsRoleActionCreators from "ConnectionsRoleActionCreators" /* 11190 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 6602 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import UserRecord from "UserRecord" /* 1391 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5440 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import PermissionStore from "PermissionStore" /* 4509 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, Pressable: closure_7, View: closure_8 } = get_ActivityIndicator);
let Constants = fn(6679);
({ MetadataFields: closure_17, OperatorTypes: closure_18, GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE: closure_19, GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE: closure_20 } = Constants);
Constants = fn(1085);
({ PlatformTypes: closure_21, UserSettingsSections: closure_22, AnalyticEvents: closure_23, MarketingURLs: closure_24, FRIEND_SYNC_PLATFORM_TYPES: closure_25, ACTIVITY_PLATFORM_TYPES: closure_26, Permissions: closure_27, EMPTY_STRING_SNOWFLAKE_ID: closure_28 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_29, jsxs: closure_30, Fragment: items } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { padding: 12 }, connectionsChecksGroups: { marginTop: 16, flexDirection: "column" }, connectionsChecksGroup: { flexDirection: "row", borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 2, borderRadius: nativeDefault.radii.md, paddingHorizontal: 16, paddingVertical: 20, marginBottom: 16, width: "100%", alignItems: "center", position: "relative" }, connectionsChecksGroupPassed: null, connectionsChecksGroupPlatformDisabled: null, connectionsChecksGroupRequirementsNotMet: null, connectionsChecksGroupTextContainer: null, connectionsChecksGroupTextNameContainer: null, connectionsChecksGroupTextNameInfoIcon: null, connectionsChecksGroupCheckmark: null, connectionsChecksGroupCaret: null, connectionsCheck: null, platformIcon: null, channelName: null, channelNameIcon: null, channelNameText: null, header: null, content: null, footerText: null, accountConnectedContainer: null, accountConnectedPreview: null, accountConnectedPreviewConnectedUserAccount: null, accountConnectedPrivacy: null, accountConnectedPrivacyOptionsContainer: null, roleGranted: null, roleGrantedName: null, verifiedIcon: null, channelsGranted: null, manageConnectionsButton: null, loading: null, appIcon: null, botTag: null };
let obj3 = { flexDirection: "row", borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 2, borderRadius: nativeDefault.radii.md, paddingHorizontal: 16, paddingVertical: 20, marginBottom: 16, width: "100%", alignItems: "center", position: "relative" };
obj2.connectionsChecksGroupPassed = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let obj4 = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.connectionsChecksGroupPlatformDisabled = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
const rect = { paddingVertical: 4, paddingHorizontal: 12, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, position: "absolute", top: -8, right: 20 };
obj2.connectionsChecksGroupRequirementsNotMet = rect;
obj2.connectionsChecksGroupTextContainer = { flex: 1 };
obj2.connectionsChecksGroupTextNameContainer = { flexDirection: "row", alignItems: "center" };
let obj5 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.connectionsChecksGroupTextNameInfoIcon = { marginLeft: 4, tintColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
let size = { tintColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE, width: 24, height: 24 };
obj2.connectionsChecksGroupCheckmark = size;
const size1 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: 24, height: 24 };
obj2.connectionsChecksGroupCaret = size1;
obj2.connectionsCheck = { marginTop: 4 };
obj2.platformIcon = { width: 24, height: 24, marginRight: 12 };
obj2.channelName = { flexDirection: "row", alignItems: "center", marginBottom: 4 };
const size2 = { tintColor: nativeDefault.colors.TEXT_MUTED, marginRight: 8, width: 24, height: 24 };
obj2.channelNameIcon = size2;
obj2.channelNameText = { overflow: "hidden" };
obj2.header = { flexDirection: "row", width: "100%", alignItems: "center", marginBottom: 8 };
obj2.content = { width: "100%" };
obj2.footerText = { marginBottom: 16 };
obj2.accountConnectedContainer = { flexDirection: "column", alignItems: "flex-start", marginVertical: 24 };
obj2.accountConnectedPreview = { width: "100%" };
let obj6 = { marginLeft: 4, tintColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
obj2.accountConnectedPreviewConnectedUserAccount = { marginTop: 8, borderRadius: nativeDefault.radii.xs, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.accountConnectedPrivacy = { marginTop: 16, width: "100%" };
let obj7 = { marginTop: 8, borderRadius: nativeDefault.radii.xs, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.accountConnectedPrivacyOptionsContainer = { marginTop: 8, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.xs, padding: 8, flexDirection: "column" };
let obj8 = { marginTop: 8, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.xs, padding: 8, flexDirection: "column" };
obj2.roleGranted = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingVertical: 12, paddingHorizontal: 8, borderTopStartRadius: 4, borderTopEndRadius: 4, marginTop: 16 };
obj2.roleGrantedName = { overflow: "hidden", marginRight: 24 };
obj2.verifiedIcon = { marginRight: 8 };
let obj9 = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingVertical: 12, paddingHorizontal: 8, borderTopStartRadius: 4, borderTopEndRadius: 4, marginTop: 16 };
obj2.channelsGranted = { flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, padding: 16, borderBottomStartRadius: 4, borderBottomEndRadius: 4, marginBottom: 24 };
obj2.manageConnectionsButton = { marginTop: 8 };
obj2.loading = { marginTop: 24, marginBottom: 32, alignSelf: "center" };
obj2.appIcon = { marginRight: 8 };
obj2.botTag = { marginLeft: 4 };
const __initData5 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_33 = ReactCompilerGating.isReactCompilerEnabled() ? ((platformType) => {
  const cResult = c.c(6);
  platformType = platformType.platformType;
  const tmp4 = closure_32();
  const tmp6 = useThemeDefault();
  if (cResult[0] === platformType) {
    if (cResult[1] === tmp6) {
      if (cResult[3] === cResult[2]) {
        if (cResult[4] === tmp4.platformIcon) {
          let tmp10 = cResult[5];
        }
        return tmp10;
      }
      const obj2 = { source: cResult[2], style: tmp4.platformIcon, disableColor: true };
      const tmp12 = closure_1_29(native.Icon, obj2);
      cResult[3] = cResult[2];
      cResult[4] = tmp4.platformIcon;
      cResult[5] = tmp12;
      tmp10 = tmp12;
    }
  }
  value = PlatformsDefault.get(platformType);
  const tmp5Result = PlatformsDefault;
  const tmpResult = AvatarUtils;
  const icon = value.icon;
  const source = tmpResult.makeSource(shared.isThemeLight(tmp6) ? icon.lightPNG : icon.darkPNG);
  cResult[0] = platformType;
  cResult[1] = tmp6;
  cResult[2] = source;
  const tmpResult2 = shared;
}) : ((platformType) => {
  const tmp = closure_32();
  const tmp3 = useThemeDefault();
  value = PlatformsDefault.get(platformType.platformType);
  const obj2 = AvatarUtils;
  const icon = value.icon;
  const source = obj2.makeSource(shared.isThemeLight(tmp3) ? icon.lightPNG : icon.darkPNG);
  return closure_1_29(native.Icon, { source, style: tmp.platformIcon, disableColor: true });
});
ReactCompilerGating = fn(558);
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(15);
  ({ channel, style } = arg0);
  const tmp4 = closure_32();
  if (cResult[0] !== channel) {
    const channelIcon = utils_ChannelUtils.getChannelIcon(channel);
    cResult[0] = channel;
    cResult[1] = channelIcon;
    let tmp5 = channelIcon;
    const tmpResult = utils_ChannelUtils;
  } else {
    tmp5 = cResult[1];
  }
  const tmp7 = useChannelNameDefault(channel);
  if (cResult[2] === style) {
    if (cResult[3] === tmp4.channelName) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] === tmp5) {
      if (cResult[6] === tmp4.channelNameIcon) {
        let tmp9 = cResult[7];
      }
      if (cResult[8] === tmp7) {
        if (cResult[9] === tmp4.channelNameText) {
          let tmp12 = cResult[10];
        }
        if (cResult[11] === tmp8) {
          if (cResult[12] === tmp9) {
            if (cResult[13] === tmp12) {
              let tmp15 = cResult[14];
            }
            return tmp15;
          }
        }
        const obj2 = { style: tmp8, children: null };
        const items = [tmp9, tmp12];
        obj2.children = items;
        const tmp18 = __initData3(closure_1_8, obj2);
        cResult[11] = tmp8;
        cResult[12] = tmp9;
        cResult[13] = tmp12;
        cResult[14] = tmp18;
        tmp15 = tmp18;
      }
      const obj3 = { variant: "heading-lg/semibold", color: "text-default", style: tmp4.channelNameText, lineClamp: 1, children: tmp7 };
      const tmp14 = closure_1_29(Text_Text.Text, obj3);
      cResult[8] = tmp7;
      cResult[9] = tmp4.channelNameText;
      cResult[10] = tmp14;
      tmp12 = tmp14;
    }
    let tmp10 = null;
    if (null != tmp5) {
      const obj4 = { source: tmp5, style: tmp4.channelNameIcon };
      tmp10 = closure_1_29(native.Icon, obj4);
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
  channel = channel.channel;
  const tmp = closure_32();
  const channelIcon = utils_ChannelUtils.getChannelIcon(channel);
  const obj2 = { style: null, children: null };
  const items = [tmp.channelName, channel.style];
  obj2.style = items;
  let tmp8 = null;
  if (null != channelIcon) {
    const obj3 = { source: channelIcon, style: tmp.channelNameIcon };
    tmp8 = closure_1_29(native.Icon, obj3);
  }
  const items1 = [tmp8, ];
  const tmp5 = useChannelNameDefault(channel);
  items1[1] = closure_1_29(Text_Text.Text, { variant: "heading-lg/semibold", color: "text-default", style: tmp.channelNameText, lineClamp: 1, children: useChannelNameDefault(channel) });
  obj2.children = items1;
  return __initData3(closure_1_8, obj2);
});
ReactCompilerGating = fn(558);
let closure_35 = ReactCompilerGating.isReactCompilerEnabled() ? ((result) => {
  const cResult = c.c(16);
  ({ connectionType, connectionMetadataField, operator, value, description } = result);
  const tmp4 = closure_32();
  if (connectionType === closure_1_20) {
    return null;
  } else {
    if (null != description) {
      if (constants2.LESS_THAN === operator) {
        if (cResult[0] === description) {
        }
        const intl2 = util.intl;
        const obj2 = { description, count: null };
        const _Math2 = Math;
        const _Number2 = Number;
        obj2.count = Math.max(0, Number(value) - 1);
        const formatResult = intl2.format(util.t["2p7dA3"], obj2);
        cResult[0] = description;
        cResult[1] = value;
        cResult[2] = formatResult;
      } else {
        let tmp9 = description;
        if (tmp11.GREATER_THAN === operator) {
          if (cResult[3] === description) {
            if (cResult[4] === value) {
              let tmp12 = cResult[5];
            }
            tmp9 = tmp12;
          }
          const intl = util.intl;
          const obj3 = { description, count: null };
          const _Math = Math;
          const _Number = Number;
          obj3.count = Math.max(0, Number(value) + 1);
          const formatResult1 = intl.format(util.t["2p7dA3"], obj3);
          cResult[3] = description;
          cResult[4] = value;
          cResult[5] = formatResult1;
          tmp12 = formatResult1;
        }
      }
    } else {
      if (constants2.EQUAL === operator) {
        let tmp7 = connectionType === constants3.PAYPAL;
        if (tmp7) {
          tmp7 = connectionMetadataField === constants.PAYPAL_VERIFIED;
        }
        let v0BlpbA = util.t["0BlpbA"];
        if (tmp7) {
          v0BlpbA = util.t.dcSDhW;
        }
      } else if (constants2.NOT_EQUAL === operator) {
        v0BlpbA = util.t.otcpTN;
      } else if (constants2.LESS_THAN === operator) {
        v0BlpbA = util.t.Ef35xs;
      } else if (constants2.GREATER_THAN === operator) {
        v0BlpbA = util.t["8W9OXU"];
      } else {
        return null;
      }
      if (cResult[6] === connectionMetadataField) {
        if (cResult[7] === connectionType) {
          if (cResult[8] === operator) {
            if (cResult[9] === v0BlpbA) {
              if (cResult[10] === value) {
                tmp9 = cResult[11];
              }
            }
          }
        }
      }
      const obj4 = { connectionType, connectionMetadataField, operator, operatorText: v0BlpbA, value };
      const connectionsCheckText = ConnectionsUtils.getConnectionsCheckText(obj4);
      cResult[6] = connectionMetadataField;
      cResult[7] = connectionType;
      cResult[8] = operator;
      cResult[9] = v0BlpbA;
      cResult[10] = value;
      cResult[11] = connectionsCheckText;
      tmp9 = connectionsCheckText;
      const tmpResult = ConnectionsUtils;
    }
    if (null == tmp9) {
      return null;
    } else {
      let str = "text-feedback-critical";
      if (result.result) {
        str = "text-default";
      }
      if (cResult[12] === tmp9) {
        if (cResult[13] === tmp4.connectionsCheck) {
          if (cResult[14] === str) {
            let tmp19 = cResult[15];
          }
          return tmp19;
        }
      }
      const obj5 = { variant: "text-xs/normal", color: str, style: tmp4.connectionsCheck, children: tmp9 };
      const tmp21 = closure_1_29(Text_Text.Text, obj5);
      cResult[12] = tmp9;
      cResult[13] = tmp4.connectionsCheck;
      cResult[14] = str;
      cResult[15] = tmp21;
      tmp19 = tmp21;
    }
  }
}) : ((result) => {
  ({ connectionType, connectionMetadataField, operator, value, description } = result);
  if (connectionType === closure_1_20) {
    return null;
  } else {
    if (null != description) {
      if (constants2.LESS_THAN === operator) {
        const intl = util.intl;
        const obj2 = { description, count: null };
        const _Math = Math;
        const _Number = Number;
        obj2.count = Math.max(0, Number(value) - 1);
        let formatResult = intl.format(util.t["2p7dA3"], obj2);
      } else {
        formatResult = description;
        if (tmp17.GREATER_THAN === operator) {
          const intl2 = util.intl;
          const obj3 = { description, count: null };
          const _Math2 = Math;
          const _Number2 = Number;
          obj3.count = Math.max(0, Number(value) + 1);
          formatResult = intl2.format(util.t["2p7dA3"], obj3);
        }
      }
    } else {
      if (constants2.EQUAL === operator) {
        let tmp12 = connectionType === constants3.PAYPAL;
        if (tmp12) {
          tmp12 = connectionMetadataField === constants.PAYPAL_VERIFIED;
        }
        let v0BlpbA = util.t["0BlpbA"];
        if (tmp12) {
          v0BlpbA = util.t.dcSDhW;
        }
      } else if (constants2.NOT_EQUAL === operator) {
        v0BlpbA = util.t.otcpTN;
      } else if (constants2.LESS_THAN === operator) {
        v0BlpbA = util.t.Ef35xs;
      } else if (constants2.GREATER_THAN === operator) {
        v0BlpbA = util.t["8W9OXU"];
      } else {
        return null;
      }
      const obj4 = { connectionType, connectionMetadataField, operator, operatorText: v0BlpbA, value };
      formatResult = ConnectionsUtils.getConnectionsCheckText(obj4);
    }
    let tmp22Result = null;
    if (null != formatResult) {
      let str = "text-feedback-critical";
      if (result.result) {
        str = "text-default";
      }
      const obj5 = { variant: "text-xs/normal", color: str, style: tmp.connectionsCheck, children: formatResult };
      tmp22Result = closure_1_29(Text_Text.Text, obj5);
    }
    return tmp22Result;
  }
});
ReactCompilerGating = fn(558);
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? ((eligibilityState) => {
  const cResult = canStartAuthorization(identity_connected_account_type[18]).c(57);
  eligibilityState = eligibilityState.eligibilityState;
  const onAttempted = eligibilityState.onAttempted;
  const onIdentityAuthorize = eligibilityState.onIdentityAuthorize;
  const tmp4 = closure_32();
  let obj = canStartAuthorization(identity_connected_account_type[18]);
  const getOrFetchApplicationBatched = canStartAuthorization(identity_connected_account_type[29]).useGetOrFetchApplicationBatched(eligibilityState.application_id);
  const tmp7 = identity_auth_required_scopes(identity_connected_account_type[30])(getOrFetchApplicationBatched);
  canStartAuthorization = tmp7.canStartAuthorization;
  const startAuthorization = tmp7.startAuthorization;
  if (cResult[0] === canStartAuthorization) {
    if (cResult[1] === eligibilityState.identity_auth_required_scopes) {
      if (cResult[2] === eligibilityState.identity_connected_account_type) {
        canStartAuthorization = cResult[3];
        identity_auth_required_scopes = cResult[4];
        identity_connected_account_type = cResult[5];
      }
      const application = eligibilityState.application;
      if (cResult[6] !== application) {
        let bot;
        if (application != null) {
          bot = application.bot;
        }
        let tmp15 = null;
        if (null != bot) {
          tmp15 = new UserRecord(application.bot);
        }
        cResult[6] = application;
        cResult[7] = tmp15;
        let obj3 = tmp15;
      } else {
        obj3 = cResult[7];
      }
      const result = eligibilityState.result;
      if (null == obj3) {
        if (result) {
          if (cResult[13] !== tmp4.connectionsChecksGroupCheckmark) {
            const obj4 = { source: tmp6(tmp2[32]), style: tmp4.connectionsChecksGroupCheckmark };
            const tmp36 = closure_29(tmp(tmp2[23]).Icon, obj4);
            cResult[13] = tmp4.connectionsChecksGroupCheckmark;
            cResult[14] = tmp36;
          }
        } else {
          if (tmp8) {
            if (cResult[16] !== tmp4.connectionsChecksGroupCaret) {
              const obj5 = { source: null, style: null };
              class G {
                constructor() {
                  if (!result) {
                    tmp = c0;
                    if (c0) {
                      tmp2 = closure_2;
                      tmp3 = null;
                      someResult = null != closure_2;
                      if (someResult) {
                        tmp5 = closure_14;
                        accounts = closure_14.getAccounts();
                        someResult = accounts.some(() => { ... });
                      }
                      connection_type = null;
                      tmp6 = onAttempted;
                      if (!someResult) {
                        tmp8 = eligibilityState;
                        connection_type = eligibilityState.connection_type;
                      }
                      tmp9 = eligibilityState;
                      application_id = eligibilityState.application_id;
                      if (application_id == null) {
                        application_id = null;
                      }
                      tmp6Result = tmp6(connection_type, application_id);
                      tmp12 = canStartAuthorization;
                      if (canStartAuthorization) {
                        tmp18 = startAuthorization;
                        obj1 = { analyticsLocations: null };
                        obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
                        tmp19 = startAuthorization(obj1);
                      } else {
                        tmp13 = null != tmp2;
                        if (tmp13) {
                          tmp14 = closure_1;
                          tmp13 = null != closure_1;
                        }
                        if (tmp13) {
                          tmp13 = null != tmp9.application_id;
                        }
                        if (tmp13) {
                          tmp15 = onIdentityAuthorize;
                          obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                          obj4.applicationId = tmp9.application_id;
                          tmp16 = closure_1;
                          obj4.scopes = closure_1;
                          obj4.connectedAccountProvider = tmp2;
                          obj4.wasAlreadyConnected = someResult;
                          tmp17 = onIdentityAuthorize(obj4);
                        }
                      }
                    }
                  }
                  return;
                }
              }
              obj5.source = tmp6(tmp2[33]);
              obj5.style = tmp4.connectionsChecksGroupCaret;
              const tmp33 = closure_29(tmp32, obj5);
              cResult[16] = tmp4.connectionsChecksGroupCaret;
              cResult[17] = tmp33;
              let tmp30 = tmp33;
            } else {
              tmp30 = cResult[17];
            }
            let tmp26 = tmp30;
          } else {
            const _Symbol = Symbol;
            class G {
              constructor() {
                if (!result) {
                  tmp = c0;
                  if (c0) {
                    tmp2 = closure_2;
                    tmp3 = null;
                    someResult = null != closure_2;
                    if (someResult) {
                      tmp5 = closure_14;
                      accounts = closure_14.getAccounts();
                      someResult = accounts.some(() => { ... });
                    }
                    connection_type = null;
                    tmp6 = onAttempted;
                    if (!someResult) {
                      tmp8 = eligibilityState;
                      connection_type = eligibilityState.connection_type;
                    }
                    tmp9 = eligibilityState;
                    application_id = eligibilityState.application_id;
                    if (application_id == null) {
                      application_id = null;
                    }
                    tmp6Result = tmp6(connection_type, application_id);
                    tmp12 = canStartAuthorization;
                    if (canStartAuthorization) {
                      tmp18 = startAuthorization;
                      obj1 = { analyticsLocations: null };
                      obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
                      tmp19 = startAuthorization(obj1);
                    } else {
                      tmp13 = null != tmp2;
                      if (tmp13) {
                        tmp14 = closure_1;
                        tmp13 = null != closure_1;
                      }
                      if (tmp13) {
                        tmp13 = null != tmp9.application_id;
                      }
                      if (tmp13) {
                        tmp15 = onIdentityAuthorize;
                        obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                        obj4.applicationId = tmp9.application_id;
                        tmp16 = closure_1;
                        obj4.scopes = closure_1;
                        obj4.connectedAccountProvider = tmp2;
                        obj4.wasAlreadyConnected = someResult;
                        tmp17 = onIdentityAuthorize(obj4);
                      }
                    }
                  }
                }
                return;
              }
            }
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              const obj6 = { variant: "text-md/medium", color: "text-muted", children: null };
              class G {
                constructor() {
                  if (!result) {
                    tmp = c0;
                    if (c0) {
                      tmp2 = closure_2;
                      tmp3 = null;
                      someResult = null != closure_2;
                      if (someResult) {
                        tmp5 = closure_14;
                        accounts = closure_14.getAccounts();
                        someResult = accounts.some(() => { ... });
                      }
                      connection_type = null;
                      tmp6 = onAttempted;
                      if (!someResult) {
                        tmp8 = eligibilityState;
                        connection_type = eligibilityState.connection_type;
                      }
                      tmp9 = eligibilityState;
                      application_id = eligibilityState.application_id;
                      if (application_id == null) {
                        application_id = null;
                      }
                      tmp6Result = tmp6(connection_type, application_id);
                      tmp12 = canStartAuthorization;
                      if (canStartAuthorization) {
                        tmp18 = startAuthorization;
                        obj1 = { analyticsLocations: null };
                        obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
                        tmp19 = startAuthorization(obj1);
                      } else {
                        tmp13 = null != tmp2;
                        if (tmp13) {
                          tmp14 = closure_1;
                          tmp13 = null != closure_1;
                        }
                        if (tmp13) {
                          tmp13 = null != tmp9.application_id;
                        }
                        if (tmp13) {
                          tmp15 = onIdentityAuthorize;
                          obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                          obj4.applicationId = tmp9.application_id;
                          tmp16 = closure_1;
                          obj4.scopes = closure_1;
                          obj4.connectedAccountProvider = tmp2;
                          obj4.wasAlreadyConnected = someResult;
                          tmp17 = onIdentityAuthorize(obj4);
                        }
                      }
                    }
                  }
                  return;
                }
              }
              const intl = tmp(tmp2[27]).intl;
              obj6.children = intl.string(tmp(tmp2[27]).t.cEts68);
              const tmp29 = closure_29(tmp28, obj6);
              cResult[15] = tmp29;
              tmp26 = tmp29;
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
                            if (cResult[27] === startAuthorization) {
                              let tmp38 = cResult[28];
                            }
                            const officialApplicationIds = tmp(tmp2[28]).officialApplicationIds;
                            class G {
                              constructor() {
                                if (!result) {
                                  tmp = c0;
                                  if (c0) {
                                    tmp2 = closure_2;
                                    tmp3 = null;
                                    someResult = null != closure_2;
                                    if (someResult) {
                                      tmp5 = closure_14;
                                      accounts = closure_14.getAccounts();
                                      someResult = accounts.some(() => { ... });
                                    }
                                    connection_type = null;
                                    tmp6 = onAttempted;
                                    if (!someResult) {
                                      tmp8 = eligibilityState;
                                      connection_type = eligibilityState.connection_type;
                                    }
                                    tmp9 = eligibilityState;
                                    application_id = eligibilityState.application_id;
                                    if (application_id == null) {
                                      application_id = null;
                                    }
                                    tmp6Result = tmp6(connection_type, application_id);
                                    tmp12 = canStartAuthorization;
                                    if (canStartAuthorization) {
                                      tmp18 = startAuthorization;
                                      obj1 = { analyticsLocations: null };
                                      obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
                                      tmp19 = startAuthorization(obj1);
                                    } else {
                                      tmp13 = null != tmp2;
                                      if (tmp13) {
                                        tmp14 = closure_1;
                                        tmp13 = null != closure_1;
                                      }
                                      if (tmp13) {
                                        tmp13 = null != tmp9.application_id;
                                      }
                                      if (tmp13) {
                                        tmp15 = onIdentityAuthorize;
                                        obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                                        obj4.applicationId = tmp9.application_id;
                                        tmp16 = closure_1;
                                        obj4.scopes = closure_1;
                                        obj4.connectedAccountProvider = tmp2;
                                        obj4.wasAlreadyConnected = someResult;
                                        tmp17 = onIdentityAuthorize(obj4);
                                      }
                                    }
                                  }
                                }
                                return;
                              }
                            }
                            if (application != null) {
                              let str = application.id;
                            }
                            if (str == null) {
                              str = "";
                            }
                            if (officialApplicationIds.includes(str)) {
                              return null;
                            } else {
                              let prop = null;
                              if (result) {
                                prop = tmp4.connectionsChecksGroupPassed;
                              }
                              class G {
                                constructor() {
                                  if (!result) {
                                    tmp = c0;
                                    if (c0) {
                                      tmp2 = closure_2;
                                      tmp3 = null;
                                      someResult = null != closure_2;
                                      if (someResult) {
                                        tmp5 = closure_14;
                                        accounts = closure_14.getAccounts();
                                        someResult = accounts.some(() => { ... });
                                      }
                                      connection_type = null;
                                      tmp6 = onAttempted;
                                      if (!someResult) {
                                        tmp8 = eligibilityState;
                                        connection_type = eligibilityState.connection_type;
                                      }
                                      tmp9 = eligibilityState;
                                      application_id = eligibilityState.application_id;
                                      if (application_id == null) {
                                        application_id = null;
                                      }
                                      tmp6Result = tmp6(connection_type, application_id);
                                      tmp12 = canStartAuthorization;
                                      if (canStartAuthorization) {
                                        tmp18 = startAuthorization;
                                        obj1 = { analyticsLocations: null };
                                        obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
                                        tmp19 = startAuthorization(obj1);
                                      } else {
                                        tmp13 = null != tmp2;
                                        if (tmp13) {
                                          tmp14 = closure_1;
                                          tmp13 = null != closure_1;
                                        }
                                        if (tmp13) {
                                          tmp13 = null != tmp9.application_id;
                                        }
                                        if (tmp13) {
                                          tmp15 = onIdentityAuthorize;
                                          obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                                          obj4.applicationId = tmp9.application_id;
                                          tmp16 = closure_1;
                                          obj4.scopes = closure_1;
                                          obj4.connectedAccountProvider = tmp2;
                                          obj4.wasAlreadyConnected = someResult;
                                          tmp17 = onIdentityAuthorize(obj4);
                                        }
                                      }
                                    }
                                  }
                                  return;
                                }
                              }
                              if (!tmp8) {
                                const connectionsChecksGroupPlatformDisabled = tmp4.connectionsChecksGroupPlatformDisabled;
                              }
                              if (cResult[29] === tmp4.connectionsChecksGroup) {
                                if (cResult[30] === prop) {
                                  if (cResult[31] === connectionsChecksGroupPlatformDisabled) {
                                    let tmp40 = cResult[32];
                                  }
                                  class G {
                                    constructor() {
                                      if (!result) {
                                        tmp = c0;
                                        if (c0) {
                                          tmp2 = closure_2;
                                          tmp3 = null;
                                          someResult = null != closure_2;
                                          if (someResult) {
                                            tmp5 = closure_14;
                                            accounts = closure_14.getAccounts();
                                            someResult = accounts.some(() => { ... });
                                          }
                                          connection_type = null;
                                          tmp6 = onAttempted;
                                          if (!someResult) {
                                            tmp8 = eligibilityState;
                                            connection_type = eligibilityState.connection_type;
                                          }
                                          tmp9 = eligibilityState;
                                          application_id = eligibilityState.application_id;
                                          if (application_id == null) {
                                            application_id = null;
                                          }
                                          tmp6Result = tmp6(connection_type, application_id);
                                          tmp12 = canStartAuthorization;
                                          if (canStartAuthorization) {
                                            tmp18 = startAuthorization;
                                            obj1 = { analyticsLocations: null };
                                            obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
                                            tmp19 = startAuthorization(obj1);
                                          } else {
                                            tmp13 = null != tmp2;
                                            if (tmp13) {
                                              tmp14 = closure_1;
                                              tmp13 = null != closure_1;
                                            }
                                            if (tmp13) {
                                              tmp13 = null != tmp9.application_id;
                                            }
                                            if (tmp13) {
                                              tmp15 = onIdentityAuthorize;
                                              obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                                              obj4.applicationId = tmp9.application_id;
                                              tmp16 = closure_1;
                                              obj4.scopes = closure_1;
                                              obj4.connectedAccountProvider = tmp2;
                                              obj4.wasAlreadyConnected = someResult;
                                              tmp17 = onIdentityAuthorize(obj4);
                                            }
                                          }
                                        }
                                      }
                                      return;
                                    }
                                  }
                                  if (cResult[33] === obj3) {
                                    if (cResult[34] === tmp4.appIcon) {
                                      let tmp42 = cResult[35];
                                    }
                                    class G {
                                      constructor() {
                                        if (!result) {
                                          tmp = c0;
                                          if (c0) {
                                            tmp2 = closure_2;
                                            tmp3 = null;
                                            someResult = null != closure_2;
                                            if (someResult) {
                                              tmp5 = closure_14;
                                              accounts = closure_14.getAccounts();
                                              someResult = accounts.some(() => { ... });
                                            }
                                            connection_type = null;
                                            tmp6 = onAttempted;
                                            if (!someResult) {
                                              tmp8 = eligibilityState;
                                              connection_type = eligibilityState.connection_type;
                                            }
                                            tmp9 = eligibilityState;
                                            application_id = eligibilityState.application_id;
                                            if (application_id == null) {
                                              application_id = null;
                                            }
                                            tmp6Result = tmp6(connection_type, application_id);
                                            tmp12 = canStartAuthorization;
                                            if (canStartAuthorization) {
                                              tmp18 = startAuthorization;
                                              obj1 = { analyticsLocations: null };
                                              obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
                                              tmp19 = startAuthorization(obj1);
                                            } else {
                                              tmp13 = null != tmp2;
                                              if (tmp13) {
                                                tmp14 = closure_1;
                                                tmp13 = null != closure_1;
                                              }
                                              if (tmp13) {
                                                tmp13 = null != tmp9.application_id;
                                              }
                                              if (tmp13) {
                                                tmp15 = onIdentityAuthorize;
                                                obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                                                obj4.applicationId = tmp9.application_id;
                                                tmp16 = closure_1;
                                                obj4.scopes = closure_1;
                                                obj4.connectedAccountProvider = tmp2;
                                                obj4.wasAlreadyConnected = someResult;
                                                tmp17 = onIdentityAuthorize(obj4);
                                              }
                                            }
                                          }
                                        }
                                        return;
                                      }
                                    }
                                    if (cResult[36] !== undefined) {
                                      class G {
                                        constructor() {
                                          if (!result) {
                                            tmp = c0;
                                            if (c0) {
                                              tmp2 = closure_2;
                                              tmp3 = null;
                                              someResult = null != closure_2;
                                              if (someResult) {
                                                tmp5 = closure_14;
                                                accounts = closure_14.getAccounts();
                                                someResult = accounts.some(() => { ... });
                                              }
                                              connection_type = null;
                                              tmp6 = onAttempted;
                                              if (!someResult) {
                                                tmp8 = eligibilityState;
                                                connection_type = eligibilityState.connection_type;
                                              }
                                              tmp9 = eligibilityState;
                                              application_id = eligibilityState.application_id;
                                              if (application_id == null) {
                                                application_id = null;
                                              }
                                              tmp6Result = tmp6(connection_type, application_id);
                                              tmp12 = canStartAuthorization;
                                              if (canStartAuthorization) {
                                                tmp18 = startAuthorization;
                                                obj1 = { analyticsLocations: null };
                                                obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
                                                tmp19 = startAuthorization(obj1);
                                              } else {
                                                tmp13 = null != tmp2;
                                                if (tmp13) {
                                                  tmp14 = closure_1;
                                                  tmp13 = null != closure_1;
                                                }
                                                if (tmp13) {
                                                  tmp13 = null != tmp9.application_id;
                                                }
                                                if (tmp13) {
                                                  tmp15 = onIdentityAuthorize;
                                                  obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                                                  obj4.applicationId = tmp9.application_id;
                                                  tmp16 = closure_1;
                                                  obj4.scopes = closure_1;
                                                  obj4.connectedAccountProvider = tmp2;
                                                  obj4.wasAlreadyConnected = someResult;
                                                  tmp17 = onIdentityAuthorize(obj4);
                                                }
                                              }
                                            }
                                          }
                                          return;
                                        }
                                      }
                                      const tmp48 = closure_29(tmp(tmp2[26]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null });
                                      cResult[36] = tmp45;
                                      cResult[37] = tmp48;
                                      let tmp46 = tmp48;
                                      const obj7 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
                                    } else {
                                      tmp46 = cResult[37];
                                    }
                                    if (cResult[38] === undefined) {
                                      if (cResult[39] === tmp4.connectionsChecksGroupTextNameContainer) {
                                        if (cResult[40] === tmp46) {
                                          let tmp49 = cResult[41];
                                        }
                                        if (cResult[42] === tmp8) {
                                          if (cResult[43] === result) {
                                            if (cResult[44] === tmp4.connectionsCheck) {
                                              let tmp53 = cResult[45];
                                            }
                                            if (cResult[46] === tmp4.connectionsChecksGroupTextContainer) {
                                              if (cResult[47] === tmp49) {
                                                if (cResult[48] === tmp53) {
                                                  let tmp56 = cResult[49];
                                                }
                                                if (cResult[50] === tmp38) {
                                                  if (cResult[51] === tmp26) {
                                                    if (cResult[52] === tmp56) {
                                                      if (cResult[53] === tmp40) {
                                                        if (cResult[54] === tmp41) {
                                                          if (cResult[55] === tmp42) {
                                                            let tmp59 = cResult[56];
                                                          }
                                                          return tmp59;
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                                class G {
                                                  constructor() {
                                                    if (!result) {
                                                      tmp = c0;
                                                      if (c0) {
                                                        tmp2 = closure_2;
                                                        tmp3 = null;
                                                        someResult = null != closure_2;
                                                        if (someResult) {
                                                          tmp5 = closure_14;
                                                          accounts = closure_14.getAccounts();
                                                          someResult = accounts.some(() => { ... });
                                                        }
                                                        connection_type = null;
                                                        tmp6 = onAttempted;
                                                        if (!someResult) {
                                                          tmp8 = eligibilityState;
                                                          connection_type = eligibilityState.connection_type;
                                                        }
                                                        tmp9 = eligibilityState;
                                                        application_id = eligibilityState.application_id;
                                                        if (application_id == null) {
                                                          application_id = null;
                                                        }
                                                        tmp6Result = tmp6(connection_type, application_id);
                                                        tmp12 = canStartAuthorization;
                                                        if (canStartAuthorization) {
                                                          tmp18 = startAuthorization;
                                                          obj1 = { analyticsLocations: null };
                                                          obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
                                                          tmp19 = startAuthorization(obj1);
                                                        } else {
                                                          tmp13 = null != tmp2;
                                                          if (tmp13) {
                                                            tmp14 = closure_1;
                                                            tmp13 = null != closure_1;
                                                          }
                                                          if (tmp13) {
                                                            tmp13 = null != tmp9.application_id;
                                                          }
                                                          if (tmp13) {
                                                            tmp15 = onIdentityAuthorize;
                                                            obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                                                            obj4.applicationId = tmp9.application_id;
                                                            tmp16 = closure_1;
                                                            obj4.scopes = closure_1;
                                                            obj4.connectedAccountProvider = tmp2;
                                                            obj4.wasAlreadyConnected = someResult;
                                                            tmp17 = onIdentityAuthorize(obj4);
                                                          }
                                                        }
                                                      }
                                                    }
                                                    return;
                                                  }
                                                }
                                                const obj8 = { accessibilityRole: "button", style: tmp40, disabled: tmp41, onPress: tmp38, children: null };
                                                const items = [tmp42, tmp56, tmp26];
                                                obj8.children = items;
                                                const tmp61 = closure_30(startAuthorization, obj8);
                                                cResult[50] = tmp38;
                                                cResult[51] = tmp26;
                                                cResult[52] = tmp56;
                                                cResult[53] = tmp40;
                                                cResult[54] = tmp41;
                                                cResult[55] = tmp42;
                                                cResult[56] = tmp61;
                                                tmp59 = tmp61;
                                              }
                                            }
                                            class G {
                                              constructor() {
                                                if (!result) {
                                                  tmp = c0;
                                                  if (c0) {
                                                    tmp2 = closure_2;
                                                    tmp3 = null;
                                                    someResult = null != closure_2;
                                                    if (someResult) {
                                                      tmp5 = closure_14;
                                                      accounts = closure_14.getAccounts();
                                                      someResult = accounts.some(() => { ... });
                                                    }
                                                    connection_type = null;
                                                    tmp6 = onAttempted;
                                                    if (!someResult) {
                                                      tmp8 = eligibilityState;
                                                      connection_type = eligibilityState.connection_type;
                                                    }
                                                    tmp9 = eligibilityState;
                                                    application_id = eligibilityState.application_id;
                                                    if (application_id == null) {
                                                      application_id = null;
                                                    }
                                                    tmp6Result = tmp6(connection_type, application_id);
                                                    tmp12 = canStartAuthorization;
                                                    if (canStartAuthorization) {
                                                      tmp18 = startAuthorization;
                                                      obj1 = { analyticsLocations: null };
                                                      obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
                                                      tmp19 = startAuthorization(obj1);
                                                    } else {
                                                      tmp13 = null != tmp2;
                                                      if (tmp13) {
                                                        tmp14 = closure_1;
                                                        tmp13 = null != closure_1;
                                                      }
                                                      if (tmp13) {
                                                        tmp13 = null != tmp9.application_id;
                                                      }
                                                      if (tmp13) {
                                                        tmp15 = onIdentityAuthorize;
                                                        obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                                                        obj4.applicationId = tmp9.application_id;
                                                        tmp16 = closure_1;
                                                        obj4.scopes = closure_1;
                                                        obj4.connectedAccountProvider = tmp2;
                                                        obj4.wasAlreadyConnected = someResult;
                                                        tmp17 = onIdentityAuthorize(obj4);
                                                      }
                                                    }
                                                  }
                                                }
                                                return;
                                              }
                                            }
                                            const obj9 = { style: tmp4.connectionsChecksGroupTextContainer, children: null };
                                            const items1 = [tmp49, tmp53];
                                            obj9.children = items1;
                                            const tmp58 = closure_30(result, obj9);
                                            cResult[46] = tmp4.connectionsChecksGroupTextContainer;
                                            cResult[47] = tmp49;
                                            cResult[48] = tmp53;
                                            cResult[49] = tmp58;
                                            tmp56 = tmp58;
                                          }
                                        }
                                        class G {
                                          constructor() {
                                            if (!result) {
                                              tmp = c0;
                                              if (c0) {
                                                tmp2 = closure_2;
                                                tmp3 = null;
                                                someResult = null != closure_2;
                                                if (someResult) {
                                                  tmp5 = closure_14;
                                                  accounts = closure_14.getAccounts();
                                                  someResult = accounts.some(() => { ... });
                                                }
                                                connection_type = null;
                                                tmp6 = onAttempted;
                                                if (!someResult) {
                                                  tmp8 = eligibilityState;
                                                  connection_type = eligibilityState.connection_type;
                                                }
                                                tmp9 = eligibilityState;
                                                application_id = eligibilityState.application_id;
                                                if (application_id == null) {
                                                  application_id = null;
                                                }
                                                tmp6Result = tmp6(connection_type, application_id);
                                                tmp12 = canStartAuthorization;
                                                if (canStartAuthorization) {
                                                  tmp18 = startAuthorization;
                                                  obj1 = { analyticsLocations: null };
                                                  obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
                                                  tmp19 = startAuthorization(obj1);
                                                } else {
                                                  tmp13 = null != tmp2;
                                                  if (tmp13) {
                                                    tmp14 = closure_1;
                                                    tmp13 = null != closure_1;
                                                  }
                                                  if (tmp13) {
                                                    tmp13 = null != tmp9.application_id;
                                                  }
                                                  if (tmp13) {
                                                    tmp15 = onIdentityAuthorize;
                                                    obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                                                    obj4.applicationId = tmp9.application_id;
                                                    tmp16 = closure_1;
                                                    obj4.scopes = closure_1;
                                                    obj4.connectedAccountProvider = tmp2;
                                                    obj4.wasAlreadyConnected = someResult;
                                                    tmp17 = onIdentityAuthorize(obj4);
                                                  }
                                                }
                                              }
                                            }
                                            return;
                                          }
                                        }
                                        if (!tmp8) {
                                          let tmp54 = null;
                                          if (!result) {
                                            const obj10 = { variant: "text-xs/normal", color: "text-muted", style: null, children: null };
                                            class G {
                                              constructor() {
                                                if (!result) {
                                                  tmp = c0;
                                                  if (c0) {
                                                    tmp2 = closure_2;
                                                    tmp3 = null;
                                                    someResult = null != closure_2;
                                                    if (someResult) {
                                                      tmp5 = closure_14;
                                                      accounts = closure_14.getAccounts();
                                                      someResult = accounts.some(() => { ... });
                                                    }
                                                    connection_type = null;
                                                    tmp6 = onAttempted;
                                                    if (!someResult) {
                                                      tmp8 = eligibilityState;
                                                      connection_type = eligibilityState.connection_type;
                                                    }
                                                    tmp9 = eligibilityState;
                                                    application_id = eligibilityState.application_id;
                                                    if (application_id == null) {
                                                      application_id = null;
                                                    }
                                                    tmp6Result = tmp6(connection_type, application_id);
                                                    tmp12 = canStartAuthorization;
                                                    if (canStartAuthorization) {
                                                      tmp18 = startAuthorization;
                                                      obj1 = { analyticsLocations: null };
                                                      obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
                                                      tmp19 = startAuthorization(obj1);
                                                    } else {
                                                      tmp13 = null != tmp2;
                                                      if (tmp13) {
                                                        tmp14 = closure_1;
                                                        tmp13 = null != closure_1;
                                                      }
                                                      if (tmp13) {
                                                        tmp13 = null != tmp9.application_id;
                                                      }
                                                      if (tmp13) {
                                                        tmp15 = onIdentityAuthorize;
                                                        obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                                                        obj4.applicationId = tmp9.application_id;
                                                        tmp16 = closure_1;
                                                        obj4.scopes = closure_1;
                                                        obj4.connectedAccountProvider = tmp2;
                                                        obj4.wasAlreadyConnected = someResult;
                                                        tmp17 = onIdentityAuthorize(obj4);
                                                      }
                                                    }
                                                  }
                                                }
                                                return;
                                              }
                                            }
                                            const intl2 = tmp(tmp2[27]).intl;
                                            obj10.children = intl2.string(tmp(tmp2[27]).t["+z5dYe"]);
                                            tmp54 = closure_29(tmp(tmp2[26]).Text, obj10);
                                          }
                                        }
                                        cResult[42] = tmp8;
                                        cResult[43] = result;
                                        cResult[44] = tmp4.connectionsCheck;
                                        cResult[45] = tmp54;
                                        tmp53 = tmp54;
                                      }
                                    }
                                    const obj11 = { style: tmp4.connectionsChecksGroupTextNameContainer, children: null };
                                    const items2 = [tmp46, undefined];
                                    obj11.children = items2;
                                    const tmp52 = closure_30(result, obj11);
                                    cResult[38] = undefined;
                                    cResult[39] = tmp4.connectionsChecksGroupTextNameContainer;
                                    cResult[40] = tmp46;
                                    cResult[41] = tmp52;
                                    tmp49 = tmp52;
                                  }
                                  let tmp43 = null;
                                  if (null != obj3) {
                                    const obj12 = { style: null, user: null, size: null, guildId: "a" };
                                    class G {
                                      constructor() {
                                        if (!result) {
                                          tmp = c0;
                                          if (c0) {
                                            tmp2 = closure_2;
                                            tmp3 = null;
                                            someResult = null != closure_2;
                                            if (someResult) {
                                              tmp5 = closure_14;
                                              accounts = closure_14.getAccounts();
                                              someResult = accounts.some(() => { ... });
                                            }
                                            connection_type = null;
                                            tmp6 = onAttempted;
                                            if (!someResult) {
                                              tmp8 = eligibilityState;
                                              connection_type = eligibilityState.connection_type;
                                            }
                                            tmp9 = eligibilityState;
                                            application_id = eligibilityState.application_id;
                                            if (application_id == null) {
                                              application_id = null;
                                            }
                                            tmp6Result = tmp6(connection_type, application_id);
                                            tmp12 = canStartAuthorization;
                                            if (canStartAuthorization) {
                                              tmp18 = startAuthorization;
                                              obj1 = { analyticsLocations: null };
                                              obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
                                              tmp19 = startAuthorization(obj1);
                                            } else {
                                              tmp13 = null != tmp2;
                                              if (tmp13) {
                                                tmp14 = closure_1;
                                                tmp13 = null != closure_1;
                                              }
                                              if (tmp13) {
                                                tmp13 = null != tmp9.application_id;
                                              }
                                              if (tmp13) {
                                                tmp15 = onIdentityAuthorize;
                                                obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                                                obj4.applicationId = tmp9.application_id;
                                                tmp16 = closure_1;
                                                obj4.scopes = closure_1;
                                                obj4.connectedAccountProvider = tmp2;
                                                obj4.wasAlreadyConnected = someResult;
                                                tmp17 = onIdentityAuthorize(obj4);
                                              }
                                            }
                                          }
                                        }
                                        return;
                                      }
                                    }
                                    obj12.user = obj3;
                                    obj12.size = tmp(tmp2[23]).AvatarSizes.XSMALL;
                                    tmp43 = closure_29(tmp(tmp2[23]).Avatar, obj12);
                                  }
                                  cResult[33] = obj3;
                                  cResult[34] = tmp4.appIcon;
                                  cResult[35] = tmp43;
                                  tmp42 = tmp43;
                                }
                              }
                              const items3 = [tmp4.connectionsChecksGroup, prop, connectionsChecksGroupPlatformDisabled];
                              cResult[29] = tmp4.connectionsChecksGroup;
                              cResult[30] = prop;
                              cResult[31] = connectionsChecksGroupPlatformDisabled;
                              cResult[32] = items3;
                              tmp40 = items3;
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
              if (!result) {
                tmp = c0;
                if (c0) {
                  tmp2 = closure_2;
                  tmp3 = null;
                  someResult = null != closure_2;
                  if (someResult) {
                    tmp5 = closure_14;
                    accounts = closure_14.getAccounts();
                    someResult = accounts.some(() => { ... });
                  }
                  connection_type = null;
                  tmp6 = onAttempted;
                  if (!someResult) {
                    tmp8 = eligibilityState;
                    connection_type = eligibilityState.connection_type;
                  }
                  tmp9 = eligibilityState;
                  application_id = eligibilityState.application_id;
                  if (application_id == null) {
                    application_id = null;
                  }
                  tmp6Result = tmp6(connection_type, application_id);
                  tmp12 = canStartAuthorization;
                  if (canStartAuthorization) {
                    tmp18 = startAuthorization;
                    obj1 = { analyticsLocations: null };
                    obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
                    tmp19 = startAuthorization(obj1);
                  } else {
                    tmp13 = null != tmp2;
                    if (tmp13) {
                      tmp14 = closure_1;
                      tmp13 = null != closure_1;
                    }
                    if (tmp13) {
                      tmp13 = null != tmp9.application_id;
                    }
                    if (tmp13) {
                      tmp15 = onIdentityAuthorize;
                      obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                      obj4.applicationId = tmp9.application_id;
                      tmp16 = closure_1;
                      obj4.scopes = closure_1;
                      obj4.connectedAccountProvider = tmp2;
                      obj4.wasAlreadyConnected = someResult;
                      tmp17 = onIdentityAuthorize(obj4);
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
          tmp38 = G;
        }
      } else {
        if (cResult[8] !== obj3) {
          const isVerifiedBotResult = obj3.isVerifiedBot();
          class G {
            constructor() {
              if (!result) {
                tmp = c0;
                if (c0) {
                  tmp2 = closure_2;
                  tmp3 = null;
                  someResult = null != closure_2;
                  if (someResult) {
                    tmp5 = closure_14;
                    accounts = closure_14.getAccounts();
                    someResult = accounts.some(() => { ... });
                  }
                  connection_type = null;
                  tmp6 = onAttempted;
                  if (!someResult) {
                    tmp8 = eligibilityState;
                    connection_type = eligibilityState.connection_type;
                  }
                  tmp9 = eligibilityState;
                  application_id = eligibilityState.application_id;
                  if (application_id == null) {
                    application_id = null;
                  }
                  tmp6Result = tmp6(connection_type, application_id);
                  tmp12 = canStartAuthorization;
                  if (canStartAuthorization) {
                    tmp18 = startAuthorization;
                    obj1 = { analyticsLocations: null };
                    obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
                    tmp19 = startAuthorization(obj1);
                  } else {
                    tmp13 = null != tmp2;
                    if (tmp13) {
                      tmp14 = closure_1;
                      tmp13 = null != closure_1;
                    }
                    if (tmp13) {
                      tmp13 = null != tmp9.application_id;
                    }
                    if (tmp13) {
                      tmp15 = onIdentityAuthorize;
                      obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                      obj4.applicationId = tmp9.application_id;
                      tmp16 = closure_1;
                      obj4.scopes = closure_1;
                      obj4.connectedAccountProvider = tmp2;
                      obj4.wasAlreadyConnected = someResult;
                      tmp17 = onIdentityAuthorize(obj4);
                    }
                  }
                }
              }
              return;
            }
          }
          cResult[9] = isVerifiedBotResult;
          let tmp20 = isVerifiedBotResult;
        } else {
          tmp20 = cResult[9];
        }
        class G {
          constructor() {
            if (!result) {
              tmp = c0;
              if (c0) {
                tmp2 = closure_2;
                tmp3 = null;
                someResult = null != closure_2;
                if (someResult) {
                  tmp5 = closure_14;
                  accounts = closure_14.getAccounts();
                  someResult = accounts.some(() => { ... });
                }
                connection_type = null;
                tmp6 = onAttempted;
                if (!someResult) {
                  tmp8 = eligibilityState;
                  connection_type = eligibilityState.connection_type;
                }
                tmp9 = eligibilityState;
                application_id = eligibilityState.application_id;
                if (application_id == null) {
                  application_id = null;
                }
                tmp6Result = tmp6(connection_type, application_id);
                tmp12 = canStartAuthorization;
                if (canStartAuthorization) {
                  tmp18 = startAuthorization;
                  obj1 = { analyticsLocations: null };
                  obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
                  tmp19 = startAuthorization(obj1);
                } else {
                  tmp13 = null != tmp2;
                  if (tmp13) {
                    tmp14 = closure_1;
                    tmp13 = null != closure_1;
                  }
                  if (tmp13) {
                    tmp13 = null != tmp9.application_id;
                  }
                  if (tmp13) {
                    tmp15 = onIdentityAuthorize;
                    obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                    obj4.applicationId = tmp9.application_id;
                    tmp16 = closure_1;
                    obj4.scopes = closure_1;
                    obj4.connectedAccountProvider = tmp2;
                    obj4.wasAlreadyConnected = someResult;
                    tmp17 = onIdentityAuthorize(obj4);
                  }
                }
              }
            }
            return;
          }
        }
        const obj13 = { style: tmp4.botTag, verified: tmp20 };
        const tmp24 = closure_29(tmp6(tmp2[31]), obj13);
        cResult[10] = tmp4.botTag;
        cResult[11] = tmp20;
        cResult[12] = tmp24;
      }
    }
  }
  identity_connected_account_type = eligibilityState.identity_connected_account_type;
  identity_auth_required_scopes = eligibilityState.identity_auth_required_scopes;
  let tmp11 = canStartAuthorization;
  if (!canStartAuthorization) {
    tmp11 = canStartAuthorization;
    class G {
      constructor() {
        if (!result) {
          tmp = c0;
          if (c0) {
            tmp2 = closure_2;
            tmp3 = null;
            someResult = null != closure_2;
            if (someResult) {
              tmp5 = closure_14;
              accounts = closure_14.getAccounts();
              someResult = accounts.some(() => { ... });
            }
            connection_type = null;
            tmp6 = onAttempted;
            if (!someResult) {
              tmp8 = eligibilityState;
              connection_type = eligibilityState.connection_type;
            }
            tmp9 = eligibilityState;
            application_id = eligibilityState.application_id;
            if (application_id == null) {
              application_id = null;
            }
            tmp6Result = tmp6(connection_type, application_id);
            tmp12 = canStartAuthorization;
            if (canStartAuthorization) {
              tmp18 = startAuthorization;
              obj1 = { analyticsLocations: null };
              obj1.analyticsLocations = ["Verified Roles Connect Accounts Modal"];
              tmp19 = startAuthorization(obj1);
            } else {
              tmp13 = null != tmp2;
              if (tmp13) {
                tmp14 = closure_1;
                tmp13 = null != closure_1;
              }
              if (tmp13) {
                tmp13 = null != tmp9.application_id;
              }
              if (tmp13) {
                tmp15 = onIdentityAuthorize;
                obj4 = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
                obj4.applicationId = tmp9.application_id;
                tmp16 = closure_1;
                obj4.scopes = closure_1;
                obj4.connectedAccountProvider = tmp2;
                obj4.wasAlreadyConnected = someResult;
                tmp17 = onIdentityAuthorize(obj4);
              }
            }
          }
        }
        return;
      }
    }
  }
  cResult[0] = canStartAuthorization;
  cResult[1] = eligibilityState.identity_auth_required_scopes;
  cResult[2] = eligibilityState.identity_connected_account_type;
  cResult[3] = tmp11;
  cResult[4] = identity_auth_required_scopes;
  cResult[5] = identity_connected_account_type;
  let obj2 = canStartAuthorization(identity_connected_account_type[29]);
}) : ((eligibilityState) => {
  eligibilityState = eligibilityState.eligibilityState;
  const onAttempted = eligibilityState.onAttempted;
  const onIdentityAuthorize = eligibilityState.onIdentityAuthorize;
  let application;
  c9 = undefined;
  const tmp = closure_32();
  const getOrFetchApplicationBatched = eligibilityState(onIdentityAuthorize[29]).useGetOrFetchApplicationBatched(eligibilityState.application_id);
  const tmp6 = onAttempted(onIdentityAuthorize[30])(getOrFetchApplicationBatched);
  const canStartAuthorization = tmp6.canStartAuthorization;
  const startAuthorization = tmp6.startAuthorization;
  noop = canStartAuthorization;
  const identity_connected_account_type = eligibilityState.identity_connected_account_type;
  const identity_auth_required_scopes = eligibilityState.identity_auth_required_scopes;
  let flag = canStartAuthorization;
  if (!canStartAuthorization) {
    flag = canStartAuthorization;
    if (null != identity_connected_account_type) {
      flag = canStartAuthorization;
      if (null != identity_auth_required_scopes) {
        value = tmp5(tmp3[20]).get(identity_connected_account_type);
        flag = canStartAuthorization;
        if (tmp9) {
          noop = true;
          flag = true;
        }
        const tmp5Result = tmp5(tmp3[20]);
        tmp9 = null != value && value.enabled;
      }
    }
  }
  application = eligibilityState.application;
  const items = [application];
  const memo = noop.useMemo(() => {
    let bot;
    if (application != null) {
      bot = application.bot;
    }
    let tmp3 = null;
    if (null != bot) {
      tmp3 = new UserRecord(application.bot);
    }
    return tmp3;
  }, items);
  const result = eligibilityState.result;
  c9 = result;
  if (null != memo) {
    let obj2 = { style: tmp.botTag, verified: memo.isVerifiedBot() };
    const tmp5Result2 = tmp5(tmp3[31]);
    const tmp10 = closure_29(tmp5(tmp3[31]), obj2);
  }
  if (result) {
    const obj4 = { source: tmp5(tmp3[32]), style: tmp.connectionsChecksGroupCheckmark };
    let tmp13Result = closure_29(tmp2(tmp3[23]).Icon, obj4);
    let tmp15 = closure_29;
  } else if (flag) {
    const obj5 = { source: tmp5(tmp3[33]), style: tmp.connectionsChecksGroupCaret };
    tmp13Result = closure_29(tmp2(tmp3[23]).Icon, obj5);
    tmp15 = closure_29;
  } else {
    const obj6 = { variant: "text-md/medium", color: "text-muted", children: null };
    const intl = tmp2(tmp3[27]).intl;
    obj6.children = intl.string(tmp2(tmp3[27]).t.cEts68);
    tmp13Result = closure_29(tmp2(tmp3[26]).Text, obj6);
    tmp15 = closure_29;
  }
  const items1 = [result, flag, canStartAuthorization, startAuthorization, onAttempted, onIdentityAuthorize, , , , ];
  ({ connection_type: arr2[6], application_id: arr2[7] } = eligibilityState);
  items1[8] = identity_connected_account_type;
  items1[9] = identity_auth_required_scopes;
  const callback = noop.useCallback(() => {
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
          let tmp13 = null != identity_connected_account_type;
          if (tmp13) {
            tmp13 = null != identity_auth_required_scopes;
          }
          if (tmp13) {
            tmp13 = null != eligibilityState.application_id;
          }
          if (tmp13) {
            const obj2 = { applicationId: eligibilityState.application_id, scopes: identity_auth_required_scopes, connectedAccountProvider: identity_connected_account_type, wasAlreadyConnected: someResult };
            onIdentityAuthorize(obj2);
          }
        }
      }
    }
  }, items1);
  const officialApplicationIds = tmp2(tmp3[28]).officialApplicationIds;
  let str;
  if (application != null) {
    str = application.id;
  }
  if (str == null) {
    str = "";
  }
  let tmp18Result = null;
  if (!officialApplicationIds.includes(str)) {
    const items2 = [tmp.connectionsChecksGroup, , ];
    let prop = null;
    if (result) {
      prop = tmp.connectionsChecksGroupPassed;
    }
    items2[1] = prop;
    let prop1 = null;
    if (!flag) {
      prop1 = tmp.connectionsChecksGroupPlatformDisabled;
    }
    const obj7 = { accessibilityRole: "button", style: null, disabled: null, onPress: null, children: null };
    items2[2] = prop1;
    obj7.style = items2;
    let tmp22 = result;
    if (!result) {
      tmp22 = !flag;
    }
    obj7.disabled = tmp22;
    obj7.onPress = callback;
    let tmp15Result = null;
    if (null != memo) {
      const obj8 = { style: tmp.appIcon, user: memo, size: tmp2(tmp3[23]).AvatarSizes.XSMALL, guildId: "a" };
      tmp15Result = tmp15(tmp2(tmp3[23]).Avatar, obj8);
    }
    const items3 = [tmp15Result, , ];
    const obj9 = { style: tmp.connectionsChecksGroupTextContainer, children: null };
    const obj10 = { style: tmp.connectionsChecksGroupTextNameContainer, children: null };
    let name;
    if (application != null) {
      name = application.name;
    }
    const obj11 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: name };
    const items4 = [tmp15(tmp2(tmp3[26]).Text, obj11), tmp10];
    obj10.children = items4;
    const items5 = [closure_30(application, obj10), ];
    let tmp15Result2 = null;
    if (!flag) {
      tmp15Result2 = null;
      if (!result) {
        const obj12 = { variant: "text-xs/normal", color: "text-muted", style: tmp.connectionsCheck, children: null };
        const intl2 = tmp2(tmp3[27]).intl;
        obj12.children = intl2.string(tmp2(tmp3[27]).t["+z5dYe"]);
        tmp15Result2 = tmp15(tmp2(tmp3[26]).Text, obj12);
      }
    }
    items5[1] = tmp15Result2;
    obj9.children = items5;
    items3[1] = closure_30(application, obj9);
    items3[2] = tmp13Result;
    obj7.children = items3;
    tmp18Result = closure_30(identity_auth_required_scopes, obj7);
  }
  return tmp18Result;
});
ReactCompilerGating = fn(558);
let closure_37 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPlatformConnect) => {
  const cResult = onPlatformAttempt(onPlatformConnected[18]).c(32);
  ({ eligibilityStatesGroups, onPlatformAttempt } = onPlatformConnect);
  onPlatformConnect = onPlatformConnect.onPlatformConnect;
  onPlatformConnected = onPlatformConnect.onPlatformConnected;
  const onIdentityAuthorize = onPlatformConnect.onPlatformIdentityAuthorize;
  ({ initialAttemptedPlatformType, initialAttemptedApplicationId } = onPlatformConnect);
  let obj = onPlatformAttempt(onPlatformConnected[18]);
  _slicedToArray = closure_32();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = {};
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  [first1, closure_6] = first1.useState(first);
  [closure_7, closure_8] = first1.useState(0);
  if (initialAttemptedPlatformType == null) {
    initialAttemptedPlatformType = null;
  }
  [closure_9, closure_10] = first1.useState(initialAttemptedPlatformType);
  if (initialAttemptedApplicationId == null) {
    initialAttemptedApplicationId = null;
  }
  [closure_11, closure_12] = first1.useState(initialAttemptedApplicationId);
  if (cResult[1] !== eligibilityStatesGroups) {
    const flattenResult = onPlatformConnect(tmp[34]).flatten(eligibilityStatesGroups);
    cResult[1] = eligibilityStatesGroups;
    cResult[2] = flattenResult;
    let tmp11 = flattenResult;
    let obj4 = onPlatformConnect(tmp[34]);
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] !== tmp11) {
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class Z {
        constructor(arg0) {
          str = "";
          if (null != onPlatformConnect.application_id) {
            tmp = globalThis;
            _HermesInternal = HermesInternal;
            str2 = ":";
            str = ":" + onPlatformConnect.application_id;
          }
          return "" + onPlatformConnect.connection_type + str;
        }
      }
      cResult[5] = Z;
    } else {
      class Z {
        constructor(arg0) {
          str = "";
          if (null != onPlatformConnect.application_id) {
            tmp = globalThis;
            _HermesInternal = HermesInternal;
            str2 = ":";
            str = ":" + onPlatformConnect.application_id;
          }
          return "" + onPlatformConnect.connection_type + str;
        }
      }
    }
    const groupByResult = onPlatformConnect(tmp[34]).groupBy(tmp11, Z);
    cResult[3] = tmp11;
    cResult[4] = groupByResult;
    let obj5 = onPlatformConnect(tmp[34]);
  } else {
    class Z {
      constructor(arg0) {
        str = "";
        if (null != onPlatformConnect.application_id) {
          tmp = globalThis;
          _HermesInternal = HermesInternal;
          str2 = ":";
          str = ":" + onPlatformConnect.application_id;
        }
        return "" + onPlatformConnect.connection_type + str;
      }
    }
    ChannelStore = tmp14;
    if (cResult[6] === first1) {
      class Z {
        constructor(arg0) {
          str = "";
          if (null != onPlatformConnect.application_id) {
            tmp = globalThis;
            _HermesInternal = HermesInternal;
            str2 = ":";
            str = ":" + onPlatformConnect.application_id;
          }
          return "" + onPlatformConnect.connection_type + str;
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
  }
  let tmp3 = closure_32();
}) : ((eligibilityStatesGroups) => {
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
  noop = closure_32();
  [c6, c7] = noop.useState({});
  let tmp2 = _slicedToArray(noop.useState({}), 2);
  [c8, c9] = noop.useState(0);
  if (initialAttemptedPlatformType == null) {
    initialAttemptedPlatformType = null;
  }
  [first, closure_11] = noop.useState(initialAttemptedPlatformType);
  if (initialAttemptedApplicationId == null) {
    initialAttemptedApplicationId = null;
  }
  [first1, closure_13] = noop.useState(initialAttemptedApplicationId);
  let items = [eligibilityStatesGroups];
  memo = obj.useMemo(() => _modDef12.flatten(eligibilityStatesGroups), items);
  let items1 = [memo];
  memo1 = obj.useMemo(() => _modDef12.groupBy(memo, (application_id) => {
    let str = "";
    if (null != application_id.application_id) {
      const _HermesInternal = HermesInternal;
      str = ":" + application_id.application_id;
    }
    return "" + application_id.connection_type + str;
  }), items1);
  let items2 = [memo];
  const effect = obj.useEffect(() => _undefined(Date.now()), items2);
  let items3 = [memo1, first, first1, onPlatformConnected];
  const effect1 = obj.useEffect(() => {
    if (null != first) {
      let str2 = "";
      if (null != first1) {
        const _HermesInternal = HermesInternal;
        str2 = ":" + tmp11;
      }
      const _HermesInternal2 = HermesInternal;
      const arr = memo1["" + tmp + str2];
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
  let tmp3 = _slicedToArray(noop.useState(0), 2);
  roleColor = eligibilityStatesGroups(4580).useToken(nativeDefault.unsafe_rawColors.GREEN_330);
  let obj3 = { children: null };
  const keys = Object.keys(memo1);
  const sorted = keys.sort((arg0, arg1) => {
    const everyResult = memo1[arg0].every((item) => item.result);
    const everyResult1 = memo1[arg1].every((item) => item.result);
    if (true !== everyResult) {
      let num2 = 0;
      if (false === everyResult) {
        num2 = 0;
        if (true === everyResult1) {
          num2 = -1;
        }
      }
      let num = num2;
    } else {
      num = 1;
    }
    return num;
  });
  obj3.children = sorted.map((item) => {
    if (item.startsWith("" + closure_1_20 + ":")) {
      if (null != arr[0]) {
        const obj2 = {
          eligibilityState: arr[0],
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
    value = PlatformsDefault.get(item);
    closure_1 = value;
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
      tmp11 = new closure_11(application.bot);
    }
    const officialApplicationIds = eligibilityStatesGroups(6678).officialApplicationIds;
    let str;
    if (application != null) {
      str = application.id;
    }
    if (str == null) {
      str = "";
    }
    let type;
    const hasItem = officialApplicationIds.includes(str);
    if (value != null) {
      type = value.type;
    }
    if (type == null) {
      type = closure_1_19;
    }
    let tmp20 = !tmp3;
    if (!tmp3) {
      tmp20 = null != tmp19;
    }
    if (tmp20) {
      tmp20 = tmp19 <= c8;
    }
    if (tmp3) {
      const obj3 = { source: _modDef11181, style: closure_5.connectionsChecksGroupCheckmark };
      let tmp22Result = closure_1_29(tmp15(1188).Icon, obj3);
      let tmp24 = closure_1_29;
    } else if (tmp20) {
      const obj4 = { variant: "text-sm/semibold", color: "text-brand", children: null };
      const intl2 = tmp15(1126).intl;
      obj4.children = intl2.string(tmp15(1126).t["5911Lb"]);
      tmp22Result = closure_1_29(tmp15(4886).Text, obj4);
      tmp24 = closure_1_29;
    } else if (tmp8) {
      const obj5 = { source: _modDef11182, style: closure_5.connectionsChecksGroupCaret };
      tmp22Result = closure_1_29(tmp15(1188).Icon, obj5);
      tmp24 = closure_1_29;
    } else {
      const obj6 = { variant: "text-md/medium", color: "text-muted", children: null };
      const intl = tmp15(1126).intl;
      obj6.children = intl.string(tmp15(1126).t.cEts68);
      tmp22Result = closure_1_29(tmp15(4886).Text, obj6);
      tmp24 = closure_1_29;
    }
    let type1;
    if (value != null) {
      type1 = value.type;
    }
    let tmp28;
    if (type1 === constants.STEAM) {
      const intl3 = tmp15(1126).intl;
      const stringResult = intl3.string(tmp15(1126).t.NcZh6K);
      eligibilityStatesGroups = stringResult;
      tmp28 = stringResult;
    }
    if (hasItem) {
      const obj7 = { style: closure_5.botTag, guildId, roleColor, size: 16 };
      let tmp24Result = tmp24(OfficialConnectionIconDefault, obj7);
    } else if (null != tmp11) {
      const obj8 = { style: closure_5.botTag, verified: tmp11.isVerifiedBot() };
      tmp24Result = tmp24(BotTagDefault, obj8);
      const tmp5Result = BotTagDefault;
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
    const obj9 = { accessibilityRole: "button", style: items, disabled: null, onPress: null, children: null };
    items[2] = prop1;
    let tmp41 = tmp3;
    if (!tmp3) {
      tmp41 = !tmp8;
    }
    obj9.disabled = tmp41;
    obj9.onPress = function onPress() {
      let type;
      if (value != null) {
        type = value.type;
      }
      if (type == null) {
        type = closure_3_19;
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
    };
    let tmp24Result5 = null;
    if (!tmp3) {
      tmp24Result5 = null;
      if (tmp20) {
        const obj10 = { style: closure_5.connectionsChecksGroupRequirementsNotMet, children: null };
        const obj11 = { variant: "text-xs/normal", color: "text-overlay-light", children: null };
        const intl4 = tmp15(1126).intl;
        obj11.children = intl4.string(tmp15(1126).t.UB3hKo);
        obj10.children = tmp24(tmp15(4886).Text, obj11);
        tmp24Result5 = tmp24(c8, obj10);
      }
    }
    const items1 = [tmp24Result5, , , , ];
    let tmp24Result6 = null;
    if (null != value) {
      const obj12 = { platformType: value.type };
      tmp24Result6 = tmp24(closure_1_33, obj12);
    }
    items1[1] = tmp24Result6;
    let tmp24Result7 = null;
    if (null != tmp11) {
      const obj13 = { style: closure_5.appIcon, user: tmp11, size: tmp15(1188).AvatarSizes.XSMALL, guildId: "a" };
      tmp24Result7 = tmp24(tmp15(1188).Avatar, obj13);
    }
    items1[2] = tmp24Result7;
    const obj14 = { style: closure_5.connectionsChecksGroupTextContainer, children: null };
    const obj15 = { style: closure_5.connectionsChecksGroupTextNameContainer, children: null };
    let name;
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
    const items2 = [tmp24(eligibilityStatesGroups(4886).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: name }), tmp24Result, ];
    let tmp24Result8 = null;
    if (null != tmp28) {
      const obj16 = {
        onPress() {
            _modDef38(null != stringResult, "tooltip is null");
            const obj = ToastActionCreatorsDefault;
            obj.open({ key: "CONNECTIONS_STEAM_TOOLTIP", icon: _modDef4811, content: stringResult });
          },
        children: null
      };
      const obj17 = { source: _modDef4811, size: tmp15(1188).Icon.Sizes.SMALL_20, style: closure_5.connectionsChecksGroupTextNameInfoIcon };
      obj16.children = tmp24(tmp15(1188).Icon, obj17);
      tmp24Result8 = tmp24(c7, obj16);
    }
    items2[2] = tmp24Result8;
    obj15.children = items2;
    const items3 = [
      closure_1_30(c8, obj15),
      found1.map((item) => {
        ({ connection_metadata_field, operator, value } = item);
        ({ connection_type, result, description } = item);
        value(application[37])(null != connectionMetadataField, "connectionMetadataField is null");
        value(application[37])(null != operator, "operator is null");
        value(application[37])(null != value, "value is null");
        return closure_1_29(closure_1_35, { connectionType, connectionMetadataField, operator, value, result, description }, connectionMetadataField);
      })
    ];
    obj14.children = items3;
    items1[3] = closure_1_30(c8, obj14);
    items1[4] = tmp22Result;
    obj9.children = items1;
    return closure_1_30(c7, obj9, item);
  });
  return closure_29(closure_31, obj3);
});
ReactCompilerGating = fn(558);
let closure_38 = ReactCompilerGating.isReactCompilerEnabled() ? ((account) => {
  const cResult = account(setShowPreviewMetadata[18]).c(45);
  account = account.account;
  const setShowPreviewInvisibleIcon = account.setShowPreviewInvisibleIcon;
  setShowPreviewMetadata = account.setShowPreviewMetadata;
  const tmp4 = closure_32();
  const obj = account(setShowPreviewMetadata[18]);
  [tmp6, asyncGeneratorStep] = value.useState(account.friendSync);
  const tmp5 = _slicedToArray(value.useState(account.friendSync), 2);
  [tmp8, _slicedToArray] = value.useState(account.showActivity);
  [value, closure_6] = value.useState(1 === account.metadataVisibility);
  [first1, closure_8] = value.useState(1 === account.visibility);
  if (cResult[0] === value) {
    if (cResult[1] === setShowPreviewInvisibleIcon) {
      if (cResult[2] === setShowPreviewMetadata) {
        if (cResult[3] === first1) {
          let tmp13 = cResult[4];
        }
        setShowPreviewInvisibleIcon(tmp2[40])(tmp13);
        if (cResult[5] === account.id) {
          if (cResult[6] === account.type) {
            if (cResult[7] === tmp6) {
              if (cResult[8] === tmp8) {
                let tmp16 = cResult[9];
              }
              if (true !== tmp16.hasMetadata) {
                const _Symbol = Symbol;
                if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl3 = tmp(tmp2[27]).intl;
                  const stringResult = intl3.string(tmp(tmp2[27]).t.f7yOAX);
                  cResult[31] = stringResult;
                  let tmp41 = stringResult;
                } else {
                  tmp41 = cResult[31];
                }
                if (cResult[32] === account.id) {
                  if (cResult[33] === account.type) {
                    if (cResult[34] === setShowPreviewInvisibleIcon) {
                      let tmp43 = cResult[35];
                    }
                    if (cResult[36] === tmp43) {
                      if (cResult[37] === first1) {
                        let tmp44 = cResult[38];
                      }
                      if (cResult[39] === undefined) {
                        if (cResult[40] === tmp17) {
                          if (cResult[41] === tmp4.accountConnectedPrivacyOptionsContainer) {
                            if (cResult[42] === tmp18) {
                              if (cResult[43] === tmp44) {
                                let tmp47 = cResult[44];
                              }
                              return tmp47;
                            }
                          }
                        }
                      }
                      const obj2 = { style: tmp4.accountConnectedPrivacyOptionsContainer, children: null };
                      const items = [tmp44, undefined, tmp17, tmp18];
                      obj2.children = items;
                      const tmp50 = closure_30(closure_8, obj2);
                      cResult[39] = undefined;
                      cResult[40] = tmp17;
                      cResult[41] = tmp4.accountConnectedPrivacyOptionsContainer;
                      cResult[42] = tmp18;
                      cResult[43] = tmp44;
                      cResult[44] = tmp50;
                      tmp47 = tmp50;
                    }
                    const obj3 = { label: tmp41, value: first1, onValueChange: tmp43 };
                    const tmp46 = closure_29(tmp(tmp2[42]).FormSwitchRow, obj3);
                    cResult[36] = tmp43;
                    cResult[37] = first1;
                    cResult[38] = tmp46;
                    tmp44 = tmp46;
                  }
                }
                const fn3 = function q(arg0) {
                  setShowPreviewInvisibleIcon(!arg0);
                  closure_8(arg0);
                  let num = 0;
                  ({ type, id } = account);
                  if (arg0) {
                    num = 1;
                  }
                  ConnectedAccountsActionCreatorsDefault.setVisibility(type, id, num);
                };
                cResult[32] = account.id;
                cResult[33] = account.type;
                cResult[34] = setShowPreviewInvisibleIcon;
                cResult[35] = fn3;
                tmp43 = fn3;
              } else {
                const _Symbol2 = Symbol;
                if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl2 = tmp(tmp2[27]).intl;
                  const stringResult1 = intl2.string(tmp(tmp2[27]).t.FYKGsL);
                  cResult[22] = stringResult1;
                  let tmp32 = stringResult1;
                } else {
                  tmp32 = cResult[22];
                }
                if (cResult[23] === account.id) {
                  if (cResult[24] === account.type) {
                    if (cResult[25] === setShowPreviewMetadata) {
                      let tmp35 = cResult[26];
                    }
                    if (cResult[27] === value) {
                      if (cResult[28] === tmp34) {
                      }
                    }
                    const obj4 = { label: tmp32, value, disabled: tmp34, onValueChange: tmp35 };
                    const tmp38 = closure_29(tmp(tmp2[42]).FormSwitchRow, obj4);
                    cResult[27] = value;
                    cResult[28] = tmp34;
                    cResult[29] = tmp35;
                    cResult[30] = tmp38;
                  }
                }
                const fn2 = function $(arg0) {
                  setShowPreviewMetadata(arg0);
                  closure_6(arg0);
                  let num = 0;
                  ({ type, id } = account);
                  if (arg0) {
                    num = 1;
                  }
                  const result = ConnectedAccountsActionCreatorsDefault.setMetadataVisibility(type, id, num);
                };
                cResult[23] = account.id;
                cResult[24] = account.type;
                cResult[25] = setShowPreviewMetadata;
                cResult[26] = fn2;
                tmp35 = fn2;
              }
            }
          }
        }
        value = setShowPreviewInvisibleIcon(tmp2[20]).get(account.type);
        if (!set.has(account.type)) {
          if (!set2.has(account.type)) {
            cResult[5] = account.id;
            cResult[6] = account.type;
            cResult[7] = tmp6;
            cResult[8] = tmp8;
            cResult[9] = value;
            cResult[10] = undefined;
            cResult[11] = undefined;
            tmp16 = value;
          } else {
            if (cResult[19] === account.id) {
              if (cResult[20] === account.type) {
                let tmp30 = cResult[21];
              }
              class W {
                constructor(arg0) {
                  tmp = closure_4(account);
                  obj = closure_1(closure_2[41]);
                  setShowActivityResult = obj.setShowActivity(account.type, account.id, account);
                  return;
                }
              }
              const obj5 = { label: null, value: null, onValueChange: null };
              const intl = tmp(tmp2[27]).intl;
              const obj6 = { platform: value.name };
              obj5.label = intl.formatToPlainString(tmp(tmp2[27]).t["6u6J0q"], obj6);
              obj5.value = tmp8;
              obj5.onValueChange = tmp30;
              closure_29(tmp(tmp2[42]).FormSwitchRow, obj5);
            }
            class W {
              constructor(arg0) {
                tmp = closure_4(account);
                obj = closure_1(closure_2[41]);
                setShowActivityResult = obj.setShowActivity(account.type, account.id, account);
                return;
              }
            }
            cResult[19] = account.id;
            cResult[20] = account.type;
            cResult[21] = W;
            tmp30 = W;
          }
        } else {
          class W {
            constructor(arg0) {
              tmp = closure_4(account);
              obj = closure_1(closure_2[41]);
              setShowActivityResult = obj.setShowActivity(account.type, account.id, account);
              return;
            }
          }
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            class W {
              constructor(arg0) {
                tmp = closure_4(account);
                obj = closure_1(closure_2[41]);
                setShowActivityResult = obj.setShowActivity(account.type, account.id, account);
                return;
              }
            }
            const tmp23Result = tmp23(tmp(tmp2[27]).t["+KCMSi"]);
            cResult[12] = tmp23Result;
            let tmp22 = tmp23Result;
          } else {
            tmp22 = cResult[12];
          }
          if (cResult[13] === account.id) {
            if (cResult[14] === account.type) {
              let tmp25 = cResult[15];
            }
            class W {
              constructor(arg0) {
                tmp = closure_4(account);
                obj = closure_1(closure_2[41]);
                setShowActivityResult = obj.setShowActivity(account.type, account.id, account);
                return;
              }
            }
            const obj7 = { label: tmp22, value: tmp6, onValueChange: null };
            class H {
              constructor(arg0) {
                tmp = closure_3(account);
                obj = closure_1(closure_2[41]);
                setFriendSyncResult = obj.setFriendSync(account.type, account.id, account);
                return;
              }
            }
            const tmp28 = closure_29(tmp(tmp2[42]).FormSwitchRow, obj7);
            cResult[16] = tmp6;
            cResult[17] = tmp25;
            cResult[18] = tmp28;
          }
          class H {
            constructor(arg0) {
              tmp = closure_3(account);
              obj = closure_1(closure_2[41]);
              setFriendSyncResult = obj.setFriendSync(account.type, account.id, account);
              return;
            }
          }
          cResult[13] = account.id;
          cResult[14] = account.type;
          cResult[15] = H;
          tmp25 = H;
        }
        const tmp14Result = setShowPreviewInvisibleIcon(tmp2[20]);
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
  const tmp7 = _slicedToArray(value.useState(account.showActivity), 2);
}) : ((account) => {
  account = account.account;
  ({ setShowPreviewInvisibleIcon: importDefault, setShowPreviewMetadata: dependencyMap } = account);
  c3 = undefined;
  _slicedToArray = undefined;
  value = undefined;
  closure_6 = undefined;
  first1 = undefined;
  closure_8 = undefined;
  const tmp = closure_32();
  [tmp3, c3] = value.useState(account.friendSync);
  const tmp4 = _slicedToArray(value.useState(account.showActivity), 2);
  _slicedToArray = tmp4[1];
  [value, closure_6] = value.useState(1 === account.metadataVisibility);
  [first1, closure_8] = value.useState(1 === account.visibility);
  useMountEffectDefault(() => {
    importDefault(!first1);
    dependencyMap(first);
  });
  const tmp2 = _slicedToArray(value.useState(account.friendSync), 2);
  value = PlatformsDefault.get(account.type);
  let tmp12;
  if (set.has(account.type)) {
    const obj2 = { label: null, value: null, onValueChange: null };
    const intl = account(1126).intl;
    obj2.label = intl.string(account(1126).t["+KCMSi"]);
    obj2.value = tmp3;
    obj2.onValueChange = function onValueChange(enabled) {
      _undefined(enabled);
      ConnectedAccountsActionCreatorsDefault.setFriendSync(account.type, account.id, enabled);
    };
    tmp12 = closure_29(account(8895).FormSwitchRow, obj2);
  }
  let tmp15;
  if (set2.has(account.type)) {
    const obj3 = { label: null, value: null, onValueChange: null };
    const intl2 = account(1126).intl;
    const obj4 = { platform: value.name };
    obj3.label = intl2.formatToPlainString(account(1126).t["6u6J0q"], obj4);
    obj3.value = tmp4[0];
    obj3.onValueChange = function onValueChange(show_activity) {
      closure_4(show_activity);
      ConnectedAccountsActionCreatorsDefault.setShowActivity(account.type, account.id, show_activity);
    };
    tmp15 = closure_29(account(8895).FormSwitchRow, obj3);
  }
  let tmp18;
  if (true === value.hasMetadata) {
    const obj5 = { label: null, value: null, disabled: null, onValueChange: null };
    const intl3 = account(1126).intl;
    obj5.label = intl3.string(account(1126).t.FYKGsL);
    obj5.value = value;
    obj5.disabled = !first1;
    obj5.onValueChange = function onValueChange(arg0) {
      dependencyMap(arg0);
      closure_6(arg0);
      let num = 0;
      ({ type, id } = account);
      if (arg0) {
        num = 1;
      }
      const result = ConnectedAccountsActionCreatorsDefault.setMetadataVisibility(type, id, num);
    };
    tmp18 = closure_29(account(8895).FormSwitchRow, obj5);
  }
  const obj6 = { style: tmp.accountConnectedPrivacyOptionsContainer, children: null };
  const obj7 = { label: null, value: null, onValueChange: null };
  const intl4 = account(1126).intl;
  obj7.label = intl4.string(account(1126).t.f7yOAX);
  obj7.value = first1;
  obj7.onValueChange = function onValueChange(arg0) {
    closure_1_1(!arg0);
    closure_8(arg0);
    let num = 0;
    ({ type, id } = account);
    if (arg0) {
      num = 1;
    }
    ConnectedAccountsActionCreatorsDefault.setVisibility(type, id, num);
  };
  const items = [closure_29(account(8895).FormSwitchRow, obj7), tmp18, tmp15, tmp12];
  obj6.children = items;
  return closure_30(closure_8, obj6);
});
const __initData12 = { CHECKS_REQUIRED: 0, [0]: "CHECKS_REQUIRED", ACCOUNT_CONNECTED: 1, [1]: "ACCOUNT_CONNECTED", ROLE_GRANTED: 2, [2]: "ROLE_GRANTED" };
size = fn(2);
let result = size.fileFinishedImporting("modules/connections/native/GuildRoleConnectionsConnectAccountsActionSheet.tsx");
class GuildRoleConnectionsConnectAccountsActionSheet {
  constructor(arg0) {
    guildId = global.guildId;
    role = global.role;
    initialAttemptedPlatformType = global.initialAttemptedPlatformType;
    closure_2 = initialAttemptedPlatformType;
    ({ initialAttemptedApplicationId: closure_3, onCloseModal } = global);
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    closure_13 = undefined;
    closure_14 = undefined;
    closure_15 = undefined;
    closure_16 = undefined;
    closure_17 = undefined;
    closure_18 = undefined;
    closure_19 = undefined;
    closure_20 = async function _handleAssignRole() {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
              LocaleStore(true);
              v1 = 1;
              c0 = 1;
              const obj5 = { value: v1(initialAttemptedPlatformType[45]).assignGuildRoleConnection(guildId, id.id), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c0 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp11) {
          c0 = tmp;
          throw tmp11;
        }
      }
    };
    tmp = closure_32();
    tmp2 = closure_39;
    tmp3 = onCloseModal(closure_5.useState(closure_39.CHECKS_REQUIRED), 2);
    [tmp4, closure_5] = tmp3;
    tmp5 = onCloseModal(closure_5.useState(null), 2);
    [arr, closure_6] = tmp5;
    tmp6 = onCloseModal(closure_5.useState(false), 2);
    closure_7 = tmp6[1];
    tmp7 = onCloseModal(closure_5.useState(true), 2);
    [tmp8, closure_8] = tmp7;
    tmp9 = onCloseModal(closure_5.useState(false), 2);
    first = tmp9[0];
    closure_9 = first;
    closure_10 = tmp9[1];
    tmp11 = onCloseModal(closure_5.useState(true), 2);
    [tmp12, tmp13] = tmp11;
    tmp14 = onCloseModal(closure_5.useState(false), 2);
    tmp17 = guildId;
    tmp18 = closure_2;
    [tmp15, tmp16] = tmp14;
    obj = guildId(closure_2[43]);
    items = [];
    items[0] = closure_14;
    stateFromStores = obj.useStateFromStores(items, () => first2.getAccounts());
    obj2 = guildId(closure_2[43]);
    items1 = [];
    items1[0] = closure_9;
    stateFromStores1 = obj2.useStateFromStores(items1, () => first.getNewestTokens());
    obj3 = guildId(closure_2[43]);
    items2 = [];
    items2[0] = closure_12;
    stateFromStores2 = obj3.useStateFromStores(items2, () => first1.getId());
    closure_11 = stateFromStores2;
    tmp21 = onCloseModal(closure_5.useState(null), 2);
    first1 = tmp21[0];
    closure_12 = first1;
    closure_13 = tmp21[1];
    tmp23 = onCloseModal(closure_5.useState(null), 2);
    first2 = tmp23[0];
    closure_14 = first2;
    closure_15 = tmp23[1];
    tmp25 = onCloseModal(closure_5.useState(() => {
      let tmp2 = null;
      if (null != initialAttemptedPlatformType) {
        const obj = { platformType: tmp, applicationId: null };
        let tmp3 = asyncGeneratorStep;
        if (asyncGeneratorStep == null) {
          tmp3 = null;
        }
        obj.applicationId = tmp3;
        tmp2 = obj;
      }
      return tmp2;
    }), 2);
    [tmp26, closure_16] = tmp25;
    tmp27 = onCloseModal(closure_5.useState(null), 2);
    [arr6, closure_17] = tmp27;
    tmp28 = role;
    tmp29 = role(closure_2[19])();
    obj4 = guildId(closure_2[43]);
    items3 = [];
    items3[0] = closure_15;
    stateFromStores3 = obj4.useStateFromStores(items3, () => GuildMemberStore.getMember(guildId, stateFromStores2));
    closure_18 = stateFromStores3;
    obj5 = guildId(closure_2[43]);
    items4 = [];
    items4[0] = closure_13;
    stateFromStores4 = obj5.useStateFromStores(items4, () => ChannelStore.getMutableGuildChannelsForGuild(guildId));
    obj6 = guildId(closure_2[43]);
    items5 = [];
    items5[0] = closure_10;
    stateFromStores5 = obj6.useStateFromStores(items5, () => closure_10.locale);
    values = Object.values(stateFromStores4);
    found = values.filter((item) => {
      let hasItem = PermissionStore.can(constants7.VIEW_CHANNEL, item) && PermissionStore.can(constants7.SEND_MESSAGES, item);
      if (hasItem) {
        hasItem = getConnectionsRolesDefault(item).includes(role);
        const obj2 = getConnectionsRolesDefault(item);
      }
      return hasItem;
    });
    closure_19 = found;
    items6 = [, , , ];
    items6[0] = guildId;
    items6[1] = role.id;
    items6[2] = stateFromStores;
    items6[3] = stateFromStores1;
    effect = closure_5.useEffect(() => {
      const guildRoleConnectionsEligibility = GuildActionCreatorsDefault.fetchGuildRoleConnectionsEligibility(guildId, role.id);
      guildRoleConnectionsEligibility.then((arr) => {
        closure_1_6(arr);
        closure_1_7(arr.some((arr) => arr.every((item) => item.result)));
        closure_1_8(false);
      });
    }, items6);
    items7 = [, , ];
    items7[0] = initialAttemptedPlatformType;
    items7[1] = role.id;
    items7[2] = guildId;
    effect1 = closure_5.useEffect(() => {
      if (null == initialAttemptedPlatformType) {
        const obj2 = { role_id: role.id };
        const obj = AnalyticsUtilsDefault;
        const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
        obj.track(constants5.PASSPORT_CHALLENGE_VIEWED, obj2);
      }
    }, items7);
    items8 = [, , , , ];
    items8[0] = first;
    items8[1] = found.length;
    items8[2] = stateFromStores3;
    items8[3] = guildId;
    items8[4] = role.id;
    effect2 = closure_5.useEffect(() => {
      let hasItem = first;
      if (first) {
        hasItem = null != stateFromStores3;
      }
      if (hasItem) {
        const roles = stateFromStores3.roles;
        hasItem = roles.includes(role.id);
      }
      if (hasItem) {
        closure_10(false);
        if (found.length > 0) {
          _undefined(constants.ROLE_GRANTED);
        } else {
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
        const obj3 = { role_id: role.id };
        const obj2 = AnalyticsUtilsDefault;
        const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
        obj2.track(constants5.PASSPORT_CHALLENGE_FINISHED, obj3);
      }
    }, items8);
    tmp36 = jsx;
    tmp37 = jsxs;
    tmp38 = closure_8;
    obj1 = { style: tmp.container, children: null };
    if (closure_39.CHECKS_REQUIRED === tmp4) {
      obj51 = { style: null, children: null };
      obj51.style = tmp.header;
      obj52 = { variant: "heading-lg/extrabold", children: null };
      intl2 = tmp17(tmp18[27]).intl;
      obj52.children = intl2.string(tmp17(tmp18[27]).t.zOZh3R);
      obj51.children = tmp36(tmp17(tmp18[26]).Text, obj52);
      tmp36Result = tmp36(tmp38, obj51);
    } else if (tmp2.ACCOUNT_CONNECTED === tmp4) {
      str = "lastPlatformConnected is null";
      tmp40 = tmp28(tmp18[37])(null != first1, "lastPlatformConnected is null");
      tmp28Result = tmp28(tmp18[20]);
      value = tmp28Result.get(first1);
      name = undefined;
      if (value != null) {
        name = value.name;
      }
      if (name == null) {
        name1 = undefined;
        if (first2 != null) {
          name1 = first2.name;
        }
        name = name1;
      }
      obj53 = { variant: "heading-lg/extrabold", style: null, children: null };
      obj53.style = tmp.header;
      intl = tmp17(tmp18[27]).intl;
      obj54 = { platformName: null };
      obj54.platformName = name;
      obj53.children = intl.format(tmp17(tmp18[27]).t.yQvgBO, obj54);
      tmp36Result = tmp36(tmp17(tmp18[26]).Text, obj53);
    } else {
      tmp36Result = null;
      if (tmp2.ROLE_GRANTED === tmp4) {
        obj55 = { variant: "heading-lg/extrabold", style: null, children: null };
        obj55.style = tmp.header;
        intl12 = tmp17(tmp18[27]).intl;
        obj55.children = intl12.string(tmp17(tmp18[27]).t.najNdz);
        tmp36Result = tmp36(tmp17(tmp18[26]).Text, obj55);
      }
    }
    handleManageConnections = function handleManageConnections() {
      if (onCloseModal != null) {
        tmp();
      }
      ActionSheetActionCreatorsDefault.hideActionSheet();
      openUserSettings.openUserSettings({ screen: constants4.CONNECTIONS });
    };
    handleManageAuthorizedApplications = function handleManageAuthorizedApplications() {
      if (onCloseModal != null) {
        tmp();
      }
      ActionSheetActionCreatorsDefault.hideActionSheet();
      openUserSettings.openUserSettings({ screen: constants4.AUTHORIZED_APPS });
    };
    items9 = [, , ];
    items9[0] = tmp36Result;
    if (tmp2.CHECKS_REQUIRED === tmp4) {
      tmp55 = null != arr;
      if (tmp55) {
        num = 1;
        tmp55 = arr.length > 1;
      }
      tmp56 = null != arr;
      if (tmp56) {
        num2 = 1;
        tmp56 = 1 === arr.length;
      }
      if (tmp56) {
        num3 = 1;
        tmp56 = 1 === arr[0].length;
      }
      if (!tmp8) {
        if (null != arr) {
          obj56 = { style: null, children: null };
          obj56.style = tmp.content;
          intl13 = tmp17(tmp18[27]).intl;
          t = tmp17(tmp18[27]).t;
          if (tmp56) {
            jHfRvZ = t.jHfRvZ;
          } else {
            jHfRvZ = tmp55 ? t["mOQ8k+"] : t.U0olLg;
          }
          obj57 = { variant: "text-md/medium", color: "text-default", children: null };
          obj58 = { roleName: null };
          obj58.roleName = role.name;
          handlePlatformAttempt = function handlePlatformAttempt() {
            const obj = AnalyticsUtilsDefault;
            const obj2 = { role_id: role.id };
            const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
            obj.track(constants5.PASSPORT_CHALLENGE_STARTED, obj2);
          };
          handlePlatformConnect = function handlePlatformConnect(platformType, role_connections_verification_url) {
            closure_1 = role_connections_verification_url;
            let obj = {
              platformType,
              location: "Verified Roles Connect Accounts Modal",
              onClose() {
                let id;
                if (closure_1 != null) {
                  id = closure_1.id;
                }
                if (id == null) {
                  id = null;
                }
                let prop;
                if (closure_1 != null) {
                  prop = closure_1.role_connections_verification_url;
                }
                const resolved = Promise.resolve({ default: closure_1_40 });
                const obj = closure_1(4854);
                const obj2 = { default: closure_1_40 };
                const obj4 = { role, guildId, initialAttemptedPlatformType: platformType, initialAttemptedApplicationId: null, overrideUrl: null, onCloseModal: null };
                let tmp7 = null;
                const guildRoleConnectionsConnectAccountsActionSheetKey = platformType(11186).makeGuildRoleConnectionsConnectAccountsActionSheetKey(role.id);
                if (null != platformType) {
                  tmp7 = id;
                }
                obj4.initialAttemptedApplicationId = tmp7;
                obj4.overrideUrl = { overrideUrl: prop }.overrideUrl;
                obj4.onCloseModal = onCloseModal;
                obj.openLazy(resolved, guildRoleConnectionsConnectAccountsActionSheetKey, obj4);
                const obj3 = platformType(11186);
              },
              overrideUrl: null
            };
            let prop;
            if (role_connections_verification_url != null) {
              prop = role_connections_verification_url.role_connections_verification_url;
            }
            obj.overrideUrl = prop;
            role(initialAttemptedPlatformType[51])(obj);
          };
          handlePlatformIdentityAuthorize = function handlePlatformIdentityAuthorize(applicationId) {
            applicationId = applicationId.applicationId;
            const wasAlreadyConnected = applicationId.wasAlreadyConnected;
            ({ scopes, connectedAccountProvider } = applicationId);
            role(initialAttemptedPlatformType[48]).hideActionSheet();
            const combined = "OAuth2AuthorizeModal-" + applicationId;
            let obj = role(initialAttemptedPlatformType[48]);
            function handleModalClose(key) {
              if (key.key === combined) {
                DispatcherDefault.unsubscribe("MODAL_POP", handleModalClose);
                let tmp = null;
                if (!wasAlreadyConnected) {
                  tmp = closure_3_20;
                }
                const obj2 = { default: closure_1_40 };
                const resolved = Promise.resolve(obj2);
                const obj = wasAlreadyConnected(combined[48]);
                const obj4 = { role, guildId, initialAttemptedPlatformType: tmp, initialAttemptedApplicationId: null, overrideUrl: null, onCloseModal: null };
                let tmp13 = null;
                const guildRoleConnectionsConnectAccountsActionSheetKey = applicationId(combined[50]).makeGuildRoleConnectionsConnectAccountsActionSheetKey(role.id);
                if (null != tmp) {
                  tmp13 = applicationId;
                }
                obj4.initialAttemptedApplicationId = tmp13;
                obj4.overrideUrl = {}.overrideUrl;
                obj4.onCloseModal = onCloseModal;
                obj.openLazy(resolved, guildRoleConnectionsConnectAccountsActionSheetKey, obj4);
                const obj3 = applicationId(combined[50]);
              }
            }
            const subscription = role(initialAttemptedPlatformType[52]).subscribe("MODAL_POP", handleModalClose);
            let obj2 = role(initialAttemptedPlatformType[52]);
            let obj4 = { clientId: applicationId, scopes, integrationType: null, connectedAccountProvider: null, callback: null, dismissOAuthModal: null };
            let obj3 = role(initialAttemptedPlatformType[53]);
            obj4.integrationType = guildId(initialAttemptedPlatformType[56]).ApplicationIntegrationType.USER_INSTALL;
            obj4.connectedAccountProvider = connectedAccountProvider;
            obj4.callback = function callback() {

            };
            obj4.dismissOAuthModal = function dismissOAuthModal() {
              return ModalActionCreatorsDefault.popWithKey(combined);
            };
            obj3.pushLazy(guildId(initialAttemptedPlatformType[55])(initialAttemptedPlatformType[54], initialAttemptedPlatformType.paths), obj4, combined);
          };
          handlePlatformConnected = function handlePlatformConnected(arg0, arg1) {
            closure_13(arg0);
            closure_15(arg1);
            _undefined(constants.ACCOUNT_CONNECTED);
            _undefined2(null);
            if (null != arg1) {
              const userApplicationRoleConnections = ConnectionsRoleActionCreators.fetchUserApplicationRoleConnections();
              userApplicationRoleConnections.then((result) => {
                closure_1_17(result);
              }).catch(() => {

              });
              const nextPromise = userApplicationRoleConnections.then((result) => {
                closure_1_17(result);
              });
            }
          };
          obj57.children = intl13.format(jHfRvZ, obj58);
          items10 = [, , ];
          items10[0] = tmp36(tmp17(tmp18[26]).Text, obj57);
          obj59 = { style: null, children: null };
          obj59.style = tmp.connectionsChecksGroups;
          obj60 = { eligibilityStatesGroups: null, onPlatformAttempt: null, onPlatformConnect: null, onPlatformConnected: null, onPlatformIdentityAuthorize: null, initialAttemptedPlatformType: null, initialAttemptedApplicationId: null };
          obj60.eligibilityStatesGroups = arr;
          obj60.onPlatformAttempt = handlePlatformAttempt;
          obj60.onPlatformConnect = handlePlatformConnect;
          obj60.onPlatformConnected = handlePlatformConnected;
          obj60.onPlatformIdentityAuthorize = handlePlatformIdentityAuthorize;
          platformType = undefined;
          tmp57 = f57119;
          if (tmp26 != null) {
            platformType = tmp26.platformType;
          }
          if (platformType == null) {
            platformType = null;
          }
          obj60.initialAttemptedPlatformType = platformType;
          applicationId = undefined;
          if (tmp26 != null) {
            applicationId = tmp26.applicationId;
          }
          if (applicationId == null) {
            applicationId = null;
          }
          obj60.initialAttemptedApplicationId = applicationId;
          obj59.children = tmp36(tmp57, obj60);
          items10[1] = tmp36(tmp38, obj59);
          obj61 = { variant: "text-xs/normal", style: null, color: "text-default", children: null };
          obj61.style = tmp.footerText;
          intl7 = tmp17(tmp18[27]).intl;
          obj62 = { privacyPolicyUrl: null, onAuthorizedApplicationsClick: null, onConnectionsClick: null };
          tmp60 = MarketingURLs;
          obj62.privacyPolicyUrl = MarketingURLs.PRIVACY;
          obj62.onAuthorizedApplicationsClick = handleManageAuthorizedApplications;
          obj62.onConnectionsClick = handleManageConnections;
          obj61.children = intl7.format(tmp17(tmp18[27]).t.gsgvxh, obj62);
          items10[2] = tmp36(tmp17(tmp18[26]).Text, obj61);
          obj56.children = items10;
          tmp37Result = tmp37(tmp38, obj56);
        }
        tmp63 = tmp37Result;
      }
      tmp62 = closure_6;
      obj63 = { size: "large", style: null };
      obj63.style = tmp.loading;
      tmp37Result = tmp36(closure_6, obj63);
    } else {
      if (tmp2.ACCOUNT_CONNECTED === tmp4) {
        str2 = "lastPlatformConnected is null";
        tmp44 = tmp28(tmp18[37])(null != first1, "lastPlatformConnected is null");
        found1 = stateFromStores.find((type) => first1 === type.type);
        found2 = undefined;
        if (arr6 != null) {
          found2 = arr6.find((application) => {
            let id;
            if (first2 != null) {
              id = first2.id;
            }
            return application.application.id === id;
          });
        }
        obj64 = { style: null, children: null };
        obj64.style = tmp.content;
        obj65 = { style: null, children: null };
        obj65.style = tmp.accountConnectedContainer;
        if (null == found1) {
          if (null == found2) {
            tmp52 = closure_6;
            obj66 = { size: "large", style: null };
            obj66.style = tmp.loading;
            tmp36Result1 = tmp36(closure_6, obj66);
          }
          obj65.children = tmp36Result1;
          items11 = [, ];
          items11[0] = tmp36(tmp38, obj65);
          obj67 = { variant: "text-md/normal", color: "text-default", children: null };
          intl6 = tmp17(tmp18[27]).intl;
          obj68 = { privacyPolicyUrl: null, onAuthorizedApplicationsClick: null, onConnectionsClick: null };
          tmp53 = MarketingURLs;
          obj68.privacyPolicyUrl = MarketingURLs.PRIVACY;
          obj68.onAuthorizedApplicationsClick = handleManageAuthorizedApplications;
          obj68.onConnectionsClick = handleManageConnections;
          obj67.children = intl6.format(tmp17(tmp18[27]).t.gsgvxh, obj68);
          items11[1] = tmp36(tmp17(tmp18[26]).Text, obj67);
          obj64.children = items11;
          tmp37Result1 = tmp37(tmp38, obj64);
        }
        tmp47 = Fragment;
        tmp37Result2 = null;
        if (null != found1) {
          obj69 = { children: null };
          obj70 = { style: null, children: null };
          obj70.style = tmp.accountConnectedPreview;
          obj71 = { variant: "eyebrow", color: "text-default", children: null };
          intl3 = tmp17(tmp18[27]).intl;
          obj71.children = intl3.string(tmp17(tmp18[27]).t.TOjkEg);
          items12 = [, ];
          items12[0] = tmp36(tmp17(tmp18[26]).Text, obj71);
          obj72 = { account: null, userId: null, theme: null, locale: null, style: null, showMetadata: null, showInvisibleIcon: null };
          obj72.account = found1;
          obj72.userId = stateFromStores2;
          obj72.theme = tmp29;
          obj72.locale = stateFromStores5;
          obj72.style = tmp.accountConnectedPreviewConnectedUserAccount;
          obj72.showMetadata = tmp12;
          obj72.showInvisibleIcon = tmp15;
          items12[1] = tmp36(tmp17(tmp18[59]).ConnectedUserAccount, obj72);
          obj70.children = items12;
          items13 = [, ];
          items13[0] = tmp37(tmp38, obj70);
          obj73 = { style: null, children: null };
          obj73.style = tmp.accountConnectedPrivacy;
          obj74 = { variant: "eyebrow", color: "text-default", children: null };
          intl4 = tmp17(tmp18[27]).intl;
          obj74.children = intl4.string(tmp17(tmp18[27]).t.jndPhX);
          items14 = [, ];
          items14[0] = tmp36(tmp17(tmp18[26]).Text, obj74);
          tmp49 = f57121;
          obj75 = { account: null, setShowPreviewInvisibleIcon: null, setShowPreviewMetadata: null };
          obj75.account = found1;
          obj75.setShowPreviewInvisibleIcon = tmp16;
          obj75.setShowPreviewMetadata = tmp13;
          items14[1] = tmp36(f57121, obj75);
          obj73.children = items14;
          items13[1] = tmp37(tmp38, obj73);
          obj69.children = items13;
          tmp37Result2 = tmp37(tmp47, obj69);
        }
        items15 = [, ];
        items15[0] = tmp37Result2;
        tmp37Result3 = null;
        if (null != found2) {
          obj76 = { style: null, children: null };
          obj76.style = tmp.accountConnectedPreview;
          obj77 = { variant: "eyebrow", color: "text-default", children: null };
          intl5 = tmp17(tmp18[27]).intl;
          obj77.children = intl5.string(tmp17(tmp18[27]).t.TOjkEg);
          items16 = [, ];
          items16[0] = tmp36(tmp17(tmp18[26]).Text, obj77);
          obj78 = { applicationRoleConnection: null, theme: null, locale: null, style: null };
          obj78.applicationRoleConnection = found2;
          obj78.theme = tmp29;
          obj78.locale = stateFromStores5;
          obj78.style = tmp.accountConnectedPreviewConnectedUserAccount;
          items16[1] = tmp36(tmp17(tmp18[59]).ConnectedApplicationUserRoleAccount, obj78);
          obj76.children = items16;
          tmp37Result3 = tmp37(tmp38, obj76);
        }
        obj79 = { children: null };
        items15[1] = tmp37Result3;
        obj79.children = items15;
        tmp36Result1 = tmp37(tmp47, obj79);
      } else {
        tmp37Result1 = null;
        if (tmp2.ROLE_GRANTED === tmp4) {
          obj80 = { style: null, children: null };
          obj80.style = tmp.content;
          obj81 = { style: null, children: null };
          obj81.style = tmp.roleGranted;
          obj82 = { guildId: null, style: null, role: null, size: 24 };
          obj82.guildId = guildId;
          obj82.style = tmp.verifiedIcon;
          obj82.role = role;
          items17 = [, ];
          items17[0] = tmp36(tmp28(tmp18[60]), obj82);
          obj83 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: null, children: null };
          obj83.style = tmp.roleGrantedName;
          obj83.children = role.name;
          items17[1] = tmp36(tmp17(tmp18[26]).Text, obj83);
          obj81.children = items17;
          items18 = [, ];
          items18[0] = tmp37(tmp38, obj81);
          obj84 = { style: null, children: null };
          obj84.style = tmp.channelsGranted;
          obj84.children = found.map((channel) => closure_1_29(closure_1_34, { channel }, channel.id));
          items18[1] = tmp36(tmp38, obj84);
          obj80.children = items18;
          tmp37Result1 = tmp37(tmp38, obj80);
        }
      }
      items9[1] = tmp37Result1;
      if (tmp2.CHECKS_REQUIRED === tmp4) {
        obj85 = { variant: "primary", onPress: null, disabled: null, text: null, grow: true };
        obj85.onPress = function onPress() {
          return (function handleAssignRole() {
            const self = this;
            const apply = closure_1_20.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
        };
        if (!tmp8) {
          tmp8 = !tmp6[0];
        }
        if (!tmp8) {
          tmp8 = first;
        }
        obj85.disabled = tmp8;
        intl11 = tmp17(tmp18[27]).intl;
        obj85.text = intl11.string(tmp17(tmp18[27]).t["8SuVoE"]);
        tmp36Result2 = tmp36(tmp17(tmp18[61]).Button, obj85);
      } else if (tmp2.ACCOUNT_CONNECTED === tmp4) {
        obj86 = { variant: "primary", onPress: null, text: null, grow: true };
        obj86.onPress = function onPress() {
          return _undefined(constants.CHECKS_REQUIRED);
        };
        intl10 = tmp17(tmp18[27]).intl;
        obj86.text = intl10.string(tmp17(tmp18[27]).t.i4jeWR);
        tmp36Result2 = tmp36(tmp17(tmp18[61]).Button, obj86);
      } else {
        flag = undefined;
        if (arr != null) {
          flatResult = arr.flat();
          flag = flatResult.some((application_id) => null == application_id.application_id);
        }
        if (flag == null) {
          flag = false;
        }
        tmp64 = Fragment;
        obj87 = { variant: "primary", onPress: null, text: null, grow: true };
        obj87.onPress = function onPress() {
          if (onCloseModal != null) {
            tmp();
          }
          ActionSheetActionCreatorsDefault.hideActionSheet();
        };
        intl8 = tmp17(tmp18[27]).intl;
        obj87.text = intl8.string(tmp17(tmp18[27]).t.cpT0Cq);
        items19 = [, ];
        items19[0] = tmp36(tmp17(tmp18[61]).Button, obj87);
        tmp36Result3 = null;
        if (flag) {
          obj88 = { style: null, children: null };
          obj88.style = tmp.manageConnectionsButton;
          obj89 = { variant: "secondary", onPress: null, text: null, grow: true };
          obj89.onPress = handleManageConnections;
          intl9 = tmp17(tmp18[27]).intl;
          obj89.text = intl9.string(tmp17(tmp18[27]).t.VXV55P);
          obj88.children = tmp36(tmp17(tmp18[61]).Button, obj89);
          tmp36Result3 = tmp36(tmp38, obj88);
        }
        obj90 = { children: null };
        items19[1] = tmp36Result3;
        obj90.children = items19;
        tmp36Result2 = tmp37(tmp64, obj90);
      }
      obj91 = { children: null };
      items9[2] = tmp36Result2;
      obj1.children = items9;
      obj91.children = tmp37(tmp38, obj1);
      return tmp36(guildId(closure_2[58]).BottomSheet, obj91);
    }
    return;
  }
}

export default GuildRoleConnectionsConnectAccountsActionSheet;