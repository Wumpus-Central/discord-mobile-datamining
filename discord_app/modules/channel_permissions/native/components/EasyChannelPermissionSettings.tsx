// discord_app/modules/channel_permissions/native/components/EasyChannelPermissionSettings.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import setDefault from "../../../../actions/AlertActionCreators.tsx";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_6 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_9 from "../../../../stores/ChannelSettingsPermissionsStore.tsx";
import closure_10 from "../../../../stores/ChannelStore.tsx";
import closure_11 from "../../../../stores/GuildMemberStore.tsx";
import closure_12 from "../../../../stores/GuildRoleStore.tsx";
import closure_13 from "../../../../stores/GuildStore.tsx";
import closure_14 from "../../../../stores/PermissionStore.tsx";
import closure_15 from "../../../../stores/RelationshipStore.tsx";
import closure_16 from "../../../../stores/UserStore.tsx";
import { SettingMode } from "../../ChannelPermissionsConstants.tsx";
import ME from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function ChannelPermissionSettingsBasicView(channel) {
  channel = channel.channel;
  const privateToggleState = channel.privateToggleState;
  const setPrivateToggleState = channel.setPrivateToggleState;
  let navigation;
  let guild;
  let sortedGuildRoles;
  c9 = undefined;
  function togglePrivateChannel() {
    const self = this;
    const apply = _togglePrivateChannel.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  function _togglePrivateChannel() {
    const self = this;
    const tmp = sortedGuildRoles(function*() {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          dependencyMap = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp5;
              closure_0 = tmp2;
              closure_0 = undefined;
              const accessPermissions = closure_1_0.accessPermissions;
              const result = v0(9628).isPrivateGuildChannel(closure_1_0);
              const obj9 = v0(9628);
              const tmp22 = v0;
              closure_0 = v0(9628).flipEveryonePermission(closure_1_0, accessPermissions, result);
              const currentUser = closure_1_16.getCurrentUser();
              let tmp7 = closure_1_9;
              const obj10 = v0(9628);
              if (!closure_1_9) {
                tmp7 = null == currentUser;
              }
              if (!tmp7) {
                tmp7 = canResult;
              }
              if (!tmp7) {
                v0 = 1;
                dependencyMap = 1;
                obj1 = { value: null, done: false };
                obj1[0] = tmp22(9628).grantUserChannelAccess(closure_1_0, accessPermissions);
                return obj1;
              }
              canResult = closure_1_14.can(closure_1_19.ADMINISTRATOR, closure_1_4);
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            dependencyMap = 3;
            return { value: "HermesInternal", done: null };
          }
          const items = [closure_0];
          v0 = 2;
          dependencyMap = 1;
          const obj3 = { value: null, done: false };
          obj3[0] = closure_1_0(9629).savePermissionUpdates(closure_1_0.id, items);
          return obj3;
        } catch (tmp16) {
          dependencyMap = tmp;
          throw tmp16;
        }
      }
    });
    closure_7 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  function _onPrivateChannelSwitchChange() {
    const self = this;
    const tmp = sortedGuildRoles(function*() {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          dependencyMap = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c1 = tmp2;
              c0 = tmp5;
              c0 = undefined;
              c1 = undefined;
              v0 = undefined;
              if (null != stringResult.guild_id) {
                if (!callback) {
                  obj1 = stringResult(9630);
                  v0 = 1;
                  dependencyMap = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = obj1.checkChattableChannelThresholdMetAfterChannelPermissionDeny(stringResult, closure_1_19.VIEW_CHANNEL);
                  return obj1;
                }
              }
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else if (!arg1) {
            dependencyMap = 3;
            return { value: "HermesInternal", done: null };
          }
          const intl = stringResult(1236).intl;
          const string = intl.string;
          const t = stringResult(1236).t;
          if (c1) {
            stringResult = string(t.vw48TT);
          } else {
            stringResult = string(t["47gQYL"]);
          }
          let obj3 = stringResult(4639);
          callback = obj3.computeChannelName(stringResult, closure_1_16, closure_1_15);
          let intl2 = stringResult(1236).intl;
          let onCancel = intl2.format;
          let show = stringResult(1236).t;
          if (callback) {
            const obj2 = { channelName: null };
            obj2[0] = c1;
            let onCancelResult = onCancel(show.hGzPnx, obj2);
          } else {
            obj3 = { channelName: null };
            obj3[0] = c1;
            onCancelResult = onCancel(show.rKzX1E, obj3);
          }
          v0 = onCancelResult;
          v0(!c1);
          show = callback(4809).show;
          const obj4 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, hideActionSheet: false, onCancel: null };
          obj4[0] = c0;
          obj4[1] = v0;
          const intl3 = stringResult(1236).intl;
          obj4[2] = intl3.string(stringResult(1236).t["ETE/oC"]);
          const intl4 = stringResult(1236).intl;
          obj4[3] = intl4.string(stringResult(1236).t.p89ACt);
          intl2 = closure_6;
          obj4[4] = closure_6;
          onCancel = function onCancel() {
            v1(v1(table[19]).isPrivateGuildChannel(c0));
          };
          obj4[6] = onCancel;
          show(obj4);
          dependencyMap = 3;
          const tmp42 = callback(4809);
        } catch (tmp54) {
          dependencyMap = tmp;
          throw tmp54;
        }
      }
    });
    closure_8 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback3();
  let obj = channel(navigation[17]);
  navigation = obj.useNavigation();
  obj1 = channel(navigation[18]);
  let items = [closure_13, closure_12];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => {
    guild = closure_1_13.getGuild(channel.getGuildId());
    const obj = { guild, sortedGuildRoles: null };
    let sortedRoles;
    if (null != guild) {
      sortedRoles = closure_1_12.getSortedRoles(guild.id);
    }
    obj[1] = sortedRoles;
    return obj;
  });
  guild = stateFromStoresObject.guild;
  sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
  const items1 = [navigation];
  const layoutEffect = togglePrivateChannel.useLayoutEffect(() => {
    navigation.setOptions({ headerRight: "r" });
  }, items1);
  const items2 = [guild, sortedGuildRoles, channel];
  const memo = togglePrivateChannel.useMemo(() => {
    if (null != guild) {
      if (null != sortedGuildRoles) {
        const obj = setPrivateToggleState(navigation[19]);
        const existingRolesRows = obj.getExistingRolesRows(tmp, tmp2, channel, channel.accessPermissions);
      }
      return [];
    }
  }, items2);
  if (null != guild) {
    if (null != sortedGuildRoles) {
      let id;
      if (guild != null) {
        id = guild.id;
      }
      memberIds = memberIds.getMemberIds(id);
      let obj2 = setPrivateToggleState(tmp3[19]);
      const existingMembersRows = obj2.getExistingMembersRows(memberIds, channel, guild, channel.accessPermissions);
      let obj3 = setPrivateToggleState(tmp3[19]);
      let result = obj3.isPrivateGuildChannel(channel);
      c9 = result;
      let obj4 = setPrivateToggleState(tmp3[26]);
      const isCategoryResult = channel.isCategory();
      let obj5 = setPrivateToggleState(tmp3[26]);
      const canEveryoneRoleResult1 = obj5.canEveryoneRole(constants2.ADMINISTRATOR, guild);
      const type = channel.type;
      let string = tmp2(tmp3[22]).intl.string;
      if (type === constants.GUILD_CATEGORY) {
        let intl2 = tmp2(tmp3[22]).intl;
        let stringResult = intl2.string(tmp2(tmp3[22]).t.RQUk61);
      } else {
        stringResult = tmp18;
        if (type === tmp19.GUILD_VOICE) {
          let intl = tmp2(tmp3[22]).intl;
          stringResult = intl.string(tmp2(tmp3[22]).t.cLjvKg);
        }
      }
      obj = { style: null, spacing: null, children: null };
      obj = { paddingHorizontal: null };
      obj[0] = privateToggleState(tmp3[16]).space.PX_16;
      obj[0] = obj;
      obj[1] = privateToggleState(tmp3[16]).space.PX_16;
      obj1 = { title: null, hasIcons: false, children: null };
      obj1[0] = stringResult;
      let intl3 = tmp2(tmp3[22]).intl;
      const string2 = intl3.string;
      let t = tmp2(tmp3[22]).t;
      if (isCategoryResult) {
        let string2Result = string2(t.lEPAZ5);
      } else {
        string2Result = string2(t.aUI70g);
      }
      obj2 = { label: null, value: null, onValueChange: null };
      obj2[0] = string2Result;
      obj2[1] = privateToggleState;
      obj2[2] = function onPrivateChannelSwitchChange() {
        const self = this;
        const apply = _onPrivateChannelSwitchChange.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj1[2] = closure_23(tmp2(tmp3[29]).TableSwitchRow, obj2);
      const items3 = [closure_23(tmp2(tmp3[28]).TableRowGroup, obj1), , , , , ];
      let tmp23Result = canEveryoneRoleResult1;
      if (canEveryoneRoleResult1) {
        obj3 = { style: null, children: null };
        obj3[0] = tmp.adminWarning;
        obj4 = { messageType: null, children: null };
        obj4[0] = tmp2(tmp3[30]).HelpMessageTypes.WARNING;
        let intl4 = tmp2(tmp3[22]).intl;
        obj4[1] = intl4.string(tmp2(tmp3[22]).t["5f3HIC"]);
        obj3[1] = tmp23(tmp2(tmp3[30]).HelpMessage, obj4);
        tmp23Result = tmp23(_togglePrivateChannel, obj3);
      }
      items3[1] = tmp23Result;
      tmp23Result = !canEveryoneRoleResult1;
      if (!canEveryoneRoleResult1) {
        tmp23Result = !canEveryoneRoleResult;
      }
      if (tmp23Result) {
        tmp23Result = !result;
      }
      if (tmp23Result) {
        obj5 = { style: null, children: null };
        obj5[0] = tmp.adminWarning;
        const obj6 = { messageType: null, children: null };
        obj6[0] = tmp2(tmp3[30]).HelpMessageTypes.WARNING;
        const intl5 = tmp2(tmp3[22]).intl;
        obj6[1] = intl5.string(tmp2(tmp3[22]).t.ZAk4Q9);
        obj5[1] = tmp23(tmp2(tmp3[30]).HelpMessage, obj6);
        tmp23Result = tmp23(_togglePrivateChannel, obj5);
      }
      items3[2] = tmp23Result;
      const obj7 = { hasIcons: true, children: null };
      const obj8 = { arrow: true, icon: null, label: null, onPress: null };
      obj8[1] = closure_23(tmp2(tmp3[32]).CirclePlusIcon, {});
      const intl6 = tmp2(tmp3[22]).intl;
      obj8[2] = intl6.string(tmp2(tmp3[22]).t.dMJ3Y6);
      obj8[3] = function onPress() {
        if (null != channel) {
          const result = channel(navigation[33]).openAddMembersActionSheet(tmp);
          const obj = channel(navigation[33]);
        }
      };
      obj7[1] = closure_23(tmp2(tmp3[31]).TableRow, obj8);
      items3[3] = closure_23(tmp2(tmp3[28]).TableRowGroup, obj7);
      let obj9 = { title: null, hasIcons: true, children: null };
      const intl7 = tmp2(tmp3[22]).intl;
      obj9[0] = intl7.string(tmp2(tmp3[22]).t.ES4CC6);
      obj9[2] = memo.map((id) => closure_1_23(privateToggleState(navigation[25]), { item: id, channelId: channel.id, showType: true, showRemove: true, guildId: channel.guild_id }, id.id));
      items3[4] = closure_23(tmp2(tmp3[28]).TableRowGroup, obj9);
      let obj10 = { hasIcons: true, children: null };
      obj10[1] = existingMembersRows.map((id) => closure_1_23(privateToggleState(navigation[25]), { item: id, channelId: channel.id, showType: true, showRemove: true, guildId: channel.guild_id }, id.id));
      items3[5] = closure_23(tmp2(tmp3[28]).TableRowGroup, obj10);
      obj[2] = items3;
      return closure_24(tmp2(tmp3[27]).Stack, obj);
    }
  }
  return null;
}
function onBack() {
  setDefault.close();
  return false;
}
({ View: error, ScrollView: closure_8 } = get_ActivityIndicator);
({ ChannelTypes: closure_18, Permissions: closure_19, AnalyticEvents: closure_20, ChannelSettingsSections: closure_21, SettingsPaneTypes: closure_22 } = ME);
({ jsx: closure_23, jsxs: closure_24 } = jsxProd);
let closure_25 = { BASIC: 0, [0]: "BASIC", ADVANCED: 1, [1]: "ADVANCED", MODERATORS: 2, [2]: "MODERATORS" };
createCacheKey = { container: null, content: null, adminWarning: null };
createCacheKey = { flex: 1, paddingTop: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: 16, flex: 1 };
createCacheKey[2] = { marginTop: ThemesDefault.space.PX_12 };
let closure_26 = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginTop: ThemesDefault.space.PX_12 };
let result = require("set").fileFinishedImporting("modules/channel_permissions/native/components/EasyChannelPermissionSettings.tsx");

export default function EasyChannelPermissionSettings(arg0) {
  ({ channelId: require, origin } = arg0);
  let stateFromStores;
  let first;
  let callback;
  closure_5 = undefined;
  let obj = require(first[34]);
  obj.useNavigatorBackPressHandler(onBack);
  const tmp4 = callback3();
  obj1 = require(first[18]);
  const items = [closure_10];
  stateFromStores = obj1.useStateFromStores(items, () => closure_1_10.getChannel(closure_0));
  let obj3 = require(first[18]);
  const items1 = [closure_9];
  let obj4 = React;
  let isGuildStageVoiceResult;
  const stateFromStores1 = obj3.useStateFromStores(items1, () => advancedMode.advancedMode);
  if (stateFromStores != null) {
    isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
  }
  if (isGuildStageVoiceResult) {
    let BASIC = tmp7.MODERATORS;
    let tmp8 = tmp7;
  } else if (stateFromStores1) {
    BASIC = tmp7.ADVANCED;
    tmp8 = tmp7;
  } else {
    BASIC = tmp7.BASIC;
    tmp8 = tmp7;
  }
  const tmp9 = callback(React.useState(BASIC), 2);
  first = tmp9[0];
  callback = tmp9[1];
  let obj5 = stateFromStores(tmp2[19]);
  const tmp11 = callback(obj4.useState(obj5.isPrivateGuildChannel(stateFromStores)), 2);
  closure_5 = tmp12;
  const items2 = [origin];
  const effect = obj4.useEffect(() => {
    let obj = origin(first[35]);
    let CHANNEL_SETTINGS = null;
    if (origin === closure_1_21.OVERVIEW) {
      CHANNEL_SETTINGS = closure_1_22.CHANNEL_SETTINGS;
    }
    obj = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: closure_1_21.PERMISSIONS };
    obj.trackWithMetadata(closure_1_20.SETTINGS_PANE_VIEWED, obj);
  }, items2);
  const items3 = [stateFromStores];
  callback = obj4.useCallback((arg0) => {
    if (arg0 === closure_1_25.ADVANCED) {
      closure_1_0(first[20]).setAdvancedMode(true);
      const obj3 = closure_1_0(first[20]);
    } else {
      callback2(stateFromStores(first[19]).isPrivateGuildChannel(stateFromStores));
      const obj = stateFromStores(first[19]);
      closure_1_0(first[20]).setAdvancedMode(false);
      const obj2 = closure_1_0(first[20]);
    }
    callback(arg0);
  }, items3);
  const intl = tmp(tmp2[22]).intl;
  const items4 = [intl.string(require(first[22]).t["Mw/UDN"]), ];
  const intl2 = tmp(tmp2[22]).intl;
  items4[1] = intl2.string(require(first[22]).t["0a6awf"]);
  let isGuildStageVoiceResult1;
  if (stateFromStores != null) {
    isGuildStageVoiceResult1 = stateFromStores.isGuildStageVoice();
  }
  if (true === isGuildStageVoiceResult1) {
    const intl3 = tmp(tmp2[22]).intl;
    items4.push(intl3.string(tmp(tmp2[22]).t.YIIUJ3));
  }
  obj = { pageWidth: 0, defaultIndex: first, onSetActiveIndex: callback, items: items4.map((id) => ({ id, label: id, page: null })) };
  const items5 = [stateFromStores, first];
  const segmentedControlState = require(first[36]).useSegmentedControlState(obj);
  const effect1 = obj4.useEffect(() => {
    let obj = origin(first[35]);
    if (first === closure_1_25.BASIC) {
      let ADVANCED = closure_1_17.BASIC;
    } else {
      ADVANCED = closure_1_17.ADVANCED;
    }
    obj = { mode: ADVANCED, channel_is_private: stateFromStores(first[19]).isPrivateGuildChannel(stateFromStores) };
    obj.trackWithMetadata(closure_1_20.CHANNEL_PERMISSIONS_PAGE_VIEWED, obj);
  }, items5);
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp4.container;
    obj1 = { style: null, children: null };
    let obj2 = { paddingHorizontal: null };
    obj2[0] = origin(tmp2[16]).space.PX_12;
    obj1[0] = obj2;
    obj3 = { state: null };
    obj3[0] = segmentedControlState;
    obj1[1] = callback2(tmp(tmp2[37]).SegmentedControl, obj3);
    const items6 = [callback2(closure_7, obj1), ];
    obj4 = { style: null, children: null };
    obj4[0] = tmp4.content;
    if (first === tmp8.BASIC) {
      obj5 = { channel: null, privateToggleState: null, setPrivateToggleState: null };
      obj5[0] = stateFromStores;
      obj5[1] = tmp11[0];
      obj5[2] = tmp12;
      let tmp21Result = tmp21(ChannelPermissionSettingsBasicView, obj5);
    } else if (first === tmp8.MODERATORS) {
      const obj6 = { channel: null };
      obj6[0] = stateFromStores;
      tmp21Result = tmp21(tmp22(tmp2[38]), obj6);
    } else {
      const obj7 = { channelId: null };
      obj7[0] = stateFromStores.id;
      tmp21Result = tmp21(tmp22(tmp2[39]), obj7);
    }
    obj4[1] = tmp21Result;
    obj4 = tmp21(closure_8, obj4);
    items6[1] = obj4;
    obj[1] = items6;
    closure_24(closure_7, obj);
    const tmp19 = closure_24;
    const tmp20 = closure_7;
    const tmp23 = closure_8;
  }
};