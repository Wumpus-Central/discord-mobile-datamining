// === Module 15068: CARD_WIDTH ===

// Module 15068 (CARD_WIDTH)
import ThemesDefault from "Themes" /* 576 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "maybeApplyNoTextColorForLightCustomTheme" /* 4552 */;
import closure_9 from "set" /* 7702 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;
import PlatformTypes from "PlatformTypes" /* 1116 */;

const require = arg1;
let c4 = importAllResult;
({ AppState: c5, StyleSheet: closure_6, View: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let c12 = 188;
let closure_13 = createCacheKey.createStyles(() => {
  let obj = { tile: null, card: null, cardImage: null, previewVideo: null, badge: null, badgeContent: null, badgeText: null, startButton: null, cardFooter: null, advertiserRow: null, advertiserName: null, advertiserIcon: null };
  obj = { gap: ThemesDefault.space.PX_12 };
  obj[0] = obj;
  obj = { width: c12, height: 313, overflow: "hidden", padding: 0 };
  obj[1] = obj;
  const merged = Object.assign(closure_6.absoluteFillObject);
  obj[2] = {};
  const merged1 = Object.assign(closure_6.absoluteFillObject);
  obj[3] = {};
  obj[4] = { position: "absolute", top: ThemesDefault.space.PX_12, left: ThemesDefault.space.PX_12, backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: ThemesDefault.radii.round, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_4, color: ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  obj1 = {};
  const obj2 = {};
  const obj3 = { position: "absolute", top: ThemesDefault.space.PX_12, left: ThemesDefault.space.PX_12, backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: ThemesDefault.radii.round, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_4, color: ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  obj[5] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
  const obj4 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
  obj[6] = { textTransform: "uppercase", color: ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  const obj5 = { textTransform: "uppercase", color: ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  obj[7] = { position: "absolute", bottom: ThemesDefault.space.PX_8, left: ThemesDefault.space.PX_8, right: ThemesDefault.space.PX_8 };
  obj[8] = { flexDirection: "column", alignItems: "flex-start", maxWidth: c12 };
  const obj6 = { position: "absolute", bottom: ThemesDefault.space.PX_8, left: ThemesDefault.space.PX_8, right: ThemesDefault.space.PX_8 };
  obj[9] = { flexDirection: "row", gap: ThemesDefault.space.PX_4, alignItems: "center" };
  obj[10] = { flexShrink: 1 };
  obj[11] = { flexShrink: 0, opacity: 0.7 };
  return obj;
});
let num = 0;
if (PlatformTypes.isAndroid()) {
  num = 150;
}
let closure_15 = PlatformTypes.isAndroid();
let closure_16 = PlatformTypes.isAndroid();
const memoResult = importAllResult.memo((bounty) => {
  bounty = bounty.bounty;
  const index = bounty.index;
  const isActive = bounty.isActive;
  const onPress = bounty.onPress;
  let currentState;
  let first;
  closure_7 = undefined;
  closure_8 = undefined;
  closure_9 = undefined;
  c10 = undefined;
  c11 = undefined;
  let tmp = callback();
  let obj = bounty(isActive[9]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => ref.isBountyCompleted(bounty.id));
  obj1 = importAllResult;
  const items1 = [onPress, bounty, index];
  callback = importAllResult.useCallback(() => {
    onPress(bounty, index);
  }, items1);
  const videoPreview = bounty.videoPreview;
  let scaledImageUrl = null;
  if (null != bounty.imagePreview) {
    let tmp2Result = tmp2(tmp3[10]);
    obj = { assetUrl: null, width: null, height: 313 };
    obj[0] = bounty.imagePreview;
    obj[1] = c12;
    scaledImageUrl = tmp2Result.getScaledImageUrl(obj);
  }
  if (tmp8) {
    tmp2Result = tmp2(tmp3[10]);
    obj = { assetUrl: null, width: null, height: 313 };
    obj[0] = videoPreview;
    obj[1] = c12;
    scaledImageUrl = tmp2Result.getScaledFirstFrameImageUrl(obj);
  }
  [tmp12, c4] = onPress(obj1.useState(false), 2);
  const callback1 = obj1.useCallback(() => {
    _undefined(true);
  }, []);
  const tmp10 = onPress;
  const tmp11 = onPress(obj1.useState(false), 2);
  tmp8 = null == scaledImageUrl && null != videoPreview;
  [tmp15, tmp16] = onPress(obj1.useState(false), 2);
  currentState = tmp16;
  const tmp17 = onPress(obj1.useState(false), 2);
  first = tmp17[0];
  closure_7 = tmp19;
  const tmp14 = onPress(obj1.useState(false), 2);
  const items2 = [closure_8];
  const stateFromStores1 = bounty(isActive[9]).useStateFromStores(items2, () => closure_8.useReducedMotion);
  const tmp2Result1 = bounty(isActive[9]);
  const token = bounty(isActive[11]).useToken(index(tmp3[7]).modules.mobile.BOUNTY_TILE_BORDER_RADIUS);
  closure_8 = obj1.useRef(null);
  const callback2 = obj1.useCallback(() => {
    if (null != closure_8.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
    }
    closure_8.current = setTimeout(() => {
      callback(true);
    }, closure_1_14);
  }, []);
  const tmp24 = onPress(obj1.useState(isActive), 2);
  if (isActive !== tmp24[0]) {
    tmp24[1](isActive);
    if (isActive) {
      let tmp28 = tmp15;
      if (tmp15) {
        tmp28 = !first;
      }
      if (tmp28) {
        tmp16(false);
      }
      if (first) {
        tmp19(false);
      }
    } else if (closure_15) {
      tmp19(true);
    }
  }
  closure_9 = obj1.useRef(null);
  const items3 = [first];
  const effect = obj1.useEffect(() => {
    if (first) {
      const _setTimeout = setTimeout;
      closure_9.current = setTimeout(() => {
        callback2(false);
        callback(false);
        closure_9.current = null;
      }, 150);
    }
    return () => {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
        tmp.current = null;
      }
    };
  }, items3);
  const items4 = [isActive];
  const effect1 = obj1.useEffect(() => {
    let tmp = isActive;
    let tmp2 = isActive;
    if (isActive) {
      tmp2 = null != ref.current;
    }
    if (tmp2) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
    if (!tmp) {
      tmp = null == closure_8.current;
    }
    if (!tmp) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(closure_8.current);
      closure_8.current = null;
    }
  }, items4);
  const effect2 = obj1.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
  }, []);
  const tmp2Result2 = bounty(isActive[11]);
  [tmp35, c10] = tmp10(obj1.useState("active" === currentState.currentState), 2);
  const effect3 = obj1.useEffect(() => {
    closure_0 = _undefined2.addEventListener("change", (arg0) => {
      callback("active" === arg0);
    });
    return () => {
      closure_0.remove();
    };
  }, []);
  let tmp42Result = isActive;
  if (!isActive) {
    tmp42Result = first;
  }
  if (tmp42Result) {
    tmp42Result = null != videoPreview;
  }
  if (tmp42Result) {
    tmp42Result = tmp12;
  }
  let isModalVisible = closure_16;
  if (closure_16) {
    isModalVisible = bounty.isModalVisible;
  }
  let tmp38 = !isModalVisible;
  if (!isModalVisible) {
    if (first) {
      first = !isActive;
    }
    tmp38 = !first;
  }
  if (tmp38) {
    tmp38 = tmp42Result;
  }
  if (tmp38) {
    tmp38 = tmp15;
  }
  c11 = tmp38;
  const items5 = [tmp38];
  obj1 = { style: tmp.tile, children: null };
  const memo = obj1.useMemo(() => {
    let opacity = 1;
    if (c11) {
      opacity = 0;
    }
    return { opacity };
  }, items5);
  const obj2 = { style: tmp.card, radius: token, onPress: callback, android_ripple: { color: "transparent" }, children: null };
  if (tmp42Result) {
    const obj3 = { accessible: false, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", onReadyForDisplay: null, source: null, style: null, resizeMode: "cover", repeat: true, muted: true, disableFocus: true, paused: null };
    obj3[3] = callback2;
    const obj4 = { uri: null };
    obj4[0] = videoPreview;
    obj3[4] = obj4;
    obj3[5] = tmp.previewVideo;
    let tmp44 = !tmp35;
    let tmp21Result = tmp21(tmp3[13]);
    if (tmp35) {
      tmp44 = stateFromStores1;
    }
    obj3[10] = tmp44;
    tmp42Result = c10(tmp21Result, obj3);
    const tmp42 = c10;
  }
  const items6 = [tmp42Result, , , ];
  const obj5 = { style: items7, onLoad: callback1, source: null, resizeMode: "cover" };
  items7 = [tmp.cardImage, memo];
  tmp21Result = tmp21(tmp3[14]);
  obj5[2] = { uri: scaledImageUrl };
  items6[1] = c10(tmp21Result, obj5);
  const obj6 = { style: tmp.badge, children: null };
  const obj7 = { style: tmp.badgeContent, children: null };
  let tmp45Result = stateFromStores;
  if (stateFromStores) {
    const obj8 = { size: "xxs", color: null };
    obj8[1] = tmp21(tmp3[7]).colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT;
    tmp45Result = tmp45(tmp2(tmp3[15]).CheckmarkSmallBoldIcon, obj8);
  }
  const items8 = [tmp45Result, ];
  const obj9 = { variant: "text-xs/bold", style: tmp.badgeText, children: null };
  const intl = tmp2(tmp3[17]).intl;
  const t = tmp2(tmp3[17]).t;
  obj9[2] = intl.string(stateFromStores ? t.vlGTLf : t["fFIJ/9"]);
  items8[1] = c10(bounty(isActive[16]).Text, obj9);
  obj7[1] = items8;
  obj6[1] = c11(closure_7, obj7);
  items6[2] = c10(closure_7, obj6);
  const obj10 = { style: tmp.startButton, children: null };
  const intl2 = tmp2(tmp3[17]).intl;
  const string = intl2.string;
  const t2 = tmp2(tmp3[17]).t;
  if (stateFromStores) {
    let stringResult = string(t2["9UtZAY"]);
  } else {
    stringResult = string(t2.LhlgY9);
  }
  obj10[1] = c10(bounty(isActive[18]).Button, { variant: "secondary-overlay", text: stringResult, onPress: callback });
  items6[3] = c10(closure_7, obj10);
  obj2[4] = items6;
  const items9 = [c11(bounty(isActive[12]).Card, obj2), ];
  const obj11 = { style: tmp.cardFooter, children: null };
  const obj12 = { style: tmp.advertiserRow, children: null };
  const items10 = [c10(bounty(isActive[16]).Text, { variant: "text-sm/medium", color: "text-subtle", lineClamp: 1, style: tmp.advertiserName, children: bounty.advertiserName }), ];
  const obj13 = { variant: "text-sm/medium", color: "text-subtle", lineClamp: 1, style: tmp.advertiserName, children: bounty.advertiserName };
  const tmp10Result = tmp10(obj1.useState("active" === currentState.currentState), 2);
  items10[1] = c10(bounty(isActive[19]).CircleCheckIcon, { size: "xxs", style: tmp.advertiserIcon, color: index(isActive[7]).colors.ICON_SUBTLE });
  obj12[1] = items10;
  const items11 = [c11(closure_7, obj12), ];
  const obj15 = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl3 = tmp2(tmp3[17]).intl;
  obj15[2] = intl3.string(bounty(isActive[17]).t.o6FLcF);
  items11[1] = c10(bounty(isActive[16]).Text, obj15);
  obj11[1] = items11;
  items9[1] = c11(closure_7, obj11);
  obj1[1] = items9;
  return c11(closure_7, obj1);
});
const result = require("set").fileFinishedImporting("modules/quests/native/BountyCard.tsx");

export default memoResult;
export const CARD_WIDTH = 188;