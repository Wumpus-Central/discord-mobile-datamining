// discord_app/modules/icymi/native/custom_scores/ICYMICustomScoresOverviewScreen.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import react_mod from "../../../../../_runtime/00019_react.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import SortedGuildStore from "../../../../stores/SortedGuildStore.tsx";
import ICYMIStore from "../../ICYMIStore.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_0, navigation, obj1, obj5, tmp;

let obj2;
let react = react_mod;
const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  paddingHorizontal: nativeDefault.space.PX_12,
};
let closure_9 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (navigation) => {
      let customGuildScores;
      let flattenedGuildIds;
      let guilds;
      let stateFromStores2;
      let tmp11;
      let tmp12;
      let tmp4;
      let tmp5;
      let tmp8;
      let tmp9;
      let obj = navigation(stateFromStores2[9]);
      const cResult = obj.c(28);
      navigation = navigation.navigation;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        const fn = function b() {
          return guilds.getGuilds();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      let tmpResult = tmp(tmp2[10]);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SortedGuildStore];
        const fn2 = function p() {
          return flattenedGuildIds.getFlattenedGuildIds();
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        tmp9 = fn2;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult3 = navigation(stateFromStores2[10]);
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp9);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [ICYMIStore];
        class T {
          constructor() {
            return customGuildScores.getCustomGuildScores();
          }
        }
        cResult[4] = items2;
        cResult[5] = T;
        tmp12 = T;
        tmp11 = items2;
      } else {
        tmp11 = cResult[4];
        tmp12 = cResult[5];
      }
      const tmpResult4 = navigation(stateFromStores2[10]);
      stateFromStores2 = tmpResult4.useStateFromStores(tmp11, tmp12);
      if (cResult[6] === stateFromStores1) {
        let arr5;
        let tmp20;
        let tmp21;
        let tmp22;
        if (cResult[7] === stateFromStores) {
          arr5 = cResult[8];
        }
        const tmp18 = closure_9();
        class T {
          constructor() {
            return customGuildScores.getCustomGuildScores();
          }
        }
        const bottom = stateFromStores(tmp2[11])().bottom;
        if (cResult[11] !== navigation) {
          const fn3 = function y(guildId) {
            const obj = { guildId };
            return navigation.navigate("guild", obj);
          };
          cResult[11] = navigation;
          class T {
            constructor() {
              return customGuildScores.getCustomGuildScores();
            }
          }
          cResult[12] = fn3;
          tmp20 = fn3;
        } else {
          tmp20 = cResult[12];
        }
        let closure_3 = tmp20;
        const container = tmp18.container;
        if (cResult[13] !== bottom) {
          const rect = { bottom, top: tmp19(stateFromStores2[7]).space.PX_12 };
          class T {
            constructor() {
              return customGuildScores.getCustomGuildScores();
            }
          }
          cResult[13] = bottom;
          cResult[14] = rect;
          tmp21 = rect;
        } else {
          tmp21 = cResult[14];
        }
        if (cResult[15] === stateFromStores2) {
          if (cResult[16] === arr5) {
            let tmp25;
            if (cResult[17] === tmp20) {
              tmp22 = cResult[18];
            }
            if (cResult[22] !== tmp22) {
              const obj2 = { hasIcons: true, children: tmp22 };
              class T {
                constructor() {
                  return customGuildScores.getCustomGuildScores();
                }
              }
              cResult[22] = tmp22;
              cResult[23] = tmp27;
              tmp25 = tmp27;
            } else {
              tmp25 = cResult[23];
            }
            if (cResult[24] === tmp18.container) {
              if (cResult[25] === tmp21) {
                let tmp28;
                if (cResult[26] === tmp25) {
                  tmp28 = cResult[27];
                }
                return tmp28;
              }
            }
            class T {
              constructor() {
                return customGuildScores.getCustomGuildScores();
              }
            }
            const tmp30 = (
              <ScrollView showsVerticalScrollIndicator={false} style={container} contentInset={tmp21}>
                {tmp25}
              </ScrollView>
            );
            class O {
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
                  label: null,
                  trailing: null,
                  arrow: true,
                };
                TableRow = navigation(closure_2[12]).TableRow;
                obj1 = { guild: navigation };
                obj.icon = closure_1_8(closure_1(closure_2[13]), obj1);
                obj.label = navigation.name;
                tmpResult = undefined;
                if (null != closure_2[navigation.id]) {
                  tmp2Result = tmp2(tmp3[14]);
                  numberToCustomScoreResult = tmp2Result.numberToCustomScore(tmp4[navigation.id]);
                  if (numberToCustomScoreResult === tmp2(tmp3[14]).ICYMICustomScore.MUTED) {
                    obj5 = { text: null };
                    TrailingText = tmp2(tmp3[12]).TableRow.TrailingText;
                    intl = tmp2(tmp3[15]).intl;
                    obj5.text = intl.string(tmp2(tmp3[15]).t.lhPHmz);
                    tmpResult = tmp(TrailingText, obj5);
                  }
                }
                obj.trailing = tmpResult;
                return tmp(TableRow, obj, navigation.id);
              }
            }
            cResult[25] = tmp21;
            cResult[26] = tmp25;
            cResult[27] = tmp30;
            tmp28 = tmp30;
          }
        }
        if (cResult[19] === stateFromStores2) {
          let tmp23;
          if (cResult[20] === tmp20) {
            tmp23 = cResult[21];
          }
          const mapped = arr5.map(tmp23);
          class T {
            constructor() {
              return customGuildScores.getCustomGuildScores();
            }
          }
          cResult[16] = arr5;
          cResult[17] = tmp20;
          cResult[18] = mapped;
          tmp22 = mapped;
        }
        class O {
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
              label: null,
              trailing: null,
              arrow: true,
            };
            TableRow = navigation(closure_2[12]).TableRow;
            obj1 = { guild: navigation };
            obj.icon = closure_1_8(closure_1(closure_2[13]), obj1);
            obj.label = navigation.name;
            tmpResult = undefined;
            if (null != closure_2[navigation.id]) {
              tmp2Result = tmp2(tmp3[14]);
              numberToCustomScoreResult = tmp2Result.numberToCustomScore(tmp4[navigation.id]);
              if (numberToCustomScoreResult === tmp2(tmp3[14]).ICYMICustomScore.MUTED) {
                obj5 = { text: null };
                TrailingText = tmp2(tmp3[12]).TableRow.TrailingText;
                intl = tmp2(tmp3[15]).intl;
                obj5.text = intl.string(tmp2(tmp3[15]).t.lhPHmz);
                tmpResult = tmp(TrailingText, obj5);
              }
            }
            obj.trailing = tmpResult;
            return tmp(TableRow, obj, navigation.id);
          }
        }
        cResult[19] = stateFromStores2;
        cResult[20] = tmp20;
        cResult[21] = O;
        tmp23 = O;
      }
      if (cResult[9] !== stateFromStores) {
        class F {
          constructor(arg0) {
            return stateFromStores[arg0];
          }
        }
        cResult[9] = stateFromStores;
        class T {
          constructor() {
            return customGuildScores.getCustomGuildScores();
          }
        }
        cResult[10] = F;
      } else {
        class F {
          constructor(arg0) {
            return stateFromStores[arg0];
          }
        }
      }
      const mapped1 = stateFromStores1.map(F);
      cResult[6] = stateFromStores1;
      cResult[7] = stateFromStores;
      cResult[8] = mapped1;
      arr5 = mapped1;
    }
  : (navigation) => {
      let closure_3;
      let customGuildScores;
      let flattenedGuildIds;
      let guilds;
      navigation = navigation.navigation;
      let stateFromStores1;
      let obj = navigation(stateFromStores1[10]);
      const items = [GuildStore];
      const stateFromStores = obj.useStateFromStores(items, () => guilds.getGuilds());
      const obj2 = navigation(stateFromStores1[10]);
      const items1 = [SortedGuildStore];
      stateFromStores1 = obj2.useStateFromStores(items1, () => flattenedGuildIds.getFlattenedGuildIds());
      const items2 = [ICYMIStore];
      const obj3 = navigation(stateFromStores1[10]);
      react = obj3.useStateFromStores(items2, () => customGuildScores.getCustomGuildScores());
      const items3 = [stateFromStores1, stateFromStores];
      const memo = react.useMemo(() => stateFromStores1.map((item) => stateFromStores[item]), items3);
      const items4 = [navigation];
      const tmp3 = closure_9();
      const bottom = stateFromStores(stateFromStores1[11])().bottom;
      let closure_4 = react.useCallback((guildId) => {
        const obj = { guildId };
        return navigation.navigate("guild", obj);
      }, items4);
      const rect = { bottom, top: stateFromStores(stateFromStores1[7]).space.PX_12 };
      ({
        hasIcons: true,
        children: memo.map((guild) => {
          const TableRow = navigation(stateFromStores1[12]).TableRow;
          let tmpResult;
          if (null != closure_3[guild.id]) {
            const tmp2Result = navigation(stateFromStores1[14]);
            const numberToCustomScoreResult = tmp2Result.numberToCustomScore(tmp4[guild.id]);
            if (numberToCustomScoreResult === navigation(stateFromStores1[14]).ICYMICustomScore.MUTED) {
              const TrailingText = navigation(stateFromStores1[12]).TableRow.TrailingText;
              const intl = navigation(stateFromStores1[15]).intl;
              tmpResult = <TrailingText text={intl.string(navigation(stateFromStores1[15]).t.lhPHmz)} />;
            }
          }
          return (
            <TableRow
              key={guild.id}
              onPress={function onPress() {
                return closure_4(guild.id);
              }}
              icon={null}
              label={guild.name}
              trailing={tmpResult}
              arrow
            />
          );
        }),
      });
      const TableRowGroup = navigation(stateFromStores1[16]).TableRowGroup;
      return (
        <closure_4 showsVerticalScrollIndicator={false} style={tmp3.container} contentInset={rect}>
          {null}
        </closure_4>
      );
    };
const result = size.fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresOverviewScreen.tsx");

export default tmp2;
