// discord_app/modules/connections/native/GuildRoleConnectionsConnectAccountsActionSheet.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import DispatcherDefault from "../../../Dispatcher.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import AvatarUtils from "../../../utils/AvatarUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import shared from "../../../design/shared.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../channel/useChannelName.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import useMountEffectDefault from "../../../hooks/useMountEffect.tsx";
import utils_ChannelUtils from "../../../utils/native/ChannelUtils.tsx";
import PlatformsDefault from "../../../lib/Platforms.tsx";
import ConnectedAccountsActionCreatorsDefault from "../../../actions/ConnectedAccountsActionCreators.tsx";
import ConnectionsUtils from "../ConnectionsUtils.tsx";
import getConnectionsRolesDefault from "../../channel/getConnectionsRoles.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import BotTagDefault from "../../applications/native/BotTag.tsx";
import _modDef11399 from "../../../../_runtime/metro/11399__.js";
import _modDef11706 from "../../../../_runtime/metro/11706__.js";
import _modDef11707 from "../../../../_runtime/metro/11707__.js";
import OfficialConnectionIconDefault from "OfficialConnectionIcon.tsx";
import ConnectionsRoleActionCreators from "../ConnectionsRoleActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthorizedAppsStore from "../../oauth2/AuthorizedAppsStore.tsx";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import UserRecord from "../../../records/UserRecord.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import ConnectedAccountsStore from "../../../stores/ConnectedAccountsStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";

require = fn;
function PlatformIcon(platformType) {
  const tmp = closure_32();
  const tmp3 = useThemeDefault();
  value = PlatformsDefault.get(platformType.platformType);
  const obj2 = AvatarUtils;
  const icon = value.icon;
  const source = obj2.makeSource(shared.isThemeLight(tmp3) ? icon.lightPNG : icon.darkPNG);
  return __initData7(native.Icon, { source, style: tmp.platformIcon, disableColor: true });
}
function ChannelName(channel) {
  channel = channel.channel;
  const tmp = closure_32();
  const channelIcon = utils_ChannelUtils.getChannelIcon(channel);
  const obj2 = { style: null, children: null };
  const items = [tmp.channelName, channel.style];
  obj2.style = items;
  let tmp8 = null;
  if (null != channelIcon) {
    const obj3 = { source: channelIcon, style: tmp.channelNameIcon };
    tmp8 = __initData7(native.Icon, obj3);
  }
  const items1 = [tmp8];
  const tmp5 = useChannelNameDefault(channel);
  items1[1] = __initData7(Text_Text.Text, {
    variant: "heading-lg/semibold",
    color: "text-default",
    style: tmp.channelNameText,
    lineClamp: 1,
    children: useChannelNameDefault(channel),
  });
  obj2.children = items1;
  return __initData8(React6, obj2);
}
function ConnectionsCheck(result) {
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
      tmp22Result = __initData7(Text_Text.Text, obj5);
    }
    return tmp22Result;
  }
}
function IdentityConnectionsCheckGroup(eligibilityState) {
  eligibilityState = eligibilityState.eligibilityState;
  const onAttempted = eligibilityState.onAttempted;
  const onIdentityAuthorize = eligibilityState.onIdentityAuthorize;
  let application;
  c9 = undefined;
  const tmp = closure_32();
  const getOrFetchApplicationBatched = eligibilityState(onIdentityAuthorize[27]).useGetOrFetchApplicationBatched(
    eligibilityState.application_id,
  );
  const tmp6 = onAttempted(onIdentityAuthorize[28])(getOrFetchApplicationBatched);
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
        value = tmp5(tmp3[18]).get(identity_connected_account_type);
        flag = canStartAuthorization;
        if (tmp9) {
          noop = true;
          flag = true;
        }
        const tmp5Result = tmp5(tmp3[18]);
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
    const tmp5Result2 = tmp5(tmp3[29]);
    const tmp10 = closure_29(tmp5(tmp3[29]), obj2);
  }
  if (result) {
    const obj4 = { source: tmp5(tmp3[30]), style: tmp.connectionsChecksGroupCheckmark };
    let tmp13Result = closure_29(tmp2(tmp3[21]).Icon, obj4);
    let tmp15 = closure_29;
  } else if (flag) {
    const obj5 = { source: tmp5(tmp3[31]), style: tmp.connectionsChecksGroupCaret };
    tmp13Result = closure_29(tmp2(tmp3[21]).Icon, obj5);
    tmp15 = closure_29;
  } else {
    const obj6 = { variant: "text-md/medium", color: "text-muted", children: null };
    const intl = tmp2(tmp3[25]).intl;
    obj6.children = intl.string(tmp2(tmp3[25]).t.cEts68);
    tmp13Result = closure_29(tmp2(tmp3[24]).Text, obj6);
    tmp15 = closure_29;
  }
  const items1 = [result, flag, canStartAuthorization, startAuthorization, onAttempted, onIdentityAuthorize, , , ,];
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
            const obj2 = {
              applicationId: eligibilityState.application_id,
              scopes: identity_auth_required_scopes,
              connectedAccountProvider: identity_connected_account_type,
              wasAlreadyConnected: someResult,
            };
            onIdentityAuthorize(obj2);
          }
        }
      }
    }
  }, items1);
  const officialApplicationIds = tmp2(tmp3[26]).officialApplicationIds;
  let str;
  if (application != null) {
    str = application.id;
  }
  if (str == null) {
    str = "";
  }
  let tmp18Result = null;
  if (!officialApplicationIds.includes(str)) {
    const items2 = [tmp.connectionsChecksGroup, ,];
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
      const obj8 = { style: tmp.appIcon, user: memo, size: tmp2(tmp3[21]).AvatarSizes.XSMALL, guildId: "a" };
      tmp15Result = tmp15(tmp2(tmp3[21]).Avatar, obj8);
    }
    const items3 = [tmp15Result, ,];
    const obj9 = { style: tmp.connectionsChecksGroupTextContainer, children: null };
    const obj10 = { style: tmp.connectionsChecksGroupTextNameContainer, children: null };
    let name;
    if (application != null) {
      name = application.name;
    }
    const obj11 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: name };
    const items4 = [tmp15(tmp2(tmp3[24]).Text, obj11), tmp10];
    obj10.children = items4;
    const items5 = [closure_30(application, obj10)];
    let tmp15Result2 = null;
    if (!flag) {
      tmp15Result2 = null;
      if (!result) {
        const obj12 = { variant: "text-xs/normal", color: "text-muted", style: tmp.connectionsCheck, children: null };
        const intl2 = tmp2(tmp3[25]).intl;
        obj12.children = intl2.string(tmp2(tmp3[25]).t["+z5dYe"]);
        tmp15Result2 = tmp15(tmp2(tmp3[24]).Text, obj12);
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
}
function ConnectionsChecks(eligibilityStatesGroups) {
  eligibilityStatesGroups = eligibilityStatesGroups.eligibilityStatesGroups;
  ({
    onPlatformAttempt: importDefault,
    onPlatformConnect: dependencyMap,
    onPlatformConnected,
  } = eligibilityStatesGroups);
  ({
    onPlatformIdentityAuthorize: _slicedToArray,
    initialAttemptedPlatformType,
    initialAttemptedApplicationId,
  } = eligibilityStatesGroups);
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
  memo1 = obj.useMemo(
    () =>
      _modDef12.groupBy(memo, (application_id) => {
        let str = "";
        if (null != application_id.application_id) {
          const _HermesInternal = HermesInternal;
          str = ":" + application_id.application_id;
        }
        return "" + application_id.connection_type + str;
      }),
    items1,
  );
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
  roleColor = eligibilityStatesGroups(4339).useToken(nativeDefault.unsafe_rawColors.GREEN_330);
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
          onAttempted(onIdentityAuthorize, application_id) {
            closure_1_11(onIdentityAuthorize);
            closure_1_13(application_id);
            if (null != onIdentityAuthorize) {
              value();
            }
          },
          onIdentityAuthorize,
        };
        return closure_1_29(IdentityConnectionsCheckGroup, obj2, item);
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
    const officialApplicationIds = eligibilityStatesGroups(5493).officialApplicationIds;
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
      const obj3 = { source: _modDef11706, style: closure_5.connectionsChecksGroupCheckmark };
      let tmp22Result = closure_1_29(tmp15(1177).Icon, obj3);
      let tmp24 = closure_1_29;
    } else if (tmp20) {
      const obj4 = { variant: "text-sm/semibold", color: "text-brand", children: null };
      const intl2 = tmp15(1115).intl;
      obj4.children = intl2.string(tmp15(1115).t["5911Lb"]);
      tmp22Result = closure_1_29(tmp15(4634).Text, obj4);
      tmp24 = closure_1_29;
    } else if (tmp8) {
      const obj5 = { source: _modDef11707, style: closure_5.connectionsChecksGroupCaret };
      tmp22Result = closure_1_29(tmp15(1177).Icon, obj5);
      tmp24 = closure_1_29;
    } else {
      const obj6 = { variant: "text-md/medium", color: "text-muted", children: null };
      const intl = tmp15(1115).intl;
      obj6.children = intl.string(tmp15(1115).t.cEts68);
      tmp22Result = closure_1_29(tmp15(4634).Text, obj6);
      tmp24 = closure_1_29;
    }
    let type1;
    if (value != null) {
      type1 = value.type;
    }
    let tmp28;
    if (type1 === constants.STEAM) {
      const intl3 = tmp15(1115).intl;
      const stringResult = intl3.string(tmp15(1115).t.NcZh6K);
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
    const items = [closure_5.connectionsChecksGroup, ,];
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
        const intl4 = tmp15(1115).intl;
        obj11.children = intl4.string(tmp15(1115).t.UB3hKo);
        obj10.children = tmp24(tmp15(4634).Text, obj11);
        tmp24Result5 = tmp24(c8, obj10);
      }
    }
    const items1 = [tmp24Result5, , , ,];
    let tmp24Result6 = null;
    if (null != value) {
      const obj12 = { platformType: value.type };
      tmp24Result6 = tmp24(PlatformIcon, obj12);
    }
    items1[1] = tmp24Result6;
    let tmp24Result7 = null;
    if (null != tmp11) {
      const obj13 = { style: closure_5.appIcon, user: tmp11, size: tmp15(1177).AvatarSizes.XSMALL, guildId: "a" };
      tmp24Result7 = tmp24(tmp15(1177).Avatar, obj13);
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
    const items2 = [
      tmp24(eligibilityStatesGroups(4634).Text, {
        variant: "text-md/medium",
        color: "mobile-text-heading-primary",
        children: name,
      }),
      tmp24Result,
    ];
    let tmp24Result8 = null;
    if (null != tmp28) {
      const obj16 = {
        onPress() {
          _modDef38(null != stringResult, "tooltip is null");
          const obj = ToastActionCreatorsDefault;
          obj.open({ key: "CONNECTIONS_STEAM_TOOLTIP", icon: _modDef11399, content: stringResult });
        },
        children: null,
      };
      const obj17 = {
        source: _modDef11399,
        size: tmp15(1177).Icon.Sizes.SMALL_20,
        style: closure_5.connectionsChecksGroupTextNameInfoIcon,
      };
      obj16.children = tmp24(tmp15(1177).Icon, obj17);
      tmp24Result8 = tmp24(c7, obj16);
    }
    items2[2] = tmp24Result8;
    obj15.children = items2;
    const items3 = [
      closure_1_30(c8, obj15),
      found1.map((item) => {
        ({ connection_metadata_field, operator, value } = item);
        ({ connection_type, result, description } = item);
        value(application[35])(null != connectionMetadataField, "connectionMetadataField is null");
        value(application[35])(null != operator, "operator is null");
        value(application[35])(null != value, "value is null");
        return closure_1_29(
          closure_1_35,
          { connectionType, connectionMetadataField, operator, value, result, description },
          connectionMetadataField,
        );
      }),
    ];
    obj14.children = items3;
    items1[3] = closure_1_30(c8, obj14);
    items1[4] = tmp22Result;
    obj9.children = items1;
    return closure_1_30(c7, obj9, item);
  });
  return closure_29(closure_31, obj3);
}
function ConnectedUserAccountOptions(account) {
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
    const intl = account(1115).intl;
    obj2.label = intl.string(account(1115).t["+KCMSi"]);
    obj2.value = tmp3;
    obj2.onValueChange = function onValueChange(enabled) {
      _undefined(enabled);
      ConnectedAccountsActionCreatorsDefault.setFriendSync(account.type, account.id, enabled);
    };
    tmp12 = closure_29(account(8728).FormSwitchRow, obj2);
  }
  let tmp15;
  if (set2.has(account.type)) {
    const obj3 = { label: null, value: null, onValueChange: null };
    const intl2 = account(1115).intl;
    const obj4 = { platform: value.name };
    obj3.label = intl2.formatToPlainString(account(1115).t["6u6J0q"], obj4);
    obj3.value = tmp4[0];
    obj3.onValueChange = function onValueChange(show_activity) {
      closure_4(show_activity);
      ConnectedAccountsActionCreatorsDefault.setShowActivity(account.type, account.id, show_activity);
    };
    tmp15 = closure_29(account(8728).FormSwitchRow, obj3);
  }
  let tmp18;
  if (true === value.hasMetadata) {
    const obj5 = { label: null, value: null, disabled: null, onValueChange: null };
    const intl3 = account(1115).intl;
    obj5.label = intl3.string(account(1115).t.FYKGsL);
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
    tmp18 = closure_29(account(8728).FormSwitchRow, obj5);
  }
  const obj6 = { style: tmp.accountConnectedPrivacyOptionsContainer, children: null };
  const obj7 = { label: null, value: null, onValueChange: null };
  const intl4 = account(1115).intl;
  obj7.label = intl4.string(account(1115).t.f7yOAX);
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
  const items = [closure_29(account(8728).FormSwitchRow, obj7), tmp18, tmp15, tmp12];
  obj6.children = items;
  return closure_30(closure_8, obj6);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, Pressable: closure_7, View: closure_8 } = get_ActivityIndicator);
let Constants = fn(5494);
({
  MetadataFields: closure_17,
  OperatorTypes: closure_18,
  GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE: closure_19,
  GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE: closure_20,
} = Constants);
Constants = fn(1074);
({
  PlatformTypes: closure_21,
  UserSettingsSections: closure_22,
  AnalyticEvents: closure_23,
  MarketingURLs: closure_24,
  FRIEND_SYNC_PLATFORM_TYPES: closure_25,
  ACTIVITY_PLATFORM_TYPES: closure_26,
  Permissions: closure_27,
  EMPTY_STRING_SNOWFLAKE_ID: closure_28,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_29, jsxs: closure_30, Fragment: items } = jsxProd);
const createStyles = fn(4638);
let obj2 = {
  container: { padding: 12 },
  connectionsChecksGroups: { marginTop: 16, flexDirection: "column" },
  connectionsChecksGroup: {
    flexDirection: "row",
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    borderWidth: 2,
    borderRadius: nativeDefault.radii.md,
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginBottom: 16,
    width: "100%",
    alignItems: "center",
    position: "relative",
  },
  connectionsChecksGroupPassed: null,
  connectionsChecksGroupPlatformDisabled: null,
  connectionsChecksGroupRequirementsNotMet: null,
  connectionsChecksGroupTextContainer: null,
  connectionsChecksGroupTextNameContainer: null,
  connectionsChecksGroupTextNameInfoIcon: null,
  connectionsChecksGroupCheckmark: null,
  connectionsChecksGroupCaret: null,
  connectionsCheck: null,
  platformIcon: null,
  channelName: null,
  channelNameIcon: null,
  channelNameText: null,
  header: null,
  content: null,
  footerText: null,
  accountConnectedContainer: null,
  accountConnectedPreview: null,
  accountConnectedPreviewConnectedUserAccount: null,
  accountConnectedPrivacy: null,
  accountConnectedPrivacyOptionsContainer: null,
  roleGranted: null,
  roleGrantedName: null,
  verifiedIcon: null,
  channelsGranted: null,
  manageConnectionsButton: null,
  loading: null,
  appIcon: null,
  botTag: null,
};
let obj3 = {
  flexDirection: "row",
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderWidth: 2,
  borderRadius: nativeDefault.radii.md,
  paddingHorizontal: 16,
  paddingVertical: 20,
  marginBottom: 16,
  width: "100%",
  alignItems: "center",
  position: "relative",
};
obj2.connectionsChecksGroupPassed = {
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
let obj4 = {
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
obj2.connectionsChecksGroupPlatformDisabled = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
const rect = {
  paddingVertical: 4,
  paddingHorizontal: 12,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL,
  position: "absolute",
  top: -8,
  right: 20,
};
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
obj2.accountConnectedPreviewConnectedUserAccount = {
  marginTop: 8,
  borderRadius: nativeDefault.radii.xs,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.accountConnectedPrivacy = { marginTop: 16, width: "100%" };
let obj7 = {
  marginTop: 8,
  borderRadius: nativeDefault.radii.xs,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.accountConnectedPrivacyOptionsContainer = {
  marginTop: 8,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.xs,
  padding: 8,
  flexDirection: "column",
};
let obj8 = {
  marginTop: 8,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.xs,
  padding: 8,
  flexDirection: "column",
};
obj2.roleGranted = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  paddingVertical: 12,
  paddingHorizontal: 8,
  borderTopStartRadius: 4,
  borderTopEndRadius: 4,
  marginTop: 16,
};
obj2.roleGrantedName = { overflow: "hidden", marginRight: 24 };
obj2.verifiedIcon = { marginRight: 8 };
let obj9 = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  paddingVertical: 12,
  paddingHorizontal: 8,
  borderTopStartRadius: 4,
  borderTopEndRadius: 4,
  marginTop: 16,
};
obj2.channelsGranted = {
  flexDirection: "column",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  padding: 16,
  borderBottomStartRadius: 4,
  borderBottomEndRadius: 4,
  marginBottom: 24,
};
obj2.manageConnectionsButton = { marginTop: 8 };
obj2.loading = { marginTop: 24, marginBottom: 32, alignSelf: "center" };
obj2.appIcon = { marginRight: 8 };
obj2.botTag = { marginLeft: 4 };
const __initData10 = createStyles.createStyles(obj2);
const __initData17 = {
  CHECKS_REQUIRED: 0,
  [0]: "CHECKS_REQUIRED",
  ACCOUNT_CONNECTED: 1,
  [1]: "ACCOUNT_CONNECTED",
  ROLE_GRANTED: 2,
  [2]: "ROLE_GRANTED",
};
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/connections/native/GuildRoleConnectionsConnectAccountsActionSheet.tsx",
);
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
          return { value: "HermesInternal", done: null };
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
              const obj5 = {
                value: v1(initialAttemptedPlatformType[43]).assignGuildRoleConnection(guildId, id.id),
                done: false,
              };
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
            return { value: "HermesInternal", done: null };
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
    obj = guildId(closure_2[41]);
    items = [];
    items[0] = closure_14;
    stateFromStores = obj.useStateFromStores(items, () => first2.getAccounts());
    obj2 = guildId(closure_2[41]);
    items1 = [];
    items1[0] = closure_9;
    stateFromStores1 = obj2.useStateFromStores(items1, () => first.getNewestTokens());
    obj3 = guildId(closure_2[41]);
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
    tmp25 = onCloseModal(
      closure_5.useState(() => {
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
      }),
      2,
    );
    [tmp26, closure_16] = tmp25;
    tmp27 = onCloseModal(closure_5.useState(null), 2);
    [arr6, closure_17] = tmp27;
    tmp28 = role;
    tmp29 = role(closure_2[17])();
    obj4 = guildId(closure_2[41]);
    items3 = [];
    items3[0] = closure_15;
    stateFromStores3 = obj4.useStateFromStores(items3, () => GuildMemberStore.getMember(guildId, stateFromStores2));
    closure_18 = stateFromStores3;
    obj5 = guildId(closure_2[41]);
    items4 = [];
    items4[0] = closure_13;
    stateFromStores4 = obj5.useStateFromStores(items4, () => ChannelStore.getMutableGuildChannelsForGuild(guildId));
    obj6 = guildId(closure_2[41]);
    items5 = [];
    items5[0] = closure_10;
    stateFromStores5 = obj6.useStateFromStores(items5, () => closure_10.locale);
    values = Object.values(stateFromStores4);
    found = values.filter((item) => {
      let hasItem =
        PermissionStore.can(constants7.VIEW_CHANNEL, item) && PermissionStore.can(constants7.SEND_MESSAGES, item);
      if (hasItem) {
        hasItem = getConnectionsRolesDefault(item).includes(role);
        const obj2 = getConnectionsRolesDefault(item);
      }
      return hasItem;
    });
    closure_19 = found;
    items6 = [, , ,];
    items6[0] = guildId;
    items6[1] = role.id;
    items6[2] = stateFromStores;
    items6[3] = stateFromStores1;
    effect = closure_5.useEffect(() => {
      const guildRoleConnectionsEligibility = GuildActionCreatorsDefault.fetchGuildRoleConnectionsEligibility(
        guildId,
        role.id,
      );
      guildRoleConnectionsEligibility.then((arr) => {
        closure_1_6(arr);
        closure_1_7(arr.some((arr) => arr.every((item) => item.result)));
        closure_1_8(false);
      });
    }, items6);
    items7 = [, ,];
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
    items8 = [, , , ,];
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
      intl2 = tmp17(tmp18[25]).intl;
      obj52.children = intl2.string(tmp17(tmp18[25]).t.zOZh3R);
      obj51.children = tmp36(tmp17(tmp18[24]).Text, obj52);
      tmp36Result = tmp36(tmp38, obj51);
    } else if (tmp2.ACCOUNT_CONNECTED === tmp4) {
      str = "lastPlatformConnected is null";
      tmp40 = tmp28(tmp18[35])(null != first1, "lastPlatformConnected is null");
      tmp28Result = tmp28(tmp18[18]);
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
      intl = tmp17(tmp18[25]).intl;
      obj54 = { platformName: null };
      obj54.platformName = name;
      obj53.children = intl.format(tmp17(tmp18[25]).t.yQvgBO, obj54);
      tmp36Result = tmp36(tmp17(tmp18[24]).Text, obj53);
    } else {
      tmp36Result = null;
      if (tmp2.ROLE_GRANTED === tmp4) {
        obj55 = { variant: "heading-lg/extrabold", style: null, children: null };
        obj55.style = tmp.header;
        intl12 = tmp17(tmp18[25]).intl;
        obj55.children = intl12.string(tmp17(tmp18[25]).t.najNdz);
        tmp36Result = tmp36(tmp17(tmp18[24]).Text, obj55);
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
    items9 = [, ,];
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
          intl13 = tmp17(tmp18[25]).intl;
          t = tmp17(tmp18[25]).t;
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
                const obj = closure_1(4605);
                const obj2 = { default: closure_1_40 };
                const obj4 = {
                  role,
                  guildId,
                  initialAttemptedPlatformType: platformType,
                  initialAttemptedApplicationId: null,
                  overrideUrl: null,
                  onCloseModal: null,
                };
                let tmp7 = null;
                const guildRoleConnectionsConnectAccountsActionSheetKey = platformType(
                  11711,
                ).makeGuildRoleConnectionsConnectAccountsActionSheetKey(role.id);
                if (null != platformType) {
                  tmp7 = id;
                }
                obj4.initialAttemptedApplicationId = tmp7;
                obj4.overrideUrl = { overrideUrl: prop }.overrideUrl;
                obj4.onCloseModal = onCloseModal;
                obj.openLazy(resolved, guildRoleConnectionsConnectAccountsActionSheetKey, obj4);
                const obj3 = platformType(11711);
              },
              overrideUrl: null,
            };
            let prop;
            if (role_connections_verification_url != null) {
              prop = role_connections_verification_url.role_connections_verification_url;
            }
            obj.overrideUrl = prop;
            role(initialAttemptedPlatformType[49])(obj);
          };
          handlePlatformIdentityAuthorize = function handlePlatformIdentityAuthorize(applicationId) {
            applicationId = applicationId.applicationId;
            const wasAlreadyConnected = applicationId.wasAlreadyConnected;
            ({ scopes, connectedAccountProvider } = applicationId);
            role(initialAttemptedPlatformType[46]).hideActionSheet();
            const combined = "OAuth2AuthorizeModal-" + applicationId;
            let obj = role(initialAttemptedPlatformType[46]);
            function handleModalClose(key) {
              if (key.key === combined) {
                DispatcherDefault.unsubscribe("MODAL_POP", handleModalClose);
                let tmp = null;
                if (!wasAlreadyConnected) {
                  tmp = closure_3_20;
                }
                const obj2 = { default: closure_1_40 };
                const resolved = Promise.resolve(obj2);
                const obj = wasAlreadyConnected(combined[46]);
                const obj4 = {
                  role,
                  guildId,
                  initialAttemptedPlatformType: tmp,
                  initialAttemptedApplicationId: null,
                  overrideUrl: null,
                  onCloseModal: null,
                };
                let tmp13 = null;
                const guildRoleConnectionsConnectAccountsActionSheetKey = applicationId(
                  combined[48],
                ).makeGuildRoleConnectionsConnectAccountsActionSheetKey(role.id);
                if (null != tmp) {
                  tmp13 = applicationId;
                }
                obj4.initialAttemptedApplicationId = tmp13;
                obj4.overrideUrl = {}.overrideUrl;
                obj4.onCloseModal = onCloseModal;
                obj.openLazy(resolved, guildRoleConnectionsConnectAccountsActionSheetKey, obj4);
                const obj3 = applicationId(combined[48]);
              }
            }
            const subscription = role(initialAttemptedPlatformType[50]).subscribe("MODAL_POP", handleModalClose);
            let obj2 = role(initialAttemptedPlatformType[50]);
            let obj4 = {
              clientId: applicationId,
              scopes,
              integrationType: null,
              connectedAccountProvider: null,
              callback: null,
              dismissOAuthModal: null,
            };
            let obj3 = role(initialAttemptedPlatformType[51]);
            obj4.integrationType = guildId(initialAttemptedPlatformType[54]).ApplicationIntegrationType.USER_INSTALL;
            obj4.connectedAccountProvider = connectedAccountProvider;
            obj4.callback = function callback() {};
            obj4.dismissOAuthModal = function dismissOAuthModal() {
              return ModalActionCreatorsDefault.popWithKey(combined);
            };
            obj3.pushLazy(
              guildId(initialAttemptedPlatformType[53])(
                initialAttemptedPlatformType[52],
                initialAttemptedPlatformType.paths,
              ),
              obj4,
              combined,
            );
          };
          handlePlatformConnected = function handlePlatformConnected(arg0, arg1) {
            closure_13(arg0);
            closure_15(arg1);
            _undefined(constants.ACCOUNT_CONNECTED);
            _undefined2(null);
            if (null != arg1) {
              const userApplicationRoleConnections =
                ConnectionsRoleActionCreators.fetchUserApplicationRoleConnections();
              userApplicationRoleConnections
                .then((result) => {
                  closure_1_17(result);
                })
                .catch(() => {});
              const nextPromise = userApplicationRoleConnections.then((result) => {
                closure_1_17(result);
              });
            }
          };
          obj57.children = intl13.format(jHfRvZ, obj58);
          items10 = [, ,];
          items10[0] = tmp36(tmp17(tmp18[24]).Text, obj57);
          obj59 = { style: null, children: null };
          obj59.style = tmp.connectionsChecksGroups;
          obj60 = {
            eligibilityStatesGroups: null,
            onPlatformAttempt: null,
            onPlatformConnect: null,
            onPlatformConnected: null,
            onPlatformIdentityAuthorize: null,
            initialAttemptedPlatformType: null,
            initialAttemptedApplicationId: null,
          };
          obj60.eligibilityStatesGroups = arr;
          obj60.onPlatformAttempt = handlePlatformAttempt;
          obj60.onPlatformConnect = handlePlatformConnect;
          obj60.onPlatformConnected = handlePlatformConnected;
          obj60.onPlatformIdentityAuthorize = handlePlatformIdentityAuthorize;
          platformType = undefined;
          tmp57 = ConnectionsChecks;
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
          intl7 = tmp17(tmp18[25]).intl;
          obj62 = { privacyPolicyUrl: null, onAuthorizedApplicationsClick: null, onConnectionsClick: null };
          tmp60 = MarketingURLs;
          obj62.privacyPolicyUrl = MarketingURLs.PRIVACY;
          obj62.onAuthorizedApplicationsClick = handleManageAuthorizedApplications;
          obj62.onConnectionsClick = handleManageConnections;
          obj61.children = intl7.format(tmp17(tmp18[25]).t.gsgvxh, obj62);
          items10[2] = tmp36(tmp17(tmp18[24]).Text, obj61);
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
        tmp44 = tmp28(tmp18[35])(null != first1, "lastPlatformConnected is null");
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
          items11 = [,];
          items11[0] = tmp36(tmp38, obj65);
          obj67 = { variant: "text-md/normal", color: "text-default", children: null };
          intl6 = tmp17(tmp18[25]).intl;
          obj68 = { privacyPolicyUrl: null, onAuthorizedApplicationsClick: null, onConnectionsClick: null };
          tmp53 = MarketingURLs;
          obj68.privacyPolicyUrl = MarketingURLs.PRIVACY;
          obj68.onAuthorizedApplicationsClick = handleManageAuthorizedApplications;
          obj68.onConnectionsClick = handleManageConnections;
          obj67.children = intl6.format(tmp17(tmp18[25]).t.gsgvxh, obj68);
          items11[1] = tmp36(tmp17(tmp18[24]).Text, obj67);
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
          intl3 = tmp17(tmp18[25]).intl;
          obj71.children = intl3.string(tmp17(tmp18[25]).t.TOjkEg);
          items12 = [,];
          items12[0] = tmp36(tmp17(tmp18[24]).Text, obj71);
          obj72 = {
            account: null,
            userId: null,
            theme: null,
            locale: null,
            style: null,
            showMetadata: null,
            showInvisibleIcon: null,
          };
          obj72.account = found1;
          obj72.userId = stateFromStores2;
          obj72.theme = tmp29;
          obj72.locale = stateFromStores5;
          obj72.style = tmp.accountConnectedPreviewConnectedUserAccount;
          obj72.showMetadata = tmp12;
          obj72.showInvisibleIcon = tmp15;
          items12[1] = tmp36(tmp17(tmp18[57]).ConnectedUserAccount, obj72);
          obj70.children = items12;
          items13 = [,];
          items13[0] = tmp37(tmp38, obj70);
          obj73 = { style: null, children: null };
          obj73.style = tmp.accountConnectedPrivacy;
          obj74 = { variant: "eyebrow", color: "text-default", children: null };
          intl4 = tmp17(tmp18[25]).intl;
          obj74.children = intl4.string(tmp17(tmp18[25]).t.jndPhX);
          items14 = [,];
          items14[0] = tmp36(tmp17(tmp18[24]).Text, obj74);
          tmp49 = ConnectedUserAccountOptions;
          obj75 = { account: null, setShowPreviewInvisibleIcon: null, setShowPreviewMetadata: null };
          obj75.account = found1;
          obj75.setShowPreviewInvisibleIcon = tmp16;
          obj75.setShowPreviewMetadata = tmp13;
          items14[1] = tmp36(ConnectedUserAccountOptions, obj75);
          obj73.children = items14;
          items13[1] = tmp37(tmp38, obj73);
          obj69.children = items13;
          tmp37Result2 = tmp37(tmp47, obj69);
        }
        items15 = [,];
        items15[0] = tmp37Result2;
        tmp37Result3 = null;
        if (null != found2) {
          obj76 = { style: null, children: null };
          obj76.style = tmp.accountConnectedPreview;
          obj77 = { variant: "eyebrow", color: "text-default", children: null };
          intl5 = tmp17(tmp18[25]).intl;
          obj77.children = intl5.string(tmp17(tmp18[25]).t.TOjkEg);
          items16 = [,];
          items16[0] = tmp36(tmp17(tmp18[24]).Text, obj77);
          obj78 = { applicationRoleConnection: null, theme: null, locale: null, style: null };
          obj78.applicationRoleConnection = found2;
          obj78.theme = tmp29;
          obj78.locale = stateFromStores5;
          obj78.style = tmp.accountConnectedPreviewConnectedUserAccount;
          items16[1] = tmp36(tmp17(tmp18[57]).ConnectedApplicationUserRoleAccount, obj78);
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
          items17 = [,];
          items17[0] = tmp36(tmp28(tmp18[58]), obj82);
          obj83 = {
            variant: "text-lg/semibold",
            color: "mobile-text-heading-primary",
            lineClamp: 1,
            style: null,
            children: null,
          };
          obj83.style = tmp.roleGrantedName;
          obj83.children = role.name;
          items17[1] = tmp36(tmp17(tmp18[24]).Text, obj83);
          obj81.children = items17;
          items18 = [,];
          items18[0] = tmp37(tmp38, obj81);
          obj84 = { style: null, children: null };
          obj84.style = tmp.channelsGranted;
          obj84.children = found.map((channel) => closure_1_29(ChannelName, { channel }, channel.id));
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
        intl11 = tmp17(tmp18[25]).intl;
        obj85.text = intl11.string(tmp17(tmp18[25]).t["8SuVoE"]);
        tmp36Result2 = tmp36(tmp17(tmp18[59]).Button, obj85);
      } else if (tmp2.ACCOUNT_CONNECTED === tmp4) {
        obj86 = { variant: "primary", onPress: null, text: null, grow: true };
        obj86.onPress = function onPress() {
          return _undefined(constants.CHECKS_REQUIRED);
        };
        intl10 = tmp17(tmp18[25]).intl;
        obj86.text = intl10.string(tmp17(tmp18[25]).t.i4jeWR);
        tmp36Result2 = tmp36(tmp17(tmp18[59]).Button, obj86);
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
        intl8 = tmp17(tmp18[25]).intl;
        obj87.text = intl8.string(tmp17(tmp18[25]).t.cpT0Cq);
        items19 = [,];
        items19[0] = tmp36(tmp17(tmp18[59]).Button, obj87);
        tmp36Result3 = null;
        if (flag) {
          obj88 = { style: null, children: null };
          obj88.style = tmp.manageConnectionsButton;
          obj89 = { variant: "secondary", onPress: null, text: null, grow: true };
          obj89.onPress = handleManageConnections;
          intl9 = tmp17(tmp18[25]).intl;
          obj89.text = intl9.string(tmp17(tmp18[25]).t.VXV55P);
          obj88.children = tmp36(tmp17(tmp18[59]).Button, obj89);
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
      return tmp36(guildId(closure_2[56]).BottomSheet, obj91);
    }
    return;
  }
}

export default GuildRoleConnectionsConnectAccountsActionSheet;
