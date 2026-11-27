// discord_app/modules/user_settings/phoenix_launch/native/PhoenixSettingsScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import openPremiumModalDefault from "../../../premium/native/openPremiumModal.tsx";
import PremiumFeaturesCards from "../../premium/native/PremiumFeaturesCards.tsx";
import switchToPhoenix from "switchToPhoenix.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;
const switchToPhoenixDefault = switchToPhoenix;

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
const PremiumTypes = fn(1389).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5043);
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
  bottom = bottom(1629)().bottom;
  items = [tmp.content, bottom];
  const memo = noop.useMemo(() => {
    items = [closure_0.content, { paddingBottom: bottom + nativeDefault.space.PX_16 }];
    return items;
  }, items);
  const requiresNitro = bottom(17385).useConfig(
    { location: "PhoenixSettingsScreen" },
    { autoTrackExposure: false },
  ).requiresNitro;
  let obj2 = bottom(17385);
  const items1 = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () =>
    closure_0(dependencyMap[22]).isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2),
  );
  let obj3 = require("initialize");
  const shouldLaunchPhoenix = require("PhoenixLaunchState").useShouldLaunchPhoenix();
  let obj4 = require("PhoenixLaunchState");
  [tmp9, dependencyMap] = noop.useState(false);
  _require = callback(function* (arg0) {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp3;
            v2(true);
            c4 = 1;
            v2 = 2;
            c5 = 1;
            const obj4 = { value: closure_0(), done: false };
            return obj4;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          v2(false);
          throw closure_3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          v2(false);
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c4 = 0;
          v2(false);
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp22) {
        closure_3 = tmp22;
        if (tmp4 === c4) {
          c5 = tmp2;
          throw tmp22;
        } else {
          v2 = tmp;
        }
      }
    }
  });
  callback = noop.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, []);
  let tmp11 = !requiresNitro;
  if (requiresNitro) {
    tmp11 = stateFromStores;
  }
  const items2 = [callback];
  const items3 = [callback];
  const callback1 = noop.useCallback(() => callback(switchToPhoenixDefault), items2);
  const obj5 = { title: null, body: null, note: null, action: null };
  const callback2 = noop.useCallback(() => callback(switchToPhoenix.cancelSwitchToPhoenix), items3);
  const intl = tmp5(1112).intl;
  const string = intl.string;
  const tmp2Result = bottom(4729);
  if (tmp11) {
    obj5.title = string(tmp2Result["zq7l/x"]);
    const intl4 = tmp5(1112).intl;
    const tmp5Result = tmp5(1379);
    const tmp2Result2 = tmp2(4729);
    obj5.note = intl4.string(tmp5(1379).isAndroid() ? tmp2Result2.IJohaD : tmp2Result2.sDKQNC);
    if (shouldLaunchPhoenix) {
      const obj6 = { variant: "secondary", text: null, loading: null, onPress: null };
      const intl6 = tmp5(1112).intl;
      obj6.text = intl6.string(tmp2(4729).TUZMAM);
      obj6.loading = tmp9;
      obj6.onPress = callback2;
      let obj7 = obj6;
    } else {
      obj7 = { variant: "primary", icon: null, text: null, loading: null, onPress: null };
      const obj8 = { size: "sm", color: tmp2(575).colors.CONTROL_PRIMARY_TEXT_DEFAULT };
      obj7.icon = closure_10(tmp5(14310).FireIcon, obj8);
      const intl5 = tmp5(1112).intl;
      obj7.text = intl5.string(tmp2(4729).vVxb4Y);
      obj7.loading = tmp9;
      obj7.onPress = callback1;
    }
    obj5.action = closure_10(tmp5(5641).Button, obj7);
    const isAndroidResult = tmp5(1379).isAndroid();
  } else {
    obj5.title = string(tmp2Result.y9iUhJ);
    const intl2 = tmp5(1112).intl;
    obj5.body = intl2.string(tmp2(4729)["4AA4MK"]);
    const obj9 = { variant: "expressive", icon: tmp2(9639), text: null, onPress: null };
    const intl3 = tmp5(1112).intl;
    obj9.text = intl3.string(tmp2(4729).SdwcaZ);
    obj9.onPress = openNitroUpgrade;
    obj5.action = closure_10(tmp5(5641).Button, obj9);
    ({ body, note } = obj5);
    const obj10 = { style: tmp.container, contentContainerStyle: memo, children: null };
    ({ title, action } = obj5);
    const obj11 = { spacing: tmp2(575).space.PX_16, children: null };
    const obj12 = { variant: "heading-md/semibold", children: title };
    const items4 = [closure_10(tmp5(5634).Heading, obj12), ,];
    const obj13 = { spacing: tmp2(575).space.PX_8, children: null };
    const obj14 = { variant: "body-md/normal", color: "text-default", children: null };
    const intl7 = tmp5(1112).intl;
    obj14.children = intl7.string(tmp2(4729).yfoIbN);
    const items5 = [closure_10(tmp5(5634).Text, obj14)];
    let tmp15Result = null;
    if (null != body) {
      const obj15 = { variant: "body-md/normal", color: "text-default", children: body };
      tmp15Result = closure_10(tmp5(5634).Text, obj15);
    }
    items5[1] = tmp15Result;
    obj13.children = items5;
    items4[1] = closure_11(tmp5(6115).Stack, obj13);
    const obj16 = { spacing: tmp2(575).space.PX_12, children: null };
    const items6 = [action];
    let tmp15Result2 = null;
    if (null != note) {
      const obj17 = { variant: "body-xs/normal", color: "text-muted", children: note };
      tmp15Result2 = closure_10(tmp5(5634).Text, obj17);
    }
    items6[1] = tmp15Result2;
    obj16.children = items6;
    items4[2] = closure_11(tmp5(6115).Stack, obj16);
    obj11.children = items4;
    obj10.children = closure_11(tmp5(6115).Stack, obj11);
    return closure_10(ScrollView, obj10);
  }
  const tmp8 = _slicedToArray(noop.useState(false), 2);
}
