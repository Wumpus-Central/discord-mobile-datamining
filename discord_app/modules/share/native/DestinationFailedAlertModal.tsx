// === Module 11346: DestinationFailedAlertModal ===

// Module 11346 (DestinationFailedAlertModal)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import Text_Text from "Text/Text" /* 4892 */;
import useChannelNameDefault from "useChannelName" /* 5049 */;
import AlertModal2 from "AlertModal" /* 5720 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10661 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import PresenceStore from "PresenceStore" /* 4936 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let closure_12;
let obj2;
let obj3;
let unpackModuleId;
const View = react_native.View;
const StatusTypes = Constants.StatusTypes;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, row: obj3, label: { flexShrink: 1 } };
obj2 = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG, borderRadius: nativeDefault.radii.lg, paddingVertical: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, height: 40, marginHorizontal: nativeDefault.space.PX_16 };
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let items;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(9);
  channel = channel.channel;
  const tmp4 = closure_13();
  const tmp6 = useChannelNameDefault(channel);
  if (cResult[0] !== channel) {
    const obj2 = { size: native.AvatarSizes.REFRESH_MEDIUM_32, channel };
    const tmp5Result = GroupDMAvatarDefault;
    const tmp10 = authStore(tmp5Result, obj2);
    cResult[0] = channel;
    cResult[1] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === tmp6) {
    let tmp11;
    if (cResult[3] === tmp4.label) {
      tmp11 = cResult[4];
    }
    if (cResult[5] === tmp4.row) {
      if (cResult[6] === tmp7) {
        let tmp13;
        if (cResult[7] === tmp11) {
          tmp13 = cResult[8];
        }
        return tmp13;
      }
    }
    const obj3 = { style: tmp4.row, children: items };
    items = [tmp7, tmp11];
    const tmp16 = unpackModuleId(View, obj3);
    cResult[5] = tmp4.row;
    cResult[6] = tmp7;
    cResult[7] = tmp11;
    cResult[8] = tmp16;
    tmp13 = tmp16;
  }
  const obj4 = { style: tmp4.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: tmp6 };
  const tmp12 = authStore(Text_Text.Text, obj4);
  cResult[2] = tmp6;
  cResult[3] = tmp4.label;
  cResult[4] = tmp12;
  tmp11 = tmp12;
}) : ((channel) => {
  let items;
  channel = channel.channel;
  const tmp = closure_13();
  const obj = { style: tmp.row, children: items };
  const obj2 = { size: native.AvatarSizes.REFRESH_MEDIUM_32, channel };
  const tmp2 = useChannelNameDefault(channel);
  const tmp3 = GroupDMAvatarDefault;
  items = [authStore(tmp3, obj2), ];
  const obj3 = { style: tmp.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: tmp2 };
  items[1] = authStore(Text_Text.Text, obj3);
  return unpackModuleId(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let first;
  let isMobileOnline;
  let isVROnline;
  let name;
  let status;
  let tmp7;
  let tmp9;
  let obj = user(576);
  const cResult = obj.c(13);
  user = user.user;
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function c() {
      return RelationshipStore.getNickname(user.id);
    };
    cResult[1] = user.id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = user(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PresenceStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== user.id) {
    class A {
      constructor() {
        const obj = { isMobileOnline: PresenceStore.isMobileOnline(user.id), status: PresenceStore.getStatus(user.id), isVROnline: PresenceStore.isVROnline(user.id) };
        return obj;
      }
    }
    cResult[4] = user.id;
    cResult[5] = A;
  } else {
    class A {
      constructor() {
        const obj = { isMobileOnline: PresenceStore.isMobileOnline(user.id), status: PresenceStore.getStatus(user.id), isVROnline: PresenceStore.isVROnline(user.id) };
        return obj;
      }
    }
  }
  const tmpResult2 = user(504);
  const stateFromStoresObject = tmpResult2.useStateFromStoresObject(tmp9, A);
  ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
  if (cResult[6] === isMobileOnline) {
    class A {
      constructor() {
        const obj = { isMobileOnline: PresenceStore.isMobileOnline(user.id), status: PresenceStore.getStatus(user.id), isVROnline: PresenceStore.isVROnline(user.id) };
        return obj;
      }
    }
  }
  let tmp14Result = null;
  if (null != user) {
    class A {
      constructor() {
        const obj = { isMobileOnline: PresenceStore.isMobileOnline(user.id), status: PresenceStore.getStatus(user.id), isVROnline: PresenceStore.isVROnline(user.id) };
        return obj;
      }
    }
    tmp16[0] = tmp4.row;
    const obj2 = { user, guildId: "Boolean", status: null, isMobileOnline, isVROnline, size: user(1188).AvatarSizes.XSMALL, avatarDecoration: user.avatarDecoration, autoStatusCutout: null };
    const Avatar = tmp(1188).Avatar;
    if (StatusTypes.OFFLINE !== status) {
      class A {
        constructor() {
          const obj = { isMobileOnline: PresenceStore.isMobileOnline(user.id), status: PresenceStore.getStatus(user.id), isVROnline: PresenceStore.isVROnline(user.id) };
          return obj;
        }
      }
    }
    const items2 = [closure_10(Avatar, obj2), ];
    const obj3 = { style: tmp4.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: name };
    name = stateFromStores;
    const Text = tmp(4892).Text;
    if (stateFromStores == null) {
      class A {
        constructor() {
          const obj = { isMobileOnline: PresenceStore.isMobileOnline(user.id), status: PresenceStore.getStatus(user.id), isVROnline: PresenceStore.isVROnline(user.id) };
          return obj;
        }
      }
      const obj6 = UserUtilsDefault;
      name = obj6.getName(user);
    }
    items2[1] = closure_10(Text, obj3);
    tmp16[1] = items2;
    tmp14Result = closure_11(View, tmp16);
  }
  cResult[6] = isMobileOnline;
  cResult[7] = isVROnline;
  cResult[8] = stateFromStores;
  cResult[9] = status;
  cResult[10] = tmp4;
  cResult[11] = user;
  cResult[12] = tmp14Result;
}) : ((user) => {
  let items2;
  let tmp13;
  user = user.user;
  const tmp = closure_13();
  let obj = user(504);
  const items = [RelationshipStore];
  let stateFromStores = obj.useStateFromStores(items, () => RelationshipStore.getNickname(user.id));
  const items1 = [PresenceStore];
  const obj2 = user(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const obj = { isMobileOnline: PresenceStore.isMobileOnline(user.id), status: PresenceStore.getStatus(user.id), isVROnline: PresenceStore.isVROnline(user.id) };
    return obj;
  });
  const status = stateFromStoresObject.status;
  let tmp9Result = null;
  if (null != user) {
    const obj3 = { style: tmp.row, children: items2 };
    const obj4 = { user, guildId: "Boolean", status: tmp13, isMobileOnline: tmp6, isVROnline: tmp7, size: user(1188).AvatarSizes.XSMALL, avatarDecoration: user.avatarDecoration, autoStatusCutout: null };
    tmp13 = null;
    const Avatar = tmp2(1188).Avatar;
    if (StatusTypes.OFFLINE !== status) {
      tmp13 = status;
    }
    items2 = [closure_10(Avatar, obj4), ];
    const obj5 = { style: tmp.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: stateFromStores };
    const Text = tmp2(4892).Text;
    if (stateFromStores == null) {
      const obj6 = UserUtilsDefault;
      stateFromStores = obj6.getName(user);
    }
    items2[1] = closure_10(Text, obj5);
    tmp9Result = closure_11(View, obj3);
  }
  return tmp9Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  let items1;
  let tmp9;
  const obj = channel(576);
  const cResult = obj.c(13);
  channel = channel.channel;
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  let guild_id;
  const tmp7 = cResult[1];
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  if (tmp7 !== guild_id) {
    let guild_id1;
    if (channel != null) {
      guild_id1 = channel.guild_id;
    }
    const fn = function s() {
      let guild_id;
      const getGuild = GuildStore.getGuild;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      return getGuild(guild_id);
    };
    cResult[1] = guild_id1;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult = channel(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp9);
  const tmp12 = useChannelNameDefault(channel);
  if (cResult[3] === channel) {
    let tmp13;
    if (cResult[4] === stateFromStores) {
      tmp13 = cResult[5];
    }
    if (cResult[6] === tmp12) {
      let tmp15;
      if (cResult[7] === tmp4.label) {
        tmp15 = cResult[8];
      }
      if (cResult[9] === tmp4.row) {
        if (cResult[10] === tmp13) {
          let tmp18;
          if (cResult[11] === tmp15) {
            tmp18 = cResult[12];
          }
          return tmp18;
        }
      }
      const obj2 = { style: tmp4.row, children: items1 };
      items1 = [tmp13, tmp15];
      const tmp21 = closure_11(View, obj2);
      cResult[9] = tmp4.row;
      cResult[10] = tmp13;
      cResult[11] = tmp15;
      cResult[12] = tmp21;
      tmp18 = tmp21;
    }
    const obj3 = { style: tmp4.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: tmp12 };
    const tmp17 = closure_10(channel(4892).Text, obj3);
    cResult[6] = tmp12;
    cResult[7] = tmp4.label;
    cResult[8] = tmp17;
    tmp15 = tmp17;
  }
  const obj4 = { "aria-label": "", guild: stateFromStores, channel, size: channel(10751).GuildIconWithChannelTypeSizes.SMALL_32 };
  const GuildIconWithChannelType = tmp(10751).GuildIconWithChannelType;
  const tmp14 = closure_10(GuildIconWithChannelType, obj4);
  cResult[3] = channel;
  cResult[4] = stateFromStores;
  cResult[5] = tmp14;
  tmp13 = tmp14;
}) : ((channel) => {
  let items1;
  channel = channel.channel;
  const tmp = closure_13();
  const items = [GuildStore];
  const obj = channel(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild_id;
    const getGuild = GuildStore.getGuild;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return getGuild(guild_id);
  });
  const obj2 = { style: tmp.row, children: items1 };
  const obj3 = { "aria-label": "", guild: stateFromStores, channel, size: channel(10751).GuildIconWithChannelTypeSizes.SMALL_32 };
  const tmp3 = useChannelNameDefault(channel);
  const GuildIconWithChannelType = channel(10751).GuildIconWithChannelType;
  items1 = [closure_10(GuildIconWithChannelType, obj3), ];
  const obj4 = { style: tmp.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: tmp3 };
  items1[1] = closure_10(channel(4892).Text, obj4);
  return closure_11(View, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((destination) => {
  let channel;
  let first;
  let user;
  let obj = destination(576);
  const cResult = obj.c(10);
  const tmp = destination;
  destination = destination.destination;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === destination.id) {
    let tmp7;
    let tmp11;
    if (cResult[2] === destination.type) {
      tmp7 = cResult[3];
    }
    const tmpResult = tmp(504);
    const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp7);
    ({ channel, user } = stateFromStoresObject);
    let isGroupDMResult;
    if (channel != null) {
      isGroupDMResult = channel.isGroupDM();
    }
    if (isGroupDMResult) {
      let tmp20;
      if (cResult[4] !== channel) {
        const obj2 = { channel };
        const tmp23 = closure_10(closure_14, obj2);
        cResult[4] = channel;
        cResult[5] = tmp23;
        tmp20 = tmp23;
      } else {
        tmp20 = cResult[5];
      }
      tmp11 = tmp20;
    } else if (null != user) {
      let tmp16;
      if (cResult[6] !== user) {
        const obj3 = { user };
        const tmp19 = closure_10(closure_15, obj3);
        cResult[6] = user;
        cResult[7] = tmp19;
        tmp16 = tmp19;
      } else {
        tmp16 = cResult[7];
      }
      tmp11 = tmp16;
    } else {
      tmp11 = null;
      if (null != channel) {
        let tmp12;
        if (cResult[8] !== channel) {
          const obj4 = { channel };
          const tmp15 = closure_10(closure_16, obj4);
          cResult[8] = channel;
          cResult[9] = tmp15;
          tmp12 = tmp15;
        } else {
          tmp12 = cResult[9];
        }
        tmp11 = tmp12;
      }
    }
    return tmp11;
  }
  const fn = function o() {
    let user;
    let channel = null;
    if ("channel" === destination.type) {
      channel = ChannelStore.getChannel(destination.id);
    }
    const obj = { channel, user };
    user = null;
    if ("user" === destination.type) {
      user = UserStore.getUser(destination.id);
    }
    return obj;
  };
  cResult[1] = destination.id;
  cResult[2] = destination.type;
  cResult[3] = fn;
  tmp7 = fn;
}) : ((destination) => {
  let channel;
  let tmp3;
  let user;
  destination = destination.destination;
  let obj = destination(504);
  const items = [ChannelStore, UserStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let user;
    let channel = null;
    if ("channel" === destination.type) {
      channel = ChannelStore.getChannel(destination.id);
    }
    const obj = { channel, user };
    user = null;
    if ("user" === destination.type) {
      user = UserStore.getUser(destination.id);
    }
    return obj;
  });
  ({ channel, user } = stateFromStoresObject);
  let isGroupDMResult;
  if (channel != null) {
    isGroupDMResult = channel.isGroupDM();
  }
  if (isGroupDMResult) {
    const obj2 = { channel };
    tmp3 = closure_10(closure_14, obj2);
  } else if (null != user) {
    const obj3 = { user };
    tmp3 = closure_10(closure_15, obj3);
  } else {
    tmp3 = null;
    if (null != channel) {
      const obj4 = { channel };
      tmp3 = closure_10(closure_16, obj4);
    }
  }
  return tmp3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let content;
  let failedDestinations;
  let intl;
  let intl2;
  let intl3;
  let items;
  let onRetry;
  let title;
  let tmp5;
  let obj = react2;
  const cResult = obj.c(13);
  ({ title, content, failedDestinations, onRetry } = arg0);
  const tmp4 = closure_13();
  const container = tmp4.container;
  if (cResult[0] !== failedDestinations) {
    let tmp7;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function o(destination, arg1) {
        const obj = { destination };
        return closure_1_10(closure_1_17, obj, arg1);
      };
      cResult[2] = fn;
      tmp7 = fn;
    } else {
      tmp7 = cResult[2];
    }
    const mapped = failedDestinations.map(tmp7);
    cResult[0] = failedDestinations;
    cResult[1] = mapped;
    tmp5 = mapped;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[3] === tmp4.container) {
    let tmp9;
    let tmp11;
    if (cResult[4] === tmp5) {
      tmp9 = cResult[5];
    }
    if (cResult[6] !== onRetry) {
      let tmp12Result;
      const AlertActions = AlertModal2.AlertActions;
      if (null != onRetry) {
        const obj2 = { children: items };
        const obj3 = { variant: "primary", onPress: onRetry, text: intl2.string(intl4.t["5911Lb"]) };
        const AlertActionButton2 = AlertModal2.AlertActionButton;
        intl2 = intl4.intl;
        items = [authStore(AlertActionButton2, obj3, "confirm"), ];
        const obj4 = { variant: "secondary", text: intl3.string(intl4.t.WAI6xu) };
        const AlertActionButton3 = AlertModal2.AlertActionButton;
        intl3 = intl4.intl;
        items[1] = authStore(AlertActionButton3, obj4, "cancel");
        tmp12Result = unpackModuleId(closure_12, obj2);
      } else {
        const obj5 = { variant: "primary", text: intl.string(intl4.t.BddRzS) };
        const AlertActionButton = AlertModal2.AlertActionButton;
        intl = intl4.intl;
        tmp12Result = authStore(AlertActionButton, obj5, "confirm");
      }
      const obj6 = { children: tmp12Result };
      const tmp12Result2 = authStore(AlertActions, obj6);
      cResult[6] = onRetry;
      cResult[7] = tmp12Result2;
      tmp11 = tmp12Result2;
    } else {
      tmp11 = cResult[7];
    }
    if (cResult[8] === content) {
      if (cResult[9] === tmp9) {
        if (cResult[10] === tmp11) {
          let tmp18;
          if (cResult[11] === title) {
            tmp18 = cResult[12];
          }
          return tmp18;
        }
      }
    }
    const obj7 = { title, content, extraContent: tmp9, actions: tmp11 };
    const tmp20 = authStore(AlertModal2.AlertModal, obj7);
    cResult[8] = content;
    cResult[9] = tmp9;
    cResult[10] = tmp11;
    cResult[11] = title;
    cResult[12] = tmp20;
    tmp18 = tmp20;
  }
  const tmp10 = authStore(View, { style: container, children: tmp5 });
  cResult[3] = tmp4.container;
  cResult[4] = tmp5;
  cResult[5] = tmp10;
  tmp9 = tmp10;
}) : ((arg0) => {
  let AlertActions;
  let content;
  let failedDestinations;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj2;
  let onRetry;
  let title;
  let tmp2Result;
  ({ failedDestinations, onRetry } = arg0);
  ({ title, content } = arg0);
  let obj = { title, content, extraContent: authStore(View, obj2), actions: authStore(AlertActions, { children: tmp2Result }) };
  obj2 = {
    style: closure_13().container,
    children: failedDestinations.map((destination, index) => {
      const obj = { destination };
      return closure_1_10(closure_1_17, obj, index);
    })
  };
  const AlertModal = AlertModal2.AlertModal;
  AlertActions = AlertModal2.AlertActions;
  if (null != onRetry) {
    const obj3 = { children: items };
    const obj4 = { variant: "primary", onPress: onRetry, text: intl2.string(intl4.t["5911Lb"]) };
    const AlertActionButton2 = AlertModal2.AlertActionButton;
    intl2 = intl4.intl;
    items = [authStore(AlertActionButton2, obj4, "confirm"), ];
    const obj5 = { variant: "secondary", text: intl3.string(intl4.t.WAI6xu) };
    const AlertActionButton3 = AlertModal2.AlertActionButton;
    intl3 = intl4.intl;
    items[1] = authStore(AlertActionButton3, obj5, "cancel");
    tmp2Result = unpackModuleId(closure_12, obj3);
  } else {
    const obj6 = { variant: "primary", text: intl.string(intl4.t.BddRzS) };
    const AlertActionButton = AlertModal2.AlertActionButton;
    intl = intl4.intl;
    tmp2Result = authStore(AlertActionButton, obj6, "confirm");
  }
  return authStore(AlertModal, obj);
});
const result = size.fileFinishedImporting("modules/share/native/DestinationFailedAlertModal.tsx");

export default tmp5;