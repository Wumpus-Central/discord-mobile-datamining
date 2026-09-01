// discord_app/modules/connections/native/GuildRoleConnectionsConnectAccountsActionSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import AccessibilityAnnouncer from "../../../design/shared.tsx";
import getAvatarURL from "../../../utils/AvatarUtils.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import computeChannelNameDefault from "../../channel/useChannelName.tsx";
import useMountLayoutEffectDefault from "../../../hooks/useMountEffect.tsx";
import getChannelIcon from "../../../utils/native/ChannelUtils.tsx";
import getPlatformUserUrlDefault from "../../../lib/Platforms.tsx";
import officialApplicationIds2 from "../ConnectionsUtils.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_9 from "../../oauth2/AuthorizedAppsStore.tsx";
import closure_10 from "../../user_settings/LocaleStore.tsx";
import closure_11 from "../../../records/UserRecord.tsx";
import closure_12 from "../../../stores/AuthenticationStore.tsx";
import closure_13 from "../../../stores/ChannelStore.tsx";
import closure_14 from "../../../stores/ConnectedAccountsStore.tsx";
import closure_15 from "../../../stores/GuildMemberStore.tsx";
import closure_16 from "../../../stores/PermissionStore.tsx";
import OperatorTypes from "../Constants.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function PlatformIcon(platformType) {
  const tmp = callback4();
  let obj = getPlatformUserUrlDefault;
  const value = obj.get(platformType.platformType);
  const tmp3 = useThemeDefault();
  const tmp5 = require;
  const obj2 = getAvatarURL;
  const icon = value.icon;
  const source = obj2.makeSource(AccessibilityAnnouncer.isThemeLight(tmp3) ? icon.lightPNG : icon.darkPNG);
  obj = { source, style: tmp.platformIcon, disableColor: true };
  return callback2(Button.Icon, obj);
}
function ChannelName(channel) {
  channel = channel.channel;
  const tmp = callback4();
  let obj = getChannelIcon;
  const channelIcon = obj.getChannelIcon(channel);
  obj = { style: items, children: null };
  items = [tmp.channelName, channel.style];
  let tmp8 = null;
  if (null != channelIcon) {
    obj = { source: null, style: null };
    obj[0] = channelIcon;
    obj[1] = tmp.channelNameIcon;
    tmp8 = callback2(tmp2(1297).Icon, obj);
  }
  const items1 = [tmp8];
  const tmp5 = computeChannelNameDefault(channel);
  const tmp6 = closure_30;
  const tmp7 = closure_8;
  items1[1] = callback2(Text.Text, {
    variant: "heading-lg/semibold",
    color: "text-default",
    style: tmp.channelNameText,
    lineClamp: 1,
    children: computeChannelNameDefault(channel),
  });
  obj[1] = items1;
  return tmp6(tmp7, obj);
}
function ConnectionsCheck(result) {
  ({ connectionType, connectionMetadataField, operator, value, description } = result);
  if (connectionType === closure_20) {
    return null;
  } else {
    if (null != description) {
      if (constants2.LESS_THAN === operator) {
        const intl = getSystemLocale.intl;
        let obj = { description: null, count: null };
        obj[0] = description;
        const _Math = Math;
        const _Number = Number;
        obj[1] = Math.max(0, Number(value) - 1);
        let formatResult = intl.format(getSystemLocale.t["2p7dA3"], obj);
      } else {
        formatResult = description;
        if (tmp16.GREATER_THAN === operator) {
          const intl2 = getSystemLocale.intl;
          obj = { description: null, count: null };
          obj[0] = description;
          const _Math2 = Math;
          const _Number2 = Number;
          obj[1] = Math.max(0, Number(value) + 1);
          formatResult = intl2.format(getSystemLocale.t["2p7dA3"], obj);
        }
      }
    } else {
      if (constants2.EQUAL === operator) {
        let tmp11 = connectionType === constants3.PAYPAL;
        if (tmp11) {
          tmp11 = connectionMetadataField === constants.PAYPAL_VERIFIED;
        }
        if (tmp11) {
        }
        tmp8 = require;
      } else if (tmp26.NOT_EQUAL === operator) {
      } else if (tmp26.LESS_THAN === operator) {
      } else if (tmp26.GREATER_THAN === operator) {
      } else {
        return null;
      }
      obj = officialApplicationIds2;
      obj1 = { connectionType: null, connectionMetadataField: null, operator: null, operatorText: null, value: null };
      obj1[0] = connectionType;
      obj1[1] = connectionMetadataField;
      obj1[2] = operator;
      obj1[3] = _8W9OXU;
      obj1[4] = value;
      formatResult = obj.getConnectionsCheckText(obj1);
    }
    let tmp21Result = null;
    if (null != formatResult) {
      let str = "text-feedback-critical";
      if (result.result) {
        str = "text-default";
      }
      const obj2 = { variant: "text-xs/normal", color: null, style: null, children: null };
      obj2[1] = str;
      obj2[2] = tmp.connectionsCheck;
      obj2[3] = formatResult;
      tmp21Result = closure_29(Text.Text, obj2);
      const tmp21 = closure_29;
    }
    return tmp21Result;
  }
}
function IdentityConnectionsCheckGroup(eligibilityState) {
  eligibilityState = eligibilityState.eligibilityState;
  const onAttempted = eligibilityState.onAttempted;
  const onIdentityAuthorize = eligibilityState.onIdentityAuthorize;
  let canStartAuthorization;
  let startAuthorization;
  let React;
  let identity_connected_account_type;
  let identity_auth_required_scopes;
  let application;
  c9 = undefined;
  const tmp = callback4();
  let obj = eligibilityState(onIdentityAuthorize[27]);
  const getOrFetchApplicationBatched = obj.useGetOrFetchApplicationBatched(eligibilityState.application_id);
  let tmp6 = onAttempted(onIdentityAuthorize[28])(getOrFetchApplicationBatched);
  canStartAuthorization = tmp6.canStartAuthorization;
  startAuthorization = tmp6.startAuthorization;
  React = canStartAuthorization;
  identity_connected_account_type = eligibilityState.identity_connected_account_type;
  identity_auth_required_scopes = eligibilityState.identity_auth_required_scopes;
  let flag = canStartAuthorization;
  if (!canStartAuthorization) {
    flag = canStartAuthorization;
    if (null != identity_connected_account_type) {
      flag = canStartAuthorization;
      if (null != identity_auth_required_scopes) {
        let tmp5Result = tmp5(tmp3[18]);
        const value = tmp5Result.get(identity_connected_account_type);
        flag = canStartAuthorization;
        if (tmp9) {
          React = true;
          flag = true;
        }
        tmp9 = null != value && value.enabled;
      }
    }
  }
  application = eligibilityState.application;
  let obj2 = React;
  const items = [application];
  const memo = React.useMemo(() => {
    let bot;
    if (application != null) {
      bot = tmp.bot;
    }
    let tmp3 = null;
    if (null != bot) {
      tmp3 = new closure_1_11(tmp.bot);
    }
    return tmp3;
  }, items);
  const result = eligibilityState.result;
  c9 = result;
  if (null != memo) {
    obj = { style: null, verified: null };
    obj[0] = tmp.botTag;
    tmp5Result = tmp5(tmp3[29]);
    obj[1] = memo.isVerifiedBot();
    const tmp10 = callback2(tmp5Result, obj);
  }
  if (result) {
    obj = { source: null, style: null };
    obj[0] = tmp5(tmp3[30]);
    obj[1] = tmp.connectionsChecksGroupCheckmark;
    let tmp13Result = tmp13(tmp2(tmp3[21]).Icon, obj);
    let tmp15 = tmp13;
  } else if (flag) {
    obj1 = { source: null, style: null };
    obj1[0] = tmp5(tmp3[31]);
    obj1[1] = tmp.connectionsChecksGroupCaret;
    tmp13Result = tmp13(tmp2(tmp3[21]).Icon, obj1);
    tmp15 = tmp13;
  } else {
    obj2 = { variant: "text-md/medium", color: "text-muted", children: null };
    const intl = tmp2(tmp3[25]).intl;
    obj2[2] = intl.string(tmp2(tmp3[25]).t.cEts68);
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
          const accounts = closure_1_14.getAccounts();
          someResult = accounts.some((type) => type.type === closure_6);
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
          let obj = { analyticsLocations: null };
          obj[0] = ["Verified Roles Connect Accounts Modal"];
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
            obj = { applicationId: null, scopes: null, connectedAccountProvider: null, wasAlreadyConnected: null };
            obj[0] = tmp9.application_id;
            obj[1] = identity_auth_required_scopes;
            obj[2] = tmp2;
            obj[3] = someResult;
            onIdentityAuthorize(obj);
          }
        }
        const tmp6 = onAttempted;
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
    obj3[1] = items2;
    let tmp22 = result;
    if (!result) {
      tmp22 = !flag;
    }
    obj3[2] = tmp22;
    obj3[3] = callback;
    let tmp15Result = null;
    if (null != memo) {
      const obj4 = { style: null, user: null, size: null, guildId: "a" };
      obj4[0] = tmp.appIcon;
      obj4[1] = memo;
      obj4[2] = tmp2(tmp3[21]).AvatarSizes.XSMALL;
      tmp15Result = tmp15(tmp2(tmp3[21]).Avatar, obj4);
    }
    const items3 = [tmp15Result, ,];
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.connectionsChecksGroupTextContainer;
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.connectionsChecksGroupTextNameContainer;
    let name;
    if (application != null) {
      name = application.name;
    }
    const obj7 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
    obj7[2] = name;
    const items4 = [tmp15(tmp2(tmp3[24]).Text, obj7), tmp10];
    obj6[1] = items4;
    const items5 = [closure_30(application, obj6)];
    tmp15Result = null;
    if (!flag) {
      tmp15Result = null;
      if (!result) {
        const obj8 = { variant: "text-xs/normal", color: "text-muted", style: null, children: null };
        obj8[2] = tmp.connectionsCheck;
        const intl2 = tmp2(tmp3[25]).intl;
        obj8[3] = intl2.string(tmp2(tmp3[25]).t["+z5dYe"]);
        tmp15Result = tmp15(tmp2(tmp3[24]).Text, obj8);
      }
    }
    items5[1] = tmp15Result;
    obj5[1] = items5;
    items3[1] = closure_30(application, obj5);
    items3[2] = tmp13Result;
    obj3[4] = items3;
    tmp18Result = tmp18(identity_auth_required_scopes, obj3);
    const tmp19 = identity_auth_required_scopes;
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
    onPlatformIdentityAuthorize: closure_4,
    initialAttemptedPlatformType,
    initialAttemptedApplicationId,
  } = eligibilityStatesGroups);
  let React;
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
  closure_16 = undefined;
  React = callback4();
  let obj = React;
  [c6, c7] = callback(React.useState({}), 2);
  let tmp2 = callback(React.useState({}), 2);
  [c8, c9] = callback(React.useState(0), 2);
  if (initialAttemptedPlatformType == null) {
    initialAttemptedPlatformType = null;
  }
  let tmpResult = tmp(React.useState(initialAttemptedPlatformType), 2);
  first = tmpResult[0];
  closure_11 = tmpResult[1];
  if (initialAttemptedApplicationId == null) {
    initialAttemptedApplicationId = null;
  }
  tmpResult = tmp(obj.useState(initialAttemptedApplicationId), 2);
  first1 = tmpResult[0];
  closure_13 = tmpResult[1];
  let items = [eligibilityStatesGroups];
  memo = obj.useMemo(() => closure_1_1(closure_1_2[32]).flatten(eligibilityStatesGroups), items);
  let items1 = [memo];
  memo1 = obj.useMemo(
    () =>
      closure_1_1(closure_1_2[32]).groupBy(memo, (application_id) => {
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
        if (arr.every((result) => result.result)) {
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
      const tmp10 = memo1;
    }
  }, items3);
  let tmp3 = callback(React.useState(0), 2);
  closure_16 = eligibilityStatesGroups(4197).useToken(ThemesDefault.unsafe_rawColors.GREEN_330);
  obj = { children: null };
  const keys = Object.keys(memo1);
  const sorted = keys.sort((arg0, arg1) => {
    const everyResult = memo1[arg0].every((result) => result.result);
    const everyResult1 = memo1[arg1].every((result) => result.result);
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
  obj[0] = sorted.map((str) => {
    if (str.startsWith("" + closure_1_20 + ":")) {
      if (null != arr[0]) {
        let obj = { eligibilityState: null, onAttempted: null, onIdentityAuthorize: null };
        obj[0] = arr[0];
        obj[1] = function onAttempted(arg0) {
          callback(arg0);
          callback2(arg1);
          if (null != arg0) {
            value();
          }
        };
        obj[2] = closure_4;
        return closure_1_29(closure_1_36, obj, str);
      }
    }
    const found = arr.find((operator) => null == operator.operator);
    const found1 = arr.filter((operator) => null != operator.operator);
    const tmp3 = (null == found || found.result) && found1.every((result) => result.result);
    const found2 = arr.find((application) => null != application.application);
    obj = closure_1_1(closure_1_2[18]);
    const value = obj.get(str);
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
    const officialApplicationIds = eligibilityStatesGroups(tmp6[26]).officialApplicationIds;
    str = undefined;
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
      obj = { source: null, style: null };
      obj[0] = tmp5(tmp6[30]);
      obj[1] = closure_5.connectionsChecksGroupCheckmark;
      let tmp22Result = tmp22(tmp15(tmp6[21]).Icon, obj);
      let tmp24 = tmp22;
    } else if (tmp20) {
      obj1 = { variant: "text-sm/semibold", color: "text-brand", children: null };
      const intl2 = tmp15(tmp6[25]).intl;
      obj1[2] = intl2.string(tmp15(tmp6[25]).t["5911Lb"]);
      tmp22Result = tmp22(tmp15(tmp6[24]).Text, obj1);
      tmp24 = tmp22;
    } else if (tmp8) {
      const obj2 = { source: null, style: null };
      obj2[0] = tmp5(tmp6[31]);
      obj2[1] = closure_5.connectionsChecksGroupCaret;
      tmp22Result = tmp22(tmp15(tmp6[21]).Icon, obj2);
      tmp24 = tmp22;
    } else {
      const obj3 = { variant: "text-md/medium", color: "text-muted", children: null };
      const intl = tmp15(tmp6[25]).intl;
      obj3[2] = intl.string(tmp15(tmp6[25]).t.cEts68);
      tmp22Result = tmp22(tmp15(tmp6[24]).Text, obj3);
      tmp24 = tmp22;
    }
    let type1;
    if (value != null) {
      type1 = value.type;
    }
    let tmp28;
    if (type1 === closure_1_21.STEAM) {
      const intl3 = tmp15(tmp6[25]).intl;
      const stringResult = intl3.string(tmp15(tmp6[25]).t.NcZh6K);
      eligibilityStatesGroups = stringResult;
      tmp28 = stringResult;
    }
    if (hasItem) {
      const obj4 = { style: null, guildId: null, roleColor: null, size: 16 };
      obj4[0] = closure_5.botTag;
      obj4[1] = closure_1_28;
      obj4[2] = closure_16;
      let tmp24Result = tmp24(tmp5(tmp6[34]), obj4);
    } else if (null != tmp11) {
      const obj5 = { style: null, verified: null };
      obj5[0] = closure_5.botTag;
      obj5[1] = tmp11.isVerifiedBot();
      tmp24Result = tmp24(tmp5(tmp6[29]), obj5);
      const tmp5Result = tmp5(tmp6[29]);
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
    obj6[2] = tmp41;
    obj6[3] = function onPress() {
      let type;
      if (value != null) {
        type = value.type;
      }
      if (type == null) {
        type = closure_2_19;
      }
      let tmp2 = application;
      if (application == null) {
        tmp2 = null;
      }
      const obj = {};
      const merged = Object.assign(closure_1_6);
      obj[type] = Date.now();
      closure_1_7(obj);
      closure_1_11(type);
      let id;
      if (tmp2 != null) {
        id = tmp2.id;
      }
      if (id == null) {
        id = null;
      }
      closure_1_13(id);
      value();
      application(type, tmp2);
    };
    tmp24Result = null;
    if (!tmp3) {
      tmp24Result = null;
      if (tmp20) {
        const obj7 = { style: null, children: null };
        obj7[0] = tmp38.connectionsChecksGroupRequirementsNotMet;
        const obj8 = { variant: "text-xs/normal", color: "text-overlay-light", children: null };
        const intl4 = tmp15(tmp6[25]).intl;
        obj8[2] = intl4.string(tmp15(tmp6[25]).t.UB3hKo);
        obj7[1] = tmp24(tmp15(tmp6[24]).Text, obj8);
        tmp24Result = tmp24(c8, obj7);
      }
    }
    const items1 = [tmp24Result, , , ,];
    let tmp24Result1 = null;
    if (null != value) {
      const obj9 = { platformType: null };
      obj9[0] = value.type;
      tmp24Result1 = tmp24(closure_1_33, obj9);
    }
    items1[1] = tmp24Result1;
    let tmp24Result2 = null;
    if (null != tmp11) {
      const obj10 = { style: null, user: null, size: null, guildId: "a" };
      obj10[0] = tmp38.appIcon;
      obj10[1] = tmp11;
      obj10[2] = tmp15(tmp6[21]).AvatarSizes.XSMALL;
      tmp24Result2 = tmp24(tmp15(tmp6[21]).Avatar, obj10);
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
      tmp24(eligibilityStatesGroups(closure_1_2[24]).Text, {
        variant: "text-md/medium",
        color: "mobile-text-heading-primary",
        children: name,
      }),
      tmp24Result,
    ];
    let tmp24Result3 = null;
    if (null != tmp28) {
      const obj13 = { onPress: null, children: null };
      obj13[0] = function onPress() {
        closure_2_1(closure_2_2[35])(null != closure_0, "tooltip is null");
        let obj = closure_2_1(closure_2_2[36]);
        obj = { key: "CONNECTIONS_STEAM_TOOLTIP", icon: closure_2_1(closure_2_2[37]), content: closure_0 };
        obj.open(obj);
      };
      const obj14 = { source: null, size: null, style: null };
      obj14[0] = tmp5(tmp6[37]);
      obj14[1] = tmp15(tmp6[21]).Icon.Sizes.SMALL_20;
      obj14[2] = tmp38.connectionsChecksGroupTextNameInfoIcon;
      obj13[1] = tmp24(tmp15(tmp6[21]).Icon, obj14);
      tmp24Result3 = tmp24(tmp37, obj13);
    }
    items2[2] = tmp24Result3;
    obj12[1] = items2;
    const items3 = [
      closure_1_30(c8, obj12),
      found1.map((arg0) => {
        ({ connection_metadata_field, operator, value } = arg0);
        ({ connection_type, result, description } = arg0);
        value(application[35])(null != connectionMetadataField, "connectionMetadataField is null");
        value(application[35])(null != operator, "operator is null");
        value(application[35])(null != value, "value is null");
        return callback3(
          closure_35,
          { connectionType, connectionMetadataField, operator, value, result, description },
          connectionMetadataField,
        );
      }),
    ];
    obj11[1] = items3;
    items1[3] = closure_1_30(c8, obj11);
    items1[4] = tmp22Result;
    obj6[4] = items1;
    return closure_1_30(c7, obj6, str);
  });
  return callback2(closure_31, obj);
}
function ConnectedUserAccountOptions(account) {
  account = account.account;
  ({ setShowPreviewInvisibleIcon: importDefault, setShowPreviewMetadata: dependencyMap } = account);
  c3 = undefined;
  let callback;
  let first;
  closure_6 = undefined;
  let first1;
  closure_8 = undefined;
  const tmp = callback4();
  [tmp3, c3] = callback(first.useState(account.friendSync), 2);
  const tmp4 = callback(first.useState(account.showActivity), 2);
  callback = tmp4[1];
  const tmp5 = callback(first.useState(1 === account.metadataVisibility), 2);
  first = tmp5[0];
  closure_6 = tmp5[1];
  const tmp7 = callback(first.useState(1 === account.visibility), 2);
  first1 = tmp7[0];
  closure_8 = tmp7[1];
  useMountLayoutEffectDefault(() => {
    callback(!first1);
    callback2(first);
  });
  let obj = getPlatformUserUrlDefault;
  const value = obj.get(account.type);
  let tmp12;
  if (set.has(account.type)) {
    obj = { label: null, value: null, onValueChange: null };
    const intl = account(1236).intl;
    obj[0] = intl.string(account(1236).t["+KCMSi"]);
    obj[1] = tmp3;
    obj[2] = function onValueChange(closure_0) {
      _undefined(closure_0);
      closure_1_1(closure_1_2[40]).setFriendSync(account.type, account.id, closure_0);
    };
    tmp12 = callback2(account(8363).FormSwitchRow, obj);
  }
  let tmp15;
  if (set2.has(account.type)) {
    obj = { label: null, value: null, onValueChange: null };
    const intl2 = account(1236).intl;
    obj1 = { platform: null };
    obj1[0] = value.name;
    obj[0] = intl2.formatToPlainString(account(1236).t["6u6J0q"], obj1);
    obj[1] = tmp4[0];
    obj[2] = function onValueChange(closure_0) {
      callback3(closure_0);
      closure_1_1(closure_1_2[40]).setShowActivity(account.type, account.id, closure_0);
    };
    tmp15 = callback2(account(8363).FormSwitchRow, obj);
  }
  let tmp18;
  if (true === value.hasMetadata) {
    const obj2 = { label: null, value: null, disabled: null, onValueChange: null };
    const intl3 = account(1236).intl;
    obj2[0] = intl3.string(account(1236).t.FYKGsL);
    obj2[1] = first;
    obj2[2] = !first1;
    obj2[3] = function onValueChange(arg0) {
      callback2(arg0);
      callback4(arg0);
      let num = 0;
      ({ type, id } = account);
      if (arg0) {
        num = 1;
      }
      const result = closure_1_1(closure_1_2[40]).setMetadataVisibility(type, id, num);
    };
    tmp18 = callback2(account(8363).FormSwitchRow, obj2);
  }
  const obj3 = { style: tmp.accountConnectedPrivacyOptionsContainer, children: null };
  const obj4 = { label: null, value: null, onValueChange: null };
  const intl4 = account(1236).intl;
  obj4[0] = intl4.string(account(1236).t.f7yOAX);
  obj4[1] = first1;
  obj4[2] = function onValueChange(arg0) {
    callback(!arg0);
    callback5(arg0);
    let num = 0;
    ({ type, id } = account);
    if (arg0) {
      num = 1;
    }
    closure_1_1(closure_1_2[40]).setVisibility(type, id, num);
  };
  const items = [callback2(account(8363).FormSwitchRow, obj4), tmp18, tmp15, tmp12];
  obj3[1] = items;
  return callback3(closure_8, obj3);
}
({ ActivityIndicator: closure_6, Pressable: error, View: closure_8 } = get_ActivityIndicator);
({
  MetadataFields: closure_17,
  OperatorTypes: closure_18,
  GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE: closure_19,
  GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE: closure_20,
} = OperatorTypes);
({
  PlatformTypes: closure_21,
  UserSettingsSections: closure_22,
  AnalyticEvents: closure_23,
  MarketingURLs: closure_24,
  FRIEND_SYNC_PLATFORM_TYPES: closure_25,
  ACTIVITY_PLATFORM_TYPES: closure_26,
  Permissions: closure_27,
  EMPTY_STRING_SNOWFLAKE_ID: closure_28,
} = ME);
({ jsx: closure_29, jsxs: closure_30, Fragment: closure_31 } = jsxProd);
createCacheKey = {
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
createCacheKey = {
  flexDirection: "row",
  borderColor: ThemesDefault.colors.BORDER_SUBTLE,
  borderWidth: 2,
  borderRadius: ThemesDefault.radii.md,
  paddingHorizontal: 16,
  paddingVertical: 20,
  marginBottom: 16,
  width: "100%",
  alignItems: "center",
  position: "relative",
};
createCacheKey[2] = createCacheKey;
createCacheKey[3] = {
  borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
};
let obj1 = {
  borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
};
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
let obj2 = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[5] = {
  paddingVertical: 4,
  paddingHorizontal: 12,
  borderRadius: ThemesDefault.radii.md,
  backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_CRITICAL,
  position: "absolute",
  top: -8,
  right: 20,
};
createCacheKey[6] = { flex: 1 };
createCacheKey[7] = { flexDirection: "row", alignItems: "center" };
let obj3 = {
  paddingVertical: 4,
  paddingHorizontal: 12,
  borderRadius: ThemesDefault.radii.md,
  backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_CRITICAL,
  position: "absolute",
  top: -8,
  right: 20,
};
createCacheKey[8] = { marginLeft: 4, tintColor: ThemesDefault.colors.TEXT_FEEDBACK_WARNING };
let obj4 = { marginLeft: 4, tintColor: ThemesDefault.colors.TEXT_FEEDBACK_WARNING };
createCacheKey[9] = { tintColor: ThemesDefault.colors.TEXT_FEEDBACK_POSITIVE, width: 24, height: 24 };
let obj5 = { tintColor: ThemesDefault.colors.TEXT_FEEDBACK_POSITIVE, width: 24, height: 24 };
createCacheKey[10] = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: 24, height: 24 };
createCacheKey[11] = { marginTop: 4 };
createCacheKey[12] = { width: 24, height: 24, marginRight: 12 };
createCacheKey[13] = { flexDirection: "row", alignItems: "center", marginBottom: 4 };
let obj6 = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: 24, height: 24 };
createCacheKey[14] = { tintColor: ThemesDefault.colors.TEXT_MUTED, marginRight: 8, width: 24, height: 24 };
createCacheKey[15] = { overflow: "hidden" };
createCacheKey[16] = { flexDirection: "row", width: "100%", alignItems: "center", marginBottom: 8 };
createCacheKey[17] = { width: "100%" };
createCacheKey[18] = { marginBottom: 16 };
createCacheKey[19] = { flexDirection: "column", alignItems: "flex-start", marginVertical: 24 };
createCacheKey[20] = { width: "100%" };
let obj7 = { tintColor: ThemesDefault.colors.TEXT_MUTED, marginRight: 8, width: 24, height: 24 };
createCacheKey[21] = {
  marginTop: 8,
  borderRadius: ThemesDefault.radii.xs,
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BORDER_SUBTLE,
};
createCacheKey[22] = { marginTop: 16, width: "100%" };
let obj8 = {
  marginTop: 8,
  borderRadius: ThemesDefault.radii.xs,
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BORDER_SUBTLE,
};
createCacheKey[23] = {
  marginTop: 8,
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BORDER_SUBTLE,
  borderRadius: ThemesDefault.radii.xs,
  padding: 8,
  flexDirection: "column",
};
let obj9 = {
  marginTop: 8,
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BORDER_SUBTLE,
  borderRadius: ThemesDefault.radii.xs,
  padding: 8,
  flexDirection: "column",
};
createCacheKey[24] = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
  paddingVertical: 12,
  paddingHorizontal: 8,
  borderTopStartRadius: 4,
  borderTopEndRadius: 4,
  marginTop: 16,
};
createCacheKey[25] = { overflow: "hidden", marginRight: 24 };
createCacheKey[26] = { marginRight: 8 };
let obj10 = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
  paddingVertical: 12,
  paddingHorizontal: 8,
  borderTopStartRadius: 4,
  borderTopEndRadius: 4,
  marginTop: 16,
};
createCacheKey[27] = {
  flexDirection: "column",
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL,
  padding: 16,
  borderBottomStartRadius: 4,
  borderBottomEndRadius: 4,
  marginBottom: 24,
};
createCacheKey[28] = { marginTop: 8 };
createCacheKey[29] = { marginTop: 24, marginBottom: 32, alignSelf: "center" };
createCacheKey[30] = { marginRight: 8 };
createCacheKey[31] = { marginLeft: 4 };
let closure_32 = createCacheKey.createStyles(createCacheKey);
let closure_39 = {
  CHECKS_REQUIRED: 0,
  [0]: "CHECKS_REQUIRED",
  ACCOUNT_CONNECTED: 1,
  [1]: "ACCOUNT_CONNECTED",
  ROLE_GRANTED: 2,
  [2]: "ROLE_GRANTED",
};
let obj11 = {
  flexDirection: "column",
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL,
  padding: 16,
  borderBottomStartRadius: 4,
  borderBottomEndRadius: 4,
  marginBottom: 24,
};
let result = require("set").fileFinishedImporting(
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
    _handleAssignRole = function _handleAssignRole() {
      const self = this;
      const tmp = closure_1_3(function* () {
        if (c0 === 2) {
          c0 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c0 = 2;
            if (0 === v0) {
              if (arg0 === 1) {
                c0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c0 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_1_10(true);
                obj1 = v0(closure_1_2[43]);
                v0 = 1;
                c0 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.assignGuildRoleConnection(c0, v0.id);
                return obj1;
              }
            } else if (arg0 === 1) {
              c0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
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
      });
      closure_20 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
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
    obj = require("initialize");
    items = [];
    items[0] = closure_14;
    stateFromStores = obj.useStateFromStores(items, () => first2.getAccounts());
    obj2 = require("initialize");
    items1 = [];
    items1[0] = closure_9;
    stateFromStores1 = obj2.useStateFromStores(items1, () => first.getNewestTokens());
    obj3 = require("initialize");
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
          const obj = { platformType: null, applicationId: null };
          obj[0] = tmp;
          let tmp3 = closure_3;
          if (closure_3 == null) {
            tmp3 = null;
          }
          obj[1] = tmp3;
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
    tmp29 = require("useTheme")();
    obj4 = require("initialize");
    items3 = [];
    items3[0] = closure_15;
    stateFromStores3 = obj4.useStateFromStores(items3, () => member.getMember(guildId, stateFromStores2));
    closure_18 = stateFromStores3;
    obj5 = require("initialize");
    items4 = [];
    items4[0] = closure_13;
    stateFromStores4 = obj5.useStateFromStores(items4, () =>
      mutableGuildChannelsForGuild.getMutableGuildChannelsForGuild(guildId),
    );
    obj6 = require("initialize");
    items5 = [];
    items5[0] = closure_10;
    stateFromStores5 = obj6.useStateFromStores(items5, () => lib.locale);
    values = Object.values(stateFromStores4);
    found = values.filter((arg0) => {
      let hasItem =
        _undefined2.can(closure_1_27.VIEW_CHANNEL, arg0) && _undefined2.can(closure_1_27.SEND_MESSAGES, arg0);
      if (hasItem) {
        hasItem = role(initialAttemptedPlatformType[42])(arg0).includes(role);
        const obj2 = role(initialAttemptedPlatformType[42])(arg0);
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
      const guildRoleConnectionsEligibility = role(
        initialAttemptedPlatformType[43],
      ).fetchGuildRoleConnectionsEligibility(guildId, role.id);
      guildRoleConnectionsEligibility.then((arr) => {
        callback(arr);
        callback2(arr.some((arr) => arr.every((result) => result.result)));
        callback3(false);
      });
    }, items6);
    items7 = [, ,];
    items7[0] = initialAttemptedPlatformType;
    items7[1] = role.id;
    items7[2] = guildId;
    effect1 = closure_5.useEffect(() => {
      if (null == initialAttemptedPlatformType) {
        let obj = role(initialAttemptedPlatformType[44]);
        obj = { role_id: null };
        obj[0] = role.id;
        const merged = Object.assign(guildId(initialAttemptedPlatformType[45]).collectGuildAnalyticsMetadata(guildId));
        obj.track(closure_1_23.PASSPORT_CHALLENGE_VIEWED, obj);
        const obj3 = guildId(initialAttemptedPlatformType[45]);
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
        lib(false);
        if (found.length > 0) {
          _undefined(closure_1_39.ROLE_GRANTED);
        } else {
          let obj = role(initialAttemptedPlatformType[46]);
          obj.hideActionSheet();
        }
        obj = { role_id: null };
        obj[0] = role.id;
        const obj2 = role(initialAttemptedPlatformType[44]);
        const merged = Object.assign(guildId(initialAttemptedPlatformType[45]).collectGuildAnalyticsMetadata(guildId));
        obj2.track(closure_1_23.PASSPORT_CHALLENGE_FINISHED, obj);
        const obj4 = guildId(initialAttemptedPlatformType[45]);
      }
    }, items8);
    tmp36 = jsx;
    tmp37 = jsxs;
    tmp38 = closure_8;
    obj = { style: tmp.container, children: null };
    if (closure_39.CHECKS_REQUIRED === tmp4) {
      obj1 = { style: null, children: null };
      obj1[0] = tmp.header;
      obj2 = { variant: "heading-lg/extrabold", children: null };
      intl2 = require("getSystemLocale").intl;
      obj2[1] = intl2.string(require("getSystemLocale").t.zOZh3R);
      obj1[1] = tmp36(require("Text").Text, obj2);
      tmp36Result = tmp36(tmp38, obj1);
    } else if (tmp2.ACCOUNT_CONNECTED === tmp4) {
      str = "lastPlatformConnected is null";
      tmp40 = require("../../../../_runtime/metro/00038__.js")(null != first1, "lastPlatformConnected is null");
      tmp28Result = require("getPlatformUserUrl");
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
      obj3[1] = tmp.header;
      intl = require("getSystemLocale").intl;
      obj4 = { platformName: null };
      obj4[0] = name;
      obj3[2] = intl.format(require("getSystemLocale").t.yQvgBO, obj4);
      tmp36Result = tmp36(require("Text").Text, obj3);
    } else {
      tmp36Result = null;
      if (tmp2.ROLE_GRANTED === tmp4) {
        obj5 = { variant: "heading-lg/extrabold", style: null, children: null };
        obj5[1] = tmp.header;
        intl12 = require("getSystemLocale").intl;
        obj5[2] = intl12.string(require("getSystemLocale").t.najNdz);
        tmp36Result = tmp36(require("Text").Text, obj5);
      }
    }
    handleManageConnections = function handleManageConnections() {
      if (closure_4 != null) {
        tmp();
      }
      let obj = role(initialAttemptedPlatformType[46]);
      obj.hideActionSheet();
      obj = { screen: closure_1_22.CONNECTIONS };
      guildId(initialAttemptedPlatformType[47]).openUserSettings(obj);
    };
    handleManageAuthorizedApplications = function handleManageAuthorizedApplications() {
      if (closure_4 != null) {
        tmp();
      }
      let obj = role(initialAttemptedPlatformType[46]);
      obj.hideActionSheet();
      obj = { screen: closure_1_22.AUTHORIZED_APPS };
      guildId(initialAttemptedPlatformType[47]).openUserSettings(obj);
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
          obj6[0] = tmp.content;
          intl13 = require("getSystemLocale").intl;
          t = require("getSystemLocale").t;
          if (tmp56) {
            jHfRvZ = t.jHfRvZ;
          } else {
            jHfRvZ = tmp55 ? t["mOQ8k+"] : t.U0olLg;
          }
          obj7 = { variant: "text-md/medium", color: "text-default", children: null };
          obj8 = { roleName: null };
          obj8[0] = role.name;
          handlePlatformAttempt = function handlePlatformAttempt() {
            let obj = role(initialAttemptedPlatformType[44]);
            obj = { role_id: role.id };
            const merged = Object.assign(
              guildId(initialAttemptedPlatformType[45]).collectGuildAnalyticsMetadata(guildId),
            );
            obj.track(closure_1_23.PASSPORT_CHALLENGE_STARTED, obj);
          };
          handlePlatformConnect = function handlePlatformConnect(platformType, role_connections_verification_url) {
            closure_0 = platformType;
            closure_1 = role_connections_verification_url;
            let obj = {
              platformType,
              location: "Verified Roles Connect Accounts Modal",
              onClose() {
                let id;
                if (lib != null) {
                  id = tmp2.id;
                }
                if (id == null) {
                  id = null;
                }
                let prop;
                if (lib != null) {
                  prop = tmp2.role_connections_verification_url;
                }
                let obj = lib(closure_1_2[46]);
                obj = { default: closure_1_40 };
                const resolved = Promise.resolve(obj);
                obj = {
                  role: lib,
                  guildId: platformType,
                  initialAttemptedPlatformType: tmp,
                  initialAttemptedApplicationId: null,
                  overrideUrl: null,
                  onCloseModal: null,
                };
                let tmp7 = null;
                const guildRoleConnectionsConnectAccountsActionSheetKey = platformType(
                  closure_1_2[48],
                ).makeGuildRoleConnectionsConnectAccountsActionSheetKey(lib.id);
                if (null != platformType) {
                  tmp7 = id;
                }
                obj[3] = tmp7;
                obj[4] = { overrideUrl: prop }.overrideUrl;
                obj[5] = closure_1_4;
                obj.openLazy(resolved, guildRoleConnectionsConnectAccountsActionSheetKey, obj);
              },
              overrideUrl: null,
            };
            let prop;
            if (role_connections_verification_url != null) {
              prop = role_connections_verification_url.role_connections_verification_url;
            }
            obj[3] = prop;
            role(initialAttemptedPlatformType[49])(obj);
          };
          handlePlatformIdentityAuthorize = function handlePlatformIdentityAuthorize(applicationId) {
            applicationId = applicationId.applicationId;
            const wasAlreadyConnected = applicationId.wasAlreadyConnected;
            let combined;
            ({ scopes, connectedAccountProvider } = applicationId);
            let obj = role(initialAttemptedPlatformType[46]);
            obj.hideActionSheet();
            combined = "OAuth2AuthorizeModal-" + applicationId;
            function handleModalClose(key) {
              if (key.key === combined) {
                role(initialAttemptedPlatformType[50]).unsubscribe("MODAL_POP", handleModalClose);
                let tmp = null;
                if (!wasAlreadyConnected) {
                  tmp = _handleAssignRole;
                }
                let obj = wasAlreadyConnected(combined[46]);
                obj = { default: null };
                obj[0] = closure_1_40;
                const resolved = Promise.resolve(obj);
                const obj5 = role(initialAttemptedPlatformType[50]);
                const tmp2 = applicationId;
                obj = {
                  role: null,
                  guildId: null,
                  initialAttemptedPlatformType: null,
                  initialAttemptedApplicationId: null,
                  overrideUrl: null,
                  onCloseModal: null,
                };
                obj[0] = wasAlreadyConnected;
                obj[1] = applicationId;
                obj[2] = tmp;
                let tmp13 = null;
                const guildRoleConnectionsConnectAccountsActionSheetKey = applicationId(
                  combined[48],
                ).makeGuildRoleConnectionsConnectAccountsActionSheetKey(wasAlreadyConnected.id);
                if (null != tmp) {
                  tmp13 = tmp2;
                }
                obj[3] = tmp13;
                obj[4] = {}.overrideUrl;
                obj[5] = closure_1_4;
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
            obj[2] = guildId(initialAttemptedPlatformType[54]).ApplicationIntegrationType.USER_INSTALL;
            obj[3] = connectedAccountProvider;
            obj[4] = function callback() {};
            obj[5] = function dismissOAuthModal() {
              return role(initialAttemptedPlatformType[51]).popWithKey(combined);
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
            mutableGuildChannelsForGuild(arg0);
            member(arg1);
            _undefined(closure_1_39.ACCOUNT_CONNECTED);
            _undefined2(null);
            if (null != arg1) {
              const userApplicationRoleConnections = guildId(
                initialAttemptedPlatformType[55],
              ).fetchUserApplicationRoleConnections();
              const obj = guildId(initialAttemptedPlatformType[55]);
              userApplicationRoleConnections
                .then((arg0) => {
                  callback(arg0);
                })
                .catch(() => {});
              const nextPromise = userApplicationRoleConnections.then((arg0) => {
                callback(arg0);
              });
            }
          };
          obj7[2] = intl13.format(jHfRvZ, obj8);
          items10 = [, ,];
          items10[0] = tmp36(require("Text").Text, obj7);
          obj9 = { style: null, children: null };
          obj9[0] = tmp.connectionsChecksGroups;
          obj10 = {
            eligibilityStatesGroups: null,
            onPlatformAttempt: null,
            onPlatformConnect: null,
            onPlatformConnected: null,
            onPlatformIdentityAuthorize: null,
            initialAttemptedPlatformType: null,
            initialAttemptedApplicationId: null,
          };
          obj10[0] = arr;
          obj10[1] = handlePlatformAttempt;
          obj10[2] = handlePlatformConnect;
          obj10[3] = handlePlatformConnected;
          obj10[4] = handlePlatformIdentityAuthorize;
          platformType = undefined;
          tmp57 = ConnectionsChecks;
          if (tmp26 != null) {
            platformType = tmp26.platformType;
          }
          if (platformType == null) {
            platformType = null;
          }
          obj10[5] = platformType;
          applicationId = undefined;
          if (tmp26 != null) {
            applicationId = tmp26.applicationId;
          }
          if (applicationId == null) {
            applicationId = null;
          }
          obj10[6] = applicationId;
          obj9[1] = tmp36(tmp57, obj10);
          items10[1] = tmp36(tmp38, obj9);
          obj11 = { variant: "text-xs/normal", style: null, color: "text-default", children: null };
          obj11[1] = tmp.footerText;
          intl7 = require("getSystemLocale").intl;
          obj12 = { privacyPolicyUrl: null, onAuthorizedApplicationsClick: null, onConnectionsClick: null };
          tmp60 = MarketingURLs;
          obj12[0] = MarketingURLs.PRIVACY;
          obj12[1] = handleManageAuthorizedApplications;
          obj12[2] = handleManageConnections;
          obj11[3] = intl7.format(require("getSystemLocale").t.gsgvxh, obj12);
          items10[2] = tmp36(require("Text").Text, obj11);
          obj6[1] = items10;
          tmp37Result = tmp37(tmp38, obj6);
        }
        tmp63 = tmp37Result;
      }
      tmp62 = closure_6;
      obj13 = { size: "large", style: null };
      obj13[1] = tmp.loading;
      tmp37Result = tmp36(closure_6, obj13);
    } else {
      if (tmp2.ACCOUNT_CONNECTED === tmp4) {
        str2 = "lastPlatformConnected is null";
        tmp44 = require("../../../../_runtime/metro/00038__.js")(null != first1, "lastPlatformConnected is null");
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
        obj14[0] = tmp.content;
        obj15 = { style: null, children: null };
        obj15[0] = tmp.accountConnectedContainer;
        if (null == found1) {
          if (null == found2) {
            tmp52 = closure_6;
            obj16 = { size: "large", style: null };
            obj16[1] = tmp.loading;
            tmp36Result1 = tmp36(closure_6, obj16);
          }
          obj15[1] = tmp36Result1;
          items11 = [,];
          items11[0] = tmp36(tmp38, obj15);
          obj17 = { variant: "text-md/normal", color: "text-default", children: null };
          intl6 = require("getSystemLocale").intl;
          obj18 = { privacyPolicyUrl: null, onAuthorizedApplicationsClick: null, onConnectionsClick: null };
          tmp53 = MarketingURLs;
          obj18[0] = MarketingURLs.PRIVACY;
          obj18[1] = handleManageAuthorizedApplications;
          obj18[2] = handleManageConnections;
          obj17[2] = intl6.format(require("getSystemLocale").t.gsgvxh, obj18);
          items11[1] = tmp36(require("Text").Text, obj17);
          obj14[1] = items11;
          tmp37Result1 = tmp37(tmp38, obj14);
        }
        tmp47 = Fragment;
        tmp37Result2 = null;
        if (null != found1) {
          obj19 = { children: null };
          obj20 = { style: null, children: null };
          obj20[0] = tmp.accountConnectedPreview;
          obj21 = { variant: "eyebrow", color: "text-default", children: null };
          intl3 = require("getSystemLocale").intl;
          obj21[2] = intl3.string(require("getSystemLocale").t.TOjkEg);
          items12 = [,];
          items12[0] = tmp36(require("Text").Text, obj21);
          obj22 = {
            account: null,
            userId: null,
            theme: null,
            locale: null,
            style: null,
            showMetadata: null,
            showInvisibleIcon: null,
          };
          obj22[0] = found1;
          obj22[1] = stateFromStores2;
          obj22[2] = tmp29;
          obj22[3] = stateFromStores5;
          obj22[4] = tmp.accountConnectedPreviewConnectedUserAccount;
          obj22[5] = tmp12;
          obj22[6] = tmp15;
          items12[1] = tmp36(require("LegacyUserProfileConnections").ConnectedUserAccount, obj22);
          obj20[1] = items12;
          items13 = [,];
          items13[0] = tmp37(tmp38, obj20);
          obj23 = { style: null, children: null };
          obj23[0] = tmp.accountConnectedPrivacy;
          obj24 = { variant: "eyebrow", color: "text-default", children: null };
          intl4 = require("getSystemLocale").intl;
          obj24[2] = intl4.string(require("getSystemLocale").t.jndPhX);
          items14 = [,];
          items14[0] = tmp36(require("Text").Text, obj24);
          tmp49 = ConnectedUserAccountOptions;
          obj25 = { account: null, setShowPreviewInvisibleIcon: null, setShowPreviewMetadata: null };
          obj25[0] = found1;
          obj25[1] = tmp16;
          obj25[2] = tmp13;
          items14[1] = tmp36(ConnectedUserAccountOptions, obj25);
          obj23[1] = items14;
          items13[1] = tmp37(tmp38, obj23);
          obj19[0] = items13;
          tmp37Result2 = tmp37(tmp47, obj19);
        }
        items15 = [,];
        items15[0] = tmp37Result2;
        tmp37Result3 = null;
        if (null != found2) {
          obj26 = { style: null, children: null };
          obj26[0] = tmp.accountConnectedPreview;
          obj27 = { variant: "eyebrow", color: "text-default", children: null };
          intl5 = require("getSystemLocale").intl;
          obj27[2] = intl5.string(require("getSystemLocale").t.TOjkEg);
          items16 = [,];
          items16[0] = tmp36(require("Text").Text, obj27);
          obj28 = { applicationRoleConnection: null, theme: null, locale: null, style: null };
          obj28[0] = found2;
          obj28[1] = tmp29;
          obj28[2] = stateFromStores5;
          obj28[3] = tmp.accountConnectedPreviewConnectedUserAccount;
          items16[1] = tmp36(require("LegacyUserProfileConnections").ConnectedApplicationUserRoleAccount, obj28);
          obj26[1] = items16;
          tmp37Result3 = tmp37(tmp38, obj26);
        }
        obj29 = { children: null };
        items15[1] = tmp37Result3;
        obj29[0] = items15;
        tmp36Result1 = tmp37(tmp47, obj29);
      } else {
        tmp37Result1 = null;
        if (tmp2.ROLE_GRANTED === tmp4) {
          obj30 = { style: null, children: null };
          obj30[0] = tmp.content;
          obj31 = { style: null, children: null };
          obj31[0] = tmp.roleGranted;
          obj32 = { guildId: null, style: null, role: null, size: 24 };
          obj32[0] = guildId;
          obj32[1] = tmp.verifiedIcon;
          obj32[2] = role;
          items17 = [,];
          items17[0] = tmp36(require("VerifiedRoleIcon"), obj32);
          obj33 = {
            variant: "text-lg/semibold",
            color: "mobile-text-heading-primary",
            lineClamp: 1,
            style: null,
            children: null,
          };
          obj33[3] = tmp.roleGrantedName;
          obj33[4] = role.name;
          items17[1] = tmp36(require("Text").Text, obj33);
          obj31[1] = items17;
          items18 = [,];
          items18[0] = tmp37(tmp38, obj31);
          obj34 = { style: null, children: null };
          obj34[0] = tmp.channelsGranted;
          obj34[1] = found.map((channel) => callback(closure_34, { channel }, channel.id));
          items18[1] = tmp36(tmp38, obj34);
          obj30[1] = items18;
          tmp37Result1 = tmp37(tmp38, obj30);
        }
      }
      items9[1] = tmp37Result1;
      if (tmp2.CHECKS_REQUIRED === tmp4) {
        obj35 = { variant: "primary", onPress: null, disabled: null, text: null, grow: true };
        obj35[1] = function onPress() {
          return (function handleAssignRole() {
            const self = this;
            const apply = closure_20.apply;
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
        obj35[2] = tmp8;
        intl11 = require("getSystemLocale").intl;
        obj35[3] = intl11.string(require("getSystemLocale").t["8SuVoE"]);
        tmp36Result2 = tmp36(require("Button").Button, obj35);
      } else if (tmp2.ACCOUNT_CONNECTED === tmp4) {
        obj36 = { variant: "primary", onPress: null, text: null, grow: true };
        obj36[1] = function onPress() {
          return _undefined(closure_1_39.CHECKS_REQUIRED);
        };
        intl10 = require("getSystemLocale").intl;
        obj36[2] = intl10.string(require("getSystemLocale").t.i4jeWR);
        tmp36Result2 = tmp36(require("Button").Button, obj36);
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
        obj37[1] = function onPress() {
          if (closure_4 != null) {
            tmp();
          }
          role(initialAttemptedPlatformType[46]).hideActionSheet();
        };
        intl8 = require("getSystemLocale").intl;
        obj37[2] = intl8.string(require("getSystemLocale").t.cpT0Cq);
        items19 = [,];
        items19[0] = tmp36(require("Button").Button, obj37);
        tmp36Result3 = null;
        if (flag) {
          obj38 = { style: null, children: null };
          obj38[0] = tmp.manageConnectionsButton;
          obj39 = { variant: "secondary", onPress: null, text: null, grow: true };
          obj39[1] = handleManageConnections;
          intl9 = require("getSystemLocale").intl;
          obj39[2] = intl9.string(require("getSystemLocale").t.VXV55P);
          obj38[1] = tmp36(require("Button").Button, obj39);
          tmp36Result3 = tmp36(tmp38, obj38);
        }
        obj40 = { children: null };
        items19[1] = tmp36Result3;
        obj40[0] = items19;
        tmp36Result2 = tmp37(tmp64, obj40);
      }
      obj41 = { children: null };
      items9[2] = tmp36Result2;
      obj[1] = items9;
      obj41[0] = tmp37(tmp38, obj);
      return tmp36(require("Background").BottomSheet, obj41);
    }
    return;
  }
}

export default GuildRoleConnectionsConnectAccountsActionSheet;
