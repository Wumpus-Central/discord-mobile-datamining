import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
// discord_app/modules/quests/native/BountyCard.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "CircleCheckIcon";
import get_ActivityIndicator from "getSystemLocale";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import set from "set";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import PlatformTypes from "PlatformTypes";
import PlatformTypes from "PlatformTypes";
import PlatformTypes from "PlatformTypes";

let c10;
let c5;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
let c4 = importAllResult;
({ AppState: c5, StyleSheet: closure_6, View: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let c12 = 188;
let closure_13 = createCacheKey.createStyles(() => {
  let obj = { tile: null, card: null, cardImage: null, previewVideo: null, badge: null, badgeContent: null, badgeText: null, startButton: null, cardFooter: null, advertiserRow: null, advertiserName: null, advertiserIcon: null };
  obj = { gap: Themes.space.PX_12 };
  obj[0] = obj;
  obj = { width: c12, height: 313, overflow: "hidden", padding: 0 };
  obj[1] = obj;
  const merged = Object.assign(closure_6.absoluteFillObject);
  obj[2] = {};
  const merged1 = Object.assign(closure_6.absoluteFillObject);
  obj[3] = {};
  obj[4] = { position: "absolute", top: Themes.space.PX_12, left: Themes.space.PX_12, backgroundColor: Themes.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: Themes.radii.round, paddingHorizontal: Themes.space.PX_8, paddingVertical: Themes.space.PX_4, color: Themes.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  const obj1 = {};
  const obj2 = {};
  const obj3 = { position: "absolute", top: Themes.space.PX_12, left: Themes.space.PX_12, backgroundColor: Themes.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: Themes.radii.round, paddingHorizontal: Themes.space.PX_8, paddingVertical: Themes.space.PX_4, color: Themes.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  obj[5] = { flexDirection: "row", alignItems: "center", gap: Themes.space.PX_4 };
  const obj4 = { flexDirection: "row", alignItems: "center", gap: Themes.space.PX_4 };
  obj[6] = { textTransform: "uppercase", color: Themes.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  const obj5 = { textTransform: "uppercase", color: Themes.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  obj[7] = { position: "absolute", bottom: Themes.space.PX_8, left: Themes.space.PX_8, right: Themes.space.PX_8 };
  obj[8] = { flexDirection: "column", alignItems: "flex-start", maxWidth: c12 };
  const obj6 = { position: "absolute", bottom: Themes.space.PX_8, left: Themes.space.PX_8, right: Themes.space.PX_8 };
  obj[9] = { flexDirection: "row", gap: Themes.space.PX_4, alignItems: "center" };
  obj[10] = { flexShrink: 1 };
  obj[11] = { flexShrink: 0, opacity: 0.7 };
  return obj;
});
let num = 0;
if (PlatformTypes.isAndroid()) {
  num = 150;
}
PlatformTypes = PlatformTypes.isAndroid();
PlatformTypes = PlatformTypes.isAndroid();
const memoResult = importAllResult.memo((bounty) => {
  let c10;
  let c4;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp35;
  bounty = bounty.bounty;
  const index = bounty.index;
  const isActive = bounty.isActive;
  const onPress = bounty.onPress;
  let currentState;
  let first;
  let c7;
  let maybeApplyNoTextColorForLightCustomTheme;
  let set;
  c10 = undefined;
  let c11;
  let tmp = callback();
  let obj = bounty(isActive[9]);
  const items = [set];
  const stateFromStores = obj.useStateFromStores(items, () => ref.isBountyCompleted(bounty.id));
  let obj1 = importAllResult;
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
  c7 = tmp19;
  const tmp14 = onPress(obj1.useState(false), 2);
  const items2 = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores1 = bounty(isActive[9]).useStateFromStores(items2, () => maybeApplyNoTextColorForLightCustomTheme.useReducedMotion);
  const tmp2Result1 = bounty(isActive[9]);
  const token = bounty(isActive[11]).useToken(index(tmp3[7]).modules.mobile.BOUNTY_TILE_BORDER_RADIUS);
  maybeApplyNoTextColorForLightCustomTheme = obj1.useRef(null);
  const callback2 = obj1.useCallback(() => {
    if (null != maybeApplyNoTextColorForLightCustomTheme.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
    }
    maybeApplyNoTextColorForLightCustomTheme.current = setTimeout(() => {
      callback(true);
    }, outer1_14);
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
    } else if (PlatformTypes) {
      tmp19(true);
    }
  }
  set = obj1.useRef(null);
  const items3 = [first];
  const effect = obj1.useEffect(() => {
    if (first) {
      const _setTimeout = setTimeout;
      set.current = setTimeout(() => {
        callback2(false);
        callback(false);
        set.current = null;
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
      tmp = null == maybeApplyNoTextColorForLightCustomTheme.current;
    }
    if (!tmp) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(maybeApplyNoTextColorForLightCustomTheme.current);
      maybeApplyNoTextColorForLightCustomTheme.current = null;
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
    let closure_0 = _undefined2.addEventListener("change", (arg0) => {
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
  let isModalVisible = PlatformTypes;
  if (PlatformTypes) {
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
  obj6[1] = c11(c7, obj7);
  items6[2] = c10(c7, obj6);
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
  items6[3] = c10(c7, obj10);
  obj2[4] = items6;
  const items9 = [c11(bounty(isActive[12]).Card, obj2), ];
  const obj11 = { style: tmp.cardFooter, children: null };
  const obj12 = { style: tmp.advertiserRow, children: null };
  const obj13 = { variant: "text-sm/medium", color: "text-subtle", lineClamp: 1, style: tmp.advertiserName, children: null };
  let str = bounty.advertiserName;
  if (str == null) {
    str = "";
  }
  obj13[4] = str;
  const items10 = [c10(bounty(isActive[16]).Text, obj13), ];
  const obj14 = { size: "xxs", style: tmp.advertiserIcon, color: null };
  obj14[2] = index(isActive[7]).colors.ICON_SUBTLE;
  items10[1] = c10(bounty(isActive[19]).CircleCheckIcon, obj14);
  obj12[1] = items10;
  const items11 = [c11(c7, obj12), ];
  const obj15 = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl3 = tmp2(tmp3[17]).intl;
  obj15[2] = intl3.string(bounty(isActive[17]).t.o6FLcF);
  items11[1] = c10(bounty(isActive[16]).Text, obj15);
  obj11[1] = items11;
  items9[1] = c11(c7, obj11);
  obj1[1] = items9;
  return c11(c7, obj1);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/BountyCard.tsx");

export default memoResult;
export const CARD_WIDTH = 188;