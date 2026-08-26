// === Module 13496: BuildOverrideModal ===

// Module 13496 (BuildOverrideModal)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_5 from "getCurrentBuildOverride" /* 10545 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
noopAll;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: closure_6, Fragment: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: null, content: null, imageWrapper: null, text: null, buildOverrideName: null, buildOverrideExpiration: null, buildOverrideInvalid: null, buttonWrapper: null, actionButton: null };
createCacheKey = { flex: 1, height: "100%", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: 160, flex: 1, alignItems: "center" };
createCacheKey[2] = { width: 100, height: 100, borderRadius: ThemesDefault.radii.round, marginBottom: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, alignItems: "center", justifyContent: "center" };
createCacheKey[3] = { lineHeight: 24, textAlign: "center" };
createCacheKey[4] = { marginTop: 8 };
createCacheKey[5] = { lineHeight: 24 };
createCacheKey[6] = { marginTop: 8 };
createCacheKey[7] = { alignSelf: "stretch" };
createCacheKey[8] = { marginBottom: 8 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const obj1 = { width: 100, height: 100, borderRadius: ThemesDefault.radii.round, marginBottom: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, alignItems: "center", justifyContent: "center" };
let result = require("set").fileFinishedImporting("modules/build_overrides/native/BuildOverrideModal.tsx");

export default function BuildOverrideModal(overrideUrl) {
  let str = overrideUrl.overrideUrl;
  if (str === undefined) {
    str = "";
  }
  let stateFromStores;
  const tmp = callback2();
  let obj = str(1363);
  if (obj.isThemeDark(tmp4)) {
    let tmp2Result = tmp2(13497);
  } else {
    tmp2Result = tmp2(13498);
  }
  tmp4 = stateFromStores(4379)();
  const items = [closure_5];
  const items1 = [str];
  stateFromStores = str(589).useStateFromStores(items, () => closure_1_5.getBuildOverride(str), items1);
  const override = stateFromStores.override;
  let id;
  if (override != null) {
    const targetBuildOverride = override.targetBuildOverride;
    if (targetBuildOverride != null) {
      const tmp9 = targetBuildOverride[tmp5(undefined, 11419).DEVICE_FIELD];
      if (tmp9 != null) {
        id = tmp9.id;
      }
    }
  }
  tmp2Result = tmp2(4043);
  let obj3 = tmp2(4043)();
  let expiresAt;
  if (override != null) {
    expiresAt = override.expiresAt;
  }
  const tmp5Result = str(589);
  const durationResult = tmp2Result.duration(obj3.diff(expiresAt));
  obj = { top: true, bottom: true, style: tmp.container, children: null };
  obj = { style: tmp.content, children: null };
  const humanizeResult = tmp2Result.duration(obj3.diff(expiresAt)).humanize();
  const items2 = [callback(closure_4, { style: tmp.imageWrapper, children: callback(closure_3, { source: tmp2Result }) }), , ];
  const obj2 = { style: tmp.text, variant: "text-md/medium", children: null };
  const intl = tmp5(1236).intl;
  obj2[2] = intl.string(str(1236).t["6ILkNN"]);
  items2[1] = callback(str(4440).Text, obj2);
  if (null != id) {
    obj3 = { children: null };
    const obj4 = { style: null, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    obj4[0] = tmp.buildOverrideName;
    obj4[3] = id;
    const items3 = [tmp14(tmp5(4440).Text, obj4), ];
    const obj5 = { style: null, variant: "text-md/medium", color: "text-default", children: null };
    obj5[0] = tmp.buildOverrideExpiration;
    const intl3 = tmp5(1236).intl;
    const obj6 = { expirationDuration: null };
    obj6[0] = humanizeResult;
    obj5[3] = intl3.format(tmp5(1236).t.lOsPpu, obj6);
    items3[1] = tmp14(tmp5(4440).Text, obj5);
    obj3[0] = items3;
    let tmp14Result = tmp12(closure_7, obj3);
  } else {
    const obj7 = { style: null, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    obj7[0] = tmp.buildOverrideInvalid;
    const intl2 = tmp5(1236).intl;
    obj7[3] = intl2.string(tmp5(1236).t["cz+sue"]);
    tmp14Result = tmp14(tmp5(4440).Text, obj7);
  }
  items2[2] = tmp14Result;
  obj[1] = items2;
  const items4 = [closure_8(closure_4, obj), ];
  const obj8 = { style: tmp.buttonWrapper, children: null };
  if (null != id) {
    const obj9 = { children: null };
    const obj10 = { style: null, children: null };
    obj10[0] = tmp.actionButton;
    const obj11 = { text: null, grow: true, onPress: null };
    const intl5 = tmp5(1236).intl;
    obj11[0] = intl5.string(tmp5(1236).t.v0MBqF);
    obj11[2] = function onPress() {
      str = stateFromStores.validatedURL;
      if (str == null) {
        str = "";
      }
      const result = str(closure_1_2[11]).setBuildOverrideFromLink(str);
    };
    obj10[1] = tmp14(tmp5(4879).Button, obj11);
    const items5 = [tmp14(tmp13, obj10), ];
    const obj12 = { text: null, variant: "secondary", grow: true, onPress: null };
    const intl6 = tmp5(1236).intl;
    obj12[0] = intl6.string(tmp5(1236).t.b5KKph);
    obj12[3] = function onPress() {
      return stateFromStores(4675).pop();
    };
    items5[1] = tmp14(tmp5(4879).Button, obj12);
    obj9[0] = items5;
    let tmp12Result = tmp12(closure_7, obj9);
  } else {
    const obj13 = { text: null, grow: true, onPress: null };
    const intl4 = tmp5(1236).intl;
    obj13[0] = intl4.string(tmp5(1236).t.WRkdCQ);
    obj13[2] = function onPress() {
      return stateFromStores(4675).pop();
    };
    tmp12Result = tmp14(tmp5(4879).Button, obj13);
  }
  obj8[1] = tmp12Result;
  items4[1] = callback(closure_4, obj8);
  obj[3] = items4;
  return closure_8(str(5500).SafeAreaPaddingView, obj);
};