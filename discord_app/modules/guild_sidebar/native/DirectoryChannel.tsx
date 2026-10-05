// === Module 16134: DirectoryChannel ===

// Module 16134 (DirectoryChannel)
import nativeDefault from "native" /* 587 */;
import router_utils from "router_utils" /* 1112 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10651 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildChannelStore from "GuildChannelStore" /* 4507 */;

require = fn;
const UnreadSetting = fn(5072).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj = { container: { marginVertical: fn(11697).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md } };
let closure_8 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { marginVertical: fn(11697).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_sidebar/native/DirectoryChannel.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(576).c(20);
  guildId = guildId.guildId;
  let selected = guildId.selected;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, GuildChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function b() {
      const directoryChannelIds = GuildChannelStore.getDirectoryChannelIds(guildId);
      let channel = null;
      if (0 !== directoryChannelIds.length) {
        channel = ChannelStore.getChannel(directoryChannelIds[0]);
      }
      return channel;
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  let obj = guildId(576);
  const stateFromStores = guildId(573).useStateFromStores(first, tmp8);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  if (!selected) {
    selected = id === guildId.selectedChannelId;
  }
  if (cResult[3] === id) {
    if (cResult[4] === guildId) {
      let tmp11 = cResult[5];
    }
    if (cResult[6] !== id) {
      const fn2 = function f() {
        if (null != id) {
          const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(tmp);
        }
      };
      cResult[6] = id;
      cResult[7] = fn2;
      let tmp12 = fn2;
    } else {
      tmp12 = cResult[7];
    }
    if (null == stateFromStores) {
      return null;
    } else {
      if (cResult[8] !== stateFromStores) {
        const obj2 = { channel: stateFromStores };
        const tmp15 = id(9260)(obj2);
        cResult[8] = stateFromStores;
        cResult[9] = tmp15;
        let tmp13 = tmp15;
      } else {
        tmp13 = cResult[9];
      }
      if (cResult[10] !== selected) {
        const obj3 = { selected };
        cResult[10] = selected;
        cResult[11] = obj3;
        let tmp16 = obj3;
      } else {
        tmp16 = cResult[11];
      }
      if (cResult[12] === stateFromStores) {
        if (cResult[13] === tmp12) {
          if (cResult[14] === tmp11) {
            if (cResult[15] === selected) {
              if (cResult[16] === tmp4.container) {
                if (cResult[17] === tmp13) {
                  if (cResult[18] === tmp16) {
                    let tmp17 = cResult[19];
                  }
                  return tmp17;
                }
              }
            }
          }
        }
      }
      const obj4 = { onPress: tmp11, onLongPress: tmp12, style: tmp4.container, accessible: true, accessibilityRole: "button", accessibilityLabel: tmp13, accessibilityState: tmp16, channel: stateFromStores, selected, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS };
      const tmp21 = jsx(id(16054), { onPress: tmp11, onLongPress: tmp12, style: tmp4.container, accessible: true, accessibilityRole: "button", accessibilityLabel: tmp13, accessibilityState: tmp16, channel: stateFromStores, selected, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS });
      cResult[12] = stateFromStores;
      cResult[13] = tmp12;
      cResult[14] = tmp11;
      cResult[15] = selected;
      cResult[16] = tmp4.container;
      class I {
        constructor() {
          obj = closure_0(closure_2[11]);
          transitionToGuildResult = obj.transitionToGuild(guildId, id);
          return;
        }
      }
      cResult[17] = tmp13;
      cResult[18] = tmp16;
      cResult[19] = tmp21;
      tmp17 = tmp21;
    }
  }
  class I {
    constructor() {
      obj = closure_0(closure_2[11]);
      transitionToGuildResult = obj.transitionToGuild(guildId, id);
      return;
    }
  }
  cResult[3] = id;
  cResult[4] = guildId;
  cResult[5] = I;
  tmp11 = I;
  const tmpResult = guildId(573);
}) : ((guildId) => {
  guildId = guildId.guildId;
  let selected = guildId.selected;
  const tmp = closure_8();
  const items = [ChannelStore, GuildChannelStore];
  const stateFromStores = guildId(573).useStateFromStores(items, () => {
    const directoryChannelIds = GuildChannelStore.getDirectoryChannelIds(guildId);
    let channel = null;
    if (0 !== directoryChannelIds.length) {
      channel = ChannelStore.getChannel(directoryChannelIds[0]);
    }
    return channel;
  });
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  if (!selected) {
    selected = id === guildId.selectedChannelId;
  }
  const items1 = [guildId, id];
  [][0] = id;
  const callback = noop.useCallback(() => {
    router_utils.transitionToGuild(guildId, id);
  }, items1);
  let tmp7 = null;
  if (null != stateFromStores) {
    const obj2 = { onPress: callback, onLongPress: tmp6, style: tmp.container, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, resolvedUnreadSetting: null };
    const obj3 = { channel: stateFromStores };
    obj2.accessibilityLabel = id(9260)(obj3);
    const obj4 = { selected };
    obj2.accessibilityState = obj4;
    obj2.channel = stateFromStores;
    obj2.selected = selected;
    obj2.resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
    tmp7 = jsx(id(16054), { onPress: callback, onLongPress: tmp6, style: tmp.container, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, resolvedUnreadSetting: null });
    const tmp10 = id(16054);
  }
  return tmp7;
}));