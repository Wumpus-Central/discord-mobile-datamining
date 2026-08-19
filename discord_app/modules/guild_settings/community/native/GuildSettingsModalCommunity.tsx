// === Module 16876: GuildSettingsModalCommunity ===

// Module 16876 (GuildSettingsModalCommunity)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import comparator from "comparator" /* 1980 */;
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_6 } from "comparator" /* 1980 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import handleFormInit from "handleFormInit" /* 8875 */;
import { calculateLocaleOptions } from "GuildPrimaryCategory" /* 15733 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ ChannelTypes: closure_12, GuildFeatures: map1, GuildSettingsSections: closure_14, Permissions: closure_15 } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createCacheKey = { paddingTop: ThemesDefault.space.PX_16 };
createCacheKey[1] = createCacheKey;
let closure_18 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_settings/community/native/GuildSettingsModalCommunity.tsx");

export default function GuildSettingsModalCommunity(guildId) {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  let navigation;
  let publicUpdatesChannel;
  let callback1;
  let preferredLocale;
  let obj = preferredLocale(navigation[12]);
  const token = obj.useToken(onClose(navigation[11]).modules.mobile.TABLE_ROW_PADDING);
  obj1 = preferredLocale(navigation[13]);
  navigation = obj1.useNavigation();
  let obj2 = preferredLocale(navigation[14]);
  const items = [closure_10];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => props.getProps());
  const submitting = stateFromStoresObject.submitting;
  const hasChanges = stateFromStoresObject.hasChanges;
  const guild = stateFromStoresObject.guild;
  let obj3 = preferredLocale(navigation[14]);
  const items1 = [publicUpdatesChannel];
  const stateFromStoresObject1 = obj3.useStateFromStoresObject(items1, () => {
    let canResult = null != guild;
    if (canResult) {
      canResult = publicUpdatesChannel.can(closure_1_15.MANAGE_GUILD, guild);
    }
    const obj = { canManage: canResult, isAdmin: null };
    let canResult1 = null != guild;
    if (canResult1) {
      canResult1 = publicUpdatesChannel.can(closure_1_15.ADMINISTRATOR, guild);
    }
    obj[1] = canResult1;
    return obj;
  });
  ({ canManage, isAdmin } = stateFromStoresObject1);
  let obj4 = preferredLocale(navigation[14]);
  const items2 = [hasChanges];
  const stateFromStoresObject2 = obj4.useStateFromStoresObject(items2, () => {
    let obj = hasChanges;
    let rulesChannelId;
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    obj = { rulesChannel: hasChanges.getChannel(rulesChannelId), publicUpdatesChannel: null };
    let prop;
    if (guild != null) {
      prop = guild.publicUpdatesChannelId;
    }
    obj[1] = obj.getChannel(prop);
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
      hasItem = features.has(closure_1_13.COMMUNITY);
    }
    if (!hasItem) {
      let obj = onClose(navigation[15]);
      obj.setSection(closure_1_14.COMMUNITY_INTRO);
      obj = { onClose: null };
      obj[0] = onClose;
      const replaced = navigation.replace(closure_1_14.COMMUNITY_INTRO, obj);
    }
  }, items3);
  const items4 = [guild];
  const callback = submitting.useCallback(() => {
    if (null != guild) {
      const _Set = Set;
      const set = new Set(guild.features);
      set.delete(closure_1_13.COMMUNITY);
      set.delete(closure_1_13.DISCOVERABLE);
      const obj = { features: null, rulesChannelId: null, publicUpdatesChannelId: null, preferredLocale: null };
      obj[0] = set;
      obj[3] = guild.preferredLocale;
      onClose(navigation[15]).saveGuild(guild.id, obj);
      const obj2 = onClose(navigation[15]);
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
    function handlePublicCancelChanges(closure_2) {
      if (null != closure_5) {
        handlePublicSaveChanges(navigation[15]).cancelChanges(tmp.id);
        const obj = handlePublicSaveChanges(navigation[15]);
      }
      if (handlePublicSaveChanges != null) {
        tmp5();
      }
    }
    function handlePublicSaveChanges(closure_1_2) {
      if (null != closure_5) {
        ({ id, rulesChannelId, publicUpdatesChannelId, preferredLocale, features, safetyAlertsChannelId } = closure_5);
        handlePublicSaveChanges(navigation[15]);
        const obj = { rulesChannelId: null, safetyAlertsChannelId: null, publicUpdatesChannelId: null, preferredLocale: null, features: null };
        obj[0] = rulesChannelId;
        obj[1] = safetyAlertsChannelId;
        obj[2] = publicUpdatesChannelId;
        obj[3] = preferredLocale;
        obj[4] = features;
        obj.saveGuild(id, obj);
      }
    }
    if (submitting) {
      let fn = () => null;
    } else if (hasChanges) {
      fn = () => {
        const obj = { onPress: handlePublicCancelChanges, text: null };
        const intl = preferredLocale(navigation[16]).intl;
        obj[1] = intl.string(preferredLocale(navigation[16]).t["ETE/oC"]);
        return closure_2_16(preferredLocale(navigation[17]).HeaderActionButton, obj);
      };
    }
    let obj = { headerLeft: fn, headerRight: null };
    if (submitting) {
      let fn2 = () => callback(handlePublicCancelChanges(table[18]).HeaderSubmittingIndicator, {});
    } else if (hasChanges) {
      fn2 = () => {
        const obj = { onPress: handlePublicSaveChanges, text: null };
        const intl = preferredLocale(navigation[16]).intl;
        obj[1] = intl.string(preferredLocale(navigation[16]).t["R3BPH+"]);
        return closure_2_16(preferredLocale(navigation[17]).HeaderActionButton, obj);
      };
    }
    obj[1] = fn2;
    navigation.setOptions(obj);
  }, items5);
  const items6 = [guildId];
  callback1 = obj5.useCallback(() => {
    const channels = guild.getChannels(preferredLocale);
    if (null != channels) {
      const found = channels[rulesChannel].filter((item, index) => item.channel.type === constants.GUILD_TEXT);
      const mapped = found.map((item, index) => {
        const channel = item.channel;
        const obj = { value: channel.id, label: callback(table[19]).computeChannelName(channel, closure_9, closure_8, true) };
        return obj;
      });
    }
    return [];
  }, items6);
  const items7 = [callback1, rulesChannel];
  const items8 = [callback1, publicUpdatesChannel];
  const callback2 = obj5.useCallback(() => {
    onClose(navigation[20]);
    let obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
    const intl = preferredLocale(navigation[16]).intl;
    obj[0] = intl.string(preferredLocale(navigation[16]).t.Yr6nGx);
    obj[1] = callback1();
    obj[2] = function onItemSelect(rulesChannelId) {
      callback(8874);
      const obj = { rulesChannelId };
      obj.updateGuild(obj);
      callback(4342).hideActionSheet();
    };
    let id;
    if (rulesChannel != null) {
      id = rulesChannel.id;
    }
    obj[3] = id;
    obj.openLazy(preferredLocale(navigation[22])(navigation[21], navigation.paths), "SelectRulesChannel", obj);
  }, items7);
  preferredLocale = undefined;
  const callback3 = obj5.useCallback(() => {
    onClose(navigation[20]);
    let obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
    const intl = preferredLocale(navigation[16]).intl;
    obj[0] = intl.string(preferredLocale(navigation[16]).t.VqhxxN);
    obj[1] = callback1();
    obj[2] = function onItemSelect(publicUpdatesChannelId) {
      callback(8874);
      const obj = { publicUpdatesChannelId };
      obj.updateGuild(obj);
      callback(4342).hideActionSheet();
    };
    let id;
    if (publicUpdatesChannel != null) {
      id = publicUpdatesChannel.id;
    }
    obj[3] = id;
    obj.openLazy(preferredLocale(navigation[22])(navigation[21], navigation.paths), "SelectUpdatesChannel", obj);
  }, items8);
  if (guild != null) {
    preferredLocale = guild.preferredLocale;
  }
  [][0] = preferredLocale;
  let tmp21Result1 = null;
  if (null != guild) {
    ({ overview: obj7[0], overviewContent: obj7[1] } = tmp5);
    obj = { style: null, spacing: null, children: null };
    obj1 = { paddingHorizontal: null };
    obj1[0] = token;
    obj[0] = obj1;
    obj[1] = onClose(tmp2[11]).space.PX_24;
    let str = null;
    if (null != rulesChannel) {
      let tmpResult = tmp(tmp2[19]);
      str = tmpResult.computeChannelName(rulesChannel, preferredLocale, callback1, true);
    }
    obj2 = { helperText: null, hasIcons: false, children: null };
    const intl2 = tmp(tmp2[16]).intl;
    obj2[0] = intl2.string(tmp(tmp2[16]).t["3q1TEo"]);
    obj3 = { label: null, disabled: null, trailing: null, arrow: true, onPress: null };
    const intl3 = tmp(tmp2[16]).intl;
    obj3[0] = intl3.string(tmp(tmp2[16]).t.U5BW0c);
    obj3[1] = !canManage;
    if (str == null) {
      str = "";
    }
    obj4 = { text: null };
    obj4[0] = str;
    obj3[2] = callback(tmp(tmp2[26]).TableRow.TrailingText, obj4);
    obj3[4] = callback2;
    obj2[2] = callback(tmp(tmp2[26]).TableRow, obj3);
    const items9 = [callback(tmp(tmp2[25]).TableRowGroup, obj2), , , ];
    let str2 = null;
    if (null != publicUpdatesChannel) {
      tmpResult = tmp(tmp2[19]);
      str2 = tmpResult.computeChannelName(publicUpdatesChannel, preferredLocale, callback1, true);
    }
    obj5 = { helperText: null, hasIcons: false, children: null };
    const intl4 = tmp(tmp2[16]).intl;
    obj5[0] = intl4.string(tmp(tmp2[16]).t["Fg6O/5"]);
    const obj6 = { label: null, disabled: null, trailing: null, arrow: true, onPress: null };
    const intl5 = tmp(tmp2[16]).intl;
    obj6[0] = intl5.string(tmp(tmp2[16]).t.vAyDGU);
    obj6[1] = !isAdmin;
    if (str2 == null) {
      str2 = "";
    }
    const obj7 = { text: null };
    obj7[0] = str2;
    obj6[2] = callback(tmp(tmp2[26]).TableRow.TrailingText, obj7);
    obj6[4] = callback3;
    obj5[2] = callback(tmp(tmp2[26]).TableRow, obj6);
    items9[1] = callback(tmp(tmp2[25]).TableRowGroup, obj5);
    preferredLocale = undefined;
    let tmp21Result = null;
    if (null != guild) {
      preferredLocale = guild.preferredLocale;
      let found = calculateLocaleOptions().find((item, index) => item.value === preferredLocale);
      let str3;
      if (found != null) {
        str3 = found.label;
      }
      const obj8 = { helperText: null, hasIcons: false, children: null };
      const intl6 = tmp(tmp2[16]).intl;
      obj8[0] = intl6.string(tmp(tmp2[16]).t["l2g81/"]);
      const obj9 = { label: null, disabled: null, trailing: null, arrow: true, onPress: null };
      const intl7 = tmp(tmp2[16]).intl;
      obj9[0] = intl7.string(tmp(tmp2[16]).t.VeC8vc);
      obj9[1] = !canManage;
      if (str3 == null) {
        str3 = "";
      }
      const obj10 = { text: null };
      obj10[0] = str3;
      obj9[2] = callback(tmp(tmp2[26]).TableRow.TrailingText, obj10);
      obj9[4] = tmp19;
      obj8[2] = callback(tmp(tmp2[26]).TableRow, obj9);
      tmp21Result = callback(tmp(tmp2[25]).TableRowGroup, obj8);
      const arr11 = calculateLocaleOptions();
    }
    items9[2] = tmp21Result;
    tmp21Result = null;
    if (isAdmin) {
      const obj11 = { helperText: null, hasIcons: false, children: null };
      obj11[0] = stringResult;
      const obj12 = { variant: "danger", onPress: null, label: null, disabled: null };
      obj12[1] = callback;
      const intl8 = tmp(tmp2[16]).intl;
      obj12[2] = intl8.string(tmp(tmp2[16]).t.c1BmbC);
      obj12[3] = !tmp12;
      obj11[2] = callback(tmp(tmp2[26]).TableRow, obj12);
      tmp21Result = callback(tmp(tmp2[25]).TableRowGroup, obj11);
    }
    items9[3] = tmp21Result;
    obj[2] = items9;
    obj[2] = callback2(tmp(tmp2[24]).Stack, obj);
    tmp21Result1 = callback(tmp(tmp2[23]).Form, obj);
  }
  return tmp21Result1;
};