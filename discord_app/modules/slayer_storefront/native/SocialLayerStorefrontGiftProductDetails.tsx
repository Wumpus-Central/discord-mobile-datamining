// discord_app/modules/slayer_storefront/native/SocialLayerStorefrontGiftProductDetails.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useGetOrFetchApplications from "../../applications/useGetOrFetchApplications.tsx";
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard.tsx";
import StorefrontNativeUtils from "../../storefront/native/StorefrontNativeUtils.android.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let sku;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let size;
({ Image: closure_4, View: hasOwnProperty } = react_native);
const constants = Constants.PriceSetAssignmentPurchaseTypes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, text: obj3, appInfo: obj4, appIcon: size };
obj2 = {
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
createStyles = createStyles.createStyles;
obj3 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
size = { width: 20, height: 20, borderRadius: nativeDefault.radii.xs };
let closure_9 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (sku) => {
      let items;
      let items1;
      let items2;
      let obj14;
      let tmp12;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(25);
      sku = sku.sku;
      const tmp4 = closure_9();
      const obj2 = useGetOrFetchApplications;
      const getOrFetchApplication = obj2.useGetOrFetchApplication(sku.applicationId);
      if (cResult[0] !== sku) {
        const obj3 = { sku, priceSetAssignmentPurchaseType: constants.GIFT };
        cResult[0] = sku;
        cResult[1] = obj3;
        tmp6 = obj3;
      } else {
        tmp6 = cResult[1];
      }
      const tmpResult = StorefrontNativeUtils;
      const userPrice = tmpResult.useFormattedSKUPrice(tmp6).userPrice;
      let tmp8 = null;
      if (null != getOrFetchApplication) {
        if (cResult[2] === getOrFetchApplication.icon) {
          let tmp9;
          if (cResult[3] === getOrFetchApplication.id) {
            tmp9 = cResult[4];
          }
          tmp8 = tmp9;
        }
        const obj4 = { id: null, icon: null, size: 20 };
        ({ id: obj6.id, icon: obj6.icon } = getOrFetchApplication);
        const obj5 = AvatarUtilsDefault;
        const applicationIconURL = obj5.getApplicationIconURL(obj4);
        cResult[2] = getOrFetchApplication.icon;
        cResult[3] = getOrFetchApplication.id;
        cResult[4] = applicationIconURL;
        tmp9 = applicationIconURL;
      }
      if (cResult[5] !== sku) {
        const obj7 = { sku, size: 55 };
        const tmp15 = metroImportDefault(SlayerStorefrontItemCardDefault, obj7);
        cResult[5] = sku;
        cResult[6] = tmp15;
        tmp12 = tmp15;
      } else {
        tmp12 = cResult[6];
      }
      if (cResult[7] === tmp8) {
        if (cResult[8] === getOrFetchApplication) {
          if (cResult[9] === tmp4.appIcon) {
            let tmp16;
            let tmp24;
            if (cResult[10] === tmp4.appInfo) {
              tmp16 = cResult[11];
            }
            if (cResult[12] !== sku.name) {
              const obj8 = { variant: "text-md/semibold", children: sku.name };
              const tmp26 = metroImportDefault(Text_Text.Text, obj8);
              cResult[12] = sku.name;
              cResult[13] = tmp26;
              tmp24 = tmp26;
            } else {
              tmp24 = cResult[13];
            }
            if (cResult[14] === tmp4.text) {
              if (cResult[15] === tmp16) {
                let tmp27;
                let tmp31;
                if (cResult[16] === tmp24) {
                  tmp27 = cResult[17];
                }
                if (cResult[18] !== userPrice) {
                  let tmp32 = null != userPrice;
                  if (tmp32) {
                    const obj9 = { variant: "text-md/semibold", children: userPrice };
                    tmp32 = metroImportDefault(Text_Text.Text, obj9);
                  }
                  cResult[18] = userPrice;
                  cResult[19] = tmp32;
                  tmp31 = tmp32;
                } else {
                  tmp31 = cResult[19];
                }
                if (cResult[20] === tmp4.container) {
                  if (cResult[21] === tmp12) {
                    if (cResult[22] === tmp27) {
                      let tmp34;
                      if (cResult[23] === tmp31) {
                        tmp34 = cResult[24];
                      }
                      return tmp34;
                    }
                  }
                }
                const obj10 = { style: tmp4.container, children: items };
                items = [tmp12, tmp27, tmp31];
                const tmp37 = metroImportAll(hasOwnProperty, obj10);
                cResult[20] = tmp4.container;
                cResult[21] = tmp12;
                cResult[22] = tmp27;
                cResult[23] = tmp31;
                cResult[24] = tmp37;
                tmp34 = tmp37;
              }
            }
            const obj11 = { style: tmp4.text, children: items1 };
            items1 = [tmp16, tmp24];
            const tmp30 = metroImportAll(hasOwnProperty, obj11);
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
        let tmp20 = null != tmp8;
        const obj12 = { style: tmp4.appInfo, children: items2 };
        if (tmp20) {
          const obj13 = { source: obj14, style: tmp4.appIcon };
          obj14 = { uri: tmp8 };
          tmp20 = metroImportDefault(React3, obj13);
        }
        items2 = [tmp20];
        const obj15 = { variant: "text-sm/medium", color: "text-muted", children: getOrFetchApplication.name };
        items2[1] = metroImportDefault(Text_Text.Text, obj15);
        tmp18Result = metroImportAll(hasOwnProperty, obj12);
      }
      cResult[7] = tmp8;
      cResult[8] = getOrFetchApplication;
      cResult[9] = tmp4.appIcon;
      cResult[10] = tmp4.appInfo;
      cResult[11] = tmp18Result;
      tmp16 = tmp18Result;
    }
  : (sku) => {
      let items1;
      let items2;
      let items3;
      let obj8;
      sku = sku.sku;
      let getOrFetchApplication;
      const tmp = closure_9();
      let obj = getOrFetchApplication(6663);
      getOrFetchApplication = obj.useGetOrFetchApplication(sku.applicationId);
      const obj2 = getOrFetchApplication(10536);
      let obj3 = { sku, priceSetAssignmentPurchaseType: constants.GIFT };
      const userPrice = obj2.useFormattedSKUPrice(obj3).userPrice;
      const items = [getOrFetchApplication];
      const memo = react.useMemo(() => {
        let applicationIconURL = null;
        if (null != getOrFetchApplication) {
          const obj3 = { id: null, icon: null, size: 20 };
          ({ id: obj2.id, icon: obj2.icon } = getOrFetchApplication);
          const obj = AvatarUtilsDefault;
          applicationIconURL = obj.getApplicationIconURL(obj3);
        }
        return applicationIconURL;
      }, items);
      const obj4 = { style: tmp.container, children: items1 };
      items1 = [closure_7(SlayerStorefrontItemCardDefault, { sku, size: 55 }), ,];
      let tmp6Result = null != getOrFetchApplication;
      const obj5 = { style: tmp.text, children: items3 };
      if (tmp6Result) {
        let tmp8Result = null != memo;
        const obj6 = { style: tmp.appInfo, children: items2 };
        if (tmp8Result) {
          const obj7 = { source: obj8, style: tmp.appIcon };
          obj8 = { uri: memo };
          tmp8Result = closure_7(closure_4, obj7);
        }
        items2 = [tmp8Result];
        const obj9 = { variant: "text-sm/medium", color: "text-muted", children: getOrFetchApplication.name };
        items2[1] = closure_7(getOrFetchApplication(4886).Text, obj9);
        tmp6Result = closure_8(closure_5, obj6);
      }
      items3 = [tmp6Result];
      const obj10 = { variant: "text-md/semibold", children: sku.name };
      items3[1] = closure_7(getOrFetchApplication(4886).Text, obj10);
      items1[1] = closure_8(closure_5, obj5);
      let tmp8Result2 = null != userPrice;
      if (tmp8Result2) {
        const obj11 = { variant: "text-md/semibold", children: userPrice };
        tmp8Result2 = closure_7(tmp2(4886).Text, obj11);
      }
      items1[2] = tmp8Result2;
      return closure_8(closure_5, obj4);
    };
size = size_mod;
const result = size.fileFinishedImporting(
  "modules/slayer_storefront/native/SocialLayerStorefrontGiftProductDetails.tsx",
);

export default tmp5;
