// === Module 17035: OrbsArcadePlayButton ===

// Module 17035 (OrbsArcadePlayButton)
import Text_Text from "Text/Text" /* 5624 */;
import ButtonConstants from "ButtonConstants" /* 5640 */;
import launchOrbsArcadeGameDefault from "launchOrbsArcadeGame" /* 17038 */;
import noop from "module_19" /* 19 */;
import QuestHomeNavigationStore from "QuestHomeNavigationStore" /* 9679 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17010 */;

require = fn;
function OrbsArcadePaidPlayLabel(count) {
  const size = count.size;
  const tmp = closure_8();
  closure_1 = tmp;
  const intl = size(1113).intl;
  const formatResult = intl.format(size(1113).t.oSWYca, {
    count: count.orbCost,
    orbIconHook() {
      return jsx(size(9532).OrbsIcon, { size: "xs", color: closure_1(575).colors.CONTROL_PRIMARY_TEXT_DEFAULT }, "orbs-icon");
    }
  });
  let arr = formatResult;
  if (!Array.isArray(formatResult)) {
    const items = [formatResult];
    arr = items;
  }
  return <View style={tmp.paidPlayLabel}>{arr.map((children, index) => {
    if (typeof children === "string") {
      const obj = { style: closure_1.paidPlayText, variant: ButtonConstants.getButtonDefaultTextVariant(size), color: "control-primary-text-default", lineClamp: 1, children };
      let tmp7 = jsx(Text_Text.Text, { style: closure_1.paidPlayText, variant: ButtonConstants.getButtonDefaultTextVariant(size), color: "control-primary-text-default", lineClamp: 1, children }, index);
    } else {
      tmp7 = children;
    }
    return tmp7;
  })}</View>;
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let closure_8 = createStyles.createStyles({ paidPlayLabel: { flexDirection: "row", alignItems: "center" }, paidPlayText: { flexShrink: 1 } });
let size = fn(2);
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadePlayButton.tsx");

export default function OrbsArcadePlayButton(game) {
  game = game.game;
  let DEFAULT_BUTTON_SIZE = game.size;
  if (DEFAULT_BUTTON_SIZE === undefined) {
    DEFAULT_BUTTON_SIZE = game(5640).DEFAULT_BUTTON_SIZE;
  }
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7326)().analyticsLocations;
  const tmp4 = analyticsLocations(17036)(game);
  const text = tmp4.text;
  ({ isPaidPlay, canAffordPlay } = tmp4);
  const items = [OrbsArcadeStore];
  const items1 = [game.id];
  const stateFromStores = game(504).useStateFromStores(items, () => OrbsArcadeStore.getGameStateForGame(game.id), items1);
  let result = analyticsLocations(17037)(game, stateFromStores);
  const obj = game(504);
  const items2 = [OrbsArcadeStore];
  const items3 = [game.id];
  const stateFromStores1 = game(504).useStateFromStores(items2, () => OrbsArcadeStore.isLaunchingGame(game.id), items3);
  const items4 = [game, analyticsLocations];
  const callback = noop.useCallback(() => {
    analyticsLocations(dependencyMap[15]).hideActionSheet();
    state.setState({ scrollToQuestsSection: true });
  }, []);
  const callback1 = noop.useCallback(() => launchOrbsArcadeGameDefault(game, analyticsLocations), items4);
  if (null != stateFromStores) {
    if (tmp5Result.mustClaimOrbsArcadeRewardsToPlay(stateFromStores)) {
      const obj3 = { grow: true, size: DEFAULT_BUTTON_SIZE, variant: "primary", text: null, disabled: true, onPress: "a" };
      const intl3 = tmp5(1113).intl;
      const obj4 = { count: tmp5(17017).getOrbsArcadeClaimableRewards(game.rewards, stateFromStores).length };
      obj3.text = intl3.formatToPlainString(tmp5(1113).t["18ToNc"], obj4);
      let tmp18Result2 = jsx(tmp5(5634).Button, { grow: true, size: DEFAULT_BUTTON_SIZE, variant: "primary", text: null, disabled: true, onPress: "a" });
      const tmp5Result3 = tmp5(17017);
    }
    return tmp18Result2;
  }
  if (null != result) {
    const obj5 = { grow: true, size: DEFAULT_BUTTON_SIZE, variant: "primary", text: null, disabled: true, onPress: "a" };
    if (null != result.timeUntilNextRound) {
      const intl2 = tmp5(1113).intl;
      const obj6 = { duration: null };
      result = tmp5(17026).formatOrbsArcadeTimeUntil(result.timeUntilNextRound);
      obj6.duration = result;
      let formatToPlainStringResult = intl2.formatToPlainString(tmp5(1113).t["Uk+BE3"], obj6);
      const tmp5Result4 = tmp5(17026);
    } else {
      const intl = tmp5(1113).intl;
      formatToPlainStringResult = intl.string(tmp5(1113).t.iJjbMd);
    }
    obj5.text = formatToPlainStringResult;
    jsx(tmp5(5634).Button, { grow: true, size: DEFAULT_BUTTON_SIZE, variant: "primary", text: null, disabled: true, onPress: "a" });
  } else if (canAffordPlay) {
    const obj7 = { grow: true, size: DEFAULT_BUTTON_SIZE, variant: "primary", text, textElement: null, disabled: null, loading: null, onPress: null };
    let tmp18Result;
    if (isPaidPlay) {
      if (null != game.orbCost) {
        const obj8 = { orbCost: game.orbCost, size: DEFAULT_BUTTON_SIZE };
        tmp18Result = <OrbsArcadePaidPlayLabel orbCost={game.orbCost} size={DEFAULT_BUTTON_SIZE} />;
      }
    }
    obj7.textElement = tmp18Result;
    obj7.disabled = null == game.applicationId;
    obj7.loading = stateFromStores1;
    obj7.onPress = callback1;
    tmp18Result2 = jsx(tmp5(5635).BaseTextButton, { grow: true, size: DEFAULT_BUTTON_SIZE, variant: "primary", text, textElement: null, disabled: null, loading: null, onPress: null });
  } else {
    const obj9 = { grow: true, size: DEFAULT_BUTTON_SIZE, variant: "primary", text, onPress: callback };
    tmp18Result2 = jsx(tmp5(5634).Button, { grow: true, size: DEFAULT_BUTTON_SIZE, variant: "primary", text, onPress: callback });
  }
  const obj2 = game(504);
};