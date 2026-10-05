// discord_app/modules/conjure/design_feedback/native/ConjureDesignFeedbackOverlay.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ConjureDesignRemarkSheet from "ConjureDesignRemarkSheet.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const ConjureDesignRemarkSheetDefault = ConjureDesignRemarkSheet;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, Pressable: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = 24;
const createStyles = fn(4890);
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
const ReactCompilerGating = fn(558);
const obj4 = {
  textAlign: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
  padding: nativeDefault.space.PX_8,
};
size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/design_feedback/native/ConjureDesignFeedbackOverlay.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (projectId) => {
      const cResult = projectId(576).c(47);
      projectId = projectId.projectId;
      closure_11();
      const tmp3 = first1(noop.useState(null), 2);
      const first = tmp3[0];
      dependencyMap = tmp3[1];
      let tmp5 = first1(noop.useState(null), 2);
      first1 = tmp5[0];
      noop = tmp5[1];
      let tmp7 = first1(noop.useState(null), 2);
      const first2 = tmp7[0];
      closure_6 = tmp7[1];
      const tmp9 = first1(noop.useState(false), 2);
      const first3 = tmp9[0];
      closure_8 = tmp9[1];
      closure_9 = noop.useRef(true);
      closure_10 = noop.useRef(false);
      if (cResult[0] !== first2) {
        const fn = function c() {
          closure_10.current = null != first2;
        };
        const items = [first2];
        cResult[0] = first2;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp12 = items;
        let tmp11 = fn;
      } else {
        tmp11 = cResult[1];
        tmp12 = cResult[2];
      }
      const effect = obj2.useEffect(tmp11, tmp12);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function _() {
          closure_9.current = true;
          return () => {
            closure_1_9.current = false;
            if (ref.current) {
              first(4854).hideActionSheet(projectId(16600).CONJURE_DESIGN_REMARK_SHEET_KEY);
              const obj = first(4854);
            }
          };
        };
        const items1 = [];
        cResult[3] = fn2;
        cResult[4] = items1;
        let tmp15 = items1;
        let tmp14 = fn2;
      } else {
        tmp14 = cResult[3];
        tmp15 = cResult[4];
      }
      const effect1 = obj2.useEffect(tmp14, tmp15);
      if (cResult[5] !== projectId) {
        const fn3 = function y() {
          return () => {
            const result = projectId(8702).inspectConjurePreviewPoint(
              closure_1_0,
              projectId(8972).CONJURE_INSPECT_CLEAR_POINT,
            );
          };
        };
        const items2 = [projectId];
        cResult[5] = projectId;
        cResult[6] = fn3;
        cResult[7] = items2;
        let tmp18 = items2;
        let tmp17 = fn3;
      } else {
        tmp17 = cResult[6];
        tmp18 = cResult[7];
      }
      const effect2 = obj2.useEffect(tmp17, tmp18);
      if (cResult[8] !== first3) {
        class R {
          constructor() {
            if (closure_7) {
              tmp = globalThis;
              _setTimeout = setTimeout;
              num = 2000;
              closure_0 = setTimeout(() => closure_1_8(false), 2000);
              return () => clearTimeout(closure_0);
            } else {
              return;
            }
          }
        }
        const items3 = [first3];
        cResult[8] = first3;
        cResult[9] = R;
        cResult[10] = items3;
        let tmp21 = items3;
      } else {
        class R {
          constructor() {
            if (closure_7) {
              tmp = globalThis;
              _setTimeout = setTimeout;
              num = 2000;
              closure_0 = setTimeout(() => closure_1_8(false), 2000);
              return () => clearTimeout(closure_0);
            } else {
              return;
            }
          }
        }
        tmp21 = cResult[10];
      }
      const effect3 = obj2.useEffect(R, tmp21);
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(arg0) {
            layout = projectId.nativeEvent.layout;
            size = { width: layout.width, height: layout.height };
            tmp = closure_2(size);
            return;
          }
        }
        cResult[11] = S;
      } else {
        class S {
          constructor(arg0) {
            layout = projectId.nativeEvent.layout;
            size = { width: layout.width, height: layout.height };
            tmp = closure_2(size);
            return;
          }
        }
      }
      if (cResult[12] !== projectId) {
        class B {
          constructor(arg0) {
            obj = closure_0(closure_2[8]);
            obj1 = { key: closure_0(closure_2[9]).CONJURE_DESIGN_REMARK_SHEET_KEY, content: null };
            obj4 = {
              projectId,
              target: projectId,
              onClose() {
                if (ref.current) {
                  closure_1_6(null);
                }
              },
            };
            obj1.content = jsx(closure_1(closure_2[9]), obj4);
            showActionSheetResult = obj.showActionSheet(obj1);
            return;
          }
        }
        cResult[12] = projectId;
        cResult[13] = B;
      } else {
        class B {
          constructor(arg0) {
            obj = closure_0(closure_2[8]);
            obj1 = { key: closure_0(closure_2[9]).CONJURE_DESIGN_REMARK_SHEET_KEY, content: null };
            obj4 = {
              projectId,
              target: projectId,
              onClose() {
                if (ref.current) {
                  closure_1_6(null);
                }
              },
            };
            obj1.content = jsx(closure_1(closure_2[9]), obj4);
            showActionSheetResult = obj.showActionSheet(obj1);
            return;
          }
        }
      }
      closure_11 = B;
      if (cResult[14] === B) {
        class B {
          constructor(arg0) {
            obj = closure_0(closure_2[8]);
            obj1 = { key: closure_0(closure_2[9]).CONJURE_DESIGN_REMARK_SHEET_KEY, content: null };
            obj4 = {
              projectId,
              target: projectId,
              onClose() {
                if (ref.current) {
                  closure_1_6(null);
                }
              },
            };
            obj1.content = jsx(closure_1(closure_2[9]), obj4);
            showActionSheetResult = obj.showActionSheet(obj1);
            return;
          }
        }
      }
      class W {
        constructor(arg0) {
          if (null == closure_3) {
            tmp = closure_5;
            if (null == closure_5) {
              tmp2 = projectId;
              point = { x: null, y: null };
              tmp3 = globalThis;
              _Math = Math;
              point.x = Math.round(projectId.nativeEvent.locationX);
              _Math2 = Math;
              point.y = Math.round(projectId.nativeEvent.locationY);
              closure_0 = point;
              tmp4 = closure_4;
              tmp5 = closure_4(point);
              tmp6 = closure_8;
              flag = false;
              tmp7 = closure_8(false);
              tmp8 = projectId;
              tmp9 = closure_2;
              obj2 = projectId(closure_2[10]);
              tmp10 = closure_0;
              result = obj2.inspectConjurePreviewPoint(closure_0, point);
              nextPromise = result.then((status) => {
                if (ref.current) {
                  closure_4(null);
                  if ("picked" === status.status) {
                    const target = status.target;
                    const size = first;
                    let tmp5 = null == first;
                    if (!tmp5) {
                      tmp5 = size.width < 1;
                    }
                    if (!tmp5) {
                      tmp5 = size.height < 1;
                    }
                    let tmp6 = !tmp5;
                    if (!tmp5) {
                      tmp6 = target.rect.width >= 0.98 * size.width && target.rect.height >= 0.98 * size.height;
                      const tmp7 = target.rect.width >= 0.98 * size.width && target.rect.height >= 0.98 * size.height;
                    }
                    if (!tmp6) {
                      const obj = { target: status.target, at: point };
                      closure_6(obj);
                      closure_11(status.target);
                    }
                  }
                  closure_8(true);
                }
              });
            }
          }
          return;
        }
      }
      cResult[14] = B;
      cResult[15] = first1;
      cResult[16] = first2;
      cResult[17] = projectId;
      cResult[18] = first;
      cResult[19] = W;
      let obj = projectId(576);
    }
  : (projectId) => {
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
      let tmp7 = first(noop.useState(false), 2);
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
            size(4854).hideActionSheet(projectId(16600).CONJURE_DESIGN_REMARK_SHEET_KEY);
            const obj = size(4854);
          }
        };
      }, []);
      const items1 = [projectId];
      const effect2 = noop.useEffect(
        () => () => {
          const result = projectId(8702).inspectConjurePreviewPoint(
            closure_1_0,
            projectId(8972).CONJURE_INSPECT_CLEAR_POINT,
          );
        },
        items1,
      );
      const items2 = [first2];
      const effect3 = noop.useEffect(() => {
        if (first2) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => closure_1_8(false), 2000);
          return () => clearTimeout(closure_0);
        }
      }, items2);
      const items3 = [projectId];
      const callback = noop.useCallback((nativeEvent) => {
        const layout = nativeEvent.nativeEvent.layout;
        size = { width: layout.width, height: layout.height };
        dependencyMap(size);
      }, []);
      callback1 = noop.useCallback((target) => {
        const obj2 = {
          key: ConjureDesignRemarkSheet.CONJURE_DESIGN_REMARK_SHEET_KEY,
          content: closure_2_8(ConjureDesignRemarkSheetDefault, {
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
      }, items3);
      const items4 = [first, first1, projectId, size, callback1];
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
            const result = projectId(8702).inspectConjurePreviewPoint(point, point);
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
                    tmp6 = target.rect.width >= 0.98 * size.width && target.rect.height >= 0.98 * size.height;
                    const tmp7 = target.rect.width >= 0.98 * size.width && target.rect.height >= 0.98 * size.height;
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
            const obj2 = projectId(8702);
          }
        }
      }, items4);
      const intl = projectId(1126).intl;
      const tmp19 = size(3723);
      if (first2) {
        let prop = tmp19["URbF/7"];
        let tmp21 = tmp18;
      } else {
        prop = tmp19["DesV7/"];
        tmp21 = tmp18;
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
        testID: "conjure-design-surface",
        children: null,
      };
      const intl2 = tmp16(1126).intl;
      obj.accessibilityLabel = intl2.string(tmp21(3723)["DesV7/"]);
      let obj2 = { style: tmp.surface, pointerEvents: "none", children: null };
      let tmp24Result = null;
      if (null != first1) {
        tmp24Result = null;
        if (null == first1.target.marker) {
          const obj3 = { style: null };
          const items5 = [tmp.highlight];
          const rect = first1.target.rect;
          const size1 = { left: null, top: null, width: null, height: null };
          ({ x: obj4.left, y: obj4.top } = rect);
          let _Math = Math;
          size1.width = Math.max(rect.width, 1);
          let _Math2 = Math;
          size1.height = Math.max(rect.height, 1);
          items5[1] = size1;
          obj3.style = items5;
          tmp24Result = tmp24(tmp27, obj3);
        }
      }
      const items6 = [tmp24Result, ,];
      if (null == at) {
        items6[1] = null;
        const obj5 = { style: tmp.hint, accessibilityLiveRegion: "polite", children: null };
        const obj6 = { variant: "text-sm/medium", color: "text-default", style: tmp.hintText, children: stringResult };
        obj5.children = tmp24(tmp16(4886).Text, obj6);
        items6[2] = tmp24(tmp27, obj5);
        obj2.children = items6;
        obj.children = closure_9(tmp27, obj2);
        return tmp24(closure_6, obj);
      } else {
        if (null == first1) {
          const items7 = [tmp.pending];
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
          items7[1] = rect2;
          obj7.style = items7;
          obj7.children = tmp24(first1, { size: "small" });
          tmp24(tmp27, obj7);
        }
        const items8 = [tmp.marker];
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
        items8[1] = rect4;
        obj8.style = items8;
      }
    };
