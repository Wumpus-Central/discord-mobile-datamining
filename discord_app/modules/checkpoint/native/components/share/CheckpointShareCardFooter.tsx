// === Module 13394: CheckpointShareCardFooter ===

// Module 13394 (CheckpointShareCardFooter)
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5591 */;
import Text_Text from "Text/Text" /* 5619 */;
import inlineStyles from "inlineStyles" /* 8023 */;
import CheckpointShareCardContext from "CheckpointShareCardContext" /* 13391 */;
import ArrowLargeRightIcon from "ArrowLargeRightIcon" /* 13395 */;
import noop from "module_19" /* 19 */;

const inlineStylesDefault = inlineStyles;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let size = { width: 145, height: 28 };
const size1 = { width: 140, height: 24 };
const createStyles = fn(5009);
let obj = { footer: { position: "absolute", bottom: 0, left: 0, flexDirection: "row", alignItems: "center" }, portraitFooter: null, characterAndStatsFooter: null, footerTitle: null, footerButton: null, portraitFooterButton: null, characterAndStatsFooterButton: null };
let obj2 = {};
const merged = Object.assign(size);
obj2.paddingLeft = nativeDefault.space.PX_12;
obj2.gap = nativeDefault.space.PX_8;
obj.portraitFooter = obj2;
let obj4 = {};
const merged1 = Object.assign(size1);
obj4.paddingLeft = nativeDefault.space.PX_12;
obj4.gap = nativeDefault.space.PX_4;
obj.characterAndStatsFooter = obj4;
obj.footerTitle = { fontSize: 12, lineHeight: 14, letterSpacing: -0.48, color: nativeDefault.colors.BLACK };
let obj5 = { fontSize: 12, lineHeight: 14, letterSpacing: -0.48, color: nativeDefault.colors.BLACK };
obj.footerButton = { alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: nativeDefault.colors.BLACK };
obj.portraitFooterButton = { width: 16, height: 16 };
obj.characterAndStatsFooterButton = { width: 12, height: 12 };
let closure_10 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardFooter.tsx");

export default function CheckpointShareCardFooter(isCharacterAndStats) {
  isCharacterAndStats = isCharacterAndStats.isCharacterAndStats;
  const tmp = closure_10();
  const context = noop.useContext(CheckpointShareCardContext.CheckpointShareCardColorsContext);
  ({ primaryBackgroundColor, tertiaryBackgroundColor } = context);
  ({ width, height } = isCharacterAndStats ? size1 : size);
  const items = [tmp.footer, ];
  const obj2 = { style: items, children: null };
  items[1] = isCharacterAndStats ? tmp.characterAndStatsFooter : tmp.portraitFooter;
  const token = useToken.useToken(nativeDefault.colors.BLACK);
  size = { style: absoluteFill.absoluteFill, width, height, children: null };
  const tmp5Result = inlineStylesDefault;
  size.children = timestampProducer(inlineStyles.Path, { d: "M0 0H" + width - 13 + "L" + width + " 12V" + height + "H0Z", fill: primaryBackgroundColor });
  const items1 = [timestampProducer(tmp5Result, size), timestampProducer(Text_Text.Text, { variant: "display-sm", style: tmp.footerTitle, allowFontScaling: false, children: "CHECKPOINT" }), ];
  const items2 = [tmp.footerButton, , ];
  const obj5 = { style: items2, children: null };
  items2[1] = isCharacterAndStats ? tmp.characterAndStatsFooterButton : tmp.portraitFooterButton;
  const obj6 = { backgroundColor: tertiaryBackgroundColor, boxShadow: null };
  const items3 = [{ offsetX: 1.5, offsetY: 1.5, blurRadius: 0, color: token }];
  obj6.boxShadow = items3;
  items2[2] = obj6;
  const obj3 = { d: "M0 0H" + width - 13 + "L" + width + " 12V" + height + "H0Z", fill: primaryBackgroundColor };
  const obj4 = { variant: "display-sm", style: tmp.footerTitle, allowFontScaling: false, children: "CHECKPOINT" };
  obj5.children = timestampProducer(ArrowLargeRightIcon.ArrowLargeRightIcon, { size: "xxs", color: nativeDefault.colors.BLACK });
  items1[2] = timestampProducer(hasOwnProperty, obj5);
  obj2.children = items1;
  return React5(hasOwnProperty, obj2);
};