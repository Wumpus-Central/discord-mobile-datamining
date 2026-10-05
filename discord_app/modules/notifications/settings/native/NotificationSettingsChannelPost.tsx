// === Module 12515: NotificationSettingsChannelPost ===

// Module 12515 (NotificationSettingsChannelPost)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6614 */;
import react from "react" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, channel;

const View = react_native.View;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  let id;
  let muted;
  let newForumThreadsCreated;
  _require = channel;
  let obj = require("react");
  const cResult = obj.c(17);
  channel = channel.channel;
  const guild_id = channel.guild_id;
  id = channel.id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserGuildSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === id) {
    if (cResult[2] === guild_id) {
      let tmp6;
      let tmp8;
      if (cResult[3] === channel.channel) {
        tmp6 = cResult[4];
      }
      const tmpResult = require("get initialized");
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp6);
      ({ muted, newForumThreadsCreated } = stateFromStoresObject);
      const _Symbol = Symbol;
      const guildMuted = stateFromStoresObject.guildMuted;
      const style = channel.style;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[7]).intl;
        const stringResult = intl.string(require("intl").t.bK11jO);
        cResult[5] = stringResult;
        tmp8 = stringResult;
      } else {
        tmp8 = cResult[5];
      }
      const _Symbol2 = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(tmp2[7]).intl;
        const stringResult1 = intl2.string(require("intl").t.Rkgjph);
        cResult[6] = stringResult1;
      }
      if (!muted) {
        muted = guildMuted;
      }
      if (cResult[7] === newForumThreadsCreated) {
        let tmp12;
        if (cResult[8] === channel.channel) {
          tmp12 = cResult[9];
        }
        if (cResult[10] === newForumThreadsCreated) {
          if (cResult[11] === muted) {
            let tmp13;
            if (cResult[12] === tmp12) {
              tmp13 = cResult[13];
            }
            if (cResult[14] === channel.style) {
              let tmp16;
              if (cResult[15] === tmp13) {
                tmp16 = cResult[16];
              }
              return tmp16;
            }
            const tmp19 = <newForumThreadsCreated style={style}>{tmp13}</newForumThreadsCreated>;
            cResult[14] = channel.style;
            cResult[15] = tmp13;
            cResult[16] = tmp19;
            tmp16 = tmp19;
          }
        }
        const TableRowGroup = tmp(tmp2[9]).TableRowGroup;
        const tmp15 = <TableRowGroup title={tmp8} hasIcons={false}>{null}</TableRowGroup>;
        cResult[10] = newForumThreadsCreated;
        class S {
          constructor() {
            const obj = NotificationSettingsModalActionCreatorsDefault;
            const result = obj.setForumThreadsCreated(channel.channel, !newForumThreadsCreated);
          }
        }
        cResult[12] = tmp12;
        cResult[13] = tmp15;
        tmp13 = tmp15;
      }
      class S {
        constructor() {
          const obj = NotificationSettingsModalActionCreatorsDefault;
          const result = obj.setForumThreadsCreated(channel.channel, !newForumThreadsCreated);
        }
      }
      cResult[7] = newForumThreadsCreated;
      cResult[8] = channel.channel;
      cResult[9] = S;
      tmp12 = S;
    }
  }
  const fn = function c() {
    const obj = { muted: UserGuildSettingsStore.isChannelMuted(guild_id, id), guildMuted: UserGuildSettingsStore.isMuted(guild_id), newForumThreadsCreated: UserGuildSettingsStore.getNewForumThreadsCreated(channel.channel) };
    return obj;
  };
  cResult[1] = id;
  cResult[2] = guild_id;
  cResult[3] = channel.channel;
  cResult[4] = fn;
  tmp6 = fn;
}) : ((channel) => {
  let intl;
  let intl2;
  let muted;
  let newForumThreadsCreated;
  _require = channel;
  ({ guild_id: importDefault, id: dependencyMap } = channel.channel);
  let obj = require("get initialized");
  const items = [UserGuildSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { muted: UserGuildSettingsStore.isChannelMuted(importDefault, dependencyMap), guildMuted: UserGuildSettingsStore.isMuted(importDefault), newForumThreadsCreated: UserGuildSettingsStore.getNewForumThreadsCreated(channel.channel) };
    return obj;
  });
  ({ muted, newForumThreadsCreated } = stateFromStoresObject);
  const guildMuted = stateFromStoresObject.guildMuted;
  ({ title: intl.string(require("intl").t.bK11jO), hasIcons: false, children: null });
  const TableRowGroup = require("TableRowGroup").TableRowGroup;
  intl = require("intl").intl;
  ({
    label: intl2.string(require("intl").t.Rkgjph),
    checked: newForumThreadsCreated,
    disabled: muted,
    onPress() {
      const obj = NotificationSettingsModalActionCreatorsDefault;
      const result = obj.setForumThreadsCreated(channel.channel, !newForumThreadsCreated);
    }
  });
  const TableCheckboxRow = require("TableCheckboxRow").TableCheckboxRow;
  intl2 = require("intl").intl;
  if (!muted) {
    muted = guildMuted;
  }
  return <newForumThreadsCreated style={channel.style}>{null}</newForumThreadsCreated>;
});
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsChannelPost.tsx");

export const NotificationSettingsChannelPost = tmp3;