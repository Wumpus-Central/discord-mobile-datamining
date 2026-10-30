// discord_app/modules/guild_settings/community/native/GuildSettingsModalCommunity.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01995_asyncRequireImpl.js";
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
let closure_6 = fn(4939).GUILD_SELECTABLE_CHANNELS_KEY;
const calculateLocaleOptions = fn(18499).calculateLocaleOptions;
const Constants = fn(1072);
({
  ChannelTypes: closure_12,
  GuildFeatures: map1,
  GuildSettingsSections: closure_14,
  Permissions: closure_15,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { overview: { flex: 1 }, overviewContent: { paddingTop: nativeDefault.space.PX_16 } };
let closure_19 = createStyles.createStyles(obj2);
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
  const tmp5 = closure_19();
  navigation = preferredLocale(navigation[13]).useNavigation();
  let obj2 = preferredLocale(navigation[13]);
  let items = [preferredLocale];
  const stateFromStoresObject = preferredLocale(navigation[14]).useStateFromStoresObject(items, () =>
    preferredLocale.getProps(),
  );
  const submitting = stateFromStoresObject.submitting;
  const hasChanges = stateFromStoresObject.hasChanges;
  const guild = stateFromStoresObject.guild;
  let obj3 = preferredLocale(navigation[14]);
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
        return __initData2(HeaderActionButton.HeaderActionButton, obj);
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
        return __initData2(HeaderActionButton.HeaderActionButton, obj);
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
    const obj3 = { value: null, label: null };
    const intl2 = util.intl;
    obj3.label = intl2.string(util.t.PoWNfe);
    const items = [obj3, ...callback1()];
    obj2.items = items;
    obj2.onItemSelect = function onItemSelect(rulesChannelId) {
      onClose(9055).updateGuild({ rulesChannelId });
      const obj = onClose(9055);
      const obj2 = { rulesChannelId };
      onClose(5253).hideActionSheet();
    };
    let id;
    if (rulesChannel != null) {
      id = rulesChannel.id;
    }
    if (id == null) {
      id = null;
    }
    obj2.selectedItem = id;
    obj.openLazy(asyncRequireImpl(8993, dependencyMap.paths), "SelectRulesChannel", obj2);
  }, items7);
  const items9 = [callback1, safetyAlertsChannel];
  const callback3 = obj6.useCallback(() => {
    let obj2 = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
    let obj = ActionSheetActionCreatorsDefault;
    const intl = util.intl;
    obj2.title = intl.string(util.t.VqhxxN);
    const obj3 = { value: null, label: null };
    const intl2 = util.intl;
    obj3.label = intl2.string(util.t.PoWNfe);
    const items = [obj3, ...callback1()];
    obj2.items = items;
    obj2.onItemSelect = function onItemSelect(publicUpdatesChannelId) {
      onClose(9055).updateGuild({ publicUpdatesChannelId });
      const obj = onClose(9055);
      const obj2 = { publicUpdatesChannelId };
      onClose(5253).hideActionSheet();
    };
    let id;
    if (publicUpdatesChannel != null) {
      id = publicUpdatesChannel.id;
    }
    if (id == null) {
      id = null;
    }
    obj2.selectedItem = id;
    obj.openLazy(asyncRequireImpl(8993, dependencyMap.paths), "SelectUpdatesChannel", obj2);
  }, items8);
  preferredLocale = undefined;
  const callback4 = obj6.useCallback(() => {
    let obj2 = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
    let obj = ActionSheetActionCreatorsDefault;
    const intl = util.intl;
    obj2.title = intl.string(util.t.wSD7jV);
    obj2.items = callback1();
    obj2.onItemSelect = function onItemSelect(safetyAlertsChannelId) {
      onClose(9055).updateGuild({ safetyAlertsChannelId });
      const obj = onClose(9055);
      const obj2 = { safetyAlertsChannelId };
      onClose(5253).hideActionSheet();
    };
    let id;
    if (safetyAlertsChannel != null) {
      id = safetyAlertsChannel.id;
    }
    obj2.selectedItem = id;
    obj.openLazy(asyncRequireImpl(8993, dependencyMap.paths), "SelectSafetyAlertsChannel", obj2);
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
    let channelName = null;
    if (null != rulesChannel) {
      const tmpResult = tmp(tmp2[19]);
      channelName = tmpResult.computeChannelName(rulesChannel, callback1, safetyAlertsChannel, true);
    }
    const obj11 = { helperText: null, hasIcons: false, children: null };
    let intl2 = tmp(tmp2[16]).intl;
    obj11.helperText = intl2.string(tmp(tmp2[16]).t.BtwmYB);
    const obj12 = { label: null, disabled: null, trailing: null, arrow: true, onPress: null };
    const intl3 = tmp(tmp2[16]).intl;
    obj12.label = intl3.string(tmp(tmp2[16]).t.U5BW0c);
    obj12.disabled = !canManage;
    if (channelName == null) {
      const intl4 = tmp(tmp2[16]).intl;
      channelName = intl4.string(tmp(tmp2[16]).t.PoWNfe);
    }
    const obj13 = { text: channelName };
    obj12.trailing = closure_16(tmp(tmp2[26]).TableRow.TrailingText, obj13);
    obj12.onPress = callback2;
    obj11.children = closure_16(tmp(tmp2[26]).TableRow, obj12);
    const items10 = [closure_16(tmp(tmp2[25]).TableRowGroup, obj11), , , ,];
    let channelName1 = null;
    if (null != publicUpdatesChannel) {
      const tmpResult3 = tmp(tmp2[19]);
      channelName1 = tmpResult3.computeChannelName(publicUpdatesChannel, callback1, safetyAlertsChannel, true);
    }
    const intl5 = tmp(tmp2[16]).intl;
    const items11 = [intl5.string(tmp(tmp2[16]).t.ZFeonu)];
    let prop;
    if (guild != null) {
      prop = guild.publicUpdatesChannelId;
    }
    let tmp23Result = null;
    if (null == prop) {
      let prop1;
      if (guild != null) {
        prop1 = guild.safetyAlertsChannelId;
      }
      tmp23Result = null;
      if (null == prop1) {
        const obj14 = { children: null };
        const intl6 = tmp(tmp2[16]).intl;
        const items12 = [" ", intl6.string(tmp(tmp2[16]).t["0H6Cdy"])];
        obj14.children = items12;
        tmp23Result = closure_18(closure_17, obj14);
      }
    }
    const obj15 = { helperText: null, hasIcons: false, children: null };
    const obj16 = { children: null };
    items11[1] = tmp23Result;
    obj16.children = items11;
    obj15.helperText = closure_18(closure_17, obj16);
    const obj17 = { label: null, subLabel: null, disabled: null, trailing: null, arrow: true, onPress: null };
    const intl7 = tmp(tmp2[16]).intl;
    obj17.label = intl7.string(tmp(tmp2[16]).t.vAyDGU);
    const intl8 = tmp(tmp2[16]).intl;
    obj17.subLabel = intl8.string(tmp(tmp2[16]).t.zdWNET);
    obj17.disabled = !isAdmin;
    if (channelName1 == null) {
      const intl9 = tmp(tmp2[16]).intl;
      channelName1 = intl9.string(tmp(tmp2[16]).t.PoWNfe);
    }
    const obj18 = { text: channelName1 };
    obj17.trailing = closure_16(tmp(tmp2[26]).TableRow.TrailingText, obj18);
    obj17.onPress = callback3;
    obj15.children = closure_16(tmp(tmp2[26]).TableRow, obj17);
    items10[1] = closure_16(tmp(tmp2[25]).TableRowGroup, obj15);
    let str = null;
    if (null != safetyAlertsChannel) {
      const tmpResult4 = tmp(tmp2[19]);
      str = tmpResult4.computeChannelName(safetyAlertsChannel, callback1, safetyAlertsChannel, true);
    }
    const obj19 = { helperText: null, hasIcons: false, children: null };
    const intl10 = tmp(tmp2[16]).intl;
    obj19.helperText = intl10.string(tmp(tmp2[16]).t.htioQo);
    const obj20 = { label: null, disabled: null, trailing: null, arrow: true, onPress: null };
    const intl11 = tmp(tmp2[16]).intl;
    obj20.label = intl11.string(tmp(tmp2[16]).t.sMkYE8);
    obj20.disabled = !canManage;
    if (str == null) {
      str = "";
    }
    const obj21 = { text: str };
    obj20.trailing = closure_16(tmp(tmp2[26]).TableRow.TrailingText, obj21);
    obj20.onPress = callback4;
    obj19.children = closure_16(tmp(tmp2[26]).TableRow, obj20);
    items10[2] = closure_16(tmp(tmp2[25]).TableRowGroup, obj19);
    preferredLocale = undefined;
    let tmp22Result = null;
    if (null != guild) {
      preferredLocale = guild.preferredLocale;
      let found = calculateLocaleOptions().find((value) => value.value === preferredLocale);
      let str2;
      if (found != null) {
        str2 = found.label;
      }
      const obj22 = { helperText: null, hasIcons: false, children: null };
      const intl12 = tmp(tmp2[16]).intl;
      obj22.helperText = intl12.string(tmp(tmp2[16]).t["l2g81/"]);
      const obj23 = { label: null, disabled: null, trailing: null, arrow: true, onPress: null };
      const intl13 = tmp(tmp2[16]).intl;
      obj23.label = intl13.string(tmp(tmp2[16]).t.VeC8vc);
      obj23.disabled = !canManage;
      if (str2 == null) {
        str2 = "";
      }
      const obj24 = { text: str2 };
      obj23.trailing = closure_16(tmp(tmp2[26]).TableRow.TrailingText, obj24);
      obj23.onPress = tmp20;
      obj22.children = closure_16(tmp(tmp2[26]).TableRow, obj23);
      tmp22Result = closure_16(tmp(tmp2[25]).TableRowGroup, obj22);
      const arr14 = calculateLocaleOptions();
    }
    items10[3] = tmp22Result;
    let tmp22Result3 = null;
    if (isAdmin) {
      const obj25 = { helperText: stringResult, hasIcons: false, children: null };
      const obj26 = { variant: "danger", onPress: callback, label: null, disabled: null };
      const intl14 = tmp(tmp2[16]).intl;
      obj26.label = intl14.string(tmp(tmp2[16]).t.c1BmbC);
      obj26.disabled = !tmp12;
      obj25.children = closure_16(tmp(tmp2[26]).TableRow, obj26);
      tmp22Result3 = closure_16(tmp(tmp2[25]).TableRowGroup, obj25);
    }
    items10[4] = tmp22Result3;
    obj9.children = items10;
    obj8.children = closure_18(tmp(tmp2[24]).Stack, obj9);
    tmp22Result4 = closure_16(tmp(tmp2[23]).Form, obj8);
  }
  return tmp22Result4;
}
