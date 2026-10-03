// === Module 12960: WishlistViewerCoachmark ===

// Module 12960 (WishlistViewerCoachmark)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import _modDef12961 from "module_12961" /* 12961 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_8 = createStyles.createStyles({ imageContainer: { alignItems: "center", justifyContent: "center" }, image: { width: 160, height: 106 } });
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(6);
  const tmp3 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { uri: _modDef12961 };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp3.image) {
    const obj3 = { source: first, style: tmp3.image };
    const tmp9 = <hasOwnProperty source={first} style={tmp3.image} />;
    cResult[1] = tmp3.image;
    cResult[2] = tmp9;
    let tmp6 = tmp9;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === tmp3.imageContainer) {
    if (cResult[4] === tmp6) {
      let tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = <React4 style={tmp3.imageContainer}>{tmp6}</React4>;
  cResult[3] = tmp3.imageContainer;
  cResult[4] = tmp6;
  cResult[5] = tmp11;
  tmp10 = tmp11;
  const obj4 = { style: tmp3.imageContainer, children: tmp6 };
}) : (() => {
  const tmp = closure_8();
  const obj = { style: tmp.imageContainer, children: null };
  const obj2 = { source: { uri: _modDef12961 }, style: tmp.image };
  obj.children = <hasOwnProperty source={{ uri: _modDef12961 }} style={tmp.image} />;
  return <React4 style={tmp.imageContainer}>{null}</React4>;
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/WishlistViewerCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onViewWishlist) => {
  const cResult = markAsDismissed(576).c(12);
  ({ isVisible, markAsDismissed } = onViewWishlist);
  onViewWishlist = onViewWishlist.onViewWishlist;
  if (cResult[0] !== onViewWishlist) {
    const fn = function n() {
      onViewWishlist();
    };
    cResult[0] = onViewWishlist;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = markAsDismissed(1126).intl;
    const stringResult = intl.string(markAsDismissed(1126).t["+b6iUl"]);
    const intl2 = markAsDismissed(1126).intl;
    const stringResult1 = intl2.string(markAsDismissed(1126).t.Howsng);
    cResult[2] = stringResult;
    cResult[3] = stringResult1;
    let tmp6 = stringResult1;
    let tmp5 = stringResult;
  } else {
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  if (cResult[4] !== markAsDismissed) {
    const fn2 = function y() {
      return markAsDismissed(ContentDismissActionType.USER_DISMISS);
    };
    cResult[4] = markAsDismissed;
    cResult[5] = fn2;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function _() {
      return <closure_1_9 />;
    };
    const intl3 = markAsDismissed(1126).intl;
    const stringResult2 = intl3.string(markAsDismissed(1126).t.TxBQzD);
    cResult[6] = fn3;
    cResult[7] = stringResult2;
    let tmp11 = stringResult2;
    let tmp10 = fn3;
  } else {
    tmp10 = cResult[6];
    tmp11 = cResult[7];
  }
  if (cResult[8] === tmp4) {
    if (cResult[9] === isVisible) {
      if (cResult[10] === tmp9) {
        let tmp13 = cResult[11];
      }
      const coachmark = markAsDismissed(9882).useCoachmark(onViewWishlist.anchorRef, tmp13);
      return null;
    }
  }
  const obj2 = { title: tmp5, description: tmp6, position: "bottom", visible: isVisible, onDismiss: tmp9, renderImgComponent: tmp10, buttonLabel: tmp11, buttonVariant: "primary", onButtonPress: tmp4 };
  cResult[8] = tmp4;
  cResult[9] = isVisible;
  cResult[10] = tmp9;
  cResult[11] = obj2;
  tmp13 = obj2;
  const obj = markAsDismissed(576);
}) : ((isVisible) => {
  isVisible = isVisible.isVisible;
  const markAsDismissed = isVisible.markAsDismissed;
  const onViewWishlist = isVisible.onViewWishlist;
  let onButtonPress;
  const items = [onViewWishlist];
  onButtonPress = onButtonPress.useCallback(() => {
    onViewWishlist();
  }, items);
  const items1 = [isVisible, markAsDismissed, onButtonPress];
  const memo = onButtonPress.useMemo(() => {
    const obj = { title: null, description: null, position: "bottom", visible: null, onDismiss: null, renderImgComponent: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["+b6iUl"]);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t.Howsng);
    obj.visible = isVisible;
    obj.onDismiss = function onDismiss() {
      return markAsDismissed(constants.USER_DISMISS);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return closure_1_7(closure_1_9, {});
    };
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(util.t.TxBQzD);
    obj.onButtonPress = onButtonPress;
    return obj;
  }, items1);
  const coachmark = isVisible(onViewWishlist[9]).useCoachmark(isVisible.anchorRef, memo);
  return null;
});