// === Module 11609: ChannelMembersActionSheet ===

// Module 11609 (ChannelMembersActionSheet)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 504 */;
import ThemesDefault from "Themes" /* 576 */;
import useNavigation from "useNavigation" /* 1483 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import getAppChannelBotUserIdFromApplication from "getAppChannelBotUserIdFromApplication" /* 11610 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "ensureGuildLoaded" /* 1957 */;
import closure_5 from "trackCommunicationDisabled" /* 2021 */;
import closure_6 from "createGuildRoleRecordFromRust" /* 2015 */;
import closure_7 from "createGuildRecordFromRust" /* 1979 */;
import closure_8 from "getUncachedChannelPermissions" /* 4199 */;
import ME from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
noopAll;
({ ChannelSettingsSections: c9, Permissions: c10 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { container: { paddingHorizontal: 16, flex: 1 }, sectionRowWrapper: null, warning: null };
createCacheKey = { paddingVertical: ThemesDefault.space.PX_12 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { margin: 16, marginBottom: 0 };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/channel_permissions/native/action_sheets/ChannelMembersActionSheet.tsx");

export default function ChannelMembersActionSheet(arg0) {
  ({ channelId: require, guildId: importDefault } = arg0);
  dependencyMap = undefined;
  let stateFromStores;
  closure_4 = undefined;
  c5 = undefined;
  const tmp = callback();
  dependencyMap = tmp;
  let obj = initialize;
  const items = [closure_4];
  stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(closure_0));
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
  const tmp2 = importDefault;
  const tmp4 = useSafeAreaInsetsDefault();
  getAppChannelBotUserIdFromApplication;
  if (null != stateFromStores) {
    if (null != guild) {
      if (null != sortedGuildRoles) {
        const canResult = closure_8.can(constants.MANAGE_ROLES, stateFromStores);
        c5 = canResult;
        let tmp5Result = tmp5(9738);
        const existingRolesRows = tmp5Result.getExistingRolesRows(guild, sortedGuildRoles, stateFromStores, stateFromStores.accessPermissions);
        tmp5Result = tmp5(9738);
        obj = { appChannelBotUserId: null };
        obj[0] = tmp11;
        const items5 = [];
        obj = { title: null, data: null };
        const existingMembersRows = tmp5Result.getExistingMembersRows(stateFromStoresArray, stateFromStores, guild, stateFromStores.accessPermissions, obj);
        const intl4 = tmp5(1114).intl;
        obj[0] = intl4.string(tmp5(1114).t["LPJmL/"]);
        obj[1] = existingRolesRows;
        items5.push(obj);
        obj1 = { title: null, data: null };
        const intl5 = tmp5(1114).intl;
        obj1[0] = intl5.string(tmp5(1114).t["9Oq93m"]);
        obj1[1] = existingMembersRows;
        items5.push(obj1);
        obj2 = { title: null, subtitle: null, trailing: null };
        const intl6 = tmp5(1114).intl;
        obj2[0] = intl6.string(tmp5(1114).t.ES4CC6);
        const _HermesInternal = HermesInternal;
        obj2[1] = "#" + tmp9;
        let tmp32Result = canResult;
        if (canResult) {
          obj3 = { onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
          obj3[0] = function onPress() {
            closure_1_1(sectionRowWrapper[21]).hideActionSheet();
            const obj = closure_1_1(sectionRowWrapper[21]);
            closure_1_1(sectionRowWrapper[22]).init(closure_0);
            const obj2 = closure_1_1(sectionRowWrapper[22]);
            const result = closure_1_0(sectionRowWrapper[23]).navigateToChannelDetailsScreen(closure_4, closure_1_9.PERMISSIONS, closure_0, "channel-members-action-sheet");
          };
          let intl = tmp5(1114).intl;
          obj3[2] = intl.string(tmp5(1114).t.XPDhcc);
          obj3[3] = tmp32(tmp5(7380).SettingsIcon, {});
          tmp32Result = tmp32(tmp5(5123).PressableOpacity, obj3);
        }
        const obj4 = { scrollable: true, header: null, startExpanded: true, children: null };
        obj2[2] = tmp32Result;
        obj4[1] = closure_11(tmp5(7149).BottomSheetTitleHeader, obj2);
        const obj5 = { style: null, children: null };
        obj5[0] = tmp.container;
        if (canResult) {
          const obj6 = { label: null, onPress: null, icon: null };
          const intl3 = tmp5(1114).intl;
          obj6[0] = intl3.string(tmp5(1114).t.dMJ3Y6);
          obj6[1] = function onPress() {
            return closure_1_0(sectionRowWrapper[26]).openAddMembersActionSheet(stateFromStores);
          };
          obj6[2] = tmp32(tmp5(10032).GroupPlusIcon, {});
          tmp32Result = tmp32(tmp5(8595).RowButton, obj6);
        } else {
          const obj7 = { style: null, children: null };
          obj7[0] = tmp.warning;
          const obj8 = { messageType: null, children: null };
          obj8[0] = tmp5(1178).HelpMessageTypes.INFO;
          const intl2 = tmp5(1114).intl;
          obj8[1] = intl2.string(tmp5(1114).t.VOuiSj);
          obj7[1] = tmp32(tmp5(1178).HelpMessage, obj8);
          tmp32Result = tmp32(tmp14, obj7);
        }
        const items6 = [tmp32Result, ];
        const obj9 = { contentContainerStyle: null, renderItem: null, renderSectionHeader: null, sections: null, stickySectionHeadersEnabled: false };
        const obj10 = { paddingBottom: null };
        obj10[0] = tmp4.bottom + ThemesDefault.space.PX_16;
        obj9[0] = obj10;
        obj9[1] = function renderItem(index) {
          index = index.index;
          ({ item, section } = index);
          return closure_1_11(closure_1_1(sectionRowWrapper[30]), { start: 0 === index, end: index === section.data.length - 1, guildId: closure_1, item, channelId: closure_0, showType: true, showRemove: c5 });
        };
        obj9[2] = function renderSectionHeader(section) {
          ({ title, data } = section.section);
          let obj = { style: sectionRowWrapper.sectionRowWrapper, maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default", children: null };
          const intl = closure_1_0(sectionRowWrapper[17]).intl;
          obj = { numberOfItems: data.length, sectionTitle: title };
          obj[5] = intl.format(closure_1_0(sectionRowWrapper[17]).t.u8CWLl, obj);
          return closure_1_11(closure_1_0(sectionRowWrapper[31]).Text, obj);
        };
        obj9[3] = items5;
        items6[1] = closure_11(tmp5(6627).BottomSheetSectionList, obj9);
        obj5[1] = items6;
        obj4[3] = closure_12(stateFromStores, obj5);
        return closure_11(tmp5(7150).BottomSheet, obj4);
      }
    }
  }
  return null;
};