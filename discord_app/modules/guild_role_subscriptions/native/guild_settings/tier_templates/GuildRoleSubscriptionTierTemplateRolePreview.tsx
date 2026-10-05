// discord_app/modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateRolePreview.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import useStateFromStores from "../../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtilsAll from "../../../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import intl2 from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import NicknameUtilsDefault from "../../../../../utils/NicknameUtils.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import RoleIconDefault from "../../../../roles/native/RoleIcon.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import UserStore from "../../../../../stores/UserStore.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = {
  container: obj2,
  avatar: { width: 40, height: 40, borderRadius: 20 },
  content: { marginStart: 16 },
  contextRow: { flexDirection: "row", alignItems: "center" },
};
obj2 = {
  flexDirection: "row",
  padding: 16,
  borderRadius: nativeDefault.radii.xs,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
let closure_8 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let content;
      let content2;
      let contextRow;
      let currentUser;
      let guildId;
      let items1;
      let items2;
      let items3;
      let roleColor;
      let roleImage;
      let roleName;
      let style;
      let textStyle;
      let tmp4;
      let tmp7;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(40);
      ({ content, style, textStyle, roleColor, roleImage, roleName, guildId } = arg0);
      if (cResult[0] !== content) {
        let stringResult = content;
        if (undefined === content) {
          const intl = intl2.intl;
          stringResult = intl.string(intl2.t["6OSasb"]);
        }
        cResult[0] = content;
        cResult[1] = stringResult;
        tmp4 = stringResult;
      } else {
        tmp4 = cResult[1];
      }
      const tmp6 = closure_8();
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function f() {
          return currentUser.getCurrentUser();
        };
        cResult[2] = items;
        cResult[3] = fn;
        tmp8 = fn;
        tmp7 = items;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = useStateFromStores;
      const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
      const obj3 = NicknameUtilsDefault;
      const name = obj3.useName(guildId, null, stateFromStores);
      if (cResult[4] === style) {
        let tmp13;
        let tmp14;
        if (cResult[5] === tmp6.container) {
          tmp13 = cResult[6];
        }
        if (cResult[7] !== roleImage) {
          const obj2 = { uri: roleImage };
          cResult[7] = roleImage;
          cResult[8] = obj2;
          tmp14 = obj2;
        } else {
          tmp14 = cResult[8];
        }
        if (cResult[9] === tmp6.avatar) {
          let tmp15;
          let tmp18;
          let tmp21;
          if (cResult[10] === tmp14) {
            tmp15 = cResult[11];
          }
          ({ content: content2, contextRow } = tmp6);
          if (cResult[12] !== roleColor) {
            const obj6 = utils_ColorUtilsAll;
            const int2hexResult = obj6.int2hex(roleColor);
            cResult[12] = roleColor;
            cResult[13] = int2hexResult;
            tmp18 = int2hexResult;
          } else {
            tmp18 = cResult[13];
          }
          if (cResult[14] !== tmp18) {
            const obj4 = { color: tmp18 };
            cResult[14] = tmp18;
            cResult[15] = obj4;
            tmp21 = obj4;
          } else {
            tmp21 = cResult[15];
          }
          if (cResult[16] === name) {
            let tmp22;
            let tmp25;
            if (cResult[17] === tmp21) {
              tmp22 = cResult[18];
            }
            const _Symbol = Symbol;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp27 = metroRequire(native.Spacer, { size: 4 });
              cResult[19] = tmp27;
              tmp25 = tmp27;
            } else {
              tmp25 = cResult[19];
            }
            if (cResult[20] === roleImage) {
              let tmp28;
              let tmp32;
              let tmp31;
              if (cResult[21] === roleName) {
                tmp28 = cResult[22];
              }
              const _Symbol2 = Symbol;
              if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp34 = metroRequire(native.Spacer, { size: 8 });
                const tmp35 = metroRequire(Text_Text.Text, {
                  variant: "text-xs/medium",
                  color: "text-muted",
                  children: "4:20 PM",
                });
                cResult[23] = tmp34;
                cResult[24] = tmp35;
                tmp32 = tmp35;
                tmp31 = tmp34;
              } else {
                tmp31 = cResult[23];
                tmp32 = cResult[24];
              }
              if (cResult[25] === tmp6.contextRow) {
                if (cResult[26] === tmp22) {
                  let tmp36;
                  if (cResult[27] === tmp28) {
                    tmp36 = cResult[28];
                  }
                  if (cResult[29] === tmp4) {
                    let tmp40;
                    if (cResult[30] === textStyle) {
                      tmp40 = cResult[31];
                    }
                    if (cResult[32] === tmp6.content) {
                      if (cResult[33] === tmp36) {
                        let tmp43;
                        if (cResult[34] === tmp40) {
                          tmp43 = cResult[35];
                        }
                        if (cResult[36] === tmp43) {
                          if (cResult[37] === tmp13) {
                            let tmp47;
                            if (cResult[38] === tmp15) {
                              tmp47 = cResult[39];
                            }
                            return tmp47;
                          }
                        }
                        const obj5 = { style: tmp13, children: items1 };
                        items1 = [tmp15, tmp43];
                        const tmp50 = metroImportDefault(View, obj5);
                        cResult[36] = tmp43;
                        cResult[37] = tmp13;
                        cResult[38] = tmp15;
                        cResult[39] = tmp50;
                        tmp47 = tmp50;
                      }
                    }
                    const obj7 = { style: content2, children: items2 };
                    items2 = [tmp36, tmp40];
                    const tmp46 = metroImportDefault(View, obj7);
                    cResult[32] = tmp6.content;
                    cResult[33] = tmp36;
                    cResult[34] = tmp40;
                    cResult[35] = tmp46;
                    tmp43 = tmp46;
                  }
                  const obj8 = { variant: "text-md/normal", color: "text-default", style: textStyle, children: tmp4 };
                  const tmp42 = metroRequire(Text_Text.Text, obj8);
                  cResult[29] = tmp4;
                  cResult[30] = textStyle;
                  cResult[31] = tmp42;
                  tmp40 = tmp42;
                }
              }
              const obj9 = { style: contextRow, children: items3 };
              items3 = [tmp22, tmp25, tmp28, tmp31, tmp32];
              const tmp39 = metroImportDefault(View, obj9);
              cResult[25] = tmp6.contextRow;
              cResult[26] = tmp22;
              cResult[27] = tmp28;
              cResult[28] = tmp39;
              tmp36 = tmp39;
            }
            const obj10 = { name: roleName, src: roleImage, size: 16 };
            const tmp30 = metroRequire(RoleIconDefault, obj10);
            cResult[20] = roleImage;
            cResult[21] = roleName;
            cResult[22] = tmp30;
            tmp28 = tmp30;
          }
          const obj11 = { variant: "text-md/semibold", color: "interactive-text-active", style: tmp21, children: name };
          const tmp24 = metroRequire(Text_Text.Text, obj11);
          cResult[16] = name;
          cResult[17] = tmp21;
          cResult[18] = tmp24;
          tmp22 = tmp24;
        }
        const obj12 = { style: tmp6.avatar, source: tmp14 };
        const tmp17 = metroRequire(FastImageDefault, obj12);
        cResult[9] = tmp6.avatar;
        cResult[10] = tmp14;
        cResult[11] = tmp17;
        tmp15 = tmp17;
      }
      const items4 = [tmp6.container, style];
      cResult[4] = style;
      cResult[5] = tmp6.container;
      cResult[6] = items4;
      tmp13 = items4;
    }
  : (content) => {
      let currentUser;
      let guildId;
      let items1;
      let items2;
      let items3;
      let items4;
      let obj8;
      let obj9;
      let roleColor;
      let roleName;
      let style;
      let textStyle;
      content = content.content;
      if (content === undefined) {
        const intl = intl2.intl;
        content = intl.string(intl2.t["6OSasb"]);
      }
      const roleImage = content.roleImage;
      ({ style, textStyle, roleColor, roleName, guildId } = content);
      const tmp3 = closure_8();
      const items = [UserStore];
      const obj = useStateFromStores;
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      const obj3 = { style: items1, children: items2 };
      items1 = [tmp3.container, style];
      const obj2 = NicknameUtilsDefault;
      const name = obj2.useName(guildId, null, stateFromStores);
      items2 = [,];
      const obj4 = { style: tmp3.avatar, source: { uri: roleImage } };
      items2[0] = metroRequire(FastImageDefault, obj4);
      const obj5 = { style: tmp3.content, children: items4 };
      const obj6 = { style: tmp3.contextRow, children: items3 };
      const obj7 = { variant: "text-md/semibold", color: "interactive-text-active", style: obj8, children: name };
      obj8 = { color: obj9.int2hex(roleColor) };
      const Text = Text_Text.Text;
      obj9 = utils_ColorUtilsAll;
      items3 = [
        metroRequire(Text, obj7),
        metroRequire(native.Spacer, { size: 4 }),
        metroRequire(RoleIconDefault, { name: roleName, src: roleImage, size: 16 }),
        metroRequire(native.Spacer, { size: 8 }),
        metroRequire(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: "4:20 PM" }),
      ];
      items4 = [
        metroImportDefault(View, obj6),
        metroRequire(Text_Text.Text, {
          variant: "text-md/normal",
          color: "text-default",
          style: textStyle,
          children: content,
        }),
      ];
      items2[1] = metroImportDefault(View, obj5);
      return metroImportDefault(View, obj3);
    };
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateRolePreview.tsx",
);

export const GuildRoleSubscriptionRolePreview = tmp4;
