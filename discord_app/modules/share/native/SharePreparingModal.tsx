// === Module 8044: SharePreparingModal ===

// Module 8044 (SharePreparingModal)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import Backdrop from "Backdrop" /* 5771 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5968 */;
import XSmallIcon from "XSmallIcon" /* 6017 */;
import MediaViewerOverlayButtonDefault from "MediaViewerOverlayButton" /* 8045 */;
import MediaModalOverlayHeaderWrapper from "MediaModalOverlayHeaderWrapper" /* 8046 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj2 = { content: { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_12 }, topBar: null, topBarEnd: null };
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.bottom = undefined;
obj2.topBar = obj4;
obj2.topBarEnd = { justifyContent: "flex-end" };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/SharePreparingModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onCancel) => {
  const cResult = c.c(19);
  onCancel = onCancel.onCancel;
  const tmp4 = closure_7();
  if (cResult[0] !== onCancel) {
    const fn = function o() {
      return () => onCancel();
    };
    const items = [onCancel];
    cResult[0] = onCancel;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp6 = items;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = noop.useEffect(tmp5, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp10 = hasOwnProperty(Backdrop.Backdrop, { blur: "none", "aria-hidden": true });
    cResult[3] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  ({ topBar, topBarEnd } = tmp4);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.cpT0Cq);
    const tmp15 = hasOwnProperty(XSmallIcon.XSmallIcon, { size: "md", color: "interactive-text-active" });
    cResult[4] = stringResult;
    cResult[5] = tmp15;
    let tmp12 = tmp15;
    let tmp11 = stringResult;
  } else {
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  if (cResult[6] !== onCancel) {
    const obj2 = { accessibilityLabel: tmp11, icon: tmp12, onPress: onCancel };
    const tmp19 = hasOwnProperty(MediaViewerOverlayButtonDefault, obj2);
    cResult[6] = onCancel;
    cResult[7] = tmp19;
    let tmp16 = tmp19;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] === tmp4.topBarEnd) {
    if (cResult[9] === tmp16) {
      let tmp20 = cResult[10];
    }
    if (cResult[11] === tmp4.topBar) {
      if (cResult[12] === tmp20) {
        let tmp22 = cResult[13];
      }
      const _Symbol = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp28 = hasOwnProperty(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
        cResult[14] = tmp28;
        let tmp26 = tmp28;
      } else {
        tmp26 = cResult[14];
      }
      const _Symbol2 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { variant: "text-sm/medium", color: "text-overlay-light", children: null };
        const intl2 = util.intl;
        obj3.children = intl2.string(util.t.DwTQE5);
        const tmp31 = hasOwnProperty(Text_Text.Text, obj3);
        cResult[15] = tmp31;
        let tmp29 = tmp31;
      } else {
        tmp29 = cResult[15];
      }
      if (cResult[16] === tmp4.content) {
        if (cResult[17] === tmp22) {
          let tmp32 = cResult[18];
        }
        return tmp32;
      }
      const obj4 = { style: tmp4.content, children: null };
      const items1 = [tmp8, tmp22, tmp26, tmp29];
      obj4.children = items1;
      const tmp35 = timestampProducer(React4, obj4);
      cResult[16] = tmp4.content;
      cResult[17] = tmp22;
      cResult[18] = tmp35;
      tmp32 = tmp35;
    }
    const obj5 = { style: topBar, pointerEvents: "box-none", children: tmp20 };
    const tmp25 = hasOwnProperty(React4, obj5);
    cResult[11] = tmp4.topBar;
    cResult[12] = tmp20;
    cResult[13] = tmp25;
    tmp22 = tmp25;
  }
  const tmp21 = hasOwnProperty(MediaModalOverlayHeaderWrapper.MediaModalOverlayHeaderWrapper, { style: topBarEnd, children: tmp16 });
  cResult[8] = tmp4.topBarEnd;
  cResult[9] = tmp16;
  cResult[10] = tmp21;
  tmp20 = tmp21;
}) : ((onCancel) => {
  onCancel = onCancel.onCancel;
  const tmp = closure_7();
  const items = [onCancel];
  const effect = noop.useEffect(() => () => onCancel(), items);
  const obj = { style: tmp.content, children: null };
  const items1 = [hasOwnProperty(Backdrop.Backdrop, { blur: "none", "aria-hidden": true }), , , ];
  const obj2 = { style: tmp.topBar, pointerEvents: "box-none", children: null };
  const obj3 = { style: tmp.topBarEnd, children: null };
  const obj4 = { accessibilityLabel: null, icon: null, onPress: null };
  const intl = util.intl;
  obj4.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj4.icon = hasOwnProperty(XSmallIcon.XSmallIcon, { size: "md", color: "interactive-text-active" });
  obj4.onPress = onCancel;
  obj3.children = hasOwnProperty(MediaViewerOverlayButtonDefault, obj4);
  obj2.children = hasOwnProperty(MediaModalOverlayHeaderWrapper.MediaModalOverlayHeaderWrapper, obj3);
  items1[1] = hasOwnProperty(React4, obj2);
  items1[2] = hasOwnProperty(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
  const obj5 = { variant: "text-sm/medium", color: "text-overlay-light", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t.DwTQE5);
  items1[3] = hasOwnProperty(Text_Text.Text, obj5);
  obj.children = items1;
  return timestampProducer(React4, obj);
});