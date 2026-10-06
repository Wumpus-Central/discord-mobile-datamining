// discord_app/modules/guilds_bar/native/GuildsBarItemUnavailableGuilds.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../intl/index.native.tsx";
import AlertActionCreatorsDefault from "../../../actions/AlertActionCreators.tsx";
import AssetRegistryDefault from "../../../../_runtime/16322_AssetRegistry.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import GuildAvailabilityStore from "../../../stores/GuildAvailabilityStore.tsx";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let obj2;
let size;
({ Image: c3, Pressable: closure_4 } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { unavailableGuilds: obj2, unavailableGuildsIcon: size };
obj2 = {
  marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING,
  justifyContent: "center",
  alignItems: "center",
};
createStyles = createStyles.createStyles;
size = {
  width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE,
  height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE,
};
let closure_7 = createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let stateFromStores;
        let tmp5;
        let tmp6;
        const tmp = stateFromStores;
        let obj = stateFromStores(576);
        const cResult = obj.c(13);
        const tmp4 = closure_7();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [GuildAvailabilityStore];
          const fn = function t() {
            return GuildAvailabilityStore.totalUnavailableGuilds;
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp5 = items;
          tmp6 = fn;
        } else {
          [tmp5, tmp6] = cResult;
        }
        const tmpResult = tmp(504);
        stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
        if (stateFromStores > 0) {
          let tmp9;
          if (cResult[2] !== stateFromStores) {
            let intl = tmp(1126).intl;
            let obj2 = { count: stateFromStores };
            const formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t["MEpX+2"], obj2);
            cResult[2] = stateFromStores;
            cResult[3] = formatToPlainStringResult;
            tmp9 = formatToPlainStringResult;
          } else {
            tmp9 = cResult[3];
          }
          if (cResult[4] !== stateFromStores) {
            class I {
              constructor() {
                let intl;
                let intl2;
                let obj2;
                const obj = { title: intl.string(intl3.t.R0RpRX), body: intl2.format(intl3.t["TnH05/"], obj2) };
                const show = AlertActionCreatorsDefault.show;
                AlertActionCreatorsDefault;
                intl = intl3.intl;
                intl2 = intl3.intl;
                obj2 = { count: stateFromStores };
                show(obj);
              }
            }
            cResult[4] = stateFromStores;
            cResult[5] = I;
          } else {
            class I {
              constructor() {
                let intl;
                let intl2;
                let obj2;
                const obj = { title: intl.string(intl3.t.R0RpRX), body: intl2.format(intl3.t["TnH05/"], obj2) };
                const show = AlertActionCreatorsDefault.show;
                AlertActionCreatorsDefault;
                intl = intl3.intl;
                intl2 = intl3.intl;
                obj2 = { count: stateFromStores };
                show(obj);
              }
            }
          }
          if (cResult[6] !== tmp4.unavailableGuildsIcon) {
            class I {
              constructor() {
                let intl;
                let intl2;
                let obj2;
                const obj = { title: intl.string(intl3.t.R0RpRX), body: intl2.format(intl3.t["TnH05/"], obj2) };
                const show = AlertActionCreatorsDefault.show;
                AlertActionCreatorsDefault;
                intl = intl3.intl;
                intl2 = intl3.intl;
                obj2 = { count: stateFromStores };
                show(obj);
              }
            }
            const tmp15 = <closure_3 style={tmp4.unavailableGuildsIcon} source={AssetRegistryDefault} />;
            cResult[6] = tmp4.unavailableGuildsIcon;
            cResult[7] = tmp15;
          } else {
            class I {
              constructor() {
                let intl;
                let intl2;
                let obj2;
                const obj = { title: intl.string(intl3.t.R0RpRX), body: intl2.format(intl3.t["TnH05/"], obj2) };
                const show = AlertActionCreatorsDefault.show;
                AlertActionCreatorsDefault;
                intl = intl3.intl;
                intl2 = intl3.intl;
                obj2 = { count: stateFromStores };
                show(obj);
              }
            }
          }
          if (cResult[8] === tmp4.unavailableGuilds) {
            class I {
              constructor() {
                let intl;
                let intl2;
                let obj2;
                const obj = { title: intl.string(intl3.t.R0RpRX), body: intl2.format(intl3.t["TnH05/"], obj2) };
                const show = AlertActionCreatorsDefault.show;
                AlertActionCreatorsDefault;
                intl = intl3.intl;
                intl2 = intl3.intl;
                obj2 = { count: stateFromStores };
                show(obj);
              }
            }
          }
          const tmp19 = (
            <closure_4 accessibilityRole="button" accessibilityLabel={tmp9} onPress={I} style={tmp4.unavailableGuilds}>
              {tmp12}
            </closure_4>
          );
          cResult[8] = tmp4.unavailableGuilds;
          cResult[9] = tmp9;
          cResult[10] = I;
          cResult[11] = tmp12;
          cResult[12] = tmp19;
        }
        return null;
      }
    : () => {
        let stateFromStores;
        const tmp = closure_7();
        let obj = stateFromStores(504);
        const items = [GuildAvailabilityStore];
        stateFromStores = obj.useStateFromStores(items, () => GuildAvailabilityStore.totalUnavailableGuilds);
        let tmp5 = null;
        if (stateFromStores > 0) {
          let intl = tmp2(1126).intl;
          const obj3 = { count: stateFromStores };
          ({ style: tmp.unavailableGuildsIcon, source: AssetRegistryDefault });
          tmp5 = (
            <closure_4
              accessibilityRole="button"
              accessibilityLabel={intl.formatToPlainString(stateFromStores(1126).t["MEpX+2"], obj3)}
              onPress={function onPress() {
                let intl;
                let intl2;
                let obj2;
                const obj = { title: intl.string(intl3.t.R0RpRX), body: intl2.format(intl3.t["TnH05/"], obj2) };
                const show = AlertActionCreatorsDefault.show;
                AlertActionCreatorsDefault;
                intl = intl3.intl;
                intl2 = intl3.intl;
                obj2 = { count: stateFromStores };
                show(obj);
              }}
              style={tmp.unavailableGuilds}
            >
              {null}
            </closure_4>
          );
        }
        return tmp5;
      },
);
size = size_mod;
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarItemUnavailableGuilds.tsx");

export default memoResult;
