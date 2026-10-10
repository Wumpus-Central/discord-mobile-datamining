// discord_app/modules/slayer_storefront/native/SocialLayerStorefrontGiftProductDetails.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import useGetOrFetchApplications from "../../applications/useGetOrFetchApplications.tsx";
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard.tsx";
import StorefrontNativeUtils from "../../storefront/native/StorefrontNativeUtils.android.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const constants = fn(1085).PriceSetAssignmentPurchaseTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_12,
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingVertical: nativeDefault.space.PX_16,
    borderWidth: 2,
    borderColor: nativeDefault.colors.BACKGROUND_BRAND,
    borderRadius: nativeDefault.radii.lg,
    marginHorizontal: nativeDefault.space.PX_16,
  },
  text: null,
  appInfo: null,
  appIcon: null,
};
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_16,
  borderWidth: 2,
  borderColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: nativeDefault.radii.lg,
  marginHorizontal: nativeDefault.space.PX_16,
};
obj2.text = { flex: 1, gap: nativeDefault.space.PX_4 };
let obj4 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj2.appInfo = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let size = { width: 20, height: 20, borderRadius: nativeDefault.radii.xs };
obj2.appIcon = size;
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/slayer_storefront/native/SocialLayerStorefrontGiftProductDetails.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SocialLayerStorefrontGiftProductDetails(sku) {
      const cResult = c.c(25);
      sku = sku.sku;
      const tmp4 = closure_8();
      const getOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication(sku.applicationId);
      if (cResult[0] !== sku) {
        const obj3 = { sku, priceSetAssignmentPurchaseType: constants.GIFT };
        cResult[0] = sku;
        cResult[1] = obj3;
        let tmp6 = obj3;
      } else {
        tmp6 = cResult[1];
      }
      const userPrice = StorefrontNativeUtils.useFormattedSKUPrice(tmp6).userPrice;
      if (null == getOrFetchApplication) {
        if (cResult[5] !== sku) {
          const obj4 = { sku, size: 55 };
          const tmp15 = timestampProducer(SlayerStorefrontItemCardDefault, obj4);
          cResult[5] = sku;
          cResult[6] = tmp15;
          let tmp12 = tmp15;
        } else {
          tmp12 = cResult[6];
        }
        if (cResult[7] === null) {
          if (cResult[8] === getOrFetchApplication) {
            if (cResult[9] === tmp4.appIcon) {
              if (cResult[10] === tmp4.appInfo) {
                let tmp16 = cResult[11];
              }
              if (cResult[12] !== sku.name) {
                const obj7 = { variant: "text-md/semibold", children: sku.name };
                const tmp26 = timestampProducer(Text_Text.Text, obj7);
                cResult[12] = sku.name;
                cResult[13] = tmp26;
                let tmp24 = tmp26;
              } else {
                tmp24 = cResult[13];
              }
              if (cResult[14] === tmp4.text) {
                if (cResult[15] === tmp16) {
                  if (cResult[16] === tmp24) {
                    let tmp27 = cResult[17];
                  }
                  if (cResult[18] !== userPrice) {
                    let tmp32 = null != userPrice;
                    if (tmp32) {
                      const obj8 = { variant: "text-md/semibold", children: userPrice };
                      tmp32 = timestampProducer(Text_Text.Text, obj8);
                    }
                    cResult[18] = userPrice;
                    cResult[19] = tmp32;
                    let tmp31 = tmp32;
                  } else {
                    tmp31 = cResult[19];
                  }
                  if (cResult[20] === tmp4.container) {
                    if (cResult[21] === tmp12) {
                      if (cResult[22] === tmp27) {
                        if (cResult[23] === tmp31) {
                          let tmp34 = cResult[24];
                        }
                        return tmp34;
                      }
                    }
                  }
                  const obj9 = { style: tmp4.container, children: null };
                  const items = [tmp12, tmp27, tmp31];
                  obj9.children = items;
                  const tmp37 = React5(View, obj9);
                  cResult[20] = tmp4.container;
                  cResult[21] = tmp12;
                  cResult[22] = tmp27;
                  cResult[23] = tmp31;
                  cResult[24] = tmp37;
                  tmp34 = tmp37;
                }
              }
              const obj10 = { style: tmp4.text, children: null };
              const items1 = [tmp16, tmp24];
              obj10.children = items1;
              const tmp30 = React5(View, obj10);
              cResult[14] = tmp4.text;
              cResult[15] = tmp16;
              cResult[16] = tmp24;
              cResult[17] = tmp30;
              tmp27 = tmp30;
            }
          }
        }
        let tmp18Result = null != getOrFetchApplication;
        if (tmp18Result) {
          const obj11 = { style: tmp4.appInfo, children: null };
          let tmp20 = null != null;
          if (tmp20) {
            const obj12 = { source: null, style: tmp4.appIcon };
            tmp20 = timestampProducer(FastImageDefault, obj12);
          }
          const items2 = [tmp20];
          const obj13 = { variant: "text-sm/medium", color: "text-muted", children: getOrFetchApplication.name };
          items2[1] = timestampProducer(Text_Text.Text, obj13);
          obj11.children = items2;
          tmp18Result = React5(View, obj11);
        }
        cResult[7] = null;
        cResult[8] = getOrFetchApplication;
        cResult[9] = tmp4.appIcon;
        cResult[10] = tmp4.appInfo;
        cResult[11] = tmp18Result;
        tmp16 = tmp18Result;
      } else {
        if (cResult[2] === getOrFetchApplication.icon) {
        }
        ({ id: obj6.id, icon: obj6.icon } = getOrFetchApplication);
        const applicationIconSource = AvatarUtilsDefault.getApplicationIconSource({ id: null, icon: null, size: 20 });
        cResult[2] = getOrFetchApplication.icon;
        cResult[3] = getOrFetchApplication.id;
        cResult[4] = applicationIconSource;
        const obj14 = { id: null, icon: null, size: 20 };
      }
      const tmpResult = StorefrontNativeUtils;
    }
  : function SocialLayerStorefrontGiftProductDetails(sku) {
      sku = sku.sku;
      let getOrFetchApplication;
      const tmp = closure_8();
      getOrFetchApplication = getOrFetchApplication(6857).useGetOrFetchApplication(sku.applicationId);
      let obj = getOrFetchApplication(6857);
      const userPrice = getOrFetchApplication(10160).useFormattedSKUPrice({
        sku,
        priceSetAssignmentPurchaseType: constants.GIFT,
      }).userPrice;
      const items = [getOrFetchApplication];
      const memo = noop.useMemo(() => {
        let applicationIconSource = null;
        if (null != getOrFetchApplication) {
          ({ id: obj2.id, icon: obj2.icon } = getOrFetchApplication);
          applicationIconSource = AvatarUtilsDefault.getApplicationIconSource({ id: null, icon: null, size: 20 });
          const obj3 = { id: null, icon: null, size: 20 };
        }
        return applicationIconSource;
      }, items);
      const obj4 = { style: tmp.container, children: null };
      const items1 = [closure_6(SlayerStorefrontItemCardDefault, { sku, size: 55 }), ,];
      const obj5 = { style: tmp.text, children: null };
      let tmp6Result = null != getOrFetchApplication;
      if (tmp6Result) {
        const obj6 = { style: tmp.appInfo, children: null };
        let tmp8Result = null != memo;
        if (tmp8Result) {
          const obj7 = { source: memo, style: tmp.appIcon };
          tmp8Result = closure_6(FastImageDefault, obj7);
        }
        const items2 = [tmp8Result];
        const obj8 = { variant: "text-sm/medium", color: "text-muted", children: getOrFetchApplication.name };
        items2[1] = closure_6(tmp2(5088).Text, obj8);
        obj6.children = items2;
        tmp6Result = closure_7(View, obj6);
      }
      const items3 = [
        tmp6Result,
        closure_6(getOrFetchApplication(5088).Text, { variant: "text-md/semibold", children: sku.name }),
      ];
      obj5.children = items3;
      items1[1] = closure_7(View, obj5);
      let tmp8Result2 = null != userPrice;
      if (tmp8Result2) {
        const obj10 = { variant: "text-md/semibold", children: userPrice };
        tmp8Result2 = closure_6(tmp2(5088).Text, obj10);
      }
      items1[2] = tmp8Result2;
      obj4.children = items1;
      return closure_7(View, obj4);
    };
