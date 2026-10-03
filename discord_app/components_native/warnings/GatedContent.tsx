// === Module 12317: GatedContent ===

// Module 12317 (GatedContent)
import nativeDefault from "native" /* 587 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8086 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { flex: 1, padding: 20, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, textAlign: "center" }, title: { textAlign: "center" }, description: { textAlign: "center" }, buttonGroup: { width: "100%", maxWidth: 400 } };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, padding: 20, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, textAlign: "center" };
const size = fn(2);
let result = size.fileFinishedImporting("components_native/warnings/GatedContent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onDisagree) => {
  const cResult = onAgree(onDisagree[5]).c(45);
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
      if (cResult[2] === modalType) {
        let tmp5 = cResult[3];
        let tmp6 = cResult[4];
      }
      const effect = modalType.useEffect(tmp5, tmp6);
      if (cResult[5] === channelId) {
        if (cResult[6] === guildId) {
          if (cResult[7] === modalType) {
            if (cResult[8] === onDisagree) {
              let tmp9 = cResult[9];
            }
            if (cResult[10] === channelId) {
              if (cResult[11] === guildId) {
                if (cResult[12] === modalType) {
                  if (cResult[13] === onAgree) {
                    let tmp10 = cResult[14];
                  }
                  if (cResult[15] === agreement) {
                    if (cResult[16] === str) {
                      if (cResult[17] === tmp10) {
                        if (cResult[20] === disagreement) {
                          if (cResult[21] === str2) {
                            class G {
                              constructor() {
                                obj = closure_0(closure_1[6]);
                                result = obj.trackNsfwSpaceWarningModalClicked(closure_0(closure_1[6]).NsfwSpaceWarningModalCta.NSFW_CHANNEL_AGREE_CTA, modalType, channelId, guildId);
                                if (onAgree != null) {
                                  tmp2 = onAgree();
                                }
                                return;
                              }
                            }
                            const obj2 = { variant: "heading-xxl/bold", maxFontSizeMultiplier: 2, style: tmp4.title, children: title };
                            const tmp19 = channelId(tmp(tmp2[8]).Text, obj2);
                            cResult[24] = tmp4.title;
                            cResult[25] = title;
                            cResult[26] = tmp19;
                          }
                        }
                        class G {
                          constructor() {
                            obj = closure_0(closure_1[6]);
                            result = obj.trackNsfwSpaceWarningModalClicked(closure_0(closure_1[6]).NsfwSpaceWarningModalCta.NSFW_CHANNEL_AGREE_CTA, modalType, channelId, guildId);
                            if (onAgree != null) {
                              tmp2 = onAgree();
                            }
                            return;
                          }
                        }
                        const obj3 = { variant: str2, text: disagreement, onPress: tmp9 };
                        const tmp15 = channelId(tmp(tmp2[7]).Button, obj3, "disagree");
                        cResult[20] = disagreement;
                        cResult[21] = str2;
                        cResult[22] = tmp9;
                        cResult[23] = tmp15;
                      }
                    }
                  }
                  class G {
                    constructor() {
                      obj = closure_0(closure_1[6]);
                      result = obj.trackNsfwSpaceWarningModalClicked(closure_0(closure_1[6]).NsfwSpaceWarningModalCta.NSFW_CHANNEL_AGREE_CTA, modalType, channelId, guildId);
                      if (onAgree != null) {
                        tmp2 = onAgree();
                      }
                      return;
                    }
                  }
                  let tmp12 = null;
                  if (null != agreement) {
                    tmp12 = null;
                    if (null != onAgree) {
                      const obj4 = { variant: null, onPress: null, text: null };
                      class G {
                        constructor() {
                          obj = closure_0(closure_1[6]);
                          result = obj.trackNsfwSpaceWarningModalClicked(closure_0(closure_1[6]).NsfwSpaceWarningModalCta.NSFW_CHANNEL_AGREE_CTA, modalType, channelId, guildId);
                          if (onAgree != null) {
                            tmp2 = onAgree();
                          }
                          return;
                        }
                      }
                      obj4.onPress = tmp10;
                      obj4.text = agreement;
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
                obj = closure_0(closure_1[6]);
                result = obj.trackNsfwSpaceWarningModalClicked(closure_0(closure_1[6]).NsfwSpaceWarningModalCta.NSFW_CHANNEL_AGREE_CTA, modalType, channelId, guildId);
                if (onAgree != null) {
                  tmp2 = onAgree();
                }
                return;
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
        const result = AgeVerificationAnalyticsUtils.trackNsfwSpaceWarningModalClicked(AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalCta.NSFW_CHANNEL_DISAGREE_CTA, modalType, channelId, guildId);
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
    const result = AgeVerificationAnalyticsUtils.trackNsfwSpaceWarningModalViewed(modalType, channelId, guildId);
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
    const result = AgeVerificationAnalyticsUtils.trackNsfwSpaceWarningModalViewed(modalType, channelId, guildId);
  }, items);
  const items1 = [onDisagree, modalType, channelId, guildId];
  const items2 = [onAgree, modalType, channelId, guildId];
  const callback = modalType.useCallback(() => {
    const result = AgeVerificationAnalyticsUtils.trackNsfwSpaceWarningModalClicked(AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalCta.NSFW_CHANNEL_DISAGREE_CTA, modalType, channelId, guildId);
    if (onDisagree != null) {
      onDisagree();
    }
  }, items1);
  let tmp5 = null;
  if (null != agreement) {
    tmp5 = null;
    if (null != onAgree) {
      const obj = { variant: agreementButtonVariant, onPress: tmp4, text: agreement };
      tmp5 = channelId(onAgree(onDisagree[7]).Button, obj, "agree");
    }
  }
  const tmp10 = channelId(onAgree(onDisagree[7]).Button, { variant: disagreementButtonVariant, text: disagreement, onPress: callback }, "disagree");
  const obj2 = { spacing: 16, style: tmp.container, children: null };
  const obj3 = { align: "center", children: null };
  const items3 = [channelId(onAgree(onDisagree[8]).Text, { variant: "heading-xxl/bold", maxFontSizeMultiplier: 2, style: tmp.title, children: title }), subtitle, channelId(onAgree(onDisagree[8]).Text, { color: "text-muted", variant: "text-md/medium", style: tmp.description, maxFontSizeMultiplier: 2, children: description })];
  obj3.children = items3;
  const items4 = [guildId(onAgree(onDisagree[9]).Stack, obj3), ];
  const obj6 = { style: tmp.buttonGroup, children: null };
  if ("primary" === disagreementButtonVariant) {
    if ("primary" !== agreementButtonVariant) {
      const items5 = [tmp10, tmp5];
      let items6 = items5;
    }
    obj6.children = items6;
    items4[1] = channelId(tmp12, obj6);
    obj2.children = items4;
    return guildId(onAgree(onDisagree[9]).Stack, obj2);
  }
  items6 = [tmp5, tmp10];
});