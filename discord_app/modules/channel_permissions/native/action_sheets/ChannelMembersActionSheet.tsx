// discord_app/modules/channel_permissions/native/action_sheets/ChannelMembersActionSheet.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import PressableBase from "../../../../design/void/Pressables/native/Pressables.tsx";
import RedesignBottomSheetTitleHeaderBase from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Background from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import BottomSheetModal from "../../../../../_runtime/06952_BottomSheetModal.js";
import SettingsIcon from "../../../../design/components/Icon/native/redesign/generated/SettingsIcon.tsx";
import RowButtonWrapper from "../../../../design/components/TableRow/native/RowButton.native.tsx";
import getRoleRowData from "../../ChannelPermissionsUtils.tsx";
import GroupPlusIcon from "../../../../design/components/Icon/native/redesign/generated/GroupPlusIcon.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import trackCommunicationDisabled from "../../../../stores/GuildMemberStore.tsx";
import createGuildRoleRecordFromRust from "../../../../stores/GuildRoleStore.tsx";
import createGuildRecordFromRust from "../../../../stores/GuildStore.tsx";
import getUncachedChannelPermissions from "../../../../stores/PermissionStore.tsx";
import ME from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
noopAll;
({ ChannelSettingsSections: c9, Permissions: c10 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
const createCacheKey = { paddingVertical: ThemesDefault.space.PX_12 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { margin: 16, marginBottom: 0 };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/channel_permissions/native/action_sheets/ChannelMembersActionSheet.tsx");

export default function ChannelMembersActionSheet(arg0) {
  ({ channelId: require, guildId: importDefault } = arg0);
  closure_4 = undefined;
  c5 = undefined;
  const tmp = callback();
  dependencyMap = tmp;
  let obj = initialize;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(closure_0));
  obj1 = initialize;
  const items1 = [closure_7, closure_6];
  const items2 = [stateFromStores];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => {
    let obj = stateFromStores;
    let guildId;
    if (stateFromStores != null) {
      guildId = obj.getGuildId();
    }
    const guild = closure_1_7.getGuild(guildId);
    obj = { guild, sortedGuildRoles: null };
    let sortedRoles;
    if (null != guild) {
      sortedRoles = closure_1_6.getSortedRoles(guild.id);
    }
    obj[1] = sortedRoles;
    return obj;
  }, items2);
  ({ guild, sortedGuildRoles } = stateFromStoresObject);
  let obj2 = initialize;
  const items3 = [c5];
  const items4 = [stateFromStores];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items3, () => {
    let guildId;
    if (stateFromStores != null) {
      guildId = stateFromStores.getGuildId();
    }
    return _undefined.getMemberIds(guildId);
  }, items4);
  let obj3 = useNavigation;
  closure_4 = obj3.useNavigation();
  if (null != stateFromStores) {
    if (null != guild) {
      if (null != sortedGuildRoles) {
        const canResult = closure_8.can(constants.MANAGE_ROLES, stateFromStores);
        c5 = canResult;
        let tmp5Result = getRoleRowData;
        const existingRolesRows = tmp5Result.getExistingRolesRows(guild, sortedGuildRoles, stateFromStores, stateFromStores.accessPermissions);
        tmp5Result = getRoleRowData;
        const items5 = [];
        obj = { title: null, data: null };
        const existingMembersRows = tmp5Result.getExistingMembersRows(stateFromStoresArray, stateFromStores, guild, stateFromStores.accessPermissions);
        const intl4 = getSystemLocale.intl;
        obj[0] = intl4.string(getSystemLocale.t["LPJmL/"]);
        obj[1] = existingRolesRows;
        items5.push(obj);
        obj = { title: null, data: null };
        const intl5 = getSystemLocale.intl;
        obj[0] = intl5.string(getSystemLocale.t["9Oq93m"]);
        obj[1] = existingMembersRows;
        items5.push(obj);
        obj1 = { title: null, subtitle: null, trailing: null };
        const intl6 = getSystemLocale.intl;
        obj1[0] = intl6.string(getSystemLocale.t.ES4CC6);
        const _HermesInternal = HermesInternal;
        obj1[1] = "#" + tmp9;
        let tmp29Result = canResult;
        if (canResult) {
          obj2 = { onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
          obj2[0] = function onPress() {
            importDefault(sectionRowWrapper[20]).hideActionSheet();
            const obj = importDefault(sectionRowWrapper[20]);
            importDefault(sectionRowWrapper[21]).init(closure_0);
            const obj2 = importDefault(sectionRowWrapper[21]);
            const result = require(sectionRowWrapper[22]).navigateToChannelDetailsScreen(closure_4, closure_1_9.PERMISSIONS, closure_0, "channel-members-action-sheet");
          };
          let intl = getSystemLocale.intl;
          obj2[2] = intl.string(getSystemLocale.t.XPDhcc);
          obj2[3] = callback(SettingsIcon.SettingsIcon, {});
          tmp29Result = callback(PressableBase.PressableOpacity, obj2);
        }
        obj3 = { scrollable: true, header: null, startExpanded: true, children: null };
        obj1[2] = tmp29Result;
        obj3[1] = callback(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj1);
        const obj4 = { style: null, children: null };
        obj4[0] = tmp.container;
        if (canResult) {
          const obj5 = { label: null, onPress: null, icon: null };
          const intl3 = getSystemLocale.intl;
          obj5[0] = intl3.string(getSystemLocale.t.dMJ3Y6);
          obj5[1] = function onPress() {
            return require(sectionRowWrapper[25]).openAddMembersActionSheet(stateFromStores);
          };
          obj5[2] = callback(GroupPlusIcon.GroupPlusIcon, {});
          tmp29Result = callback(RowButtonWrapper.RowButton, obj5);
        } else {
          const obj6 = { style: null, children: null };
          obj6[0] = tmp.warning;
          const obj7 = { messageType: null, children: null };
          obj7[0] = Button.HelpMessageTypes.INFO;
          const intl2 = getSystemLocale.intl;
          obj7[1] = intl2.string(getSystemLocale.t.VOuiSj);
          obj6[1] = callback(Button.HelpMessage, obj7);
          tmp29Result = callback(tmp12, obj6);
        }
        const items6 = [tmp29Result, ];
        const obj8 = { contentContainerStyle: null, renderItem: null, renderSectionHeader: null, sections: null, stickySectionHeadersEnabled: false };
        const obj9 = { paddingBottom: null };
        obj9[0] = tmp4.bottom + ThemesDefault.space.PX_16;
        obj8[0] = obj9;
        obj8[1] = function renderItem(index) {
          index = index.index;
          ({ item, section } = index);
          return closure_1_11(importDefault(sectionRowWrapper[29]), { start: 0 === index, end: index === section.data.length - 1, guildId: closure_1, item, channelId: closure_0, showType: true, showRemove: c5 });
        };
        obj8[2] = function renderSectionHeader(section) {
          ({ title, data } = section.section);
          const intl = require(sectionRowWrapper[16]).intl;
          const obj = { numberOfItems: data.length, sectionTitle: title };
          obj[5] = intl.format(require(sectionRowWrapper[16]).t.u8CWLl, obj);
          return closure_1_11(require(sectionRowWrapper[30]).Text, obj);
        };
        obj8[3] = items5;
        items6[1] = callback(BottomSheetModal.BottomSheetSectionList, obj8);
        obj4[1] = items6;
        obj3[3] = callback2(stateFromStores, obj4);
        return callback(Background.BottomSheet, obj3);
      }
    }
  }
  return null;
};