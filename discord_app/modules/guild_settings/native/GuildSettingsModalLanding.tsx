// === Module 17033: SettingsSection ===

// Module 17033 (SettingsSection)
import applyOverwritesAll from "applyOverwrites" /* 4095 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "comparator" /* 1983 */;
import closure_6 from "createGuildRecordFromRust" /* 1910 */;
import closure_7 from "getUncachedChannelPermissions" /* 4090 */;
import closure_8 from "mergeGuildAvatar" /* 1923 */;
import closure_9 from "sortCategoryList" /* 15662 */;
import closure_10 from "handleFormInit" /* 9668 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
function SettingsSection(guild) {
  guild = guild.guild;
  ({ isGuildAdmin, canManageGuild, canManageChannels, pushScreen: importDefault } = guild);
  const tmp2 = guild;
  ({ canManageGuildExpressions, canViewAuditLog, canManageWebhooks, canUnlinkChannelLobbies, canConfigureOfficialMessages, categories } = guild);
  let obj = { label: null, arrow: true, icon: null, onPress: null };
  const intl = guild(1236).intl;
  obj[0] = intl.string(guild(1236).t["/dp6yY"]);
  obj = { IconComponent: guild(4401).CircleInformationIcon };
  obj[2] = callback(guild(5564).TableRow.Icon, obj);
  obj[3] = function onPress() {
    return callback(closure_1_12.OVERVIEW);
  };
  const items = [callback(guild(5564).TableRow, obj, "overview")];
  currentUser = currentUser.getCurrentUser();
  if (canManageGuild) {
    obj = { label: null, arrow: true, icon: null, onPress: null };
    const intl2 = tmp2(1236).intl;
    obj[0] = intl2.string(tmp2(1236).t["5tbTdV"]);
    obj1 = { IconComponent: null };
    obj1[0] = tmp2(17034).ModerationIcon;
    obj[2] = tmp(tmp2(5564).TableRow.Icon, obj1);
    obj[3] = function onPress() {
      return callback(closure_1_12.MODERATION);
    };
    items.push(tmp(tmp2(5564).TableRow, obj, "moderation"));
  }
  if (canViewAuditLog) {
    const obj2 = { label: null, arrow: true, icon: null, onPress: null };
    const intl3 = tmp2(1236).intl;
    obj2[0] = intl3.string(tmp2(1236).t.SPWLyT);
    const obj3 = { IconComponent: null };
    obj3[0] = tmp2(7605).ClipboardListIcon;
    obj2[2] = tmp(tmp2(5564).TableRow.Icon, obj3);
    obj2[3] = function onPress() {
      return callback(closure_1_12.AUDIT_LOG);
    };
    items.push(tmp(tmp2(5564).TableRow, obj2, "auditlogs"));
  }
  if (!canManageChannels) {
    let canManageACategoryResult = null != currentUser;
    if (canManageACategoryResult) {
      let obj6 = applyOverwritesAll;
      canManageACategoryResult = obj6.canManageACategory(currentUser, guild, categories);
    }
    canManageChannels = canManageACategoryResult;
  }
  if (canManageChannels) {
    const obj4 = { label: null, arrow: true, icon: null, onPress: null };
    const intl4 = tmp2(1236).intl;
    obj4[0] = intl4.string(tmp2(1236).t.OGiMXJ);
    const obj5 = { IconComponent: null };
    obj5[0] = tmp2(17036).ChannelListIcon;
    obj4[2] = tmp(tmp2(5564).TableRow.Icon, obj5);
    obj4[3] = function onPress() {
      guild = closure_1_9.initGuild(guild.id);
      callback(closure_1_12.CHANNELS);
    };
    items.push(tmp(tmp2(5564).TableRow, obj4, "channels"));
  }
  let tmp11 = canManageGuild;
  if (!canManageGuild) {
    tmp11 = canManageWebhooks;
  }
  if (!tmp11) {
    tmp11 = canUnlinkChannelLobbies;
  }
  if (tmp11) {
    obj6 = { label: null, arrow: true, icon: null, onPress: null };
    const intl5 = tmp2(1236).intl;
    obj6[0] = intl5.string(tmp2(1236).t.CIsNZw);
    const obj7 = { IconComponent: null };
    obj7[0] = tmp2(14493).PuzzlePieceIcon;
    obj6[2] = tmp(tmp2(5564).TableRow.Icon, obj7);
    obj6[3] = function onPress() {
      return callback(closure_1_12.INTEGRATIONS);
    };
    items.push(tmp(tmp2(5564).TableRow, obj6, "integrations"));
  }
  if (canManageGuildExpressions) {
    const obj8 = { label: null, arrow: true, icon: null, onPress: null };
    const intl6 = tmp2(1236).intl;
    obj8[0] = intl6.string(tmp2(1236).t.sMOuuS);
    const obj9 = { IconComponent: null };
    obj9[0] = tmp2(8174).ReactionIcon;
    obj8[2] = tmp(tmp2(5564).TableRow.Icon, obj9);
    obj8[3] = function onPress() {
      return callback(closure_1_12.EMOJI);
    };
    items.push(tmp(tmp2(5564).TableRow, obj8, "emoji"));
    const obj10 = { label: null, arrow: true, icon: null, onPress: null };
    const intl7 = tmp2(1236).intl;
    obj10[0] = intl7.string(tmp2(1236).t.R5nQkS);
    const obj11 = { IconComponent: null };
    obj11[0] = tmp2(10135).StickerIcon;
    obj10[2] = tmp(tmp2(5564).TableRow.Icon, obj11);
    obj10[3] = function onPress() {
      return callback(closure_1_12.STICKERS);
    };
    items.push(tmp(tmp2(5564).TableRow, obj10, "stickers"));
  }
  if (canConfigureOfficialMessages) {
    const obj12 = { label: null, arrow: true, icon: null, onPress: null };
    const intl8 = tmp2(1236).intl;
    obj12[0] = intl8.string(tmp2(1236).t.xHEzFh);
    const obj13 = { IconComponent: null };
    obj13[0] = tmp2(11251).StampIcon;
    obj12[2] = tmp(tmp2(5564).TableRow.Icon, obj13);
    obj12[3] = function onPress() {
      return callback(closure_1_12.OFFICIAL_MESSAGES);
    };
    items.push(tmp(tmp2(5564).TableRow, obj12, "official-messages"));
  }
  let tmp2Result = tmp2(9670);
  if (tmp2Result.canUseMobileServerTagSettings(guild.id)) {
    const obj14 = { label: null, arrow: true, icon: null, onPress: null };
    const intl9 = tmp2(1236).intl;
    obj14[0] = intl9.string(tmp2(1236).t["2QmKZ2"]);
    const obj15 = { IconComponent: null };
    obj15[0] = tmp2(10357).TagIcon;
    obj14[2] = tmp(tmp2(5564).TableRow.Icon, obj15);
    obj14[3] = function onPress() {
      return callback(closure_1_12.TAG);
    };
    items.push(tmp(tmp2(5564).TableRow, obj14, "server-tag"));
  }
  if (canManageGuild) {
    const obj16 = { label: null, arrow: true, icon: null, onPress: null };
    const intl10 = tmp2(1236).intl;
    obj16[0] = intl10.string(tmp2(1236).t.Am9YHi);
    const obj17 = { IconComponent: null };
    obj17[0] = tmp2(9652).ShieldUserIcon;
    obj16[2] = tmp(tmp2(5564).TableRow.Icon, obj17);
    obj16[3] = function onPress() {
      return callback(closure_1_12.SECURITY);
    };
    items.push(tmp(tmp2(5564).TableRow, obj16, "security"));
  }
  if (isGuildAdmin) {
    tmp2Result = tmp2(17038);
    isGuildAdmin = tmp2Result.canSeeVanityUrlSettings(guild);
  }
  if (isGuildAdmin) {
    const obj18 = { label: null, arrow: true, icon: null, onPress: null };
    const intl11 = tmp2(1236).intl;
    obj18[0] = intl11.string(tmp2(1236).t["5XZKy/"]);
    const obj19 = { IconComponent: null };
    obj19[0] = tmp2(4389).LinkIcon;
    obj18[2] = tmp(tmp2(5564).TableRow.Icon, obj19);
    obj18[3] = function onPress() {
      return callback(closure_1_12.VANITY_URL);
    };
    items.push(tmp(tmp2(5564).TableRow, obj18, "vanity"));
  }
  let tmpResult = null;
  if (0 !== items.length) {
    const obj20 = { title: null, hasIcons: true, children: null };
    const intl12 = tmp2(1236).intl;
    obj20[0] = intl12.string(tmp2(1236).t["3D5yo/"]);
    obj20[2] = items;
    tmpResult = tmp(tmp2(5957).TableRowGroup, obj20);
  }
  return tmpResult;
}
function CommunitySection(pushScreen) {
  pushScreen = pushScreen.pushScreen;
  const features = pushScreen.guild.features;
  const hasItem = features.has(constants.COMMUNITY);
  let obj = { title: null, hasIcons: true, children: null };
  const intl = pushScreen(1236).intl;
  obj[0] = intl.string(pushScreen(1236).t["1g9A/f"]);
  const TableRow = pushScreen(5564).TableRow;
  obj = { label: null, arrow: true, icon: null, onPress: null };
  const intl2 = pushScreen(1236).intl;
  const string = intl2.string;
  const t = pushScreen(1236).t;
  if (hasItem) {
    obj[0] = string(t.nRtNqn);
    obj = { IconComponent: null };
    obj[0] = tmp3(15124).TreehouseIcon;
    obj[2] = tmp2(tmp3(5564).TableRow.Icon, obj);
    obj[3] = function onPress() {
      return pushScreen(closure_1_12.COMMUNITY, {});
    };
    let tmp2Result = tmp2(TableRow, obj, "community-overview");
  } else {
    obj[0] = string(t.ElKTeb);
    obj1 = { IconComponent: null };
    obj1[0] = tmp3(15124).TreehouseIcon;
    obj[2] = tmp2(tmp3(5564).TableRow.Icon, obj1);
    obj[3] = function onPress() {
      return pushScreen(closure_1_12.COMMUNITY_INTRO, {});
    };
    tmp2Result = tmp2(TableRow, obj, "community-intro");
  }
  obj[2] = tmp2Result;
  return closure_15(pushScreen(5957).TableRowGroup, obj);
}
function UserManagementSection(pushScreen) {
  pushScreen = pushScreen.pushScreen;
  ({ canManageGuild, canManageRoles, canManageBans } = pushScreen);
  let obj = { label: null, arrow: true, icon: null, onPress: null };
  const intl = pushScreen(1236).intl;
  obj[0] = intl.string(pushScreen(1236).t["9Oq93m"]);
  obj = { IconComponent: pushScreen(5003).GroupIcon };
  obj[2] = callback(pushScreen(5564).TableRow.Icon, obj);
  obj[3] = function onPress() {
    return pushScreen(closure_1_12.MEMBERS);
  };
  const items = [callback(pushScreen(5564).TableRow, obj, "members")];
  if (canManageRoles) {
    obj = { label: null, arrow: true, icon: null, onPress: null };
    const intl2 = tmp2(1236).intl;
    obj[0] = intl2.string(tmp2(1236).t["LPJmL/"]);
    obj1 = { IconComponent: null };
    obj1[0] = tmp2(9652).ShieldUserIcon;
    obj[2] = tmp(tmp2(5564).TableRow.Icon, obj1);
    obj[3] = function onPress() {
      return pushScreen(closure_1_12.ROLES);
    };
    items.push(tmp(tmp2(5564).TableRow, obj, "roles"));
  }
  if (canManageGuild) {
    const obj2 = { label: null, arrow: true, icon: null, onPress: null };
    const intl3 = tmp2(1236).intl;
    obj2[0] = intl3.string(tmp2(1236).t.ngRFjZ);
    const obj3 = { IconComponent: null };
    obj3[0] = tmp2(4389).LinkIcon;
    obj2[2] = tmp(tmp2(5564).TableRow.Icon, obj3);
    obj2[3] = function onPress() {
      return pushScreen(closure_1_12.INSTANT_INVITES);
    };
    items.push(tmp(tmp2(5564).TableRow, obj2, "invites"));
  }
  if (canManageBans) {
    const obj4 = { label: null, arrow: true, icon: null, onPress: null };
    const intl4 = tmp2(1236).intl;
    obj4[0] = intl4.string(tmp2(1236).t.ZbeITS);
    const obj5 = { IconComponent: null };
    obj5[0] = tmp2(9312).HammerIcon;
    obj4[2] = tmp(tmp2(5564).TableRow.Icon, obj5);
    obj4[3] = function onPress() {
      return pushScreen(closure_1_12.BANS);
    };
    items.push(tmp(tmp2(5564).TableRow, obj4, "bans"));
  }
  let tmpResult = null;
  if (0 !== items.length) {
    const obj6 = { title: null, hasIcons: true, children: null };
    const intl5 = tmp2(1236).intl;
    obj6[0] = intl5.string(tmp2(1236).t["+OecxG"]);
    obj6[2] = items;
    tmpResult = tmp(tmp2(5957).TableRowGroup, obj6);
  }
  return tmpResult;
}
function GuildSettingsModalLandingInner(guild) {
  guild = guild.guild;
  const updateErrors = guild.updateErrors;
  let navigation;
  let obj = guild(4166);
  const token = obj.useToken(updateErrors(712).modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = callback2();
  obj1 = guild(1500);
  navigation = obj1.useNavigation();
  let obj2 = guild(589);
  let items = [closure_5];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    const channels = closure_1_5.getChannels(id);
    let tmp4;
    if (channels != null) {
      tmp4 = channels[closure_1_13.GUILD_CATEGORY];
    }
    return tmp4;
  });
  let obj3 = guild(589);
  let items1 = [closure_7];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => closure_1_7.getGuildPermissionProps(guild));
  let obj4 = React;
  const effect = React.useEffect(() => {
    let obj = updateErrors(table[9]);
    obj = { settings_type: "guild", origin_pane: "Array", destination_pane: "AFKTimeout" };
    obj[2] = constants.LANDING;
    obj.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj);
  }, []);
  const items2 = [navigation];
  const callback = React.useCallback(() => {
    const items = [...arguments];
    const first = items[0];
    const state = navigation.getState();
    let name;
    if (state.routes[state.index] != null) {
      name = tmp4.name;
    }
    if (name !== first) {
      let obj = updateErrors(closure_1_3[35]);
      obj.setSection(first);
      const navigate = tmp2.navigate;
      const items1 = [];
      HermesBuiltin.arraySpread(items, 0);
      HermesBuiltin.apply(items1, tmp2);
      obj = { settings_type: "guild", origin_pane: null, destination_pane: null };
      obj[1] = closure_1_12.LANDING;
      obj[2] = first;
      updateErrors(closure_1_3[9]).trackWithMetadata(closure_1_14.SETTINGS_PANE_VIEWED, obj);
      const obj2 = updateErrors(closure_1_3[9]);
    }
  }, items2);
  ({ canManageGuild, isGuildAdmin, canManageRoles, canManageBans, canManageGuildExpressions, canManageChannels, canViewAuditLog, canManageWebhooks } = stateFromStoresObject);
  let obj5 = guild(17039);
  const tmp11 = obj5.useChannelsAllowedToUnlink(guild.id).length > 0;
  const canManageGuildRoleSubscriptions = guild(6072).useCanManageGuildRoleSubscriptions(guild);
  let result = canManageGuild;
  if (canManageGuild) {
    result = tmp(6079).isGuildOfficialMessagesEnabled(guild, "GuildSettingsModalLanding");
    const tmpResult = tmp(6079);
  }
  const items3 = [updateErrors.message];
  const layoutEffect = obj4.useLayoutEffect(() => {
    if (null != updateErrors.message) {
      guild(closure_1_3[39]).presentError(tmp.message);
      const obj = guild(closure_1_3[39]);
    }
  }, items3);
  obj = { style: tmp5.container, contentContainerStyle: items4, children: null };
  items4 = [tmp5.containerContent, guild.contentContainerStyle];
  obj = { style: { paddingHorizontal: token }, spacing: tmp3(712).space.PX_24, children: null };
  obj1 = { iconProps: obj2, text: guild.name, textAccessibilityRole: "header" };
  obj2 = {
    onUpload(base64) {
      updateErrors(closure_1_3[35]).updateIcon(guild.id, base64);
    },
    type: "guild",
    icon: guild.icon,
    name: guild.name,
    makeURL(arg0) {
      let guildIconURL = arg0;
      if (arg0) {
        let obj = updateErrors(closure_1_3[43]);
        obj = { id: null, icon: null, canAnimate: true, size: 64 };
        obj[0] = guild.id;
        obj[1] = arg0;
        guildIconURL = obj.getGuildIconURL(obj);
      }
      return guildIconURL;
    },
    disabled: !stateFromStoresObject.canManageGuild
  };
  const items5 = [callback(updateErrors(16361), obj1), callback(SettingsSection, { guild, categories: stateFromStores, isGuildAdmin, canManageGuild, canManageGuildExpressions, canManageChannels, canUnlinkChannelLobbies: tmp11, canViewAuditLog, canManageWebhooks, canConfigureOfficialMessages: result, pushScreen: callback }), , , ];
  let tmp17Result = canManageGuild;
  if (canManageGuild) {
    obj3 = { guild: null, pushScreen: null };
    obj3[0] = guild;
    obj3[1] = callback;
    tmp17Result = tmp17(CommunitySection, obj3);
  }
  items5[2] = tmp17Result;
  tmp17Result = canManageGuildRoleSubscriptions;
  if (canManageGuildRoleSubscriptions) {
    obj4 = { guild: null, pushScreen: null };
    obj4[0] = guild;
    obj4[1] = callback;
    tmp17Result = tmp17(tmp3(17040), obj4);
  }
  obj5 = { children: null };
  items5[3] = tmp17Result;
  items5[4] = callback(UserManagementSection, { canManageGuild, canManageRoles, canManageBans, pushScreen: callback });
  obj[2] = items5;
  obj[2] = closure_16(guild(4891).Stack, obj);
  const items6 = [callback(guild(8309).Form, obj), callback(guild(5904).NavScrim, {})];
  obj5[0] = items6;
  return closure_16(closure_17, obj5);
}
({ GuildFeatures: unpackModuleId, GuildSettingsSections: closure_12, ChannelTypes: map1, AnalyticEvents: closure_14 } = ME);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
let closure_18 = createCacheKey.createStyles({ container: { flex: 1 }, containerContent: { paddingTop: 16 } });
let result = require("set").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalLanding.tsx");

export default function GuildSettingsModalLanding(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(589);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getGuild(guildId));
  guildId(589);
  [][0] = closure_10;
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = { guild: null, contentContainerStyle: null, updateErrors: null };
    obj[0] = stateFromStores;
    obj[1] = guildId.contentContainerStyle;
    obj[2] = tmp3;
    tmp4 = callback(GuildSettingsModalLandingInner, obj);
  }
  return tmp4;
};