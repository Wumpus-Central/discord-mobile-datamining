import noop from "noop";

let require = arg1;
function createNativePlaceholderConfig(type) {
  let labelPaddingInnerRatio;
  let labelSecondarySize;
  let spaceGap;
  let verticalAlignment;
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  let NONE = type;
  if (type == null) {
    NONE = require(8832) /* FastestListPropsPlaceholderType */.FastestListPropsPlaceholderType.NONE;
  }
  const obj = { borderRadius: "Array", borderTopLeftRadius: "text", borderTopRightRadius: "bottom", borderBottomLeftRadius: "sr", borderBottomRightRadius: "next", divider: "alignItems", dividerColorRgba: "header", dividerPaddingLeft: "done", dividerPaddingRight: "a", placeholderShape: "isArray", placeholderShapeColorRgba: "enabled", placeholderShapeCount: "v", placeholderShapeGap: "a", placeholderShapePaddingHorizontal: "isArray", placeholderShapePaddingVertical: "count", placeholderFeedBackgroundColorRgba: "fileFinishedImporting", placeholderFeedColorRgba: "a", placeholderFeedLabelPadding: "isArray", placeholderFeedLabelPaddingInnerRatio: "Reflect", placeholderFeedLabelSize: "enabled", placeholderFeedLabelSecondarySize: "a", placeholderFeedPadding: "isArray", placeholderFeedShape: "has", placeholderFeedShapeSize: "fill", placeholderType: NONE, width: null, height: null, verticalAlignment: false, horizontalAlignment: false };
  if (null == type) {
    return obj;
  } else {
    if (require(8832) /* FastestListPropsPlaceholderType */.FastestListPropsPlaceholderType.NONE !== type) {
      if (tmp11(8832).FastestListPropsPlaceholderType.SHAPE === type) {
        let num9 = type.borderRadius;
        if (num9 == null) {
          num9 = 0;
        }
        obj.borderRadius = num9;
        ({ shape: obj.placeholderShape, spaceGap } = type);
        if (spaceGap == null) {
          spaceGap = 0;
        }
        obj.placeholderShapeGap = spaceGap;
        let num10 = type.paddingHorizontal;
        if (num10 == null) {
          num10 = 0;
        }
        obj.placeholderShapePaddingHorizontal = num10;
        let num11 = type.paddingVertical;
        if (num11 == null) {
          num11 = 0;
        }
        obj.placeholderShapePaddingVertical = num11;
        let tmp11Result = tmp11(4037);
        obj.placeholderShapeColorRgba = tmp11Result.hexToRgbaString(type.colorHex, type.opacity);
        let num12 = type.shapeCount;
        if (num12 == null) {
          num12 = 1;
        }
        obj.placeholderShapeCount = num12;
        ({ width: obj.width, height: obj.height, verticalAlignment } = type);
        if (verticalAlignment == null) {
          verticalAlignment = "center";
        }
        obj.verticalAlignment = verticalAlignment;
        let str2 = type.horizonalAlignment;
        if (str2 == null) {
          str2 = "center";
        }
        obj.horizontalAlignment = str2;
      } else if (tmp11(8832).FastestListPropsPlaceholderType.FEED_ITEM === type) {
        let num = type.borderRadius;
        if (num == null) {
          num = 0;
        }
        obj.borderRadius = num;
        let num2 = type.borderTopLeftRadius;
        if (num2 == null) {
          num2 = 0;
        }
        obj.borderTopLeftRadius = num2;
        let num3 = type.borderTopRightRadius;
        if (num3 == null) {
          num3 = 0;
        }
        obj.borderTopRightRadius = num3;
        let num4 = type.borderBottomLeftRadius;
        if (num4 == null) {
          num4 = 0;
        }
        obj.borderBottomLeftRadius = num4;
        let num5 = type.borderBottomRightRadius;
        if (num5 == null) {
          num5 = 0;
        }
        obj.borderBottomRightRadius = num5;
        let flag = type.divider;
        if (flag == null) {
          flag = false;
        }
        obj.divider = flag;
        let hexToRgbaStringResult;
        if (null != type.dividerColorHex) {
          tmp11Result = tmp11(4037);
          hexToRgbaStringResult = tmp11Result.hexToRgbaString(type.dividerColorHex);
        }
        obj.dividerColorRgba = hexToRgbaStringResult;
        let num6 = type.dividerPaddingLeft;
        if (num6 == null) {
          num6 = 0;
        }
        obj.dividerPaddingLeft = num6;
        let num7 = type.dividerPaddingRight;
        if (num7 == null) {
          num7 = 0;
        }
        obj.dividerPaddingRight = num7;
        let hexToRgbaStringResult1;
        if (null != type.backgroundColorHex) {
          hexToRgbaStringResult1 = tmp11(4037).hexToRgbaString(type.backgroundColorHex);
          const tmp11Result1 = tmp11(4037);
        }
        obj.placeholderFeedBackgroundColorRgba = hexToRgbaStringResult1;
        obj.placeholderFeedColorRgba = tmp11(4037).hexToRgbaString(type.colorHex);
        ({ labelSize: obj.placeholderFeedLabelSize, labelSecondarySize } = type);
        if (labelSecondarySize == null) {
          labelSecondarySize = 0;
        }
        obj.placeholderFeedLabelSecondarySize = labelSecondarySize;
        ({ labelPadding: obj.placeholderFeedLabelPadding, labelPaddingInnerRatio } = type);
        if (labelPaddingInnerRatio == null) {
          labelPaddingInnerRatio = 0.4;
        }
        obj.placeholderFeedLabelPaddingInnerRatio = labelPaddingInnerRatio;
        let num8 = type.padding;
        if (num8 == null) {
          num8 = 0;
        }
        obj.placeholderFeedPadding = num8;
        ({ shape: obj.placeholderFeedShape, shapeSize: obj.placeholderFeedShapeSize } = type);
        const tmp11Result2 = tmp11(4037);
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Invalid placeholder type: " + type);
        throw error;
      }
    }
    return obj;
  }
}
let obj = { sectionItem: null };
obj = { type: require("FastestListPropsPlaceholderType").FastestListPropsPlaceholderType.NONE };
obj[0] = obj;
const result = require("hexToRgba").fileFinishedImporting("modules/fastest_list/props/useFastestListPropsPlaceholder.android.tsx");

export default function useFastestListPropsPlaceholder() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = obj;
  }
  const require = tmp;
  const items = [tmp];
  return React.useMemo(() => ({ listFooter: outer1_4(tmp.listFooter), listHeader: outer1_4(tmp.listHeader), sectionFooter: outer1_4(tmp.sectionFooter), sectionHeader: outer1_4(tmp.sectionHeader), sectionItem: outer1_4(tmp.sectionItem), sectionItemAtFront: outer1_4(tmp.sectionItemAtFront), sectionItemAtRear: outer1_4(tmp.sectionItemAtRear), sectionItemSingleton: outer1_4(tmp.sectionItemSingleton) }), items);
};