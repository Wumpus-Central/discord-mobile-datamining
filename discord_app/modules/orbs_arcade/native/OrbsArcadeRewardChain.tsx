// discord_app/modules/orbs_arcade/native/OrbsArcadeRewardChain.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef671 from "../../../../_runtime/metro/00671__.js";
import ReanimatedRexportDefault from "../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import OrbsArcadeTypes from "../OrbsArcadeTypes.tsx";
import OrbsArcadeRewardUtils from "../utils/OrbsArcadeRewardUtils.tsx";
import OrbsArcadeRewardStatusLabelDefault from "OrbsArcadeRewardStatusLabel.tsx";
import OrbsArcadeRewardChainCell from "OrbsArcadeRewardChainCell.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import OrbsArcadeStore from "../OrbsArcadeStore.tsx";

const OrbsArcadeRewardChainCellDefault = OrbsArcadeRewardChainCell;

require = fn;
function OrbsArcadeRewardChainRow(arg0) {
  ({ isGranted, isFocused, timeline, focusRingAtMs, children } = arg0);
  const tmp = closure_12();
  const orbsArcadeRewardChainRowStyle = OrbsArcadeRewardChainCell.useOrbsArcadeRewardChainRowStyle({
    isGranted,
    isFocused,
    timeline,
    focusRingAtMs,
  });
  const obj2 = { style: null, children };
  const items = [tmp.row, orbsArcadeRewardChainRowStyle];
  obj2.style = items;
  return React5(ReanimatedRexportDefault.View, obj2);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
let closure_9 = 2 * PX_16 + 1;
let start = { x: 0, y: 0 };
let end = { x: 0, y: 1 };
const createStyles = fn(5014);
let obj2 = {
  chainGlowContainer: { borderRadius: nativeDefault.radii.lg },
  chain: null,
  divider: null,
  row: null,
  rewardCopy: null,
};
let obj3 = { borderRadius: nativeDefault.radii.lg };
obj2.chain = {
  overflow: "hidden",
  padding: nativeDefault.space.PX_16,
  gap: PX_16,
  borderRadius: nativeDefault.radii.lg,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
let obj4 = {
  overflow: "hidden",
  padding: nativeDefault.space.PX_16,
  gap: PX_16,
  borderRadius: nativeDefault.radii.lg,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj2.divider = {
  height: 1,
  marginHorizontal: -nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
let obj5 = {
  height: 1,
  marginHorizontal: -nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.row = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.rewardCopy = { flex: 1, gap: 2 };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardChain.tsx");

export default function OrbsArcadeRewardChain(game) {
  game = game.game;
  const gameState = game.gameState;
  c6 = undefined;
  closure_7 = undefined;
  let NITRO_GLOW_COLOR;
  c9 = undefined;
  start = undefined;
  end = undefined;
  const tmp = closure_12();
  let obj = game(5021);
  let items = [c6];
  const stateFromStores = game(504).useStateFromStores(items, () => _undefined.ownedRewardSkuIds);
  let items1 = [game.rewards];
  const memo = stateFromStores.useMemo(() => {
    const items = [...game.rewards];
    return items.sort((scoreTarget, scoreTarget2) => scoreTarget2.scoreTarget - scoreTarget.scoreTarget);
  }, items1);
  let items2 = [memo, gameState, stateFromStores];
  dependencyMap = stateFromStores.useMemo(
    () => memo.map((item) => game(closure_2[10]).getOrbsArcadeRewardStatus(item, gameState, stateFromStores)),
    items2,
  );
  const findLastResult = memo.findLast(
    (arg0, arg1) => dependencyMap[arg1] === OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED,
  );
  c6 = findLastResult;
  let first = findLastResult;
  if (findLastResult == null) {
    first = memo[0];
  }
  const tmp8 = gameState(17027)(first);
  closure_7 = tmp8;
  let type;
  if (first != null) {
    type = first.type;
  }
  NITRO_GLOW_COLOR = tmp8;
  if (type === game(17011).OrbsArcadeRewardType.FRACTIONAL_PREMIUM) {
    NITRO_GLOW_COLOR = tmp2(17027).NITRO_GLOW_COLOR;
  }
  let obj2 = game(504);
  let tmp7 = gameState;
  let obj4 = { grantedRewardIds: null, focusedRewardId: null, grantAnimatedOnOpenRewardIds: null };
  const found = memo.filter((item, index) => dependencyMap[index] !== OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED);
  const mapped = found.map((id) => id.id);
  obj4.grantedRewardIds = mapped.reverse();
  let id;
  if (findLastResult != null) {
    id = findLastResult.id;
  }
  if (id == null) {
    id = null;
  }
  obj4.focusedRewardId = id;
  obj4.grantAnimatedOnOpenRewardIds = game.grantAnimatedOnOpenRewardIds;
  const orbsArcadeRewardChainTimeline = game(17041).useOrbsArcadeRewardChainTimeline(obj4);
  ({ timeline: c9, getGrantAtMs: c10, getFocusRingAtMs: c11 } = orbsArcadeRewardChainTimeline);
  const items3 = [tmp8];
  const items4 = [NITRO_GLOW_COLOR];
  const memo1 = obj3.useMemo(() => {
    const items = [nativeDefault.unsafe_rawColors.TRANSPARENT];
    const obj = _modDef671(closure_7);
    items[1] = _modDef671(closure_7).alpha(0.3).css();
    return items;
  }, items3);
  const memo2 = obj3.useMemo(() => {
    const obj = { boxShadow: null };
    const items = [{ offsetX: 0, offsetY: 0, blurRadius: 5, color: NITRO_GLOW_COLOR }];
    obj.boxShadow = items;
    return obj;
  }, items4);
  const tmp2Result = game(17041);
  const isThemeLightResult = game(5021).isThemeLight(obj.useThemeContext().theme);
  const items5 = [tmp.chainGlowContainer];
  let tmp17;
  if (!isThemeLightResult) {
    tmp17 = memo2;
  }
  let obj5 = { style: items5, children: null };
  items5[1] = tmp17;
  let obj6 = { style: tmp.chain, children: null };
  let tmp15Result = null;
  if (!isThemeLightResult) {
    let obj7 = { style: memo.absoluteFill, start, end, colors: memo1 };
    tmp15Result = tmp15(tmp7(5587), obj7);
  }
  const items6 = [
    tmp15Result,
    memo.map((reward, index) => {
      let id;
      if (_undefined != null) {
        id = _undefined.id;
      }
      let tmp7 = null;
      if (index > 0) {
        const obj = { style: closure_2.divider };
        tmp7 = React5(hasOwnProperty, obj);
      }
      const tmp11 = dependencyMap[index] !== OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED;
      const items = [tmp7];
      const obj2 = {
        isGranted: tmp11,
        isFocused: reward.id === id,
        timeline,
        focusRingAtMs: _undefined3(reward.id),
        children: null,
      };
      const obj3 = {
        reward,
        status: dependencyMap[index],
        isFocused: reward.id === id,
        stemLength: null,
        isStemTargetGranted: null,
        timeline: null,
        grantAtMs: null,
        focusRingAtMs: null,
      };
      let tmp19 = null;
      if (index > 0) {
        tmp19 = null;
        if (tmp11) {
          tmp19 = closure_9;
        }
      }
      obj3.stemLength = tmp19;
      let tmp20 = index > 0;
      if (tmp20) {
        tmp20 = dependencyMap[index - 1] !== OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED;
      }
      const obj4 = { children: null };
      obj3.isStemTargetGranted = tmp20;
      obj3.timeline = timeline;
      obj3.grantAtMs = _undefined2(reward.id);
      obj3.focusRingAtMs = _undefined3(reward.id);
      const items1 = [React5(OrbsArcadeRewardChainCellDefault, obj3)];
      const obj5 = { style: closure_2.rewardCopy, children: null };
      const items2 = [
        React5(OrbsArcadeRewardStatusLabelDefault, { reward, status: dependencyMap[index], color: "text-subtle" }),
        React5(Text_Text.Text, { variant: "heading-sm/semibold", color: "text-strong", children: reward.name }),
      ];
      const obj8 = { variant: "text-xxs/medium", color: "text-muted", children: null };
      const obj6 = { reward, status: dependencyMap[index], color: "text-subtle" };
      const obj7 = { variant: "heading-sm/semibold", color: "text-strong", children: reward.name };
      obj8.children = OrbsArcadeRewardUtils.getOrbsArcadeRewardScoreLabel(
        reward,
        dependencyMap[index],
        gameState,
        stateFromStores,
      );
      items2[2] = React5(Text_Text.Text, obj8);
      obj5.children = items2;
      items1[1] = React6(hasOwnProperty, obj5);
      obj2.children = items1;
      items[1] = React6(OrbsArcadeRewardChainRow, obj2);
      obj4.children = items;
      return React6(noop.Fragment, obj4, reward.id);
    }),
  ];
  obj6.children = items6;
  obj5.children = NITRO_GLOW_COLOR(dependencyMap, obj6);
  return closure_7(dependencyMap, obj5);
}
