// discord_app/modules/build_overrides/native/BuildOverrideModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import build_overrides_BuildOverrideUtils from "BuildOverrideUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import BuildOverrideStore from "../BuildOverrideStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  content: null,
  imageWrapper: null,
  text: null,
  buildOverrideName: null,
  buildOverrideExpiration: null,
  buildOverrideInvalid: null,
  buttonWrapper: null,
  actionButton: null,
};
createStyles = {
  flex: 1,
  height: "100%",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  paddingHorizontal: 16,
};
createStyles.container = createStyles;
createStyles.content = { marginTop: 160, flex: 1, alignItems: "center" };
let size = {
  width: 100,
  height: 100,
  borderRadius: nativeDefault.radii.round,
  marginBottom: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  alignItems: "center",
  justifyContent: "center",
};
createStyles.imageWrapper = size;
createStyles.text = { lineHeight: 24, textAlign: "center" };
createStyles.buildOverrideName = { marginTop: 8 };
createStyles.buildOverrideExpiration = { lineHeight: 24 };
createStyles.buildOverrideInvalid = { marginTop: 8 };
createStyles.buttonWrapper = { alignSelf: "stretch" };
createStyles.actionButton = { marginBottom: 8 };
let closure_9 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/build_overrides/native/BuildOverrideModal.tsx");

export default function BuildOverrideModal(overrideUrl) {
  let str = overrideUrl.overrideUrl;
  if (str === undefined) {
    str = "";
  }
  let stateFromStores;
  const tmp = closure_9();
  let obj = str(4411);
  if (obj.isThemeDark(tmp4)) {
    let tmp2Result = tmp2(13871);
  } else {
    tmp2Result = tmp2(13872);
  }
  tmp4 = stateFromStores(4495)();
  const items = [BuildOverrideStore];
  const items1 = [str];
  stateFromStores = str(504).useStateFromStores(items, () => BuildOverrideStore.getBuildOverride(str), items1);
  const override = stateFromStores.override;
  let id;
  if (override != null) {
    const targetBuildOverride = override.targetBuildOverride;
    if (targetBuildOverride != null) {
      const tmp9 = targetBuildOverride[tmp5(undefined, 11789).DEVICE_FIELD];
      if (tmp9 != null) {
        id = tmp9.id;
      }
    }
  }
  tmp2Result = tmp2(4153);
  let obj3 = tmp2(4153)();
  let expiresAt;
  if (override != null) {
    expiresAt = override.expiresAt;
  }
  const tmp5Result = str(504);
  const durationResult = tmp2Result.duration(obj3.diff(expiresAt));
  const rect = { top: true, bottom: true, style: tmp.container, children: null };
  obj = { style: tmp.content, children: null };
  obj = { style: tmp.imageWrapper, children: closure_6(closure_3, { source: tmp2Result }) };
  const items2 = [closure_6(closure_4, obj), ,];
  const obj1 = { style: tmp.text, variant: "text-md/medium", children: null };
  const intl = tmp5(1114).intl;
  obj1.children = intl.string(str(1114).t["6ILkNN"]);
  items2[1] = closure_6(str(4556).Text, obj1);
  if (null != id) {
    const obj2 = { children: null };
    obj3 = {
      style: tmp.buildOverrideName,
      variant: "heading-xl/extrabold",
      color: "mobile-text-heading-primary",
      children: id,
    };
    const items3 = [closure_6(tmp5(4556).Text, obj3)];
    const obj4 = {
      style: tmp.buildOverrideExpiration,
      variant: "text-md/medium",
      color: "text-default",
      children: null,
    };
    const intl3 = tmp5(1114).intl;
    const obj5 = { expirationDuration: humanizeResult };
    obj4.children = intl3.format(tmp5(1114).t.lOsPpu, obj5);
    items3[1] = closure_6(tmp5(4556).Text, obj4);
    obj2.children = items3;
    let tmp14Result = closure_8(closure_7, obj2);
  } else {
    const obj6 = {
      style: tmp.buildOverrideInvalid,
      variant: "heading-xl/extrabold",
      color: "mobile-text-heading-primary",
      children: null,
    };
    const intl2 = tmp5(1114).intl;
    obj6.children = intl2.string(tmp5(1114).t["cz+sue"]);
    tmp14Result = closure_6(tmp5(4556).Text, obj6);
  }
  items2[2] = tmp14Result;
  obj.children = items2;
  const items4 = [closure_8(closure_4, obj)];
  const obj7 = { style: tmp.buttonWrapper, children: null };
  if (null != id) {
    const obj8 = { children: null };
    const obj9 = { style: tmp.actionButton, children: null };
    const obj10 = { text: null, grow: true, onPress: null };
    const intl5 = tmp5(1114).intl;
    obj10.text = intl5.string(tmp5(1114).t.v0MBqF);
    obj10.onPress = function onPress() {
      str = stateFromStores.validatedURL;
      if (str == null) {
        str = "";
      }
      const result = build_overrides_BuildOverrideUtils.setBuildOverrideFromLink(str);
    };
    obj9.children = closure_6(tmp5(4975).Button, obj10);
    const items5 = [closure_6(closure_4, obj9)];
    const obj11 = { text: null, variant: "secondary", grow: true, onPress: null };
    const intl6 = tmp5(1114).intl;
    obj11.text = intl6.string(tmp5(1114).t.b5KKph);
    obj11.onPress = function onPress() {
      return stateFromStores(4763).pop();
    };
    items5[1] = closure_6(tmp5(4975).Button, obj11);
    obj8.children = items5;
    let tmp12Result = closure_8(closure_7, obj8);
  } else {
    const obj12 = { text: null, grow: true, onPress: null };
    const intl4 = tmp5(1114).intl;
    obj12.text = intl4.string(tmp5(1114).t.WRkdCQ);
    obj12.onPress = function onPress() {
      return stateFromStores(4763).pop();
    };
    tmp12Result = closure_6(tmp5(4975).Button, obj12);
  }
  obj7.children = tmp12Result;
  items4[1] = closure_6(closure_4, obj7);
  rect.children = items4;
  return closure_8(str(7123).SafeAreaPaddingView, rect);
}
