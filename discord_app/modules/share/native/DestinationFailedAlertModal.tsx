// === Module 11594: DestinationFailedAlertModal ===

// Module 11594 (DestinationFailedAlertModal)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import UserUtilsDefault from "UserUtils" /* 4962 */;
import Text_Text from "Text/Text" /* 5088 */;
import AlertModal from "AlertModal" /* 5305 */;
import useChannelNameDefault from "useChannelName" /* 5421 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10279 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildStore from "GuildStore" /* 2087 */;
import PresenceStore from "PresenceStore" /* 5108 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const View = fn(17).View;
const StatusTypes = fn(1096).StatusTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG, borderRadius: nativeDefault.radii.lg, paddingVertical: nativeDefault.space.PX_8 }, row: null, label: null };
let obj3 = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG, borderRadius: nativeDefault.radii.lg, paddingVertical: nativeDefault.space.PX_8 };
obj2.row = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, height: 40, marginHorizontal: nativeDefault.space.PX_16 };
obj2.label = { flexShrink: 1 };
let closure_13 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function FailedGroupDMRow(channel) {
  const cResult = c.c(9);
  channel = channel.channel;
  const tmp4 = closure_13();
  const tmp6 = useChannelNameDefault(channel);
  if (cResult[0] !== channel) {
    const obj2 = { size: native.AvatarSizes.REFRESH_MEDIUM_32, channel };
    const tmp10 = collapsed(GroupDMAvatarDefault, obj2);
    cResult[0] = channel;
    cResult[1] = tmp10;
    let tmp7 = tmp10;
    const tmp5Result = GroupDMAvatarDefault;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === tmp6) {
    if (cResult[3] === tmp4.label) {
      let tmp11 = cResult[4];
    }
    if (cResult[5] === tmp4.row) {
      if (cResult[6] === tmp7) {
        if (cResult[7] === tmp11) {
          let tmp13 = cResult[8];
        }
        return tmp13;
      }
    }
    const obj3 = { style: tmp4.row, children: null };
    const items = [tmp7, tmp11];
    obj3.children = items;
    const tmp16 = closure_1_11(View, obj3);
    cResult[5] = tmp4.row;
    cResult[6] = tmp7;
    cResult[7] = tmp11;
    cResult[8] = tmp16;
    tmp13 = tmp16;
  }
  const tmp12 = collapsed(Text_Text.Text, { style: tmp4.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: tmp6 });
  cResult[2] = tmp6;
  cResult[3] = tmp4.label;
  cResult[4] = tmp12;
  tmp11 = tmp12;
  const obj4 = { style: tmp4.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: tmp6 };
}) : (function FailedGroupDMRow(channel) {
  channel = channel.channel;
  const tmp = closure_13();
  const obj = { style: tmp.row, children: null };
  const obj2 = { size: null, channel: null };
  const tmp2 = useChannelNameDefault(channel);
  obj2.size = native.AvatarSizes.REFRESH_MEDIUM_32;
  obj2.channel = channel;
  const items = [collapsed(GroupDMAvatarDefault, obj2), collapsed(Text_Text.Text, { style: tmp.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: tmp2 })];
  obj.children = items;
  return closure_1_11(View, obj);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function FailedUserRow(user) {
  const cResult = user(576).c(13);
  user = user.user;
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function c() {
      return RelationshipStore.getNickname(user.id);
    };
    cResult[1] = user.id;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = user(576);
  const stateFromStores = user(504).useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PresenceStore];
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== user.id) {
    class A {
      constructor() {
        obj = { isMobileOnline: closure_6.isMobileOnline(user.id), status: closure_6.getStatus(user.id), isVROnline: closure_6.isVROnline(user.id) };
        return obj;
      }
    }
    cResult[4] = user.id;
    cResult[5] = A;
  } else {
    class A {
      constructor() {
        obj = { isMobileOnline: closure_6.isMobileOnline(user.id), status: closure_6.getStatus(user.id), isVROnline: closure_6.isVROnline(user.id) };
        return obj;
      }
    }
  }
  const tmpResult = user(504);
  const stateFromStoresObject = user(504).useStateFromStoresObject(tmp9, A);
  ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
  if (cResult[6] === isMobileOnline) {
    class A {
      constructor() {
        obj = { isMobileOnline: closure_6.isMobileOnline(user.id), status: closure_6.getStatus(user.id), isVROnline: closure_6.isVROnline(user.id) };
        return obj;
      }
    }
  }
  let tmp14Result = null;
  if (null != user) {
    class A {
      constructor() {
        obj = { isMobileOnline: closure_6.isMobileOnline(user.id), status: closure_6.getStatus(user.id), isVROnline: closure_6.isVROnline(user.id) };
        return obj;
      }
    }
    tmp16[0] = tmp4.row;
    const obj2 = { user, guildId: "Boolean", status: true, isMobileOnline: null, isVROnline: null, size: null, avatarDecoration: null, autoStatusCutout: null };
    if (StatusTypes.OFFLINE !== status) {
      class A {
        constructor() {
          obj = { isMobileOnline: closure_6.isMobileOnline(user.id), status: closure_6.getStatus(user.id), isVROnline: closure_6.isVROnline(user.id) };
          return obj;
        }
      }
    }
    obj2.status = null;
    obj2.isMobileOnline = isMobileOnline;
    obj2.isVROnline = isVROnline;
    obj2.size = tmp(1200).AvatarSizes.XSMALL;
    obj2.avatarDecoration = user.avatarDecoration;
    const items2 = [closure_10(tmp(1200).Avatar, obj2), ];
    const obj3 = { style: tmp4.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: null };
    let name = stateFromStores;
    if (stateFromStores == null) {
      class A {
        constructor() {
          obj = { isMobileOnline: closure_6.isMobileOnline(user.id), status: closure_6.getStatus(user.id), isVROnline: closure_6.isVROnline(user.id) };
          return obj;
        }
      }
      name = UserUtilsDefault.getName(user);
    }
    obj3.children = name;
    items2[1] = closure_10(tmp(5088).Text, obj3);
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
  const tmpResult2 = user(504);
}) : (function FailedUserRow(user) {
  user = user.user;
  const tmp = closure_13();
  const items = [RelationshipStore];
  let stateFromStores = user(504).useStateFromStores(items, () => RelationshipStore.getNickname(user.id));
  const obj = user(504);
  const items1 = [PresenceStore];
  const stateFromStoresObject = user(504).useStateFromStoresObject(items1, () => ({ isMobileOnline: PresenceStore.isMobileOnline(user.id), status: PresenceStore.getStatus(user.id), isVROnline: PresenceStore.isVROnline(user.id) }));
  const status = stateFromStoresObject.status;
  let tmp9Result = null;
  if (null != user) {
    const obj3 = { style: tmp.row, children: null };
    const obj4 = { user, guildId: "Boolean", status: true, isMobileOnline: null, isVROnline: null, size: null, avatarDecoration: null, autoStatusCutout: null };
    let tmp13 = null;
    if (StatusTypes.OFFLINE !== status) {
      tmp13 = status;
    }
    obj4.status = tmp13;
    obj4.isMobileOnline = tmp6;
    obj4.isVROnline = tmp7;
    obj4.size = tmp2(1200).AvatarSizes.XSMALL;
    obj4.avatarDecoration = user.avatarDecoration;
    const items2 = [closure_10(tmp2(1200).Avatar, obj4), ];
    const obj5 = { style: tmp.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: null };
    if (stateFromStores == null) {
      stateFromStores = UserUtilsDefault.getName(user);
    }
    obj5.children = stateFromStores;
    items2[1] = closure_10(tmp2(5088).Text, obj5);
    obj3.children = items2;
    tmp9Result = closure_11(View, obj3);
  }
  return tmp9Result;
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function FailedChannelRow(channel) {
  const cResult = channel(576).c(13);
  channel = channel.channel;
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  if (cResult[1] !== guild_id) {
    let guild_id1;
    if (channel != null) {
      guild_id1 = channel.guild_id;
    }
    const fn = function s() {
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      return GuildStore.getGuild(guild_id);
    };
    cResult[1] = guild_id1;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const obj = channel(576);
  const stateFromStores = channel(504).useStateFromStores(first, tmp8);
  const tmp11 = useChannelNameDefault(channel);
  if (cResult[3] === channel) {
    if (cResult[4] === stateFromStores) {
      let tmp12 = cResult[5];
    }
    if (cResult[6] === tmp11) {
      if (cResult[7] === tmp4.label) {
        let tmp14 = cResult[8];
      }
      if (cResult[9] === tmp4.row) {
        if (cResult[10] === tmp12) {
          if (cResult[11] === tmp14) {
            let tmp17 = cResult[12];
          }
          return tmp17;
        }
      }
      const obj2 = { style: tmp4.row, children: null };
      const items1 = [tmp12, tmp14];
      obj2.children = items1;
      const tmp20 = closure_11(View, obj2);
      cResult[9] = tmp4.row;
      cResult[10] = tmp12;
      cResult[11] = tmp14;
      cResult[12] = tmp20;
      tmp17 = tmp20;
    }
    const obj3 = { style: tmp4.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: tmp11 };
    const tmp16 = closure_10(tmp(5088).Text, obj3);
    cResult[6] = tmp11;
    cResult[7] = tmp4.label;
    cResult[8] = tmp16;
    tmp14 = tmp16;
  }
  const tmpResult = channel(504);
  const tmp13 = closure_10(channel(11595).GuildIconWithChannelType, { "aria-label": "", guild: stateFromStores, channel, size: channel(11595).GuildIconWithChannelTypeSizes.SMALL_32 });
  cResult[3] = channel;
  cResult[4] = stateFromStores;
  cResult[5] = tmp13;
  tmp12 = tmp13;
  const obj4 = { "aria-label": "", guild: stateFromStores, channel, size: channel(11595).GuildIconWithChannelTypeSizes.SMALL_32 };
}) : (function FailedChannelRow(channel) {
  channel = channel.channel;
  const tmp = closure_13();
  const items = [GuildStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return GuildStore.getGuild(guild_id);
  });
  const obj2 = { style: tmp.row, children: null };
  const obj = channel(504);
  const tmp3 = useChannelNameDefault(channel);
  const items1 = [closure_10(channel(11595).GuildIconWithChannelType, { "aria-label": "", guild: stateFromStores, channel, size: channel(11595).GuildIconWithChannelTypeSizes.SMALL_32 }), closure_10(channel(5088).Text, { style: tmp.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: tmp3 })];
  obj2.children = items1;
  return closure_11(View, obj2);
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function FailedDestinationRow(destination) {
  const cResult = destination(576).c(10);
  destination = destination.destination;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === destination.id) {
    if (cResult[2] === destination.type) {
      let tmp7 = cResult[3];
    }
    const stateFromStoresObject = tmp(504).useStateFromStoresObject(first, tmp7);
    ({ channel, user } = stateFromStoresObject);
    let isGroupDMResult;
    if (channel != null) {
      isGroupDMResult = channel.isGroupDM();
    }
    if (isGroupDMResult) {
      if (cResult[4] !== channel) {
        const obj2 = { channel };
        const tmp25 = closure_10(closure_14, obj2);
        cResult[4] = channel;
        cResult[5] = tmp25;
      }
    } else if (null != user) {
      if (cResult[6] !== user) {
        const obj3 = { user };
        const tmp20 = closure_10(closure_15, obj3);
        cResult[6] = user;
        cResult[7] = tmp20;
      }
    } else if (null == channel) {
      return null;
    } else if (cResult[8] !== channel) {
      const obj4 = { channel };
      const tmp15 = closure_10(closure_16, obj4);
      cResult[8] = channel;
      cResult[9] = tmp15;
    }
    const tmpResult = tmp(504);
  }
  const fn = function o() {
    let channel = null;
    if ("channel" === destination.type) {
      channel = ChannelStore.getChannel(destination.id);
    }
    const obj = { channel, user: null };
    let user = null;
    if ("user" === destination.type) {
      user = UserStore.getUser(destination.id);
    }
    obj.user = user;
    return obj;
  };
  cResult[1] = destination.id;
  cResult[2] = destination.type;
  cResult[3] = fn;
  tmp7 = fn;
  let obj = destination(576);
  tmp = destination;
}) : (function FailedDestinationRow(destination) {
  destination = destination.destination;
  const items = [ChannelStore, UserStore];
  const stateFromStoresObject = destination(504).useStateFromStoresObject(items, () => {
    let channel = null;
    if ("channel" === destination.type) {
      channel = ChannelStore.getChannel(destination.id);
    }
    const obj = { channel, user: null };
    let user = null;
    if ("user" === destination.type) {
      user = UserStore.getUser(destination.id);
    }
    obj.user = user;
    return obj;
  });
  ({ channel, user } = stateFromStoresObject);
  let isGroupDMResult;
  if (channel != null) {
    isGroupDMResult = channel.isGroupDM();
  }
  if (isGroupDMResult) {
    const obj2 = { channel };
    let tmp3 = closure_10(closure_14, obj2);
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
ReactCompilerGating = fn(558);
let obj4 = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, height: 40, marginHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/DestinationFailedAlertModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function DestinationFailedAlertModal(arg0) {
  const cResult = c.c(13);
  ({ title, content, failedDestinations, onRetry } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] !== failedDestinations) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function o(destination, arg1) {
        return closure_1_10(closure_1_17, { destination }, arg1);
      };
      cResult[2] = fn;
      let tmp8 = fn;
    } else {
      tmp8 = cResult[2];
    }
    const mapped = failedDestinations.map(tmp8);
    cResult[0] = failedDestinations;
    cResult[1] = mapped;
  } else {
    if (cResult[3] === tmp4.container) {
      if (cResult[4] === tmp6) {
        let tmp11 = cResult[5];
      }
      if (cResult[6] !== onRetry) {
        if (null != onRetry) {
          const obj2 = { children: null };
          const obj3 = { variant: "primary", onPress: onRetry, text: null };
          const intl2 = util.intl;
          obj3.text = intl2.string(util.t["5911Lb"]);
          const items = [collapsed(AlertModal.AlertActionButton, obj3, "confirm"), ];
          const obj4 = { variant: "secondary", text: null };
          const intl3 = util.intl;
          obj4.text = intl3.string(util.t.WAI6xu);
          items[1] = collapsed(AlertModal.AlertActionButton, obj4, "cancel");
          obj2.children = items;
          let tmp16Result = closure_1_11(__initData, obj2);
        } else {
          const obj5 = { variant: "primary", text: null };
          const intl = util.intl;
          obj5.text = intl.string(util.t.BddRzS);
          tmp16Result = collapsed(AlertModal.AlertActionButton, obj5, "confirm");
        }
        const obj6 = { children: tmp16Result };
        const tmp16Result2 = collapsed(AlertModal.AlertActions, obj6);
        cResult[6] = onRetry;
        cResult[7] = tmp16Result2;
      } else {
        if (cResult[8] === content) {
          if (cResult[9] === tmp11) {
            if (cResult[10] === tmp15) {
              if (cResult[11] === title) {
                let tmp23 = cResult[12];
              }
              return tmp23;
            }
          }
        }
        const obj7 = { title, content, extraContent: tmp11, actions: cResult[7] };
        const tmp25 = collapsed(AlertModal.AlertModal, obj7);
        cResult[8] = content;
        cResult[9] = tmp11;
        cResult[10] = cResult[7];
        cResult[11] = title;
        cResult[12] = tmp25;
        tmp23 = tmp25;
      }
    }
    const obj8 = { style: tmp5, children: cResult[1] };
    const tmp14 = collapsed(View, obj8);
    cResult[3] = tmp4.container;
    cResult[4] = cResult[1];
    cResult[5] = tmp14;
    tmp11 = tmp14;
  }
}) : (function DestinationFailedAlertModal(arg0) {
  ({ failedDestinations, onRetry } = arg0);
  ({ title, content } = arg0);
  const obj = { title, content, extraContent: null, actions: null };
  const tmp = closure_13();
  obj.extraContent = collapsed(View, { style: closure_13().container, children: failedDestinations.map((destination, index) => closure_1_10(closure_1_17, { destination }, index)) });
  if (null != onRetry) {
    const obj3 = { children: null };
    const obj4 = { variant: "primary", onPress: onRetry, text: null };
    const intl2 = util.intl;
    obj4.text = intl2.string(util.t["5911Lb"]);
    const items = [collapsed(AlertModal.AlertActionButton, obj4, "confirm"), ];
    const obj5 = { variant: "secondary", text: null };
    const intl3 = util.intl;
    obj5.text = intl3.string(util.t.WAI6xu);
    items[1] = collapsed(AlertModal.AlertActionButton, obj5, "cancel");
    obj3.children = items;
    let tmp2Result = closure_1_11(__initData, obj3);
  } else {
    const obj6 = { variant: "primary", text: null };
    const intl = util.intl;
    obj6.text = intl.string(util.t.BddRzS);
    tmp2Result = collapsed(AlertModal.AlertActionButton, obj6, "confirm");
  }
  obj.actions = collapsed(AlertModal.AlertActions, { children: tmp2Result });
  return collapsed(AlertModal.AlertModal, obj);
});