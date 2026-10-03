// discord_app/modules/notifications/settings/native/NotificationSettingsChannelPost.tsx
import NotificationSettingsModalActionCreatorsDefault from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsChannelPost.tsx");

export const NotificationSettingsChannelPost = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      _require = channel;
      const cResult = require("c").c(17);
      channel = channel.channel;
      const guild_id = channel.guild_id;
      id = channel.id;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserGuildSettingsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === id) {
        if (cResult[2] === guild_id) {
          if (cResult[3] === channel.channel) {
            let tmp6 = cResult[4];
          }
          const stateFromStoresObject = tmp(tmp2[6]).useStateFromStoresObject(first, tmp6);
          ({ muted, newForumThreadsCreated } = stateFromStoresObject);
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[7]).intl;
            const stringResult = intl.string(tmp(tmp2[7]).t.bK11jO);
            cResult[5] = stringResult;
            let tmp8 = stringResult;
          } else {
            tmp8 = cResult[5];
          }
          const _Symbol2 = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(tmp2[7]).intl;
            const stringResult1 = intl2.string(tmp(tmp2[7]).t.Rkgjph);
            cResult[6] = stringResult1;
            let tmp10 = stringResult1;
          } else {
            tmp10 = cResult[6];
          }
          if (!muted) {
            muted = stateFromStoresObject.guildMuted;
          }
          if (cResult[7] === newForumThreadsCreated) {
            if (cResult[8] === channel.channel) {
              let tmp12 = cResult[9];
            }
            if (cResult[10] === newForumThreadsCreated) {
              if (cResult[11] === muted) {
                if (cResult[12] === tmp12) {
                  let tmp13 = cResult[13];
                }
                if (cResult[14] === channel.style) {
                  if (cResult[15] === tmp13) {
                    let tmp16 = cResult[16];
                  }
                  return tmp16;
                }
                const obj2 = { style: channel.style, children: tmp13 };
                const tmp19 = <newForumThreadsCreated style={channel.style}>{tmp13}</newForumThreadsCreated>;
                cResult[14] = channel.style;
                cResult[15] = tmp13;
                cResult[16] = tmp19;
                tmp16 = tmp19;
              }
            }
            const obj3 = { title: tmp8, hasIcons: false, children: null };
            const obj4 = { label: tmp10, checked: newForumThreadsCreated, disabled: muted, onPress: tmp12 };
            obj3.children = jsx(tmp(tmp2[10]).TableCheckboxRow, {
              label: tmp10,
              checked: newForumThreadsCreated,
              disabled: muted,
              onPress: tmp12,
            });
            const tmp15 = jsx(tmp(tmp2[9]).TableRowGroup, { title: tmp8, hasIcons: false, children: null });
            cResult[10] = newForumThreadsCreated;
            class S {
              constructor() {
                obj = closure_1(closure_2[8]);
                result = obj.setForumThreadsCreated(closure_0.channel, !newForumThreadsCreated);
                return;
              }
            }
            cResult[12] = tmp12;
            cResult[13] = tmp15;
            tmp13 = tmp15;
          }
          class S {
            constructor() {
              obj = closure_1(closure_2[8]);
              result = obj.setForumThreadsCreated(closure_0.channel, !newForumThreadsCreated);
              return;
            }
          }
          cResult[7] = newForumThreadsCreated;
          cResult[8] = channel.channel;
          cResult[9] = S;
          tmp12 = S;
          const tmpResult = tmp(tmp2[6]);
        }
      }
      const fn = function c() {
        return {
          muted: UserGuildSettingsStore.isChannelMuted(guild_id, id),
          guildMuted: UserGuildSettingsStore.isMuted(guild_id),
          newForumThreadsCreated: UserGuildSettingsStore.getNewForumThreadsCreated(channel.channel),
        };
      };
      cResult[1] = id;
      cResult[2] = guild_id;
      cResult[3] = channel.channel;
      cResult[4] = fn;
      tmp6 = fn;
      const obj = require("c");
    }
  : (channel) => {
      _require = channel;
      ({ guild_id: importDefault, id: dependencyMap } = channel.channel);
      const items = [UserGuildSettingsStore];
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({
        muted: UserGuildSettingsStore.isChannelMuted(importDefault, dependencyMap),
        guildMuted: UserGuildSettingsStore.isMuted(importDefault),
        newForumThreadsCreated: UserGuildSettingsStore.getNewForumThreadsCreated(channel.channel),
      }));
      ({ muted, newForumThreadsCreated } = stateFromStoresObject);
      const obj2 = { style: channel.style, children: null };
      const obj3 = { title: null, hasIcons: false, children: null };
      const intl = require("util").intl;
      obj3.title = intl.string(require("util").t.bK11jO);
      const obj4 = { label: null, checked: null, disabled: null, onPress: null };
      const intl2 = require("util").intl;
      obj4.label = intl2.string(require("util").t.Rkgjph);
      obj4.checked = newForumThreadsCreated;
      if (!muted) {
        muted = stateFromStoresObject.guildMuted;
      }
      obj4.disabled = muted;
      obj4.onPress = function onPress() {
        const result = NotificationSettingsModalActionCreatorsDefault.setForumThreadsCreated(
          channel.channel,
          !newForumThreadsCreated,
        );
      };
      obj3.children = jsx(require("TableCheckboxRow").TableCheckboxRow, {
        label: null,
        checked: null,
        disabled: null,
        onPress: null,
      });
      obj2.children = jsx(require("TableRowGroup").TableRowGroup, { title: null, hasIcons: false, children: null });
      return <newForumThreadsCreated style={channel.style}>{null}</newForumThreadsCreated>;
    };
