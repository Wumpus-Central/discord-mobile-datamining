// discord_app/modules/quests/native/BountiesModal/BountiesEndCardPressableCta.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import QuestContent from "../../../../../discord_common/js/shared/shared-constants/QuestContent.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const END_CARD_IMAGE_SIZE = fn(14852).END_CARD_IMAGE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4896);
let closure_9 = createStyles.createStyles(() => {
  const obj = { image: null, info: null, ctaContainer: null };
  const size = {
    width: END_CARD_IMAGE_SIZE,
    height: END_CARD_IMAGE_SIZE,
    borderRadius: nativeDefault.radii.xl,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_MUTED,
  };
  obj.image = size;
  obj.info = { alignItems: "center", marginTop: nativeDefault.space.PX_12 };
  obj.ctaContainer = { position: "relative", alignItems: "center" };
  return obj;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesEndCardPressableCta.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (bounty) => {
      const cResult = bounty(getQuestImpressionId[7]).c(25);
      bounty = bounty.bounty;
      const sourceQuestContent = bounty.sourceQuestContent;
      const disabled = bounty.disabled;
      const tmp5 = closure_9();
      let obj = bounty(getQuestImpressionId[7]);
      getQuestImpressionId = bounty(getQuestImpressionId[8]).useGetQuestImpressionId();
      if (cResult[0] !== bounty) {
        const bountyCtaInfo = tmp(tmp2[9]).getBountyCtaInfo(bounty);
        let scaledImageUrl;
        if (null != bountyCtaInfo.iconImageUri) {
          const size = {
            assetUrl: bountyCtaInfo.iconImageUri,
            width: END_CARD_IMAGE_SIZE,
            height: END_CARD_IMAGE_SIZE,
          };
          scaledImageUrl = tmp(tmp2[10]).getScaledImageUrl(size);
          const tmpResult4 = tmp(tmp2[10]);
        }
        cResult[0] = bounty;
        cResult[1] = bountyCtaInfo;
        cResult[2] = scaledImageUrl;
        let tmp8 = scaledImageUrl;
        let tmp7 = bountyCtaInfo;
        const tmpResult3 = tmp(tmp2[9]);
      } else {
        tmp7 = cResult[1];
        tmp8 = cResult[2];
      }
      if (cResult[3] === bounty.cta) {
        if (cResult[4] === bounty.id) {
          if (cResult[5] === getQuestImpressionId) {
            if (cResult[8] !== tmp8) {
              let obj2 = { uri: tmp8 };
              cResult[8] = tmp8;
              cResult[9] = obj2;
              let tmp15 = obj2;
            } else {
              tmp15 = cResult[9];
            }
            if (cResult[10] === tmp5.image) {
              if (cResult[11] === tmp15) {
                let tmp16 = cResult[12];
              }
              if (cResult[13] !== tmp7.label) {
                const obj3 = { variant: "text-md/semibold", color: "text-strong", children: tmp7.label };
                const tmp22 = closure_7(tmp(tmp2[16]).Text, obj3);
                cResult[13] = tmp7.label;
                cResult[14] = tmp22;
                let tmp20 = tmp22;
              } else {
                tmp20 = cResult[14];
              }
              if (cResult[15] === tmp5.info) {
                if (cResult[16] === tmp20) {
                  let tmp23 = cResult[17];
                }
                if (cResult[18] === tmp7.label) {
                  if (cResult[19] === tmp4) {
                    if (cResult[20] === tmp5.ctaContainer) {
                      if (cResult[21] === tmp14) {
                        if (cResult[22] === tmp16) {
                          if (cResult[23] === tmp23) {
                            let tmp27 = cResult[24];
                          }
                          return tmp27;
                        }
                      }
                    }
                  }
                }
                const obj4 = {
                  onPress: tmp14,
                  disabled: tmp4,
                  hitSlop: 16,
                  accessibilityRole: "button",
                  accessibilityLabel: tmp7.label,
                  style: tmp5.ctaContainer,
                  children: null,
                };
                const items = [tmp16, tmp23];
                obj4.children = items;
                const tmp30 = closure_8(closure_4, obj4);
                cResult[18] = tmp7.label;
                cResult[19] = tmp4;
                cResult[20] = tmp5.ctaContainer;
                class A {
                  constructor() {
                    obj = closure_0(closure_2[11]);
                    obj1 = {
                      adContentId: bounty.id,
                      adCreativeType: closure_0(closure_2[12]).AdCreativeType.BOUNTY,
                      cta: bounty.cta,
                    };
                    obj4 = {
                      content: closure_0(closure_2[13]).QuestContent.VIDEO_MODAL_ICON_END_CARD,
                      ctaContent: closure_0(closure_2[14]).QuestContentCTA.OPEN_GAME_LINK,
                      impressionId: closure_2(),
                      sourceQuestContent,
                    };
                    result = obj.openAdGameLinkDirectly(obj1, obj4);
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
            const tmp19 = closure_7(sourceQuestContent(tmp2[15]), obj6);
            cResult[10] = tmp5.image;
            cResult[11] = tmp15;
            cResult[12] = tmp19;
            tmp16 = tmp19;
          }
        }
      }
      class A {
        constructor() {
          obj = closure_0(closure_2[11]);
          obj1 = {
            adContentId: bounty.id,
            adCreativeType: closure_0(closure_2[12]).AdCreativeType.BOUNTY,
            cta: bounty.cta,
          };
          obj4 = {
            content: closure_0(closure_2[13]).QuestContent.VIDEO_MODAL_ICON_END_CARD,
            ctaContent: closure_0(closure_2[14]).QuestContentCTA.OPEN_GAME_LINK,
            impressionId: closure_2(),
            sourceQuestContent,
          };
          result = obj.openAdGameLinkDirectly(obj1, obj4);
          return;
        }
      }
      cResult[3] = bounty.cta;
      cResult[4] = bounty.id;
      cResult[5] = getQuestImpressionId;
      cResult[6] = sourceQuestContent;
      cResult[7] = A;
      const tmpResult = bounty(getQuestImpressionId[8]);
    }
  : (bounty) => {
      bounty = bounty.bounty;
      const sourceQuestContent = bounty.sourceQuestContent;
      let flag = bounty.disabled;
      if (flag === undefined) {
        flag = false;
      }
      let getQuestImpressionId;
      const tmp = closure_9();
      getQuestImpressionId = bounty(getQuestImpressionId[8]).useGetQuestImpressionId();
      let obj = bounty(getQuestImpressionId[8]);
      const bountyCtaInfo = bounty(getQuestImpressionId[9]).getBountyCtaInfo(bounty);
      let scaledImageUrl;
      if (null != bountyCtaInfo.iconImageUri) {
        const size = { assetUrl: bountyCtaInfo.iconImageUri, width: END_CARD_IMAGE_SIZE, height: END_CARD_IMAGE_SIZE };
        scaledImageUrl = tmp2(tmp3[10]).getScaledImageUrl(size);
        const tmp2Result = tmp2(tmp3[10]);
      }
      const items = [, , ,];
      ({ id: arr[0], cta: arr[1] } = bounty);
      items[2] = getQuestImpressionId;
      items[3] = sourceQuestContent;
      let callback;
      if (!flag) {
        callback = noop.useCallback(() => {
          const obj = QuestPlatformUtils;
          const obj2 = {
            adContentId: bounty.id,
            adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
            cta: bounty.cta,
          };
          const result = obj.openAdGameLinkDirectly(obj2, {
            content: QuestContent.QuestContent.VIDEO_MODAL_ICON_END_CARD,
            ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
            impressionId: getQuestImpressionId(),
            sourceQuestContent,
          });
        }, items);
      }
      const obj3 = {
        onPress: callback,
        disabled: flag,
        hitSlop: 16,
        accessibilityRole: "button",
        accessibilityLabel: bountyCtaInfo.label,
        style: tmp.ctaContainer,
        children: null,
      };
      const items1 = [
        closure_7(sourceQuestContent(getQuestImpressionId[15]), { source: { uri: scaledImageUrl }, style: tmp.image }),
      ];
      const obj5 = {
        style: tmp.info,
        children: closure_7(bounty(getQuestImpressionId[16]).Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: bountyCtaInfo.label,
        }),
      };
      items1[1] = closure_7(closure_5, obj5);
      obj3.children = items1;
      return closure_8(closure_4, obj3);
    };
