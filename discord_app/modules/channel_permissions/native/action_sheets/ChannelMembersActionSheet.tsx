// discord_app/modules/channel_permissions/native/action_sheets/ChannelMembersActionSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl7 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import BottomSheetModal from "../../../../../_runtime/06119_BottomSheetModal.js";
import BottomSheetTitleHeader2 from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import SettingsIcon from "../../../../design/components/Icon/native/redesign/generated/SettingsIcon.tsx";
import RowButton2 from "../../../../design/components/TableRow/native/RowButton.native.tsx";
import ChannelPermissionsUtils from "../../ChannelPermissionsUtils.tsx";
import ChannelOverwritesItemDefault from "../components/ChannelOverwritesItem.tsx";
import GroupPlusIcon from "../../../../design/components/Icon/native/redesign/generated/GroupPlusIcon.tsx";
import ChannelSettingsActionCreatorsDefault from "../../../../actions/ChannelSettingsActionCreators.tsx";
import channel_permissions_ChannelPermissionsUtils from "../ChannelPermissionsUtils.tsx";
import AppChannelPermissionUtils from "../../../app_channels/AppChannelPermissionUtils.tsx";
import ChannelDetailsUtils from "../../../main_tabs_v2/native/sidebar/details/ChannelDetailsUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let BottomSheet, dependencyMap, navigation, obj1;

let c10;
let c9;
let closure_12;
let obj2;
let unpackModuleId;
const View = react_native.View;
({ ChannelSettingsSections: c9, Permissions: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let obj = {
  container: { paddingHorizontal: 16, flex: 1 },
  sectionRowWrapper: obj2,
  warning: { margin: 16, marginBottom: 0 },
};
obj2 = { paddingVertical: nativeDefault.space.PX_12 };
let closure_13 = createStyles.createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let guild;
      let sectionRowWrapper;
      let showRemove;
      let sortedGuildRoles;
      let tmp11;
      let tmp14;
      let tmp16;
      let tmp18;
      let obj = channelId(576);
      const cResult = obj.c(65);
      channelId = channelId.channelId;
      let guildId = channelId.guildId;
      dependencyMap = closure_13();
      closure_13();
      guildId(1618)();
      const tmp5 = guildId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [navigation];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        class I {
          constructor() {
            return closure_4.getChannel(channelId);
          }
        }
        cResult[1] = channelId;
        cResult[2] = I;
      } else {
        class I {
          constructor() {
            return closure_4.getChannel(channelId);
          }
        }
      }
      const tmpResult = channelId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, I);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            return closure_4.getChannel(channelId);
          }
        }
        const items1 = [GuildStore, GuildRoleStore];
        cResult[3] = items1;
        tmp11 = items1;
      } else {
        class I {
          constructor() {
            return closure_4.getChannel(channelId);
          }
        }
      }
      if (cResult[4] !== stateFromStores) {
        class M {
          constructor() {
            obj = closure_3;
            guildId = undefined;
            tmp = closure_7;
            getGuild = closure_7.getGuild;
            if (closure_3 != null) {
              guildId = obj.getGuildId();
            }
            guild = getGuild(guildId);
            obj1 = { guild, sortedGuildRoles: null };
            sortedRoles = undefined;
            if (null != guild) {
              tmp5 = closure_6;
              sortedRoles = closure_6.getSortedRoles(guild.id);
            }
            obj1.sortedGuildRoles = sortedRoles;
            return obj1;
          }
        }
        const items2 = [stateFromStores];
        cResult[4] = stateFromStores;
        cResult[5] = M;
        cResult[6] = items2;
        tmp14 = items2;
      } else {
        class M {
          constructor() {
            obj = closure_3;
            guildId = undefined;
            tmp = closure_7;
            getGuild = closure_7.getGuild;
            if (closure_3 != null) {
              guildId = obj.getGuildId();
            }
            guild = getGuild(guildId);
            obj1 = { guild, sortedGuildRoles: null };
            sortedRoles = undefined;
            if (null != guild) {
              tmp5 = closure_6;
              sortedRoles = closure_6.getSortedRoles(guild.id);
            }
            obj1.sortedGuildRoles = sortedRoles;
            return obj1;
          }
        }
        tmp14 = cResult[6];
      }
      const tmpResult5 = channelId(504);
      const stateFromStoresObject = tmpResult5.useStateFromStoresObject(tmp11, M, tmp14);
      ({ guild, sortedGuildRoles } = stateFromStoresObject);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor() {
            obj = closure_3;
            guildId = undefined;
            tmp = closure_7;
            getGuild = closure_7.getGuild;
            if (closure_3 != null) {
              guildId = obj.getGuildId();
            }
            guild = getGuild(guildId);
            obj1 = { guild, sortedGuildRoles: null };
            sortedRoles = undefined;
            if (null != guild) {
              tmp5 = closure_6;
              sortedRoles = closure_6.getSortedRoles(guild.id);
            }
            obj1.sortedGuildRoles = sortedRoles;
            return obj1;
          }
        }
        const items3 = [GuildMemberStore];
        cResult[7] = items3;
        tmp16 = items3;
      } else {
        class M {
          constructor() {
            obj = closure_3;
            guildId = undefined;
            tmp = closure_7;
            getGuild = closure_7.getGuild;
            if (closure_3 != null) {
              guildId = obj.getGuildId();
            }
            guild = getGuild(guildId);
            obj1 = { guild, sortedGuildRoles: null };
            sortedRoles = undefined;
            if (null != guild) {
              tmp5 = closure_6;
              sortedRoles = closure_6.getSortedRoles(guild.id);
            }
            obj1.sortedGuildRoles = sortedRoles;
            return obj1;
          }
        }
      }
      if (cResult[8] !== stateFromStores) {
        class A {
          constructor() {
            obj = closure_3;
            guildId = undefined;
            tmp = closure_5;
            getMemberIds = closure_5.getMemberIds;
            if (closure_3 != null) {
              guildId = obj.getGuildId();
            }
            return getMemberIds(guildId);
          }
        }
        const items4 = [stateFromStores];
        cResult[8] = stateFromStores;
        cResult[9] = A;
        cResult[10] = items4;
        tmp18 = items4;
      } else {
        class A {
          constructor() {
            obj = closure_3;
            guildId = undefined;
            tmp = closure_5;
            getMemberIds = closure_5.getMemberIds;
            if (closure_3 != null) {
              guildId = obj.getGuildId();
            }
            return getMemberIds(guildId);
          }
        }
        tmp18 = cResult[10];
      }
      const tmpResult6 = channelId(504);
      const stateFromStoresArray = tmpResult6.useStateFromStoresArray(tmp16, A, tmp18);
      const tmpResult7 = channelId(1490);
      navigation = tmpResult7.useNavigation();
      tmp5(5049)(stateFromStores);
      const tmpResult8 = channelId(11245);
      const appChannelBotUserId = tmpResult8.useAppChannelBotUserId(stateFromStores);
      if (null != stateFromStores) {
        class A {
          constructor() {
            obj = closure_3;
            guildId = undefined;
            tmp = closure_5;
            getMemberIds = closure_5.getMemberIds;
            if (closure_3 != null) {
              guildId = obj.getGuildId();
            }
            return getMemberIds(guildId);
          }
        }
      }
      return null;
    }
  : (arg0) => {
      let HelpMessage;
      let channelId;
      let guild;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let items6;
      let obj11;
      let obj14;
      let obj16;
      let sectionRowWrapper;
      let showRemove;
      let sortedGuildRoles;
      let tmp32Result;
      ({ channelId: require, guildId: importDefault } = arg0);
      let closure_4;
      let c5;
      const tmp = closure_13();
      dependencyMap = tmp;
      const tmp4 = useSafeAreaInsetsDefault();
      let obj = get_initialized;
      const items = [closure_4];
      const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(require));
      let obj2 = get_initialized;
      const items1 = [GuildStore, GuildRoleStore];
      const items2 = [stateFromStores];
      const stateFromStoresObject = obj2.useStateFromStoresObject(
        items1,
        () => {
          let sortedRoles;
          guildId = undefined;
          const getGuild = GuildStore.getGuild;
          if (stateFromStores != null) {
            guildId = stateFromStores.getGuildId();
          }
          const guild = getGuild(guildId);
          const obj2 = { guild, sortedGuildRoles: sortedRoles };
          sortedRoles = undefined;
          if (null != guild) {
            sortedRoles = GuildRoleStore.getSortedRoles(guild.id);
          }
          return obj2;
        },
        items2,
      );
      ({ guild, sortedGuildRoles } = stateFromStoresObject);
      let obj3 = get_initialized;
      const items3 = [c5];
      const items4 = [stateFromStores];
      const stateFromStoresArray = obj3.useStateFromStoresArray(
        items3,
        () => {
          guildId = undefined;
          const getMemberIds = GuildMemberStore.getMemberIds;
          if (stateFromStores != null) {
            guildId = stateFromStores.getGuildId();
          }
          return getMemberIds(guildId);
        },
        items4,
      );
      const obj4 = useNavigation;
      closure_4 = obj4.useNavigation();
      const tmp9 = useChannelNameDefault(stateFromStores);
      AppChannelPermissionUtils;
      if (null != stateFromStores) {
        if (null != guild) {
          if (null != sortedGuildRoles) {
            let tmp32Result2;
            const canResult = PermissionStore.can(constants2.MANAGE_ROLES, stateFromStores);
            c5 = canResult;
            const tmp5Result = ChannelPermissionsUtils;
            const existingRolesRows = tmp5Result.getExistingRolesRows(
              guild,
              sortedGuildRoles,
              stateFromStores,
              stateFromStores.accessPermissions,
            );
            const items5 = [];
            const obj5 = { appChannelBotUserId: tmp11 };
            const tmp5Result2 = ChannelPermissionsUtils;
            const obj6 = { title: intl4.string(intl7.t["LPJmL/"]), data: existingRolesRows };
            const existingMembersRows = tmp5Result2.getExistingMembersRows(
              stateFromStoresArray,
              stateFromStores,
              guild,
              stateFromStores.accessPermissions,
              obj5,
            );
            const push = items5.push;
            intl4 = intl7.intl;
            push(obj6);
            const push2 = items5.push;
            const obj7 = { title: intl5.string(intl7.t["9Oq93m"]), data: existingMembersRows };
            intl5 = intl7.intl;
            push2(obj7);
            BottomSheet = Sheet_BottomSheet.BottomSheet;
            const obj8 = { title: intl6.string(intl7.t.ES4CC6), subtitle: "#" + tmp9, trailing: tmp32Result };
            const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
            intl6 = intl7.intl;
            const _HermesInternal = HermesInternal;
            tmp32Result = canResult;
            if (tmp32Result) {
              const obj9 = {
                onPress() {
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet();
                  const obj2 = ChannelSettingsActionCreatorsDefault;
                  obj2.init(require);
                  const obj3 = ChannelDetailsUtils;
                  const result = obj3.navigateToChannelDetailsScreen(
                    closure_4,
                    constants.PERMISSIONS,
                    require,
                    "channel-members-action-sheet",
                  );
                },
                accessibilityRole: "button",
                accessibilityLabel: intl.string(intl7.t.XPDhcc),
                children: closure_11(SettingsIcon.SettingsIcon, {}),
              };
              const PressableOpacity = Pressables.PressableOpacity;
              intl = intl7.intl;
              tmp32Result = closure_11(PressableOpacity, obj9);
            }
            const obj10 = {
              scrollable: true,
              header: closure_11(BottomSheetTitleHeader, obj8),
              startExpanded: true,
              children: closure_12(stateFromStores, obj11),
            };
            obj11 = { style: tmp.container, children: items6 };
            if (canResult) {
              const obj12 = {
                label: intl3.string(intl7.t.dMJ3Y6),
                onPress() {
                  const obj = channel_permissions_ChannelPermissionsUtils;
                  return obj.openAddMembersActionSheet(stateFromStores);
                },
                icon: closure_11(GroupPlusIcon.GroupPlusIcon, {}),
              };
              const RowButton = RowButton2.RowButton;
              intl3 = intl7.intl;
              tmp32Result2 = closure_11(RowButton, obj12);
            } else {
              const obj13 = { style: tmp.warning, children: closure_11(HelpMessage, obj14) };
              obj14 = { messageType: native.HelpMessageTypes.INFO, children: intl2.string(intl7.t.VOuiSj) };
              HelpMessage = native.HelpMessage;
              intl2 = intl7.intl;
              tmp32Result2 = closure_11(tmp14, obj13);
            }
            items6 = [tmp32Result2];
            const obj15 = {
              contentContainerStyle: obj16,
              renderItem(index) {
                let item;
                let section;
                index = index.index;
                ({ item, section } = index);
                const obj = {
                  start: 0 === index,
                  end: index === section.data.length - 1,
                  guildId: importDefault,
                  item,
                  channelId: require,
                  showType: true,
                  showRemove,
                };
                return unpackModuleId(ChannelOverwritesItemDefault, obj);
              },
              renderSectionHeader(section) {
                let data;
                let intl;
                let obj2;
                let title;
                ({ title, data } = section.section);
                const obj = {
                  style: sectionRowWrapper.sectionRowWrapper,
                  maxFontSizeMultiplier: 2,
                  accessibilityRole: "header",
                  variant: "text-sm/semibold",
                  color: "interactive-text-default",
                  children: intl.format(intl7.t.u8CWLl, obj2),
                };
                const Text = Text_Text.Text;
                intl = intl7.intl;
                obj2 = { numberOfItems: data.length, sectionTitle: title };
                return unpackModuleId(Text, obj);
              },
              sections: items5,
              stickySectionHeadersEnabled: false,
            };
            obj16 = { paddingBottom: tmp4.bottom + nativeDefault.space.PX_16 };
            const BottomSheetSectionList = BottomSheetModal.BottomSheetSectionList;
            items6[1] = closure_11(BottomSheetSectionList, obj15);
            return closure_11(BottomSheet, obj10);
          }
        }
      }
      return null;
    };
let result = size.fileFinishedImporting(
  "modules/channel_permissions/native/action_sheets/ChannelMembersActionSheet.tsx",
);

export default tmp5;
