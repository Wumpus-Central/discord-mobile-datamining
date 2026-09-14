// discord_app/modules/guild_settings/native/GuildSettingsModalLanding.tsx
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import PermissionUtilsAll from "../../../utils/PermissionUtils.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import AppAnalyticsUtilsDefault from "../../app_analytics/AppAnalyticsUtils.tsx";
import GuildSettingsActionCreatorsDefault from "../GuildSettingsActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import GuildSettingsModalChannelsStore from "../GuildSettingsModalChannelsStore.tsx";
import GuildSettingsStore from "../GuildSettingsStore.tsx";

require = fn;
function SettingsSection(guild) {
  guild = guild.guild;
  ({ isGuildAdmin, canManageGuild, canManageChannels, pushScreen: importDefault } = guild);
  const tmp2 = guild;
  ({
    canManageGuildExpressions,
    canViewAuditLog,
    canManageWebhooks,
    canUnlinkChannelLobbies,
    canConfigureOfficialMessages,
    categories,
  } = guild);
  const obj = { label: null, arrow: true, icon: null, onPress: null };
  const intl = guild(1114).intl;
  obj.label = intl.string(guild(1114).t["/dp6yY"]);
  obj.icon = closure_15(guild(5686).TableRow.Icon, { IconComponent: guild(4591).CircleInformationIcon });
  obj.onPress = function onPress() {
    return importDefault(constants2.OVERVIEW);
  };
  const items = [closure_15(guild(5686).TableRow, obj, "overview")];
  const currentUser = UserStore.getCurrentUser();
  if (canManageGuild) {
    const obj3 = { label: null, arrow: true, icon: null, onPress: null };
    const intl2 = tmp2(1114).intl;
    obj3.label = intl2.string(tmp2(1114).t["5tbTdV"]);
    const obj4 = { IconComponent: tmp2(17634).ModerationIcon };
    obj3.icon = closure_15(tmp2(5686).TableRow.Icon, obj4);
    obj3.onPress = function onPress() {
      return importDefault(constants2.MODERATION);
    };
    items.push(closure_15(tmp2(5686).TableRow, obj3, "moderation"));
  }
  if (canViewAuditLog) {
    const obj5 = { label: null, arrow: true, icon: null, onPress: null };
    const intl3 = tmp2(1114).intl;
    obj5.label = intl3.string(tmp2(1114).t.SPWLyT);
    const obj6 = { IconComponent: tmp2(5619).ClipboardListIcon };
    obj5.icon = closure_15(tmp2(5686).TableRow.Icon, obj6);
    obj5.onPress = function onPress() {
      return importDefault(constants2.AUDIT_LOG);
    };
    items.push(closure_15(tmp2(5686).TableRow, obj5, "auditlogs"));
  }
  if (!canManageChannels) {
    let canManageACategoryResult = null != currentUser;
    if (canManageACategoryResult) {
      canManageACategoryResult = PermissionUtilsAll.canManageACategory(currentUser, guild, categories);
    }
    canManageChannels = canManageACategoryResult;
  }
  if (canManageChannels) {
    const obj8 = { label: null, arrow: true, icon: null, onPress: null };
    const intl4 = tmp2(1114).intl;
    obj8.label = intl4.string(tmp2(1114).t.OGiMXJ);
    const obj9 = { IconComponent: tmp2(17636).ChannelListIcon };
    obj8.icon = closure_15(tmp2(5686).TableRow.Icon, obj9);
    obj8.onPress = function onPress() {
      guild = GuildSettingsModalChannelsStore.initGuild(guild.id);
      importDefault(constants2.CHANNELS);
    };
    items.push(closure_15(tmp2(5686).TableRow, obj8, "channels"));
  }
  let tmp11 = canManageGuild;
  if (!canManageGuild) {
    tmp11 = canManageWebhooks;
  }
  if (!tmp11) {
    tmp11 = canUnlinkChannelLobbies;
  }
  if (tmp11) {
    const obj10 = { label: null, arrow: true, icon: null, onPress: null };
    const intl5 = tmp2(1114).intl;
    obj10.label = intl5.string(tmp2(1114).t.CIsNZw);
    const obj11 = { IconComponent: tmp2(15044).PuzzlePieceIcon };
    obj10.icon = closure_15(tmp2(5686).TableRow.Icon, obj11);
    obj10.onPress = function onPress() {
      return importDefault(constants2.INTEGRATIONS);
    };
    items.push(closure_15(tmp2(5686).TableRow, obj10, "integrations"));
  }
  if (canManageGuildExpressions) {
    const obj12 = { label: null, arrow: true, icon: null, onPress: null };
    const intl6 = tmp2(1114).intl;
    obj12.label = intl6.string(tmp2(1114).t.sMOuuS);
    const obj13 = { IconComponent: tmp2(8883).ReactionIcon };
    obj12.icon = closure_15(tmp2(5686).TableRow.Icon, obj13);
    obj12.onPress = function onPress() {
      return importDefault(constants2.EMOJI);
    };
    items.push(closure_15(tmp2(5686).TableRow, obj12, "emoji"));
    const obj14 = { label: null, arrow: true, icon: null, onPress: null };
    const intl7 = tmp2(1114).intl;
    obj14.label = intl7.string(tmp2(1114).t.R5nQkS);
    const obj15 = { IconComponent: tmp2(10242).StickerIcon };
    obj14.icon = closure_15(tmp2(5686).TableRow.Icon, obj15);
    obj14.onPress = function onPress() {
      return importDefault(constants2.STICKERS);
    };
    items.push(closure_15(tmp2(5686).TableRow, obj14, "stickers"));
  }
  if (canConfigureOfficialMessages) {
    const obj16 = { label: null, arrow: true, icon: null, onPress: null };
    const intl8 = tmp2(1114).intl;
    obj16.label = intl8.string(tmp2(1114).t.xHEzFh);
    const obj17 = { IconComponent: tmp2(11870).StampIcon };
    obj16.icon = closure_15(tmp2(5686).TableRow.Icon, obj17);
    obj16.onPress = function onPress() {
      return importDefault(constants2.OFFICIAL_MESSAGES);
    };
    items.push(closure_15(tmp2(5686).TableRow, obj16, "official-messages"));
  }
  const obj2 = { IconComponent: guild(4591).CircleInformationIcon };
  if (tmp2Result.canUseMobileServerTagSettings(guild.id)) {
    const obj18 = { label: null, arrow: true, icon: null, onPress: null };
    const intl9 = tmp2(1114).intl;
    obj18.label = intl9.string(tmp2(1114).t["2QmKZ2"]);
    const obj19 = { IconComponent: tmp2(8987).TagIcon };
    obj18.icon = closure_15(tmp2(5686).TableRow.Icon, obj19);
    obj18.onPress = function onPress() {
      return importDefault(constants2.TAG);
    };
    items.push(closure_15(tmp2(5686).TableRow, obj18, "server-tag"));
  }
  if (canManageGuild) {
    const obj20 = { label: null, arrow: true, icon: null, onPress: null };
    const intl10 = tmp2(1114).intl;
    obj20.label = intl10.string(tmp2(1114).t.Am9YHi);
    const obj21 = { IconComponent: tmp2(9882).ShieldUserIcon };
    obj20.icon = closure_15(tmp2(5686).TableRow.Icon, obj21);
    obj20.onPress = function onPress() {
      return importDefault(constants2.SECURITY);
    };
    items.push(closure_15(tmp2(5686).TableRow, obj20, "security"));
  }
  if (isGuildAdmin) {
    isGuildAdmin = tmp2(17638).canSeeVanityUrlSettings(guild);
    const tmp2Result2 = tmp2(17638);
  }
  if (isGuildAdmin) {
    const obj22 = { label: null, arrow: true, icon: null, onPress: null };
    const intl11 = tmp2(1114).intl;
    obj22.label = intl11.string(tmp2(1114).t["5XZKy/"]);
    const obj23 = { IconComponent: tmp2(4579).LinkIcon };
    obj22.icon = closure_15(tmp2(5686).TableRow.Icon, obj23);
    obj22.onPress = function onPress() {
      return importDefault(constants2.VANITY_URL);
    };
    items.push(closure_15(tmp2(5686).TableRow, obj22, "vanity"));
  }
  let tmpResult = null;
  if (0 !== items.length) {
    const obj24 = { title: null, hasIcons: true, children: null };
    const intl12 = tmp2(1114).intl;
    obj24.title = intl12.string(tmp2(1114).t["3D5yo/"]);
    obj24.children = items;
    tmpResult = closure_15(tmp2(5768).TableRowGroup, obj24);
  }
  return tmpResult;
}
function CommunitySection(pushScreen) {
  pushScreen = pushScreen.pushScreen;
  const features = pushScreen.guild.features;
  const hasItem = features.has(constants.COMMUNITY);
  const obj = { title: null, hasIcons: true, children: null };
  const intl = pushScreen(1114).intl;
  obj.title = intl.string(pushScreen(1114).t["1g9A/f"]);
  const TableRow = pushScreen(5686).TableRow;
  const obj2 = { label: null, arrow: true, icon: null, onPress: null };
  const intl2 = pushScreen(1114).intl;
  const string = intl2.string;
  const t = pushScreen(1114).t;
  if (hasItem) {
    obj2.label = string(t.nRtNqn);
    const obj3 = { IconComponent: tmp3(15680).TreehouseIcon };
    obj2.icon = closure_15(tmp3(5686).TableRow.Icon, obj3);
    obj2.onPress = function onPress() {
      return pushScreen(constants2.COMMUNITY, {});
    };
    let tmp2Result = closure_15(TableRow, obj2, "community-overview");
  } else {
    obj2.label = string(t.ElKTeb);
    const obj4 = { IconComponent: tmp3(15680).TreehouseIcon };
    obj2.icon = closure_15(tmp3(5686).TableRow.Icon, obj4);
    obj2.onPress = function onPress() {
      return pushScreen(constants2.COMMUNITY_INTRO, {});
    };
    tmp2Result = closure_15(TableRow, obj2, "community-intro");
  }
  obj.children = tmp2Result;
  return closure_15(pushScreen(5768).TableRowGroup, obj);
}
function UserManagementSection(pushScreen) {
  pushScreen = pushScreen.pushScreen;
  ({ canManageGuild, canManageRoles, canManageBans } = pushScreen);
  const obj = { label: null, arrow: true, icon: null, onPress: null };
  const intl = pushScreen(1114).intl;
  obj.label = intl.string(pushScreen(1114).t["9Oq93m"]);
  obj.icon = closure_15(pushScreen(5686).TableRow.Icon, { IconComponent: pushScreen(5170).GroupIcon });
  obj.onPress = function onPress() {
    return pushScreen(constants2.MEMBERS);
  };
  const items = [closure_15(pushScreen(5686).TableRow, obj, "members")];
  if (canManageRoles) {
    const obj3 = { label: null, arrow: true, icon: null, onPress: null };
    const intl2 = tmp2(1114).intl;
    obj3.label = intl2.string(tmp2(1114).t["LPJmL/"]);
    const obj4 = { IconComponent: tmp2(9882).ShieldUserIcon };
    obj3.icon = closure_15(tmp2(5686).TableRow.Icon, obj4);
    obj3.onPress = function onPress() {
      return pushScreen(constants2.ROLES);
    };
    items.push(closure_15(tmp2(5686).TableRow, obj3, "roles"));
  }
  if (canManageGuild) {
    const obj5 = { label: null, arrow: true, icon: null, onPress: null };
    const intl3 = tmp2(1114).intl;
    obj5.label = intl3.string(tmp2(1114).t.ngRFjZ);
    const obj6 = { IconComponent: tmp2(4579).LinkIcon };
    obj5.icon = closure_15(tmp2(5686).TableRow.Icon, obj6);
    obj5.onPress = function onPress() {
      return pushScreen(constants2.INSTANT_INVITES);
    };
    items.push(closure_15(tmp2(5686).TableRow, obj5, "invites"));
  }
  if (canManageBans) {
    const obj7 = { label: null, arrow: true, icon: null, onPress: null };
    const intl4 = tmp2(1114).intl;
    obj7.label = intl4.string(tmp2(1114).t.ZbeITS);
    const obj8 = { IconComponent: tmp2(9563).HammerIcon };
    obj7.icon = closure_15(tmp2(5686).TableRow.Icon, obj8);
    obj7.onPress = function onPress() {
      return pushScreen(constants2.BANS);
    };
    items.push(closure_15(tmp2(5686).TableRow, obj7, "bans"));
  }
  let tmpResult = null;
  if (0 !== items.length) {
    const obj9 = { title: null, hasIcons: true, children: null };
    const intl5 = tmp2(1114).intl;
    obj9.title = intl5.string(tmp2(1114).t["+OecxG"]);
    obj9.children = items;
    tmpResult = closure_15(tmp2(5768).TableRowGroup, obj9);
  }
  return tmpResult;
}
function GuildSettingsModalLandingInner(guild) {
  guild = guild.guild;
  const updateErrors = guild.updateErrors;
  const token = guild(4338).useToken(updateErrors(576).modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_18();
  let obj = guild(4338);
  const navigation = guild(1483).useNavigation();
  let obj2 = guild(1483);
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
  const stateFromStoresObject = guild(504).useStateFromStoresObject(items1, () =>
    PermissionStore.getGuildPermissionProps(guild),
  );
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
  ({
    canManageGuild,
    isGuildAdmin,
    canManageRoles,
    canManageBans,
    canManageGuildExpressions,
    canManageChannels,
    canViewAuditLog,
    canManageWebhooks,
  } = stateFromStoresObject);
  const obj4 = guild(504);
  const obj6 = guild(17639);
  const tmp11 = guild(17639).useChannelsAllowedToUnlink(guild.id).length > 0;
  const canManageGuildRoleSubscriptions = guild(7363).useCanManageGuildRoleSubscriptions(guild);
  let result = canManageGuild;
  if (canManageGuild) {
    result = tmp(7370).isGuildOfficialMessagesEnabled(guild, "GuildSettingsModalLanding");
    const tmpResult = tmp(7370);
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
    closure_15(updateErrors(16966), {
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
        disabled: !stateFromStoresObject.canManageGuild,
      },
      text: guild.name,
      textAccessibilityRole: "header",
    }),
    closure_15(SettingsSection, {
      guild,
      categories: stateFromStores,
      isGuildAdmin,
      canManageGuild,
      canManageGuildExpressions,
      canManageChannels,
      canUnlinkChannelLobbies: tmp11,
      canViewAuditLog,
      canManageWebhooks,
      canConfigureOfficialMessages: result,
      pushScreen: callback,
    }),
    ,
    ,
  ];
  let tmp17Result = canManageGuild;
  if (canManageGuild) {
    const obj11 = { guild, pushScreen: callback };
    tmp17Result = closure_15(CommunitySection, obj11);
  }
  items5[2] = tmp17Result;
  let tmp17Result2 = canManageGuildRoleSubscriptions;
  if (canManageGuildRoleSubscriptions) {
    const obj12 = { guild, pushScreen: callback };
    tmp17Result2 = closure_15(tmp3(17640), obj12);
  }
  const obj13 = { children: null };
  items5[3] = tmp17Result2;
  items5[4] = closure_15(UserManagementSection, {
    canManageGuild,
    canManageRoles,
    canManageBans,
    pushScreen: callback,
  });
  obj9.children = items5;
  obj8.children = closure_16(guild(5054).Stack, obj9);
  const items6 = [closure_15(guild(8716).Form, obj8), closure_15(guild(7143).NavScrim, {})];
  obj13.children = items6;
  return closure_16(closure_17, obj13);
}
const Constants = fn(1074);
({
  GuildFeatures: closure_11,
  GuildSettingsSections: closure_12,
  ChannelTypes: map1,
  AnalyticEvents: closure_14,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
const createStyles = fn(4636);
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
}
