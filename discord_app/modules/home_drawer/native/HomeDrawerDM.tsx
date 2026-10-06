// === Module 16324: HomeDrawerDM ===

// Module 16324 (HomeDrawerDM)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1096 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import HomeDrawerExperiment from "HomeDrawerExperiment" /* 4748 */;
import Text_Text from "Text/Text" /* 4892 */;
import useChannelName from "useChannelName" /* 5049 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 7525 */;
import BellSlashIcon2 from "BellSlashIcon" /* 9826 */;
import ChannelRowPreview2 from "ChannelRowPreview" /* 12503 */;
import BellZIcon from "BellZIcon" /* 13148 */;
import useMessagePreviewsDefault from "useMessagePreviews" /* 15152 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5077 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let c10;
let unpackModuleId;
const View = react_native.View;
const isMultiUserDM = ChannelRecord.isMultiUserDM;
const NOOP = Constants.NOOP;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({ title: { flexDirection: "row", alignItems: "center", gap: 4 }, titleText: { flexShrink: 1 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function(channel) {
  let first;
  let items3;
  let tmp7;
  let tmp9;
  let obj = channel(576);
  const cResult = obj.c(35);
  channel = channel.channel;
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function v() {
      return UserStore.getUser(channel.getRecipientId());
    };
    cResult[1] = channel;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = channel(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore, RelationshipStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === channel) {
    let tmp12;
    let tmp14;
    let tmp17;
    if (cResult[5] === stateFromStores) {
      tmp12 = cResult[6];
    }
    const tmpResult4 = channel(504);
    const stateFromStores1 = tmpResult4.useStateFromStores(tmp9, tmp12);
    const tmpResult5 = channel(16325);
    const unread = tmpResult5.useBaseChannelUnreadBadgeState(channel, false).unread;
    if (cResult[7] !== unread) {
      const obj2 = { unread };
      cResult[7] = unread;
      cResult[8] = obj2;
      tmp14 = obj2;
    } else {
      tmp14 = cResult[8];
    }
    const tmp16 = stateFromStores(15152)(channel, tmp14);
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [UserGuildSettingsStore];
      cResult[9] = items2;
      tmp17 = items2;
    } else {
      tmp17 = cResult[9];
    }
    if (cResult[10] === channel.guild_id) {
      let tmp19;
      let tmp22;
      let tmp32;
      if (cResult[11] === channel.id) {
        tmp19 = cResult[12];
      }
      const tmpResult6 = channel(504);
      const stateFromStores2 = tmpResult6.useStateFromStores(tmp17, tmp19);
      if (null != stateFromStores2) {
        let tmp23;
        if (cResult[14] !== stateFromStores2.end_time) {
          let tmp24 = null == stateFromStores2.end_time;
          if (!tmp24) {
            const _Date = Date;
            const self = this;
            const self2 = this;
            const _Date2 = Date;
            const self3 = this;
            const self4 = this;
            const date = new Date(stateFromStores2.end_time);
            tmp24 = date > new Date();
            const date1 = new Date();
          }
          cResult[14] = stateFromStores2.end_time;
          cResult[15] = tmp24;
          tmp23 = tmp24;
        } else {
          tmp23 = cResult[15];
        }
        if (cResult[16] === null != stateFromStores2.end_time) {
          let tmp30;
          if (cResult[17] === tmp23) {
            tmp30 = cResult[18];
          }
          tmp22 = tmp30;
        }
        const obj3 = { isMuted: tmp23, isTemporary: null != stateFromStores2.end_time };
        cResult[16] = null != stateFromStores2.end_time;
        cResult[17] = tmp23;
        cResult[18] = obj3;
        tmp30 = obj3;
      } else {
        const _Symbol2 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { isMuted: false, isTemporary: false };
          cResult[13] = obj4;
          tmp22 = obj4;
        } else {
          tmp22 = cResult[13];
        }
      }
      let isMuted;
      if (tmp22 != null) {
        isMuted = tmp22.isMuted;
      }
      if (isMuted) {
        let BellSlashIcon;
        let isTemporary;
        if (tmp22 != null) {
          isTemporary = tmp22.isTemporary;
        }
        if (isTemporary) {
          BellSlashIcon = tmp(13148).BellZIcon;
        } else {
          BellSlashIcon = tmp(9826).BellSlashIcon;
        }
        tmp32 = BellSlashIcon;
      } else {
        tmp32 = NOOP;
      }
      if (cResult[19] === stateFromStores1) {
        let tmp34;
        let tmp37;
        if (cResult[20] === tmp4.titleText) {
          tmp34 = cResult[21];
        }
        if (cResult[22] !== tmp32) {
          const tmp39 = closure_10(tmp32, { size: "xs" });
          cResult[22] = tmp32;
          cResult[23] = tmp39;
          tmp37 = tmp39;
        } else {
          tmp37 = cResult[23];
        }
        if (cResult[24] === tmp4.title) {
          if (cResult[25] === tmp37) {
            let tmp40;
            if (cResult[26] === tmp34) {
              tmp40 = cResult[27];
            }
            let tmp44 = null;
            if (null != tmp16) {
              if (cResult[28] === channel) {
                if (cResult[29] === tmp16) {
                  let tmp45;
                  if (cResult[30] === tmp22.isMuted) {
                    tmp45 = cResult[31];
                  }
                  tmp44 = tmp45;
                }
              }
              const obj5 = { channel, message: tmp16, variant: "text-xs/medium", color: "text-strong", layout: channel(7525).ChannelListLayoutTypes.COZY, muted: tmp22.isMuted };
              const ChannelRowPreview = tmp(12503).ChannelRowPreview;
              const tmp47 = closure_10(ChannelRowPreview, obj5);
              cResult[28] = channel;
              cResult[29] = tmp16;
              class I {
                constructor() {
                  return UserGuildSettingsStore.getChannelMuteConfig(channel.guild_id, channel.id);
                }
              }
              cResult[30] = tmp22.isMuted;
              cResult[31] = tmp47;
              tmp45 = tmp47;
            }
            if (cResult[32] === tmp44) {
              let tmp48;
              if (cResult[33] === tmp40) {
                tmp48 = cResult[34];
              }
              return tmp48;
            }
            const obj6 = { title: tmp40, subtitle: tmp44 };
            const tmp50 = closure_10(channel(16286).HomeDrawerSharedItem, obj6);
            cResult[32] = tmp44;
            cResult[33] = tmp40;
            class I {
              constructor() {
                return UserGuildSettingsStore.getChannelMuteConfig(channel.guild_id, channel.id);
              }
            }
            cResult[34] = tmp50;
            tmp48 = tmp50;
          }
        }
        const obj7 = { style: tmp4.title, children: items3 };
        items3 = [tmp34, tmp37];
        const tmp43 = closure_11(View, obj7);
        class I {
          constructor() {
            return UserGuildSettingsStore.getChannelMuteConfig(channel.guild_id, channel.id);
          }
        }
        cResult[25] = tmp37;
        cResult[26] = tmp34;
        cResult[27] = tmp43;
        tmp40 = tmp43;
      }
      class I {
        constructor() {
          return UserGuildSettingsStore.getChannelMuteConfig(channel.guild_id, channel.id);
        }
      }
      cResult[19] = stateFromStores1;
      cResult[20] = tmp4.titleText;
      cResult[21] = tmp36;
      tmp34 = tmp36;
    }
    class I {
      constructor() {
        return UserGuildSettingsStore.getChannelMuteConfig(channel.guild_id, channel.id);
      }
    }
    cResult[10] = channel.guild_id;
    cResult[11] = channel.id;
    cResult[12] = I;
    tmp19 = I;
  }
  class M {
    constructor() {
      let tmp2 = null;
      if (null != channel) {
        let channelName;
        if (isMultiUserDM(channel.type)) {
          const obj = useChannelName;
          channelName = obj.computeChannelName(channel, UserStore, RelationshipStore);
        } else {
          channelName = null;
        }
        tmp2 = channelName;
      }
      return tmp2;
    }
  }
  cResult[4] = channel;
  cResult[5] = stateFromStores;
  cResult[6] = M;
  tmp12 = M;
}) : ((channel) => {
  let closure_1;
  let closure_2;
  channel = channel.channel;
  let memo;
  const tmp = closure_12();
  importDefault = tmp;
  let obj = channel(504);
  let items = [UserStore];
  dependencyMap = obj.useStateFromStores(items, () => UserStore.getUser(channel.getRecipientId()));
  let obj2 = channel(504);
  const items1 = [UserStore, memo];
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    let tmp2 = null;
    if (null != channel) {
      let channelName;
      if (isMultiUserDM(channel.type)) {
        const obj = useChannelName;
        channelName = obj.computeChannelName(channel, UserStore, RelationshipStore);
      } else {
        channelName = null;
      }
      tmp2 = channelName;
    }
    return tmp2;
  });
  const obj3 = channel(16325);
  let tmp3 = useMessagePreviewsDefault(channel, { unread: obj3.useBaseChannelUnreadBadgeState(channel, false).unread });
  let closure_4 = tmp3;
  const items2 = [UserGuildSettingsStore];
  const obj4 = channel(504);
  const stateFromStores1 = obj4.useStateFromStores(items2, () => UserGuildSettingsStore.getChannelMuteConfig(channel.guild_id, channel.id));
  const items3 = [stateFromStores1];
  memo = stateFromStores.useMemo(function() {
    let obj;
    if (null == stateFromStores1) {
      obj = { isMuted: false, isTemporary: false };
    } else {
      let tmp2 = null == stateFromStores1.end_time;
      if (!tmp2) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const _Date2 = Date;
        const self3 = this;
        const self4 = this;
        const date = new Date(stateFromStores1.end_time);
        tmp2 = date > new Date();
        const date1 = new Date();
      }
      obj = { isMuted: tmp2, isTemporary: null != stateFromStores1.end_time };
    }
    return obj;
  }, items3);
  const items4 = [stateFromStores, memo, , ];
  ({ title: arr5[2], titleText: arr5[3] } = tmp);
  const items5 = [channel, tmp3, memo];
  const title = stateFromStores.useMemo(() => {
    let items;
    let tmp3;
    let isMuted;
    if (memo != null) {
      isMuted = memo.isMuted;
    }
    if (isMuted) {
      let BellSlashIcon;
      let isTemporary;
      if (memo != null) {
        isTemporary = memo.isTemporary;
      }
      if (isTemporary) {
        BellSlashIcon = BellZIcon.BellZIcon;
      } else {
        BellSlashIcon = BellSlashIcon2.BellSlashIcon;
      }
      tmp3 = BellSlashIcon;
    } else {
      tmp3 = NOOP;
    }
    const obj = { style: closure_1.title, children: items };
    items = [, ];
    const obj2 = { variant: "text-md/medium", style: closure_1.titleText, lineClamp: 1, color: "text-default", children: stateFromStores };
    items[0] = authStore(Text_Text.Text, obj2);
    items[1] = authStore(tmp3, { size: "xs" });
    return unpackModuleId(View, obj);
  }, items4);
  const subtitle = stateFromStores.useMemo(() => {
    let tmp2 = null;
    if (null != closure_4) {
      const obj = { channel, message: tmp, variant: "text-xs/medium", color: "text-strong", layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY, muted: memo.isMuted };
      const ChannelRowPreview = ChannelRowPreview2.ChannelRowPreview;
      tmp2 = authStore(ChannelRowPreview, obj);
    }
    return tmp2;
  }, items5);
  return closure_10(channel(16286).HomeDrawerSharedItem, { title, subtitle });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  const obj = react2;
  const cResult = obj.c(3);
  channel = channel.channel;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "dm-expanded-children" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
  let tmp6 = null;
  if (MobileHomeDrawerExperiment.useConfig(first).enableHome) {
    tmp6 = null;
    if (!tmp5) {
      let tmp7;
      if (cResult[1] !== channel) {
        const obj3 = { channel };
        const tmp10 = authStore(closure_13, obj3);
        cResult[1] = channel;
        cResult[2] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[2];
      }
      tmp6 = tmp7;
    }
  }
  return tmp6;
}) : ((channel) => {
  channel = channel.channel;
  const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
  let tmp2 = null;
  if (MobileHomeDrawerExperiment.useConfig({ location: "dm-expanded-children" }).enableHome) {
    tmp2 = null;
    if (!tmp) {
      const obj = { channel };
      tmp2 = authStore(closure_13, obj);
    }
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerDM.tsx");

export default tmp3;