// === Module 16173: DirectoryChannel ===

// Module 16173 (DirectoryChannel)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import router_utils from "router_utils" /* 1112 */;
import ReadStateConstants from "ReadStateConstants" /* 5078 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10664 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11711 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildChannelStore from "GuildChannelStore" /* 4513 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guildId;

let obj2;
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
let closure_8 = createStyles.createStyles(obj);
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let tmp8;
  const tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(20);
  guildId = guildId.guildId;
  let selected = guildId.selected;
  const selectedChannelId = guildId.selectedChannelId;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, GuildChannelStore];
    cResult[0] = items;
    first = items;
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
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  if (!selected) {
    selected = id === selectedChannelId;
  }
  if (cResult[3] === id) {
    let tmp11;
    let tmp12;
    if (cResult[4] === guildId) {
      tmp11 = cResult[5];
    }
    if (cResult[6] !== id) {
      const fn2 = function f() {
        if (null != id) {
          const obj = openChannelLongPressActionSheet;
          const result = obj.openChannelLongPressActionSheet(tmp);
        }
      };
      cResult[6] = id;
      cResult[7] = fn2;
      tmp12 = fn2;
    } else {
      tmp12 = cResult[7];
    }
    if (null == stateFromStores) {
      return null;
    } else {
      let tmp13;
      let tmp16;
      const container = tmp4.container;
      if (cResult[8] !== stateFromStores) {
        const obj2 = { channel: stateFromStores };
        const tmp15 = id(9295)(obj2);
        cResult[8] = stateFromStores;
        cResult[9] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[9];
      }
      if (cResult[10] !== selected) {
        const obj3 = { selected };
        cResult[10] = selected;
        cResult[11] = obj3;
        tmp16 = obj3;
      } else {
        tmp16 = cResult[11];
      }
      if (cResult[12] === stateFromStores) {
        if (cResult[13] === tmp12) {
          if (cResult[14] === tmp11) {
            if (cResult[15] === selected) {
              if (cResult[16] === tmp4.container) {
                if (cResult[17] === tmp13) {
                  let tmp17;
                  if (cResult[18] === tmp16) {
                    tmp17 = cResult[19];
                  }
                  return tmp17;
                }
              }
            }
          }
        }
      }
      const tmp21 = jsx(id(16093), { onPress: tmp11, onLongPress: tmp12, style: container, accessible: true, accessibilityRole: "button", accessibilityLabel: tmp13, accessibilityState: tmp16, channel: stateFromStores, selected, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS });
      cResult[12] = stateFromStores;
      cResult[13] = tmp12;
      cResult[14] = tmp11;
      cResult[15] = selected;
      cResult[16] = tmp4.container;
      class I {
        constructor() {
          const obj = router_utils;
          obj.transitionToGuild(guildId, id);
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
      const obj = router_utils;
      obj.transitionToGuild(guildId, id);
    }
  }
  cResult[3] = id;
  cResult[4] = guildId;
  cResult[5] = I;
  tmp11 = I;
}) : ((guildId) => {
  guildId = guildId.guildId;
  let selected = guildId.selected;
  const selectedChannelId = guildId.selectedChannelId;
  const tmp = closure_8();
  let obj = guildId(573);
  const items = [ChannelStore, GuildChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
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
    selected = id === selectedChannelId;
  }
  const items1 = [guildId, id];
  [][0] = id;
  const callback = react.useCallback(() => {
    const obj = router_utils;
    obj.transitionToGuild(guildId, id);
  }, items1);
  let tmp7 = null;
  if (null != stateFromStores) {
    const obj3 = { channel: stateFromStores };
    id(16093);
    const obj4 = { selected };
    tmp7 = <tmp10 onPress={callback} onLongPress={tmp6} style={tmp.container} accessible accessibilityRole="button" accessibilityLabel={id(9295)(obj3)} accessibilityState={obj4} channel={stateFromStores} selected={selected} resolvedUnreadSetting={UnreadSetting.ONLY_MENTIONS} />;
  }
  return tmp7;
}));
let result = size.fileFinishedImporting("modules/guild_sidebar/native/DirectoryChannel.tsx");

export default memoResult;