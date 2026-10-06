// discord_app/modules/guild_settings/community/native/GuildSettingsModalCommunity.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl11 from "../../../../intl/index.native.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import GuildChannelStore2 from "../../../../stores/GuildChannelStore.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import HeaderActionButton2 from "../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import GuildSettingsActionCreatorsDefault from "../../GuildSettingsActionCreators.tsx";
import GuildSettingsDiscoveryConstants from "../../discovery/GuildSettingsDiscoveryConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import GuildSettingsStore from "../../GuildSettingsStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const GuildChannelStore = GuildChannelStore2;
let channel, navigation, set;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let map1;
let obj2;
let closure_6 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
const calculateLocaleOptions = GuildSettingsDiscoveryConstants.calculateLocaleOptions;
({
  ChannelTypes: closure_12,
  GuildFeatures: map1,
  GuildSettingsSections: closure_14,
  Permissions: closure_15,
} = Constants);
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
let obj = { overview: { flex: 1 }, overviewContent: obj2 };
obj2 = { paddingTop: nativeDefault.space.PX_16 };
let closure_18 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_settings/community/native/GuildSettingsModalCommunity.tsx");

export default function GuildSettingsModalCommunity(guildId) {
  let Stack;
  let TableRow;
  let TableRow2;
  let TableRow3;
  let TableRow4;
  let TableRow5;
  let TrailingText;
  let TrailingText2;
  let TrailingText3;
  let TrailingText4;
  let canManage;
  let intl10;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let isAdmin;
  let items10;
  let obj10;
  let obj12;
  let obj13;
  let obj15;
  let obj16;
  let obj18;
  let obj19;
  let obj21;
  let obj22;
  let obj24;
  let obj9;
  let stringResult;
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  navigation = undefined;
  let publicUpdatesChannel;
  let callback1;
  let preferredLocale;
  const tmp = guildId;
  let tmp2 = navigation;
  let obj = guildId(navigation[12]);
  const token = obj.useToken(onClose(navigation[11]).modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_18();
  let obj2 = guildId(navigation[13]);
  navigation = obj2.useNavigation();
  let obj3 = guildId(navigation[14]);
  const items = [preferredLocale];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => preferredLocale.getProps());
  const submitting = stateFromStoresObject.submitting;
  const hasChanges = stateFromStoresObject.hasChanges;
  const guild = stateFromStoresObject.guild;
  const items1 = [publicUpdatesChannel];
  const obj4 = guildId(navigation[14]);
  const stateFromStoresObject1 = obj4.useStateFromStoresObject(items1, () => {
    let canResult1;
    const obj = {
      canManage: null != guild && PermissionStore.can(constants2.MANAGE_GUILD, guild),
      isAdmin: canResult1,
    };
    canResult1 = null != guild && PermissionStore.can(constants2.ADMINISTRATOR, guild);
    return obj;
  });
  ({ canManage, isAdmin } = stateFromStoresObject1);
  const items2 = [hasChanges];
  const obj5 = guildId(navigation[14]);
  const stateFromStoresObject2 = obj5.useStateFromStoresObject(items2, () => {
    let getChannel2;
    let getChannel3;
    let prop;
    let prop1;
    let rulesChannelId;
    const getChannel = ChannelStore.getChannel;
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    const obj = {
      rulesChannel: getChannel(rulesChannelId),
      publicUpdatesChannel: getChannel2(prop),
      safetyAlertsChannel: getChannel3(prop1),
    };
    prop = undefined;
    getChannel2 = ChannelStore.getChannel;
    if (guild != null) {
      prop = guild.publicUpdatesChannelId;
    }
    prop1 = undefined;
    getChannel3 = ChannelStore.getChannel;
    if (guild != null) {
      prop1 = guild.safetyAlertsChannelId;
    }
    return obj;
  });
  const rulesChannel = stateFromStoresObject2.rulesChannel;
  publicUpdatesChannel = stateFromStoresObject2.publicUpdatesChannel;
  const safetyAlertsChannel = stateFromStoresObject2.safetyAlertsChannel;
  const items3 = [guild, navigation, onClose];
  const effect = submitting.useEffect(() => {
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(map1.COMMUNITY);
    }
    if (!hasItem) {
      const obj = GuildSettingsActionCreatorsDefault;
      obj.setSection(constants.COMMUNITY_INTRO);
      const obj2 = { onClose };
      const replaced = navigation.replace(constants.COMMUNITY_INTRO, obj2);
    }
  }, items3);
  const items4 = [guild];
  const callback = submitting.useCallback(function () {
    if (null != guild) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(guild.features);
      set.delete(map1.COMMUNITY);
      set.delete(map1.DISCOVERABLE);
      const obj = {
        features: set,
        rulesChannelId: null,
        publicUpdatesChannelId: null,
        safetyAlertsChannelId: null,
        preferredLocale: guild.preferredLocale,
      };
      const obj2 = GuildSettingsActionCreatorsDefault;
      obj2.saveGuild(guild.id, obj);
    }
  }, items4);
  let intl = guildId(navigation[16]).intl;
  const string = intl.string;
  const t = guildId(navigation[16]).t;
  const tmp3 = onClose;
  if (null != guild) {
    stringResult = string(t.aQzVF8);
  } else {
    stringResult = string(t.kQzUNk);
  }
  const items5 = [guild, navigation, submitting, hasChanges, onClose];
  const effect1 = obj6.useEffect(() => {
    let fn;
    let fn2;
    function handlePublicCancelChanges() {
      if (null != guild) {
        const obj = onClose(navigation[15]);
        obj.cancelChanges(tmp.id);
      }
      if (handlePublicSaveChanges != null) {
        tmp5();
      }
    }
    function handlePublicSaveChanges() {
      let features;
      let id;
      let publicUpdatesChannelId;
      let rulesChannelId;
      let safetyAlertsChannelId;
      if (null != guild) {
        ({ id, rulesChannelId, publicUpdatesChannelId, preferredLocale, features, safetyAlertsChannelId } = guild);
        const obj2 = { rulesChannelId, safetyAlertsChannelId, publicUpdatesChannelId, preferredLocale, features };
        const obj = onClose(navigation[15]);
        obj.saveGuild(id, obj2);
      }
    }
    const setOptions = navigation.setOptions;
    if (submitting) {
      fn = () => null;
    } else if (hasChanges) {
      fn = () => {
        let intl;
        const obj = { onPress: handlePublicCancelChanges, text: intl.string(intl11.t["ETE/oC"]) };
        const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
        intl = intl11.intl;
        return authStore3(HeaderActionButton, obj);
      };
    }
    let obj = { headerLeft: fn, headerRight: fn2 };
    if (submitting) {
      fn2 = () => closure_1_16(handlePublicCancelChanges(navigation[18]).HeaderSubmittingIndicator, {});
    } else if (hasChanges) {
      fn2 = () => {
        let intl;
        const obj = { onPress: handlePublicSaveChanges, text: intl.string(intl11.t["R3BPH+"]) };
        const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
        intl = intl11.intl;
        return authStore3(HeaderActionButton, obj);
      };
    }
    setOptions(obj);
  }, items5);
  const items6 = [guildId];
  callback1 = obj6.useCallback(() => {
    const channels = GuildChannelStore.getChannels(guildId);
    if (null != channels) {
      const arr = channels[closure_6];
      const found = arr.filter((channel) => channel.channel.type === constants.GUILD_TEXT);
      const mapped = found.map((channel) => {
        let obj2;
        channel = channel.channel;
        const obj = {
          value: channel.id,
          label: obj2.computeChannelName(channel, callback1, safetyAlertsChannel, true),
        };
        obj2 = guildId(navigation[19]);
        return obj;
      });
    }
    return [];
  }, items6);
  const items7 = [callback1, rulesChannel];
  const items8 = [callback1, publicUpdatesChannel];
  const callback2 = obj6.useCallback(() => {
    let id;
    let intl;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    let obj = {
      title: intl.string(intl11.t.Yr6nGx),
      items: callback1(),
      onItemSelect(rulesChannelId) {
        const obj = onClose(navigation[15]);
        const obj2 = { rulesChannelId };
        obj.updateGuild(obj2);
        const obj3 = onClose(navigation[20]);
        obj3.hideActionSheet();
      },
      selectedItem: id,
      hasIcons: false,
    };
    ActionSheetActionCreatorsDefault;
    const tmp2 = asyncRequire(8978, dependencyMap.paths);
    intl = intl11.intl;
    id = undefined;
    if (rulesChannel != null) {
      id = rulesChannel.id;
    }
    openLazy(tmp2, "SelectRulesChannel", obj);
  }, items7);
  const items9 = [callback1, safetyAlertsChannel];
  const callback3 = obj6.useCallback(() => {
    let id;
    let intl;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    let obj = {
      title: intl.string(intl11.t.VqhxxN),
      items: callback1(),
      onItemSelect(publicUpdatesChannelId) {
        const obj = onClose(navigation[15]);
        const obj2 = { publicUpdatesChannelId };
        obj.updateGuild(obj2);
        const obj3 = onClose(navigation[20]);
        obj3.hideActionSheet();
      },
      selectedItem: id,
      hasIcons: false,
    };
    ActionSheetActionCreatorsDefault;
    const tmp2 = asyncRequire(8978, dependencyMap.paths);
    intl = intl11.intl;
    id = undefined;
    if (publicUpdatesChannel != null) {
      id = publicUpdatesChannel.id;
    }
    openLazy(tmp2, "SelectUpdatesChannel", obj);
  }, items8);
  preferredLocale = undefined;
  const callback4 = obj6.useCallback(() => {
    let id;
    let intl;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    let obj = {
      title: intl.string(intl11.t.wSD7jV),
      items: callback1(),
      onItemSelect(safetyAlertsChannelId) {
        const obj = onClose(navigation[15]);
        const obj2 = { safetyAlertsChannelId };
        obj.updateGuild(obj2);
        const obj3 = onClose(navigation[20]);
        obj3.hideActionSheet();
      },
      selectedItem: id,
      hasIcons: false,
    };
    ActionSheetActionCreatorsDefault;
    const tmp2 = asyncRequire(8978, dependencyMap.paths);
    intl = intl11.intl;
    id = undefined;
    if (safetyAlertsChannel != null) {
      id = safetyAlertsChannel.id;
    }
    openLazy(tmp2, "SelectSafetyAlertsChannel", obj);
  }, items9);
  if (guild != null) {
    preferredLocale = guild.preferredLocale;
  }
  [][0] = preferredLocale;
  let tmp22Result4 = null;
  if (null != guild) {
    ({ overview: obj7.style, overviewContent: obj7.contentContainerStyle } = tmp5);
    const obj8 = { style: null, contentContainerStyle: null, children: closure_17(Stack, obj9) };
    const Form = tmp(tmp2[23]).Form;
    obj9 = { style: obj10, spacing: tmp3(tmp2[11]).space.PX_24, children: items10 };
    obj10 = { paddingHorizontal: token };
    Stack = tmp(tmp2[24]).Stack;
    let str = null;
    if (null != rulesChannel) {
      const tmpResult = tmp(tmp2[19]);
      str = tmpResult.computeChannelName(rulesChannel, callback1, safetyAlertsChannel, true);
    }
    const obj11 = {
      helperText: intl2.string(tmp(tmp2[16]).t.BtwmYB),
      hasIcons: false,
      children: closure_16(TableRow, obj12),
    };
    const TableRowGroup = tmp(tmp2[25]).TableRowGroup;
    intl2 = tmp(tmp2[16]).intl;
    obj12 = {
      label: intl3.string(tmp(tmp2[16]).t.U5BW0c),
      disabled: !canManage,
      trailing: closure_16(TrailingText, obj13),
      arrow: true,
      onPress: callback2,
    };
    TableRow = tmp(tmp2[26]).TableRow;
    intl3 = tmp(tmp2[16]).intl;
    TrailingText = tmp(tmp2[26]).TableRow.TrailingText;
    if (str == null) {
      str = "";
    }
    obj13 = { text: str };
    items10 = [closure_16(TableRowGroup, obj11), , , ,];
    let str2 = null;
    if (null != publicUpdatesChannel) {
      const tmpResult3 = tmp(tmp2[19]);
      str2 = tmpResult3.computeChannelName(publicUpdatesChannel, callback1, safetyAlertsChannel, true);
    }
    const obj14 = {
      helperText: intl4.string(tmp(tmp2[16]).t.ZFeonu),
      hasIcons: false,
      children: closure_16(TableRow2, obj15),
    };
    const TableRowGroup2 = tmp(tmp2[25]).TableRowGroup;
    intl4 = tmp(tmp2[16]).intl;
    obj15 = {
      label: intl5.string(tmp(tmp2[16]).t.vAyDGU),
      disabled: !isAdmin,
      trailing: closure_16(TrailingText2, obj16),
      arrow: true,
      onPress: callback3,
    };
    TableRow2 = tmp(tmp2[26]).TableRow;
    intl5 = tmp(tmp2[16]).intl;
    TrailingText2 = tmp(tmp2[26]).TableRow.TrailingText;
    if (str2 == null) {
      str2 = "";
    }
    obj16 = { text: str2 };
    items10[1] = closure_16(TableRowGroup2, obj14);
    let str3 = null;
    if (null != safetyAlertsChannel) {
      const tmpResult4 = tmp(tmp2[19]);
      str3 = tmpResult4.computeChannelName(safetyAlertsChannel, callback1, safetyAlertsChannel, true);
    }
    const obj17 = {
      helperText: intl6.string(tmp(tmp2[16]).t.htioQo),
      hasIcons: false,
      children: closure_16(TableRow3, obj18),
    };
    const TableRowGroup3 = tmp(tmp2[25]).TableRowGroup;
    intl6 = tmp(tmp2[16]).intl;
    obj18 = {
      label: intl7.string(tmp(tmp2[16]).t.sMkYE8),
      disabled: !canManage,
      trailing: closure_16(TrailingText3, obj19),
      arrow: true,
      onPress: callback4,
    };
    TableRow3 = tmp(tmp2[26]).TableRow;
    intl7 = tmp(tmp2[16]).intl;
    TrailingText3 = tmp(tmp2[26]).TableRow.TrailingText;
    if (str3 == null) {
      str3 = "";
    }
    obj19 = { text: str3 };
    items10[2] = closure_16(TableRowGroup3, obj17);
    let preferredLocale2;
    let tmp22Result = null;
    if (null != guild) {
      preferredLocale2 = guild.preferredLocale;
      const arr12 = calculateLocaleOptions();
      let found = arr12.find((value) => value.value === preferredLocale2);
      let str4;
      if (found != null) {
        str4 = found.label;
      }
      const obj20 = {
        helperText: intl8.string(tmp(tmp2[16]).t["l2g81/"]),
        hasIcons: false,
        children: closure_16(TableRow4, obj21),
      };
      const TableRowGroup4 = tmp(tmp2[25]).TableRowGroup;
      intl8 = tmp(tmp2[16]).intl;
      obj21 = {
        label: intl9.string(tmp(tmp2[16]).t.VeC8vc),
        disabled: !canManage,
        trailing: closure_16(TrailingText4, obj22),
        arrow: true,
        onPress: tmp20,
      };
      TableRow4 = tmp(tmp2[26]).TableRow;
      intl9 = tmp(tmp2[16]).intl;
      TrailingText4 = tmp(tmp2[26]).TableRow.TrailingText;
      if (str4 == null) {
        str4 = "";
      }
      obj22 = { text: str4 };
      tmp22Result = closure_16(TableRowGroup4, obj20);
    }
    items10[3] = tmp22Result;
    let tmp22Result3 = null;
    if (isAdmin) {
      const obj23 = { helperText: stringResult, hasIcons: false, children: closure_16(TableRow5, obj24) };
      const TableRowGroup5 = tmp(tmp2[25]).TableRowGroup;
      obj24 = {
        variant: "danger",
        onPress: callback,
        label: intl10.string(tmp(tmp2[16]).t.c1BmbC),
        disabled: null == guild,
      };
      TableRow5 = tmp(tmp2[26]).TableRow;
      intl10 = tmp(tmp2[16]).intl;
      tmp22Result3 = closure_16(TableRowGroup5, obj23);
    }
    items10[4] = tmp22Result3;
    tmp22Result4 = closure_16(Form, obj8);
  }
  return tmp22Result4;
}
