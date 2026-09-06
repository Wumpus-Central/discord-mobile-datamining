// === Module 16232: ChannelItemEmbeddedActivities ===

// Module 16232 (ChannelItemEmbeddedActivities)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import GameIcon from "GameIcon" /* 7172 */;
import noop from "module_19" /* 19 */;

const GameIconDefault = GameIcon;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { overflow: { lineHeight: 16, textAlign: "center", textAlignVertical: "center", padding: 4 }, overflowContainer: null, container: null, modeMuted: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs, display: "flex", alignItems: "center", justifyContent: "center" };
createStyles.overflowContainer = createStyles;
createStyles.container = { display: "flex", flexDirection: "row" };
createStyles.modeMuted = { opacity: 0.3 };
let closure_6 = createStyles.createStyles(createStyles);
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
    let obj = { game: embeddedApps[0].application, size, style: null };
    if (modeMuted) {
      modeMuted = tmp3.modeMuted;
    }
    obj.style = modeMuted;
    return React4(GameIconDefault, obj);
  } else {
    const diff = embeddedApps.length - 1;
    const tmp13 = GameIcon.GameIconImageSize[size];
    obj = { style: tmp3.container, children: null };
    const obj1 = { game: embeddedApps[0].application, size, style: { marginRight: 4 } };
    const items = [React4(GameIconDefault, obj1), ];
    if (2 === embeddedApps.length) {
      obj = { game: embeddedApps[1].application, size };
      let tmp16Result = tmp16(GameIconDefault, obj);
    } else {
      const obj2 = { style: null, children: null };
      const items1 = [tmp3.overflowContainer, ];
      const obj3 = { height: tmp13, minWidth: tmp13 };
      items1[1] = obj3;
      obj2.style = items1;
      const obj4 = { style: tmp3.overflow, variant: "text-xs/bold", children: null };
      const _HermesInternal = HermesInternal;
      obj4.children = "+" + diff;
      obj2.children = tmp16(Text_Text.Text, obj4);
      tmp16Result = tmp16(tmp15, obj2);
    }
    items[1] = tmp16Result;
    obj.children = items;
    return hasOwnProperty(View, obj);
  }
};