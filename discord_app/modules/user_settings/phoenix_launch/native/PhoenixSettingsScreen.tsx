// discord_app/modules/user_settings/phoenix_launch/native/PhoenixSettingsScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4665 from "../PhoenixSettings.messages.js";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import openPremiumModalDefault from "../../../premium/native/openPremiumModal.tsx";
import _modDef9497 from "../../../../../_runtime/metro/09497__.js";
import PremiumFeaturesCards from "../../premium/native/PremiumFeaturesCards.tsx";
import _modDef14129 from "../../../../../_runtime/metro/14129__.js";
import PhoenixSwitchEntrypointExperimentDefault from "PhoenixSwitchEntrypointExperiment.tsx";
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
function PhoenixStatusCard() {
  const tmp = closure_13();
  const requiresNitro = PhoenixSwitchEntrypointExperimentDefault.useConfig(
    { location: "PhoenixSettingsScreen" },
    { autoTrackExposure: false },
  ).requiresNitro;
  items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    closure_0(dependencyMap[21]).isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2),
  );
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  _require = tmp6[1];
  let tmp7 = !requiresNitro;
  if (requiresNitro) {
    tmp7 = stateFromStores;
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
          return { value: "HermesInternal", done: null };
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
              tmp3(true);
              c3 = 1;
              v2 = 2;
              c4 = 1;
              const obj4 = { value: v2(tmp23[22])(), done: false };
              return obj4;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_0(false);
            throw tmp23;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_0(false);
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            closure_128_0(false);
            c4 = 3;
            return { value: "HermesInternal", done: null };
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
  const intl = tmp4(1112).intl;
  const string = intl.string;
  const tmp2Result = _modDef4665;
  if (tmp7) {
    obj4.title = string(tmp2Result["zq7l/x"]);
    const intl4 = tmp4(1112).intl;
    obj4.body = intl4.string(_modDef4665.vE5daK);
    let Button = tmp4(1112).intl;
    let string2 = Button.string;
    const tmp4Result = tmp4(1378);
    let tmp2Result2 = _modDef4665;
    obj4.note = string2(tmp4(1378).isAndroid() ? tmp2Result2.IJohaD : tmp2Result2.sDKQNC);
    Button = tmp4(5515).Button;
    const obj5 = { variant: "primary", icon: _modDef14129, text: null, loading: null, onPress: null };
    const intl5 = tmp4(1112).intl;
    tmp2Result2 = intl5.string(_modDef4665.vVxb4Y);
    obj5.text = tmp2Result2;
    obj5.loading = tmp6[0];
    obj5.onPress = callback;
    string2 = closure_11(Button, obj5);
    obj4.action = string2;
    const isAndroidResult = tmp4(1378).isAndroid();
  } else {
    obj4.title = string(tmp2Result.y9iUhJ);
    const intl2 = tmp4(1112).intl;
    obj4.body = intl2.string(_modDef4665["4AA4MK"]);
    const obj6 = { variant: "expressive", icon: _modDef9497, text: null, onPress: null };
    const intl3 = tmp4(1112).intl;
    obj6.text = intl3.string(_modDef4665.SdwcaZ);
    obj6.onPress = openNitroUpgrade;
    obj4.action = closure_11(tmp4(5515).Button, obj6);
    const note = obj4.note;
    const obj7 = { style: tmp.statusCard, children: null };
    ({ title, body, action } = obj4);
    const obj8 = { spacing: nativeDefault.space.PX_12, children: null };
    const obj9 = { variant: "heading-md/semibold", children: title };
    const items1 = [closure_11(tmp4(5508).Heading, obj9), , ,];
    const obj10 = { variant: "body-sm/normal", color: "text-muted", children: body };
    items1[1] = closure_11(tmp4(5508).Text, obj10);
    items1[2] = action;
    let tmp10Result = null;
    if (null != note) {
      const obj11 = { variant: "body-xs/normal", color: "text-muted", children: note };
      tmp10Result = closure_11(tmp4(5508).Text, obj11);
    }
    items1[3] = tmp10Result;
    obj8.children = items1;
    obj7.children = closure_12(tmp4(5989).Stack, obj8);
    return closure_11(closure_7, obj7);
  }
  let obj2 = require("initialize");
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_6, View: metroImportDefault } = get_ActivityIndicator);
const AnalyticsSections = fn(1071).AnalyticsSections;
const PremiumTypes = fn(1388).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4917);
let obj2 = {
  container: { flex: 1 },
  content: { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 },
  statusCard: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 };
obj2.statusCard = {
  padding: nativeDefault.space.PX_16,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/phoenix_launch/native/PhoenixSettingsScreen.tsx");

export default function PhoenixSettingsScreen() {
  const tmp = closure_13();
  _require = tmp;
  bottom = bottom(1628)().bottom;
  items = [tmp.content, bottom];
  const obj = {
    style: tmp.container,
    contentContainerStyle: noop.useMemo(() => {
      items = [content.content, { paddingBottom: bottom + nativeDefault.space.PX_16 }];
      return items;
    }, items),
    children: null,
  };
  const obj2 = { spacing: bottom(575).space.PX_16, children: null };
  const obj3 = { variant: "body-md/normal", color: "text-default", children: null };
  const intl = require("util").intl;
  obj3.children = intl.string(bottom(4665).yfoIbN);
  const items1 = [closure_11(require("Text/Text").Text, obj3), closure_11(PhoenixStatusCard, {})];
  obj2.children = items1;
  obj.children = closure_12(require("Stack/Stack").Stack, obj2);
  return closure_11(closure_6, obj);
}
