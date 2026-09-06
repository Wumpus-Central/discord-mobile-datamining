// _runtime/metro/08322__.js
import emptyFunction from "04389__.js";

const size = {
  display: null,
  width: null,
  height: null,
  start: null,
  end: null,
  top: null,
  left: null,
  right: null,
  bottom: null,
  minWidth: null,
  maxWidth: null,
  minHeight: null,
  maxHeight: null,
  margin: null,
  marginVertical: null,
  marginHorizontal: null,
  marginTop: null,
  marginBottom: null,
  marginLeft: null,
  marginRight: null,
  marginStart: null,
  marginEnd: null,
  padding: null,
  paddingVertical: null,
  paddingHorizontal: null,
  paddingTop: null,
  paddingBottom: null,
  paddingLeft: null,
  paddingRight: null,
  paddingStart: null,
  paddingEnd: null,
  borderWidth: null,
  borderTopWidth: null,
  borderStartWidth: null,
  borderEndWidth: null,
  borderRightWidth: null,
  borderBottomWidth: null,
  borderLeftWidth: null,
  position: null,
  flexDirection: null,
  flexWrap: null,
  justifyContent: null,
  alignItems: null,
  alignSelf: null,
  alignContent: null,
  overflow: null,
  flex: null,
  flexGrow: null,
  flexShrink: null,
  flexBasis: null,
  aspectRatio: null,
  zIndex: null,
  direction: null,
};
size.display = emptyFunction.oneOf(["none", "flex"]);
const items = [emptyFunction.number, emptyFunction.string];
size.width = emptyFunction.oneOfType(items);
const items1 = [emptyFunction.number, emptyFunction.string];
size.height = emptyFunction.oneOfType(items1);
const items2 = [emptyFunction.number, emptyFunction.string];
size.start = emptyFunction.oneOfType(items2);
const items3 = [emptyFunction.number, emptyFunction.string];
size.end = emptyFunction.oneOfType(items3);
const items4 = [emptyFunction.number, emptyFunction.string];
size.top = emptyFunction.oneOfType(items4);
const items5 = [emptyFunction.number, emptyFunction.string];
size.left = emptyFunction.oneOfType(items5);
const items6 = [emptyFunction.number, emptyFunction.string];
size.right = emptyFunction.oneOfType(items6);
const items7 = [emptyFunction.number, emptyFunction.string];
size.bottom = emptyFunction.oneOfType(items7);
const items8 = [emptyFunction.number, emptyFunction.string];
size.minWidth = emptyFunction.oneOfType(items8);
const items9 = [emptyFunction.number, emptyFunction.string];
size.maxWidth = emptyFunction.oneOfType(items9);
const items10 = [emptyFunction.number, emptyFunction.string];
size.minHeight = emptyFunction.oneOfType(items10);
const items11 = [emptyFunction.number, emptyFunction.string];
size.maxHeight = emptyFunction.oneOfType(items11);
const items12 = [emptyFunction.number, emptyFunction.string];
size.margin = emptyFunction.oneOfType(items12);
const items13 = [emptyFunction.number, emptyFunction.string];
size.marginVertical = emptyFunction.oneOfType(items13);
const items14 = [emptyFunction.number, emptyFunction.string];
size.marginHorizontal = emptyFunction.oneOfType(items14);
const items15 = [emptyFunction.number, emptyFunction.string];
size.marginTop = emptyFunction.oneOfType(items15);
const items16 = [emptyFunction.number, emptyFunction.string];
size.marginBottom = emptyFunction.oneOfType(items16);
const items17 = [emptyFunction.number, emptyFunction.string];
size.marginLeft = emptyFunction.oneOfType(items17);
const items18 = [emptyFunction.number, emptyFunction.string];
size.marginRight = emptyFunction.oneOfType(items18);
const items19 = [emptyFunction.number, emptyFunction.string];
size.marginStart = emptyFunction.oneOfType(items19);
const items20 = [emptyFunction.number, emptyFunction.string];
size.marginEnd = emptyFunction.oneOfType(items20);
const items21 = [emptyFunction.number, emptyFunction.string];
size.padding = emptyFunction.oneOfType(items21);
const items22 = [emptyFunction.number, emptyFunction.string];
size.paddingVertical = emptyFunction.oneOfType(items22);
const items23 = [emptyFunction.number, emptyFunction.string];
size.paddingHorizontal = emptyFunction.oneOfType(items23);
const items24 = [emptyFunction.number, emptyFunction.string];
size.paddingTop = emptyFunction.oneOfType(items24);
const items25 = [emptyFunction.number, emptyFunction.string];
size.paddingBottom = emptyFunction.oneOfType(items25);
const items26 = [emptyFunction.number, emptyFunction.string];
size.paddingLeft = emptyFunction.oneOfType(items26);
const items27 = [emptyFunction.number, emptyFunction.string];
size.paddingRight = emptyFunction.oneOfType(items27);
const items28 = [emptyFunction.number, emptyFunction.string];
size.paddingStart = emptyFunction.oneOfType(items28);
const items29 = [emptyFunction.number, emptyFunction.string];
size.paddingEnd = emptyFunction.oneOfType(items29);
size.borderWidth = emptyFunction.number;
size.borderTopWidth = emptyFunction.number;
size.borderStartWidth = emptyFunction.number;
size.borderEndWidth = emptyFunction.number;
size.borderRightWidth = emptyFunction.number;
size.borderBottomWidth = emptyFunction.number;
size.borderLeftWidth = emptyFunction.number;
size.position = emptyFunction.oneOf(["absolute", "relative"]);
size.flexDirection = emptyFunction.oneOf(["row", "row-reverse", "column", "column-reverse"]);
size.flexWrap = emptyFunction.oneOf(["wrap", "nowrap", "wrap-reverse"]);
size.justifyContent = emptyFunction.oneOf([
  "flex-start",
  "flex-end",
  "center",
  "space-between",
  "space-around",
  "space-evenly",
]);
size.alignItems = emptyFunction.oneOf(["flex-start", "flex-end", "center", "stretch", "baseline"]);
size.alignSelf = emptyFunction.oneOf(["auto", "flex-start", "flex-end", "center", "stretch", "baseline"]);
size.alignContent = emptyFunction.oneOf([
  "flex-start",
  "flex-end",
  "center",
  "stretch",
  "space-between",
  "space-around",
]);
size.overflow = emptyFunction.oneOf(["visible", "hidden", "scroll"]);
size.flex = emptyFunction.number;
size.flexGrow = emptyFunction.number;
size.flexShrink = emptyFunction.number;
const items30 = [emptyFunction.number, emptyFunction.string];
size.flexBasis = emptyFunction.oneOfType(items30);
size.aspectRatio = emptyFunction.number;
size.zIndex = emptyFunction.number;
size.direction = emptyFunction.oneOf(["inherit", "ltr", "rtl"]);

export default size;
