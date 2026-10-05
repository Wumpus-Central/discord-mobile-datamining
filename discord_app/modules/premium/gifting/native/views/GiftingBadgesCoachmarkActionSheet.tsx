// discord_app/modules/premium/gifting/native/views/GiftingBadgesCoachmarkActionSheet.tsx
import get_initialized from "../../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import DismissibleContentConstants from "../../../../dismissible_content/DismissibleContentConstants.tsx";
import _modDef2589 from "../../GiftingBadge.messages.js";
import RootNavigationRef from "../../../../main_tabs_v2/RootNavigationRef.native.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import AnalyticsLocationDefault from "../../../../app_analytics/AnalyticsLocation.tsx";
import utils_openGiftModal from "../../../native/utils/openGiftModal.tsx";
import GiftingBadgeIconDefault from "GiftingBadgeIcon.tsx";
import _modDef17120 from "../../../../../../discord_assets/assets/gifting/new_gifting_badges.png.js";
import react from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import BadgeDirectoryStore from "../../../../badges/BadgeDirectoryStore.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let BottomSheet, hideActionSheetResult, navigateResult, tmp2;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let obj3;
let size;
({ Image: closure_4, View: hasOwnProperty } = react_native);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  graphicContainer: size,
  newBadgeImage: { width: "100%", height: "100%", objectFit: "contain" },
  textContainer: obj3,
  text: { textAlign: "center" },
  footer: { width: "100%" },
};
obj2 = { alignItems: "center", paddingHorizontal: 20, paddingBottom: 20, gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
size = { height: 188, width: 335, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16 };
obj3 = { gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (markAsDismissed) => {
      let currentTier;
      let giftCount;
      let items;
      let text;
      let textContainer;
      let variant;
      let obj = markAsDismissed(576);
      const cResult = obj.c(41);
      markAsDismissed = markAsDismissed.markAsDismissed;
      ({ currentTier, giftCount, variant } = markAsDismissed);
      const tmp4 = closure_10();
      let obj2 = markAsDismissed(10475);
      const isGiftingBadgeComplexArtEnabled = obj2.useIsGiftingBadgeComplexArtEnabled(
        "GiftingBadgesCoachmarkActionSheet",
      );
      if (cResult[0] === currentTier) {
        let tmp6;
        if (cResult[1] === isGiftingBadgeComplexArtEnabled) {
          tmp6 = cResult[2];
        }
        if (cResult[3] !== markAsDismissed) {
          class S {
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
          cResult[4] = S;
        } else {
          class S {
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
          class S {
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
          class S {
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
          class S {
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
            class S {
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
            tmp12 = closure_8(GiftingBadgeIconDefault, obj3);
          }
          cResult[7] = tmp6;
          cResult[8] = tmp12;
        } else {
          class S {
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
          class S {
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
            class S {
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
            const format = tmp19.format;
            const name = currentTier.name;
            const prop = _modDef2589["a+jfuy"];
            if (name == null) {
              class S {
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
            cResult[12] = currentTier.name;
            cResult[13] = format(prop, obj4);
            const formatResult = format(prop, obj4);
          } else {
            class S {
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
            let stringResult;
            class S {
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
              class S {
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
              if (cResult[20] === tmp4.text) {
                class S {
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
                if (cResult[23] === tmp4.textContainer) {
                  class S {
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
                const obj5 = { style: textContainer, children: items };
                items = [tmp24, tmp34];
                cResult[23] = tmp4.textContainer;
                cResult[24] = tmp24;
                cResult[25] = tmp34;
                cResult[26] = closure_9(closure_5, obj5);
                const tmp40 = closure_9(closure_5, obj5);
              }
              const obj6 = { style: tmp4.text, variant: "text-sm/medium", color: "text-default", children: tmp27 };
              cResult[20] = tmp4.text;
              cResult[21] = tmp27;
              cResult[22] = closure_8(markAsDismissed(4886).Text, obj6);
              const tmp36 = closure_8(markAsDismissed(4886).Text, obj6);
            }
            if ("noCount" === variant) {
              class S {
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
              stringResult = obj9.string(_modDef2589["0N8fCf"]);
            } else {
              class S {
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
              const formatToPlainString = tmp28.formatToPlainString;
              const QxRA6w = _modDef2589.QxRA6w;
              if (giftCount == null) {
                class S {
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
              const obj7 = { giftCount };
              stringResult = formatToPlainString(QxRA6w, obj7);
            }
            cResult[17] = giftCount;
            cResult[18] = variant;
            cResult[19] = stringResult;
          }
          const obj8 = { style: text, variant: "heading-xl/bold", color: "text-strong", children: tmp18 };
          cResult[14] = tmp4.text;
          cResult[15] = tmp18;
          cResult[16] = closure_8(markAsDismissed(4886).Text, obj8);
          const tmp26 = closure_8(markAsDismissed(4886).Text, obj8);
        }
        const obj10 = { style: tmp4.graphicContainer, children: tmp11 };
        cResult[9] = tmp4.graphicContainer;
        cResult[10] = tmp11;
        cResult[11] = closure_8(closure_5, obj10);
        const tmp17 = closure_8(closure_5, obj10);
      }
      const tmpResult = markAsDismissed(10475);
      const giftingBadgeTierIconUrl = tmpResult.getGiftingBadgeTierIconUrl(
        currentTier,
        isGiftingBadgeComplexArtEnabled,
      );
      cResult[0] = currentTier;
      cResult[1] = isGiftingBadgeComplexArtEnabled;
      cResult[2] = giftingBadgeTierIconUrl;
      tmp6 = giftingBadgeTierIconUrl;
    }
  : (markAsDismissed) => {
      let Button;
      let currentTier;
      let format;
      let giftCount;
      let intl4;
      let items2;
      let items3;
      let obj12;
      let obj4;
      let prop;
      let str;
      let stringResult;
      let tmp8Result;
      markAsDismissed = markAsDismissed.markAsDismissed;
      ({ currentTier, giftCount } = markAsDismissed);
      const variant = markAsDismissed.variant;
      const tmp = closure_10();
      let obj = markAsDismissed(10475);
      const isGiftingBadgeComplexArtEnabled = obj.useIsGiftingBadgeComplexArtEnabled(
        "GiftingBadgesCoachmarkActionSheet",
      );
      let obj2 = markAsDismissed(10475);
      const giftingBadgeTierIconUrl = obj2.getGiftingBadgeTierIconUrl(currentTier, isGiftingBadgeComplexArtEnabled);
      const items = [markAsDismissed];
      const items1 = [markAsDismissed];
      const callback = react.useCallback(() => {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        markAsDismissed(ContentDismissActionType.TAKE_ACTION);
        const obj2 = RootNavigationRef;
        const rootNavigationRef = obj2.getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.navigate("you");
        }
      }, items);
      const callback1 = react.useCallback(() => {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }, items1);
      const obj3 = { startExpanded: true, onDismiss: callback1, children: closure_9(closure_5, obj4) };
      const obj5 = { style: tmp.graphicContainer, children: tmp8Result };
      tmp8Result = null != giftingBadgeTierIconUrl;
      obj4 = { style: tmp.container, children: items2 };
      BottomSheet = markAsDismissed(6645).BottomSheet;
      if (tmp8Result) {
        const obj6 = { icon: giftingBadgeTierIconUrl, size: 120 };
        tmp8Result = closure_8(GiftingBadgeIconDefault, obj6);
      }
      items2 = [closure_8(closure_5, obj5), ,];
      const obj7 = { style: tmp.textContainer, children: items3 };
      const obj8 = {
        style: tmp.text,
        variant: "heading-xl/bold",
        color: "text-strong",
        children: format(prop, { tierName: str }),
      };
      const Text = tmp2(4886).Text;
      const intl = tmp2(1126).intl;
      format = intl.format;
      str = currentTier.name;
      prop = _modDef2589["a+jfuy"];
      if (str == null) {
        str = "";
      }
      items3 = [closure_8(Text, obj8)];
      const obj9 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: stringResult };
      const Text2 = tmp2(4886).Text;
      if ("noCount" === variant) {
        const intl3 = tmp2(1126).intl;
        stringResult = intl3.string(_modDef2589["0N8fCf"]);
      } else {
        const intl2 = tmp2(1126).intl;
        const formatToPlainString = intl2.formatToPlainString;
        const QxRA6w = _modDef2589.QxRA6w;
        if (giftCount == null) {
          giftCount = 0;
        }
        const obj10 = { giftCount };
        stringResult = formatToPlainString(QxRA6w, obj10);
      }
      items3[1] = closure_8(Text2, obj9);
      items2[1] = closure_9(closure_5, obj7);
      const obj11 = { style: tmp.footer, children: closure_8(Button, obj12) };
      obj12 = { grow: true, text: intl4.string(markAsDismissed(1126).t.RzWDqY), onPress: callback };
      Button = tmp2(5594).Button;
      intl4 = tmp2(1126).intl;
      items2[2] = closure_8(closure_5, obj11);
      return closure_8(BottomSheet, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (markAsDismissed) => {
      let items;
      let text;
      let textContainer;
      let obj = markAsDismissed(576);
      const cResult = obj.c(35);
      markAsDismissed = markAsDismissed.markAsDismissed;
      const tmp4 = closure_10();
      if (cResult[0] !== markAsDismissed) {
        const fn = function n() {
          let items;
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          markAsDismissed(ContentDismissActionType.TAKE_ACTION);
          const obj2 = { analyticsLocations: items };
          const openGiftModal = utils_openGiftModal.openGiftModal;
          items = [];
          utils_openGiftModal;
          items[0] = AnalyticsLocationDefault.GIFTING_BADGE_COACHMARK;
          openGiftModal(obj2);
        };
        cResult[0] = markAsDismissed;
        cResult[1] = fn;
      }
      if (cResult[2] !== markAsDismissed) {
        class I {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
        cResult[2] = markAsDismissed;
        cResult[3] = I;
      } else {
        class I {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
        tmp8[0] = _modDef17120;
        cResult[4] = tmp8;
      } else {
        class I {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
      }
      if (cResult[5] !== tmp4.newBadgeImage) {
        class I {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
        let obj2 = { source: tmp8, style: tmp4.newBadgeImage };
        cResult[5] = tmp4.newBadgeImage;
        cResult[6] = closure_8(closure_4, obj2);
        const tmp12 = closure_8(closure_4, obj2);
      } else {
        class I {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
      }
      if (cResult[7] === tmp4.graphicContainer) {
        let tmp14;
        let tmp19;
        class I {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
        const _Symbol = Symbol;
        ({ textContainer, text } = tmp4);
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
          const stringResult = obj4.string(_modDef2589.Q2RQka);
          cResult[10] = stringResult;
          tmp14 = stringResult;
        } else {
          class I {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
        }
        if (cResult[11] !== tmp4.text) {
          class I {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
          const obj3 = {
            style: text,
            variant: "heading-xl/bold",
            color: "mobile-text-heading-primary",
            children: tmp14,
          };
          cResult[11] = tmp4.text;
          cResult[12] = closure_8(markAsDismissed(4886).Text, obj3);
          const tmp18 = closure_8(markAsDismissed(4886).Text, obj3);
        } else {
          class I {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
        }
        const _Symbol2 = Symbol;
        const text2 = tmp4.text;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
          const stringResult1 = obj6.string(_modDef2589["3EQnkg"]);
          cResult[13] = stringResult1;
          tmp19 = stringResult1;
        } else {
          class I {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
        }
        if (cResult[14] !== tmp4.text) {
          class I {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
          const obj5 = { style: text2, variant: "text-sm/medium", color: "text-muted", children: tmp19 };
          cResult[14] = tmp4.text;
          cResult[15] = closure_8(markAsDismissed(4886).Text, obj5);
          const tmp23 = closure_8(markAsDismissed(4886).Text, obj5);
        } else {
          class I {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
        }
        if (cResult[16] === tmp4.textContainer) {
          class I {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
        }
        const obj7 = { style: textContainer, children: items };
        items = [tmp17, tmp22];
        cResult[16] = tmp4.textContainer;
        cResult[17] = tmp17;
        cResult[18] = tmp22;
        cResult[19] = closure_9(closure_5, obj7);
        const tmp27 = closure_9(closure_5, obj7);
      }
      const obj8 = { style: tmp4.graphicContainer, children: tmp10 };
      cResult[7] = tmp4.graphicContainer;
      cResult[8] = tmp10;
      cResult[9] = closure_8(closure_5, obj8);
      closure_8(closure_5, obj8);
    }
  : (markAsDismissed) => {
      let Button;
      let GiftIcon;
      let intl;
      let intl2;
      let intl3;
      let items2;
      let items3;
      let obj10;
      let obj11;
      let obj2;
      let obj4;
      let obj5;
      markAsDismissed = markAsDismissed.markAsDismissed;
      const tmp = closure_10();
      let items = [markAsDismissed];
      const items1 = [markAsDismissed];
      const callback = react.useCallback(() => {
        let items;
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        markAsDismissed(ContentDismissActionType.TAKE_ACTION);
        const obj2 = { analyticsLocations: items };
        const openGiftModal = utils_openGiftModal.openGiftModal;
        items = [];
        utils_openGiftModal;
        items[0] = AnalyticsLocationDefault.GIFTING_BADGE_COACHMARK;
        openGiftModal(obj2);
      }, items);
      const callback1 = react.useCallback(() => {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }, items1);
      let obj = { startExpanded: true, onDismiss: callback1, children: closure_9(closure_5, obj2) };
      obj2 = { style: tmp.container, children: items2 };
      const obj3 = { style: tmp.graphicContainer, children: closure_8(closure_4, obj4) };
      obj4 = { source: obj5, style: tmp.newBadgeImage };
      obj5 = { uri: _modDef17120 };
      BottomSheet = markAsDismissed(6645).BottomSheet;
      items2 = [closure_8(closure_5, obj3), ,];
      const obj6 = { style: tmp.textContainer, children: items3 };
      const obj7 = {
        style: tmp.text,
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        children: intl.string(_modDef2589.Q2RQka),
      };
      const Text = markAsDismissed(4886).Text;
      intl = markAsDismissed(1126).intl;
      items3 = [closure_8(Text, obj7)];
      const obj8 = {
        style: tmp.text,
        variant: "text-sm/medium",
        color: "text-muted",
        children: intl2.string(_modDef2589["3EQnkg"]),
      };
      const Text2 = markAsDismissed(4886).Text;
      intl2 = markAsDismissed(1126).intl;
      items3[1] = closure_8(Text2, obj8);
      items2[1] = closure_9(closure_5, obj6);
      const obj9 = { style: tmp.footer, children: closure_8(Button, obj10) };
      obj10 = {
        grow: true,
        text: intl3.string(_modDef2589.DZnomS),
        icon: closure_8(GiftIcon, obj11),
        onPress: callback,
      };
      Button = markAsDismissed(5594).Button;
      intl3 = markAsDismissed(1126).intl;
      obj11 = { size: "sm", color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
      GiftIcon = markAsDismissed(10766).GiftIcon;
      items2[2] = closure_8(closure_5, obj9);
      return closure_8(BottomSheet, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let currentTier;
      let giftCount;
      let markAsDismissed;
      let tmp4;
      let tmp5;
      let tmp8;
      let variant;
      let obj = react2;
      const cResult = obj.c(9);
      ({ markAsDismissed, variant } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [BadgeDirectoryStore];
        const fn = function o() {
          let current;
          const obj = {
            currentTier: BadgeDirectoryStore.getCurrentTier(require("BadgeId").BadgeId.GIFTING),
            giftCount: current,
          };
          const singleRequirementProgress = BadgeDirectoryStore.getSingleRequirementProgress(
            require("BadgeId").BadgeId.GIFTING,
          );
          current = undefined;
          if (singleRequirementProgress != null) {
            current = singleRequirementProgress.current;
          }
          return obj;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
      ({ currentTier, giftCount } = stateFromStoresObject);
      if (null != currentTier) {
        if (cResult[2] === currentTier) {
          if (cResult[3] === giftCount) {
            if (cResult[4] === markAsDismissed) {
              let tmp12;
              if (cResult[5] === variant) {
                tmp12 = cResult[6];
              }
              tmp8 = tmp12;
            }
          }
        }
        const obj2 = { markAsDismissed, currentTier, giftCount, variant };
        const tmp15 = metroImportAll(closure_11, obj2);
        cResult[2] = currentTier;
        cResult[3] = giftCount;
        cResult[4] = markAsDismissed;
        cResult[5] = variant;
        cResult[6] = tmp15;
        tmp12 = tmp15;
      } else if (cResult[7] !== markAsDismissed) {
        const obj3 = { markAsDismissed };
        const tmp11 = metroImportAll(closure_12, obj3);
        cResult[7] = markAsDismissed;
        cResult[8] = tmp11;
        tmp8 = tmp11;
      } else {
        tmp8 = cResult[8];
      }
      return tmp8;
    }
  : (markAsDismissed) => {
      let tmp5;
      markAsDismissed = markAsDismissed.markAsDismissed;
      const variant = markAsDismissed.variant;
      let obj = get_initialized;
      const items = [BadgeDirectoryStore];
      const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
        let current;
        const obj = {
          currentTier: BadgeDirectoryStore.getCurrentTier(require("BadgeId").BadgeId.GIFTING),
          giftCount: current,
        };
        const singleRequirementProgress = BadgeDirectoryStore.getSingleRequirementProgress(
          require("BadgeId").BadgeId.GIFTING,
        );
        current = undefined;
        if (singleRequirementProgress != null) {
          current = singleRequirementProgress.current;
        }
        return obj;
      });
      const currentTier = stateFromStoresObject.currentTier;
      if (null != currentTier) {
        const obj2 = { markAsDismissed, currentTier, giftCount: tmp2, variant };
        tmp5 = metroImportAll(closure_11, obj2);
      } else {
        const obj3 = { markAsDismissed };
        tmp5 = metroImportAll(closure_12, obj3);
      }
      return tmp5;
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgesCoachmarkActionSheet.tsx");

export default tmp5;
