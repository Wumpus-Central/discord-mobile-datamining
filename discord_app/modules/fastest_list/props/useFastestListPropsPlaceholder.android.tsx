// === Module 6749: useFastestListPropsPlaceholder ===

// Module 6749 (useFastestListPropsPlaceholder)
import c from "c" /* 576 */;
import ColorUtils from "ColorUtils" /* 4967 */;
import FastestListPropsPlaceholder from "FastestListPropsPlaceholder" /* 6750 */;
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
  const size = { borderRadius: "Array", borderTopLeftRadius: "defineProperty", borderTopRightRadius: "error", borderBottomLeftRadius: "track", borderBottomRightRadius: "e", divider: "toCharArray$esjava$1", dividerColor: "toCharArray$esjava$1", dividerPaddingLeft: "transform", dividerPaddingRight: "e", placeholderShape: "toCharArray$esjava$1", placeholderShapeColor: "toCharArray$esjava$1", placeholderShapeCount: "uri", placeholderShapeGap: "e", placeholderShapePaddingHorizontal: "toCharArray$esjava$1", placeholderShapePaddingVertical: "toCharArray$esjava$1", placeholderFeedBackgroundColor: "url", placeholderFeedColor: "e", placeholderFeedLabelPadding: "toCharArray$esjava$1", placeholderFeedLabelPaddingInnerRatio: "toCharArray$esjava$1", placeholderFeedLabelSize: "useAnimatedStyle", placeholderFeedLabelSecondarySize: "e", placeholderFeedPadding: "toCharArray$esjava$1", placeholderFeedShape: "toCharArray$esjava$1", placeholderFeedShapeSize: "code", placeholderType: NONE, width: false, height: false, verticalAlignment: false, horizontalAlignment: false };
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
let obj = { sectionItem: { type: fn(6750).FastestListPropsPlaceholderType.NONE } };
const ReactCompilerGating = fn(558);
let obj2 = { type: fn(6750).FastestListPropsPlaceholderType.NONE };
let size = fn(2);
const result = size.fileFinishedImporting("modules/fastest_list/props/useFastestListPropsPlaceholder.android.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useFastestListPropsPlaceholder(arg0) {
  let tmp = arg0;
  obj = c;
  const cResult = obj.c(25);
  if (undefined === arg0) {
    tmp = obj;
  }
  if (cResult[0] !== tmp.listFooter) {
    const tmp5 = createNativePlaceholderConfig(tmp.listFooter);
    cResult[0] = tmp.listFooter;
    cResult[1] = tmp5;
    let tmp3 = tmp5;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] !== tmp.listHeader) {
    const tmp8 = createNativePlaceholderConfig(tmp.listHeader);
    cResult[2] = tmp.listHeader;
    cResult[3] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] !== tmp.sectionFooter) {
    const tmp11 = createNativePlaceholderConfig(tmp.sectionFooter);
    cResult[4] = tmp.sectionFooter;
    cResult[5] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] !== tmp.sectionHeader) {
    const tmp14 = createNativePlaceholderConfig(tmp.sectionHeader);
    cResult[6] = tmp.sectionHeader;
    cResult[7] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[7];
  }
  if (cResult[8] !== tmp.sectionItem) {
    const tmp17 = createNativePlaceholderConfig(tmp.sectionItem);
    cResult[8] = tmp.sectionItem;
    cResult[9] = tmp17;
    let tmp15 = tmp17;
  } else {
    tmp15 = cResult[9];
  }
  if (cResult[10] !== tmp.sectionItemAtFront) {
    const tmp20 = createNativePlaceholderConfig(tmp.sectionItemAtFront);
    cResult[10] = tmp.sectionItemAtFront;
    cResult[11] = tmp20;
    let tmp18 = tmp20;
  } else {
    tmp18 = cResult[11];
  }
  if (cResult[12] !== tmp.sectionItemAtRear) {
    const tmp23 = createNativePlaceholderConfig(tmp.sectionItemAtRear);
    cResult[12] = tmp.sectionItemAtRear;
    cResult[13] = tmp23;
    let tmp21 = tmp23;
  } else {
    tmp21 = cResult[13];
  }
  if (cResult[14] !== tmp.sectionItemSingleton) {
    const tmp26 = createNativePlaceholderConfig(tmp.sectionItemSingleton);
    cResult[14] = tmp.sectionItemSingleton;
    cResult[15] = tmp26;
    let tmp24 = tmp26;
  } else {
    tmp24 = cResult[15];
  }
  if (cResult[16] === tmp3) {
    if (cResult[17] === tmp6) {
      if (cResult[18] === tmp9) {
        if (cResult[19] === tmp12) {
          if (cResult[20] === tmp15) {
            if (cResult[21] === tmp18) {
              if (cResult[22] === tmp21) {
                if (cResult[23] === tmp24) {
                  let tmp27 = cResult[24];
                }
                return tmp27;
              }
            }
          }
        }
      }
    }
  }
  const obj2 = { listFooter: tmp3, listHeader: tmp6, sectionFooter: tmp9, sectionHeader: tmp12, sectionItem: tmp15, sectionItemAtFront: tmp18, sectionItemAtRear: tmp21, sectionItemSingleton: tmp24 };
  cResult[16] = tmp3;
  cResult[17] = tmp6;
  cResult[18] = tmp9;
  cResult[19] = tmp12;
  cResult[20] = tmp15;
  cResult[21] = tmp18;
  cResult[22] = tmp21;
  cResult[23] = tmp24;
  cResult[24] = obj2;
  tmp27 = obj2;
}) : (function useFastestListPropsPlaceholder() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = obj;
  }
  closure_0 = tmp;
  const items = [tmp];
  return noop.useMemo(() => ({ listFooter: createNativePlaceholderConfig(closure_0.listFooter), listHeader: createNativePlaceholderConfig(closure_0.listHeader), sectionFooter: createNativePlaceholderConfig(closure_0.sectionFooter), sectionHeader: createNativePlaceholderConfig(closure_0.sectionHeader), sectionItem: createNativePlaceholderConfig(closure_0.sectionItem), sectionItemAtFront: createNativePlaceholderConfig(closure_0.sectionItemAtFront), sectionItemAtRear: createNativePlaceholderConfig(closure_0.sectionItemAtRear), sectionItemSingleton: createNativePlaceholderConfig(closure_0.sectionItemSingleton) }), items);
});