// === Module 15013: UserProfileApplicationWidgetPreview ===

// Module 15013 (UserProfileApplicationWidgetPreview)
import nativeDefault from "native" /* 575 */;
import useApplicationWidgetLayoutRendererPropsDefault from "useApplicationWidgetLayoutRendererProps" /* 14670 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const sum = nativeDefault.space.PX_128 + nativeDefault.space.PX_24;
const createStyles = fn(5043);
let obj2 = { preview: { flexDirection: "row", gap: nativeDefault.space.PX_16, minHeight: sum }, contentColumn: { flex: 3 }, content: null, divider: null, stats: null, statRow: null, stat: null, image: null, containedImageContainer: null, heroImage: null, containedImage: null, containedImageSkeleton: null, imageSkeleton: null };
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_16, minHeight: sum };
obj2.content = { padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, justifyContent: "center", minHeight: sum };
let obj4 = { padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, justifyContent: "center", minHeight: sum };
obj2.divider = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
const obj5 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.stats = { gap: nativeDefault.space.PX_8 };
let obj6 = { gap: nativeDefault.space.PX_8 };
obj2.statRow = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let obj7 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.stat = { flex: 1, height: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.image = { flex: 2, overflow: "hidden" };
const obj8 = { flex: 1, height: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.containedImageContainer = { padding: nativeDefault.space.PX_16 };
obj2.heroImage = { position: "absolute", top: 0, right: 0, bottom: 0, left: 0, opacity: 0.2 };
const obj9 = { padding: nativeDefault.space.PX_16 };
obj2.containedImage = { width: "100%", aspectRatio: 1, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, opacity: 0.2 };
obj2.containedImageSkeleton = { width: "100%", aspectRatio: 1 };
obj2.imageSkeleton = { flex: 1 };
let closure_10 = createStyles.createStyles(obj2);
let size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetPreview.tsx");

export default function UserProfileApplicationWidgetPreview(applicationId) {
  _require = undefined;
  importDefault = undefined;
  const tmp = closure_10();
  [tmp3, c0] = noop.useState();
  const tmp2 = _slicedToArray(noop.useState(), 2);
  [tmp5, c1] = noop.useState();
  let tmp23Result4 = null != tmp3;
  const callback = noop.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    _undefined(layout.width);
    _undefined2(layout.height);
  }, []);
  if (tmp23Result4) {
    tmp23Result4 = tmp3 > 0;
  }
  if (tmp23Result4) {
    tmp23Result4 = null != tmp5;
  }
  if (tmp23Result4) {
    tmp23Result4 = tmp5 > 0;
  }
  const tmp4 = _slicedToArray(noop.useState(), 2);
  items = [AuthenticationStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => id.getId());
  const obj = require("initialize");
  ({ surfaceConfigs, resolutionContext } = useApplicationWidgetLayoutRendererPropsDefault(stateFromStores, applicationId.applicationId));
  const tmp13 = surfaceConfigs[require("ApplicationWidgetConfigSurface").ApplicationWidgetConfigSurface.ADD_WIDGET_PREVIEW];
  let layout;
  if (tmp13 != null) {
    layout = tmp13.layout;
  }
  const tmp15 = layout === require("ApplicationWidgetLayoutName").ApplicationWidgetLayoutName.ADD_WIDGET_PREVIEW_HERO;
  const tmp12 = useApplicationWidgetLayoutRendererPropsDefault(stateFromStores, applicationId.applicationId);
  const result = require("resolvedValuesFromUserApplicationIdentityProfile").bindResolveFieldValue(resolutionContext);
  if (tmp15) {
    let hero_image;
    if (!tmp17) {
      hero_image = tmp13.components.hero_image;
    }
    let contained_image = hero_image;
  } else if (!tmp17) {
    contained_image = tmp13.components.contained_image;
  }
  let image;
  if (contained_image != null) {
    image = contained_image.fields.image;
  }
  const items1 = [require("resolvedValuesFromUserApplicationIdentityProfile").ResolvedValueType.MEDIA];
  const resultResult = result(image, items1);
  const obj2 = { style: tmp.preview, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: null };
  const obj3 = { style: tmp.contentColumn, children: null };
  const obj4 = { style: tmp.content, children: null };
  const items2 = [closure_7(require("UserProfileApplicationWidgetSkeletons").TextSkeleton, { variant: "body-lg/medium", widthChars: 8 }), closure_7(View, { style: tmp.divider }), ];
  const obj6 = { style: tmp.stats, children: null };
  const obj7 = { style: tmp.statRow, children: null };
  const items3 = [closure_7(View, { style: tmp.stat }), closure_7(View, { style: tmp.stat }), closure_7(View, { style: tmp.stat })];
  obj7.children = items3;
  const items4 = [closure_8(View, obj7), ];
  const obj11 = { style: tmp.statRow, children: null };
  const items5 = [closure_7(View, { style: tmp.stat }), closure_7(View, { style: tmp.stat }), closure_7(View, { style: tmp.stat })];
  obj11.children = items5;
  items4[1] = closure_8(View, obj11);
  obj6.children = items4;
  items2[2] = closure_8(View, obj6);
  obj4.children = items2;
  obj3.children = closure_8(View, obj4);
  const items6 = [closure_7(View, obj3), ];
  const obj15 = { style: tmp.image, children: null };
  if (tmp15) {
    let tmp23Result = null == resultResult;
    if (!tmp23Result) {
      tmp23Result = !tmp23Result4;
    }
    if (tmp23Result) {
      const obj16 = { style: tmp.imageSkeleton };
      tmp23Result = closure_7(tmp8(14662).ImageSkeleton, obj16);
    }
    const items7 = [tmp23Result, ];
    let tmp23Result5 = null != resultResult;
    if (tmp23Result5) {
      const obj17 = { style: tmp.heroImage, onLayout: callback, children: null };
      if (tmp23Result4) {
        const size = { media: resultResult.media, width: tmp3, height: tmp5, fillContainer: true };
        tmp23Result4 = closure_7(tmp11(14665), size);
      }
      obj17.children = tmp23Result4;
      tmp23Result5 = closure_7(View, obj17);
    }
    const obj18 = { children: null };
    items7[1] = tmp23Result5;
    obj18.children = items7;
    let tmp23Result7 = closure_8(closure_9, obj18);
  } else {
    const obj19 = { style: tmp.containedImageContainer, children: null };
    if (null != resultResult) {
      const obj20 = { source: null, style: null, resizeMode: "contain" };
      const obj21 = { uri: resultResult.media.url };
      obj20.source = obj21;
      obj20.style = tmp.containedImage;
      let tmp23Result6 = closure_7(tmp11(5730), obj20);
    } else {
      const obj22 = { style: tmp.containedImageSkeleton };
      tmp23Result6 = closure_7(tmp8(14662).ImageSkeleton, obj22);
    }
    obj19.children = tmp23Result6;
    tmp23Result7 = closure_7(View, obj19);
  }
  obj15.children = tmp23Result7;
  items6[1] = closure_7(View, obj15);
  obj2.children = items6;
  return closure_8(View, obj2);
};