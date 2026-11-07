// discord_app/modules/checkpoint/native/components/screens/stats/CheckpointGameCard.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../../../../utils/AvatarUtils.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import CheckpointTextDefault from "../../CheckpointText.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import GameStore from "../../../../../games/GameStore.tsx";

require = fn;
const View = fn(17).View;
const CheckpointConstants = fn(6199);
({ CHECKPOINT_DARK_CYAN, CHECKPOINT_PRIMARY, CHECKPOINT_WHITE } = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5140);
let obj2 = {
  cover: null,
  coverImage: { width: "100%", height: "100%", borderWidth: 1, borderColor: CHECKPOINT_PRIMARY },
  unknownCover: { backgroundColor: nativeDefault.colors.BLACK, alignItems: "center", justifyContent: "center" },
  description: null,
  centeredText: null,
  name: null,
  label: null,
};
let obj3 = { aspectRatio: 0.75, boxShadow: null };
let items = [{ offsetX: 4, offsetY: 4, blurRadius: 0, color: CHECKPOINT_DARK_CYAN }];
obj3.boxShadow = items;
obj2.cover = obj3;
let obj4 = { backgroundColor: nativeDefault.colors.BLACK, alignItems: "center", justifyContent: "center" };
obj2.description = { alignSelf: "stretch", gap: nativeDefault.space.PX_4 };
obj2.centeredText = { textAlign: "center" };
obj2.name = { color: CHECKPOINT_WHITE };
obj2.label = { fontSize: 14, lineHeight: 18 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointGameCard.tsx");

export function CheckpointGameCard(game) {
  game = game.game;
  const id = game.id;
  let iconHash = game.coverImageHash;
  ({ style, children } = game);
  const tmp = closure_7();
  items = [GameStore];
  let stateFromStores = id(504).useStateFromStores(items, () => GameStore.getCoverImageUrl(id, { size: 480 }));
  if (stateFromStores == null) {
    const obj3 = { id, icon: null, keepAspectRatio: true, fallbackAvatar: false };
    if (iconHash == null) {
      iconHash = game.iconHash;
    }
    obj3.icon = iconHash;
    stateFromStores = AvatarUtilsDefault.getApplicationIconURL(obj3);
  }
  const obj4 = { style: null, children: null };
  const items1 = [tmp.cover, style];
  obj4.style = items1;
  if (null != stateFromStores) {
    const obj5 = { source: null, style: null, resizeMode: "cover" };
    const tmp12 = FastImageDefault;
    obj5.source = AvatarUtilsDefault.makeSource(stateFromStores);
    obj5.style = tmp.coverImage;
    let tmp9 = closure_5(tmp12, obj5);
  } else {
    const obj6 = { style: null, children: null };
    const items2 = [,];
    ({ coverImage: arr3[0], unknownCover: arr3[1] } = tmp);
    obj6.style = items2;
    obj6.children = closure_5(id(8213).UnknownGameIcon, { size: "lg" });
    tmp9 = closure_5(View, obj6);
  }
  const items3 = [tmp9, children];
  obj4.children = items3;
  return closure_6(View, obj4);
}
export function CheckpointGameCardDescription(arg0) {
  ({ name, label, textAlignment } = arg0);
  const tmp = closure_7();
  let centeredText;
  if ("center" === textAlignment) {
    centeredText = tmp.centeredText;
  }
  const obj = { style: tmp.description, children: null };
  const obj2 = { variant: "body-md/semibold", style: null, lineClamp: 2, children: name };
  items = [tmp.name, centeredText];
  obj2.style = items;
  const items1 = [hasOwnProperty(Text_Text.Text, obj2)];
  const obj3 = { variant: "mono-md/bold", style: null, children: label };
  const items2 = [tmp.label, centeredText];
  obj3.style = items2;
  items1[1] = hasOwnProperty(CheckpointTextDefault, obj3);
  obj.children = items1;
  return timestampProducer(View, obj);
}
