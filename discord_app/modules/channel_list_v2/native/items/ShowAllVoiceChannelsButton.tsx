// discord_app/modules/channel_list_v2/native/items/ShowAllVoiceChannelsButton.tsx
import VoiceCategoryActionCreators from "../../../guild_sidebar/VoiceCategoryActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelListVoiceCategoryStore from "../../../guild_sidebar/ChannelListVoiceCategoryStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/ShowAllVoiceChannelsButton.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ShowAllVoiceChannelsButton(guildId) {
        const cResult = guildId(section[4]).c(14);
        guildId = guildId.guildId;
        section = guildId.section;
        const listRef = guildId.listRef;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [stateFromStores];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== guildId) {
          const fn = function l() {
            return ChannelListVoiceCategoryStore.isVoiceCategoryCollapsed(guildId);
          };
          cResult[1] = guildId;
          cResult[2] = fn;
          let tmp6 = fn;
        } else {
          tmp6 = cResult[2];
        }
        let obj = guildId(section[4]);
        stateFromStores = guildId(section[5]).useStateFromStores(first, tmp6);
        if (cResult[3] === stateFromStores) {
          if (cResult[4] === guildId) {
            if (cResult[5] === listRef) {
              if (cResult[6] === section) {
                let tmp8 = cResult[7];
              }
              if (cResult[8] !== stateFromStores) {
                const intl = tmp(tmp2[8]).intl;
                const string = intl.string;
                let t = tmp(tmp2[8]).t;
                if (stateFromStores) {
                  t = t["/eB9Bg"];
                  let stringResult = string(t);
                } else {
                  stringResult = string(t.Q2gPWl);
                }
                cResult[8] = stateFromStores;
                cResult[9] = stringResult;
              } else {
                const _Symbol = Symbol;
                if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp15 = jsx(tmp(tmp2[9]).VoiceNormalIcon, { size: "sm" });
                  cResult[10] = tmp15;
                  let tmp13 = tmp15;
                } else {
                  tmp13 = cResult[10];
                }
                if (cResult[11] === tmp8) {
                  if (cResult[12] === tmp9) {
                    let tmp16 = cResult[13];
                  }
                  return tmp16;
                }
                let obj2 = { text: cResult[9], icon: tmp13, onPress: tmp8, variant: "secondary", size: "sm" };
                const tmp18 = jsx(tmp(tmp2[10]).Button, {
                  text: cResult[9],
                  icon: tmp13,
                  onPress: tmp8,
                  variant: "secondary",
                  size: "sm",
                });
                cResult[11] = tmp8;
                cResult[12] = cResult[9];
                cResult[13] = tmp18;
                tmp16 = tmp18;
              }
            }
          }
        }
        const fn2 = function v() {
          let obj = VoiceCategoryActionCreators;
          if (stateFromStores) {
            obj.voiceCategoryExpand(guildId);
            const _setTimeout = setTimeout;
            const timerId = setTimeout(() => {
              const current = ref.current;
              if (current != null) {
                const obj = { animated: false, section, item: 0, paddingStart: null };
                const _Math = Math;
                obj.paddingStart = Math.round(0.3 * guildId(section[7]).getWindowDimensions().height);
                current.scrollToLocation(obj);
                const obj2 = guildId(section[7]);
              }
            }, 0);
          } else {
            const result = obj.voiceCategoryCollapse(guildId);
            let current = listRef.current;
            if (current != null) {
              current.scrollToTop(false);
            }
          }
        };
        cResult[3] = stateFromStores;
        cResult[4] = guildId;
        cResult[5] = listRef;
        cResult[6] = section;
        cResult[7] = fn2;
        tmp8 = fn2;
        const tmpResult = guildId(section[5]);
      }
    : function ShowAllVoiceChannelsButton(guildId) {
        guildId = guildId.guildId;
        const section = guildId.section;
        const listRef = guildId.listRef;
        let stateFromStores;
        const items = [stateFromStores];
        stateFromStores = guildId(section[5]).useStateFromStores(items, () =>
          ChannelListVoiceCategoryStore.isVoiceCategoryCollapsed(guildId),
        );
        const items1 = [stateFromStores, guildId, section, listRef];
        const callback = listRef.useCallback(() => {
          let obj = VoiceCategoryActionCreators;
          if (stateFromStores) {
            obj.voiceCategoryExpand(guildId);
            const _setTimeout = setTimeout;
            const timerId = setTimeout(() => {
              const current = ref.current;
              if (current != null) {
                const obj = { animated: false, section, item: 0, paddingStart: null };
                const _Math = Math;
                obj.paddingStart = Math.round(0.3 * guildId(section[7]).getWindowDimensions().height);
                current.scrollToLocation(obj);
                const obj2 = guildId(section[7]);
              }
            }, 0);
          } else {
            const result = obj.voiceCategoryCollapse(guildId);
            let current = listRef.current;
            if (current != null) {
              current.scrollToTop(false);
            }
          }
        }, items1);
        const intl = guildId(section[8]).intl;
        const string = intl.string;
        const t = guildId(section[8]).t;
        if (stateFromStores) {
          let stringResult = string(t["/eB9Bg"]);
        } else {
          stringResult = string(t.Q2gPWl);
        }
        let obj = guildId(section[5]);
        return jsx(guildId(section[10]).Button, {
          text: stringResult,
          icon: jsx(guildId(section[9]).VoiceNormalIcon, { size: "sm" }),
          onPress: callback,
          variant: "secondary",
          size: "sm",
        });
      },
);
