// discord_app/design/components/Sheet/native/PromoSheet.native.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useIsMobileVisualRefreshExperimentEnabledDefault from "../../../../modules/themes/experiments/MobileVisualRefreshExperiment.tsx";
import closure_4 from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import closure_5 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";

const require = arg1;
let closure_3 = ["title", "description", "illustration", "graphic", "gradientColor", "actions"];
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { content: { paddingHorizontal: 20, position: "relative" }, title: { textAlign: "center" }, description: { textAlign: "center" }, illustration: { alignSelf: "stretch", alignItems: "center" }, graphic: null };
createCacheKey = { alignSelf: "center", maxWidth: ThemesDefault.modules.mobile.PROMO_SHEET_GRAPHIC_MAX_WIDTH };
createCacheKey[4] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("design/components/Sheet/native/PromoSheet.native.tsx");

export const PromoSheet = function PromoSheet(arg0) {
  ({ description, illustration, graphic, gradientColor } = arg0);
  ({ title, actions } = arg0);
  const tmp3 = useIsMobileVisualRefreshExperimentEnabledDefault("PromoSheet");
  importDefault = tmp3;
  const tmp4 = callback2();
  const items = [tmp3, gradientColor];
  const memo = React.useMemo(() => {
    if (closure_1) {
      if (null != gradientColor) {
        return (arg0) => {
          let obj = {};
          const merged = Object.assign(arg0);
          obj = { offsetBottom: 0.25, color: closure_0, backgroundColor: closure_1_1(closure_1_2[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
          obj.children = closure_1_7(closure_1_0(closure_1_2[7]).ExpressiveGradient, obj);
          return closure_1_7(closure_1_6, obj);
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
      let tmp6Result = tmp6(tmp7(8923).Graphic, obj);
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
    const items2 = [tmp6(tmp7(4442).Text, obj), ];
    tmp6Result = null;
    if (null != description) {
      let str2 = "text-md/medium";
      if (tmp3) {
        str2 = "redesign/heading-18/medium";
      }
      obj1 = { variant: null, color: null, style: null, children: null };
      obj1[0] = str2;
      let str3 = "text-default";
      if (tmp3) {
        str3 = "text-subtle";
      }
      obj1[1] = str3;
      obj1[2] = tmp4.description;
      obj1[3] = description;
      tmp6Result = tmp6(tmp7(4442).Text, obj1);
    }
    const obj2 = { spacing: 24, children: null };
    const obj3 = { children: null };
    items2[1] = tmp6Result;
    obj3[0] = items2;
    items1[1] = tmp9(tmp7(4891).Stack, obj3);
    items1[2] = actions;
    obj2[1] = items1;
    obj.children = tmp9(tmp10, obj2);
    return tmp6(gradientColor(5587).BottomSheet, obj);
  }
  tmp6Result = null;
  if (null != illustration) {
    const obj4 = { style: null, children: null };
    obj4[0] = tmp4.illustration;
    obj4[1] = illustration;
    tmp6Result = tmp6(View, obj4);
  }
};