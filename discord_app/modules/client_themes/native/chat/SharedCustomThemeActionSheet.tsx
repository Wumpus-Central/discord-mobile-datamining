// discord_app/modules/client_themes/native/chat/SharedCustomThemeActionSheet.tsx
import _slicedToArray from "_slicedToArray";
import initialize from "initialize";
import noop from "initialize";
import { View } from "saveGuildFolders";
import reset from "reset";
import { AnalyticEvents } from "ME";
import { PremiumTypes } from "GuildFeatures";
import jsxProd from "openPremiumPlanSelectionActionSheet";
import createCacheKey from "createCacheKey";

let c5;
let closure_12;
let closure_6;
let error;
let map1;
let require = arg1;
function PrimaryActionButton(onPressApply) {
  const tmp = createCacheKey();
  const require = tmp;
  let obj = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  let items = [reset];
  const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  if (obj2.getPremiumTypeFromSubscription(stateFromStores) !== PremiumTypes.TIER_2) {
    obj = { text: null, onPress: null, renderIcon: null, style: null };
    const intl2 = tmp2(1236).intl;
    obj[0] = intl2.string(tmp2(1236).t.pj0XBN);
    obj[1] = function onPressSubscribe() {
      const obj = { premiumType: TIER_2.TIER_2, analyticsLocations: null, analyticsLocation: null };
      const items = [callback(5630).SHARE_CUSTOM_CLIENT_THEME_EMBED];
      obj[1] = items;
      obj[2] = {};
      callback(6795)(obj);
    };
    obj[2] = function renderIcon() {
      const style = [tmp.nitroWheelButton];
      return outer1_12(tmp(outer1_2[23]).NitroWheel, { style });
    };
    obj[3] = tmp.getNitroButton;
    let tmp6 = callback4(tmp2(1297).ShinyButton, obj);
  } else {
    obj = { text: null, onPress: null, variant: "primary" };
    const intl = tmp2(1236).intl;
    obj[0] = intl.string(tmp2(1236).t["1Qm822"]);
    obj[1] = onPressApply.onPressApply;
    tmp6 = callback4(tmp2(4695).Button, obj);
  }
  return tmp6;
}
({ useEffect: c5, useLayoutEffect: closure_6, useRef: error } = noop);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { contentWrapper: { paddingHorizontal: 43.5, paddingVertical: 12 }, centeredText: { textAlign: "center" }, ctaContainer: { paddingHorizontal: 15, flexDirection: "column", display: "flex", gap: 6 }, nitroWheelButton: { marginStart: -2, width: 20, height: 20 }, getNitroButton: null };
createCacheKey = { borderRadius: require("Themes").radii.round };
createCacheKey[4] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/client_themes/native/chat/SharedCustomThemeActionSheet.tsx");

export default function _default(message) {
  const sharedClientTheme = message.message.sharedClientTheme;
  const tmp = createCacheKey();
  let tmp2 = callback3(null);
  const importDefault = tmp2;
  let obj = first1;
  let tmp4;
  if (undefined !== sharedClientTheme) {
    obj = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
    let colors = sharedClientTheme.colors;
    obj[0] = colors.map((arg0) => "#" + arg0);
    obj[1] = [];
    ({ gradient_angle: obj2[2], base_mix: obj2[3] } = sharedClientTheme);
    tmp4 = obj;
  }
  const tmp6 = callback(first1.useState(tmp4), 2);
  const first = tmp6[0];
  callback = tmp6[1];
  let baseTheme;
  if (undefined !== sharedClientTheme) {
    let obj2 = sharedClientTheme(first[24]);
    baseTheme = obj2.getBaseTheme(sharedClientTheme.base_theme);
  }
  let tmp5Result = tmp5(obj.useState(baseTheme), 2);
  first1 = tmp5Result[0];
  const callback2 = tmp5Result[1];
  tmp5Result = tmp5(obj.useState(false), 2);
  const first2 = tmp5Result[0];
  callback3 = tmp5Result[1];
  const ref = obj.useRef(true);
  const items = [sharedClientTheme];
  callback2(() => {
    let tmp4;
    if (undefined !== sharedClientTheme) {
      const obj = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
      const colors = tmp2.colors;
      obj[0] = colors.map((arg0) => "#" + arg0);
      obj[1] = [];
      ({ gradient_angle: obj[2], base_mix: obj[3] } = tmp2);
      tmp4 = obj;
    }
    _slicedToArray(tmp4);
    let baseTheme;
    if (undefined !== sharedClientTheme) {
      baseTheme = sharedClientTheme(first[24]).getBaseTheme(tmp2.base_theme);
      const obj2 = sharedClientTheme(first[24]);
    }
    closure_5(baseTheme);
    sharedClientTheme(first[9]).track(outer1_10.CUSTOM_THEME_SHARE_PREVIEWED, {});
  }, items);
  const items1 = [first, first1];
  callback2(() => {
    let tmp2 = undefined !== first;
    if (tmp2) {
      tmp2 = undefined !== first1;
    }
    if (tmp2) {
      let obj = sharedClientTheme(first[10]);
      obj = { baseTheme: null, customTheme: null };
      obj[0] = first1;
      obj[1] = first;
      obj.previewCustomTheme(obj);
      sharedClientTheme(first[11]).refreshTheme();
      const obj3 = sharedClientTheme(first[11]);
    }
  }, items1);
  const items2 = [first2];
  first2(() => {
    ref.current = !first2;
  }, items2);
  const items3 = [ref];
  callback2(() => () => {
    if (ref.current) {
      outer1_0(outer1_2[10]).clearPreviewTheme();
      const obj = outer1_0(outer1_2[10]);
      outer1_0(outer1_2[11]).refreshTheme();
      const obj2 = outer1_0(outer1_2[11]);
    }
  }, items3);
  obj = { ref: tmp2, backdropOpacity: 0, children: null };
  const obj1 = { title: null };
  const intl = sharedClientTheme(first[14]).intl;
  obj1[0] = intl.string(importDefault(first[15])["3ej1LT"]);
  const items4 = [callback4(sharedClientTheme(first[13]).BottomSheetTitleHeader, obj1), , ];
  obj2 = { style: tmp.contentWrapper, children: null };
  let obj3 = { variant: "heading-md/medium", style: tmp.centeredText, children: null };
  const intl2 = sharedClientTheme(first[14]).intl;
  obj3[2] = intl2.string(importDefault(first[15]).qZMUoL);
  obj2[1] = callback4(sharedClientTheme(first[16]).Text, obj3);
  items4[1] = callback4(ref, obj2);
  let obj4 = { style: tmp.ctaContainer, children: null };
  const items5 = [
    callback4(PrimaryActionButton, {
      onPressApply() {
        let tmp2 = undefined !== first;
        if (tmp2) {
          tmp2 = undefined !== first1;
        }
        if (tmp2) {
          tmp2 = null !== tmp2.current;
        }
        if (tmp2) {
          callback(true);
          let obj = sharedClientTheme(first[10]);
          obj.updateCustomTheme(tmp, first1);
          obj = { customUserThemeSettings: null, theme: null };
          obj[0] = tmp;
          obj[1] = first1;
          sharedClientTheme(first[17]).saveClientTheme(obj);
          const obj2 = sharedClientTheme(first[17]);
          sharedClientTheme(first[10]).clearPreviewTheme();
          const obj4 = sharedClientTheme(first[10]);
          tmp2(first[9]).track(outer1_10.CUSTOM_THEME_SHARE_APPLIED, {});
          const current = tmp2.current;
          current.closeActionSheet();
          const obj5 = tmp2(first[9]);
        }
      }
    }),

  ];
  const obj6 = { text: null, onPress: null, variant: "secondary" };
  const intl3 = sharedClientTheme(first[14]).intl;
  obj6[0] = intl3.string(sharedClientTheme(first[14]).t["13/7kX"]);
  obj6[1] = function onPress() {
    if (null !== tmp2.current) {
      sharedClientTheme(first[10]).clearPreviewTheme();
      const obj = sharedClientTheme(first[10]);
      tmp2 = sharedClientTheme;
      sharedClientTheme(first[11]).refreshTheme();
      const current = tmp.current;
      current.closeActionSheet();
      const obj2 = sharedClientTheme(first[11]);
    }
  };
  items5[1] = callback4(sharedClientTheme(first[18]).Button, obj6);
  obj4[1] = items5;
  items4[2] = callback5(ref, obj4);
  obj[2] = items4;
  return callback5(sharedClientTheme(first[12]).BottomSheet, obj);
};