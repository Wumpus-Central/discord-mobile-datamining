// === Module 18943: OrbsArcadeGameScreen ===

// Module 18943 (OrbsArcadeGameScreen)
import nativeDefault from "native" /* 575 */;
import Link from "Link" /* 1499 */;
import leaveFrame from "leaveFrame" /* 10902 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 6840 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16954 */;

require = fn;
const View = fn(17).View;
const ThemeTypes = fn(1072).ThemeTypes;
const FramesConstants = fn(6841);
({ getFrameLaunchParams: closure_8, isLaunched: closure_9, FrameLayoutModes } = FramesConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const presentation = { layoutMode: FrameLayoutModes.FOCUSED, portraitSafeAreasConfig: fn(18944).DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG };
const createStyles = fn(5009);
const obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BLACK }, wrapper: null, header: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BLACK };
obj2.wrapper = { flex: 1, overflow: "hidden", borderTopStartRadius: nativeDefault.radii.lg, borderTopEndRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let rect = { position: "absolute", top: 0, left: 0, right: 0, height: fn(5652).ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK };
obj2.header = rect;
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeGameScreen.tsx");

export default function OrbsArcadeGameScreen(navigation) {
  navigation = navigation.navigation;
  const route = navigation.route;
  closure_5 = undefined;
  const params = route.params;
  const frameId = params.frameId;
  const gameId = params.gameId;
  const claimableRewardIdsAtLaunch = params.claimableRewardIdsAtLaunch;
  const tmp = closure_13();
  const rect = route(frameId[13])();
  const items = [closure_5];
  const items1 = [frameId];
  const stateFromStores = navigation(frameId[14]).useStateFromStores(items, () => FramesStore.getFrame(frameId), items1);
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
  let obj = navigation(frameId[14]);
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  if (applicationId == null) {
    applicationId = null;
  }
  route(frameId[16])(applicationId);
  const items3 = [frameId, gameId];
  const effect1 = obj2.useEffect(() => () => {
    frame = frame.getFrame(closure_1_2);
    let tmp3 = null != frame;
    if (tmp3) {
      const tmp5 = closure_2_8(frame);
      let customId;
      if (tmp5 != null) {
        customId = tmp5.customId;
      }
      tmp3 = customId === gameId;
    }
    if (tmp3) {
      navigation(frameId[17]).leaveFrame(closure_1_2);
      const obj = navigation(frameId[17]);
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
  const items7 = [closure_10(route(frameId[19]), { wakeLockKey: "OrbsArcadeGame" }), ];
  const obj5 = { style: tmp.wrapper, children: null };
  let tmp14Result = null;
  if (closure_9(stateFromStores)) {
    const obj6 = { frameId, level: tmp4(tmp3[21]).FrameStackLevel.AboveAppContent, presentation };
    tmp14Result = closure_10(tmp2(tmp3[20]), obj6);
    const tmp2Result = tmp2(tmp3[20]);
  }
  const items8 = [tmp14Result, ];
  let tmp15Result = null;
  if (null != stateFromStores) {
    const obj7 = { style: null, children: null };
    const items9 = [tmp.header, ];
    const obj8 = { paddingLeft: tmp2(tmp3[10]).space.PX_8 + rect.left, paddingRight: tmp2(tmp3[10]).space.PX_8 + rect.right };
    items9[1] = obj8;
    obj7.style = items9;
    const obj9 = { gameId, applicationId: stateFromStores.applicationId };
    const items10 = [closure_10(tmp2(tmp3[22]), obj9), ];
    const obj10 = { onPress: callback };
    items10[1] = closure_10(tmp4(tmp3[23]).BaseLeaveActivityButton, obj10);
    obj7.children = items10;
    tmp15Result = closure_11(tmp16, obj7);
  }
  items8[1] = tmp15Result;
  obj5.children = items8;
  items7[1] = closure_11(claimableRewardIdsAtLaunch, obj5);
  obj4.children = items7;
  obj3.children = closure_11(claimableRewardIdsAtLaunch, obj4);
  return closure_10(navigation(frameId[18]).ThemeContextProvider, obj3);
};