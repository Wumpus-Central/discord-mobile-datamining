// discord_app/modules/user_settings/appearance/native/components/SettingsAppearanceActivityCardsItem.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import SettingsAppearanceActivityCardItemDefault from "SettingsAppearanceActivityCardItem.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/appearance/native/components/SettingsAppearanceActivityCardsItem.tsx",
);

export default function ActivityCardsItem(animatedStyles) {
  animatedStyles = animatedStyles.animatedStyles;
  const obj = {
    contentContainerStyle: { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 },
    data: animatedStyles.cards,
    renderItem(item) {
      const merged = Object.assign(item.item);
      return jsx(SettingsAppearanceActivityCardItemDefault, { animatedStyles });
    },
    keyExtractor(title) {
      return title.title;
    },
    showsHorizontalScrollIndicator: false,
    horizontal: true,
  };
  return jsx(animatedStyles(9073).FlashList, {
    contentContainerStyle: { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 },
    data: animatedStyles.cards,
    renderItem(item) {
      const merged = Object.assign(item.item);
      return jsx(SettingsAppearanceActivityCardItemDefault, { animatedStyles });
    },
    keyExtractor(title) {
      return title.title;
    },
    showsHorizontalScrollIndicator: false,
    horizontal: true,
  });
}
