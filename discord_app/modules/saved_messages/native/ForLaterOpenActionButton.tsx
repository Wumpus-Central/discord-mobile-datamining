// === Module 16386: ForLaterOpenActionButton ===

// Module 16386 (ForLaterOpenActionButton)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
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
import ClipView from "ClipView" /* 8502 */;
import BookmarkIcon2 from "BookmarkIcon" /* 11350 */;
import getIconSize from "getIconSize" /* 16387 */;
import react from "react" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11296 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ClipViewDefault = ClipView;

let metroImportDefault;
let metroRequire;
let size;
let size1;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const point = { shape: ClipView.CutoutShape.Circle, x: getIconSize.ICON_SIZE.sm - 7, y: getIconSize.ICON_SIZE.sm - 8, size: 10 };
let createStyles = createStyles_mod;
let obj = { container: { aspectRatio: 1, alignItems: "center", justifyContent: "center", position: "relative" }, iconAnchor: size, dot: size1 };
size = { width: getIconSize.ICON_SIZE.sm, height: getIconSize.ICON_SIZE.sm, position: "relative" };
createStyles = createStyles.createStyles;
size1 = { position: "absolute", height: 6.5, width: 6.5, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: nativeDefault.radii.lg, right: -2, bottom: -0.5 };
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let BookmarkIcon;
  let items;
  let items1;
  let obj7;
  let showRedDot;
  let type;
  const obj = react2;
  const cResult = obj.c(12);
  ({ showRedDot, type } = arg0);
  const tmp5 = useThemeDefault();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, tmp5);
  const tmp7 = closure_9();
  const obj3 = ButtonHooks;
  const iconSizeStyles = obj3.useIconSizeStyles("sm", true, 2);
  if (type === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    BookmarkIcon = ClockIcon.ClockIcon;
  } else {
    BookmarkIcon = BookmarkIcon2.BookmarkIcon;
  }
  if (cResult[0] === iconSizeStyles) {
    let tmp9;
    let tmp12;
    if (cResult[1] === tmp7.container) {
      tmp9 = cResult[2];
    }
    if (cResult[3] === BookmarkIcon) {
      if (cResult[4] === showRedDot) {
        if (cResult[5] === tmp7.dot) {
          if (cResult[6] === tmp7.iconAnchor) {
            let tmp10;
            if (cResult[7] === token) {
              tmp10 = cResult[8];
            }
            if (cResult[9] === tmp9) {
              let tmp18;
              if (cResult[10] === tmp10) {
                tmp18 = cResult[11];
              }
              return tmp18;
            }
            const obj4 = { style: tmp9, children: tmp10 };
            const tmp21 = metroRequire(View, obj4);
            cResult[9] = tmp9;
            cResult[10] = tmp10;
            cResult[11] = tmp21;
            tmp18 = tmp21;
          }
        }
      }
    }
    if (showRedDot) {
      const obj5 = { style: tmp7.iconAnchor, children: items1 };
      const obj6 = { cutouts: items, children: metroRequire(BookmarkIcon, obj7) };
      items = [point];
      obj7 = { size: "sm", color: token };
      const tmp4Result = ClipViewDefault;
      items1 = [metroRequire(tmp4Result, obj6), ];
      const obj8 = { style: tmp7.dot };
      items1[1] = metroRequire(View, obj8);
      tmp12 = metroImportDefault(View, obj5);
    } else {
      const obj9 = { size: "sm", color: token };
      tmp12 = metroRequire(BookmarkIcon, obj9);
    }
    cResult[3] = BookmarkIcon;
    cResult[4] = showRedDot;
    cResult[5] = tmp7.dot;
    cResult[6] = tmp7.iconAnchor;
    cResult[7] = token;
    cResult[8] = tmp12;
    tmp10 = tmp12;
  }
  const items2 = [tmp7.container, iconSizeStyles];
  cResult[0] = iconSizeStyles;
  cResult[1] = tmp7.container;
  cResult[2] = items2;
  tmp9 = items2;
}) : ((arg0) => {
  let BookmarkIcon;
  let items;
  let items1;
  let items2;
  let obj6;
  let showRedDot;
  let tmp8Result;
  let type;
  ({ type, showRedDot } = arg0);
  const tmp3 = useThemeDefault();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, tmp3);
  const tmp6 = closure_9();
  const obj2 = ButtonHooks;
  const iconSizeStyles = obj2.useIconSizeStyles("sm", true, 2);
  if (type === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    BookmarkIcon = ClockIcon.ClockIcon;
  } else {
    BookmarkIcon = BookmarkIcon2.BookmarkIcon;
  }
  const obj3 = { style: items, children: tmp8Result };
  items = [tmp6.container, iconSizeStyles];
  if (showRedDot) {
    const obj4 = { style: tmp6.iconAnchor, children: items2 };
    const obj5 = { cutouts: items1, children: metroRequire(BookmarkIcon, obj6) };
    items1 = [point];
    obj6 = { size: "sm", color: token };
    const tmpResult = ClipViewDefault;
    items2 = [metroRequire(tmpResult, obj5), ];
    const obj7 = { style: tmp6.dot };
    items2[1] = metroRequire(View, obj7);
    tmp8Result = metroImportDefault(View, obj4);
  } else {
    const obj8 = { size: "sm", color: token };
    tmp8Result = metroRequire(BookmarkIcon, obj8);
  }
  return metroRequire(View, obj3);
});
const forwardRef = react.forwardRef;
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((type, ref) => {
  let stateFromStores1;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = type(stateFromStores1[9]);
  const cResult = obj.c(22);
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
    tmp5 = fn;
    tmp4 = items;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  const tmpResult = type(stateFromStores1[16]);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [SavedMessagesStore];
    const fn2 = function y() {
      return SavedMessagesStore.getSavedMessageCount();
    };
    cResult[3] = items2;
    cResult[4] = fn2;
    tmp10 = fn2;
    tmp9 = items2;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const tmpResult3 = type(stateFromStores1[16]);
  stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp10);
  const tmpResult4 = type(stateFromStores1[17]);
  const hasForLaterAccess = tmpResult4.useHasForLaterAccess("ForLaterOpenActionButton");
  if (cResult[5] === hasForLaterAccess) {
    if (cResult[6] === onOpen) {
      if (cResult[7] === stateFromStores1) {
        let tmp14;
        if (cResult[8] === type) {
          tmp14 = cResult[9];
        }
        const tmp15 = type === type(stateFromStores1[13]).SavedMessageSortTypes.REMINDER && stateFromStores;
        if (cResult[10] === tmp15) {
          let tmp16;
          let tmp20;
          if (cResult[11] === type) {
            tmp16 = cResult[12];
          }
          if (cResult[13] !== type) {
            let aUXxzT;
            const intl = tmp(tmp2[22]).intl;
            const string = intl.string;
            if (type === type(stateFromStores1[13]).SavedMessageSortTypes.REMINDER) {
              aUXxzT = tmp(tmp2[22]).t.aUXxzT;
            } else {
              aUXxzT = tmp(tmp2[22]).t["2pAkDA"];
            }
            const stringResult = string(aUXxzT);
            cResult[13] = type;
            cResult[14] = stringResult;
            tmp20 = stringResult;
          } else {
            tmp20 = cResult[14];
          }
          if (cResult[15] === tmp14) {
            if (cResult[16] === tmp16) {
              let tmp23;
              if (cResult[17] === tmp20) {
                tmp23 = cResult[18];
              }
              if (cResult[19] === ref) {
                let tmp27;
                if (cResult[20] === tmp23) {
                  tmp27 = cResult[21];
                }
                return tmp27;
              }
              const obj2 = { ref, children: tmp23 };
              const tmp30 = closure_6(View, obj2);
              cResult[19] = ref;
              cResult[20] = tmp23;
              cResult[21] = tmp30;
              tmp27 = tmp30;
            }
          }
          const obj3 = { variant: "tertiary", size: "sm", icon: tmp16, onPress: tmp14, accessibilityLabel: tmp20, maxFontSizeMultiplier: 2 };
          const tmp25 = closure_6(type(stateFromStores1[23]).IconButton, obj3);
          cResult[15] = tmp14;
          cResult[16] = tmp16;
          cResult[17] = tmp20;
          cResult[18] = tmp25;
          tmp23 = tmp25;
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
        const tmp5 = openPremiumUpsellActionSheetDefault;
        const SAVED_MESSAGES = EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES;
        const items = [AnalyticsLocationDefault.FOR_LATER_ROADBLOCK];
        tmp5(SAVED_MESSAGES, undefined, items);
      }
    }
    const obj = showForLaterModal;
    obj.showForLaterModal(type);
  };
  cResult[5] = hasForLaterAccess;
  cResult[6] = onOpen;
  cResult[7] = stateFromStores1;
  cResult[8] = type;
  cResult[9] = fn3;
  tmp14 = fn3;
}) : ((type, ref) => {
  let IconButton;
  let aUXxzT;
  let obj6;
  let string;
  let tmp10;
  type = type.type;
  const onOpen = type.onOpen;
  let stateFromStores1;
  let obj = type(stateFromStores1[16]);
  let items = [SavedMessagesStore];
  const stateFromStores = obj.useStateFromStores(items, () => SavedMessagesStore.hasOverdueReminder(), []);
  const items1 = [SavedMessagesStore];
  const obj2 = type(stateFromStores1[16]);
  stateFromStores1 = obj2.useStateFromStores(items1, () => SavedMessagesStore.getSavedMessageCount());
  const obj3 = type(stateFromStores1[17]);
  const hasForLaterAccess = obj3.useHasForLaterAccess("ForLaterOpenActionButton");
  const items2 = [hasForLaterAccess, onOpen, stateFromStores1, type];
  const obj4 = { ref, children: closure_6(IconButton, obj6) };
  const callback = hasForLaterAccess.useCallback(() => {
    onOpen();
    if (0 === stateFromStores1) {
      if (!hasForLaterAccess) {
        const tmp5 = openPremiumUpsellActionSheetDefault;
        const SAVED_MESSAGES = EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES;
        const items = [AnalyticsLocationDefault.FOR_LATER_ROADBLOCK];
        tmp5(SAVED_MESSAGES, undefined, items);
      }
    }
    const obj = showForLaterModal;
    obj.showForLaterModal(type);
  }, items2);
  const obj5 = { type, showRedDot: tmp10 };
  IconButton = type(stateFromStores1[23]).IconButton;
  tmp10 = type === type(stateFromStores1[13]).SavedMessageSortTypes.REMINDER && stateFromStores;
  obj6 = { variant: "tertiary", size: "sm", icon: closure_6(closure_10, obj5), onPress: callback, accessibilityLabel: string(aUXxzT), maxFontSizeMultiplier: 2 };
  const intl = tmp(tmp2[22]).intl;
  string = intl.string;
  if (type === type(stateFromStores1[13]).SavedMessageSortTypes.REMINDER) {
    aUXxzT = tmp(tmp2[22]).t.aUXxzT;
  } else {
    aUXxzT = tmp(tmp2[22]).t["2pAkDA"];
  }
  return closure_6(View, obj4);
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterOpenActionButton.tsx");

export default forwardRefResult;