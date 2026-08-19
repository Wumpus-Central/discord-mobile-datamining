// discord_app/modules/fastest_list/props/useFastestListPropsPlaceholder.android.tsx
import hexToRgba from "../../../utils/ColorUtils.tsx";
import FastestListPropsPlaceholderType from "FastestListPropsPlaceholder.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import { processColor } from "../../../../_runtime/00017_get_ActivityIndicator.js";

require = fn;
function createNativePlaceholderConfig(type) {
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  let NONE = type;
  if (type == null) {
    NONE = FastestListPropsPlaceholderType.FastestListPropsPlaceholderType.NONE;
  }
  obj = { borderRadius: "Array", borderTopLeftRadius: "create", borderTopRightRadius: "diversity", borderBottomLeftRadius: "Button", borderBottomRightRadius: "e", divider: "isArray", dividerColor: "isArray", dividerPaddingLeft: "t", dividerPaddingRight: "e", placeholderShape: "isArray", placeholderShapeColor: "isArray", placeholderShapeCount: "to", placeholderShapeGap: "e", placeholderShapePaddingHorizontal: "isArray", placeholderShapePaddingVertical: "isArray", placeholderFeedBackgroundColor: "Date", placeholderFeedColor: "e", placeholderFeedLabelPadding: "isArray", placeholderFeedLabelPaddingInnerRatio: "isArray", placeholderFeedLabelSize: "TypeError", placeholderFeedLabelSecondarySize: "e", placeholderFeedPadding: "isArray", placeholderFeedShape: "isArray", placeholderFeedShapeSize: "diversity", placeholderType: NONE, width: null, height: null, verticalAlignment: null, horizontalAlignment: null };
  if (null == type) {
    return obj;
  } else {
    if (FastestListPropsPlaceholderType.FastestListPropsPlaceholderType.NONE !== type) {
      if (FastestListPropsPlaceholderType.FastestListPropsPlaceholderType.SHAPE === type) {
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
        const tmp15Result = hexToRgba;
        obj.placeholderShapeColor = processColor(hexToRgba.hexToRgbaString(type.colorHex, type.opacity));
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
        const tmp14 = processColor(hexToRgba.hexToRgbaString(type.colorHex, type.opacity));
      } else if (FastestListPropsPlaceholderType.FastestListPropsPlaceholderType.FEED_ITEM === type) {
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
        obj.dividerColor = processColor(type.dividerColorHex);
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
        let tmp9Result = processColor(type.backgroundColorHex);
        obj.placeholderFeedBackgroundColor = tmp9Result;
        tmp9Result = processColor(type.colorHex);
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
        const tmp10 = processColor(type.dividerColorHex);
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        error = new Error("Invalid placeholder type: " + type);
        throw error;
      }
    }
    return obj;
  }
}
let obj = { type: require("FastestListPropsPlaceholderType").FastestListPropsPlaceholderType.NONE };
obj[0] = obj;
const result = require("obj132").fileFinishedImporting("modules/fastest_list/props/useFastestListPropsPlaceholder.android.tsx");

export default function useFastestListPropsPlaceholder() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = obj;
  }
  closure_0 = tmp;
  const items = [tmp];
  return React.useMemo(() => ({ listFooter: createNativePlaceholderConfig(closure_0.listFooter), listHeader: createNativePlaceholderConfig(closure_0.listHeader), sectionFooter: createNativePlaceholderConfig(closure_0.sectionFooter), sectionHeader: createNativePlaceholderConfig(closure_0.sectionHeader), sectionItem: createNativePlaceholderConfig(closure_0.sectionItem), sectionItemAtFront: createNativePlaceholderConfig(closure_0.sectionItemAtFront), sectionItemAtRear: createNativePlaceholderConfig(closure_0.sectionItemAtRear), sectionItemSingleton: createNativePlaceholderConfig(closure_0.sectionItemSingleton) }), items);
};