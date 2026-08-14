// discord_app/modules/fastest_list/props/useFastestListPropsPlaceholder.android.tsx
import noop from "noop";
import { processColor } from "get ActivityIndicator";
import { FastestListPropsPlaceholderType } from "FastestListPropsPlaceholder.tsx";

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
    NONE = FastestListPropsPlaceholderType.FastestListPropsPlaceholderType.NONE;
  }
  const obj = { borderRadius: "Array", borderTopLeftRadius: "create", borderTopRightRadius: "diversity", borderBottomLeftRadius: "Button", borderBottomRightRadius: "e", divider: "isArray", dividerColor: "isArray", dividerPaddingLeft: "t", dividerPaddingRight: "e", placeholderShape: "isArray", placeholderShapeColor: "isArray", placeholderShapeCount: "to", placeholderShapeGap: "e", placeholderShapePaddingHorizontal: "isArray", placeholderShapePaddingVertical: "isArray", placeholderFeedBackgroundColor: "Date", placeholderFeedColor: "e", placeholderFeedLabelPadding: "isArray", placeholderFeedLabelPaddingInnerRatio: "isArray", placeholderFeedLabelSize: "TypeError", placeholderFeedLabelSecondarySize: "e", placeholderFeedPadding: "isArray", placeholderFeedShape: "isArray", placeholderFeedShapeSize: "diversity", placeholderType: NONE, width: null, height: null, verticalAlignment: null, horizontalAlignment: null };
  if (null == type) {
    return obj;
  } else {
    if (FastestListPropsPlaceholderType.FastestListPropsPlaceholderType.NONE !== type) {
      if (tmp15(8604).FastestListPropsPlaceholderType.SHAPE === type) {
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
        const tmp14 = processColor(tmp15(4191).hexToRgbaString(type.colorHex, type.opacity));
        obj.placeholderShapeColor = tmp14;
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
        const tmp15Result = tmp15(4191);
      } else if (tmp15(8604).FastestListPropsPlaceholderType.FEED_ITEM === type) {
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
        const tmp10 = processColor(type.dividerColorHex);
        obj.dividerColor = tmp10;
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
        let tmp9Result = tmp9(type.backgroundColorHex);
        obj.placeholderFeedBackgroundColor = tmp9Result;
        tmp9Result = tmp9(type.colorHex);
        obj.placeholderFeedColor = tmp9Result;
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
const result = require("FastestListPropsPlaceholderType").fileFinishedImporting("modules/fastest_list/props/useFastestListPropsPlaceholder.android.tsx");

export default function useFastestListPropsPlaceholder() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = obj;
  }
  const require = tmp;
  const items = [tmp];
  return React.useMemo(() => ({ listFooter: outer1_5(tmp.listFooter), listHeader: outer1_5(tmp.listHeader), sectionFooter: outer1_5(tmp.sectionFooter), sectionHeader: outer1_5(tmp.sectionHeader), sectionItem: outer1_5(tmp.sectionItem), sectionItemAtFront: outer1_5(tmp.sectionItemAtFront), sectionItemAtRear: outer1_5(tmp.sectionItemAtRear), sectionItemSingleton: outer1_5(tmp.sectionItemSingleton) }), items);
};