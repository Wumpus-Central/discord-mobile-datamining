// discord_app/modules/parent_tools/native/FamilyCenterActivityGiftRow.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useCollectiblesDataDefault from "../../collectibles/hooks/useCollectiblesData.tsx";
import useSelectedTeenUser from "../hooks/useSelectedTeenUser.tsx";
import FamilyCenterActivityPurchaseRowUtils from "../FamilyCenterActivityPurchaseRowUtils.tsx";
import FamilyCenterActivityItemPreviewDefault from "FamilyCenterActivityItemPreview.tsx";
import FamilyCenterActivityGiftRowUtils from "../FamilyCenterActivityGiftRowUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, textContainer: { display: "flex", flexDirection: "column", flexShrink: 1 } };
obj2 = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  borderBottomWidth: 1,
  paddingVertical: 12,
};
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (gifterUserId) => {
      let claimed;
      let claimedAt;
      let displayName;
      let isSubscription;
      let items;
      let items1;
      let name;
      let offeredAt;
      let price;
      let skuId;
      let subscriptionPlanId;
      const obj = react2;
      const cResult = obj.c(26);
      ({ skuId, subscriptionPlanId, price, claimed, offeredAt, claimedAt } = gifterUserId);
      gifterUserId = gifterUserId.gifterUserId;
      const tmp4 = closure_6();
      let product = useCollectiblesDataDefault(skuId).product;
      const obj2 = useSelectedTeenUser;
      const teenUserForId = obj2.useTeenUserForId(gifterUserId);
      let tmp8 = product;
      if (product == null) {
        tmp8 = null;
      }
      if (cResult[0] === subscriptionPlanId) {
        let tmp9;
        if (cResult[1] === tmp8) {
          tmp9 = cResult[2];
        }
        ({ displayName, isSubscription } = tmp9);
        if (null != skuId) {
          if (!isSubscription) {
            if (null == product) {
              return null;
            }
          }
        }
        if (null == displayName) {
          return null;
        } else {
          if (cResult[3] === claimed) {
            if (cResult[4] === claimedAt) {
              if (cResult[5] === teenUserForId) {
                if (cResult[6] === offeredAt) {
                  let tmp11;
                  if (cResult[7] === price) {
                    tmp11 = cResult[8];
                  }
                  if (product == null) {
                    product = null;
                  }
                  if (cResult[9] === displayName) {
                    if (cResult[10] === isSubscription) {
                      if (cResult[11] === subscriptionPlanId) {
                        let tmp15;
                        let tmp18;
                        let tmp21;
                        if (cResult[12] === product) {
                          tmp15 = cResult[13];
                        }
                        if (cResult[14] !== displayName) {
                          const obj3 = {
                            variant: "text-md/semibold",
                            color: "interactive-text-active",
                            ellipsizeMode: "tail",
                            lineClamp: 1,
                            children: displayName,
                          };
                          const tmp20 = React3(Text_Text.Text, obj3);
                          cResult[14] = displayName;
                          cResult[15] = tmp20;
                          tmp18 = tmp20;
                        } else {
                          tmp18 = cResult[15];
                        }
                        if (cResult[16] !== tmp11) {
                          const obj4 = { variant: "text-xs/medium", color: "text-muted", children: tmp11 };
                          const tmp23 = React3(Text_Text.Text, obj4);
                          cResult[16] = tmp11;
                          cResult[17] = tmp23;
                          tmp21 = tmp23;
                        } else {
                          tmp21 = cResult[17];
                        }
                        if (cResult[18] === tmp4.textContainer) {
                          if (cResult[19] === tmp18) {
                            let tmp24;
                            if (cResult[20] === tmp21) {
                              tmp24 = cResult[21];
                            }
                            if (cResult[22] === tmp4.container) {
                              if (cResult[23] === tmp15) {
                                let tmp28;
                                if (cResult[24] === tmp24) {
                                  tmp28 = cResult[25];
                                }
                                return tmp28;
                              }
                            }
                            const obj5 = { style: tmp4.container, children: items };
                            items = [tmp15, tmp24];
                            const tmp31 = hasOwnProperty(View, obj5);
                            cResult[22] = tmp4.container;
                            cResult[23] = tmp15;
                            cResult[24] = tmp24;
                            cResult[25] = tmp31;
                            tmp28 = tmp31;
                          }
                        }
                        const obj6 = { style: tmp4.textContainer, children: items1 };
                        items1 = [tmp18, tmp21];
                        const tmp27 = hasOwnProperty(View, obj6);
                        cResult[18] = tmp4.textContainer;
                        cResult[19] = tmp18;
                        cResult[20] = tmp21;
                        cResult[21] = tmp27;
                        tmp24 = tmp27;
                      }
                    }
                  }
                  const obj7 = { displayName, product, isSubscription, subscriptionPlanId };
                  const tmp17 = React3(FamilyCenterActivityItemPreviewDefault, obj7);
                  cResult[9] = displayName;
                  cResult[10] = isSubscription;
                  cResult[11] = subscriptionPlanId;
                  cResult[12] = product;
                  cResult[13] = tmp17;
                  tmp15 = tmp17;
                }
              }
            }
          }
          const obj8 = { claimed, price, gifterName: name, offeredAt, claimedAt };
          name = null;
          const getGiftSubtext = FamilyCenterActivityGiftRowUtils.getGiftSubtext;
          FamilyCenterActivityGiftRowUtils;
          if (null != teenUserForId) {
            const tmp5Result = UserUtilsDefault;
            name = tmp5Result.getName(teenUserForId);
          }
          const giftSubtext = getGiftSubtext(obj8);
          cResult[3] = claimed;
          cResult[4] = claimedAt;
          cResult[5] = teenUserForId;
          cResult[6] = offeredAt;
          cResult[7] = price;
          cResult[8] = giftSubtext;
          tmp11 = giftSubtext;
        }
      }
      const tmpResult2 = FamilyCenterActivityPurchaseRowUtils;
      const purchaseDisplayInfo = tmpResult2.getPurchaseDisplayInfo(tmp8, subscriptionPlanId);
      cResult[0] = subscriptionPlanId;
      cResult[1] = tmp8;
      cResult[2] = purchaseDisplayInfo;
      tmp9 = purchaseDisplayInfo;
    }
  : (arg0) => {
      let claimed;
      let claimedAt;
      let displayName;
      let gifterUserId;
      let isSubscription;
      let items;
      let items1;
      let name;
      let offeredAt;
      let price;
      let skuId;
      let subscriptionPlanId;
      ({ skuId, subscriptionPlanId } = arg0);
      ({ price, gifterUserId, claimed, offeredAt, claimedAt } = arg0);
      const tmp = closure_6();
      let product = useCollectiblesDataDefault(skuId).product;
      const obj = useSelectedTeenUser;
      const teenUserForId = obj.useTeenUserForId(gifterUserId);
      let tmp8 = product;
      const getPurchaseDisplayInfo = FamilyCenterActivityPurchaseRowUtils.getPurchaseDisplayInfo;
      FamilyCenterActivityPurchaseRowUtils;
      if (product == null) {
        tmp8 = null;
      }
      const purchaseDisplayInfo = getPurchaseDisplayInfo(tmp8, subscriptionPlanId);
      ({ displayName, isSubscription } = purchaseDisplayInfo);
      if (null != skuId) {
        if (!isSubscription) {
          if (null == product) {
            return null;
          }
        }
      }
      if (null == displayName) {
        return null;
      } else {
        const obj2 = { claimed, price, gifterName: name, offeredAt, claimedAt };
        name = null;
        const getGiftSubtext = FamilyCenterActivityGiftRowUtils.getGiftSubtext;
        FamilyCenterActivityGiftRowUtils;
        if (null != teenUserForId) {
          const tmp2Result = UserUtilsDefault;
          name = tmp2Result.getName(teenUserForId);
        }
        const obj3 = { style: tmp.container, children: items };
        const giftSubtext = getGiftSubtext(obj2);
        const obj4 = { displayName, product, isSubscription, subscriptionPlanId };
        const tmp2Result2 = FamilyCenterActivityItemPreviewDefault;
        if (product == null) {
          product = null;
        }
        items = [React3(tmp2Result2, obj4)];
        const obj5 = { style: tmp.textContainer, children: items1 };
        const obj6 = {
          variant: "text-md/semibold",
          color: "interactive-text-active",
          ellipsizeMode: "tail",
          lineClamp: 1,
          children: displayName,
        };
        items1 = [React3(Text_Text.Text, obj6)];
        const obj7 = { variant: "text-xs/medium", color: "text-muted", children: giftSubtext };
        items1[1] = React3(Text_Text.Text, obj7);
        items[1] = hasOwnProperty(View, obj5);
        return hasOwnProperty(View, obj3);
      }
    };
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityGiftRow.tsx");

export default tmp4;
