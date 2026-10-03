// discord_app/modules/voice_panel/native/prejoin/VoicePanelGamesSection.tsx
import c from "../../../../../_runtime/00576_c.js";
import useGame from "../../../games/hooks/useGame.tsx";
import useOpenGameProfileModalDefault from "../../../game_profile/hooks/useOpenGameProfileModal.tsx";
import FormComponents from "../shared/FormComponents.tsx";
import VoiceChannelGamesExperimentDefault from "../../experiments/VoiceChannelGamesExperiment.tsx";
import GameActivityIconDefault from "../../../games/native/GameActivityIcon.tsx";
import useVoiceChannelGamesDefault from "../hooks/useVoiceChannelGames.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const util = v9sZWVp(1126);
const TableRow = v9sZWVp(5993);
const GameProfileAnalyticUtils = v9sZWVp(8319);
require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (gameId) => {
      let v9sZWVp = require;
      let formatToPlainStringResult = dependencyMap;
      const cResult = c.c(10);
      gameId = gameId.gameId;
      const data = useGame.useGame(gameId).data;
      if (cResult[0] !== gameId) {
        const obj3 = { gameId, source: GameProfileAnalyticUtils.GameProfileSources.VoiceChannelGames };
        cResult[0] = gameId;
        cResult[1] = obj3;
        let tmp4 = obj3;
      } else {
        tmp4 = cResult[1];
      }
      const tmp6 = useOpenGameProfileModalDefault(tmp4);
      closure_0 = tmp6;
      if (null == data) {
        return null;
      } else {
        if (cResult[2] === data) {
          if (cResult[3] === tmp6) {
            let tmp7 = cResult[4];
            const _Symbol2 = Symbol;
            if (cResult[5] !== Symbol.for("react.early_return_sentinel")) {
              tmp7 = tmp8;
            }
            return tmp7;
          }
        }
        const _Symbol = Symbol;
        if ("" !== data.name) {
          let name = data.name;
        } else {
          const intl = util.intl;
          name = intl.string(util.t.GIWFlF);
        }
        if (cResult[6] !== data) {
          const obj4 = { game: data, size: 32, fallback: "placeholder" };
          const tmp12 = jsx(GameActivityIconDefault, { game: data, size: 32, fallback: "placeholder" });
          cResult[6] = data;
          cResult[7] = tmp12;
          let intl2 = tmp12;
        } else {
          intl2 = cResult[7];
        }
        if (null == tmp6) {
          const obj5 = { icon: intl2, label: name, disabled: true };
          const tmp14 = jsx(TableRow.TableRow, { icon: intl2, label: name, disabled: true });
          cResult[2] = data;
          cResult[3] = tmp6;
          cResult[4] = undefined;
          cResult[5] = tmp14;
        }
        if (cResult[8] !== tmp6) {
          const fn = function v() {
            return closure_0();
          };
          cResult[8] = tmp6;
          cResult[9] = fn;
          let tmp15 = fn;
        } else {
          tmp15 = cResult[9];
        }
        const obj6 = {
          icon: intl2,
          label: name,
          arrow: true,
          onPress: tmp15,
          accessibilityRole: "button",
          accessibilityLabel: null,
        };
        intl2 = util.intl;
        v9sZWVp = util.t["9sZWVp"];
        const obj7 = { gameName: name };
        formatToPlainStringResult = intl2.formatToPlainString(v9sZWVp, obj7);
        obj6.accessibilityLabel = formatToPlainStringResult;
        jsx(TableRow.TableRow, {
          icon: intl2,
          label: name,
          arrow: true,
          onPress: tmp15,
          accessibilityRole: "button",
          accessibilityLabel: null,
        });
        const forResult = Symbol.for("react.early_return_sentinel");
      }
    }
  : (gameId) => {
      gameId = gameId.gameId;
      const data = useGame.useGame(gameId).data;
      const obj2 = { gameId, source: null };
      obj2.source = GameProfileAnalyticUtils.GameProfileSources.VoiceChannelGames;
      const tmp4Result = useOpenGameProfileModalDefault(obj2);
      closure_0 = tmp4Result;
      if (null == data) {
        return null;
      } else {
        if ("" !== data.name) {
          let name = data.name;
        } else {
          const intl = util.intl;
          name = intl.string(util.t.GIWFlF);
        }
        const obj3 = { game: data, size: 32, fallback: "placeholder" };
        const tmp7 = jsx(GameActivityIconDefault, { game: data, size: 32, fallback: "placeholder" });
        if (null == tmp4Result) {
          const obj4 = { icon: tmp7, label: name, disabled: true };
          let obj5 = obj4;
        } else {
          obj5 = {
            icon: tmp7,
            label: name,
            arrow: true,
            onPress() {
              return closure_0();
            },
            accessibilityRole: "button",
            accessibilityLabel: null,
          };
          const intl2 = util.intl;
          const obj6 = { gameName: name };
          obj5.accessibilityLabel = intl2.formatToPlainString(util.t["9sZWVp"], obj6);
        }
        return jsx(TableRow.TableRow, obj5);
      }
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/prejoin/VoicePanelGamesSection.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(6);
        ({ members, guildId } = arg0);
        const tmp4 = VoiceChannelGamesExperimentDefault("voice_pre_join_games_section");
        const arr = useVoiceChannelGamesDefault(members, guildId, tmp4);
        if (tmp4) {
          if (0 !== arr.length) {
            const _Symbol2 = Symbol;
            if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = util.intl;
              const stringResult = intl.string(util.t.crRMpG);
              cResult[0] = stringResult;
              let first = stringResult;
            } else {
              first = cResult[0];
            }
            if (cResult[1] !== arr) {
              const _Symbol = Symbol;
              if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
                const fn = function s(gameId) {
                  return <closure_1_4 key={gameId} gameId={gameId} />;
                };
                cResult[3] = fn;
                let tmp8 = fn;
              } else {
                tmp8 = cResult[3];
              }
              const mapped = arr.map(tmp8);
              cResult[1] = arr;
              cResult[2] = mapped;
            } else {
              if (cResult[4] !== cResult[2]) {
                const obj2 = { title: first, hasIcons: true, children: tmp7 };
                const tmp13 = jsx(FormComponents.VoicePanelFormSection, {
                  title: first,
                  hasIcons: true,
                  children: tmp7,
                });
                cResult[4] = tmp7;
                cResult[5] = tmp13;
                let tmp11 = tmp13;
              } else {
                tmp11 = cResult[5];
              }
              return tmp11;
            }
          }
        }
        return null;
      }
    : (arg0) => {
        ({ members, guildId } = arg0);
        const tmp2 = VoiceChannelGamesExperimentDefault("voice_pre_join_games_section");
        const arr = useVoiceChannelGamesDefault(members, guildId, tmp2);
        let tmp3 = null;
        if (tmp2) {
          tmp3 = null;
          if (0 !== arr.length) {
            const obj = { title: null, hasIcons: true, children: null };
            const intl = util.intl;
            obj.title = intl.string(util.t.crRMpG);
            obj.children = arr.map((gameId) => <closure_1_4 key={gameId} gameId={gameId} />);
            tmp3 = jsx(FormComponents.VoicePanelFormSection, { title: null, hasIcons: true, children: null });
          }
        }
        return tmp3;
      },
);
