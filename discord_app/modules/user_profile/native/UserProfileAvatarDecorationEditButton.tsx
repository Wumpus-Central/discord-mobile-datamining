// discord_app/modules/user_profile/native/UserProfileAvatarDecorationEditButton.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../discord_common/js/shared/Constants.tsx";
import native from "../../../design/void/native.tsx";
import Constants2 from "Constants.tsx";
import avatar_decorations_AvatarDecorationUtils from "../../collectibles/avatar_decorations/native/AvatarDecorationUtils.tsx";
import CutoutableAvatarDecorationDefault from "../../collectibles/native/components/CutoutableAvatarDecoration.tsx";
import AssetRegistryDefault from "../../../../_runtime/13011_AssetRegistry.js";
import react_mod from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import GuildMemberStore_mod from "../../../stores/GuildMemberStore.tsx";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let avatarDecoration, user;

let closure_4;
let hasOwnProperty;
let obj2;
let size;
let react = react_mod;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
let GuildMemberStore = GuildMemberStore_mod;
const COLLECTIBLES_PREVIEW_SIZE = Constants2.COLLECTIBLES_PREVIEW_SIZE;
const NOOP = Constants.NOOP;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { previewContainer: size, noneIcon: obj2 };
size = {
  position: "relative",
  height: COLLECTIBLES_PREVIEW_SIZE,
  width: COLLECTIBLES_PREVIEW_SIZE,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.xs,
  overflow: "hidden",
};
createStyles = createStyles.createStyles;
obj2 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_10 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      let closure_3;
      let first;
      let isTryItOut;
      let pendingAvatarDecoration;
      let obj = user(isTryItOut[9]);
      const cResult = obj.c(39);
      user = user.user;
      const guildId = user.guildId;
      ({ pendingAvatarDecoration, isTryItOut } = user);
      const tmp4 = closure_10();
      react = tmp4;
      let tmp5 = null != guildId;
      let closure_4 = tmp5;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let tmp7 = GuildMemberStore;
        const items = [GuildMemberStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === guildId) {
        if (cResult[2] === tmp5) {
          let tmp8;
          if (cResult[3] === user.id) {
            tmp8 = cResult[4];
          }
          const tmpResult = user(isTryItOut[10]);
          const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
          avatarDecoration = user.avatarDecoration;
          let avatarDecoration1;
          if (stateFromStores != null) {
            avatarDecoration1 = stateFromStores.avatarDecoration;
          }
          if (cResult[5] === guildId) {
            if (cResult[6] === pendingAvatarDecoration) {
              if (cResult[7] === avatarDecoration) {
                let tmp11;
                if (cResult[8] === avatarDecoration1) {
                  tmp11 = cResult[9];
                }
                const tmp14 = guildId(tmp2[12])(tmp11);
                avatarDecoration = tmp14;
                let skuId;
                const useFetchCollectiblesProduct = user(isTryItOut[13]).useFetchCollectiblesProduct;
                user(isTryItOut[13]);
                if (tmp14 != null) {
                  skuId = tmp14.skuId;
                }
                const fetchCollectiblesProduct = useFetchCollectiblesProduct(skuId);
                const product = fetchCollectiblesProduct.product;
                GuildMemberStore = product;
                if (cResult[10] === guildId) {
                  let tmp18;
                  if (cResult[11] === user) {
                    tmp18 = cResult[12];
                  }
                  const tmpResult5 = user(isTryItOut[11]);
                  let userAvatarDecoration = tmpResult5.useUserAvatarDecoration(tmp18);
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
                                  let tmp7;
                                  if (null != GuildMemberStore) {
                                    ({
                                      avatarDecoration,
                                      size: COLLECTIBLES_PREVIEW_SIZE - 2 * nativeDefault.space.PX_4,
                                      animate: false,
                                    });
                                    CutoutableAvatarDecorationDefault;
                                    tmp7 = <hasOwnProperty style={closure_3.previewContainer}>{null}</hasOwnProperty>;
                                  } else {
                                    const Icon = native.Icon;
                                    tmp7 = <Icon source={AssetRegistryDefault} style={closure_3.noneIcon} />;
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
                                    let tmp7;
                                    if (null != GuildMemberStore) {
                                      ({
                                        avatarDecoration,
                                        size: COLLECTIBLES_PREVIEW_SIZE - 2 * nativeDefault.space.PX_4,
                                        animate: false,
                                      });
                                      CutoutableAvatarDecorationDefault;
                                      tmp7 = <hasOwnProperty style={closure_3.previewContainer}>{null}</hasOwnProperty>;
                                    } else {
                                      const Icon = native.Icon;
                                      tmp7 = <Icon source={AssetRegistryDefault} style={closure_3.noneIcon} />;
                                    }
                                    return tmp7;
                                  }
                                }
                              }
                              let formatToPlainStringResult = name;
                              if (tmp5) {
                                const intl = tmp(tmp2[18]).intl;
                                const formatToPlainString = intl.formatToPlainString;
                                class M {
                                  constructor() {
                                    let tmp7;
                                    if (null != GuildMemberStore) {
                                      ({
                                        avatarDecoration,
                                        size: COLLECTIBLES_PREVIEW_SIZE - 2 * nativeDefault.space.PX_4,
                                        animate: false,
                                      });
                                      CutoutableAvatarDecorationDefault;
                                      tmp7 = <hasOwnProperty style={closure_3.previewContainer}>{null}</hasOwnProperty>;
                                    } else {
                                      const Icon = native.Icon;
                                      tmp7 = <Icon source={AssetRegistryDefault} style={closure_3.noneIcon} />;
                                    }
                                    return tmp7;
                                  }
                                }
                                tmp25[0] = name;
                                formatToPlainStringResult = formatToPlainString(tmp(tmp2[18]).t.ep5D4i, tmp25);
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
                            let tmp7;
                            if (null != GuildMemberStore) {
                              ({
                                avatarDecoration,
                                size: COLLECTIBLES_PREVIEW_SIZE - 2 * nativeDefault.space.PX_4,
                                animate: false,
                              });
                              CutoutableAvatarDecorationDefault;
                              tmp7 = <hasOwnProperty style={closure_3.previewContainer}>{null}</hasOwnProperty>;
                            } else {
                              const Icon = native.Icon;
                              tmp7 = <Icon source={AssetRegistryDefault} style={closure_3.noneIcon} />;
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
                    const obj = avatar_decorations_AvatarDecorationUtils;
                    const obj2 = { user, guildId, currentAvatarDecoration: userAvatarDecoration, isTryItOut };
                    const result = obj.openAvatarDecorationActionSheet(obj2);
                  };
                  cResult[13] = userAvatarDecoration;
                  cResult[14] = guildId;
                  cResult[15] = isTryItOut;
                  cResult[16] = user;
                  cResult[17] = fn;
                }
                let obj2 = { user, guildId };
                cResult[10] = guildId;
                cResult[11] = user;
                cResult[12] = obj2;
                tmp18 = obj2;
              }
            }
          }
          const obj3 = {
            pendingValue: pendingAvatarDecoration,
            userValue: avatarDecoration,
            guildValue: avatarDecoration1,
            guildId,
          };
          const tmpResult6 = user(isTryItOut[11]);
          const profilePreviewValue = tmpResult6.getProfilePreviewValue(obj3);
          cResult[5] = guildId;
          cResult[6] = pendingAvatarDecoration;
          cResult[7] = avatarDecoration;
          cResult[8] = avatarDecoration1;
          cResult[9] = profilePreviewValue;
          tmp11 = profilePreviewValue;
        }
      }
      class I {
        constructor() {
          let member = null;
          if (closure_4) {
            member = GuildMemberStore.getMember(guildId, user.id);
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
      let closure_3;
      let intl3;
      let intl4;
      let intl5;
      let isFetching;
      let isTryItOut;
      let obj5;
      let obj6;
      let pendingAvatarDecoration;
      let product;
      let tmp18Result;
      user = user.user;
      const guildId = user.guildId;
      ({ pendingAvatarDecoration, isTryItOut } = user);
      let userAvatarDecoration;
      const tmp = closure_10();
      react = tmp2;
      let obj = user(isTryItOut[10]);
      const items = [GuildMemberStore];
      const stateFromStores = obj.useStateFromStores(items, () => {
        let member = null;
        if (closure_3) {
          member = GuildMemberStore.getMember(guildId, user.id);
        }
        return member;
      });
      let obj2 = {
        pendingValue: pendingAvatarDecoration,
        userValue: user.avatarDecoration,
        guildValue: avatarDecoration,
        guildId,
      };
      avatarDecoration = undefined;
      const tmp7 = guildId(isTryItOut[12]);
      const getProfilePreviewValue = user(isTryItOut[11]).getProfilePreviewValue;
      user(isTryItOut[11]);
      if (stateFromStores != null) {
        avatarDecoration = stateFromStores.avatarDecoration;
      }
      const tmp7Result = tmp7(getProfilePreviewValue(obj2));
      let skuId;
      const useFetchCollectiblesProduct = user(isTryItOut[13]).useFetchCollectiblesProduct;
      user(isTryItOut[13]);
      if (tmp7Result != null) {
        skuId = tmp7Result.skuId;
      }
      const fetchCollectiblesProduct = useFetchCollectiblesProduct(skuId);
      ({ product, isFetching } = fetchCollectiblesProduct);
      const tmp3Result2 = user(isTryItOut[11]);
      userAvatarDecoration = tmp3Result2.useUserAvatarDecoration({ user, guildId });
      if (undefined !== pendingAvatarDecoration) {
        userAvatarDecoration = pendingAvatarDecoration;
      }
      const items1 = [user, guildId, userAvatarDecoration, isTryItOut];
      let name;
      const callback = react.useCallback(() => {
        const obj = avatar_decorations_AvatarDecorationUtils;
        const obj2 = { user, guildId, currentAvatarDecoration: userAvatarDecoration, isTryItOut };
        const result = obj.openAvatarDecorationActionSheet(obj2);
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
          const obj3 = { label: name };
          formatToPlainStringResult = intl2.formatToPlainString(tmp3(isTryItOut[18]).t.ep5D4i, obj3);
        }
      }
      const UserProfileEditFormButton = tmp3(isTryItOut[19]).UserProfileEditFormButton;
      if (isFetching) {
        const obj4 = {
          label: intl4.string(user(isTryItOut[18]).t["7v0T9P"]),
          buttonText: intl5.string(user(isTryItOut[18]).t.MKDeyL),
          onPress: NOOP,
          leading: null,
          loading: true,
          disabled: true,
          hideArrow: true,
        };
        intl4 = tmp3(isTryItOut[18]).intl;
        intl5 = tmp3(isTryItOut[18]).intl;
        obj5 = obj4;
      } else {
        obj5 = {
          label: intl3.string(user(isTryItOut[18]).t["7v0T9P"]),
          buttonText: formatToPlainStringResult,
          accessibilityValue: obj6,
          onPress: callback,
          leading: tmp18Result,
        };
        intl3 = tmp3(isTryItOut[18]).intl;
        obj6 = { text: formatToPlainStringResult };
        if (null != product) {
          ({
            avatarDecoration: tmp7Result,
            size: COLLECTIBLES_PREVIEW_SIZE - 2 * guildId(isTryItOut[7]).space.PX_4,
            animate: false,
          });
          guildId(isTryItOut[15]);
          tmp18Result = <closure_5 style={tmp.previewContainer}>{null}</closure_5>;
        } else {
          const Icon = tmp3(isTryItOut[16]).Icon;
          tmp18Result = <Icon source={guildId(isTryItOut[17])} style={tmp.noneIcon} />;
        }
      }
      return <UserProfileEditFormButton {...obj5} />;
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAvatarDecorationEditButton.tsx");

export default tmp4;
