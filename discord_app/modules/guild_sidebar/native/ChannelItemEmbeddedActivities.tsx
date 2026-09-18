// discord_app/modules/guild_sidebar/native/ChannelItemEmbeddedActivities.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import GameIcon from "../../game_detection/native/GameIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const GameIconDefault = GameIcon;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4722);
let obj2 = {
  overflow: { lineHeight: 16, textAlign: "center", textAlignVertical: "center", padding: 4 },
  overflowContainer: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    borderRadius: nativeDefault.radii.xs,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: { display: "flex", flexDirection: "row" },
  modeMuted: { opacity: 0.3 },
};
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/ChannelItemEmbeddedActivities.tsx");

export default function ChannelItemEmbeddedActivities(muted) {
  ({ embeddedApps, size } = muted);
  if (size === undefined) {
    size = GameIcon.GameIconSizes.SIZE_24;
  }
  let modeMuted = muted.muted;
  const tmp3 = closure_6();
  if (embeddedApps.length <= 0) {
    return null;
  } else if (1 === embeddedApps.length) {
    const obj2 = { game: embeddedApps[0].application, size, style: null };
    if (modeMuted) {
      modeMuted = tmp3.modeMuted;
    }
    obj2.style = modeMuted;
    return React4(GameIconDefault, obj2);
  } else {
    const diff = embeddedApps.length - 1;
    const tmp13 = GameIcon.GameIconImageSize[size];
    const obj3 = { style: tmp3.container, children: null };
    const obj4 = { game: embeddedApps[0].application, size, style: { marginRight: 4 } };
    const items = [React4(GameIconDefault, obj4)];
    if (2 === embeddedApps.length) {
      const obj = { game: embeddedApps[1].application, size };
      let tmp16Result = React4(GameIconDefault, obj);
    } else {
      const obj5 = { style: null, children: null };
      const items1 = [tmp3.overflowContainer];
      const obj6 = { height: tmp13, minWidth: tmp13 };
      items1[1] = obj6;
      obj5.style = items1;
      const obj7 = { style: tmp3.overflow, variant: "text-xs/bold", children: null };
      const _HermesInternal = HermesInternal;
      obj7.children = "+" + diff;
      obj5.children = React4(Text_Text.Text, obj7);
      tmp16Result = React4(View, obj5);
    }
    items[1] = tmp16Result;
    obj3.children = items;
    return hasOwnProperty(View, obj3);
  }
}
