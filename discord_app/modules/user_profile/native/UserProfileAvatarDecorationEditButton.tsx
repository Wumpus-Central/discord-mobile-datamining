// discord_app/modules/user_profile/native/UserProfileAvatarDecorationEditButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import avatar_decorations_AvatarDecorationUtils from "../../collectibles/avatar_decorations/native/AvatarDecorationUtils.tsx";
import CutoutableAvatarDecorationDefault from "../../collectibles/native/components/CutoutableAvatarDecoration.tsx";
import _modDef13030 from "../../../../_runtime/metro/13030__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const COLLECTIBLES_PREVIEW_SIZE = fn(6714).COLLECTIBLES_PREVIEW_SIZE;
const NOOP = fn(1096).NOOP;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = { previewContainer: null, noneIcon: null };
let size = {
  position: "relative",
  height: COLLECTIBLES_PREVIEW_SIZE,
  width: COLLECTIBLES_PREVIEW_SIZE,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.xs,
  overflow: "hidden",
};
obj2.previewContainer = size;
obj2.noneIcon = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAvatarDecorationEditButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      const cResult = user(isTryItOut[9]).c(39);
      user = user.user;
      const guildId = user.guildId;
      ({ pendingAvatarDecoration, isTryItOut } = user);
      const tmp4 = closure_10();
      noop = tmp4;
      let tmp5 = null != guildId;
      closure_4 = tmp5;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildMemberStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === guildId) {
        if (cResult[2] === tmp5) {
          if (cResult[3] === user.id) {
            let tmp8 = cResult[4];
          }
          const stateFromStores = tmp(tmp2[10]).useStateFromStores(first, tmp8);
          avatarDecoration = user.avatarDecoration;
          let avatarDecoration1;
          if (stateFromStores != null) {
            avatarDecoration1 = stateFromStores.avatarDecoration;
          }
          if (cResult[5] === guildId) {
            if (cResult[6] === pendingAvatarDecoration) {
              if (cResult[7] === avatarDecoration) {
                if (cResult[8] === avatarDecoration1) {
                  let tmp11 = cResult[9];
                }
                let tmp14 = guildId(tmp2[12])(tmp11);
                avatarDecoration = tmp14;
                let skuId;
                if (tmp14 != null) {
                  skuId = tmp14.skuId;
                }
                const fetchCollectiblesProduct = tmp(tmp2[13]).useFetchCollectiblesProduct(skuId);
                const product = fetchCollectiblesProduct.product;
                GuildMemberStore = product;
                if (cResult[10] === guildId) {
                  if (cResult[11] === user) {
                    let tmp17 = cResult[12];
                  }
                  let userAvatarDecoration = tmp(tmp2[11]).useUserAvatarDecoration(tmp17);
                  if (undefined !== pendingAvatarDecoration) {
                    userAvatarDecoration = pendingAvatarDecoration;
                  }
                  if (cResult[13] === userAvatarDecoration) {
                    if (cResult[14] === guildId) {
                      if (cResult[15] === isTryItOut) {
                        if (cResult[18] === tmp14) {
                          if (cResult[19] === product) {
                            if (cResult[20] === tmp4.noneIcon) {
                              if (tmp5) {
                                tmp5 = null == userAvatarDecoration;
                              }
                              class M {
                                constructor() {
                                  if (null != product) {
                                    tmp8 = jsx;
                                    tmp9 = View;
                                    obj1 = { style: null, children: null };
                                    tmp10 = closure_3;
                                    obj1.style = closure_3.previewContainer;
                                    tmp11 = jsx;
                                    tmp12 = closure_1;
                                    tmp13 = closure_2;
                                    obj4 = { avatarDecoration: null, size: null, animate: false };
                                    tmp15 = closure_5;
                                    obj4.avatarDecoration = closure_5;
                                    tmp16 = COLLECTIBLES_PREVIEW_SIZE;
                                    tmp17 = closure_1;
                                    tmp18 = closure_2;
                                    tmp14 = closure_1(closure_2[15]);
                                    num = 2;
                                    obj4.size = COLLECTIBLES_PREVIEW_SIZE - 2 * closure_1(closure_2[7]).space.PX_4;
                                    obj1.children = jsx(tmp14, obj4);
                                    tmp7 = jsx(View, obj1);
                                  } else {
                                    tmp = jsx;
                                    tmp2 = closure_0;
                                    tmp3 = closure_2;
                                    obj = { source: null, style: null };
                                    tmp4 = closure_1;
                                    tmp5 = closure_2;
                                    obj.source = closure_1(closure_2[17]);
                                    tmp6 = closure_3;
                                    obj.style = closure_3.noneIcon;
                                    tmp7 = jsx(closure_0(closure_2[16]).Icon, obj);
                                  }
                                  return tmp7;
                                }
                              }
                              let name;
                              if (product != null) {
                                name = product.name;
                              }
                              if (name == null) {
                                const string = tmp(tmp2[18]).intl.string;
                                class M {
                                  constructor() {
                                    if (null != product) {
                                      tmp8 = jsx;
                                      tmp9 = View;
                                      obj1 = { style: null, children: null };
                                      tmp10 = closure_3;
                                      obj1.style = closure_3.previewContainer;
                                      tmp11 = jsx;
                                      tmp12 = closure_1;
                                      tmp13 = closure_2;
                                      obj4 = { avatarDecoration: null, size: null, animate: false };
                                      tmp15 = closure_5;
                                      obj4.avatarDecoration = closure_5;
                                      tmp16 = COLLECTIBLES_PREVIEW_SIZE;
                                      tmp17 = closure_1;
                                      tmp18 = closure_2;
                                      tmp14 = closure_1(closure_2[15]);
                                      num = 2;
                                      obj4.size = COLLECTIBLES_PREVIEW_SIZE - 2 * closure_1(closure_2[7]).space.PX_4;
                                      obj1.children = jsx(tmp14, obj4);
                                      tmp7 = jsx(View, obj1);
                                    } else {
                                      tmp = jsx;
                                      tmp2 = closure_0;
                                      tmp3 = closure_2;
                                      obj = { source: null, style: null };
                                      tmp4 = closure_1;
                                      tmp5 = closure_2;
                                      obj.source = closure_1(closure_2[17]);
                                      tmp6 = closure_3;
                                      obj.style = closure_3.noneIcon;
                                      tmp7 = jsx(closure_0(closure_2[16]).Icon, obj);
                                    }
                                    return tmp7;
                                  }
                                }
                              }
                              let formatToPlainStringResult = name;
                              if (tmp5) {
                                const intl = tmp(tmp2[18]).intl;
                                class M {
                                  constructor() {
                                    if (null != product) {
                                      tmp8 = jsx;
                                      tmp9 = View;
                                      obj1 = { style: null, children: null };
                                      tmp10 = closure_3;
                                      obj1.style = closure_3.previewContainer;
                                      tmp11 = jsx;
                                      tmp12 = closure_1;
                                      tmp13 = closure_2;
                                      obj4 = { avatarDecoration: null, size: null, animate: false };
                                      tmp15 = closure_5;
                                      obj4.avatarDecoration = closure_5;
                                      tmp16 = COLLECTIBLES_PREVIEW_SIZE;
                                      tmp17 = closure_1;
                                      tmp18 = closure_2;
                                      tmp14 = closure_1(closure_2[15]);
                                      num = 2;
                                      obj4.size = COLLECTIBLES_PREVIEW_SIZE - 2 * closure_1(closure_2[7]).space.PX_4;
                                      obj1.children = jsx(tmp14, obj4);
                                      tmp7 = jsx(View, obj1);
                                    } else {
                                      tmp = jsx;
                                      tmp2 = closure_0;
                                      tmp3 = closure_2;
                                      obj = { source: null, style: null };
                                      tmp4 = closure_1;
                                      tmp5 = closure_2;
                                      obj.source = closure_1(closure_2[17]);
                                      tmp6 = closure_3;
                                      obj.style = closure_3.noneIcon;
                                      tmp7 = jsx(closure_0(closure_2[16]).Icon, obj);
                                    }
                                    return tmp7;
                                  }
                                }
                                tmp24[0] = name;
                                formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[18]).t.ep5D4i, tmp24);
                              }
                              cResult[23] = tmp5;
                              let name1;
                              if (product != null) {
                                name1 = product.name;
                              }
                              cResult[24] = name1;
                              cResult[25] = formatToPlainStringResult;
                            }
                          }
                        }
                        class M {
                          constructor() {
                            if (null != product) {
                              tmp8 = jsx;
                              tmp9 = View;
                              obj1 = { style: null, children: null };
                              tmp10 = closure_3;
                              obj1.style = closure_3.previewContainer;
                              tmp11 = jsx;
                              tmp12 = closure_1;
                              tmp13 = closure_2;
                              obj4 = { avatarDecoration: null, size: null, animate: false };
                              tmp15 = closure_5;
                              obj4.avatarDecoration = closure_5;
                              tmp16 = COLLECTIBLES_PREVIEW_SIZE;
                              tmp17 = closure_1;
                              tmp18 = closure_2;
                              tmp14 = closure_1(closure_2[15]);
                              num = 2;
                              obj4.size = COLLECTIBLES_PREVIEW_SIZE - 2 * closure_1(closure_2[7]).space.PX_4;
                              obj1.children = jsx(tmp14, obj4);
                              tmp7 = jsx(View, obj1);
                            } else {
                              tmp = jsx;
                              tmp2 = closure_0;
                              tmp3 = closure_2;
                              obj = { source: null, style: null };
                              tmp4 = closure_1;
                              tmp5 = closure_2;
                              obj.source = closure_1(closure_2[17]);
                              tmp6 = closure_3;
                              obj.style = closure_3.noneIcon;
                              tmp7 = jsx(closure_0(closure_2[16]).Icon, obj);
                            }
                            return tmp7;
                          }
                        }
                        cResult[18] = tmp14;
                        cResult[19] = product;
                        cResult[20] = tmp4.noneIcon;
                        cResult[21] = tmp4.previewContainer;
                        cResult[22] = M;
                      }
                    }
                  }
                  const fn = function x() {
                    const result = avatar_decorations_AvatarDecorationUtils.openAvatarDecorationActionSheet({
                      user,
                      guildId,
                      currentAvatarDecoration: userAvatarDecoration,
                      isTryItOut,
                    });
                  };
                  cResult[13] = userAvatarDecoration;
                  cResult[14] = guildId;
                  cResult[15] = isTryItOut;
                  cResult[16] = user;
                  cResult[17] = fn;
                  const tmpResult5 = tmp(tmp2[11]);
                }
                let obj2 = { user, guildId };
                cResult[10] = guildId;
                cResult[11] = user;
                cResult[12] = obj2;
                tmp17 = obj2;
                const tmpResult4 = tmp(tmp2[13]);
              }
            }
          }
          const tmpResult = tmp(tmp2[10]);
          let obj3 = {
            pendingValue: pendingAvatarDecoration,
            userValue: avatarDecoration,
            guildValue: avatarDecoration1,
            guildId,
          };
          const profilePreviewValue = tmp(tmp2[11]).getProfilePreviewValue(obj3);
          cResult[5] = guildId;
          cResult[6] = pendingAvatarDecoration;
          cResult[7] = avatarDecoration;
          cResult[8] = avatarDecoration1;
          cResult[9] = profilePreviewValue;
          tmp11 = profilePreviewValue;
          const tmpResult6 = tmp(tmp2[11]);
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
      cResult[2] = tmp5;
      cResult[3] = user.id;
      cResult[4] = I;
      tmp8 = I;
    }
  : (user) => {
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
      const obj3 = {
        pendingValue: pendingAvatarDecoration,
        userValue: user.avatarDecoration,
        guildValue: null,
        guildId: null,
      };
      avatarDecoration = undefined;
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
        const result = avatar_decorations_AvatarDecorationUtils.openAvatarDecorationActionSheet({
          user,
          guildId,
          currentAvatarDecoration: userAvatarDecoration,
          isTryItOut,
        });
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
        const obj5 = {
          label: null,
          buttonText: null,
          onPress: null,
          leading: null,
          loading: true,
          disabled: true,
          hideArrow: true,
        };
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
          const obj9 = {
            avatarDecoration: tmp7Result,
            size: COLLECTIBLES_PREVIEW_SIZE - 2 * tmp6(isTryItOut[7]).space.PX_4,
            animate: false,
          };
          obj8.children = jsx(tmp6(isTryItOut[15]), {
            avatarDecoration: tmp7Result,
            size: COLLECTIBLES_PREVIEW_SIZE - 2 * tmp6(isTryItOut[7]).space.PX_4,
            animate: false,
          });
          let tmp16Result = <closure_5 style={tmp.previewContainer}>{null}</closure_5>;
          const tmp6Result = tmp6(isTryItOut[15]);
        } else {
          const obj10 = { source: tmp6(isTryItOut[17]), style: tmp.noneIcon };
          tmp16Result = jsx(tmp3(isTryItOut[16]).Icon, { source: tmp6(isTryItOut[17]), style: tmp.noneIcon });
        }
        obj6.leading = tmp16Result;
      }
      return jsx(user(isTryItOut[19]).UserProfileEditFormButton, obj6);
    };
