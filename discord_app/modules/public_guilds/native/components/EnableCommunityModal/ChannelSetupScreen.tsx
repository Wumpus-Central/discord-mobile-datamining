// === Module 19785: ChannelSetupScreen ===

// Module 19785 (ChannelSetupScreen)
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import noop from "module_19" /* 19 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9056 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildChannelStore from "GuildChannelStore" /* 4939 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;

require = fn;
const View = fn(17).View;
let closure_8 = fn(4939).GUILD_SELECTABLE_CHANNELS_KEY;
const CREATE_NEW_CHANNEL_VALUE = fn(8495).CREATE_NEW_CHANNEL_VALUE;
const ChannelTypes = fn(1072).ChannelTypes;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/ChannelSetupScreen.tsx");

export default function ChannelSetupScreen() {
  const ref = noop.useRef(null);
  const token = guild(5591).useToken(callback(575).modules.mobile.TABLE_ROW_PADDING);
  let obj2 = guild(5591);
  const enableCommunitySharedStyles = guild(19774).useEnableCommunitySharedStyles();
  let obj3 = guild(19774);
  let items = [GuildSettingsStore];
  guild = guild(504).useStateFromStoresObject(items, () => props.getProps()).guild;
  const obj4 = guild(504);
  let items1 = [ChannelStore];
  const stateFromStoresObject = guild(504).useStateFromStoresObject(items1, () => {
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
  ({ rulesChannel, publicUpdatesChannel } = stateFromStoresObject);
  const tmp8 = callback(5647)(rulesChannel, true);
  if (tmp8 != null) {
    const tmp12 = tmp4(5647)(publicUpdatesChannel, true);
    if (tmp12 != null) {
      let id;
      if (guild != null) {
        id = guild.id;
      }
      const items2 = [id];
      callback = noop.useCallback(() => {
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
          const found = channels[closure_8].filter((channel) => channel.channel.type === constants.GUILD_TEXT);
          items = found.map((channel) => {
            channel = channel.channel;
            const obj = { value: channel.id, label: guild(closure_1_2[14]).computeChannelName(channel, closure_1_10, closure_1_9, true) };
            return obj;
          });
        }
        const items1 = [obj, ...items];
        return items1;
      }, items2);
      const items3 = [callback, ];
      let rulesChannelId;
      if (guild != null) {
        rulesChannelId = guild.rulesChannelId;
      }
      items3[1] = rulesChannelId;
      const items4 = [callback, ];
      let prop;
      const callback1 = noop.useCallback(() => {
        let obj2 = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
        let obj = ActionSheetActionCreatorsDefault;
        const intl = util.intl;
        obj2.title = intl.string(util.t.Yr6nGx);
        const obj3 = { value: null, label: null };
        const intl2 = util.intl;
        obj3.label = intl2.string(util.t.PoWNfe);
        const items = [obj3, ...callback()];
        obj2.items = items;
        obj2.onItemSelect = function onItemSelect(rulesChannelId) {
          callback(9055).updateGuild({ rulesChannelId });
          const obj = callback(9055);
          const obj2 = { rulesChannelId };
          callback(5253).hideActionSheet();
        };
        let rulesChannelId;
        if (guild != null) {
          rulesChannelId = guild.rulesChannelId;
        }
        if (rulesChannelId == null) {
          rulesChannelId = null;
        }
        obj2.selectedItem = rulesChannelId;
        obj.openLazy(asyncRequireImpl(8993, dependencyMap.paths), "SelectRulesChannel", obj2);
      }, items3);
      if (guild != null) {
        prop = guild.publicUpdatesChannelId;
      }
      items4[1] = prop;
      const callback2 = noop.useCallback(() => {
        let obj2 = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
        let obj = ActionSheetActionCreatorsDefault;
        const intl = util.intl;
        obj2.title = intl.string(util.t.VqhxxN);
        const obj3 = { value: null, label: null };
        const intl2 = util.intl;
        obj3.label = intl2.string(util.t.PoWNfe);
        const items = [obj3, ...callback()];
        obj2.items = items;
        obj2.onItemSelect = function onItemSelect(publicUpdatesChannelId) {
          callback(9055).updateGuild({ publicUpdatesChannelId });
          const obj = callback(9055);
          const obj2 = { publicUpdatesChannelId };
          callback(5253).hideActionSheet();
        };
        let prop;
        if (guild != null) {
          prop = guild.publicUpdatesChannelId;
        }
        if (prop == null) {
          prop = null;
        }
        obj2.selectedItem = prop;
        obj.openLazy(asyncRequireImpl(8993, dependencyMap.paths), "SelectUpdatesChannel", obj2);
      }, items4);
      const obj6 = { headerRef: ref, disableNextStep: false, currentStep: tmp2(19772).EnableCommunityModalSteps.STEP_2, children: null };
      const obj7 = { style: enableCommunitySharedStyles.content, children: null };
      const obj8 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle", children: null };
      const intl4 = tmp2(1114).intl;
      obj8.children = intl4.formatToPlainString(tmp2(1114).t.tInpJj, { number: 2, total: 3 });
      const items5 = [closure_13(tmp2(5619).Text, obj8), , , ];
      const obj9 = { resizeMode: "contain", source: tmp4(19775)().channelSetup };
      items5[1] = closure_13(tmp4(5712), obj9);
      const obj10 = { style: enableCommunitySharedStyles.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
      const intl5 = tmp2(1114).intl;
      obj10.children = intl5.string(tmp2(1114).t.YtXpEh);
      items5[2] = closure_13(tmp2(5619).Heading, obj10);
      const obj11 = { style: enableCommunitySharedStyles.description, variant: "text-md/medium", color: "text-subtle", children: null };
      const intl6 = tmp2(1114).intl;
      obj11.children = intl6.string(tmp2(1114).t["J/fYR8"]);
      items5[3] = closure_13(tmp2(5619).Text, obj11);
      obj7.children = items5;
      const items6 = [closure_14(View, obj7), ];
      const obj12 = { spacing: 24, style: null, children: null };
      const obj13 = { paddingHorizontal: token };
      obj12.style = obj13;
      const obj14 = { helperText: null, hasIcons: false, children: null };
      const intl7 = tmp2(1114).intl;
      obj14.helperText = intl7.string(tmp2(1114).t["+Af+Vw"]);
      const obj15 = { label: null, trailing: null, arrow: true, onPress: null };
      const intl8 = tmp2(1114).intl;
      obj15.label = intl8.string(tmp2(1114).t.dYrhCO);
      const obj16 = { text: tmp8 };
      obj15.trailing = closure_13(tmp2(6969).TableRow.TrailingText, obj16);
      obj15.onPress = callback1;
      obj14.children = closure_13(tmp2(6969).TableRow, obj15);
      const items7 = [closure_13(tmp2(7054).TableRowGroup, obj14), ];
      const intl9 = tmp2(1114).intl;
      const items8 = [intl9.string(tmp2(1114).t.ZFeonu), ];
      let prop1;
      if (guild != null) {
        prop1 = guild.publicUpdatesChannelId;
      }
      let tmp24Result = null;
      if (null == prop1) {
        let prop2;
        if (guild != null) {
          prop2 = guild.safetyAlertsChannelId;
        }
        tmp24Result = null;
        if (null == prop2) {
          const obj17 = { children: null };
          const intl10 = tmp2(1114).intl;
          const items9 = [" ", intl10.string(tmp2(1114).t["0H6Cdy"])];
          obj17.children = items9;
          tmp24Result = closure_14(closure_15, obj17);
        }
      }
      const obj18 = { helperText: null, hasIcons: false, children: null };
      const obj19 = { children: null };
      items8[1] = tmp24Result;
      obj19.children = items8;
      obj18.helperText = closure_14(closure_15, obj19);
      const obj20 = { label: null, subLabel: null, trailing: null, arrow: true, onPress: null };
      const intl11 = tmp2(1114).intl;
      obj20.label = intl11.string(tmp2(1114).t.vAyDGU);
      const intl12 = tmp2(1114).intl;
      obj20.subLabel = intl12.string(tmp2(1114).t.zdWNET);
      const obj21 = { text: tmp12 };
      obj20.trailing = closure_13(tmp2(6969).TableRow.TrailingText, obj21);
      obj20.onPress = callback2;
      obj18.children = closure_13(tmp2(6969).TableRow, obj20);
      items7[1] = closure_13(tmp2(7054).TableRowGroup, obj18);
      obj12.children = items7;
      items6[1] = closure_14(tmp2(6022).Stack, obj12);
      obj6.children = items6;
      return closure_14(tmp2(19772).EnableCommunityModalScreen, obj6);
    } else {
      let prop3;
      if (guild != null) {
        prop3 = guild.publicUpdatesChannelId;
      }
      if (prop3 === CREATE_NEW_CHANNEL_VALUE) {
        const intl3 = tmp2(1114).intl;
        let stringResult = intl3.string(tmp2(1114).t.Cla0re);
      } else {
        let intl2 = tmp2(1114).intl;
        stringResult = intl2.string(tmp2(1114).t.PoWNfe);
      }
    }
  } else {
    let intl = tmp2(1114).intl;
    let rulesChannelId1;
    if (guild != null) {
      rulesChannelId1 = guild.rulesChannelId;
    }
    if (rulesChannelId1 === CREATE_NEW_CHANNEL_VALUE) {
      let PoWNfe = tmp2(1114).t.Cla0re;
    } else {
      PoWNfe = tmp2(1114).t.PoWNfe;
    }
    intl.string(PoWNfe);
  }
  const obj5 = guild(504);
};