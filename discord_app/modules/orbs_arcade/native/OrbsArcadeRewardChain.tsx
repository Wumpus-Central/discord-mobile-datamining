// === Module 16982: OrbsArcadeRewardChain ===

// Module 16982 (OrbsArcadeRewardChain)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import Text_Text from "Text/Text" /* 5619 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 16955 */;
import OrbsArcadeRewardUtils from "OrbsArcadeRewardUtils" /* 16961 */;
import OrbsArcadeRewardStatusLabelDefault from "OrbsArcadeRewardStatusLabel" /* 16965 */;
import OrbsArcadeRewardChainCellDefault from "OrbsArcadeRewardChainCell" /* 16983 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
let closure_8 = 2 * PX_16 + 1;
let start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
const createStyles = fn(5009);
let obj2 = { chain: { overflow: "hidden", padding: nativeDefault.space.PX_16, gap: PX_16, borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, divider: null, row: null, dimmedRow: null, rewardCopy: null };
let obj3 = { overflow: "hidden", padding: nativeDefault.space.PX_16, gap: PX_16, borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.divider = { height: 1, marginHorizontal: -nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let obj4 = { height: 1, marginHorizontal: -nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.row = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.dimmedRow = { opacity: 0.4 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.rewardCopy = { flex: 1, gap: nativeDefault.space.PX_4 };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardChain.tsx");

export default function OrbsArcadeRewardChain(game) {
  game = game.game;
  const gameState = game.gameState;
  let memo;
  closure_6 = undefined;
  c7 = undefined;
  c8 = undefined;
  start = undefined;
  const tmp = closure_11();
  dependencyMap = tmp;
  let items = [game.rewards];
  memo = memo.useMemo(() => {
    const items = [...game.rewards];
    return items.sort((scoreTarget, scoreTarget2) => scoreTarget2.scoreTarget - scoreTarget.scoreTarget);
  }, items);
  let items1 = [memo, gameState];
  absoluteFill = memo.useMemo(() => memo.map((id) => game(closure_2[6]).getOrbsArcadeRewardStatus(id.id, gameState)), items1);
  const findLastResult = memo.findLast((arg0, arg1) => dependencyMap[arg1] === OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED);
  c5 = findLastResult;
  let first = findLastResult;
  let obj = game(5016);
  let obj2 = memo;
  const tmp5 = gameState;
  if (findLastResult == null) {
    first = memo[0];
  }
  const tmp6Result = gameState(16970)(first);
  closure_6 = tmp6Result;
  let tmp6 = gameState(16970);
  let obj3 = { grantedRewardIds: null, focusedRewardId: null, grantAnimatedOnOpenRewardIds: null };
  const found = memo.filter((item, index) => dependencyMap[index] !== OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED);
  const mapped = found.map((id) => id.id);
  obj3.grantedRewardIds = mapped.reverse();
  let id;
  if (findLastResult != null) {
    id = findLastResult.id;
  }
  if (id == null) {
    id = null;
  }
  obj3.focusedRewardId = id;
  obj3.grantAnimatedOnOpenRewardIds = game.grantAnimatedOnOpenRewardIds;
  const orbsArcadeRewardChainTimeline = game(16983).useOrbsArcadeRewardChainTimeline(obj3);
  ({ timeline: c7, getGrantAtMs: c8, getFocusRingAtMs: c9 } = orbsArcadeRewardChainTimeline);
  let items2 = [tmp6Result];
  let obj4 = { style: tmp.chain, children: null };
  const memo1 = obj2.useMemo(() => {
    const items = [nativeDefault.unsafe_rawColors.TRANSPARENT, ];
    const obj = _modDef671(closure_6);
    items[1] = _modDef671(closure_6).alpha(0.3).css();
    return items;
  }, items2);
  const tmp12 = c7;
  const tmp13 = c5;
  const tmp2Result = game(16983);
  let tmp14 = null;
  if (!tmp2Result2.isThemeLight(obj.useThemeContext().theme)) {
    let obj5 = { style: absoluteFill.absoluteFill, start, end, colors: memo1 };
    tmp14 = closure_6(tmp5(5582), obj5);
  }
  let items3 = [
    tmp14,
    memo.map((reward, index) => {
      let id;
      if (_undefined != null) {
        id = _undefined.id;
      }
      let tmp6 = null;
      if (index > 0) {
        const obj = { style: closure_2.divider };
        tmp6 = timestampProducer(hasOwnProperty, obj);
      }
      const tmp10 = dependencyMap[index] !== OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED;
      const items = [tmp6, ];
      const items1 = [closure_2.row, ];
      let dimmedRow;
      if (!tmp10) {
        if (!tmp11) {
          dimmedRow = closure_2.dimmedRow;
        }
      }
      const obj2 = { style: items1, children: null };
      items1[1] = dimmedRow;
      const obj3 = { reward, status: dependencyMap[index], isFocused: reward.id === id, stemLength: null, timeline: null, grantAtMs: null, focusRingAtMs: null };
      let tmp18 = null;
      if (index > 0) {
        tmp18 = null;
        if (tmp10) {
          tmp18 = closure_8;
        }
      }
      const obj4 = { children: null };
      obj3.stemLength = tmp18;
      obj3.timeline = timeline;
      obj3.grantAtMs = _undefined2(reward.id);
      obj3.focusRingAtMs = _undefined3(reward.id);
      const items2 = [timestampProducer(OrbsArcadeRewardChainCellDefault, obj3), ];
      const obj5 = { style: closure_2.rewardCopy, children: null };
      const items3 = [timestampProducer(OrbsArcadeRewardStatusLabelDefault, { reward, status: dependencyMap[index], color: "text-subtle" }), timestampProducer(Text_Text.Text, { variant: "heading-sm/semibold", color: "text-strong", children: reward.name }), ];
      const obj8 = { variant: "text-xxs/medium", color: "text-muted", children: null };
      const obj6 = { reward, status: dependencyMap[index], color: "text-subtle" };
      const obj7 = { variant: "heading-sm/semibold", color: "text-strong", children: reward.name };
      obj8.children = OrbsArcadeRewardUtils.getOrbsArcadeRewardScoreLabel(reward, dependencyMap[index]);
      items3[2] = timestampProducer(Text_Text.Text, obj8);
      obj5.children = items3;
      items2[1] = React5(hasOwnProperty, obj5);
      obj2.children = items2;
      items[1] = React5(hasOwnProperty, obj2);
      obj4.children = items;
      return React5(noop.Fragment, obj4, reward.id);
    })
  ];
  obj4.children = items3;
  return tmp12(tmp13, obj4);
};