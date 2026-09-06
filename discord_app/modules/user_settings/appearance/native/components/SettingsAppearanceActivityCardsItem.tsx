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
  let obj = {
    contentContainerStyle: null,
    data: null,
    renderItem: null,
    keyExtractor: null,
    showsHorizontalScrollIndicator: false,
    horizontal: true,
  };
  obj = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
  obj.contentContainerStyle = obj;
  obj.data = animatedStyles.cards;
  obj.renderItem = function renderItem(item) {
    const merged = Object.assign(item.item);
    return jsx(SettingsAppearanceActivityCardItemDefault, { animatedStyles });
  };
  obj.keyExtractor = function keyExtractor(title) {
    return title.title;
  };
  return jsx(animatedStyles(8874).FlashList, {
    paddingVertical: nativeDefault.space.PX_16,
    paddingHorizontal: nativeDefault.space.PX_16,
  });
}
