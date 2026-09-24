// discord_app/modules/guild_settings/community/native/GuildSettingsModalCommunity.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01980_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import HeaderActionButton from "../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import GuildSettingsActionCreatorsDefault from "../../GuildSettingsActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../../../stores/GuildChannelStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import GuildSettingsStore from "../../GuildSettingsStore.tsx";

require = fn;
let closure_6 = fn(4462).GUILD_SELECTABLE_CHANNELS_KEY;
const calculateLocaleOptions = fn(16904).calculateLocaleOptions;
const Constants = fn(1074);
({
  ChannelTypes: closure_12,
  GuildFeatures: map1,
  GuildSettingsSections: closure_14,
  Permissions: closure_15,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { overview: { flex: 1 }, overviewContent: { paddingTop: nativeDefault.space.PX_16 } };
let closure_18 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/community/native/GuildSettingsModalCommunity.tsx");

export default function GuildSettingsModalCommunity(guildId) {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  let navigation;
  let publicUpdatesChannel;
  let callback1;
  let preferredLocale;
  const token = preferredLocale(navigation[12]).useToken(onClose(navigation[11]).modules.mobile.TABLE_ROW_PADDING);
  let obj = preferredLocale(navigation[12]);
  const tmp3 = onClose;
  const tmp5 = closure_18();
  navigation = preferredLocale(navigation[13]).useNavigation();
  let obj2 = preferredLocale(navigation[13]);
  const items = [preferredLocale];
  const stateFromStoresObject = preferredLocale(navigation[14]).useStateFromStoresObject(items, () =>
    preferredLocale.getProps(),
  );
  const submitting = stateFromStoresObject.submitting;
  const hasChanges = stateFromStoresObject.hasChanges;
  const guild = stateFromStoresObject.guild;
  const obj3 = preferredLocale(navigation[14]);
  const items1 = [publicUpdatesChannel];
  const stateFromStoresObject1 = preferredLocale(navigation[14]).useStateFromStoresObject(items1, () => {
    let canResult = null != guild;
    if (canResult) {
      canResult = PermissionStore.can(constants3.MANAGE_GUILD, guild);
    }
    const obj = { canManage: canResult, isAdmin: null };
    let canResult1 = null != guild;
    if (canResult1) {
      canResult1 = PermissionStore.can(constants3.ADMINISTRATOR, guild);
    }
    obj.isAdmin = canResult1;
    return obj;
  });
  ({ canManage, isAdmin } = stateFromStoresObject1);
  const obj4 = preferredLocale(navigation[14]);
  const items2 = [hasChanges];
  const stateFromStoresObject2 = preferredLocale(navigation[14]).useStateFromStoresObject(items2, () => {
    let rulesChannelId;
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    const obj2 = {
      rulesChannel: ChannelStore.getChannel(rulesChannelId),
      publicUpdatesChannel: null,
      safetyAlertsChannel: null,
    };
    let prop;
    if (guild != null) {
      prop = guild.publicUpdatesChannelId;
    }
    obj2.publicUpdatesChannel = ChannelStore.getChannel(prop);
    let prop1;
    if (guild != null) {
      prop1 = guild.safetyAlertsChannelId;
    }
    obj2.safetyAlertsChannel = ChannelStore.getChannel(prop1);
    return obj2;
  });
  const rulesChannel = stateFromStoresObject2.rulesChannel;
  publicUpdatesChannel = stateFromStoresObject2.publicUpdatesChannel;
  const safetyAlertsChannel = stateFromStoresObject2.safetyAlertsChannel;
  const items3 = [guild, navigation, onClose];
  const effect = submitting.useEffect(() => {
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants.COMMUNITY);
    }
    if (!hasItem) {
      GuildSettingsActionCreatorsDefault.setSection(constants2.COMMUNITY_INTRO);
      const obj2 = { onClose };
      const replaced = navigation.replace(constants2.COMMUNITY_INTRO, obj2);
    }
  }, items3);
  const items4 = [guild];
  const callback = submitting.useCallback(() => {
    if (null != guild) {
      const _Set = Set;
      const set = new Set(guild.features);
      set.delete(constants.COMMUNITY);
      set.delete(constants.DISCOVERABLE);
      const obj = {
        features: set,
        rulesChannelId: null,
        publicUpdatesChannelId: null,
        safetyAlertsChannelId: null,
        preferredLocale: guild.preferredLocale,
      };
      GuildSettingsActionCreatorsDefault.saveGuild(guild.id, obj);
    }
  }, items4);
  let intl = preferredLocale(navigation[16]).intl;
  const string = intl.string;
  const t = preferredLocale(navigation[16]).t;
  if (null != guild) {
    let stringResult = string(t.aQzVF8);
  } else {
    stringResult = string(t.kQzUNk);
  }
  const items5 = [guild, navigation, submitting, hasChanges, onClose];
  const effect1 = obj6.useEffect(() => {
    function handlePublicCancelChanges() {
      if (null != guild) {
        onClose(navigation[15]).cancelChanges(tmp.id);
        const obj = onClose(navigation[15]);
      }
      if (handlePublicSaveChanges != null) {
        tmp5();
      }
    }
    function handlePublicSaveChanges() {
      if (null != guild) {
        ({ id, rulesChannelId, publicUpdatesChannelId, preferredLocale, features, safetyAlertsChannelId } = guild);
        const obj2 = { rulesChannelId, safetyAlertsChannelId, publicUpdatesChannelId, preferredLocale, features };
        onClose(navigation[15]).saveGuild(id, obj2);
        const obj = onClose(navigation[15]);
      }
    }
    if (submitting) {
      let fn = () => null;
    } else if (hasChanges) {
      fn = () => {
        const obj = { onPress: handlePublicCancelChanges, text: null };
        const intl = util.intl;
        obj.text = intl.string(util.t["ETE/oC"]);
        return value2(HeaderActionButton.HeaderActionButton, obj);
      };
    }
    let obj = { headerLeft: fn, headerRight: null };
    if (submitting) {
      let fn2 = () => closure_1_16(handlePublicCancelChanges(navigation[18]).HeaderSubmittingIndicator, {});
    } else if (hasChanges) {
      fn2 = () => {
        const obj = { onPress: handlePublicSaveChanges, text: null };
        const intl = util.intl;
        obj.text = intl.string(util.t["R3BPH+"]);
        return value2(HeaderActionButton.HeaderActionButton, obj);
      };
    }
    obj.headerRight = fn2;
    navigation.setOptions(obj);
  }, items5);
  const items6 = [guildId];
  callback1 = obj6.useCallback(() => {
    const channels = GuildChannelStore.getChannels(preferredLocale);
    if (null != channels) {
      const found = channels[closure_6].filter((channel) => channel.channel.type === constants.GUILD_TEXT);
      const mapped = found.map((channel) => {
        channel = channel.channel;
        const obj = {
          value: channel.id,
          label: preferredLocale(navigation[19]).computeChannelName(channel, callback1, safetyAlertsChannel, true),
        };
        return obj;
      });
    }
    return [];
  }, items6);
  const items7 = [callback1, rulesChannel];
  const items8 = [callback1, publicUpdatesChannel];
  const callback2 = obj6.useCallback(() => {
    let obj2 = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
    let obj = ActionSheetActionCreatorsDefault;
    const intl = util.intl;
    obj2.title = intl.string(util.t.Yr6nGx);
    obj2.items = callback1();
    obj2.onItemSelect = function onItemSelect(rulesChannelId) {
      onClose(9939).updateGuild({ rulesChannelId });
      const obj = onClose(9939);
      const obj2 = { rulesChannelId };
      onClose(4796).hideActionSheet();
    };
    let id;
    if (rulesChannel != null) {
      id = rulesChannel.id;
    }
    obj2.selectedItem = id;
    obj.openLazy(asyncRequireImpl(9623, dependencyMap.paths), "SelectRulesChannel", obj2);
  }, items7);
  const items9 = [callback1, safetyAlertsChannel];
  const callback3 = obj6.useCallback(() => {
    let obj2 = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
    let obj = ActionSheetActionCreatorsDefault;
    const intl = util.intl;
    obj2.title = intl.string(util.t.VqhxxN);
    obj2.items = callback1();
    obj2.onItemSelect = function onItemSelect(publicUpdatesChannelId) {
      onClose(9939).updateGuild({ publicUpdatesChannelId });
      const obj = onClose(9939);
      const obj2 = { publicUpdatesChannelId };
      onClose(4796).hideActionSheet();
    };
    let id;
    if (publicUpdatesChannel != null) {
      id = publicUpdatesChannel.id;
    }
    obj2.selectedItem = id;
    obj.openLazy(asyncRequireImpl(9623, dependencyMap.paths), "SelectUpdatesChannel", obj2);
  }, items8);
  preferredLocale = undefined;
  const callback4 = obj6.useCallback(() => {
    let obj2 = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
    let obj = ActionSheetActionCreatorsDefault;
    const intl = util.intl;
    obj2.title = intl.string(util.t.wSD7jV);
    obj2.items = callback1();
    obj2.onItemSelect = function onItemSelect(safetyAlertsChannelId) {
      onClose(9939).updateGuild({ safetyAlertsChannelId });
      const obj = onClose(9939);
      const obj2 = { safetyAlertsChannelId };
      onClose(4796).hideActionSheet();
    };
    let id;
    if (safetyAlertsChannel != null) {
      id = safetyAlertsChannel.id;
    }
    obj2.selectedItem = id;
    obj.openLazy(asyncRequireImpl(9623, dependencyMap.paths), "SelectSafetyAlertsChannel", obj2);
  }, items9);
  if (guild != null) {
    preferredLocale = guild.preferredLocale;
  }
  [][0] = preferredLocale;
  let tmp22Result4 = null;
  if (null != guild) {
    const obj8 = { style: null, contentContainerStyle: null, children: null };
    ({ overview: obj7.style, overviewContent: obj7.contentContainerStyle } = tmp5);
    const obj9 = { style: null, spacing: null, children: null };
    const obj10 = { paddingHorizontal: token };
    obj9.style = obj10;
    obj9.spacing = tmp3(tmp2[11]).space.PX_24;
    let str = null;
    if (null != rulesChannel) {
      const tmpResult = tmp(tmp2[19]);
      str = tmpResult.computeChannelName(rulesChannel, callback1, safetyAlertsChannel, true);
    }
    const obj11 = { helperText: null, hasIcons: false, children: null };
    const intl2 = tmp(tmp2[16]).intl;
    obj11.helperText = intl2.string(tmp(tmp2[16]).t.BtwmYB);
    const obj12 = { label: null, disabled: null, trailing: null, arrow: true, onPress: null };
    const intl3 = tmp(tmp2[16]).intl;
    obj12.label = intl3.string(tmp(tmp2[16]).t.U5BW0c);
    obj12.disabled = !canManage;
    if (str == null) {
      str = "";
    }
    const obj13 = { text: str };
    obj12.trailing = closure_16(tmp(tmp2[26]).TableRow.TrailingText, obj13);
    obj12.onPress = callback2;
    obj11.children = closure_16(tmp(tmp2[26]).TableRow, obj12);
    const items10 = [closure_16(tmp(tmp2[25]).TableRowGroup, obj11), , , ,];
    let str2 = null;
    if (null != publicUpdatesChannel) {
      const tmpResult3 = tmp(tmp2[19]);
      str2 = tmpResult3.computeChannelName(publicUpdatesChannel, callback1, safetyAlertsChannel, true);
    }
    const obj14 = { helperText: null, hasIcons: false, children: null };
    const intl4 = tmp(tmp2[16]).intl;
    obj14.helperText = intl4.string(tmp(tmp2[16]).t.ZFeonu);
    const obj15 = { label: null, disabled: null, trailing: null, arrow: true, onPress: null };
    const intl5 = tmp(tmp2[16]).intl;
    obj15.label = intl5.string(tmp(tmp2[16]).t.vAyDGU);
    obj15.disabled = !isAdmin;
    if (str2 == null) {
      str2 = "";
    }
    const obj16 = { text: str2 };
    obj15.trailing = closure_16(tmp(tmp2[26]).TableRow.TrailingText, obj16);
    obj15.onPress = callback3;
    obj14.children = closure_16(tmp(tmp2[26]).TableRow, obj15);
    items10[1] = closure_16(tmp(tmp2[25]).TableRowGroup, obj14);
    let str3 = null;
    if (null != safetyAlertsChannel) {
      const tmpResult4 = tmp(tmp2[19]);
      str3 = tmpResult4.computeChannelName(safetyAlertsChannel, callback1, safetyAlertsChannel, true);
    }
    const obj17 = { helperText: null, hasIcons: false, children: null };
    const intl6 = tmp(tmp2[16]).intl;
    obj17.helperText = intl6.string(tmp(tmp2[16]).t.htioQo);
    const obj18 = { label: null, disabled: null, trailing: null, arrow: true, onPress: null };
    const intl7 = tmp(tmp2[16]).intl;
    obj18.label = intl7.string(tmp(tmp2[16]).t.sMkYE8);
    obj18.disabled = !canManage;
    if (str3 == null) {
      str3 = "";
    }
    const obj19 = { text: str3 };
    obj18.trailing = closure_16(tmp(tmp2[26]).TableRow.TrailingText, obj19);
    obj18.onPress = callback4;
    obj17.children = closure_16(tmp(tmp2[26]).TableRow, obj18);
    items10[2] = closure_16(tmp(tmp2[25]).TableRowGroup, obj17);
    preferredLocale = undefined;
    let tmp22Result = null;
    if (null != guild) {
      preferredLocale = guild.preferredLocale;
      let found = calculateLocaleOptions().find((value) => value.value === preferredLocale);
      let str4;
      if (found != null) {
        str4 = found.label;
      }
      const obj20 = { helperText: null, hasIcons: false, children: null };
      const intl8 = tmp(tmp2[16]).intl;
      obj20.helperText = intl8.string(tmp(tmp2[16]).t["l2g81/"]);
      const obj21 = { label: null, disabled: null, trailing: null, arrow: true, onPress: null };
      const intl9 = tmp(tmp2[16]).intl;
      obj21.label = intl9.string(tmp(tmp2[16]).t.VeC8vc);
      obj21.disabled = !canManage;
      if (str4 == null) {
        str4 = "";
      }
      const obj22 = { text: str4 };
      obj21.trailing = closure_16(tmp(tmp2[26]).TableRow.TrailingText, obj22);
      obj21.onPress = tmp20;
      obj20.children = closure_16(tmp(tmp2[26]).TableRow, obj21);
      tmp22Result = closure_16(tmp(tmp2[25]).TableRowGroup, obj20);
      const arr12 = calculateLocaleOptions();
    }
    items10[3] = tmp22Result;
    let tmp22Result3 = null;
    if (isAdmin) {
      const obj23 = { helperText: stringResult, hasIcons: false, children: null };
      const obj24 = { variant: "danger", onPress: callback, label: null, disabled: null };
      const intl10 = tmp(tmp2[16]).intl;
      obj24.label = intl10.string(tmp(tmp2[16]).t.c1BmbC);
      obj24.disabled = !tmp12;
      obj23.children = closure_16(tmp(tmp2[26]).TableRow, obj24);
      tmp22Result3 = closure_16(tmp(tmp2[25]).TableRowGroup, obj23);
    }
    items10[4] = tmp22Result3;
    obj9.children = items10;
    obj8.children = closure_17(tmp(tmp2[24]).Stack, obj9);
    tmp22Result4 = closure_16(tmp(tmp2[23]).Form, obj8);
  }
  return tmp22Result4;
}
