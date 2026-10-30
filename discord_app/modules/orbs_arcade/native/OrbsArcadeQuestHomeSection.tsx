// === Module 16953: OrbsArcadeQuestHomeSection ===

// Module 16953 (OrbsArcadeQuestHomeSection)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import Stack_Stack from "Stack/Stack" /* 6022 */;
import SkeletonCardDefault from "SkeletonCard" /* 9556 */;
import GameControllerIcon from "GameControllerIcon" /* 9707 */;
import useFetchOrbsArcadeGamesDefault from "useFetchOrbsArcadeGames" /* 16958 */;
import OrbsArcadeGameTileDefault from "OrbsArcadeGameTile" /* 16962 */;
import noop from "module_19" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16954 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5009);
let obj2 = { section: { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 }, sectionHeader: { gap: 2, paddingHorizontal: 4, paddingBottom: 2 }, skeletonTile: null };
let size = { width: "100%", height: fn(16957).ORBS_ARCADE_GAME_TILE_MIN_HEIGHT, borderRadius: nativeDefault.radii.md };
obj2.skeletonTile = size;
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeQuestHomeSection.tsx");

export default function OrbsArcadeQuestHomeSection(location) {
  const tmp = closure_6();
  useFetchOrbsArcadeGamesDefault(location.location);
  const items = [OrbsArcadeStore];
  const stateFromStores = initialize.useStateFromStores(items, () => OrbsArcadeStore.orbsArcadeGames);
  const items1 = [OrbsArcadeStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => null != OrbsArcadeStore.lastFetchedOrbsArcadeGamesAt || OrbsArcadeStore.hasFetchFailed);
  if (stateFromStores1) {
    if (0 === stateFromStores.length) {
      return null;
    }
  }
  const obj3 = { spacing: nativeDefault.space.PX_16, style: tmp.section, children: null };
  const obj4 = { style: tmp.sectionHeader, children: null };
  const obj5 = { direction: "horizontal", spacing: nativeDefault.space.PX_8, children: null };
  const items2 = [React4(GameControllerIcon.GameControllerIcon, {}), ];
  const obj6 = { variant: "text-lg/semibold", color: "text-strong", children: null };
  const intl = util.intl;
  obj6.children = intl.string(util.t["2L068F"]);
  items2[1] = React4(Text_Text.Heading, obj6);
  obj5.children = items2;
  const items3 = [hasOwnProperty(Stack_Stack.Stack, obj5), ];
  const obj7 = { variant: "heading-sm/medium", color: "text-subtle", children: null };
  const intl2 = util.intl;
  obj7.children = intl2.string(util.t.kMY21I);
  items3[1] = React4(Text_Text.Text, obj7);
  obj4.children = items3;
  const items4 = [hasOwnProperty(Stack_Stack.Stack, obj4), ];
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