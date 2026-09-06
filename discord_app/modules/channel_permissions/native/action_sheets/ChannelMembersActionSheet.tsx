// === Module 11609: ChannelMembersActionSheet ===

// Module 11609 (ChannelMembersActionSheet)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import useNavigation from "useNavigation" /* 1483 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import Pressables from "Pressables" /* 5123 */;
import BottomSheetModal from "BottomSheetModal" /* 6627 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7149 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import SettingsIcon from "SettingsIcon" /* 7380 */;
import RowButton from "RowButton" /* 8595 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 8625 */;
import ChannelPermissionsUtils from "ChannelPermissionsUtils" /* 9738 */;
import ChannelOverwritesItemDefault from "ChannelOverwritesItem" /* 9751 */;
import GroupPlusIcon from "GroupPlusIcon" /* 10032 */;
import channel_permissions_ChannelPermissionsUtils from "channel_permissions/ChannelPermissionsUtils" /* 11608 */;
import AppChannelPermissionUtils from "AppChannelPermissionUtils" /* 11610 */;
import ChannelDetailsUtils from "ChannelDetailsUtils" /* 11612 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ ChannelSettingsSections: closure_9, Permissions: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = { container: { paddingHorizontal: 16, flex: 1 }, sectionRowWrapper: null, warning: null };
createStyles = { paddingVertical: nativeDefault.space.PX_12 };
createStyles.sectionRowWrapper = createStyles;
createStyles.warning = { margin: 16, marginBottom: 0 };
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_permissions/native/action_sheets/ChannelMembersActionSheet.tsx");

export default function ChannelMembersActionSheet(arg0) {
  ({ channelId: require, guildId: importDefault } = arg0);
  closure_4 = undefined;
  c5 = undefined;
  const tmp = closure_13();
  dependencyMap = tmp;
  let obj = initialize;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj1 = initialize;
  const items1 = [GuildStore, GuildRoleStore];
  const items2 = [stateFromStores];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => {
    let obj = stateFromStores;
    guildId = undefined;
    if (stateFromStores != null) {
      guildId = obj.getGuildId();
    }
    const guild = GuildStore.getGuild(guildId);
    obj = { guild, sortedGuildRoles: null };
    let sortedRoles;
    if (null != guild) {
      sortedRoles = GuildRoleStore.getSortedRoles(guild.id);
    }
    obj.sortedGuildRoles = sortedRoles;
    return obj;
  }, items2);
  ({ guild, sortedGuildRoles } = stateFromStoresObject);
  let obj2 = initialize;
  const items3 = [c5];
  const items4 = [stateFromStores];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items3, () => {
    guildId = undefined;
    if (stateFromStores != null) {
      guildId = stateFromStores.getGuildId();
    }
    return GuildMemberStore.getMemberIds(guildId);
  }, items4);
  let obj3 = useNavigation;
  closure_4 = obj3.useNavigation();
  const tmp4 = useSafeAreaInsetsDefault();
  AppChannelPermissionUtils;
  if (null != stateFromStores) {
    if (null != guild) {
      if (null != sortedGuildRoles) {
        const canResult = PermissionStore.can(constants2.MANAGE_ROLES, stateFromStores);
        c5 = canResult;
        let tmp5Result = ChannelPermissionsUtils;
        const existingRolesRows = tmp5Result.getExistingRolesRows(guild, sortedGuildRoles, stateFromStores, stateFromStores.accessPermissions);
        tmp5Result = ChannelPermissionsUtils;
        obj = { appChannelBotUserId: tmp11 };
        const items5 = [];
        obj = { title: null, data: null };
        const existingMembersRows = tmp5Result.getExistingMembersRows(stateFromStoresArray, stateFromStores, guild, stateFromStores.accessPermissions, obj);
        const intl4 = util.intl;
        obj.title = intl4.string(util.t["LPJmL/"]);
        obj.data = existingRolesRows;
        items5.push(obj);
        obj1 = { title: null, data: null };
        const intl5 = util.intl;
        obj1.title = intl5.string(util.t["9Oq93m"]);
        obj1.data = existingMembersRows;
        items5.push(obj1);
        obj2 = { title: null, subtitle: null, trailing: null };
        const intl6 = util.intl;
        obj2.title = intl6.string(util.t.ES4CC6);
        const _HermesInternal = HermesInternal;
        obj2.subtitle = "#" + tmp9;
        let tmp32Result = canResult;
        if (canResult) {
          obj3 = {
            onPress() {
                      ActionSheetActionCreatorsDefault.hideActionSheet();
                      ChannelSettingsActionCreatorsDefault.init(channelId);
                      const result = ChannelDetailsUtils.navigateToChannelDetailsScreen(closure_4, constants.PERMISSIONS, channelId, "channel-members-action-sheet");
                    },
            accessibilityRole: "button",
            accessibilityLabel: null,
            children: null
          };
          let intl = util.intl;
          obj3.accessibilityLabel = intl.string(util.t.XPDhcc);
          obj3.children = closure_11(SettingsIcon.SettingsIcon, {});
          tmp32Result = closure_11(Pressables.PressableOpacity, obj3);
        }
        const obj4 = { scrollable: true, header: null, startExpanded: true, children: null };
        obj2.trailing = tmp32Result;
        obj4.header = closure_11(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
        const obj5 = { style: tmp.container, children: null };
        if (canResult) {
          const obj6 = { label: null, onPress: null, icon: null };
          const intl3 = util.intl;
          obj6.label = intl3.string(util.t.dMJ3Y6);
          obj6.onPress = function onPress() {
            return channel_permissions_ChannelPermissionsUtils.openAddMembersActionSheet(stateFromStores);
          };
          obj6.icon = closure_11(GroupPlusIcon.GroupPlusIcon, {});
          tmp32Result = closure_11(RowButton.RowButton, obj6);
        } else {
          const obj7 = { style: tmp.warning, children: null };
          const obj8 = { messageType: native.HelpMessageTypes.INFO, children: null };
          const intl2 = util.intl;
          obj8.children = intl2.string(util.t.VOuiSj);
          obj7.children = closure_11(native.HelpMessage, obj8);
          tmp32Result = closure_11(tmp14, obj7);
        }
        const items6 = [tmp32Result, ];
        const obj9 = { contentContainerStyle: null, renderItem: null, renderSectionHeader: null, sections: null, stickySectionHeadersEnabled: false };
        const obj10 = { paddingBottom: tmp4.bottom + nativeDefault.space.PX_16 };
        obj9.contentContainerStyle = obj10;
        obj9.renderItem = function renderItem(index) {
          index = index.index;
          ({ item, section } = index);
          return closure_2_11(ChannelOverwritesItemDefault, { start: 0 === index, end: index === section.data.length - 1, guildId, item, channelId, showType: true, showRemove });
        };
        obj9.renderSectionHeader = function renderSectionHeader(section) {
          ({ title, data } = section.section);
          let obj = { style: sectionRowWrapper.sectionRowWrapper, maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default", children: null };
          const intl = util.intl;
          obj = { numberOfItems: data.length, sectionTitle: title };
          obj.children = intl.format(util.t.u8CWLl, obj);
          return closure_2_11(Text_Text.Text, obj);
        };
        obj9.sections = items5;
        items6[1] = closure_11(BottomSheetModal.BottomSheetSectionList, obj9);
        obj5.children = items6;
        obj4.children = closure_12(stateFromStores, obj5);
        return closure_11(Sheet_BottomSheet.BottomSheet, obj4);
      }
    }
  }
  return null;
};