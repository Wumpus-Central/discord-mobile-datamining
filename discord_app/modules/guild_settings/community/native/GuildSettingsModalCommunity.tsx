import computeChannelName from "computeChannelName";
import ensureGuildLoaded from "ensureGuildLoaded";
import comparator from "comparator";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_6 } from "comparator";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import handleFormInit from "handleFormInit";
import { calculateLocaleOptions } from "GuildPrimaryCategory";
import ME from "ME";
import jsxProd from "ItemSelectorActionSheet";
import createCacheKey from "createCacheKey";

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let map1;
const require = arg1;
({ ChannelTypes: closure_12, GuildFeatures: map1, GuildSettingsSections: closure_14, Permissions: closure_15 } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
createCacheKey = { overview: { flex: 1 }, overviewContent: null };
createCacheKey = { paddingTop: require("Themes").space.PX_16 };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("comparator").fileFinishedImporting("modules/guild_settings/community/native/GuildSettingsModalCommunity.tsx");

export default function GuildSettingsModalCommunity(guildId) {
  let canManage;
  let isAdmin;
  guildId = guildId.guildId;
  let preferredLocale = guildId;
  const onClose = guildId.onClose;
  let navigation;
  let submitting;
  let hasChanges;
  let guild;
  let rulesChannel;
  let publicUpdatesChannel;
  let callback1;
  preferredLocale = undefined;
  let obj = preferredLocale(navigation[12]);
  const token = obj.useToken(onClose(navigation[11]).modules.mobile.TABLE_ROW_PADDING);
  let obj1 = preferredLocale(navigation[13]);
  navigation = obj1.useNavigation();
  let obj2 = preferredLocale(navigation[14]);
  const items = [handleFormInit];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => props.getProps());
  submitting = stateFromStoresObject.submitting;
  hasChanges = stateFromStoresObject.hasChanges;
  guild = stateFromStoresObject.guild;
  let obj3 = preferredLocale(navigation[14]);
  const items1 = [publicUpdatesChannel];
  const stateFromStoresObject1 = obj3.useStateFromStoresObject(items1, () => {
    let canResult = null != guild;
    if (canResult) {
      canResult = publicUpdatesChannel.can(outer1_15.MANAGE_GUILD, tmp);
    }
    const obj = { canManage: canResult, isAdmin: null };
    let canResult1 = null != tmp;
    if (canResult1) {
      canResult1 = publicUpdatesChannel.can(outer1_15.ADMINISTRATOR, tmp);
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
      rulesChannelId = tmp.rulesChannelId;
    }
    obj = { rulesChannel: hasChanges.getChannel(rulesChannelId), publicUpdatesChannel: null };
    let prop;
    if (guild != null) {
      prop = tmp.publicUpdatesChannelId;
    }
    obj[1] = obj.getChannel(prop);
    return obj;
  });
  rulesChannel = stateFromStoresObject2.rulesChannel;
  publicUpdatesChannel = stateFromStoresObject2.publicUpdatesChannel;
  let obj5 = submitting;
  const items3 = [guild, navigation, onClose];
  const effect = submitting.useEffect(() => {
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(outer1_13.COMMUNITY);
    }
    if (!hasItem) {
      let obj = onClose(navigation[15]);
      obj.setSection(outer1_14.COMMUNITY_INTRO);
      obj = { onClose: null };
      obj[0] = onClose;
      const replaced = navigation.replace(outer1_14.COMMUNITY_INTRO, obj);
    }
  }, items3);
  const items4 = [guild];
  const callback = submitting.useCallback(() => {
    if (null != guild) {
      const _Set = Set;
      const set = new Set(tmp.features);
      set.delete(outer1_13.COMMUNITY);
      set.delete(outer1_13.DISCOVERABLE);
      const obj = { features: null, rulesChannelId: null, publicUpdatesChannelId: null, preferredLocale: null };
      obj[0] = set;
      obj[3] = tmp.preferredLocale;
      onClose(navigation[15]).saveGuild(tmp.id, obj);
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
    function handlePublicCancelChanges(arg0) {
      if (null != comparator) {
        handlePublicSaveChanges(outer1_2[15]).cancelChanges(tmp.id);
        const obj = handlePublicSaveChanges(outer1_2[15]);
      }
      if (handlePublicSaveChanges != null) {
        tmp5();
      }
    }
    function handlePublicSaveChanges(arg0) {
      let features;
      let id;
      let preferredLocale;
      let publicUpdatesChannelId;
      let rulesChannelId;
      let safetyAlertsChannelId;
      if (null != comparator) {
        ({ id, rulesChannelId, publicUpdatesChannelId, preferredLocale, features, safetyAlertsChannelId } = comparator);
        let obj = handlePublicSaveChanges(outer1_2[15]);
        obj = { rulesChannelId: null, safetyAlertsChannelId: null, publicUpdatesChannelId: null, preferredLocale: null, features: null };
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
        return outer2_16(preferredLocale(navigation[17]).HeaderActionButton, obj);
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
        return outer2_16(preferredLocale(navigation[17]).HeaderActionButton, obj);
      };
    }
    obj[1] = fn2;
    navigation.setOptions(obj);
  }, items5);
  const items6 = [guildId];
  callback1 = obj5.useCallback(() => {
    const channels = guild.getChannels(preferredLocale);
    if (null != channels) {
      const found = channels[rulesChannel].filter((channel) => channel.channel.type === constants.GUILD_TEXT);
      const mapped = found.map((channel) => {
        channel = channel.channel;
        const obj = { value: channel.id, label: null };
        obj[1] = callback(table[19]).computeChannelName(channel, mergeGuildAvatar, upsertRelationship, true);
        return obj;
      });
      const arr = channels[rulesChannel];
    }
    return [];
  }, items6);
  const items7 = [callback1, rulesChannel];
  const items8 = [callback1, publicUpdatesChannel];
  const callback2 = obj5.useCallback(() => {
    let obj = onClose(navigation[20]);
    obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
    const intl = preferredLocale(navigation[16]).intl;
    obj[0] = intl.string(preferredLocale(navigation[16]).t.Yr6nGx);
    obj[1] = callback1();
    obj[2] = function onItemSelect(rulesChannelId) {
      let obj = callback(8308);
      obj = { rulesChannelId };
      obj.updateGuild(obj);
      callback(4161).hideActionSheet();
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
    let obj = onClose(navigation[20]);
    obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
    const intl = preferredLocale(navigation[16]).intl;
    obj[0] = intl.string(preferredLocale(navigation[16]).t.VqhxxN);
    obj[1] = callback1();
    obj[2] = function onItemSelect(publicUpdatesChannelId) {
      let obj = callback(8308);
      obj = { publicUpdatesChannelId };
      obj.updateGuild(obj);
      callback(4161).hideActionSheet();
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
    obj = { style: null, contentContainerStyle: null, children: null };
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
    obj3[2] = closure_16(tmp(tmp2[26]).TableRow.TrailingText, obj4);
    obj3[4] = callback2;
    obj2[2] = closure_16(tmp(tmp2[26]).TableRow, obj3);
    const items9 = [closure_16(tmp(tmp2[25]).TableRowGroup, obj2), , , ];
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
    obj6[2] = closure_16(tmp(tmp2[26]).TableRow.TrailingText, obj7);
    obj6[4] = callback3;
    obj5[2] = closure_16(tmp(tmp2[26]).TableRow, obj6);
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
      obj9[2] = tmp21(tmp(tmp2[26]).TableRow.TrailingText, obj10);
      obj9[4] = tmp19;
      obj8[2] = tmp21(tmp(tmp2[26]).TableRow, obj9);
      tmp21Result = tmp21(tmp(tmp2[25]).TableRowGroup, obj8);
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
      obj11[2] = tmp21(tmp(tmp2[26]).TableRow, obj12);
      tmp21Result = tmp21(tmp(tmp2[25]).TableRowGroup, obj11);
    }
    items9[3] = tmp21Result;
    obj[2] = items9;
    obj[2] = closure_17(tmp(tmp2[24]).Stack, obj);
    tmp21Result1 = tmp21(tmp(tmp2[23]).Form, obj);
    const tmp22 = closure_17;
  }
  return tmp21Result1;
};