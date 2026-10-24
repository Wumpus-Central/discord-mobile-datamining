// discord_app/modules/orbs_arcade/native/OrbsArcadeQuestHomeSection.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import SkeletonCardDefault from "../../collectibles/native/SkeletonCard.tsx";
import useFetchOrbsArcadeGamesDefault from "../hooks/useFetchOrbsArcadeGames.tsx";
import OrbsArcadeGameTileDefault from "OrbsArcadeGameTile.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import OrbsArcadeStore from "../OrbsArcadeStore.tsx";

const initialize = Stack(504);
const util = Stack(1128);
const Text_Text = Stack(5234);
const Stack_Stack = Stack(5977);
const GameControllerIcon = Stack(9616);
require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4971);
let obj2 = {
  section: { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 },
  sectionHeader: { gap: 2, paddingHorizontal: 4, paddingBottom: 2 },
  skeletonTile: null,
};
let size = { width: "100%", height: fn(16392).ORBS_ARCADE_GAME_TILE_MIN_HEIGHT, borderRadius: nativeDefault.radii.md };
obj2.skeletonTile = size;
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeQuestHomeSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function OrbsArcadeQuestHomeSection(location) {
      let Stack = require;
      let items4 = dependencyMap;
      const cResult = c.c(17);
      let section = closure_6();
      useFetchOrbsArcadeGamesDefault(location.location);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [OrbsArcadeStore];
        const fn = function h() {
          return OrbsArcadeStore.orbsArcadeGames;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      let stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [OrbsArcadeStore];
        const fn2 = function p() {
          return null != OrbsArcadeStore.lastFetchedOrbsArcadeGamesAt || OrbsArcadeStore.hasFetchFailed;
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        let tmp8 = fn2;
        let tmp7 = items1;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const StackResult = initialize;
      const stateFromStores1 = initialize.useStateFromStores(tmp7, tmp8);
      if (stateFromStores1) {
        if (0 === stateFromStores.length) {
          return null;
        }
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp14 = React4(GameControllerIcon.GameControllerIcon, {});
        cResult[4] = tmp14;
        let tmp12 = tmp14;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { direction: "horizontal", spacing: nativeDefault.space.PX_8, children: null };
        const items2 = [tmp12];
        const obj3 = { variant: "text-lg/semibold", color: "text-strong", children: null };
        const intl = util.intl;
        obj3.children = intl.string(util.t["2L068F"]);
        items2[1] = React4(Text_Text.Heading, obj3);
        obj2.children = items2;
        const tmp18 = hasOwnProperty(Stack_Stack.Stack, obj2);
        cResult[5] = tmp18;
        let tmp15 = tmp18;
      } else {
        tmp15 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { variant: "heading-sm/medium", color: "text-subtle", children: null };
        const intl2 = util.intl;
        obj4.children = intl2.string(util.t.kMY21I);
        const tmp21 = React4(Text_Text.Text, obj4);
        cResult[6] = tmp21;
        let tmp19 = tmp21;
      } else {
        tmp19 = cResult[6];
      }
      if (cResult[7] !== section.sectionHeader) {
        const obj5 = { style: section.sectionHeader, children: null };
        const items3 = [tmp15, tmp19];
        obj5.children = items3;
        const tmp24 = hasOwnProperty(Stack_Stack.Stack, obj5);
        cResult[7] = section.sectionHeader;
        cResult[8] = tmp24;
        let tmp22 = tmp24;
      } else {
        tmp22 = cResult[8];
      }
      if (cResult[9] === stateFromStores1) {
        if (cResult[10] === stateFromStores) {
          if (cResult[11] === section.skeletonTile) {
            if (cResult[13] === section.section) {
              if (cResult[14] === tmp22) {
              }
            }
            Stack = Stack_Stack.Stack;
            const obj6 = { spacing: nativeDefault.space.PX_16, style: section.section, children: null };
            items4 = [tmp22, cResult[12]];
            obj6.children = items4;
            const tmp30 = hasOwnProperty(Stack, obj6);
            section = section.section;
            cResult[13] = section;
            cResult[14] = tmp22;
            cResult[15] = cResult[12];
            cResult[16] = tmp30;
          }
        }
      }
      if (stateFromStores1) {
        let mapped = stateFromStores.map((game) => closure_1_4(OrbsArcadeGameTileDefault, { game }, game.id));
      } else {
        const obj7 = { style: section.skeletonTile };
        mapped = React4(SkeletonCardDefault, obj7);
      }
      cResult[9] = stateFromStores1;
      cResult[10] = stateFromStores;
      stateFromStores = section.skeletonTile;
      cResult[11] = stateFromStores;
      cResult[12] = mapped;
      const StackResult1 = initialize;
    }
  : function OrbsArcadeQuestHomeSection(location) {
      const tmp = closure_6();
      useFetchOrbsArcadeGamesDefault(location.location);
      const items = [OrbsArcadeStore];
      const stateFromStores = initialize.useStateFromStores(items, () => OrbsArcadeStore.orbsArcadeGames);
      const items1 = [OrbsArcadeStore];
      const stateFromStores1 = initialize.useStateFromStores(
        items1,
        () => null != OrbsArcadeStore.lastFetchedOrbsArcadeGamesAt || OrbsArcadeStore.hasFetchFailed,
      );
      if (stateFromStores1) {
        if (0 === stateFromStores.length) {
          return null;
        }
      }
      const obj3 = { spacing: nativeDefault.space.PX_16, style: tmp.section, children: null };
      const obj4 = { style: tmp.sectionHeader, children: null };
      const obj5 = { direction: "horizontal", spacing: nativeDefault.space.PX_8, children: null };
      const items2 = [React4(GameControllerIcon.GameControllerIcon, {})];
      const obj6 = { variant: "text-lg/semibold", color: "text-strong", children: null };
      const intl = util.intl;
      obj6.children = intl.string(util.t["2L068F"]);
      items2[1] = React4(Text_Text.Heading, obj6);
      obj5.children = items2;
      const items3 = [hasOwnProperty(Stack_Stack.Stack, obj5)];
      const obj7 = { variant: "heading-sm/medium", color: "text-subtle", children: null };
      const intl2 = util.intl;
      obj7.children = intl2.string(util.t.kMY21I);
      items3[1] = React4(Text_Text.Text, obj7);
      obj4.children = items3;
      const items4 = [hasOwnProperty(Stack_Stack.Stack, obj4)];
      if (stateFromStores1) {
        let mapped = stateFromStores.map((game) => closure_1_4(OrbsArcadeGameTileDefault, { game }, game.id));
      } else {
        const obj8 = { style: tmp.skeletonTile };
        mapped = React4(SkeletonCardDefault, obj8);
      }
      items4[1] = mapped;
      obj3.children = items4;
      hasOwnProperty(Stack_Stack.Stack, obj3);
    };
