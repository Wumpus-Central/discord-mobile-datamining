// discord_app/modules/connections/native/GuildRoleConnectionsConnectAccountsActionSheet.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import DispatcherDefault from "../../../Dispatcher.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
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
import _modDef11253 from "../../../../_runtime/metro/11253__.js";
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

const native = tmp5(1178);
require = fn;
function PlatformIcon(platformType) {
  const tmp = closure_32();
  let obj = PlatformsDefault;
  value = obj.get(platformType.platformType);
  const tmp3 = useThemeDefault();
  const obj2 = AvatarUtils;
  const icon = value.icon;
  const source = obj2.makeSource(shared.isThemeLight(tmp3) ? icon.lightPNG : icon.darkPNG);
  obj = { source, style: tmp.platformIcon, disableColor: true };
  return __initData7(native.Icon, obj);
}
function ChannelName(channel) {
  channel = channel.channel;
  const tmp = closure_32();
  let obj = utils_ChannelUtils;
  const channelIcon = obj.getChannelIcon(channel);
  obj = { style: null, children: null };
  const items = [tmp.channelName, channel.style];
  obj.style = items;
  let tmp8 = null;
  if (null != channelIcon) {
    obj = { source: channelIcon, style: tmp.channelNameIcon };
    tmp8 = __initData7(tmp2(1178).Icon, obj);
  }
  const items1 = [tmp8];
  const tmp5 = useChannelNameDefault(channel);
  const tmp6 = __initData8;
  const tmp7 = React6;
  items1[1] = __initData7(Text_Text.Text, {
    variant: "heading-lg/semibold",
    color: "text-default",
    style: tmp.channelNameText,
    lineClamp: 1,
    children: useChannelNameDefault(channel),
  });
  obj.children = items1;
  return tmp6(tmp7, obj);
}
function ConnectionsCheck(result) {
  ({ connectionType, connectionMetadataField, operator, value, description } = result);
  if (connectionType === closure_1_20) {
    return null;
  } else {
    if (null != description) {
      if (constants2.LESS_THAN === operator) {
        const intl = util.intl;
        let obj = { description, count: null };
        const _Math = Math;
        const _Number = Number;
        obj.count = Math.max(0, Number(value) - 1);
        let formatResult = intl.format(util.t["2p7dA3"], obj);
      } else {
        formatResult = description;
        if (tmp17.GREATER_THAN === operator) {
          const intl2 = util.intl;
          obj = { description, count: null };
          const _Math2 = Math;
          const _Number2 = Number;
          obj.count = Math.max(0, Number(value) + 1);
          formatResult = intl2.format(util.t["2p7dA3"], obj);
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
          v0BlpbA = tmp9(1114).t.dcSDhW;
        }
        tmp9 = require;
      } else if (tmp27.NOT_EQUAL === operator) {
        v0BlpbA = util.t.otcpTN;
      } else if (tmp27.LESS_THAN === operator) {
        v0BlpbA = util.t.Ef35xs;
      } else if (tmp27.GREATER_THAN === operator) {
        v0BlpbA = util.t["8W9OXU"];
      } else {
        return null;
      }
      obj = ConnectionsUtils;
      const obj1 = { connectionType, connectionMetadataField, operator, operatorText: v0BlpbA, value };
      formatResult = obj.getConnectionsCheckText(obj1);
    }
    let tmp22Result = null;
    if (null != formatResult) {
      let str = "text-feedback-critical";
      if (result.result) {
        str = "text-default";
      }
      const obj2 = { variant: "text-xs/normal", color: str, style: tmp.connectionsCheck, children: formatResult };
      tmp22Result = __initData7(Text_Text.Text, obj2);
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
  let obj = eligibilityState(onIdentityAuthorize[27]);
  const getOrFetchApplicationBatched = obj.useGetOrFetchApplicationBatched(eligibilityState.application_id);
  let tmp6 = onAttempted(onIdentityAuthorize[28])(getOrFetchApplicationBatched);
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
        let tmp5Result = tmp5(tmp3[18]);
        value = tmp5Result.get(identity_connected_account_type);
        flag = canStartAuthorization;
        if (tmp9) {
          noop = true;
          flag = true;
        }
        tmp9 = null != value && value.enabled;
      }
    }
  }
  application = eligibilityState.application;
  let obj2 = noop;
  const items = [application];
  const memo = noop.useMemo(() => {
    let bot;
    if (application != null) {
      bot = tmp.bot;
    }
    let tmp3 = null;
    if (null != bot) {
      tmp3 = new UserRecord(tmp.bot);
    }
    return tmp3;
  }, items);
  const result = eligibilityState.result;
  c9 = result;
  if (null != memo) {
    obj = { style: tmp.botTag, verified: null };
    tmp5Result = tmp5(tmp3[29]);
    obj.verified = memo.isVerifiedBot();
    const tmp10 = closure_29(tmp5Result, obj);
  }
  if (result) {
    obj = { source: tmp5(tmp3[30]), style: tmp.connectionsChecksGroupCheckmark };
    let tmp13Result = tmp13(tmp2(tmp3[21]).Icon, obj);
    let tmp15 = tmp13;
  } else if (flag) {
    const obj1 = { source: tmp5(tmp3[31]), style: tmp.connectionsChecksGroupCaret };
    tmp13Result = tmp13(tmp2(tmp3[21]).Icon, obj1);
    tmp15 = tmp13;
  } else {
    obj2 = { variant: "text-md/medium", color: "text-muted", children: null };
    const intl = tmp2(tmp3[25]).intl;
    obj2.children = intl.string(tmp2(tmp3[25]).t.cEts68);
    tmp13Result = tmp13(tmp2(tmp3[24]).Text, obj2);
    tmp15 = tmp13;
  }
  const items1 = [result, flag, canStartAuthorization, startAuthorization, onAttempted, onIdentityAuthorize, , , ,];
  ({ connection_type: arr2[6], application_id: arr2[7] } = eligibilityState);
  items1[8] = identity_connected_account_type;
  items1[9] = identity_auth_required_scopes;
  const callback = obj2.useCallback(() => {
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
          let obj = { analyticsLocations: ["Verified Roles Connect Accounts Modal"] };
          startAuthorization(obj);
        } else {
          let tmp13 = null != tmp2;
          if (tmp13) {
            tmp13 = null != identity_auth_required_scopes;
          }
          if (tmp13) {
            tmp13 = null != tmp9.application_id;
          }
          if (tmp13) {
            obj = {
              applicationId: tmp9.application_id,
              scopes: identity_auth_required_scopes,
              connectedAccountProvider: tmp2,
              wasAlreadyConnected: someResult,
            };
            onIdentityAuthorize(obj);
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
    const obj3 = { accessibilityRole: "button", style: null, disabled: null, onPress: null, children: null };
    items2[2] = prop1;
    obj3.style = items2;
    let tmp22 = result;
    if (!result) {
      tmp22 = !flag;
    }
    obj3.disabled = tmp22;
    obj3.onPress = callback;
    let tmp15Result = null;
    if (null != memo) {
      const obj4 = { style: tmp.appIcon, user: memo, size: tmp2(tmp3[21]).AvatarSizes.XSMALL, guildId: "Array" };
      tmp15Result = tmp15(tmp2(tmp3[21]).Avatar, obj4);
    }
    const items3 = [tmp15Result, ,];
    const obj5 = { style: tmp.connectionsChecksGroupTextContainer, children: null };
    const obj6 = { style: tmp.connectionsChecksGroupTextNameContainer, children: null };
    let name;
    if (application != null) {
      name = application.name;
    }
    const obj7 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: name };
    const items4 = [tmp15(tmp2(tmp3[24]).Text, obj7), tmp10];
    obj6.children = items4;
    const items5 = [closure_30(application, obj6)];
    tmp15Result = null;
    if (!flag) {
      tmp15Result = null;
      if (!result) {
        const obj8 = { variant: "text-xs/normal", color: "text-muted", style: tmp.connectionsCheck, children: null };
        const intl2 = tmp2(tmp3[25]).intl;
        obj8.children = intl2.string(tmp2(tmp3[25]).t["+z5dYe"]);
        tmp15Result = tmp15(tmp2(tmp3[24]).Text, obj8);
      }
    }
    items5[1] = tmp15Result;
    obj5.children = items5;
    items3[1] = closure_30(application, obj5);
    items3[2] = tmp13Result;
    obj3.children = items3;
    tmp18Result = tmp18(identity_auth_required_scopes, obj3);
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
  let first;
  closure_11 = undefined;
  let first1;
  closure_13 = undefined;
  let memo;
  let memo1;
  let roleColor;
  noop = closure_32();
  let obj = noop;
  [c6, c7] = _slicedToArray(noop.useState({}), 2);
  let tmp2 = _slicedToArray(noop.useState({}), 2);
  [c8, c9] = _slicedToArray(noop.useState(0), 2);
  if (initialAttemptedPlatformType == null) {
    initialAttemptedPlatformType = null;
  }
  let tmpResult = tmp(noop.useState(initialAttemptedPlatformType), 2);
  first = tmpResult[0];
  closure_11 = tmpResult[1];
  if (initialAttemptedApplicationId == null) {
    initialAttemptedApplicationId = null;
  }
  tmpResult = tmp(obj.useState(initialAttemptedApplicationId), 2);
  first1 = tmpResult[0];
  closure_13 = tmpResult[1];
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
  roleColor = eligibilityStatesGroups(4262).useToken(nativeDefault.unsafe_rawColors.GREEN_330);
  obj = { children: null };
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
  obj.children = sorted.map((item) => {
    if (item.startsWith("" + closure_1_20 + ":")) {
      if (null != arr[0]) {
        let obj = {
          eligibilityState: arr[0],
          onAttempted(onIdentityAuthorize, arg1) {
            closure_1_11(onIdentityAuthorize);
            closure_1_13(arg1);
            if (null != onIdentityAuthorize) {
              value();
            }
          },
          onIdentityAuthorize,
        };
        return closure_1_29(IdentityConnectionsCheckGroup, obj, item);
      }
    }
    const found = arr.find((operator) => null == operator.operator);
    const found1 = arr.filter((operator) => null != operator.operator);
    const tmp3 = (null == found || found.result) && found1.every((item) => item.result);
    const found2 = arr.find((application) => null != application.application);
    obj = PlatformsDefault;
    value = obj.get(item);
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
    const officialApplicationIds = eligibilityStatesGroups(5407).officialApplicationIds;
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
      obj = { source: tmp5(11564), style: closure_5.connectionsChecksGroupCheckmark };
      let tmp22Result = tmp22(tmp15(1178).Icon, obj);
      let tmp24 = tmp22;
    } else if (tmp20) {
      const obj1 = { variant: "text-sm/semibold", color: "text-brand", children: null };
      const intl2 = tmp15(1114).intl;
      obj1.children = intl2.string(tmp15(1114).t["5911Lb"]);
      tmp22Result = tmp22(tmp15(4556).Text, obj1);
      tmp24 = tmp22;
    } else if (tmp8) {
      const obj2 = { source: tmp5(11565), style: closure_5.connectionsChecksGroupCaret };
      tmp22Result = tmp22(tmp15(1178).Icon, obj2);
      tmp24 = tmp22;
    } else {
      const obj3 = { variant: "text-md/medium", color: "text-muted", children: null };
      const intl = tmp15(1114).intl;
      obj3.children = intl.string(tmp15(1114).t.cEts68);
      tmp22Result = tmp22(tmp15(4556).Text, obj3);
      tmp24 = tmp22;
    }
    let type1;
    if (value != null) {
      type1 = value.type;
    }
    let tmp28;
    if (type1 === constants.STEAM) {
      const intl3 = tmp15(1114).intl;
      const stringResult = intl3.string(tmp15(1114).t.NcZh6K);
      eligibilityStatesGroups = stringResult;
      tmp28 = stringResult;
    }
    if (hasItem) {
      const obj4 = { style: closure_5.botTag, guildId, roleColor, size: 16 };
      let tmp24Result = tmp24(tmp5(11566), obj4);
    } else if (null != tmp11) {
      const obj5 = { style: closure_5.botTag, verified: tmp11.isVerifiedBot() };
      tmp24Result = tmp24(tmp5(9438), obj5);
      const tmp5Result = tmp5(9438);
    }
    const items = [closure_5.connectionsChecksGroup, ,];
    let prop = null;
    if (tmp3) {
      prop = tmp38.connectionsChecksGroupPassed;
    }
    items[1] = prop;
    let prop1 = null;
    if (!(null == value || value.enabled)) {
      prop1 = tmp38.connectionsChecksGroupPlatformDisabled;
    }
    const obj6 = { accessibilityRole: "button", style: items, disabled: null, onPress: null, children: null };
    items[2] = prop1;
    let tmp41 = tmp3;
    if (!tmp3) {
      tmp41 = !tmp8;
    }
    obj6.disabled = tmp41;
    obj6.onPress = function onPress() {
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
    tmp24Result = null;
    if (!tmp3) {
      tmp24Result = null;
      if (tmp20) {
        const obj7 = { style: tmp38.connectionsChecksGroupRequirementsNotMet, children: null };
        const obj8 = { variant: "text-xs/normal", color: "text-overlay-light", children: null };
        const intl4 = tmp15(1114).intl;
        obj8.children = intl4.string(tmp15(1114).t.UB3hKo);
        obj7.children = tmp24(tmp15(4556).Text, obj8);
        tmp24Result = tmp24(c8, obj7);
      }
    }
    const items1 = [tmp24Result, , , ,];
    let tmp24Result1 = null;
    if (null != value) {
      const obj9 = { platformType: value.type };
      tmp24Result1 = tmp24(PlatformIcon, obj9);
    }
    items1[1] = tmp24Result1;
    let tmp24Result2 = null;
    if (null != tmp11) {
      const obj10 = { style: tmp38.appIcon, user: tmp11, size: tmp15(1178).AvatarSizes.XSMALL, guildId: "Array" };
      tmp24Result2 = tmp24(tmp15(1178).Avatar, obj10);
    }
    items1[2] = tmp24Result2;
    const obj11 = { style: closure_5.connectionsChecksGroupTextContainer, children: null };
    const obj12 = { style: closure_5.connectionsChecksGroupTextNameContainer, children: null };
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
      tmp24(eligibilityStatesGroups(4556).Text, {
        variant: "text-md/medium",
        color: "mobile-text-heading-primary",
        children: name,
      }),
      tmp24Result,
    ];
    let tmp24Result3 = null;
    if (null != tmp28) {
      const obj13 = {
        onPress() {
          _modDef38(null != stringResult, "tooltip is null");
          const obj = { key: "CONNECTIONS_STEAM_TOOLTIP", icon: _modDef11253, content: stringResult };
          obj.open(obj);
        },
        children: null,
      };
      const obj14 = {
        source: tmp5(11253),
        size: tmp15(1178).Icon.Sizes.SMALL_20,
        style: tmp38.connectionsChecksGroupTextNameInfoIcon,
      };
      obj13.children = tmp24(tmp15(1178).Icon, obj14);
      tmp24Result3 = tmp24(tmp37, obj13);
    }
    items2[2] = tmp24Result3;
    obj12.children = items2;
    const items3 = [
      closure_1_30(c8, obj12),
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
    obj11.children = items3;
    items1[3] = closure_1_30(c8, obj11);
    items1[4] = tmp22Result;
    obj6.children = items1;
    return closure_1_30(c7, obj6, item);
  });
  return closure_29(closure_31, obj);
}
function ConnectedUserAccountOptions(account) {
  account = account.account;
  ({ setShowPreviewInvisibleIcon: importDefault, setShowPreviewMetadata: dependencyMap } = account);
  c3 = undefined;
  _slicedToArray = undefined;
  value = undefined;
  const tmp = closure_32();
  [tmp3, c3] = _slicedToArray(value.useState(account.friendSync), 2);
  const tmp4 = _slicedToArray(value.useState(account.showActivity), 2);
  _slicedToArray = tmp4[1];
  const tmp5 = _slicedToArray(value.useState(1 === account.metadataVisibility), 2);
  value = tmp5[0];
  closure_6 = tmp5[1];
  const tmp7 = _slicedToArray(value.useState(1 === account.visibility), 2);
  const first1 = tmp7[0];
  closure_8 = tmp7[1];
  useMountEffectDefault(() => {
    importDefault(!first1);
    dependencyMap(first);
  });
  let obj = PlatformsDefault;
  value = obj.get(account.type);
  let tmp12;
  if (set.has(account.type)) {
    obj = { label: null, value: null, onValueChange: null };
    const intl = account(1114).intl;
    obj.label = intl.string(account(1114).t["+KCMSi"]);
    obj.value = tmp3;
    obj.onValueChange = function onValueChange(enabled) {
      _undefined(enabled);
      ConnectedAccountsActionCreatorsDefault.setFriendSync(account.type, account.id, enabled);
    };
    tmp12 = closure_29(account(8593).FormSwitchRow, obj);
  }
  let tmp15;
  if (set2.has(account.type)) {
    obj = { label: null, value: null, onValueChange: null };
    const intl2 = account(1114).intl;
    const obj1 = { platform: value.name };
    obj.label = intl2.formatToPlainString(account(1114).t["6u6J0q"], obj1);
    obj.value = tmp4[0];
    obj.onValueChange = function onValueChange(show_activity) {
      closure_4(show_activity);
      ConnectedAccountsActionCreatorsDefault.setShowActivity(account.type, account.id, show_activity);
    };
    tmp15 = closure_29(account(8593).FormSwitchRow, obj);
  }
  let tmp18;
  if (true === value.hasMetadata) {
    const obj2 = { label: null, value: null, disabled: null, onValueChange: null };
    const intl3 = account(1114).intl;
    obj2.label = intl3.string(account(1114).t.FYKGsL);
    obj2.value = value;
    obj2.disabled = !first1;
    obj2.onValueChange = function onValueChange(arg0) {
      dependencyMap(arg0);
      closure_6(arg0);
      let num = 0;
      ({ type, id } = account);
      if (arg0) {
        num = 1;
      }
      const result = ConnectedAccountsActionCreatorsDefault.setMetadataVisibility(type, id, num);
    };
    tmp18 = closure_29(account(8593).FormSwitchRow, obj2);
  }
  const obj3 = { style: tmp.accountConnectedPrivacyOptionsContainer, children: null };
  const obj4 = { label: null, value: null, onValueChange: null };
  const intl4 = account(1114).intl;
  obj4.label = intl4.string(account(1114).t.f7yOAX);
  obj4.value = first1;
  obj4.onValueChange = function onValueChange(arg0) {
    closure_1_1(!arg0);
    closure_8(arg0);
    let num = 0;
    ({ type, id } = account);
    if (arg0) {
      num = 1;
    }
    ConnectedAccountsActionCreatorsDefault.setVisibility(type, id, num);
  };
  const items = [closure_29(account(8593).FormSwitchRow, obj4), tmp18, tmp15, tmp12];
  obj3.children = items;
  return closure_30(closure_8, obj3);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, Pressable: closure_7, View: closure_8 } = get_ActivityIndicator);
let Constants = fn(5408);
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
fn(4560);
let createStyles = {
  container: { padding: 12 },
  connectionsChecksGroups: { marginTop: 16, flexDirection: "column" },
  connectionsChecksGroup: null,
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
createStyles = {
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
createStyles.connectionsChecksGroup = createStyles;
createStyles.connectionsChecksGroupPassed = {
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
let obj1 = {
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
createStyles.connectionsChecksGroupPlatformDisabled = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
const rect = {
  paddingVertical: 4,
  paddingHorizontal: 12,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL,
  position: "absolute",
  top: -8,
  right: 20,
};
createStyles.connectionsChecksGroupRequirementsNotMet = rect;
createStyles.connectionsChecksGroupTextContainer = { flex: 1 };
createStyles.connectionsChecksGroupTextNameContainer = { flexDirection: "row", alignItems: "center" };
let obj2 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.connectionsChecksGroupTextNameInfoIcon = {
  marginLeft: 4,
  tintColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING,
};
let size = { tintColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE, width: 24, height: 24 };
createStyles.connectionsChecksGroupCheckmark = size;
const size1 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: 24, height: 24 };
createStyles.connectionsChecksGroupCaret = size1;
createStyles.connectionsCheck = { marginTop: 4 };
createStyles.platformIcon = { width: 24, height: 24, marginRight: 12 };
createStyles.channelName = { flexDirection: "row", alignItems: "center", marginBottom: 4 };
const size2 = { tintColor: nativeDefault.colors.TEXT_MUTED, marginRight: 8, width: 24, height: 24 };
createStyles.channelNameIcon = size2;
createStyles.channelNameText = { overflow: "hidden" };
createStyles.header = { flexDirection: "row", width: "100%", alignItems: "center", marginBottom: 8 };
createStyles.content = { width: "100%" };
createStyles.footerText = { marginBottom: 16 };
createStyles.accountConnectedContainer = { flexDirection: "column", alignItems: "flex-start", marginVertical: 24 };
createStyles.accountConnectedPreview = { width: "100%" };
let obj3 = { marginLeft: 4, tintColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
createStyles.accountConnectedPreviewConnectedUserAccount = {
  marginTop: 8,
  borderRadius: nativeDefault.radii.xs,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
createStyles.accountConnectedPrivacy = { marginTop: 16, width: "100%" };
let obj4 = {
  marginTop: 8,
  borderRadius: nativeDefault.radii.xs,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
createStyles.accountConnectedPrivacyOptionsContainer = {
  marginTop: 8,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.xs,
  padding: 8,
  flexDirection: "column",
};
let obj5 = {
  marginTop: 8,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.xs,
  padding: 8,
  flexDirection: "column",
};
createStyles.roleGranted = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  paddingVertical: 12,
  paddingHorizontal: 8,
  borderTopStartRadius: 4,
  borderTopEndRadius: 4,
  marginTop: 16,
};
createStyles.roleGrantedName = { overflow: "hidden", marginRight: 24 };
createStyles.verifiedIcon = { marginRight: 8 };
let obj6 = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  paddingVertical: 12,
  paddingHorizontal: 8,
  borderTopStartRadius: 4,
  borderTopEndRadius: 4,
  marginTop: 16,
};
createStyles.channelsGranted = {
  flexDirection: "column",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  padding: 16,
  borderBottomStartRadius: 4,
  borderBottomEndRadius: 4,
  marginBottom: 24,
};
createStyles.manageConnectionsButton = { marginTop: 8 };
createStyles.loading = { marginTop: 24, marginBottom: 32, alignSelf: "center" };
createStyles.appIcon = { marginRight: 8 };
createStyles.botTag = { marginLeft: 4 };
const __initData10 = createStyles.createStyles(createStyles);
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
    closure_20 = async function _handleAssignRole(arg0, value) {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              LocaleStore(true);
              let obj1 = v1(initialAttemptedPlatformType[43]);
              v1 = 1;
              c0 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.assignGuildRoleConnection(guildId, id.id);
              return obj1;
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
        const obj = { role_id: role.id };
        const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
        obj.track(constants5.PASSPORT_CHALLENGE_VIEWED, obj);
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
          let obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        }
        obj = { role_id: role.id };
        const obj2 = AnalyticsUtilsDefault;
        const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
        obj2.track(constants5.PASSPORT_CHALLENGE_FINISHED, obj);
      }
    }, items8);
    tmp36 = jsx;
    tmp37 = jsxs;
    tmp38 = closure_8;
    obj = { style: tmp.container, children: null };
    if (closure_39.CHECKS_REQUIRED === tmp4) {
      obj1 = { style: null, children: null };
      obj1.style = tmp.header;
      obj2 = { variant: "heading-lg/extrabold", children: null };
      intl2 = tmp17(tmp18[25]).intl;
      obj2.children = intl2.string(tmp17(tmp18[25]).t.zOZh3R);
      obj1.children = tmp36(tmp17(tmp18[24]).Text, obj2);
      tmp36Result = tmp36(tmp38, obj1);
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
      obj3 = { variant: "heading-lg/extrabold", style: null, children: null };
      obj3.style = tmp.header;
      intl = tmp17(tmp18[25]).intl;
      obj4 = { platformName: null };
      obj4.platformName = name;
      obj3.children = intl.format(tmp17(tmp18[25]).t.yQvgBO, obj4);
      tmp36Result = tmp36(tmp17(tmp18[24]).Text, obj3);
    } else {
      tmp36Result = null;
      if (tmp2.ROLE_GRANTED === tmp4) {
        obj5 = { variant: "heading-lg/extrabold", style: null, children: null };
        obj5.style = tmp.header;
        intl12 = tmp17(tmp18[25]).intl;
        obj5.children = intl12.string(tmp17(tmp18[25]).t.najNdz);
        tmp36Result = tmp36(tmp17(tmp18[24]).Text, obj5);
      }
    }
    handleManageConnections = function handleManageConnections() {
      if (onCloseModal != null) {
        tmp();
      }
      let obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      obj = { screen: constants4.CONNECTIONS };
      openUserSettings.openUserSettings(obj);
    };
    handleManageAuthorizedApplications = function handleManageAuthorizedApplications() {
      if (onCloseModal != null) {
        tmp();
      }
      let obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      obj = { screen: constants4.AUTHORIZED_APPS };
      openUserSettings.openUserSettings(obj);
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
          obj6 = { style: null, children: null };
          obj6.style = tmp.content;
          intl13 = tmp17(tmp18[25]).intl;
          t = tmp17(tmp18[25]).t;
          if (tmp56) {
            jHfRvZ = t.jHfRvZ;
          } else {
            jHfRvZ = tmp55 ? t["mOQ8k+"] : t.U0olLg;
          }
          obj7 = { variant: "text-md/medium", color: "text-default", children: null };
          obj8 = { roleName: null };
          obj8.roleName = role.name;
          handlePlatformAttempt = function handlePlatformAttempt() {
            const obj = { role_id: role.id };
            const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
            obj.track(constants5.PASSPORT_CHALLENGE_STARTED, obj);
          };
          handlePlatformConnect = function handlePlatformConnect(platformType, role_connections_verification_url) {
            closure_1 = role_connections_verification_url;
            let obj = {
              platformType,
              location: "Verified Roles Connect Accounts Modal",
              onClose() {
                let id;
                if (closure_1 != null) {
                  id = tmp2.id;
                }
                if (id == null) {
                  id = null;
                }
                let prop;
                if (closure_1 != null) {
                  prop = tmp2.role_connections_verification_url;
                }
                closure_1(4527);
                let obj = { default: closure_1_40 };
                const resolved = Promise.resolve(obj);
                obj = {
                  role,
                  guildId,
                  initialAttemptedPlatformType: tmp,
                  initialAttemptedApplicationId: null,
                  overrideUrl: null,
                  onCloseModal: null,
                };
                let tmp7 = null;
                const guildRoleConnectionsConnectAccountsActionSheetKey = platformType(
                  11569,
                ).makeGuildRoleConnectionsConnectAccountsActionSheetKey(role.id);
                if (null != platformType) {
                  tmp7 = id;
                }
                obj.initialAttemptedApplicationId = tmp7;
                obj.overrideUrl = { overrideUrl: prop }.overrideUrl;
                obj.onCloseModal = onCloseModal;
                obj.openLazy(resolved, guildRoleConnectionsConnectAccountsActionSheetKey, obj);
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
            let obj = role(initialAttemptedPlatformType[46]);
            obj.hideActionSheet();
            const combined = "OAuth2AuthorizeModal-" + applicationId;
            function handleModalClose(key) {
              if (key.key === combined) {
                DispatcherDefault.unsubscribe("MODAL_POP", handleModalClose);
                let tmp = null;
                if (!wasAlreadyConnected) {
                  tmp = closure_3_20;
                }
                wasAlreadyConnected(combined[46]);
                let obj = { default: closure_1_40 };
                const resolved = Promise.resolve(obj);
                const tmp2 = applicationId;
                obj = {
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
                  tmp13 = tmp2;
                }
                obj.initialAttemptedApplicationId = tmp13;
                obj.overrideUrl = {}.overrideUrl;
                obj.onCloseModal = onCloseModal;
                obj.openLazy(resolved, guildRoleConnectionsConnectAccountsActionSheetKey, obj);
                const obj3 = applicationId(combined[48]);
              }
            }
            const subscription = role(initialAttemptedPlatformType[50]).subscribe("MODAL_POP", handleModalClose);
            const obj2 = role(initialAttemptedPlatformType[50]);
            obj = {
              clientId: applicationId,
              scopes,
              integrationType: null,
              connectedAccountProvider: null,
              callback: null,
              dismissOAuthModal: null,
            };
            let obj3 = role(initialAttemptedPlatformType[51]);
            obj.integrationType = guildId(initialAttemptedPlatformType[54]).ApplicationIntegrationType.USER_INSTALL;
            obj.connectedAccountProvider = connectedAccountProvider;
            obj.callback = function callback() {};
            obj.dismissOAuthModal = function dismissOAuthModal() {
              return ModalActionCreatorsDefault.popWithKey(combined);
            };
            obj3.pushLazy(
              guildId(initialAttemptedPlatformType[53])(
                initialAttemptedPlatformType[52],
                initialAttemptedPlatformType.paths,
              ),
              obj,
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
          obj7.children = intl13.format(jHfRvZ, obj8);
          items10 = [, ,];
          items10[0] = tmp36(tmp17(tmp18[24]).Text, obj7);
          obj9 = { style: null, children: null };
          obj9.style = tmp.connectionsChecksGroups;
          obj10 = {
            eligibilityStatesGroups: null,
            onPlatformAttempt: null,
            onPlatformConnect: null,
            onPlatformConnected: null,
            onPlatformIdentityAuthorize: null,
            initialAttemptedPlatformType: null,
            initialAttemptedApplicationId: null,
          };
          obj10.eligibilityStatesGroups = arr;
          obj10.onPlatformAttempt = handlePlatformAttempt;
          obj10.onPlatformConnect = handlePlatformConnect;
          obj10.onPlatformConnected = handlePlatformConnected;
          obj10.onPlatformIdentityAuthorize = handlePlatformIdentityAuthorize;
          platformType = undefined;
          tmp57 = ConnectionsChecks;
          if (tmp26 != null) {
            platformType = tmp26.platformType;
          }
          if (platformType == null) {
            platformType = null;
          }
          obj10.initialAttemptedPlatformType = platformType;
          applicationId = undefined;
          if (tmp26 != null) {
            applicationId = tmp26.applicationId;
          }
          if (applicationId == null) {
            applicationId = null;
          }
          obj10.initialAttemptedApplicationId = applicationId;
          obj9.children = tmp36(tmp57, obj10);
          items10[1] = tmp36(tmp38, obj9);
          obj11 = { variant: "text-xs/normal", style: null, color: "text-default", children: null };
          obj11.style = tmp.footerText;
          intl7 = tmp17(tmp18[25]).intl;
          obj12 = { privacyPolicyUrl: null, onAuthorizedApplicationsClick: null, onConnectionsClick: null };
          tmp60 = MarketingURLs;
          obj12.privacyPolicyUrl = MarketingURLs.PRIVACY;
          obj12.onAuthorizedApplicationsClick = handleManageAuthorizedApplications;
          obj12.onConnectionsClick = handleManageConnections;
          obj11.children = intl7.format(tmp17(tmp18[25]).t.gsgvxh, obj12);
          items10[2] = tmp36(tmp17(tmp18[24]).Text, obj11);
          obj6.children = items10;
          tmp37Result = tmp37(tmp38, obj6);
        }
        tmp63 = tmp37Result;
      }
      tmp62 = closure_6;
      obj13 = { size: "large", style: null };
      obj13.style = tmp.loading;
      tmp37Result = tmp36(closure_6, obj13);
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
        obj14 = { style: null, children: null };
        obj14.style = tmp.content;
        obj15 = { style: null, children: null };
        obj15.style = tmp.accountConnectedContainer;
        if (null == found1) {
          if (null == found2) {
            tmp52 = closure_6;
            obj16 = { size: "large", style: null };
            obj16.style = tmp.loading;
            tmp36Result1 = tmp36(closure_6, obj16);
          }
          obj15.children = tmp36Result1;
          items11 = [,];
          items11[0] = tmp36(tmp38, obj15);
          obj17 = { variant: "text-md/normal", color: "text-default", children: null };
          intl6 = tmp17(tmp18[25]).intl;
          obj18 = { privacyPolicyUrl: null, onAuthorizedApplicationsClick: null, onConnectionsClick: null };
          tmp53 = MarketingURLs;
          obj18.privacyPolicyUrl = MarketingURLs.PRIVACY;
          obj18.onAuthorizedApplicationsClick = handleManageAuthorizedApplications;
          obj18.onConnectionsClick = handleManageConnections;
          obj17.children = intl6.format(tmp17(tmp18[25]).t.gsgvxh, obj18);
          items11[1] = tmp36(tmp17(tmp18[24]).Text, obj17);
          obj14.children = items11;
          tmp37Result1 = tmp37(tmp38, obj14);
        }
        tmp47 = Fragment;
        tmp37Result2 = null;
        if (null != found1) {
          obj19 = { children: null };
          obj20 = { style: null, children: null };
          obj20.style = tmp.accountConnectedPreview;
          obj21 = { variant: "eyebrow", color: "text-default", children: null };
          intl3 = tmp17(tmp18[25]).intl;
          obj21.children = intl3.string(tmp17(tmp18[25]).t.TOjkEg);
          items12 = [,];
          items12[0] = tmp36(tmp17(tmp18[24]).Text, obj21);
          obj22 = {
            account: null,
            userId: null,
            theme: null,
            locale: null,
            style: null,
            showMetadata: null,
            showInvisibleIcon: null,
          };
          obj22.account = found1;
          obj22.userId = stateFromStores2;
          obj22.theme = tmp29;
          obj22.locale = stateFromStores5;
          obj22.style = tmp.accountConnectedPreviewConnectedUserAccount;
          obj22.showMetadata = tmp12;
          obj22.showInvisibleIcon = tmp15;
          items12[1] = tmp36(tmp17(tmp18[57]).ConnectedUserAccount, obj22);
          obj20.children = items12;
          items13 = [,];
          items13[0] = tmp37(tmp38, obj20);
          obj23 = { style: null, children: null };
          obj23.style = tmp.accountConnectedPrivacy;
          obj24 = { variant: "eyebrow", color: "text-default", children: null };
          intl4 = tmp17(tmp18[25]).intl;
          obj24.children = intl4.string(tmp17(tmp18[25]).t.jndPhX);
          items14 = [,];
          items14[0] = tmp36(tmp17(tmp18[24]).Text, obj24);
          tmp49 = ConnectedUserAccountOptions;
          obj25 = { account: null, setShowPreviewInvisibleIcon: null, setShowPreviewMetadata: null };
          obj25.account = found1;
          obj25.setShowPreviewInvisibleIcon = tmp16;
          obj25.setShowPreviewMetadata = tmp13;
          items14[1] = tmp36(ConnectedUserAccountOptions, obj25);
          obj23.children = items14;
          items13[1] = tmp37(tmp38, obj23);
          obj19.children = items13;
          tmp37Result2 = tmp37(tmp47, obj19);
        }
        items15 = [,];
        items15[0] = tmp37Result2;
        tmp37Result3 = null;
        if (null != found2) {
          obj26 = { style: null, children: null };
          obj26.style = tmp.accountConnectedPreview;
          obj27 = { variant: "eyebrow", color: "text-default", children: null };
          intl5 = tmp17(tmp18[25]).intl;
          obj27.children = intl5.string(tmp17(tmp18[25]).t.TOjkEg);
          items16 = [,];
          items16[0] = tmp36(tmp17(tmp18[24]).Text, obj27);
          obj28 = { applicationRoleConnection: null, theme: null, locale: null, style: null };
          obj28.applicationRoleConnection = found2;
          obj28.theme = tmp29;
          obj28.locale = stateFromStores5;
          obj28.style = tmp.accountConnectedPreviewConnectedUserAccount;
          items16[1] = tmp36(tmp17(tmp18[57]).ConnectedApplicationUserRoleAccount, obj28);
          obj26.children = items16;
          tmp37Result3 = tmp37(tmp38, obj26);
        }
        obj29 = { children: null };
        items15[1] = tmp37Result3;
        obj29.children = items15;
        tmp36Result1 = tmp37(tmp47, obj29);
      } else {
        tmp37Result1 = null;
        if (tmp2.ROLE_GRANTED === tmp4) {
          obj30 = { style: null, children: null };
          obj30.style = tmp.content;
          obj31 = { style: null, children: null };
          obj31.style = tmp.roleGranted;
          obj32 = { guildId: null, style: null, role: null, size: 24 };
          obj32.guildId = guildId;
          obj32.style = tmp.verifiedIcon;
          obj32.role = role;
          items17 = [,];
          items17[0] = tmp36(tmp28(tmp18[58]), obj32);
          obj33 = {
            variant: "text-lg/semibold",
            color: "mobile-text-heading-primary",
            lineClamp: 1,
            style: null,
            children: null,
          };
          obj33.style = tmp.roleGrantedName;
          obj33.children = role.name;
          items17[1] = tmp36(tmp17(tmp18[24]).Text, obj33);
          obj31.children = items17;
          items18 = [,];
          items18[0] = tmp37(tmp38, obj31);
          obj34 = { style: null, children: null };
          obj34.style = tmp.channelsGranted;
          obj34.children = found.map((channel) => closure_1_29(ChannelName, { channel }, channel.id));
          items18[1] = tmp36(tmp38, obj34);
          obj30.children = items18;
          tmp37Result1 = tmp37(tmp38, obj30);
        }
      }
      items9[1] = tmp37Result1;
      if (tmp2.CHECKS_REQUIRED === tmp4) {
        obj35 = { variant: "primary", onPress: null, disabled: null, text: null, grow: true };
        obj35.onPress = function onPress() {
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
        obj35.disabled = tmp8;
        intl11 = tmp17(tmp18[25]).intl;
        obj35.text = intl11.string(tmp17(tmp18[25]).t["8SuVoE"]);
        tmp36Result2 = tmp36(tmp17(tmp18[59]).Button, obj35);
      } else if (tmp2.ACCOUNT_CONNECTED === tmp4) {
        obj36 = { variant: "primary", onPress: null, text: null, grow: true };
        obj36.onPress = function onPress() {
          return _undefined(constants.CHECKS_REQUIRED);
        };
        intl10 = tmp17(tmp18[25]).intl;
        obj36.text = intl10.string(tmp17(tmp18[25]).t.i4jeWR);
        tmp36Result2 = tmp36(tmp17(tmp18[59]).Button, obj36);
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
        obj37 = { variant: "primary", onPress: null, text: null, grow: true };
        obj37.onPress = function onPress() {
          if (onCloseModal != null) {
            tmp();
          }
          ActionSheetActionCreatorsDefault.hideActionSheet();
        };
        intl8 = tmp17(tmp18[25]).intl;
        obj37.text = intl8.string(tmp17(tmp18[25]).t.cpT0Cq);
        items19 = [,];
        items19[0] = tmp36(tmp17(tmp18[59]).Button, obj37);
        tmp36Result3 = null;
        if (flag) {
          obj38 = { style: null, children: null };
          obj38.style = tmp.manageConnectionsButton;
          obj39 = { variant: "secondary", onPress: null, text: null, grow: true };
          obj39.onPress = handleManageConnections;
          intl9 = tmp17(tmp18[25]).intl;
          obj39.text = intl9.string(tmp17(tmp18[25]).t.VXV55P);
          obj38.children = tmp36(tmp17(tmp18[59]).Button, obj39);
          tmp36Result3 = tmp36(tmp38, obj38);
        }
        obj40 = { children: null };
        items19[1] = tmp36Result3;
        obj40.children = items19;
        tmp36Result2 = tmp37(tmp64, obj40);
      }
      obj41 = { children: null };
      items9[2] = tmp36Result2;
      obj.children = items9;
      obj41.children = tmp37(tmp38, obj);
      return tmp36(guildId(closure_2[56]).BottomSheet, obj41);
    }
    return;
  }
}

export default GuildRoleConnectionsConnectAccountsActionSheet;
