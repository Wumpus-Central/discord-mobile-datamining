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
const createStyles = fn(4640);
let obj2 = {
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
    paddingHorizontal: 16,
  },
  content: { marginTop: 160, flex: 1, alignItems: "center" },
  imageWrapper: null,
  text: null,
  buildOverrideName: null,
  buildOverrideExpiration: null,
  buildOverrideInvalid: null,
  buttonWrapper: null,
  actionButton: null,
};
let size = {
  width: 100,
  height: 100,
  borderRadius: nativeDefault.radii.round,
  marginBottom: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  alignItems: "center",
  justifyContent: "center",
};
obj2.imageWrapper = size;
obj2.text = { lineHeight: 24, textAlign: "center" };
obj2.buildOverrideName = { marginTop: 8 };
obj2.buildOverrideExpiration = { lineHeight: 24 };
obj2.buildOverrideInvalid = { marginTop: 8 };
obj2.buttonWrapper = { alignSelf: "stretch" };
obj2.actionButton = { marginBottom: 8 };
let closure_9 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/build_overrides/native/BuildOverrideModal.tsx");

export default function BuildOverrideModal(overrideUrl) {
  let str = overrideUrl.overrideUrl;
  if (str === undefined) {
    str = "";
  }
  let stateFromStores;
  const tmp = closure_9();
  const tmp4 = stateFromStores(4574)();
  if (obj.isThemeDark(tmp4)) {
    let tmp2Result = tmp2(13985);
  } else {
    tmp2Result = tmp2(13986);
  }
  obj = str(4491);
  const items = [BuildOverrideStore];
  const items1 = [str];
  stateFromStores = str(504).useStateFromStores(items, () => BuildOverrideStore.getBuildOverride(str), items1);
  const override = stateFromStores.override;
  let id;
  if (override != null) {
    const targetBuildOverride = override.targetBuildOverride;
    if (targetBuildOverride != null) {
      const tmp9 = targetBuildOverride[tmp5(undefined, 11941).DEVICE_FIELD];
      if (tmp9 != null) {
        id = tmp9.id;
      }
    }
  }
  const tmp5Result = str(504);
  const tmp2Result2 = stateFromStores(4231);
  let expiresAt;
  if (override != null) {
    expiresAt = override.expiresAt;
  }
  const obj4 = stateFromStores(4231)();
  const durationResult = tmp2Result2.duration(stateFromStores(4231)().diff(expiresAt));
  const rect = { top: true, bottom: true, style: tmp.container, children: null };
  const obj2 = { style: tmp.content, children: null };
  const humanizeResult = tmp2Result2.duration(stateFromStores(4231)().diff(expiresAt)).humanize();
  const items2 = [
    closure_6(closure_4, { style: tmp.imageWrapper, children: closure_6(closure_3, { source: tmp2Result }) }),
    ,
  ];
  const obj5 = { style: tmp.text, variant: "text-md/medium", children: null };
  const intl = tmp5(1115).intl;
  obj5.children = intl.string(str(1115).t["6ILkNN"]);
  items2[1] = closure_6(str(4636).Text, obj5);
  if (null != id) {
    const obj6 = { children: null };
    const obj7 = {
      style: tmp.buildOverrideName,
      variant: "heading-xl/extrabold",
      color: "mobile-text-heading-primary",
      children: id,
    };
    const items3 = [closure_6(tmp5(4636).Text, obj7)];
    const obj8 = {
      style: tmp.buildOverrideExpiration,
      variant: "text-md/medium",
      color: "text-default",
      children: null,
    };
    const intl3 = tmp5(1115).intl;
    const obj9 = { expirationDuration: humanizeResult };
    obj8.children = intl3.format(tmp5(1115).t.lOsPpu, obj9);
    items3[1] = closure_6(tmp5(4636).Text, obj8);
    obj6.children = items3;
    let tmp14Result = closure_8(closure_7, obj6);
  } else {
    const obj10 = {
      style: tmp.buildOverrideInvalid,
      variant: "heading-xl/extrabold",
      color: "mobile-text-heading-primary",
      children: null,
    };
    const intl2 = tmp5(1115).intl;
    obj10.children = intl2.string(tmp5(1115).t["cz+sue"]);
    tmp14Result = closure_6(tmp5(4636).Text, obj10);
  }
  items2[2] = tmp14Result;
  obj2.children = items2;
  const items4 = [closure_8(closure_4, obj2)];
  const obj11 = { style: tmp.buttonWrapper, children: null };
  if (null != id) {
    const obj12 = { children: null };
    const obj13 = { style: tmp.actionButton, children: null };
    const obj14 = { text: null, grow: true, onPress: null };
    const intl5 = tmp5(1115).intl;
    obj14.text = intl5.string(tmp5(1115).t.v0MBqF);
    obj14.onPress = function onPress() {
      str = stateFromStores.validatedURL;
      if (str == null) {
        str = "";
      }
      const result = build_overrides_BuildOverrideUtils.setBuildOverrideFromLink(str);
    };
    obj13.children = closure_6(tmp5(5062).Button, obj14);
    const items5 = [closure_6(closure_4, obj13)];
    const obj15 = { text: null, variant: "secondary", grow: true, onPress: null };
    const intl6 = tmp5(1115).intl;
    obj15.text = intl6.string(tmp5(1115).t.b5KKph);
    obj15.onPress = function onPress() {
      return stateFromStores(4843).pop();
    };
    items5[1] = closure_6(tmp5(5062).Button, obj15);
    obj12.children = items5;
    let tmp12Result2 = closure_8(closure_7, obj12);
  } else {
    const obj16 = { text: null, grow: true, onPress: null };
    const intl4 = tmp5(1115).intl;
    obj16.text = intl4.string(tmp5(1115).t.WRkdCQ);
    obj16.onPress = function onPress() {
      return stateFromStores(4843).pop();
    };
    tmp12Result2 = closure_6(tmp5(5062).Button, obj16);
  }
  obj11.children = tmp12Result2;
  items4[1] = closure_6(closure_4, obj11);
  rect.children = items4;
  return closure_8(str(7237).SafeAreaPaddingView, rect);
}
