// === Module 13432: CheckpointShareCardFooter ===

// Module 13432 (CheckpointShareCardFooter)
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5596 */;
import Text_Text from "Text/Text" /* 5624 */;
import inlineStyles from "inlineStyles" /* 8031 */;
import CheckpointShareCardContext from "CheckpointShareCardContext" /* 13429 */;
import ArrowLargeRightIcon from "ArrowLargeRightIcon" /* 13433 */;
import noop from "module_19" /* 19 */;

const inlineStylesDefault = inlineStyles;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let size = { width: 145, height: 28 };
const createStyles = fn(5014);
let obj = { footer: null, portraitFooter: null, characterAndStatsFooter: null, footerTitle: null, footerButton: null, portraitFooterButton: null, characterAndStatsFooterButton: null };
let obj3 = {};
const merged = Object.assign(size);
obj3.position = "absolute";
obj3.bottom = 0;
obj3.left = 0;
obj3.flexDirection = "row";
obj3.alignItems = "center";
obj.footer = obj3;
obj.portraitFooter = { paddingLeft: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
let obj4 = { paddingLeft: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
obj.characterAndStatsFooter = { paddingLeft: nativeDefault.space.PX_12, alignItems: "flex-end", paddingBottom: nativeDefault.space.PX_6, gap: nativeDefault.space.PX_8 };
let obj5 = { paddingLeft: nativeDefault.space.PX_12, alignItems: "flex-end", paddingBottom: nativeDefault.space.PX_6, gap: nativeDefault.space.PX_8 };
obj.footerTitle = { fontSize: 12, lineHeight: 14, letterSpacing: -0.48, color: nativeDefault.colors.BLACK };
let obj6 = { fontSize: 12, lineHeight: 14, letterSpacing: -0.48, color: nativeDefault.colors.BLACK };
obj.footerButton = { alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: nativeDefault.colors.BLACK };
obj.portraitFooterButton = { width: 16, height: 16 };
obj.characterAndStatsFooterButton = { width: 16, height: 16, borderWidth: 0.8 };
let closure_9 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardFooter.tsx");

export default function CheckpointShareCardFooter(isCharacterAndStats) {
  isCharacterAndStats = isCharacterAndStats.isCharacterAndStats;
  const tmp = closure_9();
  const context = noop.useContext(CheckpointShareCardContext.CheckpointShareCardColorsContext);
  ({ primaryBackgroundColor, tertiaryBackgroundColor } = context);
  ({ width, height } = size);
  const items = [tmp.footer, ];
  const obj2 = { style: items, children: null };
  items[1] = isCharacterAndStats ? tmp.characterAndStatsFooter : tmp.portraitFooter;
  const token = useToken.useToken(nativeDefault.colors.BLACK);
  size = { style: absoluteFill.absoluteFill, width, height, children: null };
  const tmp5Result = inlineStylesDefault;
  size.children = timestampProducer(inlineStyles.Path, { d: "M0 0H" + width - 13 + "L" + width + " 12V" + height + "H0Z", fill: primaryBackgroundColor });
  const items1 = [timestampProducer(tmp5Result, size), timestampProducer(Text_Text.Text, { variant: "display-sm", style: tmp.footerTitle, allowFontScaling: false, children: "CHECKPOINT" }), ];
  const items2 = [tmp.footerButton, isCharacterAndStats ? tmp.characterAndStatsFooterButton : tmp.portraitFooterButton, ];
  const obj5 = { backgroundColor: tertiaryBackgroundColor, boxShadow: null };
  let num = 1.5;
  let num2 = 1.5;
  if (isCharacterAndStats) {
    num2 = 1.6;
  }
  const obj6 = { offsetX: num2, offsetY: null, blurRadius: 0, color: null };
  if (isCharacterAndStats) {
    num = 1.6;
  }
  const obj7 = { style: items2, children: null };
  obj6.offsetY = num;
  obj6.color = token;
  const items3 = [obj6];
  obj5.boxShadow = items3;
  items2[2] = obj5;
  const obj3 = { d: "M0 0H" + width - 13 + "L" + width + " 12V" + height + "H0Z", fill: primaryBackgroundColor };
  const obj4 = { variant: "display-sm", style: tmp.footerTitle, allowFontScaling: false, children: "CHECKPOINT" };
  obj7.children = timestampProducer(ArrowLargeRightIcon.ArrowLargeRightIcon, { size: "xxs", color: nativeDefault.colors.BLACK });
  items1[2] = timestampProducer(hasOwnProperty, obj7);
  obj2.children = items1;
  return React5(hasOwnProperty, obj2);
};