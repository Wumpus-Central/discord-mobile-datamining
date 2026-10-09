// discord_app/modules/guilds_bar/native/GuildsBarItemUnavailableGuilds.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AlertActionCreatorsDefault from "../../../actions/AlertActionCreators.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _modDef16705 from "../../../../_runtime/metro/16705__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildAvailabilityStore from "../../../stores/GuildAvailabilityStore.tsx";

require = fn;
const Pressable = fn(17).Pressable;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj = {
  unavailableGuilds: {
    marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING,
    justifyContent: "center",
    alignItems: "center",
  },
  unavailableGuildsIcon: null,
};
let size = {
  width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE,
  height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE,
};
obj.unavailableGuildsIcon = size;
let closure_6 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = {
  marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING,
  justifyContent: "center",
  alignItems: "center",
};
size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarItemUnavailableGuilds.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function GuildsBarItemUnavailableGuilds() {
        const cResult = stateFromStores(576).c(13);
        let unavailableGuilds = closure_6();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [GuildAvailabilityStore];
          const fn = function o() {
            return GuildAvailabilityStore.totalUnavailableGuilds;
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp4 = items;
          tmp5 = fn;
        } else {
          [tmp4, tmp5] = cResult;
        }
        const obj = stateFromStores(576);
        stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
        if (stateFromStores <= 0) {
          return null;
        } else {
          if (cResult[2] !== stateFromStores) {
            let intl = tmp(1126).intl;
            let obj2 = { count: stateFromStores };
            const formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t["MEpX+2"], obj2);
            cResult[2] = stateFromStores;
            cResult[3] = formatToPlainStringResult;
            let tmp8 = formatToPlainStringResult;
          } else {
            tmp8 = cResult[3];
          }
          if (cResult[4] !== stateFromStores) {
            class G {
              constructor() {
                obj = closure_1(closure_2[6]);
                obj1 = { title: null, body: null };
                intl = closure_0(closure_2[7]).intl;
                obj1.title = intl.string(closure_0(closure_2[7]).t.R0RpRX);
                intl2 = closure_0(closure_2[7]).intl;
                obj4 = { count: closure_0 };
                obj1.body = intl2.format(closure_0(closure_2[7]).t["TnH05/"], obj4);
                showResult = obj.show(obj1);
                return;
              }
            }
            cResult[4] = stateFromStores;
            cResult[5] = G;
          } else {
            class G {
              constructor() {
                obj = closure_1(closure_2[6]);
                obj1 = { title: null, body: null };
                intl = closure_0(closure_2[7]).intl;
                obj1.title = intl.string(closure_0(closure_2[7]).t.R0RpRX);
                intl2 = closure_0(closure_2[7]).intl;
                obj4 = { count: closure_0 };
                obj1.body = intl2.format(closure_0(closure_2[7]).t["TnH05/"], obj4);
                showResult = obj.show(obj1);
                return;
              }
            }
          }
          if (cResult[6] !== unavailableGuilds.unavailableGuildsIcon) {
            class G {
              constructor() {
                obj = closure_1(closure_2[6]);
                obj1 = { title: null, body: null };
                intl = closure_0(closure_2[7]).intl;
                obj1.title = intl.string(closure_0(closure_2[7]).t.R0RpRX);
                intl2 = closure_0(closure_2[7]).intl;
                obj4 = { count: closure_0 };
                obj1.body = intl2.format(closure_0(closure_2[7]).t["TnH05/"], obj4);
                showResult = obj.show(obj1);
                return;
              }
            }
            const obj3 = { style: unavailableGuilds.unavailableGuildsIcon, source: _modDef16705 };
            const tmp14 = jsx(FastImageDefault, {
              style: unavailableGuilds.unavailableGuildsIcon,
              source: _modDef16705,
            });
            cResult[6] = unavailableGuilds.unavailableGuildsIcon;
            cResult[7] = tmp14;
          } else {
            class G {
              constructor() {
                obj = closure_1(closure_2[6]);
                obj1 = { title: null, body: null };
                intl = closure_0(closure_2[7]).intl;
                obj1.title = intl.string(closure_0(closure_2[7]).t.R0RpRX);
                intl2 = closure_0(closure_2[7]).intl;
                obj4 = { count: closure_0 };
                obj1.body = intl2.format(closure_0(closure_2[7]).t["TnH05/"], obj4);
                showResult = obj.show(obj1);
                return;
              }
            }
          }
          if (cResult[8] === unavailableGuilds.unavailableGuilds) {
            class G {
              constructor() {
                obj = closure_1(closure_2[6]);
                obj1 = { title: null, body: null };
                intl = closure_0(closure_2[7]).intl;
                obj1.title = intl.string(closure_0(closure_2[7]).t.R0RpRX);
                intl2 = closure_0(closure_2[7]).intl;
                obj4 = { count: closure_0 };
                obj1.body = intl2.format(closure_0(closure_2[7]).t["TnH05/"], obj4);
                showResult = obj.show(obj1);
                return;
              }
            }
          }
          const obj4 = {
            accessibilityRole: "button",
            accessibilityLabel: tmp8,
            onPress: G,
            style: unavailableGuilds.unavailableGuilds,
            children: tmp11,
          };
          const tmp18 = (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={tmp8}
              onPress={G}
              style={unavailableGuilds.unavailableGuilds}
            >
              {tmp11}
            </Pressable>
          );
          unavailableGuilds = unavailableGuilds.unavailableGuilds;
          cResult[8] = unavailableGuilds;
          cResult[9] = tmp8;
          cResult[10] = G;
          cResult[11] = tmp11;
          cResult[12] = tmp18;
        }
        const tmpResult = stateFromStores(504);
      }
    : function GuildsBarItemUnavailableGuilds() {
        const tmp = closure_6();
        const items = [GuildAvailabilityStore];
        stateFromStores = stateFromStores(504).useStateFromStores(
          items,
          () => GuildAvailabilityStore.totalUnavailableGuilds,
        );
        let tmp5 = null;
        if (stateFromStores > 0) {
          let obj2 = {
            accessibilityRole: "button",
            accessibilityLabel: null,
            onPress: null,
            style: null,
            children: null,
          };
          let intl = tmp2(1126).intl;
          const obj3 = { count: stateFromStores };
          obj2.accessibilityLabel = intl.formatToPlainString(tmp2(1126).t["MEpX+2"], obj3);
          obj2.onPress = function onPress() {
            const obj2 = { title: null, body: null };
            const intl = util.intl;
            obj2.title = intl.string(util.t.R0RpRX);
            const intl2 = util.intl;
            obj2.body = intl2.format(util.t["TnH05/"], { count: stateFromStores });
            AlertActionCreatorsDefault.show(obj2);
          };
          obj2.style = tmp.unavailableGuilds;
          const obj4 = { style: tmp.unavailableGuildsIcon, source: _modDef16705 };
          obj2.children = jsx(FastImageDefault, { style: tmp.unavailableGuildsIcon, source: _modDef16705 });
          tmp5 = (
            <Pressable accessibilityRole="button" accessibilityLabel={null} onPress={null} style={null}>
              {null}
            </Pressable>
          );
        }
        return tmp5;
      },
);
