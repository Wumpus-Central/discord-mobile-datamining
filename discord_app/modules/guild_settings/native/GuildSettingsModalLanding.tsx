// === Module 17518: GuildSettingsModalLanding ===

// Module 17518 (GuildSettingsModalLanding)
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import PermissionUtilsAll from "PermissionUtils" /* 4204 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9063 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import UserStore from "UserStore" /* 1371 */;
import GuildSettingsModalChannelsStore from "GuildSettingsModalChannelsStore" /* 16143 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9064 */;

require = fn;
function SettingsSection(guild) {
  guild = guild.guild;
  ({ isGuildAdmin, canManageGuild, canManageChannels, pushScreen: importDefault } = guild);
  const tmp2 = guild;
  ({ canManageGuildExpressions, canViewAuditLog, canManageWebhooks, canUnlinkChannelLobbies, canConfigureOfficialMessages, categories } = guild);
  let obj = { label: null, arrow: true, icon: null, onPress: null };
  const intl = guild(1114).intl;
  obj.label = intl.string(guild(1114).t["/dp6yY"]);
  obj = { IconComponent: guild(4515).CircleInformationIcon };
  obj.icon = closure_15(guild(5605).TableRow.Icon, obj);
  obj.onPress = function onPress() {
    return importDefault(constants2.OVERVIEW);
  };
  const items = [closure_15(guild(5605).TableRow, obj, "overview")];
  const currentUser = UserStore.getCurrentUser();
  if (canManageGuild) {
    obj = { label: null, arrow: true, icon: null, onPress: null };
    const intl2 = tmp2(1114).intl;
    obj.label = intl2.string(tmp2(1114).t["5tbTdV"]);
    const obj1 = { IconComponent: tmp2(17519).ModerationIcon };
    obj.icon = tmp(tmp2(5605).TableRow.Icon, obj1);
    obj.onPress = function onPress() {
      return importDefault(constants2.MODERATION);
    };
    items.push(tmp(tmp2(5605).TableRow, obj, "moderation"));
  }
  if (canViewAuditLog) {
    const obj2 = { label: null, arrow: true, icon: null, onPress: null };
    const intl3 = tmp2(1114).intl;
    obj2.label = intl3.string(tmp2(1114).t.SPWLyT);
    const obj3 = { IconComponent: tmp2(5538).ClipboardListIcon };
    obj2.icon = tmp(tmp2(5605).TableRow.Icon, obj3);
    obj2.onPress = function onPress() {
      return importDefault(constants2.AUDIT_LOG);
    };
    items.push(tmp(tmp2(5605).TableRow, obj2, "auditlogs"));
  }
  if (!canManageChannels) {
    let canManageACategoryResult = null != currentUser;
    if (canManageACategoryResult) {
      let obj6 = PermissionUtilsAll;
      canManageACategoryResult = obj6.canManageACategory(currentUser, guild, categories);
    }
    canManageChannels = canManageACategoryResult;
  }
  if (canManageChannels) {
    const obj4 = { label: null, arrow: true, icon: null, onPress: null };
    const intl4 = tmp2(1114).intl;
    obj4.label = intl4.string(tmp2(1114).t.OGiMXJ);
    const obj5 = { IconComponent: tmp2(17521).ChannelListIcon };
    obj4.icon = tmp(tmp2(5605).TableRow.Icon, obj5);
    obj4.onPress = function onPress() {
      guild = GuildSettingsModalChannelsStore.initGuild(guild.id);
      importDefault(constants2.CHANNELS);
    };
    items.push(tmp(tmp2(5605).TableRow, obj4, "channels"));
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
    const intl5 = tmp2(1114).intl;
    obj6.label = intl5.string(tmp2(1114).t.CIsNZw);
    const obj7 = { IconComponent: tmp2(14954).PuzzlePieceIcon };
    obj6.icon = tmp(tmp2(5605).TableRow.Icon, obj7);
    obj6.onPress = function onPress() {
      return importDefault(constants2.INTEGRATIONS);
    };
    items.push(tmp(tmp2(5605).TableRow, obj6, "integrations"));
  }
  if (canManageGuildExpressions) {
    const obj8 = { label: null, arrow: true, icon: null, onPress: null };
    const intl6 = tmp2(1114).intl;
    obj8.label = intl6.string(tmp2(1114).t.sMOuuS);
    const obj9 = { IconComponent: tmp2(8757).ReactionIcon };
    obj8.icon = tmp(tmp2(5605).TableRow.Icon, obj9);
    obj8.onPress = function onPress() {
      return importDefault(constants2.EMOJI);
    };
    items.push(tmp(tmp2(5605).TableRow, obj8, "emoji"));
    const obj10 = { label: null, arrow: true, icon: null, onPress: null };
    const intl7 = tmp2(1114).intl;
    obj10.label = intl7.string(tmp2(1114).t.R5nQkS);
    const obj11 = { IconComponent: tmp2(10114).StickerIcon };
    obj10.icon = tmp(tmp2(5605).TableRow.Icon, obj11);
    obj10.onPress = function onPress() {
      return importDefault(constants2.STICKERS);
    };
    items.push(tmp(tmp2(5605).TableRow, obj10, "stickers"));
  }
  if (canConfigureOfficialMessages) {
    const obj12 = { label: null, arrow: true, icon: null, onPress: null };
    const intl8 = tmp2(1114).intl;
    obj12.label = intl8.string(tmp2(1114).t.xHEzFh);
    const obj13 = { IconComponent: tmp2(11740).StampIcon };
    obj12.icon = tmp(tmp2(5605).TableRow.Icon, obj13);
    obj12.onPress = function onPress() {
      return importDefault(constants2.OFFICIAL_MESSAGES);
    };
    items.push(tmp(tmp2(5605).TableRow, obj12, "official-messages"));
  }
  let tmp2Result = tmp2(9067);
  if (tmp2Result.canUseMobileServerTagSettings(guild.id)) {
    const obj14 = { label: null, arrow: true, icon: null, onPress: null };
    const intl9 = tmp2(1114).intl;
    obj14.label = intl9.string(tmp2(1114).t["2QmKZ2"]);
    const obj15 = { IconComponent: tmp2(8862).TagIcon };
    obj14.icon = tmp(tmp2(5605).TableRow.Icon, obj15);
    obj14.onPress = function onPress() {
      return importDefault(constants2.TAG);
    };
    items.push(tmp(tmp2(5605).TableRow, obj14, "server-tag"));
  }
  if (canManageGuild) {
    const obj16 = { label: null, arrow: true, icon: null, onPress: null };
    const intl10 = tmp2(1114).intl;
    obj16.label = intl10.string(tmp2(1114).t.Am9YHi);
    const obj17 = { IconComponent: tmp2(9752).ShieldUserIcon };
    obj16.icon = tmp(tmp2(5605).TableRow.Icon, obj17);
    obj16.onPress = function onPress() {
      return importDefault(constants2.SECURITY);
    };
    items.push(tmp(tmp2(5605).TableRow, obj16, "security"));
  }
  if (isGuildAdmin) {
    tmp2Result = tmp2(17523);
    isGuildAdmin = tmp2Result.canSeeVanityUrlSettings(guild);
  }
  if (isGuildAdmin) {
    const obj18 = { label: null, arrow: true, icon: null, onPress: null };
    const intl11 = tmp2(1114).intl;
    obj18.label = intl11.string(tmp2(1114).t["5XZKy/"]);
    const obj19 = { IconComponent: tmp2(4503).LinkIcon };
    obj18.icon = tmp(tmp2(5605).TableRow.Icon, obj19);
    obj18.onPress = function onPress() {
      return importDefault(constants2.VANITY_URL);
    };
    items.push(tmp(tmp2(5605).TableRow, obj18, "vanity"));
  }
  let tmpResult = null;
  if (0 !== items.length) {
    const obj20 = { title: null, hasIcons: true, children: null };
    const intl12 = tmp2(1114).intl;
    obj20.title = intl12.string(tmp2(1114).t["3D5yo/"]);
    obj20.children = items;
    tmpResult = tmp(tmp2(5687).TableRowGroup, obj20);
  }
  return tmpResult;
}
function CommunitySection(pushScreen) {
  pushScreen = pushScreen.pushScreen;
  const features = pushScreen.guild.features;
  const hasItem = features.has(constants.COMMUNITY);
  let obj = { title: null, hasIcons: true, children: null };
  const intl = pushScreen(1114).intl;
  obj.title = intl.string(pushScreen(1114).t["1g9A/f"]);
  const TableRow = pushScreen(5605).TableRow;
  obj = { label: null, arrow: true, icon: null, onPress: null };
  const intl2 = pushScreen(1114).intl;
  const string = intl2.string;
  const t = pushScreen(1114).t;
  if (hasItem) {
    obj.label = string(t.nRtNqn);
    obj = { IconComponent: tmp3(15591).TreehouseIcon };
    obj.icon = tmp2(tmp3(5605).TableRow.Icon, obj);
    obj.onPress = function onPress() {
      return pushScreen(constants2.COMMUNITY, {});
    };
    let tmp2Result = tmp2(TableRow, obj, "community-overview");
  } else {
    obj.label = string(t.ElKTeb);
    const obj1 = { IconComponent: tmp3(15591).TreehouseIcon };
    obj.icon = tmp2(tmp3(5605).TableRow.Icon, obj1);
    obj.onPress = function onPress() {
      return pushScreen(constants2.COMMUNITY_INTRO, {});
    };
    tmp2Result = tmp2(TableRow, obj, "community-intro");
  }
  obj.children = tmp2Result;
  return closure_15(pushScreen(5687).TableRowGroup, obj);
}
function UserManagementSection(pushScreen) {
  pushScreen = pushScreen.pushScreen;
  ({ canManageGuild, canManageRoles, canManageBans } = pushScreen);
  let obj = { label: null, arrow: true, icon: null, onPress: null };
  const intl = pushScreen(1114).intl;
  obj.label = intl.string(pushScreen(1114).t["9Oq93m"]);
  obj = { IconComponent: pushScreen(5089).GroupIcon };
  obj.icon = closure_15(pushScreen(5605).TableRow.Icon, obj);
  obj.onPress = function onPress() {
    return pushScreen(constants2.MEMBERS);
  };
  const items = [closure_15(pushScreen(5605).TableRow, obj, "members")];
  if (canManageRoles) {
    obj = { label: null, arrow: true, icon: null, onPress: null };
    const intl2 = tmp2(1114).intl;
    obj.label = intl2.string(tmp2(1114).t["LPJmL/"]);
    const obj1 = { IconComponent: tmp2(9752).ShieldUserIcon };
    obj.icon = tmp(tmp2(5605).TableRow.Icon, obj1);
    obj.onPress = function onPress() {
      return pushScreen(constants2.ROLES);
    };
    items.push(tmp(tmp2(5605).TableRow, obj, "roles"));
  }
  if (canManageGuild) {
    const obj2 = { label: null, arrow: true, icon: null, onPress: null };
    const intl3 = tmp2(1114).intl;
    obj2.label = intl3.string(tmp2(1114).t.ngRFjZ);
    const obj3 = { IconComponent: tmp2(4503).LinkIcon };
    obj2.icon = tmp(tmp2(5605).TableRow.Icon, obj3);
    obj2.onPress = function onPress() {
      return pushScreen(constants2.INSTANT_INVITES);
    };
    items.push(tmp(tmp2(5605).TableRow, obj2, "invites"));
  }
  if (canManageBans) {
    const obj4 = { label: null, arrow: true, icon: null, onPress: null };
    const intl4 = tmp2(1114).intl;
    obj4.label = intl4.string(tmp2(1114).t.ZbeITS);
    const obj5 = { IconComponent: tmp2(9433).HammerIcon };
    obj4.icon = tmp(tmp2(5605).TableRow.Icon, obj5);
    obj4.onPress = function onPress() {
      return pushScreen(constants2.BANS);
    };
    items.push(tmp(tmp2(5605).TableRow, obj4, "bans"));
  }
  let tmpResult = null;
  if (0 !== items.length) {
    const obj6 = { title: null, hasIcons: true, children: null };
    const intl5 = tmp2(1114).intl;
    obj6.title = intl5.string(tmp2(1114).t["+OecxG"]);
    obj6.children = items;
    tmpResult = tmp(tmp2(5687).TableRowGroup, obj6);
  }
  return tmpResult;
}
function GuildSettingsModalLandingInner(guild) {
  guild = guild.guild;
  const updateErrors = guild.updateErrors;
  let obj = guild(4262);
  const token = obj.useToken(updateErrors(576).modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_18();
  let obj1 = guild(1483);
  const navigation = obj1.useNavigation();
  let obj2 = guild(504);
  let items = [GuildChannelStore];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    const channels = GuildChannelStore.getChannels(id);
    let tmp4;
    if (channels != null) {
      tmp4 = channels[constants3.GUILD_CATEGORY];
    }
    return tmp4;
  });
  let obj3 = guild(504);
  let items1 = [PermissionStore];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => PermissionStore.getGuildPermissionProps(guild));
  let obj4 = noop;
  const effect = noop.useEffect(() => {
    updateErrors(dependencyMap[9]);
    const obj = { settings_type: "guild", origin_pane: "Array", destination_pane: constants.LANDING };
    obj.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj);
  }, []);
  const items2 = [navigation];
  const callback = noop.useCallback(() => {
    const items = [...arguments];
    const first = items[0];
    const state = navigation.getState();
    let name;
    if (state.routes[state.index] != null) {
      name = tmp4.name;
    }
    if (name !== first) {
      let obj = GuildSettingsActionCreatorsDefault;
      obj.setSection(first);
      const navigate = tmp2.navigate;
      const items1 = [];
      HermesBuiltin.arraySpread(items, 0);
      HermesBuiltin.apply(items1, tmp2);
      obj = { settings_type: "guild", origin_pane: constants2.LANDING, destination_pane: first };
      AppAnalyticsUtilsDefault.trackWithMetadata(constants4.SETTINGS_PANE_VIEWED, obj);
    }
  }, items2);
  ({ canManageGuild, isGuildAdmin, canManageRoles, canManageBans, canManageGuildExpressions, canManageChannels, canViewAuditLog, canManageWebhooks } = stateFromStoresObject);
  const obj6 = guild(17524);
  const tmp11 = guild(17524).useChannelsAllowedToUnlink(guild.id).length > 0;
  const canManageGuildRoleSubscriptions = guild(7260).useCanManageGuildRoleSubscriptions(guild);
  let result = canManageGuild;
  if (canManageGuild) {
    result = tmp(7267).isGuildOfficialMessagesEnabled(guild, "GuildSettingsModalLanding");
    const tmpResult = tmp(7267);
  }
  const items3 = [updateErrors.message];
  const layoutEffect = obj4.useLayoutEffect(() => {
    if (null != updateErrors.message) {
      ToastUtils.presentError(tmp.message);
    }
  }, items3);
  obj = { style: tmp5.container, contentContainerStyle: null, children: null };
  const items4 = [tmp5.containerContent, guild.contentContainerStyle];
  obj.contentContainerStyle = items4;
  obj = { style: { paddingHorizontal: token }, spacing: tmp3(576).space.PX_24, children: null };
  obj1 = {
    iconProps: {
      onUpload(icon) {
        GuildSettingsActionCreatorsDefault.updateIcon(guild.id, icon);
      },
      type: "guild",
      icon: guild.icon,
      name: guild.name,
      makeURL(icon) {
        let guildIconURL = icon;
        if (icon) {
          const obj = { id: guild.id, icon, canAnimate: true, size: 64 };
          guildIconURL = obj.getGuildIconURL(obj);
        }
        return guildIconURL;
      },
      disabled: !stateFromStoresObject.canManageGuild
    },
    text: guild.name,
    textAccessibilityRole: "header"
  };
  const items5 = [closure_15(updateErrors(16851), obj1), closure_15(SettingsSection, { guild, categories: stateFromStores, isGuildAdmin, canManageGuild, canManageGuildExpressions, canManageChannels, canUnlinkChannelLobbies: tmp11, canViewAuditLog, canManageWebhooks, canConfigureOfficialMessages: result, pushScreen: callback }), , , ];
  let tmp17Result = canManageGuild;
  if (canManageGuild) {
    obj2 = { guild, pushScreen: callback };
    tmp17Result = tmp17(CommunitySection, obj2);
  }
  items5[2] = tmp17Result;
  tmp17Result = canManageGuildRoleSubscriptions;
  if (canManageGuildRoleSubscriptions) {
    obj3 = { guild, pushScreen: callback };
    tmp17Result = tmp17(tmp3(17525), obj3);
  }
  obj4 = { children: null };
  items5[3] = tmp17Result;
  items5[4] = closure_15(UserManagementSection, { canManageGuild, canManageRoles, canManageBans, pushScreen: callback });
  obj.children = items5;
  obj.children = closure_16(guild(4973).Stack, obj);
  const items6 = [closure_15(guild(8593).Form, obj), closure_15(guild(7040).NavScrim, {})];
  obj4.children = items6;
  return closure_16(closure_17, obj4);
}
const Constants = fn(1074);
({ GuildFeatures: closure_11, GuildSettingsSections: closure_12, ChannelTypes: map1, AnalyticEvents: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
const createStyles = fn(4560);
let closure_18 = createStyles.createStyles({ container: { flex: 1 }, containerContent: { paddingTop: 16 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalLanding.tsx");

export default function GuildSettingsModalLanding(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  guildId(504);
  [][0] = GuildSettingsStore;
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = { guild: stateFromStores, contentContainerStyle: guildId.contentContainerStyle, updateErrors: tmp3 };
    tmp4 = closure_15(GuildSettingsModalLandingInner, obj);
  }
  return tmp4;
};