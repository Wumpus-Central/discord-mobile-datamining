// discord_app/modules/icymi/native/custom_scores/ICYMICustomScoresOverviewScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import SortedGuildStore from "../../../../stores/SortedGuildStore.tsx";
import ICYMIStore from "../../ICYMIStore.tsx";

const require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = {
  container: {
    flex: 1,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    paddingHorizontal: nativeDefault.space.PX_12,
  },
};
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  paddingHorizontal: nativeDefault.space.PX_12,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresOverviewScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ICYMICustomScoresOverviewScreen(navigation) {
      const cResult = navigation(stateFromStores2[9]).c(28);
      navigation = navigation.navigation;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        const fn = function v() {
          return guilds.getGuilds();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      let obj = navigation(stateFromStores2[9]);
      const stateFromStores = navigation(stateFromStores2[10]).useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SortedGuildStore];
        const fn2 = function _() {
          return flattenedGuildIds.getFlattenedGuildIds();
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        let tmp9 = fn2;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      let tmpResult = navigation(stateFromStores2[10]);
      const stateFromStores1 = navigation(stateFromStores2[10]).useStateFromStores(tmp8, tmp9);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [ICYMIStore];
        const fn3 = function w() {
          return customGuildScores.getCustomGuildScores();
        };
        cResult[4] = items2;
        cResult[5] = fn3;
        let tmp12 = fn3;
        let tmp11 = items2;
      } else {
        tmp11 = cResult[4];
        tmp12 = cResult[5];
      }
      const tmpResult3 = navigation(stateFromStores2[10]);
      stateFromStores2 = navigation(stateFromStores2[10]).useStateFromStores(tmp11, tmp12);
      if (cResult[6] === stateFromStores1) {
        if (cResult[7] === stateFromStores) {
          const bottom = stateFromStores(tmp2[11])().bottom;
          if (cResult[11] !== navigation) {
            class M {
              constructor(arg0) {
                obj = { guildId: navigation };
                return navigation.navigate("guild", obj);
              }
            }
            cResult[11] = navigation;
            cResult[12] = M;
          } else {
            class M {
              constructor(arg0) {
                obj = { guildId: navigation };
                return navigation.navigate("guild", obj);
              }
            }
          }
          closure_3 = M;
          const container = closure_9().container;
          if (cResult[13] !== bottom) {
            class M {
              constructor(arg0) {
                obj = { guildId: navigation };
                return navigation.navigate("guild", obj);
              }
            }
            tmp22[0] = bottom;
            tmp22[1] = tmp19(tmp2[7]).space.PX_12;
            cResult[13] = bottom;
            cResult[14] = tmp22;
          } else {
            class M {
              constructor(arg0) {
                obj = { guildId: navigation };
                return navigation.navigate("guild", obj);
              }
            }
          }
          if (cResult[15] === stateFromStores2) {
            class M {
              constructor(arg0) {
                obj = { guildId: navigation };
                return navigation.navigate("guild", obj);
              }
            }
          }
          if (cResult[19] === stateFromStores2) {
            class M {
              constructor(arg0) {
                obj = { guildId: navigation };
                return navigation.navigate("guild", obj);
              }
            }
            const mapped = arr5.map(Y);
            cResult[15] = stateFromStores2;
            cResult[16] = arr5;
            cResult[17] = M;
            cResult[18] = mapped;
          }
          class Y {
            constructor(arg0) {
              closure_0 = navigation;
              tmp = closure_1_8;
              tmp2 = navigation;
              tmp3 = closure_2;
              obj = {
                onPress() {
                  return closure_3(guild.id);
                },
                icon: null,
                label: navigation.name,
                trailing: null,
                arrow: true,
              };
              obj1 = { guild: navigation };
              obj.icon = closure_1_8(closure_1(closure_2[13]), obj1);
              tmpResult = undefined;
              if (null != closure_2[navigation.id]) {
                tmp2Result = tmp2(tmp3[14]);
                numberToCustomScoreResult = tmp2Result.numberToCustomScore(tmp4[navigation.id]);
                if (numberToCustomScoreResult === tmp2(tmp3[14]).ICYMICustomScore.MUTED) {
                  obj5 = { text: null };
                  intl = tmp2(tmp3[15]).intl;
                  obj5.text = intl.string(tmp2(tmp3[15]).t.lhPHmz);
                  tmpResult = tmp(tmp2(tmp3[12]).TableRow.TrailingText, obj5);
                }
              }
              obj.trailing = tmpResult;
              return tmp(navigation(closure_2[12]).TableRow, obj, navigation.id);
            }
          }
          cResult[19] = stateFromStores2;
          cResult[20] = M;
          cResult[21] = Y;
          const tmp18 = closure_9();
          tmp19 = stateFromStores;
        }
      }
      if (cResult[9] !== stateFromStores) {
        class M {
          constructor(arg0) {
            obj = { guildId: navigation };
            return navigation.navigate("guild", obj);
          }
        }
        cResult[9] = stateFromStores;
        cResult[10] = F;
      } else {
        class M {
          constructor(arg0) {
            obj = { guildId: navigation };
            return navigation.navigate("guild", obj);
          }
        }
      }
      const mapped1 = stateFromStores1.map(F);
      cResult[6] = stateFromStores1;
      cResult[7] = stateFromStores;
      cResult[8] = mapped1;
      const tmpResult4 = navigation(stateFromStores2[10]);
    }
  : function ICYMICustomScoresOverviewScreen(navigation) {
      navigation = navigation.navigation;
      let stateFromStores1;
      const items = [GuildStore];
      const stateFromStores = navigation(stateFromStores1[10]).useStateFromStores(items, () => guilds.getGuilds());
      let obj = navigation(stateFromStores1[10]);
      const items1 = [SortedGuildStore];
      stateFromStores1 = navigation(stateFromStores1[10]).useStateFromStores(items1, () =>
        flattenedGuildIds.getFlattenedGuildIds(),
      );
      const obj2 = navigation(stateFromStores1[10]);
      const items2 = [ICYMIStore];
      noop = navigation(stateFromStores1[10]).useStateFromStores(items2, () =>
        customGuildScores.getCustomGuildScores(),
      );
      const items3 = [stateFromStores1, stateFromStores];
      const memo = noop.useMemo(() => stateFromStores1.map((item) => stateFromStores[item]), items3);
      let obj3 = navigation(stateFromStores1[10]);
      const items4 = [navigation];
      closure_4 = noop.useCallback((guildId) => navigation.navigate("guild", { guildId }), items4);
      const obj4 = {
        showsVerticalScrollIndicator: false,
        style: closure_9().container,
        contentInset: null,
        children: null,
      };
      const rect = {
        bottom: stateFromStores(stateFromStores1[11])().bottom,
        top: stateFromStores(stateFromStores1[7]).space.PX_12,
      };
      obj4.contentInset = rect;
      const tmp3 = closure_9();
      obj4.children = jsx(navigation(stateFromStores1[16]).TableRowGroup, {
        hasIcons: true,
        children: memo.map((guild) => {
          const obj = {
            onPress() {
              return closure_4(guild.id);
            },
            icon: jsx(stateFromStores(stateFromStores1[13]), { guild }),
            label: guild.name,
            trailing: null,
            arrow: true,
          };
          let tmpResult;
          if (null != closure_3[guild.id]) {
            const tmp2Result = navigation(stateFromStores1[14]);
            if (numberToCustomScoreResult === navigation(stateFromStores1[14]).ICYMICustomScore.MUTED) {
              const obj3 = { text: null };
              const intl = navigation(stateFromStores1[15]).intl;
              obj3.text = intl.string(navigation(stateFromStores1[15]).t.lhPHmz);
              tmpResult = jsx(navigation(stateFromStores1[12]).TableRow.TrailingText, { text: null });
            }
            numberToCustomScoreResult = navigation(stateFromStores1[14]).numberToCustomScore(tmp4[guild.id]);
          }
          obj.trailing = tmpResult;
          return jsx(
            navigation(stateFromStores1[12]).TableRow,
            {
              onPress() {
                return closure_4(guild.id);
              },
              icon: jsx(stateFromStores(stateFromStores1[13]), { guild }),
              label: guild.name,
              trailing: null,
              arrow: true,
            },
            guild.id,
          );
        }),
      });
      return (
        <closure_4 showsVerticalScrollIndicator={false} style={closure_9().container} contentInset={null}>
          {null}
        </closure_4>
      );
    };
