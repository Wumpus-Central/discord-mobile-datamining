// === Module 16328: YouBarAvatarDefault ===

// Module 16328 (YouBarAvatarDefault)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1188 */;
import useToken from "useToken" /* 4580 */;
import ReactionIcon2 from "ReactionIcon" /* 8411 */;
import ClipView from "ClipView" /* 8469 */;
import react from "react" /* 19 */;
import YouBarConstants from "YouBarConstants" /* 14899 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ClipViewDefault = ClipView;
let isLarge;

let c10;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let rect;
const View = react_native.View;
({ YOU_BAR_AVATAR_LARGE_SIZE: closure_4, YOU_BAR_AVATAR_PLACEHOLDER_SIZE: hasOwnProperty, YOU_BAR_STATUS_INSET: metroRequire, YOU_BAR_HEIGHT: metroImportDefault, YOU_BAR_LARGE_STATUS_SIZE: metroImportAll, YOU_BAR_PADDING: c9, YOU_BAR_STATUS_OFFSET: c10 } = YouBarConstants);
const StatusTypes = Constants.StatusTypes;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { placeholderAvatar: obj2, placeholderAvatarBackground: rect, avatarShadow: obj3 };
obj2 = { borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, justifyContent: "center", alignItems: "center" };
createStyles = createStyles.createStyles;
rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round };
obj3 = {};
const merged = Object.assign(nativeDefault.shadows.SHADOW_MEDIUM);
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let items1;
  let items2;
  let obj8;
  let rect;
  let size2;
  let tmp16;
  let tmp18;
  let tmp19;
  let tmp20;
  const obj = react2;
  const cResult = obj.c(18);
  const tmp4 = closure_14();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = native;
    let num = tmpResult.getStatusSize(hasOwnProperty);
    if (num == null) {
      num = 0;
    }
    cResult[0] = num;
    first = num;
  } else {
    first = cResult[0];
  }
  const tmp11 = native.AVATAR_SIZE_MAP[hasOwnProperty];
  const result = first / 2;
  const sum = result + native.STATUS_PADDING;
  const diff = tmp11 - sum;
  const result1 = first / 4;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const diff1 = diff - result1 * 2;
    const point = { shape: ClipView.CutoutShape.Circle, x: diff1, y: diff1, size: 2 * sum };
    cResult[1] = point;
    tmp16 = point;
  } else {
    tmp16 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    size = { height: native.AVATAR_SIZE_MAP[hasOwnProperty], width: native.AVATAR_SIZE_MAP[hasOwnProperty], position: "relative" };
    cResult[2] = size;
    tmp18 = size;
  } else {
    tmp18 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp16];
    cResult[3] = items;
    tmp19 = items;
  } else {
    tmp19 = cResult[3];
  }
  if (cResult[4] !== token) {
    const size1 = { width: tmp11, height: tmp11, backgroundColor: token };
    cResult[4] = token;
    cResult[5] = size1;
    tmp20 = size1;
  } else {
    tmp20 = cResult[5];
  }
  if (cResult[6] === tmp4.placeholderAvatar) {
    let tmp21;
    let tmp22;
    let tmp26;
    if (cResult[7] === tmp20) {
      tmp21 = cResult[8];
    }
    if (cResult[9] !== tmp4.placeholderAvatarBackground) {
      const obj3 = { style: tmp4.placeholderAvatarBackground };
      const tmp25 = closure_12(View, obj3);
      cResult[9] = tmp4.placeholderAvatarBackground;
      cResult[10] = tmp25;
      tmp22 = tmp25;
    } else {
      tmp22 = cResult[10];
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { size: "custom", style: size2, color: "background-mod-strong" };
      size2 = { width: tmp11, height: tmp11 };
      const tmp28 = closure_12(ReactionIcon2.ReactionIcon, obj4);
      cResult[11] = tmp28;
      tmp26 = tmp28;
    } else {
      tmp26 = cResult[11];
    }
    if (cResult[12] === tmp21) {
      let tmp29;
      let tmp35;
      let tmp40;
      if (cResult[13] === tmp22) {
        tmp29 = cResult[14];
      }
      const _Symbol2 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { size: first, status: StatusTypes.OFFLINE, isMobileOnline: false, isVROnline: false, streaming: false, style: rect };
        rect = { position: "absolute", right: bottom, bottom };
        const tmp39 = closure_12(native.Status, obj5);
        cResult[15] = tmp39;
        tmp35 = tmp39;
      } else {
        tmp35 = cResult[15];
      }
      if (cResult[16] !== tmp29) {
        const obj6 = { style: tmp18, children: items1 };
        items1 = [tmp29, tmp35];
        const tmp43 = map1(View, obj6);
        cResult[16] = tmp29;
        cResult[17] = tmp43;
        tmp40 = tmp43;
      } else {
        tmp40 = cResult[17];
      }
      return tmp40;
    }
    const obj7 = { cutouts: tmp19, children: map1(View, obj8) };
    obj8 = { style: tmp21, children: items2 };
    items2 = [tmp22, tmp26];
    const tmp5Result = ClipViewDefault;
    const tmp34 = closure_12(tmp5Result, obj7);
    cResult[12] = tmp21;
    cResult[13] = tmp22;
    cResult[14] = tmp34;
    tmp29 = tmp34;
  }
  const items3 = [tmp4.placeholderAvatar, tmp20];
  cResult[6] = tmp4.placeholderAvatar;
  cResult[7] = tmp20;
  cResult[8] = items3;
  tmp21 = items3;
}) : (() => {
  let items;
  let items1;
  let items2;
  let items3;
  let obj5;
  let rect;
  const tmp = closure_14();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  const obj2 = native;
  let num = obj2.getStatusSize(hasOwnProperty);
  if (num == null) {
    num = 0;
  }
  const tmp7 = native.AVATAR_SIZE_MAP[hasOwnProperty];
  const result = num / 2;
  const sum = result + native.STATUS_PADDING;
  const diff = tmp7 - sum - num / 4 * 2;
  const point = { shape: ClipView.CutoutShape.Circle, x: diff, y: diff, size: 2 * sum };
  const obj3 = { style: size, children: items3 };
  size = { height: native.AVATAR_SIZE_MAP[hasOwnProperty], width: native.AVATAR_SIZE_MAP[hasOwnProperty], position: "relative" };
  const obj4 = { cutouts: items, children: map1(View, obj5) };
  items = [point];
  obj5 = { style: items1, children: items2 };
  items1 = [tmp.placeholderAvatar, { width: tmp7, height: tmp7, backgroundColor: token }];
  items2 = [, ];
  const obj6 = { style: tmp.placeholderAvatarBackground };
  const tmp4Result = ClipViewDefault;
  items2[0] = closure_12(View, obj6);
  const obj7 = { size: "custom", style: { width: tmp7, height: tmp7 }, color: "background-mod-strong" };
  items2[1] = closure_12(ReactionIcon2.ReactionIcon, obj7);
  items3 = [closure_12(tmp4Result, obj4), ];
  const obj8 = { size: num, status: StatusTypes.OFFLINE, isMobileOnline: false, isVROnline: false, streaming: false, style: rect };
  rect = { position: "absolute", right: bottom, bottom };
  items3[1] = closure_12(native.Status, obj8);
  return map1(View, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let items2;
  let items3;
  let obj7;
  let obj9;
  let rect;
  let size3;
  let tmp17;
  let tmp19;
  let tmp21;
  let tmp23;
  let tmp24;
  let tmp25;
  const obj = react2;
  const cResult = obj.c(21);
  const tmp4 = closure_14();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  const tmp8 = native.AVATAR_SIZE_MAP[React3];
  const result = metroImportAll / 2;
  const sum = result + native.STATUS_PADDING;
  const diff = tmp8 - sum;
  const result1 = metroImportAll / 4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const diff1 = diff - result1 * 2;
    const point = { shape: ClipView.CutoutShape.Circle, x: diff1 + authStore, y: diff1 + authStore, size: 2 * sum };
    cResult[0] = point;
    first = point;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    size = { height: native.AVATAR_SIZE_MAP[hasOwnProperty], width: native.AVATAR_SIZE_MAP[hasOwnProperty], position: "relative" };
    cResult[1] = size;
    tmp17 = size;
  } else {
    tmp17 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const size1 = { position: "absolute", width: tmp8, height: tmp8, top: tmp21 - (native.AVATAR_SIZE_MAP[React3] - metroImportDefault) / 2, left: -React4 };
    tmp21 = -React4;
    cResult[2] = size1;
    tmp19 = size1;
  } else {
    tmp19 = cResult[2];
  }
  if (cResult[3] !== tmp4.avatarShadow) {
    const items = [tmp4.avatarShadow, tmp19];
    cResult[3] = tmp4.avatarShadow;
    cResult[4] = items;
    tmp23 = items;
  } else {
    tmp23 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [first];
    cResult[5] = items1;
    tmp24 = items1;
  } else {
    tmp24 = cResult[5];
  }
  if (cResult[6] !== token) {
    const size2 = { width: tmp8, height: tmp8, backgroundColor: token };
    cResult[6] = token;
    cResult[7] = size2;
    tmp25 = size2;
  } else {
    tmp25 = cResult[7];
  }
  if (cResult[8] === tmp4.placeholderAvatar) {
    let tmp26;
    let tmp27;
    let tmp31;
    if (cResult[9] === tmp25) {
      tmp26 = cResult[10];
    }
    if (cResult[11] !== tmp4.placeholderAvatarBackground) {
      const obj3 = { style: tmp4.placeholderAvatarBackground };
      const tmp30 = closure_12(View, obj3);
      cResult[11] = tmp4.placeholderAvatarBackground;
      cResult[12] = tmp30;
      tmp27 = tmp30;
    } else {
      tmp27 = cResult[12];
    }
    const _Symbol = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { size: "custom", style: size3, color: "background-mod-strong" };
      size3 = { width: native.AVATAR_SIZE_MAP[hasOwnProperty], height: native.AVATAR_SIZE_MAP[hasOwnProperty] };
      const ReactionIcon = ReactionIcon2.ReactionIcon;
      const tmp34 = closure_12(ReactionIcon, obj4);
      cResult[13] = tmp34;
      tmp31 = tmp34;
    } else {
      tmp31 = cResult[13];
    }
    if (cResult[14] === tmp26) {
      let tmp35;
      let tmp41;
      if (cResult[15] === tmp27) {
        tmp35 = cResult[16];
      }
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { size: metroImportAll, status: StatusTypes.OFFLINE, isMobileOnline: false, isVROnline: false, streaming: false, style: rect };
        rect = { position: "absolute", right: metroRequire - authStore, bottom: metroRequire - authStore };
        const tmp46 = closure_12(native.Status, obj5);
        cResult[17] = tmp46;
        tmp41 = tmp46;
      } else {
        tmp41 = cResult[17];
      }
      if (cResult[18] === tmp23) {
        let tmp47;
        if (cResult[19] === tmp35) {
          tmp47 = cResult[20];
        }
        return tmp47;
      }
      const obj6 = { style: tmp17, children: map1(View, obj7) };
      obj7 = { style: tmp23, children: items2 };
      items2 = [tmp35, tmp41];
      const tmp51 = closure_12(View, obj6);
      cResult[18] = tmp23;
      cResult[19] = tmp35;
      cResult[20] = tmp51;
      tmp47 = tmp51;
    }
    const obj8 = { cutouts: tmp24, children: map1(View, obj9) };
    obj9 = { style: tmp26, children: items3 };
    items3 = [tmp27, tmp31];
    const tmp5Result = ClipViewDefault;
    const tmp40 = closure_12(tmp5Result, obj8);
    cResult[14] = tmp26;
    cResult[15] = tmp27;
    cResult[16] = tmp40;
    tmp35 = tmp40;
  }
  const items4 = [tmp4.placeholderAvatar, tmp25];
  cResult[8] = tmp4.placeholderAvatar;
  cResult[9] = tmp25;
  cResult[10] = items4;
  tmp26 = items4;
}) : (() => {
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj3;
  let obj5;
  let rect;
  let size2;
  let tmp7;
  const tmp = closure_14();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  const tmp3 = native.AVATAR_SIZE_MAP[React3];
  const result = metroImportAll / 2;
  const sum = result + native.STATUS_PADDING;
  const diff = tmp3 - sum - metroImportAll / 4 * 2;
  const point = { shape: ClipView.CutoutShape.Circle, x: diff + authStore, y: diff + authStore, size: 2 * sum };
  const obj2 = { style: metroImportAll, children: map1(View, obj3) };
  metroImportAll = { height: native.AVATAR_SIZE_MAP[hasOwnProperty], width: native.AVATAR_SIZE_MAP[hasOwnProperty], position: "relative" };
  obj3 = { style: items, children: items4 };
  items = [tmp.avatarShadow, ];
  const size1 = { position: "absolute", width: tmp3, height: tmp3, top: tmp7 - (native.AVATAR_SIZE_MAP[React3] - metroImportDefault) / 2, left: -React4 };
  tmp7 = -React4;
  items[1] = size1;
  const obj4 = { cutouts: items1, children: map1(View, obj5) };
  items1 = [point];
  obj5 = { style: items2, children: items3 };
  items2 = [tmp.placeholderAvatar, { width: tmp3, height: tmp3, backgroundColor: token }];
  items3 = [, ];
  const obj6 = { style: tmp.placeholderAvatarBackground };
  const tmp8 = ClipViewDefault;
  items3[0] = closure_12(View, obj6);
  const obj7 = { size: "custom", style: size2, color: "background-mod-strong" };
  size2 = { width: native.AVATAR_SIZE_MAP[hasOwnProperty], height: native.AVATAR_SIZE_MAP[hasOwnProperty] };
  const ReactionIcon = ReactionIcon2.ReactionIcon;
  items3[1] = closure_12(ReactionIcon, obj7);
  items4 = [closure_12(tmp8, obj4), ];
  const obj8 = { size: metroImportAll, status: StatusTypes.OFFLINE, isMobileOnline: false, isVROnline: false, streaming: false, style: rect };
  rect = { position: "absolute", right: metroRequire - authStore, bottom: metroRequire - authStore };
  items4[1] = closure_12(native.Status, obj8);
  return closure_12(View, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((isLarge) => {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  isLarge = isLarge.isLarge;
  if (cResult[0] !== isLarge) {
    const tmp3 = closure_12(isLarge ? closure_16 : closure_15, {});
    cResult[0] = isLarge;
    cResult[1] = tmp3;
    tmp2 = tmp3;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((isLarge) => closure_12(isLarge.isLarge ? closure_16 : closure_15, {})));
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarAvatarDefault.tsx");

export default memoResult;