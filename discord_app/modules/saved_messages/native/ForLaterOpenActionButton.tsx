// discord_app/modules/saved_messages/native/ForLaterOpenActionButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import ClockIcon from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import ButtonHooks from "../../../design/components/Button/native/ButtonHooks.native.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import openPremiumUpsellActionSheetDefault from "../../premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx";
import EntitlementFeatureNames from "../../../../discord_common/js/shared/shared-constants/EntitlementFeatureNames.tsx";
import showForLaterModal from "showForLaterModal.tsx";
import SavedMessagesTypes from "../SavedMessagesTypes.tsx";
import ClipViewDefault from "../../../design/components/Icon/native/ClipView.tsx";
import BookmarkIcon2 from "../../../design/components/Icon/native/redesign/generated/BookmarkIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SavedMessagesStore from "../SavedMessagesStore.tsx";

require = fn;
function BadgedIcon(arg0) {
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
    const items2 = [timestampProducer(ClipViewDefault, obj5)];
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
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const point = {
  shape: fn(9093).CutoutShape.Circle,
  x: fn(16738).ICON_SIZE.sm - 7,
  y: fn(16738).ICON_SIZE.sm - 8,
  size: 10,
};
const createStyles = fn(4756);
let obj = {
  container: { aspectRatio: 1, alignItems: "center", justifyContent: "center", position: "relative" },
  iconAnchor: null,
  dot: null,
};
let size = { width: fn(16738).ICON_SIZE.sm, height: fn(16738).ICON_SIZE.sm, position: "relative" };
obj.iconAnchor = size;
const size1 = {
  position: "absolute",
  height: 6.5,
  width: 6.5,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION,
  borderRadius: nativeDefault.radii.lg,
  right: -2,
  bottom: -0.5,
};
obj.dot = size1;
let closure_9 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterOpenActionButton.tsx");

export default noop.forwardRef((type, ref) => {
  type = type.type;
  const onOpen = type.onOpen;
  let stateFromStores1;
  let items = [SavedMessagesStore];
  const stateFromStores = type(stateFromStores1[14]).useStateFromStores(
    items,
    () => SavedMessagesStore.hasOverdueReminder(),
    [],
  );
  let obj = type(stateFromStores1[14]);
  const items1 = [SavedMessagesStore];
  stateFromStores1 = type(stateFromStores1[14]).useStateFromStores(items1, () =>
    SavedMessagesStore.getSavedMessageCount(),
  );
  const obj2 = type(stateFromStores1[14]);
  const hasForLaterAccess = type(stateFromStores1[15]).useHasForLaterAccess("ForLaterOpenActionButton");
  const items2 = [hasForLaterAccess, onOpen, stateFromStores1, type];
  const obj4 = { ref, children: null };
  const callback = hasForLaterAccess.useCallback(() => {
    onOpen();
    if (0 === stateFromStores1) {
      if (!hasForLaterAccess) {
        const items = [AnalyticsLocationDefault.FOR_LATER_ROADBLOCK];
        openPremiumUpsellActionSheetDefault(
          EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES,
          undefined,
          items,
        );
      }
    }
    showForLaterModal.showForLaterModal(type);
  }, items2);
  const obj5 = { type, showRedDot: null };
  const obj3 = type(stateFromStores1[15]);
  const obj6 = {
    variant: "tertiary",
    size: "sm",
    icon: closure_6(BadgedIcon, obj5),
    onPress: callback,
    accessibilityLabel: null,
    maxFontSizeMultiplier: 2,
  };
  obj5.showRedDot = type === type(stateFromStores1[11]).SavedMessageSortTypes.REMINDER && stateFromStores;
  const intl = tmp(tmp2[21]).intl;
  if (type === type(stateFromStores1[11]).SavedMessageSortTypes.REMINDER) {
    let aUXxzT = tmp(tmp2[21]).t.aUXxzT;
  } else {
    aUXxzT = tmp(tmp2[21]).t["2pAkDA"];
  }
  obj6.accessibilityLabel = intl.string(aUXxzT);
  obj4.children = closure_6(type(stateFromStores1[20]).IconButton, obj6);
  return closure_6(View, obj4);
});
