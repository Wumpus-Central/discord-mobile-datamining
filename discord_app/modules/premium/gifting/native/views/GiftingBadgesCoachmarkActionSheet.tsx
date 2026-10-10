// discord_app/modules/premium/gifting/native/views/GiftingBadgesCoachmarkActionSheet.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef2664 from "../../GiftingBadge.messages.js";
import RootNavigationRef from "../../../../main_tabs_v2/RootNavigationRef.native.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import AnalyticsLocationDefault from "../../../../app_analytics/AnalyticsLocation.tsx";
import utils_openGiftModal from "../../../native/utils/openGiftModal.tsx";
import GiftingBadgeIconDefault from "GiftingBadgeIcon.tsx";
import _modDef17652 from "../../../../../../discord_assets/assets/gifting/new_gifting_badges.png.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import BadgeDirectoryStore from "../../../../badges/BadgeDirectoryStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(2062).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  container: { alignItems: "center", paddingHorizontal: 20, paddingBottom: 20, gap: nativeDefault.space.PX_24 },
  graphicContainer: null,
  newBadgeImage: null,
  textContainer: null,
  text: null,
  footer: null,
};
let size = {
  height: 188,
  width: 335,
  alignItems: "center",
  justifyContent: "center",
  padding: nativeDefault.space.PX_16,
};
obj2.graphicContainer = size;
obj2.newBadgeImage = { width: "100%", height: "100%", resizeMode: "contain" };
let obj3 = { alignItems: "center", paddingHorizontal: 20, paddingBottom: 20, gap: nativeDefault.space.PX_24 };
obj2.textContainer = { gap: nativeDefault.space.PX_8 };
obj2.text = { textAlign: "center" };
obj2.footer = { width: "100%" };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function HasBadgeCoachmark(markAsDismissed) {
      const cResult = markAsDismissed(576).c(41);
      markAsDismissed = markAsDismissed.markAsDismissed;
      ({ currentTier, giftCount, variant } = markAsDismissed);
      const tmp4 = closure_9();
      let obj = markAsDismissed(576);
      const isGiftingBadgeComplexArtEnabled = markAsDismissed(10099).useIsGiftingBadgeComplexArtEnabled(
        "GiftingBadgesCoachmarkActionSheet",
      );
      if (cResult[0] === currentTier) {
        if (cResult[1] === isGiftingBadgeComplexArtEnabled) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] !== markAsDismissed) {
          class I {
            constructor() {
              obj = closure_1(closure_2[10]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
              obj2 = closure_0(closure_2[11]);
              rootNavigationRef = obj2.getRootNavigationRef();
              if (rootNavigationRef != null) {
                str = "you";
                navigateResult = rootNavigationRef.navigate("you");
              }
              return;
            }
          }
          cResult[3] = markAsDismissed;
          cResult[4] = I;
        } else {
          class I {
            constructor() {
              obj = closure_1(closure_2[10]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
              obj2 = closure_0(closure_2[11]);
              rootNavigationRef = obj2.getRootNavigationRef();
              if (rootNavigationRef != null) {
                str = "you";
                navigateResult = rootNavigationRef.navigate("you");
              }
              return;
            }
          }
        }
        if (cResult[5] !== markAsDismissed) {
          class I {
            constructor() {
              obj = closure_1(closure_2[10]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
              obj2 = closure_0(closure_2[11]);
              rootNavigationRef = obj2.getRootNavigationRef();
              if (rootNavigationRef != null) {
                str = "you";
                navigateResult = rootNavigationRef.navigate("you");
              }
              return;
            }
          }
          cResult[5] = markAsDismissed;
          cResult[6] = tmp10;
        } else {
          class I {
            constructor() {
              obj = closure_1(closure_2[10]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
              obj2 = closure_0(closure_2[11]);
              rootNavigationRef = obj2.getRootNavigationRef();
              if (rootNavigationRef != null) {
                str = "you";
                navigateResult = rootNavigationRef.navigate("you");
              }
              return;
            }
          }
        }
        const container = tmp4.container;
        if (cResult[7] !== tmp6) {
          class I {
            constructor() {
              obj = closure_1(closure_2[10]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
              obj2 = closure_0(closure_2[11]);
              rootNavigationRef = obj2.getRootNavigationRef();
              if (rootNavigationRef != null) {
                str = "you";
                navigateResult = rootNavigationRef.navigate("you");
              }
              return;
            }
          }
          let tmp12 = null != tmp6;
          if (tmp12) {
            class I {
              constructor() {
                obj = closure_1(closure_2[10]);
                hideActionSheetResult = obj.hideActionSheet();
                tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
                obj2 = closure_0(closure_2[11]);
                rootNavigationRef = obj2.getRootNavigationRef();
                if (rootNavigationRef != null) {
                  str = "you";
                  navigateResult = rootNavigationRef.navigate("you");
                }
                return;
              }
            }
            const obj3 = { icon: tmp6, size: 120 };
            tmp12 = closure_7(GiftingBadgeIconDefault, obj3);
          }
          cResult[7] = tmp6;
          cResult[8] = tmp12;
        } else {
          class I {
            constructor() {
              obj = closure_1(closure_2[10]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
              obj2 = closure_0(closure_2[11]);
              rootNavigationRef = obj2.getRootNavigationRef();
              if (rootNavigationRef != null) {
                str = "you";
                navigateResult = rootNavigationRef.navigate("you");
              }
              return;
            }
          }
        }
        if (cResult[9] === tmp4.graphicContainer) {
          class I {
            constructor() {
              obj = closure_1(closure_2[10]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
              obj2 = closure_0(closure_2[11]);
              rootNavigationRef = obj2.getRootNavigationRef();
              if (rootNavigationRef != null) {
                str = "you";
                navigateResult = rootNavigationRef.navigate("you");
              }
              return;
            }
          }
          ({ textContainer, text } = tmp4);
          if (cResult[12] !== currentTier.name) {
            class I {
              constructor() {
                obj = closure_1(closure_2[10]);
                hideActionSheetResult = obj.hideActionSheet();
                tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
                obj2 = closure_0(closure_2[11]);
                rootNavigationRef = obj2.getRootNavigationRef();
                if (rootNavigationRef != null) {
                  str = "you";
                  navigateResult = rootNavigationRef.navigate("you");
                }
                return;
              }
            }
            const name = currentTier.name;
            if (name == null) {
              class I {
                constructor() {
                  obj = closure_1(closure_2[10]);
                  hideActionSheetResult = obj.hideActionSheet();
                  tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
                  obj2 = closure_0(closure_2[11]);
                  rootNavigationRef = obj2.getRootNavigationRef();
                  if (rootNavigationRef != null) {
                    str = "you";
                    navigateResult = rootNavigationRef.navigate("you");
                  }
                  return;
                }
              }
            }
            const obj4 = { tierName: name };
            const formatResult = obj6.format(_modDef2664["a+jfuy"], obj4);
            cResult[12] = currentTier.name;
            cResult[13] = formatResult;
          } else {
            class I {
              constructor() {
                obj = closure_1(closure_2[10]);
                hideActionSheetResult = obj.hideActionSheet();
                tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
                obj2 = closure_0(closure_2[11]);
                rootNavigationRef = obj2.getRootNavigationRef();
                if (rootNavigationRef != null) {
                  str = "you";
                  navigateResult = rootNavigationRef.navigate("you");
                }
                return;
              }
            }
          }
          if (cResult[14] === tmp4.text) {
            class I {
              constructor() {
                obj = closure_1(closure_2[10]);
                hideActionSheetResult = obj.hideActionSheet();
                tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
                obj2 = closure_0(closure_2[11]);
                rootNavigationRef = obj2.getRootNavigationRef();
                if (rootNavigationRef != null) {
                  str = "you";
                  navigateResult = rootNavigationRef.navigate("you");
                }
                return;
              }
            }
            if (cResult[17] === giftCount) {
              class I {
                constructor() {
                  obj = closure_1(closure_2[10]);
                  hideActionSheetResult = obj.hideActionSheet();
                  tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
                  obj2 = closure_0(closure_2[11]);
                  rootNavigationRef = obj2.getRootNavigationRef();
                  if (rootNavigationRef != null) {
                    str = "you";
                    navigateResult = rootNavigationRef.navigate("you");
                  }
                  return;
                }
              }
            }
            if ("noCount" === variant) {
              class I {
                constructor() {
                  obj = closure_1(closure_2[10]);
                  hideActionSheetResult = obj.hideActionSheet();
                  tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
                  obj2 = closure_0(closure_2[11]);
                  rootNavigationRef = obj2.getRootNavigationRef();
                  if (rootNavigationRef != null) {
                    str = "you";
                    navigateResult = rootNavigationRef.navigate("you");
                  }
                  return;
                }
              }
              let stringResult = obj11.string(_modDef2664["0N8fCf"]);
            } else {
              class I {
                constructor() {
                  obj = closure_1(closure_2[10]);
                  hideActionSheetResult = obj.hideActionSheet();
                  tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
                  obj2 = closure_0(closure_2[11]);
                  rootNavigationRef = obj2.getRootNavigationRef();
                  if (rootNavigationRef != null) {
                    str = "you";
                    navigateResult = rootNavigationRef.navigate("you");
                  }
                  return;
                }
              }
              if (giftCount == null) {
                class I {
                  constructor() {
                    obj = closure_1(closure_2[10]);
                    hideActionSheetResult = obj.hideActionSheet();
                    tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
                    obj2 = closure_0(closure_2[11]);
                    rootNavigationRef = obj2.getRootNavigationRef();
                    if (rootNavigationRef != null) {
                      str = "you";
                      navigateResult = rootNavigationRef.navigate("you");
                    }
                    return;
                  }
                }
              }
              const obj5 = { giftCount };
              stringResult = obj9.formatToPlainString(_modDef2664.QxRA6w, obj5);
            }
            cResult[17] = giftCount;
            cResult[18] = variant;
            cResult[19] = stringResult;
          }
          const obj7 = { style: text, variant: "heading-xl/bold", color: "text-strong", children: tmp18 };
          const tmp24 = closure_7(tmp(5088).Text, obj7);
          cResult[14] = tmp4.text;
          cResult[15] = tmp18;
          cResult[16] = tmp24;
        }
        const obj8 = { style: tmp4.graphicContainer, children: tmp11 };
        const tmp17 = closure_7(View, obj8);
        cResult[9] = tmp4.graphicContainer;
        cResult[10] = tmp11;
        cResult[11] = tmp17;
      }
      const obj2 = markAsDismissed(10099);
      const giftingBadgeTierIconUrl = markAsDismissed(10099).getGiftingBadgeTierIconUrl(
        currentTier,
        isGiftingBadgeComplexArtEnabled,
      );
      cResult[0] = currentTier;
      cResult[1] = isGiftingBadgeComplexArtEnabled;
      cResult[2] = giftingBadgeTierIconUrl;
      tmp6 = giftingBadgeTierIconUrl;
      const tmpResult = markAsDismissed(10099);
    }
  : function HasBadgeCoachmark(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      ({ currentTier, giftCount } = markAsDismissed);
      const tmp = closure_9();
      const isGiftingBadgeComplexArtEnabled = markAsDismissed(10099).useIsGiftingBadgeComplexArtEnabled(
        "GiftingBadgesCoachmarkActionSheet",
      );
      let obj = markAsDismissed(10099);
      const giftingBadgeTierIconUrl = markAsDismissed(10099).getGiftingBadgeTierIconUrl(
        currentTier,
        isGiftingBadgeComplexArtEnabled,
      );
      const items = [markAsDismissed];
      const items1 = [markAsDismissed];
      const callback = noop.useCallback(() => {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        markAsDismissed(ContentDismissActionType.TAKE_ACTION);
        const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.navigate("you");
        }
      }, items);
      const callback1 = noop.useCallback(() => {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }, items1);
      const obj3 = { startExpanded: true, onDismiss: callback1, children: null };
      const obj4 = { style: tmp.container, children: null };
      const obj5 = { style: tmp.graphicContainer, children: null };
      let tmp8Result = null != giftingBadgeTierIconUrl;
      if (tmp8Result) {
        const obj6 = { icon: giftingBadgeTierIconUrl, size: 120 };
        tmp8Result = closure_7(GiftingBadgeIconDefault, obj6);
      }
      obj5.children = tmp8Result;
      const items2 = [closure_7(View, obj5), ,];
      const obj7 = { style: tmp.textContainer, children: null };
      const obj8 = { style: tmp.text, variant: "heading-xl/bold", color: "text-strong", children: null };
      const intl = tmp2(1126).intl;
      let str = currentTier.name;
      if (str == null) {
        str = "";
      }
      obj8.children = intl.format(_modDef2664["a+jfuy"], { tierName: str });
      const items3 = [closure_7(markAsDismissed(5088).Text, obj8)];
      const obj9 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: null };
      if ("noCount" === markAsDismissed.variant) {
        const intl3 = tmp2(1126).intl;
        let stringResult = intl3.string(_modDef2664["0N8fCf"]);
      } else {
        const intl2 = tmp2(1126).intl;
        if (giftCount == null) {
          giftCount = 0;
        }
        const obj10 = { giftCount };
        stringResult = intl2.formatToPlainString(_modDef2664.QxRA6w, obj10);
      }
      obj9.children = stringResult;
      items3[1] = closure_7(markAsDismissed(5088).Text, obj9);
      obj7.children = items3;
      items2[1] = closure_8(View, obj7);
      const obj11 = { style: tmp.footer, children: null };
      const obj12 = { grow: true, text: null, onPress: null };
      const intl4 = tmp2(1126).intl;
      obj12.text = intl4.string(markAsDismissed(1126).t.RzWDqY);
      obj12.onPress = callback;
      obj11.children = closure_7(markAsDismissed(5379).Button, obj12);
      items2[2] = closure_7(View, obj11);
      obj4.children = items2;
      obj3.children = closure_8(View, obj4);
      return closure_7(markAsDismissed(6839).BottomSheet, obj3);
    };
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function NewBadgeCoachmark(markAsDismissed) {
      const cResult = markAsDismissed(576).c(35);
      markAsDismissed = markAsDismissed.markAsDismissed;
      const tmp4 = closure_9();
      if (cResult[0] !== markAsDismissed) {
        const fn = function o() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          markAsDismissed(ContentDismissActionType.TAKE_ACTION);
          const obj3 = { analyticsLocations: null };
          const items = [AnalyticsLocationDefault.GIFTING_BADGE_COACHMARK];
          obj3.analyticsLocations = items;
          utils_openGiftModal.openGiftModal(obj3);
        };
        cResult[0] = markAsDismissed;
        cResult[1] = fn;
      }
      if (cResult[2] !== markAsDismissed) {
        class C {
          constructor() {
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
        cResult[2] = markAsDismissed;
        cResult[3] = C;
      } else {
        class C {
          constructor() {
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
        tmp8[0] = _modDef17652;
        cResult[4] = tmp8;
      } else {
        class C {
          constructor() {
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
      }
      if (cResult[5] !== tmp4.newBadgeImage) {
        class C {
          constructor() {
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
        const obj2 = { source: tmp8, style: tmp4.newBadgeImage };
        const tmp12 = closure_7(FastImageDefault, obj2);
        cResult[5] = tmp4.newBadgeImage;
        cResult[6] = tmp12;
      } else {
        class C {
          constructor() {
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
      }
      if (cResult[7] === tmp4.graphicContainer) {
        class C {
          constructor() {
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
        const _Symbol = Symbol;
        ({ textContainer, text } = tmp4);
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
          const stringResult = obj4.string(_modDef2664.Q2RQka);
          cResult[10] = stringResult;
          const tmp14 = stringResult;
        } else {
          class C {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
        }
        if (cResult[11] !== tmp4.text) {
          class C {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
          let obj3 = { style: text, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: tmp14 };
          const tmp18 = closure_7(tmp(5088).Text, obj3);
          cResult[11] = tmp4.text;
          cResult[12] = tmp18;
        } else {
          class C {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
          const stringResult1 = obj6.string(_modDef2664["3EQnkg"]);
          cResult[13] = stringResult1;
          const tmp19 = stringResult1;
        } else {
          class C {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
        }
        if (cResult[14] !== tmp4.text) {
          class C {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
          const obj5 = { style: tmp4.text, variant: "text-sm/medium", color: "text-muted", children: tmp19 };
          const tmp23 = closure_7(tmp(5088).Text, obj5);
          cResult[14] = tmp4.text;
          cResult[15] = tmp23;
        } else {
          class C {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
        }
        if (cResult[16] === tmp4.textContainer) {
          class C {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
        }
        const obj7 = { style: textContainer, children: null };
        let items = [tmp17, tmp22];
        obj7.children = items;
        const tmp27 = closure_8(View, obj7);
        cResult[16] = tmp4.textContainer;
        cResult[17] = tmp17;
        cResult[18] = tmp22;
        cResult[19] = tmp27;
      }
      let obj = markAsDismissed(576);
      const obj8 = { style: tmp4.graphicContainer, children: tmp10 };
      cResult[7] = tmp4.graphicContainer;
      cResult[8] = tmp10;
      cResult[9] = closure_7(View, { style: tmp4.graphicContainer, children: tmp10 });
      const tmp13 = closure_7(View, { style: tmp4.graphicContainer, children: tmp10 });
    }
  : function NewBadgeCoachmark(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      const tmp = closure_9();
      let items = [markAsDismissed];
      const items1 = [markAsDismissed];
      const callback = noop.useCallback(() => {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        markAsDismissed(ContentDismissActionType.TAKE_ACTION);
        const obj3 = { analyticsLocations: null };
        const items = [AnalyticsLocationDefault.GIFTING_BADGE_COACHMARK];
        obj3.analyticsLocations = items;
        utils_openGiftModal.openGiftModal(obj3);
      }, items);
      const callback1 = noop.useCallback(() => {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }, items1);
      let obj = { startExpanded: true, onDismiss: callback1, children: null };
      const obj2 = { style: tmp.container, children: null };
      let obj3 = { style: tmp.graphicContainer, children: null };
      const obj4 = { source: null, style: null };
      const obj5 = { uri: _modDef17652 };
      obj4.source = obj5;
      obj4.style = tmp.newBadgeImage;
      obj3.children = closure_7(FastImageDefault, obj4);
      const items2 = [closure_7(View, obj3), ,];
      const obj6 = { style: tmp.textContainer, children: null };
      const obj7 = {
        style: tmp.text,
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl = markAsDismissed(1126).intl;
      obj7.children = intl.string(_modDef2664.Q2RQka);
      const items3 = [closure_7(markAsDismissed(5088).Text, obj7)];
      const obj8 = { style: tmp.text, variant: "text-sm/medium", color: "text-muted", children: null };
      const intl2 = markAsDismissed(1126).intl;
      obj8.children = intl2.string(_modDef2664["3EQnkg"]);
      items3[1] = closure_7(markAsDismissed(5088).Text, obj8);
      obj6.children = items3;
      items2[1] = closure_8(View, obj6);
      const obj9 = { style: tmp.footer, children: null };
      const obj10 = { grow: true, text: null, icon: null, onPress: null };
      const intl3 = markAsDismissed(1126).intl;
      obj10.text = intl3.string(_modDef2664.DZnomS);
      obj10.icon = closure_7(markAsDismissed(11536).GiftIcon, {
        size: "sm",
        color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT,
      });
      obj10.onPress = callback;
      obj9.children = closure_7(markAsDismissed(5379).Button, obj10);
      items2[2] = closure_7(View, obj9);
      obj2.children = items2;
      obj.children = closure_8(View, obj2);
      return closure_7(markAsDismissed(6839).BottomSheet, obj);
    };
ReactCompilerGating = fn(558);
let obj4 = { gap: nativeDefault.space.PX_8 };
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgesCoachmarkActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GiftingBadgesCoachmarkActionSheet(arg0) {
      const cResult = c.c(9);
      ({ markAsDismissed, variant } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [BadgeDirectoryStore];
        const fn = function s() {
          const obj = {
            currentTier: BadgeDirectoryStore.getCurrentTier(require("BadgeId").BadgeId.GIFTING),
            giftCount: null,
          };
          const singleRequirementProgress = BadgeDirectoryStore.getSingleRequirementProgress(
            require("BadgeId").BadgeId.GIFTING,
          );
          let current;
          if (singleRequirementProgress != null) {
            current = singleRequirementProgress.current;
          }
          obj.giftCount = current;
          return obj;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStoresObject = initialize.useStateFromStoresObject(tmp4, tmp5);
      ({ currentTier, giftCount } = stateFromStoresObject);
      if (null != currentTier) {
        if (cResult[2] === currentTier) {
          if (cResult[3] === giftCount) {
            if (cResult[4] === markAsDismissed) {
            }
          }
        }
        const obj2 = { markAsDismissed, currentTier, giftCount, variant };
        const tmp15 = React5(closure_10, obj2);
        cResult[2] = currentTier;
        cResult[3] = giftCount;
        cResult[4] = markAsDismissed;
        cResult[5] = variant;
        cResult[6] = tmp15;
      } else {
        if (cResult[7] !== markAsDismissed) {
          const obj3 = { markAsDismissed };
          const tmp11 = React5(closure_11, obj3);
          cResult[7] = markAsDismissed;
          cResult[8] = tmp11;
          let tmp8 = tmp11;
        } else {
          tmp8 = cResult[8];
        }
        return tmp8;
      }
      const tmpResult = initialize;
    }
  : function GiftingBadgesCoachmarkActionSheet(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      const items = [BadgeDirectoryStore];
      const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => {
        const obj = {
          currentTier: BadgeDirectoryStore.getCurrentTier(require("BadgeId").BadgeId.GIFTING),
          giftCount: null,
        };
        const singleRequirementProgress = BadgeDirectoryStore.getSingleRequirementProgress(
          require("BadgeId").BadgeId.GIFTING,
        );
        let current;
        if (singleRequirementProgress != null) {
          current = singleRequirementProgress.current;
        }
        obj.giftCount = current;
        return obj;
      });
      const currentTier = stateFromStoresObject.currentTier;
      if (null != currentTier) {
        const obj2 = { markAsDismissed, currentTier, giftCount: tmp2, variant: markAsDismissed.variant };
        let tmp5 = React5(closure_10, obj2);
      } else {
        const obj3 = { markAsDismissed };
        tmp5 = React5(closure_11, obj3);
      }
      return tmp5;
    };
