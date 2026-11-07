// === Module 17329: OrbsArcadeQuestHomeSection ===

// Module 17329 (OrbsArcadeQuestHomeSection)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import Text_Text from "Text/Text" /* 5751 */;
import Stack_Stack from "Stack/Stack" /* 6159 */;
import SkeletonCardDefault from "SkeletonCard" /* 9665 */;
import GameControllerIcon from "GameControllerIcon" /* 9817 */;
import useFetchOrbsArcadeGamesDefault from "useFetchOrbsArcadeGames" /* 17334 */;
import OrbsArcadeGameTileDefault from "OrbsArcadeGameTile" /* 17338 */;
import OrbsArcadeAnalytics from "OrbsArcadeAnalytics" /* 17340 */;
import noop from "module_19" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17330 */;

require = fn;
const OrbsArcadeNativeConstants = fn(17333);
({ ORBS_ARCADE_GAME_TILE_MAX_WIDTH, ORBS_ARCADE_GAME_TILE_MIN_HEIGHT } = OrbsArcadeNativeConstants);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5140);
let obj2 = { section: { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 }, sectionHeader: null, sectionIcon: null, skeletonTile: null };
let obj3 = { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.sectionHeader = { gap: 2, paddingHorizontal: 4, paddingBottom: nativeDefault.space.PX_4 };
obj2.sectionIcon = { width: 20, height: 20 };
let size = { width: "100%", maxWidth: ORBS_ARCADE_GAME_TILE_MAX_WIDTH, alignSelf: "center", height: ORBS_ARCADE_GAME_TILE_MIN_HEIGHT, borderRadius: nativeDefault.radii.md };
obj2.skeletonTile = size;
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeQuestHomeSection.tsx");

export default function OrbsArcadeQuestHomeSection(location) {
  const tmp = closure_6();
  useFetchOrbsArcadeGamesDefault(location.location);
  items = [OrbsArcadeStore];
  const stateFromStores = initialize.useStateFromStores(items, () => OrbsArcadeStore.orbsArcadeGames);
  const items1 = [OrbsArcadeStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => null != OrbsArcadeStore.lastFetchedOrbsArcadeGamesAt || OrbsArcadeStore.hasFetchFailed);
  if (stateFromStores1) {
    if (0 === stateFromStores.length) {
      return null;
    }
  }
  const obj3 = { spacing: nativeDefault.space.PX_8, style: tmp.section, children: null };
  const obj4 = { style: tmp.sectionHeader, children: null };
  const obj5 = { direction: "horizontal", spacing: nativeDefault.space.PX_8, children: null };
  const items2 = [React4(GameControllerIcon.GameControllerIcon, { size: "custom", style: tmp.sectionIcon }), ];
  const obj7 = { variant: "body-lg/semibold", color: "text-strong", children: null };
  const intl = util.intl;
  obj7.children = intl.string(util.t["2L068F"]);
  items2[1] = React4(Text_Text.Heading, obj7);
  obj5.children = items2;
  const items3 = [hasOwnProperty(Stack_Stack.Stack, obj5), ];
  const obj8 = { variant: "heading-xs/medium", color: "text-subtle", children: null };
  const intl2 = util.intl;
  obj8.children = intl2.string(util.t.kMY21I);
  items3[1] = React4(Text_Text.Text, obj8);
  obj4.children = items3;
  const items4 = [hasOwnProperty(Stack_Stack.Stack, obj4), ];
  if (stateFromStores1) {
    let mapped = stateFromStores.map((game) => {
      const obj = { game, surface: OrbsArcadeAnalytics.OrbsArcadeSurface.QUEST_HOME };
      return closure_1_4(OrbsArcadeGameTileDefault, obj, game.id);
    });
  } else {
    const obj9 = { style: tmp.skeletonTile };
    mapped = React4(SkeletonCardDefault, obj9);
  }
  items4[1] = mapped;
  obj3.children = items4;
  hasOwnProperty(Stack_Stack.Stack, obj3);
  const obj6 = { size: "custom", style: tmp.sectionIcon };
};