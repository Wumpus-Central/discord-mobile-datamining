// discord_app/modules/virtual_currency/native/orb_wallet/OrbWalletActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5009);
let obj2 = {
  container: { width: "100%", paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 },
  section: null,
  challengesTitleRow: null,
  divider: null,
};
let obj3 = { width: "100%", paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.section = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.challengesTitleRow = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
};
let obj5 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
};
obj2.divider = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/orb_wallet/OrbWalletActionSheet.tsx");

export default function OrbWalletActionSheet(analyticsPage) {
  ({ balance, source } = analyticsPage);
  analyticsPage = analyticsPage.analyticsPage;
  const tmp2 = closure_7();
  let items = [source];
  let items1 = [analyticsPage];
  const memo = noop.useMemo(() => {
    if (typeof source === "string") {
      const items = [tmp, AnalyticsLocationDefault.ORB_WALLET];
      let items1 = items;
    } else {
      items1 = [AnalyticsLocationDefault.ORB_WALLET];
    }
    return items1;
  }, items);
  const memo1 = noop.useMemo(() => ({ analyticsPage }), items1);
  const obj = { theme: analyticsPage.themeOverride, children: null };
  const obj2 = { newLocations: memo, children: null };
  const obj3 = { value: memo1, children: null };
  const obj4 = { ref: noop.useRef(null), startExpanded: true, children: null };
  const obj5 = { style: tmp2.container, children: null };
  const obj6 = { style: tmp2.section, children: null };
  const items2 = [
    closure_5(source(17640).OrbBalanceHeader, { orbBalance: balance }),
    closure_5(source(17647).OrbWalletPrimaryCard, { orbBalance: balance }),
  ];
  obj6.children = items2;
  const items3 = [closure_6(View, obj6), , ,];
  const obj7 = { style: tmp2.section, children: null };
  const obj8 = { style: tmp2.challengesTitleRow, children: null };
  const obj9 = { variant: "text-sm/normal", color: "text-subtle", children: null };
  const intl = source(1114).intl;
  obj9.children = intl.string(analyticsPage(2173).H6Ny8N);
  obj8.children = closure_5(source(5619).Text, obj9);
  obj7.children = closure_5(View, obj8);
  items3[1] = closure_5(View, obj7);
  items3[2] = closure_5(View, { style: tmp2.divider });
  const obj10 = { style: tmp2.divider };
  const ref = noop.useRef(null);
  items3[3] = closure_5(View, { style: tmp2.section, children: closure_5(source(17640).OrbWalletFooter, {}) });
  obj5.children = items3;
  obj4.children = closure_6(View, obj5);
  obj3.children = closure_5(source(5267).BottomSheet, obj4);
  obj2.children = closure_5(source(17639).OrbWalletAnalyticsContext.Provider, obj3);
  obj.children = closure_5(source(17638).AnalyticsLocationsProvider, obj2);
  return closure_5(source(5075).ThemeContextProvider, obj);
}
