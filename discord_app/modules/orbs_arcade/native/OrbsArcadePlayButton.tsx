// discord_app/modules/orbs_arcade/native/OrbsArcadePlayButton.tsx
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ButtonConstants from "../../../design/components/Button/native/ButtonConstants.native.tsx";
import OrbsArcadeAnalytics from "../OrbsArcadeAnalytics.tsx";
import launchOrbsArcadeGameDefault from "launchOrbsArcadeGame.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import QuestHomeNavigationStore from "../../quests/QuestHomeNavigationStore.tsx";
import OrbsArcadeStore from "../OrbsArcadeStore.tsx";

require = fn;
function OrbsArcadePaidPlayLabel(count) {
  const size = count.size;
  const tmp = closure_8();
  closure_1 = tmp;
  const intl = size(1113).intl;
  const formatResult = intl.format(size(1113).t.oSWYca, {
    count: count.orbCost,
    orbIconHook() {
      return jsx(
        size(9685).OrbsIcon,
        { size: "xs", color: closure_1(575).colors.CONTROL_PRIMARY_TEXT_DEFAULT },
        "orbs-icon",
      );
    },
  });
  let arr = formatResult;
  if (!Array.isArray(formatResult)) {
    items = [formatResult];
    arr = items;
  }
  return (
    <View style={tmp.paidPlayLabel}>
      {arr.map((children, index) => {
        if (typeof children === "string") {
          const obj = {
            style: closure_1.paidPlayText,
            variant: ButtonConstants.getButtonDefaultTextVariant(size),
            color: "control-primary-text-default",
            lineClamp: 1,
            children,
          };
          let tmp7 = jsx(
            Text_Text.Text,
            {
              style: closure_1.paidPlayText,
              variant: ButtonConstants.getButtonDefaultTextVariant(size),
              color: "control-primary-text-default",
              lineClamp: 1,
              children,
            },
            index,
          );
        } else {
          tmp7 = children;
        }
        return tmp7;
      })}
    </View>
  );
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5143);
let closure_8 = createStyles.createStyles({
  paidPlayLabel: { flexDirection: "row", alignItems: "center" },
  paidPlayText: { flexShrink: 1 },
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadePlayButton.tsx");

export default function OrbsArcadePlayButton(game) {
  game = game.game;
  let DEFAULT_BUTTON_SIZE = game.size;
  if (DEFAULT_BUTTON_SIZE === undefined) {
    DEFAULT_BUTTON_SIZE = game(surface[10]).DEFAULT_BUTTON_SIZE;
  }
  const _location = game.location;
  surface = game.surface;
  const analyticsLocations = _location(surface[11])().analyticsLocations;
  const tmp4 = _location(surface[12])(game);
  const text = tmp4.text;
  ({ isPaidPlay, canAffordPlay } = tmp4);
  items = [OrbsArcadeStore];
  const items1 = [game.id];
  const stateFromStores = game(surface[13]).useStateFromStores(
    items,
    () => OrbsArcadeStore.getGameStateForGame(game.id),
    items1,
  );
  let result = _location(surface[14])(game, stateFromStores);
  let obj = game(surface[13]);
  const items2 = [OrbsArcadeStore];
  const items3 = [game.id];
  const items4 = [game, _location, surface];
  const stateFromStores1 = game(surface[13]).useStateFromStores(
    items2,
    () => OrbsArcadeStore.isLaunchingGame(game.id),
    items3,
  );
  const items5 = [game, analyticsLocations, _location, surface];
  const callback = analyticsLocations.useCallback(() => {
    const result = OrbsArcadeAnalytics.trackOrbsArcadeCtaClicked(
      game,
      OrbsArcadeAnalytics.OrbsArcadeCta.EARN_ORBS,
      _location,
      surface,
    );
    ActionSheetActionCreatorsDefault.hideActionSheet();
    QuestHomeNavigationStore.setState({ scrollToQuestsSection: true });
  }, items4);
  const callback1 = analyticsLocations.useCallback(() => {
    const result = OrbsArcadeAnalytics.trackOrbsArcadeCtaClicked(
      game,
      OrbsArcadeAnalytics.OrbsArcadeCta.PLAY,
      _location,
      surface,
    );
    launchOrbsArcadeGameDefault(game, analyticsLocations, surface);
  }, items5);
  if (null != stateFromStores) {
    if (tmp5Result.mustClaimOrbsArcadeRewardsToPlay(stateFromStores)) {
      const obj3 = {
        grow: true,
        size: DEFAULT_BUTTON_SIZE,
        variant: "primary",
        text: null,
        disabled: true,
        onPress: "Array",
      };
      const intl3 = tmp5(tmp3[6]).intl;
      const obj4 = { count: tmp5(tmp3[18]).getOrbsArcadeClaimableRewards(game.rewards, stateFromStores).length };
      obj3.text = intl3.formatToPlainString(tmp5(tmp3[6]).t["18ToNc"], obj4);
      let tmp18Result2 = jsx(tmp5(tmp3[19]).Button, {
        grow: true,
        size: DEFAULT_BUTTON_SIZE,
        variant: "primary",
        text: null,
        disabled: true,
        onPress: "Array",
      });
      const tmp5Result3 = tmp5(tmp3[18]);
    }
    return tmp18Result2;
  }
  if (null != result) {
    const obj5 = {
      grow: true,
      size: DEFAULT_BUTTON_SIZE,
      variant: "primary",
      text: null,
      disabled: true,
      onPress: "Array",
    };
    if (null != result.timeUntilNextRound) {
      const intl2 = tmp5(tmp3[6]).intl;
      const obj6 = { duration: null };
      result = tmp5(tmp3[20]).formatOrbsArcadeTimeUntil(result.timeUntilNextRound);
      obj6.duration = result;
      let formatToPlainStringResult = intl2.formatToPlainString(tmp5(tmp3[6]).t["Uk+BE3"], obj6);
      const tmp5Result4 = tmp5(tmp3[20]);
    } else {
      const intl = tmp5(tmp3[6]).intl;
      formatToPlainStringResult = intl.string(tmp5(tmp3[6]).t.iJjbMd);
    }
    obj5.text = formatToPlainStringResult;
    jsx(tmp5(tmp3[19]).Button, {
      grow: true,
      size: DEFAULT_BUTTON_SIZE,
      variant: "primary",
      text: null,
      disabled: true,
      onPress: "Array",
    });
  } else if (canAffordPlay) {
    const obj7 = {
      grow: true,
      size: DEFAULT_BUTTON_SIZE,
      variant: "primary",
      text,
      textElement: null,
      disabled: null,
      loading: null,
      onPress: null,
    };
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
    tmp18Result2 = jsx(tmp5(tmp3[21]).BaseTextButton, {
      grow: true,
      size: DEFAULT_BUTTON_SIZE,
      variant: "primary",
      text,
      textElement: null,
      disabled: null,
      loading: null,
      onPress: null,
    });
  } else {
    const obj9 = { grow: true, size: DEFAULT_BUTTON_SIZE, variant: "primary", text, onPress: callback };
    tmp18Result2 = jsx(tmp5(tmp3[19]).Button, {
      grow: true,
      size: DEFAULT_BUTTON_SIZE,
      variant: "primary",
      text,
      onPress: callback,
    });
  }
  const obj2 = game(surface[13]);
}
