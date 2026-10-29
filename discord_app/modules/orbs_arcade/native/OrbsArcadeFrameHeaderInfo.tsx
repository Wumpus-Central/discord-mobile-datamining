// discord_app/modules/orbs_arcade/native/OrbsArcadeFrameHeaderInfo.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import OrbsArcadeStore from "../OrbsArcadeStore.tsx";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5005);
let obj2 = { container: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 }, namePill: null, nameText: null };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 };
obj2.namePill = { flexShrink: 1, minHeight: fn(5287).SMALL_BUTTON_HEIGHT, justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
let obj4 = { flexShrink: 1, minHeight: fn(5287).SMALL_BUTTON_HEIGHT, justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj2.nameText = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeFrameHeaderInfo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeFrameHeaderInfo(gameId) {
  const cResult = gameId(applicationId[9]).c(17);
  gameId = gameId.gameId;
  applicationId = gameId.applicationId;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [OrbsArcadeStore, ApplicationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === applicationId) {
    if (cResult[2] === gameId) {
      let tmp8 = cResult[3];
      let tmp9 = cResult[4];
    }
    const stateFromStores = tmp(tmp2[10]).useStateFromStores(first, tmp8, tmp9);
    const tmpResult = tmp(tmp2[10]);
    const balance = tmp(tmp2[11]).useFetchVirtualCurrencyBalance().balance;
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [OrbsArcadeStore];
      class C {
        constructor() {
          return closure_1_5.heldRunChargeTotal;
        }
      }
      cResult[5] = items1;
      cResult[6] = C;
    }
    tmp(tmp2[10]);
    let bound = null;
    if (null != balance) {
      const _Math = Math;
      bound = Math.max(balance - tmp15, 0);
    }
    if (cResult[7] === stateFromStores) {
      if (cResult[8] === tmp4.namePill) {
        if (cResult[9] === tmp4.nameText) {
          let tmp18 = cResult[10];
        }
        if (cResult[11] !== bound) {
          { balance: null }.balance = bound;
          class C {
            constructor() {
              return closure_1_5.heldRunChargeTotal;
            }
          }
          cResult[11] = bound;
          cResult[12] = tmp24;
          let tmp22 = tmp24;
          const obj2 = { balance: null };
        } else {
          tmp22 = cResult[12];
        }
        if (cResult[13] === tmp4.container) {
          if (cResult[14] === tmp18) {
            if (cResult[15] === tmp22) {
              let tmp25 = cResult[16];
            }
            return tmp25;
          }
        }
        class C {
          constructor() {
            return closure_1_5.heldRunChargeTotal;
          }
        }
        const obj3 = { style: tmp4.container, children: null };
        const items2 = [tmp18, tmp22];
        obj3.children = items2;
        const tmp27 = closure_7(View, obj3);
        cResult[13] = tmp4.container;
        cResult[14] = tmp18;
        cResult[15] = tmp22;
        cResult[16] = tmp27;
        tmp25 = tmp27;
      }
    }
    let tmp19 = null;
    if (null != stateFromStores) {
      tmp19 = null;
      if ("" !== stateFromStores) {
        const obj4 = { style: null, children: null };
        class C {
          constructor() {
            return closure_1_5.heldRunChargeTotal;
          }
        }
        const obj5 = { variant: "text-sm/semibold", color: "none", lineClamp: 1, maxFontSizeMultiplier: 1, style: tmp4.nameText, children: stateFromStores };
        obj4.children = closure_6(tmp(tmp2[12]).Text, obj5);
        tmp19 = closure_6(View, obj4);
      }
    }
    cResult[7] = stateFromStores;
    cResult[8] = tmp4.namePill;
    cResult[9] = tmp4.nameText;
    cResult[10] = tmp19;
    tmp18 = tmp19;
    const tmpResult3 = tmp(tmp2[11]);
  }
  const fn = function p() {
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
  };
  const items3 = [gameId, applicationId];
  cResult[1] = applicationId;
  cResult[2] = gameId;
  cResult[3] = fn;
  cResult[4] = items3;
  tmp9 = items3;
  tmp8 = fn;
  const obj = gameId(applicationId[9]);
}) : (function OrbsArcadeFrameHeaderInfo(gameId) {
  gameId = gameId.gameId;
  const applicationId = gameId.applicationId;
  const tmp = closure_8();
  const items = [OrbsArcadeStore, ApplicationStore];
  const items1 = [gameId, applicationId];
  const stateFromStores = gameId(applicationId[10]).useStateFromStores(items, () => {
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
  }, items1);
  const obj = gameId(applicationId[10]);
  const balance = gameId(applicationId[11]).useFetchVirtualCurrencyBalance().balance;
  const obj2 = gameId(applicationId[11]);
  const items2 = [OrbsArcadeStore];
  const stateFromStores1 = gameId(applicationId[10]).useStateFromStores(items2, () => heldRunChargeTotal.heldRunChargeTotal);
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
      const obj6 = { variant: "text-sm/semibold", color: "none", lineClamp: 1, maxFontSizeMultiplier: 1, style: tmp.nameText, children: stateFromStores };
      obj5.children = closure_6(tmp2(tmp3[12]).Text, obj6);
      tmp9 = closure_6(tmp8, obj5);
    }
  }
  const items4 = [tmp9, closure_6(gameId(applicationId[13]).BalanceWidgetPill, { balance: memo })];
  obj4.children = items4;
  return closure_7(stateFromStores1, obj4);
});