// discord_app/modules/public_guilds/native/components/EnableCommunityModal/ChannelSetupScreen.tsx
import Constants from "../../../../../Constants.tsx";
import intl10 from "../../../../../intl/index.native.tsx";
import asyncRequire from "../../../../../../_runtime/01987_asyncRequire.js";
import GuildChannelStore2 from "../../../../../stores/GuildChannelStore.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import PublicGuildsConstants from "../../../PublicGuildsConstants.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import GuildSettingsStore from "../../../../guild_settings/GuildSettingsStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const GuildChannelStore = GuildChannelStore2;
let channel;

let closure_14;
let closure_15;
let closure_4;
let hasOwnProperty;
({ Image: closure_4, View: hasOwnProperty } = react_native);
let closure_9 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
const CREATE_NEW_CHANNEL_VALUE = PublicGuildsConstants.CREATE_NEW_CHANNEL_VALUE;
const ChannelTypes = Constants.ChannelTypes;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
const result = size.fileFinishedImporting(
  "modules/public_guilds/native/components/EnableCommunityModal/ChannelSetupScreen.tsx",
);

export default function ChannelSetupScreen() {
  let TableRow;
  let TableRow2;
  let callback;
  let guild;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items5;
  let items6;
  let items7;
  let obj14;
  let obj16;
  let props;
  let publicUpdatesChannel;
  let rulesChannel;
  let obj = callback;
  const ref = callback.useRef(null);
  let tmp2 = guild;
  let obj2 = guild(publicUpdatesChannel[10]);
  const token = obj2.useToken(rulesChannel(publicUpdatesChannel[11]).modules.mobile.TABLE_ROW_PADDING);
  let obj3 = guild(publicUpdatesChannel[12]);
  const enableCommunitySharedStyles = obj3.useEnableCommunitySharedStyles();
  let items = [GuildSettingsStore];
  const obj4 = guild(publicUpdatesChannel[13]);
  guild = obj4.useStateFromStoresObject(items, () => props.getProps()).guild;
  let items1 = [ChannelStore];
  const obj5 = guild(publicUpdatesChannel[13]);
  const stateFromStoresObject = obj5.useStateFromStoresObject(items1, () => {
    let getChannel2;
    let prop;
    let rulesChannelId;
    const getChannel = ChannelStore.getChannel;
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    const obj = { rulesChannel: getChannel(rulesChannelId), publicUpdatesChannel: getChannel2(prop) };
    prop = undefined;
    getChannel2 = ChannelStore.getChannel;
    if (guild != null) {
      prop = guild.publicUpdatesChannelId;
    }
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
  const tmp10 = rulesChannel(publicUpdatesChannel[16])();
  const useCallback = obj.useCallback;
  if (guild != null) {
    id = guild.id;
  }
  const items2 = [id];
  callback = useCallback(() => {
    let intl;
    let id;
    const getChannels = GuildChannelStore.getChannels;
    if (guild != null) {
      id = guild.id;
    }
    const channels = getChannels(id);
    let obj = { value: CREATE_NEW_CHANNEL_VALUE, label: intl.string(intl10.t.Cla0re) };
    intl = intl10.intl;
    let items = [];
    if (null != channels) {
      const arr2 = channels[closure_9];
      const found = arr2.filter((channel) => channel.channel.type === constants.GUILD_TEXT);
      items = found.map((channel) => {
        let obj2;
        channel = channel.channel;
        const obj = { value: channel.id, label: obj2.computeChannelName(channel, closure_1_11, closure_1_10, true) };
        obj2 = guild(publicUpdatesChannel[14]);
        return obj;
      });
    }
    const items1 = [obj, ...items];
    return items1;
  }, items2);
  const items3 = [callback, rulesChannel];
  const items4 = [callback, publicUpdatesChannel];
  const callback1 = obj.useCallback(() => {
    let id;
    let intl;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    let obj = {
      title: intl.string(intl10.t.Yr6nGx),
      items: callback(),
      onItemSelect(rulesChannelId) {
        const obj = rulesChannel(publicUpdatesChannel[20]);
        const obj2 = { rulesChannelId };
        obj.updateGuild(obj2);
        const obj3 = rulesChannel(publicUpdatesChannel[17]);
        obj3.hideActionSheet();
      },
      selectedItem: id,
      hasIcons: false,
    };
    ActionSheetActionCreatorsDefault;
    const tmp2 = asyncRequire(8978, dependencyMap.paths);
    intl = intl10.intl;
    id = undefined;
    if (rulesChannel != null) {
      id = rulesChannel.id;
    }
    if (id == null) {
      id = CREATE_NEW_CHANNEL_VALUE;
    }
    openLazy(tmp2, "SelectRulesChannel", obj);
  }, items3);
  const callback2 = obj.useCallback(() => {
    let id;
    let intl;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    let obj = {
      title: intl.string(intl10.t.VqhxxN),
      items: callback(),
      onItemSelect(publicUpdatesChannelId) {
        const obj = rulesChannel(publicUpdatesChannel[20]);
        const obj2 = { publicUpdatesChannelId };
        obj.updateGuild(obj2);
        const obj3 = rulesChannel(publicUpdatesChannel[17]);
        obj3.hideActionSheet();
      },
      selectedItem: id,
      hasIcons: false,
    };
    ActionSheetActionCreatorsDefault;
    const tmp2 = asyncRequire(8978, dependencyMap.paths);
    intl = intl10.intl;
    id = undefined;
    if (publicUpdatesChannel != null) {
      id = publicUpdatesChannel.id;
    }
    if (id == null) {
      id = CREATE_NEW_CHANNEL_VALUE;
    }
    openLazy(tmp2, "SelectUpdatesChannel", obj);
  }, items4);
  const obj6 = {
    headerRef: ref,
    disableNextStep: false,
    currentStep: tmp2(publicUpdatesChannel[21]).EnableCommunityModalSteps.STEP_2,
    children: items6,
  };
  const EnableCommunityModalScreen = tmp2(tmp3[21]).EnableCommunityModalScreen;
  const obj7 = { style: enableCommunitySharedStyles.content, children: items5 };
  const obj8 = {
    ref,
    accessibilityRole: "header",
    variant: "text-md/semibold",
    color: "text-subtle",
    children: intl3.formatToPlainString(tmp2(publicUpdatesChannel[15]).t.tInpJj, { number: 2, total: 3 }),
  };
  const Text = tmp2(tmp3[22]).Text;
  intl3 = tmp2(tmp3[15]).intl;
  items5 = [closure_14(Text, obj8), , ,];
  const obj9 = { resizeMode: "contain", source: tmp10.channelSetup };
  items5[1] = closure_14(closure_4, obj9);
  const obj10 = {
    style: enableCommunitySharedStyles.header,
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: intl4.string(tmp2(publicUpdatesChannel[15]).t.YtXpEh),
  };
  const Heading = tmp2(tmp3[22]).Heading;
  intl4 = tmp2(tmp3[15]).intl;
  items5[2] = closure_14(Heading, obj10);
  const obj11 = {
    style: enableCommunitySharedStyles.description,
    variant: "text-md/medium",
    color: "text-subtle",
    children: intl5.string(tmp2(publicUpdatesChannel[15]).t["J/fYR8"]),
  };
  const Text2 = tmp2(tmp3[22]).Text;
  intl5 = tmp2(tmp3[15]).intl;
  items5[3] = closure_14(Text2, obj11);
  items6 = [closure_15(closure_5, obj7)];
  const obj12 = { spacing: 24, style: { paddingHorizontal: token }, children: items7 };
  const Stack = tmp2(tmp3[23]).Stack;
  const obj13 = {
    helperText: intl6.string(tmp2(publicUpdatesChannel[15]).t["+Af+Vw"]),
    hasIcons: false,
    children: closure_14(TableRow, obj14),
  };
  const TableRowGroup = tmp2(tmp3[24]).TableRowGroup;
  intl6 = tmp2(tmp3[15]).intl;
  obj14 = {
    label: intl7.string(tmp2(publicUpdatesChannel[15]).t.dYrhCO),
    trailing: closure_14(tmp2(publicUpdatesChannel[25]).TableRow.TrailingText, { text: stringResult }),
    arrow: true,
    onPress: callback1,
  };
  TableRow = tmp2(tmp3[25]).TableRow;
  intl7 = tmp2(tmp3[15]).intl;
  items7 = [closure_14(TableRowGroup, obj13)];
  const obj15 = {
    helperText: intl8.string(tmp2(publicUpdatesChannel[15]).t.ZFeonu),
    hasIcons: false,
    children: closure_14(TableRow2, obj16),
  };
  const TableRowGroup2 = tmp2(tmp3[24]).TableRowGroup;
  intl8 = tmp2(tmp3[15]).intl;
  obj16 = {
    label: intl9.string(tmp2(publicUpdatesChannel[15]).t.vAyDGU),
    trailing: closure_14(tmp2(publicUpdatesChannel[25]).TableRow.TrailingText, { text: stringResult1 }),
    arrow: true,
    onPress: callback2,
  };
  TableRow2 = tmp2(tmp3[25]).TableRow;
  intl9 = tmp2(tmp3[15]).intl;
  items7[1] = closure_14(TableRowGroup2, obj15);
  items6[1] = closure_15(Stack, obj12);
  return closure_15(EnableCommunityModalScreen, obj6);
}
