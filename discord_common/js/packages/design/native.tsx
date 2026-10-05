// discord_common/js/packages/design/native.tsx
import AccessibilityAnnouncer from "components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import AccessibilityAnnouncerLiveRegion from "components/AccessibilityAnnouncer/AccessibilityAnnouncerLiveRegion.native.tsx";
import useBadgeTextVariant from "hooks/useBadgeTextVariant.native.tsx";
import ThemeContext from "components/ThemeContextProvider/ThemeContext.tsx";
import react_native from "hooks/useA11yRolesNative.tsx";
import useFieldLabelA11yNative from "hooks/useFieldLabelA11yNative.tsx";
import react from "components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx";
import ThemeUtils from "utils/ThemeUtils.tsx";
import MotionTypes from "animation/MotionTypes.tsx";
import TransitionGroup_TransitionGroup from "components/TransitionGroup/TransitionGroup.tsx";
import ThemeContextProvider from "components/ThemeContextProvider/ThemeContextProvider.tsx";
import ThemeContextProvider_ThemeTypes from "components/ThemeContextProvider/ThemeTypes.tsx";
import ThemeContextFlags from "components/ThemeContextProvider/ThemeContextFlags.tsx";
import _mod4604 from "components/Rive/native/generated/index.tsx";
import ManaContext from "components/ManaContext/ManaContext.native.tsx";
import Colors from "components/Colors/shared/Colors.tsx";
import GraphicTypes from "components/Graphic/GraphicTypes.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";
import AccessibilityConstants from "components/AccessibilityPreferencesContext/AccessibilityConstants.tsx";

const result = size.fileFinishedImporting("../discord_common/js/packages/design/native.tsx");
for (const key10018 in AccessibilityAnnouncer) {
  exports[key10018] = AccessibilityAnnouncer[key10018];
  continue;
}
for (const key10022 in useBadgeTextVariant) {
  exports[key10022] = useBadgeTextVariant[key10022];
  continue;
}
for (const key10026 in react_native) {
  exports[key10026] = react_native[key10026];
  continue;
}
for (const key10030 in useFieldLabelA11yNative) {
  exports[key10030] = useFieldLabelA11yNative[key10030];
  continue;
}
for (const key10034 in react) {
  exports[key10034] = react[key10034];
  continue;
}
for (const key10039 in AccessibilityConstants) {
  exports[key10039] = AccessibilityConstants[key10039];
  continue;
}
for (const key10043 in AccessibilityAnnouncerLiveRegion) {
  exports[key10043] = AccessibilityAnnouncerLiveRegion[key10043];
  continue;
}
for (const key10047 in ThemeUtils) {
  exports[key10047] = ThemeUtils[key10047];
  continue;
}
for (const key10051 in MotionTypes) {
  exports[key10051] = MotionTypes[key10051];
  continue;
}
for (const key10055 in TransitionGroup_TransitionGroup) {
  exports[key10055] = TransitionGroup_TransitionGroup[key10055];
  continue;
}
for (const key10059 in ThemeContext) {
  exports[key10059] = ThemeContext[key10059];
  continue;
}
for (const key10063 in ThemeContextProvider) {
  exports[key10063] = ThemeContextProvider[key10063];
  continue;
}
for (const key10067 in ThemeContextProvider_ThemeTypes) {
  exports[key10067] = ThemeContextProvider_ThemeTypes[key10067];
  continue;
}
for (const key10071 in ThemeContextFlags) {
  exports[key10071] = ThemeContextFlags[key10071];
  continue;
}
for (const key10075 in _mod4604) {
  exports[key10075] = _mod4604[key10075];
  continue;
}
for (const key10079 in Colors) {
  exports[key10079] = Colors[key10079];
  continue;
}
const ManaContext_export = ManaContext.ManaContext;

export { ManaContext_export as ManaContext };
export const ManaContextProvider = ManaContext.ManaContextProvider;
export const useManaContext = ManaContext.useManaContext;
export const isImage = GraphicTypes.isImage;
