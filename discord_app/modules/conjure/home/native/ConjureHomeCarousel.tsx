// === Module 12633: ConjureHomeCarousel ===

// Module 12633 (ConjureHomeCarousel)
import nativeDefault from "native" /* 587 */;
import conjureHomeCarouselFan from "conjureHomeCarouselFan" /* 12636 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5006 */;
import AppStateStore from "AppStateStore" /* 1999 */;

require = fn;
const View = fn(17).View;
const AppStates = fn(1084).AppStates;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let c11 = 240;
const STEP = 240 + nativeDefault.space.PX_24;
const sum = 36 + 2 * nativeDefault.space.PX_6 + 2;
const sum1 = sum + nativeDefault.space.PX_12;
const PX_24 = nativeDefault.space.PX_24;
let obj = { games: fn(9682).GameControllerIcon, apps: fn(8636).AppsIcon, profile_widget: fn(12634).WidgetsIcon, automod: fn(11027).ShieldIcon, chat_bot: fn(12247).RobotIcon };
const createStyles = fn(5005);
let obj2 = { carousel: { height: sum1 + 135 + 54 + PX_24, overflow: "hidden" }, item: null, promptRow: null, avatar: null, bubble: null, card: null, thumbnail: null, footer: null, categoryIcon: null, footerText: null };
const rect = { position: "absolute", top: 0, left: 0, width: 240, gap: nativeDefault.space.PX_12 };
obj2.item = rect;
obj2.promptRow = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8 };
let size = { width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.round };
obj2.avatar = size;
let obj4 = { height: sum1 + 135 + 54 + PX_24, overflow: "hidden" };
let obj5 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8 };
obj2.bubble = { flex: 1, height: sum, paddingVertical: nativeDefault.space.PX_6, paddingHorizontal: nativeDefault.space.PX_10, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj6 = { flex: 1, height: sum, paddingVertical: nativeDefault.space.PX_6, paddingHorizontal: nativeDefault.space.PX_10, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.card = { overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj7 = { overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.thumbnail = { height: 135, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let obj8 = { height: 135, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.footer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_10, padding: nativeDefault.space.PX_10 };
const size1 = { width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj2.categoryIcon = size1;
obj2.footerText = { flex: 1 };
let closure_14 = createStyles.createStyles(obj2);
const __initData = { code: "function ConjureHomeCarouselTsx1(){const{wrapConjureHomeCarouselDistance,index,STEP,offset,loop,conjureHomeCarouselFan,viewportWidth,CARD_WIDTH}=this.__closure;const distance=wrapConjureHomeCarouselDistance(index*STEP,offset.get(),loop);const{angleDeg:angleDeg,dropPx:dropPx}=conjureHomeCarouselFan(distance/STEP,STEP);return{transform:[{translateX:viewportWidth/2-CARD_WIDTH/2+distance},{translateY:dropPx},{rotate:angleDeg+\"deg\"}]};}" };
const __initData2 = { code: "function ConjureHomeCarouselTsx2(){const{wrapConjureHomeCarouselDistance,index,STEP,offset,loop,conjureHomeCarouselFan,viewportWidth,CARD_WIDTH}=this.__closure;const distance=wrapConjureHomeCarouselDistance(index*STEP,offset.get(),loop);const{angleDeg:angleDeg,dropPx:dropPx}=conjureHomeCarouselFan(distance/STEP,STEP);return{transform:[{translateX:viewportWidth/2-CARD_WIDTH/2+distance},{translateY:dropPx},{rotate:angleDeg+\"deg\"}]};}" };
let ReactCompilerGating = fn(558);
let closure_17 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureHomeCarouselItem(offset) {
  obj = index(viewportWidth[15]);
  const cResult = obj.c(49);
  ({ inspiration, index } = offset);
  offset = offset.offset;
  viewportWidth = offset.viewportWidth;
  const tmp4 = closure_14();
  let result = STEP * offset.count;
  _slicedToArray = result;
  const fn = function t() {
    result = index * closure_12;
    const result1 = conjureHomeCarouselFan.wrapConjureHomeCarouselDistance(result, offset.get(), result);
    const result2 = conjureHomeCarouselFan.conjureHomeCarouselFan(result1 / closure_12, closure_12);
    const obj3 = { transform: null };
    const items = [{ translateX: viewportWidth / 2 - 120 + result1 }, { translateY: result2.dropPx }, ];
    const obj4 = { translateX: viewportWidth / 2 - 120 + result1 };
    items[2] = { rotate: "" + result2.angleDeg + "deg" };
    obj3.transform = items;
    return obj3;
  };
  let obj2 = index(viewportWidth[16]);
  fn.__closure = { wrapConjureHomeCarouselDistance: index(viewportWidth[17]).wrapConjureHomeCarouselDistance, index, STEP, offset, loop: result, conjureHomeCarouselFan: index(viewportWidth[17]).conjureHomeCarouselFan, viewportWidth, CARD_WIDTH };
  fn.__workletHash = 10891519667070;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === tmp4.item) {
      let tmp8 = cResult[2];
    }
    ({ promptRow, avatar } = tmp4);
    if (cResult[3] !== inspiration.authorAvatarSeed) {
      const tmpResult = index(tmp2[18]);
      const source = tmpResult.makeSource(index(tmp2[18]).getDefaultAvatarURL(undefined, inspiration.authorAvatarSeed));
      cResult[3] = inspiration.authorAvatarSeed;
      cResult[4] = source;
      let tmp9 = source;
      const tmpResult3 = index(tmp2[18]);
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp4.avatar) {
      if (cResult[6] === tmp9) {
        let tmp11 = cResult[7];
      }
      if (cResult[8] !== inspiration.shortPrompt) {
        let obj4 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 2, children: inspiration.shortPrompt };
        const tmp17 = closure_9(index(tmp2[20]).Text, obj4);
        cResult[8] = inspiration.shortPrompt;
        cResult[9] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[9];
      }
      if (cResult[10] === tmp4.bubble) {
        if (cResult[11] === tmp15) {
          let tmp18 = cResult[12];
        }
        if (cResult[13] === tmp4.promptRow) {
          if (cResult[14] === tmp11) {
            if (cResult[15] === tmp18) {
              let tmp22 = cResult[16];
            }
            const tmp27 = offset(tmp2[21])[inspiration.id];
            if (cResult[17] !== tmp27) {
              const size = { asset: tmp27, width: "100%", height: "100%" };
              const tmp30 = closure_9(index(tmp2[22]).LocalSvg, size);
              cResult[17] = tmp27;
              cResult[18] = tmp30;
              let tmp28 = tmp30;
            } else {
              tmp28 = cResult[18];
            }
            if (cResult[19] === tmp4.thumbnail) {
              if (cResult[20] === tmp28) {
                let tmp31 = cResult[21];
              }
              if (cResult[22] !== tmp5) {
                const obj5 = { size: "sm", color: tmp26(tmp2[7]).colors.ICON_STRONG };
                const tmp37 = closure_9(tmp5, obj5);
                cResult[22] = tmp5;
                cResult[23] = tmp37;
                let tmp35 = tmp37;
              } else {
                tmp35 = cResult[23];
              }
              if (cResult[24] === tmp4.categoryIcon) {
                if (cResult[25] === tmp35) {
                  let tmp38 = cResult[26];
                }
                if (cResult[27] !== inspiration.name) {
                  const obj6 = { variant: "text-md/semibold", color: "text-strong", lineClamp: 1, children: inspiration.name };
                  const tmp44 = closure_9(index(tmp2[20]).Text, obj6);
                  cResult[27] = inspiration.name;
                  cResult[28] = tmp44;
                  let tmp42 = tmp44;
                } else {
                  tmp42 = cResult[28];
                }
                if (cResult[29] !== inspiration.category) {
                  let result1 = index(tmp2[23]).conjureHomeCategoryLabel(inspiration.category);
                  cResult[29] = inspiration.category;
                  cResult[30] = result1;
                  let tmp45 = result1;
                  const tmpResult4 = index(tmp2[23]);
                } else {
                  tmp45 = cResult[30];
                }
                if (cResult[31] !== tmp45) {
                  const obj7 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, children: tmp45 };
                  const tmp49 = closure_9(index(tmp2[20]).Text, obj7);
                  cResult[31] = tmp45;
                  cResult[32] = tmp49;
                  let tmp47 = tmp49;
                } else {
                  tmp47 = cResult[32];
                }
                if (cResult[33] === tmp4.footerText) {
                  if (cResult[34] === tmp42) {
                    if (cResult[35] === tmp47) {
                      let tmp50 = cResult[36];
                    }
                    if (cResult[37] === tmp4.footer) {
                      if (cResult[38] === tmp38) {
                        if (cResult[39] === tmp50) {
                          let tmp54 = cResult[40];
                        }
                        if (cResult[41] === tmp4.card) {
                          if (cResult[42] === tmp31) {
                            if (cResult[43] === tmp54) {
                              let tmp58 = cResult[44];
                            }
                            if (cResult[45] === tmp8) {
                              if (cResult[46] === tmp58) {
                                if (cResult[47] === tmp22) {
                                  let tmp62 = cResult[48];
                                }
                                return tmp62;
                              }
                            }
                            const obj8 = { style: tmp8, children: null };
                            let items = [tmp22, tmp58];
                            obj8.children = items;
                            const tmp64 = closure_10(tmp26(tmp2[16]).View, obj8);
                            cResult[45] = tmp8;
                            cResult[46] = tmp58;
                            cResult[47] = tmp22;
                            cResult[48] = tmp64;
                            tmp62 = tmp64;
                          }
                        }
                        const obj9 = { style: tmp4.card, children: null };
                        const items1 = [tmp31, tmp54];
                        obj9.children = items1;
                        const tmp61 = closure_10(View, obj9);
                        cResult[41] = tmp4.card;
                        cResult[42] = tmp31;
                        cResult[43] = tmp54;
                        cResult[44] = tmp61;
                        tmp58 = tmp61;
                      }
                    }
                    const obj10 = { style: tmp4.footer, children: null };
                    const items2 = [tmp38, tmp50];
                    obj10.children = items2;
                    const tmp57 = closure_10(View, obj10);
                    cResult[37] = tmp4.footer;
                    cResult[38] = tmp38;
                    cResult[39] = tmp50;
                    cResult[40] = tmp57;
                    tmp54 = tmp57;
                  }
                }
                const obj11 = { style: tmp4.footerText, children: null };
                const items3 = [tmp42, tmp47];
                obj11.children = items3;
                const tmp53 = closure_10(View, obj11);
                cResult[33] = tmp4.footerText;
                cResult[34] = tmp42;
                cResult[35] = tmp47;
                cResult[36] = tmp53;
                tmp50 = tmp53;
              }
              const obj12 = { style: tmp4.categoryIcon, children: tmp35 };
              const tmp41 = closure_9(View, obj12);
              cResult[24] = tmp4.categoryIcon;
              cResult[25] = tmp35;
              cResult[26] = tmp41;
              tmp38 = tmp41;
            }
            const obj13 = { style: tmp4.thumbnail, children: tmp28 };
            const tmp34 = closure_9(View, obj13);
            cResult[19] = tmp4.thumbnail;
            cResult[20] = tmp28;
            cResult[21] = tmp34;
            tmp31 = tmp34;
          }
        }
        const obj14 = { style: promptRow, children: null };
        const items4 = [tmp11, tmp18];
        obj14.children = items4;
        const tmp25 = closure_10(View, obj14);
        cResult[13] = tmp4.promptRow;
        cResult[14] = tmp11;
        cResult[15] = tmp18;
        cResult[16] = tmp25;
        tmp22 = tmp25;
      }
      const obj15 = { style: tmp4.bubble, children: tmp15 };
      const tmp21 = closure_9(View, obj15);
      cResult[10] = tmp4.bubble;
      cResult[11] = tmp15;
      cResult[12] = tmp21;
      tmp18 = tmp21;
    }
    const obj16 = { style: avatar, source: tmp9 };
    const tmp14 = closure_9(offset(tmp2[19]), obj16);
    cResult[5] = tmp4.avatar;
    cResult[6] = tmp9;
    cResult[7] = tmp14;
    tmp11 = tmp14;
  }
  const items5 = [tmp4.item, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = tmp4.item;
  cResult[2] = items5;
  tmp8 = items5;
  let obj3 = { wrapConjureHomeCarouselDistance: index(viewportWidth[17]).wrapConjureHomeCarouselDistance, index, STEP, offset, loop: result, conjureHomeCarouselFan: index(viewportWidth[17]).conjureHomeCarouselFan, viewportWidth, CARD_WIDTH };
}) : (function ConjureHomeCarouselItem(offset) {
  ({ inspiration, index } = offset);
  offset = offset.offset;
  const viewportWidth = offset.viewportWidth;
  const tmp = closure_14();
  let result = STEP * offset.count;
  c3 = result;
  obj = index(viewportWidth[16]);
  const fn = function u() {
    const result = index * closure_12;
    const result1 = conjureHomeCarouselFan.wrapConjureHomeCarouselDistance(result, offset.get(), c3);
    const result2 = conjureHomeCarouselFan.conjureHomeCarouselFan(result1 / closure_12, closure_12);
    const obj3 = { transform: null };
    const items = [{ translateX: viewportWidth / 2 - 120 + result1 }, { translateY: result2.dropPx }, ];
    const obj4 = { translateX: viewportWidth / 2 - 120 + result1 };
    items[2] = { rotate: "" + result2.angleDeg + "deg" };
    obj3.transform = items;
    return obj3;
  };
  fn.__closure = { wrapConjureHomeCarouselDistance: index(viewportWidth[17]).wrapConjureHomeCarouselDistance, index, STEP, offset, loop: result, conjureHomeCarouselFan: index(viewportWidth[17]).conjureHomeCarouselFan, viewportWidth, CARD_WIDTH };
  fn.__workletHash = 15132816599517;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj3 = { style: null, children: null };
  let items = [tmp.item, animatedStyle];
  obj3.style = items;
  let obj4 = { style: tmp.promptRow, children: null };
  const obj5 = { style: tmp.avatar, source: null };
  let obj2 = { wrapConjureHomeCarouselDistance: index(viewportWidth[17]).wrapConjureHomeCarouselDistance, index, STEP, offset, loop: result, conjureHomeCarouselFan: index(viewportWidth[17]).conjureHomeCarouselFan, viewportWidth, CARD_WIDTH };
  const tmp4 = offset(viewportWidth[19]);
  const obj6 = index(viewportWidth[18]);
  obj5.source = obj6.makeSource(index(viewportWidth[18]).getDefaultAvatarURL(undefined, inspiration.authorAvatarSeed));
  const items1 = [closure_9(tmp4, obj5), ];
  const obj8 = { style: tmp.bubble, children: closure_9(index(viewportWidth[20]).Text, { variant: "text-sm/medium", color: "text-strong", lineClamp: 2, children: inspiration.shortPrompt }) };
  items1[1] = closure_9(View, obj8);
  obj4.children = items1;
  const items2 = [closure_10(View, obj4), ];
  const obj10 = { style: tmp.card, children: null };
  const obj11 = { style: tmp.thumbnail, children: null };
  const size = { asset: offset(viewportWidth[21])[inspiration.id], width: "100%", height: "100%" };
  obj11.children = closure_9(index(viewportWidth[22]).LocalSvg, size);
  const items3 = [closure_9(View, obj11), ];
  const obj12 = { style: tmp.footer, children: null };
  const obj13 = { style: tmp.categoryIcon, children: null };
  const obj7 = index(viewportWidth[18]);
  const obj9 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 2, children: inspiration.shortPrompt };
  obj13.children = closure_9(obj[inspiration.category], { size: "sm", color: offset(viewportWidth[7]).colors.ICON_STRONG });
  const items4 = [closure_9(View, obj13), ];
  const obj15 = { style: tmp.footerText, children: null };
  const items5 = [closure_9(index(viewportWidth[20]).Text, { variant: "text-md/semibold", color: "text-strong", lineClamp: 1, children: inspiration.name }), ];
  const obj17 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, children: null };
  const obj14 = { size: "sm", color: offset(viewportWidth[7]).colors.ICON_STRONG };
  const obj16 = { variant: "text-md/semibold", color: "text-strong", lineClamp: 1, children: inspiration.name };
  obj17.children = index(viewportWidth[23]).conjureHomeCategoryLabel(inspiration.category);
  items5[1] = closure_9(index(viewportWidth[20]).Text, obj17);
  obj15.children = items5;
  items4[1] = closure_10(View, obj15);
  obj12.children = items4;
  items3[1] = closure_10(View, obj12);
  obj10.children = items3;
  items2[1] = closure_10(View, obj10);
  obj3.children = items2;
  return closure_10(offset(viewportWidth[16]).View, obj3);
}));
const __initData3 = { code: "function ConjureHomeCarouselTsx3(frame){const{offset,CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND,loop}=this.__closure;var _frame$timeSincePrevi;const elapsed=(_frame$timeSincePrevi=frame.timeSincePreviousFrame)!==null&&_frame$timeSincePrevi!==void 0?_frame$timeSincePrevi:0;offset.set((offset.get()+CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND*elapsed/1000)%loop);}" };
const __initData4 = { code: "function ConjureHomeCarouselTsx4(frame){const{offset,CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND,loop}=this.__closure;var _frame$timeSincePrevi;const elapsed=(_frame$timeSincePrevi=frame.timeSincePreviousFrame)!==null&&_frame$timeSincePrevi!==void 0?_frame$timeSincePrevi:0;offset.set((offset.get()+CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND*elapsed/1000)%loop);}" };
ReactCompilerGating = fn(558);
let obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_10, padding: nativeDefault.space.PX_10 };
size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeCarousel.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureHomeCarousel(onScreen) {
  const cResult = first(576).c(17);
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let result = tmp(12788).conjureHomeInspirationEntries();
    cResult[0] = result;
    first = result;
    const tmpResult = tmp(12788);
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [onScreen];
    class P {
      constructor() {
        return closure_6.useReducedMotion;
      }
    }
    cResult[1] = items;
    cResult[2] = P;
    let tmp7 = P;
    let tmp6 = items;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  obj = first(576);
  const stateFromStores = first(504).useStateFromStores(tmp6, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AppStateStore];
    class O {
      constructor() {
        return closure_1_7.getState() === closure_1_8.ACTIVE;
      }
    }
    cResult[3] = items1;
    cResult[4] = O;
    let tmp11 = O;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[3];
    tmp11 = cResult[4];
  }
  const tmpResult6 = first(504);
  const stateFromStores1 = first(504).useStateFromStores(tmp10, tmp11);
  const tmpResult7 = first(504);
  const isFocused = first(1504).useIsFocused();
  const tmp15 = sharedValue(result1.useState(0), 2);
  const first1 = tmp15[0];
  dependencyMap = tmp15[1];
  const obj6 = result1;
  const tmpResult8 = first(1504);
  sharedValue = first(5086).useSharedValue(0);
  result1 = closure_12 * first.length;
  const tmpResult9 = first(5086);
  const fn = function y(timeSincePreviousFrame) {
    let num = timeSincePreviousFrame.timeSincePreviousFrame;
    if (num == null) {
      num = 0;
    }
    value = sharedValue.get();
    const result = sharedValue.set((value + conjureHomeCarouselFan.CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND * num / 1000) % result1);
  };
  const tmpResult10 = first(5086);
  fn.__closure = { offset: sharedValue, CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND: first(12636).CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND, loop: result1 };
  fn.__workletHash = 4240488633760;
  fn.__initData = __initData3;
  const frameCallback = tmpResult10.useFrameCallback(fn, false);
  onScreen = !stateFromStores;
  if (!stateFromStores) {
    onScreen = stateFromStores1;
  }
  if (onScreen) {
    onScreen = isFocused;
  }
  if (onScreen) {
    onScreen = onScreen.onScreen;
  }
  if (onScreen) {
    onScreen = first1 > 0;
  }
  if (cResult[5] === frameCallback) {
    if (cResult[6] === onScreen) {
      let tmp20 = cResult[7];
      let tmp21 = cResult[8];
    }
    const effect = obj6.useEffect(tmp20, tmp21);
    const _Symbol = Symbol;
    class O {
      constructor() {
        return closure_1_7.getState() === closure_1_8.ACTIVE;
      }
    }
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const string = tmp(1125).intl.string;
      class O {
        constructor() {
          return closure_1_7.getState() === closure_1_8.ACTIVE;
        }
      }
      const fn3 = function k(nativeEvent) {
        return closure_2(nativeEvent.nativeEvent.layout.width);
      };
      cResult[9] = fn3;
      cResult[10] = tmp27;
      let tmp25 = tmp27;
      let tmp24 = fn3;
    } else {
      tmp24 = cResult[9];
      tmp25 = cResult[10];
    }
    if (cResult[11] === sharedValue) {
      if (cResult[12] === first1) {
        let tmp28 = cResult[13];
      }
      if (cResult[14] === tmp4.carousel) {
        if (cResult[15] === tmp28) {
          let tmp30 = cResult[16];
        }
        return tmp30;
      }
      class O {
        constructor() {
          return closure_1_7.getState() === closure_1_8.ACTIVE;
        }
      }
      const obj3 = { style: tmp23, accessible: true, accessibilityLabel: tmp25, onLayout: tmp24, children: tmp28 };
      const tmp32 = closure_9(frameCallback, obj3);
      cResult[14] = tmp4.carousel;
      cResult[15] = tmp28;
      cResult[16] = tmp32;
      tmp30 = tmp32;
    }
    let mapped = null;
    if (first1 > 0) {
      mapped = first.map((inspiration, index) => React6(closure_17, { inspiration, index, count: first.length, offset: sharedValue, viewportWidth: first1 }, inspiration.id));
    }
    cResult[11] = sharedValue;
    cResult[12] = first1;
    cResult[13] = mapped;
    tmp28 = mapped;
  }
  const fn2 = function w() {
    frameCallback.setActive(onScreen);
  };
  const items2 = [frameCallback, onScreen];
  cResult[5] = frameCallback;
  cResult[6] = onScreen;
  cResult[7] = fn2;
  cResult[8] = items2;
  tmp21 = items2;
  tmp20 = fn2;
  const obj2 = { offset: sharedValue, CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND: first(12636).CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND, loop: result1 };
}) : (function ConjureHomeCarousel(onScreen) {
  let sharedValue;
  noop = undefined;
  let frameCallback;
  onScreen = undefined;
  const memo = noop.useMemo(() => memo(12788).conjureHomeInspirationEntries(), []);
  obj = noop;
  const tmp = closure_14();
  const tmp2 = memo;
  const items = [onScreen];
  const stateFromStores = memo(504).useStateFromStores(items, () => onScreen.useReducedMotion);
  const obj2 = memo(504);
  const items1 = [AppStateStore];
  const stateFromStores1 = memo(504).useStateFromStores(items1, () => state.getState() === constants.ACTIVE);
  const obj3 = memo(504);
  const isFocused = memo(1504).useIsFocused();
  const tmp7 = sharedValue(noop.useState(0), 2);
  const viewportWidth = tmp7[0];
  dependencyMap = tmp7[1];
  const obj4 = memo(1504);
  sharedValue = memo(5086).useSharedValue(0);
  let result = closure_12 * memo.length;
  noop = result;
  const obj5 = memo(5086);
  class C {
    constructor(arg0) {
      num = onScreen.timeSincePreviousFrame;
      if (num == null) {
        num = 0;
      }
      value = closure_3.get();
      result = closure_3.set((value + closure_0(closure_2[17]).CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND * num / 1000) % closure_4);
      return;
    }
  }
  const obj6 = memo(5086);
  C.__closure = { offset: sharedValue, CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND: memo(12636).CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND, loop: result };
  C.__workletHash = 10027169379079;
  C.__initData = __initData4;
  frameCallback = obj6.useFrameCallback(C, false);
  onScreen = !stateFromStores;
  if (!stateFromStores) {
    onScreen = stateFromStores1;
  }
  if (onScreen) {
    onScreen = isFocused;
  }
  if (onScreen) {
    onScreen = onScreen.onScreen;
  }
  if (onScreen) {
    onScreen = viewportWidth > 0;
  }
  const items2 = [frameCallback, onScreen];
  const effect = obj.useEffect(() => {
    frameCallback.setActive(onScreen);
  }, items2);
  const obj8 = { style: tmp.carousel, accessible: true, accessibilityLabel: null, onLayout: null, children: null };
  const intl = tmp2(1125).intl;
  obj8.accessibilityLabel = intl.string(viewportWidth(3864).Qc4S39);
  obj8.onLayout = function onLayout(nativeEvent) {
    return dependencyMap(nativeEvent.nativeEvent.layout.width);
  };
  let mapped = null;
  if (viewportWidth > 0) {
    mapped = memo.map((inspiration, index) => React6(closure_17, { inspiration, index, count: memo.length, offset: sharedValue, viewportWidth }, inspiration.id));
  }
  obj8.children = mapped;
  return closure_9(frameCallback, obj8);
}));
export const CONJURE_HOME_CAROUSEL_ROOM_BELOW = PX_24;