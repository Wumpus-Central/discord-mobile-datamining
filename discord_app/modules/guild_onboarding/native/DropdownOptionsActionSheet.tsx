// discord_app/modules/guild_onboarding/native/DropdownOptionsActionSheet.tsx
import defaultAreStatesEqual from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import Button2 from "../../../design/components/Button/native/Button.native.tsx";
import RedesignBottomSheetTitleHeaderBase from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Background from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import BottomSheetModal from "../../../../_runtime/06952_BottomSheetModal.js";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import getEmojiToGroupId from "../../emojis/EmojiStore.tsx";
import handleUpdate from "../GuildOnboardingPromptsStore.tsx";
import { EMOJI_URL_BASE_SIZE } from "../../emojis/EmojiConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = fn;
function DropdownOptionRow(option) {
  option = option.option;
  ({ responses, onSelect } = option);
  let selected;
  const tmp = callback3();
  let obj = option(selected[7]);
  const items = [closure_5];
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
      usableCustomEmojiById = closure_1_5.getUsableCustomEmojiById(id1);
    }
    return usableCustomEmojiById;
  });
  selected = responses.includes(option.id);
  const items1 = [onSelect, option, selected];
  let emoji = option.emoji;
  let id;
  const onPress = React.useCallback(() => {
    onSelect(option, !selected);
  }, items1);
  if (emoji != null) {
    id = emoji.id;
  }
  if (null != id) {
    obj = { style: null, children: null };
    obj[0] = { display: "flex", alignItems: "center" };
    obj = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
    ({ optionTextEmoji: obj3[0], optionImageEmoji: obj3[1] } = tmp);
    let emojiURL;
    if (null != stateFromStores) {
      obj1 = { id: null, animated: null, size: null };
      ({ id: obj5[0], animated: obj5[1] } = stateFromStores);
      obj1[2] = EMOJI_URL_BASE_SIZE;
      emojiURL = onSelect(tmp3[9]).getEmojiURL(obj1);
      const tmp12Result = onSelect(tmp3[9]);
    }
    obj[2] = emojiURL;
    const emoji3 = option.emoji;
    let str;
    if (emoji3 != null) {
      str = emoji3.name;
    }
    if (str == null) {
      str = "";
    }
    obj[3] = str;
    obj[1] = callback(onSelect(tmp3[8]), obj);
    let leading = callback(View, obj);
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
      const obj2 = { color: null, text: null, textStyle: null };
      obj2[0] = tmp2(tmp3[10]).BadgeColors.BRAND;
      const intl = tmp2(tmp3[11]).intl;
      obj2[1] = intl.string(tmp2(tmp3[11]).t.y2b7CA);
      obj2[2] = tmp.newBadge;
      trailing = callback(tmp2(tmp3[10]).TextBadge, obj2);
    }
  }
  const obj3 = { style: tmp.labelRow, children: null };
  const items2 = [callback(option(selected[12]).Text, { variant: "text-md/normal", children: option.title }), trailing];
  obj3[1] = items2;
  const label = callback2(View, obj3);
  return callback(onSelect(selected[13]), { label, selected, leading, trailing, onPress });
}
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ optionTextEmoji: { fontSize: 24, lineHeight: 24, paddingTop: 5 }, optionImageEmoji: { height: 24, width: 24 }, newBadge: { fontWeight: "bold" }, labelRow: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, closeButtonWrapper: { marginTop: 16, marginHorizontal: 16 } });
const result = require("obj132").fileFinishedImporting("modules/guild_onboarding/native/DropdownOptionsActionSheet.tsx");

export default function DropdownOptionsActionSheet(arg0) {
  ({ guildId: require, promptId: importDefault, canBeNew: dependencyMap, onSelect: closure_3 } = arg0);
  let obj = defaultAreStatesEqual;
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getOnboardingPrompt(closure_1));
  obj1 = defaultAreStatesEqual;
  const items1 = [closure_6];
  closure_4 = obj1.useStateFromStoresArray(items1, () => closure_1_6.getOnboardingResponsesForPrompt(closure_0, closure_1));
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { title: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t.E2ICbC);
    obj = { scrollable: true, header: null, children: null };
    obj[1] = callback(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj);
    obj1 = { contentContainerStyle: null, children: null };
    const obj2 = { paddingBottom: null };
    obj2[0] = useSafeAreaInsetsDefault().bottom;
    obj1[0] = obj2;
    const obj3 = { accessibilityRole: "radiogroup", accessibilityLabel: null, children: null };
    const intl2 = getSystemLocale.intl;
    obj3[1] = intl2.string(getSystemLocale.t.E2ICbC);
    const options = stateFromStores.options;
    obj3[2] = options.map((item, index) => closure_1_8(DropdownOptionRow, { option: item, responses: closure_4, onSelect: closure_3, canBeNew: Boolean(closure_2) }, item.id));
    const items2 = [callback(Button.CardSection, obj3), ];
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.closeButtonWrapper;
    const obj5 = { onPress: null, text: null, grow: true };
    obj5[0] = tmp5;
    const intl3 = getSystemLocale.intl;
    obj5[1] = intl3.string(getSystemLocale.t.cpT0Cq);
    obj4[1] = callback(Button2.Button, obj5);
    items2[1] = callback(closure_4, obj4);
    obj1[1] = items2;
    obj[2] = callback2(BottomSheetModal.BottomSheetScrollView, obj1);
    return callback(Background.BottomSheet, obj);
  }
  tmp = callback3();
};