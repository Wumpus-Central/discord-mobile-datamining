// === Module 12609: CheckpointShareCardFooter ===

// Module 12609 (CheckpointShareCardFooter)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5603 */;
import inlineStyles from "inlineStyles" /* 7912 */;
import CheckpointShareCardContext from "CheckpointShareCardContext" /* 12607 */;
import noop from "module_19" /* 19 */;

const inlineStylesDefault = inlineStyles;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
let size = { width: 121, height: 28 };
const createStyles = fn(5012);
let obj = { footer: null, portraitFooter: null, characterAndStatsFooter: null, footerTitle: null };
const obj3 = {};
const merged = Object.assign(size);
obj3.position = "absolute";
obj3.bottom = 0;
obj3.left = 0;
obj3.flexDirection = "row";
obj3.alignItems = "center";
obj.footer = obj3;
obj.portraitFooter = { paddingLeft: nativeDefault.space.PX_12 };
const obj4 = { paddingLeft: nativeDefault.space.PX_12 };
obj.characterAndStatsFooter = { paddingLeft: nativeDefault.space.PX_12, alignItems: "flex-end", paddingBottom: nativeDefault.space.PX_6 };
const obj5 = { paddingLeft: nativeDefault.space.PX_12, alignItems: "flex-end", paddingBottom: nativeDefault.space.PX_6 };
obj.footerTitle = { fontSize: 12, lineHeight: 14, letterSpacing: -0.48, color: nativeDefault.colors.BLACK };
let closure_9 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardFooter.tsx");

export default function CheckpointShareCardFooter(isCharacterAndStats) {
  const tmp = closure_9();
  ({ width, height } = size);
  items = [tmp.footer, ];
  const obj = { style: items, children: null };
  items[1] = isCharacterAndStats.isCharacterAndStats ? tmp.characterAndStatsFooter : tmp.portraitFooter;
  size = { style: absoluteFill.absoluteFill, width, height, children: null };
  const tmp6 = inlineStylesDefault;
  size.children = timestampProducer(inlineStyles.Path, { d: "M0 0H" + width - 13 + "L" + width + " 12V" + height + "H0Z", fill: noop.useContext(CheckpointShareCardContext.CheckpointShareCardColorsContext).primaryBackgroundColor });
  const items1 = [timestampProducer(tmp6, size), timestampProducer(Text_Text.Text, { variant: "display-sm", style: tmp.footerTitle, allowFontScaling: false, children: "CHECKPOINT" })];
  obj.children = items1;
  return metroImportDefault(hasOwnProperty, obj);
};