// discord_app/modules/public_guilds/native/components/EnableCommunityModal/ChannelSetupScreen.tsx
import util from "../../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../../_runtime/01897_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildSettingsStore from "../../../../guild_settings/GuildSettingsStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../../../../stores/GuildChannelStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let closure_9 = fn(2013).GUILD_SELECTABLE_CHANNELS_KEY;
const CREATE_NEW_CHANNEL_VALUE = fn(8172).CREATE_NEW_CHANNEL_VALUE;
const ChannelTypes = fn(1074).ChannelTypes;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/public_guilds/native/components/EnableCommunityModal/ChannelSetupScreen.tsx",
);

export default function ChannelSetupScreen() {
  const ref = callback.useRef(null);
  const token = guild(publicUpdatesChannel[10]).useToken(
    rulesChannel(publicUpdatesChannel[11]).modules.mobile.TABLE_ROW_PADDING,
  );
  let obj2 = guild(publicUpdatesChannel[10]);
  const enableCommunitySharedStyles = guild(publicUpdatesChannel[12]).useEnableCommunitySharedStyles();
  const obj3 = guild(publicUpdatesChannel[12]);
  let items = [GuildSettingsStore];
  guild = guild(publicUpdatesChannel[13]).useStateFromStoresObject(items, () => props.getProps()).guild;
  const obj4 = guild(publicUpdatesChannel[13]);
  let items1 = [ChannelStore];
  const stateFromStoresObject = guild(publicUpdatesChannel[13]).useStateFromStoresObject(items1, () => {
    let rulesChannelId;
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    const obj2 = { rulesChannel: ChannelStore.getChannel(rulesChannelId), publicUpdatesChannel: null };
    let prop;
    if (guild != null) {
      prop = guild.publicUpdatesChannelId;
    }
    obj2.publicUpdatesChannel = ChannelStore.getChannel(prop);
    return obj2;
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
  const obj5 = guild(publicUpdatesChannel[13]);
  if (guild != null) {
    id = guild.id;
  }
  const items2 = [id];
  callback = obj.useCallback(() => {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    const channels = GuildChannelStore.getChannels(id);
    let obj = { value: CREATE_NEW_CHANNEL_VALUE, label: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.Cla0re);
    let items = [];
    if (null != channels) {
      const found = channels[closure_9].filter((channel) => channel.channel.type === constants.GUILD_TEXT);
      items = found.map((channel) => {
        channel = channel.channel;
        const obj = {
          value: channel.id,
          label: guild(publicUpdatesChannel[14]).computeChannelName(channel, closure_1_11, closure_1_10, true),
        };
        return obj;
      });
    }
    const items1 = [obj, ...items];
    return items1;
  }, items2);
  const items3 = [callback, rulesChannel];
  const items4 = [callback, publicUpdatesChannel];
  const callback1 = obj.useCallback(() => {
    let obj2 = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
    let obj = ActionSheetActionCreatorsDefault;
    const intl = util.intl;
    obj2.title = intl.string(util.t.Yr6nGx);
    obj2.items = callback();
    obj2.onItemSelect = function onItemSelect(rulesChannelId) {
      rulesChannel(9217).updateGuild({ rulesChannelId });
      const obj = rulesChannel(9217);
      const obj2 = { rulesChannelId };
      rulesChannel(4607).hideActionSheet();
    };
    let id;
    if (rulesChannel != null) {
      id = rulesChannel.id;
    }
    if (id == null) {
      id = CREATE_NEW_CHANNEL_VALUE;
    }
    obj2.selectedItem = id;
    obj.openLazy(asyncRequireImpl(9580, dependencyMap.paths), "SelectRulesChannel", obj2);
  }, items3);
  const callback2 = obj.useCallback(() => {
    let obj2 = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
    let obj = ActionSheetActionCreatorsDefault;
    const intl = util.intl;
    obj2.title = intl.string(util.t.VqhxxN);
    obj2.items = callback();
    obj2.onItemSelect = function onItemSelect(publicUpdatesChannelId) {
      rulesChannel(9217).updateGuild({ publicUpdatesChannelId });
      const obj = rulesChannel(9217);
      const obj2 = { publicUpdatesChannelId };
      rulesChannel(4607).hideActionSheet();
    };
    let id;
    if (publicUpdatesChannel != null) {
      id = publicUpdatesChannel.id;
    }
    if (id == null) {
      id = CREATE_NEW_CHANNEL_VALUE;
    }
    obj2.selectedItem = id;
    obj.openLazy(asyncRequireImpl(9580, dependencyMap.paths), "SelectUpdatesChannel", obj2);
  }, items4);
  const obj6 = {
    headerRef: ref,
    disableNextStep: false,
    currentStep: guild(publicUpdatesChannel[21]).EnableCommunityModalSteps.STEP_2,
    children: null,
  };
  const obj7 = { style: enableCommunitySharedStyles.content, children: null };
  const obj8 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle", children: null };
  const intl3 = tmp2(tmp3[15]).intl;
  obj8.children = intl3.formatToPlainString(guild(publicUpdatesChannel[15]).t.tInpJj, { number: 2, total: 3 });
  const items5 = [closure_14(guild(publicUpdatesChannel[22]).Text, obj8), , ,];
  const tmp10 = rulesChannel(publicUpdatesChannel[16])();
  items5[1] = closure_14(closure_4, {
    resizeMode: "contain",
    source: rulesChannel(publicUpdatesChannel[16])().channelSetup,
  });
  const obj10 = {
    style: enableCommunitySharedStyles.header,
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl4 = tmp2(tmp3[15]).intl;
  obj10.children = intl4.string(guild(publicUpdatesChannel[15]).t.YtXpEh);
  items5[2] = closure_14(guild(publicUpdatesChannel[22]).Heading, obj10);
  const obj11 = {
    style: enableCommunitySharedStyles.description,
    variant: "text-md/medium",
    color: "text-subtle",
    children: null,
  };
  const intl5 = tmp2(tmp3[15]).intl;
  obj11.children = intl5.string(guild(publicUpdatesChannel[15]).t["J/fYR8"]);
  items5[3] = closure_14(guild(publicUpdatesChannel[22]).Text, obj11);
  obj7.children = items5;
  const items6 = [closure_15(closure_5, obj7)];
  const obj12 = { spacing: 24, style: { paddingHorizontal: token }, children: null };
  const obj13 = { helperText: null, hasIcons: false, children: null };
  const intl6 = tmp2(tmp3[15]).intl;
  obj13.helperText = intl6.string(guild(publicUpdatesChannel[15]).t["+Af+Vw"]);
  const obj14 = { label: null, trailing: null, arrow: true, onPress: null };
  const intl7 = tmp2(tmp3[15]).intl;
  obj14.label = intl7.string(guild(publicUpdatesChannel[15]).t.dYrhCO);
  obj14.trailing = closure_14(guild(publicUpdatesChannel[25]).TableRow.TrailingText, { text: stringResult });
  obj14.onPress = callback1;
  obj13.children = closure_14(guild(publicUpdatesChannel[25]).TableRow, obj14);
  const items7 = [closure_14(guild(publicUpdatesChannel[24]).TableRowGroup, obj13)];
  const obj15 = { helperText: null, hasIcons: false, children: null };
  const intl8 = tmp2(tmp3[15]).intl;
  obj15.helperText = intl8.string(guild(publicUpdatesChannel[15]).t.ZFeonu);
  const obj16 = { label: null, trailing: null, arrow: true, onPress: null };
  const intl9 = tmp2(tmp3[15]).intl;
  obj16.label = intl9.string(guild(publicUpdatesChannel[15]).t.vAyDGU);
  obj16.trailing = closure_14(guild(publicUpdatesChannel[25]).TableRow.TrailingText, { text: stringResult1 });
  obj16.onPress = callback2;
  obj15.children = closure_14(guild(publicUpdatesChannel[25]).TableRow, obj16);
  items7[1] = closure_14(guild(publicUpdatesChannel[24]).TableRowGroup, obj15);
  obj12.children = items7;
  items6[1] = closure_15(guild(publicUpdatesChannel[23]).Stack, obj12);
  obj6.children = items6;
  return closure_15(guild(publicUpdatesChannel[21]).EnableCommunityModalScreen, obj6);
}
