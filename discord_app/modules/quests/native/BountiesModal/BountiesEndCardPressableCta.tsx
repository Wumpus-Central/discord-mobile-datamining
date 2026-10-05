// discord_app/modules/quests/native/BountiesModal/BountiesEndCardPressableCta.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import QuestContent from "../../../../../discord_common/js/shared/shared-constants/QuestContent.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import BountyConstants from "BountyConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let bounty, obj1;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
const END_CARD_IMAGE_SIZE = BountyConstants.END_CARD_IMAGE_SIZE;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles(() => {
  const obj = {
    image: size,
    info: { alignItems: "center", marginTop: nativeDefault.space.PX_12 },
    ctaContainer: { position: "relative", alignItems: "center" },
  };
  size = {
    width: END_CARD_IMAGE_SIZE,
    height: END_CARD_IMAGE_SIZE,
    borderRadius: nativeDefault.radii.xl,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_MUTED,
  };
  ({ alignItems: "center", marginTop: nativeDefault.space.PX_12 });
  return obj;
});
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (bounty) => {
      let getQuestImpressionId;
      let items;
      let tmp7;
      let tmp8;
      let tmp = bounty;
      let obj = bounty(getQuestImpressionId[7]);
      const cResult = obj.c(25);
      bounty = bounty.bounty;
      const sourceQuestContent = bounty.sourceQuestContent;
      const disabled = bounty.disabled;
      const tmp5 = closure_9();
      const tmpResult = tmp(getQuestImpressionId[8]);
      getQuestImpressionId = tmpResult.useGetQuestImpressionId();
      if (cResult[0] !== bounty) {
        const tmpResult3 = tmp(getQuestImpressionId[9]);
        const bountyCtaInfo = tmpResult3.getBountyCtaInfo(bounty);
        let scaledImageUrl;
        if (null != bountyCtaInfo.iconImageUri) {
          size = { assetUrl: bountyCtaInfo.iconImageUri, width: END_CARD_IMAGE_SIZE, height: END_CARD_IMAGE_SIZE };
          const tmpResult4 = tmp(getQuestImpressionId[10]);
          scaledImageUrl = tmpResult4.getScaledImageUrl(size);
        }
        cResult[0] = bounty;
        cResult[1] = bountyCtaInfo;
        cResult[2] = scaledImageUrl;
        tmp8 = scaledImageUrl;
        tmp7 = bountyCtaInfo;
      } else {
        tmp7 = cResult[1];
        tmp8 = cResult[2];
      }
      if (cResult[3] === bounty.cta) {
        if (cResult[4] === bounty.id) {
          if (cResult[5] === getQuestImpressionId) {
            let tmp15;
            if (cResult[8] !== tmp8) {
              let obj2 = { uri: tmp8 };
              cResult[8] = tmp8;
              cResult[9] = obj2;
              tmp15 = obj2;
            } else {
              tmp15 = cResult[9];
            }
            if (cResult[10] === tmp5.image) {
              let tmp16;
              let tmp20;
              if (cResult[11] === tmp15) {
                tmp16 = cResult[12];
              }
              if (cResult[13] !== tmp7.label) {
                const obj3 = { variant: "text-md/semibold", color: "text-strong", children: tmp7.label };
                const tmp22 = closure_7(tmp(getQuestImpressionId[16]).Text, obj3);
                cResult[13] = tmp7.label;
                cResult[14] = tmp22;
                tmp20 = tmp22;
              } else {
                tmp20 = cResult[14];
              }
              if (cResult[15] === tmp5.info) {
                let tmp23;
                if (cResult[16] === tmp20) {
                  tmp23 = cResult[17];
                }
                if (cResult[18] === tmp7.label) {
                  if (cResult[19] === (undefined !== disabled && disabled)) {
                    if (cResult[20] === tmp5.ctaContainer) {
                      if (cResult[21] === tmp14) {
                        if (cResult[22] === tmp16) {
                          let tmp27;
                          if (cResult[23] === tmp23) {
                            tmp27 = cResult[24];
                          }
                          return tmp27;
                        }
                      }
                    }
                  }
                }
                const obj4 = {
                  onPress: tmp14,
                  disabled: undefined !== disabled && disabled,
                  hitSlop: 16,
                  accessibilityRole: "button",
                  accessibilityLabel: tmp7.label,
                  style: tmp5.ctaContainer,
                  children: items,
                };
                items = [tmp16, tmp23];
                const tmp30 = closure_8(closure_4, obj4);
                cResult[18] = tmp7.label;
                cResult[19] = undefined !== disabled && disabled;
                cResult[20] = tmp5.ctaContainer;
                class A {
                  constructor() {
                    tmp = closure_0(closure_2[11]);
                    obj = {
                      adContentId: bounty.id,
                      adCreativeType: closure_0(closure_2[12]).AdCreativeType.BOUNTY,
                      cta: bounty.cta,
                    };
                    openAdGameLinkDirectly = tmp.openAdGameLinkDirectly;
                    obj1 = {
                      content: closure_0(closure_2[13]).QuestContent.VIDEO_MODAL_ICON_END_CARD,
                      ctaContent: closure_0(closure_2[14]).QuestContentCTA.OPEN_GAME_LINK,
                      impressionId: closure_2(),
                      sourceQuestContent,
                    };
                    result = openAdGameLinkDirectly(obj, obj1);
                    return;
                  }
                }
                cResult[21] = tmp14;
                cResult[22] = tmp16;
                cResult[23] = tmp23;
                cResult[24] = tmp30;
                tmp27 = tmp30;
              }
              const obj5 = { style: tmp5.info, children: tmp20 };
              const tmp26 = closure_7(closure_5, obj5);
              cResult[15] = tmp5.info;
              cResult[16] = tmp20;
              cResult[17] = tmp26;
              tmp23 = tmp26;
            }
            const obj6 = { source: tmp15, style: tmp5.image };
            const tmp19 = closure_7(sourceQuestContent(getQuestImpressionId[15]), obj6);
            cResult[10] = tmp5.image;
            cResult[11] = tmp15;
            cResult[12] = tmp19;
            tmp16 = tmp19;
          }
        }
      }
      class A {
        constructor() {
          tmp = closure_0(closure_2[11]);
          obj = {
            adContentId: bounty.id,
            adCreativeType: closure_0(closure_2[12]).AdCreativeType.BOUNTY,
            cta: bounty.cta,
          };
          openAdGameLinkDirectly = tmp.openAdGameLinkDirectly;
          obj1 = {
            content: closure_0(closure_2[13]).QuestContent.VIDEO_MODAL_ICON_END_CARD,
            ctaContent: closure_0(closure_2[14]).QuestContentCTA.OPEN_GAME_LINK,
            impressionId: closure_2(),
            sourceQuestContent,
          };
          result = openAdGameLinkDirectly(obj, obj1);
          return;
        }
      }
      cResult[3] = bounty.cta;
      cResult[4] = bounty.id;
      cResult[5] = getQuestImpressionId;
      cResult[6] = sourceQuestContent;
      cResult[7] = A;
    }
  : (bounty) => {
      let items1;
      let obj6;
      bounty = bounty.bounty;
      const sourceQuestContent = bounty.sourceQuestContent;
      let flag = bounty.disabled;
      if (flag === undefined) {
        flag = false;
      }
      let getQuestImpressionId;
      let tmp = closure_9();
      let obj = bounty(getQuestImpressionId[8]);
      getQuestImpressionId = obj.useGetQuestImpressionId();
      let obj2 = bounty(getQuestImpressionId[9]);
      const bountyCtaInfo = obj2.getBountyCtaInfo(bounty);
      let scaledImageUrl;
      if (null != bountyCtaInfo.iconImageUri) {
        size = { assetUrl: bountyCtaInfo.iconImageUri, width: END_CARD_IMAGE_SIZE, height: END_CARD_IMAGE_SIZE };
        const tmp2Result = bounty(getQuestImpressionId[10]);
        scaledImageUrl = tmp2Result.getScaledImageUrl(size);
      }
      const items = [, , ,];
      ({ id: arr[0], cta: arr[1] } = bounty);
      items[2] = getQuestImpressionId;
      items[3] = sourceQuestContent;
      let callback;
      if (!flag) {
        callback = react.useCallback(() => {
          const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
          const obj = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: bounty.cta };
          const obj2 = {
            content: QuestContent.QuestContent.VIDEO_MODAL_ICON_END_CARD,
            ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
            impressionId: getQuestImpressionId(),
            sourceQuestContent,
          };
          const result = openAdGameLinkDirectly(obj, obj2);
        }, items);
      }
      const obj3 = {
        onPress: callback,
        disabled: flag,
        hitSlop: 16,
        accessibilityRole: "button",
        accessibilityLabel: bountyCtaInfo.label,
        style: tmp.ctaContainer,
        children: items1,
      };
      items1 = [,];
      const obj4 = { source: { uri: scaledImageUrl }, style: tmp.image };
      items1[0] = closure_7(sourceQuestContent(getQuestImpressionId[15]), obj4);
      const obj5 = { style: tmp.info, children: closure_7(bounty(getQuestImpressionId[16]).Text, obj6) };
      obj6 = { variant: "text-md/semibold", color: "text-strong", children: bountyCtaInfo.label };
      items1[1] = closure_7(closure_5, obj5);
      return closure_8(closure_4, obj3);
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesEndCardPressableCta.tsx");

export default tmp4;
