// discord_app/modules/voice_panel/native/prejoin/VoicePanelGamesSection.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl3 from "../../../../intl/index.native.tsx";
import TableRow2 from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import useGame from "../../../games/hooks/useGame.tsx";
import GameProfileAnalyticUtils from "../../../game_profile/GameProfileAnalyticUtils.tsx";
import useOpenGameProfileModalDefault from "../../../game_profile/hooks/useOpenGameProfileModal.tsx";
import FormComponents from "../shared/FormComponents.tsx";
import VoiceChannelGamesExperimentDefault from "../../experiments/VoiceChannelGamesExperiment.tsx";
import GameActivityIconDefault from "../../../games/native/GameActivityIcon.tsx";
import useVoiceChannelGamesDefault from "../hooks/useVoiceChannelGames.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (gameId) => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(10);
      gameId = gameId.gameId;
      const obj2 = useGame;
      const data = obj2.useGame(gameId).data;
      if (cResult[0] !== gameId) {
        const obj3 = { gameId, source: GameProfileAnalyticUtils.GameProfileSources.VoiceChannelGames };
        cResult[0] = gameId;
        cResult[1] = obj3;
        tmp4 = obj3;
      } else {
        tmp4 = cResult[1];
      }
      const tmp6 = useOpenGameProfileModalDefault(tmp4);
      let closure_0 = tmp6;
      if (null == data) {
        return null;
      } else {
        let name;
        let tmp11;
        let tmp16;
        let tmp15;
        if (cResult[2] === data) {
          let tmp7;
          let tmp8;
          if (cResult[3] === tmp6) {
            tmp7 = cResult[4];
            tmp8 = cResult[5];
          }
          const _Symbol2 = Symbol;
          if (tmp8 !== Symbol.for("react.early_return_sentinel")) {
            tmp7 = tmp8;
          }
          return tmp7;
        }
        const _Symbol = Symbol;
        const forResult = Symbol.for("react.early_return_sentinel");
        if ("" !== data.name) {
          name = data.name;
        } else {
          const intl = intl3.intl;
          name = intl.string(intl3.t.GIWFlF);
        }
        if (cResult[6] !== data) {
          const tmp13 = jsx(GameActivityIconDefault, { game: data, size: 32, fallback: "placeholder" });
          cResult[6] = data;
          cResult[7] = tmp13;
          tmp11 = tmp13;
        } else {
          tmp11 = cResult[7];
        }
        if (null != tmp6) {
          let tmp17;
          if (cResult[8] !== tmp6) {
            const fn = function v() {
              return closure_0();
            };
            cResult[8] = tmp6;
            cResult[9] = fn;
            tmp17 = fn;
          } else {
            tmp17 = cResult[9];
          }
          const TableRow = TableRow2.TableRow;
          const intl2 = intl3.intl;
          const obj6 = { gameName: name };
          tmp16 = (
            <TableRow
              icon={tmp11}
              label={name}
              arrow
              onPress={tmp17}
              accessibilityRole="button"
              accessibilityLabel={intl2.formatToPlainString(intl3.t["9sZWVp"], obj6)}
            />
          );
          tmp15 = forResult;
        } else {
          tmp15 = jsx(TableRow2.TableRow, { icon: tmp11, label: name, disabled: true });
        }
        cResult[2] = data;
        cResult[3] = tmp6;
        cResult[4] = tmp16;
        cResult[5] = tmp15;
        tmp8 = tmp15;
        tmp7 = tmp16;
      }
    }
  : (gameId) => {
      let intl2;
      let obj6;
      gameId = gameId.gameId;
      const obj = useGame;
      const data = obj.useGame(gameId).data;
      const obj2 = { gameId, source: GameProfileAnalyticUtils.GameProfileSources.VoiceChannelGames };
      const tmp4 = useOpenGameProfileModalDefault;
      const tmp4Result = tmp4(obj2);
      let closure_0 = tmp4Result;
      if (null == data) {
        return null;
      } else {
        let name;
        let obj5;
        if ("" !== data.name) {
          name = data.name;
        } else {
          const intl = intl3.intl;
          name = intl.string(intl3.t.GIWFlF);
        }
        const tmp7 = jsx(GameActivityIconDefault, { game: data, size: 32, fallback: "placeholder" });
        const TableRow = TableRow2.TableRow;
        if (null == tmp4Result) {
          obj5 = { icon: tmp7, label: name, disabled: true };
          const obj4 = { icon: tmp7, label: name, disabled: true };
        } else {
          obj5 = {
            icon: tmp7,
            label: name,
            arrow: true,
            onPress() {
              return closure_0();
            },
            accessibilityRole: "button",
            accessibilityLabel: intl2.formatToPlainString(intl3.t["9sZWVp"], obj6),
          };
          intl2 = intl3.intl;
          obj6 = { gameName: name };
        }
        return <TableRow {...obj5} />;
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let guildId;
        let members;
        const obj = react2;
        const cResult = obj.c(6);
        ({ members, guildId } = arg0);
        const tmp4 = VoiceChannelGamesExperimentDefault("voice_pre_join_games_section");
        const arr = useVoiceChannelGamesDefault(members, guildId, tmp4);
        if (tmp4) {
          if (0 !== arr.length) {
            let first;
            let tmp7;
            let tmp10;
            const _Symbol2 = Symbol;
            if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = intl3.intl;
              const stringResult = intl.string(intl3.t.crRMpG);
              cResult[0] = stringResult;
              first = stringResult;
            } else {
              first = cResult[0];
            }
            if (cResult[1] !== arr) {
              let tmp8;
              const _Symbol = Symbol;
              if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
                const fn = function s(gameId) {
                  return <closure_1_4 key={gameId} gameId={gameId} />;
                };
                cResult[3] = fn;
                tmp8 = fn;
              } else {
                tmp8 = cResult[3];
              }
              const mapped = arr.map(tmp8);
              cResult[1] = arr;
              cResult[2] = mapped;
              tmp7 = mapped;
            } else {
              tmp7 = cResult[2];
            }
            if (cResult[4] !== tmp7) {
              const tmp12 = jsx(FormComponents.VoicePanelFormSection, { title: first, hasIcons: true, children: tmp7 });
              cResult[4] = tmp7;
              cResult[5] = tmp12;
              tmp10 = tmp12;
            } else {
              tmp10 = cResult[5];
            }
            return tmp10;
          }
        }
        return null;
      }
    : (arg0) => {
        let guildId;
        let members;
        ({ members, guildId } = arg0);
        const tmp2 = VoiceChannelGamesExperimentDefault("voice_pre_join_games_section");
        const arr = useVoiceChannelGamesDefault(members, guildId, tmp2);
        let tmp3 = null;
        if (tmp2) {
          tmp3 = null;
          if (0 !== arr.length) {
            const VoicePanelFormSection = FormComponents.VoicePanelFormSection;
            const intl = intl3.intl;
            tmp3 = (
              <VoicePanelFormSection title={intl.string(intl3.t.crRMpG)} hasIcons>
                {arr.map((gameId) => (
                  <closure_1_4 key={gameId} gameId={gameId} />
                ))}
              </VoicePanelFormSection>
            );
          }
        }
        return tmp3;
      },
);
const result = size.fileFinishedImporting("modules/voice_panel/native/prejoin/VoicePanelGamesSection.tsx");

export default memoResult;
