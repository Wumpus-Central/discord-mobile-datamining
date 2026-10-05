// === Module 17410: LaunchPadMembers ===

// Module 17410 (LaunchPadMembers)
import useStateFromStores from "useStateFromStores" /* 573 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import GuildChannelUserListDefault from "GuildChannelUserList" /* 11210 */;
import PrivateChannelUserListDefault from "PrivateChannelUserList" /* 11812 */;
import ThreadChannelUserListDefault from "ThreadChannelUserList" /* 16873 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_7 = createStyles.createStyles({ wrapper: { minHeight: 16 }, listStyle: { flex: 0 }, emptyWrapper: { padding: 20 }, emptyText: { textAlign: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadMembers.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(28);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedChannelStore, ChannelStore];
    const fn = function y() {
      currentlySelectedChannelId = currentlySelectedChannelId.getCurrentlySelectedChannelId();
      channel = channel.getChannel(currentlySelectedChannelId);
      if (null != currentlySelectedChannelId) {
        if (null != channel) {
          if (channel.isPrivate()) {
            const obj = { channelId: currentlySelectedChannelId, type: "private" };
            return obj;
          } else {
            const guild_id = channel.guild_id;
            if (channel.isThread()) {
              const obj2 = { channelId: currentlySelectedChannelId, guildId: guild_id, type: "thread" };
              let obj3 = obj2;
            } else {
              obj3 = { channelId: currentlySelectedChannelId, guildId: guild_id, type: "guild" };
            }
            return obj3;
          }
        }
      }
      return { channelId: "unicodeVersion", type: null };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStoresObject = useStateFromStores.useStateFromStoresObject(tmp5, tmp6);
  if ("private" === stateFromStoresObject.type) {
    if (cResult[2] === stateFromStoresObject.channelId) {
      if (cResult[3] === tmp4.listStyle) {
        let tmp35 = cResult[4];
      }
      if (cResult[5] === tmp4.wrapper) {
        if (cResult[6] === tmp35) {
          let tmp39 = cResult[7];
        }
        return tmp39;
      }
      let obj2 = { style: tmp4.wrapper, children: tmp35 };
      const tmp42 = <View style={tmp4.wrapper}>{tmp35}</View>;
      cResult[5] = tmp4.wrapper;
      cResult[6] = tmp35;
      cResult[7] = tmp42;
      tmp39 = tmp42;
    }
    let obj3 = { channelId: stateFromStoresObject.channelId, listStyleOverride: tmp4.listStyle, disableBottomSafeZone: true, insetEnd: 20 };
    const tmp38 = jsx(PrivateChannelUserListDefault, { channelId: stateFromStoresObject.channelId, listStyleOverride: tmp4.listStyle, disableBottomSafeZone: true, insetEnd: 20 }, stateFromStoresObject.channelId);
    cResult[2] = stateFromStoresObject.channelId;
    cResult[3] = tmp4.listStyle;
    cResult[4] = tmp38;
    tmp35 = tmp38;
  } else if ("thread" === stateFromStoresObject.type) {
    if (cResult[8] === stateFromStoresObject.channelId) {
      if (cResult[9] === stateFromStoresObject.guildId) {
        if (cResult[10] === tmp4.listStyle) {
          let tmp27 = cResult[11];
        }
        if (cResult[12] === tmp4.wrapper) {
          if (cResult[13] === tmp27) {
            let tmp31 = cResult[14];
          }
          return tmp31;
        }
        const obj4 = { style: tmp4.wrapper, children: tmp27 };
        const tmp34 = <View style={tmp4.wrapper}>{tmp27}</View>;
        cResult[12] = tmp4.wrapper;
        cResult[13] = tmp27;
        cResult[14] = tmp34;
        tmp31 = tmp34;
      }
    }
    const obj6 = { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 };
    ({ channelId: obj7.channelId, guildId: obj7.guildId } = stateFromStoresObject);
    obj6.listStyleOverride = tmp4.listStyle;
    const tmp30 = jsx(ThreadChannelUserListDefault, { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 }, stateFromStoresObject.channelId);
    cResult[8] = stateFromStoresObject.channelId;
    cResult[9] = stateFromStoresObject.guildId;
    cResult[10] = tmp4.listStyle;
    cResult[11] = tmp30;
    tmp27 = tmp30;
  } else if ("guild" === stateFromStoresObject.type) {
    if (cResult[15] === stateFromStoresObject.channelId) {
      if (cResult[16] === stateFromStoresObject.guildId) {
        if (cResult[17] === tmp4.listStyle) {
          let tmp19 = cResult[18];
        }
        if (cResult[19] === tmp4.wrapper) {
          if (cResult[20] === tmp19) {
            let tmp23 = cResult[21];
          }
          return tmp23;
        }
        const obj8 = { style: tmp4.wrapper, children: tmp19 };
        const tmp26 = <View style={tmp4.wrapper}>{tmp19}</View>;
        cResult[19] = tmp4.wrapper;
        cResult[20] = tmp19;
        cResult[21] = tmp26;
        tmp23 = tmp26;
      }
    }
    const obj9 = { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 };
    ({ channelId: obj5.channelId, guildId: obj5.guildId } = stateFromStoresObject);
    obj9.listStyleOverride = tmp4.listStyle;
    const tmp22 = jsx(GuildChannelUserListDefault, { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 }, stateFromStoresObject.channelId);
    cResult[15] = stateFromStoresObject.channelId;
    cResult[16] = stateFromStoresObject.guildId;
    cResult[17] = tmp4.listStyle;
    cResult[18] = tmp22;
    tmp19 = tmp22;
  } else {
    const _Symbol = Symbol;
    ({ emptyWrapper, emptyText } = tmp4);
    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t["+7wtJq"]);
      cResult[22] = stringResult;
      let tmp10 = stringResult;
    } else {
      tmp10 = cResult[22];
    }
    if (cResult[23] !== tmp4.emptyText) {
      const obj10 = { style: emptyText, variant: "text-md/semibold", children: tmp10 };
      const tmp14 = jsx(Text_Text.Text, { style: emptyText, variant: "text-md/semibold", children: tmp10 });
      cResult[23] = tmp4.emptyText;
      cResult[24] = tmp14;
      let tmp12 = tmp14;
    } else {
      tmp12 = cResult[24];
    }
    if (cResult[25] === tmp4.emptyWrapper) {
      if (cResult[26] === tmp12) {
        let tmp15 = cResult[27];
      }
      return tmp15;
    }
    const obj18 = { style: emptyWrapper, children: tmp12 };
    const tmp18 = <View style={emptyWrapper}>{tmp12}</View>;
    cResult[25] = tmp4.emptyWrapper;
    cResult[26] = tmp12;
    cResult[27] = tmp18;
    tmp15 = tmp18;
  }
  const tmpResult = useStateFromStores;
}) : (() => {
  const tmp = closure_7();
  const items = [SelectedChannelStore, ChannelStore];
  const stateFromStoresObject = useStateFromStores.useStateFromStoresObject(items, () => {
    currentlySelectedChannelId = currentlySelectedChannelId.getCurrentlySelectedChannelId();
    channel = channel.getChannel(currentlySelectedChannelId);
    if (null != currentlySelectedChannelId) {
      if (null != channel) {
        if (channel.isPrivate()) {
          const obj = { channelId: currentlySelectedChannelId, type: "private" };
          return obj;
        } else {
          const guild_id = channel.guild_id;
          if (channel.isThread()) {
            const obj2 = { channelId: currentlySelectedChannelId, guildId: guild_id, type: "thread" };
            let obj3 = obj2;
          } else {
            obj3 = { channelId: currentlySelectedChannelId, guildId: guild_id, type: "guild" };
          }
          return obj3;
        }
      }
    }
    return { channelId: "unicodeVersion", type: null };
  });
  if ("private" === stateFromStoresObject.type) {
    let obj2 = { style: tmp.wrapper, children: null };
    const obj4 = { channelId: stateFromStoresObject.channelId, listStyleOverride: tmp.listStyle, disableBottomSafeZone: true, insetEnd: 20 };
    obj2.children = jsx(PrivateChannelUserListDefault, { channelId: stateFromStoresObject.channelId, listStyleOverride: tmp.listStyle, disableBottomSafeZone: true, insetEnd: 20 }, stateFromStoresObject.channelId);
    let tmp8 = <View style={tmp.wrapper}>{null}</View>;
  } else if ("thread" === stateFromStoresObject.type) {
    const obj6 = { style: tmp.wrapper, children: null };
    const obj7 = { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 };
    ({ channelId: obj5.channelId, guildId: obj5.guildId } = stateFromStoresObject);
    obj7.listStyleOverride = tmp.listStyle;
    obj6.children = jsx(ThreadChannelUserListDefault, { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 }, stateFromStoresObject.channelId);
    tmp8 = <View style={tmp.wrapper}>{null}</View>;
  } else if ("guild" === stateFromStoresObject.type) {
    const obj8 = { style: tmp.wrapper, children: null };
    const obj9 = { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 };
    ({ channelId: obj3.channelId, guildId: obj3.guildId } = stateFromStoresObject);
    obj9.listStyleOverride = tmp.listStyle;
    obj8.children = jsx(GuildChannelUserListDefault, { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 }, stateFromStoresObject.channelId);
    tmp8 = <View style={tmp.wrapper}>{null}</View>;
  } else {
    const obj17 = { style: tmp.emptyWrapper, children: null };
    const obj18 = { style: tmp.emptyText, variant: "text-md/semibold", children: null };
    const intl = util.intl;
    obj18.children = intl.string(util.t["+7wtJq"]);
    obj17.children = jsx(Text_Text.Text, { style: tmp.emptyText, variant: "text-md/semibold", children: null });
    tmp8 = <View style={tmp.emptyWrapper}>{null}</View>;
  }
  return tmp8;
}));