// === Module 16584: HomeDrawerDM ===

// Module 16584 (HomeDrawerDM)
import c from "c" /* 576 */;
import HomeDrawerExperiment from "HomeDrawerExperiment" /* 4942 */;
import Text_Text from "Text/Text" /* 5086 */;
import useChannelName from "useChannelName" /* 5417 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 9248 */;
import BellSlashIcon2 from "BellSlashIcon" /* 10325 */;
import ChannelRowPreview from "ChannelRowPreview" /* 12599 */;
import BellZIcon from "BellZIcon" /* 12677 */;
import useMessagePreviewsDefault from "useMessagePreviews" /* 15414 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5971 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
const View = fn(17).View;
const isMultiUserDM = fn(2067).isMultiUserDM;
const NOOP = fn(1096).NOOP;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5090);
let closure_12 = createStyles.createStyles({ title: { flexDirection: "row", alignItems: "center", gap: 4 }, titleText: { flexShrink: 1 } });
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function HomeDrawerDMExpandedChildren(channel) {
  const cResult = channel(576).c(35);
  channel = channel.channel;
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function _() {
      return UserStore.getUser(channel.getRecipientId());
    };
    cResult[1] = channel;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = channel(576);
  const stateFromStores = channel(504).useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore, RelationshipStore];
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === channel) {
    if (cResult[5] === stateFromStores) {
      let tmp12 = cResult[6];
    }
    const stateFromStores1 = tmp(504).useStateFromStores(tmp9, tmp12);
    const tmpResult4 = tmp(504);
    const unread = tmp(16585).useBaseChannelUnreadBadgeState(channel, false).unread;
    if (cResult[7] !== unread) {
      const obj2 = { unread };
      cResult[7] = unread;
      cResult[8] = obj2;
      let tmp14 = obj2;
    } else {
      tmp14 = cResult[8];
    }
    const tmp16 = stateFromStores(15414)(channel, tmp14);
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [UserGuildSettingsStore];
      cResult[9] = items2;
      let tmp17 = items2;
    } else {
      tmp17 = cResult[9];
    }
    if (cResult[10] === channel.guild_id) {
      if (cResult[11] === channel.id) {
        let tmp19 = cResult[12];
      }
      const stateFromStores2 = tmp(504).useStateFromStores(tmp17, tmp19);
      if (null != stateFromStores2) {
        if (cResult[14] !== stateFromStores2.end_time) {
          let tmp24 = null == stateFromStores2.end_time;
          if (!tmp24) {
            const _Date = Date;
            const date = new Date(stateFromStores2.end_time);
            const _Date2 = Date;
            const date1 = new Date();
            tmp24 = date > date1;
          }
          cResult[14] = stateFromStores2.end_time;
          cResult[15] = tmp24;
          let tmp23 = tmp24;
        } else {
          tmp23 = cResult[15];
        }
        if (cResult[16] === null != stateFromStores2.end_time) {
        }
        const obj3 = { isMuted: tmp23, isTemporary: null != stateFromStores2.end_time };
        cResult[16] = null != stateFromStores2.end_time;
        cResult[17] = tmp23;
        cResult[18] = obj3;
      } else {
        const _Symbol2 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { isMuted: false, isTemporary: false };
          cResult[13] = obj4;
          let tmp22 = obj4;
        } else {
          tmp22 = cResult[13];
        }
        let isMuted;
        if (tmp22 != null) {
          isMuted = tmp22.isMuted;
        }
        if (isMuted) {
          let isTemporary;
          if (tmp22 != null) {
            isTemporary = tmp22.isTemporary;
          }
          if (isTemporary) {
            let BellSlashIcon = tmp(12677).BellZIcon;
          } else {
            BellSlashIcon = tmp(10325).BellSlashIcon;
          }
        } else {
          if (cResult[19] === stateFromStores1) {
            if (cResult[22] !== NOOP) {
              const tmp45 = closure_10(NOOP, { size: "xs" });
              cResult[22] = NOOP;
              cResult[23] = tmp45;
              let tmp43 = tmp45;
            } else {
              tmp43 = cResult[23];
            }
            if (cResult[24] === tmp4.title) {
              if (cResult[25] === tmp43) {
                if (cResult[26] === tmp40) {
                  let tmp46 = cResult[27];
                }
                if (null == tmp16) {
                  if (cResult[32] === null) {
                    if (cResult[33] === tmp46) {
                      let tmp55 = cResult[34];
                    }
                    return tmp55;
                  }
                  const obj5 = { title: tmp46, subtitle: null };
                  const tmp57 = closure_10(tmp(16546).HomeDrawerSharedItem, obj5);
                  cResult[32] = null;
                  cResult[33] = tmp46;
                  cResult[34] = tmp57;
                  tmp55 = tmp57;
                } else {
                  if (cResult[28] === channel) {
                    if (cResult[29] === tmp16) {
                    }
                  }
                  const obj6 = { channel, message: tmp16, variant: "text-xs/medium", color: "text-strong", layout: tmp(9248).ChannelListLayoutTypes.COZY, muted: tmp22.isMuted };
                  const tmp53 = closure_10(tmp(12599).ChannelRowPreview, obj6);
                  cResult[28] = channel;
                  cResult[29] = tmp16;
                  class B {
                    constructor() {
                      return closure_7.getChannelMuteConfig(channel.guild_id, channel.id);
                    }
                  }
                  cResult[30] = tmp22;
                  cResult[31] = tmp53;
                }
              }
            }
            const obj7 = { style: tmp4.title, children: null };
            const items3 = [tmp40, tmp43];
            obj7.children = items3;
            const tmp49 = closure_11(View, obj7);
            class B {
              constructor() {
                return closure_7.getChannelMuteConfig(channel.guild_id, channel.id);
              }
            }
            cResult[25] = tmp43;
            cResult[26] = tmp40;
            cResult[27] = tmp49;
            tmp46 = tmp49;
          }
          const obj8 = { variant: "text-md/medium", style: tmp4.titleText, lineClamp: 1, color: "text-default", children: stateFromStores1 };
          cResult[19] = stateFromStores1;
          cResult[20] = tmp4.titleText;
          cResult[21] = closure_10(tmp(5086).Text, obj8);
          class B {
            constructor() {
              return closure_7.getChannelMuteConfig(channel.guild_id, channel.id);
            }
          }
          const tmp42 = closure_10(tmp(5086).Text, obj8);
        }
      }
      const tmpResult6 = tmp(504);
    }
    class B {
      constructor() {
        return closure_7.getChannelMuteConfig(channel.guild_id, channel.id);
      }
    }
    cResult[10] = channel.guild_id;
    cResult[11] = channel.id;
    cResult[12] = B;
    tmp19 = B;
    const tmpResult5 = tmp(16585);
  }
  const fn2 = function f() {
    let tmp2 = null;
    if (null != channel) {
      if (isMultiUserDM(channel.type)) {
        let channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
      } else {
        channelName = null;
      }
      tmp2 = channelName;
    }
    return tmp2;
  };
  cResult[4] = channel;
  cResult[5] = stateFromStores;
  cResult[6] = fn2;
  tmp12 = fn2;
  const tmpResult = channel(504);
}) : (function HomeDrawerDMExpandedChildren(channel) {
  channel = channel.channel;
  let memo;
  const tmp = closure_12();
  importDefault = tmp;
  let items = [UserStore];
  dependencyMap = channel(504).useStateFromStores(items, () => UserStore.getUser(channel.getRecipientId()));
  let obj = channel(504);
  const items1 = [UserStore, memo];
  const stateFromStores = channel(504).useStateFromStores(items1, () => {
    let tmp2 = null;
    if (null != channel) {
      if (isMultiUserDM(channel.type)) {
        let channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
      } else {
        channelName = null;
      }
      tmp2 = channelName;
    }
    return tmp2;
  });
  let obj2 = channel(504);
  const tmp3 = useMessagePreviewsDefault(channel, { unread: channel(16585).useBaseChannelUnreadBadgeState(channel, false).unread });
  closure_4 = tmp3;
  const obj3 = channel(16585);
  const items2 = [UserGuildSettingsStore];
  const stateFromStores1 = channel(504).useStateFromStores(items2, () => UserGuildSettingsStore.getChannelMuteConfig(channel.guild_id, channel.id));
  const items3 = [stateFromStores1];
  memo = stateFromStores.useMemo(() => {
    if (null == stateFromStores1) {
      let obj = { isMuted: false, isTemporary: false };
    } else {
      let tmp2 = null == stateFromStores1.end_time;
      if (!tmp2) {
        const _Date = Date;
        const date = new Date(stateFromStores1.end_time);
        const _Date2 = Date;
        const date1 = new Date();
        tmp2 = date > date1;
      }
      obj = { isMuted: tmp2, isTemporary: null != stateFromStores1.end_time };
    }
    return obj;
  }, items3);
  const items4 = [stateFromStores, memo, , ];
  ({ title: arr5[2], titleText: arr5[3] } = tmp);
  const items5 = [channel, tmp3, memo];
  const title = stateFromStores.useMemo(() => {
    let isMuted;
    if (memo != null) {
      isMuted = memo.isMuted;
    }
    if (isMuted) {
      let isTemporary;
      if (memo != null) {
        isTemporary = memo.isTemporary;
      }
      let tmp5Result = dependencyMap;
      if (isTemporary) {
        tmp5Result = BellZIcon;
        let BellSlashIcon = tmp5Result.BellZIcon;
      } else {
        BellSlashIcon = BellSlashIcon2.BellSlashIcon;
      }
    } else {
      const obj = { style: closure_1.title, children: null };
      const obj2 = { variant: "text-md/medium", style: closure_1.titleText, lineClamp: 1, color: "text-default", children: stateFromStores };
      const items = [collapsed(Text_Text.Text, obj2), collapsed(NOOP, { size: "xs" })];
      obj.children = items;
      return closure_2_11(View, obj);
    }
  }, items4);
  const subtitle = stateFromStores.useMemo(() => {
    let tmp2 = null;
    if (null != closure_4) {
      const obj = { channel, message: tmp, variant: "text-xs/medium", color: "text-strong", layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY, muted: memo.isMuted };
      tmp2 = collapsed(ChannelRowPreview.ChannelRowPreview, obj);
    }
    return tmp2;
  }, items5);
  return closure_10(channel(16546).HomeDrawerSharedItem, { title, subtitle });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerDM.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function HomeDrawerDMExpandedChildrenWrapper(channel) {
  const cResult = c.c(3);
  channel = channel.channel;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "dm-expanded-children" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
  let tmp6 = null;
  if (MobileHomeDrawerExperiment.useConfig(first).enableHome) {
    tmp6 = null;
    if (!tmp5) {
      if (cResult[1] !== channel) {
        const obj3 = { channel };
        const tmp10 = collapsed(closure_13, obj3);
        cResult[1] = channel;
        cResult[2] = tmp10;
      }
    }
  }
  return tmp6;
}) : (function HomeDrawerDMExpandedChildrenWrapper(channel) {
  const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
  let tmp2 = null;
  if (MobileHomeDrawerExperiment.useConfig({ location: "dm-expanded-children" }).enableHome) {
    tmp2 = null;
    if (!tmp) {
      const obj = { channel: channel.channel };
      tmp2 = collapsed(closure_13, obj);
    }
  }
  return tmp2;
});