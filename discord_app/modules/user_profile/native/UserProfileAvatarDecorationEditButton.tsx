// === Module 14700: UserProfileAvatarDecorationEditButton ===

// Module 14700 (UserProfileAvatarDecorationEditButton)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import avatar_decorations_AvatarDecorationUtils from "avatar_decorations/AvatarDecorationUtils" /* 8257 */;
import CutoutableAvatarDecorationDefault from "CutoutableAvatarDecoration" /* 8985 */;
import _modDef13308 from "module_13308" /* 13308 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const COLLECTIBLES_PREVIEW_SIZE = fn(6891).COLLECTIBLES_PREVIEW_SIZE;
const NOOP = fn(1096).NOOP;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { previewContainer: null, noneIcon: null };
let size = { position: "relative", height: COLLECTIBLES_PREVIEW_SIZE, width: COLLECTIBLES_PREVIEW_SIZE, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
obj2.previewContainer = size;
obj2.noneIcon = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAvatarDecorationEditButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileAvatarDecorationEditButton(user) {
  let UserProfileEditFormButton = user;
  let tmp = isTryItOut;
  const cResult = user(isTryItOut[9]).c(39);
  user = user.user;
  const guildId = user.guildId;
  ({ pendingAvatarDecoration, isTryItOut } = user);
  const tmp3 = closure_10();
  closure_3 = tmp3;
  let tmp4 = null != guildId;
  closure_4 = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    if (cResult[2] === tmp4) {
      if (cResult[3] === user.id) {
        let tmp7 = cResult[4];
      }
      let result = UserProfileEditFormButton(tmp[10]);
      const stateFromStores = result.useStateFromStores(first, tmp7);
      let avatarDecoration = user.avatarDecoration;
      let avatarDecoration1;
      if (stateFromStores != null) {
        avatarDecoration1 = stateFromStores.avatarDecoration;
      }
      if (cResult[5] === guildId) {
        if (cResult[6] === pendingAvatarDecoration) {
          if (cResult[7] === avatarDecoration) {
            if (cResult[8] === avatarDecoration1) {
              let tmp10 = cResult[9];
            }
            const tmp13 = guildId(tmp[12])(tmp10);
            avatarDecoration = tmp13;
            const result1 = UserProfileEditFormButton(tmp[13]);
            let skuId;
            if (tmp13 != null) {
              skuId = tmp13.skuId;
            }
            const fetchCollectiblesProduct = result1.useFetchCollectiblesProduct(skuId);
            const product = fetchCollectiblesProduct.product;
            GuildMemberStore = product;
            if (cResult[10] === guildId) {
              if (cResult[11] === user) {
                let tmp17 = cResult[12];
              }
              const result2 = UserProfileEditFormButton(tmp[11]);
              let userAvatarDecoration = result2.useUserAvatarDecoration(tmp17);
              if (undefined !== pendingAvatarDecoration) {
                userAvatarDecoration = pendingAvatarDecoration;
              }
              if (cResult[13] === userAvatarDecoration) {
                if (cResult[14] === guildId) {
                  if (cResult[15] === isTryItOut) {
                    if (cResult[16] === user) {
                      let tmp19 = cResult[17];
                    }
                    if (cResult[18] === tmp13) {
                      if (cResult[19] === product) {
                        if (cResult[20] === tmp3.noneIcon) {
                          if (cResult[21] === tmp3.previewContainer) {
                            let tmp20 = cResult[22];
                          }
                          if (tmp4) {
                            tmp4 = null == userAvatarDecoration;
                          }
                          if (cResult[23] === tmp4) {
                            let name;
                            if (product != null) {
                              name = product.name;
                            }
                            if (cResult[24] === name) {
                              let tmp22 = cResult[25];
                            }
                            if (tmp16) {
                              const _Symbol2 = Symbol;
                              if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                                const intl4 = UserProfileEditFormButton(tmp[18]).intl;
                                const stringResult = intl4.string(UserProfileEditFormButton(tmp[18]).t["7v0T9P"]);
                                const intl5 = UserProfileEditFormButton(tmp[18]).intl;
                                const stringResult1 = intl5.string(UserProfileEditFormButton(tmp[18]).t.MKDeyL);
                                class O {
                                  constructor() {
                                    obj = closure_0(closure_2[14]);
                                    obj1 = { user, guildId, currentAvatarDecoration: pendingAvatarDecoration, isTryItOut };
                                    result = obj.openAvatarDecorationActionSheet(obj1);
                                    return;
                                  }
                                }
                                cResult[26] = stringResult;
                                cResult[27] = stringResult1;
                                let tmp34 = stringResult1;
                                let tmp33 = stringResult;
                              } else {
                                tmp33 = cResult[26];
                                tmp34 = cResult[27];
                              }
                              const _Symbol3 = Symbol;
                              if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                                UserProfileEditFormButton = UserProfileEditFormButton(tmp[19]).UserProfileEditFormButton;
                                let obj2 = { label: tmp33, buttonText: tmp34, onPress: null, leading: null, loading: true, disabled: true, hideArrow: true };
                                class O {
                                  constructor() {
                                    obj = closure_0(closure_2[14]);
                                    obj1 = { user, guildId, currentAvatarDecoration: pendingAvatarDecoration, isTryItOut };
                                    result = obj.openAvatarDecorationActionSheet(obj1);
                                    return;
                                  }
                                }
                                tmp34 = closure_4;
                                obj2.leading = <closure_4 animating size="large" />;
                                tmp = <UserProfileEditFormButton label={tmp33} buttonText={tmp34} onPress={null} leading={null} loading disabled hideArrow />;
                                cResult[28] = tmp;
                              }
                              class O {
                                constructor() {
                                  obj = closure_0(closure_2[14]);
                                  obj1 = { user, guildId, currentAvatarDecoration: pendingAvatarDecoration, isTryItOut };
                                  result = obj.openAvatarDecorationActionSheet(obj1);
                                  return;
                                }
                              }
                            } else {
                              const _Symbol = Symbol;
                              if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                                const intl3 = UserProfileEditFormButton(tmp[18]).intl;
                                const stringResult2 = intl3.string(UserProfileEditFormButton(tmp[18]).t["7v0T9P"]);
                                cResult[29] = stringResult2;
                                let tmp26 = stringResult2;
                              } else {
                                tmp26 = cResult[29];
                              }
                              if (cResult[30] !== tmp22) {
                                let obj3 = { text: tmp22 };
                                cResult[30] = tmp22;
                                cResult[31] = obj3;
                                class O {
                                  constructor() {
                                    obj = closure_0(closure_2[14]);
                                    obj1 = { user, guildId, currentAvatarDecoration: pendingAvatarDecoration, isTryItOut };
                                    result = obj.openAvatarDecorationActionSheet(obj1);
                                    return;
                                  }
                                }
                              }
                              if (cResult[32] !== tmp20) {
                                const tmp20Result = tmp20();
                                cResult[32] = tmp20;
                                cResult[33] = tmp20Result;
                                let tmp29 = tmp20Result;
                              } else {
                                tmp29 = cResult[33];
                              }
                              if (cResult[34] === tmp19) {
                                if (cResult[35] === tmp22) {
                                  if (cResult[36] === tmp28) {
                                    if (cResult[37] === tmp29) {
                                      let tmp31 = cResult[38];
                                    }
                                    return tmp31;
                                  }
                                }
                              }
                              class O {
                                constructor() {
                                  obj = closure_0(closure_2[14]);
                                  obj1 = { user, guildId, currentAvatarDecoration: pendingAvatarDecoration, isTryItOut };
                                  result = obj.openAvatarDecorationActionSheet(obj1);
                                  return;
                                }
                              }
                              const obj4 = { label: tmp26, buttonText: tmp22, accessibilityValue: tmp28, onPress: tmp19, leading: tmp29 };
                              const tmp32 = jsx(UserProfileEditFormButton(tmp[19]).UserProfileEditFormButton, { label: tmp26, buttonText: tmp22, accessibilityValue: tmp28, onPress: tmp19, leading: tmp29 });
                              cResult[34] = tmp19;
                              cResult[35] = tmp22;
                              cResult[36] = tmp28;
                              cResult[37] = tmp29;
                              cResult[38] = tmp32;
                              tmp31 = tmp32;
                            }
                          }
                          let name1;
                          if (product != null) {
                            name1 = product.name;
                          }
                          if (name1 == null) {
                            const intl = UserProfileEditFormButton(tmp[18]).intl;
                            name1 = intl.string(UserProfileEditFormButton(tmp[18]).t.PoWNfe);
                          }
                          class O {
                            constructor() {
                              obj = closure_0(closure_2[14]);
                              obj1 = { user, guildId, currentAvatarDecoration: pendingAvatarDecoration, isTryItOut };
                              result = obj.openAvatarDecorationActionSheet(obj1);
                              return;
                            }
                          }
                          if (tmp4) {
                            const intl2 = UserProfileEditFormButton(tmp[18]).intl;
                            const obj5 = { label: name1 };
                            const formatToPlainStringResult = intl2.formatToPlainString(UserProfileEditFormButton(tmp[18]).t.ep5D4i, obj5);
                          }
                          cResult[23] = tmp4;
                          let name2;
                          if (product != null) {
                            name2 = product.name;
                          }
                          cResult[24] = name2;
                          cResult[25] = formatToPlainStringResult;
                          tmp22 = formatToPlainStringResult;
                        }
                      }
                    }
                    function renderPreviewImage() {
                      if (null != product) {
                        const obj2 = { style: closure_3.previewContainer, children: null };
                        const obj3 = { avatarDecoration, size: COLLECTIBLES_PREVIEW_SIZE - 2 * nativeDefault.space.PX_4, animate: false };
                        obj2.children = jsx(CutoutableAvatarDecorationDefault, { avatarDecoration, size: COLLECTIBLES_PREVIEW_SIZE - 2 * nativeDefault.space.PX_4, animate: false });
                        let tmp7 = <hasOwnProperty style={closure_3.previewContainer}>{null}</hasOwnProperty>;
                      } else {
                        const obj = { source: _modDef13308, style: closure_3.noneIcon };
                        tmp7 = jsx(native.Icon, { source: _modDef13308, style: closure_3.noneIcon });
                      }
                      return tmp7;
                    }
                    cResult[18] = tmp13;
                    class O {
                      constructor() {
                        obj = closure_0(closure_2[14]);
                        obj1 = { user, guildId, currentAvatarDecoration: pendingAvatarDecoration, isTryItOut };
                        result = obj.openAvatarDecorationActionSheet(obj1);
                        return;
                      }
                    }
                    cResult[20] = tmp3.noneIcon;
                    cResult[21] = tmp3.previewContainer;
                    cResult[22] = renderPreviewImage;
                    tmp20 = renderPreviewImage;
                  }
                }
              }
              class O {
                constructor() {
                  obj = closure_0(closure_2[14]);
                  obj1 = { user, guildId, currentAvatarDecoration: pendingAvatarDecoration, isTryItOut };
                  result = obj.openAvatarDecorationActionSheet(obj1);
                  return;
                }
              }
              cResult[13] = userAvatarDecoration;
              cResult[14] = guildId;
              cResult[15] = isTryItOut;
              cResult[16] = user;
              cResult[17] = O;
              tmp19 = O;
            }
            const obj6 = { user, guildId };
            cResult[10] = guildId;
            cResult[11] = user;
            cResult[12] = obj6;
            tmp17 = obj6;
          }
        }
      }
      const result3 = UserProfileEditFormButton(tmp[11]);
      const obj7 = { pendingValue: pendingAvatarDecoration, userValue: avatarDecoration, guildValue: avatarDecoration1, guildId };
      const profilePreviewValue = result3.getProfilePreviewValue(obj7);
      cResult[5] = guildId;
      cResult[6] = pendingAvatarDecoration;
      cResult[7] = avatarDecoration;
      cResult[8] = avatarDecoration1;
      cResult[9] = profilePreviewValue;
      tmp10 = profilePreviewValue;
    }
  }
  class I {
    constructor() {
      member = null;
      if (closure_4) {
        tmp2 = closure_6;
        tmp3 = guildId;
        tmp4 = user;
        member = closure_6.getMember(guildId, user.id);
      }
      return member;
    }
  }
  cResult[1] = guildId;
  cResult[2] = tmp4;
  cResult[3] = user.id;
  cResult[4] = I;
  tmp7 = I;
  let obj = user(isTryItOut[9]);
}) : (function UserProfileAvatarDecorationEditButton(user) {
  user = user.user;
  const guildId = user.guildId;
  ({ pendingAvatarDecoration, isTryItOut } = user);
  let userAvatarDecoration;
  const tmp = closure_10();
  noop = tmp2;
  const items = [GuildMemberStore];
  const stateFromStores = user(isTryItOut[10]).useStateFromStores(items, () => {
    let member = null;
    if (closure_3) {
      member = GuildMemberStore.getMember(guildId, user.id);
    }
    return member;
  });
  const obj = user(isTryItOut[10]);
  const tmp7 = guildId(isTryItOut[12]);
  const obj3 = { pendingValue: pendingAvatarDecoration, userValue: user.avatarDecoration, guildValue: null, guildId: null };
  let avatarDecoration;
  if (stateFromStores != null) {
    avatarDecoration = stateFromStores.avatarDecoration;
  }
  obj3.guildValue = avatarDecoration;
  obj3.guildId = guildId;
  const tmp7Result = tmp7(user(isTryItOut[11]).getProfilePreviewValue(obj3));
  const obj2 = user(isTryItOut[11]);
  let skuId;
  if (tmp7Result != null) {
    skuId = tmp7Result.skuId;
  }
  const fetchCollectiblesProduct = user(isTryItOut[13]).useFetchCollectiblesProduct(skuId);
  ({ product, isFetching } = fetchCollectiblesProduct);
  const tmp3Result = user(isTryItOut[13]);
  userAvatarDecoration = user(isTryItOut[11]).useUserAvatarDecoration({ user, guildId });
  if (undefined !== pendingAvatarDecoration) {
    userAvatarDecoration = pendingAvatarDecoration;
  }
  const items1 = [user, guildId, userAvatarDecoration, isTryItOut];
  let name;
  const callback = noop.useCallback(() => {
    const result = avatar_decorations_AvatarDecorationUtils.openAvatarDecorationActionSheet({ user, guildId, currentAvatarDecoration: userAvatarDecoration, isTryItOut });
  }, items1);
  if (product != null) {
    name = product.name;
  }
  if (name == null) {
    const intl = tmp3(isTryItOut[18]).intl;
    name = intl.string(tmp3(isTryItOut[18]).t.PoWNfe);
  }
  let formatToPlainStringResult = name;
  if (null != guildId) {
    formatToPlainStringResult = name;
    if (null == userAvatarDecoration) {
      const intl2 = tmp3(isTryItOut[18]).intl;
      const obj4 = { label: name };
      formatToPlainStringResult = intl2.formatToPlainString(tmp3(isTryItOut[18]).t.ep5D4i, obj4);
    }
  }
  if (isFetching) {
    const obj5 = { label: null, buttonText: null, onPress: null, leading: null, loading: true, disabled: true, hideArrow: true };
    const intl4 = tmp3(isTryItOut[18]).intl;
    obj5.label = intl4.string(tmp3(isTryItOut[18]).t["7v0T9P"]);
    const intl5 = tmp3(isTryItOut[18]).intl;
    obj5.buttonText = intl5.string(tmp3(isTryItOut[18]).t.MKDeyL);
    obj5.onPress = NOOP;
    obj5.leading = <userAvatarDecoration animating size="large" />;
    let obj6 = obj5;
  } else {
    obj6 = { label: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null };
    const intl3 = tmp3(isTryItOut[18]).intl;
    obj6.label = intl3.string(tmp3(isTryItOut[18]).t["7v0T9P"]);
    obj6.buttonText = formatToPlainStringResult;
    const obj7 = { text: formatToPlainStringResult };
    obj6.accessibilityValue = obj7;
    obj6.onPress = callback;
    if (null != product) {
      const obj8 = { style: tmp.previewContainer, children: null };
      const obj9 = { avatarDecoration: tmp7Result, size: COLLECTIBLES_PREVIEW_SIZE - 2 * tmp6(isTryItOut[7]).space.PX_4, animate: false };
      obj8.children = jsx(tmp6(isTryItOut[15]), { avatarDecoration: tmp7Result, size: COLLECTIBLES_PREVIEW_SIZE - 2 * tmp6(isTryItOut[7]).space.PX_4, animate: false });
      let tmp16Result = <closure_5 style={tmp.previewContainer}>{null}</closure_5>;
      const tmp6Result = tmp6(isTryItOut[15]);
    } else {
      const obj10 = { source: tmp6(isTryItOut[17]), style: tmp.noneIcon };
      tmp16Result = jsx(tmp3(isTryItOut[16]).Icon, { source: tmp6(isTryItOut[17]), style: tmp.noneIcon });
    }
    obj6.leading = tmp16Result;
  }
  return jsx(user(isTryItOut[19]).UserProfileEditFormButton, obj6);
});