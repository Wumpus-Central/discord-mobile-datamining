// discord_app/modules/vibegrations/native/VibegrationsDesignFeedbackOverlay.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreators from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import VibegrationsDesignRemarkSheet from "VibegrationsDesignRemarkSheet.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const VibegrationsDesignRemarkSheetDefault = VibegrationsDesignRemarkSheet;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, Pressable: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = 24;
const createStyles = fn(4827);
let obj2 = {
  surface: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 },
  highlight: {
    position: "absolute",
    borderWidth: 2,
    borderColor: nativeDefault.colors.TEXT_BRAND,
    borderRadius: nativeDefault.radii.xs,
  },
  marker: null,
  pending: null,
  hint: null,
  hintText: null,
};
let size = {
  position: "absolute",
  width: 24,
  height: 24,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.TEXT_BRAND,
  borderWidth: 2,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
obj2.marker = size;
obj2.pending = { position: "absolute", width: 24, height: 24, alignItems: "center", justifyContent: "center" };
let rect = {
  position: "absolute",
  left: nativeDefault.space.PX_16,
  right: nativeDefault.space.PX_16,
  bottom: nativeDefault.space.PX_16,
};
obj2.hint = rect;
let obj3 = {
  position: "absolute",
  borderWidth: 2,
  borderColor: nativeDefault.colors.TEXT_BRAND,
  borderRadius: nativeDefault.radii.xs,
};
obj2.hintText = {
  textAlign: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
  padding: nativeDefault.space.PX_8,
};
let closure_11 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsDesignFeedbackOverlay.tsx");

export default function VibegrationsDesignFeedbackOverlay(projectId) {
  projectId = projectId.projectId;
  let first;
  noop = undefined;
  let callback1;
  const tmp = callback1();
  const tmp2 = first(noop.useState(null), 2);
  let size = tmp2[0];
  dependencyMap = tmp2[1];
  const tmp3 = first(noop.useState(null), 2);
  first = tmp3[0];
  noop = tmp3[1];
  let tmp5 = first(noop.useState(null), 2);
  const first1 = tmp5[0];
  closure_6 = tmp5[1];
  const tmp7 = first(noop.useState(false), 2);
  const first2 = tmp7[0];
  closure_8 = tmp7[1];
  closure_9 = noop.useRef(true);
  closure_10 = noop.useRef(false);
  const items = [first1];
  const effect = noop.useEffect(() => {
    closure_10.current = null != first1;
  }, items);
  const effect1 = noop.useEffect(() => {
    closure_9.current = true;
    return () => {
      closure_1_9.current = false;
      if (ref.current) {
        size(4794).hideActionSheet(projectId(17044).VIBEGRATIONS_DESIGN_REMARK_SHEET_KEY);
        const obj = size(4794);
      }
    };
  }, []);
  const items1 = [first2];
  const effect2 = noop.useEffect(() => {
    if (first2) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_8(false), 2000);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  const items2 = [projectId];
  const callback = noop.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    size = { width: layout.width, height: layout.height };
    dependencyMap(size);
  }, []);
  callback1 = noop.useCallback((target) => {
    const obj2 = {
      key: VibegrationsDesignRemarkSheet.VIBEGRATIONS_DESIGN_REMARK_SHEET_KEY,
      content: React6(VibegrationsDesignRemarkSheetDefault, {
        projectId,
        target,
        onClose() {
          if (ref.current) {
            closure_1_6(null);
          }
        },
      }),
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items2);
  const items3 = [first, first1, projectId, size, callback1];
  const callback2 = noop.useCallback((nativeEvent) => {
    if (null == first) {
      if (null == first1) {
        const point = { x: null, y: null };
        const _Math = Math;
        point.x = Math.round(nativeEvent.nativeEvent.locationX);
        const _Math2 = Math;
        point.y = Math.round(nativeEvent.nativeEvent.locationY);
        closure_4(point);
        closure_8(false);
        const result = projectId(9388).inspectVibegrationsPreviewPoint(point, point);
        result.then((status) => {
          if (ref.current) {
            closure_4(null);
            if ("picked" === status.status) {
              const target = status.target;
              let tmp5 = null == size;
              if (!tmp5) {
                tmp5 = size.width < 1;
              }
              if (!tmp5) {
                tmp5 = size.height < 1;
              }
              let tmp6 = !tmp5;
              if (!tmp5) {
                tmp6 = target.rect.width >= 0.98 * size.width;
              }
              if (tmp6) {
                tmp6 = target.rect.height >= 0.98 * size.height;
              }
              if (!tmp6) {
                const obj = { target: status.target, at: point };
                closure_6(obj);
                callback1(status.target);
              }
            }
            closure_8(true);
          }
        });
        const obj2 = projectId(9388);
      }
    }
  }, items3);
  const intl = projectId(1115).intl;
  const tmp18 = size(3712);
  if (first2) {
    let sSnnY4 = tmp18.sSnnY4;
    let tmp20 = tmp17;
  } else {
    sSnnY4 = tmp18["84RzOi"];
    tmp20 = tmp17;
  }
  let at;
  if (first1 != null) {
    at = first1.at;
  }
  if (at == null) {
    at = first;
  }
  let obj = {
    style: tmp.surface,
    onLayout: callback,
    onPress: callback2,
    accessibilityRole: "button",
    accessibilityLabel: null,
    testID: "vibegrations-design-surface",
    children: null,
  };
  const intl2 = tmp15(1115).intl;
  obj.accessibilityLabel = intl2.string(tmp20(3712)["84RzOi"]);
  let obj2 = { style: tmp.surface, pointerEvents: "none", children: null };
  let tmp23Result = null;
  if (null != first1) {
    const obj3 = { style: null };
    const items4 = [tmp.highlight];
    const rect = first1.target.rect;
    const size1 = { left: null, top: null, width: null, height: null };
    ({ x: obj4.left, y: obj4.top } = rect);
    let _Math = Math;
    size1.width = Math.max(rect.width, 1);
    let _Math2 = Math;
    size1.height = Math.max(rect.height, 1);
    items4[1] = size1;
    obj3.style = items4;
    tmp23Result = tmp23(tmp26, obj3);
  }
  const items5 = [tmp23Result, ,];
  if (null == at) {
    items5[1] = null;
    const obj5 = { style: tmp.hint, accessibilityLiveRegion: "polite", children: null };
    const obj6 = { variant: "text-sm/medium", color: "text-default", style: tmp.hintText, children: stringResult };
    obj5.children = tmp23(tmp15(4823).Text, obj6);
    items5[2] = tmp23(tmp26, obj5);
    obj2.children = items5;
    obj.children = closure_9(tmp26, obj2);
    return tmp23(closure_6, obj);
  } else {
    if (null == first1) {
      const items6 = [tmp.pending];
      const diff = at.x - 12;
      const diff1 = at.y - 12;
      if (null == size) {
        const rect1 = { left: diff, top: diff1 };
        let rect2 = rect1;
      } else {
        rect2 = { left: null, top: null };
        const _Math3 = Math;
        const _Math4 = Math;
        rect2.left = Math.min(Math.max(diff, 0), size.width - closure_10);
        const _Math5 = Math;
        const _Math6 = Math;
        rect2.top = Math.min(Math.max(diff1, 0), size.height - closure_10);
      }
      const obj7 = { style: null, children: null };
      items6[1] = rect2;
      obj7.style = items6;
      obj7.children = tmp23(first1, { size: "small" });
      tmp23(tmp26, obj7);
    }
    const items7 = [tmp.marker];
    const diff2 = at.x - 12;
    const diff3 = at.y - 12;
    if (null == size) {
      const rect3 = { left: diff2, top: diff3 };
      let rect4 = rect3;
    } else {
      rect4 = { left: null, top: null };
      const _Math7 = Math;
      const _Math8 = Math;
      rect4.left = Math.min(Math.max(diff2, 0), size.width - closure_10);
      const _Math9 = Math;
      const _Math10 = Math;
      rect4.top = Math.min(Math.max(diff3, 0), size.height - closure_10);
    }
    const obj8 = { style: null };
    items7[1] = rect4;
    obj8.style = items7;
  }
}
