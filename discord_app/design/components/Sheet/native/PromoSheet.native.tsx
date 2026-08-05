// discord_app/design/components/Sheet/native/PromoSheet.native.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../../../modules/themes/experiments/MobileVisualRefreshExperiment.tsx";

let error;
let metroImportAll;
const require = arg1;
let closure_3 = ["title", "description", "illustration", "graphic", "gradientColor", "actions"];
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { content: { paddingHorizontal: 20, position: "relative" }, title: { textAlign: "center" }, description: { textAlign: "center" }, illustration: { alignSelf: "stretch", alignItems: "center" }, graphic: null };
createCacheKey = { alignSelf: "center", maxWidth: require("Themes").modules.mobile.PROMO_SHEET_GRAPHIC_MAX_WIDTH };
createCacheKey[4] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("get ActivityIndicator").fileFinishedImporting("design/components/Sheet/native/PromoSheet.native.tsx");

export const PromoSheet = function PromoSheet(arg0) {
  let actions;
  let description;
  let gradientColor;
  let graphic;
  let illustration;
  let title;
  ({ description, illustration, graphic, gradientColor } = arg0);
  ({ title, actions } = arg0);
  const tmp3 = useIsMobileVisualRefreshExperimentEnabled("PromoSheet");
  importDefault = tmp3;
  const tmp4 = createCacheKey();
  const items = [tmp3, gradientColor];
  const memo = React.useMemo(() => {
    if (closure_1) {
      if (null != gradientColor) {
        return (arg0) => {
          let obj = {};
          const merged = Object.assign(arg0);
          obj = { offsetBottom: 0.25, color: closure_0, backgroundColor: null };
          obj[2] = outer1_1(outer1_2[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND;
          obj.children = outer1_7(outer1_0(outer1_2[7]).ExpressiveGradient, obj);
          return outer1_7(outer1_6, obj);
        };
      }
    }
  }, items);
  let obj = {};
  let merged = Object.assign(callback(arg0, closure_3));
  obj.startExpanded = true;
  obj.contentStyles = tmp4.content;
  obj.backgroundComponent = memo;
  if (tmp3) {
    if (null != graphic) {
      obj = {};
      const merged1 = Object.assign(graphic);
      obj.style = tmp4.graphic;
      let tmp6Result = tmp6(tmp7(7656).Graphic, obj);
    }
    const items1 = [tmp6Result, , ];
    let str = "heading-xl/bold";
    if (tmp3) {
      str = "heading-xl/semibold";
    }
    obj = { variant: null, color: "mobile-text-heading-primary", style: null, children: null };
    obj[0] = str;
    obj[2] = tmp4.title;
    obj[3] = title;
    const items2 = [tmp6(tmp7(4281).Text, obj), ];
    tmp6Result = null;
    if (null != description) {
      let str2 = "text-md/medium";
      if (tmp3) {
        str2 = "redesign/heading-18/medium";
      }
      const obj1 = { variant: null, color: null, style: null, children: null };
      obj1[0] = str2;
      let str3 = "text-default";
      if (tmp3) {
        str3 = "text-subtle";
      }
      obj1[1] = str3;
      obj1[2] = tmp4.description;
      obj1[3] = description;
      tmp6Result = tmp6(tmp7(4281).Text, obj1);
    }
    const obj2 = { spacing: 24, children: null };
    const obj3 = { children: null };
    items2[1] = tmp6Result;
    obj3[0] = items2;
    items1[1] = tmp9(tmp7(4693).Stack, obj3);
    items1[2] = actions;
    obj2[1] = items1;
    obj.children = tmp9(tmp10, obj2);
    return tmp6(gradientColor(5338).BottomSheet, obj);
  }
  tmp6Result = null;
  if (null != illustration) {
    const obj4 = { style: null, children: null };
    obj4[0] = tmp4.illustration;
    obj4[1] = illustration;
    tmp6Result = tmp6(View, obj4);
  }
};