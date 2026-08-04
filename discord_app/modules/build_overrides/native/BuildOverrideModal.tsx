// discord_app/modules/build_overrides/native/BuildOverrideModal.tsx
import "noop";
import get_ActivityIndicator from "module_4399";
import getCurrentBuildOverride from "getCurrentBuildOverride";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: closure_6, Fragment: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { container: null, content: null, imageWrapper: null, text: null, buildOverrideName: null, buildOverrideExpiration: null, buildOverrideInvalid: null, buttonWrapper: null, actionButton: null };
createCacheKey = { flex: 1, height: "100%", alignItems: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: 160, flex: 1, alignItems: "center" };
createCacheKey[2] = { width: 100, height: 100, borderRadius: require("Themes").radii.round, marginBottom: 16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, alignItems: "center", justifyContent: "center" };
createCacheKey[3] = { lineHeight: 24, textAlign: "center" };
createCacheKey[4] = { marginTop: 8 };
createCacheKey[5] = { lineHeight: 24 };
createCacheKey[6] = { marginTop: 8 };
createCacheKey[7] = { alignSelf: "stretch" };
createCacheKey[8] = { marginBottom: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { width: 100, height: 100, borderRadius: require("Themes").radii.round, marginBottom: 16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, alignItems: "center", justifyContent: "center" };
let result = require("getCurrentBuildOverride").fileFinishedImporting("modules/build_overrides/native/BuildOverrideModal.tsx");

export default function BuildOverrideModal(overrideUrl) {
  let str = overrideUrl.overrideUrl;
  if (str === undefined) {
    str = "";
  }
  let stateFromStores;
  const tmp = createCacheKey();
  let obj = str(4039);
  if (obj.isThemeDark(tmp4)) {
    let tmp2Result = tmp2(13029);
  } else {
    tmp2Result = tmp2(13030);
  }
  tmp4 = stateFromStores(4129)();
  const items = [getCurrentBuildOverride];
  const items1 = [str];
  stateFromStores = str(589).useStateFromStores(items, () => outer1_5.getBuildOverride(str), items1);
  const override = stateFromStores.override;
  let id;
  if (override != null) {
    const targetBuildOverride = override.targetBuildOverride;
    if (targetBuildOverride != null) {
      const tmp9 = targetBuildOverride[tmp5(undefined, 10994).DEVICE_FIELD];
      if (tmp9 != null) {
        id = tmp9.id;
      }
    }
  }
  tmp2Result = tmp2(3775);
  let obj3 = tmp2(3775)();
  let expiresAt;
  if (override != null) {
    expiresAt = override.expiresAt;
  }
  const tmp5Result = str(589);
  const durationResult = tmp2Result.duration(obj3.diff(expiresAt));
  obj = { top: true, bottom: true, style: tmp.container, children: null };
  obj = { style: tmp.content, children: null };
  const obj1 = { style: tmp.imageWrapper, children: null };
  obj1[1] = callback(closure_3, { source: tmp2Result });
  const items2 = [callback(closure_4, obj1), , ];
  const obj2 = { style: tmp.text, variant: "text-md/medium", children: null };
  const intl = tmp5(1236).intl;
  obj2[2] = intl.string(str(1236).t["6ILkNN"]);
  items2[1] = callback(str(4189).Text, obj2);
  if (null != id) {
    obj3 = { children: null };
    const obj4 = { style: null, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    obj4[0] = tmp.buildOverrideName;
    obj4[3] = id;
    const items3 = [tmp14(tmp5(4189).Text, obj4), ];
    const obj5 = { style: null, variant: "text-md/medium", color: "text-default", children: null };
    obj5[0] = tmp.buildOverrideExpiration;
    const intl3 = tmp5(1236).intl;
    const obj6 = { expirationDuration: null };
    obj6[0] = humanizeResult;
    obj5[3] = intl3.format(tmp5(1236).t.lOsPpu, obj6);
    items3[1] = tmp14(tmp5(4189).Text, obj5);
    obj3[0] = items3;
    let tmp14Result = tmp12(closure_7, obj3);
  } else {
    const obj7 = { style: null, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    obj7[0] = tmp.buildOverrideInvalid;
    const intl2 = tmp5(1236).intl;
    obj7[3] = intl2.string(tmp5(1236).t["cz+sue"]);
    tmp14Result = tmp14(tmp5(4189).Text, obj7);
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
      let str = stateFromStores.validatedURL;
      if (str == null) {
        str = "";
      }
      const result = str(outer1_2[11]).setBuildOverrideFromLink(str);
    };
    obj10[1] = tmp14(tmp5(4604).Button, obj11);
    const items5 = [tmp14(tmp13, obj10), ];
    const obj12 = { text: null, variant: "secondary", grow: true, onPress: null };
    const intl6 = tmp5(1236).intl;
    obj12[0] = intl6.string(tmp5(1236).t.b5KKph);
    obj12[3] = function onPress() {
      return stateFromStores(4399).pop();
    };
    items5[1] = tmp14(tmp5(4604).Button, obj12);
    obj9[0] = items5;
    let tmp12Result = tmp12(closure_7, obj9);
  } else {
    const obj13 = { text: null, grow: true, onPress: null };
    const intl4 = tmp5(1236).intl;
    obj13[0] = intl4.string(tmp5(1236).t.WRkdCQ);
    obj13[2] = function onPress() {
      return stateFromStores(4399).pop();
    };
    tmp12Result = tmp14(tmp5(4604).Button, obj13);
  }
  obj8[1] = tmp12Result;
  items4[1] = callback(closure_4, obj8);
  obj[3] = items4;
  return closure_8(str(5181).SafeAreaPaddingView, obj);
};