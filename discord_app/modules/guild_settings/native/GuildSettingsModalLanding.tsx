// === Module 18026: GuildSettingsModalLanding ===

// Module 18026 (GuildSettingsModalLanding)
import util from "util" /* 1115 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import PermissionUtilsAll from "PermissionUtils" /* 4469 */;
import ToastUtils from "ToastUtils" /* 4522 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5009 */;
import ClipboardListIcon from "ClipboardListIcon" /* 5843 */;
import TableRow2 from "TableRow" /* 5910 */;
import TableRowGroup from "TableRowGroup" /* 5992 */;
import HammerIcon from "HammerIcon" /* 9630 */;
import RobotIcon from "RobotIcon" /* 9632 */;
import ShieldUserIcon from "ShieldUserIcon" /* 9924 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9939 */;
import ModerationIcon from "ModerationIcon" /* 18030 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4462 */;
import GuildStore from "GuildStore" /* 2066 */;
import PermissionStore from "PermissionStore" /* 4464 */;
import UserStore from "UserStore" /* 1372 */;
import GuildSettingsModalChannelsStore from "GuildSettingsModalChannelsStore" /* 16569 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9940 */;

require = fn;
function SettingsSection(guild) {
  guild = guild.guild;
  ({ isGuildAdmin, canManageGuild, canManageChannels, pushScreen: importDefault } = guild);
  ({ canManageWebhooks, canUnlinkChannelLobbies, categories } = guild);
  const obj = { label: null, arrow: true, icon: null, onPress: null };
  const intl = guild(1115).intl;
  obj.label = intl.string(guild(1115).t["/dp6yY"]);
  obj.icon = closure_15(guild(5910).TableRow.Icon, { IconComponent: guild(4783).CircleInformationIcon });
  obj.onPress = function onPress() {
    return importDefault(constants2.OVERVIEW);
  };
  const items = [closure_15(guild(5910).TableRow, obj, "overview")];
  const currentUser = UserStore.getCurrentUser();
  if (!canManageChannels) {
    let canManageACategoryResult = null != currentUser;
    if (canManageACategoryResult) {
      canManageACategoryResult = PermissionUtilsAll.canManageACategory(currentUser, guild, categories);
    }
    canManageChannels = canManageACategoryResult;
  }
  if (canManageChannels) {
    const obj4 = { label: null, arrow: true, icon: null, onPress: null };
    const intl2 = tmp2(1115).intl;
    obj4.label = intl2.string(tmp2(1115).t.OGiMXJ);
    const obj5 = { IconComponent: tmp2(18027).ChannelListIcon };
    obj4.icon = closure_15(tmp2(5910).TableRow.Icon, obj5);
    obj4.onPress = function onPress() {
      guild = GuildSettingsModalChannelsStore.initGuild(guild.id);
      importDefault(constants2.CHANNELS);
    };
    items.push(closure_15(tmp2(5910).TableRow, obj4, "channels"));
  }
  if (!canManageGuild) {
    canManageGuild = canManageWebhooks;
  }
  if (!canManageGuild) {
    canManageGuild = canUnlinkChannelLobbies;
  }
  if (canManageGuild) {
    const obj6 = { label: null, arrow: true, icon: null, onPress: null };
    const intl3 = tmp2(1115).intl;
    obj6.label = intl3.string(tmp2(1115).t.CIsNZw);
    const obj7 = { IconComponent: tmp2(15300).PuzzlePieceIcon };
    obj6.icon = closure_15(tmp2(5910).TableRow.Icon, obj7);
    obj6.onPress = function onPress() {
      return importDefault(constants2.INTEGRATIONS);
    };
    items.push(closure_15(tmp2(5910).TableRow, obj6, "integrations"));
  }
  const obj2 = { IconComponent: guild(4783).CircleInformationIcon };
  if (tmp2Result.canUseMobileServerTagSettings(guild.id)) {
    const obj8 = { label: null, arrow: true, icon: null, onPress: null };
    const intl4 = tmp2(1115).intl;
    obj8.label = intl4.string(tmp2(1115).t["2QmKZ2"]);
    const obj9 = { IconComponent: tmp2(9221).TagIcon };
    obj8.icon = closure_15(tmp2(5910).TableRow.Icon, obj9);
    obj8.onPress = function onPress() {
      return importDefault(constants2.TAG);
    };
    items.push(closure_15(tmp2(5910).TableRow, obj8, "server-tag"));
  }
  if (isGuildAdmin) {
    isGuildAdmin = tmp2(18029).canSeeVanityUrlSettings(guild);
    const tmp2Result2 = tmp2(18029);
  }
  if (isGuildAdmin) {
    const obj10 = { label: null, arrow: true, icon: null, onPress: null };
    const intl5 = tmp2(1115).intl;
    obj10.label = intl5.string(tmp2(1115).t["5XZKy/"]);
    const obj11 = { IconComponent: tmp2(4771).LinkIcon };
    obj10.icon = closure_15(tmp2(5910).TableRow.Icon, obj11);
    obj10.onPress = function onPress() {
      return importDefault(constants2.VANITY_URL);
    };
    items.push(closure_15(tmp2(5910).TableRow, obj10, "vanity"));
  }
  let tmpResult = null;
  if (0 !== items.length) {
    const obj12 = { title: null, hasIcons: true, children: null };
    const intl6 = tmp2(1115).intl;
    obj12.title = intl6.string(tmp2(1115).t["3D5yo/"]);
    obj12.children = items;
    tmpResult = closure_15(tmp2(5992).TableRowGroup, obj12);
  }
  return tmpResult;
}
function ExpressionSection(pushScreen) {
  pushScreen = pushScreen.pushScreen;
  const items = [];
  if (pushScreen.canManageGuildExpressions) {
    const obj = { label: null, arrow: true, icon: null, onPress: null };
    const intl = pushScreen(1115).intl;
    obj.label = intl.string(pushScreen(1115).t.sMOuuS);
    const obj2 = { IconComponent: pushScreen(9117).ReactionIcon };
    obj.icon = closure_15(pushScreen(5910).TableRow.Icon, obj2);
    obj.onPress = function onPress() {
      return pushScreen(constants2.EMOJI);
    };
    items.push(closure_15(pushScreen(5910).TableRow, obj, "emoji"));
    const obj3 = { label: null, arrow: true, icon: null, onPress: null };
    const intl2 = pushScreen(1115).intl;
    obj3.label = intl2.string(pushScreen(1115).t.R5nQkS);
    const obj4 = { IconComponent: pushScreen(10460).StickerIcon };
    obj3.icon = closure_15(pushScreen(5910).TableRow.Icon, obj4);
    obj3.onPress = function onPress() {
      return pushScreen(constants2.STICKERS);
    };
    items.push(closure_15(pushScreen(5910).TableRow, obj3, "stickers"));
  }
  if (pushScreen.canConfigureOfficialMessages) {
    const obj5 = { label: null, arrow: true, icon: null, onPress: null };
    const intl3 = pushScreen(1115).intl;
    obj5.label = intl3.string(pushScreen(1115).t.xHEzFh);
    const obj6 = { IconComponent: pushScreen(12081).StampIcon };
    obj5.icon = closure_15(pushScreen(5910).TableRow.Icon, obj6);
    obj5.onPress = function onPress() {
      return pushScreen(constants2.OFFICIAL_MESSAGES);
    };
    items.push(closure_15(pushScreen(5910).TableRow, obj5, "official-messages"));
  }
  let tmp10 = null;
  if (0 !== items.length) {
    const obj7 = { title: null, hasIcons: true, children: null };
    const intl4 = pushScreen(1115).intl;
    obj7.title = intl4.string(pushScreen(1115).t.m6lkGy);
    obj7.children = items;
    tmp10 = closure_15(pushScreen(5992).TableRowGroup, obj7);
  }
  return tmp10;
}
function PeopleSection(pushScreen) {
  pushScreen = pushScreen.pushScreen;
  ({ canManageGuild, canManageRoles } = pushScreen);
  const obj = { label: null, arrow: true, icon: null, onPress: null };
  const intl = pushScreen(1115).intl;
  obj.label = intl.string(pushScreen(1115).t["9Oq93m"]);
  obj.icon = closure_15(pushScreen(5910).TableRow.Icon, { IconComponent: pushScreen(5395).GroupIcon });
  obj.onPress = function onPress() {
    return pushScreen(constants2.MEMBERS);
  };
  const items = [closure_15(pushScreen(5910).TableRow, obj, "members")];
  if (canManageRoles) {
    const obj3 = { label: null, arrow: true, icon: null, onPress: null };
    const intl2 = tmp2(1115).intl;
    obj3.label = intl2.string(tmp2(1115).t["LPJmL/"]);
    const obj4 = { IconComponent: tmp2(9924).ShieldUserIcon };
    obj3.icon = closure_15(tmp2(5910).TableRow.Icon, obj4);
    obj3.onPress = function onPress() {
      return pushScreen(constants2.ROLES);
    };
    items.push(closure_15(tmp2(5910).TableRow, obj3, "roles"));
  }
  if (canManageGuild) {
    const obj5 = { label: null, arrow: true, icon: null, onPress: null };
    const intl3 = tmp2(1115).intl;
    obj5.label = intl3.string(tmp2(1115).t.ngRFjZ);
    const obj6 = { IconComponent: tmp2(4771).LinkIcon };
    obj5.icon = closure_15(tmp2(5910).TableRow.Icon, obj6);
    obj5.onPress = function onPress() {
      return pushScreen(constants2.INSTANT_INVITES);
    };
    items.push(closure_15(tmp2(5910).TableRow, obj5, "invites"));
  }
  const obj7 = { title: null, hasIcons: true, children: null };
  const intl4 = tmp2(1115).intl;
  obj7.title = intl4.string(pushScreen(1115).t.bMAKMK);
  obj7.children = items;
  return closure_15(pushScreen(5992).TableRowGroup, obj7);
}
function ModerationSection(arg0) {
  ({ canManageGuild, pushScreen: require } = arg0);
  const items = [];
  ({ canViewAuditLog, canManageBans } = arg0);
  if (canManageGuild) {
    const obj = { label: null, arrow: true, icon: null, onPress: null };
    const intl = util.intl;
    obj.label = intl.string(util.t["5tbTdV"]);
    const obj2 = { IconComponent: ModerationIcon.ModerationIcon };
    obj.icon = closure_15(TableRow2.TableRow.Icon, obj2);
    obj.onPress = function onPress() {
      return require(constants2.MODERATION);
    };
    items.push(closure_15(TableRow2.TableRow, obj, "moderation"));
    const obj3 = { label: null, arrow: true, icon: null, onPress: null };
    const intl2 = util.intl;
    obj3.label = intl2.string(util.t.uRelgx);
    const obj4 = { IconComponent: RobotIcon.RobotIcon };
    obj3.icon = closure_15(TableRow2.TableRow.Icon, obj4);
    obj3.onPress = function onPress() {
      return require(constants2.GUILD_AUTOMOD);
    };
    items.push(closure_15(TableRow2.TableRow, obj3, "automod"));
  }
  if (canViewAuditLog) {
    const obj5 = { label: null, arrow: true, icon: null, onPress: null };
    const intl3 = util.intl;
    obj5.label = intl3.string(util.t.SPWLyT);
    const obj6 = { IconComponent: ClipboardListIcon.ClipboardListIcon };
    obj5.icon = closure_15(TableRow2.TableRow.Icon, obj6);
    obj5.onPress = function onPress() {
      return require(constants2.AUDIT_LOG);
    };
    items.push(closure_15(TableRow2.TableRow, obj5, "auditlogs"));
  }
  if (canManageBans) {
    const obj7 = { label: null, arrow: true, icon: null, onPress: null };
    const intl4 = util.intl;
    obj7.label = intl4.string(util.t.ZbeITS);
    const obj8 = { IconComponent: HammerIcon.HammerIcon };
    obj7.icon = closure_15(TableRow2.TableRow.Icon, obj8);
    obj7.onPress = function onPress() {
      return require(constants2.BANS);
    };
    items.push(closure_15(TableRow2.TableRow, obj7, "bans"));
  }
  if (canManageGuild) {
    const obj9 = { label: null, arrow: true, icon: null, onPress: null };
    const intl5 = util.intl;
    obj9.label = intl5.string(util.t.Am9YHi);
    const obj10 = { IconComponent: ShieldUserIcon.ShieldUserIcon };
    obj9.icon = closure_15(TableRow2.TableRow.Icon, obj10);
    obj9.onPress = function onPress() {
      return require(constants2.SECURITY);
    };
    items.push(closure_15(TableRow2.TableRow, obj9, "security"));
  }
  let tmp18 = null;
  if (0 !== items.length) {
    const obj11 = { title: null, hasIcons: true, children: null };
    const intl6 = util.intl;
    obj11.title = intl6.string(util.t["5tbTdV"]);
    obj11.children = items;
    tmp18 = closure_15(TableRowGroup.TableRowGroup, obj11);
  }
  return tmp18;
}
function CommunitySection(pushScreen) {
  pushScreen = pushScreen.pushScreen;
  const features = pushScreen.guild.features;
  ({ canManageGuild, canViewGuildAnalytics } = pushScreen);
  let hasItem = features.has(constants.COMMUNITY);
  const items = [];
  if (!canManageGuild) {
    if (hasItem) {
      hasItem = canViewGuildAnalytics;
    }
    if (hasItem) {
      const obj2 = { label: null, arrow: true, icon: null, onPress: null };
      const intl2 = pushScreen(1115).intl;
      obj2.label = intl2.string(pushScreen(1115).t["0wWfUG"]);
      const obj3 = { IconComponent: pushScreen(10730).AnalyticsIcon };
      obj2.icon = closure_15(pushScreen(5910).TableRow.Icon, obj3);
      obj2.onPress = function onPress() {
        return pushScreen(constants2.ANALYTICS);
      };
      items.push(closure_15(pushScreen(5910).TableRow, obj2, "analytics"));
    }
    let tmp9 = null;
    if (0 !== items.length) {
      const obj4 = { title: null, hasIcons: true, children: null };
      const intl3 = pushScreen(1115).intl;
      obj4.title = intl3.string(pushScreen(1115).t["1g9A/f"]);
      obj4.children = items;
      tmp9 = closure_15(pushScreen(5992).TableRowGroup, obj4);
    }
    return tmp9;
  } else {
    let TreehouseIcon = dependencyMap;
    const TableRow = pushScreen(5910).TableRow;
    const obj = { label: null, arrow: true, icon: null, onPress: null };
    const intl = pushScreen(1115).intl;
    let Icon = intl.string;
    let t = pushScreen(1115).t;
    if (hasItem) {
      obj.label = Icon(t.nRtNqn);
      Icon = tmp3(5910).TableRow.Icon;
      const obj5 = { IconComponent: null };
      TreehouseIcon = tmp3(15951).TreehouseIcon;
      obj5.IconComponent = TreehouseIcon;
      obj.icon = closure_15(Icon, obj5);
      obj.onPress = function onPress() {
        return pushScreen(constants2.COMMUNITY, {});
      };
      let tmp2Result = closure_15(TableRow, obj, "community-overview");
    } else {
      obj.label = Icon(t.ElKTeb);
      const obj6 = { IconComponent: tmp3(15951).TreehouseIcon };
      obj.icon = closure_15(tmp3(5910).TableRow.Icon, obj6);
      obj.onPress = function onPress() {
        return pushScreen(constants2.COMMUNITY_INTRO, {});
      };
      tmp2Result = closure_15(TableRow, obj, "community-intro");
    }
    t = items.push(tmp2Result);
  }
}
function GuildSettingsModalLandingInner(guild) {
  guild = guild.guild;
  const updateErrors = guild.updateErrors;
  const token = guild(4526).useToken(updateErrors(576).modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_18();
  let obj = guild(4526);
  const navigation = guild(1484).useNavigation();
  let obj2 = guild(1484);
  let items = [GuildChannelStore];
  const stateFromStores = guild(504).useStateFromStores(items, () => {
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
  const stateFromStoresObject = guild(504).useStateFromStoresObject(items1, () => PermissionStore.getGuildPermissionProps(guild));
  const effect = noop.useEffect(() => {
    const obj2 = { settings_type: "guild", origin_pane: "Array", destination_pane: constants.LANDING };
    updateErrors(dependencyMap[9]).trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj2);
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
      GuildSettingsActionCreatorsDefault.setSection(first);
      const navigate = navigation.navigate;
      const items1 = [];
      HermesBuiltin.arraySpread(items, 0);
      HermesBuiltin.apply(items1, navigation);
      const obj3 = { settings_type: "guild", origin_pane: constants2.LANDING, destination_pane: first };
      AppAnalyticsUtilsDefault.trackWithMetadata(constants4.SETTINGS_PANE_VIEWED, obj3);
    }
  }, items2);
  ({ canManageGuild, isGuildAdmin, canManageRoles, canManageBans, canManageGuildExpressions, canManageChannels, canViewAuditLog, canManageWebhooks, canViewGuildAnalytics } = stateFromStoresObject);
  const obj4 = guild(504);
  const obj6 = guild(18032);
  const tmp11 = guild(18032).useChannelsAllowedToUnlink(guild.id).length > 0;
  const canManageGuildRoleSubscriptions = guild(7590).useCanManageGuildRoleSubscriptions(guild);
  let result = canManageGuild;
  if (canManageGuild) {
    result = tmp(7597).isGuildOfficialMessagesEnabled(guild, "GuildSettingsModalLanding");
    const tmpResult = tmp(7597);
  }
  const items3 = [updateErrors.message];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (null != updateErrors.message) {
      ToastUtils.presentError(tmp.message);
    }
  }, items3);
  const obj8 = { style: tmp5.container, contentContainerStyle: null, children: null };
  const items4 = [tmp5.containerContent, guild.contentContainerStyle];
  obj8.contentContainerStyle = items4;
  const obj9 = { style: { paddingHorizontal: token }, spacing: updateErrors(576).space.PX_24, children: null };
  const items5 = [
    closure_15(updateErrors(17423), {
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
            const obj2 = { id: guild.id, icon, canAnimate: true, size: 64 };
            guildIconURL = AvatarUtilsDefault.getGuildIconURL(obj2);
          }
          return guildIconURL;
        },
        disabled: !stateFromStoresObject.canManageGuild
      },
      text: guild.name,
      textAccessibilityRole: "header"
    }),
    closure_15(SettingsSection, { guild, categories: stateFromStores, isGuildAdmin, canManageGuild, canManageChannels, canUnlinkChannelLobbies: tmp11, canManageWebhooks, pushScreen: callback }),
    closure_15(ExpressionSection, { canManageGuildExpressions, canConfigureOfficialMessages: result, pushScreen: callback }),
    closure_15(PeopleSection, { canManageGuild, canManageRoles, pushScreen: callback }),
    closure_15(ModerationSection, { canManageGuild, canViewAuditLog, canManageBans, pushScreen: callback }),
    closure_15(CommunitySection, { guild, canManageGuild, canViewGuildAnalytics, pushScreen: callback }),

  ];
  let tmp17Result = canManageGuildRoleSubscriptions;
  if (canManageGuildRoleSubscriptions) {
    const obj11 = { guild, pushScreen: callback };
    tmp17Result = closure_15(tmp3(18033), obj11);
  }
  const obj12 = { children: null };
  items5[6] = tmp17Result;
  obj9.children = items5;
  obj8.children = closure_16(guild(5271).Stack, obj9);
  const items6 = [closure_15(guild(8951).Form, obj8), closure_15(guild(7373).NavScrim, {})];
  obj12.children = items6;
  return closure_16(closure_17, obj12);
}
const Constants = fn(1074);
({ GuildFeatures: closure_11, GuildSettingsSections: closure_12, ChannelTypes: map1, AnalyticEvents: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
const createStyles = fn(4829);
let closure_18 = createStyles.createStyles({ container: { flex: 1 }, containerContent: { paddingTop: 16 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalLanding.tsx");

export default function GuildSettingsModalLanding(guildId) {
  guildId = guildId.guildId;
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  guildId(504);
  [][0] = GuildSettingsStore;
  let tmp4 = null;
  if (null != stateFromStores) {
    const obj2 = { guild: stateFromStores, contentContainerStyle: guildId.contentContainerStyle, updateErrors: tmp3 };
    tmp4 = closure_15(GuildSettingsModalLandingInner, obj2);
  }
  return tmp4;
};