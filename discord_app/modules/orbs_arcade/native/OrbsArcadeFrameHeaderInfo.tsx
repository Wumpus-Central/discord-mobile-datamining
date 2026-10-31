// discord_app/modules/orbs_arcade/native/OrbsArcadeFrameHeaderInfo.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import OrbsArcadeStore from "../OrbsArcadeStore.tsx";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  container: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 },
  namePill: null,
  nameText: null,
};
const obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 };
obj2.namePill = {
  flexShrink: 1,
  minHeight: fn(5640).SMALL_BUTTON_HEIGHT,
  justifyContent: "center",
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
};
let obj4 = {
  flexShrink: 1,
  minHeight: fn(5640).SMALL_BUTTON_HEIGHT,
  justifyContent: "center",
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
};
obj2.nameText = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeFrameHeaderInfo.tsx");

export default function OrbsArcadeFrameHeaderInfo(gameId) {
  gameId = gameId.gameId;
  const applicationId = gameId.applicationId;
  const tmp = closure_8();
  const items = [OrbsArcadeStore, ApplicationStore];
  const items1 = [gameId, applicationId];
  const stateFromStores = gameId(applicationId[8]).useStateFromStores(
    items,
    () => {
      const game = OrbsArcadeStore.getGame(gameId);
      let name;
      if (game != null) {
        name = game.name;
      }
      if (name == null) {
        const application = ApplicationStore.getApplication(applicationId);
        let name1;
        if (application != null) {
          name1 = application.name;
        }
        name = name1;
      }
      return name;
    },
    items1,
  );
  const obj = gameId(applicationId[8]);
  const balance = gameId(applicationId[9]).useFetchVirtualCurrencyBalance().balance;
  const obj2 = gameId(applicationId[9]);
  const items2 = [OrbsArcadeStore];
  const stateFromStores1 = gameId(applicationId[8]).useStateFromStores(
    items2,
    () => heldRunChargeTotal.heldRunChargeTotal,
  );
  const items3 = [balance, stateFromStores1];
  const obj4 = { style: tmp.container, children: null };
  let tmp9 = null;
  const memo = balance.useMemo(() => {
    let bound = null;
    if (null != balance) {
      const _Math = Math;
      bound = Math.max(tmp - stateFromStores1, 0);
    }
    return bound;
  }, items3);
  if (null != stateFromStores) {
    tmp9 = null;
    if ("" !== stateFromStores) {
      const obj5 = { style: tmp.namePill, children: null };
      const obj6 = {
        variant: "text-sm/semibold",
        color: "none",
        lineClamp: 1,
        maxFontSizeMultiplier: 1,
        style: tmp.nameText,
        children: stateFromStores,
      };
      obj5.children = closure_6(tmp2(tmp3[10]).Text, obj6);
      tmp9 = closure_6(tmp8, obj5);
    }
  }
  const items4 = [tmp9, closure_6(gameId(applicationId[11]).BalanceWidgetPill, { balance: memo })];
  obj4.children = items4;
  return closure_7(stateFromStores1, obj4);
}
