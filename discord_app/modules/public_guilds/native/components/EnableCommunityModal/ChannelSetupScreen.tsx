// === Module 17022: ChannelSetupScreen ===

// Module 17022 (ChannelSetupScreen)
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "handleFormInit" /* 9169 */;
import closure_7 from "ensureGuildLoaded" /* 1391 */;
import closure_8 from "comparator" /* 1982 */;
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_9 } from "comparator" /* 1982 */;
import closure_10 from "markAllUserIdListsStale" /* 4034 */;
import closure_11 from "mergeGuildAvatar" /* 1922 */;
import { CREATE_NEW_CHANNEL_VALUE } from "PUBLIC_SUCCESS_MODAL_SEEN_KEY" /* 8295 */;
import { ChannelTypes } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/ChannelSetupScreen.tsx");

export default function ChannelSetupScreen() {
  let obj = callback;
  const ref = callback.useRef(null);
  obj1 = guild(publicUpdatesChannel[10]);
  const token = obj1.useToken(rulesChannel(publicUpdatesChannel[11]).modules.mobile.TABLE_ROW_PADDING);
  let obj2 = guild(publicUpdatesChannel[12]);
  const enableCommunitySharedStyles = obj2.useEnableCommunitySharedStyles();
  let obj3 = guild(publicUpdatesChannel[13]);
  let items = [closure_6];
  guild = obj3.useStateFromStoresObject(items, () => props.getProps()).guild;
  let obj4 = guild(publicUpdatesChannel[13]);
  let items1 = [closure_7];
  const stateFromStoresObject = obj4.useStateFromStoresObject(items1, () => {
    let obj = closure_1_7;
    let rulesChannelId;
    if (guild != null) {
      rulesChannelId = tmp.rulesChannelId;
    }
    obj = { rulesChannel: closure_1_7.getChannel(rulesChannelId), publicUpdatesChannel: null };
    let prop;
    if (guild != null) {
      prop = tmp.publicUpdatesChannelId;
    }
    obj[1] = obj.getChannel(prop);
    return obj;
  });
  rulesChannel = stateFromStoresObject.rulesChannel;
  publicUpdatesChannel = stateFromStoresObject.publicUpdatesChannel;
  let stringResult = rulesChannel(publicUpdatesChannel[14])(rulesChannel, true);
  if (stringResult == null) {
    let intl = tmp2(tmp3[15]).intl;
    stringResult = intl.string(tmp2(tmp3[15]).t.Cla0re);
  }
  let stringResult1 = tmp4(tmp3[14])(publicUpdatesChannel, true);
  if (stringResult1 == null) {
    const intl2 = tmp2(tmp3[15]).intl;
    stringResult1 = intl2.string(tmp2(tmp3[15]).t.Cla0re);
  }
  let id;
  if (guild != null) {
    id = guild.id;
  }
  const items2 = [id];
  callback = obj.useCallback(() => {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    const channels = closure_1_8.getChannels(id);
    let obj = { value: closure_1_12, label: null };
    const intl = guild(publicUpdatesChannel[15]).intl;
    obj[1] = intl.string(guild(publicUpdatesChannel[15]).t.Cla0re);
    let items = [];
    if (null != channels) {
      const found = channels[closure_1_9].filter((channel) => channel.channel.type === constants.GUILD_TEXT);
      items = found.map((channel) => {
        channel = channel.channel;
        const obj = { value: channel.id, label: callback(table[14]).computeChannelName(channel, closure_11, closure_10, true) };
        return obj;
      });
      const arr2 = channels[closure_1_9];
    }
    const items1 = [obj, ...items];
    return items1;
  }, items2);
  const items3 = [callback, rulesChannel];
  const items4 = [callback, publicUpdatesChannel];
  const callback1 = obj.useCallback(() => {
    let obj = rulesChannel(publicUpdatesChannel[17]);
    obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
    const intl = guild(publicUpdatesChannel[15]).intl;
    obj[0] = intl.string(guild(publicUpdatesChannel[15]).t.Yr6nGx);
    obj[1] = callback();
    obj[2] = function onItemSelect(rulesChannelId) {
      let obj = callback(9168);
      obj = { rulesChannelId };
      obj.updateGuild(obj);
      callback(4347).hideActionSheet();
    };
    let id;
    if (rulesChannel != null) {
      id = rulesChannel.id;
    }
    if (id == null) {
      id = closure_1_12;
    }
    obj[3] = id;
    obj.openLazy(guild(publicUpdatesChannel[19])(publicUpdatesChannel[18], publicUpdatesChannel.paths), "SelectRulesChannel", obj);
  }, items3);
  const callback2 = obj.useCallback(() => {
    let obj = rulesChannel(publicUpdatesChannel[17]);
    obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
    const intl = guild(publicUpdatesChannel[15]).intl;
    obj[0] = intl.string(guild(publicUpdatesChannel[15]).t.VqhxxN);
    obj[1] = callback();
    obj[2] = function onItemSelect(publicUpdatesChannelId) {
      let obj = callback(9168);
      obj = { publicUpdatesChannelId };
      obj.updateGuild(obj);
      callback(4347).hideActionSheet();
    };
    let id;
    if (publicUpdatesChannel != null) {
      id = publicUpdatesChannel.id;
    }
    if (id == null) {
      id = closure_1_12;
    }
    obj[3] = id;
    obj.openLazy(guild(publicUpdatesChannel[19])(publicUpdatesChannel[18], publicUpdatesChannel.paths), "SelectUpdatesChannel", obj);
  }, items4);
  obj = { headerRef: ref, disableNextStep: false, currentStep: tmp2(tmp3[21]).EnableCommunityModalSteps.STEP_2, children: null };
  obj = { style: enableCommunitySharedStyles.content, children: null };
  obj1 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle", children: null };
  const intl3 = tmp2(tmp3[15]).intl;
  obj1[4] = intl3.formatToPlainString(guild(publicUpdatesChannel[15]).t.tInpJj, { number: 2, total: 3 });
  const items5 = [callback(guild(publicUpdatesChannel[22]).Text, obj1), , , ];
  obj2 = { resizeMode: "contain", source: rulesChannel(publicUpdatesChannel[16])().channelSetup };
  items5[1] = callback(closure_4, obj2);
  obj3 = { style: enableCommunitySharedStyles.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl4 = tmp2(tmp3[15]).intl;
  obj3[3] = intl4.string(guild(publicUpdatesChannel[15]).t.YtXpEh);
  items5[2] = callback(guild(publicUpdatesChannel[22]).Heading, obj3);
  obj4 = { style: enableCommunitySharedStyles.description, variant: "text-md/medium", color: "text-subtle", children: null };
  const intl5 = tmp2(tmp3[15]).intl;
  obj4[3] = intl5.string(guild(publicUpdatesChannel[15]).t["J/fYR8"]);
  items5[3] = callback(guild(publicUpdatesChannel[22]).Text, obj4);
  obj[1] = items5;
  const items6 = [callback2(closure_5, obj), ];
  const obj5 = { spacing: 24, style: { paddingHorizontal: token }, children: null };
  const obj6 = { helperText: null, hasIcons: false, children: null };
  const intl6 = tmp2(tmp3[15]).intl;
  obj6[0] = intl6.string(guild(publicUpdatesChannel[15]).t["+Af+Vw"]);
  const obj7 = { label: null, trailing: null, arrow: true, onPress: null };
  const intl7 = tmp2(tmp3[15]).intl;
  obj7[0] = intl7.string(guild(publicUpdatesChannel[15]).t.dYrhCO);
  obj7[1] = callback(guild(publicUpdatesChannel[25]).TableRow.TrailingText, { text: stringResult });
  obj7[3] = callback1;
  obj6[2] = callback(guild(publicUpdatesChannel[25]).TableRow, obj7);
  const items7 = [callback(guild(publicUpdatesChannel[24]).TableRowGroup, obj6), ];
  const obj8 = { helperText: null, hasIcons: false, children: null };
  const intl8 = tmp2(tmp3[15]).intl;
  obj8[0] = intl8.string(guild(publicUpdatesChannel[15]).t.ZFeonu);
  const obj9 = { label: null, trailing: null, arrow: true, onPress: null };
  const intl9 = tmp2(tmp3[15]).intl;
  obj9[0] = intl9.string(guild(publicUpdatesChannel[15]).t.vAyDGU);
  obj9[1] = callback(guild(publicUpdatesChannel[25]).TableRow.TrailingText, { text: stringResult1 });
  obj9[3] = callback2;
  obj8[2] = callback(guild(publicUpdatesChannel[25]).TableRow, obj9);
  items7[1] = callback(guild(publicUpdatesChannel[24]).TableRowGroup, obj8);
  obj5[2] = items7;
  items6[1] = callback2(guild(publicUpdatesChannel[23]).Stack, obj5);
  obj[3] = items6;
  return callback2(guild(publicUpdatesChannel[21]).EnableCommunityModalScreen, obj);
};