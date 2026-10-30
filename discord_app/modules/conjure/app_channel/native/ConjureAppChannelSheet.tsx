// discord_app/modules/conjure/app_channel/native/ConjureAppChannelSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import useAppChannelApplication from "../../../app_channels/useAppChannelApplication.tsx";
import ChannelSettingsActionCreatorsDefault from "../../../../actions/ChannelSettingsActionCreators.tsx";
import instant_invite_InstantInviteUtils from "../../../instant_invite/native/InstantInviteUtils.tsx";
import ConjureRemixSheet from "../../remix/native/ConjureRemixSheet.tsx";
import openConjureHomeScreenDefault from "../../home/native/openConjureHomeScreen.tsx";
import openConjureAppChannelSheet from "openConjureAppChannelSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelMemberCountStore from "../../../channel/ChannelMemberCountStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";

const ConjureRemixSheetDefault = ConjureRemixSheet;

require = fn;
function ConjureAppChannelSheetHeader(channel) {
  channel = channel.channel;
  const tmp = closure_13();
  const tmp3 = useChannelNameDefault(channel);
  const appChannelApplication = useAppChannelApplication.useAppChannelApplication(channel);
  const obj2 = { spacing: nativeDefault.space.PX_4, align: "center", children: null };
  const items = [
    closure_1_10(Text_Text.Heading, { variant: "heading-lg/bold", lineClamp: 1, style: tmp.centered, children: tmp3 }),
  ];
  let tmp7Result = null;
  if (null != appChannelApplication) {
    const obj4 = {
      variant: "text-sm/medium",
      color: "text-muted",
      lineClamp: 1,
      style: tmp.centered,
      children: appChannelApplication.name,
    };
    tmp7Result = closure_1_10(Text_Text.Text, obj4);
  }
  items[1] = tmp7Result;
  obj2.children = items;
  return closure_1_11(Stack_Stack.Stack, obj2);
}
function ConjureAppChannelSheetContent(channel) {
  channel = channel.channel;
  let remixProject;
  noop = undefined;
  let canManageChannel;
  let guild_id = channel.guild_id;
  if (guild_id == null) {
    guild_id = null;
  }
  let tmp2 = channel;
  const tmp3 = remixProject;
  const appChannelAppActions = channel(remixProject[13]).useAppChannelAppActions(channel);
  remixProject = guild_id(remixProject[14])(channel, true).remixProject;
  let obj = channel(remixProject[13]);
  const isConjureMobileEnabled = channel(remixProject[15]).useIsConjureMobileEnabled(
    null != remixProject,
    "ConjureAppChannelSheet",
  );
  const tmp7 = guild_id(remixProject[16])(channel);
  noop = tmp7;
  let obj2 = channel(remixProject[15]);
  const isConjureMobileEnabled1 = channel(remixProject[15]).useIsConjureMobileEnabled(
    null != tmp7,
    "ConjureAppChannelSheet",
  );
  let obj3 = channel(remixProject[15]);
  const items = [PermissionStore];
  const items1 = [channel];
  const stateFromStoresObject = channel(remixProject[17]).useStateFromStoresObject(
    items,
    () => ({
      canManageChannel: PermissionStore.can(constants2.MANAGE_CHANNELS, channel),
      canInvite: PermissionStore.can(constants2.CREATE_INSTANT_INVITE, channel),
    }),
    items1,
  );
  canManageChannel = stateFromStoresObject.canManageChannel;
  let obj4 = channel(remixProject[17]);
  const items2 = [canManageChannel];
  const items3 = [channel.id];
  const stateFromStores = channel(remixProject[17]).useStateFromStores(
    items2,
    () => ChannelMemberCountStore.getMemberCount(channel.id).total,
    items3,
  );
  const items4 = [guild_id, channel.id];
  const effect = noop.useEffect(() => {
    if (null != guild_id) {
      const count = ChannelMemberCountStore.requestCount(tmp, channel.id);
    }
  }, items4);
  const reload = appChannelAppActions.reload;
  closure_129_0 = reload;
  const items5 = [reload];
  const memo = noop.useMemo(() => {
    let fn = null;
    if (null != channel) {
      fn = () => {
        const result = channel(remixProject[12]).closeConjureAppChannelSheet();
        closure_1_0();
      };
    }
    return fn;
  }, items5);
  const close = appChannelAppActions.close;
  closure_130_0 = close;
  const items6 = [close];
  const memo1 = noop.useMemo(() => {
    let fn = null;
    if (null != channel) {
      fn = () => {
        const result = channel(remixProject[12]).closeConjureAppChannelSheet();
        closure_1_0();
      };
    }
    return fn;
  }, items6);
  const appInfo = appChannelAppActions.appInfo;
  closure_131_0 = appInfo;
  const items7 = [appInfo];
  const memo2 = noop.useMemo(() => {
    let fn = null;
    if (null != channel) {
      fn = () => {
        const result = channel(remixProject[12]).closeConjureAppChannelSheet();
        closure_1_0();
      };
    }
    return fn;
  }, items7);
  const devicePermissions = appChannelAppActions.devicePermissions;
  closure_132_0 = devicePermissions;
  const items8 = [devicePermissions];
  const memo3 = noop.useMemo(() => {
    let fn = null;
    if (null != channel) {
      fn = () => {
        const result = channel(remixProject[12]).closeConjureAppChannelSheet();
        closure_1_0();
      };
    }
    return fn;
  }, items8);
  const report = appChannelAppActions.report;
  closure_133_0 = report;
  const items9 = [report];
  const memo4 = noop.useMemo(() => {
    let fn = null;
    if (null != channel) {
      fn = () => {
        const result = channel(remixProject[12]).closeConjureAppChannelSheet();
        closure_1_0();
      };
    }
    return fn;
  }, items9);
  const items10 = [guild_id, remixProject];
  const items11 = [tmp7];
  const callback = noop.useCallback(() => {
    let tmp2 = null != remixProject;
    if (tmp2) {
      tmp2 = null != guild_id;
    }
    if (tmp2) {
      const result = openConjureAppChannelSheet.closeConjureAppChannelSheet();
      const obj3 = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: null };
      const obj4 = {
        project: remixProject,
        currentGuildId: guild_id,
        onRemixed(arg0) {
          return guild_id(remixProject[20])(arg0);
        },
      };
      obj3.content = closure_2_10(ConjureRemixSheetDefault, obj4);
      ActionSheetActionCreators.showActionSheet(obj3);
    }
  }, items10);
  const items12 = [canManageChannel, channel.id];
  const callback1 = noop.useCallback(() => {
    if (null != closure_3) {
      const result = openConjureAppChannelSheet.closeConjureAppChannelSheet();
      openConjureHomeScreenDefault(tmp.id);
    }
  }, items11);
  const items13 = [channel.id];
  const callback2 = noop.useCallback(() => {
    const result = openConjureAppChannelSheet.closeConjureAppChannelSheet();
    ChannelSettingsActionCreatorsDefault.setSection(canManageChannel ? React5.OVERVIEW : React5.NOTIFICATIONS);
    ChannelSettingsActionCreatorsDefault.open(channel.id);
    const tmp3Result = ChannelSettingsActionCreatorsDefault;
  }, items12);
  const items14 = [channel];
  const callback3 = noop.useCallback(() => {
    const result = openConjureAppChannelSheet.closeConjureAppChannelSheet();
    const result1 = openConjureAppChannelSheet.openConjureAppChannelMembersSheet(channel.id);
  }, items13);
  const callback4 = noop.useCallback(() => {
    const result = openConjureAppChannelSheet.closeConjureAppChannelSheet();
    const result1 = instant_invite_InstantInviteUtils.showInstantInviteActionSheet(channel, {
      source: constants.CONTEXT_MENU,
    });
  }, items14);
  const children = [closure_10(ConjureAppChannelSheetHeader, { channel }), , , ,];
  if (null != memo) {
    let tmp24Result = null;
    if (null != memo) {
      const obj6 = { onPress: memo, icon: null, label: null };
      const obj7 = { IconComponent: tmp2(tmp3[26]).RefreshIcon };
      obj6.icon = closure_10(tmp2(tmp3[25]).TableRowIcon, obj7);
      const intl = tmp2(tmp3[27]).intl;
      obj6.label = intl.string(tmp2(tmp3[27]).t.kHie4V);
      tmp24Result = closure_10(tmp2(tmp3[24]).TableRow, obj6);
    }
    const items16 = [tmp24Result];
    let tmp24Result8 = null;
    if (null != memo1) {
      const obj8 = { onPress: memo1, icon: null, label: null };
      const obj9 = { IconComponent: tmp2(tmp3[28]).DoorExitIcon };
      obj8.icon = closure_10(tmp2(tmp3[25]).TableRowIcon, obj9);
      const intl2 = tmp2(tmp3[27]).intl;
      obj8.label = intl2.string(tmp2(tmp3[27]).t.VkMnR2);
      tmp24Result8 = closure_10(tmp2(tmp3[24]).TableRow, obj8);
    }
    const obj10 = { hasIcons: true, children: null };
    items16[1] = tmp24Result8;
    obj10.children = items16;
    let tmp22Result = closure_11(tmp2(tmp3[23]).TableRowGroup, obj10);
  } else {
    tmp22Result = null;
  }
  children[1] = tmp22Result;
  let tmp24Result9 = null;
  if (isConjureMobileEnabled) {
    tmp24Result9 = null;
    if (null != remixProject) {
      tmp24Result9 = null;
      if (null != guild_id) {
        const obj11 = { onPress: callback, icon: null, label: null };
        const obj12 = { IconComponent: tmp2(tmp3[29]).RemixIcon };
        obj11.icon = closure_10(tmp2(tmp3[25]).TableRowIcon, obj12);
        const intl3 = tmp2(tmp3[27]).intl;
        obj11.label = intl3.string(tmp5(tmp3[30]).KMwCb7);
        tmp24Result9 = closure_10(tmp2(tmp3[24]).TableRow, obj11);
      }
    }
  }
  const items17 = [tmp24Result9, , , ,];
  let tmp24Result10 = null;
  if (isConjureMobileEnabled1) {
    tmp24Result10 = null;
    if (null != tmp7) {
      tmp24Result10 = null;
      if (null != guild_id) {
        const obj13 = { onPress: callback1, icon: null, label: null, trailing: null };
        const obj14 = { IconComponent: tmp2(tmp3[31]).PencilIcon };
        obj13.icon = closure_10(tmp2(tmp3[25]).TableRowIcon, obj14);
        const intl4 = tmp2(tmp3[27]).intl;
        obj13.label = intl4.string(tmp5(tmp3[30]).jMMrDM);
        obj13.trailing = closure_10(tmp2(tmp3[32]).TableRowArrow, {});
        tmp24Result10 = closure_10(tmp2(tmp3[24]).TableRow, obj13);
      }
    }
  }
  items17[1] = tmp24Result10;
  let tmp24Result11 = null;
  if (null != memo2) {
    const obj15 = { onPress: memo2, icon: null, label: null };
    const obj16 = { IconComponent: tmp2(tmp3[33]).CircleInformationIcon };
    obj15.icon = closure_10(tmp2(tmp3[25]).TableRowIcon, obj16);
    const intl5 = tmp2(tmp3[27]).intl;
    obj15.label = intl5.string(tmp2(tmp3[27]).t.Sh2z9g);
    tmp24Result11 = closure_10(tmp2(tmp3[24]).TableRow, obj15);
  }
  items17[2] = tmp24Result11;
  const obj17 = { onPress: callback2, icon: null, label: null, trailing: null };
  if (canManageChannel) {
    let ChannelNotificationIcon = tmp2(tmp3[34]).SettingsIcon;
  } else {
    ChannelNotificationIcon = tmp2(tmp3[35]).ChannelNotificationIcon;
  }
  obj17.icon = closure_10(tmp2(tmp3[25]).TableRowIcon, { IconComponent: ChannelNotificationIcon });
  const intl6 = tmp2(tmp3[27]).intl;
  const t = tmp2(tmp3[27]).t;
  obj17.label = intl6.string(canManageChannel ? t.XPDhcc : t.h850Ss);
  obj17.trailing = closure_10(tmp2(tmp3[32]).TableRowArrow, {});
  items17[3] = closure_10(tmp2(tmp3[24]).TableRow, obj17);
  let tmp24Result12 = null;
  if (null != memo3) {
    const obj18 = { onPress: memo3, icon: null, label: null, trailing: null };
    const obj19 = { IconComponent: tmp2(tmp3[36]).ShieldIcon };
    obj18.icon = closure_10(tmp2(tmp3[25]).TableRowIcon, obj19);
    const intl7 = tmp2(tmp3[27]).intl;
    obj18.label = intl7.string(tmp5(tmp3[30]).wum6n2);
    obj18.trailing = closure_10(tmp2(tmp3[32]).TableRowArrow, {});
    tmp24Result12 = closure_10(tmp2(tmp3[24]).TableRow, obj18);
  }
  items17[4] = tmp24Result12;
  children[2] = closure_11(tmp2(tmp3[23]).TableRowGroup, { hasIcons: true, children: items17 });
  const obj20 = { onPress: callback3, icon: null, label: null, trailing: null };
  const obj5 = channel(remixProject[17]);
  obj20.icon = closure_10(tmp2(tmp3[25]).TableRowIcon, { IconComponent: tmp2(tmp3[37]).GroupIcon });
  if (null != stateFromStores) {
    const intl9 = tmp2(tmp3[27]).intl;
    const obj22 = { count: stateFromStores };
    let formatToPlainStringResult = intl9.formatToPlainString(tmp2(tmp3[27]).t.AWmdd9, obj22);
  } else {
    const intl8 = tmp2(tmp3[27]).intl;
    formatToPlainStringResult = intl8.string(tmp2(tmp3[27]).t.x87QCk);
  }
  obj20.label = formatToPlainStringResult;
  obj20.trailing = closure_10(tmp2(tmp3[32]).TableRowArrow, {});
  const items18 = [closure_10(tmp2(tmp3[24]).TableRow, obj20)];
  let tmp24Result13 = null;
  if (stateFromStoresObject.canInvite) {
    const obj23 = { onPress: callback4, icon: null, label: null, trailing: null };
    const obj24 = { IconComponent: tmp2(tmp3[38]).GroupPlusIcon };
    obj23.icon = closure_10(tmp2(tmp3[25]).TableRowIcon, obj24);
    const intl10 = tmp2(tmp3[27]).intl;
    obj23.label = intl10.string(tmp2(tmp3[27]).t["f1+QIK"]);
    obj23.trailing = closure_10(tmp2(tmp3[32]).TableRowArrow, {});
    tmp24Result13 = closure_10(tmp2(tmp3[24]).TableRow, obj23);
  }
  items18[1] = tmp24Result13;
  children[3] = closure_11(tmp2(tmp3[23]).TableRowGroup, { hasIcons: true, children: items18 });
  let tmp24Result14 = null;
  if (null != memo4) {
    const obj25 = { hasIcons: true, children: null };
    const obj26 = { onPress: memo4, variant: "danger", icon: null, label: null };
    const obj27 = { IconComponent: tmp2(tmp3[39]).FlagIcon, variant: "danger" };
    obj26.icon = closure_10(tmp2(tmp3[25]).TableRowIcon, obj27);
    const intl11 = tmp2(tmp3[27]).intl;
    obj26.label = intl11.string(tmp2(tmp3[27]).t.NgA5vp);
    obj25.children = closure_10(tmp2(tmp3[24]).TableRow, obj26);
    tmp24Result14 = closure_10(tmp2(tmp3[23]).TableRowGroup, obj25);
  }
  children[4] = tmp24Result14;
  return closure_11(closure_12, { children });
}
const Constants = fn(1072);
({ ChannelSettingsSections: closure_7, InstantInviteSources: closure_8, Permissions: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(5009);
let obj = {
  content: { paddingTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 },
  centered: { textAlign: "center" },
};
let closure_13 = createStyles.createStyles(obj);
let obj3 = { paddingTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/app_channel/native/ConjureAppChannelSheet.tsx");

export default noop.memo(function ConjureAppChannelSheet(channelId) {
  channelId = channelId.channelId;
  const tmp = closure_13();
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const items2 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      const result = openConjureAppChannelSheet.closeConjureAppChannelSheet();
    }
  }, items2);
  let tmp6 = null;
  if (null != stateFromStores) {
    const obj2 = { startExpanded: true, scrollable: true, children: null };
    const obj3 = { children: null };
    const obj4 = { bottom: true, style: tmp.content, children: null };
    const obj5 = { spacing: stateFromStores(575).space.PX_24, children: null };
    const obj6 = { channel: stateFromStores };
    obj5.children = closure_10(ConjureAppChannelSheetContent, obj6);
    obj4.children = closure_10(tmp2(6022).Stack, obj5);
    obj3.children = closure_10(tmp2(7286).SafeAreaPaddingView, obj4);
    obj2.children = closure_10(tmp2(5270).BottomSheetScrollView, obj3);
    tmp6 = closure_10(tmp2(5267).BottomSheet, obj2);
  }
  return tmp6;
});
