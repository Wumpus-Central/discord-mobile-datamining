// discord_app/modules/guild_onboarding/native/DropdownOptionsActionSheet.tsx
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import BottomSheetModal from "../../../../_runtime/06627_BottomSheetModal.js";
import BottomSheetTitleHeader from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import EmojiStore from "../../emojis/EmojiStore.tsx";
import GuildOnboardingPromptsStore from "../GuildOnboardingPromptsStore.tsx";

require = fn;
function DropdownOptionRow(option) {
  option = option.option;
  ({ responses, onSelect } = option);
  let selected;
  const tmp = closure_10();
  let obj = option(selected[7]);
  const items = [EmojiStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const emoji = option.emoji;
    let id;
    if (emoji != null) {
      id = emoji.id;
    }
    let usableCustomEmojiById = null;
    if (null != id) {
      const emoji2 = option.emoji;
      let id1;
      if (emoji2 != null) {
        id1 = emoji2.id;
      }
      usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(id1);
    }
    return usableCustomEmojiById;
  });
  selected = responses.includes(option.id);
  const items1 = [onSelect, option, selected];
  let emoji = option.emoji;
  let id;
  const onPress = noop.useCallback(() => {
    onSelect(option, !selected);
  }, items1);
  if (emoji != null) {
    id = emoji.id;
  }
  if (null != id) {
    obj = { style: { display: "flex", alignItems: "center" }, children: null };
    obj = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
    ({ optionTextEmoji: obj3.textEmojiStyle, optionImageEmoji: obj3.fastImageStyle } = tmp);
    let emojiURL;
    if (null != stateFromStores) {
      const obj1 = { id: null, animated: null, size: null };
      ({ id: obj5.id, animated: obj5.animated } = stateFromStores);
      obj1.size = EMOJI_URL_BASE_SIZE;
      emojiURL = onSelect(tmp3[9]).getEmojiURL(obj1);
      const tmp12Result = onSelect(tmp3[9]);
    }
    obj.src = emojiURL;
    const emoji3 = option.emoji;
    let str;
    if (emoji3 != null) {
      str = emoji3.name;
    }
    if (str == null) {
      str = "";
    }
    obj.name = str;
    obj.children = closure_8(onSelect(tmp3[8]), obj);
    let leading = closure_8(View, obj);
    const tmp13 = onSelect(tmp3[8]);
  } else {
    let emoji2 = option.emoji;
    let name;
    if (emoji2 != null) {
      name = emoji2.name;
    }
    leading = null;
  }
  let trailing = null;
  if (option.canBeNew) {
    trailing = null;
    if (option.isUnseen) {
      const obj2 = { color: tmp2(tmp3[10]).BadgeColors.BRAND, text: null, textStyle: null };
      const intl = tmp2(tmp3[11]).intl;
      obj2.text = intl.string(tmp2(tmp3[11]).t.y2b7CA);
      obj2.textStyle = tmp.newBadge;
      trailing = closure_8(tmp2(tmp3[10]).TextBadge, obj2);
    }
  }
  const obj3 = { style: tmp.labelRow, children: null };
  const items2 = [
    closure_8(option(selected[12]).Text, { variant: "text-md/normal", children: option.title }),
    trailing,
  ];
  obj3.children = items2;
  const label = closure_9(View, obj3);
  return closure_8(onSelect(selected[13]), { label, selected, leading, trailing, onPress });
}
const View = fn(17).View;
const EMOJI_URL_BASE_SIZE = fn(1374).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles({
  optionTextEmoji: { fontSize: 24, lineHeight: 24, paddingTop: 5 },
  optionImageEmoji: { height: 24, width: 24 },
  newBadge: { fontWeight: "bold" },
  labelRow: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  closeButtonWrapper: { marginTop: 16, marginHorizontal: 16 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/native/DropdownOptionsActionSheet.tsx");

export default function DropdownOptionsActionSheet(arg0) {
  ({ guildId: require, promptId: importDefault, canBeNew: dependencyMap, onSelect: noop } = arg0);
  let obj = useStateFromStores;
  const items = [GuildOnboardingPromptsStore];
  const stateFromStores = obj.useStateFromStores(items, () =>
    GuildOnboardingPromptsStore.getOnboardingPrompt(importDefault),
  );
  let obj1 = useStateFromStores;
  const items1 = [GuildOnboardingPromptsStore];
  const responses = obj1.useStateFromStoresArray(items1, () =>
    GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(require, importDefault),
  );
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { title: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.E2ICbC);
    obj = { scrollable: true, header: null, children: null };
    obj.header = closure_8(BottomSheetTitleHeader.BottomSheetTitleHeader, obj);
    obj1 = { contentContainerStyle: null, children: null };
    const obj2 = { paddingBottom: useSafeAreaInsetsDefault().bottom };
    obj1.contentContainerStyle = obj2;
    const obj3 = { accessibilityRole: "radiogroup", accessibilityLabel: null, children: null };
    const intl2 = util.intl;
    obj3.accessibilityLabel = intl2.string(util.t.E2ICbC);
    const options = stateFromStores.options;
    obj3.children = options.map((option) =>
      React6(DropdownOptionRow, { option, responses, onSelect, canBeNew: Boolean(dependencyMap) }, option.id),
    );
    const items2 = [closure_8(native.CardSection, obj3)];
    const obj4 = { style: tmp.closeButtonWrapper, children: null };
    const obj5 = { onPress: tmp5, text: null, grow: true };
    const intl3 = util.intl;
    obj5.text = intl3.string(util.t.cpT0Cq);
    obj4.children = closure_8(components_Button_Button.Button, obj5);
    items2[1] = closure_8(responses, obj4);
    obj1.children = items2;
    obj.children = closure_9(BottomSheetModal.BottomSheetScrollView, obj1);
    return closure_8(Sheet_BottomSheet.BottomSheet, obj);
  }
  tmp = closure_10();
}
