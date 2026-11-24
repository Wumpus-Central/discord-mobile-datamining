// === Module 19737: GuildSettingsModalLanding ===

// Module 19737 (GuildSettingsModalLanding)
import util from "util" /* 1112 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1412 */;
import PermissionUtilsAll from "PermissionUtils" /* 4854 */;
import ToastUtils from "ToastUtils" /* 5598 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5887 */;
import TableRowGroup from "TableRowGroup" /* 6014 */;
import TableRow2 from "TableRow" /* 6018 */;
import ClipboardListIcon from "ClipboardListIcon" /* 6876 */;
import ShieldUserIcon from "ShieldUserIcon" /* 8415 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8432 */;
import ReactionIcon from "ReactionIcon" /* 9563 */;
import StickerIcon from "StickerIcon" /* 10497 */;
import StampIcon from "StampIcon" /* 12115 */;
import RobotIcon from "RobotIcon" /* 12121 */;
import HammerIcon from "HammerIcon" /* 12300 */;
import SoundboardIcon from "SoundboardIcon" /* 13340 */;
import _modDef14338 from "module_14338" /* 14338 */;
import SoundboardMobileCreationExperimentDefault from "SoundboardMobileCreationExperiment" /* 19741 */;
import ModerationIcon from "ModerationIcon" /* 19742 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4847 */;
import GuildStore from "GuildStore" /* 4788 */;
import PermissionStore from "PermissionStore" /* 4849 */;
import UserStore from "UserStore" /* 1386 */;
import GuildSettingsModalChannelsStore from "GuildSettingsModalChannelsStore" /* 17702 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8433 */;

require = fn;
function SettingsSection(guild) {
  guild = guild.guild;
  ({ isGuildAdmin, canManageGuild, canManageChannels, pushScreen: importDefault } = guild);
  ({ canManageWebhooks, canUnlinkChannelLobbies, categories } = guild);
  const obj = { label: null, arrow: true, icon: null, onPress: null };
  const intl = guild(1112).intl;
  obj.label = intl.string(guild(1112).t["/dp6yY"]);
  obj.icon = closure_15(guild(6018).TableRow.Icon, { IconComponent: guild(5621).CircleInformationIcon });
  obj.onPress = function onPress() {
    return importDefault(constants2.OVERVIEW);
  };
  items = [closure_15(guild(6018).TableRow, obj, "overview")];
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
    const intl2 = tmp2(1112).intl;
    obj4.label = intl2.string(tmp2(1112).t.OGiMXJ);
    const obj5 = { IconComponent: tmp2(19738).ChannelListIcon };
    obj4.icon = closure_15(tmp2(6018).TableRow.Icon, obj5);
    obj4.onPress = function onPress() {
      guild = GuildSettingsModalChannelsStore.initGuild(guild.id);
      importDefault(constants2.CHANNELS);
    };
    items.push(closure_15(tmp2(6018).TableRow, obj4, "channels"));
  }
  let tmp9 = canManageGuild;
  if (!canManageGuild) {
    tmp9 = canManageWebhooks;
  }
  if (!tmp9) {
    tmp9 = canUnlinkChannelLobbies;
  }
  if (tmp9) {
    const obj6 = { label: null, arrow: true, icon: null, onPress: null };
    const intl3 = tmp2(1112).intl;
    obj6.label = intl3.string(tmp2(1112).t.CIsNZw);
    const obj7 = { IconComponent: tmp2(18984).PuzzlePieceIcon };
    obj6.icon = closure_15(tmp2(6018).TableRow.Icon, obj7);
    obj6.onPress = function onPress() {
      return importDefault(constants2.INTEGRATIONS);
    };
    items.push(closure_15(tmp2(6018).TableRow, obj6, "integrations"));
  }
  const obj2 = { IconComponent: guild(5621).CircleInformationIcon };
  if (tmp2Result.canUseMobileServerTagSettings(guild.id)) {
    const obj8 = { label: null, arrow: true, icon: null, onPress: null };
    const intl4 = tmp2(1112).intl;
    obj8.label = intl4.string(tmp2(1112).t["2QmKZ2"]);
    const obj9 = { IconComponent: tmp2(10932).TagIcon };
    obj8.icon = closure_15(tmp2(6018).TableRow.Icon, obj9);
    obj8.onPress = function onPress() {
      return importDefault(constants2.TAG);
    };
    items.push(closure_15(tmp2(6018).TableRow, obj8, "server-tag"));
  }
  if (isGuildAdmin) {
    isGuildAdmin = tmp2(19740).canSeeVanityUrlSettings(guild);
    const tmp2Result2 = tmp2(19740);
  }
  if (isGuildAdmin) {
    const obj10 = { label: null, arrow: true, icon: null, onPress: null };
    const intl5 = tmp2(1112).intl;
    obj10.label = intl5.string(tmp2(1112).t["5XZKy/"]);
    const obj11 = { IconComponent: tmp2(5613).LinkIcon };
    obj10.icon = closure_15(tmp2(6018).TableRow.Icon, obj11);
    obj10.onPress = function onPress() {
      return importDefault(constants2.VANITY_URL);
    };
    items.push(closure_15(tmp2(6018).TableRow, obj10, "vanity"));
  }
  if (canManageGuild) {
    const obj12 = { label: null, arrow: true, icon: null, onPress: null };
    const intl6 = tmp2(1112).intl;
    obj12.label = intl6.string(tmp2(1112).t.KUw7Ss);
    const obj13 = { source: _modDef14338 };
    obj12.icon = closure_15(tmp2(6018).TableRow.Icon, obj13);
    obj12.onPress = function onPress() {
      return importDefault(constants2.GUILD_TEMPLATES);
    };
    items.push(closure_15(tmp2(6018).TableRow, obj12, "guild-template"));
  }
  let tmpResult = null;
  if (0 !== items.length) {
    const obj14 = { title: null, hasIcons: true, children: null };
    const intl7 = tmp2(1112).intl;
    obj14.title = intl7.string(tmp2(1112).t["3D5yo/"]);
    obj14.children = items;
    tmpResult = closure_15(tmp2(6014).TableRowGroup, obj14);
  }
  return tmpResult;
}
function ExpressionSection(arg0) {
  ({ canManageGuildExpressions, pushScreen: require } = arg0);
  ({ guildId, canConfigureOfficialMessages } = arg0);
  SoundboardMobileCreationExperimentDefault;
  items = [];
  if (canManageGuildExpressions) {
    const obj = { label: null, arrow: true, icon: null, onPress: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.sMOuuS);
    const obj2 = { IconComponent: ReactionIcon.ReactionIcon };
    obj.icon = closure_15(TableRow2.TableRow.Icon, obj2);
    obj.onPress = function onPress() {
      return require(constants2.EMOJI);
    };
    items.push(closure_15(TableRow2.TableRow, obj, "emoji"));
    const obj3 = { label: null, arrow: true, icon: null, onPress: null };
    const intl2 = util.intl;
    obj3.label = intl2.string(util.t.R5nQkS);
    const obj4 = { IconComponent: StickerIcon.StickerIcon };
    obj3.icon = closure_15(TableRow2.TableRow.Icon, obj4);
    obj3.onPress = function onPress() {
      return require(constants2.STICKERS);
    };
    items.push(closure_15(TableRow2.TableRow, obj3, "stickers"));
    if (tmp3) {
      const obj5 = { label: null, arrow: true, icon: null, onPress: null };
      const intl3 = util.intl;
      obj5.label = intl3.string(util.t.OWQNYr);
      const obj6 = { IconComponent: SoundboardIcon.SoundboardIcon };
      obj5.icon = closure_15(TableRow2.TableRow.Icon, obj6);
      obj5.onPress = function onPress() {
        return require(constants2.SOUNDBOARD);
      };
      items.push(closure_15(TableRow2.TableRow, obj5, "soundboard"));
    }
  }
  if (canConfigureOfficialMessages) {
    const obj7 = { label: null, arrow: true, icon: null, onPress: null };
    const intl4 = util.intl;
    obj7.label = intl4.string(util.t.xHEzFh);
    const obj8 = { IconComponent: StampIcon.StampIcon };
    obj7.icon = closure_15(TableRow2.TableRow.Icon, obj8);
    obj7.onPress = function onPress() {
      return require(constants2.OFFICIAL_MESSAGES);
    };
    items.push(closure_15(TableRow2.TableRow, obj7, "official-messages"));
  }
  let tmp12 = null;
  if (0 !== items.length) {
    const obj9 = { title: null, hasIcons: true, children: null };
    const intl5 = util.intl;
    obj9.title = intl5.string(util.t.m6lkGy);
    obj9.children = items;
    tmp12 = closure_15(TableRowGroup.TableRowGroup, obj9);
  }
  return tmp12;
}
function PeopleSection(pushScreen) {
  pushScreen = pushScreen.pushScreen;
  ({ canManageGuild, canManageRoles } = pushScreen);
  const obj = { label: null, arrow: true, icon: null, onPress: null };
  const intl = pushScreen(1112).intl;
  obj.label = intl.string(pushScreen(1112).t["9Oq93m"]);
  obj.icon = closure_15(pushScreen(6018).TableRow.Icon, { IconComponent: pushScreen(7029).GroupIcon });
  obj.onPress = function onPress() {
    return pushScreen(constants2.MEMBERS);
  };
  items = [closure_15(pushScreen(6018).TableRow, obj, "members")];
  if (canManageRoles) {
    const obj3 = { label: null, arrow: true, icon: null, onPress: null };
    const intl2 = tmp2(1112).intl;
    obj3.label = intl2.string(tmp2(1112).t["LPJmL/"]);
    const obj4 = { IconComponent: tmp2(8415).ShieldUserIcon };
    obj3.icon = closure_15(tmp2(6018).TableRow.Icon, obj4);
    obj3.onPress = function onPress() {
      return pushScreen(constants2.ROLES);
    };
    items.push(closure_15(tmp2(6018).TableRow, obj3, "roles"));
  }
  if (canManageGuild) {
    const obj5 = { label: null, arrow: true, icon: null, onPress: null };
    const intl3 = tmp2(1112).intl;
    obj5.label = intl3.string(tmp2(1112).t.ngRFjZ);
    const obj6 = { IconComponent: tmp2(5613).LinkIcon };
    obj5.icon = closure_15(tmp2(6018).TableRow.Icon, obj6);
    obj5.onPress = function onPress() {
      return pushScreen(constants2.INSTANT_INVITES);
    };
    items.push(closure_15(tmp2(6018).TableRow, obj5, "invites"));
  }
  const obj7 = { title: null, hasIcons: true, children: null };
  const intl4 = tmp2(1112).intl;
  obj7.title = intl4.string(pushScreen(1112).t.bMAKMK);
  obj7.children = items;
  return closure_15(pushScreen(6014).TableRowGroup, obj7);
}
function ModerationSection(arg0) {
  ({ canManageGuild, canViewAuditLog, canManageBans, pushScreen: require } = arg0);
  items = [];
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
  if (!canManageBans) {
    canManageBans = canViewAuditLog;
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
  items = [];
  if (!canManageGuild) {
    if (hasItem) {
      hasItem = canViewGuildAnalytics;
    }
    if (hasItem) {
      const obj2 = { label: null, arrow: true, icon: null, onPress: null };
      const intl2 = pushScreen(1112).intl;
      obj2.label = intl2.string(pushScreen(1112).t["0wWfUG"]);
      const obj3 = { IconComponent: pushScreen(10682).AnalyticsIcon };
      obj2.icon = closure_15(pushScreen(6018).TableRow.Icon, obj3);
      obj2.onPress = function onPress() {
        return pushScreen(constants2.ANALYTICS);
      };
      items.push(closure_15(pushScreen(6018).TableRow, obj2, "analytics"));
    }
    let tmp9 = null;
    if (0 !== items.length) {
      const obj4 = { title: null, hasIcons: true, children: null };
      const intl3 = pushScreen(1112).intl;
      obj4.title = intl3.string(pushScreen(1112).t["1g9A/f"]);
      obj4.children = items;
      tmp9 = closure_15(pushScreen(6014).TableRowGroup, obj4);
    }
    return tmp9;
  } else {
    let TreehouseIcon = dependencyMap;
    const TableRow = pushScreen(6018).TableRow;
    const obj = { label: null, arrow: true, icon: null, onPress: null };
    const intl = pushScreen(1112).intl;
    let Icon = intl.string;
    let t = pushScreen(1112).t;
    if (hasItem) {
      obj.label = Icon(t.nRtNqn);
      Icon = tmp3(6018).TableRow.Icon;
      const obj5 = { IconComponent: null };
      TreehouseIcon = tmp3(17046).TreehouseIcon;
      obj5.IconComponent = TreehouseIcon;
      obj.icon = closure_15(Icon, obj5);
      obj.onPress = function onPress() {
        return pushScreen(constants2.COMMUNITY, {});
      };
      let tmp2Result = closure_15(TableRow, obj, "community-overview");
    } else {
      obj.label = Icon(t.ElKTeb);
      const obj6 = { IconComponent: tmp3(17046).TreehouseIcon };
      obj.icon = closure_15(tmp3(6018).TableRow.Icon, obj6);
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
  const token = guild(5481).useToken(updateErrors(575).modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_18();
  let obj = guild(5481);
  const navigation = guild(1500).useNavigation();
  let obj2 = guild(1500);
  items = [GuildChannelStore];
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
    items = [...arguments];
    const first = items[0];
    state = navigation.getState();
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
  const obj6 = guild(19744);
  const tmp11 = guild(19744).useChannelsAllowedToUnlink(guild.id).length > 0;
  const canManageGuildRoleSubscriptions = guild(7491).useCanManageGuildRoleSubscriptions(guild);
  let result = canManageGuild;
  if (canManageGuild) {
    result = tmp(7500).isGuildOfficialMessagesEnabled(guild, "GuildSettingsModalLanding");
    const tmpResult = tmp(7500);
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
  const obj9 = { style: { paddingHorizontal: token }, spacing: updateErrors(575).space.PX_24, children: null };
  const items5 = [
    closure_15(updateErrors(19017), {
      iconProps: {
        onUpload: function handleGuildIconUpload(icon) {
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
    closure_15(ExpressionSection, { guildId: guild.id, canManageGuildExpressions, canConfigureOfficialMessages: result, pushScreen: callback }),
    closure_15(PeopleSection, { canManageGuild, canManageRoles, pushScreen: callback }),
    closure_15(ModerationSection, { canManageGuild, canViewAuditLog, canManageBans, pushScreen: callback }),
    closure_15(CommunitySection, { guild, canManageGuild, canViewGuildAnalytics, pushScreen: callback }),

  ];
  let tmp17Result = canManageGuildRoleSubscriptions;
  if (canManageGuildRoleSubscriptions) {
    const obj12 = { guild, pushScreen: callback };
    tmp17Result = closure_15(tmp3(19745), obj12);
  }
  const obj13 = { children: null };
  items5[6] = tmp17Result;
  obj9.children = items5;
  obj8.children = closure_16(guild(5989).Stack, obj9);
  const items6 = [closure_15(guild(7947).Form, obj8), closure_15(guild(5491).NavScrim, {})];
  obj13.children = items6;
  return closure_16(closure_17, obj13);
}
const Constants = fn(1071);
({ GuildFeatures: closure_11, GuildSettingsSections: closure_12, ChannelTypes: map1, AnalyticEvents: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
const createStyles = fn(4917);
let closure_18 = createStyles.createStyles({ container: { flex: 1 }, containerContent: { paddingTop: 16 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalLanding.tsx");

export default function GuildSettingsModalLanding(guildId) {
  guildId = guildId.guildId;
  items = [GuildStore];
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