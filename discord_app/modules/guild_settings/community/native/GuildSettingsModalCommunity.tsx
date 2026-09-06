// === Module 17655: GuildSettingsModalCommunity ===

// Module 17655 (GuildSettingsModalCommunity)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import HeaderActionButton from "HeaderActionButton" /* 7377 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9063 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9064 */;

require = fn;
let closure_6 = fn(2012).GUILD_SELECTABLE_CHANNELS_KEY;
const calculateLocaleOptions = fn(16477).calculateLocaleOptions;
const Constants = fn(1074);
({ ChannelTypes: closure_12, GuildFeatures: map1, GuildSettingsSections: closure_14, Permissions: closure_15 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
fn(4560);
let createStyles = { overview: { flex: 1 }, overviewContent: null };
createStyles = { paddingTop: nativeDefault.space.PX_16 };
createStyles.overviewContent = createStyles;
let closure_18 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/community/native/GuildSettingsModalCommunity.tsx");

export default function GuildSettingsModalCommunity(guildId) {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  let navigation;
  let publicUpdatesChannel;
  let callback1;
  let preferredLocale;
  let obj = preferredLocale(navigation[12]);
  const token = obj.useToken(onClose(navigation[11]).modules.mobile.TABLE_ROW_PADDING);
  let obj1 = preferredLocale(navigation[13]);
  navigation = obj1.useNavigation();
  let obj2 = preferredLocale(navigation[14]);
  const items = [GuildSettingsStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => props.getProps());
  const submitting = stateFromStoresObject.submitting;
  const hasChanges = stateFromStoresObject.hasChanges;
  const guild = stateFromStoresObject.guild;
  let obj3 = preferredLocale(navigation[14]);
  const items1 = [publicUpdatesChannel];
  const stateFromStoresObject1 = obj3.useStateFromStoresObject(items1, () => {
    let canResult = null != guild;
    if (canResult) {
      canResult = PermissionStore.can(constants3.MANAGE_GUILD, tmp);
    }
    const obj = { canManage: canResult, isAdmin: null };
    let canResult1 = null != tmp;
    if (canResult1) {
      canResult1 = PermissionStore.can(constants3.ADMINISTRATOR, tmp);
    }
    obj.isAdmin = canResult1;
    return obj;
  });
  ({ canManage, isAdmin } = stateFromStoresObject1);
  let obj4 = preferredLocale(navigation[14]);
  const items2 = [hasChanges];
  const stateFromStoresObject2 = obj4.useStateFromStoresObject(items2, () => {
    let obj = ChannelStore;
    let rulesChannelId;
    if (guild != null) {
      rulesChannelId = tmp.rulesChannelId;
    }
    obj = { rulesChannel: ChannelStore.getChannel(rulesChannelId), publicUpdatesChannel: null };
    let prop;
    if (guild != null) {
      prop = tmp.publicUpdatesChannelId;
    }
    obj.publicUpdatesChannel = obj.getChannel(prop);
    return obj;
  });
  const rulesChannel = stateFromStoresObject2.rulesChannel;
  publicUpdatesChannel = stateFromStoresObject2.publicUpdatesChannel;
  let obj5 = submitting;
  const items3 = [guild, navigation, onClose];
  const effect = submitting.useEffect(() => {
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants.COMMUNITY);
    }
    if (!hasItem) {
      let obj = GuildSettingsActionCreatorsDefault;
      obj.setSection(constants2.COMMUNITY_INTRO);
      obj = { onClose };
      const replaced = navigation.replace(constants2.COMMUNITY_INTRO, obj);
    }
  }, items3);
  const items4 = [guild];
  const callback = submitting.useCallback(() => {
    if (null != guild) {
      const _Set = Set;
      const set = new Set(tmp.features);
      set.delete(constants.COMMUNITY);
      set.delete(constants.DISCOVERABLE);
      const obj = { features: set, rulesChannelId: null, publicUpdatesChannelId: null, preferredLocale: tmp.preferredLocale };
      GuildSettingsActionCreatorsDefault.saveGuild(tmp.id, obj);
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
  const effect1 = obj5.useEffect(() => {
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
        onClose(navigation[15]);
        const obj = { rulesChannelId, safetyAlertsChannelId, publicUpdatesChannelId, preferredLocale, features };
        obj.saveGuild(id, obj);
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
  callback1 = obj5.useCallback(() => {
    const channels = GuildChannelStore.getChannels(preferredLocale);
    if (null != channels) {
      const found = channels[closure_6].filter((channel) => channel.channel.type === constants.GUILD_TEXT);
      const mapped = found.map((channel) => {
        channel = channel.channel;
        const obj = { value: channel.id, label: closure_1_0(navigation[19]).computeChannelName(channel, closure_1_9, callback1, true) };
        return obj;
      });
    }
    return [];
  }, items6);
  const items7 = [callback1, rulesChannel];
  const items8 = [callback1, publicUpdatesChannel];
  const callback2 = obj5.useCallback(() => {
    let obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
    const intl = util.intl;
    obj.title = intl.string(util.t.Yr6nGx);
    obj.items = callback1();
    obj.onItemSelect = function onItemSelect(rulesChannelId) {
      onClose(9063);
      const obj = { rulesChannelId };
      obj.updateGuild(obj);
      onClose(4527).hideActionSheet();
    };
    let id;
    if (rulesChannel != null) {
      id = rulesChannel.id;
    }
    obj.selectedItem = id;
    obj.openLazy(asyncRequireImpl(9426, dependencyMap.paths), "SelectRulesChannel", obj);
  }, items7);
  preferredLocale = undefined;
  const callback3 = obj5.useCallback(() => {
    let obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
    const intl = util.intl;
    obj.title = intl.string(util.t.VqhxxN);
    obj.items = callback1();
    obj.onItemSelect = function onItemSelect(publicUpdatesChannelId) {
      onClose(9063);
      const obj = { publicUpdatesChannelId };
      obj.updateGuild(obj);
      onClose(4527).hideActionSheet();
    };
    let id;
    if (publicUpdatesChannel != null) {
      id = publicUpdatesChannel.id;
    }
    obj.selectedItem = id;
    obj.openLazy(asyncRequireImpl(9426, dependencyMap.paths), "SelectUpdatesChannel", obj);
  }, items8);
  if (guild != null) {
    preferredLocale = guild.preferredLocale;
  }
  [][0] = preferredLocale;
  let tmp21Result1 = null;
  if (null != guild) {
    obj = { style: null, contentContainerStyle: null, children: null };
    ({ overview: obj7.style, overviewContent: obj7.contentContainerStyle } = tmp5);
    obj = { style: null, spacing: null, children: null };
    obj1 = { paddingHorizontal: token };
    obj.style = obj1;
    obj.spacing = onClose(tmp2[11]).space.PX_24;
    let str = null;
    if (null != rulesChannel) {
      let tmpResult = tmp(tmp2[19]);
      str = tmpResult.computeChannelName(rulesChannel, preferredLocale, callback1, true);
    }
    obj2 = { helperText: null, hasIcons: false, children: null };
    const intl2 = tmp(tmp2[16]).intl;
    obj2.helperText = intl2.string(tmp(tmp2[16]).t["3q1TEo"]);
    obj3 = { label: null, disabled: null, trailing: null, arrow: true, onPress: null };
    const intl3 = tmp(tmp2[16]).intl;
    obj3.label = intl3.string(tmp(tmp2[16]).t.U5BW0c);
    obj3.disabled = !canManage;
    if (str == null) {
      str = "";
    }
    obj4 = { text: str };
    obj3.trailing = closure_16(tmp(tmp2[26]).TableRow.TrailingText, obj4);
    obj3.onPress = callback2;
    obj2.children = closure_16(tmp(tmp2[26]).TableRow, obj3);
    const items9 = [closure_16(tmp(tmp2[25]).TableRowGroup, obj2), , , ];
    let str2 = null;
    if (null != publicUpdatesChannel) {
      tmpResult = tmp(tmp2[19]);
      str2 = tmpResult.computeChannelName(publicUpdatesChannel, preferredLocale, callback1, true);
    }
    obj5 = { helperText: null, hasIcons: false, children: null };
    const intl4 = tmp(tmp2[16]).intl;
    obj5.helperText = intl4.string(tmp(tmp2[16]).t["Fg6O/5"]);
    const obj6 = { label: null, disabled: null, trailing: null, arrow: true, onPress: null };
    const intl5 = tmp(tmp2[16]).intl;
    obj6.label = intl5.string(tmp(tmp2[16]).t.vAyDGU);
    obj6.disabled = !isAdmin;
    if (str2 == null) {
      str2 = "";
    }
    const obj7 = { text: str2 };
    obj6.trailing = closure_16(tmp(tmp2[26]).TableRow.TrailingText, obj7);
    obj6.onPress = callback3;
    obj5.children = closure_16(tmp(tmp2[26]).TableRow, obj6);
    items9[1] = closure_16(tmp(tmp2[25]).TableRowGroup, obj5);
    preferredLocale = undefined;
    let tmp21Result = null;
    if (null != guild) {
      preferredLocale = guild.preferredLocale;
      let found = calculateLocaleOptions().find((value) => value.value === preferredLocale);
      let str3;
      if (found != null) {
        str3 = found.label;
      }
      const obj8 = { helperText: null, hasIcons: false, children: null };
      const intl6 = tmp(tmp2[16]).intl;
      obj8.helperText = intl6.string(tmp(tmp2[16]).t["l2g81/"]);
      const obj9 = { label: null, disabled: null, trailing: null, arrow: true, onPress: null };
      const intl7 = tmp(tmp2[16]).intl;
      obj9.label = intl7.string(tmp(tmp2[16]).t.VeC8vc);
      obj9.disabled = !canManage;
      if (str3 == null) {
        str3 = "";
      }
      const obj10 = { text: str3 };
      obj9.trailing = tmp21(tmp(tmp2[26]).TableRow.TrailingText, obj10);
      obj9.onPress = tmp19;
      obj8.children = tmp21(tmp(tmp2[26]).TableRow, obj9);
      tmp21Result = tmp21(tmp(tmp2[25]).TableRowGroup, obj8);
      const arr11 = calculateLocaleOptions();
    }
    items9[2] = tmp21Result;
    tmp21Result = null;
    if (isAdmin) {
      const obj11 = { helperText: stringResult, hasIcons: false, children: null };
      const obj12 = { variant: "danger", onPress: callback, label: null, disabled: null };
      const intl8 = tmp(tmp2[16]).intl;
      obj12.label = intl8.string(tmp(tmp2[16]).t.c1BmbC);
      obj12.disabled = !tmp12;
      obj11.children = tmp21(tmp(tmp2[26]).TableRow, obj12);
      tmp21Result = tmp21(tmp(tmp2[25]).TableRowGroup, obj11);
    }
    items9[3] = tmp21Result;
    obj.children = items9;
    obj.children = closure_17(tmp(tmp2[24]).Stack, obj);
    tmp21Result1 = tmp21(tmp(tmp2[23]).Form, obj);
  }
  return tmp21Result1;
};