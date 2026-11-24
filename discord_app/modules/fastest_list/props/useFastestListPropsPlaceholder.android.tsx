// === Module 7291: useFastestListPropsPlaceholder ===

// Module 7291 (useFastestListPropsPlaceholder)
import ColorUtils from "ColorUtils" /* 4914 */;
import FastestListPropsPlaceholder from "FastestListPropsPlaceholder" /* 7292 */;
import noop from "module_19" /* 19 */;

require = fn;
function createNativePlaceholderConfig(listFooter) {
  let type;
  if (listFooter != null) {
    type = listFooter.type;
  }
  let NONE = type;
  if (type == null) {
    NONE = FastestListPropsPlaceholder.FastestListPropsPlaceholderType.NONE;
  }
  const size = { borderRadius: "Array", borderTopLeftRadius: "create", borderTopRightRadius: "channel_id", borderBottomLeftRadius: "paddingHorizontal", borderBottomRightRadius: "isArray", divider: "channel_id", dividerColor: "LengthDelimited", dividerPaddingLeft: "status", dividerPaddingRight: "channel_id", placeholderShape: "i", placeholderShapeColor: "status", placeholderShapeCount: "analyticsLocations", placeholderShapeGap: "size", placeholderShapePaddingHorizontal: "ip", placeholderShapePaddingVertical: "Array", placeholderFeedBackgroundColor: "isArray", placeholderFeedColor: "analyticsLocations", placeholderFeedLabelPadding: "flexDirection", placeholderFeedLabelPaddingInnerRatio: "surrogates", placeholderFeedLabelSize: "Array", placeholderFeedLabelSecondarySize: "isArray", placeholderFeedPadding: "analyticsLocations", placeholderFeedShape: "useState", placeholderFeedShapeSize: "ti", placeholderType: NONE, width: "(function pnpm_backgroundImageTs24(content,context){let[DEFAULT_RADIAL_SHAPE,DEFAULT_RADIAL_SIZE,DEFAULT_RADIAL_POSITION,splitByComma,splitByWhitespace,RADIAL_SIZE_KEYWORDS,isLengthOrPercentageToken,getPositionFromCSSValue,parseRadialPosition,parseColorStopsCSSString]=this.__closure;let shape=DEFAULT_RADIAL_SHAPE;let size=DEFAULT_RADIAL_SIZE;let position={...DEFAULT_RADIAL_POSITION};const parts=splitByComma(content);const tokens=splitByWhitespace(parts[0]);let hasShapeSizeOrPosition=false;let hasExplicitSingleSize=false;let hasExplicitShape=false;while(tokens.length>0){const token=tokens.shift();if(token==='circle'||token==='ellipse'){shape=token;hasShapeSizeOrPosition=true;hasExplicitShape=true;}else if(RADIAL_SIZE_KEYWORDS.includes(token)){size=token;hasShapeSizeOrPosition=true;}else if(isLengthOrPercentageToken(token)){const sizeX=getPositionFromCSSValue(token);if(sizeX===null||parseFloat(token)<0){return null;}hasShapeSizeOrPosition=true;size={x:sizeX,y:sizeX};const nextToken=tokens[0];if(nextToken!==undefined&&isLengthOrPercentageToken(nextToken)){tokens.shift();const sizeY=getPositionFromCSSValue(nextToken);if(sizeY===null||parseFloat(nextToken)<0){return null;}size={x:sizeX,y:sizeY};}else{hasExplicitSingleSize=true;}}else if(token==='at'){hasShapeSizeOrPosition=true;const parsedPosition=parseRadialPosition(tokens.splice(0));if(parsedPosition===null){return null;}position=parsedPosition;}if(!hasShapeSizeOrPosition){break;}}if(hasShapeSizeOrPosition){parts.shift();if(!hasExplicitShape&&hasExplicitSingleSize){shape='circle';}if(hasExplicitSingleSize&&hasExplicitShape&&shape==='ellipse'){return null;}}const colorStops=parseColorStopsCSSString(parts,context);if(colorStops===null){return null;}return{type:'radial-gradient',shape:shape,size:size,position:position,colorStops:colorStops};})", height: "(function pnpm_backgroundImageTs23(tokens){let[getKeywordPosition,HORIZONTAL_POSITION_KEYWORDS,VERTICAL_POSITION_KEYWORDS,isLengthOrPercentageToken,getPositionFromCSSValue]=this.__closure;let top;let left;let right;let bottom;if(tokens.length===1){const token=tokens[0];const horizontal=getKeywordPosition(HORIZONTAL_POSITION_KEYWORDS,token);const vertical=getKeywordPosition(VERTICAL_POSITION_KEYWORDS,token);if(horizontal!==null){left=horizontal;top='50%';}else if(vertical!==null){left='50%';top=vertical;}else if(isLengthOrPercentageToken(token)){const value=getPositionFromCSSValue(token);if(value===null){return null;}left=value;top='50%';}}else if(tokens.length===2){const[token1,token2]=tokens;const horizontal1=getKeywordPosition(HORIZONTAL_POSITION_KEYWORDS,token1);const vertical1=getKeywordPosition(VERTICAL_POSITION_KEYWORDS,token1);const horizontal2=getKeywordPosition(HORIZONTAL_POSITION_KEYWORDS,token2);const vertical2=getKeywordPosition(VERTICAL_POSITION_KEYWORDS,token2);if(horizontal1!==null&&vertical2!==null){left=horizontal1;top=vertical2;}else if(vertical1!==null&&horizontal2!==null){left=horizontal2;top=vertical1;}else{if(horizontal1!==null){left=horizontal1;}else if(isLengthOrPercentageToken(token1)){const value=getPositionFromCSSValue(token1);if(value===null){return null;}left=value;}else{return null;}if(vertical2!==null){top=vertical2;}else if(isLengthOrPercentageToken(token2)){const value=getPositionFromCSSValue(token2);if(value===null){return null;}top=value;}else{return null;}}}else if(tokens.length===4){for(const[keyword,rawValue]of[[tokens[0],tokens[1]],[tokens[2],tokens[3]]]){const value=getPositionFromCSSValue(rawValue);if(value===null){return null;}if(keyword==='left'){left=value;}else if(keyword==='right'){right=value;}else if(keyword==='top'){top=value;}else if(keyword==='bottom'){bottom=value;}else{return null;}}}if(top!=null&&left!=null){return{top:top,left:left};}if(bottom!=null&&right!=null){return{bottom:bottom,right:right};}if(top!=null&&right!=null){return{top:top,right:right};}if(bottom!=null&&left!=null){return{bottom:bottom,left:left};}return null;})", verticalAlignment: "handshake_tone5_tone2", horizontalAlignment: "handshake_dark_skin_tone_medium_light_skin_tone" };
  if (null == listFooter) {
    return size;
  } else {
    if (FastestListPropsPlaceholder.FastestListPropsPlaceholderType.NONE !== type) {
      if (FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE === type) {
        let num9 = listFooter.borderRadius;
        if (num9 == null) {
          num9 = 0;
        }
        size.borderRadius = num9;
        ({ shape: obj.placeholderShape, spaceGap } = listFooter);
        if (spaceGap == null) {
          spaceGap = 0;
        }
        size.placeholderShapeGap = spaceGap;
        let num10 = listFooter.paddingHorizontal;
        if (num10 == null) {
          num10 = 0;
        }
        size.placeholderShapePaddingHorizontal = num10;
        let num11 = listFooter.paddingVertical;
        if (num11 == null) {
          num11 = 0;
        }
        size.placeholderShapePaddingVertical = num11;
        const tmp15Result = ColorUtils;
        size.placeholderShapeColor = processColor(ColorUtils.hexToRgbaString(listFooter.colorHex, listFooter.opacity));
        let num12 = listFooter.shapeCount;
        if (num12 == null) {
          num12 = 1;
        }
        size.placeholderShapeCount = num12;
        ({ width: obj.width, height: obj.height, verticalAlignment } = listFooter);
        if (verticalAlignment == null) {
          verticalAlignment = "center";
        }
        size.verticalAlignment = verticalAlignment;
        let str2 = listFooter.horizonalAlignment;
        if (str2 == null) {
          str2 = "center";
        }
        size.horizontalAlignment = str2;
        const tmp14 = processColor(ColorUtils.hexToRgbaString(listFooter.colorHex, listFooter.opacity));
      } else if (FastestListPropsPlaceholder.FastestListPropsPlaceholderType.FEED_ITEM === type) {
        let num = listFooter.borderRadius;
        if (num == null) {
          num = 0;
        }
        size.borderRadius = num;
        let num2 = listFooter.borderTopLeftRadius;
        if (num2 == null) {
          num2 = 0;
        }
        size.borderTopLeftRadius = num2;
        let num3 = listFooter.borderTopRightRadius;
        if (num3 == null) {
          num3 = 0;
        }
        size.borderTopRightRadius = num3;
        let num4 = listFooter.borderBottomLeftRadius;
        if (num4 == null) {
          num4 = 0;
        }
        size.borderBottomLeftRadius = num4;
        let num5 = listFooter.borderBottomRightRadius;
        if (num5 == null) {
          num5 = 0;
        }
        size.borderBottomRightRadius = num5;
        let flag = listFooter.divider;
        if (flag == null) {
          flag = false;
        }
        size.divider = flag;
        size.dividerColor = processColor(listFooter.dividerColorHex);
        let num6 = listFooter.dividerPaddingLeft;
        if (num6 == null) {
          num6 = 0;
        }
        size.dividerPaddingLeft = num6;
        let num7 = listFooter.dividerPaddingRight;
        if (num7 == null) {
          num7 = 0;
        }
        size.dividerPaddingRight = num7;
        const tmp10 = processColor(listFooter.dividerColorHex);
        size.placeholderFeedBackgroundColor = processColor(listFooter.backgroundColorHex);
        const tmp9Result = processColor(listFooter.backgroundColorHex);
        size.placeholderFeedColor = processColor(listFooter.colorHex);
        ({ labelSize: obj.placeholderFeedLabelSize, labelSecondarySize } = listFooter);
        if (labelSecondarySize == null) {
          labelSecondarySize = 0;
        }
        size.placeholderFeedLabelSecondarySize = labelSecondarySize;
        ({ labelPadding: obj.placeholderFeedLabelPadding, labelPaddingInnerRatio } = listFooter);
        if (labelPaddingInnerRatio == null) {
          labelPaddingInnerRatio = 0.4;
        }
        size.placeholderFeedLabelPaddingInnerRatio = labelPaddingInnerRatio;
        let num8 = listFooter.padding;
        if (num8 == null) {
          num8 = 0;
        }
        size.placeholderFeedPadding = num8;
        ({ shape: obj.placeholderFeedShape, shapeSize: obj.placeholderFeedShapeSize } = listFooter);
        const tmp9Result2 = processColor(listFooter.colorHex);
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Invalid placeholder type: " + type);
        throw error;
      }
    }
    return size;
  }
}
const processColor = fn(17).processColor;
const obj = { sectionItem: { type: fn(7292).FastestListPropsPlaceholderType.NONE } };
let size = fn(2);
const result = size.fileFinishedImporting("modules/fastest_list/props/useFastestListPropsPlaceholder.android.tsx");

export default function useFastestListPropsPlaceholder() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = obj;
  }
  closure_0 = tmp;
  items = [tmp];
  return noop.useMemo(() => ({ listFooter: createNativePlaceholderConfig(closure_0.listFooter), listHeader: createNativePlaceholderConfig(closure_0.listHeader), sectionFooter: createNativePlaceholderConfig(closure_0.sectionFooter), sectionHeader: createNativePlaceholderConfig(closure_0.sectionHeader), sectionItem: createNativePlaceholderConfig(closure_0.sectionItem), sectionItemAtFront: createNativePlaceholderConfig(closure_0.sectionItemAtFront), sectionItemAtRear: createNativePlaceholderConfig(closure_0.sectionItemAtRear), sectionItemSingleton: createNativePlaceholderConfig(closure_0.sectionItemSingleton) }), items);
};