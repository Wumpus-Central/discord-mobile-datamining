// discord_app/design/components/Sheet/native/PromoSheet.native.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_4 from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import closure_5 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";

const require = arg1;
let closure_3 = ["title", "description", "illustration", "graphic", "gradientColor", "actions"];
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = {
  content: { paddingHorizontal: 20, position: "relative" },
  title: { textAlign: "center" },
  description: { textAlign: "center" },
  illustration: { alignSelf: "stretch", alignItems: "center" },
  graphic: null,
};
createCacheKey = { alignSelf: "center", maxWidth: ThemesDefault.modules.mobile.PROMO_SHEET_GRAPHIC_MAX_WIDTH };
createCacheKey[4] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("design/components/Sheet/native/PromoSheet.native.tsx");

export const PromoSheet = function PromoSheet(arg0) {
  ({ description, illustration, graphic, gradientColor } = arg0);
  ({ title, actions } = arg0);
  const tmp2 = callback2();
  const items = [gradientColor];
  const memo = React.useMemo(
    () =>
      null != gradientColor
        ? (arg0) => {
            let obj = {};
            const merged = Object.assign(arg0);
            obj = {
              offsetBottom: 0.25,
              color: closure_0,
              backgroundColor: closure_1_1(closure_1_2[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND,
            };
            obj.children = closure_1_7(closure_1_0(closure_1_2[6]).ExpressiveGradient, obj);
            return closure_1_7(closure_1_6, obj);
          }
        : undefined,
    items,
  );
  let obj = {};
  let merged = Object.assign(callback(arg0, closure_3));
  obj.startExpanded = true;
  obj.contentStyles = tmp2.content;
  obj.backgroundComponent = memo;
  if (null != graphic) {
    obj = {};
    const merged1 = Object.assign(graphic);
    obj.style = tmp2.graphic;
    let tmp4Result = tmp4(tmp5(9001).Graphic, obj);
  } else {
    tmp4Result = null;
    if (null != illustration) {
      obj = { style: null, children: null };
      obj[0] = tmp2.illustration;
      obj[1] = illustration;
      tmp4Result = tmp4(View, obj);
    }
  }
  const items1 = [tmp4Result, ,];
  const items2 = [
    closure_7(gradientColor(4474).Text, {
      variant: "heading-xl/semibold",
      color: "mobile-text-heading-primary",
      style: tmp2.title,
      children: title,
    }),
  ];
  tmp4Result = null;
  if (null != description) {
    const obj2 = { variant: "redesign/heading-18/medium", color: "text-subtle", style: null, children: null };
    obj2[2] = tmp2.description;
    obj2[3] = description;
    tmp4Result = tmp4(tmp5(4474).Text, obj2);
  }
  const obj3 = { spacing: 24, children: null };
  items2[1] = tmp4Result;
  items1[1] = closure_8(gradientColor(4927).Stack, { children: items2 });
  items1[2] = actions;
  obj3[1] = items1;
  obj.children = closure_8(gradientColor(4927).Stack, obj3);
  return closure_7(gradientColor(5631).BottomSheet, obj);
};
