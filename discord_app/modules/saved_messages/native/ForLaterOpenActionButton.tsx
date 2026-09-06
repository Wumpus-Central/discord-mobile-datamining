// discord_app/modules/saved_messages/native/ForLaterOpenActionButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import ButtonHooks from "../../../design/components/Button/native/ButtonHooks.native.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import openPremiumUpsellActionSheetDefault from "../../premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx";
import EntitlementFeatureNames from "../../../../discord_common/js/shared/shared-constants/EntitlementFeatureNames.tsx";
import showForLaterModal from "showForLaterModal.tsx";
import SavedMessagesTypes from "../SavedMessagesTypes.tsx";
import ClipViewDefault from "../../../design/components/Icon/native/ClipView.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SavedMessagesStore from "../SavedMessagesStore.tsx";

require = fn;
function BadgedIcon(arg0) {
  ({ type, showRedDot } = arg0);
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, useThemeDefault());
  const tmp6 = closure_9();
  let obj1 = ButtonHooks;
  const iconSizeStyles = obj1.useIconSizeStyles("sm", true, 2);
  if (type === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    let BookmarkIcon = tmp4(4523).ClockIcon;
  } else {
    BookmarkIcon = tmp4(11707).BookmarkIcon;
  }
  obj = { style: null, children: null };
  const items = [tmp6.container, iconSizeStyles];
  obj.style = items;
  if (showRedDot) {
    obj = { style: tmp6.iconAnchor, children: null };
    obj1 = { cutouts: null, children: null };
    const items1 = [point];
    obj1.cutouts = items1;
    const obj2 = { size: "sm", color: token };
    obj1.children = tmp8(BookmarkIcon, obj2);
    const items2 = [tmp8(ClipViewDefault, obj1)];
    const obj3 = { style: tmp6.dot };
    items2[1] = tmp8(tmp9, obj3);
    obj.children = items2;
    let tmp8Result = React5(tmp9, obj);
    const tmpResult = ClipViewDefault;
  } else {
    const obj4 = { size: "sm", color: token };
    tmp8Result = tmp8(BookmarkIcon, obj4);
  }
  obj.children = tmp8Result;
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const point = {
  shape: fn(8813).CutoutShape.Circle,
  x: fn(16405).ICON_SIZE.sm - 7,
  y: fn(16405).ICON_SIZE.sm - 8,
  size: 10,
};
const createStyles = fn(4560);
let obj = {
  container: { aspectRatio: 1, alignItems: "center", justifyContent: "center", position: "relative" },
  iconAnchor: null,
  dot: null,
};
let size = { width: fn(16405).ICON_SIZE.sm, height: fn(16405).ICON_SIZE.sm, position: "relative" };
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
  let obj = type(stateFromStores1[14]);
  let items = [SavedMessagesStore];
  const stateFromStores = obj.useStateFromStores(items, () => SavedMessagesStore.hasOverdueReminder(), []);
  let obj1 = type(stateFromStores1[14]);
  const items1 = [SavedMessagesStore];
  stateFromStores1 = obj1.useStateFromStores(items1, () => SavedMessagesStore.getSavedMessageCount());
  const hasForLaterAccess = type(stateFromStores1[15]).useHasForLaterAccess("ForLaterOpenActionButton");
  const items2 = [hasForLaterAccess, onOpen, stateFromStores1, type];
  obj = { ref, children: null };
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
  obj = { type, showRedDot: null };
  const obj3 = type(stateFromStores1[15]);
  const tmp8 = View;
  const tmp9 = BadgedIcon;
  obj1 = {
    variant: "tertiary",
    size: "sm",
    icon: tmp7(tmp9, obj),
    onPress: callback,
    accessibilityLabel: null,
    maxFontSizeMultiplier: 2,
  };
  obj.showRedDot = type === type(stateFromStores1[11]).SavedMessageSortTypes.REMINDER && stateFromStores;
  const intl = tmp(tmp2[21]).intl;
  if (type === type(stateFromStores1[11]).SavedMessageSortTypes.REMINDER) {
    let aUXxzT = tmp(tmp2[21]).t.aUXxzT;
  } else {
    aUXxzT = tmp(tmp2[21]).t["2pAkDA"];
  }
  obj1.accessibilityLabel = intl.string(aUXxzT);
  obj.children = closure_6(type(stateFromStores1[20]).IconButton, obj1);
  return closure_6(tmp8, obj);
});
