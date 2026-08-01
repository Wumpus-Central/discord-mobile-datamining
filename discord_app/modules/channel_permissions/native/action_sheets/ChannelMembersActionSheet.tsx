// === Module 10933: ChannelMembersActionSheet ===

// Module 10933 (ChannelMembersActionSheet)
import "PressableBase";
import { View } from "Background";
import ensureGuildLoaded from "ensureGuildLoaded";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import ME from "ME";
import jsxProd from "init";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_12;
let unpackModuleId;
const require = arg1;
({ ChannelSettingsSections: c9, Permissions: c10 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { container: { paddingHorizontal: 16, flex: 1 }, sectionRowWrapper: null, warning: null };
createCacheKey = { paddingVertical: require("Themes").space.PX_12 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { margin: 16, marginBottom: 0 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/channel_permissions/native/action_sheets/ChannelMembersActionSheet.tsx");

export default function ChannelMembersActionSheet(arg0) {
  let guild;
  let importDefault;
  let require;
  let sortedGuildRoles;
  ({ channelId: require, guildId: importDefault } = arg0);
  let dependencyMap;
  let stateFromStores;
  let ensureGuildLoaded;
  let c5;
  const tmp = createCacheKey();
  dependencyMap = tmp;
  let obj = require(589) /* initialize */;
  const items = [ensureGuildLoaded];
  stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(closure_0));
  let obj1 = require(589) /* initialize */;
  const items1 = [createGuildRecordFromRust, createGuildRoleRecordFromRust];
  const items2 = [stateFromStores];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => {
    let obj = stateFromStores;
    let guildId;
    if (stateFromStores != null) {
      guildId = obj.getGuildId();
    }
    const guild = outer1_7.getGuild(guildId);
    obj = { guild, sortedGuildRoles: null };
    let sortedRoles;
    if (null != guild) {
      sortedRoles = outer1_6.getSortedRoles(guild.id);
    }
    obj[1] = sortedRoles;
    return obj;
  }, items2);
  ({ guild, sortedGuildRoles } = stateFromStoresObject);
  let obj2 = require(589) /* initialize */;
  const items3 = [c5];
  const items4 = [stateFromStores];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items3, () => {
    let guildId;
    if (stateFromStores != null) {
      guildId = stateFromStores.getGuildId();
    }
    return _undefined2.getMemberIds(guildId);
  }, items4);
  let obj3 = require(1480) /* useNavigation */;
  ensureGuildLoaded = obj3.useNavigation();
  if (null != stateFromStores) {
    if (null != guild) {
      if (null != sortedGuildRoles) {
        const canResult = getUncachedChannelPermissions.can(constants.MANAGE_ROLES, stateFromStores);
        c5 = canResult;
        let tmp5Result = tmp5(8281);
        const existingRolesRows = tmp5Result.getExistingRolesRows(guild, sortedGuildRoles, stateFromStores, stateFromStores.accessPermissions);
        tmp5Result = tmp5(8281);
        const items5 = [];
        obj = { title: null, data: null };
        const existingMembersRows = tmp5Result.getExistingMembersRows(stateFromStoresArray, stateFromStores, guild, stateFromStores.accessPermissions);
        const intl4 = tmp5(1236).intl;
        obj[0] = intl4.string(tmp5(1236).t["LPJmL/"]);
        obj[1] = existingRolesRows;
        items5.push(obj);
        obj = { title: null, data: null };
        const intl5 = tmp5(1236).intl;
        obj[0] = intl5.string(tmp5(1236).t["9Oq93m"]);
        obj[1] = existingMembersRows;
        items5.push(obj);
        obj1 = { title: null, subtitle: null, trailing: null };
        const intl6 = tmp5(1236).intl;
        obj1[0] = intl6.string(tmp5(1236).t.ES4CC6);
        const _HermesInternal = HermesInternal;
        obj1[1] = "#" + tmp9;
        let tmp29Result = canResult;
        if (canResult) {
          obj2 = { onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
          obj2[0] = function onPress() {
            outer1_1(_undefined[20]).hideActionSheet();
            const obj = outer1_1(_undefined[20]);
            outer1_1(_undefined[21]).init(closure_0);
            const obj2 = outer1_1(_undefined[21]);
            const result = outer1_0(_undefined[22]).navigateToChannelDetailsScreen(ensureGuildLoaded, outer1_9.PERMISSIONS, closure_0, "channel-members-action-sheet");
          };
          let intl = tmp5(1236).intl;
          obj2[2] = intl.string(tmp5(1236).t.XPDhcc);
          obj2[3] = tmp29(tmp5(9020).SettingsIcon, {});
          tmp29Result = tmp29(tmp5(4721).PressableOpacity, obj2);
        }
        obj3 = { scrollable: true, header: null, startExpanded: true, children: null };
        obj1[2] = tmp29Result;
        obj3[1] = closure_11(tmp5(5246).BottomSheetTitleHeader, obj1);
        const obj4 = { style: null, children: null };
        obj4[0] = tmp.container;
        if (canResult) {
          const obj5 = { label: null, onPress: null, icon: null };
          const intl3 = tmp5(1236).intl;
          obj5[0] = intl3.string(tmp5(1236).t.dMJ3Y6);
          obj5[1] = function onPress() {
            return outer1_0(_undefined[25]).openAddMembersActionSheet(stateFromStores);
          };
          obj5[2] = tmp29(tmp5(10236).GroupPlusIcon, {});
          tmp29Result = tmp29(tmp5(7642).RowButton, obj5);
        } else {
          const obj6 = { style: null, children: null };
          obj6[0] = tmp.warning;
          const obj7 = { messageType: null, children: null };
          obj7[0] = tmp5(1297).HelpMessageTypes.INFO;
          const intl2 = tmp5(1236).intl;
          obj7[1] = intl2.string(tmp5(1236).t.VOuiSj);
          obj6[1] = tmp29(tmp5(1297).HelpMessage, obj7);
          tmp29Result = tmp29(tmp12, obj6);
        }
        const items6 = [tmp29Result, ];
        const obj8 = { contentContainerStyle: null, renderItem: null, renderSectionHeader: null, sections: null, stickySectionHeadersEnabled: false };
        const obj9 = { paddingBottom: null };
        obj9[0] = tmp4.bottom + importDefault(712).space.PX_16;
        obj8[0] = obj9;
        obj8[1] = function renderItem(index) {
          let item;
          let section;
          index = index.index;
          ({ item, section } = index);
          return outer1_11(outer1_1(_undefined[29]), { start: 0 === index, end: index === section.data.length - 1, guildId: closure_1, item, channelId: closure_0, showType: true, showRemove: c5 });
        };
        obj8[2] = function renderSectionHeader(section) {
          let data;
          let title;
          ({ title, data } = section.section);
          let obj = { style: _undefined.sectionRowWrapper, maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default", children: null };
          const intl = outer1_0(_undefined[16]).intl;
          obj = { numberOfItems: data.length, sectionTitle: title };
          obj[5] = intl.format(outer1_0(_undefined[16]).t.u8CWLl, obj);
          return outer1_11(outer1_0(_undefined[30]).Text, obj);
        };
        obj8[3] = items5;
        items6[1] = closure_11(tmp5(5249).BottomSheetSectionList, obj8);
        obj4[1] = items6;
        obj3[3] = closure_12(stateFromStores, obj4);
        return closure_11(tmp5(5247).BottomSheet, obj3);
      }
    }
  }
  return null;
};