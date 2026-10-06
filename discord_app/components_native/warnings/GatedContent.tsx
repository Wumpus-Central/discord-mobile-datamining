// === Module 12332: GatedContent ===

// Module 12332 (GatedContent)
import nativeDefault from "native" /* 587 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8119 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { container: obj2, title: { textAlign: "center" }, description: { textAlign: "center" }, buttonGroup: { width: "100%", maxWidth: 400 } };
obj2 = { flex: 1, padding: 20, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, textAlign: "center" };
let closure_5 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((onDisagree) => {
  let agreement;
  let agreementButtonVariant;
  let description;
  let disagreement;
  let disagreementButtonVariant;
  let onAgree;
  let subtitle;
  let title;
  let obj = onAgree(onDisagree[5]);
  const cResult = obj.c(45);
  ({ title, subtitle, description, agreement, agreementButtonVariant, disagreement, disagreementButtonVariant, onAgree } = onDisagree);
  onDisagree = onDisagree.onDisagree;
  const modalType = onDisagree.modalType;
  const channelId = onDisagree.channelId;
  const guildId = onDisagree.guildId;
  let str = "primary";
  if (undefined !== agreementButtonVariant) {
    str = agreementButtonVariant;
  }
  let str2 = "secondary";
  if (undefined !== disagreementButtonVariant) {
    str2 = disagreementButtonVariant;
  }
  const tmp4 = closure_5();
  if (cResult[0] === channelId) {
    if (cResult[1] === guildId) {
      let tmp5;
      let tmp6;
      if (cResult[2] === modalType) {
        tmp5 = cResult[3];
        tmp6 = cResult[4];
      }
      const effect = modalType.useEffect(tmp5, tmp6);
      if (cResult[5] === channelId) {
        if (cResult[6] === guildId) {
          if (cResult[7] === modalType) {
            let tmp9;
            if (cResult[8] === onDisagree) {
              tmp9 = cResult[9];
            }
            if (cResult[10] === channelId) {
              if (cResult[11] === guildId) {
                if (cResult[12] === modalType) {
                  let tmp10;
                  if (cResult[13] === onAgree) {
                    tmp10 = cResult[14];
                  }
                  if (cResult[15] === agreement) {
                    if (cResult[16] === str) {
                      if (cResult[17] === tmp10) {
                        if (cResult[20] === disagreement) {
                          if (cResult[21] === str2) {
                            class G {
                              constructor() {
                                const obj = AgeVerificationAnalyticsUtils;
                                const result = obj.trackNsfwSpaceWarningModalClicked(AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalCta.NSFW_CHANNEL_AGREE_CTA, modalType, channelId, guildId);
                                if (onAgree != null) {
                                  onAgree();
                                }
                              }
                            }
                            const obj2 = { variant: "heading-xxl/bold", maxFontSizeMultiplier: 2, style: tmp4.title, children: title };
                            cResult[24] = tmp4.title;
                            cResult[25] = title;
                            cResult[26] = channelId(onAgree(onDisagree[8]).Text, obj2);
                            const tmp19 = channelId(onAgree(onDisagree[8]).Text, obj2);
                          }
                        }
                        class G {
                          constructor() {
                            const obj = AgeVerificationAnalyticsUtils;
                            const result = obj.trackNsfwSpaceWarningModalClicked(AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalCta.NSFW_CHANNEL_AGREE_CTA, modalType, channelId, guildId);
                            if (onAgree != null) {
                              onAgree();
                            }
                          }
                        }
                        const obj3 = { variant: str2, text: disagreement, onPress: tmp9 };
                        cResult[20] = disagreement;
                        cResult[21] = str2;
                        cResult[22] = tmp9;
                        cResult[23] = channelId(onAgree(onDisagree[7]).Button, obj3, "disagree");
                        const tmp15 = channelId(onAgree(onDisagree[7]).Button, obj3, "disagree");
                      }
                    }
                  }
                  class G {
                    constructor() {
                      const obj = AgeVerificationAnalyticsUtils;
                      const result = obj.trackNsfwSpaceWarningModalClicked(AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalCta.NSFW_CHANNEL_AGREE_CTA, modalType, channelId, guildId);
                      if (onAgree != null) {
                        onAgree();
                      }
                    }
                  }
                  let tmp12 = null;
                  if (null != agreement) {
                    tmp12 = null;
                    if (null != onAgree) {
                      const obj4 = { variant: null, onPress: tmp10, text: agreement };
                      class G {
                        constructor() {
                          const obj = AgeVerificationAnalyticsUtils;
                          const result = obj.trackNsfwSpaceWarningModalClicked(AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalCta.NSFW_CHANNEL_AGREE_CTA, modalType, channelId, guildId);
                          if (onAgree != null) {
                            onAgree();
                          }
                        }
                      }
                      tmp12 = channelId(tmp(tmp2[7]).Button, obj4, "agree");
                    }
                  }
                  cResult[15] = agreement;
                  cResult[16] = str;
                  cResult[17] = tmp10;
                  cResult[18] = onAgree;
                  cResult[19] = tmp12;
                }
              }
            }
            class G {
              constructor() {
                const obj = AgeVerificationAnalyticsUtils;
                const result = obj.trackNsfwSpaceWarningModalClicked(AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalCta.NSFW_CHANNEL_AGREE_CTA, modalType, channelId, guildId);
                if (onAgree != null) {
                  onAgree();
                }
              }
            }
            cResult[10] = channelId;
            cResult[11] = guildId;
            cResult[12] = modalType;
            cResult[13] = onAgree;
            cResult[14] = G;
            tmp10 = G;
          }
        }
      }
      const fn2 = function p() {
        const obj = AgeVerificationAnalyticsUtils;
        const result = obj.trackNsfwSpaceWarningModalClicked(AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalCta.NSFW_CHANNEL_DISAGREE_CTA, modalType, channelId, guildId);
        if (onDisagree != null) {
          onDisagree();
        }
      };
      cResult[5] = channelId;
      cResult[6] = guildId;
      cResult[7] = modalType;
      cResult[8] = onDisagree;
      cResult[9] = fn2;
      tmp9 = fn2;
    }
  }
  const fn = function s() {
    const obj = AgeVerificationAnalyticsUtils;
    const result = obj.trackNsfwSpaceWarningModalViewed(modalType, channelId, guildId);
  };
  const items = [modalType, channelId, guildId];
  cResult[0] = channelId;
  cResult[1] = guildId;
  cResult[2] = modalType;
  cResult[3] = fn;
  cResult[4] = items;
  tmp6 = items;
  tmp5 = fn;
}) : ((onAgree) => {
  let agreement;
  let agreementButtonVariant;
  let description;
  let disagreement;
  let disagreementButtonVariant;
  let items3;
  let subtitle;
  let title;
  ({ agreement, agreementButtonVariant } = onAgree);
  ({ title, subtitle, description } = onAgree);
  if (agreementButtonVariant === undefined) {
    agreementButtonVariant = "primary";
  }
  ({ disagreementButtonVariant, disagreement } = onAgree);
  if (disagreementButtonVariant === undefined) {
    disagreementButtonVariant = "secondary";
  }
  onAgree = onAgree.onAgree;
  const onDisagree = onAgree.onDisagree;
  const modalType = onAgree.modalType;
  const channelId = onAgree.channelId;
  const guildId = onAgree.guildId;
  const tmp = closure_5();
  const items = [modalType, channelId, guildId];
  const effect = modalType.useEffect(() => {
    const obj = AgeVerificationAnalyticsUtils;
    const result = obj.trackNsfwSpaceWarningModalViewed(modalType, channelId, guildId);
  }, items);
  const items1 = [onDisagree, modalType, channelId, guildId];
  const items2 = [onAgree, modalType, channelId, guildId];
  const callback = modalType.useCallback(() => {
    const obj = AgeVerificationAnalyticsUtils;
    const result = obj.trackNsfwSpaceWarningModalClicked(AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalCta.NSFW_CHANNEL_DISAGREE_CTA, modalType, channelId, guildId);
    if (onDisagree != null) {
      onDisagree();
    }
  }, items1);
  let tmp5 = null;
  if (null != agreement) {
    tmp5 = null;
    if (null != onAgree) {
      let obj = { variant: agreementButtonVariant, onPress: tmp4, text: agreement };
      tmp5 = channelId(onAgree(onDisagree[7]).Button, obj, "agree");
    }
  }
  const tmp10 = channelId(onAgree(onDisagree[7]).Button, { variant: disagreementButtonVariant, text: disagreement, onPress: callback }, "disagree");
  const obj2 = { spacing: 16, style: tmp.container, children: null };
  const Stack = onAgree(onDisagree[9]).Stack;
  const obj3 = { align: "center", children: items3 };
  const Stack2 = onAgree(onDisagree[9]).Stack;
  items3 = [, , ];
  const obj4 = { variant: "heading-xxl/bold", maxFontSizeMultiplier: 2, style: tmp.title, children: title };
  items3[0] = channelId(onAgree(onDisagree[8]).Text, obj4);
  items3[1] = subtitle;
  const obj5 = { color: "text-muted", variant: "text-md/medium", style: tmp.description, maxFontSizeMultiplier: 2, children: description };
  items3[2] = channelId(onAgree(onDisagree[8]).Text, obj5);
  const items4 = [guildId(Stack2, obj3), ];
  const obj6 = { style: tmp.buttonGroup, children: null };
  const tmp11 = guildId;
  const tmp9 = channelId;
  if ("primary" === disagreementButtonVariant) {
    let items6;
    if ("primary" !== agreementButtonVariant) {
      const items5 = [tmp10, tmp5];
      items6 = items5;
    }
    obj6.children = items6;
    items4[1] = tmp9(tmp12, obj6);
    obj2.children = items4;
    return tmp11(Stack, obj2);
  }
  items6 = [tmp5, tmp10];
});
let result = size.fileFinishedImporting("components_native/warnings/GatedContent.tsx");

export default tmp3;