// === Module 18410: OrbsArcadeFrameHeaderInfo ===

// Module 18410 (OrbsArcadeFrameHeaderInfo)
import nativeDefault from "native" /* 587 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2042 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16434 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4972);
let obj2 = { container: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 }, namePill: null, nameText: null };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 };
obj2.namePill = { flexShrink: 1, minHeight: fn(5251).SMALL_BUTTON_HEIGHT, justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
let obj4 = { flexShrink: 1, minHeight: fn(5251).SMALL_BUTTON_HEIGHT, justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj2.nameText = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeFrameHeaderInfo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeFrameHeaderInfo(applicationId) {
  const cResult = applicationId(576).c(14);
  applicationId = applicationId.applicationId;
  const tmp4 = closure_7();
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
  const balance = applicationId(9450).useFetchVirtualCurrencyBalance().balance;
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === tmp4.namePill) {
      if (cResult[6] === tmp4.nameText) {
        let tmp11 = cResult[7];
      }
      if (cResult[8] !== balance) {
        const obj2 = { balance };
        const tmp17 = closure_5(tmp(13964).BalanceWidgetPill, obj2);
        cResult[8] = balance;
        cResult[9] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[9];
      }
      if (cResult[10] === tmp4.container) {
        if (cResult[11] === tmp11) {
          if (cResult[12] === tmp15) {
            let tmp18 = cResult[13];
          }
          return tmp18;
        }
      }
      const obj3 = { style: tmp4.container, children: null };
      const items2 = [tmp11, tmp15];
      obj3.children = items2;
      const tmp21 = closure_6(View, obj3);
      cResult[10] = tmp4.container;
      cResult[11] = tmp11;
      cResult[12] = tmp15;
      cResult[13] = tmp21;
      tmp18 = tmp21;
    }
  }
  let tmp12 = null;
  if (null != stateFromStores) {
    tmp12 = null;
    if ("" !== stateFromStores) {
      const obj4 = { style: tmp4.namePill, children: null };
      const obj5 = { variant: "text-sm/semibold", color: "none", lineClamp: 1, maxFontSizeMultiplier: 1, style: tmp4.nameText, children: stateFromStores };
      obj4.children = closure_5(tmp(5235).Text, obj5);
      tmp12 = closure_5(View, obj4);
    }
  }
  cResult[4] = stateFromStores;
  cResult[5] = tmp4.namePill;
  cResult[6] = tmp4.nameText;
  cResult[7] = tmp12;
  tmp11 = tmp12;
  const tmpResult2 = applicationId(9450);
}) : (function OrbsArcadeFrameHeaderInfo(applicationId) {
  applicationId = applicationId.applicationId;
  const tmp = closure_7();
  const items = [OrbsArcadeStore, ApplicationStore];
  const items1 = [applicationId];
  const stateFromStores = applicationId(504).useStateFromStores(items, () => {
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
  const obj = applicationId(504);
  const obj3 = { style: tmp.container, children: null };
  let tmp7 = null;
  if (null != stateFromStores) {
    tmp7 = null;
    if ("" !== stateFromStores) {
      const obj4 = { style: tmp.namePill, children: null };
      const obj5 = { variant: "text-sm/semibold", color: "none", lineClamp: 1, maxFontSizeMultiplier: 1, style: tmp.nameText, children: stateFromStores };
      obj4.children = closure_5(tmp2(5235).Text, obj5);
      tmp7 = closure_5(View, obj4);
    }
  }
  const items2 = [tmp7, closure_5(applicationId(13964).BalanceWidgetPill, { balance: applicationId(9450).useFetchVirtualCurrencyBalance().balance })];
  obj3.children = items2;
  return closure_6(View, obj3);
});