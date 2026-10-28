// === Module 18651: OrbsArcadeFrameHeaderInfo ===

// Module 18651 (OrbsArcadeFrameHeaderInfo)
import nativeDefault from "native" /* 587 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2042 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16662 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5004);
let obj2 = { container: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 }, namePill: null, nameText: null };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 };
obj2.namePill = { flexShrink: 1, minHeight: fn(5286).SMALL_BUTTON_HEIGHT, justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
let obj4 = { flexShrink: 1, minHeight: fn(5286).SMALL_BUTTON_HEIGHT, justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj2.nameText = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeFrameHeaderInfo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeFrameHeaderInfo(applicationId) {
  const cResult = applicationId(576).c(16);
  applicationId = applicationId.applicationId;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [OrbsArcadeStore, ApplicationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== applicationId) {
    const fn = function _() {
      const orbsArcadeGames = OrbsArcadeStore.orbsArcadeGames;
      const found = orbsArcadeGames.find((applicationId) => applicationId.applicationId === applicationId);
      let name;
      if (found != null) {
        name = found.name;
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
    const items1 = [applicationId];
    cResult[1] = applicationId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const obj = applicationId(576);
  const stateFromStores = applicationId(504).useStateFromStores(first, tmp8, tmp9);
  const tmpResult = applicationId(504);
  const balance = applicationId(9482).useFetchVirtualCurrencyBalance().balance;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [OrbsArcadeStore];
    const fn2 = function f() {
      return heldRunChargeTotal.heldRunChargeTotal;
    };
    cResult[4] = items2;
    cResult[5] = fn2;
  }
  applicationId(504);
  let bound = null;
  if (null != balance) {
    const _Math = Math;
    bound = Math.max(balance - tmp15, 0);
  }
  if (cResult[6] === stateFromStores) {
    if (cResult[7] === tmp4.namePill) {
      if (cResult[8] === tmp4.nameText) {
        let tmp17 = cResult[9];
      }
      if (cResult[10] !== bound) {
        const obj2 = { balance: bound };
        const tmp23 = closure_6(tmp(14183).BalanceWidgetPill, obj2);
        cResult[10] = bound;
        cResult[11] = tmp23;
        let tmp21 = tmp23;
      } else {
        tmp21 = cResult[11];
      }
      if (cResult[12] === tmp4.container) {
        if (cResult[13] === tmp17) {
          if (cResult[14] === tmp21) {
            let tmp24 = cResult[15];
          }
          return tmp24;
        }
      }
      const obj3 = { style: tmp4.container, children: null };
      const items3 = [tmp17, tmp21];
      obj3.children = items3;
      const tmp27 = closure_7(View, obj3);
      cResult[12] = tmp4.container;
      cResult[13] = tmp17;
      cResult[14] = tmp21;
      cResult[15] = tmp27;
      tmp24 = tmp27;
    }
  }
  let tmp18 = null;
  if (null != stateFromStores) {
    tmp18 = null;
    if ("" !== stateFromStores) {
      const obj4 = { style: tmp4.namePill, children: null };
      const obj5 = { variant: "text-sm/semibold", color: "none", lineClamp: 1, maxFontSizeMultiplier: 1, style: tmp4.nameText, children: stateFromStores };
      obj4.children = closure_6(tmp(5270).Text, obj5);
      tmp18 = closure_6(View, obj4);
    }
  }
  cResult[6] = stateFromStores;
  cResult[7] = tmp4.namePill;
  cResult[8] = tmp4.nameText;
  cResult[9] = tmp18;
  tmp17 = tmp18;
  const tmpResult3 = applicationId(9482);
}) : (function OrbsArcadeFrameHeaderInfo(applicationId) {
  applicationId = applicationId.applicationId;
  let balance;
  const tmp = closure_8();
  const items = [OrbsArcadeStore, ApplicationStore];
  const items1 = [applicationId];
  const stateFromStores = applicationId(balance[10]).useStateFromStores(items, () => {
    const orbsArcadeGames = OrbsArcadeStore.orbsArcadeGames;
    const found = orbsArcadeGames.find((applicationId) => applicationId.applicationId === applicationId);
    let name;
    if (found != null) {
      name = found.name;
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
  const obj = applicationId(balance[10]);
  balance = applicationId(balance[11]).useFetchVirtualCurrencyBalance().balance;
  const obj2 = applicationId(balance[11]);
  const items2 = [OrbsArcadeStore];
  const stateFromStores1 = applicationId(balance[10]).useStateFromStores(items2, () => heldRunChargeTotal.heldRunChargeTotal);
  const items3 = [balance, stateFromStores1];
  const obj4 = { style: tmp.container, children: null };
  let tmp9 = null;
  const memo = stateFromStores1.useMemo(() => {
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
      tmp9 = closure_6(View, obj5);
    }
  }
  const items4 = [tmp9, closure_6(applicationId(balance[13]).BalanceWidgetPill, { balance: memo })];
  obj4.children = items4;
  return closure_7(View, obj4);
});