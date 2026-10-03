// === Module 16324: YouBarAvatarDefault ===

// Module 16324 (YouBarAvatarDefault)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import useToken from "useToken" /* 4580 */;
import ReactionIcon from "ReactionIcon" /* 8411 */;
import ClipView from "ClipView" /* 8469 */;
import noop from "module_19" /* 19 */;

const ClipViewDefault = ClipView;

require = fn;
const View = fn(17).View;
const YouBarConstants = fn(14895);
({ YOU_BAR_AVATAR_LARGE_SIZE: closure_4, YOU_BAR_AVATAR_PLACEHOLDER_SIZE: hasOwnProperty, YOU_BAR_STATUS_INSET: metroRequire, YOU_BAR_HEIGHT: closure_7, YOU_BAR_LARGE_STATUS_SIZE: closure_8, YOU_BAR_PADDING: closure_9, YOU_BAR_STATUS_OFFSET: c10 } = YouBarConstants);
const StatusTypes = fn(1085).StatusTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4890);
let obj = { placeholderAvatar: { borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, justifyContent: "center", alignItems: "center" }, placeholderAvatarBackground: null, avatarShadow: null };
let rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round };
obj.placeholderAvatarBackground = rect;
const merged = Object.assign(nativeDefault.shadows.SHADOW_MEDIUM);
obj.avatarShadow = {};
let closure_14 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(18);
  const tmp4 = closure_14();
  const token = useToken.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let num = native.getStatusSize(hasOwnProperty);
    if (num == null) {
      num = 0;
    }
    cResult[0] = num;
    let first = num;
    const tmpResult = native;
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
    let tmp16 = point;
  } else {
    tmp16 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    size = { height: native.AVATAR_SIZE_MAP[hasOwnProperty], width: native.AVATAR_SIZE_MAP[hasOwnProperty], position: "relative" };
    cResult[2] = size;
    let tmp18 = size;
  } else {
    tmp18 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp16];
    cResult[3] = items;
    let tmp19 = items;
  } else {
    tmp19 = cResult[3];
  }
  if (cResult[4] !== token) {
    const size1 = { width: tmp11, height: tmp11, backgroundColor: token };
    cResult[4] = token;
    cResult[5] = size1;
    let tmp20 = size1;
  } else {
    tmp20 = cResult[5];
  }
  if (cResult[6] === tmp4.placeholderAvatar) {
    if (cResult[7] === tmp20) {
      let tmp21 = cResult[8];
    }
    if (cResult[9] !== tmp4.placeholderAvatarBackground) {
      const obj3 = { style: tmp4.placeholderAvatarBackground };
      const tmp25 = __initData(View, obj3);
      cResult[9] = tmp4.placeholderAvatarBackground;
      cResult[10] = tmp25;
      let tmp22 = tmp25;
    } else {
      tmp22 = cResult[10];
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { size: "custom", style: null, color: "background-mod-strong" };
      const size2 = { width: tmp11, height: tmp11 };
      obj4.style = size2;
      const tmp28 = __initData(ReactionIcon.ReactionIcon, obj4);
      cResult[11] = tmp28;
      let tmp26 = tmp28;
    } else {
      tmp26 = cResult[11];
    }
    if (cResult[12] === tmp21) {
      if (cResult[13] === tmp22) {
        let tmp29 = cResult[14];
      }
      const _Symbol2 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { size: first, status: StatusTypes.OFFLINE, isMobileOnline: false, isVROnline: false, streaming: false, style: null };
        const rect = { position: "absolute", right: bottom, bottom };
        obj5.style = rect;
        const tmp39 = __initData(native.Status, obj5);
        cResult[15] = tmp39;
        let tmp35 = tmp39;
      } else {
        tmp35 = cResult[15];
      }
      if (cResult[16] !== tmp29) {
        const obj6 = { style: tmp18, children: null };
        const items1 = [tmp29, tmp35];
        obj6.children = items1;
        const tmp43 = __initData2(View, obj6);
        cResult[16] = tmp29;
        cResult[17] = tmp43;
        let tmp40 = tmp43;
      } else {
        tmp40 = cResult[17];
      }
      return tmp40;
    }
    const obj7 = { cutouts: tmp19, children: null };
    const obj8 = { style: tmp21, children: null };
    const items2 = [tmp22, tmp26];
    obj8.children = items2;
    obj7.children = __initData2(View, obj8);
    const tmp34 = __initData(ClipViewDefault, obj7);
    cResult[12] = tmp21;
    cResult[13] = tmp22;
    cResult[14] = tmp34;
    tmp29 = tmp34;
    const tmp5Result = ClipViewDefault;
  }
  const items3 = [tmp4.placeholderAvatar, tmp20];
  cResult[6] = tmp4.placeholderAvatar;
  cResult[7] = tmp20;
  cResult[8] = items3;
  tmp21 = items3;
}) : (() => {
  const tmp = closure_14();
  const token = useToken.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  let num = native.getStatusSize(hasOwnProperty);
  if (num == null) {
    num = 0;
  }
  const tmp7 = native.AVATAR_SIZE_MAP[hasOwnProperty];
  const result = num / 2;
  const sum = result + native.STATUS_PADDING;
  const diff = tmp7 - sum - num / 4 * 2;
  const point = { shape: ClipView.CutoutShape.Circle, x: diff, y: diff, size: 2 * sum };
  const obj3 = { style: null, children: null };
  size = { height: native.AVATAR_SIZE_MAP[hasOwnProperty], width: native.AVATAR_SIZE_MAP[hasOwnProperty], position: "relative" };
  obj3.style = size;
  const obj4 = { cutouts: null, children: null };
  const items = [point];
  obj4.cutouts = items;
  const obj5 = { style: null, children: null };
  const items1 = [tmp.placeholderAvatar, { width: tmp7, height: tmp7, backgroundColor: token }];
  obj5.style = items1;
  const obj6 = { style: tmp.placeholderAvatarBackground };
  const items2 = [__initData(View, obj6), __initData(ReactionIcon.ReactionIcon, { size: "custom", style: { width: tmp7, height: tmp7 }, color: "background-mod-strong" })];
  obj5.children = items2;
  obj4.children = __initData2(View, obj5);
  const items3 = [__initData(ClipViewDefault, obj4), ];
  const obj8 = { size: num, status: StatusTypes.OFFLINE, isMobileOnline: false, isVROnline: false, streaming: false, style: null };
  const rect = { position: "absolute", right: bottom, bottom };
  obj8.style = rect;
  items3[1] = __initData(native.Status, obj8);
  obj3.children = items3;
  return __initData2(View, obj3);
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(21);
  const tmp4 = closure_14();
  const token = useToken.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  const tmp8 = native.AVATAR_SIZE_MAP[React4];
  const result = size / 2;
  const sum = result + native.STATUS_PADDING;
  const diff = tmp8 - sum;
  const result1 = size / 4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const diff1 = diff - result1 * 2;
    const point = { shape: ClipView.CutoutShape.Circle, x: diff1 + v65535, y: diff1 + v65535, size: 2 * sum };
    cResult[0] = point;
    let first = point;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    size = { height: native.AVATAR_SIZE_MAP[hasOwnProperty], width: native.AVATAR_SIZE_MAP[hasOwnProperty], position: "relative" };
    cResult[1] = size;
    let tmp17 = size;
  } else {
    tmp17 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const size1 = { position: "absolute", width: tmp8, height: tmp8, top: -options - (native.AVATAR_SIZE_MAP[React4] - React5) / 2, left: -options };
    cResult[2] = size1;
    let tmp19 = size1;
    const tmp21 = -options;
  } else {
    tmp19 = cResult[2];
  }
  if (cResult[3] !== tmp4.avatarShadow) {
    const items = [tmp4.avatarShadow, tmp19];
    cResult[3] = tmp4.avatarShadow;
    cResult[4] = items;
    let tmp23 = items;
  } else {
    tmp23 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [first];
    cResult[5] = items1;
    let tmp24 = items1;
  } else {
    tmp24 = cResult[5];
  }
  if (cResult[6] !== token) {
    const size2 = { width: tmp8, height: tmp8, backgroundColor: token };
    cResult[6] = token;
    cResult[7] = size2;
    let tmp25 = size2;
  } else {
    tmp25 = cResult[7];
  }
  if (cResult[8] === tmp4.placeholderAvatar) {
    if (cResult[9] === tmp25) {
      let tmp26 = cResult[10];
    }
    if (cResult[11] !== tmp4.placeholderAvatarBackground) {
      const obj3 = { style: tmp4.placeholderAvatarBackground };
      const tmp30 = __initData(View, obj3);
      cResult[11] = tmp4.placeholderAvatarBackground;
      cResult[12] = tmp30;
      let tmp27 = tmp30;
    } else {
      tmp27 = cResult[12];
    }
    const _Symbol = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { size: "custom", style: null, color: "background-mod-strong" };
      const size3 = { width: native.AVATAR_SIZE_MAP[hasOwnProperty], height: native.AVATAR_SIZE_MAP[hasOwnProperty] };
      obj4.style = size3;
      const tmp34 = __initData(ReactionIcon.ReactionIcon, obj4);
      cResult[13] = tmp34;
      let tmp31 = tmp34;
    } else {
      tmp31 = cResult[13];
    }
    if (cResult[14] === tmp26) {
      if (cResult[15] === tmp27) {
        let tmp35 = cResult[16];
      }
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { size, status: StatusTypes.OFFLINE, isMobileOnline: false, isVROnline: false, streaming: false, style: null };
        const rect = { position: "absolute", right: timestampProducer - v65535, bottom: timestampProducer - v65535 };
        obj5.style = rect;
        const tmp46 = __initData(native.Status, obj5);
        cResult[17] = tmp46;
        let tmp41 = tmp46;
      } else {
        tmp41 = cResult[17];
      }
      if (cResult[18] === tmp23) {
        if (cResult[19] === tmp35) {
          let tmp47 = cResult[20];
        }
        return tmp47;
      }
      const obj6 = { style: tmp17, children: null };
      const obj7 = { style: tmp23, children: null };
      const items2 = [tmp35, tmp41];
      obj7.children = items2;
      obj6.children = __initData2(View, obj7);
      const tmp51 = __initData(View, obj6);
      cResult[18] = tmp23;
      cResult[19] = tmp35;
      cResult[20] = tmp51;
      tmp47 = tmp51;
    }
    const obj8 = { cutouts: tmp24, children: null };
    const obj9 = { style: tmp26, children: null };
    const items3 = [tmp27, tmp31];
    obj9.children = items3;
    obj8.children = __initData2(View, obj9);
    const tmp40 = __initData(ClipViewDefault, obj8);
    cResult[14] = tmp26;
    cResult[15] = tmp27;
    cResult[16] = tmp40;
    tmp35 = tmp40;
    const tmp5Result = ClipViewDefault;
  }
  const items4 = [tmp4.placeholderAvatar, tmp25];
  cResult[8] = tmp4.placeholderAvatar;
  cResult[9] = tmp25;
  cResult[10] = items4;
  tmp26 = items4;
}) : (() => {
  const tmp = closure_14();
  const token = useToken.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  const tmp3 = native.AVATAR_SIZE_MAP[React4];
  const result = size / 2;
  const sum = result + native.STATUS_PADDING;
  const diff = tmp3 - sum - size / 4 * 2;
  const point = { shape: ClipView.CutoutShape.Circle, x: diff + v65535, y: diff + v65535, size: 2 * sum };
  const obj2 = { style: null, children: null };
  size = { height: native.AVATAR_SIZE_MAP[hasOwnProperty], width: native.AVATAR_SIZE_MAP[hasOwnProperty], position: "relative" };
  obj2.style = size;
  const obj3 = { style: null, children: null };
  const items = [tmp.avatarShadow, ];
  const size1 = { position: "absolute", width: tmp3, height: tmp3, top: -options - (native.AVATAR_SIZE_MAP[React4] - React5) / 2, left: -options };
  items[1] = size1;
  obj3.style = items;
  const obj4 = { cutouts: null, children: null };
  const items1 = [point];
  obj4.cutouts = items1;
  const obj5 = { style: null, children: null };
  const items2 = [tmp.placeholderAvatar, { width: tmp3, height: tmp3, backgroundColor: token }];
  obj5.style = items2;
  const obj6 = { style: tmp.placeholderAvatarBackground };
  const tmp7 = -options;
  const items3 = [__initData(View, obj6), ];
  const obj7 = { size: "custom", style: null, color: "background-mod-strong" };
  const size2 = { width: native.AVATAR_SIZE_MAP[hasOwnProperty], height: native.AVATAR_SIZE_MAP[hasOwnProperty] };
  obj7.style = size2;
  items3[1] = __initData(ReactionIcon.ReactionIcon, obj7);
  obj5.children = items3;
  obj4.children = __initData2(View, obj5);
  const items4 = [__initData(ClipViewDefault, obj4), ];
  const obj8 = { size, status: StatusTypes.OFFLINE, isMobileOnline: false, isVROnline: false, streaming: false, style: null };
  const rect = { position: "absolute", right: timestampProducer - v65535, bottom: timestampProducer - v65535 };
  obj8.style = rect;
  items4[1] = __initData(native.Status, obj8);
  obj3.children = items4;
  obj2.children = __initData2(View, obj3);
  return __initData(View, obj2);
});
ReactCompilerGating = fn(558);
let obj3 = { borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, justifyContent: "center", alignItems: "center" };
let obj4 = {};
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarAvatarDefault.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((isLarge) => {
  const cResult = c.c(2);
  isLarge = isLarge.isLarge;
  if (cResult[0] !== isLarge) {
    const tmp2 = __initData(isLarge ? closure_16 : closure_15, {});
    cResult[0] = isLarge;
    cResult[1] = tmp2;
  } else {
    return cResult[1];
  }
}) : ((isLarge) => __initData(isLarge.isLarge ? closure_16 : closure_15, {})));