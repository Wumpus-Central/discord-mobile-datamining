// discord_app/modules/user_settings/phoenix_launch/native/PhoenixSettingsScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import openPremiumModalDefault from "../../../premium/native/openPremiumModal.tsx";
import PremiumFeaturesCards from "../../premium/native/PremiumFeaturesCards.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
function openNitroUpgrade() {
  const obj = {
    analyticsLocation: { section: AnalyticsSections.SETTINGS_PHOENIX },
    analyticsLocations: null,
    premiumFeatureCardOrder: null,
  };
  items = [AnalyticsLocationDefault.USER_SETTINGS];
  obj.analyticsLocations = items;
  obj.premiumFeatureCardOrder = PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING;
  openPremiumModalDefault(obj);
}
const ScrollView = fn(17).ScrollView;
const AnalyticsSections = fn(1071).AnalyticsSections;
const PremiumTypes = fn(1388).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5012);
let obj2 = {
  container: { flex: 1 },
  content: { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 },
};
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/phoenix_launch/native/PhoenixSettingsScreen.tsx");

export default function PhoenixSettingsScreen() {
  const tmp = closure_12();
  _require = tmp;
  bottom = bottom(1628)().bottom;
  items = [tmp.content, bottom];
  const memo = noop.useMemo(() => {
    items = [closure_0.content, { paddingBottom: bottom + nativeDefault.space.PX_16 }];
    return items;
  }, items);
  const requiresNitro = bottom(17327).useConfig(
    { location: "PhoenixSettingsScreen" },
    { autoTrackExposure: false },
  ).requiresNitro;
  let obj2 = bottom(17327);
  const items1 = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () =>
    closure_0(closure_2[22]).isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2),
  );
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  dependencyMap = tmp7[1];
  let tmp8 = !requiresNitro;
  if (requiresNitro) {
    tmp8 = stateFromStores;
  }
  let obj4 = { title: null, body: null, note: null, action: null };
  const callback = noop.useCallback(
    asyncGeneratorStep(async () => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === v2) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = tmp3;
              tmp23(true);
              c3 = 1;
              v2 = 2;
              c4 = 1;
              const obj4 = { value: v2(tmp23[23])(), done: false };
              return obj4;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_2(false);
            throw tmp23;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_2(false);
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            closure_128_2(false);
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp23) {
          if (tmp4 === c3) {
            c4 = tmp2;
            throw tmp23;
          } else {
            v2 = tmp;
          }
        }
      }
    }),
    [],
  );
  const intl = tmp5(1112).intl;
  const string = intl.string;
  const tmp2Result = bottom(4728);
  if (tmp8) {
    obj4.title = string(tmp2Result["zq7l/x"]);
    let Button = tmp5(1112).intl;
    let string2 = Button.string;
    const tmp5Result = tmp5(1378);
    let tmp2Result2 = tmp2(4728);
    obj4.note = string2(tmp5(1378).isAndroid() ? tmp2Result2.IJohaD : tmp2Result2.sDKQNC);
    Button = tmp5(5610).Button;
    const obj5 = { variant: "primary", icon: null, text: null, loading: null, onPress: null };
    const obj6 = { size: "sm", color: tmp2(575).colors.CONTROL_PRIMARY_TEXT_DEFAULT };
    obj5.icon = closure_10(tmp5(14251).FireIcon, obj6);
    const intl4 = tmp5(1112).intl;
    tmp2Result2 = intl4.string(tmp2(4728).vVxb4Y);
    obj5.text = tmp2Result2;
    obj5.loading = tmp7[0];
    obj5.onPress = callback;
    string2 = closure_10(Button, obj5);
    obj4.action = string2;
    const isAndroidResult = tmp5(1378).isAndroid();
  } else {
    obj4.title = string(tmp2Result.y9iUhJ);
    const intl2 = tmp5(1112).intl;
    obj4.body = intl2.string(tmp2(4728)["4AA4MK"]);
    const obj7 = { variant: "expressive", icon: tmp2(9596), text: null, onPress: null };
    const intl3 = tmp5(1112).intl;
    obj7.text = intl3.string(tmp2(4728).SdwcaZ);
    obj7.onPress = openNitroUpgrade;
    obj4.action = closure_10(tmp5(5610).Button, obj7);
    ({ body, note } = obj4);
    const obj8 = { style: tmp.container, contentContainerStyle: memo, children: null };
    ({ title, action } = obj4);
    const obj9 = { spacing: tmp2(575).space.PX_16, children: null };
    const obj10 = { variant: "heading-md/semibold", children: title };
    const items2 = [closure_10(tmp5(5603).Heading, obj10), ,];
    const obj11 = { spacing: tmp2(575).space.PX_8, children: null };
    const obj12 = { variant: "body-md/normal", color: "text-default", children: null };
    const intl5 = tmp5(1112).intl;
    obj12.children = intl5.string(tmp2(4728).yfoIbN);
    const items3 = [closure_10(tmp5(5603).Text, obj12)];
    let tmp11Result = null;
    if (null != body) {
      const obj13 = { variant: "body-md/normal", color: "text-default", children: body };
      tmp11Result = closure_10(tmp5(5603).Text, obj13);
    }
    items3[1] = tmp11Result;
    obj11.children = items3;
    items2[1] = closure_11(tmp5(6084).Stack, obj11);
    const obj14 = { spacing: tmp2(575).space.PX_12, children: null };
    const items4 = [action];
    let tmp11Result2 = null;
    if (null != note) {
      const obj15 = { variant: "body-xs/normal", color: "text-muted", children: note };
      tmp11Result2 = closure_10(tmp5(5603).Text, obj15);
    }
    items4[1] = tmp11Result2;
    obj14.children = items4;
    items2[2] = closure_11(tmp5(6084).Stack, obj14);
    obj9.children = items2;
    obj8.children = closure_11(tmp5(6084).Stack, obj9);
    return closure_10(ScrollView, obj8);
  }
  let obj3 = require("initialize");
}
