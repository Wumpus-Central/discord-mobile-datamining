// discord_app/modules/orbs_arcade/native/OrbsArcadeGameScreen.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Link from "../../../../_runtime/01506_Link.js";
import leaveFrame from "../../frames/leaveFrame.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import FramesStore from "../../frames/FramesStore.tsx";
import OrbsArcadeStore from "../OrbsArcadeStore.tsx";

require = fn;
const View = fn(17).View;
const ThemeTypes = fn(1087).ThemeTypes;
const FramesConstants = fn(6776);
({ isLaunched: closure_8, FrameLayoutModes } = FramesConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const OrbsArcadeGame = "OrbsArcadeGame";
const presentation = { layoutMode: FrameLayoutModes.FOCUSED, portraitSafeAreasConfig: fn(18366).DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG };
const createStyles = fn(4971);
const obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BLACK }, wrapper: null, header: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BLACK };
obj2.wrapper = { flex: 1, overflow: "hidden", borderTopStartRadius: nativeDefault.radii.lg, borderTopEndRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let rect = { position: "absolute", top: 0, left: 0, right: 0, height: fn(5609).ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK };
obj2.header = rect;
let closure_13 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { flex: 1, overflow: "hidden", borderTopStartRadius: nativeDefault.radii.lg, borderTopEndRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeGameScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeGameScreen(navigation) {
  const cResult = navigation(frameId[14]).c(41);
  navigation = navigation.navigation;
  const route = navigation.route;
  const params = route.params;
  frameId = params.frameId;
  const gameId = params.gameId;
  const claimableRewardIdsAtLaunch = params.claimableRewardIdsAtLaunch;
  closure_13();
  route(frameId[15])();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [closure_5];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== frameId) {
    const fn = function p() {
      return FramesStore.getFrame(frameId);
    };
    const items1 = [frameId];
    cResult[1] = frameId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp10 = items1;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  let obj = navigation(frameId[14]);
  const tmp5 = route;
  const stateFromStores = navigation(frameId[16]).useStateFromStores(first, tmp9, tmp10);
  closure_5 = tmp12;
  if (cResult[4] === null != stateFromStores) {
    if (cResult[5] === navigation) {
      if (cResult[6] === route.key) {
        let tmp13 = cResult[7];
        let tmp14 = cResult[8];
      }
      const effect = gameId.useEffect(tmp13, tmp14);
      let applicationId;
      if (stateFromStores != null) {
        applicationId = stateFromStores.applicationId;
      }
      if (applicationId == null) {
        applicationId = null;
      }
      tmp5(tmp2[18])(applicationId);
      if (cResult[9] !== frameId) {
        class O {
          constructor() {
            return () => {
              if (null != frame.getFrame(closure_1_2)) {
                navigation(frameId[19]).leaveFrame(closure_1_2);
                const obj = navigation(frameId[19]);
              }
            };
          }
        }
        const items2 = [frameId];
        cResult[9] = frameId;
        cResult[10] = O;
        cResult[11] = items2;
        let tmp20 = items2;
      } else {
        class O {
          constructor() {
            return () => {
              if (null != frame.getFrame(closure_1_2)) {
                navigation(frameId[19]).leaveFrame(closure_1_2);
                const obj = navigation(frameId[19]);
              }
            };
          }
        }
        tmp20 = cResult[11];
      }
      const effect1 = gameId.useEffect(O, tmp20);
      if (cResult[12] === claimableRewardIdsAtLaunch) {
        class O {
          constructor() {
            return () => {
              if (null != frame.getFrame(closure_1_2)) {
                navigation(frameId[19]).leaveFrame(closure_1_2);
                const obj = navigation(frameId[19]);
              }
            };
          }
        }
      }
      class B {
        constructor() {
          return navigation.addListener("beforeRemove", () => {
            closure_0 = claimableRewardIdsAtLaunch;
            game = game.getGame(gameId);
            if (null != game) {
              const _Set = Set;
              const orbsArcadeClaimableRewards = navigation(frameId[11]).getOrbsArcadeClaimableRewards(game.rewards, obj.getGameStateForGame(gameId));
              const mapped = orbsArcadeClaimableRewards.map(() => { ... });
              const set = new Set(mapped.filter(() => { ... }));
              if (set.size > 0) {
                const result = navigation(frameId[12]).openOrbsArcadeRewardUnlockedSheet(gameId, set);
                const tmp5Result = navigation(frameId[12]);
              }
              const obj3 = navigation(frameId[11]);
            }
            obj = game;
          });
        }
      }
      const items3 = [navigation, gameId, claimableRewardIdsAtLaunch];
      cResult[12] = claimableRewardIdsAtLaunch;
      cResult[13] = gameId;
      cResult[14] = navigation;
      cResult[15] = B;
      cResult[16] = items3;
      let tmp5Result = tmp5(tmp2[18]);
    }
  }
  class F {
    constructor() {
      if (!closure_5) {
        tmp = navigation;
        obj = {};
        tmp2 = closure_0;
        tmp3 = closure_2;
        CommonActions = closure_0(closure_2[17]).CommonActions;
        tmp4 = obj;
        merged = Object.assign(CommonActions.goBack());
        tmp6 = route;
        obj.source = route.key;
        dispatchResult = navigation.dispatch(obj);
      }
      return;
    }
  }
  const items4 = [null != stateFromStores, navigation, route.key];
  cResult[4] = null != stateFromStores;
  cResult[5] = navigation;
  cResult[6] = route.key;
  cResult[7] = F;
  cResult[8] = items4;
  tmp14 = items4;
  tmp13 = F;
  const tmpResult = navigation(frameId[16]);
}) : (function OrbsArcadeGameScreen(navigation) {
  navigation = navigation.navigation;
  const route = navigation.route;
  closure_5 = undefined;
  const params = route.params;
  const frameId = params.frameId;
  const gameId = params.gameId;
  const claimableRewardIdsAtLaunch = params.claimableRewardIdsAtLaunch;
  const tmp = closure_13();
  const rect = route(frameId[15])();
  const items = [closure_5];
  const items1 = [frameId];
  const stateFromStores = navigation(frameId[16]).useStateFromStores(items, () => FramesStore.getFrame(frameId), items1);
  closure_5 = tmp6;
  const items2 = [null != stateFromStores, navigation, route.key];
  const effect = gameId.useEffect(() => {
    if (!closure_5) {
      const obj = {};
      const CommonActions = Link.CommonActions;
      const merged = Object.assign(CommonActions.goBack());
      obj.source = route.key;
      navigation.dispatch(obj);
    }
  }, items2);
  let applicationId;
  let obj = navigation(frameId[16]);
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  if (applicationId == null) {
    applicationId = null;
  }
  route(frameId[18])(applicationId);
  const items3 = [frameId];
  const effect1 = obj2.useEffect(() => () => {
    if (null != frame.getFrame(closure_1_2)) {
      navigation(frameId[19]).leaveFrame(closure_1_2);
      const obj = navigation(frameId[19]);
    }
  }, items3);
  const items4 = [navigation, gameId, claimableRewardIdsAtLaunch];
  const effect2 = obj2.useEffect(() => navigation.addListener("beforeRemove", () => {
    closure_0 = claimableRewardIdsAtLaunch;
    game = game.getGame(gameId);
    if (null != game) {
      const _Set = Set;
      const orbsArcadeClaimableRewards = navigation(frameId[11]).getOrbsArcadeClaimableRewards(game.rewards, obj.getGameStateForGame(gameId));
      const mapped = orbsArcadeClaimableRewards.map((id) => id.id);
      const set = new Set(mapped.filter((item) => !closure_0.includes(item)));
      if (set.size > 0) {
        const result = navigation(frameId[12]).openOrbsArcadeRewardUnlockedSheet(gameId, set);
        const tmp5Result = navigation(frameId[12]);
      }
      const obj3 = navigation(frameId[11]);
    }
    obj = game;
  }), items4);
  const items5 = [frameId];
  const callback = obj2.useCallback(() => leaveFrame.leaveFrame(frameId), items5);
  let obj3 = { theme: ThemeTypes.DARK, children: null };
  const obj4 = { style: null, children: null };
  const items6 = [tmp.container, { paddingTop: rect.top }];
  obj4.style = items6;
  const items7 = [closure_9(route(frameId[20]), { wakeLockKey: OrbsArcadeGame }), ];
  const obj6 = { style: tmp.wrapper, children: null };
  let tmp14Result = null;
  if (closure_8(stateFromStores)) {
    const obj7 = { frameId, level: tmp4(tmp3[22]).FrameStackLevel.AboveAppContent, presentation };
    tmp14Result = closure_9(tmp2(tmp3[21]), obj7);
    const tmp2Result = tmp2(tmp3[21]);
  }
  const items8 = [tmp14Result, ];
  let tmp15Result = null;
  if (null != stateFromStores) {
    const obj8 = { style: null, children: null };
    const items9 = [tmp.header, ];
    const obj9 = { paddingLeft: tmp2(tmp3[10]).space.PX_8 + rect.left, paddingRight: tmp2(tmp3[10]).space.PX_8 + rect.right };
    items9[1] = obj9;
    obj8.style = items9;
    const obj10 = { applicationId: stateFromStores.applicationId };
    const items10 = [closure_9(tmp2(tmp3[23]), obj10), ];
    const obj11 = { onPress: callback };
    items10[1] = closure_9(tmp4(tmp3[24]).BaseLeaveActivityButton, obj11);
    obj8.children = items10;
    tmp15Result = closure_10(tmp16, obj8);
  }
  items8[1] = tmp15Result;
  obj6.children = items8;
  items7[1] = closure_10(claimableRewardIdsAtLaunch, obj6);
  obj4.children = items7;
  obj3.children = closure_10(claimableRewardIdsAtLaunch, obj4);
  return closure_9(navigation(frameId[25]).ThemeContextProvider, obj3);
});