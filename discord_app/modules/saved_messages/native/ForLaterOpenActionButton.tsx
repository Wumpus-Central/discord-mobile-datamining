// === Module 16386: ForLaterOpenActionButton ===

// Module 16386 (ForLaterOpenActionButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4586 */;
import useThemeDefault from "useTheme" /* 4797 */;
import ClockIcon from "ClockIcon" /* 4855 */;
import ButtonHooks from "ButtonHooks" /* 5608 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6688 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7491 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7494 */;
import showForLaterModal from "showForLaterModal" /* 7505 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7506 */;
import BookmarkIcon2 from "BookmarkIcon" /* 11350 */;
import noop from "module_19" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11296 */;

const ClipViewDefault = tmp3(8502);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const point = { shape: fn(8502).CutoutShape.Circle, x: fn(16387).ICON_SIZE.sm - 7, y: fn(16387).ICON_SIZE.sm - 8, size: 10 };
const createStyles = fn(4896);
let obj = { container: { aspectRatio: 1, alignItems: "center", justifyContent: "center", position: "relative" }, iconAnchor: null, dot: null };
let size = { width: fn(16387).ICON_SIZE.sm, height: fn(16387).ICON_SIZE.sm, position: "relative" };
obj.iconAnchor = size;
const size1 = { position: "absolute", height: 6.5, width: 6.5, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: nativeDefault.radii.lg, right: -2, bottom: -0.5 };
obj.dot = size1;
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((showRedDot) => {
  let items1 = dependencyMap;
  const cResult = c.c(12);
  let dot = showRedDot.showRedDot;
  let tmp3 = importDefault;
  const tmp4 = useThemeDefault();
  const token = useToken.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, tmp4);
  let iconAnchor = closure_9();
  const iconSizeStyles = ButtonHooks.useIconSizeStyles("sm", true, 2);
  if (showRedDot.type === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    let BookmarkIcon = ClockIcon.ClockIcon;
  } else {
    BookmarkIcon = BookmarkIcon2.BookmarkIcon;
  }
  if (cResult[0] === iconSizeStyles) {
    if (cResult[1] === iconAnchor.container) {
      let tmp7 = cResult[2];
    }
    if (cResult[3] === BookmarkIcon) {
      if (cResult[4] === dot) {
        if (cResult[5] === iconAnchor.dot) {
          if (cResult[6] === iconAnchor.iconAnchor) {
            if (cResult[7] === token) {
              if (cResult[9] === tmp7) {
                if (cResult[10] === tmp8) {
                  let tmp17 = cResult[11];
                }
                return tmp17;
              }
              const obj4 = { style: tmp7, children: cResult[8] };
              const tmp20 = timestampProducer(View, obj4);
              cResult[9] = tmp7;
              cResult[10] = cResult[8];
              cResult[11] = tmp20;
              tmp17 = tmp20;
            }
          }
        }
      }
    }
    if (dot) {
      const obj5 = { style: iconAnchor.iconAnchor, children: null };
      const obj6 = { cutouts: null, children: null };
      const items = [point];
      obj6.cutouts = items;
      const obj7 = { size: "sm", color: token };
      obj6.children = timestampProducer(BookmarkIcon, obj7);
      items1 = [timestampProducer(ClipViewDefault, obj6), ];
      const obj8 = { style: iconAnchor.dot };
      tmp3 = timestampProducer(View, obj8);
      items1[1] = tmp3;
      obj5.children = items1;
      let tmp10 = React5(View, obj5);
      const tmp3Result = ClipViewDefault;
    } else {
      const obj9 = { size: "sm", color: token };
      tmp10 = timestampProducer(BookmarkIcon, obj9);
    }
    cResult[3] = BookmarkIcon;
    cResult[4] = dot;
    dot = iconAnchor.dot;
    cResult[5] = dot;
    iconAnchor = iconAnchor.iconAnchor;
    cResult[6] = iconAnchor;
    cResult[7] = token;
    cResult[8] = tmp10;
  }
  const items2 = [iconAnchor.container, iconSizeStyles];
  cResult[0] = iconSizeStyles;
  cResult[1] = iconAnchor.container;
  cResult[2] = items2;
  tmp7 = items2;
}) : ((arg0) => {
  ({ type, showRedDot } = arg0);
  const tmp3 = useThemeDefault();
  const token = useToken.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, tmp3);
  const tmp6 = closure_9();
  const iconSizeStyles = ButtonHooks.useIconSizeStyles("sm", true, 2);
  if (type === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    let BookmarkIcon = ClockIcon.ClockIcon;
  } else {
    BookmarkIcon = BookmarkIcon2.BookmarkIcon;
  }
  const obj3 = { style: null, children: null };
  const items = [tmp6.container, iconSizeStyles];
  obj3.style = items;
  if (showRedDot) {
    const obj4 = { style: tmp6.iconAnchor, children: null };
    const obj5 = { cutouts: null, children: null };
    const items1 = [point];
    obj5.cutouts = items1;
    const obj6 = { size: "sm", color: token };
    obj5.children = timestampProducer(BookmarkIcon, obj6);
    const items2 = [timestampProducer(ClipViewDefault, obj5), ];
    const obj7 = { style: tmp6.dot };
    items2[1] = timestampProducer(View, obj7);
    obj4.children = items2;
    let tmp8Result = React5(View, obj4);
    const tmpResult = ClipViewDefault;
  } else {
    const obj8 = { size: "sm", color: token };
    tmp8Result = timestampProducer(BookmarkIcon, obj8);
  }
  obj3.children = tmp8Result;
  return timestampProducer(View, obj3);
});
ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterOpenActionButton.tsx");

export default noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((type, ref) => {
  const cResult = type(stateFromStores1[9]).c(22);
  type = type.type;
  const onOpen = type.onOpen;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SavedMessagesStore];
    const fn = function u() {
      return SavedMessagesStore.hasOverdueReminder();
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  let obj = type(stateFromStores1[9]);
  const stateFromStores = type(stateFromStores1[16]).useStateFromStores(tmp4, tmp5, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [SavedMessagesStore];
    const fn2 = function y() {
      return SavedMessagesStore.getSavedMessageCount();
    };
    cResult[3] = items2;
    cResult[4] = fn2;
    let tmp10 = fn2;
    let tmp9 = items2;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const tmpResult = type(stateFromStores1[16]);
  stateFromStores1 = type(stateFromStores1[16]).useStateFromStores(tmp9, tmp10);
  const tmpResult3 = type(stateFromStores1[16]);
  const hasForLaterAccess = type(stateFromStores1[17]).useHasForLaterAccess("ForLaterOpenActionButton");
  if (cResult[5] === hasForLaterAccess) {
    if (cResult[6] === onOpen) {
      if (cResult[7] === stateFromStores1) {
        if (cResult[8] === type) {
          let tmp14 = cResult[9];
        }
        const tmp15 = type === tmp(tmp2[13]).SavedMessageSortTypes.REMINDER && stateFromStores;
        if (cResult[10] === tmp15) {
          if (cResult[11] === type) {
            let tmp16 = cResult[12];
          }
          if (cResult[13] !== type) {
            const intl = tmp(tmp2[22]).intl;
            if (type === tmp(tmp2[13]).SavedMessageSortTypes.REMINDER) {
              let aUXxzT = tmp(tmp2[22]).t.aUXxzT;
            } else {
              aUXxzT = tmp(tmp2[22]).t["2pAkDA"];
            }
            const stringResult = intl.string(aUXxzT);
            cResult[13] = type;
            cResult[14] = stringResult;
          } else {
            if (cResult[15] === tmp14) {
              if (cResult[16] === tmp16) {
                if (cResult[17] === tmp20) {
                  let tmp24 = cResult[18];
                }
                if (cResult[19] === ref) {
                  if (cResult[20] === tmp24) {
                    let tmp28 = cResult[21];
                  }
                  return tmp28;
                }
                const obj2 = { ref, children: tmp24 };
                const tmp31 = closure_6(View, obj2);
                cResult[19] = ref;
                cResult[20] = tmp24;
                cResult[21] = tmp31;
                tmp28 = tmp31;
              }
            }
            const obj3 = { variant: "tertiary", size: "sm", icon: tmp16, onPress: tmp14, accessibilityLabel: cResult[14], maxFontSizeMultiplier: 2 };
            const tmp26 = closure_6(tmp(tmp2[23]).IconButton, obj3);
            cResult[15] = tmp14;
            cResult[16] = tmp16;
            cResult[17] = cResult[14];
            cResult[18] = tmp26;
            tmp24 = tmp26;
          }
        }
        const obj4 = { type, showRedDot: tmp15 };
        const tmp19 = closure_6(closure_10, obj4);
        cResult[10] = tmp15;
        cResult[11] = type;
        cResult[12] = tmp19;
        tmp16 = tmp19;
      }
    }
  }
  const fn3 = function v() {
    onOpen();
    if (0 === stateFromStores1) {
      if (!hasForLaterAccess) {
        const items = [AnalyticsLocationDefault.FOR_LATER_ROADBLOCK];
        openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES, undefined, items);
      }
    }
    showForLaterModal.showForLaterModal(type);
  };
  cResult[5] = hasForLaterAccess;
  cResult[6] = onOpen;
  cResult[7] = stateFromStores1;
  cResult[8] = type;
  cResult[9] = fn3;
  tmp14 = fn3;
  const tmpResult4 = type(stateFromStores1[17]);
}) : ((type, ref) => {
  type = type.type;
  const onOpen = type.onOpen;
  let stateFromStores1;
  let items = [SavedMessagesStore];
  const stateFromStores = type(stateFromStores1[16]).useStateFromStores(items, () => SavedMessagesStore.hasOverdueReminder(), []);
  let obj = type(stateFromStores1[16]);
  const items1 = [SavedMessagesStore];
  stateFromStores1 = type(stateFromStores1[16]).useStateFromStores(items1, () => SavedMessagesStore.getSavedMessageCount());
  const obj2 = type(stateFromStores1[16]);
  const hasForLaterAccess = type(stateFromStores1[17]).useHasForLaterAccess("ForLaterOpenActionButton");
  const items2 = [hasForLaterAccess, onOpen, stateFromStores1, type];
  const obj4 = { ref, children: null };
  const callback = hasForLaterAccess.useCallback(() => {
    onOpen();
    if (0 === stateFromStores1) {
      if (!hasForLaterAccess) {
        const items = [AnalyticsLocationDefault.FOR_LATER_ROADBLOCK];
        openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES, undefined, items);
      }
    }
    showForLaterModal.showForLaterModal(type);
  }, items2);
  const obj5 = { type, showRedDot: null };
  const obj3 = type(stateFromStores1[17]);
  const obj6 = { variant: "tertiary", size: "sm", icon: closure_6(closure_10, obj5), onPress: callback, accessibilityLabel: null, maxFontSizeMultiplier: 2 };
  obj5.showRedDot = type === type(stateFromStores1[13]).SavedMessageSortTypes.REMINDER && stateFromStores;
  const intl = tmp(tmp2[22]).intl;
  if (type === type(stateFromStores1[13]).SavedMessageSortTypes.REMINDER) {
    let aUXxzT = tmp(tmp2[22]).t.aUXxzT;
  } else {
    aUXxzT = tmp(tmp2[22]).t["2pAkDA"];
  }
  obj6.accessibilityLabel = intl.string(aUXxzT);
  obj4.children = closure_6(type(stateFromStores1[23]).IconButton, obj6);
  return closure_6(View, obj4);
}));