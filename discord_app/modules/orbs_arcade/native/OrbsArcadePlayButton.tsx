// discord_app/modules/orbs_arcade/native/OrbsArcadePlayButton.tsx
import launchOrbsArcadeGameDefault from "launchOrbsArcadeGame.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import OrbsArcadeStore from "../OrbsArcadeStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadePlayButton.tsx");

export default function OrbsArcadePlayButton(game) {
  game = game.game;
  const size = game.size;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7320)().analyticsLocations;
  ({ text, isPaidPlay } = analyticsLocations(16979)(game));
  const tmp3 = analyticsLocations(16979)(game);
  const items = [OrbsArcadeStore];
  const items1 = [game.id];
  const stateFromStores = game(504).useStateFromStores(
    items,
    () => OrbsArcadeStore.getGameStateForGame(game.id),
    items1,
  );
  const obj = game(504);
  const items2 = [OrbsArcadeStore];
  const items3 = [game.id];
  const items4 = [game, analyticsLocations];
  const stateFromStores1 = game(504).useStateFromStores(items2, () => OrbsArcadeStore.isLaunchingGame(game.id), items3);
  const callback = noop.useCallback(() => launchOrbsArcadeGameDefault(game, analyticsLocations), items4);
  if (null != stateFromStores) {
    if (tmp4Result.mustClaimOrbsArcadeRewardsToPlay(stateFromStores)) {
      const obj3 = { game, size };
      let tmp8Result2 = jsx(tmp(16975), { game, size });
    }
    return tmp8Result2;
  }
  const obj4 = { grow: true, size, variant: "primary", text, icon: null, disabled: null, loading: null, onPress: null };
  let tmp8Result;
  if (isPaidPlay) {
    const obj5 = { size: "sm", color: tmp(575).colors.CONTROL_PRIMARY_TEXT_DEFAULT };
    tmp8Result = jsx(tmp4(9510).OrbsIcon, { size: "sm", color: tmp(575).colors.CONTROL_PRIMARY_TEXT_DEFAULT });
  }
  obj4.icon = tmp8Result;
  obj4.disabled = null == game.applicationId;
  obj4.loading = stateFromStores1;
  obj4.onPress = callback;
  tmp8Result2 = jsx(tmp4(5629).Button, {
    grow: true,
    size,
    variant: "primary",
    text,
    icon: null,
    disabled: null,
    loading: null,
    onPress: null,
  });
  const obj2 = game(504);
}
